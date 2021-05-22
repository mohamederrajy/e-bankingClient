import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaRelationBanqueComponent } from './ma-relation-banque.component';

describe('MaRelationBanqueComponent', () => {
  let component: MaRelationBanqueComponent;
  let fixture: ComponentFixture<MaRelationBanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaRelationBanqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaRelationBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
