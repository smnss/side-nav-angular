import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityUserMappingComponent } from './facility-user-mapping.component';

describe('FacilityUserMappingComponent', () => {
  let component: FacilityUserMappingComponent;
  let fixture: ComponentFixture<FacilityUserMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityUserMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityUserMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
