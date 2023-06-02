import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaldosComponent } from './principaldos.component';

describe('PrincipaldosComponent', () => {
  let component: PrincipaldosComponent;
  let fixture: ComponentFixture<PrincipaldosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipaldosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
