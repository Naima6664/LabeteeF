import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/Forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Router } from 'express';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-candidates-form',
  templateUrl: './candidates-form.component.html',
  styleUrls: ['./candidates-form.component.scss']
})
export class CandidatesFormComponent implements OnInit {

  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  options: FormlyFormOptions = {};
  formname: string = 'User';
  isTypeEdit: any = null;
  id: any = null;
  data: any = null;

  constructor(
    private adminservice: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log('type', queryParams['type']);
      console.log('id', queryParams['id']);
      this.isTypeEdit = queryParams['type'];
      this.id = queryParams['id'];
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log('type', queryParams['type']);
      console.log('id', queryParams['id']);
      this.isTypeEdit = queryParams['type'];
      this.id = queryParams['id'];
      this.fetchDataForEdit();
    });
    if (this.id == null) {
      this.fields = [
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            label: 'Full Name',
            placeholder: 'Enter Your Full Name',
            required: true,
          },
        },
        {
          key: 'username',
          type: 'input',
          templateOptions: {
            label: 'Enter Username',
            placeholder: 'Enter Your User Name',
            required: true,
          },
        },
        {
          key: 'password',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: 'Enter Password',
            placeholder: 'Enter Users Password',
            required: true,
          },
        },
        {
          key: 'email',
          type: 'input',
          templateOptions: {
            label: 'Enter Email',
            type: 'email',
            placeholder: 'Enter Your email',

            required: true,
          },
        },
        {
          key: 'place',
          type: 'select',
          templateOptions: {
            label: 'Enter place',
            type: 'text',
            placeholder: 'Enter Your email',

            required: true,
          },
        },
        {
          key: 'job type',
          type: 'input',
          templateOptions: {
            label: 'Enter job type',
            options: [
              { label: 'Full Time' },
              { label: 'Part Time' },
              { label: 'child caring' },
              { label: 'cleaning' },
              { label: 'cooking' },
            ],
            required: true,
          },
        },
        {
          key: 'Expriance',
          type: 'textarea',
          templateOptions: {
            label: 'Expriance',
            placeholder: 'Expriance',
  
            required: true,
          },
        },
        {
          key: 'salary',
          type: 'number',
          templateOptions: {
            label: 'salary',
            placeholder: 'Salary of the job',
  
            required: true,
          },
        },
        {
          key: 'role',
          type: 'select',
          templateOptions: {
            label: 'Enter Role',
            options: [
              { label: 'Super Admin', value: 0 },
              { label: 'Admin', value: 1 },
            ],
            required: true,
          },
        },
      ];
    }
  }
  async fetchDataForEdit() {
    var res: any = await this.adminservice.getSingleCandidate(this.id);
    console.log('res : ', res);
    this.data = res[0];
    this.model = {
      name: this.data.full_name,
      username: this.data.user_name,
      email: this.data.email,
      role: this.data.role_id,
      id: this.data.id,
      // id: this.data.id,
    };
    this.fields = [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Full Name',
          placeholder: 'Enter Your Full Name',
          required: true,
        },
      },
      {
        key: 'username',
        type: 'input',
        templateOptions: {
          label: 'Enter Username',
          placeholder: 'Enter Your User Name',
          required: true,
        },
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          type: 'password',
          label: 'Enter New Password',
          placeholder: 'Enter New Password',
          required: true,
        },
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Enter Email',
          type: 'email',
          placeholder: 'Enter Your email',

          required: true,
        },
      },
      {
        key: 'role',
        type: 'select',
        templateOptions: {
          label: 'Enter Role',
          options: [
            { label: 'Super Admin', value: 0 },
            { label: 'Admin', value: 1 },
          ],
          required: true,
        },
      },
    ];
  }

  async onSubmit() {
    if (this.form.valid) {
      var res = await this.adminservice.addCandidate(this.model).toPromise();

      if ((res.statuscode = 200)) {
        this.router.navigate(['admin/candidates']);
        Swal.fire(
          'Successfully created',
          'User Created Sucessfully',
          'success'
        );
      } else {
        console.log(res.er);
      }
    } else {
      // form no vaild
    }
  }

  async onUpdate() {
    if (this.form.valid) {
      var res = await this.adminservice.updateCandidate(this.model).toPromise();

      if (res) {
        this.router.navigate(['admin/users']);
        Swal.fire(
          'Successfully updated',
          'Candidate Uploaded Sucessfully',
          'success'
        );
      } else {
        console.log(res.er);
      }
    } else {
      // form no vaild
    }
  }
}
