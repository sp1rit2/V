import React, { Component } from 'react'
import './shortestpath.css'
import * as dj from './djkstra'

class ShortestPath extends Component{
    constructor(){
        super()
        this.state={
            r:38,
            c:70,
            row:[],
            col:[],
            src:[],
            dest:[],
            walls:[],
            isMousePressed:false,
            isPath:true,
            flag:0,
            isActive:false
        }
    }
    async fillPath (r,c)
    {

        console.log("ch:-->"+this.state.ch+" "+r+" "+c)
        // alert(1)
        var src=this.state.src;
        var dest=this.state.dest;
        var walls=this.state.walls;
        // console.log(r+" "+c+" "+(Number(r)*20+Number(c)))
        const blocks = document.getElementsByClassName('blocks')
        if(this.state.flag==1)
        {
            // if(blocks[Number(r)*this.state.r+Number(c)].style.backgroundImage=='radial-gradient(circle, black, black, black)'||c<7||c>27)
            //     return
            if(blocks[Number(r)*this.state.r+Number(c)].style.backgroundColor=='black'||c<7||c>27)
                return

            if(src.length!=0)
            {
                // blocks[Number(src[0])*this.state.r+Number(src[1])].style.backgroundImage='radial-gradient(circle, white, white, white)'
                blocks[Number(src[0])*this.state.r+Number(src[1])].style.backgroundColor='azure'    
            }
            // blocks[Number(r)*this.state.r+Number(c)].style.backgroundImage='radial-gradient(circle, royalblue, royalblue, white)';
            blocks[Number(r)*this.state.r+Number(c)].style.backgroundColor='orange';

            src=[r,c];
            this.setState({src:src})
            // if(!this.state.isPath)
            // {
            //     for(var i=0;i<this.state.c*this.state.r;i++)
            //     {
            //         if(blocks[i].style.backgroundImage=='radial-gradient(circle, royalblue, royalblue, white)'
            //             ||blocks[i].style.backgroundImage=='radial-gradient(circle, red, red, white)')
            //         {
            //             blocks[i].style.backgroundImage='radial-gradient(circle, white, white, white)'
            //         }
                        
            //     }

            //     // this.dj();
            // }
        }
        if(this.state.flag==2)
        {
            // if(blocks[Number(r)*this.state.r+Number(c)].style.backgroundImage=='radial-gradient(circle, black, black, black)')
            //     return
            if(blocks[Number(r)*this.state.r+Number(c)].style.backgroundColor=='black'||c<7||c>27)
                return

            // var color = blocks[Number(dest[0])*this.state.r+Number(dest[1])].style.backgroundImage;
            if(dest.length!=0)  
            {
                // blocks[Number(dest[0])*this.state.r+Number(dest[1])].style.backgroundImage='radial-gradient(circle, white, white, white)' 
                blocks[Number(dest[0])*this.state.r+Number(dest[1])].style.backgroundColor='azure' 
            }   
            blocks[Number(r)*this.state.r+Number(c)].style.backgroundColor='darkred';

            dest=[r,c];
            this.setState({dest:dest})
            // if(!this.state.isPath)
            // {
            //     for(var i=0;i<this.state.c*this.state.r;i++)
            //     {
            //         if(blocks[i].style.backgroundImage=='radial-gradient(circle, royalblue, royalblue, white)'
            //             ||blocks[i].style.backgroundImage=='radial-gradient(circle, red, red, white)')
            //             blocks[i].style.backgroundImage='radial-gradient(circle, white, white, white)'
            //     }

            //     this.dj();
            // }
        }
        if(this.state.flag==3)
        {    
            // if(blocks[Number(r)*this.state.r+Number(c)].style.backgroundImage=='radial-gradient(circle, royalblue, royalblue, white)')
            //     return
            if(blocks[Number(r)*this.state.r+Number(c)].style.backgroundColor=='orange')
                return
            // if(blocks[Number(r)*this.state.r+Number(c)].style.backgroundImage=='radial-gradient(circle, green, green, white)')
            //     return
            if(blocks[Number(r)*this.state.r+Number(c)].style.backgroundColor=='darkred')
                return
            console.log("inside 3"+" "+walls +" "+ src)
            blocks[Number(r)*this.state.r+Number(c)].style.backgroundColor='black'
            for(var i=0;i<walls.length;i++)
            {
                if(walls[i][0]==r&&walls[i][1]==c)
                {
                    return
                }
            }
            console.log("inside 3")
            walls.push([r,c]);
            this.setState({walls:walls})
            console.log(walls+" "+walls.length);
        }
        if(this.state.flag==4)
        {    
            if(blocks[Number(r)*this.state.r+Number(c)].style.backgroundColor=='black')
            {
                for(var i=0;i<walls.length;i++)
                {
                    if(walls[i][0]==r&&walls[i][1]==c)
                    {
                        walls.splice(i,1);
                        blocks[Number(r)*this.state.r+Number(c)].style.backgroundColor='azure'
                        break;
                    }
                }
                // walls.reduce([r,c]);
                this.setState({walls:walls})
                console.log("walls: "+walls);
            }
        }
    }
    componentDidMount()
    {
        var row=[],col=[];
        for(var i=0;i<this.state.c;i++)
            row.push([i]);
        
        for(var i=0;i<this.state.r;i++)
            col.push([i]);
        
        this.setState({row:row,col:col})
    }
    handleOnMouseDown(r,c){
        // if(this.state.ch==3||this.state.ch==4)
        // {
            this.setState({isMousePressed:true})
            this.fillPath(r,c)
        // }
    }
    handleOnMouseOver(r,c){
        if(this.state.isMousePressed==true)
        {
            this.fillPath(r,c)
        }
    }
    handleOnMouseUp(r,c){
        if(this.state.isMousePressed==true)
        {
            this.setState({isMousePressed:false})
        }
    }

