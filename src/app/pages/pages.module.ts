import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssessmentComponent } from './assessment/assessment.component';
import { NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbThemeModule } from '@nebular/theme';

@NgModule({
  declarations: [
    LoginComponent,
    AssessmentComponent
  ],
  imports: [
    CommonModule,
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
    NbFormFieldModule
  ]
})
export class PagesModule { }
