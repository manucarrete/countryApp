import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {
  @Input ()  input: string = "";

  countries: Country[] = [];


}
