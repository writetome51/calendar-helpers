import { getArrFilled } from '@writetome51/get-arr-filled';
import { MonthInfoService as monthInfo } from './month-info_service/month-info.service';
export class GetDaysOfMonthService {
    static go(monthIndex, year) {
        const { numDays, weekdayIndexOfFirstDay } = monthInfo.getInfo(monthIndex, year);
        const daysWithoutNumbers = this.__getDaysThatDontHaveNumbersBefore(weekdayIndexOfFirstDay);
        const daysWithNumbers = this.__getDaysWithNumbers(numDays);
        return [...daysWithoutNumbers, ...daysWithNumbers];
    }
    static __getDaysThatDontHaveNumbersBefore(weekdayIndex) {
        return getArrFilled(weekdayIndex, () => '');
    }
    static __getDaysWithNumbers(numberOfDays) {
        // @ts-ignore
        return getArrFilled(numberOfDays, (i) => (i + 1));
    }
}
