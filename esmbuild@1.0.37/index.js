var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// node_modules/reactn/build/set-global.js
var require_set_global = __commonJS({
  "node_modules/reactn/build/set-global.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _setGlobal(globalStateManager, newGlobalState, callback) {
      if (callback === void 0) {
        callback = null;
      }
      if (callback === null) {
        return globalStateManager.set(newGlobalState).then(function() {
          return globalStateManager.state;
        });
      }
      return globalStateManager.set(newGlobalState).then(function(stateChange) {
        return _setGlobal(globalStateManager, callback(globalStateManager.state, globalStateManager.dispatcherMap, stateChange));
      }).then(function() {
        return globalStateManager.state;
      });
    }
    exports.default = _setGlobal;
  }
});

// node_modules/reactn/build/utils/object-get-listener.js
var require_object_get_listener = __commonJS({
  "node_modules/reactn/build/utils/object-get-listener.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function objectGetListener(obj, listener) {
      return Object.keys(obj).reduce(function(accumulator, key) {
        Object.defineProperty(accumulator, key, {
          configurable: false,
          enumerable: true,
          get: function() {
            listener(key);
            return obj[key];
          }
        });
        return accumulator;
      }, Object.create(null));
    }
    exports.default = objectGetListener;
  }
});

// node_modules/reactn/build/global-state-manager.js
var require_global_state_manager = __commonJS({
  "node_modules/reactn/build/global-state-manager.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spread = exports && exports.__spread || function() {
      for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var object_get_listener_1 = require_object_get_listener();
    var copyObject = function(obj) {
      return Object.assign(Object.create(null), obj);
    };
    exports.INVALID_NEW_GLOBAL_STATE = new Error("ReactN global state must be a function, null, object, or Promise.");
    var GlobalStateManager = function() {
      function GlobalStateManager2(initialState, initialReducers) {
        if (initialState === void 0) {
          initialState = Object.create(null);
        }
        if (initialReducers === void 0) {
          initialReducers = Object.create(null);
        }
        this._callbacks = new Set();
        this._dispatchers = Object.create(null);
        this._middlewares = new Set();
        this._propertyListeners = new Map();
        this._queue = new Map();
        this._initialReducers = copyObject(initialReducers);
        this._initialState = copyObject(initialState);
        this._state = copyObject(initialState);
        this.addReducers(initialReducers);
      }
      GlobalStateManager2.prototype.addCallback = function(callback) {
        var _this = this;
        this._callbacks.add(callback);
        return function() {
          return _this.removeCallback(callback);
        };
      };
      GlobalStateManager2.prototype.addMiddleware = function(createMiddleware) {
        var _this = this;
        var middleware = createMiddleware(this.state, this.dispatchers);
        this._middlewares.add(middleware);
        return function() {
          return _this.removeMiddleware(middleware);
        };
      };
      GlobalStateManager2.prototype.addPropertyListener = function(property, propertyListener) {
        if (this.propertyListeners.has(property)) {
          this.propertyListeners.get(property).add(propertyListener);
        } else {
          this.propertyListeners.set(property, new Set([propertyListener]));
        }
      };
      GlobalStateManager2.prototype.addReducer = function(name, reducer) {
        var _this = this;
        this._dispatchers[name] = this.createDispatcher(reducer, name);
        return function() {
          return _this.removeDispatcher(name);
        };
      };
      GlobalStateManager2.prototype.addReducers = function(reducers) {
        var e_1, _a;
        try {
          for (var _b = __values(Object.entries(reducers)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), name_1 = _d[0], reducer = _d[1];
            this.addReducer(name_1, reducer);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      };
      GlobalStateManager2.prototype.clearQueue = function() {
        return this.queue.clear();
      };
      GlobalStateManager2.prototype.createDispatcher = function(reducer, name) {
        var _this = this;
        if (name === void 0) {
          name = reducer.name;
        }
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return _this.set(reducer.apply(void 0, __spread([_this.state, _this.dispatcherMap], args)), name, args).then(function() {
            return _this.state;
          });
        };
      };
      Object.defineProperty(GlobalStateManager2.prototype, "dispatcherMap", {
        get: function() {
          var _this = this;
          var dispatch = function(newGlobalState) {
            return _this.set(newGlobalState).then(function() {
              return _this.state;
            });
          };
          return Object.assign(dispatch, this.dispatchers);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(GlobalStateManager2.prototype, "dispatchers", {
        get: function() {
          return copyObject(this._dispatchers);
        },
        enumerable: true,
        configurable: true
      });
      GlobalStateManager2.prototype.enqueue = function(property, value) {
        this._queue.set(property, value);
      };
      GlobalStateManager2.prototype.flush = function(reducerName, reducerArgs) {
        var e_2, _a, e_3, _b, e_4, _c, e_5, _d;
        var propertyListeners = new Set();
        var stateChange = Object.create(null);
        this.queue.forEach(function(value2, key) {
          stateChange[key] = value2;
        });
        try {
          for (var _e = __values(this.queue.entries()), _f = _e.next(); !_f.done; _f = _e.next()) {
            var _g = __read(_f.value, 2), property = _g[0], value = _g[1];
            this._state[property] = value;
            if (this.propertyListeners.has(property)) {
              try {
                for (var _h = (e_3 = void 0, __values(this.propertyListeners.get(property))), _j = _h.next(); !_j.done; _j = _h.next()) {
                  var propertyListener = _j.value;
                  propertyListeners.add(propertyListener);
                }
              } catch (e_3_1) {
                e_3 = { error: e_3_1 };
              } finally {
                try {
                  if (_j && !_j.done && (_b = _h.return))
                    _b.call(_h);
                } finally {
                  if (e_3)
                    throw e_3.error;
                }
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_f && !_f.done && (_a = _e.return))
              _a.call(_e);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
        this.clearQueue();
        try {
          for (var propertyListeners_1 = __values(propertyListeners), propertyListeners_1_1 = propertyListeners_1.next(); !propertyListeners_1_1.done; propertyListeners_1_1 = propertyListeners_1.next()) {
            var propertyListener = propertyListeners_1_1.value;
            propertyListener();
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (propertyListeners_1_1 && !propertyListeners_1_1.done && (_c = propertyListeners_1.return))
              _c.call(propertyListeners_1);
          } finally {
            if (e_4)
              throw e_4.error;
          }
        }
        try {
          for (var _k = __values(this._callbacks), _l = _k.next(); !_l.done; _l = _k.next()) {
            var callback = _l.value;
            this.set(callback(this.state, this.dispatchers, stateChange, reducerName, reducerArgs));
          }
        } catch (e_5_1) {
          e_5 = { error: e_5_1 };
        } finally {
          try {
            if (_l && !_l.done && (_d = _k.return))
              _d.call(_k);
          } finally {
            if (e_5)
              throw e_5.error;
          }
        }
        return stateChange;
      };
      GlobalStateManager2.prototype.getDispatcher = function(name) {
        if (this.hasDispatcher(name)) {
          return this._dispatchers[name];
        }
        throw new Error("Cannot return unknown ReactN reducer `" + name + "`.");
      };
      GlobalStateManager2.prototype.hasCallback = function(callback) {
        return this._callbacks.has(callback);
      };
      GlobalStateManager2.prototype.hasMiddleware = function(middleware) {
        return this._middlewares.has(middleware);
      };
      GlobalStateManager2.prototype.hasPropertyListener = function(pl) {
        var e_6, _a, e_7, _b;
        try {
          for (var _c = __values(this.propertyListeners.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var propertyListeners = _d.value;
            try {
              for (var propertyListeners_2 = (e_7 = void 0, __values(propertyListeners)), propertyListeners_2_1 = propertyListeners_2.next(); !propertyListeners_2_1.done; propertyListeners_2_1 = propertyListeners_2.next()) {
                var propertyListener = propertyListeners_2_1.value;
                if (propertyListener === pl) {
                  return true;
                }
              }
            } catch (e_7_1) {
              e_7 = { error: e_7_1 };
            } finally {
              try {
                if (propertyListeners_2_1 && !propertyListeners_2_1.done && (_b = propertyListeners_2.return))
                  _b.call(propertyListeners_2);
              } finally {
                if (e_7)
                  throw e_7.error;
              }
            }
          }
        } catch (e_6_1) {
          e_6 = { error: e_6_1 };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return))
              _a.call(_c);
          } finally {
            if (e_6)
              throw e_6.error;
          }
        }
        return false;
      };
      GlobalStateManager2.prototype.hasDispatcher = function(name) {
        return Object.prototype.hasOwnProperty.call(this._dispatchers, name);
      };
      Object.defineProperty(GlobalStateManager2.prototype, "queue", {
        get: function() {
          return this._queue;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(GlobalStateManager2.prototype, "propertyListeners", {
        get: function() {
          return this._propertyListeners;
        },
        enumerable: true,
        configurable: true
      });
      GlobalStateManager2.prototype.removeCallback = function(callback) {
        return this._callbacks.delete(callback);
      };
      GlobalStateManager2.prototype.removeDispatcher = function(name) {
        if (this.hasDispatcher(name)) {
          delete this._dispatchers[name];
          return true;
        }
        return false;
      };
      GlobalStateManager2.prototype.removeMiddleware = function(middleware) {
        return this._middlewares.delete(middleware);
      };
      GlobalStateManager2.prototype.removePropertyListener = function(propertyListener) {
        var e_8, _a;
        var removed = false;
        try {
          for (var _b = __values(this.propertyListeners.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var propertyListeners = _c.value;
            if (propertyListeners.delete(propertyListener)) {
              removed = true;
            }
          }
        } catch (e_8_1) {
          e_8 = { error: e_8_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_8)
              throw e_8.error;
          }
        }
        return removed;
      };
      GlobalStateManager2.prototype.reset = function() {
        this._callbacks.clear();
        this._dispatchers = Object.create(null);
        this._middlewares.clear();
        this._propertyListeners.clear();
        this._queue.clear();
        this.addReducers(this._initialReducers);
        this._state = copyObject(this._initialState);
      };
      GlobalStateManager2.prototype.set = function(newGlobalState, reducerName, reducerArgs) {
        if (newGlobalState === null || typeof newGlobalState === "undefined") {
          return Promise.resolve(Object.create(null));
        }
        if (newGlobalState instanceof Promise) {
          return this.setPromise(newGlobalState, reducerName, reducerArgs);
        }
        if (typeof newGlobalState === "function") {
          return this.setFunction(newGlobalState, reducerName, reducerArgs);
        }
        if (typeof newGlobalState === "object") {
          return this.setObject(newGlobalState, reducerName, reducerArgs);
        }
        throw exports.INVALID_NEW_GLOBAL_STATE;
      };
      GlobalStateManager2.prototype.setFunction = function(f, reducerName, reducerArgs) {
        return this.set(f(this.state, reducerName, reducerArgs), reducerName, reducerArgs);
      };
      GlobalStateManager2.prototype.setObject = function(obj, reducerName, reducerArgs) {
        var e_9, _a;
        var properties = Object.keys(obj);
        try {
          for (var properties_1 = __values(properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
            var property = properties_1_1.value;
            var value = obj[property];
            this.enqueue(property, value);
          }
        } catch (e_9_1) {
          e_9 = { error: e_9_1 };
        } finally {
          try {
            if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return))
              _a.call(properties_1);
          } finally {
            if (e_9)
              throw e_9.error;
          }
        }
        var stateChange = this.flush(reducerName, reducerArgs);
        return Promise.resolve(stateChange);
      };
      GlobalStateManager2.prototype.setPromise = function(promise, reducerName, reducerArgs) {
        var _this = this;
        return promise.then(function(result) {
          return _this.set(result, reducerName, reducerArgs);
        });
      };
      GlobalStateManager2.prototype.spyState = function(propertyListener) {
        var _this = this;
        return object_get_listener_1.default(this._state, function(property) {
          _this.addPropertyListener(property, propertyListener);
        });
      };
      Object.defineProperty(GlobalStateManager2.prototype, "state", {
        get: function() {
          return copyObject(this._state);
        },
        enumerable: true,
        configurable: true
      });
      return GlobalStateManager2;
    }();
    exports.default = GlobalStateManager;
  }
});

// node_modules/reactn/build/default-global-state-manager.js
var require_default_global_state_manager = __commonJS({
  "node_modules/reactn/build/default-global-state-manager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var global_state_manager_1 = require_global_state_manager();
    exports.default = new global_state_manager_1.default();
  }
});

// node_modules/reactn/build/context.js
var require_context = __commonJS({
  "node_modules/reactn/build/context.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __require("react");
    var default_global_state_manager_1 = require_default_global_state_manager();
    var getContext = function() {
      if (typeof react_1.createContext === "function") {
        return react_1.createContext(default_global_state_manager_1.default);
      }
      return null;
    };
    exports.default = getContext();
  }
});

// node_modules/reactn/build/utils/get-global-state-manager.js
var require_get_global_state_manager = __commonJS({
  "node_modules/reactn/build/utils/get-global-state-manager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var context_1 = require_context();
    var default_global_state_manager_1 = require_default_global_state_manager();
    function getGlobalStateManager() {
      return context_1.default && (context_1.default._currentValue2 || context_1.default._currentValue) || default_global_state_manager_1.default;
    }
    exports.default = getGlobalStateManager;
  }
});

// node_modules/reactn/build/methods.js
var require_methods = __commonJS({
  "node_modules/reactn/build/methods.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var set_global_1 = require_set_global();
    var get_global_state_manager_1 = require_get_global_state_manager();
    function ReactNComponentWillUnmount(that) {
      get_global_state_manager_1.default().removePropertyListener(that._globalCallback);
    }
    exports.ReactNComponentWillUnmount = ReactNComponentWillUnmount;
    function ReactNComponentWillUpdate(that) {
      get_global_state_manager_1.default().removePropertyListener(that._globalCallback);
    }
    exports.ReactNComponentWillUpdate = ReactNComponentWillUpdate;
    function ReactNShouldComponentUpdate(that) {
      get_global_state_manager_1.default().removePropertyListener(that._globalCallback);
    }
    exports.ReactNShouldComponentUpdate = ReactNShouldComponentUpdate;
    function ReactNDispatch() {
      return get_global_state_manager_1.default().dispatchers;
    }
    exports.ReactNDispatch = ReactNDispatch;
    function ReactNGlobalCallback(that) {
      that.updater.enqueueForceUpdate(that, null, "forceUpdate");
    }
    exports.ReactNGlobalCallback = ReactNGlobalCallback;
    function ReactNGlobal(that, globalStateManager) {
      if (globalStateManager === void 0) {
        globalStateManager = get_global_state_manager_1.default();
      }
      return globalStateManager.spyState(that._globalCallback);
    }
    exports.ReactNGlobal = ReactNGlobal;
    function ReactNSetGlobal(newGlobalState, callback, _sync, globalStateManager) {
      if (globalStateManager === void 0) {
        globalStateManager = get_global_state_manager_1.default();
      }
      return set_global_1.default(globalStateManager, newGlobalState, callback);
    }
    exports.ReactNSetGlobal = ReactNSetGlobal;
  }
});

// node_modules/reactn/build/utils/component-will-unmount.js
var require_component_will_unmount = __commonJS({
  "node_modules/reactn/build/utils/component-will-unmount.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var methods_1 = require_methods();
    exports.componentWillUnmountPrototype = function(that) {
      var proto = Object.getPrototypeOf(that);
      if (Object.prototype.hasOwnProperty.call(proto, "componentWillUnmount")) {
        that.componentWillUnmount = function() {
          methods_1.ReactNComponentWillUnmount(that);
          proto.componentWillUnmount.bind(that)();
        };
        return true;
      }
      return false;
    };
  }
});

// node_modules/reactn/build/utils/component-will-update.js
var require_component_will_update = __commonJS({
  "node_modules/reactn/build/utils/component-will-update.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spread = exports && exports.__spread || function() {
      for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var methods_1 = require_methods();
    var React = __require("react");
    exports.componentWillUpdatePrototype = function(that) {
      var proto = Object.getPrototypeOf(that);
      var _a = __read(React.version.split(".").map(function(v) {
        return parseInt(v);
      }), 2), rVerMaj = _a[0], rVerMin = _a[1];
      if (Object.prototype.hasOwnProperty.call(proto, "componentWillUpdate") && (rVerMaj < 16 || rVerMaj === 16 && rVerMin < 3)) {
        that.componentWillUpdate = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          methods_1.ReactNComponentWillUpdate(that);
          proto.componentWillUpdate.bind(that).apply(void 0, __spread(args));
        };
        return true;
      }
      return false;
    };
  }
});

