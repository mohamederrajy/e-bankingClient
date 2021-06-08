import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifierSoldeComponent } from './verifier-solde.component';

describe('VerifierSoldeComponent', () => {
  let component: VerifierSoldeComponent;
  let fixture: ComponentFixture<VerifierSoldeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifierSoldeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifierSoldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
