const color = ['#6F98A8', '#2B8EAD', '#2F454E', '#2B8EAD', '#2F454E', '#BFBFBF','#BFBFBF','#6F98A8','#2F454E'];

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        setColor();
        setName();
    }
};

const setColor = () => {
    const parent = document.getElementById('card-holder');
    console.log(parent.children);
    for (let i =0; i < parent.children.length; i++) {
        parent.children[i].setAttribute('style', `background-color:${color[i]};`);
        if(parent.children[i].children[0].id === 'color-holder') {
            parent.children[i].children[0].setAttribute('style', `background-color:${color[i]};`);
        }
	}
}


const shuffle = () => {
	const parent = document.getElementById('card-holder');
	for (let i = parent.children.length; i >= 0; i--) {
        parent.appendChild(parent.children[Math.random() * i | 0]);
	}
    setName();
}

const sort = () => {
	const list = document.getElementById('card-holder').children;
	const itemsArr = Array.prototype.slice.call(list, 0);
	itemsArr.sort((a, b) => {
        return a.id == b.id
          ? 0
          : (a.id > b.id ? 1 : -1);
    });
	const parent =  document.getElementById('card-holder');
	for (let i = 0; i < itemsArr.length; i++) {
  	    parent.appendChild(itemsArr[i]);
	}
    setName();
}

const setName = () => {
    document.getElementById('name-holder').innerText = 'Ashwan';
}