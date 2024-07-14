let input=document.getElementById('input');
let button=document.getElementById('button');
button.addEventListener('click',()=>{
   let res=Number(input.value)*0.394;
   document.getElementById('result').innerHTML=res.toFixed(2)+" inches";
   //input.value='';
})