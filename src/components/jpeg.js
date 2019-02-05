/* Import React, this is a component[JPEG], Import Home for Home button*/

import React, {Component} from 'react';
import {HOME, GIF, PNG} from './../paths';
import TransferJpeg from './transferjpeg'
import ImageRepo from './imagerepository'

class Jpeg extends Component {
/* Set initial state for imgURL string and captures array to be populated with images*/

    state ={
        flag: false,
        format: false,
        captures:[
            {
                imgURL: 'https://c2.staticflickr.com/2/1675/24463970746_432db1ec24_o.jpg',
                userName: 'Retrofuturism',
                imageName: 'Vertical Takeoff',
                imageCaption: 'Imagine that...' 
            }
        ]
    }

/* Save an image details to storedimages.js*/
    saveCapture = (event, newCapture) => {
        event.preventDefault();

        let updateCaptures = [...this.state.captures, newCapture];

        this.setState({
        captures: updateCaptures
        });
    }

/* Delete an image from storedimages.js or transfer.js*/
    deleteCapture = (index) => {
        let updateCaptures = [...this.state.captures];
        updateCaptures.splice(index,1);

        this.setState({
        captures: updateCaptures
        });
    }

    checkJPEG = imgURL => {
        if ((imgURL.match(/\.(jpg|jpeg|jpe|jif|jfif|jfi)$/) !=null)===true){
            this.setState({
                format:true
            })
        }
        else(
            window.alert("Please input correct file type [.jpg,.jpeg,.jpe,.jif,.jfif,.jfi]")
        )
    }

    render() {
        return(
            <div className="jpeg-background-container">
                <div className="row">
                    <div className="navigation-bar col-sm">
                        <div>
                            <button
                                className = "btn btn-dark btn-spacing"
                                onClick = {()=>
                                    this.props.reDirect(HOME)}
                            >Home
                            </button>
                        </div>
                        <div>
                            <button
                                className = "btn btn-primary btn-spacing"
                                onClick = {()=>
                                    this.props.reDirect(GIF)}
                            >GIF
                            </button>
                        </div>
                        <div>
                            <button
                                className = "btn btn-secondary btn-spacing"
                                onClick = {()=>
                                    this.props.reDirect(PNG)}
                                >PNG
                            </button>
                        </div>
                    </div>
                    <div className="capture-handler col-sm">
                        <h1>JPG</h1>
                        <button
                            className = "btn btn-light"
                            onClick = {() => { 
                                this.setState(
                                    {flag: !this.state.flag}) 
                            }}
                            >BEGIN
                        </button>
                    </div>
                    <div className="imgrepo-pos col-sm">
                    {
                    this.state.captures.length > 0
                     &&
                    (
                    <ImageRepo data={this.state.captures} deleteCapture={this.deleteCapture}/>)
                    } 
                    </div>
                </div>                
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        {
                            this.state.flag
                            &&
                            <TransferJpeg
                                format = {this.state.format}  
                                data={this.state.captures} 
                                saveCapture={this.saveCapture}
                                checkJPEG={this.checkJPEG} 
                                deleteCapture={this.deleteCapture}/>
                        }
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>    
        );
    }   
}

export default Jpeg;