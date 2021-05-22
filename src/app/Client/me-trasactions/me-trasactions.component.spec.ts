import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeTrasactionsComponent } from './me-trasactions.component';

describe('MeTrasactionsComponent', () => {
  let component: MeTrasactionsComponent;
  let fixture: ComponentFixture<MeTrasactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeTrasactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeTrasactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
