import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssessmentComponent } from './assessment/assessment.component';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbRadioModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AssessmentsQuestionsComponent } from './assessments-questions/assessments-questions.component';

@NgModule({
  declarations: [
    LoginComponent,
    AssessmentComponent,
    AssessmentsQuestionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbInputModule,
    NbCheckboxModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    NbFormFieldModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbRadioModule
  ]
})
export class PagesModule { }
