import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDashboardEchartsComponent } from './ngx-dashboard-echarts.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [NgxDashboardEchartsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxEchartsModule
  ],
  exports: [NgxDashboardEchartsComponent]
})
export class NgxDashboardEchartsModule { }
