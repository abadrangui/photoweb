import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom'

import './screenStyles.scss';

function UploadScreen() {
    const history = useHistory()
    const routeMatch = useRouteMatch();

    console.log(routeMatch)

    return (
        <div className="body">
            <div className="container">
                <div className="titleContainer">
                    <h1>upload photos</h1>
                </div>
                <div className="sectionContainer">

                    <div className="detailCol">
                        <h1>Album title</h1>
                        <p>desc</p>
                        <p>tags</p>
                        <h3>price</h3>
                    </div>
                    <div className="photoCol">
                        <span>photo</span>
                        <span>photo</span>
                        <span>photo</span>
                        <span>photo</span>
                        <span>photo</span>
                        <span>photo</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadScreen;