import React, { Component } from 'react';


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
                <ul>
                    {this.state.merchandise.map(merchandise => (
                        <li>
                            {merchandise.description}
                        </li>
                    ) )}
                </ul>
            </div>
        )
    }
}