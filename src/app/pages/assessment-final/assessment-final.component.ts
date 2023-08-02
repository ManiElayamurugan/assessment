import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssessmentService } from '../service/assessment.service';

@Component({
  selector: 'app-assessment-final',
  templateUrl: './assessment-final.component.html',
  styleUrls: ['./assessment-final.component.scss']
})
export class AssessmentFinalComponent {
  assessmentData?: Array<any>;
  assessmentList?: Array<any>;
  assessmentListArray: any = [];
  currentQuestionIndex = 0;
  indexOfPrevious?: number;
  optionArr: any = [];
  selectedOption?: false;
  innerText: any;
  showContent?: boolean = false;
  currentStepIndex = 0;

  constructor(private assessmentService: AssessmentService,
    private route: ActivatedRoute) {
    console.log('this.route.queryParams', this.route.queryParams)
  }

  ngOnInit(): void {
    this.getAssessmentList();
  }

  getAssessmentList() {
    this.assessmentService.getAssessmentList().subscribe((data: any) => {
      this.assessmentData = data.items;
      console.log('this.assessmentData', this.assessmentData);
      this.assessmentData?.forEach((item: any) => {
        this.assessmentList = item
        console.log('item',item);
        this.assessmentListArray.push(this.assessmentList)
        console.log('assssssssssssss',this.assessmentListArray);
        console.log('list', this.assessmentListArray);
      })
    })
  }

  nextQuestion() {
    this.currentQuestionIndex++
    this.showContent = false
  }
  onCheck(event: any) {
    console.log('++++++++', event)
    this.innerText = event.target.innerText
    console.log('-------', this.innerText)
    if (this.innerText != '') {
      this.showContent = true;
    }
  }
  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }
  restart() {
    this.currentQuestionIndex = 0;
    this.selectedOption
  }
   moveToNextStep() {
    if (this.currentStepIndex < this.assessmentListArray.length - 1) {
      this.currentStepIndex++;
    }
  }
}
