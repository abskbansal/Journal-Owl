import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = () => {
    return (
        <div className='error-box'>
            <div className="error-message">
                <div className="error-icon">
                    <span>!</span>
                </div>
                <p>Error fetching data. Please try again later.</p>
            </div>
        </div>
    );
}

export default ErrorMessage;
