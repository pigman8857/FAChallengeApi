import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { EmployeeDetailService } from 'src/app/shared/employee-detail.service';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styles: []
})
export class EmployeeDetailsComponent implements OnInit {

    constructor(public service: EmployeeDetailService) {
        console.log('EmployeeDetailService', service);
    }

    ngOnInit(): void {
        console.log('employee detail component ngOnInit');
        this.service.refreshList();
    }

}
