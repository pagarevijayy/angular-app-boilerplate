import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

// import { Apollo } from "apollo-angular";


@Injectable({
  providedIn: 'root'
})
export class BaseProviderService {

  constructor(
    private _http: HttpClient,
    // private _apollo: Apollo
  ) { }

  // 1. HTTP REST requests

  // make a GET call
  httpGETrequest(urlString: string, httpOptions?: object): Observable<{} | HttpResponse<any>> {
    return this._http.get(urlString, httpOptions)
  }

  // make a POST call
  httpPOSTrequest(urlString: string, requestObject: object, httpOptions?: object): Observable<{} | HttpResponse<any>> {
    return this._http.post(urlString, requestObject, httpOptions)
  }

  // make a PUT call
  httpPUTrequest(urlString: string, requestObject: object, httpOptions?: object): Observable<{} | HttpResponse<any>> {
    return this._http.put(urlString, requestObject, httpOptions)
  }


  // 2. GraphQL request

  // graphqlRequest(queryObject: any): Observable<any> {
  //   return this._apollo.query<any>(queryObject)
  // }

}
