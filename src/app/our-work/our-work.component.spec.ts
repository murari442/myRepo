import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkComponent } from './our-work.component';

describe('OurWorkComponent', () => {
  let component: OurWorkComponent;
  let fixture: ComponentFixture<OurWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
