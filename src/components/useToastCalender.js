import React, {Component}  from 'react';
/* ES6 module in Node.js environment */
import Calendar from '@toast-ui/react-calendar';

/* ES6 module in Node.js environment */
import '@toast-ui/calendar/dist/toastui-calendar.min.css'; // Stylesheet for calendar

import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const myTheme = {
    // Theme object to extends default dark theme.
};

const calendarOptions = {
    // sort of option properties.
};


class UseToastCalender extends React.Component{

    calendarRef = React.createRef();

    handleClickNextButton = () => {
        const calendarInstance = this.calendarRef.current.getInstance();

        calendarInstance.next();
    };


    handleClickDayname = (ev) => {
        // view : week, day
        console.group('onClickDayname');
        console.log(ev.date);
        console.groupEnd();
    };





    render() {
        let selectedView = 'month';

        // 스케쥴을 백엔드에서 받아올 형태
        const schedules=[
                {
                    id: '1',
                    calendarId: '0',
                    title: 'TOAST UI Calendar Study',
                    category: 'time',
                    dueDateClass: '',
                    start: '2023-08-28T15:00:00',
                    end: '2023-08-28T15:00:00',
                },{
                    id: 'event3',
                    calendarId: '1',
                    title: 'Vacation',
                    start: '2023-08-08',
                    end: '2023-08-10',
                    isAllday: true,
                    category: 'allday',
            }
    ];
        return (
            <div>
                <Calendar
                    height="900px"
                    calendars={[
                        {
                            id: '0',
                            name: 'Private',
                            bgColor: '#9e5fff',
                            borderColor: '#9e5fff'
                        },
                        {
                            id: '1',
                            name: 'Company',
                            bgColor: '#00a9ff',
                            borderColor: '#00a9ff'
                        }
                    ]}
                    disableDblClick={true}
                    disableClick={true}
                    isReadOnly={true}
                    month={{
                        startDayOfWeek: 0
                    }}

                    events={schedules}
                    scheduleView
                    taskView
                    template={{
                        milestone(schedule) {
                            return `<span style="color:#fff;background-color: ${schedule.bgColor};">${
                                schedule.title
                            }</span>`;
                        },
                        milestoneTitle() {
                            return 'Milestone';
                        },
                        allday(schedule) {
                            return `${schedule.title}<i class="fa fa-refresh"></i>`;
                        },
                        alldayTitle() {
                            return 'All Day';
                        }
                    }}
                    theme={myTheme}
                    timezones={[
                        {
                            timezoneOffset: 540,
                            displayLabel: 'GMT+09:00',
                            tooltip: 'Seoul'
                        },
                        {
                            timezoneOffset: -420,
                            displayLabel: 'GMT-08:00',
                            tooltip: 'Los Angeles'
                        }
                    ]}
                    useDetailPopup
                    useCreationPopup
                    view={selectedView} // You can also set the `defaultView` option.
                    week={{
                        showTimezoneCollapseButton: true,
                        timezonesCollapsed: true
                    }}
                    ref={this.calendarRef}
                    {...calendarOptions}

                    onClickDayname={this.handleClickDayname}

                    setOptions={{
                        useFormPopup: true,
                        useDetailPopup: true,
                    }}

                />
                <button onClick={this.handleClickNextButton}>Go next!</button>
            </div>

        );
    }
    ;
};

export default UseToastCalender;