import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getCandidates() {
    throw new Error('Method not implemented.');
  }
  deleteCandidate(candidate: CANDIDATE) {
    throw new Error('Method not implemented.');
  }
  getSingleemployer(id: any) {
    throw new Error('Method not implemented.');
  }
  addCandidate(model: any) {
    throw new Error('Method not implemented.');
  }
  updateCandidate(model: any) {
    throw new Error('Method not implemented.');
  }
  getSingleCandidate(id: number) {
  return 0;
  }
  updateemployer(model: any) {
    throw new Error('Method not implemented.');
  }
  addemployer(model: any) {
    throw new Error('Method not implemented.');
  }
  getemployer() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}
}
export interface EMPLOYER {
  subscribe(arg0: () => EMPLOYER[]): unknown;
  id?: number;
  full_name: string;
  employer_name: string;
  email: string;
  place:string;
  job_type:string;
  job_describtion:string;
  salary:number;
  password: string;
  role_id: number;
}
export interface CANDIDATE {
First: any;
job: any;
  subscribe(arg0: () => CANDIDATE[]): unknown;
  id?: number;
  First_name:String;
  Last_name:String;
  Place:String;
  Language:String;
  job_type:String;
  Expriance:String;
  salary:number
  role_id: number;
}