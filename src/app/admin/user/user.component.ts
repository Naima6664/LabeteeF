import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  tableName = '';
  constructor() {}

  ngOnInit(): void {}
  onDelete(data: any) {}
  getRoleName(data: any) {}
}
