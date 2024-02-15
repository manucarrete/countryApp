import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Input() placeholder: string = ''; 
  @Output() search = new EventEmitter<string>();

  getValue(event: Event): void {
    this.search.emit((event.target as HTMLInputElement).value);
  }
}
