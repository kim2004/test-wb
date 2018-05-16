import { Pipe } from "@angular/core";
import * as _ from 'lodash';

@Pipe({
  name: "OrderBy"
})
export class SrvSort {
    // Sort item and Unique item
    public transform = ( array, args ): any => {
        array = this.deleteDuplicateData(array, args); 
        return _.sortBy(array, args);
    }

    private deleteDuplicateData = ( arr, keyname ): any => {  
        var keys = [];           
        var resultArray = [];
        for (let item of arr) {
            var key = item[keyname]; 
            if(keys.indexOf(key) === -1) {
                // add it to our keys array
                keys.push(key); 
                // add it to our resultArray array
                resultArray.push(item); 
            }
        }            
        return resultArray;           
    }
           
}