// node_modules/reactn/build/utils/should-component-update.js
var require_should_component_update = __commonJS({
  "node_modules/reactn/build/utils/should-component-update.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spread = exports && exports.__spread || function() {
      for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var methods_1 = require_methods();
    var React = __require("react");
    exports.shouldComponentUpdatePrototype = function(that) {
      var proto = Object.getPrototypeOf(that);
      var _a = __read(React.version.split(".").map(function(v) {
        return parseInt(v);
      }), 2), rVerMaj = _a[0], rVerMin = _a[1];
      if (Object.prototype.hasOwnProperty.call(proto, "shouldComponentUpdate") && (rVerMaj > 16 || rVerMaj === 16 && rVerMin >= 3)) {
        that.shouldComponentUpdate = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          methods_1.ReactNShouldComponentUpdate(that);
          return proto.shouldComponentUpdate.bind(that).apply(void 0, __spread(args));
        };
        return true;
      }
      return false;
    };
  }
});

// node_modules/reactn/build/utils/bind-lifecycle-methods.js
var require_bind_lifecycle_methods = __commonJS({
  "node_modules/reactn/build/utils/bind-lifecycle-methods.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = __require("react");
    var methods_1 = require_methods();
    var component_will_unmount_1 = require_component_will_unmount();
    var component_will_update_1 = require_component_will_update();
    var should_component_update_1 = require_should_component_update();
    function bindLifecycleMethods(that) {
      if (!component_will_unmount_1.componentWillUnmountPrototype(that)) {
        that.componentWillUnmount = function() {
          methods_1.ReactNComponentWillUnmount(that);
        };
      }
      var _a = __read(React.version.split(".").map(function(v) {
        return parseInt(v);
      }), 2), rVerMaj = _a[0], rVerMin = _a[1];
      var isPureComponent = React.PureComponent && that instanceof React.PureComponent;
      var isUsingOldReact = rVerMaj < 16 || rVerMaj === 16 && rVerMin < 3;
      if (isUsingOldReact && !component_will_update_1.componentWillUpdatePrototype(that)) {
        that.componentWillUpdate = function() {
          methods_1.ReactNComponentWillUpdate(that);
        };
      }
      if (!isUsingOldReact && isPureComponent && !component_will_update_1.componentWillUpdatePrototype(that)) {
        that.UNSAFE_componentWillUpdate = function() {
          methods_1.ReactNComponentWillUpdate(that);
        };
      }
      if (!isUsingOldReact && !isPureComponent && !should_component_update_1.shouldComponentUpdatePrototype(that)) {
        that.shouldComponentUpdate = function() {
          methods_1.ReactNShouldComponentUpdate(that);
          return true;
        };
      }
    }
    exports.default = bindLifecycleMethods;
  }
});

