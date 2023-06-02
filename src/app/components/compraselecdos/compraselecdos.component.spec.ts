import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraselecdosComponent } from './compraselecdos.component';

describe('CompraselecdosComponent', () => {
  let component: CompraselecdosComponent;
  let fixture: ComponentFixture<CompraselecdosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraselecdosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraselecdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
