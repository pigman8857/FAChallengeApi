import { EmployeeDetail } from './employee-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class EmployeeDetailService {
    employeeName: string;
    readonly rootUrl = 'http://localhost:55256/api';
    list: EmployeeDetail[];

    constructor(public http: HttpClient) { }


    getEmployeeByName(employeeName: string) {
        if (employeeName !== "") {
            this.http.get(`${this.rootUrl}/Employees/name/${employeeName}`).toPromise()
                .then(res => {
                    this.list = res as EmployeeDetail[]
                    this.resetSearchName();
                });;
        }
        else {
            this.refreshList();
        }
    }

    resetSearchName() {
        this.employeeName = "";
    }

    refreshList() {
        this.http.get(`${this.rootUrl}/Employees`)
            .toPromise()
            .then(res => {
                this.list = res as EmployeeDetail[]
                this.resetSearchName();
            });
    }
}
