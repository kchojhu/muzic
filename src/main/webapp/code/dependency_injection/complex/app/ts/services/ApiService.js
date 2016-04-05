System.register([], function(exports_1) {
    var ApiService;
    return {
        setters:[],
        execute: function() {
            ApiService = (function () {
                function ApiService() {
                }
                ApiService.prototype.get = function () {
                    console.log('Getting resource...');
                };
                return ApiService;
            })();
            exports_1("ApiService", ApiService);
        }
    }
});
//# sourceMappingURL=ApiService.js.map