import React, { Component, Fragment } from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


class NewMerchandiseForm extends React.Component {

    state = {
        teams: {
            description: "",
            picture: "",
            availability: true,
            price: "",
            website: "",
            team:""
        }
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

    getTeams = () => {
        fetch('api/team/')
            .then(res => res.json())
            .then(teams => {
                this.setState({teams})
            })
        }

    addNewMerchandise = (newMerch) =>
        fetch('api/merchandise/',
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
                    value={this.state.teams.description}
                />
                <TextField
                    id="outlined-with-placeholder"
                    label="Image URL"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="picture"
                    onChange={this.handleInput}
                    value={this.state.teams.picture}
                />
                <TextField
                    id="outlined-with-placeholder"
                    label="Enter Price"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="price"
                    onChange={this.handleInput}
                    value={this.state.teams.price}
                />
                <TextField
                    id="outlined-with-placeholder"
                    label="Team Website"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="website"
                    onChange={this.handleInput}
                    value={this.state.teams.website}
                />
            </form> 
            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">
                    Team
                </InputLabel>
                <Select
                    native
                    value={this.state.teams.id}
                    onChange={this.handleInput}
                    inputProps={{
                        name: 'team',
                        id: 'outlined-team-native-simple',
                    }}
                >
                    <option value="" />  
                    <option value="1">Chelsea FC</option>
                    <option value="3">Manchester United</option> 
                    <optiopn value="16">Atlanta United</optiopn>

                </Select>
            </FormControl>
            <Button variant="contained" onClick={this.handleSubmit} style={styling.merchAdd}>
                Add New Merchandise
        </Button>
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
   }

}

export default class MerchandiseList extends React.Component {
    state = {
        merchandise: []
    }
    componentDidMount() {
        this.getMerchandiseFromServer()
    }

    getMerchandiseFromServer = () => {
        fetch('/api/merchandise/')
            .then(res => res.json())
            .then(json => {
                this.setState({ merchandise: json })
            })
    }

    render() {
        return (
            <div>
                <div style={styling.merchForm}>
                    <NewMerchandiseForm addNewMerchandise={this.addNewMerchandise} />
                </div>
                <ul>
                    {this.state.merchandise.map(merchandise => (
                        <li>
                            <img src={merchandise.picture} style={styling.merchImage}
                            /><br />
                            {merchandise.description} <br />
                            {merchandise.price} <br />
                            <Button variant="contained" href={merchandise.website} target="_blank" style={styling.merchLink}>
                                Buy
                                </Button>
                            <hr />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}