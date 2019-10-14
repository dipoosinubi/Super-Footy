import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel.js'


import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';


import 'bulma/css/bulma.css'


class NewTeamForm extends React.Component {

    state = {
        name: "",
        picture: "",
        website: ""
    }
    handleInput = (event) => {
        let newTeam = { ...this.state };
        newTeam[event.target.name] = event.target.value;
        this.setState(newTeam)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addNewTeam(this.state)
        debugger;
        window.location.reload();
    }
    
    addNewTeam = (newTeam) => {
        console.log("addNewTeam ran");
        fetch('/api/team/',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTeam)
            }
        ).then(res => res.json())

    }


    render = () => (

        <Fragment>
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit} >
                <TextField
                    id="outlined-with-placeholder"
                    label="Team Name"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="name"
                    onChange={this.handleInput}
                    value={this.state.name}
                />
                <TextField
                    id="outlined-with-placeholder"
                    label="Team Logo"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="picture"
                    onChange={this.handleInput}
                    value={this.state.picture}
                />
                <TextField
                    id="outlined-with-placeholder"
                    label="Team Website"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="website"
                    onChange={this.handleInput}
                    value={this.state.website}
                />
            </form>
            <Button variant="contained" onClick={this.handleSubmit}  style={styling.websiteLink}>
                Add Team
        </Button>
        </Fragment>
    )
}

const styling = {
    teamImage: {
        height: "250px"
    },
    websiteLink: {
        marginBottom: "30px",
        backgroundColor: "#013852 ",
        color:"white"
    },
    card: {
        width: "200px"
    },
    homeImage :{
        height: "90px",
        marginTop: "100px",
    }

}

export default class HomePage extends React.Component {
    state = {
        currentTeam: 1,
        teams: []
    }

    componentDidMount() {
        this.getTeamsFromServer()
    }
    getTeamsFromServer = () => {
        fetch('/api/team/')
            .then(res => res.json())
            .then(json => {
                this.setState({ teams: json })
            })
    };

    render() {
        return (
            <div>
                <div className="homeImage">
                <Carousel style={styling.carousel}/>
                </div>
                 <h2> You Never Walk Alone !!</h2>
                 <p> Welcome to Super Footy, the number one database to all things soccer worldwide! You want it, we've got it!!! <br/>
                 We provide serivces such as ticketing, scheduling and merchandise. Over here at Super Footy, you can be sure we match your passion; so let us cater to your soccer needs. </p> 
                 <br/>

                 <p>Super Footy has taken the hard work out of being soccer fans and curated all your favorite merchandises, game tickets and league tables <br/>
                 all in one place. You can either find all items by clicking the links in the top right corner, or to shop by teams, simply click on your favorite team.
                   </p>
                 <hr/>
                <NewTeamForm addNewTeam={this.addNewTeam} />
                <div className="teamList">
                    {this.state.teams.map(team => (
                        <Card 
                        className="teamCard"
                        key={team.id} >
                            <CardActionArea>
                                <Link to={`/team/${team.id}`} >
                                    <CardMedia
                                        style= {styling.teamImage}
                                        component="img"
                                        alt={team.name}
                                        image={team.picture}
                                        title={team.name}
                                        className="Team Picture"
                                    />
                                    <CardContent className="card-content">
                                        <Typography gutterBottom variant="h6" component="p">
                                            {team.name}
                                        </Typography>

                                        <Typography variant="body2" color="textPrimary" component="p">
                                            Click Here For Team Merchandise and Schedule
                                    </Typography>
                                    </CardContent>
                                </Link>
                            </CardActionArea>
                                <Button variant="contained" href={team.website} target="_blank" style={styling.websiteLink}>
                Visit Team Website
        </Button>
                        </Card>
                                ))}
                </div>
            </div>
        )
    }
}
