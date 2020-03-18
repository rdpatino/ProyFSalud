import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasalonesComponent } from './listasalones.component';

describe('ListasalonesComponent', () => {
  let component: ListasalonesComponent;
  let fixture: ComponentFixture<ListasalonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasalonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasalonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
