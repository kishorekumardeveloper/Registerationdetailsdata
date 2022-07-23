import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailurepopupComponent } from './failurepopup.component';

describe('FailurepopupComponent', () => {
  let component: FailurepopupComponent;
  let fixture: ComponentFixture<FailurepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailurepopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailurepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
