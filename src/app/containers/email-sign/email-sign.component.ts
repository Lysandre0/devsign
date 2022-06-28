import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-sign',
  templateUrl: './email-sign.component.html',
  styleUrls: ['./email-sign.component.css']
})
export class EmailSignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedValues: string[] = [];

}
