
var likebtnu = document.getElementById("likeu");
var ii = document.getElementById("ii");
likebtnu.addEventListener("click",()=>{
    ii.style.opacity=1
    
    setTimeout(function(){
        ii.style.opacity=0
        likebtnu.style.display="none"
    },1000)
    console.log("1like");
})

var readdd = document.getElementById("readmore-cardhhh");
readdd.addEventListener("click",(e)=>{
   document.getElementById("repp").innerHTML="dolor sit amet consectetur <br> aspernatur officia odi";
   readdd.style.display="none"
  console.log(readdd,likebtnu);
    })









var likebtnuu = document.getElementById("likeuu");
var iii = document.getElementById("iii");
likebtnuu.addEventListener("click",()=>{
    iii.style.opacity=1
    
    setTimeout(function(){
        iii.style.opacity=0
        likebtnuu.style.display="none"
    },1000)
})
var readddd = document.getElementById("readmore-cardhhhh");
readddd.addEventListener("click",()=>{
    document.getElementById("reppp").innerHTML="dolor sit amet consectetur,<br> aspernatur officia odi";
    readddd.style.display="none"
})





var likebtnuuu = document.getElementById("likeuuu");
var iiii = document.getElementById("iiii");
likebtnuuu.addEventListener("click",()=>{
    iiii.style.opacity=1
    
    setTimeout(function(){
        iiii.style.opacity=0
        likebtnuuu.style.display="none"
    },1000)
})
var readdddd = document.getElementById("readmore-cardhhhhh");
readdddd.addEventListener("click",()=>{
    var pppp = document.getElementById("repppp").innerHTML="dolor sit amet consectetur,<br> aspernatur officia odi";
    readdddd.style.display="none"
})