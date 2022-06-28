import {Component, Input, OnInit} from '@angular/core';
import {Module} from "../../shared/models/module.model";

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  @Input() public modules: Module[];

  constructor() { }

  ngOnInit(): void {
  }

}
