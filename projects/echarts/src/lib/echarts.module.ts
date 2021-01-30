import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EchartsComponent } from './echarts.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [EchartsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxEchartsModule
  ],
  exports: [EchartsComponent]
})
export class EchartsModule { }
