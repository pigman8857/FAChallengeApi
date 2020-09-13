import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDetailService } from './shared/employee-detail.service';

import { PaginationService } from './shared/pagination.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [EmployeeDetailService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