// node_modules/reactn/build/components.js
var require_components = __commonJS({
  "node_modules/reactn/build/components.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = __require("react");
    var methods_1 = require_methods();
    var bind_lifecycle_methods_1 = require_bind_lifecycle_methods();
    var isComponentDidMount = false;
    var isComponentDidUpdate = false;
    var isSetGlobalCallback = false;
    var ReactPureComponent = React.PureComponent || React.Component;
    var ReactNComponent = function(_super) {
      __extends(ReactNComponent2, _super);
      function ReactNComponent2(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._globalCallback = _this._globalCallback.bind(_this);
        bind_lifecycle_methods_1.default(_this);
        return _this;
      }
      Object.defineProperty(ReactNComponent2.prototype, "dispatch", {
        get: function() {
          return methods_1.ReactNDispatch();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ReactNComponent2.prototype, "global", {
        get: function() {
          return methods_1.ReactNGlobal(this);
        },
        enumerable: true,
        configurable: true
      });
      ReactNComponent2.prototype.setGlobal = function(newGlobalState, callback) {
        if (callback === void 0) {
          callback = null;
        }
        return methods_1.ReactNSetGlobal(newGlobalState, callback, !isComponentDidMount && !isComponentDidUpdate && !isSetGlobalCallback);
      };
      ReactNComponent2.prototype._globalCallback = function() {
        return methods_1.ReactNGlobalCallback(this);
      };
      return ReactNComponent2;
    }(React.Component);
    exports.ReactNComponent = ReactNComponent;
    var ReactNPureComponent = function(_super) {
      __extends(ReactNPureComponent2, _super);
      function ReactNPureComponent2(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._globalCallback = _this._globalCallback.bind(_this);
        bind_lifecycle_methods_1.default(_this);
        return _this;
      }
      Object.defineProperty(ReactNPureComponent2.prototype, "dispatch", {
        get: function() {
          return methods_1.ReactNDispatch();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ReactNPureComponent2.prototype, "global", {
        get: function() {
          return methods_1.ReactNGlobal(this);
        },
        enumerable: true,
        configurable: true
      });
      ReactNPureComponent2.prototype.setGlobal = function(newGlobalState, callback) {
        if (callback === void 0) {
          callback = null;
        }
        return methods_1.ReactNSetGlobal(newGlobalState, callback, !isComponentDidMount && !isComponentDidUpdate && !isSetGlobalCallback);
      };
      ReactNPureComponent2.prototype._globalCallback = function() {
        return methods_1.ReactNGlobalCallback(this);
      };
      return ReactNPureComponent2;
    }(ReactPureComponent);
    exports.ReactNPureComponent = ReactNPureComponent;
  }
});

// node_modules/reactn/build/add-callback.js
var require_add_callback = __commonJS({
  "node_modules/reactn/build/add-callback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _addCallback(globalStateManager, callback) {
      return globalStateManager.addCallback(callback);
    }
    exports.default = _addCallback;
  }
});

// node_modules/reactn/build/add-reducer.js
var require_add_reducer = __commonJS({
  "node_modules/reactn/build/add-reducer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _addReducer(globalStateManager, name, reducer) {
      return globalStateManager.addReducer(name, reducer);
    }
    exports.default = _addReducer;
  }
});

