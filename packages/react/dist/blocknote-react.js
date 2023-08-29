import ke, { useState as te, useCallback as re, useRef as vr, useEffect as Pt, forwardRef as Xu, useMemo as u0 } from "react";
import { EditorContent as o0, NodeViewContent as a0, ReactNodeViewRenderer as l0, NodeViewWrapper as f0 } from "@tiptap/react";
import { blockStyles as qu, createTipTapBlock as s0, propsToAttributes as c0, parse as d0, render as h0, camelToDataKebab as g0, BaseSlashMenuItem as v0, defaultSlashMenuItems as p0, BlockNoteEditor as _0 } from "@blocknote/core";
import x0 from "react-dom";
import { MantineProvider as m0, createStyles as zt, Menu as ln, Box as Hl, Group as Qu, ActionIcon as Vu, Stack as no, Text as yi, Button as Fl, Container as w0, TextInput as y0, Badge as b0 } from "@mantine/core";
import Ci from "@tippyjs/react";
var dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Yu = { exports: {} }, hr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Al;
function C0() {
  if (Al)
    return hr;
  Al = 1;
  var u = ke, g = Symbol.for("react.element"), a = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, T = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(q, z, hn) {
    var K, nn = {}, Cn = null, Tn = null;
    hn !== void 0 && (Cn = "" + hn), z.key !== void 0 && (Cn = "" + z.key), z.ref !== void 0 && (Tn = z.ref);
    for (K in z)
      b.call(z, K) && !I.hasOwnProperty(K) && (nn[K] = z[K]);
    if (q && q.defaultProps)
      for (K in z = q.defaultProps, z)
        nn[K] === void 0 && (nn[K] = z[K]);
    return { $$typeof: g, type: q, key: Cn, ref: Tn, props: nn, _owner: T.current };
  }
  return hr.Fragment = a, hr.jsx = C, hr.jsxs = C, hr;
}
var gr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Il;
function T0() {
  return Il || (Il = 1, process.env.NODE_ENV !== "production" && function() {
    var u = ke, g = Symbol.for("react.element"), a = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), q = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), hn = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), nn = Symbol.for("react.memo"), Cn = Symbol.for("react.lazy"), Tn = Symbol.for("react.offscreen"), ye = Symbol.iterator, ht = "@@iterator";
    function An(s) {
      if (s === null || typeof s != "object")
        return null;
      var y = ye && s[ye] || s[ht];
      return typeof y == "function" ? y : null;
    }
    var In = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function pn(s) {
      {
        for (var y = arguments.length, R = new Array(y > 1 ? y - 1 : 0), B = 1; B < y; B++)
          R[B - 1] = arguments[B];
        Gn("error", s, R);
      }
    }
    function Gn(s, y, R) {
      {
        var B = In.ReactDebugCurrentFrame, G = B.getStackAddendum();
        G !== "" && (y += "%s", R = R.concat([G]));
        var Z = R.map(function(N) {
          return String(N);
        });
        Z.unshift("Warning: " + y), Function.prototype.apply.call(console[s], console, Z);
      }
    }
    var Fe = !1, qn = !1, Pe = !1, ie = !1, Xe = !1, gt;
    gt = Symbol.for("react.module.reference");
    function Ri(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === b || s === I || Xe || s === T || s === hn || s === K || ie || s === Tn || Fe || qn || Pe || typeof s == "object" && s !== null && (s.$$typeof === Cn || s.$$typeof === nn || s.$$typeof === C || s.$$typeof === q || s.$$typeof === z || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === gt || s.getModuleId !== void 0));
    }
    function Ei(s, y, R) {
      var B = s.displayName;
      if (B)
        return B;
      var G = y.displayName || y.name || "";
      return G !== "" ? R + "(" + G + ")" : R;
    }
    function pr(s) {
      return s.displayName || "Context";
    }
    function ue(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && pn("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case b:
          return "Fragment";
        case a:
          return "Portal";
        case I:
          return "Profiler";
        case T:
          return "StrictMode";
        case hn:
          return "Suspense";
        case K:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case q:
            var y = s;
            return pr(y) + ".Consumer";
          case C:
            var R = s;
            return pr(R._context) + ".Provider";
          case z:
            return Ei(s, s.render, "ForwardRef");
          case nn:
            var B = s.displayName || null;
            return B !== null ? B : ue(s.type) || "Memo";
          case Cn: {
            var G = s, Z = G._payload, N = G._init;
            try {
              return ue(N(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var he = Object.assign, Qe = 0, _r, ge, oe, xr, nt, Fn, mr;
    function wr() {
    }
    wr.__reactDisabledLog = !0;
    function Si() {
      {
        if (Qe === 0) {
          _r = console.log, ge = console.info, oe = console.warn, xr = console.error, nt = console.group, Fn = console.groupCollapsed, mr = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: wr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        Qe++;
      }
    }
    function ze() {
      {
        if (Qe--, Qe === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: he({}, s, {
              value: _r
            }),
            info: he({}, s, {
              value: ge
            }),
            warn: he({}, s, {
              value: oe
            }),
            error: he({}, s, {
              value: xr
            }),
            group: he({}, s, {
              value: nt
            }),
            groupCollapsed: he({}, s, {
              value: Fn
            }),
            groupEnd: he({}, s, {
              value: mr
            })
          });
        }
        Qe < 0 && pn("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var De = In.ReactCurrentDispatcher, Dt;
    function ve(s, y, R) {
      {
        if (Dt === void 0)
          try {
            throw Error();
          } catch (G) {
            var B = G.stack.trim().match(/\n( *(at )?)/);
            Dt = B && B[1] || "";
          }
        return `
` + Dt + s;
      }
    }
    var be = !1, vt;
    {
      var pt = typeof WeakMap == "function" ? WeakMap : Map;
      vt = new pt();
    }
    function et(s, y) {
      if (!s || be)
        return "";
      {
        var R = vt.get(s);
        if (R !== void 0)
          return R;
      }
      var B;
      be = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = De.current, De.current = null, Si();
      try {
        if (y) {
          var N = function() {
            throw Error();
          };
          if (Object.defineProperty(N.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(N, []);
            } catch (Ln) {
              B = Ln;
            }
            Reflect.construct(s, [], N);
          } else {
            try {
              N.call();
            } catch (Ln) {
              B = Ln;
            }
            s.call(N.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ln) {
            B = Ln;
          }
          s();
        }
      } catch (Ln) {
        if (Ln && B && typeof Ln.stack == "string") {
          for (var U = Ln.stack.split(`
`), xn = B.stack.split(`
`), on = U.length - 1, fn = xn.length - 1; on >= 1 && fn >= 0 && U[on] !== xn[fn]; )
            fn--;
          for (; on >= 1 && fn >= 0; on--, fn--)
            if (U[on] !== xn[fn]) {
              if (on !== 1 || fn !== 1)
                do
                  if (on--, fn--, fn < 0 || U[on] !== xn[fn]) {
                    var Mn = `
` + U[on].replace(" at new ", " at ");
                    return s.displayName && Mn.includes("<anonymous>") && (Mn = Mn.replace("<anonymous>", s.displayName)), typeof s == "function" && vt.set(s, Mn), Mn;
                  }
                while (on >= 1 && fn >= 0);
              break;
            }
        }
      } finally {
        be = !1, De.current = Z, ze(), Error.prepareStackTrace = G;
      }
      var le = s ? s.displayName || s.name : "", Mr = le ? ve(le) : "";
      return typeof s == "function" && vt.set(s, Mr), Mr;
    }
    function yr(s, y, R) {
      return et(s, !1);
    }
    function Pn(s) {
      var y = s.prototype;
      return !!(y && y.isReactComponent);
    }
    function pe(s, y, R) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return et(s, Pn(s));
      if (typeof s == "string")
        return ve(s);
      switch (s) {
        case hn:
          return ve("Suspense");
        case K:
          return ve("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case z:
            return yr(s.render);
          case nn:
            return pe(s.type, y, R);
          case Cn: {
            var B = s, G = B._payload, Z = B._init;
            try {
              return pe(Z(G), y, R);
            } catch {
            }
          }
        }
      return "";
    }
    var _t = Object.prototype.hasOwnProperty, Vn = {}, Ut = In.ReactDebugCurrentFrame;
    function xt(s) {
      if (s) {
        var y = s._owner, R = pe(s.type, s._source, y ? y.type : null);
        Ut.setExtraStackFrame(R);
      } else
        Ut.setExtraStackFrame(null);
    }
    function tt(s, y, R, B, G) {
      {
        var Z = Function.call.bind(_t);
        for (var N in s)
          if (Z(s, N)) {
            var U = void 0;
            try {
              if (typeof s[N] != "function") {
                var xn = Error((B || "React class") + ": " + R + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xn.name = "Invariant Violation", xn;
              }
              U = s[N](y, N, B, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              U = on;
            }
            U && !(U instanceof Error) && (xt(G), pn("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", R, N, typeof U), xt(null)), U instanceof Error && !(U.message in Vn) && (Vn[U.message] = !0, xt(G), pn("Failed %s type: %s", R, U.message), xt(null));
          }
      }
    }
    var zn = Array.isArray;
    function Ce(s) {
      return zn(s);
    }
    function mt(s) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, R = y && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return R;
      }
    }
    function Ai(s) {
      try {
        return Ue(s), !1;
      } catch {
        return !0;
      }
    }
    function Ue(s) {
      return "" + s;
    }
    function br(s) {
      if (Ai(s))
        return pn("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mt(s)), Ue(s);
    }
    var ae = In.ReactCurrentOwner, We = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, wt, yt, rt;
    rt = {};
    function Wt(s) {
      if (_t.call(s, "ref")) {
        var y = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Nt(s) {
      if (_t.call(s, "key")) {
        var y = Object.getOwnPropertyDescriptor(s, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function jt(s, y) {
      if (typeof s.ref == "string" && ae.current && y && ae.current.stateNode !== y) {
        var R = ue(ae.current.type);
        rt[R] || (pn('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ue(ae.current.type), s.ref), rt[R] = !0);
      }
    }
    function $t(s, y) {
      {
        var R = function() {
          wt || (wt = !0, pn("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        R.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function Gt(s, y) {
      {
        var R = function() {
          yt || (yt = !0, pn("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        R.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var qt = function(s, y, R, B, G, Z, N) {
      var U = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: s,
        key: y,
        ref: R,
        props: N,
        // Record the component responsible for creating this element.
        _owner: Z
      };
      return U._store = {}, Object.defineProperty(U._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(U, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.defineProperty(U, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    };
    function Ii(s, y, R, B, G) {
      {
        var Z, N = {}, U = null, xn = null;
        R !== void 0 && (br(R), U = "" + R), Nt(y) && (br(y.key), U = "" + y.key), Wt(y) && (xn = y.ref, jt(y, G));
        for (Z in y)
          _t.call(y, Z) && !We.hasOwnProperty(Z) && (N[Z] = y[Z]);
        if (s && s.defaultProps) {
          var on = s.defaultProps;
          for (Z in on)
            N[Z] === void 0 && (N[Z] = on[Z]);
        }
        if (U || xn) {
          var fn = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          U && $t(N, fn), xn && Gt(N, fn);
        }
        return qt(s, U, xn, G, B, ae.current, N);
      }
    }
    var Vt = In.ReactCurrentOwner, Cr = In.ReactDebugCurrentFrame;
    function Te(s) {
      if (s) {
        var y = s._owner, R = pe(s.type, s._source, y ? y.type : null);
        Cr.setExtraStackFrame(R);
      } else
        Cr.setExtraStackFrame(null);
    }
    var bt;
    bt = !1;
    function Yt(s) {
      return typeof s == "object" && s !== null && s.$$typeof === g;
    }
    function Tr() {
      {
        if (Vt.current) {
          var s = ue(Vt.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function Mi(s) {
      {
        if (s !== void 0) {
          var y = s.fileName.replace(/^.*[\\\/]/, ""), R = s.lineNumber;
          return `

Check your code at ` + y + ":" + R + ".";
        }
        return "";
      }
    }
    var Rr = {};
    function Er(s) {
      {
        var y = Tr();
        if (!y) {
          var R = typeof s == "string" ? s : s.displayName || s.name;
          R && (y = `

Check the top-level render call using <` + R + ">.");
        }
        return y;
      }
    }
    function Sr(s, y) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var R = Er(y);
        if (Rr[R])
          return;
        Rr[R] = !0;
        var B = "";
        s && s._owner && s._owner !== Vt.current && (B = " It was passed a child from " + ue(s._owner.type) + "."), Te(s), pn('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, B), Te(null);
      }
    }
    function Ar(s, y) {
      {
        if (typeof s != "object")
          return;
        if (Ce(s))
          for (var R = 0; R < s.length; R++) {
            var B = s[R];
            Yt(B) && Sr(B, y);
          }
        else if (Yt(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var G = An(s);
          if (typeof G == "function" && G !== s.entries)
            for (var Z = G.call(s), N; !(N = Z.next()).done; )
              Yt(N.value) && Sr(N.value, y);
        }
      }
    }
    function Li(s) {
      {
        var y = s.type;
        if (y == null || typeof y == "string")
          return;
        var R;
        if (typeof y == "function")
          R = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === z || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === nn))
          R = y.propTypes;
        else
          return;
        if (R) {
          var B = ue(y);
          tt(R, s.props, "prop", B, s);
        } else if (y.PropTypes !== void 0 && !bt) {
          bt = !0;
          var G = ue(y);
          pn("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && pn("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kt(s) {
      {
        for (var y = Object.keys(s.props), R = 0; R < y.length; R++) {
          var B = y[R];
          if (B !== "children" && B !== "key") {
            Te(s), pn("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), Te(null);
            break;
          }
        }
        s.ref !== null && (Te(s), pn("Invalid attribute `ref` supplied to `React.Fragment`."), Te(null));
      }
    }
    function Ir(s, y, R, B, G, Z) {
      {
        var N = Ri(s);
        if (!N) {
          var U = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xn = Mi(G);
          xn ? U += xn : U += Tr();
          var on;
          s === null ? on = "null" : Ce(s) ? on = "array" : s !== void 0 && s.$$typeof === g ? (on = "<" + (ue(s.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : on = typeof s, pn("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, U);
        }
        var fn = Ii(s, y, R, G, Z);
        if (fn == null)
          return fn;
        if (N) {
          var Mn = y.children;
          if (Mn !== void 0)
            if (B)
              if (Ce(Mn)) {
                for (var le = 0; le < Mn.length; le++)
                  Ar(Mn[le], s);
                Object.freeze && Object.freeze(Mn);
              } else
                pn("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ar(Mn, s);
        }
        return s === b ? Kt(fn) : Li(fn), fn;
      }
    }
    function Zt(s, y, R) {
      return Ir(s, y, R, !0);
    }
    function Oi(s, y, R) {
      return Ir(s, y, R, !1);
    }
    var Bi = Oi, ki = Zt;
    gr.Fragment = b, gr.jsx = Bi, gr.jsxs = ki;
  }()), gr;
}
process.env.NODE_ENV === "production" ? Yu.exports = C0() : Yu.exports = T0();
var p = Yu.exports;
function Mv(u) {
  var g;
  return (
    // TODO: Should we wrap editor in MantineProvider? Otherwise we have to duplicate color hex values.
    // <MantineProvider theme={BlockNoteTheme}>
    /* @__PURE__ */ p.jsx(o0, { editor: ((g = u.editor) == null ? void 0 : g._tiptapEditor) || null })
  );
}
const Lv = (u) => /* @__PURE__ */ p.jsx(
  a0,
  {
    ...u,
    className: `${u.className ? u.className + " " : ""}${qu.inlineContent}`
  }
);
function Ov(u) {
  return {
    node: s0({
      name: u.type,
      content: u.containsInlineContent ? "inline*" : "",
      selectable: u.containsInlineContent,
      addOptions() {
        return {
          editor: void 0
        };
      },
      addAttributes() {
        return c0(u);
      },
      parseHTML() {
        return d0(u);
      },
      renderHTML({ HTMLAttributes: a }) {
        return h0(u, a);
      },
      addNodeView() {
        return l0((b) => {
          const T = u.render, I = {};
          for (const [Cn, Tn] of Object.entries(b.node.attrs))
            Cn in u.propSchema && (I[g0(Cn)] = Tn);
          const C = this.options.editor, q = typeof b.getPos == "function" ? b.getPos() : void 0, K = C._tiptapEditor.state.doc.resolve(q).node().attrs.id, nn = C.getBlock(K);
          if (nn.type !== u.type)
            throw new Error("Block type does not match");
          return /* @__PURE__ */ p.jsx(
            f0,
            {
              className: qu.blockContent,
              "data-content-type": u.type,
              ...I,
              children: /* @__PURE__ */ p.jsx(T, { block: nn, editor: C })
            }
          );
        }, {
          className: qu.reactNodeViewRenderer
        });
      }
    }),
    propSchema: u.propSchema
  };
}
var Ku, _i = x0;
if (process.env.NODE_ENV === "production")
  Ku = _i.createRoot, _i.hydrateRoot;
else {
  var Ml = _i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ku = function(u, g) {
    Ml.usingClientEntryPoint = !0;
    try {
      return _i.createRoot(u, g);
    } finally {
      Ml.usingClientEntryPoint = !1;
    }
  };
}
function Ll(u) {
  const g = u.editorElementComponent, [a, b] = te(!1), T = re(() => {
    b(!1), document.body.appendChild(u.rootElement);
  }, [u.rootElement]), I = re(() => {
    u.rootElement.remove(), b(!0);
  }, [u.rootElement]);
  return /* @__PURE__ */ p.jsx(m0, { theme: u.theme, children: /* @__PURE__ */ p.jsx(
    Ci,
    {
      appendTo: u.rootElement,
      content: a ? void 0 : /* @__PURE__ */ p.jsx(
        g,
        {
          ...u.staticParams,
          ...u.dynamicParams
        }
      ),
      getReferenceClientRect: u.staticParams.getReferenceRect,
      interactive: !0,
      onShow: T,
      onHidden: I,
      visible: u.isOpen,
      ...u.tippyProps
    }
  ) });
}
const Ti = (u, g, a, b) => {
  const T = document.createElement("div"), I = Ku(T);
  let C;
  return {
    element: T,
    render: (q, z) => {
      C = q, I.render(
        /* @__PURE__ */ p.jsx(
          Ll,
          {
            rootElement: T,
            isOpen: !0,
            staticParams: u,
            dynamicParams: q,
            editorElementComponent: g,
            theme: a,
            tippyProps: b
          }
        )
      );
    },
    hide: () => {
      I.render(
        /* @__PURE__ */ p.jsx(
          Ll,
          {
            rootElement: T,
            isOpen: !1,
            staticParams: u,
            dynamicParams: C,
            editorElementComponent: g,
            theme: a,
            tippyProps: b
          }
        )
      ), C = void 0;
    }
  };
};
var Pl = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ol = ke.createContext && ke.createContext(Pl), Je = globalThis && globalThis.__assign || function() {
  return Je = Object.assign || function(u) {
    for (var g, a = 1, b = arguments.length; a < b; a++) {
      g = arguments[a];
      for (var T in g)
        Object.prototype.hasOwnProperty.call(g, T) && (u[T] = g[T]);
    }
    return u;
  }, Je.apply(this, arguments);
}, R0 = globalThis && globalThis.__rest || function(u, g) {
  var a = {};
  for (var b in u)
    Object.prototype.hasOwnProperty.call(u, b) && g.indexOf(b) < 0 && (a[b] = u[b]);
  if (u != null && typeof Object.getOwnPropertySymbols == "function")
    for (var T = 0, b = Object.getOwnPropertySymbols(u); T < b.length; T++)
      g.indexOf(b[T]) < 0 && Object.prototype.propertyIsEnumerable.call(u, b[T]) && (a[b[T]] = u[b[T]]);
  return a;
};
function zl(u) {
  return u && u.map(function(g, a) {
    return ke.createElement(g.tag, Je({
      key: a
    }, g.attr), zl(g.child));
  });
}
function rn(u) {
  return function(g) {
    return ke.createElement(E0, Je({
      attr: Je({}, u.attr)
    }, g), zl(u.child));
  };
}
function E0(u) {
  var g = function(a) {
    var b = u.attr, T = u.size, I = u.title, C = R0(u, ["attr", "size", "title"]), q = T || a.size || "1em", z;
    return a.className && (z = a.className), u.className && (z = (z ? z + " " : "") + u.className), ke.createElement("svg", Je({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, b, C, {
      className: z,
      style: Je(Je({
        color: u.color || a.color
      }, a.style), u.style),
      height: q,
      width: q,
      xmlns: "http://www.w3.org/2000/svg"
    }), I && ke.createElement("title", null, I), u.children);
  };
  return Ol !== void 0 ? ke.createElement(Ol.Consumer, null, function(a) {
    return g(a);
  }) : g(Pl);
}
function S0(u) {
  return rn({ tag: "svg", attr: { t: "1551322312294", style: "", viewBox: "0 0 1024 1024", version: "1.1" }, child: [{ tag: "defs", attr: {}, child: [] }, { tag: "path", attr: { d: "M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" } }, { tag: "path", attr: { d: "M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" } }] })(u);
}
function A0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" } }] })(u);
}
const I0 = (u) => {
  const { classes: g } = zt({ root: {} })(void 0, {
    name: "DragHandleMenu"
  });
  return /* @__PURE__ */ p.jsx(ln.Dropdown, { className: g.root, children: u.children });
}, Dl = (u) => {
  const { closeMenu: g, onClick: a, ...b } = u;
  return /* @__PURE__ */ p.jsx(
    ln.Item,
    {
      ...b,
      onClick: (T) => {
        g(), a == null || a(T);
      },
      children: u.children
    }
  );
}, M0 = (u) => /* @__PURE__ */ p.jsx(
  Dl,
  {
    closeMenu: u.closeMenu,
    onClick: () => u.editor.removeBlocks([u.block]),
    children: u.children
  }
);
function L0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" } }] })(u);
}
function O0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" } }] })(u);
}
const Zu = (u) => {
  const g = u.textColor || "default", a = u.backgroundColor || "default", b = u.size || 16;
  return /* @__PURE__ */ p.jsx(
    Hl,
    {
      sx: (T) => ({
        backgroundColor: T.colors.backgroundColors[T.other.colors.indexOf(a)],
        border: "solid #D3D3D3 1px",
        borderRadius: (b * 0.25).toString() + "px",
        color: T.colors.textColors[T.other.colors.indexOf(g)],
        fontSize: (b * 0.75).toString() + "px",
        height: b.toString() + "px",
        lineHeight: b.toString() + "px",
        textAlign: "center",
        width: b.toString() + "px"
      }),
      children: "A"
    }
  );
};
function Ju(u) {
  return rn({ tag: "svg", attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z" } }] })(u);
}
const Ul = (u) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
  /* @__PURE__ */ p.jsx(ln.Label, { children: "Text" }),
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
  ].map((g) => /* @__PURE__ */ p.jsx(
    ln.Item,
    {
      onClick: () => {
        u.onClick && u.onClick(), u.setTextColor(g);
      },
      component: "div",
      "data-test": "text-color-" + g,
      icon: /* @__PURE__ */ p.jsx(Zu, { textColor: g, size: u.iconSize }),
      rightSection: u.textColor === g ? /* @__PURE__ */ p.jsx(Ju, { size: 16, style: { paddingLeft: "8px" } }) : /* @__PURE__ */ p.jsx("div", { style: { width: "24px", padding: "0" } }),
      children: g.charAt(0).toUpperCase() + g.slice(1)
    },
    "text-color-" + g
  )),
  /* @__PURE__ */ p.jsx(ln.Label, { children: "Background" }),
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
  ].map((g) => /* @__PURE__ */ p.jsx(
    ln.Item,
    {
      onClick: () => {
        u.onClick && u.onClick(), u.setBackgroundColor(g);
      },
      component: "div",
      "data-test": "background-color-" + g,
      icon: /* @__PURE__ */ p.jsx(Zu, { backgroundColor: g, size: u.iconSize }),
      rightSection: u.backgroundColor === g ? /* @__PURE__ */ p.jsx(Ju, { size: 16, style: { paddingLeft: "8px" } }) : /* @__PURE__ */ p.jsx("div", { style: { width: "24px", padding: "0" } }),
      children: g.charAt(0).toUpperCase() + g.slice(1)
    },
    "background-color-" + g
  ))
] }), B0 = (u) => {
  const [g, a] = te(!1), b = vr(), T = re(() => {
    b.current && clearTimeout(b.current), b.current = setTimeout(() => {
      a(!1);
    }, 250);
  }, []), I = re(() => {
    b.current && clearTimeout(b.current), a(!0);
  }, []);
  return !("textColor" in u.block.props) || !("backgroundColor" in u.block.props) ? null : /* @__PURE__ */ p.jsx(
    Dl,
    {
      closeMenu: u.closeMenu,
      onMouseLeave: T,
      onMouseOver: I,
      children: /* @__PURE__ */ p.jsxs(ln, { opened: g, position: "right", children: [
        /* @__PURE__ */ p.jsx(ln.Target, { children: /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center" }, children: [
          /* @__PURE__ */ p.jsx("div", { style: { flex: 1 }, children: u.children }),
          /* @__PURE__ */ p.jsx(Hl, { style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ p.jsx(O0, { size: 15 }) })
        ] }) }),
        /* @__PURE__ */ p.jsx(
          ln.Dropdown,
          {
            onMouseLeave: T,
            onMouseOver: I,
            style: { marginLeft: "5px" },
            children: /* @__PURE__ */ p.jsx(
              Ul,
              {
                iconSize: 18,
                textColor: u.block.props.textColor || "default",
                backgroundColor: u.block.props.backgroundColor || "default",
                setTextColor: (C) => u.editor.updateBlock(u.block, {
                  props: { textColor: C }
                }),
                setBackgroundColor: (C) => u.editor.updateBlock(u.block, {
                  props: { backgroundColor: C }
                })
              }
            )
          }
        )
      ] })
    }
  );
}, Wl = (u) => /* @__PURE__ */ p.jsxs(I0, { children: [
  /* @__PURE__ */ p.jsx(M0, { ...u, children: "Delete" }),
  /* @__PURE__ */ p.jsx(B0, { ...u, children: "Colors" })
] }), k0 = (u) => {
  const [g, a] = te(!1), b = vr(null);
  Pt(() => {
    const C = b.current;
    if (C instanceof HTMLDivElement)
      return C.addEventListener("dragstart", u.blockDragStart), C.addEventListener("dragend", u.blockDragEnd), () => {
        C.removeEventListener("dragstart", u.blockDragStart), C.removeEventListener("dragend", u.blockDragEnd);
      };
  }, [u.blockDragEnd, u.blockDragStart]);
  const T = () => {
    a(!1), u.unfreezeMenu();
  }, I = u.dragHandleMenu || Wl;
  return /* @__PURE__ */ p.jsxs(Qu, { spacing: 0, children: [
    /* @__PURE__ */ p.jsx(Vu, { size: 24, "data-test": "dragHandleAdd", children: /* @__PURE__ */ p.jsx(
      S0,
      {
        size: 24,
        onClick: () => {
          u.addBlock();
        }
      }
    ) }),
    /* @__PURE__ */ p.jsxs(ln, { opened: g, width: 100, position: "left", children: [
      /* @__PURE__ */ p.jsx(ln.Target, { children: /* @__PURE__ */ p.jsx("div", { draggable: "true", ref: b, children: /* @__PURE__ */ p.jsx(
        Vu,
        {
          onClick: () => {
            a(!0), u.freezeMenu();
          },
          size: 24,
          "data-test": "dragHandle",
          children: /* @__PURE__ */ p.jsx(A0, { size: 24 })
        }
      ) }) }),
      /* @__PURE__ */ p.jsx(
        I,
        {
          editor: u.editor,
          block: u.block,
          closeMenu: T
        }
      )
    ] })
  ] });
}, H0 = (u, g = Wl) => {
  const a = g, b = (T) => /* @__PURE__ */ p.jsx(k0, { ...T, dragHandleMenu: a });
  return (T) => Ti(T, b, u, {
    animation: "fade",
    offset: [0, 0],
    placement: "left",
    popperOptions: {
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
    }
  });
}, Nl = (u) => {
  const { classes: g } = zt({ root: {} })(void 0, {
    name: "Toolbar"
  });
  return /* @__PURE__ */ p.jsx(Qu, { className: g.root, children: u.children });
}, jl = (u) => {
  const { classes: g } = zt({ root: {} })(void 0, {
    name: "Tooltip"
  });
  return /* @__PURE__ */ p.jsxs(no, { spacing: 0, className: g.root, children: [
    /* @__PURE__ */ p.jsx(yi, { size: "sm", children: u.mainTooltip }),
    u.secondaryTooltip && /* @__PURE__ */ p.jsx(yi, { size: "xs", children: u.secondaryTooltip })
  ] });
}, He = Xu(
  (u, g) => {
    const a = u.icon;
    return /* @__PURE__ */ p.jsx(
      Ci,
      {
        content: /* @__PURE__ */ p.jsx(
          jl,
          {
            mainTooltip: u.mainTooltip,
            secondaryTooltip: u.secondaryTooltip
          }
        ),
        trigger: "mouseenter",
        children: u.children ? /* @__PURE__ */ p.jsxs(
          Fl,
          {
            onClick: u.onClick,
            "data-selected": u.isSelected ? "true" : void 0,
            "data-test": u.mainTooltip.slice(0, 1).toLowerCase() + u.mainTooltip.replace(/\s+/g, "").slice(1),
            size: "xs",
            disabled: u.isDisabled || !1,
            ref: g,
            children: [
              a && /* @__PURE__ */ p.jsx(a, {}),
              u.children
            ]
          }
        ) : /* @__PURE__ */ p.jsx(
          Vu,
          {
            onClick: u.onClick,
            "data-selected": u.isSelected ? "true" : void 0,
            "data-test": u.mainTooltip.slice(0, 1).toLowerCase() + u.mainTooltip.replace(/\s+/g, "").slice(1),
            size: 30,
            disabled: u.isDisabled || !1,
            ref: g,
            children: a && /* @__PURE__ */ p.jsx(a, {})
          }
        )
      }
    );
  }
), F0 = (u) => {
  const g = re(
    (b) => {
      u.editor.focus(), b === "default" ? u.editor.removeStyles({ textColor: b }) : u.editor.addStyles({ textColor: b });
    },
    [u.editor]
  ), a = re(
    (b) => {
      u.editor.focus(), b === "default" ? u.editor.removeStyles({ backgroundColor: b }) : u.editor.addStyles({ backgroundColor: b });
    },
    [u.editor]
  );
  return /* @__PURE__ */ p.jsxs(ln, { children: [
    /* @__PURE__ */ p.jsx(ln.Target, { children: /* @__PURE__ */ p.jsx(
      He,
      {
        mainTooltip: "Colors",
        icon: () => /* @__PURE__ */ p.jsx(
          Zu,
          {
            textColor: u.editor.getActiveStyles().textColor || "default",
            backgroundColor: u.editor.getActiveStyles().backgroundColor || "default",
            size: 20
          }
        )
      }
    ) }),
    /* @__PURE__ */ p.jsx(ln.Dropdown, { children: /* @__PURE__ */ p.jsx(
      Ul,
      {
        textColor: u.editor.getActiveStyles().textColor || "default",
        setTextColor: g,
        backgroundColor: u.editor.getActiveStyles().backgroundColor || "default",
        setBackgroundColor: a
      }
    ) })
  ] });
};
function P0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z" } }] }] })(u);
}
function z0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm2 15h14v2H5v-2zm-2-5h18v2H3v-2zm2-5h14v2H5V9z" } }] }] })(u);
}
function D0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm0 15h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V9z" } }] }] })(u);
}
function U0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z" } }] }] })(u);
}
function W0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm4 15h14v2H7v-2zm-4-5h18v2H3v-2zm4-5h14v2H7V9z" } }] }] })(u);
}
function N0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z" } }] }] })(u);
}
function $l(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0H24V24H0z" } }, { tag: "path", attr: { d: "M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z" } }] }] })(u);
}
function Gl(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0H24V24H0z" } }, { tag: "path", attr: { d: "M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .857-.288 1.648-.772 2.28l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546c.268-.307.43-.709.43-1.148 0-.966-.784-1.75-1.75-1.75-.918 0-1.671.707-1.744 1.606l-.006.144h-2C14.75 9.679 16.429 8 18.5 8z" } }] }] })(u);
}
function ql(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0H24V24H0z" } }, { tag: "path", attr: { d: "M22 8l-.002 2-2.505 2.883c1.59.435 2.757 1.89 2.757 3.617 0 2.071-1.679 3.75-3.75 3.75-1.826 0-3.347-1.305-3.682-3.033l1.964-.382c.156.806.866 1.415 1.718 1.415.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75c-.286 0-.556.069-.794.19l-1.307-1.547L19.35 10H15V8h7zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z" } }] }] })(u);
}
function j0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm0 15h18v2H3v-2zm8-5h10v2H11v-2zm0-5h10v2H11V9zm-8 3.5L7 9v7l-4-3.5z" } }] }] })(u);
}
function $0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm0 15h18v2H3v-2zm8-5h10v2H11v-2zm0-5h10v2H11V9zm-4 3.5L3 16V9l4 3.5z" } }] }] })(u);
}
function G0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" } }] }] })(u);
}
function q0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M17 17h5v2h-3v3h-2v-5zM7 7H2V5h3V2h2v5zm11.364 8.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" } }] }] })(u);
}
function Vl(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" } }] }] })(u);
}
function Yl(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" } }] }] })(u);
}
function Kl(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" } }] }] })(u);
}
function V0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.086 4.086 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099.436.313.974.562 1.613.75.62.18 1.297.414 2.03.699z" } }] }] })(u);
}
function eo(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M13 6v15h-2V6H5V4h14v2z" } }] }] })(u);
}
function Y0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3h2zM4 20h16v2H4v-2z" } }] }] })(u);
}
function K0(u) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" } }] }] })(u);
}
function Z0(u) {
  const g = u.icon;
  return /* @__PURE__ */ p.jsx(
    Ci,
    {
      content: /* @__PURE__ */ p.jsx(
        jl,
        {
          mainTooltip: u.mainTooltip,
          secondaryTooltip: u.secondaryTooltip
        }
      ),
      placement: "left",
      children: /* @__PURE__ */ p.jsx(w0, { children: /* @__PURE__ */ p.jsx(g, { size: 16 }) })
    }
  );
}
function J0(u) {
  function g(a) {
    a.key === "Enter" && (a.preventDefault(), u.onSubmit());
  }
  return /* @__PURE__ */ p.jsx(
    y0,
    {
      autoFocus: u.autofocus,
      size: "xs",
      value: u.value,
      onChange: (a) => u.onChange(a.currentTarget.value),
      onKeyDown: g,
      placeholder: u.placeholder
    }
  );
}
function Bl(u) {
  return /* @__PURE__ */ p.jsxs(Qu, { children: [
    /* @__PURE__ */ p.jsx(
      Z0,
      {
        icon: u.icon,
        mainTooltip: u.mainIconTooltip,
        secondaryTooltip: u.secondaryIconTooltip
      }
    ),
    /* @__PURE__ */ p.jsx(
      J0,
      {
        autofocus: u.autofocus,
        placeholder: u.placeholder,
        value: u.value,
        onChange: u.onChange,
        onSubmit: u.onSubmit
      }
    )
  ] });
}
const Zl = Xu((u, g) => {
  const { classes: a } = zt({ root: {} })(void 0, {
    name: "EditHyperlinkMenu"
  }), [b, T] = te(u.url), [I, C] = te(u.text);
  return /* @__PURE__ */ p.jsxs(no, { className: a.root, ref: g, children: [
    /* @__PURE__ */ p.jsx(
      Bl,
      {
        icon: Vl,
        mainIconTooltip: "Edit URL",
        autofocus: !0,
        placeholder: "Edit URL",
        value: b,
        onChange: (q) => T(q),
        onSubmit: () => u.update(b, I)
      }
    ),
    /* @__PURE__ */ p.jsx(
      Bl,
      {
        icon: eo,
        mainIconTooltip: "Edit Title",
        placeholder: "Edit Title",
        value: I,
        onChange: (q) => C(q),
        onSubmit: () => u.update(b, I)
      }
    )
  ] });
}), X0 = (u) => {
  const [g, a] = te(), [b, T] = te(!1), I = vr(null), C = vr(null), q = re(() => {
    a(
      /* @__PURE__ */ p.jsx(
        Zl,
        {
          url: u.activeHyperlinkUrl,
          text: u.activeHyperlinkText,
          update: (hn, K) => {
            u.setHyperlink(hn, K), T(!1);
          },
          ref: C
        },
        Math.random() + ""
      )
    );
  }, [u]), z = re(
    (hn) => {
      var K, nn;
      if ((K = I.current) != null && K.contains(hn.target)) {
        T(!b);
        return;
      }
      (nn = C.current) != null && nn.contains(hn.target) || T(!1);
    },
    [b]
  );
  return Pt(() => (document.body.addEventListener("click", z), () => document.body.removeEventListener("click", z)), [z]), /* @__PURE__ */ p.jsx(
    Ci,
    {
      content: g,
      onShow: q,
      interactive: !0,
      maxWidth: 500,
      visible: b,
      children: /* @__PURE__ */ p.jsx(
        He,
        {
          isSelected: u.isSelected,
          mainTooltip: u.mainTooltip,
          secondaryTooltip: u.secondaryTooltip,
          icon: u.icon,
          ref: I
        }
      )
    }
  );
}, Q0 = () => typeof navigator < "u" && (/Mac/.test(navigator.platform) || /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent));
function we(u) {
  return Q0() ? u.replace("Mod", "⌘") : u.replace("Mod", "Ctrl");
}
const nv = (u) => {
  const g = re(
    (a, b) => {
      u.editor.focus(), u.editor.createLink(a, b);
    },
    [u.editor]
  );
  return /* @__PURE__ */ p.jsx(
    X0,
    {
      isSelected: !!u.editor.getSelectedLinkUrl(),
      mainTooltip: "Link",
      secondaryTooltip: we("Mod+K"),
      icon: Vl,
      hyperlinkIsActive: !!u.editor.getSelectedLinkUrl(),
      activeHyperlinkUrl: u.editor.getSelectedLinkUrl() || "",
      activeHyperlinkText: u.editor.getSelectedText(),
      setHyperlink: g
    }
  );
}, ev = (u) => {
  const g = re(() => {
    u.editor.focus(), u.editor.nestBlock();
  }, [u.editor]);
  return /* @__PURE__ */ p.jsx(
    He,
    {
      onClick: g,
      isDisabled: !u.editor.canNestBlock(),
      mainTooltip: "Nest Block",
      secondaryTooltip: we("Tab"),
      icon: $0
    }
  );
}, tv = (u) => {
  const g = re(() => {
    u.editor.focus(), u.editor.unnestBlock();
  }, [u]);
  return /* @__PURE__ */ p.jsx(
    He,
    {
      onClick: g,
      isDisabled: !u.editor.canUnnestBlock(),
      mainTooltip: "Unnest Block",
      secondaryTooltip: we("Shift+Tab"),
      icon: j0
    }
  );
}, rv = {
  left: U0,
  center: z0,
  right: W0,
  justify: D0
}, Gu = (u) => {
  const g = u0(() => {
    const b = u.editor.getSelection();
    if (b) {
      for (const T of b.blocks)
        if (!("textAlignment" in T.props))
          return !1;
    } else if (!("textAlignment" in u.editor.getTextCursorPosition().block.props))
      return !1;
    return !0;
  }, [u.editor]), a = re(
    (b) => {
      u.editor.focus();
      const T = u.editor.getSelection();
      if (T)
        for (const I of T.blocks)
          u.editor.updateBlock(I, {
            props: { textAlignment: b }
          });
      else {
        const I = u.editor.getTextCursorPosition().block;
        u.editor.updateBlock(I, {
          props: { textAlignment: b }
        });
      }
    },
    [u.editor]
  );
  return g ? /* @__PURE__ */ p.jsx(
    He,
    {
      onClick: () => a(u.textAlignment),
      isSelected: u.editor.getTextCursorPosition().block.props.textAlignment === u.textAlignment,
      mainTooltip: u.textAlignment === "justify" ? "Justify Text" : "Align Text " + u.textAlignment.slice(0, 1).toUpperCase() + u.textAlignment.slice(1),
      icon: rv[u.textAlignment]
    }
  ) : null;
}, iv = {
  bold: "Mod+B",
  italic: "Mod+I",
  underline: "Mod+U",
  strike: "Mod+Shift+X",
  code: ""
}, uv = {
  bold: N0,
  italic: G0,
  underline: Y0,
  strike: V0,
  code: P0
}, xi = (u) => {
  const g = (a) => {
    u.editor.focus(), u.editor.toggleStyles({ [a]: !0 });
  };
  return /* @__PURE__ */ p.jsx(
    He,
    {
      onClick: () => g(u.toggledStyle),
      isSelected: u.toggledStyle in u.editor.getActiveStyles(),
      mainTooltip: u.toggledStyle.slice(0, 1).toUpperCase() + u.toggledStyle.slice(1),
      secondaryTooltip: we(iv[u.toggledStyle]),
      icon: uv[u.toggledStyle]
    }
  );
};
function ov(u) {
  const g = u.icon;
  return /* @__PURE__ */ p.jsx(
    ln.Item,
    {
      onClick: u.onClick,
      icon: g && /* @__PURE__ */ p.jsx(g, { size: 16 }),
      rightSection: u.isSelected ? /* @__PURE__ */ p.jsx(Ju, { size: 16 }) : (
        // Ensures space for tick even if item isn't currently selected.
        /* @__PURE__ */ p.jsx("div", { style: { width: "16px", padding: "0" } })
      ),
      disabled: u.isDisabled,
      children: u.text
    },
    u.text
  );
}
const av = Xu((u, g) => {
  const a = u.icon;
  return /* @__PURE__ */ p.jsx(
    Fl,
    {
      leftIcon: a && /* @__PURE__ */ p.jsx(a, { size: 16 }),
      rightIcon: /* @__PURE__ */ p.jsx(L0, {}),
      size: "xs",
      variant: "subtle",
      disabled: u.isDisabled,
      onClick: u.onClick,
      ref: g,
      children: u.text
    }
  );
});
function lv(u) {
  const g = u.items.filter((a) => a.isSelected)[0];
  return g ? /* @__PURE__ */ p.jsxs(ln, { exitTransitionDuration: 0, disabled: u.isDisabled, children: [
    /* @__PURE__ */ p.jsx(ln.Target, { children: /* @__PURE__ */ p.jsx(av, { ...g }) }),
    /* @__PURE__ */ p.jsx(ln.Dropdown, { children: u.items.map((a) => /* @__PURE__ */ p.jsx(ov, { ...a }, a.text)) })
  ] }) : null;
}
const fv = {
  1: $l,
  2: Gl,
  3: ql
}, sv = (u) => {
  const g = "paragraph" in u, a = "heading" in u && "level" in u.heading.propSchema, b = "bulletListItem" in u, T = "numberedListItem" in u;
  return g && a && b && T;
}, cv = (u) => {
  const [g, a] = te(
    u.editor.getTextCursorPosition().block
  );
  if (Pt(
    () => a(u.editor.getTextCursorPosition().block),
    [u]
  ), !sv(u.editor.schema))
    return null;
  let b = u.editor;
  const T = b.schema.heading.propSchema.level.values.map(
    (I) => ({
      onClick: () => {
        b.focus(), b.updateBlock(g, {
          type: "heading",
          props: { level: I }
        });
      },
      text: "Heading " + I,
      icon: fv[I],
      isSelected: g.type === "heading" && g.props.level === I
    })
  );
  return /* @__PURE__ */ p.jsx(
    lv,
    {
      items: [
        {
          onClick: () => {
            u.editor.focus(), u.editor.updateBlock(g, {
              type: "paragraph",
              props: {}
            });
          },
          text: "Paragraph",
          icon: eo,
          isSelected: g.type === "paragraph"
        },
        ...T,
        {
          onClick: () => {
            u.editor.focus(), u.editor.updateBlock(g, {
              type: "bulletListItem",
              props: {}
            });
          },
          text: "Bullet List",
          icon: Kl,
          isSelected: g.type === "bulletListItem"
        },
        {
          onClick: () => {
            u.editor.focus(), u.editor.updateBlock(g, {
              type: "numberedListItem",
              props: {}
            });
          },
          text: "Numbered List",
          icon: Yl,
          isSelected: g.type === "numberedListItem"
        }
      ]
    }
  );
}, dv = (u) => /* @__PURE__ */ p.jsxs(Nl, { children: [
  /* @__PURE__ */ p.jsx(cv, { ...u }),
  /* @__PURE__ */ p.jsx(xi, { editor: u.editor, toggledStyle: "bold" }),
  /* @__PURE__ */ p.jsx(xi, { editor: u.editor, toggledStyle: "italic" }),
  /* @__PURE__ */ p.jsx(xi, { editor: u.editor, toggledStyle: "underline" }),
  /* @__PURE__ */ p.jsx(xi, { editor: u.editor, toggledStyle: "strike" }),
  /* @__PURE__ */ p.jsx(Gu, { editor: u.editor, textAlignment: "left" }),
  /* @__PURE__ */ p.jsx(Gu, { editor: u.editor, textAlignment: "center" }),
  /* @__PURE__ */ p.jsx(Gu, { editor: u.editor, textAlignment: "right" }),
  /* @__PURE__ */ p.jsx(F0, { editor: u.editor }),
  /* @__PURE__ */ p.jsx(ev, { editor: u.editor }),
  /* @__PURE__ */ p.jsx(tv, { editor: u.editor }),
  /* @__PURE__ */ p.jsx(nv, { editor: u.editor })
] }), hv = (u, g = dv) => (a) => Ti(a, g, u, {
  animation: "fade",
  placement: "top-start"
}), V = [
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
], mi = (u = !1) => {
  const g = `0px 4px 8px ${u ? V[8] : V[2]}, 0px 0px 1px ${u ? V[6] : V[1]}`, a = `1px solid ${u ? V[7] : V[1]}`, b = u ? V[4] : V[2], T = u ? V[6] : V[0], I = u ? V[7] : V[1], C = u ? V[2] : V[5], q = V[4], z = u ? V[7] : V[1], hn = u ? V[2] : V[5], K = u ? V[8] : V[5], nn = u ? V[2] : V[0], Cn = u ? V[7] : V[1], Tn = u ? V[5] : V[3];
  return {
    activeStyles: {
      // Removes button press effect.
      transform: "none"
    },
    colorScheme: u ? "dark" : "light",
    colors: {
      scheme: V,
      dark: V,
      textColors: [
        // primaryText,
        V[6],
        "#9b9a97",
        "#64473a",
        "#e03e3e",
        "#d9730d",
        "#dfab01",
        "#4d6461",
        "#0b6e99",
        "#6940a5",
        "#ad1a72"
      ],
      backgroundColors: [
        // primaryBackground,
        V[0],
        "#ebeced",
        "#e9e5e3",
        "#fbe4e4",
        "#f6e9d9",
        "#fbf3db",
        "#ddedea",
        "#ddebf1",
        "#eae4f2",
        "#f4dfeb"
      ]
    },
    components: {
      // Block Side Menu items
      ActionIcon: {
        styles: () => ({
          root: {
            color: b
          }
        })
      },
      // Slash Menu, Formatting Toolbar dropdown, color picker dropdown
      Menu: {
        styles: () => ({
          dropdown: {
            backgroundColor: T,
            border: a,
            borderRadius: "6px",
            boxShadow: g,
            color: C,
            padding: "2px",
            ".mantine-Menu-item": {
              backgroundColor: T,
              border: "none",
              color: C
            },
            ".mantine-Menu-item[data-hovered]": {
              backgroundColor: z,
              border: "none",
              color: hn
            }
          }
        })
      },
      DragHandleMenu: {
        styles: () => ({
          root: {
            ".mantine-Menu-item": {
              fontSize: "12px",
              height: "30px"
            }
          }
        })
      },
      EditHyperlinkMenu: {
        styles: () => ({
          root: {
            backgroundColor: T,
            border: a,
            borderRadius: "6px",
            boxShadow: g,
            color: C,
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
                color: C,
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
                    color: C,
                    fontSize: "12px",
                    padding: 0
                  }
                }
              }
            }
          }
        })
      },
      Toolbar: {
        styles: () => ({
          root: {
            backgroundColor: T,
            boxShadow: g,
            border: a,
            borderRadius: "6px",
            flexWrap: "nowrap",
            gap: "2px",
            padding: "2px",
            width: "fit-content",
            // Button (including dropdown target)
            ".mantine-UnstyledButton-root": {
              backgroundColor: T,
              border: "none",
              borderRadius: "4px",
              color: C
            },
            // Hovered button
            ".mantine-UnstyledButton-root:hover": {
              backgroundColor: z,
              border: "none",
              color: hn
            },
            // Selected button
            ".mantine-UnstyledButton-root[data-selected]": {
              backgroundColor: K,
              border: "none",
              color: nn
            },
            // Disabled button
            ".mantine-UnstyledButton-root[data-disabled]": {
              backgroundColor: Cn,
              border: "none",
              color: Tn
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
                backgroundColor: z
              }
            }
          }
        })
      },
      Tooltip: {
        styles: () => ({
          root: {
            backgroundColor: T,
            border: a,
            borderRadius: "6px",
            boxShadow: g,
            color: C,
            padding: "4px 10px",
            textAlign: "center",
            "div ~ div": {
              color: q
            }
          }
        })
      },
      SlashMenu: {
        styles: () => ({
          root: {
            position: "relative",
            ".mantine-Menu-item": {
              // Icon
              ".mantine-Menu-itemIcon": {
                backgroundColor: I,
                borderRadius: "4px",
                color: C,
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
                  backgroundColor: I,
                  color: C
                }
              }
            }
          }
        })
      }
    },
    fontFamily: "Inter",
    other: {
      colors: [
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
      ]
    },
    primaryColor: "scheme"
  };
}, gv = (u) => {
  const [g, a] = te(!1);
  return g ? /* @__PURE__ */ p.jsx(
    Zl,
    {
      url: u.url,
      text: u.text,
      update: u.editHyperlink
    }
  ) : /* @__PURE__ */ p.jsxs(Nl, { children: [
    /* @__PURE__ */ p.jsx(
      He,
      {
        mainTooltip: "Edit",
        isSelected: !1,
        onClick: () => a(!0),
        children: "Edit Link"
      }
    ),
    /* @__PURE__ */ p.jsx(
      He,
      {
        mainTooltip: "Open in new tab",
        isSelected: !1,
        onClick: () => {
          window.open(u.url, "_blank");
        },
        icon: K0
      }
    ),
    /* @__PURE__ */ p.jsx(
      He,
      {
        mainTooltip: "Remove link",
        isSelected: !1,
        onClick: u.deleteHyperlink,
        icon: q0
      }
    )
  ] });
}, vv = (u) => (g) => Ti(g, gv, u, {
  animation: "fade",
  placement: "top-start"
});
class pv extends v0 {
  constructor(g, a, b = [], T, I, C, q) {
    super(g, a, b), this.name = g, this.execute = a, this.aliases = b, this.group = T, this.icon = I, this.hint = C, this.shortcut = q;
  }
}
const wi = {
  Heading: {
    group: "Headings",
    icon: /* @__PURE__ */ p.jsx($l, { size: 18 }),
    hint: "Used for a top-level heading",
    shortcut: we("Mod-Alt-1")
  },
  "Heading 2": {
    group: "Headings",
    icon: /* @__PURE__ */ p.jsx(Gl, { size: 18 }),
    hint: "Used for key sections",
    shortcut: we("Mod-Alt-2")
  },
  "Heading 3": {
    group: "Headings",
    icon: /* @__PURE__ */ p.jsx(ql, { size: 18 }),
    hint: "Used for subsections and group headings",
    shortcut: we("Mod-Alt-3")
  },
  "Numbered List": {
    group: "Basic blocks",
    icon: /* @__PURE__ */ p.jsx(Yl, { size: 18 }),
    hint: "Used to display a numbered list",
    shortcut: we("Mod-Alt-7")
  },
  "Bullet List": {
    group: "Basic blocks",
    icon: /* @__PURE__ */ p.jsx(Kl, { size: 18 }),
    hint: "Used to display an unordered list",
    shortcut: we("Mod-Alt-9")
  },
  Paragraph: {
    group: "Basic blocks",
    icon: /* @__PURE__ */ p.jsx(eo, { size: 18 }),
    hint: "Used for the body of your document",
    shortcut: we("Mod-Alt-0")
  }
}, _v = p0.map(
  (u) => new pv(
    u.name,
    u.execute,
    u.aliases,
    wi[u.name].group,
    wi[u.name].icon,
    wi[u.name].hint,
    wi[u.name].shortcut
  )
);
var bi = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
bi.exports;
(function(u, g) {
  (function() {
    var a, b = "4.17.21", T = 200, I = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", C = "Expected a function", q = "Invalid `variable` option passed into `_.template`", z = "__lodash_hash_undefined__", hn = 500, K = "__lodash_placeholder__", nn = 1, Cn = 2, Tn = 4, ye = 1, ht = 2, An = 1, In = 2, pn = 4, Gn = 8, Fe = 16, qn = 32, Pe = 64, ie = 128, Xe = 256, gt = 512, Ri = 30, Ei = "...", pr = 800, ue = 16, he = 1, Qe = 2, _r = 3, ge = 1 / 0, oe = 9007199254740991, xr = 17976931348623157e292, nt = 0 / 0, Fn = 4294967295, mr = Fn - 1, wr = Fn >>> 1, Si = [
      ["ary", ie],
      ["bind", An],
      ["bindKey", In],
      ["curry", Gn],
      ["curryRight", Fe],
      ["flip", gt],
      ["partial", qn],
      ["partialRight", Pe],
      ["rearg", Xe]
    ], ze = "[object Arguments]", De = "[object Array]", Dt = "[object AsyncFunction]", ve = "[object Boolean]", be = "[object Date]", vt = "[object DOMException]", pt = "[object Error]", et = "[object Function]", yr = "[object GeneratorFunction]", Pn = "[object Map]", pe = "[object Number]", _t = "[object Null]", Vn = "[object Object]", Ut = "[object Promise]", xt = "[object Proxy]", tt = "[object RegExp]", zn = "[object Set]", Ce = "[object String]", mt = "[object Symbol]", Ai = "[object Undefined]", Ue = "[object WeakMap]", br = "[object WeakSet]", ae = "[object ArrayBuffer]", We = "[object DataView]", wt = "[object Float32Array]", yt = "[object Float64Array]", rt = "[object Int8Array]", Wt = "[object Int16Array]", Nt = "[object Int32Array]", jt = "[object Uint8Array]", $t = "[object Uint8ClampedArray]", Gt = "[object Uint16Array]", qt = "[object Uint32Array]", Ii = /\b__p \+= '';/g, Vt = /\b(__p \+=) '' \+/g, Cr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Te = /&(?:amp|lt|gt|quot|#39);/g, bt = /[&<>"']/g, Yt = RegExp(Te.source), Tr = RegExp(bt.source), Mi = /<%-([\s\S]+?)%>/g, Rr = /<%([\s\S]+?)%>/g, Er = /<%=([\s\S]+?)%>/g, Sr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ar = /^\w*$/, Li = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Kt = /[\\^$.*+?()[\]{}|]/g, Ir = RegExp(Kt.source), Zt = /^\s+/, Oi = /\s/, Bi = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ki = /\{\n\/\* \[wrapped with (.+)\] \*/, s = /,? & /, y = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, R = /[()=,{}\[\]\/\s]/, B = /\\(\\)?/g, G = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Z = /\w*$/, N = /^[-+]0x[0-9a-f]+$/i, U = /^0b[01]+$/i, xn = /^\[object .+?Constructor\]$/, on = /^0o[0-7]+$/i, fn = /^(?:0|[1-9]\d*)$/, Mn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, le = /($^)/, Mr = /['\n\r\u2028\u2029\\]/g, Ln = "\\ud800-\\udfff", Jl = "\\u0300-\\u036f", Xl = "\\ufe20-\\ufe2f", Ql = "\\u20d0-\\u20ff", to = Jl + Xl + Ql, ro = "\\u2700-\\u27bf", io = "a-z\\xdf-\\xf6\\xf8-\\xff", nf = "\\xac\\xb1\\xd7\\xf7", ef = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", tf = "\\u2000-\\u206f", rf = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", uo = "A-Z\\xc0-\\xd6\\xd8-\\xde", oo = "\\ufe0e\\ufe0f", ao = nf + ef + tf + rf, Hi = "['’]", uf = "[" + Ln + "]", lo = "[" + ao + "]", Lr = "[" + to + "]", fo = "\\d+", of = "[" + ro + "]", so = "[" + io + "]", co = "[^" + Ln + ao + fo + ro + io + uo + "]", Fi = "\\ud83c[\\udffb-\\udfff]", af = "(?:" + Lr + "|" + Fi + ")", ho = "[^" + Ln + "]", Pi = "(?:\\ud83c[\\udde6-\\uddff]){2}", zi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ct = "[" + uo + "]", go = "\\u200d", vo = "(?:" + so + "|" + co + ")", lf = "(?:" + Ct + "|" + co + ")", po = "(?:" + Hi + "(?:d|ll|m|re|s|t|ve))?", _o = "(?:" + Hi + "(?:D|LL|M|RE|S|T|VE))?", xo = af + "?", mo = "[" + oo + "]?", ff = "(?:" + go + "(?:" + [ho, Pi, zi].join("|") + ")" + mo + xo + ")*", sf = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", cf = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", wo = mo + xo + ff, df = "(?:" + [of, Pi, zi].join("|") + ")" + wo, hf = "(?:" + [ho + Lr + "?", Lr, Pi, zi, uf].join("|") + ")", gf = RegExp(Hi, "g"), vf = RegExp(Lr, "g"), Di = RegExp(Fi + "(?=" + Fi + ")|" + hf + wo, "g"), pf = RegExp([
      Ct + "?" + so + "+" + po + "(?=" + [lo, Ct, "$"].join("|") + ")",
      lf + "+" + _o + "(?=" + [lo, Ct + vo, "$"].join("|") + ")",
      Ct + "?" + vo + "+" + po,
      Ct + "+" + _o,
      cf,
      sf,
      fo,
      df
    ].join("|"), "g"), _f = RegExp("[" + go + Ln + to + oo + "]"), xf = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, mf = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], wf = -1, tn = {};
    tn[wt] = tn[yt] = tn[rt] = tn[Wt] = tn[Nt] = tn[jt] = tn[$t] = tn[Gt] = tn[qt] = !0, tn[ze] = tn[De] = tn[ae] = tn[ve] = tn[We] = tn[be] = tn[pt] = tn[et] = tn[Pn] = tn[pe] = tn[Vn] = tn[tt] = tn[zn] = tn[Ce] = tn[Ue] = !1;
    var en = {};
    en[ze] = en[De] = en[ae] = en[We] = en[ve] = en[be] = en[wt] = en[yt] = en[rt] = en[Wt] = en[Nt] = en[Pn] = en[pe] = en[Vn] = en[tt] = en[zn] = en[Ce] = en[mt] = en[jt] = en[$t] = en[Gt] = en[qt] = !0, en[pt] = en[et] = en[Ue] = !1;
    var yf = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, bf = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Cf = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Tf = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Rf = parseFloat, Ef = parseInt, yo = typeof dr == "object" && dr && dr.Object === Object && dr, Sf = typeof self == "object" && self && self.Object === Object && self, mn = yo || Sf || Function("return this")(), Ui = g && !g.nodeType && g, it = Ui && !0 && u && !u.nodeType && u, bo = it && it.exports === Ui, Wi = bo && yo.process, Yn = function() {
      try {
        var d = it && it.require && it.require("util").types;
        return d || Wi && Wi.binding && Wi.binding("util");
      } catch {
      }
    }(), Co = Yn && Yn.isArrayBuffer, To = Yn && Yn.isDate, Ro = Yn && Yn.isMap, Eo = Yn && Yn.isRegExp, So = Yn && Yn.isSet, Ao = Yn && Yn.isTypedArray;
    function Dn(d, _, v) {
      switch (v.length) {
        case 0:
          return d.call(_);
        case 1:
          return d.call(_, v[0]);
        case 2:
          return d.call(_, v[0], v[1]);
        case 3:
          return d.call(_, v[0], v[1], v[2]);
      }
      return d.apply(_, v);
    }
    function Af(d, _, v, S) {
      for (var k = -1, Y = d == null ? 0 : d.length; ++k < Y; ) {
        var gn = d[k];
        _(S, gn, v(gn), d);
      }
      return S;
    }
    function Kn(d, _) {
      for (var v = -1, S = d == null ? 0 : d.length; ++v < S && _(d[v], v, d) !== !1; )
        ;
      return d;
    }
    function If(d, _) {
      for (var v = d == null ? 0 : d.length; v-- && _(d[v], v, d) !== !1; )
        ;
      return d;
    }
    function Io(d, _) {
      for (var v = -1, S = d == null ? 0 : d.length; ++v < S; )
        if (!_(d[v], v, d))
          return !1;
      return !0;
    }
    function Ne(d, _) {
      for (var v = -1, S = d == null ? 0 : d.length, k = 0, Y = []; ++v < S; ) {
        var gn = d[v];
        _(gn, v, d) && (Y[k++] = gn);
      }
      return Y;
    }
    function Or(d, _) {
      var v = d == null ? 0 : d.length;
      return !!v && Tt(d, _, 0) > -1;
    }
    function Ni(d, _, v) {
      for (var S = -1, k = d == null ? 0 : d.length; ++S < k; )
        if (v(_, d[S]))
          return !0;
      return !1;
    }
    function un(d, _) {
      for (var v = -1, S = d == null ? 0 : d.length, k = Array(S); ++v < S; )
        k[v] = _(d[v], v, d);
      return k;
    }
    function je(d, _) {
      for (var v = -1, S = _.length, k = d.length; ++v < S; )
        d[k + v] = _[v];
      return d;
    }
    function ji(d, _, v, S) {
      var k = -1, Y = d == null ? 0 : d.length;
      for (S && Y && (v = d[++k]); ++k < Y; )
        v = _(v, d[k], k, d);
      return v;
    }
    function Mf(d, _, v, S) {
      var k = d == null ? 0 : d.length;
      for (S && k && (v = d[--k]); k--; )
        v = _(v, d[k], k, d);
      return v;
    }
    function $i(d, _) {
      for (var v = -1, S = d == null ? 0 : d.length; ++v < S; )
        if (_(d[v], v, d))
          return !0;
      return !1;
    }
    var Lf = Gi("length");
    function Of(d) {
      return d.split("");
    }
    function Bf(d) {
      return d.match(y) || [];
    }
    function Mo(d, _, v) {
      var S;
      return v(d, function(k, Y, gn) {
        if (_(k, Y, gn))
          return S = Y, !1;
      }), S;
    }
    function Br(d, _, v, S) {
      for (var k = d.length, Y = v + (S ? 1 : -1); S ? Y-- : ++Y < k; )
        if (_(d[Y], Y, d))
          return Y;
      return -1;
    }
    function Tt(d, _, v) {
      return _ === _ ? Gf(d, _, v) : Br(d, Lo, v);
    }
    function kf(d, _, v, S) {
      for (var k = v - 1, Y = d.length; ++k < Y; )
        if (S(d[k], _))
          return k;
      return -1;
    }
    function Lo(d) {
      return d !== d;
    }
    function Oo(d, _) {
      var v = d == null ? 0 : d.length;
      return v ? Vi(d, _) / v : nt;
    }
    function Gi(d) {
      return function(_) {
        return _ == null ? a : _[d];
      };
    }
    function qi(d) {
      return function(_) {
        return d == null ? a : d[_];
      };
    }
    function Bo(d, _, v, S, k) {
      return k(d, function(Y, gn, Q) {
        v = S ? (S = !1, Y) : _(v, Y, gn, Q);
      }), v;
    }
    function Hf(d, _) {
      var v = d.length;
      for (d.sort(_); v--; )
        d[v] = d[v].value;
      return d;
    }
    function Vi(d, _) {
      for (var v, S = -1, k = d.length; ++S < k; ) {
        var Y = _(d[S]);
        Y !== a && (v = v === a ? Y : v + Y);
      }
      return v;
    }
    function Yi(d, _) {
      for (var v = -1, S = Array(d); ++v < d; )
        S[v] = _(v);
      return S;
    }
    function Ff(d, _) {
      return un(_, function(v) {
        return [v, d[v]];
      });
    }
    function ko(d) {
      return d && d.slice(0, zo(d) + 1).replace(Zt, "");
    }
    function Un(d) {
      return function(_) {
        return d(_);
      };
    }
    function Ki(d, _) {
      return un(_, function(v) {
        return d[v];
      });
    }
    function Jt(d, _) {
      return d.has(_);
    }
    function Ho(d, _) {
      for (var v = -1, S = d.length; ++v < S && Tt(_, d[v], 0) > -1; )
        ;
      return v;
    }
    function Fo(d, _) {
      for (var v = d.length; v-- && Tt(_, d[v], 0) > -1; )
        ;
      return v;
    }
    function Pf(d, _) {
      for (var v = d.length, S = 0; v--; )
        d[v] === _ && ++S;
      return S;
    }
    var zf = qi(yf), Df = qi(bf);
    function Uf(d) {
      return "\\" + Tf[d];
    }
    function Wf(d, _) {
      return d == null ? a : d[_];
    }
    function Rt(d) {
      return _f.test(d);
    }
    function Nf(d) {
      return xf.test(d);
    }
    function jf(d) {
      for (var _, v = []; !(_ = d.next()).done; )
        v.push(_.value);
      return v;
    }
    function Zi(d) {
      var _ = -1, v = Array(d.size);
      return d.forEach(function(S, k) {
        v[++_] = [k, S];
      }), v;
    }
    function Po(d, _) {
      return function(v) {
        return d(_(v));
      };
    }
    function $e(d, _) {
      for (var v = -1, S = d.length, k = 0, Y = []; ++v < S; ) {
        var gn = d[v];
        (gn === _ || gn === K) && (d[v] = K, Y[k++] = v);
      }
      return Y;
    }
    function kr(d) {
      var _ = -1, v = Array(d.size);
      return d.forEach(function(S) {
        v[++_] = S;
      }), v;
    }
    function $f(d) {
      var _ = -1, v = Array(d.size);
      return d.forEach(function(S) {
        v[++_] = [S, S];
      }), v;
    }
    function Gf(d, _, v) {
      for (var S = v - 1, k = d.length; ++S < k; )
        if (d[S] === _)
          return S;
      return -1;
    }
    function qf(d, _, v) {
      for (var S = v + 1; S--; )
        if (d[S] === _)
          return S;
      return S;
    }
    function Et(d) {
      return Rt(d) ? Yf(d) : Lf(d);
    }
    function fe(d) {
      return Rt(d) ? Kf(d) : Of(d);
    }
    function zo(d) {
      for (var _ = d.length; _-- && Oi.test(d.charAt(_)); )
        ;
      return _;
    }
    var Vf = qi(Cf);
    function Yf(d) {
      for (var _ = Di.lastIndex = 0; Di.test(d); )
        ++_;
      return _;
    }
    function Kf(d) {
      return d.match(Di) || [];
    }
    function Zf(d) {
      return d.match(pf) || [];
    }
    var Jf = function d(_) {
      _ = _ == null ? mn : St.defaults(mn.Object(), _, St.pick(mn, mf));
      var v = _.Array, S = _.Date, k = _.Error, Y = _.Function, gn = _.Math, Q = _.Object, Ji = _.RegExp, Xf = _.String, Zn = _.TypeError, Hr = v.prototype, Qf = Y.prototype, At = Q.prototype, Fr = _["__core-js_shared__"], Pr = Qf.toString, X = At.hasOwnProperty, ns = 0, Do = function() {
        var n = /[^.]+$/.exec(Fr && Fr.keys && Fr.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), zr = At.toString, es = Pr.call(Q), ts = mn._, rs = Ji(
        "^" + Pr.call(X).replace(Kt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Dr = bo ? _.Buffer : a, Ge = _.Symbol, Ur = _.Uint8Array, Uo = Dr ? Dr.allocUnsafe : a, Wr = Po(Q.getPrototypeOf, Q), Wo = Q.create, No = At.propertyIsEnumerable, Nr = Hr.splice, jo = Ge ? Ge.isConcatSpreadable : a, Xt = Ge ? Ge.iterator : a, ut = Ge ? Ge.toStringTag : a, jr = function() {
        try {
          var n = st(Q, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), is = _.clearTimeout !== mn.clearTimeout && _.clearTimeout, us = S && S.now !== mn.Date.now && S.now, os = _.setTimeout !== mn.setTimeout && _.setTimeout, $r = gn.ceil, Gr = gn.floor, Xi = Q.getOwnPropertySymbols, as = Dr ? Dr.isBuffer : a, $o = _.isFinite, ls = Hr.join, fs = Po(Q.keys, Q), vn = gn.max, yn = gn.min, ss = S.now, cs = _.parseInt, Go = gn.random, ds = Hr.reverse, Qi = st(_, "DataView"), Qt = st(_, "Map"), nu = st(_, "Promise"), It = st(_, "Set"), nr = st(_, "WeakMap"), er = st(Q, "create"), qr = nr && new nr(), Mt = {}, hs = ct(Qi), gs = ct(Qt), vs = ct(nu), ps = ct(It), _s = ct(nr), Vr = Ge ? Ge.prototype : a, tr = Vr ? Vr.valueOf : a, qo = Vr ? Vr.toString : a;
      function o(n) {
        if (sn(n) && !H(n) && !(n instanceof j)) {
          if (n instanceof Jn)
            return n;
          if (X.call(n, "__wrapped__"))
            return Va(n);
        }
        return new Jn(n);
      }
      var Lt = function() {
        function n() {
        }
        return function(e) {
          if (!an(e))
            return {};
          if (Wo)
            return Wo(e);
          n.prototype = e;
          var t = new n();
          return n.prototype = a, t;
        };
      }();
      function Yr() {
      }
      function Jn(n, e) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = a;
      }
      o.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Mi,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Rr,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Er,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: o
        }
      }, o.prototype = Yr.prototype, o.prototype.constructor = o, Jn.prototype = Lt(Yr.prototype), Jn.prototype.constructor = Jn;
      function j(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Fn, this.__views__ = [];
      }
      function xs() {
        var n = new j(this.__wrapped__);
        return n.__actions__ = On(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = On(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = On(this.__views__), n;
      }
      function ms() {
        if (this.__filtered__) {
          var n = new j(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function ws() {
        var n = this.__wrapped__.value(), e = this.__dir__, t = H(n), r = e < 0, i = t ? n.length : 0, l = Oc(0, i, this.__views__), f = l.start, c = l.end, h = c - f, x = r ? c : f - 1, m = this.__iteratees__, w = m.length, E = 0, A = yn(h, this.__takeCount__);
        if (!t || !r && i == h && A == h)
          return pa(n, this.__actions__);
        var L = [];
        n:
          for (; h-- && E < A; ) {
            x += e;
            for (var P = -1, O = n[x]; ++P < w; ) {
              var W = m[P], $ = W.iteratee, jn = W.type, Sn = $(O);
              if (jn == Qe)
                O = Sn;
              else if (!Sn) {
                if (jn == he)
                  continue n;
                break n;
              }
            }
            L[E++] = O;
          }
        return L;
      }
      j.prototype = Lt(Yr.prototype), j.prototype.constructor = j;
      function ot(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.clear(); ++e < t; ) {
          var r = n[e];
          this.set(r[0], r[1]);
        }
      }
      function ys() {
        this.__data__ = er ? er(null) : {}, this.size = 0;
      }
      function bs(n) {
        var e = this.has(n) && delete this.__data__[n];
        return this.size -= e ? 1 : 0, e;
      }
      function Cs(n) {
        var e = this.__data__;
        if (er) {
          var t = e[n];
          return t === z ? a : t;
        }
        return X.call(e, n) ? e[n] : a;
      }
      function Ts(n) {
        var e = this.__data__;
        return er ? e[n] !== a : X.call(e, n);
      }
      function Rs(n, e) {
        var t = this.__data__;
        return this.size += this.has(n) ? 0 : 1, t[n] = er && e === a ? z : e, this;
      }
      ot.prototype.clear = ys, ot.prototype.delete = bs, ot.prototype.get = Cs, ot.prototype.has = Ts, ot.prototype.set = Rs;
      function Re(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.clear(); ++e < t; ) {
          var r = n[e];
          this.set(r[0], r[1]);
        }
      }
      function Es() {
        this.__data__ = [], this.size = 0;
      }
      function Ss(n) {
        var e = this.__data__, t = Kr(e, n);
        if (t < 0)
          return !1;
        var r = e.length - 1;
        return t == r ? e.pop() : Nr.call(e, t, 1), --this.size, !0;
      }
      function As(n) {
        var e = this.__data__, t = Kr(e, n);
        return t < 0 ? a : e[t][1];
      }
      function Is(n) {
        return Kr(this.__data__, n) > -1;
      }
      function Ms(n, e) {
        var t = this.__data__, r = Kr(t, n);
        return r < 0 ? (++this.size, t.push([n, e])) : t[r][1] = e, this;
      }
      Re.prototype.clear = Es, Re.prototype.delete = Ss, Re.prototype.get = As, Re.prototype.has = Is, Re.prototype.set = Ms;
      function Ee(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.clear(); ++e < t; ) {
          var r = n[e];
          this.set(r[0], r[1]);
        }
      }
      function Ls() {
        this.size = 0, this.__data__ = {
          hash: new ot(),
          map: new (Qt || Re)(),
          string: new ot()
        };
      }
      function Os(n) {
        var e = ai(this, n).delete(n);
        return this.size -= e ? 1 : 0, e;
      }
      function Bs(n) {
        return ai(this, n).get(n);
      }
      function ks(n) {
        return ai(this, n).has(n);
      }
      function Hs(n, e) {
        var t = ai(this, n), r = t.size;
        return t.set(n, e), this.size += t.size == r ? 0 : 1, this;
      }
      Ee.prototype.clear = Ls, Ee.prototype.delete = Os, Ee.prototype.get = Bs, Ee.prototype.has = ks, Ee.prototype.set = Hs;
      function at(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.__data__ = new Ee(); ++e < t; )
          this.add(n[e]);
      }
      function Fs(n) {
        return this.__data__.set(n, z), this;
      }
      function Ps(n) {
        return this.__data__.has(n);
      }
      at.prototype.add = at.prototype.push = Fs, at.prototype.has = Ps;
      function se(n) {
        var e = this.__data__ = new Re(n);
        this.size = e.size;
      }
      function zs() {
        this.__data__ = new Re(), this.size = 0;
      }
      function Ds(n) {
        var e = this.__data__, t = e.delete(n);
        return this.size = e.size, t;
      }
      function Us(n) {
        return this.__data__.get(n);
      }
      function Ws(n) {
        return this.__data__.has(n);
      }
      function Ns(n, e) {
        var t = this.__data__;
        if (t instanceof Re) {
          var r = t.__data__;
          if (!Qt || r.length < T - 1)
            return r.push([n, e]), this.size = ++t.size, this;
          t = this.__data__ = new Ee(r);
        }
        return t.set(n, e), this.size = t.size, this;
      }
      se.prototype.clear = zs, se.prototype.delete = Ds, se.prototype.get = Us, se.prototype.has = Ws, se.prototype.set = Ns;
      function Vo(n, e) {
        var t = H(n), r = !t && dt(n), i = !t && !r && Ze(n), l = !t && !r && !i && Ht(n), f = t || r || i || l, c = f ? Yi(n.length, Xf) : [], h = c.length;
        for (var x in n)
          (e || X.call(n, x)) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
          (x == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          i && (x == "offset" || x == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          l && (x == "buffer" || x == "byteLength" || x == "byteOffset") || // Skip index properties.
          Me(x, h))) && c.push(x);
        return c;
      }
      function Yo(n) {
        var e = n.length;
        return e ? n[cu(0, e - 1)] : a;
      }
      function js(n, e) {
        return li(On(n), lt(e, 0, n.length));
      }
      function $s(n) {
        return li(On(n));
      }
      function eu(n, e, t) {
        (t !== a && !ce(n[e], t) || t === a && !(e in n)) && Se(n, e, t);
      }
      function rr(n, e, t) {
        var r = n[e];
        (!(X.call(n, e) && ce(r, t)) || t === a && !(e in n)) && Se(n, e, t);
      }
      function Kr(n, e) {
        for (var t = n.length; t--; )
          if (ce(n[t][0], e))
            return t;
        return -1;
      }
      function Gs(n, e, t, r) {
        return qe(n, function(i, l, f) {
          e(r, i, t(i), f);
        }), r;
      }
      function Ko(n, e) {
        return n && xe(e, _n(e), n);
      }
      function qs(n, e) {
        return n && xe(e, kn(e), n);
      }
      function Se(n, e, t) {
        e == "__proto__" && jr ? jr(n, e, {
          configurable: !0,
          enumerable: !0,
          value: t,
          writable: !0
        }) : n[e] = t;
      }
      function tu(n, e) {
        for (var t = -1, r = e.length, i = v(r), l = n == null; ++t < r; )
          i[t] = l ? a : Fu(n, e[t]);
        return i;
      }
      function lt(n, e, t) {
        return n === n && (t !== a && (n = n <= t ? n : t), e !== a && (n = n >= e ? n : e)), n;
      }
      function Xn(n, e, t, r, i, l) {
        var f, c = e & nn, h = e & Cn, x = e & Tn;
        if (t && (f = i ? t(n, r, i, l) : t(n)), f !== a)
          return f;
        if (!an(n))
          return n;
        var m = H(n);
        if (m) {
          if (f = kc(n), !c)
            return On(n, f);
        } else {
          var w = bn(n), E = w == et || w == yr;
          if (Ze(n))
            return ma(n, c);
          if (w == Vn || w == ze || E && !i) {
            if (f = h || E ? {} : za(n), !c)
              return h ? Cc(n, qs(f, n)) : bc(n, Ko(f, n));
          } else {
            if (!en[w])
              return i ? n : {};
            f = Hc(n, w, c);
          }
        }
        l || (l = new se());
        var A = l.get(n);
        if (A)
          return A;
        l.set(n, f), hl(n) ? n.forEach(function(O) {
          f.add(Xn(O, e, t, O, n, l));
        }) : cl(n) && n.forEach(function(O, W) {
          f.set(W, Xn(O, e, t, W, n, l));
        });
        var L = x ? h ? bu : yu : h ? kn : _n, P = m ? a : L(n);
        return Kn(P || n, function(O, W) {
          P && (W = O, O = n[W]), rr(f, W, Xn(O, e, t, W, n, l));
        }), f;
      }
      function Vs(n) {
        var e = _n(n);
        return function(t) {
          return Zo(t, n, e);
        };
      }
      function Zo(n, e, t) {
        var r = t.length;
        if (n == null)
          return !r;
        for (n = Q(n); r--; ) {
          var i = t[r], l = e[i], f = n[i];
          if (f === a && !(i in n) || !l(f))
            return !1;
        }
        return !0;
      }
      function Jo(n, e, t) {
        if (typeof n != "function")
          throw new Zn(C);
        return sr(function() {
          n.apply(a, t);
        }, e);
      }
      function ir(n, e, t, r) {
        var i = -1, l = Or, f = !0, c = n.length, h = [], x = e.length;
        if (!c)
          return h;
        t && (e = un(e, Un(t))), r ? (l = Ni, f = !1) : e.length >= T && (l = Jt, f = !1, e = new at(e));
        n:
          for (; ++i < c; ) {
            var m = n[i], w = t == null ? m : t(m);
            if (m = r || m !== 0 ? m : 0, f && w === w) {
              for (var E = x; E--; )
                if (e[E] === w)
                  continue n;
              h.push(m);
            } else
              l(e, w, r) || h.push(m);
          }
        return h;
      }
      var qe = Ta(_e), Xo = Ta(iu, !0);
      function Ys(n, e) {
        var t = !0;
        return qe(n, function(r, i, l) {
          return t = !!e(r, i, l), t;
        }), t;
      }
      function Zr(n, e, t) {
        for (var r = -1, i = n.length; ++r < i; ) {
          var l = n[r], f = e(l);
          if (f != null && (c === a ? f === f && !Nn(f) : t(f, c)))
            var c = f, h = l;
        }
        return h;
      }
      function Ks(n, e, t, r) {
        var i = n.length;
        for (t = F(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === a || r > i ? i : F(r), r < 0 && (r += i), r = t > r ? 0 : vl(r); t < r; )
          n[t++] = e;
        return n;
      }
      function Qo(n, e) {
        var t = [];
        return qe(n, function(r, i, l) {
          e(r, i, l) && t.push(r);
        }), t;
      }
      function wn(n, e, t, r, i) {
        var l = -1, f = n.length;
        for (t || (t = Pc), i || (i = []); ++l < f; ) {
          var c = n[l];
          e > 0 && t(c) ? e > 1 ? wn(c, e - 1, t, r, i) : je(i, c) : r || (i[i.length] = c);
        }
        return i;
      }
      var ru = Ra(), na = Ra(!0);
      function _e(n, e) {
        return n && ru(n, e, _n);
      }
      function iu(n, e) {
        return n && na(n, e, _n);
      }
      function Jr(n, e) {
        return Ne(e, function(t) {
          return Le(n[t]);
        });
      }
      function ft(n, e) {
        e = Ye(e, n);
        for (var t = 0, r = e.length; n != null && t < r; )
          n = n[me(e[t++])];
        return t && t == r ? n : a;
      }
      function ea(n, e, t) {
        var r = e(n);
        return H(n) ? r : je(r, t(n));
      }
      function Rn(n) {
        return n == null ? n === a ? Ai : _t : ut && ut in Q(n) ? Lc(n) : $c(n);
      }
      function uu(n, e) {
        return n > e;
      }
      function Zs(n, e) {
        return n != null && X.call(n, e);
      }
      function Js(n, e) {
        return n != null && e in Q(n);
      }
      function Xs(n, e, t) {
        return n >= yn(e, t) && n < vn(e, t);
      }
      function ou(n, e, t) {
        for (var r = t ? Ni : Or, i = n[0].length, l = n.length, f = l, c = v(l), h = 1 / 0, x = []; f--; ) {
          var m = n[f];
          f && e && (m = un(m, Un(e))), h = yn(m.length, h), c[f] = !t && (e || i >= 120 && m.length >= 120) ? new at(f && m) : a;
        }
        m = n[0];
        var w = -1, E = c[0];
        n:
          for (; ++w < i && x.length < h; ) {
            var A = m[w], L = e ? e(A) : A;
            if (A = t || A !== 0 ? A : 0, !(E ? Jt(E, L) : r(x, L, t))) {
              for (f = l; --f; ) {
                var P = c[f];
                if (!(P ? Jt(P, L) : r(n[f], L, t)))
                  continue n;
              }
              E && E.push(L), x.push(A);
            }
          }
        return x;
      }
      function Qs(n, e, t, r) {
        return _e(n, function(i, l, f) {
          e(r, t(i), l, f);
        }), r;
      }
      function ur(n, e, t) {
        e = Ye(e, n), n = Na(n, e);
        var r = n == null ? n : n[me(ne(e))];
        return r == null ? a : Dn(r, n, t);
      }
      function ta(n) {
        return sn(n) && Rn(n) == ze;
      }
      function nc(n) {
        return sn(n) && Rn(n) == ae;
      }
      function ec(n) {
        return sn(n) && Rn(n) == be;
      }
      function or(n, e, t, r, i) {
        return n === e ? !0 : n == null || e == null || !sn(n) && !sn(e) ? n !== n && e !== e : tc(n, e, t, r, or, i);
      }
      function tc(n, e, t, r, i, l) {
        var f = H(n), c = H(e), h = f ? De : bn(n), x = c ? De : bn(e);
        h = h == ze ? Vn : h, x = x == ze ? Vn : x;
        var m = h == Vn, w = x == Vn, E = h == x;
        if (E && Ze(n)) {
          if (!Ze(e))
            return !1;
          f = !0, m = !1;
        }
        if (E && !m)
          return l || (l = new se()), f || Ht(n) ? Ha(n, e, t, r, i, l) : Ic(n, e, h, t, r, i, l);
        if (!(t & ye)) {
          var A = m && X.call(n, "__wrapped__"), L = w && X.call(e, "__wrapped__");
          if (A || L) {
            var P = A ? n.value() : n, O = L ? e.value() : e;
            return l || (l = new se()), i(P, O, t, r, l);
          }
        }
        return E ? (l || (l = new se()), Mc(n, e, t, r, i, l)) : !1;
      }
      function rc(n) {
        return sn(n) && bn(n) == Pn;
      }
      function au(n, e, t, r) {
        var i = t.length, l = i, f = !r;
        if (n == null)
          return !l;
        for (n = Q(n); i--; ) {
          var c = t[i];
          if (f && c[2] ? c[1] !== n[c[0]] : !(c[0] in n))
            return !1;
        }
        for (; ++i < l; ) {
          c = t[i];
          var h = c[0], x = n[h], m = c[1];
          if (f && c[2]) {
            if (x === a && !(h in n))
              return !1;
          } else {
            var w = new se();
            if (r)
              var E = r(x, m, h, n, e, w);
            if (!(E === a ? or(m, x, ye | ht, r, w) : E))
              return !1;
          }
        }
        return !0;
      }
      function ra(n) {
        if (!an(n) || Dc(n))
          return !1;
        var e = Le(n) ? rs : xn;
        return e.test(ct(n));
      }
      function ic(n) {
        return sn(n) && Rn(n) == tt;
      }
      function uc(n) {
        return sn(n) && bn(n) == zn;
      }
      function oc(n) {
        return sn(n) && gi(n.length) && !!tn[Rn(n)];
      }
      function ia(n) {
        return typeof n == "function" ? n : n == null ? Hn : typeof n == "object" ? H(n) ? aa(n[0], n[1]) : oa(n) : El(n);
      }
      function lu(n) {
        if (!fr(n))
          return fs(n);
        var e = [];
        for (var t in Q(n))
          X.call(n, t) && t != "constructor" && e.push(t);
        return e;
      }
      function ac(n) {
        if (!an(n))
          return jc(n);
        var e = fr(n), t = [];
        for (var r in n)
          r == "constructor" && (e || !X.call(n, r)) || t.push(r);
        return t;
      }
      function fu(n, e) {
        return n < e;
      }
      function ua(n, e) {
        var t = -1, r = Bn(n) ? v(n.length) : [];
        return qe(n, function(i, l, f) {
          r[++t] = e(i, l, f);
        }), r;
      }
      function oa(n) {
        var e = Tu(n);
        return e.length == 1 && e[0][2] ? Ua(e[0][0], e[0][1]) : function(t) {
          return t === n || au(t, n, e);
        };
      }
      function aa(n, e) {
        return Eu(n) && Da(e) ? Ua(me(n), e) : function(t) {
          var r = Fu(t, n);
          return r === a && r === e ? Pu(t, n) : or(e, r, ye | ht);
        };
      }
      function Xr(n, e, t, r, i) {
        n !== e && ru(e, function(l, f) {
          if (i || (i = new se()), an(l))
            lc(n, e, f, t, Xr, r, i);
          else {
            var c = r ? r(Au(n, f), l, f + "", n, e, i) : a;
            c === a && (c = l), eu(n, f, c);
          }
        }, kn);
      }
      function lc(n, e, t, r, i, l, f) {
        var c = Au(n, t), h = Au(e, t), x = f.get(h);
        if (x) {
          eu(n, t, x);
          return;
        }
        var m = l ? l(c, h, t + "", n, e, f) : a, w = m === a;
        if (w) {
          var E = H(h), A = !E && Ze(h), L = !E && !A && Ht(h);
          m = h, E || A || L ? H(c) ? m = c : cn(c) ? m = On(c) : A ? (w = !1, m = ma(h, !0)) : L ? (w = !1, m = wa(h, !0)) : m = [] : cr(h) || dt(h) ? (m = c, dt(c) ? m = pl(c) : (!an(c) || Le(c)) && (m = za(h))) : w = !1;
        }
        w && (f.set(h, m), i(m, h, r, l, f), f.delete(h)), eu(n, t, m);
      }
      function la(n, e) {
        var t = n.length;
        if (t)
          return e += e < 0 ? t : 0, Me(e, t) ? n[e] : a;
      }
      function fa(n, e, t) {
        e.length ? e = un(e, function(l) {
          return H(l) ? function(f) {
            return ft(f, l.length === 1 ? l[0] : l);
          } : l;
        }) : e = [Hn];
        var r = -1;
        e = un(e, Un(M()));
        var i = ua(n, function(l, f, c) {
          var h = un(e, function(x) {
            return x(l);
          });
          return { criteria: h, index: ++r, value: l };
        });
        return Hf(i, function(l, f) {
          return yc(l, f, t);
        });
      }
      function fc(n, e) {
        return sa(n, e, function(t, r) {
          return Pu(n, r);
        });
      }
      function sa(n, e, t) {
        for (var r = -1, i = e.length, l = {}; ++r < i; ) {
          var f = e[r], c = ft(n, f);
          t(c, f) && ar(l, Ye(f, n), c);
        }
        return l;
      }
      function sc(n) {
        return function(e) {
          return ft(e, n);
        };
      }
      function su(n, e, t, r) {
        var i = r ? kf : Tt, l = -1, f = e.length, c = n;
        for (n === e && (e = On(e)), t && (c = un(n, Un(t))); ++l < f; )
          for (var h = 0, x = e[l], m = t ? t(x) : x; (h = i(c, m, h, r)) > -1; )
            c !== n && Nr.call(c, h, 1), Nr.call(n, h, 1);
        return n;
      }
      function ca(n, e) {
        for (var t = n ? e.length : 0, r = t - 1; t--; ) {
          var i = e[t];
          if (t == r || i !== l) {
            var l = i;
            Me(i) ? Nr.call(n, i, 1) : gu(n, i);
          }
        }
        return n;
      }
      function cu(n, e) {
        return n + Gr(Go() * (e - n + 1));
      }
      function cc(n, e, t, r) {
        for (var i = -1, l = vn($r((e - n) / (t || 1)), 0), f = v(l); l--; )
          f[r ? l : ++i] = n, n += t;
        return f;
      }
      function du(n, e) {
        var t = "";
        if (!n || e < 1 || e > oe)
          return t;
        do
          e % 2 && (t += n), e = Gr(e / 2), e && (n += n);
        while (e);
        return t;
      }
      function D(n, e) {
        return Iu(Wa(n, e, Hn), n + "");
      }
      function dc(n) {
        return Yo(Ft(n));
      }
      function hc(n, e) {
        var t = Ft(n);
        return li(t, lt(e, 0, t.length));
      }
      function ar(n, e, t, r) {
        if (!an(n))
          return n;
        e = Ye(e, n);
        for (var i = -1, l = e.length, f = l - 1, c = n; c != null && ++i < l; ) {
          var h = me(e[i]), x = t;
          if (h === "__proto__" || h === "constructor" || h === "prototype")
            return n;
          if (i != f) {
            var m = c[h];
            x = r ? r(m, h, c) : a, x === a && (x = an(m) ? m : Me(e[i + 1]) ? [] : {});
          }
          rr(c, h, x), c = c[h];
        }
        return n;
      }
      var da = qr ? function(n, e) {
        return qr.set(n, e), n;
      } : Hn, gc = jr ? function(n, e) {
        return jr(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Du(e),
          writable: !0
        });
      } : Hn;
      function vc(n) {
        return li(Ft(n));
      }
      function Qn(n, e, t) {
        var r = -1, i = n.length;
        e < 0 && (e = -e > i ? 0 : i + e), t = t > i ? i : t, t < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
        for (var l = v(i); ++r < i; )
          l[r] = n[r + e];
        return l;
      }
      function pc(n, e) {
        var t;
        return qe(n, function(r, i, l) {
          return t = e(r, i, l), !t;
        }), !!t;
      }
      function Qr(n, e, t) {
        var r = 0, i = n == null ? r : n.length;
        if (typeof e == "number" && e === e && i <= wr) {
          for (; r < i; ) {
            var l = r + i >>> 1, f = n[l];
            f !== null && !Nn(f) && (t ? f <= e : f < e) ? r = l + 1 : i = l;
          }
          return i;
        }
        return hu(n, e, Hn, t);
      }
      function hu(n, e, t, r) {
        var i = 0, l = n == null ? 0 : n.length;
        if (l === 0)
          return 0;
        e = t(e);
        for (var f = e !== e, c = e === null, h = Nn(e), x = e === a; i < l; ) {
          var m = Gr((i + l) / 2), w = t(n[m]), E = w !== a, A = w === null, L = w === w, P = Nn(w);
          if (f)
            var O = r || L;
          else
            x ? O = L && (r || E) : c ? O = L && E && (r || !A) : h ? O = L && E && !A && (r || !P) : A || P ? O = !1 : O = r ? w <= e : w < e;
          O ? i = m + 1 : l = m;
        }
        return yn(l, mr);
      }
      function ha(n, e) {
        for (var t = -1, r = n.length, i = 0, l = []; ++t < r; ) {
          var f = n[t], c = e ? e(f) : f;
          if (!t || !ce(c, h)) {
            var h = c;
            l[i++] = f === 0 ? 0 : f;
          }
        }
        return l;
      }
      function ga(n) {
        return typeof n == "number" ? n : Nn(n) ? nt : +n;
      }
      function Wn(n) {
        if (typeof n == "string")
          return n;
        if (H(n))
          return un(n, Wn) + "";
        if (Nn(n))
          return qo ? qo.call(n) : "";
        var e = n + "";
        return e == "0" && 1 / n == -ge ? "-0" : e;
      }
      function Ve(n, e, t) {
        var r = -1, i = Or, l = n.length, f = !0, c = [], h = c;
        if (t)
          f = !1, i = Ni;
        else if (l >= T) {
          var x = e ? null : Sc(n);
          if (x)
            return kr(x);
          f = !1, i = Jt, h = new at();
        } else
          h = e ? [] : c;
        n:
          for (; ++r < l; ) {
            var m = n[r], w = e ? e(m) : m;
            if (m = t || m !== 0 ? m : 0, f && w === w) {
              for (var E = h.length; E--; )
                if (h[E] === w)
                  continue n;
              e && h.push(w), c.push(m);
            } else
              i(h, w, t) || (h !== c && h.push(w), c.push(m));
          }
        return c;
      }
      function gu(n, e) {
        return e = Ye(e, n), n = Na(n, e), n == null || delete n[me(ne(e))];
      }
      function va(n, e, t, r) {
        return ar(n, e, t(ft(n, e)), r);
      }
      function ni(n, e, t, r) {
        for (var i = n.length, l = r ? i : -1; (r ? l-- : ++l < i) && e(n[l], l, n); )
          ;
        return t ? Qn(n, r ? 0 : l, r ? l + 1 : i) : Qn(n, r ? l + 1 : 0, r ? i : l);
      }
      function pa(n, e) {
        var t = n;
        return t instanceof j && (t = t.value()), ji(e, function(r, i) {
          return i.func.apply(i.thisArg, je([r], i.args));
        }, t);
      }
      function vu(n, e, t) {
        var r = n.length;
        if (r < 2)
          return r ? Ve(n[0]) : [];
        for (var i = -1, l = v(r); ++i < r; )
          for (var f = n[i], c = -1; ++c < r; )
            c != i && (l[i] = ir(l[i] || f, n[c], e, t));
        return Ve(wn(l, 1), e, t);
      }
      function _a(n, e, t) {
        for (var r = -1, i = n.length, l = e.length, f = {}; ++r < i; ) {
          var c = r < l ? e[r] : a;
          t(f, n[r], c);
        }
        return f;
      }
      function pu(n) {
        return cn(n) ? n : [];
      }
      function _u(n) {
        return typeof n == "function" ? n : Hn;
      }
      function Ye(n, e) {
        return H(n) ? n : Eu(n, e) ? [n] : qa(J(n));
      }
      var _c = D;
      function Ke(n, e, t) {
        var r = n.length;
        return t = t === a ? r : t, !e && t >= r ? n : Qn(n, e, t);
      }
      var xa = is || function(n) {
        return mn.clearTimeout(n);
      };
      function ma(n, e) {
        if (e)
          return n.slice();
        var t = n.length, r = Uo ? Uo(t) : new n.constructor(t);
        return n.copy(r), r;
      }
      function xu(n) {
        var e = new n.constructor(n.byteLength);
        return new Ur(e).set(new Ur(n)), e;
      }
      function xc(n, e) {
        var t = e ? xu(n.buffer) : n.buffer;
        return new n.constructor(t, n.byteOffset, n.byteLength);
      }
      function mc(n) {
        var e = new n.constructor(n.source, Z.exec(n));
        return e.lastIndex = n.lastIndex, e;
      }
      function wc(n) {
        return tr ? Q(tr.call(n)) : {};
      }
      function wa(n, e) {
        var t = e ? xu(n.buffer) : n.buffer;
        return new n.constructor(t, n.byteOffset, n.length);
      }
      function ya(n, e) {
        if (n !== e) {
          var t = n !== a, r = n === null, i = n === n, l = Nn(n), f = e !== a, c = e === null, h = e === e, x = Nn(e);
          if (!c && !x && !l && n > e || l && f && h && !c && !x || r && f && h || !t && h || !i)
            return 1;
          if (!r && !l && !x && n < e || x && t && i && !r && !l || c && t && i || !f && i || !h)
            return -1;
        }
        return 0;
      }
      function yc(n, e, t) {
        for (var r = -1, i = n.criteria, l = e.criteria, f = i.length, c = t.length; ++r < f; ) {
          var h = ya(i[r], l[r]);
          if (h) {
            if (r >= c)
              return h;
            var x = t[r];
            return h * (x == "desc" ? -1 : 1);
          }
        }
        return n.index - e.index;
      }
      function ba(n, e, t, r) {
        for (var i = -1, l = n.length, f = t.length, c = -1, h = e.length, x = vn(l - f, 0), m = v(h + x), w = !r; ++c < h; )
          m[c] = e[c];
        for (; ++i < f; )
          (w || i < l) && (m[t[i]] = n[i]);
        for (; x--; )
          m[c++] = n[i++];
        return m;
      }
      function Ca(n, e, t, r) {
        for (var i = -1, l = n.length, f = -1, c = t.length, h = -1, x = e.length, m = vn(l - c, 0), w = v(m + x), E = !r; ++i < m; )
          w[i] = n[i];
        for (var A = i; ++h < x; )
          w[A + h] = e[h];
        for (; ++f < c; )
          (E || i < l) && (w[A + t[f]] = n[i++]);
        return w;
      }
      function On(n, e) {
        var t = -1, r = n.length;
        for (e || (e = v(r)); ++t < r; )
          e[t] = n[t];
        return e;
      }
      function xe(n, e, t, r) {
        var i = !t;
        t || (t = {});
        for (var l = -1, f = e.length; ++l < f; ) {
          var c = e[l], h = r ? r(t[c], n[c], c, t, n) : a;
          h === a && (h = n[c]), i ? Se(t, c, h) : rr(t, c, h);
        }
        return t;
      }
      function bc(n, e) {
        return xe(n, Ru(n), e);
      }
      function Cc(n, e) {
        return xe(n, Fa(n), e);
      }
      function ei(n, e) {
        return function(t, r) {
          var i = H(t) ? Af : Gs, l = e ? e() : {};
          return i(t, n, M(r, 2), l);
        };
      }
      function Ot(n) {
        return D(function(e, t) {
          var r = -1, i = t.length, l = i > 1 ? t[i - 1] : a, f = i > 2 ? t[2] : a;
          for (l = n.length > 3 && typeof l == "function" ? (i--, l) : a, f && En(t[0], t[1], f) && (l = i < 3 ? a : l, i = 1), e = Q(e); ++r < i; ) {
            var c = t[r];
            c && n(e, c, r, l);
          }
          return e;
        });
      }
      function Ta(n, e) {
        return function(t, r) {
          if (t == null)
            return t;
          if (!Bn(t))
            return n(t, r);
          for (var i = t.length, l = e ? i : -1, f = Q(t); (e ? l-- : ++l < i) && r(f[l], l, f) !== !1; )
            ;
          return t;
        };
      }
      function Ra(n) {
        return function(e, t, r) {
          for (var i = -1, l = Q(e), f = r(e), c = f.length; c--; ) {
            var h = f[n ? c : ++i];
            if (t(l[h], h, l) === !1)
              break;
          }
          return e;
        };
      }
      function Tc(n, e, t) {
        var r = e & An, i = lr(n);
        function l() {
          var f = this && this !== mn && this instanceof l ? i : n;
          return f.apply(r ? t : this, arguments);
        }
        return l;
      }
      function Ea(n) {
        return function(e) {
          e = J(e);
          var t = Rt(e) ? fe(e) : a, r = t ? t[0] : e.charAt(0), i = t ? Ke(t, 1).join("") : e.slice(1);
          return r[n]() + i;
        };
      }
      function Bt(n) {
        return function(e) {
          return ji(Tl(Cl(e).replace(gf, "")), n, "");
        };
      }
      function lr(n) {
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return new n();
            case 1:
              return new n(e[0]);
            case 2:
              return new n(e[0], e[1]);
            case 3:
              return new n(e[0], e[1], e[2]);
            case 4:
              return new n(e[0], e[1], e[2], e[3]);
            case 5:
              return new n(e[0], e[1], e[2], e[3], e[4]);
            case 6:
              return new n(e[0], e[1], e[2], e[3], e[4], e[5]);
            case 7:
              return new n(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
          }
          var t = Lt(n.prototype), r = n.apply(t, e);
          return an(r) ? r : t;
        };
      }
      function Rc(n, e, t) {
        var r = lr(n);
        function i() {
          for (var l = arguments.length, f = v(l), c = l, h = kt(i); c--; )
            f[c] = arguments[c];
          var x = l < 3 && f[0] !== h && f[l - 1] !== h ? [] : $e(f, h);
          if (l -= x.length, l < t)
            return La(
              n,
              e,
              ti,
              i.placeholder,
              a,
              f,
              x,
              a,
              a,
              t - l
            );
          var m = this && this !== mn && this instanceof i ? r : n;
          return Dn(m, this, f);
        }
        return i;
      }
      function Sa(n) {
        return function(e, t, r) {
          var i = Q(e);
          if (!Bn(e)) {
            var l = M(t, 3);
            e = _n(e), t = function(c) {
              return l(i[c], c, i);
            };
          }
          var f = n(e, t, r);
          return f > -1 ? i[l ? e[f] : f] : a;
        };
      }
      function Aa(n) {
        return Ie(function(e) {
          var t = e.length, r = t, i = Jn.prototype.thru;
          for (n && e.reverse(); r--; ) {
            var l = e[r];
            if (typeof l != "function")
              throw new Zn(C);
            if (i && !f && oi(l) == "wrapper")
              var f = new Jn([], !0);
          }
          for (r = f ? r : t; ++r < t; ) {
            l = e[r];
            var c = oi(l), h = c == "wrapper" ? Cu(l) : a;
            h && Su(h[0]) && h[1] == (ie | Gn | qn | Xe) && !h[4].length && h[9] == 1 ? f = f[oi(h[0])].apply(f, h[3]) : f = l.length == 1 && Su(l) ? f[c]() : f.thru(l);
          }
          return function() {
            var x = arguments, m = x[0];
            if (f && x.length == 1 && H(m))
              return f.plant(m).value();
            for (var w = 0, E = t ? e[w].apply(this, x) : m; ++w < t; )
              E = e[w].call(this, E);
            return E;
          };
        });
      }
      function ti(n, e, t, r, i, l, f, c, h, x) {
        var m = e & ie, w = e & An, E = e & In, A = e & (Gn | Fe), L = e & gt, P = E ? a : lr(n);
        function O() {
          for (var W = arguments.length, $ = v(W), jn = W; jn--; )
            $[jn] = arguments[jn];
          if (A)
            var Sn = kt(O), $n = Pf($, Sn);
          if (r && ($ = ba($, r, i, A)), l && ($ = Ca($, l, f, A)), W -= $n, A && W < x) {
            var dn = $e($, Sn);
            return La(
              n,
              e,
              ti,
              O.placeholder,
              t,
              $,
              dn,
              c,
              h,
              x - W
            );
          }
          var de = w ? t : this, Be = E ? de[n] : n;
          return W = $.length, c ? $ = Gc($, c) : L && W > 1 && $.reverse(), m && h < W && ($.length = h), this && this !== mn && this instanceof O && (Be = P || lr(Be)), Be.apply(de, $);
        }
        return O;
      }
      function Ia(n, e) {
        return function(t, r) {
          return Qs(t, n, e(r), {});
        };
      }
      function ri(n, e) {
        return function(t, r) {
          var i;
          if (t === a && r === a)
            return e;
          if (t !== a && (i = t), r !== a) {
            if (i === a)
              return r;
            typeof t == "string" || typeof r == "string" ? (t = Wn(t), r = Wn(r)) : (t = ga(t), r = ga(r)), i = n(t, r);
          }
          return i;
        };
      }
      function mu(n) {
        return Ie(function(e) {
          return e = un(e, Un(M())), D(function(t) {
            var r = this;
            return n(e, function(i) {
              return Dn(i, r, t);
            });
          });
        });
      }
      function ii(n, e) {
        e = e === a ? " " : Wn(e);
        var t = e.length;
        if (t < 2)
          return t ? du(e, n) : e;
        var r = du(e, $r(n / Et(e)));
        return Rt(e) ? Ke(fe(r), 0, n).join("") : r.slice(0, n);
      }
      function Ec(n, e, t, r) {
        var i = e & An, l = lr(n);
        function f() {
          for (var c = -1, h = arguments.length, x = -1, m = r.length, w = v(m + h), E = this && this !== mn && this instanceof f ? l : n; ++x < m; )
            w[x] = r[x];
          for (; h--; )
            w[x++] = arguments[++c];
          return Dn(E, i ? t : this, w);
        }
        return f;
      }
      function Ma(n) {
        return function(e, t, r) {
          return r && typeof r != "number" && En(e, t, r) && (t = r = a), e = Oe(e), t === a ? (t = e, e = 0) : t = Oe(t), r = r === a ? e < t ? 1 : -1 : Oe(r), cc(e, t, r, n);
        };
      }
      function ui(n) {
        return function(e, t) {
          return typeof e == "string" && typeof t == "string" || (e = ee(e), t = ee(t)), n(e, t);
        };
      }
      function La(n, e, t, r, i, l, f, c, h, x) {
        var m = e & Gn, w = m ? f : a, E = m ? a : f, A = m ? l : a, L = m ? a : l;
        e |= m ? qn : Pe, e &= ~(m ? Pe : qn), e & pn || (e &= ~(An | In));
        var P = [
          n,
          e,
          i,
          A,
          w,
          L,
          E,
          c,
          h,
          x
        ], O = t.apply(a, P);
        return Su(n) && ja(O, P), O.placeholder = r, $a(O, n, e);
      }
      function wu(n) {
        var e = gn[n];
        return function(t, r) {
          if (t = ee(t), r = r == null ? 0 : yn(F(r), 292), r && $o(t)) {
            var i = (J(t) + "e").split("e"), l = e(i[0] + "e" + (+i[1] + r));
            return i = (J(l) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
          }
          return e(t);
        };
      }
      var Sc = It && 1 / kr(new It([, -0]))[1] == ge ? function(n) {
        return new It(n);
      } : Nu;
      function Oa(n) {
        return function(e) {
          var t = bn(e);
          return t == Pn ? Zi(e) : t == zn ? $f(e) : Ff(e, n(e));
        };
      }
      function Ae(n, e, t, r, i, l, f, c) {
        var h = e & In;
        if (!h && typeof n != "function")
          throw new Zn(C);
        var x = r ? r.length : 0;
        if (x || (e &= ~(qn | Pe), r = i = a), f = f === a ? f : vn(F(f), 0), c = c === a ? c : F(c), x -= i ? i.length : 0, e & Pe) {
          var m = r, w = i;
          r = i = a;
        }
        var E = h ? a : Cu(n), A = [
          n,
          e,
          t,
          r,
          i,
          m,
          w,
          l,
          f,
          c
        ];
        if (E && Nc(A, E), n = A[0], e = A[1], t = A[2], r = A[3], i = A[4], c = A[9] = A[9] === a ? h ? 0 : n.length : vn(A[9] - x, 0), !c && e & (Gn | Fe) && (e &= ~(Gn | Fe)), !e || e == An)
          var L = Tc(n, e, t);
        else
          e == Gn || e == Fe ? L = Rc(n, e, c) : (e == qn || e == (An | qn)) && !i.length ? L = Ec(n, e, t, r) : L = ti.apply(a, A);
        var P = E ? da : ja;
        return $a(P(L, A), n, e);
      }
      function Ba(n, e, t, r) {
        return n === a || ce(n, At[t]) && !X.call(r, t) ? e : n;
      }
      function ka(n, e, t, r, i, l) {
        return an(n) && an(e) && (l.set(e, n), Xr(n, e, a, ka, l), l.delete(e)), n;
      }
      function Ac(n) {
        return cr(n) ? a : n;
      }
      function Ha(n, e, t, r, i, l) {
        var f = t & ye, c = n.length, h = e.length;
        if (c != h && !(f && h > c))
          return !1;
        var x = l.get(n), m = l.get(e);
        if (x && m)
          return x == e && m == n;
        var w = -1, E = !0, A = t & ht ? new at() : a;
        for (l.set(n, e), l.set(e, n); ++w < c; ) {
          var L = n[w], P = e[w];
          if (r)
            var O = f ? r(P, L, w, e, n, l) : r(L, P, w, n, e, l);
          if (O !== a) {
            if (O)
              continue;
            E = !1;
            break;
          }
          if (A) {
            if (!$i(e, function(W, $) {
              if (!Jt(A, $) && (L === W || i(L, W, t, r, l)))
                return A.push($);
            })) {
              E = !1;
              break;
            }
          } else if (!(L === P || i(L, P, t, r, l))) {
            E = !1;
            break;
          }
        }
        return l.delete(n), l.delete(e), E;
      }
      function Ic(n, e, t, r, i, l, f) {
        switch (t) {
          case We:
            if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
              return !1;
            n = n.buffer, e = e.buffer;
          case ae:
            return !(n.byteLength != e.byteLength || !l(new Ur(n), new Ur(e)));
          case ve:
          case be:
          case pe:
            return ce(+n, +e);
          case pt:
            return n.name == e.name && n.message == e.message;
          case tt:
          case Ce:
            return n == e + "";
          case Pn:
            var c = Zi;
          case zn:
            var h = r & ye;
            if (c || (c = kr), n.size != e.size && !h)
              return !1;
            var x = f.get(n);
            if (x)
              return x == e;
            r |= ht, f.set(n, e);
            var m = Ha(c(n), c(e), r, i, l, f);
            return f.delete(n), m;
          case mt:
            if (tr)
              return tr.call(n) == tr.call(e);
        }
        return !1;
      }
      function Mc(n, e, t, r, i, l) {
        var f = t & ye, c = yu(n), h = c.length, x = yu(e), m = x.length;
        if (h != m && !f)
          return !1;
        for (var w = h; w--; ) {
          var E = c[w];
          if (!(f ? E in e : X.call(e, E)))
            return !1;
        }
        var A = l.get(n), L = l.get(e);
        if (A && L)
          return A == e && L == n;
        var P = !0;
        l.set(n, e), l.set(e, n);
        for (var O = f; ++w < h; ) {
          E = c[w];
          var W = n[E], $ = e[E];
          if (r)
            var jn = f ? r($, W, E, e, n, l) : r(W, $, E, n, e, l);
          if (!(jn === a ? W === $ || i(W, $, t, r, l) : jn)) {
            P = !1;
            break;
          }
          O || (O = E == "constructor");
        }
        if (P && !O) {
          var Sn = n.constructor, $n = e.constructor;
          Sn != $n && "constructor" in n && "constructor" in e && !(typeof Sn == "function" && Sn instanceof Sn && typeof $n == "function" && $n instanceof $n) && (P = !1);
        }
        return l.delete(n), l.delete(e), P;
      }
      function Ie(n) {
        return Iu(Wa(n, a, Za), n + "");
      }
      function yu(n) {
        return ea(n, _n, Ru);
      }
      function bu(n) {
        return ea(n, kn, Fa);
      }
      var Cu = qr ? function(n) {
        return qr.get(n);
      } : Nu;
      function oi(n) {
        for (var e = n.name + "", t = Mt[e], r = X.call(Mt, e) ? t.length : 0; r--; ) {
          var i = t[r], l = i.func;
          if (l == null || l == n)
            return i.name;
        }
        return e;
      }
      function kt(n) {
        var e = X.call(o, "placeholder") ? o : n;
        return e.placeholder;
      }
      function M() {
        var n = o.iteratee || Uu;
        return n = n === Uu ? ia : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function ai(n, e) {
        var t = n.__data__;
        return zc(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
      }
      function Tu(n) {
        for (var e = _n(n), t = e.length; t--; ) {
          var r = e[t], i = n[r];
          e[t] = [r, i, Da(i)];
        }
        return e;
      }
      function st(n, e) {
        var t = Wf(n, e);
        return ra(t) ? t : a;
      }
      function Lc(n) {
        var e = X.call(n, ut), t = n[ut];
        try {
          n[ut] = a;
          var r = !0;
        } catch {
        }
        var i = zr.call(n);
        return r && (e ? n[ut] = t : delete n[ut]), i;
      }
      var Ru = Xi ? function(n) {
        return n == null ? [] : (n = Q(n), Ne(Xi(n), function(e) {
          return No.call(n, e);
        }));
      } : ju, Fa = Xi ? function(n) {
        for (var e = []; n; )
          je(e, Ru(n)), n = Wr(n);
        return e;
      } : ju, bn = Rn;
      (Qi && bn(new Qi(new ArrayBuffer(1))) != We || Qt && bn(new Qt()) != Pn || nu && bn(nu.resolve()) != Ut || It && bn(new It()) != zn || nr && bn(new nr()) != Ue) && (bn = function(n) {
        var e = Rn(n), t = e == Vn ? n.constructor : a, r = t ? ct(t) : "";
        if (r)
          switch (r) {
            case hs:
              return We;
            case gs:
              return Pn;
            case vs:
              return Ut;
            case ps:
              return zn;
            case _s:
              return Ue;
          }
        return e;
      });
      function Oc(n, e, t) {
        for (var r = -1, i = t.length; ++r < i; ) {
          var l = t[r], f = l.size;
          switch (l.type) {
            case "drop":
              n += f;
              break;
            case "dropRight":
              e -= f;
              break;
            case "take":
              e = yn(e, n + f);
              break;
            case "takeRight":
              n = vn(n, e - f);
              break;
          }
        }
        return { start: n, end: e };
      }
      function Bc(n) {
        var e = n.match(ki);
        return e ? e[1].split(s) : [];
      }
      function Pa(n, e, t) {
        e = Ye(e, n);
        for (var r = -1, i = e.length, l = !1; ++r < i; ) {
          var f = me(e[r]);
          if (!(l = n != null && t(n, f)))
            break;
          n = n[f];
        }
        return l || ++r != i ? l : (i = n == null ? 0 : n.length, !!i && gi(i) && Me(f, i) && (H(n) || dt(n)));
      }
      function kc(n) {
        var e = n.length, t = new n.constructor(e);
        return e && typeof n[0] == "string" && X.call(n, "index") && (t.index = n.index, t.input = n.input), t;
      }
      function za(n) {
        return typeof n.constructor == "function" && !fr(n) ? Lt(Wr(n)) : {};
      }
      function Hc(n, e, t) {
        var r = n.constructor;
        switch (e) {
          case ae:
            return xu(n);
          case ve:
          case be:
            return new r(+n);
          case We:
            return xc(n, t);
          case wt:
          case yt:
          case rt:
          case Wt:
          case Nt:
          case jt:
          case $t:
          case Gt:
          case qt:
            return wa(n, t);
          case Pn:
            return new r();
          case pe:
          case Ce:
            return new r(n);
          case tt:
            return mc(n);
          case zn:
            return new r();
          case mt:
            return wc(n);
        }
      }
      function Fc(n, e) {
        var t = e.length;
        if (!t)
          return n;
        var r = t - 1;
        return e[r] = (t > 1 ? "& " : "") + e[r], e = e.join(t > 2 ? ", " : " "), n.replace(Bi, `{
/* [wrapped with ` + e + `] */
`);
      }
      function Pc(n) {
        return H(n) || dt(n) || !!(jo && n && n[jo]);
      }
      function Me(n, e) {
        var t = typeof n;
        return e = e ?? oe, !!e && (t == "number" || t != "symbol" && fn.test(n)) && n > -1 && n % 1 == 0 && n < e;
      }
      function En(n, e, t) {
        if (!an(t))
          return !1;
        var r = typeof e;
        return (r == "number" ? Bn(t) && Me(e, t.length) : r == "string" && e in t) ? ce(t[e], n) : !1;
      }
      function Eu(n, e) {
        if (H(n))
          return !1;
        var t = typeof n;
        return t == "number" || t == "symbol" || t == "boolean" || n == null || Nn(n) ? !0 : Ar.test(n) || !Sr.test(n) || e != null && n in Q(e);
      }
      function zc(n) {
        var e = typeof n;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? n !== "__proto__" : n === null;
      }
      function Su(n) {
        var e = oi(n), t = o[e];
        if (typeof t != "function" || !(e in j.prototype))
          return !1;
        if (n === t)
          return !0;
        var r = Cu(t);
        return !!r && n === r[0];
      }
      function Dc(n) {
        return !!Do && Do in n;
      }
      var Uc = Fr ? Le : $u;
      function fr(n) {
        var e = n && n.constructor, t = typeof e == "function" && e.prototype || At;
        return n === t;
      }
      function Da(n) {
        return n === n && !an(n);
      }
      function Ua(n, e) {
        return function(t) {
          return t == null ? !1 : t[n] === e && (e !== a || n in Q(t));
        };
      }
      function Wc(n) {
        var e = di(n, function(r) {
          return t.size === hn && t.clear(), r;
        }), t = e.cache;
        return e;
      }
      function Nc(n, e) {
        var t = n[1], r = e[1], i = t | r, l = i < (An | In | ie), f = r == ie && t == Gn || r == ie && t == Xe && n[7].length <= e[8] || r == (ie | Xe) && e[7].length <= e[8] && t == Gn;
        if (!(l || f))
          return n;
        r & An && (n[2] = e[2], i |= t & An ? 0 : pn);
        var c = e[3];
        if (c) {
          var h = n[3];
          n[3] = h ? ba(h, c, e[4]) : c, n[4] = h ? $e(n[3], K) : e[4];
        }
        return c = e[5], c && (h = n[5], n[5] = h ? Ca(h, c, e[6]) : c, n[6] = h ? $e(n[5], K) : e[6]), c = e[7], c && (n[7] = c), r & ie && (n[8] = n[8] == null ? e[8] : yn(n[8], e[8])), n[9] == null && (n[9] = e[9]), n[0] = e[0], n[1] = i, n;
      }
      function jc(n) {
        var e = [];
        if (n != null)
          for (var t in Q(n))
            e.push(t);
        return e;
      }
      function $c(n) {
        return zr.call(n);
      }
      function Wa(n, e, t) {
        return e = vn(e === a ? n.length - 1 : e, 0), function() {
          for (var r = arguments, i = -1, l = vn(r.length - e, 0), f = v(l); ++i < l; )
            f[i] = r[e + i];
          i = -1;
          for (var c = v(e + 1); ++i < e; )
            c[i] = r[i];
          return c[e] = t(f), Dn(n, this, c);
        };
      }
      function Na(n, e) {
        return e.length < 2 ? n : ft(n, Qn(e, 0, -1));
      }
      function Gc(n, e) {
        for (var t = n.length, r = yn(e.length, t), i = On(n); r--; ) {
          var l = e[r];
          n[r] = Me(l, t) ? i[l] : a;
        }
        return n;
      }
      function Au(n, e) {
        if (!(e === "constructor" && typeof n[e] == "function") && e != "__proto__")
          return n[e];
      }
      var ja = Ga(da), sr = os || function(n, e) {
        return mn.setTimeout(n, e);
      }, Iu = Ga(gc);
      function $a(n, e, t) {
        var r = e + "";
        return Iu(n, Fc(r, qc(Bc(r), t)));
      }
      function Ga(n) {
        var e = 0, t = 0;
        return function() {
          var r = ss(), i = ue - (r - t);
          if (t = r, i > 0) {
            if (++e >= pr)
              return arguments[0];
          } else
            e = 0;
          return n.apply(a, arguments);
        };
      }
      function li(n, e) {
        var t = -1, r = n.length, i = r - 1;
        for (e = e === a ? r : e; ++t < e; ) {
          var l = cu(t, i), f = n[l];
          n[l] = n[t], n[t] = f;
        }
        return n.length = e, n;
      }
      var qa = Wc(function(n) {
        var e = [];
        return n.charCodeAt(0) === 46 && e.push(""), n.replace(Li, function(t, r, i, l) {
          e.push(i ? l.replace(B, "$1") : r || t);
        }), e;
      });
      function me(n) {
        if (typeof n == "string" || Nn(n))
          return n;
        var e = n + "";
        return e == "0" && 1 / n == -ge ? "-0" : e;
      }
      function ct(n) {
        if (n != null) {
          try {
            return Pr.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function qc(n, e) {
        return Kn(Si, function(t) {
          var r = "_." + t[0];
          e & t[1] && !Or(n, r) && n.push(r);
        }), n.sort();
      }
      function Va(n) {
        if (n instanceof j)
          return n.clone();
        var e = new Jn(n.__wrapped__, n.__chain__);
        return e.__actions__ = On(n.__actions__), e.__index__ = n.__index__, e.__values__ = n.__values__, e;
      }
      function Vc(n, e, t) {
        (t ? En(n, e, t) : e === a) ? e = 1 : e = vn(F(e), 0);
        var r = n == null ? 0 : n.length;
        if (!r || e < 1)
          return [];
        for (var i = 0, l = 0, f = v($r(r / e)); i < r; )
          f[l++] = Qn(n, i, i += e);
        return f;
      }
      function Yc(n) {
        for (var e = -1, t = n == null ? 0 : n.length, r = 0, i = []; ++e < t; ) {
          var l = n[e];
          l && (i[r++] = l);
        }
        return i;
      }
      function Kc() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var e = v(n - 1), t = arguments[0], r = n; r--; )
          e[r - 1] = arguments[r];
        return je(H(t) ? On(t) : [t], wn(e, 1));
      }
      var Zc = D(function(n, e) {
        return cn(n) ? ir(n, wn(e, 1, cn, !0)) : [];
      }), Jc = D(function(n, e) {
        var t = ne(e);
        return cn(t) && (t = a), cn(n) ? ir(n, wn(e, 1, cn, !0), M(t, 2)) : [];
      }), Xc = D(function(n, e) {
        var t = ne(e);
        return cn(t) && (t = a), cn(n) ? ir(n, wn(e, 1, cn, !0), a, t) : [];
      });
      function Qc(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (e = t || e === a ? 1 : F(e), Qn(n, e < 0 ? 0 : e, r)) : [];
      }
      function nd(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (e = t || e === a ? 1 : F(e), e = r - e, Qn(n, 0, e < 0 ? 0 : e)) : [];
      }
      function ed(n, e) {
        return n && n.length ? ni(n, M(e, 3), !0, !0) : [];
      }
      function td(n, e) {
        return n && n.length ? ni(n, M(e, 3), !0) : [];
      }
      function rd(n, e, t, r) {
        var i = n == null ? 0 : n.length;
        return i ? (t && typeof t != "number" && En(n, e, t) && (t = 0, r = i), Ks(n, e, t, r)) : [];
      }
      function Ya(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = t == null ? 0 : F(t);
        return i < 0 && (i = vn(r + i, 0)), Br(n, M(e, 3), i);
      }
      function Ka(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r - 1;
        return t !== a && (i = F(t), i = t < 0 ? vn(r + i, 0) : yn(i, r - 1)), Br(n, M(e, 3), i, !0);
      }
      function Za(n) {
        var e = n == null ? 0 : n.length;
        return e ? wn(n, 1) : [];
      }
      function id(n) {
        var e = n == null ? 0 : n.length;
        return e ? wn(n, ge) : [];
      }
      function ud(n, e) {
        var t = n == null ? 0 : n.length;
        return t ? (e = e === a ? 1 : F(e), wn(n, e)) : [];
      }
      function od(n) {
        for (var e = -1, t = n == null ? 0 : n.length, r = {}; ++e < t; ) {
          var i = n[e];
          r[i[0]] = i[1];
        }
        return r;
      }
      function Ja(n) {
        return n && n.length ? n[0] : a;
      }
      function ad(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = t == null ? 0 : F(t);
        return i < 0 && (i = vn(r + i, 0)), Tt(n, e, i);
      }
      function ld(n) {
        var e = n == null ? 0 : n.length;
        return e ? Qn(n, 0, -1) : [];
      }
      var fd = D(function(n) {
        var e = un(n, pu);
        return e.length && e[0] === n[0] ? ou(e) : [];
      }), sd = D(function(n) {
        var e = ne(n), t = un(n, pu);
        return e === ne(t) ? e = a : t.pop(), t.length && t[0] === n[0] ? ou(t, M(e, 2)) : [];
      }), cd = D(function(n) {
        var e = ne(n), t = un(n, pu);
        return e = typeof e == "function" ? e : a, e && t.pop(), t.length && t[0] === n[0] ? ou(t, a, e) : [];
      });
      function dd(n, e) {
        return n == null ? "" : ls.call(n, e);
      }
      function ne(n) {
        var e = n == null ? 0 : n.length;
        return e ? n[e - 1] : a;
      }
      function hd(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r;
        return t !== a && (i = F(t), i = i < 0 ? vn(r + i, 0) : yn(i, r - 1)), e === e ? qf(n, e, i) : Br(n, Lo, i, !0);
      }
      function gd(n, e) {
        return n && n.length ? la(n, F(e)) : a;
      }
      var vd = D(Xa);
      function Xa(n, e) {
        return n && n.length && e && e.length ? su(n, e) : n;
      }
      function pd(n, e, t) {
        return n && n.length && e && e.length ? su(n, e, M(t, 2)) : n;
      }
      function _d(n, e, t) {
        return n && n.length && e && e.length ? su(n, e, a, t) : n;
      }
      var xd = Ie(function(n, e) {
        var t = n == null ? 0 : n.length, r = tu(n, e);
        return ca(n, un(e, function(i) {
          return Me(i, t) ? +i : i;
        }).sort(ya)), r;
      });
      function md(n, e) {
        var t = [];
        if (!(n && n.length))
          return t;
        var r = -1, i = [], l = n.length;
        for (e = M(e, 3); ++r < l; ) {
          var f = n[r];
          e(f, r, n) && (t.push(f), i.push(r));
        }
        return ca(n, i), t;
      }
      function Mu(n) {
        return n == null ? n : ds.call(n);
      }
      function wd(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (t && typeof t != "number" && En(n, e, t) ? (e = 0, t = r) : (e = e == null ? 0 : F(e), t = t === a ? r : F(t)), Qn(n, e, t)) : [];
      }
      function yd(n, e) {
        return Qr(n, e);
      }
      function bd(n, e, t) {
        return hu(n, e, M(t, 2));
      }
      function Cd(n, e) {
        var t = n == null ? 0 : n.length;
        if (t) {
          var r = Qr(n, e);
          if (r < t && ce(n[r], e))
            return r;
        }
        return -1;
      }
      function Td(n, e) {
        return Qr(n, e, !0);
      }
      function Rd(n, e, t) {
        return hu(n, e, M(t, 2), !0);
      }
      function Ed(n, e) {
        var t = n == null ? 0 : n.length;
        if (t) {
          var r = Qr(n, e, !0) - 1;
          if (ce(n[r], e))
            return r;
        }
        return -1;
      }
      function Sd(n) {
        return n && n.length ? ha(n) : [];
      }
      function Ad(n, e) {
        return n && n.length ? ha(n, M(e, 2)) : [];
      }
      function Id(n) {
        var e = n == null ? 0 : n.length;
        return e ? Qn(n, 1, e) : [];
      }
      function Md(n, e, t) {
        return n && n.length ? (e = t || e === a ? 1 : F(e), Qn(n, 0, e < 0 ? 0 : e)) : [];
      }
      function Ld(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (e = t || e === a ? 1 : F(e), e = r - e, Qn(n, e < 0 ? 0 : e, r)) : [];
      }
      function Od(n, e) {
        return n && n.length ? ni(n, M(e, 3), !1, !0) : [];
      }
      function Bd(n, e) {
        return n && n.length ? ni(n, M(e, 3)) : [];
      }
      var kd = D(function(n) {
        return Ve(wn(n, 1, cn, !0));
      }), Hd = D(function(n) {
        var e = ne(n);
        return cn(e) && (e = a), Ve(wn(n, 1, cn, !0), M(e, 2));
      }), Fd = D(function(n) {
        var e = ne(n);
        return e = typeof e == "function" ? e : a, Ve(wn(n, 1, cn, !0), a, e);
      });
      function Pd(n) {
        return n && n.length ? Ve(n) : [];
      }
      function zd(n, e) {
        return n && n.length ? Ve(n, M(e, 2)) : [];
      }
      function Dd(n, e) {
        return e = typeof e == "function" ? e : a, n && n.length ? Ve(n, a, e) : [];
      }
      function Lu(n) {
        if (!(n && n.length))
          return [];
        var e = 0;
        return n = Ne(n, function(t) {
          if (cn(t))
            return e = vn(t.length, e), !0;
        }), Yi(e, function(t) {
          return un(n, Gi(t));
        });
      }
      function Qa(n, e) {
        if (!(n && n.length))
          return [];
        var t = Lu(n);
        return e == null ? t : un(t, function(r) {
          return Dn(e, a, r);
        });
      }
      var Ud = D(function(n, e) {
        return cn(n) ? ir(n, e) : [];
      }), Wd = D(function(n) {
        return vu(Ne(n, cn));
      }), Nd = D(function(n) {
        var e = ne(n);
        return cn(e) && (e = a), vu(Ne(n, cn), M(e, 2));
      }), jd = D(function(n) {
        var e = ne(n);
        return e = typeof e == "function" ? e : a, vu(Ne(n, cn), a, e);
      }), $d = D(Lu);
      function Gd(n, e) {
        return _a(n || [], e || [], rr);
      }
      function qd(n, e) {
        return _a(n || [], e || [], ar);
      }
      var Vd = D(function(n) {
        var e = n.length, t = e > 1 ? n[e - 1] : a;
        return t = typeof t == "function" ? (n.pop(), t) : a, Qa(n, t);
      });
      function nl(n) {
        var e = o(n);
        return e.__chain__ = !0, e;
      }
      function Yd(n, e) {
        return e(n), n;
      }
      function fi(n, e) {
        return e(n);
      }
      var Kd = Ie(function(n) {
        var e = n.length, t = e ? n[0] : 0, r = this.__wrapped__, i = function(l) {
          return tu(l, n);
        };
        return e > 1 || this.__actions__.length || !(r instanceof j) || !Me(t) ? this.thru(i) : (r = r.slice(t, +t + (e ? 1 : 0)), r.__actions__.push({
          func: fi,
          args: [i],
          thisArg: a
        }), new Jn(r, this.__chain__).thru(function(l) {
          return e && !l.length && l.push(a), l;
        }));
      });
      function Zd() {
        return nl(this);
      }
      function Jd() {
        return new Jn(this.value(), this.__chain__);
      }
      function Xd() {
        this.__values__ === a && (this.__values__ = gl(this.value()));
        var n = this.__index__ >= this.__values__.length, e = n ? a : this.__values__[this.__index__++];
        return { done: n, value: e };
      }
      function Qd() {
        return this;
      }
      function nh(n) {
        for (var e, t = this; t instanceof Yr; ) {
          var r = Va(t);
          r.__index__ = 0, r.__values__ = a, e ? i.__wrapped__ = r : e = r;
          var i = r;
          t = t.__wrapped__;
        }
        return i.__wrapped__ = n, e;
      }
      function eh() {
        var n = this.__wrapped__;
        if (n instanceof j) {
          var e = n;
          return this.__actions__.length && (e = new j(this)), e = e.reverse(), e.__actions__.push({
            func: fi,
            args: [Mu],
            thisArg: a
          }), new Jn(e, this.__chain__);
        }
        return this.thru(Mu);
      }
      function th() {
        return pa(this.__wrapped__, this.__actions__);
      }
      var rh = ei(function(n, e, t) {
        X.call(n, t) ? ++n[t] : Se(n, t, 1);
      });
      function ih(n, e, t) {
        var r = H(n) ? Io : Ys;
        return t && En(n, e, t) && (e = a), r(n, M(e, 3));
      }
      function uh(n, e) {
        var t = H(n) ? Ne : Qo;
        return t(n, M(e, 3));
      }
      var oh = Sa(Ya), ah = Sa(Ka);
      function lh(n, e) {
        return wn(si(n, e), 1);
      }
      function fh(n, e) {
        return wn(si(n, e), ge);
      }
      function sh(n, e, t) {
        return t = t === a ? 1 : F(t), wn(si(n, e), t);
      }
      function el(n, e) {
        var t = H(n) ? Kn : qe;
        return t(n, M(e, 3));
      }
      function tl(n, e) {
        var t = H(n) ? If : Xo;
        return t(n, M(e, 3));
      }
      var ch = ei(function(n, e, t) {
        X.call(n, t) ? n[t].push(e) : Se(n, t, [e]);
      });
      function dh(n, e, t, r) {
        n = Bn(n) ? n : Ft(n), t = t && !r ? F(t) : 0;
        var i = n.length;
        return t < 0 && (t = vn(i + t, 0)), vi(n) ? t <= i && n.indexOf(e, t) > -1 : !!i && Tt(n, e, t) > -1;
      }
      var hh = D(function(n, e, t) {
        var r = -1, i = typeof e == "function", l = Bn(n) ? v(n.length) : [];
        return qe(n, function(f) {
          l[++r] = i ? Dn(e, f, t) : ur(f, e, t);
        }), l;
      }), gh = ei(function(n, e, t) {
        Se(n, t, e);
      });
      function si(n, e) {
        var t = H(n) ? un : ua;
        return t(n, M(e, 3));
      }
      function vh(n, e, t, r) {
        return n == null ? [] : (H(e) || (e = e == null ? [] : [e]), t = r ? a : t, H(t) || (t = t == null ? [] : [t]), fa(n, e, t));
      }
      var ph = ei(function(n, e, t) {
        n[t ? 0 : 1].push(e);
      }, function() {
        return [[], []];
      });
      function _h(n, e, t) {
        var r = H(n) ? ji : Bo, i = arguments.length < 3;
        return r(n, M(e, 4), t, i, qe);
      }
      function xh(n, e, t) {
        var r = H(n) ? Mf : Bo, i = arguments.length < 3;
        return r(n, M(e, 4), t, i, Xo);
      }
      function mh(n, e) {
        var t = H(n) ? Ne : Qo;
        return t(n, hi(M(e, 3)));
      }
      function wh(n) {
        var e = H(n) ? Yo : dc;
        return e(n);
      }
      function yh(n, e, t) {
        (t ? En(n, e, t) : e === a) ? e = 1 : e = F(e);
        var r = H(n) ? js : hc;
        return r(n, e);
      }
      function bh(n) {
        var e = H(n) ? $s : vc;
        return e(n);
      }
      function Ch(n) {
        if (n == null)
          return 0;
        if (Bn(n))
          return vi(n) ? Et(n) : n.length;
        var e = bn(n);
        return e == Pn || e == zn ? n.size : lu(n).length;
      }
      function Th(n, e, t) {
        var r = H(n) ? $i : pc;
        return t && En(n, e, t) && (e = a), r(n, M(e, 3));
      }
      var Rh = D(function(n, e) {
        if (n == null)
          return [];
        var t = e.length;
        return t > 1 && En(n, e[0], e[1]) ? e = [] : t > 2 && En(e[0], e[1], e[2]) && (e = [e[0]]), fa(n, wn(e, 1), []);
      }), ci = us || function() {
        return mn.Date.now();
      };
      function Eh(n, e) {
        if (typeof e != "function")
          throw new Zn(C);
        return n = F(n), function() {
          if (--n < 1)
            return e.apply(this, arguments);
        };
      }
      function rl(n, e, t) {
        return e = t ? a : e, e = n && e == null ? n.length : e, Ae(n, ie, a, a, a, a, e);
      }
      function il(n, e) {
        var t;
        if (typeof e != "function")
          throw new Zn(C);
        return n = F(n), function() {
          return --n > 0 && (t = e.apply(this, arguments)), n <= 1 && (e = a), t;
        };
      }
      var Ou = D(function(n, e, t) {
        var r = An;
        if (t.length) {
          var i = $e(t, kt(Ou));
          r |= qn;
        }
        return Ae(n, r, e, t, i);
      }), ul = D(function(n, e, t) {
        var r = An | In;
        if (t.length) {
          var i = $e(t, kt(ul));
          r |= qn;
        }
        return Ae(e, r, n, t, i);
      });
      function ol(n, e, t) {
        e = t ? a : e;
        var r = Ae(n, Gn, a, a, a, a, a, e);
        return r.placeholder = ol.placeholder, r;
      }
      function al(n, e, t) {
        e = t ? a : e;
        var r = Ae(n, Fe, a, a, a, a, a, e);
        return r.placeholder = al.placeholder, r;
      }
      function ll(n, e, t) {
        var r, i, l, f, c, h, x = 0, m = !1, w = !1, E = !0;
        if (typeof n != "function")
          throw new Zn(C);
        e = ee(e) || 0, an(t) && (m = !!t.leading, w = "maxWait" in t, l = w ? vn(ee(t.maxWait) || 0, e) : l, E = "trailing" in t ? !!t.trailing : E);
        function A(dn) {
          var de = r, Be = i;
          return r = i = a, x = dn, f = n.apply(Be, de), f;
        }
        function L(dn) {
          return x = dn, c = sr(W, e), m ? A(dn) : f;
        }
        function P(dn) {
          var de = dn - h, Be = dn - x, Sl = e - de;
          return w ? yn(Sl, l - Be) : Sl;
        }
        function O(dn) {
          var de = dn - h, Be = dn - x;
          return h === a || de >= e || de < 0 || w && Be >= l;
        }
        function W() {
          var dn = ci();
          if (O(dn))
            return $(dn);
          c = sr(W, P(dn));
        }
        function $(dn) {
          return c = a, E && r ? A(dn) : (r = i = a, f);
        }
        function jn() {
          c !== a && xa(c), x = 0, r = h = i = c = a;
        }
        function Sn() {
          return c === a ? f : $(ci());
        }
        function $n() {
          var dn = ci(), de = O(dn);
          if (r = arguments, i = this, h = dn, de) {
            if (c === a)
              return L(h);
            if (w)
              return xa(c), c = sr(W, e), A(h);
          }
          return c === a && (c = sr(W, e)), f;
        }
        return $n.cancel = jn, $n.flush = Sn, $n;
      }
      var Sh = D(function(n, e) {
        return Jo(n, 1, e);
      }), Ah = D(function(n, e, t) {
        return Jo(n, ee(e) || 0, t);
      });
      function Ih(n) {
        return Ae(n, gt);
      }
      function di(n, e) {
        if (typeof n != "function" || e != null && typeof e != "function")
          throw new Zn(C);
        var t = function() {
          var r = arguments, i = e ? e.apply(this, r) : r[0], l = t.cache;
          if (l.has(i))
            return l.get(i);
          var f = n.apply(this, r);
          return t.cache = l.set(i, f) || l, f;
        };
        return t.cache = new (di.Cache || Ee)(), t;
      }
      di.Cache = Ee;
      function hi(n) {
        if (typeof n != "function")
          throw new Zn(C);
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, e[0]);
            case 2:
              return !n.call(this, e[0], e[1]);
            case 3:
              return !n.call(this, e[0], e[1], e[2]);
          }
          return !n.apply(this, e);
        };
      }
      function Mh(n) {
        return il(2, n);
      }
      var Lh = _c(function(n, e) {
        e = e.length == 1 && H(e[0]) ? un(e[0], Un(M())) : un(wn(e, 1), Un(M()));
        var t = e.length;
        return D(function(r) {
          for (var i = -1, l = yn(r.length, t); ++i < l; )
            r[i] = e[i].call(this, r[i]);
          return Dn(n, this, r);
        });
      }), Bu = D(function(n, e) {
        var t = $e(e, kt(Bu));
        return Ae(n, qn, a, e, t);
      }), fl = D(function(n, e) {
        var t = $e(e, kt(fl));
        return Ae(n, Pe, a, e, t);
      }), Oh = Ie(function(n, e) {
        return Ae(n, Xe, a, a, a, e);
      });
      function Bh(n, e) {
        if (typeof n != "function")
          throw new Zn(C);
        return e = e === a ? e : F(e), D(n, e);
      }
      function kh(n, e) {
        if (typeof n != "function")
          throw new Zn(C);
        return e = e == null ? 0 : vn(F(e), 0), D(function(t) {
          var r = t[e], i = Ke(t, 0, e);
          return r && je(i, r), Dn(n, this, i);
        });
      }
      function Hh(n, e, t) {
        var r = !0, i = !0;
        if (typeof n != "function")
          throw new Zn(C);
        return an(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), ll(n, e, {
          leading: r,
          maxWait: e,
          trailing: i
        });
      }
      function Fh(n) {
        return rl(n, 1);
      }
      function Ph(n, e) {
        return Bu(_u(e), n);
      }
      function zh() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return H(n) ? n : [n];
      }
      function Dh(n) {
        return Xn(n, Tn);
      }
      function Uh(n, e) {
        return e = typeof e == "function" ? e : a, Xn(n, Tn, e);
      }
      function Wh(n) {
        return Xn(n, nn | Tn);
      }
      function Nh(n, e) {
        return e = typeof e == "function" ? e : a, Xn(n, nn | Tn, e);
      }
      function jh(n, e) {
        return e == null || Zo(n, e, _n(e));
      }
      function ce(n, e) {
        return n === e || n !== n && e !== e;
      }
      var $h = ui(uu), Gh = ui(function(n, e) {
        return n >= e;
      }), dt = ta(function() {
        return arguments;
      }()) ? ta : function(n) {
        return sn(n) && X.call(n, "callee") && !No.call(n, "callee");
      }, H = v.isArray, qh = Co ? Un(Co) : nc;
      function Bn(n) {
        return n != null && gi(n.length) && !Le(n);
      }
      function cn(n) {
        return sn(n) && Bn(n);
      }
      function Vh(n) {
        return n === !0 || n === !1 || sn(n) && Rn(n) == ve;
      }
      var Ze = as || $u, Yh = To ? Un(To) : ec;
      function Kh(n) {
        return sn(n) && n.nodeType === 1 && !cr(n);
      }
      function Zh(n) {
        if (n == null)
          return !0;
        if (Bn(n) && (H(n) || typeof n == "string" || typeof n.splice == "function" || Ze(n) || Ht(n) || dt(n)))
          return !n.length;
        var e = bn(n);
        if (e == Pn || e == zn)
          return !n.size;
        if (fr(n))
          return !lu(n).length;
        for (var t in n)
          if (X.call(n, t))
            return !1;
        return !0;
      }
      function Jh(n, e) {
        return or(n, e);
      }
      function Xh(n, e, t) {
        t = typeof t == "function" ? t : a;
        var r = t ? t(n, e) : a;
        return r === a ? or(n, e, a, t) : !!r;
      }
      function ku(n) {
        if (!sn(n))
          return !1;
        var e = Rn(n);
        return e == pt || e == vt || typeof n.message == "string" && typeof n.name == "string" && !cr(n);
      }
      function Qh(n) {
        return typeof n == "number" && $o(n);
      }
      function Le(n) {
        if (!an(n))
          return !1;
        var e = Rn(n);
        return e == et || e == yr || e == Dt || e == xt;
      }
      function sl(n) {
        return typeof n == "number" && n == F(n);
      }
      function gi(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= oe;
      }
      function an(n) {
        var e = typeof n;
        return n != null && (e == "object" || e == "function");
      }
      function sn(n) {
        return n != null && typeof n == "object";
      }
      var cl = Ro ? Un(Ro) : rc;
      function ng(n, e) {
        return n === e || au(n, e, Tu(e));
      }
      function eg(n, e, t) {
        return t = typeof t == "function" ? t : a, au(n, e, Tu(e), t);
      }
      function tg(n) {
        return dl(n) && n != +n;
      }
      function rg(n) {
        if (Uc(n))
          throw new k(I);
        return ra(n);
      }
      function ig(n) {
        return n === null;
      }
      function ug(n) {
        return n == null;
      }
      function dl(n) {
        return typeof n == "number" || sn(n) && Rn(n) == pe;
      }
      function cr(n) {
        if (!sn(n) || Rn(n) != Vn)
          return !1;
        var e = Wr(n);
        if (e === null)
          return !0;
        var t = X.call(e, "constructor") && e.constructor;
        return typeof t == "function" && t instanceof t && Pr.call(t) == es;
      }
      var Hu = Eo ? Un(Eo) : ic;
      function og(n) {
        return sl(n) && n >= -oe && n <= oe;
      }
      var hl = So ? Un(So) : uc;
      function vi(n) {
        return typeof n == "string" || !H(n) && sn(n) && Rn(n) == Ce;
      }
      function Nn(n) {
        return typeof n == "symbol" || sn(n) && Rn(n) == mt;
      }
      var Ht = Ao ? Un(Ao) : oc;
      function ag(n) {
        return n === a;
      }
      function lg(n) {
        return sn(n) && bn(n) == Ue;
      }
      function fg(n) {
        return sn(n) && Rn(n) == br;
      }
      var sg = ui(fu), cg = ui(function(n, e) {
        return n <= e;
      });
      function gl(n) {
        if (!n)
          return [];
        if (Bn(n))
          return vi(n) ? fe(n) : On(n);
        if (Xt && n[Xt])
          return jf(n[Xt]());
        var e = bn(n), t = e == Pn ? Zi : e == zn ? kr : Ft;
        return t(n);
      }
      function Oe(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = ee(n), n === ge || n === -ge) {
          var e = n < 0 ? -1 : 1;
          return e * xr;
        }
        return n === n ? n : 0;
      }
      function F(n) {
        var e = Oe(n), t = e % 1;
        return e === e ? t ? e - t : e : 0;
      }
      function vl(n) {
        return n ? lt(F(n), 0, Fn) : 0;
      }
      function ee(n) {
        if (typeof n == "number")
          return n;
        if (Nn(n))
          return nt;
        if (an(n)) {
          var e = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = an(e) ? e + "" : e;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = ko(n);
        var t = U.test(n);
        return t || on.test(n) ? Ef(n.slice(2), t ? 2 : 8) : N.test(n) ? nt : +n;
      }
      function pl(n) {
        return xe(n, kn(n));
      }
      function dg(n) {
        return n ? lt(F(n), -oe, oe) : n === 0 ? n : 0;
      }
      function J(n) {
        return n == null ? "" : Wn(n);
      }
      var hg = Ot(function(n, e) {
        if (fr(e) || Bn(e)) {
          xe(e, _n(e), n);
          return;
        }
        for (var t in e)
          X.call(e, t) && rr(n, t, e[t]);
      }), _l = Ot(function(n, e) {
        xe(e, kn(e), n);
      }), pi = Ot(function(n, e, t, r) {
        xe(e, kn(e), n, r);
      }), gg = Ot(function(n, e, t, r) {
        xe(e, _n(e), n, r);
      }), vg = Ie(tu);
      function pg(n, e) {
        var t = Lt(n);
        return e == null ? t : Ko(t, e);
      }
      var _g = D(function(n, e) {
        n = Q(n);
        var t = -1, r = e.length, i = r > 2 ? e[2] : a;
        for (i && En(e[0], e[1], i) && (r = 1); ++t < r; )
          for (var l = e[t], f = kn(l), c = -1, h = f.length; ++c < h; ) {
            var x = f[c], m = n[x];
            (m === a || ce(m, At[x]) && !X.call(n, x)) && (n[x] = l[x]);
          }
        return n;
      }), xg = D(function(n) {
        return n.push(a, ka), Dn(xl, a, n);
      });
      function mg(n, e) {
        return Mo(n, M(e, 3), _e);
      }
      function wg(n, e) {
        return Mo(n, M(e, 3), iu);
      }
      function yg(n, e) {
        return n == null ? n : ru(n, M(e, 3), kn);
      }
      function bg(n, e) {
        return n == null ? n : na(n, M(e, 3), kn);
      }
      function Cg(n, e) {
        return n && _e(n, M(e, 3));
      }
      function Tg(n, e) {
        return n && iu(n, M(e, 3));
      }
      function Rg(n) {
        return n == null ? [] : Jr(n, _n(n));
      }
      function Eg(n) {
        return n == null ? [] : Jr(n, kn(n));
      }
      function Fu(n, e, t) {
        var r = n == null ? a : ft(n, e);
        return r === a ? t : r;
      }
      function Sg(n, e) {
        return n != null && Pa(n, e, Zs);
      }
      function Pu(n, e) {
        return n != null && Pa(n, e, Js);
      }
      var Ag = Ia(function(n, e, t) {
        e != null && typeof e.toString != "function" && (e = zr.call(e)), n[e] = t;
      }, Du(Hn)), Ig = Ia(function(n, e, t) {
        e != null && typeof e.toString != "function" && (e = zr.call(e)), X.call(n, e) ? n[e].push(t) : n[e] = [t];
      }, M), Mg = D(ur);
      function _n(n) {
        return Bn(n) ? Vo(n) : lu(n);
      }
      function kn(n) {
        return Bn(n) ? Vo(n, !0) : ac(n);
      }
      function Lg(n, e) {
        var t = {};
        return e = M(e, 3), _e(n, function(r, i, l) {
          Se(t, e(r, i, l), r);
        }), t;
      }
      function Og(n, e) {
        var t = {};
        return e = M(e, 3), _e(n, function(r, i, l) {
          Se(t, i, e(r, i, l));
        }), t;
      }
      var Bg = Ot(function(n, e, t) {
        Xr(n, e, t);
      }), xl = Ot(function(n, e, t, r) {
        Xr(n, e, t, r);
      }), kg = Ie(function(n, e) {
        var t = {};
        if (n == null)
          return t;
        var r = !1;
        e = un(e, function(l) {
          return l = Ye(l, n), r || (r = l.length > 1), l;
        }), xe(n, bu(n), t), r && (t = Xn(t, nn | Cn | Tn, Ac));
        for (var i = e.length; i--; )
          gu(t, e[i]);
        return t;
      });
      function Hg(n, e) {
        return ml(n, hi(M(e)));
      }
      var Fg = Ie(function(n, e) {
        return n == null ? {} : fc(n, e);
      });
      function ml(n, e) {
        if (n == null)
          return {};
        var t = un(bu(n), function(r) {
          return [r];
        });
        return e = M(e), sa(n, t, function(r, i) {
          return e(r, i[0]);
        });
      }
      function Pg(n, e, t) {
        e = Ye(e, n);
        var r = -1, i = e.length;
        for (i || (i = 1, n = a); ++r < i; ) {
          var l = n == null ? a : n[me(e[r])];
          l === a && (r = i, l = t), n = Le(l) ? l.call(n) : l;
        }
        return n;
      }
      function zg(n, e, t) {
        return n == null ? n : ar(n, e, t);
      }
      function Dg(n, e, t, r) {
        return r = typeof r == "function" ? r : a, n == null ? n : ar(n, e, t, r);
      }
      var wl = Oa(_n), yl = Oa(kn);
      function Ug(n, e, t) {
        var r = H(n), i = r || Ze(n) || Ht(n);
        if (e = M(e, 4), t == null) {
          var l = n && n.constructor;
          i ? t = r ? new l() : [] : an(n) ? t = Le(l) ? Lt(Wr(n)) : {} : t = {};
        }
        return (i ? Kn : _e)(n, function(f, c, h) {
          return e(t, f, c, h);
        }), t;
      }
      function Wg(n, e) {
        return n == null ? !0 : gu(n, e);
      }
      function Ng(n, e, t) {
        return n == null ? n : va(n, e, _u(t));
      }
      function jg(n, e, t, r) {
        return r = typeof r == "function" ? r : a, n == null ? n : va(n, e, _u(t), r);
      }
      function Ft(n) {
        return n == null ? [] : Ki(n, _n(n));
      }
      function $g(n) {
        return n == null ? [] : Ki(n, kn(n));
      }
      function Gg(n, e, t) {
        return t === a && (t = e, e = a), t !== a && (t = ee(t), t = t === t ? t : 0), e !== a && (e = ee(e), e = e === e ? e : 0), lt(ee(n), e, t);
      }
      function qg(n, e, t) {
        return e = Oe(e), t === a ? (t = e, e = 0) : t = Oe(t), n = ee(n), Xs(n, e, t);
      }
      function Vg(n, e, t) {
        if (t && typeof t != "boolean" && En(n, e, t) && (e = t = a), t === a && (typeof e == "boolean" ? (t = e, e = a) : typeof n == "boolean" && (t = n, n = a)), n === a && e === a ? (n = 0, e = 1) : (n = Oe(n), e === a ? (e = n, n = 0) : e = Oe(e)), n > e) {
          var r = n;
          n = e, e = r;
        }
        if (t || n % 1 || e % 1) {
          var i = Go();
          return yn(n + i * (e - n + Rf("1e-" + ((i + "").length - 1))), e);
        }
        return cu(n, e);
      }
      var Yg = Bt(function(n, e, t) {
        return e = e.toLowerCase(), n + (t ? bl(e) : e);
      });
      function bl(n) {
        return zu(J(n).toLowerCase());
      }
      function Cl(n) {
        return n = J(n), n && n.replace(Mn, zf).replace(vf, "");
      }
      function Kg(n, e, t) {
        n = J(n), e = Wn(e);
        var r = n.length;
        t = t === a ? r : lt(F(t), 0, r);
        var i = t;
        return t -= e.length, t >= 0 && n.slice(t, i) == e;
      }
      function Zg(n) {
        return n = J(n), n && Tr.test(n) ? n.replace(bt, Df) : n;
      }
      function Jg(n) {
        return n = J(n), n && Ir.test(n) ? n.replace(Kt, "\\$&") : n;
      }
      var Xg = Bt(function(n, e, t) {
        return n + (t ? "-" : "") + e.toLowerCase();
      }), Qg = Bt(function(n, e, t) {
        return n + (t ? " " : "") + e.toLowerCase();
      }), n1 = Ea("toLowerCase");
      function e1(n, e, t) {
        n = J(n), e = F(e);
        var r = e ? Et(n) : 0;
        if (!e || r >= e)
          return n;
        var i = (e - r) / 2;
        return ii(Gr(i), t) + n + ii($r(i), t);
      }
      function t1(n, e, t) {
        n = J(n), e = F(e);
        var r = e ? Et(n) : 0;
        return e && r < e ? n + ii(e - r, t) : n;
      }
      function r1(n, e, t) {
        n = J(n), e = F(e);
        var r = e ? Et(n) : 0;
        return e && r < e ? ii(e - r, t) + n : n;
      }
      function i1(n, e, t) {
        return t || e == null ? e = 0 : e && (e = +e), cs(J(n).replace(Zt, ""), e || 0);
      }
      function u1(n, e, t) {
        return (t ? En(n, e, t) : e === a) ? e = 1 : e = F(e), du(J(n), e);
      }
      function o1() {
        var n = arguments, e = J(n[0]);
        return n.length < 3 ? e : e.replace(n[1], n[2]);
      }
      var a1 = Bt(function(n, e, t) {
        return n + (t ? "_" : "") + e.toLowerCase();
      });
      function l1(n, e, t) {
        return t && typeof t != "number" && En(n, e, t) && (e = t = a), t = t === a ? Fn : t >>> 0, t ? (n = J(n), n && (typeof e == "string" || e != null && !Hu(e)) && (e = Wn(e), !e && Rt(n)) ? Ke(fe(n), 0, t) : n.split(e, t)) : [];
      }
      var f1 = Bt(function(n, e, t) {
        return n + (t ? " " : "") + zu(e);
      });
      function s1(n, e, t) {
        return n = J(n), t = t == null ? 0 : lt(F(t), 0, n.length), e = Wn(e), n.slice(t, t + e.length) == e;
      }
      function c1(n, e, t) {
        var r = o.templateSettings;
        t && En(n, e, t) && (e = a), n = J(n), e = pi({}, e, r, Ba);
        var i = pi({}, e.imports, r.imports, Ba), l = _n(i), f = Ki(i, l), c, h, x = 0, m = e.interpolate || le, w = "__p += '", E = Ji(
          (e.escape || le).source + "|" + m.source + "|" + (m === Er ? G : le).source + "|" + (e.evaluate || le).source + "|$",
          "g"
        ), A = "//# sourceURL=" + (X.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++wf + "]") + `
`;
        n.replace(E, function(O, W, $, jn, Sn, $n) {
          return $ || ($ = jn), w += n.slice(x, $n).replace(Mr, Uf), W && (c = !0, w += `' +
__e(` + W + `) +
'`), Sn && (h = !0, w += `';
` + Sn + `;
__p += '`), $ && (w += `' +
((__t = (` + $ + `)) == null ? '' : __t) +
'`), x = $n + O.length, O;
        }), w += `';
`;
        var L = X.call(e, "variable") && e.variable;
        if (!L)
          w = `with (obj) {
` + w + `
}
`;
        else if (R.test(L))
          throw new k(q);
        w = (h ? w.replace(Ii, "") : w).replace(Vt, "$1").replace(Cr, "$1;"), w = "function(" + (L || "obj") + `) {
` + (L ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (c ? ", __e = _.escape" : "") + (h ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + w + `return __p
}`;
        var P = Rl(function() {
          return Y(l, A + "return " + w).apply(a, f);
        });
        if (P.source = w, ku(P))
          throw P;
        return P;
      }
      function d1(n) {
        return J(n).toLowerCase();
      }
      function h1(n) {
        return J(n).toUpperCase();
      }
      function g1(n, e, t) {
        if (n = J(n), n && (t || e === a))
          return ko(n);
        if (!n || !(e = Wn(e)))
          return n;
        var r = fe(n), i = fe(e), l = Ho(r, i), f = Fo(r, i) + 1;
        return Ke(r, l, f).join("");
      }
      function v1(n, e, t) {
        if (n = J(n), n && (t || e === a))
          return n.slice(0, zo(n) + 1);
        if (!n || !(e = Wn(e)))
          return n;
        var r = fe(n), i = Fo(r, fe(e)) + 1;
        return Ke(r, 0, i).join("");
      }
      function p1(n, e, t) {
        if (n = J(n), n && (t || e === a))
          return n.replace(Zt, "");
        if (!n || !(e = Wn(e)))
          return n;
        var r = fe(n), i = Ho(r, fe(e));
        return Ke(r, i).join("");
      }
      function _1(n, e) {
        var t = Ri, r = Ei;
        if (an(e)) {
          var i = "separator" in e ? e.separator : i;
          t = "length" in e ? F(e.length) : t, r = "omission" in e ? Wn(e.omission) : r;
        }
        n = J(n);
        var l = n.length;
        if (Rt(n)) {
          var f = fe(n);
          l = f.length;
        }
        if (t >= l)
          return n;
        var c = t - Et(r);
        if (c < 1)
          return r;
        var h = f ? Ke(f, 0, c).join("") : n.slice(0, c);
        if (i === a)
          return h + r;
        if (f && (c += h.length - c), Hu(i)) {
          if (n.slice(c).search(i)) {
            var x, m = h;
            for (i.global || (i = Ji(i.source, J(Z.exec(i)) + "g")), i.lastIndex = 0; x = i.exec(m); )
              var w = x.index;
            h = h.slice(0, w === a ? c : w);
          }
        } else if (n.indexOf(Wn(i), c) != c) {
          var E = h.lastIndexOf(i);
          E > -1 && (h = h.slice(0, E));
        }
        return h + r;
      }
      function x1(n) {
        return n = J(n), n && Yt.test(n) ? n.replace(Te, Vf) : n;
      }
      var m1 = Bt(function(n, e, t) {
        return n + (t ? " " : "") + e.toUpperCase();
      }), zu = Ea("toUpperCase");
      function Tl(n, e, t) {
        return n = J(n), e = t ? a : e, e === a ? Nf(n) ? Zf(n) : Bf(n) : n.match(e) || [];
      }
      var Rl = D(function(n, e) {
        try {
          return Dn(n, a, e);
        } catch (t) {
          return ku(t) ? t : new k(t);
        }
      }), w1 = Ie(function(n, e) {
        return Kn(e, function(t) {
          t = me(t), Se(n, t, Ou(n[t], n));
        }), n;
      });
      function y1(n) {
        var e = n == null ? 0 : n.length, t = M();
        return n = e ? un(n, function(r) {
          if (typeof r[1] != "function")
            throw new Zn(C);
          return [t(r[0]), r[1]];
        }) : [], D(function(r) {
          for (var i = -1; ++i < e; ) {
            var l = n[i];
            if (Dn(l[0], this, r))
              return Dn(l[1], this, r);
          }
        });
      }
      function b1(n) {
        return Vs(Xn(n, nn));
      }
      function Du(n) {
        return function() {
          return n;
        };
      }
      function C1(n, e) {
        return n == null || n !== n ? e : n;
      }
      var T1 = Aa(), R1 = Aa(!0);
      function Hn(n) {
        return n;
      }
      function Uu(n) {
        return ia(typeof n == "function" ? n : Xn(n, nn));
      }
      function E1(n) {
        return oa(Xn(n, nn));
      }
      function S1(n, e) {
        return aa(n, Xn(e, nn));
      }
      var A1 = D(function(n, e) {
        return function(t) {
          return ur(t, n, e);
        };
      }), I1 = D(function(n, e) {
        return function(t) {
          return ur(n, t, e);
        };
      });
      function Wu(n, e, t) {
        var r = _n(e), i = Jr(e, r);
        t == null && !(an(e) && (i.length || !r.length)) && (t = e, e = n, n = this, i = Jr(e, _n(e)));
        var l = !(an(t) && "chain" in t) || !!t.chain, f = Le(n);
        return Kn(i, function(c) {
          var h = e[c];
          n[c] = h, f && (n.prototype[c] = function() {
            var x = this.__chain__;
            if (l || x) {
              var m = n(this.__wrapped__), w = m.__actions__ = On(this.__actions__);
              return w.push({ func: h, args: arguments, thisArg: n }), m.__chain__ = x, m;
            }
            return h.apply(n, je([this.value()], arguments));
          });
        }), n;
      }
      function M1() {
        return mn._ === this && (mn._ = ts), this;
      }
      function Nu() {
      }
      function L1(n) {
        return n = F(n), D(function(e) {
          return la(e, n);
        });
      }
      var O1 = mu(un), B1 = mu(Io), k1 = mu($i);
      function El(n) {
        return Eu(n) ? Gi(me(n)) : sc(n);
      }
      function H1(n) {
        return function(e) {
          return n == null ? a : ft(n, e);
        };
      }
      var F1 = Ma(), P1 = Ma(!0);
      function ju() {
        return [];
      }
      function $u() {
        return !1;
      }
      function z1() {
        return {};
      }
      function D1() {
        return "";
      }
      function U1() {
        return !0;
      }
      function W1(n, e) {
        if (n = F(n), n < 1 || n > oe)
          return [];
        var t = Fn, r = yn(n, Fn);
        e = M(e), n -= Fn;
        for (var i = Yi(r, e); ++t < n; )
          e(t);
        return i;
      }
      function N1(n) {
        return H(n) ? un(n, me) : Nn(n) ? [n] : On(qa(J(n)));
      }
      function j1(n) {
        var e = ++ns;
        return J(n) + e;
      }
      var $1 = ri(function(n, e) {
        return n + e;
      }, 0), G1 = wu("ceil"), q1 = ri(function(n, e) {
        return n / e;
      }, 1), V1 = wu("floor");
      function Y1(n) {
        return n && n.length ? Zr(n, Hn, uu) : a;
      }
      function K1(n, e) {
        return n && n.length ? Zr(n, M(e, 2), uu) : a;
      }
      function Z1(n) {
        return Oo(n, Hn);
      }
      function J1(n, e) {
        return Oo(n, M(e, 2));
      }
      function X1(n) {
        return n && n.length ? Zr(n, Hn, fu) : a;
      }
      function Q1(n, e) {
        return n && n.length ? Zr(n, M(e, 2), fu) : a;
      }
      var n0 = ri(function(n, e) {
        return n * e;
      }, 1), e0 = wu("round"), t0 = ri(function(n, e) {
        return n - e;
      }, 0);
      function r0(n) {
        return n && n.length ? Vi(n, Hn) : 0;
      }
      function i0(n, e) {
        return n && n.length ? Vi(n, M(e, 2)) : 0;
      }
      return o.after = Eh, o.ary = rl, o.assign = hg, o.assignIn = _l, o.assignInWith = pi, o.assignWith = gg, o.at = vg, o.before = il, o.bind = Ou, o.bindAll = w1, o.bindKey = ul, o.castArray = zh, o.chain = nl, o.chunk = Vc, o.compact = Yc, o.concat = Kc, o.cond = y1, o.conforms = b1, o.constant = Du, o.countBy = rh, o.create = pg, o.curry = ol, o.curryRight = al, o.debounce = ll, o.defaults = _g, o.defaultsDeep = xg, o.defer = Sh, o.delay = Ah, o.difference = Zc, o.differenceBy = Jc, o.differenceWith = Xc, o.drop = Qc, o.dropRight = nd, o.dropRightWhile = ed, o.dropWhile = td, o.fill = rd, o.filter = uh, o.flatMap = lh, o.flatMapDeep = fh, o.flatMapDepth = sh, o.flatten = Za, o.flattenDeep = id, o.flattenDepth = ud, o.flip = Ih, o.flow = T1, o.flowRight = R1, o.fromPairs = od, o.functions = Rg, o.functionsIn = Eg, o.groupBy = ch, o.initial = ld, o.intersection = fd, o.intersectionBy = sd, o.intersectionWith = cd, o.invert = Ag, o.invertBy = Ig, o.invokeMap = hh, o.iteratee = Uu, o.keyBy = gh, o.keys = _n, o.keysIn = kn, o.map = si, o.mapKeys = Lg, o.mapValues = Og, o.matches = E1, o.matchesProperty = S1, o.memoize = di, o.merge = Bg, o.mergeWith = xl, o.method = A1, o.methodOf = I1, o.mixin = Wu, o.negate = hi, o.nthArg = L1, o.omit = kg, o.omitBy = Hg, o.once = Mh, o.orderBy = vh, o.over = O1, o.overArgs = Lh, o.overEvery = B1, o.overSome = k1, o.partial = Bu, o.partialRight = fl, o.partition = ph, o.pick = Fg, o.pickBy = ml, o.property = El, o.propertyOf = H1, o.pull = vd, o.pullAll = Xa, o.pullAllBy = pd, o.pullAllWith = _d, o.pullAt = xd, o.range = F1, o.rangeRight = P1, o.rearg = Oh, o.reject = mh, o.remove = md, o.rest = Bh, o.reverse = Mu, o.sampleSize = yh, o.set = zg, o.setWith = Dg, o.shuffle = bh, o.slice = wd, o.sortBy = Rh, o.sortedUniq = Sd, o.sortedUniqBy = Ad, o.split = l1, o.spread = kh, o.tail = Id, o.take = Md, o.takeRight = Ld, o.takeRightWhile = Od, o.takeWhile = Bd, o.tap = Yd, o.throttle = Hh, o.thru = fi, o.toArray = gl, o.toPairs = wl, o.toPairsIn = yl, o.toPath = N1, o.toPlainObject = pl, o.transform = Ug, o.unary = Fh, o.union = kd, o.unionBy = Hd, o.unionWith = Fd, o.uniq = Pd, o.uniqBy = zd, o.uniqWith = Dd, o.unset = Wg, o.unzip = Lu, o.unzipWith = Qa, o.update = Ng, o.updateWith = jg, o.values = Ft, o.valuesIn = $g, o.without = Ud, o.words = Tl, o.wrap = Ph, o.xor = Wd, o.xorBy = Nd, o.xorWith = jd, o.zip = $d, o.zipObject = Gd, o.zipObjectDeep = qd, o.zipWith = Vd, o.entries = wl, o.entriesIn = yl, o.extend = _l, o.extendWith = pi, Wu(o, o), o.add = $1, o.attempt = Rl, o.camelCase = Yg, o.capitalize = bl, o.ceil = G1, o.clamp = Gg, o.clone = Dh, o.cloneDeep = Wh, o.cloneDeepWith = Nh, o.cloneWith = Uh, o.conformsTo = jh, o.deburr = Cl, o.defaultTo = C1, o.divide = q1, o.endsWith = Kg, o.eq = ce, o.escape = Zg, o.escapeRegExp = Jg, o.every = ih, o.find = oh, o.findIndex = Ya, o.findKey = mg, o.findLast = ah, o.findLastIndex = Ka, o.findLastKey = wg, o.floor = V1, o.forEach = el, o.forEachRight = tl, o.forIn = yg, o.forInRight = bg, o.forOwn = Cg, o.forOwnRight = Tg, o.get = Fu, o.gt = $h, o.gte = Gh, o.has = Sg, o.hasIn = Pu, o.head = Ja, o.identity = Hn, o.includes = dh, o.indexOf = ad, o.inRange = qg, o.invoke = Mg, o.isArguments = dt, o.isArray = H, o.isArrayBuffer = qh, o.isArrayLike = Bn, o.isArrayLikeObject = cn, o.isBoolean = Vh, o.isBuffer = Ze, o.isDate = Yh, o.isElement = Kh, o.isEmpty = Zh, o.isEqual = Jh, o.isEqualWith = Xh, o.isError = ku, o.isFinite = Qh, o.isFunction = Le, o.isInteger = sl, o.isLength = gi, o.isMap = cl, o.isMatch = ng, o.isMatchWith = eg, o.isNaN = tg, o.isNative = rg, o.isNil = ug, o.isNull = ig, o.isNumber = dl, o.isObject = an, o.isObjectLike = sn, o.isPlainObject = cr, o.isRegExp = Hu, o.isSafeInteger = og, o.isSet = hl, o.isString = vi, o.isSymbol = Nn, o.isTypedArray = Ht, o.isUndefined = ag, o.isWeakMap = lg, o.isWeakSet = fg, o.join = dd, o.kebabCase = Xg, o.last = ne, o.lastIndexOf = hd, o.lowerCase = Qg, o.lowerFirst = n1, o.lt = sg, o.lte = cg, o.max = Y1, o.maxBy = K1, o.mean = Z1, o.meanBy = J1, o.min = X1, o.minBy = Q1, o.stubArray = ju, o.stubFalse = $u, o.stubObject = z1, o.stubString = D1, o.stubTrue = U1, o.multiply = n0, o.nth = gd, o.noConflict = M1, o.noop = Nu, o.now = ci, o.pad = e1, o.padEnd = t1, o.padStart = r1, o.parseInt = i1, o.random = Vg, o.reduce = _h, o.reduceRight = xh, o.repeat = u1, o.replace = o1, o.result = Pg, o.round = e0, o.runInContext = d, o.sample = wh, o.size = Ch, o.snakeCase = a1, o.some = Th, o.sortedIndex = yd, o.sortedIndexBy = bd, o.sortedIndexOf = Cd, o.sortedLastIndex = Td, o.sortedLastIndexBy = Rd, o.sortedLastIndexOf = Ed, o.startCase = f1, o.startsWith = s1, o.subtract = t0, o.sum = r0, o.sumBy = i0, o.template = c1, o.times = W1, o.toFinite = Oe, o.toInteger = F, o.toLength = vl, o.toLower = d1, o.toNumber = ee, o.toSafeInteger = dg, o.toString = J, o.toUpper = h1, o.trim = g1, o.trimEnd = v1, o.trimStart = p1, o.truncate = _1, o.unescape = x1, o.uniqueId = j1, o.upperCase = m1, o.upperFirst = zu, o.each = el, o.eachRight = tl, o.first = Ja, Wu(o, function() {
        var n = {};
        return _e(o, function(e, t) {
          X.call(o.prototype, t) || (n[t] = e);
        }), n;
      }(), { chain: !1 }), o.VERSION = b, Kn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        o[n].placeholder = o;
      }), Kn(["drop", "take"], function(n, e) {
        j.prototype[n] = function(t) {
          t = t === a ? 1 : vn(F(t), 0);
          var r = this.__filtered__ && !e ? new j(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = yn(t, r.__takeCount__) : r.__views__.push({
            size: yn(t, Fn),
            type: n + (r.__dir__ < 0 ? "Right" : "")
          }), r;
        }, j.prototype[n + "Right"] = function(t) {
          return this.reverse()[n](t).reverse();
        };
      }), Kn(["filter", "map", "takeWhile"], function(n, e) {
        var t = e + 1, r = t == he || t == _r;
        j.prototype[n] = function(i) {
          var l = this.clone();
          return l.__iteratees__.push({
            iteratee: M(i, 3),
            type: t
          }), l.__filtered__ = l.__filtered__ || r, l;
        };
      }), Kn(["head", "last"], function(n, e) {
        var t = "take" + (e ? "Right" : "");
        j.prototype[n] = function() {
          return this[t](1).value()[0];
        };
      }), Kn(["initial", "tail"], function(n, e) {
        var t = "drop" + (e ? "" : "Right");
        j.prototype[n] = function() {
          return this.__filtered__ ? new j(this) : this[t](1);
        };
      }), j.prototype.compact = function() {
        return this.filter(Hn);
      }, j.prototype.find = function(n) {
        return this.filter(n).head();
      }, j.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, j.prototype.invokeMap = D(function(n, e) {
        return typeof n == "function" ? new j(this) : this.map(function(t) {
          return ur(t, n, e);
        });
      }), j.prototype.reject = function(n) {
        return this.filter(hi(M(n)));
      }, j.prototype.slice = function(n, e) {
        n = F(n);
        var t = this;
        return t.__filtered__ && (n > 0 || e < 0) ? new j(t) : (n < 0 ? t = t.takeRight(-n) : n && (t = t.drop(n)), e !== a && (e = F(e), t = e < 0 ? t.dropRight(-e) : t.take(e - n)), t);
      }, j.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, j.prototype.toArray = function() {
        return this.take(Fn);
      }, _e(j.prototype, function(n, e) {
        var t = /^(?:filter|find|map|reject)|While$/.test(e), r = /^(?:head|last)$/.test(e), i = o[r ? "take" + (e == "last" ? "Right" : "") : e], l = r || /^find/.test(e);
        i && (o.prototype[e] = function() {
          var f = this.__wrapped__, c = r ? [1] : arguments, h = f instanceof j, x = c[0], m = h || H(f), w = function(W) {
            var $ = i.apply(o, je([W], c));
            return r && E ? $[0] : $;
          };
          m && t && typeof x == "function" && x.length != 1 && (h = m = !1);
          var E = this.__chain__, A = !!this.__actions__.length, L = l && !E, P = h && !A;
          if (!l && m) {
            f = P ? f : new j(this);
            var O = n.apply(f, c);
            return O.__actions__.push({ func: fi, args: [w], thisArg: a }), new Jn(O, E);
          }
          return L && P ? n.apply(this, c) : (O = this.thru(w), L ? r ? O.value()[0] : O.value() : O);
        });
      }), Kn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var e = Hr[n], t = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n);
        o.prototype[n] = function() {
          var i = arguments;
          if (r && !this.__chain__) {
            var l = this.value();
            return e.apply(H(l) ? l : [], i);
          }
          return this[t](function(f) {
            return e.apply(H(f) ? f : [], i);
          });
        };
      }), _e(j.prototype, function(n, e) {
        var t = o[e];
        if (t) {
          var r = t.name + "";
          X.call(Mt, r) || (Mt[r] = []), Mt[r].push({ name: e, func: t });
        }
      }), Mt[ti(a, In).name] = [{
        name: "wrapper",
        func: a
      }], j.prototype.clone = xs, j.prototype.reverse = ms, j.prototype.value = ws, o.prototype.at = Kd, o.prototype.chain = Zd, o.prototype.commit = Jd, o.prototype.next = Xd, o.prototype.plant = nh, o.prototype.reverse = eh, o.prototype.toJSON = o.prototype.valueOf = o.prototype.value = th, o.prototype.first = o.prototype.head, Xt && (o.prototype[Xt] = Qd), o;
    }, St = Jf();
    it ? ((it.exports = St)._ = St, Ui._ = St) : mn._ = St;
  }).call(dr);
})(bi, bi.exports);
var kl = bi.exports;
const xv = 5;
function mv(u) {
  const g = vr(null), { classes: a } = zt({ root: {} })(void 0, {
    name: "SuggestionListItem"
  });
  function b() {
    var q;
    const I = u.isSelected, C = (q = g.current) == null ? void 0 : q.matches(":hover");
    return I || C;
  }
  function T() {
    var I, C;
    b() ? (I = g.current) == null || I.setAttribute("data-hovered", "true") : (C = g.current) == null || C.removeAttribute("data-hovered");
  }
  return Pt(() => {
    T(), b() && g.current && g.current.getBoundingClientRect().left > xv && g.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }), /* @__PURE__ */ p.jsx(
    ln.Item,
    {
      className: a.root,
      icon: u.icon,
      onClick: u.set,
      closeMenuOnClick: !1,
      onMouseLeave: () => {
        setTimeout(() => {
          T();
        }, 1);
      },
      ref: g,
      rightSection: u.shortcut && /* @__PURE__ */ p.jsx(b0, { size: "xs", children: u.shortcut }),
      children: /* @__PURE__ */ p.jsxs(no, { children: [
        /* @__PURE__ */ p.jsx(yi, { size: 14, weight: 500, children: u.name }),
        /* @__PURE__ */ p.jsx(yi, { size: 10, children: u.hint })
      ] })
    }
  );
}
function wv(u) {
  const { classes: g } = zt({ root: {} })(void 0, {
    name: "SlashMenu"
  }), a = [];
  let b = 0;
  const T = kl.groupBy(u.items, (I) => I.group);
  return kl.forEach(T, (I) => {
    a.push(
      /* @__PURE__ */ p.jsx(ln.Label, { children: I[0].group }, I[0].group)
    );
    for (const C of I)
      a.push(
        /* @__PURE__ */ p.jsx(
          mv,
          {
            name: C.name,
            icon: C.icon,
            hint: C.hint,
            shortcut: C.shortcut,
            isSelected: u.keyboardHoveredItemIndex === b,
            set: () => u.itemCallback(C)
          },
          C.name
        )
      ), b++;
  }), /* @__PURE__ */ p.jsx(
    ln,
    {
      defaultOpened: !0,
      trigger: "hover",
      closeDelay: 1e7,
      children: /* @__PURE__ */ p.jsx(ln.Dropdown, { className: g.root, children: a.length > 0 ? a : /* @__PURE__ */ p.jsx(ln.Item, { children: "No match found" }) })
    }
  );
}
const yv = (u) => (g) => Ti(g, wv, u, {
  animation: "fade",
  placement: "bottom-start"
});
function bv() {
  const [, u] = te(0);
  return () => u((g) => g + 1);
}
const Bv = (u = {}, g = []) => {
  const [a, b] = te(null), T = bv();
  return Pt(() => {
    var hn, K;
    let I = !0, C = {
      slashCommands: _v,
      ...u
    };
    C.customElements && C.uiFactories && console.warn(
      "BlockNote editor initialized with both `customElements` and `uiFactories` options, prioritizing `uiFactories`."
    );
    let q = {
      formattingToolbarFactory: hv(
        mi(C.theme === "dark"),
        (hn = C.customElements) == null ? void 0 : hn.formattingToolbar
      ),
      hyperlinkToolbarFactory: vv(
        mi(C.theme === "dark")
      ),
      slashMenuFactory: yv(
        mi(C.theme === "dark")
      ),
      blockSideMenuFactory: H0(
        mi(C.theme === "dark"),
        (K = C.customElements) == null ? void 0 : K.dragHandleMenu
      ),
      ...C.uiFactories
    };
    C = {
      ...C,
      uiFactories: q
    }, console.log("create new blocknote instance");
    const z = new _0(
      C
    );
    return b(z), z._tiptapEditor.on("transaction", () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          I && T();
        });
      });
    }), () => {
      z._tiptapEditor.destroy(), I = !1;
    };
  }, g), a;
};
function Cv() {
  const [, u] = te(0);
  return () => u((g) => g + 1);
}
const kv = (u) => {
  const g = Cv();
  Pt(() => {
    const a = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          g();
        });
      });
    };
    return u.on("transaction", a), () => {
      u.off("transaction", a);
    };
  }, [u]);
};
export {
  B0 as BlockColorsButton,
  Mv as BlockNoteView,
  cv as BlockTypeDropdown,
  F0 as ColorStyleButton,
  nv as CreateLinkButton,
  I0 as DragHandleMenu,
  Dl as DragHandleMenuItem,
  dv as FormattingToolbar,
  Lv as InlineContent,
  ev as NestBlockButton,
  pv as ReactSlashMenuItem,
  M0 as RemoveBlockButton,
  Gu as TextAlignButton,
  xi as ToggledStyleButton,
  Nl as Toolbar,
  He as ToolbarButton,
  lv as ToolbarDropdown,
  tv as UnnestBlockButton,
  H0 as createReactBlockSideMenuFactory,
  Ov as createReactBlockSpec,
  hv as createReactFormattingToolbarFactory,
  vv as createReactHyperlinkToolbarFactory,
  yv as createReactSlashMenuFactory,
  _v as defaultReactSlashMenuItems,
  Bv as useBlockNote,
  kv as useEditorForceUpdate
};
//# sourceMappingURL=blocknote-react.js.map
