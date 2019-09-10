import './SeasonDisplay.css'
import React from 'react';


const seasonConfig = {
    summer: {
        text: "LEts hit the beach",
        icon: 'sun'
    },
    winter : {
        text: "Burr, it is cold",
        icon: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {

    const season =  getSeason(props.lat, new Date().getMonth());
    const iconName = seasonConfig[season].icon;
    const text = seasonConfig[season].text;
    

    return <div className ={`season-display ${season}`} >
                <i className= {`icon-left massive ${iconName} icon`}  />
                <h1>{text} </h1>
                <i className= {`icon-right massive ${iconName} icon`}  />
           </div>

};


export default SeasonDisplay;