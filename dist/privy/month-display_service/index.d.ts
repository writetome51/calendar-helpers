export declare class MonthDisplayService {

	static init(): void;


	static goForwardOrBackOne(plusOrMinusOne: 1 | -1): void;


	static updateDays(
		{monthIndex, year}: { monthIndex: number; year: number; }
	): void;


	private static __setSelectedDate;
}
