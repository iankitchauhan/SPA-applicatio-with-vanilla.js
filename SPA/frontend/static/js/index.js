import serverListing from './views/serverList.js';
import serverForm from './views/ServerForm.js';
const navigate = url =>{
    history.pushState(null,null,url);
    router();
}

const router = async ()=>{
   
 const routes =[
       { path:'/',view: serverForm},
       { path:'/view-servers',view: serverListing}
      
    ]

    const routeMatch = routes.map(res=>{
        return {
            isMatch:location.pathname == res.path,
            path:res
        }
    })
    let match = routeMatch.find(res=>res.isMatch);
   
    if(!match) {
        match ={
            path:routes[0],
            isMatch:true
        }
    }
    const viewRoute = new match.path.view(server);
document.querySelector('#app').innerHTML = await  viewRoute.getHtml();
    
}

window.addEventListener('popstate',router);
document.addEventListener('DOMContentLoaded',()=>{
    document.body.addEventListener('click',e=>{
        server = JSON.parse(localStorage.getItem("serverList"));
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigate(e.target.href);
        }
        if(e.target.className === 'button-text') {
           var inputValue = document.getElementById('serverName').value;
           let list = JSON.parse( localStorage.getItem("serverList"));
           list.push(inputValue);
           document.getElementById('serverName').value ='';
           localStorage.setItem('serverList',JSON.stringify(list));
        }
 
    })
    router()
   
})
var btns = document.querySelectorAll(".btn");
Array.from(btns).forEach(item => {
   item.addEventListener("click", () => {
      var selected = document.getElementsByClassName("active");
      selected[0].className = selected[0].className.replace(" active", "");
      item.className += " active";
   });
});
var server =['server 1','server 2','server 3'];
localStorage.setItem('serverList',JSON.stringify(server));