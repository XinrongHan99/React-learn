import { SplitScreen } from "./SplitScreen";
import React,{useState} from "react";
import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

const LeftHandComponent = () => {
  return <h1 style={{backgroundColor:"green"}}>Left</h1>;
};
const RightHandComponent = () => {
  return <h1 style = {{backgroundColor:'blue'}}>Right</h1>;
};

const StepOne = ({goToNext}) => (
  <>
    <h1>Step 1</h1>
    <button onClick={()=>goToNext({name:"Abby"})}>Next</button>
  </>
);

const StepTwo = ({goToNext}) => (
  <>
    <h1>Step 2</h1>
    <button onClick={()=>goToNext({age:190})}>Next</button>
  </>
);

const StepThree = ({goToNext}) => (
  <>
    <h1>Step 3</h1>
    <p>Congratulations, you are old!</p>
    <button onClick={()=>goToNext({hairColor:"brown"})}>Next</button>
  </>
);

const StepFour = ({goToNext}) => (
  <>
    <h1>Step 4</h1>
    <button onClick={()=>goToNext({hairColor:"brown"})}>Next</button>
  </>
);

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({...onboardingData, ...stepData});
    setCurrentIndex(currentIndex + 1);
  }
  return (
    // <SplitScreen
    //   leftWeight={1}
    //   rightWeight={3}
    // >
    //   <LeftHandComponent />
    //   <RightHandComponent />
    // </SplitScreen>
    // <UncontrolledForm />
    // <ControlledForm />
    <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
      <StepOne />
      <StepTwo />
      {onboardingData.age >= 62 && <StepThree />}
      <StepFour />
    </ControlledOnboardingFlow>
  );
}


export default App;
