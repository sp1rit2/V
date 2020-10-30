import React, { Component } from 'react'
import './rng.css'
import * as sudoku from './rng/sudoku'
import * as kn from './rng/kn'
import * as m from './rng/mae'

class Rng extends Component{
    constructor(){
        super()
        this.state={
            flag:0,
            sR:[],
            sC:[],
            sudokuA:[],
            kn:[],
            kR:[],
            kC:[],
            R:0,
            C:0,
            r:57,
            c:22,
            row:[],
            col:[],
            isReady:false,
            mX:0,
            mY:0,
            isMousePressed:false,
            isKSet:false,
            ismae:false,
            isActive:false,
            built:false,
            isReady:false,
            mX:0,
            mY:0,
            isMousePressed:false,
            isKSet:false,
            ismae:false

        }
    }

    checkBoxes(r,c,grid,num)
    {
        if(r<3)
            {
                for(var i=0;i<3;i++)
                {
                    //for 1st box
                    if(c<3)
                    {
                        for(var j=0;j<3;j++)
                        {
                            console.log(r*9+j)
                            if(grid[i*9+j].innerHTML==num)
                            {
                                // alert("Box contains value")
                                return true
                            }
                        }
                    }
                    //for 2nd box
                    else if(c>=3&&c<6)
                    {
                        for(var j=3;j<6;j++)
                        {
                            if(grid[i*9+j].innerHTML==num)
                            {
                                // alert("Box contains value")
                                return true
                            }
                        }
                    }
                    //for 3rd box
                    else
                    {
                        for(var j=6;j<9;j++)
                        {
                            if(grid[i*9+j].innerHTML==num)
                            {
                                // alert("Box contains value")
                                return true
                            }
                        }
                    }
                }
            }
            else if(r>=3&&r<6)
            {
                for(var i=3;i<6;i++)
                {
                    //for 1st box
                    if(c<3)
                    {
                        for(var j=0;j<3;j++)
                        {
                            if(grid[i*9+j].innerHTML==num)
                            {
                                // alert("Box contains value")
                                return true
                            }
                        }
                    }
                    //for 2nd box
                    else if(c>=3&&c<6)
                    {
                        for(var j=3;j<6;j++)
                        {
                            if(grid[i*9+j].innerHTML==num)
                            {
                                // alert("Boxcontains value")
                                return true
                            }
                        }
                    }
                    //for 3rd box
                    else
                    {
                        for(var j=6;j<9;j++)
                        {
                            if(grid[i*9+j].innerHTML==num)
                            {
                                // alert("Box contains value")
                                return true
                            }
                        }
                    }
                }
            }
            else
            {
                for(var i=6;i<9;i++)
                {
                    //for 1st box
                    if(c<3)
                    {
                        for(var j=0;j<3;j++)
                        {
                            if(grid[i*9+j].innerHTML==num)
                            {
                                // alert("Box contains value")
                                return true
                            }
                        }
                    }
                    //for 2nd box
                    else if(c>=3&&c<6)
                    {
                        for(var j=3;j<6;j++)
                        {
                            if(grid[i*9+j].innerHTML==num)
                            {
                                // alert("Box contains value")
                                return true
                            }
                        }
                    }
                    //for 3rd box
                    else
                    {
                        for(var j=6;j<9;j++)
                        {
                            if(grid[i*9+j].innerHTML==num)
                            {
                                // alert("Box contains value")
                                return true
                            }
                        }
                    }
                }
            }
    }

    editVal(r,c){
        
        var val=Number(r)*9+Number(c);
        console.log("row "+r+" col"+c+" "+val);
        var num=Number(prompt("Enter number between 1-9"));
        const grid=document.getElementsByClassName('sudoku-grid');
        
        if(Number(num)>0&&Number(num)<10)
        {
            for(var i=0;i<9;i++)
            {
                console.log("row : "+(r*i+c)+" "+val)
                if(grid[r*9+i].innerHTML==num)
                {
                    alert("Row contains value")
                    return
                }
                if(grid[9*i+c].innerHTML==num)
                {
                    alert("Col contains value")
                    return
                }
            }
            //1st row of boxes
            
            if(this.checkBoxes(r,c,grid,num))
            {
                alert("Box contains this number")
                return;
            }

            var sudokuA=this.state.sudokuA;
            grid[val].innerHTML=num
            sudokuA[r][c]=num
            grid[val].style.color='black'
            this.setState({sudokuA:sudokuA});
        }

    }

