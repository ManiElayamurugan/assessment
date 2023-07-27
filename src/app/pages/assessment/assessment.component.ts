import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssessmentService } from '../service/assessment.service';
// import {} from '../../../assets/images/AWS.svg'

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  searchText?: string;
  items?: { img: string, name: string }[];
  callNavButton: any;
  navbarbtn: any;
  itemName?: string;

 constructor(private router: Router, private AssessmentService: AssessmentService) {

 }

 ngOnInit(): void {
  this.items = [
    {
      name:'AWS',
      img: '../../../assets/images/AWS.svg',
    }, 
    {
      name:'Azure',
      img: '../../../assets/images/Azure.svg',
    }, 
    {
      name:'GCP',
      img: '../../../assets/images/GCP.svg',
    }
 ];
 }

 showQuestions(data:string){
  console.log('data++++++ ravi',data)
  this.itemName = data
  this.AssessmentService.sendIt(this.itemName)
  this.router.navigate(['/assess-ques'], {queryParams: {selectedService: data}});
  console.log('++++++++++',this.router);
 }

 onSearchChange(searchText: string) {
  const keyword = new RegExp(searchText, 'gi');
  if (searchText != '') {
    this.items = this.items?.filter((i) => {
      return i.img.match(keyword);
    });
  }else{
    this.ngOnInit()
  }
}
onEdit(){
  if (this.callNavButton) {
    this.navbarbtn?.nativeElement.click()
  }
  window.scrollTo(0,0);
}
}