// node_modules/reactn/build/add-reducers.js
var require_add_reducers = __commonJS({
  "node_modules/reactn/build/add-reducers.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var add_reducer_1 = require_add_reducer();
    function _addReducers(globalStateManager, reducers) {
      var e_1, _a;
      var removeReducers = new Set();
      try {
        for (var _b = __values(Object.entries(reducers)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var _d = __read(_c.value, 2), name_1 = _d[0], reducer = _d[1];
          removeReducers.add(add_reducer_1.default(globalStateManager, name_1, reducer));
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return function() {
        var e_2, _a2;
        var success = true;
        try {
          for (var removeReducers_1 = __values(removeReducers), removeReducers_1_1 = removeReducers_1.next(); !removeReducers_1_1.done; removeReducers_1_1 = removeReducers_1.next()) {
            var removeReducer = removeReducers_1_1.value;
            success = success && removeReducer();
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (removeReducers_1_1 && !removeReducers_1_1.done && (_a2 = removeReducers_1.return))
              _a2.call(removeReducers_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
        return success;
      };
    }
    exports.default = _addReducers;
  }
});

// node_modules/use-force-update/dist/cjs/index.cjs
var require_cjs = __commonJS({
  "node_modules/use-force-update/dist/cjs/index.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = __require("react");
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    }
    var createNewObject = function() {
      return {};
    };
    function useForceUpdate() {
      var _a = __read(react.useState(createNewObject), 2), setValue = _a[1];
      return react.useCallback(function() {
        setValue(createNewObject());
      }, []);
    }
    exports["default"] = useForceUpdate;
  }
});

// node_modules/reactn/build/utils/is-property-reducer.js
var require_is_property_reducer = __commonJS({
  "node_modules/reactn/build/utils/is-property-reducer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isPropertyReducer(_reducer, property) {
      return typeof property !== "undefined";
    }
    exports.default = isPropertyReducer;
  }
});

// node_modules/reactn/build/utils/react-hooks-error.js
var require_react_hooks_error = __commonJS({
  "node_modules/reactn/build/utils/react-hooks-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Error("The installed version of React does not support Hooks. Upgrade to React v16.8.0 or later.");
  }
});

