var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i2 = 0; i2 < 10; i2++) {
          test2["_" + String.fromCharCode(i2)] = i2;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
          return test2[n2];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s2 = 1; s2 < arguments.length; s2++) {
        from = Object(arguments[s2]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            if (propIsEnumerable.call(from, symbols[i2])) {
              to[symbols[i2]] = from[symbols[i2]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x2, y2) {
        if (x2 === y2) {
          return x2 !== 0 || 1 / x2 === 1 / y2;
        } else {
          return x2 !== x2 && y2 !== y2;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i2 = 0; i2 < propValue.length; i2++) {
            var error = typeChecker(propValue, i2, componentName, location, propFullName + "[" + i2 + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i2 = 0; i2 < expectedValues.length; i2++) {
            if (is(propValue, expectedValues[i2])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker = arrayOfTypeCheckers[i2];
          if (typeof checker !== "function") {
            printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i2 + ".");
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
            var checker2 = arrayOfTypeCheckers[i3];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/file-selector/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/file-selector/node_modules/tslib/tslib.js"(exports, module) {
    var __extends2;
    var __assign2;
    var __rest3;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter14;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __createBinding2;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v2) {
          return exports2[id] = previous ? previous(id, v2) : v2;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p2))
            d2[p2] = b2[p2];
      };
      __extends2 = function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign2 = Object.assign || function(t2) {
        for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s2 = arguments[i2];
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2))
              t2[p2] = s2[p2];
        }
        return t2;
      };
      __rest3 = function(s2, e2) {
        var t2 = {};
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
            t2[p2] = s2[p2];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
            if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
              t2[p2[i2]] = s2[p2[i2]];
          }
        return t2;
      };
      __decorate2 = function(decorators, target, key, desc) {
        var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r2 = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i2 = decorators.length - 1; i2 >= 0; i2--)
            if (d2 = decorators[i2])
              r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
        return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter14 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t2[0] & 1)
            throw t2[1];
          return t2[1];
        }, trys: [], ops: [] }, f2, y2, t2, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n2) {
          return function(v2) {
            return step([n2, v2]);
          };
        }
        function step(op) {
          if (f2)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
                return t2;
              if (y2 = 0, t2)
                op = [op[0] & 2, t2.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t2 = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y2 = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t2[1]) {
                    _.label = t2[1];
                    t2 = op;
                    break;
                  }
                  if (t2 && _.label < t2[2]) {
                    _.label = t2[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t2[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e2) {
              op = [6, e2];
              y2 = 0;
            } finally {
              f2 = t2 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m, o2) {
        for (var p2 in m)
          if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(o2, p2))
            __createBinding2(o2, m, p2);
      };
      __createBinding2 = Object.create ? function(o2, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o2, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o2, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o2[k2] = m[k];
      };
      __values2 = function(o2) {
        var s2 = typeof Symbol === "function" && Symbol.iterator, m = s2 && o2[s2], i2 = 0;
        if (m)
          return m.call(o2);
        if (o2 && typeof o2.length === "number")
          return {
            next: function() {
              if (o2 && i2 >= o2.length)
                o2 = void 0;
              return { value: o2 && o2[i2++], done: !o2 };
            }
          };
        throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o2, n2) {
        var m = typeof Symbol === "function" && o2[Symbol.iterator];
        if (!m)
          return o2;
        var i2 = m.call(o2), r2, ar = [], e2;
        try {
          while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
            ar.push(r2.value);
        } catch (error) {
          e2 = { error };
        } finally {
          try {
            if (r2 && !r2.done && (m = i2["return"]))
              m.call(i2);
          } finally {
            if (e2)
              throw e2.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
          ar = ar.concat(__read2(arguments[i2]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
          s2 += arguments[i2].length;
        for (var r2 = Array(s2), k = 0, i2 = 0; i2 < il; i2++)
          for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k++)
            r2[k] = a2[j2];
        return r2;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
            if (ar || !(i2 in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i2);
              ar[i2] = from[i2];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await2 = function(v2) {
        return this instanceof __await2 ? (this.v = v2, this) : new __await2(v2);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g2 = generator.apply(thisArg, _arguments || []), i2, q = [];
        return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2;
        function verb(n2) {
          if (g2[n2])
            i2[n2] = function(v2) {
              return new Promise(function(a2, b2) {
                q.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
              });
            };
        }
        function resume(n2, v2) {
          try {
            step(g2[n2](v2));
          } catch (e2) {
            settle(q[0][3], e2);
          }
        }
        function step(r2) {
          r2.value instanceof __await2 ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q[0][2], r2);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f2, v2) {
          if (f2(v2), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o2) {
        var i2, p2;
        return i2 = {}, verb("next"), verb("throw", function(e2) {
          throw e2;
        }), verb("return"), i2[Symbol.iterator] = function() {
          return this;
        }, i2;
        function verb(n2, f2) {
          i2[n2] = o2[n2] ? function(v2) {
            return (p2 = !p2) ? { value: __await2(o2[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
          } : f2;
        }
      };
      __asyncValues2 = function(o2) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o2[Symbol.asyncIterator], i2;
        return m ? m.call(o2) : (o2 = typeof __values2 === "function" ? __values2(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2);
        function verb(n2) {
          i2[n2] = o2[n2] && function(v2) {
            return new Promise(function(resolve, reject) {
              v2 = o2[n2](v2), settle(resolve, reject, v2.done, v2.value);
            });
          };
        }
        function settle(resolve, reject, d2, v2) {
          Promise.resolve(v2).then(function(v3) {
            resolve({ value: v3, done: d2 });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o2, v2) {
        Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
      } : function(o2, v2) {
        o2["default"] = v2;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f2) {
        if (kind === "a" && !f2)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f2) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f2)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest3);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter14);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
    });
  }
});

// node_modules/attr-accept/dist/es/index.js
var require_es = __commonJS({
  "node_modules/attr-accept/dist/es/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = function(file, acceptedFiles) {
      if (file && acceptedFiles) {
        var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
        var fileName = file.name || "";
        var mimeType = (file.type || "").toLowerCase();
        var baseMimeType = mimeType.replace(/\/.*$/, "");
        return acceptedFilesArray.some(function(type) {
          var validType = type.trim().toLowerCase();
          if (validType.charAt(0) === ".") {
            return fileName.toLowerCase().endsWith(validType);
          } else if (validType.endsWith("/*")) {
            return baseMimeType === validType.replace(/\/.*$/, "");
          }
          return mimeType === validType;
        });
      }
      return true;
    };
  }
});

// node_modules/cross-fetch/dist/browser-ponyfill.js
var require_browser_ponyfill = __commonJS({
  "node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
    var global2 = typeof self !== "undefined" ? self : exports;
    var __self__ = function() {
      function F2() {
        this.fetch = false;
        this.DOMException = global2.DOMException;
      }
      F2.prototype = global2;
      return new F2();
    }();
    (function(self2) {
      var irrelevant = function(exports2) {
        var support = {
          searchParams: "URLSearchParams" in self2,
          iterable: "Symbol" in self2 && "iterator" in Symbol,
          blob: "FileReader" in self2 && "Blob" in self2 && function() {
            try {
              new Blob();
              return true;
            } catch (e2) {
              return false;
            }
          }(),
          formData: "FormData" in self2,
          arrayBuffer: "ArrayBuffer" in self2
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name) {
          if (typeof name !== "string") {
            name = String(name);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
            throw new TypeError("Invalid character in header field name");
          }
          return name.toLowerCase();
        }
        function normalizeValue(value) {
          if (typeof value !== "string") {
            value = String(value);
          }
          return value;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift();
              return { done: value === void 0, value };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers(headers) {
          this.map = {};
          if (headers instanceof Headers) {
            headers.forEach(function(value, name) {
              this.append(name, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name) {
              this.append(name, headers[name]);
            }, this);
          }
        }
        Headers.prototype.append = function(name, value) {
          name = normalizeName(name);
          value = normalizeValue(value);
          var oldValue = this.map[name];
          this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name) {
          delete this.map[normalizeName(name)];
        };
        Headers.prototype.get = function(name) {
          name = normalizeName(name);
          return this.has(name) ? this.map[name] : null;
        };
        Headers.prototype.has = function(name) {
          return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers.prototype.set = function(name, value) {
          this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
          for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
              callback.call(thisArg, this.map[name], name, this);
            }
          }
        };
        Headers.prototype.keys = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push(name);
          });
          return iteratorFor(items);
        };
        Headers.prototype.values = function() {
          var items = [];
          this.forEach(function(value) {
            items.push(value);
          });
          return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push([name, value]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        }
        function consumed(body) {
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsText(blob);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars = new Array(view.length);
          for (var i2 = 0; i2 < view.length; i2++) {
            chars[i2] = String.fromCharCode(view[i2]);
          }
          return chars.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this._bodyInit = body;
            if (!body) {
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
            this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) {
                return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
              } else {
                return this.blob().then(readBlobAsArrayBuffer);
              }
            };
          }
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
          options = options || {};
          var body = options.body;
          if (input instanceof Request) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal;
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
        }
        Request.prototype.clone = function() {
          return new Request(this, { body: this._bodyInit });
        };
        function decode(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes) {
            if (bytes) {
              var split = bytes.split("=");
              var name = split.shift().replace(/\+/g, " ");
              var value = split.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
            var parts = line.split(":");
            var key = parts.shift().trim();
            if (key) {
              var value = parts.join(":").trim();
              headers.append(key, value);
            }
          });
          return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = "statusText" in options ? options.statusText : "OK";
          this.headers = new Headers(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
          return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
          });
        };
        Response.error = function() {
          var response = new Response(null, { status: 0, statusText: "" });
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response(null, { status, headers: { location: url } });
        };
        exports2.DOMException = self2.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name) {
            this.message = message;
            this.name = name;
            var error = Error(message);
            this.stack = error.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch2(input, init) {
          return new Promise(function(resolve, reject) {
            var request = new Request(input, init);
            if (request.signal && request.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              resolve(new Response(body, options));
            };
            xhr.onerror = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.ontimeout = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.onabort = function() {
              reject(new exports2.DOMException("Aborted", "AbortError"));
            };
            xhr.open(request.method, request.url, true);
            if (request.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr && support.blob) {
              xhr.responseType = "blob";
            }
            request.headers.forEach(function(value, name) {
              xhr.setRequestHeader(name, value);
            });
            if (request.signal) {
              request.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
          });
        }
        fetch2.polyfill = true;
        if (!self2.fetch) {
          self2.fetch = fetch2;
          self2.Headers = Headers;
          self2.Request = Request;
          self2.Response = Response;
        }
        exports2.Headers = Headers;
        exports2.Request = Request;
        exports2.Response = Response;
        exports2.fetch = fetch2;
        Object.defineProperty(exports2, "__esModule", { value: true });
        return exports2;
      }({});
    })(__self__);
    __self__.fetch.ponyfill = true;
    delete __self__.fetch.polyfill;
    var ctx = __self__;
    exports = ctx.fetch;
    exports.default = ctx.fetch;
    exports.fetch = ctx.fetch;
    exports.Headers = ctx.Headers;
    exports.Request = ctx.Request;
    exports.Response = ctx.Response;
    module.exports = exports;
  }
});

// node_modules/es5-ext/global.js
var require_global = __commonJS({
  "node_modules/es5-ext/global.js"(exports, module) {
    var naiveFallback = function() {
      if (typeof self === "object" && self)
        return self;
      if (typeof window === "object" && window)
        return window;
      throw new Error("Unable to resolve global `this`");
    };
    module.exports = function() {
      if (this)
        return this;
      if (typeof globalThis === "object" && globalThis)
        return globalThis;
      try {
        Object.defineProperty(Object.prototype, "__global__", {
          get: function() {
            return this;
          },
          configurable: true
        });
      } catch (error) {
        return naiveFallback();
      }
      try {
        if (!__global__)
          return naiveFallback();
        return __global__;
      } finally {
        delete Object.prototype.__global__;
      }
    }();
  }
});

// node_modules/websocket/package.json
var require_package = __commonJS({
  "node_modules/websocket/package.json"(exports, module) {
    module.exports = {
      name: "websocket",
      description: "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
      keywords: [
        "websocket",
        "websockets",
        "socket",
        "networking",
        "comet",
        "push",
        "RFC-6455",
        "realtime",
        "server",
        "client"
      ],
      author: "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
      contributors: [
        "I\xF1aki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"
      ],
      version: "1.0.34",
      repository: {
        type: "git",
        url: "https://github.com/theturtle32/WebSocket-Node.git"
      },
      homepage: "https://github.com/theturtle32/WebSocket-Node",
      engines: {
        node: ">=4.0.0"
      },
      dependencies: {
        bufferutil: "^4.0.1",
        debug: "^2.2.0",
        "es5-ext": "^0.10.50",
        "typedarray-to-buffer": "^3.1.5",
        "utf-8-validate": "^5.0.2",
        yaeti: "^0.0.6"
      },
      devDependencies: {
        "buffer-equal": "^1.0.0",
        gulp: "^4.0.2",
        "gulp-jshint": "^2.0.4",
        "jshint-stylish": "^2.2.1",
        jshint: "^2.0.0",
        tape: "^4.9.1"
      },
      config: {
        verbose: false
      },
      scripts: {
        test: "tape test/unit/*.js",
        gulp: "gulp"
      },
      main: "index",
      directories: {
        lib: "./lib"
      },
      browser: "lib/browser.js",
      license: "Apache-2.0"
    };
  }
});

// node_modules/websocket/lib/version.js
var require_version = __commonJS({
  "node_modules/websocket/lib/version.js"(exports, module) {
    module.exports = require_package().version;
  }
});

// node_modules/websocket/lib/browser.js
var require_browser = __commonJS({
  "node_modules/websocket/lib/browser.js"(exports, module) {
    var _globalThis;
    if (typeof globalThis === "object") {
      _globalThis = globalThis;
    } else {
      try {
        _globalThis = require_global();
      } catch (error) {
      } finally {
        if (!_globalThis && typeof window !== "undefined") {
          _globalThis = window;
        }
        if (!_globalThis) {
          throw new Error("Could not determine global this");
        }
      }
    }
    var NativeWebSocket = _globalThis.WebSocket || _globalThis.MozWebSocket;
    var websocket_version = require_version();
    function W3CWebSocket(uri, protocols) {
      var native_instance;
      if (protocols) {
        native_instance = new NativeWebSocket(uri, protocols);
      } else {
        native_instance = new NativeWebSocket(uri);
      }
      return native_instance;
    }
    if (NativeWebSocket) {
      ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function(prop) {
        Object.defineProperty(W3CWebSocket, prop, {
          get: function() {
            return NativeWebSocket[prop];
          }
        });
      });
    }
    module.exports = {
      "w3cwebsocket": NativeWebSocket ? W3CWebSocket : null,
      "version": websocket_version
    };
  }
});

// src/index.tsx
import { Button } from "./Button.js";
import { Battery } from "./Battery.js";
import { MotionButton } from "./MotionButton.js";
import {
  LiveblocksProvider,
  useOthers,
  useMyPresence,
  RoomProvider
} from "./Provider.js";

// node_modules/@liveblocks/client/lib/esm/live.js
var ServerMessageType;
(function(ServerMessageType2) {
  ServerMessageType2[ServerMessageType2["UpdatePresence"] = 100] = "UpdatePresence";
  ServerMessageType2[ServerMessageType2["UserJoined"] = 101] = "UserJoined";
  ServerMessageType2[ServerMessageType2["UserLeft"] = 102] = "UserLeft";
  ServerMessageType2[ServerMessageType2["Event"] = 103] = "Event";
  ServerMessageType2[ServerMessageType2["RoomState"] = 104] = "RoomState";
  ServerMessageType2[ServerMessageType2["InitialStorageState"] = 200] = "InitialStorageState";
  ServerMessageType2[ServerMessageType2["UpdateStorage"] = 201] = "UpdateStorage";
})(ServerMessageType || (ServerMessageType = {}));
var ClientMessageType;
(function(ClientMessageType2) {
  ClientMessageType2[ClientMessageType2["UpdatePresence"] = 100] = "UpdatePresence";
  ClientMessageType2[ClientMessageType2["ClientEvent"] = 103] = "ClientEvent";
  ClientMessageType2[ClientMessageType2["FetchStorage"] = 200] = "FetchStorage";
  ClientMessageType2[ClientMessageType2["UpdateStorage"] = 201] = "UpdateStorage";
})(ClientMessageType || (ClientMessageType = {}));
var CrdtType;
(function(CrdtType2) {
  CrdtType2[CrdtType2["Record"] = 0] = "Record";
  CrdtType2[CrdtType2["List"] = 1] = "List";
  CrdtType2[CrdtType2["Register"] = 2] = "Register";
})(CrdtType || (CrdtType = {}));
var OpType;
(function(OpType2) {
  OpType2[OpType2["Init"] = 100] = "Init";
  OpType2[OpType2["ListInsert"] = 200] = "ListInsert";
  OpType2[OpType2["ListMove"] = 201] = "ListMove";
  OpType2[OpType2["ListRemove"] = 202] = "ListRemove";
  OpType2[OpType2["RecordUpdate"] = 300] = "RecordUpdate";
})(OpType || (OpType = {}));
var WebsocketCloseCodes;
(function(WebsocketCloseCodes2) {
  WebsocketCloseCodes2[WebsocketCloseCodes2["CLOSE_ABNORMAL"] = 1006] = "CLOSE_ABNORMAL";
  WebsocketCloseCodes2[WebsocketCloseCodes2["INVALID_MESSAGE_FORMAT"] = 4e3] = "INVALID_MESSAGE_FORMAT";
  WebsocketCloseCodes2[WebsocketCloseCodes2["NOT_ALLOWED"] = 4001] = "NOT_ALLOWED";
  WebsocketCloseCodes2[WebsocketCloseCodes2["MAX_NUMBER_OF_MESSAGES_PER_SECONDS"] = 4002] = "MAX_NUMBER_OF_MESSAGES_PER_SECONDS";
  WebsocketCloseCodes2[WebsocketCloseCodes2["MAX_NUMBER_OF_CONCURRENT_CONNECTIONS"] = 4003] = "MAX_NUMBER_OF_CONCURRENT_CONNECTIONS";
  WebsocketCloseCodes2[WebsocketCloseCodes2["MAX_NUMBER_OF_MESSAGES_PER_DAY_PER_APP"] = 4004] = "MAX_NUMBER_OF_MESSAGES_PER_DAY_PER_APP";
  WebsocketCloseCodes2[WebsocketCloseCodes2["MAX_NUMBER_OF_CONCURRENT_CONNECTIONS_PER_ROOM"] = 4005] = "MAX_NUMBER_OF_CONCURRENT_CONNECTIONS_PER_ROOM";
})(WebsocketCloseCodes || (WebsocketCloseCodes = {}));

// node_modules/@liveblocks/client/lib/esm/position.js
var min = 32;
var max = 127;
function makePosition(before, after) {
  if (before == null && after == null) {
    return pos([min + 1]);
  }
  if (before != null && after == null) {
    return getNextPosition(before);
  }
  if (before == null && after != null) {
    return getPreviousPosition(after);
  }
  return pos(makePositionFromCodes(posCodes(before), posCodes(after)));
}
function getPreviousPosition(after) {
  const result = [];
  const afterCodes = posCodes(after);
  for (let i2 = 0; i2 < afterCodes.length; i2++) {
    const code = afterCodes[i2];
    if (code <= min + 1) {
      result.push(min);
      if (afterCodes.length - 1 === i2) {
        result.push(max - 1);
        break;
      }
    } else {
      result.push(code - 1);
      break;
    }
  }
  return pos(result);
}
function getNextPosition(before) {
  const result = [];
  const beforeCodes = posCodes(before);
  for (let i2 = 0; i2 < beforeCodes.length; i2++) {
    const code = beforeCodes[i2];
    if (code === max - 1) {
      result.push(code);
      if (beforeCodes.length - 1 === i2) {
        result.push(min + 1);
        break;
      }
    } else {
      result.push(code + 1);
      break;
    }
  }
  return pos(result);
}
function makePositionFromCodes(before, after) {
  let index = 0;
  const result = [];
  while (true) {
    const beforeDigit = before[index] || min;
    const afterDigit = after[index] || max;
    if (beforeDigit > afterDigit) {
      throw new Error(`Impossible to generate position between ${before} and ${after}`);
    }
    if (beforeDigit === afterDigit) {
      result.push(beforeDigit);
      index++;
      continue;
    }
    if (afterDigit - beforeDigit === 1) {
      result.push(beforeDigit);
      result.push(...makePositionFromCodes(before.slice(index + 1), []));
      break;
    }
    const mid = beforeDigit + Math.floor((afterDigit - beforeDigit) / 2);
    result.push(mid);
    break;
  }
  return result;
}
function posCodes(str) {
  const codes = [];
  for (let i2 = 0; i2 < str.length; i2++) {
    codes.push(str.charCodeAt(i2));
  }
  return codes;
}
function pos(codes) {
  return String.fromCharCode(...codes);
}
function compare(itemA, itemB) {
  const aCodes = posCodes(itemA.position);
  const bCodes = posCodes(itemB.position);
  const maxLength = Math.max(aCodes.length, bCodes.length);
  for (let i2 = 0; i2 < maxLength; i2++) {
    const a2 = aCodes[i2] == null ? min : aCodes[i2];
    const b2 = bCodes[i2] == null ? min : bCodes[i2];
    if (a2 === b2) {
      continue;
    } else {
      return a2 - b2;
    }
  }
  throw new Error(`Impossible to compare similar position "${itemA.position}" and "${itemB.position}"`);
}

