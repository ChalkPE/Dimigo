function Stream(items){
    this.items = items;
    this.works = [];
}

Stream.prototype = {
    get: function(i){
        var item = this.items[i];
        if(item === undefined) return undefined;
        for(var w = 0; w < this.works.length; w++){
            var wItem = this.works[w](item);
            if(wItem === undefined) return undefined;
            item = wItem;
        }
        return item;
    },
    forEach: function(f){
        for(var i = 0; i < this.items.length; i++){
            var item = this.get(i);
            if(item !== undefined && f(item) === true) return;
        }
    },
    toArray: function(){
        var array = [];
        this.forEach(function(item){ array.push(item); });
        return array;
    },
    count: function(){
        var count = 0;
        this.forEach(function(item){ count++; });
        return count;
    }
};