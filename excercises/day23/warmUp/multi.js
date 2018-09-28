

let multiTable = '\n';
for (var i = 1; i < 11; i++) {
    for (var q = 1; q < 11; q++) {
        multiTable += (i*q) + ' ';
    }
    multiTable += '\n'
}console.log(multiTable)