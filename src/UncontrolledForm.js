import React from 'react';
export const UncontrolledForm = () => {
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef();

    const handleSubmit = (event) => {
        console.log('Name:', nameInput.current.value);
        console.log('Age:', ageInput.current.value);
        console.log('Hair Color:', hairColorInput.current.value);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" ref={nameInput} />
            <input name="age" type="text" placeholder="Age" ref={ageInput}/>
            <input name="hairColor" type="text" placeholder="Hair Color" ref={hairColorInput} />
            <input type="submit" value="Submit" />
        </form>
    );
}