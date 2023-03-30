# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.5.1](https://github.com/snowyu/inherits-ex.js/compare/v1.5.0...v1.5.1) (2023-03-30)


### Bug Fixes

* module not found error ([#11](https://github.com/snowyu/inherits-ex.js/issues/11)) ([10eb557](https://github.com/snowyu/inherits-ex.js/commit/10eb557cb01342e54dcc6960a267e60036715e37))

## [1.5.0](https://github.com/snowyu/inherits-ex.js/compare/v1.4.0...v1.5.0) (2023-03-28)


### Features

* add _clone function ([50fae21](https://github.com/snowyu/inherits-ex.js/commit/50fae213972adbd28287c6eeb702325bbc735545))
* add getOwnPropValue function ([73eec0e](https://github.com/snowyu/inherits-ex.js/commit/73eec0e1b655037aa4fe2140453ccd1a79f105f7))
* add getSuperCtor function ([4138deb](https://github.com/snowyu/inherits-ex.js/commit/4138deb903ae4f7134a09a7d1f17100a10f2d896))
* **getParentClass:** Returns the parent class of a given constructor(class) or object ([284d5f0](https://github.com/snowyu/inherits-ex.js/commit/284d5f02b6a551adb3c6655ce3761846b498e27d))


### Bug Fixes

* **getConstructor:** use prototype chain instead of Ctor(Static) Object chain ([4b6f794](https://github.com/snowyu/inherits-ex.js/commit/4b6f7942791a663c3fda098a842ea53abf9b7666))
* **getProtoChain:** use getSuperCtor instead of Ctor Object chain ([0bba539](https://github.com/snowyu/inherits-ex.js/commit/0bba539e2a29de1df34548bd204c839711a570b9))
* **getSuper:** Critical error causes infinite loop in the parent methods ([ffafb5b](https://github.com/snowyu/inherits-ex.js/commit/ffafb5b08c207f666a97fe55a605e6d251ce6831))
* **inheritsDirectly:** the instanceOf error for dynamic inheritance ([10bf2a2](https://github.com/snowyu/inherits-ex.js/commit/10bf2a2960c54defbf8b2f82aa5855ba839444a4))
* **inherits:** use getSuperCtor instead ctor object chain ([48b7d89](https://github.com/snowyu/inherits-ex.js/commit/48b7d898348bbc362ca782a58b53e09d8abca0a7))
* **isInheritedFrom:** use getSuperCtor instead ctor object chain ([e01c762](https://github.com/snowyu/inherits-ex.js/commit/e01c7629d1cb1f536b7dd28a440af262556f4176))
* **mixin:** use getSuperCtor instead ctor object chain and use extracted _clone function ([4536fee](https://github.com/snowyu/inherits-ex.js/commit/4536feead0fcabc11ad85bdeee91cf2cae1ed83f))
* **newProptotype:** do not copy Class and contructor props and mark it as deprecated ([ea7fcc1](https://github.com/snowyu/inherits-ex.js/commit/ea7fcc1e63987fdf0d7e27d32d6fc3117920dc1b))

## [1.4.0](https://github.com/snowyu/inherits-ex.js/compare/v1.3.6...v1.4.0) (2023-03-24)


### Features

* add addClass static function to InheritsEx ([720ab77](https://github.com/snowyu/inherits-ex.js/commit/720ab776f86a710f7815d405077c89dad210831b))
* add getParentClass function ([f1fc666](https://github.com/snowyu/inherits-ex.js/commit/f1fc666ba43d0e03ba879b2b1ab9ec156a58b446))


### Bug Fixes

* duplicate the function name error ([10d19ea](https://github.com/snowyu/inherits-ex.js/commit/10d19ea2ca016a3c498078cf4dbe935b610b5a19))
