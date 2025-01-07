import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCounterComponent } from './right-counter.component';

describe('RightCounterComponent', () => {
  let component: RightCounterComponent;
  let fixture: ComponentFixture<RightCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
