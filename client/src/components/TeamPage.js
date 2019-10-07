import React, { Component } from 'react';


export default class TeamPage extends React.Component {
    state = {
        team: {
            merchandise: []
        },
    };
    componentDidMount() {
       this.getTeam()
        
    }

    getTeam = () => {
        fetch(`/api/team/${this.props.match.params.id}/`)
            .then(res => res.json())
            .then(json => {
                this.setState ({ team : json })
            })
    }
  
    render = () => {
        return (
            <div>
                <h1>Team Page of {this.props.match.params.id}</h1>
                Welcome to {this.state.team.name} Page
                <div>
                    <ul>
                        {this.state.team.merchandise.map(merchandise => (
                            <li>
                                {merchandise.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}