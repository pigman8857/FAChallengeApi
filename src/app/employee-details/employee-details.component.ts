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
        console.log('service', service);
    }

    ngOnInit(): void {
        this.resetForm();
        this.service.refreshList();

        let scrollableContent = document.getElementsByClassName('scrollableContent');
        scrollableContent[0].scrollTop = 0;

    }


    scrollEvent(event) {

        let scrollTop = event.srcElement.scrollTop;

        let scrollHeight = event.srcElement.scrollHeight;
        let clientHeight = event.srcElement.clientHeight;
        let scrollTopMax = scrollHeight - clientHeight;

        if (scrollTop == scrollTopMax) {
            this.service.paginationService.currentPage += 1;
            this.service.loadMore();
        }
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

    onTableScroll(e) {
        console.log('scroll', e);
    }
}