// node_modules/reactn/build/use-dispatch.js
var require_use_dispatch = __commonJS({
  "node_modules/reactn/build/use-dispatch.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spread = exports && exports.__spread || function() {
      for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __require("react");
    var use_force_update_1 = require_cjs();
    var context_1 = require_context();
    var default_global_state_manager_1 = require_default_global_state_manager();
    var is_property_reducer_1 = require_is_property_reducer();
    var react_hooks_error_1 = require_react_hooks_error();
    function _useDispatch(overrideGlobalStateManager, reducer, property) {
      if (!react_1.useContext) {
        throw react_hooks_error_1.default;
      }
      var forceUpdate = use_force_update_1.default();
      var globalStateManager = overrideGlobalStateManager || react_1.useContext(context_1.default) || default_global_state_manager_1.default;
      if (typeof reducer === "undefined") {
        return globalStateManager.dispatcherMap;
      }
      if (typeof reducer === "function") {
        if (is_property_reducer_1.default(reducer, property)) {
          var newReducer = function(global, _dispatch) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
              args[_i - 2] = arguments[_i];
            }
            var newGlobalState = Object.create(null);
            newGlobalState[property] = reducer.apply(void 0, __spread([global[property]], args));
            return newGlobalState;
          };
          var propertyDispatcher_1 = globalStateManager.createDispatcher(newReducer, reducer.name);
          Object.defineProperty(propertyDispatcher_1, 0, {
            configurable: true,
            enumerable: true,
            get: function() {
              globalStateManager.addPropertyListener(property, forceUpdate);
              return globalStateManager.state[property];
            }
          });
          propertyDispatcher_1[1] = propertyDispatcher_1;
          var propertyDispatcherSlice = function(start, end) {
            var values = [propertyDispatcher_1[0], propertyDispatcher_1[1]];
            return values.slice.apply(values, [start, end]);
          };
          propertyDispatcher_1.slice = propertyDispatcherSlice;
          var propertyDispatcherIterator = function() {
            var _a;
            var index = 0;
            var propertyDispatcherIteratorNext = function() {
              if (index < 2) {
                return {
                  done: false,
                  value: propertyDispatcher_1[index++]
                };
              }
              index = 0;
              return {
                done: true,
                value: void 0
              };
            };
            return _a = {}, _a[Symbol.iterator] = propertyDispatcher_1[Symbol.iterator], _a.next = propertyDispatcherIteratorNext, _a;
          };
          propertyDispatcher_1[Symbol.iterator] = propertyDispatcherIterator;
          return propertyDispatcher_1;
        }
        return globalStateManager.createDispatcher(reducer);
      }
      return globalStateManager.getDispatcher(reducer);
    }
    exports.default = _useDispatch;
  }
});

