import Tooltip from "./Tooltip";

function App() {
  return (
  //here below we have below,imported tooltip component and wrapped button inside it...
    <div className="App">
      
     <Tooltip text={"Thanks for hovering! I'm a tooltip"}>
        <button>Hover over me!</button>
     </Tooltip>
    </div>
  );
}

export default App;

