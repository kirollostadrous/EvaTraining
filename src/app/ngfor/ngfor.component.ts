import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent {
  CategoryList=[
    {"id":1 ,"name":"evahackthon"},
    {"id":2 ,"name":"MTI"},
    {"id":3 ,"name":"evaAnimalsHealth"}
  ]

}
