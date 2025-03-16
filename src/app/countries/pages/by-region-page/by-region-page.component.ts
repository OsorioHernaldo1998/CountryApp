import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = []

  constructor( private countriesService:CountriesService ){ }

  ngOnInit(): void {

    this.searchByRegion( 'America' );

  }

  searchByRegion( value:string ){

    this.countriesService.searchByRegion( value ).subscribe( countries => this.countries = countries )

  }

}
