import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
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
  
  // Module Title
  titleModule1 = modules[0].title;
  titleModule2 = modules[1].title;
  titleModule3 = modules[2].title;
  titleModule4 = modules[3].title;

  // Get Module Start Date & Change Date Format 
  dateModule1 = modules[0].dateStart.split("/").reverse().join("/").replace(/\//g, '-');
  dateModule2 = modules[1].dateStart.split("/").reverse().join("/").replace(/\//g, '-');
  dateModule3 = modules[2].dateStart.split("/").reverse().join("/").replace(/\//g, '-');
  dateModule4 = modules[3].dateStart.split("/").reverse().join("/").replace(/\//g, '-');
  
  Events: any[] = [];
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',  
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title : this.titleModule1, date: this.dateModule1 },
      { title : this.titleModule2, date: this.dateModule2 },
      { title : this.titleModule3, date: this.dateModule3 },
      { title : this.titleModule4, date: this.dateModule4 }
    ]
  };

  
  constructor() { }

    ngOnInit() {
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
