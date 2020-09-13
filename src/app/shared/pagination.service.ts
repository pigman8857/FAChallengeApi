import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})


export class PaginationService {
    currentPage: number = 1;
    pageSize: number = 1;
    numbers: number[];
    totalAmount: number = 0;
    constructor() {

    }
}