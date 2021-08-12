import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface mydata {
  obj:object;
}

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private Http: HttpClient) 
  {

   }

  getData(){
    return this.Http.get<mydata>('http://localhost:1234/file.php') 
   
  }
}
