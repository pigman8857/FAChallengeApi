import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootUrl = 'http://localhost:55256/api';

  constructor(public http: HttpClient) { }

  postPaymentDetail(formData: PaymentDetail) {
    return this.http.post(`${this.rootUrl}/PaymentDetails`, formData);
  }
}
