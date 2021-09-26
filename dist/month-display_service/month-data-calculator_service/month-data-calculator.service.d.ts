import { MonthData } from './month-data.type';
export declare class MonthDataCalculatorService {
    private static __monthIndex;
    private static __year;
    static getMonthData(monthIndex?: number, year?: number): MonthData;
    static getNextOrPreviousMonthData(plusOrMinusOne: 1 | -1): MonthData;
    private static __setMonthAndYear;
}
