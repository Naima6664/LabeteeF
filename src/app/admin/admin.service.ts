import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiUrl } from '../app.variable';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  getCandidates() {
    return this.http.get(ApiUrl.Photos);
  }
  deleteCandidate(candidate: CANDIDATE) {
    return this.http.get(ApiUrl.Photos);
  }
  getSingleemployer(id: any) {
    return this.http.get(ApiUrl.Photos);
  }
  addCandidate(model: any) {
    return this.http.get(ApiUrl.Photos);
  }
  updateCandidate(model: any) {
    return this.http.get(ApiUrl.Photos);
  }
  getSingleCandidate(id: number) {
    return this.http.get(ApiUrl.Photos);
  }
  updateemployer(model: any) {
    return this.http.get(ApiUrl.Photos);
  }
  addemployer(model: any) {
    return this.http.get(ApiUrl.Photos);
  }
  getemployer() {
    return this.http.get(ApiUrl.Photos);
  }

  constructor(private http: HttpClient) {}
}
export interface EMPLOYER {
  subscribe(arg0: () => EMPLOYER[]): unknown;
  id?: number;
  full_name: string;
  employer_name: string;
  email: string;
  place: string;
  job_type: string;
  job_describtion: string;
  salary: number;
  password: string;
  role_id: number;
}
export interface CANDIDATE {
  First: any;
  job: any;
  subscribe(arg0: () => CANDIDATE[]): unknown;
  id?: number;
  First_name: String;
  Last_name: String;
  Place: String;
  Language: String;
  job_type: String;
  Expriance: String;
  salary: number;
  role_id: number;
}
