import React, { Component } from 'react';
import TransferJpeg from './transferjpeg.js'
import ImageRepo from '../imagerepo/imagerepository'
import './jpeg.css'

class Jpeg extends Component {
    /* Set initial state for imgURL string and captures array to be populated with images*/

    state = {
        flag: false,
        captures: [
            {
                imgURL: 'https://c2.staticflickr.com/2/1675/24463970746_432db1ec24_o.jpg',
                imageName: 'Vertical Takeoff',
                imageCaption: 'Imagine that...'
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
            <div className="jpeg_bg">
                <div className="row">
                    <div className="jpeg_leftside col-md-6">
                        <h1>JPEG</h1>
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
                            <TransferJpeg
                                imgURL={this.state.imgURL}
                                data={this.state.captures}
                                saveCapture={this.saveCapture}
                                deleteCapture={this.deleteCapture} />

                        }
                    </div>
                    <div className="jpeg_rightside col-md-6">
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

export default Jpeg;