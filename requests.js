var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const ptag = document.querySelector('#quote');
// Performing XHR requests 
// let xhr = new XHRHttpRequest()
// document.querySelector('#xhr').addEventListener('click',function(){
//   xhr.onreadystatechange= function(){
//     if(xhr.status==200 && xhr.readyState==4){
//     console.log(xhr.responseText)
//   };
//     xhr.open('GET',url);
//     xhr.send();
//   }
// })
//performing fetch requests
const btn = document.querySelector('#fetch');
btn.addEventListener('click',function(){
fetch(url)
.then(function(res){
  return res.json();    
})
.then(function(data){
ptag.innerText = data;
})
.catch(function(err){
    console.log('Errorroror');
})    
})
//performing jquery requests
document.querySelector('#jquery').addEventListener('click',function(){
    $.get(url)
    .done(function(data){
        ptag.innerText = data;
    })
})
//performing axios requests 
document.querySelector('#axios').addEventListener('click',function(){
   axios.get(url)
   .then(function(res){
       ptag.innerText = res.data[0];
   })
})