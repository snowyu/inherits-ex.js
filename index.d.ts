declare namespace inheritsEx {
  type TScope = {[key: string]: any};
  type TScopeParam  = Array<string> | TScope;
  type TValuesParam = Array<any>;
  class InheritsEx {
    static requireClass(aClassName: string, aScope?: TScopeParam, aValues?: TValuesParam): Function;
    static scope: TScope = {};
    static setScope(aScope: TScopeParam);
    static getClass(aClassName, aScope?: TScopeParam, aValues?: TValuesParam): Function;
    static execute(ctor: any, superCtors: any, aScope?: TScopeParam, aValues?: TValuesParam): Function;
    constructor(aDefaultRequire?: Function);
  }
}

declare module "inherits-ex" {
    export = inheritsEx;
}
