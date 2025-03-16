import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { Country } from "../interfaces/country";



@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl : string = 'https://restcountries.com/v3.1'

  constructor( private httpClient: HttpClient ){ }


  searchByCapital( term:string ) : Observable<Country[]> {

    let capitalUrl: string = `${ this.apiUrl }/capital/${ term }`

    return this.httpClient.get<Country[]>( capitalUrl ).pipe(
      catchError(
        err => {

          return of ([])  }
      )
    );


  }

  searchByCountry( term:string ): Observable<Country[]> {

    let countryUrl: string = `${this.apiUrl}/name/${term}`

    return this.httpClient.get<Country[]>( countryUrl ).pipe(
      catchError( err =>  of ([]) )
    )

  }


  searchByRegion ( term:string ): Observable<Country[]> {

    let regionUrl:string = `${this.apiUrl}/subregion/${term}`

    return this.httpClient.get<Country[]>( regionUrl).pipe(
      catchError( err => of ([]) )
    )

  }

  searchByAlphaCode ( term:string ): Observable<Country | null> {

    let alphaUrl:string = `${this.apiUrl}/alpha/${term}`

    return this.httpClient.get<Country[]>( alphaUrl )
    .pipe(
      map( contries => contries.length > 0 ? contries[0] : null ),
      catchError( err => of (null) )
    )

  }


}
