/*
with html element

const todoList= ['make-dinner','wash clothes'];
renderTodo();

function renderTodo(){
    let todoListHTML='';
    for(let i=0;i<todoList.length;i++){
    
        const todo=todoList[i];
        const html=`<p>${todo}
        < button onclick="
        todoList.splice(${i},1);
        renderTodo();
        " >Delete</button>
        </p>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML=todoListHTML;

}

function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=  inputElement.value;
    console.log(name);

    todoList.push(name);
    console.log(todoList);
    renderTodo();
}*/
/*const todoList= [{name: 'make-dinner',dueDate: '2-12-2022'},{name: 'bake-cake',dueDate: '8-2-2022'}];
renderTodo();

function renderTodo()
{
    let todoListHTML='';
    for(let i=0;i<todoList.length;i++){
    
        const todoObject=todoList[i];
        // const name= todoObject.name;
        // const dueDate=todoObject.dueDate;
        const {name,dueDate}=todoObject;
        const html=`<div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i},1);
            renderTodo();
        " class="Delete-todo-button"
        
        >Delete</button>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML=todoListHTML;

}

function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name= inputElement.value;
    const dateinputElement=document.querySelector('.js-dueDate-input');
const dueDate=dateinputElement.value;
  

    todoList.push({
        // name: name ,
        // dueDate:dueDate
name,dueDate//shorhand property for same variables
    }
     );
     inputElement.value='';
   console.log(todoList);
    renderTodo();
}
*/
const todoList= [];
renderTodo();

        function renderTodo()
        {
            let todoListHTML='';

        /*  todoList.forEach((todoObject,index)=> {
            
            
                    // const name= todoObject.name;
                    // const dueDate=todoObject.dueDate;
                    const {name,dueDate}=todoObject;
                    const html=`<div>${name}</div>
                    <div>${dueDate}</div>
                    <button onclick="
                        todoList.splice(${index},1);
                        renderTodo();
                    " class="Delete-todo-button js-Delete-todo-button"
                    
                    >Delete</button>`;
                    todoListHTML += html;
                

            });
        */
        //removing onclick attribute   
            
            todoList.forEach((todoObject,index)=> {
                // const name= todoObject.name;
                // const dueDate=todoObject.dueDate;
                const {name,dueDate}=todoObject;
                const html=`<div>${name}</div>
                <div>${dueDate}</div>
                <button class="Delete-todo-button js-Delete-todo-button"
                
                >Delete</button>`;
                todoListHTML += html;
                });

                console.log(todoListHTML);
                document.querySelector('.js-todo-list').innerHTML=todoListHTML;
            //console.log(document.querySelectorAll('.js-Delete-todo-button'));
            document.querySelectorAll('.js-Delete-todo-button').forEach((DeleteButton,index)=>{
                DeleteButton.addEventListener('click',()=>{
                    console.log(index);
                    todoList.splice(index,1);
                    renderTodo();
            })

        })

        }

    document.querySelector('.js-add-Todo-button')
    .addEventListener('click',()=>{
        addTodo();
    })

function addTodo(){
            const inputElement=document.querySelector('.js-name-input');
            const name= inputElement.value;
            const dateinputElement=document.querySelector('.js-dueDate-input');
        const dueDate=dateinputElement.value;

        if (name !== '' && dueDate !== '') {

            todoList.push({
                // name: name ,
                // dueDate:dueDate
        name,dueDate//shorhand property for same variables
            }
            );
        }
      
            inputElement.value='';
       // console.log(todoList);
            renderTodo();
}
