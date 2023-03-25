import { useEffect, useState } from "react";

const getMonthValue = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "Jun",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
};

const daysrow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


export const useCalendar = (dateValueProp) => {

    // calendar state
    const [matrixstate, setMatrixState] = useState([]);

    let array = dateValueProp.split("/");
    let monthTodisplay = getMonthValue[array[1]];

    // converted string to no
    let thisMonth = array[1] * 1 - 1;
    let thisYear = array[2] * 1;
    let thisDate = array[0] * 1;

    let dayValue = new Date(thisYear, thisMonth, 1).getDay();
    let lastDay = new Date(thisYear, thisMonth + 1, 0).getDate();

    let emptyValues = [];
    let filledvalues = [];



    for (let i = 0; i < dayValue; i++) {
        emptyValues.push("");
    }

    for (let i = 0; i < lastDay; i++) {
        let dateValue = new Date(thisYear, thisMonth, i + 1).getDate();
        filledvalues.push(dateValue);
    }

    const totalValues = [...emptyValues, ...filledvalues];
    let row = [];

    let matrix = [];

    const getColumns = () => {
        for (let i = 0; i < totalValues.length; i++) {
            row.push(totalValues[i]);

            if ((i + 1) % 7 === 0) {
                matrix.push(row);
                row = [];
            }

            if (i === totalValues.length - 1) {
                matrix.push(row);
            }
        }
        // included days-array as the first row of  calendar matrix
        matrix.unshift(daysrow);

        setMatrixState(matrix);



    };

    useEffect(() => {
        getColumns();
        // eslint-disable-next-line
    }, [dateValueProp]);


    let data = [
        matrixstate,
        monthTodisplay,
        thisDate,
        thisYear
    ]


    return data;

}
