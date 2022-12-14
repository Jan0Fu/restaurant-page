function createHeader() {
    const header = document.createElement("header");
    const container = document.createElement("div");
    container.classList.add("header-container");
    header.appendChild(container);

    const title = document.createElement("h1");
    container.appendChild(title);

    const logo = document.createElement("img");
    logo.id = "logo";
    logo.src = "images/logo.png";
    logo.alt = "restaurant logo";
    title.appendChild(logo);

    const nav = document.createElement("nav");
    nav.classList.add("tabs"); 
    for (let i = 1; i <= 3; i++) {
        let tab = document.createElement("div");
        tab.classList.add("tab");
    
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "tabgroup";
        input.id = `tab-${i}`;
        if (i == 1) input.checked = true;
    
        let label = document.createElement("label");
        label.htmlFor = `tab-${i}`;
        if (i == 1) label.textContent = "Home";
        if (i == 2) label.textContent = "Menu";
        if (i == 3) label.textContent = "Contact";
    
        tab.appendChild(input);
        tab.appendChild(label);
        nav.appendChild(tab);
    }
    container.appendChild(nav);
    return header;
}
export default createHeader;