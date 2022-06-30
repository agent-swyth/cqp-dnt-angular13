import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApi } from '../_interfaces/api';
import { ICocktail, IDataCocktail, ISingleCocktail } from '../_interfaces/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  url = 'http://20.39.234.201:8080/cocktails'

  constructor(private http: HttpClient) { }

  getAllCocktails(): Observable<IDataCocktail>{
    return this.http.get<IDataCocktail>(this.url)
  }

  getCocktail(cid: string | null): Observable<ISingleCocktail>{
    return this.http.get<ISingleCocktail>(this.url + '/' + cid)
  }

  addCocktail(cocktail: ICocktail): Observable<ISingleCocktail>{
    return this.http.put<IApi>(this.url, cocktail)
  }

  updateCocktail(cocktail: ICocktail): Observable<IApi>{
    return this.http.patch<IApi>(this.url + '/' + cocktail.id, cocktail)
  }

  deleteCocktail(cid?: number){
    return this.http.delete(this.url + '/' + cid)
  }
}
