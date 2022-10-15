import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-loan-calendar',
  templateUrl: './loan-calendar.component.html',
  styleUrls: ['./loan-calendar.component.scss']
})
export class LoanCalendarComponent implements OnInit {

  calendarOptions!: CalendarOptions;
  events: any = [ { title: "present", date: "2022-10-15", color: "#0000FF" } ]
  constructor() { }

  ngOnInit(): void {
    this.calendarOptions = {
      initialView: "dayGridMonth",
      dateClick: this.handleDateClick.bind(this),
      events: this.events
    }
  }


  handleDateClick = (arg: any)=> {
    alert('date click! ' + arg.dateStr)
  }
}
