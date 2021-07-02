import React, { useState } from 'react';

import './Radio.scss';

const Radio = () => {
    const [value, setValue] = useState('light');
    const [isLight, setIsLight] = useState(true);

    function handleChange () {
        if (isLight) {
            setValue('dark');
            setIsLight(false);
            console.log(value);
        } else {
            setValue('light');
            setIsLight(true);
            console.log(value)
        }
    }

    return (
        <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch">
            <input 
                type="checkbox" id="switch" className="mdl-switch__input" value={value} onChange={handleChange}
            />
            <span className="mdl-switch__label"></span>
        </label>
    )
}
export default Radio;
