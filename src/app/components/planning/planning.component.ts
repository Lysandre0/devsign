import { Component, OnInit } from '@angular/core';
// import * as moment from 'moment';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',  
    
  };

  
  constructor() { }

    ngOnInit() {}
    
    // moduleDate() {
    //   moment().format('L');
    //   console.log("Date clicked : "  + this.dateFormat);
    // }

    

    

}
