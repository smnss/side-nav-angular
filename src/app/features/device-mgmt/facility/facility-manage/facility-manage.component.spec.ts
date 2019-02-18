import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityManageComponent } from './facility-manage.component';

describe('FacilityManageComponent', () => {
  let component: FacilityManageComponent;
  let fixture: ComponentFixture<FacilityManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
