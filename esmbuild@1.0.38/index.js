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

// node_modules/@liveblocks/core/dist/index.js
var require_dist = __commonJS({
  "node_modules/@liveblocks/core/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var __defProp2 = Object.defineProperty;
    var __defProps = Object.defineProperties;
    var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __spreadValues = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp2.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
    var __objRest = (source, exclude) => {
      var target = {};
      for (var prop in source)
        if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
          target[prop] = source[prop];
      if (source != null && __getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(source)) {
          if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
            target[prop] = source[prop];
        }
      return target;
    };
    var __async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    function makeEventSource() {
      const _onetimeObservers = /* @__PURE__ */ new Set();
      const _observers = /* @__PURE__ */ new Set();
      function subscribe(callback) {
        _observers.add(callback);
        return () => _observers.delete(callback);
      }
      function subscribeOnce(callback) {
        _onetimeObservers.add(callback);
        return () => _onetimeObservers.delete(callback);
      }
      function notify(event) {
        _onetimeObservers.forEach((callback) => callback(event));
        _onetimeObservers.clear();
        _observers.forEach((callback) => callback(event));
      }
      function clear() {
        _onetimeObservers.clear();
        _observers.clear();
      }
      return {
        notify,
        subscribe,
        subscribeOnce,
        clear,
        observable: {
          subscribe,
          subscribeOnce
        }
      };
    }
    var _bridgeActive = false;
    function activateBridge(allowed) {
      _bridgeActive = allowed;
    }
    function sendToPanel(message, options) {
      if (typeof window === "undefined") {
        return;
      }
      const fullMsg = __spreadProps(__spreadValues({}, message), {
        source: "liveblocks-devtools-client"
      });
      if (!((options == null ? void 0 : options.force) || _bridgeActive)) {
        return;
      }
      window.postMessage(fullMsg, "*");
    }
    var eventSource = makeEventSource();
    if (typeof window !== "undefined") {
      window.addEventListener("message", (event) => {
        var _a;
        if (event.source === window && ((_a = event.data) == null ? void 0 : _a.source) === "liveblocks-devtools-panel") {
          eventSource.notify(event.data);
        } else {
        }
      });
    }
    var onMessageFromPanel = eventSource.observable;
    var VERSION = true ? "1.0.0" : "dev";
    var _devtoolsSetupHasRun = false;
    function setupDevTools(getAllRooms) {
      if (typeof window === "undefined") {
        return;
      }
      if (_devtoolsSetupHasRun) {
        return;
      }
      _devtoolsSetupHasRun = true;
      onMessageFromPanel.subscribe((msg) => {
        switch (msg.msg) {
          case "connect": {
            activateBridge(true);
            for (const roomId of getAllRooms()) {
              sendToPanel({
                msg: "room::available",
                roomId,
                clientVersion: VERSION
              });
            }
            break;
          }
        }
      });
      sendToPanel({ msg: "wake-up-devtools" }, { force: true });
    }
    var unsubsByRoomId = /* @__PURE__ */ new Map();
    function stopSyncStream(roomId) {
      var _a;
      const unsubs = (_a = unsubsByRoomId.get(roomId)) != null ? _a : [];
      unsubsByRoomId.delete(roomId);
      for (const unsub of unsubs) {
        unsub();
      }
    }
    function startSyncStream(room) {
      stopSyncStream(room.id);
      fullSync(room);
      unsubsByRoomId.set(room.id, [
        room.events.connection.subscribe(() => partialSyncConnection(room)),
        room.events.storageDidLoad.subscribeOnce(() => partialSyncStorage(room)),
        room.events.storage.subscribe(() => partialSyncStorage(room)),
        room.events.me.subscribe(() => partialSyncMe(room)),
        room.events.others.subscribe(() => partialSyncOthers(room))
      ]);
    }
    function partialSyncConnection(room) {
      sendToPanel({
        msg: "room::sync::partial",
        roomId: room.id,
        status: room.getConnectionState()
      });
    }
    function partialSyncStorage(room) {
      const root = room.getStorageSnapshot();
      if (root) {
        sendToPanel({
          msg: "room::sync::partial",
          roomId: room.id,
          storage: root.toTreeNode("root").payload
        });
      }
    }
    function partialSyncMe(room) {
      const me = room.getSelf_forDevTools();
      if (me) {
        sendToPanel({
          msg: "room::sync::partial",
          roomId: room.id,
          me
        });
      }
    }
    function partialSyncOthers(room) {
      const others = room.getOthers_forDevTools();
      if (others) {
        sendToPanel({
          msg: "room::sync::partial",
          roomId: room.id,
          others
        });
      }
    }
    function fullSync(room) {
      var _a;
      const root = room.getStorageSnapshot();
      const me = room.getSelf_forDevTools();
      const others = room.getOthers_forDevTools();
      sendToPanel({
        msg: "room::sync::full",
        roomId: room.id,
        status: room.getConnectionState(),
        storage: (_a = root == null ? void 0 : root.toTreeNode("root").payload) != null ? _a : null,
        me,
        others
      });
    }
    var roomChannelListeners = /* @__PURE__ */ new Map();
    function stopRoomChannelListener(roomId) {
      const listener = roomChannelListeners.get(roomId);
      roomChannelListeners.delete(roomId);
      if (listener) {
        listener();
      }
    }
    function linkDevTools(roomId, room) {
      if (typeof window === "undefined") {
        return;
      }
      sendToPanel({ msg: "room::available", roomId, clientVersion: VERSION });
      stopRoomChannelListener(roomId);
      roomChannelListeners.set(roomId, onMessageFromPanel.subscribe((msg) => {
        switch (msg.msg) {
          case "room::subscribe": {
            if (msg.roomId === roomId) {
              startSyncStream(room);
            }
            break;
          }
          case "room::unsubscribe": {
            if (msg.roomId === roomId) {
              stopSyncStream(roomId);
            }
            break;
          }
        }
      }));
    }
    function unlinkDevTools(roomId) {
      if (typeof window === "undefined") {
        return;
      }
      stopSyncStream(roomId);
      stopRoomChannelListener(roomId);
      sendToPanel({
        msg: "room::unavailable",
        roomId
      });
    }
    var badge = "background:#0e0d12;border-radius:9999px;color:#fff;padding:3px 7px;font-family:sans-serif;font-weight:600;";
    var bold = "font-weight:600";
    function wrap(method) {
      return typeof window === "undefined" || false ? console[method] : (message, ...args) => console[method]("%cLiveblocks", badge, message, ...args);
    }
    var warn = wrap("warn");
    var error = wrap("error");
    function wrapWithTitle(method) {
      return typeof window === "undefined" || false ? console[method] : (title, message, ...args) => console[method](`%cLiveblocks%c ${title}`, badge, bold, message, ...args);
    }
    var errorWithTitle = wrapWithTitle("error");
    var _emittedDeprecationWarnings = /* @__PURE__ */ new Set();
    function deprecate(message, key = message) {
      if (true) {
        if (!_emittedDeprecationWarnings.has(key)) {
          _emittedDeprecationWarnings.add(key);
          errorWithTitle("Deprecation warning", message);
        }
      }
    }
    function deprecateIf(condition, message, key = message) {
      if (true) {
        if (condition) {
          deprecate(message, key);
        }
      }
    }
    function throwUsageError(message) {
      if (true) {
        const usageError = new Error(message);
        usageError.name = "Usage error";
        errorWithTitle("Usage error", message);
        throw usageError;
      }
    }
    function errorIf(condition, message) {
      if (true) {
        if (condition) {
          throwUsageError(message);
        }
      }
    }
    function assertNever(_value, errmsg) {
      throw new Error(errmsg);
    }
    function assert(condition, errmsg) {
      if (true) {
        if (!condition) {
          const err = new Error(errmsg);
          err.name = "Assertion failure";
          throw err;
        }
      }
    }
    function nn(value, errmsg = "Expected value to be non-nullable") {
      assert(value !== null && value !== void 0, errmsg);
      return value;
    }
    var OpCode = /* @__PURE__ */ ((OpCode2) => {
      OpCode2[OpCode2["INIT"] = 0] = "INIT";
      OpCode2[OpCode2["SET_PARENT_KEY"] = 1] = "SET_PARENT_KEY";
      OpCode2[OpCode2["CREATE_LIST"] = 2] = "CREATE_LIST";
      OpCode2[OpCode2["UPDATE_OBJECT"] = 3] = "UPDATE_OBJECT";
      OpCode2[OpCode2["CREATE_OBJECT"] = 4] = "CREATE_OBJECT";
      OpCode2[OpCode2["DELETE_CRDT"] = 5] = "DELETE_CRDT";
      OpCode2[OpCode2["DELETE_OBJECT_KEY"] = 6] = "DELETE_OBJECT_KEY";
      OpCode2[OpCode2["CREATE_MAP"] = 7] = "CREATE_MAP";
      OpCode2[OpCode2["CREATE_REGISTER"] = 8] = "CREATE_REGISTER";
      return OpCode2;
    })(OpCode || {});
    function isAckOp(op) {
      return op.type === 5 && op.id === "ACK";
    }
    function crdtAsLiveNode(value) {
      return value;
    }
    function HasParent(node, key) {
      return Object.freeze({ type: "HasParent", node, key });
    }
    var NoParent = Object.freeze({ type: "NoParent" });
    function Orphaned(oldKey) {
      return Object.freeze({ type: "Orphaned", oldKey });
    }
    var AbstractCrdt = class {
      constructor() {
        this._parent = NoParent;
      }
      _getParentKeyOrThrow() {
        switch (this.parent.type) {
          case "HasParent":
            return this.parent.key;
          case "NoParent":
            throw new Error("Parent key is missing");
          case "Orphaned":
            return this.parent.oldKey;
          default:
            return assertNever(this.parent, "Unknown state");
        }
      }
      get _pool() {
        return this.__pool;
      }
      get roomId() {
        return this.__pool ? this.__pool.roomId : null;
      }
      get _id() {
        return this.__id;
      }
      get parent() {
        return this._parent;
      }
      get _parentNode() {
        switch (this.parent.type) {
          case "HasParent":
            return this.parent.node;
          case "NoParent":
            return null;
          case "Orphaned":
            return null;
          default:
            return assertNever(this.parent, "Unknown state");
        }
      }
      get _parentKey() {
        switch (this.parent.type) {
          case "HasParent":
            return this.parent.key;
          case "NoParent":
            return null;
          case "Orphaned":
            return this.parent.oldKey;
          default:
            return assertNever(this.parent, "Unknown state");
        }
      }
      _apply(op, _isLocal) {
        switch (op.type) {
          case 5: {
            if (this.parent.type === "HasParent") {
              return this.parent.node._detachChild(crdtAsLiveNode(this));
            }
            return { modified: false };
          }
        }
        return { modified: false };
      }
      _setParentLink(newParentNode, newParentKey) {
        switch (this.parent.type) {
          case "HasParent":
            if (this.parent.node !== newParentNode) {
              throw new Error("Cannot set parent: node already has a parent");
            } else {
              this._parent = HasParent(newParentNode, newParentKey);
              return;
            }
          case "Orphaned":
          case "NoParent": {
            this._parent = HasParent(newParentNode, newParentKey);
            return;
          }
          default:
            return assertNever(this.parent, "Unknown state");
        }
      }
      _attach(id, pool) {
        if (this.__id || this.__pool) {
          throw new Error("Cannot attach node: already attached");
        }
        pool.addNode(id, crdtAsLiveNode(this));
        this.__id = id;
        this.__pool = pool;
      }
      _detach() {
        if (this.__pool && this.__id) {
          this.__pool.deleteNode(this.__id);
        }
        switch (this.parent.type) {
          case "HasParent": {
            this._parent = Orphaned(this.parent.key);
            break;
          }
          case "NoParent": {
            this._parent = NoParent;
            break;
          }
          case "Orphaned": {
            this._parent = Orphaned(this.parent.oldKey);
            break;
          }
          default:
            assertNever(this.parent, "Unknown state");
        }
        this.__pool = void 0;
      }
      invalidate() {
        if (this._cachedImmutable !== void 0 || this._cachedTreeNode !== void 0) {
          this._cachedImmutable = void 0;
          this._cachedTreeNode = void 0;
          if (this.parent.type === "HasParent") {
            this.parent.node.invalidate();
          }
        }
      }
      toTreeNode(key) {
        if (this._cachedTreeNode === void 0 || this._cachedTreeNodeKey !== key) {
          this._cachedTreeNodeKey = key;
          this._cachedTreeNode = this._toTreeNode(key);
        }
        return this._cachedTreeNode;
      }
      toImmutable() {
        if (this._cachedImmutable === void 0) {
          this._cachedImmutable = this._toImmutable();
        }
        return this._cachedImmutable;
      }
    };
    function isPlainObject(blob) {
      return blob !== null && typeof blob === "object" && Object.prototype.toString.call(blob) === "[object Object]";
    }
    function fromEntries(iterable) {
      const obj = {};
      for (const [key, val] of iterable) {
        obj[key] = val;
      }
      return obj;
    }
    function entries(obj) {
      return Object.entries(obj);
    }
    function tryParseJson(rawMessage) {
      try {
        return JSON.parse(rawMessage);
      } catch (e) {
        return void 0;
      }
    }
    function b64decode(b64value) {
      try {
        const formattedValue = b64value.replace(/-/g, "+").replace(/_/g, "/");
        const decodedValue = decodeURIComponent(atob(formattedValue).split("").map(function(c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
        return decodedValue;
      } catch (err) {
        return atob(b64value);
      }
    }
    function compact(items) {
      return items.filter((item) => item !== null && item !== void 0);
    }
    function compactObject(obj) {
      const newObj = __spreadValues({}, obj);
      Object.keys(obj).forEach((k) => {
        const key = k;
        if (newObj[key] === void 0) {
          delete newObj[key];
        }
      });
      return newObj;
    }
    var CrdtType = /* @__PURE__ */ ((CrdtType2) => {
      CrdtType2[CrdtType2["OBJECT"] = 0] = "OBJECT";
      CrdtType2[CrdtType2["LIST"] = 1] = "LIST";
      CrdtType2[CrdtType2["MAP"] = 2] = "MAP";
      CrdtType2[CrdtType2["REGISTER"] = 3] = "REGISTER";
      return CrdtType2;
    })(CrdtType || {});
    function isRootCrdt(crdt) {
      return crdt.type === 0 && !isChildCrdt(crdt);
    }
    function isChildCrdt(crdt) {
      return crdt.parentId !== void 0 && crdt.parentKey !== void 0;
    }
    function nanoid(length = 7) {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,./;[]~!@#$%&*()_+=-";
      const len = alphabet.length;
      return Array.from({ length }, () => alphabet.charAt(Math.floor(Math.random() * len))).join("");
    }
    var min = 32;
    var max = 126;
    function makePosition(before, after) {
      if (before !== void 0 && after !== void 0) {
        return pos(makePositionFromCodes(posCodes(before), posCodes(after)));
      } else if (before !== void 0) {
        return getNextPosition(before);
      } else if (after !== void 0) {
        return getPreviousPosition(after);
      }
      return pos([min + 1]);
    }
    function getPreviousPosition(after) {
      const result = [];
      const afterCodes = posCodes(after);
      for (let i = 0; i < afterCodes.length; i++) {
        const code = afterCodes[i];
        if (code <= min + 1) {
          result.push(min);
          if (afterCodes.length - 1 === i) {
            result.push(max);
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
      for (let i = 0; i < beforeCodes.length; i++) {
        const code = beforeCodes[i];
        if (code === max) {
          result.push(code);
          if (beforeCodes.length - 1 === i) {
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
        const mid = afterDigit + beforeDigit >> 1;
        result.push(mid);
        break;
      }
      return result;
    }
    function posCodes(str) {
      const codes = [];
      for (let i = 0; i < str.length; i++) {
        codes.push(str.charCodeAt(i));
      }
      return codes;
    }
    function pos(codes) {
      return String.fromCharCode(...codes);
    }
    function comparePosition(posA, posB) {
      const aCodes = posCodes(posA);
      const bCodes = posCodes(posB);
      const maxLength = Math.max(aCodes.length, bCodes.length);
      for (let i = 0; i < maxLength; i++) {
        const a = aCodes[i] === void 0 ? min : aCodes[i];
        const b = bCodes[i] === void 0 ? min : bCodes[i];
        if (a === b) {
          continue;
        } else {
          return a - b;
        }
      }
      throw new Error(`Impossible to compare similar position "${posA}" and "${posB}"`);
    }
    var LiveRegister = class extends AbstractCrdt {
      constructor(data) {
        super();
        this._data = data;
      }
      get data() {
        return this._data;
      }
      static _deserialize([id, item], _parentToChildren, pool) {
        const register = new LiveRegister(item.data);
        register._attach(id, pool);
        return register;
      }
      _toOps(parentId, parentKey, pool) {
        if (this._id === void 0) {
          throw new Error("Cannot serialize register if parentId or parentKey is undefined");
        }
        return [
          {
            type: 8,
            opId: pool == null ? void 0 : pool.generateOpId(),
            id: this._id,
            parentId,
            parentKey,
            data: this.data
          }
        ];
      }
      _serialize() {
        if (this.parent.type !== "HasParent") {
          throw new Error("Cannot serialize LiveRegister if parent is missing");
        }
        return {
          type: 3,
          parentId: nn(this.parent.node._id, "Parent node expected to have ID"),
          parentKey: this.parent.key,
          data: this.data
        };
      }
      _attachChild(_op) {
        throw new Error("Method not implemented.");
      }
      _detachChild(_crdt) {
        throw new Error("Method not implemented.");
      }
      _apply(op, isLocal) {
        return super._apply(op, isLocal);
      }
      _toTreeNode(key) {
        var _a;
        return {
          type: "Json",
          id: (_a = this._id) != null ? _a : nanoid(),
          key,
          payload: this._data
        };
      }
      _toImmutable() {
        return this._data;
      }
    };
    function compareNodePosition(itemA, itemB) {
      return comparePosition(itemA._getParentKeyOrThrow(), itemB._getParentKeyOrThrow());
    }
    var LiveList = class extends AbstractCrdt {
      constructor(items = []) {
        super();
        this._items = [];
        this._implicitlyDeletedItems = /* @__PURE__ */ new WeakSet();
        this._unacknowledgedSets = /* @__PURE__ */ new Map();
        let position = void 0;
        for (const item of items) {
          const newPosition = makePosition(position);
          const node = lsonToLiveNode(item);
          node._setParentLink(this, newPosition);
          this._items.push(node);
          position = newPosition;
        }
      }
      static _deserialize([id], parentToChildren, pool) {
        const list = new LiveList();
        list._attach(id, pool);
        const children = parentToChildren.get(id);
        if (children === void 0) {
          return list;
        }
        for (const [id2, crdt] of children) {
          const child = deserialize([id2, crdt], parentToChildren, pool);
          child._setParentLink(list, crdt.parentKey);
          list._insertAndSort(child);
        }
        return list;
      }
      _toOps(parentId, parentKey, pool) {
        if (this._id === void 0) {
          throw new Error("Cannot serialize item is not attached");
        }
        const ops = [];
        const op = {
          id: this._id,
          opId: pool == null ? void 0 : pool.generateOpId(),
          type: 2,
          parentId,
          parentKey
        };
        ops.push(op);
        for (const item of this._items) {
          ops.push(...item._toOps(this._id, item._getParentKeyOrThrow(), pool));
        }
        return ops;
      }
      _insertAndSort(item) {
        this._items.push(item);
        this._sortItems();
      }
      _sortItems() {
        this._items.sort(compareNodePosition);
        this.invalidate();
      }
      _indexOfPosition(position) {
        return this._items.findIndex((item) => item._getParentKeyOrThrow() === position);
      }
      _attach(id, pool) {
        super._attach(id, pool);
        for (const item of this._items) {
          item._attach(pool.generateId(), pool);
        }
      }
      _detach() {
        super._detach();
        for (const item of this._items) {
          item._detach();
        }
      }
      _applySetRemote(op) {
        if (this._pool === void 0) {
          throw new Error("Can't attach child if managed pool is not present");
        }
        const { id, parentKey: key } = op;
        const child = creationOpToLiveNode(op);
        child._attach(id, this._pool);
        child._setParentLink(this, key);
        const deletedId = op.deletedId;
        const indexOfItemWithSamePosition = this._indexOfPosition(key);
        if (indexOfItemWithSamePosition !== -1) {
          const itemWithSamePosition = this._items[indexOfItemWithSamePosition];
          if (itemWithSamePosition._id === deletedId) {
            itemWithSamePosition._detach();
            this._items[indexOfItemWithSamePosition] = child;
            return {
              modified: makeUpdate(this, [
                setDelta(indexOfItemWithSamePosition, child)
              ]),
              reverse: []
            };
          } else {
            this._implicitlyDeletedItems.add(itemWithSamePosition);
            this._items[indexOfItemWithSamePosition] = child;
            const delta = [
              setDelta(indexOfItemWithSamePosition, child)
            ];
            const deleteDelta2 = this._detachItemAssociatedToSetOperation(op.deletedId);
            if (deleteDelta2) {
              delta.push(deleteDelta2);
            }
            return {
              modified: makeUpdate(this, delta),
              reverse: []
            };
          }
        } else {
          const updates = [];
          const deleteDelta2 = this._detachItemAssociatedToSetOperation(op.deletedId);
          if (deleteDelta2) {
            updates.push(deleteDelta2);
          }
          this._insertAndSort(child);
          updates.push(insertDelta(this._indexOfPosition(key), child));
          return {
            reverse: [],
            modified: makeUpdate(this, updates)
          };
        }
      }
      _applySetAck(op) {
        if (this._pool === void 0) {
          throw new Error("Can't attach child if managed pool is not present");
        }
        const delta = [];
        const deletedDelta = this._detachItemAssociatedToSetOperation(op.deletedId);
        if (deletedDelta) {
          delta.push(deletedDelta);
        }
        const unacknowledgedOpId = this._unacknowledgedSets.get(op.parentKey);
        if (unacknowledgedOpId !== void 0) {
          if (unacknowledgedOpId !== op.opId) {
            return delta.length === 0 ? { modified: false } : { modified: makeUpdate(this, delta), reverse: [] };
          } else {
            this._unacknowledgedSets.delete(op.parentKey);
          }
        }
        const indexOfItemWithSamePosition = this._indexOfPosition(op.parentKey);
        const existingItem = this._items.find((item) => item._id === op.id);
        if (existingItem !== void 0) {
          if (existingItem._parentKey === op.parentKey) {
            return {
              modified: delta.length > 0 ? makeUpdate(this, delta) : false,
              reverse: []
            };
          }
          if (indexOfItemWithSamePosition !== -1) {
            this._implicitlyDeletedItems.add(this._items[indexOfItemWithSamePosition]);
            this._items.splice(indexOfItemWithSamePosition, 1);
            delta.push(deleteDelta(indexOfItemWithSamePosition));
          }
          const previousIndex = this._items.indexOf(existingItem);
          existingItem._setParentLink(this, op.parentKey);
          this._sortItems();
          const newIndex = this._items.indexOf(existingItem);
          if (newIndex !== previousIndex) {
            delta.push(moveDelta(previousIndex, newIndex, existingItem));
          }
          return {
            modified: delta.length > 0 ? makeUpdate(this, delta) : false,
            reverse: []
          };
        } else {
          const orphan = this._pool.getNode(op.id);
          if (orphan && this._implicitlyDeletedItems.has(orphan)) {
            orphan._setParentLink(this, op.parentKey);
            this._implicitlyDeletedItems.delete(orphan);
            this._insertAndSort(orphan);
            const recreatedItemIndex = this._items.indexOf(orphan);
            return {
              modified: makeUpdate(this, [
                indexOfItemWithSamePosition === -1 ? insertDelta(recreatedItemIndex, orphan) : setDelta(recreatedItemIndex, orphan),
                ...delta
              ]),
              reverse: []
            };
          } else {
            if (indexOfItemWithSamePosition !== -1) {
              this._items.splice(indexOfItemWithSamePosition, 1);
            }
            const { newItem, newIndex } = this._createAttachItemAndSort(op, op.parentKey);
            return {
              modified: makeUpdate(this, [
                indexOfItemWithSamePosition === -1 ? insertDelta(newIndex, newItem) : setDelta(newIndex, newItem),
                ...delta
              ]),
              reverse: []
            };
          }
        }
      }
      _detachItemAssociatedToSetOperation(deletedId) {
        if (deletedId === void 0 || this._pool === void 0) {
          return null;
        }
        const deletedItem = this._pool.getNode(deletedId);
        if (deletedItem === void 0) {
          return null;
        }
        const result = this._detachChild(deletedItem);
        if (result.modified === false) {
          return null;
        }
        return result.modified.updates[0];
      }
      _applyRemoteInsert(op) {
        if (this._pool === void 0) {
          throw new Error("Can't attach child if managed pool is not present");
        }
        const key = op.parentKey;
        const existingItemIndex = this._indexOfPosition(key);
        if (existingItemIndex !== -1) {
          this._shiftItemPosition(existingItemIndex, key);
        }
        const { newItem, newIndex } = this._createAttachItemAndSort(op, key);
        return {
          modified: makeUpdate(this, [insertDelta(newIndex, newItem)]),
          reverse: []
        };
      }
      _applyInsertAck(op) {
        const existingItem = this._items.find((item) => item._id === op.id);
        const key = op.parentKey;
        const itemIndexAtPosition = this._indexOfPosition(key);
        if (existingItem) {
          if (existingItem._parentKey === key) {
            return {
              modified: false
            };
          } else {
            const oldPositionIndex = this._items.indexOf(existingItem);
            if (itemIndexAtPosition !== -1) {
              this._shiftItemPosition(itemIndexAtPosition, key);
            }
            existingItem._setParentLink(this, key);
            this._sortItems();
            const newIndex = this._indexOfPosition(key);
            if (newIndex === oldPositionIndex) {
              return { modified: false };
            }
            return {
              modified: makeUpdate(this, [
                moveDelta(oldPositionIndex, newIndex, existingItem)
              ]),
              reverse: []
            };
          }
        } else {
          const orphan = nn(this._pool).getNode(op.id);
          if (orphan && this._implicitlyDeletedItems.has(orphan)) {
            orphan._setParentLink(this, key);
            this._implicitlyDeletedItems.delete(orphan);
            this._insertAndSort(orphan);
            const newIndex = this._indexOfPosition(key);
            return {
              modified: makeUpdate(this, [insertDelta(newIndex, orphan)]),
              reverse: []
            };
          } else {
            if (itemIndexAtPosition !== -1) {
              this._shiftItemPosition(itemIndexAtPosition, key);
            }
            const { newItem, newIndex } = this._createAttachItemAndSort(op, key);
            return {
              modified: makeUpdate(this, [insertDelta(newIndex, newItem)]),
              reverse: []
            };
          }
        }
      }
      _applyInsertUndoRedo(op) {
        var _a, _b, _c;
        const { id, parentKey: key } = op;
        const child = creationOpToLiveNode(op);
        if (((_a = this._pool) == null ? void 0 : _a.getNode(id)) !== void 0) {
          return { modified: false };
        }
        child._attach(id, nn(this._pool));
        child._setParentLink(this, key);
        const existingItemIndex = this._indexOfPosition(key);
        let newKey = key;
        if (existingItemIndex !== -1) {
          const before = (_b = this._items[existingItemIndex]) == null ? void 0 : _b._getParentKeyOrThrow();
          const after = (_c = this._items[existingItemIndex + 1]) == null ? void 0 : _c._getParentKeyOrThrow();
          newKey = makePosition(before, after);
          child._setParentLink(this, newKey);
        }
        this._insertAndSort(child);
        const newIndex = this._indexOfPosition(newKey);
        return {
          modified: makeUpdate(this, [insertDelta(newIndex, child)]),
          reverse: [{ type: 5, id }]
        };
      }
      _applySetUndoRedo(op) {
        var _a;
        const { id, parentKey: key } = op;
        const child = creationOpToLiveNode(op);
        if (((_a = this._pool) == null ? void 0 : _a.getNode(id)) !== void 0) {
          return { modified: false };
        }
        this._unacknowledgedSets.set(key, nn(op.opId));
        const indexOfItemWithSameKey = this._indexOfPosition(key);
        child._attach(id, nn(this._pool));
        child._setParentLink(this, key);
        const newKey = key;
        if (indexOfItemWithSameKey !== -1) {
          const existingItem = this._items[indexOfItemWithSameKey];
          existingItem._detach();
          this._items[indexOfItemWithSameKey] = child;
          const reverse = HACK_addIntentAndDeletedIdToOperation(existingItem._toOps(nn(this._id), key, this._pool), op.id);
          const delta = [setDelta(indexOfItemWithSameKey, child)];
          const deletedDelta = this._detachItemAssociatedToSetOperation(op.deletedId);
          if (deletedDelta) {
            delta.push(deletedDelta);
          }
          return {
            modified: makeUpdate(this, delta),
            reverse
          };
        } else {
          this._insertAndSort(child);
          this._detachItemAssociatedToSetOperation(op.deletedId);
          const newIndex = this._indexOfPosition(newKey);
          return {
            reverse: [{ type: 5, id }],
            modified: makeUpdate(this, [insertDelta(newIndex, child)])
          };
        }
      }
      _attachChild(op, source) {
        if (this._pool === void 0) {
          throw new Error("Can't attach child if managed pool is not present");
        }
        let result;
        if (op.intent === "set") {
          if (source === 1) {
            result = this._applySetRemote(op);
          } else if (source === 2) {
            result = this._applySetAck(op);
          } else {
            result = this._applySetUndoRedo(op);
          }
        } else {
          if (source === 1) {
            result = this._applyRemoteInsert(op);
          } else if (source === 2) {
            result = this._applyInsertAck(op);
          } else {
            result = this._applyInsertUndoRedo(op);
          }
        }
        if (result.modified !== false) {
          this.invalidate();
        }
        return result;
      }
      _detachChild(child) {
        if (child) {
          const parentKey = nn(child._parentKey);
          const reverse = child._toOps(nn(this._id), parentKey, this._pool);
          const indexToDelete = this._items.indexOf(child);
          if (indexToDelete === -1) {
            return {
              modified: false
            };
          }
          this._items.splice(indexToDelete, 1);
          this.invalidate();
          child._detach();
          return {
            modified: makeUpdate(this, [deleteDelta(indexToDelete)]),
            reverse
          };
        }
        return { modified: false };
      }
      _applySetChildKeyRemote(newKey, child) {
        var _a;
        if (this._implicitlyDeletedItems.has(child)) {
          this._implicitlyDeletedItems.delete(child);
          child._setParentLink(this, newKey);
          this._insertAndSort(child);
          const newIndex = this._items.indexOf(child);
          return {
            modified: makeUpdate(this, [insertDelta(newIndex, child)]),
            reverse: []
          };
        }
        const previousKey = child._parentKey;
        if (newKey === previousKey) {
          return {
            modified: false
          };
        }
        const existingItemIndex = this._indexOfPosition(newKey);
        if (existingItemIndex === -1) {
          const previousIndex = this._items.indexOf(child);
          child._setParentLink(this, newKey);
          this._sortItems();
          const newIndex = this._items.indexOf(child);
          if (newIndex === previousIndex) {
            return {
              modified: false
            };
          }
          return {
            modified: makeUpdate(this, [moveDelta(previousIndex, newIndex, child)]),
            reverse: []
          };
        } else {
          this._items[existingItemIndex]._setParentLink(this, makePosition(newKey, (_a = this._items[existingItemIndex + 1]) == null ? void 0 : _a._getParentKeyOrThrow()));
          const previousIndex = this._items.indexOf(child);
          child._setParentLink(this, newKey);
          this._sortItems();
          const newIndex = this._items.indexOf(child);
          if (newIndex === previousIndex) {
            return {
              modified: false
            };
          }
          return {
            modified: makeUpdate(this, [moveDelta(previousIndex, newIndex, child)]),
            reverse: []
          };
        }
      }
      _applySetChildKeyAck(newKey, child) {
        var _a, _b;
        const previousKey = nn(child._parentKey);
        if (this._implicitlyDeletedItems.has(child)) {
          const existingItemIndex = this._indexOfPosition(newKey);
          this._implicitlyDeletedItems.delete(child);
          if (existingItemIndex !== -1) {
            this._items[existingItemIndex]._setParentLink(this, makePosition(newKey, (_a = this._items[existingItemIndex + 1]) == null ? void 0 : _a._getParentKeyOrThrow()));
          }
          child._setParentLink(this, newKey);
          this._insertAndSort(child);
          return {
            modified: false
          };
        } else {
          if (newKey === previousKey) {
            return {
              modified: false
            };
          }
          const previousIndex = this._items.indexOf(child);
          const existingItemIndex = this._indexOfPosition(newKey);
          if (existingItemIndex !== -1) {
            this._items[existingItemIndex]._setParentLink(this, makePosition(newKey, (_b = this._items[existingItemIndex + 1]) == null ? void 0 : _b._getParentKeyOrThrow()));
          }
          child._setParentLink(this, newKey);
          this._sortItems();
          const newIndex = this._items.indexOf(child);
          if (previousIndex === newIndex) {
            return {
              modified: false
            };
          } else {
            return {
              modified: makeUpdate(this, [
                moveDelta(previousIndex, newIndex, child)
              ]),
              reverse: []
            };
          }
        }
      }
      _applySetChildKeyUndoRedo(newKey, child) {
        var _a;
        const previousKey = nn(child._parentKey);
        const previousIndex = this._items.indexOf(child);
        const existingItemIndex = this._indexOfPosition(newKey);
        if (existingItemIndex !== -1) {
          this._items[existingItemIndex]._setParentLink(this, makePosition(newKey, (_a = this._items[existingItemIndex + 1]) == null ? void 0 : _a._getParentKeyOrThrow()));
        }
        child._setParentLink(this, newKey);
        this._sortItems();
        const newIndex = this._items.indexOf(child);
        if (previousIndex === newIndex) {
          return {
            modified: false
          };
        }
        return {
          modified: makeUpdate(this, [moveDelta(previousIndex, newIndex, child)]),
          reverse: [
            {
              type: 1,
              id: nn(child._id),
              parentKey: previousKey
            }
          ]
        };
      }
      _setChildKey(newKey, child, source) {
        if (source === 1) {
          return this._applySetChildKeyRemote(newKey, child);
        } else if (source === 2) {
          return this._applySetChildKeyAck(newKey, child);
        } else {
          return this._applySetChildKeyUndoRedo(newKey, child);
        }
      }
      _apply(op, isLocal) {
        return super._apply(op, isLocal);
      }
      _serialize() {
        if (this.parent.type !== "HasParent") {
          throw new Error("Cannot serialize LiveList if parent is missing");
        }
        return {
          type: 1,
          parentId: nn(this.parent.node._id, "Parent node expected to have ID"),
          parentKey: this.parent.key
        };
      }
      get length() {
        return this._items.length;
      }
      push(element) {
        var _a;
        (_a = this._pool) == null ? void 0 : _a.assertStorageIsWritable();
        return this.insert(element, this.length);
      }
      insert(element, index) {
        var _a;
        (_a = this._pool) == null ? void 0 : _a.assertStorageIsWritable();
        if (index < 0 || index > this._items.length) {
          throw new Error(`Cannot insert list item at index "${index}". index should be between 0 and ${this._items.length}`);
        }
        const before = this._items[index - 1] ? this._items[index - 1]._getParentKeyOrThrow() : void 0;
        const after = this._items[index] ? this._items[index]._getParentKeyOrThrow() : void 0;
        const position = makePosition(before, after);
        const value = lsonToLiveNode(element);
        value._setParentLink(this, position);
        this._insertAndSort(value);
        if (this._pool && this._id) {
          const id = this._pool.generateId();
          value._attach(id, this._pool);
          this._pool.dispatch(value._toOps(this._id, position, this._pool), [{ type: 5, id }], /* @__PURE__ */ new Map([
            [this._id, makeUpdate(this, [insertDelta(index, value)])]
          ]));
        }
      }
      move(index, targetIndex) {
        var _a;
        (_a = this._pool) == null ? void 0 : _a.assertStorageIsWritable();
        if (targetIndex < 0) {
          throw new Error("targetIndex cannot be less than 0");
        }
        if (targetIndex >= this._items.length) {
          throw new Error("targetIndex cannot be greater or equal than the list length");
        }
        if (index < 0) {
          throw new Error("index cannot be less than 0");
        }
        if (index >= this._items.length) {
          throw new Error("index cannot be greater or equal than the list length");
        }
        let beforePosition = null;
        let afterPosition = null;
        if (index < targetIndex) {
          afterPosition = targetIndex === this._items.length - 1 ? void 0 : this._items[targetIndex + 1]._getParentKeyOrThrow();
          beforePosition = this._items[targetIndex]._getParentKeyOrThrow();
        } else {
          afterPosition = this._items[targetIndex]._getParentKeyOrThrow();
          beforePosition = targetIndex === 0 ? void 0 : this._items[targetIndex - 1]._getParentKeyOrThrow();
        }
        const position = makePosition(beforePosition, afterPosition);
        const item = this._items[index];
        const previousPosition = item._getParentKeyOrThrow();
        item._setParentLink(this, position);
        this._sortItems();
        if (this._pool && this._id) {
          const storageUpdates = /* @__PURE__ */ new Map([
            [this._id, makeUpdate(this, [moveDelta(index, targetIndex, item)])]
          ]);
          this._pool.dispatch([
            {
              type: 1,
              id: nn(item._id),
              opId: this._pool.generateOpId(),
              parentKey: position
            }
          ], [
            {
              type: 1,
              id: nn(item._id),
              parentKey: previousPosition
            }
          ], storageUpdates);
        }
      }
      delete(index) {
        var _a;
        (_a = this._pool) == null ? void 0 : _a.assertStorageIsWritable();
        if (index < 0 || index >= this._items.length) {
          throw new Error(`Cannot delete list item at index "${index}". index should be between 0 and ${this._items.length - 1}`);
        }
        const item = this._items[index];
        item._detach();
        this._items.splice(index, 1);
        this.invalidate();
        if (this._pool) {
          const childRecordId = item._id;
          if (childRecordId) {
            const storageUpdates = /* @__PURE__ */ new Map();
            storageUpdates.set(nn(this._id), makeUpdate(this, [deleteDelta(index)]));
            this._pool.dispatch([
              {
                id: childRecordId,
                opId: this._pool.generateOpId(),
                type: 5
              }
            ], item._toOps(nn(this._id), item._getParentKeyOrThrow()), storageUpdates);
          }
        }
      }
      clear() {
        var _a;
        (_a = this._pool) == null ? void 0 : _a.assertStorageIsWritable();
        if (this._pool) {
          const ops = [];
          const reverseOps = [];
          const updateDelta = [];
          for (const item of this._items) {
            item._detach();
            const childId = item._id;
            if (childId) {
              ops.push({
                type: 5,
                id: childId,
                opId: this._pool.generateOpId()
              });
              reverseOps.push(...item._toOps(nn(this._id), item._getParentKeyOrThrow()));
              updateDelta.push(deleteDelta(0));
            }
          }
          this._items = [];
          this.invalidate();
          const storageUpdates = /* @__PURE__ */ new Map();
          storageUpdates.set(nn(this._id), makeUpdate(this, updateDelta));
          this._pool.dispatch(ops, reverseOps, storageUpdates);
        } else {
          for (const item of this._items) {
            item._detach();
          }
          this._items = [];
          this.invalidate();
        }
      }
      set(index, item) {
        var _a;
        (_a = this._pool) == null ? void 0 : _a.assertStorageIsWritable();
        if (index < 0 || index >= this._items.length) {
          throw new Error(`Cannot set list item at index "${index}". index should be between 0 and ${this._items.length - 1}`);
        }
        const existingItem = this._items[index];
        const position = existingItem._getParentKeyOrThrow();
        const existingId = existingItem._id;
        existingItem._detach();
        const value = lsonToLiveNode(item);
        value._setParentLink(this, position);
        this._items[index] = value;
        this.invalidate();
        if (this._pool && this._id) {
          const id = this._pool.generateId();
          value._attach(id, this._pool);
          const storageUpdates = /* @__PURE__ */ new Map();
          storageUpdates.set(this._id, makeUpdate(this, [setDelta(index, value)]));
          const ops = HACK_addIntentAndDeletedIdToOperation(value._toOps(this._id, position, this._pool), existingId);
          this._unacknowledgedSets.set(position, nn(ops[0].opId));
          const reverseOps = HACK_addIntentAndDeletedIdToOperation(existingItem._toOps(this._id, position, void 0), id);
          this._pool.dispatch(ops, reverseOps, storageUpdates);
        }
      }
      toArray() {
        return this._items.map((entry) => liveNodeToLson(entry));
      }
      every(predicate) {
        return this.toArray().every(predicate);
      }
      filter(predicate) {
        return this.toArray().filter(predicate);
      }
      find(predicate) {
        return this.toArray().find(predicate);
      }
      findIndex(predicate) {
        return this.toArray().findIndex(predicate);
      }
      forEach(callbackfn) {
        return this.toArray().forEach(callbackfn);
      }
      get(index) {
        if (index < 0 || index >= this._items.length) {
          return void 0;
        }
        return liveNodeToLson(this._items[index]);
      }
      indexOf(searchElement, fromIndex) {
        return this.toArray().indexOf(searchElement, fromIndex);
      }
      lastIndexOf(searchElement, fromIndex) {
        return this.toArray().lastIndexOf(searchElement, fromIndex);
      }
      map(callback) {
        return this._items.map((entry, i) => callback(liveNodeToLson(entry), i));
      }
      some(predicate) {
        return this.toArray().some(predicate);
      }
      [Symbol.iterator]() {
        return new LiveListIterator(this._items);
      }
      _createAttachItemAndSort(op, key) {
        const newItem = creationOpToLiveNode(op);
        newItem._attach(op.id, nn(this._pool));
        newItem._setParentLink(this, key);
        this._insertAndSort(newItem);
        const newIndex = this._indexOfPosition(key);
        return { newItem, newIndex };
      }
      _shiftItemPosition(index, key) {
        var _a;
        const shiftedPosition = makePosition(key, this._items.length > index + 1 ? (_a = this._items[index + 1]) == null ? void 0 : _a._getParentKeyOrThrow() : void 0);
        this._items[index]._setParentLink(this, shiftedPosition);
      }
      _toTreeNode(key) {
        var _a;
        return {
          type: "LiveList",
          id: (_a = this._id) != null ? _a : nanoid(),
          key,
          payload: this._items.map((item, index) => item.toTreeNode(index.toString()))
        };
      }
      toImmutable() {
        return super.toImmutable();
      }
      _toImmutable() {
        const result = this._items.map((node) => node.toImmutable());
        return false ? result : Object.freeze(result);
      }
    };
    var LiveListIterator = class {
      constructor(items) {
        this._innerIterator = items[Symbol.iterator]();
      }
      [Symbol.iterator]() {
        return this;
      }
      next() {
        const result = this._innerIterator.next();
        if (result.done) {
          return {
            done: true,
            value: void 0
          };
        }
        const value = liveNodeToLson(result.value);
        return { value };
      }
    };
    function makeUpdate(liveList, deltaUpdates) {
      return {
        node: liveList,
        type: "LiveList",
        updates: deltaUpdates
      };
    }
    function setDelta(index, item) {
      return {
        index,
        type: "set",
        item: item instanceof LiveRegister ? item.data : item
      };
    }
    function deleteDelta(index) {
      return {
        index,
        type: "delete"
      };
    }
    function insertDelta(index, item) {
      return {
        index,
        type: "insert",
        item: item instanceof LiveRegister ? item.data : item
      };
    }
    function moveDelta(previousIndex, index, item) {
      return {
        index,
        type: "move",
        previousIndex,
        item: item instanceof LiveRegister ? item.data : item
      };
    }
    function HACK_addIntentAndDeletedIdToOperation(ops, deletedId) {
      return ops.map((op, index) => {
        if (index === 0) {
          const firstOp = op;
          return __spreadProps(__spreadValues({}, firstOp), {
            intent: "set",
            deletedId
          });
        } else {
          return op;
        }
      });
    }
    var freeze = false ? (x) => x : Object.freeze;
    var LiveMap = class extends AbstractCrdt {
      constructor(entries2) {
        super();
        this.unacknowledgedSet = /* @__PURE__ */ new Map();
        if (entries2) {
          const mappedEntries = [];
          for (const entry of entries2) {
            const value = lsonToLiveNode(entry[1]);
            value._setParentLink(this, entry[0]);
            mappedEntries.push([entry[0], value]);
          }
          this._map = new Map(mappedEntries);
        } else {
          this._map = /* @__PURE__ */ new Map();
        }
      }
      _toOps(parentId, parentKey, pool) {
        if (this._id === void 0) {
          throw new Error("Cannot serialize item is not attached");
        }
        const ops = [];
        const op = {
          id: this._id,
          opId: pool == null ? void 0 : pool.generateOpId(),
          type: 7,
          parentId,
          parentKey
        };
        ops.push(op);
        for (const [key, value] of this._map) {
          ops.push(...value._toOps(this._id, key, pool));
        }
        return ops;
      }
      static _deserialize([id, _item], parentToChildren, pool) {
        const map = new LiveMap();
        map._attach(id, pool);
        const children = parentToChildren.get(id);
        if (children === void 0) {
          return map;
        }
        for (const [id2, crdt] of children) {
          const child = deserialize([id2, crdt], parentToChildren, pool);
          child._setParentLink(map, crdt.parentKey);
          map._map.set(crdt.parentKey, child);
          map.invalidate();
        }
        return map;
      }
      _attach(id, pool) {
        super._attach(id, pool);
        for (const [_key, value] of this._map) {
          if (isLiveNode(value)) {
            value._attach(pool.generateId(), pool);
          }
        }
      }
      _attachChild(op, source) {
        if (this._pool === void 0) {
          throw new Error("Can't attach child if managed pool is not present");
        }
        const { id, parentKey, opId } = op;
        const key = parentKey;
        const child = creationOpToLiveNode(op);
        if (this._pool.getNode(id) !== void 0) {
          return { modified: false };
        }
        if (source === 2) {
          const lastUpdateOpId = this.unacknowledgedSet.get(key);
          if (lastUpdateOpId === opId) {
            this.unacknowledgedSet.delete(key);
            return { modified: false };
          } else if (lastUpdateOpId !== void 0) {
            return { modified: false };
          }
        } else if (source === 1) {
          this.unacknowledgedSet.delete(key);
        }
        const previousValue = this._map.get(key);
        let reverse;
        if (previousValue) {
          const thisId = nn(this._id);
          reverse = previousValue._toOps(thisId, key);
          previousValue._detach();
        } else {
          reverse = [{ type: 5, id }];
        }
        child._setParentLink(this, key);
        child._attach(id, this._pool);
        this._map.set(key, child);
        this.invalidate();
        return {
          modified: {
            node: this,
            type: "LiveMap",
            updates: { [key]: { type: "update" } }
          },
          reverse
        };
      }
      _detach() {
        super._detach();
        for (const item of this._map.values()) {
          item._detach();
        }
      }
      _detachChild(child) {
        const id = nn(this._id);
        const parentKey = nn(child._parentKey);
        const reverse = child._toOps(id, parentKey, this._pool);
        for (const [key, value] of this._map) {
          if (value === child) {
            this._map.delete(key);
            this.invalidate();
          }
        }
        child._detach();
        const storageUpdate = {
          node: this,
          type: "LiveMap",
          updates: { [parentKey]: { type: "delete" } }
        };
        return { modified: storageUpdate, reverse };
      }
      _serialize() {
        if (this.parent.type !== "HasParent") {
          throw new Error("Cannot serialize LiveMap if parent is missing");
        }
        return {
          type: 2,
          parentId: nn(this.parent.node._id, "Parent node expected to have ID"),
          parentKey: this.parent.key
        };
      }
      get(key) {
        const value = this._map.get(key);
        if (value === void 0) {
          return void 0;
        }
        return liveNodeToLson(value);
      }
      set(key, value) {
        var _a;
        (_a = this._pool) == null ? void 0 : _a.assertStorageIsWritable();
        const oldValue = this._map.get(key);
        if (oldValue) {
          oldValue._detach();
        }
        const item = lsonToLiveNode(value);
        item._setParentLink(this, key);
        this._map.set(key, item);
        this.invalidate();
        if (this._pool && this._id) {
          const id = this._pool.generateId();
          item._attach(id, this._pool);
          const storageUpdates = /* @__PURE__ */ new Map();
          storageUpdates.set(this._id, {
            node: this,
            type: "LiveMap",
            updates: { [key]: { type: "update" } }
          });
          const ops = item._toOps(this._id, key, this._pool);
          this.unacknowledgedSet.set(key, nn(ops[0].opId));
          this._pool.dispatch(item._toOps(this._id, key, this._pool), oldValue ? oldValue._toOps(this._id, key) : [{ type: 5, id }], storageUpdates);
        }
      }
      get size() {
        return this._map.size;
      }
      has(key) {
        return this._map.has(key);
      }
      delete(key) {
        var _a;
        (_a = this._pool) == null ? void 0 : _a.assertStorageIsWritable();
        const item = this._map.get(key);
        if (item === void 0) {
          return false;
        }
        item._detach();
        this._map.delete(key);
        this.invalidate();
        if (this._pool && item._id) {
          const thisId = nn(this._id);
          const storageUpdates = /* @__PURE__ */ new Map();
          storageUpdates.set(thisId, {
            node: this,
            type: "LiveMap",
            updates: { [key]: { type: "delete" } }
          });
          this._pool.dispatch([
            {
              type: 5,
              id: item._id,
              opId: this._pool.generateOpId()
            }
          ], item._toOps(thisId, key), storageUpdates);
        }
        return true;
      }
      entries() {
        const innerIterator = this._map.entries();
        return {
          [Symbol.iterator]() {
            return this;
          },
          next() {
            const iteratorValue = innerIterator.next();
            if (iteratorValue.done) {
              return {
                done: true,
                value: void 0
              };
            }
            const entry = iteratorValue.value;
            const key = entry[0];
            const value = liveNodeToLson(iteratorValue.value[1]);
            return {
              value: [key, value]
            };
          }
        };
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      keys() {
        return this._map.keys();
      }
      values() {
        const innerIterator = this._map.values();
        return {
          [Symbol.iterator]() {
            return this;
          },
          next() {
            const iteratorValue = innerIterator.next();
            if (iteratorValue.done) {
              return {
                done: true,
                value: void 0
              };
            }
            const value = liveNodeToLson(iteratorValue.value);
            return { value };
          }
        };
      }
      forEach(callback) {
        for (const entry of this) {
          callback(entry[1], entry[0], this);
        }
      }
      _toTreeNode(key) {
        var _a;
        return {
          type: "LiveMap",
          id: (_a = this._id) != null ? _a : nanoid(),
          key,
          payload: Array.from(this._map.entries()).map(([key2, val]) => val.toTreeNode(key2))
        };
      }
      toImmutable() {
        return super.toImmutable();
      }
      _toImmutable() {
        const result = /* @__PURE__ */ new Map();
        for (const [key, value] of this._map) {
          result.set(key, value.toImmutable());
        }
        return freeze(result);
      }
    };
    var LiveObject = class extends AbstractCrdt {
      constructor(obj = {}) {
        super();
        this._propToLastUpdate = /* @__PURE__ */ new Map();
        for (const key in obj) {
          const value = obj[key];
          if (value === void 0) {
            continue;
          } else if (isLiveNode(value)) {
            value._setParentLink(this, key);
          }
        }
        this._map = new Map(Object.entries(obj));
      }
      _toOps(parentId, parentKey, pool) {
        if (this._id === void 0) {
          throw new Error("Cannot serialize item is not attached");
        }
        const opId = pool == null ? void 0 : pool.generateOpId();
        const ops = [];
        const op = parentId !== void 0 && parentKey !== void 0 ? {
          type: 4,
          id: this._id,
          opId,
          parentId,
          parentKey,
          data: {}
        } : { type: 4, id: this._id, opId, data: {} };
        ops.push(op);
        for (const [key, value] of this._map) {
          if (isLiveNode(value)) {
            ops.push(...value._toOps(this._id, key, pool));
          } else {
            op.data[key] = value;
          }
        }
        return ops;
      }
      static _deserialize([id, item], parentToChildren, pool) {
        const liveObj = new LiveObject(item.data);
        liveObj._attach(id, pool);
        return this._deserializeChildren(liveObj, parentToChildren, pool);
      }
      static _deserializeChildren(liveObj, parentToChildren, pool) {
        const children = parentToChildren.get(nn(liveObj._id));
        if (children === void 0) {
          return liveObj;
        }
        for (const [id, crdt] of children) {
          const child = deserializeToLson([id, crdt], parentToChildren, pool);
          if (isLiveStructure(child)) {
            child._setParentLink(liveObj, crdt.parentKey);
          }
          liveObj._map.set(crdt.parentKey, child);
          liveObj.invalidate();
        }
        return liveObj;
      }
      _attach(id, pool) {
        super._attach(id, pool);
        for (const [_key, value] of this._map) {
          if (isLiveNode(value)) {
            value._attach(pool.generateId(), pool);
          }
        }
      }
      _attachChild(op, source) {
        if (this._pool === void 0) {
          throw new Error("Can't attach child if managed pool is not present");
        }
        const { id, opId, parentKey: key } = op;
        const child = creationOpToLson(op);
        if (this._pool.getNode(id) !== void 0) {
          if (this._propToLastUpdate.get(key) === opId) {
            this._propToLastUpdate.delete(key);
          }
          return { modified: false };
        }
        if (source === 0) {
          this._propToLastUpdate.set(key, nn(opId));
        } else if (this._propToLastUpdate.get(key) === void 0) {
        } else if (this._propToLastUpdate.get(key) === opId) {
          this._propToLastUpdate.delete(key);
          return { modified: false };
        } else {
          return { modified: false };
        }
        const thisId = nn(this._id);
        const previousValue = this._map.get(key);
        let reverse;
        if (isLiveNode(previousValue)) {
          reverse = previousValue._toOps(thisId, key);
          previousValue._detach();
        } else if (previousValue === void 0) {
          reverse = [{ type: 6, id: thisId, key }];
        } else {
          reverse = [
            {
              type: 3,
              id: thisId,
              data: { [key]: previousValue }
            }
          ];
        }
        this._map.set(key, child);
        this.invalidate();
        if (isLiveStructure(child)) {
          child._setParentLink(this, key);
          child._attach(id, this._pool);
        }
        return {
          reverse,
          modified: {
            node: this,
            type: "LiveObject",
            updates: { [key]: { type: "update" } }
          }
        };
      }
      _detachChild(child) {
        if (child) {
          const id = nn(this._id);
          const parentKey = nn(child._parentKey);
          const reverse = child._toOps(id, parentKey, this._pool);
          for (const [key, value] of this._map) {
            if (value === child) {
              this._map.delete(key);
              this.invalidate();
            }
          }
          child._detach();
          const storageUpdate = {
            node: this,
            type: "LiveObject",
            updates: {
              [parentKey]: { type: "delete" }
            }
          };
          return { modified: storageUpdate, reverse };
        }
        return { modified: false };
      }
      _detach() {
        super._detach();
        for (const value of this._map.values()) {
          if (isLiveNode(value)) {
            value._detach();
          }
        }
      }
      _apply(op, isLocal) {
        if (op.type === 3) {
          return this._applyUpdate(op, isLocal);
        } else if (op.type === 6) {
          return this._applyDeleteObjectKey(op, isLocal);
        }
        return super._apply(op, isLocal);
      }
      _serialize() {
        const data = {};
        for (const [key, value] of this._map) {
          if (!isLiveNode(value)) {
            data[key] = value;
          }
        }
        if (this.parent.type === "HasParent" && this.parent.node._id) {
          return {
            type: 0,
            parentId: this.parent.node._id,
            parentKey: this.parent.key,
            data
          };
        } else {
          return {
            type: 0,
            data
          };
        }
      }
      _applyUpdate(op, isLocal) {
        let isModified = false;
        const id = nn(this._id);
        const reverse = [];
        const reverseUpdate = {
          type: 3,
          id,
          data: {}
        };
        reverse.push(reverseUpdate);
        for (const key in op.data) {
          const oldValue = this._map.get(key);
          if (isLiveNode(oldValue)) {
            reverse.push(...oldValue._toOps(id, key));
            oldValue._detach();
          } else if (oldValue !== void 0) {
            reverseUpdate.data[key] = oldValue;
          } else if (oldValue === void 0) {
            reverse.push({ type: 6, id, key });
          }
        }
        const updateDelta = {};
        for (const key in op.data) {
          const value = op.data[key];
          if (value === void 0) {
            continue;
          }
          if (isLocal) {
            this._propToLastUpdate.set(key, nn(op.opId));
          } else if (this._propToLastUpdate.get(key) === void 0) {
            isModified = true;
          } else if (this._propToLastUpdate.get(key) === op.opId) {
            this._propToLastUpdate.delete(key);
            continue;
          } else {
            continue;
          }
          const oldValue = this._map.get(key);
          if (isLiveNode(oldValue)) {
            oldValue._detach();
          }
          isModified = true;
          updateDelta[key] = { type: "update" };
          this._map.set(key, value);
          this.invalidate();
        }
        if (Object.keys(reverseUpdate.data).length !== 0) {
          reverse.unshift(reverseUpdate);
        }
        return isModified ? {
          modified: {
            node: this,
            type: "LiveObject",
            updates: updateDelta
          },
          reverse
        } : { modified: false };
      }
      _applyDeleteObjectKey(op, isLocal) {
        const key = op.key;
        if (this._map.has(key) === false) {
          return { modified: false };
        }
        if (!isLocal && this._propToLastUpdate.get(key) !== void 0) {
          return { modified: false };
        }
        const oldValue = this._map.get(key);
        const id = nn(this._id);
        let reverse = [];
        if (isLiveNode(oldValue)) {
          reverse = oldValue._toOps(id, op.key);
          oldValue._detach();
        } else if (oldValue !== void 0) {
          reverse = [
            {
              type: 3,
              id,
              data: { [key]: oldValue }
            }
          ];
        }
        this._map.delete(key);
        this.invalidate();
        return {
          modified: {
            node: this,
            type: "LiveObject",
            updates: { [op.key]: { type: "delete" } }
          },
          reverse
        };
      }
      toObject() {
        return fromEntries(this._map);
      }
      set(key, value) {
        var _a;
        (_a = this._pool) == null ? void 0 : _a.assertStorageIsWritable();
        this.update({ [key]: value });
      }
      get(key) {
        return this._map.get(key);
      }
      delete(key) {
        var _a;
        (_a = this._pool) == null ? void 0 : _a.assertStorageIsWritable();
        const keyAsString = key;
        const oldValue = this._map.get(keyAsString);
        if (oldValue === void 0) {
          return;
        }
        if (this._pool === void 0 || this._id === void 0) {
          if (isLiveNode(oldValue)) {
            oldValue._detach();
          }
          this._map.delete(keyAsString);
          this.invalidate();
          return;
        }
        let reverse;
        if (isLiveNode(oldValue)) {
          oldValue._detach();
          reverse = oldValue._toOps(this._id, keyAsString);
        } else {
          reverse = [
            {
              type: 3,
              data: { [keyAsString]: oldValue },
              id: this._id
            }
          ];
        }
        this._map.delete(keyAsString);
        this.invalidate();
        const storageUpdates = /* @__PURE__ */ new Map();
        storageUpdates.set(this._id, {
          node: this,
          type: "LiveObject",
          updates: { [key]: { type: "delete" } }
        });
        this._pool.dispatch([
          {
            type: 6,
            key: keyAsString,
            id: this._id,
            opId: this._pool.generateOpId()
          }
        ], reverse, storageUpdates);
      }
      update(patch) {
        var _a;
        (_a = this._pool) == null ? void 0 : _a.assertStorageIsWritable();
        if (this._pool === void 0 || this._id === void 0) {
          for (const key in patch) {
            const newValue = patch[key];
            if (newValue === void 0) {
              continue;
            }
            const oldValue = this._map.get(key);
            if (isLiveNode(oldValue)) {
              oldValue._detach();
            }
            if (isLiveNode(newValue)) {
              newValue._setParentLink(this, key);
            }
            this._map.set(key, newValue);
            this.invalidate();
          }
          return;
        }
        const ops = [];
        const reverseOps = [];
        const opId = this._pool.generateOpId();
        const updatedProps = {};
        const reverseUpdateOp = {
          id: this._id,
          type: 3,
          data: {}
        };
        const updateDelta = {};
        for (const key in patch) {
          const newValue = patch[key];
          if (newValue === void 0) {
            continue;
          }
          const oldValue = this._map.get(key);
          if (isLiveNode(oldValue)) {
            reverseOps.push(...oldValue._toOps(this._id, key));
            oldValue._detach();
          } else if (oldValue === void 0) {
            reverseOps.push({ type: 6, id: this._id, key });
          } else {
            reverseUpdateOp.data[key] = oldValue;
          }
          if (isLiveNode(newValue)) {
            newValue._setParentLink(this, key);
            newValue._attach(this._pool.generateId(), this._pool);
            const newAttachChildOps = newValue._toOps(this._id, key, this._pool);
            const createCrdtOp = newAttachChildOps.find((op) => op.parentId === this._id);
            if (createCrdtOp) {
              this._propToLastUpdate.set(key, nn(createCrdtOp.opId));
            }
            ops.push(...newAttachChildOps);
          } else {
            updatedProps[key] = newValue;
            this._propToLastUpdate.set(key, opId);
          }
          this._map.set(key, newValue);
          this.invalidate();
          updateDelta[key] = { type: "update" };
        }
        if (Object.keys(reverseUpdateOp.data).length !== 0) {
          reverseOps.unshift(reverseUpdateOp);
        }
        if (Object.keys(updatedProps).length !== 0) {
          ops.unshift({
            opId,
            id: this._id,
            type: 3,
            data: updatedProps
          });
        }
        const storageUpdates = /* @__PURE__ */ new Map();
        storageUpdates.set(this._id, {
          node: this,
          type: "LiveObject",
          updates: updateDelta
        });
        this._pool.dispatch(ops, reverseOps, storageUpdates);
      }
      toImmutable() {
        return super.toImmutable();
      }
      toTreeNode(key) {
        return super.toTreeNode(key);
      }
      _toTreeNode(key) {
        var _a;
        const nodeId = (_a = this._id) != null ? _a : nanoid();
        return {
          type: "LiveObject",
          id: nodeId,
          key,
          payload: Array.from(this._map.entries()).map(([key2, value]) => isLiveNode(value) ? value.toTreeNode(key2) : { type: "Json", id: `${nodeId}:${key2}`, key: key2, payload: value })
        };
      }
      _toImmutable() {
        const result = {};
        for (const [key, val] of this._map) {
          result[key] = isLiveStructure(val) ? val.toImmutable() : val;
        }
        return false ? result : Object.freeze(result);
      }
    };
    function creationOpToLiveNode(op) {
      return lsonToLiveNode(creationOpToLson(op));
    }
    function creationOpToLson(op) {
      switch (op.type) {
        case 8:
          return op.data;
        case 4:
          return new LiveObject(op.data);
        case 7:
          return new LiveMap();
        case 2:
          return new LiveList();
        default:
          return assertNever(op, "Unknown creation Op");
      }
    }
    function isSameNodeOrChildOf(node, parent) {
      if (node === parent) {
        return true;
      }
      if (node.parent.type === "HasParent") {
        return isSameNodeOrChildOf(node.parent.node, parent);
      }
      return false;
    }
    function deserialize([id, crdt], parentToChildren, pool) {
      switch (crdt.type) {
        case 0: {
          return LiveObject._deserialize([id, crdt], parentToChildren, pool);
        }
        case 1: {
          return LiveList._deserialize([id, crdt], parentToChildren, pool);
        }
        case 2: {
          return LiveMap._deserialize([id, crdt], parentToChildren, pool);
        }
        case 3: {
          return LiveRegister._deserialize([id, crdt], parentToChildren, pool);
        }
        default: {
          throw new Error("Unexpected CRDT type");
        }
      }
    }
    function deserializeToLson([id, crdt], parentToChildren, pool) {
      switch (crdt.type) {
        case 0: {
          return LiveObject._deserialize([id, crdt], parentToChildren, pool);
        }
        case 1: {
          return LiveList._deserialize([id, crdt], parentToChildren, pool);
        }
        case 2: {
          return LiveMap._deserialize([id, crdt], parentToChildren, pool);
        }
        case 3: {
          return crdt.data;
        }
        default: {
          throw new Error("Unexpected CRDT type");
        }
      }
    }
    function isLiveStructure(value) {
      return isLiveList(value) || isLiveMap(value) || isLiveObject(value);
    }
    function isLiveNode(value) {
      return isLiveStructure(value) || isLiveRegister(value);
    }
    function isLiveList(value) {
      return value instanceof LiveList;
    }
    function isLiveMap(value) {
      return value instanceof LiveMap;
    }
    function isLiveObject(value) {
      return value instanceof LiveObject;
    }
    function isLiveRegister(value) {
      return value instanceof LiveRegister;
    }
    function liveNodeToLson(obj) {
      if (obj instanceof LiveRegister) {
        return obj.data;
      } else if (obj instanceof LiveList || obj instanceof LiveMap || obj instanceof LiveObject) {
        return obj;
      } else {
        return assertNever(obj, "Unknown AbstractCrdt");
      }
    }
    function lsonToLiveNode(value) {
      if (value instanceof LiveObject || value instanceof LiveMap || value instanceof LiveList) {
        return value;
      } else {
        return new LiveRegister(value);
      }
    }
    function getTreesDiffOperations(currentItems, newItems) {
      const ops = [];
      currentItems.forEach((_, id) => {
        if (!newItems.get(id)) {
          ops.push({
            type: 5,
            id
          });
        }
      });
      newItems.forEach((crdt, id) => {
        const currentCrdt = currentItems.get(id);
        if (currentCrdt) {
          if (crdt.type === 0) {
            if (currentCrdt.type !== 0 || JSON.stringify(crdt.data) !== JSON.stringify(currentCrdt.data)) {
              ops.push({
                type: 3,
                id,
                data: crdt.data
              });
            }
          }
          if (crdt.parentKey !== currentCrdt.parentKey) {
            ops.push({
              type: 1,
              id,
              parentKey: nn(crdt.parentKey, "Parent key must not be missing")
            });
          }
        } else {
          switch (crdt.type) {
            case 3:
              ops.push({
                type: 8,
                id,
                parentId: crdt.parentId,
                parentKey: crdt.parentKey,
                data: crdt.data
              });
              break;
            case 1:
              ops.push({
                type: 2,
                id,
                parentId: crdt.parentId,
                parentKey: crdt.parentKey
              });
              break;
            case 0:
              ops.push(crdt.parentId ? {
                type: 4,
                id,
                parentId: crdt.parentId,
                parentKey: crdt.parentKey,
                data: crdt.data
              } : { type: 4, id, data: crdt.data });
              break;
            case 2:
              ops.push({
                type: 7,
                id,
                parentId: crdt.parentId,
                parentKey: crdt.parentKey
              });
              break;
          }
        }
      });
      return ops;
    }
    function mergeObjectStorageUpdates(first, second) {
      const updates = first.updates;
      for (const [key, value] of entries(second.updates)) {
        updates[key] = value;
      }
      return __spreadProps(__spreadValues({}, second), {
        updates
      });
    }
    function mergeMapStorageUpdates(first, second) {
      const updates = first.updates;
      for (const [key, value] of entries(second.updates)) {
        updates[key] = value;
      }
      return __spreadProps(__spreadValues({}, second), {
        updates
      });
    }
    function mergeListStorageUpdates(first, second) {
      const updates = first.updates;
      return __spreadProps(__spreadValues({}, second), {
        updates: updates.concat(second.updates)
      });
    }
    function mergeStorageUpdates(first, second) {
      if (!first) {
        return second;
      }
      if (first.type === "LiveObject" && second.type === "LiveObject") {
        return mergeObjectStorageUpdates(first, second);
      } else if (first.type === "LiveMap" && second.type === "LiveMap") {
        return mergeMapStorageUpdates(first, second);
      } else if (first.type === "LiveList" && second.type === "LiveList") {
        return mergeListStorageUpdates(first, second);
      } else {
      }
      return second;
    }
    function isPlain(value) {
      const type = typeof value;
      return value === void 0 || value === null || type === "string" || type === "boolean" || type === "number" || Array.isArray(value) || isPlainObject(value);
    }
    function findNonSerializableValue(value, path = "") {
      if (!isPlain) {
        return {
          path: path || "root",
          value
        };
      }
      if (typeof value !== "object" || value === null) {
        return false;
      }
      for (const [key, nestedValue] of Object.entries(value)) {
        const nestedPath = path ? path + "." + key : key;
        if (!isPlain(nestedValue)) {
          return {
            path: nestedPath,
            value: nestedValue
          };
        }
        if (typeof nestedValue === "object") {
          const nonSerializableNestedValue = findNonSerializableValue(nestedValue, nestedPath);
          if (nonSerializableNestedValue) {
            return nonSerializableNestedValue;
          }
        }
      }
      return false;
    }
    function isJsonScalar(data) {
      return data === null || typeof data === "string" || typeof data === "number" || typeof data === "boolean";
    }
    function isJsonArray(data) {
      return Array.isArray(data);
    }
    function isJsonObject(data) {
      return !isJsonScalar(data) && !isJsonArray(data);
    }
    function hasJwtMeta(data) {
      if (!isPlainObject(data)) {
        return false;
      }
      const { iat, exp } = data;
      return typeof iat === "number" && typeof exp === "number";
    }
    function isTokenExpired(token) {
      const now = Date.now() / 1e3;
      return now > token.exp - 300 || now < token.iat + 300;
    }
    function isStringList(value) {
      return Array.isArray(value) && value.every((i) => typeof i === "string");
    }
    function isAppOnlyAuthToken(data) {
      return typeof data.appId === "string" && data.roomId === void 0 && isStringList(data.scopes);
    }
    function isRoomAuthToken(data) {
      return typeof data.appId === "string" && typeof data.roomId === "string" && typeof data.actor === "number" && (data.id === void 0 || typeof data.id === "string") && isStringList(data.scopes) && (data.maxConnectionsPerRoom === void 0 || typeof data.maxConnectionsPerRoom === "number");
    }
    function isAuthToken(data) {
      return isAppOnlyAuthToken(data) || isRoomAuthToken(data);
    }
    function parseJwtToken(token) {
      const tokenParts = token.split(".");
      if (tokenParts.length !== 3) {
        throw new Error("Authentication error: invalid JWT token");
      }
      const data = tryParseJson(b64decode(tokenParts[1]));
      if (data && hasJwtMeta(data)) {
        return data;
      } else {
        throw new Error("Authentication error: missing JWT metadata");
      }
    }
    function parseRoomAuthToken(tokenString) {
      const data = parseJwtToken(tokenString);
      if (data && isRoomAuthToken(data)) {
        const _a = data, {
          maxConnections: _legacyField
        } = _a, token = __objRest(_a, [
          "maxConnections"
        ]);
        return token;
      } else {
        throw new Error("Authentication error: we expected a room token but did not get one. Hint: if you are using a callback, ensure the room is passed when creating the token. For more information: https://liveblocks.io/docs/api-reference/liveblocks-client#createClientCallback");
      }
    }
    var ClientMsgCode = /* @__PURE__ */ ((ClientMsgCode2) => {
      ClientMsgCode2[ClientMsgCode2["UPDATE_PRESENCE"] = 100] = "UPDATE_PRESENCE";
      ClientMsgCode2[ClientMsgCode2["BROADCAST_EVENT"] = 103] = "BROADCAST_EVENT";
      ClientMsgCode2[ClientMsgCode2["FETCH_STORAGE"] = 200] = "FETCH_STORAGE";
      ClientMsgCode2[ClientMsgCode2["UPDATE_STORAGE"] = 201] = "UPDATE_STORAGE";
      return ClientMsgCode2;
    })(ClientMsgCode || {});
    var ServerMsgCode = /* @__PURE__ */ ((ServerMsgCode2) => {
      ServerMsgCode2[ServerMsgCode2["UPDATE_PRESENCE"] = 100] = "UPDATE_PRESENCE";
      ServerMsgCode2[ServerMsgCode2["USER_JOINED"] = 101] = "USER_JOINED";
      ServerMsgCode2[ServerMsgCode2["USER_LEFT"] = 102] = "USER_LEFT";
      ServerMsgCode2[ServerMsgCode2["BROADCASTED_EVENT"] = 103] = "BROADCASTED_EVENT";
      ServerMsgCode2[ServerMsgCode2["ROOM_STATE"] = 104] = "ROOM_STATE";
      ServerMsgCode2[ServerMsgCode2["INITIAL_STORAGE_STATE"] = 200] = "INITIAL_STORAGE_STATE";
      ServerMsgCode2[ServerMsgCode2["UPDATE_STORAGE"] = 201] = "UPDATE_STORAGE";
      ServerMsgCode2[ServerMsgCode2["REJECT_STORAGE_OP"] = 299] = "REJECT_STORAGE_OP";
      return ServerMsgCode2;
    })(ServerMsgCode || {});
    function merge(target, patch) {
      let updated = false;
      const newValue = __spreadValues({}, target);
      Object.keys(patch).forEach((k) => {
        const key = k;
        const val = patch[key];
        if (newValue[key] !== val) {
          if (val === void 0) {
            delete newValue[key];
          } else {
            newValue[key] = val;
          }
          updated = true;
        }
      });
      return updated ? newValue : target;
    }
    var ImmutableRef = class {
      constructor() {
        this._ev = makeEventSource();
      }
      get didInvalidate() {
        return this._ev.observable;
      }
      invalidate() {
        if (this._cache !== void 0) {
          this._cache = void 0;
          this._ev.notify();
        }
      }
      get current() {
        var _a;
        return (_a = this._cache) != null ? _a : this._cache = this._toImmutable();
      }
    };
    var MeRef = class extends ImmutableRef {
      constructor(initialPresence) {
        super();
        this._me = freeze(compactObject(initialPresence));
      }
      _toImmutable() {
        return this._me;
      }
      patch(patch) {
        const oldMe = this._me;
        const newMe = merge(oldMe, patch);
        if (oldMe !== newMe) {
          this._me = freeze(newMe);
          this.invalidate();
        }
      }
    };
    function asArrayWithLegacyMethods(arr) {
      Object.defineProperty(arr, "count", {
        value: arr.length,
        enumerable: false
      });
      Object.defineProperty(arr, "toArray", {
        value: () => arr,
        enumerable: false
      });
      return freeze(arr);
    }
    function makeUser(conn, presence) {
      return freeze(compactObject(__spreadProps(__spreadValues({}, conn), { presence })));
    }
    var OthersRef = class extends ImmutableRef {
      constructor() {
        super();
        this._connections = {};
        this._presences = {};
        this._users = {};
      }
      _toImmutable() {
        const users = compact(Object.keys(this._presences).map((connectionId) => this.getUser(Number(connectionId))));
        return asArrayWithLegacyMethods(users);
      }
      clearOthers() {
        this._connections = {};
        this._presences = {};
        this._users = {};
        this.invalidate();
      }
      _getUser(connectionId) {
        const conn = this._connections[connectionId];
        const presence = this._presences[connectionId];
        if (conn !== void 0 && presence !== void 0) {
          return makeUser(conn, presence);
        }
        return void 0;
      }
      getUser(connectionId) {
        const cachedUser = this._users[connectionId];
        if (cachedUser) {
          return cachedUser;
        }
        const computedUser = this._getUser(connectionId);
        if (computedUser) {
          this._users[connectionId] = computedUser;
          return computedUser;
        }
        return void 0;
      }
      _invalidateUser(connectionId) {
        if (this._users[connectionId] !== void 0) {
          delete this._users[connectionId];
        }
        this.invalidate();
      }
      setConnection(connectionId, metaUserId, metaUserInfo, metaIsReadonly) {
        this._connections[connectionId] = freeze({
          connectionId,
          id: metaUserId,
          info: metaUserInfo,
          isReadOnly: metaIsReadonly
        });
        if (this._presences[connectionId] !== void 0) {
          this._invalidateUser(connectionId);
        }
      }
      removeConnection(connectionId) {
        delete this._connections[connectionId];
        delete this._presences[connectionId];
        this._invalidateUser(connectionId);
      }
      setOther(connectionId, presence) {
        this._presences[connectionId] = freeze(compactObject(presence));
        if (this._connections[connectionId] !== void 0) {
          this._invalidateUser(connectionId);
        }
      }
      patchOther(connectionId, patch) {
        const oldPresence = this._presences[connectionId];
        if (oldPresence === void 0) {
          return;
        }
        const newPresence = merge(oldPresence, patch);
        if (oldPresence !== newPresence) {
          this._presences[connectionId] = freeze(newPresence);
          this._invalidateUser(connectionId);
        }
      }
    };
    var ValueRef = class extends ImmutableRef {
      constructor(initialValue) {
        super();
        this._value = freeze(initialValue);
      }
      _toImmutable() {
        return this._value;
      }
      set(newValue) {
        this._value = freeze(newValue);
        this.invalidate();
      }
    };
    var DerivedRef = class extends ImmutableRef {
      constructor(...args) {
        super();
        const transformFn = args.pop();
        const otherRefs = args;
        this._refs = otherRefs;
        this._refs.forEach((ref) => {
          ref.didInvalidate.subscribe(() => this.invalidate());
        });
        this._transform = transformFn;
      }
      _toImmutable() {
        return this._transform(...this._refs.map((ref) => ref.current));
      }
    };
    var WebsocketCloseCodes = /* @__PURE__ */ ((WebsocketCloseCodes2) => {
      WebsocketCloseCodes2[WebsocketCloseCodes2["CLOSE_ABNORMAL"] = 1006] = "CLOSE_ABNORMAL";
      WebsocketCloseCodes2[WebsocketCloseCodes2["INVALID_MESSAGE_FORMAT"] = 4e3] = "INVALID_MESSAGE_FORMAT";
      WebsocketCloseCodes2[WebsocketCloseCodes2["NOT_ALLOWED"] = 4001] = "NOT_ALLOWED";
      WebsocketCloseCodes2[WebsocketCloseCodes2["MAX_NUMBER_OF_MESSAGES_PER_SECONDS"] = 4002] = "MAX_NUMBER_OF_MESSAGES_PER_SECONDS";
      WebsocketCloseCodes2[WebsocketCloseCodes2["MAX_NUMBER_OF_CONCURRENT_CONNECTIONS"] = 4003] = "MAX_NUMBER_OF_CONCURRENT_CONNECTIONS";
      WebsocketCloseCodes2[WebsocketCloseCodes2["MAX_NUMBER_OF_MESSAGES_PER_DAY_PER_APP"] = 4004] = "MAX_NUMBER_OF_MESSAGES_PER_DAY_PER_APP";
      WebsocketCloseCodes2[WebsocketCloseCodes2["MAX_NUMBER_OF_CONCURRENT_CONNECTIONS_PER_ROOM"] = 4005] = "MAX_NUMBER_OF_CONCURRENT_CONNECTIONS_PER_ROOM";
      WebsocketCloseCodes2[WebsocketCloseCodes2["CLOSE_WITHOUT_RETRY"] = 4999] = "CLOSE_WITHOUT_RETRY";
      return WebsocketCloseCodes2;
    })(WebsocketCloseCodes || {});
    function isRoomEventName(value) {
      return value === "my-presence" || value === "others" || value === "event" || value === "error" || value === "connection" || value === "history" || value === "storage-status";
    }
    var BACKOFF_RETRY_DELAYS = [250, 500, 1e3, 2e3, 4e3, 8e3, 1e4];
    var BACKOFF_RETRY_DELAYS_SLOW = [2e3, 3e4, 6e4, 3e5];
    var HEARTBEAT_INTERVAL = 3e4;
    var PONG_TIMEOUT = 2e3;
    function makeIdFactory(connectionId) {
      let count = 0;
      return () => `${connectionId}:${count++}`;
    }
    function log(..._params) {
      return;
    }
    function isConnectionSelfAware(connection) {
      return connection.state === "open" || connection.state === "connecting";
    }
    function userToTreeNode(key, user) {
      return {
        type: "User",
        id: `${user.connectionId}`,
        key,
        payload: user
      };
    }
    function makeStateMachine(state, config, mockedEffects) {
      var _a;
      const doNotBatchUpdates = (cb) => cb();
      const batchUpdates = (_a = config.unstable_batchedUpdates) != null ? _a : doNotBatchUpdates;
      const pool = {
        roomId: config.roomId,
        getNode: (id) => state.nodes.get(id),
        addNode: (id, node) => void state.nodes.set(id, node),
        deleteNode: (id) => void state.nodes.delete(id),
        generateId: () => `${getConnectionId()}:${state.clock++}`,
        generateOpId: () => `${getConnectionId()}:${state.opClock++}`,
        dispatch(ops, reverse, storageUpdates) {
          const activeBatch = state.activeBatch;
          if (activeBatch) {
            activeBatch.ops.push(...ops);
            storageUpdates.forEach((value, key) => {
              activeBatch.updates.storageUpdates.set(key, mergeStorageUpdates(activeBatch.updates.storageUpdates.get(key), value));
            });
            activeBatch.reverseOps.unshift(...reverse);
          } else {
            batchUpdates(() => {
              addToUndoStack(reverse, doNotBatchUpdates);
              state.redoStack = [];
              dispatchOps(ops);
              notify({ storageUpdates }, doNotBatchUpdates);
            });
          }
        },
        assertStorageIsWritable: () => {
          if (isConnectionSelfAware(state.connection.current) && state.connection.current.isReadOnly) {
            throw new Error("Cannot write to storage with a read only user, please ensure the user has write permissions");
          }
        }
      };
      const eventHub = {
        customEvent: makeEventSource(),
        me: makeEventSource(),
        others: makeEventSource(),
        error: makeEventSource(),
        connection: makeEventSource(),
        storage: makeEventSource(),
        history: makeEventSource(),
        storageDidLoad: makeEventSource(),
        storageStatus: makeEventSource()
      };
      const effects = mockedEffects || {
        authenticate(auth, createWebSocket) {
          const rawToken = state.token;
          const parsedToken = rawToken !== null && parseRoomAuthToken(rawToken);
          if (parsedToken && !isTokenExpired(parsedToken)) {
            const socket = createWebSocket(rawToken);
            authenticationSuccess(parsedToken, socket);
            return void 0;
          } else {
            return auth(config.roomId).then(({ token }) => {
              if (state.connection.current.state !== "authenticating") {
                return;
              }
              const parsedToken2 = parseRoomAuthToken(token);
              const socket = createWebSocket(token);
              authenticationSuccess(parsedToken2, socket);
              state.token = token;
            }).catch((er) => authenticationFailure(er instanceof Error ? er : new Error(String(er))));
          }
        },
        send(messageOrMessages) {
          if (state.socket === null) {
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
      const self = new DerivedRef(state.connection, state.me, (conn, me) => isConnectionSelfAware(conn) ? {
        connectionId: conn.id,
        id: conn.userId,
        info: conn.userInfo,
        presence: me,
        isReadOnly: conn.isReadOnly
      } : null);
      const selfAsTreeNode = new DerivedRef(self, (me) => me !== null ? userToTreeNode("Me", me) : null);
      function createOrUpdateRootFromMessage(message, batchedUpdatesWrapper) {
        if (message.items.length === 0) {
          throw new Error("Internal error: cannot load storage without items");
        }
        if (state.root) {
          updateRoot(message.items, batchedUpdatesWrapper);
        } else {
          state.root = load(message.items);
        }
        for (const key in state.initialStorage) {
          if (state.root.get(key) === void 0) {
            state.root.set(key, state.initialStorage[key]);
          }
        }
      }
      function buildRootAndParentToChildren(items) {
        const parentToChildren = /* @__PURE__ */ new Map();
        let root = null;
        for (const [id, crdt] of items) {
          if (isRootCrdt(crdt)) {
            root = [id, crdt];
          } else {
            const tuple = [id, crdt];
            const children = parentToChildren.get(crdt.parentId);
            if (children !== void 0) {
              children.push(tuple);
            } else {
              parentToChildren.set(crdt.parentId, [tuple]);
            }
          }
        }
        if (root === null) {
          throw new Error("Root can't be null");
        }
        return [root, parentToChildren];
      }
      function updateRoot(items, batchedUpdatesWrapper) {
        if (!state.root) {
          return;
        }
        const currentItems = /* @__PURE__ */ new Map();
        state.nodes.forEach((node, id) => {
          currentItems.set(id, node._serialize());
        });
        const ops = getTreesDiffOperations(currentItems, new Map(items));
        const result = applyOps(ops, false);
        notify(result.updates, batchedUpdatesWrapper);
      }
      function load(items) {
        const [root, parentToChildren] = buildRootAndParentToChildren(items);
        return LiveObject._deserialize(root, parentToChildren, pool);
      }
      function _addToRealUndoStack(historyOps, batchedUpdatesWrapper) {
        if (state.undoStack.length >= 50) {
          state.undoStack.shift();
        }
        state.undoStack.push(historyOps);
        onHistoryChange(batchedUpdatesWrapper);
      }
      function addToUndoStack(historyOps, batchedUpdatesWrapper) {
        if (state.pausedHistory !== null) {
          state.pausedHistory.unshift(...historyOps);
        } else {
          _addToRealUndoStack(historyOps, batchedUpdatesWrapper);
        }
      }
      function notify({
        storageUpdates = /* @__PURE__ */ new Map(),
        presence = false,
        others: otherEvents = []
      }, batchedUpdatesWrapper) {
        batchedUpdatesWrapper(() => {
          if (otherEvents.length > 0) {
            const others = state.others.current;
            for (const event of otherEvents) {
              eventHub.others.notify({ others, event });
            }
          }
          if (presence) {
            eventHub.me.notify(state.me.current);
          }
          if (storageUpdates.size > 0) {
            const updates = Array.from(storageUpdates.values());
            eventHub.storage.notify(updates);
          }
        });
      }
      function getConnectionId() {
        const conn = state.connection.current;
        if (isConnectionSelfAware(conn)) {
          return conn.id;
        } else if (state.lastConnectionId !== null) {
          return state.lastConnectionId;
        }
        throw new Error("Internal. Tried to get connection id but connection was never open");
      }
      function applyOps(rawOps, isLocal) {
        const output = {
          reverse: [],
          storageUpdates: /* @__PURE__ */ new Map(),
          presence: false
        };
        const createdNodeIds = /* @__PURE__ */ new Set();
        const ops = rawOps.map((op) => {
          if (op.type !== "presence" && !op.opId) {
            return __spreadProps(__spreadValues({}, op), { opId: pool.generateOpId() });
          } else {
            return op;
          }
        });
        for (const op of ops) {
          if (op.type === "presence") {
            const reverse = {
              type: "presence",
              data: {}
            };
            for (const key in op.data) {
              reverse.data[key] = state.me.current[key];
            }
            state.me.patch(op.data);
            if (state.buffer.me === null) {
              state.buffer.me = { type: "partial", data: op.data };
            } else {
              for (const key in op.data) {
                state.buffer.me.data[key] = op.data[key];
              }
            }
            output.reverse.unshift(reverse);
            output.presence = true;
          } else {
            let source;
            if (isLocal) {
              source = 0;
            } else {
              const deleted = state.unacknowledgedOps.delete(nn(op.opId));
              source = deleted ? 2 : 1;
            }
            const applyOpResult = applyOp(op, source);
            if (applyOpResult.modified) {
              const nodeId = applyOpResult.modified.node._id;
              if (!(nodeId && createdNodeIds.has(nodeId))) {
                output.storageUpdates.set(nn(applyOpResult.modified.node._id), mergeStorageUpdates(output.storageUpdates.get(nn(applyOpResult.modified.node._id)), applyOpResult.modified));
                output.reverse.unshift(...applyOpResult.reverse);
              }
              if (op.type === 2 || op.type === 7 || op.type === 4) {
                createdNodeIds.add(nn(op.id));
              }
            }
          }
        }
        notifyStorageStatus();
        return {
          ops,
          reverse: output.reverse,
          updates: {
            storageUpdates: output.storageUpdates,
            presence: output.presence
          }
        };
      }
      function applyOp(op, source) {
        if (isAckOp(op)) {
          return { modified: false };
        }
        switch (op.type) {
          case 6:
          case 3:
          case 5: {
            const node = state.nodes.get(op.id);
            if (node === void 0) {
              return { modified: false };
            }
            return node._apply(op, source === 0);
          }
          case 1: {
            const node = state.nodes.get(op.id);
            if (node === void 0) {
              return { modified: false };
            }
            if (node.parent.type === "HasParent" && isLiveList(node.parent.node)) {
              return node.parent.node._setChildKey(op.parentKey, node, source);
            }
            return { modified: false };
          }
          case 4:
          case 2:
          case 7:
          case 8: {
            if (op.parentId === void 0) {
              return { modified: false };
            }
            const parentNode = state.nodes.get(op.parentId);
            if (parentNode === void 0) {
              return { modified: false };
            }
            return parentNode._attachChild(op, source);
          }
        }
      }
      function subscribeToLiveStructureDeeply(node, callback) {
        return eventHub.storage.subscribe((updates) => {
          const relatedUpdates = updates.filter((update) => isSameNodeOrChildOf(update.node, node));
          if (relatedUpdates.length > 0) {
            callback(relatedUpdates);
          }
        });
      }
      function subscribeToLiveStructureShallowly(node, callback) {
        return eventHub.storage.subscribe((updates) => {
          for (const update of updates) {
            if (update.node._id === node._id) {
              callback(update.node);
            }
          }
        });
      }
      function subscribe(first, second, options) {
        if (typeof first === "string" && isRoomEventName(first)) {
          if (typeof second !== "function") {
            throw new Error("Second argument must be a callback function");
          }
          const callback = second;
          switch (first) {
            case "event":
              return eventHub.customEvent.subscribe(callback);
            case "my-presence":
              return eventHub.me.subscribe(callback);
            case "others": {
              const cb = callback;
              return eventHub.others.subscribe(({ others, event }) => cb(others, event));
            }
            case "error":
              return eventHub.error.subscribe(callback);
            case "connection":
              return eventHub.connection.subscribe(callback);
            case "storage":
              return eventHub.storage.subscribe(callback);
            case "history":
              return eventHub.history.subscribe(callback);
            case "storage-status":
              return eventHub.storageStatus.subscribe(callback);
            default:
              return assertNever(first, "Unknown event");
          }
        }
        if (second === void 0 || typeof first === "function") {
          if (typeof first === "function") {
            const storageCallback = first;
            return eventHub.storage.subscribe(storageCallback);
          } else {
            throw new Error("Please specify a listener callback");
          }
        }
        if (isLiveNode(first)) {
          const node = first;
          if (options == null ? void 0 : options.isDeep) {
            const storageCallback = second;
            return subscribeToLiveStructureDeeply(node, storageCallback);
          } else {
            const nodeCallback = second;
            return subscribeToLiveStructureShallowly(node, nodeCallback);
          }
        }
        throw new Error(`"${first}" is not a valid event name`);
      }
      function getConnectionState() {
        return state.connection.current.state;
      }
      function connect() {
        var _a2, _b, _c, _d;
        if (state.connection.current.state !== "closed" && state.connection.current.state !== "unavailable") {
          return;
        }
        const auth = prepareAuthEndpoint(config.authentication, (_b = (_a2 = config.polyfills) == null ? void 0 : _a2.fetch) != null ? _b : config.fetchPolyfill);
        const createWebSocket = prepareCreateWebSocket(config.liveblocksServer, (_d = (_c = config.polyfills) == null ? void 0 : _c.WebSocket) != null ? _d : config.WebSocketPolyfill);
        updateConnection({ state: "authenticating" }, batchUpdates);
        effects.authenticate(auth, createWebSocket);
      }
      function updatePresence(patch, options) {
        const oldValues = {};
        if (state.buffer.me === null) {
          state.buffer.me = {
            type: "partial",
            data: {}
          };
        }
        for (const key in patch) {
          const overrideValue = patch[key];
          if (overrideValue === void 0) {
            continue;
          }
          state.buffer.me.data[key] = overrideValue;
          oldValues[key] = state.me.current[key];
        }
        state.me.patch(patch);
        if (state.activeBatch) {
          if (options == null ? void 0 : options.addToHistory) {
            state.activeBatch.reverseOps.unshift({
              type: "presence",
              data: oldValues
            });
          }
          state.activeBatch.updates.presence = true;
        } else {
          tryFlushing();
          batchUpdates(() => {
            if (options == null ? void 0 : options.addToHistory) {
              addToUndoStack([{ type: "presence", data: oldValues }], doNotBatchUpdates);
            }
            notify({ presence: true }, doNotBatchUpdates);
          });
        }
      }
      function isStorageReadOnly(scopes) {
        return scopes.includes("room:read") && scopes.includes("room:presence:write") && !scopes.includes("room:write");
      }
      function authenticationSuccess(token, socket) {
        socket.addEventListener("message", onMessage);
        socket.addEventListener("open", onOpen);
        socket.addEventListener("close", onClose);
        socket.addEventListener("error", onError);
        updateConnection({
          state: "connecting",
          id: token.actor,
          userInfo: token.info,
          userId: token.id,
          isReadOnly: isStorageReadOnly(token.scopes)
        }, batchUpdates);
        state.idFactory = makeIdFactory(token.actor);
        state.socket = socket;
      }
      function authenticationFailure(error2) {
        if (true) {
          error("Call to authentication endpoint failed", error2);
        }
        state.token = null;
        updateConnection({ state: "unavailable" }, batchUpdates);
        state.numberOfRetry++;
        state.timeoutHandles.reconnect = effects.scheduleReconnect(getRetryDelay());
      }
      function onVisibilityChange(visibilityState) {
        if (visibilityState === "visible" && state.connection.current.state === "open") {
          log("Heartbeat after visibility change");
          heartbeat();
        }
      }
      function onUpdatePresenceMessage(message) {
        if (message.targetActor !== void 0) {
          const oldUser = state.others.getUser(message.actor);
          state.others.setOther(message.actor, message.data);
          const newUser = state.others.getUser(message.actor);
          if (oldUser === void 0 && newUser !== void 0) {
            return { type: "enter", user: newUser };
          }
        } else {
          state.others.patchOther(message.actor, message.data), message;
        }
        const user = state.others.getUser(message.actor);
        if (user) {
          return {
            type: "update",
            updates: message.data,
            user
          };
        } else {
          return void 0;
        }
      }
      function onUserLeftMessage(message) {
        const user = state.others.getUser(message.actor);
        if (user) {
          state.others.removeConnection(message.actor);
          return { type: "leave", user };
        }
        return null;
      }
      function onRoomStateMessage(message) {
        for (const key in message.users) {
          const user = message.users[key];
          const connectionId = Number(key);
          state.others.setConnection(connectionId, user.id, user.info, isStorageReadOnly(user.scopes));
        }
        return { type: "reset" };
      }
      function onNavigatorOnline() {
        if (state.connection.current.state === "unavailable") {
          log("Try to reconnect after connectivity change");
          reconnect();
        }
      }
      function onHistoryChange(batchedUpdatesWrapper) {
        batchedUpdatesWrapper(() => {
          eventHub.history.notify({ canUndo: canUndo(), canRedo: canRedo() });
        });
      }
      function onUserJoinedMessage(message) {
        state.others.setConnection(message.actor, message.id, message.info, isStorageReadOnly(message.scopes));
        state.buffer.messages.push({
          type: 100,
          data: state.me.current,
          targetActor: message.actor
        });
        tryFlushing();
        const user = state.others.getUser(message.actor);
        return user ? { type: "enter", user } : void 0;
      }
      function parseServerMessage(data) {
        if (!isJsonObject(data)) {
          return null;
        }
        return data;
      }
      function parseServerMessages(text) {
        const data = tryParseJson(text);
        if (data === void 0) {
          return null;
        } else if (isJsonArray(data)) {
          return compact(data.map((item) => parseServerMessage(item)));
        } else {
          return compact([parseServerMessage(data)]);
        }
      }
      function onMessage(event) {
        if (event.data === "pong") {
          clearTimeout(state.timeoutHandles.pongTimeout);
          return;
        }
        const messages = parseServerMessages(event.data);
        if (messages === null || messages.length === 0) {
          return;
        }
        const updates = {
          storageUpdates: /* @__PURE__ */ new Map(),
          others: []
        };
        batchUpdates(() => {
          for (const message of messages) {
            switch (message.type) {
              case 101: {
                const userJoinedUpdate = onUserJoinedMessage(message);
                if (userJoinedUpdate) {
                  updates.others.push(userJoinedUpdate);
                }
                break;
              }
              case 100: {
                const othersPresenceUpdate = onUpdatePresenceMessage(message);
                if (othersPresenceUpdate) {
                  updates.others.push(othersPresenceUpdate);
                }
                break;
              }
              case 103: {
                eventHub.customEvent.notify({
                  connectionId: message.actor,
                  event: message.event
                });
                break;
              }
              case 102: {
                const event2 = onUserLeftMessage(message);
                if (event2) {
                  updates.others.push(event2);
                }
                break;
              }
              case 104: {
                updates.others.push(onRoomStateMessage(message));
                break;
              }
              case 200: {
                const unacknowledgedOps = new Map(state.unacknowledgedOps);
                createOrUpdateRootFromMessage(message, doNotBatchUpdates);
                applyAndSendOps(unacknowledgedOps, doNotBatchUpdates);
                if (_getInitialStateResolver !== null) {
                  _getInitialStateResolver();
                }
                notifyStorageStatus();
                eventHub.storageDidLoad.notify();
                break;
              }
              case 201: {
                const applyResult = applyOps(message.ops, false);
                applyResult.updates.storageUpdates.forEach((value, key) => {
                  updates.storageUpdates.set(key, mergeStorageUpdates(updates.storageUpdates.get(key), value));
                });
                break;
              }
              case 299: {
                errorWithTitle("Storage mutation rejection error", message.reason);
                if (true) {
                  throw new Error(`Storage mutations rejected by server: ${message.reason}`);
                }
                break;
              }
            }
          }
          notify(updates, doNotBatchUpdates);
        });
      }
      function onClose(event) {
        state.socket = null;
        clearTimeout(state.timeoutHandles.pongTimeout);
        clearInterval(state.intervalHandles.heartbeat);
        if (state.timeoutHandles.flush) {
          clearTimeout(state.timeoutHandles.flush);
        }
        clearTimeout(state.timeoutHandles.reconnect);
        state.others.clearOthers();
        batchUpdates(() => {
          notify({ others: [{ type: "reset" }] }, doNotBatchUpdates);
          if (event.code >= 4e3 && event.code <= 4100) {
            updateConnection({ state: "failed" }, doNotBatchUpdates);
            const error2 = new LiveblocksError(event.reason, event.code);
            eventHub.error.notify(error2);
            const delay = getRetryDelay(true);
            state.numberOfRetry++;
            if (true) {
              error(`Connection to websocket server closed. Reason: ${error2.message} (code: ${error2.code}). Retrying in ${delay}ms.`);
            }
            updateConnection({ state: "unavailable" }, doNotBatchUpdates);
            state.timeoutHandles.reconnect = effects.scheduleReconnect(delay);
          } else if (event.code === 4999) {
            updateConnection({ state: "closed" }, doNotBatchUpdates);
          } else {
            const delay = getRetryDelay();
            state.numberOfRetry++;
            if (true) {
              warn(`Connection to Liveblocks websocket server closed (code: ${event.code}). Retrying in ${delay}ms.`);
            }
            updateConnection({ state: "unavailable" }, doNotBatchUpdates);
            state.timeoutHandles.reconnect = effects.scheduleReconnect(delay);
          }
        });
      }
      function updateConnection(connection, batchedUpdatesWrapper) {
        state.connection.set(connection);
        batchedUpdatesWrapper(() => {
          eventHub.connection.notify(connection.state);
        });
      }
      function getRetryDelay(slow = false) {
        if (slow) {
          return BACKOFF_RETRY_DELAYS_SLOW[state.numberOfRetry < BACKOFF_RETRY_DELAYS_SLOW.length ? state.numberOfRetry : BACKOFF_RETRY_DELAYS_SLOW.length - 1];
        }
        return BACKOFF_RETRY_DELAYS[state.numberOfRetry < BACKOFF_RETRY_DELAYS.length ? state.numberOfRetry : BACKOFF_RETRY_DELAYS.length - 1];
      }
      function onError() {
      }
      function onOpen() {
        clearInterval(state.intervalHandles.heartbeat);
        state.intervalHandles.heartbeat = effects.startHeartbeatInterval();
        if (state.connection.current.state === "connecting") {
          updateConnection(__spreadProps(__spreadValues({}, state.connection.current), { state: "open" }), batchUpdates);
          state.numberOfRetry = 0;
          if (state.lastConnectionId !== void 0) {
            state.buffer.me = {
              type: "full",
              data: __spreadValues({}, state.me.current)
            };
            tryFlushing();
          }
          state.lastConnectionId = state.connection.current.id;
          if (state.root) {
            state.buffer.messages.push({ type: 200 });
          }
          tryFlushing();
        } else {
        }
      }
      function heartbeat() {
        if (state.socket === null) {
          return;
        }
        clearTimeout(state.timeoutHandles.pongTimeout);
        state.timeoutHandles.pongTimeout = effects.schedulePongTimeout();
        if (state.socket.readyState === state.socket.OPEN) {
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
        updateConnection({ state: "unavailable" }, batchUpdates);
        clearTimeout(state.timeoutHandles.pongTimeout);
        if (state.timeoutHandles.flush) {
          clearTimeout(state.timeoutHandles.flush);
        }
        clearTimeout(state.timeoutHandles.reconnect);
        clearInterval(state.intervalHandles.heartbeat);
        connect();
      }
      function applyAndSendOps(offlineOps, batchedUpdatesWrapper) {
        if (offlineOps.size === 0) {
          return;
        }
        const messages = [];
        const ops = Array.from(offlineOps.values());
        const result = applyOps(ops, true);
        messages.push({
          type: 201,
          ops: result.ops
        });
        notify(result.updates, batchedUpdatesWrapper);
        effects.send(messages);
      }
      function tryFlushing() {
        const storageOps = state.buffer.storageOperations;
        if (storageOps.length > 0) {
          storageOps.forEach((op) => {
            state.unacknowledgedOps.set(nn(op.opId), op);
          });
          notifyStorageStatus();
        }
        if (state.socket === null || state.socket.readyState !== state.socket.OPEN) {
          state.buffer.storageOperations = [];
          return;
        }
        const now = Date.now();
        const elapsedTime = now - state.lastFlushTime;
        if (elapsedTime > config.throttleDelay) {
          const messages = flushDataToMessages(state);
          if (messages.length === 0) {
            return;
          }
          effects.send(messages);
          state.buffer = {
            messages: [],
            storageOperations: [],
            me: null
          };
          state.lastFlushTime = now;
        } else {
          if (state.timeoutHandles.flush !== null) {
            clearTimeout(state.timeoutHandles.flush);
          }
          state.timeoutHandles.flush = effects.delayFlush(config.throttleDelay - (now - state.lastFlushTime));
        }
      }
      function flushDataToMessages(state2) {
        const messages = [];
        if (state2.buffer.me) {
          messages.push(state2.buffer.me.type === "full" ? {
            type: 100,
            targetActor: -1,
            data: state2.buffer.me.data
          } : {
            type: 100,
            data: state2.buffer.me.data
          });
        }
        for (const event of state2.buffer.messages) {
          messages.push(event);
        }
        if (state2.buffer.storageOperations.length > 0) {
          messages.push({
            type: 201,
            ops: state2.buffer.storageOperations
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
        batchUpdates(() => {
          updateConnection({ state: "closed" }, doNotBatchUpdates);
          if (state.timeoutHandles.flush) {
            clearTimeout(state.timeoutHandles.flush);
          }
          clearTimeout(state.timeoutHandles.reconnect);
          clearTimeout(state.timeoutHandles.pongTimeout);
          clearInterval(state.intervalHandles.heartbeat);
          state.others.clearOthers();
          notify({ others: [{ type: "reset" }] }, doNotBatchUpdates);
          Object.values(eventHub).forEach((eventSource2) => eventSource2.clear());
        });
      }
      function getPresence() {
        return state.me.current;
      }
      function getOthers() {
        return state.others.current;
      }
      function broadcastEvent(event, options = {
        shouldQueueEventIfNotReady: false
      }) {
        if (state.socket === null && !options.shouldQueueEventIfNotReady) {
          return;
        }
        state.buffer.messages.push({
          type: 103,
          event
        });
        tryFlushing();
      }
      function dispatchOps(ops) {
        state.buffer.storageOperations.push(...ops);
        tryFlushing();
      }
      let _getInitialStatePromise = null;
      let _getInitialStateResolver = null;
      function startLoadingStorage() {
        if (_getInitialStatePromise === null) {
          state.buffer.messages.push({ type: 200 });
          tryFlushing();
          _getInitialStatePromise = new Promise((resolve) => _getInitialStateResolver = resolve);
          notifyStorageStatus();
        }
        return _getInitialStatePromise;
      }
      function getStorageSnapshot() {
        const root = state.root;
        if (root !== void 0) {
          return root;
        } else {
          startLoadingStorage();
          return null;
        }
      }
      function getStorage() {
        return __async(this, null, function* () {
          if (state.root) {
            return Promise.resolve({
              root: state.root
            });
          }
          yield startLoadingStorage();
          return {
            root: nn(state.root)
          };
        });
      }
      function undo() {
        if (state.activeBatch) {
          throw new Error("undo is not allowed during a batch");
        }
        const historyOps = state.undoStack.pop();
        if (historyOps === void 0) {
          return;
        }
        state.pausedHistory = null;
        const result = applyOps(historyOps, true);
        batchUpdates(() => {
          notify(result.updates, doNotBatchUpdates);
          state.redoStack.push(result.reverse);
          onHistoryChange(doNotBatchUpdates);
        });
        for (const op of result.ops) {
          if (op.type !== "presence") {
            state.buffer.storageOperations.push(op);
          }
        }
        tryFlushing();
      }
      function canUndo() {
        return state.undoStack.length > 0;
      }
      function redo() {
        if (state.activeBatch) {
          throw new Error("redo is not allowed during a batch");
        }
        const historyOps = state.redoStack.pop();
        if (historyOps === void 0) {
          return;
        }
        state.pausedHistory = null;
        const result = applyOps(historyOps, true);
        batchUpdates(() => {
          notify(result.updates, doNotBatchUpdates);
          state.undoStack.push(result.reverse);
          onHistoryChange(doNotBatchUpdates);
        });
        for (const op of result.ops) {
          if (op.type !== "presence") {
            state.buffer.storageOperations.push(op);
          }
        }
        tryFlushing();
      }
      function canRedo() {
        return state.redoStack.length > 0;
      }
      function batch(callback) {
        if (state.activeBatch) {
          return callback();
        }
        let returnValue = void 0;
        batchUpdates(() => {
          state.activeBatch = {
            ops: [],
            updates: {
              storageUpdates: /* @__PURE__ */ new Map(),
              presence: false,
              others: []
            },
            reverseOps: []
          };
          try {
            returnValue = callback();
          } finally {
            const currentBatch = state.activeBatch;
            state.activeBatch = null;
            if (currentBatch.reverseOps.length > 0) {
              addToUndoStack(currentBatch.reverseOps, doNotBatchUpdates);
            }
            if (currentBatch.ops.length > 0) {
              state.redoStack = [];
            }
            if (currentBatch.ops.length > 0) {
              dispatchOps(currentBatch.ops);
            }
            notify(currentBatch.updates, doNotBatchUpdates);
            tryFlushing();
          }
        });
        return returnValue;
      }
      function pauseHistory() {
        state.pausedHistory = [];
      }
      function resumeHistory() {
        const historyOps = state.pausedHistory;
        state.pausedHistory = null;
        if (historyOps !== null && historyOps.length > 0) {
          _addToRealUndoStack(historyOps, batchUpdates);
        }
      }
      function simulateSocketClose() {
        if (state.socket) {
          state.socket = null;
        }
      }
      function simulateSendCloseEvent(event) {
        onClose(event);
      }
      function getStorageStatus() {
        if (_getInitialStatePromise === null) {
          return "not-loaded";
        }
        if (state.root === void 0) {
          return "loading";
        }
        return state.unacknowledgedOps.size === 0 ? "synchronized" : "synchronizing";
      }
      let _lastStorageStatus = getStorageStatus();
      function notifyStorageStatus() {
        const storageStatus = getStorageStatus();
        if (_lastStorageStatus !== storageStatus) {
          _lastStorageStatus = storageStatus;
          eventHub.storageStatus.notify(storageStatus);
        }
      }
      return {
        onClose,
        onMessage,
        authenticationSuccess,
        heartbeat,
        onNavigatorOnline,
        simulateSocketClose,
        simulateSendCloseEvent,
        onVisibilityChange,
        getUndoStack: () => state.undoStack,
        getItemsCount: () => state.nodes.size,
        connect,
        disconnect,
        reconnect,
        subscribe,
        updatePresence,
        broadcastEvent,
        batch,
        undo,
        redo,
        canUndo,
        canRedo,
        pauseHistory,
        resumeHistory,
        getStorage,
        getStorageSnapshot,
        getStorageStatus,
        events: {
          customEvent: eventHub.customEvent.observable,
          others: eventHub.others.observable,
          me: eventHub.me.observable,
          error: eventHub.error.observable,
          connection: eventHub.connection.observable,
          storage: eventHub.storage.observable,
          history: eventHub.history.observable,
          storageDidLoad: eventHub.storageDidLoad.observable,
          storageStatus: eventHub.storageStatus.observable
        },
        getConnectionState,
        isSelfAware: () => isConnectionSelfAware(state.connection.current),
        getSelf: () => self.current,
        getPresence,
        getOthers,
        getSelf_forDevTools: () => selfAsTreeNode.current,
        getOthers_forDevTools: () => state.others_forDevTools.current
      };
    }
    function defaultState(initialPresence, initialStorage) {
      const others = new OthersRef();
      const others_forDevTools = new DerivedRef(others, (others2) => others2.map((other, index) => userToTreeNode(`Other ${index}`, other)));
      const connection = new ValueRef({ state: "closed" });
      return {
        token: null,
        lastConnectionId: null,
        socket: null,
        numberOfRetry: 0,
        lastFlushTime: 0,
        timeoutHandles: {
          flush: null,
          reconnect: 0,
          pongTimeout: 0
        },
        buffer: {
          me: {
            type: "full",
            data: initialPresence
          },
          messages: [],
          storageOperations: []
        },
        intervalHandles: {
          heartbeat: 0
        },
        connection,
        me: new MeRef(initialPresence),
        others,
        others_forDevTools,
        initialStorage,
        idFactory: null,
        clock: 0,
        opClock: 0,
        nodes: /* @__PURE__ */ new Map(),
        root: void 0,
        undoStack: [],
        redoStack: [],
        pausedHistory: null,
        activeBatch: null,
        unacknowledgedOps: /* @__PURE__ */ new Map()
      };
    }
    function createRoom(options, config) {
      const { initialPresence, initialStorage } = options;
      const state = defaultState(typeof initialPresence === "function" ? initialPresence(config.roomId) : initialPresence, typeof initialStorage === "function" ? initialStorage(config.roomId) : initialStorage);
      const machine = makeStateMachine(state, config);
      const room = {
        id: config.roomId,
        getConnectionState: machine.getConnectionState,
        isSelfAware: machine.isSelfAware,
        getSelf: machine.getSelf,
        reconnect: machine.reconnect,
        subscribe: machine.subscribe,
        getPresence: machine.getPresence,
        updatePresence: machine.updatePresence,
        getOthers: machine.getOthers,
        broadcastEvent: machine.broadcastEvent,
        getStorage: machine.getStorage,
        getStorageSnapshot: machine.getStorageSnapshot,
        getStorageStatus: machine.getStorageStatus,
        events: machine.events,
        batch: machine.batch,
        history: {
          undo: machine.undo,
          redo: machine.redo,
          canUndo: machine.canUndo,
          canRedo: machine.canRedo,
          pause: machine.pauseHistory,
          resume: machine.resumeHistory
        },
        __INTERNAL_DO_NOT_USE: {
          simulateCloseWebsocket: machine.simulateSocketClose,
          simulateSendCloseEvent: machine.simulateSendCloseEvent
        },
        getSelf_forDevTools: machine.getSelf_forDevTools,
        getOthers_forDevTools: machine.getOthers_forDevTools
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
    function prepareCreateWebSocket(liveblocksServer, WebSocketPolyfill) {
      if (typeof window === "undefined" && WebSocketPolyfill === void 0) {
        throw new Error("To use Liveblocks client in a non-dom environment, you need to provide a WebSocket polyfill.");
      }
      const ws = WebSocketPolyfill || WebSocket;
      return (token) => {
        return new ws(`${liveblocksServer}/?token=${token}&version=${true ? "1.0.0" : "dev"}`);
      };
    }
    function prepareAuthEndpoint(authentication, fetchPolyfill) {
      if (authentication.type === "public") {
        if (typeof window === "undefined" && fetchPolyfill === void 0) {
          throw new Error("To use Liveblocks client in a non-dom environment with a publicApiKey, you need to provide a fetch polyfill.");
        }
        return (room) => fetchAuthEndpoint(fetchPolyfill || fetch, authentication.url, {
          room,
          publicApiKey: authentication.publicApiKey
        });
      }
      if (authentication.type === "private") {
        if (typeof window === "undefined" && fetchPolyfill === void 0) {
          throw new Error("To use Liveblocks client in a non-dom environment with a url as auth endpoint, you need to provide a fetch polyfill.");
        }
        return (room) => fetchAuthEndpoint(fetchPolyfill || fetch, authentication.url, {
          room
        });
      }
      if (authentication.type === "custom") {
        return (room) => __async(this, null, function* () {
          const response = yield authentication.callback(room);
          if (!response || !response.token) {
            throw new Error('Authentication error. We expect the authentication callback to return a token, but it does not. Hint: the return value should look like: { token: "..." }');
          }
          return response;
        });
      }
      throw new Error("Internal error. Unexpected authentication type");
    }
    function fetchAuthEndpoint(fetch2, endpoint, body) {
      return __async(this, null, function* () {
        const res = yield fetch2(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify(body)
        });
        if (!res.ok) {
          throw new AuthenticationError(`Expected a status 200 but got ${res.status} when doing a POST request on "${endpoint}"`);
        }
        let data;
        try {
          data = yield res.json();
        } catch (er) {
          throw new AuthenticationError(`Expected a JSON response when doing a POST request on "${endpoint}". ${er}`);
        }
        if (!isPlainObject(data) || typeof data.token !== "string") {
          throw new AuthenticationError(`Expected a JSON response of the form \`{ token: "..." }\` when doing a POST request on "${endpoint}", but got ${JSON.stringify(data)}`);
        }
        const { token } = data;
        return { token };
      });
    }
    var AuthenticationError = class extends Error {
      constructor(message) {
        super(message);
      }
    };
    var MIN_THROTTLE = 16;
    var MAX_THROTTLE = 1e3;
    var DEFAULT_THROTTLE = 100;
    function createClient2(options) {
      const clientOptions = options;
      const throttleDelay = getThrottleDelayFromOptions(options);
      const rooms = /* @__PURE__ */ new Map();
      function getRoom(roomId) {
        const internalRoom = rooms.get(roomId);
        return internalRoom ? internalRoom.room : null;
      }
      function enter(roomId, options2) {
        var _a, _b;
        const shouldConnect = options2.shouldInitiallyConnect === void 0 ? true : options2.shouldInitiallyConnect;
        let internalRoom = rooms.get(roomId);
        if (internalRoom) {
          return internalRoom.room;
        }
        deprecateIf(options2.initialPresence === null || options2.initialPresence === void 0, "Please provide an initial presence value for the current user when entering the room.");
        internalRoom = createRoom({
          initialPresence: (_a = options2.initialPresence) != null ? _a : {},
          initialStorage: options2.initialStorage
        }, {
          roomId,
          throttleDelay,
          polyfills: clientOptions.polyfills,
          WebSocketPolyfill: clientOptions.WebSocketPolyfill,
          fetchPolyfill: clientOptions.fetchPolyfill,
          unstable_batchedUpdates: options2 == null ? void 0 : options2.unstable_batchedUpdates,
          liveblocksServer: (clientOptions == null ? void 0 : clientOptions.liveblocksServer) || "wss://api.liveblocks.io/v6",
          authentication: prepareAuthentication(clientOptions, roomId)
        });
        rooms.set(roomId, internalRoom);
        setupDevTools(() => Array.from(rooms.keys()));
        linkDevTools(roomId, internalRoom.room);
        if (shouldConnect) {
          if (typeof atob === "undefined") {
            if (((_b = clientOptions.polyfills) == null ? void 0 : _b.atob) === void 0) {
              throw new Error("You need to polyfill atob to use the client in your environment. Please follow the instructions at https://liveblocks.io/docs/errors/liveblocks-client/atob-polyfill");
            }
            global.atob = clientOptions.polyfills.atob;
          }
          internalRoom.connect();
        }
        return internalRoom.room;
      }
      function leave(roomId) {
        unlinkDevTools(roomId);
        const room = rooms.get(roomId);
        if (room) {
          room.disconnect();
          rooms.delete(roomId);
        }
      }
      if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
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
    function getThrottleDelayFromOptions(options) {
      if (options.throttle === void 0) {
        return DEFAULT_THROTTLE;
      }
      if (typeof options.throttle !== "number" || options.throttle < MIN_THROTTLE || options.throttle > MAX_THROTTLE) {
        throw new Error(`throttle should be a number between ${MIN_THROTTLE} and ${MAX_THROTTLE}.`);
      }
      return options.throttle;
    }
    function prepareAuthentication(clientOptions, roomId) {
      const { publicApiKey, authEndpoint } = clientOptions;
      if (authEndpoint !== void 0 && publicApiKey !== void 0) {
        throw new Error("You cannot use both publicApiKey and authEndpoint. Please use either publicApiKey or authEndpoint, but not both. For more information: https://liveblocks.io/docs/api-reference/liveblocks-client#createClient");
      }
      if (typeof publicApiKey === "string") {
        if (publicApiKey.startsWith("sk_")) {
          throw new Error("Invalid publicApiKey. You are using the secret key which is not supported. Please use the public key instead. For more information: https://liveblocks.io/docs/api-reference/liveblocks-client#createClientPublicKey");
        } else if (!publicApiKey.startsWith("pk_")) {
          throw new Error("Invalid key. Please use the public key format: pk_<public key>. For more information: https://liveblocks.io/docs/api-reference/liveblocks-client#createClientPublicKey");
        }
        return {
          type: "public",
          publicApiKey,
          url: buildLiveblocksPublicAuthorizeEndpoint(clientOptions, roomId)
        };
      }
      if (typeof authEndpoint === "string") {
        return {
          type: "private",
          url: authEndpoint
        };
      } else if (typeof authEndpoint === "function") {
        return {
          type: "custom",
          callback: authEndpoint
        };
      } else if (authEndpoint !== void 0) {
        throw new Error("authEndpoint must be a string or a function. For more information: https://liveblocks.io/docs/api-reference/liveblocks-client#createClientAuthEndpoint");
      }
      throw new Error("Invalid Liveblocks client options. For more information: https://liveblocks.io/docs/api-reference/liveblocks-client#createClient");
    }
    function buildLiveblocksPublicAuthorizeEndpoint(options, roomId) {
      if (options.publicAuthorizeEndpoint) {
        return options.publicAuthorizeEndpoint.replace("{roomId}", roomId);
      }
      return `https://api.liveblocks.io/v2/rooms/${encodeURIComponent(roomId)}/public/authorize`;
    }
    function lsonObjectToJson(obj) {
      const result = {};
      for (const key in obj) {
        const val = obj[key];
        if (val !== void 0) {
          result[key] = lsonToJson(val);
        }
      }
      return result;
    }
    function liveObjectToJson(liveObject) {
      return lsonObjectToJson(liveObject.toObject());
    }
    function liveMapToJson(map) {
      const result = {};
      for (const [key, value] of map.entries()) {
        result[key] = lsonToJson(value);
      }
      return result;
    }
    function lsonListToJson(value) {
      return value.map(lsonToJson);
    }
    function liveListToJson(value) {
      return lsonListToJson(value.toArray());
    }
    function lsonToJson(value) {
      if (value instanceof LiveObject) {
        return liveObjectToJson(value);
      } else if (value instanceof LiveList) {
        return liveListToJson(value);
      } else if (value instanceof LiveMap) {
        return liveMapToJson(value);
      } else if (value instanceof LiveRegister) {
        return value.data;
      }
      if (Array.isArray(value)) {
        return lsonListToJson(value);
      } else if (isPlainObject(value)) {
        return lsonObjectToJson(value);
      }
      return value;
    }
    function deepLiveify(value) {
      if (Array.isArray(value)) {
        return new LiveList(value.map(deepLiveify));
      } else if (isPlainObject(value)) {
        const init = {};
        for (const key in value) {
          const val = value[key];
          if (val === void 0) {
            continue;
          }
          init[key] = deepLiveify(val);
        }
        return new LiveObject(init);
      } else {
        return value;
      }
    }
    function patchLiveList(liveList, prev, next) {
      let i = 0;
      let prevEnd = prev.length - 1;
      let nextEnd = next.length - 1;
      let prevNode = prev[0];
      let nextNode = next[0];
      outer: {
        while (prevNode === nextNode) {
          ++i;
          if (i > prevEnd || i > nextEnd) {
            break outer;
          }
          prevNode = prev[i];
          nextNode = next[i];
        }
        prevNode = prev[prevEnd];
        nextNode = next[nextEnd];
        while (prevNode === nextNode) {
          prevEnd--;
          nextEnd--;
          if (i > prevEnd || i > nextEnd) {
            break outer;
          }
          prevNode = prev[prevEnd];
          nextNode = next[nextEnd];
        }
      }
      if (i > prevEnd) {
        if (i <= nextEnd) {
          while (i <= nextEnd) {
            liveList.insert(deepLiveify(next[i]), i);
            i++;
          }
        }
      } else if (i > nextEnd) {
        let localI = i;
        while (localI <= prevEnd) {
          liveList.delete(i);
          localI++;
        }
      } else {
        while (i <= prevEnd && i <= nextEnd) {
          prevNode = prev[i];
          nextNode = next[i];
          const liveListNode = liveList.get(i);
          if (isLiveObject(liveListNode) && isPlainObject(prevNode) && isPlainObject(nextNode)) {
            patchLiveObject(liveListNode, prevNode, nextNode);
          } else {
            liveList.set(i, deepLiveify(nextNode));
          }
          i++;
        }
        while (i <= nextEnd) {
          liveList.insert(deepLiveify(next[i]), i);
          i++;
        }
        let localI = i;
        while (localI <= prevEnd) {
          liveList.delete(i);
          localI++;
        }
      }
    }
    function patchLiveObjectKey(liveObject, key, prev, next) {
      if (true) {
        const nonSerializableValue = findNonSerializableValue(next);
        if (nonSerializableValue) {
          error(`New state path: '${nonSerializableValue.path}' value: '${nonSerializableValue.value}' is not serializable.
Only serializable value can be synced with Liveblocks.`);
          return;
        }
      }
      const value = liveObject.get(key);
      if (next === void 0) {
        liveObject.delete(key);
      } else if (value === void 0) {
        liveObject.set(key, deepLiveify(next));
      } else if (prev === next) {
        return;
      } else if (isLiveList(value) && Array.isArray(prev) && Array.isArray(next)) {
        patchLiveList(value, prev, next);
      } else if (isLiveObject(value) && isPlainObject(prev) && isPlainObject(next)) {
        patchLiveObject(value, prev, next);
      } else {
        liveObject.set(key, deepLiveify(next));
      }
    }
    function patchLiveObject(root, prev, next) {
      const updates = {};
      for (const key in next) {
        patchLiveObjectKey(root, key, prev[key], next[key]);
      }
      for (const key in prev) {
        if (next[key] === void 0) {
          root.delete(key);
        }
      }
      if (Object.keys(updates).length > 0) {
        root.update(updates);
      }
    }
    function getParentsPath(node) {
      const path = [];
      while (node.parent.type === "HasParent") {
        if (isLiveList(node.parent.node)) {
          path.push(node.parent.node._indexOfPosition(node.parent.key));
        } else {
          path.push(node.parent.key);
        }
        node = node.parent.node;
      }
      return path;
    }
    function legacy_patchImmutableObject(state, updates) {
      return updates.reduce((state2, update) => legacy_patchImmutableObjectWithUpdate(state2, update), state);
    }
    function legacy_patchImmutableObjectWithUpdate(state, update) {
      const path = getParentsPath(update.node);
      return legacy_patchImmutableNode(state, path, update);
    }
    function legacy_patchImmutableNode(state, path, update) {
      var _a, _b, _c, _d;
      const pathItem = path.pop();
      if (pathItem === void 0) {
        switch (update.type) {
          case "LiveObject": {
            if (state === null || typeof state !== "object" || Array.isArray(state)) {
              throw new Error("Internal: received update on LiveObject but state was not an object");
            }
            const newState = Object.assign({}, state);
            for (const key in update.updates) {
              if (((_a = update.updates[key]) == null ? void 0 : _a.type) === "update") {
                const val = update.node.get(key);
                if (val !== void 0) {
                  newState[key] = lsonToJson(val);
                }
              } else if (((_b = update.updates[key]) == null ? void 0 : _b.type) === "delete") {
                delete newState[key];
              }
            }
            return newState;
          }
          case "LiveList": {
            if (!Array.isArray(state)) {
              throw new Error("Internal: received update on LiveList but state was not an array");
            }
            let newState = state.map((x) => x);
            for (const listUpdate of update.updates) {
              if (listUpdate.type === "set") {
                newState = newState.map((item, index) => index === listUpdate.index ? lsonToJson(listUpdate.item) : item);
              } else if (listUpdate.type === "insert") {
                if (listUpdate.index === newState.length) {
                  newState.push(lsonToJson(listUpdate.item));
                } else {
                  newState = [
                    ...newState.slice(0, listUpdate.index),
                    lsonToJson(listUpdate.item),
                    ...newState.slice(listUpdate.index)
                  ];
                }
              } else if (listUpdate.type === "delete") {
                newState.splice(listUpdate.index, 1);
              } else if (listUpdate.type === "move") {
                if (listUpdate.previousIndex > listUpdate.index) {
                  newState = [
                    ...newState.slice(0, listUpdate.index),
                    lsonToJson(listUpdate.item),
                    ...newState.slice(listUpdate.index, listUpdate.previousIndex),
                    ...newState.slice(listUpdate.previousIndex + 1)
                  ];
                } else {
                  newState = [
                    ...newState.slice(0, listUpdate.previousIndex),
                    ...newState.slice(listUpdate.previousIndex + 1, listUpdate.index + 1),
                    lsonToJson(listUpdate.item),
                    ...newState.slice(listUpdate.index + 1)
                  ];
                }
              }
            }
            return newState;
          }
          case "LiveMap": {
            if (state === null || typeof state !== "object" || Array.isArray(state)) {
              throw new Error("Internal: received update on LiveMap but state was not an object");
            }
            const newState = Object.assign({}, state);
            for (const key in update.updates) {
              if (((_c = update.updates[key]) == null ? void 0 : _c.type) === "update") {
                const value = update.node.get(key);
                if (value !== void 0) {
                  newState[key] = lsonToJson(value);
                }
              } else if (((_d = update.updates[key]) == null ? void 0 : _d.type) === "delete") {
                delete newState[key];
              }
            }
            return newState;
          }
        }
      }
      if (Array.isArray(state)) {
        const newArray = [...state];
        newArray[pathItem] = legacy_patchImmutableNode(state[pathItem], path, update);
        return newArray;
      } else if (state !== null && typeof state === "object") {
        const node = state[pathItem];
        if (node === void 0) {
          return state;
        } else {
          return __spreadProps(__spreadValues({}, state), {
            [pathItem]: legacy_patchImmutableNode(node, path, update)
          });
        }
      } else {
        return state;
      }
    }
    function shallowArray(xs, ys) {
      if (xs.length !== ys.length) {
        return false;
      }
      for (let i = 0; i < xs.length; i++) {
        if (!Object.is(xs[i], ys[i])) {
          return false;
        }
      }
      return true;
    }
    function shallowObj(objA, objB) {
      if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null || Object.prototype.toString.call(objA) !== "[object Object]" || Object.prototype.toString.call(objB) !== "[object Object]") {
        return false;
      }
      const keysA = Object.keys(objA);
      if (keysA.length !== Object.keys(objB).length) {
        return false;
      }
      return keysA.every((key) => Object.prototype.hasOwnProperty.call(objB, key) && Object.is(objA[key], objB[key]));
    }
    function shallow(a, b) {
      if (Object.is(a, b)) {
        return true;
      }
      const isArrayA = Array.isArray(a);
      const isArrayB = Array.isArray(b);
      if (isArrayA || isArrayB) {
        if (!isArrayA || !isArrayB) {
          return false;
        }
        return shallowArray(a, b);
      }
      return shallowObj(a, b);
    }
    exports.ClientMsgCode = ClientMsgCode;
    exports.CrdtType = CrdtType;
    exports.LiveList = LiveList;
    exports.LiveMap = LiveMap;
    exports.LiveObject = LiveObject;
    exports.OpCode = OpCode;
    exports.ServerMsgCode = ServerMsgCode;
    exports.WebsocketCloseCodes = WebsocketCloseCodes;
    exports.asArrayWithLegacyMethods = asArrayWithLegacyMethods;
    exports.assertNever = assertNever;
    exports.b64decode = b64decode;
    exports.comparePosition = comparePosition;
    exports.createClient = createClient2;
    exports.deprecate = deprecate;
    exports.deprecateIf = deprecateIf;
    exports.errorIf = errorIf;
    exports.freeze = freeze;
    exports.isAppOnlyAuthToken = isAppOnlyAuthToken;
    exports.isAuthToken = isAuthToken;
    exports.isChildCrdt = isChildCrdt;
    exports.isJsonArray = isJsonArray;
    exports.isJsonObject = isJsonObject;
    exports.isJsonScalar = isJsonScalar;
    exports.isPlainObject = isPlainObject;
    exports.isRoomAuthToken = isRoomAuthToken;
    exports.isRootCrdt = isRootCrdt;
    exports.legacy_patchImmutableObject = legacy_patchImmutableObject;
    exports.lsonToJson = lsonToJson;
    exports.makePosition = makePosition;
    exports.nn = nn;
    exports.patchLiveObjectKey = patchLiveObjectKey;
    exports.shallow = shallow;
    exports.throwUsageError = throwUsageError;
    exports.tryParseJson = tryParseJson;
  }
});

// node_modules/@liveblocks/client/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@liveblocks/client/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _core = require_dist();
    exports.LiveList = _core.LiveList;
    exports.LiveMap = _core.LiveMap;
    exports.LiveObject = _core.LiveObject;
    exports.createClient = _core.createClient;
    exports.shallow = _core.shallow;
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React = __require("react");
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
        var useSyncExternalStore$2 = React.useSyncExternalStore !== void 0 ? React.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React = __require("react");
        var shim = require_shim();
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useSyncExternalStore = shim.useSyncExternalStore;
        var useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
        function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef(null);
          var inst;
          if (instRef.current === null) {
            inst = {
              hasValue: false,
              value: null
            };
            instRef.current = inst;
          } else {
            inst = instRef.current;
          }
          var _useMemo = useMemo(function() {
            var hasMemo = false;
            var memoizedSnapshot;
            var memoizedSelection;
            var memoizedSelector = function(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                var _nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0) {
                  if (inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, _nextSelection)) {
                      memoizedSelection = currentSelection;
                      return currentSelection;
                    }
                  }
                }
                memoizedSelection = _nextSelection;
                return _nextSelection;
              }
              var prevSnapshot = memoizedSnapshot;
              var prevSelection = memoizedSelection;
              if (objectIs(prevSnapshot, nextSnapshot)) {
                return prevSelection;
              }
              var nextSelection = selector(nextSnapshot);
              if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                return prevSelection;
              }
              memoizedSnapshot = nextSnapshot;
              memoizedSelection = nextSelection;
              return nextSelection;
            };
            var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
            var getSnapshotWithSelector = function() {
              return memoizedSelector(getSnapshot());
            };
            var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            };
            return [getSnapshotWithSelector, getServerSnapshotWithSelector];
          }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
          var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
          useEffect(function() {
            inst.hasValue = true;
            inst.value = value;
          }, [value]);
          useDebugValue(value);
          return value;
        }
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// node_modules/@liveblocks/react/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/@liveblocks/react/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    var _react = __require("react");
    var React = _interopRequireWildcard(_react);
    var React2 = _interopRequireWildcard(_react);
    function ClientSideSuspense(props) {
      const [mounted, setMounted] = React.useState(false);
      React.useEffect(() => {
        setMounted(true);
      }, []);
      return /* @__PURE__ */ React.createElement(React.Suspense, {
        fallback: props.fallback
      }, mounted ? props.children() : props.fallback);
    }
    var _client = require_dist2();
    var _core = require_dist();
    var _withselector = require_with_selector();
    function useRerender() {
      const [, update] = _react.useReducer.call(void 0, (x) => x + 1, 0);
      return update;
    }
    function useInitial(value) {
      return _react.useRef.call(void 0, value).current;
    }
    var noop = () => {
    };
    var identity = (x) => x;
    var missing_unstable_batchedUpdates = (reactVersion, roomId) => `We noticed you\u2019re using React ${reactVersion}. Please pass unstable_batchedUpdates at the RoomProvider level until you\u2019re ready to upgrade to React 18:

    import { unstable_batchedUpdates } from "react-dom";  // or "react-native"

    <RoomProvider id=${JSON.stringify(roomId)} ... unstable_batchedUpdates={unstable_batchedUpdates}>
      ...
    </RoomProvider>

Why? Please see https://liveblocks.io/docs/guides/troubleshooting#stale-props-zombie-child for more information`;
    var superfluous_unstable_batchedUpdates = "You don\u2019t need to pass unstable_batchedUpdates to RoomProvider anymore, since you\u2019re on React 18+ already.";
    function useSyncExternalStore(s, gs, gss) {
      return _withselector.useSyncExternalStoreWithSelector.call(void 0, s, gs, gss, identity);
    }
    var EMPTY_OTHERS = _core.asArrayWithLegacyMethods.call(void 0, []);
    function getEmptyOthers() {
      return EMPTY_OTHERS;
    }
    function makeMutationContext(room) {
      const errmsg = "This mutation cannot be used until connected to the Liveblocks room";
      return {
        get storage() {
          const mutableRoot = room.getStorageSnapshot();
          if (mutableRoot === null) {
            throw new Error(errmsg);
          }
          return mutableRoot;
        },
        get self() {
          const self = room.getSelf();
          if (self === null) {
            throw new Error(errmsg);
          }
          return self;
        },
        get others() {
          const others = room.getOthers();
          if (!room.isSelfAware()) {
            throw new Error(errmsg);
          }
          return others;
        },
        setMyPresence: room.updatePresence
      };
    }
    function createRoomContext2(client) {
      const RoomContext = React2.createContext(null);
      function RoomProvider(props) {
        const {
          id: roomId,
          initialPresence,
          initialStorage,
          unstable_batchedUpdates,
          shouldInitiallyConnect
        } = props;
        if (true) {
          if (!roomId) {
            throw new Error("RoomProvider id property is required. For more information: https://liveblocks.io/docs/errors/liveblocks-react/RoomProvider-id-property-is-required");
          }
          if (typeof roomId !== "string") {
            throw new Error("RoomProvider id property should be a string.");
          }
          const majorReactVersion = parseInt(React2.version) || 1;
          const oldReactVersion = majorReactVersion < 18;
          _core.errorIf.call(void 0, oldReactVersion && props.unstable_batchedUpdates === void 0, missing_unstable_batchedUpdates(majorReactVersion, roomId));
          _core.deprecateIf.call(void 0, !oldReactVersion && props.unstable_batchedUpdates !== void 0, superfluous_unstable_batchedUpdates);
        }
        const frozen = useInitial({
          initialPresence,
          initialStorage,
          unstable_batchedUpdates,
          shouldInitiallyConnect: shouldInitiallyConnect === void 0 ? typeof window !== "undefined" : shouldInitiallyConnect
        });
        const [room, setRoom] = React2.useState(() => client.enter(roomId, {
          initialPresence: frozen.initialPresence,
          initialStorage: frozen.initialStorage,
          unstable_batchedUpdates: frozen.unstable_batchedUpdates,
          shouldInitiallyConnect: frozen.shouldInitiallyConnect
        }));
        React2.useEffect(() => {
          setRoom(client.enter(roomId, {
            initialPresence: frozen.initialPresence,
            initialStorage: frozen.initialStorage,
            unstable_batchedUpdates: frozen.unstable_batchedUpdates,
            withoutConnecting: frozen.shouldInitiallyConnect
          }));
          return () => {
            client.leave(roomId);
          };
        }, [roomId, frozen]);
        return /* @__PURE__ */ React2.createElement(RoomContext.Provider, {
          value: room
        }, props.children);
      }
      function connectionIdSelector(others) {
        return others.map((user) => user.connectionId);
      }
      function useRoom() {
        const room = React2.useContext(RoomContext);
        if (room === null) {
          throw new Error("RoomProvider is missing from the react tree");
        }
        return room;
      }
      function useMyPresence() {
        const room = useRoom();
        const subscribe = room.events.me.subscribe;
        const getSnapshot = room.getPresence;
        const presence = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
        const setPresence = room.updatePresence;
        return [presence, setPresence];
      }
      function useUpdateMyPresence() {
        return useRoom().updatePresence;
      }
      function useOthers(selector, isEqual) {
        const room = useRoom();
        const subscribe = room.events.others.subscribe;
        const getSnapshot = room.getOthers;
        const getServerSnapshot = getEmptyOthers;
        return _withselector.useSyncExternalStoreWithSelector.call(void 0, subscribe, getSnapshot, getServerSnapshot, selector != null ? selector : identity, isEqual);
      }
      function useOthersConnectionIds() {
        return useOthers(connectionIdSelector, _client.shallow);
      }
      function useOthersMapped(itemSelector, itemIsEqual) {
        const wrappedSelector = React2.useCallback((others) => others.map((other) => [other.connectionId, itemSelector(other)]), [itemSelector]);
        const wrappedIsEqual = React2.useCallback((a, b) => {
          const eq = itemIsEqual != null ? itemIsEqual : Object.is;
          return a.length === b.length && a.every((atuple, index) => {
            const btuple = b[index];
            return atuple[0] === btuple[0] && eq(atuple[1], btuple[1]);
          });
        }, [itemIsEqual]);
        return useOthers(wrappedSelector, wrappedIsEqual);
      }
      const NOT_FOUND = Symbol();
      function useOther(connectionId, selector, isEqual) {
        const wrappedSelector = React2.useCallback((others) => {
          const other2 = others.find((other3) => other3.connectionId === connectionId);
          return other2 !== void 0 ? selector(other2) : NOT_FOUND;
        }, [connectionId, selector]);
        const wrappedIsEqual = React2.useCallback((prev, curr) => {
          if (prev === NOT_FOUND || curr === NOT_FOUND) {
            return prev === curr;
          }
          const eq = isEqual != null ? isEqual : Object.is;
          return eq(prev, curr);
        }, [isEqual]);
        const other = useOthers(wrappedSelector, wrappedIsEqual);
        if (other === NOT_FOUND) {
          throw new Error(`No such other user with connection id ${connectionId} exists`);
        }
        return other;
      }
      function useBroadcastEvent() {
        const room = useRoom();
        return React2.useCallback((event, options = { shouldQueueEventIfNotReady: false }) => {
          room.broadcastEvent(event, options);
        }, [room]);
      }
      function useErrorListener(callback) {
        const room = useRoom();
        const savedCallback = React2.useRef(callback);
        React2.useEffect(() => {
          savedCallback.current = callback;
        });
        React2.useEffect(() => room.events.error.subscribe((e) => savedCallback.current(e)), [room]);
      }
      function useEventListener(callback) {
        const room = useRoom();
        const savedCallback = React2.useRef(callback);
        React2.useEffect(() => {
          savedCallback.current = callback;
        });
        React2.useEffect(() => {
          const listener = (eventData) => {
            savedCallback.current(eventData);
          };
          return room.events.customEvent.subscribe(listener);
        }, [room]);
      }
      function useSelf(maybeSelector, isEqual) {
        const room = useRoom();
        const subscribe = React2.useCallback((onChange) => {
          const unsub1 = room.events.me.subscribe(onChange);
          const unsub2 = room.events.connection.subscribe(onChange);
          return () => {
            unsub1();
            unsub2();
          };
        }, [room]);
        const getSnapshot = room.getSelf;
        const selector = maybeSelector != null ? maybeSelector : identity;
        const wrappedSelector = React2.useCallback((me) => me !== null ? selector(me) : null, [selector]);
        const getServerSnapshot = React2.useCallback(() => null, []);
        return _withselector.useSyncExternalStoreWithSelector.call(void 0, subscribe, getSnapshot, getServerSnapshot, wrappedSelector, isEqual);
      }
      function useMutableStorageRoot() {
        const room = useRoom();
        const subscribe = room.events.storageDidLoad.subscribeOnce;
        const getSnapshot = room.getStorageSnapshot;
        const getServerSnapshot = React2.useCallback(() => null, []);
        return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
      }
      function useStorageRoot() {
        return [useMutableStorageRoot()];
      }
      function useHistory() {
        return useRoom().history;
      }
      function useUndo() {
        return useHistory().undo;
      }
      function useRedo() {
        return useHistory().redo;
      }
      function useCanUndo() {
        const room = useRoom();
        const subscribe = room.events.history.subscribe;
        const canUndo = room.history.canUndo;
        return useSyncExternalStore(subscribe, canUndo, canUndo);
      }
      function useCanRedo() {
        const room = useRoom();
        const subscribe = room.events.history.subscribe;
        const canRedo = room.history.canRedo;
        return useSyncExternalStore(subscribe, canRedo, canRedo);
      }
      function useBatch() {
        return useRoom().batch;
      }
      function useLegacyKey(key) {
        const room = useRoom();
        const root = useMutableStorageRoot();
        const rerender = useRerender();
        React2.useEffect(() => {
          if (root === null) {
            return;
          }
          let liveValue = root.get(key);
          function onRootChange() {
            const newCrdt = root.get(key);
            if (newCrdt !== liveValue) {
              unsubscribeCrdt();
              liveValue = newCrdt;
              unsubscribeCrdt = room.subscribe(liveValue, rerender);
              rerender();
            }
          }
          let unsubscribeCrdt = room.subscribe(liveValue, rerender);
          const unsubscribeRoot = room.subscribe(root, onRootChange);
          rerender();
          return () => {
            unsubscribeRoot();
            unsubscribeCrdt();
          };
        }, [root, room, key, rerender]);
        if (root === null) {
          return null;
        } else {
          return root.get(key);
        }
      }
      function useStorage(selector, isEqual) {
        const room = useRoom();
        const rootOrNull = useMutableStorageRoot();
        const wrappedSelector = React2.useCallback((rootOrNull2) => rootOrNull2 !== null ? selector(rootOrNull2) : null, [selector]);
        const subscribe = React2.useCallback((onStoreChange) => rootOrNull !== null ? room.subscribe(rootOrNull, onStoreChange, { isDeep: true }) : noop, [room, rootOrNull]);
        const getSnapshot = React2.useCallback(() => {
          if (rootOrNull === null) {
            return null;
          } else {
            const root = rootOrNull;
            const imm = root.toImmutable();
            return imm;
          }
        }, [rootOrNull]);
        const getServerSnapshot = React2.useCallback(() => null, []);
        return _withselector.useSyncExternalStoreWithSelector.call(void 0, subscribe, getSnapshot, getServerSnapshot, wrappedSelector, isEqual);
      }
      function ensureNotServerSide() {
        if (typeof window === "undefined") {
          throw new Error("You cannot use the Suspense version of this hook on the server side. Make sure to only call them on the client side.\nFor tips, see https://liveblocks.io/docs/api-reference/liveblocks-react#suspense-avoid-ssr");
        }
      }
      function useSuspendUntilStorageLoaded() {
        const room = useRoom();
        if (room.getStorageSnapshot() !== null) {
          return;
        }
        ensureNotServerSide();
        throw new Promise((res) => {
          room.events.storageDidLoad.subscribeOnce(() => res());
        });
      }
      function useSuspendUntilPresenceLoaded() {
        const room = useRoom();
        if (room.isSelfAware()) {
          return;
        }
        ensureNotServerSide();
        throw new Promise((res) => {
          room.events.connection.subscribeOnce(() => res());
        });
      }
      function useMutation(callback, deps) {
        const room = useRoom();
        return React2.useMemo(() => {
          return (...args) => room.batch(() => callback(makeMutationContext(room), ...args));
        }, [room, ...deps]);
      }
      function useStorageSuspense(selector, isEqual) {
        useSuspendUntilStorageLoaded();
        return useStorage(selector, isEqual);
      }
      function useSelfSuspense(selector, isEqual) {
        useSuspendUntilPresenceLoaded();
        return useSelf(selector, isEqual);
      }
      function useOthersSuspense(selector, isEqual) {
        useSuspendUntilPresenceLoaded();
        return useOthers(selector, isEqual);
      }
      function useOthersConnectionIdsSuspense() {
        useSuspendUntilPresenceLoaded();
        return useOthersConnectionIds();
      }
      function useOthersMappedSuspense(itemSelector, itemIsEqual) {
        useSuspendUntilPresenceLoaded();
        return useOthersMapped(itemSelector, itemIsEqual);
      }
      function useOtherSuspense(connectionId, selector, isEqual) {
        useSuspendUntilPresenceLoaded();
        return useOther(connectionId, selector, isEqual);
      }
      function useLegacyKeySuspense(key) {
        useSuspendUntilStorageLoaded();
        return useLegacyKey(key);
      }
      return {
        RoomContext,
        RoomProvider,
        useRoom,
        useBatch,
        useBroadcastEvent,
        useErrorListener,
        useEventListener,
        useHistory,
        useUndo,
        useRedo,
        useCanRedo,
        useCanUndo,
        useList: useLegacyKey,
        useMap: useLegacyKey,
        useObject: useLegacyKey,
        useStorageRoot,
        useStorage,
        useSelf,
        useMyPresence,
        useUpdateMyPresence,
        useOthers,
        useOthersMapped,
        useOthersConnectionIds,
        useOther,
        useMutation,
        suspense: {
          RoomContext,
          RoomProvider,
          useRoom,
          useBatch,
          useBroadcastEvent,
          useErrorListener,
          useEventListener,
          useHistory,
          useUndo,
          useRedo,
          useCanRedo,
          useCanUndo,
          useList: useLegacyKeySuspense,
          useMap: useLegacyKeySuspense,
          useObject: useLegacyKeySuspense,
          useStorageRoot,
          useStorage: useStorageSuspense,
          useSelf: useSelfSuspense,
          useMyPresence,
          useUpdateMyPresence,
          useOthers: useOthersSuspense,
          useOthersMapped: useOthersMappedSuspense,
          useOthersConnectionIds: useOthersConnectionIdsSuspense,
          useOther: useOtherSuspense,
          useMutation
        }
      };
    }
    exports.ClientSideSuspense = ClientSideSuspense;
    exports.createRoomContext = createRoomContext2;
    exports.shallow = _client.shallow;
  }
});

// src/index.tsx
var import_client = __toModule(require_dist2());
var import_react = __toModule(require_dist3());
var export_createClient = import_client.createClient;
var export_createRoomContext = import_react.createRoomContext;
export {
  export_createClient as createClient,
  export_createRoomContext as createRoomContext
};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