// node_modules/reactn/build/use-global.js
var require_use_global = __commonJS({
  "node_modules/reactn/build/use-global.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __require("react");
    var use_force_update_1 = require_cjs();
    var context_1 = require_context();
    var default_global_state_manager_1 = require_default_global_state_manager();
    var set_global_1 = require_set_global();
    var react_hooks_error_1 = require_react_hooks_error();
    function _useGlobal(overrideGlobalStateManager, property) {
      if (!react_1.useContext) {
        throw react_hooks_error_1.default;
      }
      var globalStateManager = overrideGlobalStateManager || react_1.useContext(context_1.default) || default_global_state_manager_1.default;
      var forceUpdate = use_force_update_1.default();
      var removeForceUpdateListener = function() {
        globalStateManager.removePropertyListener(forceUpdate);
      };
      if (typeof property === "undefined") {
        react_1.useEffect(function() {
          return removeForceUpdateListener;
        }, []);
        var globalStateSetter = react_1.useCallback(function(newGlobalState, callback) {
          if (callback === void 0) {
            callback = null;
          }
          return set_global_1.default(globalStateManager, newGlobalState, callback);
        }, []);
        return [globalStateManager.spyState(forceUpdate), globalStateSetter];
      }
      react_1.useEffect(function() {
        globalStateManager.addPropertyListener(property, forceUpdate);
        return removeForceUpdateListener;
      });
      var globalPropertySetter = react_1.useCallback(function(value, callback) {
        if (callback === void 0) {
          callback = null;
        }
        var newGlobalState = Object.create(null);
        newGlobalState[property] = value;
        return set_global_1.default(globalStateManager, newGlobalState, callback);
      }, []);
      return [globalStateManager.state[property], globalPropertySetter];
    }
    exports.default = _useGlobal;
  }
});

// node_modules/reactn/build/utils/react-context-error.js
var require_react_context_error = __commonJS({
  "node_modules/reactn/build/utils/react-context-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Error("The installed version of React does not support Context. Upgrade to React v16.3.0 or later.");
  }
});

