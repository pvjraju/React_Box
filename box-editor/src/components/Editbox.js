import React, {Component} from 'react';
import {App} from '../App';

class Editbox extends Component{

	constructor(props)
	{
		super(props);
		this.Edit=this.Edit.bind(this);
	}

  Edit(){
       var width=document.getElementById("width").value;
       var height=document.getElementById("height").value;
       var color=document.getElementById("color").value;
       alert(color);
       var box=document.getElementById("box").value;
       alert(box);
       var c=document.getElementById("canvas");
       var ctx=c.getContext("2d");
       var h1=20;
       var h2=140;
       var h3=260;
       var h4=380;
       var h5=500;
       switch(box){
       case '1':	
        //alert("works");
       ctx.fillStyle=color;
       ctx.fillRect(120,h1,width,height);
       h1=height;
       break;

       case '2':	
        //alert("works");
        alert("h2:"+h2);
       ctx.fillStyle=color;
       ctx.fillRect(120,h2,width,height);
       h2=height;
       break;

        case '3':	
        //alert("works");
       ctx.fillStyle=color;
       ctx.fillRect(120,h3,width,height);
        h3=height;
       break;

       case '4':	
        //alert("works");
       ctx.fillStyle=color;
       ctx.fillRect(120,h4,width,height);
       h4=height;
       break;

        case '5':	
        //alert("works");
       ctx.fillStyle=color;
       ctx.fillRect(120,h5,width,height);
       h5=height;
       break;




      }
    }
    Delete(){
  	  var width=document.getElementById("width").value;
       var height=document.getElementById("height").value;
       //var color=document.getElementById("color").value;
       //alert(color);
       var box=document.getElementById("box").value;
       alert(box);
       var c=document.getElementById("canvas");
       var ctx=c.getContext("2d");
       var h1=20;
       var h2=140;
       var h3=260;
       var h4=380;
       var h5=500;
       switch(box){
       case '1':	
        //alert("works");
       //ctx.fillStyle=color;
       ctx.clearRect(120,h1,width,height);
       h1=height;
       break;

       case '2':	
        //alert("works");
        alert("h2:"+h2);
       //ctx.fillStyle=color;
       ctx.clearRect(120,h2,width,height);
       h2=height;
       break;

        case '3':	
        //alert("works");
       //ctx.fillStyle=color;
       ctx.clearRect(120,h3,width,height);
        h3=height;
       break;

       case '4':	
        //alert("works");
       //ctx.fillStyle=color;
       ctx.clearRect(120,h4,width,height);
       h4=height;
       break;

        case '5':	
        //alert("works");
       //ctx.fillStyle=color;
       ctx.clearRect(120,h5,width,height);
       h5=height;
       break;




      }
  }
	render(){
		return(
			<div>
			 <h1>Edit Boxes</h1>
			 <input type="number" id="box" placeholder="enter the box to be edited"/><br/><br/>
			 <input type="number" id="width" placeholder="Enter the width"/><br/> <br/>
			 <input type="number" id="height" placeholder="Enter the height"/> <br/> <br/>
			 <input type="text" id="color" placeholder="Enter the color"/> <br/> <br />
			 <button onClick={this.Edit}>save</button> 
			 <button onClick={this.Delete}>delete</button>
			 <button >cancel</button>
			</div> 
		);
	}
}
export default Editbox;