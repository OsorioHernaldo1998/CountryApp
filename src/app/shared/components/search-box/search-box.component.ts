import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Input()
  initialTerm:string = ''

  @Input()
  public placeholder: string = '';

  @Output()
  public searchValueOut = new EventEmitter<string>();

  emitValue ( value:string ):void {

    this.searchValueOut.emit( value );

  }


}
