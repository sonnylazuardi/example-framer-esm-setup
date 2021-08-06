var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __require = (x) => {
  if (typeof require !== "undefined")
    return require(x);
  throw new Error('Dynamic require of "' + x + '" is not supported');
};
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

// node_modules/@liveblocks/react/lib/index.js
var require_lib = __commonJS({
  "node_modules/@liveblocks/react/lib/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = __require("react");
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
    var LiveStorageState;
    (function(LiveStorageState2) {
      LiveStorageState2[LiveStorageState2["NotInitialized"] = 0] = "NotInitialized";
      LiveStorageState2[LiveStorageState2["Loading"] = 1] = "Loading";
      LiveStorageState2[LiveStorageState2["Loaded"] = 2] = "Loaded";
    })(LiveStorageState || (LiveStorageState = {}));
    var ClientContext = React.createContext(null);
    var RoomContext = React.createContext(null);
    function LiveblocksProvider2(props) {
      return React.createElement(ClientContext.Provider, { value: props.client }, props.children);
    }
    function useClient() {
      var client = React.useContext(ClientContext);
      if (client == null) {
        throw new Error("LiveblocksProvider is missing from the react tree");
      }
      return client;
    }
    function RoomProvider(_a) {
      var id = _a.id, children = _a.children, defaultPresence = _a.defaultPresence;
      var client = useClient();
      React.useEffect(function() {
        return function() {
          client.leave(id);
        };
      }, [client, id]);
      var room = client.getRoom(id) || client.enter(id, defaultPresence ? defaultPresence() : void 0);
      return React.createElement(RoomContext.Provider, { value: room }, children);
    }
    function useRoom() {
      var room = React.useContext(RoomContext);
      if (room == null) {
        throw new Error("RoomProvider is missing from the react tree");
      }
      return room;
    }
    function useMyPresence() {
      var room = useRoom();
      var presence = room.getPresence();
      var _a = React.useState(0), update = _a[1];
      React.useEffect(function() {
        function onMyPresenceChange() {
          update(function(x) {
            return x + 1;
          });
        }
        room.subscribe("my-presence", onMyPresenceChange);
        return function() {
          room.unsubscribe("my-presence", onMyPresenceChange);
        };
      }, [room]);
      var setPresence = React.useCallback(function(overrides) {
        return room.updatePresence(overrides);
      }, [room]);
      return [presence, setPresence];
    }
    function useUpdateMyPresence() {
      var room = useRoom();
      return React.useCallback(function(overrides) {
        room.updatePresence(overrides);
      }, [room]);
    }
    function useOthers() {
      var room = useRoom();
      var _a = React.useState(0), update = _a[1];
      React.useEffect(function() {
        function onOthersChange() {
          update(function(x) {
            return x + 1;
          });
        }
        room.subscribe("others", onOthersChange);
        return function() {
          room.subscribe("others", onOthersChange);
        };
      }, [room]);
      return room.getOthers();
    }
    function useBroadcastEvent() {
      var room = useRoom();
      return React.useCallback(function(event) {
        room.broadcastEvent(event);
      }, [room]);
    }
    function useErrorListener(callback) {
      var room = useRoom();
      var savedCallback = React.useRef(callback);
      React.useEffect(function() {
        savedCallback.current = callback;
      });
      React.useEffect(function() {
        var listener = function(e) {
          return savedCallback.current(e);
        };
        room.subscribe("error", listener);
        return function() {
          room.unsubscribe("error", listener);
        };
      }, [room]);
    }
    function useEventListener(callback) {
      var room = useRoom();
      var savedCallback = React.useRef(callback);
      React.useEffect(function() {
        savedCallback.current = callback;
      });
      React.useEffect(function() {
        var listener = function(e) {
          return savedCallback.current(e);
        };
        room.subscribe("event", listener);
        return function() {
          room.unsubscribe("event", listener);
        };
      }, [room]);
    }
    function useSelf() {
      var room = useRoom();
      var _a = React.useState(0), update = _a[1];
      React.useEffect(function() {
        function onChange() {
          update(function(x) {
            return x + 1;
          });
        }
        room.subscribe("my-presence", onChange);
        room.subscribe("connection", onChange);
        return function() {
          room.unsubscribe("my-presence", onChange);
          room.unsubscribe("connection", onChange);
        };
      }, [room]);
      return room.getSelf();
    }
    function useStorage(initialStorage) {
      var room = useRoom();
      var storage = room.getStorage();
      var _a = React.useState(0), update = _a[1];
      React.useEffect(function() {
        function onStorageChange() {
          update(function(x) {
            return x + 1;
          });
        }
        room.fetchStorage(initialStorage);
        room.subscribe("storage", onStorageChange);
        return function() {
          room.unsubscribe("storage", onStorageChange);
        };
      }, [room]);
      var root = storage.state === LiveStorageState.Loaded ? storage.root : null;
      var actions = useStorageActions();
      return [root, actions];
    }
    function useStorageActions() {
      var room = useRoom();
      return React.useMemo(function() {
        function createRecord(data) {
          return room.createRecord(data);
        }
        function updateRecord(record, overrides) {
          return room.updateRecord(record, overrides);
        }
        function createList() {
          return room.createList();
        }
        function moveItem(list, index, targetIndex) {
          return room.moveItem(list, index, targetIndex);
        }
        function deleteItem(list, index) {
          return room.deleteItem(list, index);
        }
        function deleteItemById(list, itemId) {
          return room.deleteItemById(list, itemId);
        }
        function pushItem(list, item) {
          return room.pushItem(list, item);
        }
        return {
          createRecord,
          updateRecord,
          createList,
          moveItem,
          deleteItem,
          deleteItemById,
          pushItem
        };
      }, [room]);
    }
    exports.LiveblocksProvider = LiveblocksProvider2;
    exports.RoomProvider = RoomProvider;
    exports.useBroadcastEvent = useBroadcastEvent;
    exports.useErrorListener = useErrorListener;
    exports.useEventListener = useEventListener;
    exports.useMyPresence = useMyPresence;
    exports.useOthers = useOthers;
    exports.useSelf = useSelf;
    exports.useStorage = useStorage;
    exports.useStorageActions = useStorageActions;
    exports.useUpdateMyPresence = useUpdateMyPresence;
  }
});

// src/Provider.tsx
var import_react = __toModule(require_lib());
var Provider = import_react.LiveblocksProvider;
export {
  Provider
};
