import { Component, Input, OnInit } from '@angular/core';

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
<div [ngStyle]="editMode ? {'float': 'left', 'width': '80%', 'height': '100%'} : {'width': '100%', 'height': '100%'}">
  <div echarts [options]="chartOptions" [ngStyle]="editMode ? {'height': '50%'} : {'height': '100%'}">
  </div>
  <div *ngIf="editMode" style="height: 50%; border-top: 5px solid darkgrey; color: black; padding: 10px;">
    <br>
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-3">
            <label for="selectedSourceType">Source Type</label>
            <select class="custom-select" style="width:98%; height:30px"
              id="selectedSourceType" name="selectedSourceType" [(ngModel)]="chartOptions.sourceType" required>
              <option [ngValue]="undefined"></option>
              <option *ngFor="let sourceType of sourceTypes" [ngValue]="sourceType">{{sourceType}}</option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="selectedSource">Input Source</label>
            <select class="custom-select" style="width:98%; height:30px"
                id="selectedSource" name="selectedSource" [disabled]="!chartOptions.sourceType"
                      [(ngModel)]="chartOptions.source" required>
              <option [ngValue]="undefined"></option>
              <ng-container *ngIf="chartOptions.sourceType">
                <ng-container *ngFor="let source of sources[chartOptions.sourceType]">
                  <option [ngValue]="source">{{source}}</option>
                </ng-container>
              </ng-container>
            </select>
          </div>
        </div><br>
        <div class="row">
          <div class="col-md-6">
            <label for="searchQuery">Search Query</label>
            <textarea [(ngModel)]="chartOptions.searchQuery"
              style="height:100px; max-height: 200px;" class="form-control input-sm" id="searchQuerySearch"
              name="searchQuerySearch" required></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div *ngIf="editMode" style="float: left; width: 20%; height: 100%; border-left: 5px solid darkgrey; padding: 20px">
  <div class="row">
    <div class="col-md-12 text-center" style="border-bottom: 1px solid grey; padding-bottom: 20px;">
      <span style="color: black; font-weight: bold; font-size: 20px;">Visualizations</span>
    </div>
  </div> <br> <br>
  <div class="row">
    <div class="col-md-6">
      <button class="btn btn-link">
        <span class="fa fa-pie-chart fa-5x"></span>
    </button>
    </div>
    <div class="col-md-6">
      <button class="btn btn-link">
        <span class="fa fa-bar-chart fa-5x"></span>
      </button>
    </div>
  </div> <br> <br>
  <div class="row">
    <div class="col-md-6">
      <button class="btn btn-link">
        <span class="fa fa-line-chart fa-5x"></span>
      </button>
    </div>
    <div class="col-md-6">
      <button class="btn btn-link">
        <span class="fa fa-area-chart fa-5x"></span>
      </button>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class NgxDashboardEchartsComponent implements OnInit {

  @Input()
  chartOptions: any;

  @Input()
  editMode: boolean

  sourceTypes: any[] = [];
  sources: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
