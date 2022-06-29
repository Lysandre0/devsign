import { Component, OnInit } from '@angular/core';
// import * as moment from 'moment';
import { CalendarOptions } from '@fullcalendar/angular';
// import {Module} from "../../shared/models/module.model";
// import {modules} from "../../data/module.data";

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  Events: any[] = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',  
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'Event 1', date: '2022-06-01' },
      { title: 'Event 2', date: '2022-06-02' }
    ]
  };

  
  constructor() { }

    ngOnInit() {

     
    }
    
    handleDateClick(arg: any) {
      console.log('Date cliked ' + arg.dateStr);
    }
    
   


    

}
