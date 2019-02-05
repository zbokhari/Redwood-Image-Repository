import React, { Component } from 'react';

class TransferPng extends Component {
/* Set initial state for captures array to be populated with details*/
    state = {
                imgURL: '',
                userName: '',
                imageName: '',
                imageCaption: '',
                format: false
            }

    checkPNG = imgURL => {
        this.props.checkPNG(imgURL)
            if (this.props.format === true) {
                this.setState({
                    format:true
                })
            }
        }
    
    submitPic = (event) => {
        let picObj = {
                imgURL: this.state.imgURL,
                userName: this.state.userName,
                imageName: this.state.imageName,
                imageCaption: this.state.imageCaption,
        }

        this.props.saveCapture(event, picObj)
        
        this.setState({
                imgURL: '',
                userName: '',
                imageName: '',
                imageCaption: '',
                flag: false,
                format: false
            });
    }

    render() {
        return(
        <div>
                <div className ="form-group">
                    <input  className = "form-control"
                            type="text"
                            value ={this.state.imgURL}
                            onChange = {(e)=> this.setState({imgURL: e.target.value})}/>
                    <button className="btn btn-primary float-right"
                            onClick={()=>this.checkPNG(this.state.imgURL)}
                            >Capture URL
                            </button>
                </div>
            { this.state.imgURL && (
            <img src={this.state.imgURL} alt=""/>
            )}
                    
            { this.state.format && (
                <div>
                    <div className="form-group">
                        <label>User Name</label>
                        <input  className="form-control"
                                type="text"
                                value={this.state.userName}
                                onChange={e => this.setState({ userName: e.target.value })}/>
                    </div>
                    <div className='form-group'>
                        <label>Image Name</label>
                        <input  className="form-control"
                                type="text"
                                value={this.state.imageName}
                                onChange={e => this.setState({ imageName: e.target.value })}/>
                    </div>
                    <div className='form-group'>
                        <label>Image Caption</label>
                        <input  className="form-control"
                                type="text"
                                value={this.state.imageCaption}
                                onChange={e => this.setState({ imageCaption: e.target.value })}/>
                    </div>
                    <div>
                        <button className="btn btn-primary float-right"
                                onClick={(event) => this.submitPic(event)}
                                    >SAVE</button>

                    </div>
                </div> )}
            </div>
            );
        }
}


export default TransferPng;