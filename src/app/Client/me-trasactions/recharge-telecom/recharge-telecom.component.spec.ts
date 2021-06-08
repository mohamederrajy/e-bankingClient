import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeTelecomComponent } from './recharge-telecom.component';

describe('RechargeTelecomComponent', () => {
  let component: RechargeTelecomComponent;
  let fixture: ComponentFixture<RechargeTelecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeTelecomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeTelecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
