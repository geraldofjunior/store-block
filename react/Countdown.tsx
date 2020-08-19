import React, { useState } from 'react'
import { TimeSplit } from './typings/global';
import { tick } from './utils/time';
import { useCssHandles } from "vtex.css-handles";

interface CountdownProps {
    targetDate: string;
}

const DEFAULT_TARGET_DATE = (new Date('2020-08-20')).toISOString();
const CSS_HANDLES = ['countdown'];

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {

    const [timeRemaining, setTime] = useState<TimeSplit>({
        hours:   '0',
        minutes: '0',
        seconds: '0'
    });

    tick(targetDate, setTime);
    const handles = useCssHandles(CSS_HANDLES);

    return (
        <div className={`${handles.countdown} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
            <h1>{ `${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}` }</h1>
        </div>
    );
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
        targetDate: {
            title: "Data Final",
            description: "Data final utilizada pelo contador",
            type: "string",
            default: "null",
        },
    },
}

export default Countdown
