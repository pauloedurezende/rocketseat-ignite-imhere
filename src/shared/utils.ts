import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

export function formatLocalizedDate(date = new Date(), locale = enUS) {
  return format(date, 'PPPP', { locale });
}
