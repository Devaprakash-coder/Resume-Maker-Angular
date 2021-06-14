import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-additional-skills',
  templateUrl: './additional-skills.component.html',
  styleUrls: ['./additional-skills.component.css']
})
export class AdditionalSkillsComponent implements OnInit {
  skillForm:any;
  skill:any={};
  constructor(private fb: FormBuilder, private appservice: AppServiceService, private router: Router) { }

  get skillControl(){
    return (<FormArray>this.skillForm.get('skills')).controls;
  }
  ngOnInit(): void {
    this.skillForm = this.fb.group({
      skills:new FormArray([])
      })
  }
  onSubmit(skillForm : FormGroup) {
    this.skill=this.skillForm.value;
    this.appservice.getskill(this.skill)
    this.router.navigate(['/resume']);
  }
  add() {
    const control = new FormControl(null)
    this.skillForm.get('skills').push(control)    
  }
}
