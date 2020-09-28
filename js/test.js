document.getElementsByID("createButton").addEventListener("click", function() {
        console.log("Button clicked");
        var para = document.createElement("p");
        var node = document.createTextNode("This is a test");
        para.appendChild(node);

        var element = document.getElementsByID("div1");
        element.appendChild(para);
    });
