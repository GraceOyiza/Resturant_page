import 'bootstrap';
import './app.scss';
import renderNav from './nav';
// import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';



// console.log(renderHome(), typeof renderHome())


document.querySelector('#content').appendChild(renderNav());
// document.querySelector('#content').innerHTML = renderHome()
document.querySelector('#content').appendChild(renderMenu());
document.querySelector('#content').appendChild(renderContact());


