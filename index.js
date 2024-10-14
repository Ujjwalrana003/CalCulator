let input=document.querySelector("input");
let btns=document.querySelectorAll("button");
let add="";
let inpVal="";
let lastIndex=0;
for(let btn of btns){
    
        btn.addEventListener("click",(e)=>{
        
            try{
                inpVal=e.target.innerText;
                input.value=inpVal;//to show in
        
                if(inpVal==="="){
                    add=eval(add);
                    input.value=add;
                }else if(inpVal==="C"){
                    input.value="";
                    add="";
                    
                }else if(inpVal==="del"){
                    lastIndex= add.lastIndexOf();
                    add= add.slice(0,lastIndex);
                    input.value=add;
                }
                else{
                    add=add+inpVal;
                    input.value=add;
                }
            }catch{
                input.innerText="WRONG INPUT";
            }
                
        })
    
}