// node_modules/reactn/build/with-global.js
var require_with_global = __commonJS({
  "node_modules/reactn/build/with-global.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = __require("react");
    var components_1 = require_components();
    var context_1 = require_context();
    var global_state_manager_1 = require_global_state_manager();
    var methods_1 = require_methods();
    var get_global_state_manager_1 = require_get_global_state_manager();
    var componentName = function(Component) {
      return typeof Component === "string" ? Component : Component.displayName || Component.name;
    };
    var isComponentDidMount = false;
    var isComponentDidUpdate = false;
    var isSetGlobalCallback = false;
    function _withGlobal(globalStateManager, getter, setter) {
      if (globalStateManager === void 0) {
        globalStateManager = null;
      }
      if (getter === void 0) {
        getter = function(global) {
          return global;
        };
      }
      if (setter === void 0) {
        setter = function() {
          return null;
        };
      }
      return function ReactNWithGlobal(Component) {
        var _a;
        return _a = function(_super) {
          __extends(ReactNWithGlobalHoc, _super);
          function ReactNWithGlobalHoc() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.setGlobal = function(newGlobalState, callback) {
              if (callback === void 0) {
                callback = null;
              }
              return methods_1.ReactNSetGlobal(newGlobalState, callback, !isComponentDidMount && !isComponentDidUpdate && !isSetGlobalCallback, _this.globalStateManager);
            };
            return _this;
          }
          Object.defineProperty(ReactNWithGlobalHoc.prototype, "dispatch", {
            get: function() {
              return this.globalStateManager.dispatchers;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(ReactNWithGlobalHoc.prototype, "global", {
            get: function() {
              return methods_1.ReactNGlobal(this, this.globalStateManager);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(ReactNWithGlobalHoc.prototype, "globalStateManager", {
            get: function() {
              if (globalStateManager) {
                return globalStateManager;
              }
              if (this.context instanceof global_state_manager_1.default) {
                return this.context;
              }
              return get_global_state_manager_1.default();
            },
            enumerable: true,
            configurable: true
          });
          ReactNWithGlobalHoc.prototype.render = function() {
            var lowerOrderProps = __assign(__assign(__assign({}, this.props), getter(this.global, this.dispatch, this.props)), setter(this.setGlobal, this.dispatch, this.props));
            return React.createElement(Component, __assign({}, lowerOrderProps));
          };
          return ReactNWithGlobalHoc;
        }(components_1.ReactNComponent), _a.contextType = context_1.default, _a.displayName = componentName(Component) + "-ReactN", _a;
      };
    }
    exports.default = _withGlobal;
  }
});

// node_modules/reactn/build/create-provider.js
var require_create_provider = __commonJS({
  "node_modules/reactn/build/create-provider.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = __require("react");
    var context_1 = require_context();
    var add_reducer_1 = require_add_reducer();
    var add_reducers_1 = require_add_reducers();
    var global_state_manager_1 = require_global_state_manager();
    var set_global_1 = require_set_global();
    var use_dispatch_1 = require_use_dispatch();
    var use_global_1 = require_use_global();
    var is_property_reducer_1 = require_is_property_reducer();
    var react_context_error_1 = require_react_context_error();
    var with_global_1 = require_with_global();
    function _createProvider(initialState, initialReducers) {
      if (initialState === void 0) {
        initialState = Object.create(null);
      }
      if (initialReducers === void 0) {
        initialReducers = Object.create(null);
      }
      if (context_1.default === null) {
        throw react_context_error_1.default;
      }
      var globalStateManager = new global_state_manager_1.default(initialState, initialReducers);
      return function(_super) {
        __extends(ReactNProvider, _super);
        function ReactNProvider() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        ReactNProvider.addCallback = function(f) {
          return globalStateManager.addCallback(f);
        };
        ReactNProvider.addReducer = function(name, reducer) {
          return add_reducer_1.default(globalStateManager, name, reducer);
        };
        ReactNProvider.addReducers = function(reducers) {
          return add_reducers_1.default(globalStateManager, reducers);
        };
        Object.defineProperty(ReactNProvider, "dispatch", {
          get: function() {
            return globalStateManager.dispatchers;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ReactNProvider, "dispatcherMap", {
          get: function() {
            return globalStateManager.dispatcherMap;
          },
          enumerable: true,
          configurable: true
        });
        ReactNProvider.getDispatch = function() {
          return globalStateManager.dispatchers;
        };
        ReactNProvider.getGlobal = function() {
          return globalStateManager.state;
        };
        Object.defineProperty(ReactNProvider, "global", {
          get: function() {
            return globalStateManager.state;
          },
          enumerable: true,
          configurable: true
        });
        ReactNProvider.removeCallback = function(callback) {
          return globalStateManager.removeCallback(callback);
        };
        ReactNProvider.reset = function() {
          return globalStateManager.reset();
        };
        ReactNProvider.setGlobal = function(newGlobalState, callback) {
          if (callback === void 0) {
            callback = null;
          }
          return set_global_1.default(globalStateManager, newGlobalState, callback);
        };
        ReactNProvider.useDispatch = function(reducer, property) {
          if (typeof reducer === "function") {
            if (is_property_reducer_1.default(reducer, property)) {
              return use_dispatch_1.default(globalStateManager, reducer, property);
            }
            return use_dispatch_1.default(globalStateManager, reducer);
          }
          return use_dispatch_1.default(globalStateManager, reducer);
        };
        ReactNProvider.useGlobal = function(property) {
          return use_global_1.default(globalStateManager, property);
        };
        ReactNProvider.withGlobal = function(getter, setter) {
          if (getter === void 0) {
            getter = function(global) {
              return global;
            };
          }
          if (setter === void 0) {
            setter = function() {
              return null;
            };
          }
          return with_global_1.default(globalStateManager, getter, setter);
        };
        ReactNProvider.prototype.render = function() {
          return React.createElement(context_1.default.Provider, { value: globalStateManager }, this.props.children);
        };
        return ReactNProvider;
      }(React.Component);
    }
    exports.default = _createProvider;
  }
});

// node_modules/reactn/build/decorator.js
var require_decorator = __commonJS({
  "node_modules/reactn/build/decorator.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spread = exports && exports.__spread || function() {
      for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __require("react");
    var methods_1 = require_methods();
    var isComponentDidMount = false;
    var isComponentDidUpdate = false;
    var isSetGlobalCallback = false;
    var _a = __read(react_1.version.split(".").map(function(v) {
      return parseInt(v);
    }), 2);
    var rVerMaj = _a[0];
    var rVerMin = _a[1];
    var isUsingOldReact = rVerMaj < 16 || rVerMaj === 16 && rVerMin < 3;
    var componentName = function(DecoratedComponent) {
      return typeof DecoratedComponent === "string" ? DecoratedComponent : DecoratedComponent.displayName || DecoratedComponent.name;
    };
    function ReactN(DecoratedComponent) {
      var DecoratedReactNComponent = function(_super) {
        __extends(DecoratedReactNComponent2, _super);
        function DecoratedReactNComponent2(props, context) {
          var _this = _super.call(this, props, context) || this;
          _this._globalCallback = _this._globalCallback.bind(_this);
          return _this;
        }
        DecoratedReactNComponent2.prototype.componentWillUnmount = function() {
          methods_1.ReactNComponentWillUnmount(this);
          if (_super.prototype.componentWillUnmount) {
            _super.prototype.componentWillUnmount.call(this);
          }
        };
        DecoratedReactNComponent2.prototype.componentWillUpdate = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (isUsingOldReact) {
            methods_1.ReactNComponentWillUpdate(this);
          }
          if (_super.prototype.componentWillUpdate) {
            _super.prototype.componentWillUpdate.apply(this, __spread(args));
          }
        };
        DecoratedReactNComponent2.prototype.UNSAFE_componentWillUpdate = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (!isUsingOldReact) {
            methods_1.ReactNComponentWillUpdate(this);
          }
          if (_super.prototype.UNSAFE_componentWillUpdate) {
            _super.prototype.UNSAFE_componentWillUpdate.apply(this, __spread(args));
          }
        };
        Object.defineProperty(DecoratedReactNComponent2.prototype, "dispatch", {
          get: function() {
            return methods_1.ReactNDispatch();
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(DecoratedReactNComponent2.prototype, "global", {
          get: function() {
            return methods_1.ReactNGlobal(this);
          },
          enumerable: true,
          configurable: true
        });
        DecoratedReactNComponent2.prototype.setGlobal = function(newGlobalState, callback) {
          if (callback === void 0) {
            callback = null;
          }
          return methods_1.ReactNSetGlobal(newGlobalState, callback, !isComponentDidMount && !isComponentDidUpdate && !isSetGlobalCallback);
        };
        DecoratedReactNComponent2.prototype._globalCallback = function() {
          return methods_1.ReactNGlobalCallback(this);
        };
        DecoratedReactNComponent2.displayName = componentName(DecoratedComponent) + "-ReactN";
        return DecoratedReactNComponent2;
      }(DecoratedComponent);
      return DecoratedReactNComponent;
    }
    exports.default = ReactN;
  }
});

// node_modules/reactn/build/get-dispatch.js
var require_get_dispatch = __commonJS({
  "node_modules/reactn/build/get-dispatch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _getDispatch(globalStateManager) {
      return globalStateManager.dispatchers;
    }
    exports.default = _getDispatch;
  }
});

// node_modules/reactn/build/get-global.js
var require_get_global = __commonJS({
  "node_modules/reactn/build/get-global.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _getGlobal(globalStateManager) {
      return globalStateManager.state;
    }
    exports.default = _getGlobal;
  }
});

// node_modules/reactn/build/remove-callback.js
var require_remove_callback = __commonJS({
  "node_modules/reactn/build/remove-callback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _removeCallback(globalStateManager, callback) {
      return globalStateManager.removeCallback(callback);
    }
    exports.default = _removeCallback;
  }
});

