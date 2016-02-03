# Yugioh cards

## Installation

1) install nodejs  
  https://nodejs.org/en/
  

2) install bower globally

 ```javascript
 	$npm install -g bower
  ```

3) install  npm packages

 ```javascript
 	$npm install
  ```	 

4) install bower components  
	 
  ```javascript
    $cd ./src
  	$bower install
  ```	 
 
5) install node http server

 ```javascript
 	$npm install http-server -g
 ```

6) run http server

 ```javascript
    $cd ./src/client
 	$http-server
 ```

7) Use your browser  

    In your browser, run http://localhost:8080 

## Development Notes

In the central initial pane, two main areas are used. The menu area and the main pane.
The menu area is an angular Directive that communicates with the central pane through a service,
which sends the card name. Then a controller (demo controller) uses this card name and calls the card data service and
card image service to make http calls to the server api.
The responses are presented in the demoView.html.

Note 1) CORS issues may be met by the browser. (use F12 for debug)

Note2) config folder is a demo one, do not bother testing it