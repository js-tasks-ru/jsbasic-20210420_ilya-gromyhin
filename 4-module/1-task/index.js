function makeFriendsList(friends) {
    let ul = document.createElement('ul');

    for (el of friends) {
        let li = document.createElement('li');
        li.textContent = el['firstName'] + ' ' + el['lastName'];
        ul.append(li);
    }
    return ul;
}
