import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { CertificationsComponent } from './certifications/certifications.component'
import { AdditionalSkillsComponent } from './additional-skills/additional-skills.component'
import { ResumeComponent } from './resume/resume.component'

const routes: Routes = [
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
  {path: 'contact', component: ContactInfoComponent},
  {path: 'work', component: WorkExperienceComponent},
  {path: 'education', component: EducationComponent},
  {path: 'certificates', component: CertificationsComponent},
  {path: 'skills', component: AdditionalSkillsComponent},
  {path: 'resume', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
