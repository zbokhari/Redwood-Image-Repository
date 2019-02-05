/* Import React, this is a component[PNG], Import Home for Home button*/

import React, {Component} from 'react';
import {HOME, GIF, JPEG} from './../paths';
import TransferPng from './transferpng'
import ImageRepo from './imagerepository'

class Png extends Component {
/* Set initial state for imgURL string and captures array to be populated with images*/

    state ={
        flag: false,
        format: false,
        captures:[
            {
                imgURL: 'https://upload.wikimedia.org/wikipedia/it/5/50/Mario_Nintendo.png',
                userName: 'Mr Nintendo',
                imageName: 'Mario',
                imageCaption: 'Mario Profile Picture' 
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

    checkPNG = imgURL => {
        if ((imgURL.match(/\.(png)$/) !=null)===true){
            this.setState({
                format:true
            })
        }
        else(
            window.alert("Please input correct file type [.png])")
        )
    }

    render() {
        return(
            <div className="png-background-container">
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
                                    this.props.reDirect(JPEG)}
                                >JPG
                            </button>
                        </div>
                    </div>
                    <div className="capture-handler col-sm">
                        <h1>PNG</h1>
                        <button
                            className = "btn btn-light"
                            onClick = {() => { 
                                this.setState(
                                    {
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
                            <TransferPng  
                                format = {this.state.format}
                                data={this.state.captures} 
                                saveCapture={this.saveCapture} 
                                checkPNG={this.checkPNG}
                                deleteCapture={this.deleteCapture}/>
                        }
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>    
        );
    }   
}

export default Png;