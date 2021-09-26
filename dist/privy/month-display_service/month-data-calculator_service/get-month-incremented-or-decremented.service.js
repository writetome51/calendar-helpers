export class GetMonthIncrementedOrDecrementedService {

	static go(plusOrMinusOne, {monthIndex, year}) {
		let data = this.__getMonthIndexAndYearPreparedIfEnteringNextOrPreviousYear(
			plusOrMinusOne, monthIndex, year
		);
		data.monthIndex += plusOrMinusOne;
		return data;
	}


	static __getMonthIndexAndYearPreparedIfEnteringNextOrPreviousYear(
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


	static __enteringPreviousYear(plusOrMinusOne, monthIndex) {
		return (plusOrMinusOne === -1 && monthIndex === 0);
	}


	static __enteringNextYear(plusOrMinusOne, monthIndex) {
		return (plusOrMinusOne === 1 && monthIndex === 11);
	}
}
