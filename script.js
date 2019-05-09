var ul=document.getElementById('list');
var li=document.createElement('li');
function addTask(){

    var task= document.getElementById('input').value;
    ul=document.getElementById('list');
    var textNode=document.createTextNode(task);
    if(task===''){
        return false;
    }else{
        //create li
        li=document.createElement('li');
        //create checkbox
        var checkbox=document.createElement('input');
        checkbox.type='checkbox'
        checkbox.setAttribute('id','check');
        //create label
        var label=document.createElement('label');
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textNode)
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0])
        setTimeout(() => {
            li.className='visual'
        }, 3);
        input.value='';
    }
}

function removeTask(){
    li=ul.children
    for(let index=0;index<li.length;index++){
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index]);
        }
    }
}
var addButton=document.getElementById('add')
addButton.addEventListener('click',addTask);

var removeBtn=document.getElementById('remove')
removeBtn.addEventListener('click',removeTask)