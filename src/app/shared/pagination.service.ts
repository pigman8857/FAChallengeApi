import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})


export class PaginationService {
    currentPage: number = 1;
    readonly pageSize: number = 20;

    totalAmount: number = 0;
    totalAmountOfPages: number = 0;
    constructor() {

    }

    reset() {
        this.totalAmount = 0;

    }
}