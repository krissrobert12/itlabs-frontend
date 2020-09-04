import {domStrings} from './models/base';
import * as visitedView from './views/visitedView';
import Post from './models/Post';
import * as Cookie from './models/cookies';
import * as switchView from './views/switchView';


// Build posts structure
const postItems = [];
document.querySelectorAll(domStrings.postItem).forEach(item => {
    const post = new Post(item);
    post.setDate();
    post.updateDate();
    postItems.push(post);
});


// Load visited ids
let postIds = Cookie.get('postIds');
let postIdsArray = postIds.split(' ');

if (postIds.length) {
    postIdsArray.forEach(id => {
        const item = postItems.find(item => item.id === id);
        if(item) {
            visitedView.addItem(item);
        } else {
            console.log('Post ID error');
        }
    });
}


// Set cookie before redirecting to link
const updateVisited = (e) => {
    e.preventDefault();

    const parent = e.target.closest(domStrings.postItem) || 
        e.target.closest(domStrings.visitedItem);
    const id = parent.dataset.id;

    const index = postIdsArray.indexOf(id);
    if (index != -1) {
        postIdsArray.splice(index, 1);
    }
    postIdsArray.unshift(id);

    postIds = postIdsArray.join(' ');
    Cookie.set('postIds', postIds, 30);
    window.location.href = postItems.find(item => item.id === id).link;
}


// Event listeners for new link clicks
[domStrings.postItemBtn, domStrings.visitedItemLink].forEach(selector => {
    document.querySelectorAll(selector).forEach(btn => {
        btn.addEventListener('click', updateVisited);
    });
});



/**
 * Switch btn for blog
 */

const switchClick = (e) => {

    // 1. get state of btn and update it
    const switchState = switchView.toggleSwitch(e);

    // 2. update post list
    if(switchState.hasChanged) {
        visitedView.updateOrder(postItems, postIdsArray, !switchState.active)
    }
}

document.querySelectorAll(domStrings.switch).forEach(btn => {
    btn.addEventListener('click', switchClick);
});


const init = () => {
    visitedView.updateOrder(postItems, postIdsArray, 0);
}

init();