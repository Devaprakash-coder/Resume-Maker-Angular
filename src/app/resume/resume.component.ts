import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  @ViewChild('htmlData')
  htmlData!: ElementRef;

contacts:any[]=[];
works:any[]=[];
educations:any[]=[];
certificates:any[]=[];
skills:any[]=[];
  constructor(private appservice: AppServiceService) { }

  ngOnInit(): void {
  this.contacts.push(this.appservice.contact);
  this.works.push(this.appservice.work);
  this.educations.push(this.appservice.education);
  this.certificates = (this.appservice.certificate.certificates);
  this.skills = (this.appservice.skill.skills); 
  }
  public openPDF():void {
    let DATA = document.getElementById('htmlData')!;
      
    html2canvas(DATA, { scale: 5}).then(canvas => {
  
        let fileWidth = 21.0;
          
        let fileHeight = 27.0;
            
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'cm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight, undefined, "FAST")
        PDF.save('Resume.pdf');
    });     
  }
}