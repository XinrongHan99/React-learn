import React, { useState,useEffect } from 'react';

export const UncontrolledOnboardingFlow = ({children, onFinish}) => {
    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = (stepData) => {
        const nextIndex = currentIndex + 1;
        const updatedData = {...onboardingData, ...stepData};
        console.log('updatedData', updatedData);
        if(nextIndex < React.Children.count(children)){
            setCurrentIndex(nextIndex);
        }else{
            onFinish(updatedData);
        }

        setOnboardingData(updatedData);
    }

    const currentChild = React.Children.toArray(children)[currentIndex];
    if(React.isValidElement(currentChild)){
        return React.cloneElement(currentChild, {goToNext});
    }

    return currentChild;
}