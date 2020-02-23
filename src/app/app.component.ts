import { Component,ViewChild,AfterViewInit,ViewChildren,QueryList } from '@angular/core';
import { AppSecondary } from '../secondary/secondary.component'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  
  @ViewChild(AppSecondary,{static : false})
  card : AppSecondary

  @ViewChildren(AppSecondary)
  card1 : QueryList<AppSecondary>

  parentItems = ['Virat Kohli','Eoin Morgan','Kane Williamson']

  ngAfterViewInit() {
    console.log(this.card);
    console.log(this.card1)
  }

}
