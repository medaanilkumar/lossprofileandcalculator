var first=document.getElementsByTagName('input')[0]
var second=document.getElementsByTagName('input')[1]
var third=document.getElementsByTagName('input')[2]
var btn=document.querySelector('#btn')
var output=document.querySelector('#output')
btn.addEventListener('click',execute)


function execute(){
    r1=first.value*second.value
    r2=second.value*third.value
    console.log(r1,r2)
    res=Math.abs(r1-r2)
    if(r1>r2){
        output.textContent=`<h1>loss of ${res} and percent ${res}%</h1>`
    }
    else{
        output.textContent=`Profit of ${res} and percent ${res}%`
    }
}