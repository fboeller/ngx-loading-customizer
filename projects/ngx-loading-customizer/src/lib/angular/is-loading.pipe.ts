import { Pipe, PipeTransform } from '@angular/core';
import { isLoadable, isLoading } from '../loadable.functions';
import { LoadableError } from './loadable-error.type';

@Pipe({
  name: 'isLoading',
})
export class IsLoadingPipe implements PipeTransform {
  transform(object: unknown): boolean {
    if (!isLoadable(object)) {
      throw new LoadableError('The passed object is not a loadable');
    }
    return isLoading(object);
  }
}
