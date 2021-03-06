!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function (t) {
    "use strict";

    function e(t) {
        var e = {}, i = {}, n = t.match(/Firefox\/([\d.]+)/),
            r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), a = t.match(/Edge\/([\d.]+)/),
            o = /micromessenger/i.test(t);
        return n && (i.firefox = !0, i.version = n[1]), r && (i.ie = !0, i.version = r[1]), a && (i.edge = !0, i.version = a[1]), o && (i.weChat = !0), {
            browser: i,
            os: e,
            node: !1,
            canvasSupported: !!document.createElement("canvas").getContext,
            svgSupported: "undefined" != typeof SVGRect,
            touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge,
            pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 11),
            domSupported: "undefined" != typeof document
        }
    }

    function i(t, e) {
        "createCanvas" === t && (fg = null), cg[t] = e
    }

    function n(t) {
        if (null == t || "object" != typeof t) return t;
        var e = t, i = rg.call(t);
        if ("[object Array]" === i) {
            if (!B(t)) {
                e = [];
                for (var r = 0, a = t.length; a > r; r++) e[r] = n(t[r])
            }
        } else if (ng[i]) {
            if (!B(t)) {
                var o = t.constructor;
                if (t.constructor.from) e = o.from(t); else {
                    e = new o(t.length);
                    for (var r = 0, a = t.length; a > r; r++) e[r] = n(t[r])
                }
            }
        } else if (!ig[i] && !B(t) && !I(t)) {
            e = {};
            for (var s in t) t.hasOwnProperty(s) && (e[s] = n(t[s]))
        }
        return e
    }

    function r(t, e, i) {
        if (!S(e) || !S(t)) return i ? n(e) : t;
        for (var a in e) if (e.hasOwnProperty(a)) {
            var o = t[a], s = e[a];
            !S(s) || !S(o) || x(s) || x(o) || I(s) || I(o) || M(s) || M(o) || B(s) || B(o) ? !i && a in t || (t[a] = n(e[a], !0)) : r(o, s, i)
        }
        return t
    }

    function a(t, e) {
        for (var i = t[0], n = 1, a = t.length; a > n; n++) i = r(i, t[n], e);
        return i
    }

    function o(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
    }

    function s(t, e, i) {
        for (var n in e) e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
        return t
    }

    function l() {
        return fg || (fg = dg().getContext("2d")), fg
    }

    function u(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i
        }
        return -1
    }

    function h(t, e) {
        function i() {
        }

        var n = t.prototype;
        i.prototype = e.prototype, t.prototype = new i;
        for (var r in n) n.hasOwnProperty(r) && (t.prototype[r] = n[r]);
        t.prototype.constructor = t, t.superClass = e
    }

    function c(t, e, i) {
        t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, i)
    }

    function d(t) {
        return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0
    }

    function f(t, e, i) {
        if (t && e) if (t.forEach && t.forEach === og) t.forEach(e, i); else if (t.length === +t.length) for (var n = 0, r = t.length; r > n; n++) e.call(i, t[n], n, t); else for (var a in t) t.hasOwnProperty(a) && e.call(i, t[a], a, t)
    }

    function p(t, e, i) {
        if (t && e) {
            if (t.map && t.map === ug) return t.map(e, i);
            for (var n = [], r = 0, a = t.length; a > r; r++) n.push(e.call(i, t[r], r, t));
            return n
        }
    }

    function g(t, e, i, n) {
        if (t && e) {
            if (t.reduce && t.reduce === hg) return t.reduce(e, i, n);
            for (var r = 0, a = t.length; a > r; r++) i = e.call(n, i, t[r], r, t);
            return i
        }
    }

    function v(t, e, i) {
        if (t && e) {
            if (t.filter && t.filter === sg) return t.filter(e, i);
            for (var n = [], r = 0, a = t.length; a > r; r++) e.call(i, t[r], r, t) && n.push(t[r]);
            return n
        }
    }

    function m(t, e, i) {
        if (t && e) for (var n = 0, r = t.length; r > n; n++) if (e.call(i, t[n], n, t)) return t[n]
    }

    function y(t, e) {
        var i = lg.call(arguments, 2);
        return function () {
            return t.apply(e, i.concat(lg.call(arguments)))
        }
    }

    function _(t) {
        var e = lg.call(arguments, 1);
        return function () {
            return t.apply(this, e.concat(lg.call(arguments)))
        }
    }

    function x(t) {
        return "[object Array]" === rg.call(t)
    }

    function w(t) {
        return "function" == typeof t
    }

    function b(t) {
        return "[object String]" === rg.call(t)
    }

    function S(t) {
        var e = typeof t;
        return "function" === e || !!t && "object" === e
    }

    function M(t) {
        return !!ig[rg.call(t)]
    }

    function T(t) {
        return !!ng[rg.call(t)]
    }

    function I(t) {
        return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
    }

    function C(t) {
        return t !== t
    }

    function D() {
        for (var t = 0, e = arguments.length; e > t; t++) if (null != arguments[t]) return arguments[t]
    }

    function A(t, e) {
        return null != t ? t : e
    }

    function k(t, e, i) {
        return null != t ? t : null != e ? e : i
    }

    function L() {
        return Function.call.apply(lg, arguments)
    }

    function P(t) {
        if ("number" == typeof t) return [t, t, t, t];
        var e = t.length;
        return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
    }

    function O(t, e) {
        if (!t) throw new Error(e)
    }

    function z(t) {
        return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }

    function R(t) {
        t[pg] = !0
    }

    function B(t) {
        return t[pg]
    }

    function E(t) {
        function e(t, e) {
            i ? n.set(t, e) : n.set(e, t)
        }

        var i = x(t);
        this.data = {};
        var n = this;
        t instanceof E ? t.each(e) : t && f(t, e)
    }

    function N(t) {
        return new E(t)
    }

    function F(t, e) {
        for (var i = new t.constructor(t.length + e.length), n = 0; n < t.length; n++) i[n] = t[n];
        var r = t.length;
        for (n = 0; n < e.length; n++) i[n + r] = e[n];
        return i
    }

    function V() {
    }

    function H(t, e) {
        var i = new vg(2);
        return null == t && (t = 0), null == e && (e = 0), i[0] = t, i[1] = e, i
    }

    function G(t, e) {
        return t[0] = e[0], t[1] = e[1], t
    }

    function W(t) {
        var e = new vg(2);
        return e[0] = t[0], e[1] = t[1], e
    }

    function X(t, e, i) {
        return t[0] = e, t[1] = i, t
    }

    function Y(t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
    }

    function U(t, e, i, n) {
        return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t
    }

    function Z(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
    }

    function q(t) {
        return Math.sqrt(j(t))
    }

    function j(t) {
        return t[0] * t[0] + t[1] * t[1]
    }

    function K(t, e, i) {
        return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
    }

    function $(t, e, i) {
        return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
    }

    function Q(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }

    function J(t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t
    }

    function te(t, e) {
        var i = q(e);
        return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t
    }

    function ee(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }

    function ie(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    }

    function ne(t, e) {
        return t[0] = -e[0], t[1] = -e[1], t
    }

    function re(t, e, i, n) {
        return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t
    }

    function ae(t, e, i) {
        var n = e[0], r = e[1];
        return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t
    }

    function oe(t, e, i) {
        return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
    }

    function se(t, e, i) {
        return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
    }

    function le() {
        this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this)
    }

    function ue(t, e) {
        return {target: t, topTarget: e && e.topTarget}
    }

    function he(t, e) {
        var i = t._$eventProcessor;
        return null != e && i && i.normalizeQuery && (e = i.normalizeQuery(e)), e
    }

    function ce(t, e, i, n, r, a) {
        var o = t._$handlers;
        if ("function" == typeof i && (r = n, n = i, i = null), !n || !e) return t;
        i = he(t, i), o[e] || (o[e] = []);
        for (var s = 0; s < o[e].length; s++) if (o[e][s].h === n) return t;
        var l = {h: n, one: a, query: i, ctx: r || t, callAtLast: n.zrEventfulCallAtLast}, u = o[e].length - 1,
            h = o[e][u];
        return h && h.callAtLast ? o[e].splice(u, 0, l) : o[e].push(l), t
    }

    function de(t, e, i, n, r, a) {
        var o = n + "-" + r, s = t.length;
        if (a.hasOwnProperty(o)) return a[o];
        if (1 === e) {
            var l = Math.round(Math.log((1 << s) - 1 & ~r) / Mg);
            return t[i][l]
        }
        for (var u = n | 1 << i, h = i + 1; n & 1 << h;) h++;
        for (var c = 0, d = 0, f = 0; s > d; d++) {
            var p = 1 << d;
            p & r || (c += (f % 2 ? -1 : 1) * t[i][d] * de(t, e - 1, h, u, r | p, a), f++)
        }
        return a[o] = c, c
    }

    function fe(t, e) {
        var i = [[t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]], [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]], [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]], [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]], [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]], [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]], [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]], [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]],
            n = {}, r = de(i, 8, 0, 0, 0, n);
        if (0 !== r) {
            for (var a = [], o = 0; 8 > o; o++) for (var s = 0; 8 > s; s++) null == a[s] && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * de(i, 7, 0 === o ? 1 : 0, 1 << o, 1 << s, n) / r * e[o];
            return function (t, e, i) {
                var n = e * a[6] + i * a[7] + 1;
                t[0] = (e * a[0] + i * a[1] + a[2]) / n, t[1] = (e * a[3] + i * a[4] + a[5]) / n
            }
        }
    }

    function pe(t, e, i, n) {
        return i = i || {}, n || !eg.canvasSupported ? ge(t, e, i) : eg.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : ge(t, e, i), i
    }

    function ge(t, e, i) {
        if (t.getBoundingClientRect && eg.domSupported) {
            var n = e.clientX, r = e.clientY;
            if ("CANVAS" === t.nodeName.toUpperCase()) {
                var a = t.getBoundingClientRect();
                return i.zrX = n - a.left, void (i.zrY = r - a.top)
            }
            var o = t[Cg] || (t[Cg] = {}), s = me(ve(t, o), o);
            if (s) return s(Dg, n, r), i.zrX = Dg[0], void (i.zrY = Dg[1])
        }
        i.zrX = i.zrY = 0
    }

    function ve(t, e) {
        var i = e.markers;
        if (i) return i;
        i = e.markers = [];
        for (var n = ["left", "right"], r = ["top", "bottom"], a = 0; 4 > a; a++) {
            var o = document.createElement("div"), s = o.style, l = a % 2, u = (a >> 1) % 2;
            s.cssText = ["position:absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "width:0", "height:0", n[l] + ":0", r[u] + ":0", n[1 - l] + ":auto", r[1 - u] + ":auto", ""].join("!important;"), t.appendChild(o), i.push(o)
        }
        return i
    }

    function me(t, e) {
        for (var i = e.transformer, n = e.srcCoords, r = !0, a = [], o = [], s = 0; 4 > s; s++) {
            var l = t[s].getBoundingClientRect(), u = 2 * s, h = l.left, c = l.top;
            a.push(h, c), r &= n && h === n[u] && c === n[u + 1], o.push(t[s].offsetLeft, t[s].offsetTop)
        }
        return r ? i : (e.srcCoords = a, e.transformer = fe(a, o))
    }

    function ye(t) {
        return t || window.event
    }

    function _e(t, e, i) {
        if (e = ye(e), null != e.zrX) return e;
        var n = e.type, r = n && n.indexOf("touch") >= 0;
        if (r) {
            var a = "touchend" !== n ? e.targetTouches[0] : e.changedTouches[0];
            a && pe(t, a, e, i)
        } else pe(t, e, e, i), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        var o = e.button;
        return null == e.which && void 0 !== o && Ig.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
    }

    function xe(t, e, i, n) {
        Tg ? t.addEventListener(e, i, n) : t.attachEvent("on" + e, i)
    }

    function we(t, e, i, n) {
        Tg ? t.removeEventListener(e, i, n) : t.detachEvent("on" + e, i)
    }

    function be(t) {
        return 2 === t.which || 3 === t.which
    }

    function Se(t) {
        var e = t[1][0] - t[0][0], i = t[1][1] - t[0][1];
        return Math.sqrt(e * e + i * i)
    }

    function Me(t) {
        return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
    }

    function Te(t, e, i) {
        return {
            type: t,
            event: i,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: i.zrX,
            offsetY: i.zrY,
            gestureEvent: i.gestureEvent,
            pinchX: i.pinchX,
            pinchY: i.pinchY,
            pinchScale: i.pinchScale,
            wheelDelta: i.zrDelta,
            zrByTouch: i.zrByTouch,
            which: i.which,
            stop: Ie
        }
    }

    function Ie() {
        Ag(this.event)
    }

    function Ce() {
    }

    function De(t, e, i) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
            for (var n, r = t; r;) {
                if (r.clipPath && !r.clipPath.contain(e, i)) return !1;
                r.silent && (n = !0), r = r.parent
            }
            return n ? Pg : !0
        }
        return !1
    }

    function Ae(t, e, i) {
        var n = t.painter;
        return 0 > e || e > n.getWidth() || 0 > i || i > n.getHeight()
    }

    function ke() {
        var t = new Rg(6);
        return Le(t), t
    }

    function Le(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
    }

    function Pe(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
    }

    function Oe(t, e, i) {
        var n = e[0] * i[0] + e[2] * i[1], r = e[1] * i[0] + e[3] * i[1], a = e[0] * i[2] + e[2] * i[3],
            o = e[1] * i[2] + e[3] * i[3], s = e[0] * i[4] + e[2] * i[5] + e[4], l = e[1] * i[4] + e[3] * i[5] + e[5];
        return t[0] = n, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
    }

    function ze(t, e, i) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t
    }

    function Re(t, e, i) {
        var n = e[0], r = e[2], a = e[4], o = e[1], s = e[3], l = e[5], u = Math.sin(i), h = Math.cos(i);
        return t[0] = n * h + o * u, t[1] = -n * u + o * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * a + u * l, t[5] = h * l - u * a, t
    }

    function Be(t, e, i) {
        var n = i[0], r = i[1];
        return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * r, t
    }

    function Ee(t, e) {
        var i = e[0], n = e[2], r = e[4], a = e[1], o = e[3], s = e[5], l = i * o - a * n;
        return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - o * r) * l, t[5] = (a * r - i * s) * l, t) : null
    }

    function Ne(t) {
        var e = ke();
        return Pe(e, t), e
    }

    function Fe(t) {
        return t > Ng || -Ng > t
    }

    function Ve(t) {
        this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
    }

    function He(t) {
        return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
    }

    function Ge(t) {
        return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
    }

    function We(t) {
        return 0 > t ? 0 : t > 1 ? 1 : t
    }

    function Xe(t) {
        return He(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
    }

    function Ye(t) {
        return We(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
    }

    function Ue(t, e, i) {
        return 0 > i ? i += 1 : i > 1 && (i -= 1), 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
    }

    function Ze(t, e, i) {
        return t + (e - t) * i
    }

    function qe(t, e, i, n, r) {
        return t[0] = e, t[1] = i, t[2] = n, t[3] = r, t
    }

    function je(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function Ke(t, e) {
        Qg && je(Qg, e), Qg = $g.put(t, Qg || e.slice())
    }

    function $e(t, e) {
        if (t) {
            e = e || [];
            var i = $g.get(t);
            if (i) return je(e, i);
            t += "";
            var n = t.replace(/ /g, "").toLowerCase();
            if (n in Kg) return je(e, Kg[n]), Ke(t, e), e;
            if ("#" !== n.charAt(0)) {
                var r = n.indexOf("("), a = n.indexOf(")");
                if (-1 !== r && a + 1 === n.length) {
                    var o = n.substr(0, r), s = n.substr(r + 1, a - (r + 1)).split(","), l = 1;
                    switch (o) {
                        case"rgba":
                            if (4 !== s.length) return void qe(e, 0, 0, 0, 1);
                            l = Ye(s.pop());
                        case"rgb":
                            return 3 !== s.length ? void qe(e, 0, 0, 0, 1) : (qe(e, Xe(s[0]), Xe(s[1]), Xe(s[2]), l), Ke(t, e), e);
                        case"hsla":
                            return 4 !== s.length ? void qe(e, 0, 0, 0, 1) : (s[3] = Ye(s[3]), Qe(s, e), Ke(t, e), e);
                        case"hsl":
                            return 3 !== s.length ? void qe(e, 0, 0, 0, 1) : (Qe(s, e), Ke(t, e), e);
                        default:
                            return
                    }
                }
                qe(e, 0, 0, 0, 1)
            } else {
                if (4 === n.length) {
                    var u = parseInt(n.substr(1), 16);
                    return u >= 0 && 4095 >= u ? (qe(e, (3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1), Ke(t, e), e) : void qe(e, 0, 0, 0, 1)
                }
                if (7 === n.length) {
                    var u = parseInt(n.substr(1), 16);
                    return u >= 0 && 16777215 >= u ? (qe(e, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1), Ke(t, e), e) : void qe(e, 0, 0, 0, 1)
                }
            }
        }
    }

    function Qe(t, e) {
        var i = (parseFloat(t[0]) % 360 + 360) % 360 / 360, n = Ye(t[1]), r = Ye(t[2]),
            a = .5 >= r ? r * (n + 1) : r + n - r * n, o = 2 * r - a;
        return e = e || [], qe(e, He(255 * Ue(o, a, i + 1 / 3)), He(255 * Ue(o, a, i)), He(255 * Ue(o, a, i - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
    }

    function Je(t) {
        if (t) {
            var e, i, n = t[0] / 255, r = t[1] / 255, a = t[2] / 255, o = Math.min(n, r, a), s = Math.max(n, r, a),
                l = s - o, u = (s + o) / 2;
            if (0 === l) e = 0, i = 0; else {
                i = .5 > u ? l / (s + o) : l / (2 - s - o);
                var h = ((s - n) / 6 + l / 2) / l, c = ((s - r) / 6 + l / 2) / l, d = ((s - a) / 6 + l / 2) / l;
                n === s ? e = d - c : r === s ? e = 1 / 3 + h - d : a === s && (e = 2 / 3 + c - h), 0 > e && (e += 1), e > 1 && (e -= 1)
            }
            var f = [360 * e, i, u];
            return null != t[3] && f.push(t[3]), f
        }
    }

    function ti(t, e) {
        var i = $e(t);
        if (i) {
            for (var n = 0; 3 > n; n++) i[n] = 0 > e ? i[n] * (1 - e) | 0 : (255 - i[n]) * e + i[n] | 0, i[n] > 255 ? i[n] = 255 : t[n] < 0 && (i[n] = 0);
            return oi(i, 4 === i.length ? "rgba" : "rgb")
        }
    }

    function ei(t) {
        var e = $e(t);
        return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0
    }

    function ii(t, e, i) {
        if (e && e.length && t >= 0 && 1 >= t) {
            i = i || [];
            var n = t * (e.length - 1), r = Math.floor(n), a = Math.ceil(n), o = e[r], s = e[a], l = n - r;
            return i[0] = He(Ze(o[0], s[0], l)), i[1] = He(Ze(o[1], s[1], l)), i[2] = He(Ze(o[2], s[2], l)), i[3] = We(Ze(o[3], s[3], l)), i
        }
    }

    function ni(t, e, i) {
        if (e && e.length && t >= 0 && 1 >= t) {
            var n = t * (e.length - 1), r = Math.floor(n), a = Math.ceil(n), o = $e(e[r]), s = $e(e[a]), l = n - r,
                u = oi([He(Ze(o[0], s[0], l)), He(Ze(o[1], s[1], l)), He(Ze(o[2], s[2], l)), We(Ze(o[3], s[3], l))], "rgba");
            return i ? {color: u, leftIndex: r, rightIndex: a, value: n} : u
        }
    }

    function ri(t, e, i, n) {
        return t = $e(t), t ? (t = Je(t), null != e && (t[0] = Ge(e)), null != i && (t[1] = Ye(i)), null != n && (t[2] = Ye(n)), oi(Qe(t), "rgba")) : void 0
    }

    function ai(t, e) {
        return t = $e(t), t && null != e ? (t[3] = We(e), oi(t, "rgba")) : void 0
    }

    function oi(t, e) {
        if (t && t.length) {
            var i = t[0] + "," + t[1] + "," + t[2];
            return ("rgba" === e || "hsva" === e || "hsla" === e) && (i += "," + t[3]), e + "(" + i + ")"
        }
    }

    function si(t, e) {
        return t[e]
    }

    function li(t, e, i) {
        t[e] = i
    }

    function ui(t, e, i) {
        return (e - t) * i + t
    }

    function hi(t, e, i) {
        return i > .5 ? e : t
    }

    function ci(t, e, i, n, r) {
        var a = t.length;
        if (1 === r) for (var o = 0; a > o; o++) n[o] = ui(t[o], e[o], i); else for (var s = a && t[0].length, o = 0; a > o; o++) for (var l = 0; s > l; l++) n[o][l] = ui(t[o][l], e[o][l], i)
    }

    function di(t, e, i) {
        var n = t.length, r = e.length;
        if (n !== r) {
            var a = n > r;
            if (a) t.length = r; else for (var o = n; r > o; o++) t.push(1 === i ? e[o] : iv.call(e[o]))
        }
        for (var s = t[0] && t[0].length, o = 0; o < t.length; o++) if (1 === i) isNaN(t[o]) && (t[o] = e[o]); else for (var l = 0; s > l; l++) isNaN(t[o][l]) && (t[o][l] = e[o][l])
    }

    function fi(t, e, i) {
        if (t === e) return !0;
        var n = t.length;
        if (n !== e.length) return !1;
        if (1 === i) {
            for (var r = 0; n > r; r++) if (t[r] !== e[r]) return !1
        } else for (var a = t[0].length, r = 0; n > r; r++) for (var o = 0; a > o; o++) if (t[r][o] !== e[r][o]) return !1;
        return !0
    }

    function pi(t, e, i, n, r, a, o, s, l) {
        var u = t.length;
        if (1 === l) for (var h = 0; u > h; h++) s[h] = gi(t[h], e[h], i[h], n[h], r, a, o); else for (var c = t[0].length, h = 0; u > h; h++) for (var d = 0; c > d; d++) s[h][d] = gi(t[h][d], e[h][d], i[h][d], n[h][d], r, a, o)
    }

    function gi(t, e, i, n, r, a, o) {
        var s = .5 * (i - t), l = .5 * (n - e);
        return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e
    }

    function vi(t) {
        if (d(t)) {
            var e = t.length;
            if (d(t[0])) {
                for (var i = [], n = 0; e > n; n++) i.push(iv.call(t[n]));
                return i
            }
            return iv.call(t)
        }
        return t
    }

    function mi(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
    }

    function yi(t) {
        var e = t[t.length - 1].value;
        return d(e && e[0]) ? 2 : 1
    }

    function _i(t, e, i, n, r, a) {
        var o = t._getter, s = t._setter, l = "spline" === e, u = n.length;
        if (u) {
            var h, c = n[0].value, f = d(c), p = !1, g = !1, v = f ? yi(n) : 0;
            n.sort(function (t, e) {
                return t.time - e.time
            }), h = n[u - 1].time;
            for (var m = [], y = [], _ = n[0].value, x = !0, w = 0; u > w; w++) {
                m.push(n[w].time / h);
                var b = n[w].value;
                if (f && fi(b, _, v) || !f && b === _ || (x = !1), _ = b, "string" == typeof b) {
                    var S = $e(b);
                    S ? (b = S, p = !0) : g = !0
                }
                y.push(b)
            }
            if (a || !x) {
                for (var M = y[u - 1], w = 0; u - 1 > w; w++) f ? di(y[w], M, v) : !isNaN(y[w]) || isNaN(M) || g || p || (y[w] = M);
                f && di(o(t._target, r), M, v);
                var T, I, C, D, A, k, L = 0, P = 0;
                if (p) var O = [0, 0, 0, 0];
                var z = function (t, e) {
                    var i;
                    if (0 > e) i = 0; else if (P > e) {
                        for (T = Math.min(L + 1, u - 1), i = T; i >= 0 && !(m[i] <= e); i--) ;
                        i = Math.min(i, u - 2)
                    } else {
                        for (i = L; u > i && !(m[i] > e); i++) ;
                        i = Math.min(i - 1, u - 2)
                    }
                    L = i, P = e;
                    var n = m[i + 1] - m[i];
                    if (0 !== n) if (I = (e - m[i]) / n, l) if (D = y[i], C = y[0 === i ? i : i - 1], A = y[i > u - 2 ? u - 1 : i + 1], k = y[i > u - 3 ? u - 1 : i + 2], f) pi(C, D, A, k, I, I * I, I * I * I, o(t, r), v); else {
                        var a;
                        if (p) a = pi(C, D, A, k, I, I * I, I * I * I, O, 1), a = mi(O); else {
                            if (g) return hi(D, A, I);
                            a = gi(C, D, A, k, I, I * I, I * I * I)
                        }
                        s(t, r, a)
                    } else if (f) ci(y[i], y[i + 1], I, o(t, r), v); else {
                        var a;
                        if (p) ci(y[i], y[i + 1], I, O, 1), a = mi(O); else {
                            if (g) return hi(y[i], y[i + 1], I);
                            a = ui(y[i], y[i + 1], I)
                        }
                        s(t, r, a)
                    }
                }, R = new Ve({target: t._target, life: h, loop: t._loop, delay: t._delay, onframe: z, ondestroy: i});
                return e && "spline" !== e && (R.easing = e), R
            }
        }
    }

    function xi(t, e, i, n, r, a, o, s) {
        function l() {
            h--, h || a && a()
        }

        b(n) ? (a = r, r = n, n = 0) : w(r) ? (a = r, r = "linear", n = 0) : w(n) ? (a = n, n = 0) : w(i) ? (a = i, i = 500) : i || (i = 500), t.stopAnimation(), wi(t, "", t, e, i, n, s);
        var u = t.animators.slice(), h = u.length;
        h || a && a();
        for (var c = 0; c < u.length; c++) u[c].done(l).start(r, o)
    }

    function wi(t, e, i, n, r, a, o) {
        var s = {}, l = 0;
        for (var u in n) n.hasOwnProperty(u) && (null != i[u] ? S(n[u]) && !d(n[u]) ? wi(t, e ? e + "." + u : u, i[u], n[u], r, a, o) : (o ? (s[u] = i[u], bi(t, e, u, n[u])) : s[u] = n[u], l++) : null == n[u] || o || bi(t, e, u, n[u]));
        l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(a || 0)
    }

    function bi(t, e, i, n) {
        if (e) {
            var r = {};
            r[e] = {}, r[e][i] = n, t.attr(r)
        } else t.attr(i, n)
    }

    function Si(t, e, i, n) {
        0 > i && (t += i, i = -i), 0 > n && (e += n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n
    }

    function Mi(t) {
        for (var e = 0; t >= gv;) e |= 1 & t, t >>= 1;
        return t + e
    }

    function Ti(t, e, i, n) {
        var r = e + 1;
        if (r === i) return 1;
        if (n(t[r++], t[e]) < 0) {
            for (; i > r && n(t[r], t[r - 1]) < 0;) r++;
            Ii(t, e, r)
        } else for (; i > r && n(t[r], t[r - 1]) >= 0;) r++;
        return r - e
    }

    function Ii(t, e, i) {
        for (i--; i > e;) {
            var n = t[e];
            t[e++] = t[i], t[i--] = n
        }
    }

    function Ci(t, e, i, n, r) {
        for (n === e && n++; i > n; n++) {
            for (var a, o = t[n], s = e, l = n; l > s;) a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
            var u = n - s;
            switch (u) {
                case 3:
                    t[s + 3] = t[s + 2];
                case 2:
                    t[s + 2] = t[s + 1];
                case 1:
                    t[s + 1] = t[s];
                    break;
                default:
                    for (; u > 0;) t[s + u] = t[s + u - 1], u--
            }
            t[s] = o
        }
    }

    function Di(t, e, i, n, r, a) {
        var o = 0, s = 0, l = 1;
        if (a(t, e[i + r]) > 0) {
            for (s = n - r; s > l && a(t, e[i + r + l]) > 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s), o += r, l += r
        } else {
            for (s = r + 1; s > l && a(t, e[i + r - l]) <= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s);
            var u = o;
            o = r - l, l = r - u
        }
        for (o++; l > o;) {
            var h = o + (l - o >>> 1);
            a(t, e[i + h]) > 0 ? o = h + 1 : l = h
        }
        return l
    }

    function Ai(t, e, i, n, r, a) {
        var o = 0, s = 0, l = 1;
        if (a(t, e[i + r]) < 0) {
            for (s = r + 1; s > l && a(t, e[i + r - l]) < 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s);
            var u = o;
            o = r - l, l = r - u
        } else {
            for (s = n - r; s > l && a(t, e[i + r + l]) >= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s), o += r, l += r
        }
        for (o++; l > o;) {
            var h = o + (l - o >>> 1);
            a(t, e[i + h]) < 0 ? l = h : o = h + 1
        }
        return l
    }

    function ki(t, e) {
        function i(t, e) {
            l[c] = t, u[c] = e, c += 1
        }

        function n() {
            for (; c > 1;) {
                var t = c - 2;
                if (t >= 1 && u[t - 1] <= u[t] + u[t + 1] || t >= 2 && u[t - 2] <= u[t] + u[t - 1]) u[t - 1] < u[t + 1] && t--; else if (u[t] > u[t + 1]) break;
                a(t)
            }
        }

        function r() {
            for (; c > 1;) {
                var t = c - 2;
                t > 0 && u[t - 1] < u[t + 1] && t--, a(t)
            }
        }

        function a(i) {
            var n = l[i], r = u[i], a = l[i + 1], h = u[i + 1];
            u[i] = r + h, i === c - 3 && (l[i + 1] = l[i + 2], u[i + 1] = u[i + 2]), c--;
            var d = Ai(t[a], t, n, r, 0, e);
            n += d, r -= d, 0 !== r && (h = Di(t[n + r - 1], t, a, h, h - 1, e), 0 !== h && (h >= r ? o(n, r, a, h) : s(n, r, a, h)))
        }

        function o(i, n, r, a) {
            var o = 0;
            for (o = 0; n > o; o++) d[o] = t[i + o];
            var s = 0, l = r, u = i;
            if (t[u++] = t[l++], 0 !== --a) {
                if (1 === n) {
                    for (o = 0; a > o; o++) t[u + o] = t[l + o];
                    return void (t[u + a] = d[s])
                }
                for (var c, f, p, g = h; ;) {
                    c = 0, f = 0, p = !1;
                    do if (e(t[l], d[s]) < 0) {
                        if (t[u++] = t[l++], f++, c = 0, 0 === --a) {
                            p = !0;
                            break
                        }
                    } else if (t[u++] = d[s++], c++, f = 0, 1 === --n) {
                        p = !0;
                        break
                    } while (g > (c | f));
                    if (p) break;
                    do {
                        if (c = Ai(t[l], d, s, n, 0, e), 0 !== c) {
                            for (o = 0; c > o; o++) t[u + o] = d[s + o];
                            if (u += c, s += c, n -= c, 1 >= n) {
                                p = !0;
                                break
                            }
                        }
                        if (t[u++] = t[l++], 0 === --a) {
                            p = !0;
                            break
                        }
                        if (f = Di(d[s], t, l, a, 0, e), 0 !== f) {
                            for (o = 0; f > o; o++) t[u + o] = t[l + o];
                            if (u += f, l += f, a -= f, 0 === a) {
                                p = !0;
                                break
                            }
                        }
                        if (t[u++] = d[s++], 1 === --n) {
                            p = !0;
                            break
                        }
                        g--
                    } while (c >= vv || f >= vv);
                    if (p) break;
                    0 > g && (g = 0), g += 2
                }
                if (h = g, 1 > h && (h = 1), 1 === n) {
                    for (o = 0; a > o; o++) t[u + o] = t[l + o];
                    t[u + a] = d[s]
                } else {
                    if (0 === n) throw new Error;
                    for (o = 0; n > o; o++) t[u + o] = d[s + o]
                }
            } else for (o = 0; n > o; o++) t[u + o] = d[s + o]
        }

        function s(i, n, r, a) {
            var o = 0;
            for (o = 0; a > o; o++) d[o] = t[r + o];
            var s = i + n - 1, l = a - 1, u = r + a - 1, c = 0, f = 0;
            if (t[u--] = t[s--], 0 !== --n) {
                if (1 === a) {
                    for (u -= n, s -= n, f = u + 1, c = s + 1, o = n - 1; o >= 0; o--) t[f + o] = t[c + o];
                    return void (t[u] = d[l])
                }
                for (var p = h; ;) {
                    var g = 0, v = 0, m = !1;
                    do if (e(d[l], t[s]) < 0) {
                        if (t[u--] = t[s--], g++, v = 0, 0 === --n) {
                            m = !0;
                            break
                        }
                    } else if (t[u--] = d[l--], v++, g = 0, 1 === --a) {
                        m = !0;
                        break
                    } while (p > (g | v));
                    if (m) break;
                    do {
                        if (g = n - Ai(d[l], t, i, n, n - 1, e), 0 !== g) {
                            for (u -= g, s -= g, n -= g, f = u + 1, c = s + 1, o = g - 1; o >= 0; o--) t[f + o] = t[c + o];
                            if (0 === n) {
                                m = !0;
                                break
                            }
                        }
                        if (t[u--] = d[l--], 1 === --a) {
                            m = !0;
                            break
                        }
                        if (v = a - Di(t[s], d, 0, a, a - 1, e), 0 !== v) {
                            for (u -= v, l -= v, a -= v, f = u + 1, c = l + 1, o = 0; v > o; o++) t[f + o] = d[c + o];
                            if (1 >= a) {
                                m = !0;
                                break
                            }
                        }
                        if (t[u--] = t[s--], 0 === --n) {
                            m = !0;
                            break
                        }
                        p--
                    } while (g >= vv || v >= vv);
                    if (m) break;
                    0 > p && (p = 0), p += 2
                }
                if (h = p, 1 > h && (h = 1), 1 === a) {
                    for (u -= n, s -= n, f = u + 1, c = s + 1, o = n - 1; o >= 0; o--) t[f + o] = t[c + o];
                    t[u] = d[l]
                } else {
                    if (0 === a) throw new Error;
                    for (c = u - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
                }
            } else for (c = u - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
        }

        var l, u, h = vv, c = 0, d = [];
        l = [], u = [], this.mergeRuns = n, this.forceMergeRuns = r, this.pushRun = i
    }

    function Li(t, e, i, n) {
        i || (i = 0), n || (n = t.length);
        var r = n - i;
        if (!(2 > r)) {
            var a = 0;
            if (gv > r) return a = Ti(t, i, n, e), void Ci(t, i, n, i + a, e);
            var o = new ki(t, e), s = Mi(r);
            do {
                if (a = Ti(t, i, n, e), s > a) {
                    var l = r;
                    l > s && (l = s), Ci(t, i, i + l, i + a, e), a = l
                }
                o.pushRun(i, a), o.mergeRuns(), r -= a, i += a
            } while (0 !== r);
            o.forceMergeRuns()
        }
    }

    function Pi(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
    }

    function Oi(t, e, i) {
        var n = null == e.x ? 0 : e.x, r = null == e.x2 ? 1 : e.x2, a = null == e.y ? 0 : e.y,
            o = null == e.y2 ? 0 : e.y2;
        e.global || (n = n * i.width + i.x, r = r * i.width + i.x, a = a * i.height + i.y, o = o * i.height + i.y), n = isNaN(n) ? 0 : n, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o;
        var s = t.createLinearGradient(n, a, r, o);
        return s
    }

    function zi(t, e, i) {
        var n = i.width, r = i.height, a = Math.min(n, r), o = null == e.x ? .5 : e.x, s = null == e.y ? .5 : e.y,
            l = null == e.r ? .5 : e.r;
        e.global || (o = o * n + i.x, s = s * r + i.y, l *= a);
        var u = t.createRadialGradient(o, s, 0, o, s, l);
        return u
    }

    function Ri() {
        return !1
    }

    function Bi(t, e, i) {
        var n = dg(), r = e.getWidth(), a = e.getHeight(), o = n.style;
        return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", n.setAttribute("data-zr-dom-id", t)), n.width = r * i, n.height = a * i, n
    }

    function Ei(t) {
        if ("string" == typeof t) {
            var e = kv.get(t);
            return e && e.image
        }
        return t
    }

    function Ni(t, e, i, n, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !i) return e;
                var a = kv.get(t), o = {hostEl: i, cb: n, cbPayload: r};
                return a ? (e = a.image, !Vi(e) && a.pending.push(o)) : (e = new Image, e.onload = e.onerror = Fi, kv.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [o]
                }), e.src = e.__zrImageSrc = t), e
            }
            return t
        }
        return e
    }

    function Fi() {
        var t = this.__cachedImgObj;
        this.onload = this.onerror = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var i = t.pending[e], n = i.cb;
            n && n(this, i.cbPayload), i.hostEl.dirty()
        }
        t.pending.length = 0
    }

    function Vi(t) {
        return t && t.width && t.height
    }

    function Hi(t, e) {
        e = e || Rv;
        var i = t + ":" + e;
        if (Lv[i]) return Lv[i];
        for (var n = (t + "").split("\n"), r = 0, a = 0, o = n.length; o > a; a++) r = Math.max(Ji(n[a], e).width, r);
        return Pv > Ov && (Pv = 0, Lv = {}), Pv++, Lv[i] = r, r
    }

    function Gi(t, e, i, n, r, a, o, s) {
        return o ? Xi(t, e, i, n, r, a, o, s) : Wi(t, e, i, n, r, a, s)
    }

    function Wi(t, e, i, n, r, a, o) {
        var s = tn(t, e, r, a, o), l = Hi(t, e);
        r && (l += r[1] + r[3]);
        var u = s.outerHeight, h = Yi(0, l, i), c = Ui(0, u, n), d = new Si(h, c, l, u);
        return d.lineHeight = s.lineHeight, d
    }

    function Xi(t, e, i, n, r, a, o, s) {
        var l = en(t, {rich: o, truncate: s, font: e, textAlign: i, textPadding: r, textLineHeight: a}),
            u = l.outerWidth, h = l.outerHeight, c = Yi(0, u, i), d = Ui(0, h, n);
        return new Si(c, d, u, h)
    }

    function Yi(t, e, i) {
        return "right" === i ? t -= e : "center" === i && (t -= e / 2), t
    }

    function Ui(t, e, i) {
        return "middle" === i ? t -= e / 2 : "bottom" === i && (t -= e), t
    }

    function Zi(t, e, i) {
        var n = e.textPosition, r = e.textDistance, a = i.x, o = i.y;
        r = r || 0;
        var s = i.height, l = i.width, u = s / 2, h = "left", c = "top";
        switch (n) {
            case"left":
                a -= r, o += u, h = "right", c = "middle";
                break;
            case"right":
                a += r + l, o += u, c = "middle";
                break;
            case"top":
                a += l / 2, o -= r, h = "center", c = "bottom";
                break;
            case"bottom":
                a += l / 2, o += s + r, h = "center";
                break;
            case"inside":
                a += l / 2, o += u, h = "center", c = "middle";
                break;
            case"insideLeft":
                a += r, o += u, c = "middle";
                break;
            case"insideRight":
                a += l - r, o += u, h = "right", c = "middle";
                break;
            case"insideTop":
                a += l / 2, o += r, h = "center";
                break;
            case"insideBottom":
                a += l / 2, o += s - r, h = "center", c = "bottom";
                break;
            case"insideTopLeft":
                a += r, o += r;
                break;
            case"insideTopRight":
                a += l - r, o += r, h = "right";
                break;
            case"insideBottomLeft":
                a += r, o += s - r, c = "bottom";
                break;
            case"insideBottomRight":
                a += l - r, o += s - r, h = "right", c = "bottom"
        }
        return t = t || {}, t.x = a, t.y = o, t.textAlign = h, t.textVerticalAlign = c, t
    }

    function qi(t, e, i, n, r) {
        if (!e) return "";
        var a = (t + "").split("\n");
        r = ji(e, i, n, r);
        for (var o = 0, s = a.length; s > o; o++) a[o] = Ki(a[o], r);
        return a.join("\n")
    }

    function ji(t, e, i, n) {
        n = o({}, n), n.font = e;
        var i = A(i, "...");
        n.maxIterations = A(n.maxIterations, 2);
        var r = n.minChar = A(n.minChar, 0);
        n.cnCharWidth = Hi("鍥�", e);
        var a = n.ascCharWidth = Hi("a", e);
        n.placeholder = A(n.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) s -= a;
        var u = Hi(i, e);
        return u > s && (i = "", u = 0), s = t - u, n.ellipsis = i, n.ellipsisWidth = u, n.contentWidth = s, n.containerWidth = t, n
    }

    function Ki(t, e) {
        var i = e.containerWidth, n = e.font, r = e.contentWidth;
        if (!i) return "";
        var a = Hi(t, n);
        if (i >= a) return t;
        for (var o = 0; ; o++) {
            if (r >= a || o >= e.maxIterations) {
                t += e.ellipsis;
                break
            }
            var s = 0 === o ? $i(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
            t = t.substr(0, s), a = Hi(t, n)
        }
        return "" === t && (t = e.placeholder), t
    }

    function $i(t, e, i, n) {
        for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
            var s = t.charCodeAt(a);
            r += s >= 0 && 127 >= s ? i : n
        }
        return a
    }

    function Qi(t) {
        return Hi("鍥�", t)
    }

    function Ji(t, e) {
        return Bv.measureText(t, e)
    }

    function tn(t, e, i, n, r) {
        null != t && (t += "");
        var a = A(n, Qi(e)), o = t ? t.split("\n") : [], s = o.length * a, l = s, u = !0;
        if (i && (l += i[0] + i[2]), t && r) {
            u = !1;
            var h = r.outerHeight, c = r.outerWidth;
            if (null != h && l > h) t = "", o = []; else if (null != c) for (var d = ji(c - (i ? i[1] + i[3] : 0), e, r.ellipsis, {
                minChar: r.minChar,
                placeholder: r.placeholder
            }), f = 0, p = o.length; p > f; f++) o[f] = Ki(o[f], d)
        }
        return {lines: o, height: s, outerHeight: l, lineHeight: a, canCacheByTextString: u}
    }

    function en(t, e) {
        var i = {lines: [], width: 0, height: 0};
        if (null != t && (t += ""), !t) return i;
        for (var n, r = zv.lastIndex = 0; null != (n = zv.exec(t));) {
            var a = n.index;
            a > r && nn(i, t.substring(r, a)), nn(i, n[2], n[1]), r = zv.lastIndex
        }
        r < t.length && nn(i, t.substring(r, t.length));
        var o = i.lines, s = 0, l = 0, u = [], h = e.textPadding, c = e.truncate, d = c && c.outerWidth,
            f = c && c.outerHeight;
        h && (null != d && (d -= h[1] + h[3]), null != f && (f -= h[0] + h[2]));
        for (var p = 0; p < o.length; p++) {
            for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
                var _ = g.tokens[y], x = _.styleName && e.rich[_.styleName] || {}, w = _.textPadding = x.textPadding,
                    b = _.font = x.font || e.font, S = _.textHeight = A(x.textHeight, Qi(b));
                if (w && (S += w[0] + w[2]), _.height = S, _.lineHeight = k(x.textLineHeight, e.textLineHeight, S), _.textAlign = x && x.textAlign || e.textAlign, _.textVerticalAlign = x && x.textVerticalAlign || "middle", null != f && s + _.lineHeight > f) return {
                    lines: [],
                    width: 0,
                    height: 0
                };
                _.textWidth = Hi(_.text, b);
                var M = x.textWidth, T = null == M || "auto" === M;
                if ("string" == typeof M && "%" === M.charAt(M.length - 1)) _.percentWidth = M, u.push(_), M = 0; else {
                    if (T) {
                        M = _.textWidth;
                        var I = x.textBackgroundColor, C = I && I.image;
                        C && (C = Ei(C), Vi(C) && (M = Math.max(M, C.width * S / C.height)))
                    }
                    var D = w ? w[1] + w[3] : 0;
                    M += D;
                    var L = null != d ? d - m : null;
                    null != L && M > L && (!T || D > L ? (_.text = "", _.textWidth = M = 0) : (_.text = qi(_.text, L - D, b, c.ellipsis, {minChar: c.minChar}), _.textWidth = Hi(_.text, b), M = _.textWidth + D))
                }
                m += _.width = M, x && (v = Math.max(v, _.lineHeight))
            }
            g.width = m, g.lineHeight = v, s += v, l = Math.max(l, m)
        }
        i.outerWidth = i.width = A(e.textWidth, l), i.outerHeight = i.height = A(e.textHeight, s), h && (i.outerWidth += h[1] + h[3], i.outerHeight += h[0] + h[2]);
        for (var p = 0; p < u.length; p++) {
            var _ = u[p], P = _.percentWidth;
            _.width = parseInt(P, 10) / 100 * l
        }
        return i
    }

    function nn(t, e, i) {
        for (var n = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
            var s = r[o], l = {styleName: i, text: s, isLineHolder: !s && !n};
            if (o) a.push({tokens: [l]}); else {
                var u = (a[a.length - 1] || (a[0] = {tokens: []})).tokens, h = u.length;
                1 === h && u[0].isLineHolder ? u[0] = l : (s || !h || n) && u.push(l)
            }
        }
    }

    function rn(t) {
        var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
        return e && z(e) || t.textFont || t.font
    }

    function an(t, e) {
        var i, n, r, a, o = e.x, s = e.y, l = e.width, u = e.height, h = e.r;
        0 > l && (o += l, l = -l), 0 > u && (s += u, u = -u), "number" == typeof h ? i = n = r = a = h : h instanceof Array ? 1 === h.length ? i = n = r = a = h[0] : 2 === h.length ? (i = r = h[0], n = a = h[1]) : 3 === h.length ? (i = h[0], n = a = h[1], r = h[2]) : (i = h[0], n = h[1], r = h[2], a = h[3]) : i = n = r = a = 0;
        var c;
        i + n > l && (c = i + n, i *= l / c, n *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), n + r > u && (c = n + r, n *= u / c, r *= u / c), i + a > u && (c = i + a, i *= u / c, a *= u / c), t.moveTo(o + i, s), t.lineTo(o + l - n, s), 0 !== n && t.arc(o + l - n, s + n, n, -Math.PI / 2, 0), t.lineTo(o + l, s + u - r), 0 !== r && t.arc(o + l - r, s + u - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + u), 0 !== a && t.arc(o + a, s + u - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + i), 0 !== i && t.arc(o + i, s + i, i, Math.PI, 1.5 * Math.PI)
    }

    function on(t) {
        return sn(t), f(t.rich, sn), t
    }

    function sn(t) {
        if (t) {
            t.font = rn(t);
            var e = t.textAlign;
            "middle" === e && (e = "center"), t.textAlign = null == e || Nv[e] ? e : "left";
            var i = t.textVerticalAlign || t.textBaseline;
            "center" === i && (i = "middle"), t.textVerticalAlign = null == i || Fv[i] ? i : "top";
            var n = t.textPadding;
            n && (t.textPadding = P(t.textPadding))
        }
    }

    function ln(t, e, i, n, r, a) {
        n.rich ? hn(t, e, i, n, r, a) : un(t, e, i, n, r, a)
    }

    function un(t, e, i, n, r, a) {
        var o, s = pn(n), l = !1, u = e.__attrCachedBy === xv.PLAIN_TEXT;
        a !== wv ? (a && (o = a.style, l = !s && u && o), e.__attrCachedBy = s ? xv.NONE : xv.PLAIN_TEXT) : u && (e.__attrCachedBy = xv.NONE);
        var h = n.font || Ev;
        l && h === (o.font || Ev) || (e.font = h);
        var c = t.__computedFont;
        t.__styleFont !== h && (t.__styleFont = h, c = t.__computedFont = e.font);
        var d = n.textPadding, f = n.textLineHeight, p = t.__textCotentBlock;
        (!p || t.__dirtyText) && (p = t.__textCotentBlock = tn(i, c, d, f, n.truncate));
        var g = p.outerHeight, v = p.lines, m = p.lineHeight, y = mn(Gv, t, n, r), _ = y.baseX, x = y.baseY,
            w = y.textAlign || "left", b = y.textVerticalAlign;
        dn(e, n, r, _, x);
        var S = Ui(x, g, b), M = _, T = S;
        if (s || d) {
            var I = Hi(i, c), C = I;
            d && (C += d[1] + d[3]);
            var D = Yi(_, C, w);
            s && gn(t, e, n, D, S, C, g), d && (M = bn(_, w, d), T += d[0])
        }
        e.textAlign = w, e.textBaseline = "middle", e.globalAlpha = n.opacity || 1;
        for (var A = 0; A < Vv.length; A++) {
            var k = Vv[A], L = k[0], P = k[1], O = n[L];
            l && O === o[L] || (e[P] = _v(e, P, O || k[2]))
        }
        T += m / 2;
        var z = n.textStrokeWidth, R = l ? o.textStrokeWidth : null, B = !l || z !== R,
            E = !l || B || n.textStroke !== o.textStroke, N = _n(n.textStroke, z), F = xn(n.textFill);
        if (N && (B && (e.lineWidth = z), E && (e.strokeStyle = N)), F && (l && n.textFill === o.textFill || (e.fillStyle = F)), 1 === v.length) N && e.strokeText(v[0], M, T), F && e.fillText(v[0], M, T); else for (var A = 0; A < v.length; A++) N && e.strokeText(v[A], M, T), F && e.fillText(v[A], M, T), T += m
    }

    function hn(t, e, i, n, r, a) {
        a !== wv && (e.__attrCachedBy = xv.NONE);
        var o = t.__textCotentBlock;
        (!o || t.__dirtyText) && (o = t.__textCotentBlock = en(i, n)), cn(t, e, o, n, r)
    }

    function cn(t, e, i, n, r) {
        var a = i.width, o = i.outerWidth, s = i.outerHeight, l = n.textPadding, u = mn(Gv, t, n, r), h = u.baseX,
            c = u.baseY, d = u.textAlign, f = u.textVerticalAlign;
        dn(e, n, r, h, c);
        var p = Yi(h, o, d), g = Ui(c, s, f), v = p, m = g;
        l && (v += l[3], m += l[0]);
        var y = v + a;
        pn(n) && gn(t, e, n, p, g, o, s);
        for (var _ = 0; _ < i.lines.length; _++) {
            for (var x, w = i.lines[_], b = w.tokens, S = b.length, M = w.lineHeight, T = w.width, I = 0, C = v, D = y, A = S - 1; S > I && (x = b[I], !x.textAlign || "left" === x.textAlign);) fn(t, e, x, n, M, m, C, "left"), T -= x.width, C += x.width, I++;
            for (; A >= 0 && (x = b[A], "right" === x.textAlign);) fn(t, e, x, n, M, m, D, "right"), T -= x.width, D -= x.width, A--;
            for (C += (a - (C - v) - (y - D) - T) / 2; A >= I;) x = b[I], fn(t, e, x, n, M, m, C + x.width / 2, "center"), C += x.width, I++;
            m += M
        }
    }

    function dn(t, e, i, n, r) {
        if (i && e.textRotation) {
            var a = e.textOrigin;
            "center" === a ? (n = i.width / 2 + i.x, r = i.height / 2 + i.y) : a && (n = a[0] + i.x, r = a[1] + i.y), t.translate(n, r), t.rotate(-e.textRotation), t.translate(-n, -r)
        }
    }

    function fn(t, e, i, n, r, a, o, s) {
        var l = n.rich[i.styleName] || {};
        l.text = i.text;
        var u = i.textVerticalAlign, h = a + r / 2;
        "top" === u ? h = a + i.height / 2 : "bottom" === u && (h = a + r - i.height / 2), !i.isLineHolder && pn(l) && gn(t, e, l, "right" === s ? o - i.width : "center" === s ? o - i.width / 2 : o, h - i.height / 2, i.width, i.height);
        var c = i.textPadding;
        c && (o = bn(o, s, c), h -= i.height / 2 - c[2] - i.textHeight / 2), yn(e, "shadowBlur", k(l.textShadowBlur, n.textShadowBlur, 0)), yn(e, "shadowColor", l.textShadowColor || n.textShadowColor || "transparent"), yn(e, "shadowOffsetX", k(l.textShadowOffsetX, n.textShadowOffsetX, 0)), yn(e, "shadowOffsetY", k(l.textShadowOffsetY, n.textShadowOffsetY, 0)), yn(e, "textAlign", s), yn(e, "textBaseline", "middle"), yn(e, "font", i.font || Ev);
        var d = _n(l.textStroke || n.textStroke, p), f = xn(l.textFill || n.textFill),
            p = A(l.textStrokeWidth, n.textStrokeWidth);
        d && (yn(e, "lineWidth", p), yn(e, "strokeStyle", d), e.strokeText(i.text, o, h)), f && (yn(e, "fillStyle", f), e.fillText(i.text, o, h))
    }

    function pn(t) {
        return !!(t.textBackgroundColor || t.textBorderWidth && t.textBorderColor)
    }

    function gn(t, e, i, n, r, a, o) {
        var s = i.textBackgroundColor, l = i.textBorderWidth, u = i.textBorderColor, h = b(s);
        if (yn(e, "shadowBlur", i.textBoxShadowBlur || 0), yn(e, "shadowColor", i.textBoxShadowColor || "transparent"), yn(e, "shadowOffsetX", i.textBoxShadowOffsetX || 0), yn(e, "shadowOffsetY", i.textBoxShadowOffsetY || 0), h || l && u) {
            e.beginPath();
            var c = i.textBorderRadius;
            c ? an(e, {x: n, y: r, width: a, height: o, r: c}) : e.rect(n, r, a, o), e.closePath()
        }
        if (h) if (yn(e, "fillStyle", s), null != i.fillOpacity) {
            var d = e.globalAlpha;
            e.globalAlpha = i.fillOpacity * i.opacity, e.fill(), e.globalAlpha = d
        } else e.fill(); else if (S(s)) {
            var f = s.image;
            f = Ni(f, null, t, vn, s), f && Vi(f) && e.drawImage(f, n, r, a, o)
        }
        if (l && u) if (yn(e, "lineWidth", l), yn(e, "strokeStyle", u), null != i.strokeOpacity) {
            var d = e.globalAlpha;
            e.globalAlpha = i.strokeOpacity * i.opacity, e.stroke(), e.globalAlpha = d
        } else e.stroke()
    }

    function vn(t, e) {
        e.image = t
    }

    function mn(t, e, i, n) {
        var r = i.x || 0, a = i.y || 0, o = i.textAlign, s = i.textVerticalAlign;
        if (n) {
            var l = i.textPosition;
            if (l instanceof Array) r = n.x + wn(l[0], n.width), a = n.y + wn(l[1], n.height); else {
                var u = e && e.calculateTextPosition ? e.calculateTextPosition(Hv, i, n) : Zi(Hv, i, n);
                r = u.x, a = u.y, o = o || u.textAlign, s = s || u.textVerticalAlign
            }
            var h = i.textOffset;
            h && (r += h[0], a += h[1])
        }
        return t = t || {}, t.baseX = r, t.baseY = a, t.textAlign = o, t.textVerticalAlign = s, t
    }

    function yn(t, e, i) {
        return t[e] = _v(t, e, i), t[e]
    }

    function _n(t, e) {
        return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function xn(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function wn(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
    }

    function bn(t, e, i) {
        return "right" === e ? t - i[1] : "center" === e ? t + i[3] / 2 - i[1] / 2 : t + i[3]
    }

    function Sn(t, e) {
        return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
    }

    function Mn(t) {
        t = t || {}, hv.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
        this.style = new Sv(t.style, this), this._rect = null, this.__clipPaths = null
    }

    function Tn(t) {
        Mn.call(this, t)
    }

    function In(t) {
        return parseInt(t, 10)
    }

    function Cn(t) {
        return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1
    }

    function Dn(t, e, i) {
        return jv.copy(t.getBoundingRect()), t.transform && jv.applyTransform(t.transform), Kv.width = e, Kv.height = i, !jv.intersect(Kv)
    }

    function An(t, e) {
        if (t === e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var i = 0; i < t.length; i++) if (t[i] !== e[i]) return !0;
        return !1
    }

    function kn(t, e) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.setTransform(e), e.beginPath(), n.buildPath(e, n.shape), e.clip(), n.restoreTransform(e)
        }
    }

    function Ln(t, e) {
        var i = document.createElement("div");
        return i.style.cssText = ["position:relative", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", i
    }

    function Pn(t) {
        return "mousewheel" === t && eg.browser.firefox ? "DOMMouseScroll" : t
    }

    function On(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e
    }

    function zn(t) {
        t.touching = !0, null != t.touchTimer && (clearTimeout(t.touchTimer), t.touchTimer = null), t.touchTimer = setTimeout(function () {
            t.touching = !1, t.touchTimer = null
        }, 700)
    }

    function Rn(t) {
        t && (t.zrByTouch = !0)
    }

    function Bn(t, e) {
        return _e(t.dom, new Nn(t, e), !0)
    }

    function En(t, e) {
        var i = !1;
        do e = e && e.parentNode; while (e && 9 !== e.nodeType && !(i = e === t.painterRoot));
        return i
    }

    function Nn(t, e) {
        this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY
    }

    function Fn(t, e) {
        var i = e.domHandlers;
        eg.pointerEventsSupported ? f(em.pointer, function (n) {
            Hn(e, n, function (e) {
                i[n].call(t, e)
            })
        }) : (eg.touchEventsSupported && f(em.touch, function (n) {
            Hn(e, n, function (r) {
                i[n].call(t, r), zn(e)
            })
        }), f(em.mouse, function (n) {
            Hn(e, n, function (r) {
                r = ye(r), e.touching || i[n].call(t, r)
            })
        }))
    }

    function Vn(t, e) {
        function i(i) {
            function n(n) {
                n = ye(n), En(t, n.target) || (n = Bn(t, n), e.domHandlers[i].call(t, n))
            }

            Hn(e, i, n, {capture: !0})
        }

        eg.pointerEventsSupported ? f(im.pointer, i) : eg.touchEventsSupported || f(im.mouse, i)
    }

    function Hn(t, e, i, n) {
        t.mounted[e] = i, t.listenerOpts[e] = n, xe(t.domTarget, Pn(e), i, n)
    }

    function Gn(t) {
        var e = t.mounted;
        for (var i in e) e.hasOwnProperty(i) && we(t.domTarget, Pn(i), e[i], t.listenerOpts[i]);
        t.mounted = {}
    }

    function Wn(t, e) {
        if (t._mayPointerCapture = null, tm && t._pointerCapturing ^ e) {
            t._pointerCapturing = e;
            var i = t._globalHandlerScope;
            e ? Vn(t, i) : Gn(i)
        }
    }

    function Xn(t, e) {
        this.domTarget = t, this.domHandlers = e, this.mounted = {}, this.listenerOpts = {}, this.touchTimer = null, this.touching = !1
    }

    function Yn(t, e) {
        Sg.call(this), this.dom = t, this.painterRoot = e, this._localHandlerScope = new Xn(t, rm), tm && (this._globalHandlerScope = new Xn(document, am)), this._pointerCapturing = !1, this._mayPointerCapture = null, Fn(this, this._localHandlerScope)
    }

    function Un(t, e) {
        var i = new cm(Jp(), t, e);
        return um[i.id] = i, i
    }

    function Zn(t) {
        if (t) t.dispose(); else {
            for (var e in um) um.hasOwnProperty(e) && um[e].dispose();
            um = {}
        }
        return this
    }

    function qn(t) {
        return um[t]
    }

    function jn(t, e) {
        lm[t] = e
    }

    function Kn(t) {
        delete um[t]
    }

    function $n(t) {
        return t instanceof Array ? t : null == t ? [] : [t]
    }

    function Qn(t, e, i) {
        if (t) {
            t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
            for (var n = 0, r = i.length; r > n; n++) {
                var a = i[n];
                !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a])
            }
        }
    }

    function Jn(t) {
        return !pm(t) || gm(t) || t instanceof Date ? t : t.value
    }

    function tr(t) {
        return pm(t) && !(t instanceof Array)
    }

    function er(t, e) {
        e = (e || []).slice();
        var i = p(t || [], function (t) {
            return {exist: t}
        });
        return fm(e, function (t, n) {
            if (pm(t)) {
                for (var r = 0; r < i.length; r++) if (!i[r].option && null != t.id && i[r].exist.id === t.id + "") return i[r].option = t, void (e[n] = null);
                for (var r = 0; r < i.length; r++) {
                    var a = i[r].exist;
                    if (!(i[r].option || null != a.id && null != t.id || null == t.name || rr(t) || rr(a) || a.name !== t.name + "")) return i[r].option = t, void (e[n] = null)
                }
            }
        }), fm(e, function (t) {
            if (pm(t)) {
                for (var e = 0; e < i.length; e++) {
                    var n = i[e].exist;
                    if (!i[e].option && !rr(n) && null == t.id) {
                        i[e].option = t;
                        break
                    }
                }
                e >= i.length && i.push({option: t})
            }
        }), i
    }

    function ir(t) {
        var e = N();
        fm(t, function (t) {
            var i = t.exist;
            i && e.set(i.id, t)
        }), fm(t, function (t) {
            var i = t.option;
            O(!i || null == i.id || !e.get(i.id) || e.get(i.id) === t, "id duplicates: " + (i && i.id)), i && null != i.id && e.set(i.id, t), !t.keyInfo && (t.keyInfo = {})
        }), fm(t, function (t, i) {
            var n = t.exist, r = t.option, a = t.keyInfo;
            if (pm(r)) {
                if (a.name = null != r.name ? r.name + "" : n ? n.name : vm + i, n) a.id = n.id; else if (null != r.id) a.id = r.id + ""; else {
                    var o = 0;
                    do a.id = "\x00" + a.name + "\x00" + o++; while (e.get(a.id))
                }
                e.set(a.id, t)
            }
        })
    }

    function nr(t) {
        var e = t.name;
        return !(!e || !e.indexOf(vm))
    }

    function rr(t) {
        return pm(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00")
    }

    function ar(t, e) {
        function i(t, e, i) {
            for (var n = 0, r = t.length; r > n; n++) for (var a = t[n].seriesId, o = $n(t[n].dataIndex), s = i && i[a], l = 0, u = o.length; u > l; l++) {
                var h = o[l];
                s && s[h] ? s[h] = null : (e[a] || (e[a] = {}))[h] = 1
            }
        }

        function n(t, e) {
            var i = [];
            for (var r in t) if (t.hasOwnProperty(r) && null != t[r]) if (e) i.push(+r); else {
                var a = n(t[r], !0);
                a.length && i.push({seriesId: r, dataIndex: a})
            }
            return i
        }

        var r = {}, a = {};
        return i(t || [], r), i(e || [], a, r), [n(r), n(a)]
    }

    function or(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? x(e.dataIndex) ? p(e.dataIndex, function (e) {
            return t.indexOfRawIndex(e)
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? x(e.name) ? p(e.name, function (e) {
            return t.indexOfName(e)
        }) : t.indexOfName(e.name) : void 0
    }

    function sr() {
        var t = "__\x00ec_inner_" + ym++ + "_" + Math.random().toFixed(5);
        return function (e) {
            return e[t] || (e[t] = {})
        }
    }

    function lr(t, e, i) {
        if (b(e)) {
            var n = {};
            n[e + "Index"] = 0, e = n
        }
        var r = i && i.defaultMainType;
        !r || ur(e, r + "Index") || ur(e, r + "Id") || ur(e, r + "Name") || (e[r + "Index"] = 0);
        var a = {};
        return fm(e, function (n, r) {
            var n = e[r];
            if ("dataIndex" === r || "dataIndexInside" === r) return void (a[r] = n);
            var o = r.match(/^(\w+)(Index|Id|Name)$/) || [], s = o[1], l = (o[2] || "").toLowerCase();
            if (!(!s || !l || null == n || "index" === l && "none" === n || i && i.includeMainTypes && u(i.includeMainTypes, s) < 0)) {
                var h = {mainType: s};
                ("index" !== l || "all" !== n) && (h[l] = n);
                var c = t.queryComponents(h);
                a[s + "Models"] = c, a[s + "Model"] = c[0]
            }
        }), a
    }

    function ur(t, e) {
        return t && t.hasOwnProperty(e)
    }

    function hr(t, e, i) {
        t.setAttribute ? t.setAttribute(e, i) : t[e] = i
    }

    function cr(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t[e]
    }

    function dr(t) {
        return "auto" === t ? eg.domSupported ? "html" : "richText" : t || "html"
    }

    function fr(t) {
        var e = {main: "", sub: ""};
        return t && (t = t.split(_m), e.main = t[0] || "", e.sub = t[1] || ""), e
    }

    function pr(t) {
        O(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
    }

    function gr(t) {
        t.$constructor = t, t.extend = function (t) {
            var e = this, i = function () {
                t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
            };
            return o(i.prototype, t), i.extend = this.extend, i.superCall = mr, i.superApply = yr, h(i, this), i.superClass = e, i
        }
    }

    function vr(t) {
        var e = ["__\x00is_clz", wm++, Math.random().toFixed(3)].join("_");
        t.prototype[e] = !0, t.isInstance = function (t) {
            return !(!t || !t[e])
        }
    }

    function mr(t, e) {
        var i = L(arguments, 2);
        return this.superClass.prototype[e].apply(t, i)
    }

    function yr(t, e, i) {
        return this.superClass.prototype[e].apply(t, i)
    }

    function _r(t, e) {
        function i(t) {
            var e = n[t.main];
            return e && e[xm] || (e = n[t.main] = {}, e[xm] = !0), e
        }

        e = e || {};
        var n = {};
        if (t.registerClass = function (t, e) {
            if (e) if (pr(e), e = fr(e), e.sub) {
                if (e.sub !== xm) {
                    var r = i(e);
                    r[e.sub] = t
                }
            } else n[e.main] = t;
            return t
        }, t.getClass = function (t, e, i) {
            var r = n[t];
            if (r && r[xm] && (r = e ? r[e] : null), i && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
            return r
        }, t.getClassesByMainType = function (t) {
            t = fr(t);
            var e = [], i = n[t.main];
            return i && i[xm] ? f(i, function (t, i) {
                i !== xm && e.push(t)
            }) : e.push(i), e
        }, t.hasClass = function (t) {
            return t = fr(t), !!n[t.main]
        }, t.getAllClassMainTypes = function () {
            var t = [];
            return f(n, function (e, i) {
                t.push(i)
            }), t
        }, t.hasSubTypes = function (t) {
            t = fr(t);
            var e = n[t.main];
            return e && e[xm]
        }, t.parseClassType = fr, e.registerWhenExtend) {
            var r = t.extend;
            r && (t.extend = function (e) {
                var i = r.call(this, e);
                return t.registerClass(i, e.type)
            })
        }
        return t
    }

    function xr(t) {
        return t > -Am && Am > t
    }

    function wr(t) {
        return t > Am || -Am > t
    }

    function br(t, e, i, n, r) {
        var a = 1 - r;
        return a * a * (a * t + 3 * r * e) + r * r * (r * n + 3 * a * i)
    }

    function Sr(t, e, i, n, r) {
        var a = 1 - r;
        return 3 * (((e - t) * a + 2 * (i - e) * r) * a + (n - i) * r * r)
    }

    function Mr(t, e, i, n, r, a) {
        var o = n + 3 * (e - i) - t, s = 3 * (i - 2 * e + t), l = 3 * (e - t), u = t - r, h = s * s - 3 * o * l,
            c = s * l - 9 * o * u, d = l * l - 3 * s * u, f = 0;
        if (xr(h) && xr(c)) if (xr(s)) a[0] = 0; else {
            var p = -l / s;
            p >= 0 && 1 >= p && (a[f++] = p)
        } else {
            var g = c * c - 4 * h * d;
            if (xr(g)) {
                var v = c / h, p = -s / o + v, m = -v / 2;
                p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m)
            } else if (g > 0) {
                var y = Dm(g), _ = h * s + 1.5 * o * (-c + y), x = h * s + 1.5 * o * (-c - y);
                _ = 0 > _ ? -Cm(-_, Pm) : Cm(_, Pm), x = 0 > x ? -Cm(-x, Pm) : Cm(x, Pm);
                var p = (-s - (_ + x)) / (3 * o);
                p >= 0 && 1 >= p && (a[f++] = p)
            } else {
                var w = (2 * h * s - 3 * o * c) / (2 * Dm(h * h * h)), b = Math.acos(w) / 3, S = Dm(h), M = Math.cos(b),
                    p = (-s - 2 * S * M) / (3 * o), m = (-s + S * (M + Lm * Math.sin(b))) / (3 * o),
                    T = (-s + S * (M - Lm * Math.sin(b))) / (3 * o);
                p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m), T >= 0 && 1 >= T && (a[f++] = T)
            }
        }
        return f
    }

    function Tr(t, e, i, n, r) {
        var a = 6 * i - 12 * e + 6 * t, o = 9 * e + 3 * n - 3 * t - 9 * i, s = 3 * e - 3 * t, l = 0;
        if (xr(o)) {
            if (wr(a)) {
                var u = -s / a;
                u >= 0 && 1 >= u && (r[l++] = u)
            }
        } else {
            var h = a * a - 4 * o * s;
            if (xr(h)) r[0] = -a / (2 * o); else if (h > 0) {
                var c = Dm(h), u = (-a + c) / (2 * o), d = (-a - c) / (2 * o);
                u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d)
            }
        }
        return l
    }

    function Ir(t, e, i, n, r, a) {
        var o = (e - t) * r + t, s = (i - e) * r + e, l = (n - i) * r + i, u = (s - o) * r + o, h = (l - s) * r + s,
            c = (h - u) * r + u;
        a[0] = t, a[1] = o, a[2] = u, a[3] = c, a[4] = c, a[5] = h, a[6] = l, a[7] = n
    }

    function Cr(t, e, i, n, r, a, o, s, l, u, h) {
        var c, d, f, p, g, v = .005, m = 1 / 0;
        Om[0] = l, Om[1] = u;
        for (var y = 0; 1 > y; y += .05) zm[0] = br(t, i, r, o, y), zm[1] = br(e, n, a, s, y), p = xg(Om, zm), m > p && (c = y, m = p);
        m = 1 / 0;
        for (var _ = 0; 32 > _ && !(km > v); _++) d = c - v, f = c + v, zm[0] = br(t, i, r, o, d), zm[1] = br(e, n, a, s, d), p = xg(zm, Om), d >= 0 && m > p ? (c = d, m = p) : (Rm[0] = br(t, i, r, o, f), Rm[1] = br(e, n, a, s, f), g = xg(Rm, Om), 1 >= f && m > g ? (c = f, m = g) : v *= .5);
        return h && (h[0] = br(t, i, r, o, c), h[1] = br(e, n, a, s, c)), Dm(m)
    }

    function Dr(t, e, i, n) {
        var r = 1 - n;
        return r * (r * t + 2 * n * e) + n * n * i
    }

    function Ar(t, e, i, n) {
        return 2 * ((1 - n) * (e - t) + n * (i - e))
    }

    function kr(t, e, i, n, r) {
        var a = t - 2 * e + i, o = 2 * (e - t), s = t - n, l = 0;
        if (xr(a)) {
            if (wr(o)) {
                var u = -s / o;
                u >= 0 && 1 >= u && (r[l++] = u)
            }
        } else {
            var h = o * o - 4 * a * s;
            if (xr(h)) {
                var u = -o / (2 * a);
                u >= 0 && 1 >= u && (r[l++] = u)
            } else if (h > 0) {
                var c = Dm(h), u = (-o + c) / (2 * a), d = (-o - c) / (2 * a);
                u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d)
            }
        }
        return l
    }

    function Lr(t, e, i) {
        var n = t + i - 2 * e;
        return 0 === n ? .5 : (t - e) / n
    }

    function Pr(t, e, i, n, r) {
        var a = (e - t) * n + t, o = (i - e) * n + e, s = (o - a) * n + a;
        r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = i
    }

    function Or(t, e, i, n, r, a, o, s, l) {
        var u, h = .005, c = 1 / 0;
        Om[0] = o, Om[1] = s;
        for (var d = 0; 1 > d; d += .05) {
            zm[0] = Dr(t, i, r, d), zm[1] = Dr(e, n, a, d);
            var f = xg(Om, zm);
            c > f && (u = d, c = f)
        }
        c = 1 / 0;
        for (var p = 0; 32 > p && !(km > h); p++) {
            var g = u - h, v = u + h;
            zm[0] = Dr(t, i, r, g), zm[1] = Dr(e, n, a, g);
            var f = xg(zm, Om);
            if (g >= 0 && c > f) u = g, c = f; else {
                Rm[0] = Dr(t, i, r, v), Rm[1] = Dr(e, n, a, v);
                var m = xg(Rm, Om);
                1 >= v && c > m ? (u = v, c = m) : h *= .5
            }
        }
        return l && (l[0] = Dr(t, i, r, u), l[1] = Dr(e, n, a, u)), Dm(c)
    }

    function zr(t, e, i) {
        if (0 !== t.length) {
            var n, r = t[0], a = r[0], o = r[0], s = r[1], l = r[1];
            for (n = 1; n < t.length; n++) r = t[n], a = Bm(a, r[0]), o = Em(o, r[0]), s = Bm(s, r[1]), l = Em(l, r[1]);
            e[0] = a, e[1] = s, i[0] = o, i[1] = l
        }
    }

    function Rr(t, e, i, n, r, a) {
        r[0] = Bm(t, i), r[1] = Bm(e, n), a[0] = Em(t, i), a[1] = Em(e, n)
    }

    function Br(t, e, i, n, r, a, o, s, l, u) {
        var h, c = Tr, d = br, f = c(t, i, r, o, Xm);
        for (l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0, h = 0; f > h; h++) {
            var p = d(t, i, r, o, Xm[h]);
            l[0] = Bm(p, l[0]), u[0] = Em(p, u[0])
        }
        for (f = c(e, n, a, s, Ym), h = 0; f > h; h++) {
            var g = d(e, n, a, s, Ym[h]);
            l[1] = Bm(g, l[1]), u[1] = Em(g, u[1])
        }
        l[0] = Bm(t, l[0]), u[0] = Em(t, u[0]), l[0] = Bm(o, l[0]), u[0] = Em(o, u[0]), l[1] = Bm(e, l[1]), u[1] = Em(e, u[1]), l[1] = Bm(s, l[1]), u[1] = Em(s, u[1])
    }

    function Er(t, e, i, n, r, a, o, s) {
        var l = Lr, u = Dr, h = Em(Bm(l(t, i, r), 1), 0), c = Em(Bm(l(e, n, a), 1), 0), d = u(t, i, r, h),
            f = u(e, n, a, c);
        o[0] = Bm(t, r, d), o[1] = Bm(e, a, f), s[0] = Em(t, r, d), s[1] = Em(e, a, f)
    }

    function Nr(t, e, i, n, r, a, o, s, l) {
        var u = oe, h = se, c = Math.abs(r - a);
        if (1e-4 > c % Vm && c > 1e-4) return s[0] = t - i, s[1] = e - n, l[0] = t + i, void (l[1] = e + n);
        if (Hm[0] = Fm(r) * i + t, Hm[1] = Nm(r) * n + e, Gm[0] = Fm(a) * i + t, Gm[1] = Nm(a) * n + e, u(s, Hm, Gm), h(l, Hm, Gm), r %= Vm, 0 > r && (r += Vm), a %= Vm, 0 > a && (a += Vm), r > a && !o ? a += Vm : a > r && o && (r += Vm), o) {
            var d = a;
            a = r, r = d
        }
        for (var f = 0; a > f; f += Math.PI / 2) f > r && (Wm[0] = Fm(f) * i + t, Wm[1] = Nm(f) * n + e, u(s, Wm, s), h(l, Wm, l))
    }

    function Fr(t, e, i, n, r, a, o) {
        if (0 === r) return !1;
        var s = r, l = 0, u = t;
        if (o > e + s && o > n + s || e - s > o && n - s > o || a > t + s && a > i + s || t - s > a && i - s > a) return !1;
        if (t === i) return Math.abs(a - t) <= s / 2;
        l = (e - n) / (t - i), u = (t * n - i * e) / (t - i);
        var h = l * a - o + u, c = h * h / (l * l + 1);
        return s / 2 * s / 2 >= c
    }

    function Vr(t, e, i, n, r, a, o, s, l, u, h) {
        if (0 === l) return !1;
        var c = l;
        if (h > e + c && h > n + c && h > a + c && h > s + c || e - c > h && n - c > h && a - c > h && s - c > h || u > t + c && u > i + c && u > r + c && u > o + c || t - c > u && i - c > u && r - c > u && o - c > u) return !1;
        var d = Cr(t, e, i, n, r, a, o, s, u, h, null);
        return c / 2 >= d
    }

    function Hr(t, e, i, n, r, a, o, s, l) {
        if (0 === o) return !1;
        var u = o;
        if (l > e + u && l > n + u && l > a + u || e - u > l && n - u > l && a - u > l || s > t + u && s > i + u && s > r + u || t - u > s && i - u > s && r - u > s) return !1;
        var h = Or(t, e, i, n, r, a, s, l, null);
        return u / 2 >= h
    }

    function Gr(t) {
        return t %= ay, 0 > t && (t += ay), t
    }

    function Wr(t, e, i, n, r, a, o, s, l) {
        if (0 === o) return !1;
        var u = o;
        s -= t, l -= e;
        var h = Math.sqrt(s * s + l * l);
        if (h - u > i || i > h + u) return !1;
        if (Math.abs(n - r) % oy < 1e-4) return !0;
        if (a) {
            var c = n;
            n = Gr(r), r = Gr(c)
        } else n = Gr(n), r = Gr(r);
        n > r && (r += oy);
        var d = Math.atan2(l, s);
        return 0 > d && (d += oy), d >= n && r >= d || d + oy >= n && r >= d + oy
    }

    function Xr(t, e, i, n, r, a) {
        if (a > e && a > n || e > a && n > a) return 0;
        if (n === e) return 0;
        var o = e > n ? 1 : -1, s = (a - e) / (n - e);
        (1 === s || 0 === s) && (o = e > n ? .5 : -.5);
        var l = s * (i - t) + t;
        return l === r ? 1 / 0 : l > r ? o : 0
    }

    function Yr(t, e) {
        return Math.abs(t - e) < uy
    }

    function Ur() {
        var t = cy[0];
        cy[0] = cy[1], cy[1] = t
    }

    function Zr(t, e, i, n, r, a, o, s, l, u) {
        if (u > e && u > n && u > a && u > s || e > u && n > u && a > u && s > u) return 0;
        var h = Mr(e, n, a, s, u, hy);
        if (0 === h) return 0;
        for (var c, d, f = 0, p = -1, g = 0; h > g; g++) {
            var v = hy[g], m = 0 === v || 1 === v ? .5 : 1, y = br(t, i, r, o, v);
            l > y || (0 > p && (p = Tr(e, n, a, s, cy), cy[1] < cy[0] && p > 1 && Ur(), c = br(e, n, a, s, cy[0]), p > 1 && (d = br(e, n, a, s, cy[1]))), f += 2 === p ? v < cy[0] ? e > c ? m : -m : v < cy[1] ? c > d ? m : -m : d > s ? m : -m : v < cy[0] ? e > c ? m : -m : c > s ? m : -m)
        }
        return f
    }

    function qr(t, e, i, n, r, a, o, s) {
        if (s > e && s > n && s > a || e > s && n > s && a > s) return 0;
        var l = kr(e, n, a, s, hy);
        if (0 === l) return 0;
        var u = Lr(e, n, a);
        if (u >= 0 && 1 >= u) {
            for (var h = 0, c = Dr(e, n, a, u), d = 0; l > d; d++) {
                var f = 0 === hy[d] || 1 === hy[d] ? .5 : 1, p = Dr(t, i, r, hy[d]);
                o > p || (h += hy[d] < u ? e > c ? f : -f : c > a ? f : -f)
            }
            return h
        }
        var f = 0 === hy[0] || 1 === hy[0] ? .5 : 1, p = Dr(t, i, r, hy[0]);
        return o > p ? 0 : e > a ? f : -f
    }

    function jr(t, e, i, n, r, a, o, s) {
        if (s -= e, s > i || -i > s) return 0;
        var l = Math.sqrt(i * i - s * s);
        hy[0] = -l, hy[1] = l;
        var u = Math.abs(n - r);
        if (1e-4 > u) return 0;
        if (1e-4 > u % ly) {
            n = 0, r = ly;
            var h = a ? 1 : -1;
            return o >= hy[0] + t && o <= hy[1] + t ? h : 0
        }
        if (a) {
            var l = n;
            n = Gr(r), r = Gr(l)
        } else n = Gr(n), r = Gr(r);
        n > r && (r += ly);
        for (var c = 0, d = 0; 2 > d; d++) {
            var f = hy[d];
            if (f + t > o) {
                var p = Math.atan2(s, f), h = a ? 1 : -1;
                0 > p && (p = ly + p), (p >= n && r >= p || p + ly >= n && r >= p + ly) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (h = -h), c += h)
            }
        }
        return c
    }

    function Kr(t, e, i, n, r) {
        for (var a = 0, o = 0, s = 0, l = 0, u = 0, h = 0; h < t.length;) {
            var c = t[h++];
            switch (c === sy.M && h > 1 && (i || (a += Xr(o, s, l, u, n, r))), 1 === h && (o = t[h], s = t[h + 1], l = o, u = s), c) {
                case sy.M:
                    l = t[h++], u = t[h++], o = l, s = u;
                    break;
                case sy.L:
                    if (i) {
                        if (Fr(o, s, t[h], t[h + 1], e, n, r)) return !0
                    } else a += Xr(o, s, t[h], t[h + 1], n, r) || 0;
                    o = t[h++], s = t[h++];
                    break;
                case sy.C:
                    if (i) {
                        if (Vr(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], e, n, r)) return !0
                    } else a += Zr(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], n, r) || 0;
                    o = t[h++], s = t[h++];
                    break;
                case sy.Q:
                    if (i) {
                        if (Hr(o, s, t[h++], t[h++], t[h], t[h + 1], e, n, r)) return !0
                    } else a += qr(o, s, t[h++], t[h++], t[h], t[h + 1], n, r) || 0;
                    o = t[h++], s = t[h++];
                    break;
                case sy.A:
                    var d = t[h++], f = t[h++], p = t[h++], g = t[h++], v = t[h++], m = t[h++];
                    h += 1;
                    var y = 1 - t[h++], _ = Math.cos(v) * p + d, x = Math.sin(v) * g + f;
                    h > 1 ? a += Xr(o, s, _, x, n, r) : (l = _, u = x);
                    var w = (n - d) * g / p + d;
                    if (i) {
                        if (Wr(d, f, g, v, v + m, y, e, w, r)) return !0
                    } else a += jr(d, f, g, v, v + m, y, w, r);
                    o = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;
                    break;
                case sy.R:
                    l = o = t[h++], u = s = t[h++];
                    var b = t[h++], S = t[h++], _ = l + b, x = u + S;
                    if (i) {
                        if (Fr(l, u, _, u, e, n, r) || Fr(_, u, _, x, e, n, r) || Fr(_, x, l, x, e, n, r) || Fr(l, x, l, u, e, n, r)) return !0
                    } else a += Xr(_, u, _, x, n, r), a += Xr(l, x, l, u, n, r);
                    break;
                case sy.Z:
                    if (i) {
                        if (Fr(o, s, l, u, e, n, r)) return !0
                    } else a += Xr(o, s, l, u, n, r);
                    o = l, s = u
            }
        }
        return i || Yr(s, u) || (a += Xr(o, s, l, u, n, r) || 0), 0 !== a
    }

    function $r(t, e, i) {
        return Kr(t, 0, !1, e, i)
    }

    function Qr(t, e, i, n) {
        return Kr(t, e, !0, i, n)
    }

    function Jr(t) {
        Mn.call(this, t), this.path = null
    }

    function ta(t, e, i, n, r, a, o, s, l, u, h) {
        var c = l * (Sy / 180), d = by(c) * (t - i) / 2 + wy(c) * (e - n) / 2,
            f = -1 * wy(c) * (t - i) / 2 + by(c) * (e - n) / 2, p = d * d / (o * o) + f * f / (s * s);
        p > 1 && (o *= xy(p), s *= xy(p));
        var g = (r === a ? -1 : 1) * xy((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0,
            v = g * o * f / s, m = g * -s * d / o, y = (t + i) / 2 + by(c) * v - wy(c) * m,
            _ = (e + n) / 2 + wy(c) * v + by(c) * m, x = Iy([1, 0], [(d - v) / o, (f - m) / s]),
            w = [(d - v) / o, (f - m) / s], b = [(-1 * d - v) / o, (-1 * f - m) / s], S = Iy(w, b);
        Ty(w, b) <= -1 && (S = Sy), Ty(w, b) >= 1 && (S = 0), 0 === a && S > 0 && (S -= 2 * Sy), 1 === a && 0 > S && (S += 2 * Sy), h.addData(u, y, _, o, s, x, S, c, a)
    }

    function ea(t) {
        if (!t) return new ry;
        for (var e, i = 0, n = 0, r = i, a = n, o = new ry, s = ry.CMD, l = t.match(Cy), u = 0; u < l.length; u++) {
            for (var h, c = l[u], d = c.charAt(0), f = c.match(Dy) || [], p = f.length, g = 0; p > g; g++) f[g] = parseFloat(f[g]);
            for (var v = 0; p > v;) {
                var m, y, _, x, w, b, S, M = i, T = n;
                switch (d) {
                    case"l":
                        i += f[v++], n += f[v++], h = s.L, o.addData(h, i, n);
                        break;
                    case"L":
                        i = f[v++], n = f[v++], h = s.L, o.addData(h, i, n);
                        break;
                    case"m":
                        i += f[v++], n += f[v++], h = s.M, o.addData(h, i, n), r = i, a = n, d = "l";
                        break;
                    case"M":
                        i = f[v++], n = f[v++], h = s.M, o.addData(h, i, n), r = i, a = n, d = "L";
                        break;
                    case"h":
                        i += f[v++], h = s.L, o.addData(h, i, n);
                        break;
                    case"H":
                        i = f[v++], h = s.L, o.addData(h, i, n);
                        break;
                    case"v":
                        n += f[v++], h = s.L, o.addData(h, i, n);
                        break;
                    case"V":
                        n = f[v++], h = s.L, o.addData(h, i, n);
                        break;
                    case"C":
                        h = s.C, o.addData(h, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]), i = f[v - 2], n = f[v - 1];
                        break;
                    case"c":
                        h = s.C, o.addData(h, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n), i += f[v - 2], n += f[v - 1];
                        break;
                    case"S":
                        m = i, y = n;
                        var I = o.len(), C = o.data;
                        e === s.C && (m += i - C[I - 4], y += n - C[I - 3]), h = s.C, M = f[v++], T = f[v++], i = f[v++], n = f[v++], o.addData(h, m, y, M, T, i, n);
                        break;
                    case"s":
                        m = i, y = n;
                        var I = o.len(), C = o.data;
                        e === s.C && (m += i - C[I - 4], y += n - C[I - 3]), h = s.C, M = i + f[v++], T = n + f[v++], i += f[v++], n += f[v++], o.addData(h, m, y, M, T, i, n);
                        break;
                    case"Q":
                        M = f[v++], T = f[v++], i = f[v++], n = f[v++], h = s.Q, o.addData(h, M, T, i, n);
                        break;
                    case"q":
                        M = f[v++] + i, T = f[v++] + n, i += f[v++], n += f[v++], h = s.Q, o.addData(h, M, T, i, n);
                        break;
                    case"T":
                        m = i, y = n;
                        var I = o.len(), C = o.data;
                        e === s.Q && (m += i - C[I - 4], y += n - C[I - 3]), i = f[v++], n = f[v++], h = s.Q, o.addData(h, m, y, i, n);
                        break;
                    case"t":
                        m = i, y = n;
                        var I = o.len(), C = o.data;
                        e === s.Q && (m += i - C[I - 4], y += n - C[I - 3]), i += f[v++], n += f[v++], h = s.Q, o.addData(h, m, y, i, n);
                        break;
                    case"A":
                        _ = f[v++], x = f[v++], w = f[v++], b = f[v++], S = f[v++], M = i, T = n, i = f[v++], n = f[v++], h = s.A, ta(M, T, i, n, b, S, _, x, w, h, o);
                        break;
                    case"a":
                        _ = f[v++], x = f[v++], w = f[v++], b = f[v++], S = f[v++], M = i, T = n, i += f[v++], n += f[v++], h = s.A, ta(M, T, i, n, b, S, _, x, w, h, o)
                }
            }
            ("z" === d || "Z" === d) && (h = s.Z, o.addData(h), i = r, n = a), e = h
        }
        return o.toStatic(), o
    }

    function ia(t, e) {
        var i = ea(t);
        return e = e || {}, e.buildPath = function (t) {
            if (t.setData) {
                t.setData(i.data);
                var e = t.getContext();
                e && t.rebuildPath(e)
            } else {
                var e = t;
                i.rebuildPath(e)
            }
        }, e.applyTransform = function (t) {
            _y(i, t), this.dirty(!0)
        }, e
    }

    function na(t, e) {
        return new Jr(ia(t, e))
    }

    function ra(t, e) {
        return Jr.extend(ia(t, e))
    }

    function aa(t, e) {
        for (var i = [], n = t.length, r = 0; n > r; r++) {
            var a = t[r];
            a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), i.push(a.path)
        }
        var o = new Jr(e);
        return o.createPathProxy(), o.buildPath = function (t) {
            t.appendPath(i);
            var e = t.getContext();
            e && t.rebuildPath(e)
        }, o
    }

    function oa(t, e, i, n, r, a, o) {
        var s = .5 * (i - t), l = .5 * (n - e);
        return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e
    }

    function sa(t, e, i) {
        var n = e.points, r = e.smooth;
        if (n && n.length >= 2) {
            if (r && "spline" !== r) {
                var a = By(n, r, i, e.smoothConstraint);
                t.moveTo(n[0][0], n[0][1]);
                for (var o = n.length, s = 0; (i ? o : o - 1) > s; s++) {
                    var l = a[2 * s], u = a[2 * s + 1], h = n[(s + 1) % o];
                    t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1])
                }
            } else {
                "spline" === r && (n = Ry(n, i)), t.moveTo(n[0][0], n[0][1]);
                for (var s = 1, c = n.length; c > s; s++) t.lineTo(n[s][0], n[s][1])
            }
            i && t.closePath()
        }
    }

    function la(t, e, i) {
        var n = i && i.lineWidth;
        if (e && n) {
            var r = e.x1, a = e.x2, o = e.y1, s = e.y2;
            Fy(2 * r) === Fy(2 * a) ? t.x1 = t.x2 = ha(r, n, !0) : (t.x1 = r, t.x2 = a), Fy(2 * o) === Fy(2 * s) ? t.y1 = t.y2 = ha(o, n, !0) : (t.y1 = o, t.y2 = s)
        }
    }

    function ua(t, e, i) {
        var n = i && i.lineWidth;
        if (e && n) {
            var r = e.x, a = e.y, o = e.width, s = e.height;
            t.x = ha(r, n, !0), t.y = ha(a, n, !0), t.width = Math.max(ha(r + o, n, !1) - t.x, 0 === o ? 0 : 1), t.height = Math.max(ha(a + s, n, !1) - t.y, 0 === s ? 0 : 1)
        }
    }

    function ha(t, e, i) {
        var n = Fy(2 * t);
        return (n + Fy(e)) % 2 === 0 ? n / 2 : (n + (i ? 1 : -1)) / 2
    }

    function ca(t, e, i) {
        var n = t.cpx2, r = t.cpy2;
        return null === n || null === r ? [(i ? Sr : br)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? Sr : br)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? Ar : Dr)(t.x1, t.cpx1, t.x2, e), (i ? Ar : Dr)(t.y1, t.cpy1, t.y2, e)]
    }

    function da(t) {
        Mn.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0
    }

    function fa(t) {
        return Jr.extend(t)
    }

    function pa(t, e) {
        return ra(t, e)
    }

    function ga(t, e) {
        s_[t] = e
    }

    function va(t) {
        return s_.hasOwnProperty(t) ? s_[t] : void 0
    }

    function ma(t, e, i, n) {
        var r = na(t, e);
        return i && ("center" === n && (i = _a(i, r.getBoundingRect())), xa(r, i)), r
    }

    function ya(t, e, i) {
        var n = new Tn({
            style: {image: t, x: e.x, y: e.y, width: e.width, height: e.height}, onload: function (t) {
                if ("center" === i) {
                    var r = {width: t.width, height: t.height};
                    n.setStyle(_a(e, r))
                }
            }
        });
        return n
    }

    function _a(t, e) {
        var i, n = e.width / e.height, r = t.height * n;
        r <= t.width ? i = t.height : (r = t.width, i = r / n);
        var a = t.x + t.width / 2, o = t.y + t.height / 2;
        return {x: a - r / 2, y: o - i / 2, width: r, height: i}
    }

    function xa(t, e) {
        if (t.applyTransform) {
            var i = t.getBoundingRect(), n = i.calculateTransform(e);
            t.applyTransform(n)
        }
    }

    function wa(t) {
        return la(t.shape, t.shape, t.style), t
    }

    function ba(t) {
        return ua(t.shape, t.shape, t.style), t
    }

    function Sa(t) {
        return null != t && "none" !== t
    }

    function Ma(t) {
        if ("string" != typeof t) return t;
        var e = h_.get(t);
        return e || (e = ti(t, -.1), 1e4 > c_ && (h_.set(t, e), c_++)), e
    }

    function Ta(t) {
        if (t.__hoverStlDirty) {
            t.__hoverStlDirty = !1;
            var e = t.__hoverStl;
            if (!e) return void (t.__cachedNormalStl = t.__cachedNormalZ2 = null);
            var i = t.__cachedNormalStl = {};
            t.__cachedNormalZ2 = t.z2;
            var n = t.style;
            for (var r in e) null != e[r] && (i[r] = n[r]);
            i.fill = n.fill, i.stroke = n.stroke
        }
    }

    function Ia(t) {
        var e = t.__hoverStl;
        if (e && !t.__highlighted) {
            var i = t.__zr, n = t.useHoverLayer && i && "canvas" === i.painter.type;
            if (t.__highlighted = n ? "layer" : "plain", !(t.isGroup || !i && t.useHoverLayer)) {
                var r = t, a = t.style;
                n && (r = i.addHover(t), a = r.style), ja(a), n || Ta(r), a.extendFrom(e), Ca(a, e, "fill"), Ca(a, e, "stroke"), qa(a), n || (t.dirty(!1), t.z2 += e_)
            }
        }
    }

    function Ca(t, e, i) {
        !Sa(e[i]) && Sa(t[i]) && (t[i] = Ma(t[i]))
    }

    function Da(t) {
        var e = t.__highlighted;
        if (e && (t.__highlighted = !1, !t.isGroup)) if ("layer" === e) t.__zr && t.__zr.removeHover(t); else {
            var i = t.style, n = t.__cachedNormalStl;
            n && (ja(i), t.setStyle(n), qa(i));
            var r = t.__cachedNormalZ2;
            null != r && t.z2 - r === e_ && (t.z2 = r)
        }
    }

    function Aa(t, e, i) {
        var n, r = r_, a = r_;
        t.__highlighted && (r = n_, n = !0), e(t, i), t.__highlighted && (a = n_, n = !0), t.isGroup && t.traverse(function (t) {
            !t.isGroup && e(t, i)
        }), n && t.__highDownOnUpdate && t.__highDownOnUpdate(r, a)
    }

    function ka(t, e) {
        e = t.__hoverStl = e !== !1 && (t.hoverStyle || e || {}), t.__hoverStlDirty = !0, t.__highlighted && (t.__cachedNormalStl = null, Da(t), Ia(t))
    }

    function La(t) {
        !Ra(this, t) && !this.__highByOuter && Aa(this, Ia)
    }

    function Pa(t) {
        !Ra(this, t) && !this.__highByOuter && Aa(this, Da)
    }

    function Oa(t) {
        this.__highByOuter |= 1 << (t || 0), Aa(this, Ia)
    }

    function za(t) {
        !(this.__highByOuter &= ~(1 << (t || 0))) && Aa(this, Da)
    }

    function Ra(t, e) {
        return t.__highDownSilentOnTouch && e.zrByTouch
    }

    function Ba(t, e) {
        Ea(t, !0), Aa(t, ka, e)
    }

    function Ea(t, e) {
        var i = e === !1;
        if (t.__highDownSilentOnTouch = t.highDownSilentOnTouch, t.__highDownOnUpdate = t.highDownOnUpdate, !i || t.__highDownDispatcher) {
            var n = i ? "off" : "on";
            t[n]("mouseover", La)[n]("mouseout", Pa), t[n]("emphasis", Oa)[n]("normal", za), t.__highByOuter = t.__highByOuter || 0, t.__highDownDispatcher = !i
        }
    }

    function Na(t) {
        return !(!t || !t.__highDownDispatcher)
    }

    function Fa(t) {
        var e = o_[t];
        return null == e && 32 >= a_ && (e = o_[t] = a_++), e
    }

    function Va(t, e, i, n, r, a, o) {
        r = r || t_;
        var s, l = r.labelFetcher, u = r.labelDataIndex, h = r.labelDimIndex, c = i.getShallow("show"),
            d = n.getShallow("show");
        (c || d) && (l && (s = l.getFormattedLabel(u, "normal", null, h)), null == s && (s = w(r.defaultText) ? r.defaultText(u, r) : r.defaultText));
        var f = c ? s : null, p = d ? A(l ? l.getFormattedLabel(u, "emphasis", null, h) : null, s) : null;
        (null != f || null != p) && (Ga(t, i, a, r), Ga(e, n, o, r, !0)), t.text = f, e.text = p
    }

    function Ha(t, e, i) {
        var n = t.style;
        e && (ja(n), t.setStyle(e), qa(n)), n = t.__hoverStl, i && n && (ja(n), o(n, i), qa(n))
    }

    function Ga(t, e, i, n, r) {
        return Xa(t, e, n, r), i && o(t, i), t
    }

    function Wa(t, e, i) {
        var n, r = {isRectText: !0};
        i === !1 ? n = !0 : r.autoColor = i, Xa(t, e, r, n)
    }

    function Xa(t, e, i, n) {
        if (i = i || t_, i.isRectText) {
            var r;
            i.getTextPosition ? r = i.getTextPosition(e, n) : (r = e.getShallow("position") || (n ? null : "inside"), "outside" === r && (r = "top")), t.textPosition = r, t.textOffset = e.getShallow("offset");
            var a = e.getShallow("rotate");
            null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = A(e.getShallow("distance"), n ? null : 5)
        }
        var o, s = e.ecModel, l = s && s.option.textStyle, u = Ya(e);
        if (u) {
            o = {};
            for (var h in u) if (u.hasOwnProperty(h)) {
                var c = e.getModel(["rich", h]);
                Ua(o[h] = {}, c, l, i, n)
            }
        }
        return t.rich = o, Ua(t, e, l, i, n, !0), i.forceRich && !i.textStyle && (i.textStyle = {}), t
    }

    function Ya(t) {
        for (var e; t && t !== t.ecModel;) {
            var i = (t.option || t_).rich;
            if (i) {
                e = e || {};
                for (var n in i) i.hasOwnProperty(n) && (e[n] = 1)
            }
            t = t.parentModel
        }
        return e
    }

    function Ua(t, e, i, n, r, a) {
        i = !r && i || t_, t.textFill = Za(e.getShallow("color"), n) || i.color, t.textStroke = Za(e.getShallow("textBorderColor"), n) || i.textBorderColor, t.textStrokeWidth = A(e.getShallow("textBorderWidth"), i.textBorderWidth), r || (a && (t.insideRollbackOpt = n, qa(t)), null == t.textFill && (t.textFill = n.autoColor)), t.fontStyle = e.getShallow("fontStyle") || i.fontStyle, t.fontWeight = e.getShallow("fontWeight") || i.fontWeight, t.fontSize = e.getShallow("fontSize") || i.fontSize, t.fontFamily = e.getShallow("fontFamily") || i.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && n.disableBox || (t.textBackgroundColor = Za(e.getShallow("backgroundColor"), n), t.textPadding = e.getShallow("padding"), t.textBorderColor = Za(e.getShallow("borderColor"), n), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || i.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || i.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || i.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || i.textShadowOffsetY
    }

    function Za(t, e) {
        return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
    }

    function qa(t) {
        var e, i = t.textPosition, n = t.insideRollbackOpt;
        if (n && null == t.textFill) {
            var r = n.autoColor, a = n.isRectText, o = n.useInsideStyle,
                s = o !== !1 && (o === !0 || a && i && "string" == typeof i && i.indexOf("inside") >= 0),
                l = !s && null != r;
            (s || l) && (e = {
                textFill: t.textFill,
                textStroke: t.textStroke,
                textStrokeWidth: t.textStrokeWidth
            }), s && (t.textFill = "#fff", null == t.textStroke && (t.textStroke = r, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), l && (t.textFill = r)
        }
        t.insideRollback = e
    }

    function ja(t) {
        var e = t.insideRollback;
        e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null)
    }

    function Ka(t, e) {
        var i = e && e.getModel("textStyle");
        return z([t.fontStyle || i && i.getShallow("fontStyle") || "", t.fontWeight || i && i.getShallow("fontWeight") || "", (t.fontSize || i && i.getShallow("fontSize") || 12) + "px", t.fontFamily || i && i.getShallow("fontFamily") || "sans-serif"].join(" "))
    }

    function $a(t, e, i, n, r, a) {
        "function" == typeof r && (a = r, r = null);
        var o = n && n.isAnimationEnabled();
        if (o) {
            var s = t ? "Update" : "", l = n.getShallow("animationDuration" + s),
                u = n.getShallow("animationEasing" + s), h = n.getShallow("animationDelay" + s);
            "function" == typeof h && (h = h(r, n.getAnimationDelayParams ? n.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(i, l, h || 0, u, a, !!a) : (e.stopAnimation(), e.attr(i), a && a())
        } else e.stopAnimation(), e.attr(i), a && a()
    }

    function Qa(t, e, i, n, r) {
        $a(!0, t, e, i, n, r)
    }

    function Ja(t, e, i, n, r) {
        $a(!1, t, e, i, n, r)
    }

    function to(t, e) {
        for (var i = Le([]); t && t !== e;) Oe(i, t.getLocalTransform(), i), t = t.parent;
        return i
    }

    function eo(t, e, i) {
        return e && !d(e) && (e = Fg.getLocalTransform(e)), i && (e = Ee([], e)), ae([], t, e)
    }

    function io(t, e, i) {
        var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
            r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
            a = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -r : "bottom" === t ? r : 0];
        return a = eo(a, e, i), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
    }

    function no(t, e, i) {
        function n(t) {
            var e = {};
            return t.traverse(function (t) {
                !t.isGroup && t.anid && (e[t.anid] = t)
            }), e
        }

        function r(t) {
            var e = {position: W(t.position), rotation: t.rotation};
            return t.shape && (e.shape = o({}, t.shape)), e
        }

        if (t && e) {
            var a = n(t);
            e.traverse(function (t) {
                if (!t.isGroup && t.anid) {
                    var e = a[t.anid];
                    if (e) {
                        var n = r(t);
                        t.attr(r(e)), Qa(t, n, i, t.dataIndex)
                    }
                }
            })
        }
    }

    function ro(t, e) {
        return p(t, function (t) {
            var i = t[0];
            i = Qy(i, e.x), i = Jy(i, e.x + e.width);
            var n = t[1];
            return n = Qy(n, e.y), n = Jy(n, e.y + e.height), [i, n]
        })
    }

    function ao(t, e) {
        var i = Qy(t.x, e.x), n = Jy(t.x + t.width, e.x + e.width), r = Qy(t.y, e.y),
            a = Jy(t.y + t.height, e.y + e.height);
        return n >= i && a >= r ? {x: i, y: r, width: n - i, height: a - r} : void 0
    }

    function oo(t, e, i) {
        e = o({rectHover: !0}, e);
        var n = e.style = {strokeNoScale: !0};
        return i = i || {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }, t ? 0 === t.indexOf("image://") ? (n.image = t.slice(8), s(n, i), new Tn(e)) : ma(t.replace("path://", ""), e, i, "center") : void 0
    }

    function so(t, e, i, n, r) {
        for (var a = 0, o = r[r.length - 1]; a < r.length; a++) {
            var s = r[a];
            if (lo(t, e, i, n, s[0], s[1], o[0], o[1])) return !0;
            o = s
        }
    }

    function lo(t, e, i, n, r, a, o, s) {
        var l = i - t, u = n - e, h = o - r, c = s - a, d = uo(h, c, l, u);
        if (ho(d)) return !1;
        var f = t - r, p = e - a, g = uo(f, p, l, u) / d;
        if (0 > g || g > 1) return !1;
        var v = uo(f, p, h, c) / d;
        return 0 > v || v > 1 ? !1 : !0
    }

    function uo(t, e, i, n) {
        return t * n - i * e
    }

    function ho(t) {
        return 1e-6 >= t && t >= -1e-6
    }

    function co(t, e, i) {
        this.parentModel = e, this.ecModel = i, this.option = t
    }

    function fo(t, e, i) {
        for (var n = 0; n < e.length && (!e[n] || (t = t && "object" == typeof t ? t[e[n]] : null, null != t)); n++) ;
        return null == t && i && (t = i.get(e)), t
    }

    function po(t, e) {
        var i = y_(t).getParent;
        return i ? i.call(t, e) : t.parentModel
    }

    function go(t) {
        return [t || "", __++, Math.random().toFixed(5)].join("_")
    }

    function vo(t) {
        var e = {};
        return t.registerSubTypeDefaulter = function (t, i) {
            t = fr(t), e[t.main] = i
        }, t.determineSubType = function (i, n) {
            var r = n.type;
            if (!r) {
                var a = fr(i).main;
                t.hasSubTypes(i) && e[a] && (r = e[a](n))
            }
            return r
        }, t
    }

    function mo(t, e) {
        function i(t) {
            var i = {}, a = [];
            return f(t, function (o) {
                var s = n(i, o), l = s.originalDeps = e(o), h = r(l, t);
                s.entryCount = h.length, 0 === s.entryCount && a.push(o), f(h, function (t) {
                    u(s.predecessor, t) < 0 && s.predecessor.push(t);
                    var e = n(i, t);
                    u(e.successor, t) < 0 && e.successor.push(o)
                })
            }), {graph: i, noEntryList: a}
        }

        function n(t, e) {
            return t[e] || (t[e] = {predecessor: [], successor: []}), t[e]
        }

        function r(t, e) {
            var i = [];
            return f(t, function (t) {
                u(e, t) >= 0 && i.push(t)
            }), i
        }

        t.topologicalTravel = function (t, e, n, r) {
            function a(t) {
                l[t].entryCount--, 0 === l[t].entryCount && u.push(t)
            }

            function o(t) {
                h[t] = !0, a(t)
            }

            if (t.length) {
                var s = i(e), l = s.graph, u = s.noEntryList, h = {};
                for (f(t, function (t) {
                    h[t] = !0
                }); u.length;) {
                    var c = u.pop(), d = l[c], p = !!h[c];
                    p && (n.call(r, c, d.originalDeps.slice()), delete h[c]), f(d.successor, p ? o : a)
                }
                f(h, function () {
                    throw new Error("Circle dependency may exists")
                })
            }
        }
    }

    function yo(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }

    function _o(t, e, i, n) {
        var r = e[1] - e[0], a = i[1] - i[0];
        if (0 === r) return 0 === a ? i[0] : (i[0] + i[1]) / 2;
        if (n) if (r > 0) {
            if (t <= e[0]) return i[0];
            if (t >= e[1]) return i[1]
        } else {
            if (t >= e[0]) return i[0];
            if (t <= e[1]) return i[1]
        } else {
            if (t === e[0]) return i[0];
            if (t === e[1]) return i[1]
        }
        return (t - e[0]) / r * a + i[0]
    }

    function xo(t, e) {
        switch (t) {
            case"center":
            case"middle":
                t = "50%";
                break;
            case"left":
            case"top":
                t = "0%";
                break;
            case"right":
            case"bottom":
                t = "100%"
        }
        return "string" == typeof t ? yo(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t
    }

    function wo(t, e, i) {
        return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), i ? t : +t
    }

    function bo(t) {
        return t.sort(function (t, e) {
            return t - e
        }), t
    }

    function So(t) {
        if (t = +t, isNaN(t)) return 0;
        for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;
        return i
    }

    function Mo(t) {
        var e = t.toString(), i = e.indexOf("e");
        if (i > 0) {
            var n = +e.slice(i + 1);
            return 0 > n ? -n : 0
        }
        var r = e.indexOf(".");
        return 0 > r ? 0 : e.length - 1 - r
    }

    function To(t, e) {
        var i = Math.log, n = Math.LN10, r = Math.floor(i(t[1] - t[0]) / n),
            a = Math.round(i(Math.abs(e[1] - e[0])) / n), o = Math.min(Math.max(-r + a, 0), 20);
        return isFinite(o) ? o : 20
    }

    function Io(t, e, i) {
        if (!t[e]) return 0;
        var n = g(t, function (t, e) {
            return t + (isNaN(e) ? 0 : e)
        }, 0);
        if (0 === n) return 0;
        for (var r = Math.pow(10, i), a = p(t, function (t) {
            return (isNaN(t) ? 0 : t) / n * r * 100
        }), o = 100 * r, s = p(a, function (t) {
            return Math.floor(t)
        }), l = g(s, function (t, e) {
            return t + e
        }, 0), u = p(a, function (t, e) {
            return t - s[e]
        }); o > l;) {
            for (var h = Number.NEGATIVE_INFINITY, c = null, d = 0, f = u.length; f > d; ++d) u[d] > h && (h = u[d], c = d);
            ++s[c], u[c] = 0, ++l
        }
        return s[e] / r
    }

    function Co(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e
    }

    function Do(t) {
        return t > -x_ && x_ > t
    }

    function Ao(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = b_.exec(t);
            if (!e) return new Date(0 / 0);
            if (e[8]) {
                var i = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (i -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, i, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
            }
            return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
        }
        return new Date(null == t ? 0 / 0 : Math.round(t))
    }

    function ko(t) {
        return Math.pow(10, Lo(t))
    }

    function Lo(t) {
        if (0 === t) return 0;
        var e = Math.floor(Math.log(t) / Math.LN10);
        return t / Math.pow(10, e) >= 10 && e++, e
    }

    function Po(t, e) {
        var i, n = Lo(t), r = Math.pow(10, n), a = t / r;
        return i = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, t = i * r, n >= -20 ? +t.toFixed(0 > n ? -n : 0) : t
    }

    function Oo(t, e) {
        var i = (t.length - 1) * e + 1, n = Math.floor(i), r = +t[n - 1], a = i - n;
        return a ? r + a * (t[n] - r) : r
    }

    function zo(t) {
        function e(t, i, n) {
            return t.interval[n] < i.interval[n] || t.interval[n] === i.interval[n] && (t.close[n] - i.close[n] === (n ? -1 : 1) || !n && e(t, i, 1))
        }

        t.sort(function (t, i) {
            return e(t, i, 0) ? -1 : 1
        });
        for (var i = -1 / 0, n = 1, r = 0; r < t.length;) {
            for (var a = t[r].interval, o = t[r].close, s = 0; 2 > s; s++) a[s] <= i && (a[s] = i, o[s] = s ? 1 : 1 - n), i = a[s], n = o[s];
            a[0] === a[1] && o[0] * o[1] !== 1 ? t.splice(r, 1) : r++
        }
        return t
    }

    function Ro(t) {
        return t - parseFloat(t) >= 0
    }

    function Bo(t) {
        return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
    }

    function Eo(t, e) {
        return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
            return e.toUpperCase()
        }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
    }

    function No(t) {
        return null == t ? "" : (t + "").replace(T_, function (t, e) {
            return I_[e]
        })
    }

    function Fo(t, e, i) {
        x(e) || (e = [e]);
        var n = e.length;
        if (!n) return "";
        for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
            var o = C_[a];
            t = t.replace(D_(o), D_(o, 0))
        }
        for (var s = 0; n > s; s++) for (var l = 0; l < r.length; l++) {
            var u = e[s][r[l]];
            t = t.replace(D_(C_[l], s), i ? No(u) : u)
        }
        return t
    }

    function Vo(t, e, i) {
        return f(e, function (e, n) {
            t = t.replace("{" + n + "}", i ? No(e) : e)
        }), t
    }

    function Ho(t, e) {
        t = b(t) ? {color: t, extraCssText: e} : t || {};
        var i = t.color, n = t.type, e = t.extraCssText, r = t.renderMode || "html", a = t.markerId || "X";
        return i ? "html" === r ? "subItem" === n ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + No(i) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + No(i) + ";" + (e || "") + '"></span>' : {
            renderMode: r,
            content: "{marker" + a + "|}  ",
            style: {color: i}
        } : ""
    }

    function Go(t, e) {
        return t += "", "0000".substr(0, e - t.length) + t
    }

    function Wo(t, e, i) {
        ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
        var n = Ao(e), r = i ? "UTC" : "", a = n["get" + r + "FullYear"](), o = n["get" + r + "Month"]() + 1,
            s = n["get" + r + "Date"](), l = n["get" + r + "Hours"](), u = n["get" + r + "Minutes"](),
            h = n["get" + r + "Seconds"](), c = n["get" + r + "Milliseconds"]();
        return t = t.replace("MM", Go(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", Go(s, 2)).replace("d", s).replace("hh", Go(l, 2)).replace("h", l).replace("mm", Go(u, 2)).replace("m", u).replace("ss", Go(h, 2)).replace("s", h).replace("SSS", Go(c, 3))
    }

    function Xo(t) {
        return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
    }

    function Yo(t) {
        return Gi(t.text, t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich, t.truncate)
    }

    function Uo(t, e, i, n, r, a, o, s) {
        return Gi(t, e, i, n, r, s, a, o)
    }

    function Zo(t, e, i, n, r) {
        var a = 0, o = 0;
        null == n && (n = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function (l, u) {
            var h, c, d = l.position, f = l.getBoundingRect(), p = e.childAt(u + 1), g = p && p.getBoundingRect();
            if ("horizontal" === t) {
                var v = f.width + (g ? -g.x + f.x : 0);
                h = a + v, h > n || l.newline ? (a = 0, h = v, o += s + i, s = f.height) : s = Math.max(s, f.height)
            } else {
                var m = f.height + (g ? -g.y + f.y : 0);
                c = o + m, c > r || l.newline ? (a += s + i, o = 0, c = m, s = f.width) : s = Math.max(s, f.width)
            }
            l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = h + i : o = c + i)
        })
    }

    function qo(t, e, i) {
        i = M_(i || 0);
        var n = e.width, r = e.height, a = xo(t.left, n), o = xo(t.top, r), s = xo(t.right, n), l = xo(t.bottom, r),
            u = xo(t.width, n), h = xo(t.height, r), c = i[2] + i[0], d = i[1] + i[3], f = t.aspect;
        switch (isNaN(u) && (u = n - s - d - a), isNaN(h) && (h = r - l - c - o), null != f && (isNaN(u) && isNaN(h) && (f > n / r ? u = .8 * n : h = .8 * r), isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)), isNaN(a) && (a = n - s - u - d), isNaN(o) && (o = r - l - h - c), t.left || t.right) {
            case"center":
                a = n / 2 - u / 2 - i[3];
                break;
            case"right":
                a = n - u - d
        }
        switch (t.top || t.bottom) {
            case"middle":
            case"center":
                o = r / 2 - h / 2 - i[0];
                break;
            case"bottom":
                o = r - h - c
        }
        a = a || 0, o = o || 0, isNaN(u) && (u = n - d - a - (s || 0)), isNaN(h) && (h = r - c - o - (l || 0));
        var p = new Si(a + i[3], o + i[0], u, h);
        return p.margin = i, p
    }

    function jo(t, e, i, n, r) {
        var a = !r || !r.hv || r.hv[0], o = !r || !r.hv || r.hv[1], l = r && r.boundingMode || "all";
        if (a || o) {
            var u;
            if ("raw" === l) u = "group" === t.type ? new Si(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect(); else if (u = t.getBoundingRect(), t.needLocalTransform()) {
                var h = t.getLocalTransform();
                u = u.clone(), u.applyTransform(h)
            }
            e = qo(s({width: u.width, height: u.height}, e), i, n);
            var c = t.position, d = a ? e.x - u.x : 0, f = o ? e.y - u.y : 0;
            t.attr("position", "raw" === l ? [d, f] : [c[0] + d, c[1] + f])
        }
    }

    function Ko(t, e, i) {
        function n(i, n) {
            var o = {}, l = 0, u = {}, h = 0, c = 2;
            if (L_(i, function (e) {
                u[e] = t[e]
            }), L_(i, function (t) {
                r(e, t) && (o[t] = u[t] = e[t]), a(o, t) && l++, a(u, t) && h++
            }), s[n]) return a(e, i[1]) ? u[i[2]] = null : a(e, i[2]) && (u[i[1]] = null), u;
            if (h !== c && l) {
                if (l >= c) return o;
                for (var d = 0; d < i.length; d++) {
                    var f = i[d];
                    if (!r(o, f) && r(t, f)) {
                        o[f] = t[f];
                        break
                    }
                }
                return o
            }
            return u
        }

        function r(t, e) {
            return t.hasOwnProperty(e)
        }

        function a(t, e) {
            return null != t[e] && "auto" !== t[e]
        }

        function o(t, e, i) {
            L_(t, function (t) {
                e[t] = i[t]
            })
        }

        !S(i) && (i = {});
        var s = i.ignoreSize;
        !x(s) && (s = [s, s]);
        var l = n(O_[0], 0), u = n(O_[1], 1);
        o(O_[0], t, l), o(O_[1], t, u)
    }

    function $o(t) {
        return Qo({}, t)
    }

    function Qo(t, e) {
        return e && t && L_(P_, function (i) {
            e.hasOwnProperty(i) && (t[i] = e[i])
        }), t
    }

    function Jo(t) {
        var e = [];
        return f(E_.getClassesByMainType(t), function (t) {
            e = e.concat(t.prototype.dependencies || [])
        }), e = p(e, function (t) {
            return fr(t).main
        }), "dataset" !== t && u(e, "dataset") <= 0 && e.unshift("dataset"), e
    }

    function ts(t, e) {
        for (var i = t.length, n = 0; i > n; n++) if (t[n].length > e) return t[n];
        return t[i - 1]
    }

    function es(t) {
        this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === Y_ ? {} : []), this.sourceFormat = t.sourceFormat || U_, this.seriesLayoutBy = t.seriesLayoutBy || q_, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && N(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount
    }

    function is(t) {
        var e = t.option.source, i = U_;
        if (T(e)) i = Z_; else if (x(e)) {
            0 === e.length && (i = W_);
            for (var n = 0, r = e.length; r > n; n++) {
                var a = e[n];
                if (null != a) {
                    if (x(a)) {
                        i = W_;
                        break
                    }
                    if (S(a)) {
                        i = X_;
                        break
                    }
                }
            }
        } else if (S(e)) {
            for (var o in e) if (e.hasOwnProperty(o) && d(e[o])) {
                i = Y_;
                break
            }
        } else if (null != e) throw new Error("Invalid data");
        $_(t).sourceFormat = i
    }

    function ns(t) {
        return $_(t).source
    }

    function rs(t) {
        $_(t).datasetMap = N()
    }

    function as(t) {
        var e = t.option, i = e.data, n = T(i) ? Z_ : G_, r = !1, a = e.seriesLayoutBy, o = e.sourceHeader,
            s = e.dimensions, l = ds(t);
        if (l) {
            var u = l.option;
            i = u.source, n = $_(l).sourceFormat, r = !0, a = a || u.seriesLayoutBy, null == o && (o = u.sourceHeader), s = s || u.dimensions
        }
        var h = os(i, n, a, o, s);
        $_(t).source = new es({
            data: i,
            fromDataset: r,
            seriesLayoutBy: a,
            sourceFormat: n,
            dimensionsDefine: h.dimensionsDefine,
            startIndex: h.startIndex,
            dimensionsDetectCount: h.dimensionsDetectCount,
            encodeDefine: e.encode
        })
    }

    function os(t, e, i, n, r) {
        if (!t) return {dimensionsDefine: ss(r)};
        var a, o;
        if (e === W_) "auto" === n || null == n ? ls(function (t) {
            null != t && "-" !== t && (b(t) ? null == o && (o = 1) : o = 0)
        }, i, t, 10) : o = n ? 1 : 0, r || 1 !== o || (r = [], ls(function (t, e) {
            r[e] = null != t ? t : ""
        }, i, t)), a = r ? r.length : i === j_ ? t.length : t[0] ? t[0].length : null; else if (e === X_) r || (r = us(t)); else if (e === Y_) r || (r = [], f(t, function (t, e) {
            r.push(e)
        })); else if (e === G_) {
            var s = Jn(t[0]);
            a = x(s) && s.length || 1
        }
        return {startIndex: o, dimensionsDefine: ss(r), dimensionsDetectCount: a}
    }

    function ss(t) {
        if (t) {
            var e = N();
            return p(t, function (t) {
                if (t = o({}, S(t) ? t : {name: t}), null == t.name) return t;
                t.name += "", null == t.displayName && (t.displayName = t.name);
                var i = e.get(t.name);
                return i ? t.name += "-" + i.count++ : e.set(t.name, {count: 1}), t
            })
        }
    }

    function ls(t, e, i, n) {
        if (null == n && (n = 1 / 0), e === j_) for (var r = 0; r < i.length && n > r; r++) t(i[r] ? i[r][0] : null, r); else for (var a = i[0] || [], r = 0; r < a.length && n > r; r++) t(a[r], r)
    }

    function us(t) {
        for (var e, i = 0; i < t.length && !(e = t[i++]);) ;
        if (e) {
            var n = [];
            return f(e, function (t, e) {
                n.push(e)
            }), n
        }
    }

    function hs(t, e, i) {
        function n(t, e, i) {
            for (var n = 0; i > n; n++) t.push(e + n)
        }

        function r(t) {
            var e = t.dimsDef;
            return e ? e.length : 1
        }

        var a = {}, o = ds(e);
        if (!o || !t) return a;
        var s, l, u = [], h = [], c = e.ecModel, d = $_(c).datasetMap, p = o.uid + "_" + i.seriesLayoutBy;
        t = t.slice(), f(t, function (e, i) {
            !S(e) && (t[i] = {name: e}), "ordinal" === e.type && null == s && (s = i, l = r(t[i])), a[e.name] = []
        });
        var g = d.get(p) || d.set(p, {categoryWayDim: l, valueWayDim: 0});
        return f(t, function (t, e) {
            var i = t.name, o = r(t);
            if (null == s) {
                var l = g.valueWayDim;
                n(a[i], l, o), n(h, l, o), g.valueWayDim += o
            } else if (s === e) n(a[i], 0, o), n(u, 0, o); else {
                var l = g.categoryWayDim;
                n(a[i], l, o), n(h, l, o), g.categoryWayDim += o
            }
        }), u.length && (a.itemName = u), h.length && (a.seriesName = h), a
    }

    function cs(t, e, i) {
        var n = {}, r = ds(t);
        if (!r) return n;
        var a, o = e.sourceFormat, s = e.dimensionsDefine;
        (o === X_ || o === Y_) && f(s, function (t, e) {
            "name" === (S(t) ? t.name : t) && (a = e)
        });
        var l = function () {
            function t(t) {
                return null != t.v && null != t.n
            }

            for (var n = {}, r = {}, l = [], u = 0, h = Math.min(5, i); h > u; u++) {
                var c = ps(e.data, o, e.seriesLayoutBy, s, e.startIndex, u);
                l.push(c);
                var d = c === K_.Not;
                if (d && null == n.v && u !== a && (n.v = u), (null == n.n || n.n === n.v || !d && l[n.n] === K_.Not) && (n.n = u), t(n) && l[n.n] !== K_.Not) return n;
                d || (c === K_.Might && null == r.v && u !== a && (r.v = u), (null == r.n || r.n === r.v) && (r.n = u))
            }
            return t(n) ? n : t(r) ? r : null
        }();
        if (l) {
            n.value = l.v;
            var u = null != a ? a : l.n;
            n.itemName = [u], n.seriesName = [u]
        }
        return n
    }

    function ds(t) {
        var e = t.option, i = e.data;
        return i ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0)
    }

    function fs(t, e) {
        return ps(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
    }

    function ps(t, e, i, n, r, a) {
        function o(t) {
            var e = b(t);
            return null != t && isFinite(t) && "" !== t ? e ? K_.Might : K_.Not : e && "-" !== t ? K_.Must : void 0
        }

        var s, l = 5;
        if (T(t)) return K_.Not;
        var u, h;
        if (n) {
            var c = n[a];
            S(c) ? (u = c.name, h = c.type) : b(c) && (u = c)
        }
        if (null != h) return "ordinal" === h ? K_.Must : K_.Not;
        if (e === W_) if (i === j_) {
            for (var d = t[a], f = 0; f < (d || []).length && l > f; f++) if (null != (s = o(d[r + f]))) return s
        } else for (var f = 0; f < t.length && l > f; f++) {
            var p = t[r + f];
            if (p && null != (s = o(p[a]))) return s
        } else if (e === X_) {
            if (!u) return K_.Not;
            for (var f = 0; f < t.length && l > f; f++) {
                var g = t[f];
                if (g && null != (s = o(g[u]))) return s
            }
        } else if (e === Y_) {
            if (!u) return K_.Not;
            var d = t[u];
            if (!d || T(d)) return K_.Not;
            for (var f = 0; f < d.length && l > f; f++) if (null != (s = o(d[f]))) return s
        } else if (e === G_) for (var f = 0; f < t.length && l > f; f++) {
            var g = t[f], v = Jn(g);
            if (!x(v)) return K_.Not;
            if (null != (s = o(v[a]))) return s
        }
        return K_.Not
    }

    function gs(t, e) {
        if (e) {
            var i = e.seiresIndex, n = e.seriesId, r = e.seriesName;
            return null != i && t.componentIndex !== i || null != n && t.id !== n || null != r && t.name !== r
        }
    }

    function vs(t, e) {
        var i = t.color && !t.colorLayer;
        f(e, function (e, a) {
            "colorLayer" === a && i || E_.hasClass(a) || ("object" == typeof e ? t[a] = t[a] ? r(t[a], e, !1) : n(e) : null == t[a] && (t[a] = e))
        })
    }

    function ms(t) {
        t = t, this.option = {}, this.option[Q_] = 1, this._componentsMap = N({series: []}), this._seriesIndices, this._seriesIndicesMap, vs(t, this._theme.option), r(t, F_, !1), this.mergeOption(t)
    }

    function ys(t, e) {
        x(e) || (e = e ? [e] : []);
        var i = {};
        return f(e, function (e) {
            i[e] = (t.get(e) || []).slice()
        }), i
    }

    function _s(t, e, i) {
        var n = e.type ? e.type : i ? i.subType : E_.determineSubType(t, e);
        return n
    }

    function xs(t, e) {
        t._seriesIndicesMap = N(t._seriesIndices = p(e, function (t) {
            return t.componentIndex
        }) || [])
    }

    function ws(t, e) {
        return e.hasOwnProperty("subType") ? v(t, function (t) {
            return t.subType === e.subType
        }) : t
    }

    function bs(t) {
        f(tx, function (e) {
            this[e] = y(t[e], t)
        }, this)
    }

    function Ss() {
        this._coordinateSystems = []
    }

    function Ms(t) {
        this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
    }

    function Ts(t, e, i) {
        var n, r, a = [], o = [], s = t.timeline;
        if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
            r = r || {};
            var l = t.media;
            ix(l, function (t) {
                t && t.option && (t.query ? o.push(t) : n || (n = t))
            })
        }
        return r || (r = t), r.timeline || (r.timeline = s), ix([r].concat(a).concat(p(o, function (t) {
            return t.option
        })), function (t) {
            ix(e, function (e) {
                e(t, i)
            })
        }), {baseOption: r, timelineOptions: a, mediaDefault: n, mediaList: o}
    }

    function Is(t, e, i) {
        var n = {width: e, height: i, aspectratio: e / i}, r = !0;
        return f(t, function (t, e) {
            var i = e.match(ox);
            if (i && i[1] && i[2]) {
                var a = i[1], o = i[2].toLowerCase();
                Cs(n[o], t, a) || (r = !1)
            }
        }), r
    }

    function Cs(t, e, i) {
        return "min" === i ? t >= e : "max" === i ? e >= t : t === e
    }

    function Ds(t, e) {
        return t.join(",") === e.join(",")
    }

    function As(t, e) {
        e = e || {}, ix(e, function (e, i) {
            if (null != e) {
                var n = t[i];
                if (E_.hasClass(i)) {
                    e = $n(e), n = $n(n);
                    var r = er(n, e);
                    t[i] = rx(r, function (t) {
                        return t.option && t.exist ? ax(t.exist, t.option, !0) : t.exist || t.option
                    })
                } else t[i] = ax(n, e, !0)
            }
        })
    }

    function ks(t) {
        var e = t && t.itemStyle;
        if (e) for (var i = 0, n = ux.length; n > i; i++) {
            var a = ux[i], o = e.normal, s = e.emphasis;
            o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null)
        }
    }

    function Ls(t, e, i) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var n = t[e].normal, r = t[e].emphasis;
            n && (i ? (t[e].normal = t[e].emphasis = null, s(t[e], n)) : t[e] = n), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r)
        }
    }

    function Ps(t) {
        Ls(t, "itemStyle"), Ls(t, "lineStyle"), Ls(t, "areaStyle"), Ls(t, "label"), Ls(t, "labelLine"), Ls(t, "upperLabel"), Ls(t, "edgeLabel")
    }

    function Os(t, e) {
        var i = lx(t) && t[e], n = lx(i) && i.textStyle;
        if (n) for (var r = 0, a = mm.length; a > r; r++) {
            var e = mm[r];
            n.hasOwnProperty(e) && (i[e] = n[e])
        }
    }

    function zs(t) {
        t && (Ps(t), Os(t, "label"), t.emphasis && Os(t.emphasis, "label"))
    }

    function Rs(t) {
        if (lx(t)) {
            ks(t), Ps(t), Os(t, "label"), Os(t, "upperLabel"), Os(t, "edgeLabel"), t.emphasis && (Os(t.emphasis, "label"), Os(t.emphasis, "upperLabel"), Os(t.emphasis, "edgeLabel"));
            var e = t.markPoint;
            e && (ks(e), zs(e));
            var i = t.markLine;
            i && (ks(i), zs(i));
            var n = t.markArea;
            n && zs(n);
            var r = t.data;
            if ("graph" === t.type) {
                r = r || t.nodes;
                var a = t.links || t.edges;
                if (a && !T(a)) for (var o = 0; o < a.length; o++) zs(a[o]);
                f(t.categories, function (t) {
                    Ps(t)
                })
            }
            if (r && !T(r)) for (var o = 0; o < r.length; o++) zs(r[o]);
            var e = t.markPoint;
            if (e && e.data) for (var s = e.data, o = 0; o < s.length; o++) zs(s[o]);
            var i = t.markLine;
            if (i && i.data) for (var l = i.data, o = 0; o < l.length; o++) x(l[o]) ? (zs(l[o][0]), zs(l[o][1])) : zs(l[o]);
            "gauge" === t.type ? (Os(t, "axisLabel"), Os(t, "title"), Os(t, "detail")) : "treemap" === t.type ? (Ls(t.breadcrumb, "itemStyle"), f(t.levels, function (t) {
                Ps(t)
            })) : "tree" === t.type && Ps(t.leaves)
        }
    }

    function Bs(t) {
        return x(t) ? t : t ? [t] : []
    }

    function Es(t) {
        return (x(t) ? t[0] : t) || {}
    }

    function Ns(t, e) {
        e = e.split(",");
        for (var i = t, n = 0; n < e.length && (i = i && i[e[n]], null != i); n++) ;
        return i
    }

    function Fs(t, e, i, n) {
        e = e.split(",");
        for (var r, a = t, o = 0; o < e.length - 1; o++) r = e[o], null == a[r] && (a[r] = {}), a = a[r];
        (n || null == a[e[o]]) && (a[e[o]] = i)
    }

    function Vs(t) {
        f(cx, function (e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
        })
    }

    function Hs(t) {
        f(t, function (e, i) {
            var n = [], r = [0 / 0, 0 / 0], a = [e.stackResultDimension, e.stackedOverDimension], o = e.data,
                s = e.isStackedByIndex, l = o.map(a, function (a, l, u) {
                    var h = o.get(e.stackedDimension, u);
                    if (isNaN(h)) return r;
                    var c, d;
                    s ? d = o.getRawIndex(u) : c = o.get(e.stackedByDimension, u);
                    for (var f = 0 / 0, p = i - 1; p >= 0; p--) {
                        var g = t[p];
                        if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
                            var v = g.data.getByRawIndex(g.stackResultDimension, d);
                            if (h >= 0 && v > 0 || 0 >= h && 0 > v) {
                                h += v, f = v;
                                break
                            }
                        }
                    }
                    return n[0] = h, n[1] = f, n
                });
            o.hostModel.setData(l), e.data = l
        })
    }

    function Gs(t, e) {
        es.isInstance(t) || (t = es.seriesDataToSource(t)), this._source = t;
        var i = this._data = t.data, n = t.sourceFormat;
        n === Z_ && (this._offset = 0, this._dimSize = e, this._data = i);
        var r = vx[n === W_ ? n + "_" + t.seriesLayoutBy : n];
        o(this, r)
    }

    function Ws() {
        return this._data.length
    }

    function Xs(t) {
        return this._data[t]
    }

    function Ys(t) {
        for (var e = 0; e < t.length; e++) this._data.push(t[e])
    }

    function Us(t, e, i) {
        return null != i ? t[i] : t
    }

    function Zs(t, e, i, n) {
        return qs(t[n], this._dimensionInfos[e])
    }

    function qs(t, e) {
        var i = e && e.type;
        if ("ordinal" === i) {
            var n = e && e.ordinalMeta;
            return n ? n.parseAndCollect(t) : t
        }
        return "time" === i && "number" != typeof t && null != t && "-" !== t && (t = +Ao(t)), null == t || "" === t ? 0 / 0 : +t
    }

    function js(t, e, i) {
        if (t) {
            var n = t.getRawDataItem(e);
            if (null != n) {
                var r, a, o = t.getProvider().getSource().sourceFormat, s = t.getDimensionInfo(i);
                return s && (r = s.name, a = s.index), mx[o](n, e, a, r)
            }
        }
    }

    function Ks(t, e, i) {
        if (t) {
            var n = t.getProvider().getSource().sourceFormat;
            if (n === G_ || n === X_) {
                var r = t.getRawDataItem(e);
                return n !== G_ || S(r) || (r = null), r ? r[i] : void 0
            }
        }
    }

    function $s(t) {
        return new Qs(t)
    }

    function Qs(t) {
        t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context
    }

    function Js(t, e, i, n, r, a) {
        Sx.reset(i, n, r, a), t._callingProgress = e, t._callingProgress({
            start: i,
            end: n,
            count: n - i,
            next: Sx.next
        }, t.context)
    }

    function tl(t, e) {
        t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
        var i, n;
        !e && t._reset && (i = t._reset(t.context), i && i.progress && (n = i.forceFirstProgress, i = i.progress), x(i) && !i.length && (i = null)), t._progress = i, t._modBy = t._modDataCount = null;
        var r = t._downstream;
        return r && r.dirty(), n
    }

    function el(t) {
        var e = t.name;
        nr(t) || (t.name = il(t) || e)
    }

    function il(t) {
        var e = t.getRawData(), i = e.mapDimension("seriesName", !0), n = [];
        return f(i, function (t) {
            var i = e.getDimensionInfo(t);
            i.displayName && n.push(i.displayName)
        }), n.join(" ")
    }

    function nl(t) {
        return t.model.getRawData().count()
    }

    function rl(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()), al
    }

    function al(t, e) {
        t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
    }

    function ol(t, e) {
        f(t.CHANGABLE_METHODS, function (i) {
            t.wrapMethod(i, _(sl, e))
        })
    }

    function sl(t) {
        var e = ll(t);
        e && e.setOutputEnd(this.count())
    }

    function ll(t) {
        var e = (t.ecModel || {}).scheduler, i = e && e.getPipeline(t.uid);
        if (i) {
            var n = i.currentTask;
            if (n) {
                var r = n.agentStubMap;
                r && (n = r.get(t.uid))
            }
            return n
        }
    }

    function ul() {
        this.group = new pv, this.uid = go("viewChart"), this.renderTask = $s({
            plan: dl,
            reset: fl
        }), this.renderTask.context = {view: this}
    }

    function hl(t, e, i) {
        if (t && (t.trigger(e, i), t.isGroup && !Na(t))) for (var n = 0, r = t.childCount(); r > n; n++) hl(t.childAt(n), e, i)
    }

    function cl(t, e, i) {
        var n = or(t, e), r = e && null != e.highlightKey ? Fa(e.highlightKey) : null;
        null != n ? f($n(n), function (e) {
            hl(t.getItemGraphicEl(e), i, r)
        }) : t.eachItemGraphicEl(function (t) {
            hl(t, i, r)
        })
    }

    function dl(t) {
        return kx(t.model)
    }

    function fl(t) {
        var e = t.model, i = t.ecModel, n = t.api, r = t.payload, a = e.pipelineContext.progressiveRender, o = t.view,
            s = r && Ax(r).updateMethod, l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
        return "render" !== l && o[l](e, i, n, r), Px[l]
    }

    function pl(t, e, i) {
        function n() {
            h = (new Date).getTime(), c = null, t.apply(o, s || [])
        }

        var r, a, o, s, l, u = 0, h = 0, c = null;
        e = e || 0;
        var d = function () {
            r = (new Date).getTime(), o = this, s = arguments;
            var t = l || e, d = l || i;
            l = null, a = r - (d ? u : h) - t, clearTimeout(c), d ? c = setTimeout(n, t) : a >= 0 ? n() : c = setTimeout(n, -a), u = r
        };
        return d.clear = function () {
            c && (clearTimeout(c), c = null)
        }, d.debounceNextCall = function (t) {
            l = t
        }, d
    }

    function gl(t, e, i, n) {
        var r = t[e];
        if (r) {
            var a = r[Ox] || r, o = r[Rx], s = r[zx];
            if (s !== i || o !== n) {
                if (null == i || !n) return t[e] = a;
                r = t[e] = pl(a, i, "debounce" === n), r[Ox] = a, r[Rx] = n, r[zx] = i
            }
            return r
        }
    }

    function vl(t, e, i, n) {
        this.ecInstance = t, this.api = e, this.unfinished;
        var i = this._dataProcessorHandlers = i.slice(), n = this._visualHandlers = n.slice();
        this._allHandlers = i.concat(n), this._stageTaskMap = N()
    }

    function ml(t, e, i, n, r) {
        function a(t, e) {
            return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
        }

        r = r || {};
        var o;
        f(e, function (e) {
            if (!r.visualType || r.visualType === e.visualType) {
                var s = t._stageTaskMap.get(e.uid), l = s.seriesTaskMap, u = s.overallTask;
                if (u) {
                    var h, c = u.agentStubMap;
                    c.each(function (t) {
                        a(r, t) && (t.dirty(), h = !0)
                    }), h && u.dirty(), Gx(u, n);
                    var d = t.getPerformArgs(u, r.block);
                    c.each(function (t) {
                        t.perform(d)
                    }), o |= u.perform(d)
                } else l && l.each(function (s) {
                    a(r, s) && s.dirty();
                    var l = t.getPerformArgs(s, r.block);
                    l.skip = !e.performRawSeries && i.isSeriesFiltered(s.context.model), Gx(s, n), o |= s.perform(l)
                })
            }
        }), t.unfinished |= o
    }

    function yl(t, e, i, n, r) {
        function a(i) {
            var a = i.uid, s = o.get(a) || o.set(a, $s({plan: Ml, reset: Tl, count: Cl}));
            s.context = {
                model: i,
                ecModel: n,
                api: r,
                useClearVisual: e.isVisual && !e.isLayout,
                plan: e.plan,
                reset: e.reset,
                scheduler: t
            }, Dl(t, i, s)
        }

        var o = i.seriesTaskMap || (i.seriesTaskMap = N()), s = e.seriesType, l = e.getTargetSeries;
        e.createOnAllSeries ? n.eachRawSeries(a) : s ? n.eachRawSeriesByType(s, a) : l && l(n, r).each(a);
        var u = t._pipelineMap;
        o.each(function (t, e) {
            u.get(e) || (t.dispose(), o.removeKey(e))
        })
    }

    function _l(t, e, i, n, r) {
        function a(e) {
            var i = e.uid, n = s.get(i);
            n || (n = s.set(i, $s({reset: wl, onDirty: Sl})), o.dirty()), n.context = {
                model: e,
                overallProgress: h,
                modifyOutputEnd: c
            }, n.agent = o, n.__block = h, Dl(t, e, n)
        }

        var o = i.overallTask = i.overallTask || $s({reset: xl});
        o.context = {ecModel: n, api: r, overallReset: e.overallReset, scheduler: t};
        var s = o.agentStubMap = o.agentStubMap || N(), l = e.seriesType, u = e.getTargetSeries, h = !0,
            c = e.modifyOutputEnd;
        l ? n.eachRawSeriesByType(l, a) : u ? u(n, r).each(a) : (h = !1, f(n.getSeries(), a));
        var d = t._pipelineMap;
        s.each(function (t, e) {
            d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e))
        })
    }

    function xl(t) {
        t.overallReset(t.ecModel, t.api, t.payload)
    }

    function wl(t) {
        return t.overallProgress && bl
    }

    function bl() {
        this.agent.dirty(), this.getDownstream().dirty()
    }

    function Sl() {
        this.agent && this.agent.dirty()
    }

    function Ml(t) {
        return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
    }

    function Tl(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = t.resetDefines = $n(t.reset(t.model, t.ecModel, t.api, t.payload));
        return e.length > 1 ? p(e, function (t, e) {
            return Il(e)
        }) : Wx
    }

    function Il(t) {
        return function (e, i) {
            var n = i.data, r = i.resetDefines[t];
            if (r && r.dataEach) for (var a = e.start; a < e.end; a++) r.dataEach(n, a); else r && r.progress && r.progress(e, n)
        }
    }

    function Cl(t) {
        return t.data.count()
    }

    function Dl(t, e, i) {
        var n = e.uid, r = t._pipelineMap.get(n);
        !r.head && (r.head = i), r.tail && r.tail.pipe(i), r.tail = i, i.__idxInPipeline = r.count++, i.__pipeline = r
    }

    function Al(t) {
        Xx = null;
        try {
            t(Yx, Ux)
        } catch (e) {
        }
        return Xx
    }

    function kl(t, e) {
        for (var i in e.prototype) t[i] = V
    }

    function Ll(t) {
        if (b(t)) {
            var e = new DOMParser;
            t = e.parseFromString(t, "text/xml")
        }
        for (9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) t = t.nextSibling;
        return t
    }

    function Pl() {
        this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1
    }

    function Ol(t, e) {
        for (var i = t.firstChild; i;) {
            if (1 === i.nodeType) {
                var n = i.getAttribute("offset");
                n = n.indexOf("%") > 0 ? parseInt(n, 10) / 100 : n ? parseFloat(n) : 0;
                var r = i.getAttribute("stop-color") || "#000000";
                e.addColorStop(n, r)
            }
            i = i.nextSibling
        }
    }

    function zl(t, e) {
        t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle))
    }

    function Rl(t) {
        for (var e = z(t).split(tw), i = [], n = 0; n < e.length; n += 2) {
            var r = parseFloat(e[n]), a = parseFloat(e[n + 1]);
            i.push([r, a])
        }
        return i
    }

    function Bl(t, e, i, n) {
        var r = e.__inheritedStyle || {}, a = "text" === e.type;
        if (1 === t.nodeType && (Nl(t, e), o(r, Fl(t)), !n)) for (var s in nw) if (nw.hasOwnProperty(s)) {
            var l = t.getAttribute(s);
            null != l && (r[nw[s]] = l)
        }
        var u = a ? "textFill" : "fill", h = a ? "textStroke" : "stroke";
        e.style = e.style || new Sv;
        var c = e.style;
        null != r.fill && c.set(u, El(r.fill, i)), null != r.stroke && c.set(h, El(r.stroke, i)), f(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {
            var e = "lineWidth" === t && a ? "textStrokeWidth" : t;
            null != r[t] && c.set(e, parseFloat(r[t]))
        }), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), f(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function (t) {
            null != r[t] && c.set(t, r[t])
        }), r.lineDash && (e.style.lineDash = z(r.lineDash).split(tw)), c[h] && "none" !== c[h] && (e[h] = !0), e.__inheritedStyle = r
    }

    function El(t, e) {
        var i = e && t && t.match(rw);
        if (i) {
            var n = z(i[1]), r = e[n];
            return r
        }
        return t
    }

    function Nl(t, e) {
        var i = t.getAttribute("transform");
        if (i) {
            i = i.replace(/,/g, " ");
            var n = null, r = [];
            i.replace(aw, function (t, e, i) {
                r.push(e, i)
            });
            for (var a = r.length - 1; a > 0; a -= 2) {
                var o = r[a], s = r[a - 1];
                switch (n = n || ke(), s) {
                    case"translate":
                        o = z(o).split(tw), ze(n, n, [parseFloat(o[0]), parseFloat(o[1] || 0)]);
                        break;
                    case"scale":
                        o = z(o).split(tw), Be(n, n, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);
                        break;
                    case"rotate":
                        o = z(o).split(tw), Re(n, n, parseFloat(o[0]));
                        break;
                    case"skew":
                        o = z(o).split(tw), console.warn("Skew transform is not supported yet");
                        break;
                    case"matrix":
                        var o = z(o).split(tw);
                        n[0] = parseFloat(o[0]), n[1] = parseFloat(o[1]), n[2] = parseFloat(o[2]), n[3] = parseFloat(o[3]), n[4] = parseFloat(o[4]), n[5] = parseFloat(o[5])
                }
            }
            e.setLocalTransform(n)
        }
    }

    function Fl(t) {
        var e = t.getAttribute("style"), i = {};
        if (!e) return i;
        var n = {};
        ow.lastIndex = 0;
        for (var r; null != (r = ow.exec(e));) n[r[1]] = r[2];
        for (var a in nw) nw.hasOwnProperty(a) && null != n[a] && (i[nw[a]] = n[a]);
        return i
    }

    function Vl(t, e, i) {
        var n = e / t.width, r = i / t.height, a = Math.min(n, r), o = [a, a],
            s = [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + i / 2];
        return {scale: o, position: s}
    }

    function Hl(t, e) {
        var i = new Pl;
        return i.parse(t, e)
    }

    function Gl(t, e) {
        return function (i, n, r) {
            (e || !this._disposed) && (i = i && i.toLowerCase(), Sg.prototype[t].call(this, i, n, r))
        }
    }

    function Wl() {
        Sg.call(this)
    }

    function Xl(t, e, i) {
        function r(t, e) {
            return t.__prio - e.__prio
        }

        i = i || {}, "string" == typeof e && (e = Gw[e]), this.id, this.group, this._dom = t;
        var a = "canvas", o = this._zr = Un(t, {
            renderer: i.renderer || a,
            devicePixelRatio: i.devicePixelRatio,
            width: i.width,
            height: i.height
        });
        this._throttledZrFlush = pl(y(o.flush, o), 17);
        var e = n(e);
        e && fx(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Ss;
        var s = this._api = lu(this);
        Li(Hw, r), Li(Nw, r), this._scheduler = new vl(this, s, Nw, Hw), Sg.call(this, this._ecEventProcessor = new uu), this._messageCenter = new Wl, this._initEvents(), this.resize = y(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), Ql(o, this), R(this)
    }

    function Yl(t, e, i) {
        if (!this._disposed) {
            var n, r = this._model, a = this._coordSysMgr.getCoordinateSystems();
            e = lr(r, e);
            for (var o = 0; o < a.length; o++) {
                var s = a[o];
                if (s[t] && null != (n = s[t](r, e, i))) return n
            }
        }
    }

    function Ul(t) {
        var e = t._model, i = t._scheduler;
        i.restorePipelines(e), i.prepareStageTasks(), Jl(t, "component", e, i), Jl(t, "chart", e, i), i.plan()
    }

    function Zl(t, e, i, n, r) {
        function a(n) {
            n && n.__alive && n[e] && n[e](n.__model, o, t._api, i)
        }

        var o = t._model;
        if (!n) return void cw(t._componentsViews.concat(t._chartsViews), a);
        var s = {};
        s[n + "Id"] = i[n + "Id"], s[n + "Index"] = i[n + "Index"], s[n + "Name"] = i[n + "Name"];
        var l = {mainType: n, query: s};
        r && (l.subType = r);
        var u = i.excludeSeriesId;
        null != u && (u = N($n(u))), o && o.eachComponent(l, function (e) {
            u && null != u.get(e.id) || a(t["series" === n ? "_chartsMap" : "_componentsMap"][e.__viewId])
        }, t)
    }

    function ql(t, e) {
        var i = t._chartsMap, n = t._scheduler;
        e.eachSeries(function (t) {
            n.updateStreamModes(t, i[t.__viewId])
        })
    }

    function jl(t, e) {
        var i = t.type, n = t.escapeConnect, r = Bw[i], a = r.actionInfo, l = (a.update || "update").split(":"),
            u = l.pop();
        l = null != l[0] && pw(l[0]), this[kw] = !0;
        var h = [t], c = !1;
        t.batch && (c = !0, h = p(t.batch, function (e) {
            return e = s(o({}, e), t), e.batch = null, e
        }));
        var d, f = [], g = "highlight" === i || "downplay" === i;
        cw(h, function (t) {
            d = r.action(t, this._model, this._api), d = d || o({}, t), d.type = a.event || d.type, f.push(d), g ? Zl(this, u, t, "series") : l && Zl(this, u, t, l.main, l.sub)
        }, this), "none" === u || g || l || (this[Lw] ? (Ul(this), zw.update.call(this, t), this[Lw] = !1) : zw[u].call(this, t)), d = c ? {
            type: a.event || i,
            escapeConnect: n,
            batch: f
        } : f[0], this[kw] = !1, !e && this._messageCenter.trigger(d.type, d)
    }

    function Kl(t) {
        for (var e = this._pendingActions; e.length;) {
            var i = e.shift();
            jl.call(this, i, t)
        }
    }

    function $l(t) {
        !t && this.trigger("updated")
    }

    function Ql(t, e) {
        t.on("rendered", function () {
            e.trigger("rendered"), !t.animation.isFinished() || e[Lw] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
        })
    }

    function Jl(t, e, i, n) {
        function r(t) {
            var e = "_ec_" + t.id + "_" + t.type, r = s[e];
            if (!r) {
                var h = pw(t.type), c = a ? Ix.getClass(h.main, h.sub) : ul.getClass(h.sub);
                r = new c, r.init(i, u), s[e] = r, o.push(r), l.add(r.group)
            }
            t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
                mainType: t.mainType,
                index: t.componentIndex
            }, !a && n.prepareView(r, t, i, u)
        }

        for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, u = t._api, h = 0; h < o.length; h++) o[h].__alive = !1;
        a ? i.eachComponent(function (t, e) {
            "series" !== t && r(e)
        }) : i.eachSeries(r);
        for (var h = 0; h < o.length;) {
            var c = o[h];
            c.__alive ? h++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(i, u), o.splice(h, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null)
        }
    }

    function tu(t) {
        t.clearColorPalette(), t.eachSeries(function (t) {
            t.clearColorPalette()
        })
    }

    function eu(t, e, i, n) {
        iu(t, e, i, n), cw(t._chartsViews, function (t) {
            t.__alive = !1
        }), nu(t, e, i, n), cw(t._chartsViews, function (t) {
            t.__alive || t.remove(e, i)
        })
    }

    function iu(t, e, i, n, r) {
        cw(r || t._componentsViews, function (t) {
            var r = t.__model;
            t.render(r, e, i, n), su(r, t)
        })
    }

    function nu(t, e, i, n, r) {
        var a, o = t._scheduler;
        e.eachSeries(function (e) {
            var i = t._chartsMap[e.__viewId];
            i.__alive = !0;
            var s = i.renderTask;
            o.updatePayload(s, n), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), i.group.silent = !!e.get("silent"), su(e, i), ou(e, i)
        }), o.unfinished |= a, au(t, e), Nx(t._zr.dom, e)
    }

    function ru(t, e) {
        cw(Vw, function (i) {
            i(t, e)
        })
    }

    function au(t, e) {
        var i = t._zr, n = i.storage, r = 0;
        n.traverse(function () {
            r++
        }), r > e.get("hoverLayerThreshold") && !eg.node && e.eachSeries(function (e) {
            if (!e.preventUsingHoverLayer) {
                var i = t._chartsMap[e.__viewId];
                i.__alive && i.group.traverse(function (t) {
                    t.useHoverLayer = !0
                })
            }
        })
    }

    function ou(t, e) {
        var i = t.get("blendMode") || null;
        e.group.traverse(function (t) {
            t.isGroup || t.style.blend !== i && t.setStyle("blend", i), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
                t.setStyle("blend", i)
            })
        })
    }

    function su(t, e) {
        var i = t.get("z"), n = t.get("zlevel");
        e.group.traverse(function (t) {
            "group" !== t.type && (null != i && (t.z = i), null != n && (t.zlevel = n))
        })
    }

    function lu(t) {
        var e = t._coordSysMgr;
        return o(new bs(t), {
            getCoordinateSystems: y(e.getCoordinateSystems, e), getComponentByElement: function (e) {
                for (; e;) {
                    var i = e.__ecComponentInfo;
                    if (null != i) return t._model.getComponent(i.mainType, i.index);
                    e = e.parent
                }
            }
        })
    }

    function uu() {
        this.eventInfo
    }

    function hu(t) {
        function e(t, e) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n[a] = e
            }
        }

        var i = 0, n = 1, r = 2, a = "__connectUpdateStatus";
        cw(Ew, function (o, s) {
            t._messageCenter.on(s, function (o) {
                if (Yw[t.group] && t[a] !== i) {
                    if (o && o.escapeConnect) return;
                    var s = t.makeActionFromEvent(o), l = [];
                    cw(Xw, function (e) {
                        e !== t && e.group === t.group && l.push(e)
                    }), e(l, i), cw(l, function (t) {
                        t[a] !== n && t.dispatchAction(s)
                    }), e(l, r)
                }
            })
        })
    }

    function cu(t, e, i) {
        var n = gu(t);
        if (n) return n;
        var r = new Xl(t, e, i);
        return r.id = "ec_" + Uw++, Xw[r.id] = r, hr(t, qw, r.id), hu(r), r
    }

    function du(t) {
        if (x(t)) {
            var e = t;
            t = null, cw(e, function (e) {
                null != e.group && (t = e.group)
            }), t = t || "g_" + Zw++, cw(e, function (e) {
                e.group = t
            })
        }
        return Yw[t] = !0, t
    }

    function fu(t) {
        Yw[t] = !1
    }

    function pu(t) {
        "string" == typeof t ? t = Xw[t] : t instanceof Xl || (t = gu(t)), t instanceof Xl && !t.isDisposed() && t.dispose()
    }

    function gu(t) {
        return Xw[cr(t, qw)]
    }

    function vu(t) {
        return Xw[t]
    }

    function mu(t, e) {
        Gw[t] = e
    }

    function yu(t) {
        Fw.push(t)
    }

    function _u(t, e) {
        Iu(Nw, t, e, yw)
    }

    function xu(t) {
        Vw.push(t)
    }

    function wu(t, e, i) {
        "function" == typeof e && (i = e, e = "");
        var n = fw(t) ? t.type : [t, t = {event: e}][0];
        t.event = (t.event || n).toLowerCase(), e = t.event, hw(Pw.test(n) && Pw.test(e)), Bw[n] || (Bw[n] = {
            action: i,
            actionInfo: t
        }), Ew[e] = n
    }

    function bu(t, e) {
        Ss.register(t, e)
    }

    function Su(t) {
        var e = Ss.get(t);
        return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0
    }

    function Mu(t, e) {
        Iu(Hw, t, e, bw, "layout")
    }

    function Tu(t, e) {
        Iu(Hw, t, e, Tw, "visual")
    }

    function Iu(t, e, i, n, r) {
        (dw(e) || fw(e)) && (i = e, e = n);
        var a = vl.wrapStageHandler(i, r);
        return a.__prio = e, a.__raw = i, t.push(a), a
    }

    function Cu(t, e) {
        Ww[t] = e
    }

    function Du(t) {
        return E_.extend(t)
    }

    function Au(t) {
        return Ix.extend(t)
    }

    function ku(t) {
        return Tx.extend(t)
    }

    function Lu(t) {
        return ul.extend(t)
    }

    function Pu(t) {
        i("createCanvas", t)
    }

    function Ou(t, e, i) {
        lw.registerMap(t, e, i)
    }

    function zu(t) {
        var e = lw.retrieveMap(t);
        return e && e[0] && {geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas}
    }

    function Ru(t) {
        return t
    }

    function Bu(t, e, i, n, r) {
        this._old = t, this._new = e, this._oldKeyGetter = i || Ru, this._newKeyGetter = n || Ru, this.context = r
    }

    function Eu(t, e, i, n, r) {
        for (var a = 0; a < t.length; a++) {
            var o = "_ec_" + r[n](t[a], a), s = e[o];
            null == s ? (i.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a))
        }
    }

    function Nu(t) {
        var e = {}, i = e.encode = {}, n = N(), r = [], a = [],
            o = e.userOutput = {dimensionNames: t.dimensions.slice(), encode: {}};
        f(t.dimensions, function (e) {
            var s = t.getDimensionInfo(e), l = s.coordDim;
            if (l) {
                var u = s.coordDimIndex;
                Fu(i, l)[u] = e, s.isExtraCoord || (n.set(l, 1), Hu(s.type) && (r[0] = e), Fu(o.encode, l)[u] = s.index), s.defaultTooltip && a.push(e)
            }
            $w.each(function (t, e) {
                var n = Fu(i, e), r = s.otherDims[e];
                null != r && r !== !1 && (n[r] = s.name)
            })
        });
        var s = [], l = {};
        n.each(function (t, e) {
            var n = i[e];
            l[e] = n[0], s = s.concat(n)
        }), e.dataDimsOnCoord = s, e.encodeFirstDimNotExtra = l;
        var u = i.label;
        u && u.length && (r = u.slice());
        var h = i.tooltip;
        return h && h.length ? a = h.slice() : a.length || (a = r.slice()), i.defaultedLabel = r, i.defaultedTooltip = a, e
    }

    function Fu(t, e) {
        return t.hasOwnProperty(e) || (t[e] = []), t[e]
    }

    function Vu(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
    }

    function Hu(t) {
        return !("ordinal" === t || "time" === t)
    }

    function Gu(t) {
        null != t && o(this, t), this.otherDims = {}
    }

    function Wu(t) {
        return t._rawCount > 65535 ? nb : ab
    }

    function Xu(t) {
        var e = t.constructor;
        return e === Array ? t.slice() : new e(t)
    }

    function Yu(t, e) {
        f(ob.concat(e.__wrappedMethods || []), function (i) {
            e.hasOwnProperty(i) && (t[i] = e[i])
        }), t.__wrappedMethods = e.__wrappedMethods, f(sb, function (i) {
            t[i] = n(e[i])
        }), t._calculationInfo = o(e._calculationInfo)
    }

    function Uu(t, e, i, n, r) {
        var a = ib[e.type], o = n - 1, s = e.name, l = t[s][o];
        if (l && l.length < i) {
            for (var u = new a(Math.min(r - o * i, i)), h = 0; h < l.length; h++) u[h] = l[h];
            t[s][o] = u
        }
        for (var c = n * i; r > c; c += i) t[s].push(new a(Math.min(r - c, i)))
    }

    function Zu(t) {
        var e = t._invertedIndicesMap;
        f(e, function (i, n) {
            var r = t._dimensionInfos[n], a = r.ordinalMeta;
            if (a) {
                i = e[n] = new rb(a.categories.length);
                for (var o = 0; o < i.length; o++) i[o] = tb;
                for (var o = 0; o < t._count; o++) i[t.get(n, o)] = o
            }
        })
    }

    function qu(t, e, i) {
        var n;
        if (null != e) {
            var r = t._chunkSize, a = Math.floor(i / r), o = i % r, s = t.dimensions[e], l = t._storage[s][a];
            if (l) {
                n = l[o];
                var u = t._dimensionInfos[s].ordinalMeta;
                u && u.categories.length && (n = u.categories[n])
            }
        }
        return n
    }

    function ju(t) {
        return t
    }

    function Ku(t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1
    }

    function $u(t, e) {
        var i = t._idList[e];
        return null == i && (i = qu(t, t._idDimIdx, e)), null == i && (i = eb + e), i
    }

    function Qu(t) {
        return x(t) || (t = [t]), t
    }

    function Ju(t, e) {
        var i = t.dimensions, n = new lb(p(i, t.getDimensionInfo, t), t.hostModel);
        Yu(n, t);
        for (var r = n._storage = {}, a = t._storage, o = 0; o < i.length; o++) {
            var s = i[o];
            a[s] && (u(e, s) >= 0 ? (r[s] = th(a[s]), n._rawExtent[s] = eh(), n._extent[s] = null) : r[s] = a[s])
        }
        return n
    }

    function th(t) {
        for (var e = new Array(t.length), i = 0; i < t.length; i++) e[i] = Xu(t[i]);
        return e
    }

    function eh() {
        return [1 / 0, -1 / 0]
    }

    function ih(t, e, i) {
        function r(t, e, i) {
            null != $w.get(e) ? t.otherDims[e] = i : (t.coordDim = e, t.coordDimIndex = i, u.set(e, !0))
        }

        es.isInstance(e) || (e = es.seriesDataToSource(e)), i = i || {}, t = (t || []).slice();
        for (var a = (i.dimsDef || []).slice(), l = N(), u = N(), h = [], c = nh(e, t, a, i.dimCount), d = 0; c > d; d++) {
            var p = a[d] = o({}, S(a[d]) ? a[d] : {name: a[d]}), g = p.name, v = h[d] = new Gu;
            null != g && null == l.get(g) && (v.name = v.displayName = g, l.set(g, d)), null != p.type && (v.type = p.type), null != p.displayName && (v.displayName = p.displayName)
        }
        var m = i.encodeDef;
        !m && i.encodeDefaulter && (m = i.encodeDefaulter(e, c)), m = N(m), m.each(function (t, e) {
            if (t = $n(t).slice(), 1 === t.length && !b(t[0]) && t[0] < 0) return void m.set(e, !1);
            var i = m.set(e, []);
            f(t, function (t, n) {
                b(t) && (t = l.get(t)), null != t && c > t && (i[n] = t, r(h[t], e, n))
            })
        });
        var y = 0;
        f(t, function (t) {
            var e, t, i, a;
            if (b(t)) e = t, t = {}; else {
                e = t.name;
                var o = t.ordinalMeta;
                t.ordinalMeta = null, t = n(t), t.ordinalMeta = o, i = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
            }
            var l = m.get(e);
            if (l !== !1) {
                var l = $n(l);
                if (!l.length) for (var u = 0; u < (i && i.length || 1); u++) {
                    for (; y < h.length && null != h[y].coordDim;) y++;
                    y < h.length && l.push(y++)
                }
                f(l, function (n, o) {
                    var l = h[n];
                    if (r(s(l, t), e, o), null == l.name && i) {
                        var u = i[o];
                        !S(u) && (u = {name: u}), l.name = l.displayName = u.name, l.defaultTooltip = u.defaultTooltip
                    }
                    a && s(l.otherDims, a)
                })
            }
        });
        var _ = i.generateCoord, x = i.generateCoordCount, w = null != x;
        x = _ ? x || 1 : 0;
        for (var M = _ || "value", T = 0; c > T; T++) {
            var v = h[T] = h[T] || new Gu, I = v.coordDim;
            null == I && (v.coordDim = rh(M, u, w), v.coordDimIndex = 0, (!_ || 0 >= x) && (v.isExtraCoord = !0), x--), null == v.name && (v.name = rh(v.coordDim, l)), null != v.type || fs(e, T, v.name) !== K_.Must && (!v.isExtraCoord || null == v.otherDims.itemName && null == v.otherDims.seriesName) || (v.type = "ordinal")
        }
        return h
    }

    function nh(t, e, i, n) {
        var r = Math.max(t.dimensionsDetectCount || 1, e.length, i.length, n || 0);
        return f(e, function (t) {
            var e = t.dimsDef;
            e && (r = Math.max(r, e.length))
        }), r
    }

    function rh(t, e, i) {
        if (i || null != e.get(t)) {
            for (var n = 0; null != e.get(t + n);) n++;
            t += n
        }
        return e.set(t, !0), t
    }

    function ah(t) {
        this.coordSysName = t, this.coordSysDims = [], this.axisMap = N(), this.categoryAxisMap = N(), this.firstCategoryDimIndex = null
    }

    function oh(t) {
        var e = t.get("coordinateSystem"), i = new ah(e), n = db[e];
        return n ? (n(t, i, i.axisMap, i.categoryAxisMap), i) : void 0
    }

    function sh(t) {
        return "category" === t.get("type")
    }

    function lh(t, e, i) {
        i = i || {};
        var n, r, a, o, s = i.byIndex, l = i.stackedCoordDimension, u = !(!t || !t.get("stack"));
        if (f(e, function (t, i) {
            b(t) && (e[i] = t = {name: t}), u && !t.isExtraCoord && (s || n || !t.ordinalMeta || (n = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t))
        }), !r || s || n || (s = !0), r) {
            a = "__\x00ecstackresult", o = "__\x00ecstackedover", n && (n.createInvertedIndices = !0);
            var h = r.coordDim, c = r.type, d = 0;
            f(e, function (t) {
                t.coordDim === h && d++
            }), e.push({
                name: a,
                coordDim: h,
                coordDimIndex: d,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            }), d++, e.push({name: o, coordDim: o, coordDimIndex: d, type: c, isExtraCoord: !0, isCalculationCoord: !0})
        }
        return {
            stackedDimension: r && r.name,
            stackedByDimension: n && n.name,
            isStackedByIndex: s,
            stackedOverDimension: o,
            stackResultDimension: a
        }
    }

    function uh(t, e) {
        return !!e && e === t.getCalculationInfo("stackedDimension")
    }

    function hh(t, e) {
        return uh(t, e) ? t.getCalculationInfo("stackResultDimension") : e
    }

    function ch(t, e, i) {
        i = i || {}, es.isInstance(t) || (t = es.seriesDataToSource(t));
        var n, r = e.get("coordinateSystem"), a = Ss.get(r), o = oh(e);
        o && (n = p(o.coordSysDims, function (t) {
            var e = {name: t}, i = o.axisMap.get(t);
            if (i) {
                var n = i.get("type");
                e.type = Vu(n)
            }
            return e
        })), n || (n = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);
        var s, l, u = cb(t, {
            coordDimensions: n,
            generateCoord: i.generateCoord,
            encodeDefaulter: i.useEncodeDefaulter ? _(hs, n, e) : null
        });
        o && f(u, function (t, e) {
            var i = t.coordDim, n = o.categoryAxisMap.get(i);
            n && (null == s && (s = e), t.ordinalMeta = n.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0)
        }), l || null == s || (u[s].otherDims.itemName = 0);
        var h = lh(e, u), c = new lb(u, e);
        c.setCalculationInfo(h);
        var d = null != s && dh(t) ? function (t, e, i, n) {
            return n === s ? i : this.defaultDimValueGetter(t, e, i, n)
        } : null;
        return c.hasItemOption = !1, c.initData(t, null, d), c
    }

    function dh(t) {
        if (t.sourceFormat === G_) {
            var e = fh(t.data || []);
            return null != e && !x(Jn(e))
        }
    }

    function fh(t) {
        for (var e = 0; e < t.length && null == t[e];) e++;
        return t[e]
    }

    function ph(t) {
        this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)
    }

    function gh(t) {
        this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map
    }

    function vh(t) {
        return t._map || (t._map = N(t.categories))
    }

    function mh(t) {
        return S(t) && null != t.value ? t.value : t + ""
    }

    function yh(t, e, i, n) {
        var r = {}, a = t[1] - t[0], o = r.interval = Po(a / e, !0);
        null != i && i > o && (o = r.interval = i), null != n && o > n && (o = r.interval = n);
        var s = r.intervalPrecision = _h(o),
            l = r.niceTickExtent = [vb(Math.ceil(t[0] / o) * o, s), vb(Math.floor(t[1] / o) * o, s)];
        return wh(l, t), r
    }

    function _h(t) {
        return Mo(t) + 2
    }

    function xh(t, e, i) {
        t[e] = Math.max(Math.min(t[e], i[1]), i[0])
    }

    function wh(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), xh(t, 0, e), xh(t, 1, e), t[0] > t[1] && (t[0] = t[1])
    }

    function bh(t) {
        return t.get("stack") || _b + t.seriesIndex
    }

    function Sh(t) {
        return t.dim + t.index
    }

    function Mh(t, e) {
        var i = [];
        return e.eachSeriesByType(t, function (t) {
            kh(t) && !Lh(t) && i.push(t)
        }), i
    }

    function Th(t) {
        var e = {};
        f(t, function (t) {
            var i = t.coordinateSystem, n = i.getBaseAxis();
            if ("time" === n.type || "value" === n.type) for (var r = t.getData(), a = n.dim + "_" + n.index, o = r.mapDimension(n.dim), s = 0, l = r.count(); l > s; ++s) {
                var u = r.get(o, s);
                e[a] ? e[a].push(u) : e[a] = [u]
            }
        });
        var i = [];
        for (var n in e) if (e.hasOwnProperty(n)) {
            var r = e[n];
            if (r) {
                r.sort(function (t, e) {
                    return t - e
                });
                for (var a = null, o = 1; o < r.length; ++o) {
                    var s = r[o] - r[o - 1];
                    s > 0 && (a = null === a ? s : Math.min(a, s))
                }
                i[n] = a
            }
        }
        return i
    }

    function Ih(t) {
        var e = Th(t), i = [];
        return f(t, function (t) {
            var n, r = t.coordinateSystem, a = r.getBaseAxis(), o = a.getExtent();
            if ("category" === a.type) n = a.getBandWidth(); else if ("value" === a.type || "time" === a.type) {
                var s = a.dim + "_" + a.index, l = e[s], u = Math.abs(o[1] - o[0]), h = a.scale.getExtent(),
                    c = Math.abs(h[1] - h[0]);
                n = l ? u / c * l : u
            } else {
                var d = t.getData();
                n = Math.abs(o[1] - o[0]) / d.count()
            }
            var f = xo(t.get("barWidth"), n), p = xo(t.get("barMaxWidth"), n), g = xo(t.get("barMinWidth") || 1, n),
                v = t.get("barGap"), m = t.get("barCategoryGap");
            i.push({
                bandWidth: n,
                barWidth: f,
                barMaxWidth: p,
                barMinWidth: g,
                barGap: v,
                barCategoryGap: m,
                axisKey: Sh(a),
                stackId: bh(t)
            })
        }), Ch(i)
    }

    function Ch(t) {
        var e = {};
        f(t, function (t) {
            var i = t.axisKey, n = t.bandWidth, r = e[i] || {
                bandWidth: n,
                remainedWidth: n,
                autoWidthCount: 0,
                categoryGap: "20%",
                gap: "30%",
                stacks: {}
            }, a = r.stacks;
            e[i] = r;
            var o = t.stackId;
            a[o] || r.autoWidthCount++, a[o] = a[o] || {width: 0, maxWidth: 0};
            var s = t.barWidth;
            s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
            var l = t.barMaxWidth;
            l && (a[o].maxWidth = l);
            var u = t.barMinWidth;
            u && (a[o].minWidth = u);
            var h = t.barGap;
            null != h && (r.gap = h);
            var c = t.barCategoryGap;
            null != c && (r.categoryGap = c)
        });
        var i = {};
        return f(e, function (t, e) {
            i[e] = {};
            var n = t.stacks, r = t.bandWidth, a = xo(t.categoryGap, r), o = xo(t.gap, 1), s = t.remainedWidth,
                l = t.autoWidthCount, u = (s - a) / (l + (l - 1) * o);
            u = Math.max(u, 0), f(n, function (t) {
                var e = t.maxWidth, i = t.minWidth;
                if (t.width) {
                    var n = t.width;
                    e && (n = Math.min(n, e)), i && (n = Math.max(n, i)), t.width = n, s -= n + o * n, l--
                } else {
                    var n = u;
                    e && n > e && (n = Math.min(e, s)), i && i > n && (n = i), n !== u && (t.width = n, s -= n + o * n, l--)
                }
            }), u = (s - a) / (l + (l - 1) * o), u = Math.max(u, 0);
            var h, c = 0;
            f(n, function (t) {
                t.width || (t.width = u), h = t, c += t.width * (1 + o)
            }), h && (c -= h.width * o);
            var d = -c / 2;
            f(n, function (t, n) {
                i[e][n] = i[e][n] || {bandWidth: r, offset: d, width: t.width}, d += t.width * (1 + o)
            })
        }), i
    }

    function Dh(t, e, i) {
        if (t && e) {
            var n = t[Sh(e)];
            return null != n && null != i && (n = n[bh(i)]), n
        }
    }

    function Ah(t, e) {
        var i = Mh(t, e), n = Ih(i), r = {};
        f(i, function (t) {
            var e = t.getData(), i = t.coordinateSystem, a = i.getBaseAxis(), o = bh(t), s = n[Sh(a)][o], l = s.offset,
                u = s.width, h = i.getOtherAxis(a), c = t.get("barMinHeight") || 0;
            r[o] = r[o] || [], e.setLayout({bandWidth: s.bandWidth, offset: l, size: u});
            for (var d = e.mapDimension(h.dim), f = e.mapDimension(a.dim), p = uh(e, d), g = h.isHorizontal(), v = Ph(a, h, p), m = 0, y = e.count(); y > m; m++) {
                var _ = e.get(d, m), x = e.get(f, m);
                if (!isNaN(_) && !isNaN(x)) {
                    var w = _ >= 0 ? "p" : "n", b = v;
                    p && (r[o][x] || (r[o][x] = {p: v, n: v}), b = r[o][x][w]);
                    var S, M, T, I;
                    if (g) {
                        var C = i.dataToPoint([_, x]);
                        S = b, M = C[1] + l, T = C[0] - v, I = u, Math.abs(T) < c && (T = (0 > T ? -1 : 1) * c), p && (r[o][x][w] += T)
                    } else {
                        var C = i.dataToPoint([x, _]);
                        S = C[0] + l, M = b, T = u, I = C[1] - v, Math.abs(I) < c && (I = (0 >= I ? -1 : 1) * c), p && (r[o][x][w] += I)
                    }
                    e.setItemLayout(m, {x: S, y: M, width: T, height: I})
                }
            }
        }, this)
    }

    function kh(t) {
        return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
    }

    function Lh(t) {
        return t.pipelineContext && t.pipelineContext.large
    }

    function Ph(t, e) {
        return e.toGlobalCoord(e.dataToCoord("log" === e.type ? 1 : 0))
    }

    function Oh(t, e) {
        return Bb(t, Rb(e))
    }

    function zh(t, e) {
        var i, n, r, a = t.type, o = e.getMin(), s = e.getMax(), l = null != o, u = null != s, h = t.getExtent();
        "ordinal" === a ? i = e.getCategories().length : (n = e.get("boundaryGap"), x(n) || (n = [n || 0, n || 0]), "boolean" == typeof n[0] && (n = [0, 0]), n[0] = xo(n[0], 1), n[1] = xo(n[1], 1), r = h[1] - h[0] || Math.abs(h[0])), null == o && (o = "ordinal" === a ? i ? 0 : 0 / 0 : h[0] - n[0] * r), null == s && (s = "ordinal" === a ? i ? i - 1 : 0 / 0 : h[1] + n[1] * r), "dataMin" === o ? o = h[0] : "function" == typeof o && (o = o({
            min: h[0],
            max: h[1]
        })), "dataMax" === s ? s = h[1] : "function" == typeof s && (s = s({
            min: h[0],
            max: h[1]
        })), (null == o || !isFinite(o)) && (o = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), t.setBlank(C(o) || C(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !u && (s = 0));
        var c = e.ecModel;
        if (c && "time" === a) {
            var d, p = Mh("bar", c);
            if (f(p, function (t) {
                d |= t.getBaseAxis() === e.axis
            }), d) {
                var g = Ih(p), v = Rh(o, s, e, g);
                o = v.min, s = v.max
            }
        }
        return [o, s]
    }

    function Rh(t, e, i, n) {
        var r = i.axis.getExtent(), a = r[1] - r[0], o = Dh(n, i.axis);
        if (void 0 === o) return {min: t, max: e};
        var s = 1 / 0;
        f(o, function (t) {
            s = Math.min(t.offset, s)
        });
        var l = -1 / 0;
        f(o, function (t) {
            l = Math.max(t.offset + t.width, l)
        }), s = Math.abs(s), l = Math.abs(l);
        var u = s + l, h = e - t, c = 1 - (s + l) / a, d = h / c - h;
        return e += d * (l / u), t -= d * (s / u), {min: t, max: e}
    }

    function Bh(t, e) {
        var i = zh(t, e), n = null != e.getMin(), r = null != e.getMax(), a = e.get("splitNumber");
        "log" === t.type && (t.base = e.get("logBase"));
        var o = t.type;
        t.setExtent(i[0], i[1]), t.niceExtent({
            splitNumber: a,
            fixMin: n,
            fixMax: r,
            minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
            maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
        });
        var s = e.get("interval");
        null != s && t.setInterval && t.setInterval(s)
    }

    function Eh(t, e) {
        if (e = e || t.get("type")) switch (e) {
            case"category":
                return new gb(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
            case"value":
                return new yb;
            default:
                return (ph.getClass(e) || yb).create(t)
        }
    }

    function Nh(t) {
        var e = t.scale.getExtent(), i = e[0], n = e[1];
        return !(i > 0 && n > 0 || 0 > i && 0 > n)
    }

    function Fh(t) {
        var e = t.getLabelModel().get("formatter"), i = "category" === t.type ? t.scale.getExtent()[0] : null;
        return "string" == typeof e ? e = function (e) {
            return function (i) {
                return i = t.scale.getLabel(i), e.replace("{value}", null != i ? i : "")
            }
        }(e) : "function" == typeof e ? function (n, r) {
            return null != i && (r = n - i), e(Vh(t, n), r)
        } : function (e) {
            return t.scale.getLabel(e)
        }
    }

    function Vh(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e
    }

    function Hh(t) {
        var e = t.model, i = t.scale;
        if (e.get("axisLabel.show") && !i.isBlank()) {
            var n, r, a = "category" === t.type, o = i.getExtent();
            a ? r = i.count() : (n = i.getTicks(), r = n.length);
            var s, l = t.getLabelModel(), u = Fh(t), h = 1;
            r > 40 && (h = Math.ceil(r / 40));
            for (var c = 0; r > c; c += h) {
                var d = n ? n[c] : o[0] + c, f = u(d), p = l.getTextRect(f), g = Gh(p, l.get("rotate") || 0);
                s ? s.union(g) : s = g
            }
            return s
        }
    }

    function Gh(t, e) {
        var i = e * Math.PI / 180, n = t.plain(), r = n.width, a = n.height, o = r * Math.cos(i) + a * Math.sin(i),
            s = r * Math.sin(i) + a * Math.cos(i), l = new Si(n.x, n.y, o, s);
        return l
    }

    function Wh(t) {
        var e = t.get("interval");
        return null == e ? "auto" : e
    }

    function Xh(t) {
        return "category" === t.type && 0 === Wh(t.getLabelModel())
    }

    function Yh(t, e) {
        if ("image" !== this.type) {
            var i = this.style, n = this.shape;
            n && "line" === n.symbolType ? i.stroke = t : this.__isEmptyBrush ? (i.stroke = t, i.fill = e || "#fff") : (i.fill && (i.fill = t), i.stroke && (i.stroke = t)), this.dirty(!1)
        }
    }

    function Uh(t, e, i, n, r, a, o) {
        var s = 0 === t.indexOf("empty");
        s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var l;
        return l = 0 === t.indexOf("image://") ? ya(t.slice(8), new Si(e, i, n, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? ma(t.slice(7), {}, new Si(e, i, n, r), o ? "center" : "cover") : new Kb({
            shape: {
                symbolType: t,
                x: e,
                y: i,
                width: n,
                height: r
            }
        }), l.__isEmptyBrush = s, l.setColor = Yh, l.setColor(a), l
    }

    function Zh(t) {
        return ch(t.getSource(), t)
    }

    function qh(t, e) {
        var i = e;
        co.isInstance(e) || (i = new co(e), c(i, Gb));
        var n = Eh(i);
        return n.setExtent(t[0], t[1]), Bh(n, i), n
    }

    function jh(t) {
        c(t, Gb)
    }

    function Kh(t, e) {
        return Math.abs(t - e) < Jb
    }

    function $h(t, e, i) {
        var n = 0, r = t[0];
        if (!r) return !1;
        for (var a = 1; a < t.length; a++) {
            var o = t[a];
            n += Xr(r[0], r[1], o[0], o[1], e, i), r = o
        }
        var s = t[0];
        return Kh(r[0], s[0]) && Kh(r[1], s[1]) || (n += Xr(r[0], r[1], s[0], s[1], e, i)), 0 !== n
    }

    function Qh(t, e, i) {
        if (this.name = t, this.geometries = e, i) i = [i[0], i[1]]; else {
            var n = this.getBoundingRect();
            i = [n.x + n.width / 2, n.y + n.height / 2]
        }
        this.center = i
    }

    function Jh(t) {
        if (!t.UTF8Encoding) return t;
        var e = t.UTF8Scale;
        null == e && (e = 1024);
        for (var i = t.features, n = 0; n < i.length; n++) for (var r = i[n], a = r.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o.length; l++) {
            var u = o[l];
            if ("Polygon" === a.type) o[l] = tc(u, s[l], e); else if ("MultiPolygon" === a.type) for (var h = 0; h < u.length; h++) {
                var c = u[h];
                u[h] = tc(c, s[l][h], e)
            }
        }
        return t.UTF8Encoding = !1, t
    }

    function tc(t, e, i) {
        for (var n = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
            var s = t.charCodeAt(o) - 64, l = t.charCodeAt(o + 1) - 64;
            s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += a, r = s, a = l, n.push([s / i, l / i])
        }
        return n
    }

    function ec(t) {
        return "category" === t.type ? nc(t) : oc(t)
    }

    function ic(t, e) {
        return "category" === t.type ? ac(t, e) : {ticks: t.scale.getTicks()}
    }

    function nc(t) {
        var e = t.getLabelModel(), i = rc(t, e);
        return !e.get("show") || t.scale.isBlank() ? {labels: [], labelCategoryInterval: i.labelCategoryInterval} : i
    }

    function rc(t, e) {
        var i = sc(t, "labels"), n = Wh(e), r = lc(i, n);
        if (r) return r;
        var a, o;
        return w(n) ? a = pc(t, n) : (o = "auto" === n ? hc(t) : n, a = fc(t, o)), uc(i, n, {
            labels: a,
            labelCategoryInterval: o
        })
    }

    function ac(t, e) {
        var i = sc(t, "ticks"), n = Wh(e), r = lc(i, n);
        if (r) return r;
        var a, o;
        if ((!e.get("show") || t.scale.isBlank()) && (a = []), w(n)) a = pc(t, n, !0); else if ("auto" === n) {
            var s = rc(t, t.getLabelModel());
            o = s.labelCategoryInterval, a = p(s.labels, function (t) {
                return t.tickValue
            })
        } else o = n, a = fc(t, o, !0);
        return uc(i, n, {ticks: a, tickCategoryInterval: o})
    }

    function oc(t) {
        var e = t.scale.getTicks(), i = Fh(t);
        return {
            labels: p(e, function (e, n) {
                return {formattedLabel: i(e, n), rawLabel: t.scale.getLabel(e), tickValue: e}
            })
        }
    }

    function sc(t, e) {
        return eS(t)[e] || (eS(t)[e] = [])
    }

    function lc(t, e) {
        for (var i = 0; i < t.length; i++) if (t[i].key === e) return t[i].value
    }

    function uc(t, e, i) {
        return t.push({key: e, value: i}), i
    }

    function hc(t) {
        var e = eS(t).autoInterval;
        return null != e ? e : eS(t).autoInterval = t.calculateCategoryInterval()
    }

    function cc(t) {
        var e = dc(t), i = Fh(t), n = (e.axisRotate - e.labelRotate) / 180 * Math.PI, r = t.scale, a = r.getExtent(),
            o = r.count();
        if (a[1] - a[0] < 1) return 0;
        var s = 1;
        o > 40 && (s = Math.max(1, Math.floor(o / 40)));
        for (var l = a[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(n)), c = Math.abs(u * Math.sin(n)), d = 0, f = 0; l <= a[1]; l += s) {
            var p = 0, g = 0, v = Gi(i(l), e.font, "center", "top");
            p = 1.3 * v.width, g = 1.3 * v.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7)
        }
        var m = d / h, y = f / c;
        isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);
        var _ = Math.max(0, Math.floor(Math.min(m, y))), x = eS(t.model), w = t.getExtent(), b = x.lastAutoInterval,
            S = x.lastTickCount;
        return null != b && null != S && Math.abs(b - _) <= 1 && Math.abs(S - o) <= 1 && b > _ && x.axisExtend0 === w[0] && x.axisExtend1 === w[1] ? _ = b : (x.lastTickCount = o, x.lastAutoInterval = _, x.axisExtend0 = w[0], x.axisExtend1 = w[1]), _
    }

    function dc(t) {
        var e = t.getLabelModel();
        return {
            axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
            labelRotate: e.get("rotate") || 0,
            font: e.getFont()
        }
    }

    function fc(t, e, i) {
        function n(t) {
            l.push(i ? t : {formattedLabel: r(t), rawLabel: a.getLabel(t), tickValue: t})
        }

        var r = Fh(t), a = t.scale, o = a.getExtent(), s = t.getLabelModel(), l = [], u = Math.max((e || 0) + 1, 1),
            h = o[0], c = a.count();
        0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
        var d = Xh(t), f = s.get("showMinLabel") || d, p = s.get("showMaxLabel") || d;
        f && h !== o[0] && n(o[0]);
        for (var g = h; g <= o[1]; g += u) n(g);
        return p && g - u !== o[1] && n(o[1]), l
    }

    function pc(t, e, i) {
        var n = t.scale, r = Fh(t), a = [];
        return f(n.getTicks(), function (t) {
            var o = n.getLabel(t);
            e(t, o) && a.push(i ? t : {formattedLabel: r(t), rawLabel: o, tickValue: t})
        }), a
    }

    function gc(t, e) {
        var i = t[1] - t[0], n = e, r = i / n / 2;
        t[0] += r, t[1] -= r
    }

    function vc(t, e, i, n) {
        function r(t, e) {
            return t = wo(t), e = wo(e), d ? t > e : e > t
        }

        var a = e.length;
        if (t.onBand && !i && a) {
            var o, s, l = t.getExtent();
            if (1 === a) e[0].coord = l[0], o = e[1] = {coord: l[0]}; else {
                var u = e[a - 1].tickValue - e[0].tickValue, h = (e[a - 1].coord - e[0].coord) / u;
                f(e, function (t) {
                    t.coord -= h / 2
                });
                var c = t.scale.getExtent();
                s = 1 + c[1] - e[a - 1].tickValue, o = {coord: e[a - 1].coord + h * s}, e.push(o)
            }
            var d = l[0] > l[1];
            r(e[0].coord, l[0]) && (n ? e[0].coord = l[0] : e.shift()), n && r(l[0], e[0].coord) && e.unshift({coord: l[0]}), r(l[1], o.coord) && (n ? o.coord = l[1] : e.pop()), n && r(o.coord, l[1]) && e.push({coord: l[1]})
        }
    }

    function mc(t) {
        return this._axes[t]
    }

    function yc(t) {
        sS.call(this, t)
    }

    function _c(t, e) {
        return e.type || (e.data ? "category" : "value")
    }

    function xc(t, e) {
        return t.getCoordSysModel() === e
    }

    function wc(t, e, i) {
        this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, i), this.model = t
    }

    function bc(t, e, i, n) {
        function r(t) {
            return t.dim + "_" + t.index
        }

        i.getAxesOnZeroOf = function () {
            return a ? [a] : []
        };
        var a, o = t[e], s = i.model, l = s.get("axisLine.onZero"), u = s.get("axisLine.onZeroAxisIndex");
        if (l) {
            if (null != u) Sc(o[u]) && (a = o[u]); else for (var h in o) if (o.hasOwnProperty(h) && Sc(o[h]) && !n[r(o[h])]) {
                a = o[h];
                break
            }
            a && (n[r(a)] = !0)
        }
    }

    function Sc(t) {
        return t && "category" !== t.type && "time" !== t.type && Nh(t)
    }

    function Mc(t, e) {
        var i = t.getExtent(), n = i[0] + i[1];
        t.toGlobalCoord = "x" === t.dim ? function (t) {
            return t + e
        } : function (t) {
            return n - t + e
        }, t.toLocalCoord = "x" === t.dim ? function (t) {
            return t - e
        } : function (t) {
            return n - t + e
        }
    }

    function Tc(t) {
        return p(vS, function (e) {
            var i = t.getReferringComponents(e)[0];
            return i
        })
    }

    function Ic(t) {
        return "cartesian2d" === t.get("coordinateSystem")
    }

    function Cc(t, e) {
        var i = t.mapDimension("defaultedLabel", !0), n = i.length;
        if (1 === n) return js(t, e, i[0]);
        if (n) {
            for (var r = [], a = 0; a < i.length; a++) {
                var o = js(t, e, i[a]);
                r.push(o)
            }
            return r.join(" ")
        }
    }

    function Dc(t, e, i, n, r, a) {
        var o = i.getModel("label"), s = i.getModel("emphasis.label");
        Va(t, e, o, s, {
            labelFetcher: r,
            labelDataIndex: a,
            defaultText: Cc(r.getData(), a),
            isRectText: !0,
            autoColor: n
        }), Ac(t), Ac(e)
    }

    function Ac(t, e) {
        "outside" === t.textPosition && (t.textPosition = e)
    }

    function kc(t, e, i) {
        var n = t.getArea(), r = t.getBaseAxis().isHorizontal(), a = n.x, o = n.y, s = n.width, l = n.height,
            u = i.get("lineStyle.width") || 2;
        a -= u / 2, o -= u / 2, s += u, l += u;
        var h = new Hy({shape: {x: a, y: o, width: s, height: l}});
        return e && (h.shape[r ? "width" : "height"] = 0, Ja(h, {shape: {width: s, height: l}}, i)), h
    }

    function Lc(t, e, i) {
        var n = t.getArea(), r = new Oy({
            shape: {
                cx: wo(t.cx, 1),
                cy: wo(t.cy, 1),
                r0: wo(n.r0, 1),
                r: wo(n.r, 1),
                startAngle: n.startAngle,
                endAngle: n.endAngle,
                clockwise: n.clockwise
            }
        });
        return e && (r.shape.endAngle = n.startAngle, Ja(r, {shape: {endAngle: n.endAngle}}, i)), r
    }

    function Pc(t, e, i) {
        return t ? "polar" === t.type ? Lc(t, e, i) : "cartesian2d" === t.type ? kc(t, e, i) : null : null
    }

    function Oc(t, e) {
        var i = t.getArea && t.getArea();
        if ("cartesian2d" === t.type) {
            var n = t.getBaseAxis();
            if ("category" !== n.type || !n.onBand) {
                var r = e.getLayout("bandWidth");
                n.isHorizontal() ? (i.x -= r, i.width += 2 * r) : (i.y -= r, i.height += 2 * r)
            }
        }
        return i
    }

    function zc(t, e, i) {
        i.style.text = null, Qa(i, {shape: {width: 0}}, e, t, function () {
            i.parent && i.parent.remove(i)
        })
    }

    function Rc(t, e, i) {
        i.style.text = null, Qa(i, {shape: {r: i.shape.r0}}, e, t, function () {
            i.parent && i.parent.remove(i)
        })
    }

    function Bc(t) {
        return null != t.startAngle && null != t.endAngle && t.startAngle === t.endAngle
    }

    function Ec(t, e, i, n, r, a, o, l) {
        var u = e.getItemVisual(i, "color"), h = e.getItemVisual(i, "opacity"), c = e.getVisual("borderColor"),
            d = n.getModel("itemStyle"), f = n.getModel("emphasis.itemStyle").getBarItemStyle();
        l || t.setShape("r", d.get("barBorderRadius") || 0), t.useStyle(s({
            stroke: Bc(r) ? "none" : c,
            fill: Bc(r) ? "none" : u,
            opacity: h
        }, d.getBarItemStyle()));
        var p = n.getShallow("cursor");
        p && t.attr("cursor", p);
        var g = o ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";
        l || Dc(t.style, f, n, u, a, i, g), Bc(r) && (f.fill = f.stroke = "none"), Ba(t, f)
    }

    function Nc(t, e) {
        var i = t.get(wS) || 0;
        return Math.min(i, Math.abs(e.width), Math.abs(e.height))
    }

    function Fc(t, e, i) {
        var n = t.getData(), r = [], a = n.getLayout("valueAxisHorizontal") ? 1 : 0;
        r[1 - a] = n.getLayout("valueAxisStart");
        var o = new DS({
            shape: {points: n.getLayout("largePoints")},
            incremental: !!i,
            __startPoint: r,
            __baseDimIdx: a,
            __largeDataIndices: n.getLayout("largeDataIndices"),
            __barWidth: n.getLayout("barWidth")
        });
        e.add(o), Hc(o, t, n), o.seriesIndex = t.seriesIndex, t.get("silent") || (o.on("mousedown", AS), o.on("mousemove", AS))
    }

    function Vc(t, e, i) {
        var n = t.__baseDimIdx, r = 1 - n, a = t.shape.points, o = t.__largeDataIndices, s = Math.abs(t.__barWidth / 2),
            l = t.__startPoint[r];
        bS[0] = e, bS[1] = i;
        for (var u = bS[n], h = bS[1 - n], c = u - s, d = u + s, f = 0, p = a.length / 2; p > f; f++) {
            var g = 2 * f, v = a[g + n], m = a[g + r];
            if (v >= c && d >= v && (m >= l ? h >= l && m >= h : h >= m && l >= h)) return o[f]
        }
        return -1
    }

    function Hc(t, e, i) {
        var n = i.getVisual("borderColor") || i.getVisual("color"),
            r = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);
        t.useStyle(r), t.style.fill = null, t.style.stroke = n, t.style.lineWidth = i.getLayout("barWidth")
    }

    function Gc(t, e, i, n) {
        var r, a, o = Co(i - t.rotation), s = n[0] > n[1], l = "start" === e && !s || "start" !== e && s;
        return Do(o - kS / 2) ? (a = l ? "bottom" : "top", r = "center") : Do(o - 1.5 * kS) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = 1.5 * kS > o && o > kS / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
            rotation: o,
            textAlign: r,
            textVerticalAlign: a
        }
    }

    function Wc(t, e, i) {
        if (!Xh(t.axis)) {
            var n = t.get("axisLabel.showMinLabel"), r = t.get("axisLabel.showMaxLabel");
            e = e || [], i = i || [];
            var a = e[0], o = e[1], s = e[e.length - 1], l = e[e.length - 2], u = i[0], h = i[1], c = i[i.length - 1],
                d = i[i.length - 2];
            n === !1 ? (Xc(a), Xc(u)) : Yc(a, o) && (n ? (Xc(o), Xc(h)) : (Xc(a), Xc(u))), r === !1 ? (Xc(s), Xc(c)) : Yc(l, s) && (r ? (Xc(l), Xc(d)) : (Xc(s), Xc(c)))
        }
    }

    function Xc(t) {
        t && (t.ignore = !0)
    }

    function Yc(t, e) {
        var i = t && t.getBoundingRect().clone(), n = e && e.getBoundingRect().clone();
        if (i && n) {
            var r = Le([]);
            return Re(r, r, -t.rotation), i.applyTransform(Oe([], r, t.getLocalTransform())), n.applyTransform(Oe([], r, e.getLocalTransform())), i.intersect(n)
        }
    }

    function Uc(t) {
        return "middle" === t || "center" === t
    }

    function Zc(t, e, i, n, r) {
        for (var a = [], o = [], s = [], l = 0; l < t.length; l++) {
            var u = t[l].coord;
            o[0] = u, o[1] = 0, s[0] = u, s[1] = i, e && (ae(o, o, e), ae(s, s, e));
            var h = new Wy({
                anid: r + "_" + t[l].tickValue,
                subPixelOptimize: !0,
                shape: {x1: o[0], y1: o[1], x2: s[0], y2: s[1]},
                style: n,
                z2: 2,
                silent: !0
            });
            a.push(h)
        }
        return a
    }

    function qc(t, e, i) {
        var n = e.axis, r = e.getModel("axisTick");
        if (r.get("show") && !n.scale.isBlank()) {
            for (var a = r.getModel("lineStyle"), o = i.tickDirection * r.get("length"), l = n.getTicksCoords(), u = Zc(l, t._transform, o, s(a.getLineStyle(), {stroke: e.get("axisLine.lineStyle.color")}), "ticks"), h = 0; h < u.length; h++) t.group.add(u[h]);
            return u
        }
    }

    function jc(t, e, i) {
        var n = e.axis, r = e.getModel("minorTick");
        if (r.get("show") && !n.scale.isBlank()) {
            var a = n.getMinorTicksCoords();
            if (a.length) for (var o = r.getModel("lineStyle"), l = i.tickDirection * r.get("length"), u = s(o.getLineStyle(), s(e.getModel("axisTick").getLineStyle(), {stroke: e.get("axisLine.lineStyle.color")})), h = 0; h < a.length; h++) for (var c = Zc(a[h], t._transform, l, u, "minorticks_" + h), d = 0; d < c.length; d++) t.group.add(c[d])
        }
    }

    function Kc(t, e, i) {
        var n = e.axis, r = D(i.axisLabelShow, e.get("axisLabel.show"));
        if (r && !n.scale.isBlank()) {
            var a = e.getModel("axisLabel"), o = a.get("margin"), s = n.getViewLabels(),
                l = (D(i.labelRotate, a.get("rotate")) || 0) * kS / 180, u = zS(i.rotation, l, i.labelDirection),
                h = e.getCategories && e.getCategories(!0), c = [], d = RS(e), p = e.get("triggerEvent");
            return f(s, function (r, s) {
                var l = r.tickValue, f = r.formattedLabel, g = r.rawLabel, v = a;
                h && h[l] && h[l].textStyle && (v = new co(h[l].textStyle, a, e.ecModel));
                var m = v.getTextColor() || e.get("axisLine.lineStyle.color"), y = n.dataToCoord(l),
                    _ = [y, i.labelOffset + i.labelDirection * o],
                    x = new Ay({anid: "label_" + l, position: _, rotation: u.rotation, silent: d, z2: 10});
                Ga(x.style, v, {
                    text: f,
                    textAlign: v.getShallow("align", !0) || u.textAlign,
                    textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || u.textVerticalAlign,
                    textFill: "function" == typeof m ? m("category" === n.type ? g : "value" === n.type ? l + "" : l, s) : m
                }), p && (x.eventData = OS(e), x.eventData.targetType = "axisLabel", x.eventData.value = g), t._dumbGroup.add(x), x.updateTransform(), c.push(x), t.group.add(x), x.decomposeTransform()
            }), c
        }
    }

    function $c(t, e) {
        var i = {axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {}};
        return Qc(i, t, e), i.seriesInvolved && td(i, t), i
    }

    function Qc(t, e, i) {
        var n = e.getComponent("tooltip"), r = e.getComponent("axisPointer"), a = r.get("link", !0) || [], o = [];
        BS(i.getCoordinateSystems(), function (i) {
            function s(n, s, l) {
                var h = l.model.getModel("axisPointer", r), d = h.get("show");
                if (d && ("auto" !== d || n || od(h))) {
                    null == s && (s = h.get("triggerTooltip")), h = n ? Jc(l, c, r, e, n, s) : h;
                    var f = h.get("snap"), p = sd(l.model), g = s || f || "category" === l.type, v = t.axesInfo[p] = {
                        key: p,
                        axis: l,
                        coordSys: i,
                        axisPointerModel: h,
                        triggerTooltip: s,
                        involveSeries: g,
                        snap: f,
                        useHandle: od(h),
                        seriesModels: []
                    };
                    u[p] = v, t.seriesInvolved |= g;
                    var m = ed(a, l);
                    if (null != m) {
                        var y = o[m] || (o[m] = {axesInfo: {}});
                        y.axesInfo[p] = v, y.mapper = a[m].mapper, v.linkGroup = y
                    }
                }
            }

            if (i.axisPointerEnabled) {
                var l = sd(i.model), u = t.coordSysAxesInfo[l] = {};
                t.coordSysMap[l] = i;
                var h = i.model, c = h.getModel("tooltip", n);
                if (BS(i.getAxes(), ES(s, !1, null)), i.getTooltipAxes && n && c.get("show")) {
                    var d = "axis" === c.get("trigger"), f = "cross" === c.get("axisPointer.type"),
                        p = i.getTooltipAxes(c.get("axisPointer.axis"));
                    (d || f) && BS(p.baseAxes, ES(s, f ? "cross" : !0, d)), f && BS(p.otherAxes, ES(s, "cross", !1))
                }
            }
        })
    }

    function Jc(t, e, i, r, a, o) {
        var l = e.getModel("axisPointer"), u = {};
        BS(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function (t) {
            u[t] = n(l.get(t))
        }), u.snap = "category" !== t.type && !!o, "cross" === l.get("type") && (u.type = "line");
        var h = u.label || (u.label = {});
        if (null == h.show && (h.show = !1), "cross" === a) {
            var c = l.get("label.show");
            if (h.show = null != c ? c : !0, !o) {
                var d = u.lineStyle = l.get("crossStyle");
                d && s(h, d.textStyle)
            }
        }
        return t.model.getModel("axisPointer", new co(u, i, r))
    }

    function td(t, e) {
        e.eachSeries(function (e) {
            var i = e.coordinateSystem, n = e.get("tooltip.trigger", !0), r = e.get("tooltip.show", !0);
            i && "none" !== n && n !== !1 && "item" !== n && r !== !1 && e.get("axisPointer.show", !0) !== !1 && BS(t.coordSysAxesInfo[sd(i.model)], function (t) {
                var n = t.axis;
                i.getAxis(n.dim) === n && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
            })
        }, this)
    }

    function ed(t, e) {
        for (var i = e.model, n = e.dim, r = 0; r < t.length; r++) {
            var a = t[r] || {};
            if (id(a[n + "AxisId"], i.id) || id(a[n + "AxisIndex"], i.componentIndex) || id(a[n + "AxisName"], i.name)) return r
        }
    }

    function id(t, e) {
        return "all" === t || x(t) && u(t, e) >= 0 || t === e
    }

    function nd(t) {
        var e = rd(t);
        if (e) {
            var i = e.axisPointerModel, n = e.axis.scale, r = i.option, a = i.get("status"), o = i.get("value");
            null != o && (o = n.parse(o));
            var s = od(i);
            null == a && (r.status = s ? "show" : "hide");
            var l = n.getExtent().slice();
            l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
        }
    }

    function rd(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[sd(t)]
    }

    function ad(t) {
        var e = rd(t);
        return e && e.axisPointerModel
    }

    function od(t) {
        return !!t.get("handle.show")
    }

    function sd(t) {
        return t.type + "||" + t.id
    }

    function ld(t, e, i, n, r, a) {
        var o = NS.getAxisPointerClass(t.axisPointerClass);
        if (o) {
            var s = ad(e);
            s ? (t._axisPointer || (t._axisPointer = new o)).render(e, s, n, a) : ud(t, n)
        }
    }

    function ud(t, e, i) {
        var n = t._axisPointer;
        n && n.dispose(e, i), t._axisPointer = null
    }

    function hd(t, e, i) {
        i = i || {};
        var n = t.coordinateSystem, r = e.axis, a = {}, o = r.getAxesOnZeroOf()[0], s = r.position,
            l = o ? "onZero" : s, u = r.dim, h = n.getRect(), c = [h.x, h.x + h.width, h.y, h.y + h.height],
            d = {left: 0, right: 1, top: 0, bottom: 1, onZero: 2}, f = e.get("offset") || 0,
            p = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
        if (o) {
            var g = o.toGlobalCoord(o.dataToCoord(0));
            p[d.onZero] = Math.max(Math.min(g, p[1]), p[0])
        }
        a.position = ["y" === u ? p[d[l]] : c[0], "x" === u ? p[d[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);
        var v = {top: -1, bottom: 1, left: -1, right: 1};
        a.labelDirection = a.tickDirection = a.nameDirection = v[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), D(i.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
        var m = e.get("axisLabel.rotate");
        return a.labelRotate = "top" === l ? -m : m, a.z2 = 1, a
    }

    function cd(t, e, i) {
        pv.call(this), this.updateData(t, e, i)
    }

    function dd(t) {
        return [t[0] / 2, t[1] / 2]
    }

    function fd(t, e) {
        this.parent.drift(t, e)
    }

    function pd(t, e) {
        if (!this.incremental && !this.useHoverLayer) if ("emphasis" === e) {
            var i = this.__symbolOriginalScale, n = i[1] / i[0],
                r = {scale: [Math.max(1.1 * i[0], i[0] + 3), Math.max(1.1 * i[1], i[1] + 3 * n)]};
            this.animateTo(r, 400, "elasticOut")
        } else "normal" === e && this.animateTo({scale: this.__symbolOriginalScale}, 400, "elasticOut")
    }

    function gd(t) {
        this.group = new pv, this._symbolCtor = t || cd
    }

    function vd(t, e, i, n) {
        return !(!e || isNaN(e[0]) || isNaN(e[1]) || n.isIgnore && n.isIgnore(i) || n.clipShape && !n.clipShape.contain(e[0], e[1]) || "none" === t.getItemVisual(i, "symbol"))
    }

    function md(t) {
        return null == t || S(t) || (t = {isIgnore: t}), t || {}
    }

    function yd(t) {
        var e = t.hostModel;
        return {
            itemStyle: e.getModel("itemStyle").getItemStyle(["color"]),
            hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
            symbolRotate: e.get("symbolRotate"),
            symbolOffset: e.get("symbolOffset"),
            hoverAnimation: e.get("hoverAnimation"),
            labelModel: e.getModel("label"),
            hoverLabelModel: e.getModel("emphasis.label"),
            cursorStyle: e.get("cursor")
        }
    }

    function _d(t, e, i) {
        var n, r = t.getBaseAxis(), a = t.getOtherAxis(r), o = xd(a, i), s = r.dim, l = a.dim, u = e.mapDimension(l),
            h = e.mapDimension(s), c = "x" === l || "radius" === l ? 1 : 0, d = p(t.dimensions, function (t) {
                return e.mapDimension(t)
            }), f = e.getCalculationInfo("stackResultDimension");
        return (n |= uh(e, d[0])) && (d[0] = f), (n |= uh(e, d[1])) && (d[1] = f), {
            dataDimsForPoint: d,
            valueStart: o,
            valueAxisDim: l,
            baseAxisDim: s,
            stacked: !!n,
            valueDim: u,
            baseDim: h,
            baseDataOffset: c,
            stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
        }
    }

    function xd(t, e) {
        var i = 0, n = t.scale.getExtent();
        return "start" === e ? i = n[0] : "end" === e ? i = n[1] : n[0] > 0 ? i = n[0] : n[1] < 0 && (i = n[1]), i
    }

    function wd(t, e, i, n) {
        var r = 0 / 0;
        t.stacked && (r = i.get(i.getCalculationInfo("stackedOverDimension"), n)), isNaN(r) && (r = t.valueStart);
        var a = t.baseDataOffset, o = [];
        return o[a] = i.get(t.baseDim, n), o[1 - a] = r, e.dataToPoint(o)
    }

    function bd(t, e) {
        var i = [];
        return e.diff(t).add(function (t) {
            i.push({cmd: "+", idx: t})
        }).update(function (t, e) {
            i.push({cmd: "=", idx: e, idx1: t})
        }).remove(function (t) {
            i.push({cmd: "-", idx: t})
        }).execute(), i
    }

    function Sd(t) {
        return isNaN(t[0]) || isNaN(t[1])
    }

    function Md(t, e, i, n, r, a, o, s, l, u) {
        return "none" !== u && u ? Td.apply(this, arguments) : Id.apply(this, arguments)
    }

    function Td(t, e, i, n, r, a, o, s, l, u, h) {
        for (var c = 0, d = i, f = 0; n > f; f++) {
            var p = e[d];
            if (d >= r || 0 > d) break;
            if (Sd(p)) {
                if (h) {
                    d += a;
                    continue
                }
                break
            }
            if (d === i) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]); else if (l > 0) {
                var g = e[c], v = "y" === u ? 1 : 0, m = (p[v] - g[v]) * l;
                tM(iM, g), iM[v] = g[v] + m, tM(nM, p), nM[v] = p[v] - m, t.bezierCurveTo(iM[0], iM[1], nM[0], nM[1], p[0], p[1])
            } else t.lineTo(p[0], p[1]);
            c = d, d += a
        }
        return f
    }

    function Id(t, e, i, n, r, a, o, s, l, u, h) {
        for (var c = 0, d = i, f = 0; n > f; f++) {
            var p = e[d];
            if (d >= r || 0 > d) break;
            if (Sd(p)) {
                if (h) {
                    d += a;
                    continue
                }
                break
            }
            if (d === i) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]), tM(iM, p); else if (l > 0) {
                var g = d + a, v = e[g];
                if (h) for (; v && Sd(e[g]);) g += a, v = e[g];
                var m = .5, y = e[c], v = e[g];
                if (!v || Sd(v)) tM(nM, p); else {
                    Sd(v) && !h && (v = p), Z(eM, v, y);
                    var _, x;
                    if ("x" === u || "y" === u) {
                        var w = "x" === u ? 0 : 1;
                        _ = Math.abs(p[w] - y[w]), x = Math.abs(p[w] - v[w])
                    } else _ = _g(p, y), x = _g(p, v);
                    m = x / (x + _), JS(nM, p, eM, -l * (1 - m))
                }
                $S(iM, iM, s), QS(iM, iM, o), $S(nM, nM, s), QS(nM, nM, o), t.bezierCurveTo(iM[0], iM[1], nM[0], nM[1], p[0], p[1]), JS(iM, p, eM, l * m)
            } else t.lineTo(p[0], p[1]);
            c = d, d += a
        }
        return f
    }

    function Cd(t, e) {
        var i = [1 / 0, 1 / 0], n = [-1 / 0, -1 / 0];
        if (e) for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a[0] < i[0] && (i[0] = a[0]), a[1] < i[1] && (i[1] = a[1]), a[0] > n[0] && (n[0] = a[0]), a[1] > n[1] && (n[1] = a[1])
        }
        return {min: e ? i : n, max: e ? n : i}
    }

    function Dd(t, e) {
        if (t.length === e.length) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i], r = e[i];
                if (n[0] !== r[0] || n[1] !== r[1]) return
            }
            return !0
        }
    }

    function Ad(t) {
        return "number" == typeof t ? t : t ? .5 : 0
    }

    function kd(t, e, i) {
        if (!i.valueDim) return [];
        for (var n = [], r = 0, a = e.count(); a > r; r++) n.push(wd(i, t, e, r));
        return n
    }

    function Ld(t, e, i) {
        for (var n = e.getBaseAxis(), r = "x" === n.dim || "radius" === n.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
            var s = t[o + 1], l = t[o];
            a.push(l);
            var u = [];
            switch (i) {
                case"end":
                    u[r] = s[r], u[1 - r] = l[1 - r], a.push(u);
                    break;
                case"middle":
                    var h = (l[r] + s[r]) / 2, c = [];
                    u[r] = c[r] = h, u[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(u), a.push(c);
                    break;
                default:
                    u[r] = l[r], u[1 - r] = s[1 - r], a.push(u)
            }
        }
        return t[o] && a.push(t[o]), a
    }

    function Pd(t, e) {
        var i = t.getVisual("visualMeta");
        if (i && i.length && t.count() && "cartesian2d" === e.type) {
            for (var n, r, a = i.length - 1; a >= 0; a--) {
                var o = i[a].dimension, s = t.dimensions[o], l = t.getDimensionInfo(s);
                if (n = l && l.coordDim, "x" === n || "y" === n) {
                    r = i[a];
                    break
                }
            }
            if (r) {
                var u = e.getAxis(n), h = p(r.stops, function (t) {
                    return {coord: u.toGlobalCoord(u.dataToCoord(t.value)), color: t.color}
                }), c = h.length, d = r.outerColors.slice();
                c && h[0].coord > h[c - 1].coord && (h.reverse(), d.reverse());
                var g = 10, v = h[0].coord - g, m = h[c - 1].coord + g, y = m - v;
                if (.001 > y) return "transparent";
                f(h, function (t) {
                    t.offset = (t.coord - v) / y
                }), h.push({
                    offset: c ? h[c - 1].offset : .5,
                    color: d[1] || "transparent"
                }), h.unshift({offset: c ? h[0].offset : .5, color: d[0] || "transparent"});
                var _ = new jy(0, 0, 0, 0, h, !0);
                return _[n] = v, _[n + "2"] = m, _
            }
        }
    }

    function Od(t, e, i) {
        var n = t.get("showAllSymbol"), r = "auto" === n;
        if (!n || r) {
            var a = i.getAxesByScale("ordinal")[0];
            if (a && (!r || !zd(a, e))) {
                var o = e.mapDimension(a.dim), s = {};
                return f(a.getViewLabels(), function (t) {
                    s[t.tickValue] = 1
                }), function (t) {
                    return !s.hasOwnProperty(e.get(o, t))
                }
            }
        }
    }

    function zd(t, e) {
        var i = t.getExtent(), n = Math.abs(i[1] - i[0]) / t.scale.count();
        isNaN(n) && (n = 0);
        for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; r > o; o += a) if (1.5 * cd.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > n) return !1;
        return !0
    }

    function Rd(t, e, i) {
        if ("cartesian2d" === t.type) {
            var n = t.getBaseAxis().isHorizontal(), r = kc(t, e, i);
            if (!i.get("clip", !0)) {
                var a = r.shape, o = Math.max(a.width, a.height);
                n ? (a.y -= o, a.height += 2 * o) : (a.x -= o, a.width += 2 * o)
            }
            return r
        }
        return Lc(t, e, i)
    }

    function Bd(t, e) {
        this.getAllNames = function () {
            var t = e();
            return t.mapArray(t.getName)
        }, this.containName = function (t) {
            var i = e();
            return i.indexOfName(t) >= 0
        }, this.indexOfName = function (e) {
            var i = t();
            return i.indexOfName(e)
        }, this.getItemVisual = function (e, i) {
            var n = t();
            return n.getItemVisual(e, i)
        }
    }

    function Ed(t, e, i, n) {
        var r = e.getData(), a = this.dataIndex, o = r.getName(a), s = e.get("selectedOffset");
        n.dispatchAction({type: "pieToggleSelect", from: t, name: o, seriesId: e.id}), r.each(function (t) {
            Nd(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, i)
        })
    }

    function Nd(t, e, i, n, r) {
        var a = (e.startAngle + e.endAngle) / 2, o = Math.cos(a), s = Math.sin(a), l = i ? n : 0, u = [o * l, s * l];
        r ? t.animate().when(200, {position: u}).start("bounceOut") : t.attr("position", u)
    }

    function Fd(t, e) {
        pv.call(this);
        var i = new Oy({z2: 2}), n = new Ny, r = new Ay;
        this.add(i), this.add(n), this.add(r), this.updateData(t, e, !0)
    }

    function Vd(t, e, i, n, r, a, o, s, l, u) {
        function h(e, i, n) {
            for (var r = e; i > r && !(t[r].y + n > l + o); r++) if (t[r].y += n, r > e && i > r + 1 && t[r + 1].y > t[r].y + t[r].height) return void c(r, n / 2);
            c(i - 1, n / 2)
        }

        function c(e, i) {
            for (var n = e; n >= 0 && !(t[n].y - i < l) && (t[n].y -= i, !(n > 0 && t[n].y > t[n - 1].y + t[n - 1].height)); n--) ;
        }

        function d(t, e, i, n, r, a) {
            for (var o = a > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l > s; s++) if ("none" === t[s].labelAlignTo) {
                var u = Math.abs(t[s].y - n), h = t[s].len, c = t[s].len2,
                    d = r + h > u ? Math.sqrt((r + h + c) * (r + h + c) - u * u) : Math.abs(t[s].x - i);
                e && d >= o && (d = o - 10), !e && o >= d && (d = o + 10), t[s].x = i + d * a, o = d
            }
        }

        t.sort(function (t, e) {
            return t.y - e.y
        });
        for (var f, p = 0, g = t.length, v = [], m = [], y = 0; g > y; y++) {
            if ("outer" === t[y].position && "labelLine" === t[y].labelAlignTo) {
                var _ = t[y].x - u;
                t[y].linePoints[1][0] += _, t[y].x = u
            }
            f = t[y].y - p, 0 > f && h(y, g, -f, r), p = t[y].y + t[y].height
        }
        0 > o - p && c(g - 1, p - o);
        for (var y = 0; g > y; y++) t[y].y >= i ? m.push(t[y]) : v.push(t[y]);
        d(v, !1, e, i, n, r), d(m, !0, e, i, n, r)
    }

    function Hd(t, e, i, n, r, a, o, s) {
        for (var l = [], u = [], h = Number.MAX_VALUE, c = -Number.MAX_VALUE, d = 0; d < t.length; d++) Gd(t[d]) || (t[d].x < e ? (h = Math.min(h, t[d].x), l.push(t[d])) : (c = Math.max(c, t[d].x), u.push(t[d])));
        Vd(u, e, i, n, 1, r, a, o, s, c), Vd(l, e, i, n, -1, r, a, o, s, h);
        for (var d = 0; d < t.length; d++) {
            var f = t[d];
            if (!Gd(f)) {
                var p = f.linePoints;
                if (p) {
                    var g, v = "edge" === f.labelAlignTo, m = f.textRect.width;
                    g = v ? f.x < e ? p[2][0] - f.labelDistance - o - f.labelMargin : o + r - f.labelMargin - p[2][0] - f.labelDistance : f.x < e ? f.x - o - f.bleedMargin : o + r - f.x - f.bleedMargin, g < f.textRect.width && (f.text = qi(f.text, g, f.font), "edge" === f.labelAlignTo && (m = Hi(f.text, f.font)));
                    var y = p[1][0] - p[2][0];
                    v ? p[2][0] = f.x < e ? o + f.labelMargin + m + f.labelDistance : o + r - f.labelMargin - m - f.labelDistance : (p[2][0] = f.x < e ? f.x + f.labelDistance : f.x - f.labelDistance, p[1][0] = p[2][0] + y), p[1][1] = p[2][1] = f.y
                }
            }
        }
    }

    function Gd(t) {
        return "center" === t.position
    }

    function Wd(t, e) {
        return qo(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()})
    }

    function Xd(t) {
        for (var e, i = 0; i < t.length; i++) {
            var n = t[i].getBoundingRect();
            e = e || n.clone(), e.union(n)
        }
        return e
    }

    function Yd(t, e) {
        var i, n, r = t.svgXML;
        try {
            i = r && Hl(r, {ignoreViewBox: !0, ignoreRootClip: !0}) || {}, n = i.root, O(null != n)
        } catch (a) {
            throw new Error("Invalid svg format\n" + a.message)
        }
        var o = i.width, s = i.height, l = i.viewBoxRect;
        if (e || (e = null == o || null == s ? n.getBoundingRect() : new Si(0, 0, 0, 0), null != o && (e.width = o), null != s && (e.height = s)), l) {
            var u = Vl(l, e.width, e.height), h = n;
            n = new pv, n.add(h), h.scale = u.scale, h.position = u.position
        }
        return n.setClipPath(new Hy({shape: e.plain()})), {root: n, boundingRect: e}
    }

    function Ud(t) {
        return function (e, i) {
            var n = Zd(e), r = [];
            return f(n, function (n) {
                var a = NM[n.type][t];
                a && r.push(a(e, n, i))
            }), r
        }
    }

    function Zd(t) {
        var e = lw.retrieveMap(t) || [];
        return e
    }

    function qd(t, e) {
        return !!jd(t)[e]
    }

    function jd(t) {
        return t[HM] || (t[HM] = {})
    }

    function Kd(t) {
        this.pointerChecker, this._zr = t, this._opt = {};
        var e = y, i = e($d, this), r = e(Qd, this), a = e(Jd, this), o = e(tf, this), l = e(ef, this);
        Sg.call(this), this.setPointerChecker = function (t) {
            this.pointerChecker = t
        }, this.enable = function (e, u) {
            this.disable(), this._opt = s(n(u) || {}, {
                zoomOnMouseWheel: !0,
                moveOnMouseMove: !0,
                moveOnMouseWheel: !1,
                preventDefaultMouseMove: !0
            }), null == e && (e = !0), (e === !0 || "move" === e || "pan" === e) && (t.on("mousedown", i), t.on("mousemove", r), t.on("mouseup", a)), (e === !0 || "scale" === e || "zoom" === e) && (t.on("mousewheel", o), t.on("pinch", l))
        }, this.disable = function () {
            t.off("mousedown", i), t.off("mousemove", r), t.off("mouseup", a), t.off("mousewheel", o), t.off("pinch", l)
        }, this.dispose = this.disable, this.isDragging = function () {
            return this._dragging
        }, this.isPinching = function () {
            return this._pinching
        }
    }

    function $d(t) {
        if (!(be(t) || t.target && t.target.draggable)) {
            var e = t.offsetX, i = t.offsetY;
            this.pointerChecker && this.pointerChecker(t, e, i) && (this._x = e, this._y = i, this._dragging = !0)
        }
    }

    function Qd(t) {
        if (this._dragging && af("moveOnMouseMove", t, this._opt) && "pinch" !== t.gestureEvent && !qd(this._zr, "globalPan")) {
            var e = t.offsetX, i = t.offsetY, n = this._x, r = this._y, a = e - n, o = i - r;
            this._x = e, this._y = i, this._opt.preventDefaultMouseMove && Ag(t.event), rf(this, "pan", "moveOnMouseMove", t, {
                dx: a,
                dy: o,
                oldX: n,
                oldY: r,
                newX: e,
                newY: i
            })
        }
    }

    function Jd(t) {
        be(t) || (this._dragging = !1)
    }

    function tf(t) {
        var e = af("zoomOnMouseWheel", t, this._opt), i = af("moveOnMouseWheel", t, this._opt), n = t.wheelDelta,
            r = Math.abs(n), a = t.offsetX, o = t.offsetY;
        if (0 !== n && (e || i)) {
            if (e) {
                var s = r > 3 ? 1.4 : r > 1 ? 1.2 : 1.1, l = n > 0 ? s : 1 / s;
                nf(this, "zoom", "zoomOnMouseWheel", t, {scale: l, originX: a, originY: o})
            }
            if (i) {
                var u = Math.abs(n), h = (n > 0 ? 1 : -1) * (u > 3 ? .4 : u > 1 ? .15 : .05);
                nf(this, "scrollMove", "moveOnMouseWheel", t, {scrollDelta: h, originX: a, originY: o})
            }
        }
    }

    function ef(t) {
        if (!qd(this._zr, "globalPan")) {
            var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
            nf(this, "zoom", null, t, {scale: e, originX: t.pinchX, originY: t.pinchY})
        }
    }

    function nf(t, e, i, n, r) {
        t.pointerChecker && t.pointerChecker(n, r.originX, r.originY) && (Ag(n.event), rf(t, e, i, n, r))
    }

    function rf(t, e, i, n, r) {
        r.isAvailableBehavior = y(af, null, i, n), t.trigger(e, r)
    }

    function af(t, e, i) {
        var n = i[t];
        return !t || n && (!b(n) || e.event[n + "Key"])
    }

    function of(t, e, i) {
        var n = t.target, r = n.position;
        r[0] += e, r[1] += i, n.dirty()
    }

    function sf(t, e, i, n) {
        var r = t.target, a = t.zoomLimit, o = r.position, s = r.scale, l = t.zoom = t.zoom || 1;
        if (l *= e, a) {
            var u = a.min || 0, h = a.max || 1 / 0;
            l = Math.max(Math.min(h, l), u)
        }
        var c = l / t.zoom;
        t.zoom = l, o[0] -= (i - o[0]) * (c - 1), o[1] -= (n - o[1]) * (c - 1), s[0] *= c, s[1] *= c, r.dirty()
    }

    function lf(t, e, i) {
        var n = e.getComponentByElement(t.topTarget), r = n && n.coordinateSystem;
        return n && n !== i && !GM[n.mainType] && r && r.model !== i
    }

    function uf(t) {
        var e = t.getItemStyle(), i = t.get("areaColor");
        return null != i && (e.fill = i), e
    }

    function hf(t, e, i, n, r) {
        i.off("click"), i.off("mousedown"), e.get("selectedMode") && (i.on("mousedown", function () {
            t._mouseDownFlag = !0
        }), i.on("click", function (a) {
            if (t._mouseDownFlag) {
                t._mouseDownFlag = !1;
                for (var o = a.target; !o.__regions;) o = o.parent;
                if (o) {
                    var s = {
                        type: ("geo" === e.mainType ? "geo" : "map") + "ToggleSelect",
                        batch: p(o.__regions, function (t) {
                            return {name: t.name, from: r.uid}
                        })
                    };
                    s[e.mainType + "Id"] = e.id, n.dispatchAction(s), cf(e, i)
                }
            }
        }))
    }

    function cf(t, e) {
        e.eachChild(function (e) {
            f(e.__regions, function (i) {
                e.trigger(t.isSelected(i.name) ? "emphasis" : "normal")
            })
        })
    }

    function df(t, e) {
        var i = new pv;
        this.uid = go("ec_map_draw"), this._controller = new Kd(t.getZr()), this._controllerHost = {target: e ? i : null}, this.group = i, this._updateGroup = e, this._mouseDownFlag, this._mapName, this._initialized, i.add(this._regionsGroup = new pv), i.add(this._backgroundGroup = new pv)
    }

    function ff(t) {
        var e = this[WM];
        e && e.recordVersion === this[XM] && pf(e, t)
    }

    function pf(t, e) {
        var i = t.circle, n = t.labelModel, r = t.hoverLabelModel, a = t.emphasisText, o = t.normalText;
        e ? (i.style.extendFrom(Ga({}, r, {text: r.get("show") ? a : null}, {
            isRectText: !0,
            useInsideStyle: !1
        }, !0)), i.__mapOriginalZ2 = i.z2, i.z2 += e_) : (Ga(i.style, n, {
            text: n.get("show") ? o : null,
            textPosition: n.getShallow("position") || "bottom"
        }, {
            isRectText: !0,
            useInsideStyle: !1
        }), i.dirty(!1), null != i.__mapOriginalZ2 && (i.z2 = i.__mapOriginalZ2, i.__mapOriginalZ2 = null))
    }

    function gf(t, e, i) {
        var n = t.getZoom(), r = t.getCenter(), a = e.zoom, o = t.dataToPoint(r);
        if (null != e.dx && null != e.dy) {
            o[0] -= e.dx, o[1] -= e.dy;
            var r = t.pointToData(o);
            t.setCenter(r)
        }
        if (null != a) {
            if (i) {
                var s = i.min || 0, l = i.max || 1 / 0;
                a = Math.max(Math.min(n * a, l), s) / n
            }
            t.scale[0] *= a, t.scale[1] *= a;
            var u = t.position, h = (e.originX - u[0]) * (a - 1), c = (e.originY - u[1]) * (a - 1);
            u[0] -= h, u[1] -= c, t.updateTransform();
            var r = t.pointToData(o);
            t.setCenter(r), t.setZoom(a * n)
        }
        return {center: t.getCenter(), zoom: t.getZoom()}
    }

    function vf() {
        Fg.call(this)
    }

    function mf(t) {
        this.name = t, this.zoomLimit, Fg.call(this), this._roamTransformable = new vf, this._rawTransformable = new vf, this._center, this._zoom
    }

    function yf(t, e, i, n) {
        var r = i.seriesModel, a = r ? r.coordinateSystem : null;
        return a === this ? a[t](n) : null
    }

    function _f(t, e, i, n) {
        mf.call(this, t), this.map = e;
        var r = FM.load(e, i);
        this._nameCoordMap = r.nameCoordMap, this._regionsMap = r.regionsMap, this._invertLongitute = null == n ? !0 : n, this.regions = r.regions, this._rect = r.boundingRect
    }

    function xf(t, e, i, n) {
        var r = i.geoModel, a = i.seriesModel,
            o = r ? r.coordinateSystem : a ? a.coordinateSystem || (a.getReferringComponents("geo")[0] || {}).coordinateSystem : null;
        return o === this ? o[t](n) : null
    }

    function wf(t, e) {
        var i = t.get("boundingCoords");
        if (null != i) {
            var n = i[0], r = i[1];
            isNaN(n[0]) || isNaN(n[1]) || isNaN(r[0]) || isNaN(r[1]) || this.setBoundingRect(n[0], n[1], r[0] - n[0], r[1] - n[1])
        }
        var a, o = this.getBoundingRect(), s = t.get("layoutCenter"), l = t.get("layoutSize"), u = e.getWidth(),
            h = e.getHeight(), c = o.width / o.height * this.aspectScale, d = !1;
        s && l && (s = [xo(s[0], u), xo(s[1], h)], l = xo(l, Math.min(u, h)), isNaN(s[0]) || isNaN(s[1]) || isNaN(l) || (d = !0));
        var f;
        if (d) {
            var f = {};
            c > 1 ? (f.width = l, f.height = l / c) : (f.height = l, f.width = l * c), f.y = s[1] - f.height / 2, f.x = s[0] - f.width / 2
        } else a = t.getBoxLayoutParams(), a.aspect = c, f = qo(a, {width: u, height: h});
        this.setViewRect(f.x, f.y, f.width, f.height), this.setCenter(t.get("center")), this.setZoom(t.get("zoom"))
    }

    function bf(t, e) {
        f(e.get("geoCoord"), function (e, i) {
            t.addGeoCoord(i, e)
        })
    }

    function Sf(t, e) {
        var i = {};
        return f(t, function (t) {
            t.each(t.mapDimension("value"), function (e, n) {
                var r = "ec-" + t.getName(n);
                i[r] = i[r] || [], isNaN(e) || i[r].push(e)
            })
        }), t[0].map(t[0].mapDimension("value"), function (n, r) {
            for (var a = "ec-" + t[0].getName(r), o = 0, s = 1 / 0, l = -1 / 0, u = i[a].length, h = 0; u > h; h++) s = Math.min(s, i[a][h]), l = Math.max(l, i[a][h]), o += i[a][h];
            var c;
            return c = "min" === e ? s : "max" === e ? l : "average" === e ? o / u : o, 0 === u ? 0 / 0 : c
        })
    }

    function Mf(t, e) {
        e.update = "updateView", wu(e, function (e, i) {
            var n = {};
            return i.eachComponent({mainType: "geo", query: e}, function (i) {
                i[t](e.name);
                var r = i.coordinateSystem;
                f(r.regions, function (t) {
                    n[t.name] = i.isSelected(t.name) || !1
                })
            }), {selected: n, name: e.name}
        })
    }

    function Tf(t, e, i) {
        var n, r = {}, a = "toggleSelected" === t;
        return i.eachComponent("legend", function (i) {
            a && null != n ? i[n ? "select" : "unSelect"](e.name) : "allSelect" === t || "inverseSelect" === t ? i[t]() : (i[t](e.name), n = i.isSelected(e.name));
            var o = i.getData();
            f(o, function (t) {
                var e = t.get("name");
                if ("\n" !== e && "" !== e) {
                    var n = i.isSelected(e);
                    r[e] = r.hasOwnProperty(e) ? r[e] && n : n
                }
            })
        }), "allSelect" === t || "inverseSelect" === t ? {selected: r} : {name: e.name, selected: r}
    }

    function If(t, e) {
        var i = M_(e.get("padding")), n = e.getItemStyle(["color", "opacity"]);
        n.fill = e.get("backgroundColor");
        var t = new Hy({
            shape: {
                x: t.x - i[3],
                y: t.y - i[0],
                width: t.width + i[1] + i[3],
                height: t.height + i[0] + i[2],
                r: e.get("borderRadius")
            }, style: n, silent: !0, z2: -1
        });
        return t
    }

    function Cf(t, e, i, n, r, a) {
        var o;
        return "line" !== e && e.indexOf("empty") < 0 ? (o = i.getItemStyle(), t.style.stroke = n, a || (o.stroke = r)) : o = i.getItemStyle(["borderWidth", "borderColor"]), t.setStyle(o)
    }

    function Df(t, e, i, n) {
        kf(t, e, i, n), i.dispatchAction({type: "legendToggleSelect", name: null != t ? t : e}), Af(t, e, i, n)
    }

    function Af(t, e, i, n) {
        var r = i.getZr().storage.getDisplayList()[0];
        r && r.useHoverLayer || i.dispatchAction({type: "highlight", seriesName: t, name: e, excludeSeriesId: n})
    }

    function kf(t, e, i, n) {
        var r = i.getZr().storage.getDisplayList()[0];
        r && r.useHoverLayer || i.dispatchAction({type: "downplay", seriesName: t, name: e, excludeSeriesId: n})
    }

    function Lf(t, e, i) {
        var n = t.getOrient(), r = [1, 1];
        r[n.index] = 0, Ko(e, i, {type: "box", ignoreSize: r})
    }

    function Pf(t, e, i, n, r) {
        var a = t.axis;
        if (!a.scale.isBlank() && a.containData(e)) {
            if (!t.involveSeries) return void i.showPointer(t, e);
            var s = Of(e, t), l = s.payloadBatch, u = s.snapToValue;
            l[0] && null == r.seriesIndex && o(r, l[0]), !n && t.snap && a.containData(u) && null != u && (e = u), i.showPointer(t, e, l, r), i.showTooltip(t, s, u)
        }
    }

    function Of(t, e) {
        var i = e.axis, n = i.dim, r = t, a = [], o = Number.MAX_VALUE, s = -1;
        return dT(e.seriesModels, function (e) {
            var l, u, h = e.getData().mapDimension(n, !0);
            if (e.getAxisTooltipData) {
                var c = e.getAxisTooltipData(h, t, i);
                u = c.dataIndices, l = c.nestestValue
            } else {
                if (u = e.getData().indicesOfNearest(h[0], t, "category" === i.type ? .5 : null), !u.length) return;
                l = e.getData().get(h[0], u[0])
            }
            if (null != l && isFinite(l)) {
                var d = t - l, f = Math.abs(d);
                o >= f && ((o > f || d >= 0 && 0 > s) && (o = f, s = d, r = l, a.length = 0), dT(u, function (t) {
                    a.push({seriesIndex: e.seriesIndex, dataIndexInside: t, dataIndex: e.getData().getRawIndex(t)})
                }))
            }
        }), {payloadBatch: a, snapToValue: r}
    }

    function zf(t, e, i, n) {
        t[e.key] = {value: i, payloadBatch: n}
    }

    function Rf(t, e, i, n) {
        var r = i.payloadBatch, a = e.axis, o = a.model, s = e.axisPointerModel;
        if (e.triggerTooltip && r.length) {
            var l = e.coordSys.model, u = sd(l), h = t.map[u];
            h || (h = t.map[u] = {
                coordSysId: l.id,
                coordSysIndex: l.componentIndex,
                coordSysType: l.type,
                coordSysMainType: l.mainType,
                dataByAxis: []
            }, t.list.push(h)), h.dataByAxis.push({
                axisDim: a.dim,
                axisIndex: o.componentIndex,
                axisType: o.type,
                axisId: o.id,
                value: n,
                valueLabelOpt: {precision: s.get("label.precision"), formatter: s.get("label.formatter")},
                seriesDataIndices: r.slice()
            })
        }
    }

    function Bf(t, e, i) {
        var n = i.axesInfo = [];
        dT(e, function (e, i) {
            var r = e.axisPointerModel.option, a = t[i];
            a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && n.push({
                axisDim: e.axis.dim,
                axisIndex: e.axis.model.componentIndex,
                value: r.value
            })
        })
    }

    function Ef(t, e, i, n) {
        if (Hf(e) || !t.list.length) return void n({type: "hideTip"});
        var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
        n({
            type: "showTip",
            escapeConnect: !0,
            x: e[0],
            y: e[1],
            tooltipOption: i.tooltipOption,
            position: i.position,
            dataIndexInside: r.dataIndexInside,
            dataIndex: r.dataIndex,
            seriesIndex: r.seriesIndex,
            dataByCoordSys: t.list
        })
    }

    function Nf(t, e, i) {
        var n = i.getZr(), r = "axisPointerLastHighlights", a = pT(n)[r] || {}, o = pT(n)[r] = {};
        dT(t, function (t) {
            var e = t.axisPointerModel.option;
            "show" === e.status && dT(e.seriesDataIndices, function (t) {
                var e = t.seriesIndex + " | " + t.dataIndex;
                o[e] = t
            })
        });
        var s = [], l = [];
        f(a, function (t, e) {
            !o[e] && l.push(t)
        }), f(o, function (t, e) {
            !a[e] && s.push(t)
        }), l.length && i.dispatchAction({
            type: "downplay",
            escapeConnect: !0,
            batch: l
        }), s.length && i.dispatchAction({type: "highlight", escapeConnect: !0, batch: s})
    }

    function Ff(t, e) {
        for (var i = 0; i < (t || []).length; i++) {
            var n = t[i];
            if (e.axis.dim === n.axisDim && e.axis.model.componentIndex === n.axisIndex) return n
        }
    }

    function Vf(t) {
        var e = t.axis.model, i = {}, n = i.axisDim = t.axis.dim;
        return i.axisIndex = i[n + "AxisIndex"] = e.componentIndex, i.axisName = i[n + "AxisName"] = e.name, i.axisId = i[n + "AxisId"] = e.id, i
    }

    function Hf(t) {
        return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
    }

    function Gf(t, e, i) {
        if (!eg.node) {
            var n = e.getZr();
            vT(n).records || (vT(n).records = {}), Wf(n, e);
            var r = vT(n).records[t] || (vT(n).records[t] = {});
            r.handler = i
        }
    }

    function Wf(t, e) {
        function i(i, n) {
            t.on(i, function (i) {
                var r = Zf(e);
                mT(vT(t).records, function (t) {
                    t && n(t, i, r.dispatchAction)
                }), Xf(r.pendings, e)
            })
        }

        vT(t).initialized || (vT(t).initialized = !0, i("click", _(Uf, "click")), i("mousemove", _(Uf, "mousemove")), i("globalout", Yf))
    }

    function Xf(t, e) {
        var i, n = t.showTip.length, r = t.hideTip.length;
        n ? i = t.showTip[n - 1] : r && (i = t.hideTip[r - 1]), i && (i.dispatchAction = null, e.dispatchAction(i))
    }

    function Yf(t, e, i) {
        t.handler("leave", null, i)
    }

    function Uf(t, e, i, n) {
        e.handler(t, i, n)
    }

    function Zf(t) {
        var e = {showTip: [], hideTip: []}, i = function (n) {
            var r = e[n.type];
            r ? r.push(n) : (n.dispatchAction = i, t.dispatchAction(n))
        };
        return {dispatchAction: i, pendings: e}
    }

    function qf(t, e) {
        if (!eg.node) {
            var i = e.getZr(), n = (vT(i).records || {})[t];
            n && (vT(i).records[t] = null)
        }
    }

    function jf() {
    }

    function Kf(t, e, i, n) {
        $f(_T(i).lastProp, n) || (_T(i).lastProp = n, e ? Qa(i, n, t) : (i.stopAnimation(), i.attr(n)))
    }

    function $f(t, e) {
        if (S(t) && S(e)) {
            var i = !0;
            return f(e, function (e, n) {
                i = i && $f(t[n], e)
            }), !!i
        }
        return t === e
    }

    function Qf(t, e) {
        t[e.get("label.show") ? "show" : "hide"]()
    }

    function Jf(t) {
        return {position: t.position.slice(), rotation: t.rotation || 0}
    }

    function tp(t, e, i) {
        var n = e.get("z"), r = e.get("zlevel");
        t && t.traverse(function (t) {
            "group" !== t.type && (null != n && (t.z = n), null != r && (t.zlevel = r), t.silent = i)
        })
    }

    function ep(t) {
        var e, i = t.get("type"), n = t.getModel(i + "Style");
        return "line" === i ? (e = n.getLineStyle(), e.fill = null) : "shadow" === i && (e = n.getAreaStyle(), e.stroke = null), e
    }

    function ip(t, e, i, n, r) {
        var a = i.get("value"), o = rp(a, e.axis, e.ecModel, i.get("seriesDataIndices"), {
                precision: i.get("label.precision"),
                formatter: i.get("label.formatter")
            }), s = i.getModel("label"), l = M_(s.get("padding") || 0), u = s.getFont(), h = Gi(o, u), c = r.position,
            d = h.width + l[1] + l[3], f = h.height + l[0] + l[2], p = r.align;
        "right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);
        var g = r.verticalAlign;
        "bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), np(c, d, f, n);
        var v = s.get("backgroundColor");
        v && "auto" !== v || (v = e.get("axisLine.lineStyle.color")), t.label = {
            shape: {
                x: 0,
                y: 0,
                width: d,
                height: f,
                r: s.get("borderRadius")
            },
            position: c.slice(),
            style: {
                text: o,
                textFont: u,
                textFill: s.getTextColor(),
                textPosition: "inside",
                textPadding: l,
                fill: v,
                stroke: s.get("borderColor") || "transparent",
                lineWidth: s.get("borderWidth") || 0,
                shadowBlur: s.get("shadowBlur"),
                shadowColor: s.get("shadowColor"),
                shadowOffsetX: s.get("shadowOffsetX"),
                shadowOffsetY: s.get("shadowOffsetY")
            },
            z2: 10
        }
    }

    function np(t, e, i, n) {
        var r = n.getWidth(), a = n.getHeight();
        t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + i, a) - i, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0)
    }

    function rp(t, e, i, n, r) {
        t = e.scale.parse(t);
        var a = e.scale.getLabel(t, {precision: r.precision}), o = r.formatter;
        if (o) {
            var s = {value: Vh(e, t), axisDimension: e.dim, axisIndex: e.index, seriesData: []};
            f(n, function (t) {
                var e = i.getSeriesByIndex(t.seriesIndex), n = t.dataIndexInside, r = e && e.getDataParams(n);
                r && s.seriesData.push(r)
            }), b(o) ? a = o.replace("{value}", a) : w(o) && (a = o(s))
        }
        return a
    }

    function ap(t, e, i) {
        var n = ke();
        return Re(n, n, i.rotation), ze(n, n, i.position), eo([t.dataToCoord(e), (i.labelOffset || 0) + (i.labelDirection || 1) * (i.labelMargin || 0)], n)
    }

    function op(t, e, i, n, r, a) {
        var o = LS.innerTextLayout(i.rotation, 0, i.labelDirection);
        i.labelMargin = r.get("label.margin"), ip(e, n, r, a, {
            position: ap(n.axis, t, i),
            align: o.textAlign,
            verticalAlign: o.textVerticalAlign
        })
    }

    function sp(t, e, i) {
        return i = i || 0, {x1: t[i], y1: t[1 - i], x2: e[i], y2: e[1 - i]}
    }

    function lp(t, e, i) {
        return i = i || 0, {x: t[i], y: t[1 - i], width: e[i], height: e[1 - i]}
    }

    function up(t, e) {
        var i = {};
        return i[e.dim + "AxisIndex"] = e.index, t.getCartesian(i)
    }

    function hp(t) {
        return "x" === t.dim ? 0 : 1
    }

    function cp(t) {
        var e = "cubic-bezier(0.23, 1, 0.32, 1)", i = "left " + t + "s " + e + ",top " + t + "s " + e;
        return p(IT, function (t) {
            return t + "transition:" + i
        }).join(";")
    }

    function dp(t) {
        var e = [], i = t.get("fontSize"), n = t.getTextColor();
        return n && e.push("color:" + n), e.push("font:" + t.getFont()), i && e.push("line-height:" + Math.round(3 * i / 2) + "px"), MT(["decoration", "align"], function (i) {
            var n = t.get(i);
            n && e.push("text-" + i + ":" + n)
        }), e.join(";")
    }

    function fp(t) {
        var e = [], i = t.get("transitionDuration"), n = t.get("backgroundColor"), r = t.getModel("textStyle"),
            a = t.get("padding");
        return i && e.push(cp(i)), n && (eg.canvasSupported ? e.push("background-Color:" + n) : (e.push("background-Color:#" + ei(n)), e.push("filter:alpha(opacity=70)"))), MT(["width", "color", "radius"], function (i) {
            var n = "border-" + i, r = TT(n), a = t.get(r);
            null != a && e.push(n + ":" + a + ("color" === i ? "" : "px"))
        }), e.push(dp(r)), null != a && e.push("padding:" + M_(a).join("px ") + "px"), e.join(";") + ";"
    }

    function pp(t, e) {
        if (eg.wxa) return null;
        var i = document.createElement("div"), n = this._zr = e.getZr();
        this.el = i, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(i), this._container = t, this._show = !1, this._hideTimeout;
        var r = this;
        i.onmouseenter = function () {
            r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
        }, i.onmousemove = function (e) {
            if (e = e || window.event, !r._enterable) {
                var i = n.handler;
                _e(t, e, !0), i.dispatch("mousemove", e)
            }
        }, i.onmouseleave = function () {
            r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
        }
    }

    function gp(t) {
        this._zr = t.getZr(), this._show = !1, this._hideTimeout
    }

    function vp(t) {
        for (var e = t.pop(); t.length;) {
            var i = t.pop();
            i && (co.isInstance(i) && (i = i.get("tooltip", !0)), "string" == typeof i && (i = {formatter: i}), e = new co(i, e, e.ecModel))
        }
        return e
    }

    function mp(t, e) {
        return t.dispatchAction || y(e.dispatchAction, e)
    }

    function yp(t, e, i, n, r, a, o) {
        var s = i.getOuterSize(), l = s.width, u = s.height;
        return null != a && (t + l + a > n ? t -= l + a : t += a), null != o && (e + u + o > r ? e -= u + o : e += o), [t, e]
    }

    function _p(t, e, i, n, r) {
        var a = i.getOuterSize(), o = a.width, s = a.height;
        return t = Math.min(t + o, n) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
    }

    function xp(t, e, i) {
        var n = i[0], r = i[1], a = 5, o = 0, s = 0, l = e.width, u = e.height;
        switch (t) {
            case"inside":
                o = e.x + l / 2 - n / 2, s = e.y + u / 2 - r / 2;
                break;
            case"top":
                o = e.x + l / 2 - n / 2, s = e.y - r - a;
                break;
            case"bottom":
                o = e.x + l / 2 - n / 2, s = e.y + u + a;
                break;
            case"left":
                o = e.x - n - a, s = e.y + u / 2 - r / 2;
                break;
            case"right":
                o = e.x + l + a, s = e.y + u / 2 - r / 2
        }
        return [o, s]
    }

    function wp(t) {
        return "center" === t || "middle" === t
    }

    function bp(t, e) {
        return t && t.hasOwnProperty && t.hasOwnProperty(e)
    }

    function Sp(t) {
        var e = t.pieceList;
        t.hasSpecialVisual = !1, f(e, function (e, i) {
            e.originIndex = i, null != e.visual && (t.hasSpecialVisual = !0)
        })
    }

    function Mp(t) {
        var e = t.categories, i = t.visual, n = t.categoryMap = {};
        if (zT(e, function (t, e) {
            n[t] = e
        }), !x(i)) {
            var r = [];
            S(i) ? zT(i, function (t, e) {
                var i = n[e];
                r[null != i ? i : BT] = t
            }) : r[BT] = i, i = Op(t, r)
        }
        for (var a = e.length - 1; a >= 0; a--) null == i[a] && (delete n[e[a]], e.pop())
    }

    function Tp(t, e) {
        var i = t.visual, n = [];
        S(i) ? zT(i, function (t) {
            n.push(t)
        }) : null != i && n.push(i);
        var r = {color: 1, symbol: 1};
        e || 1 !== n.length || r.hasOwnProperty(t.type) || (n[1] = n[0]), Op(t, n)
    }

    function Ip(t) {
        return {
            applyVisual: function (e, i, n) {
                e = this.mapValueToVisual(e), n("color", t(i("color"), e))
            }, _doMap: Lp([0, 1])
        }
    }

    function Cp(t) {
        var e = this.option.visual;
        return e[Math.round(_o(t, [0, 1], [0, e.length - 1], !0))] || {}
    }

    function Dp(t) {
        return function (e, i, n) {
            n(t, this.mapValueToVisual(e))
        }
    }

    function Ap(t) {
        var e = this.option.visual;
        return e[this.option.loop && t !== BT ? t % e.length : t]
    }

    function kp() {
        return this.option.visual[0]
    }

    function Lp(t) {
        return {
            linear: function (e) {
                return _o(e, t, this.option.visual, !0)
            }, category: Ap, piecewise: function (e, i) {
                var n = Pp.call(this, i);
                return null == n && (n = _o(e, t, this.option.visual, !0)), n
            }, fixed: kp
        }
    }

    function Pp(t) {
        var e = this.option, i = e.pieceList;
        if (e.hasSpecialVisual) {
            var n = ET.findPieceIndex(t, i), r = i[n];
            if (r && r.visual) return r.visual[this.type]
        }
    }

    function Op(t, e) {
        return t.visual = e, "color" === t.type && (t.parsedVisual = p(e, function (t) {
            return $e(t)
        })), e
    }

    function zp(t, e, i) {
        return t ? i >= e : i > e
    }

    function Rp(t) {
        if (t) for (var e in t) if (t.hasOwnProperty(e)) return !0
    }

    function Bp(t, e, i) {
        function r() {
            var t = function () {
            };
            t.prototype.__hidden = t.prototype;
            var e = new t;
            return e
        }

        var a = {};
        return VT(e, function (e) {
            var o = a[e] = r();
            VT(t[e], function (t, r) {
                if (ET.isValidType(r)) {
                    var a = {type: r, visual: t};
                    i && i(a, e), o[r] = new ET(a), "opacity" === r && (a = n(a), a.type = "colorAlpha", o.__hidden.__alphaForOpacity = new ET(a))
                }
            })
        }), a
    }

    function Ep(t, e, i) {
        var r;
        f(i, function (t) {
            e.hasOwnProperty(t) && Rp(e[t]) && (r = !0)
        }), r && f(i, function (i) {
            e.hasOwnProperty(i) && Rp(e[i]) ? t[i] = n(e[i]) : delete t[i]
        })
    }

    function Np(t, e, i, n) {
        function r(t, r) {
            function o(t) {
                return r.getItemVisual(l, t)
            }

            function s(t, e) {
                r.setItemVisual(l, t, e)
            }

            null != n && (n = r.getDimension(n));
            for (var l; null != (l = t.next());) {
                var u = r.getRawDataItem(l);
                if (!u || u.visualMap !== !1) for (var h = null != n ? r.get(n, l, !0) : l, c = i(h), d = e[c], f = a[c], p = 0, g = f.length; g > p; p++) {
                    var v = f[p];
                    d[v] && d[v].applyVisual(h, o, s)
                }
            }
        }

        var a = {};
        return f(t, function (t) {
            var i = ET.prepareVisualTypes(e[t]);
            a[t] = i
        }), {progress: r}
    }

    function Fp(t, e, i, n) {
        function r(t) {
            return l[t]
        }

        function a(t, e) {
            l[t] = e
        }

        for (var o = e.targetVisuals[n], s = ET.prepareVisualTypes(o), l = {color: t.getData().getVisual("color")}, u = 0, h = s.length; h > u; u++) {
            var c = s[u], d = o["opacity" === c ? "__alphaForOpacity" : c];
            d && d.applyVisual(i, r, a)
        }
        return l.color
    }

    function Vp(t, e, i) {
        if (i[0] === i[1]) return i.slice();
        for (var n = 200, r = (i[1] - i[0]) / n, a = i[0], o = [], s = 0; n >= s && a < i[1]; s++) o.push(a), a += r;
        return o.push(i[1]), o
    }

    function Hp(t, e) {
        var i = t[e] - t[1 - e];
        return {span: Math.abs(i), sign: i > 0 ? -1 : 0 > i ? 1 : e ? -1 : 1}
    }

    function Gp(t, e) {
        return Math.min(null != e[1] ? e[1] : 1 / 0, Math.max(null != e[0] ? e[0] : -1 / 0, t))
    }

    function Wp(t, e, i) {
        var n = t.option, r = n.align;
        if (null != r && "auto" !== r) return r;
        for (var a = {
            width: e.getWidth(),
            height: e.getHeight()
        }, o = "horizontal" === n.orient ? 1 : 0, s = [["left", "right", "width"], ["top", "bottom", "height"]], l = s[o], u = [0, null, 10], h = {}, c = 0; 3 > c; c++) h[s[1 - o][c]] = u[c], h[l[c]] = 2 === c ? i[0] : n[l[c]];
        var d = [["x", "width", 3], ["y", "height", 0]][o], f = qo(h, a, n.padding);
        return l[(f.margin[d[2]] || 0) + f[d[0]] + .5 * f[d[1]] < .5 * a[d[1]] ? 0 : 1]
    }

    function Xp(t, e) {
        return f(t || [], function (t) {
            null != t.dataIndex && (t.dataIndexInside = t.dataIndex, t.dataIndex = null), t.highlightKey = "visualMap" + (e ? e.componentIndex : "")
        }), t
    }

    function Yp(t, e, i, n) {
        return new Ey({
            shape: {points: t}, draggable: !!i, cursor: e, drift: i, onmousemove: function (t) {
                Ag(t.event)
            }, ondragend: n
        })
    }

    function Up(t, e) {
        return 0 === t ? [[0, 0], [e, 0], [e, -e]] : [[0, 0], [e, 0], [e, e]]
    }

    function Zp(t, e, i, n) {
        return t ? [[0, -rI(e, aI(i, 0))], [sI, 0], [0, rI(e, aI(n - i, 0))]] : [[0, 0], [5, -5], [5, 5]]
    }

    function qp(t, e, i) {
        var n = oI / 2, r = t.get("hoverLinkDataSize");
        return r && (n = iI(r, e, i, !0) / 2), n
    }

    function jp(t) {
        var e = t.get("hoverLinkOnHandle");
        return !!(null == e ? t.get("realtime") : e)
    }

    function Kp(t) {
        return "vertical" === t ? "ns-resize" : "ew-resize"
    }

    function $p(t, e) {
        var i = t.inverse;
        ("vertical" === t.orient ? !i : i) && e.reverse()
    }

    var Qp = 2311, Jp = function () {
        return Qp++
    }, tg = {};
    tg = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
        browser: {},
        os: {},
        node: !1,
        wxa: !0,
        canvasSupported: !0,
        svgSupported: !1,
        touchEventsSupported: !0,
        domSupported: !1
    } : "undefined" == typeof document && "undefined" != typeof self ? {
        browser: {},
        os: {},
        node: !1,
        worker: !0,
        canvasSupported: !0,
        domSupported: !1
    } : "undefined" == typeof navigator ? {
        browser: {},
        os: {},
        node: !0,
        worker: !1,
        canvasSupported: !0,
        svgSupported: !0,
        domSupported: !1
    } : e(navigator.userAgent);
    var eg = tg, ig = {
            "[object Function]": 1,
            "[object RegExp]": 1,
            "[object Date]": 1,
            "[object Error]": 1,
            "[object CanvasGradient]": 1,
            "[object CanvasPattern]": 1,
            "[object Image]": 1,
            "[object Canvas]": 1
        }, ng = {
            "[object Int8Array]": 1,
            "[object Uint8Array]": 1,
            "[object Uint8ClampedArray]": 1,
            "[object Int16Array]": 1,
            "[object Uint16Array]": 1,
            "[object Int32Array]": 1,
            "[object Uint32Array]": 1,
            "[object Float32Array]": 1,
            "[object Float64Array]": 1
        }, rg = Object.prototype.toString, ag = Array.prototype, og = ag.forEach, sg = ag.filter, lg = ag.slice,
        ug = ag.map, hg = ag.reduce, cg = {}, dg = function () {
            return cg.createCanvas()
        };
    cg.createCanvas = function () {
        return document.createElement("canvas")
    };
    var fg, pg = "__ec_primitive__";
    E.prototype = {
        constructor: E, get: function (t) {
            return this.data.hasOwnProperty(t) ? this.data[t] : null
        }, set: function (t, e) {
            return this.data[t] = e
        }, each: function (t, e) {
            void 0 !== e && (t = y(t, e));
            for (var i in this.data) this.data.hasOwnProperty(i) && t(this.data[i], i)
        }, removeKey: function (t) {
            delete this.data[t]
        }
    };
    var gg = (Object.freeze || Object)({
            $override: i,
            clone: n,
            merge: r,
            mergeAll: a,
            extend: o,
            defaults: s,
            createCanvas: dg,
            getContext: l,
            indexOf: u,
            inherits: h,
            mixin: c,
            isArrayLike: d,
            each: f,
            map: p,
            reduce: g,
            filter: v,
            find: m,
            bind: y,
            curry: _,
            isArray: x,
            isFunction: w,
            isString: b,
            isObject: S,
            isBuiltInObject: M,
            isTypedArray: T,
            isDom: I,
            eqNaN: C,
            retrieve: D,
            retrieve2: A,
            retrieve3: k,
            slice: L,
            normalizeCssArray: P,
            assert: O,
            trim: z,
            setAsPrimitive: R,
            isPrimitive: B,
            createHashMap: N,
            concatArray: F,
            noop: V
        }), vg = "undefined" == typeof Float32Array ? Array : Float32Array, mg = q, yg = j, _g = ee, xg = ie,
        wg = (Object.freeze || Object)({
            create: H,
            copy: G,
            clone: W,
            set: X,
            add: Y,
            scaleAndAdd: U,
            sub: Z,
            len: q,
            length: mg,
            lenSquare: j,
            lengthSquare: yg,
            mul: K,
            div: $,
            dot: Q,
            scale: J,
            normalize: te,
            distance: ee,
            dist: _g,
            distanceSquare: ie,
            distSquare: xg,
            negate: ne,
            lerp: re,
            applyTransform: ae,
            min: oe,
            max: se
        });
    le.prototype = {
        constructor: le, _dragStart: function (t) {
            var e = t.target;
            e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(ue(e, t), "dragstart", t.event))
        }, _drag: function (t) {
            var e = this._draggingTarget;
            if (e) {
                var i = t.offsetX, n = t.offsetY, r = i - this._x, a = n - this._y;
                this._x = i, this._y = n, e.drift(r, a, t), this.dispatchToElement(ue(e, t), "drag", t.event);
                var o = this.findHover(i, n, e).target, s = this._dropTarget;
                this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(ue(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(ue(o, t), "dragenter", t.event))
            }
        }, _dragEnd: function (t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.dispatchToElement(ue(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(ue(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
        }
    };
    var bg = Array.prototype.slice, Sg = function (t) {
        this._$handlers = {}, this._$eventProcessor = t
    };
    Sg.prototype = {
        constructor: Sg, one: function (t, e, i, n) {
            return ce(this, t, e, i, n, !0)
        }, on: function (t, e, i, n) {
            return ce(this, t, e, i, n, !1)
        }, isSilent: function (t) {
            var e = this._$handlers;
            return !e[t] || !e[t].length
        }, off: function (t, e) {
            var i = this._$handlers;
            if (!t) return this._$handlers = {}, this;
            if (e) {
                if (i[t]) {
                    for (var n = [], r = 0, a = i[t].length; a > r; r++) i[t][r].h !== e && n.push(i[t][r]);
                    i[t] = n
                }
                i[t] && 0 === i[t].length && delete i[t]
            } else delete i[t];
            return this
        }, trigger: function (t) {
            var e = this._$handlers[t], i = this._$eventProcessor;
            if (e) {
                var n = arguments, r = n.length;
                r > 3 && (n = bg.call(n, 1));
                for (var a = e.length, o = 0; a > o;) {
                    var s = e[o];
                    if (i && i.filter && null != s.query && !i.filter(t, s.query)) o++; else {
                        switch (r) {
                            case 1:
                                s.h.call(s.ctx);
                                break;
                            case 2:
                                s.h.call(s.ctx, n[1]);
                                break;
                            case 3:
                                s.h.call(s.ctx, n[1], n[2]);
                                break;
                            default:
                                s.h.apply(s.ctx, n)
                        }
                        s.one ? (e.splice(o, 1), a--) : o++
                    }
                }
            }
            return i && i.afterTrigger && i.afterTrigger(t), this
        }, triggerWithContext: function (t) {
            var e = this._$handlers[t], i = this._$eventProcessor;
            if (e) {
                var n = arguments, r = n.length;
                r > 4 && (n = bg.call(n, 1, n.length - 1));
                for (var a = n[n.length - 1], o = e.length, s = 0; o > s;) {
                    var l = e[s];
                    if (i && i.filter && null != l.query && !i.filter(t, l.query)) s++; else {
                        switch (r) {
                            case 1:
                                l.h.call(a);
                                break;
                            case 2:
                                l.h.call(a, n[1]);
                                break;
                            case 3:
                                l.h.call(a, n[1], n[2]);
                                break;
                            default:
                                l.h.apply(a, n)
                        }
                        l.one ? (e.splice(s, 1), o--) : s++
                    }
                }
            }
            return i && i.afterTrigger && i.afterTrigger(t), this
        }
    };
    var Mg = Math.log(2), Tg = "undefined" != typeof window && !!window.addEventListener,
        Ig = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Cg = "___zrEVENTSAVED", Dg = [], Ag = Tg ? function (t) {
            t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
        } : function (t) {
            t.returnValue = !1, t.cancelBubble = !0
        }, kg = function () {
            this._track = []
        };
    kg.prototype = {
        constructor: kg, recognize: function (t, e, i) {
            return this._doTrack(t, e, i), this._recognize(t)
        }, clear: function () {
            return this._track.length = 0, this
        }, _doTrack: function (t, e, i) {
            var n = t.touches;
            if (n) {
                for (var r = {points: [], touches: [], target: e, event: t}, a = 0, o = n.length; o > a; a++) {
                    var s = n[a], l = pe(i, s, {});
                    r.points.push([l.zrX, l.zrY]), r.touches.push(s)
                }
                this._track.push(r)
            }
        }, _recognize: function (t) {
            for (var e in Lg) if (Lg.hasOwnProperty(e)) {
                var i = Lg[e](this._track, t);
                if (i) return i
            }
        }
    };
    var Lg = {
        pinch: function (t, e) {
            var i = t.length;
            if (i) {
                var n = (t[i - 1] || {}).points, r = (t[i - 2] || {}).points || n;
                if (r && r.length > 1 && n && n.length > 1) {
                    var a = Se(n) / Se(r);
                    !isFinite(a) && (a = 1), e.pinchScale = a;
                    var o = Me(n);
                    return e.pinchX = o[0], e.pinchY = o[1], {type: "pinch", target: t[0].target, event: e}
                }
            }
        }
    }, Pg = "silent";
    Ce.prototype.dispose = function () {
    };
    var Og = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        zg = function (t, e, i, n) {
            Sg.call(this), this.storage = t, this.painter = e, this.painterRoot = n, i = i || new Ce, this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, this._gestureMgr, le.call(this), this.setHandlerProxy(i)
        };
    zg.prototype = {
        constructor: zg, setHandlerProxy: function (t) {
            this.proxy && this.proxy.dispose(), t && (f(Og, function (e) {
                t.on && t.on(e, this[e], this)
            }, this), t.handler = this), this.proxy = t
        }, mousemove: function (t) {
            var e = t.zrX, i = t.zrY, n = Ae(this, e, i), r = this._hovered, a = r.target;
            a && !a.__zr && (r = this.findHover(r.x, r.y), a = r.target);
            var o = this._hovered = n ? {x: e, y: i} : this.findHover(e, i), s = o.target, l = this.proxy;
            l.setCursor && l.setCursor(s ? s.cursor : "default"), a && s !== a && this.dispatchToElement(r, "mouseout", t), this.dispatchToElement(o, "mousemove", t), s && s !== a && this.dispatchToElement(o, "mouseover", t)
        }, mouseout: function (t) {
            var e = t.zrEventControl, i = t.zrIsToLocalDOM;
            "only_globalout" !== e && this.dispatchToElement(this._hovered, "mouseout", t), "no_globalout" !== e && !i && this.trigger("globalout", {
                type: "globalout",
                event: t
            })
        }, resize: function () {
            this._hovered = {}
        }, dispatch: function (t, e) {
            var i = this[t];
            i && i.call(this, e)
        }, dispose: function () {
            this.proxy.dispose(), this.storage = this.proxy = this.painter = null
        }, setCursorStyle: function (t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t)
        }, dispatchToElement: function (t, e, i) {
            t = t || {};
            var n = t.target;
            if (!n || !n.silent) {
                for (var r = "on" + e, a = Te(e, t, i); n && (n[r] && (a.cancelBubble = n[r].call(n, a)), n.trigger(e, a), n = n.parent, !a.cancelBubble);) ;
                a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {
                    "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a)
                }))
            }
        }, findHover: function (t, e, i) {
            for (var n = this.storage.getDisplayList(), r = {x: t, y: e}, a = n.length - 1; a >= 0; a--) {
                var o;
                if (n[a] !== i && !n[a].ignore && (o = De(n[a], t, e)) && (!r.topTarget && (r.topTarget = n[a]), o !== Pg)) {
                    r.target = n[a];
                    break
                }
            }
            return r
        }, processGesture: function (t, e) {
            this._gestureMgr || (this._gestureMgr = new kg);
            var i = this._gestureMgr;
            "start" === e && i.clear();
            var n = i.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
            if ("end" === e && i.clear(), n) {
                var r = n.type;
                t.gestureEvent = r, this.dispatchToElement({target: n.target}, r, n.event)
            }
        }
    }, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        zg.prototype[t] = function (e) {
            var i, n, r = e.zrX, a = e.zrY, o = Ae(this, r, a);
            if ("mouseup" === t && o || (i = this.findHover(r, a), n = i.target), "mousedown" === t) this._downEl = n, this._downPoint = [e.zrX, e.zrY], this._upEl = n; else if ("mouseup" === t) this._upEl = n; else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || _g(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                this._downPoint = null
            }
            this.dispatchToElement(i, t, e)
        }
    }), c(zg, Sg), c(zg, le);
    var Rg = "undefined" == typeof Float32Array ? Array : Float32Array, Bg = (Object.freeze || Object)({
        create: ke,
        identity: Le,
        copy: Pe,
        mul: Oe,
        translate: ze,
        rotate: Re,
        scale: Be,
        invert: Ee,
        clone: Ne
    }), Eg = Le, Ng = 5e-5, Fg = function (t) {
        t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
    }, Vg = Fg.prototype;
    Vg.transform = null, Vg.needLocalTransform = function () {
        return Fe(this.rotation) || Fe(this.position[0]) || Fe(this.position[1]) || Fe(this.scale[0] - 1) || Fe(this.scale[1] - 1)
    };
    var Hg = [];
    Vg.updateTransform = function () {
        var t = this.parent, e = t && t.transform, i = this.needLocalTransform(), n = this.transform;
        if (!i && !e) return void (n && Eg(n));
        n = n || ke(), i ? this.getLocalTransform(n) : Eg(n), e && (i ? Oe(n, t.transform, n) : Pe(n, t.transform)), this.transform = n;
        var r = this.globalScaleRatio;
        if (null != r && 1 !== r) {
            this.getGlobalScale(Hg);
            var a = Hg[0] < 0 ? -1 : 1, o = Hg[1] < 0 ? -1 : 1, s = ((Hg[0] - a) * r + a) / Hg[0] || 0,
                l = ((Hg[1] - o) * r + o) / Hg[1] || 0;
            n[0] *= s, n[1] *= s, n[2] *= l, n[3] *= l
        }
        this.invTransform = this.invTransform || ke(), Ee(this.invTransform, n)
    }, Vg.getLocalTransform = function (t) {
        return Fg.getLocalTransform(this, t)
    }, Vg.setTransform = function (t) {
        var e = this.transform, i = t.dpr || 1;
        e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0)
    }, Vg.restoreTransform = function (t) {
        var e = t.dpr || 1;
        t.setTransform(e, 0, 0, e, 0, 0)
    };
    var Gg = [], Wg = ke();
    Vg.setLocalTransform = function (t) {
        if (t) {
            var e = t[0] * t[0] + t[1] * t[1], i = t[2] * t[2] + t[3] * t[3], n = this.position, r = this.scale;
            Fe(e - 1) && (e = Math.sqrt(e)), Fe(i - 1) && (i = Math.sqrt(i)), t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), n[0] = t[4], n[1] = t[5], r[0] = e, r[1] = i, this.rotation = Math.atan2(-t[1] / i, t[0] / e)
        }
    }, Vg.decomposeTransform = function () {
        if (this.transform) {
            var t = this.parent, e = this.transform;
            t && t.transform && (Oe(Gg, t.invTransform, e), e = Gg);
            var i = this.origin;
            i && (i[0] || i[1]) && (Wg[4] = i[0], Wg[5] = i[1], Oe(Gg, e, Wg), Gg[4] -= i[0], Gg[5] -= i[1], e = Gg), this.setLocalTransform(e)
        }
    }, Vg.getGlobalScale = function (t) {
        var e = this.transform;
        return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
    }, Vg.transformCoordToLocal = function (t, e) {
        var i = [t, e], n = this.invTransform;
        return n && ae(i, i, n), i
    }, Vg.transformCoordToGlobal = function (t, e) {
        var i = [t, e], n = this.transform;
        return n && ae(i, i, n), i
    }, Fg.getLocalTransform = function (t, e) {
        e = e || [], Eg(e);
        var i = t.origin, n = t.scale || [1, 1], r = t.rotation || 0, a = t.position || [0, 0];
        return i && (e[4] -= i[0], e[5] -= i[1]), Be(e, e, n), r && Re(e, e, r), i && (e[4] += i[0], e[5] += i[1]), e[4] += a[0], e[5] += a[1], e
    };
    var Xg = {
        linear: function (t) {
            return t
        }, quadraticIn: function (t) {
            return t * t
        }, quadraticOut: function (t) {
            return t * (2 - t)
        }, quadraticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        }, cubicIn: function (t) {
            return t * t * t
        }, cubicOut: function (t) {
            return --t * t * t + 1
        }, cubicInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }, quarticIn: function (t) {
            return t * t * t * t
        }, quarticOut: function (t) {
            return 1 - --t * t * t * t
        }, quarticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        }, quinticIn: function (t) {
            return t * t * t * t * t
        }, quinticOut: function (t) {
            return --t * t * t * t * t + 1
        }, quinticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }, sinusoidalIn: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, sinusoidalOut: function (t) {
            return Math.sin(t * Math.PI / 2)
        }, sinusoidalInOut: function (t) {
            return .5 * (1 - Math.cos(Math.PI * t))
        }, exponentialIn: function (t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1)
        }, exponentialOut: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        }, exponentialInOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
        }, circularIn: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        }, circularOut: function (t) {
            return Math.sqrt(1 - --t * t)
        }, circularInOut: function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, elasticIn: function (t) {
            var e, i = .1, n = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n)))
        }, elasticOut: function (t) {
            var e, i = .1, n = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / n) + 1)
        }, elasticInOut: function (t) {
            var e, i = .1, n = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n) * .5 + 1)
        }, backIn: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, backOut: function (t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1
        }, backInOut: function (t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
        }, bounceIn: function (t) {
            return 1 - Xg.bounceOut(1 - t)
        }, bounceOut: function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, bounceInOut: function (t) {
            return .5 > t ? .5 * Xg.bounceIn(2 * t) : .5 * Xg.bounceOut(2 * t - 1) + .5
        }
    };
    Ve.prototype = {
        constructor: Ve, step: function (t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void (this._pausedTime += e);
            var i = (t - this._startTime - this._pausedTime) / this._life;
            if (!(0 > i)) {
                i = Math.min(i, 1);
                var n = this.easing, r = "string" == typeof n ? Xg[n] : n, a = "function" == typeof r ? r(i) : i;
                return this.fire("frame", a), 1 === i ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
            }
        }, restart: function (t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
        }, fire: function (t, e) {
            t = "on" + t, this[t] && this[t](this._target, e)
        }, pause: function () {
            this._paused = !0
        }, resume: function () {
            this._paused = !1
        }
    };
    var Yg = function () {
        this.head = null, this.tail = null, this._len = 0
    }, Ug = Yg.prototype;
    Ug.insert = function (t) {
        var e = new Zg(t);
        return this.insertEntry(e), e
    }, Ug.insertEntry = function (t) {
        this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
    }, Ug.remove = function (t) {
        var e = t.prev, i = t.next;
        e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
    }, Ug.len = function () {
        return this._len
    }, Ug.clear = function () {
        this.head = this.tail = null, this._len = 0
    };
    var Zg = function (t) {
        this.value = t, this.next, this.prev
    }, qg = function (t) {
        this._list = new Yg, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
    }, jg = qg.prototype;
    jg.put = function (t, e) {
        var i = this._list, n = this._map, r = null;
        if (null == n[t]) {
            var a = i.len(), o = this._lastRemovedEntry;
            if (a >= this._maxSize && a > 0) {
                var s = i.head;
                i.remove(s), delete n[s.key], r = s.value, this._lastRemovedEntry = s
            }
            o ? o.value = e : o = new Zg(e), o.key = t, i.insertEntry(o), n[t] = o
        }
        return r
    }, jg.get = function (t) {
        var e = this._map[t], i = this._list;
        return null != e ? (e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value) : void 0
    }, jg.clear = function () {
        this._list.clear(), this._map = {}
    };
    var Kg = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1]
    }, $g = new qg(20), Qg = null, Jg = ii, tv = ni, ev = (Object.freeze || Object)({
        parse: $e,
        lift: ti,
        toHex: ei,
        fastLerp: ii,
        fastMapToColor: Jg,
        lerp: ni,
        mapToColor: tv,
        modifyHSL: ri,
        modifyAlpha: ai,
        stringify: oi
    }), iv = Array.prototype.slice, nv = function (t, e, i, n) {
        this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || si, this._setter = n || li, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
    };
    nv.prototype = {
        when: function (t, e) {
            var i = this._tracks;
            for (var n in e) if (e.hasOwnProperty(n)) {
                if (!i[n]) {
                    i[n] = [];
                    var r = this._getter(this._target, n);
                    if (null == r) continue;
                    0 !== t && i[n].push({time: 0, value: vi(r)})
                }
                i[n].push({time: t, value: e[n]})
            }
            return this
        }, during: function (t) {
            return this._onframeList.push(t), this
        }, pause: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
            this._paused = !0
        }, resume: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
            this._paused = !1
        }, isPaused: function () {
            return !!this._paused
        }, _doneCallback: function () {
            this._tracks = {}, this._clipList.length = 0;
            for (var t = this._doneList, e = t.length, i = 0; e > i; i++) t[i].call(this)
        }, start: function (t, e) {
            var i, n = this, r = 0, a = function () {
                r--, r || n._doneCallback()
            };
            for (var o in this._tracks) if (this._tracks.hasOwnProperty(o)) {
                var s = _i(this, t, a, this._tracks[o], o, e);
                s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), i = s)
            }
            if (i) {
                var l = i.onframe;
                i.onframe = function (t, e) {
                    l(t, e);
                    for (var i = 0; i < n._onframeList.length; i++) n._onframeList[i](t, e)
                }
            }
            return r || this._doneCallback(), this
        }, stop: function (t) {
            for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
                var r = e[n];
                t && r.onframe(this._target, 1), i && i.removeClip(r)
            }
            e.length = 0
        }, delay: function (t) {
            return this._delay = t, this
        }, done: function (t) {
            return t && this._doneList.push(t), this
        }, getClips: function () {
            return this._clipList
        }
    };
    var rv = 1;
    "undefined" != typeof window && (rv = Math.max(window.devicePixelRatio || 1, 1));
    var av = 0, ov = rv, sv = function () {
    };
    1 === av && (sv = console.error);
    var lv = sv, uv = function () {
        this.animators = []
    };
    uv.prototype = {
        constructor: uv, animate: function (t, e) {
            var i, n = !1, r = this, a = this.__zr;
            if (t) {
                var o = t.split("."), s = r;
                n = "shape" === o[0];
                for (var l = 0, h = o.length; h > l; l++) s && (s = s[o[l]]);
                s && (i = s)
            } else i = r;
            if (!i) return void lv('Property "' + t + '" is not existed in element ' + r.id);
            var c = r.animators, d = new nv(i, e);
            return d.during(function () {
                r.dirty(n)
            }).done(function () {
                c.splice(u(c, d), 1)
            }), c.push(d), a && a.animation.addAnimator(d), d
        }, stopAnimation: function (t) {
            for (var e = this.animators, i = e.length, n = 0; i > n; n++) e[n].stop(t);
            return e.length = 0, this
        }, animateTo: function (t, e, i, n, r, a) {
            xi(this, t, e, i, n, r, a)
        }, animateFrom: function (t, e, i, n, r, a) {
            xi(this, t, e, i, n, r, a, !0)
        }
    };
    var hv = function (t) {
        Fg.call(this, t), Sg.call(this, t), uv.call(this, t), this.id = t.id || Jp()
    };
    hv.prototype = {
        type: "element", name: "", __zr: null, ignore: !1, clipPath: null, isGroup: !1, drift: function (t, e) {
            switch (this.draggable) {
                case"horizontal":
                    e = 0;
                    break;
                case"vertical":
                    t = 0
            }
            var i = this.transform;
            i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty(!1)
        }, beforeUpdate: function () {
        }, afterUpdate: function () {
        }, update: function () {
            this.updateTransform()
        }, traverse: function () {
        }, attrKV: function (t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
                if (e) {
                    var i = this[t];
                    i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]
                }
            } else this[t] = e
        }, hide: function () {
            this.ignore = !0, this.__zr && this.__zr.refresh()
        }, show: function () {
            this.ignore = !1, this.__zr && this.__zr.refresh()
        }, attr: function (t, e) {
            if ("string" == typeof t) this.attrKV(t, e); else if (S(t)) for (var i in t) t.hasOwnProperty(i) && this.attrKV(i, t[i]);
            return this.dirty(!1), this
        }, setClipPath: function (t) {
            var e = this.__zr;
            e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
        }, removeClipPath: function () {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
        }, addSelfToZr: function (t) {
            this.__zr = t;
            var e = this.animators;
            if (e) for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
            this.clipPath && this.clipPath.addSelfToZr(t)
        }, removeSelfFromZr: function (t) {
            this.__zr = null;
            var e = this.animators;
            if (e) for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
            this.clipPath && this.clipPath.removeSelfFromZr(t)
        }
    }, c(hv, uv), c(hv, Fg), c(hv, Sg);
    var cv = ae, dv = Math.min, fv = Math.max;
    Si.prototype = {
        constructor: Si, union: function (t) {
            var e = dv(t.x, this.x), i = dv(t.y, this.y);
            this.width = fv(t.x + t.width, this.x + this.width) - e, this.height = fv(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i
        }, applyTransform: function () {
            var t = [], e = [], i = [], n = [];
            return function (r) {
                if (r) {
                    t[0] = i[0] = this.x, t[1] = n[1] = this.y, e[0] = n[0] = this.x + this.width, e[1] = i[1] = this.y + this.height, cv(t, t, r), cv(e, e, r), cv(i, i, r), cv(n, n, r), this.x = dv(t[0], e[0], i[0], n[0]), this.y = dv(t[1], e[1], i[1], n[1]);
                    var a = fv(t[0], e[0], i[0], n[0]), o = fv(t[1], e[1], i[1], n[1]);
                    this.width = a - this.x, this.height = o - this.y
                }
            }
        }(), calculateTransform: function (t) {
            var e = this, i = t.width / e.width, n = t.height / e.height, r = ke();
            return ze(r, r, [-e.x, -e.y]), Be(r, r, [i, n]), ze(r, r, [t.x, t.y]), r
        }, intersect: function (t) {
            if (!t) return !1;
            t instanceof Si || (t = Si.create(t));
            var e = this, i = e.x, n = e.x + e.width, r = e.y, a = e.y + e.height, o = t.x, s = t.x + t.width, l = t.y,
                u = t.y + t.height;
            return !(o > n || i > s || l > a || r > u)
        }, contain: function (t, e) {
            var i = this;
            return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
        }, clone: function () {
            return new Si(this.x, this.y, this.width, this.height)
        }, copy: function (t) {
            this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
        }, plain: function () {
            return {x: this.x, y: this.y, width: this.width, height: this.height}
        }
    }, Si.create = function (t) {
        return new Si(t.x, t.y, t.width, t.height)
    };
    var pv = function (t) {
        t = t || {}, hv.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
        this._children = [], this.__storage = null, this.__dirty = !0
    };
    pv.prototype = {
        constructor: pv, isGroup: !0, type: "group", silent: !1, children: function () {
            return this._children.slice()
        }, childAt: function (t) {
            return this._children[t]
        }, childOfName: function (t) {
            for (var e = this._children, i = 0; i < e.length; i++) if (e[i].name === t) return e[i]
        }, childCount: function () {
            return this._children.length
        }, add: function (t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
        }, addBefore: function (t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var i = this._children, n = i.indexOf(e);
                n >= 0 && (i.splice(n, 0, t), this._doAdd(t))
            }
            return this
        }, _doAdd: function (t) {
            t.parent && t.parent.remove(t), t.parent = this;
            var e = this.__storage, i = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t), t instanceof pv && t.addChildrenToStorage(e)), i && i.refresh()
        }, remove: function (t) {
            var e = this.__zr, i = this.__storage, n = this._children, r = u(n, t);
            return 0 > r ? this : (n.splice(r, 1), t.parent = null, i && (i.delFromStorage(t), t instanceof pv && t.delChildrenFromStorage(i)), e && e.refresh(), this)
        }, removeAll: function () {
            var t, e, i = this._children, n = this.__storage;
            for (e = 0; e < i.length; e++) t = i[e], n && (n.delFromStorage(t), t instanceof pv && t.delChildrenFromStorage(n)), t.parent = null;
            return i.length = 0, this
        }, eachChild: function (t, e) {
            for (var i = this._children, n = 0; n < i.length; n++) {
                var r = i[n];
                t.call(e, r, n)
            }
            return this
        }, traverse: function (t, e) {
            for (var i = 0; i < this._children.length; i++) {
                var n = this._children[i];
                t.call(e, n), "group" === n.type && n.traverse(t, e)
            }
            return this
        }, addChildrenToStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var i = this._children[e];
                t.addToStorage(i), i instanceof pv && i.addChildrenToStorage(t)
            }
        }, delChildrenFromStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var i = this._children[e];
                t.delFromStorage(i), i instanceof pv && i.delChildrenFromStorage(t)
            }
        }, dirty: function () {
            return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
        }, getBoundingRect: function (t) {
            for (var e = null, i = new Si(0, 0, 0, 0), n = t || this._children, r = [], a = 0; a < n.length; a++) {
                var o = n[a];
                if (!o.ignore && !o.invisible) {
                    var s = o.getBoundingRect(), l = o.getLocalTransform(r);
                    l ? (i.copy(s), i.applyTransform(l), e = e || i.clone(), e.union(i)) : (e = e || s.clone(), e.union(s))
                }
            }
            return e || i
        }
    }, h(pv, hv);
    var gv = 32, vv = 7, mv = function () {
        this._roots = [], this._displayList = [], this._displayListLen = 0
    };
    mv.prototype = {
        constructor: mv, traverse: function (t, e) {
            for (var i = 0; i < this._roots.length; i++) this._roots[i].traverse(t, e)
        }, getDisplayList: function (t, e) {
            return e = e || !1, t && this.updateDisplayList(e), this._displayList
        }, updateDisplayList: function (t) {
            this._displayListLen = 0;
            for (var e = this._roots, i = this._displayList, n = 0, r = e.length; r > n; n++) this._updateAndAddDisplayable(e[n], null, t);
            i.length = this._displayListLen, eg.canvasSupported && Li(i, Pi)
        }, _updateAndAddDisplayable: function (t, e, i) {
            if (!t.ignore || i) {
                t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                var n = t.clipPath;
                if (n) {
                    e = e ? e.slice() : [];
                    for (var r = n, a = t; r;) r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath
                }
                if (t.isGroup) {
                    for (var o = t._children, s = 0; s < o.length; s++) {
                        var l = o[s];
                        t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, i)
                    }
                    t.__dirty = !1
                } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
            }
        }, addRoot: function (t) {
            t.__storage !== this && (t instanceof pv && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
        }, delRoot: function (t) {
            if (null == t) {
                for (var e = 0; e < this._roots.length; e++) {
                    var i = this._roots[e];
                    i instanceof pv && i.delChildrenFromStorage(this)
                }
                return this._roots = [], this._displayList = [], void (this._displayListLen = 0)
            }
            if (t instanceof Array) for (var e = 0, n = t.length; n > e; e++) this.delRoot(t[e]); else {
                var r = u(this._roots, t);
                r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof pv && t.delChildrenFromStorage(this))
            }
        }, addToStorage: function (t) {
            return t && (t.__storage = this, t.dirty(!1)), this
        }, delFromStorage: function (t) {
            return t && (t.__storage = null), this
        }, dispose: function () {
            this._renderList = this._roots = null
        }, displayableSortFunc: Pi
    };
    var yv = {
            shadowBlur: 1,
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            textShadowBlur: 1,
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
            textBoxShadowBlur: 1,
            textBoxShadowOffsetX: 1,
            textBoxShadowOffsetY: 1
        }, _v = function (t, e, i) {
            return yv.hasOwnProperty(e) ? i *= t.dpr : i
        }, xv = {NONE: 0, STYLE_BIND: 1, PLAIN_TEXT: 2}, wv = 9,
        bv = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
        Sv = function (t) {
            this.extendFrom(t, !1)
        };
    Sv.prototype = {
        constructor: Sv,
        fill: "#000",
        stroke: null,
        opacity: 1,
        fillOpacity: null,
        strokeOpacity: null,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function (t, e, i) {
            var n = this, r = i && i.style, a = !r || t.__attrCachedBy !== xv.STYLE_BIND;
            t.__attrCachedBy = xv.STYLE_BIND;
            for (var o = 0; o < bv.length; o++) {
                var s = bv[o], l = s[0];
                (a || n[l] !== r[l]) && (t[l] = _v(t, l, n[l] || s[1]))
            }
            if ((a || n.fill !== r.fill) && (t.fillStyle = n.fill), (a || n.stroke !== r.stroke) && (t.strokeStyle = n.stroke), (a || n.opacity !== r.opacity) && (t.globalAlpha = null == n.opacity ? 1 : n.opacity), (a || n.blend !== r.blend) && (t.globalCompositeOperation = n.blend || "source-over"), this.hasStroke()) {
                var u = n.lineWidth;
                t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
            }
        },
        hasFill: function () {
            var t = this.fill;
            return null != t && "none" !== t
        },
        hasStroke: function () {
            var t = this.stroke;
            return null != t && "none" !== t && this.lineWidth > 0
        },
        extendFrom: function (t, e) {
            if (t) for (var i in t) !t.hasOwnProperty(i) || e !== !0 && (e === !1 ? this.hasOwnProperty(i) : null == t[i]) || (this[i] = t[i])
        },
        set: function (t, e) {
            "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
        },
        clone: function () {
            var t = new this.constructor;
            return t.extendFrom(this, !0), t
        },
        getGradient: function (t, e, i) {
            for (var n = "radial" === e.type ? zi : Oi, r = n(t, e, i), a = e.colorStops, o = 0; o < a.length; o++) r.addColorStop(a[o].offset, a[o].color);
            return r
        }
    };
    for (var Mv = Sv.prototype, Tv = 0; Tv < bv.length; Tv++) {
        var Iv = bv[Tv];
        Iv[0] in Mv || (Mv[Iv[0]] = Iv[1])
    }
    Sv.getGradient = Mv.getGradient;
    var Cv = function (t, e) {
        this.image = t, this.repeat = e, this.type = "pattern"
    };
    Cv.prototype.getCanvasPattern = function (t) {
        return t.createPattern(this.image, this.repeat || "repeat")
    };
    var Dv = function (t, e, i) {
        var n;
        i = i || ov, "string" == typeof t ? n = Bi(t, e, i) : S(t) && (n = t, t = n.id), this.id = t, this.dom = n;
        var r = n.style;
        r && (n.onselectstart = Ri, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = i
    };
    Dv.prototype = {
        constructor: Dv,
        __dirty: !0,
        __used: !1,
        __drawIndex: 0,
        __startIndex: 0,
        __endIndex: 0,
        incremental: !1,
        getElementCount: function () {
            return this.__endIndex - this.__startIndex
        },
        initContext: function () {
            this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
        },
        createBackBuffer: function () {
            var t = this.dpr;
            this.domBack = Bi("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 !== t && this.ctxBack.scale(t, t)
        },
        resize: function (t, e) {
            var i = this.dpr, n = this.dom, r = n.style, a = this.domBack;
            r && (r.width = t + "px", r.height = e + "px"), n.width = t * i, n.height = e * i, a && (a.width = t * i, a.height = e * i, 1 !== i && this.ctxBack.scale(i, i))
        },
        clear: function (t, e) {
            var i = this.dom, n = this.ctx, r = i.width, a = i.height, e = e || this.clearColor,
                o = this.motionBlur && !t, s = this.lastFrameAlpha, l = this.dpr;
            if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(i, 0, 0, r / l, a / l)), n.clearRect(0, 0, r, a), e && "transparent" !== e) {
                var u;
                e.colorStops ? (u = e.__canvasGradient || Sv.getGradient(n, e, {
                    x: 0,
                    y: 0,
                    width: r,
                    height: a
                }), e.__canvasGradient = u) : e.image && (u = Cv.prototype.getCanvasPattern.call(e, n)), n.save(), n.fillStyle = u || e, n.fillRect(0, 0, r, a), n.restore()
            }
            if (o) {
                var h = this.domBack;
                n.save(), n.globalAlpha = s, n.drawImage(h, 0, 0, r, a), n.restore()
            }
        }
    };
    var Av = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
            setTimeout(t, 16)
        }, kv = new qg(50), Lv = {}, Pv = 0, Ov = 5e3, zv = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g, Rv = "12px sans-serif",
        Bv = {};
    Bv.measureText = function (t, e) {
        var i = l();
        return i.font = e || Rv, i.measureText(t)
    };
    var Ev = Rv, Nv = {left: 1, right: 1, center: 1}, Fv = {top: 1, bottom: 1, middle: 1},
        Vv = [["textShadowBlur", "shadowBlur", 0], ["textShadowOffsetX", "shadowOffsetX", 0], ["textShadowOffsetY", "shadowOffsetY", 0], ["textShadowColor", "shadowColor", "transparent"]],
        Hv = {}, Gv = {}, Wv = new Si, Xv = function () {
        };
    Xv.prototype = {
        constructor: Xv, drawRectText: function (t, e) {
            var i = this.style;
            e = i.textRect || e, this.__dirty && on(i, !0);
            var n = i.text;
            if (null != n && (n += ""), Sn(n, i)) {
                t.save();
                var r = this.transform;
                i.transformText ? this.setTransform(t) : r && (Wv.copy(e), Wv.applyTransform(r), e = Wv), ln(this, t, n, i, e, wv), t.restore()
            }
        }
    }, Mn.prototype = {
        constructor: Mn,
        type: "displayable",
        __dirty: !0,
        invisible: !1,
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: "pointer",
        rectHover: !1,
        progressive: !1,
        incremental: !1,
        globalScaleRatio: 1,
        beforeBrush: function () {
        },
        afterBrush: function () {
        },
        brush: function () {
        },
        getBoundingRect: function () {
        },
        contain: function (t, e) {
            return this.rectContain(t, e)
        },
        traverse: function (t, e) {
            t.call(e, this)
        },
        rectContain: function (t, e) {
            var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect();
            return n.contain(i[0], i[1])
        },
        dirty: function () {
            this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh()
        },
        animateStyle: function (t) {
            return this.animate("style", t)
        },
        attrKV: function (t, e) {
            "style" !== t ? hv.prototype.attrKV.call(this, t, e) : this.style.set(e)
        },
        setStyle: function (t, e) {
            return this.style.set(t, e), this.dirty(!1), this
        },
        useStyle: function (t) {
            return this.style = new Sv(t, this), this.dirty(!1), this
        },
        calculateTextPosition: null
    }, h(Mn, hv), c(Mn, Xv), Tn.prototype = {
        constructor: Tn, type: "image", brush: function (t, e) {
            var i = this.style, n = i.image;
            i.bind(t, this, e);
            var r = this._image = Ni(n, this._image, this, this.onload);
            if (r && Vi(r)) {
                var a = i.x || 0, o = i.y || 0, s = i.width, l = i.height, u = r.width / r.height;
                if (null == s && null != l ? s = l * u : null == l && null != s ? l = s / u : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), i.sWidth && i.sHeight) {
                    var h = i.sx || 0, c = i.sy || 0;
                    t.drawImage(r, h, c, i.sWidth, i.sHeight, a, o, s, l)
                } else if (i.sx && i.sy) {
                    var h = i.sx, c = i.sy, d = s - h, f = l - c;
                    t.drawImage(r, h, c, d, f, a, o, s, l)
                } else t.drawImage(r, a, o, s, l);
                null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
            }
        }, getBoundingRect: function () {
            var t = this.style;
            return this._rect || (this._rect = new Si(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
        }
    }, h(Tn, Mn);
    var Yv = 1e5, Uv = 314159, Zv = .01, qv = .001, jv = new Si(0, 0, 0, 0), Kv = new Si(0, 0, 0, 0),
        $v = function (t, e, i) {
            this.type = "canvas";
            var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
            this._opts = i = o({}, i || {}), this.dpr = i.devicePixelRatio || ov, this._singleCanvas = n, this.root = t;
            var r = t.style;
            r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
            var a = this._zlevelList = [], s = this._layers = {};
            if (this._layerConfig = {}, this._needsManuallyCompositing = !1, n) {
                var l = t.width, u = t.height;
                null != i.width && (l = i.width), null != i.height && (u = i.height), this.dpr = i.devicePixelRatio || 1, t.width = l * this.dpr, t.height = u * this.dpr, this._width = l, this._height = u;
                var h = new Dv(t, this, this.dpr);
                h.__builtin__ = !0, h.initContext(), s[Uv] = h, h.zlevel = Uv, a.push(Uv), this._domRoot = t
            } else {
                this._width = this._getSize(0), this._height = this._getSize(1);
                var c = this._domRoot = Ln(this._width, this._height);
                t.appendChild(c)
            }
            this._hoverlayer = null, this._hoverElements = []
        };
    $v.prototype = {
        constructor: $v, getType: function () {
            return "canvas"
        }, isSingleCanvas: function () {
            return this._singleCanvas
        }, getViewportRoot: function () {
            return this._domRoot
        }, getViewportRootOffset: function () {
            var t = this.getViewportRoot();
            return t ? {offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0} : void 0
        }, refresh: function (t) {
            var e = this.storage.getDisplayList(!0), i = this._zlevelList;
            this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
            for (var n = 0; n < i.length; n++) {
                var r = i[n], a = this._layers[r];
                if (!a.__builtin__ && a.refresh) {
                    var o = 0 === n ? this._backgroundColor : null;
                    a.refresh(o)
                }
            }
            return this.refreshHover(), this
        }, addHover: function (t, e) {
            if (!t.__hoverMir) {
                var i = new t.constructor({style: t.style, shape: t.shape, z: t.z, z2: t.z2, silent: t.silent});
                return i.__from = t, t.__hoverMir = i, e && i.setStyle(e), this._hoverElements.push(i), i
            }
        }, removeHover: function (t) {
            var e = t.__hoverMir, i = this._hoverElements, n = u(i, e);
            n >= 0 && i.splice(n, 1), t.__hoverMir = null
        }, clearHover: function () {
            for (var t = this._hoverElements, e = 0; e < t.length; e++) {
                var i = t[e].__from;
                i && (i.__hoverMir = null)
            }
            t.length = 0
        }, refreshHover: function () {
            var t = this._hoverElements, e = t.length, i = this._hoverlayer;
            if (i && i.clear(), e) {
                Li(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(Yv));
                var n = {};
                i.ctx.save();
                for (var r = 0; e > r;) {
                    var a = t[r], o = a.__from;
                    o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, i, !0, n))) : (t.splice(r, 1), o.__hoverMir = null, e--)
                }
                i.ctx.restore()
            }
        }, getHoverLayer: function () {
            return this.getLayer(Yv)
        }, _paintList: function (t, e, i) {
            if (this._redrawId === i) {
                e = e || !1, this._updateLayerStatus(t);
                var n = this._doPaintList(t, e);
                if (this._needsManuallyCompositing && this._compositeManually(), !n) {
                    var r = this;
                    Av(function () {
                        r._paintList(t, e, i)
                    })
                }
            }
        }, _compositeManually: function () {
            var t = this.getLayer(Uv).ctx, e = this._domRoot.width, i = this._domRoot.height;
            t.clearRect(0, 0, e, i), this.eachBuiltinLayer(function (n) {
                n.virtual && t.drawImage(n.dom, 0, 0, e, i)
            })
        }, _doPaintList: function (t, e) {
            for (var i = [], n = 0; n < this._zlevelList.length; n++) {
                var r = this._zlevelList[n], a = this._layers[r];
                a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && i.push(a)
            }
            for (var o = !0, s = 0; s < i.length; s++) {
                var a = i[s], l = a.ctx, u = {};
                l.save();
                var h = e ? a.__startIndex : a.__drawIndex, c = !e && a.incremental && Date.now, d = c && Date.now(),
                    p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
                if (a.__startIndex === a.__endIndex) a.clear(!1, p); else if (h === a.__startIndex) {
                    var g = t[h];
                    g.incremental && g.notClear && !e || a.clear(!1, p)
                }
                -1 === h && (console.error("For some unknown reason. drawIndex is -1"), h = a.__startIndex);
                for (var v = h; v < a.__endIndex; v++) {
                    var m = t[v];
                    if (this._doPaintEl(m, a, e, u), m.__dirty = m.__dirtyText = !1, c) {
                        var y = Date.now() - d;
                        if (y > 15) break
                    }
                }
                a.__drawIndex = v, a.__drawIndex < a.__endIndex && (o = !1), u.prevElClipPaths && l.restore(), l.restore()
            }
            return eg.wxa && f(this._layers, function (t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw()
            }), o
        }, _doPaintEl: function (t, e, i, n) {
            var r = e.ctx, a = t.transform;
            if (!(!e.__dirty && !i || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && Dn(t, this._width, this._height))) {
                var o = t.__clipPaths, s = n.prevElClipPaths;
                (!s || An(o, s)) && (s && (r.restore(), n.prevElClipPaths = null, n.prevEl = null), o && (r.save(), kn(o, r), n.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, n.prevEl || null), n.prevEl = t, t.afterBrush && t.afterBrush(r)
            }
        }, getLayer: function (t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = Uv);
            var i = this._layers[t];
            return i || (i = new Dv("zr_" + t, this, this.dpr), i.zlevel = t, i.__builtin__ = !0, this._layerConfig[t] && r(i, this._layerConfig[t], !0), e && (i.virtual = e), this.insertLayer(t, i), i.initContext()), i
        }, insertLayer: function (t, e) {
            var i = this._layers, n = this._zlevelList, r = n.length, a = null, o = -1, s = this._domRoot;
            if (i[t]) return void lv("ZLevel " + t + " has been used already");
            if (!Cn(e)) return void lv("Layer of zlevel " + t + " is not valid");
            if (r > 0 && t > n[0]) {
                for (o = 0; r - 1 > o && !(n[o] < t && n[o + 1] > t); o++) ;
                a = i[n[o]]
            }
            if (n.splice(o + 1, 0, t), i[t] = e, !e.virtual) if (a) {
                var l = a.dom;
                l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
            } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
        }, eachLayer: function (t, e) {
            var i, n, r = this._zlevelList;
            for (n = 0; n < r.length; n++) i = r[n], t.call(e, this._layers[i], i)
        }, eachBuiltinLayer: function (t, e) {
            var i, n, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) n = a[r], i = this._layers[n], i.__builtin__ && t.call(e, i, n)
        }, eachOtherLayer: function (t, e) {
            var i, n, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) n = a[r], i = this._layers[n], i.__builtin__ || t.call(e, i, n)
        }, getLayers: function () {
            return this._layers
        }, _updateLayerStatus: function (t) {
            function e(t) {
                r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t)
            }

            if (this.eachBuiltinLayer(function (t) {
                t.__dirty = t.__used = !1
            }), this._singleCanvas) for (var i = 1; i < t.length; i++) {
                var n = t[i];
                if (n.zlevel !== t[i - 1].zlevel || n.incremental) {
                    this._needsManuallyCompositing = !0;
                    break
                }
            }
            for (var r = null, a = 0, i = 0; i < t.length; i++) {
                var o, n = t[i], s = n.zlevel;
                n.incremental ? (o = this.getLayer(s + qv, this._needsManuallyCompositing), o.incremental = !0, a = 1) : o = this.getLayer(s + (a > 0 ? Zv : 0), this._needsManuallyCompositing), o.__builtin__ || lv("ZLevel " + s + " has been used by unkown layer " + o.id), o !== r && (o.__used = !0, o.__startIndex !== i && (o.__dirty = !0), o.__startIndex = i, o.__drawIndex = o.incremental ? -1 : i, e(i), r = o), n.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = i))
            }
            e(i), this.eachBuiltinLayer(function (t) {
                !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
            })
        }, clear: function () {
            return this.eachBuiltinLayer(this._clearLayer), this
        }, _clearLayer: function (t) {
            t.clear()
        }, setBackgroundColor: function (t) {
            this._backgroundColor = t
        }, configLayer: function (t, e) {
            if (e) {
                var i = this._layerConfig;
                i[t] ? r(i[t], e, !0) : i[t] = e;
                for (var n = 0; n < this._zlevelList.length; n++) {
                    var a = this._zlevelList[n];
                    if (a === t || a === t + Zv) {
                        var o = this._layers[a];
                        r(o, i[t], !0)
                    }
                }
            }
        }, delLayer: function (t) {
            var e = this._layers, i = this._zlevelList, n = e[t];
            n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(u(i, t), 1))
        }, resize: function (t, e) {
            if (this._domRoot.style) {
                var i = this._domRoot;
                i.style.display = "none";
                var n = this._opts;
                if (null != t && (n.width = t), null != e && (n.height = e), t = this._getSize(0), e = this._getSize(1), i.style.display = "", this._width !== t || e !== this._height) {
                    i.style.width = t + "px", i.style.height = e + "px";
                    for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                    f(this._progressiveLayers, function (i) {
                        i.resize(t, e)
                    }), this.refresh(!0)
                }
                this._width = t, this._height = e
            } else {
                if (null == t || null == e) return;
                this._width = t, this._height = e, this.getLayer(Uv).resize(t, e)
            }
            return this
        }, clearLayer: function (t) {
            var e = this._layers[t];
            e && e.clear()
        }, dispose: function () {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
        }, getRenderedCanvas: function (t) {
            if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[Uv].dom;
            var e = new Dv("image", this, t.pixelRatio || this.dpr);
            if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
                this.refresh();
                var i = e.dom.width, n = e.dom.height, r = e.ctx;
                this.eachLayer(function (t) {
                    t.__builtin__ ? r.drawImage(t.dom, 0, 0, i, n) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
                })
            } else for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
                var l = o[s];
                this._doPaintEl(l, e, !0, a)
            }
            return e.dom
        }, getWidth: function () {
            return this._width
        }, getHeight: function () {
            return this._height
        }, _getSize: function (t) {
            var e = this._opts, i = ["width", "height"][t], n = ["clientWidth", "clientHeight"][t],
                r = ["paddingLeft", "paddingTop"][t], a = ["paddingRight", "paddingBottom"][t];
            if (null != e[i] && "auto" !== e[i]) return parseFloat(e[i]);
            var o = this.root, s = document.defaultView.getComputedStyle(o);
            return (o[n] || In(s[i]) || In(o.style[i])) - (In(s[r]) || 0) - (In(s[a]) || 0) | 0
        }, pathToImage: function (t, e) {
            e = e || this.dpr;
            var i = document.createElement("canvas"), n = i.getContext("2d"), r = t.getBoundingRect(), a = t.style,
                o = a.shadowBlur * e, s = a.shadowOffsetX * e, l = a.shadowOffsetY * e,
                u = a.hasStroke() ? a.lineWidth : 0, h = Math.max(u / 2, -s + o), c = Math.max(u / 2, s + o),
                d = Math.max(u / 2, -l + o), f = Math.max(u / 2, l + o), p = r.width + h + c, g = r.height + d + f;
            i.width = p * e, i.height = g * e, n.scale(e, e), n.clearRect(0, 0, p, g), n.dpr = e;
            var v = {position: t.position, rotation: t.rotation, scale: t.scale};
            t.position = [h - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(n);
            var m = Tn, y = new m({style: {x: 0, y: 0, image: i}});
            return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y
        }
    };
    var Qv = function (t) {
        t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {
        }, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, Sg.call(this)
    };
    Qv.prototype = {
        constructor: Qv, addClip: function (t) {
            this._clips.push(t)
        }, addAnimator: function (t) {
            t.animation = this;
            for (var e = t.getClips(), i = 0; i < e.length; i++) this.addClip(e[i])
        }, removeClip: function (t) {
            var e = u(this._clips, t);
            e >= 0 && this._clips.splice(e, 1)
        }, removeAnimator: function (t) {
            for (var e = t.getClips(), i = 0; i < e.length; i++) this.removeClip(e[i]);
            t.animation = null
        }, _update: function () {
            for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, i = this._clips, n = i.length, r = [], a = [], o = 0; n > o; o++) {
                var s = i[o], l = s.step(t, e);
                l && (r.push(l), a.push(s))
            }
            for (var o = 0; n > o;) i[o]._needsRemove ? (i[o] = i[n - 1], i.pop(), n--) : o++;
            n = r.length;
            for (var o = 0; n > o; o++) a[o].fire(r[o]);
            this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
        }, _startLoop: function () {
            function t() {
                e._running && (Av(t), !e._paused && e._update())
            }

            var e = this;
            this._running = !0, Av(t)
        }, start: function () {
            this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
        }, stop: function () {
            this._running = !1
        }, pause: function () {
            this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
        }, resume: function () {
            this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
        }, clear: function () {
            this._clips = []
        }, isFinished: function () {
            return !this._clips.length
        }, animate: function (t, e) {
            e = e || {};
            var i = new nv(t, e.loop, e.getter, e.setter);
            return this.addAnimator(i), i
        }
    }, c(Qv, Sg);
    var Jv = 300, tm = eg.domSupported, em = function () {
        var t = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
            e = ["touchstart", "touchend", "touchmove"],
            i = {pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1}, n = p(t, function (t) {
                var e = t.replace("mouse", "pointer");
                return i.hasOwnProperty(e) ? e : t
            });
        return {mouse: t, touch: e, pointer: n}
    }(), im = {mouse: ["mousemove", "mouseup"], pointer: ["pointermove", "pointerup"]}, nm = Nn.prototype;
    nm.stopPropagation = nm.stopImmediatePropagation = nm.preventDefault = V;
    var rm = {
        mousedown: function (t) {
            t = _e(this.dom, t), this._mayPointerCapture = [t.zrX, t.zrY], this.trigger("mousedown", t)
        }, mousemove: function (t) {
            t = _e(this.dom, t);
            var e = this._mayPointerCapture;
            !e || t.zrX === e[0] && t.zrY === e[1] || Wn(this, !0), this.trigger("mousemove", t)
        }, mouseup: function (t) {
            t = _e(this.dom, t), Wn(this, !1), this.trigger("mouseup", t)
        }, mouseout: function (t) {
            t = _e(this.dom, t), this._pointerCapturing && (t.zrEventControl = "no_globalout");
            var e = t.toElement || t.relatedTarget;
            t.zrIsToLocalDOM = En(this, e), this.trigger("mouseout", t)
        }, touchstart: function (t) {
            t = _e(this.dom, t), Rn(t), this._lastTouchMoment = new Date, this.handler.processGesture(t, "start"), rm.mousemove.call(this, t), rm.mousedown.call(this, t)
        }, touchmove: function (t) {
            t = _e(this.dom, t), Rn(t), this.handler.processGesture(t, "change"), rm.mousemove.call(this, t)
        }, touchend: function (t) {
            t = _e(this.dom, t), Rn(t), this.handler.processGesture(t, "end"), rm.mouseup.call(this, t), +new Date - this._lastTouchMoment < Jv && rm.click.call(this, t)
        }, pointerdown: function (t) {
            rm.mousedown.call(this, t)
        }, pointermove: function (t) {
            On(t) || rm.mousemove.call(this, t)
        }, pointerup: function (t) {
            rm.mouseup.call(this, t)
        }, pointerout: function (t) {
            On(t) || rm.mouseout.call(this, t)
        }
    };
    f(["click", "mousewheel", "dblclick", "contextmenu"], function (t) {
        rm[t] = function (e) {
            e = _e(this.dom, e), this.trigger(t, e)
        }
    });
    var am = {
        pointermove: function (t) {
            On(t) || am.mousemove.call(this, t)
        }, pointerup: function (t) {
            am.mouseup.call(this, t)
        }, mousemove: function (t) {
            this.trigger("mousemove", t)
        }, mouseup: function (t) {
            var e = this._pointerCapturing;
            Wn(this, !1), this.trigger("mouseup", t), e && (t.zrEventControl = "only_globalout", this.trigger("mouseout", t))
        }
    }, om = Yn.prototype;
    om.dispose = function () {
        Gn(this._localHandlerScope), tm && Gn(this._globalHandlerScope)
    }, om.setCursor = function (t) {
        this.dom.style && (this.dom.style.cursor = t || "default")
    }, c(Yn, Sg);
    var sm = !eg.canvasSupported, lm = {canvas: $v}, um = {}, hm = "4.2.0", cm = function (t, e, i) {
        i = i || {}, this.dom = e, this.id = t;
        var n = this, r = new mv, a = i.renderer;
        if (sm) {
            if (!lm.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
            a = "vml"
        } else a && lm[a] || (a = "canvas");
        var o = new lm[a](e, r, i, t);
        this.storage = r, this.painter = o;
        var s = eg.node || eg.worker ? null : new Yn(o.getViewportRoot(), o.root);
        this.handler = new zg(r, o, s, o.root), this.animation = new Qv({stage: {update: y(this.flush, this)}}), this.animation.start(), this._needsRefresh;
        var l = r.delFromStorage, u = r.addToStorage;
        r.delFromStorage = function (t) {
            l.call(r, t), t && t.removeSelfFromZr(n)
        }, r.addToStorage = function (t) {
            u.call(r, t), t.addSelfToZr(n)
        }
    };
    cm.prototype = {
        constructor: cm, getId: function () {
            return this.id
        }, add: function (t) {
            this.storage.addRoot(t), this._needsRefresh = !0
        }, remove: function (t) {
            this.storage.delRoot(t), this._needsRefresh = !0
        }, configLayer: function (t, e) {
            this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0
        }, setBackgroundColor: function (t) {
            this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0
        }, refreshImmediately: function () {
            this._needsRefresh = this._needsRefreshHover = !1, this.painter.refresh(), this._needsRefresh = this._needsRefreshHover = !1
        }, refresh: function () {
            this._needsRefresh = !0
        }, flush: function () {
            var t;
            this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered")
        }, addHover: function (t, e) {
            if (this.painter.addHover) {
                var i = this.painter.addHover(t, e);
                return this.refreshHover(), i
            }
        }, removeHover: function (t) {
            this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
        }, clearHover: function () {
            this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
        }, refreshHover: function () {
            this._needsRefreshHover = !0
        }, refreshHoverImmediately: function () {
            this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
        }, resize: function (t) {
            t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
        }, clearAnimation: function () {
            this.animation.clear()
        }, getWidth: function () {
            return this.painter.getWidth()
        }, getHeight: function () {
            return this.painter.getHeight()
        }, pathToImage: function (t, e) {
            return this.painter.pathToImage(t, e)
        }, setCursorStyle: function (t) {
            this.handler.setCursorStyle(t)
        }, findHover: function (t, e) {
            return this.handler.findHover(t, e)
        }, on: function (t, e, i) {
            this.handler.on(t, e, i)
        }, off: function (t, e) {
            this.handler.off(t, e)
        }, trigger: function (t, e) {
            this.handler.trigger(t, e)
        }, clear: function () {
            this.storage.delRoot(), this.painter.clear()
        }, dispose: function () {
            this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Kn(this.id)
        }
    };
    var dm = (Object.freeze || Object)({version: hm, init: Un, dispose: Zn, getInstance: qn, registerPainter: jn}),
        fm = f, pm = S, gm = x, vm = "series\x00",
        mm = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
        ym = 0, _m = ".", xm = "___EC__COMPONENT__CONTAINER___", wm = 0, bm = function (t) {
            for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
            return function (e, i, n) {
                for (var r = {}, a = 0; a < t.length; a++) {
                    var o = t[a][1];
                    if (!(i && u(i, o) >= 0 || n && u(n, o) < 0)) {
                        var s = e.getShallow(o);
                        null != s && (r[t[a][0]] = s)
                    }
                }
                return r
            }
        },
        Sm = bm([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
        Mm = {
            getLineStyle: function (t) {
                var e = Sm(this, t);
                return e.lineDash = this.getLineDash(e.lineWidth), e
            }, getLineDash: function (t) {
                null == t && (t = 1);
                var e = this.get("type"), i = Math.max(t, 2), n = 4 * t;
                return "solid" === e || null == e ? !1 : "dashed" === e ? [n, n] : [i, i]
            }
        },
        Tm = bm([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
        Im = {
            getAreaStyle: function (t, e) {
                return Tm(this, t, e)
            }
        }, Cm = Math.pow, Dm = Math.sqrt, Am = 1e-8, km = 1e-4, Lm = Dm(3), Pm = 1 / 3, Om = H(), zm = H(), Rm = H(),
        Bm = Math.min, Em = Math.max, Nm = Math.sin, Fm = Math.cos, Vm = 2 * Math.PI, Hm = H(), Gm = H(), Wm = H(),
        Xm = [], Ym = [], Um = {M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7}, Zm = [], qm = [], jm = [], Km = [],
        $m = Math.min, Qm = Math.max, Jm = Math.cos, ty = Math.sin, ey = Math.sqrt, iy = Math.abs,
        ny = "undefined" != typeof Float32Array, ry = function (t) {
            this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
        };
    ry.prototype = {
        constructor: ry,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function (t, e, i) {
            i = i || 0, this._ux = iy(i / ov / t) || 0, this._uy = iy(i / ov / e) || 0
        },
        getContext: function () {
            return this._ctx
        },
        beginPath: function (t) {
            return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
        },
        moveTo: function (t, e) {
            return this.addData(Um.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
        },
        lineTo: function (t, e) {
            var i = iy(t - this._xi) > this._ux || iy(e - this._yi) > this._uy || this._len < 5;
            return this.addData(Um.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this
        },
        bezierCurveTo: function (t, e, i, n, r, a) {
            return this.addData(Um.C, t, e, i, n, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, a) : this._ctx.bezierCurveTo(t, e, i, n, r, a)), this._xi = r, this._yi = a, this
        },
        quadraticCurveTo: function (t, e, i, n) {
            return this.addData(Um.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this
        },
        arc: function (t, e, i, n, r, a) {
            return this.addData(Um.A, t, e, i, i, n, r - n, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, a), this._xi = Jm(r) * i + t, this._yi = ty(r) * i + e, this
        },
        arcTo: function (t, e, i, n, r) {
            return this._ctx && this._ctx.arcTo(t, e, i, n, r), this
        },
        rect: function (t, e, i, n) {
            return this._ctx && this._ctx.rect(t, e, i, n), this.addData(Um.R, t, e, i, n), this
        },
        closePath: function () {
            this.addData(Um.Z);
            var t = this._ctx, e = this._x0, i = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this
        },
        fill: function (t) {
            t && t.fill(), this.toStatic()
        },
        stroke: function (t) {
            t && t.stroke(), this.toStatic()
        },
        setLineDash: function (t) {
            if (t instanceof Array) {
                this._lineDash = t, this._dashIdx = 0;
                for (var e = 0, i = 0; i < t.length; i++) e += t[i];
                this._dashSum = e
            }
            return this
        },
        setLineDashOffset: function (t) {
            return this._dashOffset = t, this
        },
        len: function () {
            return this._len
        },
        setData: function (t) {
            var e = t.length;
            this.data && this.data.length === e || !ny || (this.data = new Float32Array(e));
            for (var i = 0; e > i; i++) this.data[i] = t[i];
            this._len = e
        },
        appendPath: function (t) {
            t instanceof Array || (t = [t]);
            for (var e = t.length, i = 0, n = this._len, r = 0; e > r; r++) i += t[r].len();
            ny && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
            for (var r = 0; e > r; r++) for (var a = t[r].data, o = 0; o < a.length; o++) this.data[n++] = a[o];
            this._len = n
        },
        addData: function (t) {
            if (this._saveData) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var i = 0; i < arguments.length; i++) e[this._len++] = arguments[i];
                this._prevCmd = t
            }
        },
        _expandData: function () {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t
            }
        },
        _needsDash: function () {
            return this._lineDash
        },
        _dashedLineTo: function (t, e) {
            var i, n, r = this._dashSum, a = this._dashOffset, o = this._lineDash, s = this._ctx, l = this._xi,
                u = this._yi, h = t - l, c = e - u, d = ey(h * h + c * c), f = l, p = u, g = o.length;
            for (h /= d, c /= d, 0 > a && (a = r + a), a %= r, f -= a * h, p -= a * c; h > 0 && t >= f || 0 > h && f >= t || 0 === h && (c > 0 && e >= p || 0 > c && p >= e);) n = this._dashIdx, i = o[n], f += h * i, p += c * i, this._dashIdx = (n + 1) % g, h > 0 && l > f || 0 > h && f > l || c > 0 && u > p || 0 > c && p > u || s[n % 2 ? "moveTo" : "lineTo"](h >= 0 ? $m(f, t) : Qm(f, t), c >= 0 ? $m(p, e) : Qm(p, e));
            h = f - t, c = p - e, this._dashOffset = -ey(h * h + c * c)
        },
        _dashedBezierTo: function (t, e, i, n, r, a) {
            var o, s, l, u, h, c = this._dashSum, d = this._dashOffset, f = this._lineDash, p = this._ctx, g = this._xi,
                v = this._yi, m = br, y = 0, _ = this._dashIdx, x = f.length, w = 0;
            for (0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += .1) s = m(g, t, i, r, o + .1) - m(g, t, i, r, o), l = m(v, e, n, a, o + .1) - m(v, e, n, a, o), y += ey(s * s + l * l);
            for (; x > _ && (w += f[_], !(w > d)); _++) ;
            for (o = (w - d) / y; 1 >= o;) u = m(g, t, i, r, o), h = m(v, e, n, a, o), _ % 2 ? p.moveTo(u, h) : p.lineTo(u, h), o += f[_] / y, _ = (_ + 1) % x;
            _ % 2 !== 0 && p.lineTo(r, a), s = r - u, l = a - h, this._dashOffset = -ey(s * s + l * l)
        },
        _dashedQuadraticTo: function (t, e, i, n) {
            var r = i, a = n;
            i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, r, a)
        },
        toStatic: function () {
            var t = this.data;
            t instanceof Array && (t.length = this._len, ny && (this.data = new Float32Array(t)))
        },
        getBoundingRect: function () {
            Zm[0] = Zm[1] = jm[0] = jm[1] = Number.MAX_VALUE, qm[0] = qm[1] = Km[0] = Km[1] = -Number.MAX_VALUE;
            for (var t = this.data, e = 0, i = 0, n = 0, r = 0, a = 0; a < t.length;) {
                var o = t[a++];
                switch (1 === a && (e = t[a], i = t[a + 1], n = e, r = i), o) {
                    case Um.M:
                        n = t[a++], r = t[a++], e = n, i = r, jm[0] = n, jm[1] = r, Km[0] = n, Km[1] = r;
                        break;
                    case Um.L:
                        Rr(e, i, t[a], t[a + 1], jm, Km), e = t[a++], i = t[a++];
                        break;
                    case Um.C:
                        Br(e, i, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], jm, Km), e = t[a++], i = t[a++];
                        break;
                    case Um.Q:
                        Er(e, i, t[a++], t[a++], t[a], t[a + 1], jm, Km), e = t[a++], i = t[a++];
                        break;
                    case Um.A:
                        var s = t[a++], l = t[a++], u = t[a++], h = t[a++], c = t[a++], d = t[a++] + c;
                        a += 1;
                        var f = 1 - t[a++];
                        1 === a && (n = Jm(c) * u + s, r = ty(c) * h + l), Nr(s, l, u, h, c, d, f, jm, Km), e = Jm(d) * u + s, i = ty(d) * h + l;
                        break;
                    case Um.R:
                        n = e = t[a++], r = i = t[a++];
                        var p = t[a++], g = t[a++];
                        Rr(n, r, n + p, r + g, jm, Km);
                        break;
                    case Um.Z:
                        e = n, i = r
                }
                oe(Zm, Zm, jm), se(qm, qm, Km)
            }
            return 0 === a && (Zm[0] = Zm[1] = qm[0] = qm[1] = 0), new Si(Zm[0], Zm[1], qm[0] - Zm[0], qm[1] - Zm[1])
        },
        rebuildPath: function (t) {
            for (var e, i, n, r, a, o, s = this.data, l = this._ux, u = this._uy, h = this._len, c = 0; h > c;) {
                var d = s[c++];
                switch (1 === c && (n = s[c], r = s[c + 1], e = n, i = r), d) {
                    case Um.M:
                        e = n = s[c++], i = r = s[c++], t.moveTo(n, r);
                        break;
                    case Um.L:
                        a = s[c++], o = s[c++], (iy(a - n) > l || iy(o - r) > u || c === h - 1) && (t.lineTo(a, o), n = a, r = o);
                        break;
                    case Um.C:
                        t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), n = s[c - 2], r = s[c - 1];
                        break;
                    case Um.Q:
                        t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), n = s[c - 2], r = s[c - 1];
                        break;
                    case Um.A:
                        var f = s[c++], p = s[c++], g = s[c++], v = s[c++], m = s[c++], y = s[c++], _ = s[c++],
                            x = s[c++], w = g > v ? g : v, b = g > v ? 1 : g / v, S = g > v ? v / g : 1,
                            M = Math.abs(g - v) > .001, T = m + y;
                        M ? (t.translate(f, p), t.rotate(_), t.scale(b, S), t.arc(0, 0, w, m, T, 1 - x), t.scale(1 / b, 1 / S), t.rotate(-_), t.translate(-f, -p)) : t.arc(f, p, w, m, T, 1 - x), 1 === c && (e = Jm(m) * g + f, i = ty(m) * v + p), n = Jm(T) * g + f, r = ty(T) * v + p;
                        break;
                    case Um.R:
                        e = n = s[c], i = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
                        break;
                    case Um.Z:
                        t.closePath(), n = e, r = i
                }
            }
        }
    }, ry.CMD = Um;
    var ay = 2 * Math.PI, oy = 2 * Math.PI, sy = ry.CMD, ly = 2 * Math.PI, uy = 1e-4, hy = [-1, -1, -1], cy = [-1, -1],
        dy = Cv.prototype.getCanvasPattern, fy = Math.abs, py = new ry(!0);
    Jr.prototype = {
        constructor: Jr,
        type: "path",
        __dirtyPath: !0,
        strokeContainThreshold: 5,
        segmentIgnoreThreshold: 0,
        subPixelOptimize: !1,
        brush: function (t, e) {
            var i = this.style, n = this.path || py, r = i.hasStroke(), a = i.hasFill(), o = i.fill, s = i.stroke,
                l = a && !!o.colorStops, u = r && !!s.colorStops, h = a && !!o.image, c = r && !!s.image;
            if (i.bind(t, this, e), this.setTransform(t), this.__dirty) {
                var d;
                l && (d = d || this.getBoundingRect(), this._fillGradient = i.getGradient(t, o, d)), u && (d = d || this.getBoundingRect(), this._strokeGradient = i.getGradient(t, s, d))
            }
            l ? t.fillStyle = this._fillGradient : h && (t.fillStyle = dy.call(o, t)), u ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = dy.call(s, t));
            var f = i.lineDash, p = i.lineDashOffset, g = !!t.setLineDash, v = this.getGlobalScale();
            if (n.setScale(v[0], v[1], this.segmentIgnoreThreshold), this.__dirtyPath || f && !g && r ? (n.beginPath(t), f && !g && (n.setLineDash(f), n.setLineDashOffset(p)), this.buildPath(n, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a) if (null != i.fillOpacity) {
                var m = t.globalAlpha;
                t.globalAlpha = i.fillOpacity * i.opacity, n.fill(t), t.globalAlpha = m
            } else n.fill(t);
            if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r) if (null != i.strokeOpacity) {
                var m = t.globalAlpha;
                t.globalAlpha = i.strokeOpacity * i.opacity, n.stroke(t), t.globalAlpha = m
            } else n.stroke(t);
            f && g && t.setLineDash([]), null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
        },
        buildPath: function () {
        },
        createPathProxy: function () {
            this.path = new ry
        },
        getBoundingRect: function () {
            var t = this._rect, e = this.style, i = !t;
            if (i) {
                var n = this.path;
                n || (n = this.path = new ry), this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), t = n.getBoundingRect()
            }
            if (this._rect = t, e.hasStroke()) {
                var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || i) {
                    r.copy(t);
                    var a = e.lineWidth, o = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2)
                }
                return r
            }
            return t
        },
        contain: function (t, e) {
            var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect(), r = this.style;
            if (t = i[0], e = i[1], n.contain(t, e)) {
                var a = this.path.data;
                if (r.hasStroke()) {
                    var o = r.lineWidth, s = r.strokeNoScale ? this.getLineScale() : 1;
                    if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), Qr(a, o / s, t, e))) return !0
                }
                if (r.hasFill()) return $r(a, t, e)
            }
            return !1
        },
        dirty: function (t) {
            null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
        },
        animateShape: function (t) {
            return this.animate("shape", t)
        },
        attrKV: function (t, e) {
            "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : Mn.prototype.attrKV.call(this, t, e)
        },
        setShape: function (t, e) {
            var i = this.shape;
            if (i) {
                if (S(t)) for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]); else i[t] = e;
                this.dirty(!0)
            }
            return this
        },
        getLineScale: function () {
            var t = this.transform;
            return t && fy(t[0] - 1) > 1e-10 && fy(t[3] - 1) > 1e-10 ? Math.sqrt(fy(t[0] * t[3] - t[2] * t[1])) : 1
        }
    }, Jr.extend = function (t) {
        var e = function (e) {
            Jr.call(this, e), t.style && this.style.extendFrom(t.style, !1);
            var i = t.shape;
            if (i) {
                this.shape = this.shape || {};
                var n = this.shape;
                for (var r in i) !n.hasOwnProperty(r) && i.hasOwnProperty(r) && (n[r] = i[r])
            }
            t.init && t.init.call(this, e)
        };
        h(e, Jr);
        for (var i in t) "style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
        return e
    }, h(Jr, Mn);
    var gy = ry.CMD, vy = [[], [], []], my = Math.sqrt, yy = Math.atan2, _y = function (t, e) {
        var i, n, r, a, o, s, l = t.data, u = gy.M, h = gy.C, c = gy.L, d = gy.R, f = gy.A, p = gy.Q;
        for (r = 0, a = 0; r < l.length;) {
            switch (i = l[r++], a = r, n = 0, i) {
                case u:
                    n = 1;
                    break;
                case c:
                    n = 1;
                    break;
                case h:
                    n = 3;
                    break;
                case p:
                    n = 2;
                    break;
                case f:
                    var g = e[4], v = e[5], m = my(e[0] * e[0] + e[1] * e[1]), y = my(e[2] * e[2] + e[3] * e[3]),
                        _ = yy(-e[1] / y, e[0] / m);
                    l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += _, l[r++] += _, r += 2, a = r;
                    break;
                case d:
                    s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1]
            }
            for (o = 0; n > o; o++) {
                var s = vy[o];
                s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1]
            }
        }
    }, xy = Math.sqrt, wy = Math.sin, by = Math.cos, Sy = Math.PI, My = function (t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1])
    }, Ty = function (t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (My(t) * My(e))
    }, Iy = function (t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Ty(t, e))
    }, Cy = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi, Dy = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g, Ay = function (t) {
        Mn.call(this, t)
    };
    Ay.prototype = {
        constructor: Ay, type: "text", brush: function (t, e) {
            var i = this.style;
            this.__dirty && on(i, !0), i.fill = i.stroke = i.shadowBlur = i.shadowColor = i.shadowOffsetX = i.shadowOffsetY = null;
            var n = i.text;
            return null != n && (n += ""), Sn(n, i) ? (this.setTransform(t), ln(this, t, n, i, null, e), void this.restoreTransform(t)) : void (t.__attrCachedBy = xv.NONE)
        }, getBoundingRect: function () {
            var t = this.style;
            if (this.__dirty && on(t, !0), !this._rect) {
                var e = t.text;
                null != e ? e += "" : e = "";
                var i = Gi(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich);
                if (i.x += t.x || 0, i.y += t.y || 0, _n(t.textStroke, t.textStrokeWidth)) {
                    var n = t.textStrokeWidth;
                    i.x -= n / 2, i.y -= n / 2, i.width += n, i.height += n
                }
                this._rect = i
            }
            return this._rect
        }
    }, h(Ay, Mn);
    var ky = Jr.extend({
            type: "circle", shape: {cx: 0, cy: 0, r: 0}, buildPath: function (t, e, i) {
                i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
            }
        }), Ly = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],
        Py = function (t) {
            return eg.browser.ie && eg.browser.version >= 11 ? function () {
                var e, i = this.__clipPaths, n = this.style;
                if (i) for (var r = 0; r < i.length; r++) {
                    var a = i[r], o = a && a.shape, s = a && a.type;
                    if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
                        for (var l = 0; l < Ly.length; l++) Ly[l][2] = n[Ly[l][0]], n[Ly[l][0]] = Ly[l][1];
                        e = !0;
                        break
                    }
                }
                if (t.apply(this, arguments), e) for (var l = 0; l < Ly.length; l++) n[Ly[l][0]] = Ly[l][2]
            } : t
        }, Oy = Jr.extend({
            type: "sector",
            shape: {cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            brush: Py(Jr.prototype.brush),
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = Math.max(e.r0 || 0, 0), a = Math.max(e.r, 0), o = e.startAngle, s = e.endAngle,
                    l = e.clockwise, u = Math.cos(o), h = Math.sin(o);
                t.moveTo(u * r + i, h * r + n), t.lineTo(u * a + i, h * a + n), t.arc(i, n, a, o, s, !l), t.lineTo(Math.cos(s) * r + i, Math.sin(s) * r + n), 0 !== r && t.arc(i, n, r, s, o, l), t.closePath()
            }
        }), zy = Jr.extend({
            type: "ring", shape: {cx: 0, cy: 0, r: 0, r0: 0}, buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = 2 * Math.PI;
                t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, r, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, r, !0)
            }
        }), Ry = function (t, e) {
            for (var i = t.length, n = [], r = 0, a = 1; i > a; a++) r += ee(t[a - 1], t[a]);
            var o = r / 2;
            o = i > o ? i : o;
            for (var a = 0; o > a; a++) {
                var s, l, u, h = a / (o - 1) * (e ? i : i - 1), c = Math.floor(h), d = h - c, f = t[c % i];
                e ? (s = t[(c - 1 + i) % i], l = t[(c + 1) % i], u = t[(c + 2) % i]) : (s = t[0 === c ? c : c - 1], l = t[c > i - 2 ? i - 1 : c + 1], u = t[c > i - 3 ? i - 1 : c + 2]);
                var p = d * d, g = d * p;
                n.push([oa(s[0], f[0], l[0], u[0], d, p, g), oa(s[1], f[1], l[1], u[1], d, p, g)])
            }
            return n
        }, By = function (t, e, i, n) {
            var r, a, o, s, l = [], u = [], h = [], c = [];
            if (n) {
                o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
                for (var d = 0, f = t.length; f > d; d++) oe(o, o, t[d]), se(s, s, t[d]);
                oe(o, o, n[0]), se(s, s, n[1])
            }
            for (var d = 0, f = t.length; f > d; d++) {
                var p = t[d];
                if (i) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f]; else {
                    if (0 === d || d === f - 1) {
                        l.push(W(t[d]));
                        continue
                    }
                    r = t[d - 1], a = t[d + 1]
                }
                Z(u, a, r), J(u, u, e);
                var g = ee(p, r), v = ee(p, a), m = g + v;
                0 !== m && (g /= m, v /= m), J(h, u, -g), J(c, u, v);
                var y = Y([], p, h), _ = Y([], p, c);
                n && (se(y, y, o), oe(y, y, s), se(_, _, o), oe(_, _, s)), l.push(y), l.push(_)
            }
            return i && l.push(l.shift()), l
        }, Ey = Jr.extend({
            type: "polygon",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            buildPath: function (t, e) {
                sa(t, e, !0)
            }
        }), Ny = Jr.extend({
            type: "polyline",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                sa(t, e, !1)
            }
        }), Fy = Math.round, Vy = {}, Hy = Jr.extend({
            type: "rect", shape: {r: 0, x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i, n, r, a;
                this.subPixelOptimize ? (ua(Vy, e, this.style), i = Vy.x, n = Vy.y, r = Vy.width, a = Vy.height, Vy.r = e.r, e = Vy) : (i = e.x, n = e.y, r = e.width, a = e.height), e.r ? an(t, e) : t.rect(i, n, r, a), t.closePath()
            }
        }), Gy = {}, Wy = Jr.extend({
            type: "line",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i, n, r, a;
                this.subPixelOptimize ? (la(Gy, e, this.style), i = Gy.x1, n = Gy.y1, r = Gy.x2, a = Gy.y2) : (i = e.x1, n = e.y1, r = e.x2, a = e.y2);
                var o = e.percent;
                0 !== o && (t.moveTo(i, n), 1 > o && (r = i * (1 - o) + r * o, a = n * (1 - o) + a * o), t.lineTo(r, a))
            },
            pointAt: function (t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
            }
        }), Xy = [], Yy = Jr.extend({
            type: "bezier-curve",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.x1, n = e.y1, r = e.x2, a = e.y2, o = e.cpx1, s = e.cpy1, l = e.cpx2, u = e.cpy2, h = e.percent;
                0 !== h && (t.moveTo(i, n), null == l || null == u ? (1 > h && (Pr(i, o, r, h, Xy), o = Xy[1], r = Xy[2], Pr(n, s, a, h, Xy), s = Xy[1], a = Xy[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > h && (Ir(i, o, l, r, h, Xy), o = Xy[1], l = Xy[2], r = Xy[3], Ir(n, s, u, a, h, Xy), s = Xy[1], u = Xy[2], a = Xy[3]), t.bezierCurveTo(o, s, l, u, r, a)))
            },
            pointAt: function (t) {
                return ca(this.shape, t, !1)
            },
            tangentAt: function (t) {
                var e = ca(this.shape, t, !0);
                return te(e, e)
            }
        }), Uy = Jr.extend({
            type: "arc",
            shape: {cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = Math.max(e.r, 0), a = e.startAngle, o = e.endAngle, s = e.clockwise,
                    l = Math.cos(a), u = Math.sin(a);
                t.moveTo(l * r + i, u * r + n), t.arc(i, n, r, a, o, !s)
            }
        }), Zy = Jr.extend({
            type: "compound", shape: {paths: null}, _updatePathDirty: function () {
                for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++) t = t || e[i].__dirtyPath;
                this.__dirtyPath = t, this.__dirty = this.__dirty || t
            }, beforeBrush: function () {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++) t[i].path || t[i].createPathProxy(), t[i].path.setScale(e[0], e[1], t[i].segmentIgnoreThreshold)
            }, buildPath: function (t, e) {
                for (var i = e.paths || [], n = 0; n < i.length; n++) i[n].buildPath(t, i[n].shape, !0)
            }, afterBrush: function () {
                for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
            }, getBoundingRect: function () {
                return this._updatePathDirty(), Jr.prototype.getBoundingRect.call(this)
            }
        }), qy = function (t) {
            this.colorStops = t || []
        };
    qy.prototype = {
        constructor: qy, addColorStop: function (t, e) {
            this.colorStops.push({offset: t, color: e})
        }
    };
    var jy = function (t, e, i, n, r, a) {
        this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, this.y2 = null == n ? 0 : n, this.type = "linear", this.global = a || !1, qy.call(this, r)
    };
    jy.prototype = {constructor: jy}, h(jy, qy);
    var Ky = function (t, e, i, n, r) {
        this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, this.type = "radial", this.global = r || !1, qy.call(this, n)
    };
    Ky.prototype = {constructor: Ky}, h(Ky, qy), da.prototype.incremental = !0, da.prototype.clearDisplaybles = function () {
        this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1
    }, da.prototype.addDisplayable = function (t, e) {
        e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()
    }, da.prototype.addDisplayables = function (t, e) {
        e = e || !1;
        for (var i = 0; i < t.length; i++) this.addDisplayable(t[i], e)
    }, da.prototype.eachPendingDisplayable = function (t) {
        for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
        for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
    }, da.prototype.update = function () {
        this.updateTransform();
        for (var t = this._cursor; t < this._displayables.length; t++) {
            var e = this._displayables[t];
            e.parent = this, e.update(), e.parent = null
        }
        for (var t = 0; t < this._temporaryDisplayables.length; t++) {
            var e = this._temporaryDisplayables[t];
            e.parent = this, e.update(), e.parent = null
        }
    }, da.prototype.brush = function (t) {
        for (var e = this._cursor; e < this._displayables.length; e++) {
            var i = this._displayables[e];
            i.beforeBrush && i.beforeBrush(t), i.brush(t, e === this._cursor ? null : this._displayables[e - 1]), i.afterBrush && i.afterBrush(t)
        }
        this._cursor = e;
        for (var e = 0; e < this._temporaryDisplayables.length; e++) {
            var i = this._temporaryDisplayables[e];
            i.beforeBrush && i.beforeBrush(t), i.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), i.afterBrush && i.afterBrush(t)
        }
        this._temporaryDisplayables = [], this.notClear = !0
    };
    var $y = [];
    da.prototype.getBoundingRect = function () {
        if (!this._rect) {
            for (var t = new Si(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                var i = this._displayables[e], n = i.getBoundingRect().clone();
                i.needLocalTransform() && n.applyTransform(i.getLocalTransform($y)), t.union(n)
            }
            this._rect = t
        }
        return this._rect
    }, da.prototype.contain = function (t, e) {
        var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect();
        if (n.contain(i[0], i[1])) for (var r = 0; r < this._displayables.length; r++) {
            var a = this._displayables[r];
            if (a.contain(t, e)) return !0
        }
        return !1
    }, h(da, Mn);
    var Qy = Math.max, Jy = Math.min, t_ = {}, e_ = 1,
        i_ = {color: "textFill", textBorderColor: "textStroke", textBorderWidth: "textStrokeWidth"}, n_ = "emphasis",
        r_ = "normal", a_ = 1, o_ = {}, s_ = {}, l_ = aa, u_ = ha, h_ = N(), c_ = 0;
    ga("circle", ky), ga("sector", Oy), ga("ring", zy), ga("polygon", Ey), ga("polyline", Ny), ga("rect", Hy), ga("line", Wy), ga("bezierCurve", Yy), ga("arc", Uy);
    var d_ = (Object.freeze || Object)({
            Z2_EMPHASIS_LIFT: e_,
            CACHED_LABEL_STYLE_PROPERTIES: i_,
            extendShape: fa,
            extendPath: pa,
            registerShape: ga,
            getShapeClass: va,
            makePath: ma,
            makeImage: ya,
            mergePath: l_,
            resizePath: xa,
            subPixelOptimizeLine: wa,
            subPixelOptimizeRect: ba,
            subPixelOptimize: u_,
            setElementHoverStyle: ka,
            setHoverStyle: Ba,
            setAsHighDownDispatcher: Ea,
            isHighDownDispatcher: Na,
            getHighlightDigit: Fa,
            setLabelStyle: Va,
            modifyLabelStyle: Ha,
            setTextStyle: Ga,
            setText: Wa,
            getFont: Ka,
            updateProps: Qa,
            initProps: Ja,
            getTransform: to,
            applyTransform: eo,
            transformDirection: io,
            groupTransition: no,
            clipPointsByRect: ro,
            clipRectByRect: ao,
            createIcon: oo,
            linePolygonIntersect: so,
            lineLineIntersect: lo,
            Group: pv,
            Image: Tn,
            Text: Ay,
            Circle: ky,
            Sector: Oy,
            Ring: zy,
            Polygon: Ey,
            Polyline: Ny,
            Rect: Hy,
            Line: Wy,
            BezierCurve: Yy,
            Arc: Uy,
            IncrementalDisplayable: da,
            CompoundPath: Zy,
            LinearGradient: jy,
            RadialGradient: Ky,
            BoundingRect: Si
        }), f_ = ["textStyle", "color"], p_ = {
            getTextColor: function (t) {
                var e = this.ecModel;
                return this.getShallow("color") || (!t && e ? e.get(f_) : null)
            }, getFont: function () {
                return Ka({
                    fontStyle: this.getShallow("fontStyle"),
                    fontWeight: this.getShallow("fontWeight"),
                    fontSize: this.getShallow("fontSize"),
                    fontFamily: this.getShallow("fontFamily")
                }, this.ecModel)
            }, getTextRect: function (t) {
                return Gi(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("lineHeight"), this.getShallow("rich"), this.getShallow("truncateText"))
            }
        },
        g_ = bm([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
        v_ = {
            getItemStyle: function (t, e) {
                var i = g_(this, t, e), n = this.getBorderLineDash();
                return n && (i.lineDash = n), i
            }, getBorderLineDash: function () {
                var t = this.get("borderType");
                return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
            }
        }, m_ = c, y_ = sr();
    co.prototype = {
        constructor: co, init: null, mergeOption: function (t) {
            r(this.option, t, !0)
        }, get: function (t, e) {
            return null == t ? this.option : fo(this.option, this.parsePath(t), !e && po(this, t))
        }, getShallow: function (t, e) {
            var i = this.option, n = null == i ? i : i[t], r = !e && po(this, t);
            return null == n && r && (n = r.getShallow(t)), n
        }, getModel: function (t, e) {
            var i, n = null == t ? this.option : fo(this.option, t = this.parsePath(t));
            return e = e || (i = po(this, t)) && i.getModel(t), new co(n, e, this.ecModel)
        }, isEmpty: function () {
            return null == this.option
        }, restoreData: function () {
        }, clone: function () {
            var t = this.constructor;
            return new t(n(this.option))
        }, setReadOnly: function () {
        }, parsePath: function (t) {
            return "string" == typeof t && (t = t.split(".")), t
        }, customizeGetParent: function (t) {
            y_(this).getParent = t
        }, isAnimationEnabled: function () {
            if (!eg.node) {
                if (null != this.option.animation) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled()
            }
        }
    }, gr(co), vr(co), m_(co, Mm), m_(co, Im), m_(co, p_), m_(co, v_);
    var __ = 0, x_ = 1e-4, w_ = 9007199254740991,
        b_ = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
        S_ = (Object.freeze || Object)({
            linearMap: _o,
            parsePercent: xo,
            round: wo,
            asc: bo,
            getPrecision: So,
            getPrecisionSafe: Mo,
            getPixelPrecision: To,
            getPercentWithPrecision: Io,
            MAX_SAFE_INTEGER: w_,
            remRadian: Co,
            isRadianAroundZero: Do,
            parseDate: Ao,
            quantity: ko,
            quantityExponent: Lo,
            nice: Po,
            quantile: Oo,
            reformIntervals: zo,
            isNumeric: Ro
        }), M_ = P, T_ = /([&<>"'])/g, I_ = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"},
        C_ = ["a", "b", "c", "d", "e", "f", "g"], D_ = function (t, e) {
            return "{" + t + (null == e ? "" : e) + "}"
        }, A_ = qi, k_ = (Object.freeze || Object)({
            addCommas: Bo,
            toCamelCase: Eo,
            normalizeCssArray: M_,
            encodeHTML: No,
            formatTpl: Fo,
            formatTplSimple: Vo,
            getTooltipMarker: Ho,
            formatTime: Wo,
            capitalFirst: Xo,
            truncateText: A_,
            getTextBoundingRect: Yo,
            getTextRect: Uo
        }), L_ = f, P_ = ["left", "right", "top", "bottom", "width", "height"],
        O_ = [["width", "left", "right"], ["height", "top", "bottom"]], z_ = Zo,
        R_ = (_(Zo, "vertical"), _(Zo, "horizontal"), {
            getBoxLayoutParams: function () {
                return {
                    left: this.get("left"),
                    top: this.get("top"),
                    right: this.get("right"),
                    bottom: this.get("bottom"),
                    width: this.get("width"),
                    height: this.get("height")
                }
            }
        }), B_ = sr(), E_ = co.extend({
            type: "component",
            id: "",
            name: "",
            mainType: "",
            subType: "",
            componentIndex: 0,
            defaultOption: null,
            ecModel: null,
            dependentModels: [],
            uid: null,
            layoutMode: null,
            $constructor: function (t, e, i, n) {
                co.call(this, t, e, i, n), this.uid = go("ec_cpt_model")
            },
            init: function (t, e, i) {
                this.mergeDefaultAndTheme(t, i)
            },
            mergeDefaultAndTheme: function (t, e) {
                var i = this.layoutMode, n = i ? $o(t) : {}, a = e.getTheme();
                r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), i && Ko(t, n, i)
            },
            mergeOption: function (t) {
                r(this.option, t, !0);
                var e = this.layoutMode;
                e && Ko(this.option, t, e)
            },
            optionUpdated: function () {
            },
            getDefaultOption: function () {
                var t = B_(this);
                if (!t.defaultOption) {
                    for (var e = [], i = this.constructor; i;) {
                        var n = i.prototype.defaultOption;
                        n && e.push(n), i = i.superClass
                    }
                    for (var a = {}, o = e.length - 1; o >= 0; o--) a = r(a, e[o], !0);
                    t.defaultOption = a
                }
                return t.defaultOption
            },
            getReferringComponents: function (t) {
                return this.ecModel.queryComponents({
                    mainType: t,
                    index: this.get(t + "Index", !0),
                    id: this.get(t + "Id", !0)
                })
            }
        });
    _r(E_, {registerWhenExtend: !0}), vo(E_), mo(E_, Jo), c(E_, R_);
    var N_ = "";
    "undefined" != typeof navigator && (N_ = navigator.platform || "");
    var F_ = {
            color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
            gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
            textStyle: {
                fontFamily: N_.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            blendMode: null,
            animation: "auto",
            animationDuration: 1e3,
            animationDurationUpdate: 300,
            animationEasing: "exponentialOut",
            animationEasingUpdate: "cubicOut",
            animationThreshold: 2e3,
            progressiveThreshold: 3e3,
            progressive: 400,
            hoverLayerThreshold: 3e3,
            useUTC: !1
        }, V_ = sr(), H_ = {
            clearColorPalette: function () {
                V_(this).colorIdx = 0, V_(this).colorNameMap = {}
            }, getColorFromPalette: function (t, e, i) {
                e = e || this;
                var n = V_(e), r = n.colorIdx || 0, a = n.colorNameMap = n.colorNameMap || {};
                if (a.hasOwnProperty(t)) return a[t];
                var o = $n(this.get("color", !0)), s = this.get("colorLayer", !0), l = null != i && s ? ts(s, i) : o;
                if (l = l || o, l && l.length) {
                    var u = l[r];
                    return t && (a[t] = u), n.colorIdx = (r + 1) % l.length, u
                }
            }
        }, G_ = "original", W_ = "arrayRows", X_ = "objectRows", Y_ = "keyedColumns", U_ = "unknown", Z_ = "typedArray",
        q_ = "column", j_ = "row";
    es.seriesDataToSource = function (t) {
        return new es({data: t, sourceFormat: T(t) ? Z_ : G_, fromDataset: !1})
    }, vr(es);
    var K_ = {Must: 1, Might: 2, Not: 3}, $_ = sr(), Q_ = "\x00_ec_inner", J_ = co.extend({
        init: function (t, e, i, n) {
            i = i || {}, this.option = null, this._theme = new co(i), this._optionManager = n
        }, setOption: function (t, e) {
            O(!(Q_ in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
        }, resetOption: function (t) {
            var e = !1, i = this._optionManager;
            if (!t || "recreate" === t) {
                var n = i.mountOption("recreate" === t);
                this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : ms.call(this, n), e = !0
            }
            if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                var r = i.getTimelineOption(this);
                r && (this.mergeOption(r), e = !0)
            }
            if (!t || "recreate" === t || "media" === t) {
                var a = i.getMediaOption(this, this._api);
                a.length && f(a, function (t) {
                    this.mergeOption(t, e = !0)
                }, this)
            }
            return e
        }, mergeOption: function (t) {
            function e(e, n) {
                var r = $n(t[e]), s = er(a.get(e), r);
                ir(s), f(s, function (t) {
                    var i = t.option;
                    S(i) && (t.keyInfo.mainType = e, t.keyInfo.subType = _s(e, i, t.exist))
                });
                var l = ys(a, n);
                i[e] = [], a.set(e, []), f(s, function (t, n) {
                    var r = t.exist, s = t.option;
                    if (O(S(s) || r, "Empty component definition"), s) {
                        var u = E_.getClass(e, t.keyInfo.subType, !0);
                        if (r && r.constructor === u) r.name = t.keyInfo.name, r.mergeOption(s, this), r.optionUpdated(s, !1); else {
                            var h = o({dependentModels: l, componentIndex: n}, t.keyInfo);
                            r = new u(s, this, this, h), o(r, h), r.init(s, this, this, h), r.optionUpdated(null, !0)
                        }
                    } else r.mergeOption({}, this), r.optionUpdated({}, !1);
                    a.get(e)[n] = r, i[e][n] = r.option
                }, this), "series" === e && xs(this, a.get("series"))
            }

            var i = this.option, a = this._componentsMap, s = [];
            rs(this), f(t, function (t, e) {
                null != t && (E_.hasClass(e) ? e && s.push(e) : i[e] = null == i[e] ? n(t) : r(i[e], t, !0))
            }), E_.topologicalTravel(s, E_.getAllClassMainTypes(), e, this), this._seriesIndicesMap = N(this._seriesIndices = this._seriesIndices || [])
        }, getOption: function () {
            var t = n(this.option);
            return f(t, function (e, i) {
                if (E_.hasClass(i)) {
                    for (var e = $n(e), n = e.length - 1; n >= 0; n--) rr(e[n]) && e.splice(n, 1);
                    t[i] = e
                }
            }), delete t[Q_], t
        }, getTheme: function () {
            return this._theme
        }, getComponent: function (t, e) {
            var i = this._componentsMap.get(t);
            return i ? i[e || 0] : void 0
        }, queryComponents: function (t) {
            var e = t.mainType;
            if (!e) return [];
            var i = t.index, n = t.id, r = t.name, a = this._componentsMap.get(e);
            if (!a || !a.length) return [];
            var o;
            if (null != i) x(i) || (i = [i]), o = v(p(i, function (t) {
                return a[t]
            }), function (t) {
                return !!t
            }); else if (null != n) {
                var s = x(n);
                o = v(a, function (t) {
                    return s && u(n, t.id) >= 0 || !s && t.id === n
                })
            } else if (null != r) {
                var l = x(r);
                o = v(a, function (t) {
                    return l && u(r, t.name) >= 0 || !l && t.name === r
                })
            } else o = a.slice();
            return ws(o, t)
        }, findComponents: function (t) {
            function e(t) {
                var e = r + "Index", i = r + "Id", n = r + "Name";
                return !t || null == t[e] && null == t[i] && null == t[n] ? null : {
                    mainType: r,
                    index: t[e],
                    id: t[i],
                    name: t[n]
                }
            }

            function i(e) {
                return t.filter ? v(e, t.filter) : e
            }

            var n = t.query, r = t.mainType, a = e(n), o = a ? this.queryComponents(a) : this._componentsMap.get(r);
            return i(ws(o, t))
        }, eachComponent: function (t, e, i) {
            var n = this._componentsMap;
            if ("function" == typeof t) i = e, e = t, n.each(function (t, n) {
                f(t, function (t, r) {
                    e.call(i, n, t, r)
                })
            }); else if (b(t)) f(n.get(t), e, i); else if (S(t)) {
                var r = this.findComponents(t);
                f(r, e, i)
            }
        }, getSeriesByName: function (t) {
            var e = this._componentsMap.get("series");
            return v(e, function (e) {
                return e.name === t
            })
        }, getSeriesByIndex: function (t) {
            return this._componentsMap.get("series")[t]
        }, getSeriesByType: function (t) {
            var e = this._componentsMap.get("series");
            return v(e, function (e) {
                return e.subType === t
            })
        }, getSeries: function () {
            return this._componentsMap.get("series").slice()
        }, getSeriesCount: function () {
            return this._componentsMap.get("series").length
        }, eachSeries: function (t, e) {
            f(this._seriesIndices, function (i) {
                var n = this._componentsMap.get("series")[i];
                t.call(e, n, i)
            }, this)
        }, eachRawSeries: function (t, e) {
            f(this._componentsMap.get("series"), t, e)
        }, eachSeriesByType: function (t, e, i) {
            f(this._seriesIndices, function (n) {
                var r = this._componentsMap.get("series")[n];
                r.subType === t && e.call(i, r, n)
            }, this)
        }, eachRawSeriesByType: function (t, e, i) {
            return f(this.getSeriesByType(t), e, i)
        }, isSeriesFiltered: function (t) {
            return null == this._seriesIndicesMap.get(t.componentIndex)
        }, getCurrentSeriesIndices: function () {
            return (this._seriesIndices || []).slice()
        }, filterSeries: function (t, e) {
            var i = v(this._componentsMap.get("series"), t, e);
            xs(this, i)
        }, restoreData: function (t) {
            var e = this._componentsMap;
            xs(this, e.get("series"));
            var i = [];
            e.each(function (t, e) {
                i.push(e)
            }), E_.topologicalTravel(i, E_.getAllClassMainTypes(), function (i) {
                f(e.get(i), function (e) {
                    ("series" !== i || !gs(e, t)) && e.restoreData()
                })
            })
        }
    });
    c(J_, H_);
    var tx = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
        ex = {};
    Ss.prototype = {
        constructor: Ss, create: function (t, e) {
            var i = [];
            f(ex, function (n) {
                var r = n.create(t, e);
                i = i.concat(r || [])
            }), this._coordinateSystems = i
        }, update: function (t, e) {
            f(this._coordinateSystems, function (i) {
                i.update && i.update(t, e)
            })
        }, getCoordinateSystems: function () {
            return this._coordinateSystems.slice()
        }
    }, Ss.register = function (t, e) {
        ex[t] = e
    }, Ss.get = function (t) {
        return ex[t]
    };
    var ix = f, nx = n, rx = p, ax = r, ox = /^(min|max)?(.+)$/;
    Ms.prototype = {
        constructor: Ms, setOption: function (t, e) {
            t && f($n(t.series), function (t) {
                t && t.data && T(t.data) && R(t.data)
            }), t = nx(t);
            var i = this._optionBackup, n = Ts.call(this, t, e, !i);
            this._newBaseOption = n.baseOption, i ? (As(i.baseOption, n.baseOption), n.timelineOptions.length && (i.timelineOptions = n.timelineOptions), n.mediaList.length && (i.mediaList = n.mediaList), n.mediaDefault && (i.mediaDefault = n.mediaDefault)) : this._optionBackup = n
        }, mountOption: function (t) {
            var e = this._optionBackup;
            return this._timelineOptions = rx(e.timelineOptions, nx), this._mediaList = rx(e.mediaList, nx), this._mediaDefault = nx(e.mediaDefault), this._currentMediaIndices = [], nx(t ? e.baseOption : this._newBaseOption)
        }, getTimelineOption: function (t) {
            var e, i = this._timelineOptions;
            if (i.length) {
                var n = t.getComponent("timeline");
                n && (e = nx(i[n.getCurrentIndex()], !0))
            }
            return e
        }, getMediaOption: function () {
            var t = this._api.getWidth(), e = this._api.getHeight(), i = this._mediaList, n = this._mediaDefault,
                r = [], a = [];
            if (!i.length && !n) return a;
            for (var o = 0, s = i.length; s > o; o++) Is(i[o].query, t, e) && r.push(o);
            return !r.length && n && (r = [-1]), r.length && !Ds(r, this._currentMediaIndices) && (a = rx(r, function (t) {
                return nx(-1 === t ? n.option : i[t].option)
            })), this._currentMediaIndices = r, a
        }
    };
    var sx = f, lx = S, ux = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
        hx = function (t, e) {
            sx(Bs(t.series), function (t) {
                lx(t) && Rs(t)
            });
            var i = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
            e && i.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), sx(i, function (e) {
                sx(Bs(t[e]), function (t) {
                    t && (Os(t, "axisLabel"), Os(t.axisPointer, "label"))
                })
            }), sx(Bs(t.parallel), function (t) {
                var e = t && t.parallelAxisDefault;
                Os(e, "axisLabel"), Os(e && e.axisPointer, "label")
            }), sx(Bs(t.calendar), function (t) {
                Ls(t, "itemStyle"), Os(t, "dayLabel"), Os(t, "monthLabel"), Os(t, "yearLabel")
            }), sx(Bs(t.radar), function (t) {
                Os(t, "name")
            }), sx(Bs(t.geo), function (t) {
                lx(t) && (zs(t), sx(Bs(t.regions), function (t) {
                    zs(t)
                }))
            }), sx(Bs(t.timeline), function (t) {
                zs(t), Ls(t, "label"), Ls(t, "itemStyle"), Ls(t, "controlStyle", !0);
                var e = t.data;
                x(e) && f(e, function (t) {
                    S(t) && (Ls(t, "label"), Ls(t, "itemStyle"))
                })
            }), sx(Bs(t.toolbox), function (t) {
                Ls(t, "iconStyle"), sx(t.feature, function (t) {
                    Ls(t, "iconStyle")
                })
            }), Os(Es(t.axisPointer), "label"), Os(Es(t.tooltip).axisPointer, "label")
        }, cx = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
        dx = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
        fx = function (t, e) {
            hx(t, e), t.series = $n(t.series), f(t.series, function (t) {
                if (S(t)) {
                    var e = t.type;
                    if ("line" === e) null != t.clipOverflow && (t.clip = t.clipOverflow); else if ("pie" === e || "gauge" === e) null != t.clockWise && (t.clockwise = t.clockWise); else if ("gauge" === e) {
                        var i = Ns(t, "pointer.color");
                        null != i && Fs(t, "itemStyle.color", i)
                    }
                    Vs(t)
                }
            }), t.dataRange && (t.visualMap = t.dataRange), f(dx, function (e) {
                var i = t[e];
                i && (x(i) || (i = [i]), f(i, function (t) {
                    Vs(t)
                }))
            })
        }, px = function (t) {
            var e = N();
            t.eachSeries(function (t) {
                var i = t.get("stack");
                if (i) {
                    var n = e.get(i) || e.set(i, []), r = t.getData(), a = {
                        stackResultDimension: r.getCalculationInfo("stackResultDimension"),
                        stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
                        stackedDimension: r.getCalculationInfo("stackedDimension"),
                        stackedByDimension: r.getCalculationInfo("stackedByDimension"),
                        isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
                        data: r,
                        seriesModel: t
                    };
                    if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
                    n.length && r.setCalculationInfo("stackedOnSeries", n[n.length - 1].seriesModel), n.push(a)
                }
            }), e.each(Hs)
        }, gx = Gs.prototype;
    gx.pure = !1, gx.persistent = !0, gx.getSource = function () {
        return this._source
    };
    var vx = {
        arrayRows_column: {
            pure: !0, count: function () {
                return Math.max(0, this._data.length - this._source.startIndex)
            }, getItem: function (t) {
                return this._data[t + this._source.startIndex]
            }, appendData: Ys
        },
        arrayRows_row: {
            pure: !0, count: function () {
                var t = this._data[0];
                return t ? Math.max(0, t.length - this._source.startIndex) : 0
            }, getItem: function (t) {
                t += this._source.startIndex;
                for (var e = [], i = this._data, n = 0; n < i.length; n++) {
                    var r = i[n];
                    e.push(r ? r[t] : null)
                }
                return e
            }, appendData: function () {
                throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
            }
        },
        objectRows: {pure: !0, count: Ws, getItem: Xs, appendData: Ys},
        keyedColumns: {
            pure: !0, count: function () {
                var t = this._source.dimensionsDefine[0].name, e = this._data[t];
                return e ? e.length : 0
            }, getItem: function (t) {
                for (var e = [], i = this._source.dimensionsDefine, n = 0; n < i.length; n++) {
                    var r = this._data[i[n].name];
                    e.push(r ? r[t] : null)
                }
                return e
            }, appendData: function (t) {
                var e = this._data;
                f(t, function (t, i) {
                    for (var n = e[i] || (e[i] = []), r = 0; r < (t || []).length; r++) n.push(t[r])
                })
            }
        },
        original: {count: Ws, getItem: Xs, appendData: Ys},
        typedArray: {
            persistent: !1, pure: !0, count: function () {
                return this._data ? this._data.length / this._dimSize : 0
            }, getItem: function (t, e) {
                t -= this._offset, e = e || [];
                for (var i = this._dimSize * t, n = 0; n < this._dimSize; n++) e[n] = this._data[i + n];
                return e
            }, appendData: function (t) {
                this._data = t
            }, clean: function () {
                this._offset += this.count(), this._data = null
            }
        }
    }, mx = {
        arrayRows: Us, objectRows: function (t, e, i, n) {
            return null != i ? t[n] : t
        }, keyedColumns: Us, original: function (t, e, i) {
            var n = Jn(t);
            return null != i && n instanceof Array ? n[i] : n
        }, typedArray: Us
    }, yx = {
        arrayRows: Zs, objectRows: function (t, e) {
            return qs(t[e], this._dimensionInfos[e])
        }, keyedColumns: Zs, original: function (t, e, i, n) {
            var r = t && (null == t.value ? t : t.value);
            return !this._rawData.pure && tr(t) && (this.hasItemOption = !0), qs(r instanceof Array ? r[n] : r, this._dimensionInfos[e])
        }, typedArray: function (t, e, i, n) {
            return t[n]
        }
    }, _x = /\{@(.+?)\}/g, xx = {
        getDataParams: function (t, e) {
            var i = this.getData(e), n = this.getRawValue(t, e), r = i.getRawIndex(t), a = i.getName(t),
                o = i.getRawDataItem(t), s = i.getItemVisual(t, "color"), l = i.getItemVisual(t, "borderColor"),
                u = this.ecModel.getComponent("tooltip"), h = u && u.get("renderMode"), c = dr(h), d = this.mainType,
                f = "series" === d, p = i.userOutput;
            return {
                componentType: d,
                componentSubType: this.subType,
                componentIndex: this.componentIndex,
                seriesType: f ? this.subType : null,
                seriesIndex: this.seriesIndex,
                seriesId: f ? this.id : null,
                seriesName: f ? this.name : null,
                name: a,
                dataIndex: r,
                data: o,
                dataType: e,
                value: n,
                color: s,
                borderColor: l,
                dimensionNames: p ? p.dimensionNames : null,
                encode: p ? p.encode : null,
                marker: Ho({color: s, renderMode: c}),
                $vars: ["seriesName", "name", "value"]
            }
        }, getFormattedLabel: function (t, e, i, n, r) {
            e = e || "normal";
            var a = this.getData(i), o = a.getItemModel(t), s = this.getDataParams(t, i);
            null != n && s.value instanceof Array && (s.value = s.value[n]);
            var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
            if ("function" == typeof l) return s.status = e, s.dimensionIndex = n, l(s);
            if ("string" == typeof l) {
                var u = Fo(l, s);
                return u.replace(_x, function (e, i) {
                    var n = i.length;
                    return "[" === i.charAt(0) && "]" === i.charAt(n - 1) && (i = +i.slice(1, n - 1)), js(a, t, i)
                })
            }
        }, getRawValue: function (t, e) {
            return js(this.getData(e), t)
        }, formatTooltip: function () {
        }
    }, bx = Qs.prototype;
    bx.perform = function (t) {
        function e(t) {
            return !(t >= 1) && (t = 1), t
        }

        var i = this._upstream, n = t && t.skip;
        if (this._dirty && i) {
            var r = this.context;
            r.data = r.outputData = i.context.outputData
        }
        this.__pipeline && (this.__pipeline.currentTask = this);
        var a;
        this._plan && !n && (a = this._plan(this.context));
        var o = e(this._modBy), s = this._modDataCount || 0, l = e(t && t.modBy), u = t && t.modDataCount || 0;
        (o !== l || s !== u) && (a = "reset");
        var h;
        (this._dirty || "reset" === a) && (this._dirty = !1, h = tl(this, n)), this._modBy = l, this._modDataCount = u;
        var c = t && t.step;
        if (this._dueEnd = i ? i._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
            var d = this._dueIndex, f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
            if (!n && (h || f > d)) {
                var p = this._progress;
                if (x(p)) for (var g = 0; g < p.length; g++) Js(this, p[g], d, f, l, u); else Js(this, p, d, f, l, u)
            }
            this._dueIndex = f;
            var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;
            this._outputDueEnd = v
        } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished()
    };
    var Sx = function () {
        function t() {
            return i > n ? n++ : null
        }

        function e() {
            var t = n % o * r + Math.ceil(n / o), e = n >= i ? null : a > t ? t : n;
            return n++, e
        }

        var i, n, r, a, o, s = {
            reset: function (l, u, h, c) {
                n = l, i = u, r = h, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t
            }
        };
        return s
    }();
    bx.dirty = function () {
        this._dirty = !0, this._onDirty && this._onDirty(this.context)
    }, bx.unfinished = function () {
        return this._progress && this._dueIndex < this._dueEnd
    }, bx.pipe = function (t) {
        (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
    }, bx.dispose = function () {
        this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
    }, bx.getUpstream = function () {
        return this._upstream
    }, bx.getDownstream = function () {
        return this._downstream
    }, bx.setOutputEnd = function (t) {
        this._outputDueEnd = this._settedOutputEnd = t
    };
    var Mx = sr(), Tx = E_.extend({
        type: "series.__base__",
        seriesIndex: 0,
        coordinateSystem: null,
        defaultOption: null,
        legendVisualProvider: null,
        visualColorAccessPath: "itemStyle.color",
        visualBorderColorAccessPath: "itemStyle.borderColor",
        layoutMode: null,
        init: function (t, e, i) {
            this.seriesIndex = this.componentIndex, this.dataTask = $s({
                count: nl,
                reset: rl
            }), this.dataTask.context = {model: this}, this.mergeDefaultAndTheme(t, i), as(this);
            var n = this.getInitialData(t, i);
            ol(n, this), this.dataTask.context.data = n, Mx(this).dataBeforeProcessed = n, el(this)
        },
        mergeDefaultAndTheme: function (t, e) {
            var i = this.layoutMode, n = i ? $o(t) : {}, a = this.subType;
            E_.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), Qn(t, "label", ["show"]), this.fillDataTextStyle(t.data), i && Ko(t, n, i)
        },
        mergeOption: function (t, e) {
            t = r(this.option, t, !0), this.fillDataTextStyle(t.data);
            var i = this.layoutMode;
            i && Ko(this.option, t, i), as(this);
            var n = this.getInitialData(t, e);
            ol(n, this), this.dataTask.dirty(), this.dataTask.context.data = n, Mx(this).dataBeforeProcessed = n, el(this)
        },
        fillDataTextStyle: function (t) {
            if (t && !T(t)) for (var e = ["show"], i = 0; i < t.length; i++) t[i] && t[i].label && Qn(t[i], "label", e)
        },
        getInitialData: function () {
        },
        appendData: function (t) {
            var e = this.getRawData();
            e.appendData(t.data)
        },
        getData: function (t) {
            var e = ll(this);
            if (e) {
                var i = e.context.data;
                return null == t ? i : i.getLinkedData(t)
            }
            return Mx(this).data
        },
        setData: function (t) {
            var e = ll(this);
            if (e) {
                var i = e.context;
                i.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), i.outputData = t, e !== this.dataTask && (i.data = t)
            }
            Mx(this).data = t
        },
        getSource: function () {
            return ns(this)
        },
        getRawData: function () {
            return Mx(this).dataBeforeProcessed
        },
        getBaseAxis: function () {
            var t = this.coordinateSystem;
            return t && t.getBaseAxis && t.getBaseAxis()
        },
        formatTooltip: function (t, e, i, n) {
            function r(i) {
                function r(t, i) {
                    var r = c.getDimensionInfo(i);
                    if (r && r.otherDims.tooltip !== !1) {
                        var d = r.type, f = "sub" + o.seriesIndex + "at" + h,
                            p = Ho({color: y, type: "subItem", renderMode: n, markerId: f}),
                            g = "string" == typeof p ? p : p.content,
                            v = (a ? g + No(r.displayName || "-") + ": " : "") + No("ordinal" === d ? t + "" : "time" === d ? e ? "" : Wo("yyyy/MM/dd hh:mm:ss", t) : Bo(t));
                        v && s.push(v), l && (u[f] = y, ++h)
                    }
                }

                var a = g(i, function (t, e, i) {
                    var n = c.getDimensionInfo(i);
                    return t |= n && n.tooltip !== !1 && null != n.displayName
                }, 0), s = [];
                d.length ? f(d, function (e) {
                    r(js(c, t, e), e)
                }) : f(i, r);
                var p = a ? l ? "\n" : "<br/>" : "", v = p + s.join(p || ", ");
                return {renderMode: n, content: v, style: u}
            }

            function a(t) {
                return {renderMode: n, content: No(Bo(t)), style: u}
            }

            var o = this;
            n = n || "html";
            var s = "html" === n ? "<br/>" : "\n", l = "richText" === n, u = {}, h = 0, c = this.getData(),
                d = c.mapDimension("defaultedTooltip", !0), p = d.length, v = this.getRawValue(t), m = x(v),
                y = c.getItemVisual(t, "color");
            S(y) && y.colorStops && (y = (y.colorStops[0] || {}).color), y = y || "transparent";
            var _ = p > 1 || m && !p ? r(v) : a(p ? js(c, t, d[0]) : m ? v[0] : v), w = _.content,
                b = o.seriesIndex + "at" + h, M = Ho({color: y, type: "item", renderMode: n, markerId: b});
            u[b] = y, ++h;
            var T = c.getName(t), I = this.name;
            nr(this) || (I = ""), I = I ? No(I) + (e ? ": " : s) : "";
            var C = "string" == typeof M ? M : M.content, D = e ? C + I + w : I + C + (T ? No(T) + ": " + w : w);
            return {html: D, markers: u}
        },
        isAnimationEnabled: function () {
            if (eg.node) return !1;
            var t = this.getShallow("animation");
            return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
        },
        restoreData: function () {
            this.dataTask.dirty()
        },
        getColorFromPalette: function (t, e, i) {
            var n = this.ecModel, r = H_.getColorFromPalette.call(this, t, e, i);
            return r || (r = n.getColorFromPalette(t, e, i)), r
        },
        coordDimToDataDim: function (t) {
            return this.getRawData().mapDimension(t, !0)
        },
        getProgressive: function () {
            return this.get("progressive")
        },
        getProgressiveThreshold: function () {
            return this.get("progressiveThreshold")
        },
        getAxisTooltipData: null,
        getTooltipPosition: null,
        pipeTask: null,
        preventIncremental: null,
        pipelineContext: null
    });
    c(Tx, xx), c(Tx, H_);
    var Ix = function () {
        this.group = new pv, this.uid = go("viewComponent")
    };
    Ix.prototype = {
        constructor: Ix, init: function () {
        }, render: function () {
        }, dispose: function () {
        }, filterForExposedEvent: null
    };
    var Cx = Ix.prototype;
    Cx.updateView = Cx.updateLayout = Cx.updateVisual = function () {
    }, gr(Ix), _r(Ix, {registerWhenExtend: !0});
    var Dx = function () {
        var t = sr();
        return function (e) {
            var i = t(e), n = e.pipelineContext, r = i.large, a = i.progressiveRender, o = i.large = n.large,
                s = i.progressiveRender = n.progressiveRender;
            return !!(r ^ o || a ^ s) && "reset"
        }
    }, Ax = sr(), kx = Dx();
    ul.prototype = {
        type: "chart", init: function () {
        }, render: function () {
        }, highlight: function (t, e, i, n) {
            cl(t.getData(), n, "emphasis")
        }, downplay: function (t, e, i, n) {
            cl(t.getData(), n, "normal")
        }, remove: function () {
            this.group.removeAll()
        }, dispose: function () {
        }, incrementalPrepareRender: null, incrementalRender: null, updateTransform: null, filterForExposedEvent: null
    };
    var Lx = ul.prototype;
    Lx.updateView = Lx.updateLayout = Lx.updateVisual = function (t, e, i, n) {
        this.render(t, e, i, n)
    }, gr(ul, ["dispose"]), _r(ul, {registerWhenExtend: !0}), ul.markUpdateMethod = function (t, e) {
        Ax(t).updateMethod = e
    };
    var Px = {
        incrementalPrepareRender: {
            progress: function (t, e) {
                e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
            }
        }, render: {
            forceFirstProgress: !0, progress: function (t, e) {
                e.view.render(e.model, e.ecModel, e.api, e.payload)
            }
        }
    }, Ox = "\x00__throttleOriginMethod", zx = "\x00__throttleRate", Rx = "\x00__throttleType", Bx = {
        createOnAllSeries: !0, performRawSeries: !0, reset: function (t, e) {
            var i = t.getData(), n = (t.visualColorAccessPath || "itemStyle.color").split("."), r = t.get(n),
                a = !w(r) || r instanceof qy ? null : r;
            (!r || a) && (r = t.getColorFromPalette(t.name, null, e.getSeriesCount())), i.setVisual("color", r);
            var o = (t.visualBorderColorAccessPath || "itemStyle.borderColor").split("."), s = t.get(o);
            if (i.setVisual("borderColor", s), !e.isSeriesFiltered(t)) {
                a && i.each(function (e) {
                    i.setItemVisual(e, "color", a(t.getDataParams(e)))
                });
                var l = function (t, e) {
                    var i = t.getItemModel(e), r = i.get(n, !0), a = i.get(o, !0);
                    null != r && t.setItemVisual(e, "color", r), null != a && t.setItemVisual(e, "borderColor", a)
                };
                return {dataEach: i.hasItemOption ? l : null}
            }
        }
    }, Ex = {
        legend: {selector: {all: "鍏ㄩ€�", inverse: "鍙嶉€�"}},
        toolbox: {
            brush: {
                title: {
                    rect: "鐭╁舰閫夋嫨",
                    polygon: "鍦堥€�",
                    lineX: "妯悜閫夋嫨",
                    lineY: "绾靛悜閫夋嫨",
                    keep: "淇濇寔閫夋嫨",
                    clear: "娓呴櫎閫夋嫨"
                }
            },
            dataView: {title: "鏁版嵁瑙嗗浘", lang: ["鏁版嵁瑙嗗浘", "鍏抽棴", "鍒锋柊"]},
            dataZoom: {title: {zoom: "鍖哄煙缂╂斁", back: "鍖哄煙缂╂斁杩樺師"}},
            magicType: {title: {line: "鍒囨崲涓烘姌绾垮浘", bar: "鍒囨崲涓烘煴鐘跺浘", stack: "鍒囨崲涓哄爢鍙�", tiled: "鍒囨崲涓哄钩閾�"}},
            restore: {title: "杩樺師"},
            saveAsImage: {title: "淇濆瓨涓哄浘鐗�", lang: ["鍙抽敭鍙﹀瓨涓哄浘鐗�"]}
        },
        series: {
            typeNames: {
                pie: "楗煎浘",
                bar: "鏌辩姸鍥�",
                line: "鎶樼嚎鍥�",
                scatter: "鏁ｇ偣鍥�",
                effectScatter: "娑熸吉鏁ｇ偣鍥�",
                radar: "闆疯揪鍥�",
                tree: "鏍戝浘",
                treemap: "鐭╁舰鏍戝浘",
                boxplot: "绠卞瀷鍥�",
                candlestick: "K绾垮浘",
                k: "K绾垮浘",
                heatmap: "鐑姏鍥�",
                map: "鍦板浘",
                parallel: "骞宠鍧愭爣鍥�",
                lines: "绾垮浘",
                graph: "鍏崇郴鍥�",
                sankey: "妗戝熀鍥�",
                funnel: "婕忔枟鍥�",
                gauge: "浠〃鐩樺浘",
                pictorialBar: "璞″舰鏌卞浘",
                themeRiver: "涓婚娌虫祦鍥�",
                sunburst: "鏃棩鍥�"
            }
        },
        aria: {
            general: {withTitle: "杩欐槸涓€涓叧浜庘€渰title}鈥濈殑鍥捐〃銆�", withoutTitle: "杩欐槸涓€涓浘琛紝"},
            series: {
                single: {
                    prefix: "",
                    withName: "鍥捐〃绫诲瀷鏄瘂seriesType}锛岃〃绀簕seriesName}銆�",
                    withoutName: "鍥捐〃绫诲瀷鏄瘂seriesType}銆�"
                },
                multiple: {
                    prefix: "瀹冪敱{seriesCount}涓浘琛ㄧ郴鍒楃粍鎴愩€�",
                    withName: "绗瑊seriesId}涓郴鍒楁槸涓€涓〃绀簕seriesName}鐨剓seriesType}锛�",
                    withoutName: "绗瑊seriesId}涓郴鍒楁槸涓€涓獅seriesType}锛�",
                    separator: {middle: "锛�", end: "銆�"}
                }
            },
            data: {
                allData: "鍏舵暟鎹槸鈥斺€�",
                partialData: "鍏朵腑锛屽墠{displayCnt}椤规槸鈥斺€�",
                withName: "{name}鐨勬暟鎹槸{value}",
                withoutName: "{value}",
                separator: {middle: "锛�", end: ""}
            }
        }
    }, Nx = function (t, e) {
        function i(t, e) {
            if ("string" != typeof t) return t;
            var i = t;
            return f(e, function (t, e) {
                i = i.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
            }), i
        }

        function n(t) {
            var e = o.get(t);
            if (null == e) {
                for (var i = t.split("."), n = Ex.aria, r = 0; r < i.length; ++r) n = n[i[r]];
                return n
            }
            return e
        }

        function r() {
            var t = e.getModel("title").option;
            return t && t.length && (t = t[0]), t && t.text
        }

        function a(t) {
            return Ex.series.typeNames[t] || "鑷畾涔夊浘"
        }

        var o = e.getModel("aria");
        if (o.get("show")) {
            if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));
            var s = 0;
            e.eachSeries(function () {
                ++s
            }, this);
            var l, u = o.get("data.maxCount") || 10, h = o.get("series.maxCount") || 10, c = Math.min(s, h);
            if (!(1 > s)) {
                var d = r();
                l = d ? i(n("general.withTitle"), {title: d}) : n("general.withoutTitle");
                var p = [], g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";
                l += i(n(g), {seriesCount: s}), e.eachSeries(function (t, e) {
                    if (c > e) {
                        var r, o = t.get("name"), l = "series." + (s > 1 ? "multiple" : "single") + ".";
                        r = n(o ? l + "withName" : l + "withoutName"), r = i(r, {
                            seriesId: t.seriesIndex,
                            seriesName: t.get("name"),
                            seriesType: a(t.subType)
                        });
                        var h = t.getData();
                        window.data = h, r += h.count() > u ? i(n("data.partialData"), {displayCnt: u}) : n("data.allData");
                        for (var d = [], f = 0; f < h.count(); f++) if (u > f) {
                            var g = h.getName(f), v = js(h, f);
                            d.push(i(n(g ? "data.withName" : "data.withoutName"), {name: g, value: v}))
                        }
                        r += d.join(n("data.separator.middle")) + n("data.separator.end"), p.push(r)
                    }
                }), l += p.join(n("series.multiple.separator.middle")) + n("series.multiple.separator.end"), t.setAttribute("aria-label", l)
            }
        }
    }, Fx = Math.PI, Vx = function (t, e) {
        e = e || {}, s(e, {
            text: "loading",
            color: "#c23531",
            textColor: "#000",
            maskColor: "rgba(255, 255, 255, 0.8)",
            zlevel: 0
        });
        var i = new Hy({style: {fill: e.maskColor}, zlevel: e.zlevel, z: 1e4}), n = new Uy({
            shape: {startAngle: -Fx / 2, endAngle: -Fx / 2 + .1, r: 10},
            style: {stroke: e.color, lineCap: "round", lineWidth: 5},
            zlevel: e.zlevel,
            z: 10001
        }), r = new Hy({
            style: {
                fill: "none",
                text: e.text,
                textPosition: "right",
                textDistance: 10,
                textFill: e.textColor
            }, zlevel: e.zlevel, z: 10001
        });
        n.animateShape(!0).when(1e3, {endAngle: 3 * Fx / 2}).start("circularInOut"), n.animateShape(!0).when(1e3, {startAngle: 3 * Fx / 2}).delay(300).start("circularInOut");
        var a = new pv;
        return a.add(n), a.add(r), a.add(i), a.resize = function () {
            var e = t.getWidth() / 2, a = t.getHeight() / 2;
            n.setShape({cx: e, cy: a});
            var o = n.shape.r;
            r.setShape({x: e - o, y: a - o, width: 2 * o, height: 2 * o}), i.setShape({
                x: 0,
                y: 0,
                width: t.getWidth(),
                height: t.getHeight()
            })
        }, a.resize(), a
    }, Hx = vl.prototype;
    Hx.restoreData = function (t, e) {
        t.restoreData(e), this._stageTaskMap.each(function (t) {
            var e = t.overallTask;
            e && e.dirty()
        })
    }, Hx.getPerformArgs = function (t, e) {
        if (t.__pipeline) {
            var i = this._pipelineMap.get(t.__pipeline.id), n = i.context,
                r = !e && i.progressiveEnabled && (!n || n.progressiveRender) && t.__idxInPipeline > i.blockIndex,
                a = r ? i.step : null, o = n && n.modDataCount, s = null != o ? Math.ceil(o / a) : null;
            return {step: a, modBy: s, modDataCount: o}
        }
    }, Hx.getPipeline = function (t) {
        return this._pipelineMap.get(t)
    }, Hx.updateStreamModes = function (t, e) {
        var i = this._pipelineMap.get(t.uid), n = t.getData(), r = n.count(),
            a = i.progressiveEnabled && e.incrementalPrepareRender && r >= i.threshold,
            o = t.get("large") && r >= t.get("largeThreshold"), s = "mod" === t.get("progressiveChunkMode") ? r : null;
        t.pipelineContext = i.context = {progressiveRender: a, modDataCount: s, large: o}
    }, Hx.restorePipelines = function (t) {
        var e = this, i = e._pipelineMap = N();
        t.eachSeries(function (t) {
            var n = t.getProgressive(), r = t.uid;
            i.set(r, {
                id: r,
                head: null,
                tail: null,
                threshold: t.getProgressiveThreshold(),
                progressiveEnabled: n && !(t.preventIncremental && t.preventIncremental()),
                blockIndex: -1,
                step: Math.round(n || 700),
                count: 0
            }), Dl(e, t, t.dataTask)
        })
    }, Hx.prepareStageTasks = function () {
        var t = this._stageTaskMap, e = this.ecInstance.getModel(), i = this.api;
        f(this._allHandlers, function (n) {
            var r = t.get(n.uid) || t.set(n.uid, []);
            n.reset && yl(this, n, r, e, i), n.overallReset && _l(this, n, r, e, i)
        }, this)
    }, Hx.prepareView = function (t, e, i, n) {
        var r = t.renderTask, a = r.context;
        a.model = e, a.ecModel = i, a.api = n, r.__block = !t.incrementalPrepareRender, Dl(this, e, r)
    }, Hx.performDataProcessorTasks = function (t, e) {
        ml(this, this._dataProcessorHandlers, t, e, {block: !0})
    }, Hx.performVisualTasks = function (t, e, i) {
        ml(this, this._visualHandlers, t, e, i)
    }, Hx.performSeriesTasks = function (t) {
        var e;
        t.eachSeries(function (t) {
            e |= t.dataTask.perform()
        }), this.unfinished |= e
    }, Hx.plan = function () {
        this._pipelineMap.each(function (t) {
            var e = t.tail;
            do {
                if (e.__block) {
                    t.blockIndex = e.__idxInPipeline;
                    break
                }
                e = e.getUpstream()
            } while (e)
        })
    };
    var Gx = Hx.updatePayload = function (t, e) {
        "remain" !== e && (t.context.payload = e)
    }, Wx = Il(0);
    vl.wrapStageHandler = function (t, e) {
        return w(t) && (t = {
            overallReset: t,
            seriesType: Al(t)
        }), t.uid = go("stageHandler"), e && (t.visualType = e), t
    };
    var Xx, Yx = {}, Ux = {};
    kl(Yx, J_), kl(Ux, bs), Yx.eachSeriesByType = Yx.eachRawSeriesByType = function (t) {
        Xx = t
    }, Yx.eachComponent = function (t) {
        "series" === t.mainType && t.subType && (Xx = t.subType)
    };
    var Zx = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        qx = {
            color: Zx,
            colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], Zx]
        }, jx = "#eee", Kx = function () {
            return {
                axisLine: {lineStyle: {color: jx}},
                axisTick: {lineStyle: {color: jx}},
                axisLabel: {textStyle: {color: jx}},
                splitLine: {lineStyle: {type: "dashed", color: "#aaa"}},
                splitArea: {areaStyle: {color: jx}}
            }
        },
        $x = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
        Qx = {
            color: $x,
            backgroundColor: "#333",
            tooltip: {axisPointer: {lineStyle: {color: jx}, crossStyle: {color: jx}, label: {color: "#000"}}},
            legend: {textStyle: {color: jx}},
            textStyle: {color: jx},
            title: {textStyle: {color: jx}},
            toolbox: {iconStyle: {normal: {borderColor: jx}}},
            dataZoom: {textStyle: {color: jx}},
            visualMap: {textStyle: {color: jx}},
            timeline: {
                lineStyle: {color: jx},
                itemStyle: {normal: {color: $x[1]}},
                label: {normal: {textStyle: {color: jx}}},
                controlStyle: {normal: {color: jx, borderColor: jx}}
            },
            timeAxis: Kx(),
            logAxis: Kx(),
            valueAxis: Kx(),
            categoryAxis: Kx(),
            line: {symbol: "circle"},
            graph: {color: $x},
            gauge: {title: {textStyle: {color: jx}}},
            candlestick: {
                itemStyle: {
                    normal: {
                        color: "#FD1050",
                        color0: "#0CF49B",
                        borderColor: "#FD1050",
                        borderColor0: "#0CF49B"
                    }
                }
            }
        };
    Qx.categoryAxis.splitLine.show = !1, E_.extend({
        type: "dataset",
        defaultOption: {seriesLayoutBy: q_, sourceHeader: null, dimensions: null, source: null},
        optionUpdated: function () {
            is(this)
        }
    }), Ix.extend({type: "dataset"});
    var Jx = Jr.extend({
        type: "ellipse", shape: {cx: 0, cy: 0, rx: 0, ry: 0}, buildPath: function (t, e) {
            var i = .5522848, n = e.cx, r = e.cy, a = e.rx, o = e.ry, s = a * i, l = o * i;
            t.moveTo(n - a, r), t.bezierCurveTo(n - a, r - l, n - s, r - o, n, r - o), t.bezierCurveTo(n + s, r - o, n + a, r - l, n + a, r), t.bezierCurveTo(n + a, r + l, n + s, r + o, n, r + o), t.bezierCurveTo(n - s, r + o, n - a, r + l, n - a, r), t.closePath()
        }
    }), tw = /[\s,]+/;
    Pl.prototype.parse = function (t, e) {
        e = e || {};
        var i = Ll(t);
        if (!i) throw new Error("Illegal svg");
        var n = new pv;
        this._root = n;
        var r = i.getAttribute("viewBox") || "", a = parseFloat(i.getAttribute("width") || e.width),
            o = parseFloat(i.getAttribute("height") || e.height);
        isNaN(a) && (a = null), isNaN(o) && (o = null), Bl(i, n, null, !0);
        for (var s = i.firstChild; s;) this._parseNode(s, n), s = s.nextSibling;
        var l, u;
        if (r) {
            var h = z(r).split(tw);
            h.length >= 4 && (l = {
                x: parseFloat(h[0] || 0),
                y: parseFloat(h[1] || 0),
                width: parseFloat(h[2]),
                height: parseFloat(h[3])
            })
        }
        if (l && null != a && null != o && (u = Vl(l, a, o), !e.ignoreViewBox)) {
            var c = n;
            n = new pv, n.add(c), c.scale = u.scale.slice(), c.position = u.position.slice()
        }
        return e.ignoreRootClip || null == a || null == o || n.setClipPath(new Hy({
            shape: {
                x: 0,
                y: 0,
                width: a,
                height: o
            }
        })), {root: n, width: a, height: o, viewBoxRect: l, viewBoxTransform: u}
    }, Pl.prototype._parseNode = function (t, e) {
        var i = t.nodeName.toLowerCase();
        "defs" === i ? this._isDefine = !0 : "text" === i && (this._isText = !0);
        var n;
        if (this._isDefine) {
            var r = iw[i];
            if (r) {
                var a = r.call(this, t), o = t.getAttribute("id");
                o && (this._defs[o] = a)
            }
        } else {
            var r = ew[i];
            r && (n = r.call(this, t, e), e.add(n))
        }
        for (var s = t.firstChild; s;) 1 === s.nodeType && this._parseNode(s, n), 3 === s.nodeType && this._isText && this._parseText(s, n), s = s.nextSibling;
        "defs" === i ? this._isDefine = !1 : "text" === i && (this._isText = !1)
    }, Pl.prototype._parseText = function (t, e) {
        if (1 === t.nodeType) {
            var i = t.getAttribute("dx") || 0, n = t.getAttribute("dy") || 0;
            this._textX += parseFloat(i), this._textY += parseFloat(n)
        }
        var r = new Ay({
            style: {text: t.textContent, transformText: !0},
            position: [this._textX || 0, this._textY || 0]
        });
        zl(e, r), Bl(t, r, this._defs);
        var a = r.style.fontSize;
        a && 9 > a && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= a / 9, r.scale[1] *= a / 9);
        var o = r.getBoundingRect();
        return this._textX += o.width, e.add(r), r
    };
    var ew = {
            g: function (t, e) {
                var i = new pv;
                return zl(e, i), Bl(t, i, this._defs), i
            }, rect: function (t, e) {
                var i = new Hy;
                return zl(e, i), Bl(t, i, this._defs), i.setShape({
                    x: parseFloat(t.getAttribute("x") || 0),
                    y: parseFloat(t.getAttribute("y") || 0),
                    width: parseFloat(t.getAttribute("width") || 0),
                    height: parseFloat(t.getAttribute("height") || 0)
                }), i
            }, circle: function (t, e) {
                var i = new ky;
                return zl(e, i), Bl(t, i, this._defs), i.setShape({
                    cx: parseFloat(t.getAttribute("cx") || 0),
                    cy: parseFloat(t.getAttribute("cy") || 0),
                    r: parseFloat(t.getAttribute("r") || 0)
                }), i
            }, line: function (t, e) {
                var i = new Wy;
                return zl(e, i), Bl(t, i, this._defs), i.setShape({
                    x1: parseFloat(t.getAttribute("x1") || 0),
                    y1: parseFloat(t.getAttribute("y1") || 0),
                    x2: parseFloat(t.getAttribute("x2") || 0),
                    y2: parseFloat(t.getAttribute("y2") || 0)
                }), i
            }, ellipse: function (t, e) {
                var i = new Jx;
                return zl(e, i), Bl(t, i, this._defs), i.setShape({
                    cx: parseFloat(t.getAttribute("cx") || 0),
                    cy: parseFloat(t.getAttribute("cy") || 0),
                    rx: parseFloat(t.getAttribute("rx") || 0),
                    ry: parseFloat(t.getAttribute("ry") || 0)
                }), i
            }, polygon: function (t, e) {
                var i = t.getAttribute("points");
                i && (i = Rl(i));
                var n = new Ey({shape: {points: i || []}});
                return zl(e, n), Bl(t, n, this._defs), n
            }, polyline: function (t, e) {
                var i = new Jr;
                zl(e, i), Bl(t, i, this._defs);
                var n = t.getAttribute("points");
                n && (n = Rl(n));
                var r = new Ny({shape: {points: n || []}});
                return r
            }, image: function (t, e) {
                var i = new Tn;
                return zl(e, i), Bl(t, i, this._defs), i.setStyle({
                    image: t.getAttribute("xlink:href"),
                    x: t.getAttribute("x"),
                    y: t.getAttribute("y"),
                    width: t.getAttribute("width"),
                    height: t.getAttribute("height")
                }), i
            }, text: function (t, e) {
                var i = t.getAttribute("x") || 0, n = t.getAttribute("y") || 0, r = t.getAttribute("dx") || 0,
                    a = t.getAttribute("dy") || 0;
                this._textX = parseFloat(i) + parseFloat(r), this._textY = parseFloat(n) + parseFloat(a);
                var o = new pv;
                return zl(e, o), Bl(t, o, this._defs), o
            }, tspan: function (t, e) {
                var i = t.getAttribute("x"), n = t.getAttribute("y");
                null != i && (this._textX = parseFloat(i)), null != n && (this._textY = parseFloat(n));
                var r = t.getAttribute("dx") || 0, a = t.getAttribute("dy") || 0, o = new pv;
                return zl(e, o), Bl(t, o, this._defs), this._textX += r, this._textY += a, o
            }, path: function (t, e) {
                var i = t.getAttribute("d") || "", n = na(i);
                return zl(e, n), Bl(t, n, this._defs), n
            }
        }, iw = {
            lineargradient: function (t) {
                var e = parseInt(t.getAttribute("x1") || 0, 10), i = parseInt(t.getAttribute("y1") || 0, 10),
                    n = parseInt(t.getAttribute("x2") || 10, 10), r = parseInt(t.getAttribute("y2") || 0, 10),
                    a = new jy(e, i, n, r);
                return Ol(t, a), a
            }, radialgradient: function () {
            }
        }, nw = {
            fill: "fill",
            stroke: "stroke",
            "stroke-width": "lineWidth",
            opacity: "opacity",
            "fill-opacity": "fillOpacity",
            "stroke-opacity": "strokeOpacity",
            "stroke-dasharray": "lineDash",
            "stroke-dashoffset": "lineDashOffset",
            "stroke-linecap": "lineCap",
            "stroke-linejoin": "lineJoin",
            "stroke-miterlimit": "miterLimit",
            "font-family": "fontFamily",
            "font-size": "fontSize",
            "font-style": "fontStyle",
            "font-weight": "fontWeight",
            "text-align": "textAlign",
            "alignment-baseline": "textBaseline"
        }, rw = /url\(\s*#(.*?)\)/, aw = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
        ow = /([^\s:;]+)\s*:\s*([^:;]+)/g, sw = N(), lw = {
            registerMap: function (t, e, i) {
                var n;
                return x(e) ? n = e : e.svg ? n = [{
                    type: "svg",
                    source: e.svg,
                    specialAreas: e.specialAreas
                }] : (e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson), n = [{
                    type: "geoJSON",
                    source: e,
                    specialAreas: i
                }]), f(n, function (t) {
                    var e = t.type;
                    "geoJson" === e && (e = t.type = "geoJSON");
                    var i = uw[e];
                    i(t)
                }), sw.set(t, n)
            }, retrieveMap: function (t) {
                return sw.get(t)
            }
        }, uw = {
            geoJSON: function (t) {
                var e = t.source;
                t.geoJSON = b(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e
            }, svg: function (t) {
                t.svgXML = Ll(t.source)
            }
        }, hw = O, cw = f, dw = w, fw = S, pw = E_.parseClassType, gw = "4.6.0", vw = {zrender: "4.2.0"}, mw = 1, yw = 1e3,
        _w = 800, xw = 900, ww = 5e3, bw = 1e3, Sw = 1100, Mw = 2e3, Tw = 3e3, Iw = 3500, Cw = 4e3, Dw = 5e3, Aw = {
            PROCESSOR: {FILTER: yw, SERIES_FILTER: _w, STATISTIC: ww},
            VISUAL: {
                LAYOUT: bw,
                PROGRESSIVE_LAYOUT: Sw,
                GLOBAL: Mw,
                CHART: Tw,
                POST_CHART_LAYOUT: Iw,
                COMPONENT: Cw,
                BRUSH: Dw
            }
        }, kw = "__flagInMainProcess", Lw = "__optionUpdated", Pw = /^[a-zA-Z0-9_]+$/;
    Wl.prototype.on = Gl("on", !0), Wl.prototype.off = Gl("off", !0), Wl.prototype.one = Gl("one", !0), c(Wl, Sg);
    var Ow = Xl.prototype;
    Ow._onframe = function () {
        if (!this._disposed) {
            var t = this._scheduler;
            if (this[Lw]) {
                var e = this[Lw].silent;
                this[kw] = !0, Ul(this), zw.update.call(this), this[kw] = !1, this[Lw] = !1, Kl.call(this, e), $l.call(this, e)
            } else if (t.unfinished) {
                var i = mw, n = this._model, r = this._api;
                t.unfinished = !1;
                do {
                    var a = +new Date;
                    t.performSeriesTasks(n), t.performDataProcessorTasks(n), ql(this, n), t.performVisualTasks(n), nu(this, this._model, r, "remain"), i -= +new Date - a
                } while (i > 0 && t.unfinished);
                t.unfinished || this._zr.flush()
            }
        }
    }, Ow.getDom = function () {
        return this._dom
    }, Ow.getZr = function () {
        return this._zr
    }, Ow.setOption = function (t, e, i) {
        if (!this._disposed) {
            var n;
            if (fw(e) && (i = e.lazyUpdate, n = e.silent, e = e.notMerge), this[kw] = !0, !this._model || e) {
                var r = new Ms(this._api), a = this._theme, o = this._model = new J_;
                o.scheduler = this._scheduler, o.init(null, null, a, r)
            }
            this._model.setOption(t, Fw), i ? (this[Lw] = {silent: n}, this[kw] = !1) : (Ul(this), zw.update.call(this), this._zr.flush(), this[Lw] = !1, this[kw] = !1, Kl.call(this, n), $l.call(this, n))
        }
    }, Ow.setTheme = function () {
        console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
    }, Ow.getModel = function () {
        return this._model
    }, Ow.getOption = function () {
        return this._model && this._model.getOption()
    }, Ow.getWidth = function () {
        return this._zr.getWidth()
    }, Ow.getHeight = function () {
        return this._zr.getHeight()
    }, Ow.getDevicePixelRatio = function () {
        return this._zr.painter.dpr || window.devicePixelRatio || 1
    }, Ow.getRenderedCanvas = function (t) {
        if (eg.canvasSupported) {
            t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
            var e = this._zr;
            return e.painter.getRenderedCanvas(t)
        }
    }, Ow.getSvgDataUrl = function () {
        if (eg.svgSupported) {
            var t = this._zr, e = t.storage.getDisplayList();
            return f(e, function (t) {
                t.stopAnimation(!0)
            }), t.painter.pathToDataUrl()
        }
    }, Ow.getDataURL = function (t) {
        if (!this._disposed) {
            t = t || {};
            var e = t.excludeComponents, i = this._model, n = [], r = this;
            cw(e, function (t) {
                i.eachComponent({mainType: t}, function (t) {
                    var e = r._componentsMap[t.__viewId];
                    e.group.ignore || (n.push(e), e.group.ignore = !0)
                })
            });
            var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
            return cw(n, function (t) {
                t.group.ignore = !1
            }), a
        }
    }, Ow.getConnectedDataURL = function (t) {
        if (!this._disposed && eg.canvasSupported) {
            var e = this.group, i = Math.min, r = Math.max, a = 1 / 0;
            if (Yw[e]) {
                var o = a, s = a, l = -a, u = -a, h = [], c = t && t.pixelRatio || 1;
                f(Xw, function (a) {
                    if (a.group === e) {
                        var c = a.getRenderedCanvas(n(t)), d = a.getDom().getBoundingClientRect();
                        o = i(d.left, o), s = i(d.top, s), l = r(d.right, l), u = r(d.bottom, u), h.push({
                            dom: c,
                            left: d.left,
                            top: d.top
                        })
                    }
                }), o *= c, s *= c, l *= c, u *= c;
                var d = l - o, p = u - s, g = dg();
                g.width = d, g.height = p;
                var v = Un(g);
                return t.connectedBackgroundColor && v.add(new Hy({
                    shape: {x: 0, y: 0, width: d, height: p},
                    style: {fill: t.connectedBackgroundColor}
                })), cw(h, function (t) {
                    var e = new Tn({style: {x: t.left * c - o, y: t.top * c - s, image: t.dom}});
                    v.add(e)
                }), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"))
            }
            return this.getDataURL(t)
        }
    }, Ow.convertToPixel = _(Yl, "convertToPixel"), Ow.convertFromPixel = _(Yl, "convertFromPixel"), Ow.containPixel = function (t, e) {
        if (!this._disposed) {
            var i, n = this._model;
            return t = lr(n, t), f(t, function (t, n) {
                n.indexOf("Models") >= 0 && f(t, function (t) {
                    var r = t.coordinateSystem;
                    if (r && r.containPoint) i |= !!r.containPoint(e); else if ("seriesModels" === n) {
                        var a = this._chartsMap[t.__viewId];
                        a && a.containPoint && (i |= a.containPoint(e, t))
                    }
                }, this)
            }, this), !!i
        }
    }, Ow.getVisual = function (t, e) {
        var i = this._model;
        t = lr(i, t, {defaultMainType: "series"});
        var n = t.seriesModel, r = n.getData(),
            a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
        return null != a ? r.getItemVisual(a, e) : r.getVisual(e)
    }, Ow.getViewOfComponentModel = function (t) {
        return this._componentsMap[t.__viewId]
    }, Ow.getViewOfSeriesModel = function (t) {
        return this._chartsMap[t.__viewId]
    };
    var zw = {
        prepareAndUpdate: function (t) {
            Ul(this), zw.update.call(this, t)
        }, update: function (t) {
            var e = this._model, i = this._api, n = this._zr, r = this._coordSysMgr, a = this._scheduler;
            if (e) {
                a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, i), a.performDataProcessorTasks(e, t), ql(this, e), r.update(e, i), tu(e), a.performVisualTasks(e, t), eu(this, e, i, t);
                var o = e.get("backgroundColor") || "transparent";
                if (eg.canvasSupported) n.setBackgroundColor(o); else {
                    var s = $e(o);
                    o = oi(s, "rgb"), 0 === s[3] && (o = "transparent")
                }
                ru(e, i)
            }
        }, updateTransform: function (t) {
            var e = this._model, i = this, n = this._api;
            if (e) {
                var r = [];
                e.eachComponent(function (a, o) {
                    var s = i.getViewOfComponentModel(o);
                    if (s && s.__alive) if (s.updateTransform) {
                        var l = s.updateTransform(o, e, n, t);
                        l && l.update && r.push(s)
                    } else r.push(s)
                });
                var a = N();
                e.eachSeries(function (r) {
                    var o = i._chartsMap[r.__viewId];
                    if (o.updateTransform) {
                        var s = o.updateTransform(r, e, n, t);
                        s && s.update && a.set(r.uid, 1)
                    } else a.set(r.uid, 1)
                }), tu(e), this._scheduler.performVisualTasks(e, t, {
                    setDirty: !0,
                    dirtyMap: a
                }), nu(i, e, n, t, a), ru(e, this._api)
            }
        }, updateView: function (t) {
            var e = this._model;
            e && (ul.markUpdateMethod(t, "updateView"), tu(e), this._scheduler.performVisualTasks(e, t, {setDirty: !0}), eu(this, this._model, this._api, t), ru(e, this._api))
        }, updateVisual: function (t) {
            zw.update.call(this, t)
        }, updateLayout: function (t) {
            zw.update.call(this, t)
        }
    };
    Ow.resize = function (t) {
        if (!this._disposed) {
            this._zr.resize(t);
            var e = this._model;
            if (this._loadingFX && this._loadingFX.resize(), e) {
                var i = e.resetOption("media"), n = t && t.silent;
                this[kw] = !0, i && Ul(this), zw.update.call(this), this[kw] = !1, Kl.call(this, n), $l.call(this, n)
            }
        }
    }, Ow.showLoading = function (t, e) {
        if (!this._disposed && (fw(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), Ww[t])) {
            var i = Ww[t](this._api, e), n = this._zr;
            this._loadingFX = i, n.add(i)
        }
    }, Ow.hideLoading = function () {
        this._disposed || (this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null)
    }, Ow.makeActionFromEvent = function (t) {
        var e = o({}, t);
        return e.type = Ew[t.type], e
    }, Ow.dispatchAction = function (t, e) {
        if (!this._disposed && (fw(e) || (e = {silent: !!e}), Bw[t.type] && this._model)) {
            if (this[kw]) return void this._pendingActions.push(t);
            jl.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && eg.browser.weChat && this._throttledZrFlush(), Kl.call(this, e.silent), $l.call(this, e.silent)
        }
    }, Ow.appendData = function (t) {
        if (!this._disposed) {
            var e = t.seriesIndex, i = this.getModel(), n = i.getSeriesByIndex(e);
            n.appendData(t), this._scheduler.unfinished = !0
        }
    }, Ow.on = Gl("on", !1), Ow.off = Gl("off", !1), Ow.one = Gl("one", !1);
    var Rw = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
    Ow._initEvents = function () {
        cw(Rw, function (t) {
            var e = function (e) {
                var i, n = this.getModel(), r = e.target, a = "globalout" === t;
                if (a) i = {}; else if (r && null != r.dataIndex) {
                    var s = r.dataModel || n.getSeriesByIndex(r.seriesIndex);
                    i = s && s.getDataParams(r.dataIndex, r.dataType, r) || {}
                } else r && r.eventData && (i = o({}, r.eventData));
                if (i) {
                    var l = i.componentType, u = i.componentIndex;
                    ("markLine" === l || "markPoint" === l || "markArea" === l) && (l = "series", u = i.seriesIndex);
                    var h = l && null != u && n.getComponent(l, u),
                        c = h && this["series" === h.mainType ? "_chartsMap" : "_componentsMap"][h.__viewId];
                    i.event = e, i.type = t, this._ecEventProcessor.eventInfo = {
                        targetEl: r,
                        packedEvent: i,
                        model: h,
                        view: c
                    }, this.trigger(t, i)
                }
            };
            e.zrEventfulCallAtLast = !0, this._zr.on(t, e, this)
        }, this), cw(Ew, function (t, e) {
            this._messageCenter.on(e, function (t) {
                this.trigger(e, t)
            }, this)
        }, this)
    }, Ow.isDisposed = function () {
        return this._disposed
    }, Ow.clear = function () {
        this._disposed || this.setOption({series: []}, !0)
    }, Ow.dispose = function () {
        if (!this._disposed) {
            this._disposed = !0, hr(this.getDom(), qw, "");
            var t = this._api, e = this._model;
            cw(this._componentsViews, function (i) {
                i.dispose(e, t)
            }), cw(this._chartsViews, function (i) {
                i.dispose(e, t)
            }), this._zr.dispose(), delete Xw[this.id]
        }
    }, c(Xl, Sg), uu.prototype = {
        constructor: uu, normalizeQuery: function (t) {
            var e = {}, i = {}, n = {};
            if (b(t)) {
                var r = pw(t);
                e.mainType = r.main || null, e.subType = r.sub || null
            } else {
                var a = ["Index", "Name", "Id"], o = {name: 1, dataIndex: 1, dataType: 1};
                f(t, function (t, r) {
                    for (var s = !1, l = 0; l < a.length; l++) {
                        var u = a[l], h = r.lastIndexOf(u);
                        if (h > 0 && h === r.length - u.length) {
                            var c = r.slice(0, h);
                            "data" !== c && (e.mainType = c, e[u.toLowerCase()] = t, s = !0)
                        }
                    }
                    o.hasOwnProperty(r) && (i[r] = t, s = !0), s || (n[r] = t)
                })
            }
            return {cptQuery: e, dataQuery: i, otherQuery: n}
        }, filter: function (t, e) {
            function i(t, e, i, n) {
                return null == t[i] || e[n || i] === t[i]
            }

            var n = this.eventInfo;
            if (!n) return !0;
            var r = n.targetEl, a = n.packedEvent, o = n.model, s = n.view;
            if (!o || !s) return !0;
            var l = e.cptQuery, u = e.dataQuery;
            return i(l, o, "mainType") && i(l, o, "subType") && i(l, o, "index", "componentIndex") && i(l, o, "name") && i(l, o, "id") && i(u, a, "name") && i(u, a, "dataIndex") && i(u, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a))
        }, afterTrigger: function () {
            this.eventInfo = null
        }
    };
    var Bw = {}, Ew = {}, Nw = [], Fw = [], Vw = [], Hw = [], Gw = {}, Ww = {}, Xw = {}, Yw = {}, Uw = new Date - 0,
        Zw = new Date - 0, qw = "_echarts_instance_", jw = fu;
    Tu(Mw, Bx), yu(fx), _u(xw, px), Cu("default", Vx), wu({
        type: "highlight",
        event: "highlight",
        update: "highlight"
    }, V), wu({type: "downplay", event: "downplay", update: "downplay"}, V), mu("light", qx), mu("dark", Qx);
    var Kw = {};
    Bu.prototype = {
        constructor: Bu, add: function (t) {
            return this._add = t, this
        }, update: function (t) {
            return this._update = t, this
        }, remove: function (t) {
            return this._remove = t, this
        }, execute: function () {
            var t, e = this._old, i = this._new, n = {}, r = {}, a = [], o = [];
            for (Eu(e, n, a, "_oldKeyGetter", this), Eu(i, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
                var s = a[t], l = r[s];
                if (null != l) {
                    var u = l.length;
                    u ? (1 === u && (r[s] = null), l = l.shift()) : r[s] = null, this._update && this._update(l, t)
                } else this._remove && this._remove(t)
            }
            for (var t = 0; t < o.length; t++) {
                var s = o[t];
                if (r.hasOwnProperty(s)) {
                    var l = r[s];
                    if (null == l) continue;
                    if (l.length) for (var h = 0, u = l.length; u > h; h++) this._add && this._add(l[h]); else this._add && this._add(l)
                }
            }
        }
    };
    var $w = N(["tooltip", "label", "itemName", "itemId", "seriesName"]), Qw = S, Jw = "undefined", tb = -1,
        eb = "e\x00\x00", ib = {
            "float": typeof Float64Array === Jw ? Array : Float64Array,
            "int": typeof Int32Array === Jw ? Array : Int32Array,
            ordinal: Array,
            number: Array,
            time: Array
        }, nb = typeof Uint32Array === Jw ? Array : Uint32Array, rb = typeof Int32Array === Jw ? Array : Int32Array,
        ab = typeof Uint16Array === Jw ? Array : Uint16Array,
        ob = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
        sb = ["_extent", "_approximateExtent", "_rawExtent"], lb = function (t, e) {
            t = t || ["x", "y"];
            for (var i = {}, n = [], r = {}, a = 0; a < t.length; a++) {
                var o = t[a];
                b(o) ? o = new Gu({name: o}) : o instanceof Gu || (o = new Gu(o));
                var s = o.name;
                o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, n.push(s), i[s] = o, o.index = a, o.createInvertedIndices && (r[s] = [])
            }
            this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = Nu(this), this._invertedIndicesMap = r, this._calculationInfo = {}, this.userOutput = this._dimensionsSummary.userOutput
        }, ub = lb.prototype;
    ub.type = "list", ub.hasItemOption = !0, ub.getDimension = function (t) {
        return ("number" == typeof t || !isNaN(t) && !this._dimensionInfos.hasOwnProperty(t)) && (t = this.dimensions[t]), t
    }, ub.getDimensionInfo = function (t) {
        return this._dimensionInfos[this.getDimension(t)]
    }, ub.getDimensionsOnCoord = function () {
        return this._dimensionsSummary.dataDimsOnCoord.slice()
    }, ub.mapDimension = function (t, e) {
        var i = this._dimensionsSummary;
        if (null == e) return i.encodeFirstDimNotExtra[t];
        var n = i.encode[t];
        return e === !0 ? (n || []).slice() : n && n[e]
    }, ub.initData = function (t, e, i) {
        var n = es.isInstance(t) || d(t);
        n && (t = new Gs(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, i || (this.hasItemOption = !1), this.defaultDimValueGetter = yx[this._rawData.getSource().sourceFormat], this._dimValueGetter = i = i || this.defaultDimValueGetter, this._dimValueGetterArrayRows = yx.arrayRows, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1)
    }, ub.getProvider = function () {
        return this._rawData
    }, ub.appendData = function (t) {
        var e = this._rawData, i = this.count();
        e.appendData(t);
        var n = e.count();
        e.persistent || (n += i), this._initDataFromProvider(i, n)
    }, ub.appendValues = function (t, e) {
        for (var i = this._chunkSize, n = this._storage, r = this.dimensions, a = r.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e ? e.length : 0), u = this._chunkCount, h = 0; a > h; h++) {
            var c = r[h];
            o[c] || (o[c] = eh()), n[c] || (n[c] = []), Uu(n, this._dimensionInfos[c], i, u, l), this._chunkCount = n[c].length
        }
        for (var d = new Array(a), f = s; l > f; f++) {
            for (var p = f - s, g = Math.floor(f / i), v = f % i, m = 0; a > m; m++) {
                var c = r[m], y = this._dimValueGetterArrayRows(t[p] || d, c, p, m);
                n[c][g][v] = y;
                var _ = o[c];
                y < _[0] && (_[0] = y), y > _[1] && (_[1] = y)
            }
            e && (this._nameList[f] = e[p])
        }
        this._rawCount = this._count = l, this._extent = {}, Zu(this)
    }, ub._initDataFromProvider = function (t, e) {
        if (!(t >= e)) {
            for (var i, n = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, u = this._nameList, h = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = 0; s > p; p++) {
                var g = o[p];
                c[g] || (c[g] = eh());
                var v = l[g];
                0 === v.otherDims.itemName && (i = this._nameDimIdx = p), 0 === v.otherDims.itemId && (this._idDimIdx = p), a[g] || (a[g] = []), Uu(a, v, n, f, e), this._chunkCount = a[g].length
            }
            for (var m = new Array(s), y = t; e > y; y++) {
                m = r.getItem(y, m);
                for (var _ = Math.floor(y / n), x = y % n, w = 0; s > w; w++) {
                    var g = o[w], b = a[g][_], S = this._dimValueGetter(m, g, y, w);
                    b[x] = S;
                    var M = c[g];
                    S < M[0] && (M[0] = S), S > M[1] && (M[1] = S)
                }
                if (!r.pure) {
                    var T = u[y];
                    if (m && null == T) if (null != m.name) u[y] = T = m.name; else if (null != i) {
                        var I = o[i], C = a[I][_];
                        if (C) {
                            T = C[x];
                            var D = l[I].ordinalMeta;
                            D && D.categories.length && (T = D.categories[T])
                        }
                    }
                    var A = null == m ? null : m.id;
                    null == A && null != T && (d[T] = d[T] || 0, A = T, d[T] > 0 && (A += "__ec__" + d[T]), d[T]++), null != A && (h[y] = A)
                }
            }
            !r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, Zu(this)
        }
    }, ub.count = function () {
        return this._count
    }, ub.getIndices = function () {
        var t, e = this._indices;
        if (e) {
            var i = e.constructor, n = this._count;
            if (i === Array) {
                t = new i(n);
                for (var r = 0; n > r; r++) t[r] = e[r]
            } else t = new i(e.buffer, 0, n)
        } else for (var i = Wu(this), t = new i(this.count()), r = 0; r < t.length; r++) t[r] = r;
        return t
    }, ub.get = function (t, e) {
        if (!(e >= 0 && e < this._count)) return 0 / 0;
        var i = this._storage;
        if (!i[t]) return 0 / 0;
        e = this.getRawIndex(e);
        var n = Math.floor(e / this._chunkSize), r = e % this._chunkSize, a = i[t][n], o = a[r];
        return o
    }, ub.getByRawIndex = function (t, e) {
        if (!(e >= 0 && e < this._rawCount)) return 0 / 0;
        var i = this._storage[t];
        if (!i) return 0 / 0;
        var n = Math.floor(e / this._chunkSize), r = e % this._chunkSize, a = i[n];
        return a[r]
    }, ub._getFast = function (t, e) {
        var i = Math.floor(e / this._chunkSize), n = e % this._chunkSize, r = this._storage[t][i];
        return r[n]
    }, ub.getValues = function (t, e) {
        var i = [];
        x(t) || (e = t, t = this.dimensions);
        for (var n = 0, r = t.length; r > n; n++) i.push(this.get(t[n], e));
        return i
    }, ub.hasValue = function (t) {
        for (var e = this._dimensionsSummary.dataDimsOnCoord, i = 0, n = e.length; n > i; i++) if (isNaN(this.get(e[i], t))) return !1;
        return !0
    }, ub.getDataExtent = function (t) {
        t = this.getDimension(t);
        var e = this._storage[t], i = eh();
        if (!e) return i;
        var n, r = this.count(), a = !this._indices;
        if (a) return this._rawExtent[t].slice();
        if (n = this._extent[t]) return n.slice();
        n = i;
        for (var o = n[0], s = n[1], l = 0; r > l; l++) {
            var u = this._getFast(t, this.getRawIndex(l));
            o > u && (o = u), u > s && (s = u)
        }
        return n = [o, s], this._extent[t] = n, n
    }, ub.getApproximateExtent = function (t) {
        return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)
    }, ub.setApproximateExtent = function (t, e) {
        e = this.getDimension(e), this._approximateExtent[e] = t.slice()
    }, ub.getCalculationInfo = function (t) {
        return this._calculationInfo[t]
    }, ub.setCalculationInfo = function (t, e) {
        Qw(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e
    }, ub.getSum = function (t) {
        var e = this._storage[t], i = 0;
        if (e) for (var n = 0, r = this.count(); r > n; n++) {
            var a = this.get(t, n);
            isNaN(a) || (i += a)
        }
        return i
    }, ub.getMedian = function (t) {
        var e = [];
        this.each(t, function (t) {
            isNaN(t) || e.push(t)
        });
        var i = [].concat(e).sort(function (t, e) {
            return t - e
        }), n = this.count();
        return 0 === n ? 0 : n % 2 === 1 ? i[(n - 1) / 2] : (i[n / 2] + i[n / 2 - 1]) / 2
    }, ub.rawIndexOf = function (t, e) {
        var i = t && this._invertedIndicesMap[t], n = i[e];
        return null == n || isNaN(n) ? tb : n
    }, ub.indexOfName = function (t) {
        for (var e = 0, i = this.count(); i > e; e++) if (this.getName(e) === t) return e;
        return -1
    }, ub.indexOfRawIndex = function (t) {
        if (t >= this._rawCount || 0 > t) return -1;
        if (!this._indices) return t;
        var e = this._indices, i = e[t];
        if (null != i && i < this._count && i === t) return t;
        for (var n = 0, r = this._count - 1; r >= n;) {
            var a = (n + r) / 2 | 0;
            if (e[a] < t) n = a + 1; else {
                if (!(e[a] > t)) return a;
                r = a - 1
            }
        }
        return -1
    }, ub.indicesOfNearest = function (t, e, i) {
        var n = this._storage, r = n[t], a = [];
        if (!r) return a;
        null == i && (i = 1 / 0);
        for (var o = 1 / 0, s = -1, l = 0, u = 0, h = this.count(); h > u; u++) {
            var c = e - this.get(t, u), d = Math.abs(c);
            i >= d && ((o > d || d === o && c >= 0 && 0 > s) && (o = d, s = c, l = 0), c === s && (a[l++] = u))
        }
        return a.length = l, a
    }, ub.getRawIndex = ju, ub.getRawDataItem = function (t) {
        if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
        for (var e = [], i = 0; i < this.dimensions.length; i++) {
            var n = this.dimensions[i];
            e.push(this.get(n, t))
        }
        return e
    }, ub.getName = function (t) {
        var e = this.getRawIndex(t);
        return this._nameList[e] || qu(this, this._nameDimIdx, e) || ""
    }, ub.getId = function (t) {
        return $u(this, this.getRawIndex(t))
    }, ub.each = function (t, e, i, n) {
        if (this._count) {
            "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this, t = p(Qu(t), this.getDimension, this);
            for (var r = t.length, a = 0; a < this.count(); a++) switch (r) {
                case 0:
                    e.call(i, a);
                    break;
                case 1:
                    e.call(i, this.get(t[0], a), a);
                    break;
                case 2:
                    e.call(i, this.get(t[0], a), this.get(t[1], a), a);
                    break;
                default:
                    for (var o = 0, s = []; r > o; o++) s[o] = this.get(t[o], a);
                    s[o] = a, e.apply(i, s)
            }
        }
    }, ub.filterSelf = function (t, e, i, n) {
        if (this._count) {
            "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this, t = p(Qu(t), this.getDimension, this);
            for (var r = this.count(), a = Wu(this), o = new a(r), s = [], l = t.length, u = 0, h = t[0], c = 0; r > c; c++) {
                var d, f = this.getRawIndex(c);
                if (0 === l) d = e.call(i, c); else if (1 === l) {
                    var g = this._getFast(h, f);
                    d = e.call(i, g, c)
                } else {
                    for (var v = 0; l > v; v++) s[v] = this._getFast(h, f);
                    s[v] = c, d = e.apply(i, s)
                }
                d && (o[u++] = f)
            }
            return r > u && (this._indices = o), this._count = u, this._extent = {}, this.getRawIndex = this._indices ? Ku : ju, this
        }
    }, ub.selectRange = function (t) {
        if (this._count) {
            var e = [];
            for (var i in t) t.hasOwnProperty(i) && e.push(i);
            var n = e.length;
            if (n) {
                var r = this.count(), a = Wu(this), o = new a(r), s = 0, l = e[0], u = t[l][0], h = t[l][1], c = !1;
                if (!this._indices) {
                    var d = 0;
                    if (1 === n) {
                        for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++) for (var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                            var y = g[m];
                            (y >= u && h >= y || isNaN(y)) && (o[s++] = d), d++
                        }
                        c = !0
                    } else if (2 === n) {
                        for (var f = this._storage[l], _ = this._storage[e[1]], x = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++) for (var g = f[p], b = _[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                            var y = g[m], S = b[m];
                            (y >= u && h >= y || isNaN(y)) && (S >= x && w >= S || isNaN(S)) && (o[s++] = d), d++
                        }
                        c = !0
                    }
                }
                if (!c) if (1 === n) for (var m = 0; r > m; m++) {
                    var M = this.getRawIndex(m), y = this._getFast(l, M);
                    (y >= u && h >= y || isNaN(y)) && (o[s++] = M)
                } else for (var m = 0; r > m; m++) {
                    for (var T = !0, M = this.getRawIndex(m), p = 0; n > p; p++) {
                        var I = e[p], y = this._getFast(i, M);
                        (y < t[I][0] || y > t[I][1]) && (T = !1)
                    }
                    T && (o[s++] = this.getRawIndex(m))
                }
                return r > s && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? Ku : ju, this
            }
        }
    }, ub.mapArray = function (t, e, i, n) {
        "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this;
        var r = [];
        return this.each(t, function () {
            r.push(e && e.apply(this, arguments))
        }, i), r
    }, ub.map = function (t, e, i, n) {
        i = i || n || this, t = p(Qu(t), this.getDimension, this);
        var r = Ju(this, t);
        r._indices = this._indices, r.getRawIndex = r._indices ? Ku : ju;
        for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, u = this.count(), h = [], c = r._rawExtent, d = 0; u > d; d++) {
            for (var f = 0; l > f; f++) h[f] = this.get(t[f], d);
            h[l] = d;
            var g = e && e.apply(i, h);
            if (null != g) {
                "object" != typeof g && (o[0] = g, g = o);
                for (var v = this.getRawIndex(d), m = Math.floor(v / s), y = v % s, _ = 0; _ < g.length; _++) {
                    var x = t[_], w = g[_], b = c[x], S = a[x];
                    S && (S[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w)
                }
            }
        }
        return r
    }, ub.downSample = function (t, e, i, n) {
        for (var r = Ju(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], u = this.count(), h = this._chunkSize, c = r._rawExtent[t], d = new (Wu(this))(u), f = 0, p = 0; u > p; p += s) {
            s > u - p && (s = u - p, o.length = s);
            for (var g = 0; s > g; g++) {
                var v = this.getRawIndex(p + g), m = Math.floor(v / h), y = v % h;
                o[g] = l[m][y]
            }
            var _ = i(o), x = this.getRawIndex(Math.min(p + n(o, _) || 0, u - 1)), w = Math.floor(x / h), b = x % h;
            l[w][b] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), d[f++] = x
        }
        return r._count = f, r._indices = d, r.getRawIndex = Ku, r
    }, ub.getItemModel = function (t) {
        var e = this.hostModel;
        return new co(this.getRawDataItem(t), e, e && e.ecModel)
    }, ub.diff = function (t) {
        var e = this;
        return new Bu(t ? t.getIndices() : [], this.getIndices(), function (e) {
            return $u(t, e)
        }, function (t) {
            return $u(e, t)
        })
    }, ub.getVisual = function (t) {
        var e = this._visual;
        return e && e[t]
    }, ub.setVisual = function (t, e) {
        if (Qw(t)) for (var i in t) t.hasOwnProperty(i) && this.setVisual(i, t[i]); else this._visual = this._visual || {}, this._visual[t] = e
    }, ub.setLayout = function (t, e) {
        if (Qw(t)) for (var i in t) t.hasOwnProperty(i) && this.setLayout(i, t[i]); else this._layout[t] = e
    }, ub.getLayout = function (t) {
        return this._layout[t]
    }, ub.getItemLayout = function (t) {
        return this._itemLayouts[t]
    }, ub.setItemLayout = function (t, e, i) {
        this._itemLayouts[t] = i ? o(this._itemLayouts[t] || {}, e) : e
    }, ub.clearItemLayouts = function () {
        this._itemLayouts.length = 0
    }, ub.getItemVisual = function (t, e, i) {
        var n = this._itemVisuals[t], r = n && n[e];
        return null != r || i ? r : this.getVisual(e)
    }, ub.setItemVisual = function (t, e, i) {
        var n = this._itemVisuals[t] || {}, r = this.hasItemVisual;
        if (this._itemVisuals[t] = n, Qw(e)) for (var a in e) e.hasOwnProperty(a) && (n[a] = e[a], r[a] = !0); else n[e] = i, r[e] = !0
    }, ub.clearAllVisual = function () {
        this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {}
    };
    var hb = function (t) {
        t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
    };
    ub.setItemGraphicEl = function (t, e) {
        var i = this.hostModel;
        e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(hb, e)), this._graphicEls[t] = e
    }, ub.getItemGraphicEl = function (t) {
        return this._graphicEls[t]
    }, ub.eachItemGraphicEl = function (t, e) {
        f(this._graphicEls, function (i, n) {
            i && t && t.call(e, i, n)
        })
    }, ub.cloneShallow = function (t) {
        if (!t) {
            var e = p(this.dimensions, this.getDimensionInfo, this);
            t = new lb(e, this.hostModel)
        }
        if (t._storage = this._storage, Yu(t, this), this._indices) {
            var i = this._indices.constructor;
            t._indices = new i(this._indices)
        } else t._indices = null;
        return t.getRawIndex = t._indices ? Ku : ju, t
    }, ub.wrapMethod = function (t, e) {
        var i = this[t];
        "function" == typeof i && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
            var t = i.apply(this, arguments);
            return e.apply(this, [t].concat(L(arguments)))
        })
    }, ub.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], ub.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
    var cb = function (t, e) {
        return e = e || {}, ih(e.coordDimensions || [], t, {
            dimsDef: e.dimensionsDefine || t.dimensionsDefine,
            encodeDef: e.encodeDefine || t.encodeDefine,
            dimCount: e.dimensionsCount,
            encodeDefaulter: e.encodeDefaulter,
            generateCoord: e.generateCoord,
            generateCoordCount: e.generateCoordCount
        })
    }, db = {
        cartesian2d: function (t, e, i, n) {
            var r = t.getReferringComponents("xAxis")[0], a = t.getReferringComponents("yAxis")[0];
            e.coordSysDims = ["x", "y"], i.set("x", r), i.set("y", a), sh(r) && (n.set("x", r), e.firstCategoryDimIndex = 0), sh(a) && (n.set("y", a), null == e.firstCategoryDimIndex & (e.firstCategoryDimIndex = 1))
        }, singleAxis: function (t, e, i, n) {
            var r = t.getReferringComponents("singleAxis")[0];
            e.coordSysDims = ["single"], i.set("single", r), sh(r) && (n.set("single", r), e.firstCategoryDimIndex = 0)
        }, polar: function (t, e, i, n) {
            var r = t.getReferringComponents("polar")[0], a = r.findAxisModel("radiusAxis"),
                o = r.findAxisModel("angleAxis");
            e.coordSysDims = ["radius", "angle"], i.set("radius", a), i.set("angle", o), sh(a) && (n.set("radius", a), e.firstCategoryDimIndex = 0), sh(o) && (n.set("angle", o), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1))
        }, geo: function (t, e) {
            e.coordSysDims = ["lng", "lat"]
        }, parallel: function (t, e, i, n) {
            var r = t.ecModel, a = r.getComponent("parallel", t.get("parallelIndex")),
                o = e.coordSysDims = a.dimensions.slice();
            f(a.parallelAxisIndex, function (t, a) {
                var s = r.getComponent("parallelAxis", t), l = o[a];
                i.set(l, s), sh(s) && null == e.firstCategoryDimIndex && (n.set(l, s), e.firstCategoryDimIndex = a)
            })
        }
    };
    ph.prototype.parse = function (t) {
        return t
    }, ph.prototype.getSetting = function (t) {
        return this._setting[t]
    }, ph.prototype.contain = function (t) {
        var e = this._extent;
        return t >= e[0] && t <= e[1]
    }, ph.prototype.normalize = function (t) {
        var e = this._extent;
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
    }, ph.prototype.scale = function (t) {
        var e = this._extent;
        return t * (e[1] - e[0]) + e[0]
    }, ph.prototype.unionExtent = function (t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
    }, ph.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getApproximateExtent(e))
    }, ph.prototype.getExtent = function () {
        return this._extent.slice()
    }, ph.prototype.setExtent = function (t, e) {
        var i = this._extent;
        isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
    }, ph.prototype.isBlank = function () {
        return this._isBlank
    }, ph.prototype.setBlank = function (t) {
        this._isBlank = t
    }, ph.prototype.getLabel = null, gr(ph), _r(ph, {registerWhenExtend: !0}), gh.createByAxisModel = function (t) {
        var e = t.option, i = e.data, n = i && p(i, mh);
        return new gh({categories: n, needCollect: !n, deduplication: e.dedplication !== !1})
    };
    var fb = gh.prototype;
    fb.getOrdinal = function (t) {
        return vh(this).get(t)
    }, fb.parseAndCollect = function (t) {
        var e, i = this._needCollect;
        if ("string" != typeof t && !i) return t;
        if (i && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
        var n = vh(this);
        return e = n.get(t), null == e && (i ? (e = this.categories.length, this.categories[e] = t, n.set(t, e)) : e = 0 / 0), e
    };
    var pb = ph.prototype, gb = ph.extend({
        type: "ordinal", init: function (t, e) {
            (!t || x(t)) && (t = new gh({categories: t})), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1]
        }, parse: function (t) {
            return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
        }, contain: function (t) {
            return t = this.parse(t), pb.contain.call(this, t) && null != this._ordinalMeta.categories[t]
        }, normalize: function (t) {
            return pb.normalize.call(this, this.parse(t))
        }, scale: function (t) {
            return Math.round(pb.scale.call(this, t))
        }, getTicks: function () {
            for (var t = [], e = this._extent, i = e[0]; i <= e[1];) t.push(i), i++;
            return t
        }, getLabel: function (t) {
            return this.isBlank() ? void 0 : this._ordinalMeta.categories[t]
        }, count: function () {
            return this._extent[1] - this._extent[0] + 1
        }, unionExtentFromData: function (t, e) {
            this.unionExtent(t.getApproximateExtent(e))
        }, getOrdinalMeta: function () {
            return this._ordinalMeta
        }, niceTicks: V, niceExtent: V
    });
    gb.create = function () {
        return new gb
    };
    var vb = wo, mb = wo, yb = ph.extend({
        type: "interval", _interval: 0, _intervalPrecision: 2, setExtent: function (t, e) {
            var i = this._extent;
            isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e))
        }, unionExtent: function (t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), yb.prototype.setExtent.call(this, e[0], e[1])
        }, getInterval: function () {
            return this._interval
        }, setInterval: function (t) {
            this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = _h(t)
        }, getTicks: function (t) {
            var e = this._interval, i = this._extent, n = this._niceExtent, r = this._intervalPrecision, a = [];
            if (!e) return a;
            var o = 1e4;
            i[0] < n[0] && a.push(t ? mb(n[0] - e) : i[0]);
            for (var s = n[0]; s <= n[1] && (a.push(s), s = mb(s + e, r), s !== a[a.length - 1]);) if (a.length > o) return [];
            var l = a.length ? a[a.length - 1] : n[1];
            return i[1] > l && a.push(t ? l + e : i[1]), a
        }, getMinorTicks: function (t) {
            for (var e = this.getTicks(!0), i = [], n = this.getExtent(), r = 1; r < e.length; r++) {
                for (var a = e[r], o = e[r - 1], s = 0, l = [], u = a - o, h = u / t; t - 1 > s;) {
                    var c = wo(o + (s + 1) * h);
                    c > n[0] && c < n[1] && l.push(c), s++
                }
                i.push(l)
            }
            return i
        }, getLabel: function (t, e) {
            if (null == t) return "";
            var i = e && e.precision;
            return null == i ? i = Mo(t) || 0 : "auto" === i && (i = this._intervalPrecision), t = mb(t, i, !0), Bo(t)
        }, niceTicks: function (t, e, i) {
            t = t || 5;
            var n = this._extent, r = n[1] - n[0];
            if (isFinite(r)) {
                0 > r && (r = -r, n.reverse());
                var a = yh(n, t, e, i);
                this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent
            }
        }, niceExtent: function (t) {
            var e = this._extent;
            if (e[0] === e[1]) if (0 !== e[0]) {
                var i = e[0];
                t.fixMax ? e[0] -= i / 2 : (e[1] += i / 2, e[0] -= i / 2)
            } else e[1] = 1;
            var n = e[1] - e[0];
            isFinite(n) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = mb(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = mb(Math.ceil(e[1] / r) * r))
        }
    });
    yb.create = function () {
        return new yb
    };
    var _b = "__ec_stack_", xb = .5, wb = "undefined" != typeof Float32Array ? Float32Array : Array, bb = {
            seriesType: "bar", plan: Dx(), reset: function (t) {
                function e(t, e) {
                    for (var i, c = t.count, d = new wb(2 * c), f = new wb(c), p = [], g = [], v = 0, m = 0; null != (i = t.next());) g[u] = e.get(o, i), g[1 - u] = e.get(s, i), p = n.dataToPoint(g, null, p), d[v++] = p[0], d[v++] = p[1], f[m++] = i;
                    e.setLayout({
                        largePoints: d,
                        largeDataIndices: f,
                        barWidth: h,
                        valueAxisStart: Ph(r, a, !1),
                        valueAxisHorizontal: l
                    })
                }

                if (kh(t) && Lh(t)) {
                    var i = t.getData(), n = t.coordinateSystem, r = n.getBaseAxis(), a = n.getOtherAxis(r),
                        o = i.mapDimension(a.dim), s = i.mapDimension(r.dim), l = a.isHorizontal(), u = l ? 0 : 1,
                        h = Dh(Ih([t]), r, t).width;
                    return h > xb || (h = xb), {progress: e}
                }
            }
        }, Sb = yb.prototype, Mb = Math.ceil, Tb = Math.floor, Ib = 1e3, Cb = 60 * Ib, Db = 60 * Cb, Ab = 24 * Db,
        kb = function (t, e, i, n) {
            for (; n > i;) {
                var r = i + n >>> 1;
                t[r][1] < e ? i = r + 1 : n = r
            }
            return i
        }, Lb = yb.extend({
            type: "time", getLabel: function (t) {
                var e = this._stepLvl, i = new Date(t);
                return Wo(e[0], i, this.getSetting("useUTC"))
            }, niceExtent: function (t) {
                var e = this._extent;
                if (e[0] === e[1] && (e[0] -= Ab, e[1] += Ab), e[1] === -1 / 0 && 1 / 0 === e[0]) {
                    var i = new Date;
                    e[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), e[0] = e[1] - Ab
                }
                this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
                var n = this._interval;
                t.fixMin || (e[0] = wo(Tb(e[0] / n) * n)), t.fixMax || (e[1] = wo(Mb(e[1] / n) * n))
            }, niceTicks: function (t, e, i) {
                t = t || 10;
                var n = this._extent, r = n[1] - n[0], a = r / t;
                null != e && e > a && (a = e), null != i && a > i && (a = i);
                var o = Pb.length, s = kb(Pb, a, 0, o), l = Pb[Math.min(s, o - 1)], u = l[1];
                if ("year" === l[0]) {
                    var h = r / u, c = Po(h / t, !0);
                    u *= c
                }
                var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+n[0] || +n[1]).getTimezoneOffset() * 1e3,
                    f = [Math.round(Mb((n[0] - d) / u) * u + d), Math.round(Tb((n[1] - d) / u) * u + d)];
                wh(f, n), this._stepLvl = l, this._interval = u, this._niceExtent = f
            }, parse: function (t) {
                return +Ao(t)
            }
        });
    f(["contain", "normalize"], function (t) {
        Lb.prototype[t] = function (e) {
            return Sb[t].call(this, this.parse(e))
        }
    });
    var Pb = [["hh:mm:ss", Ib], ["hh:mm:ss", 5 * Ib], ["hh:mm:ss", 10 * Ib], ["hh:mm:ss", 15 * Ib], ["hh:mm:ss", 30 * Ib], ["hh:mm\nMM-dd", Cb], ["hh:mm\nMM-dd", 5 * Cb], ["hh:mm\nMM-dd", 10 * Cb], ["hh:mm\nMM-dd", 15 * Cb], ["hh:mm\nMM-dd", 30 * Cb], ["hh:mm\nMM-dd", Db], ["hh:mm\nMM-dd", 2 * Db], ["hh:mm\nMM-dd", 6 * Db], ["hh:mm\nMM-dd", 12 * Db], ["MM-dd\nyyyy", Ab], ["MM-dd\nyyyy", 2 * Ab], ["MM-dd\nyyyy", 3 * Ab], ["MM-dd\nyyyy", 4 * Ab], ["MM-dd\nyyyy", 5 * Ab], ["MM-dd\nyyyy", 6 * Ab], ["week", 7 * Ab], ["MM-dd\nyyyy", 10 * Ab], ["week", 14 * Ab], ["week", 21 * Ab], ["month", 31 * Ab], ["week", 42 * Ab], ["month", 62 * Ab], ["week", 70 * Ab], ["quarter", 95 * Ab], ["month", 31 * Ab * 4], ["month", 31 * Ab * 5], ["half-year", 380 * Ab / 2], ["month", 31 * Ab * 8], ["month", 31 * Ab * 10], ["year", 380 * Ab]];
    Lb.create = function (t) {
        return new Lb({useUTC: t.ecModel.get("useUTC")})
    };
    var Ob = ph.prototype, zb = yb.prototype, Rb = Mo, Bb = wo, Eb = Math.floor, Nb = Math.ceil, Fb = Math.pow,
        Vb = Math.log, Hb = ph.extend({
            type: "log", base: 10, $constructor: function () {
                ph.apply(this, arguments), this._originalScale = new yb
            }, getTicks: function (t) {
                var e = this._originalScale, i = this._extent, n = e.getExtent();
                return p(zb.getTicks.call(this, t), function (t) {
                    var r = wo(Fb(this.base, t));
                    return r = t === i[0] && e.__fixMin ? Oh(r, n[0]) : r, r = t === i[1] && e.__fixMax ? Oh(r, n[1]) : r
                }, this)
            }, getMinorTicks: zb.getMinorTicks, getLabel: zb.getLabel, scale: function (t) {
                return t = Ob.scale.call(this, t), Fb(this.base, t)
            }, setExtent: function (t, e) {
                var i = this.base;
                t = Vb(t) / Vb(i), e = Vb(e) / Vb(i), zb.setExtent.call(this, t, e)
            }, getExtent: function () {
                var t = this.base, e = Ob.getExtent.call(this);
                e[0] = Fb(t, e[0]), e[1] = Fb(t, e[1]);
                var i = this._originalScale, n = i.getExtent();
                return i.__fixMin && (e[0] = Oh(e[0], n[0])), i.__fixMax && (e[1] = Oh(e[1], n[1])), e
            }, unionExtent: function (t) {
                this._originalScale.unionExtent(t);
                var e = this.base;
                t[0] = Vb(t[0]) / Vb(e), t[1] = Vb(t[1]) / Vb(e), Ob.unionExtent.call(this, t)
            }, unionExtentFromData: function (t, e) {
                this.unionExtent(t.getApproximateExtent(e))
            }, niceTicks: function (t) {
                t = t || 10;
                var e = this._extent, i = e[1] - e[0];
                if (!(1 / 0 === i || 0 >= i)) {
                    var n = ko(i), r = t / i * n;
                    for (.5 >= r && (n *= 10); !isNaN(n) && Math.abs(n) < 1 && Math.abs(n) > 0;) n *= 10;
                    var a = [wo(Nb(e[0] / n) * n), wo(Eb(e[1] / n) * n)];
                    this._interval = n, this._niceExtent = a
                }
            }, niceExtent: function (t) {
                zb.niceExtent.call(this, t);
                var e = this._originalScale;
                e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
            }
        });
    f(["contain", "normalize"], function (t) {
        Hb.prototype[t] = function (e) {
            return e = Vb(e) / Vb(this.base), Ob[t].call(this, e)
        }
    }), Hb.create = function () {
        return new Hb
    };
    var Gb = {
            getMin: function (t) {
                var e = this.option, i = t || null == e.rangeStart ? e.min : e.rangeStart;
                return this.axis && null != i && "dataMin" !== i && "function" != typeof i && !C(i) && (i = this.axis.scale.parse(i)), i
            }, getMax: function (t) {
                var e = this.option, i = t || null == e.rangeEnd ? e.max : e.rangeEnd;
                return this.axis && null != i && "dataMax" !== i && "function" != typeof i && !C(i) && (i = this.axis.scale.parse(i)), i
            }, getNeedCrossZero: function () {
                var t = this.option;
                return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale
            }, getCoordSysModel: V, setRange: function (t, e) {
                this.option.rangeStart = t, this.option.rangeEnd = e
            }, resetRange: function () {
                this.option.rangeStart = this.option.rangeEnd = null
            }
        }, Wb = fa({
            type: "triangle", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = e.width / 2, a = e.height / 2;
                t.moveTo(i, n - a), t.lineTo(i + r, n + a), t.lineTo(i - r, n + a), t.closePath()
            }
        }), Xb = fa({
            type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = e.width / 2, a = e.height / 2;
                t.moveTo(i, n - a), t.lineTo(i + r, n), t.lineTo(i, n + a), t.lineTo(i - r, n), t.closePath()
            }
        }), Yb = fa({
            type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.x, n = e.y, r = e.width / 5 * 3, a = Math.max(r, e.height), o = r / 2, s = o * o / (a - o),
                    l = n - a + o + s, u = Math.asin(s / o), h = Math.cos(u) * o, c = Math.sin(u), d = Math.cos(u),
                    f = .6 * o, p = .7 * o;
                t.moveTo(i - h, l + s), t.arc(i, l, o, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(i + h - c * f, l + s + d * f, i, n - p, i, n), t.bezierCurveTo(i, n - p, i - h + c * f, l + s + d * f, i - h, l + s), t.closePath()
            }
        }), Ub = fa({
            type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.height, n = e.width, r = e.x, a = e.y, o = n / 3 * 2;
                t.moveTo(r, a), t.lineTo(r + o, a + i), t.lineTo(r, a + i / 4 * 3), t.lineTo(r - o, a + i), t.lineTo(r, a), t.closePath()
            }
        }), Zb = {line: Wy, rect: Hy, roundRect: Hy, square: Hy, circle: ky, diamond: Xb, pin: Yb, arrow: Ub, triangle: Wb},
        qb = {
            line: function (t, e, i, n, r) {
                r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2
            }, rect: function (t, e, i, n, r) {
                r.x = t, r.y = e, r.width = i, r.height = n
            }, roundRect: function (t, e, i, n, r) {
                r.x = t, r.y = e, r.width = i, r.height = n, r.r = Math.min(i, n) / 4
            }, square: function (t, e, i, n, r) {
                var a = Math.min(i, n);
                r.x = t, r.y = e, r.width = a, r.height = a
            }, circle: function (t, e, i, n, r) {
                r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2
            }, diamond: function (t, e, i, n, r) {
                r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
            }, pin: function (t, e, i, n, r) {
                r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
            }, arrow: function (t, e, i, n, r) {
                r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
            }, triangle: function (t, e, i, n, r) {
                r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
            }
        }, jb = {};
    f(Zb, function (t, e) {
        jb[e] = new t
    });
    var Kb = fa({
        type: "symbol",
        shape: {symbolType: "", x: 0, y: 0, width: 0, height: 0},
        calculateTextPosition: function (t, e, i) {
            var n = Zi(t, e, i), r = this.shape;
            return r && "pin" === r.symbolType && "inside" === e.textPosition && (n.y = i.y + .4 * i.height), n
        },
        buildPath: function (t, e, i) {
            var n = e.symbolType;
            if ("none" !== n) {
                var r = jb[n];
                r || (n = "rect", r = jb[n]), qb[n](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, i)
            }
        }
    }), $b = {isDimensionStacked: uh, enableDataStack: lh, getStackedDimension: hh}, Qb = (Object.freeze || Object)({
        createList: Zh,
        getLayoutRect: qo,
        dataStack: $b,
        createScale: qh,
        mixinAxisModelCommonMethods: jh,
        completeDimensions: ih,
        createDimensions: cb,
        createSymbol: Uh
    }), Jb = 1e-8;
    Qh.prototype = {
        constructor: Qh, properties: null, getBoundingRect: function () {
            var t = this._rect;
            if (t) return t;
            for (var e = Number.MAX_VALUE, i = [e, e], n = [-e, -e], r = [], a = [], o = this.geometries, s = 0; s < o.length; s++) if ("polygon" === o[s].type) {
                var l = o[s].exterior;
                zr(l, r, a), oe(i, i, r), se(n, n, a)
            }
            return 0 === s && (i[0] = i[1] = n[0] = n[1] = 0), this._rect = new Si(i[0], i[1], n[0] - i[0], n[1] - i[1])
        }, contain: function (t) {
            var e = this.getBoundingRect(), i = this.geometries;
            if (!e.contain(t[0], t[1])) return !1;
            t:for (var n = 0, r = i.length; r > n; n++) if ("polygon" === i[n].type) {
                var a = i[n].exterior, o = i[n].interiors;
                if ($h(a, t[0], t[1])) {
                    for (var s = 0; s < (o ? o.length : 0); s++) if ($h(o[s])) continue t;
                    return !0
                }
            }
            return !1
        }, transformTo: function (t, e, i, n) {
            var r = this.getBoundingRect(), a = r.width / r.height;
            i ? n || (n = i / a) : i = a * n;
            for (var o = new Si(t, e, i, n), s = r.calculateTransform(o), l = this.geometries, u = 0; u < l.length; u++) if ("polygon" === l[u].type) {
                for (var h = l[u].exterior, c = l[u].interiors, d = 0; d < h.length; d++) ae(h[d], h[d], s);
                for (var f = 0; f < (c ? c.length : 0); f++) for (var d = 0; d < c[f].length; d++) ae(c[f][d], c[f][d], s)
            }
            r = this._rect, r.copy(o), this.center = [r.x + r.width / 2, r.y + r.height / 2]
        }, cloneShallow: function (t) {
            null == t && (t = this.name);
            var e = new Qh(t, this.geometries, this.center);
            return e._rect = this._rect, e.transformTo = null, e
        }
    };
    var tS = function (t) {
        return Jh(t), p(v(t.features, function (t) {
            return t.geometry && t.properties && t.geometry.coordinates.length > 0
        }), function (t) {
            var e = t.properties, i = t.geometry, n = i.coordinates, r = [];
            "Polygon" === i.type && r.push({
                type: "polygon",
                exterior: n[0],
                interiors: n.slice(1)
            }), "MultiPolygon" === i.type && f(n, function (t) {
                t[0] && r.push({type: "polygon", exterior: t[0], interiors: t.slice(1)})
            });
            var a = new Qh(e.name, r, e.cp);
            return a.properties = e, a
        })
    }, eS = sr(), iS = [0, 1], nS = function (t, e, i) {
        this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1
    };
    nS.prototype = {
        constructor: nS, contain: function (t) {
            var e = this._extent, i = Math.min(e[0], e[1]), n = Math.max(e[0], e[1]);
            return t >= i && n >= t
        }, containData: function (t) {
            return this.scale.contain(t)
        }, getExtent: function () {
            return this._extent.slice()
        }, getPixelPrecision: function (t) {
            return To(t || this.scale.getExtent(), this._extent)
        }, setExtent: function (t, e) {
            var i = this._extent;
            i[0] = t, i[1] = e
        }, dataToCoord: function (t, e) {
            var i = this._extent, n = this.scale;
            return t = n.normalize(t), this.onBand && "ordinal" === n.type && (i = i.slice(), gc(i, n.count())), _o(t, iS, i, e)
        }, coordToData: function (t, e) {
            var i = this._extent, n = this.scale;
            this.onBand && "ordinal" === n.type && (i = i.slice(), gc(i, n.count()));
            var r = _o(t, i, iS, e);
            return this.scale.scale(r)
        }, pointToData: function () {
        }, getTicksCoords: function (t) {
            t = t || {};
            var e = t.tickModel || this.getTickModel(), i = ic(this, e), n = i.ticks, r = p(n, function (t) {
                return {coord: this.dataToCoord(t), tickValue: t}
            }, this), a = e.get("alignWithLabel");
            return vc(this, r, a, t.clamp), r
        }, getMinorTicksCoords: function () {
            if ("ordinal" === this.scale.type) return [];
            var t = this.model.getModel("minorTick"), e = t.get("splitNumber");
            e > 0 && 100 > e || (e = 5);
            var i = this.scale.getMinorTicks(e), n = p(i, function (t) {
                return p(t, function (t) {
                    return {coord: this.dataToCoord(t), tickValue: t}
                }, this)
            }, this);
            return n
        }, getViewLabels: function () {
            return ec(this).labels
        }, getLabelModel: function () {
            return this.model.getModel("axisLabel")
        }, getTickModel: function () {
            return this.model.getModel("axisTick")
        }, getBandWidth: function () {
            var t = this._extent, e = this.scale.getExtent(), i = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === i && (i = 1);
            var n = Math.abs(t[1] - t[0]);
            return Math.abs(n) / i
        }, isHorizontal: null, getRotate: null, calculateCategoryInterval: function () {
            return cc(this)
        }
    };
    var rS = tS, aS = {};
    f(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {
        aS[t] = gg[t]
    });
    var oS = {};
    f(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "registerShape", "getShapeClass", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"], function (t) {
        oS[t] = d_[t]
    });
    var sS = function (t) {
        this._axes = {}, this._dimList = [], this.name = t || ""
    };
    sS.prototype = {
        constructor: sS, type: "cartesian", getAxis: function (t) {
            return this._axes[t]
        }, getAxes: function () {
            return p(this._dimList, mc, this)
        }, getAxesByScale: function (t) {
            return t = t.toLowerCase(), v(this.getAxes(), function (e) {
                return e.scale.type === t
            })
        }, addAxis: function (t) {
            var e = t.dim;
            this._axes[e] = t, this._dimList.push(e)
        }, dataToCoord: function (t) {
            return this._dataCoordConvert(t, "dataToCoord")
        }, coordToData: function (t) {
            return this._dataCoordConvert(t, "coordToData")
        }, _dataCoordConvert: function (t, e) {
            for (var i = this._dimList, n = t instanceof Array ? [] : {}, r = 0; r < i.length; r++) {
                var a = i[r], o = this._axes[a];
                n[a] = o[e](t[a])
            }
            return n
        }
    }, yc.prototype = {
        constructor: yc, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function () {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
        }, containPoint: function (t) {
            var e = this.getAxis("x"), i = this.getAxis("y");
            return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]))
        }, containData: function (t) {
            return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
        }, dataToPoint: function (t, e, i) {
            var n = this.getAxis("x"), r = this.getAxis("y");
            return i = i || [], i[0] = n.toGlobalCoord(n.dataToCoord(t[0])), i[1] = r.toGlobalCoord(r.dataToCoord(t[1])), i
        }, clampData: function (t, e) {
            var i = this.getAxis("x").scale, n = this.getAxis("y").scale, r = i.getExtent(), a = n.getExtent(),
                o = i.parse(t[0]), s = n.parse(t[1]);
            return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e
        }, pointToData: function (t, e) {
            var i = this.getAxis("x"), n = this.getAxis("y");
            return e = e || [], e[0] = i.coordToData(i.toLocalCoord(t[0])), e[1] = n.coordToData(n.toLocalCoord(t[1])), e
        }, getOtherAxis: function (t) {
            return this.getAxis("x" === t.dim ? "y" : "x")
        }, getArea: function () {
            var t = this.getAxis("x").getGlobalExtent(), e = this.getAxis("y").getGlobalExtent(),
                i = Math.min(t[0], t[1]), n = Math.min(e[0], e[1]), r = Math.max(t[0], t[1]) - i,
                a = Math.max(e[0], e[1]) - n, o = new Si(i, n, r, a);
            return o
        }
    }, h(yc, sS);
    var lS = function (t, e, i, n, r) {
        nS.call(this, t, e, i), this.type = n || "value", this.position = r || "bottom"
    };
    lS.prototype = {
        constructor: lS, index: 0, getAxesOnZeroOf: null, model: null, isHorizontal: function () {
            var t = this.position;
            return "top" === t || "bottom" === t
        }, getGlobalExtent: function (t) {
            var e = this.getExtent();
            return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e
        }, getOtherAxis: function () {
            this.grid.getOtherAxis()
        }, pointToData: function (t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
        }, toLocalCoord: null, toGlobalCoord: null
    }, h(lS, nS);
    var uS = {
        show: !0,
        zlevel: 0,
        z: 0,
        inverse: !1,
        name: "",
        nameLocation: "end",
        nameRotate: null,
        nameTruncate: {maxWidth: null, ellipsis: "...", placeholder: "."},
        nameTextStyle: {},
        nameGap: 15,
        silent: !1,
        triggerEvent: !1,
        tooltip: {show: !1},
        axisPointer: {},
        axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: {color: "#333", width: 1, type: "solid"},
            symbol: ["none", "none"],
            symbolSize: [10, 15]
        },
        axisTick: {show: !0, inside: !1, length: 5, lineStyle: {width: 1}},
        axisLabel: {show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12},
        splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}},
        splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}}
    }, hS = {};
    hS.categoryAxis = r({
        boundaryGap: !0,
        deduplication: null,
        splitLine: {show: !1},
        axisTick: {alignWithLabel: !1, interval: "auto"},
        axisLabel: {interval: "auto"}
    }, uS), hS.valueAxis = r({
        boundaryGap: [0, 0],
        splitNumber: 5,
        minorTick: {show: !1, splitNumber: 5, length: 3, lineStyle: {}},
        minorSplitLine: {show: !1, lineStyle: {color: "#eee", width: 1}}
    }, uS), hS.timeAxis = s({scale: !0, min: "dataMin", max: "dataMax"}, hS.valueAxis), hS.logAxis = s({
        scale: !0,
        logBase: 10
    }, hS.valueAxis);
    var cS = ["value", "category", "time", "log"], dS = function (t, e, i, n) {
        f(cS, function (o) {
            e.extend({
                type: t + "Axis." + o, mergeDefaultAndTheme: function (e, n) {
                    var a = this.layoutMode, s = a ? $o(e) : {}, l = n.getTheme();
                    r(e, l.get(o + "Axis")), r(e, this.getDefaultOption()), e.type = i(t, e), a && Ko(e, s, a)
                }, optionUpdated: function () {
                    var t = this.option;
                    "category" === t.type && (this.__ordinalMeta = gh.createByAxisModel(this))
                }, getCategories: function (t) {
                    var e = this.option;
                    return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0
                }, getOrdinalMeta: function () {
                    return this.__ordinalMeta
                }, defaultOption: a([{}, hS[o + "Axis"], n], !0)
            })
        }), E_.registerSubTypeDefaulter(t + "Axis", _(i, t))
    }, fS = E_.extend({
        type: "cartesian2dAxis", axis: null, init: function () {
            fS.superApply(this, "init", arguments), this.resetRange()
        }, mergeOption: function () {
            fS.superApply(this, "mergeOption", arguments), this.resetRange()
        }, restoreData: function () {
            fS.superApply(this, "restoreData", arguments), this.resetRange()
        }, getCoordSysModel: function () {
            return this.ecModel.queryComponents({
                mainType: "grid",
                index: this.option.gridIndex,
                id: this.option.gridId
            })[0]
        }
    });
    r(fS.prototype, Gb);
    var pS = {offset: 0};
    dS("x", fS, _c, pS), dS("y", fS, _c, pS), E_.extend({
        type: "grid",
        dependencies: ["xAxis", "yAxis"],
        layoutMode: "box",
        coordinateSystem: null,
        defaultOption: {
            show: !1,
            zlevel: 0,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 60,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        }
    });
    var gS = wc.prototype;
    gS.type = "grid", gS.axisPointerEnabled = !0, gS.getRect = function () {
        return this._rect
    }, gS.update = function (t, e) {
        var i = this._axesMap;
        this._updateScale(t, this.model), f(i.x, function (t) {
            Bh(t.scale, t.model)
        }), f(i.y, function (t) {
            Bh(t.scale, t.model)
        });
        var n = {};
        f(i.x, function (t) {
            bc(i, "y", t, n)
        }), f(i.y, function (t) {
            bc(i, "x", t, n)
        }), this.resize(this.model, e)
    }, gS.resize = function (t, e, i) {
        function n() {
            f(a, function (t) {
                var e = t.isHorizontal(), i = e ? [0, r.width] : [0, r.height], n = t.inverse ? 1 : 0;
                t.setExtent(i[n], i[1 - n]), Mc(t, e ? r.x : r.y)
            })
        }

        var r = qo(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()});
        this._rect = r;
        var a = this._axesList;
        n(), !i && t.get("containLabel") && (f(a, function (t) {
            if (!t.model.get("axisLabel.inside")) {
                var e = Hh(t);
                if (e) {
                    var i = t.isHorizontal() ? "height" : "width", n = t.model.get("axisLabel.margin");
                    r[i] -= e[i] + n, "top" === t.position ? r.y += e.height + n : "left" === t.position && (r.x += e.width + n)
                }
            }
        }), n())
    }, gS.getAxis = function (t, e) {
        var i = this._axesMap[t];
        if (null != i) {
            if (null == e) for (var n in i) if (i.hasOwnProperty(n)) return i[n];
            return i[e]
        }
    }, gS.getAxes = function () {
        return this._axesList.slice()
    }, gS.getCartesian = function (t, e) {
        if (null != t && null != e) {
            var i = "x" + t + "y" + e;
            return this._coordsMap[i]
        }
        S(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
        for (var n = 0, r = this._coordsList; n < r.length; n++) if (r[n].getAxis("x").index === t || r[n].getAxis("y").index === e) return r[n]
    }, gS.getCartesians = function () {
        return this._coordsList.slice()
    }, gS.convertToPixel = function (t, e, i) {
        var n = this._findConvertTarget(t, e);
        return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis.dataToCoord(i)) : null
    }, gS.convertFromPixel = function (t, e, i) {
        var n = this._findConvertTarget(t, e);
        return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null
    }, gS._findConvertTarget = function (t, e) {
        var i, n, r = e.seriesModel, a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
            o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0], s = e.gridModel, l = this._coordsList;
        if (r) i = r.coordinateSystem, u(l, i) < 0 && (i = null); else if (a && o) i = this.getCartesian(a.componentIndex, o.componentIndex); else if (a) n = this.getAxis("x", a.componentIndex); else if (o) n = this.getAxis("y", o.componentIndex); else if (s) {
            var h = s.coordinateSystem;
            h === this && (i = this._coordsList[0])
        }
        return {cartesian: i, axis: n}
    }, gS.containPoint = function (t) {
        var e = this._coordsList[0];
        return e ? e.containPoint(t) : void 0
    }, gS._initCartesian = function (t, e) {
        function i(i) {
            return function (o, s) {
                if (xc(o, t, e)) {
                    var l = o.get("position");
                    "x" === i ? "top" !== l && "bottom" !== l && (l = n.bottom ? "top" : "bottom") : "left" !== l && "right" !== l && (l = n.left ? "right" : "left"), n[l] = !0;
                    var u = new lS(i, Eh(o), [0, 0], o.get("type"), l), h = "category" === u.type;
                    u.onBand = h && o.get("boundaryGap"), u.inverse = o.get("inverse"), o.axis = u, u.model = o, u.grid = this, u.index = s, this._axesList.push(u), r[i][s] = u, a[i]++
                }
            }
        }

        var n = {left: !1, right: !1, top: !1, bottom: !1}, r = {x: {}, y: {}}, a = {x: 0, y: 0};
        return e.eachComponent("xAxis", i("x"), this), e.eachComponent("yAxis", i("y"), this), a.x && a.y ? (this._axesMap = r, void f(r.x, function (e, i) {
            f(r.y, function (n, r) {
                var a = "x" + i + "y" + r, o = new yc(a);
                o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(n)
            }, this)
        }, this)) : (this._axesMap = {}, void (this._axesList = []))
    }, gS._updateScale = function (t, e) {
        function i(t, e) {
            f(t.mapDimension(e.dim, !0), function (i) {
                e.scale.unionExtentFromData(t, hh(t, i))
            })
        }

        f(this._axesList, function (t) {
            t.scale.setExtent(1 / 0, -1 / 0)
        }), t.eachSeries(function (n) {
            if (Ic(n)) {
                var r = Tc(n, t), a = r[0], o = r[1];
                if (!xc(a, e, t) || !xc(o, e, t)) return;
                var s = this.getCartesian(a.componentIndex, o.componentIndex), l = n.getData(), u = s.getAxis("x"),
                    h = s.getAxis("y");
                "list" === l.type && (i(l, u, n), i(l, h, n))
            }
        }, this)
    }, gS.getTooltipAxes = function (t) {
        var e = [], i = [];
        return f(this.getCartesians(), function (n) {
            var r = null != t && "auto" !== t ? n.getAxis(t) : n.getBaseAxis(), a = n.getOtherAxis(r);
            u(e, r) < 0 && e.push(r), u(i, a) < 0 && i.push(a)
        }), {baseAxes: e, otherAxes: i}
    };
    var vS = ["xAxis", "yAxis"];
    wc.create = function (t, e) {
        var i = [];
        return t.eachComponent("grid", function (n, r) {
            var a = new wc(n, t, e);
            a.name = "grid_" + r, a.resize(n, e, !0), n.coordinateSystem = a, i.push(a)
        }), t.eachSeries(function (e) {
            if (Ic(e)) {
                var i = Tc(e, t), n = i[0], r = i[1], a = n.getCoordSysModel(), o = a.coordinateSystem;
                e.coordinateSystem = o.getCartesian(n.componentIndex, r.componentIndex)
            }
        }), i
    }, wc.dimensions = wc.prototype.dimensions = yc.prototype.dimensions, Ss.register("cartesian2d", wc);
    var mS = Tx.extend({
        type: "series.__base_bar__",
        getInitialData: function () {
            return ch(this.getSource(), this, {useEncodeDefaulter: !0})
        },
        getMarkerPosition: function (t) {
            var e = this.coordinateSystem;
            if (e) {
                var i = e.dataToPoint(e.clampData(t)), n = this.getData(), r = n.getLayout("offset"),
                    a = n.getLayout("size"), o = e.getBaseAxis().isHorizontal() ? 0 : 1;
                return i[o] += r + a / 2, i
            }
            return [0 / 0, 0 / 0]
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            barMinHeight: 0,
            barMinAngle: 0,
            large: !1,
            largeThreshold: 400,
            progressive: 3e3,
            progressiveChunkMode: "mod",
            itemStyle: {},
            emphasis: {}
        }
    });
    mS.extend({
        type: "series.bar", dependencies: ["grid", "polar"], brushSelector: "rect", getProgressive: function () {
            return this.get("large") ? this.get("progressive") : !1
        }, getProgressiveThreshold: function () {
            var t = this.get("progressiveThreshold"), e = this.get("largeThreshold");
            return e > t && (t = e), t
        }, defaultOption: {clip: !0, roundCap: !1}
    });
    var yS = bm([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
        _S = {
            getBarItemStyle: function (t) {
                var e = yS(this, t);
                if (this.getBorderLineDash) {
                    var i = this.getBorderLineDash();
                    i && (e.lineDash = i)
                }
                return e
            }
        }, xS = fa({
            type: "sausage",
            shape: {cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = Math.max(e.r0 || 0, 0), a = Math.max(e.r, 0), o = .5 * (a - r), s = r + o,
                    l = e.startAngle, u = e.endAngle, h = e.clockwise, c = Math.cos(l), d = Math.sin(l), f = Math.cos(u),
                    p = Math.sin(u), g = h ? u - l < 2 * Math.PI : l - u < 2 * Math.PI;
                g && (t.moveTo(c * r + i, d * r + n), t.arc(c * s + i, d * s + n, o, -Math.PI + l, l, !h)), t.arc(i, n, a, l, u, !h), t.moveTo(f * a + i, p * a + n), t.arc(f * s + i, p * s + n, o, u - 2 * Math.PI, u - Math.PI, !h), 0 !== r && (t.arc(i, n, r, u, l, h), t.moveTo(c * r + i, p * r + n)), t.closePath()
            }
        }), wS = ["itemStyle", "barBorderWidth"], bS = [0, 0];
    o(co.prototype, _S), Lu({
        type: "bar", render: function (t, e, i) {
            this._updateDrawMode(t);
            var n = t.get("coordinateSystem");
            return ("cartesian2d" === n || "polar" === n) && (this._isLargeDraw ? this._renderLarge(t, e, i) : this._renderNormal(t, e, i)), this.group
        }, incrementalPrepareRender: function (t) {
            this._clear(), this._updateDrawMode(t)
        }, incrementalRender: function (t, e) {
            this._incrementalRenderLarge(t, e)
        }, _updateDrawMode: function (t) {
            var e = t.pipelineContext.large;
            (null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this._clear())
        }, _renderNormal: function (t) {
            var e, i = this.group, n = t.getData(), r = this._data, a = t.coordinateSystem, o = a.getBaseAxis();
            "cartesian2d" === a.type ? e = o.isHorizontal() : "polar" === a.type && (e = "angle" === o.dim);
            var s = t.isAnimationEnabled() ? t : null, l = t.get("clip", !0), u = Oc(a, n);
            i.removeClipPath();
            var h = t.get("roundCap", !0);
            n.diff(r).add(function (r) {
                if (n.hasValue(r)) {
                    var o = n.getItemModel(r), c = CS[a.type](n, r, o);
                    if (l) {
                        var d = TS[a.type](u, c);
                        if (d) return void i.remove(f)
                    }
                    var f = IS[a.type](r, c, e, s, !1, h);
                    n.setItemGraphicEl(r, f), i.add(f), Ec(f, n, r, o, c, t, e, "polar" === a.type)
                }
            }).update(function (o, c) {
                var d = r.getItemGraphicEl(c);
                if (!n.hasValue(o)) return void i.remove(d);
                var f = n.getItemModel(o), p = CS[a.type](n, o, f);
                if (l) {
                    var g = TS[a.type](u, p);
                    if (g) return void i.remove(d)
                }
                d ? Qa(d, {shape: p}, s, o) : d = IS[a.type](o, p, e, s, !0, h), n.setItemGraphicEl(o, d), i.add(d), Ec(d, n, o, f, p, t, e, "polar" === a.type)
            }).remove(function (t) {
                var e = r.getItemGraphicEl(t);
                "cartesian2d" === a.type ? e && zc(t, s, e) : e && Rc(t, s, e)
            }).execute(), this._data = n
        }, _renderLarge: function (t) {
            this._clear(), Fc(t, this.group);
            var e = t.get("clip", !0) ? Pc(t.coordinateSystem, !1, t) : null;
            e ? this.group.setClipPath(e) : this.group.removeClipPath()
        }, _incrementalRenderLarge: function (t, e) {
            Fc(e, this.group, !0)
        }, dispose: V, remove: function (t) {
            this._clear(t)
        }, _clear: function (t) {
            var e = this.group, i = this._data;
            t && t.get("animation") && i && !this._isLargeDraw ? i.eachItemGraphicEl(function (e) {
                "sector" === e.type ? Rc(e.dataIndex, t, e) : zc(e.dataIndex, t, e)
            }) : e.removeAll(), this._data = null
        }
    });
    var SS = Math.max, MS = Math.min, TS = {
        cartesian2d: function (t, e) {
            var i = e.width < 0 ? -1 : 1, n = e.height < 0 ? -1 : 1;
            0 > i && (e.x += e.width, e.width = -e.width), 0 > n && (e.y += e.height, e.height = -e.height);
            var r = SS(e.x, t.x), a = MS(e.x + e.width, t.x + t.width), o = SS(e.y, t.y),
                s = MS(e.y + e.height, t.y + t.height);
            e.x = r, e.y = o, e.width = a - r, e.height = s - o;
            var l = e.width < 0 || e.height < 0;
            return 0 > i && (e.x += e.width, e.width = -e.width), 0 > n && (e.y += e.height, e.height = -e.height), l
        }, polar: function () {
            return !1
        }
    }, IS = {
        cartesian2d: function (t, e, i, n, r) {
            var a = new Hy({shape: o({}, e)});
            if (n) {
                var s = a.shape, l = i ? "height" : "width", u = {};
                s[l] = 0, u[l] = e[l], d_[r ? "updateProps" : "initProps"](a, {shape: u}, n, t)
            }
            return a
        }, polar: function (t, e, i, n, r, a) {
            var o = e.startAngle < e.endAngle, l = !i && a ? xS : Oy, u = new l({shape: s({clockwise: o}, e)});
            if (n) {
                var h = u.shape, c = i ? "r" : "endAngle", d = {};
                h[c] = i ? 0 : e.startAngle, d[c] = e[c], d_[r ? "updateProps" : "initProps"](u, {shape: d}, n, t)
            }
            return u
        }
    }, CS = {
        cartesian2d: function (t, e, i) {
            var n = t.getItemLayout(e), r = Nc(i, n), a = n.width > 0 ? 1 : -1, o = n.height > 0 ? 1 : -1;
            return {x: n.x + a * r / 2, y: n.y + o * r / 2, width: n.width - a * r, height: n.height - o * r}
        }, polar: function (t, e) {
            var i = t.getItemLayout(e);
            return {cx: i.cx, cy: i.cy, r0: i.r0, r: i.r, startAngle: i.startAngle, endAngle: i.endAngle}
        }
    }, DS = Jr.extend({
        type: "largeBar", shape: {points: []}, buildPath: function (t, e) {
            for (var i = e.points, n = this.__startPoint, r = this.__baseDimIdx, a = 0; a < i.length; a += 2) n[r] = i[a + r], t.moveTo(n[0], n[1]), t.lineTo(i[a], i[a + 1])
        }
    }), AS = pl(function (t) {
        var e = this, i = Vc(e, t.offsetX, t.offsetY);
        e.dataIndex = i >= 0 ? i : null
    }, 30, !1), kS = Math.PI, LS = function (t, e) {
        this.opt = e, this.axisModel = t, s(e, {
            labelOffset: 0,
            nameDirection: 1,
            tickDirection: 1,
            labelDirection: 1,
            silent: !0
        }), this.group = new pv;
        var i = new pv({position: e.position.slice(), rotation: e.rotation});
        i.updateTransform(), this._transform = i.transform, this._dumbGroup = i
    };
    LS.prototype = {
        constructor: LS, hasBuilder: function (t) {
            return !!PS[t]
        }, add: function (t) {
            PS[t].call(this)
        }, getGroup: function () {
            return this.group
        }
    };
    var PS = {
        axisLine: function () {
            var t = this.opt, e = this.axisModel;
            if (e.get("axisLine.show")) {
                var i = this.axisModel.axis.getExtent(), n = this._transform, r = [i[0], 0], a = [i[1], 0];
                n && (ae(r, r, n), ae(a, a, n));
                var s = o({lineCap: "round"}, e.getModel("axisLine.lineStyle").getLineStyle());
                this.group.add(new Wy({
                    anid: "line",
                    subPixelOptimize: !0,
                    shape: {x1: r[0], y1: r[1], x2: a[0], y2: a[1]},
                    style: s,
                    strokeContainThreshold: t.strokeContainThreshold || 5,
                    silent: !0,
                    z2: 1
                }));
                var l = e.get("axisLine.symbol"), u = e.get("axisLine.symbolSize"),
                    h = e.get("axisLine.symbolOffset") || 0;
                if ("number" == typeof h && (h = [h, h]), null != l) {
                    "string" == typeof l && (l = [l, l]), ("string" == typeof u || "number" == typeof u) && (u = [u, u]);
                    var c = u[0], d = u[1];
                    f([{rotate: t.rotation + Math.PI / 2, offset: h[0], r: 0}, {
                        rotate: t.rotation - Math.PI / 2,
                        offset: h[1],
                        r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
                    }], function (e, i) {
                        if ("none" !== l[i] && null != l[i]) {
                            var n = Uh(l[i], -c / 2, -d / 2, c, d, s.stroke, !0), a = e.r + e.offset,
                                o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
                            n.attr({rotation: e.rotate, position: o, silent: !0, z2: 11}), this.group.add(n)
                        }
                    }, this)
                }
            }
        }, axisTickLabel: function () {
            var t = this.axisModel, e = this.opt, i = qc(this, t, e), n = Kc(this, t, e);
            Wc(t, n, i), jc(this, t, e)
        }, axisName: function () {
            var t = this.opt, e = this.axisModel, i = D(t.axisName, e.get("name"));
            if (i) {
                var n, r = e.get("nameLocation"), a = t.nameDirection, s = e.getModel("nameTextStyle"),
                    l = e.get("nameGap") || 0, u = this.axisModel.axis.getExtent(), h = u[0] > u[1] ? -1 : 1,
                    c = ["start" === r ? u[0] - h * l : "end" === r ? u[1] + h * l : (u[0] + u[1]) / 2, Uc(r) ? t.labelOffset + a * l : 0],
                    d = e.get("nameRotate");
                null != d && (d = d * kS / 180);
                var f;
                Uc(r) ? n = zS(t.rotation, null != d ? d : t.rotation, a) : (n = Gc(t, r, d || 0, u), f = t.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(n.rotation)), !isFinite(f) && (f = null)));
                var p = s.getFont(), g = e.get("nameTruncate", !0) || {}, v = g.ellipsis,
                    m = D(t.nameTruncateMaxWidth, g.maxWidth, f),
                    y = null != v && null != m ? A_(i, m, p, v, {minChar: 2, placeholder: g.placeholder}) : i,
                    _ = e.get("tooltip", !0), x = e.mainType, w = {componentType: x, name: i, $vars: ["name"]};
                w[x + "Index"] = e.componentIndex;
                var b = new Ay({
                    anid: "name",
                    __fullText: i,
                    __truncatedText: y,
                    position: c,
                    rotation: n.rotation,
                    silent: RS(e),
                    z2: 1,
                    tooltip: _ && _.show ? o({
                        content: i, formatter: function () {
                            return i
                        }, formatterParams: w
                    }, _) : null
                });
                Ga(b.style, s, {
                    text: y,
                    textFont: p,
                    textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
                    textAlign: s.get("align") || n.textAlign,
                    textVerticalAlign: s.get("verticalAlign") || n.textVerticalAlign
                }), e.get("triggerEvent") && (b.eventData = OS(e), b.eventData.targetType = "axisName", b.eventData.name = i), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform()
            }
        }
    }, OS = LS.makeAxisEventDataBase = function (t) {
        var e = {componentType: t.mainType, componentIndex: t.componentIndex};
        return e[t.mainType + "Index"] = t.componentIndex, e
    }, zS = LS.innerTextLayout = function (t, e, i) {
        var n, r, a = Co(e - t);
        return Do(a) ? (r = i > 0 ? "top" : "bottom", n = "center") : Do(a - kS) ? (r = i > 0 ? "bottom" : "top", n = "center") : (r = "middle", n = a > 0 && kS > a ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
            rotation: a,
            textAlign: n,
            textVerticalAlign: r
        }
    }, RS = LS.isLabelSilent = function (t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
    }, BS = f, ES = _, NS = Au({
        type: "axis", _axisPointer: null, axisPointerClass: null, render: function (t, e, i, n) {
            this.axisPointerClass && nd(t), NS.superApply(this, "render", arguments), ld(this, t, e, i, n, !0)
        }, updateAxisPointer: function (t, e, i, n) {
            ld(this, t, e, i, n, !1)
        }, remove: function (t, e) {
            var i = this._axisPointer;
            i && i.remove(e), NS.superApply(this, "remove", arguments)
        }, dispose: function (t, e) {
            ud(this, e), NS.superApply(this, "dispose", arguments)
        }
    }), FS = [];
    NS.registerAxisPointerClass = function (t, e) {
        FS[t] = e
    }, NS.getAxisPointerClass = function (t) {
        return t && FS[t]
    };
    var VS = ["axisLine", "axisTickLabel", "axisName"], HS = ["splitArea", "splitLine", "minorSplitLine"],
        GS = NS.extend({
            type: "cartesianAxis", axisPointerClass: "CartesianAxisPointer", render: function (t, e, i, n) {
                this.group.removeAll();
                var r = this._axisGroup;
                if (this._axisGroup = new pv, this.group.add(this._axisGroup), t.get("show")) {
                    var a = t.getCoordSysModel(), o = hd(a, t), s = new LS(t, o);
                    f(VS, s.add, s), this._axisGroup.add(s.getGroup()), f(HS, function (e) {
                        t.get(e + ".show") && this["_" + e](t, a)
                    }, this), no(r, this._axisGroup, t), GS.superCall(this, "render", t, e, i, n)
                }
            }, remove: function () {
                this._splitAreaColors = null
            }, _splitLine: function (t, e) {
                var i = t.axis;
                if (!i.scale.isBlank()) {
                    var n = t.getModel("splitLine"), r = n.getModel("lineStyle"), a = r.get("color");
                    a = x(a) ? a : [a];
                    for (var o = e.coordinateSystem.getRect(), l = i.isHorizontal(), u = 0, h = i.getTicksCoords({tickModel: n}), c = [], d = [], f = r.getLineStyle(), p = 0; p < h.length; p++) {
                        var g = i.toGlobalCoord(h[p].coord);
                        l ? (c[0] = g, c[1] = o.y, d[0] = g, d[1] = o.y + o.height) : (c[0] = o.x, c[1] = g, d[0] = o.x + o.width, d[1] = g);
                        var v = u++ % a.length, m = h[p].tickValue;
                        this._axisGroup.add(new Wy({
                            anid: null != m ? "line_" + h[p].tickValue : null,
                            subPixelOptimize: !0,
                            shape: {x1: c[0], y1: c[1], x2: d[0], y2: d[1]},
                            style: s({stroke: a[v]}, f),
                            silent: !0
                        }))
                    }
                }
            }, _minorSplitLine: function (t, e) {
                var i = t.axis, n = t.getModel("minorSplitLine"), r = n.getModel("lineStyle"),
                    a = e.coordinateSystem.getRect(), o = i.isHorizontal(), s = i.getMinorTicksCoords();
                if (s.length) for (var l = [], u = [], h = r.getLineStyle(), c = 0; c < s.length; c++) for (var d = 0; d < s[c].length; d++) {
                    var f = i.toGlobalCoord(s[c][d].coord);
                    o ? (l[0] = f, l[1] = a.y, u[0] = f, u[1] = a.y + a.height) : (l[0] = a.x, l[1] = f, u[0] = a.x + a.width, u[1] = f), this._axisGroup.add(new Wy({
                        anid: "minor_line_" + s[c][d].tickValue,
                        subPixelOptimize: !0,
                        shape: {x1: l[0], y1: l[1], x2: u[0], y2: u[1]},
                        style: h,
                        silent: !0
                    }))
                }
            }, _splitArea: function (t, e) {
                var i = t.axis;
                if (!i.scale.isBlank()) {
                    var n = t.getModel("splitArea"), r = n.getModel("areaStyle"), a = r.get("color"),
                        o = e.coordinateSystem.getRect(), l = i.getTicksCoords({tickModel: n, clamp: !0});
                    if (l.length) {
                        var u = a.length, h = this._splitAreaColors, c = N(), d = 0;
                        if (h) for (var f = 0; f < l.length; f++) {
                            var p = h.get(l[f].tickValue);
                            if (null != p) {
                                d = (p + (u - 1) * f) % u;
                                break
                            }
                        }
                        var g = i.toGlobalCoord(l[0].coord), v = r.getAreaStyle();
                        a = x(a) ? a : [a];
                        for (var f = 1; f < l.length; f++) {
                            var m, y, _, w, b = i.toGlobalCoord(l[f].coord);
                            i.isHorizontal() ? (m = g, y = o.y, _ = b - m, w = o.height, g = m + _) : (m = o.x, y = g, _ = o.width, w = b - y, g = y + w);
                            var S = l[f - 1].tickValue;
                            null != S && c.set(S, d), this._axisGroup.add(new Hy({
                                anid: null != S ? "area_" + S : null,
                                shape: {x: m, y: y, width: _, height: w},
                                style: s({fill: a[d]}, v),
                                silent: !0
                            })), d = (d + 1) % u
                        }
                        this._splitAreaColors = c
                    }
                }
            }
        });
    GS.extend({type: "xAxis"}), GS.extend({type: "yAxis"}), Au({
        type: "grid", render: function (t) {
            this.group.removeAll(), t.get("show") && this.group.add(new Hy({
                shape: t.coordinateSystem.getRect(),
                style: s({fill: t.get("backgroundColor")}, t.getItemStyle()),
                silent: !0,
                z2: -1
            }))
        }
    }), yu(function (t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {})
    }), Mu(Aw.VISUAL.LAYOUT, _(Ah, "bar")), Mu(Aw.VISUAL.PROGRESSIVE_LAYOUT, bb), Tu({
        seriesType: "bar",
        reset: function (t) {
            t.getData().setVisual("legendSymbol", "roundRect")
        }
    }), Tx.extend({
        type: "series.line",
        dependencies: ["grid", "polar"],
        getInitialData: function () {
            return ch(this.getSource(), this, {useEncodeDefaulter: !0})
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            hoverAnimation: !0,
            clip: !0,
            label: {position: "top"},
            lineStyle: {width: 2, type: "solid"},
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: "emptyCircle",
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: "auto",
            connectNulls: !1,
            sampling: "none",
            animationEasing: "linear",
            progressive: 0,
            hoverLayerThreshold: 1 / 0
        }
    });
    var WS = cd.prototype, XS = cd.getSymbolSize = function (t, e) {
        var i = t.getItemVisual(e, "symbolSize");
        return i instanceof Array ? i.slice() : [+i, +i]
    };
    WS._createSymbol = function (t, e, i, n, r) {
        this.removeAll();
        var a = e.getItemVisual(i, "color"), o = Uh(t, -1, -1, 2, 2, a, r);
        o.attr({z2: 100, culling: !0, scale: dd(n)}), o.drift = fd, this._symbolType = t, this.add(o)
    }, WS.stopSymbolAnimation = function (t) {
        this.childAt(0).stopAnimation(t)
    }, WS.getSymbolPath = function () {
        return this.childAt(0)
    }, WS.getScale = function () {
        return this.childAt(0).scale
    }, WS.highlight = function () {
        this.childAt(0).trigger("emphasis")
    }, WS.downplay = function () {
        this.childAt(0).trigger("normal")
    }, WS.setZ = function (t, e) {
        var i = this.childAt(0);
        i.zlevel = t, i.z = e
    }, WS.setDraggable = function (t) {
        var e = this.childAt(0);
        e.draggable = t, e.cursor = t ? "move" : e.cursor
    }, WS.updateData = function (t, e, i) {
        this.silent = !1;
        var n = t.getItemVisual(e, "symbol") || "circle", r = t.hostModel, a = XS(t, e), o = n !== this._symbolType;
        if (o) {
            var s = t.getItemVisual(e, "symbolKeepAspect");
            this._createSymbol(n, t, e, a, s)
        } else {
            var l = this.childAt(0);
            l.silent = !1, Qa(l, {scale: dd(a)}, r, e)
        }
        if (this._updateCommon(t, e, a, i), o) {
            var l = this.childAt(0), u = i && i.fadeIn, h = {scale: l.scale.slice()};
            u && (h.style = {opacity: l.style.opacity}), l.scale = [0, 0], u && (l.style.opacity = 0), Ja(l, h, r, e)
        }
        this._seriesModel = r
    };
    var YS = ["itemStyle"], US = ["emphasis", "itemStyle"], ZS = ["label"], qS = ["emphasis", "label"];
    WS._updateCommon = function (t, e, i, n) {
        function r(e) {
            return b ? t.getName(e) : Cc(t, e)
        }

        var a = this.childAt(0), s = t.hostModel, l = t.getItemVisual(e, "color");
        "image" !== a.type ? a.useStyle({strokeNoScale: !0}) : a.setStyle({
            opacity: null,
            shadowBlur: null,
            shadowOffsetX: null,
            shadowOffsetY: null,
            shadowColor: null
        });
        var u = n && n.itemStyle, h = n && n.hoverItemStyle, c = n && n.symbolRotate, d = n && n.symbolOffset,
            f = n && n.labelModel, p = n && n.hoverLabelModel, g = n && n.hoverAnimation, v = n && n.cursorStyle;
        if (!n || t.hasItemOption) {
            var m = n && n.itemModel ? n.itemModel : t.getItemModel(e);
            u = m.getModel(YS).getItemStyle(["color"]), h = m.getModel(US).getItemStyle(), c = m.getShallow("symbolRotate"), d = m.getShallow("symbolOffset"), f = m.getModel(ZS), p = m.getModel(qS), g = m.getShallow("hoverAnimation"), v = m.getShallow("cursor")
        } else h = o({}, h);
        var y = a.style;
        a.attr("rotation", (c || 0) * Math.PI / 180 || 0), d && a.attr("position", [xo(d[0], i[0]), xo(d[1], i[1])]), v && a.attr("cursor", v), a.setColor(l, n && n.symbolInnerColor), a.setStyle(u);
        var _ = t.getItemVisual(e, "opacity");
        null != _ && (y.opacity = _);
        var x = t.getItemVisual(e, "liftZ"), w = a.__z2Origin;
        null != x ? null == w && (a.__z2Origin = a.z2, a.z2 += x) : null != w && (a.z2 = w, a.__z2Origin = null);
        var b = n && n.useNameLabel;
        Va(y, h, f, p, {
            labelFetcher: s,
            labelDataIndex: e,
            defaultText: r,
            isRectText: !0,
            autoColor: l
        }), a.__symbolOriginalScale = dd(i), a.hoverStyle = h, a.highDownOnUpdate = g && s.isAnimationEnabled() ? pd : null, Ba(a)
    }, WS.fadeOut = function (t, e) {
        var i = this.childAt(0);
        this.silent = i.silent = !0, !(e && e.keepLabel) && (i.style.text = null), Qa(i, {
            style: {opacity: 0},
            scale: [0, 0]
        }, this._seriesModel, this.dataIndex, t)
    }, h(cd, pv);
    var jS = gd.prototype;
    jS.updateData = function (t, e) {
        e = md(e);
        var i = this.group, n = t.hostModel, r = this._data, a = this._symbolCtor, o = yd(t);
        r || i.removeAll(), t.diff(r).add(function (n) {
            var r = t.getItemLayout(n);
            if (vd(t, r, n, e)) {
                var s = new a(t, n, o);
                s.attr("position", r), t.setItemGraphicEl(n, s), i.add(s)
            }
        }).update(function (s, l) {
            var u = r.getItemGraphicEl(l), h = t.getItemLayout(s);
            return vd(t, h, s, e) ? (u ? (u.updateData(t, s, o), Qa(u, {position: h}, n)) : (u = new a(t, s), u.attr("position", h)), i.add(u), void t.setItemGraphicEl(s, u)) : void i.remove(u)
        }).remove(function (t) {
            var e = r.getItemGraphicEl(t);
            e && e.fadeOut(function () {
                i.remove(e)
            })
        }).execute(), this._data = t
    }, jS.isPersistent = function () {
        return !0
    }, jS.updateLayout = function () {
        var t = this._data;
        t && t.eachItemGraphicEl(function (e, i) {
            var n = t.getItemLayout(i);
            e.attr("position", n)
        })
    }, jS.incrementalPrepareUpdate = function (t) {
        this._seriesScope = yd(t), this._data = null, this.group.removeAll()
    }, jS.incrementalUpdate = function (t, e, i) {
        function n(t) {
            t.isGroup || (t.incremental = t.useHoverLayer = !0)
        }

        i = md(i);
        for (var r = t.start; r < t.end; r++) {
            var a = e.getItemLayout(r);
            if (vd(e, a, r, i)) {
                var o = new this._symbolCtor(e, r, this._seriesScope);
                o.traverse(n), o.attr("position", a), this.group.add(o), e.setItemGraphicEl(r, o)
            }
        }
    }, jS.remove = function (t) {
        var e = this.group, i = this._data;
        i && t ? i.eachItemGraphicEl(function (t) {
            t.fadeOut(function () {
                e.remove(t)
            })
        }) : e.removeAll()
    };
    var KS = function (t, e, i, n, r, a, o, s) {
        for (var l = bd(t, e), u = [], h = [], c = [], d = [], f = [], p = [], g = [], v = _d(r, e, o), m = _d(a, t, s), y = 0; y < l.length; y++) {
            var _ = l[y], x = !0;
            switch (_.cmd) {
                case"=":
                    var w = t.getItemLayout(_.idx), b = e.getItemLayout(_.idx1);
                    (isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), u.push(w), h.push(b), c.push(i[_.idx]), d.push(n[_.idx1]), g.push(e.getRawIndex(_.idx1));
                    break;
                case"+":
                    var S = _.idx;
                    u.push(r.dataToPoint([e.get(v.dataDimsForPoint[0], S), e.get(v.dataDimsForPoint[1], S)])), h.push(e.getItemLayout(S).slice()), c.push(wd(v, r, e, S)), d.push(n[S]), g.push(e.getRawIndex(S));
                    break;
                case"-":
                    var S = _.idx, M = t.getRawIndex(S);
                    M !== S ? (u.push(t.getItemLayout(S)), h.push(a.dataToPoint([t.get(m.dataDimsForPoint[0], S), t.get(m.dataDimsForPoint[1], S)])), c.push(i[S]), d.push(wd(m, a, t, S)), g.push(M)) : x = !1
            }
            x && (f.push(_), p.push(p.length))
        }
        p.sort(function (t, e) {
            return g[t] - g[e]
        });
        for (var T = [], I = [], C = [], D = [], A = [], y = 0; y < p.length; y++) {
            var S = p[y];
            T[y] = u[S], I[y] = h[S], C[y] = c[S], D[y] = d[S], A[y] = f[S]
        }
        return {current: T, next: I, stackedOnCurrent: C, stackedOnNext: D, status: A}
    }, $S = oe, QS = se, JS = U, tM = G, eM = [], iM = [], nM = [], rM = Jr.extend({
        type: "ec-polyline",
        shape: {points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1},
        style: {fill: null, stroke: "#000"},
        brush: Py(Jr.prototype.brush),
        buildPath: function (t, e) {
            var i = e.points, n = 0, r = i.length, a = Cd(i, e.smoothConstraint);
            if (e.connectNulls) {
                for (; r > 0 && Sd(i[r - 1]); r--) ;
                for (; r > n && Sd(i[n]); n++) ;
            }
            for (; r > n;) n += Md(t, i, n, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
        }
    }), aM = Jr.extend({
        type: "ec-polygon",
        shape: {
            points: [],
            stackedOnPoints: [],
            smooth: 0,
            stackedOnSmooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
        },
        brush: Py(Jr.prototype.brush),
        buildPath: function (t, e) {
            var i = e.points, n = e.stackedOnPoints, r = 0, a = i.length, o = e.smoothMonotone,
                s = Cd(i, e.smoothConstraint), l = Cd(n, e.smoothConstraint);
            if (e.connectNulls) {
                for (; a > 0 && Sd(i[a - 1]); a--) ;
                for (; a > r && Sd(i[r]); r++) ;
            }
            for (; a > r;) {
                var u = Md(t, i, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);
                Md(t, n, r + u - 1, u, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), r += u + 1, t.closePath()
            }
        }
    });
    ul.extend({
        type: "line", init: function () {
            var t = new pv, e = new gd;
            this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
        }, render: function (t, e, i) {
            var n = t.coordinateSystem, r = this.group, a = t.getData(), o = t.getModel("lineStyle"),
                l = t.getModel("areaStyle"), u = a.mapArray(a.getItemLayout), h = "polar" === n.type,
                c = this._coordSys, d = this._symbolDraw, f = this._polyline, p = this._polygon, g = this._lineGroup,
                v = t.get("animation"), m = !l.isEmpty(), y = l.get("origin"), _ = _d(n, a, y), x = kd(n, a, _),
                w = t.get("showSymbol"), b = w && !h && Od(t, a, n), S = this._data;
            S && S.eachItemGraphicEl(function (t, e) {
                t.__temp && (r.remove(t), S.setItemGraphicEl(e, null))
            }), w || d.remove(), r.add(g);
            var M, T = !h && t.get("step");
            n && n.getArea && t.get("clip", !0) && (M = n.getArea(), null != M.width ? (M.x -= .1, M.y -= .1, M.width += .2, M.height += .2) : M.r0 && (M.r0 -= .5, M.r1 += .5)), this._clipShapeForSymbol = M, f && c.type === n.type && T === this._step ? (m && !p ? p = this._newPolygon(u, x, n, v) : p && !m && (g.remove(p), p = this._polygon = null), g.setClipPath(Rd(n, !1, t)), w && d.updateData(a, {
                isIgnore: b,
                clipShape: M
            }), a.eachItemGraphicEl(function (t) {
                t.stopAnimation(!0)
            }), Dd(this._stackedOnPoints, x) && Dd(this._points, u) || (v ? this._updateAnimation(a, x, n, i, T, y) : (T && (u = Ld(u, n, T), x = Ld(x, n, T)), f.setShape({points: u}), p && p.setShape({
                points: u,
                stackedOnPoints: x
            })))) : (w && d.updateData(a, {
                isIgnore: b,
                clipShape: M
            }), T && (u = Ld(u, n, T), x = Ld(x, n, T)), f = this._newPolyline(u, n, v), m && (p = this._newPolygon(u, x, n, v)), g.setClipPath(Rd(n, !0, t)));
            var I = Pd(a, n) || a.getVisual("color");
            f.useStyle(s(o.getLineStyle(), {fill: "none", stroke: I, lineJoin: "bevel"}));
            var C = t.get("smooth");
            if (C = Ad(t.get("smooth")), f.setShape({
                smooth: C,
                smoothMonotone: t.get("smoothMonotone"),
                connectNulls: t.get("connectNulls")
            }), p) {
                var D = a.getCalculationInfo("stackedOnSeries"), A = 0;
                p.useStyle(s(l.getAreaStyle(), {
                    fill: I,
                    opacity: .7,
                    lineJoin: "bevel"
                })), D && (A = Ad(D.get("smooth"))), p.setShape({
                    smooth: C,
                    stackedOnSmooth: A,
                    smoothMonotone: t.get("smoothMonotone"),
                    connectNulls: t.get("connectNulls")
                })
            }
            this._data = a, this._coordSys = n, this._stackedOnPoints = x, this._points = u, this._step = T, this._valueOrigin = y
        }, dispose: function () {
        }, highlight: function (t, e, i, n) {
            var r = t.getData(), a = or(r, n);
            if (!(a instanceof Array) && null != a && a >= 0) {
                var o = r.getItemGraphicEl(a);
                if (!o) {
                    var s = r.getItemLayout(a);
                    if (!s) return;
                    if (this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(s[0], s[1])) return;
                    o = new cd(r, a), o.position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore = isNaN(s[0]) || isNaN(s[1]), o.__temp = !0, r.setItemGraphicEl(a, o), o.stopSymbolAnimation(!0), this.group.add(o)
                }
                o.highlight()
            } else ul.prototype.highlight.call(this, t, e, i, n)
        }, downplay: function (t, e, i, n) {
            var r = t.getData(), a = or(r, n);
            if (null != a && a >= 0) {
                var o = r.getItemGraphicEl(a);
                o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay())
            } else ul.prototype.downplay.call(this, t, e, i, n)
        }, _newPolyline: function (t) {
            var e = this._polyline;
            return e && this._lineGroup.remove(e), e = new rM({
                shape: {points: t},
                silent: !0,
                z2: 10
            }), this._lineGroup.add(e), this._polyline = e, e
        }, _newPolygon: function (t, e) {
            var i = this._polygon;
            return i && this._lineGroup.remove(i), i = new aM({
                shape: {points: t, stackedOnPoints: e},
                silent: !0
            }), this._lineGroup.add(i), this._polygon = i, i
        }, _updateAnimation: function (t, e, i, n, r, a) {
            var o = this._polyline, s = this._polygon, l = t.hostModel,
                u = KS(this._data, t, this._stackedOnPoints, e, this._coordSys, i, this._valueOrigin, a), h = u.current,
                c = u.stackedOnCurrent, d = u.next, f = u.stackedOnNext;
            r && (h = Ld(u.current, i, r), c = Ld(u.stackedOnCurrent, i, r), d = Ld(u.next, i, r), f = Ld(u.stackedOnNext, i, r)), o.shape.__points = u.current, o.shape.points = h, Qa(o, {shape: {points: d}}, l), s && (s.setShape({
                points: h,
                stackedOnPoints: c
            }), Qa(s, {shape: {points: d, stackedOnPoints: f}}, l));
            for (var p = [], g = u.status, v = 0; v < g.length; v++) {
                var m = g[v].cmd;
                if ("=" === m) {
                    var y = t.getItemGraphicEl(g[v].idx1);
                    y && p.push({el: y, ptIdx: v})
                }
            }
            o.animators && o.animators.length && o.animators[0].during(function () {
                for (var t = 0; t < p.length; t++) {
                    var e = p[t].el;
                    e.attr("position", o.shape.__points[p[t].ptIdx])
                }
            })
        }, remove: function () {
            var t = this.group, e = this._data;
            this._lineGroup.removeAll(), this._symbolDraw.remove(!0), e && e.eachItemGraphicEl(function (i, n) {
                i.__temp && (t.remove(i), e.setItemGraphicEl(n, null))
            }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
        }
    });
    var oM = function (t, e, i) {
        return {
            seriesType: t, performRawSeries: !0, reset: function (t, n) {
                function r(e, i) {
                    if (c) {
                        var n = t.getRawValue(i), r = t.getDataParams(i);
                        u && e.setItemVisual(i, "symbol", o(n, r)), h && e.setItemVisual(i, "symbolSize", s(n, r))
                    }
                    if (e.hasItemOption) {
                        var a = e.getItemModel(i), l = a.getShallow("symbol", !0), d = a.getShallow("symbolSize", !0),
                            f = a.getShallow("symbolKeepAspect", !0);
                        null != l && e.setItemVisual(i, "symbol", l), null != d && e.setItemVisual(i, "symbolSize", d), null != f && e.setItemVisual(i, "symbolKeepAspect", f)
                    }
                }

                var a = t.getData(), o = t.get("symbol"), s = t.get("symbolSize"), l = t.get("symbolKeepAspect"),
                    u = w(o), h = w(s), c = u || h, d = !u && o ? o : e, f = h ? null : s;
                return a.setVisual({
                    legendSymbol: i || d,
                    symbol: d,
                    symbolSize: f,
                    symbolKeepAspect: l
                }), n.isSeriesFiltered(t) ? void 0 : {dataEach: a.hasItemOption || c ? r : null}
            }
        }
    }, sM = function (t) {
        return {
            seriesType: t, plan: Dx(), reset: function (t) {
                function e(t, e) {
                    for (var i = t.end - t.start, r = a && new Float32Array(i * s), l = t.start, u = 0, h = [], c = []; l < t.end; l++) {
                        var d;
                        if (1 === s) {
                            var f = e.get(o[0], l);
                            d = !isNaN(f) && n.dataToPoint(f, null, c)
                        } else {
                            var f = h[0] = e.get(o[0], l), p = h[1] = e.get(o[1], l);
                            d = !isNaN(f) && !isNaN(p) && n.dataToPoint(h, null, c)
                        }
                        a ? (r[u++] = d ? d[0] : 0 / 0, r[u++] = d ? d[1] : 0 / 0) : e.setItemLayout(l, d && d.slice() || [0 / 0, 0 / 0])
                    }
                    a && e.setLayout("symbolPoints", r)
                }

                var i = t.getData(), n = t.coordinateSystem, r = t.pipelineContext, a = r.large;
                if (n) {
                    var o = p(n.dimensions, function (t) {
                        return i.mapDimension(t)
                    }).slice(0, 2), s = o.length, l = i.getCalculationInfo("stackResultDimension");
                    return uh(i, o[0]) && (o[0] = l), uh(i, o[1]) && (o[1] = l), s && {progress: e}
                }
            }
        }
    }, lM = {
        average: function (t) {
            for (var e = 0, i = 0, n = 0; n < t.length; n++) isNaN(t[n]) || (e += t[n], i++);
            return 0 === i ? 0 / 0 : e / i
        }, sum: function (t) {
            for (var e = 0, i = 0; i < t.length; i++) e += t[i] || 0;
            return e
        }, max: function (t) {
            for (var e = -1 / 0, i = 0; i < t.length; i++) t[i] > e && (e = t[i]);
            return isFinite(e) ? e : 0 / 0
        }, min: function (t) {
            for (var e = 1 / 0, i = 0; i < t.length; i++) t[i] < e && (e = t[i]);
            return isFinite(e) ? e : 0 / 0
        }, nearest: function (t) {
            return t[0]
        }
    }, uM = function (t) {
        return Math.round(t.length / 2)
    }, hM = function (t) {
        return {
            seriesType: t, modifyOutputEnd: !0, reset: function (t) {
                var e = t.getData(), i = t.get("sampling"), n = t.coordinateSystem;
                if ("cartesian2d" === n.type && i) {
                    var r = n.getBaseAxis(), a = n.getOtherAxis(r), o = r.getExtent(), s = o[1] - o[0],
                        l = Math.round(e.count() / s);
                    if (l > 1) {
                        var u;
                        "string" == typeof i ? u = lM[i] : "function" == typeof i && (u = i), u && t.setData(e.downSample(e.mapDimension(a.dim), 1 / l, u, uM))
                    }
                }
            }
        }
    };
    Tu(oM("line", "circle", "line")), Mu(sM("line")), _u(Aw.PROCESSOR.STATISTIC, hM("line"));
    var cM = function (t, e, i) {
        e = x(e) && {coordDimensions: e} || o({}, e);
        var n = t.getSource(), r = cb(n, e), a = new lb(r, t);
        return a.initData(n, i), a
    }, dM = {
        updateSelectedMap: function (t) {
            this._targetList = x(t) ? t.slice() : [], this._selectTargetMap = g(t || [], function (t, e) {
                return t.set(e.name, e), t
            }, N())
        }, select: function (t, e) {
            var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t), n = this.get("selectedMode");
            "single" === n && this._selectTargetMap.each(function (t) {
                t.selected = !1
            }), i && (i.selected = !0)
        }, unSelect: function (t, e) {
            var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            i && (i.selected = !1)
        }, toggleSelected: function (t, e) {
            var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return null != i ? (this[i.selected ? "unSelect" : "select"](t, e), i.selected) : void 0
        }, isSelected: function (t, e) {
            var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return i && i.selected
        }
    }, fM = ku({
        type: "series.pie",
        init: function (t) {
            fM.superApply(this, "init", arguments), this.legendVisualProvider = new Bd(y(this.getData, this), y(this.getRawData, this)), this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t)
        },
        mergeOption: function (t) {
            fM.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList())
        },
        getInitialData: function () {
            return cM(this, {coordDimensions: ["value"], encodeDefaulter: _(cs, this)})
        },
        _createSelectableList: function () {
            for (var t = this.getRawData(), e = t.mapDimension("value"), i = [], n = 0, r = t.count(); r > n; n++) i.push({
                name: t.getName(n),
                value: t.get(e, n),
                selected: Ks(t, n, "selected")
            });
            return i
        },
        getDataParams: function (t) {
            var e = this.getData(), i = fM.superCall(this, "getDataParams", t), n = [];
            return e.each(e.mapDimension("value"), function (t) {
                n.push(t)
            }), i.percent = Io(n, t, e.hostModel.get("percentPrecision")), i.$vars.push("percent"), i
        },
        _defaultLabelLine: function (t) {
            Qn(t, "labelLine", ["show"]);
            var e = t.labelLine, i = t.emphasis.labelLine;
            e.show = e.show && t.label.show, i.show = i.show && t.emphasis.label.show
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            hoverAnimation: !0,
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockwise: !0,
            startAngle: 90,
            minAngle: 0,
            minShowLabelAngle: 0,
            selectedOffset: 10,
            hoverOffset: 10,
            avoidLabelOverlap: !0,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: null,
            height: null,
            label: {
                rotate: !1,
                show: !0,
                position: "outer",
                alignTo: "none",
                margin: "25%",
                bleedMargin: 10,
                distanceToLabelLine: 5
            },
            labelLine: {show: !0, length: 15, length2: 15, smooth: !1, lineStyle: {width: 1, type: "solid"}},
            itemStyle: {borderWidth: 1},
            animationType: "expansion",
            animationTypeUpdate: "transition",
            animationEasing: "cubicOut"
        }
    });
    c(fM, dM);
    var pM = Fd.prototype;
    pM.updateData = function (t, e, i) {
        var n = this.childAt(0), r = this.childAt(1), a = this.childAt(2), l = t.hostModel, u = t.getItemModel(e),
            h = t.getItemLayout(e), c = o({}, h);
        c.label = null;
        var d = l.getShallow("animationTypeUpdate");
        if (i) {
            n.setShape(c);
            var f = l.getShallow("animationType");
            "scale" === f ? (n.shape.r = h.r0, Ja(n, {shape: {r: h.r}}, l, e)) : (n.shape.endAngle = h.startAngle, Qa(n, {shape: {endAngle: h.endAngle}}, l, e))
        } else "expansion" === d ? n.setShape(c) : Qa(n, {shape: c}, l, e);
        var p = t.getItemVisual(e, "color");
        n.useStyle(s({
            lineJoin: "bevel",
            fill: p
        }, u.getModel("itemStyle").getItemStyle())), n.hoverStyle = u.getModel("emphasis.itemStyle").getItemStyle();
        var g = u.getShallow("cursor");
        g && n.attr("cursor", g), Nd(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation"));
        var v = !i && "transition" === d;
        this._updateLabel(t, e, v), this.highDownOnUpdate = u.get("hoverAnimation") && l.isAnimationEnabled() ? function (t, e) {
            "emphasis" === e ? (r.ignore = r.hoverIgnore, a.ignore = a.hoverIgnore, n.stopAnimation(!0), n.animateTo({shape: {r: h.r + l.get("hoverOffset")}}, 300, "elasticOut")) : (r.ignore = r.normalIgnore, a.ignore = a.normalIgnore, n.stopAnimation(!0), n.animateTo({shape: {r: h.r}}, 300, "elasticOut"))
        } : null, Ba(this)
    }, pM._updateLabel = function (t, e, i) {
        var n = this.childAt(1), r = this.childAt(2), a = t.hostModel, o = t.getItemModel(e), s = t.getItemLayout(e),
            l = s.label, u = t.getItemVisual(e, "color");
        if (!l || isNaN(l.x) || isNaN(l.y)) return void (r.ignore = r.normalIgnore = r.hoverIgnore = n.ignore = n.normalIgnore = n.hoverIgnore = !0);
        var h = {points: l.linePoints || [[l.x, l.y], [l.x, l.y], [l.x, l.y]]}, c = {x: l.x, y: l.y};
        i ? (Qa(n, {shape: h}, a, e), Qa(r, {style: c}, a, e)) : (n.attr({shape: h}), r.attr({style: c})), r.attr({
            rotation: l.rotation,
            origin: [l.x, l.y],
            z2: 10
        });
        var d = o.getModel("label"), f = o.getModel("emphasis.label"), p = o.getModel("labelLine"),
            g = o.getModel("emphasis.labelLine"), u = t.getItemVisual(e, "color");
        Va(r.style, r.hoverStyle = {}, d, f, {
            labelFetcher: t.hostModel,
            labelDataIndex: e,
            defaultText: l.text,
            autoColor: u,
            useInsideStyle: !!l.inside
        }, {
            textAlign: l.textAlign,
            textVerticalAlign: l.verticalAlign,
            opacity: t.getItemVisual(e, "opacity")
        }), r.ignore = r.normalIgnore = !d.get("show"), r.hoverIgnore = !f.get("show"), n.ignore = n.normalIgnore = !p.get("show"), n.hoverIgnore = !g.get("show"), n.setStyle({
            stroke: u,
            opacity: t.getItemVisual(e, "opacity")
        }), n.setStyle(p.getModel("lineStyle").getLineStyle()), n.hoverStyle = g.getModel("lineStyle").getLineStyle();
        var v = p.get("smooth");
        v && v === !0 && (v = .4), n.setShape({smooth: v})
    }, h(Fd, pv);
    var gM = (ul.extend({
        type: "pie", init: function () {
            var t = new pv;
            this._sectorGroup = t
        }, render: function (t, e, i, n) {
            if (!n || n.from !== this.uid) {
                var r = t.getData(), a = this._data, o = this.group, s = e.get("animation"), l = !a,
                    u = t.get("animationType"), h = t.get("animationTypeUpdate"), c = _(Ed, this.uid, t, s, i),
                    d = t.get("selectedMode");
                if (r.diff(a).add(function (t) {
                    var e = new Fd(r, t);
                    l && "scale" !== u && e.eachChild(function (t) {
                        t.stopAnimation(!0)
                    }), d && e.on("click", c), r.setItemGraphicEl(t, e), o.add(e)
                }).update(function (t, e) {
                    var i = a.getItemGraphicEl(e);
                    l || "transition" === h || i.eachChild(function (t) {
                        t.stopAnimation(!0)
                    }), i.updateData(r, t), i.off("click"), d && i.on("click", c), o.add(i), r.setItemGraphicEl(t, i)
                }).remove(function (t) {
                    var e = a.getItemGraphicEl(t);
                    o.remove(e)
                }).execute(), s && r.count() > 0 && (l ? "scale" !== u : "transition" !== h)) {
                    for (var f = r.getItemLayout(0), p = 1; isNaN(f.startAngle) && p < r.count(); ++p) f = r.getItemLayout(p);
                    var g = Math.max(i.getWidth(), i.getHeight()) / 2, v = y(o.removeClipPath, o);
                    o.setClipPath(this._createClipPath(f.cx, f.cy, g, f.startAngle, f.clockwise, v, t, l))
                } else o.removeClipPath();
                this._data = r
            }
        }, dispose: function () {
        }, _createClipPath: function (t, e, i, n, r, a, o, s) {
            var l = new Oy({shape: {cx: t, cy: e, r0: 0, r: i, startAngle: n, endAngle: n, clockwise: r}}),
                u = s ? Ja : Qa;
            return u(l, {shape: {endAngle: n + (r ? 1 : -1) * Math.PI * 2}}, o, a), l
        }, containPoint: function (t, e) {
            var i = e.getData(), n = i.getItemLayout(0);
            if (n) {
                var r = t[0] - n.cx, a = t[1] - n.cy, o = Math.sqrt(r * r + a * a);
                return o <= n.r && o >= n.r0
            }
        }
    }), function (t, e) {
        f(e, function (e) {
            e.update = "updateView", wu(e, function (i, n) {
                var r = {};
                return n.eachComponent({mainType: "series", subType: t, query: i}, function (t) {
                    t[e.method] && t[e.method](i.name, i.dataIndex);
                    var n = t.getData();
                    n.each(function (e) {
                        var i = n.getName(e);
                        r[i] = t.isSelected(i) || !1
                    })
                }), {name: i.name, selected: r, seriesId: i.seriesId}
            })
        })
    }), vM = function (t) {
        return {
            getTargetSeries: function (e) {
                var i = {}, n = N();
                return e.eachSeriesByType(t, function (t) {
                    t.__paletteScope = i, n.set(t.uid, t)
                }), n
            }, reset: function (t) {
                var e = t.getRawData(), i = {}, n = t.getData();
                n.each(function (t) {
                    var e = n.getRawIndex(t);
                    i[e] = t
                }), e.each(function (r) {
                    var a, o = i[r], s = null != o && n.getItemVisual(o, "color", !0),
                        l = null != o && n.getItemVisual(o, "borderColor", !0);
                    if (s && l || (a = e.getItemModel(r)), !s) {
                        var u = a.get("itemStyle.color") || t.getColorFromPalette(e.getName(r) || r + "", t.__paletteScope, e.count());
                        null != o && n.setItemVisual(o, "color", u)
                    }
                    if (!l) {
                        var h = a.get("itemStyle.borderColor");
                        null != o && n.setItemVisual(o, "borderColor", h)
                    }
                })
            }
        }
    }, mM = Math.PI / 180, yM = function (t, e, i, n, r, a) {
        var o, s, l = t.getData(), u = [], h = !1, c = (t.get("minShowLabelAngle") || 0) * mM;
        l.each(function (n) {
            var a = l.getItemLayout(n), d = l.getItemModel(n), f = d.getModel("label"),
                p = f.get("position") || d.get("emphasis.label.position"), g = f.get("distanceToLabelLine"),
                v = f.get("alignTo"), m = xo(f.get("margin"), i), y = f.get("bleedMargin"), _ = f.getFont(),
                x = d.getModel("labelLine"), w = x.get("length");
            w = xo(w, i);
            var b = x.get("length2");
            if (b = xo(b, i), !(a.angle < c)) {
                var S, M, T, I, C = (a.startAngle + a.endAngle) / 2, D = Math.cos(C), A = Math.sin(C);
                o = a.cx, s = a.cy;
                var k = t.getFormattedLabel(n, "normal") || l.getName(n), L = Gi(k, _, I, "top"),
                    P = "inside" === p || "inner" === p;
                if ("center" === p) S = a.cx, M = a.cy, I = "center"; else {
                    var O = (P ? (a.r + a.r0) / 2 * D : a.r * D) + o, z = (P ? (a.r + a.r0) / 2 * A : a.r * A) + s;
                    if (S = O + 3 * D, M = z + 3 * A, !P) {
                        var R = O + D * (w + e - a.r), B = z + A * (w + e - a.r), E = R + (0 > D ? -1 : 1) * b, N = B;
                        S = "edge" === v ? 0 > D ? r + m : r + i - m : E + (0 > D ? -g : g), M = N, T = [[O, z], [R, B], [E, N]]
                    }
                    I = P ? "center" : "edge" === v ? D > 0 ? "right" : "left" : D > 0 ? "left" : "right"
                }
                var F, V = f.get("rotate");
                F = "number" == typeof V ? V * (Math.PI / 180) : V ? 0 > D ? -C + Math.PI : -C : 0, h = !!F, a.label = {
                    x: S,
                    y: M,
                    position: p,
                    height: L.height,
                    len: w,
                    len2: b,
                    linePoints: T,
                    textAlign: I,
                    verticalAlign: "middle",
                    rotation: F,
                    inside: P,
                    labelDistance: g,
                    labelAlignTo: v,
                    labelMargin: m,
                    bleedMargin: y,
                    textRect: L,
                    text: k,
                    font: _
                }, P || u.push(a.label)
            }
        }), !h && t.get("avoidLabelOverlap") && Hd(u, o, s, e, i, n, r, a)
    }, _M = 2 * Math.PI, xM = Math.PI / 180, wM = function (t, e, i) {
        e.eachSeriesByType(t, function (t) {
            var e = t.getData(), n = e.mapDimension("value"), r = Wd(t, i), a = t.get("center"), o = t.get("radius");
            x(o) || (o = [0, o]), x(a) || (a = [a, a]);
            var s = xo(r.width, i.getWidth()), l = xo(r.height, i.getHeight()), u = Math.min(s, l),
                h = xo(a[0], s) + r.x, c = xo(a[1], l) + r.y, d = xo(o[0], u / 2), f = xo(o[1], u / 2),
                p = -t.get("startAngle") * xM, g = t.get("minAngle") * xM, v = 0;
            e.each(n, function (t) {
                !isNaN(t) && v++
            });
            var m = e.getSum(n), y = Math.PI / (m || v) * 2, _ = t.get("clockwise"), w = t.get("roseType"),
                b = t.get("stillShowZeroSum"), S = e.getDataExtent(n);
            S[0] = 0;
            var M = _M, T = 0, I = p, C = _ ? 1 : -1;
            if (e.each(n, function (t, i) {
                var n;
                if (isNaN(t)) return void e.setItemLayout(i, {
                    angle: 0 / 0,
                    startAngle: 0 / 0,
                    endAngle: 0 / 0,
                    clockwise: _,
                    cx: h,
                    cy: c,
                    r0: d,
                    r: w ? 0 / 0 : f,
                    viewRect: r
                });
                n = "area" !== w ? 0 === m && b ? y : t * y : _M / v, g > n ? (n = g, M -= g) : T += t;
                var a = I + C * n;
                e.setItemLayout(i, {
                    angle: n,
                    startAngle: I,
                    endAngle: a,
                    clockwise: _,
                    cx: h,
                    cy: c,
                    r0: d,
                    r: w ? _o(t, S, [d, f]) : f,
                    viewRect: r
                }), I = a
            }), _M > M && v) if (.001 >= M) {
                var D = _M / v;
                e.each(n, function (t, i) {
                    if (!isNaN(t)) {
                        var n = e.getItemLayout(i);
                        n.angle = D, n.startAngle = p + C * i * D, n.endAngle = p + C * (i + 1) * D
                    }
                })
            } else y = M / T, I = p, e.each(n, function (t, i) {
                if (!isNaN(t)) {
                    var n = e.getItemLayout(i), r = n.angle === g ? g : t * y;
                    n.startAngle = I, n.endAngle = I + C * r, I += C * r
                }
            });
            yM(t, f, r.width, r.height, r.x, r.y)
        })
    }, bM = function (t) {
        return {
            seriesType: t, reset: function (t, e) {
                var i = e.findComponents({mainType: "legend"});
                if (i && i.length) {
                    var n = t.getData();
                    n.filterSelf(function (t) {
                        for (var e = n.getName(t), r = 0; r < i.length; r++) if (!i[r].isSelected(e)) return !1;
                        return !0
                    })
                }
            }
        }
    };
    gM("pie", [{type: "pieToggleSelect", event: "pieselectchanged", method: "toggleSelected"}, {
        type: "pieSelect",
        event: "pieselected",
        method: "select"
    }, {
        type: "pieUnSelect",
        event: "pieunselected",
        method: "unSelect"
    }]), Tu(vM("pie")), Mu(_(wM, "pie")), _u(bM("pie"));
    for (var SM = [126, 25], MM = [[[0, 3.5], [7, 11.2], [15, 11.9], [30, 7], [42, .7], [52, .7], [56, 7.7], [59, .7], [64, .7], [64, 0], [5, 0], [0, 3.5]], [[13, 16.1], [19, 14.7], [16, 21.7], [11, 23.1], [13, 16.1]], [[12, 32.2], [14, 38.5], [15, 38.5], [13, 32.2], [12, 32.2]], [[16, 47.6], [12, 53.2], [13, 53.2], [18, 47.6], [16, 47.6]], [[6, 64.4], [8, 70], [9, 70], [8, 64.4], [6, 64.4]], [[23, 82.6], [29, 79.8], [30, 79.8], [25, 82.6], [23, 82.6]], [[37, 70.7], [43, 62.3], [44, 62.3], [39, 70.7], [37, 70.7]], [[48, 51.1], [51, 45.5], [53, 45.5], [50, 51.1], [48, 51.1]], [[51, 35], [51, 28.7], [53, 28.7], [53, 35], [51, 35]], [[52, 22.4], [55, 17.5], [56, 17.5], [53, 22.4], [52, 22.4]], [[58, 12.6], [62, 7], [63, 7], [60, 12.6], [58, 12.6]], [[0, 3.5], [0, 93.1], [64, 93.1], [64, 0], [63, 0], [63, 92.4], [1, 92.4], [1, 3.5], [0, 3.5]]], TM = 0; TM < MM.length; TM++) for (var IM = 0; IM < MM[TM].length; IM++) MM[TM][IM][0] /= 10.5, MM[TM][IM][1] /= -14, MM[TM][IM][0] += SM[0], MM[TM][IM][1] += SM[1];
    var CM = function (t, e) {
            "china" === t && e.push(new Qh("鍗楁捣璇稿矝", p(MM, function (t) {
                return {type: "polygon", exterior: t}
            }), SM))
        }, DM = {"鍗楁捣璇稿矝": [32, 80], "骞夸笢": [0, -10], "棣欐腐": [10, 5], "婢抽棬": [-10, 10], "澶╂触": [5, 5]},
        AM = function (t, e) {
            if ("china" === t) {
                var i = DM[e.name];
                if (i) {
                    var n = e.center;
                    n[0] += i[0] / 10.5, n[1] += -i[1] / 14
                }
            }
        }, kM = {Russia: [100, 60], "United States": [-99, 38], "United States of America": [-99, 38]},
        LM = function (t, e) {
            if ("world" === t) {
                var i = kM[e.name];
                if (i) {
                    var n = e.center;
                    n[0] = i[0], n[1] = i[1]
                }
            }
        },
        PM = [[[123.45165252685547, 25.73527164402261], [123.49731445312499, 25.73527164402261], [123.49731445312499, 25.750734064600884], [123.45165252685547, 25.750734064600884], [123.45165252685547, 25.73527164402261]]],
        OM = function (t, e) {
            "china" === t && "鍙版咕" === e.name && e.geometries.push({type: "polygon", exterior: PM[0]})
        }, zM = sr(), RM = {
            load: function (t, e) {
                var i = zM(e).parsed;
                if (i) return i;
                var n, r = e.specialAreas || {}, a = e.geoJSON;
                try {
                    n = a ? tS(a) : []
                } catch (o) {
                    throw new Error("Invalid geoJson format\n" + o.message)
                }
                return CM(t, n), f(n, function (e) {
                    var i = e.name;
                    AM(t, e), LM(t, e), OM(t, e);
                    var n = r[i];
                    n && e.transformTo(n.left, n.top, n.width, n.height)
                }), zM(e).parsed = {regions: n, boundingRect: Xd(n)}
            }
        }, BM = sr(), EM = {
            load: function (t, e) {
                var i = BM(e).originRoot;
                if (i) return {root: i, boundingRect: BM(e).boundingRect};
                var n = Yd(e);
                return BM(e).originRoot = n.root, BM(e).boundingRect = n.boundingRect, n
            }, makeGraphic: function (t, e, i) {
                var n = BM(e), r = n.rootMap || (n.rootMap = N()), a = r.get(i);
                if (a) return a;
                var o = n.originRoot, s = n.boundingRect;
                return n.originRootHostKey ? a = Yd(e, s).root : (n.originRootHostKey = i, a = o), r.set(i, a)
            }, removeGraphic: function (t, e, i) {
                var n = BM(e), r = n.rootMap;
                r && r.removeKey(i), i === n.originRootHostKey && (n.originRootHostKey = null)
            }
        }, NM = {geoJSON: RM, svg: EM}, FM = {
            load: function (t, e) {
                var i, n = [], r = N(), a = N(), o = Zd(t);
                return f(o, function (o) {
                    var s = NM[o.type].load(t, o);
                    f(s.regions, function (t) {
                        var i = t.name;
                        e && e.hasOwnProperty(i) && (t = t.cloneShallow(i = e[i])), n.push(t), r.set(i, t), a.set(i, t.center)
                    });
                    var l = s.boundingRect;
                    l && (i ? i.union(l) : i = l.clone())
                }), {regions: n, regionsMap: r, nameCoordMap: a, boundingRect: i || new Si(0, 0, 0, 0)}
            }, makeGraphic: Ud("makeGraphic"), removeGraphic: Ud("removeGraphic")
        }, VM = Tx.extend({
            type: "series.map",
            dependencies: ["geo"],
            layoutMode: "box",
            needsDrawMap: !1,
            seriesGroup: [],
            getInitialData: function () {
                for (var t = cM(this, {
                    coordDimensions: ["value"],
                    encodeDefaulter: _(cs, this)
                }), e = t.mapDimension("value"), i = N(), n = [], r = [], a = 0, o = t.count(); o > a; a++) {
                    var s = t.getName(a);
                    i.set(s, !0), n.push({name: s, value: t.get(e, a), selected: Ks(t, a, "selected")})
                }
                var l = FM.load(this.getMapType(), this.option.nameMap);
                return f(l.regions, function (t) {
                    var e = t.name;
                    i.get(e) || (n.push({name: e}), r.push(e))
                }), this.updateSelectedMap(n), t.appendValues([], r), t
            },
            getHostGeoModel: function () {
                var t = this.option.geoIndex;
                return null != t ? this.dependentModels.geo[t] : null
            },
            getMapType: function () {
                return (this.getHostGeoModel() || this).option.map
            },
            getRawValue: function (t) {
                var e = this.getData();
                return e.get(e.mapDimension("value"), t)
            },
            getRegionModel: function (t) {
                var e = this.getData();
                return e.getItemModel(e.indexOfName(t))
            },
            formatTooltip: function (t) {
                for (var e = this.getData(), i = Bo(this.getRawValue(t)), n = e.getName(t), r = this.seriesGroup, a = [], o = 0; o < r.length; o++) {
                    var s = r[o].originalData.indexOfName(n), l = e.mapDimension("value");
                    isNaN(r[o].originalData.get(l, s)) || a.push(No(r[o].name))
                }
                return a.join(", ") + "<br />" + No(n + " : " + i)
            },
            getTooltipPosition: function (t) {
                if (null != t) {
                    var e = this.getData().getName(t), i = this.coordinateSystem, n = i.getRegion(e);
                    return n && i.dataToPoint(n.center)
                }
            },
            setZoom: function (t) {
                this.option.zoom = t
            },
            setCenter: function (t) {
                this.option.center = t
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "geo",
                map: "",
                left: "center",
                top: "center",
                aspectScale: .75,
                showLegendSymbol: !0,
                dataRangeHoverLink: !0,
                boundingCoords: null,
                center: null,
                zoom: 1,
                scaleLimit: null,
                label: {show: !1, color: "#000"},
                itemStyle: {borderWidth: .5, borderColor: "#444", areaColor: "#eee"},
                emphasis: {label: {show: !0, color: "rgb(100,0,0)"}, itemStyle: {areaColor: "rgba(255,215,0,0.8)"}}
            }
        });
    c(VM, dM);
    var HM = "\x00_ec_interaction_mutex";
    wu({type: "takeGlobalCursor", event: "globalCursorTaken", update: "update"}, function () {
    }), c(Kd, Sg);
    var GM = {axisPointer: 1, tooltip: 1, brush: 1};
    df.prototype = {
        constructor: df, draw: function (t, e, i, n) {
            var r = "geo" === t.mainType, a = t.getData && t.getData();
            r && e.eachComponent({mainType: "series", subType: "map"}, function (e) {
                a || e.getHostGeoModel() !== t || (a = e.getData())
            });
            var o = t.coordinateSystem;
            this._updateBackground(o);
            var s = this._regionsGroup, l = this.group;
            o._roamTransformable.transform && (l.transform = o._roamTransformable.transform.slice(), l.decomposeTransform());
            var u = o._rawTransformable.scale, h = o._rawTransformable.position;
            s.removeAll();
            var c = ["itemStyle"], d = ["emphasis", "itemStyle"], p = ["label"], g = ["emphasis", "label"], v = N();
            f(o.regions, function (e) {
                var i = v.get(e.name) || v.set(e.name, new pv),
                    n = new Zy({segmentIgnoreThreshold: 1, shape: {paths: []}});
                i.add(n);
                var o, m = t.getRegionModel(e.name) || t, y = m.getModel(c), _ = m.getModel(d), x = uf(y), w = uf(_),
                    b = m.getModel(p), S = m.getModel(g);
                if (a) {
                    o = a.indexOfName(e.name);
                    var M = a.getItemVisual(o, "color", !0);
                    M && (x.fill = M)
                }
                var T = function (t) {
                    return [t[0] * u[0] + h[0], t[1] * u[1] + h[1]]
                };
                f(e.geometries, function (t) {
                    if ("polygon" === t.type) {
                        for (var e = [], i = 0; i < t.exterior.length; ++i) e.push(T(t.exterior[i]));
                        n.shape.paths.push(new Ey({segmentIgnoreThreshold: 1, shape: {points: e}}));
                        for (var i = 0; i < (t.interiors ? t.interiors.length : 0); ++i) {
                            for (var r = t.interiors[i], e = [], a = 0; a < r.length; ++a) e.push(T(r[a]));
                            n.shape.paths.push(new Ey({segmentIgnoreThreshold: 1, shape: {points: e}}))
                        }
                    }
                }), n.setStyle(x), n.style.strokeNoScale = !0, n.culling = !0;
                var I = b.get("show"), C = S.get("show"), D = a && isNaN(a.get(a.mapDimension("value"), o)),
                    A = a && a.getItemLayout(o);
                if (r || D && (I || C) || A && A.showLabel) {
                    var k, L = r ? e.name : o;
                    (!a || o >= 0) && (k = t);
                    var P = new Ay({
                        position: T(e.center.slice()),
                        scale: [1 / l.scale[0], 1 / l.scale[1]],
                        z2: 10,
                        silent: !0
                    });
                    Va(P.style, P.hoverStyle = {}, b, S, {
                        labelFetcher: k,
                        labelDataIndex: L,
                        defaultText: e.name,
                        useInsideStyle: !1
                    }, {textAlign: "center", textVerticalAlign: "middle"}), i.add(P)
                }
                if (a) a.setItemGraphicEl(o, i); else {
                    var m = t.getRegionModel(e.name);
                    n.eventData = {
                        componentType: "geo",
                        componentIndex: t.componentIndex,
                        geoIndex: t.componentIndex,
                        name: e.name,
                        region: m && m.option || {}
                    }
                }
                var O = i.__regions || (i.__regions = []);
                O.push(e), i.highDownSilentOnTouch = !!t.get("selectedMode"), Ba(i, w), s.add(i)
            }), this._updateController(t, e, i), hf(this, t, s, i, n), cf(t, s)
        }, remove: function () {
            this._regionsGroup.removeAll(), this._backgroundGroup.removeAll(), this._controller.dispose(), this._mapName && FM.removeGraphic(this._mapName, this.uid), this._mapName = null, this._controllerHost = {}
        }, _updateBackground: function (t) {
            var e = t.map;
            this._mapName !== e && f(FM.makeGraphic(e, this.uid), function (t) {
                this._backgroundGroup.add(t)
            }, this), this._mapName = e
        }, _updateController: function (t, e, i) {
            function n() {
                var e = {type: "geoRoam", componentType: l};
                return e[l + "Id"] = t.id, e
            }

            var r = t.coordinateSystem, a = this._controller, s = this._controllerHost;
            s.zoomLimit = t.get("scaleLimit"), s.zoom = r.getZoom(), a.enable(t.get("roam") || !1);
            var l = t.mainType;
            a.off("pan").on("pan", function (t) {
                this._mouseDownFlag = !1, of(s, t.dx, t.dy), i.dispatchAction(o(n(), {dx: t.dx, dy: t.dy}))
            }, this), a.off("zoom").on("zoom", function (t) {
                if (this._mouseDownFlag = !1, sf(s, t.scale, t.originX, t.originY), i.dispatchAction(o(n(), {
                    zoom: t.scale,
                    originX: t.originX,
                    originY: t.originY
                })), this._updateGroup) {
                    var e = this.group.scale;
                    this._regionsGroup.traverse(function (t) {
                        "text" === t.type && t.attr("scale", [1 / e[0], 1 / e[1]])
                    })
                }
            }, this), a.setPointerChecker(function (e, n, a) {
                return r.getViewRectAfterRoam().contain(n, a) && !lf(e, i, t)
            })
        }
    };
    var WM = "__seriesMapHighDown", XM = "__seriesMapCallKey";
    Lu({
        type: "map", render: function (t, e, i, n) {
            if (!n || "mapToggleSelect" !== n.type || n.from !== this.uid) {
                var r = this.group;
                if (r.removeAll(), !t.getHostGeoModel()) {
                    if (n && "geoRoam" === n.type && "series" === n.componentType && n.seriesId === t.id) {
                        var a = this._mapDraw;
                        a && r.add(a.group)
                    } else if (t.needsDrawMap) {
                        var a = this._mapDraw || new df(i, !0);
                        r.add(a.group), a.draw(t, e, i, this, n), this._mapDraw = a
                    } else this._mapDraw && this._mapDraw.remove(), this._mapDraw = null;
                    t.get("showLegendSymbol") && e.getComponent("legend") && this._renderSymbols(t, e, i)
                }
            }
        }, remove: function () {
            this._mapDraw && this._mapDraw.remove(), this._mapDraw = null, this.group.removeAll()
        }, dispose: function () {
            this._mapDraw && this._mapDraw.remove(), this._mapDraw = null
        }, _renderSymbols: function (t) {
            var e = t.originalData, i = this.group;
            e.each(e.mapDimension("value"), function (n, r) {
                if (!isNaN(n)) {
                    var a = e.getItemLayout(r);
                    if (a && a.point) {
                        var s = a.point, l = a.offset, u = new ky({
                            style: {fill: t.getData().getVisual("color")},
                            shape: {cx: s[0] + 9 * l, cy: s[1], r: 3},
                            silent: !0,
                            z2: 8 + (l ? 0 : e_ + 1)
                        });
                        if (!l) {
                            var h = t.mainSeries.getData(), c = e.getName(r), d = h.indexOfName(c),
                                f = e.getItemModel(r), p = f.getModel("label"), g = f.getModel("emphasis.label"),
                                v = h.getItemGraphicEl(d), m = A(t.getFormattedLabel(d, "normal"), c),
                                y = A(t.getFormattedLabel(d, "emphasis"), m), x = v[WM], w = Math.random();
                            if (!x) {
                                x = v[WM] = {};
                                var b = _(ff, !0), S = _(ff, !1);
                                v.on("mouseover", b).on("mouseout", S).on("emphasis", b).on("normal", S)
                            }
                            v[XM] = w, o(x, {
                                recordVersion: w,
                                circle: u,
                                labelModel: p,
                                hoverLabelModel: g,
                                emphasisText: y,
                                normalText: m
                            }), pf(x, !1)
                        }
                        i.add(u)
                    }
                }
            })
        }
    }), wu({type: "geoRoam", event: "geoRoam", update: "updateTransform"}, function (t, e) {
        var i = t.componentType || "series";
        e.eachComponent({mainType: i, query: t}, function (e) {
            var n = e.coordinateSystem;
            if ("geo" === n.type) {
                var r = gf(n, t, e.get("scaleLimit"));
                e.setCenter && e.setCenter(r.center), e.setZoom && e.setZoom(r.zoom), "series" === i && f(e.seriesGroup, function (t) {
                    t.setCenter(r.center), t.setZoom(r.zoom)
                })
            }
        })
    });
    var YM = ae;
    c(vf, Fg), mf.prototype = {
        constructor: mf, type: "view", dimensions: ["x", "y"], setBoundingRect: function (t, e, i, n) {
            return this._rect = new Si(t, e, i, n), this._rect
        }, getBoundingRect: function () {
            return this._rect
        }, setViewRect: function (t, e, i, n) {
            this.transformTo(t, e, i, n), this._viewRect = new Si(t, e, i, n)
        }, transformTo: function (t, e, i, n) {
            var r = this.getBoundingRect(), a = this._rawTransformable;
            a.transform = r.calculateTransform(new Si(t, e, i, n)), a.decomposeTransform(), this._updateTransform()
        }, setCenter: function (t) {
            t && (this._center = t, this._updateCenterAndZoom())
        }, setZoom: function (t) {
            t = t || 1;
            var e = this.zoomLimit;
            e && (null != e.max && (t = Math.min(e.max, t)), null != e.min && (t = Math.max(e.min, t))), this._zoom = t, this._updateCenterAndZoom()
        }, getDefaultCenter: function () {
            var t = this.getBoundingRect(), e = t.x + t.width / 2, i = t.y + t.height / 2;
            return [e, i]
        }, getCenter: function () {
            return this._center || this.getDefaultCenter()
        }, getZoom: function () {
            return this._zoom || 1
        }, getRoamTransform: function () {
            return this._roamTransformable.getLocalTransform()
        }, _updateCenterAndZoom: function () {
            var t = this._rawTransformable.getLocalTransform(), e = this._roamTransformable,
                i = this.getDefaultCenter(), n = this.getCenter(), r = this.getZoom();
            n = ae([], n, t), i = ae([], i, t), e.origin = n, e.position = [i[0] - n[0], i[1] - n[1]], e.scale = [r, r], this._updateTransform()
        }, _updateTransform: function () {
            var t = this._roamTransformable, e = this._rawTransformable;
            e.parent = t, t.updateTransform(), e.updateTransform(), Pe(this.transform || (this.transform = []), e.transform || ke()), this._rawTransform = e.getLocalTransform(), this.invTransform = this.invTransform || [], Ee(this.invTransform, this.transform), this.decomposeTransform()
        }, getViewRect: function () {
            return this._viewRect
        }, getViewRectAfterRoam: function () {
            var t = this.getBoundingRect().clone();
            return t.applyTransform(this.transform), t
        }, dataToPoint: function (t, e, i) {
            var n = e ? this._rawTransform : this.transform;
            return i = i || [], n ? YM(i, t, n) : G(i, t)
        }, pointToData: function (t) {
            var e = this.invTransform;
            return e ? YM([], t, e) : [t[0], t[1]]
        }, convertToPixel: _(yf, "dataToPoint"), convertFromPixel: _(yf, "pointToData"), containPoint: function (t) {
            return this.getViewRectAfterRoam().contain(t[0], t[1])
        }
    }, c(mf, Fg), _f.prototype = {
        constructor: _f, type: "geo", dimensions: ["lng", "lat"], containCoord: function (t) {
            for (var e = this.regions, i = 0; i < e.length; i++) if (e[i].contain(t)) return !0;
            return !1
        }, transformTo: function (t, e, i, n) {
            var r = this.getBoundingRect(), a = this._invertLongitute;
            r = r.clone(), a && (r.y = -r.y - r.height);
            var o = this._rawTransformable;
            if (o.transform = r.calculateTransform(new Si(t, e, i, n)), o.decomposeTransform(), a) {
                var s = o.scale;
                s[1] = -s[1]
            }
            o.updateTransform(), this._updateTransform()
        }, getRegion: function (t) {
            return this._regionsMap.get(t)
        }, getRegionByCoord: function (t) {
            for (var e = this.regions, i = 0; i < e.length; i++) if (e[i].contain(t)) return e[i]
        }, addGeoCoord: function (t, e) {
            this._nameCoordMap.set(t, e)
        }, getGeoCoord: function (t) {
            return this._nameCoordMap.get(t)
        }, getBoundingRect: function () {
            return this._rect
        }, dataToPoint: function (t, e, i) {
            return "string" == typeof t && (t = this.getGeoCoord(t)), t ? mf.prototype.dataToPoint.call(this, t, e, i) : void 0
        }, convertToPixel: _(xf, "dataToPoint"), convertFromPixel: _(xf, "pointToData")
    }, c(_f, mf);
    var UM = {
        dimensions: _f.prototype.dimensions, create: function (t, e) {
            var i = [];
            t.eachComponent("geo", function (t, n) {
                var r = t.get("map"), a = t.get("aspectScale"), o = !0, s = lw.retrieveMap(r);
                s && s[0] && "svg" === s[0].type ? (null == a && (a = 1), o = !1) : null == a && (a = .75);
                var l = new _f(r + n, r, t.get("nameMap"), o);
                l.aspectScale = a, l.zoomLimit = t.get("scaleLimit"), i.push(l), bf(l, t), t.coordinateSystem = l, l.model = t, l.resize = wf, l.resize(t, e)
            }), t.eachSeries(function (t) {
                var e = t.get("coordinateSystem");
                if ("geo" === e) {
                    var n = t.get("geoIndex") || 0;
                    t.coordinateSystem = i[n]
                }
            });
            var n = {};
            return t.eachSeriesByType("map", function (t) {
                if (!t.getHostGeoModel()) {
                    var e = t.getMapType();
                    n[e] = n[e] || [], n[e].push(t)
                }
            }), f(n, function (t, n) {
                var r = p(t, function (t) {
                    return t.get("nameMap")
                }), o = new _f(n, n, a(r));
                o.zoomLimit = D.apply(null, p(t, function (t) {
                    return t.get("scaleLimit")
                })), i.push(o), o.resize = wf, o.aspectScale = t[0].get("aspectScale"), o.resize(t[0], e), f(t, function (t) {
                    t.coordinateSystem = o, bf(o, t)
                })
            }), i
        }, getFilledRegions: function (t, e, i) {
            for (var n = (t || []).slice(), r = N(), a = 0; a < n.length; a++) r.set(n[a].name, n[a]);
            var o = FM.load(e, i);
            return f(o.regions, function (t) {
                var e = t.name;
                !r.get(e) && n.push({name: e})
            }), n
        }
    };
    bu("geo", UM);
    var ZM = function (t) {
        var e = {};
        t.eachSeriesByType("map", function (i) {
            var n = i.getMapType();
            if (!i.getHostGeoModel() && !e[n]) {
                var r = {};
                f(i.seriesGroup, function (e) {
                    var i = e.coordinateSystem, n = e.originalData;
                    e.get("showLegendSymbol") && t.getComponent("legend") && n.each(n.mapDimension("value"), function (t, e) {
                        var a = n.getName(e), o = i.getRegion(a);
                        if (o && !isNaN(t)) {
                            var s = r[a] || 0, l = i.dataToPoint(o.center);
                            r[a] = s + 1, n.setItemLayout(e, {point: l, offset: s})
                        }
                    })
                });
                var a = i.getData();
                a.each(function (t) {
                    var e = a.getName(t), i = a.getItemLayout(t) || {};
                    i.showLabel = !r[e], a.setItemLayout(t, i)
                }), e[n] = !0
            }
        })
    }, qM = function (t) {
        t.eachSeriesByType("map", function (t) {
            var e = t.get("color"), i = t.getModel("itemStyle"), n = i.get("areaColor"),
                r = i.get("color") || e[t.seriesIndex % e.length];
            t.getData().setVisual({areaColor: n, color: r})
        })
    }, jM = function (t) {
        var e = {};
        t.eachSeriesByType("map", function (t) {
            var i = t.getHostGeoModel(), n = i ? "o" + i.id : "i" + t.getMapType();
            (e[n] = e[n] || []).push(t)
        }), f(e, function (t) {
            for (var e = Sf(p(t, function (t) {
                return t.getData()
            }), t[0].get("mapValueCalculation")), i = 0; i < t.length; i++) t[i].originalData = t[i].getData();
            for (var i = 0; i < t.length; i++) t[i].seriesGroup = t, t[i].needsDrawMap = 0 === i && !t[i].getHostGeoModel(), t[i].setData(e.cloneShallow()), t[i].mainSeries = t[0]
        })
    }, KM = function (t) {
        var e = [];
        f(t.series, function (t) {
            t && "map" === t.type && (e.push(t), t.map = t.map || t.mapType, s(t, t.mapLocation))
        })
    };
    Mu(ZM), Tu(qM), _u(Aw.PROCESSOR.STATISTIC, jM), yu(KM), gM("map", [{
        type: "mapToggleSelect",
        event: "mapselectchanged",
        method: "toggleSelected"
    }, {type: "mapSelect", event: "mapselected", method: "select"}, {
        type: "mapUnSelect",
        event: "mapunselected",
        method: "unSelect"
    }]);
    var $M = E_.extend({
        type: "geo",
        coordinateSystem: null,
        layoutMode: "box",
        init: function (t) {
            E_.prototype.init.apply(this, arguments), Qn(t, "label", ["show"])
        },
        optionUpdated: function () {
            var t = this.option, e = this;
            t.regions = UM.getFilledRegions(t.regions, t.map, t.nameMap), this._optionModelMap = g(t.regions || [], function (t, i) {
                return i.name && t.set(i.name, new co(i, e)), t
            }, N()), this.updateSelectedMap(t.regions)
        },
        defaultOption: {
            zlevel: 0,
            z: 0,
            show: !0,
            left: "center",
            top: "center",
            aspectScale: null,
            silent: !1,
            map: "",
            boundingCoords: null,
            center: null,
            zoom: 1,
            scaleLimit: null,
            label: {show: !1, color: "#000"},
            itemStyle: {borderWidth: .5, borderColor: "#444", color: "#eee"},
            emphasis: {label: {show: !0, color: "rgb(100,0,0)"}, itemStyle: {color: "rgba(255,215,0,0.8)"}},
            regions: []
        },
        getRegionModel: function (t) {
            return this._optionModelMap.get(t) || new co(null, this, this.ecModel)
        },
        getFormattedLabel: function (t, e) {
            var i = this.getRegionModel(t), n = i.get("label" + ("normal" === e ? "." : e + ".") + "formatter"),
                r = {name: t};
            return "function" == typeof n ? (r.status = e, n(r)) : "string" == typeof n ? n.replace("{a}", null != t ? t : "") : void 0
        },
        setZoom: function (t) {
            this.option.zoom = t
        },
        setCenter: function (t) {
            this.option.center = t
        }
    });
    c($M, dM), Au({
        type: "geo", init: function (t, e) {
            var i = new df(e, !0);
            this._mapDraw = i, this.group.add(i.group)
        }, render: function (t, e, i, n) {
            if (!n || "geoToggleSelect" !== n.type || n.from !== this.uid) {
                var r = this._mapDraw;
                t.get("show") ? r.draw(t, e, i, this, n) : this._mapDraw.group.removeAll(), this.group.silent = t.get("silent")
            }
        }, dispose: function () {
            this._mapDraw && this._mapDraw.remove()
        }
    }), Mf("toggleSelected", {type: "geoToggleSelect", event: "geoselectchanged"}), Mf("select", {
        type: "geoSelect",
        event: "geoselected"
    }), Mf("unSelect", {type: "geoUnSelect", event: "geounselected"}), Du({
        type: "title",
        layoutMode: {type: "box", ignoreSize: !0},
        defaultOption: {
            zlevel: 0,
            z: 6,
            show: !0,
            text: "",
            target: "blank",
            subtext: "",
            subtarget: "blank",
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            textStyle: {fontSize: 18, fontWeight: "bolder", color: "#333"},
            subtextStyle: {color: "#aaa"}
        }
    }), Au({
        type: "title", render: function (t, e, i) {
            if (this.group.removeAll(), t.get("show")) {
                var n = this.group, r = t.getModel("textStyle"), a = t.getModel("subtextStyle"), o = t.get("textAlign"),
                    s = A(t.get("textBaseline"), t.get("textVerticalAlign")), l = new Ay({
                        style: Ga({}, r, {text: t.get("text"), textFill: r.getTextColor()}, {disableBox: !0}),
                        z2: 10
                    }), u = l.getBoundingRect(), h = t.get("subtext"), c = new Ay({
                        style: Ga({}, a, {
                            text: h,
                            textFill: a.getTextColor(),
                            y: u.height + t.get("itemGap"),
                            textVerticalAlign: "top"
                        }, {disableBox: !0}), z2: 10
                    }), d = t.get("link"), f = t.get("sublink"), p = t.get("triggerEvent", !0);
                l.silent = !d && !p, c.silent = !f && !p, d && l.on("click", function () {
                    window.open(d, "_" + t.get("target"))
                }), f && c.on("click", function () {
                    window.open(f, "_" + t.get("subtarget"))
                }), l.eventData = c.eventData = p ? {
                    componentType: "title",
                    componentIndex: t.componentIndex
                } : null, n.add(l), h && n.add(c);
                var g = n.getBoundingRect(), v = t.getBoxLayoutParams();
                v.width = g.width, v.height = g.height;
                var m = qo(v, {width: i.getWidth(), height: i.getHeight()}, t.get("padding"));
                o || (o = t.get("left") || t.get("right"), "middle" === o && (o = "center"), "right" === o ? m.x += m.width : "center" === o && (m.x += m.width / 2)), s || (s = t.get("top") || t.get("bottom"), "center" === s && (s = "middle"), "bottom" === s ? m.y += m.height : "middle" === s && (m.y += m.height / 2), s = s || "top"), n.attr("position", [m.x, m.y]);
                var y = {textAlign: o, textVerticalAlign: s};
                l.setStyle(y), c.setStyle(y), g = n.getBoundingRect();
                var _ = m.margin, x = t.getItemStyle(["color", "opacity"]);
                x.fill = t.get("backgroundColor");
                var w = new Hy({
                    shape: {
                        x: g.x - _[3],
                        y: g.y - _[0],
                        width: g.width + _[1] + _[3],
                        height: g.height + _[0] + _[2],
                        r: t.get("borderRadius")
                    }, style: x, subPixelOptimize: !0, silent: !0
                });
                n.add(w)
            }
        }
    });
    var QM = Ex.legend.selector,
        JM = {all: {type: "all", title: n(QM.all)}, inverse: {type: "inverse", title: n(QM.inverse)}}, tT = Du({
            type: "legend.plain",
            dependencies: ["series"],
            layoutMode: {type: "box", ignoreSize: !0},
            init: function (t, e, i) {
                this.mergeDefaultAndTheme(t, i), t.selected = t.selected || {}, this._updateSelector(t)
            },
            mergeOption: function (t) {
                tT.superCall(this, "mergeOption", t), this._updateSelector(t)
            },
            _updateSelector: function (t) {
                var e = t.selector;
                e === !0 && (e = t.selector = ["all", "inverse"]), x(e) && f(e, function (t, i) {
                    b(t) && (t = {type: t}), e[i] = r(t, JM[t.type])
                })
            },
            optionUpdated: function () {
                this._updateData(this.ecModel);
                var t = this._data;
                if (t[0] && "single" === this.get("selectedMode")) {
                    for (var e = !1, i = 0; i < t.length; i++) {
                        var n = t[i].get("name");
                        if (this.isSelected(n)) {
                            this.select(n), e = !0;
                            break
                        }
                    }
                    !e && this.select(t[0].get("name"))
                }
            },
            _updateData: function (t) {
                var e = [], i = [];
                t.eachRawSeries(function (n) {
                    var r = n.name;
                    i.push(r);
                    var a;
                    if (n.legendVisualProvider) {
                        var o = n.legendVisualProvider, s = o.getAllNames();
                        t.isSeriesFiltered(n) || (i = i.concat(s)), s.length ? e = e.concat(s) : a = !0
                    } else a = !0;
                    a && nr(n) && e.push(n.name)
                }), this._availableNames = i;
                var n = this.get("data") || e, r = p(n, function (t) {
                    return ("string" == typeof t || "number" == typeof t) && (t = {name: t}), new co(t, this, this.ecModel)
                }, this);
                this._data = r
            },
            getData: function () {
                return this._data
            },
            select: function (t) {
                var e = this.option.selected, i = this.get("selectedMode");
                if ("single" === i) {
                    var n = this._data;
                    f(n, function (t) {
                        e[t.get("name")] = !1
                    })
                }
                e[t] = !0
            },
            unSelect: function (t) {
                "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
            },
            toggleSelected: function (t) {
                var e = this.option.selected;
                e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
            },
            allSelect: function () {
                var t = this._data, e = this.option.selected;
                f(t, function (t) {
                    e[t.get("name", !0)] = !0
                })
            },
            inverseSelect: function () {
                var t = this._data, e = this.option.selected;
                f(t, function (t) {
                    var i = t.get("name", !0);
                    e.hasOwnProperty(i) || (e[i] = !0), e[i] = !e[i]
                })
            },
            isSelected: function (t) {
                var e = this.option.selected;
                return !(e.hasOwnProperty(t) && !e[t]) && u(this._availableNames, t) >= 0
            },
            getOrient: function () {
                return "vertical" === this.get("orient") ? {index: 1, name: "vertical"} : {index: 0, name: "horizontal"}
            },
            defaultOption: {
                zlevel: 0,
                z: 4,
                show: !0,
                orient: "horizontal",
                left: "center",
                top: 0,
                align: "auto",
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderRadius: 0,
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                itemWidth: 25,
                itemHeight: 14,
                inactiveColor: "#ccc",
                inactiveBorderColor: "#ccc",
                itemStyle: {borderWidth: 0},
                textStyle: {color: "#333"},
                selectedMode: !0,
                selector: !1,
                selectorLabel: {
                    show: !0,
                    borderRadius: 10,
                    padding: [3, 5, 3, 5],
                    fontSize: 12,
                    fontFamily: " sans-serif",
                    color: "#666",
                    borderWidth: 1,
                    borderColor: "#666"
                },
                emphasis: {selectorLabel: {show: !0, color: "#eee", backgroundColor: "#666"}},
                selectorPosition: "auto",
                selectorItemGap: 7,
                selectorButtonGap: 10,
                tooltip: {show: !1}
            }
        });
    wu("legendToggleSelect", "legendselectchanged", _(Tf, "toggleSelected")), wu("legendAllSelect", "legendselectall", _(Tf, "allSelect")), wu("legendInverseSelect", "legendinverseselect", _(Tf, "inverseSelect")), wu("legendSelect", "legendselected", _(Tf, "select")), wu("legendUnSelect", "legendunselected", _(Tf, "unSelect"));
    var eT = _, iT = f, nT = pv, rT = Au({
        type: "legend.plain", newlineDisabled: !1, init: function () {
            this.group.add(this._contentGroup = new nT), this._backgroundEl, this.group.add(this._selectorGroup = new nT), this._isFirstRender = !0
        }, getContentGroup: function () {
            return this._contentGroup
        }, getSelectorGroup: function () {
            return this._selectorGroup
        }, render: function (t, e, i) {
            var n = this._isFirstRender;
            if (this._isFirstRender = !1, this.resetInner(), t.get("show", !0)) {
                var r = t.get("align"), a = t.get("orient");
                r && "auto" !== r || (r = "right" === t.get("left") && "vertical" === a ? "right" : "left");
                var o = t.get("selector", !0), l = t.get("selectorPosition", !0);
                !o || l && "auto" !== l || (l = "horizontal" === a ? "end" : "start"), this.renderInner(r, t, e, i, o, a, l);
                var u = t.getBoxLayoutParams(), h = {width: i.getWidth(), height: i.getHeight()}, c = t.get("padding"),
                    d = qo(u, h, c), f = this.layoutInner(t, r, d, n, o, l),
                    p = qo(s({width: f.width, height: f.height}, u), h, c);
                this.group.attr("position", [p.x - f.x, p.y - f.y]), this.group.add(this._backgroundEl = If(f, t))
            }
        }, resetInner: function () {
            this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll()
        }, renderInner: function (t, e, i, n, r, a, o) {
            var s = this.getContentGroup(), l = N(), u = e.get("selectedMode"), h = [];
            i.eachRawSeries(function (t) {
                !t.get("legendHoverLink") && h.push(t.id)
            }), iT(e.getData(), function (r, a) {
                var o = r.get("name");
                if (!this.newlineDisabled && ("" === o || "\n" === o)) return void s.add(new nT({newline: !0}));
                var c = i.getSeriesByName(o)[0];
                if (!l.get(o)) if (c) {
                    var d = c.getData(), f = d.getVisual("color"), p = d.getVisual("borderColor");
                    "function" == typeof f && (f = f(c.getDataParams(0))), "function" == typeof p && (p = p(c.getDataParams(0)));
                    var g = d.getVisual("legendSymbol") || "roundRect", v = d.getVisual("symbol"),
                        m = this._createItem(o, a, r, e, g, v, t, f, p, u);
                    m.on("click", eT(Df, o, null, n, h)).on("mouseover", eT(Af, c.name, null, n, h)).on("mouseout", eT(kf, c.name, null, n, h)), l.set(o, !0)
                } else i.eachRawSeries(function (i) {
                    if (!l.get(o) && i.legendVisualProvider) {
                        var s = i.legendVisualProvider;
                        if (!s.containName(o)) return;
                        var c = s.indexOfName(o), d = s.getItemVisual(c, "color"),
                            f = s.getItemVisual(c, "borderColor"), p = "roundRect",
                            g = this._createItem(o, a, r, e, p, null, t, d, f, u);
                        g.on("click", eT(Df, null, o, n, h)).on("mouseover", eT(Af, null, o, n, h)).on("mouseout", eT(kf, null, o, n, h)), l.set(o, !0)
                    }
                }, this)
            }, this), r && this._createSelector(r, e, n, a, o)
        }, _createSelector: function (t, e, i) {
            function n(t) {
                var n = t.type, a = new Ay({
                    style: {x: 0, y: 0, align: "center", verticalAlign: "middle"}, onclick: function () {
                        i.dispatchAction({type: "all" === n ? "legendAllSelect" : "legendInverseSelect"})
                    }
                });
                r.add(a);
                var o = e.getModel("selectorLabel"), s = e.getModel("emphasis.selectorLabel");
                Va(a.style, a.hoverStyle = {}, o, s, {defaultText: t.title, isRectText: !1}), Ba(a)
            }

            var r = this.getSelectorGroup();
            iT(t, function (t) {
                n(t)
            })
        }, _createItem: function (t, e, i, n, r, a, s, l, u, h) {
            var c = n.get("itemWidth"), d = n.get("itemHeight"), f = n.get("inactiveColor"),
                p = n.get("inactiveBorderColor"), g = n.get("symbolKeepAspect"), v = n.getModel("itemStyle"),
                m = n.isSelected(t), y = new nT, _ = i.getModel("textStyle"), x = i.get("icon"),
                w = i.getModel("tooltip"), b = w.parentModel;
            r = x || r;
            var S = Uh(r, 0, 0, c, d, m ? l : f, null == g ? !0 : g);
            if (y.add(Cf(S, r, v, u, p, m)), !x && a && (a !== r || "none" === a)) {
                var M = .8 * d;
                "none" === a && (a = "circle");
                var T = Uh(a, (c - M) / 2, (d - M) / 2, M, M, m ? l : f, null == g ? !0 : g);
                y.add(Cf(T, a, v, u, p, m))
            }
            var I = "left" === s ? c + 5 : -5, C = s, D = n.get("formatter"), A = t;
            "string" == typeof D && D ? A = D.replace("{name}", null != t ? t : "") : "function" == typeof D && (A = D(t)), y.add(new Ay({
                style: Ga({}, _, {
                    text: A,
                    x: I,
                    y: d / 2,
                    textFill: m ? _.getTextColor() : f,
                    textAlign: C,
                    textVerticalAlign: "middle"
                })
            }));
            var k = new Hy({
                shape: y.getBoundingRect(),
                invisible: !0,
                tooltip: w.get("show") ? o({
                    content: t,
                    formatter: b.get("formatter", !0) || function () {
                        return t
                    },
                    formatterParams: {componentType: "legend", legendIndex: n.componentIndex, name: t, $vars: ["name"]}
                }, w.option) : null
            });
            return y.add(k), y.eachChild(function (t) {
                t.silent = !0
            }), k.silent = !h, this.getContentGroup().add(y), Ba(y), y.__legendDataIndex = e, y
        }, layoutInner: function (t, e, i, n, r, a) {
            var o = this.getContentGroup(), s = this.getSelectorGroup();
            z_(t.get("orient"), o, t.get("itemGap"), i.width, i.height);
            var l = o.getBoundingRect(), u = [-l.x, -l.y];
            if (r) {
                z_("horizontal", s, t.get("selectorItemGap", !0));
                var h = s.getBoundingRect(), c = [-h.x, -h.y], d = t.get("selectorButtonGap", !0),
                    f = t.getOrient().index, p = 0 === f ? "width" : "height", g = 0 === f ? "height" : "width",
                    v = 0 === f ? "y" : "x";
                "end" === a ? c[f] += l[p] + d : u[f] += h[p] + d, c[1 - f] += l[g] / 2 - h[g] / 2, s.attr("position", c), o.attr("position", u);
                var m = {x: 0, y: 0};
                return m[p] = l[p] + d + h[p], m[g] = Math.max(l[g], h[g]), m[v] = Math.min(0, h[v] + c[1 - f]), m
            }
            return o.attr("position", u), this.group.getBoundingRect()
        }, remove: function () {
            this.getContentGroup().removeAll(), this._isFirstRender = !0
        }
    }), aT = function (t) {
        var e = t.findComponents({mainType: "legend"});
        e && e.length && t.filterSeries(function (t) {
            for (var i = 0; i < e.length; i++) if (!e[i].isSelected(t.name)) return !1;
            return !0
        })
    };
    _u(Aw.PROCESSOR.SERIES_FILTER, aT), E_.registerSubTypeDefaulter("legend", function () {
        return "plain"
    });
    var oT = tT.extend({
        type: "legend.scroll",
        setScrollDataIndex: function (t) {
            this.option.scrollDataIndex = t
        },
        defaultOption: {
            scrollDataIndex: 0,
            pageButtonItemGap: 5,
            pageButtonGap: null,
            pageButtonPosition: "end",
            pageFormatter: "{current}/{total}",
            pageIcons: {
                horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
                vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
            },
            pageIconColor: "#2f4554",
            pageIconInactiveColor: "#aaa",
            pageIconSize: 15,
            pageTextStyle: {color: "#333"},
            animationDurationUpdate: 800
        },
        init: function (t, e, i, n) {
            var r = $o(t);
            oT.superCall(this, "init", t, e, i, n), Lf(this, t, r)
        },
        mergeOption: function (t, e) {
            oT.superCall(this, "mergeOption", t, e), Lf(this, this.option, t)
        }
    }), sT = pv, lT = ["width", "height"], uT = ["x", "y"], hT = rT.extend({
        type: "legend.scroll", newlineDisabled: !0, init: function () {
            hT.superCall(this, "init"), this._currentIndex = 0, this.group.add(this._containerGroup = new sT), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new sT), this._showController
        }, resetInner: function () {
            hT.superCall(this, "resetInner"), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null
        }, renderInner: function (t, e, i, n, r, a, o) {
            function s(t, i) {
                var r = t + "DataIndex",
                    a = oo(e.get("pageIcons", !0)[e.getOrient().name][i], {onclick: y(l._pageGo, l, r, e, n)}, {
                        x: -h[0] / 2,
                        y: -h[1] / 2,
                        width: h[0],
                        height: h[1]
                    });
                a.name = t, u.add(a)
            }

            var l = this;
            hT.superCall(this, "renderInner", t, e, i, n, r, a, o);
            var u = this._controllerGroup, h = e.get("pageIconSize", !0);
            x(h) || (h = [h, h]), s("pagePrev", 0);
            var c = e.getModel("pageTextStyle");
            u.add(new Ay({
                name: "pageText",
                style: {
                    textFill: c.getTextColor(),
                    font: c.getFont(),
                    textVerticalAlign: "middle",
                    textAlign: "center"
                },
                silent: !0
            })), s("pageNext", 1)
        }, layoutInner: function (t, e, i, r, a, o) {
            var s = this.getSelectorGroup(), l = t.getOrient().index, u = lT[l], h = uT[l], c = lT[1 - l],
                d = uT[1 - l];
            a && z_("horizontal", s, t.get("selectorItemGap", !0));
            var f = t.get("selectorButtonGap", !0), p = s.getBoundingRect(), g = [-p.x, -p.y], v = n(i);
            a && (v[u] = i[u] - p[u] - f);
            var m = this._layoutContentAndController(t, r, v, l, u, c, d);
            if (a) {
                if ("end" === o) g[l] += m[u] + f; else {
                    var y = p[u] + f;
                    g[l] -= y, m[h] -= y
                }
                m[u] += p[u] + f, g[1 - l] += m[d] + m[c] / 2 - p[c] / 2, m[c] = Math.max(m[c], p[c]), m[d] = Math.min(m[d], p[d] + g[1 - l]), s.attr("position", g)
            }
            return m
        }, _layoutContentAndController: function (t, e, i, n, r, a, o) {
            var s = this.getContentGroup(), l = this._containerGroup, u = this._controllerGroup;
            z_(t.get("orient"), s, t.get("itemGap"), n ? i.width : null, n ? null : i.height), z_("horizontal", u, t.get("pageButtonItemGap", !0));
            var h = s.getBoundingRect(), c = u.getBoundingRect(), d = this._showController = h[r] > i[r],
                f = [-h.x, -h.y];
            e || (f[n] = s.position[n]);
            var p = [0, 0], g = [-c.x, -c.y], v = A(t.get("pageButtonGap", !0), t.get("itemGap", !0));
            if (d) {
                var m = t.get("pageButtonPosition", !0);
                "end" === m ? g[n] += i[r] - c[r] : p[n] += c[r] + v
            }
            g[1 - n] += h[a] / 2 - c[a] / 2, s.attr("position", f), l.attr("position", p), u.attr("position", g);
            var y = {x: 0, y: 0};
            if (y[r] = d ? i[r] : h[r], y[a] = Math.max(h[a], c[a]), y[o] = Math.min(0, c[o] + g[1 - n]), l.__rectSize = i[r], d) {
                var _ = {x: 0, y: 0};
                _[r] = Math.max(i[r] - c[r] - v, 0), _[a] = y[a], l.setClipPath(new Hy({shape: _})), l.__rectSize = _[r]
            } else u.eachChild(function (t) {
                t.attr({invisible: !0, silent: !0})
            });
            var x = this._getPageInfo(t);
            return null != x.pageIndex && Qa(s, {position: x.contentPosition}, d ? t : !1), this._updatePageInfoView(t, x), y
        }, _pageGo: function (t, e, i) {
            var n = this._getPageInfo(e)[t];
            null != n && i.dispatchAction({type: "legendScroll", scrollDataIndex: n, legendId: e.id})
        }, _updatePageInfoView: function (t, e) {
            var i = this._controllerGroup;
            f(["pagePrev", "pageNext"], function (n) {
                var r = null != e[n + "DataIndex"], a = i.childOfName(n);
                a && (a.setStyle("fill", r ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), a.cursor = r ? "pointer" : "default")
            });
            var n = i.childOfName("pageText"), r = t.get("pageFormatter"), a = e.pageIndex, o = null != a ? a + 1 : 0,
                s = e.pageCount;
            n && r && n.setStyle("text", b(r) ? r.replace("{current}", o).replace("{total}", s) : r({
                current: o,
                total: s
            }))
        }, _getPageInfo: function (t) {
            function e(t) {
                if (t) {
                    var e = t.getBoundingRect(), i = e[l] + t.position[o];
                    return {s: i, e: i + e[s], i: t.__legendDataIndex}
                }
            }

            function i(t, e) {
                return t.e >= e && t.s <= e + a
            }

            var n = t.get("scrollDataIndex", !0), r = this.getContentGroup(), a = this._containerGroup.__rectSize,
                o = t.getOrient().index, s = lT[o], l = uT[o], u = this._findTargetItemIndex(n), h = r.children(),
                c = h[u], d = h.length, f = d ? 1 : 0, p = {
                    contentPosition: r.position.slice(),
                    pageCount: f,
                    pageIndex: f - 1,
                    pagePrevDataIndex: null,
                    pageNextDataIndex: null
                };
            if (!c) return p;
            var g = e(c);
            p.contentPosition[o] = -g.s;
            for (var v = u + 1, m = g, y = g, _ = null; d >= v; ++v) _ = e(h[v]), (!_ && y.e > m.s + a || _ && !i(_, m.s)) && (m = y.i > m.i ? y : _, m && (null == p.pageNextDataIndex && (p.pageNextDataIndex = m.i), ++p.pageCount)), y = _;
            for (var v = u - 1, m = g, y = g, _ = null; v >= -1; --v) _ = e(h[v]), _ && i(y, _.s) || !(m.i < y.i) || (y = m, null == p.pagePrevDataIndex && (p.pagePrevDataIndex = m.i), ++p.pageCount, ++p.pageIndex), m = _;
            return p
        }, _findTargetItemIndex: function (t) {
            var e, i, n = this.getContentGroup();
            return this._showController && n.eachChild(function (n, r) {
                var a = n.__legendDataIndex;
                null == i && null != a && (i = r), a === t && (e = r)
            }), null != e ? e : i
        }
    });
    wu("legendScroll", "legendscroll", function (t, e) {
        var i = t.scrollDataIndex;
        null != i && e.eachComponent({mainType: "legend", subType: "scroll", query: t}, function (t) {
            t.setScrollDataIndex(i)
        })
    });
    var cT = function (t, e) {
        var i, n = [], r = t.seriesIndex;
        if (null == r || !(i = e.getSeriesByIndex(r))) return {point: []};
        var a = i.getData(), o = or(a, t);
        if (null == o || 0 > o || x(o)) return {point: []};
        var s = a.getItemGraphicEl(o), l = i.coordinateSystem;
        if (i.getTooltipPosition) n = i.getTooltipPosition(o) || []; else if (l && l.dataToPoint) n = l.dataToPoint(a.getValues(p(l.dimensions, function (t) {
            return a.mapDimension(t)
        }), o, !0)) || []; else if (s) {
            var u = s.getBoundingRect().clone();
            u.applyTransform(s.transform), n = [u.x + u.width / 2, u.y + u.height / 2]
        }
        return {point: n, el: s}
    }, dT = f, fT = _, pT = sr(), gT = function (t, e, i) {
        var n = t.currTrigger, r = [t.x, t.y], a = t, o = t.dispatchAction || y(i.dispatchAction, i),
            s = e.getComponent("axisPointer").coordSysAxesInfo;
        if (s) {
            Hf(r) && (r = cT({seriesIndex: a.seriesIndex, dataIndex: a.dataIndex}, e).point);
            var l = Hf(r), u = a.axesInfo, h = s.axesInfo, c = "leave" === n || Hf(r), d = {}, f = {},
                p = {list: [], map: {}}, g = {showPointer: fT(zf, f), showTooltip: fT(Rf, p)};
            dT(s.coordSysMap, function (t, e) {
                var i = l || t.containPoint(r);
                dT(s.coordSysAxesInfo[e], function (t) {
                    var e = t.axis, n = Ff(u, t);
                    if (!c && i && (!u || n)) {
                        var a = n && n.value;
                        null != a || l || (a = e.pointToData(r)), null != a && Pf(t, a, g, !1, d)
                    }
                })
            });
            var v = {};
            return dT(h, function (t, e) {
                var i = t.linkGroup;
                i && !f[e] && dT(i.axesInfo, function (e, n) {
                    var r = f[n];
                    if (e !== t && r) {
                        var a = r.value;
                        i.mapper && (a = t.axis.scale.parse(i.mapper(a, Vf(e), Vf(t)))), v[t.key] = a
                    }
                })
            }), dT(v, function (t, e) {
                Pf(h[e], t, g, !0, d)
            }), Bf(f, h, d), Ef(p, r, t, o), Nf(h, o, i), d
        }
    }, vT = (Du({
        type: "axisPointer",
        coordSysAxesInfo: null,
        defaultOption: {
            show: "auto",
            triggerOn: null,
            zlevel: 0,
            z: 50,
            type: "line",
            snap: !1,
            triggerTooltip: !0,
            value: null,
            status: null,
            link: [],
            animation: null,
            animationDurationUpdate: 200,
            lineStyle: {color: "#aaa", width: 1, type: "solid"},
            shadowStyle: {color: "rgba(150,150,150,0.3)"},
            label: {
                show: !0,
                formatter: null,
                precision: "auto",
                margin: 3,
                color: "#fff",
                padding: [5, 7, 5, 7],
                backgroundColor: "auto",
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: "#aaa"
            },
            handle: {
                show: !1,
                icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
                size: 45,
                margin: 50,
                color: "#333",
                shadowBlur: 3,
                shadowColor: "#aaa",
                shadowOffsetX: 0,
                shadowOffsetY: 2,
                throttle: 40
            }
        }
    }), sr()), mT = f, yT = Au({
        type: "axisPointer", render: function (t, e, i) {
            var n = e.getComponent("tooltip"), r = t.get("triggerOn") || n && n.get("triggerOn") || "mousemove|click";
            Gf("axisPointer", i, function (t, e, i) {
                "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && i({
                    type: "updateAxisPointer",
                    currTrigger: t,
                    x: e && e.offsetX,
                    y: e && e.offsetY
                })
            })
        }, remove: function (t, e) {
            qf(e.getZr(), "axisPointer"), yT.superApply(this._model, "remove", arguments)
        }, dispose: function (t, e) {
            qf("axisPointer", e), yT.superApply(this._model, "dispose", arguments)
        }
    }), _T = sr(), xT = n, wT = y;
    jf.prototype = {
        _group: null,
        _lastGraphicKey: null,
        _handle: null,
        _dragging: !1,
        _lastValue: null,
        _lastStatus: null,
        _payloadInfo: null,
        animationThreshold: 15,
        render: function (t, e, i, n) {
            var r = e.get("value"), a = e.get("status");
            if (this._axisModel = t, this._axisPointerModel = e, this._api = i, n || this._lastValue !== r || this._lastStatus !== a) {
                this._lastValue = r, this._lastStatus = a;
                var o = this._group, s = this._handle;
                if (!a || "hide" === a) return o && o.hide(), void (s && s.hide());
                o && o.show(), s && s.show();
                var l = {};
                this.makeElOption(l, r, t, e, i);
                var u = l.graphicKey;
                u !== this._lastGraphicKey && this.clear(i), this._lastGraphicKey = u;
                var h = this._moveAnimation = this.determineAnimation(t, e);
                if (o) {
                    var c = _(Kf, e, h);
                    this.updatePointerEl(o, l, c, e), this.updateLabelEl(o, l, c, e)
                } else o = this._group = new pv, this.createPointerEl(o, l, t, e), this.createLabelEl(o, l, t, e), i.getZr().add(o);
                tp(o, e, !0), this._renderHandle(r)
            }
        },
        remove: function (t) {
            this.clear(t)
        },
        dispose: function (t) {
            this.clear(t)
        },
        determineAnimation: function (t, e) {
            var i = e.get("animation"), n = t.axis, r = "category" === n.type, a = e.get("snap");
            if (!a && !r) return !1;
            if ("auto" === i || null == i) {
                var o = this.animationThreshold;
                if (r && n.getBandWidth() > o) return !0;
                if (a) {
                    var s = rd(t).seriesDataCount, l = n.getExtent();
                    return Math.abs(l[0] - l[1]) / s > o
                }
                return !1
            }
            return i === !0
        },
        makeElOption: function () {
        },
        createPointerEl: function (t, e) {
            var i = e.pointer;
            if (i) {
                var n = _T(t).pointerEl = new d_[i.type](xT(e.pointer));
                t.add(n)
            }
        },
        createLabelEl: function (t, e, i, n) {
            if (e.label) {
                var r = _T(t).labelEl = new Hy(xT(e.label));
                t.add(r), Qf(r, n)
            }
        },
        updatePointerEl: function (t, e, i) {
            var n = _T(t).pointerEl;
            n && e.pointer && (n.setStyle(e.pointer.style), i(n, {shape: e.pointer.shape}))
        },
        updateLabelEl: function (t, e, i, n) {
            var r = _T(t).labelEl;
            r && (r.setStyle(e.label.style), i(r, {shape: e.label.shape, position: e.label.position}), Qf(r, n))
        },
        _renderHandle: function (t) {
            if (!this._dragging && this.updateHandleTransform) {
                var e = this._axisPointerModel, i = this._api.getZr(), n = this._handle, r = e.getModel("handle"),
                    a = e.get("status");
                if (!r.get("show") || !a || "hide" === a) return n && i.remove(n), void (this._handle = null);
                var o;
                this._handle || (o = !0, n = this._handle = oo(r.get("icon"), {
                    cursor: "move",
                    draggable: !0,
                    onmousemove: function (t) {
                        Ag(t.event)
                    },
                    onmousedown: wT(this._onHandleDragMove, this, 0, 0),
                    drift: wT(this._onHandleDragMove, this),
                    ondragend: wT(this._onHandleDragEnd, this)
                }), i.add(n)), tp(n, e, !1);
                var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
                n.setStyle(r.getItemStyle(null, s));
                var l = r.get("size");
                x(l) || (l = [l, l]), n.attr("scale", [l[0] / 2, l[1] / 2]), gl(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, o)
            }
        },
        _moveHandleToValue: function (t, e) {
            Kf(this._axisPointerModel, !e && this._moveAnimation, this._handle, Jf(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
        },
        _onHandleDragMove: function (t, e) {
            var i = this._handle;
            if (i) {
                this._dragging = !0;
                var n = this.updateHandleTransform(Jf(i), [t, e], this._axisModel, this._axisPointerModel);
                this._payloadInfo = n, i.stopAnimation(), i.attr(Jf(n)), _T(i).lastProp = null, this._doDispatchAxisPointer()
            }
        },
        _doDispatchAxisPointer: function () {
            var t = this._handle;
            if (t) {
                var e = this._payloadInfo, i = this._axisModel;
                this._api.dispatchAction({
                    type: "updateAxisPointer",
                    x: e.cursorPoint[0],
                    y: e.cursorPoint[1],
                    tooltipOption: e.tooltipOption,
                    axesInfo: [{axisDim: i.axis.dim, axisIndex: i.componentIndex}]
                })
            }
        },
        _onHandleDragEnd: function () {
            this._dragging = !1;
            var t = this._handle;
            if (t) {
                var e = this._axisPointerModel.get("value");
                this._moveHandleToValue(e), this._api.dispatchAction({type: "hideTip"})
            }
        },
        getHandleTransform: null,
        updateHandleTransform: null,
        clear: function (t) {
            this._lastValue = null, this._lastStatus = null;
            var e = t.getZr(), i = this._group, n = this._handle;
            e && i && (this._lastGraphicKey = null, i && e.remove(i), n && e.remove(n), this._group = null, this._handle = null, this._payloadInfo = null)
        },
        doClear: function () {
        },
        buildLabel: function (t, e, i) {
            return i = i || 0, {x: t[i], y: t[1 - i], width: e[i], height: e[1 - i]}
        }
    }, jf.prototype.constructor = jf, gr(jf);
    var bT = jf.extend({
        makeElOption: function (t, e, i, n, r) {
            var a = i.axis, o = a.grid, s = n.get("type"), l = up(o, a).getOtherAxis(a).getGlobalExtent(),
                u = a.toGlobalCoord(a.dataToCoord(e, !0));
            if (s && "none" !== s) {
                var h = ep(n), c = ST[s](a, u, l);
                c.style = h, t.graphicKey = c.type, t.pointer = c
            }
            var d = hd(o.model, i);
            op(e, t, d, i, n, r)
        }, getHandleTransform: function (t, e, i) {
            var n = hd(e.axis.grid.model, e, {labelInside: !1});
            return n.labelMargin = i.get("handle.margin"), {
                position: ap(e.axis, t, n),
                rotation: n.rotation + (n.labelDirection < 0 ? Math.PI : 0)
            }
        }, updateHandleTransform: function (t, e, i) {
            var n = i.axis, r = n.grid, a = n.getGlobalExtent(!0), o = up(r, n).getOtherAxis(n).getGlobalExtent(),
                s = "x" === n.dim ? 0 : 1, l = t.position;
            l[s] += e[s], l[s] = Math.min(a[1], l[s]), l[s] = Math.max(a[0], l[s]);
            var u = (o[1] + o[0]) / 2, h = [u, u];
            h[s] = l[s];
            var c = [{verticalAlign: "middle"}, {align: "center"}];
            return {position: l, rotation: t.rotation, cursorPoint: h, tooltipOption: c[s]}
        }
    }), ST = {
        line: function (t, e, i) {
            var n = sp([e, i[0]], [e, i[1]], hp(t));
            return {type: "Line", subPixelOptimize: !0, shape: n}
        }, shadow: function (t, e, i) {
            var n = Math.max(1, t.getBandWidth()), r = i[1] - i[0];
            return {type: "Rect", shape: lp([e - n / 2, i[0]], [n, r], hp(t))}
        }
    };
    NS.registerAxisPointerClass("CartesianAxisPointer", bT), yu(function (t) {
        if (t) {
            (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
            var e = t.axisPointer.link;
            e && !x(e) && (t.axisPointer.link = [e])
        }
    }), _u(Aw.PROCESSOR.STATISTIC, function (t, e) {
        t.getComponent("axisPointer").coordSysAxesInfo = $c(t, e)
    }), wu({
        type: "updateAxisPointer",
        event: "updateAxisPointer",
        update: ":updateAxisPointer"
    }, gT), Du({
        type: "tooltip",
        dependencies: ["axisPointer"],
        defaultOption: {
            zlevel: 0,
            z: 60,
            show: !0,
            showContent: !0,
            trigger: "item",
            triggerOn: "mousemove|click",
            alwaysShowContent: !1,
            displayMode: "single",
            renderMode: "auto",
            confine: !1,
            showDelay: 0,
            hideDelay: 100,
            transitionDuration: .4,
            enterable: !1,
            backgroundColor: "rgba(50,50,50,0.7)",
            borderColor: "#333",
            borderRadius: 4,
            borderWidth: 0,
            padding: 5,
            extraCssText: "",
            axisPointer: {
                type: "line",
                axis: "auto",
                animation: "auto",
                animationDurationUpdate: 200,
                animationEasingUpdate: "exponentialOut",
                crossStyle: {color: "#999", width: 1, type: "dashed", textStyle: {}}
            },
            textStyle: {color: "#fff", fontSize: 14}
        }
    });
    var MT = f, TT = Eo, IT = ["", "-webkit-", "-moz-", "-o-"],
        CT = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
    pp.prototype = {
        constructor: pp, _enterable: !0, update: function () {
            var t = this._container, e = t.currentStyle || document.defaultView.getComputedStyle(t), i = t.style;
            "absolute" !== i.position && "absolute" !== e.position && (i.position = "relative")
        }, show: function (t) {
            clearTimeout(this._hideTimeout);
            var e = this.el;
            e.style.cssText = CT + fp(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", this._show = !0
        }, setContent: function (t) {
            this.el.innerHTML = null == t ? "" : t
        }, setEnterable: function (t) {
            this._enterable = t
        }, getSize: function () {
            var t = this.el;
            return [t.clientWidth, t.clientHeight]
        }, moveTo: function (t, e) {
            var i, n = this._zr;
            n && n.painter && (i = n.painter.getViewportRootOffset()) && (t += i.offsetLeft, e += i.offsetTop);
            var r = this.el.style;
            r.left = t + "px", r.top = e + "px", this._x = t, this._y = e
        }, hide: function () {
            this.el.style.display = "none", this._show = !1
        }, hideLater: function (t) {
            !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide())
        }, isShow: function () {
            return this._show
        }, getOuterSize: function () {
            var t = this.el.clientWidth, e = this.el.clientHeight;
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var i = document.defaultView.getComputedStyle(this.el);
                i && (t += parseInt(i.borderLeftWidth, 10) + parseInt(i.borderRightWidth, 10), e += parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10))
            }
            return {width: t, height: e}
        }
    }, gp.prototype = {
        constructor: gp, _enterable: !0, update: function () {
        }, show: function () {
            this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), this._show = !0
        }, setContent: function (t, e, i) {
            this.el && this._zr.remove(this.el);
            for (var n = {}, r = t, a = "{marker", o = "|}", s = r.indexOf(a); s >= 0;) {
                var l = r.indexOf(o), u = r.substr(s + a.length, l - s - a.length);
                n["marker" + u] = u.indexOf("sub") > -1 ? {
                    textWidth: 4,
                    textHeight: 4,
                    textBorderRadius: 2,
                    textBackgroundColor: e[u],
                    textOffset: [3, 0]
                } : {
                    textWidth: 10,
                    textHeight: 10,
                    textBorderRadius: 5,
                    textBackgroundColor: e[u]
                }, r = r.substr(l + 1), s = r.indexOf("{marker")
            }
            this.el = new Ay({
                style: {
                    rich: n,
                    text: t,
                    textLineHeight: 20,
                    textBackgroundColor: i.get("backgroundColor"),
                    textBorderRadius: i.get("borderRadius"),
                    textFill: i.get("textStyle.color"),
                    textPadding: i.get("padding")
                }, z: i.get("z")
            }), this._zr.add(this.el);
            var h = this;
            this.el.on("mouseover", function () {
                h._enterable && (clearTimeout(h._hideTimeout), h._show = !0), h._inContent = !0
            }), this.el.on("mouseout", function () {
                h._enterable && h._show && h.hideLater(h._hideDelay), h._inContent = !1
            })
        }, setEnterable: function (t) {
            this._enterable = t
        }, getSize: function () {
            var t = this.el.getBoundingRect();
            return [t.width, t.height]
        }, moveTo: function (t, e) {
            this.el && this.el.attr("position", [t, e])
        }, hide: function () {
            this.el && this.el.hide(), this._show = !1
        }, hideLater: function (t) {
            !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide())
        }, isShow: function () {
            return this._show
        }, getOuterSize: function () {
            var t = this.getSize();
            return {width: t[0], height: t[1]}
        }
    };
    var DT = y, AT = f, kT = xo, LT = new Hy({shape: {x: -1, y: -1, width: 2, height: 2}});
    Au({
        type: "tooltip", init: function (t, e) {
            if (!eg.node) {
                var i = t.getComponent("tooltip"), n = i.get("renderMode");
                this._renderMode = dr(n);
                var r;
                "html" === this._renderMode ? (r = new pp(e.getDom(), e), this._newLine = "<br/>") : (r = new gp(e), this._newLine = "\n"), this._tooltipContent = r
            }
        }, render: function (t, e, i) {
            if (!eg.node) {
                this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = i, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
                var n = this._tooltipContent;
                n.update(), n.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow()
            }
        }, _initGlobalListener: function () {
            var t = this._tooltipModel, e = t.get("triggerOn");
            Gf("itemTooltip", this._api, DT(function (t, i, n) {
                "none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(i, n) : "leave" === t && this._hide(n))
            }, this))
        }, _keepShow: function () {
            var t = this._tooltipModel, e = this._ecModel, i = this._api;
            if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
                var n = this;
                clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
                    !i.isDisposed() && n.manuallyShowTip(t, e, i, {x: n._lastX, y: n._lastY})
                })
            }
        }, manuallyShowTip: function (t, e, i, n) {
            if (n.from !== this.uid && !eg.node) {
                var r = mp(n, i);
                this._ticket = "";
                var a = n.dataByCoordSys;
                if (n.tooltip && null != n.x && null != n.y) {
                    var o = LT;
                    o.position = [n.x, n.y], o.update(), o.tooltip = n.tooltip, this._tryShow({
                        offsetX: n.x,
                        offsetY: n.y,
                        target: o
                    }, r)
                } else if (a) this._tryShow({
                    offsetX: n.x,
                    offsetY: n.y,
                    position: n.position,
                    event: {},
                    dataByCoordSys: n.dataByCoordSys,
                    tooltipOption: n.tooltipOption
                }, r); else if (null != n.seriesIndex) {
                    if (this._manuallyAxisShowTip(t, e, i, n)) return;
                    var s = cT(n, e), l = s.point[0], u = s.point[1];
                    null != l && null != u && this._tryShow({
                        offsetX: l,
                        offsetY: u,
                        position: n.position,
                        target: s.el,
                        event: {}
                    }, r)
                } else null != n.x && null != n.y && (i.dispatchAction({
                    type: "updateAxisPointer",
                    x: n.x,
                    y: n.y
                }), this._tryShow({
                    offsetX: n.x,
                    offsetY: n.y,
                    position: n.position,
                    target: i.getZr().findHover(n.x, n.y).target,
                    event: {}
                }, r))
            }
        }, manuallyHideTip: function (t, e, i, n) {
            var r = this._tooltipContent;
            !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, n.from !== this.uid && this._hide(mp(n, i))
        }, _manuallyAxisShowTip: function (t, e, i, n) {
            var r = n.seriesIndex, a = n.dataIndex, o = e.getComponent("axisPointer").coordSysAxesInfo;
            if (null != r && null != a && null != o) {
                var s = e.getSeriesByIndex(r);
                if (s) {
                    var l = s.getData(), t = vp([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]);
                    if ("axis" === t.get("trigger")) return i.dispatchAction({
                        type: "updateAxisPointer",
                        seriesIndex: r,
                        dataIndex: a,
                        position: n.position
                    }), !0
                }
            }
        }, _tryShow: function (t, e) {
            var i = t.target, n = this._tooltipModel;
            if (n) {
                this._lastX = t.offsetX, this._lastY = t.offsetY;
                var r = t.dataByCoordSys;
                r && r.length ? this._showAxisTooltip(r, t) : i && null != i.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, i, e)) : i && i.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, i, e)) : (this._lastDataByCoordSys = null, this._hide(e))
            }
        }, _showOrMove: function (t, e) {
            var i = t.get("showDelay");
            e = y(e, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(e, i) : e()
        }, _showAxisTooltip: function (t, e) {
            var i = this._ecModel, n = this._tooltipModel, a = [e.offsetX, e.offsetY], o = [], s = [],
                l = vp([e.tooltipOption, n]), u = this._renderMode, h = this._newLine, c = {};
            AT(t, function (t) {
                AT(t.dataByAxis, function (t) {
                    var e = i.getComponent(t.axisDim + "Axis", t.axisIndex), n = t.value, a = [];
                    if (e && null != n) {
                        var l = rp(n, e.axis, i, t.seriesDataIndices, t.valueLabelOpt);
                        f(t.seriesDataIndices, function (o) {
                            var h = i.getSeriesByIndex(o.seriesIndex), d = o.dataIndexInside,
                                f = h && h.getDataParams(d);
                            if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = Vh(e.axis, n), f.axisValueLabel = l, f) {
                                s.push(f);
                                var p, g = h.formatTooltip(d, !0, null, u);
                                if (S(g)) {
                                    p = g.html;
                                    var v = g.markers;
                                    r(c, v)
                                } else p = g;
                                a.push(p)
                            }
                        });
                        var d = l;
                        o.push("html" !== u ? a.join(h) : (d ? No(d) + h : "") + a.join(h))
                    }
                })
            }, this), o.reverse(), o = o.join(this._newLine + this._newLine);
            var d = e.position;
            this._showOrMove(l, function () {
                this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, d, a[0], a[1], this._tooltipContent, s) : this._showTooltipContent(l, o, s, Math.random(), a[0], a[1], d, void 0, c)
            })
        }, _showSeriesItemTooltip: function (t, e, i) {
            var n = this._ecModel, r = e.seriesIndex, a = n.getSeriesByIndex(r), o = e.dataModel || a, s = e.dataIndex,
                l = e.dataType, u = o.getData(),
                h = vp([u.getItemModel(s), o, a && (a.coordinateSystem || {}).model, this._tooltipModel]),
                c = h.get("trigger");
            if (null == c || "item" === c) {
                var d, f, p = o.getDataParams(s, l), g = o.formatTooltip(s, !1, l, this._renderMode);
                S(g) ? (d = g.html, f = g.markers) : (d = g, f = null);
                var v = "item_" + o.name + "_" + s;
                this._showOrMove(h, function () {
                    this._showTooltipContent(h, d, p, v, t.offsetX, t.offsetY, t.position, t.target, f)
                }), i({
                    type: "showTip",
                    dataIndexInside: s,
                    dataIndex: u.getRawIndex(s),
                    seriesIndex: r,
                    from: this.uid
                })
            }
        }, _showComponentItemTooltip: function (t, e, i) {
            var n = e.tooltip;
            if ("string" == typeof n) {
                var r = n;
                n = {content: r, formatter: r}
            }
            var a = new co(n, this._tooltipModel, this._ecModel), o = a.get("content"), s = Math.random();
            this._showOrMove(a, function () {
                this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e)
            }), i({type: "showTip", from: this.uid})
        }, _showTooltipContent: function (t, e, i, n, r, a, o, s, l) {
            if (this._ticket = "", t.get("showContent") && t.get("show")) {
                var u = this._tooltipContent, h = t.get("formatter");
                o = o || t.get("position");
                var c = e;
                if (h && "string" == typeof h) c = Fo(h, i, !0); else if ("function" == typeof h) {
                    var d = DT(function (e, n) {
                        e === this._ticket && (u.setContent(n, l, t), this._updatePosition(t, o, r, a, u, i, s))
                    }, this);
                    this._ticket = n, c = h(i, n, d)
                }
                u.setContent(c, l, t), u.show(t), this._updatePosition(t, o, r, a, u, i, s)
            }
        }, _updatePosition: function (t, e, i, n, r, a, o) {
            var s = this._api.getWidth(), l = this._api.getHeight();
            e = e || t.get("position");
            var u = r.getSize(), h = t.get("align"), c = t.get("verticalAlign"), d = o && o.getBoundingRect().clone();
            if (o && d.applyTransform(o.transform), "function" == typeof e && (e = e([i, n], a, r.el, d, {
                viewSize: [s, l],
                contentSize: u.slice()
            })), x(e)) i = kT(e[0], s), n = kT(e[1], l); else if (S(e)) {
                e.width = u[0], e.height = u[1];
                var f = qo(e, {width: s, height: l});
                i = f.x, n = f.y, h = null, c = null
            } else if ("string" == typeof e && o) {
                var p = xp(e, d, u);
                i = p[0], n = p[1]
            } else {
                var p = yp(i, n, r, s, l, h ? null : 20, c ? null : 20);
                i = p[0], n = p[1]
            }
            if (h && (i -= wp(h) ? u[0] / 2 : "right" === h ? u[0] : 0), c && (n -= wp(c) ? u[1] / 2 : "bottom" === c ? u[1] : 0), t.get("confine")) {
                var p = _p(i, n, r, s, l);
                i = p[0], n = p[1]
            }
            r.moveTo(i, n)
        }, _updateContentNotChangedOnAxis: function (t) {
            var e = this._lastDataByCoordSys, i = !!e && e.length === t.length;
            return i && AT(e, function (e, n) {
                var r = e.dataByAxis || {}, a = t[n] || {}, o = a.dataByAxis || [];
                i &= r.length === o.length, i && AT(r, function (t, e) {
                    var n = o[e] || {}, r = t.seriesDataIndices || [], a = n.seriesDataIndices || [];
                    i &= t.value === n.value && t.axisType === n.axisType && t.axisId === n.axisId && r.length === a.length, i && AT(r, function (t, e) {
                        var n = a[e];
                        i &= t.seriesIndex === n.seriesIndex && t.dataIndex === n.dataIndex
                    })
                })
            }), this._lastDataByCoordSys = t, !!i
        }, _hide: function (t) {
            this._lastDataByCoordSys = null, t({type: "hideTip", from: this.uid})
        }, dispose: function (t, e) {
            eg.node || (this._tooltipContent.hide(), qf("itemTooltip", e))
        }
    }), wu({type: "showTip", event: "showTip", update: "tooltip:manuallyShowTip"}, function () {
    }), wu({type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip"}, function () {
    });
    var PT = f, OT = function (t) {
        var e = t && t.visualMap;
        x(e) || (e = e ? [e] : []), PT(e, function (t) {
            if (t) {
                bp(t, "splitList") && !bp(t, "pieces") && (t.pieces = t.splitList, delete t.splitList);
                var e = t.pieces;
                e && x(e) && PT(e, function (t) {
                    S(t) && (bp(t, "start") && !bp(t, "min") && (t.min = t.start), bp(t, "end") && !bp(t, "max") && (t.max = t.end))
                })
            }
        })
    };
    E_.registerSubTypeDefaulter("visualMap", function (t) {
        return t.categories || (t.pieces ? t.pieces.length > 0 : t.splitNumber > 0) && !t.calculable ? "piecewise" : "continuous"
    });
    var zT = f, RT = S, BT = -1, ET = function (t) {
        var e = t.mappingMethod, i = t.type, r = this.option = n(t);
        this.type = i, this.mappingMethod = e, this._normalizeData = FT[e];
        var a = NT[i];
        this.applyVisual = a.applyVisual, this.getColorMapper = a.getColorMapper, this._doMap = a._doMap[e], "piecewise" === e ? (Tp(r), Sp(r)) : "category" === e ? r.categories ? Mp(r) : Tp(r, !0) : (O("linear" !== e || r.dataExtent), Tp(r))
    };
    ET.prototype = {
        constructor: ET, mapValueToVisual: function (t) {
            var e = this._normalizeData(t);
            return this._doMap(e, t)
        }, getNormalizer: function () {
            return y(this._normalizeData, this)
        }
    };
    var NT = ET.visualHandlers = {
        color: {
            applyVisual: Dp("color"), getColorMapper: function () {
                var t = this.option;
                return y("category" === t.mappingMethod ? function (t, e) {
                    return !e && (t = this._normalizeData(t)), Ap.call(this, t)
                } : function (e, i, n) {
                    var r = !!n;
                    return !i && (e = this._normalizeData(e)), n = ii(e, t.parsedVisual, n), r ? n : oi(n, "rgba")
                }, this)
            }, _doMap: {
                linear: function (t) {
                    return oi(ii(t, this.option.parsedVisual), "rgba")
                }, category: Ap, piecewise: function (t, e) {
                    var i = Pp.call(this, e);
                    return null == i && (i = oi(ii(t, this.option.parsedVisual), "rgba")), i
                }, fixed: kp
            }
        },
        colorHue: Ip(function (t, e) {
            return ri(t, e)
        }),
        colorSaturation: Ip(function (t, e) {
            return ri(t, null, e)
        }),
        colorLightness: Ip(function (t, e) {
            return ri(t, null, null, e)
        }),
        colorAlpha: Ip(function (t, e) {
            return ai(t, e)
        }),
        opacity: {applyVisual: Dp("opacity"), _doMap: Lp([0, 1])},
        liftZ: {applyVisual: Dp("liftZ"), _doMap: {linear: kp, category: kp, piecewise: kp, fixed: kp}},
        symbol: {
            applyVisual: function (t, e, i) {
                var n = this.mapValueToVisual(t);
                if (b(n)) i("symbol", n); else if (RT(n)) for (var r in n) n.hasOwnProperty(r) && i(r, n[r])
            }, _doMap: {
                linear: Cp, category: Ap, piecewise: function (t, e) {
                    var i = Pp.call(this, e);
                    return null == i && (i = Cp.call(this, t)), i
                }, fixed: kp
            }
        },
        symbolSize: {applyVisual: Dp("symbolSize"), _doMap: Lp([0, 1])}
    }, FT = {
        linear: function (t) {
            return _o(t, this.option.dataExtent, [0, 1], !0)
        }, piecewise: function (t) {
            var e = this.option.pieceList, i = ET.findPieceIndex(t, e, !0);
            return null != i ? _o(i, [0, e.length - 1], [0, 1], !0) : void 0
        }, category: function (t) {
            var e = this.option.categories ? this.option.categoryMap[t] : t;
            return null == e ? BT : e
        }, fixed: V
    };
    ET.listVisualTypes = function () {
        var t = [];
        return f(NT, function (e, i) {
            t.push(i)
        }), t
    }, ET.addVisualHandler = function (t, e) {
        NT[t] = e
    }, ET.isValidType = function (t) {
        return NT.hasOwnProperty(t)
    }, ET.eachVisual = function (t, e, i) {
        S(t) ? f(t, e, i) : e.call(i, t)
    }, ET.mapVisual = function (t, e, i) {
        var n, r = x(t) ? [] : S(t) ? {} : (n = !0, null);
        return ET.eachVisual(t, function (t, a) {
            var o = e.call(i, t, a);
            n ? r = o : r[a] = o
        }), r
    }, ET.retrieveVisuals = function (t) {
        var e, i = {};
        return t && zT(NT, function (n, r) {
            t.hasOwnProperty(r) && (i[r] = t[r], e = !0)
        }), e ? i : null
    }, ET.prepareVisualTypes = function (t) {
        if (RT(t)) {
            var e = [];
            zT(t, function (t, i) {
                e.push(i)
            }), t = e
        } else {
            if (!x(t)) return [];
            t = t.slice()
        }
        return t.sort(function (t, e) {
            return "color" === e && "color" !== t && 0 === t.indexOf("color") ? 1 : -1
        }), t
    }, ET.dependsOn = function (t, e) {
        return "color" === e ? !(!t || 0 !== t.indexOf(e)) : t === e
    }, ET.findPieceIndex = function (t, e, i) {
        function n(e, i) {
            var n = Math.abs(e - t);
            a > n && (a = n, r = i)
        }

        for (var r, a = 1 / 0, o = 0, s = e.length; s > o; o++) {
            var l = e[o].value;
            if (null != l) {
                if (l === t || "string" == typeof l && l === t + "") return o;
                i && n(l, o)
            }
        }
        for (var o = 0, s = e.length; s > o; o++) {
            var u = e[o], h = u.interval, c = u.close;
            if (h) {
                if (h[0] === -1 / 0) {
                    if (zp(c[1], t, h[1])) return o
                } else if (1 / 0 === h[1]) {
                    if (zp(c[0], h[0], t)) return o
                } else if (zp(c[0], h[0], t) && zp(c[1], t, h[1])) return o;
                i && n(h[0], o), i && n(h[1], o)
            }
        }
        return i ? 1 / 0 === t ? e.length - 1 : t === -1 / 0 ? 0 : r : void 0
    };
    var VT = f, HT = Aw.VISUAL.COMPONENT;
    Tu(HT, {
        createOnAllSeries: !0, reset: function (t, e) {
            var i = [];
            return e.eachComponent("visualMap", function (e) {
                var n = t.pipelineContext;
                !e.isTargetSeries(t) || n && n.large || i.push(Np(e.stateList, e.targetVisuals, y(e.getValueState, e), e.getDataDimension(t.getData())))
            }), i
        }
    }), Tu(HT, {
        createOnAllSeries: !0, reset: function (t, e) {
            var i = t.getData(), n = [];
            e.eachComponent("visualMap", function (e) {
                if (e.isTargetSeries(t)) {
                    var r = e.getVisualMeta(y(Fp, null, t, e)) || {stops: [], outerColors: []},
                        a = e.getDataDimension(i), o = i.getDimensionInfo(a);
                    null != o && (r.dimension = o.index, n.push(r))
                }
            }), t.getData().setVisual("visualMeta", n)
        }
    });
    var GT = {
        get: function (t, e, i) {
            var r = n((WT[t] || {})[e]);
            return i && x(r) ? r[r.length - 1] : r
        }
    }, WT = {
        color: {active: ["#006edd", "#e0ffff"], inactive: ["rgba(0,0,0,0)"]},
        colorHue: {active: [0, 360], inactive: [0, 0]},
        colorSaturation: {active: [.3, 1], inactive: [0, 0]},
        colorLightness: {active: [.9, .5], inactive: [0, 0]},
        colorAlpha: {active: [.3, 1], inactive: [0, 0]},
        opacity: {active: [.3, 1], inactive: [0, 0]},
        symbol: {active: ["circle", "roundRect", "diamond"], inactive: ["none"]},
        symbolSize: {active: [10, 50], inactive: [0, 0]}
    }, XT = ET.mapVisual, YT = ET.eachVisual, UT = x, ZT = f, qT = bo, jT = _o, KT = V, $T = Du({
        type: "visualMap",
        dependencies: ["series"],
        stateList: ["inRange", "outOfRange"],
        replacableOptionKeys: ["inRange", "outOfRange", "target", "controller", "color"],
        dataBound: [-1 / 0, 1 / 0],
        layoutMode: {type: "box", ignoreSize: !0},
        defaultOption: {
            show: !0,
            zlevel: 0,
            z: 4,
            seriesIndex: "all",
            min: 0,
            max: 200,
            dimension: null,
            inRange: null,
            outOfRange: null,
            left: 0,
            right: null,
            top: null,
            bottom: 0,
            itemWidth: null,
            itemHeight: null,
            inverse: !1,
            orient: "vertical",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            contentColor: "#5793f3",
            inactiveColor: "#aaa",
            borderWidth: 0,
            padding: 5,
            textGap: 10,
            precision: 0,
            color: null,
            formatter: null,
            text: null,
            textStyle: {color: "#333"}
        },
        init: function (t, e, i) {
            this._dataExtent, this.targetVisuals = {}, this.controllerVisuals = {}, this.textStyleModel, this.itemSize, this.mergeDefaultAndTheme(t, i)
        },
        optionUpdated: function (t, e) {
            var i = this.option;
            eg.canvasSupported || (i.realtime = !1), !e && Ep(i, t, this.replacableOptionKeys), this.textStyleModel = this.getModel("textStyle"), this.resetItemSize(), this.completeVisualOption()
        },
        resetVisual: function (t) {
            var e = this.stateList;
            t = y(t, this), this.controllerVisuals = Bp(this.option.controller, e, t), this.targetVisuals = Bp(this.option.target, e, t)
        },
        getTargetSeriesIndices: function () {
            var t = this.option.seriesIndex, e = [];
            return null == t || "all" === t ? this.ecModel.eachSeries(function (t, i) {
                e.push(i)
            }) : e = $n(t), e
        },
        eachTargetSeries: function (t, e) {
            f(this.getTargetSeriesIndices(), function (i) {
                t.call(e, this.ecModel.getSeriesByIndex(i))
            }, this)
        },
        isTargetSeries: function (t) {
            var e = !1;
            return this.eachTargetSeries(function (i) {
                i === t && (e = !0)
            }), e
        },
        formatValueText: function (t, e, i) {
            function n(t) {
                return t === l[0] ? "min" : t === l[1] ? "max" : (+t).toFixed(Math.min(s, 20))
            }

            var r, a, o = this.option, s = o.precision, l = this.dataBound, u = o.formatter;
            return i = i || ["<", ">"], x(t) && (t = t.slice(), r = !0), a = e ? t : r ? [n(t[0]), n(t[1])] : n(t), b(u) ? u.replace("{value}", r ? a[0] : a).replace("{value2}", r ? a[1] : a) : w(u) ? r ? u(t[0], t[1]) : u(t) : r ? t[0] === l[0] ? i[0] + " " + a[1] : t[1] === l[1] ? i[1] + " " + a[0] : a[0] + " - " + a[1] : a
        },
        resetExtent: function () {
            var t = this.option, e = qT([t.min, t.max]);
            this._dataExtent = e
        },
        getDataDimension: function (t) {
            var e = this.option.dimension, i = t.dimensions;
            if (null != e || i.length) {
                if (null != e) return t.getDimension(e);
                for (var n = t.dimensions, r = n.length - 1; r >= 0; r--) {
                    var a = n[r], o = t.getDimensionInfo(a);
                    if (!o.isCalculationCoord) return a
                }
            }
        },
        getExtent: function () {
            return this._dataExtent.slice()
        },
        completeVisualOption: function () {
            function t(t) {
                UT(o.color) && !t.inRange && (t.inRange = {color: o.color.slice().reverse()}), t.inRange = t.inRange || {color: a.get("gradientColor")}, ZT(this.stateList, function (e) {
                    var i = t[e];
                    if (b(i)) {
                        var n = GT.get(i, "active", h);
                        n ? (t[e] = {}, t[e][i] = n) : delete t[e]
                    }
                }, this)
            }

            function e(t, e, i) {
                var n = t[e], r = t[i];
                n && !r && (r = t[i] = {}, ZT(n, function (t, e) {
                    if (ET.isValidType(e)) {
                        var i = GT.get(e, "inactive", h);
                        null != i && (r[e] = i, "color" !== e || r.hasOwnProperty("opacity") || r.hasOwnProperty("colorAlpha") || (r.opacity = [0, 0]))
                    }
                }))
            }

            function i(t) {
                var e = (t.inRange || {}).symbol || (t.outOfRange || {}).symbol,
                    i = (t.inRange || {}).symbolSize || (t.outOfRange || {}).symbolSize, r = this.get("inactiveColor");
                ZT(this.stateList, function (a) {
                    var o = this.itemSize, s = t[a];
                    s || (s = t[a] = {color: h ? r : [r]}), null == s.symbol && (s.symbol = e && n(e) || (h ? "roundRect" : ["roundRect"])), null == s.symbolSize && (s.symbolSize = i && n(i) || (h ? o[0] : [o[0], o[0]])), s.symbol = XT(s.symbol, function (t) {
                        return "none" === t || "square" === t ? "roundRect" : t
                    });
                    var l = s.symbolSize;
                    if (null != l) {
                        var u = -1 / 0;
                        YT(l, function (t) {
                            t > u && (u = t)
                        }), s.symbolSize = XT(l, function (t) {
                            return jT(t, [0, u], [0, o[0]], !0)
                        })
                    }
                }, this)
            }

            var a = this.ecModel, o = this.option, s = {inRange: o.inRange, outOfRange: o.outOfRange},
                l = o.target || (o.target = {}), u = o.controller || (o.controller = {});
            r(l, s), r(u, s);
            var h = this.isCategory();
            t.call(this, l), t.call(this, u), e.call(this, l, "inRange", "outOfRange"), i.call(this, u)
        },
        resetItemSize: function () {
            this.itemSize = [parseFloat(this.get("itemWidth")), parseFloat(this.get("itemHeight"))]
        },
        isCategory: function () {
            return !!this.option.categories
        },
        setSelected: KT,
        getValueState: KT,
        getVisualMeta: KT
    }), QT = [20, 140], JT = $T.extend({
        type: "visualMap.continuous",
        defaultOption: {
            align: "auto",
            calculable: !1,
            range: null,
            realtime: !0,
            itemHeight: null,
            itemWidth: null,
            hoverLink: !0,
            hoverLinkDataSize: null,
            hoverLinkOnHandle: null
        },
        optionUpdated: function () {
            JT.superApply(this, "optionUpdated", arguments), this.resetExtent(), this.resetVisual(function (t) {
                t.mappingMethod = "linear", t.dataExtent = this.getExtent()
            }), this._resetRange()
        },
        resetItemSize: function () {
            JT.superApply(this, "resetItemSize", arguments);
            var t = this.itemSize;
            "horizontal" === this._orient && t.reverse(), (null == t[0] || isNaN(t[0])) && (t[0] = QT[0]), (null == t[1] || isNaN(t[1])) && (t[1] = QT[1])
        },
        _resetRange: function () {
            var t = this.getExtent(), e = this.option.range;
            !e || e.auto ? (t.auto = 1, this.option.range = t) : x(e) && (e[0] > e[1] && e.reverse(), e[0] = Math.max(e[0], t[0]), e[1] = Math.min(e[1], t[1]))
        },
        completeVisualOption: function () {
            $T.prototype.completeVisualOption.apply(this, arguments), f(this.stateList, function (t) {
                var e = this.option.controller[t].symbolSize;
                e && e[0] !== e[1] && (e[0] = 0)
            }, this)
        },
        setSelected: function (t) {
            this.option.range = t.slice(), this._resetRange()
        },
        getSelected: function () {
            var t = this.getExtent(), e = bo((this.get("range") || []).slice());
            return e[0] > t[1] && (e[0] = t[1]), e[1] > t[1] && (e[1] = t[1]), e[0] < t[0] && (e[0] = t[0]), e[1] < t[0] && (e[1] = t[0]), e
        },
        getValueState: function (t) {
            var e = this.option.range, i = this.getExtent();
            return (e[0] <= i[0] || e[0] <= t) && (e[1] >= i[1] || t <= e[1]) ? "inRange" : "outOfRange"
        },
        findTargetDataIndices: function (t) {
            var e = [];
            return this.eachTargetSeries(function (i) {
                var n = [], r = i.getData();
                r.each(this.getDataDimension(r), function (e, i) {
                    t[0] <= e && e <= t[1] && n.push(i)
                }, this), e.push({seriesId: i.id, dataIndex: n})
            }, this), e
        },
        getVisualMeta: function (t) {
            function e(e, i) {
                r.push({value: e, color: t(e, i)})
            }

            for (var i = Vp(this, "outOfRange", this.getExtent()), n = Vp(this, "inRange", this.option.range.slice()), r = [], a = 0, o = 0, s = n.length, l = i.length; l > o && (!n.length || i[o] <= n[0]); o++) i[o] < n[a] && e(i[o], "outOfRange");
            for (var u = 1; s > a; a++, u = 0) u && r.length && e(n[a], "outOfRange"), e(n[a], "inRange");
            for (var u = 1; l > o; o++) (!n.length || n[n.length - 1] < i[o]) && (u && (r.length && e(r[r.length - 1].value, "outOfRange"), u = 0), e(i[o], "outOfRange"));
            var h = r.length;
            return {stops: r, outerColors: [h ? r[0].color : "transparent", h ? r[h - 1].color : "transparent"]}
        }
    }), tI = Au({
        type: "visualMap", autoPositionValues: {left: 1, right: 1, top: 1, bottom: 1}, init: function (t, e) {
            this.ecModel = t, this.api = e, this.visualMapModel
        }, render: function (t) {
            return this.visualMapModel = t, t.get("show") === !1 ? void this.group.removeAll() : void this.doRender.apply(this, arguments)
        }, renderBackground: function (t) {
            var e = this.visualMapModel, i = M_(e.get("padding") || 0), n = t.getBoundingRect();
            t.add(new Hy({
                z2: -1,
                silent: !0,
                shape: {x: n.x - i[3], y: n.y - i[0], width: n.width + i[3] + i[1], height: n.height + i[0] + i[2]},
                style: {fill: e.get("backgroundColor"), stroke: e.get("borderColor"), lineWidth: e.get("borderWidth")}
            }))
        }, getControllerVisual: function (t, e, i) {
            function n(t) {
                return s[t]
            }

            function r(t, e) {
                s[t] = e
            }

            i = i || {};
            var a = i.forceState, o = this.visualMapModel, s = {};
            if ("symbol" === e && (s.symbol = o.get("itemSymbol")), "color" === e) {
                var l = o.get("contentColor");
                s.color = l
            }
            var u = o.controllerVisuals[a || o.getValueState(t)], h = ET.prepareVisualTypes(u);
            return f(h, function (a) {
                var o = u[a];
                i.convertOpacityToAlpha && "opacity" === a && (a = "colorAlpha", o = u.__alphaForOpacity), ET.dependsOn(a, e) && o && o.applyVisual(t, n, r)
            }), s[e]
        }, positionGroup: function (t) {
            var e = this.visualMapModel, i = this.api;
            jo(t, e.getBoxLayoutParams(), {width: i.getWidth(), height: i.getHeight()})
        }, doRender: V
    }), eI = function (t, e, i, n, r, a) {
        t = t || 0;
        var o = i[1] - i[0];
        if (null != r && (r = Gp(r, [0, o])), null != a && (a = Math.max(a, null != r ? r : 0)), "all" === n) {
            var s = Math.abs(e[1] - e[0]);
            s = Gp(s, [0, o]), r = a = Gp(s, [r, a]), n = 0
        }
        e[0] = Gp(e[0], i), e[1] = Gp(e[1], i);
        var l = Hp(e, n);
        e[n] += t;
        var u = r || 0, h = i.slice();
        l.sign < 0 ? h[0] += u : h[1] -= u, e[n] = Gp(e[n], h);
        var c = Hp(e, n);
        null != r && (c.sign !== l.sign || c.span < r) && (e[1 - n] = e[n] + l.sign * r);
        var c = Hp(e, n);
        return null != a && c.span > a && (e[1 - n] = e[n] + c.sign * a), e
    }, iI = _o, nI = f, rI = Math.min, aI = Math.max, oI = 12, sI = 6, lI = tI.extend({
        type: "visualMap.continuous", init: function () {
            lI.superApply(this, "init", arguments), this._shapes = {}, this._dataInterval = [], this._handleEnds = [], this._orient, this._useHandle, this._hoverLinkDataIndices = [], this._dragging, this._hovering
        }, doRender: function (t, e, i, n) {
            n && "selectDataRange" === n.type && n.from === this.uid || this._buildView()
        }, _buildView: function () {
            this.group.removeAll();
            var t = this.visualMapModel, e = this.group;
            this._orient = t.get("orient"), this._useHandle = t.get("calculable"), this._resetInterval(), this._renderBar(e);
            var i = t.get("text");
            this._renderEndsText(e, i, 0), this._renderEndsText(e, i, 1), this._updateView(!0), this.renderBackground(e), this._updateView(), this._enableHoverLinkToSeries(), this._enableHoverLinkFromSeries(), this.positionGroup(e)
        }, _renderEndsText: function (t, e, i) {
            if (e) {
                var n = e[1 - i];
                n = null != n ? n + "" : "";
                var r = this.visualMapModel, a = r.get("textGap"), o = r.itemSize, s = this._shapes.barGroup,
                    l = this._applyTransform([o[0] / 2, 0 === i ? -a : o[1] + a], s),
                    u = this._applyTransform(0 === i ? "bottom" : "top", s), h = this._orient,
                    c = this.visualMapModel.textStyleModel;
                this.group.add(new Ay({
                    style: {
                        x: l[0],
                        y: l[1],
                        textVerticalAlign: "horizontal" === h ? "middle" : u,
                        textAlign: "horizontal" === h ? u : "center",
                        text: n,
                        textFont: c.getFont(),
                        textFill: c.getTextColor()
                    }
                }))
            }
        }, _renderBar: function (t) {
            var e = this.visualMapModel, i = this._shapes, n = e.itemSize, r = this._orient, a = this._useHandle,
                o = Wp(e, this.api, n), s = i.barGroup = this._createBarGroup(o);
            s.add(i.outOfRange = Yp()), s.add(i.inRange = Yp(null, a ? Kp(this._orient) : null, y(this._dragHandle, this, "all", !1), y(this._dragHandle, this, "all", !0)));
            var l = e.textStyleModel.getTextRect("鍥�"), u = aI(l.width, l.height);
            a && (i.handleThumbs = [], i.handleLabels = [], i.handleLabelPoints = [], this._createHandle(s, 0, n, u, r, o), this._createHandle(s, 1, n, u, r, o)), this._createIndicator(s, n, u, r), t.add(s)
        }, _createHandle: function (t, e, i, n, r) {
            var a = y(this._dragHandle, this, e, !1), o = y(this._dragHandle, this, e, !0),
                s = Yp(Up(e, n), Kp(this._orient), a, o);
            s.position[0] = i[0], t.add(s);
            var l = this.visualMapModel.textStyleModel, u = new Ay({
                draggable: !0, drift: a, onmousemove: function (t) {
                    Ag(t.event)
                }, ondragend: o, style: {x: 0, y: 0, text: "", textFont: l.getFont(), textFill: l.getTextColor()}
            });
            this.group.add(u);
            var h = ["horizontal" === r ? n / 2 : 1.5 * n, "horizontal" === r ? 0 === e ? -(1.5 * n) : 1.5 * n : 0 === e ? -n / 2 : n / 2],
                c = this._shapes;
            c.handleThumbs[e] = s, c.handleLabelPoints[e] = h, c.handleLabels[e] = u
        }, _createIndicator: function (t, e, i, n) {
            var r = Yp([[0, 0]], "move");
            r.position[0] = e[0], r.attr({invisible: !0, silent: !0}), t.add(r);
            var a = this.visualMapModel.textStyleModel, o = new Ay({
                silent: !0,
                invisible: !0,
                style: {x: 0, y: 0, text: "", textFont: a.getFont(), textFill: a.getTextColor()}
            });
            this.group.add(o);
            var s = ["horizontal" === n ? i / 2 : sI + 3, 0], l = this._shapes;
            l.indicator = r, l.indicatorLabel = o, l.indicatorLabelPoint = s
        }, _dragHandle: function (t, e, i, n) {
            if (this._useHandle) {
                if (this._dragging = !e, !e) {
                    var r = this._applyTransform([i, n], this._shapes.barGroup, !0);
                    this._updateInterval(t, r[1]), this._updateView()
                }
                e === !this.visualMapModel.get("realtime") && this.api.dispatchAction({
                    type: "selectDataRange",
                    from: this.uid,
                    visualMapId: this.visualMapModel.id,
                    selected: this._dataInterval.slice()
                }), e ? !this._hovering && this._clearHoverLinkToSeries() : jp(this.visualMapModel) && this._doHoverLinkToSeries(this._handleEnds[t], !1)
            }
        }, _resetInterval: function () {
            var t = this.visualMapModel, e = this._dataInterval = t.getSelected(), i = t.getExtent(),
                n = [0, t.itemSize[1]];
            this._handleEnds = [iI(e[0], i, n, !0), iI(e[1], i, n, !0)]
        }, _updateInterval: function (t, e) {
            e = e || 0;
            var i = this.visualMapModel, n = this._handleEnds, r = [0, i.itemSize[1]];
            eI(e, n, r, t, 0);
            var a = i.getExtent();
            this._dataInterval = [iI(n[0], r, a, !0), iI(n[1], r, a, !0)]
        }, _updateView: function (t) {
            var e = this.visualMapModel, i = e.getExtent(), n = this._shapes, r = [0, e.itemSize[1]],
                a = t ? r : this._handleEnds, o = this._createBarVisual(this._dataInterval, i, a, "inRange"),
                s = this._createBarVisual(i, i, r, "outOfRange");
            n.inRange.setStyle({
                fill: o.barColor,
                opacity: o.opacity
            }).setShape("points", o.barPoints), n.outOfRange.setStyle({
                fill: s.barColor,
                opacity: s.opacity
            }).setShape("points", s.barPoints), this._updateHandle(a, o)
        }, _createBarVisual: function (t, e, i, n) {
            var r = {forceState: n, convertOpacityToAlpha: !0}, a = this._makeColorGradient(t, r),
                o = [this.getControllerVisual(t[0], "symbolSize", r), this.getControllerVisual(t[1], "symbolSize", r)],
                s = this._createBarPoints(i, o);
            return {barColor: new jy(0, 0, 0, 1, a), barPoints: s, handlesColor: [a[0].color, a[a.length - 1].color]}
        }, _makeColorGradient: function (t, e) {
            var i = 100, n = [], r = (t[1] - t[0]) / i;
            n.push({color: this.getControllerVisual(t[0], "color", e), offset: 0});
            for (var a = 1; i > a; a++) {
                var o = t[0] + r * a;
                if (o > t[1]) break;
                n.push({color: this.getControllerVisual(o, "color", e), offset: a / i})
            }
            return n.push({color: this.getControllerVisual(t[1], "color", e), offset: 1}), n
        }, _createBarPoints: function (t, e) {
            var i = this.visualMapModel.itemSize;
            return [[i[0] - e[0], t[0]], [i[0], t[0]], [i[0], t[1]], [i[0] - e[1], t[1]]]
        }, _createBarGroup: function (t) {
            var e = this._orient, i = this.visualMapModel.get("inverse");
            return new pv("horizontal" !== e || i ? "horizontal" === e && i ? {
                scale: "bottom" === t ? [-1, 1] : [1, 1],
                rotation: -Math.PI / 2
            } : "vertical" !== e || i ? {scale: "left" === t ? [1, 1] : [-1, 1]} : {scale: "left" === t ? [1, -1] : [-1, -1]} : {
                scale: "bottom" === t ? [1, 1] : [-1, 1],
                rotation: Math.PI / 2
            })
        }, _updateHandle: function (t, e) {
            if (this._useHandle) {
                var i = this._shapes, n = this.visualMapModel, r = i.handleThumbs, a = i.handleLabels;
                nI([0, 1], function (o) {
                    var s = r[o];
                    s.setStyle("fill", e.handlesColor[o]), s.position[1] = t[o];
                    var l = eo(i.handleLabelPoints[o], to(s, this.group));
                    a[o].setStyle({
                        x: l[0],
                        y: l[1],
                        text: n.formatValueText(this._dataInterval[o]),
                        textVerticalAlign: "middle",
                        textAlign: this._applyTransform("horizontal" === this._orient ? 0 === o ? "bottom" : "top" : "left", i.barGroup)
                    })
                }, this)
            }
        }, _showIndicator: function (t, e, i, n) {
            var r = this.visualMapModel, a = r.getExtent(), o = r.itemSize, s = [0, o[1]], l = iI(t, a, s, !0),
                u = this._shapes, h = u.indicator;
            if (h) {
                h.position[1] = l, h.attr("invisible", !1), h.setShape("points", Zp(!!i, n, l, o[1]));
                var c = {convertOpacityToAlpha: !0}, d = this.getControllerVisual(t, "color", c);
                h.setStyle("fill", d);
                var f = eo(u.indicatorLabelPoint, to(h, this.group)), p = u.indicatorLabel;
                p.attr("invisible", !1);
                var g = this._applyTransform("left", u.barGroup), v = this._orient;
                p.setStyle({
                    text: (i ? i : "") + r.formatValueText(e),
                    textVerticalAlign: "horizontal" === v ? g : "middle",
                    textAlign: "horizontal" === v ? "center" : g,
                    x: f[0],
                    y: f[1]
                })
            }
        }, _enableHoverLinkToSeries: function () {
            var t = this;
            this._shapes.barGroup.on("mousemove", function (e) {
                if (t._hovering = !0, !t._dragging) {
                    var i = t.visualMapModel.itemSize,
                        n = t._applyTransform([e.offsetX, e.offsetY], t._shapes.barGroup, !0, !0);
                    n[1] = rI(aI(0, n[1]), i[1]), t._doHoverLinkToSeries(n[1], 0 <= n[0] && n[0] <= i[0])
                }
            }).on("mouseout", function () {
                t._hovering = !1, !t._dragging && t._clearHoverLinkToSeries()
            })
        }, _enableHoverLinkFromSeries: function () {
            var t = this.api.getZr();
            this.visualMapModel.option.hoverLink ? (t.on("mouseover", this._hoverLinkFromSeriesMouseOver, this), t.on("mouseout", this._hideIndicator, this)) : this._clearHoverLinkFromSeries()
        }, _doHoverLinkToSeries: function (t, e) {
            var i = this.visualMapModel, n = i.itemSize;
            if (i.option.hoverLink) {
                var r = [0, n[1]], a = i.getExtent();
                t = rI(aI(r[0], t), r[1]);
                var o = qp(i, a, r), s = [t - o, t + o], l = iI(t, r, a, !0),
                    u = [iI(s[0], r, a, !0), iI(s[1], r, a, !0)];
                s[0] < r[0] && (u[0] = -1 / 0), s[1] > r[1] && (u[1] = 1 / 0), e && (u[0] === -1 / 0 ? this._showIndicator(l, u[1], "< ", o) : 1 / 0 === u[1] ? this._showIndicator(l, u[0], "> ", o) : this._showIndicator(l, l, "鈮� ", o));
                var h = this._hoverLinkDataIndices, c = [];
                (e || jp(i)) && (c = this._hoverLinkDataIndices = i.findTargetDataIndices(u));
                var d = ar(h, c);
                this._dispatchHighDown("downplay", Xp(d[0], i)), this._dispatchHighDown("highlight", Xp(d[1], i))
            }
        }, _hoverLinkFromSeriesMouseOver: function (t) {
            var e = t.target, i = this.visualMapModel;
            if (e && null != e.dataIndex) {
                var n = this.ecModel.getSeriesByIndex(e.seriesIndex);
                if (i.isTargetSeries(n)) {
                    var r = n.getData(e.dataType), a = r.get(i.getDataDimension(r), e.dataIndex, !0);
                    isNaN(a) || this._showIndicator(a, a)
                }
            }
        }, _hideIndicator: function () {
            var t = this._shapes;
            t.indicator && t.indicator.attr("invisible", !0), t.indicatorLabel && t.indicatorLabel.attr("invisible", !0)
        }, _clearHoverLinkToSeries: function () {
            this._hideIndicator();
            var t = this._hoverLinkDataIndices;
            this._dispatchHighDown("downplay", Xp(t, this.visualMapModel)), t.length = 0
        }, _clearHoverLinkFromSeries: function () {
            this._hideIndicator();
            var t = this.api.getZr();
            t.off("mouseover", this._hoverLinkFromSeriesMouseOver), t.off("mouseout", this._hideIndicator)
        }, _applyTransform: function (t, e, i, n) {
            var r = to(e, n ? null : this.group);
            return d_[x(t) ? "applyTransform" : "transformDirection"](t, r, i)
        }, _dispatchHighDown: function (t, e) {
            e && e.length && this.api.dispatchAction({type: t, batch: e})
        }, dispose: function () {
            this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries()
        }, remove: function () {
            this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries()
        }
    }), uI = {type: "selectDataRange", event: "dataRangeSelected", update: "update"};
    wu(uI, function (t, e) {
        e.eachComponent({mainType: "visualMap", query: t}, function (e) {
            e.setSelected(t.selected)
        })
    }), yu(OT);
    {
        var hI = $T.extend({
            type: "visualMap.piecewise",
            defaultOption: {
                selected: null,
                minOpen: !1,
                maxOpen: !1,
                align: "auto",
                itemWidth: 20,
                itemHeight: 14,
                itemSymbol: "roundRect",
                pieceList: null,
                categories: null,
                splitNumber: 5,
                selectedMode: "multiple",
                itemGap: 10,
                hoverLink: !0,
                showLabel: null
            },
            optionUpdated: function (t, e) {
                hI.superApply(this, "optionUpdated", arguments), this._pieceList = [], this.resetExtent();
                var i = this._mode = this._determineMode();
                cI[this._mode].call(this), this._resetSelected(t, e);
                var r = this.option.categories;
                this.resetVisual(function (t, e) {
                    "categories" === i ? (t.mappingMethod = "category", t.categories = n(r)) : (t.dataExtent = this.getExtent(), t.mappingMethod = "piecewise", t.pieceList = p(this._pieceList, function (t) {
                        var t = n(t);
                        return "inRange" !== e && (t.visual = null), t
                    }))
                })
            },
            completeVisualOption: function () {
                function t(t, e, i) {
                    return t && t[e] && (S(t[e]) ? t[e].hasOwnProperty(i) : t[e] === i)
                }

                var e = this.option, i = {}, n = ET.listVisualTypes(), r = this.isCategory();
                f(e.pieces, function (t) {
                    f(n, function (e) {
                        t.hasOwnProperty(e) && (i[e] = 1)
                    })
                }), f(i, function (i, n) {
                    var a = 0;
                    f(this.stateList, function (i) {
                        a |= t(e, i, n) || t(e.target, i, n)
                    }, this), !a && f(this.stateList, function (t) {
                        (e[t] || (e[t] = {}))[n] = GT.get(n, "inRange" === t ? "active" : "inactive", r)
                    })
                }, this), $T.prototype.completeVisualOption.apply(this, arguments)
            },
            _resetSelected: function (t, e) {
                var i = this.option, n = this._pieceList, r = (e ? i : t).selected || {};
                if (i.selected = r, f(n, function (t) {
                    var e = this.getSelectedMapKey(t);
                    r.hasOwnProperty(e) || (r[e] = !0)
                }, this), "single" === i.selectedMode) {
                    var a = !1;
                    f(n, function (t) {
                        var e = this.getSelectedMapKey(t);
                        r[e] && (a ? r[e] = !1 : a = !0)
                    }, this)
                }
            },
            getSelectedMapKey: function (t) {
                return "categories" === this._mode ? t.value + "" : t.index + ""
            },
            getPieceList: function () {
                return this._pieceList
            },
            _determineMode: function () {
                var t = this.option;
                return t.pieces && t.pieces.length > 0 ? "pieces" : this.option.categories ? "categories" : "splitNumber"
            },
            setSelected: function (t) {
                this.option.selected = n(t)
            },
            getValueState: function (t) {
                var e = ET.findPieceIndex(t, this._pieceList);
                return null != e && this.option.selected[this.getSelectedMapKey(this._pieceList[e])] ? "inRange" : "outOfRange"
            },
            findTargetDataIndices: function (t) {
                var e = [];
                return this.eachTargetSeries(function (i) {
                    var n = [], r = i.getData();
                    r.each(this.getDataDimension(r), function (e, i) {
                        var r = ET.findPieceIndex(e, this._pieceList);
                        r === t && n.push(i)
                    }, this), e.push({seriesId: i.id, dataIndex: n})
                }, this), e
            },
            getRepresentValue: function (t) {
                var e;
                if (this.isCategory()) e = t.value; else if (null != t.value) e = t.value; else {
                    var i = t.interval || [];
                    e = i[0] === -1 / 0 && 1 / 0 === i[1] ? 0 : (i[0] + i[1]) / 2
                }
                return e
            },
            getVisualMeta: function (t) {
                function e(e, a) {
                    var o = r.getRepresentValue({interval: e});
                    a || (a = r.getValueState(o));
                    var s = t(o, a);
                    e[0] === -1 / 0 ? n[0] = s : 1 / 0 === e[1] ? n[1] = s : i.push({
                        value: e[0],
                        color: s
                    }, {value: e[1], color: s})
                }

                if (!this.isCategory()) {
                    var i = [], n = [], r = this, a = this._pieceList.slice();
                    if (a.length) {
                        var o = a[0].interval[0];
                        o !== -1 / 0 && a.unshift({interval: [-1 / 0, o]}), o = a[a.length - 1].interval[1], 1 / 0 !== o && a.push({interval: [o, 1 / 0]})
                    } else a.push({interval: [-1 / 0, 1 / 0]});
                    var s = -1 / 0;
                    return f(a, function (t) {
                        var i = t.interval;
                        i && (i[0] > s && e([s, i[0]], "outOfRange"), e(i.slice()), s = i[1])
                    }, this), {stops: i, outerColors: n}
                }
            }
        }), cI = {
            splitNumber: function () {
                var t = this.option, e = this._pieceList, i = Math.min(t.precision, 20), n = this.getExtent(),
                    r = t.splitNumber;
                r = Math.max(parseInt(r, 10), 1), t.splitNumber = r;
                for (var a = (n[1] - n[0]) / r; +a.toFixed(i) !== a && 5 > i;) i++;
                t.precision = i, a = +a.toFixed(i);
                var o = 0;
                t.minOpen && e.push({index: o++, interval: [-1 / 0, n[0]], close: [0, 0]});
                for (var s = n[0], l = o + r; l > o; s += a) {
                    var u = o === r - 1 ? n[1] : s + a;
                    e.push({index: o++, interval: [s, u], close: [1, 1]})
                }
                t.maxOpen && e.push({index: o++, interval: [n[1], 1 / 0], close: [0, 0]}), zo(e), f(e, function (t) {
                    t.text = this.formatValueText(t.interval)
                }, this)
            }, categories: function () {
                var t = this.option;
                f(t.categories, function (t) {
                    this._pieceList.push({text: this.formatValueText(t, !0), value: t})
                }, this), $p(t, this._pieceList)
            }, pieces: function () {
                var t = this.option, e = this._pieceList;
                f(t.pieces, function (t, i) {
                    S(t) || (t = {value: t});
                    var n = {text: "", index: i};
                    if (null != t.label && (n.text = t.label), t.hasOwnProperty("value")) {
                        var r = n.value = t.value;
                        n.interval = [r, r], n.close = [1, 1]
                    } else {
                        for (var a = n.interval = [], o = n.close = [0, 0], s = [1, 0, 1], l = [-1 / 0, 1 / 0], u = [], h = 0; 2 > h; h++) {
                            for (var c = [["gte", "gt", "min"], ["lte", "lt", "max"]][h], d = 0; 3 > d && null == a[h]; d++) a[h] = t[c[d]], o[h] = s[d], u[h] = 2 === d;
                            null == a[h] && (a[h] = l[h])
                        }
                        u[0] && 1 / 0 === a[1] && (o[0] = 0), u[1] && a[0] === -1 / 0 && (o[1] = 0), a[0] === a[1] && o[0] && o[1] && (n.value = a[0])
                    }
                    n.visual = ET.retrieveVisuals(t), e.push(n)
                }, this), $p(t, e), zo(e), f(e, function (t) {
                    var e = t.close, i = [["<", "鈮�"][e[1]], [">", "鈮�"][e[0]]];
                    t.text = t.text || this.formatValueText(null != t.value ? t.value : t.interval, !1, i)
                }, this)
            }
        };
        tI.extend({
            type: "visualMap.piecewise", doRender: function () {
                function t(t) {
                    var r = t.piece, u = new pv;
                    u.onclick = y(this._onItemClick, this, r), this._enableHoverLink(u, t.indexInModelPieceList);
                    var h = i.getRepresentValue(r);
                    if (this._createItemSymbol(u, h, [0, 0, l[0], l[1]]), c) {
                        var d = this.visualMapModel.getValueState(h);
                        u.add(new Ay({
                            style: {
                                x: "right" === s ? -n : l[0] + n,
                                y: l[1] / 2,
                                text: r.text,
                                textVerticalAlign: "middle",
                                textAlign: s,
                                textFont: a,
                                textFill: o,
                                opacity: "outOfRange" === d ? .5 : 1
                            }
                        }))
                    }
                    e.add(u)
                }

                var e = this.group;
                e.removeAll();
                var i = this.visualMapModel, n = i.get("textGap"), r = i.textStyleModel, a = r.getFont(),
                    o = r.getTextColor(), s = this._getItemAlign(), l = i.itemSize, u = this._getViewData(),
                    h = u.endsText, c = D(i.get("showLabel", !0), !h);
                h && this._renderEndsText(e, h[0], l, c, s), f(u.viewPieceList, t, this), h && this._renderEndsText(e, h[1], l, c, s), z_(i.get("orient"), e, i.get("itemGap")), this.renderBackground(e), this.positionGroup(e)
            }, _enableHoverLink: function (t, e) {
                function i(t) {
                    var i = this.visualMapModel;
                    i.option.hoverLink && this.api.dispatchAction({type: t, batch: Xp(i.findTargetDataIndices(e), i)})
                }

                t.on("mouseover", y(i, this, "highlight")).on("mouseout", y(i, this, "downplay"))
            }, _getItemAlign: function () {
                var t = this.visualMapModel, e = t.option;
                if ("vertical" === e.orient) return Wp(t, this.api, t.itemSize);
                var i = e.align;
                return i && "auto" !== i || (i = "left"), i
            }, _renderEndsText: function (t, e, i, n, r) {
                if (e) {
                    var a = new pv, o = this.visualMapModel.textStyleModel;
                    a.add(new Ay({
                        style: {
                            x: n ? "right" === r ? i[0] : 0 : i[0] / 2,
                            y: i[1] / 2,
                            textVerticalAlign: "middle",
                            textAlign: n ? r : "center",
                            text: e,
                            textFont: o.getFont(),
                            textFill: o.getTextColor()
                        }
                    })), t.add(a)
                }
            }, _getViewData: function () {
                var t = this.visualMapModel, e = p(t.getPieceList(), function (t, e) {
                    return {piece: t, indexInModelPieceList: e}
                }), i = t.get("text"), n = t.get("orient"), r = t.get("inverse");
                return ("horizontal" === n ? r : !r) ? e.reverse() : i && (i = i.slice().reverse()), {
                    viewPieceList: e,
                    endsText: i
                }
            }, _createItemSymbol: function (t, e, i) {
                t.add(Uh(this.getControllerVisual(e, "symbol"), i[0], i[1], i[2], i[3], this.getControllerVisual(e, "color")))
            }, _onItemClick: function (t) {
                var e = this.visualMapModel, i = e.option, r = n(i.selected), a = e.getSelectedMapKey(t);
                "single" === i.selectedMode ? (r[a] = !0, f(r, function (t, e) {
                    r[e] = e === a
                })) : r[a] = !r[a], this.api.dispatchAction({
                    type: "selectDataRange",
                    from: this.uid,
                    visualMapId: this.visualMapModel.id,
                    selected: r
                })
            }
        })
    }
    yu(OT), t.version = gw, t.dependencies = vw, t.PRIORITY = Aw, t.init = cu, t.connect = du, t.disConnect = fu, t.disconnect = jw, t.dispose = pu, t.getInstanceByDom = gu, t.getInstanceById = vu, t.registerTheme = mu, t.registerPreprocessor = yu, t.registerProcessor = _u, t.registerPostUpdate = xu, t.registerAction = wu, t.registerCoordinateSystem = bu, t.getCoordinateSystemDimensions = Su, t.registerLayout = Mu, t.registerVisual = Tu, t.registerLoading = Cu, t.extendComponentModel = Du, t.extendComponentView = Au, t.extendSeriesModel = ku, t.extendChartView = Lu, t.setCanvasCreator = Pu, t.registerMap = Ou, t.getMap = zu, t.dataTool = Kw, t.zrender = dm, t.number = S_, t.format = k_, t.throttle = pl, t.helper = Qb, t.matrix = Bg, t.vector = wg, t.color = ev, t.parseGeoJSON = tS, t.parseGeoJson = rS, t.util = aS, t.graphic = oS, t.List = lb, t.Model = co, t.Axis = nS, t.env = eg
});