import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeSignComponent } from './qrcode-sign.component';

describe('QrcodeSignComponent', () => {
  let component: QrcodeSignComponent;
  let fixture: ComponentFixture<QrcodeSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeSignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrcodeSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
