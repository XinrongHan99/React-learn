import { SplitScreen } from "./SplitScreen";
import React from "react";
import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";

const LeftHandComponent = () => {
  return <h1 style={{backgroundColor:"green"}}>Left</h1>;
};
const RightHandComponent = () => {
  return <h1 style = {{backgroundColor:'blue'}}>Right</h1>;
};

function App() {
  return (
    // <SplitScreen
    //   leftWeight={1}
    //   rightWeight={3}
    // >
    //   <LeftHandComponent />
    //   <RightHandComponent />
    // </SplitScreen>
    // <UncontrolledForm />
    <ControlledForm />
  );
}


export default App;
