export async function sudoku(a,v){
    

    // const grid=document.getElementsByClassName('sudoku-grid');
    console.log(a+" "+v)

    await sudo(a,0,0,v)
    console.log(a);

}

async function sudo(a,i,j1,v)
{
    console.log(v)
    console.log(i+"----"+j1)
    if(await isFilled(a))
        return true;
    const grid=document.getElementsByClassName('sudoku-grid');
    for(var j=j1;j<9;j++)
    {
        var color = grid[i*9+j].style.backgroundColor;
        await new Promise(resolve => setTimeout(resolve,v))
        if(a[i][j]==0)
            grid[i*9+j].style.backgroundColor='gold'

        if(a[i][j]!=0)
            continue
        if(await hasNumber(a,i,j,k))
        {
            for(var k=1;k<=9;k++)
            {
                console.log("i: "+i+" j:"+j)
                if(await check(a,i,j,k))
                {   
                    a[i][j]=k;
                    grid[i*9+j].innerHTML=k;
                    grid[i*9+j].style.color='black'
        
                    if(await sudo(a,i,j+1,v))
                    {
                        console.log("in true")
                        return true;
                    }
                    
                    await new Promise(resolve => setTimeout(resolve,v))
                    grid[i*9+j].style.backgroundColor='gold'
                    grid[i*9+j].innerHTML=0;
                    grid[i*9+j].style.color='transparent'
                    a[i][j]=0;
                }
            }
            if(a[i][j]==0)
            {
                await new Promise(resolve => setTimeout(resolve,v))
                grid[i*9+j].style.backgroundColor=color
                return false
            }
        }
        else
        {
            console.log('in return')
            await new Promise(resolve => setTimeout(resolve,v))
            grid[i*9+j].style.backgroundColor=color
            return false
        }
    }
    // console.log("before")
    if(await sudo(a,i+1,0,v))
        return true;
    // console.log("after")
    // return false;
}

async function isFilled(a)
{
    console.log("---------------------")
    for(var i=0;i<9;i++)
    {
        console.log(a[i])
    }
    console.log("---------------------")

    for(var i=0;i<9;i++)
    {
        for(var j=0;j<9;j++)
        {
            
            if(a[i][j]==0)
                return false
        }
        console.log(a[i])
    }
    
    return true;
}
async function hasNumber(t,r,c,num)
{
    var a=await createA(t,r,c)
    console.log("a : "+a)
    if(a.length<=9)
        return true;
    return false;
}
async function check(t,r,c,num)
{
    var a=await createA(t,r,c)
    if(a.includes(num))
        return false
    
    return true;
}

async function createA(t,r,c)
{
    var a=[];
    for(var i=0;i<9;i++)
    {
        if(t[i][c]!=0&&!a.includes(t[i][c]))
        {
            a.push(t[i][c])
        }
        if(t[r][i]!=0&&!a.includes(t[r][i]))
        {
            a.push(t[r][i])
        }
    }
    console.log((Math.floor(r/3)*3)+"<--math "+r+" "+c+" .fllor-->"+(Math.floor(c/3)*3))
    for(var i = Math.floor(r/3)*3;i < Math.floor(r/3)*3+3;i++)
    {
        for(var j = Math.floor(c/3)*3 ;j < Math.floor(c/3)*3+3;j++)
        {
            if(t[i][j]!=0&&!a.includes(t[i][j]))
            {
                a.push(t[i][j])
            }
        }
    }
    // console.log(a+" for "+r+" "+c)
    return a;
}
