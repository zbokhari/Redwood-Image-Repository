import React, { Component } from 'react';
import TransferPng from './transferpng.js'
import ImageRepo from '../imagerepo/imagerepository'
import './png.css'

class Png extends Component {
    /* Set initial state for imgURL string and captures array to be populated with images*/

    state = {
        flag: false,
        captures: [
            {
                imgURL: 'https://upload.wikimedia.org/wikipedia/it/5/50/Mario_Nintendo.png',
                imageName: 'Mario',
                imageCaption: 'Mario Profile Picture'
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
            <div className="png_bg">
                <div className="row">
                    <div className="png_leftside col-md-6">
                        <h1>PNG</h1>
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
                            <TransferPng
                                imgURL={this.state.imgURL}
                                data={this.state.captures}
                                saveCapture={this.saveCapture}
                                deleteCapture={this.deleteCapture} />
                        }
                    </div>
                    <div className="png_rightside col-md-6">
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

export default Png;