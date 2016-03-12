function Stream(items){
    this.items = items;
    this.works = [];
}

Stream.prototype = {
    __get: function(i){
        var item = this.items[i];
        if(item === undefined) return;

        for(var w = 0; w < this.works.length; w++){
            var result = this.works[w](item);
            if(result === undefined) return;
            item = result;
        }
        return item;
    },
    forEach: function(f){
        for(var i = 0; i < this.items.length; i++){
            var item = this.__get(i);
            if(item !== undefined && f(item) === true) break;
        }
    },
    toArray: function(){
        var array = [];
        this.forEach(item => array.push(item));
        return array;
    },
    count: function(){
        var count = 0;
        this.forEach(item => count++);
        return count;
    },
    filter: function(f){
        this.works.push(item => { if(f(item)) return item; });
        return this;
    },
    map: function(f){
        this.works.push(f);
        return this;
    },
    peek: function(f){
        this.map(item => { f(item); return item; });
        return this;
    },
    allMatch: function(f){
        var allMatch = true;
        this.forEach(item => { if(!f(item)) return !(allMatch = false); });
        return allMatch;
    },
    anyMatch: function(f){
        var anyMatch = false;
        this.forEach(item => { if(f(item)) return anyMatch = true; });
        return anyMatch;
    },
    noneMatch: function(f){
        return !this.anyMatch(f);
    },
    findFirst: function(f){
        var found;
        this.forEach(item => { if(item === undefined) return; found = item; return true; });
        return found;
    }
};

Stream.of = function(...args){
    return new Stream(args);
};

Stream.empty = new Stream([]);
Object.freeze(Stream.empty);

Stream.prototype.some = Stream.prototype.anyMatch;
Stream.prototype.every = Stream.prototype.allMatch;
Stream.prototype.findAny = Stream.prototype.findFirst;
