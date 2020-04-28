const fs = require("fs");

fs.exists("input.txt", (exists, err) => {
    if (err) throw err;
    if (exists) {
        fs.readFile("input.txt", "utf-8", (err, data) => {
            if (err) throw err;
            var names = data.split("\n"),
                shortest = 0,
                longest = 0,
                longestName = "",
                shortestName = "";
            for (var i = 0; i < names.length; i++) {
                var name = names[i];
                var nameLength = name.split("").length;
                console.log("----------");
                console.log("Name: " + name);
                console.log("Length: " + nameLength);
                if (i == 0 || nameLength < shortest) {
                    //First time looping or shorter than the last one
                    shortest = nameLength;
                    shortestName = name;
                }

                if (nameLength > longest) {
                    longest = nameLength;
                    longestName = name;
                }
            }
            console.log("----------------------");
            console.log(`Longest Name: ${longestName} (${longest})`);
            console.log(`Shortest Name: ${shortestName} (${shortest})`);
        })
    }
});