import { EmployeeDetail } from './employee-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class EmployeeDetailService {
    formData: EmployeeDetail;
    readonly rootUrl = 'http://localhost:55256/api';
    list: EmployeeDetail[];

    constructor(public http: HttpClient) { }

    /*
    postPaymentDetail(formData: EmployeeDetail) {
        return this.http.post(`${this.rootUrl}/PaymentDetails`, formData);
    }*/

    refreshList() {
        console.log('employee service refreshList');
        this.http.get(`${this.rootUrl}/Employees`)
            .toPromise()
            .then(res => {
                console.log('res', res);
                this.list = res as EmployeeDetail[]
                console.log('list', this.list);
            });
    }
}
