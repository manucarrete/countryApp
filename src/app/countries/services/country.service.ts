import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1'; 

  constructor(private http: HttpClient) { }

  searchByCapital(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${name}`)
    .pipe(
      catchError(error => of([]))
    );
  }

  searchByCountry(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${name}`)
    .pipe(
      catchError(error => of([]))
    );
  }

  searchByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`)
    .pipe(
      catchError(error => of([]))
    );
  }
 
  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url).pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(() => of(null))
    );
  }
}
