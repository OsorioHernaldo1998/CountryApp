import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { tap } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})

export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = []
  public loading: boolean =  false
  public initialTerm: string = '';

  constructor( private countriesService: CountriesService  ){ }


  ngOnInit(): void {

    this.countries = this.countriesService.cacheCountries.byCapital.countries

    this.initialTerm = this.countriesService.cacheCountries.byCapital.term

    if (this.countries.length === 0){ this.searchByCapital( 'Managua' ) }

  }

  searchByCapital( value:string ){

    this.loading = true

    this.countriesService.searchByCapital( value ).subscribe(
        countries => {
        this.countries = countries
        this.loading = false } )



  }


}
