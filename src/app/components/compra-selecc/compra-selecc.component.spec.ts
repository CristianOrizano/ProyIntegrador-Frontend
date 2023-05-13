import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraSeleccComponent } from './compra-selecc.component';

describe('CompraSeleccComponent', () => {
  let component: CompraSeleccComponent;
  let fixture: ComponentFixture<CompraSeleccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraSeleccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraSeleccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
