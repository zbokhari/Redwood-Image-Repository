import React from 'react';

const ImageRepo = props => {
    return( 
        <div>
                <h1>Stored Images</h1>
                    <div>
                    {
                        props.data.map( (item,index) => {
                            return(
                                <div key={index}>
                                    <div className="row image-row">
                                        <div className="col md-6">
                                        <div className="row">
                                        <div className="col md-4">
                                            <p>Username: {item.userName}</p>
                                        </div>
                                        <div className="col md-4">    
                                            <p>Image Name: {item.imageName}</p>
                                        </div>
                                        </div>    
                                            <img src={item.imgURL} alt=""/>
                                            <p>Image Caption: {item.imageCaption}</p>
                                        </div>
                                        
                                        <div className ="col-md-6">
                                            <button 
                                            className="float-right btn btn-danger"
                                            onClick ={props.deleteCapture}
                                            >X</button>
                                        </div>   
                                    </div>   
                                </div>
                            )
                        })
                    }
                    </div>
        </div>
    )
}

export default ImageRepo;