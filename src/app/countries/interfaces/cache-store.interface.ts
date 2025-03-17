import { Country } from './country';
import { Region } from './region';

export interface CacheCountries {

  byCapital: CountryParams ;
  byCountry: CountryParams;
  byRegion: RegionParams;

}

export interface CountryParams {
  term : string;
  countries: Country[];
}

export interface RegionParams {
  region?: Region;
  countries: Country[]
}
