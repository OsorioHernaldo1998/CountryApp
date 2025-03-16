import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = []

  constructor( private countriesService: CountriesService  ){ }


  ngOnInit(): void {

    this.searchByCapital( 'Managua' );

  }

  searchByCapital( value:string ){

    this.countriesService.searchByCapital( value ).subscribe( countries => this.countries = countries )

  }


}
