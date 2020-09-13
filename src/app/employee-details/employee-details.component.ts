import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

        this.resetForm();
        this.service.refreshList();
    }

    resetForm(form?: NgForm) {
        if (form != null)
            form.resetForm();
    }

    onSearchSubmit(form?: NgForm) {
        this.service.getEmployeeByName(this.service.employeeName);
    }

    onPageBtnClick(pageNumber: number) {
        this.service.paginationService.currentPage = pageNumber;
        if (this.service.employeeName) {
            this.service.getEmployeeByName(this.service.employeeName);
        }
        else {
            this.service.refreshList();
        }
    }

}
