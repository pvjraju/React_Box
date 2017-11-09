import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editbox from './components/Editbox';
import Deletebox from './components/Deletebox';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
class App extends Component {

  constructor(props) {
    super(props);
    this.Box=this.Box.bind(this);
    this.Boxer=this.Boxer.bind(this);
    this.state={
      input:10,
      end:0
    }
  }
  Box(){
    this.input=document.getElementById("rec").value;
    var boxColor="FFFFF0";
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var x=120;
    var y=20;
    //var end=y;

    var width=150;
    var height=100;
    var changeColor="0000FF";
    var select="1";

    for( var i=0;i<this.input;i++)
    {
     
      //document.getElementById("boxcan").innerHTML.boxColor="red";
      boxColor="red";
      ctx.fillStyle = boxColor;
      ctx.fillRect(x,y,width,height);
      alert(y);
      y+=120;
      this.end=y;
       var can=document.getElementById("canvas");
      ///alert(can.width);
      //can.width=;
       //alert(can.width);
      can.heigth+=height;

      //alert(this.end);
    }
  
  }
  Boxer(){
    var c =document.getElementById("canvas");
    var ctx=c.getContext("2d");
    ctx.fillStyle="blue";
    ctx.fillRect(120,this.end,150,100);
    this.end+=120;
  }

  render() {
      //this.end;
      var end=100;
    return (
      <HashRouter>
      <div className="App">
        <h1>Box Editor</h1>
        <form>
          <input type="number" name="recCount" id="rec" onBlur={this.Box} placeholder="enter number of boxes"/>
        </form>  
         <div id=" ">
          <canvas id="canvas" width="400" height="1000"></canvas>
          <button onClick={this.Boxer}>Add Box</button>
         </div>
         <div align="">
          <NavLink to="/edit">edit    </NavLink> 
          <NavLink to="/delete">    delete</NavLink>
          </div>
         <div align="">
          <Route path="/edit" component={Editbox}/>
          <Route path="/delete" component={Deletebox}/>
         </div>
       
      </div>
      </HashRouter>
    );
  }
}

export default App;
