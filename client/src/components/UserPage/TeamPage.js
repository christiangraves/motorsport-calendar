import React from 'react';


const TeamPage = (props) => (
    <div>
        <h3>{props.name}</h3>
        <h4>{props.drivers}</h4>
        <h4>{props.car}</h4>
    </div>
)

export default TeamPage; 