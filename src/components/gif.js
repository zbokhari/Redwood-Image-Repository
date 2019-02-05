/* Import React, this is a component[GIF], Import Home for Home button*/

import React, {Component} from 'react';
import {HOME, JPEG, PNG} from './../paths';
import TransferGif from './transfergif'
import ImageRepo from './imagerepository'

class Gif extends Component {
/* Set initial state for captures array to be populated with details*/

    state ={
        flag: false,
        format: false,
        captures:[
            {
                imgURL: 'https://i.imgur.com/KOXOBiN.gif',
                userName: 'Me',
                imageName: 'Banana',
                imageCaption: 'Dance dance dance' 
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

    checkGIF = imgURL => {
        if ((imgURL.match(/\.(gif)$/) !=null)===true){
            this.setState({
                format:true
            })
        }
        else(
            window.alert("Please input correct file type [.gif])")
        )
    }

    render() {
        return(
            <div className="gif-background-container">
                <div className="row">
                    <div className="navigation-bar col-sm">
                        <div>
                            <button
                                className = "btn btn-dark btn-spacing"
                                onClick = {()=>
                                this.props.reDirect(HOME)}>
                                Home
                            </button>
                        </div>
                        <div>
                            <button
                                className = "btn btn-primary btn-spacing"
                                onClick = {()=>
                                    this.props.reDirect(JPEG)}
                            >JPG
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
                        <h1>GIF</h1>
                        <button
                            className = "btn btn-light"
                            onClick = {() => { 
                                this.setState({
                                        flag: !this.state.flag,
                                    }) 
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
                            <TransferGif  
                                format = {this.state.format}
                                data={this.state.captures} 
                                saveCapture={this.saveCapture} 
                                checkGIF={this.checkGIF}
                                deleteCapture={this.deleteCapture}/>
                                
                        }
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>    
        );
    }   
}

export default Gif;