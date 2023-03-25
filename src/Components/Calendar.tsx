import * as React from 'react';
import { useCalendar } from "../customHooks/useCalendar";
import "../Components/Calendar.css";

interface dateValue {
    dateValueProp: string
}


const Calendar: React.FC<dateValue> = ({ dateValueProp }) => {

    const [matrixstate,
        monthTodisplay,
        thisDate,
        thisYear] = useCalendar(dateValueProp)


    return (

        <div className="calendar-container-wrapper">
            <h1>
                {monthTodisplay}-{thisYear}
            </h1>

            {matrixstate.map((row, index) => {
                return (
                    <div className="calendar-container" key={index}>
                        <div className="calendar-row">
                            {row.map((element, index) => {
                                return (
                                    <div
                                        className={` date-container ${element === "" || isNaN(element)
                                            ? "remove-border"
                                            : ""
                                            }  ${element === thisDate ? "active" : ""}`}
                                        key={index}
                                    >
                                        {element}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}

        </div>
    );
}

export default Calendar

