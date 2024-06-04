import {userRouteError} from 'react-router-dom';

export default function ErrorPage() {
    const error = userRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <h1>404 Error</h1>
            <p>An unexpected error has occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
                </p>
                </div>
    );
}
