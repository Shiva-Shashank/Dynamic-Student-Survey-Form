// Name - P. Venkata Sai Krishna
// GNumber - G01409009
// This service is used to make API calls for submitting the survey and getting the surveys list
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private apiUrl = 'http://localhost:8081/api'; // Replace with your actual API endpoint
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  constructor(private http: HttpClient) {}

  submitSurvey(formData: FormData,endPoint: String): Observable<any> {
    return this.http.post(this.apiUrl + endPoint, formData,this.httpOptions);
  }

  getSurveys(endPoint: String): Observable<any> {
    return this.http.get(this.apiUrl + endPoint,this.httpOptions);
  }
}
