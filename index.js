var tog = true;
function toggleMenu(){
    tog = !tog;
    var x=document.getElementById("mod").classList;
    var y=document.getElementById("hed");
    var z=document.getElementById("ham");
    if(tog){
        x.remove("mod-down");
        x.remove("mod");
        x.add("mod-up");
        y.style.borderBottom="1px solid #ddd";
        z.style.backgroundColor="#fff";
        z.style.color="#000";
        // tog = !tog;
    }
    else{
        
       
        // tog = !tog;
        x.remove("mod")
        x.remove("mod-up")
        x.add("mod-down");
        y.style.borderBottom="none";
        z.style.backgroundColor="blue";
        z.style.color="#fff";
    }
}

        window.addEventListener("resize", myFunction);
        function myFunction(){
            var w = window.innerWidth;
            if(w>=990){
                var x=document.getElementById("mod").classList;
                var z=document.getElementById("ham");
                var y=document.getElementById("hed");
                x.remove("mod-down");
                x.remove("mod-up");
                x.add("mod");
                y.style.borderBottom="1px solid #ddd";
                z.style.backgroundColor="#fff";
                z.style.color="#000";
                tog=true;
            }
        }

window.addEventListener("scroll", countUp);
            var m =0;
        function countUp(){
            var c = document.getElementById("counter");
            var bounding = c.getBoundingClientRect();
            
                  
            if(bounding.top<750){
                
                if(m==0){
                    let counts=setInterval(updated);
                let upto=3000000;
                function updated(){
                    var count= document.getElementById("counter");
                    count.innerHTML= upto+= 10000;
                    if(upto===6000000)
                    {
                    clearInterval(counts);
                    }
                  
                }
                    m++;
                }
            }
            
        }

function toggleDropdown(id){
    if(id.childNodes[3].style.display==="block"){
        id.childNodes[3].style.display="none";
    }
    else{
        id.childNodes[3].style.display="block";
    }
}
function togShow(id){
    id.childNodes[3].style.display="block";
}
function togClose(id){
    id.childNodes[3].style.display="none";
}

