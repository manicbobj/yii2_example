import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.css'],
  encapsulation: ViewEncapsulation.None
})
export class ErrorPage implements OnInit {

  message: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['error_code'] == '404') {
        this.message = "Sorry, this page doesn't exist";
      }
    })
  }

}
