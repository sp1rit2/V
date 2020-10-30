import React from 'react'

export async function insertionSort(props,t)
{

    const disp=document.getElementsByClassName('array-bar-pos')
    for(var i=1;i<props.length;i++)
    {
        await new Promise(resolve => setTimeout(resolve,t))
        var key=props[i];
        var j;
        for(j=i;j>0;j--)
        {

            disp[j].style.height='0px';
            disp[j].style.backgroundColor='red';
            console.log("---->"+j);
            
            // disp[j-1].style.backgroundColor='red';
            await new Promise(resolve => setTimeout(resolve,t))
            if(props[j-1]>key)
            {
               props[j]=props[j-1];
               disp[j].style.height=`${props[j]}px`
            //    disp[j-1].style.backgroundColor='lightskyblue'
               disp[j].style.backgroundColor='lightskyblue';
            }
            else{   
                // disp[j-1].style.backgroundColor='lightskyblue';
                disp[j].style.backgroundColor='lightskyblue';
                break;
            }
            
        }
        // disp[j-1].style.backgroundColor='lightskyblue'
        props[j]=key;
        disp[j].style.height=`${props[j]}px`
        disp[j].style.backgroundColor='lightskyblue'    
    }
    console.log(props);
    return props
}

export default insertionSort