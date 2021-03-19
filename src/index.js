import 'bootstrap';
import renderHome from './home';
import './app.scss';

console.log(renderHome(), typeof renderHome())

document.querySelector('#content').innerHTML = renderHome()