import createHome from './home';
//import createHeader from './header';

const mainContent = document.querySelector("#content");

mainContent.appendChild(createHeader());
mainContent.appendChild(createHome());