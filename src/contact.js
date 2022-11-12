function createContact() {
    const main = document.createElement("main");
  
    const contact = document.createElement("section");
    contact.classList.add("contact");
    main.appendChild(contact);
  
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("contact-title");
    contact.appendChild(titleDiv);
  
    const title = document.createElement("h2");
    title.textContent = "Contact";
    titleDiv.appendChild(title);
  
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    contact.appendChild(contactContainer);
  
    const textDiv = document.createElement("div");
    textDiv.classList.add("contact-text");
  
    const company = document.createElement("h3");
    company.textContent = "Restaurant";
    textDiv.appendChild(company);
  
    for (let i = 0; i < 6; i++) {
      const para = document.createElement("p");
  
      switch (i) {
        case 0:
          para.textContent = "Novozámocká 84";
          break;
        case 1:
          para.textContent = "Bratislava, 81101";
          break;
        case 2:
          para.textContent = "(000)-123 4567";
          break;
        case 3:
          para.textContent = "rrrestaurant@gmail.com";
          break;
        case 4:
          para.textContent = "Monday-Thursday: 10am - 9pm";
          break;
        case 5:
          para.textContent = "Friday-Sunday: 10am - 12pm";
          break;
        default:
          console.log(`error`);
      }
      textDiv.appendChild(para);
    }
    contactContainer.appendChild(textDiv);
    return main;
}
  
export default createContact;