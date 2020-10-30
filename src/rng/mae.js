export async function mae(value,i,j,isMae)
{
    const grid=document.getElementsByClassName('maze-grid')
    if(grid[0].style.backgroundColor!='black')
    {
        alert("Build mae for mouse")
            return
    }
    if(i==0&&j==0)
    {
        alert("Place mouse first")
        return
    }
    var a=[]
    var x=[0,1,0,-1]
    var y=[1,0,-1,0]
    await m(i,j,x,y,a,value,isMae)
    console.log("end")
}

async function m(i,j,x,y,a,value,isMae)
{
    i=Number(i)
    j=Number(j)
    a.push(new Array(i,j));
    console.log(i+"<---->"+j)
    const grid=document.getElementsByClassName('maze-grid')
    // grid[0].style.backgroundColor='yellow'
    if(i==8&&j==56)
        return true
    for(var k=0;k<4;k++)
    {
        if(await isSafe(i+x[k],j+y[k],a))
        {
            console.log("here "+i+" "+x[k]+" "+(i+x[k])+" "+((i+x[k])*57+(j+y[k])))
            if(!isMae)
                await new Promise(r => setTimeout(r,value))
            grid[(i+x[k])*57+(j+y[k])].style.backgroundColor='yellow'
            if(await m(i+x[k],j+y[k],x,y,a,value,isMae))
            {
                return true
            }
            // if(!isMae)
            //     await new Promise(r => setTimeout(r,value))
            grid[(i+x[k])*57+(j+y[k])].style.backgroundColor='white';
        }
    }
    console.log(i*57+j)
    if(!isMae)
        await new Promise(r => setTimeout(r,value))
    grid[i*57+j].style.backgroundColor='white';
    return false
}

async function isSafe(i,j,a)
{
    i=Number(i)
    j=Number(j)
    if(i<0||i>=22||j<0||j>=57)
        return false
    const grid=document.getElementsByClassName('maze-grid')
    console.log("in isSafe(): "+i+" "+j+" "+(i*57+j))
    if(grid[i*57+j].style.backgroundColor=='black'||grid[i*57+j].style.backgroundColor=='yellow'||grid[i*57+j].style.backgroundColor=='red')
        return false
    
    for(var k=0;k<a.length;k++)
    {
        if(a[k][0]==i&&a[k][1]==j)
            return false
    }
    
    return true;
}