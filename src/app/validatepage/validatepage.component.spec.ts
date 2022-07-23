import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatepageComponent } from './validatepage.component';

describe('ValidatepageComponent', () => {
  let component: ValidatepageComponent;
  let fixture: ComponentFixture<ValidatepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
