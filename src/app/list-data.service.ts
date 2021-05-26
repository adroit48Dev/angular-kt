import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListDataService {


  constructor(private httpClient: HttpClient) { }


  // get method needs URL get(URL), post(URL, BODY, HEADERS)


  getList(){
    // const httpHeader = new HttpHeaders();
    // httpHeader.append('content-type', 'application/json');

    return this.httpClient.get('http://localhost:3001/name');
  }

  postList(body:any) {

    return this.httpClient.post('http://localhost:3001/name', body);

  }

}
