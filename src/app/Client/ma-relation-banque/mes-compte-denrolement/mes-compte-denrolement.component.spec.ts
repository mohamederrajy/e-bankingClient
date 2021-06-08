import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCompteDenrolementComponent } from './mes-compte-denrolement.component';

describe('MesCompteDenrolementComponent', () => {
  let component: MesCompteDenrolementComponent;
  let fixture: ComponentFixture<MesCompteDenrolementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesCompteDenrolementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesCompteDenrolementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
