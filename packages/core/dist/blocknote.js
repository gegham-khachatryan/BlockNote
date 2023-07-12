var Nt = Object.defineProperty;
var Lt = (o, e, t) => e in o ? Nt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var h = (o, e, t) => (Lt(o, typeof e != "symbol" ? e + "" : e, t), t);
import { Node as R, InputRule as V, mergeAttributes as x, Extension as v, findChildren as j, combineTransactionSteps as Ht, getChangedRanges as Ot, findChildrenInRange as Dt, Mark as st, findParentNode as Ft, isTextSelection as Rt, isNodeSelection as zt, posToDOMRect as at, getMarkRange as Q, extensions as N, Editor as Ut } from "@tiptap/core";
import { PluginKey as E, Plugin as C, TextSelection as tt, Selection as G, NodeSelection as $t } from "prosemirror-state";
import { Slice as T, Fragment as P, DOMSerializer as q, DOMParser as Gt } from "prosemirror-model";
import { v4 as jt } from "uuid";
import lt from "rehype-parse";
import qt from "rehype-remark";
import dt from "rehype-stringify";
import ct from "remark-gfm";
import Wt from "remark-parse";
import Vt from "remark-rehype";
import Yt from "remark-stringify";
import { unified as Y } from "unified";
import { fromDom as et } from "hast-util-from-dom";
import { Bold as Kt } from "@tiptap/extension-bold";
import { Code as Jt } from "@tiptap/extension-code";
import Xt from "@tiptap/extension-collaboration";
import Zt from "@tiptap/extension-collaboration-cursor";
import { Dropcursor as Qt } from "@tiptap/extension-dropcursor";
import { Gapcursor as te } from "@tiptap/extension-gapcursor";
import { HardBreak as ee } from "@tiptap/extension-hard-break";
import { History as oe } from "@tiptap/extension-history";
import { Italic as ne } from "@tiptap/extension-italic";
import { Link as ut } from "@tiptap/extension-link";
import { Strike as re } from "@tiptap/extension-strike";
import { Text as ie } from "@tiptap/extension-text";
import { Underline as se } from "@tiptap/extension-underline";
import * as ae from "prosemirror-view";
import { Decoration as D, DecorationSet as F } from "prosemirror-view";
const ht = "_blockOuter_xgzwr_5", pt = "_block_xgzwr_5", ft = "_reactNodeViewRenderer_xgzwr_17", mt = "_blockContent_xgzwr_22", gt = "_blockGroup_xgzwr_42", kt = "_isEmpty_xgzwr_240", yt = "_inlineContent_xgzwr_240", bt = "_isFilter_xgzwr_241", vt = "_hasAnchor_xgzwr_263", k = {
  blockOuter: ht,
  block: pt,
  reactNodeViewRenderer: ft,
  blockContent: mt,
  blockGroup: gt,
  isEmpty: kt,
  inlineContent: yt,
  isFilter: bt,
  hasAnchor: vt
}, Vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  block: pt,
  blockContent: mt,
  blockGroup: gt,
  blockOuter: ht,
  default: k,
  hasAnchor: vt,
  inlineContent: yt,
  isEmpty: kt,
  isFilter: bt,
  reactNodeViewRenderer: ft
}, Symbol.toStringTag, { value: "Module" }));
function ot(o) {
  return "data-" + o.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function le(o) {
  const e = {};
  return Object.entries(o.propSchema).forEach(([t, n]) => {
    e[t] = {
      default: n.default,
      keepOnSplit: !0,
      // Props are displayed in kebab-case as HTML attributes. If a prop's
      // value is the same as its default, we don't display an HTML
      // attribute for it.
      parseHTML: (r) => r.getAttribute(ot(t)),
      renderHTML: (r) => r[t] !== n.default ? {
        [ot(t)]: r[t]
      } : {}
    };
  }), e;
}
function de(o) {
  return [
    {
      tag: "div[data-content-type=" + o.type + "]"
    }
  ];
}
function ce(o, e) {
  const t = document.createElement("div");
  t.setAttribute("data-content-type", o.type);
  for (const [r, i] of Object.entries(e))
    t.setAttribute(r, i);
  let n;
  return o.containsInlineContent ? (n = document.createElement("div"), t.appendChild(n)) : n = void 0, n !== void 0 ? {
    dom: t,
    contentDOM: n
  } : {
    dom: t
  };
}
function Yo(o) {
  return {
    node: H({
      name: o.type,
      content: o.containsInlineContent ? "inline*" : "",
      selectable: o.containsInlineContent,
      addOptions() {
        return {
          editor: void 0
        };
      },
      addAttributes() {
        return le(o);
      },
      parseHTML() {
        return de(o);
      },
      renderHTML({ HTMLAttributes: t }) {
        return ce(o, t);
      },
      addNodeView() {
        return ({ HTMLAttributes: t, getPos: n }) => {
          const r = document.createElement("div");
          r.className = k.blockContent, r.setAttribute("data-content-type", o.type);
          for (const [p, f] of Object.entries(t))
            r.setAttribute(p, f);
          const i = this.options.editor;
          if (typeof n == "boolean")
            throw new Error(
              "Cannot find node position as getPos is a boolean, not a function."
            );
          const a = n(), d = i._tiptapEditor.state.doc.resolve(a).node().attrs.id, c = i.getBlock(d);
          if (c.type !== o.type)
            throw new Error("Block type does not match");
          const u = o.render(c, i);
          return "contentDOM" in u && (u.contentDOM.className = `${u.contentDOM.className ? u.contentDOM.className + " " : ""}${k.inlineContent}`), r.appendChild(u.dom), "contentDOM" in u ? {
            dom: r,
            contentDOM: u.contentDOM
          } : {
            dom: r
          };
        };
      }
    }),
    propSchema: o.propSchema
  };
}
function H(o) {
  return R.create({
    ...o,
    group: "blockContent"
  });
}
const ue = H({
  name: "heading",
  content: "inline*",
  addAttributes() {
    return {
      level: {
        default: "1",
        // instead of "level" attributes, use "data-level"
        parseHTML: (o) => o.getAttribute("data-level"),
        renderHTML: (o) => ({
          "data-level": o.level
        })
      }
    };
  },
  addInputRules() {
    return [
      ...["1", "2", "3"].map((o) => new V({
        find: new RegExp(`^(#{${parseInt(o)}})\\s$`),
        handler: ({ state: e, chain: t, range: n }) => {
          t().BNUpdateBlock(e.selection.from, {
            type: "heading",
            props: {
              level: o
            }
          }).deleteRange({ from: n.from, to: n.to });
        }
      }))
    ];
  },
  parseHTML() {
    return [
      {
        tag: "h1",
        attrs: { level: "1" },
        node: "heading"
      },
      {
        tag: "h2",
        attrs: { level: "2" },
        node: "heading"
      },
      {
        tag: "h3",
        attrs: { level: "3" },
        node: "heading"
      }
    ];
  },
  renderHTML({ node: o, HTMLAttributes: e }) {
    return [
      "div",
      x(e, {
        class: k.blockContent,
        "data-content-type": this.name
      }),
      ["h" + o.attrs.level, { class: k.inlineContent }, 0]
    ];
  }
});
function g(o, e) {
  if (e < 0 || e > o.nodeSize)
    return;
  const t = o.resolve(e), n = t.depth;
  let r = t.node(n), i = n;
  for (; ; ) {
    if (i < 0)
      return;
    if (r.type.name === "blockContainer")
      break;
    i -= 1, r = t.node(i);
  }
  const a = r.attrs.id, s = r.firstChild, l = s.type, d = r.childCount === 2 ? r.lastChild.childCount : 0, c = t.start(i), u = t.end(i);
  return {
    id: a,
    node: r,
    contentNode: s,
    contentType: l,
    numChildBlocks: d,
    startPos: c,
    endPos: u,
    depth: i
  };
}
const Et = (o) => {
  const { node: e, contentType: t } = g(
    o.state.doc,
    o.state.selection.from
  ), n = o.state.selection.anchor === o.state.selection.head;
  return !t.name.endsWith("ListItem") || !n ? !1 : o.commands.first(({ state: r, chain: i, commands: a }) => [
    () => (
      // Changes list item block to a text block if the content is empty.
      a.command(() => e.textContent.length === 0 ? a.BNUpdateBlock(r.selection.from, {
        type: "paragraph",
        props: {}
      }) : !1)
    ),
    () => (
      // Splits the current block, moving content inside that's after the cursor to a new block of the same type
      // below.
      a.command(() => e.textContent.length > 0 ? (i().deleteSelection().BNSplitBlock(r.selection.from, !0).run(), !0) : !1)
    )
  ]);
}, he = H({
  name: "bulletListItem",
  content: "inline*",
  addInputRules() {
    return [
      // Creates an unordered list when starting with "-", "+", or "*".
      new V({
        find: new RegExp("^[-+*]\\s$"),
        handler: ({ state: o, chain: e, range: t }) => {
          e().BNUpdateBlock(o.selection.from, {
            type: "bulletListItem",
            props: {}
          }).deleteRange({ from: t.from, to: t.to });
        }
      })
    ];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => Et(this.editor)
    };
  },
  parseHTML() {
    return [
      // Case for regular HTML list structure.
      {
        tag: "li",
        getAttrs: (o) => {
          if (typeof o == "string")
            return !1;
          const e = o.parentElement;
          return e === null ? !1 : e.tagName === "UL" ? {} : !1;
        },
        node: "bulletListItem"
      },
      // Case for BlockNote list structure.
      {
        tag: "p",
        getAttrs: (o) => {
          if (typeof o == "string")
            return !1;
          const e = o.parentElement;
          return e === null ? !1 : e.getAttribute("data-content-type") === "bulletListItem" ? {} : !1;
        },
        priority: 300,
        node: "bulletListItem"
      }
    ];
  },
  renderHTML({ HTMLAttributes: o }) {
    return [
      "div",
      x(o, {
        class: k.blockContent,
        "data-content-type": this.name
      }),
      ["p", { class: k.inlineContent }, 0]
    ];
  }
}), pe = new E("numbered-list-indexing"), fe = () => new C({
  key: pe,
  appendTransaction: (o, e, t) => {
    const n = t.tr;
    n.setMeta("numberedListIndexing", !0);
    let r = !1;
    return t.doc.descendants((i, a) => {
      if (i.type.name === "blockContainer" && i.firstChild.type.name === "numberedListItem") {
        let s = "1";
        const l = a === 1, d = g(n.doc, a + 1);
        if (d === void 0)
          return;
        if (!l) {
          const p = g(n.doc, a - 2);
          if (p === void 0)
            return;
          if (!(d.depth !== p.depth)) {
            const m = p.contentNode;
            if (p.contentType.name === "numberedListItem") {
              const U = m.attrs.index;
              s = (parseInt(U) + 1).toString();
            }
          }
        }
        d.contentNode.attrs.index !== s && (r = !0, n.setNodeMarkup(a + 1, void 0, {
          index: s
        }));
      }
    }), r ? n : null;
  }
}), me = H({
  name: "numberedListItem",
  content: "inline*",
  addAttributes() {
    return {
      index: {
        default: null,
        parseHTML: (o) => o.getAttribute("data-index"),
        renderHTML: (o) => ({
          "data-index": o.index
        })
      }
    };
  },
  addInputRules() {
    return [
      // Creates an ordered list when starting with "1.".
      new V({
        find: new RegExp("^1\\.\\s$"),
        handler: ({ state: o, chain: e, range: t }) => {
          e().BNUpdateBlock(o.selection.from, {
            type: "numberedListItem",
            props: {}
          }).deleteRange({ from: t.from, to: t.to });
        }
      })
    ];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => Et(this.editor)
    };
  },
  addProseMirrorPlugins() {
    return [fe()];
  },
  parseHTML() {
    return [
      // Case for regular HTML list structure.
      // (e.g.: when pasting from other apps)
      {
        tag: "li",
        getAttrs: (o) => {
          if (typeof o == "string")
            return !1;
          const e = o.parentElement;
          return e === null ? !1 : e.tagName === "OL" ? {} : !1;
        },
        node: "numberedListItem"
      },
      // Case for BlockNote list structure.
      // (e.g.: when pasting from blocknote)
      {
        tag: "p",
        getAttrs: (o) => {
          if (typeof o == "string")
            return !1;
          const e = o.parentElement;
          return e === null ? !1 : e.getAttribute("data-content-type") === "numberedListItem" ? {} : !1;
        },
        priority: 300,
        node: "numberedListItem"
      }
    ];
  },
  renderHTML({ HTMLAttributes: o }) {
    return [
      "div",
      x(o, {
        class: k.blockContent,
        "data-content-type": this.name
      }),
      // we use a <p> tag, because for <li> tags we'd need to add a <ul> parent for around siblings to be semantically correct,
      // which would be quite cumbersome
      ["p", { class: k.inlineContent }, 0]
    ];
  }
}), ge = H({
  name: "paragraph",
  content: "inline*",
  parseHTML() {
    return [
      {
        tag: "p",
        priority: 200,
        node: "paragraph"
      }
    ];
  },
  renderHTML({ HTMLAttributes: o }) {
    return [
      "div",
      x(o, {
        class: k.blockContent,
        "data-content-type": this.name
      }),
      ["p", { class: k.inlineContent }, 0]
    ];
  }
}), L = {
  backgroundColor: {
    default: "transparent"
  },
  textColor: {
    default: "black"
    // TODO
  },
  textAlignment: {
    default: "left",
    values: ["left", "center", "right", "justify"]
  }
}, ke = {
  paragraph: {
    propSchema: L,
    node: ge
  },
  heading: {
    propSchema: {
      ...L,
      level: { default: "1", values: ["1", "2", "3"] }
    },
    node: ue
  },
  bulletListItem: {
    propSchema: L,
    node: he
  },
  numberedListItem: {
    propSchema: L,
    node: me
  }
};
function ye(o, e = JSON.stringify) {
  const t = {};
  return o.filter((n) => {
    const r = e(n);
    return Object.prototype.hasOwnProperty.call(t, r) ? !1 : t[r] = !0;
  });
}
function be(o) {
  const e = o.filter(
    (n, r) => o.indexOf(n) !== r
  );
  return ye(e);
}
const K = v.create({
  name: "uniqueID",
  // we’ll set a very high priority to make sure this runs first
  // and is compatible with `appendTransaction` hooks of other extensions
  priority: 1e4,
  addOptions() {
    return {
      attributeName: "id",
      types: [],
      generateID: () => window.__TEST_OPTIONS ? (window.__TEST_OPTIONS.mockID === void 0 ? window.__TEST_OPTIONS.mockID = 0 : window.__TEST_OPTIONS.mockID++, window.__TEST_OPTIONS.mockID.toString()) : jt(),
      filterTransaction: null
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          [this.options.attributeName]: {
            default: null,
            parseHTML: (o) => o.getAttribute(`data-${this.options.attributeName}`),
            renderHTML: (o) => ({
              [`data-${this.options.attributeName}`]: o[this.options.attributeName]
            })
          }
        }
      }
    ];
  },
  // check initial content for missing ids
  onCreate() {
    if (this.editor.extensionManager.extensions.find(
      (l) => l.name === "collaboration"
    ))
      return;
    const { view: o, state: e } = this.editor, { tr: t, doc: n } = e, { types: r, attributeName: i, generateID: a } = this.options;
    j(n, (l) => r.includes(l.type.name) && l.attrs[i] === null).forEach(({ node: l, pos: d }) => {
      t.setNodeMarkup(d, void 0, {
        ...l.attrs,
        [i]: a()
      });
    }), t.setMeta("addToHistory", !1), o.dispatch(t);
  },
  addProseMirrorPlugins() {
    let o = null, e = !1;
    return [
      new C({
        key: new E("uniqueID"),
        appendTransaction: (t, n, r) => {
          const i = t.some((m) => m.docChanged) && !n.doc.eq(r.doc), a = this.options.filterTransaction && t.some((m) => {
            var b, y;
            return !(!((y = (b = this.options).filterTransaction) === null || y === void 0) && y.call(b, m));
          });
          if (!i || a)
            return;
          const { tr: s } = r, { types: l, attributeName: d, generateID: c } = this.options, u = Ht(
            n.doc,
            t
          ), { mapping: p } = u;
          if (Ot(u).forEach(({ newRange: m }) => {
            const b = Dt(
              r.doc,
              m,
              (B) => l.includes(B.type.name)
            ), y = b.map(({ node: B }) => B.attrs[d]).filter((B) => B !== null), U = be(y);
            b.forEach(({ node: B, pos: O }) => {
              var $;
              const Z = ($ = s.doc.nodeAt(O)) === null || $ === void 0 ? void 0 : $.attrs[d];
              if (Z === null) {
                s.setNodeMarkup(O, void 0, {
                  ...B.attrs,
                  [d]: c()
                });
                return;
              }
              const { deleted: At } = p.invert().mapResult(O);
              At && U.includes(Z) && s.setNodeMarkup(O, void 0, {
                ...B.attrs,
                [d]: c()
              });
            });
          }), !!s.steps.length)
            return s;
        },
        // we register a global drag handler to track the current drag source element
        view(t) {
          const n = (r) => {
            var i;
            o = !((i = t.dom.parentElement) === null || i === void 0) && i.contains(r.target) ? t.dom.parentElement : null;
          };
          return window.addEventListener("dragstart", n), {
            destroy() {
              window.removeEventListener("dragstart", n);
            }
          };
        },
        props: {
          // `handleDOMEvents` is called before `transformPasted`
          // so we can do some checks before
          handleDOMEvents: {
            // only create new ids for dropped content while holding `alt`
            // or content is dragged from another editor
            drop: (t, n) => {
              var r;
              return (o !== t.dom.parentElement || ((r = n.dataTransfer) === null || r === void 0 ? void 0 : r.effectAllowed) === "copy") && (o = null, e = !0), !1;
            },
            // always create new ids on pasted content
            paste: () => (e = !0, !1)
          },
          // we’ll remove ids for every pasted node
          // so we can create a new one within `appendTransaction`
          transformPasted: (t) => {
            if (!e)
              return t;
            const { types: n, attributeName: r } = this.options, i = (a) => {
              const s = [];
              return a.forEach((l) => {
                if (l.isText) {
                  s.push(l);
                  return;
                }
                if (!n.includes(l.type.name)) {
                  s.push(l.copy(i(l.content)));
                  return;
                }
                const d = l.type.create(
                  {
                    ...l.attrs,
                    [r]: null
                  },
                  i(l.content),
                  l.marks
                );
                s.push(d);
              }), P.from(s);
            };
            return e = !1, new T(
              i(t.content),
              t.openStart,
              t.openEnd
            );
          }
        }
      })
    ];
  }
});
class ve extends Error {
  constructor(e) {
    super(`Unreachable case: ${e}`);
  }
}
const Ct = /* @__PURE__ */ new Set([
  "bold",
  "italic",
  "underline",
  "strike",
  "code"
]), Bt = /* @__PURE__ */ new Set(["textColor", "backgroundColor"]);
function nt(o, e) {
  const t = [];
  for (const [n, r] of Object.entries(o.styles))
    Ct.has(n) ? t.push(e.mark(n)) : Bt.has(n) && t.push(e.mark(n, { color: r }));
  return o.text.split(/(\n)/g).filter((n) => n.length > 0).map((n) => n === `
` ? e.nodes.hardBreak.create() : e.text(n, t));
}
function Ee(o, e) {
  const t = e.marks.link.create({
    href: o.href
  });
  return Mt(o.content, e).map((n) => {
    if (n.type.name === "text")
      return n.mark([...n.marks, t]);
    if (n.type.name === "hardBreak")
      return n;
    throw new Error("unexpected node type");
  });
}
function Mt(o, e) {
  let t = [];
  if (typeof o == "string")
    return t.push(
      ...nt({ type: "text", text: o, styles: {} }, e)
    ), t;
  for (const n of o)
    t.push(...nt(n, e));
  return t;
}
function wt(o, e) {
  let t = [];
  for (const n of o)
    if (n.type === "link")
      t.push(...Ee(n, e));
    else if (n.type === "text")
      t.push(...Mt([n], e));
    else
      throw new ve(n);
  return t;
}
function z(o, e) {
  let t = o.id;
  t === void 0 && (t = K.options.generateID());
  let n = o.type;
  n === void 0 && (n = "paragraph");
  let r;
  if (!o.content)
    r = e.nodes[n].create(o.props);
  else if (typeof o.content == "string")
    r = e.nodes[n].create(
      o.props,
      e.text(o.content)
    );
  else {
    const s = wt(o.content, e);
    r = e.nodes[n].create(o.props, s);
  }
  const i = [];
  if (o.children)
    for (const s of o.children)
      i.push(z(s, e));
  const a = e.nodes.blockGroup.create({}, i);
  return e.nodes.blockContainer.create(
    {
      id: t,
      ...o.props
    },
    i.length > 0 ? [r, a] : r
  );
}
function Ce(o) {
  const e = [];
  let t;
  return o.content.forEach((n) => {
    if (n.type.name === "hardBreak") {
      t ? t.type === "text" ? t.text += `
` : t.type === "link" && (t.content[t.content.length - 1].text += `
`) : t = {
        type: "text",
        text: `
`,
        styles: {}
      };
      return;
    }
    const r = {};
    let i, a;
    for (const s of n.marks)
      if (s.type.name === "link")
        i = s;
      else if (s.type.name === "comment")
        a = s;
      else if (Ct.has(s.type.name))
        r[s.type.name] = !0;
      else if (Bt.has(s.type.name))
        r[s.type.name] = s.attrs.color;
      else
        throw Error("Mark is of an unrecognized type: " + s.type.name);
    t ? t.type === "text" ? i ? (e.push(t), t = {
      type: "link",
      href: i.attrs.href,
      content: [
        {
          type: "text",
          text: n.textContent,
          styles: r
        }
      ]
    }) : a ? e.push(t) : JSON.stringify(t.styles) === JSON.stringify(r) ? t.text += n.textContent : (e.push(t), t = {
      type: "text",
      text: n.textContent,
      styles: r
    }) : t.type === "link" && (i ? t.href === i.attrs.href ? JSON.stringify(
      t.content[t.content.length - 1].styles
    ) === JSON.stringify(r) ? t.content[t.content.length - 1].text += n.textContent : t.content.push({
      type: "text",
      text: n.textContent,
      styles: r
    }) : (e.push(t), t = {
      type: "link",
      href: i.attrs.href,
      content: [
        {
          type: "text",
          text: n.textContent,
          styles: r
        }
      ]
    }) : (e.push(t), t = {
      type: "text",
      text: n.textContent,
      styles: r
    })) : i ? t = {
      type: "link",
      href: i.attrs.href,
      content: [
        {
          type: "text",
          text: n.textContent,
          styles: r
        }
      ]
    } : t = {
      type: "text",
      text: n.textContent,
      styles: r
    };
  }), t && e.push(t), e;
}
function M(o, e, t) {
  if (o.type.name !== "blockContainer")
    throw Error(
      "Node must be of type blockContainer, but is of type" + o.type.name + "."
    );
  const n = t == null ? void 0 : t.get(o);
  if (n)
    return n;
  const r = g(o, 0);
  let i = r.id;
  i === null && (i = K.options.generateID());
  const a = {};
  for (const [c, u] of Object.entries({
    ...r.node.attrs,
    ...r.contentNode.attrs
  })) {
    const p = e[r.contentType.name];
    if (!p)
      throw Error(
        "Block is of an unrecognized type: " + r.contentType.name
      );
    const f = p.propSchema;
    c in f ? a[c] = u : c !== "id" && !(c in L) && console.warn("Block has an unrecognized attribute: " + c);
  }
  const s = Ce(r.contentNode), l = [];
  for (let c = 0; c < r.numChildBlocks; c++)
    l.push(
      M(r.node.lastChild.child(c), e, t)
    );
  const d = {
    id: i,
    type: r.contentType.name,
    props: a,
    content: s,
    children: l
  };
  return t == null || t.set(o, d), d;
}
function J(o, e) {
  let t, n;
  if (e.firstChild.descendants((r, i) => t ? !1 : r.type.name !== "blockContainer" || r.attrs.id !== o ? !0 : (t = r, n = i + 1, !1)), t === void 0 || n === void 0)
    throw Error("Could not find block in the editor with matching ID.");
  return {
    node: t,
    posBeforeNode: n
  };
}
function Tt(o, e, t = "before", n) {
  const r = typeof e == "string" ? e : e.id, i = [];
  for (const d of o)
    i.push(z(d, n.schema));
  let a = -1;
  const { node: s, posBeforeNode: l } = J(r, n.state.doc);
  if (t === "before" && (a = l), t === "after" && (a = l + s.nodeSize), t === "nested") {
    if (s.childCount < 2) {
      a = l + s.firstChild.nodeSize + 1;
      const d = n.state.schema.nodes.blockGroup.create(
        {},
        i
      );
      n.view.dispatch(
        n.state.tr.insert(a, d)
      );
      return;
    }
    a = l + s.firstChild.nodeSize + 2;
  }
  n.view.dispatch(n.state.tr.insert(a, i));
}
function Be(o, e, t) {
  const n = typeof o == "string" ? o : o.id, { posBeforeNode: r } = J(n, t.state.doc);
  t.commands.BNUpdateBlock(r + 1, e);
}
function xt(o, e) {
  const t = new Set(
    o.map(
      (r) => typeof r == "string" ? r : r.id
    )
  );
  let n = 0;
  if (e.state.doc.descendants((r, i) => {
    if (t.size === 0)
      return !1;
    if (r.type.name !== "blockContainer" || !t.has(r.attrs.id))
      return !0;
    t.delete(r.attrs.id);
    const a = e.state.doc.nodeSize;
    e.commands.BNDeleteBlock(i - n + 1);
    const s = e.state.doc.nodeSize;
    return n += a - s, !1;
  }), t.size > 0) {
    let r = [...t].join(`
`);
    throw Error(
      "Blocks with the following IDs could not be found in the editor: " + r
    );
  }
}
function Me(o, e, t) {
  Tt(e, o[0], "before", t), xt(o, t);
}
function we() {
  const o = (e) => {
    let t = e.children.length;
    for (let n = 0; n < t; n++) {
      const r = e.children[n];
      if (r.type === "element" && (o(r), r.tagName === "u"))
        if (r.children.length > 0) {
          e.children.splice(n, 1, ...r.children);
          const i = r.children.length - 1;
          t += i, n += i;
        } else
          e.children.splice(n, 1), t--, n--;
    }
  };
  return o;
}
function Te(o) {
  const e = /* @__PURE__ */ new Set([
    ...o.orderedListItemBlockTypes,
    ...o.unorderedListItemBlockTypes
  ]), t = (n) => {
    let r = n.children.length, i;
    for (let a = 0; a < r; a++) {
      const l = n.children[a].children[0], d = l.children[0], c = l.children.length === 2 ? l.children[1] : null, u = e.has(
        d.properties.dataContentType
      ), p = u ? o.orderedListItemBlockTypes.has(
        d.properties.dataContentType
      ) ? "ol" : "ul" : null;
      if (c !== null && t(c), i && i.tagName !== p) {
        n.children.splice(
          a - i.children.length,
          i.children.length,
          i
        );
        const f = i.children.length - 1;
        a -= f, r -= f, i = void 0;
      }
      if (u) {
        i || (i = et(
          document.createElement(p)
        ));
        const f = et(
          document.createElement("li")
        );
        f.children.push(d.children[0]), c !== null && f.children.push(...c.children), i.children.push(f);
      } else if (c !== null) {
        n.children.splice(a + 1, 0, ...c.children), n.children[a] = d.children[0];
        const f = c.children.length;
        a += f, r += f;
      } else
        n.children[a] = d.children[0];
    }
    i && n.children.splice(
      r - i.children.length,
      i.children.length,
      i
    );
  };
  return t;
}
async function St(o, e) {
  const t = document.createElement("div"), n = q.fromSchema(e);
  for (const i of o) {
    const a = z(i, e), s = n.serializeNode(a);
    t.appendChild(s);
  }
  return (await Y().use(lt, { fragment: !0 }).use(Te, {
    orderedListItemBlockTypes: /* @__PURE__ */ new Set(["numberedListItem"]),
    unorderedListItemBlockTypes: /* @__PURE__ */ new Set(["bulletListItem"])
  }).use(dt).process(t.innerHTML)).value;
}
async function It(o, e, t) {
  const n = document.createElement("div");
  n.innerHTML = o.trim();
  const i = Gt.fromSchema(t).parse(n), a = [];
  for (let s = 0; s < i.firstChild.childCount; s++)
    a.push(M(i.firstChild.child(s), e));
  return a;
}
async function xe(o, e) {
  return (await Y().use(lt, { fragment: !0 }).use(we).use(qt).use(ct).use(Yt).process(await St(o, e))).value;
}
async function Se(o, e, t) {
  const n = await Y().use(Wt).use(ct).use(Vt).use(dt).process(o);
  return It(n.value, e, t);
}
const Ie = "_bnEditor_4vj2p_3", Pe = "_bnRoot_4vj2p_20", _e = "_defaultStyles_4vj2p_35", Ae = "_dragPreview_4vj2p_68", _ = {
  bnEditor: Ie,
  bnRoot: Pe,
  defaultStyles: _e,
  dragPreview: Ae,
  "collaboration-cursor__caret": "_collaboration-cursor__caret_4vj2p_74",
  "collaboration-cursor__label": "_collaboration-cursor__label_4vj2p_85"
}, Ne = v.create({
  name: "blockBackgroundColor",
  addGlobalAttributes() {
    return [
      {
        types: ["blockContainer"],
        attributes: {
          backgroundColor: {
            default: "default",
            parseHTML: (o) => o.hasAttribute("data-background-color") ? o.getAttribute("data-background-color") : "default",
            renderHTML: (o) => o.backgroundColor !== "default" && {
              "data-background-color": o.backgroundColor
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setBlockBackgroundColor: (o, e) => ({ state: t, view: n }) => {
        const r = g(t.doc, o);
        return r === void 0 ? !1 : (t.tr.setNodeAttribute(
          r.startPos - 1,
          "backgroundColor",
          e
        ), n.focus(), !0);
      }
    };
  }
}), Le = st.create({
  name: "backgroundColor",
  addAttributes() {
    return {
      color: {
        default: void 0,
        parseHTML: (o) => o.getAttribute("data-background-color"),
        renderHTML: (o) => ({
          "data-background-color": o.color
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (o) => typeof o == "string" ? !1 : o.hasAttribute("data-background-color") ? { color: o.getAttribute("data-background-color") } : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: o }) {
    return ["span", o, 0];
  },
  addCommands() {
    return {
      setBackgroundColor: (o) => ({ commands: e }) => o !== "default" ? e.setMark(this.name, { color: o }) : e.unsetMark(this.name)
    };
  }
}), rt = new E("previous-blocks"), He = {
  // Numbered List Items
  index: "index",
  // Headings
  level: "level",
  // All Blocks
  type: "type",
  depth: "depth",
  "depth-change": "depth-change"
}, Oe = () => {
  let o;
  return new C({
    key: rt,
    view(e) {
      return {
        update: async (t, n) => {
          var r;
          ((r = this.key) == null ? void 0 : r.getState(t.state).updatedBlocks.size) > 0 && (o = setTimeout(() => {
            t.dispatch(
              t.state.tr.setMeta(rt, { clearUpdate: !0 })
            );
          }, 0));
        },
        destroy: () => {
          o && clearTimeout(o);
        }
      };
    },
    state: {
      init() {
        return {
          // Block attributes, by block ID, from just before the previous transaction.
          prevTransactionOldBlockAttrs: {},
          // Block attributes, by block ID, from just before the current transaction.
          currentTransactionOldBlockAttrs: {},
          // Set of IDs of blocks whose attributes changed from the current transaction.
          updatedBlocks: /* @__PURE__ */ new Set()
        };
      },
      apply(e, t, n, r) {
        if (t.currentTransactionOldBlockAttrs = {}, t.updatedBlocks.clear(), !e.docChanged || n.doc.eq(r.doc))
          return t;
        const i = {}, a = j(n.doc, (d) => d.attrs.id), s = new Map(
          a.map((d) => [d.node.attrs.id, d])
        ), l = j(r.doc, (d) => d.attrs.id);
        for (let d of l) {
          const c = s.get(d.node.attrs.id), u = c == null ? void 0 : c.node.firstChild, p = d.node.firstChild;
          if (c && u && p) {
            const f = {
              index: p.attrs.index,
              level: p.attrs.level,
              type: p.type.name,
              depth: r.doc.resolve(d.pos).depth
            };
            let m = {
              index: u.attrs.index,
              level: u.attrs.level,
              type: u.type.name,
              depth: n.doc.resolve(c.pos).depth
            };
            i[d.node.attrs.id] = m, e.getMeta("numberedListIndexing") && (d.node.attrs.id in t.prevTransactionOldBlockAttrs && (m = t.prevTransactionOldBlockAttrs[d.node.attrs.id]), f.type === "numberedListItem" && (m.index = f.index)), t.currentTransactionOldBlockAttrs[d.node.attrs.id] = m, JSON.stringify(m) !== JSON.stringify(f) && (m["depth-change"] = m.depth - f.depth, t.updatedBlocks.add(d.node.attrs.id));
          }
        }
        return t.prevTransactionOldBlockAttrs = i, t;
      }
    },
    props: {
      decorations(e) {
        const t = this.getState(e);
        if (t.updatedBlocks.size === 0)
          return;
        const n = [];
        return e.doc.descendants((r, i) => {
          if (!r.attrs.id || !t.updatedBlocks.has(r.attrs.id))
            return;
          const a = t.currentTransactionOldBlockAttrs[r.attrs.id], s = {};
          for (let [d, c] of Object.entries(a))
            s["data-prev-" + He[d]] = c || "none";
          const l = D.node(i, i + r.nodeSize, {
            ...s
          });
          n.push(l);
        }), F.create(e.doc, n);
      }
    }
  });
}, De = {
  blockColor: "data-block-color",
  blockStyle: "data-block-style",
  id: "data-id",
  depth: "data-depth",
  depthChange: "data-depth-change"
}, Fe = R.create({
  name: "blockContainer",
  group: "blockContainer",
  // A block always contains content, and optionally a blockGroup which contains nested blocks
  content: "blockContent blockGroup?",
  // Ensures content-specific keyboard handlers trigger first.
  priority: 50,
  defining: !0,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "div",
        getAttrs: (o) => {
          if (typeof o == "string")
            return !1;
          const e = {};
          for (let [t, n] of Object.entries(De))
            o.getAttribute(n) && (e[t] = o.getAttribute(n));
          return o.getAttribute("data-node-type") === "blockContainer" ? e : !1;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: o }) {
    return [
      "div",
      x(o, {
        class: k.blockOuter,
        "data-node-type": "block-outer"
      }),
      [
        "div",
        x(o, {
          // TODO: maybe remove html attributes from inner block
          class: k.block,
          "data-node-type": this.name
        }),
        0
      ]
    ];
  },
  addCommands() {
    return {
      // Creates a new text block at a given position.
      BNCreateBlock: (o) => ({ state: e, dispatch: t }) => {
        const n = e.schema.nodes.blockContainer.createAndFill();
        return t && e.tr.insert(o, n), !0;
      },
      // Deletes a block at a given position.
      BNDeleteBlock: (o) => ({ state: e, dispatch: t }) => {
        const n = g(e.doc, o);
        if (n === void 0)
          return !1;
        const { startPos: r, endPos: i } = n;
        return t && e.tr.deleteRange(r, i), !0;
      },
      // Updates a block at a given position.
      BNUpdateBlock: (o, e) => ({ state: t, dispatch: n }) => {
        const r = g(t.doc, o);
        if (r === void 0)
          return !1;
        const { startPos: i, endPos: a, node: s, contentNode: l } = r;
        if (n) {
          if (e.children !== void 0) {
            const d = [];
            for (const c of e.children)
              d.push(z(c, t.schema));
            s.childCount === 2 ? t.tr.replace(
              i + l.nodeSize + 1,
              a - 1,
              new T(P.from(d), 0, 0)
            ) : t.tr.insert(
              i + l.nodeSize,
              t.schema.nodes.blockGroup.create({}, d)
            );
          }
          if (e.content !== void 0) {
            let d = [];
            typeof e.content == "string" ? d.push(t.schema.text(e.content)) : d = wt(e.content, t.schema), t.tr.replace(
              i + 1,
              i + l.nodeSize - 1,
              new T(P.from(d), 0, 0)
            );
          }
          t.tr.setNodeMarkup(
            i,
            e.type === void 0 ? void 0 : t.schema.nodes[e.type],
            {
              ...l.attrs,
              ...e.props
            }
          ), t.tr.setNodeMarkup(i - 1, void 0, {
            ...s.attrs,
            ...e.props
          });
        }
        return !0;
      },
      // Appends the text contents of a block to the nearest previous block, given a position between them. Children of
      // the merged block are moved out of it first, rather than also being merged.
      //
      // In the example below, the position passed into the function is between Block1 and Block2.
      //
      // Block1
      //    Block2
      // Block3
      //    Block4
      //        Block5
      //
      // Becomes:
      //
      // Block1
      //    Block2Block3
      // Block4
      //     Block5
      BNMergeBlocks: (o) => ({ state: e, dispatch: t }) => {
        const n = e.doc.resolve(o + 1).node().type.name === "blockContainer", r = e.doc.resolve(o - 1).node().type.name === "blockContainer";
        if (!n || !r)
          return !1;
        const i = g(
          e.doc,
          o + 1
        ), { node: a, contentNode: s, startPos: l, endPos: d, depth: c } = i;
        if (a.childCount === 2) {
          const f = e.doc.resolve(
            l + s.nodeSize + 1
          ), m = e.doc.resolve(d - 1), b = f.blockRange(m);
          t && e.tr.lift(b, c - 1);
        }
        let u = o - 1, p = g(e.doc, u);
        for (; p.numChildBlocks > 0; )
          if (u--, p = g(e.doc, u), p === void 0)
            return !1;
        return t && (t(
          e.tr.deleteRange(l, l + s.nodeSize).replace(
            u - 1,
            l,
            new T(s.content, 0, 0)
          ).scrollIntoView()
        ), e.tr.setSelection(
          new tt(e.doc.resolve(u - 1))
        )), !0;
      },
      // Splits a block at a given position. Content after the position is moved to a new block below, at the same
      // nesting level.
      BNSplitBlock: (o, e) => ({ state: t, dispatch: n }) => {
        const r = g(t.doc, o);
        if (r === void 0)
          return !1;
        const { contentNode: i, contentType: a, startPos: s, endPos: l, depth: d } = r, c = t.doc.cut(s + 1, o), u = t.doc.cut(o, l - 1), p = t.schema.nodes.blockContainer.createAndFill(), f = l + 1, m = f + 2;
        return n && (t.tr.insert(f, p), t.tr.replace(
          m,
          m + 1,
          u.content.size > 0 ? new T(
            P.from(u),
            d + 2,
            d + 2
          ) : void 0
        ), e && t.tr.setBlockType(
          m,
          m,
          t.schema.node(a).type,
          i.attrs
        ), t.tr.setSelection(
          new tt(t.doc.resolve(m))
        ), t.tr.replace(
          s + 1,
          l - 1,
          c.content.size > 0 ? new T(
            P.from(c),
            d + 2,
            d + 2
          ) : void 0
        )), !0;
      }
    };
  },
  addProseMirrorPlugins() {
    return [Oe()];
  },
  addKeyboardShortcuts() {
    return {
      Backspace: () => this.editor.commands.first(({ commands: t }) => [
        // Deletes the selection if it's not empty.
        () => t.deleteSelection(),
        // Undoes an input rule if one was triggered in the last editor state change.
        () => t.undoInputRule(),
        // Reverts block content type to a paragraph if the selection is at the start of the block.
        () => t.command(({ state: n }) => {
          const { contentType: r } = g(
            n.doc,
            n.selection.from
          ), i = n.selection.$anchor.parentOffset === 0, a = r.name === "paragraph";
          return i && !a ? t.BNUpdateBlock(n.selection.from, {
            type: "paragraph",
            props: {}
          }) : !1;
        }),
        // Removes a level of nesting if the block is indented if the selection is at the start of the block.
        () => t.command(({ state: n }) => n.selection.$anchor.parentOffset === 0 ? t.liftListItem("blockContainer") : !1),
        // Merges block with the previous one if it isn't indented, isn't the first block in the doc, and the selection
        // is at the start of the block.
        () => t.command(({ state: n }) => {
          const { depth: r, startPos: i } = g(
            n.doc,
            n.selection.from
          ), a = n.selection.$anchor.parentOffset === 0, s = n.selection.anchor === n.selection.head, l = i === 2, d = i - 1;
          return !l && a && s && r === 2 ? t.BNMergeBlocks(d) : !1;
        })
      ]),
      Enter: () => this.editor.commands.first(({ commands: t }) => [
        // Removes a level of nesting if the block is empty & indented, while the selection is also empty & at the start
        // of the block.
        () => t.command(({ state: n }) => {
          const { node: r, depth: i } = g(
            n.doc,
            n.selection.from
          ), a = n.selection.$anchor.parentOffset === 0, s = n.selection.anchor === n.selection.head, l = r.textContent.length === 0, d = i > 2;
          return a && s && l && d ? t.liftListItem("blockContainer") : !1;
        }),
        // Creates a new block and moves the selection to it if the current one is empty, while the selection is also
        // empty & at the start of the block.
        () => t.command(({ state: n, chain: r }) => {
          const { node: i, endPos: a } = g(
            n.doc,
            n.selection.from
          ), s = n.selection.$anchor.parentOffset === 0, l = n.selection.anchor === n.selection.head, d = i.textContent.length === 0;
          if (s && l && d) {
            const c = a + 1, u = c + 2;
            return r().BNCreateBlock(c).setTextSelection(u).run(), !0;
          }
          return !1;
        }),
        // Splits the current block, moving content inside that's after the cursor to a new text block below. Also
        // deletes the selection beforehand, if it's not empty.
        () => t.command(({ state: n, chain: r }) => {
          const { node: i } = g(
            n.doc,
            n.selection.from
          );
          return i.textContent.length === 0 ? !1 : (r().deleteSelection().BNSplitBlock(n.selection.from, !1).run(), !0);
        })
      ]),
      // Always returning true for tab key presses ensures they're not captured by the browser. Otherwise, they blur the
      // editor since the browser will try to use tab for keyboard navigation.
      Tab: () => (this.editor.commands.sinkListItem("blockContainer"), !0),
      "Shift-Tab": () => (this.editor.commands.liftListItem("blockContainer"), !0),
      "Mod-Alt-0": () => this.editor.commands.BNCreateBlock(
        this.editor.state.selection.anchor + 2
      ),
      "Mod-Alt-1": () => this.editor.commands.BNUpdateBlock(this.editor.state.selection.anchor, {
        type: "heading",
        props: {
          level: "1"
        }
      }),
      "Mod-Alt-2": () => this.editor.commands.BNUpdateBlock(this.editor.state.selection.anchor, {
        type: "heading",
        props: {
          level: "2"
        }
      }),
      "Mod-Alt-3": () => this.editor.commands.BNUpdateBlock(this.editor.state.selection.anchor, {
        type: "heading",
        props: {
          level: "3"
        }
      }),
      "Mod-Shift-7": () => this.editor.commands.BNUpdateBlock(this.editor.state.selection.anchor, {
        type: "bulletListItem",
        props: {}
      }),
      "Mod-Shift-8": () => this.editor.commands.BNUpdateBlock(this.editor.state.selection.anchor, {
        type: "numberedListItem",
        props: {}
      })
    };
  }
}), Re = R.create({
  name: "blockGroup",
  group: "blockGroup",
  content: "blockContainer+",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "div",
        getAttrs: (o) => typeof o == "string" ? !1 : o.getAttribute("data-node-type") === "blockGroup" ? null : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: o }) {
    return [
      "div",
      x(this.options.HTMLAttributes, o, {
        class: k.blockGroup,
        "data-node-type": "blockGroup"
      }),
      0
    ];
  }
}), ze = [
  Fe,
  Re,
  R.create({
    name: "doc",
    topNode: !0,
    content: "blockGroup"
  })
], Ue = (o) => {
  const e = q.fromSchema(o);
  return new q(
    {
      ...e.nodes
      // TODO: If a serializer is defined in the config for a custom block, it
      //  should be added here. We still need to figure out how the serializer
      //  should be defined in the custom blocks API though, and implement that,
      //  before we can do this.
    },
    e.marks
  );
}, $e = v.create({
  addProseMirrorPlugins() {
    return [
      new C({
        props: {
          clipboardSerializer: Ue(this.editor.schema)
        }
      })
    ];
  }
}), Ge = Ft(
  (o) => o.type.name === "blockContainer"
);
function W() {
  return {
    active: !1,
    triggerCharacter: void 0,
    queryStartPos: void 0,
    items: [],
    keyboardHoveredItemIndex: void 0,
    notFoundCount: 0,
    decorationId: void 0
  };
}
class je {
  constructor({
    editor: e,
    pluginKey: t,
    onSelectItem: n = () => {
    },
    suggestionsMenuFactory: r
  }) {
    h(this, "editor");
    h(this, "pluginKey");
    h(this, "suggestionsMenu");
    h(this, "pluginState");
    h(this, "itemCallback");
    h(this, "lastPosition");
    this.editor = e, this.pluginKey = t, this.pluginState = W(), this.itemCallback = (i) => {
      e._tiptapEditor.chain().focus().deleteRange({
        from: this.pluginState.queryStartPos - this.pluginState.triggerCharacter.length,
        to: e._tiptapEditor.state.selection.from
      }).run(), n({
        item: i,
        editor: e
      });
    }, this.suggestionsMenu = r(this.getStaticParams());
  }
  update(e, t) {
    const n = this.pluginKey.getState(t), r = this.pluginKey.getState(e.state), i = !n.active && r.active, a = n.active && !r.active, s = n.active && r.active;
    !i && !s && !a || (this.pluginState = a ? n : r, (a || !this.editor.isEditable) && (this.suggestionsMenu.hide(), this.suggestionsMenu.element.removeEventListener(
      "mousedown",
      (l) => l.preventDefault()
    )), s && this.suggestionsMenu.render(this.getDynamicParams(), !1), i && this.editor.isEditable && (this.suggestionsMenu.render(this.getDynamicParams(), !0), this.suggestionsMenu.element.addEventListener(
      "mousedown",
      (l) => l.preventDefault()
    )));
  }
  getStaticParams() {
    return {
      itemCallback: (e) => this.itemCallback(e),
      getReferenceRect: () => {
        const e = document.querySelector(
          `[data-decoration-id="${this.pluginState.decorationId}"]`
        );
        if (!e) {
          if (this.lastPosition === void 0)
            throw new Error(
              "Attempted to access trigger character reference rect before rendering suggestions menu."
            );
          return this.lastPosition;
        }
        const t = e.getBoundingClientRect();
        return this.lastPosition = t, t;
      }
    };
  }
  getDynamicParams() {
    return {
      items: this.pluginState.items,
      keyboardHoveredItemIndex: this.pluginState.keyboardHoveredItemIndex
    };
  }
}
function qe({
  pluginKey: o,
  editor: e,
  defaultTriggerCharacter: t,
  suggestionsMenuFactory: n,
  onSelectItem: r = () => {
  },
  items: i = () => []
}) {
  if (t.length !== 1)
    throw new Error("'char' should be a single character");
  const a = (s) => {
    s.dispatch(s.state.tr.setMeta(o, { deactivate: !0 }));
  };
  return new C({
    key: o,
    view: (s) => new je({
      editor: e,
      pluginKey: o,
      onSelectItem: (l) => {
        a(s), r(l);
      },
      suggestionsMenuFactory: n
    }),
    state: {
      // Initialize the plugin's internal state.
      init() {
        return W();
      },
      // Apply changes to the plugin state from an editor transaction.
      apply(s, l, d, c) {
        var p, f, m, b;
        if (s.getMeta("orderedListIndexing") !== void 0)
          return l;
        if ((p = s.getMeta(o)) != null && p.activate)
          return {
            active: !0,
            triggerCharacter: ((f = s.getMeta(o)) == null ? void 0 : f.triggerCharacter) || "",
            queryStartPos: c.selection.from,
            items: i(""),
            keyboardHoveredItemIndex: 0,
            // TODO: Maybe should be 1 if the menu has no possible items? Probably redundant since a menu with no items
            //  is useless in practice.
            notFoundCount: 0,
            decorationId: `id_${Math.floor(Math.random() * 4294967295)}`
          };
        if (!l.active)
          return l;
        const u = { ...l };
        if (u.items = i(
          c.doc.textBetween(l.queryStartPos, c.selection.from)
        ), u.notFoundCount = 0, u.items.length === 0 && (u.notFoundCount = Math.max(
          0,
          l.notFoundCount + (c.selection.from - d.selection.from)
        )), // Highlighting text should hide the menu.
        c.selection.from !== c.selection.to || // Transactions with plugin metadata {deactivate: true} should hide the menu.
        (m = s.getMeta(o)) != null && m.deactivate || // Certain mouse events should hide the menu.
        // TODO: Change to global mousedown listener.
        s.getMeta("focus") || s.getMeta("blur") || s.getMeta("pointer") || // Moving the caret before the character which triggered the menu should hide it.
        l.active && c.selection.from < l.queryStartPos || // Entering more than 3 characters, after the last query that matched with at least 1 menu item, should hide
        // the menu.
        u.notFoundCount > 3)
          return W();
        if (((b = s.getMeta(o)) == null ? void 0 : b.selectedItemIndexChanged) !== void 0) {
          let y = s.getMeta(o).selectedItemIndexChanged;
          y < 0 ? y = l.items.length - 1 : y >= l.items.length && (y = 0), u.keyboardHoveredItemIndex = y;
        }
        return u;
      }
    },
    props: {
      handleKeyDown(s, l) {
        const d = this.getState(s.state).active;
        if (l.key === t && !d)
          return s.dispatch(
            s.state.tr.insertText(t).scrollIntoView().setMeta(o, {
              activate: !0,
              triggerCharacter: t
            })
          ), !0;
        if (!d)
          return !1;
        const {
          triggerCharacter: c,
          queryStartPos: u,
          items: p,
          keyboardHoveredItemIndex: f
        } = o.getState(s.state);
        return l.key === "ArrowUp" ? (s.dispatch(
          s.state.tr.setMeta(o, {
            selectedItemIndexChanged: f - 1
          })
        ), !0) : l.key === "ArrowDown" ? (s.dispatch(
          s.state.tr.setMeta(o, {
            selectedItemIndexChanged: f + 1
          })
        ), !0) : l.key === "Enter" ? (a(s), e._tiptapEditor.chain().focus().deleteRange({
          from: u - c.length,
          to: e._tiptapEditor.state.selection.from
        }).run(), r({
          item: p[f],
          editor: e
        }), !0) : l.key === "Escape" ? (a(s), !0) : !1;
      },
      // Hides menu in cases where mouse click does not cause an editor state change.
      handleClick(s) {
        a(s);
      },
      // Setup decorator on the currently active suggestion.
      decorations(s) {
        const { active: l, decorationId: d, queryStartPos: c, triggerCharacter: u } = this.getState(s);
        if (!l)
          return null;
        if (u === "") {
          const p = Ge(s.selection);
          if (p)
            return F.create(s.doc, [
              D.node(
                p.pos,
                p.pos + p.node.nodeSize,
                {
                  nodeName: "span",
                  class: "suggestion-decorator",
                  "data-decoration-id": d
                }
              )
            ]);
        }
        return F.create(s.doc, [
          D.inline(
            c - u.length,
            c,
            {
              nodeName: "span",
              class: "suggestion-decorator",
              "data-decoration-id": d
            }
          )
        ]);
      }
    }
  });
}
const X = new E("suggestions-slash-commands"), We = () => v.create({
  name: "slash-command",
  addOptions() {
    return {
      editor: void 0,
      commands: void 0,
      slashMenuFactory: void 0
    };
  },
  addProseMirrorPlugins() {
    if (!this.options.slashMenuFactory || !this.options.commands)
      throw new Error("required args not defined for SlashMenuExtension");
    const o = this.options.commands;
    return [
      qe({
        pluginKey: X,
        editor: this.options.editor,
        defaultTriggerCharacter: "/",
        suggestionsMenuFactory: this.options.slashMenuFactory,
        items: (e) => o.filter(
          (t) => t.match(e)
        ),
        onSelectItem: ({ item: e, editor: t }) => {
          e.execute(t);
        }
      })
    ];
  }
});
class A extends G {
  constructor(t, n) {
    super(t, n);
    h(this, "nodes");
    const r = t.node();
    this.nodes = [], t.doc.nodesBetween(t.pos, n.pos, (i, a, s) => {
      if (s !== null && s.eq(r))
        return this.nodes.push(i), !1;
    });
  }
  static create(t, n, r = n) {
    return new A(t.resolve(n), t.resolve(r));
  }
  content() {
    return new T(P.from(this.nodes), 0, 0);
  }
  eq(t) {
    if (!(t instanceof A) || this.nodes.length !== t.nodes.length || this.from !== t.from || this.to !== t.to)
      return !1;
    for (let n = 0; n < this.nodes.length; n++)
      if (!this.nodes[n].eq(t.nodes[n]))
        return !1;
    return !0;
  }
  map(t, n) {
    let r = n.mapResult(this.from), i = n.mapResult(this.to);
    return i.deleted ? G.near(t.resolve(r.pos)) : r.deleted ? G.near(t.resolve(i.pos)) : new A(
      t.resolve(r.pos),
      t.resolve(i.pos)
    );
  }
  toJSON() {
    return { type: "node", anchor: this.anchor, head: this.head };
  }
}
const Ve = ae.__serializeForClipboard;
let w;
function Pt(o, e) {
  var r;
  if (!e.dom.isConnected)
    return;
  let t = e.posAtCoords(o);
  if (!t)
    return;
  let n = e.domAtPos(t.pos).node;
  if (n !== e.dom) {
    for (; n && n.parentNode && n.parentNode !== e.dom && !((r = n.hasAttribute) != null && r.call(n, "data-id")); )
      n = n.parentNode;
    if (n)
      return { node: n, id: n.getAttribute("data-id") };
  }
}
function Ye(o, e) {
  let t = Pt(o, e);
  if (t && t.node.nodeType === 1) {
    const n = e.docView;
    let r = n.nearestDesc(t.node, !0);
    return !r || r === n ? null : r.posBefore;
  }
  return null;
}
function Ke(o, e) {
  let t, n;
  const r = e.resolve(o.from).node().type.spec.group === "blockContent", i = e.resolve(o.to).node().type.spec.group === "blockContent", a = Math.min(o.$anchor.depth, o.$head.depth);
  if (r && i) {
    const s = o.$from.start(a - 1), l = o.$to.end(a - 1);
    t = e.resolve(s - 1).pos, n = e.resolve(l + 1).pos;
  } else
    t = o.from, n = o.to;
  return { from: t, to: n };
}
function it(o, e, t = e) {
  e === t && (t += o.state.doc.resolve(e + 1).node().nodeSize);
  const n = o.domAtPos(e).node.cloneNode(!0), r = o.domAtPos(e).node, i = (c, u) => Array.prototype.indexOf.call(c.children, u), a = i(
    r,
    // Expects from position to be just before the first selected block.
    o.domAtPos(e + 1).node.parentElement
  ), s = i(
    r,
    // Expects to position to be just after the last selected block.
    o.domAtPos(t - 1).node.parentElement
  );
  for (let c = r.childElementCount - 1; c >= 0; c--)
    (c > s || c < a) && n.removeChild(n.children[c]);
  _t(), w = n;
  const d = o.dom.className.split(" ").filter(
    (c) => !c.includes("bn") && !c.includes("ProseMirror") && !c.includes("editor")
  ).join(" ");
  w.className = w.className + " " + _.dragPreview + " " + d, document.body.appendChild(w);
}
function _t() {
  w !== void 0 && (document.body.removeChild(w), w = void 0);
}
function Je(o, e) {
  if (!o.dataTransfer)
    return;
  const t = e.dom.getBoundingClientRect();
  let n = {
    left: t.left + t.width / 2,
    // take middle of editor
    top: o.clientY
  }, r = Ye(n, e);
  if (r != null) {
    const i = e.state.selection, a = e.state.doc, { from: s, to: l } = Ke(i, a), d = s <= r && r < l, c = i.$anchor.node() !== i.$head.node() || i instanceof A;
    d && c ? (e.dispatch(
      e.state.tr.setSelection(A.create(a, s, l))
    ), it(e, s, l)) : (e.dispatch(
      e.state.tr.setSelection($t.create(e.state.doc, r))
    ), it(e, r));
    let u = e.state.selection.content(), { dom: p, text: f } = Ve(e, u);
    o.dataTransfer.clearData(), o.dataTransfer.setData("text/html", p.innerHTML), o.dataTransfer.setData("text/plain", f), o.dataTransfer.effectAllowed = "move", o.dataTransfer.setDragImage(w, 0, 0), e.dragging = { slice: u, move: !0 };
  }
}
class Xe {
  constructor({
    tiptapEditor: e,
    editor: t,
    blockMenuFactory: n,
    horizontalPosAnchoredAtRoot: r
  }) {
    h(this, "editor");
    h(this, "ttEditor");
    // When true, the drag handle with be anchored at the same level as root elements
    // When false, the drag handle with be just to the left of the element
    h(this, "horizontalPosAnchoredAtRoot");
    h(this, "horizontalPosAnchor");
    h(this, "blockMenu");
    h(this, "hoveredBlock");
    // Used to check if currently dragged content comes from this editor instance.
    h(this, "isDragging", !1);
    h(this, "menuOpen", !1);
    h(this, "menuFrozen", !1);
    h(this, "lastPosition");
    /**
     * Sets isDragging when dragging text.
     */
    h(this, "onDragStart", () => {
      this.isDragging = !0;
    });
    /**
     * If the event is outside the editor contents,
     * we dispatch a fake event, so that we can still drop the content
     * when dragging / dropping to the side of the editor
     */
    h(this, "onDrop", (e) => {
      if (e.synthetic || !this.isDragging)
        return;
      let t = this.ttEditor.view.posAtCoords({
        left: e.clientX,
        top: e.clientY
      });
      if (this.isDragging = !1, !t || t.inside === -1) {
        const n = new Event("drop", e), r = this.ttEditor.view.dom.firstChild.getBoundingClientRect();
        n.clientX = r.left + r.width / 2, n.clientY = e.clientY, n.dataTransfer = e.dataTransfer, n.preventDefault = () => e.preventDefault(), n.synthetic = !0, this.ttEditor.view.dom.dispatchEvent(n);
      }
    });
    /**
     * If the event is outside the editor contents,
     * we dispatch a fake event, so that we can still drop the content
     * when dragging / dropping to the side of the editor
     */
    h(this, "onDragOver", (e) => {
      if (e.synthetic || !this.isDragging)
        return;
      let t = this.ttEditor.view.posAtCoords({
        left: e.clientX,
        top: e.clientY
      });
      if (!t || t.inside === -1) {
        const n = new Event("dragover", e), r = this.ttEditor.view.dom.firstChild.getBoundingClientRect();
        n.clientX = r.left + r.width / 2, n.clientY = e.clientY, n.dataTransfer = e.dataTransfer, n.preventDefault = () => e.preventDefault(), n.synthetic = !0, this.ttEditor.view.dom.dispatchEvent(n);
      }
    });
    h(this, "onKeyDown", (e) => {
      this.menuOpen && (this.menuOpen = !1, this.blockMenu.hide()), this.menuFrozen = !1;
    });
    h(this, "onMouseDown", (e) => {
      var t;
      (t = this.blockMenu.element) != null && t.contains(e.target) || (this.menuOpen && (this.menuOpen = !1, this.blockMenu.hide()), this.menuFrozen = !1);
    });
    h(this, "onMouseMove", (e) => {
      var l, d, c;
      if (this.menuFrozen)
        return;
      const t = this.ttEditor.view.dom.firstChild.getBoundingClientRect(), n = this.ttEditor.view.dom.getBoundingClientRect();
      if (
        // Cursor is within the editor area
        e.clientX >= n.left && e.clientX <= n.right && e.clientY >= n.top && e.clientY <= n.bottom && // An element is hovered
        e && e.target && // Element is outside the editor
        this.ttEditor.view.dom !== e.target && !this.ttEditor.view.dom.contains(e.target) && // Element is outside the side menu
        this.blockMenu.element !== e.target && !((l = this.blockMenu.element) != null && l.contains(e.target))
      ) {
        this.menuOpen && (this.menuOpen = !1, this.blockMenu.hide());
        return;
      }
      this.horizontalPosAnchor = t.x;
      const i = {
        left: t.left + t.width / 2,
        // take middle of editor
        top: e.clientY
      }, a = Pt(i, this.ttEditor.view);
      if (!a || !this.editor.isEditable) {
        this.menuOpen && (this.menuOpen = !1, this.blockMenu.hide());
        return;
      }
      this.menuOpen && ((d = this.hoveredBlock) != null && d.hasAttribute("data-id")) && ((c = this.hoveredBlock) == null ? void 0 : c.getAttribute("data-id")) === a.id || (this.hoveredBlock = a.node, !a.node.firstChild) || this.editor.isEditable && (this.menuOpen ? this.blockMenu.render(this.getDynamicParams(), !1) : (this.menuOpen = !0, this.blockMenu.render(this.getDynamicParams(), !0)));
    });
    this.editor = t, this.ttEditor = e, this.horizontalPosAnchoredAtRoot = r, this.horizontalPosAnchor = this.ttEditor.view.dom.firstChild.getBoundingClientRect().x, this.blockMenu = n(this.getStaticParams()), document.body.addEventListener("drop", this.onDrop, !0), document.body.addEventListener("dragover", this.onDragOver), this.ttEditor.view.dom.addEventListener("dragstart", this.onDragStart), document.body.addEventListener("mousemove", this.onMouseMove, !0), document.body.addEventListener("mousedown", this.onMouseDown, !0), document.body.addEventListener("keydown", this.onKeyDown, !0);
  }
  destroy() {
    this.menuOpen && (this.menuOpen = !1, this.blockMenu.hide()), document.body.removeEventListener("mousemove", this.onMouseMove), document.body.removeEventListener("dragover", this.onDragOver), this.ttEditor.view.dom.removeEventListener("dragstart", this.onDragStart), document.body.removeEventListener("drop", this.onDrop), document.body.removeEventListener("mousedown", this.onMouseDown), document.body.removeEventListener("keydown", this.onKeyDown);
  }
  addBlock() {
    this.menuOpen = !1, this.menuFrozen = !0, this.blockMenu.hide();
    const t = this.hoveredBlock.firstChild.getBoundingClientRect(), n = this.ttEditor.view.posAtCoords({
      left: t.left + t.width / 2,
      top: t.top + t.height / 2
    });
    if (!n)
      return;
    const r = g(this.ttEditor.state.doc, n.pos);
    if (r === void 0)
      return;
    const { contentNode: i, endPos: a } = r;
    if (i.textContent.length !== 0) {
      const s = a + 1, l = s + 2;
      this.ttEditor.chain().BNCreateBlock(s).BNUpdateBlock(l, { type: "paragraph", props: {} }).setTextSelection(l).run();
    } else
      this.ttEditor.commands.setTextSelection(a);
    this.ttEditor.view.focus(), this.ttEditor.view.dispatch(
      this.ttEditor.view.state.tr.scrollIntoView().setMeta(X, {
        // TODO import suggestion plugin key
        activate: !0,
        type: "drag"
      })
    );
  }
  getStaticParams() {
    return {
      editor: this.editor,
      addBlock: () => this.addBlock(),
      blockDragStart: (e) => {
        this.isDragging = !0, Je(e, this.ttEditor.view);
      },
      blockDragEnd: () => _t(),
      freezeMenu: () => {
        this.menuFrozen = !0;
      },
      unfreezeMenu: () => {
        this.menuFrozen = !1;
      },
      getReferenceRect: () => {
        if (!this.menuOpen) {
          if (this.lastPosition === void 0)
            throw new Error(
              "Attempted to access block reference rect before rendering block side menu."
            );
          return this.lastPosition;
        }
        const t = this.hoveredBlock.firstChild.getBoundingClientRect();
        return this.horizontalPosAnchoredAtRoot && (t.x = this.horizontalPosAnchor), this.lastPosition = t, t;
      }
    };
  }
  getDynamicParams() {
    return {
      block: this.editor.getBlock(this.hoveredBlock.getAttribute("data-id"))
    };
  }
}
const Ze = (o) => new C({
  key: new E("DraggableBlocksPlugin"),
  view: () => new Xe({
    tiptapEditor: o.tiptapEditor,
    editor: o.editor,
    blockMenuFactory: o.blockSideMenuFactory,
    horizontalPosAnchoredAtRoot: !0
  })
}), Qe = () => v.create({
  name: "DraggableBlocksExtension",
  priority: 1e3,
  // Need to be high, in order to hide menu when typing slash
  addProseMirrorPlugins() {
    if (!this.options.blockSideMenuFactory)
      throw new Error(
        "UI Element factory not defined for DraggableBlocksExtension"
      );
    return [
      Ze({
        tiptapEditor: this.editor,
        editor: this.options.editor,
        blockSideMenuFactory: this.options.blockSideMenuFactory
      })
    ];
  }
});
class to {
  constructor({
    editor: e,
    tiptapEditor: t,
    formattingToolbarFactory: n,
    view: r
  }) {
    h(this, "editor");
    h(this, "ttEditor");
    h(this, "view");
    h(this, "formattingToolbar");
    h(this, "preventHide", !1);
    h(this, "preventShow", !1);
    h(this, "toolbarIsOpen", !1);
    h(this, "prevWasEditable", null);
    h(this, "lastPosition");
    h(this, "shouldShow", ({ view: e, state: t, from: n, to: r }) => {
      const { doc: i, selection: a } = t, { empty: s } = a, l = !i.textBetween(n, r).length && Rt(t.selection);
      return !(!e.hasFocus() || s || l);
    });
    h(this, "viewMousedownHandler", () => {
      this.preventShow = !0;
    });
    h(this, "viewMouseupHandler", () => {
      this.preventShow = !1, setTimeout(() => this.update(this.ttEditor.view));
    });
    h(this, "dragstartHandler", () => {
      this.formattingToolbar.hide(), this.toolbarIsOpen = !1;
    });
    h(this, "focusHandler", () => {
      setTimeout(() => this.update(this.ttEditor.view));
    });
    h(this, "blurHandler", ({ event: e }) => {
      var t;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      // An element is clicked.
      e && e.relatedTarget && // Element is outside the toolbar.
      (this.formattingToolbar.element === e.relatedTarget || (t = this.formattingToolbar.element) != null && t.contains(e.relatedTarget)) || this.toolbarIsOpen && (this.formattingToolbar.hide(), this.toolbarIsOpen = !1);
    });
    this.editor = e, this.ttEditor = t, this.view = r, this.formattingToolbar = n(this.getStaticParams()), this.view.dom.addEventListener("mousedown", this.viewMousedownHandler), this.view.dom.addEventListener("mouseup", this.viewMouseupHandler), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.ttEditor.on("focus", this.focusHandler), this.ttEditor.on("blur", this.blurHandler);
  }
  update(e, t) {
    var p;
    const { state: n, composing: r } = e, { doc: i, selection: a } = n, s = t && t.doc.eq(i) && t.selection.eq(a);
    if ((this.prevWasEditable === null || this.prevWasEditable === this.editor.isEditable) && (r || s))
      return;
    this.prevWasEditable = this.editor.isEditable;
    const { ranges: l } = a, d = Math.min(...l.map((f) => f.$from.pos)), c = Math.max(...l.map((f) => f.$to.pos)), u = (p = this.shouldShow) == null ? void 0 : p.call(this, {
      view: e,
      state: n,
      from: d,
      to: c
    });
    if (this.editor.isEditable && !this.toolbarIsOpen && !this.preventShow && (u || this.preventHide)) {
      this.formattingToolbar.render({}, !0), this.toolbarIsOpen = !0;
      return;
    }
    if (this.toolbarIsOpen && !this.preventShow && (u || this.preventHide)) {
      this.formattingToolbar.render({}, !1);
      return;
    }
    if (this.toolbarIsOpen && !this.preventHide && (!u || this.preventShow || !this.editor.isEditable)) {
      this.formattingToolbar.hide(), this.toolbarIsOpen = !1;
      return;
    }
  }
  destroy() {
    this.view.dom.removeEventListener("mousedown", this.viewMousedownHandler), this.view.dom.removeEventListener("mouseup", this.viewMouseupHandler), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.ttEditor.off("focus", this.focusHandler), this.ttEditor.off("blur", this.blurHandler);
  }
  getSelectionBoundingBox() {
    const { state: e } = this.ttEditor.view, { selection: t } = e, { ranges: n } = t, r = Math.min(...n.map((a) => a.$from.pos)), i = Math.max(...n.map((a) => a.$to.pos));
    if (zt(t)) {
      const a = this.ttEditor.view.nodeDOM(r);
      if (a)
        return a.getBoundingClientRect();
    }
    return at(this.ttEditor.view, r, i);
  }
  getStaticParams() {
    return {
      editor: this.editor,
      getReferenceRect: () => {
        if (!this.toolbarIsOpen) {
          if (this.lastPosition === void 0)
            throw new Error(
              "Attempted to access selection reference rect before rendering formatting toolbar."
            );
          return this.lastPosition;
        }
        const e = this.getSelectionBoundingBox();
        return this.lastPosition = e, e;
      }
    };
  }
}
const eo = (o) => new C({
  key: new E("FormattingToolbarPlugin"),
  view: (e) => new to({ view: e, ...o })
}), oo = () => v.create({
  name: "FormattingToolbarExtension",
  addProseMirrorPlugins() {
    if (!this.options.formattingToolbarFactory || !this.options.editor)
      throw new Error(
        "required args not defined for FormattingToolbarExtension"
      );
    return [
      eo({
        tiptapEditor: this.editor,
        editor: this.options.editor,
        formattingToolbarFactory: this.options.formattingToolbarFactory,
        pluginKey: new E("FormattingToolbarPlugin")
      })
    ];
  }
}), no = new E("HyperlinkToolbarPlugin");
class ro {
  constructor({ editor: e, hyperlinkToolbarFactory: t }) {
    h(this, "editor");
    h(this, "hyperlinkToolbar");
    h(this, "menuUpdateTimer");
    h(this, "startMenuUpdateTimer");
    h(this, "stopMenuUpdateTimer");
    h(this, "mouseHoveredHyperlinkMark");
    h(this, "mouseHoveredHyperlinkMarkRange");
    h(this, "keyboardHoveredHyperlinkMark");
    h(this, "keyboardHoveredHyperlinkMarkRange");
    h(this, "hyperlinkMark");
    h(this, "hyperlinkMarkRange");
    h(this, "lastPosition");
    h(this, "mouseOverHandler", (e) => {
      if (this.mouseHoveredHyperlinkMark = void 0, this.mouseHoveredHyperlinkMarkRange = void 0, this.stopMenuUpdateTimer(), e.target instanceof HTMLAnchorElement && e.target.nodeName === "A") {
        const t = e.target, n = this.editor.view.posAtDOM(t, 0) + 1, r = this.editor.state.doc.resolve(
          n
        ), i = r.marks();
        for (const a of i)
          if (a.type.name === this.editor.schema.mark("link").type.name) {
            this.mouseHoveredHyperlinkMark = a, this.mouseHoveredHyperlinkMarkRange = Q(
              r,
              a.type,
              a.attrs
            ) || void 0;
            break;
          }
      }
      return this.startMenuUpdateTimer(), !1;
    });
    h(this, "clickHandler", (e) => {
      var t;
      // Toolbar is open.
      this.hyperlinkMark && // An element is clicked.
      e && e.target && // Element is outside the editor.
      this.editor.view.dom !== e.target && !this.editor.view.dom.contains(e.target) && // Element is outside the toolbar.
      this.hyperlinkToolbar.element !== e.target && !((t = this.hyperlinkToolbar.element) != null && t.contains(e.target)) && this.hyperlinkToolbar.hide();
    });
    this.editor = e, this.hyperlinkToolbar = t(this.getStaticParams()), this.startMenuUpdateTimer = () => {
      this.menuUpdateTimer = setTimeout(() => {
        this.update();
      }, 250);
    }, this.stopMenuUpdateTimer = () => (this.menuUpdateTimer && (clearTimeout(this.menuUpdateTimer), this.menuUpdateTimer = void 0), !1), this.editor.view.dom.addEventListener("mouseover", this.mouseOverHandler), document.addEventListener("click", this.clickHandler, !0);
  }
  update() {
    var t, n, r, i;
    if (!this.editor.view.hasFocus())
      return;
    const e = this.hyperlinkMark;
    if (this.hyperlinkMark = void 0, this.hyperlinkMarkRange = void 0, this.keyboardHoveredHyperlinkMark = void 0, this.keyboardHoveredHyperlinkMarkRange = void 0, this.editor.state.selection.empty) {
      const a = this.editor.state.selection.$from.marks();
      for (const s of a)
        if (s.type.name === this.editor.schema.mark("link").type.name) {
          this.keyboardHoveredHyperlinkMark = s, this.keyboardHoveredHyperlinkMarkRange = Q(
            this.editor.state.selection.$from,
            s.type,
            s.attrs
          ) || void 0;
          break;
        }
    }
    if (this.mouseHoveredHyperlinkMark && (this.hyperlinkMark = this.mouseHoveredHyperlinkMark, this.hyperlinkMarkRange = this.mouseHoveredHyperlinkMarkRange), this.keyboardHoveredHyperlinkMark && (this.hyperlinkMark = this.keyboardHoveredHyperlinkMark, this.hyperlinkMarkRange = this.keyboardHoveredHyperlinkMarkRange), this.hyperlinkMark && this.editor.isEditable) {
      if (this.getDynamicParams(), !e) {
        this.hyperlinkToolbar.render(this.getDynamicParams(), !0), (t = this.hyperlinkToolbar.element) == null || t.addEventListener(
          "mouseleave",
          this.startMenuUpdateTimer
        ), (n = this.hyperlinkToolbar.element) == null || n.addEventListener(
          "mouseenter",
          this.stopMenuUpdateTimer
        );
        return;
      }
      this.hyperlinkToolbar.render(this.getDynamicParams(), !1);
      return;
    }
    if (e && (!this.hyperlinkMark || !this.editor.isEditable)) {
      (r = this.hyperlinkToolbar.element) == null || r.removeEventListener(
        "mouseleave",
        this.startMenuUpdateTimer
      ), (i = this.hyperlinkToolbar.element) == null || i.removeEventListener(
        "mouseenter",
        this.stopMenuUpdateTimer
      ), this.hyperlinkToolbar.hide();
      return;
    }
  }
  destroy() {
    this.editor.view.dom.removeEventListener(
      "mouseover",
      this.mouseOverHandler
    );
  }
  getStaticParams() {
    return {
      editHyperlink: (e, t) => {
        const n = this.editor.view.state.tr.insertText(
          t,
          this.hyperlinkMarkRange.from,
          this.hyperlinkMarkRange.to
        );
        n.addMark(
          this.hyperlinkMarkRange.from,
          this.hyperlinkMarkRange.from + t.length,
          this.editor.schema.mark("link", { href: e })
        ), this.editor.view.dispatch(n), this.editor.view.focus(), this.hyperlinkToolbar.hide();
      },
      deleteHyperlink: () => {
        this.editor.view.dispatch(
          this.editor.view.state.tr.removeMark(
            this.hyperlinkMarkRange.from,
            this.hyperlinkMarkRange.to,
            this.hyperlinkMark.type
          ).setMeta("preventAutolink", !0)
        ), this.editor.view.focus(), this.hyperlinkToolbar.hide();
      },
      getReferenceRect: () => {
        if (!this.hyperlinkMark) {
          if (this.lastPosition === void 0)
            throw new Error(
              "Attempted to access hyperlink reference rect before rendering hyperlink toolbar."
            );
          return this.lastPosition;
        }
        const e = at(
          this.editor.view,
          this.hyperlinkMarkRange.from,
          this.hyperlinkMarkRange.to
        );
        return this.lastPosition = e, e;
      }
    };
  }
  getDynamicParams() {
    return {
      url: this.hyperlinkMark.attrs.href,
      text: this.editor.view.state.doc.textBetween(
        this.hyperlinkMarkRange.from,
        this.hyperlinkMarkRange.to
      )
    };
  }
}
const io = (o, e) => new C({
  key: no,
  view: () => new ro({
    editor: o,
    hyperlinkToolbarFactory: e.hyperlinkToolbarFactory
  })
}), so = ut.extend({
  priority: 500,
  addProseMirrorPlugins() {
    var o;
    if (!this.options.hyperlinkToolbarFactory)
      throw new Error("UI Element factory not defined for HyperlinkMark");
    return [
      ...((o = this.parent) == null ? void 0 : o.call(this)) || [],
      io(this.editor, {
        hyperlinkToolbarFactory: this.options.hyperlinkToolbarFactory
      })
    ];
  }
}), ao = new E("blocknote-placeholder"), lo = v.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      isFilterClass: "is-filter",
      hasAnchorClass: "has-anchor",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new C({
        key: ao,
        props: {
          decorations: (o) => {
            const { doc: e, selection: t } = o, n = X.getState(o), r = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: i } = t, a = [];
            if (r)
              return e.descendants((s, l) => {
                const d = i >= l && i <= l + s.nodeSize, c = !s.isLeaf && !s.childCount;
                if ((d || !this.options.showOnlyCurrent) && c) {
                  const u = [this.options.emptyNodeClass];
                  this.editor.isEmpty && u.push(this.options.emptyEditorClass), d && u.push(this.options.hasAnchorClass), (n == null ? void 0 : n.triggerCharacter) === "" && (n != null && n.active) && u.push(this.options.isFilterClass);
                  const p = D.node(l, l + s.nodeSize, {
                    class: u.join(" ")
                  });
                  a.push(p);
                }
                return this.options.includeChildren;
              }), F.create(e, a);
          }
        }
      })
    ];
  }
});
class co {
  constructor(e, t) {
    this.name = e, this.match = t;
  }
}
class S extends co {
  /**
   * Constructs a new slash-command.
   *
   * @param name The name of the command
   * @param execute The callback for creating a new node
   * @param aliases Aliases for this command
   */
  constructor(e, t, n = []) {
    super(e, (r) => this.name.toLowerCase().startsWith(r.toLowerCase()) || this.aliases.filter(
      (i) => i.toLowerCase().startsWith(r.toLowerCase())
    ).length !== 0), this.name = e, this.execute = t, this.aliases = n;
  }
}
function I(o, e) {
  const t = o.getTextCursorPosition().block;
  t.content.length === 1 && t.content[0].type === "text" && t.content[0].text === "/" || t.content.length === 0 ? o.updateBlock(t, e) : (o.insertBlocks([e], t, "after"), o.setTextCursorPosition(o.getTextCursorPosition().nextBlock));
}
const uo = [
  // Command for creating a level 1 heading
  new S(
    "Heading",
    (o) => I(o, {
      type: "heading",
      props: { level: "1" }
    }),
    ["h", "heading1", "h1"]
  ),
  // Command for creating a level 2 heading
  new S(
    "Heading 2",
    (o) => I(o, {
      type: "heading",
      props: { level: "2" }
    }),
    ["h2", "heading2", "subheading"]
  ),
  // Command for creating a level 3 heading
  new S(
    "Heading 3",
    (o) => I(o, {
      type: "heading",
      props: { level: "3" }
    }),
    ["h3", "heading3", "subheading"]
  ),
  // Command for creating an ordered list
  new S(
    "Numbered List",
    (o) => I(o, {
      type: "numberedListItem"
    }),
    ["li", "list", "numberedlist", "numbered list"]
  ),
  // Command for creating a bullet list
  new S(
    "Bullet List",
    (o) => I(o, {
      type: "bulletListItem"
    }),
    ["ul", "list", "bulletlist", "bullet list"]
  ),
  // Command for creating a paragraph (pretty useless)
  new S(
    "Paragraph",
    (o) => I(o, {
      type: "paragraph"
    }),
    ["p"]
  )
  //     replaceRangeWithNode(editor, range, node);
  //     return true;
  //   },
  //   ["ol", "orderedlist"],
  //   OrderedListIcon,
  //   "Used to display an ordered (enumerated) list item"
  // ),
  // Command for creating a blockquote
  // blockquote: new SlashCommand(
  //   "Block Quote",
  //   CommandGroup.BASIC_BLOCKS,
  //   (editor, range) => {
  //     const paragraph = editor.schema.node("paragraph");
  //     const node = editor.schema.node(
  //       "blockquote",
  //       { "block-id": uniqueId.generate() },
  //       paragraph
  //     );
  //     replaceRangeWithNode(editor, range, node);
  //     return true;
  //   },
  //   ["quote", "blockquote"],
  //   QuoteIcon,
  //   "Used to make a quote stand out",
  //   "Ctrl+Shift+B"
  // ),
  // Command for creating a horizontal rule
  // horizontalRule: new SlashCommand(
  //   "Horizontal Rule",
  //   CommandGroup.BASIC_BLOCKS,
  //   (editor, range) => {
  //     const node = editor.schema.node("horizontalRule", {
  //       "block-id": uniqueId.generate(),
  //     });
  //     // insert horizontal rule, create a new block after the horizontal rule if applicable
  //     // and put the cursor in the block after the horizontal rule.
  //     editor
  //       .chain()
  //       .focus()
  //       .replaceRangeAndUpdateSelection(range, node)
  //       .command(({ tr, dispatch }) => {
  //         if (dispatch) {
  //           // the node immediately after the cursor
  //           const nodeAfter = tr.selection.$to.nodeAfter;
  //           // the position of the cursor
  //           const cursorPos = tr.selection.$to.pos;
  //           // check if there is no node after the cursor (end of document)
  //           if (!nodeAfter) {
  //             // create a new block of the default type (probably paragraph) after the cursor
  //             const { parent } = tr.selection.$to;
  //             const node = parent.type.contentMatch.defaultType?.create();
  //             if (node) {
  //               tr.insert(cursorPos, node);
  //             }
  //           }
  //           // try to put the cursor at the start of the node directly after the inserted horizontal rule
  //           tr.doc.nodesBetween(cursorPos, cursorPos + 1, (node, pos) => {
  //             if (node.type.name !== "horizontalRule") {
  //               tr.setSelection(TextSelection.create(tr.doc, pos));
  //             }
  //           });
  //         }
  //         return true;
  //       })
  //       .scrollIntoView()
  //       .run();
  //     return true;
  //   },
  //   ["hr", "horizontalrule"],
  //   SeparatorIcon,
  //   "Used to separate sections with a horizontal line"
  // ),
  // Command for creating a table
  // table: new SlashCommand(
  //   "Table",
  //   CommandGroup.BASIC_BLOCKS,
  //   (editor, range) => {
  //     editor.chain().focus().deleteRange(range).run();
  //     // TODO: add blockid, pending https://github.com/ueberdosis/tiptap/pull/1469
  //     editor
  //       .chain()
  //       .focus()
  //       .insertTable({ rows: 1, cols: 2, withHeaderRow: false })
  //       .scrollIntoView()
  //       .run();
  //     return true;
  //   },
  //   ["table", "database"],
  //   TableIcon,
  //   "Used to create a simple table"
  // ),
], ho = v.create({
  name: "textAlignment",
  addGlobalAttributes() {
    return [
      {
        // Attribute is applied to block content instead of container so that child blocks don't inherit the text
        // alignment styling.
        types: ["paragraph", "heading", "bulletListItem", "numberedListItem"],
        attributes: {
          textAlignment: {
            default: "left",
            parseHTML: (o) => o.getAttribute("data-text-alignment"),
            renderHTML: (o) => o.textAlignment !== "left" && {
              "data-text-alignment": o.textAlignment
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlignment: (o) => ({ state: e }) => {
        const t = [], n = g(
          e.doc,
          e.selection.from
        );
        if (n === void 0)
          return !1;
        let r = n.startPos;
        for (; r < e.selection.to; )
          e.doc.resolve(r).node().type.spec.group === "blockContent" ? (t.push(r - 1), r += e.doc.resolve(r).node().nodeSize - 1) : r += 1;
        for (const i of t)
          e.tr.setNodeAttribute(i, "textAlignment", o);
        return !0;
      }
    };
  }
}), po = v.create({
  name: "blockTextColor",
  addGlobalAttributes() {
    return [
      {
        types: ["blockContainer"],
        attributes: {
          textColor: {
            default: "default",
            parseHTML: (o) => o.hasAttribute("data-text-color") ? o.getAttribute("data-text-color") : "default",
            renderHTML: (o) => o.textColor !== "default" && {
              "data-text-color": o.textColor
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setBlockTextColor: (o, e) => ({ state: t, view: n }) => {
        const r = g(t.doc, o);
        return r === void 0 ? !1 : (t.tr.setNodeAttribute(r.startPos - 1, "textColor", e), n.focus(), !0);
      }
    };
  }
}), fo = st.create({
  name: "textColor",
  addAttributes() {
    return {
      color: {
        default: void 0,
        parseHTML: (o) => o.getAttribute("data-text-color"),
        renderHTML: (o) => ({
          "data-text-color": o.color
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (o) => typeof o == "string" ? !1 : o.hasAttribute("data-text-color") ? { color: o.getAttribute("data-text-color") } : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: o }) {
    return ["span", o, 0];
  },
  addCommands() {
    return {
      setTextColor: (o) => ({ commands: e }) => o !== "default" ? e.setMark(this.name, { color: o }) : e.unsetMark(this.name)
    };
  }
}), mo = v.create({
  name: "trailingNode",
  addProseMirrorPlugins() {
    const o = new E(this.name);
    return [
      new C({
        key: o,
        appendTransaction: (e, t, n) => {
          const { doc: r, tr: i, schema: a } = n, s = o.getState(n), l = r.content.size - 2, d = a.nodes.blockContainer, c = a.nodes.paragraph;
          if (s)
            return i.insert(
              l,
              d.create(void 0, c.create())
            );
        },
        state: {
          init: (e, t) => {
          },
          apply: (e, t) => {
            if (!e.docChanged)
              return t;
            let n = e.doc.lastChild;
            if (!n || n.type.name !== "blockGroup")
              throw new Error("Expected blockGroup");
            if (n = n.lastChild, !n || n.type.name !== "blockContainer")
              throw new Error("Expected blockContainer");
            return n.nodeSize > 4;
          }
        }
      })
    ];
  }
}), go = (o) => {
  const e = [
    N.ClipboardTextSerializer,
    N.Commands,
    N.Editable,
    N.FocusEvents,
    N.Tabindex,
    // DevTools,
    te,
    // DropCursor,
    lo.configure({
      emptyNodeClass: k.isEmpty,
      hasAnchorClass: k.hasAnchor,
      isFilterClass: k.isFilter,
      includeChildren: !0,
      showOnlyCurrent: !1
    }),
    K.configure({
      types: ["blockContainer"]
    }),
    ee,
    // Comments,
    // basics:
    ie,
    // marks:
    Kt,
    Jt,
    ne,
    re,
    se,
    fo,
    po,
    Le,
    Ne,
    ho,
    // custom blocks:
    ...ze,
    ...Object.values(o.blockSchema).map(
      (t) => t.node.configure({ editor: o.editor })
    ),
    $e,
    Qt.configure({ width: 5, color: "#ddeeff" }),
    // This needs to be at the bottom of this list, because Key events (such as enter, when selecting a /command),
    // should be handled before Enter handlers in other components like splitListItem
    mo
  ];
  if (o.collaboration) {
    e.push(
      Xt.configure({
        fragment: o.collaboration.fragment
      })
    );
    const t = (n) => {
      const r = document.createElement("span");
      r.classList.add(_["collaboration-cursor__caret"]), r.setAttribute("style", `border-color: ${n.color}`);
      const i = document.createElement("span");
      i.classList.add(_["collaboration-cursor__label"]), i.setAttribute("style", `background-color: ${n.color}`), i.insertBefore(document.createTextNode(n.name), null);
      const a = document.createTextNode("⁠"), s = document.createTextNode("⁠");
      return r.insertBefore(a, null), r.insertBefore(i, null), r.insertBefore(s, null), r;
    };
    e.push(
      Zt.configure({
        user: o.collaboration.user,
        render: o.collaboration.renderCursor || t,
        provider: o.collaboration.provider
      })
    );
  } else
    e.push(oe);
  return o.uiFactories.blockSideMenuFactory && e.push(
    Qe().configure({
      editor: o.editor,
      blockSideMenuFactory: o.uiFactories.blockSideMenuFactory
    })
  ), o.uiFactories.formattingToolbarFactory && e.push(
    oo().configure({
      editor: o.editor,
      formattingToolbarFactory: o.uiFactories.formattingToolbarFactory
    })
  ), o.uiFactories.hyperlinkToolbarFactory ? e.push(
    so.configure({
      hyperlinkToolbarFactory: o.uiFactories.hyperlinkToolbarFactory
    })
  ) : e.push(ut), o.uiFactories.slashMenuFactory && e.push(
    We().configure({
      editor: o.editor,
      commands: o.slashCommands,
      slashMenuFactory: o.uiFactories.slashMenuFactory
    })
  ), e;
}, ko = {
  enableInputRules: !0,
  enablePasteRules: !0,
  enableCoreExtensions: !1
};
class Ko {
  constructor(e = {}) {
    h(this, "_tiptapEditor");
    h(this, "blockCache", /* @__PURE__ */ new WeakMap());
    h(this, "schema");
    h(this, "ready", !1);
    var i, a, s;
    this.options = e;
    const t = {
      defaultStyles: !0,
      // TODO: There's a lot of annoying typing stuff to deal with here. If
      //  BSchema is specified, then options.blockSchema should also be required.
      //  If BSchema is not specified, then options.blockSchema should also not
      //  be defined. Unfortunately, trying to implement these constraints seems
      //  to be a huge pain, hence the `as any` casts.
      blockSchema: e.blockSchema || ke,
      ...e
    }, n = go({
      editor: this,
      uiFactories: t.uiFactories || {},
      slashCommands: t.slashCommands || uo,
      blockSchema: t.blockSchema,
      collaboration: t.collaboration
    });
    this.schema = t.blockSchema;
    const r = {
      // TODO: This approach to setting initial content is "cleaner" but requires the PM editor schema, which is only
      //  created after initializing the TipTap editor. Not sure it's feasible.
      // content:
      //   options.initialContent &&
      //   options.initialContent.map((block) =>
      //     blockToNode(block, this._tiptapEditor.schema).toJSON()
      //   ),
      ...ko,
      ...t._tiptapOptions,
      onCreate: () => {
        var l;
        (l = t.onEditorReady) == null || l.call(t, this), t.initialContent && this.replaceBlocks(this.topLevelBlocks, t.initialContent), this.ready = !0;
      },
      onUpdate: () => {
        var l;
        this.ready && ((l = t.onEditorContentChange) == null || l.call(t, this));
      },
      onSelectionUpdate: () => {
        var l;
        this.ready && ((l = t.onTextCursorPositionChange) == null || l.call(t, this));
      },
      editable: e.editable === void 0 ? !0 : e.editable,
      extensions: t.enableBlockNoteExtensions === !1 ? (i = t._tiptapOptions) == null ? void 0 : i.extensions : [...((a = t._tiptapOptions) == null ? void 0 : a.extensions) || [], ...n],
      editorProps: {
        attributes: {
          "data-theme": e.theme || "light",
          ...t.editorDOMAttributes || {},
          class: [
            _.bnEditor,
            _.bnRoot,
            t.defaultStyles ? _.defaultStyles : "",
            ((s = t.editorDOMAttributes) == null ? void 0 : s.class) || ""
          ].join(" ")
        }
      }
    };
    t.parentElement && (r.element = t.parentElement), this._tiptapEditor = new Ut(r);
  }
  get domElement() {
    return this._tiptapEditor.view.dom;
  }
  isFocused() {
    return this._tiptapEditor.view.hasFocus();
  }
  focus() {
    this._tiptapEditor.view.focus();
  }
  /**
   * Gets a snapshot of all top-level (non-nested) blocks in the editor.
   * @returns A snapshot of all top-level (non-nested) blocks in the editor.
   */
  get topLevelBlocks() {
    const e = [];
    return this._tiptapEditor.state.doc.firstChild.descendants((t) => (e.push(M(t, this.schema, this.blockCache)), !1)), e;
  }
  /**
   * Gets a snapshot of an existing block from the editor.
   * @param blockIdentifier The identifier of an existing block that should be retrieved.
   * @returns The block that matches the identifier, or `undefined` if no matching block was found.
   */
  getBlock(e) {
    const t = typeof e == "string" ? e : e.id;
    let n;
    return this._tiptapEditor.state.doc.firstChild.descendants((r) => typeof n < "u" ? !1 : r.type.name !== "blockContainer" || r.attrs.id !== t ? !0 : (n = M(r, this.schema, this.blockCache), !1)), n;
  }
  /**
   * Traverses all blocks in the editor depth-first, and executes a callback for each.
   * @param callback The callback to execute for each block. Returning `false` stops the traversal.
   * @param reverse Whether the blocks should be traversed in reverse order.
   */
  forEachBlock(e, t = !1) {
    const n = this.topLevelBlocks.slice();
    t && n.reverse();
    function r(i) {
      for (const a of i) {
        if (!e(a))
          return !1;
        const s = t ? a.children.slice().reverse() : a.children;
        if (!r(s))
          return !1;
      }
      return !0;
    }
    r(n);
  }
  /**
   * Executes a callback whenever the editor's contents change.
   * @param callback The callback to execute.
   */
  onEditorContentChange(e) {
    this._tiptapEditor.on("update", e);
  }
  /**
   * Gets a snapshot of the current text cursor position.
   * @returns A snapshot of the current text cursor position.
   */
  getTextCursorPosition() {
    const { node: e, depth: t, startPos: n, endPos: r } = g(
      this._tiptapEditor.state.doc,
      this._tiptapEditor.state.selection.from
    ), i = this._tiptapEditor.state.doc.resolve(r).index(t - 1), a = this._tiptapEditor.state.doc.resolve(r + 1).node().childCount;
    let s;
    i > 0 && (s = this._tiptapEditor.state.doc.resolve(n - 2).node());
    let l;
    return i < a - 1 && (l = this._tiptapEditor.state.doc.resolve(r + 2).node()), {
      block: M(e, this.schema, this.blockCache),
      prevBlock: s === void 0 ? void 0 : M(s, this.schema, this.blockCache),
      nextBlock: l === void 0 ? void 0 : M(l, this.schema, this.blockCache)
    };
  }
  /**
   * Sets the text cursor position to the start or end of an existing block. Throws an error if the target block could
   * not be found.
   * @param targetBlock The identifier of an existing block that the text cursor should be moved to.
   * @param placement Whether the text cursor should be placed at the start or end of the block.
   */
  setTextCursorPosition(e, t = "start") {
    const n = typeof e == "string" ? e : e.id, { posBeforeNode: r } = J(n, this._tiptapEditor.state.doc), { startPos: i, contentNode: a } = g(
      this._tiptapEditor.state.doc,
      r + 2
    );
    t === "start" ? this._tiptapEditor.commands.setTextSelection(i + 1) : this._tiptapEditor.commands.setTextSelection(
      i + a.nodeSize - 1
    );
  }
  /**
   * Gets a snapshot of the current selection.
   */
  getSelection() {
    if (this._tiptapEditor.state.selection.from === this._tiptapEditor.state.selection.to)
      return;
    const e = [];
    return this._tiptapEditor.state.doc.descendants((t, n) => t.type.spec.group !== "blockContent" || n + t.nodeSize < this._tiptapEditor.state.selection.from || n > this._tiptapEditor.state.selection.to ? !0 : (e.push(
      M(
        this._tiptapEditor.state.doc.resolve(n).node(),
        this.schema,
        this.blockCache
      )
    ), !1)), { blocks: e };
  }
  /**
   * Checks if the editor is currently editable, or if it's locked.
   * @returns True if the editor is editable, false otherwise.
   */
  get isEditable() {
    return this._tiptapEditor.isEditable;
  }
  /**
   * Makes the editor editable or locks it, depending on the argument passed.
   * @param editable True to make the editor editable, or false to lock it.
   */
  set isEditable(e) {
    this._tiptapEditor.setEditable(e);
  }
  /**
   * Inserts new blocks into the editor. If a block's `id` is undefined, BlockNote generates one automatically. Throws an
   * error if the reference block could not be found.
   * @param blocksToInsert An array of partial blocks that should be inserted.
   * @param referenceBlock An identifier for an existing block, at which the new blocks should be inserted.
   * @param placement Whether the blocks should be inserted just before, just after, or nested inside the
   * `referenceBlock`. Inserts the blocks at the start of the existing block's children if "nested" is used.
   */
  insertBlocks(e, t, n = "before") {
    Tt(e, t, n, this._tiptapEditor);
  }
  /**
   * Updates an existing block in the editor. Since updatedBlock is a PartialBlock object, some fields might not be
   * defined. These undefined fields are kept as-is from the existing block. Throws an error if the block to update could
   * not be found.
   * @param blockToUpdate The block that should be updated.
   * @param update A partial block which defines how the existing block should be changed.
   */
  updateBlock(e, t) {
    Be(e, t, this._tiptapEditor);
  }
  /**
   * Removes existing blocks from the editor. Throws an error if any of the blocks could not be found.
   * @param blocksToRemove An array of identifiers for existing blocks that should be removed.
   */
  removeBlocks(e) {
    xt(e, this._tiptapEditor);
  }
  /**
   * Replaces existing blocks in the editor with new blocks. If the blocks that should be removed are not adjacent or
   * are at different nesting levels, `blocksToInsert` will be inserted at the position of the first block in
   * `blocksToRemove`. Throws an error if any of the blocks to remove could not be found.
   * @param blocksToRemove An array of blocks that should be replaced.
   * @param blocksToInsert An array of partial blocks to replace the old ones with.
   */
  replaceBlocks(e, t) {
    Me(e, t, this._tiptapEditor);
  }
  /**
   * Gets the active text styles at the text cursor position or at the end of the current selection if it's active.
   */
  getActiveStyles() {
    const e = {}, t = this._tiptapEditor.state.selection.$to.marks(), n = /* @__PURE__ */ new Set([
      "bold",
      "italic",
      "underline",
      "strike",
      "code"
    ]), r = /* @__PURE__ */ new Set(["textColor", "backgroundColor"]);
    for (const i of t)
      n.has(i.type.name) ? e[i.type.name] = !0 : r.has(i.type.name) && (e[i.type.name] = i.attrs.color);
    return e;
  }
  /**
   * Adds styles to the currently selected content.
   * @param styles The styles to add.
   */
  addStyles(e) {
    const t = /* @__PURE__ */ new Set([
      "bold",
      "italic",
      "underline",
      "strike",
      "code"
    ]), n = /* @__PURE__ */ new Set(["textColor", "backgroundColor"]);
    this._tiptapEditor.view.focus();
    for (const [r, i] of Object.entries(e))
      t.has(r) ? this._tiptapEditor.commands.setMark(r) : n.has(r) && this._tiptapEditor.commands.setMark(r, { color: i });
  }
  /**
   * Removes styles from the currently selected content.
   * @param styles The styles to remove.
   */
  removeStyles(e) {
    this._tiptapEditor.view.focus();
    for (const t of Object.keys(e))
      this._tiptapEditor.commands.unsetMark(t);
  }
  /**
   * Toggles styles on the currently selected content.
   * @param styles The styles to toggle.
   */
  toggleStyles(e) {
    const t = /* @__PURE__ */ new Set([
      "bold",
      "italic",
      "underline",
      "strike",
      "code"
    ]), n = /* @__PURE__ */ new Set(["textColor", "backgroundColor"]);
    this._tiptapEditor.view.focus();
    for (const [r, i] of Object.entries(e))
      t.has(r) ? this._tiptapEditor.commands.toggleMark(r) : n.has(r) && this._tiptapEditor.commands.toggleMark(r, { color: i });
  }
  /**
   * Gets the currently selected text.
   */
  getSelectedText() {
    return this._tiptapEditor.state.doc.textBetween(
      this._tiptapEditor.state.selection.from,
      this._tiptapEditor.state.selection.to
    );
  }
  /**
   * Gets the URL of the last link in the current selection, or `undefined` if there are no links in the selection.
   */
  getSelectedLinkUrl() {
    return this._tiptapEditor.getAttributes("link").href;
  }
  /**
   * Creates a new link to replace the selected content.
   * @param url The link URL.
   * @param text The text to display the link with.
   */
  createLink(e, t) {
    if (e === "")
      return;
    let { from: n, to: r } = this._tiptapEditor.state.selection;
    t || (t = this._tiptapEditor.state.doc.textBetween(n, r));
    const i = this._tiptapEditor.schema.mark("link", { href: e });
    this._tiptapEditor.view.dispatch(
      this._tiptapEditor.view.state.tr.insertText(t, n, r).addMark(n, n + t.length, i)
    );
  }
  /**
   * Checks if the block containing the text cursor can be nested.
   */
  canNestBlock() {
    const { startPos: e, depth: t } = g(
      this._tiptapEditor.state.doc,
      this._tiptapEditor.state.selection.from
    );
    return this._tiptapEditor.state.doc.resolve(e).index(t - 1) > 0;
  }
  /**
   * Nests the block containing the text cursor into the block above it.
   */
  nestBlock() {
    this._tiptapEditor.commands.sinkListItem("blockContainer");
  }
  /**
   * Checks if the block containing the text cursor is nested.
   */
  canUnnestBlock() {
    const { depth: e } = g(
      this._tiptapEditor.state.doc,
      this._tiptapEditor.state.selection.from
    );
    return e > 2;
  }
  /**
   * Lifts the block containing the text cursor out of its parent.
   */
  unnestBlock() {
    this._tiptapEditor.commands.liftListItem("blockContainer");
  }
  /**
   * Serializes blocks into an HTML string. To better conform to HTML standards, children of blocks which aren't list
   * items are un-nested in the output HTML.
   * @param blocks An array of blocks that should be serialized into HTML.
   * @returns The blocks, serialized as an HTML string.
   */
  async blocksToHTML(e) {
    return St(e, this._tiptapEditor.schema);
  }
  /**
   * Parses blocks from an HTML string. Tries to create `Block` objects out of any HTML block-level elements, and
   * `InlineNode` objects from any HTML inline elements, though not all element types are recognized. If BlockNote
   * doesn't recognize an HTML element's tag, it will parse it as a paragraph or plain text.
   * @param html The HTML string to parse blocks from.
   * @returns The blocks parsed from the HTML string.
   */
  async HTMLToBlocks(e) {
    return It(e, this.schema, this._tiptapEditor.schema);
  }
  /**
   * Serializes blocks into a Markdown string. The output is simplified as Markdown does not support all features of
   * BlockNote - children of blocks which aren't list items are un-nested and certain styles are removed.
   * @param blocks An array of blocks that should be serialized into Markdown.
   * @returns The blocks, serialized as a Markdown string.
   */
  async blocksToMarkdown(e) {
    return xe(e, this._tiptapEditor.schema);
  }
  /**
   * Creates a list of blocks from a Markdown string. Tries to create `Block` and `InlineNode` objects based on
   * Markdown syntax, though not all symbols are recognized. If BlockNote doesn't recognize a symbol, it will parse it
   * as text.
   * @param markdown The Markdown string to parse blocks from.
   * @returns The blocks parsed from the Markdown string.
   */
  async markdownToBlocks(e) {
    return Se(e, this.schema, this._tiptapEditor.schema);
  }
  /**
   * Updates the user info for the current user that's shown to other collaborators.
   */
  updateCollaborationUserInfo(e) {
    if (!this.options.collaboration)
      throw new Error(
        "Cannot update collaboration user info when collaboration is disabled."
      );
    this._tiptapEditor.commands.updateUser(e);
  }
}
export {
  S as BaseSlashMenuItem,
  Ko as BlockNoteEditor,
  $e as CustomBlockSerializerExtension,
  Vo as blockStyles,
  ot as camelToDataKebab,
  Yo as createBlockSpec,
  H as createTipTapBlock,
  ke as defaultBlockSchema,
  L as defaultProps,
  uo as defaultSlashMenuItems,
  go as getBlockNoteExtensions,
  de as parse,
  le as propsToAttributes,
  ce as render
};
//# sourceMappingURL=blocknote.js.map
