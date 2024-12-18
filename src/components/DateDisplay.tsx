import moment from 'moment';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/store/_hooks/hooks';
import { setCounter } from '~/store/slices/counter/counterSlice';
import { selectDate, setDate } from '~/store/slices/date/dateSlice';

const DateDisplay: React.FC = () => {
    const dispatch = useAppDispatch();
    const date = useAppSelector(selectDate);

    /**
     * On component render sets the date state to current date and time
     */
    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            dispatch(setDate(moment().toDate().toString()));
            dispatch(setCounter(now));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <span style={{ color: 'orange' }}>{date}</span>
        </div>
    );
};

export default DateDisplay;
