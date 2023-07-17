import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { AssessmentsQuestionsComponent } from './assessments-questions/assessments-questions.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'assessment',
    component: AssessmentComponent
  },
  {
    path:'questions',
    component: AssessmentsQuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
