//below is something like a Class in java. This Variable is equivalent with a Java Class
//It will have properties functions etc.

//THIS IS A JSON FILE WHICH IS HAVING PROPERTIES SEPARATED BY ,
window.ToDoList = {
    API_URL: "http://localhost:8081/to-do-items",
    //if get item is working with success then go with display items
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

            //we use JSON.parse to transform the response which is string into JSON
            ToDoList.displayItems(JSON.parse(response));
        });
    },

    //we generate HTML Code to generate a table for the item list
    displayItems: function (items) {
        var tableContent = '';

        //we take each item
        items.forEach(item => tableContent += ToDoList.getItemTableRow(item));

        // We inject HTML into tbody
        $("#to-do-items tbody").html(tableContent);
    },

    getItemTableRow: function (item) {
        //spread (...)
        var deadline = new Date(...item.deadline).toLocaleDateString("en");

        //ternary operator just for booleans and if else written in very short
        var checkedAttribute = item.done ? "checked" : "";

        return `<tr>
            <td>${item.description}</td>
            <td>${deadline}</td>
            <td><input type="checkbox" class="mark-done" data-id="${item.id}" ${checkedAttribute}/></td>
            <td><a href="#" class="delete_item" data-id="${item.id}><i class="far fa-trash-alt"></i>
            </a></td>
        </tr>`
    }
};

ToDoList.getItems();