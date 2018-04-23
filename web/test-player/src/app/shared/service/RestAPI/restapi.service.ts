import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {APIResponseType} from "../../models/api-response";
import {TestSession} from "../../models/test-session";


@Injectable()
export class RestAPIService {
  private baseUrl: string = "http://localhost/hkmp/web/index.php/api/";

  constructor(private http: HttpClient) { }

  public getGrades():Observable<APIResponseType> {
    return this.http.get<APIResponseType>(this.baseUrl + 'grades');
  }

  public getGrade(grade:string) {
    return this.http.get<APIResponseType>(this.baseUrl + 'grades/' + grade);
  }

  public getSectionsBySubjectGrade(subject: string, grade: string):Observable<APIResponseType> {
    return this.http.get<APIResponseType>(this.baseUrl + `sections/by-subject-grade/${subject}/${grade}`);
  }

  public findTests(criteria: {}):Observable<APIResponseType> {
    return this.http.get<APIResponseType>(this.baseUrl + `tests/find`, {params: criteria});
  }

  public createTestSession(test_id: string):Observable<APIResponseType> {
    return this.http.post<APIResponseType>(this.baseUrl + `test-sessions`, {"test_id" : test_id})
  }

  public getTestSession(session_id: string):Observable<TestSession> {
    return this.http.get<TestSession>(this.baseUrl + `test-sessions/${session_id}`);
  }

  public nextQuestion(session_id: string):Observable<APIResponseType> {
    return this.http.post<APIResponseType>(this.baseUrl + `questions/next`, {session_id: session_id});
  }

  public submitAnswer(session_id: string, qidx: number, answer:any):Observable<APIResponseType> {
    return this.http.post<APIResponseType>(
        this.baseUrl + `questions/score/${session_id}/${qidx}`,
        {response: answer}
        );
  }

  public login(username: string, password: string): Observable<APIResponseType> {
    return this.http.post<APIResponseType> (
        this.baseUrl + `account/login`,
        {username: username, password: password}
    )
  }
  public register(username: string, password: string): Observable<APIResponseType> {
    return this.http.post<APIResponseType> (
        this.baseUrl + `account/register`,
        {username: username, password: password}
    )
  }

}
