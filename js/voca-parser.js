jQuery("#content script").first().text().split('\n').map(function(line){
    return line.match(/wordInput\('(.*)','(.*)',(.*?)\);/);
}).filter(function(match){
    return match !== null;
}).sort(function(a, b){
    return a[1].localeCompare(b[1]);
}).forEach(function(word){
    console.log(word[1] + ': ' + word[2]);
});
