import { WeekdayIndex } from '../weekday-index.type';
export declare class MonthInfoService {
    private static __dayCountsForEachMonth;
    private static __checkedYear;
    static getInfo(monthIndex: any, year: any): {
        numDays: number;
        weekdayIndexOfFirstDay: WeekdayIndex;
    };
    static getNumDaysInMonth(monthIndex: any, year: any): number;
    private static __getFirstOfMonthAsWeekdayIndex;
    private static __getFirstOfJanuaryAsWeekdayIndex;
    private static __getNumDaysFromJanuaryFirstToFirstOfRequestedMonth;
    private static __checkYear;
}
