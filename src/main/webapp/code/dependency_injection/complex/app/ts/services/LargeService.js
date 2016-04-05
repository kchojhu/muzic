System.register([], function(exports_1) {
    var LargeService;
    return {
        setters:[],
        execute: function() {
            LargeService = (function () {
                function LargeService() {
                }
                LargeService.prototype.run = function () {
                    console.log('Large service...');
                };
                return LargeService;
            })();
            exports_1("LargeService", LargeService);
        }
    }
});
//# sourceMappingURL=LargeService.js.map