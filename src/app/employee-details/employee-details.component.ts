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

            //load when no search
            if (this.service.paginationService.currentPage < this.service.paginationService.totalAmountOfPages) {
                console.log('employee name for searh', this.service.employeeName);
                if (this.service.employeeName) {
                    console.log('load more with name ');
                    this.service.paginationService.currentPage += 1;
                    this.service.loadMoreByName(this.service.employeeName);
                }
                else {
                    console.log('load more ');
                    this.service.paginationService.currentPage += 1;
                    this.service.loadMore();
                }
            }

        }
    }

    resetForm(form?: NgForm) {
        if (form != null) {
            form.resetForm();
            this.service.paginationService.currentPage = 1;
            this.service.list = [];
            this.service.refreshList();
            let scrollableContent = document.getElementsByClassName('scrollableContent');
            scrollableContent[0].scrollTop = 0;
        }
    }

    onSearchSubmit(form?: NgForm) {
        this.service.list = [];
        this.service.paginationService.currentPage = 1;
        this.service.getEmployeeByName(this.service.employeeName);
    }

    onTableScroll(e) {
        console.log('scroll', e);
    }
}
