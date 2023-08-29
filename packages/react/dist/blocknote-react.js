import D, { forwardRef as ge, useEffect as L, useState as C, useMemo as R, useCallback as B, useRef as I, createContext as an, useContext as ln } from "react";
import { blockStyles as Y, mergeCSSClasses as Me, getDefaultSlashMenuItems as cn, defaultBlockSchema as at, BlockNoteEditor as sn, createTipTapBlock as dn, propsToAttributes as un, parse as fn, render as gn, camelToDataKebab as hn } from "@blocknote/core";
import { createStyles as V, Group as Ee, Menu as j, Button as lt, Stack as we, Text as ue, ActionIcon as ct, Box as st, Container as vn, TextInput as bn, Badge as xn, MantineProvider as mn } from "@mantine/core";
import { EditorContent as kn, NodeViewContent as yn, ReactNodeViewRenderer as Cn, NodeViewWrapper as Tn } from "@tiptap/react";
import jn from "use-prefers-color-scheme";
import * as et from "lodash";
import P from "lodash";
import q from "@tippyjs/react";
import { sticky as Sn } from "tippy.js";
var je = { exports: {} }, te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function pn() {
  if (tt)
    return te;
  tt = 1;
  var e = D, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, u = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(f, d, k) {
    var h, p = {}, H = null, $ = null;
    k !== void 0 && (H = "" + k), d.key !== void 0 && (H = "" + d.key), d.ref !== void 0 && ($ = d.ref);
    for (h in d)
      a.call(d, h) && !l.hasOwnProperty(h) && (p[h] = d[h]);
    if (f && f.defaultProps)
      for (h in d = f.defaultProps, d)
        p[h] === void 0 && (p[h] = d[h]);
    return { $$typeof: n, type: f, key: H, ref: $, props: p, _owner: u.current };
  }
  return te.Fragment = o, te.jsx = s, te.jsxs = s, te;
}
var ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt;
function Mn() {
  return nt || (nt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = D, n = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), f = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), N = Symbol.iterator, re = "@@iterator";
    function pt(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = N && t[N] || t[re];
      return typeof i == "function" ? i : null;
    }
    var G = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(t) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), g = 1; g < i; g++)
          c[g - 1] = arguments[g];
        Mt("error", t, c);
      }
    }
    function Mt(t, i, c) {
      {
        var g = G.ReactDebugCurrentFrame, x = g.getStackAddendum();
        x !== "" && (i += "%s", c = c.concat([x]));
        var y = c.map(function(b) {
          return String(b);
        });
        y.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, y);
      }
    }
    var Et = !1, wt = !1, Rt = !1, zt = !1, Ht = !1, ze;
    ze = Symbol.for("react.module.reference");
    function _t(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === a || t === l || Ht || t === u || t === k || t === h || zt || t === $ || Et || wt || Rt || typeof t == "object" && t !== null && (t.$$typeof === H || t.$$typeof === p || t.$$typeof === s || t.$$typeof === f || t.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === ze || t.getModuleId !== void 0));
    }
    function Bt(t, i, c) {
      var g = t.displayName;
      if (g)
        return g;
      var x = i.displayName || i.name || "";
      return x !== "" ? c + "(" + x + ")" : c;
    }
    function He(t) {
      return t.displayName || "Context";
    }
    function A(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case a:
          return "Fragment";
        case o:
          return "Portal";
        case l:
          return "Profiler";
        case u:
          return "StrictMode";
        case k:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var i = t;
            return He(i) + ".Consumer";
          case s:
            var c = t;
            return He(c._context) + ".Provider";
          case d:
            return Bt(t, t.render, "ForwardRef");
          case p:
            var g = t.displayName || null;
            return g !== null ? g : A(t.type) || "Memo";
          case H: {
            var x = t, y = x._payload, b = x._init;
            try {
              return A(b(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, Q = 0, _e, Be, Ie, Ae, Oe, Pe, De;
    function Fe() {
    }
    Fe.__reactDisabledLog = !0;
    function It() {
      {
        if (Q === 0) {
          _e = console.log, Be = console.info, Ie = console.warn, Ae = console.error, Oe = console.group, Pe = console.groupCollapsed, De = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Q++;
      }
    }
    function At() {
      {
        if (Q--, Q === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, t, {
              value: _e
            }),
            info: W({}, t, {
              value: Be
            }),
            warn: W({}, t, {
              value: Ie
            }),
            error: W({}, t, {
              value: Ae
            }),
            group: W({}, t, {
              value: Oe
            }),
            groupCollapsed: W({}, t, {
              value: Pe
            }),
            groupEnd: W({}, t, {
              value: De
            })
          });
        }
        Q < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = G.ReactCurrentDispatcher, ve;
    function oe(t, i, c) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (x) {
            var g = x.stack.trim().match(/\n( *(at )?)/);
            ve = g && g[1] || "";
          }
        return `
` + ve + t;
      }
    }
    var be = !1, ie;
    {
      var Ot = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new Ot();
    }
    function Le(t, i) {
      if (!t || be)
        return "";
      {
        var c = ie.get(t);
        if (c !== void 0)
          return c;
      }
      var g;
      be = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = he.current, he.current = null, It();
      try {
        if (i) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (O) {
              g = O;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (O) {
              g = O;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            g = O;
          }
          t();
        }
      } catch (O) {
        if (O && g && typeof O.stack == "string") {
          for (var v = O.stack.split(`
`), w = g.stack.split(`
`), S = v.length - 1, M = w.length - 1; S >= 1 && M >= 0 && v[S] !== w[M]; )
            M--;
          for (; S >= 1 && M >= 0; S--, M--)
            if (v[S] !== w[M]) {
              if (S !== 1 || M !== 1)
                do
                  if (S--, M--, M < 0 || v[S] !== w[M]) {
                    var z = `
` + v[S].replace(" at new ", " at ");
                    return t.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", t.displayName)), typeof t == "function" && ie.set(t, z), z;
                  }
                while (S >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        be = !1, he.current = y, At(), Error.prepareStackTrace = x;
      }
      var X = t ? t.displayName || t.name : "", Qe = X ? oe(X) : "";
      return typeof t == "function" && ie.set(t, Qe), Qe;
    }
    function Pt(t, i, c) {
      return Le(t, !1);
    }
    function Dt(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function ae(t, i, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Le(t, Dt(t));
      if (typeof t == "string")
        return oe(t);
      switch (t) {
        case k:
          return oe("Suspense");
        case h:
          return oe("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case d:
            return Pt(t.render);
          case p:
            return ae(t.type, i, c);
          case H: {
            var g = t, x = g._payload, y = g._init;
            try {
              return ae(y(x), i, c);
            } catch {
            }
          }
        }
      return "";
    }
    var le = Object.prototype.hasOwnProperty, Ve = {}, Ne = G.ReactDebugCurrentFrame;
    function ce(t) {
      if (t) {
        var i = t._owner, c = ae(t.type, t._source, i ? i.type : null);
        Ne.setExtraStackFrame(c);
      } else
        Ne.setExtraStackFrame(null);
    }
    function Ft(t, i, c, g, x) {
      {
        var y = Function.call.bind(le);
        for (var b in t)
          if (y(t, b)) {
            var v = void 0;
            try {
              if (typeof t[b] != "function") {
                var w = Error((g || "React class") + ": " + c + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              v = t[b](i, b, g, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              v = S;
            }
            v && !(v instanceof Error) && (ce(x), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", c, b, typeof v), ce(null)), v instanceof Error && !(v.message in Ve) && (Ve[v.message] = !0, ce(x), E("Failed %s type: %s", c, v.message), ce(null));
          }
      }
    }
    var Lt = Array.isArray;
    function xe(t) {
      return Lt(t);
    }
    function Vt(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, c = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function Nt(t) {
      try {
        return Ue(t), !1;
      } catch {
        return !0;
      }
    }
    function Ue(t) {
      return "" + t;
    }
    function $e(t) {
      if (Nt(t))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vt(t)), Ue(t);
    }
    var ee = G.ReactCurrentOwner, Ut = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, Ye, me;
    me = {};
    function $t(t) {
      if (le.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Wt(t) {
      if (le.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Yt(t, i) {
      if (typeof t.ref == "string" && ee.current && i && ee.current.stateNode !== i) {
        var c = A(ee.current.type);
        me[c] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(ee.current.type), t.ref), me[c] = !0);
      }
    }
    function qt(t, i) {
      {
        var c = function() {
          We || (We = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function Kt(t, i) {
      {
        var c = function() {
          Ye || (Ye = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Gt = function(t, i, c, g, x, y, b) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: c,
        props: b,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function Jt(t, i, c, g, x) {
      {
        var y, b = {}, v = null, w = null;
        c !== void 0 && ($e(c), v = "" + c), Wt(i) && ($e(i.key), v = "" + i.key), $t(i) && (w = i.ref, Yt(i, x));
        for (y in i)
          le.call(i, y) && !Ut.hasOwnProperty(y) && (b[y] = i[y]);
        if (t && t.defaultProps) {
          var S = t.defaultProps;
          for (y in S)
            b[y] === void 0 && (b[y] = S[y]);
        }
        if (v || w) {
          var M = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          v && qt(b, M), w && Kt(b, M);
        }
        return Gt(t, v, w, x, g, ee.current, b);
      }
    }
    var ke = G.ReactCurrentOwner, qe = G.ReactDebugCurrentFrame;
    function J(t) {
      if (t) {
        var i = t._owner, c = ae(t.type, t._source, i ? i.type : null);
        qe.setExtraStackFrame(c);
      } else
        qe.setExtraStackFrame(null);
    }
    var ye;
    ye = !1;
    function Ce(t) {
      return typeof t == "object" && t !== null && t.$$typeof === n;
    }
    function Ke() {
      {
        if (ke.current) {
          var t = A(ke.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Xt(t) {
      {
        if (t !== void 0) {
          var i = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + i + ":" + c + ".";
        }
        return "";
      }
    }
    var Ge = {};
    function Zt(t) {
      {
        var i = Ke();
        if (!i) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (i = `

Check the top-level render call using <` + c + ">.");
        }
        return i;
      }
    }
    function Je(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Zt(i);
        if (Ge[c])
          return;
        Ge[c] = !0;
        var g = "";
        t && t._owner && t._owner !== ke.current && (g = " It was passed a child from " + A(t._owner.type) + "."), J(t), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, g), J(null);
      }
    }
    function Xe(t, i) {
      {
        if (typeof t != "object")
          return;
        if (xe(t))
          for (var c = 0; c < t.length; c++) {
            var g = t[c];
            Ce(g) && Je(g, i);
          }
        else if (Ce(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var x = pt(t);
          if (typeof x == "function" && x !== t.entries)
            for (var y = x.call(t), b; !(b = y.next()).done; )
              Ce(b.value) && Je(b.value, i);
        }
      }
    }
    function Qt(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var c;
        if (typeof i == "function")
          c = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === p))
          c = i.propTypes;
        else
          return;
        if (c) {
          var g = A(i);
          Ft(c, t.props, "prop", g, t);
        } else if (i.PropTypes !== void 0 && !ye) {
          ye = !0;
          var x = A(i);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function en(t) {
      {
        for (var i = Object.keys(t.props), c = 0; c < i.length; c++) {
          var g = i[c];
          if (g !== "children" && g !== "key") {
            J(t), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), J(null);
            break;
          }
        }
        t.ref !== null && (J(t), E("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
      }
    }
    function Ze(t, i, c, g, x, y) {
      {
        var b = _t(t);
        if (!b) {
          var v = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = Xt(x);
          w ? v += w : v += Ke();
          var S;
          t === null ? S = "null" : xe(t) ? S = "array" : t !== void 0 && t.$$typeof === n ? (S = "<" + (A(t.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : S = typeof t, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, v);
        }
        var M = Jt(t, i, c, x, y);
        if (M == null)
          return M;
        if (b) {
          var z = i.children;
          if (z !== void 0)
            if (g)
              if (xe(z)) {
                for (var X = 0; X < z.length; X++)
                  Xe(z[X], t);
                Object.freeze && Object.freeze(z);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xe(z, t);
        }
        return t === a ? en(M) : Qt(M), M;
      }
    }
    function tn(t, i, c) {
      return Ze(t, i, c, !0);
    }
    function nn(t, i, c) {
      return Ze(t, i, c, !1);
    }
    var rn = nn, on = tn;
    ne.Fragment = a, ne.jsx = rn, ne.jsxs = on;
  }()), ne;
}
process.env.NODE_ENV === "production" ? je.exports = pn() : je.exports = Mn();
var r = je.exports;
const se = (e) => {
  const n = `0 4px 12px ${e.colors.shadow}`, o = `1px solid ${e.colors.border}`, a = {
    default: e.colors.editor.text,
    gray: e.colors.highlightColors.gray.text,
    brown: e.colors.highlightColors.brown.text,
    red: e.colors.highlightColors.red.text,
    orange: e.colors.highlightColors.orange.text,
    yellow: e.colors.highlightColors.yellow.text,
    green: e.colors.highlightColors.green.text,
    blue: e.colors.highlightColors.blue.text,
    purple: e.colors.highlightColors.purple.text,
    pink: e.colors.highlightColors.pink.text
  }, u = {
    default: e.colors.editor.background,
    gray: e.colors.highlightColors.gray.background,
    brown: e.colors.highlightColors.brown.background,
    red: e.colors.highlightColors.red.background,
    orange: e.colors.highlightColors.orange.background,
    yellow: e.colors.highlightColors.yellow.background,
    green: e.colors.highlightColors.green.background,
    blue: e.colors.highlightColors.blue.background,
    purple: e.colors.highlightColors.purple.background,
    pink: e.colors.highlightColors.pink.background
  }, l = `${Math.max(e.borderRadius + 2, 1)}px`, s = `${e.borderRadius}px`, f = `${Math.max(e.borderRadius - 2, 1)}px`;
  return {
    activeStyles: {
      // Removes button press effect.
      transform: "none"
    },
    components: {
      // Slash Menu, Formatting Toolbar dropdown, color picker dropdown
      Menu: {
        styles: () => {
          var d;
          return {
            dropdown: P.merge(
              {
                backgroundColor: e.colors.menu.background,
                border: o,
                borderRadius: s,
                boxShadow: n,
                color: e.colors.menu.text,
                padding: "2px",
                ".mantine-Menu-label": {
                  backgroundColor: e.colors.menu.background,
                  color: e.colors.menu.text
                },
                ".mantine-Menu-item": {
                  backgroundColor: e.colors.menu.background,
                  border: "none",
                  borderRadius: f,
                  color: e.colors.menu.text
                },
                ".mantine-Menu-item[data-hovered]": {
                  backgroundColor: e.colors.hovered.background,
                  border: "none",
                  color: e.colors.hovered.text
                }
              },
              ((d = e.componentStyles) == null ? void 0 : d.call(e, e).Menu) || {}
            )
          };
        }
      },
      ColorIcon: {
        styles: () => {
          var d;
          return {
            root: P.merge(
              {
                border: o,
                borderRadius: f
              },
              ((d = e.componentStyles) == null ? void 0 : d.call(e, e).ColorIcon) || {}
            )
          };
        }
      },
      DragHandleMenu: {
        styles: () => {
          var d;
          return {
            root: P.merge(
              {
                ".mantine-Menu-item": {
                  fontSize: "12px",
                  height: "30px"
                }
              },
              ((d = e.componentStyles) == null ? void 0 : d.call(e, e).DragHandleMenu) || {}
            )
          };
        }
      },
      EditHyperlinkMenu: {
        styles: () => {
          var d;
          return {
            root: P.merge(
              {
                backgroundColor: e.colors.menu.background,
                border: o,
                borderRadius: s,
                boxShadow: n,
                color: e.colors.menu.text,
                gap: "4px",
                minWidth: "145px",
                padding: "2px",
                // Row
                ".mantine-Group-root": {
                  flexWrap: "nowrap",
                  gap: "8px",
                  paddingInline: "6px",
                  // Row icon
                  ".mantine-Container-root": {
                    color: e.colors.menu.text,
                    display: "flex",
                    justifyContent: "center",
                    padding: 0,
                    width: "fit-content"
                  },
                  // Row input field
                  ".mantine-TextInput-root": {
                    width: "300px",
                    ".mantine-TextInput-wrapper": {
                      ".mantine-TextInput-input": {
                        border: "none",
                        color: e.colors.menu.text,
                        fontSize: "12px",
                        padding: 0
                      }
                    }
                  }
                }
              },
              ((d = e.componentStyles) == null ? void 0 : d.call(e, e).EditHyperlinkMenu) || {}
            )
          };
        }
      },
      Editor: {
        styles: () => {
          var d;
          return {
            root: P.merge(
              {
                ".ProseMirror": {
                  backgroundColor: e.colors.editor.background,
                  borderRadius: l,
                  color: e.colors.editor.text,
                  fontFamily: e.fontFamily
                },
                // Placeholders
                [`.${Y.isEmpty} .${Y.inlineContent}:before, .${Y.isFilter} .${Y.inlineContent}:before`]: {
                  color: e.colors.sideMenu
                },
                // Highlight text colors
                ...Object.fromEntries(
                  Object.entries(a).map(([k, h]) => [
                    `[data-text-color="${k}"]`,
                    { color: h }
                  ])
                ),
                // Highlight background colors
                ...Object.fromEntries(
                  Object.entries(u).map(([k, h]) => [
                    `[data-background-color="${k}"]`,
                    { backgroundColor: h }
                  ])
                )
              },
              ((d = e.componentStyles) == null ? void 0 : d.call(e, e).Editor) || {}
            )
          };
        }
      },
      Toolbar: {
        styles: () => {
          var d;
          return {
            root: P.merge(
              {
                backgroundColor: e.colors.menu.background,
                boxShadow: n,
                border: o,
                borderRadius: s,
                flexWrap: "nowrap",
                gap: "2px",
                padding: "2px",
                width: "fit-content",
                // Button (including dropdown target)
                ".mantine-UnstyledButton-root": {
                  backgroundColor: e.colors.menu.background,
                  border: "none",
                  borderRadius: f,
                  color: e.colors.menu.text
                },
                // Hovered button
                ".mantine-UnstyledButton-root:hover": {
                  backgroundColor: e.colors.hovered.background,
                  border: "none",
                  color: e.colors.hovered.text
                },
                // Selected button
                ".mantine-UnstyledButton-root[data-selected]": {
                  backgroundColor: e.colors.selected.background,
                  border: "none",
                  color: e.colors.selected.text
                },
                // Disabled button
                ".mantine-UnstyledButton-root[data-disabled]": {
                  backgroundColor: e.colors.disabled.background,
                  border: "none",
                  color: e.colors.disabled.text
                },
                // Dropdown
                ".mantine-Menu-dropdown": {
                  // Dropdown item
                  ".mantine-Menu-item": {
                    fontSize: "12px",
                    height: "30px",
                    ".mantine-Menu-itemRightSection": {
                      paddingLeft: "5px"
                    }
                  },
                  ".mantine-Menu-item:hover": {
                    backgroundColor: e.colors.hovered.background
                  }
                }
              },
              ((d = e.componentStyles) == null ? void 0 : d.call(e, e).Toolbar) || {}
            )
          };
        }
      },
      Tooltip: {
        styles: () => {
          var d;
          return {
            root: P.merge(
              {
                backgroundColor: e.colors.tooltip.background,
                border: o,
                borderRadius: s,
                boxShadow: n,
                color: e.colors.tooltip.text,
                padding: "4px 10px",
                textAlign: "center",
                "div ~ div": {
                  color: e.colors.tooltip.text
                }
              },
              ((d = e.componentStyles) == null ? void 0 : d.call(e, e).Tooltip) || {}
            )
          };
        }
      },
      SlashMenu: {
        styles: () => {
          var d;
          return {
            root: P.merge(
              {
                position: "relative",
                ".mantine-Menu-item": {
                  // Icon
                  ".mantine-Menu-itemIcon": {
                    backgroundColor: e.colors.tooltip.background,
                    borderRadius: f,
                    color: e.colors.tooltip.text,
                    padding: "8px"
                  },
                  // Text
                  ".mantine-Menu-itemLabel": {
                    paddingRight: "16px",
                    ".mantine-Stack-root": {
                      gap: "0"
                    }
                  },
                  // Badge (keyboard shortcut)
                  ".mantine-Menu-itemRightSection": {
                    ".mantine-Badge-root": {
                      backgroundColor: e.colors.tooltip.background,
                      color: e.colors.tooltip.text
                    }
                  }
                }
              },
              ((d = e.componentStyles) == null ? void 0 : d.call(e, e).SlashMenu) || {}
            )
          };
        }
      },
      SideMenu: {
        styles: () => {
          var d;
          return {
            root: P.merge(
              {
                backgroundColor: "transparent",
                ".mantine-UnstyledButton-root": {
                  backgroundColor: "transparent",
                  color: e.colors.sideMenu
                },
                ".mantine-UnstyledButton-root:hover": {
                  backgroundColor: e.colors.hovered.background
                }
              },
              ((d = e.componentStyles) == null ? void 0 : d.call(e, e).SideMenu) || {}
            )
          };
        }
      }
    },
    fontFamily: e.fontFamily,
    other: {
      textColors: a,
      backgroundColors: u
    }
  };
}, dt = ge((e, n) => {
  const { classes: o } = V({ root: {} })(void 0, {
    name: "Toolbar"
  });
  return /* @__PURE__ */ r.jsx(
    Ee,
    {
      className: e.className ? `${o.root} ${e.className}` : o.root,
      ref: n,
      ...e,
      children: e.children
    }
  );
});
var ut = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, rt = D.createContext && D.createContext(ut), U = globalThis && globalThis.__assign || function() {
  return U = Object.assign || function(e) {
    for (var n, o = 1, a = arguments.length; o < a; o++) {
      n = arguments[o];
      for (var u in n)
        Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
    }
    return e;
  }, U.apply(this, arguments);
}, En = globalThis && globalThis.__rest || function(e, n) {
  var o = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (o[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, a = Object.getOwnPropertySymbols(e); u < a.length; u++)
      n.indexOf(a[u]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[u]) && (o[a[u]] = e[a[u]]);
  return o;
};
function ft(e) {
  return e && e.map(function(n, o) {
    return D.createElement(n.tag, U({
      key: o
    }, n.attr), ft(n.child));
  });
}
function T(e) {
  return function(n) {
    return D.createElement(wn, U({
      attr: U({}, e.attr)
    }, n), ft(e.child));
  };
}
function wn(e) {
  var n = function(o) {
    var a = e.attr, u = e.size, l = e.title, s = En(e, ["attr", "size", "title"]), f = u || o.size || "1em", d;
    return o.className && (d = o.className), e.className && (d = (d ? d + " " : "") + e.className), D.createElement("svg", U({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, o.attr, a, s, {
      className: d,
      style: U(U({
        color: e.color || o.color
      }, o.style), e.style),
      height: f,
      width: f,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && D.createElement("title", null, l), e.children);
  };
  return rt !== void 0 ? D.createElement(rt.Consumer, null, function(o) {
    return n(o);
  }) : n(ut);
}
function Rn(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z" } }] }] })(e);
}
function zn(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm2 15h14v2H5v-2zm-2-5h18v2H3v-2zm2-5h14v2H5V9z" } }] }] })(e);
}
function Hn(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm0 15h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V9z" } }] }] })(e);
}
function _n(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z" } }] }] })(e);
}
function Bn(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm4 15h14v2H7v-2zm-4-5h18v2H3v-2zm4-5h14v2H7V9z" } }] }] })(e);
}
function In(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z" } }] }] })(e);
}
function gt(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0H24V24H0z" } }, { tag: "path", attr: { d: "M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z" } }] }] })(e);
}
function ht(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0H24V24H0z" } }, { tag: "path", attr: { d: "M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .857-.288 1.648-.772 2.28l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546c.268-.307.43-.709.43-1.148 0-.966-.784-1.75-1.75-1.75-.918 0-1.671.707-1.744 1.606l-.006.144h-2C14.75 9.679 16.429 8 18.5 8z" } }] }] })(e);
}
function vt(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0H24V24H0z" } }, { tag: "path", attr: { d: "M22 8l-.002 2-2.505 2.883c1.59.435 2.757 1.89 2.757 3.617 0 2.071-1.679 3.75-3.75 3.75-1.826 0-3.347-1.305-3.682-3.033l1.964-.382c.156.806.866 1.415 1.718 1.415.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75c-.286 0-.556.069-.794.19l-1.307-1.547L19.35 10H15V8h7zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z" } }] }] })(e);
}
function An(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm0 15h18v2H3v-2zm8-5h10v2H11v-2zm0-5h10v2H11V9zm-8 3.5L7 9v7l-4-3.5z" } }] }] })(e);
}
function On(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm0 15h18v2H3v-2zm8-5h10v2H11v-2zm0-5h10v2H11V9zm-4 3.5L3 16V9l4 3.5z" } }] }] })(e);
}
function Pn(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" } }] }] })(e);
}
function Dn(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M17 17h5v2h-3v3h-2v-5zM7 7H2V5h3V2h2v5zm11.364 8.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" } }] }] })(e);
}
function bt(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" } }] }] })(e);
}
function xt(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" } }] }] })(e);
}
function mt(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" } }] }] })(e);
}
function Fn(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.086 4.086 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099.436.313.974.562 1.613.75.62.18 1.297.414 2.03.699z" } }] }] })(e);
}
function Re(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M13 6v15h-2V6H5V4h14v2z" } }] }] })(e);
}
function Ln(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3h2zM4 20h16v2H4v-2z" } }] }] })(e);
}
function Vn(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" } }] }] })(e);
}
function Se(e) {
  return T({ tag: "svg", attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z" } }] })(e);
}
function Nn(e) {
  const n = e.icon;
  return /* @__PURE__ */ r.jsx(
    j.Item,
    {
      onClick: e.onClick,
      icon: n && /* @__PURE__ */ r.jsx(n, { size: 16 }),
      rightSection: e.isSelected ? /* @__PURE__ */ r.jsx(Se, { size: 16 }) : (
        // Ensures space for tick even if item isn't currently selected.
        /* @__PURE__ */ r.jsx("div", { style: { width: "16px", padding: "0" } })
      ),
      disabled: e.isDisabled,
      children: e.text
    },
    e.text
  );
}
function Un(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" } }] })(e);
}
function $n(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" } }] })(e);
}
const Wn = ge((e, n) => {
  const o = e.icon;
  return /* @__PURE__ */ r.jsx(
    lt,
    {
      leftIcon: o && /* @__PURE__ */ r.jsx(o, { size: 16 }),
      rightIcon: /* @__PURE__ */ r.jsx(Un, {}),
      size: "xs",
      variant: "subtle",
      disabled: e.isDisabled,
      onClick: e.onClick,
      ref: n,
      children: e.text
    }
  );
});
function Yn(e) {
  const n = e.items.filter((o) => o.isSelected)[0];
  return n ? /* @__PURE__ */ r.jsxs(j, { exitTransitionDuration: 0, disabled: e.isDisabled, children: [
    /* @__PURE__ */ r.jsx(j.Target, { children: /* @__PURE__ */ r.jsx(
      Wn,
      {
        text: n.text,
        icon: n.icon,
        isDisabled: n.isDisabled
      }
    ) }),
    /* @__PURE__ */ r.jsx(j.Dropdown, { children: e.items.map((o) => /* @__PURE__ */ r.jsx(Nn, { ...o }, o.text)) })
  ] }) : null;
}
function K(e, n) {
  L(() => (e._tiptapEditor.on("selectionUpdate", n), () => {
    e._tiptapEditor.off("selectionUpdate", n);
  }), [n, e._tiptapEditor]);
}
function Z(e, n) {
  L(() => (e._tiptapEditor.on("update", n), () => {
    e._tiptapEditor.off("update", n);
  }), [n, e._tiptapEditor]);
}
const qn = [
  {
    name: "Paragraph",
    type: "paragraph",
    icon: Re
  },
  {
    name: "Heading 1",
    type: "heading",
    props: { level: "1" },
    icon: gt
  },
  {
    name: "Heading 2",
    type: "heading",
    props: { level: "2" },
    icon: ht
  },
  {
    name: "Heading 3",
    type: "heading",
    props: { level: "3" },
    icon: vt
  },
  {
    name: "Bullet List",
    type: "bulletListItem",
    icon: mt
  },
  {
    name: "Numbered List",
    type: "numberedListItem",
    icon: xt
  }
], Kn = (e) => {
  const [n, o] = C(
    e.editor.getTextCursorPosition().block
  ), a = R(() => (e.items || qn).filter((s) => {
    if (!(s.type in e.editor.schema))
      return !1;
    for (const [f, d] of Object.entries(s.props || {})) {
      const k = e.editor.schema[s.type].propSchema;
      if (!(f in k) || k[f].values !== void 0 && !k[f].values.includes(d))
        return !1;
    }
    return !0;
  }), [e.editor, e.items]), u = R(
    () => a.find((s) => s.type === n.type) !== void 0,
    [n.type, a]
  ), l = R(
    () => a.map((s) => ({
      text: s.name,
      icon: s.icon,
      onClick: () => {
        e.editor.focus(), e.editor.updateBlock(n, {
          type: s.type,
          props: {}
        });
      },
      isSelected: n.type === s.type
    })),
    [n, a, e.editor]
  );
  return Z(e.editor, () => {
    o(e.editor.getTextCursorPosition().block);
  }), K(e.editor, () => {
    o(e.editor.getTextCursorPosition().block);
  }), u ? /* @__PURE__ */ r.jsx(Yn, { items: l }) : null;
}, kt = (e) => {
  const { classes: n } = V({ root: {} })(void 0, {
    name: "Tooltip"
  });
  return /* @__PURE__ */ r.jsxs(we, { spacing: 0, className: n.root, children: [
    /* @__PURE__ */ r.jsx(ue, { size: "sm", children: e.mainTooltip }),
    e.secondaryTooltip && /* @__PURE__ */ r.jsx(ue, { size: "xs", children: e.secondaryTooltip })
  ] });
}, F = ge(
  (e, n) => {
    const o = e.icon;
    return /* @__PURE__ */ r.jsx(
      q,
      {
        content: /* @__PURE__ */ r.jsx(
          kt,
          {
            mainTooltip: e.mainTooltip,
            secondaryTooltip: e.secondaryTooltip
          }
        ),
        trigger: "mouseenter",
        children: e.children ? /* @__PURE__ */ r.jsxs(
          lt,
          {
            onClick: e.onClick,
            "data-selected": e.isSelected ? "true" : void 0,
            "data-test": e.mainTooltip.slice(0, 1).toLowerCase() + e.mainTooltip.replace(/\s+/g, "").slice(1),
            size: "xs",
            disabled: e.isDisabled || !1,
            ref: n,
            children: [
              o && /* @__PURE__ */ r.jsx(o, {}),
              e.children
            ]
          }
        ) : /* @__PURE__ */ r.jsx(
          ct,
          {
            onClick: e.onClick,
            "data-selected": e.isSelected ? "true" : void 0,
            "data-test": e.mainTooltip.slice(0, 1).toLowerCase() + e.mainTooltip.replace(/\s+/g, "").slice(1),
            size: 30,
            disabled: e.isDisabled || !1,
            ref: n,
            children: o && /* @__PURE__ */ r.jsx(o, {})
          }
        )
      }
    );
  }
), Gn = () => typeof navigator < "u" && (/Mac/.test(navigator.platform) || /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent));
function _(e) {
  return Gn() ? e.replace("Mod", "⌘") : e.replace("Mod", "Ctrl");
}
const Jn = {
  bold: "Mod+B",
  italic: "Mod+I",
  underline: "Mod+U",
  strike: "Mod+Shift+X",
  code: ""
}, Xn = {
  bold: In,
  italic: Pn,
  underline: Ln,
  strike: Fn,
  code: Rn
}, de = (e) => {
  const [n, o] = C(
    e.toggledStyle in e.editor.getActiveStyles()
  );
  Z(e.editor, () => {
    o(e.toggledStyle in e.editor.getActiveStyles());
  }), K(e.editor, () => {
    o(e.toggledStyle in e.editor.getActiveStyles());
  });
  const a = (u) => {
    e.editor.focus(), e.editor.toggleStyles({ [u]: !0 });
  };
  return /* @__PURE__ */ r.jsx(
    F,
    {
      onClick: () => a(e.toggledStyle),
      isSelected: n,
      mainTooltip: e.toggledStyle.slice(0, 1).toUpperCase() + e.toggledStyle.slice(1),
      secondaryTooltip: _(Jn[e.toggledStyle]),
      icon: Xn[e.toggledStyle]
    }
  );
}, Zn = {
  left: _n,
  center: zn,
  right: Bn,
  justify: Hn
}, Te = (e) => {
  const [n, o] = C(() => {
    const l = e.editor.getTextCursorPosition().block;
    if ("textAlignment" in l.props)
      return l.props.textAlignment;
  });
  Z(e.editor, () => {
    const l = e.editor.getTextCursorPosition().block;
    "textAlignment" in l.props && o(l.props.textAlignment);
  }), K(e.editor, () => {
    const l = e.editor.getTextCursorPosition().block;
    "textAlignment" in l.props && o(l.props.textAlignment);
  });
  const a = R(() => {
    const l = e.editor.getSelection();
    if (l) {
      for (const s of l.blocks)
        if (!("textAlignment" in s.props))
          return !1;
    } else if (!("textAlignment" in e.editor.getTextCursorPosition().block.props))
      return !1;
    return !0;
  }, [e.editor]), u = B(
    (l) => {
      e.editor.focus();
      const s = e.editor.getSelection();
      if (s)
        for (const f of s.blocks)
          e.editor.updateBlock(f, {
            props: { textAlignment: l }
          });
      else {
        const f = e.editor.getTextCursorPosition().block;
        e.editor.updateBlock(f, {
          props: { textAlignment: l }
        });
      }
    },
    [e.editor]
  );
  return a ? /* @__PURE__ */ r.jsx(
    F,
    {
      onClick: () => u(e.textAlignment),
      isSelected: n === e.textAlignment,
      mainTooltip: e.textAlignment === "justify" ? "Justify Text" : "Align Text " + e.textAlignment.slice(0, 1).toUpperCase() + e.textAlignment.slice(1),
      icon: Zn[e.textAlignment]
    }
  ) : null;
}, pe = (e) => {
  const { classes: n } = V({ root: {} })(void 0, {
    name: "ColorIcon"
  }), o = e.textColor || "default", a = e.backgroundColor || "default", u = e.size || 16;
  return /* @__PURE__ */ r.jsx(
    st,
    {
      className: n.root,
      sx: (l) => ({
        backgroundColor: l.other.backgroundColors[a],
        color: l.other.textColors[o],
        fontSize: (u * 0.75).toString() + "px",
        height: u.toString() + "px",
        lineHeight: u.toString() + "px",
        textAlign: "center",
        width: u.toString() + "px"
      }),
      children: "A"
    }
  );
}, yt = (e) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx(j.Label, { children: "Text" }),
  [
    "default",
    "gray",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink"
  ].map((n) => /* @__PURE__ */ r.jsx(
    j.Item,
    {
      onClick: () => {
        e.onClick && e.onClick(), e.setTextColor(n);
      },
      component: "div",
      "data-test": "text-color-" + n,
      icon: /* @__PURE__ */ r.jsx(pe, { textColor: n, size: e.iconSize }),
      rightSection: e.textColor === n ? /* @__PURE__ */ r.jsx(Se, { size: 16, style: { paddingLeft: "8px" } }) : /* @__PURE__ */ r.jsx("div", { style: { width: "24px", padding: "0" } }),
      children: n.charAt(0).toUpperCase() + n.slice(1)
    },
    "text-color-" + n
  )),
  /* @__PURE__ */ r.jsx(j.Label, { children: "Background" }),
  [
    "default",
    "gray",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink"
  ].map((n) => /* @__PURE__ */ r.jsx(
    j.Item,
    {
      onClick: () => {
        e.onClick && e.onClick(), e.setBackgroundColor(n);
      },
      component: "div",
      "data-test": "background-color-" + n,
      icon: /* @__PURE__ */ r.jsx(pe, { backgroundColor: n, size: e.iconSize }),
      rightSection: e.backgroundColor === n ? /* @__PURE__ */ r.jsx(Se, { size: 16, style: { paddingLeft: "8px" } }) : /* @__PURE__ */ r.jsx("div", { style: { width: "24px", padding: "0" } }),
      children: n.charAt(0).toUpperCase() + n.slice(1)
    },
    "background-color-" + n
  ))
] }), Qn = (e) => {
  const [n, o] = C(
    e.editor.getActiveStyles().textColor || "default"
  ), [a, u] = C(
    e.editor.getActiveStyles().backgroundColor || "default"
  );
  Z(e.editor, () => {
    o(e.editor.getActiveStyles().textColor || "default"), u(
      e.editor.getActiveStyles().backgroundColor || "default"
    );
  }), K(e.editor, () => {
    o(e.editor.getActiveStyles().textColor || "default"), u(
      e.editor.getActiveStyles().backgroundColor || "default"
    );
  });
  const l = B(
    (f) => {
      e.editor.focus(), f === "default" ? e.editor.removeStyles({ textColor: f }) : e.editor.addStyles({ textColor: f });
    },
    [e.editor]
  ), s = B(
    (f) => {
      e.editor.focus(), f === "default" ? e.editor.removeStyles({ backgroundColor: f }) : e.editor.addStyles({ backgroundColor: f });
    },
    [e.editor]
  );
  return /* @__PURE__ */ r.jsxs(j, { children: [
    /* @__PURE__ */ r.jsx(j.Target, { children: /* @__PURE__ */ r.jsx(
      F,
      {
        mainTooltip: "Colors",
        icon: () => /* @__PURE__ */ r.jsx(
          pe,
          {
            textColor: n,
            backgroundColor: a,
            size: 20
          }
        )
      }
    ) }),
    /* @__PURE__ */ r.jsx(j.Dropdown, { children: /* @__PURE__ */ r.jsx(
      yt,
      {
        textColor: n,
        setTextColor: l,
        backgroundColor: a,
        setBackgroundColor: s
      }
    ) })
  ] });
}, er = (e) => {
  const [n, o] = C();
  Z(e.editor, () => {
    o(e.editor.canNestBlock());
  }), K(e.editor, () => {
    o(e.editor.canNestBlock());
  });
  const a = B(() => {
    e.editor.focus(), e.editor.nestBlock();
  }, [e.editor]);
  return /* @__PURE__ */ r.jsx(
    F,
    {
      onClick: a,
      isDisabled: !n,
      mainTooltip: "Nest Block",
      secondaryTooltip: _("Tab"),
      icon: On
    }
  );
}, tr = (e) => {
  const [n, o] = C();
  Z(e.editor, () => {
    o(e.editor.canUnnestBlock());
  }), K(e.editor, () => {
    o(e.editor.canUnnestBlock());
  });
  const a = B(() => {
    e.editor.focus(), e.editor.unnestBlock();
  }, [e]);
  return /* @__PURE__ */ r.jsx(
    F,
    {
      onClick: a,
      isDisabled: !n,
      mainTooltip: "Unnest Block",
      secondaryTooltip: _("Shift+Tab"),
      icon: An
    }
  );
};
function nr(e) {
  const n = e.icon;
  return /* @__PURE__ */ r.jsx(
    q,
    {
      content: /* @__PURE__ */ r.jsx(
        kt,
        {
          mainTooltip: e.mainTooltip,
          secondaryTooltip: e.secondaryTooltip
        }
      ),
      placement: "left",
      children: /* @__PURE__ */ r.jsx(vn, { children: /* @__PURE__ */ r.jsx(n, { size: 16 }) })
    }
  );
}
function rr(e) {
  function n(o) {
    o.key === "Enter" && (o.preventDefault(), e.onSubmit());
  }
  return /* @__PURE__ */ r.jsx(
    bn,
    {
      autoFocus: e.autofocus,
      size: "xs",
      value: e.value,
      onChange: (o) => e.onChange(o.currentTarget.value),
      onKeyDown: n,
      placeholder: e.placeholder
    }
  );
}
function ot(e) {
  return /* @__PURE__ */ r.jsxs(Ee, { children: [
    /* @__PURE__ */ r.jsx(
      nr,
      {
        icon: e.icon,
        mainTooltip: e.mainIconTooltip,
        secondaryTooltip: e.secondaryIconTooltip
      }
    ),
    /* @__PURE__ */ r.jsx(
      rr,
      {
        autofocus: e.autofocus,
        placeholder: e.placeholder,
        value: e.value,
        onChange: e.onChange,
        onSubmit: e.onSubmit
      }
    )
  ] });
}
const Ct = ge(({ url: e, text: n, update: o, className: a, ...u }, l) => {
  const { classes: s } = V({ root: {} })(void 0, {
    name: "EditHyperlinkMenu"
  }), [f, d] = C(e), [k, h] = C(n);
  return /* @__PURE__ */ r.jsxs(
    we,
    {
      ...u,
      className: a ? `${s.root} ${a}` : s.root,
      ref: l,
      children: [
        /* @__PURE__ */ r.jsx(
          ot,
          {
            icon: bt,
            mainIconTooltip: "Edit URL",
            autofocus: !0,
            placeholder: "Edit URL",
            value: f,
            onChange: (p) => d(p),
            onSubmit: () => o(f, k)
          }
        ),
        /* @__PURE__ */ r.jsx(
          ot,
          {
            icon: Re,
            mainIconTooltip: "Edit Title",
            placeholder: "Edit Title",
            value: k,
            onChange: (p) => h(p),
            onSubmit: () => o(e, k)
          }
        )
      ]
    }
  );
}), or = (e) => {
  const [n, o] = C(), [a, u] = C(!1), l = I(null), s = I(null), f = B(() => {
    o(
      /* @__PURE__ */ r.jsx(
        Ct,
        {
          url: e.activeHyperlinkUrl,
          text: e.activeHyperlinkText,
          update: (k, h) => {
            e.setHyperlink(k, h), u(!1);
          },
          ref: s
        },
        Math.random() + ""
      )
    );
  }, [e]), d = B(
    (k) => {
      var h, p;
      if ((h = l.current) != null && h.contains(k.target)) {
        u(!a);
        return;
      }
      (p = s.current) != null && p.contains(k.target) || u(!1);
    },
    [a]
  );
  return L(() => (document.body.addEventListener("click", d), () => document.body.removeEventListener("click", d)), [d]), /* @__PURE__ */ r.jsx(
    q,
    {
      content: n,
      onShow: f,
      interactive: !0,
      maxWidth: 500,
      visible: a,
      children: /* @__PURE__ */ r.jsx(
        F,
        {
          isSelected: e.isSelected,
          mainTooltip: e.mainTooltip,
          secondaryTooltip: e.secondaryTooltip,
          icon: e.icon,
          ref: l
        }
      )
    }
  );
}, ir = (e) => {
  const [n, o] = C(
    e.editor.getSelectedLinkUrl() || ""
  ), [a, u] = C(
    e.editor.getSelectedText() || ""
  );
  K(e.editor, () => {
    u(e.editor.getSelectedText() || ""), o(e.editor.getSelectedLinkUrl() || "");
  });
  const l = B(
    (s, f) => {
      e.editor.focus(), e.editor.createLink(s, f);
    },
    [e.editor]
  );
  return /* @__PURE__ */ r.jsx(
    or,
    {
      isSelected: !!n,
      mainTooltip: "Link",
      secondaryTooltip: _("Mod+K"),
      icon: bt,
      hyperlinkIsActive: !!n,
      activeHyperlinkUrl: n,
      activeHyperlinkText: a,
      setHyperlink: l
    }
  );
}, ar = (e) => /* @__PURE__ */ r.jsxs(dt, { children: [
  /* @__PURE__ */ r.jsx(Kn, { ...e, items: e.blockTypeDropdownItems }),
  /* @__PURE__ */ r.jsx(de, { editor: e.editor, toggledStyle: "bold" }),
  /* @__PURE__ */ r.jsx(de, { editor: e.editor, toggledStyle: "italic" }),
  /* @__PURE__ */ r.jsx(de, { editor: e.editor, toggledStyle: "underline" }),
  /* @__PURE__ */ r.jsx(de, { editor: e.editor, toggledStyle: "strike" }),
  /* @__PURE__ */ r.jsx(Te, { editor: e.editor, textAlignment: "left" }),
  /* @__PURE__ */ r.jsx(Te, { editor: e.editor, textAlignment: "center" }),
  /* @__PURE__ */ r.jsx(Te, { editor: e.editor, textAlignment: "right" }),
  /* @__PURE__ */ r.jsx(Qn, { editor: e.editor }),
  /* @__PURE__ */ r.jsx(er, { editor: e.editor }),
  /* @__PURE__ */ r.jsx(tr, { editor: e.editor }),
  /* @__PURE__ */ r.jsx(ir, { editor: e.editor })
] }), lr = (e) => {
  const [n, o] = C(!1), a = I();
  L(() => e.editor.formattingToolbar.onUpdate((s) => {
    o(s.show), a.current = s.referencePos;
  }), [e.editor]);
  const u = R(
    () => {
      if (a)
        return () => a.current;
    },
    [a.current]
    // eslint-disable-line
  ), l = R(() => {
    const s = e.formattingToolbar || ar;
    return /* @__PURE__ */ r.jsx(s, { editor: e.editor });
  }, [e.editor, e.formattingToolbar]);
  return /* @__PURE__ */ r.jsx(
    q,
    {
      appendTo: e.editor.domElement.parentElement,
      content: l,
      getReferenceClientRect: u,
      interactive: !0,
      visible: n,
      animation: "fade",
      placement: "top-start",
      sticky: !0,
      plugins: cr
    }
  );
}, cr = [Sn], sr = (e) => {
  const [n, o] = C(!1), a = I(null);
  return n ? /* @__PURE__ */ r.jsx(
    Ct,
    {
      url: e.url,
      text: e.text,
      update: (u, l) => e.editHyperlink(u, l),
      onBlur: (u) => setTimeout(() => {
        var l;
        (l = a.current) != null && l.contains(u.relatedTarget) || o(!1);
      }, 500),
      ref: a
    }
  ) : /* @__PURE__ */ r.jsxs(
    dt,
    {
      onMouseEnter: e.stopHideTimer,
      onMouseLeave: e.startHideTimer,
      children: [
        /* @__PURE__ */ r.jsx(
          F,
          {
            mainTooltip: "Edit",
            isSelected: !1,
            onClick: () => o(!0),
            children: "Edit Link"
          }
        ),
        /* @__PURE__ */ r.jsx(
          F,
          {
            mainTooltip: "Open in new tab",
            isSelected: !1,
            onClick: () => {
              window.open(e.url, "_blank");
            },
            icon: Vn
          }
        ),
        /* @__PURE__ */ r.jsx(
          F,
          {
            mainTooltip: "Remove link",
            isSelected: !1,
            onClick: e.deleteHyperlink,
            icon: Dn
          }
        )
      ]
    }
  );
}, dr = (e) => {
  const [n, o] = C(!1), [a, u] = C(), [l, s] = C(), f = I();
  L(() => e.editor.hyperlinkToolbar.on(
    "update",
    (h) => {
      o(h.show), u(h.url), s(h.text), f.current = h.referencePos;
    }
  ), [e.editor]);
  const d = R(
    () => {
      if (f.current)
        return () => f.current;
    },
    [f.current]
    // eslint-disable-line
  ), k = R(() => {
    if (!a || !l)
      return null;
    const h = e.hyperlinkToolbar || sr;
    return /* @__PURE__ */ r.jsx(
      h,
      {
        url: a,
        text: l,
        editHyperlink: e.editor.hyperlinkToolbar.editHyperlink,
        deleteHyperlink: e.editor.hyperlinkToolbar.deleteHyperlink,
        startHideTimer: e.editor.hyperlinkToolbar.startHideTimer,
        stopHideTimer: e.editor.hyperlinkToolbar.stopHideTimer
      }
    );
  }, [e.hyperlinkToolbar, e.editor, l, a]);
  return /* @__PURE__ */ r.jsx(
    q,
    {
      appendTo: e.editor.domElement.parentElement,
      content: k,
      getReferenceClientRect: d,
      interactive: !0,
      visible: n,
      animation: "fade",
      placement: "top-start"
    }
  );
}, ur = (e) => {
  const { classes: n } = V({ root: {} })(void 0, {
    name: "SideMenu"
  });
  return /* @__PURE__ */ r.jsx(Ee, { className: n.root, spacing: 0, children: e.children });
};
function fr(e) {
  return T({ tag: "svg", attr: { t: "1551322312294", style: "", viewBox: "0 0 1024 1024", version: "1.1" }, child: [{ tag: "defs", attr: {}, child: [] }, { tag: "path", attr: { d: "M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" } }, { tag: "path", attr: { d: "M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" } }] })(e);
}
const Tt = (e) => /* @__PURE__ */ r.jsx(ct, { size: 24, children: e.children }), gr = (e) => /* @__PURE__ */ r.jsx(Tt, { children: /* @__PURE__ */ r.jsx(
  fr,
  {
    size: 24,
    onClick: e.addBlock,
    "data-test": "dragHandleAdd"
  }
) });
function hr(e) {
  return T({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" } }] })(e);
}
const vr = (e) => {
  const { classes: n } = V({ root: {} })(void 0, {
    name: "DragHandleMenu"
  });
  return /* @__PURE__ */ r.jsx(j.Dropdown, { className: n.root, children: e.children });
}, jt = (e) => {
  const { children: n, ...o } = e;
  return /* @__PURE__ */ r.jsx(j.Item, { ...o, children: n });
}, br = (e) => /* @__PURE__ */ r.jsx(
  jt,
  {
    onClick: () => e.editor.removeBlocks([e.block]),
    children: e.children
  }
), xr = (e) => {
  const [n, o] = C(!1), a = I(), u = B(() => {
    a.current && clearTimeout(a.current), a.current = setTimeout(() => {
      o(!1);
    }, 250);
  }, []), l = B(() => {
    a.current && clearTimeout(a.current), o(!0);
  }, []);
  return !("textColor" in e.block.props) || !("backgroundColor" in e.block.props) ? null : /* @__PURE__ */ r.jsx(
    jt,
    {
      onMouseLeave: u,
      onMouseOver: l,
      children: /* @__PURE__ */ r.jsxs(j, { opened: n, position: "right", children: [
        /* @__PURE__ */ r.jsx(j.Target, { children: /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center" }, children: [
          /* @__PURE__ */ r.jsx("div", { style: { flex: 1 }, children: e.children }),
          /* @__PURE__ */ r.jsx(st, { style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ r.jsx($n, { size: 15 }) })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          j.Dropdown,
          {
            onMouseLeave: u,
            onMouseOver: l,
            style: { marginLeft: "5px" },
            children: /* @__PURE__ */ r.jsx(
              yt,
              {
                iconSize: 18,
                textColor: e.block.props.textColor || "default",
                backgroundColor: e.block.props.backgroundColor || "default",
                setTextColor: (s) => e.editor.updateBlock(e.block, {
                  props: { textColor: s }
                }),
                setBackgroundColor: (s) => e.editor.updateBlock(e.block, {
                  props: { backgroundColor: s }
                })
              }
            )
          }
        )
      ] })
    }
  );
}, mr = (e) => /* @__PURE__ */ r.jsxs(vr, { children: [
  /* @__PURE__ */ r.jsx(br, { ...e, children: "Delete" }),
  /* @__PURE__ */ r.jsx(xr, { ...e, children: "Colors" })
] }), kr = (e) => {
  const n = e.dragHandleMenu || mr;
  return /* @__PURE__ */ r.jsxs(
    j,
    {
      trigger: "click",
      onOpen: e.freezeMenu,
      onClose: e.unfreezeMenu,
      width: 100,
      position: "left",
      children: [
        /* @__PURE__ */ r.jsx(j.Target, { children: /* @__PURE__ */ r.jsx(
          "div",
          {
            draggable: "true",
            onDragStart: e.blockDragStart,
            onDragEnd: e.blockDragEnd,
            children: /* @__PURE__ */ r.jsx(Tt, { children: /* @__PURE__ */ r.jsx(hr, { size: 24, "data-test": "dragHandle" }) })
          }
        ) }),
        /* @__PURE__ */ r.jsx(n, { editor: e.editor, block: e.block })
      ]
    }
  );
}, yr = (e) => /* @__PURE__ */ r.jsxs(ur, { children: [
  /* @__PURE__ */ r.jsx(gr, { ...e }),
  /* @__PURE__ */ r.jsx(kr, { ...e })
] }), Cr = (e) => {
  const [n, o] = C(!1), [a, u] = C(), l = I();
  L(() => e.editor.sideMenu.onUpdate((d) => {
    o(d.show), u(d.block), l.current = d.referencePos;
  }), [e.editor]);
  const s = R(
    () => {
      if (l.current)
        return () => l.current;
    },
    [l.current]
    // eslint-disable-line
  ), f = R(() => {
    if (!a)
      return null;
    const d = e.sideMenu || yr;
    return /* @__PURE__ */ r.jsx(
      d,
      {
        block: a,
        editor: e.editor,
        blockDragStart: e.editor.sideMenu.blockDragStart,
        blockDragEnd: e.editor.sideMenu.blockDragEnd,
        addBlock: e.editor.sideMenu.addBlock,
        freezeMenu: e.editor.sideMenu.freezeMenu,
        unfreezeMenu: e.editor.sideMenu.unfreezeMenu
      }
    );
  }, [a, e.editor, e.sideMenu]);
  return /* @__PURE__ */ r.jsx(
    q,
    {
      appendTo: e.editor.domElement.parentElement,
      content: f,
      getReferenceClientRect: s,
      interactive: !0,
      visible: n,
      animation: "fade",
      offset: Tr,
      placement: "left",
      popperOptions: jr
    }
  );
}, Tr = [0, 0], jr = {
  modifiers: [
    {
      name: "flip",
      options: {
        fallbackPlacements: []
      }
    },
    {
      name: "preventOverflow",
      options: {
        mainAxis: !1,
        altAxis: !1
      }
    }
  ]
}, Sr = 5;
function pr(e) {
  const n = I(null), { classes: o } = V({ root: {} })(void 0, {
    name: "SuggestionListItem"
  });
  function a() {
    var f;
    const l = e.isSelected, s = (f = n.current) == null ? void 0 : f.matches(":hover");
    return l || s;
  }
  function u() {
    var l, s;
    a() ? (l = n.current) == null || l.setAttribute("data-hovered", "true") : (s = n.current) == null || s.removeAttribute("data-hovered");
  }
  return L(() => {
    u(), a() && n.current && n.current.getBoundingClientRect().left > Sr && n.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }), /* @__PURE__ */ r.jsx(
    j.Item,
    {
      className: o.root,
      icon: e.icon,
      onClick: e.set,
      closeMenuOnClick: !1,
      onMouseLeave: () => {
        setTimeout(() => {
          u();
        }, 1);
      },
      ref: n,
      rightSection: e.shortcut && /* @__PURE__ */ r.jsx(xn, { size: "xs", children: e.shortcut }),
      children: /* @__PURE__ */ r.jsxs(we, { children: [
        /* @__PURE__ */ r.jsx(ue, { size: 14, weight: 500, children: e.name }),
        /* @__PURE__ */ r.jsx(ue, { size: 10, children: e.hint })
      ] })
    }
  );
}
function Mr(e) {
  const { classes: n } = V({ root: {} })(void 0, {
    name: "SlashMenu"
  }), o = [];
  let a = 0;
  const u = et.groupBy(e.filteredItems, (l) => l.group);
  return et.forEach(u, (l) => {
    o.push(
      /* @__PURE__ */ r.jsx(j.Label, { children: l[0].group }, l[0].group)
    );
    for (const s of l)
      o.push(
        /* @__PURE__ */ r.jsx(
          pr,
          {
            name: s.name,
            icon: s.icon,
            hint: s.hint,
            shortcut: s.shortcut,
            isSelected: e.keyboardHoveredItemIndex === a,
            set: () => e.itemCallback(s)
          },
          s.name
        )
      ), a++;
  }), /* @__PURE__ */ r.jsx(
    j,
    {
      defaultOpened: !0,
      trigger: "hover",
      closeDelay: 1e7,
      children: /* @__PURE__ */ r.jsx(
        j.Dropdown,
        {
          onMouseDown: (l) => l.preventDefault(),
          className: n.root,
          children: o.length > 0 ? o : /* @__PURE__ */ r.jsx(j.Item, { children: "No match found" })
        }
      )
    }
  );
}
const Er = (e) => {
  const [n, o] = C(!1), [a, u] = C(), [l, s] = C(), f = I();
  L(() => e.editor.slashMenu.onUpdate((h) => {
    o(h.show), u(h.filteredItems), s(h.keyboardHoveredItemIndex), f.current = h.referencePos;
  }), [e.editor]);
  const d = R(
    () => {
      if (f.current)
        return () => f.current;
    },
    [f.current]
    // eslint-disable-line
  ), k = R(() => {
    if (!a || l === void 0)
      return null;
    const h = e.slashMenu || Mr;
    return /* @__PURE__ */ r.jsx(
      h,
      {
        filteredItems: a,
        itemCallback: (p) => e.editor.slashMenu.itemCallback(p),
        keyboardHoveredItemIndex: l
      }
    );
  }, [
    a,
    l,
    e.editor.slashMenu,
    e.slashMenu
  ]);
  return /* @__PURE__ */ r.jsx(
    q,
    {
      appendTo: e.editor.domElement.parentElement,
      content: k,
      getReferenceClientRect: d,
      interactive: !0,
      visible: n,
      animation: "fade",
      placement: "bottom-start"
    }
  );
}, m = [
  "#FFFFFF",
  "#EFEFEF",
  "#CFCFCF",
  "#AFAFAF",
  "#7F7F7F",
  "#3F3F3F",
  "#1F1F1F",
  "#161616",
  "#0F0F0F",
  "#000000"
], fe = {
  colors: {
    editor: {
      text: m[5],
      background: m[0]
    },
    menu: {
      text: m[5],
      background: m[0]
    },
    tooltip: {
      text: m[5],
      background: m[1]
    },
    hovered: {
      text: m[5],
      background: m[1]
    },
    selected: {
      text: m[0],
      background: m[5]
    },
    disabled: {
      text: m[3],
      background: m[1]
    },
    shadow: m[2],
    border: m[1],
    sideMenu: m[2],
    highlightColors: {
      gray: {
        text: "#9b9a97",
        background: "#ebeced"
      },
      brown: {
        text: "#64473a",
        background: "#e9e5e3"
      },
      red: {
        text: "#e03e3e",
        background: "#fbe4e4"
      },
      orange: {
        text: "#d9730d",
        background: "#f6e9d9"
      },
      yellow: {
        text: "#dfab01",
        background: "#fbf3db"
      },
      green: {
        text: "#4d6461",
        background: "#ddedea"
      },
      blue: {
        text: "#0b6e99",
        background: "#ddebf1"
      },
      purple: {
        text: "#6940a5",
        background: "#eae4f2"
      },
      pink: {
        text: "#ad1a72",
        background: "#f4dfeb"
      }
    }
  },
  borderRadius: 6,
  fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Open Sans", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
}, it = {
  colors: {
    editor: {
      text: m[2],
      background: m[6]
    },
    menu: {
      text: m[2],
      background: m[6]
    },
    tooltip: {
      text: m[2],
      background: m[7]
    },
    hovered: {
      text: m[2],
      background: m[7]
    },
    selected: {
      text: m[2],
      background: m[8]
    },
    disabled: {
      text: m[5],
      background: m[7]
    },
    shadow: m[8],
    border: m[7],
    sideMenu: m[4],
    highlightColors: {
      gray: {
        text: "#bebdb8",
        background: "#9b9a97"
      },
      brown: {
        text: "#8e6552",
        background: "#64473a"
      },
      red: {
        text: "#ec4040",
        background: "#be3434"
      },
      orange: {
        text: "#e3790d",
        background: "#b7600a"
      },
      yellow: {
        text: "#dfab01",
        background: "#b58b00"
      },
      green: {
        text: "#6b8b87",
        background: "#4d6461"
      },
      blue: {
        text: "#0e87bc",
        background: "#0b6e99"
      },
      purple: {
        text: "#8552d7",
        background: "#6940a5"
      },
      pink: {
        text: "#da208f",
        background: "#ad1a72"
      }
    }
  },
  borderRadius: fe.borderRadius,
  fontFamily: fe.fontFamily
};
function wr(e) {
  var s;
  const { classes: n } = V({ root: {} })(void 0, {
    name: "Editor"
  }), { editor: o, children: a, className: u, ...l } = e;
  return /* @__PURE__ */ r.jsx(
    kn,
    {
      editor: (s = e.editor) == null ? void 0 : s._tiptapEditor,
      className: Me(n.root, e.className || ""),
      ...l,
      children: e.children || /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(lr, { editor: e.editor }),
        /* @__PURE__ */ r.jsx(dr, { editor: e.editor }),
        /* @__PURE__ */ r.jsx(Er, { editor: e.editor }),
        /* @__PURE__ */ r.jsx(Cr, { editor: e.editor })
      ] })
    }
  );
}
function Vr(e) {
  const {
    theme: n = { light: fe, dark: it },
    ...o
  } = e, a = jn(), u = R(() => n === "light" ? se(fe) : n === "dark" ? se(it) : "light" in n && "dark" in n ? se(
    n[a === "dark" ? "dark" : "light"]
  ) : se(n), [a, n]);
  return /* @__PURE__ */ r.jsx(mn, { theme: u, children: /* @__PURE__ */ r.jsx(wr, { ...o }) });
}
const Rr = {
  Heading: {
    group: "Headings",
    icon: /* @__PURE__ */ r.jsx(gt, { size: 18 }),
    hint: "Used for a top-level heading",
    shortcut: _("Mod-Alt-1")
  },
  "Heading 2": {
    group: "Headings",
    icon: /* @__PURE__ */ r.jsx(ht, { size: 18 }),
    hint: "Used for key sections",
    shortcut: _("Mod-Alt-2")
  },
  "Heading 3": {
    group: "Headings",
    icon: /* @__PURE__ */ r.jsx(vt, { size: 18 }),
    hint: "Used for subsections and group headings",
    shortcut: _("Mod-Alt-3")
  },
  "Numbered List": {
    group: "Basic blocks",
    icon: /* @__PURE__ */ r.jsx(xt, { size: 18 }),
    hint: "Used to display a numbered list",
    shortcut: _("Mod-Alt-7")
  },
  "Bullet List": {
    group: "Basic blocks",
    icon: /* @__PURE__ */ r.jsx(mt, { size: 18 }),
    hint: "Used to display an unordered list",
    shortcut: _("Mod-Alt-9")
  },
  Paragraph: {
    group: "Basic blocks",
    icon: /* @__PURE__ */ r.jsx(Re, { size: 18 }),
    hint: "Used for the body of your document",
    shortcut: _("Mod-Alt-0")
  }
};
function zr(e = at) {
  return cn(e).map((o) => ({
    ...o,
    ...Rr[o.name]
  }));
}
const Hr = (e) => new sn({
  slashMenuItems: zr(
    e.blockSchema || at
  ),
  ...e
}), Nr = (e = {}, n = []) => {
  const o = I();
  return R(() => (o.current && o.current._tiptapEditor.destroy(), o.current = Hr(e), o.current), n);
};
function _r() {
  const [, e] = C(0);
  return () => e((n) => n + 1);
}
const Ur = (e) => {
  const n = _r();
  L(() => {
    const o = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          n();
        });
      });
    };
    return e.on("transaction", o), () => {
      e.off("transaction", o);
    };
  }, [e]);
}, St = an({}), $r = (e) => {
  const n = ln(St).inlineContent || {}, o = Me(
    e.className || "",
    Y.inlineContent,
    n.class
  );
  return /* @__PURE__ */ r.jsx(
    yn,
    {
      ...Object.fromEntries(
        Object.entries(n).filter(
          ([a]) => a !== "class"
        )
      ),
      ...e,
      className: o
    }
  );
};
function Wr(e) {
  return {
    node: dn({
      name: e.type,
      content: e.containsInlineContent ? "inline*" : "",
      selectable: e.containsInlineContent,
      addAttributes() {
        return un(e);
      },
      parseHTML() {
        return fn(e);
      },
      renderHTML({ HTMLAttributes: o }) {
        return gn(e, o);
      },
      addNodeView() {
        return Cn((a) => {
          var $;
          const u = e.render, l = (($ = this.options.domAttributes) == null ? void 0 : $.blockContent) || {}, s = {};
          for (const [N, re] of Object.entries(a.node.attrs))
            N in e.propSchema && re !== e.propSchema[N].default && (s[hn(N)] = re);
          const f = this.options.editor, d = typeof a.getPos == "function" ? a.getPos() : void 0, p = f._tiptapEditor.state.doc.resolve(d).node().attrs.id, H = f.getBlock(p);
          if (H.type !== e.type)
            throw new Error("Block type does not match");
          return /* @__PURE__ */ r.jsx(
            Tn,
            {
              ...Object.fromEntries(
                Object.entries(l).filter(
                  ([N]) => N !== "class"
                )
              ),
              className: Me(
                Y.blockContent,
                l.class
              ),
              "data-content-type": e.type,
              ...s,
              children: /* @__PURE__ */ r.jsx(
                St.Provider,
                {
                  value: this.options.domAttributes || {},
                  children: /* @__PURE__ */ r.jsx(u, { block: H, editor: f })
                }
              )
            }
          );
        }, {
          className: Y.reactNodeViewRenderer
        });
      }
    }),
    propSchema: e.propSchema
  };
}
export {
  gr as AddBlockButton,
  xr as BlockColorsButton,
  Vr as BlockNoteView,
  Kn as BlockTypeDropdown,
  Qn as ColorStyleButton,
  ir as CreateLinkButton,
  mr as DefaultDragHandleMenu,
  ar as DefaultFormattingToolbar,
  yr as DefaultSideMenu,
  Mr as DefaultSlashMenu,
  kr as DragHandle,
  vr as DragHandleMenu,
  jt as DragHandleMenuItem,
  lr as FormattingToolbarPositioner,
  dr as HyperlinkToolbarPositioner,
  $r as InlineContent,
  er as NestBlockButton,
  br as RemoveBlockButton,
  ur as SideMenu,
  Tt as SideMenuButton,
  Cr as SideMenuPositioner,
  pr as SlashMenuItem,
  Er as SlashMenuPositioner,
  Te as TextAlignButton,
  de as ToggledStyleButton,
  dt as Toolbar,
  F as ToolbarButton,
  Yn as ToolbarDropdown,
  tr as UnnestBlockButton,
  se as blockNoteToMantineTheme,
  Wr as createReactBlockSpec,
  it as darkDefaultTheme,
  qn as defaultBlockTypeDropdownItems,
  m as defaultColorScheme,
  zr as getDefaultReactSlashMenuItems,
  fe as lightDefaultTheme,
  Nr as useBlockNote,
  Z as useEditorContentChange,
  Ur as useEditorForceUpdate,
  K as useEditorSelectionChange
};
//# sourceMappingURL=blocknote-react.js.map
