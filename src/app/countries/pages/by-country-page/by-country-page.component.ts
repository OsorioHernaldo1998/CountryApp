import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {

  constructor( private countriesService: CountriesService ){}

  ngOnInit(){
    this.searchByCountry( 'Nicaragua' )
  }

  public countries: Country[] = []

  searchByCountry( value:string ):void{

    this.countriesService.searchByCountry( value ).subscribe( countries => this.countries = countries  )

  }

}
