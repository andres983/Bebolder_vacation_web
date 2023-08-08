import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { IResponseRequestVacation } from '../../data/IResponseRequestVacation';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}


@Component({
  selector: 'app-table-request',
  templateUrl: './table-request.component.html',
  styleUrls: ['./table-request.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableRequestComponent implements OnInit, AfterViewInit {

  public listRequestVacation: IResponseRequestVacation[] = [];

  @Input() set listRequest(data: IResponseRequestVacation[]) {
    if(data){
      this.listRequestVacation = data;
    }
  }

  displayedColumns: string[] = ['id', 'applicationDate', 'daysRequested', 'initialDate', 'withdrawalDate', 'stateVacation', 'approved'];
  dataSource: MatTableDataSource<IResponseRequestVacation>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    ) {

  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource(this.listRequestVacation);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
