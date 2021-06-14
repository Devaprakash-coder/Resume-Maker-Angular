import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }
contact:any;
work:any;
education:any;
certificate:any;
skill:any;

workBtn: boolean = false;

  getcontact(contact: any){
    this.contact = contact;
  }
  getwork(work: any){
    this.work = work;
  }
  geteducation(education: any){
    this.education = education;
  }
  getcertificate(certificate: any){
    this.certificate = certificate;
  }
  getskill(skill: any){
    this.skill = skill;
  }
}
