
export async function quickSort(props,t)
{

    const disp=document.getElementsByClassName('array-bar-pos')
    var a=props;
    console.log(a)
    await quickS(a,t,0,a.length-1)

    for(var i=0;i<a.length;i++)
    {
        await new Promise(resolve => setTimeout(resolve,t))
        disp[i].style.backgroundColor='lightskyblue';
    }
    console.log("out")
    console.log(a);
}

async function quickS(a,t,str,end)
{
    console.log(str+" "+end)
    const disp=document.getElementsByClassName('array-bar-pos')
    if(str<end)
    {
        console.log("quickS")
        var part = await partition(a,t,str,end);
        await new Promise(resolve => setTimeout(resolve,t))
        disp[part].style.backgroundColor='#008b8b';
        console.log("part: "+part)
        await quickS(a,t,str,part-1);
        await quickS(a,t,part+1,end);
    }
    else if(str==end)
    {
        await new Promise(resolve => setTimeout(resolve,t))
        disp[str].style.backgroundColor='#008b8b';
    }
}
async function partition(a,t,str,end)
{
    const disp=document.getElementsByClassName('array-bar-pos')
    var piv=end;
    await new Promise(resolve => setTimeout(resolve,t))
    disp[piv].style.backgroundColor='yellow';
    var i=str-1;
    for(var j=str;j<end;j++)
    {
        if(a[j]<a[piv])
        {
            i++;
            var temp=a[j];
            a[j]=a[i];
            a[i]=temp;
            if(i!=j)
            {
                await new Promise(resolve => setTimeout(resolve,t))
                disp[i].style.backgroundColor='red';
                disp[j].style.backgroundColor='red';
                await new Promise(resolve => setTimeout(resolve,t))
                disp[i].style.height=`${a[i]}px`;
                disp[j].style.height=`${a[j]}px`;
                await new Promise(resolve => setTimeout(resolve,t))
                disp[i].style.backgroundColor='lightskyblue';
                disp[j].style.backgroundColor='lightskyblue';
            }
            else
            {
                //when i and j are same indicate that with pink
                await new Promise(resolve => setTimeout(resolve,t))
                disp[i].style.backgroundColor='pink';
                await new Promise(resolve => setTimeout(resolve,t))
                disp[i].style.backgroundColor='lightskyblue';
            }
        }
        else
        {
            await new Promise(resolve => setTimeout(resolve,t))
            disp[j].style.backgroundColor='green';
            await new Promise(resolve => setTimeout(resolve,t))
            disp[j].style.backgroundColor='lightskyblue';
        }
    }
    console.log("after for i: "+i)
    i++;
    var temp=a[piv];
    a[piv]=a[i]; 
    a[i]=temp;
    await new Promise(resolve => setTimeout(resolve,t))
    disp[i].style.height=`${a[i]}px`;
    // await new Promise(resolve => setTimeout(resolve,t))
    disp[piv].style.height=`${a[piv]}px`;
    await new Promise(resolve => setTimeout(resolve,t))
    disp[piv].style.backgroundColor='lightskyblue';
    // await new Promise(resolve => setTimeout(resolve,t))
    disp[i].style.backgroundColor='#008b8b';
    
    console.log("i: "+i)
    return i;
}

