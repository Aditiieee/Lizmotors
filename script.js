
const sidebarListItems = document.querySelectorAll('.sidebar ul > li');

for (let i = 0; i < sidebarListItems.length; i++) {
    sidebarListItems[i].addEventListener('click', function(e) {
        const listItem = e.currentTarget;
        const itemId = listItem.getAttribute('id');
        const subItems = document.getElementById(itemId + '-items');
        const contentDiv = document.getElementById('content-' + itemId);

        if (subItems) {
            toggleSubItems(subItems);
        }

        if (contentDiv) {
            toggleContent(contentDiv);
        }
    });
}

function toggleSubItems(subItems) {
    subItems.style.display = subItems.style.display === 'none' ? 'block' : 'none';
}

function toggleContent(contentDiv) {
    contentDiv.style.display = contentDiv.style.display === 'none' ? 'block' : 'none';
    toggleGifAnimation();
}

function toggleGifAnimation() {
    const gif = document.getElementById('gif');
    gif.classList.toggle('gif-paused');
}
