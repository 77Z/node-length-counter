const fs = require("fs");

fs.exists("input.txt", (exists, err) => {
    if (err) throw err;
    if (exists) {
        fs.readFile("input.txt", "utf-8", (err, data) => {
            if (err) throw err;
            var names = data.split("\n");
            for (var i = 0; i < names.length; i++) {
                var name = names[i];
                var nameLength = name.split("").length;
                console.log("----------");
                console.log("Name: " + name);
                console.log("Length: " + nameLength);
            }
        })
    }
});