    componentDidMount(){
        var sC=[],sR=[],sudokuA=[],kn=[],kC=[],kR=[]
        var row=[],col=[];
        for(var i=0;i<this.state.c;i++)
            row.push([i]);
        
        for(var i=0;i<this.state.r;i++)
            col.push([i]);
        
        for(var i=0;i<9;i++)
        {
            sR.push(i);
            sudokuA.push(new Array(0,0,0,0,0,0,0,0,0))
        }
        for(var i=0;i<9;i++)
            sC.push(i);

        
        for(var i=0;i<8;i++)
        {
            kC.push(0);
            kR.push(0);
            kn.push(new Array(0,0,0,0,0,0,0,0))
        }
        
        this.setState({
            sR:sR,sC:sC,sudokuA:sudokuA,kn:kn,kC:kC,kR:kR,row:row,col:col
        })

        

    }

    async sudoku(){
        const grid=document.getElementsByClassName('sudoku-grid');
        var x=[];
        for(var i=0;i<81;i++)
        {
            // await new Promise(resolve => setTimeout(resolve,10))
            grid[i].style.pointerEvents='none'
            x[i]=grid[i].style.backgroundColor;
        }
        await sudoku.sudoku(this.state.sudokuA,120)
        for(var i=80;i>=0;i--)
        {
            await new Promise(resolve => setTimeout(resolve,1))
            grid[i].style.backgroundColor=x[i]
        }
        this.setState({isActive:false})
    }

    resetSudoku(){
        this.setState({sudokuA:[]})
    }

    async kn(){
        await kn.knight(this.state.kn,this.state.R,this.state.C,120)
        this.setState({isActive:false})
    }

    knReset(){
        var kn=[]

        for(var i=0;i<8;i++)
            kn.push(new Array(0,0,0,0,0,0,0,0))

        this.setState({
            kn:kn
        })
    }

    setKnight(row,col)
    {
        // if(!this.state.isKSet)
        // {
            console.log("--> " +row+" "+col)
            const k = document.getElementsByClassName('kn')
            k[this.state.R*8+this.state.C].style.color='transparent'
            k[row*8+col].style.color='gold'
            this.setState({R:row,C:col,isKSet:true})
        // }
        // k[row*8+col].style.color='red'
    }

