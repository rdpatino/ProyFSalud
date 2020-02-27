import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamateriasComponent } from './listamaterias.component';

describe('ListamateriasComponent', () => {
  let component: ListamateriasComponent;
  let fixture: ComponentFixture<ListamateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListamateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListamateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
