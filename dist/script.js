'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Currency =
/*#__PURE__*/
function () {
  function Currency() {
    var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var ratioWithProto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "$";

    _classCallCheck(this, Currency);

    this.quantity = quantity;
    this.ratioWithProto = ratioWithProto;
    this.sign = sign;
  } // геттер


  _createClass(Currency, [{
    key: "sum",
    value: function sum(slag) {
      return this.quantity * this.ratioWithProto + slag.quantity * slag.ratioWithProto;
    }
  }, {
    key: "isCurrencyType",
    value: function isCurrencyType() {
      return this instanceof Сurrency;
    }
  }]);

  return Currency;
}();

;
console.log(Currency);

var Dollar =
/*#__PURE__*/
function (_Currency) {
  _inherits(Dollar, _Currency);

  function Dollar() {
    var _this;

    _classCallCheck(this, Dollar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dollar).call(this, quantity, ratioWithProto, sign));
    Dollar.count += 1;
    _this._quantity = quantity;
    return _this;
  }

  _createClass(Dollar, [{
    key: "qquantity",
    get: function get() {
      return "".concat((this._quantity, this.sigh));
    } // static count() {
    // return this.count;
    // }

  }]);

  return Dollar;
}(Currency);

Dollar.count = 0;
console.log(Dollar);
console.log(Dollar.count);

var Canadian =
/*#__PURE__*/
function (_Currency2) {
  _inherits(Canadian, _Currency2);

  function Canadian() {
    _classCallCheck(this, Canadian);

    return _possibleConstructorReturn(this, _getPrototypeOf(Canadian).call(this, quantity, 1.2, sign));
  }

  return Canadian;
}(Currency);

console.log(Canadian);

var Hryvna =
/*#__PURE__*/
function (_Currency3) {
  _inherits(Hryvna, _Currency3);

  function Hryvna() {
    _classCallCheck(this, Hryvna);

    return _possibleConstructorReturn(this, _getPrototypeOf(Hryvna).call(this, quantity, 0.65, sign));
  }

  return Hryvna;
}(Currency);

console.log(Hryvna);
console.log(Dollar.count);
var dol = new Dollar(10);
console.log(dol.quantity);
var dcan = new Canadian(20);
console.log(dcan);
console.log(dol.sum);
var summa = dol.sum + dcan.sum;
console.log(summa);
