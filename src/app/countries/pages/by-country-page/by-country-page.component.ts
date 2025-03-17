import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { pipe, tap } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = []

  public loading: boolean = false

  public initialTerm:string = ''


  constructor( private countriesService: CountriesService ){}

  ngOnInit(){

    this.countries = this.countriesService.cacheCountries.byCountry.countries

    this.initialTerm = this.countriesService.cacheCountries.byCountry.term

    if (this.countries.length === 0 ){   this.searchByCountry( 'Nicaragua' ) }

  }


  searchByCountry( value:string ):void{

    this.loading = true

    this.countriesService.searchByCountry( value ).subscribe( countries => {
      this.countries = countries

      this.loading = false
    } )

  }

}
