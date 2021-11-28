const mainContent = document.getElementById('main');
const profileSection = mainContent?.firstElementChild;

const root = document.createElement('div');
root.setAttribute('id', 'root');

profileSection?.appendChild(root);

alert('Hello, world!');
