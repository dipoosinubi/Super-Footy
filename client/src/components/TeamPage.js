import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

const styling = { 
    websiteLink: {
        marginBottom: "30px",
        backgroundColor: "#013852 ",
        color:"white"
    },
    about: {
        marginBottom: "50px",
        marginTop: "50px"
    }
}
export default class TeamPage extends React.Component {
    state = {
        team: {
            merchandise: [],
            schedule: []

        },
    };
    componentDidMount() {
        this.getTeam()

    }

    getTeam = () => {
        fetch(`/api/team/${this.props.match.params.id}/`)
            .then(res => res.json())
            .then(json => {
                this.setState({ team: json })
            })
    }

    render = () => {
        return (
            <div >
               <h2 style={styling.about}> Welcome to {this.state.team.name} Page
               </h2> 
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Paper >
                                <ul>
                                    {this.state.team.merchandise.map(merchandise => (
                                        <li>
                                            <img src={merchandise.picture} /> <br />
                                            {merchandise.description} <br />
                                            {merchandise.price} <br />
                                            <Button variant="contained" href={merchandise.website} target="_blank" style={styling.websiteLink}>
                                                Buy
        </Button> <hr />
                                        </li>
                                    ))}
                                </ul>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper>
                                <ul>
                                    {this.state.team.schedule.map(schedule => (
                                        <li>
                                            Opponent: {schedule.name}<br />
                                            Date: {schedule.date}<br />
                                            Time: {schedule.time}<br />
                                            Location: {schedule.location}<br />
                                            <Button variant="contained" href={schedule.website} target="_blank" style={styling.websiteLink}>
                                                Buy Tickets
                                             </Button> <hr />
                                        </li>
                                    ))}
                                </ul>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}