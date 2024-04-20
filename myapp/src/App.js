import "./App.css";

import {Header} from "./components/Header" ;
import { Home } from "./components/Home";


// yaha pe humne ek function bnaya hai 

// kahi bhi js likh lo but return wale part k andar nhi 

const a=9999;

function App(){
    const b=10000;
    return <h1>Hello World  <hr />
     <Header /> 
     <hr /> 
     <Mylive/> {a} +{b} ={a+b} Component baby sunn sunn sunn <hr /> 
     <Home /> <hr />
     
    <Component name = {"Abhiany"} nameforClass={"phela_div"} income={2000000} />
    <hr />
    <Component name= "chintu"  income ={10000} nameforClass={"dusra"} />
    <hr />

    <Component name= "mintu" nameforClass={"teesra"} /> </h1>;
        
}


function Component ({name , nameforClass, income =5000}){

    return <>
    <div className={nameforClass} > {name} sir ki salary : $ {income} sb kamaya hai </div>
    </>
}

function Mylive(){
    return (
    <div> mera naam chun chun chun  </div>
    );
}


// bhai App wala function chl rha hai kyuki App naam ka folder bna hua hai or uske andar se hum different function render krwa rhe hai 
// jese app k andar humne mylive use kra or component wala part bhi 


export default App;