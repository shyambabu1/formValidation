import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private _serv : ServicesService) { }

  datalist = [];

  ngOnInit(): void {
    this._serv.dataObs$.subscribe(message=>{
      this.datalist.push(message);
    })
  }

}
