function registerEvents(){
    document.getElementById("loadeUser").addEventListener("click", function(){
        loadeUser();
    })
    document.getElementById("loadeTodo").addEventListener("click", function(){
        loadeTodo();
    })
}

function loadeTodo(){
    fetch('https://jsonplaceholder.typicode.com/todos').then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
    // This is the JSON from our response
    let html ="";
    data.forEach(todo => {
        html +="<li>" + todo.title + "</li>";
        
    });
    document.getElementById("list").innerHTML = html;
    


}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
}

function loadeUser(){
    fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
    // This is the JSON from our response
    let html ="";
    data.forEach(user => {
        html +="<li>" + user.name + "</li>";
       
    });
    document.getElementById("list").innerHTML = html;
    


}).catch(function (err) {
	// There was an error 
	console.warn('Something went wrong.', err);
});
}

registerEvents();