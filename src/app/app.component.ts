import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './shared/services/login-service.service';
import {tap} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vinli-challenge';

  constructor() { }
  
  ngOnInit() {
  }
}
