import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/component/search-box/search-box.component';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/country-table/country-table.component';


@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent,CountryTableComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{
  countries: Country[] = [];

  ngOnInit(): void {
    this.searchByCapital('bsas');
  }

  constructor(private countryService: CountryService) { }

  getValue(value: string): void {
    console.log(value); 
  }

  searchByCapital(capital: string): void {
    this.countryService.searchByCapital(capital).subscribe({
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

