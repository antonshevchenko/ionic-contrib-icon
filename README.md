ionic-contrib-icon
==================

_Automatically display platform-specific icons._

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

Include the `ionic.contrib.icon` module in your app's dependencies:

```javascript
angular.module('app', ['ionic', 'ionic.contrib.icon'])
```

Use the `icon` directive:

```html
<icon
    ios="ion-ios-heart"
    ipad="ion-ios-heart-outline"
    android="ion-android-favorite"
    windows="ion-heart-broken"
    default="ion-heart">
</icon>
```

## Advanced Usage

### Integration with Other Icon Libraries

You can make use of other popular icon libraries such as [Font Awesome](https://fortawesome.github.io/Font-Awesome/) by defining the `type` option in the `$ionicIconConfig` constant:

```javascript
app.constant('$ionicIconConfig', {
    type: 'fa'
});
```

_* Note: The icon type corresponds to the appropriate library's icon CSS class. For Font Awesome, it is `fa`, while for Ionicons it is `icon`._

### Define Icon Mappings

You can map default icons for each platform by defining the `map` option in the `$ionicIconConfig` constant. For instance, you can map the corresponding iOS and Android icon alternatives for the default `ion-heart` Ionicon:

```javascript
app.constant('$ionicIconConfig', {
    type: 'icon',
    map: {
        'ion-heart': {
            ios: 'ion-ios-heart',
            android: 'ion-android-heart'
        }
    }
})
```

And then simply use the icon directive without having to add the `ios` and `android` attributes:

```html
<icon default="ion-heart"></icon>
```

### Special Cases

For any special cases, we support adding custom classes for specific icons by providing the `class` attribute:

```html
<icon class="icon-xl" default="ion-home"></icon>
```

The directive also overrides any defaults when you explictly define icons for specific platforms.

## Releases

- 0.0.3 __(12/07/14)__:
    - Addition of iPad and Windows Phone platforms
- 0.0.2 __(12/06/14)__:
    - Added support for other icon libraries (such as Font Awesome)
    - Added `$ionicIconConfig` constant to pass options
    - Can use icon mapping to define which icons get displayed by default for each platform
    - Minor bug fixes
- 0.0.1 __(12/06/14)__:
    - Initial implementation of `icon` directive
