import React, { Component } from 'react'
import './string_algo.css'
import * as lPal from './string_algos/pal'
import * as man from './string_algos/man'
import * as kmp from './string_algos/kmp'

class String extends Component{
    constructor(){
        super()
        this.state={
            str:0,           //0 no 1 yes
            pat:0,
            strVal:'',
            patVal:'',
            flag:0,
            size:30
        }
    }

    stringValue = (e) =>{
        // console.log(e.target.value)
        var string_keys = document.getElementsByClassName('string_keys')
        var val = e.target.value
        if(e.target.value.length==0)
        {
            for(var i=0;i<string_keys.length;i++)
                string_keys[i].style.cursor='not-allowed'

            this.setState({
                str:0,
                strVal:val
            })
        }
        else
        {
            if(this.state.pat==0)
            {
            for(var i=0;i<string_keys.length-1;i++)
                string_keys[i].style.cursor='pointer'
            }

            this.setState({
                str:1,
                strVal:val
            })
        }
        
    }
    patternValue = (e) =>{
        // console.log(e.target.value);
        var string_keys = document.getElementsByClassName('string_keys')
        var val = e.target.value
        if(e.target.value.length==0)
        {
            if(this.state.str==1)
            {
                for(var i=0;i<string_keys.length-1;i++)
                    string_keys[i].style.cursor='pointer'
            }
            string_keys[2].style.cursor='not-allowed'
            this.setState({
                pat:0,
                patVal:val
            })
        }
        else
        {
            if(this.state.str==1)
            {
                for(var i=0;i<string_keys.length-1;i++)
                    string_keys[i].style.cursor='not-allowed'
                string_keys[2].style.cursor='pointer'
            }
            this.setState({
                pat:1,
                patVal:val
            })
        }
    }

    async stringAlgo(str,pat){
        console.log(this.state.strVal)
        if(this.state.flag==1)
        {
            await lPal.palindrom(str,120)
        } 
        else if(this.state.flag==2)
        {
            await man.manachers(str,120)
        }
        else if(this.state.flag==3)
        {
            await kmp.kmp(str,pat,120)
        }
        this.setState({flag:0})
    }

