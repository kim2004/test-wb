import { Pipe,PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'SafeHtml'
})
export class SrvSafeHtml implements PipeTransform {

  constructor(
      private sanitizer:DomSanitizer){
      }

    transform(html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    }
}
