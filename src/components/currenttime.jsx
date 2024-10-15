import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
    const [time, setTime] = useState({
        hours: '',
        minutes: '',
        seconds: '',
        amPm: ''
    });

    const updateTime = () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        // Determine AM/PM
        const amPm = hours >= 12 ? 'PM' : 'AM';
        // Convert to 12-hour format
        hours = hours % 12 || 12; // Adjust hours for 12-hour format

        setTime({
            hours: hours.toString(),
            minutes: minutes,
            seconds: seconds,
            amPm: amPm
        });
    };

    useEffect(() => {
        // Update the time immediately
        updateTime();
        // Set an interval to update time every second
        const intervalId = setInterval(updateTime, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='currenttime d-flex justify-content-center'>
            <div className='time bg-black bg-gradient d-flex align-items-center justify-content-center'>{time.hours}</div>
            <div className='time bg-black bg-gradient d-flex align-items-center justify-content-center'>{time.minutes}</div>
            <div className='time bg-black bg-gradient d-flex align-items-center justify-content-center'>{time.seconds}</div>
            <div className='amPm'>{time.amPm}</div>
        </div>
    );
};

export default CurrentTime;
