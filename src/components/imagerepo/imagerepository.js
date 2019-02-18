import React from 'react';
import './imagerepository.css'

const ImageRepo = props => {
    return (
        <div>
            <h1>Stored Images</h1>
            <div>
                {
                    props.data.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="row image-row">
                                    <div className="col-md-6">
                                        <button
                                            className="float-right btn btn-danger"
                                            onClick={props.deleteCapture}
                                        >X</button>
                                    </div>
                                    <div className="col md-6">
                                        <div className="row">
                                            <div className="col md-4">
                                            </div>
                                        </div>
                                        <img className="repo_image" src={item.imgURL} alt="" />
                                        <p>Image Name: {item.imageName}</p>
                                        <p>Image Caption: {item.imageCaption}</p>
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