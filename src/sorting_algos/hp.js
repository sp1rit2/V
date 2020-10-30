export async function heapSort(props,t)
{
    var a=props;

    const disp=document.getElementsByClassName('array-bar-pos');
    a=await createHeap(a,a.length-1,t);
    await heapS(a,a.length-1,t);
    for(var i=a.length-1;i>=0;i--)
    {
        await new Promise(resolve => setTimeout(resolve,t))
        disp[i].style.backgroundColor='lightskyblue';
        // disp[i].style.boxShadow = 'royalblue 5px 5px 10px';
    }
    console.log("sort: "+a)
    return a;
}

async function heapify(a,len,t,i)
{
    // console.log(i)
    const disp=document.getElementsByClassName('array-bar-pos');
    // await new Promise(resolve => setTimeout(resolve,t))
    var left=2*i+1;
    var right=2*i+2;
    if(left<=len||right<=len)
    {
        console.log(len+" "+left+"-----"+right)
        if((a[left]>=a[right]&&a[left]>a[i])||(right>len&&a[left]>a[i]))
        {
            await new Promise(resolve => setTimeout(resolve,t))
            disp[i].style.backgroundColor='red';
            disp[left].style.backgroundColor='red';
            // disp[i].style.boxShadow = 'red 5px 5px 10px';
            // disp[left].style.boxShadow = 'red 5px 5px 10px';
            var temp=a[i];
            a[i]=a[left];
            a[left]=temp;

            await new Promise(resolve => setTimeout(resolve,t))
            disp[i].style.height=`${a[i]}px`;
            disp[left].style.height=`${a[left]}px`;

            // await new Promise(resolve => setTimeout(resolve,t))
            disp[left].style.backgroundColor='lightskyblue';
            disp[i].style.backgroundColor='lightskyblue';

            await heapify(a,len,t,left);
        }
        else if(right<=len&&a[right]>=a[left]&&a[right]>a[i])
        {
            await new Promise(resolve => setTimeout(resolve,t))
            disp[i].style.backgroundColor='red';
            disp[right].style.backgroundColor='red';
            // disp[i].style.boxShadow = 'red 5px 5px 10px';
            // disp[right].style.boxShadow = 'red 5px 5px 10px';
            var temp=a[i];
            a[i]=a[right];
            a[right]=temp;
            await new Promise(resolve => setTimeout(resolve,t))
            disp[i].style.height=`${a[i]}px`;
            disp[right].style.height=`${a[right]}px`;

            // await new Promise(resolve => setTimeout(resolve,t))
            disp[right].style.backgroundColor='lightskyblue';
            disp[i].style.backgroundColor='lightskyblue';
            // disp[i].style.boxShadow = 'royalblue 5px 5px 10px';
            // disp[right].style.boxShadow = 'royalblue 5px 5px 10px';
            await heapify(a,len,t,right);
        }
    }
}

async function heapS(a,len,t)
{
    console.log("heap: "+a)
    console.log("heapS")
    const disp=document.getElementsByClassName('array-bar-pos');
    for(var i=len;i>=0;i--)
    {
        // await new Promise(resolve => setTimeout(resolve,t))
        console.log(i +"-----")
        console.log("before swap: "+a)
        var temp=a[0];
        a[0]=a[i];
        a[i]=temp;
        console.log("after swap: "+a)
        await new Promise(resolve => setTimeout(resolve,t))
        disp[i].style.backgroundColor='green';
        disp[0].style.backgroundColor='green';
        // disp[i].style.boxShadow = 'green 5px 5px 10px';
        // disp[0].style.boxShadow = 'green 5px 5px 10px';
        await new Promise(resolve => setTimeout(resolve,t))
        disp[i].style.height=`${a[i]}px`;
        disp[0].style.height=`${a[0]}px`;
        // await new Promise(resolve => setTimeout(resolve,t))
        disp[i].style.backgroundColor='lightskyblue';
        disp[0].style.backgroundColor='lightskyblue';
        // disp[i].style.boxShadow = 'darkblue 5px 5px 10px';
        // disp[0].style.boxShadow = 'royalblue 5px 5px 10px';
        
        await heapify(a,i-1,t,0)
        // console.log(i+"------------")
        // console.log(a)
    }
    await new Promise(resolve => setTimeout(resolve,t))
    disp[0].style.backgroundColor='lightskyblue';
    // disp[0].style.boxShadow = 'darkblue 5px 5px 10px';
}

async function createHeap(a,len,t)
{
    for(var i=0;i<=len;i++)
        await heap(a,i,t);

    return a;
}

async function heap(a,i,t)
{
    const disp=document.getElementsByClassName('array-bar-pos');
    console.log("heap")
    while(Math.floor((i-1)/2)>=0)
    {
        await new Promise(resolve => setTimeout(resolve,t))
        disp[i].style.backgroundColor='red';
        // disp[i].style.boxShadow = 'red 5px 5px 10px';
        disp[Math.floor((i-1)/2)].style.backgroundColor='red';
        // disp[Math.floor((i-1)/2)].style.boxShadow = 'red 5px 5px 10px';
        if(a[i]>a[Math.floor((i-1)/2)])
        {
            var temp=a[i];
            a[i]=a[Math.floor((i-1)/2)];
            a[Math.floor((i-1)/2)]=temp;

            await new Promise(resolve => setTimeout(resolve,t))
            disp[i].style.height=`${a[i]}px`;
            disp[Math.floor((i-1)/2)].style.height=`${a[Math.floor((i-1)/2)]}px`;
        }

        await new Promise(resolve => setTimeout(resolve,t))
        disp[i].style.backgroundColor='lightskyblue';
        // disp[i].style.boxShadow = 'royalblue 5px 5px 10px';
        disp[Math.floor((i-1)/2)].style.backgroundColor='lightskyblue';
        // disp[Math.floor((i-1)/2)].style.boxShadow = 'royalblue 5px 5px 10px';

        i=Math.floor((i-1)/2)
    }
}