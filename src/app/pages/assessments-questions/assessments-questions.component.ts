import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../service/assessment.service';

@Component({
  selector: 'app-assessments-questions',
  templateUrl: './assessments-questions.component.html',
  styleUrls: ['./assessments-questions.component.scss']
})
export class AssessmentsQuestionsComponent implements OnInit {
  assessmentData?: Array<any>;
  assessmentList?: Array<any>;
  assessmentListArray: any = [];
  currentQuestionIndex = 0;
  indexOfPrevious?: number;
  optionArr: any = [];

  constructor(private assessmentService: AssessmentService) { }

  ngOnInit(): void {
    this.getAssessmentList();
  }

  getAssessmentList() {
    this.assessmentService.getAssessmentList().subscribe((data: any) => {
      this.assessmentData = data.items;
      console.log('this.assessmentData', this.assessmentData);
      this.assessmentData?.forEach((item: any) => {
        this.assessmentList = item
        this.assessmentListArray.push(this.assessmentList)
        console.log('list', this.assessmentListArray);
      })
    })
  }

  nextQuestion() {
    this.currentQuestionIndex++
  }
}
