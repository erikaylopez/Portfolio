export default function ErrorPage() {
    const error = useError();
    console.log(error);

    return (
        <div id="error-page">
            <h1>404</h1>
            <p>Unexpected error has occured</p>
            <p>
            <i>{error.statusText || error.message}</i>

            </p>

        </div>
    );
}