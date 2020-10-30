import React from 'react'

export async function selectionSort(props,t)
{
    // console.log(props)
    const disp=document.getElementsByClassName('array-bar-pos')
    // disp[0].style.backgroundColor='green';
    for(var i=0;i<props.length;i++)
    {
        // await new Promise(resolve => setTimeout(resolve,100));
        var key=i;
        await new Promise(resolve => setTimeout(resolve,t));
        disp[key].style.backgroundColor='red';
        for(var j=i+1;j<props.length;j++)
        {
            console.log("in")
            await new Promise(resolve => setTimeout(resolve,t));
            disp[j].style.backgroundColor='green';
            
            if(props[key]>props[j])
            {
                await new Promise(resolve => setTimeout(resolve,t));
                if(key!=i)
                    disp[key].style.backgroundColor='lightskyblue';
                key=j;
                await new Promise(resolve => setTimeout(resolve,t));
                disp[key].style.backgroundColor='red';
            }
            else
            {
                await new Promise(resolve => setTimeout(resolve,t));
                disp[j].style.backgroundColor='lightskyblue';
            }
        }
        var temp=props[key];
        props[key]=props[i];
        props[i]=temp;
        disp[key].style.height=`${props[key]}px`;
        disp[i].style.height=`${props[i]}px`; 
        // console.log("in j")
        disp[i].style.backgroundColor='lightskyblue';
        disp[key].style.backgroundColor='lightskyblue';
    }   
    return props
}
