var first=document.getElementsByTagName('input')[0]
var second=document.getElementsByTagName('input')[1]
var third=document.getElementsByTagName('input')[2]
var btn=document.querySelector('#btn')
var output=document.querySelector('#output')
btn.addEventListener('click',execute)


function execute(){
    r1=first.value*second.value
    r2=second.value*third.value
    // console.log(r1,r2)
    // res=Math.abs(r1-r2)
    // if(r1>r2){
    //     output.textContent=`<h1>loss of ${res} and percent ${res}%</h1>`
    // }
    // else{
    //     output.textContent=`Profit of ${res} and percent ${res}%`
    // }
    if(r2-r1>0){
        var profit=r2-r1
        var profitper=(profit/(r1)*100)
        output.style.color = "green";
        output.innerHTML=`<h1>Profit of ${profit} and percent ${profitper}%</h1>`
    }
    else if(r2-r1<0){
        var loss=r1-r2
        var lossper=(loss/(r1)*100)
        output.style.color = "red";
        output.innerHTML=`<h1>loss of ${loss} and percent ${lossper}%</h1>`
    }
    else{
        output.style.color = "white";
        output.innerText = "No Pain No Gain"

    }
}