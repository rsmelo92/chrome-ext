type User = {
  id: object,
  name: { title: string, first: string, last: string },
  email: string,
  phone: string,
  cell: string,
  picture: object, 
  location: { city: string },
  gender: string,
  dob: object,
  login: object,
  nat: string,
  registered: object,
}

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatData(user: User) {
  const name = `${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`;
  const email = user?.email;
  const phone = `${user?.phone} / ${user?.cell}`
  const location = user?.location?.city;
  const gender = user?.gender;
  return {
    name,
    email,
    phone,
    location,
    gender
  }
}

function getInnerContent(title: string, subtitle: string) {
  const titleNode = document.createElement('span');
  titleNode.classList.add('t-bold', 'mr1');
  titleNode.textContent = capitalizeFirstLetter(title);
  
  const titleWrapper = document.createElement('div');
  titleWrapper.appendChild(titleNode);
  titleWrapper.classList.add('display-flex', 'align-items-center');
  
  const subtitleNode = document.createElement('span');
  subtitleNode.classList.add('t-14', 't-normal', 't-black--light');
  subtitleNode.textContent = subtitle;
  
  return [titleWrapper, subtitleNode];
}

function CardTitle(content: string) {
  const node = document.createElement('div');
  node.classList.add('pvs-header__container');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('pvs-header__title-container');
  
  const title = document.createElement('h2');
  title.classList.add('pvs-header__title', 'text-heading-large');

  title.textContent = content;
  titleContainer.appendChild(title);
  node.appendChild(titleContainer);

  return node
}

function CardContent(content: object) {
  const node = document.createElement('div');
  node.classList.add('pvs-list__outer-container');

  const unorderedList = document.createElement('ul');
  unorderedList.classList.add('pvs-list', 'ph5', 'display-flex', 'flex-row', 'flex-wrap');

  Object.entries(content).map(([key, value]) => {
    const listItem = document.createElement('li');
    listItem.classList.add('artdeco-list__item', 'pvs-list__item--line-separated', 'pvs-list__item--one-column');

    const innerWrapper = document.createElement('div');
    innerWrapper.classList.add('pvs-entity', 'pvs-entity--padded', 'pvs-list__item--no-padding-when-nested', 'flex-column');

    const [titleNode, subtitleNode] = getInnerContent(key, value);
    innerWrapper.appendChild(titleNode);
    innerWrapper.appendChild(subtitleNode);

    listItem.appendChild(innerWrapper);

    unorderedList.appendChild(listItem);
  });

  node.appendChild(unorderedList);

  return node;
}

function Card() {
  const node = document.createElement('div');
  node.classList.add('artdeco-card', 'break-words', 'mt4', 'pb3');
  node.setAttribute('id', 'injected-card');

  return node
}

function createCard(element: HTMLElement, content: User) {
  const data = formatData(content);
  const card = Card();
  const cardTitle = CardTitle("Injected");
  const cardContent = CardContent(data);

  card.appendChild(cardTitle);
  card.appendChild(cardContent);
  
  element?.appendChild(card);
  
  return card;
}
