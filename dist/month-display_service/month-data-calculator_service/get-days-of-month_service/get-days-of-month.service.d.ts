import { DaysOfMonth } from '@shared/days-of-month.type';
export declare class GetDaysOfMonthService {
    static go(monthIndex: any, year: any): DaysOfMonth;
    private static __getDaysThatDontHaveNumbersBefore;
    private static __getDaysWithNumbers;
}
