import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'SafeHtml'
})
export class SrvSafeHtml {

  constructor(
      private sanitizer:DomSanitizer){

      }

    transform(html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    }
}