    reset(){
        var blocks = document.getElementsByClassName("blocks")

        for(var i=0;i<blocks.length;i++)
        {
            blocks[i].style.backgroundColor='azure';
        }
        this.setState({
            src:[],
            dest:[],
            walls:[],
            isMousePressed:false,
            isPath:true,
            flag:0,
            isActive:false
        })


    }

    async dj(){
        var src=this.state.src;
        var dest=this.state.dest;
        var walls=this.state.walls;
        await dj.djkshtra(src,dest,walls,120,this.state.r,this.state.c,this.state.isPath)
        this.setState({isActive:true})
    }

    render(){
        console.log(this.state.row+" "+this.state.col)
        if(this.state.src.length==0||this.state.dest.length==0)
        {
            return(
                <div className="sp_main">
                        <center>
                            <div className="sp_nav">
                                <label className="sp_keys" onClick={()=>this.setState({flag:1})}>Source</label>
                                <label className="sp_keys" onClick={()=>this.setState({flag:2})}>Destination</label>
                                <label className="sp_keys" onClick={()=>this.setState({flag:3})}>Walls</label>
                                <label className="sp_keys" onClick={()=>this.setState({flag:4})}>Remove walls</label>
                                <label className="sp_keys" style={{cursor:'not-allowed'}}>Activate DJkshtra's</label>
                                <label className="sp_keys" style={{cursor:'not-allowed'}}>Reset</label>
                            </div>
                            <div >
                                {this.state.row.map((rows)=>
                                    <div className="path">
                                        {this.state.col.map((columns)=>
                                            <div className="blocks" onMouseDown={()=>this.handleOnMouseDown(rows,columns)}
                                                onMouseOver={()=>this.handleOnMouseOver(rows,columns)} 
                                                    onMouseUp={()=>this.handleOnMouseUp(rows,columns)} onClick={()=>this.fillPath(rows,columns)}></div>)}
                                    </div>)}
                            </div>
                        </center>
                </div>
            );
        }
        else if(!this.state.isActive)
        {
            return(
                <div className="sp_main">
                            <center>
                                <div className="sp_nav">
                                    <label className="sp_keys" onClick={()=>this.setState({flag:1})}>Source</label>
                                    <label className="sp_keys" onClick={()=>this.setState({flag:2})}>Destination</label>
                                    <label className="sp_keys" onClick={()=>this.setState({flag:3})}>Walls</label>
                                    <label className="sp_keys" onClick={()=>this.setState({flag:4})}>Remove walls</label>
                                    <label className="sp_keys" onClick={()=>this.dj()}>Activate DJkshtra's</label>
                                    <label className="sp_keys" style={{cursor:'not-allowed'}}>Reset</label>
                                </div>
                                <div >
                                    {this.state.row.map((rows)=>
                                        <div className="path">
                                            {this.state.col.map((columns)=>
                                                <div className="blocks" onMouseDown={()=>this.handleOnMouseDown(rows,columns)}
                                                    onMouseOver={()=>this.handleOnMouseOver(rows,columns)} 
                                                        onMouseUp={()=>this.handleOnMouseUp(rows,columns)} onClick={()=>this.fillPath(rows,columns)}></div>)}
                                        </div>)}
                                </div>
                            </center>
                    </div>
            );
        }
        else
        {
            return(
                <div className="sp_main">
                            <center>
                                <div className="sp_nav">
                                    <label className="sp_keys" style={{cursor:'not-allowed'}}>Source</label>
                                    <label className="sp_keys" style={{cursor:'not-allowed'}}>Destination</label>
                                    <label className="sp_keys" style={{cursor:'not-allowed'}}>Walls</label>
                                    <label className="sp_keys" style={{cursor:'not-allowed'}}>Remove walls</label>
                                    <label className="sp_keys" style={{cursor:'not-allowed'}}>Activate DJkshtra's</label>
                                    <label className="sp_keys" onClick={()=>this.reset()}>Reset</label>
                                </div>
                                <div >
                                    {this.state.row.map((rows)=>
                                        <div className="path">
                                            {this.state.col.map((columns)=>
                                                <div className="blocks" onMouseDown={()=>this.handleOnMouseDown(rows,columns)}
                                                    onMouseOver={()=>this.handleOnMouseOver(rows,columns)} 
                                                        onMouseUp={()=>this.handleOnMouseUp(rows,columns)} onClick={()=>this.fillPath(rows,columns)}></div>)}
                                        </div>)}
                                </div>
                            </center>
                    </div>
            );
        }
    }
}

export default ShortestPath