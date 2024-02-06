import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcQuizComponent } from './welc-quiz.component';

describe('WelcQuizComponent', () => {
  let component: WelcQuizComponent;
  let fixture: ComponentFixture<WelcQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcQuizComponent]
    });
    fixture = TestBed.createComponent(WelcQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
