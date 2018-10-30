import { Component, ViewChild, ElementRef } from '@angular/core';
import { CircleProperty } from '../../constant/app-constant';
import { Chart, ChartData, ChartOptions } from 'chart.js'

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  circle_properties: CircleProperty[] = [
    new CircleProperty("1番"),
    new CircleProperty("2番"),
    new CircleProperty("3番"),
    new CircleProperty("4番")
  ]

  @ViewChild('canvas')
  ref: ElementRef

  context: CanvasRenderingContext2D
  chart: Chart
  data: ChartData = {
    datasets: [{
      data:[25,25,25,25]
    }],
    labels: ["1番","2番","3番","4番"]
  }
  options: ChartOptions = {
    responsive: false,
    legend: { display: false},
  }

  backgroundColor: string[] = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
  ]


  constructor() {

  }

  ionViewWillEnter(){
    const prob = this.circle_properties.map((_circle_pro)=>{
      return _circle_pro.view_prob
    })

    this.data.datasets = [{
      data: prob,
      backgroundColor: this.backgroundColor
    }]

    const labels = this.circle_properties.map((_circle_prop)=>{
      return _circle_prop.name
    })

    this.data.labels = labels

    this.generateChart()

  }

  generateChart(){
        // canvasを取得
        this.context = this.ref.nativeElement.getContext('2d');

        // チャートの作成
        this.chart = new Chart(this.context, {
          type: 'pie',     
          data: this.data,      
          options: this.options
        })
    
  }

}
