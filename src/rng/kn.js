export async function knight(array,r,c,value){
    var x=[2, 1, -1, -2, -2, -1, 1, 2]
    var y=[1, 2, 2, 1, -1, -2, -2, -1]

    console.log("before")
    console.log(array)
    await kn(array,x,y,r,c,1,value)
    console.log("after")
    console.log(array)
}

async function kn(a,x,y,i,j,c,value)
{
    console.log(value)
    const kD = document.getElementsByClassName('kn')
    await new Promise(resolve => setTimeout(resolve,value))
    kD[i*8+j].style.color='gold'
    kD[i*8+j].innerHTML='&#9822;'

    console.log("========================================")
    console.log(i+" <------> "+j+" " +c)
    // for(var i1=0;i1<8;i1++)
    // {
    //     console.log(a[i1])
    // }
    if(c==64)
        return true;
    for(var k=0;k<8;k++)
    {
        if(await isSafe(a,i+x[k],j+y[k]))
        {
            a[i][j]=c;
            await new Promise(resolve => setTimeout(resolve,value))
            kD[i*8+j].style.color='gold'
            kD[i*8+j].innerHTML=c
            
            if(await kn(a,x,y,i+x[k],j+y[k],c+1,value))
                return true;
            
            await new Promise(resolve => setTimeout(resolve,value))
            a[i][j]=0;
            kD[i*8+j].style.color='transparent'
        }
    }

    await new Promise(resolve => setTimeout(resolve,value))
    // a[i][j]=0;
    kD[i*8+j].style.color='transparent'

    return false
}

async function isSafe(a,x,y)
{
    if(x<0||x>=8||y<0||y>=8)
        return false
    if(a[x][y]!=0)
        return false
    
    return true
}