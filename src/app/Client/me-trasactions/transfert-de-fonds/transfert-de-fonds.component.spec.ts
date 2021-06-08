import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertDeFondsComponent } from './transfert-de-fonds.component';

describe('TransdertDeFondsComponent', () => {
  let component: TransfertDeFondsComponent;
  let fixture: ComponentFixture<TransfertDeFondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfertDeFondsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfertDeFondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
