// import "./index.js"

// function App(){
//     return <h1>Hello World <Mylive/>  ek Component <Component name = {"Abhiany"} nameForClass ="div1" />
//     <Component name= "chintu" />
//     <Component name= "mintu" /> </h1>;
        
// }


// function Component (props){

//     return <h2 className ={props.nameForClass}> {props.name} aee chal chal hwa aane de  </h2>
// }

// function Mylive(){
//     return (
//     <div> mera naam chun chun chun  </div>
//     );
// }

// // bhai App wala function chl rha hai kyuki App naam ka folder bna hua hai or uske andar se hum different function render krwa rhe hai 
// // jese app k andar humne mylive use kra or component wala part bhi 


// export default App;



import "./index.js"

function App(){
    return (
    <h1>Hello World <Mylive/> <Component Name = {"Abhiany"} nameForClass={"div1"} income={10000} />

    <Component Name= "chintu"  nameForClass= "div1" income={20000} / >
    <Component Name= "mintu"  nameForClass ="div2" income   / > </h1>
    );
        
}

function Component ({nameForClass , Name , income}){

    return <div className= {nameForClass} > {Name} chal hwa aane de  {income} yo </div>
}

function Mylive(){
    return (
    <div> mera naam chun chun chun  </div>
    );
}


export default App;