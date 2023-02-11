function toggleMenu(){
    var x=document.getElementById("mod");
    var y=document.getElementById("hed");
    var z=document.getElementById("ham");
    if(x.style.display==="block"){
        x.style.display="none";
        y.style.borderBottom="1px solid #ddd";
        z.style.backgroundColor="#fff";
        z.style.color="#000";
    }
    else{
        x.style.display="block";
        y.style.borderBottom="none";
        z.style.backgroundColor="blue";
        z.style.color="#fff";
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

