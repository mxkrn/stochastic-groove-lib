/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/onnxruntime/bin/napi-v3 sync recursive ^\\.\\/.*\\/.*\\/onnxruntime_binding\\.node$":
/*!*******************************************************************************************!*\
  !*** ./node_modules/onnxruntime/bin/napi-v3 sync ^\.\/.*\/.*\/onnxruntime_binding\.node$ ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./linux/x64/onnxruntime_binding.node": "./node_modules/onnxruntime/bin/napi-v3/linux/x64/onnxruntime_binding.node"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/onnxruntime/bin/napi-v3 sync recursive ^\\.\\/.*\\/.*\\/onnxruntime_binding\\.node$";

/***/ }),

/***/ "./node_modules/onnxruntime/bin/napi-v3/linux/x64/onnxruntime_binding.node":
/*!*********************************************************************************!*\
  !*** ./node_modules/onnxruntime/bin/napi-v3/linux/x64/onnxruntime_binding.node ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./node_modules/onnxruntime/lib/binding.js":
/*!*************************************************!*\
  !*** ./node_modules/onnxruntime/lib/binding.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.binding = void 0;
// export native binding
exports.binding = 
// eslint-disable-next-line @typescript-eslint/no-require-imports, import/no-internal-modules
__webpack_require__("./node_modules/onnxruntime/bin/napi-v3 sync recursive ^\\.\\/.*\\/.*\\/onnxruntime_binding\\.node$")(`./${process.platform}/${process.arch}/onnxruntime_binding.node`);
//# sourceMappingURL=binding.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/onnxruntime/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/onnxruntime/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./inference-session */ "./node_modules/onnxruntime/lib/inference-session.js"), exports);
__exportStar(__webpack_require__(/*! ./tensor */ "./node_modules/onnxruntime/lib/tensor.js"), exports);
__exportStar(__webpack_require__(/*! ./onnx-value */ "./node_modules/onnxruntime/lib/onnx-value.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/onnxruntime/lib/inference-session-impl.js":
/*!****************************************************************!*\
  !*** ./node_modules/onnxruntime/lib/inference-session-impl.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _session;
Object.defineProperty(exports, "__esModule", { value: true });
exports.impl = void 0;
const binding_1 = __webpack_require__(/*! ./binding */ "./node_modules/onnxruntime/lib/binding.js");
const tensor_1 = __webpack_require__(/*! ./tensor */ "./node_modules/onnxruntime/lib/tensor.js");
class InferenceSession {
    constructor(session) {
        _session.set(this, void 0);
        __classPrivateFieldSet(this, _session, session);
        // cache metadata
        this.inputNames = __classPrivateFieldGet(this, _session).inputNames;
        this.outputNames = __classPrivateFieldGet(this, _session).outputNames;
    }
    run(feeds, arg1, arg2) {
        const fetches = {};
        let options = {};
        // check inputs
        if (typeof feeds !== 'object' || feeds === null || feeds instanceof tensor_1.Tensor || Array.isArray(feeds)) {
            throw new TypeError('\'feeds\' must be an object that use input names as keys and OnnxValue as corresponding values.');
        }
        let isFetchesEmpty = true;
        // determine which override is being used
        if (typeof arg1 === 'object') {
            if (arg1 === null) {
                throw new TypeError('Unexpected argument[1]: cannot be null.');
            }
            if (arg1 instanceof tensor_1.Tensor) {
                throw new TypeError('\'fetches\' cannot be a Tensor');
            }
            if (Array.isArray(arg1)) {
                if (arg1.length === 0) {
                    throw new TypeError('\'fetches\' cannot be an empty array.');
                }
                isFetchesEmpty = false;
                // output names
                for (const name of arg1) {
                    if (typeof name !== 'string') {
                        throw new TypeError('\'fetches\' must be a string array or an object.');
                    }
                    if (this.outputNames.indexOf(name) === -1) {
                        throw new RangeError(`'fetches' contains invalid output name: ${name}.`);
                    }
                    fetches[name] = null;
                }
                if (typeof arg2 === 'object' && arg2 !== null) {
                    options = arg2;
                }
                else if (typeof arg2 !== 'undefined') {
                    throw new TypeError('\'options\' must be an object.');
                }
            }
            else {
                // decide whether arg1 is fetches or options
                // if any output name is present and its value is valid OnnxValue, we consider it fetches
                let isFetches = false;
                const arg1Keys = Object.getOwnPropertyNames(arg1);
                for (const name of this.outputNames) {
                    if (arg1Keys.indexOf(name) !== -1) {
                        const v = arg1[name];
                        if (v === null || v instanceof tensor_1.Tensor) {
                            isFetches = true;
                            isFetchesEmpty = false;
                            fetches[name] = v;
                        }
                    }
                }
                if (isFetches) {
                    if (typeof arg2 === 'object' && arg2 !== null) {
                        options = arg2;
                    }
                    else if (typeof arg2 !== 'undefined') {
                        throw new TypeError('\'options\' must be an object.');
                    }
                }
                else {
                    options = arg1;
                }
            }
        }
        else if (typeof arg1 !== 'undefined') {
            throw new TypeError('Unexpected argument[1]: must be \'fetches\' or \'options\'.');
        }
        // check if all inputs are in feed
        for (const name of this.inputNames) {
            if (typeof feeds[name] === 'undefined') {
                throw new Error(`input '${name}' is missing in 'feeds'.`);
            }
        }
        // if no fetches is specified, we use the full output names list
        if (isFetchesEmpty) {
            for (const name of this.outputNames) {
                fetches[name] = null;
            }
        }
        // feeds, fetches and options are prepared
        // promise start here
        //
        //
        return new Promise((resolve, reject) => {
            process.nextTick(() => {
                try {
                    const returnValue = {};
                    const results = __classPrivateFieldGet(this, _session).run(feeds, fetches, options);
                    for (const key in results) {
                        returnValue[key] = new tensor_1.Tensor(results[key].type, results[key].data, results[key].dims);
                    }
                    resolve(returnValue);
                }
                catch (e) {
                    // reject if any error is thrown
                    reject(e);
                }
            });
        });
    }
}
_session = new WeakMap();
exports.impl = {
    create: (arg0, arg1, arg2, arg3) => {
        // either load from a file or buffer
        let loadFromFilePath = false;
        let filePath;
        let buffer;
        let byteOffset = -1;
        let byteLength = -1;
        let options = {};
        if (typeof arg0 === 'string') {
            loadFromFilePath = true;
            filePath = arg0;
            if (typeof arg1 === 'object' && arg1 !== null) {
                options = arg1;
            }
            else if (typeof arg1 !== 'undefined') {
                throw new TypeError('\'options\' must be an object.');
            }
        }
        else if (arg0 instanceof Uint8Array) {
            buffer = arg0.buffer;
            byteOffset = arg0.byteOffset;
            byteLength = arg0.byteLength;
            if (typeof arg1 === 'object' && arg1 !== null) {
                options = arg1;
            }
            else if (typeof arg1 !== 'undefined') {
                throw new TypeError('\'options\' must be an object.');
            }
        }
        else if (arg0 instanceof ArrayBuffer || arg0 instanceof SharedArrayBuffer) {
            buffer = arg0;
            byteOffset = 0;
            byteLength = arg0.byteLength;
            if (typeof arg1 === 'object' && arg1 !== null) {
                options = arg1;
            }
            else if (typeof arg1 === 'number') {
                byteOffset = arg1;
                if (!Number.isSafeInteger(byteOffset)) {
                    throw new RangeError('\'byteOffset\' must be an integer.');
                }
                if (byteOffset < 0 || byteOffset >= buffer.byteLength) {
                    throw new RangeError(`'byteOffset' is out of range [0, ${buffer.byteLength}).`);
                }
                byteLength = arg0.byteLength - byteOffset;
                if (typeof arg2 === 'number') {
                    byteLength = arg2;
                    if (!Number.isSafeInteger(byteLength)) {
                        throw new RangeError('\'byteLength\' must be an integer.');
                    }
                    if (byteLength <= 0 || byteOffset + byteLength > buffer.byteLength) {
                        throw new RangeError(`'byteLength' is out of range (0, ${buffer.byteLength - byteOffset}].`);
                    }
                    if (typeof arg3 === 'object' && arg3 !== null) {
                        options = arg3;
                    }
                    else if (typeof arg3 !== 'undefined') {
                        throw new TypeError('\'options\' must be an object.');
                    }
                }
                else if (typeof arg2 !== 'undefined') {
                    throw new TypeError('\'byteLength\' must be a number.');
                }
            }
            else if (typeof arg1 !== 'undefined') {
                throw new TypeError('\'options\' must be an object.');
            }
        }
        else {
            throw new TypeError('Unexpected argument[0]: must be \'path\' or \'buffer\'.');
        }
        // promise start here
        //
        //
        return new Promise((resolve, reject) => {
            process.nextTick(() => {
                try {
                    // create native session wrapper
                    const sessionWrapper = new binding_1.binding.InferenceSession();
                    // load model
                    if (loadFromFilePath) {
                        sessionWrapper.loadModel(filePath, options);
                    }
                    else {
                        sessionWrapper.loadModel(buffer, byteOffset, byteLength, options);
                    }
                    // resolve promise if created successfully
                    resolve(new InferenceSession(sessionWrapper));
                }
                catch (e) {
                    // reject if any error is thrown
                    reject(e);
                }
            });
        });
    }
};
//# sourceMappingURL=inference-session-impl.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/onnxruntime/lib/inference-session.js":
/*!***********************************************************!*\
  !*** ./node_modules/onnxruntime/lib/inference-session.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.InferenceSession = void 0;
const inference_session_impl_1 = __webpack_require__(/*! ./inference-session-impl */ "./node_modules/onnxruntime/lib/inference-session-impl.js");
// eslint-disable-next-line no-redeclare
exports.InferenceSession = inference_session_impl_1.impl;
//# sourceMappingURL=inference-session.js.map

/***/ }),

/***/ "./node_modules/onnxruntime/lib/onnx-value.js":
/*!****************************************************!*\
  !*** ./node_modules/onnxruntime/lib/onnx-value.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=onnx-value.js.map

/***/ }),

/***/ "./node_modules/onnxruntime/lib/tensor-impl.js":
/*!*****************************************************!*\
  !*** ./node_modules/onnxruntime/lib/tensor-impl.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tensor = void 0;
// a runtime map that maps type string to TypedArray constructor. Should match Tensor.DataTypeMap.
const NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP = new Map([
    ['float32', Float32Array],
    ['uint8', Uint8Array],
    ['int8', Int8Array],
    ['uint16', Uint16Array],
    ['int16', Int16Array],
    ['int32', Int32Array],
    ['int64', BigInt64Array],
    ['bool', Uint8Array],
    ['float64', Float64Array],
    ['uint32', Uint32Array],
    ['uint64', BigUint64Array],
]);
// a runtime map that maps type string to TypedArray constructor. Should match Tensor.DataTypeMap.
const NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP = new Map([
    [Float32Array, 'float32'],
    [Uint8Array, 'uint8'],
    [Int8Array, 'int8'],
    [Uint16Array, 'uint16'],
    [Int16Array, 'int16'],
    [Int32Array, 'int32'],
    [BigInt64Array, 'int64'],
    [Float64Array, 'float64'],
    [Uint32Array, 'uint32'],
    [BigUint64Array, 'uint64'],
]);
/**
 * calculate size from dims.
 *
 * @param dims the dims array. May be an illegal input.
 */
const calculateSize = (dims) => {
    let size = 1;
    for (let i = 0; i < dims.length; i++) {
        const dim = dims[i];
        if (typeof dim !== 'number' || !Number.isSafeInteger(dim)) {
            throw new TypeError(`dims[${i}] must be an integer, got: ${dim}`);
        }
        if (dim < 0) {
            throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${dim}`);
        }
        size *= dim;
    }
    return size;
};
class Tensor {
    constructor(arg0, arg1, arg2) {
        let type;
        let data;
        let dims;
        // check whether arg0 is type or data
        if (typeof arg0 === 'string') {
            //
            // Override: constructor(type, data, ...)
            //
            type = arg0;
            dims = arg2;
            if (arg0 === 'string') {
                // string tensor
                if (!Array.isArray(arg1)) {
                    throw new TypeError('A string tensor\'s data must be a string array.');
                }
                // we don't check whether every element in the array is string; this is too slow. we assume it's correct and
                // error will be populated at inference
                data = arg1;
            }
            else {
                // numeric tensor
                const constructor = NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.get(arg0);
                if (constructor === undefined) {
                    throw new TypeError(`Unknown tensor type: ${arg0}.`);
                }
                if (Array.isArray(arg1)) {
                    // use 'as any' here because TypeScript's check on type of 'SupportedTypedArrayConstructors.from()' produces
                    // incorrect results.
                    // 'constructor' should be one of the typed array prototype objects.
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    data = constructor.from(arg1);
                }
                else if (arg1 instanceof constructor) {
                    data = arg1;
                }
                else {
                    throw new TypeError(`A ${type} tensor's data must be type of ${constructor}`);
                }
            }
        }
        else {
            //
            // Override: constructor(data, ...)
            //
            dims = arg1;
            if (Array.isArray(arg0)) {
                // only boolean[] and string[] is supported
                if (arg0.length === 0) {
                    throw new TypeError('Tensor type cannot be inferred from an empty array.');
                }
                const firstElementType = typeof arg0[0];
                if (firstElementType === 'string') {
                    type = 'string';
                    data = arg0;
                }
                else if (firstElementType === 'boolean') {
                    type = 'bool';
                    // 'arg0' is of type 'boolean[]'. Uint8Array.from(boolean[]) actually works, but typescript thinks this is
                    // wrong type. We use 'as any' to make it happy.
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    data = Uint8Array.from(arg0);
                }
                else {
                    throw new TypeError(`Invalid element type of data array: ${firstElementType}.`);
                }
            }
            else {
                // get tensor type from TypedArray
                const mappedType = NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP.get(arg0.constructor);
                if (mappedType === undefined) {
                    throw new TypeError(`Unsupported type for tensor data: ${arg0.constructor}.`);
                }
                type = mappedType;
                data = arg0;
            }
        }
        // type and data is processed, now processing dims
        if (dims === undefined) {
            // assume 1-D tensor if dims omitted
            dims = [data.length];
        }
        else if (!Array.isArray(dims)) {
            throw new TypeError('A tensor\'s dims must be a number array');
        }
        // perform check
        const size = calculateSize(dims);
        if (size !== data.length) {
            throw new Error(`Tensor's size(${size}) does not match data length(${data.length}).`);
        }
        this.dims = dims;
        this.type = type;
        this.data = data;
        this.size = size;
    }
    //#endregion
    //#region tensor utilities
    reshape(dims) {
        return new Tensor(this.type, this.data, dims);
    }
}
exports.Tensor = Tensor;
//# sourceMappingURL=tensor-impl.js.map

/***/ }),

