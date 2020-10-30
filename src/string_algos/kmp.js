export async function kmp(str,pat,value) {

    //color of alphabates
    var color=['#add8e6','#f08080','maroon','royalblue','#d3d3d3','#90ee90','navy','lightseagreen','lightskyblue'
                ,'mediumaquamarine','mediumseagreen','mediumspringgreen','orange','steelblue','turquoise','yellowgreen'
                ,'crimson','chocolate','cornflowerblue','darkcyan','darkkhaki','darkorchid','darkslateblue','fuchsia','gold','indianred','indigo']

    const s=document.getElementsByClassName('kmp-str');
    const p=document.getElementsByClassName('kmp-pat');

    for(var i=0 ;i<str.length;i++)
    {
        // console.log("i: "+(charC));
        // await new Promise(resolve => setTimeout(resolve,value/2))
        // s[i].style.backgroundColor=color[i]
        s[i].style.backgroundColor='black';
    }
    for(var i=0 ;i<pat.length;i++)
    {
        // console.log("i: "+(charC));
        // await new Promise(resolve => setTimeout(resolve,value/2))
        // s[i].style.backgroundColor=color[i]
        p[i].style.backgroundColor='black';
    }
    console.log('here')
    for(var i=0 ;i<str.length;i++)
    {
        // console.log("i: "+(charC));
        await new Promise(resolve => setTimeout(resolve,value/2))
        // s[i].style.backgroundColor=color[i]
        s[i].style.backgroundColor=color[str[i].charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    for(var i=0 ;i<pat.length;i++)
    {
        // console.log("i: "+(charC));
        await new Promise(resolve => setTimeout(resolve,value/2))
        // s[i].style.backgroundColor=color[i]
        p[i].style.backgroundColor=color[pat[i].charCodeAt(0) - 'a'.charCodeAt(0)];
    }

    const sI=document.getElementsByClassName('kmp-str-index')
    const pI=document.getElementsByClassName('kmp-pat-index')


    if(pat.length>str.length)
    {
        alert('Length of pattern is greater than your string')
        return;
    }

    var lps=[];
    for(var i=0;i<pat.length;i++)
        lps.push(0);
    
    lpsA(lps,pat) 
    console.log(lps) 
    var j=0;
    for(var i=0;i<str.length;)
    {
        await new Promise(resolve => setTimeout(resolve,value))
        sI[i].style.visibility='visible';
        pI[j].style.visibility='visible';
        
        if(str[i]==pat[j])
        {
            await new Promise(resolve => setTimeout(resolve,value))
            sI[i].style.visibility='hidden';
            pI[j].style.visibility='hidden';
            i++;j++;
            if(j==pat.length)
            {
                console.log(i-j+" "+(i-1))
                // var code = [];
                for(var k=i-j;k<i;k++)
                {
                    // code.push(s[])
                    await new Promise(resolve => setTimeout(resolve,value))
                    s[k].style.backgroundColor='black';
                }
                await new Promise(resolve => setTimeout(resolve,value))
                for(var k=i-j,l=0;k<i;k++,l++)
                {
                    await new Promise(resolve => setTimeout(resolve,value))
                    s[k].style.backgroundColor=p[l].style.backgroundColor;
                }
                j=lps[j-1];
            }
        }
        else
        {
            if(j!=0)
            {
                await new Promise(resolve => setTimeout(resolve,value))   
                pI[j].style.visibility='hidden';

                j=lps[j-1];
            }
            else
            {
                sI[i].style.visibility='hidden';
                i++;
            }
        }
        
        
    }
}

function  lpsA(lps,pat) {
    var len=0;
    for(var i=1;i<pat.length;)
    {
        if(pat[len]==pat[i])
        {
            len++;
            lps[i]=len;
            i++;
        }
        else
        {
            if(len!=0)
            {
                len=lps[len-1];
            }
            else
                i++;
        }
    }
}