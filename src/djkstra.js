export async function djkshtra(src,dest,walls,value,rT,cT,isPath){

    console.log("in DJ"+" "+src)
    if(src.length==0)
    {
        alert("Source missing")
        return 1;
    }
    if(dest.length==0)
    {
        alert("Destination missing")
        return 1;
    }
    var x=[0,-1,0,1]
    var y=[-1,0,1,0]
    var map=new Map()
    var flag=0;
    console.log(src)
    var a=new Array(src);
    const blocks = document.getElementsByClassName('blocks')
    while(a.length>0)
    {
        var t=a;
        console.log("t"+" "+t[0][0]+" "+t[0][1]);
        a=[];
        //r = 22,c = 50
        for(var i=0;i<t.length;i++)
        {
            var cX=t[i][0];
            var cY=t[i][1];
            for(var j=0;j<4;j++)
            {
                console.log(Number(cX)+x[j]+" "+(Number(cY)+y[j]));
                if((Number(cX)+x[j])*rT+(Number(cY)+y[j])==Number(dest[0])*rT+Number(dest[1]))
                {
                    flag=1;
                    console.log((Number(cX)+x[j])*rT+(Number(cY)+y[j])+"<----->"+(Number(cX)*rT+Number(cY)))
                    map.set((Number(cX)+x[j])*rT+(Number(cY)+y[j]),Number(cX)*rT+Number(cY))
                    break;
                    // return 
                }
                if(Number(cX)+x[j]<cT&&Number(cX)+x[j]>=0&&(Number(cY)+y[j])<rT&&(Number(cY)+y[j])>=0&&isWall(walls,Number(cX)+x[j],Number(cY)+y[j]))
                {
                    // if(blocks[(Number(cX)+x[j])*rT+(Number(cY)+y[j])].style.backgroundColor!='green')
                    if(blocks[(Number(cX)+x[j])*rT+(Number(cY)+y[j])].style.backgroundColor!='cyan'
                        &&blocks[(Number(cX)+x[j])*rT+(Number(cY)+y[j])].style.backgroundColor!='orange')
                    {
                        a.push(new Array(Number(cX)+x[j],Number(cY)+y[j]));
                        map.set((Number(cX)+x[j])*rT+(Number(cY)+y[j]),Number(cX)*rT+Number(cY))
                        console.log((Number(cX)+x[j])*rT+(Number(cY)+y[j])+"<----->"+(Number(cX)*rT+Number(cY)))
                    }
                    // console.log((Number(cX)+x[j])*rT+(Number(cY)+y[j])+"<----->"+(Number(cX)*rT+Number(cY)))
                    // if(!map.has((Number(cX)+x[j])*rT+(Number(cY)+y[j])))
                    //     map.set((Number(cX)+x[j])*rT+(Number(cY)+y[j]),Number(cX)*rT+Number(cY))
                    if((Number(cX)+x[j])*rT+(Number(cY)+y[j])!=Number(src[0])*rT+Number(src[1]))
                    {
                        // await new Promise(r=>setTimeout(r,10))
                        // blocks[(Number(cX)+x[j])*rT+(Number(cY)+y[j])].style.animationName='example'
                        // blocks[(Number(cX)+x[j])*rT+(Number(cY)+y[j])].style.animationDuration='2s'
                        
                        // blocks[(Number(cX)+x[j])*rT+(Number(cY)+y[j])].style.backgroundColor='orangered'
                        blocks[(Number(cX)+x[j])*rT+(Number(cY)+y[j])].style.backgroundColor='cyan'
                    }
                    // blocks[(Number(cX)+x[j])*rT+(Number(cY)+y[j])].style.backgroundColor='green';
                }   
                
            }
        }
        console.log("a : "+a)
        if(isPath)
                await new Promise(resolve => setTimeout(resolve,value));
        if(flag==1)
            break;
    }
    if(flag==1)
    {
        var a=findShortestPath(src,map,dest,rT)
        console.log("path: "+a);
        for(var i=a.length-2;i>=0;i--)
        {
            if(isPath)
                await new Promise(resolve=>setTimeout(resolve,10));
            blocks[a[i]].style.backgroundColor='yellow'
        }
    }

}

function findShortestPath(src1,map,dest1,rT)
{
    var src=Number(src1[0])*rT+Number(src1[1])
    var dest=Number(dest1[0])*rT+Number(dest1[1]);
    var a=[];
    var cur=dest;
    while(cur!=src)
    {
        
        console.log("whilte loop  "+cur+"<-->"+map)
        a.push(map.get(cur))
        cur=map.get(cur);
    }
    return a;
}

function isWall(walls,p,q)
{
    for(var i=0;i<walls.length;i++)
    {
        if(walls[i][0]==p&&walls[i][1]==q)
            return false
    }
    return true
}
export default djkshtra