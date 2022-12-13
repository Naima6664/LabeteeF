import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/Forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Router } from 'express';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-employer-form',
  templateUrl: './employer-form.component.html',
  styleUrls: ['./employer-form.component.scss']
})
export class EmployerFormComponent implements OnInit {

  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  options: FormlyFormOptions = {};
  formname: string = 'employer';
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
          key: 'employername',
          type: 'input',
          templateOptions: {
            label: 'Enter employername',
            placeholder: 'Enter Your employer Name',
            required: true,
          },
        },
        {
          key: 'password',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: 'Enter Password',
            placeholder: 'Enter employers Password',
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
          key: 'description',
          type: 'textarea',
          templateOptions: {
            label: 'Description',
            placeholder: 'Job Description',
  
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
    var res: any = await this.adminservice.getSingleemployer(this.id).toPromise();
    console.log('res : ', res);
    this.data = res[0];
    this.model = {
      name: this.data.full_name,
      employername: this.data.employer_name,
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
        key: 'employername',
        type: 'input',
        templateOptions: {
          label: 'Enter employername',
          placeholder: 'Enter Your employer Name',
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
        key: 'description',
        type: 'textarea',
        templateOptions: {
          label: 'Description',
          placeholder: 'Job Description',

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

  async onSubmit() {
    if (this.form.valid) {
      var res = await this.adminservice.addemployer(this.model).toPromise();

      if ((res.statuscode = 200)) {
        this.router.navigate(['admin/employers']);
        Swal.fire(
          'Successfully created',
          'employer Created Sucessfully',
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
      var res = await this.adminservice.updateemployer(this.model).toPromise();

      if (res) {
        this.router.navigate(['admin/employers']);
        Swal.fire(
          'Successfully updated',
          'employer Uploaded Sucessfully',
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
