import { ChangeDetectorRef, Component, DoCheck, Input, IterableDiffers, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'lib-dashboard-echarts',
  template: `
  <style>
    .btn-link {
    color: #337ab7 !important;
    border: 1px solid;
  }

  .btn-link:hover {
      transform: scale(1.15,1.15);
  }
  </style>
  <span *ngIf="!chartOptions">Chart is not configured</span>
  <div echarts [options]="chartOptions"  [ngStyle]="{'height': '100%'}" (chartInit)="onChartInit($event)"></div>
  `,
  styles: []
})
export class NgxDashboardEchartsComponent implements OnInit, OnChanges, DoCheck {

  //@Input()
  chartOptions: any;

  //editMode: boolean

  @Input()
  dataset: any[]

  @Input()
  chartConfig: any;

  sourceTypes: any[] = [];
  sources: any[] = [];

  echartsObj: any;
  iterableDiffer: any;
  markedForChange = false;

  constructor(private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this.iterableDiffers.find([]).create(null);
   }

  ngOnInit() {
    this.setOption();
  }

  ngDoCheck() {
    if (!this.echartsObj || !this.chartOptions || !this.chartOptions.dataset || !this.chartOptions.dataset.source) {
      return;
    }
    let changes = this.iterableDiffer.diff(this.chartOptions.dataset.source);
    if (changes) {
      this.markedForChange = true;
      // this.echartsObj.setOption({
      //   dataset: {
      //     source: this.chartOptions.dataset.source
      //   }
      // })
    }
  }

  setOption() {
    setInterval(() => {
      if (this.markedForChange) {
        this.echartsObj.setOption({
          title: {show: false},
          dataset: {
            source: this.chartOptions.dataset.source
          }
        });

        this.markedForChange = false;
      }
    }, 1000)
  }

  ngOnChanges() {
    this.chartOptions = this.chartConfig;
    this.chartOptions['dataset'] = this.dataset;
  }

  onChartInit(ec: any) {
    this.echartsObj = ec;
    setTimeout(() => {
      this.echartsObj.setOption({title: {
        show: this.chartOptions.dataset.source.length === 0,
        textStyle: {
            color: "black",
            fontSize: 14
        },
        text: "No data",
        left: "center",
        top: "center"
      }})
    }, 200)
  }

}
