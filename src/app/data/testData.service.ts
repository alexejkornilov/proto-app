import { Person } from './data.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface Person {
    id: string;
    isActive: boolean;
    age: number;
    name: string;
    gender: string;
    company: string;
    department: string;
    email: string;
    phone: string;
    disabled?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class TestDataService {
    constructor(private http: HttpClient) { }

    getPeople(term: string = null): Observable<Person[]> {
        let items = getMockPeople();
        if (term) {
            items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
        }
        return of(items).pipe(delay(500));
    }

    getDepartments(term: string = null): Observable<Person[]> {
        let uniqueItems = this.unique(getMockPeople(), 'department');
        if (term) {
            uniqueItems = uniqueItems.filter(x => x.department.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
        }
        return of(uniqueItems).pipe(delay(500));
    }

    getPosition(term: string = null): Observable<Position[]> {
        let uniqueItems = this.unique(getMockPeople(), 'position');
        if (term) {
            uniqueItems = uniqueItems.filter(x => x.department.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
        }
        return of(uniqueItems).pipe(delay(500));
    }

    unique(array: any, propertyName: string): any {
        return array.filter((e, i) => array.findIndex(a => a[propertyName] === e[propertyName]) === i);
     }

    rangePeople(f1: any, f2: any): Observable<Person[]> {
        let result: Array<any> = getMockPeople();
        let filterBy = { department: f1, position: f2 };

        Object.keys(filterBy).forEach(key => {
            const value = filterBy[key];
            if (value.length === 0) {
                delete filterBy[key];
            }
          });
        result = getMockPeople().filter(o => Object.keys(filterBy).every(k => filterBy[k].some(f => o[k] === f)));

        return of(result).pipe(delay(500));
    }

    rangePeople1(array: any, field: string): Observable<Person[]> {
        let uniqueItems: Array<any> = getMockPeople();
            for (let i = 0; i < array.length; i++) {
                const element = array[i];
                uniqueItems = [].concat(
                    getMockPeople().filter(x => x[field].toLocaleLowerCase().indexOf(element.toLocaleLowerCase()) > -1));
        }
        return of(uniqueItems).pipe(delay(500));
    }


}

function getMockPeople() {
    return [
        {
            'id': '5a15b13c36e7a7f00cf0d7cb',
            'index': 2,
            'isActive': true,
            'picture': 'http://placehold.it/32x32',
            'age': 23,
            'name': 'Karyn Wright',
            'gender': 'female',
            'company': 'ZOLAR',
            'department' : 'Поп',
            'position': 'Невролог',
            'email': 'karynwright@zolar.com',
            'phone': '+1 (851) 583-2547'
        },
        {
            'id': '5a15b13c2340978ec3d2c0ea',
            'index': 3,
            'isActive': false,
            'picture': 'http://placehold.it/32x32',
            'age': 35,
            'name': 'Rochelle Estes',
            'gender': 'female',
            'company': 'EXTRAWEAR',
            'department' : 'Поп',
            'position': 'ЛОР',
            'email': 'rochelleestes@extrawear.com',
            'phone': '+1 (849) 408-2029'
        },
        {
            'id': '5a15b13c663ea0af9ad0dae8',
            'index': 4,
            'isActive': false,
            'picture': 'http://placehold.it/32x32',
            'age': 25,
            'name': 'Mendoza Ruiz',
            'gender': 'male',
            'company': 'ZYTRAX',
            'department' : 'Лаб',
            'position': 'Врач УЗИ',
            'email': 'mendozaruiz@zytrax.com',
            'phone': '+1 (904) 536-2020'
        },
        {
            'id': '5a15b13cc9eeb36511d65acf',
            'index': 5,
            'isActive': false,
            'picture': 'http://placehold.it/32x32',
            'age': 39,
            'name': 'Rosales Russell',
            'gender': 'male',
            'company': 'ELEMANTRA',
            'department' : 'Поп',
            'position': 'Врач УЗИ',
            'email': 'rosalesrussell@elemantra.com',
            'phone': '+1 (868) 473-3073'
        },
        {
            'id': '5a15b13cc9eeb36511d65',
            'index': 5,
            'isActive': false,
            'picture': 'http://placehold.it/32x32',
            'age': 39,
            'name': 'Self',
            'gender': 'male',
            'company': 'ELEMANTRA',
            'department' : 'Поп',
            'position': 'Врач УЗИ',
            'email': 'rosalesrussell@elemantra.com',
            'phone': '+1 (868) 473-3073'
        }
    ];

}