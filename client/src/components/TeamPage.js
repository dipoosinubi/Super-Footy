import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';


class NewMerchandiseForm extends React.Component {
    state = {
            description: "",
            picture: "",
            availability: true,
            price: "",
            website: "",
            team:""
    }

    componentDidMount() {
        this.setState({...this.state, team: this.props.teamId})
    }
  
    handleInput = (event) => {
        let newMerchandise = { ...this.state };
        newMerchandise[event.target.name] = event.target.value;
        this.setState(newMerchandise)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addNewMerchandise(this.state)
        window.location.reload();
    }

    addNewMerchandise = (newMerch) =>
        fetch('/api/merchandise/',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMerch)
            }
        ).then(res => res.json())

            
    render = () => (
        <Fragment>
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit} >
                <TextField
                    id="outlined-with-placeholder"
                    label="Description"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="description"
                    onChange={this.handleInput}
                    value={this.state.description}
                />
                <TextField
                    id="outlined-with-placeholder"
                    label="Image URL"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="picture"
                    onChange={this.handleInput}
                    value={this.state.picture}
                />
                <TextField
                    id="outlined-with-placeholder"
                    label="Enter Price"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="price"
                    onChange={this.handleInput}
                    value={this.state.price}
                />
                <TextField
                    id="outlined-with-placeholder"
                    label="Website"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="website"
                    onChange={this.handleInput}
                    value={this.state.website}
                />
                 <Button variant="contained" onClick={this.handleSubmit} style={styling.merchAdd}>
                Add New Merchandise
        </Button>
            </form> 
           
        </Fragment>
    )
}



const styling = {
    merchImage: {
        height: "450px"
    },
   merchForm: {
       marginBottom: "100px",
       
   },
   merchLink: {
    backgroundColor: "#013852 ",
    color: "white"
   },
   merchAdd:{
    backgroundColor: "#013852 ",
    color:"white",
    marginLeft:"100px",
     marginTop: "10px"
   },
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

class NewScheduleForm extends React.Component {
    state = {
            name: "",
            date: "",
            time: "",
            location: "",
            website: "",
            team:""
    }

    componentDidMount() {
        this.setState({...this.state, team: this.props.teamId})
    }
  
    handleInput = (event) => {
        let newSchedule = { ...this.state };
        newSchedule[event.target.name] = event.target.value;
        this.setState(newSchedule)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addNewSchedule(this.state)
        window.location.reload();
    }

    addNewSchedule = (newSched) =>
        fetch('/api/schedule/',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newSched)
            }
        ).then(res => res.json())

            
    render = () => (
        <Fragment>
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit} >
                <TextField
                    id="outlined-with-placeholder"
                    label="Name"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="name"
                    onChange={this.handleInput}
                    value={this.state.name}
                />
                <TextField
                    id="outlined-with-placeholder"
                    label="Date"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="date"
                    onChange={this.handleInput}
                    value={this.state.date}
                />
                    <TextField
                    id="outlined-with-placeholder"
                    label="Location"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="location"
                    onChange={this.handleInput}
                    value={this.state.location}
                />
                <TextField
                    id="outlined-with-placeholder"
                    label="Time"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="time"
                    onChange={this.handleInput}
                    value={this.state.time}
                />
                <TextField
                    id="outlined-with-placeholder"
                    label="Website"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="website"
                    onChange={this.handleInput}
                    value={this.state.website}
                />
                 <Button variant="contained" onClick={this.handleSubmit} style={styling.merchAdd}>
                Add New Schedule
        </Button>
            </form> 
           
        </Fragment>
    )
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
               <div style={styling.merchForm}>
                    <NewMerchandiseForm addNewMerchandise={this.addNewMerchandise} teamId={this.props.match.params.id} />
                </div>
                <div style={styling.merchForm}>
                    <NewScheduleForm addNewSchedule={this.addNewSchedule} teamId={this.props.match.params.id} />
                </div>
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