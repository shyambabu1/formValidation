import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _formData = new Subject<any>();
  dataObs$= this._formData.asObservable();

  constructor() { }
  sentDate(data: any){
    this._formData.next(data)
  }
}