    async build(){
        if(!this.state.isReady)
        {
            var a=[0,0,1,0,2,0,3,0,4,0,5,0,5,1,5,2,0,2,1,4,2,2,2,4,4,3,4,4,4,5,4,6,5,5,6,5,7,5,8,5,8,6,9,6,10,6,11,6,12,6,0,6,2,6,2,7,3,8,4,8,5,8,4,2,2,3,4,7,2,8,2,9,0,11,1,11,2,11,0,1,0,3,0,4,0,5,0,7,0,8,0,9,0,10,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,6,0,7,0,8,0,12,0,9,0,11,0,10,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,42,0,43,0,44,0,45,0,46,0,47,0,48,0,49,0,50,0,51,0,52,0,53,0,54,0,55,0,56,0,56,1,56,2,56,3,56,4,56,5,56,6,56,7,56,14,56,15,56,16,56,17,56,18,56,19,56,20,56,21,55,21,54,21,53,21,52,21,51,21,50,21,41,21,40,21,39,21,38,21,43,21,44,21,45,21,46,21,47,21,48,21,49,21,42,21,37,21,36,21,35,21,34,21,33,21,32,21,31,21,30,21,29,21,28,21,27,21,26,21,25,21,24,21,23,21,22,21,21,21,20,21,19,21,18,21,17,21,16,21,15,21,14,21,13,21,12,21,11,21,10,21,9,21,8,21,7,21,6,21,5,21,4,21,3,21,2,21,1,21,4,10,5,10,6,10,7,10,7,9,7,8,7,7,8,7,4,11,4,12,4,13,6,13,5,13,6,12,7,1,7,2,7,3,8,3,9,3,10,3,10,4,10,2,1,13,2,13,2,14,2,15,4,15,5,15,6,15,6,16,6,17,4,17,3,17,2,17,1,17,2,19,3,19,3,20,5,19,6,19,7,19,8,19,8,18,7,16,8,16,9,16,10,18,10,19,10,20,8,12,8,13,8,14,9,9,10,9,11,8,10,8,12,8,14,8,13,8,13,6,14,6,15,8,15,7,15,6,15,5,15,4,13,4,12,4,12,3,12,2,12,1,15,3,15,2,14,2,10,14,10,13,10,12,9,12,9,10,12,10,13,10,13,11,13,13,13,14,14,14,16,14,17,14,17,15,17,17,18,17,18,18,18,20,15,10,15,11,15,12,14,10,14,15,14,16,15,17,15,16,12,16,12,17,12,18,13,18,13,19,12,20,13,20,15,20,15,19,16,19,10,16,17,1,17,2,18,2,19,2,20,2,17,7,17,9,17,6,17,5,17,4,17,10,17,11,17,12,18,6,19,6,19,7,19,8,19,9,19,10,18,10,19,14,19,15,20,15,20,16,20,17,20,18,20,19,20,20,19,12,20,12,21,12,21,11,21,10,21,9,21,8,21,7,21,6,21,5,21,4,20,4,19,4,18,4,22,14,22,15,23,14,24,14,25,14,22,1,22,2,23,2,24,2,23,3,23,6,23,5,23,4,24,6,25,6,24,8,23,8,23,7,24,9,24,10,23,12,24,12,25,12,25,13,12,13,23,10,22,10,23,16,22,16,24,16,25,16,26,16,28,16,27,16,27,15,27,14,27,13,28,13,29,13,29,14,30,14,31,14,26,10,27,10,27,11,28,11,27,9,27,8,26,8,25,4,26,4,27,4,27,5,27,6,26,1,26,3,26,2,28,6,29,6,30,6,29,1,29,2,29,3,28,2,29,4,30,4,31,4,32,4,32,5,32,6,32,7,32,8,30,7,30,8,29,8,29,9,30,11,29,11,31,11,31,12,32,12,33,12,33,13,33,14,33,15,31,15,31,16,31,17,33,16,33,17,31,18,31,19,33,18,33,19,33,20,22,18,23,18,22,20,22,19,24,18,24,19,25,19,26,19,26,18,28,18,29,19,29,16,29,17,29,18,33,9,32,9,33,10,34,10,35,10,31,1,31,2,32,2,33,2,34,2,34,3,34,4,34,5,35,5,36,5,37,5,38,5,34,7,35,7,36,7,37,7,38,7,35,8,38,6,36,10,36,11,37,11,38,11,39,11,39,9,39,10,40,9,41,9,35,13,36,13,37,13,37,14,35,15,35,16,36,16,37,16,38,16,39,16,37,15,39,17,39,18,39,19,37,18,37,19,36,19,35,19,35,18,35,17,36,2,36,3,37,3,39,1,39,2,39,3,38,1,40,8,40,7,40,6,40,5,40,3,41,3,42,3,41,2,42,4,42,6,43,6,44,6,46,6,45,6,46,7,46,9,46,8,45,8,44,8,43,8,42,8,42,9,43,4,44,4,45,4,45,3,45,2,44,2,47,2,47,3,47,4,48,4,49,2,50,2,50,3,50,4,50,1,51,4,52,4,53,4,53,3,53,2,52,2,54,2,55,4,51,5,48,5,48,6,49,6,50,6,51,6,53,6,53,7,54,7,55,7,55,5,49,8,48,8,48,9,48,10,39,13,39,14,40,14,41,14,42,14,43,14,43,15,43,16,43,17,43,18,43,19,43,20,41,16,41,17,41,18,41,19,41,20,41,11,42,11,43,11,41,12,45,11,45,13,45,12,44,11,44,10,45,14,46,14,47,14,47,12,48,12,49,12,49,13,49,14,47,16,48,16,49,16,50,16,51,16,51,15,51,14,51,13,51,12,50,10,51,10,51,9,51,8,51,7,52,15,53,15,54,15,53,17,54,17,53,18,53,19,54,19,54,20,50,19,52,19,51,19,51,18,47,18,47,19,48,19,48,20,49,17,55,14,54,14,46,16,45,18,45,19,45,17,45,16,56,9,55,9,54,9,53,9,53,10,53,11,54,11,56,11,56,12,56,13,54,13,56,10,53,13,37,8,15,18,22,17 ]
            const m=document.getElementsByClassName('maze-grid');
            for(var i=0;i<a.length;i+=2)
            {
                await new Promise(resolve => setTimeout(resolve,10))
                m[a[i+1]*this.state.r+a[i]].style.backgroundColor='black'
            }
        }  
        this.setState({isReady:true,built:true})
    }

