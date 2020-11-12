import React from 'react';

const Tittle = ({name, title}) => {
    return (
        <div className="row ">
        <div className="col-10 mx-auto text-center my-3">
    <h1 className="text-capitalize font-weight-bold">{name}<strong className="text-blue"> {title}</strong></h1>
        </div>
        </div>
    );
};

export default Tittle;