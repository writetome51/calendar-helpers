import { getRoundedUp } from '@writetome51/get-rounded-up-down';
import { isLeapYear } from '@writetome51/is-leap-year';
import { not } from '@writetome51/not';
import { toStr } from '@writetome51/to-str';


export class GetNumLeapYearsPassedService {

	static go({startYear, endingAtYear}): number {
		if (not(isLeapYear(startYear))) throw new Error(`The start year must be a leap year`);

		const numPossibleLeapYears =
			this.__getNumPossibleLeapYearsWithin(endingAtYear - startYear);

		// False leap years are any year that begins a new century (ends with '00'),
		// but is not evenly divisible by 400.
		const numFalseLeapYears = this.__getNumFalseLeapYearsPassed(startYear, endingAtYear);

		return (numPossibleLeapYears - numFalseLeapYears);
	}


	private static __getNumPossibleLeapYearsWithin(numYears): number {
		return getRoundedUp(numYears / 4);
	}


	private static __getNumFalseLeapYearsPassed(startYear, endingAtYear): number {
		const numCenturiesToCheck =  this.__getNumCenturiesToCheck(startYear, endingAtYear);
		return this.__getNumFalseLeapYearsIn(numCenturiesToCheck, startYear);
	}


	private static __getNumCenturiesToCheck(startYear, endingAtYear): number {
		// if `endingAtYear` begins a new century, it cannot be counted as a century to check.
		// This is because we're ending on it, meaning it hasn't passed.
		if (toStr(endingAtYear).endsWith('00')) --endingAtYear;

		let [centuryOfStartYear, centuryOfEndYear] =
			this.__getThe2CenturiesWithoutTheirLast2Digits(startYear, endingAtYear);

		return centuryOfEndYear - centuryOfStartYear;
	}


	private static __getNumFalseLeapYearsIn(numCenturiesToCheck, startYear): number {
		let centuryToCheck = Number(
			toStr(this.__withoutLast2Digits(startYear)) + '00'
		);

		for (var i = 0, numFalseLeapYears = 0; i < numCenturiesToCheck; ++i) {
			centuryToCheck += 100;
			if (not(isLeapYear(centuryToCheck))) ++numFalseLeapYears;
		}
		return numFalseLeapYears;
	}


	private static __getThe2CenturiesWithoutTheirLast2Digits(
		startYear, endingAtYear
	): [number, number] {
		return [
			this.__withoutLast2Digits(startYear),
			this.__withoutLast2Digits(endingAtYear)
		];
	}


	private static __withoutLast2Digits(num): number {
		const numDigits = toStr(num).length;
		return Number( toStr(num).substr(0, numDigits - 2) );
	}

}
