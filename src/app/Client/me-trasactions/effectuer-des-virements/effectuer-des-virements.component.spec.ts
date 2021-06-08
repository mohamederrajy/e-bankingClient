import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectuerDesVirementsComponent } from './effectuer-des-virements.component';

describe('EffectuerDesVirementsComponent', () => {
  let component: EffectuerDesVirementsComponent;
  let fixture: ComponentFixture<EffectuerDesVirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffectuerDesVirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectuerDesVirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
