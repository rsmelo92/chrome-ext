const API_URL = 'https://randomuser.me/api/';

function triggerInjection() {
  const isInProfileView = document.getElementById('profile-content');
  const alreadyHasCard = document.getElementById('injected-card');
  const mainContent = document.getElementById('main');
  if (isInProfileView && !alreadyHasCard && mainContent && mainContent.firstElementChild) {
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    
    mainContent.insertBefore(root, mainContent.firstElementChild.nextSibling);
    
    const rootEl = document.getElementById('root');
    
    if(rootEl) {
      fetch(API_URL)
        .then(res => res.json())
        .then(({ results }) => {
          const [user] = results;
          createCard(rootEl, user);
        });
    }
  }
}

chrome.runtime.onMessage.addListener((request) => {
  if (request.hasChanged) {
    triggerInjection();
  }
});
