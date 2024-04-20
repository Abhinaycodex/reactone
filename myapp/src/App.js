import "./index.js"

function App(){
    return <h1>Hello World <Mylive/>  ek Component <Component name = {"Abhiany"} />
    <Component name= "chintu" />
    <Component name= "mintu" /> </h1>;
        
}


function Component (props){

    return <h2> {props.name} aee chal chal hwa aane de  </h2>
}

function Mylive(){
    return (
    <div> mera naam chun chun chun  </div>
    );
}

// bhai App wala function chl rha hai kyuki App naam ka folder bna hua hai or uske andar se hum different function render krwa rhe hai 
// jese app k andar humne mylive use kra or component wala part bhi 


export default App;