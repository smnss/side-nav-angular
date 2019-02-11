import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchMgmtComponent } from './patch-mgmt.component';

describe('PatchMgmtComponent', () => {
  let component: PatchMgmtComponent;
  let fixture: ComponentFixture<PatchMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatchMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
