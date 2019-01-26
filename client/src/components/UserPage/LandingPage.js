import React, {Component} from 'react';
import Calendar from './Calendar';
import TeamPage from './TeamPage';
import axios from 'axios';
import {} from 'react-router-dom';


class Series extends Component {
    state={
        series:[]
    }

    componentDidMount(){
        axios.get('/api/series')
        .then((result) => {
          this.setState({series: result.data})
        })
      }

      render(){
        return(
            <div>
            </div>
        )
    }
}

export default Series;