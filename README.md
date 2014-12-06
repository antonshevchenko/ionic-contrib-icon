ionic-contrib-icon
==================

_Automatically generates platform-dependent icons for Ionic apps._

## Install

First install the dependency using either Bower or NPM.

### Bower

```shell
$ bower install ionic-contrib-icon
```

### NPM

```shell
$ npm install ionic-contrib-icon
```

Include the `ionic.contrib.icon` module in your app's configuration:

```javascript
angular.module('app', ['ionic', 'ionic.contrib.icon'])
```

Use the `icon` directive with Ionicons:

```html
<icon
    ios="ion-ios-heart"
    droid="ion-android-favorite"
    default="ion-heart">
</icon>
```

## Releases

- 0.0.2 __(TBA)__:
    - Added support for other icon libraries (such as Font-Awesome)
    - Minor bug fixes
- 0.0.1 __(12/06/14)__:
    - Initial implementation of `icon` directive
