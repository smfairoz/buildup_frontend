import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LhComponent } from './lh.component';

describe('LhComponent', () => {
  let component: LhComponent;
  let fixture: ComponentFixture<LhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
