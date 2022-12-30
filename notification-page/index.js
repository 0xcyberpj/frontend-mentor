
const reader=document.querySelector('.read')
const notification=document.querySelector('.notification');

const noti=document.querySelectorAll('.noti')
const count= document.querySelector('.count')
const red=document.querySelectorAll('.red_alert')






const whole_content=document.querySelectorAll('.active')

let value=whole_content.length;

count.innerHTML=value;

function clear(){
   for(let  i=0;i<=whole_content.length;i++){
    whole_content[i].addEventListener('click',()=>{
        
        if(count.innerHTML>=0 && (value>0)){
            whole_content[i].classList.toggle('noter');
            red[i].remove();
            count.innerHTML=--value;

        }



   
        
    

    } ) }}
clear()




function varta(){
    count.innerHTML=0;
    reader.classList.toggle('readed')
    for(let  i=0;i<=whole_content.length;i++){            
                whole_content[i].classList.add('noter');
                red[i].remove();
    }
}    
 