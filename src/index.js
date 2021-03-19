import 'bootstrap';
import './app.scss';
// import renderNav from './nav';
// import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';



// console.log(renderHome(), typeof renderHome())


// document.querySelector('#content').appendChild(renderNav());
// document.querySelector('#content').innerHTML = renderHome()
document.querySelector('#content').appendChild(renderMenu());
document.querySelector('#content').appendChild(renderContact());


// const loadPage = () => {
//     currentNode = homePage();
//     main.appendChild(createNav());
//     pageContainer.appendChild(currentNode);
//     main.appendChild(pageContainer);
//   };
  
//   const changePage = (newChild) => {
//     if (newChild !== currentNode) {
//       pageContainer.replaceChild(newChild, currentNode);
//       currentNode = newChild;
//     }
//   };
  
//   const switchPage = () => {
//     const links = document.querySelectorAll('.nav-item');
//     links.forEach((link) => {
//       link.addEventListener('click', (e) => {
//         const { target } = e;
//         links.forEach((item) => item.classList.remove('active'));
//         target.classList.add('active');
//         switch (target.textContent) {
//           case 'Home':
//             changePage(homePage());
//             break;
//           case 'Menu':
//             changePage(menuPage(menuList));
//             break;
//           default:
//             changePage(contactPage());
//         }
//       });
//     });
//   };
  
//   loadPage();
//   switchPage();
  