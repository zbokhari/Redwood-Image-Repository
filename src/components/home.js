import React from 'react';
import {GIF, JPEG, PNG} from './../paths';

const Home = (props) => {
    return(
        <div className="header-container">
            <img className="image-home" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/A_view_of_the_map_repository_at_The_National_Archives.jpg/1200px-A_view_of_the_map_repository_at_The_National_Archives.jpg" alt="Wikimedia Commons Repository" width="100%"/>
            <div className="text-block"> 
                <h1>Redwood Image Repository</h1>                
                    <h5> Select an image file type:</h5>
                    <ul>
                        <li className="button-container">
                            <button className="btn btn-primary button-fnc"
                                onClick={()=> {
                                props.reDirect(GIF)
                                }}>GIF</button>
                            <button className="btn btn-primary button-fnc"
                                onClick={()=> {
                                props.reDirect(JPEG)
                                }}>JPG</button>
                            <button className="btn btn-primary button-fnc"
                                onClick={()=> {
                                props.reDirect(PNG)
                                }}>PNG</button>
                        </li>
                    </ul>
            </div>
        </div>
    );
}
export default Home;