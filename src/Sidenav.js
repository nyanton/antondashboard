import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Button from 'react-bootstrap/Button';

function Sidenav() {
    return (
        <div className="sidenav">
            {setButton("Home")}
            {setButton("To Do")}
            {setButton("Notes")}
            {setButton("Finances")}
        </div>
    )

    function setButton(title){
        return(
            <Button bsStyle="success" onClick={(e) => ReactDOM.render(<Header title={title} />, document.getElementById('app'))}>{title}</Button>
        )
    }
}

export default Sidenav;