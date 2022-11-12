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
    secondPara.textContent = `Let us surprise you. Do you love bread? You are in good place.
    Best place. We love it too. We went quite overboard with our love
    - we love it so much that we decided to make every meal out of
    bread. Isn't that genius?`;
    textContainer.appendChild(secondPara);
  
    const thirdPara = document.createElement("p");
    thirdPara.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec dapibus, justo sit amet sagittis varius, dui augue mollis turpis, ut.`;
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