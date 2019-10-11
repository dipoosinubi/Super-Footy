import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TeamPage from './TeamPage';


const styling = { 
    websiteLink: {
        marginBottom: "30px",
        backgroundColor: "#013852 ",
        color:"white"
    },
}
export default class ScheduleList extends React.Component {
    state = {
        teams: []
    }
    componentDidMount() {
        this.getScheduleFromServer()
    }

    getScheduleFromServer = () => {
        fetch('/api/team/')
            .then(res => res.json())
            .then(json => {
                this.setState({ teams: json })
                return json
            })
            .then((schedule) => {
                console.log(schedule)
            })
    }

    scheduleComponent = (teamName, teamSchedule) => {
        return teamSchedule.map((schedule) => {
                 return (<li> 
                     Game: {teamName}   vs {schedule.name} <br/> Location: {schedule.location} <br/>
                     Date: {schedule.date} <br/> Time: {schedule.time}<br/>
                     <Button variant="contained" href={schedule.website} target="_blank" style={styling.websiteLink}>
                     Buy Tickets
                     </Button>
                     <hr/>
                      </li>)
            })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.teams.map(team => (
                        this.scheduleComponent(team.name, team.schedule)
                    ))}
                  
                </ul>
            </div>
        )
    }
}