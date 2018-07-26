import { UsersComponent } from './../users/users.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestDataService } from '../data/testData.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  people$1: Observable<any[]>;
  people$2: Observable<any[]>;
  people$3: Observable<Array<any[]>>;
  inpValue = '';
  selectedPeople4 = [];
  selectedPeople5 = [];

  constructor(private dataService: TestDataService) { }

  ngOnInit() {
    this.people$1 = this.dataService.getDepartments();
    this.people$2 = this.dataService.getPosition();
    this.people$3 = this.dataService.getPeople();
  }
  onKey(event: any) {
    this.people$3 = this.dataService.getPeople(event.target.value);
  }

  searchPeop() {
    this.inpValue = null;
    this.selectedPeople4 = null;
    this.selectedPeople5 = null;
    this.people$3 = this.dataService.getPeople();
  }

  filterClickUsers(field: string) {
    this.people$3 = this.dataService.rangePeople(this.selectedPeople4, this.selectedPeople5);
    // this.people$3 = this.dataService.rangePeople(this.selectedPeople5, 'position');
  }

  mePeop() {
    this.inpValue = 'Self';
    this.people$3 = this.dataService.getPeople('Self');
  }

}
