export declare class GetMonthIncrementedOrDecrementedService {
    static go(plusOrMinusOne: 1 | -1, { monthIndex, year }: {
        monthIndex: any;
        year: any;
    }): {
        monthIndex: any;
        year: any;
    };
    private static __getMonthIndexAndYearPreparedIfEnteringNextOrPreviousYear;
    private static __enteringPreviousYear;
    private static __enteringNextYear;
}
