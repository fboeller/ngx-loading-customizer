import { Pipe, PipeTransform } from '@angular/core';
import { getLoadingState, isLoadable } from '../loadable.functions';
import { LoadingState } from '../loadable.type';
import { LoadableError } from './loadable-error.type';

@Pipe({
  name: 'loadingState',
})
export class LoadingStatePipe implements PipeTransform {
  transform(object: unknown): LoadingState {
    if (!isLoadable(object)) {
      throw new LoadableError('The passed object is not a loadable');
    }
    return getLoadingState(object);
  }
}
