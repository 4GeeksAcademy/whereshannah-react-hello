import React from 'react';
import PropTypes from 'prop-types';

function SecondsCounter(props) {
    return (
        <div className="seconds-counter">
            <div className="icon">
                <i className="fas fa-clock"></i>
            </div>
            <div className="time">
                {props.seconds} seconds
            </div>
        </div>
    );
}

SecondsCounter.propTypes = {
    seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;
