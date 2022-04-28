import { Component, OnInit } from '@angular/core';
import { ChartType } from "chart.js";
import { SortingService } from '../services/sorting.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  form = new FormGroup({
    array: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^[0-9]+,([0-9]+,{1,1})*[0-9]+$/))
    ]),
    method: new FormControl('bubble', [Validators.required])
  });

  constructor(private sortingService: SortingService) { }

  public matrix: number[][] = [[8, 9, 7, 5, 6, 4, 1, 2, 3], [8, 7, 9, 5, 6, 4, 1, 2, 3], [8, 7, 5, 9, 6, 4, 1, 2, 3], [8, 7, 5, 6, 9, 4, 1, 2, 3], [8, 7, 5, 6, 4, 9, 1, 2, 3], [8, 7, 5, 6, 4, 1, 9, 2, 3], [8, 7, 5, 6, 4, 1, 2, 9, 3], [8, 7, 5, 6, 4, 1, 2, 3, 9], [7, 8, 5, 6, 4, 1, 2, 3, 9], [7, 5, 8, 6, 4, 1, 2, 3, 9], [7, 5, 6, 8, 4, 1, 2, 3, 9], [7, 5, 6, 4, 8, 1, 2, 3, 9], [7, 5, 6, 4, 1, 8, 2, 3, 9], [7, 5, 6, 4, 1, 2, 8, 3, 9], [7, 5, 6, 4, 1, 2, 3, 8, 9], [7, 5, 6, 4, 1, 2, 3, 8, 9], [5, 7, 6, 4, 1, 2, 3, 8, 9], [5, 6, 7, 4, 1, 2, 3, 8, 9], [5, 6, 4, 7, 1, 2, 3, 8, 9], [5, 6, 4, 1, 7, 2, 3, 8, 9], [5, 6, 4, 1, 2, 7, 3, 8, 9], [5, 6, 4, 1, 2, 3, 7, 8, 9], [5, 6, 4, 1, 2, 3, 7, 8, 9], [5, 6, 4, 1, 2, 3, 7, 8, 9], [5, 6, 4, 1, 2, 3, 7, 8, 9], [5, 4, 6, 1, 2, 3, 7, 8, 9], [5, 4, 1, 6, 2, 3, 7, 8, 9], [5, 4, 1, 2, 6, 3, 7, 8, 9], [5, 4, 1, 2, 3, 6, 7, 8, 9], [5, 4, 1, 2, 3, 6, 7, 8, 9], [5, 4, 1, 2, 3, 6, 7, 8, 9], [5, 4, 1, 2, 3, 6, 7, 8, 9], [4, 5, 1, 2, 3, 6, 7, 8, 9], [4, 1, 5, 2, 3, 6, 7, 8, 9], [4, 1, 2, 5, 3, 6, 7, 8, 9], [4, 1, 2, 3, 5, 6, 7, 8, 9], [4, 1, 2, 3, 5, 6, 7, 8, 9], [4, 1, 2, 3, 5, 6, 7, 8, 9], [4, 1, 2, 3, 5, 6, 7, 8, 9], [4, 1, 2, 3, 5, 6, 7, 8, 9], [1, 4, 2, 3, 5, 6, 7, 8, 9], [1, 2, 4, 3, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]]
  
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
    this.matrixidx++;
    this.barChartLabels = this.matrix[this.matrixidx];
    this.barChartData[0]['data'] = this.barChartLabels;
  }

  ngOnInit(): void {

  }

  sendData() {
    let array: number[] = this.form.value.array.split(',').map((si: string) => {
      return parseInt(si);
    });

    switch(this.form.value.method) {
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

  bubbleSort(array: number[]) {
    this.sortingService.bubble(array).subscribe(response => {
      console.log(response);

      this.matrix = <number[][]><unknown> response["result"];
    });
  }
  
  countingSort(array: number[]) {
    this.sortingService.counting(array).subscribe(response => {
      console.log(response);
    });
  }
  
  quickSort(array: number[]) {
    this.sortingService.quick(array).subscribe(response => {
      console.log(response);
    });
  }
}
