import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevamateriaComponent } from './nuevamateria.component';

describe('NuevamateriaComponent', () => {
  let component: NuevamateriaComponent;
  let fixture: ComponentFixture<NuevamateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevamateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevamateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
