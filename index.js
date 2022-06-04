const currentPage = location.href;
const activeLink = document.querySelectorAll('a');
const navLink = activeLink.length
for(let i=0;i<navLink;i++){
   if(activeLink[i].href == currentPage){
      activeLink[i].className = "active"
   }
}