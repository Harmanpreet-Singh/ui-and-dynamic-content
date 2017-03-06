document.querySelector("button").addEventListener("click", addItem);

function addItem() 
{
    var unorderedList = document.getElementById('list');
    var item = document.createElement('li');
    var input = prompt("Enter a new item for to-do list:");
    if (input !=null & input.length>0) 
    {
        item.innerHTML = '<i class="fa fa-minus-circle" aria-hidden="true"> <span class = "spanClass">' + input + '</span>';
        item.onclick = function () 
        { 
            this.parentNode.removeChild(this); 
        }
        unorderedList.appendChild(item);
    }
}