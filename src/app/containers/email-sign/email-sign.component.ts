import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { modules } from 'src/app/data/module.data';
import { Module } from 'src/app/shared/models/module.model';
import { Person } from 'src/app/shared/models/person.model';

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
  public selectedValues: number[] = [];
  public isLoading: boolean = false;
  public isSent: boolean = false;
  public selectAll: string[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.module = modules.find((mod: Module) => mod.id === parseInt(params['id']));
      if (!this.module) {
        this.router.navigate(['dashboard']);
      }
    });
  }

  public send(): void {
    this.isLoading = true;
    setTimeout(()=> {
      this.isLoading = false;
      this.isSent = true;
      setTimeout(() => {
        this.module && (this.router.navigate(['module', this.module.id]));
      }, 2000)
    }, 2000 );
  }

  public toggleAll(): void {
    this.selectAll = this.selectAll.length? [] : ['selectAll'];
    if (this.selectAll.length && this.module) {
      this.selectedValues = this.module.students.map((student : Person) => student.id);
    }
    else {
      this.selectedValues = [];
    }
  }

}
