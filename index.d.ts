declare namespace inheritsEx {
  class InheritsEx {
    type TScope = [string, any];
    type TScopeParam  = Array<string> | TScope;
    type TValuesParam = Array<any>;

    static function requireClass(aClassName: string, aScope?: TScopeParam, aValues?: TValuesParam): Function;
    static scope: TScope = {};
    static function setScope(aScope: TScopeParam);
    static function getClass(aClassName, aScope?: TScopeParam, aValues?: TValuesParam): Function;
    static function execute(ctor: any, superCtors: any, aScope?: TScopeParam, aValues?: TValuesParam): Function;
    constructor(aDefaultRequire?: Function);
  }
}

declare module "inherits-ex" {
    export = inheritsEx;
}