import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import "rxjs/Rx";
import {Observable} from "rxjs/Observable";

import {RestAPIService} from "../../../../shared/service/RestAPI/restapi.service";

@Component({
  selector: 'app-subject',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsPage implements OnInit, OnDestroy {

  private sub: any;
  private sections: any[];
  private tests: {};

  private subject:string;
  private grade:{};


  constructor(
      private webservice: RestAPIService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.grade = {};
    this.sections = [];
    this.tests = {};

    this.sub = this.route.params.mergeMap(params => {

      if(params['grade']) {
        this.grade['id'] = params['grade'];
        this.subject = params['subject'];

        return Observable.forkJoin(
            this.webservice.getGrade(params['grade']),
            this.webservice.getSectionsBySubjectGrade(this.subject, this.grade['id']),
            this.webservice.findTests({'subject_id': this.subject, 'grade': this.grade['id']})
        );
      }
    }).subscribe((jsonArray) => {
      this.grade = {...jsonArray[0].data, ...this.grade};
      this.sections = jsonArray[1].data;

      for(let section of this.sections) {
        this.tests[section.id] = [];
      }

      for(let test of jsonArray[2].data) {
        if(this.tests[test['section_id']])
          this.tests[test['section_id']].push(test);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
