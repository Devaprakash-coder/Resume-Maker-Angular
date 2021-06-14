import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { AdditionalSkillsComponent } from './additional-skills/additional-skills.component';
import { ResumeComponent } from './resume/resume.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    WorkExperienceComponent,
    EducationComponent,
    CertificationsComponent,
    AdditionalSkillsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
