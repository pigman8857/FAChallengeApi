import { EmployeeDetail } from './employee-detail.model';
import { EmployeeList } from './employee-list.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PaginationService } from '../shared/pagination.service';

@Injectable({
    providedIn: 'root'
})



export class EmployeeDetailService {
    employeeName: string;
    readonly rootUrl = 'http://localhost:55256/api';
    list: EmployeeDetail[];

    constructor(public http: HttpClient, public paginationService: PaginationService) { }


    getEmployeeByName(employeeName: string) {
        if (employeeName !== "") {
            this.http.get(`${this.rootUrl}/Employees/name/${employeeName}?pageNumber=${this.paginationService.currentPage}&pageSize=${this.paginationService.pageSize}`)
                .toPromise()
                .then(res => {
                    var temp = res as EmployeeList;
                    this.list = temp.employeeList;
                    this.paginationService.totalAmount = temp.actualTotalAmount;
                    let pageAmount = Math.floor(this.paginationService.totalAmount / this.paginationService.pageSize);
                    this.paginationService.numbers = Array(pageAmount);

                });
        }
        else {
            this.refreshList();
        }
    }

    resetSearchName() {
        this.employeeName = "";
    }

    loadMore() {
        this.http.get(`${this.rootUrl}/Employees?pageNumber=${this.paginationService.currentPage}&pageSize=${this.paginationService.pageSize}`)
            .toPromise()
            .then(res => {
                var temp = res as EmployeeList;
                this.list.push(...temp.employeeList);
                this.paginationService.totalAmount = temp.actualTotalAmount;
                let pageAmount = Math.floor(this.paginationService.totalAmount / this.paginationService.pageSize);
                this.paginationService.numbers = Array(pageAmount);

            });
    }

    refreshList() {
        this.http.get(`${this.rootUrl}/Employees?pageNumber=${this.paginationService.currentPage}&pageSize=${this.paginationService.pageSize}`)
            .toPromise()
            .then(res => {
                var temp = res as EmployeeList;
                this.list = temp.employeeList;
                this.paginationService.totalAmount = temp.actualTotalAmount;
                let pageAmount = Math.floor(this.paginationService.totalAmount / this.paginationService.pageSize);
                this.paginationService.numbers = Array(pageAmount);

            });
    }
}
