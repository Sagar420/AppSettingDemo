import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AppSettings} from './AppSettings'
  
@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
s
  getSettings(): Observable<AppSettings> {
    let settings = new AppSettings();
    return Observable.of<AppSettings>(settings);
  }
}
