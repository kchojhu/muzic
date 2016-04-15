System.register([], function(exports_1) {
    var SmallService;
    return {
        setters:[],
        execute: function() {
            SmallService = (function () {
                function SmallService() {
                }
                SmallService.prototype.run = function () {
                    console.log('Small service...');
                };
                return SmallService;
            })();
            exports_1("SmallService", SmallService);
        }
    }
});
//# sourceMappingURL=SmallService.js.map