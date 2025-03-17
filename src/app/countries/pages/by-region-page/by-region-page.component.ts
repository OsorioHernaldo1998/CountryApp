import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region';
import { tap } from 'rxjs';

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit {

  public selectedRegion?: Region

  public loading: boolean = false;

  public countries: Country[] = []

  public regions: Region[] = [Region.Africa, Region.America,Region.Asia, Region.Europe, Region.Oceanica]

  constructor( private countriesService:CountriesService ){ }

  ngOnInit(): void {

    this.selectedRegion = this.countriesService.cacheCountries.byRegion.region

    this.countries = this.countriesService.cacheCountries.byRegion.countries

    if(this.countries.length === 0){ this.searchByRegion( Region.America ) }

  }

  searchByRegion( value:Region ){

    this.selectedRegion = value;

    this.loading=true

    this.countriesService.searchByRegion( value ).subscribe( countries =>{
       this.countries = countries
       this.loading = false
      } )

  }

}