/***/ "./node_modules/onnxruntime/lib/tensor.js":
/*!************************************************!*\
  !*** ./node_modules/onnxruntime/lib/tensor.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tensor = void 0;
const tensor_impl_1 = __webpack_require__(/*! ./tensor-impl */ "./node_modules/onnxruntime/lib/tensor-impl.js");
// eslint-disable-next-line no-redeclare
exports.Tensor = tensor_impl_1.Tensor;
//# sourceMappingURL=tensor.js.map

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/generate/constants.ts":
/*!***********************************!*\
  !*** ./src/generate/constants.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.midiMap = exports.reverseInstrumentMap = exports.instrumentMap = exports.NUM_INSTRUMENTS = exports.SEQUENCE_LENGTH = exports.DEFAULT_MODEL = void 0;
var DEFAULT_MODEL = 'src/assets/models/vae_gru_gmd_z=2_1600764564.onnx';
exports.DEFAULT_MODEL = DEFAULT_MODEL;
var SEQUENCE_LENGTH = 32;
exports.SEQUENCE_LENGTH = SEQUENCE_LENGTH;
var NUM_INSTRUMENTS = 9;
exports.NUM_INSTRUMENTS = NUM_INSTRUMENTS;
var instrumentMap = {
    "0": "kick",
    "1": "ghost_kick",
    "2": "snare",
    "3": "ghost_snare",
    "4": "clap",
    "5": "rim",
    "6": "lt",
    "7": "ch",
    "8": "ht",
    "9": "oh",
    "10": "ride",
    "11": "tamb"
};
exports.instrumentMap = instrumentMap;
var reverseInstrumentMap = {
    "kick": 0,
    "ghost_kick": 1,
    "snare": 2,
    "ghost_snare": 3,
    "clap": 4,
    "rim": 5,
    "lt": 6,
    "ch": 7,
    "ht": 8,
    "oh": 9,
    "ride": 10,
    "tamb": 11
};
exports.reverseInstrumentMap = reverseInstrumentMap;
var midiMap = {
    "0": "C2",
    "1": "Db2",
    "2": "D2",
    "3": "Eb2",
    "4": "E2",
    "5": "F2",
    "6": "Gb2",
    "7": "G2",
    "8": "Ab2",
    "9": "A2",
    "10": "Bb2",
    "11": "B2",
    "12": "C3",
    "13": "Db3",
    "14": "D3",
    "15": "Eb3",
    "16": "E3",
    "17": "F3",
    "18": "Gb3",
    "19": "G3",
    "20": "Ab3",
    "21": "A3",
    "22": "Bb3",
    "23": "B3",
    "24": "C4",
    "25": "Db4",
    "26": "D4",
    "27": "Eb4",
    "28": "E4",
    "29": "F4",
    "30": "Gb4",
    "31": "G4",
    "32": "Ab4",
    "33": "A4",
    "34": "Bb4",
    "35": "B4"
};
exports.midiMap = midiMap;
// module.exports.varianceLookup = {
//     "kick": {
//         "0": 1, "1": 0, "2": 3, "3": 0, "4": 1, "5": 0, "6": 3, "7": 0, 
//         "8": 1, "9": 0, "10": 1, "11": 0, "12": 1, "13": 0, "14": 3, "15": 0
//     },
//     "ghost_kick": {
//         "0": 0, "1": 10, "2": 5, "3": 10, "4": 0, "5": 1, "6": 5, "7": 10, 
//         "8": 0, "9": 10, "10": 0, "11": 10, "12": 0, "13": 10, "14": 5, "15": 1
//     },
//     "snare": {
//         "0": 0, "1": 0, "2": 0, "3": 0, "4": 1, "5": 0, "6": 0, "7": 0, 
//         "8": 0, "9": 0, "10": 1, "11": 0, "12": 1, "13": 0, "14": 0, "15": 0
//     },
//     "ghost_snare": {
//         "0": 0, "1": 10, "2": 5, "3": 10, "4": 0, "5": 1, "6": 5, "7": 10, 
//         "8": 0, "9": 10, "10": 0, "11": 10, "12": 0, "13": 10, "14": 5, "15": 1
//     },
//     "clap": {
//         "0": 0, "1": 0, "2": 0, "3": 0, "4": 1, "5": 0, "6": 0, "7": 0, 
//         "8": 0, "9": 0, "10": 1, "11": 0, "12": 1, "13": 0, "14": 0, "15": 0
//     },
//     "rim": {
//         "0": 0, "1": 10, "2": 5, "3": 10, "4": 0, "5": 1, "6": 5, "7": 10, 
//         "8": 0, "9": 10, "10": 0, "11": 10, "12": 0, "13": 10, "14": 5, "15": 1
//     },
//     "lt": {
//         "0": 0, "1": 10, "2": 5, "3": 10, "4": 0, "5": 1, "6": 5, "7": 10, 
//         "8": 0, "9": 10, "10": 0, "11": 10, "12": 0, "13": 10, "14": 5, "15": 1
//     },
//     "ch": {
//         "0": 2, "1": 10, "2": 1, "3": 10, "4": 2, "5": 10, "6": 1, "7": 10, 
//         "8": 2, "9": 10, "10": 1, "11": 10, "12": 2, "13": 10, "14": 1, "15": 10
//     },
//     "ht": {
//         "0": 0, "1": 10, "2": 5, "3": 10, "4": 0, "5": 1, "6": 5, "7": 10, 
//         "8": 0, "9": 10, "10": 0, "11": 10, "12": 0, "13": 10, "14": 5, "15": 1
//     },
//     "oh": {
//         "0": 1, "1": 2, "2": 1, "3": 2, "4": 1, "5": 2, "6": 1, "7": 2, 
//         "8": 2, "9": 2, "10": 1, "11": 2, "12": 2, "13": 2, "14": 1, "15": 2
//     },
//     "ride": {
//         "0": 2, "1": 5, "2": 2, "3": 5, "4": 2, "5": 5, "6": 2, "7": 5, 
//         "8": 2, "9": 5, "10": 1, "11": 5, "12": 2, "13": 5, "14": 1, "15": 5
//     },
//     "tamb": {
//         "0": 2, "1": 5, "2": 2, "3": 5, "4": 2, "5": 5, "6": 2, "7": 5, 
//         "8": 2, "9": 5, "10": 1, "11": 5, "12": 2, "13": 5, "14": 1, "15": 5
//     }
// }
// module.exports.meanLookup = {
//     "kick": {
//         "0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, 
//         "8": 0, "9": 0, "10": 0, "11": 40, "12": 0, "13": 0, "14": 40, "15": 0
//     },
//     "ghost_kick": {
//         "0": 0, "1": 10, "2": 30, "3": 10, "4": 0, "5": 30, "6": 10, "7": 30, 
//         "8": 0, "9": 40, "10": 0, "11": 40, "12": 0, "13": 10, "14": 40, "15": 10
//     },
//     "snare": {
//         "0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 20, "6": 0, "7": 60, 
//         "8": 0, "9": 60, "10": 0, "11": 0, "12": 0, "13": 40, "14": 50, "15": 60
//     },
//     "ghost_snare": {
//         "0": 0, "1": 50, "2": 0, "3": 0, "4": 0, "5": 20, "6": 0, "7": 60, 
//         "8": 0, "9": 60, "10": 0, "11": 20, "12": 0, "13": 40, "14": 50, "15": 60
//     },
//     "clap": { // currently deactivated
//         "0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, 
//         "8": 0, "9": 0, "10": 0, "11": 0, "12": 0, "13": 0, "14": 0, "15": 0
//     },
//     "rim": {
//         "0": 0, "1": 50, "2": 0, "3": 0, "4": 0, "5": 20, "6": 0, "7": 60, 
//         "8": 0, "9": 60, "10": 0, "11": 20, "12": 0, "13": 40, "14": 50, "15": 60
//     },
//     "lt": {
//         "0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, 
//         "8": 0, "9": 60, "10": 0, "11": 20, "12": 0, "13": 40, "14": 50, "15": 60
//     },
//     "ch": {
//         "0": 40, "1": 30, "2": 30, "3": 30, "4": 60, "5": 30, "6": 30, "7": 30, 
//         "8": 40, "9": 30, "10": 30, "11": 30, "12": 60, "13": 20, "14": 10, "15": 10
//     },
//     "ht": {
//         "0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, 
//         "8": 0, "9": 60, "10": 0, "11": 20, "12": 0, "13": 40, "14": 50, "15": 60
//     },
//     "oh": {
//         "0": 30, "1": 0, "2": 20, "3": 20, "4": 0, "5": 20, "6": 20, "7": 10, 
//         "8": 0, "9": 30, "10": 30, "11": 30, "12": 40, "13": 20, "14": 0, "15": 10
//     },
//     "ride": {
//         "0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, 
//         "8": 0, "9": 0, "10": 0, "11": 0, "12": 0, "13": 0, "14": 0, "15": 0
//     },
//     "tamb": {
//         "0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, 
//         "8": 0, "9": 0, "10": 0, "11": 0, "12": 0, "13": 0, "14": 0, "15": 0
//     },
// }


/***/ }),

/***/ "./src/generate/main.ts":
/*!******************************!*\
  !*** ./src/generate/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(__webpack_require__(/*! path */ "./node_modules/path-browserify/index.js"));
// import async from 'async';
var model_1 = __importDefault(__webpack_require__(/*! ./model */ "./src/generate/model.ts"));
var tensor_1 = __importDefault(__webpack_require__(/*! ./tensor */ "./src/generate/tensor.ts"));
var constants_1 = __webpack_require__(/*! ./constants */ "./src/generate/constants.ts");
var LatentSpace = /** @class */ (function () {
    function LatentSpace(model, pattern, numSamples, noteDropout, instruments, sequenceLength) {
        if (typeof model == "undefined") {
            throw new Error('cannot directly access class constructor - use LatentSpace.build(<params>) instead.');
        }
        this.model = model;
        this.instruments = instruments;
        this.sequenceLength = sequenceLength;
        this.numSamples = numSamples;
        this.noteDropout = noteDropout;
        this.latentVectors = this._generateLatentVectors(numSamples);
        this.converterTensor = new tensor_1.default(pattern);
        this._data = {};
    }
    Object.defineProperty(LatentSpace.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LatentSpace.prototype, "pattern", {
        get: function () {
            return this.converterTensor.pattern;
        },
        enumerable: false,
        configurable: true
    });
    LatentSpace.build = function (pattern, numSamples, noteDropout, instruments, sequenceLength) {
        if (numSamples === void 0) { numSamples = 400; }
        if (noteDropout === void 0) { noteDropout = 0.5; }
        if (instruments === void 0) { instruments = constants_1.NUM_INSTRUMENTS; }
        if (sequenceLength === void 0) { sequenceLength = constants_1.SEQUENCE_LENGTH; }
        return __awaiter(this, void 0, void 0, function () {
            var model, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, model_1.default.build(path_1.default.join(process.cwd(), constants_1.DEFAULT_MODEL), instruments)];
                    case 1:
                        model = _a.sent();
                        return [2 /*return*/, new LatentSpace(model, pattern, numSamples, noteDropout, instruments, sequenceLength)];
                    case 2:
                        e_1 = _a.sent();
                        console.error('failed to load LatentSpace');
                        throw new Error(e_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LatentSpace.prototype.populate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, inputTensor, model, noteDropout, promises;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this._data;
                        inputTensor = this.converterTensor;
                        model = this.model;
                        noteDropout = this.noteDropout;
                        promises = this.latentVectors.map(function (z) { return __awaiter(_this, void 0, void 0, function () {
                            var delta_z, output, outputTensor;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        delta_z = z.split(',').map(function (z_i) { return parseFloat(z_i); });
                                        return [4 /*yield*/, model.decode(inputTensor.indices, delta_z, noteDropout)];
                                    case 1:
                                        output = _a.sent();
                                        outputTensor = new tensor_1.default(output);
                                        data[z] = outputTensor.buffer;
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        this._data = data;
                        return [2 /*return*/];
                }
            });
        });
    };
    LatentSpace.prototype._generateLatentVectors = function (numSamples) {
        var n = Math.round((Math.sqrt(numSamples)) / 2);
        var latentVectors = [];
        for (var x = -n; x < n; x++) {
            for (var y = -n; y < n; y++) {
                var idx = new Array([x, y]);
                latentVectors.push(idx.toString());
            }
        }
        return latentVectors;
    };
    return LatentSpace;
}());
exports.default = LatentSpace;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/generate/model.ts":
/*!*******************************!*\
  !*** ./src/generate/model.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var onnxruntime_1 = __webpack_require__(/*! onnxruntime */ "./node_modules/onnxruntime/lib/index.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./src/generate/constants.ts");
var ONNXModel = /** @class */ (function () {
    function ONNXModel(session, instruments) {
        if (instruments === void 0) { instruments = 9; }
        if (typeof session === 'undefined') {
            throw new Error('cannot be called directly - use await Model.build(pattern) instead');
        }
        this.session = session;
        this.instruments = instruments;
        this.vocabSize = Math.pow(2, instruments);
        this.sequenceLength = constants_1.SEQUENCE_LENGTH; // HARD-CODED SEQUENCE LENGTH TO 2 BARS
    }
    ONNXModel.build = function (fpath, instruments) {
        if (fpath === void 0) { fpath = constants_1.DEFAULT_MODEL; }
        return __awaiter(this, void 0, void 0, function () {
            var session, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, onnxruntime_1.InferenceSession.create(fpath)];
                    case 1:
                        session = _a.sent();
                        return [2 /*return*/, new ONNXModel(session, instruments)];
                    case 2:
                        e_1 = _a.sent();
                        throw new Error("failed to load ONNX model: " + e_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ONNXModel.prototype.decode = function (indices, deltaZ, noteDropout) {
        if (deltaZ === void 0) { deltaZ = [0., 0.]; }
        if (noteDropout === void 0) { noteDropout = 0.5; }
        return __awaiter(this, void 0, void 0, function () {
            var tensor, deltaZTensor, noteDropoutTensor, feeds, results, output;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tensor = new onnxruntime_1.Tensor('float32', indices, [32, 1]);
                        deltaZTensor = new onnxruntime_1.Tensor('float32', deltaZ, [2, 1]);
                        noteDropoutTensor = new onnxruntime_1.Tensor(new Float32Array(1), []);
                        noteDropoutTensor.data[0] = noteDropout;
                        feeds = { input: tensor, delta_z: deltaZTensor, note_dropout: noteDropoutTensor };
                        return [4 /*yield*/, this.session.run(feeds)];
                    case 1:
                        results = _a.sent();
                        output = this.fromOneHot(results.output.data);
                        return [2 /*return*/, output];
                }
            });
        });
    };
    ONNXModel.prototype.fromOneHot = function (tensor) {
        var indices = [];
        for (var i = 0; i < this.sequenceLength; i++) {
            var tmp = tensor.slice(i * this.vocabSize, (i + 1) * this.vocabSize);
            var idx = tmp.indexOf(Math.max.apply(Math, tmp));
            indices.push(idx);
        }
        return Float32Array.from(indices);
    };
    return ONNXModel;
}());
exports.default = ONNXModel;


/***/ }),

