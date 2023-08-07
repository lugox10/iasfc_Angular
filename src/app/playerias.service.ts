import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playerias } from './playerias';

@Injectable({
  providedIn: 'root'
})
export class PlayeriasService {

  private baseURL = "http://localhost:9000/players/playersias";

  constructor(private httpClient : HttpClient) { }

  getListPlayers():Observable<Playerias[]>{
    return this.httpClient.get<Playerias[]>(`${this.baseURL}`);
  } 
}
