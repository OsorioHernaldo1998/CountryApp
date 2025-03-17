import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, delay, map, Observable, of, tap } from "rxjs";
import { Country } from "../interfaces/country";
import { CacheCountries } from '../interfaces/cache-store.interface';
import { Region } from "../interfaces/region";




@Injectable({providedIn: 'root'})
export class CountriesService {


  private apiUrl : string = 'https://restcountries.com/v3.1'

  public cacheCountries: CacheCountries = {

    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { countries: [] }

  }


  constructor( private httpClient: HttpClient ){
    this.loadToLocalStorage();
   }

  private getCountryRequest( url:string ): Observable<Country[]> {
    return this.httpClient.get<Country[]>( url ).pipe(
      catchError( ( )=> of ([]) ),
      delay( 2000 )
    )
  }

  saveInLocalStorage(){
    localStorage.setItem( 'cacheCountries', JSON.stringify( this.cacheCountries )  )
  }

  loadToLocalStorage(){
    if ( !localStorage.getItem( 'cacheCountries' ) ) return

    return this.cacheCountries = JSON.parse( localStorage.getItem( 'cacheCountries' )! )
  }


  searchByCapital( term:string ) : Observable<Country[]> {

    let capitalUrl: string = `${ this.apiUrl }/capital/${ term }`

    return this.getCountryRequest( capitalUrl )
    .pipe(
      tap( countries => { this.cacheCountries.byCapital = { term, countries }  } ),
      tap( () => this.saveInLocalStorage() )
    )


  }

  searchByCountry( term:string ): Observable<Country[]> {

    let countryUrl: string = `${this.apiUrl}/name/${term}`

    return this.getCountryRequest( countryUrl )
    .pipe(
      tap( countries => { this.cacheCountries.byCountry = { term, countries }  } ),
      tap( () => this.saveInLocalStorage() )
    )

  }


  searchByRegion ( term:Region ): Observable<Country[]> {

    let regionUrl:string = `${this.apiUrl}/subregion/${term}`

    return this.getCountryRequest( regionUrl )
    .pipe(
      tap( countries => this.cacheCountries.byRegion = { region: term, countries } ),
      tap( () => this.saveInLocalStorage() )
    )

  }

  searchByAlphaCode ( term:string ): Observable<Country | null> {

    let alphaUrl:string = `${this.apiUrl}/alpha/${term}`

    return this.httpClient.get<Country[]>( alphaUrl )
    .pipe(
      map( contries => contries.length > 0 ? contries[0] : null ),
      catchError( ( ) => of (null) ),
      tap( () => this.saveInLocalStorage() )
    )

  }


}
