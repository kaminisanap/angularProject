import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouus'
})
export class MarvellouusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let str = value;

    if(args[0] == "PPA")
    {
      str = str + "covers the pro foundation"
    }
    else if (args[0] == "LB")
    {
      str = str + "covers the progr logic"
    }
    else if (args[0] == "angular")
    {
      str = str + "covers the web Development"
    }
    return str;
  }

}