    setMouse(row,col){
        console.log(row+" "+col+" "+(row*57+col))
        const t = document.getElementsByClassName('maze-grid')
        if(t[Number(row)*57+Number(col)].style.backgroundColor=='black')
            return
        if(this.state.mX!=0)
        {
            console.log(this.state.mX*57+this.state.mY)
            t[Number(this.state.mX)*57+Number(this.state.mY)].style.backgroundColor='white'
        }
        t[Number(row)*57+Number(col)].style.backgroundColor='red';
        this.setState({mX:row,mY:col})
    }

    handleOnMouseDown(r,c){
        // if(this.state.ch==3||this.state.ch==4)
        // {
            this.setState({isMousePressed:true})
            this.setMouse(r,c)
        // }
    }
    handleOnMouseOver(r,c){
        if(this.state.isMousePressed==true)
        {
            this.setMouse(r,c)
        }
    }
    handleOnMouseUp(r,c){
        if(this.state.isMousePressed==true)
        {
            this.setState({isMousePressed:false})
        }
    }

    async startM(){
        await m.mae(70,this.state.mX,this.state.mY,this.state.ismae)
        this.setState({isActive:false})
    }


    render(){
        if(this.state.flag==0)
        {
            return(
                <div className="rng_main">
                    <center>
                        <div className="rng_nav">
                            <label className="rng_keys" onClick={()=>this.setState({flag:1})}>Sudoku</label>
                            <label className="rng_keys" onClick={()=>this.setState({flag:2})}>Knight's Path</label>
                            <label className="rng_keys" onClick={()=>this.setState({flag:3})}>Maze</label>
                        </div>
                    </center>
                </div>
            );
        }
        else if(this.state.flag==1)
        {
            if(!this.state.isActive)
            {
                return(
                    <div className="rng_main">
                            <center>
                                <div className="rng_nav">
                                    <label className="rng_keys" onClick={()=>this.setState({isActive:true})}>Activate Sudoku</label>
                                    <label className="rng_keys" style={{cursor:'not-allowed'}}>Reset Sudoku</label>
                                </div>
                                <div>
                            <div style={{marginTop:'1%'}}>
                                {this.state.sC.map((row)=>
                                    <div>
                                        {this.state.sR.map((col)=>
                                            <div className="sudoku-grid" 
                                                style={((row<3||(row>5&&row<9))&&(col<3||(col>5&&col<9))||((row>2&&row<6)&&(col>2&&col<6)))
                                                        ?{backgroundColor:'lightyellow'}
                                                            :{backgroundColor:'white'}} 
                                                    onClick={()=>this.editVal(row,col)}>0</div>)}
                                    </div>)}
                            </div>
                        </div>
                            </center>
                    </div>
                );
            }
            else
            {
                this.sudoku();
                return(
                    <div className="rng_main">
                            <center>
                                <div className="rng_nav">
                                    <label className="rng_keys" style={{cursor:'not-allowed'}}>Activate Sudoku</label>
                                    <label className="rng_keys">Reset Sudoku</label>
                                </div>
                                <div>
                            <div style={{marginTop:'1%'}}>
                                {this.state.sC.map((row)=>
                                    <div>
                                        {this.state.sR.map((col)=>
                                            <div className="sudoku-grid" 
                                                style={((row<3||(row>5&&row<9))&&(col<3||(col>5&&col<9))||((row>2&&row<6)&&(col>2&&col<6)))
                                                        ?{backgroundColor:'lightyellow'}
                                                            :{backgroundColor:'white'}} >0</div>)}
                                    </div>)}
                            </div>
                        </div>
                            </center>
                    </div>
                );
            }
        }
        else if(this.state.flag==2)
        {
            if(!this.state.isActive)
            {
                return(
                    <div className="rng_main">
                            <center>
                                <div className="rng_nav">
                                    <label className="rng_keys" onClick={()=>this.setState({isActive:true})}>Activate Knight</label>
                                </div>
                                <div>
                                <div>
                            <div style={{marginTop:'1%'}}>
                                {this.state.kR.map((row,rowI)=>
                                    <div>
                                        {this.state.kC.map((col,colI)=>
                                            <div className="kn" style={((rowI%2==0&&colI%2==1)||(rowI%2==1&&colI%2==0))
                                                ?{backgroundColor:'black',height:'70px',width:'70px'}
                                                    :{backgroundColor:'white',height:'70px',width:'70px'}} 
                                                        onClick={()=>this.setKnight(rowI,colI)}>
                                                &#9822;
                                                </div>)}
                                    </div>)}
                            </div>
                        </div>
                        </div>
                            </center>
                    </div>
                );
            }
            else
            {
                this.kn();
                return(
                    <div className="rng_main">
                            <center>
                                <div className="rng_nav">
                                    <label className="rng_keys" onClick={()=>this.setState({isActive:true})}>Activate Knight</label>
                                </div>
                                <div>
                                <div>
                            <div style={{marginTop:'1%'}}>
                                {this.state.kR.map((row,rowI)=>
                                    <div>
                                        {this.state.kC.map((col,colI)=>
                                            <div className="kn" style={((rowI%2==0&&colI%2==1)||(rowI%2==1&&colI%2==0))
                                                ?{backgroundColor:'black',cursor:'not-allowed',height:'70px',width:'70px'}
                                                    :{backgroundColor:'white',cursor:'not-allowed',height:'70px',width:'70px'}} 
                                                        onClick={()=>this.setKnight(rowI,colI)}>
                                                &#9822;
                                                </div>)}
                                    </div>)}
                            </div>
                        </div>
                        </div>
                            </center>
                    </div>
                );
            }
        }
        else
        {
            if(this.state.built==false)
            {
            return(
                <div className="rng_main">
                        <center>
                            <div className="rng_nav">
                                <label className="rng_keys" onClick={()=>this.build()}>Build maze</label>
                                <label className="rng_keys" style={{cursor:'not-allowed'}}>Go!</label>
                            </div>
                            <div style={{marginTop:'2%'}}>
                            {this.state.row.map((rows)=>
                            <div className="maze">
                                {this.state.col.map((cols)=>
                                    <div className="maze-grid" onMouseDown={()=>this.handleOnMouseDown(rows,cols)}
                                        onMouseOver={()=>this.handleOnMouseOver(rows,cols)} 
                                            onMouseUp={()=>this.handleOnMouseUp(rows,cols)} onClick={()=>this.setMouse(rows,cols)}></div>)}
                        </div>)}
                    </div>
                        </center>
                </div>
            );
            }
            else if(!this.state.isActive)
            {
                return(
                    <div className="rng_main">
                            <center>
                                <div className="rng_nav">
                                    <label className="rng_keys" style={{cursor:'not-allowed'}}>Build maze</label>
                                    <label className="rng_keys" onClick={()=>this.setState({isActive:true})}>Go!</label>
                                </div>
                                <div style={{marginTop:'2%'}}>
                                {this.state.row.map((rows)=>
                                <div className="maze">
                                    {this.state.col.map((cols)=>
                                        <div className="maze-grid" onMouseDown={()=>this.handleOnMouseDown(rows,cols)}
                                            onMouseOver={()=>this.handleOnMouseOver(rows,cols)} 
                                                onMouseUp={()=>this.handleOnMouseUp(rows,cols)} onClick={()=>this.setMouse(rows,cols)}></div>)}
                            </div>)}
                        </div>
                            </center>
                    </div>
                );
            }
            else
            {
                this.startM();
                return(
                    <div className="rng_main">
                            <center>
                                <div className="rng_nav">
                                    <label className="rng_keys" style={{cursor:'not-allowed'}}>Build maze</label>
                                    <label className="rng_keys">Go!</label>
                                </div>
                                <div style={{marginTop:'2%'}}>
                                {this.state.row.map((rows)=>
                                <div className="maze">
                                    {this.state.col.map((cols)=>
                                        <div className="maze-grid" onMouseDown={()=>this.handleOnMouseDown(rows,cols)}
                                            onMouseOver={()=>this.handleOnMouseOver(rows,cols)} 
                                                onMouseUp={()=>this.handleOnMouseUp(rows,cols)} style={{cursor:'not-allowed'}}></div>)}
                            </div>)}
                        </div>
                            </center>
                    </div>
                );
            }
        }
    }
}
export default Rng