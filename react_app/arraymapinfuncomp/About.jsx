import React from 'react';

const About = (props) => {
    return (
        <>
        <div className="col-4 mb-5">
            <div className="card shadow-lg text-center">
                    <div className="card-header bg-alert alert-success border-0 text-center" style={{height:'100px'}}>
                        <img className='border shadow-lg rounded-circle' src={props.img} alt="" style={{height:'100%'}}/>
                        </div>
                    <div className="card-body p-4 cardbody border-0">
                        <h2>Name: {props.name}</h2>
                        <p>Gender: {props.gender}</p>
                        <p>Age: {props.age}</p>
                        <p>Marks: {props.marks}</p>
                        <p>Address: {props.address}</p>
                    </div>
                    <div className='card-footer border-0'>
                            <button className='btn btn-primary rounded-pill btn-lg'>Read More</button>
                    </div>
            </div>
        </div>
        </>
    );
}

export default About;
