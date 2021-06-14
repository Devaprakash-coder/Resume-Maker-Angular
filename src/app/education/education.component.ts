import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  eduForm:any;
  education:any={};
  constructor(private fb: FormBuilder, private appservice: AppServiceService, private router: Router) { }

  ngOnInit(): void {
    this.eduForm = this.fb.group({
      collage:['',Validators.required],
      cstate:['',Validators.required],
      ccity:['',Validators.required],
    })
  }
  onSubmit(eduForm : FormGroup) {
    this.education=this.eduForm.value;
    this.appservice.geteducation(this.education)
    this.router.navigate(['/certificates']);
  }
}
