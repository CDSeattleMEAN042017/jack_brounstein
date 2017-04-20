import { Pipe, PipeTransform } from '@angular/core';

import { Rat } from "./rats/rat"

@Pipe({
  name: 'name_filter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: Rat[], filter_name: string): any {
  	if(!filter_name){ return value }

  	return value.filter(rat => rat.name.toLowerCase().indexOf(filter_name.toLowerCase()) > -1)
  }
  /* Alternate version of transform function that checks all fields, not just the name field
  
  transform(value: Rat[], filter_name: string): any {
  	if(!filter_name){ return value }

  	function contains_string(rat: Rat, str: string) : boolean {
		str = str.toLowerCase()

		for(var key in rat){
			console.log(key, typeof key)
			if(rat[key].toString().toLowerCase().indexOf(str) > -1){
				console.log(key, rat[key].toString())
				return true
			}
		}

		return false
	}

	return value.filter(rat => contains_string(rat, filter_name))
	*/

}
