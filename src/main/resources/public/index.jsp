<!doctype html>
<html>
  <head>
    <title>First App - Hello world</title>
    <!-- Libraries -->
    <script src="es6-shim/es6-shim.js"></script>
    <script src="angular2/bundles/angular2-polyfills.js"></script>
    <script src="systemjs/dist/system.src.js"></script>
    <script src="rxjs/bundles/Rx.js"></script>
    <script src="angular2/bundles/angular2.dev.js"></script>

    <!-- Stylesheet -->
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
    <script>
    var d = new Date();
    var n = d.getTime(); 
      System.config({
        packages: {        
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
      });
      System.import('app/App.js?d=' + n)
            .then(null, console.error.bind(console));
    </script>
No!!123
    <hello-world></hello-world>

  </body>
</html>
