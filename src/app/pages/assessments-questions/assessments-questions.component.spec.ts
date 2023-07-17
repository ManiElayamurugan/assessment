import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentsQuestionsComponent } from './assessments-questions.component';

describe('AssessmentsQuestionsComponent', () => {
  let component: AssessmentsQuestionsComponent;
  let fixture: ComponentFixture<AssessmentsQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentsQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