/***/ "./src/generate/tensor.ts":
/*!********************************!*\
  !*** ./src/generate/tensor.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.converterMap = void 0;
var constants_1 = __webpack_require__(/*! ./constants */ "./src/generate/constants.ts");
var ConverterTensor = /** @class */ (function () {
    function ConverterTensor(input, sequenceLength, instruments) {
        if (sequenceLength === void 0) { sequenceLength = constants_1.SEQUENCE_LENGTH; }
        if (instruments === void 0) { instruments = constants_1.NUM_INSTRUMENTS; }
        this.sequenceLength = sequenceLength;
        this.instruments = instruments;
        if (input.length == this.sequenceLength) {
            this._indices = input;
            this._buffer = this._from_indices(input);
            this._pattern = this._to_pattern(this._buffer);
        }
        else if (input.length == this.sequenceLength * this.instruments) {
            this._buffer = input;
            this._indices = this._to_indices(input);
            this._pattern = this._to_pattern(this._buffer);
        }
        else if (input.length == this.instruments) {
            this._pattern = input;
            this._buffer = this._from_pattern(input);
            this._indices = this._to_indices(this._buffer);
        }
        else {
            throw new Error("invalid input of length " + input.length);
        }
    }
    Object.defineProperty(ConverterTensor.prototype, "pattern", {
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConverterTensor.prototype, "buffer", {
        get: function () {
            return this._buffer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConverterTensor.prototype, "indices", {
        get: function () {
            return this._indices;
        },
        enumerable: false,
        configurable: true
    });
    ConverterTensor.prototype._from_pattern = function (pattern) {
        /**
         * Convert from pattern to buffer array
         */
        var buffer = new Float32Array(this.sequenceLength * this.instruments);
        pattern.forEach(function (channel, i) {
            for (var step = 0; step < channel.length; step++) {
                buffer[(i * channel.length) + step] = channel[step];
            }
        });
        return this._transpose(buffer, true);
    };
    ConverterTensor.prototype._to_pattern = function (buffer) {
        /**
         * Convert from buffer to pattern array
         */
        var bufferArray = Array.from(this._transpose(buffer, false));
        var pattern = [];
        for (var i = 0; i < this.instruments; i++) {
            var tmp = bufferArray.slice(i * this.sequenceLength, (i + 1) * this.sequenceLength);
            pattern.push(tmp);
        }
        return pattern;
    };
    ConverterTensor.prototype._from_indices = function (indices) {
        var _this = this;
        /**
         * Convert from index to buffer array
         */
        var map = converterMap(this.instruments, true);
        var pattern = new Float32Array(this.sequenceLength * this.instruments);
        var indexArray = Array.from(indices);
        indexArray.forEach(function (idx, step) {
            var p = Array.from(map[idx]);
            p.forEach(function (value, instrument) {
                var loc = step * _this.instruments + instrument;
                pattern[loc] = value;
            });
        });
        return pattern;
    };
    ConverterTensor.prototype._to_indices = function (buffer) {
        /**
         * Convert from buffer to index array
         */
        var map = converterMap(this.instruments, false);
        var indices = new Float32Array(this.sequenceLength);
        for (var i = 0; i < this.sequenceLength; i++) {
            var startIndex = i * this.instruments;
            var tmp = buffer.slice(startIndex, startIndex + this.instruments);
            var idx = map[tmp.toString()];
            indices[i] = idx;
        }
        return indices;
    };
    ConverterTensor.prototype._transpose = function (buffer, inverse) {
        var _this = this;
        if (inverse === void 0) { inverse = false; }
        /**
         * Transpose elements in matrix between [this.sequenceLength, this.instruments]
         */
        var bufferTransposed = new Float32Array(buffer.length);
        Array.from(buffer).forEach(function (value, idx) {
            if (inverse) {
                var rem = Math.floor(idx / _this.sequenceLength);
                var idxT = ((idx % _this.sequenceLength) * _this.instruments) + rem;
                bufferTransposed[idxT] = value;
            }
            else {
                var rem = Math.floor(idx / _this.instruments);
                var idxT = ((idx % _this.instruments) * _this.sequenceLength) + rem;
                bufferTransposed[idxT] = value;
            }
        });
        return bufferTransposed;
    };
    return ConverterTensor;
}());
exports.default = ConverterTensor;
/**
 * ========================
 * Utility functions
 * ========================
 */
function converterMap(n, inverse) {
    /**
     * Generate all binary permutations of pattern length n
     *
     *      n = 2 -> ['00', '01', '10', '11']
     *
     * @param {*} n pattern length
     */
    var patterns = {};
    var vocab_size = Math.pow(2, n);
    for (var i = 0; i < vocab_size; i++) {
        var s = bin(i);
        var out = "";
        for (var j = 0; j < (n - s.length); j++) {
            out += "0";
        }
        out += s;
        var tensor = string_to_tensor(out);
        if (inverse) {
            patterns[i] = tensor;
        }
        else {
            patterns[tensor.toString()] = i;
        }
    }
    return patterns;
}
exports.converterMap = converterMap;
function bin(n) {
    /**
     * Convert decimal to binary
     */
    if (n < 0) {
        n = 0xFFFFFFFF + n + 1;
    }
    return parseInt(n.toString(), 10).toString(2);
}
function string_to_tensor(s) {
    /**
     * Convert string to Array
     */
    var tensor = [];
    for (var i = 0; i < s.length; i++) {
        tensor.push(parseFloat(s[i]));
    }
    return tensor;
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ONNXModel = exports.ConverterTensor = exports.LatentSpace = void 0;
var main_1 = __importDefault(__webpack_require__(/*! ./generate/main */ "./src/generate/main.ts"));
exports.LatentSpace = main_1.default;
var tensor_1 = __importDefault(__webpack_require__(/*! ./generate/tensor */ "./src/generate/tensor.ts"));
exports.ConverterTensor = tensor_1.default;
var model_1 = __importDefault(__webpack_require__(/*! ./generate/model */ "./src/generate/model.ts"));
exports.ONNXModel = model_1.default;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29ubnhydW50aW1lL2Jpbi9uYXBpLXYzIHN5bmMgXlxcLlxcLy4qXFwvLipcXC9vbm54cnVudGltZV9iaW5kaW5nXFwubm9kZSQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29ubnhydW50aW1lL2xpYi9iaW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbm54cnVudGltZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29ubnhydW50aW1lL2xpYi9pbmZlcmVuY2Utc2Vzc2lvbi1pbXBsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbm54cnVudGltZS9saWIvaW5mZXJlbmNlLXNlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29ubnhydW50aW1lL2xpYi9vbm54LXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbm54cnVudGltZS9saWIvdGVuc29yLWltcGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29ubnhydW50aW1lL2xpYi90ZW5zb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW5lcmF0ZS9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nZW5lcmF0ZS90ZW5zb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FB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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZMdEMsSUFBTSxhQUFhLEdBQUcsbURBQW1ELENBQUM7QUF5RWpFLHNDQUFhO0FBeEV0QixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUF3RUgsMENBQWU7QUF2RXZDLElBQU0sZUFBZSxHQUFHLENBQUMsQ0FBQztBQXVFZSwwQ0FBZTtBQXJFeEQsSUFBTSxhQUFhLEdBQUc7SUFDbEIsR0FBRyxFQUFFLE1BQU07SUFDWCxHQUFHLEVBQUUsWUFBWTtJQUNqQixHQUFHLEVBQUUsT0FBTztJQUNaLEdBQUcsRUFBRSxhQUFhO0lBQ2xCLEdBQUcsRUFBRSxNQUFNO0lBQ1gsR0FBRyxFQUFFLEtBQUs7SUFDVixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE1BQU07Q0FDZjtBQXdEeUQsc0NBQWE7QUF0RHZFLElBQU0sb0JBQW9CLEdBQUc7SUFDekIsTUFBTSxFQUFFLENBQUM7SUFDVCxZQUFZLEVBQUUsQ0FBQztJQUNmLE9BQU8sRUFBRSxDQUFDO0lBQ1YsYUFBYSxFQUFFLENBQUM7SUFDaEIsTUFBTSxFQUFFLENBQUM7SUFDVCxLQUFLLEVBQUUsQ0FBQztJQUNSLElBQUksRUFBRSxDQUFDO0lBQ1AsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsQ0FBQztJQUNQLElBQUksRUFBRSxDQUFDO0lBQ1AsTUFBTSxFQUFFLEVBQUU7SUFDVixNQUFNLEVBQUUsRUFBRTtDQUNiO0FBeUN3RSxvREFBb0I7QUF2QzdGLElBQU0sT0FBTyxHQUFHO0lBQ1osR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsS0FBSztJQUNWLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEtBQUs7SUFDVixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEtBQUs7SUFDVixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxLQUFLO0lBQ1YsR0FBRyxFQUFFLElBQUk7SUFDVCxJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLEtBQUs7SUFDWCxJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLEtBQUs7SUFDWCxJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxLQUFLO0lBQ1gsSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLEtBQUs7SUFDWCxJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLEtBQUs7SUFDWCxJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxLQUFLO0lBQ1gsSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxJQUFJO0NBQ2I7QUFFOEYsMEJBQU87QUFFdEcsb0NBQW9DO0FBQ3BDLGdCQUFnQjtBQUNoQiwyRUFBMkU7QUFDM0UsK0VBQStFO0FBQy9FLFNBQVM7QUFDVCxzQkFBc0I7QUFDdEIsOEVBQThFO0FBQzlFLGtGQUFrRjtBQUNsRixTQUFTO0FBQ1QsaUJBQWlCO0FBQ2pCLDJFQUEyRTtBQUMzRSwrRUFBK0U7QUFDL0UsU0FBUztBQUNULHVCQUF1QjtBQUN2Qiw4RUFBOEU7QUFDOUUsa0ZBQWtGO0FBQ2xGLFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsMkVBQTJFO0FBQzNFLCtFQUErRTtBQUMvRSxTQUFTO0FBQ1QsZUFBZTtBQUNmLDhFQUE4RTtBQUM5RSxrRkFBa0Y7QUFDbEYsU0FBUztBQUNULGNBQWM7QUFDZCw4RUFBOEU7QUFDOUUsa0ZBQWtGO0FBQ2xGLFNBQVM7QUFDVCxjQUFjO0FBQ2QsK0VBQStFO0FBQy9FLG1GQUFtRjtBQUNuRixTQUFTO0FBQ1QsY0FBYztBQUNkLDhFQUE4RTtBQUM5RSxrRkFBa0Y7QUFDbEYsU0FBUztBQUNULGNBQWM7QUFDZCwyRUFBMkU7QUFDM0UsK0VBQStFO0FBQy9FLFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsMkVBQTJFO0FBQzNFLCtFQUErRTtBQUMvRSxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLDJFQUEyRTtBQUMzRSwrRUFBK0U7QUFDL0UsUUFBUTtBQUNSLElBQUk7QUFHSixnQ0FBZ0M7QUFDaEMsZ0JBQWdCO0FBQ2hCLDJFQUEyRTtBQUMzRSxpRkFBaUY7QUFDakYsU0FBUztBQUNULHNCQUFzQjtBQUN0QixpRkFBaUY7QUFDakYsb0ZBQW9GO0FBQ3BGLFNBQVM7QUFDVCxpQkFBaUI7QUFDakIsNkVBQTZFO0FBQzdFLG1GQUFtRjtBQUNuRixTQUFTO0FBQ1QsdUJBQXVCO0FBQ3ZCLDhFQUE4RTtBQUM5RSxvRkFBb0Y7QUFDcEYsU0FBUztBQUNULHlDQUF5QztBQUN6QywyRUFBMkU7QUFDM0UsK0VBQStFO0FBQy9FLFNBQVM7QUFDVCxlQUFlO0FBQ2YsOEVBQThFO0FBQzlFLG9GQUFvRjtBQUNwRixTQUFTO0FBQ1QsY0FBYztBQUNkLDJFQUEyRTtBQUMzRSxvRkFBb0Y7QUFDcEYsU0FBUztBQUNULGNBQWM7QUFDZCxtRkFBbUY7QUFDbkYsdUZBQXVGO0FBQ3ZGLFNBQVM7QUFDVCxjQUFjO0FBQ2QsMkVBQTJFO0FBQzNFLG9GQUFvRjtBQUNwRixTQUFTO0FBQ1QsY0FBYztBQUNkLGlGQUFpRjtBQUNqRixxRkFBcUY7QUFDckYsU0FBUztBQUNULGdCQUFnQjtBQUNoQiwyRUFBMkU7QUFDM0UsK0VBQStFO0FBQy9FLFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsMkVBQTJFO0FBQzNFLCtFQUErRTtBQUMvRSxTQUFTO0FBQ1QsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaExKLHlHQUF3QjtBQUN4Qiw2QkFBNkI7QUFFN0IsNkZBQWdDO0FBQ2hDLGdHQUF1QztBQUN2Qyx3RkFBOEU7QUFHOUU7SUFtQkkscUJBQVksS0FBZ0IsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsY0FBYztRQUN2RixJQUFJLE9BQU8sS0FBSyxJQUFJLFdBQVcsRUFBRTtZQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLHFGQUFxRixDQUFDLENBQUM7U0FDMUc7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZ0JBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0Qsc0JBQUksNkJBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGdDQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBQ1ksaUJBQUssR0FBbEIsVUFDSSxPQUFxQixFQUNyQixVQUF3QixFQUN4QixXQUF5QixFQUN6QixXQUFxQyxFQUNyQyxjQUF3QztRQUh4Qyw2Q0FBd0I7UUFDeEIsK0NBQXlCO1FBQ3pCLDRDQUFzQiwyQkFBZTtRQUNyQyxrREFBeUIsMkJBQWU7Ozs7Ozs7d0JBRXhCLHFCQUFNLGVBQVMsQ0FBQyxLQUFLLENBQzdCLGNBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLHlCQUFhLENBQUMsRUFDdkMsV0FBVyxDQUNkOzt3QkFIRyxLQUFLLEdBQUcsU0FHWDt3QkFDRCxzQkFBTyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLGNBQWMsQ0FBQyxFQUFDOzs7d0JBRTdGLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQzt3QkFDNUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQzs7Ozs7S0FHMUI7SUFDSyw4QkFBUSxHQUFkOzs7Ozs7O3dCQUlVLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO3dCQUNsQixXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQzt3QkFDbkMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQ25CLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO3dCQUVqQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBTSxDQUFDOzs7Ozt3Q0FDckMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFPLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO3dDQUN2RCxxQkFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQzs7d0NBQXRFLE1BQU0sR0FBRyxTQUE2RDt3Q0FDdEUsWUFBWSxHQUFHLElBQUksZ0JBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3Q0FDL0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7Ozs7NkJBQ2pDLENBQUMsQ0FBQzt3QkFDSCxxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQzs7d0JBQTNCLFNBQTJCLENBQUM7d0JBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOzs7OztLQUVyQjtJQUNPLDRDQUFzQixHQUE5QixVQUErQixVQUFVO1FBQ3JDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDdEM7U0FDSjtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3pCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUFFRCxrQkFBZSxXQUFXLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRzNCLHNHQUF1RDtBQUV2RCx3RkFBNkQ7QUFHN0Q7SUFVSSxtQkFDSSxPQUF5QixFQUN6QixXQUF1QjtRQUF2Qiw2Q0FBdUI7UUFDdkIsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvRUFBb0UsQ0FBQztTQUN4RjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGNBQWMsR0FBRywyQkFBZSxDQUFDLENBQUUsdUNBQXVDO0lBQ25GLENBQUM7SUFFWSxlQUFLLEdBQWxCLFVBQ0ksS0FBNkIsRUFDN0IsV0FBbUI7UUFEbkIsZ0NBQWdCLHlCQUFhOzs7Ozs7O3dCQU1ULHFCQUFNLDhCQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7O3dCQUE5QyxPQUFPLEdBQUcsU0FBb0M7d0JBQ3BELHNCQUFPLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsRUFBQzs7O3dCQUUzQyxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUE4QixHQUFHLENBQUMsQ0FBQzs7Ozs7S0FFMUQ7SUFFSywwQkFBTSxHQUFaLFVBQ0ksT0FBcUIsRUFDckIsTUFBZ0MsRUFDaEMsV0FBeUI7UUFEekIsbUNBQXlCLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDaEMsK0NBQXlCOzs7Ozs7d0JBV25CLE1BQU0sR0FBRyxJQUFJLG9CQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqRCxZQUFZLEdBQUcsSUFBSSxvQkFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckQsaUJBQWlCLEdBQUcsSUFBSSxvQkFBTSxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUM5RCxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDO3dCQUNsQyxLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFDLENBQUM7d0JBQ3ZFLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzs7d0JBQXZDLE9BQU8sR0FBRyxTQUE2Qjt3QkFDekMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbEQsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBRUQsOEJBQVUsR0FBVixVQUFXLE1BQU07UUFDYixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzlELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBUixJQUFJLEVBQVEsR0FBRyxFQUFFLENBQUM7WUFDeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDcEI7UUFDRCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JDLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUFFRCxrQkFBZSxTQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RXpCLHdGQUFnRTtBQUVoRTtJQXVCSSx5QkFBWSxLQUFLLEVBQUUsY0FBd0MsRUFBRSxXQUFxQztRQUEvRSxrREFBeUIsMkJBQWU7UUFBRSw0Q0FBc0IsMkJBQWU7UUFDOUYsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEQ7YUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xEO2FBQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ2pEO2FBQ0k7WUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUEyQixLQUFLLENBQUMsTUFBUSxDQUFDO1NBQzdEO0lBQ0wsQ0FBQztJQUNELHNCQUFJLG9DQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxtQ0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksb0NBQU87YUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUNELHVDQUFhLEdBQWIsVUFBYyxPQUE2QjtRQUN2Qzs7V0FFRztRQUNILElBQU0sTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRTtnQkFDOUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckQ7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELHFDQUFXLEdBQVgsVUFBWSxNQUFvQjtRQUM1Qjs7V0FFRztRQUNILElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUQsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckI7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBQ0QsdUNBQWEsR0FBYixVQUFjLE9BQXFCO1FBQW5DLGlCQWVDO1FBZEc7O1dBRUc7UUFDSCxJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRSxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFXLEVBQUUsSUFBWTtZQUN6QyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFhLEVBQUUsVUFBa0I7Z0JBQ3hDLElBQUksR0FBRyxHQUFHLElBQUksR0FBQyxLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztnQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBQ0QscUNBQVcsR0FBWCxVQUFZLE1BQW9CO1FBQzVCOztXQUVHO1FBQ0gsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksVUFBVSxHQUFHLENBQUMsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BDLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEUsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM3QixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNELG9DQUFVLEdBQVYsVUFBVyxNQUFvQixFQUFFLE9BQWE7UUFBOUMsaUJBa0JDO1FBbEJnQyx5Q0FBYTtRQUMxQzs7V0FFRztRQUNILElBQUksZ0JBQWdCLEdBQUcsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN0RCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxHQUFHO1lBQ2xDLElBQUksT0FBTyxFQUFFO2dCQUNULElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQy9DLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHO2dCQUM3RCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0gsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQztnQkFDNUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEdBQUc7Z0JBQzdELGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUNsQztRQUVMLENBQUMsQ0FBQztRQUNGLE9BQU8sZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQztBQUVELGtCQUFlLGVBQWUsQ0FBQztBQUUvQjs7OztHQUlHO0FBQ0gsU0FBUyxZQUFZLENBQUMsQ0FBUyxFQUFFLE9BQWdCO0lBQzdDOzs7Ozs7T0FNRztJQUNILElBQU0sUUFBUSxHQUFHLEVBQUU7SUFFbkIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxJQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsR0FBRyxJQUFJLEdBQUcsQ0FBQztTQUNkO1FBQ0QsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksTUFBTSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksT0FBTyxFQUFFO1lBQ1QsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUN4QjthQUFNO1lBQ0gsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQztLQUNKO0lBQ0QsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQUNRLG9DQUFZO0FBRXJCLFNBQVMsR0FBRyxDQUFDLENBQVM7SUFDbEI7O09BRUc7SUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDUCxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDMUI7SUFDRCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLENBQVM7SUFDL0I7O09BRUc7SUFDSCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNqQztJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TEQsbUdBQTBDO0FBSWpDLHNCQUpGLGNBQVcsQ0FJRTtBQUhwQix5R0FBZ0Q7QUFHMUIsMEJBSGYsZ0JBQWUsQ0FHZTtBQUZyQyxzR0FBeUM7QUFFRixvQkFGaEMsZUFBUyxDQUVnQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9saW51eC94NjQvb25ueHJ1bnRpbWVfYmluZGluZy5ub2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvb25ueHJ1bnRpbWUvYmluL25hcGktdjMvbGludXgveDY0L29ubnhydW50aW1lX2JpbmRpbmcubm9kZVwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9vbm54cnVudGltZS9iaW4vbmFwaS12MyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC8uKlxcXFwvb25ueHJ1bnRpbWVfYmluZGluZ1xcXFwubm9kZSRcIjsiLCJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5iaW5kaW5nID0gdm9pZCAwO1xuLy8gZXhwb3J0IG5hdGl2ZSBiaW5kaW5nXG5leHBvcnRzLmJpbmRpbmcgPSBcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzLCBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlc1xucmVxdWlyZShgLi4vYmluL25hcGktdjMvJHtwcm9jZXNzLnBsYXRmb3JtfS8ke3Byb2Nlc3MuYXJjaH0vb25ueHJ1bnRpbWVfYmluZGluZy5ub2RlYCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iaW5kaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaW5mZXJlbmNlLXNlc3Npb25cIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3RlbnNvclwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vb25ueC12YWx1ZVwiKSwgZXhwb3J0cyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxudmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfc2Vzc2lvbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW1wbCA9IHZvaWQgMDtcbmNvbnN0IGJpbmRpbmdfMSA9IHJlcXVpcmUoXCIuL2JpbmRpbmdcIik7XG5jb25zdCB0ZW5zb3JfMSA9IHJlcXVpcmUoXCIuL3RlbnNvclwiKTtcbmNsYXNzIEluZmVyZW5jZVNlc3Npb24ge1xuICAgIGNvbnN0cnVjdG9yKHNlc3Npb24pIHtcbiAgICAgICAgX3Nlc3Npb24uc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3Nlc3Npb24sIHNlc3Npb24pO1xuICAgICAgICAvLyBjYWNoZSBtZXRhZGF0YVxuICAgICAgICB0aGlzLmlucHV0TmFtZXMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zZXNzaW9uKS5pbnB1dE5hbWVzO1xuICAgICAgICB0aGlzLm91dHB1dE5hbWVzID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2Vzc2lvbikub3V0cHV0TmFtZXM7XG4gICAgfVxuICAgIHJ1bihmZWVkcywgYXJnMSwgYXJnMikge1xuICAgICAgICBjb25zdCBmZXRjaGVzID0ge307XG4gICAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICAgIC8vIGNoZWNrIGlucHV0c1xuICAgICAgICBpZiAodHlwZW9mIGZlZWRzICE9PSAnb2JqZWN0JyB8fCBmZWVkcyA9PT0gbnVsbCB8fCBmZWVkcyBpbnN0YW5jZW9mIHRlbnNvcl8xLlRlbnNvciB8fCBBcnJheS5pc0FycmF5KGZlZWRzKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXFwnZmVlZHNcXCcgbXVzdCBiZSBhbiBvYmplY3QgdGhhdCB1c2UgaW5wdXQgbmFtZXMgYXMga2V5cyBhbmQgT25ueFZhbHVlIGFzIGNvcnJlc3BvbmRpbmcgdmFsdWVzLicpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpc0ZldGNoZXNFbXB0eSA9IHRydWU7XG4gICAgICAgIC8vIGRldGVybWluZSB3aGljaCBvdmVycmlkZSBpcyBiZWluZyB1c2VkXG4gICAgICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChhcmcxID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5leHBlY3RlZCBhcmd1bWVudFsxXTogY2Fubm90IGJlIG51bGwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJnMSBpbnN0YW5jZW9mIHRlbnNvcl8xLlRlbnNvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1xcJ2ZldGNoZXNcXCcgY2Fubm90IGJlIGEgVGVuc29yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcxKSkge1xuICAgICAgICAgICAgICAgIGlmIChhcmcxLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcXCdmZXRjaGVzXFwnIGNhbm5vdCBiZSBhbiBlbXB0eSBhcnJheS4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXNGZXRjaGVzRW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBvdXRwdXQgbmFtZXNcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgYXJnMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcXCdmZXRjaGVzXFwnIG11c3QgYmUgYSBzdHJpbmcgYXJyYXkgb3IgYW4gb2JqZWN0LicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm91dHB1dE5hbWVzLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgJ2ZldGNoZXMnIGNvbnRhaW5zIGludmFsaWQgb3V0cHV0IG5hbWU6ICR7bmFtZX0uYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hlc1tuYW1lXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnMiA9PT0gJ29iamVjdCcgJiYgYXJnMiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gYXJnMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFyZzIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1xcJ29wdGlvbnNcXCcgbXVzdCBiZSBhbiBvYmplY3QuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZGVjaWRlIHdoZXRoZXIgYXJnMSBpcyBmZXRjaGVzIG9yIG9wdGlvbnNcbiAgICAgICAgICAgICAgICAvLyBpZiBhbnkgb3V0cHV0IG5hbWUgaXMgcHJlc2VudCBhbmQgaXRzIHZhbHVlIGlzIHZhbGlkIE9ubnhWYWx1ZSwgd2UgY29uc2lkZXIgaXQgZmV0Y2hlc1xuICAgICAgICAgICAgICAgIGxldCBpc0ZldGNoZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBhcmcxS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFyZzEpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiB0aGlzLm91dHB1dE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmcxS2V5cy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IGFyZzFbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodiA9PT0gbnVsbCB8fCB2IGluc3RhbmNlb2YgdGVuc29yXzEuVGVuc29yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGZXRjaGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZldGNoZXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXNbbmFtZV0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc0ZldGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcyID09PSAnb2JqZWN0JyAmJiBhcmcyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gYXJnMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnMiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1xcJ29wdGlvbnNcXCcgbXVzdCBiZSBhbiBvYmplY3QuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBhcmcxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnMSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VuZXhwZWN0ZWQgYXJndW1lbnRbMV06IG11c3QgYmUgXFwnZmV0Y2hlc1xcJyBvciBcXCdvcHRpb25zXFwnLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGlmIGFsbCBpbnB1dHMgYXJlIGluIGZlZWRcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIHRoaXMuaW5wdXROYW1lcykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmZWVkc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGlucHV0ICcke25hbWV9JyBpcyBtaXNzaW5nIGluICdmZWVkcycuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgbm8gZmV0Y2hlcyBpcyBzcGVjaWZpZWQsIHdlIHVzZSB0aGUgZnVsbCBvdXRwdXQgbmFtZXMgbGlzdFxuICAgICAgICBpZiAoaXNGZXRjaGVzRW1wdHkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiB0aGlzLm91dHB1dE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgZmV0Y2hlc1tuYW1lXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmVlZHMsIGZldGNoZXMgYW5kIG9wdGlvbnMgYXJlIHByZXBhcmVkXG4gICAgICAgIC8vIHByb21pc2Ugc3RhcnQgaGVyZVxuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Nlc3Npb24pLnJ1bihmZWVkcywgZmV0Y2hlcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlW2tleV0gPSBuZXcgdGVuc29yXzEuVGVuc29yKHJlc3VsdHNba2V5XS50eXBlLCByZXN1bHRzW2tleV0uZGF0YSwgcmVzdWx0c1trZXldLmRpbXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZWplY3QgaWYgYW55IGVycm9yIGlzIHRocm93blxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbl9zZXNzaW9uID0gbmV3IFdlYWtNYXAoKTtcbmV4cG9ydHMuaW1wbCA9IHtcbiAgICBjcmVhdGU6IChhcmcwLCBhcmcxLCBhcmcyLCBhcmczKSA9PiB7XG4gICAgICAgIC8vIGVpdGhlciBsb2FkIGZyb20gYSBmaWxlIG9yIGJ1ZmZlclxuICAgICAgICBsZXQgbG9hZEZyb21GaWxlUGF0aCA9IGZhbHNlO1xuICAgICAgICBsZXQgZmlsZVBhdGg7XG4gICAgICAgIGxldCBidWZmZXI7XG4gICAgICAgIGxldCBieXRlT2Zmc2V0ID0gLTE7XG4gICAgICAgIGxldCBieXRlTGVuZ3RoID0gLTE7XG4gICAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICAgIGlmICh0eXBlb2YgYXJnMCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGxvYWRGcm9tRmlsZVBhdGggPSB0cnVlO1xuICAgICAgICAgICAgZmlsZVBhdGggPSBhcmcwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcxID09PSAnb2JqZWN0JyAmJiBhcmcxICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IGFyZzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnMSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcXCdvcHRpb25zXFwnIG11c3QgYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyZzAgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBidWZmZXIgPSBhcmcwLmJ1ZmZlcjtcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgPSBhcmcwLmJ5dGVPZmZzZXQ7XG4gICAgICAgICAgICBieXRlTGVuZ3RoID0gYXJnMC5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcxID09PSAnb2JqZWN0JyAmJiBhcmcxICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IGFyZzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnMSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcXCdvcHRpb25zXFwnIG11c3QgYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyZzAgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBhcmcwIGluc3RhbmNlb2YgU2hhcmVkQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IGFyZzA7XG4gICAgICAgICAgICBieXRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIGJ5dGVMZW5ndGggPSBhcmcwLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZzEgPT09ICdvYmplY3QnICYmIGFyZzEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gYXJnMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmcxID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQgPSBhcmcxO1xuICAgICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzU2FmZUludGVnZXIoYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2J5dGVPZmZzZXRcXCcgbXVzdCBiZSBhbiBpbnRlZ2VyLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYnl0ZU9mZnNldCA+PSBidWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgJ2J5dGVPZmZzZXQnIGlzIG91dCBvZiByYW5nZSBbMCwgJHtidWZmZXIuYnl0ZUxlbmd0aH0pLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBieXRlTGVuZ3RoID0gYXJnMC5ieXRlTGVuZ3RoIC0gYnl0ZU9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZzIgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGggPSBhcmcyO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc1NhZmVJbnRlZ2VyKGJ5dGVMZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnYnl0ZUxlbmd0aFxcJyBtdXN0IGJlIGFuIGludGVnZXIuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ5dGVMZW5ndGggPD0gMCB8fCBieXRlT2Zmc2V0ICsgYnl0ZUxlbmd0aCA+IGJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgJ2J5dGVMZW5ndGgnIGlzIG91dCBvZiByYW5nZSAoMCwgJHtidWZmZXIuYnl0ZUxlbmd0aCAtIGJ5dGVPZmZzZXR9XS5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZzMgPT09ICdvYmplY3QnICYmIGFyZzMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBhcmczO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmczICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXFwnb3B0aW9uc1xcJyBtdXN0IGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnMiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXFwnYnl0ZUxlbmd0aFxcJyBtdXN0IGJlIGEgbnVtYmVyLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmcxICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1xcJ29wdGlvbnNcXCcgbXVzdCBiZSBhbiBvYmplY3QuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmV4cGVjdGVkIGFyZ3VtZW50WzBdOiBtdXN0IGJlIFxcJ3BhdGhcXCcgb3IgXFwnYnVmZmVyXFwnLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByb21pc2Ugc3RhcnQgaGVyZVxuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIG5hdGl2ZSBzZXNzaW9uIHdyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbldyYXBwZXIgPSBuZXcgYmluZGluZ18xLmJpbmRpbmcuSW5mZXJlbmNlU2Vzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICAvLyBsb2FkIG1vZGVsXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2FkRnJvbUZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uV3JhcHBlci5sb2FkTW9kZWwoZmlsZVBhdGgsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbldyYXBwZXIubG9hZE1vZGVsKGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzb2x2ZSBwcm9taXNlIGlmIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEluZmVyZW5jZVNlc3Npb24oc2Vzc2lvbldyYXBwZXIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVqZWN0IGlmIGFueSBlcnJvciBpcyB0aHJvd25cbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5mZXJlbmNlLXNlc3Npb24taW1wbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbmZlcmVuY2VTZXNzaW9uID0gdm9pZCAwO1xuY29uc3QgaW5mZXJlbmNlX3Nlc3Npb25faW1wbF8xID0gcmVxdWlyZShcIi4vaW5mZXJlbmNlLXNlc3Npb24taW1wbFwiKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbmV4cG9ydHMuSW5mZXJlbmNlU2Vzc2lvbiA9IGluZmVyZW5jZV9zZXNzaW9uX2ltcGxfMS5pbXBsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5mZXJlbmNlLXNlc3Npb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ubngtdmFsdWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGVuc29yID0gdm9pZCAwO1xuLy8gYSBydW50aW1lIG1hcCB0aGF0IG1hcHMgdHlwZSBzdHJpbmcgdG8gVHlwZWRBcnJheSBjb25zdHJ1Y3Rvci4gU2hvdWxkIG1hdGNoIFRlbnNvci5EYXRhVHlwZU1hcC5cbmNvbnN0IE5VTUVSSUNfVEVOU09SX1RZUEVfVE9fVFlQRURBUlJBWV9NQVAgPSBuZXcgTWFwKFtcbiAgICBbJ2Zsb2F0MzInLCBGbG9hdDMyQXJyYXldLFxuICAgIFsndWludDgnLCBVaW50OEFycmF5XSxcbiAgICBbJ2ludDgnLCBJbnQ4QXJyYXldLFxuICAgIFsndWludDE2JywgVWludDE2QXJyYXldLFxuICAgIFsnaW50MTYnLCBJbnQxNkFycmF5XSxcbiAgICBbJ2ludDMyJywgSW50MzJBcnJheV0sXG4gICAgWydpbnQ2NCcsIEJpZ0ludDY0QXJyYXldLFxuICAgIFsnYm9vbCcsIFVpbnQ4QXJyYXldLFxuICAgIFsnZmxvYXQ2NCcsIEZsb2F0NjRBcnJheV0sXG4gICAgWyd1aW50MzInLCBVaW50MzJBcnJheV0sXG4gICAgWyd1aW50NjQnLCBCaWdVaW50NjRBcnJheV0sXG5dKTtcbi8vIGEgcnVudGltZSBtYXAgdGhhdCBtYXBzIHR5cGUgc3RyaW5nIHRvIFR5cGVkQXJyYXkgY29uc3RydWN0b3IuIFNob3VsZCBtYXRjaCBUZW5zb3IuRGF0YVR5cGVNYXAuXG5jb25zdCBOVU1FUklDX1RFTlNPUl9UWVBFREFSUkFZX1RPX1RZUEVfTUFQID0gbmV3IE1hcChbXG4gICAgW0Zsb2F0MzJBcnJheSwgJ2Zsb2F0MzInXSxcbiAgICBbVWludDhBcnJheSwgJ3VpbnQ4J10sXG4gICAgW0ludDhBcnJheSwgJ2ludDgnXSxcbiAgICBbVWludDE2QXJyYXksICd1aW50MTYnXSxcbiAgICBbSW50MTZBcnJheSwgJ2ludDE2J10sXG4gICAgW0ludDMyQXJyYXksICdpbnQzMiddLFxuICAgIFtCaWdJbnQ2NEFycmF5LCAnaW50NjQnXSxcbiAgICBbRmxvYXQ2NEFycmF5LCAnZmxvYXQ2NCddLFxuICAgIFtVaW50MzJBcnJheSwgJ3VpbnQzMiddLFxuICAgIFtCaWdVaW50NjRBcnJheSwgJ3VpbnQ2NCddLFxuXSk7XG4vKipcbiAqIGNhbGN1bGF0ZSBzaXplIGZyb20gZGltcy5cbiAqXG4gKiBAcGFyYW0gZGltcyB0aGUgZGltcyBhcnJheS4gTWF5IGJlIGFuIGlsbGVnYWwgaW5wdXQuXG4gKi9cbmNvbnN0IGNhbGN1bGF0ZVNpemUgPSAoZGltcykgPT4ge1xuICAgIGxldCBzaXplID0gMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGltID0gZGltc1tpXTtcbiAgICAgICAgaWYgKHR5cGVvZiBkaW0gIT09ICdudW1iZXInIHx8ICFOdW1iZXIuaXNTYWZlSW50ZWdlcihkaW0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBkaW1zWyR7aX1dIG11c3QgYmUgYW4gaW50ZWdlciwgZ290OiAke2RpbX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGltIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYGRpbXNbJHtpfV0gbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyLCBnb3Q6ICR7ZGltfWApO1xuICAgICAgICB9XG4gICAgICAgIHNpemUgKj0gZGltO1xuICAgIH1cbiAgICByZXR1cm4gc2l6ZTtcbn07XG5jbGFzcyBUZW5zb3Ige1xuICAgIGNvbnN0cnVjdG9yKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICAgICAgbGV0IHR5cGU7XG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICBsZXQgZGltcztcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBhcmcwIGlzIHR5cGUgb3IgZGF0YVxuICAgICAgICBpZiAodHlwZW9mIGFyZzAgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gT3ZlcnJpZGU6IGNvbnN0cnVjdG9yKHR5cGUsIGRhdGEsIC4uLilcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB0eXBlID0gYXJnMDtcbiAgICAgICAgICAgIGRpbXMgPSBhcmcyO1xuICAgICAgICAgICAgaWYgKGFyZzAgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nIHRlbnNvclxuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcmcxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIHN0cmluZyB0ZW5zb3JcXCdzIGRhdGEgbXVzdCBiZSBhIHN0cmluZyBhcnJheS4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3QgY2hlY2sgd2hldGhlciBldmVyeSBlbGVtZW50IGluIHRoZSBhcnJheSBpcyBzdHJpbmc7IHRoaXMgaXMgdG9vIHNsb3cuIHdlIGFzc3VtZSBpdCdzIGNvcnJlY3QgYW5kXG4gICAgICAgICAgICAgICAgLy8gZXJyb3Igd2lsbCBiZSBwb3B1bGF0ZWQgYXQgaW5mZXJlbmNlXG4gICAgICAgICAgICAgICAgZGF0YSA9IGFyZzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBudW1lcmljIHRlbnNvclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gTlVNRVJJQ19URU5TT1JfVFlQRV9UT19UWVBFREFSUkFZX01BUC5nZXQoYXJnMCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVW5rbm93biB0ZW5zb3IgdHlwZTogJHthcmcwfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlICdhcyBhbnknIGhlcmUgYmVjYXVzZSBUeXBlU2NyaXB0J3MgY2hlY2sgb24gdHlwZSBvZiAnU3VwcG9ydGVkVHlwZWRBcnJheUNvbnN0cnVjdG9ycy5mcm9tKCknIHByb2R1Y2VzXG4gICAgICAgICAgICAgICAgICAgIC8vIGluY29ycmVjdCByZXN1bHRzLlxuICAgICAgICAgICAgICAgICAgICAvLyAnY29uc3RydWN0b3InIHNob3VsZCBiZSBvbmUgb2YgdGhlIHR5cGVkIGFycmF5IHByb3RvdHlwZSBvYmplY3RzLlxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gY29uc3RydWN0b3IuZnJvbShhcmcxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJnMSBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBhcmcxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgQSAke3R5cGV9IHRlbnNvcidzIGRhdGEgbXVzdCBiZSB0eXBlIG9mICR7Y29uc3RydWN0b3J9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIE92ZXJyaWRlOiBjb25zdHJ1Y3RvcihkYXRhLCAuLi4pXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgZGltcyA9IGFyZzE7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcwKSkge1xuICAgICAgICAgICAgICAgIC8vIG9ubHkgYm9vbGVhbltdIGFuZCBzdHJpbmdbXSBpcyBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICBpZiAoYXJnMC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGVuc29yIHR5cGUgY2Fubm90IGJlIGluZmVycmVkIGZyb20gYW4gZW1wdHkgYXJyYXkuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0RWxlbWVudFR5cGUgPSB0eXBlb2YgYXJnMFswXTtcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RFbGVtZW50VHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdzdHJpbmcnO1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gYXJnMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmlyc3RFbGVtZW50VHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnYm9vbCc7XG4gICAgICAgICAgICAgICAgICAgIC8vICdhcmcwJyBpcyBvZiB0eXBlICdib29sZWFuW10nLiBVaW50OEFycmF5LmZyb20oYm9vbGVhbltdKSBhY3R1YWxseSB3b3JrcywgYnV0IHR5cGVzY3JpcHQgdGhpbmtzIHRoaXMgaXNcbiAgICAgICAgICAgICAgICAgICAgLy8gd3JvbmcgdHlwZS4gV2UgdXNlICdhcyBhbnknIHRvIG1ha2UgaXQgaGFwcHkuXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBVaW50OEFycmF5LmZyb20oYXJnMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIGVsZW1lbnQgdHlwZSBvZiBkYXRhIGFycmF5OiAke2ZpcnN0RWxlbWVudFR5cGV9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0ZW5zb3IgdHlwZSBmcm9tIFR5cGVkQXJyYXlcbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRUeXBlID0gTlVNRVJJQ19URU5TT1JfVFlQRURBUlJBWV9UT19UWVBFX01BUC5nZXQoYXJnMC5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgaWYgKG1hcHBlZFR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbnN1cHBvcnRlZCB0eXBlIGZvciB0ZW5zb3IgZGF0YTogJHthcmcwLmNvbnN0cnVjdG9yfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHlwZSA9IG1hcHBlZFR5cGU7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGFyZzA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHlwZSBhbmQgZGF0YSBpcyBwcm9jZXNzZWQsIG5vdyBwcm9jZXNzaW5nIGRpbXNcbiAgICAgICAgaWYgKGRpbXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gYXNzdW1lIDEtRCB0ZW5zb3IgaWYgZGltcyBvbWl0dGVkXG4gICAgICAgICAgICBkaW1zID0gW2RhdGEubGVuZ3RoXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheShkaW1zKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQSB0ZW5zb3JcXCdzIGRpbXMgbXVzdCBiZSBhIG51bWJlciBhcnJheScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHBlcmZvcm0gY2hlY2tcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGNhbGN1bGF0ZVNpemUoZGltcyk7XG4gICAgICAgIGlmIChzaXplICE9PSBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUZW5zb3IncyBzaXplKCR7c2l6ZX0pIGRvZXMgbm90IG1hdGNoIGRhdGEgbGVuZ3RoKCR7ZGF0YS5sZW5ndGh9KS5gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpbXMgPSBkaW1zO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb25cbiAgICAvLyNyZWdpb24gdGVuc29yIHV0aWxpdGllc1xuICAgIHJlc2hhcGUoZGltcykge1xuICAgICAgICByZXR1cm4gbmV3IFRlbnNvcih0aGlzLnR5cGUsIHRoaXMuZGF0YSwgZGltcyk7XG4gICAgfVxufVxuZXhwb3J0cy5UZW5zb3IgPSBUZW5zb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW5zb3ItaW1wbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UZW5zb3IgPSB2b2lkIDA7XG5jb25zdCB0ZW5zb3JfaW1wbF8xID0gcmVxdWlyZShcIi4vdGVuc29yLWltcGxcIik7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5leHBvcnRzLlRlbnNvciA9IHRlbnNvcl9pbXBsXzEuVGVuc29yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVuc29yLmpzLm1hcCIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiY29uc3QgREVGQVVMVF9NT0RFTCA9ICdzcmMvYXNzZXRzL21vZGVscy92YWVfZ3J1X2dtZF96PTJfMTYwMDc2NDU2NC5vbm54JztcbmNvbnN0IFNFUVVFTkNFX0xFTkdUSCA9IDMyO1xuY29uc3QgTlVNX0lOU1RSVU1FTlRTID0gOTtcblxuY29uc3QgaW5zdHJ1bWVudE1hcCA9IHsgLy8gUmVjZWl2ZSBhcyBwYXJ0IG9mIFBPU1QgcmVxdWVzdFxuICAgIFwiMFwiOiBcImtpY2tcIixcbiAgICBcIjFcIjogXCJnaG9zdF9raWNrXCIsXG4gICAgXCIyXCI6IFwic25hcmVcIixcbiAgICBcIjNcIjogXCJnaG9zdF9zbmFyZVwiLFxuICAgIFwiNFwiOiBcImNsYXBcIixcbiAgICBcIjVcIjogXCJyaW1cIixcbiAgICBcIjZcIjogXCJsdFwiLFxuICAgIFwiN1wiOiBcImNoXCIsXG4gICAgXCI4XCI6IFwiaHRcIixcbiAgICBcIjlcIjogXCJvaFwiLFxuICAgIFwiMTBcIjogXCJyaWRlXCIsXG4gICAgXCIxMVwiOiBcInRhbWJcIlxufVxuXG5jb25zdCByZXZlcnNlSW5zdHJ1bWVudE1hcCA9IHsgLy8gUmVjZWl2ZSBhcyBwYXJ0IG9mIFBPU1QgcmVxdWVzdFxuICAgIFwia2lja1wiOiAwLFxuICAgIFwiZ2hvc3Rfa2lja1wiOiAxLFxuICAgIFwic25hcmVcIjogMixcbiAgICBcImdob3N0X3NuYXJlXCI6IDMsXG4gICAgXCJjbGFwXCI6IDQsXG4gICAgXCJyaW1cIjogNSxcbiAgICBcImx0XCI6IDYsXG4gICAgXCJjaFwiOiA3LFxuICAgIFwiaHRcIjogOCxcbiAgICBcIm9oXCI6IDksXG4gICAgXCJyaWRlXCI6IDEwLFxuICAgIFwidGFtYlwiOiAxMVxufVxuXG5jb25zdCBtaWRpTWFwID0ge1xuICAgIFwiMFwiOiBcIkMyXCIsXG4gICAgXCIxXCI6IFwiRGIyXCIsXG4gICAgXCIyXCI6IFwiRDJcIixcbiAgICBcIjNcIjogXCJFYjJcIixcbiAgICBcIjRcIjogXCJFMlwiLFxuICAgIFwiNVwiOiBcIkYyXCIsXG4gICAgXCI2XCI6IFwiR2IyXCIsXG4gICAgXCI3XCI6IFwiRzJcIixcbiAgICBcIjhcIjogXCJBYjJcIixcbiAgICBcIjlcIjogXCJBMlwiLFxuICAgIFwiMTBcIjogXCJCYjJcIixcbiAgICBcIjExXCI6IFwiQjJcIixcbiAgICBcIjEyXCI6IFwiQzNcIixcbiAgICBcIjEzXCI6IFwiRGIzXCIsXG4gICAgXCIxNFwiOiBcIkQzXCIsXG4gICAgXCIxNVwiOiBcIkViM1wiLFxuICAgIFwiMTZcIjogXCJFM1wiLFxuICAgIFwiMTdcIjogXCJGM1wiLFxuICAgIFwiMThcIjogXCJHYjNcIixcbiAgICBcIjE5XCI6IFwiRzNcIixcbiAgICBcIjIwXCI6IFwiQWIzXCIsXG4gICAgXCIyMVwiOiBcIkEzXCIsXG4gICAgXCIyMlwiOiBcIkJiM1wiLFxuICAgIFwiMjNcIjogXCJCM1wiLFxuICAgIFwiMjRcIjogXCJDNFwiLFxuICAgIFwiMjVcIjogXCJEYjRcIixcbiAgICBcIjI2XCI6IFwiRDRcIixcbiAgICBcIjI3XCI6IFwiRWI0XCIsXG4gICAgXCIyOFwiOiBcIkU0XCIsXG4gICAgXCIyOVwiOiBcIkY0XCIsXG4gICAgXCIzMFwiOiBcIkdiNFwiLFxuICAgIFwiMzFcIjogXCJHNFwiLFxuICAgIFwiMzJcIjogXCJBYjRcIixcbiAgICBcIjMzXCI6IFwiQTRcIixcbiAgICBcIjM0XCI6IFwiQmI0XCIsXG4gICAgXCIzNVwiOiBcIkI0XCJcbn1cblxuZXhwb3J0IHsgREVGQVVMVF9NT0RFTCwgU0VRVUVOQ0VfTEVOR1RILCBOVU1fSU5TVFJVTUVOVFMsIGluc3RydW1lbnRNYXAsIHJldmVyc2VJbnN0cnVtZW50TWFwLCBtaWRpTWFwIH07XG5cbi8vIG1vZHVsZS5leHBvcnRzLnZhcmlhbmNlTG9va3VwID0ge1xuLy8gICAgIFwia2lja1wiOiB7XG4vLyAgICAgICAgIFwiMFwiOiAxLCBcIjFcIjogMCwgXCIyXCI6IDMsIFwiM1wiOiAwLCBcIjRcIjogMSwgXCI1XCI6IDAsIFwiNlwiOiAzLCBcIjdcIjogMCwgXG4vLyAgICAgICAgIFwiOFwiOiAxLCBcIjlcIjogMCwgXCIxMFwiOiAxLCBcIjExXCI6IDAsIFwiMTJcIjogMSwgXCIxM1wiOiAwLCBcIjE0XCI6IDMsIFwiMTVcIjogMFxuLy8gICAgIH0sXG4vLyAgICAgXCJnaG9zdF9raWNrXCI6IHtcbi8vICAgICAgICAgXCIwXCI6IDAsIFwiMVwiOiAxMCwgXCIyXCI6IDUsIFwiM1wiOiAxMCwgXCI0XCI6IDAsIFwiNVwiOiAxLCBcIjZcIjogNSwgXCI3XCI6IDEwLCBcbi8vICAgICAgICAgXCI4XCI6IDAsIFwiOVwiOiAxMCwgXCIxMFwiOiAwLCBcIjExXCI6IDEwLCBcIjEyXCI6IDAsIFwiMTNcIjogMTAsIFwiMTRcIjogNSwgXCIxNVwiOiAxXG4vLyAgICAgfSxcbi8vICAgICBcInNuYXJlXCI6IHtcbi8vICAgICAgICAgXCIwXCI6IDAsIFwiMVwiOiAwLCBcIjJcIjogMCwgXCIzXCI6IDAsIFwiNFwiOiAxLCBcIjVcIjogMCwgXCI2XCI6IDAsIFwiN1wiOiAwLCBcbi8vICAgICAgICAgXCI4XCI6IDAsIFwiOVwiOiAwLCBcIjEwXCI6IDEsIFwiMTFcIjogMCwgXCIxMlwiOiAxLCBcIjEzXCI6IDAsIFwiMTRcIjogMCwgXCIxNVwiOiAwXG4vLyAgICAgfSxcbi8vICAgICBcImdob3N0X3NuYXJlXCI6IHtcbi8vICAgICAgICAgXCIwXCI6IDAsIFwiMVwiOiAxMCwgXCIyXCI6IDUsIFwiM1wiOiAxMCwgXCI0XCI6IDAsIFwiNVwiOiAxLCBcIjZcIjogNSwgXCI3XCI6IDEwLCBcbi8vICAgICAgICAgXCI4XCI6IDAsIFwiOVwiOiAxMCwgXCIxMFwiOiAwLCBcIjExXCI6IDEwLCBcIjEyXCI6IDAsIFwiMTNcIjogMTAsIFwiMTRcIjogNSwgXCIxNVwiOiAxXG4vLyAgICAgfSxcbi8vICAgICBcImNsYXBcIjoge1xuLy8gICAgICAgICBcIjBcIjogMCwgXCIxXCI6IDAsIFwiMlwiOiAwLCBcIjNcIjogMCwgXCI0XCI6IDEsIFwiNVwiOiAwLCBcIjZcIjogMCwgXCI3XCI6IDAsIFxuLy8gICAgICAgICBcIjhcIjogMCwgXCI5XCI6IDAsIFwiMTBcIjogMSwgXCIxMVwiOiAwLCBcIjEyXCI6IDEsIFwiMTNcIjogMCwgXCIxNFwiOiAwLCBcIjE1XCI6IDBcbi8vICAgICB9LFxuLy8gICAgIFwicmltXCI6IHtcbi8vICAgICAgICAgXCIwXCI6IDAsIFwiMVwiOiAxMCwgXCIyXCI6IDUsIFwiM1wiOiAxMCwgXCI0XCI6IDAsIFwiNVwiOiAxLCBcIjZcIjogNSwgXCI3XCI6IDEwLCBcbi8vICAgICAgICAgXCI4XCI6IDAsIFwiOVwiOiAxMCwgXCIxMFwiOiAwLCBcIjExXCI6IDEwLCBcIjEyXCI6IDAsIFwiMTNcIjogMTAsIFwiMTRcIjogNSwgXCIxNVwiOiAxXG4vLyAgICAgfSxcbi8vICAgICBcImx0XCI6IHtcbi8vICAgICAgICAgXCIwXCI6IDAsIFwiMVwiOiAxMCwgXCIyXCI6IDUsIFwiM1wiOiAxMCwgXCI0XCI6IDAsIFwiNVwiOiAxLCBcIjZcIjogNSwgXCI3XCI6IDEwLCBcbi8vICAgICAgICAgXCI4XCI6IDAsIFwiOVwiOiAxMCwgXCIxMFwiOiAwLCBcIjExXCI6IDEwLCBcIjEyXCI6IDAsIFwiMTNcIjogMTAsIFwiMTRcIjogNSwgXCIxNVwiOiAxXG4vLyAgICAgfSxcbi8vICAgICBcImNoXCI6IHtcbi8vICAgICAgICAgXCIwXCI6IDIsIFwiMVwiOiAxMCwgXCIyXCI6IDEsIFwiM1wiOiAxMCwgXCI0XCI6IDIsIFwiNVwiOiAxMCwgXCI2XCI6IDEsIFwiN1wiOiAxMCwgXG4vLyAgICAgICAgIFwiOFwiOiAyLCBcIjlcIjogMTAsIFwiMTBcIjogMSwgXCIxMVwiOiAxMCwgXCIxMlwiOiAyLCBcIjEzXCI6IDEwLCBcIjE0XCI6IDEsIFwiMTVcIjogMTBcbi8vICAgICB9LFxuLy8gICAgIFwiaHRcIjoge1xuLy8gICAgICAgICBcIjBcIjogMCwgXCIxXCI6IDEwLCBcIjJcIjogNSwgXCIzXCI6IDEwLCBcIjRcIjogMCwgXCI1XCI6IDEsIFwiNlwiOiA1LCBcIjdcIjogMTAsIFxuLy8gICAgICAgICBcIjhcIjogMCwgXCI5XCI6IDEwLCBcIjEwXCI6IDAsIFwiMTFcIjogMTAsIFwiMTJcIjogMCwgXCIxM1wiOiAxMCwgXCIxNFwiOiA1LCBcIjE1XCI6IDFcbi8vICAgICB9LFxuLy8gICAgIFwib2hcIjoge1xuLy8gICAgICAgICBcIjBcIjogMSwgXCIxXCI6IDIsIFwiMlwiOiAxLCBcIjNcIjogMiwgXCI0XCI6IDEsIFwiNVwiOiAyLCBcIjZcIjogMSwgXCI3XCI6IDIsIFxuLy8gICAgICAgICBcIjhcIjogMiwgXCI5XCI6IDIsIFwiMTBcIjogMSwgXCIxMVwiOiAyLCBcIjEyXCI6IDIsIFwiMTNcIjogMiwgXCIxNFwiOiAxLCBcIjE1XCI6IDJcbi8vICAgICB9LFxuLy8gICAgIFwicmlkZVwiOiB7XG4vLyAgICAgICAgIFwiMFwiOiAyLCBcIjFcIjogNSwgXCIyXCI6IDIsIFwiM1wiOiA1LCBcIjRcIjogMiwgXCI1XCI6IDUsIFwiNlwiOiAyLCBcIjdcIjogNSwgXG4vLyAgICAgICAgIFwiOFwiOiAyLCBcIjlcIjogNSwgXCIxMFwiOiAxLCBcIjExXCI6IDUsIFwiMTJcIjogMiwgXCIxM1wiOiA1LCBcIjE0XCI6IDEsIFwiMTVcIjogNVxuLy8gICAgIH0sXG4vLyAgICAgXCJ0YW1iXCI6IHtcbi8vICAgICAgICAgXCIwXCI6IDIsIFwiMVwiOiA1LCBcIjJcIjogMiwgXCIzXCI6IDUsIFwiNFwiOiAyLCBcIjVcIjogNSwgXCI2XCI6IDIsIFwiN1wiOiA1LCBcbi8vICAgICAgICAgXCI4XCI6IDIsIFwiOVwiOiA1LCBcIjEwXCI6IDEsIFwiMTFcIjogNSwgXCIxMlwiOiAyLCBcIjEzXCI6IDUsIFwiMTRcIjogMSwgXCIxNVwiOiA1XG4vLyAgICAgfVxuLy8gfVxuXG5cbi8vIG1vZHVsZS5leHBvcnRzLm1lYW5Mb29rdXAgPSB7XG4vLyAgICAgXCJraWNrXCI6IHtcbi8vICAgICAgICAgXCIwXCI6IDAsIFwiMVwiOiAwLCBcIjJcIjogMCwgXCIzXCI6IDAsIFwiNFwiOiAwLCBcIjVcIjogMCwgXCI2XCI6IDAsIFwiN1wiOiAwLCBcbi8vICAgICAgICAgXCI4XCI6IDAsIFwiOVwiOiAwLCBcIjEwXCI6IDAsIFwiMTFcIjogNDAsIFwiMTJcIjogMCwgXCIxM1wiOiAwLCBcIjE0XCI6IDQwLCBcIjE1XCI6IDBcbi8vICAgICB9LFxuLy8gICAgIFwiZ2hvc3Rfa2lja1wiOiB7XG4vLyAgICAgICAgIFwiMFwiOiAwLCBcIjFcIjogMTAsIFwiMlwiOiAzMCwgXCIzXCI6IDEwLCBcIjRcIjogMCwgXCI1XCI6IDMwLCBcIjZcIjogMTAsIFwiN1wiOiAzMCwgXG4vLyAgICAgICAgIFwiOFwiOiAwLCBcIjlcIjogNDAsIFwiMTBcIjogMCwgXCIxMVwiOiA0MCwgXCIxMlwiOiAwLCBcIjEzXCI6IDEwLCBcIjE0XCI6IDQwLCBcIjE1XCI6IDEwXG4vLyAgICAgfSxcbi8vICAgICBcInNuYXJlXCI6IHtcbi8vICAgICAgICAgXCIwXCI6IDAsIFwiMVwiOiAwLCBcIjJcIjogMCwgXCIzXCI6IDAsIFwiNFwiOiAwLCBcIjVcIjogMjAsIFwiNlwiOiAwLCBcIjdcIjogNjAsIFxuLy8gICAgICAgICBcIjhcIjogMCwgXCI5XCI6IDYwLCBcIjEwXCI6IDAsIFwiMTFcIjogMCwgXCIxMlwiOiAwLCBcIjEzXCI6IDQwLCBcIjE0XCI6IDUwLCBcIjE1XCI6IDYwXG4vLyAgICAgfSxcbi8vICAgICBcImdob3N0X3NuYXJlXCI6IHtcbi8vICAgICAgICAgXCIwXCI6IDAsIFwiMVwiOiA1MCwgXCIyXCI6IDAsIFwiM1wiOiAwLCBcIjRcIjogMCwgXCI1XCI6IDIwLCBcIjZcIjogMCwgXCI3XCI6IDYwLCBcbi8vICAgICAgICAgXCI4XCI6IDAsIFwiOVwiOiA2MCwgXCIxMFwiOiAwLCBcIjExXCI6IDIwLCBcIjEyXCI6IDAsIFwiMTNcIjogNDAsIFwiMTRcIjogNTAsIFwiMTVcIjogNjBcbi8vICAgICB9LFxuLy8gICAgIFwiY2xhcFwiOiB7IC8vIGN1cnJlbnRseSBkZWFjdGl2YXRlZFxuLy8gICAgICAgICBcIjBcIjogMCwgXCIxXCI6IDAsIFwiMlwiOiAwLCBcIjNcIjogMCwgXCI0XCI6IDAsIFwiNVwiOiAwLCBcIjZcIjogMCwgXCI3XCI6IDAsIFxuLy8gICAgICAgICBcIjhcIjogMCwgXCI5XCI6IDAsIFwiMTBcIjogMCwgXCIxMVwiOiAwLCBcIjEyXCI6IDAsIFwiMTNcIjogMCwgXCIxNFwiOiAwLCBcIjE1XCI6IDBcbi8vICAgICB9LFxuLy8gICAgIFwicmltXCI6IHtcbi8vICAgICAgICAgXCIwXCI6IDAsIFwiMVwiOiA1MCwgXCIyXCI6IDAsIFwiM1wiOiAwLCBcIjRcIjogMCwgXCI1XCI6IDIwLCBcIjZcIjogMCwgXCI3XCI6IDYwLCBcbi8vICAgICAgICAgXCI4XCI6IDAsIFwiOVwiOiA2MCwgXCIxMFwiOiAwLCBcIjExXCI6IDIwLCBcIjEyXCI6IDAsIFwiMTNcIjogNDAsIFwiMTRcIjogNTAsIFwiMTVcIjogNjBcbi8vICAgICB9LFxuLy8gICAgIFwibHRcIjoge1xuLy8gICAgICAgICBcIjBcIjogMCwgXCIxXCI6IDAsIFwiMlwiOiAwLCBcIjNcIjogMCwgXCI0XCI6IDAsIFwiNVwiOiAwLCBcIjZcIjogMCwgXCI3XCI6IDAsIFxuLy8gICAgICAgICBcIjhcIjogMCwgXCI5XCI6IDYwLCBcIjEwXCI6IDAsIFwiMTFcIjogMjAsIFwiMTJcIjogMCwgXCIxM1wiOiA0MCwgXCIxNFwiOiA1MCwgXCIxNVwiOiA2MFxuLy8gICAgIH0sXG4vLyAgICAgXCJjaFwiOiB7XG4vLyAgICAgICAgIFwiMFwiOiA0MCwgXCIxXCI6IDMwLCBcIjJcIjogMzAsIFwiM1wiOiAzMCwgXCI0XCI6IDYwLCBcIjVcIjogMzAsIFwiNlwiOiAzMCwgXCI3XCI6IDMwLCBcbi8vICAgICAgICAgXCI4XCI6IDQwLCBcIjlcIjogMzAsIFwiMTBcIjogMzAsIFwiMTFcIjogMzAsIFwiMTJcIjogNjAsIFwiMTNcIjogMjAsIFwiMTRcIjogMTAsIFwiMTVcIjogMTBcbi8vICAgICB9LFxuLy8gICAgIFwiaHRcIjoge1xuLy8gICAgICAgICBcIjBcIjogMCwgXCIxXCI6IDAsIFwiMlwiOiAwLCBcIjNcIjogMCwgXCI0XCI6IDAsIFwiNVwiOiAwLCBcIjZcIjogMCwgXCI3XCI6IDAsIFxuLy8gICAgICAgICBcIjhcIjogMCwgXCI5XCI6IDYwLCBcIjEwXCI6IDAsIFwiMTFcIjogMjAsIFwiMTJcIjogMCwgXCIxM1wiOiA0MCwgXCIxNFwiOiA1MCwgXCIxNVwiOiA2MFxuLy8gICAgIH0sXG4vLyAgICAgXCJvaFwiOiB7XG4vLyAgICAgICAgIFwiMFwiOiAzMCwgXCIxXCI6IDAsIFwiMlwiOiAyMCwgXCIzXCI6IDIwLCBcIjRcIjogMCwgXCI1XCI6IDIwLCBcIjZcIjogMjAsIFwiN1wiOiAxMCwgXG4vLyAgICAgICAgIFwiOFwiOiAwLCBcIjlcIjogMzAsIFwiMTBcIjogMzAsIFwiMTFcIjogMzAsIFwiMTJcIjogNDAsIFwiMTNcIjogMjAsIFwiMTRcIjogMCwgXCIxNVwiOiAxMFxuLy8gICAgIH0sXG4vLyAgICAgXCJyaWRlXCI6IHtcbi8vICAgICAgICAgXCIwXCI6IDAsIFwiMVwiOiAwLCBcIjJcIjogMCwgXCIzXCI6IDAsIFwiNFwiOiAwLCBcIjVcIjogMCwgXCI2XCI6IDAsIFwiN1wiOiAwLCBcbi8vICAgICAgICAgXCI4XCI6IDAsIFwiOVwiOiAwLCBcIjEwXCI6IDAsIFwiMTFcIjogMCwgXCIxMlwiOiAwLCBcIjEzXCI6IDAsIFwiMTRcIjogMCwgXCIxNVwiOiAwXG4vLyAgICAgfSxcbi8vICAgICBcInRhbWJcIjoge1xuLy8gICAgICAgICBcIjBcIjogMCwgXCIxXCI6IDAsIFwiMlwiOiAwLCBcIjNcIjogMCwgXCI0XCI6IDAsIFwiNVwiOiAwLCBcIjZcIjogMCwgXCI3XCI6IDAsIFxuLy8gICAgICAgICBcIjhcIjogMCwgXCI5XCI6IDAsIFwiMTBcIjogMCwgXCIxMVwiOiAwLCBcIjEyXCI6IDAsIFwiMTNcIjogMCwgXCIxNFwiOiAwLCBcIjE1XCI6IDBcbi8vICAgICB9LFxuLy8gfSIsImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuLy8gaW1wb3J0IGFzeW5jIGZyb20gJ2FzeW5jJztcblxuaW1wb3J0IE9OTlhNb2RlbCBmcm9tICcuL21vZGVsJztcbmltcG9ydCBDb252ZXJ0ZXJUZW5zb3IgZnJvbSAnLi90ZW5zb3InO1xuaW1wb3J0IHsgREVGQVVMVF9NT0RFTCwgU0VRVUVOQ0VfTEVOR1RILCBOVU1fSU5TVFJVTUVOVFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cblxuY2xhc3MgTGF0ZW50U3BhY2Uge1xuICAgIC8qKlxuICAgICAqIFRoaXMgY2xhc3Mgd3JhcHMgb3VyIGxvYWRlZCBPTk5YIG1vZGVsIGFuZCBkZWNvZGVzIGJhc2VkIG9uIGluY29taW5nIHJlcXVlc3QgZGF0YVxuICAgICAqIEBwYXJhbSBtb2RlbCBJbnN0YW5jZSBvZiBPTk5YTW9kZWxcbiAgICAgKiBAcGFyYW0gcmVxdWVzdGJvZHkuaW5zdHJ1bWVudHMgTnVtYmVyIG9mIGluc3RydW1lbnRzIGluIHRoZSBwYXR0ZXJuXG4gICAgICogQHBhcmFtIHJlcXVlc3Rib2R5Lm5vdGVEcm9wb3V0IFByb2JhYmlsaXR5IChbMCwgMV0pIG9mIG5vdGUgZHJvcG91dCBmb3IgaW5mZXJlbmNlXG4gICAgICogQHBhcmFtIHJlcXVlc3RCb2R5LmRhdGEgT2JqZWN0IGNvbnRhaW5pbmcgei1jb29yZGluYXRlIHRvIHBhdHRlcm4gbWFwcGluZ1xuICAgICAqIEBwYXJhbSBjb252ZXJ0ZXJUZW5zb3IgSW5zdGFuY2Ugb2YgQ29udmVydGVyVGVuc29yXG4gICAgICovXG4gICAgbW9kZWw6IE9OTlhNb2RlbDtcbiAgICBtb2RlbF9wYXRoOiBzdHJpbmc7XG4gICAgaW5zdHJ1bWVudHM6IG51bWJlcjtcbiAgICBzZXF1ZW5jZUxlbmd0aDogbnVtYmVyO1xuICAgIG51bVNhbXBsZXM6IG51bWJlcjtcbiAgICBub3RlRHJvcG91dDogbnVtYmVyO1xuICAgIGNvbnZlcnRlclRlbnNvcjogQ29udmVydGVyVGVuc29yO1xuICAgIGxhdGVudFZlY3RvcnM6IEFycmF5PHN0cmluZz47XG4gICAgX2RhdGE6IE9iamVjdDtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDogT05OWE1vZGVsLCBwYXR0ZXJuLCBudW1TYW1wbGVzLCBub3RlRHJvcG91dCwgaW5zdHJ1bWVudHMsIHNlcXVlbmNlTGVuZ3RoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbW9kZWwgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgZGlyZWN0bHkgYWNjZXNzIGNsYXNzIGNvbnN0cnVjdG9yIC0gdXNlIExhdGVudFNwYWNlLmJ1aWxkKDxwYXJhbXM+KSBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgdGhpcy5pbnN0cnVtZW50cyA9IGluc3RydW1lbnRzO1xuICAgICAgICB0aGlzLnNlcXVlbmNlTGVuZ3RoID0gc2VxdWVuY2VMZW5ndGg7XG4gICAgICAgIHRoaXMubnVtU2FtcGxlcyA9IG51bVNhbXBsZXM7XG4gICAgICAgIHRoaXMubm90ZURyb3BvdXQgPSBub3RlRHJvcG91dDtcbiAgICAgICAgdGhpcy5sYXRlbnRWZWN0b3JzID0gdGhpcy5fZ2VuZXJhdGVMYXRlbnRWZWN0b3JzKG51bVNhbXBsZXMpO1xuICAgICAgICB0aGlzLmNvbnZlcnRlclRlbnNvciA9IG5ldyBDb252ZXJ0ZXJUZW5zb3IocGF0dGVybik7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICB9XG4gICAgZ2V0IGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cbiAgICBnZXQgcGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydGVyVGVuc29yLnBhdHRlcm47XG4gICAgfVxuICAgIHN0YXRpYyBhc3luYyBidWlsZChcbiAgICAgICAgcGF0dGVybjogRmxvYXQzMkFycmF5LCBcbiAgICAgICAgbnVtU2FtcGxlczogbnVtYmVyID0gNDAwLFxuICAgICAgICBub3RlRHJvcG91dDogbnVtYmVyID0gMC41LCBcbiAgICAgICAgaW5zdHJ1bWVudHM6IG51bWJlciA9IE5VTV9JTlNUUlVNRU5UUyxcbiAgICAgICAgc2VxdWVuY2VMZW5ndGg6IG51bWJlciA9IFNFUVVFTkNFX0xFTkdUSCk6IFByb21pc2U8TGF0ZW50U3BhY2U+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBtb2RlbCA9IGF3YWl0IE9OTlhNb2RlbC5idWlsZChcbiAgICAgICAgICAgICAgICBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgREVGQVVMVF9NT0RFTCksIFxuICAgICAgICAgICAgICAgIGluc3RydW1lbnRzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBMYXRlbnRTcGFjZShtb2RlbCwgcGF0dGVybiwgbnVtU2FtcGxlcywgbm90ZURyb3BvdXQsIGluc3RydW1lbnRzLCBzZXF1ZW5jZUxlbmd0aCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignZmFpbGVkIHRvIGxvYWQgTGF0ZW50U3BhY2UnKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgYXN5bmMgcG9wdWxhdGUoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQb3B1bGF0ZXMgdGhpcy5kYXRhIGJ5IGRlY29kaW5nIHRoZSBsYXRlbnQgY29vcmRpbmF0ZXMgYXJyYXkgdGhpcy56cyBpbiBwYXJhbGxlbFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGE7XG4gICAgICAgIGNvbnN0IGlucHV0VGVuc29yID0gdGhpcy5jb252ZXJ0ZXJUZW5zb3I7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgY29uc3Qgbm90ZURyb3BvdXQgPSB0aGlzLm5vdGVEcm9wb3V0O1xuXG4gICAgICAgIGxldCBwcm9taXNlcyA9IHRoaXMubGF0ZW50VmVjdG9ycy5tYXAoYXN5bmMoeikgPT4ge1xuICAgICAgICAgICAgbGV0IGRlbHRhX3ogPSB6LnNwbGl0KCcsJykubWFwKCh6X2kpID0+IHsgcmV0dXJuIHBhcnNlRmxvYXQoel9pKSB9KTtcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSBhd2FpdCBtb2RlbC5kZWNvZGUoaW5wdXRUZW5zb3IuaW5kaWNlcywgZGVsdGFfeiwgbm90ZURyb3BvdXQpO1xuICAgICAgICAgICAgbGV0IG91dHB1dFRlbnNvciA9IG5ldyBDb252ZXJ0ZXJUZW5zb3Iob3V0cHV0KTtcbiAgICAgICAgICAgIGRhdGFbel0gPSBvdXRwdXRUZW5zb3IuYnVmZmVyO1xuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgXG4gICAgfVxuICAgIHByaXZhdGUgX2dlbmVyYXRlTGF0ZW50VmVjdG9ycyhudW1TYW1wbGVzKSB7XG4gICAgICAgIGxldCBuID0gTWF0aC5yb3VuZCgoTWF0aC5zcXJ0KG51bVNhbXBsZXMpKS8yKTtcbiAgICAgICAgY29uc3QgbGF0ZW50VmVjdG9ycyA9IFtdO1xuICAgICAgICBmb3IgKGxldCB4ID0gLW47IHggPCBuOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAtbjsgeSA8IG47IHkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpZHggPSBuZXcgQXJyYXkoW3gsIHldKTtcbiAgICAgICAgICAgICAgICBsYXRlbnRWZWN0b3JzLnB1c2goaWR4LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYXRlbnRWZWN0b3JzO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF0ZW50U3BhY2U7IiwiaW1wb3J0IHsgSW5mZXJlbmNlU2Vzc2lvbiwgVGVuc29yIH0gZnJvbSAnb25ueHJ1bnRpbWUnO1xuXG5pbXBvcnQgeyBERUZBVUxUX01PREVMLCBTRVFVRU5DRV9MRU5HVEggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cblxuY2xhc3MgT05OWE1vZGVsIHtcbiAgICAvKipcbiAgICAgKiBDb250YWlucyBPTk5YIG1vZGVsIGFuZCBpbmZlcmVuY2UgZnVuY3Rpb25zXG4gICAgICovXG4gICAgc2Vzc2lvbjogSW5mZXJlbmNlU2Vzc2lvbjtcbiAgICBpbnN0cnVtZW50czogbnVtYmVyO1xuICAgIHZvY2FiU2l6ZTogbnVtYmVyO1xuICAgIHNlcXVlbmNlTGVuZ3RoOiBudW1iZXI7XG4gICAgaWR4MnNlcTogb2JqZWN0O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBzZXNzaW9uOiBJbmZlcmVuY2VTZXNzaW9uLCBcbiAgICAgICAgaW5zdHJ1bWVudHM6IG51bWJlciA9IDkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXNzaW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgYmUgY2FsbGVkIGRpcmVjdGx5IC0gdXNlIGF3YWl0IE1vZGVsLmJ1aWxkKHBhdHRlcm4pIGluc3RlYWQnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudHMgPSBpbnN0cnVtZW50cztcbiAgICAgICAgdGhpcy52b2NhYlNpemUgPSBNYXRoLnBvdygyLCBpbnN0cnVtZW50cyk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VMZW5ndGggPSBTRVFVRU5DRV9MRU5HVEg7ICAvLyBIQVJELUNPREVEIFNFUVVFTkNFIExFTkdUSCBUTyAyIEJBUlNcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgYnVpbGQoXG4gICAgICAgIGZwYXRoOiBzdHJpbmcgPSBERUZBVUxUX01PREVMLCBcbiAgICAgICAgaW5zdHJ1bWVudHM6IG51bWJlcik6IFByb21pc2U8T05OWE1vZGVsPiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyp9IGZwYXRoIFBhdGggdG8gT05OWCBtb2RlbCwgZGVmYXVsdCBpcyBGUEFUSFxuICAgICAgICAgKi8gIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IEluZmVyZW5jZVNlc3Npb24uY3JlYXRlKGZwYXRoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgT05OWE1vZGVsKHNlc3Npb24sIGluc3RydW1lbnRzKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGZhaWxlZCB0byBsb2FkIE9OTlggbW9kZWw6ICR7ZX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGRlY29kZShcbiAgICAgICAgaW5kaWNlczogRmxvYXQzMkFycmF5LCBcbiAgICAgICAgZGVsdGFaOiBBcnJheTxudW1iZXI+ID0gWzAuLCAwLl0sIFxuICAgICAgICBub3RlRHJvcG91dDogbnVtYmVyID0gMC41KTogUHJvbWlzZTxGbG9hdDMyQXJyYXk+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcndhcmQgcGFzcyBvZiBPTk5YIG1vZGVsIGRlY29kZXIgLSBnZW5lcmF0ZXMgcGF0dGVybiB2YXJpYXRpb24uXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0geyp9IGluZGljZXMgIChsZW5ndGg9MzIpIGNvbnRhaW5pbmcgc2VxdWVuY2UgaW5kaWNlc1xuICAgICAgICAgKiBAcGFyYW0geyp9IGRlbHRhWiBEZWx0YSBmcm9tIG9yaWdpbiBpbiB6LXNwYWNlIGZvciBib3RoIGRpbWVuc2lvbnMgKGN1cnJlbnRseSBvbmx5IHN1cHBvcnQgMkQpXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gbm90ZURyb3BvdXQgUHJvYmFiaWxpdHkgb2Ygbm90ZSBkcm9wb3V0IHdoZW4gZ2VuZXJhdGluZyBuZXcgcGF0dGVyblxuICAgICAgICAgKiBcbiAgICAgICAgICogQHJldHVybnMgb3V0cHV0IGluZGljZXNcbiAgICAgICAgICovXG4gICAgICAgIFxuICAgICAgICBjb25zdCB0ZW5zb3IgPSBuZXcgVGVuc29yKCdmbG9hdDMyJywgaW5kaWNlcywgWzMyLCAxXSk7XG4gICAgICAgIGNvbnN0IGRlbHRhWlRlbnNvciA9IG5ldyBUZW5zb3IoJ2Zsb2F0MzInLCBkZWx0YVosIFsyLCAxXSk7XG4gICAgICAgIGNvbnN0IG5vdGVEcm9wb3V0VGVuc29yID0gbmV3IFRlbnNvcihuZXcgRmxvYXQzMkFycmF5KDEpLCBbXSk7XG4gICAgICAgIG5vdGVEcm9wb3V0VGVuc29yLmRhdGFbMF0gPSBub3RlRHJvcG91dDtcbiAgICAgICAgY29uc3QgZmVlZHMgPSB7IGlucHV0OiB0ZW5zb3IsIGRlbHRhX3o6IGRlbHRhWlRlbnNvciwgbm90ZV9kcm9wb3V0OiBub3RlRHJvcG91dFRlbnNvcn07XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCB0aGlzLnNlc3Npb24ucnVuKGZlZWRzKTtcbiAgICAgICAgbGV0IG91dHB1dCA9IHRoaXMuZnJvbU9uZUhvdChyZXN1bHRzLm91dHB1dC5kYXRhKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG5cbiAgICBmcm9tT25lSG90KHRlbnNvcik6IEZsb2F0MzJBcnJheSB7XG4gICAgICAgIGxldCBpbmRpY2VzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZXF1ZW5jZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdG1wID0gdGVuc29yLnNsaWNlKGkqdGhpcy52b2NhYlNpemUsIChpKzEpKnRoaXMudm9jYWJTaXplKVxuICAgICAgICAgICAgbGV0IGlkeCA9IHRtcC5pbmRleE9mKE1hdGgubWF4KC4uLnRtcCkpO1xuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKGlkeClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRmxvYXQzMkFycmF5LmZyb20oaW5kaWNlcylcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9OTlhNb2RlbDtcbiIsImltcG9ydCB7IFNFUVVFTkNFX0xFTkdUSCAsIE5VTV9JTlNUUlVNRU5UUyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgQ29udmVydGVyVGVuc29yIHtcbiAgICAvKipcbiAgICAgKiBUaGlzIGNsYXNzIGV4aXN0cyB0byBjb252ZXJ0IGJldHdlZW4gdGhyZWUgd2F5cyB0byByZXByZXNlbnQgb3VyIGRhdGE6XG4gICAgICogICAgICAgICAgXG4gICAgICogICAgICBfYnVmZmVyIHsgbGVuZ3RoOiBTRVFVRU5DRV9MRU5HVEgqTlVNX0lOU1RSVU1FTlRTIH0gXG4gICAgICogICAgICAgICAgLSBCaW5hcnktZW5jb2RpbmdcbiAgICAgKiAgICAgICAgICAtIFVzZWQgdG8gY29tbXVuaWNhdGUgd2l0aCB0aGUgY2xpZW50XG4gICAgICogICAgICBfcGF0dGVybiB7IGxlbmd0aDogW1NFUVVFTkNFX0xFTkdUSCwgTlVNX0lOU1RSVU1FTlRTXX1cbiAgICAgKiAgICAgICAgICAtIEJpbmFyeS1lbmNvZGluZ1xuICAgICAqICAgICAgICAgIC0gTUlESS1jb21wYXRpYmxlXG4gICAgICogICAgICBfaW5kaWNlcyB7IGxlbmd0aDogU0VRVUVOQ0VfTEVOR1RIIH1cbiAgICAgKiAgICAgICAgICAtIENhdGVnb3JpY2FsbHkgZW5jb2RlZCBieSBpbmRleCBcbiAgICAgKiAgICAgICAgICAtIFNlcnZlcyBhcyBpbnB1dCBhbmQgb3V0cHV0IG9mIHRoZSBPTk5YIG1vZGVsXG4gICAgICogXG4gICAgICogV2Ugd2lsbCB1c2UgX2J1ZmZlciBhcyB0aGUgdW5pZnlpbmcgZGF0YSByZXByZXNlbnRhdGlvbiBhcyBpdCdzIHRoZSBtb3N0XG4gICAgICogaW50dWl0aXZlIGFuZCBpcyBlYXNpbHkgY29udmVydGVkIHRvIHRoZSBvdGhlciB0d28gZm9ybWF0cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VxdWVuY2VMZW5ndGg6IG51bWJlcjtcbiAgICBwdWJsaWMgaW5zdHJ1bWVudHM6IG51bWJlcjtcbiAgICBwcml2YXRlIF9wYXR0ZXJuOiBBcnJheTxBcnJheTxudW1iZXI+PjsgXG4gICAgcHJpdmF0ZSBfYnVmZmVyOiBGbG9hdDMyQXJyYXk7XG4gICAgcHJpdmF0ZSBfaW5kaWNlczogRmxvYXQzMkFycmF5O1xuXG4gICAgY29uc3RydWN0b3IoaW5wdXQsIHNlcXVlbmNlTGVuZ3RoOiBudW1iZXIgPSBTRVFVRU5DRV9MRU5HVEgsIGluc3RydW1lbnRzOiBudW1iZXIgPSBOVU1fSU5TVFJVTUVOVFMpIHtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZUxlbmd0aCA9IHNlcXVlbmNlTGVuZ3RoO1xuICAgICAgICB0aGlzLmluc3RydW1lbnRzID0gaW5zdHJ1bWVudHM7XG4gICAgICAgIGlmIChpbnB1dC5sZW5ndGggPT0gdGhpcy5zZXF1ZW5jZUxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5faW5kaWNlcyA9IGlucHV0O1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gdGhpcy5fZnJvbV9pbmRpY2VzKGlucHV0KTtcbiAgICAgICAgICAgIHRoaXMuX3BhdHRlcm4gPSB0aGlzLl90b19wYXR0ZXJuKHRoaXMuX2J1ZmZlcik7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQubGVuZ3RoID09IHRoaXMuc2VxdWVuY2VMZW5ndGgqdGhpcy5pbnN0cnVtZW50cykge1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gaW5wdXQ7XG4gICAgICAgICAgICB0aGlzLl9pbmRpY2VzID0gdGhpcy5fdG9faW5kaWNlcyhpbnB1dCk7XG4gICAgICAgICAgICB0aGlzLl9wYXR0ZXJuID0gdGhpcy5fdG9fcGF0dGVybih0aGlzLl9idWZmZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0Lmxlbmd0aCA9PSB0aGlzLmluc3RydW1lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXR0ZXJuID0gaW5wdXQ7XG4gICAgICAgICAgICB0aGlzLl9idWZmZXIgPSB0aGlzLl9mcm9tX3BhdHRlcm4oaW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5faW5kaWNlcyA9IHRoaXMuX3RvX2luZGljZXModGhpcy5fYnVmZmVyKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIGlucHV0IG9mIGxlbmd0aCAke2lucHV0Lmxlbmd0aH1gKVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBwYXR0ZXJuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0dGVybjtcbiAgICB9XG4gICAgZ2V0IGJ1ZmZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1ZmZlcjtcbiAgICB9XG4gICAgZ2V0IGluZGljZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRpY2VzO1xuICAgIH1cbiAgICBfZnJvbV9wYXR0ZXJuKHBhdHRlcm46IEFycmF5PEFycmF5PG51bWJlcj4+KTogRmxvYXQzMkFycmF5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlcnQgZnJvbSBwYXR0ZXJuIHRvIGJ1ZmZlciBhcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnNlcXVlbmNlTGVuZ3RoKnRoaXMuaW5zdHJ1bWVudHMpO1xuICAgICAgICBwYXR0ZXJuLmZvckVhY2goKGNoYW5uZWwsIGkpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDwgY2hhbm5lbC5sZW5ndGg7IHN0ZXArKykge1xuICAgICAgICAgICAgICAgIGJ1ZmZlclsoaSpjaGFubmVsLmxlbmd0aCkgKyBzdGVwXSA9IGNoYW5uZWxbc3RlcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNwb3NlKGJ1ZmZlciwgdHJ1ZSk7XG4gICAgfVxuICAgIF90b19wYXR0ZXJuKGJ1ZmZlcjogRmxvYXQzMkFycmF5KTogQXJyYXk8QXJyYXk8bnVtYmVyPj4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29udmVydCBmcm9tIGJ1ZmZlciB0byBwYXR0ZXJuIGFycmF5XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBidWZmZXJBcnJheSA9IEFycmF5LmZyb20odGhpcy5fdHJhbnNwb3NlKGJ1ZmZlciwgZmFsc2UpKVxuICAgICAgICBjb25zdCBwYXR0ZXJuID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbnN0cnVtZW50czsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdG1wID0gYnVmZmVyQXJyYXkuc2xpY2UoaSp0aGlzLnNlcXVlbmNlTGVuZ3RoLCAoaSsxKSp0aGlzLnNlcXVlbmNlTGVuZ3RoKTtcbiAgICAgICAgICAgIHBhdHRlcm4ucHVzaCh0bXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cbiAgICBfZnJvbV9pbmRpY2VzKGluZGljZXM6IEZsb2F0MzJBcnJheSk6IEZsb2F0MzJBcnJheSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZXJ0IGZyb20gaW5kZXggdG8gYnVmZmVyIGFycmF5XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgbWFwID0gY29udmVydGVyTWFwKHRoaXMuaW5zdHJ1bWVudHMsIHRydWUpO1xuICAgICAgICBsZXQgcGF0dGVybiA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5zZXF1ZW5jZUxlbmd0aCp0aGlzLmluc3RydW1lbnRzKTtcbiAgICAgICAgbGV0IGluZGV4QXJyYXkgPSBBcnJheS5mcm9tKGluZGljZXMpO1xuICAgICAgICBpbmRleEFycmF5LmZvckVhY2goKGlkeDogbnVtYmVyLCBzdGVwOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBwID0gQXJyYXkuZnJvbShtYXBbaWR4XSk7XG4gICAgICAgICAgICBwLmZvckVhY2goKHZhbHVlOiBudW1iZXIsIGluc3RydW1lbnQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsb2MgPSBzdGVwKnRoaXMuaW5zdHJ1bWVudHMgKyBpbnN0cnVtZW50O1xuICAgICAgICAgICAgICAgIHBhdHRlcm5bbG9jXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuICAgIF90b19pbmRpY2VzKGJ1ZmZlcjogRmxvYXQzMkFycmF5KTogRmxvYXQzMkFycmF5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlcnQgZnJvbSBidWZmZXIgdG8gaW5kZXggYXJyYXlcbiAgICAgICAgICovXG4gICAgICAgIGxldCBtYXAgPSBjb252ZXJ0ZXJNYXAodGhpcy5pbnN0cnVtZW50cywgZmFsc2UpO1xuICAgICAgICBsZXQgaW5kaWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5zZXF1ZW5jZUxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZXF1ZW5jZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3RhcnRJbmRleCA9IGkqdGhpcy5pbnN0cnVtZW50cztcbiAgICAgICAgICAgIGxldCB0bXAgPSBidWZmZXIuc2xpY2Uoc3RhcnRJbmRleCwgc3RhcnRJbmRleCArIHRoaXMuaW5zdHJ1bWVudHMpO1xuICAgICAgICAgICAgbGV0IGlkeCA9IG1hcFt0bXAudG9TdHJpbmcoKV1cbiAgICAgICAgICAgIGluZGljZXNbaV0gPSBpZHg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGljZXM7XG4gICAgfVxuICAgIF90cmFuc3Bvc2UoYnVmZmVyOiBGbG9hdDMyQXJyYXksIGludmVyc2U9ZmFsc2UpOiBGbG9hdDMyQXJyYXkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJhbnNwb3NlIGVsZW1lbnRzIGluIG1hdHJpeCBiZXR3ZWVuIFt0aGlzLnNlcXVlbmNlTGVuZ3RoLCB0aGlzLmluc3RydW1lbnRzXVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGJ1ZmZlclRyYW5zcG9zZWQgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlci5sZW5ndGgpXG4gICAgICAgIEFycmF5LmZyb20oYnVmZmVyKS5mb3JFYWNoKCh2YWx1ZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW52ZXJzZSkge1xuICAgICAgICAgICAgICAgIGxldCByZW0gPSBNYXRoLmZsb29yKGlkeCAvIHRoaXMuc2VxdWVuY2VMZW5ndGgpXG4gICAgICAgICAgICAgICAgbGV0IGlkeFQgPSAoKGlkeCV0aGlzLnNlcXVlbmNlTGVuZ3RoKSp0aGlzLmluc3RydW1lbnRzKSArIHJlbVxuICAgICAgICAgICAgICAgIGJ1ZmZlclRyYW5zcG9zZWRbaWR4VF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlbSA9IE1hdGguZmxvb3IoaWR4IC8gdGhpcy5pbnN0cnVtZW50cylcbiAgICAgICAgICAgICAgICBsZXQgaWR4VCA9ICgoaWR4JXRoaXMuaW5zdHJ1bWVudHMpKnRoaXMuc2VxdWVuY2VMZW5ndGgpICsgcmVtXG4gICAgICAgICAgICAgICAgYnVmZmVyVHJhbnNwb3NlZFtpZHhUXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBidWZmZXJUcmFuc3Bvc2VkO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udmVydGVyVGVuc29yO1xuXG4vKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PVxuICogVXRpbGl0eSBmdW5jdGlvbnNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5mdW5jdGlvbiBjb252ZXJ0ZXJNYXAobjogbnVtYmVyLCBpbnZlcnNlOiBib29sZWFuKTogb2JqZWN0IHtcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBhbGwgYmluYXJ5IHBlcm11dGF0aW9ucyBvZiBwYXR0ZXJuIGxlbmd0aCBuXG4gICAgICogXG4gICAgICogICAgICBuID0gMiAtPiBbJzAwJywgJzAxJywgJzEwJywgJzExJ11cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IG4gcGF0dGVybiBsZW5ndGhcbiAgICAgKi9cbiAgICBjb25zdCBwYXR0ZXJucyA9IHt9XG5cbiAgICBsZXQgdm9jYWJfc2l6ZSA9IE1hdGgucG93KDIsIG4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdm9jYWJfc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHMgPSBiaW4oaSlcbiAgICAgICAgbGV0IG91dCA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgKG4gLSBzLmxlbmd0aCk7IGorKykge1xuICAgICAgICAgICAgb3V0ICs9IFwiMFwiO1xuICAgICAgICB9XG4gICAgICAgIG91dCArPSBzO1xuICAgICAgICBsZXQgdGVuc29yID0gc3RyaW5nX3RvX3RlbnNvcihvdXQpO1xuICAgICAgICBpZiAoaW52ZXJzZSkge1xuICAgICAgICAgICAgcGF0dGVybnNbaV0gPSB0ZW5zb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXR0ZXJuc1t0ZW5zb3IudG9TdHJpbmcoKV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXR0ZXJucztcbn1cbmV4cG9ydCB7IGNvbnZlcnRlck1hcCB9O1xuXG5mdW5jdGlvbiBiaW4objogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGRlY2ltYWwgdG8gYmluYXJ5XG4gICAgICovXG4gICAgaWYgKG4gPCAwKSB7XG4gICAgICAgIG4gPSAweEZGRkZGRkZGICsgbiArIDE7XG4gICAgfSBcbiAgICByZXR1cm4gcGFyc2VJbnQobi50b1N0cmluZygpLCAxMCkudG9TdHJpbmcoMik7XG59ICBcblxuZnVuY3Rpb24gc3RyaW5nX3RvX3RlbnNvcihzOiBzdHJpbmcpIHtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IHN0cmluZyB0byBBcnJheVxuICAgICAqL1xuICAgIGxldCB0ZW5zb3IgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGVuc29yLnB1c2gocGFyc2VGbG9hdChzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiB0ZW5zb3I7XG59IiwiaW1wb3J0IExhdGVudFNwYWNlIGZyb20gJy4vZ2VuZXJhdGUvbWFpbic7XG5pbXBvcnQgQ29udmVydGVyVGVuc29yIGZyb20gJy4vZ2VuZXJhdGUvdGVuc29yJztcbmltcG9ydCBPTk5YTW9kZWwgZnJvbSAnLi9nZW5lcmF0ZS9tb2RlbCc7XG5cbmV4cG9ydCB7IExhdGVudFNwYWNlLCBDb252ZXJ0ZXJUZW5zb3IsIE9OTlhNb2RlbCB9OyJdLCJzb3VyY2VSb290IjoiIn0=