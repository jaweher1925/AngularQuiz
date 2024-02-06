import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenameComponent } from './pagename.component';

describe('PagenameComponent', () => {
  let component: PagenameComponent;
  let fixture: ComponentFixture<PagenameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagenameComponent]
    });
    fixture = TestBed.createComponent(PagenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
