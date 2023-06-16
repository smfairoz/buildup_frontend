import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingsComponent } from './lightings.component';

describe('LightingsComponent', () => {
  let component: LightingsComponent;
  let fixture: ComponentFixture<LightingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
