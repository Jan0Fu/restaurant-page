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

}
export default createHeader;