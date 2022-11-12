function createHome() {
    const main = document.createElement("main");
  
    const section = document.createElement("section");
    section.classList.add("home");
    main.appendChild(section);
  
    const headline = document.createElement("h2");
    headline.textContent = "Life should be ENJOYED!";
    section.appendChild(headline);
  
    const textContainer = document.createElement("div");
    textContainer.classList.add("home-text");
    section.appendChild(textContainer);
  
    const firstPara = document.createElement("p");
    firstPara.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec dapibus, justo sit amet sagittis varius, dui augue mollis turpis, ut.`;
    textContainer.appendChild(firstPara);
  
    const secondPara = document.createElement("p");
    secondPara.textContent = `In non nisi sit amet tortor vehicula imperdiet. 
    Suspendisse fermentum lorem in magna ullamcorper lobortis. Etiam aliquam auctor diam vitae pharetra. In facilisis malesuada urna ut sodales. 
    Pellentesque at scelerisque leo. Proin dapibus ac.`;
    textContainer.appendChild(secondPara);
  
    const thirdPara = document.createElement("p");
    thirdPara.textContent = `"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."`;
    textContainer.appendChild(thirdPara);
  
    const sidebar = document.createElement("div");
    sidebar.classList.add("left-sidebar");
    sidebar.classList.add("sidebar");
    main.appendChild(sidebar);
  
    const bakery = document.createElement("img");
    bakery.src = "images/restaurant.jpg";
    sidebar.appendChild(bakery);
  
    return main;
}
  
export default createHome;