import React from 'react';
import Button from "@material-ui/core/Button";


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