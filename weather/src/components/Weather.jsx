import React from 'react'
import PropTypes from 'prop-types';

const Weather = ({result}) => {

    const {name, main } = result;

    if (!name) return null;

    const kelvin = 273.15;
    const temperature = parseFloat(main.temp - kelvin).toFixed(2);
    const max_temperature = parseFloat(main.temp_max - kelvin).toFixed(2);
    const min_temperature = parseFloat(main.temp_min - kelvin).toFixed(2);

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The wheater of {name} is</h2>
                <p className="temperatura">
                    {temperature} <span> &#x2103;</span>
                </p>

                <p>
                    Maximum temperature:
                    {max_temperature} <span> &#x2103;</span>
                </p>

                <p>
                    Minimum temperature:
                    {min_temperature} <span> &#x2103;</span>
                </p>

            </div>

        </div>
     );
}
 
Weather.propTypes = {
    result: PropTypes.object.isRequired
}
export default Weather;