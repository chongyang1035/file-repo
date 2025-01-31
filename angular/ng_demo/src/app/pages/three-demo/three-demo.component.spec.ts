import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDemoComponent } from './three-demo.component';

describe('ThreeDemoComponent', () => {
  let component: ThreeDemoComponent;
  let fixture: ComponentFixture<ThreeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
