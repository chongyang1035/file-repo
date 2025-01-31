import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number',
})
export class NumberPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): number {
    return Number(value);
  }
}
