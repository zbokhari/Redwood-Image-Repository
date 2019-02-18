import React, { Component } from 'react';
import './transfergif.css'

class TransferGif extends Component {
    /* Set initial state for captures array to be populated with details*/
    state = {
        imgURL: '',
        imageName: '',
        imageCaption: '',
        format: false
    }
    checkGIF = imgURL => {
        if ((imgURL.match(/\.(gif)$/) != null) === true) {
            this.setState({
                format: true
            })
        }
        else (
            window.alert("Please input correct file type [.gif])")
        )
    }

    submitPic = (event) => {
        let picObj = {
            imgURL: this.state.imgURL,
            imageName: this.state.imageName,
            imageCaption: this.state.imageCaption,
        }

        this.props.saveCapture(event, picObj)

        this.setState({
            imgURL: '',
            imageName: '',
            imageCaption: '',
            format: false
        });
    }

    render() {
        return (
            <div>
                <div className="form-capture-box">
                    <input className="form-control"
                        type="text"
                        value={this.state.imgURL}
                        onChange={(e) => this.setState({ imgURL: e.target.value })} />
                    <button className="btn btn-primary cap_url"
                        onClick={() => this.checkGIF(this.state.imgURL)}
                    >Capture URL
                            </button>
                </div>
                {this.state.imgURL && (<img className="cap_image" src={this.state.imgURL} alt="" />)}

                {this.state.format && (
                    <div>
                        <div className='form-input-box'>
                            <input className="form-control"
                                placeholder="Name your image"
                                type="text"
                                value={this.state.imageName}
                                onChange={e => this.setState({ imageName: e.target.value })} />
                            <input className="form-control"
                                placeholder="Enter a caption for your image"
                                type="text"
                                value={this.state.imageCaption}
                                onChange={e => this.setState({ imageCaption: e.target.value })} />
                        </div>

                        <div>
                            <button className="btn btn-primary float-right"
                                onClick={(event) => this.submitPic(event)}
                            >SAVE</button>
                        </div>
                    </div>)}
            </div>
        );
    }
}


export default TransferGif;