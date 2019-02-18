import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityMapListComponent } from './facility-map-list.component';

describe('FacilityMapListComponent', () => {
  let component: FacilityMapListComponent;
  let fixture: ComponentFixture<FacilityMapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityMapListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityMapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