    render(){
        console.log(this.state.strVal)
        var strN=this.state.strVal.split("")
        var str=[]
        if(strN.length>0)
            str=['# '];
        for(var i=0;i<strN.length;i++){
            str.push(strN[i],'# ')
        }
        console.log(str)
        var s=this.state.strVal.split("");
        var p=this.state.patVal.split("");
        if(this.state.flag!=0)
        {
            if(this.state.flag!=3)
            {
                this.stringAlgo(str);
                return(
                    <div className="string_main">
                        <center>
                            <div className="string_nav">
                                <input className="string_input" onChange={this.stringValue} type="text" placeholder="Enter String" disabled></input>
                                <label className="string_keys">Longest Palindrom</label>
                                <label className="string_keys">Manacher's Algorithm</label>
                                <input className="string_input" onChange={this.patternValue} type="text" placeholder="Enter Pattern"disabled></input>
                                <label className="string_keys">KMP Algorithm</label>
                            </div>
                            <div>
                                {str.map((value,id) => 
                                    <div style={{display:'inline-block',marginTop:'3%'}}>
                                        <div className="ValOnly" style={(id%2==0)
                                            ?{textTransform:"uppercase",color:'black',visibility:'hidden',fontSize:`${Number(this.state.size)+20}px`,width:`${Number(this.state.size)+20}px`}
                                                :{textTransform:"uppercase",color:'black',visibility:'visible',fontSize:`${Number(this.state.size)+20}px`,width:`${Number(this.state.size)+20}px`}}>{value}</div>
                                        <div>
                                            {str.map(value =>
                                                <div className="string" style={{width:`${Number(this.state.size)+20}px`,visibility:'hidden'}}></div>)}
                                        </div>
                                    </div>    
                                )}
                            </div>
                        </center>
                    </div>
                );
            }
            else
            {
                this.stringAlgo(s,p);
                return(
                    <div className="string_main">
                        <center>
                            <div className="string_nav">
                                <input className="string_input" onChange={this.stringValue} type="text" placeholder="Enter String" disabled></input>
                                <label className="string_keys">Longest Palindrom</label>
                                <label className="string_keys">Manacher's Algorithm</label>
                                <input className="string_input" onChange={this.patternValue} type="text" placeholder="Enter Pattern"disabled></input>
                                <label className="string_keys">KMP Algorithm</label>
                            </div>
                            <div className="bars">
                                {s.map((value,id) => 
                                    <div style={{display:"inline-block"}}>
                                        <div className="kmp-str-index" style={{width:`${this.state.size}px`}}></div>
                                        <div className="kmp-str" style={{width:`${this.state.size}px`}}></div>
                                    </div>
                                )}
                                <div style={{marginLeft:"10%",display:"inline-block"}}></div>
                                    {p.map((value,id) => 
                                        <div style={{display:"inline-block"}}>
                                            <div className="kmp-pat-index" style={{width:`${this.state.size}px`}}></div>
                                            <div className="kmp-pat" style={{width:`${this.state.size}px`}}></div>
                                </div>
                                )}
                            </div>
                        </center>
                    </div>
                );
            }
        }
        else if(this.state.str==0&&(this.state.pat==0||this.state.pat==1))
        {
            return(
                <div className="string_main">
                    <center>
                            <div className="string_nav">
                                <input className="string_input" onChange={this.stringValue} type="text" placeholder="Enter String"></input>
                                <label className="string_keys">Longest Palindrom</label>
                                <label className="string_keys">Manacher's Algorithm</label>
                                <input className="string_input" onChange={this.patternValue} type="text" placeholder="Enter Pattern"></input>
                                <label className="string_keys">KMP Algorithm</label>
                            </div>
                    </center>
                </div>
            );
        }
        else if(this.state.str==1&&this.state.pat!=1)
        {
            return(
                <div className="string_main">
                    <center>
                            <div className="string_nav">
                                <input className="string_input" onChange={this.stringValue} type="text" placeholder="Enter String"></input>
                                <label className="string_keys" onClick={()=>{this.setState({flag:1})}}>Longest Palindrom</label>
                                <label className="string_keys" onClick={()=>{this.setState({flag:2})}}>Manacher's Algorithm</label>
                                <input className="string_input" onChange={this.patternValue} type="text" placeholder="Enter Pattern"></input>
                                <label className="string_keys">KMP Algorithm</label>
                            </div>
                            <div className="bar">
                                {str.map((value,id) => 
                                    <div style={{display:'inline-block',marginTop:'3%'}}>
                                        <div className="ValOnly" style={(id%2==0)
                                            ?{textTransform:"uppercase",color:'black',visibility:'hidden',fontSize:`${Number(this.state.size)+20}px`,width:`${Number(this.state.size)+20}px`}
                                                :{textTransform:"uppercase",color:'black',visibility:'visible',fontSize:`${Number(this.state.size)+20}px`,width:`${Number(this.state.size)+20}px`}}>{value}</div>
                                        <div>
                                            {str.map(value =>
                                                <div className="string" style={{width:`${Number(this.state.size)+20}px`,visibility:'hidden'}}></div>)}
                                        </div>
                                    </div>    
                                )}
                            </div>
                    </center>

                </div>
            );
        }
        else if(this.state.str==1&&this.state.pat==1)
        {
            return(
                <div className="string_main">
                    <center>
                            <div className="string_nav">
                                <input className="string_input" onChange={this.stringValue} type="text" placeholder="Enter String"></input>
                                <label className="string_keys">Longest Palindrom</label>
                                <label className="string_keys">Manacher's Algorithm</label>
                                <input className="string_input" onChange={this.patternValue} type="text" placeholder="Enter Pattern"></input>
                                <label className="string_keys" onClick={()=>{this.setState({flag:3})}}>KMP Algorithm</label>
                            </div>
                            <div className="bars">
                                {s.map((value,id) => 
                                    <div style={{display:"inline-block"}}>
                                        <div className="kmp-str-index" style={{width:`${this.state.size}px`}}></div>
                                        <div className="kmp-str" style={{width:`${this.state.size}px`}}></div>
                                    </div>
                                )}
                                <div style={{marginLeft:"10%",display:"inline-block"}}></div>
                                    {p.map((value,id) => 
                                        <div style={{display:"inline-block"}}>
                                            <div className="kmp-pat-index" style={{width:`${this.state.size}px`}}></div>
                                            <div className="kmp-pat" style={{width:`${this.state.size}px`}}></div>
                                </div>
                                )}
                            </div>
                    </center>

                </div>
            );
        }
    }
}

export default String