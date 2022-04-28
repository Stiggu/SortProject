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

  public barChartOptions: any = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';

  public barChartLabels: number[] = this.matrix[this.matrixidx];

  public barChartData: { data: any[], label: string }[] = [
    {
      data: this.barChartLabels,
      label: 'Bubble sort',
    },
  ];

  public nextMatrix(): void {
    this.matrixidx++
    if(this.matrixidx < this.matrix.length){
      this.barChartLabels = this.matrix[this.matrixidx];
      this.barChartData[0]['data'] = this.barChartLabels;
    }
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
      default:
        this.bubbleSort(array);
    }
  }

  setUpChart(array: number[][]): void{
    this.matrix = array;
    this.matrixidx = 0;
    this.barChartLabels = this.matrix[this.matrixidx];
    this.barChartData[0]['data'] = this.barChartLabels;
  }

  bubbleSort(array: number[]) {
    this.sortingService.bubble(array).subscribe(response => {
      console.log(Object.entries(response)[0]);
      this.setUpChart(<number[][]><unknown>response["result"]);
    });
  }

  countingSort(array: number[]) {
    this.sortingService.counting(array).subscribe(response => {
      console.log(response);
      this.setUpChart(<number[][]><unknown>response["result"]);
    });
  }

  quickSort(array: number[]) {
    this.sortingService.quick(array).subscribe(response => {
      console.log(response);
      this.setUpChart(<number[][]><unknown>response["result"]);
    });
  }
}
