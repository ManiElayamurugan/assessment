import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  private baseUrl = 'assets/assessment-mock.json';
  private myBehaviorSubject = new BehaviorSubject<string>('default value');
  public sendData=new Subject();
  constructor(private http : HttpClient) { }

  getAssessmentList() {
    return this.http.get(this.baseUrl)
  }
  getSelectedData(data:any) {
    this.myBehaviorSubject.next(data);
  }

  sendIt(reciver:any){
    console.log('reciver',reciver);
    
    this.sendData.next(reciver)
  }
}