// node_modules/@liveblocks/client/lib/esm/doc.js
var RECORD = Symbol("liveblocks.record");
var LIST = Symbol("liveblocks.list");
function createRecord(id, data) {
  return Object.assign({ id, $$type: RECORD }, data);
}
function createList(id, items = []) {
  return {
    id,
    $$type: LIST,
    length: items.length,
    toArray: () => items,
    map: (callback) => items.map(callback)
  };
}
function noop() {
}
var Doc = class {
  constructor(root, _cache, _emit) {
    this.root = root;
    this._cache = _cache;
    this._emit = _emit;
  }
  static empty(id = "root", emit = noop) {
    const root = {
      id,
      $$type: RECORD
    };
    return new Doc(root, { links: new Map(), listCache: new Map() }, emit);
  }
  static createFromRoot(data, id = "root", emit = noop) {
    let doc = Doc.empty(id, emit);
    doc = doc.updateRecord(doc.root.id, data);
    return doc;
  }
  static load(root, emit = noop) {
    let doc = Doc.empty(root.id, emit);
    return doc.dispatch({
      type: OpType.RecordUpdate,
      id: root.id,
      data: root.data
    });
  }
  get data() {
    return this.root;
  }
  dispatch(op, shouldEmit = false) {
    if (shouldEmit) {
      this._emit(op);
    }
    if (op.id === this.root.id) {
      const node = dispatch(this.root, op, this._cache, []);
      return new Doc(node, this._cache, this._emit);
    } else {
      const links = getAllLinks(op.id, this.root.id, this._cache.links);
      const node = dispatch(this.root, op, this._cache, links);
      return new Doc(node, this._cache, this._emit);
    }
  }
  getChild(id) {
    if (id === this.root.id) {
      return this.root;
    }
    const allLinks = getAllLinks(id, this.root.id, this._cache.links);
    return getChildDeep(this.root, id, allLinks, this._cache);
  }
  updateRecord(id, overrides) {
    const currentRecord = this.getChild(id);
    if (currentRecord == null) {
      throw new Error(`Record with id "${id}" does not exist`);
    }
    let data = {};
    for (const key in overrides) {
      const value = overrides[key];
      data[key] = serialize(value);
    }
    const op = {
      id: currentRecord.id,
      type: OpType.RecordUpdate,
      data
    };
    return this.dispatch(op, true);
  }
  pushItem(id, item) {
    const list = this.getChild(id);
    if (list == null) {
      throw new Error(`List with id "${id}" does not exist`);
    }
    if (list.$$type !== LIST) {
      throw new Error(`Node with id "${id}" is not a list`);
    }
    if (!isRecord(item)) {
      throw new Error("List can't only have Record as children");
    }
    const data = serialize(item);
    if (list.length === 0) {
      return this.dispatch({
        type: OpType.ListInsert,
        id: list.id,
        position: makePosition(),
        data
      }, true);
    }
    const items = sortedListItems(getListItems(this._cache, id));
    const [tailPosition] = items[items.length - 1];
    const position = makePosition(tailPosition);
    const operation = {
      type: OpType.ListInsert,
      id: list.id,
      position,
      data
    };
    return this.dispatch(operation, true);
  }
  moveItem(id, index, targetIndex) {
    const list = this.getChild(id);
    if (list == null) {
      throw new Error(`List with id "${id}" does not exist`);
    }
    if (list.$$type !== LIST) {
      throw new Error(`Node with id "${id}" is not a list`);
    }
    const items = sortedListItems(getListItems(this._cache, id));
    if (targetIndex < 0) {
      throw new Error("targetIndex cannot be less than 0");
    }
    if (targetIndex >= items.length) {
      throw new Error("targetIndex cannot be greater or equal than the list length");
    }
    if (index < 0) {
      throw new Error("index cannot be less than 0");
    }
    if (index >= items.length) {
      throw new Error("index cannot be greater or equal than the list length");
    }
    if (index === targetIndex) {
      return this;
    }
    let beforePosition = null;
    let afterPosition = null;
    if (index < targetIndex) {
      afterPosition = targetIndex === items.length - 1 ? void 0 : items[targetIndex + 1][0];
      beforePosition = items[targetIndex][0];
    } else {
      afterPosition = items[targetIndex][0];
      beforePosition = targetIndex === 0 ? void 0 : items[targetIndex - 1][0];
    }
    const position = makePosition(beforePosition, afterPosition);
    const [, item] = items[index];
    return this.dispatch({
      type: OpType.ListMove,
      id: list.id,
      itemId: item.id,
      position
    }, true);
  }
  deleteItem(id, index) {
    const list = this.getChild(id);
    if (list == null) {
      throw new Error(`List with id "${id}" does not exist`);
    }
    if (list.$$type !== LIST) {
      throw new Error(`Node with id "${id}" is not a list`);
    }
    const items = sortedListItems(getListItems(this._cache, id));
    const [, item] = items[index];
    return this.dispatch({
      type: OpType.ListRemove,
      id: list.id,
      itemId: item.id
    }, true);
  }
  deleteItemById(id, itemId) {
    const list = this.getChild(id);
    if (list == null) {
      throw new Error(`List with id "${id}" does not exist`);
    }
    if (list.$$type !== LIST) {
      throw new Error(`Node with id "${id}" is not a list`);
    }
    const itemsMap = getListItems(this._cache, id);
    let item = null;
    for (const [, crdt] of itemsMap) {
      if (crdt.id === itemId) {
        item = crdt;
        break;
      }
    }
    if (item == null) {
      throw new Error(`List with id "${id}" does not have an item with id "${itemId}"`);
    }
    return this.dispatch({
      type: OpType.ListRemove,
      id: list.id,
      itemId: item.id
    }, true);
  }
};
function getAllLinks(id, rootId, links) {
  let currentId = id;
  const result = [];
  do {
    const link = links.get(currentId);
    if (link == null) {
      throw new Error(`Can't find link for id "${currentId}"`);
    }
    currentId = link.parentId;
    result.push(link);
  } while (currentId !== rootId);
  return result;
}
function deserializeList(serialized, cache) {
  const listItems = new Map();
  for (const position in serialized.data) {
    const item = deserialize(serialized.data[position], cache);
    if (!isRecord(item)) {
      throw new Error("TODO");
    }
    listItems.set(position, item);
    cache.links.set(item.id, { parentId: serialized.id, parentKey: position });
  }
  cache.listCache.set(serialized.id, listItems);
  return createList(serialized.id, listItemsToArray(listItems));
}
function getListItems(cache, listId) {
  const items = cache.listCache.get(listId);
  if (items == null) {
    throw new Error(`Can't find list cache for id "${listId}"`);
  }
  return items;
}
function deserializeRecord(serialized, cache) {
  const result = {
    id: serialized.id,
    $$type: RECORD
  };
  for (const key in serialized.data) {
    const item = deserialize(serialized.data[key], cache);
    if (isCrdt(item)) {
      cache.links.set(item.id, {
        parentId: serialized.id,
        parentKey: key
      });
    }
    result[key] = item;
  }
  return result;
}
function deserialize(serialized, cache) {
  switch (serialized.type) {
    case CrdtType.Register: {
      return serialized.data;
    }
    case CrdtType.Record: {
      return deserializeRecord(serialized, cache);
    }
    case CrdtType.List: {
      return deserializeList(serialized, cache);
    }
    default: {
      throw new Error("TODO");
    }
  }
}
function dispatchOnRecord(record, op, cache, links) {
  if (links.length === 0) {
    if (record.id !== op.id) {
      throw new Error("TODO");
    }
    switch (op.type) {
      case OpType.RecordUpdate: {
        return updateRecord(record, op, cache);
      }
      default: {
        console.warn("Unsupported operation");
        return record;
      }
    }
  }
  const currentLink = links.pop();
  const child = record[currentLink.parentKey];
  const newNode = dispatch(child, op, cache, links);
  return Object.assign(Object.assign({}, record), { [currentLink.parentKey]: newNode });
}
function dispatchOnList(list, op, cache, links) {
  if (links.length === 0) {
    if (list.id !== op.id) {
      throw new Error("TODO");
    }
    switch (op.type) {
      case OpType.ListInsert: {
        return listInsert(list, op, cache);
      }
      case OpType.ListMove: {
        return listMove(list, op, cache);
      }
      case OpType.ListRemove: {
        return listDelete(list, op, cache);
      }
      default: {
        console.warn("Unsupported operation");
        return list;
      }
    }
  }
  const currentLink = links.pop();
  const position = currentLink.parentKey;
  const items = getListItems(cache, list.id);
  const item = items.get(position);
  if (item == null) {
    throw new Error("TODO");
  }
  const newItem = dispatch(item, op, cache, links);
  items.set(position, newItem);
  return createList(list.id, listItemsToArray(items));
}
function dispatch(node, op, cache, links) {
  switch (node.$$type) {
    case RECORD:
      return dispatchOnRecord(node, op, cache, links);
    case LIST:
      return dispatchOnList(node, op, cache, links);
    default: {
      throw new Error("Unknown CRDT");
    }
  }
}
function updateRecord(node, op, cache) {
  const result = Object.assign({}, node);
  for (const key in op.data) {
    const value = op.data[key];
    const item = deserialize(value, cache);
    if (isCrdt(item)) {
      cache.links.set(item.id, { parentId: node.id, parentKey: key });
    }
    result[key] = item;
  }
  return result;
}
function listInsert(list, op, cache) {
  const items = getListItems(cache, list.id);
  const item = deserialize(op.data, cache);
  if (isCrdt(item)) {
    items.set(op.position, item);
    cache.links.set(item.id, { parentId: list.id, parentKey: op.position });
  }
  return createList(list.id, listItemsToArray(items));
}
function listMove(list, op, cache) {
  const items = getListItems(cache, list.id);
  const link = getLinkOrThrow(cache, op.itemId);
  const item = items.get(link.parentKey);
  if (item == null) {
    throw new Error("TODO");
  }
  items.delete(link.parentKey);
  items.set(op.position, item);
  cache.links.set(op.itemId, { parentId: list.id, parentKey: op.position });
  return createList(list.id, listItemsToArray(items));
}
function getLinkOrThrow(cache, id) {
  const link = cache.links.get(id);
  if (link == null) {
    throw new Error(`Can't find link with id "${id}"`);
  }
  return link;
}
function listDelete(list, op, cache) {
  const items = getListItems(cache, list.id);
  const link = getLinkOrThrow(cache, op.itemId);
  items.delete(link.parentKey);
  cache.links.delete(op.itemId);
  return createList(list.id, listItemsToArray(items));
}
function listItemsToArray(items) {
  return sortedListItems(items).map((entry) => entry[1]);
}
function sortedListItems(items) {
  return Array.from(items.entries()).sort((entryA, entryB) => compare({ position: entryA[0] }, { position: entryB[0] }));
}
function getChildDeep(node, id, links, cache) {
  let currentNode = node;
  while (currentNode.id !== id) {
    const link = links.pop();
    if (link == null || link.parentId !== currentNode.id) {
      throw new Error("TODO");
    }
    if (currentNode.$$type === RECORD) {
      currentNode = currentNode[link.parentKey];
    } else {
      const listItems = getListItems(cache, currentNode.id);
      const item = listItems.get(link.parentKey);
      if (item == null) {
        throw new Error("TODO");
      }
      currentNode = item;
    }
  }
  return currentNode;
}
function isRecord(value) {
  return value != null && typeof value === "object" && value.$$type === RECORD;
}
function isList(value) {
  return value != null && typeof value === "object" && value.$$type === LIST;
}
function isCrdt(value) {
  return isRecord(value) || isList(value);
}
function serializeRecord(record) {
  const serializedData = {};
  for (const key in record) {
    if (key !== "id" && key !== "$$type") {
      const value = record[key];
      serializedData[key] = serialize(value);
    }
  }
  return {
    id: record.id,
    type: CrdtType.Record,
    data: serializedData
  };
}
function serializeList(list) {
  return {
    id: list.id,
    type: CrdtType.List,
    data: {}
  };
}
function serialize(value) {
  if (isRecord(value)) {
    return serializeRecord(value);
  } else if (isList(value)) {
    return serializeList(value);
  } else {
    return { type: CrdtType.Register, data: value };
  }
}

// node_modules/@liveblocks/client/lib/esm/types.js
var LiveStorageState;
(function(LiveStorageState2) {
  LiveStorageState2[LiveStorageState2["NotInitialized"] = 0] = "NotInitialized";
  LiveStorageState2[LiveStorageState2["Loading"] = 1] = "Loading";
  LiveStorageState2[LiveStorageState2["Loaded"] = 2] = "Loaded";
})(LiveStorageState || (LiveStorageState = {}));

// node_modules/@liveblocks/client/lib/esm/utils.js
function remove(array, item) {
  for (let i2 = 0; i2 < array.length; i2++) {
    if (array[i2] === item) {
      array.splice(i2, 1);
      break;
    }
  }
}

// node_modules/@liveblocks/client/lib/esm/authentication.js
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function fetchAuthorize(endpoint, room) {
  return __awaiter(this, void 0, void 0, function* () {
    const res = yield fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        room
      })
    });
    if (!res.ok) {
      throw new AuthenticationError(`Authentication error. Liveblocks could not parse the response of your authentication "${endpoint}"`);
    }
    let authResponse = null;
    try {
      authResponse = yield res.json();
    } catch (er) {
      throw new AuthenticationError(`Authentication error. Liveblocks could not parse the response of your authentication "${endpoint}"`);
    }
    if (typeof authResponse.token !== "string") {
      throw new AuthenticationError(`Authentication error. Liveblocks could not parse the response of your authentication "${endpoint}"`);
    }
    return authResponse.token;
  });
}
function auth(endpoint, room) {
  return __awaiter(this, void 0, void 0, function* () {
    if (typeof endpoint === "string") {
      return fetchAuthorize(endpoint, room);
    }
    if (typeof endpoint === "function") {
      const { token } = yield endpoint(room);
      return token;
    }
    throw new Error("Authentication error. Liveblocks could not parse the response of your authentication endpoint");
  });
}
var AuthenticationError = class extends Error {
  constructor(message) {
    super(message);
  }
};
function parseToken(token) {
  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    throw new AuthenticationError(`Authentication error. Liveblocks could not parse the response of your authentication endpoint`);
  }
  const data = JSON.parse(atob(tokenParts[1]));
  if (typeof data.actor !== "number") {
    throw new AuthenticationError(`Authentication error. Liveblocks could not parse the response of your authentication endpoint`);
  }
  return data;
}

// node_modules/@liveblocks/client/lib/esm/room.js
var __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var BACKOFF_RETRY_DELAYS = [250, 500, 1e3, 2e3, 4e3, 8e3, 1e4];
var HEARTBEAT_INTERVAL = 3e4;
var PONG_TIMEOUT = 2e3;
function isValidRoomEventType(value) {
  return value === "storage" || value === "my-presence" || value === "others" || value === "event" || value === "error" || value === "connection";
}
function makeIdFactory(connectionId) {
  let count = 0;
  return () => `${connectionId}:${count++}`;
}
function makeOthers(presenceMap) {
  const array = Object.values(presenceMap);
  return {
    get count() {
      return array.length;
    },
    map(callback) {
      return array.map(callback);
    },
    toArray() {
      return array;
    }
  };
}
function log(...params) {
  return;
  console.log(...params, new Date().toString());
}
function makeStateMachine(state, context, mockedEffects) {
  const effects = mockedEffects || {
    authenticate() {
      return __awaiter2(this, void 0, void 0, function* () {
        try {
          const token = yield auth(context.authEndpoint, context.room);
          const parsedToken = parseToken(token);
          const socket = new WebSocket(`${context.liveblocksServer}/?token=${token}`);
          socket.addEventListener("message", onMessage);
          socket.addEventListener("open", onOpen);
          socket.addEventListener("close", onClose);
          socket.addEventListener("error", onError);
          authenticationSuccess(parsedToken, socket);
        } catch (er) {
          authenticationFailure(er);
        }
      });
    },
    send(messageOrMessages) {
      if (state.socket == null) {
        throw new Error("Can't send message if socket is null");
      }
      state.socket.send(JSON.stringify(messageOrMessages));
    },
    delayFlush(delay) {
      return setTimeout(tryFlushing, delay);
    },
    startHeartbeatInterval() {
      return setInterval(heartbeat, HEARTBEAT_INTERVAL);
    },
    schedulePongTimeout() {
      return setTimeout(pongTimeout, PONG_TIMEOUT);
    },
    scheduleReconnect(delay) {
      return setTimeout(connect, delay);
    }
  };
  function subscribe(type, listener) {
    if (!isValidRoomEventType(type)) {
      throw new Error(`"${type}" is not a valid event name`);
    }
    state.listeners[type].push(listener);
  }
  function unsubscribe(event, callback) {
    if (!isValidRoomEventType(event)) {
      throw new Error(`"${event}" is not a valid event name`);
    }
    const callbacks = state.listeners[event];
    remove(callbacks, callback);
  }
  function getConnectionState() {
    return state.connection.state;
  }
  function getSelf() {
    return state.connection.state === "open" || state.connection.state === "connecting" ? {
      connectionId: state.connection.id,
      id: state.connection.userId,
      info: state.connection.userInfo,
      presence: getPresence()
    } : null;
  }
  function connect() {
    if (typeof window === "undefined") {
      return;
    }
    if (state.connection.state !== "closed" && state.connection.state !== "unavailable") {
      return null;
    }
    updateConnection({ state: "authenticating" });
    effects.authenticate();
  }
  function updatePresence(overrides) {
    const newPresence = Object.assign(Object.assign({}, state.me), overrides);
    if (state.flushData.presence == null) {
      state.flushData.presence = overrides;
    } else {
      for (const key in overrides) {
        state.flushData.presence[key] = overrides[key];
      }
    }
    state.me = newPresence;
    tryFlushing();
    for (const listener of state.listeners["my-presence"]) {
      listener(state.me);
    }
  }
  function authenticationSuccess(token, socket) {
    updateConnection({
      state: "connecting",
      id: token.actor,
      userInfo: token.info,
      userId: token.id
    });
    state.idFactory = makeIdFactory(token.actor);
    state.socket = socket;
  }
  function authenticationFailure(error) {
    console.error(error);
    updateConnection({ state: "unavailable" });
    state.numberOfRetry++;
    state.timeoutHandles.reconnect = effects.scheduleReconnect(getRetryDelay());
  }
  function onVisibilityChange(visibilityState) {
    if (visibilityState === "visible" && state.connection.state === "open") {
      log("Heartbeat after visibility change");
      heartbeat();
    }
  }
  function onUpdatePresenceMessage(message) {
    const user = state.users[message.actor];
    if (user == null) {
      state.users[message.actor] = {
        connectionId: message.actor,
        presence: message.data
      };
    } else {
      state.users[message.actor] = {
        id: user.id,
        info: user.info,
        connectionId: message.actor,
        presence: Object.assign(Object.assign({}, user.presence), message.data)
      };
    }
    updateUsers({
      type: "update",
      updates: message.data,
      user: state.users[message.actor]
    });
  }
  function updateUsers(event) {
    state.others = makeOthers(state.users);
    for (const listener of state.listeners["others"]) {
      listener(state.others, event);
    }
  }
  function onUserLeftMessage(message) {
    const userLeftMessage = message;
    const user = state.users[userLeftMessage.actor];
    if (user) {
      delete state.users[userLeftMessage.actor];
      updateUsers({ type: "leave", user });
    }
  }
  function onRoomStateMessage(message) {
    const newUsers = {};
    for (const key in message.users) {
      const connectionId = Number.parseInt(key);
      const user = message.users[key];
      newUsers[connectionId] = {
        connectionId,
        info: user.info,
        id: user.id
      };
    }
    state.users = newUsers;
    updateUsers({ type: "reset" });
  }
  function onNavigatorOnline() {
    if (state.connection.state === "unavailable") {
      log("Try to reconnect after connectivity change");
      reconnect();
    }
  }
  function onEvent(message) {
    for (const listener of state.listeners.event) {
      listener({ connectionId: message.actor, event: message.event });
    }
  }
  function onUserJoinedMessage(message) {
    state.users[message.actor] = {
      connectionId: message.actor,
      info: message.info,
      id: message.id
    };
    updateUsers({ type: "enter", user: state.users[message.actor] });
    if (state.me) {
      state.flushData.messages.push({
        type: ClientMessageType.UpdatePresence,
        data: state.me,
        targetActor: message.actor
      });
      tryFlushing();
    }
  }
  function onMessage(event) {
    if (event.data === "pong") {
      clearTimeout(state.timeoutHandles.pongTimeout);
      return;
    }
    const message = JSON.parse(event.data);
    switch (message.type) {
      case ServerMessageType.InitialStorageState: {
        onInitialStorageState(message);
        break;
      }
      case ServerMessageType.UpdateStorage: {
        onStorageUpdates(message);
        break;
      }
      case ServerMessageType.UserJoined: {
        onUserJoinedMessage(message);
        break;
      }
      case ServerMessageType.UpdatePresence: {
        onUpdatePresenceMessage(message);
        break;
      }
      case ServerMessageType.Event: {
        onEvent(message);
        break;
      }
      case ServerMessageType.UserLeft: {
        onUserLeftMessage(message);
        break;
      }
      case ServerMessageType.RoomState: {
        onRoomStateMessage(message);
        break;
      }
    }
  }
  function onClose(event) {
    state.socket = null;
    clearTimeout(state.timeoutHandles.pongTimeout);
    clearInterval(state.intervalHandles.heartbeat);
    if (state.timeoutHandles.flush) {
      clearTimeout(state.timeoutHandles.flush);
    }
    clearTimeout(state.timeoutHandles.reconnect);
    state.users = {};
    updateUsers({ type: "reset" });
    if (event.code >= 4e3 && event.code <= 4100) {
      updateConnection({ state: "failed" });
      const error = new LiveblocksError(event.reason, event.code);
      for (const listener of state.listeners.error) {
        listener(error);
      }
    } else if (event.wasClean === false) {
      updateConnection({ state: "unavailable" });
      state.numberOfRetry++;
      state.timeoutHandles.reconnect = effects.scheduleReconnect(getRetryDelay());
    } else {
      updateConnection({ state: "closed" });
    }
  }
  function updateConnection(connection) {
    state.connection = connection;
    for (const listener of state.listeners.connection) {
      listener(connection.state);
    }
  }
  function getRetryDelay() {
    return BACKOFF_RETRY_DELAYS[state.numberOfRetry < BACKOFF_RETRY_DELAYS.length ? state.numberOfRetry : BACKOFF_RETRY_DELAYS.length - 1];
  }
  function onError() {
  }
  function onOpen() {
    clearInterval(state.intervalHandles.heartbeat);
    state.intervalHandles.heartbeat = effects.startHeartbeatInterval();
    if (state.connection.state === "connecting") {
      updateConnection(Object.assign(Object.assign({}, state.connection), { state: "open" }));
      state.numberOfRetry = 0;
      tryFlushing();
    } else {
    }
  }
  function heartbeat() {
    if (state.socket == null) {
      return;
    }
    clearTimeout(state.timeoutHandles.pongTimeout);
    state.timeoutHandles.pongTimeout = effects.schedulePongTimeout();
    if (state.socket.readyState === WebSocket.OPEN) {
      state.socket.send("ping");
    }
  }
  function pongTimeout() {
    log("Pong timeout. Trying to reconnect.");
    reconnect();
  }
  function reconnect() {
    if (state.socket) {
      state.socket.removeEventListener("open", onOpen);
      state.socket.removeEventListener("message", onMessage);
      state.socket.removeEventListener("close", onClose);
      state.socket.removeEventListener("error", onError);
      state.socket.close();
      state.socket = null;
    }
    updateConnection({ state: "unavailable" });
    clearTimeout(state.timeoutHandles.pongTimeout);
    if (state.timeoutHandles.flush) {
      clearTimeout(state.timeoutHandles.flush);
    }
    clearTimeout(state.timeoutHandles.reconnect);
    clearInterval(state.intervalHandles.heartbeat);
    connect();
  }
  function tryFlushing() {
    if (state.socket == null) {
      return;
    }
    if (state.socket.readyState !== WebSocket.OPEN) {
      return;
    }
    const now = Date.now();
    const elapsedTime = now - state.lastFlushTime;
    if (elapsedTime > context.throttleDelay) {
      const messages = flushDataToMessages(state);
      if (messages.length === 0) {
        return;
      }
      effects.send(messages);
      state.flushData = {
        messages: [],
        storageOperations: [],
        presence: null
      };
      state.lastFlushTime = now;
    } else {
      if (state.timeoutHandles.flush != null) {
        clearTimeout(state.timeoutHandles.flush);
      }
      state.timeoutHandles.flush = effects.delayFlush(context.throttleDelay - (now - state.lastFlushTime));
    }
  }
  function flushDataToMessages(state2) {
    const messages = [];
    if (state2.flushData.presence) {
      messages.push({
        type: ClientMessageType.UpdatePresence,
        data: state2.flushData.presence
      });
    }
    for (const event of state2.flushData.messages) {
      messages.push(event);
    }
    if (state2.flushData.storageOperations.length > 0) {
      messages.push({
        type: ClientMessageType.UpdateStorage,
        ops: state2.flushData.storageOperations
      });
    }
    return messages;
  }
  function disconnect() {
    if (state.socket) {
      state.socket.removeEventListener("open", onOpen);
      state.socket.removeEventListener("message", onMessage);
      state.socket.removeEventListener("close", onClose);
      state.socket.removeEventListener("error", onError);
      state.socket.close();
      state.socket = null;
    }
    updateConnection({ state: "closed" });
    if (state.timeoutHandles.flush) {
      clearTimeout(state.timeoutHandles.flush);
    }
    clearTimeout(state.timeoutHandles.reconnect);
    clearTimeout(state.timeoutHandles.pongTimeout);
    clearInterval(state.intervalHandles.heartbeat);
    state.users = {};
    updateUsers({ type: "reset" });
    clearListeners();
  }
  function clearListeners() {
    for (const key in state.listeners) {
      state.listeners[key] = [];
    }
  }
  function getPresence() {
    return state.me;
  }
  function getOthers() {
    return state.others;
  }
  function broadcastEvent(event) {
    if (state.socket == null) {
      return;
    }
    state.flushData.messages.push({
      type: ClientMessageType.ClientEvent,
      event
    });
    tryFlushing();
  }
  function onStorageUpdates(message) {
    if (state.doc == null) {
      return;
    }
    updateDoc(message.ops.reduce((doc, op) => doc.dispatch(op), state.doc));
  }
  function updateDoc(doc) {
    state.doc = doc;
    if (doc) {
      for (const listener of state.listeners.storage) {
        listener(getStorage());
      }
    }
  }
  function getStorage() {
    if (state.storageState === LiveStorageState.Loaded) {
      return {
        state: state.storageState,
        root: state.doc.root
      };
    }
    return {
      state: state.storageState
    };
  }
  function onInitialStorageState(message) {
    state.storageState = LiveStorageState.Loaded;
    if (message.root == null) {
      const rootId = makeId();
      state.doc = Doc.empty(rootId, (op) => dispatch2(op));
      updateDoc(state.doc.updateRecord(rootId, state.initialStorageFactory({
        createRecord: (data) => createRecord2(data),
        createList: () => createList2()
      })));
    } else {
      updateDoc(Doc.load(message.root, (op) => dispatch2(op)));
    }
  }
  function makeId() {
    if (state.idFactory == null) {
      throw new Error("Can't generate id. Id factory is missing.");
    }
    return state.idFactory();
  }
  function dispatch2(op) {
    state.flushData.storageOperations.push(op);
    tryFlushing();
  }
  function createRecord2(data) {
    return createRecord(makeId(), data);
  }
  function createList2() {
    return createList(makeId());
  }
  function fetchStorage(initialStorageFactory) {
    state.initialStorageFactory = initialStorageFactory;
    state.storageState = LiveStorageState.Loading;
    state.flushData.messages.push({ type: ClientMessageType.FetchStorage });
    tryFlushing();
  }
  function updateRecord2(record, overrides) {
    updateDoc(state.doc.updateRecord(record.id, overrides));
  }
  function pushItem(list, item) {
    updateDoc(state.doc.pushItem(list.id, item));
  }
  function deleteItem(list, index) {
    updateDoc(state.doc.deleteItem(list.id, index));
  }
  function deleteItemById(list, itemId) {
    updateDoc(state.doc.deleteItemById(list.id, itemId));
  }
  function moveItem(list, index, targetIndex) {
    updateDoc(state.doc.moveItem(list.id, index, targetIndex));
  }
  return {
    onOpen,
    onClose,
    onMessage,
    authenticationSuccess,
    heartbeat,
    onNavigatorOnline,
    onVisibilityChange,
    connect,
    disconnect,
    subscribe,
    unsubscribe,
    updatePresence,
    broadcastEvent,
    fetchStorage,
    createRecord: createRecord2,
    updateRecord: updateRecord2,
    createList: createList2,
    pushItem,
    deleteItem,
    deleteItemById,
    moveItem,
    selectors: {
      getConnectionState,
      getSelf,
      getPresence,
      getOthers,
      getStorage
    }
  };
}
function defaultState(me) {
  return {
    connection: { state: "closed" },
    socket: null,
    listeners: {
      storage: [],
      event: [],
      others: [],
      "my-presence": [],
      error: [],
      connection: []
    },
    numberOfRetry: 0,
    lastFlushTime: 0,
    timeoutHandles: {
      flush: null,
      reconnect: 0,
      pongTimeout: 0
    },
    flushData: {
      presence: me == null ? {} : me,
      messages: [],
      storageOperations: []
    },
    intervalHandles: {
      heartbeat: 0
    },
    me: me == null ? {} : me,
    users: {},
    others: makeOthers({}),
    storageState: LiveStorageState.NotInitialized,
    initialStorageFactory: null,
    doc: null,
    idFactory: null
  };
}
function createRoom(name, options) {
  const throttleDelay = options.throttle || 100;
  const liveblocksServer = options.liveblocksServer || "wss://liveblocks.net";
  const authEndpoint = options.authEndpoint;
  const state = defaultState(options.initialPresence);
  const machine = makeStateMachine(state, {
    throttleDelay,
    liveblocksServer,
    authEndpoint,
    room: name
  });
  const room = {
    getConnectionState: machine.selectors.getConnectionState,
    getSelf: machine.selectors.getSelf,
    subscribe: machine.subscribe,
    unsubscribe: machine.unsubscribe,
    getStorage: machine.selectors.getStorage,
    fetchStorage: machine.fetchStorage,
    createRecord: machine.createRecord,
    createList: machine.createList,
    updateRecord: machine.updateRecord,
    pushItem: machine.pushItem,
    deleteItem: machine.deleteItem,
    deleteItemById: machine.deleteItemById,
    moveItem: machine.moveItem,
    getPresence: machine.selectors.getPresence,
    updatePresence: machine.updatePresence,
    getOthers: machine.selectors.getOthers,
    broadcastEvent: machine.broadcastEvent
  };
  return {
    connect: machine.connect,
    disconnect: machine.disconnect,
    onNavigatorOnline: machine.onNavigatorOnline,
    onVisibilityChange: machine.onVisibilityChange,
    room
  };
}
var LiveblocksError = class extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
};

