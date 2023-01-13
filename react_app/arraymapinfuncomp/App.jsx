import React from 'react';
import Student from './Student.jsx'

const App = () => {
    return (
        <>
          <div className='container'>
            <div className='row'>
                <div className="col-12 text-center text-primary h1 mt-3">
                    <h3>Student Records</h3>

                </div>
                <Student></Student>

            </div>
            
          </div>  
        </>
    );
}

export default App;
