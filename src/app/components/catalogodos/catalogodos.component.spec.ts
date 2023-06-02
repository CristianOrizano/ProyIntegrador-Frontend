import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogodosComponent } from './catalogodos.component';

describe('CatalogodosComponent', () => {
  let component: CatalogodosComponent;
  let fixture: ComponentFixture<CatalogodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
