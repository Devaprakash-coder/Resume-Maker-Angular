import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder, EmailValidator} from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  months: any[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: any[] = [];
  workForm:any;
  work:any={};
  constructor(private fb: FormBuilder, private appservice: AppServiceService, private router: Router) { }

  ngOnInit(): void {
    for (let index = 0; index < 50; index++) {
      this.years.push(1972+index)
    }
      this.workForm = this.fb.group({
        jtitle:['',Validators.required],
        cname:['',Validators.required],
        jstate:['',Validators.required],
        jcity:['',Validators.required],
        smonth:['',Validators.required],
        emonth:[''],
        syear:['',Validators.required],
        eyear:[''],
      })
  }
    onSubmit(workForm : FormGroup) {
      
    this.work=this.workForm.value;
    this.appservice.getwork(this.work)
    this.router.navigate(['/education']);
    }
  }
