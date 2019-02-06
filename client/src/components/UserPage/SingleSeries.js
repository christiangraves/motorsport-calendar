import React from 'react';
import TeamPage from './TeamPage';


const SingleSeries = (props) => (
    <div>
        <button onClick={props.backClick}>Back</button>
        <h1>{props.soloSeries.name}</h1>
        <h4>{props.soloSeries.info}</h4>
        <h3>Teams</h3>
        {props.soloSeries.teams.map((teams, i) => <TeamCard name={teams.name} id={i} teamClickHandler={props.teamClickHandler} />)}
    </div>
)


const TeamCard = (props) => (
    <div>
        <h5 onClick={() => props.teamClickHandler(props.id)}>{props.name} </h5>
    </div>
);

export default SingleSeries; 