// node_modules/@liveblocks/client/lib/esm/client.js
function createClient(options) {
  if (typeof options.throttle === "number") {
    if (options.throttle < 80 || options.throttle > 1e3) {
      throw new Error("Liveblocks client throttle should be between 80 and 1000 ms");
    }
  }
  const rooms = new Map();
  function getRoom(roomId) {
    const internalRoom = rooms.get(roomId);
    return internalRoom ? internalRoom.room : null;
  }
  function enter(roomId, initialPresence) {
    let internalRoom = rooms.get(roomId);
    if (internalRoom) {
      return internalRoom.room;
    }
    internalRoom = createRoom(roomId, Object.assign(Object.assign({}, options), { initialPresence }));
    rooms.set(roomId, internalRoom);
    internalRoom.connect();
    return internalRoom.room;
  }
  function leave(roomId) {
    let room = rooms.get(roomId);
    if (room) {
      room.disconnect();
      rooms.delete(roomId);
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener("online", () => {
      for (const [, room] of rooms) {
        room.onNavigatorOnline();
      }
    });
  }
  if (typeof document !== "undefined") {
    document.addEventListener("visibilitychange", () => {
      for (const [, room] of rooms) {
        room.onVisibilityChange(document.visibilityState);
      }
    });
  }
  return {
    getRoom,
    enter,
    leave
  };
}

// node_modules/react-dropzone/dist/es/index.js
var import_prop_types = __toModule(require_prop_types());
import React, { forwardRef, Fragment, useCallback, useEffect, useImperativeHandle, useMemo, useReducer, useRef } from "react";

// node_modules/file-selector/node_modules/tslib/modules/index.js
var import_tslib = __toModule(require_tslib());
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter: __awaiter3,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet
} = import_tslib.default;

// node_modules/file-selector/dist/es5/file.js
var COMMON_MIME_TYPES = new Map([
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function toFileWithPath(file, path) {
  var f2 = withMimeType(file);
  if (typeof f2.path !== "string") {
    var webkitRelativePath = file.webkitRelativePath;
    Object.defineProperty(f2, "path", {
      value: typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }
  return f2;
}
function withMimeType(file) {
  var name = file.name;
  var hasExtension = name && name.lastIndexOf(".") !== -1;
  if (hasExtension && !file.type) {
    var ext = name.split(".").pop().toLowerCase();
    var type = COMMON_MIME_TYPES.get(ext);
    if (type) {
      Object.defineProperty(file, "type", {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }
  return file;
}

// node_modules/file-selector/dist/es5/file-selector.js
var FILES_TO_IGNORE = [
  ".DS_Store",
  "Thumbs.db"
];
function fromEvent(evt) {
  return __awaiter3(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      if (isObject(evt) && isDataTransfer(evt)) {
        return [2, getDataTransferFiles(evt.dataTransfer, evt.type)];
      } else if (isChangeEvt(evt)) {
        return [2, getInputFiles(evt)];
      } else if (Array.isArray(evt) && evt.every(function(item) {
        return "getFile" in item && typeof item.getFile === "function";
      })) {
        return [2, getFsHandleFiles(evt)];
      }
      return [2, []];
    });
  });
}
function isDataTransfer(value) {
  return isObject(value.dataTransfer);
}
function isChangeEvt(value) {
  return isObject(value) && isObject(value.target);
}
function isObject(v2) {
  return typeof v2 === "object" && v2 !== null;
}
function getInputFiles(evt) {
  return fromList(evt.target.files).map(function(file) {
    return toFileWithPath(file);
  });
}
function getFsHandleFiles(handles) {
  return __awaiter3(this, void 0, void 0, function() {
    var files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, Promise.all(handles.map(function(h2) {
            return h2.getFile();
          }))];
        case 1:
          files = _a.sent();
          return [2, files.map(function(file) {
            return toFileWithPath(file);
          })];
      }
    });
  });
}
function getDataTransferFiles(dt, type) {
  return __awaiter3(this, void 0, void 0, function() {
    var items, files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (dt === null) {
            return [2, []];
          }
          if (!dt.items)
            return [3, 2];
          items = fromList(dt.items).filter(function(item) {
            return item.kind === "file";
          });
          if (type !== "drop") {
            return [2, items];
          }
          return [4, Promise.all(items.map(toFilePromises))];
        case 1:
          files = _a.sent();
          return [2, noIgnoredFiles(flatten(files))];
        case 2:
          return [2, noIgnoredFiles(fromList(dt.files).map(function(file) {
            return toFileWithPath(file);
          }))];
      }
    });
  });
}
function noIgnoredFiles(files) {
  return files.filter(function(file) {
    return FILES_TO_IGNORE.indexOf(file.name) === -1;
  });
}
function fromList(items) {
  if (items === null) {
    return [];
  }
  var files = [];
  for (var i2 = 0; i2 < items.length; i2++) {
    var file = items[i2];
    files.push(file);
  }
  return files;
}
function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== "function") {
    return fromDataTransferItem(item);
  }
  var entry = item.webkitGetAsEntry();
  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }
  return fromDataTransferItem(item);
}
function flatten(items) {
  return items.reduce(function(acc, files) {
    return __spread(acc, Array.isArray(files) ? flatten(files) : [files]);
  }, []);
}
function fromDataTransferItem(item) {
  var file = item.getAsFile();
  if (!file) {
    return Promise.reject(item + " is not a File");
  }
  var fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
}
function fromEntry(entry) {
  return __awaiter3(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
    });
  });
}
function fromDirEntry(entry) {
  var reader = entry.createReader();
  return new Promise(function(resolve, reject) {
    var entries = [];
    function readEntries() {
      var _this = this;
      reader.readEntries(function(batch) {
        return __awaiter3(_this, void 0, void 0, function() {
          var files, err_1, items;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!!batch.length)
                  return [3, 5];
                _a.label = 1;
              case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, Promise.all(entries)];
              case 2:
                files = _a.sent();
                resolve(files);
                return [3, 4];
              case 3:
                err_1 = _a.sent();
                reject(err_1);
                return [3, 4];
              case 4:
                return [3, 6];
              case 5:
                items = Promise.all(batch.map(fromEntry));
                entries.push(items);
                readEntries();
                _a.label = 6;
              case 6:
                return [2];
            }
          });
        });
      }, function(err) {
        reject(err);
      });
    }
    readEntries();
  });
}
function fromFileEntry(entry) {
  return __awaiter3(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, new Promise(function(resolve, reject) {
        entry.file(function(file) {
          var fwp = toFileWithPath(file, entry.fullPath);
          resolve(fwp);
        }, function(err) {
          reject(err);
        });
      })];
    });
  });
}

// node_modules/react-dropzone/dist/es/utils/index.js
var import_attr_accept = __toModule(require_es());
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr2(accept) {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr2(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr2(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
};
function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || (0, import_attr_accept.default)(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize)
        return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize)
        return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize)
      return [false, getTooSmallRejectionErr(minSize)];
    else if (isDefined(maxSize) && file.size > maxSize)
      return [false, getTooLargeRejectionErr(maxSize)];
  }
  return [true, null];
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function allFilesAccepted(_ref) {
  var files = _ref.files, accept = _ref.accept, minSize = _ref.minSize, maxSize = _ref.maxSize, multiple = _ref.multiple, maxFiles = _ref.maxFiles;
  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }
  return files.every(function(file) {
    var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray(_fileAccepted, 1), accepted = _fileAccepted2[0];
    var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray(_fileMatchSize, 1), sizeMatch = _fileMatchSize2[0];
    return accepted && sizeMatch;
  });
}
function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }
  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }
  return Array.prototype.some.call(event.dataTransfer.types, function(type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}
function onDocumentDragOver(event) {
  event.preventDefault();
}
function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}
function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}
function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return fns.some(function(fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }
      return isPropagationStopped(event);
    });
  };
}
function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
function filePickerOptionsTypes(accept) {
  accept = typeof accept === "string" ? accept.split(",") : accept;
  return [{
    description: "everything",
    accept: Array.isArray(accept) ? accept.filter(function(item) {
      return item === "audio/*" || item === "video/*" || item === "image/*" || item === "text/*" || /\w+\/[-+.\w]+/g.test(item);
    }).reduce(function(a2, b2) {
      return _objectSpread(_objectSpread({}, a2), {}, _defineProperty({}, b2, []));
    }, {}) : {}
  }];
}

