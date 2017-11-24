
# Milia-wrapper

Javascript wrapper for  Ona API client library [Milia](https://github.com/onaio/milia#milia) for use in JS & NodeJS applications.

## Compiling

Development:
```
$ lein cljsbuild once dev
```

Use the `auto` to detect changes and trigger compilation during development.
```
$ lein cljsbuild auto dev
```


Production:

```
$ lein cljsbuild once prod
```

The output file is `./dist/milia-wrapper.js`


## Usage

-  Usage in scripts

```html
<script src="./milia-wrappers.js"></script>
```


```javascript

var protocol = 'https';
var host = 'api.ona.io';
var datasetID = 101;
const queryParams = { fields: `${'["defualtField1",' +
                                                        '"defualtField2",'+'"'}${fieldName}"]`};
var callback = function(response) {
                             console.log(response)
                         }

 milia.wrapper.set_host(protocol, host);
 milia.wrapper.get_form_data(datasetID, queryParams, callback);
```

- Usage as node module

```
$ npm install milia-wrapper
```


```javascript
import * as milia from 'milia-wrapper';

var protocol = 'https';
var host = 'api.ona.io';
var datasetID = 101;
const queryParams = { fields: `${'["defualtField1",' +
                                                        '"defualtField2",'+'"'}${fieldName}"]`};
var callback = function(response) {
                             console.log(response)
                         }

 milia.wrapper.set_host(protocol, host);
 milia.wrapper.get_form_data(datasetID, queryParams, callback);
```
