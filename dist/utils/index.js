"use strict";
function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
function formatData(user) {
    var _a, _b, _c, _d;
    var name = "".concat((_a = user === null || user === void 0 ? void 0 : user.name) === null || _a === void 0 ? void 0 : _a.title, " ").concat((_b = user === null || user === void 0 ? void 0 : user.name) === null || _b === void 0 ? void 0 : _b.first, " ").concat((_c = user === null || user === void 0 ? void 0 : user.name) === null || _c === void 0 ? void 0 : _c.last);
    var email = user === null || user === void 0 ? void 0 : user.email;
    var phone = "".concat(user === null || user === void 0 ? void 0 : user.phone, " / ").concat(user === null || user === void 0 ? void 0 : user.cell);
    var location = (_d = user === null || user === void 0 ? void 0 : user.location) === null || _d === void 0 ? void 0 : _d.city;
    var gender = user === null || user === void 0 ? void 0 : user.gender;
    return {
        name: name,
        email: email,
        phone: phone,
        location: location,
        gender: gender
    };
}
function getInnerContent(title, subtitle) {
    var titleNode = document.createElement('span');
    titleNode.classList.add('t-bold', 'mr1');
    titleNode.textContent = capitalizeFirstLetter(title);
    var titleWrapper = document.createElement('div');
    titleWrapper.appendChild(titleNode);
    titleWrapper.classList.add('display-flex', 'align-items-center');
    var subtitleNode = document.createElement('span');
    subtitleNode.classList.add('t-14', 't-normal', 't-black--light');
    subtitleNode.textContent = subtitle;
    return [titleWrapper, subtitleNode];
}
function CardTitle(content) {
    var node = document.createElement('div');
    node.classList.add('pvs-header__container');
    var titleContainer = document.createElement('div');
    titleContainer.classList.add('pvs-header__title-container');
    var title = document.createElement('h2');
    title.classList.add('pvs-header__title', 'text-heading-large');
    title.textContent = content;
    titleContainer.appendChild(title);
    node.appendChild(titleContainer);
    return node;
}
function CardContent(content) {
    var node = document.createElement('div');
    node.classList.add('pvs-list__outer-container');
    var unorderedList = document.createElement('ul');
    unorderedList.classList.add('pvs-list', 'ph5', 'display-flex', 'flex-row', 'flex-wrap');
    Object.entries(content).map(function (_a) {
        var key = _a[0], value = _a[1];
        var listItem = document.createElement('li');
        listItem.classList.add('artdeco-list__item', 'pvs-list__item--line-separated', 'pvs-list__item--one-column');
        var innerWrapper = document.createElement('div');
        innerWrapper.classList.add('pvs-entity', 'pvs-entity--padded', 'pvs-list__item--no-padding-when-nested', 'flex-column');
        var _b = getInnerContent(key, value), titleNode = _b[0], subtitleNode = _b[1];
        innerWrapper.appendChild(titleNode);
        innerWrapper.appendChild(subtitleNode);
        listItem.appendChild(innerWrapper);
        unorderedList.appendChild(listItem);
    });
    node.appendChild(unorderedList);
    return node;
}
function Card() {
    var node = document.createElement('div');
    node.classList.add('artdeco-card', 'break-words', 'mt4', 'pb3');
    node.setAttribute('id', 'injected-card');
    return node;
}
function createCard(element, content) {
    var data = formatData(content);
    var card = Card();
    var cardTitle = CardTitle("Injected");
    var cardContent = CardContent(data);
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    element === null || element === void 0 ? void 0 : element.appendChild(card);
    return card;
}
