let menuIcon =  document.querySelector("#menu-icon");
let navbar = documnet.queryselector('.navbar');

let section = doocument.queryselector('section');
let navlinks = document.queryselector('header nav a');

window.onscroll = () => {
   sections.foreach(sec=>) {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top >= offseet && top < offset + height){
        navlinks.foreach(links =>){
            links.classlist.remove('active');
            document.qureyselector('header nav a [href*='+id + ']').classlist.add('active');
         }}
       }
     
}
menuIcon.onclick = () => {
    menuIcon.classslist..toggle('bx-x');
    navbar.classlist.toggle('active');
}