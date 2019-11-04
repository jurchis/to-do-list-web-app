//below is something like a Class in java. This Variable is equivalent with a Java Class
//It will have properties functions etc.

window.ToDoList = {
    API_URL: "http://localhost:8081/to-do-items",
    getItems: function () {

        //    We'll use JQuery here to simplify our work
        //    To add .ajax library we create a new directory in js with a file that contains the code for jquery
        //    https://jquery.com/download/ we select compressed option

        $.ajax({
            url: ToDoList.API_URL,
            //Below method is optional it might be given by default
            method: "GET"
        }).done(function (response) {
            console.log("GET done");
            console.log(response);
        });
    }
};

ToDoList.getItems();