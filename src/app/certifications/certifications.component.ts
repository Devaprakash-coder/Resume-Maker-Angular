import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service'

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  certForm: any;
  certificate: any = {};
  constructor(private appservice: AppServiceService, private router: Router, private fb: FormBuilder) { }

  get certificateControl() {
    return (<FormArray>this.certForm.get('certificates')).controls;
  }
  ngOnInit(): void {
    this.certForm = this.fb.group({
     certificates: new FormArray([])
    })
  }
  onSubmit(certForm: FormGroup) {
    this.certificate = this.certForm.value;
    this.appservice.getcertificate(this.certificate)
    this.router.navigate(['/skills']);
  }
  add() {
    const control = new FormControl(null);
    this.certForm.get('certificates').push(control);
  }
}
