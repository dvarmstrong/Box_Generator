
import React, { useState } from 'react';



// create a form that can be used to accept color input and submit it to the parent component
const Form = (props) => {

    const { boxColorArray, setBoxColorArray } = props;

    const [color, setColor] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        setBoxColorArray([...boxColorArray, color]);
    
        
    };

    return (
        <div>
            <form onSubmit={submitHandler} style={{ margin: '10px'}}>
                <h1>Add ColorBoxes</h1>
                <div>
                    <label htmlFor="color">Color: </label>
                    <input type="text" name= 'color' onChange={(e) => setColor(e.target.value)}  />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );




    
};
export default Form;




