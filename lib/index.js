import we from "react";
var Q = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function cr() {
  if (Pe)
    return W;
  Pe = 1;
  var s = we, o = Symbol.for("react.element"), c = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, l = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(T, y, C) {
    var b, _ = {}, P = null, k = null;
    C !== void 0 && (P = "" + C), y.key !== void 0 && (P = "" + y.key), y.ref !== void 0 && (k = y.ref);
    for (b in y)
      v.call(y, b) && !g.hasOwnProperty(b) && (_[b] = y[b]);
    if (T && T.defaultProps)
      for (b in y = T.defaultProps, y)
        _[b] === void 0 && (_[b] = y[b]);
    return { $$typeof: o, type: T, key: P, ref: k, props: _, _owner: l.current };
  }
  return W.Fragment = c, W.jsx = O, W.jsxs = O, W;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function vr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var s = we, o = Symbol.for("react.element"), c = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), T = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), F = Symbol.iterator, N = "@@iterator";
    function R(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[N];
      return typeof r == "function" ? r : null;
    }
    var S = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var f = t.map(function(i) {
          return String(i);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Ae = !1, Fe = !1, Ie = !1, $e = !1, We = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === g || We || e === l || e === C || e === b || $e || e === k || Ae || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === _ || e.$$typeof === O || e.$$typeof === T || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case c:
          return "Portal";
        case g:
          return "Profiler";
        case l:
          return "StrictMode";
        case C:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return re(r) + ".Consumer";
          case O:
            var t = e;
            return re(t._context) + ".Provider";
          case y:
            return Ne(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : w(e.type) || "Memo";
          case P: {
            var u = e, f = u._payload, i = u._init;
            try {
              return w(i(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, I = 0, te, ne, ae, ie, oe, ue, se;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Ve() {
      {
        if (I === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Me() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: te
            }),
            info: j({}, e, {
              value: ne
            }),
            warn: j({}, e, {
              value: ae
            }),
            error: j({}, e, {
              value: ie
            }),
            group: j({}, e, {
              value: oe
            }),
            groupCollapsed: j({}, e, {
              value: ue
            }),
            groupEnd: j({}, e, {
              value: se
            })
          });
        }
        I < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = S.ReactCurrentDispatcher, J;
    function V(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var G = !1, M;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Le();
    }
    function fe(e, r) {
      if (!e || G)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = q.current, q.current = null, Ve();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (x) {
              n = x;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (x) {
              n = x;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            n = x;
          }
          e();
        }
      } catch (x) {
        if (x && n && typeof x.stack == "string") {
          for (var a = x.stack.split(`
`), E = n.stack.split(`
`), d = a.length - 1, p = E.length - 1; d >= 1 && p >= 0 && a[d] !== E[p]; )
            p--;
          for (; d >= 1 && p >= 0; d--, p--)
            if (a[d] !== E[p]) {
              if (d !== 1 || p !== 1)
                do
                  if (d--, p--, p < 0 || a[d] !== E[p]) {
                    var m = `
` + a[d].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, m), m;
                  }
                while (d >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        G = !1, q.current = f, Me(), Error.prepareStackTrace = u;
      }
      var A = e ? e.displayName || e.name : "", Te = A ? V(A) : "";
      return typeof e == "function" && M.set(e, Te), Te;
    }
    function Ue(e, r, t) {
      return fe(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Be(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case C:
          return V("Suspense");
        case b:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return Ue(e.render);
          case _:
            return L(e.type, r, t);
          case P: {
            var n = e, u = n._payload, f = n._init;
            try {
              return L(f(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, ce = {}, ve = S.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, u) {
      {
        var f = Function.call.bind(U);
        for (var i in e)
          if (f(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              a = d;
            }
            a && !(a instanceof Error) && (B(u), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), B(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, B(u), h("Failed %s type: %s", t, a.message), B(null));
          }
      }
    }
    var Je = Array.isArray;
    function z(e) {
      return Je(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function pe(e) {
      if (ze(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), de(e);
    }
    var $ = S.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, ye, K;
    K = {};
    function He(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = w($.current.type);
        K[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w($.current.type), e.ref), K[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          ge || (ge = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          ye || (ye = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, u, f, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, u) {
      {
        var f, i = {}, a = null, E = null;
        t !== void 0 && (pe(t), a = "" + t), Xe(r) && (pe(r.key), a = "" + r.key), He(r) && (E = r.ref, Ze(r, u));
        for (f in r)
          U.call(r, f) && !Ke.hasOwnProperty(f) && (i[f] = r[f]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (f in d)
            i[f] === void 0 && (i[f] = d[f]);
        }
        if (a || E) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(i, p), E && er(i, p);
        }
        return rr(e, a, E, u, n, $.current, i);
      }
    }
    var H = S.ReactCurrentOwner, be = S.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function he() {
      {
        if (H.current) {
          var e = w(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function ar(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + w(e._owner.type) + "."), D(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && _e(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = R(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), i; !(i = f.next()).done; )
              Z(i.value) && _e(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = w(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var u = w(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function Re(e, r, t, n, u, f) {
      {
        var i = Ye(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = nr(u);
          E ? a += E : a += he();
          var d;
          e === null ? d = "null" : z(e) ? d = "array" : e !== void 0 && e.$$typeof === o ? (d = "<" + (w(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, a);
        }
        var p = tr(e, r, t, u, f);
        if (p == null)
          return p;
        if (i) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (z(m)) {
                for (var A = 0; A < m.length; A++)
                  me(m[A], e);
                Object.freeze && Object.freeze(m);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              me(m, e);
        }
        return e === v ? or(p) : ir(p), p;
      }
    }
    function ur(e, r, t) {
      return Re(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Re(e, r, t, !1);
    }
    var lr = sr, fr = ur;
    Y.Fragment = v, Y.jsx = lr, Y.jsxs = fr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? Q.exports = cr() : Q.exports = vr();
var Ce = Q.exports;
function xe(s) {
  const c = String(s).replaceAll('"', "").replaceAll("'", "").split("."), v = [];
  return c.forEach((l) => {
    l.replaceAll("]", "").split("[").forEach((g) => {
      g !== "" && v.push(g);
    });
  }), v;
}
function ke(s, o) {
  if (o === void 0)
    return s;
  let c = [];
  typeof o == "string" || typeof o == "number" || typeof o == "symbol" ? c = xe(o) : c = o;
  const v = c.shift();
  return v !== void 0 ? c.length ? ke(s[v], c) : s[v] : s;
}
function je(s, o, c) {
  if (o === void 0)
    return s;
  let v = [];
  typeof o == "string" || typeof o == "number" || typeof o == "symbol" ? v = xe(o) : v = o;
  const l = v.shift();
  if (l !== void 0 && (v.length ? je(s[l], v, c) : s[l] = c), v.length === 0)
    return s;
}
function dr(s, o) {
  return ke(s, o);
}
function Se(s, o, c) {
  return je(s, o, c);
}
const pr = (s, o) => (c, v) => ({
  [v ?? "value"]: c === void 0 || s === null || s === void 0 ? s : dr(s, c) ?? "",
  onChange: (l) => {
    var T, y, C, b, _, P, k, F, N;
    let g = ((T = l == null ? void 0 : l.target) == null ? void 0 : T.value) ?? l;
    const O = (y = l == null ? void 0 : l.target) == null ? void 0 : y.type;
    if (O === "number")
      g = Number(g);
    else if (O === "checkbox") {
      if (g = (C = l.target) == null ? void 0 : C.checked, (b = l.target) != null && b.attributes) {
        const R = (_ = l.target.attributes["true-value"]) == null ? void 0 : _.value, S = (P = l.target.attributes["false-value"]) == null ? void 0 : P.value;
        R !== void 0 && S !== void 0 && (g = g ? R : S);
      }
    } else
      O === "file" && l.target.attributes.multiple && (g = l.target.files);
    if ((k = l == null ? void 0 : l.target) != null && k.attributes && ((N = (F = l == null ? void 0 : l.target) == null ? void 0 : F.attributes["value-type"]) == null ? void 0 : N.value) === "number" && (g = Number(g)), o !== void 0)
      if (c !== void 0) {
        if (Array.isArray(s)) {
          const R = [...s];
          Se(R, c, g), o(R);
        } else if (typeof s == "object") {
          const R = { ...s };
          Se(R, c, g), o(R);
        }
      } else
        o(g);
  }
});
function yr({ children: s, value: o, onChange: c }) {
  const v = pr(o, c);
  return /* @__PURE__ */ Ce.jsx(Ce.Fragment, { children: s(v, o, c) });
}
export {
  yr as Model,
  pr as makeVModel
};
