import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from '../app.varaible';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(data: any) {
    return this.http.post(ApiUrl.login, data);
  }
  user() {
    return this.http.get(ApiUrl.users);
  }
}
