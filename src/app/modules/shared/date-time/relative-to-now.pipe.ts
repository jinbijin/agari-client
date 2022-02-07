import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { DateTimeString } from 'src/app/common/date-time';

@Pipe({
  name: 'relativeToNow',
})
export class RelativeToNowPipe implements PipeTransform {
  transform(value: DateTimeString | undefined | null, addSuffix: boolean = true): string | undefined | null {
    if (!value) {
      return value;
    }

    return formatDistanceToNow(parseISO(value), { addSuffix });
  }
}
