export async function palindrom(array,value)
{

    const val=document.getElementsByClassName('ValOnly');
    const str=document.getElementsByClassName('string');
    // str[10].style.visibility='visible'
    // const strup=document.getElementsByClassName('stringup');
    // await new Promise(resolve => setTimeout(resolve,10))
    // str[0].style.color='black'
    console.log(array)

    var index = array.length
    for(var i=0;i<array.length*array.length;i++)
    {
        str[i].style.backgroundColor='lightskyblue'
        str[i].style.visibility='hidden'
    }
    for(var i=0;i<array.length;i++)
    {
        val[i].style.color='black'
        await new Promise(resolve => setTimeout(resolve,value/2))
        if(i%2==0)
            val[i].style.visibility='visible'
    }
    console.log(val[0].style.width)
    var max=-1,l,r;
    for(var i=1;i<array.length-1;i++)
    {
        //it's hard to explain user through visual that we breaking coz there is no
        //possibility of finding large pal next so commenting this

        if(i>Math.floor(array.length/2))
        {
            if(max>=(Math.floor(array.length/2)-(i-Math.floor(array.length/2))))
                break;   
        }
        await new Promise(resolve => setTimeout(resolve,value))
        val[i].style.color='red'
        // str[i].style.backgroundColor='lightskyblue';
        // str[i].style.height=`${Number(str[i].style.height.split("px")[0])+20}px`;
        // strup[i].style.backgroundColor='lightskyblue';
        // strup[i].style.height=`${Number(strup[i].style.height.split("px")[0])+20}px`;
        var j=1;
        var tI=0;
        var maxI;
        while(i-j>=0&&i+j<array.length)
        {
            if(array[i-j]==array[i+j])
            {
                // if(i%2==0)
                // {
                //     str[i].style.backgroundColor='yellow';
                //     str[i].style.height=`${Number(str[i].style.height.split("px")[0])+20}px`;
                //     // strup[i].style.backgroundColor='yellow';
                //     // strup[i].style.height=`${Number(strup[i].style.height.split("px")[0])+20}px`;
                // }
                // else{
                //     console.log(i-j+" "+(i+j))
                //     str[i].style.backgroundColor='lightskyblue';
                //     str[i].style.height=`${Number(str[i].style.height.split("px")[0])+20}px`;
                //     // strup[i].style.backgroundColor='lightskyblue';
                //     // strup[i].style.height=`${Number(strup[i].style.height.split("px")[0])+20}px`;
                // }
                var c1,c2;
                c1=val[i-j].style.color;
                c2=val[i+j].style.color;
                if(j!=0)
                {
                    val[i-j].style.color='yellow';
                    val[i+j].style.color='yellow';
                }
                // for(var p=i-1,q=i+1;p>=i-j;p--,q++)
                // {
                //     await new Promise(resolve => setTimeout(resolve,value))
                //     str[p].style.backgroundColor='lightskyblue';
                //     str[p].style.height=`${Number(str[p].style.height.split("px")[0])+20}px`;
                //     console.log(str[p].style.height)
                //     str[q].style.backgroundColor='lightskyblue';
                //     str[q].style.height=`${Number(str[q].style.height.split("px")[0])+20}px`;
                //     console.log(str[q].style.height)
                //     // strup[p].style.backgroundColor='lightskyblue';
                //     // strup[p].style.height=`${Number(strup[q].style.height.split("px")[0])+20}px`;
                //     // strup[q].style.backgroundColor='lightskyblue';
                //     // strup[q].style.height=`${Number(strup[q].style.height.split("px")[0])+20}px`;
                // }
                await new Promise(resolve => setTimeout(resolve,value))
                val[i-j].style.color=c1;
                val[i+j].style.color=c2;

                await new Promise(resolve => setTimeout(resolve,value))
                str[tI+index].style.visibility='visible'
                console.log(tI+index)
                tI++;
            }
            else break;
            j++;
        }
        j--;
        
        if(j>max)
        {
            if(max!=-1)
            {
                for(var k=r;k>=l;k--)
                {
                    await new Promise(resolve => setTimeout(resolve,value/2))
                    val[k].style.color='black'
                }
            }
            max=j;
            l=i-j;
            r=i+j;
            maxI=i;
            for(var k=i,x=i;k>=l;k--,x++)
            {
                // if(k%2!=0)
                // {
                    await new Promise(resolve => setTimeout(resolve,value/2))
                    val[k].style.color='green'
                    val[x].style.color='green'
                // }
            }

        }
        // await new Promise(resolve => setTimeout(resolve,1000))
        for(var p=i-j,q=i+j;p<=i;p++,q--)
        {
            await new Promise(resolve => setTimeout(resolve,value))
            str[p].style.height=`0px`;
            str[q].style.height=`0px`;
            // strup[p].style.height=`0px`;
            // strup[q].style.height=`0px`;
        }
        console.log(i+" "+val[i-1].style.color+" "+array[i])
        if(array[i]=='#' && val[i-1].style.color=="green")
        {
            console.log('inside')
            val[i].style.color='green'
        }
        else if(array[i]!='#' && val[i+1].style.color=='green')
            val[i].style.color='green'
        else
            val[i].style.color='black'
            
    
        index = index + array.length
    }

    for(var i=0;i<array.length;i++)
    {
        await new Promise(resolve => setTimeout(resolve,value/2))
        if(i%2==0)
            val[i].style.visibility='hidden'
    }

    console.log(maxI*array.length+" "+max)
    console.log(str[10])
    for(var i=maxI*array.length;i<maxI*array.length+max;i++)
    {
        console.log(i)
        await new Promise(resolve => setTimeout(resolve,value/2))
        str[i].style.backgroundColor='yellow'
    }


}