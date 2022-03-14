import { DaysOfMonth } from '../../days-of-month.type';


export type MonthData = {
	monthIndex: MonthIndex,
	year: number,
	days: DaysOfMonth
};

export type MonthIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;


export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
