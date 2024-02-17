import React, { useState,useEffect } from 'react';

export const ControlledForm = () => {
    const[nameInputError, setNameInputError] = useState('dfa');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [hairColor, setHairColor] = useState('');

    //Advantage: do form validation while typing
    useEffect(() => {
        if(name.length > 0 && name.length < 2){
            setNameInputError('Name must be at least 2 characters');
        }else{
            setNameInputError('');
        }
    },[name]);

    return(
        <form>
            {nameInputError && <p>{nameInputError}</p>}
            <input name="name" type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
            <input name="age" type="text" placeholder="Age" value={age} onChange={(event) => setAge(event.target.value)} />
            <input name="hairColor" type="text" placeholder="Hair Color" value={hairColor} onChange={(event) => setHairColor(event.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    );

}