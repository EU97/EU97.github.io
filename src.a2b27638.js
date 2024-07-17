// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/DOMArray/dist/index.js":[function(require,module,exports) {
var define;
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = D;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _extendableBuiltin(cls) {
	  function ExtendableBuiltin() {
	    var instance = Reflect.construct(cls, Array.from(arguments));
	    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
	    return instance;
	  }
	
	  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
	    constructor: {
	      value: cls,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	
	  if (Object.setPrototypeOf) {
	    Object.setPrototypeOf(ExtendableBuiltin, cls);
	  } else {
	    ExtendableBuiltin.__proto__ = cls;
	  }
	
	  return ExtendableBuiltin;
	}
	
	/**
	 * simplest regex for identifying a tag string versus a selector string
	 * @type {RegExp}
	 */
	var tagRegex = new RegExp('\s*<([^>]+)>');
	
	/**
	 * getters and setters are created for these properties. The class does not attempt to distinguish between
	 * Node, Element, HTMLElement etc so these properties may or may not exist on any particular member of our list.
	 * Read only properties are prefixed with 'r+'.
	 * For DOMArray's with exactly one item, the getter returns the value returned by the native property.
	 * For DOMArray's containing more than one item an array of results is returned.
	 * Empty DOMArray's return null
	 * @type {string[]}
	 */
	var properties = [
	// Node, properties
	'r+childNodes', 'r+firstChild', 'r+lastChild', 'r+nextSibling', 'r+previousSibling', 'r+nodeName', 'r+nodeType', 'nodeValue', 'r+ownerDocument', 'r+parentElement', 'r+parentNode', 'textContent', 'r+tagName',
	// Element properties
	'r+attributes', 'r+childElementCount', 'r+children', 'r+firstElementChild', 'r+lastElementChild', 'r+classList', 'className', 'r+clientTop', 'r+clientLeft', 'r+clientWidth', 'r+clientHeight', 'id', 'innerHTML', 'outerHTML', 'innerText', 'outerText', 'r+localName', 'r+scrollWidth', 'r+scrollHeight', 'scrollTop', 'scrollLeft', 'name', 'title', 'value', 'checked', 'style', 'disabled'];
	
	/**
	 * methods for native Node/Element/HTMLElement objects that we create pass through functions for.
	 * Rules are the same as for getter properties i.e. an array is returned for lists with items > 1
	 * @type {Array}
	 */
	var methods = ['appendChild', 'removeChild', 'replaceChild', 'click', 'cloneNode', 'compareDocumentPosition', 'contains', 'hasChildNodes', 'insertBefore', 'getBoundingClientRect', 'getAttribute', 'getAttributeNS', 'setAttribute', 'setAttributeNS', 'removeAttribute', 'removeAttributeNS', 'addEventListener', 'removeEventListener', 'normalize', 'focus', 'blur', 'querySelector', 'querySelectorAll'];
	
	/**
	 * the actual elements class which inherits from native Array
	 */
	
	var DOMArray = function (_extendableBuiltin2) {
	  _inherits(DOMArray, _extendableBuiltin2);
	
	  function DOMArray() {
	    _classCallCheck(this, DOMArray);
	
	    // test first argument to see if its a string
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DOMArray).call(this));
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var isString = typeof args[0] === 'string';
	    // if its a string see if it a tag definition
	    var isTag = isString && tagRegex.exec(args[0].trim());
	
	    // first argument is a string but not a tag definition so we assume CSS selector
	    if ((args.length === 1 || args.length == 2) && isString && !isTag) {
	      _this.createFromCSSSelector(args[0], args[1]);
	    } else {
	      // second option is that args if just a string e.g. '<div class="xyz"><p>Title</p></div>'
	      // (white space is trimmed to determine if this might be a tag)
	      if (args.length === 1 && isTag) {
	        _this.createFromTAGDefinition(args[0]);
	      } else {
	        // must be raw elements or other DOMArray instances
	        _this.createFromElements.apply(_this, args);
	      }
	    }
	    // inject native property names and function names to the list
	    _this.injectMethodsAndProperties();
	    return _this;
	  }
	
	  /**
	   * bind the read/write properties common to most HTMLElements and Node instances to this object
	   */
	
	
	  _createClass(DOMArray, [{
	    key: 'injectMethodsAndProperties',
	    value: function injectMethodsAndProperties() {
	      var _this2 = this;
	
	      // setup read/write properties
	      properties.forEach(function (p) {
	        // property can be a name or 'r+' name for read only properties
	        var tokens = p.split('+');
	        var readOnly = tokens.length === 2 && tokens[0] === 'r';
	        var name = readOnly ? tokens[1] : tokens[0];
	        // create getter and optional setter
	        var newProperty = Object.assign({
	          get: _this2.genericGetter.bind(_this2, name)
	        }, readOnly ? {} : {
	          set: _this2.genericSetter.bind(_this2, name)
	        });
	        Object.defineProperty(_this2, name, newProperty);
	      });
	
	      // setup methods
	      methods.forEach(function (name) {
	        _this2[name] = _this2.genericMethod.bind(_this2, name);
	      });
	    }
	
	    /**
	     * create our elements list from a CSS selector and option root element ( either
	     * a native HTMLElement/Node or another DOMArray )
	     * @param selector
	     * @param rootElement
	     */
	
	  }, {
	    key: 'createFromCSSSelector',
	    value: function createFromCSSSelector(selector, rootElement) {
	      // use the given root element or the document
	      var root = rootElement ? this.getNode(rootElement) : document;
	      // return a proxy using the results of the selector as the initial array
	      this.push.apply(this, _toConsumableArray(root.querySelectorAll(selector)));
	    }
	
	    /**
	     * create the list from a template string e.g. '<div>A DIV<div><span>A Span</span>'
	     * @param template
	     */
	
	  }, {
	    key: 'createFromTAGDefinition',
	    value: function createFromTAGDefinition(template) {
	      // use a temporary DIV and insertAdjacentHTML to construct the DOM
	      var d = document.createElement('DIV');
	      d.insertAdjacentHTML('afterbegin', template);
	      // normalize the context to remove extraneous white space / text content nodes
	      d.normalize();
	      // add children directly into our list ( we avoid childNodes because that would pick
	      // up empty text nodes which is a problem when using multiline template strings
	      this.push.apply(this, _toConsumableArray(this.getChildren(d)));
	      // remove all the children of the temporary div, so that the newly created top level nodes will be unparented
	      while (d.firstChild) {
	        d.removeChild(d.firstChild);
	      }
	    }
	
	    /**
	     * create from a mixed list of elements or other DOMArray instances.
	     * @param args
	     */
	
	  }, {
	    key: 'createFromElements',
	    value: function createFromElements() {
	      var _this3 = this;
	
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      // only remaining option is that each argument is a DOM node or possible another elements list
	      args.forEach(function (arg) {
	        if (arg instanceof DOMArray) {
	          _this3.push.apply(_this3, _toConsumableArray(arg));
	        } else {
	          _this3.push(arg);
	        }
	      });
	    }
	
	    /**
	     * all generic methods redirect here
	     * @param name
	     * @param args
	     */
	
	  }, {
	    key: 'genericMethod',
	    value: function genericMethod(name) {
	      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	        args[_key3 - 1] = arguments[_key3];
	      }
	
	      if (this.length === 0) {
	        return undefined;
	      }
	      if (this.length === 1) {
	        var _el$name;
	
	        return (_el$name = this.el[name]).call.apply(_el$name, [this.el].concat(args));
	      }
	      return this.map(function (node) {
	        var _node$name;
	
	        return (_node$name = node[name]).call.apply(_node$name, [node].concat(args));
	      });
	    }
	
	    /**
	     * generic getter
	     * @param name - the property to return.
	     */
	
	  }, {
	    key: 'genericGetter',
	    value: function genericGetter(name) {
	      if (this.length === 0) {
	        return undefined;
	      }
	      if (this.length === 1) {
	        return this.el[name];
	      }
	      return this.map(function (node) {
	        return node[name];
	      });
	    }
	
	    /**
	     * generic setter
	     * @param name
	     * @param value
	     */
	
	  }, {
	    key: 'genericSetter',
	    value: function genericSetter(name, value) {
	      this.forEach(function (n) {
	        return n[name] = value;
	      });
	    }
	
	    /**
	     * apply the key/value pairs in hash to all our elements
	     */
	
	  }, {
	    key: 'setStyles',
	    value: function setStyles(hash) {
	      this.forEach(function (element) {
	        if (element.nodeType === Node.ELEMENT_NODE) {
	          Object.keys(hash).forEach(function (key) {
	            element.style[key] = hash[key];
	          });
	        }
	      });
	      return this;
	    }
	
	    /**
	     * if the obj is a DOMArray then return the first member otherwise assume
	     * the object is a node and return it.
	     */
	
	  }, {
	    key: 'getNode',
	    value: function getNode(obj) {
	      if (obj instanceof DOMArray) return obj[0];
	      return obj;
	    }
	
	    /**
	     * return the native el of the first element in the list
	     */
	
	  }, {
	    key: 'empty',
	
	
	    /**
	     * remove all elements from the elements in our list
	     */
	    value: function empty() {
	      this.forEach(function (element) {
	        while (element.firstChild) {
	          element.removeChild(element.firstChild);
	        }
	      });
	      return this;
	    }
	
	    /**
	     * appendTo parents all the top level elements in the list to
	     * the given element. Which can be a native element or a DOMArray ( in which case
	     * the elements are append to the first element in the list )
	     */
	
	  }, {
	    key: 'appendTo',
	    value: function appendTo(parent) {
	      var _this4 = this;
	
	      this.forEach(function (node) {
	        _this4.getNode(parent).appendChild(node);
	      });
	      return this;
	    }
	
	    /**
	     * remove all our nodes from their parents
	     */
	
	  }, {
	    key: 'remove',
	    value: function remove() {
	      this.forEach(function (node) {
	        if (node.parentNode) {
	          node.parentNode.removeChild(node);
	        }
	      });
	      return this;
	    }
	
	    /**
	     * iterate every node and all their children looking for data-ref="name" attributes.
	     * Assign targetObject[name] to the matching DOM element.
	     * At the same time look for data-event-* attributes and add event listeners.
	     * e.g. data-event-input="onInput" will call
	     * element.addEventListener('input', targetObject["onInput"].bind(targetObject))
	     * NOTE: The event handlers are just named methods so .bind is called on the method
	     * to ensure 'this' is correct.
	     */
	
	  }, {
	    key: 'zip',
	    value: function zip(targetObject) {
	      var _this5 = this;
	
	      // zipping/unzipping should occur serially and once
	      if (this.zipped) {
	        throw new Error('DOMArray has already been zipped');
	      }
	      this.zipped = true;
	
	      // we could use a CSS selector to find the 'r' attributes but for
	      // event attribute (e-???) there is no available selector so
	      // we walk the tree of elements using a stack.
	      this.traverse(function (element) {
	        // adopt references
	        var name = element.getAttribute('r');
	        if (name) {
	          if (targetObject[name]) {
	            throw new Error('Element binding would overwrite an existing property.');
	          }
	          targetObject[name] = new DOMArray(element);
	        }
	        // add event handlers...we expect something like e-click="onClick"
	        [].concat(_toConsumableArray(element.attributes)).forEach(function (attr) {
	          var tokens = attr.localName.split('-');
	          if (tokens.length === 2 && tokens[0] === 'e' && tokens[1]) {
	            // create a record of each handler added so we can remove when unzip is called
	            var record = {
	              handler: targetObject[attr.value].bind(targetObject),
	              event: tokens[1],
	              capture: false,
	              element: element
	            };
	            _this5.zipHandlers = _this5.zipHandlers || [];
	            _this5.zipHandlers.push(record);
	
	            element.addEventListener(record.event, record.handler, record.capture);
	          }
	        });
	      });
	      return this;
	    }
	
	    /**
	     * reverse the actions of zip. Remove references and remove event listeners
	     */
	
	  }, {
	    key: 'unzip',
	    value: function unzip(targetObject) {
	      var _this6 = this;
	
	      if (!this.zipped) {
	        throw new Error('DOMArray instance is not zipped');
	      }
	      this.traverse(function (element) {
	        // remove references
	        var name = element.getAttribute('r');
	        if (name) {
	          delete targetObject[name];
	        }
	        // remove event handlers
	        if (_this6.zipHandlers) {
	          _this6.zipHandlers.forEach(function (record) {
	            record.element.removeEventListener(record.event, record.handler, record.capture);
	          });
	          _this6.zipHandlers = null;
	        }
	      });
	      this.zipped = false;
	      return this;
	    }
	
	    /**
	     * utility function. Used in zip, unzip for example. Traverses all nodes and their
	     * children in the list invoking the callback for each one
	     */
	
	  }, {
	    key: 'traverse',
	    value: function traverse(callback) {
	      var _this7 = this;
	
	      this.forEach(function (node) {
	        var stack = [node];
	        while (stack.length) {
	          var _stack;
	
	          var element = stack.pop();
	          callback.call(_this7, element);
	          stack = (_stack = stack).concat.apply(_stack, _toConsumableArray(_this7.getChildren(element)));
	        }
	      });
	      return this;
	    }
	
	    /**
	     * get only the element children of a node, allowing for the possibility the .children doesn't exist ( e.g. SVG tag )
	     * and filter the child nodes.
	     * @param n
	     * @returns Array
	     */
	
	  }, {
	    key: 'getChildren',
	    value: function getChildren(element) {
	      if (element.children) {
	        return Array.from(element.children);
	      } else {
	        // filter childNodes to only elements
	        if (element.childNodes) {
	          return Array.from(element.childNodes).filter(function (n) {
	            return n.nodeType === document.ELEMENT_NODE;
	          });
	        }
	      }
	      return [];
	    }
	
	    /**
	     * add white space separated classes to our elements classList
	     */
	
	  }, {
	    key: 'addClasses',
	    value: function addClasses(classes) {
	      var _this8 = this;
	
	      classes.split(' ').filter(function (className) {
	        return className.trim().length;
	      }).forEach(function (className) {
	        _this8.forEach(function (element) {
	          element.classList.add(className);
	        });
	      });
	      return this;
	    }
	
	    /**
	     * remove white space separated class names from the classList of each node
	     * @param classes
	     * @returns {DOMArray}
	     */
	
	  }, {
	    key: 'removeClasses',
	    value: function removeClasses(classes) {
	      var _this9 = this;
	
	      classes.split(' ').filter(function (className) {
	        return className.trim().length;
	      }).forEach(function (className) {
	        _this9.forEach(function (element) {
	          element.classList.remove(className);
	        });
	      });
	      return this;
	    }
	
	    /**
	     * a common usage and worthy of a method. Add the given classes
	     * to our items if the condition is truthy, otherwise remove them
	     * @param classes
	     * @param condition
	     */
	
	  }, {
	    key: 'classesConditional',
	    value: function classesConditional(classes, condition) {
	      if (condition) {
	        this.addClasses(classes);
	      } else {
	        this.removeClasses(classes);
	      }
	      return this;
	    }
	
	    /**
	     * return a new DOMArray contain a deep cloned copy
	     * each node
	     */
	
	  }, {
	    key: 'clone',
	    value: function clone() {
	      var clones = this.map(function (n) {
	        return n.cloneNode(true);
	      });
	      return new (Function.prototype.bind.apply(DOMArray, [null].concat(_toConsumableArray(clones))))();
	    }
	
	    /**
	     * called addEventListener for each element in the list,
	     * @param event
	     * @param handler
	     */
	
	  }, {
	    key: 'on',
	    value: function on(event, handler) {
	      var capture = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	      // listeners group by event name is an object ( since event is a string ) but the
	      // handlers for each event are stored in a map which can take a function as a key.
	      this.listeners = this.listeners || {};
	      this.listeners[event] = this.listeners[event] || [];
	      this.listeners[event].push({ handler: handler, capture: capture });
	      this.forEach(function (n) {
	        return n.addEventListener(event, handler, capture);
	      });
	      return this;
	    }
	
	    /**
	     * remove the handlers from the list. Three ways to call.
	     * ()                   : remove all registered listeners
	     * (eventName)          : remove all listeners for that event.
	     * (eventName, handler) : remove the specific handler for a specific event.
	     */
	
	  }, {
	    key: 'off',
	    value: function off(event, handler) {
	      var _this10 = this;
	
	      var capture = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	      // ignore if we don't have any listeners
	      if (!this.listeners) {
	        return this;
	      }
	      // if no event or handler then remove all registered events
	      if (!event && !handler) {
	        // iterate all events
	        Object.keys(this.listeners).forEach(function (eventName) {
	          _this10.listeners[eventName].forEach(function (record) {
	            _this10.forEach(function (n) {
	              return n.removeEventListener(eventName, record.handler, record.capture);
	            });
	          });
	        });
	        // reset all listeners
	        delete this.listeners;
	      } else {
	        // if only event name specified remove all listeners for that event
	        if (event && !handler) {
	          if (this.listeners[event]) {
	            this.listeners[event].forEach(function (record) {
	              _this10.forEach(function (n) {
	                return n.removeEventListener(event, record.handler, record.capture);
	              });
	            });
	          }
	          // delete listeners for this specific event
	          delete this.listeners[event];
	        } else {
	          // remove the specific listener if it is present, by finding the record with the handler
	          // ( the capture flag must match as well )
	          if (this.listeners[event]) {
	            var index = this.listeners[event].findIndex(function (record) {
	              return record.handler === handler && record.capture === capture;
	            });
	            if (index >= 0) {
	              (function () {
	                var record = _this10.listeners[event][index];
	                _this10.forEach(function (n) {
	                  return n.removeEventListener(event, record.handler, record.capture);
	                });
	                _this10.listeners[event].splice(index, 1);
	              })();
	            }
	          }
	        }
	      }
	      return this;
	    }
	  }, {
	    key: 'el',
	    get: function get() {
	      return this[0];
	    }
	  }]);
	
	  return DOMArray;
	}(_extendableBuiltin(Array));
	
	/**
	 * We export a factory function for DOMArray so there is no need to the new operator
	 */
	
	
	function D() {
	  return new (Function.prototype.bind.apply(DOMArray, [null].concat(Array.prototype.slice.call(arguments))))();
	};

/***/ }
/******/ ])
});
;

},{}],"src/disposable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * base class for a lot of types in the app. Provides for callbacks to be invoked when
 * its dispose() method is called. Also provides event emitter capabilities
 */
var Disposable = exports.default = /*#__PURE__*/function () {
  /**
   * the purpose of this class is simply to provide a way to add
   * various functions to be called when the dispose method is
   * called. This allows classes to create methods ( usually lambdas )
   * juxtaposed to where an object that needs disposing is declared.
   */
  function Disposable() {
    _classCallCheck(this, Disposable);
    this.disposeFunctions = [];
    this.listeners = [];
  }

  /**
   * add a function to call when we are disposed
   * NOTE: if you want to later remove a dispose function do NOT use a lambda.
   * @param func
   */
  return _createClass(Disposable, [{
    key: "addDisposable",
    value: function addDisposable(func) {
      console.assert(func && typeof func === "function", "expected a callback");
      console.assert(this.disposeFunctions.indexOf(func) < 0, "listener already registered");
      this.disposeFunctions.push(func);
    }

    /**
     * remove a function that was previously added.
     * @param func
     */
  }, {
    key: "removeDisposable",
    value: function removeDisposable(func) {
      console.assert(func && typeof func === "function", "expected a callback");
      console.assert(this.disposeFunctions.indexOf(func) >= 0, "listener is not registered");
      this.disposeFunctions = this.disposeFunctions.filter(function (f) {
        return f !== func;
      });
    }

    /**
     * call all our dispose methods
     */
  }, {
    key: "dispose",
    value: function dispose() {
      console.assert(!this.disposed, "already disposed");
      this.disposed = true;
      this.disposeFunctions.forEach(function (f) {
        return f();
      });
      this.disposeFunctions.length = 0;
    }

    /**
     * add a change listener any changes to the airplane configuration
     * @param func
     */
  }, {
    key: "addListener",
    value: function addListener(func) {
      console.assert(func && typeof func === "function", "expected a callback");
      console.assert(this.listeners.indexOf(func) < 0, "listener already registered");
      this.listeners.push(func);
    }

    /**
     * remove an existing change listener
     * @param func
     */
  }, {
    key: "removeListener",
    value: function removeListener(func) {
      console.assert(func && typeof func === "function", "expected a callback");
      console.assert(this.listeners.indexOf(func) >= 0, "listener is not registered");
      this.listeners = this.listeners.filter(function (f) {
        return f !== func;
      });
    }

    /**
     * remove all listeners
     */
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      this.listeners.length = 0;
    }

    /**
     * send a change notification to all listeners
     */
  }, {
    key: "callListeners",
    value: function callListeners() {
      var _this = this;
      this.listeners.forEach(function (l) {
        return l(_this);
      });
    }
  }]);
}();
},{}],"src/animated.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _disposable = _interopRequireDefault(require("./disposable"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * base class for things that use lerps and intervals to animate their internal state
 */
var Animated = exports.default = /*#__PURE__*/function (_Disposable) {
  /**
   * initialize lerp hash
   */
  function Animated() {
    var _this;
    _classCallCheck(this, Animated);
    _this = _callSuper(this, Animated);
    _this.lerps = {};
    _this.addDisposable(function () {
      return _this.cancelAllLerps();
    });
    return _this;
  }

  /**
   * add a lerp/interval that can be cancelled with cancelLerp
   * @param key
   * @param callback
   */
  _inherits(Animated, _Disposable);
  return _createClass(Animated, [{
    key: "addLerp",
    value: function addLerp(key, callback) {
      this.cancelLerp(key);
      this.lerps[key] = callback;
    }

    /**
     * cancel any existing lerp /interval that was registered with addLerp
     */
  }, {
    key: "cancelLerp",
    value: function cancelLerp(key) {
      if (this.lerps[key]) {
        this.lerps[key]();
        delete this.lerps[key];
      }
    }

    /**
     * cancel all lerps
     */
  }, {
    key: "cancelAllLerps",
    value: function cancelAllLerps() {
      Object.values(this.lerps).forEach(function (f) {
        return f();
      });
      this.lerps = {};
    }
  }]);
}(_disposable.default);
},{"./disposable":"src/disposable.js"}],"src/instrument.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _animated = _interopRequireDefault(require("./animated"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * base class for all analog / digital instruments
 */
var Instrument = exports.default = /*#__PURE__*/function (_Animated) {
  /**
   * requires at the very least width, height and an airplane
   * @param config
   */
  function Instrument(config) {
    var _this;
    _classCallCheck(this, Instrument);
    _this = _callSuper(this, Instrument);
    Object.assign(_this, {
      width: 0,
      height: 0,
      airplane: null,
      listener: []
    }, config);
    console.assert(_this.width && _this.height && _this.airplane, "missing or invalid configuration options");
    return _this;
  }
  _inherits(Instrument, _Animated);
  return _createClass(Instrument, [{
    key: "demoStart",
    value: function demoStart() {
      console.assert(false, "Must override in descendant class");
    }
  }, {
    key: "demoStop",
    value: function demoStop() {
      console.assert(false, "Must override in descendant class");
    }
  }]);
}(_animated.default);
},{"./animated":"src/animated.js"}],"src/geometry/vector2d.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Vector2D = exports.default = /*#__PURE__*/function () {
  function Vector2D() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    _classCallCheck(this, Vector2D);
    this.x = x;
    this.y = y;
  }
  return _createClass(Vector2D, [{
    key: "clone",
    value: function clone() {
      return new Vector2D(this.x, this.y);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "x:".concat(this.x, " y:").concat(this.y);
    }
  }, {
    key: "sub",
    value: function sub(other) {
      return new Vector2D(this.x - other.x, this.y - other.y);
    }
  }, {
    key: "add",
    value: function add(other) {
      return new Vector2D(this.x + other.x, this.y + other.y);
    }
  }]);
}();
},{}],"src/geometry/angle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.angularDelta = exports.angleFrom = exports.R2D = exports.POC = exports.D2R = exports.D2C = exports.C2D = void 0;
var _vector2d = _interopRequireDefault(require("../geometry/vector2d"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * An angle in clock format ( 0 degrees is straight up ) to a regular angle
 * @param angle
 * @returns {number}
 */
var C2D = exports.C2D = function C2D(angle) {
  return (270 + angle) % 360;
};

/**
 * angle to clock angles ( 0 degrees returned as -90 )
 * @param angle
 * @returns {number}
 */
var D2C = exports.D2C = function D2C(angle) {
  return (angle - 90) % 360;
};

/**
 * degrees to radian
 * @param d
 * @returns {number}
 */
var D2R = exports.D2R = function D2R(d) {
  return d * (Math.PI / 180);
};

/**
 * radians to degrees
 * @param r
 * @returns {number}
 */
var R2D = exports.R2D = function R2D(r) {
  return r * (180 / Math.PI);
};

/**
 * point on the circumference of a circle
 * @param {Vector2D} center
 * @param {number} radius
 * @param {number } angle - degrees
 * @returns {Vector2D}
 */
var POC = exports.POC = function POC(center, radius, angle) {
  return new _vector2d.default(center.x + radius * Math.cos(D2R(angle)), center.y + radius * Math.sin(D2R(angle)));
};

/**
 * return the angle between the given center point and the given position
 * @param center
 * @param position
 */
var angleFrom = exports.angleFrom = function angleFrom(center, position) {
  var a = Math.atan2(position.y - center.y, position.x - center.x) * 180 / Math.PI;
  // this keeps the angle always positive, rather than switching to negatives for 180 - 360
  if (a < 0) {
    a = 180 + (180 + a);
  }
  return a;
};

/**
 * signed angular delta between two angles. Positive is clockwise.
 * @param start
 * @param end
 */
var angularDelta = exports.angularDelta = function angularDelta(firstAngle, secondAngle) {
  var difference = secondAngle - firstAngle;
  while (difference < -180) difference += 360;
  while (difference > 180) difference -= 360;
  return difference;
};
},{"../geometry/vector2d":"src/geometry/vector2d.js"}],"src/graphics/primitives.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triangle = exports.tick = exports.rectangle = exports.polygon = exports.line = exports.leftText = exports.circle = exports.centeredText = exports.arc = exports.airplaneSilhouette = exports.airplaneNoseView = void 0;
var _angle = require("../geometry/angle");
var _DOMArray = _interopRequireDefault(require("DOMArray"));
var _vector2d = _interopRequireDefault(require("../geometry/vector2d"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * create and return a SnapSVG circle object
 * @param snap
 * @param center
 * @param radius
 * @param stroke
 * @param strokeWidth
 * @param fill
 * @returns {*|SnapShape}
 */
var circle = exports.circle = function circle(snap, center, radius, stroke, strokeWidth) {
  var fill = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "none";
  return snap.circle(center.x, center.y, radius).attr({
    strokeWidth: strokeWidth,
    stroke: stroke,
    fill: fill
  });
};

/**
 * create and return a SnapSVG circle object
 * @param snap
 * @param x
 * @param y
 * @param w
 * @param h
 * @param stroke
 * @param strokeWidth
 * @param fill
 * @param rx
 * @param ry
 * @returns {*|SnapShape}
 */
var rectangle = exports.rectangle = function rectangle(snap, x, y, w, h, stroke, strokeWidth) {
  var fill = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "none";
  var rx = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
  var ry = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
  return snap.rect(x, y, w, h).attr({
    strokeWidth: strokeWidth,
    stroke: stroke,
    fill: fill,
    rx: rx,
    ry: ry
  });
};

/**
 * create and return a Snap text element centered on a given point
 * @param snap
 * @param {Vector2D} center,
 * @param string
 * @param fill
 * @param fontSize
 * @param fontFamily
 * @param fontWeight
 */
var centeredText = exports.centeredText = function centeredText(snap, center, string, fill) {
  var fontSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "21px";
  var fontFamily = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "Verdana";
  var fontWeight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "normal";
  return snap.text(center.x, center.y, string.toString()).attr({
    fill: fill,
    "text-anchor": "middle",
    "dominant-baseline": "central",
    "font-size": fontSize,
    "font-family": fontFamily,
    "font-weight": fontWeight
  });
};

/**
 * create and return a Snap text element centered on a given point
 * @param snap
 * @param {Vector2D} center,
 * @param string
 * @param fill
 * @param fontSize
 * @param fontFamily
 * @param fontWeight
 */
var leftText = exports.leftText = function leftText(snap, center, string, fill) {
  var fontSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "21px";
  var fontFamily = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "Verdana";
  var fontWeight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "normal";
  return snap.text(center.x, center.y, string).attr({
    fill: fill,
    "text-anchor": "left",
    "dominant-baseline": "central",
    "font-size": fontSize,
    "font-family": fontFamily,
    "font-weight": fontWeight
  });
};

/**
 * a line shape
 * @param snap
 * @param {Vector2D} p1
 * @param {Vector2D} p2
 * @param stroke
 * @param strokeWidth
 */
var line = exports.line = function line(snap, p1, p2, stroke, strokeWidth) {
  return snap.line(p1.x, p1.y, p2.x, p2.y).attr({
    strokeWidth: strokeWidth,
    stroke: stroke
  });
};

/**
 * draw stroke filled triangle defined by 3 points
 * @param snap
 * @param p1
 * @param p2
 * @param p3
 * @param stroke
 * @param strokeWidth
 * @param fill
 */
var triangle = exports.triangle = function triangle(snap, p1, p2, p3, stroke, strokeWidth, fill) {
  var d = "M ".concat(p1.x, " ").concat(p1.y, " L ").concat(p2.x, " ").concat(p2.y, " L ").concat(p3.x, " ").concat(p3.y, " Z");
  var path = snap.path(d);
  path.attr({
    fill: fill,
    stroke: stroke,
    "stroke-width": strokeWidth
  });
  return path;
};

/**
 * draw stroke filled polygon defined by n points ( where 3 <= n )
 * @param snap
 * @param p
 * @param stroke
 * @param strokeWidth
 * @param fill
 */
var polygon = exports.polygon = function polygon(snap, p, stroke, strokeWidth, fill) {
  var d = "M ".concat(p[0].x, " ").concat(p[0].y);
  for (var i = 1; i < p.length; i += 1) {
    d += " L ".concat(p[i].x, " ").concat(p[i].y);
  }
  d += " Z";
  var path = snap.path(d);
  path.attr({
    fill: fill,
    stroke: stroke,
    "stroke-width": strokeWidth
  });
  return path;
};

/**
 * draw a tick mark radiating from a center of a circle at a given starting
 * and ending radius e.g. denoting an airspeed on an airspeed indicator
 * @param snap
 * @param center
 * @param angle - degrees
 * @param outerRadius
 * @param innerRadius
 * @param thickness
 * @param color
 */
var tick = exports.tick = function tick(snap, center, angle, outerRadius, innerRadius, thickness, color) {
  var p1 = (0, _angle.POC)(center, outerRadius, angle);
  var p2 = (0, _angle.POC)(center, innerRadius, angle);
  return line(snap, p1, p2, color, thickness);
};

/**
 *
 * @param snap
 * @param {Vector2D} center
 * @param radius
 * @param thickness
 * @param strokeWidth
 * @param stroke
 * @param fill
 * @param startAngle
 * @param endAngle
 * @param clockWise
 */
var arc = exports.arc = function arc(snap, center, radius, thickness, strokeWidth, stroke, fill, startAngle, endAngle, clockWise) {
  // return 1 if large arc required for the given start/end angle
  // and the given direction of turn ( clockwise or counter )
  var largeArc = function largeArc(start, end, cw) {
    var delta = (0, _angle.R2D)(Math.atan2(Math.sin((0, _angle.D2R)(end - start)), Math.cos((0, _angle.D2R)(end - start))));
    if (cw) {
      return delta <= 180 && delta >= 0 ? 0 : 1;
    }
    return delta <= 180 && delta >= 0 ? 1 : 0;
  };
  var arcData = function arcData(a1, a2, r, cw) {
    var d = " A " + r + " " + r; // arc command and x/y radius of circle
    d += " 0"; // x axis rotation
    var large = largeArc(a1, a2, cw);
    d += " " + large; // large arc flag
    d += cw ? " 1" : " 0"; // sweep
    d += " " + (0, _angle.POC)(center, r, a2).x + " " + (0, _angle.POC)(center, r, a2).y; // end point
    return d;
  };

  // calculate inner and outer radius
  var r0 = radius + thickness / 2;
  var r1 = radius - thickness / 2;

  // move to start of arc on
  var d = "M " + (0, _angle.POC)(center, r0, startAngle).x + " " + (0, _angle.POC)(center, r0, startAngle).y;

  // add arc data, outer edge from tail to start of arrow
  d += " " + arcData(startAngle, endAngle, r0, clockWise);

  // to inside of arc
  d += " L " + (0, _angle.POC)(center, r1, endAngle).x + " " + (0, _angle.POC)(center, r1, endAngle).y;

  // arc back to tail, in opposite direction
  d += " " + arcData(endAngle, startAngle, r1, !clockWise);

  // close the path
  d += " Z";
  var path = snap.path(d);
  path.attr({
    fill: fill,
    stroke: stroke,
    "stroke-width": strokeWidth
  });
  return path;
};

/**
 * draw a simple cessna shape within a rectangle of given size. Used for example at the center of
 * the heading indicator / directional gyro
 * @param r
 * @param strokeWidth
 * @param stroke
 * @param fill
 */
var airplaneSilhouette = exports.airplaneSilhouette = function airplaneSilhouette(centerX, centerY, width, height, strokeWidth, stroke, fill) {
  var s = "\n  <svg \n      xmlns=\"http://www.w3.org/2000/svg\" \n      version=\"1.1\"  \n      x=\"".concat(centerX - width / 2, "\"\n      y=\"").concat(centerY - height / 2, "\"\n      width=\"").concat(width, "\" height=\"").concat(height, "\" \n      viewBox=\"0 0 432.243 432.243\"\n  >\n      <path \n          d=\"M396.132,225.557l-29.051-16.144v-13.14c0-8.836-7.164-16-16-16c-7.342,0-13.515,4.952-15.396,11.693l-24.446-13.585    v-12.108c0-8.836-7.164-16-16-16c-7.021,0-12.968,4.526-15.125,10.813l-21.689-12.053c-1.607-31.051-4.521-59.535-8.582-83.175    c-3.221-18.753-7.029-33.617-11.318-44.179C236.346,16.317,229.72,0,216.123,0c-13.598,0-20.224,16.317-22.402,21.679    c-4.289,10.562-8.097,25.426-11.318,44.179c-4.06,23.64-6.975,52.124-8.582,83.175l-21.69,12.053    c-2.157-6.287-8.106-10.813-15.124-10.813c-8.837,0-16,7.164-16,16v12.108l-24.448,13.585    c-1.882-6.742-8.055-11.693-15.396-11.693c-8.837,0-16,7.164-16,16v13.14L36.11,225.557c-3.174,1.766-5.143,5.11-5.143,8.741    v41.718c0,3.237,1.568,6.275,4.208,8.151s6.024,2.356,9.083,1.291l128.616-44.829c1.189,40.082,4.47,77.047,9.528,106.496    c0.917,5.342,1.884,10.357,2.895,15.059l-66.969,37.215c-1.725,0.958-2.794,2.774-2.794,4.749v22.661    c0,1.761,0.852,3.41,2.286,4.431c1.434,1.018,3.272,1.278,4.935,0.701l78.279-27.284c3.598,4.531,8.53,8.329,15.088,8.329    c6.558,0,11.49-3.798,15.087-8.329l78.279,27.284c0.584,0.201,1.188,0.303,1.788,0.303c1.113,0,2.216-0.342,3.146-1.004    c1.434-1.021,2.285-2.669,2.285-4.431v-22.662c0-1.974-1.068-3.791-2.793-4.748l-66.969-37.215c1.01-4.7,1.977-9.715,2.895-15.059    c5.059-29.447,8.339-66.414,9.527-106.496l128.617,44.829c1.071,0.374,2.184,0.558,3.29,0.558c2.05,0,4.078-0.631,5.791-1.849    c2.642-1.875,4.209-4.914,4.209-8.151v-41.718C401.275,230.667,399.308,227.321,396.132,225.557z\" \n          fill=\"").concat(fill, "\" stroke-width=\"").concat(strokeWidth, "\" stroke=\"").concat(stroke, "\"\n      />\n  </svg>");
  return new Snap((0, _DOMArray.default)(s).el);
};

/**
 * simple nose on view e.g. at the center of a heading indicator
 * @param centerX
 * @param centerY
 * @param width
 * @param fill
 */
var airplaneNoseView = exports.airplaneNoseView = function airplaneNoseView(snap, center, width, fill) {
  // prop radius and empennage size are derived from width
  var PR = width / 11;
  var EMT = width / 35;
  var EMS = width / 3;
  var WH = width / 25;

  // prop
  circle(snap, center, PR, 0, "transparent", fill);

  // wing
  var wing = rectangle(snap, center.x - width / 2, center.y - WH / 2, width, WH, "transparent", 0, fill, 3, 3);

  // vertical stabilizer
  var vs = rectangle(snap, center.x - EMT / 2, center.y - EMS + PR * 1.5, EMT, EMS / 2, "transparent", 0, fill, 3, 3);

  // horizontal stabilizer
  var hs = rectangle(snap, center.x - EMS / 2, center.y - PR, EMS, EMT, "transparent", 0, fill, 3, 3);
  return snap.g(wing, vs, hs);
};
},{"../geometry/angle":"src/geometry/angle.js","DOMArray":"node_modules/DOMArray/dist/index.js","../geometry/vector2d":"src/geometry/vector2d.js"}],"src/needles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.steppedNeedle = exports.daggerNeedle = exports.arrowNeedle = exports.altimeter10KNeedle = void 0;
/**
 * make a stepped needle. Base is the given width but it steps down to half
 * that width at the tip. See the analog airspeed indicator for an example
 * of positioning.
 */
var steppedNeedle = exports.steppedNeedle = function steppedNeedle(snap,
// snap/svg to use
radius,
// radius from pivot to tip
radiusShort,
// radius from pivot to short/blunt end of needle
radiusMid,
// radius where width changes
arrowHead,
// length of arrow heads
width // widest width of needle
) {
  var d = "M 0 0";
  d += " L ".concat(radiusShort, " 0");
  d += "L ".concat(radiusMid - arrowHead, " 0");
  d += "L ".concat(radiusMid, " ").concat(width * 0.4);
  d += "L ".concat(radius + radiusShort - arrowHead, " ").concat(width * 0.3);
  d += "L ".concat(radius + radiusShort + arrowHead, " ").concat(width / 2);
  d += "L ".concat(radius + radiusShort - arrowHead, " ").concat(width * 0.7);
  d += "L ".concat(radiusMid, " ").concat(width * 0.7);
  d += "L ".concat(radiusMid - arrowHead, " ").concat(width);
  d += " L ".concat(radiusShort, " ").concat(width);
  d += " L 0 ".concat(width, " Z");
  var needle = snap.path(d);
  needle.attr({
    fill: snap.gradient("l(0, 0.5, 1, 0.5)#222:30-#fff:31-#fff"),
    stroke: snap.gradient("l(0, 0.5, 1, 0.5)#444:30-#222:31-#222"),
    "stroke-width": 1
  });
  // return the needle shape and a closure for positioning and rotating it
  return {
    needle: needle,
    setCenterAndAngle: function setCenterAndAngle(cx, cy, angle) {
      needle.attr({
        transform: "t ".concat(cx - radiusShort, " ").concat(cy - width / 2, " r ").concat(angle, " ").concat(radiusShort, " ").concat(width / 2)
      });
    }
  };
};
/**
 * Like the stepped needle but with a triangle at the tip, used only for the
 * 10K needle on an altimeter
 */
var altimeter10KNeedle = exports.altimeter10KNeedle = function altimeter10KNeedle(snap,
// snap/svg to use
radius,
// radius from pivot to tip
radiusShort,
// radius from pivot to short/blunt end of needle
radiusMid,
// radius where width changes
arrowHead,
// length of arrow heads
triangleWidth // widest width of needle ( the triangle at the tip )
) {
  // width of needle at the short end
  var baseWidth = triangleWidth * 0.25;
  var narrowWidth = baseWidth / 2;
  var CY = triangleWidth / 2;
  var d = "M 0 ".concat(CY - baseWidth / 2);
  d += "L ".concat(radiusMid - arrowHead, " ").concat(CY - baseWidth / 2);
  d += "L ".concat(radiusMid, " ").concat(CY - narrowWidth / 2);
  d += "L ".concat(radius + radiusShort - arrowHead * 1.5, " ").concat(CY - narrowWidth / 2);
  d += "L ".concat(radius + radiusShort + arrowHead, " 0");
  d += "L ".concat(radius + radiusShort + arrowHead, " ").concat(triangleWidth);
  d += "L ".concat(radius + radiusShort - arrowHead * 1.5, " ").concat(CY + narrowWidth / 2);
  d += "L ".concat(radiusMid, " ").concat(CY + narrowWidth / 2);
  d += "L ".concat(radiusMid - arrowHead, " ").concat(CY + baseWidth / 2);
  d += "L 0 ".concat(CY + baseWidth / 2, " Z");
  var needle = snap.path(d);
  needle.attr({
    fill: snap.gradient("l(0, 0.5, 1, 0.5)#222:30-#fff:31-#fff"),
    stroke: snap.gradient("l(0, 0.5, 1, 0.5)#444:30-#222:31-#222"),
    "stroke-width": 1
  });
  // return the needle shape and a closure for positioning and rotating it
  return {
    needle: needle,
    setCenterAndAngle: function setCenterAndAngle(cx, cy, angle) {
      needle.attr({
        transform: "t ".concat(cx - radiusShort, " ").concat(cy - triangleWidth / 2, " r ").concat(angle, " ").concat(radiusShort, " ").concat(triangleWidth / 2)
      });
    }
  };
};

/**
 * Simple arrow head needle, see the hundreds needle on the altimeter for an example
 */
var arrowNeedle = exports.arrowNeedle = function arrowNeedle(snap,
// snap/svg to use
radius,
// radius from pivot to tip
radiusShort,
// radius from pivot to short/blunt end of needle
arrowHead,
// length of arrow heads
width // widest width of needle
) {
  var d = "M 0 0";
  d += " L ".concat(radiusShort, " 0");
  d += "L ".concat(radius + radiusShort - arrowHead, " 0");
  d += "L ".concat(radius + radiusShort + arrowHead, " ").concat(width / 2);
  d += "L ".concat(radius + radiusShort - arrowHead, " ").concat(width);
  d += " L ".concat(radiusShort, " ").concat(width);
  d += " L 0 ".concat(width, " Z");
  var needle = snap.path(d);
  needle.attr({
    fill: snap.gradient("l(0, 0.5, 1, 0.5)#222:30-#fff:31-#fff"),
    stroke: snap.gradient("l(0, 0.5, 1, 0.5)#444:30-#222:31-#222"),
    "stroke-width": 1
  });
  // return the needle shape and a closure for positioning and rotating it
  return {
    needle: needle,
    setCenterAndAngle: function setCenterAndAngle(cx, cy, angle) {
      needle.attr({
        transform: "t ".concat(cx - radiusShort, " ").concat(cy - width / 2, " r ").concat(angle, " ").concat(radiusShort, " ").concat(width / 2)
      });
    }
  };
};

/**
 * Dagger shaped needle e.g. the thousands needle of the altimeter
 */
var daggerNeedle = exports.daggerNeedle = function daggerNeedle(snap,
// snap/svg to use
radius,
// radius from pivot to tip
radiusShort,
// radius from pivot to short/blunt end of needle
arrowHead,
// length of arrow heads
width // widest width of needle
) {
  // parameter width of dagger at narrowest point
  var narrow = 0.35;
  var d = "M 0 0";
  d += " L ".concat(radiusShort, " ").concat(width * narrow);
  d += "L ".concat(radius + radiusShort - arrowHead, " 0");
  d += "L ".concat(radius + radiusShort + arrowHead, " ").concat(width / 2);
  d += "L ".concat(radius + radiusShort - arrowHead, " ").concat(width);
  d += " L ".concat(radiusShort, " ").concat(width - width * narrow);
  d += " L 0 ".concat(width, " Z");
  var needle = snap.path(d);
  needle.attr({
    fill: snap.gradient("l(0, 0.5, 1, 0.5)#222:40-#fff:41-#fff"),
    stroke: snap.gradient("l(0, 0.5, 1, 0.5)#444:40-#222:41-#222"),
    "stroke-width": 1
  });
  // return the needle shape and a closure for positioning and rotating it
  return {
    needle: needle,
    setCenterAndAngle: function setCenterAndAngle(cx, cy, angle) {
      needle.attr({
        transform: "t ".concat(cx - radiusShort, " ").concat(cy - width / 2, " r ").concat(angle, " ").concat(radiusShort, " ").concat(width / 2)
      });
    }
  };
};
},{}],"src/utils/time.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interval = void 0;
/**
 * start an interval callback at the given rate. Unlike the native window.setInterval
 * this will call on the leading edge of the interval. Returns a function that be used
 * to cancel the interval
 * @param milliseconds
 */
var interval = exports.interval = function interval(callback, milliseconds) {
  // setup system interval
  var timer = setInterval(callback, milliseconds);

  // make the initial callback soon but not before returning from this call.
  requestAnimationFrame(function () {
    // make sure we were not cancelled
    if (timer) {
      callback();
    }
  });

  // return cancel function
  return function () {
    clearInterval(timer);
    timer = 0;
  };
};
},{}],"node_modules/eve/eve.js":[function(require,module,exports) {
var define;
// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.5.4 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\

(function (glob) {
    var version = "0.5.4",
        has = "hasOwnProperty",
        separator = /[\.\/]/,
        comaseparator = /\s*,\s*/,
        wildcard = "*",
        numsort = function (a, b) {
            return a - b;
        },
        current_event,
        stop,
        events = {n: {}},
        firstDefined = function () {
            for (var i = 0, ii = this.length; i < ii; i++) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
        lastDefined = function () {
            var i = this.length;
            while (--i) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
        objtos = Object.prototype.toString,
        Str = String,
        isArray = Array.isArray || function (ar) {
            return ar instanceof Array || objtos.call(ar) == "[object Array]";
        },
    /*\
     * eve
     [ method ]

     * Fires event with given `name`, given scope and other parameters.

     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
     - scope (object) context for the event handlers
     - varargs (...) the rest of arguments will be sent to event handlers

     = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
    \*/
        eve = function (name, scope) {
            var oldstop = stop,
                args = Array.prototype.slice.call(arguments, 2),
                listeners = eve.listeners(name),
                z = 0,
                l,
                indexed = [],
                queue = {},
                out = [],
                ce = current_event;
            out.firstDefined = firstDefined;
            out.lastDefined = lastDefined;
            current_event = name;
            stop = 0;
            for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
                indexed.push(listeners[i].zIndex);
                if (listeners[i].zIndex < 0) {
                    queue[listeners[i].zIndex] = listeners[i];
                }
            }
            indexed.sort(numsort);
            while (indexed[z] < 0) {
                l = queue[indexed[z++]];
                out.push(l.apply(scope, args));
                if (stop) {
                    stop = oldstop;
                    return out;
                }
            }
            for (i = 0; i < ii; i++) {
                l = listeners[i];
                if ("zIndex" in l) {
                    if (l.zIndex == indexed[z]) {
                        out.push(l.apply(scope, args));
                        if (stop) {
                            break;
                        }
                        do {
                            z++;
                            l = queue[indexed[z]];
                            l && out.push(l.apply(scope, args));
                            if (stop) {
                                break;
                            }
                        } while (l)
                    } else {
                        queue[l.zIndex] = l;
                    }
                } else {
                    out.push(l.apply(scope, args));
                    if (stop) {
                        break;
                    }
                }
            }
            stop = oldstop;
            current_event = ce;
            return out;
        };
    // Undocumented. Debug only.
    eve._events = events;
    /*\
     * eve.listeners
     [ method ]

     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

     - name (string) name of the event, dot (`.`) or slash (`/`) separated

     = (array) array of event handlers
    \*/
    eve.listeners = function (name) {
        var names = isArray(name) ? name : name.split(separator),
            e = events,
            item,
            items,
            k,
            i,
            ii,
            j,
            jj,
            nes,
            es = [e],
            out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            nes = [];
            for (j = 0, jj = es.length; j < jj; j++) {
                e = es[j].n;
                items = [e[names[i]], e[wildcard]];
                k = 2;
                while (k--) {
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };
    /*\
     * eve.separator
     [ method ]

     * If for some reasons you don’t like default separators (`.` or `/`) you can specify yours
     * here. Be aware that if you pass a string longer than one character it will be treated as
     * a list of characters.

     - separator (string) new separator. Empty string resets to default: `.` or `/`.
    \*/
    eve.separator = function (sep) {
        if (sep) {
            sep = Str(sep).replace(/(?=[\.\^\]\[\-])/g, "\\");
            sep = "[" + sep + "]";
            separator = new RegExp(sep);
        } else {
            separator = /[\.\/]/;
        }
    };
    /*\
     * eve.on
     [ method ]
     **
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
     | eve.on("*.under.*", f);
     | eve("mouse.under.floor"); // triggers f
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     - name (array) if you don’t want to use separators, you can use array of strings
     - f (function) event handler function
     **
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment.
     > Example:
     | eve.on("mouse", eatIt)(2);
     | eve.on("mouse", scream);
     | eve.on("mouse", catchIt)(1);
     * This will ensure that `catchIt` function will be called before `eatIt`.
     *
     * If you want to put your handler before non-indexed handlers, specify a negative value.
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
    \*/
    eve.on = function (name, f) {
        if (typeof f != "function") {
            return function () {};
        }
        var names = isArray(name) ? isArray(name[0]) ? name : [name] : Str(name).split(comaseparator);
        for (var i = 0, ii = names.length; i < ii; i++) {
            (function (name) {
                var names = isArray(name) ? name : Str(name).split(separator),
                    e = events,
                    exist;
                for (var i = 0, ii = names.length; i < ii; i++) {
                    e = e.n;
                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {n: {}});
                }
                e.f = e.f || [];
                for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {
                    exist = true;
                    break;
                }
                !exist && e.f.push(f);
            }(names[i]));
        }
        return function (zIndex) {
            if (+zIndex == +zIndex) {
                f.zIndex = +zIndex;
            }
        };
    };
    /*\
     * eve.f
     [ method ]
     **
     * Returns function that will fire given event with optional arguments.
     * Arguments that will be passed to the result function will be also
     * concated to the list of final arguments.
     | el.onclick = eve.f("click", 1, 2);
     | eve.on("click", function (a, b, c) {
     |     console.log(a, b, c); // 1, 2, [event object]
     | });
     - event (string) event name
     - varargs (…) and any other arguments
     = (function) possible event handler function
    \*/
    eve.f = function (event) {
        var attrs = [].slice.call(arguments, 1);
        return function () {
            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
        };
    };
    /*\
     * eve.stop
     [ method ]
     **
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
    \*/
    eve.stop = function () {
        stop = 1;
    };
    /*\
     * eve.nt
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     - subname (string) #optional subname of the event
     **
     = (string) name of the event, if `subname` is not specified
     * or
     = (boolean) `true`, if current event’s name contains `subname`
    \*/
    eve.nt = function (subname) {
        var cur = isArray(current_event) ? current_event.join(".") : current_event;
        if (subname) {
            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(cur);
        }
        return cur;
    };
    /*\
     * eve.nts
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     **
     = (array) names of the event
    \*/
    eve.nts = function () {
        return isArray(current_event) ? current_event : current_event.split(separator);
    };
    /*\
     * eve.off
     [ method ]
     **
     * Removes given function from the list of event listeners assigned to given name.
     * If no arguments specified all the events will be cleared.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
    \*/
    /*\
     * eve.unbind
     [ method ]
     **
     * See @eve.off
    \*/
    eve.off = eve.unbind = function (name, f) {
        if (!name) {
            eve._events = events = {n: {}};
            return;
        }
        var names = isArray(name) ? isArray(name[0]) ? name : [name] : Str(name).split(comaseparator);
        if (names.length > 1) {
            for (var i = 0, ii = names.length; i < ii; i++) {
                eve.off(names[i], f);
            }
            return;
        }
        names = isArray(name) ? name : Str(name).split(separator);
        var e,
            key,
            splice,
            i, ii, j, jj,
            cur = [events],
            inodes = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            for (j = 0; j < cur.length; j += splice.length - 2) {
                splice = [j, 1];
                e = cur[j].n;
                if (names[i] != wildcard) {
                    if (e[names[i]]) {
                        splice.push(e[names[i]]);
                        inodes.unshift({
                            n: e,
                            name: names[i]
                        });
                    }
                } else {
                    for (key in e) if (e[has](key)) {
                        splice.push(e[key]);
                        inodes.unshift({
                            n: e,
                            name: key
                        });
                    }
                }
                cur.splice.apply(cur, splice);
            }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
            e = cur[i];
            while (e.n) {
                if (f) {
                    if (e.f) {
                        for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
                            e.f.splice(j, 1);
                            break;
                        }
                        !e.f.length && delete e.f;
                    }
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        var funcs = e.n[key].f;
                        for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
                            funcs.splice(j, 1);
                            break;
                        }
                        !funcs.length && delete e.n[key].f;
                    }
                } else {
                    delete e.f;
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        delete e.n[key].f;
                    }
                }
                e = e.n;
            }
        }
        // prune inner nodes in path
        prune: for (i = 0, ii = inodes.length; i < ii; i++) {
            e = inodes[i];
            for (key in e.n[e.name].f) {
                // not empty (has listeners)
                continue prune;
            }
            for (key in e.n[e.name].n) {
                // not empty (has children)
                continue prune;
            }
            // is empty
            delete e.n[e.name];
        }
    };
    /*\
     * eve.once
     [ method ]
     **
     * Binds given event handler with a given name to only run once then unbind itself.
     | eve.once("login", f);
     | eve("login"); // triggers f
     | eve("login"); // no listeners
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) same return function as @eve.on
    \*/
    eve.once = function (name, f) {
        var f2 = function () {
            eve.off(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    /*\
     * eve.version
     [ property (string) ]
     **
     * Current version of the library.
    \*/
    eve.version = version;
    eve.toString = function () {
        return "You are running Eve " + version;
    };
    glob.eve = eve;
    typeof module != "undefined" && module.exports ? module.exports = eve : typeof define === "function" && define.amd ? define("eve", [], function () { return eve; }) : glob.eve = eve;
})(typeof window != "undefined" ? window : this);

},{}],"node_modules/snapsvg-cjs/dist/snap.svg-cjs.js":[function(require,module,exports) {
var global = arguments[3];
window.eve = require('eve')

// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var mina = (function (eve) {
    var animations = {},
    requestAnimFrame = window.requestAnimationFrame       ||
                       window.webkitRequestAnimationFrame ||
                       window.mozRequestAnimationFrame    ||
                       window.oRequestAnimationFrame      ||
                       window.msRequestAnimationFrame     ||
                       function (callback) {
                           setTimeout(callback, 16, new Date().getTime());
                           return true;
                       },
    requestID,
    isArray = Array.isArray || function (a) {
        return a instanceof Array ||
            Object.prototype.toString.call(a) == "[object Array]";
    },
    idgen = 0,
    idprefix = "M" + (+new Date).toString(36),
    ID = function () {
        return idprefix + (idgen++).toString(36);
    },
    diff = function (a, b, A, B) {
        if (isArray(a)) {
            res = [];
            for (var i = 0, ii = a.length; i < ii; i++) {
                res[i] = diff(a[i], b, A[i], B);
            }
            return res;
        }
        var dif = (A - a) / (B - b);
        return function (bb) {
            return a + dif * (bb - b);
        };
    },
    timer = Date.now || function () {
        return +new Date;
    },
    sta = function (val) {
        var a = this;
        if (val == null) {
            return a.s;
        }
        var ds = a.s - val;
        a.b += a.dur * ds;
        a.B += a.dur * ds;
        a.s = val;
    },
    speed = function (val) {
        var a = this;
        if (val == null) {
            return a.spd;
        }
        a.spd = val;
    },
    duration = function (val) {
        var a = this;
        if (val == null) {
            return a.dur;
        }
        a.s = a.s * val / a.dur;
        a.dur = val;
    },
    stopit = function () {
        var a = this;
        delete animations[a.id];
        a.update();
        eve("mina.stop." + a.id, a);
    },
    pause = function () {
        var a = this;
        if (a.pdif) {
            return;
        }
        delete animations[a.id];
        a.update();
        a.pdif = a.get() - a.b;
    },
    resume = function () {
        var a = this;
        if (!a.pdif) {
            return;
        }
        a.b = a.get() - a.pdif;
        delete a.pdif;
        animations[a.id] = a;
        frame();
    },
    update = function () {
        var a = this,
            res;
        if (isArray(a.start)) {
            res = [];
            for (var j = 0, jj = a.start.length; j < jj; j++) {
                res[j] = +a.start[j] +
                    (a.end[j] - a.start[j]) * a.easing(a.s);
            }
        } else {
            res = +a.start + (a.end - a.start) * a.easing(a.s);
        }
        a.set(res);
    },
    frame = function (timeStamp) {
        // Manual invokation?
        if (!timeStamp) {
            // Frame loop stopped?
            if (!requestID) {
                // Start frame loop...
                requestID = requestAnimFrame(frame);
            }
            return;
        }
        var len = 0;
        for (var i in animations) if (animations.hasOwnProperty(i)) {
            var a = animations[i],
                b = a.get(),
                res;
            len++;
            a.s = (b - a.b) / (a.dur / a.spd);
            if (a.s >= 1) {
                delete animations[i];
                a.s = 1;
                len--;
                (function (a) {
                    setTimeout(function () {
                        eve("mina.finish." + a.id, a);
                    });
                }(a));
            }
            a.update();
        }
        requestID = len ? requestAnimFrame(frame) : false;
    },
    /*\
     * mina
     [ method ]
     **
     * Generic animation of numbers
     **
     - a (number) start _slave_ number
     - A (number) end _slave_ number
     - b (number) start _master_ number (start time in general case)
     - B (number) end _master_ number (end time in general case)
     - get (function) getter of _master_ number (see @mina.time)
     - set (function) setter of _slave_ number
     - easing (function) #optional easing function, default is @mina.linear
     = (object) animation descriptor
     o {
     o         id (string) animation id,
     o         start (number) start _slave_ number,
     o         end (number) end _slave_ number,
     o         b (number) start _master_ number,
     o         s (number) animation status (0..1),
     o         dur (number) animation duration,
     o         spd (number) animation speed,
     o         get (function) getter of _master_ number (see @mina.time),
     o         set (function) setter of _slave_ number,
     o         easing (function) easing function, default is @mina.linear,
     o         status (function) status getter/setter,
     o         speed (function) speed getter/setter,
     o         duration (function) duration getter/setter,
     o         stop (function) animation stopper
     o         pause (function) pauses the animation
     o         resume (function) resumes the animation
     o         update (function) calles setter with the right value of the animation
     o }
    \*/
    mina = function (a, A, b, B, get, set, easing) {
        var anim = {
            id: ID(),
            start: a,
            end: A,
            b: b,
            s: 0,
            dur: B - b,
            spd: 1,
            get: get,
            set: set,
            easing: easing || mina.linear,
            status: sta,
            speed: speed,
            duration: duration,
            stop: stopit,
            pause: pause,
            resume: resume,
            update: update
        };
        animations[anim.id] = anim;
        var len = 0, i;
        for (i in animations) if (animations.hasOwnProperty(i)) {
            len++;
            if (len == 2) {
                break;
            }
        }
        len == 1 && frame();
        return anim;
    };
    /*\
     * mina.time
     [ method ]
     **
     * Returns the current time. Equivalent to:
     | function () {
     |     return (new Date).getTime();
     | }
    \*/
    mina.time = timer;
    /*\
     * mina.getById
     [ method ]
     **
     * Returns an animation by its id
     - id (string) animation's id
     = (object) See @mina
    \*/
    mina.getById = function (id) {
        return animations[id] || null;
    };

    /*\
     * mina.linear
     [ method ]
     **
     * Default linear easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.linear = function (n) {
        return n;
    };
    /*\
     * mina.easeout
     [ method ]
     **
     * Easeout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeout = function (n) {
        return Math.pow(n, 1.7);
    };
    /*\
     * mina.easein
     [ method ]
     **
     * Easein easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easein = function (n) {
        return Math.pow(n, .48);
    };
    /*\
     * mina.easeinout
     [ method ]
     **
     * Easeinout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeinout = function (n) {
        if (n == 1) {
            return 1;
        }
        if (n == 0) {
            return 0;
        }
        var q = .48 - n / 1.04,
            Q = Math.sqrt(.1734 + q * q),
            x = Q - q,
            X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1),
            y = -Q - q,
            Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1),
            t = X + Y + .5;
        return (1 - t) * 3 * t * t + t * t * t;
    };
    /*\
     * mina.backin
     [ method ]
     **
     * Backin easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backin = function (n) {
        if (n == 1) {
            return 1;
        }
        var s = 1.70158;
        return n * n * ((s + 1) * n - s);
    };
    /*\
     * mina.backout
     [ method ]
     **
     * Backout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backout = function (n) {
        if (n == 0) {
            return 0;
        }
        n = n - 1;
        var s = 1.70158;
        return n * n * ((s + 1) * n + s) + 1;
    };
    /*\
     * mina.elastic
     [ method ]
     **
     * Elastic easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.elastic = function (n) {
        if (n == !!n) {
            return n;
        }
        return Math.pow(2, -10 * n) * Math.sin((n - .075) *
            (2 * Math.PI) / .3) + 1;
    };
    /*\
     * mina.bounce
     [ method ]
     **
     * Bounce easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.bounce = function (n) {
        var s = 7.5625,
            p = 2.75,
            l;
        if (n < 1 / p) {
            l = s * n * n;
        } else {
            if (n < 2 / p) {
                n -= 1.5 / p;
                l = s * n * n + .75;
            } else {
                if (n < 2.5 / p) {
                    n -= 2.25 / p;
                    l = s * n * n + .9375;
                } else {
                    n -= 2.625 / p;
                    l = s * n * n + .984375;
                }
            }
        }
        return l;
    };
    window.mina = mina;
    return mina;
})(typeof eve == "undefined" ? function () {} : eve);

// Copyright (c) 2013 - 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var Snap = (function(root) {
Snap.version = "0.5.1";
/*\
 * Snap
 [ method ]
 **
 * Creates a drawing surface or wraps existing SVG element.
 **
 - width (number|string) width of surface
 - height (number|string) height of surface
 * or
 - DOM (SVGElement) element to be wrapped into Snap structure
 * or
 - array (array) array of elements (will return set of elements)
 * or
 - query (string) CSS query selector
 = (object) @Element
\*/
function Snap(w, h) {
    if (w) {
        if (w.nodeType) {
            return wrap(w);
        }
        if (is(w, "array") && Snap.set) {
            return Snap.set.apply(Snap, w);
        }
        if (w instanceof Element) {
            return w;
        }
        if (h == null) {
            try {
                w = glob.doc.querySelector(String(w));
                return wrap(w);
            } catch (e) {
                return null;
            }
        }
    }
    w = w == null ? "100%" : w;
    h = h == null ? "100%" : h;
    return new Paper(w, h);
}
Snap.toString = function () {
    return "Snap v" + this.version;
};
Snap._ = {};
var glob = {
    win: root.window,
    doc: root.window.document
};
Snap._.glob = glob;
var has = "hasOwnProperty",
    Str = String,
    toFloat = parseFloat,
    toInt = parseInt,
    math = Math,
    mmax = math.max,
    mmin = math.min,
    abs = math.abs,
    pow = math.pow,
    PI = math.PI,
    round = math.round,
    E = "",
    S = " ",
    objectToString = Object.prototype.toString,
    ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
    colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
    bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
    separator = Snap._.separator = /[,\s]+/,
    whitespace = /[\s]/g,
    commaSpaces = /[\s]*,[\s]*/,
    hsrg = {hs: 1, rg: 1},
    pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/ig,
    idgen = 0,
    idprefix = "S" + (+new Date).toString(36),
    ID = function (el) {
        return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
    },
    xlink = "http://www.w3.org/1999/xlink",
    xmlns = "http://www.w3.org/2000/svg",
    hub = {},
    /*\
     * Snap.url
     [ method ]
     **
     * Wraps path into `"url('<path>')"`.
     - value (string) path
     = (string) wrapped path
    \*/
    URL = Snap.url = function (url) {
        return "url('#" + url + "')";
    };

function $(el, attr) {
    if (attr) {
        if (el == "#text") {
            el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
        }
        if (el == "#comment") {
            el = glob.doc.createComment(attr.text || attr["#text"] || "");
        }
        if (typeof el == "string") {
            el = $(el);
        }
        if (typeof attr == "string") {
            if (el.nodeType == 1) {
                if (attr.substring(0, 6) == "xlink:") {
                    return el.getAttributeNS(xlink, attr.substring(6));
                }
                if (attr.substring(0, 4) == "xml:") {
                    return el.getAttributeNS(xmlns, attr.substring(4));
                }
                return el.getAttribute(attr);
            } else if (attr == "text") {
                return el.nodeValue;
            } else {
                return null;
            }
        }
        if (el.nodeType == 1) {
            for (var key in attr) if (attr[has](key)) {
                var val = Str(attr[key]);
                if (val) {
                    if (key.substring(0, 6) == "xlink:") {
                        el.setAttributeNS(xlink, key.substring(6), val);
                    } else if (key.substring(0, 4) == "xml:") {
                        el.setAttributeNS(xmlns, key.substring(4), val);
                    } else {
                        el.setAttribute(key, val);
                    }
                } else {
                    el.removeAttribute(key);
                }
            }
        } else if ("text" in attr) {
            el.nodeValue = attr.text;
        }
    } else {
        el = glob.doc.createElementNS(xmlns, el);
    }
    return el;
}
Snap._.$ = $;
Snap._.id = ID;
function getAttrs(el) {
    var attrs = el.attributes,
        name,
        out = {};
    for (var i = 0; i < attrs.length; i++) {
        if (attrs[i].namespaceURI == xlink) {
            name = "xlink:";
        } else {
            name = "";
        }
        name += attrs[i].name;
        out[name] = attrs[i].textContent;
    }
    return out;
}
function is(o, type) {
    type = Str.prototype.toLowerCase.call(type);
    if (type == "finite") {
        return isFinite(o);
    }
    if (type == "array" &&
        (o instanceof Array || Array.isArray && Array.isArray(o))) {
        return true;
    }
    return  type == "null" && o === null ||
            type == typeof o && o !== null ||
            type == "object" && o === Object(o) ||
            objectToString.call(o).slice(8, -1).toLowerCase() == type;
}
/*\
 * Snap.format
 [ method ]
 **
 * Replaces construction of type `{<name>}` to the corresponding argument
 **
 - token (string) string to format
 - json (object) object which properties are used as a replacement
 = (string) formatted string
 > Usage
 | // this draws a rectangular shape equivalent to "M10,20h40v50h-40z"
 | paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
 |     x: 10,
 |     y: 20,
 |     dim: {
 |         width: 40,
 |         height: 50,
 |         "negative width": -40
 |     }
 | }));
\*/
Snap.format = (function () {
    var tokenRegex = /\{([^\}]+)\}/g,
        objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, // matches .xxxxx or ["xxxxx"] to run over object properties
        replacer = function (all, key, obj) {
            var res = obj;
            key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
                name = name || quotedName;
                if (res) {
                    if (name in res) {
                        res = res[name];
                    }
                    typeof res == "function" && isFunc && (res = res());
                }
            });
            res = (res == null || res == obj ? all : res) + "";
            return res;
        };
    return function (str, obj) {
        return Str(str).replace(tokenRegex, function (all, key) {
            return replacer(all, key, obj);
        });
    };
})();
function clone(obj) {
    if (typeof obj == "function" || Object(obj) !== obj) {
        return obj;
    }
    var res = new obj.constructor;
    for (var key in obj) if (obj[has](key)) {
        res[key] = clone(obj[key]);
    }
    return res;
}
Snap._.clone = clone;
function repush(array, item) {
    for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
        return array.push(array.splice(i, 1)[0]);
    }
}
function cacher(f, scope, postprocessor) {
    function newf() {
        var arg = Array.prototype.slice.call(arguments, 0),
            args = arg.join("\u2400"),
            cache = newf.cache = newf.cache || {},
            count = newf.count = newf.count || [];
        if (cache[has](args)) {
            repush(count, args);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
        }
        count.length >= 1e3 && delete cache[count.shift()];
        count.push(args);
        cache[args] = f.apply(scope, arg);
        return postprocessor ? postprocessor(cache[args]) : cache[args];
    }
    return newf;
}
Snap._.cacher = cacher;
function angle(x1, y1, x2, y2, x3, y3) {
    if (x3 == null) {
        var x = x1 - x2,
            y = y1 - y2;
        if (!x && !y) {
            return 0;
        }
        return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
    } else {
        return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
    }
}
function rad(deg) {
    return deg % 360 * PI / 180;
}
function deg(rad) {
    return rad * 180 / PI % 360;
}
function x_y() {
    return this.x + S + this.y;
}
function x_y_w_h() {
    return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
}

/*\
 * Snap.rad
 [ method ]
 **
 * Transform angle to radians
 - deg (number) angle in degrees
 = (number) angle in radians
\*/
Snap.rad = rad;
/*\
 * Snap.deg
 [ method ]
 **
 * Transform angle to degrees
 - rad (number) angle in radians
 = (number) angle in degrees
\*/
Snap.deg = deg;
/*\
 * Snap.sin
 [ method ]
 **
 * Equivalent to `Math.sin()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) sin
\*/
Snap.sin = function (angle) {
    return math.sin(Snap.rad(angle));
};
/*\
 * Snap.tan
 [ method ]
 **
 * Equivalent to `Math.tan()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) tan
\*/
Snap.tan = function (angle) {
    return math.tan(Snap.rad(angle));
};
/*\
 * Snap.cos
 [ method ]
 **
 * Equivalent to `Math.cos()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) cos
\*/
Snap.cos = function (angle) {
    return math.cos(Snap.rad(angle));
};
/*\
 * Snap.asin
 [ method ]
 **
 * Equivalent to `Math.asin()` only works with degrees, not radians.
 - num (number) value
 = (number) asin in degrees
\*/
Snap.asin = function (num) {
    return Snap.deg(math.asin(num));
};
/*\
 * Snap.acos
 [ method ]
 **
 * Equivalent to `Math.acos()` only works with degrees, not radians.
 - num (number) value
 = (number) acos in degrees
\*/
Snap.acos = function (num) {
    return Snap.deg(math.acos(num));
};
/*\
 * Snap.atan
 [ method ]
 **
 * Equivalent to `Math.atan()` only works with degrees, not radians.
 - num (number) value
 = (number) atan in degrees
\*/
Snap.atan = function (num) {
    return Snap.deg(math.atan(num));
};
/*\
 * Snap.atan2
 [ method ]
 **
 * Equivalent to `Math.atan2()` only works with degrees, not radians.
 - num (number) value
 = (number) atan2 in degrees
\*/
Snap.atan2 = function (num) {
    return Snap.deg(math.atan2(num));
};
/*\
 * Snap.angle
 [ method ]
 **
 * Returns an angle between two or three points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 - x3 (number) #optional x coord of third point
 - y3 (number) #optional y coord of third point
 = (number) angle in degrees
\*/
Snap.angle = angle;
/*\
 * Snap.len
 [ method ]
 **
 * Returns distance between two points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/
Snap.len = function (x1, y1, x2, y2) {
    return Math.sqrt(Snap.len2(x1, y1, x2, y2));
};
/*\
 * Snap.len2
 [ method ]
 **
 * Returns squared distance between two points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/
Snap.len2 = function (x1, y1, x2, y2) {
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
};
/*\
 * Snap.closestPoint
 [ method ]
 **
 * Returns closest point to a given one on a given path.
 - path (Element) path element
 - x (number) x coord of a point
 - y (number) y coord of a point
 = (object) in format
 {
    x (number) x coord of the point on the path
    y (number) y coord of the point on the path
    length (number) length of the path to the point
    distance (number) distance from the given point to the path
 }
\*/
// Copied from http://bl.ocks.org/mbostock/8027637
Snap.closestPoint = function (path, x, y) {
    function distance2(p) {
        var dx = p.x - x,
            dy = p.y - y;
        return dx * dx + dy * dy;
    }
    var pathNode = path.node,
        pathLength = pathNode.getTotalLength(),
        precision = pathLength / pathNode.pathSegList.numberOfItems * .125,
        best,
        bestLength,
        bestDistance = Infinity;

    // linear scan for coarse approximation
    for (var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision) {
        if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
            best = scan;
            bestLength = scanLength;
            bestDistance = scanDistance;
        }
    }

    // binary search for precise estimate
    precision *= .5;
    while (precision > .5) {
        var before,
            after,
            beforeLength,
            afterLength,
            beforeDistance,
            afterDistance;
        if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
            best = before;
            bestLength = beforeLength;
            bestDistance = beforeDistance;
        } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
            best = after;
            bestLength = afterLength;
            bestDistance = afterDistance;
        } else {
            precision *= .5;
        }
    }

    best = {
        x: best.x,
        y: best.y,
        length: bestLength,
        distance: Math.sqrt(bestDistance)
    };
    return best;
}
/*\
 * Snap.is
 [ method ]
 **
 * Handy replacement for the `typeof` operator
 - o (…) any object or primitive
 - type (string) name of the type, e.g., `string`, `function`, `number`, etc.
 = (boolean) `true` if given value is of given type
\*/
Snap.is = is;
/*\
 * Snap.snapTo
 [ method ]
 **
 * Snaps given value to given grid
 - values (array|number) given array of values or step of the grid
 - value (number) value to adjust
 - tolerance (number) #optional maximum distance to the target value that would trigger the snap. Default is `10`.
 = (number) adjusted value
\*/
Snap.snapTo = function (values, value, tolerance) {
    tolerance = is(tolerance, "finite") ? tolerance : 10;
    if (is(values, "array")) {
        var i = values.length;
        while (i--) if (abs(values[i] - value) <= tolerance) {
            return values[i];
        }
    } else {
        values = +values;
        var rem = value % values;
        if (rem < tolerance) {
            return value - rem;
        }
        if (rem > values - tolerance) {
            return value - rem + values;
        }
    }
    return value;
};
// Colour
/*\
 * Snap.getRGB
 [ method ]
 **
 * Parses color string as RGB object
 - color (string) color string in one of the following formats:
 # <ul>
 #     <li>Color name (<code>red</code>, <code>green</code>, <code>cornflowerblue</code>, etc)</li>
 #     <li>#••• — shortened HTML color: (<code>#000</code>, <code>#fc0</code>, etc.)</li>
 #     <li>#•••••• — full length HTML color: (<code>#000000</code>, <code>#bd2300</code>)</li>
 #     <li>rgb(•••, •••, •••) — red, green and blue channels values: (<code>rgb(200,&nbsp;100,&nbsp;0)</code>)</li>
 #     <li>rgba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>)</li>
 #     <li>rgba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>)</li>
 #     <li>hsba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsl(•••, •••, •••) — hue, saturation and luminosity values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;0.5)</code>)</li>
 #     <li>hsla(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsla(•••%, •••%, •••%, •••%) — also with opacity</li>
 # </ul>
 * Note that `%` can be used any time: `rgb(20%, 255, 50%)`.
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) true if string can't be parsed
 o }
\*/
Snap.getRGB = cacher(function (colour) {
    if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
    }
    if (colour == "none") {
        return {r: -1, g: -1, b: -1, hex: "none", toString: rgbtoString};
    }
    !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
    if (!colour) {
        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
    }
    var res,
        red,
        green,
        blue,
        opacity,
        t,
        values,
        rgb = colour.match(colourRegExp);
    if (rgb) {
        if (rgb[2]) {
            blue = toInt(rgb[2].substring(5), 16);
            green = toInt(rgb[2].substring(3, 5), 16);
            red = toInt(rgb[2].substring(1, 3), 16);
        }
        if (rgb[3]) {
            blue = toInt((t = rgb[3].charAt(3)) + t, 16);
            green = toInt((t = rgb[3].charAt(2)) + t, 16);
            red = toInt((t = rgb[3].charAt(1)) + t, 16);
        }
        if (rgb[4]) {
            values = rgb[4].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red *= 2.55);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green *= 2.55);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue *= 2.55);
            rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
        }
        if (rgb[5]) {
            values = rgb[5].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap.hsb2rgb(red, green, blue, opacity);
        }
        if (rgb[6]) {
            values = rgb[6].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap.hsl2rgb(red, green, blue, opacity);
        }
        red = mmin(math.round(red), 255);
        green = mmin(math.round(green), 255);
        blue = mmin(math.round(blue), 255);
        opacity = mmin(mmax(opacity, 0), 1);
        rgb = {r: red, g: green, b: blue, toString: rgbtoString};
        rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
        rgb.opacity = is(opacity, "finite") ? opacity : 1;
        return rgb;
    }
    return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
}, Snap);
/*\
 * Snap.hsb
 [ method ]
 **
 * Converts HSB values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - b (number) value or brightness
 = (string) hex representation of the color
\*/
Snap.hsb = cacher(function (h, s, b) {
    return Snap.hsb2rgb(h, s, b).hex;
});
/*\
 * Snap.hsl
 [ method ]
 **
 * Converts HSL values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (string) hex representation of the color
\*/
Snap.hsl = cacher(function (h, s, l) {
    return Snap.hsl2rgb(h, s, l).hex;
});
/*\
 * Snap.rgb
 [ method ]
 **
 * Converts RGB values to a hex representation of the color
 - r (number) red
 - g (number) green
 - b (number) blue
 = (string) hex representation of the color
\*/
Snap.rgb = cacher(function (r, g, b, o) {
    if (is(o, "finite")) {
        var round = math.round;
        return "rgba(" + [round(r), round(g), round(b), +o.toFixed(2)] + ")";
    }
    return "#" + (16777216 | b | g << 8 | r << 16).toString(16).slice(1);
});
var toHex = function (color) {
    var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0],
        red = "rgb(255, 0, 0)";
    toHex = cacher(function (color) {
        if (color.toLowerCase() == "red") {
            return red;
        }
        i.style.color = red;
        i.style.color = color;
        var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
        return out == red ? null : out;
    });
    return toHex(color);
},
hsbtoString = function () {
    return "hsb(" + [this.h, this.s, this.b] + ")";
},
hsltoString = function () {
    return "hsl(" + [this.h, this.s, this.l] + ")";
},
rgbtoString = function () {
    return this.opacity == 1 || this.opacity == null ?
            this.hex :
            "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
},
prepareRGB = function (r, g, b) {
    if (g == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
        b = r.b;
        g = r.g;
        r = r.r;
    }
    if (g == null && is(r, string)) {
        var clr = Snap.getRGB(r);
        r = clr.r;
        g = clr.g;
        b = clr.b;
    }
    if (r > 1 || g > 1 || b > 1) {
        r /= 255;
        g /= 255;
        b /= 255;
    }

    return [r, g, b];
},
packageRGB = function (r, g, b, o) {
    r = math.round(r * 255);
    g = math.round(g * 255);
    b = math.round(b * 255);
    var rgb = {
        r: r,
        g: g,
        b: b,
        opacity: is(o, "finite") ? o : 1,
        hex: Snap.rgb(r, g, b),
        toString: rgbtoString
    };
    is(o, "finite") && (rgb.opacity = o);
    return rgb;
};
/*\
 * Snap.color
 [ method ]
 **
 * Parses the color string and returns an object featuring the color's component values
 - clr (string) color string in one of the supported formats (see @Snap.getRGB)
 = (object) Combined RGB/HSB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) `true` if string can't be parsed,
 o     h (number) hue,
 o     s (number) saturation,
 o     v (number) value (brightness),
 o     l (number) lightness
 o }
\*/
Snap.color = function (clr) {
    var rgb;
    if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
        rgb = Snap.hsb2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
    } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
        rgb = Snap.hsl2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
    } else {
        if (is(clr, "string")) {
            clr = Snap.getRGB(clr);
        }
        if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
            rgb = Snap.rgb2hsl(clr);
            clr.h = rgb.h;
            clr.s = rgb.s;
            clr.l = rgb.l;
            rgb = Snap.rgb2hsb(clr);
            clr.v = rgb.b;
        } else {
            clr = {hex: "none"};
            clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
            clr.error = 1;
        }
    }
    clr.toString = rgbtoString;
    return clr;
};
/*\
 * Snap.hsb2rgb
 [ method ]
 **
 * Converts HSB values to an RGB object
 - h (number) hue
 - s (number) saturation
 - v (number) value or brightness
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
Snap.hsb2rgb = function (h, s, v, o) {
    if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
        v = h.b;
        s = h.s;
        o = h.o;
        h = h.h;
    }
    h *= 360;
    var R, G, B, X, C;
    h = h % 360 / 60;
    C = v * s;
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = v - C;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};
/*\
 * Snap.hsl2rgb
 [ method ]
 **
 * Converts HSL values to an RGB object
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
Snap.hsl2rgb = function (h, s, l, o) {
    if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
        l = h.l;
        s = h.s;
        h = h.h;
    }
    if (h > 1 || s > 1 || l > 1) {
        h /= 360;
        s /= 100;
        l /= 100;
    }
    h *= 360;
    var R, G, B, X, C;
    h = h % 360 / 60;
    C = 2 * s * (l < .5 ? l : 1 - l);
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = l - C / 2;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};
/*\
 * Snap.rgb2hsb
 [ method ]
 **
 * Converts RGB values to an HSB object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSB object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     b (number) brightness
 o }
\*/
Snap.rgb2hsb = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, V, C;
    V = mmax(r, g, b);
    C = V - mmin(r, g, b);
    H = C == 0 ? null :
        V == r ? (g - b) / C :
        V == g ? (b - r) / C + 2 :
                 (r - g) / C + 4;
    H = (H + 360) % 6 * 60 / 360;
    S = C == 0 ? 0 : C / V;
    return {h: H, s: S, b: V, toString: hsbtoString};
};
/*\
 * Snap.rgb2hsl
 [ method ]
 **
 * Converts RGB values to an HSL object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSL object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     l (number) luminosity
 o }
\*/
Snap.rgb2hsl = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, L, M, m, C;
    M = mmax(r, g, b);
    m = mmin(r, g, b);
    C = M - m;
    H = C == 0 ? null :
        M == r ? (g - b) / C :
        M == g ? (b - r) / C + 2 :
                 (r - g) / C + 4;
    H = (H + 360) % 6 * 60 / 360;
    L = (M + m) / 2;
    S = C == 0 ? 0 :
         L < .5 ? C / (2 * L) :
                  C / (2 - 2 * L);
    return {h: H, s: S, l: L, toString: hsltoString};
};

// Transformations
/*\
 * Snap.parsePathString
 [ method ]
 **
 * Utility method
 **
 * Parses given path string into an array of arrays of path segments
 - pathString (string|array) path string or array of segments (in the last case it is returned straight away)
 = (array) array of segments
\*/
Snap.parsePathString = function (pathString) {
    if (!pathString) {
        return null;
    }
    var pth = Snap.path(pathString);
    if (pth.arr) {
        return Snap.path.clone(pth.arr);
    }

    var paramCounts = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0},
        data = [];
    if (is(pathString, "array") && is(pathString[0], "array")) { // rough assumption
        data = Snap.path.clone(pathString);
    }
    if (!data.length) {
        Str(pathString).replace(pathCommand, function (a, b, c) {
            var params = [],
                name = b.toLowerCase();
            c.replace(pathValues, function (a, b) {
                b && params.push(+b);
            });
            if (name == "m" && params.length > 2) {
                data.push([b].concat(params.splice(0, 2)));
                name = "l";
                b = b == "m" ? "l" : "L";
            }
            if (name == "o" && params.length == 1) {
                data.push([b, params[0]]);
            }
            if (name == "r") {
                data.push([b].concat(params));
            } else while (params.length >= paramCounts[name]) {
                data.push([b].concat(params.splice(0, paramCounts[name])));
                if (!paramCounts[name]) {
                    break;
                }
            }
        });
    }
    data.toString = Snap.path.toString;
    pth.arr = Snap.path.clone(data);
    return data;
};
/*\
 * Snap.parseTransformString
 [ method ]
 **
 * Utility method
 **
 * Parses given transform string into an array of transformations
 - TString (string|array) transform string or array of transformations (in the last case it is returned straight away)
 = (array) array of transformations
\*/
var parseTransformString = Snap.parseTransformString = function (TString) {
    if (!TString) {
        return null;
    }
    var paramCounts = {r: 3, s: 4, t: 2, m: 6},
        data = [];
    if (is(TString, "array") && is(TString[0], "array")) { // rough assumption
        data = Snap.path.clone(TString);
    }
    if (!data.length) {
        Str(TString).replace(tCommand, function (a, b, c) {
            var params = [],
                name = b.toLowerCase();
            c.replace(pathValues, function (a, b) {
                b && params.push(+b);
            });
            data.push([b].concat(params));
        });
    }
    data.toString = Snap.path.toString;
    return data;
};
function svgTransform2string(tstr) {
    var res = [];
    tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (all, name, params) {
        params = params.split(/\s*,\s*|\s+/);
        if (name == "rotate" && params.length == 1) {
            params.push(0, 0);
        }
        if (name == "scale") {
            if (params.length > 2) {
                params = params.slice(0, 2);
            } else if (params.length == 2) {
                params.push(0, 0);
            }
            if (params.length == 1) {
                params.push(params[0], 0, 0);
            }
        }
        if (name == "skewX") {
            res.push(["m", 1, 0, math.tan(rad(params[0])), 1, 0, 0]);
        } else if (name == "skewY") {
            res.push(["m", 1, math.tan(rad(params[0])), 0, 1, 0, 0]);
        } else {
            res.push([name.charAt(0)].concat(params));
        }
        return all;
    });
    return res;
}
Snap._.svgTransform2string = svgTransform2string;
Snap._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
function transform2matrix(tstr, bbox) {
    var tdata = parseTransformString(tstr),
        m = new Snap.Matrix;
    if (tdata) {
        for (var i = 0, ii = tdata.length; i < ii; i++) {
            var t = tdata[i],
                tlen = t.length,
                command = Str(t[0]).toLowerCase(),
                absolute = t[0] != command,
                inver = absolute ? m.invert() : 0,
                x1,
                y1,
                x2,
                y2,
                bb;
            if (command == "t" && tlen == 2){
                m.translate(t[1], 0);
            } else if (command == "t" && tlen == 3) {
                if (absolute) {
                    x1 = inver.x(0, 0);
                    y1 = inver.y(0, 0);
                    x2 = inver.x(t[1], t[2]);
                    y2 = inver.y(t[1], t[2]);
                    m.translate(x2 - x1, y2 - y1);
                } else {
                    m.translate(t[1], t[2]);
                }
            } else if (command == "r") {
                if (tlen == 2) {
                    bb = bb || bbox;
                    m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                    if (absolute) {
                        x2 = inver.x(t[2], t[3]);
                        y2 = inver.y(t[2], t[3]);
                        m.rotate(t[1], x2, y2);
                    } else {
                        m.rotate(t[1], t[2], t[3]);
                    }
                }
            } else if (command == "s") {
                if (tlen == 2 || tlen == 3) {
                    bb = bb || bbox;
                    m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                    if (absolute) {
                        x2 = inver.x(t[2], t[3]);
                        y2 = inver.y(t[2], t[3]);
                        m.scale(t[1], t[1], x2, y2);
                    } else {
                        m.scale(t[1], t[1], t[2], t[3]);
                    }
                } else if (tlen == 5) {
                    if (absolute) {
                        x2 = inver.x(t[3], t[4]);
                        y2 = inver.y(t[3], t[4]);
                        m.scale(t[1], t[2], x2, y2);
                    } else {
                        m.scale(t[1], t[2], t[3], t[4]);
                    }
                }
            } else if (command == "m" && tlen == 7) {
                m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
            }
        }
    }
    return m;
}
Snap._.transform2matrix = transform2matrix;
Snap._unit2px = unit2px;
var contains = glob.doc.contains || glob.doc.compareDocumentPosition ?
    function (a, b) {
        var adown = a.nodeType == 9 ? a.documentElement : a,
            bup = b && b.parentNode;
            return a == bup || !!(bup && bup.nodeType == 1 && (
                adown.contains ?
                    adown.contains(bup) :
                    a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
            ));
    } :
    function (a, b) {
        if (b) {
            while (b) {
                b = b.parentNode;
                if (b == a) {
                    return true;
                }
            }
        }
        return false;
    };
function getSomeDefs(el) {
    var p = el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) ||
            el.node.parentNode && wrap(el.node.parentNode) ||
            Snap.select("svg") ||
            Snap(0, 0),
        pdefs = p.select("defs"),
        defs  = pdefs == null ? false : pdefs.node;
    if (!defs) {
        defs = make("defs", p.node).node;
    }
    return defs;
}
function getSomeSVG(el) {
    return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
}
Snap._.getSomeDefs = getSomeDefs;
Snap._.getSomeSVG = getSomeSVG;
function unit2px(el, name, value) {
    var svg = getSomeSVG(el).node,
        out = {},
        mgr = svg.querySelector(".svg---mgr");
    if (!mgr) {
        mgr = $("rect");
        $(mgr, {x: -9e9, y: -9e9, width: 10, height: 10, "class": "svg---mgr", fill: "none"});
        svg.appendChild(mgr);
    }
    function getW(val) {
        if (val == null) {
            return E;
        }
        if (val == +val) {
            return val;
        }
        $(mgr, {width: val});
        try {
            return mgr.getBBox().width;
        } catch (e) {
            return 0;
        }
    }
    function getH(val) {
        if (val == null) {
            return E;
        }
        if (val == +val) {
            return val;
        }
        $(mgr, {height: val});
        try {
            return mgr.getBBox().height;
        } catch (e) {
            return 0;
        }
    }
    function set(nam, f) {
        if (name == null) {
            out[nam] = f(el.attr(nam) || 0);
        } else if (nam == name) {
            out = f(value == null ? el.attr(nam) || 0 : value);
        }
    }
    switch (el.type) {
        case "rect":
            set("rx", getW);
            set("ry", getH);
        case "image":
            set("width", getW);
            set("height", getH);
        case "text":
            set("x", getW);
            set("y", getH);
        break;
        case "circle":
            set("cx", getW);
            set("cy", getH);
            set("r", getW);
        break;
        case "ellipse":
            set("cx", getW);
            set("cy", getH);
            set("rx", getW);
            set("ry", getH);
        break;
        case "line":
            set("x1", getW);
            set("x2", getW);
            set("y1", getH);
            set("y2", getH);
        break;
        case "marker":
            set("refX", getW);
            set("markerWidth", getW);
            set("refY", getH);
            set("markerHeight", getH);
        break;
        case "radialGradient":
            set("fx", getW);
            set("fy", getH);
        break;
        case "tspan":
            set("dx", getW);
            set("dy", getH);
        break;
        default:
            set(name, getW);
    }
    svg.removeChild(mgr);
    return out;
}
/*\
 * Snap.select
 [ method ]
 **
 * Wraps a DOM element specified by CSS selector as @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/
Snap.select = function (query) {
    query = Str(query).replace(/([^\\]):/g, "$1\\:");
    return wrap(glob.doc.querySelector(query));
};
/*\
 * Snap.selectAll
 [ method ]
 **
 * Wraps DOM elements specified by CSS selector as set or array of @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/
Snap.selectAll = function (query) {
    var nodelist = glob.doc.querySelectorAll(query),
        set = (Snap.set || Array)();
    for (var i = 0; i < nodelist.length; i++) {
        set.push(wrap(nodelist[i]));
    }
    return set;
};

function add2group(list) {
    if (!is(list, "array")) {
        list = Array.prototype.slice.call(arguments, 0);
    }
    var i = 0,
        j = 0,
        node = this.node;
    while (this[i]) delete this[i++];
    for (i = 0; i < list.length; i++) {
        if (list[i].type == "set") {
            list[i].forEach(function (el) {
                node.appendChild(el.node);
            });
        } else {
            node.appendChild(list[i].node);
        }
    }
    var children = node.childNodes;
    for (i = 0; i < children.length; i++) {
        this[j++] = wrap(children[i]);
    }
    return this;
}
// Hub garbage collector every 10s
setInterval(function () {
    for (var key in hub) if (hub[has](key)) {
        var el = hub[key],
            node = el.node;
        if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
            delete hub[key];
        }
    }
}, 1e4);
function Element(el) {
    if (el.snap in hub) {
        return hub[el.snap];
    }
    var svg;
    try {
        svg = el.ownerSVGElement;
    } catch(e) {}
    /*\
     * Element.node
     [ property (object) ]
     **
     * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
     > Usage
     | // draw a circle at coordinate 10,10 with radius of 10
     | var c = paper.circle(10, 10, 10);
     | c.node.onclick = function () {
     |     c.attr("fill", "red");
     | };
    \*/
    this.node = el;
    if (svg) {
        this.paper = new Paper(svg);
    }
    /*\
     * Element.type
     [ property (string) ]
     **
     * SVG tag name of the given element.
    \*/
    this.type = el.tagName || el.nodeName;
    var id = this.id = ID(this);
    this.anims = {};
    this._ = {
        transform: []
    };
    el.snap = id;
    hub[id] = this;
    if (this.type == "g") {
        this.add = add2group;
    }
    if (this.type in {g: 1, mask: 1, pattern: 1, symbol: 1}) {
        for (var method in Paper.prototype) if (Paper.prototype[has](method)) {
            this[method] = Paper.prototype[method];
        }
    }
}
   /*\
     * Element.attr
     [ method ]
     **
     * Gets or sets given attributes of the element.
     **
     - params (object) contains key-value pairs of attributes you want to set
     * or
     - param (string) name of the attribute
     = (Element) the current element
     * or
     = (string) value of attribute
     > Usage
     | el.attr({
     |     fill: "#fc0",
     |     stroke: "#000",
     |     strokeWidth: 2, // CamelCase...
     |     "fill-opacity": 0.5, // or dash-separated names
     |     width: "*=2" // prefixed values
     | });
     | console.log(el.attr("fill")); // #fc0
     * Prefixed values in format `"+=10"` supported. All four operations
     * (`+`, `-`, `*` and `/`) could be used. Optionally you can use units for `+`
     * and `-`: `"+=2em"`.
    \*/
    Element.prototype.attr = function (params, value) {
        var el = this,
            node = el.node;
        if (!params) {
            if (node.nodeType != 1) {
                return {
                    text: node.nodeValue
                };
            }
            var attr = node.attributes,
                out = {};
            for (var i = 0, ii = attr.length; i < ii; i++) {
                out[attr[i].nodeName] = attr[i].nodeValue;
            }
            return out;
        }
        if (is(params, "string")) {
            if (arguments.length > 1) {
                var json = {};
                json[params] = value;
                params = json;
            } else {
                return eve("snap.util.getattr." + params, el).firstDefined();
            }
        }
        for (var att in params) {
            if (params[has](att)) {
                eve("snap.util.attr." + att, el, params[att]);
            }
        }
        return el;
    };
/*\
 * Snap.parse
 [ method ]
 **
 * Parses SVG fragment and converts it into a @Fragment
 **
 - svg (string) SVG string
 = (Fragment) the @Fragment
\*/
Snap.parse = function (svg) {
    var f = glob.doc.createDocumentFragment(),
        full = true,
        div = glob.doc.createElement("div");
    svg = Str(svg);
    if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
        svg = "<svg>" + svg + "</svg>";
        full = false;
    }
    div.innerHTML = svg;
    svg = div.getElementsByTagName("svg")[0];
    if (svg) {
        if (full) {
            f = svg;
        } else {
            while (svg.firstChild) {
                f.appendChild(svg.firstChild);
            }
        }
    }
    return new Fragment(f);
};
function Fragment(frag) {
    this.node = frag;
}
/*\
 * Snap.fragment
 [ method ]
 **
 * Creates a DOM fragment from a given list of elements or strings
 **
 - varargs (…) SVG string
 = (Fragment) the @Fragment
\*/
Snap.fragment = function () {
    var args = Array.prototype.slice.call(arguments, 0),
        f = glob.doc.createDocumentFragment();
    for (var i = 0, ii = args.length; i < ii; i++) {
        var item = args[i];
        if (item.node && item.node.nodeType) {
            f.appendChild(item.node);
        }
        if (item.nodeType) {
            f.appendChild(item);
        }
        if (typeof item == "string") {
            f.appendChild(Snap.parse(item).node);
        }
    }
    return new Fragment(f);
};

function make(name, parent) {
    var res = $(name);
    parent.appendChild(res);
    var el = wrap(res);
    return el;
}
function Paper(w, h) {
    var res,
        desc,
        defs,
        proto = Paper.prototype;
    if (w && w.tagName && w.tagName.toLowerCase() == "svg") {
        if (w.snap in hub) {
            return hub[w.snap];
        }
        var doc = w.ownerDocument;
        res = new Element(w);
        desc = w.getElementsByTagName("desc")[0];
        defs = w.getElementsByTagName("defs")[0];
        if (!desc) {
            desc = $("desc");
            desc.appendChild(doc.createTextNode("Created with Snap"));
            res.node.appendChild(desc);
        }
        if (!defs) {
            defs = $("defs");
            res.node.appendChild(defs);
        }
        res.defs = defs;
        for (var key in proto) if (proto[has](key)) {
            res[key] = proto[key];
        }
        res.paper = res.root = res;
    } else {
        res = make("svg", glob.doc.body);
        $(res.node, {
            height: h,
            version: 1.1,
            width: w,
            xmlns: xmlns
        });
    }
    return res;
}
function wrap(dom) {
    if (!dom) {
        return dom;
    }
    if (dom instanceof Element || dom instanceof Fragment) {
        return dom;
    }
    if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
        return new Paper(dom);
    }
    if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
        return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
    }
    return new Element(dom);
}

Snap._.make = make;
Snap._.wrap = wrap;
/*\
 * Paper.el
 [ method ]
 **
 * Creates an element on paper with a given name and no attributes
 **
 - name (string) tag name
 - attr (object) attributes
 = (Element) the current element
 > Usage
 | var c = paper.circle(10, 10, 10); // is the same as...
 | var c = paper.el("circle").attr({
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
 | // and the same as
 | var c = paper.el("circle", {
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
\*/
Paper.prototype.el = function (name, attr) {
    var el = make(name, this.node);
    attr && el.attr(attr);
    return el;
};
/*\
 * Element.children
 [ method ]
 **
 * Returns array of all the children of the element.
 = (array) array of Elements
\*/
Element.prototype.children = function () {
    var out = [],
        ch = this.node.childNodes;
    for (var i = 0, ii = ch.length; i < ii; i++) {
        out[i] = Snap(ch[i]);
    }
    return out;
};
function jsonFiller(root, o) {
    for (var i = 0, ii = root.length; i < ii; i++) {
        var item = {
                type: root[i].type,
                attr: root[i].attr()
            },
            children = root[i].children();
        o.push(item);
        if (children.length) {
            jsonFiller(children, item.childNodes = []);
        }
    }
}
/*\
 * Element.toJSON
 [ method ]
 **
 * Returns object representation of the given element and all its children.
 = (object) in format
 o {
 o     type (string) this.type,
 o     attr (object) attributes map,
 o     childNodes (array) optional array of children in the same format
 o }
\*/
Element.prototype.toJSON = function () {
    var out = [];
    jsonFiller([this], out);
    return out[0];
};
// default
eve.on("snap.util.getattr", function () {
    var att = eve.nt();
    att = att.substring(att.lastIndexOf(".") + 1);
    var css = att.replace(/[A-Z]/g, function (letter) {
        return "-" + letter.toLowerCase();
    });
    if (cssAttr[has](css)) {
        return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
    } else {
        return $(this.node, att);
    }
});
var cssAttr = {
    "alignment-baseline": 0,
    "baseline-shift": 0,
    "clip": 0,
    "clip-path": 0,
    "clip-rule": 0,
    "color": 0,
    "color-interpolation": 0,
    "color-interpolation-filters": 0,
    "color-profile": 0,
    "color-rendering": 0,
    "cursor": 0,
    "direction": 0,
    "display": 0,
    "dominant-baseline": 0,
    "enable-background": 0,
    "fill": 0,
    "fill-opacity": 0,
    "fill-rule": 0,
    "filter": 0,
    "flood-color": 0,
    "flood-opacity": 0,
    "font": 0,
    "font-family": 0,
    "font-size": 0,
    "font-size-adjust": 0,
    "font-stretch": 0,
    "font-style": 0,
    "font-variant": 0,
    "font-weight": 0,
    "glyph-orientation-horizontal": 0,
    "glyph-orientation-vertical": 0,
    "image-rendering": 0,
    "kerning": 0,
    "letter-spacing": 0,
    "lighting-color": 0,
    "marker": 0,
    "marker-end": 0,
    "marker-mid": 0,
    "marker-start": 0,
    "mask": 0,
    "opacity": 0,
    "overflow": 0,
    "pointer-events": 0,
    "shape-rendering": 0,
    "stop-color": 0,
    "stop-opacity": 0,
    "stroke": 0,
    "stroke-dasharray": 0,
    "stroke-dashoffset": 0,
    "stroke-linecap": 0,
    "stroke-linejoin": 0,
    "stroke-miterlimit": 0,
    "stroke-opacity": 0,
    "stroke-width": 0,
    "text-anchor": 0,
    "text-decoration": 0,
    "text-rendering": 0,
    "unicode-bidi": 0,
    "visibility": 0,
    "word-spacing": 0,
    "writing-mode": 0
};

eve.on("snap.util.attr", function (value) {
    var att = eve.nt(),
        attr = {};
    att = att.substring(att.lastIndexOf(".") + 1);
    attr[att] = value;
    var style = att.replace(/-(\w)/gi, function (all, letter) {
            return letter.toUpperCase();
        }),
        css = att.replace(/[A-Z]/g, function (letter) {
            return "-" + letter.toLowerCase();
        });
    if (cssAttr[has](css)) {
        this.node.style[style] = value == null ? E : value;
    } else {
        $(this.node, attr);
    }
});
(function (proto) {}(Paper.prototype));

// simple ajax
/*\
 * Snap.ajax
 [ method ]
 **
 * Simple implementation of Ajax
 **
 - url (string) URL
 - postData (object|string) data for post request
 - callback (function) callback
 - scope (object) #optional scope of callback
 * or
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
 = (XMLHttpRequest) the XMLHttpRequest object, just in case
\*/
Snap.ajax = function (url, postData, callback, scope){
    var req = new XMLHttpRequest,
        id = ID();
    if (req) {
        if (is(postData, "function")) {
            scope = callback;
            callback = postData;
            postData = null;
        } else if (is(postData, "object")) {
            var pd = [];
            for (var key in postData) if (postData.hasOwnProperty(key)) {
                pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
            }
            postData = pd.join("&");
        }
        req.open(postData ? "POST" : "GET", url, true);
        if (postData) {
            req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }
        if (callback) {
            eve.once("snap.ajax." + id + ".0", callback);
            eve.once("snap.ajax." + id + ".200", callback);
            eve.once("snap.ajax." + id + ".304", callback);
        }
        req.onreadystatechange = function() {
            if (req.readyState != 4) return;
            eve("snap.ajax." + id + "." + req.status, scope, req);
        };
        if (req.readyState == 4) {
            return req;
        }
        req.send(postData);
        return req;
    }
};
/*\
 * Snap.load
 [ method ]
 **
 * Loads external SVG file as a @Fragment (see @Snap.ajax for more advanced AJAX)
 **
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
\*/
Snap.load = function (url, callback, scope) {
    Snap.ajax(url, function (req) {
        var f = Snap.parse(req.responseText);
        scope ? callback.call(scope, f) : callback(f);
    });
};
var getOffset = function (elem) {
    var box = elem.getBoundingClientRect(),
        doc = elem.ownerDocument,
        body = doc.body,
        docElem = doc.documentElement,
        clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
        top  = box.top  + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop ) - clientTop,
        left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
    return {
        y: top,
        x: left
    };
};
/*\
 * Snap.getElementByPoint
 [ method ]
 **
 * Returns you topmost element under given point.
 **
 = (object) Snap element object
 - x (number) x coordinate from the top left corner of the window
 - y (number) y coordinate from the top left corner of the window
 > Usage
 | Snap.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
\*/
Snap.getElementByPoint = function (x, y) {
    var paper = this,
        svg = paper.canvas,
        target = glob.doc.elementFromPoint(x, y);
    if (glob.win.opera && target.tagName == "svg") {
        var so = getOffset(target),
            sr = target.createSVGRect();
        sr.x = x - so.x;
        sr.y = y - so.y;
        sr.width = sr.height = 1;
        var hits = target.getIntersectionList(sr, null);
        if (hits.length) {
            target = hits[hits.length - 1];
        }
    }
    if (!target) {
        return null;
    }
    return wrap(target);
};
/*\
 * Snap.plugin
 [ method ]
 **
 * Let you write plugins. You pass in a function with five arguments, like this:
 | Snap.plugin(function (Snap, Element, Paper, global, Fragment) {
 |     Snap.newmethod = function () {};
 |     Element.prototype.newmethod = function () {};
 |     Paper.prototype.newmethod = function () {};
 | });
 * Inside the function you have access to all main objects (and their
 * prototypes). This allow you to extend anything you want.
 **
 - f (function) your plugin body
\*/
Snap.plugin = function (f) {
    f(Snap, Element, Paper, glob, Fragment);
};
glob.win.Snap = Snap;
return Snap;
}(window || this));

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype,
        is = Snap.is,
        Str = String,
        unit2px = Snap._unit2px,
        $ = Snap._.$,
        make = Snap._.make,
        getSomeDefs = Snap._.getSomeDefs,
        has = "hasOwnProperty",
        wrap = Snap._.wrap;
    /*\
     * Element.getBBox
     [ method ]
     **
     * Returns the bounding box descriptor for the given element
     **
     = (object) bounding box descriptor:
     o {
     o     cx: (number) x of the center,
     o     cy: (number) x of the center,
     o     h: (number) height,
     o     height: (number) height,
     o     path: (string) path command for the box,
     o     r0: (number) radius of a circle that fully encloses the box,
     o     r1: (number) radius of the smallest circle that can be enclosed,
     o     r2: (number) radius of the largest circle that can be enclosed,
     o     vb: (string) box as a viewbox command,
     o     w: (number) width,
     o     width: (number) width,
     o     x2: (number) x of the right side,
     o     x: (number) x of the left side,
     o     y2: (number) y of the bottom edge,
     o     y: (number) y of the top edge
     o }
    \*/
    elproto.getBBox = function (isWithoutTransform) {
        if (this.type == "tspan") {
            return Snap._.box(this.node.getClientRects().item(0));
        }
        if (!Snap.Matrix || !Snap.path) {
            return this.node.getBBox();
        }
        var el = this,
            m = new Snap.Matrix;
        if (el.removed) {
            return Snap._.box();
        }
        while (el.type == "use") {
            if (!isWithoutTransform) {
                m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
            }
            if (el.original) {
                el = el.original;
            } else {
                var href = el.attr("xlink:href");
                el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
            }
        }
        var _ = el._,
            pathfinder = Snap.path.get[el.type] || Snap.path.get.deflt;
        try {
            if (isWithoutTransform) {
                _.bboxwt = pathfinder ? Snap.path.getBBox(el.realPath = pathfinder(el)) : Snap._.box(el.node.getBBox());
                return Snap._.box(_.bboxwt);
            } else {
                el.realPath = pathfinder(el);
                el.matrix = el.transform().localMatrix;
                _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, m.add(el.matrix)));
                return Snap._.box(_.bbox);
            }
        } catch (e) {
            // Firefox doesn’t give you bbox of hidden element
            return Snap._.box();
        }
    };
    var propString = function () {
        return this.string;
    };
    function extractTransform(el, tstr) {
        if (tstr == null) {
            var doReturn = true;
            if (el.type == "linearGradient" || el.type == "radialGradient") {
                tstr = el.node.getAttribute("gradientTransform");
            } else if (el.type == "pattern") {
                tstr = el.node.getAttribute("patternTransform");
            } else {
                tstr = el.node.getAttribute("transform");
            }
            if (!tstr) {
                return new Snap.Matrix;
            }
            tstr = Snap._.svgTransform2string(tstr);
        } else {
            if (!Snap._.rgTransform.test(tstr)) {
                tstr = Snap._.svgTransform2string(tstr);
            } else {
                tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || "");
            }
            if (is(tstr, "array")) {
                tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
            }
            el._.transform = tstr;
        }
        var m = Snap._.transform2matrix(tstr, el.getBBox(1));
        if (doReturn) {
            return m;
        } else {
            el.matrix = m;
        }
    }
    /*\
     * Element.transform
     [ method ]
     **
     * Gets or sets transformation of the element
     **
     - tstr (string) transform string in Snap or SVG format
     = (Element) the current element
     * or
     = (object) transformation descriptor:
     o {
     o     string (string) transform string,
     o     globalMatrix (Matrix) matrix of all transformations applied to element or its parents,
     o     localMatrix (Matrix) matrix of transformations applied only to the element,
     o     diffMatrix (Matrix) matrix of difference between global and local transformations,
     o     global (string) global transformation as string,
     o     local (string) local transformation as string,
     o     toString (function) returns `string` property
     o }
    \*/
    elproto.transform = function (tstr) {
        var _ = this._;
        if (tstr == null) {
            var papa = this,
                global = new Snap.Matrix(this.node.getCTM()),
                local = extractTransform(this),
                ms = [local],
                m = new Snap.Matrix,
                i,
                localString = local.toTransformString(),
                string = Str(local) == Str(this.matrix) ?
                            Str(_.transform) : localString;
            while (papa.type != "svg" && (papa = papa.parent())) {
                ms.push(extractTransform(papa));
            }
            i = ms.length;
            while (i--) {
                m.add(ms[i]);
            }
            return {
                string: string,
                globalMatrix: global,
                totalMatrix: m,
                localMatrix: local,
                diffMatrix: global.clone().add(local.invert()),
                global: global.toTransformString(),
                total: m.toTransformString(),
                local: localString,
                toString: propString
            };
        }
        if (tstr instanceof Snap.Matrix) {
            this.matrix = tstr;
            this._.transform = tstr.toTransformString();
        } else {
            extractTransform(this, tstr);
        }

        if (this.node) {
            if (this.type == "linearGradient" || this.type == "radialGradient") {
                $(this.node, {gradientTransform: this.matrix});
            } else if (this.type == "pattern") {
                $(this.node, {patternTransform: this.matrix});
            } else {
                $(this.node, {transform: this.matrix});
            }
        }

        return this;
    };
    /*\
     * Element.parent
     [ method ]
     **
     * Returns the element's parent
     **
     = (Element) the parent element
    \*/
    elproto.parent = function () {
        return wrap(this.node.parentNode);
    };
    /*\
     * Element.append
     [ method ]
     **
     * Appends the given element to current one
     **
     - el (Element|Set) element to append
     = (Element) the parent element
    \*/
    /*\
     * Element.add
     [ method ]
     **
     * See @Element.append
    \*/
    elproto.append = elproto.add = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this;
                el.forEach(function (el) {
                    it.add(el);
                });
                return this;
            }
            el = wrap(el);
            this.node.appendChild(el.node);
            el.paper = this.paper;
        }
        return this;
    };
    /*\
     * Element.appendTo
     [ method ]
     **
     * Appends the current element to the given one
     **
     - el (Element) parent element to append to
     = (Element) the child element
    \*/
    elproto.appendTo = function (el) {
        if (el) {
            el = wrap(el);
            el.append(this);
        }
        return this;
    };
    /*\
     * Element.prepend
     [ method ]
     **
     * Prepends the given element to the current one
     **
     - el (Element) element to prepend
     = (Element) the parent element
    \*/
    elproto.prepend = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this,
                    first;
                el.forEach(function (el) {
                    if (first) {
                        first.after(el);
                    } else {
                        it.prepend(el);
                    }
                    first = el;
                });
                return this;
            }
            el = wrap(el);
            var parent = el.parent();
            this.node.insertBefore(el.node, this.node.firstChild);
            this.add && this.add();
            el.paper = this.paper;
            this.parent() && this.parent().add();
            parent && parent.add();
        }
        return this;
    };
    /*\
     * Element.prependTo
     [ method ]
     **
     * Prepends the current element to the given one
     **
     - el (Element) parent element to prepend to
     = (Element) the child element
    \*/
    elproto.prependTo = function (el) {
        el = wrap(el);
        el.prepend(this);
        return this;
    };
    /*\
     * Element.before
     [ method ]
     **
     * Inserts given element before the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.before = function (el) {
        if (el.type == "set") {
            var it = this;
            el.forEach(function (el) {
                var parent = el.parent();
                it.node.parentNode.insertBefore(el.node, it.node);
                parent && parent.add();
            });
            this.parent().add();
            return this;
        }
        el = wrap(el);
        var parent = el.parent();
        this.node.parentNode.insertBefore(el.node, this.node);
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.after
     [ method ]
     **
     * Inserts given element after the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.after = function (el) {
        el = wrap(el);
        var parent = el.parent();
        if (this.node.nextSibling) {
            this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
        } else {
            this.node.parentNode.appendChild(el.node);
        }
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.insertBefore
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertBefore = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.insertAfter
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertAfter = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.remove
     [ method ]
     **
     * Removes element from the DOM
     = (Element) the detached element
    \*/
    elproto.remove = function () {
        var parent = this.parent();
        this.node.parentNode && this.node.parentNode.removeChild(this.node);
        delete this.paper;
        this.removed = true;
        parent && parent.add();
        return this;
    };
    /*\
     * Element.select
     [ method ]
     **
     * Gathers the nested @Element matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Element) result of query selection
    \*/
    elproto.select = function (query) {
        return wrap(this.node.querySelector(query));
    };
    /*\
     * Element.selectAll
     [ method ]
     **
     * Gathers nested @Element objects matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Set|array) result of query selection
    \*/
    elproto.selectAll = function (query) {
        var nodelist = this.node.querySelectorAll(query),
            set = (Snap.set || Array)();
        for (var i = 0; i < nodelist.length; i++) {
            set.push(wrap(nodelist[i]));
        }
        return set;
    };
    /*\
     * Element.asPX
     [ method ]
     **
     * Returns given attribute of the element as a `px` value (not %, em, etc.)
     **
     - attr (string) attribute name
     - value (string) #optional attribute value
     = (Element) result of query selection
    \*/
    elproto.asPX = function (attr, value) {
        if (value == null) {
            value = this.attr(attr);
        }
        return +unit2px(this, attr, value);
    };
    // SIERRA Element.use(): I suggest adding a note about how to access the original element the returned <use> instantiates. It's a part of SVG with which ordinary web developers may be least familiar.
    /*\
     * Element.use
     [ method ]
     **
     * Creates a `<use>` element linked to the current element
     **
     = (Element) the `<use>` element
    \*/
    elproto.use = function () {
        var use,
            id = this.node.id;
        if (!id) {
            id = this.id;
            $(this.node, {
                id: id
            });
        }
        if (this.type == "linearGradient" || this.type == "radialGradient" ||
            this.type == "pattern") {
            use = make(this.type, this.node.parentNode);
        } else {
            use = make("use", this.node.parentNode);
        }
        $(use.node, {
            "xlink:href": "#" + id
        });
        use.original = this;
        return use;
    };
    function fixids(el) {
        var els = el.selectAll("*"),
            it,
            url = /^\s*url\(("|'|)(.*)\1\)\s*$/,
            ids = [],
            uses = {};
        function urltest(it, name) {
            var val = $(it.node, name);
            val = val && val.match(url);
            val = val && val[2];
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    var attr = {};
                    attr[name] = Snap.url(id);
                    $(it.node, attr);
                });
            }
        }
        function linktest(it) {
            var val = $(it.node, "xlink:href");
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    it.attr("xlink:href", "#" + id);
                });
            }
        }
        for (var i = 0, ii = els.length; i < ii; i++) {
            it = els[i];
            urltest(it, "fill");
            urltest(it, "stroke");
            urltest(it, "filter");
            urltest(it, "mask");
            urltest(it, "clip-path");
            linktest(it);
            var oldid = $(it.node, "id");
            if (oldid) {
                $(it.node, {id: it.id});
                ids.push({
                    old: oldid,
                    id: it.id
                });
            }
        }
        for (i = 0, ii = ids.length; i < ii; i++) {
            var fs = uses[ids[i].old];
            if (fs) {
                for (var j = 0, jj = fs.length; j < jj; j++) {
                    fs[j](ids[i].id);
                }
            }
        }
    }
    /*\
     * Element.clone
     [ method ]
     **
     * Creates a clone of the element and inserts it after the element
     **
     = (Element) the clone
    \*/
    elproto.clone = function () {
        var clone = wrap(this.node.cloneNode(true));
        if ($(clone.node, "id")) {
            $(clone.node, {id: clone.id});
        }
        fixids(clone);
        clone.insertAfter(this);
        return clone;
    };
    /*\
     * Element.toDefs
     [ method ]
     **
     * Moves element to the shared `<defs>` area
     **
     = (Element) the element
    \*/
    elproto.toDefs = function () {
        var defs = getSomeDefs(this);
        defs.appendChild(this.node);
        return this;
    };
    /*\
     * Element.toPattern
     [ method ]
     **
     * Creates a `<pattern>` element from the current element
     **
     * To create a pattern you have to specify the pattern rect:
     - x (string|number)
     - y (string|number)
     - width (string|number)
     - height (string|number)
     = (Element) the `<pattern>` element
     * You can use pattern later on as an argument for `fill` attribute:
     | var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
     |         fill: "none",
     |         stroke: "#bada55",
     |         strokeWidth: 5
     |     }).pattern(0, 0, 10, 10),
     |     c = paper.circle(200, 200, 100);
     | c.attr({
     |     fill: p
     | });
    \*/
    elproto.pattern = elproto.toPattern = function (x, y, width, height) {
        var p = make("pattern", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        $(p.node, {
            x: x,
            y: y,
            width: width,
            height: height,
            patternUnits: "userSpaceOnUse",
            id: p.id,
            viewBox: [x, y, width, height].join(" ")
        });
        p.node.appendChild(this.node);
        return p;
    };
// SIERRA Element.marker(): clarify what a reference point is. E.g., helps you offset the object from its edge such as when centering it over a path.
// SIERRA Element.marker(): I suggest the method should accept default reference point values.  Perhaps centered with (refX = width/2) and (refY = height/2)? Also, couldn't it assume the element's current _width_ and _height_? And please specify what _x_ and _y_ mean: offsets? If so, from where?  Couldn't they also be assigned default values?
    /*\
     * Element.marker
     [ method ]
     **
     * Creates a `<marker>` element from the current element
     **
     * To create a marker you have to specify the bounding rect and reference point:
     - x (number)
     - y (number)
     - width (number)
     - height (number)
     - refX (number)
     - refY (number)
     = (Element) the `<marker>` element
     * You can specify the marker later as an argument for `marker-start`, `marker-end`, `marker-mid`, and `marker` attributes. The `marker` attribute places the marker at every point along the path, and `marker-mid` places them at every point except the start and end.
    \*/
    // TODO add usage for markers
    elproto.marker = function (x, y, width, height, refX, refY) {
        var p = make("marker", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            refX = x.refX || x.cx;
            refY = x.refY || x.cy;
            x = x.x;
        }
        $(p.node, {
            viewBox: [x, y, width, height].join(" "),
            markerWidth: width,
            markerHeight: height,
            orient: "auto",
            refX: refX || 0,
            refY: refY || 0,
            id: p.id
        });
        p.node.appendChild(this.node);
        return p;
    };
    var eldata = {};
    /*\
     * Element.data
     [ method ]
     **
     * Adds or retrieves given value associated with given key. (Don’t confuse
     * with `data-` attributes)
     *
     * See also @Element.removeData
     - key (string) key to store data
     - value (any) #optional value to store
     = (object) @Element
     * or, if value is not specified:
     = (any) value
     > Usage
     | for (var i = 0, i < 5, i++) {
     |     paper.circle(10 + 15 * i, 10, 10)
     |          .attr({fill: "#000"})
     |          .data("i", i)
     |          .click(function () {
     |             alert(this.data("i"));
     |          });
     | }
    \*/
    elproto.data = function (key, value) {
        var data = eldata[this.id] = eldata[this.id] || {};
        if (arguments.length == 0){
            eve("snap.data.get." + this.id, this, data, null);
            return data;
        }
        if (arguments.length == 1) {
            if (Snap.is(key, "object")) {
                for (var i in key) if (key[has](i)) {
                    this.data(i, key[i]);
                }
                return this;
            }
            eve("snap.data.get." + this.id, this, data[key], key);
            return data[key];
        }
        data[key] = value;
        eve("snap.data.set." + this.id, this, value, key);
        return this;
    };
    /*\
     * Element.removeData
     [ method ]
     **
     * Removes value associated with an element by given key.
     * If key is not provided, removes all the data of the element.
     - key (string) #optional key
     = (object) @Element
    \*/
    elproto.removeData = function (key) {
        if (key == null) {
            eldata[this.id] = {};
        } else {
            eldata[this.id] && delete eldata[this.id][key];
        }
        return this;
    };
    /*\
     * Element.outerSVG
     [ method ]
     **
     * Returns SVG code for the element, equivalent to HTML's `outerHTML`.
     *
     * See also @Element.innerSVG
     = (string) SVG code for the element
    \*/
    /*\
     * Element.toString
     [ method ]
     **
     * See @Element.outerSVG
    \*/
    elproto.outerSVG = elproto.toString = toString(1);
    /*\
     * Element.innerSVG
     [ method ]
     **
     * Returns SVG code for the element's contents, equivalent to HTML's `innerHTML`
     = (string) SVG code for the element
    \*/
    elproto.innerSVG = toString();
    function toString(type) {
        return function () {
            var res = type ? "<" + this.type : "",
                attr = this.node.attributes,
                chld = this.node.childNodes;
            if (type) {
                for (var i = 0, ii = attr.length; i < ii; i++) {
                    res += " " + attr[i].name + '="' +
                            attr[i].value.replace(/"/g, '\\"') + '"';
                }
            }
            if (chld.length) {
                type && (res += ">");
                for (i = 0, ii = chld.length; i < ii; i++) {
                    if (chld[i].nodeType == 3) {
                        res += chld[i].nodeValue;
                    } else if (chld[i].nodeType == 1) {
                        res += wrap(chld[i]).toString();
                    }
                }
                type && (res += "</" + this.type + ">");
            } else {
                type && (res += "/>");
            }
            return res;
        };
    }
    elproto.toDataURL = function () {
        if (window && window.btoa) {
            var bb = this.getBBox(),
                svg = Snap.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                x: +bb.x.toFixed(3),
                y: +bb.y.toFixed(3),
                width: +bb.width.toFixed(3),
                height: +bb.height.toFixed(3),
                contents: this.outerSVG()
            });
            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
        }
    };
    /*\
     * Fragment.select
     [ method ]
     **
     * See @Element.select
    \*/
    Fragment.prototype.select = elproto.select;
    /*\
     * Fragment.selectAll
     [ method ]
     **
     * See @Element.selectAll
    \*/
    Fragment.prototype.selectAll = elproto.selectAll;
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var objectToString = Object.prototype.toString,
        Str = String,
        math = Math,
        E = "";
    function Matrix(a, b, c, d, e, f) {
        if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.d = a.d;
            this.e = a.e;
            this.f = a.f;
            return;
        }
        if (a != null) {
            this.a = +a;
            this.b = +b;
            this.c = +c;
            this.d = +d;
            this.e = +e;
            this.f = +f;
        } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0;
        }
    }
    (function (matrixproto) {
        /*\
         * Matrix.add
         [ method ]
         **
         * Adds the given matrix to existing one
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/
        matrixproto.add = function (a, b, c, d, e, f) {
            if (a && a instanceof Matrix) {
                return this.add(a.a, a.b, a.c, a.d, a.e, a.f);
            }
            var aNew = a * this.a + b * this.c,
                bNew = a * this.b + b * this.d;
            this.e += e * this.a + f * this.c;
            this.f += e * this.b + f * this.d;
            this.c = c * this.a + d * this.c;
            this.d = c * this.b + d * this.d;

            this.a = aNew;
            this.b = bNew;
            return this;
        };
        /*\
         * Matrix.multLeft
         [ method ]
         **
         * Multiplies a passed affine transform to the left: M * this.
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/
        Matrix.prototype.multLeft = function (a, b, c, d, e, f) {
            if (a && a instanceof Matrix) {
                return this.multLeft(a.a, a.b, a.c, a.d, a.e, a.f);
            }
            var aNew = a * this.a + c * this.b,
                cNew = a * this.c + c * this.d,
                eNew = a * this.e + c * this.f + e;
            this.b = b * this.a + d * this.b;
            this.d = b * this.c + d * this.d;
            this.f = b * this.e + d * this.f + f;

            this.a = aNew;
            this.c = cNew;
            this.e = eNew;
            return this;
        };
        /*\
         * Matrix.invert
         [ method ]
         **
         * Returns an inverted version of the matrix
         = (object) @Matrix
        \*/
        matrixproto.invert = function () {
            var me = this,
                x = me.a * me.d - me.b * me.c;
            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
        };
        /*\
         * Matrix.clone
         [ method ]
         **
         * Returns a copy of the matrix
         = (object) @Matrix
        \*/
        matrixproto.clone = function () {
            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
        };
        /*\
         * Matrix.translate
         [ method ]
         **
         * Translate the matrix
         - x (number) horizontal offset distance
         - y (number) vertical offset distance
        \*/
        matrixproto.translate = function (x, y) {
            this.e += x * this.a + y * this.c;
            this.f += x * this.b + y * this.d;
            return this;
        };
        /*\
         * Matrix.scale
         [ method ]
         **
         * Scales the matrix
         - x (number) amount to be scaled, with `1` resulting in no change
         - y (number) #optional amount to scale along the vertical axis. (Otherwise `x` applies to both axes.)
         - cx (number) #optional horizontal origin point from which to scale
         - cy (number) #optional vertical origin point from which to scale
         * Default cx, cy is the middle point of the element.
        \*/
        matrixproto.scale = function (x, y, cx, cy) {
            y == null && (y = x);
            (cx || cy) && this.translate(cx, cy);
            this.a *= x;
            this.b *= x;
            this.c *= y;
            this.d *= y;
            (cx || cy) && this.translate(-cx, -cy);
            return this;
        };
        /*\
         * Matrix.rotate
         [ method ]
         **
         * Rotates the matrix
         - a (number) angle of rotation, in degrees
         - x (number) horizontal origin point from which to rotate
         - y (number) vertical origin point from which to rotate
        \*/
        matrixproto.rotate = function (a, x, y) {
            a = Snap.rad(a);
            x = x || 0;
            y = y || 0;
            var cos = +math.cos(a).toFixed(9),
                sin = +math.sin(a).toFixed(9);
            this.add(cos, sin, -sin, cos, x, y);
            return this.add(1, 0, 0, 1, -x, -y);
        };
        /*\
         * Matrix.skewX
         [ method ]
         **
         * Skews the matrix along the x-axis
         - x (number) Angle to skew along the x-axis (in degrees).
        \*/
        matrixproto.skewX = function (x) {
            return this.skew(x, 0);
        };
        /*\
         * Matrix.skewY
         [ method ]
         **
         * Skews the matrix along the y-axis
         - y (number) Angle to skew along the y-axis (in degrees).
        \*/
        matrixproto.skewY = function (y) {
            return this.skew(0, y);
        };
        /*\
         * Matrix.skew
         [ method ]
         **
         * Skews the matrix
         - y (number) Angle to skew along the y-axis (in degrees).
         - x (number) Angle to skew along the x-axis (in degrees).
        \*/
        matrixproto.skew = function (x, y) {
            x = x || 0;
            y = y || 0;
            x = Snap.rad(x);
            y = Snap.rad(y);
            var c = math.tan(x).toFixed(9);
            var b = math.tan(y).toFixed(9);
            return this.add(1, b, c, 1, 0, 0);
        };
        /*\
         * Matrix.x
         [ method ]
         **
         * Returns x coordinate for given point after transformation described by the matrix. See also @Matrix.y
         - x (number)
         - y (number)
         = (number) x
        \*/
        matrixproto.x = function (x, y) {
            return x * this.a + y * this.c + this.e;
        };
        /*\
         * Matrix.y
         [ method ]
         **
         * Returns y coordinate for given point after transformation described by the matrix. See also @Matrix.x
         - x (number)
         - y (number)
         = (number) y
        \*/
        matrixproto.y = function (x, y) {
            return x * this.b + y * this.d + this.f;
        };
        matrixproto.get = function (i) {
            return +this[Str.fromCharCode(97 + i)].toFixed(4);
        };
        matrixproto.toString = function () {
            return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
        };
        matrixproto.offset = function () {
            return [this.e.toFixed(4), this.f.toFixed(4)];
        };
        function norm(a) {
            return a[0] * a[0] + a[1] * a[1];
        }
        function normalize(a) {
            var mag = math.sqrt(norm(a));
            a[0] && (a[0] /= mag);
            a[1] && (a[1] /= mag);
        }
        /*\
         * Matrix.determinant
         [ method ]
         **
         * Finds determinant of the given matrix.
         = (number) determinant
        \*/
        matrixproto.determinant = function () {
            return this.a * this.d - this.b * this.c;
        };
        /*\
         * Matrix.split
         [ method ]
         **
         * Splits matrix into primitive transformations
         = (object) in format:
         o dx (number) translation by x
         o dy (number) translation by y
         o scalex (number) scale by x
         o scaley (number) scale by y
         o shear (number) shear
         o rotate (number) rotation in deg
         o isSimple (boolean) could it be represented via simple transformations
        \*/
        matrixproto.split = function () {
            var out = {};
            // translation
            out.dx = this.e;
            out.dy = this.f;

            // scale and shear
            var row = [[this.a, this.b], [this.c, this.d]];
            out.scalex = math.sqrt(norm(row[0]));
            normalize(row[0]);

            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

            out.scaley = math.sqrt(norm(row[1]));
            normalize(row[1]);
            out.shear /= out.scaley;

            if (this.determinant() < 0) {
                out.scalex = -out.scalex;
            }

            // rotation
            var sin = row[0][1],
                cos = row[1][1];
            if (cos < 0) {
                out.rotate = Snap.deg(math.acos(cos));
                if (sin < 0) {
                    out.rotate = 360 - out.rotate;
                }
            } else {
                out.rotate = Snap.deg(math.asin(sin));
            }

            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
            return out;
        };
        /*\
         * Matrix.toTransformString
         [ method ]
         **
         * Returns transform string that represents given matrix
         = (string) transform string
        \*/
        matrixproto.toTransformString = function (shorter) {
            var s = shorter || this.split();
            if (!+s.shear.toFixed(9)) {
                s.scalex = +s.scalex.toFixed(4);
                s.scaley = +s.scaley.toFixed(4);
                s.rotate = +s.rotate.toFixed(4);
                return  (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) +
                        (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E) +
                        (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E);
            } else {
                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
            }
        };
    })(Matrix.prototype);
    /*\
     * Snap.Matrix
     [ method ]
     **
     * Matrix constructor, extend on your own risk.
     * To create matrices use @Snap.matrix.
    \*/
    Snap.Matrix = Matrix;
    /*\
     * Snap.matrix
     [ method ]
     **
     * Utility method
     **
     * Returns a matrix based on the given parameters
     - a (number)
     - b (number)
     - c (number)
     - d (number)
     - e (number)
     - f (number)
     * or
     - svgMatrix (SVGMatrix)
     = (object) @Matrix
    \*/
    Snap.matrix = function (a, b, c, d, e, f) {
        return new Matrix(a, b, c, d, e, f);
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var has = "hasOwnProperty",
        make = Snap._.make,
        wrap = Snap._.wrap,
        is = Snap.is,
        getSomeDefs = Snap._.getSomeDefs,
        reURLValue = /^url\((['"]?)([^)]+)\1\)$/,
        $ = Snap._.$,
        URL = Snap.url,
        Str = String,
        separator = Snap._.separator,
        E = "";
    /*\
     * Snap.deurl
     [ method ]
     **
     * Unwraps path from `"url(<path>)"`.
     - value (string) url path
     = (string) unwrapped path
    \*/
    Snap.deurl = function (value) {
        var res = String(value).match(reURLValue);
        return res ? res[2] : value;
    }
    // Attributes event handlers
    eve.on("snap.util.attr.mask", function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value.type == "mask") {
                var mask = value;
            } else {
                mask = make("mask", getSomeDefs(this));
                mask.node.appendChild(value.node);
            }
            !mask.node.id && $(mask.node, {
                id: mask.id
            });
            $(this.node, {
                mask: URL(mask.id)
            });
        }
    });
    (function (clipIt) {
        eve.on("snap.util.attr.clip", clipIt);
        eve.on("snap.util.attr.clip-path", clipIt);
        eve.on("snap.util.attr.clipPath", clipIt);
    }(function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            var clip,
                node = value.node;
            while (node) {
                if (node.nodeName === "clipPath") {
                    clip = new Element(node);
                    break;
                }
                if (node.nodeName === "svg") {
                    clip = undefined;
                    break;
                }
                node = node.parentNode;
            }
            if (!clip) {
                clip = make("clipPath", getSomeDefs(this));
                clip.node.appendChild(value.node);
                !clip.node.id && $(clip.node, {
                    id: clip.id
                });
            }
            $(this.node, {
                "clip-path": URL(clip.node.id || clip.id)
            });
        }
    }));
    function fillStroke(name) {
        return function (value) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1 &&
                (value.node.firstChild.tagName == "radialGradient" ||
                value.node.firstChild.tagName == "linearGradient" ||
                value.node.firstChild.tagName == "pattern")) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value instanceof Element) {
                if (value.type == "radialGradient" || value.type == "linearGradient"
                   || value.type == "pattern") {
                    if (!value.node.id) {
                        $(value.node, {
                            id: value.id
                        });
                    }
                    var fill = URL(value.node.id);
                } else {
                    fill = value.attr(name);
                }
            } else {
                fill = Snap.color(value);
                if (fill.error) {
                    var grad = Snap(getSomeDefs(this).ownerSVGElement).gradient(value);
                    if (grad) {
                        if (!grad.node.id) {
                            $(grad.node, {
                                id: grad.id
                            });
                        }
                        fill = URL(grad.node.id);
                    } else {
                        fill = value;
                    }
                } else {
                    fill = Str(fill);
                }
            }
            var attrs = {};
            attrs[name] = fill;
            $(this.node, attrs);
            this.node.style[name] = E;
        };
    }
    eve.on("snap.util.attr.fill", fillStroke("fill"));
    eve.on("snap.util.attr.stroke", fillStroke("stroke"));
    var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
    eve.on("snap.util.grad.parse", function parseGrad(string) {
        string = Str(string);
        var tokens = string.match(gradrg);
        if (!tokens) {
            return null;
        }
        var type = tokens[1],
            params = tokens[2],
            stops = tokens[3];
        params = params.split(/\s*,\s*/).map(function (el) {
            return +el == el ? +el : el;
        });
        if (params.length == 1 && params[0] == 0) {
            params = [];
        }
        stops = stops.split("-");
        stops = stops.map(function (el) {
            el = el.split(":");
            var out = {
                color: el[0]
            };
            if (el[1]) {
                out.offset = parseFloat(el[1]);
            }
            return out;
        });
        var len = stops.length,
            start = 0,
            j = 0;
        function seed(i, end) {
            var step = (end - start) / (i - j);
            for (var k = j; k < i; k++) {
                stops[k].offset = +(+start + step * (k - j)).toFixed(2);
            }
            j = i;
            start = end;
        }
        len--;
        for (var i = 0; i < len; i++) if ("offset" in stops[i]) {
            seed(i, stops[i].offset);
        }
        stops[len].offset = stops[len].offset || 100;
        seed(len, stops[len].offset);
        return {
            type: type,
            params: params,
            stops: stops
        };
    });

    eve.on("snap.util.attr.d", function (value) {
        eve.stop();
        if (is(value, "array") && is(value[0], "array")) {
            value = Snap.path.toString.call(value);
        }
        value = Str(value);
        if (value.match(/[ruo]/i)) {
            value = Snap.path.toAbsolute(value);
        }
        $(this.node, {d: value});
    })(-1);
    eve.on("snap.util.attr.#text", function (value) {
        eve.stop();
        value = Str(value);
        var txt = glob.doc.createTextNode(value);
        while (this.node.firstChild) {
            this.node.removeChild(this.node.firstChild);
        }
        this.node.appendChild(txt);
    })(-1);
    eve.on("snap.util.attr.path", function (value) {
        eve.stop();
        this.attr({d: value});
    })(-1);
    eve.on("snap.util.attr.class", function (value) {
        eve.stop();
        this.node.className.baseVal = value;
    })(-1);
    eve.on("snap.util.attr.viewBox", function (value) {
        var vb;
        if (is(value, "object") && "x" in value) {
            vb = [value.x, value.y, value.width, value.height].join(" ");
        } else if (is(value, "array")) {
            vb = value.join(" ");
        } else {
            vb = value;
        }
        $(this.node, {
            viewBox: vb
        });
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.transform", function (value) {
        this.transform(value);
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.r", function (value) {
        if (this.type == "rect") {
            eve.stop();
            $(this.node, {
                rx: value,
                ry: value
            });
        }
    })(-1);
    eve.on("snap.util.attr.textpath", function (value) {
        eve.stop();
        if (this.type == "text") {
            var id, tp, node;
            if (!value && this.textPath) {
                tp = this.textPath;
                while (tp.node.firstChild) {
                    this.node.appendChild(tp.node.firstChild);
                }
                tp.remove();
                delete this.textPath;
                return;
            }
            if (is(value, "string")) {
                var defs = getSomeDefs(this),
                    path = wrap(defs.parentNode).path(value);
                defs.appendChild(path.node);
                id = path.id;
                path.attr({id: id});
            } else {
                value = wrap(value);
                if (value instanceof Element) {
                    id = value.attr("id");
                    if (!id) {
                        id = value.id;
                        value.attr({id: id});
                    }
                }
            }
            if (id) {
                tp = this.textPath;
                node = this.node;
                if (tp) {
                    tp.attr({"xlink:href": "#" + id});
                } else {
                    tp = $("textPath", {
                        "xlink:href": "#" + id
                    });
                    while (node.firstChild) {
                        tp.appendChild(node.firstChild);
                    }
                    node.appendChild(tp);
                    this.textPath = wrap(tp);
                }
            }
        }
    })(-1);
    eve.on("snap.util.attr.text", function (value) {
        if (this.type == "text") {
            var i = 0,
                node = this.node,
                tuner = function (chunk) {
                    var out = $("tspan");
                    if (is(chunk, "array")) {
                        for (var i = 0; i < chunk.length; i++) {
                            out.appendChild(tuner(chunk[i]));
                        }
                    } else {
                        out.appendChild(glob.doc.createTextNode(chunk));
                    }
                    out.normalize && out.normalize();
                    return out;
                };
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
            var tuned = tuner(value);
            while (tuned.firstChild) {
                node.appendChild(tuned.firstChild);
            }
        }
        eve.stop();
    })(-1);
    function setFontSize(value) {
        eve.stop();
        if (value == +value) {
            value += "px";
        }
        this.node.style.fontSize = value;
    }
    eve.on("snap.util.attr.fontSize", setFontSize)(-1);
    eve.on("snap.util.attr.font-size", setFontSize)(-1);


    eve.on("snap.util.getattr.transform", function () {
        eve.stop();
        return this.transform();
    })(-1);
    eve.on("snap.util.getattr.textpath", function () {
        eve.stop();
        return this.textPath;
    })(-1);
    // Markers
    (function () {
        function getter(end) {
            return function () {
                eve.stop();
                var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
                if (style == "none") {
                    return style;
                } else {
                    return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
                }
            };
        }
        function setter(end) {
            return function (value) {
                eve.stop();
                var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
                if (value == "" || !value) {
                    this.node.style[name] = "none";
                    return;
                }
                if (value.type == "marker") {
                    var id = value.node.id;
                    if (!id) {
                        $(value.node, {id: value.id});
                    }
                    this.node.style[name] = URL(id);
                    return;
                }
            };
        }
        eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
        eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
        eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
        eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
        eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
        eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
        eve.on("snap.util.attr.marker-end", setter("end"))(-1);
        eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
        eve.on("snap.util.attr.marker-start", setter("start"))(-1);
        eve.on("snap.util.attr.markerStart", setter("start"))(-1);
        eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
        eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
    }());
    eve.on("snap.util.getattr.r", function () {
        if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
            eve.stop();
            return $(this.node, "rx");
        }
    })(-1);
    function textExtract(node) {
        var out = [];
        var children = node.childNodes;
        for (var i = 0, ii = children.length; i < ii; i++) {
            var chi = children[i];
            if (chi.nodeType == 3) {
                out.push(chi.nodeValue);
            }
            if (chi.tagName == "tspan") {
                if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
                    out.push(chi.firstChild.nodeValue);
                } else {
                    out.push(textExtract(chi));
                }
            }
        }
        return out;
    }
    eve.on("snap.util.getattr.text", function () {
        if (this.type == "text" || this.type == "tspan") {
            eve.stop();
            var out = textExtract(this.node);
            return out.length == 1 ? out[0] : out;
        }
    })(-1);
    eve.on("snap.util.getattr.#text", function () {
        return this.node.textContent;
    })(-1);
    eve.on("snap.util.getattr.fill", function (internal) {
        if (internal) {
            return;
        }
        eve.stop();
        var value = eve("snap.util.getattr.fill", this, true).firstDefined();
        return Snap(Snap.deurl(value)) || value;
    })(-1);
    eve.on("snap.util.getattr.stroke", function (internal) {
        if (internal) {
            return;
        }
        eve.stop();
        var value = eve("snap.util.getattr.stroke", this, true).firstDefined();
        return Snap(Snap.deurl(value)) || value;
    })(-1);
    eve.on("snap.util.getattr.viewBox", function () {
        eve.stop();
        var vb = $(this.node, "viewBox");
        if (vb) {
            vb = vb.split(separator);
            return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.points", function () {
        var p = $(this.node, "points");
        eve.stop();
        if (p) {
            return p.split(separator);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.path", function () {
        var p = $(this.node, "d");
        eve.stop();
        return p;
    })(-1);
    eve.on("snap.util.getattr.class", function () {
        return this.node.className.baseVal;
    })(-1);
    function getFontSize() {
        eve.stop();
        return this.node.style.fontSize;
    }
    eve.on("snap.util.getattr.fontSize", getFontSize)(-1);
    eve.on("snap.util.getattr.font-size", getFontSize)(-1);
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var rgNotSpace = /\S+/g,
        rgBadSpace = /[\t\r\n\f]/g,
        rgTrim = /(^\s+|\s+$)/g,
        Str = String,
        elproto = Element.prototype;
    /*\
     * Element.addClass
     [ method ]
     **
     * Adds given class name or list of class names to the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.addClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;

        if (classes.length) {
            j = 0;
            while (clazz = classes[j++]) {
                pos = curClasses.indexOf(clazz);
                if (!~pos) {
                    curClasses.push(clazz);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.removeClass
     [ method ]
     **
     * Removes given class name or list of class names from the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.removeClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        if (curClasses.length) {
            j = 0;
            while (clazz = classes[j++]) {
                pos = curClasses.indexOf(clazz);
                if (~pos) {
                    curClasses.splice(pos, 1);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.hasClass
     [ method ]
     **
     * Checks if the element has a given class name in the list of class names applied to it.
     - value (string) class name
     **
     = (boolean) `true` if the element has given class
    \*/
    elproto.hasClass = function (value) {
        var elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [];
        return !!~curClasses.indexOf(value);
    };
    /*\
     * Element.toggleClass
     [ method ]
     **
     * Add or remove one or more classes from the element, depending on either
     * the class’s presence or the value of the `flag` argument.
     - value (string) class name or space separated list of class names
     - flag (boolean) value to determine whether the class should be added or removed
     **
     = (Element) original element.
    \*/
    elproto.toggleClass = function (value, flag) {
        if (flag != null) {
            if (flag) {
                return this.addClass(value);
            } else {
                return this.removeClass(value);
            }
        }
        var classes = (value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        j = 0;
        while (clazz = classes[j++]) {
            pos = curClasses.indexOf(clazz);
            if (~pos) {
                curClasses.splice(pos, 1);
            } else {
                curClasses.push(clazz);
            }
        }

        finalValue = curClasses.join(" ");
        if (className != finalValue) {
            elem.className.baseVal = finalValue;
        }
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var operators = {
            "+": function (x, y) {
                    return x + y;
                },
            "-": function (x, y) {
                    return x - y;
                },
            "/": function (x, y) {
                    return x / y;
                },
            "*": function (x, y) {
                    return x * y;
                }
        },
        Str = String,
        reUnit = /[a-z]+$/i,
        reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    eve.on("snap.util.attr", function (val) {
        var plus = Str(val).match(reAddon);
        if (plus) {
            var evnt = eve.nt(),
                name = evnt.substring(evnt.lastIndexOf(".") + 1),
                a = this.attr(name),
                atr = {};
            eve.stop();
            var unit = plus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[plus[1]];
            if (aUnit && aUnit == unit) {
                val = op(parseFloat(a), +plus[2]);
            } else {
                a = this.asPX(name);
                val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
            }
            if (isNaN(a) || isNaN(val)) {
                return;
            }
            atr[name] = val;
            this.attr(atr);
        }
    })(-10);
    eve.on("snap.util.equal", function (name, b) {
        var A, B, a = Str(this.attr(name) || ""),
            el = this,
            bplus = Str(b).match(reAddon);
        if (bplus) {
            eve.stop();
            var unit = bplus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[bplus[1]];
            if (aUnit && aUnit == unit) {
                return {
                    from: parseFloat(a),
                    to: op(parseFloat(a), +bplus[2]),
                    f: getUnit(aUnit)
                };
            } else {
                a = this.asPX(name);
                return {
                    from: a,
                    to: op(a, this.asPX(name, bplus[2] + unit)),
                    f: getNumber
                };
            }
        }
    })(-10);
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var proto = Paper.prototype,
        is = Snap.is;
    /*\
     * Paper.rect
     [ method ]
     *
     * Draws a rectangle
     **
     - x (number) x coordinate of the top left corner
     - y (number) y coordinate of the top left corner
     - width (number) width
     - height (number) height
     - rx (number) #optional horizontal radius for rounded corners, default is 0
     - ry (number) #optional vertical radius for rounded corners, default is rx or 0
     = (object) the `rect` element
     **
     > Usage
     | // regular rectangle
     | var c = paper.rect(10, 10, 50, 50);
     | // rectangle with rounded corners
     | var c = paper.rect(40, 40, 50, 50, 10);
    \*/
    proto.rect = function (x, y, w, h, rx, ry) {
        var attr;
        if (ry == null) {
            ry = rx;
        }
        if (is(x, "object") && x == "[object Object]") {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                width: w,
                height: h
            };
            if (rx != null) {
                attr.rx = rx;
                attr.ry = ry;
            }
        }
        return this.el("rect", attr);
    };
    /*\
     * Paper.circle
     [ method ]
     **
     * Draws a circle
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - r (number) radius
     = (object) the `circle` element
     **
     > Usage
     | var c = paper.circle(50, 50, 40);
    \*/
    proto.circle = function (cx, cy, r) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr = {
                cx: cx,
                cy: cy,
                r: r
            };
        }
        return this.el("circle", attr);
    };

    var preload = (function () {
        function onerror() {
            this.parentNode.removeChild(this);
        }
        return function (src, f) {
            var img = glob.doc.createElement("img"),
                body = glob.doc.body;
            img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
            img.onload = function () {
                f.call(img);
                img.onload = img.onerror = null;
                body.removeChild(img);
            };
            img.onerror = onerror;
            body.appendChild(img);
            img.src = src;
        };
    }());

    /*\
     * Paper.image
     [ method ]
     **
     * Places an image on the surface
     **
     - src (string) URI of the source image
     - x (number) x offset position
     - y (number) y offset position
     - width (number) width of the image
     - height (number) height of the image
     = (object) the `image` element
     * or
     = (object) Snap element object with type `image`
     **
     > Usage
     | var c = paper.image("apple.png", 10, 10, 80, 80);
    \*/
    proto.image = function (src, x, y, width, height) {
        var el = this.el("image");
        if (is(src, "object") && "src" in src) {
            el.attr(src);
        } else if (src != null) {
            var set = {
                "xlink:href": src,
                preserveAspectRatio: "none"
            };
            if (x != null && y != null) {
                set.x = x;
                set.y = y;
            }
            if (width != null && height != null) {
                set.width = width;
                set.height = height;
            } else {
                preload(src, function () {
                    Snap._.$(el.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    });
                });
            }
            Snap._.$(el.node, set);
        }
        return el;
    };
    /*\
     * Paper.ellipse
     [ method ]
     **
     * Draws an ellipse
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - rx (number) horizontal radius
     - ry (number) vertical radius
     = (object) the `ellipse` element
     **
     > Usage
     | var c = paper.ellipse(50, 50, 40, 20);
    \*/
    proto.ellipse = function (cx, cy, rx, ry) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr ={
                cx: cx,
                cy: cy,
                rx: rx,
                ry: ry
            };
        }
        return this.el("ellipse", attr);
    };
    // SIERRA Paper.path(): Unclear from the link what a Catmull-Rom curveto is, and why it would make life any easier.
    /*\
     * Paper.path
     [ method ]
     **
     * Creates a `<path>` element using the given string as the path's definition
     - pathString (string) #optional path string in SVG format
     * Path string consists of one-letter commands, followed by comma seprarated arguments in numerical form. Example:
     | "M10,20L30,40"
     * This example features two commands: `M`, with arguments `(10, 20)` and `L` with arguments `(30, 40)`. Uppercase letter commands express coordinates in absolute terms, while lowercase commands express them in relative terms from the most recently declared coordinates.
     *
     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a> or <a href="https://developer.mozilla.org/en/SVG/Tutorial/Paths">article about path strings at MDN</a>.</p>
     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
     * * _Catmull-Rom curveto_ is a not standard SVG command and added to make life easier.
     * Note: there is a special case when a path consists of only three commands: `M10,10R…z`. In this case the path connects back to its starting point.
     > Usage
     | var c = paper.path("M10 10L90 90");
     | // draw a diagonal line:
     | // move to 10,10, line to 90,90
    \*/
    proto.path = function (d) {
        var attr;
        if (is(d, "object") && !is(d, "array")) {
            attr = d;
        } else if (d) {
            attr = {d: d};
        }
        return this.el("path", attr);
    };
    /*\
     * Paper.g
     [ method ]
     **
     * Creates a group element
     **
     - varargs (…) #optional elements to nest within the group
     = (object) the `g` element
     **
     > Usage
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g(c2, c1); // note that the order of elements is different
     * or
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g();
     | g.add(c2, c1);
    \*/
    /*\
     * Paper.group
     [ method ]
     **
     * See @Paper.g
    \*/
    proto.group = proto.g = function (first) {
        var attr,
            el = this.el("g");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.svg
     [ method ]
     **
     * Creates a nested SVG element.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `svg` element
     **
    \*/
    proto.svg = function (x, y, width, height, vbx, vby, vbw, vbh) {
        var attrs = {};
        if (is(x, "object") && y == null) {
            attrs = x;
        } else {
            if (x != null) {
                attrs.x = x;
            }
            if (y != null) {
                attrs.y = y;
            }
            if (width != null) {
                attrs.width = width;
            }
            if (height != null) {
                attrs.height = height;
            }
            if (vbx != null && vby != null && vbw != null && vbh != null) {
                attrs.viewBox = [vbx, vby, vbw, vbh];
            }
        }
        return this.el("svg", attrs);
    };
    /*\
     * Paper.mask
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a mask.
     **
     = (object) the `mask` element
     **
    \*/
    proto.mask = function (first) {
        var attr,
            el = this.el("mask");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.ptrn
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a pattern.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `pattern` element
     **
    \*/
    proto.ptrn = function (x, y, width, height, vx, vy, vw, vh) {
        if (is(x, "object")) {
            var attr = x;
        } else {
            attr = {patternUnits: "userSpaceOnUse"};
            if (x) {
                attr.x = x;
            }
            if (y) {
                attr.y = y;
            }
            if (width != null) {
                attr.width = width;
            }
            if (height != null) {
                attr.height = height;
            }
            if (vx != null && vy != null && vw != null && vh != null) {
                attr.viewBox = [vx, vy, vw, vh];
            } else {
                attr.viewBox = [x || 0, y || 0, width || 0, height || 0];
            }
        }
        return this.el("pattern", attr);
    };
    /*\
     * Paper.use
     [ method ]
     **
     * Creates a <use> element.
     - id (string) @optional id of element to link
     * or
     - id (Element) @optional element to link
     **
     = (object) the `use` element
     **
    \*/
    proto.use = function (id) {
        if (id != null) {
            if (id instanceof Element) {
                if (!id.attr("id")) {
                    id.attr({id: Snap._.id(id)});
                }
                id = id.attr("id");
            }
            if (String(id).charAt() == "#") {
                id = id.substring(1);
            }
            return this.el("use", {"xlink:href": "#" + id});
        } else {
            return Element.prototype.use.call(this);
        }
    };
    /*\
     * Paper.symbol
     [ method ]
     **
     * Creates a <symbol> element.
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     = (object) the `symbol` element
     **
    \*/
    proto.symbol = function (vx, vy, vw, vh) {
        var attr = {};
        if (vx != null && vy != null && vw != null && vh != null) {
            attr.viewBox = [vx, vy, vw, vh];
        }

        return this.el("symbol", attr);
    };
    /*\
     * Paper.text
     [ method ]
     **
     * Draws a text string
     **
     - x (number) x coordinate position
     - y (number) y coordinate position
     - text (string|array) The text string to draw or array of strings to nest within separate `<tspan>` elements
     = (object) the `text` element
     **
     > Usage
     | var t1 = paper.text(50, 50, "Snap");
     | var t2 = paper.text(50, 50, ["S","n","a","p"]);
     | // Text path usage
     | t1.attr({textpath: "M10,10L100,100"});
     | // or
     | var pth = paper.path("M10,10L100,100");
     | t1.attr({textpath: pth});
    \*/
    proto.text = function (x, y, text) {
        var attr = {};
        if (is(x, "object")) {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                text: text || ""
            };
        }
        return this.el("text", attr);
    };
    /*\
     * Paper.line
     [ method ]
     **
     * Draws a line
     **
     - x1 (number) x coordinate position of the start
     - y1 (number) y coordinate position of the start
     - x2 (number) x coordinate position of the end
     - y2 (number) y coordinate position of the end
     = (object) the `line` element
     **
     > Usage
     | var t1 = paper.line(50, 50, 100, 100);
    \*/
    proto.line = function (x1, y1, x2, y2) {
        var attr = {};
        if (is(x1, "object")) {
            attr = x1;
        } else if (x1 != null) {
            attr = {
                x1: x1,
                x2: x2,
                y1: y1,
                y2: y2
            };
        }
        return this.el("line", attr);
    };
    /*\
     * Paper.polyline
     [ method ]
     **
     * Draws a polyline
     **
     - points (array) array of points
     * or
     - varargs (…) points
     = (object) the `polyline` element
     **
     > Usage
     | var p1 = paper.polyline([10, 10, 100, 100]);
     | var p2 = paper.polyline(10, 10, 100, 100);
    \*/
    proto.polyline = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = {points: points};
        }
        return this.el("polyline", attr);
    };
    /*\
     * Paper.polygon
     [ method ]
     **
     * Draws a polygon. See @Paper.polyline
    \*/
    proto.polygon = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = {points: points};
        }
        return this.el("polygon", attr);
    };
    // gradients
    (function () {
        var $ = Snap._.$;
        // gradients' helpers
        /*\
         * Element.stops
         [ method ]
         **
         * Only for gradients!
         * Returns array of gradient stops elements.
         = (array) the stops array.
        \*/
        function Gstops() {
            return this.selectAll("stop");
        }
        /*\
         * Element.addStop
         [ method ]
         **
         * Only for gradients!
         * Adds another stop to the gradient.
         - color (string) stops color
         - offset (number) stops offset 0..100
         = (object) gradient element
        \*/
        function GaddStop(color, offset) {
            var stop = $("stop"),
                attr = {
                    offset: +offset + "%"
                };
            color = Snap.color(color);
            attr["stop-color"] = color.hex;
            if (color.opacity < 1) {
                attr["stop-opacity"] = color.opacity;
            }
            $(stop, attr);
            var stops = this.stops(),
                inserted;
            for (var i = 0; i < stops.length; i++) {
                var stopOffset = parseFloat(stops[i].attr("offset"));
                if (stopOffset > offset) {
                    this.node.insertBefore(stop, stops[i].node);
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                this.node.appendChild(stop);
            }
            return this;
        }
        function GgetBBox() {
            if (this.type == "linearGradient") {
                var x1 = $(this.node, "x1") || 0,
                    x2 = $(this.node, "x2") || 1,
                    y1 = $(this.node, "y1") || 0,
                    y2 = $(this.node, "y2") || 0;
                return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
            } else {
                var cx = this.node.cx || .5,
                    cy = this.node.cy || .5,
                    r = this.node.r || 0;
                return Snap._.box(cx - r, cy - r, r * 2, r * 2);
            }
        }
        /*\
         * Element.setStops
         [ method ]
         **
         * Only for gradients!
         * Updates stops of the gradient based on passed gradient descriptor. See @Ppaer.gradient
         - str (string) gradient descriptor part after `()`.
         = (object) gradient element
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         | g.setStops("#fff-#000-#f00-#fc0");
        \*/
        function GsetStops(str) {
            var grad = str,
                stops = this.stops();
            if (typeof str == "string") {
                grad = eve("snap.util.grad.parse", null, "l(0,0,0,1)" + str).firstDefined().stops;
            }
            if (!Snap.is(grad, "array")) {
                return;
            }
            for (var i = 0; i < stops.length; i++) {
                if (grad[i]) {
                    var color = Snap.color(grad[i].color),
                        attr = {"offset": grad[i].offset + "%"};
                    attr["stop-color"] = color.hex;
                    if (color.opacity < 1) {
                        attr["stop-opacity"] = color.opacity;
                    }
                    stops[i].attr(attr);
                } else {
                    stops[i].remove();
                }
            }
            for (i = stops.length; i < grad.length; i++) {
                this.addStop(grad[i].color, grad[i].offset);
            }
            return this;
        }
        function gradient(defs, str) {
            var grad = eve("snap.util.grad.parse", null, str).firstDefined(),
                el;
            if (!grad) {
                return null;
            }
            grad.params.unshift(defs);
            if (grad.type.toLowerCase() == "l") {
                el = gradientLinear.apply(0, grad.params);
            } else {
                el = gradientRadial.apply(0, grad.params);
            }
            if (grad.type != grad.type.toLowerCase()) {
                $(el.node, {
                    gradientUnits: "userSpaceOnUse"
                });
            }
            var stops = grad.stops,
                len = stops.length;
            for (var i = 0; i < len; i++) {
                var stop = stops[i];
                el.addStop(stop.color, stop.offset);
            }
            return el;
        }
        function gradientLinear(defs, x1, y1, x2, y2) {
            var el = Snap._.make("linearGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            el.setStops = GsetStops;
            if (x1 != null) {
                $(el.node, {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2
                });
            }
            return el;
        }
        function gradientRadial(defs, cx, cy, r, fx, fy) {
            var el = Snap._.make("radialGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            if (cx != null) {
                $(el.node, {
                    cx: cx,
                    cy: cy,
                    r: r
                });
            }
            if (fx != null && fy != null) {
                $(el.node, {
                    fx: fx,
                    fy: fy
                });
            }
            return el;
        }
        /*\
         * Paper.gradient
         [ method ]
         **
         * Creates a gradient element
         **
         - gradient (string) gradient descriptor
         > Gradient Descriptor
         * The gradient descriptor is an expression formatted as
         * follows: `<type>(<coords>)<colors>`.  The `<type>` can be
         * either linear or radial.  The uppercase `L` or `R` letters
         * indicate absolute coordinates offset from the SVG surface.
         * Lowercase `l` or `r` letters indicate coordinates
         * calculated relative to the element to which the gradient is
         * applied.  Coordinates specify a linear gradient vector as
         * `x1`, `y1`, `x2`, `y2`, or a radial gradient as `cx`, `cy`,
         * `r` and optional `fx`, `fy` specifying a focal point away
         * from the center of the circle. Specify `<colors>` as a list
         * of dash-separated CSS color values.  Each color may be
         * followed by a custom offset value, separated with a colon
         * character.
         > Examples
         * Linear gradient, relative from top-left corner to bottom-right
         * corner, from black through red to white:
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         * Linear gradient, absolute from (0, 0) to (100, 100), from black
         * through red at 25% to white:
         | var g = paper.gradient("L(0, 0, 100, 100)#000-#f00:25-#fff");
         * Radial gradient, relative from the center of the element with radius
         * half the width, from black to white:
         | var g = paper.gradient("r(0.5, 0.5, 0.5)#000-#fff");
         * To apply the gradient:
         | paper.circle(50, 50, 40).attr({
         |     fill: g
         | });
         = (object) the `gradient` element
        \*/
        proto.gradient = function (str) {
            return gradient(this.defs, str);
        };
        proto.gradientLinear = function (x1, y1, x2, y2) {
            return gradientLinear(this.defs, x1, y1, x2, y2);
        };
        proto.gradientRadial = function (cx, cy, r, fx, fy) {
            return gradientRadial(this.defs, cx, cy, r, fx, fy);
        };
        /*\
         * Paper.toString
         [ method ]
         **
         * Returns SVG code for the @Paper
         = (string) SVG code for the @Paper
        \*/
        proto.toString = function () {
            var doc = this.node.ownerDocument,
                f = doc.createDocumentFragment(),
                d = doc.createElement("div"),
                svg = this.node.cloneNode(true),
                res;
            f.appendChild(d);
            d.appendChild(svg);
            Snap._.$(svg, {xmlns: "http://www.w3.org/2000/svg"});
            res = d.innerHTML;
            f.removeChild(f.firstChild);
            return res;
        };
        /*\
         * Paper.toDataURL
         [ method ]
         **
         * Returns SVG code for the @Paper as Data URI string.
         = (string) Data URI string
        \*/
        proto.toDataURL = function () {
            if (window && window.btoa) {
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
            }
        };
        /*\
         * Paper.clear
         [ method ]
         **
         * Removes all child nodes of the paper, except <defs>.
        \*/
        proto.clear = function () {
            var node = this.node.firstChild,
                next;
            while (node) {
                next = node.nextSibling;
                if (node.tagName != "defs") {
                    node.parentNode.removeChild(node);
                } else {
                    proto.clear.call({node: node});
                }
                node = next;
            }
        };
    }());
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        is = Snap.is,
        clone = Snap._.clone,
        has = "hasOwnProperty",
        p2s = /,?([a-z]),?/gi,
        toFloat = parseFloat,
        math = Math,
        PI = math.PI,
        mmin = math.min,
        mmax = math.max,
        pow = math.pow,
        abs = math.abs;
    function paths(ps) {
        var p = paths.ps = paths.ps || {};
        if (p[ps]) {
            p[ps].sleep = 100;
        } else {
            p[ps] = {
                sleep: 100
            };
        }
        setTimeout(function () {
            for (var key in p) if (p[has](key) && key != ps) {
                p[key].sleep--;
                !p[key].sleep && delete p[key];
            }
        });
        return p[ps];
    }
    function box(x, y, width, height) {
        if (x == null) {
            x = y = width = height = 0;
        }
        if (y == null) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        return {
            x: x,
            y: y,
            width: width,
            w: width,
            height: height,
            h: height,
            x2: x + width,
            y2: y + height,
            cx: x + width / 2,
            cy: y + height / 2,
            r1: math.min(width, height) / 2,
            r2: math.max(width, height) / 2,
            r0: math.sqrt(width * width + height * height) / 2,
            path: rectPath(x, y, width, height),
            vb: [x, y, width, height].join(" ")
        };
    }
    function toString() {
        return this.join(",").replace(p2s, "$1");
    }
    function pathClone(pathArray) {
        var res = clone(pathArray);
        res.toString = toString;
        return res;
    }
    function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
        if (length == null) {
            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
        } else {
            return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y,
                getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
        }
    }
    function getLengthFactory(istotal, subpath) {
        function O(val) {
            return +(+val).toFixed(3);
        }
        return Snap._.cacher(function (path, length, onlystart) {
            if (path instanceof Element) {
                path = path.attr("d");
            }
            path = path2curve(path);
            var x, y, p, l, sp = "", subpaths = {}, point,
                len = 0;
            for (var i = 0, ii = path.length; i < ii; i++) {
                p = path[i];
                if (p[0] == "M") {
                    x = +p[1];
                    y = +p[2];
                } else {
                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                    if (len + l > length) {
                        if (subpath && !subpaths.start) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            sp += [
                                "C" + O(point.start.x),
                                O(point.start.y),
                                O(point.m.x),
                                O(point.m.y),
                                O(point.x),
                                O(point.y)
                            ];
                            if (onlystart) {return sp;}
                            subpaths.start = sp;
                            sp = [
                                "M" + O(point.x),
                                O(point.y) + "C" + O(point.n.x),
                                O(point.n.y),
                                O(point.end.x),
                                O(point.end.y),
                                O(p[5]),
                                O(p[6])
                            ].join();
                            len += l;
                            x = +p[5];
                            y = +p[6];
                            continue;
                        }
                        if (!istotal && !subpath) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            return point;
                        }
                    }
                    len += l;
                    x = +p[5];
                    y = +p[6];
                }
                sp += p.shift() + p;
            }
            subpaths.end = sp;
            point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
            return point;
        }, null, Snap._.clone);
    }
    var getTotalLength = getLengthFactory(1),
        getPointAtLength = getLengthFactory(),
        getSubpathsAtLength = getLengthFactory(0, 1);
    function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t,
            t13 = pow(t1, 3),
            t12 = pow(t1, 2),
            t2 = t * t,
            t3 = t2 * t,
            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
            ax = t1 * p1x + t * c1x,
            ay = t1 * p1y + t * c1y,
            cx = t1 * c2x + t * p2x,
            cy = t1 * c2y + t * p2y,
            alpha = 90 - math.atan2(mx - nx, my - ny) * 180 / PI;
        // (mx > nx || my < ny) && (alpha += 180);
        return {
            x: x,
            y: y,
            m: {x: mx, y: my},
            n: {x: nx, y: ny},
            start: {x: ax, y: ay},
            end: {x: cx, y: cy},
            alpha: alpha
        };
    }
    function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        if (!Snap.is(p1x, "array")) {
            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
        }
        var bbox = curveDim.apply(null, p1x);
        return box(
            bbox.min.x,
            bbox.min.y,
            bbox.max.x - bbox.min.x,
            bbox.max.y - bbox.min.y
        );
    }
    function isPointInsideBBox(bbox, x, y) {
        return  x >= bbox.x &&
                x <= bbox.x + bbox.width &&
                y >= bbox.y &&
                y <= bbox.y + bbox.height;
    }
    function isBBoxIntersect(bbox1, bbox2) {
        bbox1 = box(bbox1);
        bbox2 = box(bbox2);
        return isPointInsideBBox(bbox2, bbox1.x, bbox1.y)
            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y)
            || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2)
            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2)
            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y)
            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y)
            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2)
            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2)
            || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x
                || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
            && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y
                || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
    }
    function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
        return t * t2 - 3 * p1 + 3 * p2;
    }
    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (z == null) {
            z = 1;
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z;
        var z2 = z / 2,
            n = 12,
            Tvalues = [-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],
            Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
            sum = 0;
        for (var i = 0; i < n; i++) {
            var ct = z2 * Tvalues[i] + z2,
                xbase = base3(ct, x1, x2, x3, x4),
                ybase = base3(ct, y1, y2, y3, y4),
                comb = xbase * xbase + ybase * ybase;
            sum += Cvalues[i] * math.sqrt(comb);
        }
        return z2 * sum;
    }
    function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
            return;
        }
        var t = 1,
            step = t / 2,
            t2 = t - step,
            l,
            e = .01;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        while (abs(l - ll) > e) {
            step /= 2;
            t2 += (l < ll ? 1 : -1) * step;
            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        }
        return t2;
    }
    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (
            mmax(x1, x2) < mmin(x3, x4) ||
            mmin(x1, x2) > mmax(x3, x4) ||
            mmax(y1, y2) < mmin(y3, y4) ||
            mmin(y1, y2) > mmax(y3, y4)
        ) {
            return;
        }
        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (!denominator) {
            return;
        }
        var px = nx / denominator,
            py = ny / denominator,
            px2 = +px.toFixed(2),
            py2 = +py.toFixed(2);
        if (
            px2 < +mmin(x1, x2).toFixed(2) ||
            px2 > +mmax(x1, x2).toFixed(2) ||
            px2 < +mmin(x3, x4).toFixed(2) ||
            px2 > +mmax(x3, x4).toFixed(2) ||
            py2 < +mmin(y1, y2).toFixed(2) ||
            py2 > +mmax(y1, y2).toFixed(2) ||
            py2 < +mmin(y3, y4).toFixed(2) ||
            py2 > +mmax(y3, y4).toFixed(2)
        ) {
            return;
        }
        return {x: px, y: py};
    }
    function inter(bez1, bez2) {
        return interHelper(bez1, bez2);
    }
    function interCount(bez1, bez2) {
        return interHelper(bez1, bez2, 1);
    }
    function interHelper(bez1, bez2, justCount) {
        var bbox1 = bezierBBox(bez1),
            bbox2 = bezierBBox(bez2);
        if (!isBBoxIntersect(bbox1, bbox2)) {
            return justCount ? 0 : [];
        }
        var l1 = bezlen.apply(0, bez1),
            l2 = bezlen.apply(0, bez2),
            n1 = ~~(l1 / 8),
            n2 = ~~(l2 / 8),
            dots1 = [],
            dots2 = [],
            xy = {},
            res = justCount ? 0 : [];
        for (var i = 0; i < n1 + 1; i++) {
            var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
            dots1.push({x: p.x, y: p.y, t: i / n1});
        }
        for (i = 0; i < n2 + 1; i++) {
            p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
            dots2.push({x: p.x, y: p.y, t: i / n2});
        }
        for (i = 0; i < n1; i++) {
            for (var j = 0; j < n2; j++) {
                var di = dots1[i],
                    di1 = dots1[i + 1],
                    dj = dots2[j],
                    dj1 = dots2[j + 1],
                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
                if (is) {
                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                        continue;
                    }
                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                    if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                        if (justCount) {
                            res++;
                        } else {
                            res.push({
                                x: is.x,
                                y: is.y,
                                t1: t1,
                                t2: t2
                            });
                        }
                    }
                }
            }
        }
        return res;
    }
    function pathIntersection(path1, path2) {
        return interPathHelper(path1, path2);
    }
    function pathIntersectionNumber(path1, path2) {
        return interPathHelper(path1, path2, 1);
    }
    function interPathHelper(path1, path2, justCount) {
        path1 = path2curve(path1);
        path2 = path2curve(path2);
        var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
            res = justCount ? 0 : [];
        for (var i = 0, ii = path1.length; i < ii; i++) {
            var pi = path1[i];
            if (pi[0] == "M") {
                x1 = x1m = pi[1];
                y1 = y1m = pi[2];
            } else {
                if (pi[0] == "C") {
                    bez1 = [x1, y1].concat(pi.slice(1));
                    x1 = bez1[6];
                    y1 = bez1[7];
                } else {
                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                    x1 = x1m;
                    y1 = y1m;
                }
                for (var j = 0, jj = path2.length; j < jj; j++) {
                    var pj = path2[j];
                    if (pj[0] == "M") {
                        x2 = x2m = pj[1];
                        y2 = y2m = pj[2];
                    } else {
                        if (pj[0] == "C") {
                            bez2 = [x2, y2].concat(pj.slice(1));
                            x2 = bez2[6];
                            y2 = bez2[7];
                        } else {
                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                            x2 = x2m;
                            y2 = y2m;
                        }
                        var intr = interHelper(bez1, bez2, justCount);
                        if (justCount) {
                            res += intr;
                        } else {
                            for (var k = 0, kk = intr.length; k < kk; k++) {
                                intr[k].segment1 = i;
                                intr[k].segment2 = j;
                                intr[k].bez1 = bez1;
                                intr[k].bez2 = bez2;
                            }
                            res = res.concat(intr);
                        }
                    }
                }
            }
        }
        return res;
    }
    function isPointInsidePath(path, x, y) {
        var bbox = pathBBox(path);
        return isPointInsideBBox(bbox, x, y) &&
               interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
    }
    function pathBBox(path) {
        var pth = paths(path);
        if (pth.bbox) {
            return clone(pth.bbox);
        }
        if (!path) {
            return box();
        }
        path = path2curve(path);
        var x = 0,
            y = 0,
            X = [],
            Y = [],
            p;
        for (var i = 0, ii = path.length; i < ii; i++) {
            p = path[i];
            if (p[0] == "M") {
                x = p[1];
                y = p[2];
                X.push(x);
                Y.push(y);
            } else {
                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                X = X.concat(dim.min.x, dim.max.x);
                Y = Y.concat(dim.min.y, dim.max.y);
                x = p[5];
                y = p[6];
            }
        }
        var xmin = mmin.apply(0, X),
            ymin = mmin.apply(0, Y),
            xmax = mmax.apply(0, X),
            ymax = mmax.apply(0, Y),
            bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
        pth.bbox = clone(bb);
        return bb;
    }
    function rectPath(x, y, w, h, r) {
        if (r) {
            return [
                ["M", +x + +r, y],
                ["l", w - r * 2, 0],
                ["a", r, r, 0, 0, 1, r, r],
                ["l", 0, h - r * 2],
                ["a", r, r, 0, 0, 1, -r, r],
                ["l", r * 2 - w, 0],
                ["a", r, r, 0, 0, 1, -r, -r],
                ["l", 0, r * 2 - h],
                ["a", r, r, 0, 0, 1, r, -r],
                ["z"]
            ];
        }
        var res = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
        res.toString = toString;
        return res;
    }
    function ellipsePath(x, y, rx, ry, a) {
        if (a == null && ry == null) {
            ry = rx;
        }
        x = +x;
        y = +y;
        rx = +rx;
        ry = +ry;
        if (a != null) {
            var rad = Math.PI / 180,
                x1 = x + rx * Math.cos(-ry * rad),
                x2 = x + rx * Math.cos(-a * rad),
                y1 = y + rx * Math.sin(-ry * rad),
                y2 = y + rx * Math.sin(-a * rad),
                res = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
        } else {
            res = [
                ["M", x, y],
                ["m", 0, -ry],
                ["a", rx, ry, 0, 1, 1, 0, 2 * ry],
                ["a", rx, ry, 0, 1, 1, 0, -2 * ry],
                ["z"]
            ];
        }
        res.toString = toString;
        return res;
    }
    var unit2px = Snap._unit2px,
        getPath = {
        path: function (el) {
            return el.attr("path");
        },
        circle: function (el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx, attr.cy, attr.r);
        },
        ellipse: function (el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
        },
        rect: function (el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
        },
        image: function (el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
        },
        line: function (el) {
            return "M" + [el.attr("x1") || 0, el.attr("y1") || 0, el.attr("x2"), el.attr("y2")];
        },
        polyline: function (el) {
            return "M" + el.attr("points");
        },
        polygon: function (el) {
            return "M" + el.attr("points") + "z";
        },
        deflt: function (el) {
            var bbox = el.node.getBBox();
            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
        }
    };
    function pathToRelative(pathArray) {
        var pth = paths(pathArray),
            lowerCase = String.prototype.toLowerCase;
        if (pth.rel) {
            return pathClone(pth.rel);
        }
        if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) {
            pathArray = Snap.parsePathString(pathArray);
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0;
        if (pathArray[0][0] == "M") {
            x = pathArray[0][1];
            y = pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res.push(["M", x, y]);
        }
        for (var i = start, ii = pathArray.length; i < ii; i++) {
            var r = res[i] = [],
                pa = pathArray[i];
            if (pa[0] != lowerCase.call(pa[0])) {
                r[0] = lowerCase.call(pa[0]);
                switch (r[0]) {
                    case "a":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] - x).toFixed(3);
                        r[7] = +(pa[7] - y).toFixed(3);
                        break;
                    case "v":
                        r[1] = +(pa[1] - y).toFixed(3);
                        break;
                    case "m":
                        mx = pa[1];
                        my = pa[2];
                    default:
                        for (var j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
                        }
                }
            } else {
                r = res[i] = [];
                if (pa[0] == "m") {
                    mx = pa[1] + x;
                    my = pa[2] + y;
                }
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    res[i][k] = pa[k];
                }
            }
            var len = res[i].length;
            switch (res[i][0]) {
                case "z":
                    x = mx;
                    y = my;
                    break;
                case "h":
                    x += +res[i][len - 1];
                    break;
                case "v":
                    y += +res[i][len - 1];
                    break;
                default:
                    x += +res[i][len - 2];
                    y += +res[i][len - 1];
            }
        }
        res.toString = toString;
        pth.rel = pathClone(res);
        return res;
    }
    function pathToAbsolute(pathArray) {
        var pth = paths(pathArray);
        if (pth.abs) {
            return pathClone(pth.abs);
        }
        if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) { // rough assumption
            pathArray = Snap.parsePathString(pathArray);
        }
        if (!pathArray || !pathArray.length) {
            return [["M", 0, 0]];
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0,
            pa0;
        if (pathArray[0][0] == "M") {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res[0] = ["M", x, y];
        }
        var crz = pathArray.length == 3 &&
            pathArray[0][0] == "M" &&
            pathArray[1][0].toUpperCase() == "R" &&
            pathArray[2][0].toUpperCase() == "Z";
        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
            res.push(r = []);
            pa = pathArray[i];
            pa0 = pa[0];
            if (pa0 != pa0.toUpperCase()) {
                r[0] = pa0.toUpperCase();
                switch (r[0]) {
                    case "A":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +pa[6] + x;
                        r[7] = +pa[7] + y;
                        break;
                    case "V":
                        r[1] = +pa[1] + y;
                        break;
                    case "H":
                        r[1] = +pa[1] + x;
                        break;
                    case "R":
                        var dots = [x, y].concat(pa.slice(1));
                        for (var j = 2, jj = dots.length; j < jj; j++) {
                            dots[j] = +dots[j] + x;
                            dots[++j] = +dots[j] + y;
                        }
                        res.pop();
                        res = res.concat(catmullRom2bezier(dots, crz));
                        break;
                    case "O":
                        res.pop();
                        dots = ellipsePath(x, y, pa[1], pa[2]);
                        dots.push(dots[0]);
                        res = res.concat(dots);
                        break;
                    case "U":
                        res.pop();
                        res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                        r = ["U"].concat(res[res.length - 1].slice(-2));
                        break;
                    case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                    default:
                        for (j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + (j % 2 ? x : y);
                        }
                }
            } else if (pa0 == "R") {
                dots = [x, y].concat(pa.slice(1));
                res.pop();
                res = res.concat(catmullRom2bezier(dots, crz));
                r = ["R"].concat(pa.slice(-2));
            } else if (pa0 == "O") {
                res.pop();
                dots = ellipsePath(x, y, pa[1], pa[2]);
                dots.push(dots[0]);
                res = res.concat(dots);
            } else if (pa0 == "U") {
                res.pop();
                res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                r = ["U"].concat(res[res.length - 1].slice(-2));
            } else {
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    r[k] = pa[k];
                }
            }
            pa0 = pa0.toUpperCase();
            if (pa0 != "O") {
                switch (r[0]) {
                    case "Z":
                        x = +mx;
                        y = +my;
                        break;
                    case "H":
                        x = r[1];
                        break;
                    case "V":
                        y = r[1];
                        break;
                    case "M":
                        mx = r[r.length - 2];
                        my = r[r.length - 1];
                    default:
                        x = r[r.length - 2];
                        y = r[r.length - 1];
                }
            }
        }
        res.toString = toString;
        pth.abs = pathClone(res);
        return res;
    }
    function l2c(x1, y1, x2, y2) {
        return [x1, y1, x2, y2, x2, y2];
    }
    function q2c(x1, y1, ax, ay, x2, y2) {
        var _13 = 1 / 3,
            _23 = 2 / 3;
        return [
                _13 * x1 + _23 * ax,
                _13 * y1 + _23 * ay,
                _13 * x2 + _23 * ax,
                _13 * y2 + _23 * ay,
                x2,
                y2
            ];
    }
    function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
        // for more information of where this math came from visit:
        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
        var _120 = PI * 120 / 180,
            rad = PI / 180 * (+angle || 0),
            res = [],
            xy,
            rotate = Snap._.cacher(function (x, y, rad) {
                var X = x * math.cos(rad) - y * math.sin(rad),
                    Y = x * math.sin(rad) + y * math.cos(rad);
                return {x: X, y: Y};
            });
        if (!rx || !ry) {
            return [x1, y1, x2, y2, x2, y2];
        }
        if (!recursive) {
            xy = rotate(x1, y1, -rad);
            x1 = xy.x;
            y1 = xy.y;
            xy = rotate(x2, y2, -rad);
            x2 = xy.x;
            y2 = xy.y;
            var cos = math.cos(PI / 180 * angle),
                sin = math.sin(PI / 180 * angle),
                x = (x1 - x2) / 2,
                y = (y1 - y2) / 2;
            var h = x * x / (rx * rx) + y * y / (ry * ry);
            if (h > 1) {
                h = math.sqrt(h);
                rx = h * rx;
                ry = h * ry;
            }
            var rx2 = rx * rx,
                ry2 = ry * ry,
                k = (large_arc_flag == sweep_flag ? -1 : 1) *
                    math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                cx = k * rx * y / ry + (x1 + x2) / 2,
                cy = k * -ry * x / rx + (y1 + y2) / 2,
                f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                f2 = math.asin(((y2 - cy) / ry).toFixed(9));

            f1 = x1 < cx ? PI - f1 : f1;
            f2 = x2 < cx ? PI - f2 : f2;
            f1 < 0 && (f1 = PI * 2 + f1);
            f2 < 0 && (f2 = PI * 2 + f2);
            if (sweep_flag && f1 > f2) {
                f1 = f1 - PI * 2;
            }
            if (!sweep_flag && f2 > f1) {
                f2 = f2 - PI * 2;
            }
        } else {
            f1 = recursive[0];
            f2 = recursive[1];
            cx = recursive[2];
            cy = recursive[3];
        }
        var df = f2 - f1;
        if (abs(df) > _120) {
            var f2old = f2,
                x2old = x2,
                y2old = y2;
            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
            x2 = cx + rx * math.cos(f2);
            y2 = cy + ry * math.sin(f2);
            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
        }
        df = f2 - f1;
        var c1 = math.cos(f1),
            s1 = math.sin(f1),
            c2 = math.cos(f2),
            s2 = math.sin(f2),
            t = math.tan(df / 4),
            hx = 4 / 3 * rx * t,
            hy = 4 / 3 * ry * t,
            m1 = [x1, y1],
            m2 = [x1 + hx * s1, y1 - hy * c1],
            m3 = [x2 + hx * s2, y2 - hy * c2],
            m4 = [x2, y2];
        m2[0] = 2 * m1[0] - m2[0];
        m2[1] = 2 * m1[1] - m2[1];
        if (recursive) {
            return [m2, m3, m4].concat(res);
        } else {
            res = [m2, m3, m4].concat(res).join().split(",");
            var newres = [];
            for (var i = 0, ii = res.length; i < ii; i++) {
                newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
            }
            return newres;
        }
    }
    function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t;
        return {
            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
        };
    }

    // Returns bounding box of cubic bezier curve.
    // Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
    // Original version: NISHIO Hirokazu
    // Modifications: https://github.com/timo22345
    function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
        var tvalues = [],
            bounds = [[], []],
            a, b, c, t, t1, t2, b2ac, sqrtb2ac;
        for (var i = 0; i < 2; ++i) {
            if (i == 0) {
                b = 6 * x0 - 12 * x1 + 6 * x2;
                a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
                c = 3 * x1 - 3 * x0;
            } else {
                b = 6 * y0 - 12 * y1 + 6 * y2;
                a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
                c = 3 * y1 - 3 * y0;
            }
            if (abs(a) < 1e-12) {
                if (abs(b) < 1e-12) {
                    continue;
                }
                t = -c / b;
                if (0 < t && t < 1) {
                    tvalues.push(t);
                }
                continue;
            }
            b2ac = b * b - 4 * c * a;
            sqrtb2ac = math.sqrt(b2ac);
            if (b2ac < 0) {
                continue;
            }
            t1 = (-b + sqrtb2ac) / (2 * a);
            if (0 < t1 && t1 < 1) {
                tvalues.push(t1);
            }
            t2 = (-b - sqrtb2ac) / (2 * a);
            if (0 < t2 && t2 < 1) {
                tvalues.push(t2);
            }
        }

        var x, y, j = tvalues.length,
            jlen = j,
            mt;
        while (j--) {
            t = tvalues[j];
            mt = 1 - t;
            bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
            bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
        }

        bounds[0][jlen] = x0;
        bounds[1][jlen] = y0;
        bounds[0][jlen + 1] = x3;
        bounds[1][jlen + 1] = y3;
        bounds[0].length = bounds[1].length = jlen + 2;


        return {
          min: {x: mmin.apply(0, bounds[0]), y: mmin.apply(0, bounds[1])},
          max: {x: mmax.apply(0, bounds[0]), y: mmax.apply(0, bounds[1])}
        };
    }

    function path2curve(path, path2) {
        var pth = !path2 && paths(path);
        if (!path2 && pth.curve) {
            return pathClone(pth.curve);
        }
        var p = pathToAbsolute(path),
            p2 = path2 && pathToAbsolute(path2),
            attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
            attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
            processPath = function (path, d, pcom) {
                var nx, ny;
                if (!path) {
                    return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
                }
                !(path[0] in {T: 1, Q: 1}) && (d.qx = d.qy = null);
                switch (path[0]) {
                    case "M":
                        d.X = path[1];
                        d.Y = path[2];
                        break;
                    case "A":
                        path = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
                        break;
                    case "S":
                        if (pcom == "C" || pcom == "S") { // In "S" case we have to take into account, if the previous command is C/S.
                            nx = d.x * 2 - d.bx;          // And reflect the previous
                            ny = d.y * 2 - d.by;          // command's control point relative to the current point.
                        }
                        else {                            // or some else or nothing
                            nx = d.x;
                            ny = d.y;
                        }
                        path = ["C", nx, ny].concat(path.slice(1));
                        break;
                    case "T":
                        if (pcom == "Q" || pcom == "T") { // In "T" case we have to take into account, if the previous command is Q/T.
                            d.qx = d.x * 2 - d.qx;        // And make a reflection similar
                            d.qy = d.y * 2 - d.qy;        // to case "S".
                        }
                        else {                            // or something else or nothing
                            d.qx = d.x;
                            d.qy = d.y;
                        }
                        path = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                        break;
                    case "Q":
                        d.qx = path[1];
                        d.qy = path[2];
                        path = ["C"].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                        break;
                    case "L":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], path[2]));
                        break;
                    case "H":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], d.y));
                        break;
                    case "V":
                        path = ["C"].concat(l2c(d.x, d.y, d.x, path[1]));
                        break;
                    case "Z":
                        path = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
                        break;
                }
                return path;
            },
            fixArc = function (pp, i) {
                if (pp[i].length > 7) {
                    pp[i].shift();
                    var pi = pp[i];
                    while (pi.length) {
                        pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
                        p2 && (pcoms2[i] = "A"); // the same as above
                        pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
                    }
                    pp.splice(i, 1);
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            },
            fixM = function (path1, path2, a1, a2, i) {
                if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                    path2.splice(i, 0, ["M", a2.x, a2.y]);
                    a1.bx = 0;
                    a1.by = 0;
                    a1.x = path1[i][1];
                    a1.y = path1[i][2];
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            },
            pcoms1 = [], // path commands of original path p
            pcoms2 = [], // path commands of original path p2
            pfirst = "", // temporary holder for original path command
            pcom = ""; // holder for previous path command of original path
        for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
            p[i] && (pfirst = p[i][0]); // save current path command

            if (pfirst != "C") // C is not saved yet, because it may be result of conversion
            {
                pcoms1[i] = pfirst; // Save current path command
                i && ( pcom = pcoms1[i - 1]); // Get previous path command pcom
            }
            p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

            if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
            // which may produce multiple C:s
            // so we have to make sure that C is also C in original path

            fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

            if (p2) { // the same procedures is done to p2
                p2[i] && (pfirst = p2[i][0]);
                if (pfirst != "C") {
                    pcoms2[i] = pfirst;
                    i && (pcom = pcoms2[i - 1]);
                }
                p2[i] = processPath(p2[i], attrs2, pcom);

                if (pcoms2[i] != "A" && pfirst == "C") {
                    pcoms2[i] = "C";
                }

                fixArc(p2, i);
            }
            fixM(p, p2, attrs, attrs2, i);
            fixM(p2, p, attrs2, attrs, i);
            var seg = p[i],
                seg2 = p2 && p2[i],
                seglen = seg.length,
                seg2len = p2 && seg2.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
            attrs2.x = p2 && seg2[seg2len - 2];
            attrs2.y = p2 && seg2[seg2len - 1];
        }
        if (!p2) {
            pth.curve = pathClone(p);
        }
        return p2 ? [p, p2] : p;
    }
    function mapPath(path, matrix) {
        if (!matrix) {
            return path;
        }
        var x, y, i, j, ii, jj, pathi;
        path = path2curve(path);
        for (i = 0, ii = path.length; i < ii; i++) {
            pathi = path[i];
            for (j = 1, jj = pathi.length; j < jj; j += 2) {
                x = matrix.x(pathi[j], pathi[j + 1]);
                y = matrix.y(pathi[j], pathi[j + 1]);
                pathi[j] = x;
                pathi[j + 1] = y;
            }
        }
        return path;
    }

    // http://schepers.cc/getting-to-the-point
    function catmullRom2bezier(crp, z) {
        var d = [];
        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
            var p = [
                        {x: +crp[i - 2], y: +crp[i - 1]},
                        {x: +crp[i],     y: +crp[i + 1]},
                        {x: +crp[i + 2], y: +crp[i + 3]},
                        {x: +crp[i + 4], y: +crp[i + 5]}
                    ];
            if (z) {
                if (!i) {
                    p[0] = {x: +crp[iLen - 2], y: +crp[iLen - 1]};
                } else if (iLen - 4 == i) {
                    p[3] = {x: +crp[0], y: +crp[1]};
                } else if (iLen - 2 == i) {
                    p[2] = {x: +crp[0], y: +crp[1]};
                    p[3] = {x: +crp[2], y: +crp[3]};
                }
            } else {
                if (iLen - 4 == i) {
                    p[3] = p[2];
                } else if (!i) {
                    p[0] = {x: +crp[i], y: +crp[i + 1]};
                }
            }
            d.push(["C",
                  (-p[0].x + 6 * p[1].x + p[2].x) / 6,
                  (-p[0].y + 6 * p[1].y + p[2].y) / 6,
                  (p[1].x + 6 * p[2].x - p[3].x) / 6,
                  (p[1].y + 6*p[2].y - p[3].y) / 6,
                  p[2].x,
                  p[2].y
            ]);
        }

        return d;
    }

    // export
    Snap.path = paths;

    /*\
     * Snap.path.getTotalLength
     [ method ]
     **
     * Returns the length of the given path in pixels
     **
     - path (string) SVG path string
     **
     = (number) length
    \*/
    Snap.path.getTotalLength = getTotalLength;
    /*\
     * Snap.path.getPointAtLength
     [ method ]
     **
     * Returns the coordinates of the point located at the given length along the given path
     **
     - path (string) SVG path string
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    Snap.path.getPointAtLength = getPointAtLength;
    /*\
     * Snap.path.getSubpath
     [ method ]
     **
     * Returns the subpath of a given path between given start and end lengths
     **
     - path (string) SVG path string
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    Snap.path.getSubpath = function (path, from, to) {
        if (this.getTotalLength(path) - to < 1e-6) {
            return getSubpathsAtLength(path, from).end;
        }
        var a = getSubpathsAtLength(path, to, 1);
        return from ? getSubpathsAtLength(a, from).end : a;
    };
    /*\
     * Element.getTotalLength
     [ method ]
     **
     * Returns the length of the path in pixels (only works for `path` elements)
     = (number) length
    \*/
    elproto.getTotalLength = function () {
        if (this.node.getTotalLength) {
            return this.node.getTotalLength();
        }
    };
    // SIERRA Element.getPointAtLength()/Element.getTotalLength(): If a <path> is broken into different segments, is the jump distance to the new coordinates set by the _M_ or _m_ commands calculated as part of the path's total length?
    /*\
     * Element.getPointAtLength
     [ method ]
     **
     * Returns coordinates of the point located at the given length on the given path (only works for `path` elements)
     **
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    elproto.getPointAtLength = function (length) {
        return getPointAtLength(this.attr("d"), length);
    };
    // SIERRA Element.getSubpath(): Similar to the problem for Element.getPointAtLength(). Unclear how this would work for a segmented path. Overall, the concept of _subpath_ and what I'm calling a _segment_ (series of non-_M_ or _Z_ commands) is unclear.
    /*\
     * Element.getSubpath
     [ method ]
     **
     * Returns subpath of a given element from given start and end lengths (only works for `path` elements)
     **
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    elproto.getSubpath = function (from, to) {
        return Snap.path.getSubpath(this.attr("d"), from, to);
    };
    Snap._.box = box;
    /*\
     * Snap.path.findDotsAtSegment
     [ method ]
     **
     * Utility method
     **
     * Finds dot coordinates on the given cubic beziér curve at the given t
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     - t (number) position on the curve (0..1)
     = (object) point information in format:
     o {
     o     x: (number) x coordinate of the point,
     o     y: (number) y coordinate of the point,
     o     m: {
     o         x: (number) x coordinate of the left anchor,
     o         y: (number) y coordinate of the left anchor
     o     },
     o     n: {
     o         x: (number) x coordinate of the right anchor,
     o         y: (number) y coordinate of the right anchor
     o     },
     o     start: {
     o         x: (number) x coordinate of the start of the curve,
     o         y: (number) y coordinate of the start of the curve
     o     },
     o     end: {
     o         x: (number) x coordinate of the end of the curve,
     o         y: (number) y coordinate of the end of the curve
     o     },
     o     alpha: (number) angle of the curve derivative at the point
     o }
    \*/
    Snap.path.findDotsAtSegment = findDotsAtSegment;
    /*\
     * Snap.path.bezierBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given cubic beziér curve
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     * or
     - bez (array) array of six points for beziér curve
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.bezierBBox = bezierBBox;
    /*\
     * Snap.path.isPointInsideBBox
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside bounding box
     - bbox (string) bounding box
     - x (string) x coordinate of the point
     - y (string) y coordinate of the point
     = (boolean) `true` if point is inside
    \*/
    Snap.path.isPointInsideBBox = isPointInsideBBox;
    Snap.closest = function (x, y, X, Y) {
        var r = 100,
            b = box(x - r / 2, y - r / 2, r, r),
            inside = [],
            getter = X[0].hasOwnProperty("x") ? function (i) {
                return {
                    x: X[i].x,
                    y: X[i].y
                };
            } : function (i) {
                return {
                    x: X[i],
                    y: Y[i]
                };
            },
            found = 0;
        while (r <= 1e6 && !found) {
            for (var i = 0, ii = X.length; i < ii; i++) {
                var xy = getter(i);
                if (isPointInsideBBox(b, xy.x, xy.y)) {
                    found++;
                    inside.push(xy);
                    break;
                }
            }
            if (!found) {
                r *= 2;
                b = box(x - r / 2, y - r / 2, r, r)
            }
        }
        if (r == 1e6) {
            return;
        }
        var len = Infinity,
            res;
        for (i = 0, ii = inside.length; i < ii; i++) {
            var l = Snap.len(x, y, inside[i].x, inside[i].y);
            if (len > l) {
                len = l;
                inside[i].len = l;
                res = inside[i];
            }
        }
        return res;
    };
    /*\
     * Snap.path.isBBoxIntersect
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if two bounding boxes intersect
     - bbox1 (string) first bounding box
     - bbox2 (string) second bounding box
     = (boolean) `true` if bounding boxes intersect
    \*/
    Snap.path.isBBoxIntersect = isBBoxIntersect;
    /*\
     * Snap.path.intersection
     [ method ]
     **
     * Utility method
     **
     * Finds intersections of two paths
     - path1 (string) path string
     - path2 (string) path string
     = (array) dots of intersection
     o [
     o     {
     o         x: (number) x coordinate of the point,
     o         y: (number) y coordinate of the point,
     o         t1: (number) t value for segment of path1,
     o         t2: (number) t value for segment of path2,
     o         segment1: (number) order number for segment of path1,
     o         segment2: (number) order number for segment of path2,
     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1,
     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
     o     }
     o ]
    \*/
    Snap.path.intersection = pathIntersection;
    Snap.path.intersectionNumber = pathIntersectionNumber;
    /*\
     * Snap.path.isPointInside
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside a given closed path.
     *
     * Note: fill mode doesn’t affect the result of this method.
     - path (string) path string
     - x (number) x of the point
     - y (number) y of the point
     = (boolean) `true` if point is inside the path
    \*/
    Snap.path.isPointInside = isPointInsidePath;
    /*\
     * Snap.path.getBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given path
     - path (string) path string
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.getBBox = pathBBox;
    Snap.path.get = getPath;
    /*\
     * Snap.path.toRelative
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into relative values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toRelative = pathToRelative;
    /*\
     * Snap.path.toAbsolute
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into absolute values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toAbsolute = pathToAbsolute;
    /*\
     * Snap.path.toCubic
     [ method ]
     **
     * Utility method
     **
     * Converts path to a new path where all segments are cubic beziér curves
     - pathString (string|array) path string or array of segments
     = (array) array of segments
    \*/
    Snap.path.toCubic = path2curve;
    /*\
     * Snap.path.map
     [ method ]
     **
     * Transform the path string with the given matrix
     - path (string) path string
     - matrix (object) see @Matrix
     = (string) transformed path string
    \*/
    Snap.path.map = mapPath;
    Snap.path.toString = toString;
    Snap.path.clone = pathClone;
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var mmax = Math.max,
        mmin = Math.min;

    // Set
    var Set = function (items) {
        this.items = [];
	this.bindings = {};
        this.length = 0;
        this.type = "set";
        if (items) {
            for (var i = 0, ii = items.length; i < ii; i++) {
                if (items[i]) {
                    this[this.items.length] = this.items[this.items.length] = items[i];
                    this.length++;
                }
            }
        }
    },
    setproto = Set.prototype;
    /*\
     * Set.push
     [ method ]
     **
     * Adds each argument to the current set
     = (object) original element
    \*/
    setproto.push = function () {
        var item,
            len;
        for (var i = 0, ii = arguments.length; i < ii; i++) {
            item = arguments[i];
            if (item) {
                len = this.items.length;
                this[len] = this.items[len] = item;
                this.length++;
            }
        }
        return this;
    };
    /*\
     * Set.pop
     [ method ]
     **
     * Removes last element and returns it
     = (object) element
    \*/
    setproto.pop = function () {
        this.length && delete this[this.length--];
        return this.items.pop();
    };
    /*\
     * Set.forEach
     [ method ]
     **
     * Executes given function for each element in the set
     *
     * If the function returns `false`, the loop stops running.
     **
     - callback (function) function to run
     - thisArg (object) context object for the callback
     = (object) Set object
    \*/
    setproto.forEach = function (callback, thisArg) {
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            if (callback.call(thisArg, this.items[i], i) === false) {
                return this;
            }
        }
        return this;
    };
    /*\
     * Set.animate
     [ method ]
     **
     * Animates each element in set in sync.
     *
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     * or
     - animation (array) array of animation parameter for each element in set in format `[attrs, duration, easing, callback]`
     > Usage
     | // animate all elements in set to radius 10
     | set.animate({r: 10}, 500, mina.easein);
     | // or
     | // animate first element to radius 10, but second to radius 20 and in different time
     | set.animate([{r: 10}, 500, mina.easein], [{r: 20}, 1500, mina.easein]);
     = (Element) the current element
    \*/
    setproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Snap._.Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = easing.dur;
            attrs = attrs.attr;
        }
        var args = arguments;
        if (Snap.is(attrs, "array") && Snap.is(args[args.length - 1], "array")) {
            var each = true;
        }
        var begin,
            handler = function () {
                if (begin) {
                    this.b = begin;
                } else {
                    begin = this.b;
                }
            },
            cb = 0,
            set = this,
            callbacker = callback && function () {
                if (++cb == set.length) {
                    callback.call(this);
                }
            };
        return this.forEach(function (el, i) {
            eve.once("snap.animcreated." + el.id, handler);
            if (each) {
                args[i] && el.animate.apply(el, args[i]);
            } else {
                el.animate(attrs, ms, easing, callbacker);
            }
        });
    };
    /*\
     * Set.remove
     [ method ]
     **
     * Removes all children of the set.
     *
     = (object) Set object
    \*/
    setproto.remove = function () {
        while (this.length) {
            this.pop().remove();
        }
        return this;
    };
    /*\
     * Set.bind
     [ method ]
     **
     * Specifies how to handle a specific attribute when applied
     * to a set.
     *
     **
     - attr (string) attribute name
     - callback (function) function to run
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     - eattr (string) attribute on the element to bind the attribute to
     = (object) Set object
    \*/
    setproto.bind = function (attr, a, b) {
        var data = {};
        if (typeof a == "function") {
            this.bindings[attr] = a;
        } else {
            var aname = b || attr;
            this.bindings[attr] = function (v) {
                data[aname] = v;
                a.attr(data);
            };
        }
        return this;
    };
    /*\
     * Set.attr
     [ method ]
     **
     * Equivalent of @Element.attr.
     = (object) Set object
    \*/
    setproto.attr = function (value) {
        var unbound = {};
        for (var k in value) {
            if (this.bindings[k]) {
                this.bindings[k](value[k]);
            } else {
                unbound[k] = value[k];
            }
        }
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            this.items[i].attr(unbound);
        }
        return this;
    };
    /*\
     * Set.clear
     [ method ]
     **
     * Removes all elements from the set
    \*/
    setproto.clear = function () {
        while (this.length) {
            this.pop();
        }
    };
    /*\
     * Set.splice
     [ method ]
     **
     * Removes range of elements from the set
     **
     - index (number) position of the deletion
     - count (number) number of element to remove
     - insertion… (object) #optional elements to insert
     = (object) set elements that were deleted
    \*/
    setproto.splice = function (index, count, insertion) {
        index = index < 0 ? mmax(this.length + index, 0) : index;
        count = mmax(0, mmin(this.length - index, count));
        var tail = [],
            todel = [],
            args = [],
            i;
        for (i = 2; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        for (i = 0; i < count; i++) {
            todel.push(this[index + i]);
        }
        for (; i < this.length - index; i++) {
            tail.push(this[index + i]);
        }
        var arglen = args.length;
        for (i = 0; i < arglen + tail.length; i++) {
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
        }
        i = this.items.length = this.length -= count - arglen;
        while (this[i]) {
            delete this[i++];
        }
        return new Set(todel);
    };
    /*\
     * Set.exclude
     [ method ]
     **
     * Removes given element from the set
     **
     - element (object) element to remove
     = (boolean) `true` if object was found and removed from the set
    \*/
    setproto.exclude = function (el) {
        for (var i = 0, ii = this.length; i < ii; i++) if (this[i] == el) {
            this.splice(i, 1);
            return true;
        }
        return false;
    };
    /*\
     * Set.insertAfter
     [ method ]
     **
     * Inserts set elements after given element.
     **
     - element (object) set will be inserted after this element
     = (object) Set object
    \*/
    setproto.insertAfter = function (el) {
        var i = this.items.length;
        while (i--) {
            this.items[i].insertAfter(el);
        }
        return this;
    };
    /*\
     * Set.getBBox
     [ method ]
     **
     * Union of all bboxes of the set. See @Element.getBBox.
     = (object) bounding box descriptor. See @Element.getBBox.
    \*/
    setproto.getBBox = function () {
        var x = [],
            y = [],
            x2 = [],
            y2 = [];
        for (var i = this.items.length; i--;) if (!this.items[i].removed) {
            var box = this.items[i].getBBox();
            x.push(box.x);
            y.push(box.y);
            x2.push(box.x + box.width);
            y2.push(box.y + box.height);
        }
        x = mmin.apply(0, x);
        y = mmin.apply(0, y);
        x2 = mmax.apply(0, x2);
        y2 = mmax.apply(0, y2);
        return {
            x: x,
            y: y,
            x2: x2,
            y2: y2,
            width: x2 - x,
            height: y2 - y,
            cx: x + (x2 - x) / 2,
            cy: y + (y2 - y) / 2
        };
    };
    /*\
     * Set.insertAfter
     [ method ]
     **
     * Creates a clone of the set.
     **
     = (object) New Set object
    \*/
    setproto.clone = function (s) {
        s = new Set;
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            s.push(this.items[i].clone());
        }
        return s;
    };
    setproto.toString = function () {
        return "Snap\u2018s set";
    };
    setproto.type = "set";
    // export
    /*\
     * Snap.Set
     [ property ]
     **
     * Set constructor.
    \*/
    Snap.Set = Set;
    /*\
     * Snap.set
     [ method ]
     **
     * Creates a set and fills it with list of arguments.
     **
     = (object) New Set object
     | var r = paper.rect(0, 0, 10, 10),
     |     s1 = Snap.set(), // empty set
     |     s2 = Snap.set(r, paper.circle(100, 100, 20)); // prefilled set
    \*/
    Snap.set = function () {
        var set = new Set;
        if (arguments.length) {
            set.push.apply(set, Array.prototype.slice.call(arguments, 0));
        }
        return set;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var names = {},
        reUnit = /[%a-z]+$/i,
        Str = String;
    names.stroke = names.fill = "colour";
    function getEmpty(item) {
        var l = item[0];
        switch (l.toLowerCase()) {
            case "t": return [l, 0, 0];
            case "m": return [l, 1, 0, 0, 1, 0, 0];
            case "r": if (item.length == 4) {
                return [l, 0, item[2], item[3]];
            } else {
                return [l, 0];
            }
            case "s": if (item.length == 5) {
                return [l, 1, 1, item[3], item[4]];
            } else if (item.length == 3) {
                return [l, 1, 1];
            } else {
                return [l, 1];
            }
        }
    }
    function equaliseTransform(t1, t2, getBBox) {
        t1 = t1 || new Snap.Matrix;
        t2 = t2 || new Snap.Matrix;
        t1 = Snap.parseTransformString(t1.toTransformString()) || [];
        t2 = Snap.parseTransformString(t2.toTransformString()) || [];
        var maxlength = Math.max(t1.length, t2.length),
            from = [],
            to = [],
            i = 0, j, jj,
            tt1, tt2;
        for (; i < maxlength; i++) {
            tt1 = t1[i] || getEmpty(t2[i]);
            tt2 = t2[i] || getEmpty(tt1);
            if (tt1[0] != tt2[0] ||
                tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) ||
                tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])
                ) {
                    t1 = Snap._.transform2matrix(t1, getBBox());
                    t2 = Snap._.transform2matrix(t2, getBBox());
                    from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
                    to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
                    break;
            }
            from[i] = [];
            to[i] = [];
            for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
                j in tt1 && (from[i][j] = tt1[j]);
                j in tt2 && (to[i][j] = tt2[j]);
            }
        }
        return {
            from: path2array(from),
            to: path2array(to),
            f: getPath(from)
        };
    }
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    function getViewBox(val) {
        return val.join(" ");
    }
    function getColour(clr) {
        return Snap.rgb(clr[0], clr[1], clr[2], clr[3]);
    }
    function getPath(path) {
        var k = 0, i, ii, j, jj, out, a, b = [];
        for (i = 0, ii = path.length; i < ii; i++) {
            out = "[";
            a = ['"' + path[i][0] + '"'];
            for (j = 1, jj = path[i].length; j < jj; j++) {
                a[j] = "val[" + k++ + "]";
            }
            out += a + "]";
            b[i] = out;
        }
        return Function("val", "return Snap.path.toString.call([" + b + "])");
    }
    function path2array(path) {
        var out = [];
        for (var i = 0, ii = path.length; i < ii; i++) {
            for (var j = 1, jj = path[i].length; j < jj; j++) {
                out.push(path[i][j]);
            }
        }
        return out;
    }
    function isNumeric(obj) {
        return isFinite(obj);
    }
    function arrayEqual(arr1, arr2) {
        if (!Snap.is(arr1, "array") || !Snap.is(arr2, "array")) {
            return false;
        }
        return arr1.toString() == arr2.toString();
    }
    Element.prototype.equal = function (name, b) {
        return eve("snap.util.equal", this, name, b).firstDefined();
    };
    eve.on("snap.util.equal", function (name, b) {
        var A, B, a = Str(this.attr(name) || ""),
            el = this;
        if (names[name] == "colour") {
            A = Snap.color(a);
            B = Snap.color(b);
            return {
                from: [A.r, A.g, A.b, A.opacity],
                to: [B.r, B.g, B.b, B.opacity],
                f: getColour
            };
        }
        if (name == "viewBox") {
            A = this.attr(name).vb.split(" ").map(Number);
            B = b.split(" ").map(Number);
            return {
                from: A,
                to: B,
                f: getViewBox
            };
        }
        if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
            if (typeof b == "string") {
                b = Str(b).replace(/\.{3}|\u2026/g, a);
            }
            a = this.matrix;
            if (!Snap._.rgTransform.test(b)) {
                b = Snap._.transform2matrix(Snap._.svgTransform2string(b), this.getBBox());
            } else {
                b = Snap._.transform2matrix(b, this.getBBox());
            }
            return equaliseTransform(a, b, function () {
                return el.getBBox(1);
            });
        }
        if (name == "d" || name == "path") {
            A = Snap.path.toCubic(a, b);
            return {
                from: path2array(A[0]),
                to: path2array(A[1]),
                f: getPath(A[0])
            };
        }
        if (name == "points") {
            A = Str(a).split(Snap._.separator);
            B = Str(b).split(Snap._.separator);
            return {
                from: A,
                to: B,
                f: function (val) { return val; }
            };
        }
        if (isNumeric(a) && isNumeric(b)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getNumber
            };
        }
        var aUnit = a.match(reUnit),
            bUnit = Str(b).match(reUnit);
        if (aUnit && arrayEqual(aUnit, bUnit)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getUnit(aUnit)
            };
        } else {
            return {
                from: this.asPX(name),
                to: this.asPX(name, b),
                f: getNumber
            };
        }
    });
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
    has = "hasOwnProperty",
    supportsTouch = "createTouch" in glob.doc,
    events = [
        "click", "dblclick", "mousedown", "mousemove", "mouseout",
        "mouseover", "mouseup", "touchstart", "touchmove", "touchend",
        "touchcancel"
    ],
    touchMap = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    },
    getScroll = function (xy, el) {
        var name = xy == "y" ? "scrollTop" : "scrollLeft",
            doc = el && el.node ? el.node.ownerDocument : glob.doc;
        return doc[name in doc.documentElement ? "documentElement" : "body"][name];
    },
    preventDefault = function () {
        this.returnValue = false;
    },
    preventTouch = function () {
        return this.originalEvent.preventDefault();
    },
    stopPropagation = function () {
        this.cancelBubble = true;
    },
    stopTouch = function () {
        return this.originalEvent.stopPropagation();
    },
    addEvent = function (obj, type, fn, element) {
        var realName = supportsTouch && touchMap[type] ? touchMap[type] : type,
            f = function (e) {
                var scrollY = getScroll("y", element),
                    scrollX = getScroll("x", element);
                if (supportsTouch && touchMap[has](type)) {
                    for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                        if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
                            var olde = e;
                            e = e.targetTouches[i];
                            e.originalEvent = olde;
                            e.preventDefault = preventTouch;
                            e.stopPropagation = stopTouch;
                            break;
                        }
                    }
                }
                var x = e.clientX + scrollX,
                    y = e.clientY + scrollY;
                return fn.call(element, e, x, y);
            };

        if (type !== realName) {
            obj.addEventListener(type, f, false);
        }

        obj.addEventListener(realName, f, false);

        return function () {
            if (type !== realName) {
                obj.removeEventListener(type, f, false);
            }

            obj.removeEventListener(realName, f, false);
            return true;
        };
    },
    drag = [],
    dragMove = function (e) {
        var x = e.clientX,
            y = e.clientY,
            scrollY = getScroll("y"),
            scrollX = getScroll("x"),
            dragi,
            j = drag.length;
        while (j--) {
            dragi = drag[j];
            if (supportsTouch) {
                var i = e.touches && e.touches.length,
                    touch;
                while (i--) {
                    touch = e.touches[i];
                    if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
                        x = touch.clientX;
                        y = touch.clientY;
                        (e.originalEvent ? e.originalEvent : e).preventDefault();
                        break;
                    }
                }
            } else {
                e.preventDefault();
            }
            var node = dragi.el.node,
                o,
                next = node.nextSibling,
                parent = node.parentNode,
                display = node.style.display;
            // glob.win.opera && parent.removeChild(node);
            // node.style.display = "none";
            // o = dragi.el.paper.getElementByPoint(x, y);
            // node.style.display = display;
            // glob.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
            // o && eve("snap.drag.over." + dragi.el.id, dragi.el, o);
            x += scrollX;
            y += scrollY;
            eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
        }
    },
    dragUp = function (e) {
        Snap.unmousemove(dragMove).unmouseup(dragUp);
        var i = drag.length,
            dragi;
        while (i--) {
            dragi = drag[i];
            dragi.el._drag = {};
            eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
            eve.off("snap.drag.*." + dragi.el.id);
        }
        drag = [];
    };
    /*\
     * Element.click
     [ method ]
     **
     * Adds a click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unclick
     [ method ]
     **
     * Removes a click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.dblclick
     [ method ]
     **
     * Adds a double click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.undblclick
     [ method ]
     **
     * Removes a double click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mousedown
     [ method ]
     **
     * Adds a mousedown event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousedown
     [ method ]
     **
     * Removes a mousedown event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mousemove
     [ method ]
     **
     * Adds a mousemove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousemove
     [ method ]
     **
     * Removes a mousemove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseout
     [ method ]
     **
     * Adds a mouseout event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseout
     [ method ]
     **
     * Removes a mouseout event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseover
     [ method ]
     **
     * Adds a mouseover event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseover
     [ method ]
     **
     * Removes a mouseover event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseup
     [ method ]
     **
     * Adds a mouseup event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseup
     [ method ]
     **
     * Removes a mouseup event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchstart
     [ method ]
     **
     * Adds a touchstart event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchstart
     [ method ]
     **
     * Removes a touchstart event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchmove
     [ method ]
     **
     * Adds a touchmove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchmove
     [ method ]
     **
     * Removes a touchmove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchend
     [ method ]
     **
     * Adds a touchend event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchend
     [ method ]
     **
     * Removes a touchend event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchcancel
     [ method ]
     **
     * Adds a touchcancel event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchcancel
     [ method ]
     **
     * Removes a touchcancel event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    for (var i = events.length; i--;) {
        (function (eventName) {
            Snap[eventName] = elproto[eventName] = function (fn, scope) {
                if (Snap.is(fn, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: eventName,
                        f: fn,
                        unbind: addEvent(this.node || document, eventName, fn, scope || this)
                    });
                } else {
                    for (var i = 0, ii = this.events.length; i < ii; i++) if (this.events[i].name == eventName) {
                        try {
                            this.events[i].f.call(this);
                        } catch (e) {}
                    }
                }
                return this;
            };
            Snap["un" + eventName] =
            elproto["un" + eventName] = function (fn) {
                var events = this.events || [],
                    l = events.length;
                while (l--) if (events[l].name == eventName &&
                               (events[l].f == fn || !fn)) {
                    events[l].unbind();
                    events.splice(l, 1);
                    !events.length && delete this.events;
                    return this;
                }
                return this;
            };
        })(events[i]);
    }
    /*\
     * Element.hover
     [ method ]
     **
     * Adds hover event handlers to the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     - icontext (object) #optional context for hover in handler
     - ocontext (object) #optional context for hover out handler
     = (object) @Element
    \*/
    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
    };
    /*\
     * Element.unhover
     [ method ]
     **
     * Removes hover event handlers from the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     = (object) @Element
    \*/
    elproto.unhover = function (f_in, f_out) {
        return this.unmouseover(f_in).unmouseout(f_out);
    };
    var draggable = [];
    // SIERRA unclear what _context_ refers to for starting, ending, moving the drag gesture.
    // SIERRA Element.drag(): _x position of the mouse_: Where are the x/y values offset from?
    // SIERRA Element.drag(): much of this member's doc appears to be duplicated for some reason.
    // SIERRA Unclear about this sentence: _Additionally following drag events will be triggered: drag.start.<id> on start, drag.end.<id> on end and drag.move.<id> on every move._ Is there a global _drag_ object to which you can assign handlers keyed by an element's ID?
    /*\
     * Element.drag
     [ method ]
     **
     * Adds event handlers for an element's drag gesture
     **
     - onmove (function) handler for moving
     - onstart (function) handler for drag start
     - onend (function) handler for drag end
     - mcontext (object) #optional context for moving handler
     - scontext (object) #optional context for drag start handler
     - econtext (object) #optional context for drag end handler
     * Additionaly following `drag` events are triggered: `drag.start.<id>` on start, 
     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element is dragged over another element 
     * `drag.over.<id>` fires as well.
     *
     * Start event and start handler are called in specified context or in context of the element with following parameters:
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * Move event and move handler are called in specified context or in context of the element with following parameters:
     o dx (number) shift by x from the start point
     o dy (number) shift by y from the start point
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * End event and end handler are called in specified context or in context of the element with following parameters:
     o event (object) DOM event object
     = (object) @Element
    \*/
    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
        var el = this;
        if (!arguments.length) {
            var origTransform;
            return el.drag(function (dx, dy) {
                this.attr({
                    transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]
                });
            }, function () {
                origTransform = this.transform().local;
            });
        }
        function start(e, x, y) {
            (e.originalEvent || e).preventDefault();
            el._drag.x = x;
            el._drag.y = y;
            el._drag.id = e.identifier;
            !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
            drag.push({el: el, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope});
            onstart && eve.on("snap.drag.start." + el.id, onstart);
            onmove && eve.on("snap.drag.move." + el.id, onmove);
            onend && eve.on("snap.drag.end." + el.id, onend);
            eve("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
        }
        function init(e, x, y) {
            eve("snap.draginit." + el.id, el, e, x, y);
        }
        eve.on("snap.draginit." + el.id, start);
        el._drag = {};
        draggable.push({el: el, start: start, init: init});
        el.mousedown(init);
        return el;
    };
    /*
     * Element.onDragOver
     [ method ]
     **
     * Shortcut to assign event handler for `drag.over.<id>` event, where `id` is the element's `id` (see @Element.id)
     - f (function) handler for event, first argument would be the element you are dragging over
    \*/
    // elproto.onDragOver = function (f) {
    //     f ? eve.on("snap.drag.over." + this.id, f) : eve.unbind("snap.drag.over." + this.id);
    // };
    /*\
     * Element.undrag
     [ method ]
     **
     * Removes all drag event handlers from the given element
    \*/
    elproto.undrag = function () {
        var i = draggable.length;
        while (i--) if (draggable[i].el == this) {
            this.unmousedown(draggable[i].init);
            draggable.splice(i, 1);
            eve.unbind("snap.drag.*." + this.id);
            eve.unbind("snap.draginit." + this.id);
        }
        !draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        pproto = Paper.prototype,
        rgurl = /^\s*url\((.+)\)/,
        Str = String,
        $ = Snap._.$;
    Snap.filter = {};
    /*\
     * Paper.filter
     [ method ]
     **
     * Creates a `<filter>` element
     **
     - filstr (string) SVG fragment of filter provided as a string
     = (object) @Element
     * Note: It is recommended to use filters embedded into the page inside an empty SVG element.
     > Usage
     | var f = paper.filter('<feGaussianBlur stdDeviation="2"/>'),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    pproto.filter = function (filstr) {
        var paper = this;
        if (paper.type != "svg") {
            paper = paper.paper;
        }
        var f = Snap.parse(Str(filstr)),
            id = Snap._.id(),
            width = paper.node.offsetWidth,
            height = paper.node.offsetHeight,
            filter = $("filter");
        $(filter, {
            id: id,
            filterUnits: "userSpaceOnUse"
        });
        filter.appendChild(f.node);
        paper.defs.appendChild(filter);
        return new Element(filter);
    };

    eve.on("snap.util.getattr.filter", function () {
        eve.stop();
        var p = $(this.node, "filter");
        if (p) {
            var match = Str(p).match(rgurl);
            return match && Snap.select(match[1]);
        }
    });
    eve.on("snap.util.attr.filter", function (value) {
        if (value instanceof Element && value.type == "filter") {
            eve.stop();
            var id = value.node.id;
            if (!id) {
                $(value.node, {id: value.id});
                id = value.id;
            }
            $(this.node, {
                filter: Snap.url(id)
            });
        }
        if (!value || value == "none") {
            eve.stop();
            this.node.removeAttribute("filter");
        }
    });
    /*\
     * Snap.filter.blur
     [ method ]
     **
     * Returns an SVG markup string for the blur filter
     **
     - x (number) amount of horizontal blur, in pixels
     - y (number) #optional amount of vertical blur, in pixels
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.blur(5, 10)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.blur = function (x, y) {
        if (x == null) {
            x = 2;
        }
        var def = y == null ? x : [x, y];
        return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {
            def: def
        });
    };
    Snap.filter.blur.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.shadow
     [ method ]
     **
     * Returns an SVG markup string for the shadow filter
     **
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - blur (number) #optional amount of blur
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * which makes blur default to `4`. Or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - opacity (number) #optional `0..1` opacity of the shadow
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.shadow(0, 2, .3)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.shadow = function (dx, dy, blur, color, opacity) {
        if (opacity == null) {
            if (color == null) {
                opacity = blur;
                blur = 4;
                color = "#000";
            } else {
                opacity = color;
                color = blur;
                blur = 4;
            }
        }
        if (blur == null) {
            blur = 4;
        }
        if (opacity == null) {
            opacity = 1;
        }
        if (dx == null) {
            dx = 0;
            dy = 2;
        }
        if (dy == null) {
            dy = dx;
        }
        color = Snap.color(color);
        return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
            color: color,
            dx: dx,
            dy: dy,
            blur: blur,
            opacity: opacity
        });
    };
    Snap.filter.shadow.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.grayscale
     [ method ]
     **
     * Returns an SVG markup string for the grayscale filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.grayscale = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
            a: 0.2126 + 0.7874 * (1 - amount),
            b: 0.7152 - 0.7152 * (1 - amount),
            c: 0.0722 - 0.0722 * (1 - amount),
            d: 0.2126 - 0.2126 * (1 - amount),
            e: 0.7152 + 0.2848 * (1 - amount),
            f: 0.0722 - 0.0722 * (1 - amount),
            g: 0.2126 - 0.2126 * (1 - amount),
            h: 0.0722 + 0.9278 * (1 - amount)
        });
    };
    Snap.filter.grayscale.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.sepia
     [ method ]
     **
     * Returns an SVG markup string for the sepia filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.sepia = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
            a: 0.393 + 0.607 * (1 - amount),
            b: 0.769 - 0.769 * (1 - amount),
            c: 0.189 - 0.189 * (1 - amount),
            d: 0.349 - 0.349 * (1 - amount),
            e: 0.686 + 0.314 * (1 - amount),
            f: 0.168 - 0.168 * (1 - amount),
            g: 0.272 - 0.272 * (1 - amount),
            h: 0.534 - 0.534 * (1 - amount),
            i: 0.131 + 0.869 * (1 - amount)
        });
    };
    Snap.filter.sepia.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.saturate
     [ method ]
     **
     * Returns an SVG markup string for the saturate filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.saturate = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {
            amount: 1 - amount
        });
    };
    Snap.filter.saturate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.hueRotate
     [ method ]
     **
     * Returns an SVG markup string for the hue-rotate filter
     **
     - angle (number) angle of rotation
     = (string) filter representation
    \*/
    Snap.filter.hueRotate = function (angle) {
        angle = angle || 0;
        return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
            angle: angle
        });
    };
    Snap.filter.hueRotate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.invert
     [ method ]
     **
     * Returns an SVG markup string for the invert filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.invert = function (amount) {
        if (amount == null) {
            amount = 1;
        }
//        <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB"/>
        return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: 1 - amount
        });
    };
    Snap.filter.invert.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.brightness
     [ method ]
     **
     * Returns an SVG markup string for the brightness filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.brightness = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
            amount: amount
        });
    };
    Snap.filter.brightness.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.contrast
     [ method ]
     **
     * Returns an SVG markup string for the contrast filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.contrast = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: .5 - amount / 2
        });
    };
    Snap.filter.contrast.toString = function () {
        return this();
    };
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var box = Snap._.box,
        is = Snap.is,
        firstLetter = /^[^a-z]*([tbmlrc])/i,
        toString = function () {
            return "T" + this.dx + "," + this.dy;
        };
    /*\
     * Element.getAlign
     [ method ]
     **
     * Returns shift needed to align the element relatively to given element.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object|string) Object in format `{dx: , dy: }` also has a string representation as a transformation string
     > Usage
     | el.transform(el.getAlign(el2, "top"));
     * or
     | var dy = el.getAlign(el2, "top").dy;
    \*/
    Element.prototype.getAlign = function (el, way) {
        if (way == null && is(el, "string")) {
            way = el;
            el = null;
        }
        el = el || this.paper;
        var bx = el.getBBox ? el.getBBox() : box(el),
            bb = this.getBBox(),
            out = {};
        way = way && way.match(firstLetter);
        way = way ? way[1].toLowerCase() : "c";
        switch (way) {
            case "t":
                out.dx = 0;
                out.dy = bx.y - bb.y;
            break;
            case "b":
                out.dx = 0;
                out.dy = bx.y2 - bb.y2;
            break;
            case "m":
                out.dx = 0;
                out.dy = bx.cy - bb.cy;
            break;
            case "l":
                out.dx = bx.x - bb.x;
                out.dy = 0;
            break;
            case "r":
                out.dx = bx.x2 - bb.x2;
                out.dy = 0;
            break;
            default:
                out.dx = bx.cx - bb.cx;
                out.dy = 0;
            break;
        }
        out.toString = toString;
        return out;
    };
    /*\
     * Element.align
     [ method ]
     **
     * Aligns the element relatively to given one via transformation.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object) this element
     > Usage
     | el.align(el2, "top");
     * or
     | el.align("middle");
    \*/
    Element.prototype.align = function (el, way) {
        return this.transform("..." + this.getAlign(el, way));
    };
});

// Copyright (c) 2016 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype,
        is = Snap.is,
        Str = String,
        has = "hasOwnProperty";
    function slice(from, to, f) {
        return function (arr) {
            var res = arr.slice(from, to);
            if (res.length == 1) {
                res = res[0];
            }
            return f ? f(res) : res;
        };
    }
    var Animation = function (attr, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        this.attr = attr;
        this.dur = ms;
        easing && (this.easing = easing);
        callback && (this.callback = callback);
    };
    Snap._.Animation = Animation;
    /*\
     * Snap.animation
     [ method ]
     **
     * Creates an animation object
     **
     - attr (object) attributes of final destination
     - duration (number) duration of the animation, in milliseconds
     - easing (function) #optional one of easing functions of @mina or custom one
     - callback (function) #optional callback function that fires when animation ends
     = (object) animation object
    \*/
    Snap.animation = function (attr, ms, easing, callback) {
        return new Animation(attr, ms, easing, callback);
    };
    /*\
     * Element.inAnim
     [ method ]
     **
     * Returns a set of animations that may be able to manipulate the current element
     **
     = (object) in format:
     o {
     o     anim (object) animation object,
     o     mina (object) @mina object,
     o     curStatus (number) 0..1 — status of the animation: 0 — just started, 1 — just finished,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
    \*/
    elproto.inAnim = function () {
        var el = this,
            res = [];
        for (var id in el.anims) if (el.anims[has](id)) {
            (function (a) {
                res.push({
                    anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
                    mina: a,
                    curStatus: a.status(),
                    status: function (val) {
                        return a.status(val);
                    },
                    stop: function () {
                        a.stop();
                    }
                });
            }(el.anims[id]));
        }
        return res;
    };
    /*\
     * Snap.animate
     [ method ]
     **
     * Runs generic animation of one number into another with a caring function
     **
     - from (number|array) number or array of numbers
     - to (number|array) number or array of numbers
     - setter (function) caring function that accepts one number argument
     - duration (number) duration, in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function to execute when animation ends
     = (object) animation object in @mina format
     o {
     o     id (string) animation id, consider it read-only,
     o     duration (function) gets or sets the duration of the animation,
     o     easing (function) easing,
     o     speed (function) gets or sets the speed of the animation,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
     | var rect = Snap().rect(0, 0, 10, 10);
     | Snap.animate(0, 10, function (val) {
     |     rect.attr({
     |         x: val
     |     });
     | }, 1000);
     | // in given context is equivalent to
     | rect.animate({x: 10}, 1000);
    \*/
    Snap.animate = function (from, to, setter, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        var now = mina.time(),
            anim = mina(from, to, now, now + ms, mina.time, setter, easing);
        callback && eve.once("mina.finish." + anim.id, callback);
        return anim;
    };
    /*\
     * Element.stop
     [ method ]
     **
     * Stops all the animations for the current element
     **
     = (Element) the current element
    \*/
    elproto.stop = function () {
        var anims = this.inAnim();
        for (var i = 0, ii = anims.length; i < ii; i++) {
            anims[i].stop();
        }
        return this;
    };
    /*\
     * Element.animate
     [ method ]
     **
     * Animates the given attributes of the element
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     = (Element) the current element
    \*/
    elproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = attrs.dur;
            attrs = attrs.attr;
        }
        var fkeys = [], tkeys = [], keys = {}, from, to, f, eq,
            el = this;
        for (var key in attrs) if (attrs[has](key)) {
            if (el.equal) {
                eq = el.equal(key, Str(attrs[key]));
                from = eq.from;
                to = eq.to;
                f = eq.f;
            } else {
                from = +el.attr(key);
                to = +attrs[key];
            }
            var len = is(from, "array") ? from.length : 1;
            keys[key] = slice(fkeys.length, fkeys.length + len, f);
            fkeys = fkeys.concat(from);
            tkeys = tkeys.concat(to);
        }
        var now = mina.time(),
            anim = mina(fkeys, tkeys, now, now + ms, mina.time, function (val) {
                var attr = {};
                for (var key in keys) if (keys[has](key)) {
                    attr[key] = keys[key](val);
                }
                el.attr(attr);
            }, easing);
        el.anims[anim.id] = anim;
        anim._attrs = attrs;
        anim._callback = callback;
        eve("snap.animcreated." + el.id, anim);
        eve.once("mina.finish." + anim.id, function () {
            eve.off("mina.*." + anim.id);
            delete el.anims[anim.id];
            callback && callback.call(el);
        });
        eve.once("mina.stop." + anim.id, function () {
            eve.off("mina.*." + anim.id);
            delete el.anims[anim.id];
        });
        return el;
    };
});

// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    // Colours are from https://www.materialui.co
    var red         = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",
        pink        = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",
        purple      = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",
        deeppurple  = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",
        indigo      = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",
        blue        = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",
        lightblue   = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",
        cyan        = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",
        teal        = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",
        green       = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",
        lightgreen  = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",
        lime        = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",
        yellow      = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",
        amber       = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",
        orange      = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",
        deeporange  = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",
        brown       = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",
        grey        = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",
        bluegrey    = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";
    /*\
     * Snap.mui
     [ property ]
     **
     * Contain Material UI colours.
     | Snap().rect(0, 0, 10, 10).attr({fill: Snap.mui.deeppurple, stroke: Snap.mui.amber[600]});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/
    Snap.mui = {};
    /*\
     * Snap.flat
     [ property ]
     **
     * Contain Flat UI colours.
     | Snap().rect(0, 0, 10, 10).attr({fill: Snap.flat.carrot, stroke: Snap.flat.wetasphalt});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/
    Snap.flat = {};
    function saveColor(colors) {
        colors = colors.split(/(?=#)/);
        var color = new String(colors[5]);
        color[50] = colors[0];
        color[100] = colors[1];
        color[200] = colors[2];
        color[300] = colors[3];
        color[400] = colors[4];
        color[500] = colors[5];
        color[600] = colors[6];
        color[700] = colors[7];
        color[800] = colors[8];
        color[900] = colors[9];
        if (colors[10]) {
            color.A100 = colors[10];
            color.A200 = colors[11];
            color.A400 = colors[12];
            color.A700 = colors[13];
        }
        return color;
    }
    Snap.mui.red = saveColor(red);
    Snap.mui.pink = saveColor(pink);
    Snap.mui.purple = saveColor(purple);
    Snap.mui.deeppurple = saveColor(deeppurple);
    Snap.mui.indigo = saveColor(indigo);
    Snap.mui.blue = saveColor(blue);
    Snap.mui.lightblue = saveColor(lightblue);
    Snap.mui.cyan = saveColor(cyan);
    Snap.mui.teal = saveColor(teal);
    Snap.mui.green = saveColor(green);
    Snap.mui.lightgreen = saveColor(lightgreen);
    Snap.mui.lime = saveColor(lime);
    Snap.mui.yellow = saveColor(yellow);
    Snap.mui.amber = saveColor(amber);
    Snap.mui.orange = saveColor(orange);
    Snap.mui.deeporange = saveColor(deeporange);
    Snap.mui.brown = saveColor(brown);
    Snap.mui.grey = saveColor(grey);
    Snap.mui.bluegrey = saveColor(bluegrey);
    Snap.flat.turquoise = "#1abc9c";
    Snap.flat.greensea = "#16a085";
    Snap.flat.sunflower = "#f1c40f";
    Snap.flat.orange = "#f39c12";
    Snap.flat.emerland = "#2ecc71";
    Snap.flat.nephritis = "#27ae60";
    Snap.flat.carrot = "#e67e22";
    Snap.flat.pumpkin = "#d35400";
    Snap.flat.peterriver = "#3498db";
    Snap.flat.belizehole = "#2980b9";
    Snap.flat.alizarin = "#e74c3c";
    Snap.flat.pomegranate = "#c0392b";
    Snap.flat.amethyst = "#9b59b6";
    Snap.flat.wisteria = "#8e44ad";
    Snap.flat.clouds = "#ecf0f1";
    Snap.flat.silver = "#bdc3c7";
    Snap.flat.wetasphalt = "#34495e";
    Snap.flat.midnightblue = "#2c3e50";
    Snap.flat.concrete = "#95a5a6";
    Snap.flat.asbestos = "#7f8c8d";
    /*\
     * Snap.importMUIColors
     [ method ]
     **
     * Imports Material UI colours into global object.
     | Snap.importMUIColors();
     | Snap().rect(0, 0, 10, 10).attr({fill: deeppurple, stroke: amber[600]});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/
    Snap.importMUIColors = function () {
        for (var color in Snap.mui) {
            if (Snap.mui.hasOwnProperty(color)) {
                window[color] = Snap.mui[color];
            }
        }
    };
});

module.exports = Snap

},{"eve":"node_modules/eve/eve.js"}],"src/tachometer_analog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _DOMArray = _interopRequireDefault(require("DOMArray"));
var _instrument = _interopRequireDefault(require("./instrument"));
var _angle = require("./geometry/angle");
var _vector2d = _interopRequireDefault(require("./geometry/vector2d"));
var _primitives = require("./graphics/primitives");
var _needles = require("./needles");
var _time = require("./utils/time");
var _snapsvgCjs = _interopRequireDefault(require("snapsvg-cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Regardless of our DOM element size we will render using the constants below
 * and use a transform to scale the resulting SVG to the required size, without altering the aspect ratio
 */

// inset of edges of element
var I = 0;
// width and height
var W = 400;
var H = 400;
// outer radius
var R = (Math.min(W, H) - I) / 2;
// center
var CX = W / 2;
var CY = H / 2;
var CENTER = new _vector2d.default(CX, CY);

// thickness of outer three rings of case
var CASE1 = 8;
var CASE2 = 10;
var CASE3 = 14;

// outer radius of all tick marks
var TICK1 = R - (CASE1 + CASE2 + CASE3);
// inner radius of small ticks
var TICK2 = TICK1 - 25;
// inner radius of large ticks
var TICK3 = TICK1 - 40;

// green arc radius and thickness
var ARC_WIDTH = 20;
var ARC_RADIUS = TICK2 + ARC_WIDTH / 2;

// radius of  large digits marking hundreds of feet
var LABEL_RADIUS = TICK3 - 25;

// hundreds needle, other needles are derived from these
var POINTER_SMALL_RADIUS = 40;
var POINTER_WIDTH = 10;
var POINTER_ARROW = 6;
var POINTER_RADIUS = TICK2 - POINTER_ARROW;

// RPM limits and ranges
var MIN_RPM = 0;
var MAX_RPM = 3500;
var MIN_GREEN = 2100;
var MAX_GREEN = 2700;
var REDLINE = 2700;

// angle at low stop of tacometer and angle sweep to the
// max rpm point
var START_ANGLE = 145;
var ANGLE_SWEEP = 250;

// dimensions of individual hours window
var HOUR_W = 24;
var HOUR_H = 30;
var HOUR_P = 8;
var HOUR_Y = CY + 70;
var TachometerAnalog = exports.default = /*#__PURE__*/function (_Instrument) {
  function TachometerAnalog(options) {
    var _this;
    _classCallCheck(this, TachometerAnalog);
    _this = _callSuper(this, TachometerAnalog, [Object.assign({
      width: W,
      height: H
    }, options)]);
    console.assert(_this.parentElement, "instrument requires a parent to attach to");
    _this.template = (0, _DOMArray.default)("\n      <svg r=\"svg\" height=\"".concat(W, "\" width=\"").concat(H, "\" xmlns=\"http://www.w3.org/2000/svg\"></svg>\n    "));
    _this.template.zip(_this);
    _this.snap = new _snapsvgCjs.default(_this.svg.el);
    _this.renderImmutable();
    _this.renderText();
    _this.renderHours();
    _this.createNeedle();
    _this.setNeedle(_this.airplane.rpm);

    // listen for changes to the airplane
    _this.onAirplaneChanged = _this.onAirplaneChanged.bind(_this);
    _this.airplane.addListener(_this.onAirplaneChanged);
    _this.addDisposable(function () {
      return _this.airplane.removeListener(_this.onAirplaneChanged);
    });
    _this.template.appendTo(_this.parentElement);
    return _this;
  }

  /**
   * enter demonstration mode
   */
  _inherits(TachometerAnalog, _Instrument);
  return _createClass(TachometerAnalog, [{
    key: "demoStart",
    value: function demoStart() {
      var _this2 = this;
      this.addLerp("demo", (0, _time.interval)(function () {
        _this2.airplane.setRPM(MIN_RPM + (REDLINE - MIN_RPM) * Math.random());
      }, 5000));
    }

    /**
     * cancel demo mode
     */
  }, {
    key: "demoStop",
    value: function demoStop() {
      this.cancelLerp("demo");
    }

    /**
     * render the non changing parts of the instrument
     */
  }, {
    key: "renderImmutable",
    value: function renderImmutable() {
      this.renderCase();
      this.renderDial();
      this.renderShadow();
    }

    /**
     * fixed text
     */
  }, {
    key: "renderText",
    value: function renderText() {
      (0, _primitives.centeredText)(this.snap, new _vector2d.default(CX, CY - 55), "RPM", "white", "24px");
      (0, _primitives.centeredText)(this.snap, new _vector2d.default(CX, CY - 33), "X 100", "white", "14px");
    }

    /**
     * fake hours windows
     */
  }, {
    key: "renderHours",
    value: function renderHours() {
      // five windows including 10ths
      var n = 5;
      var width = n * HOUR_W + (n - 1) * HOUR_P;
      var left = CX - width / 2;
      for (var i = 0; i < n; i += 1) {
        var x = left + i * (HOUR_W + HOUR_P);
        (0, _primitives.rectangle)(this.snap, x, HOUR_Y, HOUR_W, HOUR_H, this.snap.gradient("l(0, 0, 1, 1)#222:0-#666:100"), 1, i === n - 1 ? "whitesmoke" : this.snap.gradient("l(0.5, 0, 0.5, 1)#000:0-#444:50-#000:100"), 3, 3);
        var position = new _vector2d.default(x + HOUR_W / 2, HOUR_Y + HOUR_H / 2);
        (0, _primitives.centeredText)(this.snap, position, Math.floor(Math.random() * 10) % 10, i === n - 1 ? "black" : "white", "20px", "Verdana");
      }
      (0, _primitives.centeredText)(this.snap, new _vector2d.default(CX, HOUR_Y + HOUR_H + 12), "HOURS", "white", "14px", "Verdana");
    }

    /**
     * render the shared three outer rings of the bezel
     */
  }, {
    key: "renderCase",
    value: function renderCase() {
      // draw three outer rings of the instrument case
      (0, _primitives.circle)(this.snap, CENTER, R - CASE1 / 2, this.snap.gradient("l(0, 0, 1, 1)#FFF:0-#888:20-#111:100"), CASE1, "black");
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 / 2), this.snap.gradient("l(0, 0, 1, 1)#111-#666"), CASE2, "black");
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 + CASE3 / 2), this.snap.gradient("l(0, 0, 1, 1)#000:0-#888:70-#FFF:100"), CASE3, this.snap.gradient("l(0, 0, 1, 1)#000:0-#222:100"));
    }

    /**
     * render tick marks around face and numbers for 100's of feet
     */
  }, {
    key: "renderDial",
    value: function renderDial() {
      // draw green arc under all ticks
      (0, _primitives.arc)(this.snap, CENTER, ARC_RADIUS, ARC_WIDTH, 0, "transparent", "#00EE00", this.rpmToAngle(MIN_GREEN), this.rpmToAngle(MAX_GREEN), true);
      // draw small/large ticks across entire RPM range
      for (var i = MIN_RPM; i <= MAX_RPM; i += 100) {
        // large or small
        if (i % 500 === 0) {
          (0, _primitives.tick)(this.snap, CENTER, this.rpmToAngle(i), TICK1, TICK3, 5, "white");
          // draw RPM text and 500 intervals except and upper and lower limit
          if (i > MIN_RPM && i < MAX_RPM) {
            var position = (0, _angle.POC)(CENTER, LABEL_RADIUS, this.rpmToAngle(i));
            (0, _primitives.centeredText)(this.snap, position, Math.floor(i / 100), "white", "34px", "Verdana");
          }
        } else {
          (0, _primitives.tick)(this.snap, CENTER, this.rpmToAngle(i), TICK1, TICK2, 3, "white");
        }
      }
      // draw redline
      (0, _primitives.tick)(this.snap, CENTER, this.rpmToAngle(REDLINE), TICK1, TICK3, 7, "red");
    }

    /**
     * render an almost transparent gradient over the face to give the appearance of
     * shadow and depth
     */
  }, {
    key: "renderShadow",
    value: function renderShadow() {
      // draw a radial gradient over the face to give a small hint of shadow from the case
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 + CASE3), "transparent", 0, this.snap.gradient("r(0.5, 0.5, 0.5)transparent:85-rgba(0,0,0,0.6)"));
    }

    /**
     * create the needle and center nut
     */
  }, {
    key: "createNeedle",
    value: function createNeedle() {
      this.needle = (0, _needles.arrowNeedle)(this.snap, POINTER_RADIUS, POINTER_SMALL_RADIUS, POINTER_ARROW, POINTER_WIDTH);
      (0, _primitives.circle)(this.snap, CENTER, 4, "#888", 1, "black");
    }

    /**
     * update the needle
     * @param airspeed
     */
  }, {
    key: "setNeedle",
    value: function setNeedle(rpm) {
      this.needle.setCenterAndAngle(CX, CY, this.rpmToAngle(rpm));
    }

    /**
     * convert an RPM to an angle
     * @param rpm
     */
  }, {
    key: "rpmToAngle",
    value: function rpmToAngle(rpm) {
      // clamp to limits
      var v = Math.max(MIN_RPM, Math.min(MAX_RPM, rpm));
      // normalize
      var normalized = (v - MIN_RPM) / (MAX_RPM - MIN_RPM);
      // angle
      return (START_ANGLE + ANGLE_SWEEP * normalized) % 360;
    }

    /**
     * a property of the airplane was changed
     * @param airplane
     */
  }, {
    key: "onAirplaneChanged",
    value: function onAirplaneChanged(airplane) {
      console.assert(airplane === this.airplane, "not our airplane");
      this.setNeedle(this.airplane.rpm);
    }
  }]);
}(_instrument.default);
},{"DOMArray":"node_modules/DOMArray/dist/index.js","./instrument":"src/instrument.js","./geometry/angle":"src/geometry/angle.js","./geometry/vector2d":"src/geometry/vector2d.js","./graphics/primitives":"src/graphics/primitives.js","./needles":"src/needles.js","./utils/time":"src/utils/time.js","snapsvg-cjs":"node_modules/snapsvg-cjs/dist/snap.svg-cjs.js"}],"src/utils/math.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.round = exports.nonLinearScale = exports.lerp = exports.AnimatedValue = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * round a real to given number of decimal places. This is much better than toFixed for the following reasons:
 *
 * round(1.005, 2) = 1.01 ( toFixed would give 1.00 )
 * round(2.00, 2 ) = 2 ( toFixed would give 2.00 )
 * @param value
 * @param decimals
 * @returns {number}
 */
var round = exports.round = function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
};

// map an input value ( 0..1 ) to a non linear scale ( 0..maxValue ) where midvalue is the value
// at the midpoint of the non linear scale. NOTE: Specifying a linear scale will produce an error.
/**
 * map an input value 0..1 to a non linear scale 0..maxValue with a specified mid point
 *
 * @param inputValue
 * @param midValue
 * @param maxValue
 * @returns {number}
 */
var nonLinearScale = exports.nonLinearScale = function nonLinearScale(inputValue, midValue, maxValue) {
  var returnValue;
  console.assert(inputValue >= 0 && inputValue <= 1, "input value out of range");
  console.assert(midValue > 0 || midValue < maxValue, "MidValue must be greater than 0 and less than MaxValue");

  // returnValue = A + B * Math.Exp(C * inputValue);
  var M = maxValue / midValue;
  var C = Math.log(Math.pow(M - 1, 2));
  var B = maxValue / (Math.exp(C) - 1);
  var A = -1 * B;
  returnValue = A + B * Math.exp(C * inputValue);
  // you will get NaN for a linear scale, so handle that edge case by returning the scaled linear value
  if (isNaN(returnValue)) {
    return maxValue * inputValue;
  }
  return returnValue;
};

/**
 * lerp from -> to over the given time. Returns a function that can be used to
 * cancel the lerp at any time. If sine based ease is used by default by can be disabled.
 * @param from
 * @param to
 * @param time
 * @param callback
 * @param ease
 * @returns {function()}
 */
var lerp = exports.lerp = function lerp(from, to, time, callback) {
  var ease = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  console.assert(isFinite(from) && isFinite(to) && isFinite(time) && time > 0, "invalid parameters");

  // time span over which to operate
  var startTime = Date.now();
  var endTime = startTime + time;
  var requestId = 0;
  var timer = function timer() {
    var value = to;
    var now = Date.now();
    if (now < endTime) {
      var delta = now - startTime;
      var normalized = ease ? Math.sin(delta / time * (Math.PI / 2)) : delta / time;
      value = from + normalized * (to - from);
      requestId = requestAnimationFrame(timer);
    } else {
      requestId = 0;
    }
    callback(value);
  };
  requestId = requestAnimationFrame(timer);
  return function () {
    if (requestId) {
      cancelAnimationFrame(requestId);
    }
  };
};

/**
 * TODO, gives this a shared requestAnimationFrame
 */
var AnimatedValue = exports.AnimatedValue = /*#__PURE__*/function () {
  function AnimatedValue(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, AnimatedValue);
    // assign our option
    Object.assign(this, options, {
      lowLimit: -Number.MAX_VALUE,
      hiLimit: Number.MAX_VALUE,
      time: 1000,
      callback: function callback() {}
    });
    // the actual value with initial clamping
    this.value = Math.max(this.lowLimit, Math.min(this.hiLimit, value));
    // the current value of the animation
    this.currentValue = value;
  }

  /**
   * set the value and begin a lerp as necessary to reach it
   * @param value
   */
  return _createClass(AnimatedValue, [{
    key: "setValue",
    value: function setValue(value) {
      var _this = this;
      if (value !== this.value) {
        this.cancelLerp();
        this.value = Math.max(this.lowLimit, Math.min(this.hiLimit, value));
        this.lerp = lerp(this.currentValue, this.value, this.time, function (v) {
          _this.currentValue = v;
          _this.callback(_this.currentValue, _this.value);
        });
      }
    }

    /**
     * set the value with immediate effect, no animation
     * @param value
     */
  }, {
    key: "setValueImmediate",
    value: function setValueImmediate(value) {
      this.value = Math.max(this.lowLimit, Math.min(this.hiLimit, value));
      this.currentValue = value;
      this.cancelLerp();
      this.callback(this.currentValue, this.value);
    }

    /**
     * cancel any current lerp
     */
  }, {
    key: "cancelLerp",
    value: function cancelLerp() {
      if (this.lerp) {
        this.lerp();
        this.lerp = null;
      }
    }
  }]);
}();
},{}],"src/airspeed_analog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _DOMArray = _interopRequireDefault(require("DOMArray"));
var _instrument = _interopRequireDefault(require("./instrument"));
var _math = require("./utils/math");
var _angle = require("./geometry/angle");
var _vector2d = _interopRequireDefault(require("./geometry/vector2d"));
var _primitives = require("./graphics/primitives");
var _needles = require("./needles");
var _time = require("./utils/time");
var _snapsvgCjs = _interopRequireDefault(require("snapsvg-cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Regardless of our DOM element size we will render using the constants below
 * and use a transform to scale the resulting SVG to the required size, without altering the aspect ratio
 */

// inset of edges of element
var I = 0;
// width and height
var W = 400;
var H = 400;
// outer radius
var R = (Math.min(W, H) - I) / 2;
// center
var CX = W / 2;
var CY = H / 2;
var CENTER = new _vector2d.default(CX, CY);

// thickness of outer three rings of case
var CASE1 = 8;
var CASE2 = 10;
var CASE3 = 14;

// outer radius of all tick marks
var TICK1 = R - (CASE1 + CASE2 + CASE3);
// inner radius of small ticks
var TICK2 = TICK1 - 40;
// inner radius of large ticks
var TICK3 = TICK1 - 50;
// radius of center of airspeed labels
var LABEL_RADIUS = TICK3 - 26;

// width of range arcs
var ARC_WIDTH = 22;

// width of range arcs
var FLAP_ARC_WIDTH = 18;

// radius of white arc
var WHITE_ARC_RADIUS = TICK3 + ARC_WIDTH * 2 - ARC_WIDTH / 2 - 1;
// green / yellow arcs
var ARC_RADIUS = TICK3 + ARC_WIDTH / 2;

// max airspeed angle on face
var MAX_SPEED_ANGLE = 320;
// airspeed at 6 o'clock
var MID_SPEED = 115;
var POINTER_SMALL_RADIUS = 40;
var POINTER_WIDTH = 14;
var POINTER_ARROW = 6;
var POINTER_RADIUS = WHITE_ARC_RADIUS + FLAP_ARC_WIDTH / 2 - POINTER_ARROW;
var POINTER_MID = POINTER_RADIUS * 0.65;
var AirspeedAnalog = exports.default = /*#__PURE__*/function (_Instrument) {
  function AirspeedAnalog(options) {
    var _this;
    _classCallCheck(this, AirspeedAnalog);
    _this = _callSuper(this, AirspeedAnalog, [Object.assign({
      width: W,
      height: H
    }, options)]);
    console.assert(_this.parentElement, "instrument requires a parent to attach to");
    _this.template = (0, _DOMArray.default)("\n      <svg r=\"svg\" height=\"".concat(W, "\" width=\"").concat(H, "\" xmlns=\"http://www.w3.org/2000/svg\"></svg>\n    "));
    _this.template.zip(_this);
    _this.snap = new _snapsvgCjs.default(_this.svg.el);

    // figure out the airspeed closest to 12 o'clock. This is our minimum displayable speed
    _this.minimumDisplayableSpeed = 0;
    var nearest = Number.MAX_VALUE;
    for (var i = _this.airplane.VS0; i >= 0; i -= 0.2) {
      var angle = _this.airspeedToAngle(i);
      if (Math.abs(angle - 270) < nearest) {
        _this.minimumDisplayableSpeed = i;
        nearest = Math.abs(angle - 270);
      }
    }

    // initial render of instrument
    _this.renderImmutable();
    _this.createNeedle();

    // set needle to default display position
    _this.setNeedle(_this.airplane.airspeed);

    // listen for changes to the airplane
    _this.onAirplaneChanged = _this.onAirplaneChanged.bind(_this);
    _this.airplane.addListener(_this.onAirplaneChanged);
    _this.addDisposable(function () {
      return _this.airplane.removeListener(_this.onAirplaneChanged);
    });
    _this.template.appendTo(_this.parentElement);
    _this.addDisposable(function () {
      return _this.template.remove();
    });
    return _this;
  }

  /**
   * enter demonstration mode
   */
  _inherits(AirspeedAnalog, _Instrument);
  return _createClass(AirspeedAnalog, [{
    key: "demoStart",
    value: function demoStart() {
      var _this2 = this;
      this.addLerp("demo", (0, _time.interval)(function () {
        var speed = _this2.airplane.VS0 + (_this2.airplane.VNE - _this2.airplane.VS0) * Math.random();
        _this2.airplane.setAirspeed(speed);
      }, 2000));
    }

    /**
     * cancel demo mode
     */
  }, {
    key: "demoStop",
    value: function demoStop() {
      this.cancelLerp("demo");
    }

    /**
     * render the non changing parts of the instrument
     */
  }, {
    key: "renderImmutable",
    value: function renderImmutable() {
      this.renderCase();
      this.renderSpeedArcs();
      this.renderText();
      this.renderTicks();
      this.renderAirspeeds();
      this.renderShadow();
    }

    /**
     * render the shared three outer rings of the bezel
     */
  }, {
    key: "renderCase",
    value: function renderCase() {
      // draw three outer rings of the instrument case
      (0, _primitives.circle)(this.snap, CENTER, R - CASE1 / 2, this.snap.gradient("l(0, 0, 1, 1)#FFF:0-#888:20-#111:100"), CASE1, "black");
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 / 2), this.snap.gradient("l(0, 0, 1, 1)#111-#666"), CASE2, "black");
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 + CASE3 / 2), this.snap.gradient("l(0, 0, 1, 1)#000:0-#888:70-#FFF:100"), CASE3, this.snap.gradient("l(0, 0, 1, 1)#000:0-#222:100"));
    }

    /**
     * render the three speed arcs ( white, green, yellow )
     */
  }, {
    key: "renderSpeedArcs",
    value: function renderSpeedArcs() {
      // draw the flap (white) normal ( green ) and caution ( yellow ) speed arcs
      (0, _primitives.arc)(this.snap, CENTER, WHITE_ARC_RADIUS, ARC_WIDTH, 0, "white", "white", this.airspeedToAngle(this.airplane.VS0), this.airspeedToAngle(this.airplane.VFE), true);
      (0, _primitives.arc)(this.snap, CENTER, ARC_RADIUS, ARC_WIDTH, 0, "transparent", "#00EE00", this.airspeedToAngle(this.airplane.VS1), this.airspeedToAngle(this.airplane.VNO), true);
      (0, _primitives.arc)(this.snap, CENTER, ARC_RADIUS, ARC_WIDTH, 0, "transparent", "#FFDC00", this.airspeedToAngle(this.airplane.VNO), this.airspeedToAngle(this.airplane.VNE), true);
    }

    /**
     * render static text, KNOTS and AIR SPEED
     */
  }, {
    key: "renderText",
    value: function renderText() {
      // draw airspeeds and knots labels
      (0, _primitives.centeredText)(this.snap, new _vector2d.default(CX, CY + 50), "KNOTS", "white", "16px");
      (0, _primitives.centeredText)(this.snap, new _vector2d.default(CX, 70), "AIR", "white", "16px");
      (0, _primitives.centeredText)(this.snap, new _vector2d.default(CX, 90), "SPEED", "white", "16px");
    }

    /**
     * render the knots ( KIAS ) tick marks around the outside of the face.
     */
  }, {
    key: "renderTicks",
    value: function renderTicks() {
      // draw VS0 to MAX_SPEED in 10 knot intervals
      for (var i = this.airplane.VS0; i <= this.airplane.MAX_DISPLAYED_SPEED; i += 10) {
        (0, _primitives.tick)(this.snap, CENTER, this.airspeedToAngle(i), TICK1, TICK3, 4, "white");
      }

      // small ticks at 5 knot intervals
      for (var _i = this.airplane.VS0 + 5; _i <= this.airplane.MAX_DISPLAYED_SPEED - 5; _i += 10) {
        (0, _primitives.tick)(this.snap, CENTER, this.airspeedToAngle(_i), TICK1, TICK2, 2, "white");
      }

      // draw VNE tick mark
      (0, _primitives.tick)(this.snap, CENTER, this.airspeedToAngle(this.airplane.VNE), TICK1, TICK3, 7, "red");
    }

    /**
     * rendered the numbers airspeeds
     */
  }, {
    key: "renderAirspeeds",
    value: function renderAirspeeds() {
      // draw airspeed labels 40, 60, ... 200 in intervals of 20
      for (var i = this.airplane.VS0; i <= this.airplane.MAX_DISPLAYED_SPEED; i += 20) {
        var position = (0, _angle.POC)(CENTER, LABEL_RADIUS, this.airspeedToAngle(i));
        (0, _primitives.centeredText)(this.snap, position, i, "white", "24px", "Verdana", "bold");
      }
    }

    /**
     * render an almost transparent gradient over the face to give the appearance of
     * shadow and depth
     */
  }, {
    key: "renderShadow",
    value: function renderShadow() {
      // draw a radial gradient over the face to give a small hint of shadow from the case
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 + CASE3), "transparent", 0, this.snap.gradient("r(0.5, 0.5, 0.5)transparent:85-rgba(0,0,0,0.6)"));
    }

    /**
     * create the needle shape
     */
  }, {
    key: "createNeedle",
    value: function createNeedle() {
      this.needle = (0, _needles.steppedNeedle)(this.snap, POINTER_RADIUS, POINTER_SMALL_RADIUS, POINTER_MID, POINTER_ARROW, POINTER_WIDTH);
      (0, _primitives.circle)(this.snap, CENTER, 4, "#888", 1, "black");
    }

    /**
     * immediately set the needle to the given airspeed
     * @param airspeed
     */
  }, {
    key: "setNeedle",
    value: function setNeedle(airspeed) {
      var angle = this.airspeedToAngle(Math.max(this.minimumDisplayableSpeed, airspeed));
      this.needle.setCenterAndAngle(CX, CY, angle);
    }

    /**
     * convert the given airspeed ( KIAS ) into an angle in degrees.
     * @param airspeed
     * @returns {number}
     */
  }, {
    key: "airspeedToAngle",
    value: function airspeedToAngle(airspeed) {
      console.assert(airspeed >= 0 && airspeed <= this.airplane.MAX_DISPLAYED_SPEED, "airspeed out of range");
      // convert airspeed to 0..1
      var normalized = airspeed / this.airplane.MAX_DISPLAYED_SPEED;
      // get non linear value 0..MAX_SPEED
      var nonLinear = (0, _math.nonLinearScale)(normalized, MID_SPEED, this.airplane.MAX_DISPLAYED_SPEED);
      // zero airspeed is actually starts at MAX_SPEED and goes clockwise
      var circle = 360 * (nonLinear / this.airplane.MAX_DISPLAYED_SPEED);
      return (0, _angle.C2D)((MAX_SPEED_ANGLE + circle) % 360);
    }

    /**
     * a property of the airplane was changed
     * @param airplane
     */
  }, {
    key: "onAirplaneChanged",
    value: function onAirplaneChanged(airplane) {
      console.assert(airplane === this.airplane, "not our airplane");
      this.setNeedle(this.airplane.airspeed);
    }
  }]);
}(_instrument.default);
},{"DOMArray":"node_modules/DOMArray/dist/index.js","./instrument":"src/instrument.js","./utils/math":"src/utils/math.js","./geometry/angle":"src/geometry/angle.js","./geometry/vector2d":"src/geometry/vector2d.js","./graphics/primitives":"src/graphics/primitives.js","./needles":"src/needles.js","./utils/time":"src/utils/time.js","snapsvg-cjs":"node_modules/snapsvg-cjs/dist/snap.svg-cjs.js"}],"src/graphics/colors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = void 0;
var colors = exports.colors = {
  // standard palette
  navy: "#001f3f",
  blue: "#0074D9",
  aqua: "#7FDBFF",
  teal: "#39CCCC",
  olive: "#3D9970",
  green: "#2ECC40",
  lime: "#01FF70",
  yellow: "#FFDC00",
  orange: "#FF851B",
  red: "#FF4136",
  maroon: "#85144b",
  fuchsia: "#F012BE",
  purple: "#B10DC9",
  black: "#111111",
  charcoal: "#555",
  gray: "#AAAAAA",
  silver: "#DDDDDD",
  white: "#FFFFFF",
  // used for example on the face of the attitude indicator
  sky: "#6ca3e3",
  earth: "#67411a",
  // color for a compass / vor rose on a sectional
  compassRose: "#084e8a"
};
},{}],"src/utils/mouse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _DOMArray = _interopRequireDefault(require("DOMArray"));
var _disposable = _interopRequireDefault(require("../disposable"));
var _vector2d = _interopRequireDefault(require("../geometry/vector2d"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// native events we capture
var events = ["mousemove", "mousedown", "mouseup", "mouseover", "mouseout"];
// synthetic events we produce. If can, optionally, register for these events.
// If you do you will receive them whenever the node is the target of a
// call to setCapture, release capture. This gives you a clean way of tracking
// the start and end of capture.
// NOTE: the callback for these events receive no parameters.
var sEvents = ["setCapture", "releaseCapture"];
var Mouse = exports.default = /*#__PURE__*/function (_Disposable) {
  function Mouse() {
    var _this;
    _classCallCheck(this, Mouse);
    _this = _callSuper(this, Mouse);
    // save some typing
    _this.d = document.documentElement;
    // capture all events
    _this.handleEvent = _this.handleEvent.bind(_this);
    events.forEach(function (name) {
      _this.d.addEventListener(name, _this.handleEvent);
    });
    _this.addDisposable(function () {
      events.forEach(function (name) {
        return _this.d.removeEventListener(name, _this.handleEvent);
      });
    });
    // map event name to listeners of that event ( ears )
    _this.hash = {};
    // the node that current has the capture
    _this.captureNode = null;
    return _this;
  }

  /**
   * event handler for all events
   * @param e
   */
  _inherits(Mouse, _Disposable);
  return _createClass(Mouse, [{
    key: "handleEvent",
    value: function handleEvent(e) {
      var _this2 = this;
      // get all ears for this event
      var ears = this.hash[e.type];
      if (ears) {
        ears.forEach(function (ear) {
          // if capturing all events go to the captureNode
          if (_this2.captureNode) {
            ear.callback(e, _this2.eventToNode(ear.node, e), true);
          } else {
            // otherwise only if event targets the node or children of node as specified
            if (e.target === ear.node || ear.includeDescendants && _this2.contains(e.target, ear.node)) {
              ear.callback(e, _this2.eventToNode(ear.node, e), false);
            }
          }
        });
      }
    }

    /**
     * get position of mouse in the coordinate system of the node.
     * Both getBoundingClientRect and the clientX, clientY coordinate of mouse events are in
     * viewport space so there is no need to convert into document/global space first.
     * @param node
     */
  }, {
    key: "eventToNode",
    value: function eventToNode(node, event) {
      // viewport relative bounds of node
      var box = node.getBoundingClientRect();
      // clientX/Y are viewport relative, so just subtract the elements viewport bounds
      return new _vector2d.default(event.clientX - box.x, event.clientY - box.y);
    }

    /**
     * returns true if descendant really is a descendant of parent
     * https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
     * @param ancestor
     * @param descendant
     */
  }, {
    key: "contains",
    value: function contains(ancestor, descendant) {
      var relationship = ancestor.compareDocumentPosition(descendant);
      return relationship & 8;
    }

    /**
     * register a listener for a given event and node. You can either include or exclude
     * events to the descendants of the given node
     * @param event
     * @param node
     * @param callback
     * @param includeDescendants
     */
  }, {
    key: "register",
    value: function register(event, node, callback) {
      var includeDescendants = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      // you can only register for one of our event
      if (!this.hash[event]) {
        this.hash[event] = [];
      }
      this.hash[event].push({
        node: node,
        callback: callback,
        includeDescendants: includeDescendants
      });
    }

    /**
     * unregister a handler using the same parameters as were used to register it. Everything must match
     * @param event
     * @param node
     * @param callback
     * @param includeDescendants
     */
  }, {
    key: "unregister",
    value: function unregister(event, node, callback) {
      var _this3 = this;
      var includeDescendants = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      console.assert(this.hash[event], "nothing registered for this event");
      var removed = 0;
      this.hash[event].forEach(function (record, index) {
        if (record.node === node && record.callback === callback && record.includeDescendants === includeDescendants) {
          _this3.hash[event].splice(index, 1);
          // if this is the capture node then cancel capture
          if (record.node === _this3.captureNode) {
            _this3.releaseCapture();
          }
          removed += 1;
        }
      });
      console.assert(removed !== 1, "unregister did not match exactly one record");
    }

    /**
     * Return the listener for the named event and the given node
     * @param eventName
     * @param node
     */
  }, {
    key: "findNode",
    value: function findNode(eventName, node) {
      var list = this.hash[eventName];
      if (list) {
        return list.find(function (record) {
          return record.node === node;
        });
      }
      return null;
    }

    /**
     * send all events to the capture node until releaseCapture is called.
     * @param node
     */
  }, {
    key: "setCapture",
    value: function setCapture(node) {
      this.releaseCapture();
      this.captureNode = node;
      // find a listener for 'setCapture' for this node
      var record = this.findNode("setCapture", this.captureNode);
      if (record) {
        record.callback();
      }
    }

    /**
     * release the capture on the given node
     */
  }, {
    key: "releaseCapture",
    value: function releaseCapture() {
      if (this.captureNode) {
        // find a listener for 'releaseCapture' for this node
        var record = this.findNode("releaseCapture", this.captureNode);
        if (record) {
          record.callback();
        }
        this.captureNode = null;
      }
    }
  }]);
}(_disposable.default);
},{"DOMArray":"node_modules/DOMArray/dist/index.js","../disposable":"src/disposable.js","../geometry/vector2d":"src/geometry/vector2d.js"}],"src/rotatable-button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _disposable = _interopRequireDefault(require("./disposable"));
var _animated = _interopRequireDefault(require("./animated"));
var _DOMArray = _interopRequireDefault(require("DOMArray"));
var _angle = require("./geometry/angle");
var _vector2d = _interopRequireDefault(require("./geometry/vector2d"));
var _primitives = require("./graphics/primitives");
var _colors = require("./graphics/colors");
var _math = require("./utils/math");
var _time = require("./utils/time");
var _snapsvgCjs = _interopRequireDefault(require("snapsvg-cjs"));
var _mouse = _interopRequireDefault(require("./utils/mouse"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// outer beveled ring thickess
var CASE1 = 5;

// anglular changes above this delta are ignored
var JITTER_THRESHOLD = 20;

// scale when pop'ed out
var POP_SCALE = 1.25;

/**
 * base class for all analog / digital instruments
 */
var Rotatable = exports.default = /*#__PURE__*/function (_Animated) {
  function Rotatable(options) {
    var _this;
    _classCallCheck(this, Rotatable);
    _this = _callSuper(this, Rotatable);
    Object.assign(_this, {
      radius: 30,
      text: "",
      textColor: _colors.colors.white,
      rotation: 0,
      rotationCallback: null,
      clickCallback: null,
      gear: 1,
      fontSize: "16px",
      randomize: true,
      popout: false,
      popState: false
    }, options);
    console.assert(_this.snap, "requires a snap paper");
    console.assert(_this.rotationCallback || _this.clickCallback, "requires a rotation or click callback");
    _this.center = new _vector2d.default(_this.radius, _this.radius);
    _this.randomOffset = _this.randomize ? Math.random() * 360 : 0;
    _this.renderImmutable();
    return _this;
  }

  /**
   * set the pop scale ana update
   * @param s
   */
  _inherits(Rotatable, _Animated);
  return _createClass(Rotatable, [{
    key: "setPopScale",
    value: function setPopScale(s) {
      var _this2 = this;
      this.scale = s;
      this.addLerp("scale", (0, _math.lerp)(this.displayScale, this.scale, 200, function (v) {
        _this2.displayScale = v;
        _this2.updateTransform();
        _this2.updateButtonColor();
      }));
    }
  }, {
    key: "renderImmutable",
    value: function renderImmutable() {
      // group everything for centering on parent location and rotation
      this.group = this.snap.group();
      this.group.attr({
        class: "clickable"
      });
      this.el = (0, _primitives.circle)(this.snap, this.center, this.radius - CASE1 / 2, this.snap.gradient("l(0, 0, 1, 1)#FFF:0-#888:20-#111:100"), CASE1, _colors.colors.black);
      this.text = (0, _primitives.centeredText)(this.snap, this.center, this.text, this.textColor, this.fontSize);

      // set initial position which might be random
      this.text.attr({
        transform: "r ".concat(this.rotation + this.randomOffset, " ").concat(this.center.x, " ").concat(this.center.y)
      });

      // this is a nearly invisible outer circle that enlarges the area which
      // is responsive to clicks and touches. Useful on small screens and touch devices.
      this.outer = (0, _primitives.circle)(this.snap, this.center, this.radius * 2, "none", 0, "rgba(0, 0, 0, 0.001)");
      this.group.add(this.el, this.text, this.outer);

      // setup mouse interactions
      this.mouse = new _mouse.default();
      this.onMouseDown = this.onMouseDown.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);
      this.onMouseUp = this.onMouseUp.bind(this);
      this.mouse.register("mousemove", this.group.node, this.onMouseMove);
      this.mouse.register("mousedown", this.group.node, this.onMouseDown);
      this.mouse.register("mouseup", this.group.node, this.onMouseUp);

      // set default center
      this.centerOn(this.center);

      // set default scale
      this.displayScale = this.popState ? POP_SCALE : 1;
      this.setPopScale(this.displayScale);
    }

    /**
     * set color of button face according to the currently displayed scale
     * @param color
     */
  }, {
    key: "updateButtonColor",
    value: function updateButtonColor() {
      var normalized = (this.displayScale - 1) / (POP_SCALE - 1);
      var gray = Math.floor(normalized * 92);
      this.el.attr({
        fill: "rgb(".concat(gray, ", ").concat(gray, ", ").concat(gray, ")")
      });
    }

    /**
     *
     * @param e
     * @param local
     */
  }, {
    key: "onMouseDown",
    value: function onMouseDown(e, local) {
      this.lastAngle = (0, _angle.angleFrom)(this.center, local);
      this.mouse.setCapture(this.group.node);
    }

    /**
     * mouse is released
     * @param e
     * @param local
     */
  }, {
    key: "onMouseUp",
    value: function onMouseUp(e, local, capture) {
      if (capture && this.clickCallback) {
        this.clickCallback();
      }
      this.mouse.releaseCapture();
      if (this.popout) {
        this.togglePopout();
      }
    }

    /**
     * repond to twisting when capturing the mouse
     * @param e
     * @param local
     */
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e, local, capture) {
      // mouse rotation swipes only if capturing and there is a rotation callback
      if (capture && this.rotationCallback) {
        console.assert(isFinite(this.lastAngle), "lastAngle must be set");
        var angle = (0, _angle.angleFrom)(this.center, local);
        var delta = (0, _angle.angularDelta)(this.lastAngle, angle);
        this.lastAngle = angle;
        // ignore if delta above a threshold to avoid too much jumpiness
        if (Math.abs(delta) < JITTER_THRESHOLD) {
          this.rotationCallback(delta * this.gear);
          this.rotation = this.rotation + delta;
          this.text.attr({
            transform: "r ".concat(this.rotation + this.randomOffset, " ").concat(this.center.x, " ").concat(this.center.y)
          });
        }
      }
    }

    /**
     * toggle popstate
     */
  }, {
    key: "togglePopout",
    value: function togglePopout() {
      this.popState = !this.popState;
      this.setPopScale(this.popState ? POP_SCALE : 1);
    }

    /**
     * position / center ourselves on the given location
     * @param point
     */
  }, {
    key: "centerOn",
    value: function centerOn(point) {
      this.position = new _vector2d.default(point.x, point.y);
      this.updateTransform();
    }

    /**
     * update position and scale
     */
  }, {
    key: "updateTransform",
    value: function updateTransform() {
      this.group.attr({
        transform: "t ".concat(this.position.x - this.radius, " ").concat(this.position.y - this.radius, " s").concat(this.displayScale, " ").concat(this.radius, " ").concat(this.radius)
      });
    }
  }]);
}(_animated.default);
},{"./disposable":"src/disposable.js","./animated":"src/animated.js","DOMArray":"node_modules/DOMArray/dist/index.js","./geometry/angle":"src/geometry/angle.js","./geometry/vector2d":"src/geometry/vector2d.js","./graphics/primitives":"src/graphics/primitives.js","./graphics/colors":"src/graphics/colors.js","./utils/math":"src/utils/math.js","./utils/time":"src/utils/time.js","snapsvg-cjs":"node_modules/snapsvg-cjs/dist/snap.svg-cjs.js","./utils/mouse":"src/utils/mouse.js"}],"src/attitude_indicator_analog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _DOMArray = _interopRequireDefault(require("DOMArray"));
var _instrument = _interopRequireDefault(require("./instrument"));
var _rotatableButton = _interopRequireDefault(require("./rotatable-button"));
var _angle = require("./geometry/angle");
var _vector2d = _interopRequireDefault(require("./geometry/vector2d"));
var _primitives = require("./graphics/primitives");
var _time = require("./utils/time");
var _colors = require("./graphics/colors");
var _math = require("./utils/math");
var _snapsvgCjs = _interopRequireDefault(require("snapsvg-cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Regardless of our DOM element size we will render using the constants below
 * and use a transform to scale the resulting SVG to the required size, without altering the aspect ratio
 */

// inset of edges of element
var I = 0;
// width and height
var W = 400;
var H = 400;

// outer radius
var R = (Math.min(W, H) - I) / 2;
// center
var CX = W / 2;
var CY = H / 2;
var CENTER = new _vector2d.default(CX, CY);

// thickness of outer three rings of case
var CASE1 = 8;
var CASE2 = 10;
var CASE3 = 14;

// color of sky and earth
var COLOR_SKY = _colors.colors.sky;
var COLOR_EARTH = _colors.colors.earth;

// radius/thickness of outer bezel
var OUTER_THICKNESS = 40;
var OUTER_RADIUS = R - (CASE1 + CASE2 + CASE3 + OUTER_THICKNESS / 2);
// radius of inner bezel
var INNER_RADIUS = R - (CASE1 + CASE2 + CASE3 + OUTER_THICKNESS);
// determines length of pitch tick marks
var TICK_M = 4;
// width of small ( 5 increment ) tick marks
var SMALL_TICK_WIDTH = 25;
// on the pitch axis this is the ratio between degrees of pitch and pixels the face will move up or down
var PITCH_TO_PIXELS = 3.2;
// pointer base metrics
var POINTER_BASE_THICKNESS = W / 4;
var POINTER_BASE_ARC = 40;
// pointer arm THICKNESS
var PA_T = 8;
var PA_BH = W / 2 - 40;
var PA_BI = CASE1;
var PA_ARM = W / 6;
var PA_TRI_W = 30;
var PA_TRI_H = 32;
var PA_TRI_R = R - (CASE1 + CASE2 + CASE3 + OUTER_THICKNESS);

// vertical adjustment button
var V_ADJUST_CENTER = (0, _angle.POC)(CENTER, OUTER_RADIUS, 90);
// vertical adjustment is limited to this number of pixels +/- of center
var V_ADJUST_LIMIT = PITCH_TO_PIXELS * 5;

// cage button
var CAGE_CENTER = (0, _angle.POC)(CENTER, R, 45);
var AttitudeIndicatorAnalog = exports.default = /*#__PURE__*/function (_Instrument) {
  function AttitudeIndicatorAnalog(options) {
    var _this;
    _classCallCheck(this, AttitudeIndicatorAnalog);
    _this = _callSuper(this, AttitudeIndicatorAnalog, [Object.assign({
      width: W,
      height: H,
      // deflection, +/- between the vertical adjustment limits
      verticalAdjustment: 0,
      // if true the attitude is caged
      caged: false,
      // used to damp pitch and roll when caged ( by setting to zero )
      cageMultiplier: 1
    }, options)]);
    console.assert(_this.parentElement, "instrument requires a parent to attach to");
    _this.template = (0, _DOMArray.default)("\n      <svg r=\"svg\" height=\"".concat(W, "\" width=\"").concat(H, "\" xmlns=\"http://www.w3.org/2000/svg\"></svg>\n    "));
    _this.template.zip(_this);
    _this.snap = new _snapsvgCjs.default(_this.svg.el);
    _this.pitch = _this.roll = 0;
    _this.renderImmutable();
    _this.setRollAndPitch(_this.airplane.roll, _this.airplane.pitch);
    _this.template.appendTo(_this.parentElement);

    // listen for changes to the airplane
    _this.onAirplaneChanged = _this.onAirplaneChanged.bind(_this);
    _this.airplane.addListener(_this.onAirplaneChanged);
    _this.addDisposable(function () {
      return _this.airplane.removeListener(_this.onAirplaneChanged);
    });
    return _this;
  }

  /**
   * enter demonstration mode
   */
  _inherits(AttitudeIndicatorAnalog, _Instrument);
  return _createClass(AttitudeIndicatorAnalog, [{
    key: "demoStart",
    value: function demoStart() {
      var _this2 = this;
      this.addLerp("demo", (0, _time.interval)(function () {
        _this2.airplane.setRoll(-45 + 90 * Math.random());
        _this2.airplane.setPitch(-20 + 40 * Math.random());
      }, 3000));
    }

    /**
     * cancel demo mode
     */
  }, {
    key: "demoStop",
    value: function demoStop() {
      this.cancelLerp("demo");
    }

    /**
     * render the non changing parts of the instrument
     */
  }, {
    key: "renderImmutable",
    value: function renderImmutable() {
      this.renderCase();
      this.renderInnerBezel();
      this.renderOuterBezel();
      this.renderShadow();
      this.renderPointers();
      this.renderButtons();
    }

    /**
     * create the vertical adjustment button and CAGE buttons
     */
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      // v adjust button
      this.verticalAdjustButton = new _rotatableButton.default({
        snap: this.snap,
        text: "↕",
        fontSize: "32px",
        textColor: _colors.colors.silver,
        gear: 0.05,
        randomize: false,
        rotationCallback: this.onVerticalAdjustment.bind(this)
      });
      this.verticalAdjustButton.centerOn(V_ADJUST_CENTER);

      // cage button, PULL ( click ) to enter caged mode
      this.cageButton = new _rotatableButton.default({
        snap: this.snap,
        text: "CAGE",
        textColor: _colors.colors.silver,
        gear: 1,
        clickCallback: this.onCageToggle.bind(this),
        randomize: false,
        popout: true
      });
      this.cageButton.centerOn(CAGE_CENTER);
    }

    /**
     * vertical adjustment button was twisted
     * @param delta
     */
  }, {
    key: "onVerticalAdjustment",
    value: function onVerticalAdjustment(delta) {
      var v = Math.max(-V_ADJUST_LIMIT, Math.min(V_ADJUST_LIMIT, this.verticalAdjustment + delta));
      this.setArmGroupVerticalAdjustment(v);
    }

    /**
     * toggle cage mode
     */
  }, {
    key: "onCageToggle",
    value: function onCageToggle() {
      var _this3 = this;
      this.caged = !this.caged;
      var from = this.cageMultiplier;
      var to = this.caged ? 0 : 1;
      this.addLerp("caged", (0, _math.lerp)(from, to, 2000, function (v) {
        _this3.cageMultiplier = v;
        _this3.setRollAndPitch(_this3.airplane.roll, _this3.airplane.pitch);
      }));
    }

    /**
     * render the shared three outer rings of the bezel
     */
  }, {
    key: "renderCase",
    value: function renderCase() {
      // draw three outer rings of the instrument case
      (0, _primitives.circle)(this.snap, CENTER, R - CASE1 / 2, this.snap.gradient("l(0, 0, 1, 1)#FFF:0-#888:20-#111:100"), CASE1, "black");
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 / 2), this.snap.gradient("l(0, 0, 1, 1)#111-#666"), CASE2, "black");
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 + CASE3 / 2), this.snap.gradient("l(0, 0, 1, 1)#000:0-#888:70-#FFF:100"), CASE3, this.snap.gradient("l(0, 0, 1, 1)#000:0-#222:100"));
    }

    /**
     * render airplane pointer and level indicator ( arrow at top )
     */
  }, {
    key: "renderPointers",
    value: function renderPointers() {
      // group all the arms parts together so they can be vertically adjusted
      this.armGroup = this.snap.group();

      // draw vertical line from base to below the ball
      var bottom = H - PA_BI;
      var top = bottom - PA_BH;
      this.armGroup.add((0, _primitives.rectangle)(this.snap, CX - PA_T / 2, top, PA_T, bottom - top - V_ADJUST_LIMIT, "transparent", 0, _colors.colors.orange, PA_T / 2, PA_T / 2));
      // horizontal central arm
      var left = CX - PA_ARM / 2;
      var right = CX + PA_ARM / 2;
      this.armGroup.add((0, _primitives.rectangle)(this.snap, left, top, right - left, PA_T, "transparent", 0, _colors.colors.orange, PA_T / 2, PA_T / 2));
      // two vertical wing supports
      var WY = CY - PA_T / 2;
      this.armGroup.add((0, _primitives.rectangle)(this.snap, left, WY, PA_T, top - WY + PA_T, "transparent", 0, _colors.colors.orange, PA_T / 2, PA_T / 2));
      this.armGroup.add((0, _primitives.rectangle)(this.snap, right - PA_T, WY, PA_T, top - WY + PA_T, "transparent", 0, _colors.colors.orange, PA_T / 2, PA_T / 2));
      // two wings
      this.armGroup.add((0, _primitives.rectangle)(this.snap, left - PA_ARM + PA_T, WY, PA_ARM, PA_T, "transparent", 0, _colors.colors.orange, PA_T / 2, PA_T / 2));
      this.armGroup.add((0, _primitives.rectangle)(this.snap, right - PA_T, WY, PA_ARM, PA_T, "transparent", 0, _colors.colors.orange, PA_T / 2, PA_T / 2));
      // aiming ball
      this.armGroup.add((0, _primitives.circle)(this.snap, CENTER, PA_T / 1.5, "transparent", 0, _colors.colors.orange));

      // draw base for pointer
      (0, _primitives.arc)(this.snap, CENTER, R - CASE1 - POINTER_BASE_THICKNESS / 2, POINTER_BASE_THICKNESS, 1, "#111", "#333", 90 - POINTER_BASE_ARC / 2, 90 + POINTER_BASE_ARC / 2, true);
      // draw triangle pointer at 12 o'clock
      var p1 = (0, _angle.POC)(CENTER, PA_TRI_R, 270);
      var p2 = new _vector2d.default(p1.x - PA_TRI_W / 2, p1.y + PA_TRI_H);
      var p3 = new _vector2d.default(p1.x + PA_TRI_W / 2, p1.y + PA_TRI_H);
      (0, _primitives.triangle)(this.snap, p1, p2, p3, "transparent", 0, _colors.colors.orange);
    }

    /**
     * set the vertical adjustment +/- pixels from center
     * @param pixels
     */
  }, {
    key: "setArmGroupVerticalAdjustment",
    value: function setArmGroupVerticalAdjustment(pixels) {
      this.verticalAdjustment = pixels;
      console.log(this.verticalAdjustment);
      this.armGroup.attr({
        transform: "t 0 ".concat(this.verticalAdjustment)
      });
    }

    /**
     * render inner bezel with tick marks
     */
  }, {
    key: "renderInnerBezel",
    value: function renderInnerBezel() {
      var _this4 = this;
      this.innerBezel = new _snapsvgCjs.default(W, H);
      this.innerBezelFace = this.innerBezel.group();

      // the actual face is circle that is rotated by not moved. The gradient is adjust
      // to give the pitch indication
      this.pitchCircle = (0, _primitives.circle)(this.snap, CENTER, INNER_RADIUS, "transparent", 0, this.pitchGradient());

      // add pitch up marks at 5, 10, 15, 20 degrees, intervals of 10 are large ticks
      [10, 20, -10, -20].forEach(function (v) {
        var W = Math.abs(v) * TICK_M;
        var start = new _vector2d.default(CX - W / 2, CY - PITCH_TO_PIXELS * v);
        var end = new _vector2d.default(CX + W / 2, CY - PITCH_TO_PIXELS * v);
        _this4.innerBezelFace.add((0, _primitives.line)(_this4.innerBezel, start, end, "white", 3));
        _this4.innerBezelFace.add((0, _primitives.centeredText)(_this4.innerBezel, new _vector2d.default(start.x - 12, start.y), Math.abs(v), "white", "12px"));
        _this4.innerBezelFace.add((0, _primitives.centeredText)(_this4.innerBezel, new _vector2d.default(end.x + 12, end.y), Math.abs(v), "white", "12px"));
      });
      // small ticks
      // add pitch up marks at 5, 10, 15, 20 degrees, intervals of 10 are large ticks
      [5, 15, -5, -15].forEach(function (v) {
        var W = SMALL_TICK_WIDTH;
        var start = new _vector2d.default(CX - W / 2, CY - PITCH_TO_PIXELS * v);
        var end = new _vector2d.default(CX + W / 2, CY - PITCH_TO_PIXELS * v);
        _this4.innerBezelFace.add((0, _primitives.line)(_this4.innerBezel, start, end, "white", 2));
      });
      // add to outer SVG
      this.snap.add(this.innerBezel);
    }

    /**
     * pitch gradient adjusted to represent the current pitch
     * @returns {*}
     */
  }, {
    key: "pitchGradient",
    value: function pitchGradient() {
      // displayed pitch includes the cage multiplier
      var displayedPitch = this.pitch * this.cageMultiplier;
      // get correct position for sky/earth separator line ( gradients are generated using stops 0-100 )
      var pixelOffset = displayedPitch * PITCH_TO_PIXELS;
      var normalized = pixelOffset / INNER_RADIUS / 2;
      var y = 50 + normalized * 100;
      return this.snap.gradient("l(0, 0, 0, 1)".concat(COLOR_SKY, ":0-").concat(COLOR_SKY, ":").concat(y - 1, "-white:").concat(y, "-").concat(COLOR_EARTH, ":").concat(y + 1, "-").concat(COLOR_EARTH, ":100"));
    }

    /**
     * render out bezel with tick marks
     */
  }, {
    key: "renderOuterBezel",
    value: function renderOuterBezel() {
      var _this5 = this;
      this.outerBezel = new _snapsvgCjs.default(W, H);
      this.outerBezelFace = this.outerBezel.group();
      this.outerBezelFace.add((0, _primitives.circle)(this.outerBezel, CENTER, OUTER_RADIUS, this.snap.gradient("l(0, 0, 0, 1)".concat(COLOR_SKY, ":0-").concat(COLOR_SKY, ":50-").concat(COLOR_EARTH, ":50-").concat(COLOR_EARTH, ":100")), OUTER_THICKNESS, "transparent"));
      this.snap.add(this.outerBezel);
      // render ticks and triangles on outer bezel
      // small ticks
      [10, 20].forEach(function (a) {
        _this5.outerBezelFace.add((0, _primitives.tick)(_this5.outerBezel, CENTER, 270 + a, OUTER_RADIUS, OUTER_RADIUS - OUTER_THICKNESS / 2, 3, "white"));
        _this5.outerBezelFace.add((0, _primitives.tick)(_this5.outerBezel, CENTER, 270 - a, OUTER_RADIUS, OUTER_RADIUS - OUTER_THICKNESS / 2, 3, "white"));
      });
      // big ticks
      [30, 60, 90].forEach(function (a) {
        _this5.outerBezelFace.add((0, _primitives.tick)(_this5.outerBezel, CENTER, 270 + a, OUTER_RADIUS - OUTER_THICKNESS / 2, OUTER_RADIUS + OUTER_THICKNESS / 2, 6, "white"));
        _this5.outerBezelFace.add((0, _primitives.tick)(_this5.outerBezel, CENTER, 270 - a, OUTER_RADIUS - OUTER_THICKNESS / 2, OUTER_RADIUS + OUTER_THICKNESS / 2, 6, "white"));
      });
      // render small dots at 45 degrees
      this.outerBezelFace.add((0, _primitives.circle)(this.outerBezel, (0, _angle.POC)(CENTER, OUTER_RADIUS, 270 - 45), 4, "transparent", 0, "white"));
      this.outerBezelFace.add((0, _primitives.circle)(this.outerBezel, (0, _angle.POC)(CENTER, OUTER_RADIUS, 270 + 45), 4, "transparent", 0, "white"));

      // draw white triangle at 12 o'clock
      // draw triangle pointer at 12 o'clock
      var p1 = (0, _angle.POC)(CENTER, PA_TRI_R, 270);
      var p2 = new _vector2d.default(p1.x - PA_TRI_W / 2, p1.y - PA_TRI_H);
      var p3 = new _vector2d.default(p1.x + PA_TRI_W / 2, p1.y - PA_TRI_H);
      this.outerBezelFace.add((0, _primitives.triangle)(this.snap, p1, p2, p3, "transparent", 0, "white"));
    }

    /**
     * set the roll. Left roll is 0 -> -180, right roll is 0 -> +180
     * The displayed pitch is adjusted to include the verticalAdjustment but this does not effect
     * the stored pitch value for the instrument
     * NOTE: When caged the pitch and roll and damped to zero. There is an animated multiplier that
     * is used on the actual display roll and pitch to accomplish this.
     * @param roll
     */
  }, {
    key: "setRollAndPitch",
    value: function setRollAndPitch(roll, pitch) {
      this.roll = roll;
      this.pitch = pitch;
      var displayRoll = this.roll * this.cageMultiplier;
      var displayPitch = this.pitch * this.cageMultiplier;
      this.outerBezelFace.attr({
        transform: "r".concat(-1 * displayRoll, " ").concat(CX, " ").concat(CY)
      });
      this.innerBezelFace.attr({
        transform: "r".concat(-1 * displayRoll, " ").concat(CX, " ").concat(CY, " t ", 0, " ").concat(displayPitch * PITCH_TO_PIXELS)
      });
      this.pitchCircle.attr({
        transform: "r".concat(-1 * displayRoll, " ").concat(CX, " ").concat(CY),
        fill: this.pitchGradient()
      });
    }

    /**
     * render an almost transparent gradient over the face to give the appearance of
     * shadow and depth. Also add a shadow to the inner bezel to the give the correct 3D appearance
     */
  }, {
    key: "renderShadow",
    value: function renderShadow() {
      // draw a radial gradient over the face to give a small hint of shadow from the case
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 + CASE3), "transparent", 0, this.snap.gradient("r(0.5, 0.5, 0.5)transparent:85-rgba(0,0,0,0.6)"));

      // make a sin based shadow for the inner bezel
      var MAX_ALPHA = 0.5;
      var START = 85;
      var str = "";
      for (var i = 0; i < 90; i += 1) {
        if (str) {
          str += "-";
        }
        var v = START + (100 - START) * (i / 90);
        str += "rgba(0, 0, 0, ".concat(Math.sin((0, _angle.D2R)(i)) * MAX_ALPHA, "):").concat(v);
      }
      (0, _primitives.circle)(this.snap, CENTER, INNER_RADIUS, "transparent", 0, this.snap.gradient("r(0.5, 0.5, 0.5)".concat(str)));
    }

    /**
     * a property of the airplane was changed
     * @param airplane
     */
  }, {
    key: "onAirplaneChanged",
    value: function onAirplaneChanged(airplane) {
      if (!this.caged) {
        console.assert(airplane === this.airplane, "not our airplane");
        this.setRollAndPitch(this.airplane.roll, this.airplane.pitch);
      }
    }
  }]);
}(_instrument.default);
},{"DOMArray":"node_modules/DOMArray/dist/index.js","./instrument":"src/instrument.js","./rotatable-button":"src/rotatable-button.js","./geometry/angle":"src/geometry/angle.js","./geometry/vector2d":"src/geometry/vector2d.js","./graphics/primitives":"src/graphics/primitives.js","./utils/time":"src/utils/time.js","./graphics/colors":"src/graphics/colors.js","./utils/math":"src/utils/math.js","snapsvg-cjs":"node_modules/snapsvg-cjs/dist/snap.svg-cjs.js"}],"src/utils/conversions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STANDARD_BAROMETER = void 0;
exports.inchesHgToFeet = inchesHgToFeet;
exports.inchesHgToMillibars = inchesHgToMillibars;
exports.millibarsToFeet = millibarsToFeet;
exports.millibarsToInchesHg = millibarsToInchesHg;
exports.signedDegreesToPositive360 = signedDegreesToPositive360;
/**
 * convert millibars to feet altitude
 * @param millibars
 * @returns {number}
 */
function millibarsToFeet(millibars) {
  // 1024 = Math.pow(2, 10)
  // reverse Math.pow(1024, 1 / 10)
  var feet = (1 - Math.pow(millibars / 1013.25, 0.190284)) * 145366.45;
  return feet;
}

/**
 * convert inches of mercury to feet altitude
 * @param inchesNg
 * @returns {number}
 */
function inchesHgToFeet(inchesNg) {
  return millibarsToFeet(inchesHgToMillibars(inchesNg));
}

/**
 * millibars to inches of mercury
 * @param millibars
 * @returns {number}
 */
function millibarsToInchesHg(millibars) {
  return 0.02953 * millibars;
}

/**
 * inches of mercury to millibars
 * @param millibars
 * @returns {number}
 */
function inchesHgToMillibars(inchesHg) {
  return inchesHg / 0.02953;
}

/**
 * convert a signed degrees value to positive 0->360
 * e.g. -10 becomes 350
 *      400 becomes 40
 */
function signedDegreesToPositive360(vIn) {
  var vOut = vIn;
  if (vOut < 0) {
    vOut = 360 + vOut;
  }
  vOut = vOut % 360;
  return vOut;
}

/**
 * standard barometer in inches of mercury
 * @type {number}
 */
var STANDARD_BAROMETER = exports.STANDARD_BAROMETER = 29.92;
},{}],"src/altimeter_analog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _DOMArray = _interopRequireDefault(require("DOMArray"));
var _instrument = _interopRequireDefault(require("./instrument"));
var _rotatableButton = _interopRequireDefault(require("./rotatable-button"));
var _angle = require("./geometry/angle");
var _vector2d = _interopRequireDefault(require("./geometry/vector2d"));
var _primitives = require("./graphics/primitives");
var _needles = require("./needles");
var _time = require("./utils/time");
var _math = require("./utils/math");
var _colors = require("./graphics/colors");
var _conversions = require("./utils/conversions");
var _snapsvgCjs = _interopRequireDefault(require("snapsvg-cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Regardless of our DOM element size we will render using the constants below
 * and use a transform to scale the resulting SVG to the required size, without altering the aspect ratio
 */

// inset of edges of element
var I = 0;
// width and height
var W = 400;
var H = 400;
// outer radius
var R = (Math.min(W, H) - I) / 2;
// center
var CX = W / 2;
var CY = H / 2;
var CENTER = new _vector2d.default(CX, CY);

// thickness of outer three rings of case
var CASE1 = 8;
var CASE2 = 10;
var CASE3 = 14;

// outer radius of all tick marks
var TICK1 = R - (CASE1 + CASE2 + CASE3);
// inner radius of small ticks
var TICK2 = TICK1 - 15;
// inner radius of large ticks
var TICK3 = TICK1 - 20;

// radius of  large digits marking hundreds of feet
var LABEL_RADIUS = TICK3 - 20;

// hundreds needle, other needles are derived from these
var POINTER_SMALL_RADIUS = 40;
var POINTER_WIDTH = 10;
var POINTER_ARROW = 6;
var POINTER_RADIUS = TICK2 - POINTER_ARROW;

// thousands needle radius ratio to hundreds
var POINTER_1K_R = 0.5;
// thousands needle width ratio to hundreds needs
var POINTER_1K_W = 2.5;

// ten thousands needle radius ratio to hundreds
var POINTER_10K_R = 0.6;
// ten thousands needle width ratio to hundreds needs
var POINTER_10K_W = 2.5;

// degrees offset for 2 and 3 text
var KOLLSMAN_ADJUST_23 = 7;
// angle at center of window
var KOLLSMAN_ANGLE = 0;
// angle sweep
var KOLLSMAN_SWEEP = 270;
// min/max pressure settings
var MIN_BARO = 28.0;
var MAX_BARO = 31.0;

// outer radius of kollsman ticks
var K_TICK1 = TICK3 - 2;
var K_TICK2 = K_TICK1 - 5;
var K_TICK3 = K_TICK2 - 5;

// inner radius of kollsman window
var KOLLSMAN_INNER = K_TICK1 - 55;

// the kollsman window fits between then airspeeds
var KOLLSMAN_LOWER_SPEED = 210;
var KOLLSMAN_UPPER_SPEED = 290;

// below 10K barber pole
var BARBER_OUTER = KOLLSMAN_INNER;
var BARBER_INNER = BARBER_OUTER - 50;
var BARBER_ANGLE = 90;
var BARBER_SWEEP = 60;

// width of stripes
var BARBER_STRIPE_WIDTH = 8;

// center of BARO button
var BARO_CENTER = (0, _angle.POC)(CENTER, R, 135);
// radius of OBS
var BARO_R = 32;
var AltimeterAnalog = exports.default = /*#__PURE__*/function (_Instrument) {
  function AltimeterAnalog(options) {
    var _this;
    _classCallCheck(this, AltimeterAnalog);
    _this = _callSuper(this, AltimeterAnalog, [Object.assign({
      width: W,
      height: H
    }, options)]);
    console.assert(_this.parentElement, "instrument requires a parent to attach to");

    // the barber pole has zero rotation when fully visible or BARBAR_SWEEP + 1 rotation when hidden
    _this.barberPoleAngle = 0;
    _this.barberPoleVisible = true;
    _this.template = (0, _DOMArray.default)("\n      <svg r=\"svg\" height=\"".concat(W, "\" width=\"").concat(H, "\" xmlns=\"http://www.w3.org/2000/svg\"></svg>\n    "));
    _this.template.zip(_this);
    _this.snap = new _snapsvgCjs.default(_this.svg.el);
    _this.renderImmutable();
    _this.createNeedles();
    _this.createBaroButton();
    _this.setNeedles(_this.airplane.altitude);
    _this.setBarometricPressure(_this.airplane.barometer);

    // listen for changes to the airplane
    _this.onAirplaneChanged = _this.onAirplaneChanged.bind(_this);
    _this.airplane.addListener(_this.onAirplaneChanged);
    _this.addDisposable(function () {
      return _this.airplane.removeListener(_this.onAirplaneChanged);
    });
    _this.template.appendTo(_this.parentElement);
    return _this;
  }

  /**
   * enter demonstration mode
   */
  _inherits(AltimeterAnalog, _Instrument);
  return _createClass(AltimeterAnalog, [{
    key: "demoStart",
    value: function demoStart() {
      var _this2 = this;
      this.addLerp("demo", (0, _time.interval)(function () {
        var altitude = _this2.airplane.SERVICE_CEILING * Math.random();
        var qnh = MIN_BARO + (MAX_BARO - MIN_BARO) * Math.random();
        _this2.airplane.setAltitude(altitude);
        _this2.airplane.setBarometer(qnh);
      }, 5000));
    }

    /**
     * cancel demo mode
     */
  }, {
    key: "demoStop",
    value: function demoStop() {
      this.cancelLerp("demo");
    }

    /**
     * render the non changing parts of the instrument
     */
  }, {
    key: "renderImmutable",
    value: function renderImmutable() {
      this.renderCase();
      this.renderDial();
      this.renderKollsman();
      this.renderBarberPole();
      this.renderShadow();
    }

    /**
     * create the button for changing the Kollsman window setting.
     */
  }, {
    key: "createBaroButton",
    value: function createBaroButton() {
      this.baroButton = new _rotatableButton.default({
        snap: this.snap,
        radius: BARO_R,
        text: "BARO",
        textColor: _colors.colors.silver,
        gear: 0.0025,
        rotationCallback: this.onBaroChanged.bind(this)
      });
      this.baroButton.centerOn(new _vector2d.default(BARO_CENTER.x, BARO_CENTER.y));
    }

    /**
     * user twisted the baro button
     * @param delta
     */
  }, {
    key: "onBaroChanged",
    value: function onBaroChanged(delta) {
      var baro = Math.max(MIN_BARO, Math.min(MAX_BARO, this.airplane.barometer + delta));
      this.airplane.setBarometer(baro, true);
    }

    /**
     * render the shared three outer rings of the bezel
     */
  }, {
    key: "renderCase",
    value: function renderCase() {
      // draw three outer rings of the instrument case
      (0, _primitives.circle)(this.snap, CENTER, R - CASE1 / 2, this.snap.gradient("l(0, 0, 1, 1)#FFF:0-#888:20-#111:100"), CASE1, "black");
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 / 2), this.snap.gradient("l(0, 0, 1, 1)#111-#666"), CASE2, "black");
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 + CASE3 / 2), this.snap.gradient("l(0, 0, 1, 1)#000:0-#888:70-#FFF:100"), CASE3, this.snap.gradient("l(0, 0, 1, 1)#000:0-#222:100"));
    }

    /**
     * render the kollsman window
     */
  }, {
    key: "renderKollsman",
    value: function renderKollsman() {
      // calculations are lot easier and do not suffer from floating point errors
      // if we work with barometric pressure * 100 in integers
      var IMIN_BARO = MIN_BARO * 100 >> 0;
      var IMAX_BARO = MAX_BARO * 100 >> 0;

      // use a snap and group for all elements so it can be rotated
      this.kSnap = new _snapsvgCjs.default(W, H);
      this.snap.add(this.kSnap);
      this.kGroup = this.kSnap.group();
      var startAngle = KOLLSMAN_ANGLE - KOLLSMAN_SWEEP / 2;
      for (var i = IMIN_BARO; i <= IMAX_BARO; i += 2) {
        var normalized = (i - IMIN_BARO) / (IMAX_BARO - IMIN_BARO);
        var angle = startAngle + normalized * KOLLSMAN_SWEEP;
        if (i % 10 === 0) {
          var tp = (0, _angle.POC)(CENTER, KOLLSMAN_INNER, angle);
          var str = i.toString();
          // displayed text is one decimal place e.g. 30.40 -? "30.4" 29.90 -> "29.9"
          var strDisplay = "".concat(str.substr(0, 2), ".").concat(str.substr(2, 1));
          var text = (0, _primitives.leftText)(this.snap, tp, strDisplay, "white", "14px", "Verdana");
          text.attr({
            transform: "r".concat(angle, " ").concat(tp.x, " ").concat(tp.y)
          });
          this.kGroup.add(text);
          this.kGroup.add((0, _primitives.tick)(this.snap, CENTER, angle, K_TICK1, K_TICK3, 3, "white"));
        } else {
          this.kGroup.add((0, _primitives.tick)(this.snap, CENTER, angle, K_TICK1, K_TICK2, 2, "white"));
        }
      }
      // create a mask using an arc to give impression of a window
      var KW = K_TICK1 - KOLLSMAN_INNER;
      var AR = KOLLSMAN_INNER + KW / 2;
      this.kMask = (0, _primitives.arc)(this.snap, CENTER, AR, KW, 0, "white", "white", this.altitudeInfo(KOLLSMAN_LOWER_SPEED).hundreds, this.altitudeInfo(KOLLSMAN_UPPER_SPEED).hundreds, true);
      this.kGroup.attr({
        mask: this.kMask
      });

      // draw outline and shadow over kollsman window
      (0, _primitives.arc)(this.snap, CENTER, AR, KW, 1, "#555", "none", this.altitudeInfo(KOLLSMAN_LOWER_SPEED).hundreds, this.altitudeInfo(KOLLSMAN_UPPER_SPEED).hundreds, true);

      // draw the indicator for the current barometric settings
      var p1 = (0, _angle.POC)(CENTER, TICK1, -1.5);
      var p2 = (0, _angle.POC)(CENTER, TICK1, +1.5);
      var p3 = (0, _angle.POC)(CENTER, K_TICK1, 0);
      var d = "M ".concat(p1.x, " ").concat(p1.y, " L ").concat(p2.x, " ").concat(p2.y, " L ").concat(p3.x, " ").concat(p3.y, " Z");
      this.snap.path(d).attr({
        fill: "white"
      });
    }

    /**
     * set the barometric pressure to the given value, animating
     * the kollsman window to its new position.
     * @param inchesOfMercury
     */
  }, {
    key: "setBarometricPressure",
    value: function setBarometricPressure(inchesOfMercury) {
      // clamped the value to the allowed range
      var clamped = Math.max(MIN_BARO, Math.min(MAX_BARO, inchesOfMercury));
      // get the inches range
      var range = MAX_BARO - MIN_BARO;
      // get a normalized value 0 -> 1 representing the new value
      var normalized = (clamped - MIN_BARO) / range;
      // set rotational angle (zero angle is the mid point of the baromatric range)
      var a = KOLLSMAN_SWEEP / 2 - KOLLSMAN_SWEEP * normalized;
      this.kGroup.attr({
        transform: "r ".concat(a, " ").concat(CENTER.x, " ").concat(CENTER.y)
      });
      // rotate the mask in the opposite direction to keep it in place ( since it is masking
      // a group and will be rotated with the group )
      this.kMask.attr({
        transform: "r ".concat(-a, " ").concat(CENTER.x, " ").concat(CENTER.y)
      });
    }

    /**
     * render the below 10K barber pole
     */
  }, {
    key: "renderBarberPole",
    value: function renderBarberPole() {
      var barberRadius = (BARBER_OUTER + BARBER_INNER) / 2;
      var barberWidth = BARBER_OUTER - BARBER_INNER;
      // background for the barber pole area ( attached to primary SVG )
      (0, _primitives.arc)(this.snap, CENTER, barberRadius, barberWidth, 0, "none", "#333", BARBER_ANGLE + BARBER_SWEEP / 2, BARBER_ANGLE - BARBER_SWEEP / 2, false);
      // stripped rotatable area is on a separate SVG
      this.barberSnap = new _snapsvgCjs.default(W, H);
      // use two rectangle sides by side for the stripes. Make them into a pattern to fill the arc with.
      var patternGroup = this.barberSnap.group();
      var sw = BARBER_STRIPE_WIDTH;
      var sh = 100;
      patternGroup.add((0, _primitives.rectangle)(this.snap, 0, 0, sw, sh, "none", 0, "#222"));
      patternGroup.add((0, _primitives.rectangle)(this.snap, sw, 0, sw, sh, "none", 0, "white"));
      this.barberPoleGroup = this.barberSnap.group();
      // the actual stripped arc
      this.barberPole = (0, _primitives.arc)(this.barberSnap, CENTER, barberRadius, barberWidth, 0, "none", patternGroup.toPattern(0, 0, sw * 2, sh).attr({
        transform: "r -45 ".concat(sw, " ").concat(sh / 2)
      }), BARBER_ANGLE + BARBER_SWEEP / 2, BARBER_ANGLE - BARBER_SWEEP / 2, false);
      // create an identically shaped mask for the pole arc
      var mask = (0, _primitives.arc)(this.barberSnap, CENTER, barberRadius, barberWidth, 0, "none", "white", BARBER_ANGLE + BARBER_SWEEP / 2, BARBER_ANGLE - BARBER_SWEEP / 2, false);
      this.barberPoleGroup.add(this.barberPole);
      this.barberPoleGroup.attr({
        mask: mask
      });
      // defaults to this.barberPoleAngle
      this.barberPole.attr({
        transform: "r ".concat(this.barberPoleAngle, " ").concat(CENTER.x, " ").concat(CENTER.y)
      });
      this.snap.add(this.barberSnap);
    }

    /**
     * show or hide the barber pole
     * @param visible
     */
  }, {
    key: "setBarberPole",
    value: function setBarberPole(visible) {
      var _this3 = this;
      if (this.barberPoleVisible !== visible) {
        var from = this.barberPoleAngle;
        var to = visible ? 0 : BARBER_SWEEP + 1;
        this.addLerp("barber", (0, _math.lerp)(from, to, 2000, function (angle) {
          _this3.barberPoleAngle = angle;
          _this3.barberPole.attr({
            transform: "r ".concat(_this3.barberPoleAngle, " ").concat(CENTER.x, " ").concat(CENTER.y)
          });
        }));
        this.barberPoleVisible = visible;
      }
    }

    /**
     * render tick marks around face and numbers for 100's of feet
     */
  }, {
    key: "renderDial",
    value: function renderDial() {
      // draw small / large ticks at 100 feet intervals. 10,000 feet are displayed.
      for (var i = 0; i < 1000; i += 20) {
        var hundreds = this.altitudeInfo(i).hundreds;
        if (i % 100 === 0) {
          // larger hundred foot tick
          (0, _primitives.tick)(this.snap, CENTER, hundreds, TICK1, TICK3, 3, "white");
          // draw hundreds
          var v0_9 = Math.floor(i / 100);
          (0, _primitives.centeredText)(this.snap, this.textPosition(v0_9), v0_9, "white", "40px", "Verdana");
        } else {
          // smaller ticks for 20ft intervals
          (0, _primitives.tick)(this.snap, CENTER, hundreds, TICK1, TICK2, 2, "white");
        }
      }
    }

    /**
     * return correct position for text on dial for a give hundereds of feet.
     * The position of the '2' and '3' are tweaked to accommodate the kollsman window
     * @param hundredsOfFeet
     */
  }, {
    key: "textPosition",
    value: function textPosition(n) {
      var d = (0, _angle.C2D)(360 / 10 * n);
      switch (n) {
        case 2:
          d -= KOLLSMAN_ADJUST_23;
          break;
        case 3:
          d += KOLLSMAN_ADJUST_23;
          break;
        default:
      }
      return (0, _angle.POC)(CENTER, LABEL_RADIUS, d);
    }

    /**
     * render an almost transparent gradient over the face to give the appearance of
     * shadow and depth
     */
  }, {
    key: "renderShadow",
    value: function renderShadow() {
      // draw a radial gradient over the face to give a small hint of shadow from the case
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 + CASE3), "transparent", 0, this.snap.gradient("r(0.5, 0.5, 0.5)transparent:85-rgba(0,0,0,0.2)"));
    }

    /**
     * create the hundreds pointer
     */
  }, {
    key: "createNeedles",
    value: function createNeedles() {
      this.thousands10KNeedle = (0, _needles.altimeter10KNeedle)(this.snap, TICK1 - POINTER_ARROW - 1, POINTER_SMALL_RADIUS * POINTER_10K_R, TICK1 * 0.75, POINTER_ARROW, POINTER_WIDTH * POINTER_10K_W);
      this.thousandsNeedle = (0, _needles.daggerNeedle)(this.snap, POINTER_RADIUS * POINTER_1K_R, POINTER_SMALL_RADIUS * POINTER_1K_R, POINTER_ARROW * 2, POINTER_WIDTH * POINTER_1K_W);
      this.hundredsNeedle = (0, _needles.arrowNeedle)(this.snap, POINTER_RADIUS, POINTER_SMALL_RADIUS, POINTER_ARROW, POINTER_WIDTH);
      (0, _primitives.circle)(this.snap, CENTER, 4, "#888", 1, "black");
    }

    /**
     * update the hundreds pointer
     * @param altitude
     */
  }, {
    key: "setNeedles",
    value: function setNeedles(altitude) {
      var info = this.altitudeInfo(altitude);
      this.hundredsNeedle.setCenterAndAngle(CX, CY, info.hundreds);
      this.thousandsNeedle.setCenterAndAngle(CX, CY, info.thousands);
      this.thousands10KNeedle.setCenterAndAngle(CX, CY, info.thousands10K);
      this.setBarberPole(info.barberPoleVisible);
    }

    /**
     * for a given altitude returns the angles for the three pointers
     * and a boolean to indicate if the grid pattern should be visible
     * @param altitude
     * @returns {{hundreds: number, thousands: number, thousands10K: number, stripes: boolean}}
     */
  }, {
    key: "altitudeInfo",
    value: function altitudeInfo(altitude) {
      //console.assert(altitude >= 0 && altitude <= this.airplane.SERVICE_CEILING, 'altitude out of range');

      // small needle is altitude % 1000
      var hundreds = (0, _angle.C2D)(altitude / 1000 * 360);
      var thousands = (0, _angle.C2D)(altitude / 10000 * 360);
      var thousands10K = (0, _angle.C2D)(altitude / 100000 * 360);
      var barberPoleVisible = altitude <= 10000;
      return {
        hundreds: hundreds,
        thousands: thousands,
        thousands10K: thousands10K,
        barberPoleVisible: barberPoleVisible
      };
    }

    /**
     * a property of the airplane was changed
     * @param airplane
     */
  }, {
    key: "onAirplaneChanged",
    value: function onAirplaneChanged(airplane) {
      console.assert(airplane === this.airplane, "not our airplane");
      // get the delta between 29.92 ( standard pressure ) and the airplanes baro setting
      var baroDelta = _conversions.STANDARD_BAROMETER - this.airplane.barometer;
      var altitude = (0, _conversions.inchesHgToFeet)(airplane.staticPressure + baroDelta);
      this.setNeedles(altitude);
      this.setBarometricPressure(this.airplane.barometer);
    }
  }]);
}(_instrument.default);
},{"DOMArray":"node_modules/DOMArray/dist/index.js","./instrument":"src/instrument.js","./rotatable-button":"src/rotatable-button.js","./geometry/angle":"src/geometry/angle.js","./geometry/vector2d":"src/geometry/vector2d.js","./graphics/primitives":"src/graphics/primitives.js","./needles":"src/needles.js","./utils/time":"src/utils/time.js","./utils/math":"src/utils/math.js","./graphics/colors":"src/graphics/colors.js","./utils/conversions":"src/utils/conversions.js","snapsvg-cjs":"node_modules/snapsvg-cjs/dist/snap.svg-cjs.js"}],"src/turn_coordinator_analog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _DOMArray = _interopRequireDefault(require("DOMArray"));
var _instrument = _interopRequireDefault(require("./instrument"));
var _angle = require("./geometry/angle");
var _vector2d = _interopRequireDefault(require("./geometry/vector2d"));
var _primitives = require("./graphics/primitives");
var _time = require("./utils/time");
var _snapsvgCjs = _interopRequireDefault(require("snapsvg-cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Regardless of our DOM element size we will render using the constants below
 * and use a transform to scale the resulting SVG to the required size, without altering the aspect ratio
 */

// inset of edges of element
var I = 0;
// width and height
var W = 400;
var H = 400;
// outer radius
var R = (Math.min(W, H) - I) / 2;
// center
var CX = W / 2;
var CY = H / 2;
var CENTER = new _vector2d.default(CX, CY);

// thickness of outer three rings of case
var CASE1 = 8;
var CASE2 = 10;
var CASE3 = 14;

// thickness of outer bezel
var OUTER_BEZEL = 50;

// inner suface radius
var INNER_RADIUS = R - (CASE1 + CASE2 + CASE3 + OUTER_BEZEL);

// inclinomenter metrics
var INC_THICKNESS = 55;
var INC_RADIUS = R * 2;
var INC_CENTER = new _vector2d.default(CX, CY - INC_RADIUS + INC_THICKNESS * 1.5);
// number of degrees either side of 90 for the inclinometer arc
var INC_ANGLE = 16;
// angle offset for ticks on inclinometer
var INC_TICK_ANGLE = 3.5;

// offset angle of 2 minute turn ticks
var OFFSET_2_MINUTES = 20;

// standard roll rate and instrument limit in degrees per second
var ROLL_RATE = 3;
var MAX_ROLL_RATE = 6;

// max number of degrees of yaw ( negative is left yaw, positive is right yaw )
var MAX_YAW = 20;
var TurnCoordinatorAnalog = exports.default = /*#__PURE__*/function (_Instrument) {
  function TurnCoordinatorAnalog(options) {
    var _this;
    _classCallCheck(this, TurnCoordinatorAnalog);
    _this = _callSuper(this, TurnCoordinatorAnalog, [Object.assign({
      width: W,
      height: H
    }, options)]);
    console.assert(_this.parentElement, "instrument requires a parent to attach to");
    _this.template = (0, _DOMArray.default)("\n      <svg r=\"svg\" height=\"".concat(W, "\" width=\"").concat(H, "\" xmlns=\"http://www.w3.org/2000/svg\"></svg>\n    "));
    _this.template.zip(_this);
    _this.snap = new _snapsvgCjs.default(_this.svg.el);
    _this.renderImmutable();
    _this.template.appendTo(_this.parentElement);

    // listen for changes to the airplane
    _this.onAirplaneChanged = _this.onAirplaneChanged.bind(_this);
    _this.airplane.addListener(_this.onAirplaneChanged);
    _this.addDisposable(function () {
      return _this.airplane.removeListener(_this.onAirplaneChanged);
    });
    return _this;
  }

  /**
   * enter demonstration mode
   */
  _inherits(TurnCoordinatorAnalog, _Instrument);
  return _createClass(TurnCoordinatorAnalog, [{
    key: "demoStart",
    value: function demoStart() {
      var _this2 = this;
      this.addLerp("demo", (0, _time.interval)(function () {
        _this2.airplane.setRollRate(-MAX_ROLL_RATE + MAX_ROLL_RATE * 2 * Math.random());
        _this2.airplane.setYaw(-MAX_YAW + MAX_YAW * 2 * Math.random());
      }, 5000));
    }

    /**
     * cancel demo mode
     */
  }, {
    key: "demoStop",
    value: function demoStop() {
      this.cancelLerp("demo");
    }

    /**
     * render the non changing parts of the instrument
     */
  }, {
    key: "renderImmutable",
    value: function renderImmutable() {
      this.renderCase();
      this.renderInclinometer();
      this.renderTicksAndText();
      this.renderShadow();
      this.renderAirplane();
      this.setRollRate(this.airplane.rollRate);
      this.setYaw(this.airplane.yaw);
    }

    /**
     * render the shared three outer rings of the bezel
     */
  }, {
    key: "renderCase",
    value: function renderCase() {
      // draw three outer rings of the instrument case
      (0, _primitives.circle)(this.snap, CENTER, R - CASE1 / 2, this.snap.gradient("l(0, 0, 1, 1)#FFF:0-#888:20-#111:100"), CASE1, "black");
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 / 2), this.snap.gradient("l(0, 0, 1, 1)#111-#666"), CASE2, "black");
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 + CASE3 / 2), this.snap.gradient("l(0, 0, 1, 1)#000:0-#888:70-#FFF:100"), CASE3, "#222");
    }

    /**
     * render ticks marks and associated text ( "L" "R" )
     */
  }, {
    key: "renderTicksAndText",
    value: function renderTicksAndText() {
      var _this3 = this;
      var BEZEL_R = R - (CASE1 + CASE2 + CASE3 + OUTER_BEZEL / 2);
      // inner bezel containing ticks marks
      (0, _primitives.circle)(this.snap, CENTER, BEZEL_R, "#333", OUTER_BEZEL, "transparent");
      [0, OFFSET_2_MINUTES, 180, 180 - OFFSET_2_MINUTES].forEach(function (angle) {
        (0, _primitives.tick)(_this3.snap, CENTER, angle, BEZEL_R + OUTER_BEZEL / 8, BEZEL_R - OUTER_BEZEL / 2, 10, "white");
      });
      (0, _primitives.centeredText)(this.snap, (0, _angle.POC)(CENTER, BEZEL_R + 10, 270), "D.C.", "white", "16px", "Verdana");
      (0, _primitives.centeredText)(this.snap, (0, _angle.POC)(CENTER, BEZEL_R - 8, 270), "ELECTRIC", "white", "16px", "Verdana");
      (0, _primitives.centeredText)(this.snap, (0, _angle.POC)(CENTER, BEZEL_R - 4, 180 - OFFSET_2_MINUTES * 1.7), "L", "white", "32px", "Verdana");
      (0, _primitives.centeredText)(this.snap, (0, _angle.POC)(CENTER, BEZEL_R - 4, OFFSET_2_MINUTES * 1.7), "R", "white", "30px", "Verdana");
      (0, _primitives.centeredText)(this.snap, (0, _angle.POC)(CENTER, BEZEL_R - 14, 90), "NO PITCH", "white", "16px", "Verdana");
      (0, _primitives.centeredText)(this.snap, (0, _angle.POC)(CENTER, BEZEL_R + 4, 90), "INFORMATION", "white", "16px", "Verdana");
      (0, _primitives.centeredText)(this.snap, (0, _angle.POC)(CENTER, 35, 90), "2 MIN", "white", "20px", "Verdana");
    }

    /**
     * return the turn rate indicator which is an airplane symbol
     */
  }, {
    key: "renderAirplane",
    value: function renderAirplane() {
      this.airplaneGroup = (0, _primitives.airplaneNoseView)(this.snap, CENTER, INNER_RADIUS * 2 - 8, "white");
    }

    /**
     * render the inclinometer and keep a reference to the ball
     */
  }, {
    key: "renderInclinometer",
    value: function renderInclinometer() {
      var inner = INC_RADIUS - INC_THICKNESS / 2;
      var middle = INC_RADIUS;
      var outer = INC_RADIUS + INC_THICKNESS / 2;
      (0, _primitives.arc)(this.snap, INC_CENTER, INC_RADIUS, INC_THICKNESS, 0, "transparent", this.snap.gradient("R(".concat(INC_CENTER.x, ", ").concat(INC_CENTER.y, ", ").concat(outer, ")black:0-#aaa:").concat(inner / outer * 100, "-#fff:").concat(middle / outer * 100, "-#aaa:100")), 90 - INC_ANGLE, 90 + INC_ANGLE, true);
      // render the ball
      this.renderBall();
      // render the strokes that indicate the coordinated range
      (0, _primitives.tick)(this.snap, INC_CENTER, 90 - INC_TICK_ANGLE, INC_RADIUS - INC_THICKNESS / 2, INC_RADIUS + INC_THICKNESS / 2, 5, this.snap.gradient("l(0.5, 0, 0.5, 1)#000:0-#888:50-#000:100"));
      (0, _primitives.tick)(this.snap, INC_CENTER, 90 + INC_TICK_ANGLE, INC_RADIUS - INC_THICKNESS / 2, INC_RADIUS + INC_THICKNESS / 2, 5, this.snap.gradient("l(0.5, 0, 0.5, 1)#000:0-#888:50-#000:100"));
    }

    /**
     * The face of this instrument has two levels so two shadows to give the appearance of depth
     */
  }, {
    key: "renderShadow",
    value: function renderShadow() {
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 + CASE3), "transparent", 0, this.snap.gradient("r(0.5, 0.5, 0.5)transparent:85-rgba(0,0,0,0.3)"));
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 + CASE3 + OUTER_BEZEL), "transparent", 0, this.snap.gradient("r(0.5, 0.5, 0.5)transparent:85-rgba(0,0,0,0.3)"));
    }

    /**
     * set the roll rate in +/- degrees per second
     * @param rollRate
     */
  }, {
    key: "setRollRate",
    value: function setRollRate(rollRate) {
      // clamp between -MAX_ROLL_RATE and + MAX_ROLL_RATE
      var clampedRollRate = Math.max(-MAX_ROLL_RATE, Math.min(MAX_ROLL_RATE, rollRate));
      // normalize 0..1
      var normalized = clampedRollRate / MAX_ROLL_RATE;
      var A = OFFSET_2_MINUTES * 2 * normalized;
      this.airplaneGroup.attr({
        transform: "r".concat(A, " ").concat(CENTER.x, " ").concat(CENTER.y)
      });
    }

    /**
     * render ball component of inclinometer. Set this.ball to the SVG element for later animation
     */
  }, {
    key: "renderBall",
    value: function renderBall() {
      // calculate point on the inclinometer circumference
      var center = (0, _angle.POC)(INC_CENTER, INC_RADIUS, 90);
      // create circle
      this.ball = (0, _primitives.circle)(this.snap, center, INC_THICKNESS / 2 - 4, "transparent", 0, this.snap.gradient("r(0.35, 0.35, 0.5)#aaa:0-black:100"));
      // scale to give it the more typical oval appearance
      this.ball.attr({
        transform: "s0.8,1"
      });
    }

    /**
     * set yaw and update inclinometer
     * @param yaw
     */
  }, {
    key: "setYaw",
    value: function setYaw(yaw) {
      // clamp between -MAX_YAW and MAX_YAW
      var clampedYaw = Math.max(-MAX_YAW, Math.min(MAX_YAW, yaw));
      // normalize 0..1
      var normalized = clampedYaw / MAX_YAW;
      var A = INC_ANGLE * normalized;
      var center = (0, _angle.POC)(INC_CENTER, INC_RADIUS, 90 + A);
      this.ball.attr({
        cx: center.x,
        cy: center.y
      });
    }

    /**
     * a property of the airplane was changed
     * @param airplane
     */
  }, {
    key: "onAirplaneChanged",
    value: function onAirplaneChanged(airplane) {
      console.assert(airplane === this.airplane, "not our airplane");
      this.setRollRate(this.airplane.rollRate);
      this.setYaw(this.airplane.yaw);
    }
  }]);
}(_instrument.default);
},{"DOMArray":"node_modules/DOMArray/dist/index.js","./instrument":"src/instrument.js","./geometry/angle":"src/geometry/angle.js","./geometry/vector2d":"src/geometry/vector2d.js","./graphics/primitives":"src/graphics/primitives.js","./utils/time":"src/utils/time.js","snapsvg-cjs":"node_modules/snapsvg-cjs/dist/snap.svg-cjs.js"}],"src/heading_indicator_analog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _DOMArray = _interopRequireDefault(require("DOMArray"));
var _instrument = _interopRequireDefault(require("./instrument"));
var _angle = require("./geometry/angle");
var _vector2d = _interopRequireDefault(require("./geometry/vector2d"));
var _primitives = require("./graphics/primitives");
var _time = require("./utils/time");
var _rotatableButton = _interopRequireDefault(require("./rotatable-button"));
var _colors = require("./graphics/colors");
var _conversions = require("./utils/conversions");
var _snapsvgCjs = _interopRequireDefault(require("snapsvg-cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Regardless of our DOM element size we will render using the constants below
 * and use a transform to scale the resulting SVG to the required size, without altering the aspect ratio
 */

// inset of edges of element
var I = 0;
// width and height
var W = 400;
var H = 400;
// size of airplane pointer
var AW = 180;
var AH = 180;
// outer radius
var R = (Math.min(W, H) - I) / 2;
// center
var CX = W / 2;
var CY = H / 2;
var CENTER = new _vector2d.default(CX, CY);

// thickness of outer three rings of case
var CASE1 = 8;
var CASE2 = 10;
var CASE3 = 14;

// radius of heading text
var TEXT_RADIUS = R - (CASE1 + CASE2 + CASE3 + 20);
// radius of all tick marks
var TICK = TEXT_RADIUS - 30;
// length of long short tick marks
var LONG_TICK = 22;
var SHORT_TICK = 14;

// center of SET
var SET_CENTER = (0, _angle.POC)(CENTER, R, 135);
// radius of OBS
var SET_R = 32;

// center of HDG
var HDG_CENTER = (0, _angle.POC)(CENTER, R, 45);
// radius of OBS
var HDG_R = 32;
var HEADING_BUG_OUTER = R - (CASE1 + CASE2 + CASE3);
var HEADING_BUG_INNER = TICK + 6;
var HEADING_BUG_MID = (HEADING_BUG_INNER + HEADING_BUG_OUTER) / 2;
var HeadingIndicatorAnalog = exports.default = /*#__PURE__*/function (_Instrument) {
  function HeadingIndicatorAnalog(options) {
    var _this;
    _classCallCheck(this, HeadingIndicatorAnalog);
    _this = _callSuper(this, HeadingIndicatorAnalog, [Object.assign({
      width: W,
      height: H,
      // this is the angular offset the user sets from the airplanes magnetic heading.
      // Changing it corresponds to twisting the SET button
      magneticOffset: 0,
      // current setting for heading bug
      headingBugHeading: 0
    }, options)]);
    console.assert(_this.parentElement, "instrument requires a parent to attach to");
    _this.template = (0, _DOMArray.default)("\n      <svg r=\"svg\" height=\"".concat(W, "\" width=\"").concat(H, "\" xmlns=\"http://www.w3.org/2000/svg\"></svg>\n    "));
    _this.template.zip(_this);
    _this.renderImmutable();
    _this.setHeading(_this.airplane.heading);
    _this.setHeadingBug(_this.headingBugHeading);

    // listen for changes to the airplane
    _this.onAirplaneChanged = _this.onAirplaneChanged.bind(_this);
    _this.airplane.addListener(_this.onAirplaneChanged);
    _this.addDisposable(function () {
      return _this.airplane.removeListener(_this.onAirplaneChanged);
    });
    _this.template.appendTo(_this.parentElement);
    return _this;
  }

  /**
   * enter demonstration mode
   */
  _inherits(HeadingIndicatorAnalog, _Instrument);
  return _createClass(HeadingIndicatorAnalog, [{
    key: "demoStart",
    value: function demoStart() {
      var _this2 = this;
      this.addLerp("demo", (0, _time.interval)(function () {
        _this2.airplane.setHeading(360 * Math.random());
      }, 5000));
    }

    /**
     * cancel demo mode
     */
  }, {
    key: "demoStop",
    value: function demoStop() {
      this.cancelLerp("demo");
    }

    /**
     * render the non changing parts of the instrument
     */
  }, {
    key: "renderImmutable",
    value: function renderImmutable() {
      this.snap = new _snapsvgCjs.default(this.svg.el);
      this.renderCase();
      this.renderHeadings();
      this.renderHeadingBug();
      this.renderPointer();
      this.renderShadow();
      this.createButtons();
    }

    /**
     * create SET and HDG buttons
     */
  }, {
    key: "createButtons",
    value: function createButtons() {
      this.setButton = new _rotatableButton.default({
        snap: this.snap,
        radius: SET_R,
        text: "SET",
        textColor: _colors.colors.silver,
        gear: 0.25,
        rotationCallback: this.onSetChanged.bind(this)
      });
      this.setButton.centerOn(new _vector2d.default(SET_CENTER.x, SET_CENTER.y));
      this.hdgButton = new _rotatableButton.default({
        snap: this.snap,
        radius: HDG_R,
        text: "HDG",
        textColor: _colors.colors.red,
        gear: 0.25,
        rotationCallback: this.onHdgChanged.bind(this)
      });
      this.hdgButton.centerOn(new _vector2d.default(HDG_CENTER.x, HDG_CENTER.y));
    }

    /**
     * set the offset from the magnetic heading supplied by our aircraft model
     * @param delta
     */
  }, {
    key: "onSetChanged",
    value: function onSetChanged(delta) {
      this.magneticOffset = (0, _conversions.signedDegreesToPositive360)(this.magneticOffset + delta);
      this.setHeading(this.airplane.heading + this.magneticOffset);
      this.setHeadingBug(this.headingBugHeading);
    }

    /**
     * repond to twists of the heading bug button
     * @param delta
     */
  }, {
    key: "onHdgChanged",
    value: function onHdgChanged(delta) {
      this.headingBugHeading = (0, _conversions.signedDegreesToPositive360)(this.headingBugHeading + delta);
      this.setHeadingBug(this.headingBugHeading);
    }

    /**
     * render the shared three outer rings of the bezel
     */
  }, {
    key: "renderCase",
    value: function renderCase() {
      // draw three outer rings of the instrument case
      (0, _primitives.circle)(this.snap, CENTER, R - CASE1 / 2, this.snap.gradient("l(0, 0, 1, 1)#FFF:0-#888:20-#111:100"), CASE1, _colors.colors.black);
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 / 2), this.snap.gradient("l(0, 0, 1, 1)#111-#666"), CASE2, _colors.colors.black);
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 + CASE3 / 2), this.snap.gradient("l(0, 0, 1, 1)#000:0-#888:70-#FFF:100"), CASE3, this.snap.gradient("l(0, 0, 1, 1)#000:0-#222:100"));
    }

    /**
     * render the heading bug at zero degrees, it is transformed into the current setting
     */
  }, {
    key: "renderHeadingBug",
    value: function renderHeadingBug() {
      this.headingBugGroup = this.faceSnap.group();
      this.headingBug1 = (0, _primitives.tick)(this.faceSnap, CENTER, (0, _angle.D2C)(-3), HEADING_BUG_OUTER, HEADING_BUG_INNER, 9, _colors.colors.red);
      this.headingBug2 = (0, _primitives.tick)(this.faceSnap, CENTER, (0, _angle.D2C)(3), HEADING_BUG_OUTER, HEADING_BUG_INNER, 9, _colors.colors.red);
      this.headingBugGroup.add(this.headingBug1, this.headingBug2);
    }

    /**
     * render the text and ticks marks for headings
     */
  }, {
    key: "renderHeadings",
    value: function renderHeadings() {
      this.faceSnap = new _snapsvgCjs.default(W, H);
      this.face = this.faceSnap.group();
      for (var i = 0; i < 360; i += 5) {
        var a = (0, _angle.D2C)(i);
        var longTick = a % 10 === 0;
        var text = a % 30 === 0;
        var outerTick = TICK + (longTick ? LONG_TICK : SHORT_TICK) / 2;
        var innerTick = TICK - (longTick ? LONG_TICK : SHORT_TICK) / 2;
        var thickness = longTick ? 3 : 2;
        this.face.add((0, _primitives.tick)(this.faceSnap, CENTER, a, outerTick, innerTick, thickness, "white"));
        if (text) {
          var str = void 0;
          switch (i) {
            case 0:
              str = "N";
              break;
            case 90:
              str = "E";
              break;
            case 180:
              str = "S";
              break;
            case 270:
              str = "W";
              break;
            default:
              str = i / 10;
          }
          var textCenter = (0, _angle.POC)(CENTER, TEXT_RADIUS, a);
          var t = (0, _primitives.centeredText)(this.faceSnap, textCenter, str, "white", "32px", "Verdana");
          t.attr({
            transform: "r".concat(i, " ").concat(textCenter.x, " ").concat(textCenter.y)
          });
          this.face.add(t);
        }
      }
      this.snap.add(this.faceSnap);
    }

    /**
     * update to the given heading
     * @param heading
     */
  }, {
    key: "setHeading",
    value: function setHeading(heading) {
      this.face.attr({
        transform: "r  ".concat(-1 * heading, " ").concat(CENTER.x, " ").concat(CENTER.y)
      });
    }

    /**
     * update the heading bug, which is always the airplanes heading + the heading bug heading
     * @param heading
     */
  }, {
    key: "setHeadingBug",
    value: function setHeadingBug() {
      var h = this.airplane.heading + this.magneticOffset;
      this.headingBugGroup.attr({
        transform: "r  ".concat(-1 * (h + this.headingBugHeading), " ").concat(CENTER.x, " ").concat(CENTER.y)
      });
    }
  }, {
    key: "renderPointer",
    value: function renderPointer() {
      this.snap.add((0, _primitives.airplaneSilhouette)(CX, CY, AW, AH, 4, "orange", "transparent"));
      (0, _primitives.tick)(this.snap, CENTER, 0, TICK, AH / 2, 3, "orange");
      (0, _primitives.tick)(this.snap, CENTER, 90, TICK, AH / 2, 3, "orange");
      (0, _primitives.tick)(this.snap, CENTER, 180, TICK, AH / 2, 3, "orange");
      (0, _primitives.tick)(this.snap, CENTER, 270, TICK, AH / 2, 3, "orange");
      (0, _primitives.circle)(this.snap, CENTER, 4, "#888", 1, _colors.colors.black);
    }

    /**
     * render an almost transparent gradient over the face to give the appearance of
     * shadow and depth
     */
  }, {
    key: "renderShadow",
    value: function renderShadow() {
      // draw a radial gradient over the face to give a small hint of shadow from the case
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 + CASE3), "transparent", 0, this.snap.gradient("r(0.5, 0.5, 0.5)transparent:85-rgba(0,0,0,0.6)"));
    }

    /**
     * a property of the airplane was changed
     * @param airplane
     */
  }, {
    key: "onAirplaneChanged",
    value: function onAirplaneChanged(airplane) {
      console.assert(airplane === this.airplane, "not our airplane");
      this.setHeading(this.airplane.heading + this.magneticOffset);
      this.setHeadingBug(this.headingBugHeading);
    }
  }]);
}(_instrument.default);
},{"DOMArray":"node_modules/DOMArray/dist/index.js","./instrument":"src/instrument.js","./geometry/angle":"src/geometry/angle.js","./geometry/vector2d":"src/geometry/vector2d.js","./graphics/primitives":"src/graphics/primitives.js","./utils/time":"src/utils/time.js","./rotatable-button":"src/rotatable-button.js","./graphics/colors":"src/graphics/colors.js","./utils/conversions":"src/utils/conversions.js","snapsvg-cjs":"node_modules/snapsvg-cjs/dist/snap.svg-cjs.js"}],"src/vertical_speed_analog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _DOMArray = _interopRequireDefault(require("DOMArray"));
var _instrument = _interopRequireDefault(require("./instrument"));
var _angle = require("./geometry/angle");
var _vector2d = _interopRequireDefault(require("./geometry/vector2d"));
var _primitives = require("./graphics/primitives");
var _needles = require("./needles");
var _time = require("./utils/time");
var _snapsvgCjs = _interopRequireDefault(require("snapsvg-cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Regardless of our DOM element size we will render using the constants below
 * and use a transform to scale the resulting SVG to the required size, without altering the aspect ratio
 */

// inset of edges of element
var I = 0;
// width and height
var W = 400;
var H = 400;
// outer radius
var R = (Math.min(W, H) - I) / 2;
// center
var CX = W / 2;
var CY = H / 2;
var CENTER = new _vector2d.default(CX, CY);

// thickness of outer three rings of case
var CASE1 = 8;
var CASE2 = 10;
var CASE3 = 14;

// outer radius of all tick marks
var TICK1 = R - (CASE1 + CASE2 + CASE3);
// inner radius of small ticks
var TICK2 = TICK1 - 20;
// inner radius of large ticks
var TICK3 = TICK1 - 30;

// radius of  large digits marking hundreds of feet
var LABEL_RADIUS = TICK3 - 25;

// max positive and negative rates displayed
var MIN_MAX_SPEED = 2000;

// only large ticks above this level
var HUNDRED_LIMIT = 1000;

// angle of zero speed
var ZERO = 180;

// sweep required for entire range
var SWEEP = 170;

// hundreds needle, other needles are derived from these
var POINTER_SMALL_RADIUS = 40;
var POINTER_WIDTH = 14;
var POINTER_ARROW = 6;
var POINTER_RADIUS = TICK2 - POINTER_ARROW;
var POINTER_MID = POINTER_RADIUS * 0.8;

// radius and offset angle for "UP" and "DN"
var UP_DOWN_RADIUS = LABEL_RADIUS - 25;
var UP_DOWN_ANGLE = 15;

// position of left aligned rate text
var RATE_TEXT = CX + 10;
var VerticalSpeedAnalog = exports.default = /*#__PURE__*/function (_Instrument) {
  function VerticalSpeedAnalog(options) {
    var _this;
    _classCallCheck(this, VerticalSpeedAnalog);
    _this = _callSuper(this, VerticalSpeedAnalog, [Object.assign({
      width: W,
      height: H
    }, options)]);
    console.assert(_this.parentElement, "instrument requires a parent to attach to");
    _this.template = (0, _DOMArray.default)("\n      <svg r=\"svg\" height=\"".concat(W, "\" width=\"").concat(H, "\" xmlns=\"http://www.w3.org/2000/svg\"></svg>\n    "));
    _this.template.zip(_this);
    _this.snap = new _snapsvgCjs.default(_this.svg.el);
    _this.renderImmutable();
    _this.createNeedles();
    _this.setNeedle(_this.airplane.altitudeRate);

    // listen for changes to the airplane
    _this.onAirplaneChanged = _this.onAirplaneChanged.bind(_this);
    _this.airplane.addListener(_this.onAirplaneChanged);
    _this.addDisposable(function () {
      return _this.airplane.removeListener(_this.onAirplaneChanged);
    });
    _this.template.appendTo(_this.parentElement);
    return _this;
  }

  /**
   * enter demonstration mode
   */
  _inherits(VerticalSpeedAnalog, _Instrument);
  return _createClass(VerticalSpeedAnalog, [{
    key: "demoStart",
    value: function demoStart() {
      var _this2 = this;
      this.addLerp("demo", (0, _time.interval)(function () {
        _this2.airplane.setAltitudeRate(-1500 + 3000 * Math.random());
      }, 5000));
    }

    /**
     * cancel demo mode
     */
  }, {
    key: "demoStop",
    value: function demoStop() {
      this.cancelLerp("demo");
    }

    /**
     * render the non changing parts of the instrument
     */
  }, {
    key: "renderImmutable",
    value: function renderImmutable() {
      this.renderCase();
      this.renderDial();
      this.renderText();
      this.renderShadow();
    }

    /**
     * render the shared three outer rings of the bezel
     */
  }, {
    key: "renderCase",
    value: function renderCase() {
      // draw three outer rings of the instrument case
      (0, _primitives.circle)(this.snap, CENTER, R - CASE1 / 2, this.snap.gradient("l(0, 0, 1, 1)#FFF:0-#888:20-#111:100"), CASE1, "black");
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 / 2), this.snap.gradient("l(0, 0, 1, 1)#111-#666"), CASE2, "black");
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 + CASE3 / 2), this.snap.gradient("l(0, 0, 1, 1)#000:0-#888:70-#FFF:100"), CASE3, this.snap.gradient("l(0, 0, 1, 1)#000:0-#222:100"));
    }

    /**
     * convert positive or negative vertical speed to an angle.
     * @param verticalSpeed
     */
  }, {
    key: "verticalSpeedToAngle",
    value: function verticalSpeedToAngle(verticalSpeed) {
      // clamp to limits
      var v = Math.max(-MIN_MAX_SPEED, Math.min(MIN_MAX_SPEED, verticalSpeed));
      if (v >= 0) {
        return ZERO + v / MIN_MAX_SPEED * SWEEP;
      }
      return ZERO - -v / MIN_MAX_SPEED * SWEEP;
    }

    // render up/down vertical speed in 100
  }, {
    key: "renderText",
    value: function renderText() {
      var position = (0, _angle.POC)(CENTER, UP_DOWN_RADIUS, ZERO + UP_DOWN_ANGLE);
      (0, _primitives.centeredText)(this.snap, position, "UP", "white", "16px", "Verdana");
      position = (0, _angle.POC)(CENTER, UP_DOWN_RADIUS, ZERO - UP_DOWN_ANGLE);
      (0, _primitives.centeredText)(this.snap, position, "DN", "white", "16px", "Verdana");
      (0, _primitives.leftText)(this.snap, new _vector2d.default(RATE_TEXT, CY - 50), "VERTICAL", "white", "16px", "Verdana");
      (0, _primitives.leftText)(this.snap, new _vector2d.default(RATE_TEXT, CY - 30), "SPEED", "white", "16px", "Verdana");
      (0, _primitives.leftText)(this.snap, new _vector2d.default(RATE_TEXT, CY + 30), "100 FEET", "white", "16px", "Verdana");
      (0, _primitives.leftText)(this.snap, new _vector2d.default(RATE_TEXT, CY + 50), "PER MINUTE", "white", "16px", "Verdana");
    }

    /**
     * render tick marks around face and numbers for 100's of feet
     */
  }, {
    key: "renderDial",
    value: function renderDial() {
      for (var i = 0; i <= MIN_MAX_SPEED; i += 100) {
        // draw large ticks at 500ft intervals
        if (i % 500 === 0) {
          (0, _primitives.tick)(this.snap, CENTER, this.verticalSpeedToAngle(i), TICK1, TICK3, 3, "white");
          if (i > 0) {
            (0, _primitives.tick)(this.snap, CENTER, this.verticalSpeedToAngle(-i), TICK1, TICK3, 3, "white");
          }
          // draw 500 intervals in 100's of feet, except for the last value which is centered between the extremes
          var position = void 0;
          if (i < MIN_MAX_SPEED) {
            if (i === 0) {
              position = (0, _angle.POC)(CENTER, LABEL_RADIUS, ZERO);
              (0, _primitives.centeredText)(this.snap, position, "0", "white", "30px", "Verdana");
            } else {
              position = (0, _angle.POC)(CENTER, LABEL_RADIUS, this.verticalSpeedToAngle(i));
              (0, _primitives.centeredText)(this.snap, position, i / 100, "white", "30px", "Verdana");
              position = (0, _angle.POC)(CENTER, LABEL_RADIUS, this.verticalSpeedToAngle(-i));
              (0, _primitives.centeredText)(this.snap, position, i / 100, "white", "30px", "Verdana");
            }
          } else {
            position = (0, _angle.POC)(CENTER, LABEL_RADIUS, ZERO + 180);
            (0, _primitives.centeredText)(this.snap, position, i / 100, "white", "30px", "Verdana");
          }
        } else {
          if (i < HUNDRED_LIMIT) {
            (0, _primitives.tick)(this.snap, CENTER, this.verticalSpeedToAngle(i), TICK1, TICK2, 2, "white");
            (0, _primitives.tick)(this.snap, CENTER, this.verticalSpeedToAngle(-i), TICK1, TICK2, 2, "white");
          }
        }
      }
    }

    /**
     * render an almost transparent gradient over the face to give the appearance of
     * shadow and depth
     */
  }, {
    key: "renderShadow",
    value: function renderShadow() {
      // draw a radial gradient over the face to give a small hint of shadow from the case
      (0, _primitives.circle)(this.snap, CENTER, R - (CASE1 + CASE2 + CASE3), "transparent", 0, this.snap.gradient("r(0.5, 0.5, 0.5)transparent:85-rgba(0,0,0,0.6)"));
    }

    /**
     * create the needle and center nut
     */
  }, {
    key: "createNeedles",
    value: function createNeedles() {
      this.needle = (0, _needles.steppedNeedle)(this.snap, POINTER_RADIUS, POINTER_SMALL_RADIUS, POINTER_MID, POINTER_ARROW, POINTER_WIDTH);
      (0, _primitives.circle)(this.snap, CENTER, 4, "#888", 1, "black");
    }

    /**
     * update the hundreds pointer
     * @param airspeed
     */
  }, {
    key: "setNeedle",
    value: function setNeedle(verticalSpeed) {
      this.needle.setCenterAndAngle(CX, CY, this.verticalSpeedToAngle(verticalSpeed));
    }

    /**
     * a property of the airplane was changed
     * @param airplane
     */
  }, {
    key: "onAirplaneChanged",
    value: function onAirplaneChanged(airplane) {
      console.assert(airplane === this.airplane, "not our airplane");
      this.setNeedle(this.airplane.altitudeRate);
    }
  }]);
}(_instrument.default);
},{"DOMArray":"node_modules/DOMArray/dist/index.js","./instrument":"src/instrument.js","./geometry/angle":"src/geometry/angle.js","./geometry/vector2d":"src/geometry/vector2d.js","./graphics/primitives":"src/graphics/primitives.js","./needles":"src/needles.js","./utils/time":"src/utils/time.js","snapsvg-cjs":"node_modules/snapsvg-cjs/dist/snap.svg-cjs.js"}],"src/airplane.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _disposable = _interopRequireDefault(require("./disposable"));
var _math = require("./utils/math");
var _conversions = require("./utils/conversions");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var Airplane = exports.default = /*#__PURE__*/function (_Disposable) {
  function Airplane() {
    var _this;
    _classCallCheck(this, Airplane);
    _this = _callSuper(this, Airplane);
    // default configuration for an airplane, Similar to a Cessna 172
    Object.assign(_this, {
      // V speeds KIAS
      VS0: 40,
      VS1: 50,
      VR: 55,
      VLOF: 60,
      VFE: 85,
      VA: 95,
      VNO: 130,
      VNE: 157,
      // maximum airspeed that is displayed on the analog airspeed gauge
      MAX_DISPLAYED_SPEED: 200,
      // maximum altitude in ft
      SERVICE_CEILING: 17000,
      // speed in KIAS
      airspeed: 0,
      // rate of change of airspeed in knots per second, + or -
      airspeedRate: 0,
      // altitude in feet
      altitude: 0,
      // vertical speed in feet per minute
      altitudeRate: 0,
      // static pressure as measured at the static port
      staticPressure: _conversions.STANDARD_BAROMETER,
      // barometric pressure at sea level (QNH) ( inches of mercury )
      barometer: _conversions.STANDARD_BAROMETER,
      // magnetic heading
      heading: 0,
      // rate of heading change in degrees per seconds, + or -
      headingRate: 0,
      // pitch, degrees
      pitch: 0,
      // rate of pitch change in degrees per seconds, + or -
      pitchRate: 0,
      // roll, degrees
      roll: 0,
      // rate of roll change in degrees per seconds, + or -
      rollRate: 0,
      // yaw degrees
      yaw: 0,
      // rate of yaw change in degrees per seconds, + or -
      yawRate: 0,
      // idle speed of engine
      idle: 1000,
      // max RPM
      redLine: 2700,
      // lower end of green range
      greenMin: 2000,
      // current RPM
      rpm: 0,
      // change listeners
      listeners: [],
      // lerps for different properties
      lerps: {}
    });

    // cancel all lerps when disposed
    _this.addDisposable(function () {
      Object.values(_this.lerps).forEach(function (f) {
        return f();
      });
      _this.lerps = {};
    });
    return _this;
  }

  /**
   * set the airspeed
   * @param kias
   */
  _inherits(Airplane, _Disposable);
  return _createClass(Airplane, [{
    key: "setAirspeed",
    value: function setAirspeed(kias) {
      var _this2 = this;
      if (kias !== this.airspeed) {
        this.addLerp("airspeed", (0, _math.lerp)(this.airspeed, kias, 1000, function (speed) {
          _this2.airspeed = speed;
          _this2.callListeners();
        }));
      }
    }

    /**
     * set the rpm
     * @param rpm
     */
  }, {
    key: "setRPM",
    value: function setRPM(rpm) {
      var _this3 = this;
      if (rpm !== this.rpm) {
        this.addLerp("rpm", (0, _math.lerp)(this.rpm, rpm, 1000, function (rpm) {
          _this3.rpm = rpm;
          _this3.callListeners();
        }));
      }
    }

    /**
     * set the altitude
     * @param feet
     */
  }, {
    key: "setAltitude",
    value: function setAltitude(feet) {
      var _this4 = this;
      if (feet !== this.altitude) {
        this.addLerp("altitude", (0, _math.lerp)(this.altitude, feet, 4000, function (altitude) {
          _this4.altitude = altitude;
          _this4.callListeners();
        }));
      }
    }

    /**
     * set the altitude
     * @param verticalSpeed
     */
  }, {
    key: "setAltitudeRate",
    value: function setAltitudeRate(verticalSpeed) {
      var _this5 = this;
      if (verticalSpeed !== this.altitudeRate) {
        this.addLerp("altitude-rate", (0, _math.lerp)(this.altitudeRate, verticalSpeed, 4000, function (rate) {
          _this5.altitudeRate = rate;
          _this5.callListeners();
        }));
      }
    }

    /**
     * set the barometer setting ( QNH ). Can be animated or immediate
     * @param inchesOfMercury
     */
  }, {
    key: "setBarometer",
    value: function setBarometer(inchesOfMercury) {
      var _this6 = this;
      var immediate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (immediate) {
        this.barometer = inchesOfMercury;
        this.callListeners();
      } else {
        if (inchesOfMercury !== this.barometer) {
          this.addLerp("barometer", (0, _math.lerp)(this.barometer, inchesOfMercury, 4000, function (qnh) {
            _this6.barometer = qnh;
            _this6.callListeners();
          }));
        }
      }
    }

    /**
     * set the altitude
     * @param feet
     */
  }, {
    key: "setHeading",
    value: function setHeading(magneticHeading) {
      var _this7 = this;
      if (magneticHeading !== this.heading) {
        this.addLerp("heading", (0, _math.lerp)(this.heading, magneticHeading, 3000, function (heading) {
          _this7.heading = heading;
          _this7.callListeners();
        }));
      }
    }

    /**
     * set the roll
     * @param degrees
     */
  }, {
    key: "setRoll",
    value: function setRoll(degrees) {
      var _this8 = this;
      if (degrees !== this.roll) {
        this.addLerp("roll", (0, _math.lerp)(this.roll, degrees, 3000, function (r) {
          _this8.roll = r;
          _this8.callListeners();
        }));
      }
    }

    /**
     * set the roll rate
     * @param degreesPerSecond
     */
  }, {
    key: "setRollRate",
    value: function setRollRate(degreesPerSecond) {
      var _this9 = this;
      if (degreesPerSecond !== this.rollRate) {
        this.addLerp("roll-rate", (0, _math.lerp)(this.rollRate, degreesPerSecond, 3000, function (r) {
          _this9.rollRate = r;
          _this9.callListeners();
        }));
      }
    }

    /**
     * set the pitch
     * @param degrees
     */
  }, {
    key: "setPitch",
    value: function setPitch(degrees) {
      var _this10 = this;
      if (degrees !== this.pitch) {
        this.addLerp("pitch", (0, _math.lerp)(this.pitch, degrees, 3000, function (p) {
          _this10.pitch = p;
          _this10.callListeners();
        }));
      }
    }

    /**
     * set the degrees left ( negative ) or right ( positive ) of neutral ( 0 )
     * @param degrees
     */
  }, {
    key: "setYaw",
    value: function setYaw(degrees) {
      var _this11 = this;
      if (degrees !== this.yaw) {
        this.addLerp("yaw", (0, _math.lerp)(this.yaw, degrees, 3000, function (p) {
          _this11.yaw = p;
          _this11.callListeners();
        }));
      }
    }

    /**
     * add a lerp and cancel an existing one with the same key
     * @param key
     */
  }, {
    key: "addLerp",
    value: function addLerp(key, callback) {
      this.cancelLerp(key);
      this.lerps[key] = callback;
    }

    /**
     * cancel any existing lerp
     */
  }, {
    key: "cancelLerp",
    value: function cancelLerp(key) {
      if (this.lerps[key]) {
        this.lerps[key]();
        delete this.lerps[key];
      }
    }
  }]);
}(_disposable.default);
},{"./disposable":"src/disposable.js","./utils/math":"src/utils/math.js","./utils/conversions":"src/utils/conversions.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _tachometer_analog = _interopRequireDefault(require("./tachometer_analog"));
var _airspeed_analog = _interopRequireDefault(require("./airspeed_analog"));
var _attitude_indicator_analog = _interopRequireDefault(require("./attitude_indicator_analog"));
var _altimeter_analog = _interopRequireDefault(require("./altimeter_analog"));
var _turn_coordinator_analog = _interopRequireDefault(require("./turn_coordinator_analog"));
var _heading_indicator_analog = _interopRequireDefault(require("./heading_indicator_analog"));
var _vertical_speed_analog = _interopRequireDefault(require("./vertical_speed_analog"));
var _airplane = _interopRequireDefault(require("./airplane"));
require("./styles.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/*
  Fully functionality flight instruments built entirely with Snap SVG
  and JavaScript. By default the intruments all go into demo mode
  with random changes to their properties. You can disable that
  by commenting out .startDemo() below.
  Buttons are functionaty e.g. the HDG button on the directional gyro.
  Rotate with the mouse ( when not in demo mode ) to change.

  Feel free to copy/clone/use as you see fit for any purpose commercial
  or non commerical. These are free and open source for anyone to use
  without renumeration, attribution or compensation.

  https://www.linkedin.com/in/duncanmeech/
  duncanmeech@gmail.com

*/

var parentElement = document.body;
var airplane = new _airplane.default();
var instruments = [new _airspeed_analog.default({
  airplane: airplane,
  parentElement: parentElement
}), new _attitude_indicator_analog.default({
  airplane: airplane,
  parentElement: parentElement
}), new _altimeter_analog.default({
  airplane: airplane,
  parentElement: parentElement
}), new _turn_coordinator_analog.default({
  airplane: airplane,
  parentElement: parentElement
}), new _heading_indicator_analog.default({
  airplane: airplane,
  parentElement: parentElement
}), new _vertical_speed_analog.default({
  airplane: airplane,
  parentElement: parentElement
}), new _tachometer_analog.default({
  airplane: airplane,
  parentElement: parentElement
})];
instruments.forEach(function (i) {
  return i.demoStart();
});
},{"./tachometer_analog":"src/tachometer_analog.js","./airspeed_analog":"src/airspeed_analog.js","./attitude_indicator_analog":"src/attitude_indicator_analog.js","./altimeter_analog":"src/altimeter_analog.js","./turn_coordinator_analog":"src/turn_coordinator_analog.js","./heading_indicator_analog":"src/heading_indicator_analog.js","./vertical_speed_analog":"src/vertical_speed_analog.js","./airplane":"src/airplane.js","./styles.css":"src/styles.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36375" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map