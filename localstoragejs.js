(function(global){
    if(!$.cookie) throw "Please include jQuery cookie before this script.";
    
    var _storage = global.storage = global.storage || {};
    var _method = Modernizr.localstorage ? "localstorage" : "cookie";
    
    _storage.get = function(key){
        if(_method === "localstorage") return localStorage.getItem(key);
    	if(_method === "cookie") return $.cookie(key);
    }
    
    _storage.set = function(key, value){
        if(_method === "localstorage") return localStorage.setItem(key, value);
        if(_method === "cookie") return $.cookie(key, value);
    }
})(window);
