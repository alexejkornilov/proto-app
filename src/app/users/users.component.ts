import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestDataService } from '../data/testData.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  exportAs: 'appUsersComponent'
})
export class UsersComponent implements OnInit {

  people$1: Observable<Array<any[]>>;

  constructor(private dataService: TestDataService) { }

  ngOnInit() {
    this.people$1 = this.dataService.getPeople();
  }

  onKey(event: any) {
    this.people$1 = this.dataService.getPeople(event.target.value);
  }

  filterClickUsers(selected: any) {
    console.log(selected);
  }

}
