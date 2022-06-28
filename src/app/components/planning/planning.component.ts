import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  
  constructor() { }

    date1: Date;
    date2: Date;
    date3: Date;
    date4: Date;
    date5: Date;
    date6: Date;
    date7: Date;
    date8: Date;
    date9: Date;
    date10: Date;
    date11: Date;
    date12: Date;
    date13: Date;
    date14: Date;
    dates: Date[];
    rangeDates: Date[];
    minDate: Date;
    maxDate: Date;
    fr: any;
    invalidDates: Array<Date>

    ngOnInit() {
      this.fr = {
        firstDayOfWeek: 1,
        dayNames: [ "Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche" ],
        dayNamesShort: [ "Lun","Mar","Mer","Jeu","Ven","Sam","Dim" ],
        dayNamesMin: [ "L","M","M","J","V","S","D" ],
        monthNames: [ "Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre" ],
        monthNamesShort: [ "jan","feb","mar","avr","mai","jun","jul","aou","sep","oct","nov","dec" ],
        today: 'Auj',
        clear: 'Clear'
    }
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today,invalidDate];
    }

    moduleDate() {
      console.log("Click on this");
    }

    

}
