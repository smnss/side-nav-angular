import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityMapUserListComponent } from './facility-map-user-list.component';

describe('FacilityMapUserListComponent', () => {
  let component: FacilityMapUserListComponent;
  let fixture: ComponentFixture<FacilityMapUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityMapUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityMapUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
