/* eslint-disable */
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

import { invoke as TAURI_INVOKE } from "@tauri-apps/api";
import * as TAURI_API_EVENT from "@tauri-apps/api/event";

/**
 * @template T
 * @typedef {{
 *   listen: (
 *	   cb: TAURI_API_EVENT.EventCallback<T>
 *	 ) => ReturnType<typeof TAURI_API_EVENT.listen<T>>;
 *	 once: (
 *	   cb: TAURI_API_EVENT.EventCallback<T>
 *	 ) => ReturnType<typeof TAURI_API_EVENT.once<T>>;
 *	 emit: T extends null
 *	   ? (payload?: T) => ReturnType<typeof TAURI_API_EVENT.emit>
 *     : (payload: T) => ReturnType<typeof TAURI_API_EVENT.emit>;
 *	}}__EventObj__<T>
 *	 */

/**
 * @template T
 * @param {string} name
 * @returns {__EventObj__<T>}
 */
function __makeEvent__(name) {
  return {
    listen: (cb) => TAURI_API_EVENT.listen(name, cb),
    once: (cb) => TAURI_API_EVENT.once(name, cb),
    emit: (payload) => TAURI_API_EVENT.emit(name, payload),
  };
}

export const events = {
  demoEvent: __makeEvent__("demo-event"),
  emptyEvent: __makeEvent__("empty-event"),
};

/**
 * HELLO
 * WORLD
 * !!!!
 * @param { string } myName
 * @returns { Promise<string> }
 */
export async function helloWorld(myName) {
  return await invoke()("plugin:tauri-specta|hello_world", { myName });
}

/**
 * @returns { Promise<string> }
 */
export async function goodbyeWorld() {
  return await invoke()("plugin:tauri-specta|goodbye_world");
}

/**
 * @returns { Promise<MyStruct> }
 */
export async function someStruct() {
  return await invoke()("plugin:tauri-specta|some_struct");
}

/**
 * @returns { Promise<[string, undefined] | [undefined, number]> }
 */
export async function hasError() {
  try {
    return [await invoke()("plugin:tauri-specta|has_error"), undefined];
  } catch (e) {
    if (e instanceof Error) throw e;
    else return [undefined, e];
  }
}
