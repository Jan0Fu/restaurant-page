function createMenu() {
    const main = document.createElement("main");

    const menu = document.createElement("section");
    menu.classList.add("menu");
    main.appendChild(menu);

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("menu-title");
    menu.appendChild(titleDiv);

    const title = document.createElement("h2");
    title.textContent = "Menu";
    titleDiv.appendChild(title);
    const textDiv = document.createElement("div");
    textDiv.classList.add("menu-text");

    for (let i = 1; i <= 5; i++) {
        const row = document.createElement("div");
        row.classList.add("menu-row");

        const course = document.createElement("h4");
        row.appendChild(course);

        const firstProp = document.createElement("p");
        const secondProp = document.createElement("p");
        row.appendChild(firstProp);
        row.appendChild(secondProp);

        if (i == 1) {
            course.textContent = "Appetizers";
            firstProp.textContent = "Steak Tartare";
            secondProp.textContent = "Bruschettas with Tomato and Basil";
    }   else if (i == 2) {
            course.textContent = "Soups";
            firstProp.textContent = "Minestrone";
            secondProp.textContent = "Classic Chicken Noodle Soup";
    }   else if (i == 3) {
            course.textContent = "Main Course";
            firstProp.textContent = "Baked Salmon with a Pistachio, Honey and Herb Crust";
            secondProp.textContent = "Chicken and Pancetta Cooked in Beer";
    }   else if (i == 4) {
            course.textContent = "Dessert";
            firstProp.textContent = "Panna Cotta";
            secondProp.textContent = "Creme Brulee";
    }   else if (i == 5) {
            course.textContent = "Season Wines";
            firstProp.textContent = "Chianti";
            secondProp.textContent = "Barolo";
    }
        textDiv.appendChild(row);
        menu.appendChild(textDiv);
  }
  return main;
}

export default createMenu;