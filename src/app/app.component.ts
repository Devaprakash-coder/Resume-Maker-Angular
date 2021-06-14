import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  work:boolean = false;
  education:boolean = false;
  certificate:boolean = false;
  skill:boolean = false;
  constructor(private appservice:AppServiceService){}
  
  ngOnInit(): void {
    this.work = this.appservice.workBtn;
  }

}
