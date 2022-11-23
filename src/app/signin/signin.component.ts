import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  login = {
    username: '',
    password: '',
  };
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'username',
        placeholder: 'Enter username',
        required: true,
      },
    },
  ];

  onSubmit() {
    console.log();
  }
  onChange(wow: any, data: any) {}

  constructor() {}

  ngOnInit(): void {}
}
