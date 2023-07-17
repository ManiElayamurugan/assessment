import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  searchText?: string;
  items?: { name: string; }[];

 constructor(private router: Router) {

 }

 ngOnInit(): void {
  this.items = [
    {
      name: 'AWS',
    }, 
    {
      name: 'Azure', 
    },
     {
      name: 'GCP', 
    }
 ];
 }

 showQuestions(){
  this.router.navigate(['/assess-ques']);
  console.log('++++++++++',this.router);
 }

 onSearchChange(searchText: string) {
  const keyword = new RegExp(searchText, 'gi');
  if (searchText != '') {
    this.items = this.items?.filter((i) => {
      return i.name.match(keyword);
    });
  }else{
    this.ngOnInit()
  }
}
}
