import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import { CalendarOptions } from '@fullcalendar/angular';
import { formatDate } from '@fullcalendar/angular';
import {Module} from "../../shared/models/module.model";
import {modules} from "../../data/module.data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  @Input() public modules: Module[];

  public calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: [],
    eventDisplay: 'block',
    titleFormat: {

    },
    eventClick: (info) => {
      info.jsEvent.preventDefault();
      info.event.url && (this.router.navigate([info.event.url]));
    }
  };

  constructor(
    public router: Router
  ) {}

  ngOnInit() {
    this.calendarOptions.events = this.modules.map((mod: Module) => {
      return {
        title: mod.title,
        date: moment(mod.dateStart, 'DD/MM/YYYY').format('YYYY-MM-DD'),
        url: `module/${mod.id}`,
        eventDisplay: 'block'
      }
    });
  }
}
