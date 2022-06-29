import { Component, OnInit } from '@angular/core';
// import * as moment from 'moment';
import { CalendarOptions } from '@fullcalendar/angular';
import { formatDate } from '@fullcalendar/angular';
import {Module} from "../../shared/models/module.model";
import {modules} from "../../data/module.data";

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  public modules: Module[] = modules;
  
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
      console.log(modules);

     
    }
    
    handleDateClick(arg: any) {
      let newDateForm = formatDate(new Date(), {
        month: 'numeric',
        year: 'numeric',
        day: 'numeric'
      });
      console.log('Date cliked ' + arg.dateStr);
      arg.dateStr = newDateForm;
      console.log(newDateForm);
    }

    
  
    
   


    

}
