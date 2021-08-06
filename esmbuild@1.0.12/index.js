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
  for (let i = 0; i < afterCodes.length; i++) {
    const code = afterCodes[i];
    if (code <= min + 1) {
      result.push(min);
      if (afterCodes.length - 1 === i) {
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
  for (let i = 0; i < beforeCodes.length; i++) {
    const code = beforeCodes[i];
    if (code === max - 1) {
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
    const mid = beforeDigit + Math.floor((afterDigit - beforeDigit) / 2);
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
function compare(itemA, itemB) {
  const aCodes = posCodes(itemA.position);
  const bCodes = posCodes(itemB.position);
  const maxLength = Math.max(aCodes.length, bCodes.length);
  for (let i = 0; i < maxLength; i++) {
    const a = aCodes[i] == null ? min : aCodes[i];
    const b = bCodes[i] == null ? min : bCodes[i];
    if (a === b) {
      continue;
    } else {
      return a - b;
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
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
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
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
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
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
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
export {
  Battery,
  Button,
  LiveblocksProvider,
  MotionButton,
  RoomProvider,
  createClient,
  useMyPresence,
  useOthers
};
