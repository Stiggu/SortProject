import {Component, OnInit} from '@angular/core';
import {ChartType} from "chart.js";
import {SortingService} from '../services/sorting.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  form = new FormGroup({
    array: new FormControl('', [
      Validators.required,
      Validators.pattern(new RegExp(/^[0-9]+,([0-9]+,{1,1})*[0-9]+$/))
    ]),
    method: new FormControl('bubble', [Validators.required])
  });

  constructor(private sortingService: SortingService) {
  }

  public matrix: number[][] = [[]]
  public matrixidx: number = 0;
  public hasData: boolean = false;
  public isPlaying: boolean = false;
  public stopped: boolean = false;
  public playbackSpeed: number = 250;

  public barChartOptions: any = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';

  public barChartLabels: number[] = this.matrix[this.matrixidx];

  public barChartData: { data: any[], label: string , backgroundColor: string[], borderColor: string}[] = [
    {
      data: this.barChartLabels,
      label: 'Bubble sort',
      backgroundColor: ['rgba(13,110,253,.5)'],
      borderColor: '#fff'
    },
  ];

  public nextMatrix() {
    this.matrixidx++
    if (this.matrixidx < this.matrix.length) {
      this.barChartLabels = this.matrix[this.matrixidx];
      this.barChartData[0]['data'] = this.barChartLabels;

      let temp: string[] = [];
      for(let x = 0; x < this.matrix[this.matrixidx].length; x++){
        if(this.matrixidx == 0 || this.matrixidx >= this.matrix.length){
          this.barChartData[0]['backgroundColor'] = ['rgba(13,110,253,.5)'];
          return;
        }
        if(this.matrix[this.matrixidx][x] !== this.matrix[this.matrixidx-1][x]){
          temp.push('rgba(255,0,23,0.5)');
        } else {
          temp.push('rgba(13,110,253,.5)');
        }
      }
      this.barChartData[0]['backgroundColor'] = temp;
    }
  }

  public previousMatrix(): void {
    this.matrixidx--
    if (this.matrixidx >= 0) {
      this.barChartLabels = this.matrix[this.matrixidx];
      this.barChartData[0]['data'] = this.barChartLabels;

      let temp: string[] = [];
      for(let x = 0; x < this.matrix[this.matrixidx].length; x++){
        if(this.matrixidx == 0){
          this.barChartData[0]['backgroundColor'] = ['rgba(13,110,253,.5)'];
          return;
        }
        if(this.matrix[this.matrixidx][x] !== this.matrix[this.matrixidx+1][x]){
          temp.push('rgba(255,0,23,0.5)');
        } else {
          temp.push('rgba(13,110,253,.5)');
        }
      }
      this.barChartData[0]['backgroundColor'] = temp;
    }
  }

  public cleanMatrix(): void {
    this.matrixidx = 0;
    this.matrix = [[]];
    this.barChartLabels = this.matrix[this.matrixidx];
    this.barChartData[0]['data'] = this.barChartLabels;
    this.barChartData[0]['backgroundColor'] = ['rgba(13,110,253,.5)'];
    this.hasData = false;
  }

  public playMatrix(): void {
    if (this.matrixidx >= this.matrix.length || this.stopped) {
      this.isPlaying = false;
      return;
    }

    this.isPlaying = true;
    this.nextMatrix();

    setTimeout(() => {
      this.playMatrix();
    }, this.playbackSpeed);

  }

  ngOnInit(): void {

  }
  
  sendData() {
    let array: number[] = this.form.value.array.split(',').map((si: string) => {
      return parseInt(si);
    });

    switch (this.form.value.method) {
      case 'bubble':
        this.bubbleSort(array);
        break;
      case 'counting':
        this.countingSort(array);
        break;
      case 'quick':
        this.quickSort(array);
        break;
      case 'merge':
        this.mergeSort(array);
        break;
      case 'tim':
        this.timSort(array);
        break;
      default:
        this.bubbleSort(array);
    }
  }

  setUpChart(array: number[][]): void {
    this.matrix = [this.form.value.array.split(',').map((si: string) => {
      return parseInt(si);
    })]

    this.matrix = this.matrix.concat(array);
    this.matrixidx = 0;
    this.barChartLabels = this.matrix[this.matrixidx];
    this.barChartData[0]['data'] = this.barChartLabels;
    this.hasData = true;
  }

  bubbleSort(array: number[]) {
    this.sortingService.bubble(array).subscribe(response => {
      this.setUpChart(<number[][]><unknown>response["result"]);
    });
  }

  countingSort(array: number[]) {
    this.sortingService.counting(array).subscribe(response => {
      this.setUpChart(<number[][]><unknown>response["result"]);
    });
  }

  quickSort(array: number[]) {
    this.sortingService.quick(array).subscribe(response => {
      this.setUpChart(<number[][]><unknown>response["result"]);
    });
  }

  mergeSort(array: number[]) {
    this.sortingService.merge(array).subscribe(response => {
      this.setUpChart(<number[][]><unknown>response["result"]);
    });
  }

  timSort(array: number[]) {
    this.sortingService.tim(array).subscribe(response => {
      this.setUpChart(<number[][]><unknown>response["result"]);
    });
  }
}
