import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariodiaComponent } from './horariodia.component';

describe('HorariodiaComponent', () => {
  let component: HorariodiaComponent;
  let fixture: ComponentFixture<HorariodiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorariodiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorariodiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
