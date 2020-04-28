//Require the use of the file system for reading files.
const fs = require("fs");

//check if the input file exists
fs.exists("input.txt", (exists, err) => {
    if (err) throw err;
    if (exists) {
        //read the input file
        fs.readFile("input.txt", "utf-8", (err, data) => {
            if (err) throw err;
            //varables that will be used in the loop
            var names = data.split("\n"),
                shortest = 0,
                longest = 0,
                longestName = "",
                shortestName = "";
            //Loop through each name
            for (var i = 0; i < names.length; i++) {
                //get the name from the array
                var name = names[i];
                //split the name by each charactor into an array then count how many items are in the array minus one due to CRLF endings in Windows 10 :p
                var nameLength = name.split("").length;
                //Output data to the console
                console.log("----------");
                console.log("Name: " + name);
                //Subtract one due to CRLF endings
                console.log("Length: " + (nameLength - 1));
                if (i == 0 || nameLength < shortest) {
                    //First time looping or shorter than the last one
                    shortest = nameLength;
                    shortestName = name;
                }

                if (nameLength > longest) {
                    //if the current name is longer than the longest on record, replace it
                    longest = nameLength;
                    longestName = name;
                }
            }
            console.log("========================================================");
            console.log("========================================================");
            console.log(`Longest Name: ${longestName}`);
            //Subtract one due to CRLF endings
            console.log("Length: " + (longest - 1));
            console.log("========================================================");
            console.log("========================================================");
            console.log(`Shortest Name: ${shortestName}`);
            //Subtract one due to CRLF endings
            console.log("Length: " + (shortest - 1));
        })
    }
});