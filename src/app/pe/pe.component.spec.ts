import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeComponent } from './pe.component';

describe('PeComponent', () => {
  let component: PeComponent;
  let fixture: ComponentFixture<PeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
