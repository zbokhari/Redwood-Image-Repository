import React, { Component } from 'react';
import TransferGif from './transfergif.js'
import ImageRepo from '../imagerepo/imagerepository'
import './gif.css'

class Gif extends Component {
    /* Set initial state for captures array to be populated with details*/

    state = {
        flag: false,
        captures: [
            {
                imgURL: 'https://i.imgur.com/KOXOBiN.gif',
                imageName: 'Banana',
                imageCaption: 'Dance dance dance'
            }
        ]
    }

    saveCapture = (event, newCapture) => {
        event.preventDefault();
        let updateCaptures = [...this.state.captures, newCapture];
        this.setState({
            captures: updateCaptures
        });
    }
    deleteCapture = (index) => {
        let updateCaptures = [...this.state.captures];
        updateCaptures.splice(index, 1);
        this.setState({
            captures: updateCaptures
        });
    }        

    render() {
        return (
            <div className="gif_bg">
                <div className="row">
                    <div className="gif_leftside col-md-6">
                        <h1>GIF</h1>
                        <button
                            className="btn btn-light button-content"
                            onClick={() => {
                                this.setState({
                                    flag: !this.state.flag,
                                })
                            }}
                        >BEGIN
                        </button>
                        {
                            this.state.flag
                            &&
                            <TransferGif
                                imgURL={this.state.imgURL}
                                data={this.state.captures}
                                saveCapture={this.saveCapture}
                                deleteCapture={this.deleteCapture} />

                        }
                    </div>
                    <div className="gif_rightside col-md-6">
                        {
                            this.state.captures.length > 0
                            &&
                            (
                                <ImageRepo data={this.state.captures} deleteCapture={this.deleteCapture} />)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Gif;