// node_modules/reactn/build/reset-global.js
var require_reset_global = __commonJS({
  "node_modules/reactn/build/reset-global.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _resetGlobal(globalStateManager) {
      return globalStateManager.reset();
    }
    exports.default = _resetGlobal;
  }
});

// node_modules/reactn/build/with-init.js
var require_with_init = __commonJS({
  "node_modules/reactn/build/with-init.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = __require("react");
    var add_reducers_1 = require_add_reducers();
    var components_1 = require_components();
    var default_global_state_manager_1 = require_default_global_state_manager();
    function _withInit(initialGlobal, initialReducers) {
      if (initialGlobal === void 0) {
        initialGlobal = null;
      }
      if (initialReducers === void 0) {
        initialReducers = null;
      }
      return function ReactNWithInit(Component, FallbackComponent) {
        if (FallbackComponent === void 0) {
          FallbackComponent = null;
        }
        return function(_super) {
          __extends(ReactNWithInitHoc, _super);
          function ReactNWithInitHoc() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
              global: !Boolean(initialGlobal),
              reducers: !Boolean(initialReducers)
            };
            return _this;
          }
          ReactNWithInitHoc.prototype.componentDidMount = function() {
            var _this = this;
            if (initialGlobal) {
              this.setGlobal(initialGlobal, function() {
                _this.setState({ global: true });
              });
            }
            if (initialReducers) {
              add_reducers_1.default(default_global_state_manager_1.default, initialReducers);
              this.setState({ reducers: true });
            }
          };
          ReactNWithInitHoc.prototype.render = function() {
            if (!this.state.global || !this.state.reducers) {
              if (FallbackComponent) {
                return React.createElement(FallbackComponent, __assign({}, this.props));
              }
              return null;
            }
            return React.createElement(Component, __assign({}, this.props));
          };
          return ReactNWithInitHoc;
        }(components_1.ReactNComponent);
      };
    }
    exports.default = _withInit;
  }
});

// node_modules/reactn/build/index.js
var require_build = __commonJS({
  "node_modules/reactn/build/index.js"(exports, module) {
    "use strict";
    var components_1 = require_components();
    var add_callback_1 = require_add_callback();
    var add_reducer_1 = require_add_reducer();
    var add_reducers_1 = require_add_reducers();
    var create_provider_1 = require_create_provider();
    var decorator_1 = require_decorator();
    var default_global_state_manager_1 = require_default_global_state_manager();
    var get_dispatch_1 = require_get_dispatch();
    var get_global_1 = require_get_global();
    var remove_callback_1 = require_remove_callback();
    var reset_global_1 = require_reset_global();
    var set_global_1 = require_set_global();
    var use_dispatch_1 = require_use_dispatch();
    var use_global_1 = require_use_global();
    var with_global_1 = require_with_global();
    var with_init_1 = require_with_init();
    var React = __require("react");
    module.exports = Object.assign(decorator_1.default, React, {
      addCallback: add_callback_1.default.bind(null, default_global_state_manager_1.default),
      addReducer: add_reducer_1.default.bind(null, default_global_state_manager_1.default),
      addReducers: add_reducers_1.default.bind(null, default_global_state_manager_1.default),
      Component: components_1.ReactNComponent,
      createProvider: create_provider_1.default,
      default: decorator_1.default,
      getDispatch: get_dispatch_1.default.bind(null, default_global_state_manager_1.default),
      getGlobal: get_global_1.default.bind(null, default_global_state_manager_1.default),
      PureComponent: components_1.ReactNPureComponent,
      removeCallback: remove_callback_1.default.bind(null, default_global_state_manager_1.default),
      resetGlobal: reset_global_1.default.bind(null, default_global_state_manager_1.default),
      setGlobal: set_global_1.default.bind(null, default_global_state_manager_1.default),
      useDispatch: use_dispatch_1.default.bind(null, null),
      useGlobal: use_global_1.default.bind(null, null),
      withGlobal: with_global_1.default.bind(null, null),
      withInit: with_init_1.default
    });
  }
});

// src/index.tsx
var import_reactn = __toModule(require_build());
import { Button } from "./Button.js";
import { Battery } from "./Battery.js";
import { MotionButton } from "./MotionButton.js";
import { Test } from "./Test.js";
var export_getGlobal = import_reactn.getGlobal;
var export_setGlobal = import_reactn.setGlobal;
var export_useGlobal = import_reactn.useGlobal;
export {
  Battery,
  Button,
  MotionButton,
  Test,
  export_getGlobal as getGlobal,
  export_setGlobal as setGlobal,
  export_useGlobal as useGlobal
};
