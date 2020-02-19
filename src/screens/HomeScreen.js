import React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom'

function HomeScreen() {
    const history = useHistory();
    const location = useLocation();
    const params = useParams();
    const routeMatch = useRouteMatch()

    console.log("history ", history);
    console.log("location ", location);
    console.log("params ", params);
    console.log("routeMatch ", routeMatch);
    return (
        <div>
            <h1>This is home page</h1>
            <button onClick={()=>history.push('upload')}> upload</button>
        </div>
    )
}

export default HomeScreen;