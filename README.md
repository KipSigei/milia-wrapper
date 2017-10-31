# milia-wrapper

Compiles [Milia](https://github.com/onaio/milia#milia) for use in Javascript applications. Milia-wrapper written in [Clojurescript](https://github.com/clojure/clojurescript) to encapsulate functions from [Milia](https://github.com/onaio/milia#milia) and CLJS core libraries for use in Javascript.

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

The output file is `../dist/assets/wrappers.js`


## Usage

1. Add the compiled script to page

```html
	<script src="./wrappers.js"></script>
```

2.  Call wrapper functions in JS code

```javascript
const protocol = 'https';
const host = 'api.ona.io';

export default function (_self, datasetID, fieldName, callback) {
  const queryParams =
    { fields:
    `${'["defualtField1",' +
    '"defualtField2",' +
    '"defualtField3",' +
    '"'}${fieldName}"]` };

  wrappers.milia.set_host(<protocol>, <host<>);
  wrappers.milia.get_form_data(<datasetID>, <queryParams>, <callback>);
```