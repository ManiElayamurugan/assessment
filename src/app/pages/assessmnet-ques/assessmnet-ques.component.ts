import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessmnet-ques',
  templateUrl: './assessmnet-ques.component.html',
  styleUrls: ['./assessmnet-ques.component.scss']
})
export class AssessmnetQuesComponent  implements OnInit{
  searchText?: string;
  items?: { name: string; }[];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.items = [
      {
        name: 'Security Governance',
      }, 
      {
        name: 'Identity & Access Management', 
      },
       {
        name: 'Threat Detection', 
      },
      {
        name: 'Infrastructure Protection', 
      },
      {
        name: 'Data Protection', 
      },
      {
        name: 'Application Security', 
      },
      {
        name: 'Incident response', 
      },
      {
        name: 'Vulnerability Management', 
      },
      {
        name: 'Application Security', 
      },
   ];
   }
   showQuestions(){
    this.router.navigate(['/questions']);
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
