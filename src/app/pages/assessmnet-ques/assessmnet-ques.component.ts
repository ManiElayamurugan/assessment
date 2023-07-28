import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssessmentService } from '../service/assessment.service';
import { style } from '@angular/animations';

@Component({
  selector: 'app-assessmnet-ques',
  templateUrl: './assessmnet-ques.component.html',
  styleUrls: ['./assessmnet-ques.component.scss']
})
export class AssessmnetQuesComponent  implements OnInit{
  searchText?: string;
  items?: { img: string; name:string} [];
  showItems? :{name:string} []
  selectedItem?: any;
  itemsSelectedName?: string;
  show?: boolean = false;
  active
  selectedName: any;
  selectedSubItem: any;

  
  constructor(private router: Router, private api: AssessmentService, private route: ActivatedRoute) {
    console.log('+++++++++++++++++++++++++', this.route.snapshot.queryParams)
    this.active =  this.route.snapshot.queryParams['selectedService']
    console.log(' this.active--', this.active);
    
    this.items = [
      {
        img: '../../../assets/images/AWS.svg',
        name:'AWS'
       
      }, 
      {
        img: '../../../assets/images/Azure.svg',
        name:'Azure'
      }, 
      {
        img: '../../../assets/images/GCP.svg',
        name:'GCP'
      }
   ];

   this.items.forEach((item)=>{
    this.itemsSelectedName = item.name;
    console.log('this.itemsSelectedName',this.itemsSelectedName)
   })

  }

  
  showQuestions(selectedItem: string): void {
    this.selectedItem = selectedItem;
    this.show = true;
    this.router.navigate(['/questions']);
  }
  

  ngOnInit(): void {
    this.api.sendData.subscribe(res=>{
      this.selectedItem = res;
      console.log('selectedItem',this.selectedItem);  
      if(this.selectedItem) {
     this.show = true
     console.log('showww++++0', this.show)
      }
    })
    this.showItems =[
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
   onSelectItem(item:any){
    this.selectedSubItem = item;

   }

}
