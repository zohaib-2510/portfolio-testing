var read = document.getElementById("read");
var heart = document.getElementById("heart");

read.addEventListener("click",()=>{
    console.log("para work");
    var ppppp=  document.getElementById("readpara").innerHTML = "I have changed! dipisicing elit. Ea tempora, ipsa voluptas sunt excepturi repellendus, corporis eaque ";
read.style.display = "none";
})
var i = document.getElementById("jhnj")
heart.addEventListener('click',function(){

    i.style.opacity=1
    
    setTimeout(function(){
    i.style.opacity=0

},1000)
})

