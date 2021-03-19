import 'bootstrap';
import renderHome from './home';
import renderNav from './nav';
import './app.scss';

console.log(renderHome(), typeof renderHome())

document.querySelector('#content').innerHTML = renderHome()
document.querySelector('#content').innerHTML = renderNav()