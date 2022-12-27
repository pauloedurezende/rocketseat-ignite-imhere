import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatLocalizedDate(date = new Date(), locale = ptBR) {
  return format(date, 'PPPP', { locale });
}
