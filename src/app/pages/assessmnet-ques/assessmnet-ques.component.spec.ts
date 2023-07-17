import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmnetQuesComponent } from './assessmnet-ques.component';

describe('AssessmnetQuesComponent', () => {
  let component: AssessmnetQuesComponent;
  let fixture: ComponentFixture<AssessmnetQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmnetQuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmnetQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
