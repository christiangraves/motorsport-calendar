import React, {Component} from 'react';
import SingleSeries from './SingleSeries';
import axios from 'axios';
import {} from 'react-router-dom';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../Landing.css';

moment.locale('en-GB');
const localizer = BigCalendar.momentLocalizer(moment);


const SeriesView = (props) => (
    <div className="thelist">
    {props.series.map((series, i) => <SeriesCard name={series.name} id={i} clickHandler={props.clickHandler} />)}
    </div>
);

const SeriesCard = (props) => (
    <div>
        <h1 onClick={() => props.clickHandler(props.id)}>{props.name} </h1>
    </div>
);


class Series extends Component {
    state={
        series:[],
        soloSeries: {},
        soloEvents: [],
        didClick: false
    }

    componentDidMount(){
        axios.get('/api/series')
        .then((result) => {
            console.log(result)
          this.setState({series: result.data})
        })
      }

      clickHandler = (id) => {
          const {series} = this.state

          this.setState({soloSeries: series[id], didClick: true});
          
          const allEvents = series[id].events;

          for(let i = 0; i < allEvents.length; i++){
                allEvents[i].start = moment(allEvents[i].start).add(1,'day');
                allEvents[i].end = moment(allEvents[i].end).add(1,'day');
          }
          this.setState({soloEvents: allEvents})
      }

      backClick = (event) => {
        event.preventDefault();
        this.setState({didClick: false});
      }

      teamClickHandler = (event) => {
          event.preventDefault();
          console.log('testing');
      }

    render() {
        console.log(this.state.soloEvents)
        const {didClick, series, soloSeries, soloEvents} = this.state;
        return (
            <div>
                {
                    !didClick ?
                    (
                    <div>
                    <h1>Welcome to MotorSports Calendar</h1>
                    <h4>Please select a Series below</h4>
                    <SeriesView
                        series={series}
                        clickHandler={this.clickHandler}
                    /></div>) : 
                    
                    (
                    <div >
                    <SingleSeries
                        soloSeries = {soloSeries}
                        backClick = {this.backClick}
                        teamClickHandler ={this.teamClickHandler} 
                    />
                    <BigCalendar className='thecalendar' 
                    localizer = {localizer}
                    events ={soloEvents}
                    defaultView='month'
                    views={['month']}
                    defaultDate={new Date()}
                    />
                    </div>
                    )
                }
            </div>
        )
    }
}

export default Series;