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

// node_modules/@liveblocks/client/lib/esm/doc.js
var RECORD = Symbol("liveblocks.record");
var LIST = Symbol("liveblocks.list");

// node_modules/@liveblocks/client/lib/esm/types.js
var LiveStorageState;
(function(LiveStorageState2) {
  LiveStorageState2[LiveStorageState2["NotInitialized"] = 0] = "NotInitialized";
  LiveStorageState2[LiveStorageState2["Loading"] = 1] = "Loading";
  LiveStorageState2[LiveStorageState2["Loaded"] = 2] = "Loaded";
})(LiveStorageState || (LiveStorageState = {}));

// src/Provider.tsx
import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
var ClientContext = createContext(null);
var RoomContext = createContext(null);
function LiveblocksProvider(props) {
  return /* @__PURE__ */ createElement(ClientContext.Provider, {
    value: props.client
  }, props.children);
}
function useClient() {
  const client = useContext(ClientContext);
  if (client == null) {
    throw new Error("LiveblocksProvider is missing from the react tree");
  }
  return client;
}
function RoomProvider({
  id,
  children,
  defaultPresence
}) {
  const client = useClient();
  useEffect(() => {
    return () => {
      client.leave(id);
    };
  }, [client, id]);
  const room = client.getRoom(id) || client.enter(id, defaultPresence ? defaultPresence() : void 0);
  return /* @__PURE__ */ createElement(RoomContext.Provider, {
    value: room
  }, children);
}
function useRoom() {
  const room = useContext(RoomContext);
  if (room == null) {
    throw new Error("RoomProvider is missing from the react tree");
  }
  return room;
}
function useMyPresence() {
  const room = useRoom();
  const presence = room.getPresence();
  const [, update] = useState(0);
  useEffect(() => {
    function onMyPresenceChange() {
      update((x) => x + 1);
    }
    room.subscribe("my-presence", onMyPresenceChange);
    return () => {
      room.unsubscribe("my-presence", onMyPresenceChange);
    };
  }, [room]);
  const setPresence = useCallback((overrides) => room.updatePresence(overrides), [room]);
  return [presence, setPresence];
}
function useUpdateMyPresence() {
  const room = useRoom();
  return useCallback((overrides) => {
    room.updatePresence(overrides);
  }, [room]);
}
function useOthers() {
  const room = useRoom();
  const [, update] = useState(0);
  useEffect(() => {
    function onOthersChange() {
      update((x) => x + 1);
    }
    room.subscribe("others", onOthersChange);
    return () => {
      room.subscribe("others", onOthersChange);
    };
  }, [room]);
  return room.getOthers();
}
function useBroadcastEvent() {
  const room = useRoom();
  return useCallback((event) => {
    room.broadcastEvent(event);
  }, [room]);
}
function useErrorListener(callback) {
  const room = useRoom();
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    const listener = (e) => savedCallback.current(e);
    room.subscribe("error", listener);
    return () => {
      room.unsubscribe("error", listener);
    };
  }, [room]);
}
function useEventListener(callback) {
  const room = useRoom();
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    const listener = (e) => savedCallback.current(e);
    room.subscribe("event", listener);
    return () => {
      room.unsubscribe("event", listener);
    };
  }, [room]);
}
function useSelf() {
  const room = useRoom();
  const [, update] = useState(0);
  useEffect(() => {
    function onChange() {
      update((x) => x + 1);
    }
    room.subscribe("my-presence", onChange);
    room.subscribe("connection", onChange);
    return () => {
      room.unsubscribe("my-presence", onChange);
      room.unsubscribe("connection", onChange);
    };
  }, [room]);
  return room.getSelf();
}
function useStorage(initialStorage) {
  const room = useRoom();
  const storage = room.getStorage();
  const [, update] = useState(0);
  useEffect(() => {
    function onStorageChange() {
      update((x) => x + 1);
    }
    room.fetchStorage(initialStorage);
    room.subscribe("storage", onStorageChange);
    return () => {
      room.unsubscribe("storage", onStorageChange);
    };
  }, [room]);
  const root = storage.state === LiveStorageState.Loaded ? storage.root : null;
  const actions = useStorageActions();
  return [root, actions];
}
function useStorageActions() {
  const room = useRoom();
  return useMemo(() => {
    function createRecord2(data) {
      return room.createRecord(data);
    }
    function updateRecord(record, overrides) {
      return room.updateRecord(record, overrides);
    }
    function createList2() {
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
      createRecord: createRecord2,
      updateRecord,
      createList: createList2,
      moveItem,
      deleteItem,
      deleteItemById,
      pushItem
    };
  }, [room]);
}
export {
  LiveblocksProvider,
  RoomProvider,
  useBroadcastEvent,
  useErrorListener,
  useEventListener,
  useMyPresence,
  useOthers,
  useSelf,
  useStorage,
  useStorageActions,
  useUpdateMyPresence
};
