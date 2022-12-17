import { Component, OnInit } from '@angular/core';

import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  login = {
    username: '',
    password: '',
  };
  // form = new UntypedFormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'username',
        placeholder: 'Enter username',
        required: true,
      }
    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }

  constructor() { }

  ngOnInit(): void {

  }

}
