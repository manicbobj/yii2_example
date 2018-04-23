import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import {RestAPIService} from "../../../../shared/service/RestAPI/restapi.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {

  private grades = {};

  constructor(private webservice: RestAPIService) { }

  ngOnInit() {
    this.webservice.getGrades().subscribe(json => {
      if(json.success) {
        this.grades = json.data;
      } else {

      }
    });
  }

}
