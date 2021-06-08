import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangementAgenceComponent } from './changement-agence.component';

describe('ChangementAgenceComponent', () => {
  let component: ChangementAgenceComponent;
  let fixture: ComponentFixture<ChangementAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangementAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangementAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
