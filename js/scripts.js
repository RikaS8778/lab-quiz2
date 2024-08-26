let fullName = document.getElementById('full-name');
fullName.innerText = 'Rika Sonohara';
const date = new Date();

let correntDate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
console.log(correntDate);
document.getElementById('current-date').textContent = correntDate;
let yourMail = '';
while(!yourMail){
    yourMail = prompt('Type your email address');
    if(yourMail && !yourMail.includes('@')){
        alert('Please input valid your email address.');
        yourMail = '';
    } else {
        document.getElementById('your-email').textContent = yourMail;
    }
}

let defLay7Value = ' port / Layer 7';
document.getElementById('http').innerText = `80${defLay7Value}`;
document.getElementById('https').innerHTML = `443${defLay7Value}`;
document.getElementById('ssh').innerHTML = `22${defLay7Value}`;
document.getElementById('dns').innerHTML = `53${defLay7Value}`;


function changeName(){
    let targetName = false;
    while(!targetName) {
        targetName = prompt('Type your full name for showing the page title.');
        if(targetName) {
            console.log(typeof targetName);
            if(!(typeof targetName === 'string')){
                alert('Full name must be string value.');
                targetName = false;
            } else {
                fullName.innerText = targetName;
            }        
        }
    }
}

function makeListItems(){
    let number = false;
    while(!number) {
        number = prompt('How many items would you like in the list.');
        if(number && isNaN(number)){
            alert('Must need input valid number.');
            number = false;
        } else if (number == 0){
            alert('Please input valid number between 1 to 10.');
            number = false;
        } else if(number && (number < 1 || number > 10)){
            alert('Please input valid number between 1 to 10.');
            number = false;
        }
    }
    
    const parentD = document.getElementById('parent');
    parentD.innerHTML = '';
    const h2 = document.createElement('h2');
    h2.className = 'fw-bold mb-5';
    h2.innerHTML = 'List Of' + '<span class="text-primary fw-medium">'+' Items'+'</span>';
    parentD.appendChild(h2);
    let h_text = 'Item #';
    let p_text = 'This is item #'
    
   

    for(i=1;i<=number;i++){
        const itemP = document.createElement('div');
        itemP.className = 'd-flex mb-4';
        const imgD = document.createElement('div');
        imgD.className = 'text-primary';
        const img = document.createElement('img');
        img.width = 40;
        img.height = 20;
        img.src = '../demo.files/svg/various/line-chart.svg';
        img.alt = '...';
        imgD.appendChild(img);
        itemP.appendChild(imgD);
        const itemContainer = document.createElement('item-container');
        itemContainer.className = 'mx-2'
        const itemHeader = document.createElement('h3');
        itemHeader.className = 'h5 fw-bold mb-1';
        itemHeader.innerText = h_text + i;
        itemContainer.appendChild(itemHeader);
        const itemParag = document.createElement('p');
        itemParag.textContent = p_text + i;
        itemContainer.appendChild(itemParag);
        itemP.appendChild(itemContainer);
        parentD.appendChild(itemP);
    }
    

}