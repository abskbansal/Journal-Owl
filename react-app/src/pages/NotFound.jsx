import React from 'react'

const NotFound = () => {
    return (
        <div style={{ height: "80vh", width: "100%", display: "flex", alignItems: "center" }}>
            <div style={{ padding: "20px", textAlign: "center", width: "100%" }}>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
            </div>
        </div>
    );
}

export default NotFound