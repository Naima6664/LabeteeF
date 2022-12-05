import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  User: any = [];
  constructor(private loginservice: LoginService) {}

  ngOnInit(): void {
    this.loginservice.user().subscribe((data) => (this.User = data));
  }
  async onSubmit(data: any) {
    var res = await this.loginservice.login(data).toPromise();
  }
}
