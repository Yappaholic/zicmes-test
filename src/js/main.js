import "../scss/styles.scss"
import bootstrap from 'bootstrap'

const catalogLink = document.querySelectorAll(".catalog-link");
const catalog = document.querySelector("#catalog");

catalogLink.forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    catalog.scrollIntoView({behavior: "smooth"});    
  });
});
