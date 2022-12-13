import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService, EMPLOYER } from '../admin.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  employers: EMPLOYER[] = [];
  tableName = 'employer';
  constructor(private adminservice: AdminService) {}

  ngOnInit(): void {
    this.adminservice.getemployer();this.employers.subscribe((employer: EMPLOYER[]) => (this.employers = employer));
  }

  onDelete(employer:  EMPLOYER) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        this.adminservice
          .getemployer()
         employer .subscribe(
            () => (this.employers = this.employers.filter((t) => t.id !== employer.id))
          );
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        this.employers = this.employers.filter((t) => t.id !== employer.id);
      }
    });
  }
  getRoleName(id: number) {
    return id == 0 ? 'Super Admin' : 'Admin';
  }
}