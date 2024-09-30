"use client"

function ErrorPage({error} : {error: Error}) {
    return (
        <div>
            <h1>Esto es un error</h1>
            <h1>{error.message}</h1>
        </div>
    )
}

export default ErrorPage
