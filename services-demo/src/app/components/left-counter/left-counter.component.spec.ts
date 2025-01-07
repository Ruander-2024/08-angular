import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCounterComponent } from './left-counter.component';

describe('LeftCounterComponent', () => {
  let component: LeftCounterComponent;
  let fixture: ComponentFixture<LeftCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
