import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { SearchBoxComponent } from '../../../shared/component/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{
  countries: Country[] = [];

  ngOnInit(): void {
    this.searchByCountry('argentina');
  }

  constructor(private countryService: CountryService) { }


  searchByCountry(country: string): void {
    this.countryService.searchByCountry(country).subscribe({
      next: (countries) => {
        this.countries = countries;
        console.log(countries[0].name);
      },
      error: (error) => {
        console.error('Error fetching countries:', error);
      }
    });
  }
}
