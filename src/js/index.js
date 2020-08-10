import * as navView from './views/navView';
import {domStrings} from './models/base';

document.querySelector(domStrings.navBtn).addEventListener('click', navView.toggleMenu);