
export async function bubbleS(props,t){
    var a=props;
    console.log(a+" "+t)
    const disp=document.getElementsByClassName('array-bar-pos');
    // if(a.len<t)
    //     disp.style.width=`5px`
    // disp[0].style.backgroundColor='red'
    let len=a.length;
    //to make the elements in a row coz the 0 th elementh is actually 
    //the last element when you see in browser
    // var animation=[]
    for(let i=0;i<len-1;i++)
    {   
                for(let j=0;j<len-i-1;j++)
                {
                    await new Promise(resolve => setTimeout(resolve,t));   
                    // console.log(a[j])
                    // setTimeout(()=>{
                        if(a[j]>a[j+1])
                        { 
                            
                            // animation.push([j,j-1,true,a[j],a[j-1]]);
                            await new Promise(resolve => setTimeout(resolve,t/2));   
                            disp[j].style.backgroundColor = 'red';
                            disp[j+1].style.backgroundColor= 'red'; 
                            // disp[j].style.boxShadow = 'red 5px 5px tpx';
                            // disp[j+1].style.boxShadow = 'red 5px 5px tpx'; 
                            
                            disp[j].style.height=  `${a[j+1]}px`;
                            disp[j+1].style.height=  `${a[j]}px`;
                            if(j-1>=0)
                            {     
                                disp[j-1].style.backgroundColor='lightskyblue';
                                // disp[j-1].style.boxShadow='royalblue 5px 5px 10px';
                            }
                            await new Promise(resolve => setTimeout(resolve,t/2));   
                            swap(a,j,j+1);
                            // await new Promise(resolve => set Timeout(resolve,t/2));
                            // if(j+1<len)   
                            //     disp[j+1].style.backgroundColor= 'lightskyblue';
                            // disp[j-1].style.backgroundColor= 'lightskyblue'; 
                        }
                        else
                        {
                            // animation.push([j,j-1,false,0,0]);
                            await new Promise(resolve => setTimeout(resolve,t/2));   
                            disp[j].style.backgroundColor='green';
                            disp[j+1].style.backgroundColor='green'; 
                            // disp[j].style.boxShadow = 'green 5px 5px 10px';
                            // disp[j+1].style.boxShadow = 'green 5px 5px 10px';
                            if(j-1>=0)    
                            { 
                                disp[j-1].style.backgroundColor='lightskyblue';
                                // disp[j-1].style.boxShadow='royalblue 5px 5px 10px';
                            }
                            // await new Promise(resolve => setTimeout(resolve,10/2));
                            // if(j+1<len)     
                            //     disp[j+1].style.backgroundColor='lightskyblue';
                            // disp[j-1].style.backgroundColor='lightskyblue'; 
                        }
                    // },10)
                    // disp[len-i].style.backgroundColor='lightskyblue';  
                }
                await new Promise(resolve => setTimeout(resolve,t));   
                disp[len-i-1].style.backgroundColor='lightskyblue'; 
                disp[len-i-2].style.backgroundColor='lightskyblue';
                // disp[len-i-1].style.boxShadow='darkblue 5px 5px 10px'; 
                // disp[len-i-2].style.boxShadow='royalblue 5px 5px 10px';
        
    }
    disp[0].style.backgroundColor='lightskyblue'; 
    
    // console.log("Animation :" +a)
    // console.log(props)
    // console.log(disp[0]);
    //console.log(disp[0].getElementsByClassName)
    return a;

}

function swap(array,a,b)
{
    var temp=array[a];
    array[a]=array[b];
    array[b]=temp;
}