// node_modules/react-dropzone/dist/es/index.js
var _excluded = ["children"];
var _excluded2 = ["open"];
var _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"];
var _excluded4 = ["refKey", "onChange", "onClick"];
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray2(arr);
}
function _slicedToArray2(arr, i2) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i2) || _unsupportedIterableToArray2(arr, i2) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray2(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray2(o2, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Dropzone = /* @__PURE__ */ forwardRef(function(_ref, ref) {
  var children = _ref.children, params = _objectWithoutProperties(_ref, _excluded);
  var _useDropzone = useDropzone(params), open = _useDropzone.open, props = _objectWithoutProperties(_useDropzone, _excluded2);
  useImperativeHandle(ref, function() {
    return {
      open
    };
  }, [open]);
  return /* @__PURE__ */ React.createElement(Fragment, null, children(_objectSpread2(_objectSpread2({}, props), {}, {
    open
  })));
});
Dropzone.displayName = "Dropzone";
var defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: true
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  children: import_prop_types.default.func,
  accept: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.arrayOf(import_prop_types.default.string)]),
  multiple: import_prop_types.default.bool,
  preventDropOnDocument: import_prop_types.default.bool,
  noClick: import_prop_types.default.bool,
  noKeyboard: import_prop_types.default.bool,
  noDrag: import_prop_types.default.bool,
  noDragEventsBubbling: import_prop_types.default.bool,
  minSize: import_prop_types.default.number,
  maxSize: import_prop_types.default.number,
  maxFiles: import_prop_types.default.number,
  disabled: import_prop_types.default.bool,
  getFilesFromEvent: import_prop_types.default.func,
  onFileDialogCancel: import_prop_types.default.func,
  onFileDialogOpen: import_prop_types.default.func,
  useFsAccessApi: import_prop_types.default.bool,
  onDragEnter: import_prop_types.default.func,
  onDragLeave: import_prop_types.default.func,
  onDragOver: import_prop_types.default.func,
  onDrop: import_prop_types.default.func,
  onDropAccepted: import_prop_types.default.func,
  onDropRejected: import_prop_types.default.func,
  validator: import_prop_types.default.func
};
var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function useDropzone() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _defaultProps$options = _objectSpread2(_objectSpread2({}, defaultProps), options), accept = _defaultProps$options.accept, disabled = _defaultProps$options.disabled, getFilesFromEvent = _defaultProps$options.getFilesFromEvent, maxSize = _defaultProps$options.maxSize, minSize = _defaultProps$options.minSize, multiple = _defaultProps$options.multiple, maxFiles = _defaultProps$options.maxFiles, onDragEnter = _defaultProps$options.onDragEnter, onDragLeave = _defaultProps$options.onDragLeave, onDragOver = _defaultProps$options.onDragOver, onDrop = _defaultProps$options.onDrop, onDropAccepted = _defaultProps$options.onDropAccepted, onDropRejected = _defaultProps$options.onDropRejected, onFileDialogCancel = _defaultProps$options.onFileDialogCancel, onFileDialogOpen = _defaultProps$options.onFileDialogOpen, useFsAccessApi = _defaultProps$options.useFsAccessApi, preventDropOnDocument = _defaultProps$options.preventDropOnDocument, noClick = _defaultProps$options.noClick, noKeyboard = _defaultProps$options.noKeyboard, noDrag = _defaultProps$options.noDrag, noDragEventsBubbling = _defaultProps$options.noDragEventsBubbling, validator = _defaultProps$options.validator;
  var onFileDialogOpenCb = useMemo(function() {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop2;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = useMemo(function() {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop2;
  }, [onFileDialogCancel]);
  var rootRef = useRef(null);
  var inputRef = useRef(null);
  var _useReducer = useReducer(reducer, initialState), _useReducer2 = _slicedToArray2(_useReducer, 2), state = _useReducer2[0], dispatch2 = _useReducer2[1];
  var isFocused = state.isFocused, isFileDialogActive = state.isFileDialogActive, draggedFiles = state.draggedFiles;
  var onWindowFocus = function onWindowFocus2() {
    if (isFileDialogActive) {
      setTimeout(function() {
        if (inputRef.current) {
          var files = inputRef.current.files;
          if (!files.length) {
            dispatch2({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };
  useEffect(function() {
    if (window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI()) {
      return function() {
      };
    }
    window.addEventListener("focus", onWindowFocus, false);
    return function() {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, useFsAccessApi]);
  var dragTargetsRef = useRef([]);
  var onDocumentDrop = function onDocumentDrop2(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    dragTargetsRef.current = [];
  };
  useEffect(function() {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }
    return function() {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  var onDragEnterCb = useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(draggedFiles2) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        dispatch2({
          draggedFiles: draggedFiles2,
          isDragActive: true,
          type: "setDraggedFiles"
        });
        if (onDragEnter) {
          onDragEnter(event);
        }
      });
    }
  }, [getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
  var onDragOverCb = useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);
    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {
      }
    }
    if (hasFiles && onDragOver) {
      onDragOver(event);
    }
    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var targets = dragTargetsRef.current.filter(function(target) {
      return rootRef.current && rootRef.current.contains(target);
    });
    var targetIdx = targets.indexOf(event.target);
    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }
    dragTargetsRef.current = targets;
    if (targets.length > 0) {
      return;
    }
    dispatch2({
      isDragActive: false,
      type: "setDraggedFiles",
      draggedFiles: []
    });
    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = useCallback(function(files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function(file) {
      var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray2(_fileAccepted, 2), accepted = _fileAccepted2[0], acceptError = _fileAccepted2[1];
      var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray2(_fileMatchSize, 2), sizeMatch = _fileMatchSize2[0], sizeError = _fileMatchSize2[1];
      var customErrors = validator ? validator(file) : null;
      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];
        if (customErrors) {
          errors = errors.concat(customErrors);
        }
        fileRejections.push({
          file,
          errors: errors.filter(function(e2) {
            return e2;
          })
        });
      }
    });
    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      acceptedFiles.forEach(function(file) {
        fileRejections.push({
          file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }
    dispatch2({
      acceptedFiles,
      fileRejections,
      type: "setFiles"
    });
    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }
    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }
    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch2, multiple, accept, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        setFiles(files, event);
      });
    }
    dispatch2({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, noDragEventsBubbling]);
  var openFileDialog = useCallback(function() {
    if (window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI()) {
      dispatch2({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      var opts = {
        multiple,
        types: filePickerOptionsTypes(accept)
      };
      window.showOpenFilePicker(opts).then(function(handles) {
        return getFilesFromEvent(handles);
      }).then(function(files) {
        return setFiles(files, null);
      }).catch(function(e2) {
        return onFileDialogCancelCb(e2);
      }).finally(function() {
        return dispatch2({
          type: "closeDialog"
        });
      });
      return;
    }
    if (inputRef.current) {
      dispatch2({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch2, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, accept, multiple]);
  var onKeyDownCb = useCallback(function(event) {
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }
    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, inputRef, openFileDialog]);
  var onFocusCb = useCallback(function() {
    dispatch2({
      type: "focus"
    });
  }, []);
  var onBlurCb = useCallback(function() {
    dispatch2({
      type: "blur"
    });
  }, []);
  var onClickCb = useCallback(function() {
    if (noClick) {
      return;
    }
    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [inputRef, noClick, openFileDialog]);
  var composeHandler = function composeHandler2(fn) {
    return disabled ? null : fn;
  };
  var composeKeyboardHandler = function composeKeyboardHandler2(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };
  var composeDragHandler = function composeDragHandler2(fn) {
    return noDrag ? null : composeHandler(fn);
  };
  var stopPropagation = function stopPropagation2(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };
  var getRootProps = useMemo(function() {
    return function() {
      var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$refKey = _ref2.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, role = _ref2.role, onKeyDown = _ref2.onKeyDown, onFocus = _ref2.onFocus, onBlur = _ref2.onBlur, onClick = _ref2.onClick, onDragEnter2 = _ref2.onDragEnter, onDragOver2 = _ref2.onDragOver, onDragLeave2 = _ref2.onDragLeave, onDrop2 = _ref2.onDrop, rest = _objectWithoutProperties(_ref2, _excluded3);
      return _objectSpread2(_objectSpread2(_defineProperty2({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter2, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver2, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave2, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop2, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "button"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = useCallback(function(event) {
    event.stopPropagation();
  }, []);
  var getInputProps = useMemo(function() {
    return function() {
      var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, onChange = _ref3.onChange, onClick = _ref3.onClick, rest = _objectWithoutProperties(_ref3, _excluded4);
      var inputProps = _defineProperty2({
        accept,
        multiple,
        type: "file",
        style: {
          display: "none"
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        autoComplete: "off",
        tabIndex: -1
      }, refKey, inputRef);
      return _objectSpread2(_objectSpread2({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  var fileCount = draggedFiles.length;
  var isDragAccept = fileCount > 0 && allFilesAccepted({
    files: draggedFiles,
    accept,
    minSize,
    maxSize,
    multiple,
    maxFiles
  });
  var isDragReject = fileCount > 0 && !isDragAccept;
  return _objectSpread2(_objectSpread2({}, state), {}, {
    isDragAccept,
    isDragReject,
    isFocused: isFocused && !disabled,
    getRootProps,
    getInputProps,
    rootRef,
    inputRef,
    open: composeHandler(openFileDialog)
  });
}
function reducer(state, action) {
  switch (action.type) {
    case "focus":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isFocused: true
      });
    case "blur":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isFocused: false
      });
    case "openDialog":
      return _objectSpread2(_objectSpread2({}, initialState), {}, {
        isFileDialogActive: true
      });
    case "closeDialog":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isFileDialogActive: false
      });
    case "setDraggedFiles":
      var isDragActive = action.isDragActive, draggedFiles = action.draggedFiles;
      return _objectSpread2(_objectSpread2({}, state), {}, {
        draggedFiles,
        isDragActive
      });
    case "setFiles":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });
    case "reset":
      return _objectSpread2({}, initialState);
    default:
      return state;
  }
}
function noop2() {
}

// node_modules/@supabase/supabase-js/dist/module/lib/version.js
var version = "1.33.3";

// node_modules/@supabase/supabase-js/dist/module/lib/constants.js
var DEFAULT_HEADERS = { "X-Client-Info": `supabase-js/${version}` };
var STORAGE_KEY = "supabase.auth.token";

// node_modules/@supabase/supabase-js/dist/module/lib/helpers.js
function stripTrailingSlash(url) {
  return url.replace(/\/$/, "");
}
var isBrowser = () => typeof window !== "undefined";

// node_modules/@supabase/gotrue-js/dist/module/lib/fetch.js
var __awaiter4 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var _getErrorMessage = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
var handleError = (error, reject) => {
  if (typeof error.json !== "function") {
    return reject(error);
  }
  error.json().then((err) => {
    return reject({
      message: _getErrorMessage(err),
      status: (error === null || error === void 0 ? void 0 : error.status) || 500
    });
  });
};
var _getRequestParams = (method, options, body) => {
  const params = { method, headers: (options === null || options === void 0 ? void 0 : options.headers) || {} };
  if (method === "GET") {
    return params;
  }
  params.headers = Object.assign({ "Content-Type": "text/plain;charset=UTF-8" }, options === null || options === void 0 ? void 0 : options.headers);
  params.body = JSON.stringify(body);
  return params;
};
function _handleRequest(fetcher, method, url, options, body) {
  return __awaiter4(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
      fetcher(url, _getRequestParams(method, options, body)).then((result) => {
        if (!result.ok)
          throw result;
        if (options === null || options === void 0 ? void 0 : options.noResolveJson)
          return resolve;
        return result.json();
      }).then((data) => resolve(data)).catch((error) => handleError(error, reject));
    });
  });
}
function get(fetcher, url, options) {
  return __awaiter4(this, void 0, void 0, function* () {
    return _handleRequest(fetcher, "GET", url, options);
  });
}
function post(fetcher, url, body, options) {
  return __awaiter4(this, void 0, void 0, function* () {
    return _handleRequest(fetcher, "POST", url, options, body);
  });
}
function put(fetcher, url, body, options) {
  return __awaiter4(this, void 0, void 0, function* () {
    return _handleRequest(fetcher, "PUT", url, options, body);
  });
}
function remove2(fetcher, url, body, options) {
  return __awaiter4(this, void 0, void 0, function* () {
    return _handleRequest(fetcher, "DELETE", url, options, body);
  });
}

// node_modules/@supabase/gotrue-js/dist/module/lib/version.js
var version2 = "1.22.12";

// node_modules/@supabase/gotrue-js/dist/module/lib/constants.js
var GOTRUE_URL = "http://localhost:9999";
var DEFAULT_HEADERS2 = { "X-Client-Info": `gotrue-js/${version2}` };
var EXPIRY_MARGIN = 60 * 1e3;
var STORAGE_KEY2 = "supabase.auth.token";
var COOKIE_OPTIONS = {
  name: "sb",
  lifetime: 60 * 60 * 8,
  domain: "",
  path: "/",
  sameSite: "lax"
};

// node_modules/@supabase/gotrue-js/dist/module/lib/cookies.js
function serialize2(name, val, options) {
  const opt = options || {};
  const enc = encodeURIComponent;
  const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + value;
  if (opt.maxAge != null) {
    const maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function isSecureEnvironment(req) {
  if (!req || !req.headers || !req.headers.host) {
    throw new Error('The "host" request header is not available');
  }
  const host = req.headers.host.indexOf(":") > -1 && req.headers.host.split(":")[0] || req.headers.host;
  if (["localhost", "127.0.0.1"].indexOf(host) > -1 || host.endsWith(".local")) {
    return false;
  }
  return true;
}
function serializeCookie(cookie, secure) {
  var _a, _b, _c;
  return serialize2(cookie.name, cookie.value, {
    maxAge: cookie.maxAge,
    expires: new Date(Date.now() + cookie.maxAge * 1e3),
    httpOnly: true,
    secure,
    path: (_a = cookie.path) !== null && _a !== void 0 ? _a : "/",
    domain: (_b = cookie.domain) !== null && _b !== void 0 ? _b : "",
    sameSite: (_c = cookie.sameSite) !== null && _c !== void 0 ? _c : "lax"
  });
}
function getCookieString(req, res, cookies) {
  const strCookies = cookies.map((c2) => serializeCookie(c2, isSecureEnvironment(req)));
  const previousCookies = res.getHeader("Set-Cookie");
  if (previousCookies) {
    if (previousCookies instanceof Array) {
      Array.prototype.push.apply(strCookies, previousCookies);
    } else if (typeof previousCookies === "string") {
      strCookies.push(previousCookies);
    }
  }
  return strCookies;
}
function setCookies(req, res, cookies) {
  res.setHeader("Set-Cookie", getCookieString(req, res, cookies));
}

// node_modules/@supabase/gotrue-js/dist/module/lib/helpers.js
var import_cross_fetch = __toModule(require_browser_ponyfill());
function expiresAt(expiresIn) {
  const timeNow = Math.round(Date.now() / 1e3);
  return timeNow + expiresIn;
}
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c2) {
    const r2 = Math.random() * 16 | 0, v2 = c2 == "x" ? r2 : r2 & 3 | 8;
    return v2.toString(16);
  });
}
var isBrowser2 = () => typeof window !== "undefined";
function getParameterByName(name, url) {
  var _a;
  if (!url)
    url = ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.href) || "";
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
  if (!results)
    return null;
  if (!results[2])
    return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var resolveFetch = (customFetch) => {
  let _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else if (typeof fetch === "undefined") {
    _fetch = import_cross_fetch.default;
  } else {
    _fetch = fetch;
  }
  return (...args) => _fetch(...args);
};

// node_modules/@supabase/gotrue-js/dist/module/GoTrueApi.js
var __awaiter5 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var GoTrueApi = class {
  constructor({ url = "", headers = {}, cookieOptions, fetch: fetch2 }) {
    this.url = url;
    this.headers = headers;
    this.cookieOptions = Object.assign(Object.assign({}, COOKIE_OPTIONS), cookieOptions);
    this.fetch = resolveFetch(fetch2);
  }
  _createRequestHeaders(jwt) {
    const headers = Object.assign({}, this.headers);
    headers["Authorization"] = `Bearer ${jwt}`;
    return headers;
  }
  cookieName() {
    var _a;
    return (_a = this.cookieOptions.name) !== null && _a !== void 0 ? _a : "";
  }
  getUrlForProvider(provider, options) {
    const urlParams = [`provider=${encodeURIComponent(provider)}`];
    if (options === null || options === void 0 ? void 0 : options.redirectTo) {
      urlParams.push(`redirect_to=${encodeURIComponent(options.redirectTo)}`);
    }
    if (options === null || options === void 0 ? void 0 : options.scopes) {
      urlParams.push(`scopes=${encodeURIComponent(options.scopes)}`);
    }
    return `${this.url}/authorize?${urlParams.join("&")}`;
  }
  signUpWithEmail(email, password, options = {}) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const headers = Object.assign({}, this.headers);
        let queryString = "";
        if (options.redirectTo) {
          queryString = "?redirect_to=" + encodeURIComponent(options.redirectTo);
        }
        const data = yield post(this.fetch, `${this.url}/signup${queryString}`, {
          email,
          password,
          data: options.data,
          gotrue_meta_security: { hcaptcha_token: options.captchaToken }
        }, { headers });
        const session = Object.assign({}, data);
        if (session.expires_in)
          session.expires_at = expiresAt(data.expires_in);
        return { data: session, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  signInWithEmail(email, password, options = {}) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const headers = Object.assign({}, this.headers);
        let queryString = "?grant_type=password";
        if (options.redirectTo) {
          queryString += "&redirect_to=" + encodeURIComponent(options.redirectTo);
        }
        const data = yield post(this.fetch, `${this.url}/token${queryString}`, { email, password }, { headers });
        const session = Object.assign({}, data);
        if (session.expires_in)
          session.expires_at = expiresAt(data.expires_in);
        return { data: session, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  signUpWithPhone(phone, password, options = {}) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const headers = Object.assign({}, this.headers);
        const data = yield post(this.fetch, `${this.url}/signup`, {
          phone,
          password,
          data: options.data,
          gotrue_meta_security: { hcaptcha_token: options.captchaToken }
        }, { headers });
        const session = Object.assign({}, data);
        if (session.expires_in)
          session.expires_at = expiresAt(data.expires_in);
        return { data: session, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  signInWithPhone(phone, password) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const headers = Object.assign({}, this.headers);
        const queryString = "?grant_type=password";
        const data = yield post(this.fetch, `${this.url}/token${queryString}`, { phone, password }, { headers });
        const session = Object.assign({}, data);
        if (session.expires_in)
          session.expires_at = expiresAt(data.expires_in);
        return { data: session, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  signInWithOpenIDConnect({ id_token, nonce, client_id, issuer, provider }) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const headers = Object.assign({}, this.headers);
        const queryString = "?grant_type=id_token";
        const data = yield post(this.fetch, `${this.url}/token${queryString}`, { id_token, nonce, client_id, issuer, provider }, { headers });
        const session = Object.assign({}, data);
        if (session.expires_in)
          session.expires_at = expiresAt(data.expires_in);
        return { data: session, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  sendMagicLinkEmail(email, options = {}) {
    var _a;
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const headers = Object.assign({}, this.headers);
        let queryString = "";
        if (options.redirectTo) {
          queryString += "?redirect_to=" + encodeURIComponent(options.redirectTo);
        }
        const shouldCreateUser = (_a = options.shouldCreateUser) !== null && _a !== void 0 ? _a : true;
        const data = yield post(this.fetch, `${this.url}/otp${queryString}`, {
          email,
          create_user: shouldCreateUser,
          gotrue_meta_security: { hcaptcha_token: options.captchaToken }
        }, { headers });
        return { data, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  sendMobileOTP(phone, options = {}) {
    var _a;
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const shouldCreateUser = (_a = options.shouldCreateUser) !== null && _a !== void 0 ? _a : true;
        const headers = Object.assign({}, this.headers);
        const data = yield post(this.fetch, `${this.url}/otp`, {
          phone,
          create_user: shouldCreateUser,
          gotrue_meta_security: { hcaptcha_token: options.captchaToken }
        }, { headers });
        return { data, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  signOut(jwt) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        yield post(this.fetch, `${this.url}/logout`, {}, { headers: this._createRequestHeaders(jwt), noResolveJson: true });
        return { error: null };
      } catch (e2) {
        return { error: e2 };
      }
    });
  }
  verifyMobileOTP(phone, token, options = {}) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const headers = Object.assign({}, this.headers);
        const data = yield post(this.fetch, `${this.url}/verify`, { phone, token, type: "sms", redirect_to: options.redirectTo }, { headers });
        const session = Object.assign({}, data);
        if (session.expires_in)
          session.expires_at = expiresAt(data.expires_in);
        return { data: session, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  verifyOTP({ email, phone, token, type = "sms" }, options = {}) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const headers = Object.assign({}, this.headers);
        const data = yield post(this.fetch, `${this.url}/verify`, { email, phone, token, type, redirect_to: options.redirectTo }, { headers });
        const session = Object.assign({}, data);
        if (session.expires_in)
          session.expires_at = expiresAt(data.expires_in);
        return { data: session, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  inviteUserByEmail(email, options = {}) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const headers = Object.assign({}, this.headers);
        let queryString = "";
        if (options.redirectTo) {
          queryString += "?redirect_to=" + encodeURIComponent(options.redirectTo);
        }
        const data = yield post(this.fetch, `${this.url}/invite${queryString}`, { email, data: options.data }, { headers });
        return { data, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  resetPasswordForEmail(email, options = {}) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const headers = Object.assign({}, this.headers);
        let queryString = "";
        if (options.redirectTo) {
          queryString += "?redirect_to=" + encodeURIComponent(options.redirectTo);
        }
        const data = yield post(this.fetch, `${this.url}/recover${queryString}`, { email, gotrue_meta_security: { hcaptcha_token: options.captchaToken } }, { headers });
        return { data, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  refreshAccessToken(refreshToken) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const data = yield post(this.fetch, `${this.url}/token?grant_type=refresh_token`, { refresh_token: refreshToken }, { headers: this.headers });
        const session = Object.assign({}, data);
        if (session.expires_in)
          session.expires_at = expiresAt(data.expires_in);
        return { data: session, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  setAuthCookie(req, res) {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method Not Allowed");
    }
    const { event, session } = req.body;
    if (!event)
      throw new Error("Auth event missing!");
    if (event === "SIGNED_IN") {
      if (!session)
        throw new Error("Auth session missing!");
      setCookies(req, res, [
        { key: "access-token", value: session.access_token },
        { key: "refresh-token", value: session.refresh_token }
      ].map((token) => {
        var _a;
        return {
          name: `${this.cookieName()}-${token.key}`,
          value: token.value,
          domain: this.cookieOptions.domain,
          maxAge: (_a = this.cookieOptions.lifetime) !== null && _a !== void 0 ? _a : 0,
          path: this.cookieOptions.path,
          sameSite: this.cookieOptions.sameSite
        };
      }));
    }
    if (event === "SIGNED_OUT") {
      setCookies(req, res, ["access-token", "refresh-token"].map((key) => ({
        name: `${this.cookieName()}-${key}`,
        value: "",
        maxAge: -1
      })));
    }
    res.status(200).json({});
  }
  deleteAuthCookie(req, res, { redirectTo = "/" }) {
    setCookies(req, res, ["access-token", "refresh-token"].map((key) => ({
      name: `${this.cookieName()}-${key}`,
      value: "",
      maxAge: -1
    })));
    return res.redirect(307, redirectTo);
  }
  getAuthCookieString(req, res) {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method Not Allowed");
    }
    const { event, session } = req.body;
    if (!event)
      throw new Error("Auth event missing!");
    if (event === "SIGNED_IN") {
      if (!session)
        throw new Error("Auth session missing!");
      return getCookieString(req, res, [
        { key: "access-token", value: session.access_token },
        { key: "refresh-token", value: session.refresh_token }
      ].map((token) => {
        var _a;
        return {
          name: `${this.cookieName()}-${token.key}`,
          value: token.value,
          domain: this.cookieOptions.domain,
          maxAge: (_a = this.cookieOptions.lifetime) !== null && _a !== void 0 ? _a : 0,
          path: this.cookieOptions.path,
          sameSite: this.cookieOptions.sameSite
        };
      }));
    }
    if (event === "SIGNED_OUT") {
      return getCookieString(req, res, ["access-token", "refresh-token"].map((key) => ({
        name: `${this.cookieName()}-${key}`,
        value: "",
        maxAge: -1
      })));
    }
    return res.getHeader("Set-Cookie");
  }
  generateLink(type, email, options = {}) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const data = yield post(this.fetch, `${this.url}/admin/generate_link`, {
          type,
          email,
          password: options.password,
          data: options.data,
          redirect_to: options.redirectTo
        }, { headers: this.headers });
        return { data, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  createUser(attributes) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const data = yield post(this.fetch, `${this.url}/admin/users`, attributes, {
          headers: this.headers
        });
        return { user: data, data, error: null };
      } catch (e2) {
        return { user: null, data: null, error: e2 };
      }
    });
  }
  listUsers() {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const data = yield get(this.fetch, `${this.url}/admin/users`, {
          headers: this.headers
        });
        return { data: data.users, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  getUserById(uid) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const data = yield get(this.fetch, `${this.url}/admin/users/${uid}`, {
          headers: this.headers
        });
        return { data, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  getUserByCookie(req, res) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        if (!req.cookies) {
          throw new Error("Not able to parse cookies! When using Express make sure the cookie-parser middleware is in use!");
        }
        const access_token = req.cookies[`${this.cookieName()}-access-token`];
        const refresh_token = req.cookies[`${this.cookieName()}-refresh-token`];
        if (!access_token) {
          throw new Error("No cookie found!");
        }
        const { user, error: getUserError } = yield this.getUser(access_token);
        if (getUserError) {
          if (!refresh_token)
            throw new Error("No refresh_token cookie found!");
          if (!res)
            throw new Error("You need to pass the res object to automatically refresh the session!");
          const { data, error } = yield this.refreshAccessToken(refresh_token);
          if (error) {
            throw error;
          } else if (data) {
            setCookies(req, res, [
              { key: "access-token", value: data.access_token },
              { key: "refresh-token", value: data.refresh_token }
            ].map((token) => {
              var _a;
              return {
                name: `${this.cookieName()}-${token.key}`,
                value: token.value,
                domain: this.cookieOptions.domain,
                maxAge: (_a = this.cookieOptions.lifetime) !== null && _a !== void 0 ? _a : 0,
                path: this.cookieOptions.path,
                sameSite: this.cookieOptions.sameSite
              };
            }));
            return { token: data.access_token, user: data.user, data: data.user, error: null };
          }
        }
        return { token: access_token, user, data: user, error: null };
      } catch (e2) {
        return { token: null, user: null, data: null, error: e2 };
      }
    });
  }
  updateUserById(uid, attributes) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        this;
        const data = yield put(this.fetch, `${this.url}/admin/users/${uid}`, attributes, {
          headers: this.headers
        });
        return { user: data, data, error: null };
      } catch (e2) {
        return { user: null, data: null, error: e2 };
      }
    });
  }
  deleteUser(uid) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const data = yield remove2(this.fetch, `${this.url}/admin/users/${uid}`, {}, {
          headers: this.headers
        });
        return { user: data, data, error: null };
      } catch (e2) {
        return { user: null, data: null, error: e2 };
      }
    });
  }
  getUser(jwt) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const data = yield get(this.fetch, `${this.url}/user`, {
          headers: this._createRequestHeaders(jwt)
        });
        return { user: data, data, error: null };
      } catch (e2) {
        return { user: null, data: null, error: e2 };
      }
    });
  }
  updateUser(jwt, attributes) {
    return __awaiter5(this, void 0, void 0, function* () {
      try {
        const data = yield put(this.fetch, `${this.url}/user`, attributes, {
          headers: this._createRequestHeaders(jwt)
        });
        return { user: data, data, error: null };
      } catch (e2) {
        return { user: null, data: null, error: e2 };
      }
    });
  }
};

// node_modules/@supabase/gotrue-js/dist/module/lib/polyfills.js
function polyfillGlobalThis() {
  if (typeof globalThis === "object")
    return;
  try {
    Object.defineProperty(Object.prototype, "__magic__", {
      get: function() {
        return this;
      },
      configurable: true
    });
    __magic__.globalThis = __magic__;
    delete Object.prototype.__magic__;
  } catch (e2) {
    if (typeof self !== "undefined") {
      self.globalThis = self;
    }
  }
}

// node_modules/@supabase/gotrue-js/dist/module/GoTrueClient.js
var __awaiter6 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
polyfillGlobalThis();
var DEFAULT_OPTIONS = {
  url: GOTRUE_URL,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  multiTab: true,
  headers: DEFAULT_HEADERS2
};
var GoTrueClient = class {
  constructor(options) {
    this.stateChangeEmitters = new Map();
    const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
    this.currentUser = null;
    this.currentSession = null;
    this.autoRefreshToken = settings.autoRefreshToken;
    this.persistSession = settings.persistSession;
    this.multiTab = settings.multiTab;
    this.localStorage = settings.localStorage || globalThis.localStorage;
    this.api = new GoTrueApi({
      url: settings.url,
      headers: settings.headers,
      cookieOptions: settings.cookieOptions,
      fetch: settings.fetch
    });
    this._recoverSession();
    this._recoverAndRefresh();
    this._listenForMultiTabEvents();
    if (settings.detectSessionInUrl && isBrowser2() && !!getParameterByName("access_token")) {
      this.getSessionFromUrl({ storeSession: true }).then(({ error }) => {
        if (error) {
          console.error("Error getting session from URL.", error);
        }
      });
    }
  }
  signUp({ email, password, phone }, options = {}) {
    return __awaiter6(this, void 0, void 0, function* () {
      try {
        this._removeSession();
        const { data, error } = phone && password ? yield this.api.signUpWithPhone(phone, password, {
          data: options.data,
          captchaToken: options.captchaToken
        }) : yield this.api.signUpWithEmail(email, password, {
          redirectTo: options.redirectTo,
          data: options.data,
          captchaToken: options.captchaToken
        });
        if (error) {
          throw error;
        }
        if (!data) {
          throw "An error occurred on sign up.";
        }
        let session = null;
        let user = null;
        if (data.access_token) {
          session = data;
          user = session.user;
          this._saveSession(session);
          this._notifyAllSubscribers("SIGNED_IN");
        }
        if (data.id) {
          user = data;
        }
        return { user, session, error: null };
      } catch (e2) {
        return { user: null, session: null, error: e2 };
      }
    });
  }
  signIn({ email, phone, password, refreshToken, provider, oidc }, options = {}) {
    return __awaiter6(this, void 0, void 0, function* () {
      try {
        this._removeSession();
        if (email && !password) {
          const { error } = yield this.api.sendMagicLinkEmail(email, {
            redirectTo: options.redirectTo,
            shouldCreateUser: options.shouldCreateUser,
            captchaToken: options.captchaToken
          });
          return { user: null, session: null, error };
        }
        if (email && password) {
          return this._handleEmailSignIn(email, password, {
            redirectTo: options.redirectTo
          });
        }
        if (phone && !password) {
          const { error } = yield this.api.sendMobileOTP(phone, {
            shouldCreateUser: options.shouldCreateUser,
            captchaToken: options.captchaToken
          });
          return { user: null, session: null, error };
        }
        if (phone && password) {
          return this._handlePhoneSignIn(phone, password);
        }
        if (refreshToken) {
          const { error } = yield this._callRefreshToken(refreshToken);
          if (error)
            throw error;
          return {
            user: this.currentUser,
            session: this.currentSession,
            error: null
          };
        }
        if (provider) {
          return this._handleProviderSignIn(provider, {
            redirectTo: options.redirectTo,
            scopes: options.scopes
          });
        }
        if (oidc) {
          return this._handleOpenIDConnectSignIn(oidc);
        }
        throw new Error(`You must provide either an email, phone number, a third-party provider or OpenID Connect.`);
      } catch (e2) {
        return { user: null, session: null, error: e2 };
      }
    });
  }
  verifyOTP(params, options = {}) {
    return __awaiter6(this, void 0, void 0, function* () {
      try {
        this._removeSession();
        const { data, error } = yield this.api.verifyOTP(params, options);
        if (error) {
          throw error;
        }
        if (!data) {
          throw "An error occurred on token verification.";
        }
        let session = null;
        let user = null;
        if (data.access_token) {
          session = data;
          user = session.user;
          this._saveSession(session);
          this._notifyAllSubscribers("SIGNED_IN");
        }
        if (data.id) {
          user = data;
        }
        return { user, session, error: null };
      } catch (e2) {
        return { user: null, session: null, error: e2 };
      }
    });
  }
  user() {
    return this.currentUser;
  }
  session() {
    return this.currentSession;
  }
  refreshSession() {
    var _a;
    return __awaiter6(this, void 0, void 0, function* () {
      try {
        if (!((_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token))
          throw new Error("Not logged in.");
        const { error } = yield this._callRefreshToken();
        if (error)
          throw error;
        return { data: this.currentSession, user: this.currentUser, error: null };
      } catch (e2) {
        return { data: null, user: null, error: e2 };
      }
    });
  }
  update(attributes) {
    var _a;
    return __awaiter6(this, void 0, void 0, function* () {
      try {
        if (!((_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token))
          throw new Error("Not logged in.");
        const { user, error } = yield this.api.updateUser(this.currentSession.access_token, attributes);
        if (error)
          throw error;
        if (!user)
          throw Error("Invalid user data.");
        const session = Object.assign(Object.assign({}, this.currentSession), { user });
        this._saveSession(session);
        this._notifyAllSubscribers("USER_UPDATED");
        return { data: user, user, error: null };
      } catch (e2) {
        return { data: null, user: null, error: e2 };
      }
    });
  }
  setSession(refresh_token) {
    return __awaiter6(this, void 0, void 0, function* () {
      try {
        if (!refresh_token) {
          throw new Error("No current session.");
        }
        const { data, error } = yield this.api.refreshAccessToken(refresh_token);
        if (error) {
          return { session: null, error };
        }
        this._saveSession(data);
        this._notifyAllSubscribers("SIGNED_IN");
        return { session: data, error: null };
      } catch (e2) {
        return { error: e2, session: null };
      }
    });
  }
  setAuth(access_token) {
    this.currentSession = Object.assign(Object.assign({}, this.currentSession), { access_token, token_type: "bearer", user: this.user() });
    return this.currentSession;
  }
  getSessionFromUrl(options) {
    return __awaiter6(this, void 0, void 0, function* () {
      try {
        if (!isBrowser2())
          throw new Error("No browser detected.");
        const error_description = getParameterByName("error_description");
        if (error_description)
          throw new Error(error_description);
        const provider_token = getParameterByName("provider_token");
        const access_token = getParameterByName("access_token");
        if (!access_token)
          throw new Error("No access_token detected.");
        const expires_in = getParameterByName("expires_in");
        if (!expires_in)
          throw new Error("No expires_in detected.");
        const refresh_token = getParameterByName("refresh_token");
        if (!refresh_token)
          throw new Error("No refresh_token detected.");
        const token_type = getParameterByName("token_type");
        if (!token_type)
          throw new Error("No token_type detected.");
        const timeNow = Math.round(Date.now() / 1e3);
        const expires_at = timeNow + parseInt(expires_in);
        const { user, error } = yield this.api.getUser(access_token);
        if (error)
          throw error;
        const session = {
          provider_token,
          access_token,
          expires_in: parseInt(expires_in),
          expires_at,
          refresh_token,
          token_type,
          user
        };
        if (options === null || options === void 0 ? void 0 : options.storeSession) {
          this._saveSession(session);
          const recoveryMode = getParameterByName("type");
          this._notifyAllSubscribers("SIGNED_IN");
          if (recoveryMode === "recovery") {
            this._notifyAllSubscribers("PASSWORD_RECOVERY");
          }
        }
        window.location.hash = "";
        return { data: session, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  signOut() {
    var _a;
    return __awaiter6(this, void 0, void 0, function* () {
      const accessToken = (_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token;
      this._removeSession();
      this._notifyAllSubscribers("SIGNED_OUT");
      if (accessToken) {
        const { error } = yield this.api.signOut(accessToken);
        if (error)
          return { error };
      }
      return { error: null };
    });
  }
  onAuthStateChange(callback) {
    try {
      const id = uuid();
      const subscription = {
        id,
        callback,
        unsubscribe: () => {
          this.stateChangeEmitters.delete(id);
        }
      };
      this.stateChangeEmitters.set(id, subscription);
      return { data: subscription, error: null };
    } catch (e2) {
      return { data: null, error: e2 };
    }
  }
  _handleEmailSignIn(email, password, options = {}) {
    var _a, _b;
    return __awaiter6(this, void 0, void 0, function* () {
      try {
        const { data, error } = yield this.api.signInWithEmail(email, password, {
          redirectTo: options.redirectTo
        });
        if (error || !data)
          return { data: null, user: null, session: null, error };
        if (((_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.confirmed_at) || ((_b = data === null || data === void 0 ? void 0 : data.user) === null || _b === void 0 ? void 0 : _b.email_confirmed_at)) {
          this._saveSession(data);
          this._notifyAllSubscribers("SIGNED_IN");
        }
        return { data, user: data.user, session: data, error: null };
      } catch (e2) {
        return { data: null, user: null, session: null, error: e2 };
      }
    });
  }
  _handlePhoneSignIn(phone, password) {
    var _a;
    return __awaiter6(this, void 0, void 0, function* () {
      try {
        const { data, error } = yield this.api.signInWithPhone(phone, password);
        if (error || !data)
          return { data: null, user: null, session: null, error };
        if ((_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.phone_confirmed_at) {
          this._saveSession(data);
          this._notifyAllSubscribers("SIGNED_IN");
        }
        return { data, user: data.user, session: data, error: null };
      } catch (e2) {
        return { data: null, user: null, session: null, error: e2 };
      }
    });
  }
  _handleProviderSignIn(provider, options = {}) {
    const url = this.api.getUrlForProvider(provider, {
      redirectTo: options.redirectTo,
      scopes: options.scopes
    });
    try {
      if (isBrowser2()) {
        window.location.href = url;
      }
      return { provider, url, data: null, session: null, user: null, error: null };
    } catch (e2) {
      if (url)
        return { provider, url, data: null, session: null, user: null, error: null };
      return { data: null, user: null, session: null, error: e2 };
    }
  }
  _handleOpenIDConnectSignIn({ id_token, nonce, client_id, issuer, provider }) {
    return __awaiter6(this, void 0, void 0, function* () {
      if (id_token && nonce && (client_id && issuer || provider)) {
        try {
          const { data, error } = yield this.api.signInWithOpenIDConnect({
            id_token,
            nonce,
            client_id,
            issuer,
            provider
          });
          if (error || !data)
            return { user: null, session: null, error };
          this._saveSession(data);
          this._notifyAllSubscribers("SIGNED_IN");
          return { user: data.user, session: data, error: null };
        } catch (e2) {
          return { user: null, session: null, error: e2 };
        }
      }
      throw new Error(`You must provide a OpenID Connect provider with your id token and nonce.`);
    });
  }
  _recoverSession() {
    var _a;
    try {
      const json = isBrowser2() && ((_a = this.localStorage) === null || _a === void 0 ? void 0 : _a.getItem(STORAGE_KEY2));
      if (!json || typeof json !== "string") {
        return null;
      }
      const data = JSON.parse(json);
      const { currentSession, expiresAt: expiresAt2 } = data;
      const timeNow = Math.round(Date.now() / 1e3);
      if (expiresAt2 >= timeNow && (currentSession === null || currentSession === void 0 ? void 0 : currentSession.user)) {
        this._saveSession(currentSession);
        this._notifyAllSubscribers("SIGNED_IN");
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  _recoverAndRefresh() {
    return __awaiter6(this, void 0, void 0, function* () {
      try {
        const json = isBrowser2() && (yield this.localStorage.getItem(STORAGE_KEY2));
        if (!json) {
          return null;
        }
        const data = JSON.parse(json);
        const { currentSession, expiresAt: expiresAt2 } = data;
        const timeNow = Math.round(Date.now() / 1e3);
        if (expiresAt2 < timeNow) {
          if (this.autoRefreshToken && currentSession.refresh_token) {
            const { error } = yield this._callRefreshToken(currentSession.refresh_token);
            if (error) {
              console.log(error.message);
              yield this._removeSession();
            }
          } else {
            this._removeSession();
          }
        } else if (!currentSession) {
          console.log("Current session is missing data.");
          this._removeSession();
        } else {
          this._saveSession(currentSession);
          this._notifyAllSubscribers("SIGNED_IN");
        }
      } catch (err) {
        console.error(err);
        return null;
      }
    });
  }
  _callRefreshToken(refresh_token) {
    var _a;
    if (refresh_token === void 0) {
      refresh_token = (_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.refresh_token;
    }
    return __awaiter6(this, void 0, void 0, function* () {
      try {
        if (!refresh_token) {
          throw new Error("No current session.");
        }
        const { data, error } = yield this.api.refreshAccessToken(refresh_token);
        if (error)
          throw error;
        if (!data)
          throw Error("Invalid session data.");
        this._saveSession(data);
        this._notifyAllSubscribers("TOKEN_REFRESHED");
        this._notifyAllSubscribers("SIGNED_IN");
        return { data, error: null };
      } catch (e2) {
        return { data: null, error: e2 };
      }
    });
  }
  _notifyAllSubscribers(event) {
    this.stateChangeEmitters.forEach((x2) => x2.callback(event, this.currentSession));
  }
  _saveSession(session) {
    this.currentSession = session;
    this.currentUser = session.user;
    const expiresAt2 = session.expires_at;
    if (expiresAt2) {
      const timeNow = Math.round(Date.now() / 1e3);
      const expiresIn = expiresAt2 - timeNow;
      const refreshDurationBeforeExpires = expiresIn > 60 ? 60 : 0.5;
      this._startAutoRefreshToken((expiresIn - refreshDurationBeforeExpires) * 1e3);
    }
    if (this.persistSession && session.expires_at) {
      this._persistSession(this.currentSession);
    }
  }
  _persistSession(currentSession) {
    const data = { currentSession, expiresAt: currentSession.expires_at };
    isBrowser2() && this.localStorage.setItem(STORAGE_KEY2, JSON.stringify(data));
  }
  _removeSession() {
    return __awaiter6(this, void 0, void 0, function* () {
      this.currentSession = null;
      this.currentUser = null;
      if (this.refreshTokenTimer)
        clearTimeout(this.refreshTokenTimer);
      isBrowser2() && (yield this.localStorage.removeItem(STORAGE_KEY2));
    });
  }
  _startAutoRefreshToken(value) {
    if (this.refreshTokenTimer)
      clearTimeout(this.refreshTokenTimer);
    if (value <= 0 || !this.autoRefreshToken)
      return;
    this.refreshTokenTimer = setTimeout(() => this._callRefreshToken(), value);
    if (typeof this.refreshTokenTimer.unref === "function")
      this.refreshTokenTimer.unref();
  }
  _listenForMultiTabEvents() {
    if (!this.multiTab || !isBrowser2() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) {
      return false;
    }
    try {
      window === null || window === void 0 ? void 0 : window.addEventListener("storage", (e2) => {
        var _a;
        if (e2.key === STORAGE_KEY2) {
          const newSession = JSON.parse(String(e2.newValue));
          if ((_a = newSession === null || newSession === void 0 ? void 0 : newSession.currentSession) === null || _a === void 0 ? void 0 : _a.access_token) {
            this._recoverAndRefresh();
            this._notifyAllSubscribers("SIGNED_IN");
          } else {
            this._removeSession();
            this._notifyAllSubscribers("SIGNED_OUT");
          }
        }
      });
    } catch (error) {
      console.error("_listenForMultiTabEvents", error);
    }
  }
};

// node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js
var SupabaseAuthClient = class extends GoTrueClient {
  constructor(options) {
    super(options);
  }
};

// node_modules/@supabase/postgrest-js/dist/module/lib/types.js
var import_cross_fetch2 = __toModule(require_browser_ponyfill());
var __awaiter7 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var PostgrestBuilder = class {
  constructor(builder) {
    Object.assign(this, builder);
    let _fetch;
    if (builder.fetch) {
      _fetch = builder.fetch;
    } else if (typeof fetch === "undefined") {
      _fetch = import_cross_fetch2.default;
    } else {
      _fetch = fetch;
    }
    this.fetch = (...args) => _fetch(...args);
    this.shouldThrowOnError = builder.shouldThrowOnError || false;
  }
  throwOnError(throwOnError) {
    if (throwOnError === null || throwOnError === void 0) {
      throwOnError = true;
    }
    this.shouldThrowOnError = throwOnError;
    return this;
  }
  then(onfulfilled, onrejected) {
    if (typeof this.schema === "undefined") {
    } else if (["GET", "HEAD"].includes(this.method)) {
      this.headers["Accept-Profile"] = this.schema;
    } else {
      this.headers["Content-Profile"] = this.schema;
    }
    if (this.method !== "GET" && this.method !== "HEAD") {
      this.headers["Content-Type"] = "application/json";
    }
    let res = this.fetch(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then((res2) => __awaiter7(this, void 0, void 0, function* () {
      var _a, _b, _c;
      let error = null;
      let data = null;
      let count = null;
      if (res2.ok) {
        const isReturnMinimal = (_a = this.headers["Prefer"]) === null || _a === void 0 ? void 0 : _a.split(",").includes("return=minimal");
        if (this.method !== "HEAD" && !isReturnMinimal) {
          const text = yield res2.text();
          if (!text) {
          } else if (this.headers["Accept"] === "text/csv") {
            data = text;
          } else {
            data = JSON.parse(text);
          }
        }
        const countHeader = (_b = this.headers["Prefer"]) === null || _b === void 0 ? void 0 : _b.match(/count=(exact|planned|estimated)/);
        const contentRange = (_c = res2.headers.get("content-range")) === null || _c === void 0 ? void 0 : _c.split("/");
        if (countHeader && contentRange && contentRange.length > 1) {
          count = parseInt(contentRange[1]);
        }
      } else {
        const body = yield res2.text();
        try {
          error = JSON.parse(body);
        } catch (_d) {
          error = {
            message: body
          };
        }
        if (error && this.shouldThrowOnError) {
          throw error;
        }
      }
      const postgrestResponse = {
        error,
        data,
        count,
        status: res2.status,
        statusText: res2.statusText,
        body: data
      };
      return postgrestResponse;
    }));
    if (!this.shouldThrowOnError) {
      res = res.catch((fetchError) => ({
        error: {
          message: `FetchError: ${fetchError.message}`,
          details: "",
          hint: "",
          code: fetchError.code || ""
        },
        data: null,
        body: null,
        count: null,
        status: 400,
        statusText: "Bad Request"
      }));
    }
    return res.then(onfulfilled, onrejected);
  }
};

// node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestTransformBuilder.js
var PostgrestTransformBuilder = class extends PostgrestBuilder {
  select(columns = "*") {
    let quoted = false;
    const cleanedColumns = columns.split("").map((c2) => {
      if (/\s/.test(c2) && !quoted) {
        return "";
      }
      if (c2 === '"') {
        quoted = !quoted;
      }
      return c2;
    }).join("");
    this.url.searchParams.set("select", cleanedColumns);
    return this;
  }
  order(column, { ascending = true, nullsFirst = false, foreignTable } = {}) {
    const key = typeof foreignTable === "undefined" ? "order" : `${foreignTable}.order`;
    const existingOrder = this.url.searchParams.get(key);
    this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ""}${column}.${ascending ? "asc" : "desc"}.${nullsFirst ? "nullsfirst" : "nullslast"}`);
    return this;
  }
  limit(count, { foreignTable } = {}) {
    const key = typeof foreignTable === "undefined" ? "limit" : `${foreignTable}.limit`;
    this.url.searchParams.set(key, `${count}`);
    return this;
  }
  range(from, to, { foreignTable } = {}) {
    const keyOffset = typeof foreignTable === "undefined" ? "offset" : `${foreignTable}.offset`;
    const keyLimit = typeof foreignTable === "undefined" ? "limit" : `${foreignTable}.limit`;
    this.url.searchParams.set(keyOffset, `${from}`);
    this.url.searchParams.set(keyLimit, `${to - from + 1}`);
    return this;
  }
  abortSignal(signal) {
    this.signal = signal;
    return this;
  }
  single() {
    this.headers["Accept"] = "application/vnd.pgrst.object+json";
    return this;
  }
  maybeSingle() {
    this.headers["Accept"] = "application/vnd.pgrst.object+json";
    const _this = new PostgrestTransformBuilder(this);
    _this.then = (onfulfilled, onrejected) => this.then((res) => {
      var _a, _b;
      if ((_b = (_a = res.error) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b.includes("Results contain 0 rows")) {
        return onfulfilled({
          error: null,
          data: null,
          count: res.count,
          status: 200,
          statusText: "OK",
          body: null
        });
      }
      return onfulfilled(res);
    }, onrejected);
    return _this;
  }
  csv() {
    this.headers["Accept"] = "text/csv";
    return this;
  }
};

// node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestFilterBuilder.js
var PostgrestFilterBuilder = class extends PostgrestTransformBuilder {
  constructor() {
    super(...arguments);
    this.cs = this.contains;
    this.cd = this.containedBy;
    this.sl = this.rangeLt;
    this.sr = this.rangeGt;
    this.nxl = this.rangeGte;
    this.nxr = this.rangeLte;
    this.adj = this.rangeAdjacent;
    this.ov = this.overlaps;
  }
  not(column, operator, value) {
    this.url.searchParams.append(`${column}`, `not.${operator}.${value}`);
    return this;
  }
  or(filters, { foreignTable } = {}) {
    const key = typeof foreignTable === "undefined" ? "or" : `${foreignTable}.or`;
    this.url.searchParams.append(key, `(${filters})`);
    return this;
  }
  eq(column, value) {
    this.url.searchParams.append(`${column}`, `eq.${value}`);
    return this;
  }
  neq(column, value) {
    this.url.searchParams.append(`${column}`, `neq.${value}`);
    return this;
  }
  gt(column, value) {
    this.url.searchParams.append(`${column}`, `gt.${value}`);
    return this;
  }
  gte(column, value) {
    this.url.searchParams.append(`${column}`, `gte.${value}`);
    return this;
  }
  lt(column, value) {
    this.url.searchParams.append(`${column}`, `lt.${value}`);
    return this;
  }
  lte(column, value) {
    this.url.searchParams.append(`${column}`, `lte.${value}`);
    return this;
  }
  like(column, pattern) {
    this.url.searchParams.append(`${column}`, `like.${pattern}`);
    return this;
  }
  ilike(column, pattern) {
    this.url.searchParams.append(`${column}`, `ilike.${pattern}`);
    return this;
  }
  is(column, value) {
    this.url.searchParams.append(`${column}`, `is.${value}`);
    return this;
  }
  in(column, values) {
    const cleanedValues = values.map((s2) => {
      if (typeof s2 === "string" && new RegExp("[,()]").test(s2))
        return `"${s2}"`;
      else
        return `${s2}`;
    }).join(",");
    this.url.searchParams.append(`${column}`, `in.(${cleanedValues})`);
    return this;
  }
  contains(column, value) {
    if (typeof value === "string") {
      this.url.searchParams.append(`${column}`, `cs.${value}`);
    } else if (Array.isArray(value)) {
      this.url.searchParams.append(`${column}`, `cs.{${value.join(",")}}`);
    } else {
      this.url.searchParams.append(`${column}`, `cs.${JSON.stringify(value)}`);
    }
    return this;
  }
  containedBy(column, value) {
    if (typeof value === "string") {
      this.url.searchParams.append(`${column}`, `cd.${value}`);
    } else if (Array.isArray(value)) {
      this.url.searchParams.append(`${column}`, `cd.{${value.join(",")}}`);
    } else {
      this.url.searchParams.append(`${column}`, `cd.${JSON.stringify(value)}`);
    }
    return this;
  }
  rangeLt(column, range) {
    this.url.searchParams.append(`${column}`, `sl.${range}`);
    return this;
  }
  rangeGt(column, range) {
    this.url.searchParams.append(`${column}`, `sr.${range}`);
    return this;
  }
  rangeGte(column, range) {
    this.url.searchParams.append(`${column}`, `nxl.${range}`);
    return this;
  }
  rangeLte(column, range) {
    this.url.searchParams.append(`${column}`, `nxr.${range}`);
    return this;
  }
  rangeAdjacent(column, range) {
    this.url.searchParams.append(`${column}`, `adj.${range}`);
    return this;
  }
  overlaps(column, value) {
    if (typeof value === "string") {
      this.url.searchParams.append(`${column}`, `ov.${value}`);
    } else {
      this.url.searchParams.append(`${column}`, `ov.{${value.join(",")}}`);
    }
    return this;
  }
  textSearch(column, query, { config, type = null } = {}) {
    let typePart = "";
    if (type === "plain") {
      typePart = "pl";
    } else if (type === "phrase") {
      typePart = "ph";
    } else if (type === "websearch") {
      typePart = "w";
    }
    const configPart = config === void 0 ? "" : `(${config})`;
    this.url.searchParams.append(`${column}`, `${typePart}fts${configPart}.${query}`);
    return this;
  }
  fts(column, query, { config } = {}) {
    const configPart = typeof config === "undefined" ? "" : `(${config})`;
    this.url.searchParams.append(`${column}`, `fts${configPart}.${query}`);
    return this;
  }
  plfts(column, query, { config } = {}) {
    const configPart = typeof config === "undefined" ? "" : `(${config})`;
    this.url.searchParams.append(`${column}`, `plfts${configPart}.${query}`);
    return this;
  }
  phfts(column, query, { config } = {}) {
    const configPart = typeof config === "undefined" ? "" : `(${config})`;
    this.url.searchParams.append(`${column}`, `phfts${configPart}.${query}`);
    return this;
  }
  wfts(column, query, { config } = {}) {
    const configPart = typeof config === "undefined" ? "" : `(${config})`;
    this.url.searchParams.append(`${column}`, `wfts${configPart}.${query}`);
    return this;
  }
  filter(column, operator, value) {
    this.url.searchParams.append(`${column}`, `${operator}.${value}`);
    return this;
  }
  match(query) {
    Object.keys(query).forEach((key) => {
      this.url.searchParams.append(`${key}`, `eq.${query[key]}`);
    });
    return this;
  }
};

// node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestQueryBuilder.js
var PostgrestQueryBuilder = class extends PostgrestBuilder {
  constructor(url, { headers = {}, schema, fetch: fetch2, shouldThrowOnError } = {}) {
    super({ fetch: fetch2, shouldThrowOnError });
    this.url = new URL(url);
    this.headers = Object.assign({}, headers);
    this.schema = schema;
  }
  select(columns = "*", { head = false, count = null } = {}) {
    this.method = "GET";
    let quoted = false;
    const cleanedColumns = columns.split("").map((c2) => {
      if (/\s/.test(c2) && !quoted) {
        return "";
      }
      if (c2 === '"') {
        quoted = !quoted;
      }
      return c2;
    }).join("");
    this.url.searchParams.set("select", cleanedColumns);
    if (count) {
      this.headers["Prefer"] = `count=${count}`;
    }
    if (head) {
      this.method = "HEAD";
    }
    return new PostgrestFilterBuilder(this);
  }
  insert(values, { upsert = false, onConflict, returning = "representation", count = null } = {}) {
    this.method = "POST";
    const prefersHeaders = [`return=${returning}`];
    if (upsert)
      prefersHeaders.push("resolution=merge-duplicates");
    if (upsert && onConflict !== void 0)
      this.url.searchParams.set("on_conflict", onConflict);
    this.body = values;
    if (count) {
      prefersHeaders.push(`count=${count}`);
    }
    if (this.headers["Prefer"]) {
      prefersHeaders.unshift(this.headers["Prefer"]);
    }
    this.headers["Prefer"] = prefersHeaders.join(",");
    if (Array.isArray(values)) {
      const columns = values.reduce((acc, x2) => acc.concat(Object.keys(x2)), []);
      if (columns.length > 0) {
        const uniqueColumns = [...new Set(columns)].map((column) => `"${column}"`);
        this.url.searchParams.set("columns", uniqueColumns.join(","));
      }
    }
    return new PostgrestFilterBuilder(this);
  }
  upsert(values, { onConflict, returning = "representation", count = null, ignoreDuplicates = false } = {}) {
    this.method = "POST";
    const prefersHeaders = [
      `resolution=${ignoreDuplicates ? "ignore" : "merge"}-duplicates`,
      `return=${returning}`
    ];
    if (onConflict !== void 0)
      this.url.searchParams.set("on_conflict", onConflict);
    this.body = values;
    if (count) {
      prefersHeaders.push(`count=${count}`);
    }
    if (this.headers["Prefer"]) {
      prefersHeaders.unshift(this.headers["Prefer"]);
    }
    this.headers["Prefer"] = prefersHeaders.join(",");
    return new PostgrestFilterBuilder(this);
  }
  update(values, { returning = "representation", count = null } = {}) {
    this.method = "PATCH";
    const prefersHeaders = [`return=${returning}`];
    this.body = values;
    if (count) {
      prefersHeaders.push(`count=${count}`);
    }
    if (this.headers["Prefer"]) {
      prefersHeaders.unshift(this.headers["Prefer"]);
    }
    this.headers["Prefer"] = prefersHeaders.join(",");
    return new PostgrestFilterBuilder(this);
  }
  delete({ returning = "representation", count = null } = {}) {
    this.method = "DELETE";
    const prefersHeaders = [`return=${returning}`];
    if (count) {
      prefersHeaders.push(`count=${count}`);
    }
    if (this.headers["Prefer"]) {
      prefersHeaders.unshift(this.headers["Prefer"]);
    }
    this.headers["Prefer"] = prefersHeaders.join(",");
    return new PostgrestFilterBuilder(this);
  }
};

// node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestRpcBuilder.js
var PostgrestRpcBuilder = class extends PostgrestBuilder {
  constructor(url, { headers = {}, schema, fetch: fetch2, shouldThrowOnError } = {}) {
    super({ fetch: fetch2, shouldThrowOnError });
    this.url = new URL(url);
    this.headers = Object.assign({}, headers);
    this.schema = schema;
  }
  rpc(params, { head = false, count = null } = {}) {
    if (head) {
      this.method = "HEAD";
      if (params) {
        Object.entries(params).forEach(([name, value]) => {
          this.url.searchParams.append(name, value);
        });
      }
    } else {
      this.method = "POST";
      this.body = params;
    }
    if (count) {
      if (this.headers["Prefer"] !== void 0)
        this.headers["Prefer"] += `,count=${count}`;
      else
        this.headers["Prefer"] = `count=${count}`;
    }
    return new PostgrestFilterBuilder(this);
  }
};

// node_modules/@supabase/postgrest-js/dist/module/lib/version.js
var version3 = "0.37.2";

// node_modules/@supabase/postgrest-js/dist/module/lib/constants.js
var DEFAULT_HEADERS3 = { "X-Client-Info": `postgrest-js/${version3}` };

// node_modules/@supabase/postgrest-js/dist/module/PostgrestClient.js
var PostgrestClient = class {
  constructor(url, { headers = {}, schema, fetch: fetch2, throwOnError } = {}) {
    this.url = url;
    this.headers = Object.assign(Object.assign({}, DEFAULT_HEADERS3), headers);
    this.schema = schema;
    this.fetch = fetch2;
    this.shouldThrowOnError = throwOnError;
  }
  auth(token) {
    this.headers["Authorization"] = `Bearer ${token}`;
    return this;
  }
  from(table) {
    const url = `${this.url}/${table}`;
    return new PostgrestQueryBuilder(url, {
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      shouldThrowOnError: this.shouldThrowOnError
    });
  }
  rpc(fn, params, { head = false, count = null } = {}) {
    const url = `${this.url}/rpc/${fn}`;
    return new PostgrestRpcBuilder(url, {
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      shouldThrowOnError: this.shouldThrowOnError
    }).rpc(params, { head, count });
  }
};

// node_modules/@supabase/realtime-js/dist/module/lib/transformers.js
var transformers_exports = {};
__export(transformers_exports, {
  PostgresTypes: () => PostgresTypes,
  convertCell: () => convertCell,
  convertChangeData: () => convertChangeData,
  convertColumn: () => convertColumn,
  toArray: () => toArray,
  toBoolean: () => toBoolean,
  toJson: () => toJson,
  toNumber: () => toNumber,
  toTimestampString: () => toTimestampString
});
var PostgresTypes;
(function(PostgresTypes2) {
  PostgresTypes2["abstime"] = "abstime";
  PostgresTypes2["bool"] = "bool";
  PostgresTypes2["date"] = "date";
  PostgresTypes2["daterange"] = "daterange";
  PostgresTypes2["float4"] = "float4";
  PostgresTypes2["float8"] = "float8";
  PostgresTypes2["int2"] = "int2";
  PostgresTypes2["int4"] = "int4";
  PostgresTypes2["int4range"] = "int4range";
  PostgresTypes2["int8"] = "int8";
  PostgresTypes2["int8range"] = "int8range";
  PostgresTypes2["json"] = "json";
  PostgresTypes2["jsonb"] = "jsonb";
  PostgresTypes2["money"] = "money";
  PostgresTypes2["numeric"] = "numeric";
  PostgresTypes2["oid"] = "oid";
  PostgresTypes2["reltime"] = "reltime";
  PostgresTypes2["text"] = "text";
  PostgresTypes2["time"] = "time";
  PostgresTypes2["timestamp"] = "timestamp";
  PostgresTypes2["timestamptz"] = "timestamptz";
  PostgresTypes2["timetz"] = "timetz";
  PostgresTypes2["tsrange"] = "tsrange";
  PostgresTypes2["tstzrange"] = "tstzrange";
})(PostgresTypes || (PostgresTypes = {}));
var convertChangeData = (columns, record, options = {}) => {
  var _a;
  const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
  return Object.keys(record).reduce((acc, rec_key) => {
    acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
    return acc;
  }, {});
};
var convertColumn = (columnName, columns, record, skipTypes) => {
  const column = columns.find((x2) => x2.name === columnName);
  const colType = column === null || column === void 0 ? void 0 : column.type;
  const value = record[columnName];
  if (colType && !skipTypes.includes(colType)) {
    return convertCell(colType, value);
  }
  return noop3(value);
};
var convertCell = (type, value) => {
  if (type.charAt(0) === "_") {
    const dataType = type.slice(1, type.length);
    return toArray(value, dataType);
  }
  switch (type) {
    case PostgresTypes.bool:
      return toBoolean(value);
    case PostgresTypes.float4:
    case PostgresTypes.float8:
    case PostgresTypes.int2:
    case PostgresTypes.int4:
    case PostgresTypes.int8:
    case PostgresTypes.numeric:
    case PostgresTypes.oid:
      return toNumber(value);
    case PostgresTypes.json:
    case PostgresTypes.jsonb:
      return toJson(value);
    case PostgresTypes.timestamp:
      return toTimestampString(value);
    case PostgresTypes.abstime:
    case PostgresTypes.date:
    case PostgresTypes.daterange:
    case PostgresTypes.int4range:
    case PostgresTypes.int8range:
    case PostgresTypes.money:
    case PostgresTypes.reltime:
    case PostgresTypes.text:
    case PostgresTypes.time:
    case PostgresTypes.timestamptz:
    case PostgresTypes.timetz:
    case PostgresTypes.tsrange:
    case PostgresTypes.tstzrange:
      return noop3(value);
    default:
      return noop3(value);
  }
};
var noop3 = (value) => {
  return value;
};
var toBoolean = (value) => {
  switch (value) {
    case "t":
      return true;
    case "f":
      return false;
    default:
      return value;
  }
};
var toNumber = (value) => {
  if (typeof value === "string") {
    const parsedValue = parseFloat(value);
    if (!Number.isNaN(parsedValue)) {
      return parsedValue;
    }
  }
  return value;
};
var toJson = (value) => {
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch (error) {
      console.log(`JSON parse error: ${error}`);
      return value;
    }
  }
  return value;
};
var toArray = (value, type) => {
  if (typeof value !== "string") {
    return value;
  }
  const lastIdx = value.length - 1;
  const closeBrace = value[lastIdx];
  const openBrace = value[0];
  if (openBrace === "{" && closeBrace === "}") {
    let arr;
    const valTrim = value.slice(1, lastIdx);
    try {
      arr = JSON.parse("[" + valTrim + "]");
    } catch (_) {
      arr = valTrim ? valTrim.split(",") : [];
    }
    return arr.map((val) => convertCell(type, val));
  }
  return value;
};
var toTimestampString = (value) => {
  if (typeof value === "string") {
    return value.replace(" ", "T");
  }
  return value;
};

// node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js
var import_websocket = __toModule(require_browser());

// node_modules/@supabase/realtime-js/dist/module/lib/version.js
var version4 = "1.6.2";

// node_modules/@supabase/realtime-js/dist/module/lib/constants.js
var DEFAULT_HEADERS4 = { "X-Client-Info": `realtime-js/${version4}` };
var VSN = "1.0.0";
var DEFAULT_TIMEOUT = 1e4;
var WS_CLOSE_NORMAL = 1e3;
var SOCKET_STATES;
(function(SOCKET_STATES2) {
  SOCKET_STATES2[SOCKET_STATES2["connecting"] = 0] = "connecting";
  SOCKET_STATES2[SOCKET_STATES2["open"] = 1] = "open";
  SOCKET_STATES2[SOCKET_STATES2["closing"] = 2] = "closing";
  SOCKET_STATES2[SOCKET_STATES2["closed"] = 3] = "closed";
})(SOCKET_STATES || (SOCKET_STATES = {}));
var CHANNEL_STATES;
(function(CHANNEL_STATES2) {
  CHANNEL_STATES2["closed"] = "closed";
  CHANNEL_STATES2["errored"] = "errored";
  CHANNEL_STATES2["joined"] = "joined";
  CHANNEL_STATES2["joining"] = "joining";
  CHANNEL_STATES2["leaving"] = "leaving";
})(CHANNEL_STATES || (CHANNEL_STATES = {}));
var CHANNEL_EVENTS;
(function(CHANNEL_EVENTS2) {
  CHANNEL_EVENTS2["close"] = "phx_close";
  CHANNEL_EVENTS2["error"] = "phx_error";
  CHANNEL_EVENTS2["join"] = "phx_join";
  CHANNEL_EVENTS2["reply"] = "phx_reply";
  CHANNEL_EVENTS2["leave"] = "phx_leave";
  CHANNEL_EVENTS2["access_token"] = "access_token";
})(CHANNEL_EVENTS || (CHANNEL_EVENTS = {}));
var TRANSPORTS;
(function(TRANSPORTS2) {
  TRANSPORTS2["websocket"] = "websocket";
})(TRANSPORTS || (TRANSPORTS = {}));

// node_modules/@supabase/realtime-js/dist/module/lib/timer.js
var Timer = class {
  constructor(callback, timerCalc) {
    this.callback = callback;
    this.timerCalc = timerCalc;
    this.timer = void 0;
    this.tries = 0;
    this.callback = callback;
    this.timerCalc = timerCalc;
  }
  reset() {
    this.tries = 0;
    clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.tries = this.tries + 1;
      this.callback();
    }, this.timerCalc(this.tries + 1));
  }
};

// node_modules/@supabase/realtime-js/dist/module/lib/serializer.js
var Serializer = class {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(rawPayload, callback) {
    if (rawPayload.constructor === ArrayBuffer) {
      return callback(this._binaryDecode(rawPayload));
    }
    if (typeof rawPayload === "string") {
      return callback(JSON.parse(rawPayload));
    }
    return callback({});
  }
  _binaryDecode(buffer) {
    const view = new DataView(buffer);
    const decoder = new TextDecoder();
    return this._decodeBroadcast(buffer, view, decoder);
  }
  _decodeBroadcast(buffer, view, decoder) {
    const topicSize = view.getUint8(1);
    const eventSize = view.getUint8(2);
    let offset = this.HEADER_LENGTH + 2;
    const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    const event = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    const data = JSON.parse(decoder.decode(buffer.slice(offset, buffer.byteLength)));
    return { ref: null, topic, event, payload: data };
  }
};

// node_modules/@supabase/realtime-js/dist/module/lib/push.js
var Push = class {
  constructor(channel, event, payload = {}, timeout = DEFAULT_TIMEOUT) {
    this.channel = channel;
    this.event = event;
    this.payload = payload;
    this.timeout = timeout;
    this.sent = false;
    this.timeoutTimer = void 0;
    this.ref = "";
    this.receivedResp = null;
    this.recHooks = [];
    this.refEvent = null;
  }
  resend(timeout) {
    this.timeout = timeout;
    this._cancelRefEvent();
    this.ref = "";
    this.refEvent = null;
    this.receivedResp = null;
    this.sent = false;
    this.send();
  }
  send() {
    if (this._hasReceived("timeout")) {
      return;
    }
    this.startTimeout();
    this.sent = true;
    this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref
    });
  }
  updatePayload(payload) {
    this.payload = Object.assign(Object.assign({}, this.payload), payload);
  }
  receive(status, callback) {
    var _a;
    if (this._hasReceived(status)) {
      callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
    }
    this.recHooks.push({ status, callback });
    return this;
  }
  startTimeout() {
    if (this.timeoutTimer) {
      return;
    }
    this.ref = this.channel.socket.makeRef();
    this.refEvent = this.channel.replyEventName(this.ref);
    const callback = (payload) => {
      this._cancelRefEvent();
      this._cancelTimeout();
      this.receivedResp = payload;
      this._matchReceive(payload);
    };
    if (this.channel instanceof RealtimeSubscription) {
      this.channel.on(this.refEvent, callback);
    } else {
      this.channel.on(this.refEvent, {}, callback);
    }
    this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(status, response) {
    if (this.refEvent)
      this.channel.trigger(this.refEvent, { status, response });
  }
  destroy() {
    this._cancelRefEvent();
    this._cancelTimeout();
  }
  _cancelRefEvent() {
    if (!this.refEvent) {
      return;
    }
    if (this.channel instanceof RealtimeSubscription) {
      this.channel.off(this.refEvent);
    } else {
      this.channel.off(this.refEvent, {});
    }
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer);
    this.timeoutTimer = void 0;
  }
  _matchReceive({ status, response }) {
    this.recHooks.filter((h2) => h2.status === status).forEach((h2) => h2.callback(response));
  }
  _hasReceived(status) {
    return this.receivedResp && this.receivedResp.status === status;
  }
};

// node_modules/@supabase/realtime-js/dist/module/RealtimeSubscription.js
var RealtimeSubscription = class {
  constructor(topic, params = {}, socket) {
    this.topic = topic;
    this.params = params;
    this.socket = socket;
    this.bindings = [];
    this.state = CHANNEL_STATES.closed;
    this.joinedOnce = false;
    this.pushBuffer = [];
    this.timeout = this.socket.timeout;
    this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
    this.rejoinTimer = new Timer(() => this.rejoinUntilConnected(), this.socket.reconnectAfterMs);
    this.joinPush.receive("ok", () => {
      this.state = CHANNEL_STATES.joined;
      this.rejoinTimer.reset();
      this.pushBuffer.forEach((pushEvent) => pushEvent.send());
      this.pushBuffer = [];
    });
    this.onClose(() => {
      this.rejoinTimer.reset();
      this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
      this.state = CHANNEL_STATES.closed;
      this.socket.remove(this);
    });
    this.onError((reason) => {
      if (this.isLeaving() || this.isClosed()) {
        return;
      }
      this.socket.log("channel", `error ${this.topic}`, reason);
      this.state = CHANNEL_STATES.errored;
      this.rejoinTimer.scheduleTimeout();
    });
    this.joinPush.receive("timeout", () => {
      if (!this.isJoining()) {
        return;
      }
      this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
      this.state = CHANNEL_STATES.errored;
      this.rejoinTimer.scheduleTimeout();
    });
    this.on(CHANNEL_EVENTS.reply, (payload, ref) => {
      this.trigger(this.replyEventName(ref), payload);
    });
  }
  rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout();
    if (this.socket.isConnected()) {
      this.rejoin();
    }
  }
  subscribe(timeout = this.timeout) {
    if (this.joinedOnce) {
      throw `tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance`;
    } else {
      this.joinedOnce = true;
      this.rejoin(timeout);
      return this.joinPush;
    }
  }
  onClose(callback) {
    this.on(CHANNEL_EVENTS.close, callback);
  }
  onError(callback) {
    this.on(CHANNEL_EVENTS.error, (reason) => callback(reason));
  }
  on(event, callback) {
    this.bindings.push({ event, callback });
  }
  off(event) {
    this.bindings = this.bindings.filter((bind) => bind.event !== event);
  }
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  push(event, payload, timeout = this.timeout) {
    if (!this.joinedOnce) {
      throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    }
    let pushEvent = new Push(this, event, payload, timeout);
    if (this.canPush()) {
      pushEvent.send();
    } else {
      pushEvent.startTimeout();
      this.pushBuffer.push(pushEvent);
    }
    return pushEvent;
  }
  updateJoinPayload(payload) {
    this.joinPush.updatePayload(payload);
  }
  unsubscribe(timeout = this.timeout) {
    this.state = CHANNEL_STATES.leaving;
    let onClose = () => {
      this.socket.log("channel", `leave ${this.topic}`);
      this.trigger(CHANNEL_EVENTS.close, "leave", this.joinRef());
    };
    this.joinPush.destroy();
    let leavePush = new Push(this, CHANNEL_EVENTS.leave, {}, timeout);
    leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
    leavePush.send();
    if (!this.canPush()) {
      leavePush.trigger("ok", {});
    }
    return leavePush;
  }
  onMessage(event, payload, ref) {
    return payload;
  }
  isMember(topic) {
    return this.topic === topic;
  }
  joinRef() {
    return this.joinPush.ref;
  }
  rejoin(timeout = this.timeout) {
    if (this.isLeaving()) {
      return;
    }
    this.socket.leaveOpenTopic(this.topic);
    this.state = CHANNEL_STATES.joining;
    this.joinPush.resend(timeout);
  }
  trigger(event, payload, ref) {
    let { close, error, leave, join } = CHANNEL_EVENTS;
    let events = [close, error, leave, join];
    if (ref && events.indexOf(event) >= 0 && ref !== this.joinRef()) {
      return;
    }
    let handledPayload = this.onMessage(event, payload, ref);
    if (payload && !handledPayload) {
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    }
    this.bindings.filter((bind) => {
      if (bind.event === "*") {
        return event === (payload === null || payload === void 0 ? void 0 : payload.type);
      } else {
        return bind.event === event;
      }
    }).map((bind) => bind.callback(handledPayload, ref));
  }
  replyEventName(ref) {
    return `chan_reply_${ref}`;
  }
  isClosed() {
    return this.state === CHANNEL_STATES.closed;
  }
  isErrored() {
    return this.state === CHANNEL_STATES.errored;
  }
  isJoined() {
    return this.state === CHANNEL_STATES.joined;
  }
  isJoining() {
    return this.state === CHANNEL_STATES.joining;
  }
  isLeaving() {
    return this.state === CHANNEL_STATES.leaving;
  }
};

// node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js
var RealtimePresence = class {
  constructor(channel, opts) {
    this.channel = channel;
    this.state = {};
    this.pendingDiffs = [];
    this.joinRef = null;
    this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const events = (opts === null || opts === void 0 ? void 0 : opts.events) || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel.on(events.state, {}, (newState) => {
      const { onJoin, onLeave, onSync } = this.caller;
      this.joinRef = this.channel.joinRef();
      this.state = RealtimePresence.syncState(this.state, newState, onJoin, onLeave);
      this.pendingDiffs.forEach((diff) => {
        this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
      });
      this.pendingDiffs = [];
      onSync();
    });
    this.channel.on(events.diff, {}, (diff) => {
      const { onJoin, onLeave, onSync } = this.caller;
      if (this.inPendingSyncState()) {
        this.pendingDiffs.push(diff);
      } else {
        this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
        onSync();
      }
    });
  }
  static syncState(currentState, newState, onJoin, onLeave) {
    const state = this.cloneDeep(currentState);
    const transformedState = this.transformState(newState);
    const joins = {};
    const leaves = {};
    this.map(state, (key, presences) => {
      if (!transformedState[key]) {
        leaves[key] = presences;
      }
    });
    this.map(transformedState, (key, newPresences) => {
      const currentPresences = state[key];
      if (currentPresences) {
        const newPresenceIds = newPresences.map((m) => m.presence_id);
        const curPresenceIds = currentPresences.map((m) => m.presence_id);
        const joinedPresences = newPresences.filter((m) => curPresenceIds.indexOf(m.presence_id) < 0);
        const leftPresences = currentPresences.filter((m) => newPresenceIds.indexOf(m.presence_id) < 0);
        if (joinedPresences.length > 0) {
          joins[key] = joinedPresences;
        }
        if (leftPresences.length > 0) {
          leaves[key] = leftPresences;
        }
      } else {
        joins[key] = newPresences;
      }
    });
    return this.syncDiff(state, { joins, leaves }, onJoin, onLeave);
  }
  static syncDiff(state, diff, onJoin, onLeave) {
    const { joins, leaves } = {
      joins: this.transformState(diff.joins),
      leaves: this.transformState(diff.leaves)
    };
    if (!onJoin) {
      onJoin = () => {
      };
    }
    if (!onLeave) {
      onLeave = () => {
      };
    }
    this.map(joins, (key, newPresences) => {
      const currentPresences = state[key];
      state[key] = this.cloneDeep(newPresences);
      if (currentPresences) {
        const joinedPresenceIds = state[key].map((m) => m.presence_id);
        const curPresences = currentPresences.filter((m) => joinedPresenceIds.indexOf(m.presence_id) < 0);
        state[key].unshift(...curPresences);
      }
      onJoin(key, currentPresences, newPresences);
    });
    this.map(leaves, (key, leftPresences) => {
      let currentPresences = state[key];
      if (!currentPresences)
        return;
      const presenceIdsToRemove = leftPresences.map((m) => m.presence_id);
      currentPresences = currentPresences.filter((m) => presenceIdsToRemove.indexOf(m.presence_id) < 0);
      state[key] = currentPresences;
      onLeave(key, currentPresences, leftPresences);
      if (currentPresences.length === 0)
        delete state[key];
    });
    return state;
  }
  static list(presences, chooser) {
    if (!chooser) {
      chooser = (_key, pres) => pres;
    }
    return this.map(presences, (key, presences2) => chooser(key, presences2));
  }
  static map(obj, func) {
    return Object.getOwnPropertyNames(obj).map((key) => func(key, obj[key]));
  }
  static transformState(state) {
    state = this.cloneDeep(state);
    return Object.getOwnPropertyNames(state).reduce((newState, key) => {
      const presences = state[key];
      if ("metas" in presences) {
        newState[key] = presences.metas.map((presence) => {
          presence["presence_id"] = presence["phx_ref"];
          delete presence["phx_ref"];
          delete presence["phx_ref_prev"];
          return presence;
        });
      } else {
        newState[key] = presences;
      }
      return newState;
    }, {});
  }
  static cloneDeep(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  onJoin(callback) {
    this.caller.onJoin = callback;
  }
  onLeave(callback) {
    this.caller.onLeave = callback;
  }
  onSync(callback) {
    this.caller.onSync = callback;
  }
  list(by) {
    return RealtimePresence.list(this.state, by);
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel.joinRef();
  }
};

// node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js
var RealtimeChannel = class {
  constructor(topic, params = {}, socket) {
    this.topic = topic;
    this.params = params;
    this.socket = socket;
    this.bindings = [];
    this.state = CHANNEL_STATES.closed;
    this.joinedOnce = false;
    this.pushBuffer = [];
    this.timeout = this.socket.timeout;
    this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
    this.rejoinTimer = new Timer(() => this.rejoinUntilConnected(), this.socket.reconnectAfterMs);
    this.joinPush.receive("ok", () => {
      this.state = CHANNEL_STATES.joined;
      this.rejoinTimer.reset();
      this.pushBuffer.forEach((pushEvent) => pushEvent.send());
      this.pushBuffer = [];
    });
    this.onClose(() => {
      this.rejoinTimer.reset();
      this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
      this.state = CHANNEL_STATES.closed;
      this.socket.remove(this);
    });
    this.onError((reason) => {
      if (this.isLeaving() || this.isClosed()) {
        return;
      }
      this.socket.log("channel", `error ${this.topic}`, reason);
      this.state = CHANNEL_STATES.errored;
      this.rejoinTimer.scheduleTimeout();
    });
    this.joinPush.receive("timeout", () => {
      if (!this.isJoining()) {
        return;
      }
      this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
      this.state = CHANNEL_STATES.errored;
      this.rejoinTimer.scheduleTimeout();
    });
    this.on(CHANNEL_EVENTS.reply, {}, (payload, ref) => {
      this.trigger(this.replyEventName(ref), payload);
    });
    this.presence = new RealtimePresence(this);
  }
  list() {
    return this.presence.list();
  }
  rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout();
    if (this.socket.isConnected()) {
      this.rejoin();
    }
  }
  subscribe(timeout = this.timeout) {
    if (this.joinedOnce) {
      throw `tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance`;
    } else {
      const configs = this.bindings.reduce((acc, binding) => {
        const { type } = binding;
        if (![
          "phx_close",
          "phx_error",
          "phx_reply",
          "presence_diff",
          "presence_state"
        ].includes(type)) {
          acc[type] = binding;
        }
        return acc;
      }, {});
      if (Object.keys(configs).length) {
        this.updateJoinPayload({ configs });
      }
      this.joinedOnce = true;
      this.rejoin(timeout);
      return this.joinPush;
    }
  }
  onClose(callback) {
    this.on(CHANNEL_EVENTS.close, {}, callback);
  }
  onError(callback) {
    this.on(CHANNEL_EVENTS.error, {}, (reason) => callback(reason));
  }
  on(type, eventFilter, callback) {
    this.bindings.push({
      type,
      eventFilter: eventFilter !== null && eventFilter !== void 0 ? eventFilter : {},
      callback: callback !== null && callback !== void 0 ? callback : () => {
      }
    });
  }
  off(type, eventFilter) {
    this.bindings = this.bindings.filter((bind) => {
      return !(bind.type === type && RealtimeChannel.isEqual(bind.eventFilter, eventFilter));
    });
  }
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  push(event, payload, timeout = this.timeout) {
    if (!this.joinedOnce) {
      throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    }
    let pushEvent = new Push(this, event, payload, timeout);
    if (this.canPush()) {
      pushEvent.send();
    } else {
      pushEvent.startTimeout();
      this.pushBuffer.push(pushEvent);
    }
    return pushEvent;
  }
  updateJoinPayload(payload) {
    this.joinPush.updatePayload(payload);
  }
  unsubscribe(timeout = this.timeout) {
    this.state = CHANNEL_STATES.leaving;
    let onClose = () => {
      this.socket.log("channel", `leave ${this.topic}`);
      this.trigger(CHANNEL_EVENTS.close, "leave", this.joinRef());
    };
    this.joinPush.destroy();
    let leavePush = new Push(this, CHANNEL_EVENTS.leave, {}, timeout);
    leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
    leavePush.send();
    if (!this.canPush()) {
      leavePush.trigger("ok", {});
    }
    return leavePush;
  }
  onMessage(event, payload, ref) {
    return payload;
  }
  isMember(topic) {
    return this.topic === topic;
  }
  joinRef() {
    return this.joinPush.ref;
  }
  rejoin(timeout = this.timeout) {
    if (this.isLeaving()) {
      return;
    }
    this.socket.leaveOpenTopic(this.topic);
    this.state = CHANNEL_STATES.joining;
    this.joinPush.resend(timeout);
  }
  trigger(type, payload, ref) {
    const { close, error, leave, join } = CHANNEL_EVENTS;
    const events = [close, error, leave, join];
    if (ref && events.indexOf(type) >= 0 && ref !== this.joinRef()) {
      return;
    }
    const handledPayload = this.onMessage(type, payload, ref);
    if (payload && !handledPayload) {
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    }
    this.bindings.filter((bind) => {
      var _a, _b;
      return (bind === null || bind === void 0 ? void 0 : bind.type) === type && (((_a = bind === null || bind === void 0 ? void 0 : bind.eventFilter) === null || _a === void 0 ? void 0 : _a.event) === "*" || ((_b = bind === null || bind === void 0 ? void 0 : bind.eventFilter) === null || _b === void 0 ? void 0 : _b.event) === (payload === null || payload === void 0 ? void 0 : payload.event));
    }).map((bind) => bind.callback(handledPayload, ref));
  }
  send(payload) {
    const push = this.push(payload.type, payload);
    return new Promise((resolve, reject) => {
      push.receive("ok", () => resolve("ok"));
      push.receive("timeout", () => reject("timeout"));
    });
  }
  replyEventName(ref) {
    return `chan_reply_${ref}`;
  }
  isClosed() {
    return this.state === CHANNEL_STATES.closed;
  }
  isErrored() {
    return this.state === CHANNEL_STATES.errored;
  }
  isJoined() {
    return this.state === CHANNEL_STATES.joined;
  }
  isJoining() {
    return this.state === CHANNEL_STATES.joining;
  }
  isLeaving() {
    return this.state === CHANNEL_STATES.leaving;
  }
  static isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    for (const k in obj1) {
      if (obj1[k] !== obj2[k]) {
        return false;
      }
    }
    return true;
  }
};

// node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js
var __awaiter8 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __rest2 = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
};
var noop4 = () => {
};
var RealtimeClient = class {
  constructor(endPoint, options) {
    this.accessToken = null;
    this.channels = [];
    this.endPoint = "";
    this.headers = DEFAULT_HEADERS4;
    this.params = {};
    this.timeout = DEFAULT_TIMEOUT;
    this.transport = import_websocket.w3cwebsocket;
    this.heartbeatIntervalMs = 3e4;
    this.longpollerTimeout = 2e4;
    this.heartbeatTimer = void 0;
    this.pendingHeartbeatRef = null;
    this.ref = 0;
    this.logger = noop4;
    this.conn = null;
    this.sendBuffer = [];
    this.serializer = new Serializer();
    this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    };
    this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
    if (options === null || options === void 0 ? void 0 : options.params)
      this.params = options.params;
    if (options === null || options === void 0 ? void 0 : options.headers)
      this.headers = Object.assign(Object.assign({}, this.headers), options.headers);
    if (options === null || options === void 0 ? void 0 : options.timeout)
      this.timeout = options.timeout;
    if (options === null || options === void 0 ? void 0 : options.logger)
      this.logger = options.logger;
    if (options === null || options === void 0 ? void 0 : options.transport)
      this.transport = options.transport;
    if (options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs)
      this.heartbeatIntervalMs = options.heartbeatIntervalMs;
    if (options === null || options === void 0 ? void 0 : options.longpollerTimeout)
      this.longpollerTimeout = options.longpollerTimeout;
    this.reconnectAfterMs = (options === null || options === void 0 ? void 0 : options.reconnectAfterMs) ? options.reconnectAfterMs : (tries) => {
      return [1e3, 2e3, 5e3, 1e4][tries - 1] || 1e4;
    };
    this.encode = (options === null || options === void 0 ? void 0 : options.encode) ? options.encode : (payload, callback) => {
      return callback(JSON.stringify(payload));
    };
    this.decode = (options === null || options === void 0 ? void 0 : options.decode) ? options.decode : this.serializer.decode.bind(this.serializer);
    this.reconnectTimer = new Timer(() => __awaiter8(this, void 0, void 0, function* () {
      yield this.disconnect();
      this.connect();
    }), this.reconnectAfterMs);
  }
  connect() {
    if (this.conn) {
      return;
    }
    this.conn = new this.transport(this.endPointURL(), [], null, this.headers);
    if (this.conn) {
      this.conn.binaryType = "arraybuffer";
      this.conn.onopen = () => this._onConnOpen();
      this.conn.onerror = (error) => this._onConnError(error);
      this.conn.onmessage = (event) => this.onConnMessage(event);
      this.conn.onclose = (event) => this._onConnClose(event);
    }
  }
  disconnect(code, reason) {
    return new Promise((resolve, _reject) => {
      try {
        if (this.conn) {
          this.conn.onclose = function() {
          };
          if (code) {
            this.conn.close(code, reason || "");
          } else {
            this.conn.close();
          }
          this.conn = null;
          this.heartbeatTimer && clearInterval(this.heartbeatTimer);
          this.reconnectTimer.reset();
        }
        resolve({ error: null, data: true });
      } catch (error) {
        resolve({ error, data: false });
      }
    });
  }
  log(kind, msg, data) {
    this.logger(kind, msg, data);
  }
  onOpen(callback) {
    this.stateChangeCallbacks.open.push(callback);
  }
  onClose(callback) {
    this.stateChangeCallbacks.close.push(callback);
  }
  onError(callback) {
    this.stateChangeCallbacks.error.push(callback);
  }
  onMessage(callback) {
    this.stateChangeCallbacks.message.push(callback);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case SOCKET_STATES.connecting:
        return "connecting";
      case SOCKET_STATES.open:
        return "open";
      case SOCKET_STATES.closing:
        return "closing";
      default:
        return "closed";
    }
  }
  isConnected() {
    return this.connectionState() === "open";
  }
  remove(channel) {
    this.channels = this.channels.filter((c2) => c2.joinRef() !== channel.joinRef());
  }
  channel(topic, chanParams = { isNewVersion: false }) {
    const { isNewVersion } = chanParams, params = __rest2(chanParams, ["isNewVersion"]);
    const chan = isNewVersion ? new RealtimeChannel(topic, Object.assign({}, params), this) : new RealtimeSubscription(topic, Object.assign({}, params), this);
    if (chan instanceof RealtimeChannel) {
      chan.presence.onJoin((key, currentPresences, newPresences) => {
        chan.trigger("presence", {
          event: "JOIN",
          key,
          currentPresences,
          newPresences
        });
      });
      chan.presence.onLeave((key, currentPresences, leftPresences) => {
        chan.trigger("presence", {
          event: "LEAVE",
          key,
          currentPresences,
          leftPresences
        });
      });
      chan.presence.onSync(() => {
        chan.trigger("presence", { event: "SYNC" });
      });
    }
    this.channels.push(chan);
    return chan;
  }
  push(data) {
    let { topic, event, payload, ref } = data;
    let callback = () => {
      this.encode(data, (result) => {
        var _a;
        (_a = this.conn) === null || _a === void 0 ? void 0 : _a.send(result);
      });
    };
    this.log("push", `${topic} ${event} (${ref})`, payload);
    if (this.isConnected()) {
      callback();
    } else {
      this.sendBuffer.push(callback);
    }
  }
  onConnMessage(rawMessage) {
    this.decode(rawMessage.data, (msg) => {
      let { topic, event, payload, ref } = msg;
      if (ref && ref === this.pendingHeartbeatRef || event === (payload === null || payload === void 0 ? void 0 : payload.type)) {
        this.pendingHeartbeatRef = null;
      }
      this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
      this.channels.filter((channel) => channel.isMember(topic)).forEach((channel) => channel.trigger(event, payload, ref));
      this.stateChangeCallbacks.message.forEach((callback) => callback(msg));
    });
  }
  endPointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: VSN }));
  }
  makeRef() {
    let newRef = this.ref + 1;
    if (newRef === this.ref) {
      this.ref = 0;
    } else {
      this.ref = newRef;
    }
    return this.ref.toString();
  }
  setAuth(token) {
    this.accessToken = token;
    try {
      this.channels.forEach((channel) => {
        token && channel.updateJoinPayload({ user_token: token });
        if (channel.joinedOnce && channel.isJoined()) {
          channel.push(CHANNEL_EVENTS.access_token, { access_token: token });
        }
      });
    } catch (error) {
      console.log("setAuth error", error);
    }
  }
  leaveOpenTopic(topic) {
    let dupChannel = this.channels.find((c2) => c2.topic === topic && (c2.isJoined() || c2.isJoining()));
    if (dupChannel) {
      this.log("transport", `leaving duplicate topic "${topic}"`);
      dupChannel.unsubscribe();
    }
  }
  _onConnOpen() {
    this.log("transport", `connected to ${this.endPointURL()}`);
    this._flushSendBuffer();
    this.reconnectTimer.reset();
    this.heartbeatTimer && clearInterval(this.heartbeatTimer);
    this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs);
    this.stateChangeCallbacks.open.forEach((callback) => callback());
  }
  _onConnClose(event) {
    this.log("transport", "close", event);
    this._triggerChanError();
    this.heartbeatTimer && clearInterval(this.heartbeatTimer);
    this.reconnectTimer.scheduleTimeout();
    this.stateChangeCallbacks.close.forEach((callback) => callback(event));
  }
  _onConnError(error) {
    this.log("transport", error.message);
    this._triggerChanError();
    this.stateChangeCallbacks.error.forEach((callback) => callback(error));
  }
  _triggerChanError() {
    this.channels.forEach((channel) => channel.trigger(CHANNEL_EVENTS.error));
  }
  _appendParams(url, params) {
    if (Object.keys(params).length === 0) {
      return url;
    }
    const prefix = url.match(/\?/) ? "&" : "?";
    const query = new URLSearchParams(params);
    return `${url}${prefix}${query}`;
  }
  _flushSendBuffer() {
    if (this.isConnected() && this.sendBuffer.length > 0) {
      this.sendBuffer.forEach((callback) => callback());
      this.sendBuffer = [];
    }
  }
  _sendHeartbeat() {
    var _a;
    if (!this.isConnected()) {
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null;
      this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      (_a = this.conn) === null || _a === void 0 ? void 0 : _a.close(WS_CLOSE_NORMAL, "hearbeat timeout");
      return;
    }
    this.pendingHeartbeatRef = this.makeRef();
    this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    });
    this.setAuth(this.accessToken);
  }
};

// node_modules/@supabase/supabase-js/dist/module/lib/SupabaseRealtimeClient.js
var SupabaseRealtimeClient = class {
  constructor(socket, headers, schema, tableName) {
    const chanParams = {};
    const topic = tableName === "*" ? `realtime:${schema}` : `realtime:${schema}:${tableName}`;
    const userToken = headers["Authorization"].split(" ")[1];
    if (userToken) {
      chanParams["user_token"] = userToken;
    }
    this.subscription = socket.channel(topic, chanParams);
  }
  getPayloadRecords(payload) {
    const records = {
      new: {},
      old: {}
    };
    if (payload.type === "INSERT" || payload.type === "UPDATE") {
      records.new = transformers_exports.convertChangeData(payload.columns, payload.record);
    }
    if (payload.type === "UPDATE" || payload.type === "DELETE") {
      records.old = transformers_exports.convertChangeData(payload.columns, payload.old_record);
    }
    return records;
  }
  on(event, callback) {
    this.subscription.on(event, (payload) => {
      let enrichedPayload = {
        schema: payload.schema,
        table: payload.table,
        commit_timestamp: payload.commit_timestamp,
        eventType: payload.type,
        new: {},
        old: {},
        errors: payload.errors
      };
      enrichedPayload = Object.assign(Object.assign({}, enrichedPayload), this.getPayloadRecords(payload));
      callback(enrichedPayload);
    });
    return this;
  }
  subscribe(callback = () => {
  }) {
    this.subscription.onError((e2) => callback("SUBSCRIPTION_ERROR", e2));
    this.subscription.onClose(() => callback("CLOSED"));
    this.subscription.subscribe().receive("ok", () => callback("SUBSCRIBED")).receive("error", (e2) => callback("SUBSCRIPTION_ERROR", e2)).receive("timeout", () => callback("RETRYING_AFTER_TIMEOUT"));
    return this.subscription;
  }
};

// node_modules/@supabase/supabase-js/dist/module/lib/SupabaseQueryBuilder.js
var SupabaseQueryBuilder = class extends PostgrestQueryBuilder {
  constructor(url, { headers = {}, schema, realtime, table, fetch: fetch2, shouldThrowOnError }) {
    super(url, { headers, schema, fetch: fetch2, shouldThrowOnError });
    this._subscription = null;
    this._realtime = realtime;
    this._headers = headers;
    this._schema = schema;
    this._table = table;
  }
  on(event, callback) {
    if (!this._realtime.isConnected()) {
      this._realtime.connect();
    }
    if (!this._subscription) {
      this._subscription = new SupabaseRealtimeClient(this._realtime, this._headers, this._schema, this._table);
    }
    return this._subscription.on(event, callback);
  }
};

// node_modules/@supabase/storage-js/dist/module/lib/version.js
var version5 = "0.0.0";

// node_modules/@supabase/storage-js/dist/module/lib/constants.js
var DEFAULT_HEADERS5 = { "X-Client-Info": `storage-js/${version5}` };

// node_modules/@supabase/storage-js/dist/module/lib/fetch.js
var __awaiter9 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var _getErrorMessage2 = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
var handleError2 = (error, reject) => {
  if (typeof error.json !== "function") {
    return reject(error);
  }
  error.json().then((err) => {
    return reject({
      message: _getErrorMessage2(err),
      status: (error === null || error === void 0 ? void 0 : error.status) || 500
    });
  });
};
var _getRequestParams2 = (method, options, parameters, body) => {
  const params = { method, headers: (options === null || options === void 0 ? void 0 : options.headers) || {} };
  if (method === "GET") {
    return params;
  }
  params.headers = Object.assign({ "Content-Type": "application/json" }, options === null || options === void 0 ? void 0 : options.headers);
  params.body = JSON.stringify(body);
  return Object.assign(Object.assign({}, params), parameters);
};
function _handleRequest2(fetcher, method, url, options, parameters, body) {
  return __awaiter9(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
      fetcher(url, _getRequestParams2(method, options, parameters, body)).then((result) => {
        if (!result.ok)
          throw result;
        if (options === null || options === void 0 ? void 0 : options.noResolveJson)
          return resolve(result);
        return result.json();
      }).then((data) => resolve(data)).catch((error) => handleError2(error, reject));
    });
  });
}
function get2(fetcher, url, options, parameters) {
  return __awaiter9(this, void 0, void 0, function* () {
    return _handleRequest2(fetcher, "GET", url, options, parameters);
  });
}
function post2(fetcher, url, body, options, parameters) {
  return __awaiter9(this, void 0, void 0, function* () {
    return _handleRequest2(fetcher, "POST", url, options, parameters, body);
  });
}
function put2(fetcher, url, body, options, parameters) {
  return __awaiter9(this, void 0, void 0, function* () {
    return _handleRequest2(fetcher, "PUT", url, options, parameters, body);
  });
}
function remove3(fetcher, url, body, options, parameters) {
  return __awaiter9(this, void 0, void 0, function* () {
    return _handleRequest2(fetcher, "DELETE", url, options, parameters, body);
  });
}

// node_modules/@supabase/storage-js/dist/module/lib/helpers.js
var import_cross_fetch3 = __toModule(require_browser_ponyfill());
var resolveFetch2 = (customFetch) => {
  let _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else if (typeof fetch === "undefined") {
    _fetch = import_cross_fetch3.default;
  } else {
    _fetch = fetch;
  }
  return (...args) => _fetch(...args);
};

// node_modules/@supabase/storage-js/dist/module/lib/StorageBucketApi.js
var __awaiter10 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var StorageBucketApi = class {
  constructor(url, headers = {}, fetch2) {
    this.url = url;
    this.headers = Object.assign(Object.assign({}, DEFAULT_HEADERS5), headers);
    this.fetch = resolveFetch2(fetch2);
  }
  listBuckets() {
    return __awaiter10(this, void 0, void 0, function* () {
      try {
        const data = yield get2(this.fetch, `${this.url}/bucket`, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    });
  }
  getBucket(id) {
    return __awaiter10(this, void 0, void 0, function* () {
      try {
        const data = yield get2(this.fetch, `${this.url}/bucket/${id}`, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    });
  }
  createBucket(id, options = { public: false }) {
    return __awaiter10(this, void 0, void 0, function* () {
      try {
        const data = yield post2(this.fetch, `${this.url}/bucket`, { id, name: id, public: options.public }, { headers: this.headers });
        return { data: data.name, error: null };
      } catch (error) {
        return { data: null, error };
      }
    });
  }
  updateBucket(id, options) {
    return __awaiter10(this, void 0, void 0, function* () {
      try {
        const data = yield put2(this.fetch, `${this.url}/bucket/${id}`, { id, name: id, public: options.public }, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    });
  }
  emptyBucket(id) {
    return __awaiter10(this, void 0, void 0, function* () {
      try {
        const data = yield post2(this.fetch, `${this.url}/bucket/${id}/empty`, {}, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    });
  }
  deleteBucket(id) {
    return __awaiter10(this, void 0, void 0, function* () {
      try {
        const data = yield remove3(this.fetch, `${this.url}/bucket/${id}`, {}, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    });
  }
};

// node_modules/@supabase/storage-js/dist/module/lib/StorageFileApi.js
var __awaiter11 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var DEFAULT_SEARCH_OPTIONS = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
};
var DEFAULT_FILE_OPTIONS = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: false
};
var StorageFileApi = class {
  constructor(url, headers = {}, bucketId, fetch2) {
    this.url = url;
    this.headers = headers;
    this.bucketId = bucketId;
    this.fetch = resolveFetch2(fetch2);
  }
  uploadOrUpdate(method, path, fileBody, fileOptions) {
    return __awaiter11(this, void 0, void 0, function* () {
      try {
        let body;
        const options = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
        const headers = Object.assign(Object.assign({}, this.headers), method === "POST" && { "x-upsert": String(options.upsert) });
        if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
          body = new FormData();
          body.append("cacheControl", options.cacheControl);
          body.append("", fileBody);
        } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
          body = fileBody;
          body.append("cacheControl", options.cacheControl);
        } else {
          body = fileBody;
          headers["cache-control"] = `max-age=${options.cacheControl}`;
          headers["content-type"] = options.contentType;
        }
        const cleanPath = this._removeEmptyFolders(path);
        const _path = this._getFinalPath(cleanPath);
        const res = yield this.fetch(`${this.url}/object/${_path}`, {
          method,
          body,
          headers
        });
        if (res.ok) {
          return { data: { Key: _path }, error: null };
        } else {
          const error = yield res.json();
          return { data: null, error };
        }
      } catch (error) {
        return { data: null, error };
      }
    });
  }
  upload(path, fileBody, fileOptions) {
    return __awaiter11(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", path, fileBody, fileOptions);
    });
  }
  update(path, fileBody, fileOptions) {
    return __awaiter11(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", path, fileBody, fileOptions);
    });
  }
  move(fromPath, toPath) {
    return __awaiter11(this, void 0, void 0, function* () {
      try {
        const data = yield post2(this.fetch, `${this.url}/object/move`, { bucketId: this.bucketId, sourceKey: fromPath, destinationKey: toPath }, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    });
  }
  copy(fromPath, toPath) {
    return __awaiter11(this, void 0, void 0, function* () {
      try {
        const data = yield post2(this.fetch, `${this.url}/object/copy`, { bucketId: this.bucketId, sourceKey: fromPath, destinationKey: toPath }, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    });
  }
  createSignedUrl(path, expiresIn) {
    return __awaiter11(this, void 0, void 0, function* () {
      try {
        const _path = this._getFinalPath(path);
        let data = yield post2(this.fetch, `${this.url}/object/sign/${_path}`, { expiresIn }, { headers: this.headers });
        const signedURL = `${this.url}${data.signedURL}`;
        data = { signedURL };
        return { data, error: null, signedURL };
      } catch (error) {
        return { data: null, error, signedURL: null };
      }
    });
  }
  createSignedUrls(paths, expiresIn) {
    return __awaiter11(this, void 0, void 0, function* () {
      try {
        const data = yield post2(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn, paths }, { headers: this.headers });
        return {
          data: data.map((datum) => Object.assign(Object.assign({}, datum), { signedURL: datum.signedURL ? `${this.url}${datum.signedURL}` : null })),
          error: null
        };
      } catch (error) {
        return { data: null, error };
      }
    });
  }
  download(path) {
    return __awaiter11(this, void 0, void 0, function* () {
      try {
        const _path = this._getFinalPath(path);
        const res = yield get2(this.fetch, `${this.url}/object/${_path}`, {
          headers: this.headers,
          noResolveJson: true
        });
        const data = yield res.blob();
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    });
  }
  getPublicUrl(path) {
    try {
      const _path = this._getFinalPath(path);
      const publicURL = `${this.url}/object/public/${_path}`;
      const data = { publicURL };
      return { data, error: null, publicURL };
    } catch (error) {
      return { data: null, error, publicURL: null };
    }
  }
  remove(paths) {
    return __awaiter11(this, void 0, void 0, function* () {
      try {
        const data = yield remove3(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: paths }, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    });
  }
  list(path, options, parameters) {
    return __awaiter11(this, void 0, void 0, function* () {
      try {
        const body = Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options), { prefix: path || "" });
        const data = yield post2(this.fetch, `${this.url}/object/list/${this.bucketId}`, body, { headers: this.headers }, parameters);
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    });
  }
  _getFinalPath(path) {
    return `${this.bucketId}/${path}`;
  }
  _removeEmptyFolders(path) {
    return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
};

// node_modules/@supabase/storage-js/dist/module/StorageClient.js
var StorageClient = class extends StorageBucketApi {
  constructor(url, headers = {}, fetch2) {
    super(url, headers, fetch2);
  }
  from(id) {
    return new StorageFileApi(this.url, this.headers, id, this.fetch);
  }
};

// node_modules/@supabase/functions-js/dist/module/helper.js
var import_cross_fetch4 = __toModule(require_browser_ponyfill());
var resolveFetch3 = (customFetch) => {
  let _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else if (typeof fetch === "undefined") {
    _fetch = import_cross_fetch4.default;
  } else {
    _fetch = fetch;
  }
  return (...args) => _fetch(...args);
};

// node_modules/@supabase/functions-js/dist/module/index.js
var __awaiter12 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var FunctionsClient = class {
  constructor(url, { headers = {}, customFetch } = {}) {
    this.url = url;
    this.headers = headers;
    this.fetch = resolveFetch3(customFetch);
  }
  setAuth(token) {
    this.headers.Authorization = `Bearer ${token}`;
  }
  invoke(functionName, invokeOptions) {
    return __awaiter12(this, void 0, void 0, function* () {
      try {
        const { headers, body } = invokeOptions !== null && invokeOptions !== void 0 ? invokeOptions : {};
        const response = yield this.fetch(`${this.url}/${functionName}`, {
          method: "POST",
          headers: Object.assign({}, this.headers, headers),
          body
        });
        const isRelayError = response.headers.get("x-relay-error");
        if (isRelayError && isRelayError === "true") {
          return { data: null, error: new Error(yield response.text()) };
        }
        let data;
        const { responseType } = invokeOptions !== null && invokeOptions !== void 0 ? invokeOptions : {};
        if (!responseType || responseType === "json") {
          data = yield response.json();
        } else if (responseType === "arrayBuffer") {
          data = yield response.arrayBuffer();
        } else if (responseType === "blob") {
          data = yield response.blob();
        } else {
          data = yield response.text();
        }
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    });
  }
};

// node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js
var __awaiter13 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var DEFAULT_OPTIONS2 = {
  schema: "public",
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  multiTab: true,
  headers: DEFAULT_HEADERS
};
var SupabaseClient = class {
  constructor(supabaseUrl, supabaseKey, options) {
    this.supabaseUrl = supabaseUrl;
    this.supabaseKey = supabaseKey;
    if (!supabaseUrl)
      throw new Error("supabaseUrl is required.");
    if (!supabaseKey)
      throw new Error("supabaseKey is required.");
    const _supabaseUrl = stripTrailingSlash(supabaseUrl);
    const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS2), options);
    this.restUrl = `${_supabaseUrl}/rest/v1`;
    this.realtimeUrl = `${_supabaseUrl}/realtime/v1`.replace("http", "ws");
    this.authUrl = `${_supabaseUrl}/auth/v1`;
    this.storageUrl = `${_supabaseUrl}/storage/v1`;
    const isPlatform = _supabaseUrl.match(/(supabase\.co)|(supabase\.in)/);
    if (isPlatform) {
      const urlParts = _supabaseUrl.split(".");
      this.functionsUrl = `${urlParts[0]}.functions.${urlParts[1]}.${urlParts[2]}`;
    } else {
      this.functionsUrl = `${_supabaseUrl}/functions/v1`;
    }
    this.schema = settings.schema;
    this.multiTab = settings.multiTab;
    this.fetch = settings.fetch;
    this.headers = Object.assign(Object.assign({}, DEFAULT_HEADERS), options === null || options === void 0 ? void 0 : options.headers);
    this.shouldThrowOnError = settings.shouldThrowOnError || false;
    this.auth = this._initSupabaseAuthClient(settings);
    this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers }, settings.realtime));
    this._listenForAuthEvents();
    this._listenForMultiTabEvents();
  }
  get functions() {
    return new FunctionsClient(this.functionsUrl, {
      headers: this._getAuthHeaders(),
      customFetch: this.fetch
    });
  }
  get storage() {
    return new StorageClient(this.storageUrl, this._getAuthHeaders(), this.fetch);
  }
  from(table) {
    const url = `${this.restUrl}/${table}`;
    return new SupabaseQueryBuilder(url, {
      headers: this._getAuthHeaders(),
      schema: this.schema,
      realtime: this.realtime,
      table,
      fetch: this.fetch,
      shouldThrowOnError: this.shouldThrowOnError
    });
  }
  rpc(fn, params, { head = false, count = null } = {}) {
    const rest = this._initPostgRESTClient();
    return rest.rpc(fn, params, { head, count });
  }
  removeAllSubscriptions() {
    return __awaiter13(this, void 0, void 0, function* () {
      const allSubs = this.getSubscriptions().slice();
      const allSubPromises = allSubs.map((sub) => this.removeSubscription(sub));
      const allRemovedSubs = yield Promise.all(allSubPromises);
      return allRemovedSubs.map(({ error }, i2) => {
        return {
          data: { subscription: allSubs[i2] },
          error
        };
      });
    });
  }
  removeSubscription(subscription) {
    return __awaiter13(this, void 0, void 0, function* () {
      const { error } = yield this._closeSubscription(subscription);
      const allSubs = this.getSubscriptions();
      const openSubCount = allSubs.filter((chan) => chan.isJoined()).length;
      if (allSubs.length === 0)
        yield this.realtime.disconnect();
      return { data: { openSubscriptions: openSubCount }, error };
    });
  }
  _closeSubscription(subscription) {
    return __awaiter13(this, void 0, void 0, function* () {
      let error = null;
      if (!subscription.isClosed()) {
        const { error: unsubError } = yield this._unsubscribeSubscription(subscription);
        error = unsubError;
      }
      this.realtime.remove(subscription);
      return { error };
    });
  }
  _unsubscribeSubscription(subscription) {
    return new Promise((resolve) => {
      subscription.unsubscribe().receive("ok", () => resolve({ error: null })).receive("error", (error) => resolve({ error })).receive("timeout", () => resolve({ error: new Error("timed out") }));
    });
  }
  getSubscriptions() {
    return this.realtime.channels;
  }
  _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, localStorage, headers, fetch: fetch2 }) {
    const authHeaders = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new SupabaseAuthClient({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, headers), authHeaders),
      autoRefreshToken,
      persistSession,
      detectSessionInUrl,
      localStorage,
      fetch: fetch2
    });
  }
  _initRealtimeClient(options) {
    return new RealtimeClient(this.realtimeUrl, Object.assign(Object.assign({}, options), { params: Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.params), { apikey: this.supabaseKey }) }));
  }
  _initPostgRESTClient() {
    return new PostgrestClient(this.restUrl, {
      headers: this._getAuthHeaders(),
      schema: this.schema,
      fetch: this.fetch,
      throwOnError: this.shouldThrowOnError
    });
  }
  _getAuthHeaders() {
    var _a, _b;
    const headers = Object.assign({}, this.headers);
    const authBearer = (_b = (_a = this.auth.session()) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : this.supabaseKey;
    headers["apikey"] = this.supabaseKey;
    headers["Authorization"] = headers["Authorization"] || `Bearer ${authBearer}`;
    return headers;
  }
  _listenForMultiTabEvents() {
    if (!this.multiTab || !isBrowser() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) {
      return null;
    }
    try {
      return window === null || window === void 0 ? void 0 : window.addEventListener("storage", (e2) => {
        var _a, _b, _c;
        if (e2.key === STORAGE_KEY) {
          const newSession = JSON.parse(String(e2.newValue));
          const accessToken = (_b = (_a = newSession === null || newSession === void 0 ? void 0 : newSession.currentSession) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : void 0;
          const previousAccessToken = (_c = this.auth.session()) === null || _c === void 0 ? void 0 : _c.access_token;
          if (!accessToken) {
            this._handleTokenChanged("SIGNED_OUT", accessToken, "STORAGE");
          } else if (!previousAccessToken && accessToken) {
            this._handleTokenChanged("SIGNED_IN", accessToken, "STORAGE");
          } else if (previousAccessToken !== accessToken) {
            this._handleTokenChanged("TOKEN_REFRESHED", accessToken, "STORAGE");
          }
        }
      });
    } catch (error) {
      console.error("_listenForMultiTabEvents", error);
      return null;
    }
  }
  _listenForAuthEvents() {
    let { data } = this.auth.onAuthStateChange((event, session) => {
      this._handleTokenChanged(event, session === null || session === void 0 ? void 0 : session.access_token, "CLIENT");
    });
    return data;
  }
  _handleTokenChanged(event, token, source) {
    if ((event === "TOKEN_REFRESHED" || event === "SIGNED_IN") && this.changedAccessToken !== token) {
      this.realtime.setAuth(token);
      if (source == "STORAGE")
        this.auth.setAuth(token);
      this.changedAccessToken = token;
    } else if (event === "SIGNED_OUT" || event === "USER_DELETED") {
      this.realtime.setAuth(this.supabaseKey);
      if (source == "STORAGE")
        this.auth.signOut();
    }
  }
};

// node_modules/@supabase/supabase-js/dist/module/index.js
var createClient2 = (supabaseUrl, supabaseKey, options) => {
  return new SupabaseClient(supabaseUrl, supabaseKey, options);
};

// node_modules/react-supabase/dist/index.es.js
import { createContext as u, useContext as l, useEffect as f, useState as d, useCallback as p, useRef as h, useReducer as g } from "react";
var t = Object.defineProperty;
var r = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty;
var c = Object.prototype.propertyIsEnumerable;
var i = (r2, n2, e2) => n2 in r2 ? t(r2, n2, { enumerable: true, configurable: true, writable: true, value: e2 }) : r2[n2] = e2;
var a = (t2, r2) => {
  for (var n2 in r2 || (r2 = {}))
    o.call(r2, n2) && i(t2, n2, r2[n2]);
  if (e)
    for (var n2 of e(r2))
      c.call(r2, n2) && i(t2, n2, r2[n2]);
  return t2;
};
var s = (t2, e2) => r(t2, n(e2));
var y = u(void 0);
var b = y.Provider;
var v = y.Consumer;
function w() {
  const t2 = l(y);
  if (t2 === void 0)
    throw Error("No client has been specified using Provider.");
  return t2;
}
y.displayName = "SupabaseContext";
var j = { count: void 0, data: void 0, error: void 0, fetching: false };
function U(t2, r2 = []) {
  return p(t2, r2);
}
function x(t2, r2 = { options: {} }) {
  const n2 = w(), e2 = h(false), [o2, c2] = d(j), i2 = p(async (o3, i3) => {
    c2(s(a({}, j), { fetching: true }));
    const { count: u2, data: l2, error: f2 } = await n2.from(t2).insert(o3, i3 != null ? i3 : r2.options), d2 = { count: u2, data: l2, error: f2 };
    return e2.current && c2(s(a({}, d2), { fetching: false })), d2;
  }, [n2]);
  return f(() => (e2.current = true, () => {
    e2.current = false;
  }), []), [o2, i2];
}
function D(t2, r2 = { columns: "*", options: {} }) {
  const n2 = w(), e2 = h(false), [o2, c2] = d(s(a({}, j), { stale: false })), i2 = p(async () => {
    if (r2.pause)
      return null;
    c2((t3) => s(a({}, j), { data: t3.data, stale: true, fetching: true }));
    const o3 = n2.from(t2).select(r2.columns, r2.options), { count: i3, data: u2, error: l2 } = await (r2.filter ? r2.filter(o3) : o3), f2 = { count: i3, data: u2, error: l2 };
    return e2.current && c2(s(a({}, f2), { stale: false, fetching: false })), f2;
  }, [n2, r2, t2]);
  return f(() => (e2.current = true, i2(), () => {
    e2.current = false;
  }), [r2 == null ? void 0 : r2.filter]), [o2, i2];
}
function F(t2, r2 = { options: {} }) {
  const n2 = w(), e2 = h(false), [o2, c2] = d(j), i2 = p(async (o3, i3, u2) => {
    const l2 = i3 != null ? i3 : r2.filter;
    if (l2 === void 0)
      throw Error("update() should always be combined with `filter`");
    c2(s(a({}, j), { fetching: true }));
    const f2 = n2.from(t2).update(o3, u2 != null ? u2 : r2.options), { count: d2, data: p2, error: h2 } = await l2(f2), g2 = { count: d2, data: p2, error: h2 };
    return e2.current && c2(s(a({}, g2), { fetching: false })), g2;
  }, [n2]);
  return f(() => (e2.current = true, () => {
    e2.current = false;
  }), []), [o2, i2];
}
function R(t2, r2 = { options: {} }) {
  const n2 = w(), e2 = h(false), [o2, c2] = d(j), i2 = p(async (o3, i3, u2) => {
    const l2 = u2 != null ? u2 : r2.filter;
    c2(s(a({}, j), { fetching: true }));
    const f2 = n2.from(t2).upsert(o3, i3 != null ? i3 : r2.options), { count: d2, data: p2, error: h2 } = await (l2 ? l2(f2) : f2), g2 = { count: d2, data: p2, error: h2 };
    return e2.current && c2(s(a({}, g2), { fetching: false })), g2;
  }, [n2]);
  return f(() => (e2.current = true, () => {
    e2.current = false;
  }), []), [o2, i2];
}
function A(t2, r2 = { event: "*", table: "*" }) {
  const n2 = w();
  f(() => {
    var e2, o2;
    const c2 = n2.from((e2 = r2.table) != null ? e2 : "*").on((o2 = r2.event) != null ? o2 : "*", t2).subscribe();
    return () => {
      c2.unsubscribe();
    };
  }, []);
}
function B(t2, r2, n2 = (t3, r3) => t3.id === r3.id) {
  if (t2 === "*")
    throw Error("Must specify table or row. Cannot listen for all database changes.");
  const [e2, o2] = D(t2, r2 == null ? void 0 : r2.select), [c2, i2] = g(H(n2), e2);
  return A((t3) => i2({ type: "SUBSCRIPTION", payload: t3 }), { table: t2 }), f(() => {
    i2({ type: "FETCH", payload: e2 });
  }, [e2]), [c2, o2];
}
var H = (t2) => (r2, n2) => {
  var e2;
  const o2 = r2.data;
  switch (n2.type) {
    case "FETCH":
      return a(s(a({}, r2), { old: o2 }), n2.payload);
    case "SUBSCRIPTION":
      switch (n2.payload.eventType) {
        case "DELETE":
          return s(a({}, r2), { data: (e2 = r2.data) == null ? void 0 : e2.filter((r3) => !t2(r3, n2.payload.old)), fetching: false, old: o2 });
        case "INSERT":
          return s(a({}, r2), { data: [...o2 != null ? o2 : [], n2.payload.new], fetching: false, old: o2 });
        case "UPDATE": {
          const e3 = o2 != null ? o2 : [], c2 = e3.findIndex((r3) => t2(r3, n2.payload.new));
          return s(a({}, r2), { data: [...e3.slice(0, c2), n2.payload.new, ...e3.slice(c2 + 1)], fetching: false, old: o2 });
        }
      }
  }
};
export {
  Battery,
  Button,
  LiveblocksProvider,
  MotionButton,
  RoomProvider,
  b as SupabaseClient,
  createClient,
  createClient2 as createSupabaseClient,
  useDropzone,
  U as useFilter,
  x as useInsert,
  useMyPresence,
  useOthers,
  B as useRealtime,
  D as useSelect,
  A as useSubscription,
  F as useUpdate,
  R as useUpsert
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
