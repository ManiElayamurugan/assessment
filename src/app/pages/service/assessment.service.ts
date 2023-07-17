import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  private baseUrl = 'assets/assessment-mock.json';
  constructor(private http : HttpClient) { }

  getAssessmentList() {
    return this.http.get(this.baseUrl)
  }
}
