import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDemandesEnLingComponent } from './mes-demandes-en-ling.component';

describe('MesDemandesEnLingComponent', () => {
  let component: MesDemandesEnLingComponent;
  let fixture: ComponentFixture<MesDemandesEnLingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesDemandesEnLingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesDemandesEnLingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
