import './seasonDisplay.css';
import React from 'react';

const seasonConfig = {
    Summer: {
        text: "Let's heat the beach",
        iconName: 'sun'
    },
    Winter: {
        text: "Burr it's cold!",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
    <div className={`${season} season-display`}>
        <span className="icon-left"><i className={`${iconName} icon massive`} /></span>
        <h1>{text}</h1>
        <span className="icon-right"><i className={`${iconName} icon massive `}/></span>
    </div>
    );
}

export default SeasonDisplay;