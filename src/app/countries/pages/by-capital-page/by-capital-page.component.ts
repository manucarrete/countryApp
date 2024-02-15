import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/component/search-box/search-box.component';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryService],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{
  countries: Country[] = [];

  ngOnInit(): void {
    this.searchByCapital('Madrid');
  }

  constructor(private countryService: CountryService) { }

  getValue(value: string): void {
    console.log(value); 
  }

  searchByCapital(capital: string): void {
    this.countryService.searchByCapital(capital).subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (error) => {
        console.error('Error fetching countries:', error);
      }
    });
  }
}

