import { Component, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { sideNavAnimation, sideNavContainerAnimation } from './sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [sideNavAnimation, sideNavContainerAnimation]
})
export class AppComponent implements OnDestroy {
  title = 'careAllInOne';
  @ViewChild('snav') sidenav: MatSidenav;
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);

  isOpen = true;

  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => {
      if (this.mobileQuery.matches) {
        this.closeSideNav();
      } else {
        this.openSideNav();
      }
      return changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleSideNav() {
     this.isOpen = !this.isOpen;
   }
   openSideNav() {
    this.sidenav.open();
  }
  closeSideNav() {
    this.sidenav.close();
  }
}
