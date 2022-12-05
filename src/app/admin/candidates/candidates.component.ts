import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import Swal from 'sweetalert2';
import { AdminService ,CANDIDATE } from '../admin.service';
@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  candidates: CANDIDATE[] = [];
  tableName = 'Candidates';
  constructor(private adminservice: AdminService) {}

  ngOnInit(): void {
    this.adminservice.getCandidates();this.candidates.subscribe((candidates: any) => (this.candidates = candidates));
  }

  onDelete(candidate: CANDIDATE) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminservice
          .deleteCandidate(candidate)
          candidate.subscribe(
            () => (this.candidates= this.candidates.filter((t) => t.id !== candidate.id))
          );
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        this.candidates = this.candidates.filter((t) => t.id !== candidate.id);
      }
    });
  }
  getRoleName(id: number) {
    return id == 0 ? 'Super Admin' : 'Admin';
  }
}
