import { Pipe } from '@angular/core';

@Pipe({
  name: 'convertDate'
})

export class SrvConvertDate {
  public transform(value: String): any {
    var tableau = value.split("-");
    return tableau[2]+"/"+tableau[1]+"/"+tableau[0]; 
  }
}
