const leftTexts=document.querySelectorAll(".text")
const rightText= document.querySelector('.right')
let partLeft=document.querySelector(".container .left")


leftTexts.forEach(text => {

    text.onclick=()=>{

        leftTexts.forEach((ele)=>{

        ele.style.border = 'none';
      })
      text.style.border = '6px solid orange';
    
    }
});
//////request///////////////
function getPost(userId){
    let request =new XMLHttpRequest()
    request.open("GET",`https://jsonplaceholder.typicode.com/posts?userId=`+userId)
    request.responseType='json'
    request.send()
    
    request.onload=()=>{
        let posts=request.response
        let post;
        
        for (post of posts){
            rightText.innerHTML+=`<h1>${post.title}</h1>`
        }
    
    
    }
    }
    getPost(2)
// function users(){
//     let request =new XMLHttpRequest()
//     request.open("getPost",`https://jsonplaceholder.typicode.com/users`)
//     request.responseType='json'
//     request.send()
    
//     request.onload=()=>{
//         let users=request.response
//         let user;
        
//         for (user of users){
//         //    document.querySelector(".container .left .text h1").innerHTML+=`<h1>${user.name}</h1>`
        
//         partLeft.innerHTML+=`<h1>${user.name}</h1>`
//             partLeft.addEventListener('click',
//             function userclick(id){
//                 getPost(id)
//              })
           
//         }
//         }
    
    
//     }
   

//     users()
//////////////////////////////////////////////////////////////////////////////////
function users(){
        let request =new XMLHttpRequest()
        request.open("GET",`https://jsonplaceholder.typicode.com/users`)
        request.responseType='json'
        request.send()
        
        request.onload=()=>{
            let users=request.response
            let user;
            
            for (user of users){
            //    document.querySelector(".container .left .text h1").innerHTML+=`<h1>${user.name}</h1>`
            partLeft.innerHTML+=`<h1>${user.name}</h1>`
           document.querySelector(".container .left h1 ").onclick=()=>{clicked(user.id,this)} 
           //document.querySelector(".container .left h1 ").onclick=()=>{console.log(user.id)} 
            //document.querySelector(".container .left ").onclick=()=>{test(5)}
               //console.log(user.id)
            }
           
        
        
        }
       
     
}
users()
function clicked(id,el){
    getPost(id)
    
     
}
function test(num){
    console.log(num*3) 
}
  
 