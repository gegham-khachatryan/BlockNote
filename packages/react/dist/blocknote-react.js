import He, { useState as re, useCallback as ie, useRef as pr, useEffect as zt, forwardRef as nu, useMemo as a0 } from "react";
import { EditorContent as l0, NodeViewContent as f0, ReactNodeViewRenderer as c0, NodeViewWrapper as s0 } from "@tiptap/react";
import { blockStyles as Ko, createTipTapBlock as d0, propsToAttributes as h0, parse as g0, render as v0, camelToDataKebab as p0, BaseSlashMenuItem as _0, defaultSlashMenuItems as m0, BlockNoteEditor as x0 } from "@blocknote/core";
import w0 from "react-dom";
import { MantineProvider as y0, createStyles as Dt, Menu as ln, Box as Pl, Group as eu, ActionIcon as Zo, Stack as tu, Text as bi, Button as zl, Container as b0, TextInput as C0, Badge as T0 } from "@mantine/core";
import Ti from "@tippyjs/react";
var hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Jo = { exports: {} }, gr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ml;
function R0() {
  if (Ml)
    return gr;
  Ml = 1;
  var o = He, g = Symbol.for("react.element"), a = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, T = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(V, z, hn) {
    var Z, nn = {}, Cn = null, Tn = null;
    hn !== void 0 && (Cn = "" + hn), z.key !== void 0 && (Cn = "" + z.key), z.ref !== void 0 && (Tn = z.ref);
    for (Z in z)
      b.call(z, Z) && !I.hasOwnProperty(Z) && (nn[Z] = z[Z]);
    if (V && V.defaultProps)
      for (Z in z = V.defaultProps, z)
        nn[Z] === void 0 && (nn[Z] = z[Z]);
    return { $$typeof: g, type: V, key: Cn, ref: Tn, props: nn, _owner: T.current };
  }
  return gr.Fragment = a, gr.jsx = C, gr.jsxs = C, gr;
}
var vr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ll;
function E0() {
  return Ll || (Ll = 1, process.env.NODE_ENV !== "production" && function() {
    var o = He, g = Symbol.for("react.element"), a = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), V = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), hn = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), nn = Symbol.for("react.memo"), Cn = Symbol.for("react.lazy"), Tn = Symbol.for("react.offscreen"), be = Symbol.iterator, gt = "@@iterator";
    function In(c) {
      if (c === null || typeof c != "object")
        return null;
      var y = be && c[be] || c[gt];
      return typeof y == "function" ? y : null;
    }
    var Mn = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function pn(c) {
      {
        for (var y = arguments.length, R = new Array(y > 1 ? y - 1 : 0), B = 1; B < y; B++)
          R[B - 1] = arguments[B];
        Vn("error", c, R);
      }
    }
    function Vn(c, y, R) {
      {
        var B = Mn.ReactDebugCurrentFrame, q = B.getStackAddendum();
        q !== "" && (y += "%s", R = R.concat([q]));
        var J = R.map(function(N) {
          return String(N);
        });
        J.unshift("Warning: " + y), Function.prototype.apply.call(console[c], console, J);
      }
    }
    var Pe = !1, Yn = !1, ze = !1, oe = !1, je = !1, vt;
    vt = Symbol.for("react.module.reference");
    function Ei(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === b || c === I || je || c === T || c === hn || c === Z || oe || c === Tn || Pe || Yn || ze || typeof c == "object" && c !== null && (c.$$typeof === Cn || c.$$typeof === nn || c.$$typeof === C || c.$$typeof === V || c.$$typeof === z || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === vt || c.getModuleId !== void 0));
    }
    function Si(c, y, R) {
      var B = c.displayName;
      if (B)
        return B;
      var q = y.displayName || y.name || "";
      return q !== "" ? R + "(" + q + ")" : R;
    }
    function _r(c) {
      return c.displayName || "Context";
    }
    function ue(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && pn("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
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
        case Z:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case V:
            var y = c;
            return _r(y) + ".Consumer";
          case C:
            var R = c;
            return _r(R._context) + ".Provider";
          case z:
            return Si(c, c.render, "ForwardRef");
          case nn:
            var B = c.displayName || null;
            return B !== null ? B : ue(c.type) || "Memo";
          case Cn: {
            var q = c, J = q._payload, N = q._init;
            try {
              return ue(N(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ge = Object.assign, nt = 0, mr, ve, ae, xr, et, Pn, wr;
    function yr() {
    }
    yr.__reactDisabledLog = !0;
    function Ai() {
      {
        if (nt === 0) {
          mr = console.log, ve = console.info, ae = console.warn, xr = console.error, et = console.group, Pn = console.groupCollapsed, wr = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: yr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        nt++;
      }
    }
    function De() {
      {
        if (nt--, nt === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ge({}, c, {
              value: mr
            }),
            info: ge({}, c, {
              value: ve
            }),
            warn: ge({}, c, {
              value: ae
            }),
            error: ge({}, c, {
              value: xr
            }),
            group: ge({}, c, {
              value: et
            }),
            groupCollapsed: ge({}, c, {
              value: Pn
            }),
            groupEnd: ge({}, c, {
              value: wr
            })
          });
        }
        nt < 0 && pn("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ue = Mn.ReactCurrentDispatcher, Ut;
    function pe(c, y, R) {
      {
        if (Ut === void 0)
          try {
            throw Error();
          } catch (q) {
            var B = q.stack.trim().match(/\n( *(at )?)/);
            Ut = B && B[1] || "";
          }
        return `
` + Ut + c;
      }
    }
    var Ce = !1, pt;
    {
      var _t = typeof WeakMap == "function" ? WeakMap : Map;
      pt = new _t();
    }
    function tt(c, y) {
      if (!c || Ce)
        return "";
      {
        var R = pt.get(c);
        if (R !== void 0)
          return R;
      }
      var B;
      Ce = !0;
      var q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = Ue.current, Ue.current = null, Ai();
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
            } catch (On) {
              B = On;
            }
            Reflect.construct(c, [], N);
          } else {
            try {
              N.call();
            } catch (On) {
              B = On;
            }
            c.call(N.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (On) {
            B = On;
          }
          c();
        }
      } catch (On) {
        if (On && B && typeof On.stack == "string") {
          for (var U = On.stack.split(`
`), mn = B.stack.split(`
`), un = U.length - 1, fn = mn.length - 1; un >= 1 && fn >= 0 && U[un] !== mn[fn]; )
            fn--;
          for (; un >= 1 && fn >= 0; un--, fn--)
            if (U[un] !== mn[fn]) {
              if (un !== 1 || fn !== 1)
                do
                  if (un--, fn--, fn < 0 || U[un] !== mn[fn]) {
                    var Ln = `
` + U[un].replace(" at new ", " at ");
                    return c.displayName && Ln.includes("<anonymous>") && (Ln = Ln.replace("<anonymous>", c.displayName)), typeof c == "function" && pt.set(c, Ln), Ln;
                  }
                while (un >= 1 && fn >= 0);
              break;
            }
        }
      } finally {
        Ce = !1, Ue.current = J, De(), Error.prepareStackTrace = q;
      }
      var fe = c ? c.displayName || c.name : "", Lr = fe ? pe(fe) : "";
      return typeof c == "function" && pt.set(c, Lr), Lr;
    }
    function br(c, y, R) {
      return tt(c, !1);
    }
    function zn(c) {
      var y = c.prototype;
      return !!(y && y.isReactComponent);
    }
    function _e(c, y, R) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return tt(c, zn(c));
      if (typeof c == "string")
        return pe(c);
      switch (c) {
        case hn:
          return pe("Suspense");
        case Z:
          return pe("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case z:
            return br(c.render);
          case nn:
            return _e(c.type, y, R);
          case Cn: {
            var B = c, q = B._payload, J = B._init;
            try {
              return _e(J(q), y, R);
            } catch {
            }
          }
        }
      return "";
    }
    var mt = Object.prototype.hasOwnProperty, Kn = {}, Wt = Mn.ReactDebugCurrentFrame;
    function xt(c) {
      if (c) {
        var y = c._owner, R = _e(c.type, c._source, y ? y.type : null);
        Wt.setExtraStackFrame(R);
      } else
        Wt.setExtraStackFrame(null);
    }
    function rt(c, y, R, B, q) {
      {
        var J = Function.call.bind(mt);
        for (var N in c)
          if (J(c, N)) {
            var U = void 0;
            try {
              if (typeof c[N] != "function") {
                var mn = Error((B || "React class") + ": " + R + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw mn.name = "Invariant Violation", mn;
              }
              U = c[N](y, N, B, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (un) {
              U = un;
            }
            U && !(U instanceof Error) && (xt(q), pn("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", R, N, typeof U), xt(null)), U instanceof Error && !(U.message in Kn) && (Kn[U.message] = !0, xt(q), pn("Failed %s type: %s", R, U.message), xt(null));
          }
      }
    }
    var Dn = Array.isArray;
    function Te(c) {
      return Dn(c);
    }
    function wt(c) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, R = y && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return R;
      }
    }
    function Ii(c) {
      try {
        return We(c), !1;
      } catch {
        return !0;
      }
    }
    function We(c) {
      return "" + c;
    }
    function Cr(c) {
      if (Ii(c))
        return pn("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wt(c)), We(c);
    }
    var le = Mn.ReactCurrentOwner, Ne = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, yt, bt, it;
    it = {};
    function Nt(c) {
      if (mt.call(c, "ref")) {
        var y = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function $t(c) {
      if (mt.call(c, "key")) {
        var y = Object.getOwnPropertyDescriptor(c, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function Gt(c, y) {
      if (typeof c.ref == "string" && le.current && y && le.current.stateNode !== y) {
        var R = ue(le.current.type);
        it[R] || (pn('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ue(le.current.type), c.ref), it[R] = !0);
      }
    }
    function qt(c, y) {
      {
        var R = function() {
          yt || (yt = !0, pn("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        R.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function Vt(c, y) {
      {
        var R = function() {
          bt || (bt = !0, pn("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        R.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var Yt = function(c, y, R, B, q, J, N) {
      var U = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: c,
        key: y,
        ref: R,
        props: N,
        // Record the component responsible for creating this element.
        _owner: J
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
        value: q
      }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    };
    function Mi(c, y, R, B, q) {
      {
        var J, N = {}, U = null, mn = null;
        R !== void 0 && (Cr(R), U = "" + R), $t(y) && (Cr(y.key), U = "" + y.key), Nt(y) && (mn = y.ref, Gt(y, q));
        for (J in y)
          mt.call(y, J) && !Ne.hasOwnProperty(J) && (N[J] = y[J]);
        if (c && c.defaultProps) {
          var un = c.defaultProps;
          for (J in un)
            N[J] === void 0 && (N[J] = un[J]);
        }
        if (U || mn) {
          var fn = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          U && qt(N, fn), mn && Vt(N, fn);
        }
        return Yt(c, U, mn, q, B, le.current, N);
      }
    }
    var Kt = Mn.ReactCurrentOwner, Tr = Mn.ReactDebugCurrentFrame;
    function Re(c) {
      if (c) {
        var y = c._owner, R = _e(c.type, c._source, y ? y.type : null);
        Tr.setExtraStackFrame(R);
      } else
        Tr.setExtraStackFrame(null);
    }
    var Ct;
    Ct = !1;
    function Zt(c) {
      return typeof c == "object" && c !== null && c.$$typeof === g;
    }
    function Rr() {
      {
        if (Kt.current) {
          var c = ue(Kt.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Li(c) {
      {
        if (c !== void 0) {
          var y = c.fileName.replace(/^.*[\\\/]/, ""), R = c.lineNumber;
          return `

Check your code at ` + y + ":" + R + ".";
        }
        return "";
      }
    }
    var Er = {};
    function Sr(c) {
      {
        var y = Rr();
        if (!y) {
          var R = typeof c == "string" ? c : c.displayName || c.name;
          R && (y = `

Check the top-level render call using <` + R + ">.");
        }
        return y;
      }
    }
    function Ar(c, y) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var R = Sr(y);
        if (Er[R])
          return;
        Er[R] = !0;
        var B = "";
        c && c._owner && c._owner !== Kt.current && (B = " It was passed a child from " + ue(c._owner.type) + "."), Re(c), pn('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, B), Re(null);
      }
    }
    function Ir(c, y) {
      {
        if (typeof c != "object")
          return;
        if (Te(c))
          for (var R = 0; R < c.length; R++) {
            var B = c[R];
            Zt(B) && Ar(B, y);
          }
        else if (Zt(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var q = In(c);
          if (typeof q == "function" && q !== c.entries)
            for (var J = q.call(c), N; !(N = J.next()).done; )
              Zt(N.value) && Ar(N.value, y);
        }
      }
    }
    function Oi(c) {
      {
        var y = c.type;
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
          rt(R, c.props, "prop", B, c);
        } else if (y.PropTypes !== void 0 && !Ct) {
          Ct = !0;
          var q = ue(y);
          pn("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && pn("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jt(c) {
      {
        for (var y = Object.keys(c.props), R = 0; R < y.length; R++) {
          var B = y[R];
          if (B !== "children" && B !== "key") {
            Re(c), pn("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), Re(null);
            break;
          }
        }
        c.ref !== null && (Re(c), pn("Invalid attribute `ref` supplied to `React.Fragment`."), Re(null));
      }
    }
    function Mr(c, y, R, B, q, J) {
      {
        var N = Ei(c);
        if (!N) {
          var U = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var mn = Li(q);
          mn ? U += mn : U += Rr();
          var un;
          c === null ? un = "null" : Te(c) ? un = "array" : c !== void 0 && c.$$typeof === g ? (un = "<" + (ue(c.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : un = typeof c, pn("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", un, U);
        }
        var fn = Mi(c, y, R, q, J);
        if (fn == null)
          return fn;
        if (N) {
          var Ln = y.children;
          if (Ln !== void 0)
            if (B)
              if (Te(Ln)) {
                for (var fe = 0; fe < Ln.length; fe++)
                  Ir(Ln[fe], c);
                Object.freeze && Object.freeze(Ln);
              } else
                pn("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ir(Ln, c);
        }
        return c === b ? Jt(fn) : Oi(fn), fn;
      }
    }
    function Xt(c, y, R) {
      return Mr(c, y, R, !0);
    }
    function Bi(c, y, R) {
      return Mr(c, y, R, !1);
    }
    var ki = Bi, Hi = Xt;
    vr.Fragment = b, vr.jsx = ki, vr.jsxs = Hi;
  }()), vr;
}
process.env.NODE_ENV === "production" ? Jo.exports = R0() : Jo.exports = E0();
var ru = Jo.exports;
const S0 = ru.Fragment, x = ru.jsx, An = ru.jsxs;
function Bv(o) {
  var g;
  return (
    // TODO: Should we wrap editor in MantineProvider? Otherwise we have to duplicate color hex values.
    // <MantineProvider theme={BlockNoteTheme}>
    /* @__PURE__ */ x(l0, { editor: ((g = o.editor) == null ? void 0 : g._tiptapEditor) || null })
  );
}
const kv = (o) => /* @__PURE__ */ x(
  f0,
  {
    ...o,
    className: `${o.className ? o.className + " " : ""}${Ko.inlineContent}`
  }
);
function Hv(o) {
  return {
    node: d0({
      name: o.type,
      content: o.containsInlineContent ? "inline*" : "",
      selectable: o.containsInlineContent,
      addOptions() {
        return {
          editor: void 0
        };
      },
      addAttributes() {
        return h0(o);
      },
      parseHTML() {
        return g0(o);
      },
      renderHTML({ HTMLAttributes: a }) {
        return v0(o, a);
      },
      addNodeView() {
        return c0((b) => {
          const T = o.render, I = {};
          for (const [Cn, Tn] of Object.entries(b.node.attrs))
            Cn in o.propSchema && (I[p0(Cn)] = Tn);
          const C = this.options.editor, V = typeof b.getPos == "function" ? b.getPos() : void 0, Z = C._tiptapEditor.state.doc.resolve(V).node().attrs.id, nn = C.getBlock(Z);
          if (nn.type !== o.type)
            throw new Error("Block type does not match");
          return /* @__PURE__ */ x(
            s0,
            {
              className: Ko.blockContent,
              "data-content-type": o.type,
              ...I,
              children: /* @__PURE__ */ x(T, { block: nn, editor: C })
            }
          );
        }, {
          className: Ko.reactNodeViewRenderer
        });
      }
    }),
    propSchema: o.propSchema
  };
}
var Xo, mi = w0;
if (process.env.NODE_ENV === "production")
  Xo = mi.createRoot, mi.hydrateRoot;
else {
  var Ol = mi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Xo = function(o, g) {
    Ol.usingClientEntryPoint = !0;
    try {
      return mi.createRoot(o, g);
    } finally {
      Ol.usingClientEntryPoint = !1;
    }
  };
}
function Bl(o) {
  const g = o.editorElementComponent, [a, b] = re(!1), T = ie(() => {
    b(!1), document.body.appendChild(o.rootElement);
  }, [o.rootElement]), I = ie(() => {
    o.rootElement.remove(), b(!0);
  }, [o.rootElement]);
  return /* @__PURE__ */ x(y0, { theme: o.theme, children: /* @__PURE__ */ x(
    Ti,
    {
      appendTo: o.rootElement,
      content: a ? void 0 : /* @__PURE__ */ x(
        g,
        {
          ...o.staticParams,
          ...o.dynamicParams
        }
      ),
      getReferenceClientRect: o.staticParams.getReferenceRect,
      interactive: !0,
      onShow: T,
      onHidden: I,
      visible: o.isOpen,
      ...o.tippyProps
    }
  ) });
}
const Ri = (o, g, a, b) => {
  const T = document.createElement("div"), I = Xo(T);
  let C;
  return {
    element: T,
    render: (V, z) => {
      C = V, I.render(
        /* @__PURE__ */ x(
          Bl,
          {
            rootElement: T,
            isOpen: !0,
            staticParams: o,
            dynamicParams: V,
            editorElementComponent: g,
            theme: a,
            tippyProps: b
          }
        )
      );
    },
    hide: () => {
      I.render(
        /* @__PURE__ */ x(
          Bl,
          {
            rootElement: T,
            isOpen: !1,
            staticParams: o,
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
var Dl = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, kl = He.createContext && He.createContext(Dl), Qe = globalThis && globalThis.__assign || function() {
  return Qe = Object.assign || function(o) {
    for (var g, a = 1, b = arguments.length; a < b; a++) {
      g = arguments[a];
      for (var T in g)
        Object.prototype.hasOwnProperty.call(g, T) && (o[T] = g[T]);
    }
    return o;
  }, Qe.apply(this, arguments);
}, A0 = globalThis && globalThis.__rest || function(o, g) {
  var a = {};
  for (var b in o)
    Object.prototype.hasOwnProperty.call(o, b) && g.indexOf(b) < 0 && (a[b] = o[b]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function")
    for (var T = 0, b = Object.getOwnPropertySymbols(o); T < b.length; T++)
      g.indexOf(b[T]) < 0 && Object.prototype.propertyIsEnumerable.call(o, b[T]) && (a[b[T]] = o[b[T]]);
  return a;
};
function Ul(o) {
  return o && o.map(function(g, a) {
    return He.createElement(g.tag, Qe({
      key: a
    }, g.attr), Ul(g.child));
  });
}
function rn(o) {
  return function(g) {
    return He.createElement(I0, Qe({
      attr: Qe({}, o.attr)
    }, g), Ul(o.child));
  };
}
function I0(o) {
  var g = function(a) {
    var b = o.attr, T = o.size, I = o.title, C = A0(o, ["attr", "size", "title"]), V = T || a.size || "1em", z;
    return a.className && (z = a.className), o.className && (z = (z ? z + " " : "") + o.className), He.createElement("svg", Qe({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, b, C, {
      className: z,
      style: Qe(Qe({
        color: o.color || a.color
      }, a.style), o.style),
      height: V,
      width: V,
      xmlns: "http://www.w3.org/2000/svg"
    }), I && He.createElement("title", null, I), o.children);
  };
  return kl !== void 0 ? He.createElement(kl.Consumer, null, function(a) {
    return g(a);
  }) : g(Dl);
}
function M0(o) {
  return rn({ tag: "svg", attr: { t: "1551322312294", style: "", viewBox: "0 0 1024 1024", version: "1.1" }, child: [{ tag: "defs", attr: {}, child: [] }, { tag: "path", attr: { d: "M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" } }, { tag: "path", attr: { d: "M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" } }] })(o);
}
function L0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" } }] })(o);
}
const O0 = (o) => {
  const { classes: g } = Dt({ root: {} })(void 0, {
    name: "DragHandleMenu"
  });
  return /* @__PURE__ */ x(ln.Dropdown, { className: g.root, children: o.children });
}, Wl = (o) => {
  const { closeMenu: g, onClick: a, ...b } = o;
  return /* @__PURE__ */ x(
    ln.Item,
    {
      ...b,
      onClick: (T) => {
        g(), a == null || a(T);
      },
      children: o.children
    }
  );
}, B0 = (o) => /* @__PURE__ */ x(
  Wl,
  {
    closeMenu: o.closeMenu,
    onClick: () => o.editor.removeBlocks([o.block]),
    children: o.children
  }
);
function k0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" } }] })(o);
}
function H0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" } }] })(o);
}
const Qo = (o) => {
  const g = o.textColor || "default", a = o.backgroundColor || "default", b = o.size || 16;
  return /* @__PURE__ */ x(
    Pl,
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
function jo(o) {
  return rn({ tag: "svg", attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z" } }] })(o);
}
const Nl = (o) => /* @__PURE__ */ An(S0, { children: [
  /* @__PURE__ */ x(ln.Label, { children: "Text" }),
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
  ].map((g) => /* @__PURE__ */ x(
    ln.Item,
    {
      onClick: () => {
        o.onClick && o.onClick(), o.setTextColor(g);
      },
      component: "div",
      "data-test": "text-color-" + g,
      icon: /* @__PURE__ */ x(Qo, { textColor: g, size: o.iconSize }),
      rightSection: o.textColor === g ? /* @__PURE__ */ x(jo, { size: 16, style: { paddingLeft: "8px" } }) : /* @__PURE__ */ x("div", { style: { width: "24px", padding: "0" } }),
      children: g.charAt(0).toUpperCase() + g.slice(1)
    },
    "text-color-" + g
  )),
  /* @__PURE__ */ x(ln.Label, { children: "Background" }),
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
  ].map((g) => /* @__PURE__ */ x(
    ln.Item,
    {
      onClick: () => {
        o.onClick && o.onClick(), o.setBackgroundColor(g);
      },
      component: "div",
      "data-test": "background-color-" + g,
      icon: /* @__PURE__ */ x(Qo, { backgroundColor: g, size: o.iconSize }),
      rightSection: o.backgroundColor === g ? /* @__PURE__ */ x(jo, { size: 16, style: { paddingLeft: "8px" } }) : /* @__PURE__ */ x("div", { style: { width: "24px", padding: "0" } }),
      children: g.charAt(0).toUpperCase() + g.slice(1)
    },
    "background-color-" + g
  ))
] }), F0 = (o) => {
  const [g, a] = re(!1), b = pr(), T = ie(() => {
    b.current && clearTimeout(b.current), b.current = setTimeout(() => {
      a(!1);
    }, 250);
  }, []), I = ie(() => {
    b.current && clearTimeout(b.current), a(!0);
  }, []);
  return !("textColor" in o.block.props) || !("backgroundColor" in o.block.props) ? null : /* @__PURE__ */ x(
    Wl,
    {
      closeMenu: o.closeMenu,
      onMouseLeave: T,
      onMouseOver: I,
      children: /* @__PURE__ */ An(ln, { opened: g, position: "right", children: [
        /* @__PURE__ */ x(ln.Target, { children: /* @__PURE__ */ An("div", { style: { display: "flex", alignItems: "center" }, children: [
          /* @__PURE__ */ x("div", { style: { flex: 1 }, children: o.children }),
          /* @__PURE__ */ x(Pl, { style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ x(H0, { size: 15 }) })
        ] }) }),
        /* @__PURE__ */ x(
          ln.Dropdown,
          {
            onMouseLeave: T,
            onMouseOver: I,
            style: { marginLeft: "5px" },
            children: /* @__PURE__ */ x(
              Nl,
              {
                iconSize: 18,
                textColor: o.block.props.textColor || "default",
                backgroundColor: o.block.props.backgroundColor || "default",
                setTextColor: (C) => o.editor.updateBlock(o.block, {
                  props: { textColor: C }
                }),
                setBackgroundColor: (C) => o.editor.updateBlock(o.block, {
                  props: { backgroundColor: C }
                })
              }
            )
          }
        )
      ] })
    }
  );
}, $l = (o) => /* @__PURE__ */ An(O0, { children: [
  /* @__PURE__ */ x(B0, { ...o, children: "Delete" }),
  /* @__PURE__ */ x(F0, { ...o, children: "Colors" })
] }), P0 = (o) => {
  const [g, a] = re(!1), b = pr(null);
  zt(() => {
    const C = b.current;
    if (C instanceof HTMLDivElement)
      return C.addEventListener("dragstart", o.blockDragStart), C.addEventListener("dragend", o.blockDragEnd), () => {
        C.removeEventListener("dragstart", o.blockDragStart), C.removeEventListener("dragend", o.blockDragEnd);
      };
  }, [o.blockDragEnd, o.blockDragStart]);
  const T = () => {
    a(!1), o.unfreezeMenu();
  }, I = o.dragHandleMenu || $l;
  return /* @__PURE__ */ An(eu, { spacing: 0, children: [
    /* @__PURE__ */ x(Zo, { size: 24, "data-test": "dragHandleAdd", children: /* @__PURE__ */ x(
      M0,
      {
        size: 24,
        onClick: () => {
          o.addBlock();
        }
      }
    ) }),
    /* @__PURE__ */ An(ln, { opened: g, width: 100, position: "left", children: [
      /* @__PURE__ */ x(ln.Target, { children: /* @__PURE__ */ x("div", { draggable: "true", ref: b, children: /* @__PURE__ */ x(
        Zo,
        {
          onClick: () => {
            a(!0), o.freezeMenu();
          },
          size: 24,
          "data-test": "dragHandle",
          children: /* @__PURE__ */ x(L0, { size: 24 })
        }
      ) }) }),
      /* @__PURE__ */ x(
        I,
        {
          editor: o.editor,
          block: o.block,
          closeMenu: T
        }
      )
    ] })
  ] });
}, z0 = (o, g = $l) => {
  const a = g, b = (T) => /* @__PURE__ */ x(P0, { ...T, dragHandleMenu: a });
  return (T) => Ri(T, b, o, {
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
}, Gl = (o) => {
  const { classes: g } = Dt({ root: {} })(void 0, {
    name: "Toolbar"
  });
  return /* @__PURE__ */ x(eu, { className: g.root, children: o.children });
}, ql = (o) => {
  const { classes: g } = Dt({ root: {} })(void 0, {
    name: "Tooltip"
  });
  return /* @__PURE__ */ An(tu, { spacing: 0, className: g.root, children: [
    /* @__PURE__ */ x(bi, { size: "sm", children: o.mainTooltip }),
    o.secondaryTooltip && /* @__PURE__ */ x(bi, { size: "xs", children: o.secondaryTooltip })
  ] });
}, Fe = nu(
  (o, g) => {
    const a = o.icon;
    return /* @__PURE__ */ x(
      Ti,
      {
        content: /* @__PURE__ */ x(
          ql,
          {
            mainTooltip: o.mainTooltip,
            secondaryTooltip: o.secondaryTooltip
          }
        ),
        trigger: "mouseenter",
        children: o.children ? /* @__PURE__ */ An(
          zl,
          {
            onClick: o.onClick,
            "data-selected": o.isSelected ? "true" : void 0,
            "data-test": o.mainTooltip.slice(0, 1).toLowerCase() + o.mainTooltip.replace(/\s+/g, "").slice(1),
            size: "xs",
            disabled: o.isDisabled || !1,
            ref: g,
            children: [
              a && /* @__PURE__ */ x(a, {}),
              o.children
            ]
          }
        ) : /* @__PURE__ */ x(
          Zo,
          {
            onClick: o.onClick,
            "data-selected": o.isSelected ? "true" : void 0,
            "data-test": o.mainTooltip.slice(0, 1).toLowerCase() + o.mainTooltip.replace(/\s+/g, "").slice(1),
            size: 30,
            disabled: o.isDisabled || !1,
            ref: g,
            children: a && /* @__PURE__ */ x(a, {})
          }
        )
      }
    );
  }
), D0 = (o) => {
  const g = ie(
    (b) => {
      o.editor.focus(), b === "default" ? o.editor.removeStyles({ textColor: b }) : o.editor.addStyles({ textColor: b });
    },
    [o.editor]
  ), a = ie(
    (b) => {
      o.editor.focus(), b === "default" ? o.editor.removeStyles({ backgroundColor: b }) : o.editor.addStyles({ backgroundColor: b });
    },
    [o.editor]
  );
  return /* @__PURE__ */ An(ln, { children: [
    /* @__PURE__ */ x(ln.Target, { children: /* @__PURE__ */ x(
      Fe,
      {
        mainTooltip: "Colors",
        icon: () => /* @__PURE__ */ x(
          Qo,
          {
            textColor: o.editor.getActiveStyles().textColor || "default",
            backgroundColor: o.editor.getActiveStyles().backgroundColor || "default",
            size: 20
          }
        )
      }
    ) }),
    /* @__PURE__ */ x(ln.Dropdown, { children: /* @__PURE__ */ x(
      Nl,
      {
        textColor: o.editor.getActiveStyles().textColor || "default",
        setTextColor: g,
        backgroundColor: o.editor.getActiveStyles().backgroundColor || "default",
        setBackgroundColor: a
      }
    ) })
  ] });
};
function U0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z" } }] }] })(o);
}
function W0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm2 15h14v2H5v-2zm-2-5h18v2H3v-2zm2-5h14v2H5V9z" } }] }] })(o);
}
function N0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm0 15h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V9z" } }] }] })(o);
}
function $0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z" } }] }] })(o);
}
function G0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm4 15h14v2H7v-2zm-4-5h18v2H3v-2zm4-5h14v2H7V9z" } }] }] })(o);
}
function q0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z" } }] }] })(o);
}
function Vl(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0H24V24H0z" } }, { tag: "path", attr: { d: "M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z" } }] }] })(o);
}
function Yl(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0H24V24H0z" } }, { tag: "path", attr: { d: "M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .857-.288 1.648-.772 2.28l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546c.268-.307.43-.709.43-1.148 0-.966-.784-1.75-1.75-1.75-.918 0-1.671.707-1.744 1.606l-.006.144h-2C14.75 9.679 16.429 8 18.5 8z" } }] }] })(o);
}
function Kl(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0H24V24H0z" } }, { tag: "path", attr: { d: "M22 8l-.002 2-2.505 2.883c1.59.435 2.757 1.89 2.757 3.617 0 2.071-1.679 3.75-3.75 3.75-1.826 0-3.347-1.305-3.682-3.033l1.964-.382c.156.806.866 1.415 1.718 1.415.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75c-.286 0-.556.069-.794.19l-1.307-1.547L19.35 10H15V8h7zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z" } }] }] })(o);
}
function V0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm0 15h18v2H3v-2zm8-5h10v2H11v-2zm0-5h10v2H11V9zm-8 3.5L7 9v7l-4-3.5z" } }] }] })(o);
}
function Y0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 4h18v2H3V4zm0 15h18v2H3v-2zm8-5h10v2H11v-2zm0-5h10v2H11V9zm-4 3.5L3 16V9l4 3.5z" } }] }] })(o);
}
function K0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" } }] }] })(o);
}
function Z0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M17 17h5v2h-3v3h-2v-5zM7 7H2V5h3V2h2v5zm11.364 8.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" } }] }] })(o);
}
function Zl(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" } }] }] })(o);
}
function Jl(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" } }] }] })(o);
}
function Xl(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" } }] }] })(o);
}
function J0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.086 4.086 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099.436.313.974.562 1.613.75.62.18 1.297.414 2.03.699z" } }] }] })(o);
}
function iu(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M13 6v15h-2V6H5V4h14v2z" } }] }] })(o);
}
function X0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3h2zM4 20h16v2H4v-2z" } }] }] })(o);
}
function Q0(o) {
  return rn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" } }] }] })(o);
}
function j0(o) {
  const g = o.icon;
  return /* @__PURE__ */ x(
    Ti,
    {
      content: /* @__PURE__ */ x(
        ql,
        {
          mainTooltip: o.mainTooltip,
          secondaryTooltip: o.secondaryTooltip
        }
      ),
      placement: "left",
      children: /* @__PURE__ */ x(b0, { children: /* @__PURE__ */ x(g, { size: 16 }) })
    }
  );
}
function nv(o) {
  function g(a) {
    a.key === "Enter" && (a.preventDefault(), o.onSubmit());
  }
  return /* @__PURE__ */ x(
    C0,
    {
      autoFocus: o.autofocus,
      size: "xs",
      value: o.value,
      onChange: (a) => o.onChange(a.currentTarget.value),
      onKeyDown: g,
      placeholder: o.placeholder
    }
  );
}
function Hl(o) {
  return /* @__PURE__ */ An(eu, { children: [
    /* @__PURE__ */ x(
      j0,
      {
        icon: o.icon,
        mainTooltip: o.mainIconTooltip,
        secondaryTooltip: o.secondaryIconTooltip
      }
    ),
    /* @__PURE__ */ x(
      nv,
      {
        autofocus: o.autofocus,
        placeholder: o.placeholder,
        value: o.value,
        onChange: o.onChange,
        onSubmit: o.onSubmit
      }
    )
  ] });
}
const Ql = nu((o, g) => {
  const { classes: a } = Dt({ root: {} })(void 0, {
    name: "EditHyperlinkMenu"
  }), [b, T] = re(o.url), [I, C] = re(o.text);
  return /* @__PURE__ */ An(tu, { className: a.root, ref: g, children: [
    /* @__PURE__ */ x(
      Hl,
      {
        icon: Zl,
        mainIconTooltip: "Edit URL",
        autofocus: !0,
        placeholder: "Edit URL",
        value: b,
        onChange: (V) => T(V),
        onSubmit: () => o.update(b, I)
      }
    ),
    /* @__PURE__ */ x(
      Hl,
      {
        icon: iu,
        mainIconTooltip: "Edit Title",
        placeholder: "Edit Title",
        value: I,
        onChange: (V) => C(V),
        onSubmit: () => o.update(b, I)
      }
    )
  ] });
}), ev = (o) => {
  const [g, a] = re(), [b, T] = re(!1), I = pr(null), C = pr(null), V = ie(() => {
    a(
      /* @__PURE__ */ x(
        Ql,
        {
          url: o.activeHyperlinkUrl,
          text: o.activeHyperlinkText,
          update: (hn, Z) => {
            o.setHyperlink(hn, Z), T(!1);
          },
          ref: C
        },
        Math.random() + ""
      )
    );
  }, [o]), z = ie(
    (hn) => {
      var Z, nn;
      if ((Z = I.current) != null && Z.contains(hn.target)) {
        T(!b);
        return;
      }
      (nn = C.current) != null && nn.contains(hn.target) || T(!1);
    },
    [b]
  );
  return zt(() => (document.body.addEventListener("click", z), () => document.body.removeEventListener("click", z)), [z]), /* @__PURE__ */ x(
    Ti,
    {
      content: g,
      onShow: V,
      interactive: !0,
      maxWidth: 500,
      visible: b,
      children: /* @__PURE__ */ x(
        Fe,
        {
          isSelected: o.isSelected,
          mainTooltip: o.mainTooltip,
          secondaryTooltip: o.secondaryTooltip,
          icon: o.icon,
          ref: I
        }
      )
    }
  );
}, tv = () => typeof navigator < "u" && (/Mac/.test(navigator.platform) || /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent));
function ye(o) {
  return tv() ? o.replace("Mod", "⌘") : o.replace("Mod", "Ctrl");
}
const rv = (o) => {
  const g = ie(
    (a, b) => {
      o.editor.focus(), o.editor.createLink(a, b);
    },
    [o.editor]
  );
  return /* @__PURE__ */ x(
    ev,
    {
      isSelected: !!o.editor.getSelectedLinkUrl(),
      mainTooltip: "Link",
      secondaryTooltip: ye("Mod+K"),
      icon: Zl,
      hyperlinkIsActive: !!o.editor.getSelectedLinkUrl(),
      activeHyperlinkUrl: o.editor.getSelectedLinkUrl() || "",
      activeHyperlinkText: o.editor.getSelectedText(),
      setHyperlink: g
    }
  );
}, iv = (o) => {
  const g = ie(() => {
    o.editor.focus(), o.editor.nestBlock();
  }, [o.editor]);
  return /* @__PURE__ */ x(
    Fe,
    {
      onClick: g,
      isDisabled: !o.editor.canNestBlock(),
      mainTooltip: "Nest Block",
      secondaryTooltip: ye("Tab"),
      icon: Y0
    }
  );
}, ov = (o) => {
  const g = ie(() => {
    o.editor.focus(), o.editor.unnestBlock();
  }, [o]);
  return /* @__PURE__ */ x(
    Fe,
    {
      onClick: g,
      isDisabled: !o.editor.canUnnestBlock(),
      mainTooltip: "Unnest Block",
      secondaryTooltip: ye("Shift+Tab"),
      icon: V0
    }
  );
}, uv = {
  left: $0,
  center: W0,
  right: G0,
  justify: N0
}, Yo = (o) => {
  const g = a0(() => {
    const b = o.editor.getSelection();
    if (b) {
      for (const T of b.blocks)
        if (!("textAlignment" in T.props))
          return !1;
    } else if (!("textAlignment" in o.editor.getTextCursorPosition().block.props))
      return !1;
    return !0;
  }, [o.editor]), a = ie(
    (b) => {
      o.editor.focus();
      const T = o.editor.getSelection();
      if (T)
        for (const I of T.blocks)
          o.editor.updateBlock(I, {
            props: { textAlignment: b }
          });
      else {
        const I = o.editor.getTextCursorPosition().block;
        o.editor.updateBlock(I, {
          props: { textAlignment: b }
        });
      }
    },
    [o.editor]
  );
  return g ? /* @__PURE__ */ x(
    Fe,
    {
      onClick: () => a(o.textAlignment),
      isSelected: o.editor.getTextCursorPosition().block.props.textAlignment === o.textAlignment,
      mainTooltip: o.textAlignment === "justify" ? "Justify Text" : "Align Text " + o.textAlignment.slice(0, 1).toUpperCase() + o.textAlignment.slice(1),
      icon: uv[o.textAlignment]
    }
  ) : null;
}, av = {
  bold: "Mod+B",
  italic: "Mod+I",
  underline: "Mod+U",
  strike: "Mod+Shift+X",
  code: ""
}, lv = {
  bold: q0,
  italic: K0,
  underline: X0,
  strike: J0,
  code: U0
}, xi = (o) => {
  const g = (a) => {
    o.editor.focus(), o.editor.toggleStyles({ [a]: !0 });
  };
  return /* @__PURE__ */ x(
    Fe,
    {
      onClick: () => g(o.toggledStyle),
      isSelected: o.toggledStyle in o.editor.getActiveStyles(),
      mainTooltip: o.toggledStyle.slice(0, 1).toUpperCase() + o.toggledStyle.slice(1),
      secondaryTooltip: ye(av[o.toggledStyle]),
      icon: lv[o.toggledStyle]
    }
  );
};
function fv(o) {
  const g = o.icon;
  return /* @__PURE__ */ x(
    ln.Item,
    {
      onClick: o.onClick,
      icon: g && /* @__PURE__ */ x(g, { size: 16 }),
      rightSection: o.isSelected ? /* @__PURE__ */ x(jo, { size: 16 }) : (
        // Ensures space for tick even if item isn't currently selected.
        /* @__PURE__ */ x("div", { style: { width: "16px", padding: "0" } })
      ),
      disabled: o.isDisabled,
      children: o.text
    },
    o.text
  );
}
const cv = nu((o, g) => {
  const a = o.icon;
  return /* @__PURE__ */ x(
    zl,
    {
      leftIcon: a && /* @__PURE__ */ x(a, { size: 16 }),
      rightIcon: /* @__PURE__ */ x(k0, {}),
      size: "xs",
      variant: "subtle",
      disabled: o.isDisabled,
      onClick: o.onClick,
      ref: g,
      children: o.text
    }
  );
});
function sv(o) {
  const g = o.items.filter((a) => a.isSelected)[0];
  return g ? /* @__PURE__ */ An(ln, { exitTransitionDuration: 0, disabled: o.isDisabled, children: [
    /* @__PURE__ */ x(ln.Target, { children: /* @__PURE__ */ x(cv, { ...g }) }),
    /* @__PURE__ */ x(ln.Dropdown, { children: o.items.map((a) => /* @__PURE__ */ x(fv, { ...a }, a.text)) })
  ] }) : null;
}
const dv = {
  1: Vl,
  2: Yl,
  3: Kl
}, hv = (o) => {
  const g = "paragraph" in o, a = "heading" in o && "level" in o.heading.propSchema, b = "bulletListItem" in o, T = "numberedListItem" in o;
  return g && a && b && T;
}, gv = (o) => {
  const [g, a] = re(
    o.editor.getTextCursorPosition().block
  );
  if (zt(
    () => a(o.editor.getTextCursorPosition().block),
    [o]
  ), !hv(o.editor.schema))
    return null;
  let b = o.editor;
  const T = b.schema.heading.propSchema.level.values.map(
    (I) => ({
      onClick: () => {
        b.focus(), b.updateBlock(g, {
          type: "heading",
          props: { level: I }
        });
      },
      text: "Heading " + I,
      icon: dv[I],
      isSelected: g.type === "heading" && g.props.level === I
    })
  );
  return /* @__PURE__ */ x(
    sv,
    {
      items: [
        {
          onClick: () => {
            o.editor.focus(), o.editor.updateBlock(g, {
              type: "paragraph",
              props: {}
            });
          },
          text: "Paragraph",
          icon: iu,
          isSelected: g.type === "paragraph"
        },
        ...T,
        {
          onClick: () => {
            o.editor.focus(), o.editor.updateBlock(g, {
              type: "bulletListItem",
              props: {}
            });
          },
          text: "Bullet List",
          icon: Xl,
          isSelected: g.type === "bulletListItem"
        },
        {
          onClick: () => {
            o.editor.focus(), o.editor.updateBlock(g, {
              type: "numberedListItem",
              props: {}
            });
          },
          text: "Numbered List",
          icon: Jl,
          isSelected: g.type === "numberedListItem"
        }
      ]
    }
  );
}, vv = (o) => /* @__PURE__ */ An(Gl, { children: [
  /* @__PURE__ */ x(gv, { ...o }),
  /* @__PURE__ */ x(xi, { editor: o.editor, toggledStyle: "bold" }),
  /* @__PURE__ */ x(xi, { editor: o.editor, toggledStyle: "italic" }),
  /* @__PURE__ */ x(xi, { editor: o.editor, toggledStyle: "underline" }),
  /* @__PURE__ */ x(xi, { editor: o.editor, toggledStyle: "strike" }),
  /* @__PURE__ */ x(Yo, { editor: o.editor, textAlignment: "left" }),
  /* @__PURE__ */ x(Yo, { editor: o.editor, textAlignment: "center" }),
  /* @__PURE__ */ x(Yo, { editor: o.editor, textAlignment: "right" }),
  /* @__PURE__ */ x(D0, { editor: o.editor }),
  /* @__PURE__ */ x(iv, { editor: o.editor }),
  /* @__PURE__ */ x(ov, { editor: o.editor }),
  /* @__PURE__ */ x(rv, { editor: o.editor })
] }), pv = (o, g = vv) => (a) => Ri(a, g, o, {
  animation: "fade",
  placement: "top-start"
}), Y = [
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
], wi = (o = !1) => {
  const g = `0px 4px 8px ${o ? Y[8] : Y[2]}, 0px 0px 1px ${o ? Y[6] : Y[1]}`, a = `1px solid ${o ? Y[7] : Y[1]}`, b = o ? Y[4] : Y[2], T = o ? Y[6] : Y[0], I = o ? Y[7] : Y[1], C = o ? Y[2] : Y[5], V = Y[4], z = o ? Y[7] : Y[1], hn = o ? Y[2] : Y[5], Z = o ? Y[8] : Y[5], nn = o ? Y[2] : Y[0], Cn = o ? Y[7] : Y[1], Tn = o ? Y[5] : Y[3];
  return {
    activeStyles: {
      // Removes button press effect.
      transform: "none"
    },
    colorScheme: o ? "dark" : "light",
    colors: {
      scheme: Y,
      dark: Y,
      textColors: [
        // primaryText,
        Y[6],
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
        Y[0],
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
              backgroundColor: Z,
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
              color: V
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
}, _v = (o) => {
  const [g, a] = re(!1);
  return g ? /* @__PURE__ */ x(
    Ql,
    {
      url: o.url,
      text: o.text,
      update: o.editHyperlink
    }
  ) : /* @__PURE__ */ An(Gl, { children: [
    /* @__PURE__ */ x(
      Fe,
      {
        mainTooltip: "Edit",
        isSelected: !1,
        onClick: () => a(!0),
        children: "Edit Link"
      }
    ),
    /* @__PURE__ */ x(
      Fe,
      {
        mainTooltip: "Open in new tab",
        isSelected: !1,
        onClick: () => {
          window.open(o.url, "_blank");
        },
        icon: Q0
      }
    ),
    /* @__PURE__ */ x(
      Fe,
      {
        mainTooltip: "Remove link",
        isSelected: !1,
        onClick: o.deleteHyperlink,
        icon: Z0
      }
    )
  ] });
}, mv = (o) => (g) => Ri(g, _v, o, {
  animation: "fade",
  placement: "top-start"
});
class xv extends _0 {
  constructor(g, a, b = [], T, I, C, V) {
    super(g, a, b), this.name = g, this.execute = a, this.aliases = b, this.group = T, this.icon = I, this.hint = C, this.shortcut = V;
  }
}
const yi = {
  Heading: {
    group: "Headings",
    icon: /* @__PURE__ */ x(Vl, { size: 18 }),
    hint: "Used for a top-level heading",
    shortcut: ye("Mod-Alt-1")
  },
  "Heading 2": {
    group: "Headings",
    icon: /* @__PURE__ */ x(Yl, { size: 18 }),
    hint: "Used for key sections",
    shortcut: ye("Mod-Alt-2")
  },
  "Heading 3": {
    group: "Headings",
    icon: /* @__PURE__ */ x(Kl, { size: 18 }),
    hint: "Used for subsections and group headings",
    shortcut: ye("Mod-Alt-3")
  },
  "Numbered List": {
    group: "Basic blocks",
    icon: /* @__PURE__ */ x(Jl, { size: 18 }),
    hint: "Used to display a numbered list",
    shortcut: ye("Mod-Alt-7")
  },
  "Bullet List": {
    group: "Basic blocks",
    icon: /* @__PURE__ */ x(Xl, { size: 18 }),
    hint: "Used to display an unordered list",
    shortcut: ye("Mod-Alt-9")
  },
  Paragraph: {
    group: "Basic blocks",
    icon: /* @__PURE__ */ x(iu, { size: 18 }),
    hint: "Used for the body of your document",
    shortcut: ye("Mod-Alt-0")
  }
}, wv = m0.map(
  (o) => new xv(
    o.name,
    o.execute,
    o.aliases,
    yi[o.name].group,
    yi[o.name].icon,
    yi[o.name].hint,
    yi[o.name].shortcut
  )
);
var Ci = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ci.exports;
(function(o, g) {
  (function() {
    var a, b = "4.17.21", T = 200, I = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", C = "Expected a function", V = "Invalid `variable` option passed into `_.template`", z = "__lodash_hash_undefined__", hn = 500, Z = "__lodash_placeholder__", nn = 1, Cn = 2, Tn = 4, be = 1, gt = 2, In = 1, Mn = 2, pn = 4, Vn = 8, Pe = 16, Yn = 32, ze = 64, oe = 128, je = 256, vt = 512, Ei = 30, Si = "...", _r = 800, ue = 16, ge = 1, nt = 2, mr = 3, ve = 1 / 0, ae = 9007199254740991, xr = 17976931348623157e292, et = 0 / 0, Pn = 4294967295, wr = Pn - 1, yr = Pn >>> 1, Ai = [
      ["ary", oe],
      ["bind", In],
      ["bindKey", Mn],
      ["curry", Vn],
      ["curryRight", Pe],
      ["flip", vt],
      ["partial", Yn],
      ["partialRight", ze],
      ["rearg", je]
    ], De = "[object Arguments]", Ue = "[object Array]", Ut = "[object AsyncFunction]", pe = "[object Boolean]", Ce = "[object Date]", pt = "[object DOMException]", _t = "[object Error]", tt = "[object Function]", br = "[object GeneratorFunction]", zn = "[object Map]", _e = "[object Number]", mt = "[object Null]", Kn = "[object Object]", Wt = "[object Promise]", xt = "[object Proxy]", rt = "[object RegExp]", Dn = "[object Set]", Te = "[object String]", wt = "[object Symbol]", Ii = "[object Undefined]", We = "[object WeakMap]", Cr = "[object WeakSet]", le = "[object ArrayBuffer]", Ne = "[object DataView]", yt = "[object Float32Array]", bt = "[object Float64Array]", it = "[object Int8Array]", Nt = "[object Int16Array]", $t = "[object Int32Array]", Gt = "[object Uint8Array]", qt = "[object Uint8ClampedArray]", Vt = "[object Uint16Array]", Yt = "[object Uint32Array]", Mi = /\b__p \+= '';/g, Kt = /\b(__p \+=) '' \+/g, Tr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Re = /&(?:amp|lt|gt|quot|#39);/g, Ct = /[&<>"']/g, Zt = RegExp(Re.source), Rr = RegExp(Ct.source), Li = /<%-([\s\S]+?)%>/g, Er = /<%([\s\S]+?)%>/g, Sr = /<%=([\s\S]+?)%>/g, Ar = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ir = /^\w*$/, Oi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Jt = /[\\^$.*+?()[\]{}|]/g, Mr = RegExp(Jt.source), Xt = /^\s+/, Bi = /\s/, ki = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Hi = /\{\n\/\* \[wrapped with (.+)\] \*/, c = /,? & /, y = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, R = /[()=,{}\[\]\/\s]/, B = /\\(\\)?/g, q = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, J = /\w*$/, N = /^[-+]0x[0-9a-f]+$/i, U = /^0b[01]+$/i, mn = /^\[object .+?Constructor\]$/, un = /^0o[0-7]+$/i, fn = /^(?:0|[1-9]\d*)$/, Ln = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, fe = /($^)/, Lr = /['\n\r\u2028\u2029\\]/g, On = "\\ud800-\\udfff", jl = "\\u0300-\\u036f", nf = "\\ufe20-\\ufe2f", ef = "\\u20d0-\\u20ff", ou = jl + nf + ef, uu = "\\u2700-\\u27bf", au = "a-z\\xdf-\\xf6\\xf8-\\xff", tf = "\\xac\\xb1\\xd7\\xf7", rf = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", of = "\\u2000-\\u206f", uf = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", lu = "A-Z\\xc0-\\xd6\\xd8-\\xde", fu = "\\ufe0e\\ufe0f", cu = tf + rf + of + uf, Fi = "['’]", af = "[" + On + "]", su = "[" + cu + "]", Or = "[" + ou + "]", du = "\\d+", lf = "[" + uu + "]", hu = "[" + au + "]", gu = "[^" + On + cu + du + uu + au + lu + "]", Pi = "\\ud83c[\\udffb-\\udfff]", ff = "(?:" + Or + "|" + Pi + ")", vu = "[^" + On + "]", zi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Di = "[\\ud800-\\udbff][\\udc00-\\udfff]", Tt = "[" + lu + "]", pu = "\\u200d", _u = "(?:" + hu + "|" + gu + ")", cf = "(?:" + Tt + "|" + gu + ")", mu = "(?:" + Fi + "(?:d|ll|m|re|s|t|ve))?", xu = "(?:" + Fi + "(?:D|LL|M|RE|S|T|VE))?", wu = ff + "?", yu = "[" + fu + "]?", sf = "(?:" + pu + "(?:" + [vu, zi, Di].join("|") + ")" + yu + wu + ")*", df = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", hf = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", bu = yu + wu + sf, gf = "(?:" + [lf, zi, Di].join("|") + ")" + bu, vf = "(?:" + [vu + Or + "?", Or, zi, Di, af].join("|") + ")", pf = RegExp(Fi, "g"), _f = RegExp(Or, "g"), Ui = RegExp(Pi + "(?=" + Pi + ")|" + vf + bu, "g"), mf = RegExp([
      Tt + "?" + hu + "+" + mu + "(?=" + [su, Tt, "$"].join("|") + ")",
      cf + "+" + xu + "(?=" + [su, Tt + _u, "$"].join("|") + ")",
      Tt + "?" + _u + "+" + mu,
      Tt + "+" + xu,
      hf,
      df,
      du,
      gf
    ].join("|"), "g"), xf = RegExp("[" + pu + On + ou + fu + "]"), wf = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, yf = [
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
    ], bf = -1, tn = {};
    tn[yt] = tn[bt] = tn[it] = tn[Nt] = tn[$t] = tn[Gt] = tn[qt] = tn[Vt] = tn[Yt] = !0, tn[De] = tn[Ue] = tn[le] = tn[pe] = tn[Ne] = tn[Ce] = tn[_t] = tn[tt] = tn[zn] = tn[_e] = tn[Kn] = tn[rt] = tn[Dn] = tn[Te] = tn[We] = !1;
    var en = {};
    en[De] = en[Ue] = en[le] = en[Ne] = en[pe] = en[Ce] = en[yt] = en[bt] = en[it] = en[Nt] = en[$t] = en[zn] = en[_e] = en[Kn] = en[rt] = en[Dn] = en[Te] = en[wt] = en[Gt] = en[qt] = en[Vt] = en[Yt] = !0, en[_t] = en[tt] = en[We] = !1;
    var Cf = {
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
    }, Tf = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Rf = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Ef = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Sf = parseFloat, Af = parseInt, Cu = typeof hr == "object" && hr && hr.Object === Object && hr, If = typeof self == "object" && self && self.Object === Object && self, xn = Cu || If || Function("return this")(), Wi = g && !g.nodeType && g, ot = Wi && !0 && o && !o.nodeType && o, Tu = ot && ot.exports === Wi, Ni = Tu && Cu.process, Zn = function() {
      try {
        var d = ot && ot.require && ot.require("util").types;
        return d || Ni && Ni.binding && Ni.binding("util");
      } catch {
      }
    }(), Ru = Zn && Zn.isArrayBuffer, Eu = Zn && Zn.isDate, Su = Zn && Zn.isMap, Au = Zn && Zn.isRegExp, Iu = Zn && Zn.isSet, Mu = Zn && Zn.isTypedArray;
    function Un(d, p, v) {
      switch (v.length) {
        case 0:
          return d.call(p);
        case 1:
          return d.call(p, v[0]);
        case 2:
          return d.call(p, v[0], v[1]);
        case 3:
          return d.call(p, v[0], v[1], v[2]);
      }
      return d.apply(p, v);
    }
    function Mf(d, p, v, S) {
      for (var k = -1, K = d == null ? 0 : d.length; ++k < K; ) {
        var gn = d[k];
        p(S, gn, v(gn), d);
      }
      return S;
    }
    function Jn(d, p) {
      for (var v = -1, S = d == null ? 0 : d.length; ++v < S && p(d[v], v, d) !== !1; )
        ;
      return d;
    }
    function Lf(d, p) {
      for (var v = d == null ? 0 : d.length; v-- && p(d[v], v, d) !== !1; )
        ;
      return d;
    }
    function Lu(d, p) {
      for (var v = -1, S = d == null ? 0 : d.length; ++v < S; )
        if (!p(d[v], v, d))
          return !1;
      return !0;
    }
    function $e(d, p) {
      for (var v = -1, S = d == null ? 0 : d.length, k = 0, K = []; ++v < S; ) {
        var gn = d[v];
        p(gn, v, d) && (K[k++] = gn);
      }
      return K;
    }
    function Br(d, p) {
      var v = d == null ? 0 : d.length;
      return !!v && Rt(d, p, 0) > -1;
    }
    function $i(d, p, v) {
      for (var S = -1, k = d == null ? 0 : d.length; ++S < k; )
        if (v(p, d[S]))
          return !0;
      return !1;
    }
    function on(d, p) {
      for (var v = -1, S = d == null ? 0 : d.length, k = Array(S); ++v < S; )
        k[v] = p(d[v], v, d);
      return k;
    }
    function Ge(d, p) {
      for (var v = -1, S = p.length, k = d.length; ++v < S; )
        d[k + v] = p[v];
      return d;
    }
    function Gi(d, p, v, S) {
      var k = -1, K = d == null ? 0 : d.length;
      for (S && K && (v = d[++k]); ++k < K; )
        v = p(v, d[k], k, d);
      return v;
    }
    function Of(d, p, v, S) {
      var k = d == null ? 0 : d.length;
      for (S && k && (v = d[--k]); k--; )
        v = p(v, d[k], k, d);
      return v;
    }
    function qi(d, p) {
      for (var v = -1, S = d == null ? 0 : d.length; ++v < S; )
        if (p(d[v], v, d))
          return !0;
      return !1;
    }
    var Bf = Vi("length");
    function kf(d) {
      return d.split("");
    }
    function Hf(d) {
      return d.match(y) || [];
    }
    function Ou(d, p, v) {
      var S;
      return v(d, function(k, K, gn) {
        if (p(k, K, gn))
          return S = K, !1;
      }), S;
    }
    function kr(d, p, v, S) {
      for (var k = d.length, K = v + (S ? 1 : -1); S ? K-- : ++K < k; )
        if (p(d[K], K, d))
          return K;
      return -1;
    }
    function Rt(d, p, v) {
      return p === p ? Yf(d, p, v) : kr(d, Bu, v);
    }
    function Ff(d, p, v, S) {
      for (var k = v - 1, K = d.length; ++k < K; )
        if (S(d[k], p))
          return k;
      return -1;
    }
    function Bu(d) {
      return d !== d;
    }
    function ku(d, p) {
      var v = d == null ? 0 : d.length;
      return v ? Ki(d, p) / v : et;
    }
    function Vi(d) {
      return function(p) {
        return p == null ? a : p[d];
      };
    }
    function Yi(d) {
      return function(p) {
        return d == null ? a : d[p];
      };
    }
    function Hu(d, p, v, S, k) {
      return k(d, function(K, gn, j) {
        v = S ? (S = !1, K) : p(v, K, gn, j);
      }), v;
    }
    function Pf(d, p) {
      var v = d.length;
      for (d.sort(p); v--; )
        d[v] = d[v].value;
      return d;
    }
    function Ki(d, p) {
      for (var v, S = -1, k = d.length; ++S < k; ) {
        var K = p(d[S]);
        K !== a && (v = v === a ? K : v + K);
      }
      return v;
    }
    function Zi(d, p) {
      for (var v = -1, S = Array(d); ++v < d; )
        S[v] = p(v);
      return S;
    }
    function zf(d, p) {
      return on(p, function(v) {
        return [v, d[v]];
      });
    }
    function Fu(d) {
      return d && d.slice(0, Uu(d) + 1).replace(Xt, "");
    }
    function Wn(d) {
      return function(p) {
        return d(p);
      };
    }
    function Ji(d, p) {
      return on(p, function(v) {
        return d[v];
      });
    }
    function Qt(d, p) {
      return d.has(p);
    }
    function Pu(d, p) {
      for (var v = -1, S = d.length; ++v < S && Rt(p, d[v], 0) > -1; )
        ;
      return v;
    }
    function zu(d, p) {
      for (var v = d.length; v-- && Rt(p, d[v], 0) > -1; )
        ;
      return v;
    }
    function Df(d, p) {
      for (var v = d.length, S = 0; v--; )
        d[v] === p && ++S;
      return S;
    }
    var Uf = Yi(Cf), Wf = Yi(Tf);
    function Nf(d) {
      return "\\" + Ef[d];
    }
    function $f(d, p) {
      return d == null ? a : d[p];
    }
    function Et(d) {
      return xf.test(d);
    }
    function Gf(d) {
      return wf.test(d);
    }
    function qf(d) {
      for (var p, v = []; !(p = d.next()).done; )
        v.push(p.value);
      return v;
    }
    function Xi(d) {
      var p = -1, v = Array(d.size);
      return d.forEach(function(S, k) {
        v[++p] = [k, S];
      }), v;
    }
    function Du(d, p) {
      return function(v) {
        return d(p(v));
      };
    }
    function qe(d, p) {
      for (var v = -1, S = d.length, k = 0, K = []; ++v < S; ) {
        var gn = d[v];
        (gn === p || gn === Z) && (d[v] = Z, K[k++] = v);
      }
      return K;
    }
    function Hr(d) {
      var p = -1, v = Array(d.size);
      return d.forEach(function(S) {
        v[++p] = S;
      }), v;
    }
    function Vf(d) {
      var p = -1, v = Array(d.size);
      return d.forEach(function(S) {
        v[++p] = [S, S];
      }), v;
    }
    function Yf(d, p, v) {
      for (var S = v - 1, k = d.length; ++S < k; )
        if (d[S] === p)
          return S;
      return -1;
    }
    function Kf(d, p, v) {
      for (var S = v + 1; S--; )
        if (d[S] === p)
          return S;
      return S;
    }
    function St(d) {
      return Et(d) ? Jf(d) : Bf(d);
    }
    function ce(d) {
      return Et(d) ? Xf(d) : kf(d);
    }
    function Uu(d) {
      for (var p = d.length; p-- && Bi.test(d.charAt(p)); )
        ;
      return p;
    }
    var Zf = Yi(Rf);
    function Jf(d) {
      for (var p = Ui.lastIndex = 0; Ui.test(d); )
        ++p;
      return p;
    }
    function Xf(d) {
      return d.match(Ui) || [];
    }
    function Qf(d) {
      return d.match(mf) || [];
    }
    var jf = function d(p) {
      p = p == null ? xn : At.defaults(xn.Object(), p, At.pick(xn, yf));
      var v = p.Array, S = p.Date, k = p.Error, K = p.Function, gn = p.Math, j = p.Object, Qi = p.RegExp, nc = p.String, Xn = p.TypeError, Fr = v.prototype, ec = K.prototype, It = j.prototype, Pr = p["__core-js_shared__"], zr = ec.toString, Q = It.hasOwnProperty, tc = 0, Wu = function() {
        var n = /[^.]+$/.exec(Pr && Pr.keys && Pr.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), Dr = It.toString, rc = zr.call(j), ic = xn._, oc = Qi(
        "^" + zr.call(Q).replace(Jt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ur = Tu ? p.Buffer : a, Ve = p.Symbol, Wr = p.Uint8Array, Nu = Ur ? Ur.allocUnsafe : a, Nr = Du(j.getPrototypeOf, j), $u = j.create, Gu = It.propertyIsEnumerable, $r = Fr.splice, qu = Ve ? Ve.isConcatSpreadable : a, jt = Ve ? Ve.iterator : a, ut = Ve ? Ve.toStringTag : a, Gr = function() {
        try {
          var n = st(j, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), uc = p.clearTimeout !== xn.clearTimeout && p.clearTimeout, ac = S && S.now !== xn.Date.now && S.now, lc = p.setTimeout !== xn.setTimeout && p.setTimeout, qr = gn.ceil, Vr = gn.floor, ji = j.getOwnPropertySymbols, fc = Ur ? Ur.isBuffer : a, Vu = p.isFinite, cc = Fr.join, sc = Du(j.keys, j), vn = gn.max, yn = gn.min, dc = S.now, hc = p.parseInt, Yu = gn.random, gc = Fr.reverse, no = st(p, "DataView"), nr = st(p, "Map"), eo = st(p, "Promise"), Mt = st(p, "Set"), er = st(p, "WeakMap"), tr = st(j, "create"), Yr = er && new er(), Lt = {}, vc = dt(no), pc = dt(nr), _c = dt(eo), mc = dt(Mt), xc = dt(er), Kr = Ve ? Ve.prototype : a, rr = Kr ? Kr.valueOf : a, Ku = Kr ? Kr.toString : a;
      function u(n) {
        if (cn(n) && !H(n) && !(n instanceof $)) {
          if (n instanceof Qn)
            return n;
          if (Q.call(n, "__wrapped__"))
            return Za(n);
        }
        return new Qn(n);
      }
      var Ot = function() {
        function n() {
        }
        return function(e) {
          if (!an(e))
            return {};
          if ($u)
            return $u(e);
          n.prototype = e;
          var t = new n();
          return n.prototype = a, t;
        };
      }();
      function Zr() {
      }
      function Qn(n, e) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = a;
      }
      u.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Li,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Er,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Sr,
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
          _: u
        }
      }, u.prototype = Zr.prototype, u.prototype.constructor = u, Qn.prototype = Ot(Zr.prototype), Qn.prototype.constructor = Qn;
      function $(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Pn, this.__views__ = [];
      }
      function wc() {
        var n = new $(this.__wrapped__);
        return n.__actions__ = Bn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Bn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Bn(this.__views__), n;
      }
      function yc() {
        if (this.__filtered__) {
          var n = new $(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function bc() {
        var n = this.__wrapped__.value(), e = this.__dir__, t = H(n), r = e < 0, i = t ? n.length : 0, l = ks(0, i, this.__views__), f = l.start, s = l.end, h = s - f, _ = r ? s : f - 1, m = this.__iteratees__, w = m.length, E = 0, A = yn(h, this.__takeCount__);
        if (!t || !r && i == h && A == h)
          return ma(n, this.__actions__);
        var L = [];
        n:
          for (; h-- && E < A; ) {
            _ += e;
            for (var P = -1, O = n[_]; ++P < w; ) {
              var W = m[P], G = W.iteratee, Gn = W.type, Sn = G(O);
              if (Gn == nt)
                O = Sn;
              else if (!Sn) {
                if (Gn == ge)
                  continue n;
                break n;
              }
            }
            L[E++] = O;
          }
        return L;
      }
      $.prototype = Ot(Zr.prototype), $.prototype.constructor = $;
      function at(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.clear(); ++e < t; ) {
          var r = n[e];
          this.set(r[0], r[1]);
        }
      }
      function Cc() {
        this.__data__ = tr ? tr(null) : {}, this.size = 0;
      }
      function Tc(n) {
        var e = this.has(n) && delete this.__data__[n];
        return this.size -= e ? 1 : 0, e;
      }
      function Rc(n) {
        var e = this.__data__;
        if (tr) {
          var t = e[n];
          return t === z ? a : t;
        }
        return Q.call(e, n) ? e[n] : a;
      }
      function Ec(n) {
        var e = this.__data__;
        return tr ? e[n] !== a : Q.call(e, n);
      }
      function Sc(n, e) {
        var t = this.__data__;
        return this.size += this.has(n) ? 0 : 1, t[n] = tr && e === a ? z : e, this;
      }
      at.prototype.clear = Cc, at.prototype.delete = Tc, at.prototype.get = Rc, at.prototype.has = Ec, at.prototype.set = Sc;
      function Ee(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.clear(); ++e < t; ) {
          var r = n[e];
          this.set(r[0], r[1]);
        }
      }
      function Ac() {
        this.__data__ = [], this.size = 0;
      }
      function Ic(n) {
        var e = this.__data__, t = Jr(e, n);
        if (t < 0)
          return !1;
        var r = e.length - 1;
        return t == r ? e.pop() : $r.call(e, t, 1), --this.size, !0;
      }
      function Mc(n) {
        var e = this.__data__, t = Jr(e, n);
        return t < 0 ? a : e[t][1];
      }
      function Lc(n) {
        return Jr(this.__data__, n) > -1;
      }
      function Oc(n, e) {
        var t = this.__data__, r = Jr(t, n);
        return r < 0 ? (++this.size, t.push([n, e])) : t[r][1] = e, this;
      }
      Ee.prototype.clear = Ac, Ee.prototype.delete = Ic, Ee.prototype.get = Mc, Ee.prototype.has = Lc, Ee.prototype.set = Oc;
      function Se(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.clear(); ++e < t; ) {
          var r = n[e];
          this.set(r[0], r[1]);
        }
      }
      function Bc() {
        this.size = 0, this.__data__ = {
          hash: new at(),
          map: new (nr || Ee)(),
          string: new at()
        };
      }
      function kc(n) {
        var e = li(this, n).delete(n);
        return this.size -= e ? 1 : 0, e;
      }
      function Hc(n) {
        return li(this, n).get(n);
      }
      function Fc(n) {
        return li(this, n).has(n);
      }
      function Pc(n, e) {
        var t = li(this, n), r = t.size;
        return t.set(n, e), this.size += t.size == r ? 0 : 1, this;
      }
      Se.prototype.clear = Bc, Se.prototype.delete = kc, Se.prototype.get = Hc, Se.prototype.has = Fc, Se.prototype.set = Pc;
      function lt(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.__data__ = new Se(); ++e < t; )
          this.add(n[e]);
      }
      function zc(n) {
        return this.__data__.set(n, z), this;
      }
      function Dc(n) {
        return this.__data__.has(n);
      }
      lt.prototype.add = lt.prototype.push = zc, lt.prototype.has = Dc;
      function se(n) {
        var e = this.__data__ = new Ee(n);
        this.size = e.size;
      }
      function Uc() {
        this.__data__ = new Ee(), this.size = 0;
      }
      function Wc(n) {
        var e = this.__data__, t = e.delete(n);
        return this.size = e.size, t;
      }
      function Nc(n) {
        return this.__data__.get(n);
      }
      function $c(n) {
        return this.__data__.has(n);
      }
      function Gc(n, e) {
        var t = this.__data__;
        if (t instanceof Ee) {
          var r = t.__data__;
          if (!nr || r.length < T - 1)
            return r.push([n, e]), this.size = ++t.size, this;
          t = this.__data__ = new Se(r);
        }
        return t.set(n, e), this.size = t.size, this;
      }
      se.prototype.clear = Uc, se.prototype.delete = Wc, se.prototype.get = Nc, se.prototype.has = $c, se.prototype.set = Gc;
      function Zu(n, e) {
        var t = H(n), r = !t && ht(n), i = !t && !r && Xe(n), l = !t && !r && !i && Ft(n), f = t || r || i || l, s = f ? Zi(n.length, nc) : [], h = s.length;
        for (var _ in n)
          (e || Q.call(n, _)) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
          (_ == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          i && (_ == "offset" || _ == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          l && (_ == "buffer" || _ == "byteLength" || _ == "byteOffset") || // Skip index properties.
          Le(_, h))) && s.push(_);
        return s;
      }
      function Ju(n) {
        var e = n.length;
        return e ? n[ho(0, e - 1)] : a;
      }
      function qc(n, e) {
        return fi(Bn(n), ft(e, 0, n.length));
      }
      function Vc(n) {
        return fi(Bn(n));
      }
      function to(n, e, t) {
        (t !== a && !de(n[e], t) || t === a && !(e in n)) && Ae(n, e, t);
      }
      function ir(n, e, t) {
        var r = n[e];
        (!(Q.call(n, e) && de(r, t)) || t === a && !(e in n)) && Ae(n, e, t);
      }
      function Jr(n, e) {
        for (var t = n.length; t--; )
          if (de(n[t][0], e))
            return t;
        return -1;
      }
      function Yc(n, e, t, r) {
        return Ye(n, function(i, l, f) {
          e(r, i, t(i), f);
        }), r;
      }
      function Xu(n, e) {
        return n && xe(e, _n(e), n);
      }
      function Kc(n, e) {
        return n && xe(e, Hn(e), n);
      }
      function Ae(n, e, t) {
        e == "__proto__" && Gr ? Gr(n, e, {
          configurable: !0,
          enumerable: !0,
          value: t,
          writable: !0
        }) : n[e] = t;
      }
      function ro(n, e) {
        for (var t = -1, r = e.length, i = v(r), l = n == null; ++t < r; )
          i[t] = l ? a : zo(n, e[t]);
        return i;
      }
      function ft(n, e, t) {
        return n === n && (t !== a && (n = n <= t ? n : t), e !== a && (n = n >= e ? n : e)), n;
      }
      function jn(n, e, t, r, i, l) {
        var f, s = e & nn, h = e & Cn, _ = e & Tn;
        if (t && (f = i ? t(n, r, i, l) : t(n)), f !== a)
          return f;
        if (!an(n))
          return n;
        var m = H(n);
        if (m) {
          if (f = Fs(n), !s)
            return Bn(n, f);
        } else {
          var w = bn(n), E = w == tt || w == br;
          if (Xe(n))
            return ya(n, s);
          if (w == Kn || w == De || E && !i) {
            if (f = h || E ? {} : Ua(n), !s)
              return h ? Rs(n, Kc(f, n)) : Ts(n, Xu(f, n));
          } else {
            if (!en[w])
              return i ? n : {};
            f = Ps(n, w, s);
          }
        }
        l || (l = new se());
        var A = l.get(n);
        if (A)
          return A;
        l.set(n, f), vl(n) ? n.forEach(function(O) {
          f.add(jn(O, e, t, O, n, l));
        }) : hl(n) && n.forEach(function(O, W) {
          f.set(W, jn(O, e, t, W, n, l));
        });
        var L = _ ? h ? To : Co : h ? Hn : _n, P = m ? a : L(n);
        return Jn(P || n, function(O, W) {
          P && (W = O, O = n[W]), ir(f, W, jn(O, e, t, W, n, l));
        }), f;
      }
      function Zc(n) {
        var e = _n(n);
        return function(t) {
          return Qu(t, n, e);
        };
      }
      function Qu(n, e, t) {
        var r = t.length;
        if (n == null)
          return !r;
        for (n = j(n); r--; ) {
          var i = t[r], l = e[i], f = n[i];
          if (f === a && !(i in n) || !l(f))
            return !1;
        }
        return !0;
      }
      function ju(n, e, t) {
        if (typeof n != "function")
          throw new Xn(C);
        return sr(function() {
          n.apply(a, t);
        }, e);
      }
      function or(n, e, t, r) {
        var i = -1, l = Br, f = !0, s = n.length, h = [], _ = e.length;
        if (!s)
          return h;
        t && (e = on(e, Wn(t))), r ? (l = $i, f = !1) : e.length >= T && (l = Qt, f = !1, e = new lt(e));
        n:
          for (; ++i < s; ) {
            var m = n[i], w = t == null ? m : t(m);
            if (m = r || m !== 0 ? m : 0, f && w === w) {
              for (var E = _; E--; )
                if (e[E] === w)
                  continue n;
              h.push(m);
            } else
              l(e, w, r) || h.push(m);
          }
        return h;
      }
      var Ye = Ea(me), na = Ea(oo, !0);
      function Jc(n, e) {
        var t = !0;
        return Ye(n, function(r, i, l) {
          return t = !!e(r, i, l), t;
        }), t;
      }
      function Xr(n, e, t) {
        for (var r = -1, i = n.length; ++r < i; ) {
          var l = n[r], f = e(l);
          if (f != null && (s === a ? f === f && !$n(f) : t(f, s)))
            var s = f, h = l;
        }
        return h;
      }
      function Xc(n, e, t, r) {
        var i = n.length;
        for (t = F(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === a || r > i ? i : F(r), r < 0 && (r += i), r = t > r ? 0 : _l(r); t < r; )
          n[t++] = e;
        return n;
      }
      function ea(n, e) {
        var t = [];
        return Ye(n, function(r, i, l) {
          e(r, i, l) && t.push(r);
        }), t;
      }
      function wn(n, e, t, r, i) {
        var l = -1, f = n.length;
        for (t || (t = Ds), i || (i = []); ++l < f; ) {
          var s = n[l];
          e > 0 && t(s) ? e > 1 ? wn(s, e - 1, t, r, i) : Ge(i, s) : r || (i[i.length] = s);
        }
        return i;
      }
      var io = Sa(), ta = Sa(!0);
      function me(n, e) {
        return n && io(n, e, _n);
      }
      function oo(n, e) {
        return n && ta(n, e, _n);
      }
      function Qr(n, e) {
        return $e(e, function(t) {
          return Oe(n[t]);
        });
      }
      function ct(n, e) {
        e = Ze(e, n);
        for (var t = 0, r = e.length; n != null && t < r; )
          n = n[we(e[t++])];
        return t && t == r ? n : a;
      }
      function ra(n, e, t) {
        var r = e(n);
        return H(n) ? r : Ge(r, t(n));
      }
      function Rn(n) {
        return n == null ? n === a ? Ii : mt : ut && ut in j(n) ? Bs(n) : Vs(n);
      }
      function uo(n, e) {
        return n > e;
      }
      function Qc(n, e) {
        return n != null && Q.call(n, e);
      }
      function jc(n, e) {
        return n != null && e in j(n);
      }
      function ns(n, e, t) {
        return n >= yn(e, t) && n < vn(e, t);
      }
      function ao(n, e, t) {
        for (var r = t ? $i : Br, i = n[0].length, l = n.length, f = l, s = v(l), h = 1 / 0, _ = []; f--; ) {
          var m = n[f];
          f && e && (m = on(m, Wn(e))), h = yn(m.length, h), s[f] = !t && (e || i >= 120 && m.length >= 120) ? new lt(f && m) : a;
        }
        m = n[0];
        var w = -1, E = s[0];
        n:
          for (; ++w < i && _.length < h; ) {
            var A = m[w], L = e ? e(A) : A;
            if (A = t || A !== 0 ? A : 0, !(E ? Qt(E, L) : r(_, L, t))) {
              for (f = l; --f; ) {
                var P = s[f];
                if (!(P ? Qt(P, L) : r(n[f], L, t)))
                  continue n;
              }
              E && E.push(L), _.push(A);
            }
          }
        return _;
      }
      function es(n, e, t, r) {
        return me(n, function(i, l, f) {
          e(r, t(i), l, f);
        }), r;
      }
      function ur(n, e, t) {
        e = Ze(e, n), n = Ga(n, e);
        var r = n == null ? n : n[we(ee(e))];
        return r == null ? a : Un(r, n, t);
      }
      function ia(n) {
        return cn(n) && Rn(n) == De;
      }
      function ts(n) {
        return cn(n) && Rn(n) == le;
      }
      function rs(n) {
        return cn(n) && Rn(n) == Ce;
      }
      function ar(n, e, t, r, i) {
        return n === e ? !0 : n == null || e == null || !cn(n) && !cn(e) ? n !== n && e !== e : is(n, e, t, r, ar, i);
      }
      function is(n, e, t, r, i, l) {
        var f = H(n), s = H(e), h = f ? Ue : bn(n), _ = s ? Ue : bn(e);
        h = h == De ? Kn : h, _ = _ == De ? Kn : _;
        var m = h == Kn, w = _ == Kn, E = h == _;
        if (E && Xe(n)) {
          if (!Xe(e))
            return !1;
          f = !0, m = !1;
        }
        if (E && !m)
          return l || (l = new se()), f || Ft(n) ? Pa(n, e, t, r, i, l) : Ls(n, e, h, t, r, i, l);
        if (!(t & be)) {
          var A = m && Q.call(n, "__wrapped__"), L = w && Q.call(e, "__wrapped__");
          if (A || L) {
            var P = A ? n.value() : n, O = L ? e.value() : e;
            return l || (l = new se()), i(P, O, t, r, l);
          }
        }
        return E ? (l || (l = new se()), Os(n, e, t, r, i, l)) : !1;
      }
      function os(n) {
        return cn(n) && bn(n) == zn;
      }
      function lo(n, e, t, r) {
        var i = t.length, l = i, f = !r;
        if (n == null)
          return !l;
        for (n = j(n); i--; ) {
          var s = t[i];
          if (f && s[2] ? s[1] !== n[s[0]] : !(s[0] in n))
            return !1;
        }
        for (; ++i < l; ) {
          s = t[i];
          var h = s[0], _ = n[h], m = s[1];
          if (f && s[2]) {
            if (_ === a && !(h in n))
              return !1;
          } else {
            var w = new se();
            if (r)
              var E = r(_, m, h, n, e, w);
            if (!(E === a ? ar(m, _, be | gt, r, w) : E))
              return !1;
          }
        }
        return !0;
      }
      function oa(n) {
        if (!an(n) || Ws(n))
          return !1;
        var e = Oe(n) ? oc : mn;
        return e.test(dt(n));
      }
      function us(n) {
        return cn(n) && Rn(n) == rt;
      }
      function as(n) {
        return cn(n) && bn(n) == Dn;
      }
      function ls(n) {
        return cn(n) && vi(n.length) && !!tn[Rn(n)];
      }
      function ua(n) {
        return typeof n == "function" ? n : n == null ? Fn : typeof n == "object" ? H(n) ? fa(n[0], n[1]) : la(n) : Al(n);
      }
      function fo(n) {
        if (!cr(n))
          return sc(n);
        var e = [];
        for (var t in j(n))
          Q.call(n, t) && t != "constructor" && e.push(t);
        return e;
      }
      function fs(n) {
        if (!an(n))
          return qs(n);
        var e = cr(n), t = [];
        for (var r in n)
          r == "constructor" && (e || !Q.call(n, r)) || t.push(r);
        return t;
      }
      function co(n, e) {
        return n < e;
      }
      function aa(n, e) {
        var t = -1, r = kn(n) ? v(n.length) : [];
        return Ye(n, function(i, l, f) {
          r[++t] = e(i, l, f);
        }), r;
      }
      function la(n) {
        var e = Eo(n);
        return e.length == 1 && e[0][2] ? Na(e[0][0], e[0][1]) : function(t) {
          return t === n || lo(t, n, e);
        };
      }
      function fa(n, e) {
        return Ao(n) && Wa(e) ? Na(we(n), e) : function(t) {
          var r = zo(t, n);
          return r === a && r === e ? Do(t, n) : ar(e, r, be | gt);
        };
      }
      function jr(n, e, t, r, i) {
        n !== e && io(e, function(l, f) {
          if (i || (i = new se()), an(l))
            cs(n, e, f, t, jr, r, i);
          else {
            var s = r ? r(Mo(n, f), l, f + "", n, e, i) : a;
            s === a && (s = l), to(n, f, s);
          }
        }, Hn);
      }
      function cs(n, e, t, r, i, l, f) {
        var s = Mo(n, t), h = Mo(e, t), _ = f.get(h);
        if (_) {
          to(n, t, _);
          return;
        }
        var m = l ? l(s, h, t + "", n, e, f) : a, w = m === a;
        if (w) {
          var E = H(h), A = !E && Xe(h), L = !E && !A && Ft(h);
          m = h, E || A || L ? H(s) ? m = s : sn(s) ? m = Bn(s) : A ? (w = !1, m = ya(h, !0)) : L ? (w = !1, m = ba(h, !0)) : m = [] : dr(h) || ht(h) ? (m = s, ht(s) ? m = ml(s) : (!an(s) || Oe(s)) && (m = Ua(h))) : w = !1;
        }
        w && (f.set(h, m), i(m, h, r, l, f), f.delete(h)), to(n, t, m);
      }
      function ca(n, e) {
        var t = n.length;
        if (t)
          return e += e < 0 ? t : 0, Le(e, t) ? n[e] : a;
      }
      function sa(n, e, t) {
        e.length ? e = on(e, function(l) {
          return H(l) ? function(f) {
            return ct(f, l.length === 1 ? l[0] : l);
          } : l;
        }) : e = [Fn];
        var r = -1;
        e = on(e, Wn(M()));
        var i = aa(n, function(l, f, s) {
          var h = on(e, function(_) {
            return _(l);
          });
          return { criteria: h, index: ++r, value: l };
        });
        return Pf(i, function(l, f) {
          return Cs(l, f, t);
        });
      }
      function ss(n, e) {
        return da(n, e, function(t, r) {
          return Do(n, r);
        });
      }
      function da(n, e, t) {
        for (var r = -1, i = e.length, l = {}; ++r < i; ) {
          var f = e[r], s = ct(n, f);
          t(s, f) && lr(l, Ze(f, n), s);
        }
        return l;
      }
      function ds(n) {
        return function(e) {
          return ct(e, n);
        };
      }
      function so(n, e, t, r) {
        var i = r ? Ff : Rt, l = -1, f = e.length, s = n;
        for (n === e && (e = Bn(e)), t && (s = on(n, Wn(t))); ++l < f; )
          for (var h = 0, _ = e[l], m = t ? t(_) : _; (h = i(s, m, h, r)) > -1; )
            s !== n && $r.call(s, h, 1), $r.call(n, h, 1);
        return n;
      }
      function ha(n, e) {
        for (var t = n ? e.length : 0, r = t - 1; t--; ) {
          var i = e[t];
          if (t == r || i !== l) {
            var l = i;
            Le(i) ? $r.call(n, i, 1) : po(n, i);
          }
        }
        return n;
      }
      function ho(n, e) {
        return n + Vr(Yu() * (e - n + 1));
      }
      function hs(n, e, t, r) {
        for (var i = -1, l = vn(qr((e - n) / (t || 1)), 0), f = v(l); l--; )
          f[r ? l : ++i] = n, n += t;
        return f;
      }
      function go(n, e) {
        var t = "";
        if (!n || e < 1 || e > ae)
          return t;
        do
          e % 2 && (t += n), e = Vr(e / 2), e && (n += n);
        while (e);
        return t;
      }
      function D(n, e) {
        return Lo($a(n, e, Fn), n + "");
      }
      function gs(n) {
        return Ju(Pt(n));
      }
      function vs(n, e) {
        var t = Pt(n);
        return fi(t, ft(e, 0, t.length));
      }
      function lr(n, e, t, r) {
        if (!an(n))
          return n;
        e = Ze(e, n);
        for (var i = -1, l = e.length, f = l - 1, s = n; s != null && ++i < l; ) {
          var h = we(e[i]), _ = t;
          if (h === "__proto__" || h === "constructor" || h === "prototype")
            return n;
          if (i != f) {
            var m = s[h];
            _ = r ? r(m, h, s) : a, _ === a && (_ = an(m) ? m : Le(e[i + 1]) ? [] : {});
          }
          ir(s, h, _), s = s[h];
        }
        return n;
      }
      var ga = Yr ? function(n, e) {
        return Yr.set(n, e), n;
      } : Fn, ps = Gr ? function(n, e) {
        return Gr(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Wo(e),
          writable: !0
        });
      } : Fn;
      function _s(n) {
        return fi(Pt(n));
      }
      function ne(n, e, t) {
        var r = -1, i = n.length;
        e < 0 && (e = -e > i ? 0 : i + e), t = t > i ? i : t, t < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
        for (var l = v(i); ++r < i; )
          l[r] = n[r + e];
        return l;
      }
      function ms(n, e) {
        var t;
        return Ye(n, function(r, i, l) {
          return t = e(r, i, l), !t;
        }), !!t;
      }
      function ni(n, e, t) {
        var r = 0, i = n == null ? r : n.length;
        if (typeof e == "number" && e === e && i <= yr) {
          for (; r < i; ) {
            var l = r + i >>> 1, f = n[l];
            f !== null && !$n(f) && (t ? f <= e : f < e) ? r = l + 1 : i = l;
          }
          return i;
        }
        return vo(n, e, Fn, t);
      }
      function vo(n, e, t, r) {
        var i = 0, l = n == null ? 0 : n.length;
        if (l === 0)
          return 0;
        e = t(e);
        for (var f = e !== e, s = e === null, h = $n(e), _ = e === a; i < l; ) {
          var m = Vr((i + l) / 2), w = t(n[m]), E = w !== a, A = w === null, L = w === w, P = $n(w);
          if (f)
            var O = r || L;
          else
            _ ? O = L && (r || E) : s ? O = L && E && (r || !A) : h ? O = L && E && !A && (r || !P) : A || P ? O = !1 : O = r ? w <= e : w < e;
          O ? i = m + 1 : l = m;
        }
        return yn(l, wr);
      }
      function va(n, e) {
        for (var t = -1, r = n.length, i = 0, l = []; ++t < r; ) {
          var f = n[t], s = e ? e(f) : f;
          if (!t || !de(s, h)) {
            var h = s;
            l[i++] = f === 0 ? 0 : f;
          }
        }
        return l;
      }
      function pa(n) {
        return typeof n == "number" ? n : $n(n) ? et : +n;
      }
      function Nn(n) {
        if (typeof n == "string")
          return n;
        if (H(n))
          return on(n, Nn) + "";
        if ($n(n))
          return Ku ? Ku.call(n) : "";
        var e = n + "";
        return e == "0" && 1 / n == -ve ? "-0" : e;
      }
      function Ke(n, e, t) {
        var r = -1, i = Br, l = n.length, f = !0, s = [], h = s;
        if (t)
          f = !1, i = $i;
        else if (l >= T) {
          var _ = e ? null : Is(n);
          if (_)
            return Hr(_);
          f = !1, i = Qt, h = new lt();
        } else
          h = e ? [] : s;
        n:
          for (; ++r < l; ) {
            var m = n[r], w = e ? e(m) : m;
            if (m = t || m !== 0 ? m : 0, f && w === w) {
              for (var E = h.length; E--; )
                if (h[E] === w)
                  continue n;
              e && h.push(w), s.push(m);
            } else
              i(h, w, t) || (h !== s && h.push(w), s.push(m));
          }
        return s;
      }
      function po(n, e) {
        return e = Ze(e, n), n = Ga(n, e), n == null || delete n[we(ee(e))];
      }
      function _a(n, e, t, r) {
        return lr(n, e, t(ct(n, e)), r);
      }
      function ei(n, e, t, r) {
        for (var i = n.length, l = r ? i : -1; (r ? l-- : ++l < i) && e(n[l], l, n); )
          ;
        return t ? ne(n, r ? 0 : l, r ? l + 1 : i) : ne(n, r ? l + 1 : 0, r ? i : l);
      }
      function ma(n, e) {
        var t = n;
        return t instanceof $ && (t = t.value()), Gi(e, function(r, i) {
          return i.func.apply(i.thisArg, Ge([r], i.args));
        }, t);
      }
      function _o(n, e, t) {
        var r = n.length;
        if (r < 2)
          return r ? Ke(n[0]) : [];
        for (var i = -1, l = v(r); ++i < r; )
          for (var f = n[i], s = -1; ++s < r; )
            s != i && (l[i] = or(l[i] || f, n[s], e, t));
        return Ke(wn(l, 1), e, t);
      }
      function xa(n, e, t) {
        for (var r = -1, i = n.length, l = e.length, f = {}; ++r < i; ) {
          var s = r < l ? e[r] : a;
          t(f, n[r], s);
        }
        return f;
      }
      function mo(n) {
        return sn(n) ? n : [];
      }
      function xo(n) {
        return typeof n == "function" ? n : Fn;
      }
      function Ze(n, e) {
        return H(n) ? n : Ao(n, e) ? [n] : Ka(X(n));
      }
      var xs = D;
      function Je(n, e, t) {
        var r = n.length;
        return t = t === a ? r : t, !e && t >= r ? n : ne(n, e, t);
      }
      var wa = uc || function(n) {
        return xn.clearTimeout(n);
      };
      function ya(n, e) {
        if (e)
          return n.slice();
        var t = n.length, r = Nu ? Nu(t) : new n.constructor(t);
        return n.copy(r), r;
      }
      function wo(n) {
        var e = new n.constructor(n.byteLength);
        return new Wr(e).set(new Wr(n)), e;
      }
      function ws(n, e) {
        var t = e ? wo(n.buffer) : n.buffer;
        return new n.constructor(t, n.byteOffset, n.byteLength);
      }
      function ys(n) {
        var e = new n.constructor(n.source, J.exec(n));
        return e.lastIndex = n.lastIndex, e;
      }
      function bs(n) {
        return rr ? j(rr.call(n)) : {};
      }
      function ba(n, e) {
        var t = e ? wo(n.buffer) : n.buffer;
        return new n.constructor(t, n.byteOffset, n.length);
      }
      function Ca(n, e) {
        if (n !== e) {
          var t = n !== a, r = n === null, i = n === n, l = $n(n), f = e !== a, s = e === null, h = e === e, _ = $n(e);
          if (!s && !_ && !l && n > e || l && f && h && !s && !_ || r && f && h || !t && h || !i)
            return 1;
          if (!r && !l && !_ && n < e || _ && t && i && !r && !l || s && t && i || !f && i || !h)
            return -1;
        }
        return 0;
      }
      function Cs(n, e, t) {
        for (var r = -1, i = n.criteria, l = e.criteria, f = i.length, s = t.length; ++r < f; ) {
          var h = Ca(i[r], l[r]);
          if (h) {
            if (r >= s)
              return h;
            var _ = t[r];
            return h * (_ == "desc" ? -1 : 1);
          }
        }
        return n.index - e.index;
      }
      function Ta(n, e, t, r) {
        for (var i = -1, l = n.length, f = t.length, s = -1, h = e.length, _ = vn(l - f, 0), m = v(h + _), w = !r; ++s < h; )
          m[s] = e[s];
        for (; ++i < f; )
          (w || i < l) && (m[t[i]] = n[i]);
        for (; _--; )
          m[s++] = n[i++];
        return m;
      }
      function Ra(n, e, t, r) {
        for (var i = -1, l = n.length, f = -1, s = t.length, h = -1, _ = e.length, m = vn(l - s, 0), w = v(m + _), E = !r; ++i < m; )
          w[i] = n[i];
        for (var A = i; ++h < _; )
          w[A + h] = e[h];
        for (; ++f < s; )
          (E || i < l) && (w[A + t[f]] = n[i++]);
        return w;
      }
      function Bn(n, e) {
        var t = -1, r = n.length;
        for (e || (e = v(r)); ++t < r; )
          e[t] = n[t];
        return e;
      }
      function xe(n, e, t, r) {
        var i = !t;
        t || (t = {});
        for (var l = -1, f = e.length; ++l < f; ) {
          var s = e[l], h = r ? r(t[s], n[s], s, t, n) : a;
          h === a && (h = n[s]), i ? Ae(t, s, h) : ir(t, s, h);
        }
        return t;
      }
      function Ts(n, e) {
        return xe(n, So(n), e);
      }
      function Rs(n, e) {
        return xe(n, za(n), e);
      }
      function ti(n, e) {
        return function(t, r) {
          var i = H(t) ? Mf : Yc, l = e ? e() : {};
          return i(t, n, M(r, 2), l);
        };
      }
      function Bt(n) {
        return D(function(e, t) {
          var r = -1, i = t.length, l = i > 1 ? t[i - 1] : a, f = i > 2 ? t[2] : a;
          for (l = n.length > 3 && typeof l == "function" ? (i--, l) : a, f && En(t[0], t[1], f) && (l = i < 3 ? a : l, i = 1), e = j(e); ++r < i; ) {
            var s = t[r];
            s && n(e, s, r, l);
          }
          return e;
        });
      }
      function Ea(n, e) {
        return function(t, r) {
          if (t == null)
            return t;
          if (!kn(t))
            return n(t, r);
          for (var i = t.length, l = e ? i : -1, f = j(t); (e ? l-- : ++l < i) && r(f[l], l, f) !== !1; )
            ;
          return t;
        };
      }
      function Sa(n) {
        return function(e, t, r) {
          for (var i = -1, l = j(e), f = r(e), s = f.length; s--; ) {
            var h = f[n ? s : ++i];
            if (t(l[h], h, l) === !1)
              break;
          }
          return e;
        };
      }
      function Es(n, e, t) {
        var r = e & In, i = fr(n);
        function l() {
          var f = this && this !== xn && this instanceof l ? i : n;
          return f.apply(r ? t : this, arguments);
        }
        return l;
      }
      function Aa(n) {
        return function(e) {
          e = X(e);
          var t = Et(e) ? ce(e) : a, r = t ? t[0] : e.charAt(0), i = t ? Je(t, 1).join("") : e.slice(1);
          return r[n]() + i;
        };
      }
      function kt(n) {
        return function(e) {
          return Gi(El(Rl(e).replace(pf, "")), n, "");
        };
      }
      function fr(n) {
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
          var t = Ot(n.prototype), r = n.apply(t, e);
          return an(r) ? r : t;
        };
      }
      function Ss(n, e, t) {
        var r = fr(n);
        function i() {
          for (var l = arguments.length, f = v(l), s = l, h = Ht(i); s--; )
            f[s] = arguments[s];
          var _ = l < 3 && f[0] !== h && f[l - 1] !== h ? [] : qe(f, h);
          if (l -= _.length, l < t)
            return Ba(
              n,
              e,
              ri,
              i.placeholder,
              a,
              f,
              _,
              a,
              a,
              t - l
            );
          var m = this && this !== xn && this instanceof i ? r : n;
          return Un(m, this, f);
        }
        return i;
      }
      function Ia(n) {
        return function(e, t, r) {
          var i = j(e);
          if (!kn(e)) {
            var l = M(t, 3);
            e = _n(e), t = function(s) {
              return l(i[s], s, i);
            };
          }
          var f = n(e, t, r);
          return f > -1 ? i[l ? e[f] : f] : a;
        };
      }
      function Ma(n) {
        return Me(function(e) {
          var t = e.length, r = t, i = Qn.prototype.thru;
          for (n && e.reverse(); r--; ) {
            var l = e[r];
            if (typeof l != "function")
              throw new Xn(C);
            if (i && !f && ai(l) == "wrapper")
              var f = new Qn([], !0);
          }
          for (r = f ? r : t; ++r < t; ) {
            l = e[r];
            var s = ai(l), h = s == "wrapper" ? Ro(l) : a;
            h && Io(h[0]) && h[1] == (oe | Vn | Yn | je) && !h[4].length && h[9] == 1 ? f = f[ai(h[0])].apply(f, h[3]) : f = l.length == 1 && Io(l) ? f[s]() : f.thru(l);
          }
          return function() {
            var _ = arguments, m = _[0];
            if (f && _.length == 1 && H(m))
              return f.plant(m).value();
            for (var w = 0, E = t ? e[w].apply(this, _) : m; ++w < t; )
              E = e[w].call(this, E);
            return E;
          };
        });
      }
      function ri(n, e, t, r, i, l, f, s, h, _) {
        var m = e & oe, w = e & In, E = e & Mn, A = e & (Vn | Pe), L = e & vt, P = E ? a : fr(n);
        function O() {
          for (var W = arguments.length, G = v(W), Gn = W; Gn--; )
            G[Gn] = arguments[Gn];
          if (A)
            var Sn = Ht(O), qn = Df(G, Sn);
          if (r && (G = Ta(G, r, i, A)), l && (G = Ra(G, l, f, A)), W -= qn, A && W < _) {
            var dn = qe(G, Sn);
            return Ba(
              n,
              e,
              ri,
              O.placeholder,
              t,
              G,
              dn,
              s,
              h,
              _ - W
            );
          }
          var he = w ? t : this, ke = E ? he[n] : n;
          return W = G.length, s ? G = Ys(G, s) : L && W > 1 && G.reverse(), m && h < W && (G.length = h), this && this !== xn && this instanceof O && (ke = P || fr(ke)), ke.apply(he, G);
        }
        return O;
      }
      function La(n, e) {
        return function(t, r) {
          return es(t, n, e(r), {});
        };
      }
      function ii(n, e) {
        return function(t, r) {
          var i;
          if (t === a && r === a)
            return e;
          if (t !== a && (i = t), r !== a) {
            if (i === a)
              return r;
            typeof t == "string" || typeof r == "string" ? (t = Nn(t), r = Nn(r)) : (t = pa(t), r = pa(r)), i = n(t, r);
          }
          return i;
        };
      }
      function yo(n) {
        return Me(function(e) {
          return e = on(e, Wn(M())), D(function(t) {
            var r = this;
            return n(e, function(i) {
              return Un(i, r, t);
            });
          });
        });
      }
      function oi(n, e) {
        e = e === a ? " " : Nn(e);
        var t = e.length;
        if (t < 2)
          return t ? go(e, n) : e;
        var r = go(e, qr(n / St(e)));
        return Et(e) ? Je(ce(r), 0, n).join("") : r.slice(0, n);
      }
      function As(n, e, t, r) {
        var i = e & In, l = fr(n);
        function f() {
          for (var s = -1, h = arguments.length, _ = -1, m = r.length, w = v(m + h), E = this && this !== xn && this instanceof f ? l : n; ++_ < m; )
            w[_] = r[_];
          for (; h--; )
            w[_++] = arguments[++s];
          return Un(E, i ? t : this, w);
        }
        return f;
      }
      function Oa(n) {
        return function(e, t, r) {
          return r && typeof r != "number" && En(e, t, r) && (t = r = a), e = Be(e), t === a ? (t = e, e = 0) : t = Be(t), r = r === a ? e < t ? 1 : -1 : Be(r), hs(e, t, r, n);
        };
      }
      function ui(n) {
        return function(e, t) {
          return typeof e == "string" && typeof t == "string" || (e = te(e), t = te(t)), n(e, t);
        };
      }
      function Ba(n, e, t, r, i, l, f, s, h, _) {
        var m = e & Vn, w = m ? f : a, E = m ? a : f, A = m ? l : a, L = m ? a : l;
        e |= m ? Yn : ze, e &= ~(m ? ze : Yn), e & pn || (e &= ~(In | Mn));
        var P = [
          n,
          e,
          i,
          A,
          w,
          L,
          E,
          s,
          h,
          _
        ], O = t.apply(a, P);
        return Io(n) && qa(O, P), O.placeholder = r, Va(O, n, e);
      }
      function bo(n) {
        var e = gn[n];
        return function(t, r) {
          if (t = te(t), r = r == null ? 0 : yn(F(r), 292), r && Vu(t)) {
            var i = (X(t) + "e").split("e"), l = e(i[0] + "e" + (+i[1] + r));
            return i = (X(l) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
          }
          return e(t);
        };
      }
      var Is = Mt && 1 / Hr(new Mt([, -0]))[1] == ve ? function(n) {
        return new Mt(n);
      } : Go;
      function ka(n) {
        return function(e) {
          var t = bn(e);
          return t == zn ? Xi(e) : t == Dn ? Vf(e) : zf(e, n(e));
        };
      }
      function Ie(n, e, t, r, i, l, f, s) {
        var h = e & Mn;
        if (!h && typeof n != "function")
          throw new Xn(C);
        var _ = r ? r.length : 0;
        if (_ || (e &= ~(Yn | ze), r = i = a), f = f === a ? f : vn(F(f), 0), s = s === a ? s : F(s), _ -= i ? i.length : 0, e & ze) {
          var m = r, w = i;
          r = i = a;
        }
        var E = h ? a : Ro(n), A = [
          n,
          e,
          t,
          r,
          i,
          m,
          w,
          l,
          f,
          s
        ];
        if (E && Gs(A, E), n = A[0], e = A[1], t = A[2], r = A[3], i = A[4], s = A[9] = A[9] === a ? h ? 0 : n.length : vn(A[9] - _, 0), !s && e & (Vn | Pe) && (e &= ~(Vn | Pe)), !e || e == In)
          var L = Es(n, e, t);
        else
          e == Vn || e == Pe ? L = Ss(n, e, s) : (e == Yn || e == (In | Yn)) && !i.length ? L = As(n, e, t, r) : L = ri.apply(a, A);
        var P = E ? ga : qa;
        return Va(P(L, A), n, e);
      }
      function Ha(n, e, t, r) {
        return n === a || de(n, It[t]) && !Q.call(r, t) ? e : n;
      }
      function Fa(n, e, t, r, i, l) {
        return an(n) && an(e) && (l.set(e, n), jr(n, e, a, Fa, l), l.delete(e)), n;
      }
      function Ms(n) {
        return dr(n) ? a : n;
      }
      function Pa(n, e, t, r, i, l) {
        var f = t & be, s = n.length, h = e.length;
        if (s != h && !(f && h > s))
          return !1;
        var _ = l.get(n), m = l.get(e);
        if (_ && m)
          return _ == e && m == n;
        var w = -1, E = !0, A = t & gt ? new lt() : a;
        for (l.set(n, e), l.set(e, n); ++w < s; ) {
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
            if (!qi(e, function(W, G) {
              if (!Qt(A, G) && (L === W || i(L, W, t, r, l)))
                return A.push(G);
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
      function Ls(n, e, t, r, i, l, f) {
        switch (t) {
          case Ne:
            if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
              return !1;
            n = n.buffer, e = e.buffer;
          case le:
            return !(n.byteLength != e.byteLength || !l(new Wr(n), new Wr(e)));
          case pe:
          case Ce:
          case _e:
            return de(+n, +e);
          case _t:
            return n.name == e.name && n.message == e.message;
          case rt:
          case Te:
            return n == e + "";
          case zn:
            var s = Xi;
          case Dn:
            var h = r & be;
            if (s || (s = Hr), n.size != e.size && !h)
              return !1;
            var _ = f.get(n);
            if (_)
              return _ == e;
            r |= gt, f.set(n, e);
            var m = Pa(s(n), s(e), r, i, l, f);
            return f.delete(n), m;
          case wt:
            if (rr)
              return rr.call(n) == rr.call(e);
        }
        return !1;
      }
      function Os(n, e, t, r, i, l) {
        var f = t & be, s = Co(n), h = s.length, _ = Co(e), m = _.length;
        if (h != m && !f)
          return !1;
        for (var w = h; w--; ) {
          var E = s[w];
          if (!(f ? E in e : Q.call(e, E)))
            return !1;
        }
        var A = l.get(n), L = l.get(e);
        if (A && L)
          return A == e && L == n;
        var P = !0;
        l.set(n, e), l.set(e, n);
        for (var O = f; ++w < h; ) {
          E = s[w];
          var W = n[E], G = e[E];
          if (r)
            var Gn = f ? r(G, W, E, e, n, l) : r(W, G, E, n, e, l);
          if (!(Gn === a ? W === G || i(W, G, t, r, l) : Gn)) {
            P = !1;
            break;
          }
          O || (O = E == "constructor");
        }
        if (P && !O) {
          var Sn = n.constructor, qn = e.constructor;
          Sn != qn && "constructor" in n && "constructor" in e && !(typeof Sn == "function" && Sn instanceof Sn && typeof qn == "function" && qn instanceof qn) && (P = !1);
        }
        return l.delete(n), l.delete(e), P;
      }
      function Me(n) {
        return Lo($a(n, a, Qa), n + "");
      }
      function Co(n) {
        return ra(n, _n, So);
      }
      function To(n) {
        return ra(n, Hn, za);
      }
      var Ro = Yr ? function(n) {
        return Yr.get(n);
      } : Go;
      function ai(n) {
        for (var e = n.name + "", t = Lt[e], r = Q.call(Lt, e) ? t.length : 0; r--; ) {
          var i = t[r], l = i.func;
          if (l == null || l == n)
            return i.name;
        }
        return e;
      }
      function Ht(n) {
        var e = Q.call(u, "placeholder") ? u : n;
        return e.placeholder;
      }
      function M() {
        var n = u.iteratee || No;
        return n = n === No ? ua : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function li(n, e) {
        var t = n.__data__;
        return Us(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
      }
      function Eo(n) {
        for (var e = _n(n), t = e.length; t--; ) {
          var r = e[t], i = n[r];
          e[t] = [r, i, Wa(i)];
        }
        return e;
      }
      function st(n, e) {
        var t = $f(n, e);
        return oa(t) ? t : a;
      }
      function Bs(n) {
        var e = Q.call(n, ut), t = n[ut];
        try {
          n[ut] = a;
          var r = !0;
        } catch {
        }
        var i = Dr.call(n);
        return r && (e ? n[ut] = t : delete n[ut]), i;
      }
      var So = ji ? function(n) {
        return n == null ? [] : (n = j(n), $e(ji(n), function(e) {
          return Gu.call(n, e);
        }));
      } : qo, za = ji ? function(n) {
        for (var e = []; n; )
          Ge(e, So(n)), n = Nr(n);
        return e;
      } : qo, bn = Rn;
      (no && bn(new no(new ArrayBuffer(1))) != Ne || nr && bn(new nr()) != zn || eo && bn(eo.resolve()) != Wt || Mt && bn(new Mt()) != Dn || er && bn(new er()) != We) && (bn = function(n) {
        var e = Rn(n), t = e == Kn ? n.constructor : a, r = t ? dt(t) : "";
        if (r)
          switch (r) {
            case vc:
              return Ne;
            case pc:
              return zn;
            case _c:
              return Wt;
            case mc:
              return Dn;
            case xc:
              return We;
          }
        return e;
      });
      function ks(n, e, t) {
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
      function Hs(n) {
        var e = n.match(Hi);
        return e ? e[1].split(c) : [];
      }
      function Da(n, e, t) {
        e = Ze(e, n);
        for (var r = -1, i = e.length, l = !1; ++r < i; ) {
          var f = we(e[r]);
          if (!(l = n != null && t(n, f)))
            break;
          n = n[f];
        }
        return l || ++r != i ? l : (i = n == null ? 0 : n.length, !!i && vi(i) && Le(f, i) && (H(n) || ht(n)));
      }
      function Fs(n) {
        var e = n.length, t = new n.constructor(e);
        return e && typeof n[0] == "string" && Q.call(n, "index") && (t.index = n.index, t.input = n.input), t;
      }
      function Ua(n) {
        return typeof n.constructor == "function" && !cr(n) ? Ot(Nr(n)) : {};
      }
      function Ps(n, e, t) {
        var r = n.constructor;
        switch (e) {
          case le:
            return wo(n);
          case pe:
          case Ce:
            return new r(+n);
          case Ne:
            return ws(n, t);
          case yt:
          case bt:
          case it:
          case Nt:
          case $t:
          case Gt:
          case qt:
          case Vt:
          case Yt:
            return ba(n, t);
          case zn:
            return new r();
          case _e:
          case Te:
            return new r(n);
          case rt:
            return ys(n);
          case Dn:
            return new r();
          case wt:
            return bs(n);
        }
      }
      function zs(n, e) {
        var t = e.length;
        if (!t)
          return n;
        var r = t - 1;
        return e[r] = (t > 1 ? "& " : "") + e[r], e = e.join(t > 2 ? ", " : " "), n.replace(ki, `{
/* [wrapped with ` + e + `] */
`);
      }
      function Ds(n) {
        return H(n) || ht(n) || !!(qu && n && n[qu]);
      }
      function Le(n, e) {
        var t = typeof n;
        return e = e ?? ae, !!e && (t == "number" || t != "symbol" && fn.test(n)) && n > -1 && n % 1 == 0 && n < e;
      }
      function En(n, e, t) {
        if (!an(t))
          return !1;
        var r = typeof e;
        return (r == "number" ? kn(t) && Le(e, t.length) : r == "string" && e in t) ? de(t[e], n) : !1;
      }
      function Ao(n, e) {
        if (H(n))
          return !1;
        var t = typeof n;
        return t == "number" || t == "symbol" || t == "boolean" || n == null || $n(n) ? !0 : Ir.test(n) || !Ar.test(n) || e != null && n in j(e);
      }
      function Us(n) {
        var e = typeof n;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? n !== "__proto__" : n === null;
      }
      function Io(n) {
        var e = ai(n), t = u[e];
        if (typeof t != "function" || !(e in $.prototype))
          return !1;
        if (n === t)
          return !0;
        var r = Ro(t);
        return !!r && n === r[0];
      }
      function Ws(n) {
        return !!Wu && Wu in n;
      }
      var Ns = Pr ? Oe : Vo;
      function cr(n) {
        var e = n && n.constructor, t = typeof e == "function" && e.prototype || It;
        return n === t;
      }
      function Wa(n) {
        return n === n && !an(n);
      }
      function Na(n, e) {
        return function(t) {
          return t == null ? !1 : t[n] === e && (e !== a || n in j(t));
        };
      }
      function $s(n) {
        var e = hi(n, function(r) {
          return t.size === hn && t.clear(), r;
        }), t = e.cache;
        return e;
      }
      function Gs(n, e) {
        var t = n[1], r = e[1], i = t | r, l = i < (In | Mn | oe), f = r == oe && t == Vn || r == oe && t == je && n[7].length <= e[8] || r == (oe | je) && e[7].length <= e[8] && t == Vn;
        if (!(l || f))
          return n;
        r & In && (n[2] = e[2], i |= t & In ? 0 : pn);
        var s = e[3];
        if (s) {
          var h = n[3];
          n[3] = h ? Ta(h, s, e[4]) : s, n[4] = h ? qe(n[3], Z) : e[4];
        }
        return s = e[5], s && (h = n[5], n[5] = h ? Ra(h, s, e[6]) : s, n[6] = h ? qe(n[5], Z) : e[6]), s = e[7], s && (n[7] = s), r & oe && (n[8] = n[8] == null ? e[8] : yn(n[8], e[8])), n[9] == null && (n[9] = e[9]), n[0] = e[0], n[1] = i, n;
      }
      function qs(n) {
        var e = [];
        if (n != null)
          for (var t in j(n))
            e.push(t);
        return e;
      }
      function Vs(n) {
        return Dr.call(n);
      }
      function $a(n, e, t) {
        return e = vn(e === a ? n.length - 1 : e, 0), function() {
          for (var r = arguments, i = -1, l = vn(r.length - e, 0), f = v(l); ++i < l; )
            f[i] = r[e + i];
          i = -1;
          for (var s = v(e + 1); ++i < e; )
            s[i] = r[i];
          return s[e] = t(f), Un(n, this, s);
        };
      }
      function Ga(n, e) {
        return e.length < 2 ? n : ct(n, ne(e, 0, -1));
      }
      function Ys(n, e) {
        for (var t = n.length, r = yn(e.length, t), i = Bn(n); r--; ) {
          var l = e[r];
          n[r] = Le(l, t) ? i[l] : a;
        }
        return n;
      }
      function Mo(n, e) {
        if (!(e === "constructor" && typeof n[e] == "function") && e != "__proto__")
          return n[e];
      }
      var qa = Ya(ga), sr = lc || function(n, e) {
        return xn.setTimeout(n, e);
      }, Lo = Ya(ps);
      function Va(n, e, t) {
        var r = e + "";
        return Lo(n, zs(r, Ks(Hs(r), t)));
      }
      function Ya(n) {
        var e = 0, t = 0;
        return function() {
          var r = dc(), i = ue - (r - t);
          if (t = r, i > 0) {
            if (++e >= _r)
              return arguments[0];
          } else
            e = 0;
          return n.apply(a, arguments);
        };
      }
      function fi(n, e) {
        var t = -1, r = n.length, i = r - 1;
        for (e = e === a ? r : e; ++t < e; ) {
          var l = ho(t, i), f = n[l];
          n[l] = n[t], n[t] = f;
        }
        return n.length = e, n;
      }
      var Ka = $s(function(n) {
        var e = [];
        return n.charCodeAt(0) === 46 && e.push(""), n.replace(Oi, function(t, r, i, l) {
          e.push(i ? l.replace(B, "$1") : r || t);
        }), e;
      });
      function we(n) {
        if (typeof n == "string" || $n(n))
          return n;
        var e = n + "";
        return e == "0" && 1 / n == -ve ? "-0" : e;
      }
      function dt(n) {
        if (n != null) {
          try {
            return zr.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function Ks(n, e) {
        return Jn(Ai, function(t) {
          var r = "_." + t[0];
          e & t[1] && !Br(n, r) && n.push(r);
        }), n.sort();
      }
      function Za(n) {
        if (n instanceof $)
          return n.clone();
        var e = new Qn(n.__wrapped__, n.__chain__);
        return e.__actions__ = Bn(n.__actions__), e.__index__ = n.__index__, e.__values__ = n.__values__, e;
      }
      function Zs(n, e, t) {
        (t ? En(n, e, t) : e === a) ? e = 1 : e = vn(F(e), 0);
        var r = n == null ? 0 : n.length;
        if (!r || e < 1)
          return [];
        for (var i = 0, l = 0, f = v(qr(r / e)); i < r; )
          f[l++] = ne(n, i, i += e);
        return f;
      }
      function Js(n) {
        for (var e = -1, t = n == null ? 0 : n.length, r = 0, i = []; ++e < t; ) {
          var l = n[e];
          l && (i[r++] = l);
        }
        return i;
      }
      function Xs() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var e = v(n - 1), t = arguments[0], r = n; r--; )
          e[r - 1] = arguments[r];
        return Ge(H(t) ? Bn(t) : [t], wn(e, 1));
      }
      var Qs = D(function(n, e) {
        return sn(n) ? or(n, wn(e, 1, sn, !0)) : [];
      }), js = D(function(n, e) {
        var t = ee(e);
        return sn(t) && (t = a), sn(n) ? or(n, wn(e, 1, sn, !0), M(t, 2)) : [];
      }), nd = D(function(n, e) {
        var t = ee(e);
        return sn(t) && (t = a), sn(n) ? or(n, wn(e, 1, sn, !0), a, t) : [];
      });
      function ed(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (e = t || e === a ? 1 : F(e), ne(n, e < 0 ? 0 : e, r)) : [];
      }
      function td(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (e = t || e === a ? 1 : F(e), e = r - e, ne(n, 0, e < 0 ? 0 : e)) : [];
      }
      function rd(n, e) {
        return n && n.length ? ei(n, M(e, 3), !0, !0) : [];
      }
      function id(n, e) {
        return n && n.length ? ei(n, M(e, 3), !0) : [];
      }
      function od(n, e, t, r) {
        var i = n == null ? 0 : n.length;
        return i ? (t && typeof t != "number" && En(n, e, t) && (t = 0, r = i), Xc(n, e, t, r)) : [];
      }
      function Ja(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = t == null ? 0 : F(t);
        return i < 0 && (i = vn(r + i, 0)), kr(n, M(e, 3), i);
      }
      function Xa(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r - 1;
        return t !== a && (i = F(t), i = t < 0 ? vn(r + i, 0) : yn(i, r - 1)), kr(n, M(e, 3), i, !0);
      }
      function Qa(n) {
        var e = n == null ? 0 : n.length;
        return e ? wn(n, 1) : [];
      }
      function ud(n) {
        var e = n == null ? 0 : n.length;
        return e ? wn(n, ve) : [];
      }
      function ad(n, e) {
        var t = n == null ? 0 : n.length;
        return t ? (e = e === a ? 1 : F(e), wn(n, e)) : [];
      }
      function ld(n) {
        for (var e = -1, t = n == null ? 0 : n.length, r = {}; ++e < t; ) {
          var i = n[e];
          r[i[0]] = i[1];
        }
        return r;
      }
      function ja(n) {
        return n && n.length ? n[0] : a;
      }
      function fd(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = t == null ? 0 : F(t);
        return i < 0 && (i = vn(r + i, 0)), Rt(n, e, i);
      }
      function cd(n) {
        var e = n == null ? 0 : n.length;
        return e ? ne(n, 0, -1) : [];
      }
      var sd = D(function(n) {
        var e = on(n, mo);
        return e.length && e[0] === n[0] ? ao(e) : [];
      }), dd = D(function(n) {
        var e = ee(n), t = on(n, mo);
        return e === ee(t) ? e = a : t.pop(), t.length && t[0] === n[0] ? ao(t, M(e, 2)) : [];
      }), hd = D(function(n) {
        var e = ee(n), t = on(n, mo);
        return e = typeof e == "function" ? e : a, e && t.pop(), t.length && t[0] === n[0] ? ao(t, a, e) : [];
      });
      function gd(n, e) {
        return n == null ? "" : cc.call(n, e);
      }
      function ee(n) {
        var e = n == null ? 0 : n.length;
        return e ? n[e - 1] : a;
      }
      function vd(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r;
        return t !== a && (i = F(t), i = i < 0 ? vn(r + i, 0) : yn(i, r - 1)), e === e ? Kf(n, e, i) : kr(n, Bu, i, !0);
      }
      function pd(n, e) {
        return n && n.length ? ca(n, F(e)) : a;
      }
      var _d = D(nl);
      function nl(n, e) {
        return n && n.length && e && e.length ? so(n, e) : n;
      }
      function md(n, e, t) {
        return n && n.length && e && e.length ? so(n, e, M(t, 2)) : n;
      }
      function xd(n, e, t) {
        return n && n.length && e && e.length ? so(n, e, a, t) : n;
      }
      var wd = Me(function(n, e) {
        var t = n == null ? 0 : n.length, r = ro(n, e);
        return ha(n, on(e, function(i) {
          return Le(i, t) ? +i : i;
        }).sort(Ca)), r;
      });
      function yd(n, e) {
        var t = [];
        if (!(n && n.length))
          return t;
        var r = -1, i = [], l = n.length;
        for (e = M(e, 3); ++r < l; ) {
          var f = n[r];
          e(f, r, n) && (t.push(f), i.push(r));
        }
        return ha(n, i), t;
      }
      function Oo(n) {
        return n == null ? n : gc.call(n);
      }
      function bd(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (t && typeof t != "number" && En(n, e, t) ? (e = 0, t = r) : (e = e == null ? 0 : F(e), t = t === a ? r : F(t)), ne(n, e, t)) : [];
      }
      function Cd(n, e) {
        return ni(n, e);
      }
      function Td(n, e, t) {
        return vo(n, e, M(t, 2));
      }
      function Rd(n, e) {
        var t = n == null ? 0 : n.length;
        if (t) {
          var r = ni(n, e);
          if (r < t && de(n[r], e))
            return r;
        }
        return -1;
      }
      function Ed(n, e) {
        return ni(n, e, !0);
      }
      function Sd(n, e, t) {
        return vo(n, e, M(t, 2), !0);
      }
      function Ad(n, e) {
        var t = n == null ? 0 : n.length;
        if (t) {
          var r = ni(n, e, !0) - 1;
          if (de(n[r], e))
            return r;
        }
        return -1;
      }
      function Id(n) {
        return n && n.length ? va(n) : [];
      }
      function Md(n, e) {
        return n && n.length ? va(n, M(e, 2)) : [];
      }
      function Ld(n) {
        var e = n == null ? 0 : n.length;
        return e ? ne(n, 1, e) : [];
      }
      function Od(n, e, t) {
        return n && n.length ? (e = t || e === a ? 1 : F(e), ne(n, 0, e < 0 ? 0 : e)) : [];
      }
      function Bd(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (e = t || e === a ? 1 : F(e), e = r - e, ne(n, e < 0 ? 0 : e, r)) : [];
      }
      function kd(n, e) {
        return n && n.length ? ei(n, M(e, 3), !1, !0) : [];
      }
      function Hd(n, e) {
        return n && n.length ? ei(n, M(e, 3)) : [];
      }
      var Fd = D(function(n) {
        return Ke(wn(n, 1, sn, !0));
      }), Pd = D(function(n) {
        var e = ee(n);
        return sn(e) && (e = a), Ke(wn(n, 1, sn, !0), M(e, 2));
      }), zd = D(function(n) {
        var e = ee(n);
        return e = typeof e == "function" ? e : a, Ke(wn(n, 1, sn, !0), a, e);
      });
      function Dd(n) {
        return n && n.length ? Ke(n) : [];
      }
      function Ud(n, e) {
        return n && n.length ? Ke(n, M(e, 2)) : [];
      }
      function Wd(n, e) {
        return e = typeof e == "function" ? e : a, n && n.length ? Ke(n, a, e) : [];
      }
      function Bo(n) {
        if (!(n && n.length))
          return [];
        var e = 0;
        return n = $e(n, function(t) {
          if (sn(t))
            return e = vn(t.length, e), !0;
        }), Zi(e, function(t) {
          return on(n, Vi(t));
        });
      }
      function el(n, e) {
        if (!(n && n.length))
          return [];
        var t = Bo(n);
        return e == null ? t : on(t, function(r) {
          return Un(e, a, r);
        });
      }
      var Nd = D(function(n, e) {
        return sn(n) ? or(n, e) : [];
      }), $d = D(function(n) {
        return _o($e(n, sn));
      }), Gd = D(function(n) {
        var e = ee(n);
        return sn(e) && (e = a), _o($e(n, sn), M(e, 2));
      }), qd = D(function(n) {
        var e = ee(n);
        return e = typeof e == "function" ? e : a, _o($e(n, sn), a, e);
      }), Vd = D(Bo);
      function Yd(n, e) {
        return xa(n || [], e || [], ir);
      }
      function Kd(n, e) {
        return xa(n || [], e || [], lr);
      }
      var Zd = D(function(n) {
        var e = n.length, t = e > 1 ? n[e - 1] : a;
        return t = typeof t == "function" ? (n.pop(), t) : a, el(n, t);
      });
      function tl(n) {
        var e = u(n);
        return e.__chain__ = !0, e;
      }
      function Jd(n, e) {
        return e(n), n;
      }
      function ci(n, e) {
        return e(n);
      }
      var Xd = Me(function(n) {
        var e = n.length, t = e ? n[0] : 0, r = this.__wrapped__, i = function(l) {
          return ro(l, n);
        };
        return e > 1 || this.__actions__.length || !(r instanceof $) || !Le(t) ? this.thru(i) : (r = r.slice(t, +t + (e ? 1 : 0)), r.__actions__.push({
          func: ci,
          args: [i],
          thisArg: a
        }), new Qn(r, this.__chain__).thru(function(l) {
          return e && !l.length && l.push(a), l;
        }));
      });
      function Qd() {
        return tl(this);
      }
      function jd() {
        return new Qn(this.value(), this.__chain__);
      }
      function nh() {
        this.__values__ === a && (this.__values__ = pl(this.value()));
        var n = this.__index__ >= this.__values__.length, e = n ? a : this.__values__[this.__index__++];
        return { done: n, value: e };
      }
      function eh() {
        return this;
      }
      function th(n) {
        for (var e, t = this; t instanceof Zr; ) {
          var r = Za(t);
          r.__index__ = 0, r.__values__ = a, e ? i.__wrapped__ = r : e = r;
          var i = r;
          t = t.__wrapped__;
        }
        return i.__wrapped__ = n, e;
      }
      function rh() {
        var n = this.__wrapped__;
        if (n instanceof $) {
          var e = n;
          return this.__actions__.length && (e = new $(this)), e = e.reverse(), e.__actions__.push({
            func: ci,
            args: [Oo],
            thisArg: a
          }), new Qn(e, this.__chain__);
        }
        return this.thru(Oo);
      }
      function ih() {
        return ma(this.__wrapped__, this.__actions__);
      }
      var oh = ti(function(n, e, t) {
        Q.call(n, t) ? ++n[t] : Ae(n, t, 1);
      });
      function uh(n, e, t) {
        var r = H(n) ? Lu : Jc;
        return t && En(n, e, t) && (e = a), r(n, M(e, 3));
      }
      function ah(n, e) {
        var t = H(n) ? $e : ea;
        return t(n, M(e, 3));
      }
      var lh = Ia(Ja), fh = Ia(Xa);
      function ch(n, e) {
        return wn(si(n, e), 1);
      }
      function sh(n, e) {
        return wn(si(n, e), ve);
      }
      function dh(n, e, t) {
        return t = t === a ? 1 : F(t), wn(si(n, e), t);
      }
      function rl(n, e) {
        var t = H(n) ? Jn : Ye;
        return t(n, M(e, 3));
      }
      function il(n, e) {
        var t = H(n) ? Lf : na;
        return t(n, M(e, 3));
      }
      var hh = ti(function(n, e, t) {
        Q.call(n, t) ? n[t].push(e) : Ae(n, t, [e]);
      });
      function gh(n, e, t, r) {
        n = kn(n) ? n : Pt(n), t = t && !r ? F(t) : 0;
        var i = n.length;
        return t < 0 && (t = vn(i + t, 0)), pi(n) ? t <= i && n.indexOf(e, t) > -1 : !!i && Rt(n, e, t) > -1;
      }
      var vh = D(function(n, e, t) {
        var r = -1, i = typeof e == "function", l = kn(n) ? v(n.length) : [];
        return Ye(n, function(f) {
          l[++r] = i ? Un(e, f, t) : ur(f, e, t);
        }), l;
      }), ph = ti(function(n, e, t) {
        Ae(n, t, e);
      });
      function si(n, e) {
        var t = H(n) ? on : aa;
        return t(n, M(e, 3));
      }
      function _h(n, e, t, r) {
        return n == null ? [] : (H(e) || (e = e == null ? [] : [e]), t = r ? a : t, H(t) || (t = t == null ? [] : [t]), sa(n, e, t));
      }
      var mh = ti(function(n, e, t) {
        n[t ? 0 : 1].push(e);
      }, function() {
        return [[], []];
      });
      function xh(n, e, t) {
        var r = H(n) ? Gi : Hu, i = arguments.length < 3;
        return r(n, M(e, 4), t, i, Ye);
      }
      function wh(n, e, t) {
        var r = H(n) ? Of : Hu, i = arguments.length < 3;
        return r(n, M(e, 4), t, i, na);
      }
      function yh(n, e) {
        var t = H(n) ? $e : ea;
        return t(n, gi(M(e, 3)));
      }
      function bh(n) {
        var e = H(n) ? Ju : gs;
        return e(n);
      }
      function Ch(n, e, t) {
        (t ? En(n, e, t) : e === a) ? e = 1 : e = F(e);
        var r = H(n) ? qc : vs;
        return r(n, e);
      }
      function Th(n) {
        var e = H(n) ? Vc : _s;
        return e(n);
      }
      function Rh(n) {
        if (n == null)
          return 0;
        if (kn(n))
          return pi(n) ? St(n) : n.length;
        var e = bn(n);
        return e == zn || e == Dn ? n.size : fo(n).length;
      }
      function Eh(n, e, t) {
        var r = H(n) ? qi : ms;
        return t && En(n, e, t) && (e = a), r(n, M(e, 3));
      }
      var Sh = D(function(n, e) {
        if (n == null)
          return [];
        var t = e.length;
        return t > 1 && En(n, e[0], e[1]) ? e = [] : t > 2 && En(e[0], e[1], e[2]) && (e = [e[0]]), sa(n, wn(e, 1), []);
      }), di = ac || function() {
        return xn.Date.now();
      };
      function Ah(n, e) {
        if (typeof e != "function")
          throw new Xn(C);
        return n = F(n), function() {
          if (--n < 1)
            return e.apply(this, arguments);
        };
      }
      function ol(n, e, t) {
        return e = t ? a : e, e = n && e == null ? n.length : e, Ie(n, oe, a, a, a, a, e);
      }
      function ul(n, e) {
        var t;
        if (typeof e != "function")
          throw new Xn(C);
        return n = F(n), function() {
          return --n > 0 && (t = e.apply(this, arguments)), n <= 1 && (e = a), t;
        };
      }
      var ko = D(function(n, e, t) {
        var r = In;
        if (t.length) {
          var i = qe(t, Ht(ko));
          r |= Yn;
        }
        return Ie(n, r, e, t, i);
      }), al = D(function(n, e, t) {
        var r = In | Mn;
        if (t.length) {
          var i = qe(t, Ht(al));
          r |= Yn;
        }
        return Ie(e, r, n, t, i);
      });
      function ll(n, e, t) {
        e = t ? a : e;
        var r = Ie(n, Vn, a, a, a, a, a, e);
        return r.placeholder = ll.placeholder, r;
      }
      function fl(n, e, t) {
        e = t ? a : e;
        var r = Ie(n, Pe, a, a, a, a, a, e);
        return r.placeholder = fl.placeholder, r;
      }
      function cl(n, e, t) {
        var r, i, l, f, s, h, _ = 0, m = !1, w = !1, E = !0;
        if (typeof n != "function")
          throw new Xn(C);
        e = te(e) || 0, an(t) && (m = !!t.leading, w = "maxWait" in t, l = w ? vn(te(t.maxWait) || 0, e) : l, E = "trailing" in t ? !!t.trailing : E);
        function A(dn) {
          var he = r, ke = i;
          return r = i = a, _ = dn, f = n.apply(ke, he), f;
        }
        function L(dn) {
          return _ = dn, s = sr(W, e), m ? A(dn) : f;
        }
        function P(dn) {
          var he = dn - h, ke = dn - _, Il = e - he;
          return w ? yn(Il, l - ke) : Il;
        }
        function O(dn) {
          var he = dn - h, ke = dn - _;
          return h === a || he >= e || he < 0 || w && ke >= l;
        }
        function W() {
          var dn = di();
          if (O(dn))
            return G(dn);
          s = sr(W, P(dn));
        }
        function G(dn) {
          return s = a, E && r ? A(dn) : (r = i = a, f);
        }
        function Gn() {
          s !== a && wa(s), _ = 0, r = h = i = s = a;
        }
        function Sn() {
          return s === a ? f : G(di());
        }
        function qn() {
          var dn = di(), he = O(dn);
          if (r = arguments, i = this, h = dn, he) {
            if (s === a)
              return L(h);
            if (w)
              return wa(s), s = sr(W, e), A(h);
          }
          return s === a && (s = sr(W, e)), f;
        }
        return qn.cancel = Gn, qn.flush = Sn, qn;
      }
      var Ih = D(function(n, e) {
        return ju(n, 1, e);
      }), Mh = D(function(n, e, t) {
        return ju(n, te(e) || 0, t);
      });
      function Lh(n) {
        return Ie(n, vt);
      }
      function hi(n, e) {
        if (typeof n != "function" || e != null && typeof e != "function")
          throw new Xn(C);
        var t = function() {
          var r = arguments, i = e ? e.apply(this, r) : r[0], l = t.cache;
          if (l.has(i))
            return l.get(i);
          var f = n.apply(this, r);
          return t.cache = l.set(i, f) || l, f;
        };
        return t.cache = new (hi.Cache || Se)(), t;
      }
      hi.Cache = Se;
      function gi(n) {
        if (typeof n != "function")
          throw new Xn(C);
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
      function Oh(n) {
        return ul(2, n);
      }
      var Bh = xs(function(n, e) {
        e = e.length == 1 && H(e[0]) ? on(e[0], Wn(M())) : on(wn(e, 1), Wn(M()));
        var t = e.length;
        return D(function(r) {
          for (var i = -1, l = yn(r.length, t); ++i < l; )
            r[i] = e[i].call(this, r[i]);
          return Un(n, this, r);
        });
      }), Ho = D(function(n, e) {
        var t = qe(e, Ht(Ho));
        return Ie(n, Yn, a, e, t);
      }), sl = D(function(n, e) {
        var t = qe(e, Ht(sl));
        return Ie(n, ze, a, e, t);
      }), kh = Me(function(n, e) {
        return Ie(n, je, a, a, a, e);
      });
      function Hh(n, e) {
        if (typeof n != "function")
          throw new Xn(C);
        return e = e === a ? e : F(e), D(n, e);
      }
      function Fh(n, e) {
        if (typeof n != "function")
          throw new Xn(C);
        return e = e == null ? 0 : vn(F(e), 0), D(function(t) {
          var r = t[e], i = Je(t, 0, e);
          return r && Ge(i, r), Un(n, this, i);
        });
      }
      function Ph(n, e, t) {
        var r = !0, i = !0;
        if (typeof n != "function")
          throw new Xn(C);
        return an(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), cl(n, e, {
          leading: r,
          maxWait: e,
          trailing: i
        });
      }
      function zh(n) {
        return ol(n, 1);
      }
      function Dh(n, e) {
        return Ho(xo(e), n);
      }
      function Uh() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return H(n) ? n : [n];
      }
      function Wh(n) {
        return jn(n, Tn);
      }
      function Nh(n, e) {
        return e = typeof e == "function" ? e : a, jn(n, Tn, e);
      }
      function $h(n) {
        return jn(n, nn | Tn);
      }
      function Gh(n, e) {
        return e = typeof e == "function" ? e : a, jn(n, nn | Tn, e);
      }
      function qh(n, e) {
        return e == null || Qu(n, e, _n(e));
      }
      function de(n, e) {
        return n === e || n !== n && e !== e;
      }
      var Vh = ui(uo), Yh = ui(function(n, e) {
        return n >= e;
      }), ht = ia(function() {
        return arguments;
      }()) ? ia : function(n) {
        return cn(n) && Q.call(n, "callee") && !Gu.call(n, "callee");
      }, H = v.isArray, Kh = Ru ? Wn(Ru) : ts;
      function kn(n) {
        return n != null && vi(n.length) && !Oe(n);
      }
      function sn(n) {
        return cn(n) && kn(n);
      }
      function Zh(n) {
        return n === !0 || n === !1 || cn(n) && Rn(n) == pe;
      }
      var Xe = fc || Vo, Jh = Eu ? Wn(Eu) : rs;
      function Xh(n) {
        return cn(n) && n.nodeType === 1 && !dr(n);
      }
      function Qh(n) {
        if (n == null)
          return !0;
        if (kn(n) && (H(n) || typeof n == "string" || typeof n.splice == "function" || Xe(n) || Ft(n) || ht(n)))
          return !n.length;
        var e = bn(n);
        if (e == zn || e == Dn)
          return !n.size;
        if (cr(n))
          return !fo(n).length;
        for (var t in n)
          if (Q.call(n, t))
            return !1;
        return !0;
      }
      function jh(n, e) {
        return ar(n, e);
      }
      function ng(n, e, t) {
        t = typeof t == "function" ? t : a;
        var r = t ? t(n, e) : a;
        return r === a ? ar(n, e, a, t) : !!r;
      }
      function Fo(n) {
        if (!cn(n))
          return !1;
        var e = Rn(n);
        return e == _t || e == pt || typeof n.message == "string" && typeof n.name == "string" && !dr(n);
      }
      function eg(n) {
        return typeof n == "number" && Vu(n);
      }
      function Oe(n) {
        if (!an(n))
          return !1;
        var e = Rn(n);
        return e == tt || e == br || e == Ut || e == xt;
      }
      function dl(n) {
        return typeof n == "number" && n == F(n);
      }
      function vi(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= ae;
      }
      function an(n) {
        var e = typeof n;
        return n != null && (e == "object" || e == "function");
      }
      function cn(n) {
        return n != null && typeof n == "object";
      }
      var hl = Su ? Wn(Su) : os;
      function tg(n, e) {
        return n === e || lo(n, e, Eo(e));
      }
      function rg(n, e, t) {
        return t = typeof t == "function" ? t : a, lo(n, e, Eo(e), t);
      }
      function ig(n) {
        return gl(n) && n != +n;
      }
      function og(n) {
        if (Ns(n))
          throw new k(I);
        return oa(n);
      }
      function ug(n) {
        return n === null;
      }
      function ag(n) {
        return n == null;
      }
      function gl(n) {
        return typeof n == "number" || cn(n) && Rn(n) == _e;
      }
      function dr(n) {
        if (!cn(n) || Rn(n) != Kn)
          return !1;
        var e = Nr(n);
        if (e === null)
          return !0;
        var t = Q.call(e, "constructor") && e.constructor;
        return typeof t == "function" && t instanceof t && zr.call(t) == rc;
      }
      var Po = Au ? Wn(Au) : us;
      function lg(n) {
        return dl(n) && n >= -ae && n <= ae;
      }
      var vl = Iu ? Wn(Iu) : as;
      function pi(n) {
        return typeof n == "string" || !H(n) && cn(n) && Rn(n) == Te;
      }
      function $n(n) {
        return typeof n == "symbol" || cn(n) && Rn(n) == wt;
      }
      var Ft = Mu ? Wn(Mu) : ls;
      function fg(n) {
        return n === a;
      }
      function cg(n) {
        return cn(n) && bn(n) == We;
      }
      function sg(n) {
        return cn(n) && Rn(n) == Cr;
      }
      var dg = ui(co), hg = ui(function(n, e) {
        return n <= e;
      });
      function pl(n) {
        if (!n)
          return [];
        if (kn(n))
          return pi(n) ? ce(n) : Bn(n);
        if (jt && n[jt])
          return qf(n[jt]());
        var e = bn(n), t = e == zn ? Xi : e == Dn ? Hr : Pt;
        return t(n);
      }
      function Be(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = te(n), n === ve || n === -ve) {
          var e = n < 0 ? -1 : 1;
          return e * xr;
        }
        return n === n ? n : 0;
      }
      function F(n) {
        var e = Be(n), t = e % 1;
        return e === e ? t ? e - t : e : 0;
      }
      function _l(n) {
        return n ? ft(F(n), 0, Pn) : 0;
      }
      function te(n) {
        if (typeof n == "number")
          return n;
        if ($n(n))
          return et;
        if (an(n)) {
          var e = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = an(e) ? e + "" : e;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = Fu(n);
        var t = U.test(n);
        return t || un.test(n) ? Af(n.slice(2), t ? 2 : 8) : N.test(n) ? et : +n;
      }
      function ml(n) {
        return xe(n, Hn(n));
      }
      function gg(n) {
        return n ? ft(F(n), -ae, ae) : n === 0 ? n : 0;
      }
      function X(n) {
        return n == null ? "" : Nn(n);
      }
      var vg = Bt(function(n, e) {
        if (cr(e) || kn(e)) {
          xe(e, _n(e), n);
          return;
        }
        for (var t in e)
          Q.call(e, t) && ir(n, t, e[t]);
      }), xl = Bt(function(n, e) {
        xe(e, Hn(e), n);
      }), _i = Bt(function(n, e, t, r) {
        xe(e, Hn(e), n, r);
      }), pg = Bt(function(n, e, t, r) {
        xe(e, _n(e), n, r);
      }), _g = Me(ro);
      function mg(n, e) {
        var t = Ot(n);
        return e == null ? t : Xu(t, e);
      }
      var xg = D(function(n, e) {
        n = j(n);
        var t = -1, r = e.length, i = r > 2 ? e[2] : a;
        for (i && En(e[0], e[1], i) && (r = 1); ++t < r; )
          for (var l = e[t], f = Hn(l), s = -1, h = f.length; ++s < h; ) {
            var _ = f[s], m = n[_];
            (m === a || de(m, It[_]) && !Q.call(n, _)) && (n[_] = l[_]);
          }
        return n;
      }), wg = D(function(n) {
        return n.push(a, Fa), Un(wl, a, n);
      });
      function yg(n, e) {
        return Ou(n, M(e, 3), me);
      }
      function bg(n, e) {
        return Ou(n, M(e, 3), oo);
      }
      function Cg(n, e) {
        return n == null ? n : io(n, M(e, 3), Hn);
      }
      function Tg(n, e) {
        return n == null ? n : ta(n, M(e, 3), Hn);
      }
      function Rg(n, e) {
        return n && me(n, M(e, 3));
      }
      function Eg(n, e) {
        return n && oo(n, M(e, 3));
      }
      function Sg(n) {
        return n == null ? [] : Qr(n, _n(n));
      }
      function Ag(n) {
        return n == null ? [] : Qr(n, Hn(n));
      }
      function zo(n, e, t) {
        var r = n == null ? a : ct(n, e);
        return r === a ? t : r;
      }
      function Ig(n, e) {
        return n != null && Da(n, e, Qc);
      }
      function Do(n, e) {
        return n != null && Da(n, e, jc);
      }
      var Mg = La(function(n, e, t) {
        e != null && typeof e.toString != "function" && (e = Dr.call(e)), n[e] = t;
      }, Wo(Fn)), Lg = La(function(n, e, t) {
        e != null && typeof e.toString != "function" && (e = Dr.call(e)), Q.call(n, e) ? n[e].push(t) : n[e] = [t];
      }, M), Og = D(ur);
      function _n(n) {
        return kn(n) ? Zu(n) : fo(n);
      }
      function Hn(n) {
        return kn(n) ? Zu(n, !0) : fs(n);
      }
      function Bg(n, e) {
        var t = {};
        return e = M(e, 3), me(n, function(r, i, l) {
          Ae(t, e(r, i, l), r);
        }), t;
      }
      function kg(n, e) {
        var t = {};
        return e = M(e, 3), me(n, function(r, i, l) {
          Ae(t, i, e(r, i, l));
        }), t;
      }
      var Hg = Bt(function(n, e, t) {
        jr(n, e, t);
      }), wl = Bt(function(n, e, t, r) {
        jr(n, e, t, r);
      }), Fg = Me(function(n, e) {
        var t = {};
        if (n == null)
          return t;
        var r = !1;
        e = on(e, function(l) {
          return l = Ze(l, n), r || (r = l.length > 1), l;
        }), xe(n, To(n), t), r && (t = jn(t, nn | Cn | Tn, Ms));
        for (var i = e.length; i--; )
          po(t, e[i]);
        return t;
      });
      function Pg(n, e) {
        return yl(n, gi(M(e)));
      }
      var zg = Me(function(n, e) {
        return n == null ? {} : ss(n, e);
      });
      function yl(n, e) {
        if (n == null)
          return {};
        var t = on(To(n), function(r) {
          return [r];
        });
        return e = M(e), da(n, t, function(r, i) {
          return e(r, i[0]);
        });
      }
      function Dg(n, e, t) {
        e = Ze(e, n);
        var r = -1, i = e.length;
        for (i || (i = 1, n = a); ++r < i; ) {
          var l = n == null ? a : n[we(e[r])];
          l === a && (r = i, l = t), n = Oe(l) ? l.call(n) : l;
        }
        return n;
      }
      function Ug(n, e, t) {
        return n == null ? n : lr(n, e, t);
      }
      function Wg(n, e, t, r) {
        return r = typeof r == "function" ? r : a, n == null ? n : lr(n, e, t, r);
      }
      var bl = ka(_n), Cl = ka(Hn);
      function Ng(n, e, t) {
        var r = H(n), i = r || Xe(n) || Ft(n);
        if (e = M(e, 4), t == null) {
          var l = n && n.constructor;
          i ? t = r ? new l() : [] : an(n) ? t = Oe(l) ? Ot(Nr(n)) : {} : t = {};
        }
        return (i ? Jn : me)(n, function(f, s, h) {
          return e(t, f, s, h);
        }), t;
      }
      function $g(n, e) {
        return n == null ? !0 : po(n, e);
      }
      function Gg(n, e, t) {
        return n == null ? n : _a(n, e, xo(t));
      }
      function qg(n, e, t, r) {
        return r = typeof r == "function" ? r : a, n == null ? n : _a(n, e, xo(t), r);
      }
      function Pt(n) {
        return n == null ? [] : Ji(n, _n(n));
      }
      function Vg(n) {
        return n == null ? [] : Ji(n, Hn(n));
      }
      function Yg(n, e, t) {
        return t === a && (t = e, e = a), t !== a && (t = te(t), t = t === t ? t : 0), e !== a && (e = te(e), e = e === e ? e : 0), ft(te(n), e, t);
      }
      function Kg(n, e, t) {
        return e = Be(e), t === a ? (t = e, e = 0) : t = Be(t), n = te(n), ns(n, e, t);
      }
      function Zg(n, e, t) {
        if (t && typeof t != "boolean" && En(n, e, t) && (e = t = a), t === a && (typeof e == "boolean" ? (t = e, e = a) : typeof n == "boolean" && (t = n, n = a)), n === a && e === a ? (n = 0, e = 1) : (n = Be(n), e === a ? (e = n, n = 0) : e = Be(e)), n > e) {
          var r = n;
          n = e, e = r;
        }
        if (t || n % 1 || e % 1) {
          var i = Yu();
          return yn(n + i * (e - n + Sf("1e-" + ((i + "").length - 1))), e);
        }
        return ho(n, e);
      }
      var Jg = kt(function(n, e, t) {
        return e = e.toLowerCase(), n + (t ? Tl(e) : e);
      });
      function Tl(n) {
        return Uo(X(n).toLowerCase());
      }
      function Rl(n) {
        return n = X(n), n && n.replace(Ln, Uf).replace(_f, "");
      }
      function Xg(n, e, t) {
        n = X(n), e = Nn(e);
        var r = n.length;
        t = t === a ? r : ft(F(t), 0, r);
        var i = t;
        return t -= e.length, t >= 0 && n.slice(t, i) == e;
      }
      function Qg(n) {
        return n = X(n), n && Rr.test(n) ? n.replace(Ct, Wf) : n;
      }
      function jg(n) {
        return n = X(n), n && Mr.test(n) ? n.replace(Jt, "\\$&") : n;
      }
      var n1 = kt(function(n, e, t) {
        return n + (t ? "-" : "") + e.toLowerCase();
      }), e1 = kt(function(n, e, t) {
        return n + (t ? " " : "") + e.toLowerCase();
      }), t1 = Aa("toLowerCase");
      function r1(n, e, t) {
        n = X(n), e = F(e);
        var r = e ? St(n) : 0;
        if (!e || r >= e)
          return n;
        var i = (e - r) / 2;
        return oi(Vr(i), t) + n + oi(qr(i), t);
      }
      function i1(n, e, t) {
        n = X(n), e = F(e);
        var r = e ? St(n) : 0;
        return e && r < e ? n + oi(e - r, t) : n;
      }
      function o1(n, e, t) {
        n = X(n), e = F(e);
        var r = e ? St(n) : 0;
        return e && r < e ? oi(e - r, t) + n : n;
      }
      function u1(n, e, t) {
        return t || e == null ? e = 0 : e && (e = +e), hc(X(n).replace(Xt, ""), e || 0);
      }
      function a1(n, e, t) {
        return (t ? En(n, e, t) : e === a) ? e = 1 : e = F(e), go(X(n), e);
      }
      function l1() {
        var n = arguments, e = X(n[0]);
        return n.length < 3 ? e : e.replace(n[1], n[2]);
      }
      var f1 = kt(function(n, e, t) {
        return n + (t ? "_" : "") + e.toLowerCase();
      });
      function c1(n, e, t) {
        return t && typeof t != "number" && En(n, e, t) && (e = t = a), t = t === a ? Pn : t >>> 0, t ? (n = X(n), n && (typeof e == "string" || e != null && !Po(e)) && (e = Nn(e), !e && Et(n)) ? Je(ce(n), 0, t) : n.split(e, t)) : [];
      }
      var s1 = kt(function(n, e, t) {
        return n + (t ? " " : "") + Uo(e);
      });
      function d1(n, e, t) {
        return n = X(n), t = t == null ? 0 : ft(F(t), 0, n.length), e = Nn(e), n.slice(t, t + e.length) == e;
      }
      function h1(n, e, t) {
        var r = u.templateSettings;
        t && En(n, e, t) && (e = a), n = X(n), e = _i({}, e, r, Ha);
        var i = _i({}, e.imports, r.imports, Ha), l = _n(i), f = Ji(i, l), s, h, _ = 0, m = e.interpolate || fe, w = "__p += '", E = Qi(
          (e.escape || fe).source + "|" + m.source + "|" + (m === Sr ? q : fe).source + "|" + (e.evaluate || fe).source + "|$",
          "g"
        ), A = "//# sourceURL=" + (Q.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++bf + "]") + `
`;
        n.replace(E, function(O, W, G, Gn, Sn, qn) {
          return G || (G = Gn), w += n.slice(_, qn).replace(Lr, Nf), W && (s = !0, w += `' +
__e(` + W + `) +
'`), Sn && (h = !0, w += `';
` + Sn + `;
__p += '`), G && (w += `' +
((__t = (` + G + `)) == null ? '' : __t) +
'`), _ = qn + O.length, O;
        }), w += `';
`;
        var L = Q.call(e, "variable") && e.variable;
        if (!L)
          w = `with (obj) {
` + w + `
}
`;
        else if (R.test(L))
          throw new k(V);
        w = (h ? w.replace(Mi, "") : w).replace(Kt, "$1").replace(Tr, "$1;"), w = "function(" + (L || "obj") + `) {
` + (L ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (h ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + w + `return __p
}`;
        var P = Sl(function() {
          return K(l, A + "return " + w).apply(a, f);
        });
        if (P.source = w, Fo(P))
          throw P;
        return P;
      }
      function g1(n) {
        return X(n).toLowerCase();
      }
      function v1(n) {
        return X(n).toUpperCase();
      }
      function p1(n, e, t) {
        if (n = X(n), n && (t || e === a))
          return Fu(n);
        if (!n || !(e = Nn(e)))
          return n;
        var r = ce(n), i = ce(e), l = Pu(r, i), f = zu(r, i) + 1;
        return Je(r, l, f).join("");
      }
      function _1(n, e, t) {
        if (n = X(n), n && (t || e === a))
          return n.slice(0, Uu(n) + 1);
        if (!n || !(e = Nn(e)))
          return n;
        var r = ce(n), i = zu(r, ce(e)) + 1;
        return Je(r, 0, i).join("");
      }
      function m1(n, e, t) {
        if (n = X(n), n && (t || e === a))
          return n.replace(Xt, "");
        if (!n || !(e = Nn(e)))
          return n;
        var r = ce(n), i = Pu(r, ce(e));
        return Je(r, i).join("");
      }
      function x1(n, e) {
        var t = Ei, r = Si;
        if (an(e)) {
          var i = "separator" in e ? e.separator : i;
          t = "length" in e ? F(e.length) : t, r = "omission" in e ? Nn(e.omission) : r;
        }
        n = X(n);
        var l = n.length;
        if (Et(n)) {
          var f = ce(n);
          l = f.length;
        }
        if (t >= l)
          return n;
        var s = t - St(r);
        if (s < 1)
          return r;
        var h = f ? Je(f, 0, s).join("") : n.slice(0, s);
        if (i === a)
          return h + r;
        if (f && (s += h.length - s), Po(i)) {
          if (n.slice(s).search(i)) {
            var _, m = h;
            for (i.global || (i = Qi(i.source, X(J.exec(i)) + "g")), i.lastIndex = 0; _ = i.exec(m); )
              var w = _.index;
            h = h.slice(0, w === a ? s : w);
          }
        } else if (n.indexOf(Nn(i), s) != s) {
          var E = h.lastIndexOf(i);
          E > -1 && (h = h.slice(0, E));
        }
        return h + r;
      }
      function w1(n) {
        return n = X(n), n && Zt.test(n) ? n.replace(Re, Zf) : n;
      }
      var y1 = kt(function(n, e, t) {
        return n + (t ? " " : "") + e.toUpperCase();
      }), Uo = Aa("toUpperCase");
      function El(n, e, t) {
        return n = X(n), e = t ? a : e, e === a ? Gf(n) ? Qf(n) : Hf(n) : n.match(e) || [];
      }
      var Sl = D(function(n, e) {
        try {
          return Un(n, a, e);
        } catch (t) {
          return Fo(t) ? t : new k(t);
        }
      }), b1 = Me(function(n, e) {
        return Jn(e, function(t) {
          t = we(t), Ae(n, t, ko(n[t], n));
        }), n;
      });
      function C1(n) {
        var e = n == null ? 0 : n.length, t = M();
        return n = e ? on(n, function(r) {
          if (typeof r[1] != "function")
            throw new Xn(C);
          return [t(r[0]), r[1]];
        }) : [], D(function(r) {
          for (var i = -1; ++i < e; ) {
            var l = n[i];
            if (Un(l[0], this, r))
              return Un(l[1], this, r);
          }
        });
      }
      function T1(n) {
        return Zc(jn(n, nn));
      }
      function Wo(n) {
        return function() {
          return n;
        };
      }
      function R1(n, e) {
        return n == null || n !== n ? e : n;
      }
      var E1 = Ma(), S1 = Ma(!0);
      function Fn(n) {
        return n;
      }
      function No(n) {
        return ua(typeof n == "function" ? n : jn(n, nn));
      }
      function A1(n) {
        return la(jn(n, nn));
      }
      function I1(n, e) {
        return fa(n, jn(e, nn));
      }
      var M1 = D(function(n, e) {
        return function(t) {
          return ur(t, n, e);
        };
      }), L1 = D(function(n, e) {
        return function(t) {
          return ur(n, t, e);
        };
      });
      function $o(n, e, t) {
        var r = _n(e), i = Qr(e, r);
        t == null && !(an(e) && (i.length || !r.length)) && (t = e, e = n, n = this, i = Qr(e, _n(e)));
        var l = !(an(t) && "chain" in t) || !!t.chain, f = Oe(n);
        return Jn(i, function(s) {
          var h = e[s];
          n[s] = h, f && (n.prototype[s] = function() {
            var _ = this.__chain__;
            if (l || _) {
              var m = n(this.__wrapped__), w = m.__actions__ = Bn(this.__actions__);
              return w.push({ func: h, args: arguments, thisArg: n }), m.__chain__ = _, m;
            }
            return h.apply(n, Ge([this.value()], arguments));
          });
        }), n;
      }
      function O1() {
        return xn._ === this && (xn._ = ic), this;
      }
      function Go() {
      }
      function B1(n) {
        return n = F(n), D(function(e) {
          return ca(e, n);
        });
      }
      var k1 = yo(on), H1 = yo(Lu), F1 = yo(qi);
      function Al(n) {
        return Ao(n) ? Vi(we(n)) : ds(n);
      }
      function P1(n) {
        return function(e) {
          return n == null ? a : ct(n, e);
        };
      }
      var z1 = Oa(), D1 = Oa(!0);
      function qo() {
        return [];
      }
      function Vo() {
        return !1;
      }
      function U1() {
        return {};
      }
      function W1() {
        return "";
      }
      function N1() {
        return !0;
      }
      function $1(n, e) {
        if (n = F(n), n < 1 || n > ae)
          return [];
        var t = Pn, r = yn(n, Pn);
        e = M(e), n -= Pn;
        for (var i = Zi(r, e); ++t < n; )
          e(t);
        return i;
      }
      function G1(n) {
        return H(n) ? on(n, we) : $n(n) ? [n] : Bn(Ka(X(n)));
      }
      function q1(n) {
        var e = ++tc;
        return X(n) + e;
      }
      var V1 = ii(function(n, e) {
        return n + e;
      }, 0), Y1 = bo("ceil"), K1 = ii(function(n, e) {
        return n / e;
      }, 1), Z1 = bo("floor");
      function J1(n) {
        return n && n.length ? Xr(n, Fn, uo) : a;
      }
      function X1(n, e) {
        return n && n.length ? Xr(n, M(e, 2), uo) : a;
      }
      function Q1(n) {
        return ku(n, Fn);
      }
      function j1(n, e) {
        return ku(n, M(e, 2));
      }
      function n0(n) {
        return n && n.length ? Xr(n, Fn, co) : a;
      }
      function e0(n, e) {
        return n && n.length ? Xr(n, M(e, 2), co) : a;
      }
      var t0 = ii(function(n, e) {
        return n * e;
      }, 1), r0 = bo("round"), i0 = ii(function(n, e) {
        return n - e;
      }, 0);
      function o0(n) {
        return n && n.length ? Ki(n, Fn) : 0;
      }
      function u0(n, e) {
        return n && n.length ? Ki(n, M(e, 2)) : 0;
      }
      return u.after = Ah, u.ary = ol, u.assign = vg, u.assignIn = xl, u.assignInWith = _i, u.assignWith = pg, u.at = _g, u.before = ul, u.bind = ko, u.bindAll = b1, u.bindKey = al, u.castArray = Uh, u.chain = tl, u.chunk = Zs, u.compact = Js, u.concat = Xs, u.cond = C1, u.conforms = T1, u.constant = Wo, u.countBy = oh, u.create = mg, u.curry = ll, u.curryRight = fl, u.debounce = cl, u.defaults = xg, u.defaultsDeep = wg, u.defer = Ih, u.delay = Mh, u.difference = Qs, u.differenceBy = js, u.differenceWith = nd, u.drop = ed, u.dropRight = td, u.dropRightWhile = rd, u.dropWhile = id, u.fill = od, u.filter = ah, u.flatMap = ch, u.flatMapDeep = sh, u.flatMapDepth = dh, u.flatten = Qa, u.flattenDeep = ud, u.flattenDepth = ad, u.flip = Lh, u.flow = E1, u.flowRight = S1, u.fromPairs = ld, u.functions = Sg, u.functionsIn = Ag, u.groupBy = hh, u.initial = cd, u.intersection = sd, u.intersectionBy = dd, u.intersectionWith = hd, u.invert = Mg, u.invertBy = Lg, u.invokeMap = vh, u.iteratee = No, u.keyBy = ph, u.keys = _n, u.keysIn = Hn, u.map = si, u.mapKeys = Bg, u.mapValues = kg, u.matches = A1, u.matchesProperty = I1, u.memoize = hi, u.merge = Hg, u.mergeWith = wl, u.method = M1, u.methodOf = L1, u.mixin = $o, u.negate = gi, u.nthArg = B1, u.omit = Fg, u.omitBy = Pg, u.once = Oh, u.orderBy = _h, u.over = k1, u.overArgs = Bh, u.overEvery = H1, u.overSome = F1, u.partial = Ho, u.partialRight = sl, u.partition = mh, u.pick = zg, u.pickBy = yl, u.property = Al, u.propertyOf = P1, u.pull = _d, u.pullAll = nl, u.pullAllBy = md, u.pullAllWith = xd, u.pullAt = wd, u.range = z1, u.rangeRight = D1, u.rearg = kh, u.reject = yh, u.remove = yd, u.rest = Hh, u.reverse = Oo, u.sampleSize = Ch, u.set = Ug, u.setWith = Wg, u.shuffle = Th, u.slice = bd, u.sortBy = Sh, u.sortedUniq = Id, u.sortedUniqBy = Md, u.split = c1, u.spread = Fh, u.tail = Ld, u.take = Od, u.takeRight = Bd, u.takeRightWhile = kd, u.takeWhile = Hd, u.tap = Jd, u.throttle = Ph, u.thru = ci, u.toArray = pl, u.toPairs = bl, u.toPairsIn = Cl, u.toPath = G1, u.toPlainObject = ml, u.transform = Ng, u.unary = zh, u.union = Fd, u.unionBy = Pd, u.unionWith = zd, u.uniq = Dd, u.uniqBy = Ud, u.uniqWith = Wd, u.unset = $g, u.unzip = Bo, u.unzipWith = el, u.update = Gg, u.updateWith = qg, u.values = Pt, u.valuesIn = Vg, u.without = Nd, u.words = El, u.wrap = Dh, u.xor = $d, u.xorBy = Gd, u.xorWith = qd, u.zip = Vd, u.zipObject = Yd, u.zipObjectDeep = Kd, u.zipWith = Zd, u.entries = bl, u.entriesIn = Cl, u.extend = xl, u.extendWith = _i, $o(u, u), u.add = V1, u.attempt = Sl, u.camelCase = Jg, u.capitalize = Tl, u.ceil = Y1, u.clamp = Yg, u.clone = Wh, u.cloneDeep = $h, u.cloneDeepWith = Gh, u.cloneWith = Nh, u.conformsTo = qh, u.deburr = Rl, u.defaultTo = R1, u.divide = K1, u.endsWith = Xg, u.eq = de, u.escape = Qg, u.escapeRegExp = jg, u.every = uh, u.find = lh, u.findIndex = Ja, u.findKey = yg, u.findLast = fh, u.findLastIndex = Xa, u.findLastKey = bg, u.floor = Z1, u.forEach = rl, u.forEachRight = il, u.forIn = Cg, u.forInRight = Tg, u.forOwn = Rg, u.forOwnRight = Eg, u.get = zo, u.gt = Vh, u.gte = Yh, u.has = Ig, u.hasIn = Do, u.head = ja, u.identity = Fn, u.includes = gh, u.indexOf = fd, u.inRange = Kg, u.invoke = Og, u.isArguments = ht, u.isArray = H, u.isArrayBuffer = Kh, u.isArrayLike = kn, u.isArrayLikeObject = sn, u.isBoolean = Zh, u.isBuffer = Xe, u.isDate = Jh, u.isElement = Xh, u.isEmpty = Qh, u.isEqual = jh, u.isEqualWith = ng, u.isError = Fo, u.isFinite = eg, u.isFunction = Oe, u.isInteger = dl, u.isLength = vi, u.isMap = hl, u.isMatch = tg, u.isMatchWith = rg, u.isNaN = ig, u.isNative = og, u.isNil = ag, u.isNull = ug, u.isNumber = gl, u.isObject = an, u.isObjectLike = cn, u.isPlainObject = dr, u.isRegExp = Po, u.isSafeInteger = lg, u.isSet = vl, u.isString = pi, u.isSymbol = $n, u.isTypedArray = Ft, u.isUndefined = fg, u.isWeakMap = cg, u.isWeakSet = sg, u.join = gd, u.kebabCase = n1, u.last = ee, u.lastIndexOf = vd, u.lowerCase = e1, u.lowerFirst = t1, u.lt = dg, u.lte = hg, u.max = J1, u.maxBy = X1, u.mean = Q1, u.meanBy = j1, u.min = n0, u.minBy = e0, u.stubArray = qo, u.stubFalse = Vo, u.stubObject = U1, u.stubString = W1, u.stubTrue = N1, u.multiply = t0, u.nth = pd, u.noConflict = O1, u.noop = Go, u.now = di, u.pad = r1, u.padEnd = i1, u.padStart = o1, u.parseInt = u1, u.random = Zg, u.reduce = xh, u.reduceRight = wh, u.repeat = a1, u.replace = l1, u.result = Dg, u.round = r0, u.runInContext = d, u.sample = bh, u.size = Rh, u.snakeCase = f1, u.some = Eh, u.sortedIndex = Cd, u.sortedIndexBy = Td, u.sortedIndexOf = Rd, u.sortedLastIndex = Ed, u.sortedLastIndexBy = Sd, u.sortedLastIndexOf = Ad, u.startCase = s1, u.startsWith = d1, u.subtract = i0, u.sum = o0, u.sumBy = u0, u.template = h1, u.times = $1, u.toFinite = Be, u.toInteger = F, u.toLength = _l, u.toLower = g1, u.toNumber = te, u.toSafeInteger = gg, u.toString = X, u.toUpper = v1, u.trim = p1, u.trimEnd = _1, u.trimStart = m1, u.truncate = x1, u.unescape = w1, u.uniqueId = q1, u.upperCase = y1, u.upperFirst = Uo, u.each = rl, u.eachRight = il, u.first = ja, $o(u, function() {
        var n = {};
        return me(u, function(e, t) {
          Q.call(u.prototype, t) || (n[t] = e);
        }), n;
      }(), { chain: !1 }), u.VERSION = b, Jn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        u[n].placeholder = u;
      }), Jn(["drop", "take"], function(n, e) {
        $.prototype[n] = function(t) {
          t = t === a ? 1 : vn(F(t), 0);
          var r = this.__filtered__ && !e ? new $(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = yn(t, r.__takeCount__) : r.__views__.push({
            size: yn(t, Pn),
            type: n + (r.__dir__ < 0 ? "Right" : "")
          }), r;
        }, $.prototype[n + "Right"] = function(t) {
          return this.reverse()[n](t).reverse();
        };
      }), Jn(["filter", "map", "takeWhile"], function(n, e) {
        var t = e + 1, r = t == ge || t == mr;
        $.prototype[n] = function(i) {
          var l = this.clone();
          return l.__iteratees__.push({
            iteratee: M(i, 3),
            type: t
          }), l.__filtered__ = l.__filtered__ || r, l;
        };
      }), Jn(["head", "last"], function(n, e) {
        var t = "take" + (e ? "Right" : "");
        $.prototype[n] = function() {
          return this[t](1).value()[0];
        };
      }), Jn(["initial", "tail"], function(n, e) {
        var t = "drop" + (e ? "" : "Right");
        $.prototype[n] = function() {
          return this.__filtered__ ? new $(this) : this[t](1);
        };
      }), $.prototype.compact = function() {
        return this.filter(Fn);
      }, $.prototype.find = function(n) {
        return this.filter(n).head();
      }, $.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, $.prototype.invokeMap = D(function(n, e) {
        return typeof n == "function" ? new $(this) : this.map(function(t) {
          return ur(t, n, e);
        });
      }), $.prototype.reject = function(n) {
        return this.filter(gi(M(n)));
      }, $.prototype.slice = function(n, e) {
        n = F(n);
        var t = this;
        return t.__filtered__ && (n > 0 || e < 0) ? new $(t) : (n < 0 ? t = t.takeRight(-n) : n && (t = t.drop(n)), e !== a && (e = F(e), t = e < 0 ? t.dropRight(-e) : t.take(e - n)), t);
      }, $.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, $.prototype.toArray = function() {
        return this.take(Pn);
      }, me($.prototype, function(n, e) {
        var t = /^(?:filter|find|map|reject)|While$/.test(e), r = /^(?:head|last)$/.test(e), i = u[r ? "take" + (e == "last" ? "Right" : "") : e], l = r || /^find/.test(e);
        i && (u.prototype[e] = function() {
          var f = this.__wrapped__, s = r ? [1] : arguments, h = f instanceof $, _ = s[0], m = h || H(f), w = function(W) {
            var G = i.apply(u, Ge([W], s));
            return r && E ? G[0] : G;
          };
          m && t && typeof _ == "function" && _.length != 1 && (h = m = !1);
          var E = this.__chain__, A = !!this.__actions__.length, L = l && !E, P = h && !A;
          if (!l && m) {
            f = P ? f : new $(this);
            var O = n.apply(f, s);
            return O.__actions__.push({ func: ci, args: [w], thisArg: a }), new Qn(O, E);
          }
          return L && P ? n.apply(this, s) : (O = this.thru(w), L ? r ? O.value()[0] : O.value() : O);
        });
      }), Jn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var e = Fr[n], t = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n);
        u.prototype[n] = function() {
          var i = arguments;
          if (r && !this.__chain__) {
            var l = this.value();
            return e.apply(H(l) ? l : [], i);
          }
          return this[t](function(f) {
            return e.apply(H(f) ? f : [], i);
          });
        };
      }), me($.prototype, function(n, e) {
        var t = u[e];
        if (t) {
          var r = t.name + "";
          Q.call(Lt, r) || (Lt[r] = []), Lt[r].push({ name: e, func: t });
        }
      }), Lt[ri(a, Mn).name] = [{
        name: "wrapper",
        func: a
      }], $.prototype.clone = wc, $.prototype.reverse = yc, $.prototype.value = bc, u.prototype.at = Xd, u.prototype.chain = Qd, u.prototype.commit = jd, u.prototype.next = nh, u.prototype.plant = th, u.prototype.reverse = rh, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = ih, u.prototype.first = u.prototype.head, jt && (u.prototype[jt] = eh), u;
    }, At = jf();
    ot ? ((ot.exports = At)._ = At, Wi._ = At) : xn._ = At;
  }).call(hr);
})(Ci, Ci.exports);
var Fl = Ci.exports;
const yv = 5;
function bv(o) {
  const g = pr(null), { classes: a } = Dt({ root: {} })(void 0, {
    name: "SuggestionListItem"
  });
  function b() {
    var V;
    const I = o.isSelected, C = (V = g.current) == null ? void 0 : V.matches(":hover");
    return I || C;
  }
  function T() {
    var I, C;
    b() ? (I = g.current) == null || I.setAttribute("data-hovered", "true") : (C = g.current) == null || C.removeAttribute("data-hovered");
  }
  return zt(() => {
    T(), b() && g.current && g.current.getBoundingClientRect().left > yv && g.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }), /* @__PURE__ */ x(
    ln.Item,
    {
      className: a.root,
      icon: o.icon,
      onClick: o.set,
      closeMenuOnClick: !1,
      onMouseLeave: () => {
        setTimeout(() => {
          T();
        }, 1);
      },
      ref: g,
      rightSection: o.shortcut && /* @__PURE__ */ x(T0, { size: "xs", children: o.shortcut }),
      children: /* @__PURE__ */ An(tu, { children: [
        /* @__PURE__ */ x(bi, { size: 14, weight: 500, children: o.name }),
        /* @__PURE__ */ x(bi, { size: 10, children: o.hint })
      ] })
    }
  );
}
function Cv(o) {
  const { classes: g } = Dt({ root: {} })(void 0, {
    name: "SlashMenu"
  }), a = [];
  let b = 0;
  const T = Fl.groupBy(o.items, (I) => I.group);
  return Fl.forEach(T, (I) => {
    a.push(
      /* @__PURE__ */ x(ln.Label, { children: I[0].group }, I[0].group)
    );
    for (const C of I)
      a.push(
        /* @__PURE__ */ x(
          bv,
          {
            name: C.name,
            icon: C.icon,
            hint: C.hint,
            shortcut: C.shortcut,
            isSelected: o.keyboardHoveredItemIndex === b,
            set: () => o.itemCallback(C)
          },
          C.name
        )
      ), b++;
  }), /* @__PURE__ */ x(
    ln,
    {
      defaultOpened: !0,
      trigger: "hover",
      closeDelay: 1e7,
      children: /* @__PURE__ */ x(ln.Dropdown, { className: g.root, children: a.length > 0 ? a : /* @__PURE__ */ x(ln.Item, { children: "No match found" }) })
    }
  );
}
const Tv = (o) => (g) => Ri(g, Cv, o, {
  animation: "fade",
  placement: "bottom-start"
});
function Rv() {
  const [, o] = re(0);
  return () => o((g) => g + 1);
}
const Fv = (o = {}, g = []) => {
  const [a, b] = re(null), T = Rv();
  return zt(() => {
    var hn, Z;
    let I = !0, C = {
      slashCommands: wv,
      ...o
    };
    C.customElements && C.uiFactories && console.warn(
      "BlockNote editor initialized with both `customElements` and `uiFactories` options, prioritizing `uiFactories`."
    );
    let V = {
      formattingToolbarFactory: pv(
        wi(C.theme === "dark"),
        (hn = C.customElements) == null ? void 0 : hn.formattingToolbar
      ),
      hyperlinkToolbarFactory: mv(
        wi(C.theme === "dark")
      ),
      slashMenuFactory: Tv(
        wi(C.theme === "dark")
      ),
      blockSideMenuFactory: z0(
        wi(C.theme === "dark"),
        (Z = C.customElements) == null ? void 0 : Z.dragHandleMenu
      ),
      ...C.uiFactories
    };
    C = {
      ...C,
      uiFactories: V
    }, console.log("create new blocknote instance");
    const z = new x0(
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
function Ev() {
  const [, o] = re(0);
  return () => o((g) => g + 1);
}
const Pv = (o) => {
  const g = Ev();
  zt(() => {
    const a = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          g();
        });
      });
    };
    return o.on("transaction", a), () => {
      o.off("transaction", a);
    };
  }, [o]);
};
export {
  F0 as BlockColorsButton,
  Bv as BlockNoteView,
  gv as BlockTypeDropdown,
  D0 as ColorStyleButton,
  rv as CreateLinkButton,
  O0 as DragHandleMenu,
  Wl as DragHandleMenuItem,
  vv as FormattingToolbar,
  kv as InlineContent,
  iv as NestBlockButton,
  xv as ReactSlashMenuItem,
  B0 as RemoveBlockButton,
  Yo as TextAlignButton,
  xi as ToggledStyleButton,
  Gl as Toolbar,
  Fe as ToolbarButton,
  sv as ToolbarDropdown,
  ov as UnnestBlockButton,
  z0 as createReactBlockSideMenuFactory,
  Hv as createReactBlockSpec,
  pv as createReactFormattingToolbarFactory,
  mv as createReactHyperlinkToolbarFactory,
  Tv as createReactSlashMenuFactory,
  wv as defaultReactSlashMenuItems,
  Fv as useBlockNote,
  Pv as useEditorForceUpdate
};
//# sourceMappingURL=blocknote-react.js.map
