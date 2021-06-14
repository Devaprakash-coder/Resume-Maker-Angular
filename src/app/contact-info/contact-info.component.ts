import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service'


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
 conForm:any;
 contact:any={};
  constructor(private fb: FormBuilder,private router: Router, private appservice: AppServiceService) { }

  ngOnInit(): void {
    this.conForm = this.fb.group({
      fname:['',Validators.required],
      lname:[''],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(10)]],
      address:['',Validators.required],
      country:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zipcode:['',Validators.required],
    })
  }
  onSubmit(conForm : FormGroup) {
    this.appservice.workBtn = true;
    this.contact=this.conForm.value;
    this.appservice.getcontact(this.contact)
    this.router.navigate(['/work']);
  }

}
