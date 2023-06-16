import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanenqComponent } from './planenq.component';

describe('PlanenqComponent', () => {
  let component: PlanenqComponent;
  let fixture: ComponentFixture<PlanenqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanenqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanenqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
