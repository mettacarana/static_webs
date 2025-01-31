//Load a book from disk
function loadBook(filename, displayName){
    console.log("test");
    let currentBook = "";
    let url = "books/" + filename;

    //reset our UI
    document.getElementById("fileName").innerHTML = displayName;
    document.getElementById("searchstat").innerHTML = "";
    document.getElementById("keyword").value = "";

    //create a server a request to load our book
    //if they are to be accessed from web server - use http request
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send(); //to initiate network traffic

    // everytime something change about the request, it will fire the below function
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            //0: Unsent, 1: Open, 2: Received headers, 3:Loading the file, 4: Done
            
            currentBook = xhr.responseText;

            document.getElementById("fileContent").innerHTML = currentBook;

            var elmnt = document.getElementById("fileContent");
            elmnt.scrollTop = 0;

        }

    };
}