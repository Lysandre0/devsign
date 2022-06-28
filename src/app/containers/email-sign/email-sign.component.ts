import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { modules } from 'src/app/data/module.data';
import { Module } from 'src/app/shared/models/module.model';

@Component({
  selector: 'app-email-sign',
  templateUrl: './email-sign.component.html',
  styleUrls: ['./email-sign.component.css']
})
export class EmailSignComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  public module: Module | undefined;
  public selectedValues: string[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.module = modules.find((mod: Module) => mod.id === parseInt(params['id']));
      if (!this.module) {
        this.router.navigate(['dashboard']);
      }
    });
  }
}
