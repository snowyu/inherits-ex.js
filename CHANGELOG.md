# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [2.1.0-alpha.8](https://github.com/snowyu/inherits-ex.js/compare/v2.1.0-alpha.7...v2.1.0-alpha.8) (2023-04-18)


### Features

* **_clone:** extract the cloneCtor and clonePrototype functions from mixin.js ([d144ef4](https://github.com/snowyu/inherits-ex.js/commit/d144ef44f7b042bcea50595ee2d2fcb504387dc9))


### Bug Fixes

* **_clone:** clone attributes with descriptor ([289ac9b](https://github.com/snowyu/inherits-ex.js/commit/289ac9b1413a04d36a42f598304a6ecb223a740d))

## [2.1.0-alpha.7](https://github.com/snowyu/inherits-ex.js/compare/v2.1.0-alpha.6...v2.1.0-alpha.7) (2023-04-17)


### Features

* add getClosestCommonAncestorCtor and getRootCtor functions ([285aee2](https://github.com/snowyu/inherits-ex.js/commit/285aee271b6dbb1550176dfbdbcd266ba4891ba3))


### Bug Fixes

* **inherits:** The superCtor's root will be inherited from the ctor's parent class if the ctor has already inherited from others ([bcdffd4](https://github.com/snowyu/inherits-ex.js/commit/bcdffd41d96f19813d35552b63b8d740df22d967))

## [2.1.0-alpha.6](https://github.com/snowyu/inherits-ex.js/compare/v2.1.0-alpha.5...v2.1.0-alpha.6) (2023-04-12)


### Bug Fixes

* **_extend:** should only extend exists source ([d037817](https://github.com/snowyu/inherits-ex.js/commit/d03781756cd1d6877d6090ef56e81aa4da3d1ab2))

## [2.1.0-alpha.5](https://github.com/snowyu/inherits-ex.js/compare/v2.1.0-alpha.4...v2.1.0-alpha.5) (2023-04-11)


### Bug Fixes

* **ts:** typescript declaration errors ([716ae31](https://github.com/snowyu/inherits-ex.js/commit/716ae3114bcdbeea9375ca145fcba1fd3b9047b7))

## [2.1.0-alpha.4](https://github.com/snowyu/inherits-ex.js/compare/v2.1.0-alpha.3...v2.1.0-alpha.4) (2023-04-11)


### Bug Fixes

* **extend:** Can not extend multiple superCtors and the ctor should not be changed on prototype. ([e4a89d6](https://github.com/snowyu/inherits-ex.js/commit/e4a89d649f6c0ff41c6ae65964dcaa07cdc40fac))


### Refactor

* **_extend:** use defineProperties and getOwnPropertyDescriptors to extend objects ([ca60a08](https://github.com/snowyu/inherits-ex.js/commit/ca60a08fc02d24ce1944149c1b951fd84338f064))

## [2.1.0-alpha.3](https://github.com/snowyu/inherits-ex.js/compare/v2.1.0-alpha.2...v2.1.0-alpha.3) (2023-04-08)


### Bug Fixes

* minor changes to avoid transpiler bug ([cbe5d6f](https://github.com/snowyu/inherits-ex.js/commit/cbe5d6fa67369f11851d5924ada55ba49ec04c4f))

## [2.1.0-alpha.2](https://github.com/snowyu/inherits-ex.js/compare/v2.1.0-alpha.1...v2.1.0-alpha.2) (2023-04-07)


### Features

* export all functions on index.js ([43098fd](https://github.com/snowyu/inherits-ex.js/commit/43098fd5102b5e02d369135d379ef179248315b7))


### Bug Fixes

* the optional arguments for ts declarations ([c27a9d9](https://github.com/snowyu/inherits-ex.js/commit/c27a9d9c819c099e69f7d6e4bfb52b628e94d785))
* **ts:** put the ts delcaration files into same lib folder ([4691f9d](https://github.com/snowyu/inherits-ex.js/commit/4691f9dee009488c958305a2d023c75ff1567a12))

## [2.1.0-alpha.1](https://github.com/snowyu/inherits-ex.js/compare/v2.1.0-alpha.0...v2.1.0-alpha.1) (2023-04-07)


### Bug Fixes

* module not found error ([0f004d0](https://github.com/snowyu/inherits-ex.js/commit/0f004d08a44d2d3a976d102326d24a031deb68a0))

## [2.1.0-alpha.0](https://github.com/snowyu/inherits-ex.js/compare/v1.4.0...v2.1.0-alpha.0) (2023-03-28)


### Features

* add _clone function ([22fa8d7](https://github.com/snowyu/inherits-ex.js/commit/22fa8d7326dbca5de0f1f23e8d490fd26feba197))
* add getOwnPropValue func ([e14b8da](https://github.com/snowyu/inherits-ex.js/commit/e14b8da62a21ab29816d9a417b63756f4282c353))
* add getSuperCtor function ([6b75e8f](https://github.com/snowyu/inherits-ex.js/commit/6b75e8fb6087bbe57aca6cc5a3a7eaea58893797))
* getParentClass can get instance or ctor's parent class now ([2b34ce0](https://github.com/snowyu/inherits-ex.js/commit/2b34ce0936caaca88f5b5e141f3eccacffe7abab))


### Bug Fixes

* **createObjectWith:** the aArguments parameter should be optional ([f17b1ca](https://github.com/snowyu/inherits-ex.js/commit/f17b1ca1e833d4778510e939b280c5e2526ea4fe))
* **getConstructor:** use getSuperCtor instead of ctor object chain ([ee70d92](https://github.com/snowyu/inherits-ex.js/commit/ee70d92563c5c6b21077a03f15ed541e2181e67e))
* **getSuper:** can be used on any parent class now ([4521e09](https://github.com/snowyu/inherits-ex.js/commit/4521e09a9026516b52724ee13927938b5a1ff095))
* ignore Class and constructor properties from ctor's prototype ([6221396](https://github.com/snowyu/inherits-ex.js/commit/62213965347f4f51a18f1470cd5d73ad308d222a))
* **inheritsDirectly:** the instanceOf error for dynamic inheritance ([da3d17e](https://github.com/snowyu/inherits-ex.js/commit/da3d17eb30801eb2119a74b1a2959250e0d17f80))
* minor adjust ([d2150cf](https://github.com/snowyu/inherits-ex.js/commit/d2150cf83eb28a8229ffd762a62de13c903b0c52))
* **mixin:** use the getSuperCtor instead of ctor object chain ([70a34ab](https://github.com/snowyu/inherits-ex.js/commit/70a34ab024a6d215f66295ccd570cf03964a7916))
* use prototype chain now to get protoChain ([fd206a9](https://github.com/snowyu/inherits-ex.js/commit/fd206a9c18b794dae2410a1f95ae7986403c51ec))
* use the prototype chain instead of ctor chain in case no static inheritance ([f6711a1](https://github.com/snowyu/inherits-ex.js/commit/f6711a10eebb1d5b6a75344f89cba56319a3e6ca))

## [1.4.0](https://github.com/snowyu/inherits-ex.js/compare/v1.3.6...v1.4.0) (2023-03-24)


### Features

* add addClass static function to InheritsEx ([720ab77](https://github.com/snowyu/inherits-ex.js/commit/720ab776f86a710f7815d405077c89dad210831b))
* add getParentClass function ([f1fc666](https://github.com/snowyu/inherits-ex.js/commit/f1fc666ba43d0e03ba879b2b1ab9ec156a58b446))


### Bug Fixes

* duplicate the function name error ([10d19ea](https://github.com/snowyu/inherits-ex.js/commit/10d19ea2ca016a3c498078cf4dbe935b610b5a19))
