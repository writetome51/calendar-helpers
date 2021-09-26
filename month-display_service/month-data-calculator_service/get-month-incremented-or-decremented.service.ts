export class GetMonthIncrementedOrDecrementedService {

	static go(plusOrMinusOne: 1 | -1, {monthIndex, year}): { monthIndex, year } {

		let data = this.__getMonthIndexAndYearPreparedIfEnteringNextOrPreviousYear(
			plusOrMinusOne, monthIndex, year
		);
		data.monthIndex += plusOrMinusOne;
		return data;
	}


	private static __getMonthIndexAndYearPreparedIfEnteringNextOrPreviousYear(
		plusOrMinusOne, monthIndex, year
	) {
		if (this.__enteringPreviousYear(plusOrMinusOne, monthIndex)) {
			--year;
			return {monthIndex: 12, year};
		}
		if (this.__enteringNextYear(plusOrMinusOne, monthIndex)) {
			++year;
			return {monthIndex: -1, year};
		}
		return {monthIndex, year};
	}


	private static __enteringPreviousYear(plusOrMinusOne, monthIndex): boolean {
		return (plusOrMinusOne === -1 && monthIndex === 0);
	}


	private static __enteringNextYear(plusOrMinusOne, monthIndex): boolean {
		return (plusOrMinusOne === 1 && monthIndex === 11);
	}

}
