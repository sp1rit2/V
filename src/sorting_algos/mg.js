import React from 'react'

export async function mergeSort(props)
{
    var anime=[];
    // anime.push([0,1]);
    // console.log(anime[0][0]+" "+anime[0][1])
    console.log("in mergeSort()")
    
    mergeS(props,0,props.length-1,anime);
    console.log("anime "+ anime)
    return anime;
}

async function mergeS(array,str,end,anime)
{
    const disp=document.getElementsByClassName('array-bar-pos')
    anime.push(str,end);
    console.log("in mergeS")
    if(str==end)
        return 
    var mid=Math.floor((str+end)/2);
    // anime.push(str,mid);
    // disp[str].style.backgroundColor='red';
    // disp[mid].style.backgroundColor='red';
    await mergeS(array,str,mid,anime);
    // disp[mid+1].style.backgroundColor='red';
    // disp[end].style.backgroundColor='red';
    // anime.push(mid+1,end);
    await mergeS(array,mid+1,end,anime);
    anime.push(str,end);
    await merge(array,str,mid,end,anime);
    // disp[str].style.backgroundColor='lightskyblue';
    // disp[mid].style.backgroundColor='lightskyblue';
    // disp[mid+1].style.backgroundColor='lightskyblue';
    // disp[end].style.backgroundColor='lightskyblue';
}

async function merge(array,str,mid,end,anime)
{
    // const disp=document.getElementsByClassName('array-bar-pos')
    var a=[],b=[];

    
    for(var i=str;i<=mid;i++)
        a.push(array[i]);

    for(var i=mid+1;i<=end;i++)
        b.push(array[i]);

    var p=0,q=0,i;
    // await new Promise(resolve => setTimeout(resolve,1000));
    for(i=str;i<=end&&(p<a.length&&q<b.length);i++)
    {
        if(a[p]<b[q])
        {
            array[i]=a[p];
            p++;
        }
        else
        {
            array[i]=b[q];
            q++;
        }
        anime.push(array[i]);
    }
    // await new Promise(resolve => setTimeout(resolve,1000));
    while(p<a.length)
    {
        array[i]=a[p];
        anime.push(array[i]);
        p++;i++;
    }
    // await new Promise(resolve => setTimeout(resolve,1000));
    while(q<b.length)
    {
        array[i]=b[q];
        anime.push(array[i]);
        q++;i++;
    }
    // await new Promise(resolve => setTimeout(resolve,10000));
}
export default mergeSort