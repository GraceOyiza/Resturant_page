import 'bootstrap';
import './app.scss';
import renderNav from './nav';
import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';
// I sent a message to you



// console.log(renderHome(), typeof renderHome())
const main = document.querySelector('#content')
const pageContainer = document.createElement('div');

// document.querySelector('#content').appendChild(renderNav());
// document.querySelector('#content').appendChild(renderHome());
// document.querySelector('#content').insertAdjacentHTML('beforeend', renderHome());
// document.querySelector('#content').insertAdjacentHTML('beforeend', renderMenu());
// document.querySelector('#content').appendChild(renderContact());

let currentNode;
const loadPage = () => {
    currentNode = renderHome();
    main.appendChild(renderNav());
    pageContainer.appendChild(currentNode);
    main.appendChild(pageContainer);
  };
  
  const changePage = (newChild) => {
    if (newChild !== currentNode) {
      pageContainer.replaceChild(newChild, currentNode);
      currentNode = newChild;
    }
  };
  
  const switchPage = () => {
    const links = document.querySelectorAll('.nav-item');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const { target } = e;
        links.forEach((item) => item.classList.remove('active'));
        target.classList.add('active');
        switch (target.textContent) {
          case 'Home':
            changePage(renderHome());
            break;
          case 'Menu':
            changePage(renderMenu());
            break;
          default:
            changePage(renderContact());
        }
      });
    });
  };
  
  loadPage();
  switchPage();


