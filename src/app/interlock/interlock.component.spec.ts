import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterlockComponent } from './interlock.component';

describe('InterlockComponent', () => {
  let component: InterlockComponent;
  let fixture: ComponentFixture<InterlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
