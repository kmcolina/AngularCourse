import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPalabraPipe'
})
export class FiltroPalabraPipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let result = value.replace("app-further", "");
    return result;
  }

}
