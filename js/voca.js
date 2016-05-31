var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

setTimeout(function(){
    jQuery.noConflict();
    console.log('jQuery loaded');
}, 2048);

jQuery("#content script").first().text().split('\n').map(function(line){
    return line.match(/wordInput\('(.*)','(.*)',(.*?)\);/);
}).filter(function(match){
    return match !== null;
}).sort(function(a, b){
    return a[1].localeCompare(b[1]);
}).forEach(function(word){
    console.log(word[1] + ': ' + word[2]);
});
