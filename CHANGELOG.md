# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [1.5.3](https://github.com/snowyu/inherits-ex.js/compare/v1.5.2...v1.5.3) (2023-04-11)


### Bug Fixes

* **extend:** can not extends multiple superCtors ([e72e866](https://github.com/snowyu/inherits-ex.js/commit/e72e86669f3538261cc8e4eaf6141f64b4413cb3))
* **ts:** export multi-entries ts declaration files in the same folder ([86e1440](https://github.com/snowyu/inherits-ex.js/commit/86e1440096105c04a89a45e34adda988930bfef6))

### [1.5.2](https://github.com/snowyu/inherits-ex.js/compare/v1.5.1...v1.5.2) (2023-03-30)


### Bug Fixes

* forget to build lib ([7627b9d](https://github.com/snowyu/inherits-ex.js/commit/7627b9d9f877b71fde4a9e2f200e54e55ee1d6ec))

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
