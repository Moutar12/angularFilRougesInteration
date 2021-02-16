import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serviceDetailPromise'
})
export class ServiceDetailPromisePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
