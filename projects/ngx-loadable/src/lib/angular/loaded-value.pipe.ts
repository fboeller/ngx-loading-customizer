import { Pipe, PipeTransform } from '@angular/core';
import { isLoadable, isLoaded } from '../loadable.functions';
import { LoadableError } from './loadable-error.type';

@Pipe({
  name: 'loadedValue',
})
export class LoadedValuePipe implements PipeTransform {
  transform(object: unknown): unknown | undefined {
    if (!isLoadable(object)) {
      throw new LoadableError('The passed object is not a loadable');
    }
    return isLoaded(object) ? object.value : undefined;
  }
}
