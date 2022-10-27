// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController();

function addItemCard(item){
    const itemHTML = '<div class="card" style="width:49.5%;">\n' +
        '    <img id="img" src="'+item.imageUrl +'" width="auto" height="75%"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h4 class="card-title">'+item.name+'</h4>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-warning">Get contacts</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        const sampleItems = [{'name':'Car',
        'imageUrl':'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'description':'New'},
        {'name':'Car',
        'imageUrl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6_C186uV5IkNO8uEmWBwDVmPyzmVEvykoQ&usqp=CAU',
        'description':'New'}];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}
// ***Function for populating your products/posts***
function loadCardsListFromItemsController(){
    let storedItems = itemsController.items;
    for(let i = 0; i < storedItems.length ; i++){
        const item = storedItems[i];
        addItemCard(item);
    }
}

loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();