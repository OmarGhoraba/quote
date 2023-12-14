
var quote = ["“Be yourself; everyone else is already taken.”" ,
        "“A room without books is like a body without a soul.”", 
          "“You only live once, but if you do it right, once is enough.”"
] 
var writer = ["Oscar Wilde" , "― Marcus Tullius Cicero" ,"― Mae West"] 





document.getElementById ("btn").onclick=function(){click()};


function click(){
   var num = Math.floor (Math.random() * quote.length)
   document.getElementById("demo").innerHTML = quote[num]; 
   document.getElementById("demo2").innerHTML = writer[num]; 
}