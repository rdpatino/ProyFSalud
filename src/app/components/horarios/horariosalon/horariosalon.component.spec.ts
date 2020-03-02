import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosalonComponent } from './horariosalon.component';

describe('HorariosalonComponent', () => {
  let component: HorariosalonComponent;
  let fixture: ComponentFixture<HorariosalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorariosalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorariosalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
