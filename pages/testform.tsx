import { FunctionComponent, useState } from "react";

function Testform () {

    const [myval, setMyval ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(myval);
    }

    return (
    <div>
        {myval}
        <input type="text" onChange={event => {setMyval(event.target.value)}}></input>
        <input type="submit" onClickCapture={handleSubmit}></input>
    </div> 
    )
}

export default Testform;