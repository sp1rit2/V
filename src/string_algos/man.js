export async function manachers(array,value)
{
    const val=document.getElementsByClassName('ValOnly');
    const str=document.getElementsByClassName('string');
    var a=[]
    var c=1,r=1,l=1,max=-1,maxI;

    var index = array.length
    for(var i=0;i<array.length*array.length;i++)
    {
        str[i].style.backgroundColor='cyan'
        str[i].style.visibility='hidden'
    }
    for(var i=0;i<array.length;i++)
    {
        a.push(0);
        val[i].style.color='black'
        await new Promise(resolve => setTimeout(resolve,value/2))
        if(i%2==0)
            val[i].style.visibility='visible'
    }

    for(var i=1;i<array.length;i++)
    {
        var col1=val[i].style.color;
        await new Promise(resolve => setTimeout(resolve,value))
        val[c].style.color='lightgreen'
        val[r].style.color='lightgreen'
        val[l].style.color='lightgreen'
        if(i>Math.floor(array.length/2))
        {
            if(max>=(Math.floor(array.length/2)-(i-Math.floor(array.length/2))))
                break;   
        }
        val[i].style.color='red'
        await new Promise(resolve => setTimeout(resolve,value+10))
        var tI=0;
        
        var j=1;
        if(i<r)
        {
            var min = Math.min(r-i,a[c-(i-c)])
            a[i]=min;
            await new Promise(resolve => setTimeout(resolve,value))
            if(i-j>=0&&i+j<array.length)
            {
                var col2=val[i-j].style.color;
                var col3=val[i+j].style.color;
                val[i-j].style.color='pink';
                val[i+j].style.color='pink';
                await new Promise(resolve => setTimeout(resolve,value))
                val[i-j].style.color=col2;
                val[i+j].style.color=col3;
            }
            console.log("min: "+min);
            var x
            for(x=i*array.length;x<i*array.length+min;x++)
            {
                // console.log(i)
                await new Promise(resolve => setTimeout(resolve,value))
                str[x].style.visibility='visible'
            }
            tI=x%(i*array.length);
    
            j=1+a[i];
            
        }
        // if(i>=r)
        // {
        
            while(i-j>=0&&i+j<array.length)
            {
                if(array[i-j]==array[i+j])
                {
                    var c1,c2;
                    c1=val[i-j].style.color;
                    c2=val[i+j].style.color;
                    if(j!=0)
                    {
                        await new Promise(resolve => setTimeout(resolve,value))
                        val[i-j].style.color='yellow';
                        val[i+j].style.color='yellow';
                    }
                    await new Promise(resolve => setTimeout(resolve,value))
                    val[i-j].style.color=c1;
                    val[i+j].style.color=c2;

                    await new Promise(resolve => setTimeout(resolve,value))
                    str[tI+index].style.visibility='visible'
                    console.log(tI+index)
                    tI++;
                    a[i]++;
                }
                else 
                    break;
                j++;
             }

            
            await new Promise(resolve => setTimeout(resolve,value))
            val[c].style.color='black'
            await new Promise(resolve => setTimeout(resolve,value))
            val[r].style.color='black'
            await new Promise(resolve => setTimeout(resolve,value))
            val[l].style.color='black'
            await new Promise(resolve => setTimeout(resolve,value))

            j--;
            c=i;
            r=i+j;
            l=i-j;

            await new Promise(resolve => setTimeout(resolve,value))
            val[c].style.color='lightgreen'
            await new Promise(resolve => setTimeout(resolve,value))
            val[r].style.color='lightgreen'
            await new Promise(resolve => setTimeout(resolve,value))
            val[l].style.color='lightgreen'
            await new Promise(resolve => setTimeout(resolve,value))
        // }
        // else
        // {
        //     var min = Math.min(r-i,a[c-(i-c)])
        //     console.log("min: "+min);
        //     for(var x=i*array.length;x<i*array.length+min;x++)
        //     {
        //         // console.log(i)
        //         await new Promise(resolve => setTimeout(resolve,value))
        //         str[x].style.visibility='visible'
        //     }
        //     a[i]=min;
        // }
        if(a[i]>max)
        {
            // if(max!=-1)
            // {
            //     for(var k=i-j,x=maxI;k<=i+j;k++,x++)
            //     {
            //         await new Promise(resolve => setTimeout(resolve,value/2))
            //         val[k].style.color='black'
            //         // val[x].style.color='black'
            //     }
            // }
            max=a[i];
            maxI=i;
            console.log(i+" "+a[i])
            // for(var k=i,x=i;x<=i+j;k--,x++)
            // {
            //     await new Promise(resolve => setTimeout(resolve,value/2))
            //     val[k].style.color='green'
            //     val[x].style.color='green'
            // }
            // col1=val[i].style.color;
        }

        index = index + array.length
        val[i].style.color=col1;

    }
    for(var i=maxI*array.length;i<maxI*array.length+max;i++)
    {
        console.log(i)
        await new Promise(resolve => setTimeout(resolve,value/2))
        str[i].style.backgroundColor='yellow'
    }
    console.log(a)
}