import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSignComponent } from './email-sign.component';

describe('EmailSignComponent', () => {
  let component: EmailSignComponent;
  let fixture: ComponentFixture<EmailSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
