import { GetDaysOfMonthService as getDaysOfMonth } from './get-days-of-month_service/get-days-of-month.service';
import { GetMonthIncrementedOrDecrementedService as getMonthIncrementedOrDecremented } from './get-month-incremented-or-decremented.service';
import { StartYearData } from './start-year.data';
export class MonthDataCalculatorService {
    static getMonthData(monthIndex, year) {
        if (monthIndex !== undefined && year !== undefined) {
            this.__setMonthAndYear(monthIndex, year);
        }
        return {
            year: this.__year,
            monthIndex: this.__monthIndex,
            days: getDaysOfMonth.go(this.__monthIndex, this.__year)
        };
    }
    static getNextOrPreviousMonthData(plusOrMinusOne) {
        const { monthIndex, year } = getMonthIncrementedOrDecremented.go(plusOrMinusOne, { monthIndex: this.__monthIndex, year: this.__year });
        this.__monthIndex = monthIndex;
        this.__year = year;
        return this.getMonthData();
    }
    static __setMonthAndYear(monthIndex, year) {
        this.__monthIndex = monthIndex;
        this.__year = year;
    }
}
MonthDataCalculatorService.__monthIndex = 0;
MonthDataCalculatorService.__year = StartYearData;
