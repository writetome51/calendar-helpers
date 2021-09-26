import { StartYearData as startYear } from '../../start-year.data';
import { toStr } from '@writetome51/to-str';
export function yearValid(year) {
    year = Number(year);
    return (toStr(year).length === 4) && (year >= startYear);
}
