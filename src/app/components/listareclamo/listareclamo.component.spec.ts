import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListareclamoComponent } from './listareclamo.component';

describe('ListareclamoComponent', () => {
  let component: ListareclamoComponent;
  let fixture: ComponentFixture<ListareclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListareclamoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListareclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
