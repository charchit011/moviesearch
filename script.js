function searchmovie(){
    var moviename=document.getElementById('moviename').value;
    // document.getElementById('tata').innerHTML=moviename;

fetch("https://www.omdbapi.com/?apikey=8f595a29&s="+moviename)
 .then((response)=>{
     
     var data=response.json();
     console.log(data);
     return data;
     })
     .then((data)=>{
        var names;
         var p=data.Search;
        //  var pt=p.json();
        var count = Object.keys(p).length;
         console.log(count);
         for (let i = 0; i < count; i++) {
         names+=(p[i].Title+'\n');
         console.log(p[i].Title);
        }  
        document.getElementById('tata').innerHTML=names;
     })
   
  .catch()  

    }

    function changetitle(){
        var movietitle=document.getElementById('moviename').value;
        document.getElementById('title').innerHTML=movietitle;

    }
