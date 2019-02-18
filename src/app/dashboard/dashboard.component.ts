import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  userName: string;
  firstName: string;
  lastName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {userName: 'sangeetha', firstName: 'Sangeetha', lastName: 'Praveen'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'firstName', 'lastName', 'Action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

}
