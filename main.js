// 'use strict';
// let input = document.getElementById('input');
// let add = document.getElementById('add');
// let list = document.getElementById('list');

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// function addTask(e){
//     if(input.value === ''){
//         return;
//     }
//     let li = document.createElement("li"); 
//     list.appendChild(li); 

//     let span = document.createElement("span"); 
//     span.textContent = input.value; 
//     li.appendChild(span); 

//     let button = document.createElement("button"); 
//     button.textContent = "削除"; 
//     li.appendChild(button); 

//     button.addEventListener("click", function(e){ 
//         li.remove();
//         tasks = tasks.filter(function(t){
//             return t !== span.textContent;
//         });
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     },false);

//     tasks.push(span.textContent);
//     localStorage.setItem("tasks", JSON.stringify(tasks));

//     input.value = "";
// }

// //ウインドウ更新時
// window.addEventListener("load", function(e){
//     tasks.forEach(function(task){
//         let li = document.createElement("li");
//         list.appendChild(li);

//         let span = document.createElement("span"); 
//         span.textContent = task; 
//         li.appendChild(span); 

//         let button = document.createElement("button"); 
//         button.textContent = "削除"; 
//         li.appendChild(button); 

//         button.addEventListener("click", function(e){ 
//             li.remove();
//             tasks = tasks.filter(function(t){
//                 return t !== span.textContent;
//             });
//             localStorage.setItem("tasks", JSON.stringify(tasks));
//         },false);
//     }, false);
// }, false);

// //追加ボタン押下時
// add.addEventListener("click", function(e){
// addTask();
// } ,false);

// //Enterキー押下時
// input.addEventListener("keydown", function(e){
//     if(e.key === "Enter"){
//         addTask();
//     }
// },false);


//完成コード
'use strict';
let input = document.getElementById('input');
let add = document.getElementById('add');
let list = document.getElementById('list');

// 保存されているtasksを取得（なければ空配列）
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// タスクを画面に表示する関数
function createTaskElement(task){
    let li = document.createElement("li");
    list.appendChild(li);

    let span = document.createElement("span");
    span.textContent = task;
    li.appendChild(span);

    let button = document.createElement("button");
    button.textContent = "削除";
    li.appendChild(button);

    // 削除ボタン
    button.addEventListener("click", function(){
        li.remove();

        // 配列から削除
        tasks = tasks.filter(function(t){
            return t !== task;
        });

        // 保存し直す
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
}

// タスク追加
function addTask(){
    if(input.value === ''){
        return;
    }

    let task = input.value;
    input.value = "";

    createTaskElement(task); // 画面に表示

    tasks.push(task); // 配列に追加
    localStorage.setItem("tasks", JSON.stringify(tasks)); // 保存
}

// ページ読み込み時（保存データを表示）
window.addEventListener("load", function(){
    tasks.forEach(function(task){
        createTaskElement(task);
    });
});

// 追加ボタン
add.addEventListener("click", function(){
    addTask();
});

// Enterキー
input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});