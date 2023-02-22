import React from "react";
class Dummy extends React.Component{

    constructor(props){
        super(props)
        this.state={
            a:1,
            b:2,
            c:3,
            d:4,
            e:5
        }
    }
    changeA=()=>{
        this.setState({a:2});
    }
    changeB=()=>{
        this.setState({b:3});
    }
    changeC=()=>{
        this.setState({c:4});
    }
    changeD=()=>{
        this.setState({d:5});
    }
    changeE=()=>{
        this.setState({e:6});
    }
    changeAll=()=>{
        this.changeA()
        this.changeB()
        this.changeC()
        this.changeD()
        this.changeE()

    }



render(){
    
    return(
        <div class="dummy">
        <h3>Value a: {this.state.a}</h3>
        <h3>Value b: {this.state.b}</h3>
        <h3>Value c: {this.state.c}</h3>
        <h3>Value d: {this.state.d}</h3>
        <h3>Value e: {this.state.e}</h3>
        <br></br>
        <h2>Perimeter of Polygon:</h2>
        <h1>{this.state.a+this.state.b+this.state.c+this.state.d+this.state.e}</h1>

        <br></br>
        <button onClick={this.changeA}>Change a</button><br></br>
        <button onClick={this.changeB}>Change b</button><br></br>
        <button onClick={this.changeC}>Change c</button><br></br>
        <button onClick={this.changeD}>Change d</button><br></br>
        <button onClick={this.changeE}>Change e</button><br></br>
        <button onClick={this.changeAll}>Change all</button><br></br>
        
        </div>
    )
}
}

export default Dummy