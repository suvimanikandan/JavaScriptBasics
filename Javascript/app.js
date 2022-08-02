const todos=[
    {
        id:1,
        text:'take out of truth',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentsist appt',
        isCompleted:false
    }
];
//For
for(let i=0;i<=10;i++){
    console.log(i);
}

//while loop
let i=0;
while(i<=10) {
    console.log(i);
    i++;
}

//for loop for todos
for(let i=0;i<=todos.length;i++){
    console.log(i);
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.id);
}

//for each,map,filter
todos.forEach(function(todo){
    console.log(todo.text);
});


