(function(e) {
    function t(t) {
        var n = t[0];
        var o = t[1];
        var l = t[2];
        var c, u, d = 0, v = [];
        for (; d < n.length; d++) {
            u = n[d];
            if (Object.prototype.hasOwnProperty.call(r, u) && r[u])
                v.push(r[u][0]);
            r[u] = 0
        }
        for (c in o)
            if (Object.prototype.hasOwnProperty.call(o, c))
                e[c] = o[c];
        if (s)
            s(t);
        while (v.length)
            v.shift()();
        i.push.apply(i, l || []);
        return a()
    }
    function a() {
        var e;
        for (var t = 0; t < i.length; t++) {
            var a = i[t];
            var n = true;
            for (var l = 1; l < a.length; l++) {
                var c = a[l];
                if (0 !== r[c])
                    n = false
            }
            if (n) {
                i.splice(t--, 1);
                e = o(o.s = a[0])
            }
        }
        return e
    }
    var n = {};
    var r = {
        3: 0
    };
    var i = [];
    function o(t) {
        if (n[t])
            return n[t].exports;
        var a = n[t] = {
            i: t,
            l: false,
            exports: {}
        };
        e[t].call(a.exports, a, a.exports, o);
        a.l = true;
        return a.exports
    }
    o.m = e;
    o.c = n;
    o.d = function(e, t, a) {
        if (!o.o(e, t))
            Object.defineProperty(e, t, {
                enumerable: true,
                get: a
            })
    }
    ;
    o.r = function(e) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag)
            Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            });
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    }
    ;
    o.t = function(e, t) {
        if (1 & t)
            e = o(e);
        if (8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        o.r(a);
        Object.defineProperty(a, "default", {
            enumerable: true,
            value: e
        });
        if (2 & t && "string" != typeof e)
            for (var n in e)
                o.d(a, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return a
    }
    ;
    o.n = function(e) {
        var t = e && e.__esModule ? function t() {
            return e["default"]
        }
        : function t() {
            return e
        }
        ;
        o.d(t, "a", t);
        return t
    }
    ;
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ;
    o.p = "//sf3-scmcdn-tos.pstatp.com/obj/goofy/toutiao/toutiao_web_pc/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var c = l.push.bind(l);
    l.push = t;
    l = l.slice();
    for (var u = 0; u < l.length; u++)
        t(l[u]);
    var s = c;
    i.push([2, 0]);
    return a()
}
)({
    "02d5e5b40e309506a847": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAeFBMVEUAAACAgICZmZmAgICOjo6AgICJiYmAgICAgICAgIB6enp7e3t8fHx4eHh9fX14eHh5eXl4eHh5eXl4eHh3d3d3d3d4eHh3d3d4eHh4eHh3d3d4eHh4eHh4eHh4eHh3d3d3d3d3d3d4eHh4eHh3d3d4eHh3d3d3d3d+YM+RAAAAJ3RSTlMAAgUICQwNDhIUGRshIis1P2RleYmNmaeytb7BxsrM1Nbc3eTl7PIqAViFAAAAbklEQVQ4y93SSRaCUAxE0U8rgqCCCKigtG//O2QHlYEzMr7npKk4d7Cq51KDESoJbhs8pLiu8PSUKBZofCUuE3ShEukX3iclkh6GsxLRC36ZEkELn39AbLSwhrTWzI1DWae2wjLjNh+mnu/uqLUDt/8LADZ016sAAAAASUVORK5CYII="
    },
    "0334423887b564215b46": function(e, t, a) {},
    "16e8f7e35455aa7a2a22": function(e, t, a) {},
    "1a91e8074e448c8d5736": function(e, t, a) {},
    2: function(e, t, a) {
        e.exports = a("a0fdb0a4a7f085ba5693")
    },
    "224bc920c63e584fb878": function(e, t, a) {},
    "2e0796c118320b51c6e6": function(e, t, a) {
        e.exports = a("4ef86fd41443e610c5b5")(4)
    },
    "2eb48d33a79851762604": function(e, t, a) {},
    "4c4ea2a98c1c93e67edd": function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return r
        }
        ));
        var n = a("663529bce6ee6d8996f5");
        function r() {
            if ("undefined" === typeof window)
                return;
            n["a"].csrf.getCSRFToken()
        }
    },
    "4dd64d4a0423cee985ac": function(e, t, a) {},
    "4ef86fd41443e610c5b5": function(e, t) {
        e.exports = dll
    },
    "55cc311e6b4a1953e4b2": function(e, t, a) {},
    "59a23f11172d60f297c0": function(e, t, a) {},
    "663529bce6ee6d8996f5": function(e, t, a) {
        "use strict";
        var n = {};
        a.r(n);
        a.d(n, "getProfileTabs", (function() {
            return K
        }
        ));
        a.d(n, "getRecentList", (function() {
            return z
        }
        ));
        a.d(n, "getFeedData", (function() {
            return X
        }
        ));
        a.d(n, "getFavData", (function() {
            return $
        }
        ));
        var r = {};
        a.r(r);
        a.d(r, "getWeatherCity", (function() {
            return ee
        }
        ));
        a.d(r, "getWeatherData", (function() {
            return te
        }
        ));
        var i = {};
        a.r(i);
        a.d(i, "getFansStat", (function() {
            return ae
        }
        ));
        var o = {};
        a.r(o);
        a.d(o, "followUsers", (function() {
            return ne
        }
        ));
        a.d(o, "unfollowUsers", (function() {
            return re
        }
        ));
        a.d(o, "submitFeedback", (function() {
            return ie
        }
        ));
        a.d(o, "dislikeArticle", (function() {
            return oe
        }
        ));
        a.d(o, "delUgcVideo", (function() {
            return le
        }
        ));
        a.d(o, "delUgcContent", (function() {
            return ce
        }
        ));
        var l = {};
        a.r(l);
        a.d(l, "getCSRFToken", (function() {
            return ue
        }
        ));
        var c = a("020ba8dae3d3021d9966");
        var u = a.n(c);
        var s = a("2b4fba5b8716cb99e98e");
        var d = a.n(s);
        var v = a("bd61c3e57dc18e488613");
        var m = a.n(v);
        var f = a("8f4085b35f259db3270e");
        var h = a.n(f);
        var p = a("92285e035e86b5e44a25");
        var _ = a.n(p);
        var g = a("babc388b3bd2ae4e69b5");
        var b = a.n(g);
        var w = a("67b7230afda0f2d40a92");
        var E = a.n(w);
        var y = a("91e23d109ce8d2fa247c");
        var k = a.n(y);
        var N = a("2e2e432f825443caa710");
        var C = a.n(N);
        var x = a("214eccfc06814c553a3c");
        var A = a.n(x);
        var Z = a("cca19b4e684695ffc3da");
        var S = a.n(Z);
        function D(e, t) {
            var a, n;
            var r = "".concat(location.protocol, "//").concat(location.host, "/toutiao");
            if (false)
                ;var i = {
                url: r + e
            };
            if (t.data)
                i.body = t.data;
            var o = (null === (a = window.byted_acrawler) || void 0 === a ? void 0 : null === (n = a.sign) || void 0 === n ? void 0 : n.call(a, i)) || "";
            return o
        }
        var B = a("1ea368dbac2fedf844a3");
        var M = a.n(B);
        var U = a("056dd54dadaa8f820dbe");
        var T = a.n(U);
        var I = a("768ba9cea7a0509ada36");
        var R = a.n(I);
        var P = 24;
        var L = "toutiao_web";
        var Q = 2256;
        var O = "toutiao_pc";
        function H(e) {
            if (!window.renderCaptcha) {
                void 0;
                return
            }
            window.renderCaptcha({
                aid: P,
                app_name: L,
                iid: "0",
                did: "0",
                region: "cn",
                showMode: "mask",
                challenge_code: e.challengeCode,
                successCb: function t(a) {
                    var n;
                    null === (n = e.successCb) || void 0 === n ? void 0 : n.call(e, a)
                },
                errorCb: function t(a) {
                    var n;
                    null === (n = e.errorCb) || void 0 === n ? void 0 : n.call(e, a)
                },
                closeCb: function t() {
                    var a;
                    null === (a = e.closeCb) || void 0 === a ? void 0 : a.call(e)
                }
            })
        }
        var j = function() {
            function e() {
                T()(this, e);
                this.show = false;
                this.success = false
            }
            R()(e, [{
                key: "verify",
                value: function e(t) {
                    var a = this;
                    return new M.a((function(e) {
                        a.show = true;
                        H({
                            challengeCode: t,
                            successCb: function t() {
                                a.show = false;
                                a.success = true;
                                e()
                            },
                            closeCb: function t() {
                                a.show = false;
                                a.success = false;
                                e()
                            }
                        })
                    }
                    ))
                }
            }, {
                key: "waitVerifyFinish",
                value: function e() {
                    var t = this;
                    return new M.a((function(e) {
                        if (!t.show) {
                            e();
                            return
                        }
                        var a = setInterval((function() {
                            if (!t.show) {
                                clearInterval(a);
                                e()
                            }
                        }
                        ), 1e3)
                    }
                    ))
                }
            }]);
            return e
        }();
        var F = new j;
        function q(e, t) {
            var a = b()(e);
            if (_.a) {
                var n = _()(e);
                if (t)
                    n = n.filter((function(t) {
                        return h()(e, t).enumerable
                    }
                    ));
                a.push.apply(a, n)
            }
            return a
        }
        function G(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                if (t % 2)
                    q(Object(a), true).forEach((function(t) {
                        C()(e, t, a[t])
                    }
                    ));
                else if (m.a)
                    d()(e, m()(a));
                else
                    q(Object(a)).forEach((function(t) {
                        u()(e, t, h()(a, t))
                    }
                    ))
            }
            return e
        }
        var V = A.a.create({
            timeout: 2e3,
            headers: {
                "X-CSRFToken": S.a.get("csrftoken")
            }
        });
        V.interceptors.request.use((function(e) {
            var t;
            if (null === (t = e.params) || void 0 === t ? void 0 : t._signature)
                delete e.params._signature;
            var a = V.getUri(e);
            var n = D(a, e);
            e.params = G(G({}, e.params), {}, {
                _signature: n
            });
            return e
        }
        ));
        V.interceptors.response.use(function() {
            var e = k()(E.a.mark((function e(t) {
                var a;
                var n;
                return E.a.wrap((function e(r) {
                    while (1)
                        switch (r.prev = r.next) {
                        case 0:
                            n = null === (a = t.data.decision) || void 0 === a ? void 0 : a.challenge_code;
                            if (!n) {
                                r.next = 17;
                                break
                            }
                            if (F.show) {
                                r.next = 11;
                                break
                            }
                            r.next = 5;
                            return F.verify(n);
                        case 5:
                            if (!F.success) {
                                r.next = 9;
                                break
                            }
                            r.next = 8;
                            return V.request(t.config);
                        case 8:
                            return r.abrupt("return", r.sent);
                        case 9:
                            r.next = 17;
                            break;
                        case 11:
                            r.next = 13;
                            return F.waitVerifyFinish();
                        case 13:
                            if (!F.success) {
                                r.next = 17;
                                break
                            }
                            r.next = 16;
                            return V.request(t.config);
                        case 16:
                            return r.abrupt("return", r.sent);
                        case 17:
                            return r.abrupt("return", t);
                        case 18:
                        case "end":
                            return r.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }());
        var W = V;
        var J = a("a52ab4297c6c7cd8920c");
        var Y = a.n(J);
        function K(e) {
            var t = Y.a.stringify({
                token: e
            });
            return W.post("/api/pc/user/tabs_info", t)
        }
        function z(e, t) {
            return W.get("/api/pc/media_hot/", {
                params: {
                    media_id: t,
                    user_token: e
                }
            })
        }
        function X(e, t, a) {
            if ("profile_collection" === e)
                return W.get("/api/pc/list/feed", {
                    params: {
                        category: e,
                        token: t
                    }
                });
            return W.get("/api/pc/feed/", {
                params: {
                    category: e,
                    utm_source: "toutiao",
                    visit_user_token: t,
                    max_behot_time: a
                }
            })
        }
        function $(e, t) {
            return W.get("/c/user/favourite/", {
                params: {
                    page_type: 2,
                    user_token: e,
                    max_behot_time: 0,
                    count: 20,
                    max_repin_time: t
                }
            })
        }
        function ee() {
            return W.get("/stream/widget/local_weather/city/")
        }
        function te(e) {
            return W.get("/stream/widget/local_weather/data/", {
                params: {
                    city: e
                }
            })
        }
        function ae(e) {
            var t = Y.a.stringify({
                token: e
            });
            return W.post("/api/pc/user/fans_stat", t)
        }
        function ne(e) {
            return W.get("/c/user/follow/", {
                params: {
                    user_token: e
                }
            })
        }
        function re(e) {
            return W.get("/c/user/unfollow/", {
                params: {
                    user_token: e
                }
            })
        }
        function ie(e, t) {
            var a = Y.a.stringify({
                appkey: "web",
                uuid: e,
                content: "[".concat(window.location.host, "]").concat(t)
            });
            return W.post("/post_message/", a)
        }
        function oe(e, t) {
            return W.get("/group/unrepin/", {
                params: {
                    group_id: e,
                    item_id: t
                }
            })
        }
        function le(e) {
            return W.get("/c/ugc/video/delete/", {
                params: {
                    item_id: e
                }
            })
        }
        function ce(e) {
            return W.post("/c/ugc/content/delete/", Y.a.stringify(e))
        }
        function ue() {
            return W.get("/api/pc/info")
        }
        var se = {
            feed: n,
            weather: r,
            relation: i,
            user: o,
            csrf: l
        };
        var de = t["a"] = se
    },
    "679a13ca81e3178ae878": function(e, t, a) {},
    "69084d01d3449fc1bc27": function(e, t, a) {
        e.exports = a("4ef86fd41443e610c5b5")(0)
    },
    "729dc1bd9deb4e4e9a94": function(e, t, a) {},
    "7c04e1c6a9d8a4a067f5": function(e, t, a) {},
    "7e2ae1f59aa818f0e74b": function(e, t, a) {},
    "87d21610517f2c3414b3": function(e, t, a) {},
    "8f733a24568c21239759": function(e, t, a) {},
    "9039589ec6aa98b904b3": function(e, t, a) {},
    "9ead4fe5af5ffb17466e": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAA2CAMAAACSsKctAAAAnFBMVEUAAADuQUHuQEDtQUHuQUHuQkLuRETvQkLuQ0PuQUHuQUH+SkruQEDwS0vuQEDuQUHwRkb/V1fuQEDuQUHuQUHtQEDxQkLuQEDuQEDxRETzSEjuQEDuQUHzRETvQkLyRUX/ZGTuQEDvQUH/amruQUHyQ0PwQUHuQEDvQkLtQEDuQEDvQUHvQEDuQUHvQUHvQUH2RkbtQUHuQEDtQEA3WPMcAAAAM3RSTlMA0mvlxHgtYVjcuQ2vEfGoHwj3hJ7LN/T7IxTsjyhFHAXgfgKIMVKXPtizcc5lXE0YVselqmVoAAAFaklEQVRo3szWfZ+pQBTA8YOwQk8qqSREZD3d8/7f2927pzWTmWbd2/K53//4UPM7aQJ1TmZpDv8P/2hDQ7MpEg9eJfRJCHWGA4xWITSx1rBkbOFF+khOUMfFD47bg3+X4Y0xhzoXg3iaQkSfWcFNOsqOibWGO8fvws5YipRnmkG9K3KWC6hh4eNcuLHxD6c1iit9bSTXujFG+JAN1PKnyGuNfzyMcfZF3F7wYVuQK7BpWC/CqtblaWHkDT4ckJxB6ohNw+YdvDeYvSCsiySRr2raNGzDutiV6/jPD1upwlIPG4btDPyScfeac3xZ2A4kJtgwrO/glxHAjpVhbov7FJK4q1Be9hUX5kjDMiQ+iKwAS47ZlXHZSmcgSmO88YYAkHBraPXgzhhJDxQG+KkPnMXumI1a02pYrJh4GOGNPhe7TbwpUhAsNK6L9viEu2ZO+0fCxD4Ky5HMQcLy8CbIQ+ANM278+RoEW24sv8ZsL2G0WeMwaZ9Ff5iIBTJpjowxYWnhKuKaDyAYunzBkJ22hcz0sG4QpmYiCUHuHPELyWnGVjxFVG7e5w4yI5svLpDz7j8rrEBiQ42Fjjx9a5+LADmFOJOLiZwJVHUrX3fDhmGpOenvLnBPRwL1ThHWi8TZpQcDGecN7vkd5BgHu1GYTT+m97u+9/LooBC6AcqxeTPJHjkD6XZrIm95bRpGqC/rf+Yty2ODUk9HGU226mo4bRuxOTn5ITDnJfJmTcPEB7RR3sSgctnGSxQNsvNYGRZtgej08pe5ettQ6jAPnhjG3tWhRuq33T3Wa+X93romTF8AC2M6Od1prWeGzZCYIBrv2q7n4PemWtzf2PdhnTdxiyJaObOV87ywHZIMRB7+jWBfCQvyMSjCyFz/ibBAFnZC0n44rKPtUQ4Ie/Aqw0jiiWH+sIYQRtazpB0X+6ASNkGyfSxskPkAYB30QBm2PAGow5jr4CvMQjVPEib2ORRWIJl/H+boB/ap4TYf1IUZXRseD4O03WkexqytxGKPMSdVhwXaJBFWa/XdvSQs/t2uuTYnCkNh+EBG60iE5bJeiyioLStr6+b//7edsUnfwQQKQ7azH3y+EZHJQ27knKxJI53kwU8fYnW8PLMhBvAsh5rFGB9Bap3eyD6v3+LpBmLtrOdPcVAtIAbsiiEOnJjF9jw+ZaZgwbReo1PMy6WgjmTjfy8WiJb7xh6BBjEQHmkAlsVmEdaRbkBM5z8SO2OI2RU7OF+ziG7sMQTV0jM2s9LF3hwzqsGYU+f60U8dHSZ3OY4BrYt3YjFkB/0k+uFiVuzBQ+wh9hB7iA0V27rtxIhLPg8RS917EJ/enF2Nj0dfXR35mV66BqgzGSIoI7sB07kvJMs5gW/68liXWnsNFdPTcb/p28W8SigCsip2iupvLOaSGekUifwxKe7Eci5ZUx9CZJemO6tiLvb1vLg1oJC8mO5G296JzZfY9HRnN0VyySOLYsWznq5Lmgfcu69qUWhd8UVIXnt4ce3Ahx2xkMNrGt6nLquiace2PJImNmOqijvqSBE0HdHB1/150gLDZFojq0xpKxznOFOdLQajLkYXTNodQSKRreycGtATOMmOwB9Z6Gf1jlOqangmMVLzwOIHdQLDYDMmi2KXSNTmQ3BcGmPdOWKQRrFU/Y33PAXnz8meWHFoThvjXW4JrCIBEYhp1ziy1EqOGOUr2ROb/UJ5dNJWTaaCvaEe54xWTWLhXk0FYR+vLdkTS8v2dPhVSHIs5ChqEsNxxgN9wQjd5UQm3kV3UKOtj9IqI2BonpZGhJiCq9qm1MqEfXIhIzPWnStJLnsUco9MrNQtiXrFTKI6DsoCQgfaM5T9Bc6EsZU8PLIbAAAAAElFTkSuQmCC"
    },
    a0fdb0a4a7f085ba5693: function(e, t, a) {
        "use strict";
        a.r(t);
        (function(e) {
            a.d(t, "getServerSideInitialProps", (function() {
                return f
            }
            ));
            var n = a("67b7230afda0f2d40a92");
            var r = a.n(n);
            var i = a("91e23d109ce8d2fa247c");
            var o = a.n(i);
            var l = a("150fc7282b1f8ece2655");
            var c = a.n(l);
            var u = a("302018c42a5956b432b2");
            var s = a("8f733a24568c21239759");
            var d = a.n(s);
            var v = a("dac4f6ff3f417531cb13");
            var m = a("4c4ea2a98c1c93e67edd");
            Object(l["hot"])(e)(v["a"]);
            Object(m["a"])();
            Object(u["a"])(v["a"]);
            t["default"] = v["a"];
            var f = function() {
                var e = o()(r.a.mark((function e(t) {
                    var a;
                    return r.a.wrap((function e(n) {
                        while (1)
                            switch (n.prev = n.next) {
                            case 0:
                                return n.abrupt("return", {
                                    data: null === (a = t.ctx) || void 0 === a ? void 0 : a.initialData,
                                    query: t.query
                                });
                            case 1:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function t(a) {
                    return e.apply(this, arguments)
                }
            }()
        }
        ).call(this, a("f18f0631214408a1bad3")(e))
    },
    bdda11d3044bba4e976b: function(e, t, a) {},
    c80642c28792cc54f380: function(e, t, a) {},
    cecef77e4c62435bb973: function(e, t, a) {},
    d13510e8efdf7d9085a4: function(e, t, a) {},
    dac4f6ff3f417531cb13: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return Na
        }
        ));
        var n = a("67b7230afda0f2d40a92");
        var r = a.n(n);
        var i = a("91e23d109ce8d2fa247c");
        var o = a.n(i);
        var l = a("93bb9453334553ad78bb");
        var c = a.n(l);
        var u = a("056dd54dadaa8f820dbe");
        var s = a.n(u);
        var d = a("768ba9cea7a0509ada36");
        var v = a.n(d);
        var m = a("aa2fb4f87afc8962f655");
        var f = a.n(m);
        var h = a("b66b65adbbdcfe0f4f3e");
        var p = a.n(h);
        var _ = a("dba0de806d3803be2b0f");
        var g = a.n(_);
        var b = a("69084d01d3449fc1bc27");
        var w = a.n(b);
        var E = w.a.createContext(null);
        var y = E;
        var k = a("a0199d72cedba8967335");
        var N = a.n(k);
        var C = a("babc388b3bd2ae4e69b5");
        var x = a.n(C);
        var A = a("b774c49079ab31ce21a1");
        var Z = a.n(A);
        var S = a("663529bce6ee6d8996f5");
        var D = a("174811872339f1d02c40");
        var B = a.n(D);
        var M = a("224bc920c63e584fb878");
        function U(e) {
            var t = T();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function T() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        function I(e) {
            if (e >= 0 && e <= 100)
                return "#5cbf4c";
            if (e >= 101 && e <= 200)
                return "#ff9f2d";
            if (e >= 201)
                return "#ff5f5f";
            return "rgba(214, 117, 3, 0.8)"
        }
        var R = function(e) {
            f()(a, e);
            var t = U(a);
            function a(e) {
                var n;
                s()(this, a);
                n = t.call(this, e);
                n.state = {
                    provinces: [],
                    citys: [],
                    cityList: null,
                    province: "\u5317\u4eac",
                    city: "\u5317\u4eac",
                    weathercity: "",
                    weather: {
                        aqi: 16,
                        current_condition: "\u9634",
                        dat_condition: "\u9634",
                        dat_high_temperature: 29,
                        dat_low_temperature: 23,
                        dat_weather_icon_id: "2",
                        high_temperature: 33,
                        low_temperature: 23,
                        quality_level: "\u4f18",
                        tomorrow_condition: "\u6674\u8f6c\u591a\u4e91",
                        tomorrow_high_temperature: 33,
                        tomorrow_low_temperature: 25,
                        tomorrow_weather_icon_id: "0",
                        weather_icon_id: "2",
                        wind_direction: "\u897f\u98ce",
                        wind_level: 2
                    },
                    iconClass: {
                        today: "",
                        tom: "",
                        dat: ""
                    },
                    showWeather: true,
                    showPopup: false,
                    selecting: false,
                    aqiColor: ""
                };
                n.handleMouseEnter = n.handleMouseEnter.bind(Z()(n));
                n.handleMouseLeave = n.handleMouseLeave.bind(Z()(n));
                n.changeLocation = n.changeLocation.bind(Z()(n));
                n.onSubmitClick = n.onSubmitClick.bind(Z()(n));
                n.onCancelClick = n.onCancelClick.bind(Z()(n));
                return n
            }
            v()(a, [{
                key: "componentDidMount",
                value: function() {
                    var e = o()(r.a.mark((function e() {
                        var t;
                        var a, n, i, o, l;
                        return r.a.wrap((function e(r) {
                            while (1)
                                switch (r.prev = r.next) {
                                case 0:
                                    void 0;
                                    a = window.localStorage && localStorage.getItem("weather_city");
                                    if (a) {
                                        a = JSON.parse(a);
                                        this.setState({
                                            city: a.city,
                                            province: a.province
                                        })
                                    }
                                    this.onSubmitClick();
                                    r.next = 6;
                                    return S["a"].weather.getWeatherCity();
                                case 6:
                                    n = r.sent;
                                    i = null === n || void 0 === n ? void 0 : null === (t = n.data) || void 0 === t ? void 0 : t.data;
                                    o = [];
                                    l = [];
                                    if (i) {
                                        r.next = 12;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 12:
                                    x()(i).map((function(e) {
                                        o.push({
                                            value: e,
                                            label: e
                                        });
                                        l = i[e];
                                        i[e] = [];
                                        x()(l).map((function(t) {
                                            i[e].push({
                                                value: t,
                                                label: t
                                            })
                                        }
                                        ))
                                    }
                                    ));
                                    this.setState({
                                        provinces: o,
                                        cityList: i
                                    });
                                    if (a)
                                        this.setState({
                                            citys: i[a.province]
                                        });
                                case 15:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "changeLocation",
                value: function e() {
                    this.setState({
                        showWeather: false
                    })
                }
            }, {
                key: "isSelecting",
                value: function e(t) {
                    this.setState({
                        selecting: t
                    })
                }
            }, {
                key: "onSubmitClick",
                value: function() {
                    var e = o()(r.a.mark((function e() {
                        var t;
                        var a, n, i, o, l, c;
                        return r.a.wrap((function e(r) {
                            while (1)
                                switch (r.prev = r.next) {
                                case 0:
                                    a = this.state,
                                    n = a.city,
                                    i = a.province;
                                    r.next = 3;
                                    return S["a"].weather.getWeatherData(n);
                                case 3:
                                    o = r.sent;
                                    l = null === (t = o.data.data) || void 0 === t ? void 0 : t.weather;
                                    if (l)
                                        this.setState({
                                            weathercity: null === (c = o.data.data) || void 0 === c ? void 0 : c.city,
                                            weather: l,
                                            aqiColor: I(l.aqi),
                                            iconClass: {
                                                today: "weather-icon-".concat(l.weather_icon_id),
                                                tom: "weather-icon-".concat(l.tomorrow_weather_icon_id),
                                                dat: "weather-icon-".concat(l.dat_weather_icon_id)
                                            }
                                        });
                                    if (window.localStorage)
                                        localStorage.setItem("weather_city", N()({
                                            city: n,
                                            province: i
                                        }));
                                    this.setState({
                                        showWeather: true
                                    });
                                case 8:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "onCancelClick",
                value: function e() {
                    this.setState({
                        showWeather: true
                    })
                }
            }, {
                key: "handleProvinceChange",
                value: function e(t) {}
            }, {
                key: "handleMouseEnter",
                value: function e() {
                    this.setState({
                        showPopup: true
                    })
                }
            }, {
                key: "handleMouseLeave",
                value: function e() {
                    var t = this.state.selecting;
                    if (t)
                        return false;
                    else
                        this.setState({
                            showPopup: false
                        })
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this.state
                      , a = t.weathercity
                      , n = t.weather
                      , r = t.aqiColor
                      , i = t.showWeather
                      , o = t.iconClass
                      , l = t.showPopup;
                    return w.a.createElement("div", {
                        className: "weather-tool",
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave
                    }, w.a.createElement("div", {
                        className: "weather-abstract"
                    }, w.a.createElement("span", null, "\xa0", a), w.a.createElement("span", {
                        className: "city_state"
                    }, n.current_condition), w.a.createElement("span", {
                        className: "city_temperature"
                    }, w.a.createElement("em", null, n.low_temperature), "\u2103 \xa0/\xa0 ", w.a.createElement("em", null, n.high_temperature), "\u2103"), w.a.createElement("i", {
                        className: "y-icon icon-more"
                    })), l && w.a.createElement("div", {
                        className: "y-weather"
                    }, w.a.createElement("div", {
                        className: "w-header"
                    }, w.a.createElement("span", {
                        className: "bui-icon icon-locationweather bui-vm",
                        onClick: this.changeLocation
                    }, "\xa0", a), w.a.createElement("span", {
                        className: "wind bui-vm"
                    }, n.wind_direction, n.wind_level, "\u7ea7"), w.a.createElement("span", {
                        className: "air vm",
                        style: {
                            backgroundColor: r
                        }
                    }, n.quality_level, "\xa0", n.aqi)), i && w.a.createElement("ul", {
                        className: "days-weather"
                    }, w.a.createElement("li", {
                        className: "bui-left day"
                    }, w.a.createElement("span", {
                        className: "title"
                    }, "\u4eca\u5929"), w.a.createElement("div", {
                        title: n.current_condition,
                        className: B()("weather-icon", o.today)
                    }), w.a.createElement("span", {
                        className: "temperature"
                    }, w.a.createElement("em", null, n.low_temperature), "\u2103 / ", w.a.createElement("em", null, n.high_temperature), "\u2103")), w.a.createElement("li", {
                        className: "bui-left day"
                    }, w.a.createElement("span", {
                        className: "title"
                    }, "\u660e\u5929"), w.a.createElement("div", {
                        title: n.tomorrow_condition,
                        className: B()("weather-icon", o.tom)
                    }), w.a.createElement("span", {
                        className: "temperature"
                    }, w.a.createElement("em", null, n.tomorrow_low_temperature), "\u2103 / ", w.a.createElement("em", null, n.tomorrow_high_temperature), "\u2103")), w.a.createElement("li", {
                        className: "bui-left day"
                    }, w.a.createElement("span", {
                        className: "title"
                    }, "\u540e\u5929"), w.a.createElement("div", {
                        title: n.dat_condition,
                        className: B()("weather-icon", o.dat)
                    }), w.a.createElement("span", {
                        className: "temperature"
                    }, w.a.createElement("em", null, n.dat_low_temperature), "\u2103 / ", w.a.createElement("em", null, n.dat_high_temperature), "\u2103"))), !i && w.a.createElement("div", {
                        className: "city-select"
                    }, w.a.createElement("div", {
                        className: "clearfix"
                    }), w.a.createElement("div", {
                        className: "action"
                    }, w.a.createElement("span", {
                        className: "ok-btn",
                        onClick: this.onSubmitClick
                    }, "\u786e\u5b9a"), w.a.createElement("span", {
                        className: "cancel-btn",
                        onClick: this.onCancelClick
                    }, "\u53d6\u6d88")))))
                }
            }]);
            return a
        }(w.a.Component);
        var P = R;
        var L = a("e9bc4a03091f54538388");
        function Q(e) {
            var t = O();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function O() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var H = function(e) {
            f()(a, e);
            var t = Q(a);
            function a() {
                s()(this, a);
                return t.apply(this, arguments)
            }
            v()(a, [{
                key: "render",
                value: function e() {
                    return w.a.createElement("div", {
                        className: "home-left-nav"
                    }, w.a.createElement("a", {
                        className: "download-app tb-link",
                        href: "//app.toutiao.com/news_article/",
                        target: "blank"
                    }, "\u4e0b\u8f7dAPP"), w.a.createElement("a", {
                        className: "register-mp tb-link",
                        href: "//mp.toutiao.com",
                        target: "blank"
                    }, "\u6ce8\u518c\u5934\u6761\u53f7"), w.a.createElement(P, null))
                }
            }]);
            return a
        }(w.a.PureComponent);
        var j = H;
        var F = a("679a13ca81e3178ae878");
        function q(e) {
            var t = G();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function G() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var V = [{
            name: "\u63a8\u8350",
            url: "/",
            en: "recommend"
        }, {
            name: "\u70ed\u70b9",
            url: "/ch/news_hot/",
            en: "hot"
        }, {
            name: "\u89c6\u9891",
            url: "//www.ixigua.com/",
            en: "video",
            target: "_blank"
        }, {
            name: "\u56fe\u7247",
            url: "/ch/news_image/",
            en: "image"
        }, {
            name: "\u5a31\u4e50",
            url: "/ch/news_entertainment/",
            en: "entertainment"
        }, {
            name: "\u79d1\u6280",
            url: "/ch/news_tech/",
            en: "tech"
        }, {
            name: "\u6c7d\u8f66",
            url: "//www.dcdapp.com/",
            en: "car",
            target: "_blank"
        }, {
            name: "\u4f53\u80b2",
            url: "/ch/news_sports/",
            en: "sports"
        }, {
            name: "\u8d22\u7ecf",
            url: "/ch/news_finance/",
            en: "finance"
        }, {
            name: "\u519b\u4e8b",
            url: "/ch/news_military/",
            en: "military"
        }, {
            name: "\u56fd\u9645",
            url: "/ch/news_world/",
            en: "world"
        }, {
            name: "\u65f6\u5c1a",
            url: "/ch/news_fashion/",
            en: "fashion"
        }, {
            name: "\u65c5\u6e38",
            url: "/ch/news_travel/",
            en: "travel"
        }];
        var W = [{
            name: "\u63a2\u7d22",
            url: "/ch/news_discovery/",
            en: "discovery"
        }, {
            name: "\u80b2\u513f",
            url: "/ch/news_baby/",
            en: "baby"
        }, {
            name: "\u517b\u751f",
            url: "/ch/news_regimen/",
            en: "regimen"
        }, {
            name: "\u7f8e\u6587",
            url: "/ch/news_essay/",
            en: "essay"
        }, {
            name: "\u6e38\u620f",
            url: "/ch/news_game/",
            en: "game"
        }, {
            name: "\u5386\u53f2",
            url: "/ch/news_history/",
            en: "history"
        }, {
            name: "\u7f8e\u98df",
            url: "/ch/news_food/",
            en: "food"
        }];
        var J = function(e) {
            f()(a, e);
            var t = q(a);
            function a() {
                s()(this, a);
                return t.apply(this, arguments)
            }
            v()(a, [{
                key: "render",
                value: function e() {
                    return w.a.createElement("div", {
                        className: "left-nav"
                    }, w.a.createElement("ul", {
                        className: "nav-list"
                    }, V.map((function(e) {
                        return w.a.createElement("li", {
                            className: "nav-item",
                            key: e.name
                        }, w.a.createElement("a", {
                            className: "nav-link",
                            href: "".concat(e.url),
                            target: e.target ? e.target : "_self"
                        }, e.name))
                    }
                    )), w.a.createElement("li", {
                        className: "nav-item nav-more"
                    }, w.a.createElement("a", {
                        className: "nav-link",
                        href: "#"
                    }, "\u66f4\u591a", w.a.createElement("i", {
                        className: "y-icon icon-more"
                    })), w.a.createElement("div", {
                        className: "nav-layer"
                    }, w.a.createElement("ul", {
                        className: "nav-more-list"
                    }, W.map((function(e) {
                        return w.a.createElement("li", {
                            className: "nav-more-item",
                            key: e.name
                        }, w.a.createElement("a", {
                            href: "https://www.toutiao.com".concat(e.url),
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, e.name))
                    }
                    )))))))
                }
            }]);
            return a
        }(w.a.PureComponent);
        var Y = J;
        var K = a("5ee0eaa4845580757e29");
        var z = a.n(K);
        var X = a("2e2e432f825443caa710");
        var $ = a.n(X);
        var ee = a("d13510e8efdf7d9085a4");
        function te(e) {
            var t = ae();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function ae() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var ne = {
            success: "\u5df2\u63d0\u4ea4,\u611f\u8c22\u60a8\u7684\u610f\u89c1",
            fail: "\u63d0\u4ea4\u9519\u8bef,\u8bf7\u7a0d\u540e\u91cd\u8bd5",
            mail_error: "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8054\u7cfb\u65b9\u5f0f",
            content_error: "\u8bf7\u8f93\u5165\u60a8\u7684\u610f\u89c1",
            content_length_error: "\u610f\u89c1\u957f\u5ea6\u8d85\u51fa\u9650\u5236"
        };
        var re = function(e) {
            f()(a, e);
            var t = te(a);
            function a(e) {
                var n;
                s()(this, a);
                n = t.call(this, e);
                n.state = {
                    message: "",
                    disabled: false,
                    email: "",
                    content: ""
                };
                n.emailRef = w.a.createRef();
                n.contentRef = w.a.createRef();
                n.handleSubmit = n.handleSubmit.bind(Z()(n));
                n.showMessage = n.showMessage.bind(Z()(n));
                n.handleHide = n.handleHide.bind(Z()(n));
                return n
            }
            v()(a, [{
                key: "showMessage",
                value: function e(t) {
                    this.setState({
                        message: ne[t]
                    })
                }
            }, {
                key: "handleHide",
                value: function e() {
                    var t = this.props.onClose;
                    t && t()
                }
            }, {
                key: "handleSubmit",
                value: function() {
                    var e = o()(r.a.mark((function e() {
                        var t = this;
                        var a, n, i, o, l, c, u, s;
                        return r.a.wrap((function e(r) {
                            while (1)
                                switch (r.prev = r.next) {
                                case 0:
                                    a = this.state,
                                    n = a.email,
                                    i = a.content;
                                    if (!(n.length < 5)) {
                                        r.next = 6;
                                        break
                                    }
                                    null === (o = this.emailRef) || void 0 === o ? void 0 : null === (l = o.current) || void 0 === l ? void 0 : l.focus();
                                    return r.abrupt("return", this.showMessage("mail_error"));
                                case 6:
                                    if (!("" === i.trim())) {
                                        r.next = 11;
                                        break
                                    }
                                    null === (c = this.contentRef) || void 0 === c ? void 0 : null === (u = c.current) || void 0 === u ? void 0 : u.focus();
                                    return r.abrupt("return", this.showMessage("content_error"));
                                case 11:
                                    this.setState({
                                        message: "",
                                        disabled: true
                                    });
                                case 12:
                                    this.setState({
                                        disabled: true
                                    });
                                    r.next = 15;
                                    return S["a"].user.submitFeedback(n, i);
                                case 15:
                                    s = r.sent;
                                    if (!("success" !== s.data.message)) {
                                        r.next = 18;
                                        break
                                    }
                                    return r.abrupt("return", this.showMessage("fail"));
                                case 18:
                                    this.setState({
                                        email: "",
                                        content: "",
                                        disabled: false
                                    });
                                    this.showMessage("success");
                                    setTimeout((function() {
                                        return t.handleHide()
                                    }
                                    ), 1e3);
                                case 21:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "handleChange",
                value: function e(t, a) {
                    this.setState($()({}, t, a))
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this;
                    var a = this.state
                      , n = a.email
                      , r = a.content
                      , i = a.message
                      , o = a.disabled;
                    return w.a.createElement("div", {
                        className: "feedback"
                    }, w.a.createElement("div", {
                        className: "dialog-header"
                    }, w.a.createElement("h3", null, "\u610f\u89c1\u53cd\u9988")), w.a.createElement("div", {
                        className: "dialog-inner"
                    }, w.a.createElement("div", {
                        className: "feedback_panel"
                    }, w.a.createElement("form", null, w.a.createElement("p", {
                        className: "label"
                    }, "\u8054\u7cfb\u65b9\u5f0f\uff08\u5fc5\u586b\uff09"), w.a.createElement("div", {
                        className: "input-group"
                    }, w.a.createElement("input", {
                        className: "email",
                        placeholder: "\u60a8\u7684\u90ae\u7bb1/QQ\u53f7",
                        type: "text",
                        value: n,
                        ref: this.emailRef,
                        onChange: function e(a) {
                            return t.handleChange("email", a.target.value)
                        }
                    })), w.a.createElement("p", {
                        className: "label"
                    }, "\u60a8\u7684\u610f\u89c1\uff08\u5fc5\u586b\uff09"), w.a.createElement("div", {
                        className: "input-group"
                    }, w.a.createElement("textarea", {
                        style: {
                            height: "100px"
                        },
                        value: r,
                        ref: this.contentRef,
                        className: "content",
                        maxLength: 140,
                        placeholder: "\u8bf7\u586b\u5199\u60a8\u7684\u610f\u89c1\uff0c\u4e0d\u8d85\u8fc7140\u5b57",
                        onChange: function e(a) {
                            return t.handleChange("content", a.target.value)
                        }
                    })), w.a.createElement("div", {
                        className: "input-group"
                    }, w.a.createElement("input", {
                        type: "submit",
                        className: B()("submit-btn", {
                            disabled: o
                        }),
                        value: "\u63d0\u4ea4",
                        disabled: o,
                        onClick: this.handleSubmit
                    }), w.a.createElement("span", {
                        className: "error"
                    }, i), w.a.createElement("span", {
                        className: "close",
                        onClick: this.handleHide
                    }, "[\u5173\u95ed]"))))))
                }
            }]);
            return a
        }(w.a.Component);
        var ie = re;
        var oe = a("ec73ac987ad28ac67e14");
        var le = function e(t) {
            var a = true;
            var n = null === t || void 0 === t ? void 0 : t.userId;
            var r = [{
                url: "//www.toutiao.com/c/user/token/".concat(n, "/?tab=fav"),
                name: "\u6211\u7684\u6536\u85cf",
                target: "_blank"
            }, {
                url: "//www.toutiao.com/c/user/token/relation/".concat(n, "/?tab=following"),
                name: "\u6211\u7684\u5173\u6ce8",
                target: "_blank"
            }, {
                url: "//www.toutiao.com/c/user/token/relation/".concat(n, "/?tab=followed"),
                name: "\u6211\u7684\u7c89\u4e1d",
                target: "_blank"
            }, {
                url: "//sso.toutiao.com/logout/",
                name: "\u9000\u51fa",
                target: "_self"
            }];
            if (!a)
                return w.a.createElement(w.a.Fragment, null);
            return w.a.createElement("li", {
                className: "tb-item userbox"
            }, n && w.a.createElement("div", {
                className: "username"
            }, w.a.createElement("a", {
                className: "user-head",
                href: "//www.toutiao.com/c/user/token/".concat(n, "/"),
                target: "blank"
            }, w.a.createElement("div", {
                className: "user-image"
            }, w.a.createElement("img", {
                src: null === t || void 0 === t ? void 0 : t.avatarUrl
            })), w.a.createElement("span", null, null === t || void 0 === t ? void 0 : t.name)), w.a.createElement("div", {
                className: "user-layer"
            }, w.a.createElement("ul", null, r.map((function(e) {
                return w.a.createElement("li", {
                    key: e.url
                }, w.a.createElement("a", {
                    href: e.url,
                    className: "layer-item",
                    target: e.target
                }, e.name))
            }
            ))))), !n && w.a.createElement("div", {
                className: "nav-login"
            }, w.a.createElement("a", {
                href: "//sso.toutiao.com/login/"
            }, "\u767b\u5f55")))
        };
        var ce = function e(t) {
            var a = [{
                url: "//www.wukong.com",
                name: "\u95ee\u7b54"
            }, {
                url: "//mp.toutiao.com/",
                name: "\u5934\u6761\u53f7"
            }, {
                url: "//tuchong.com?utm_source=toutiao&utm_medium=pc_header",
                name: "\u56fe\u866b"
            }, {
                url: "//stock.tuchong.com/?source=ttweb",
                name: "\u6b63\u7248\u56fe\u5e93"
            }, {
                url: t ? "//www.oceanengine.com/?source=pchometop" : "//ad.toutiao.com/promotion/?source2=pchometop",
                name: "\u5e7f\u544a\u6295\u653e"
            }, {
                url: "//www.dcdapp.com/?zt=tt_pc_home_top_bar",
                name: "\u61c2\u8f66\u5e1d"
            }];
            return w.a.createElement("li", {
                className: "tb-item more"
            }, w.a.createElement("a", {
                className: "tb-link",
                href: "/about/"
            }, "\u5934\u6761\u4ea7\u54c1"), w.a.createElement("div", {
                className: "layer"
            }, w.a.createElement("ul", null, a.map((function(e) {
                return w.a.createElement("li", {
                    key: e.url
                }, w.a.createElement("a", {
                    href: e.url,
                    className: "layer-item",
                    target: "blank"
                }, e.name))
            }
            )))))
        };
        var ue = function e(t) {
            var a = Object(b["useContext"])(y);
            var n = null === a || void 0 === a ? void 0 : a.loginUserInfo;
            var r = null === n || void 0 === n ? void 0 : n.userId;
            var i = t.isHomePage;
            var o = Object(b["useState"])(false)
              , l = z()(o, 2)
              , c = l[0]
              , u = l[1];
            var s = function e(t) {
                u(t)
            };
            return w.a.createElement("div", {
                className: "right-nav"
            }, w.a.createElement("ul", {
                className: "user-nav-list"
            }, !i && r && w.a.createElement("li", {
                className: "tb-item new-article"
            }, w.a.createElement("a", {
                className: "tb-link",
                href: "//mp.toutiao.com/new_article/",
                target: "blank"
            }, "\u53d1\u6587")), le(n), r && w.a.createElement("li", {
                className: "tb-item"
            }, w.a.createElement("a", {
                className: "tb-link",
                onClick: function e() {
                    return s(true)
                },
                href: "#"
            }, "\u53cd\u9988"), c && w.a.createElement(ie, {
                onClose: function e() {
                    return s(false)
                }
            })), i && w.a.createElement("li", {
                className: "tb-item"
            }, w.a.createElement("a", {
                className: "tb-link",
                href: "//www.toutiao.com/complain/",
                target: "blank"
            }, "\u4fb5\u6743\u6295\u8bc9")), !i && w.a.createElement("li", {
                className: "tb-item"
            }, w.a.createElement("a", {
                className: "tb-link",
                href: "//mp.toutiao.com/profile_v3_public/public/complains",
                target: "blank"
            }, "\u6295\u8bc9\u4fb5\u6743")), ce(i)))
        };
        var se = ue;
        var de = a("9ead4fe5af5ffb17466e");
        var ve = a.n(de);
        var me = a("55cc311e6b4a1953e4b2");
        function fe(e) {
            var t = he();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function he() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var pe = function(e) {
            f()(a, e);
            var t = fe(a);
            function a(e) {
                var n;
                s()(this, a);
                n = t.call(this, e);
                n.state = {
                    options: {
                        chineseTag: "",
                        crumbTag: "ch/news_entertainment"
                    },
                    keyword: "",
                    inputBorderColor: "#e8e8e8"
                };
                n.keywordRef = w.a.createRef();
                n.handleSearch = n.handleSearch.bind(Z()(n));
                n.onFocus = n.onFocus.bind(Z()(n));
                n.onBlur = n.onBlur.bind(Z()(n));
                n.handleChange = n.handleChange.bind(Z()(n));
                return n
            }
            v()(a, [{
                key: "handleSearch",
                value: function e() {
                    var t = this.state.keyword;
                    if (!t) {
                        var a, n;
                        null === (a = this.keywordRef) || void 0 === a ? void 0 : null === (n = a.current) || void 0 === n ? void 0 : n.focus();
                        return
                    }
                    window.open("//www.toutiao.com/search/?keyword=".concat(encodeURIComponent(t)))
                }
            }, {
                key: "onFocus",
                value: function e() {
                    this.setState({
                        inputBorderColor: "#ed4040",
                        keyword: ""
                    })
                }
            }, {
                key: "onBlur",
                value: function e() {
                    this.setState({
                        inputBorderColor: "#e8e8e8"
                    })
                }
            }, {
                key: "handleChange",
                value: function e(t) {
                    this.setState({
                        keyword: t.target.value
                    })
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this.state
                      , a = t.options
                      , n = t.keyword
                      , r = t.inputBorderColor;
                    var i = this.props.middlebarWidth;
                    return w.a.createElement("div", {
                        className: "middlebar"
                    }, w.a.createElement("div", {
                        className: "middlebar-inner",
                        style: {
                            width: i
                        }
                    }, w.a.createElement("div", {
                        className: "middlebar-left"
                    }, w.a.createElement("a", {
                        className: "logo-link",
                        href: "/"
                    }, w.a.createElement("img", {
                        className: "logo",
                        src: ve.a
                    })), a.chineseTag && w.a.createElement("div", {
                        className: "chinese-tag"
                    }, w.a.createElement("a", {
                        href: "//www.toutiao.com",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "\u9996\u9875"), "\xa0/\xa0", w.a.createElement("a", {
                        href: "//www.toutiao.com/".concat(a.crumbTag),
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, a.chineseTag), "\xa0/\xa0", w.a.createElement("span", {
                        className: "text"
                    }, "\u6b63\u6587"))), w.a.createElement("div", {
                        className: "middlebar-right"
                    }, w.a.createElement("form", {
                        name: "searchForm",
                        action: "/search/",
                        method: "get",
                        target: "_blank",
                        onSubmit: this.handleSearch
                    }, w.a.createElement("div", {
                        className: "input-group",
                        style: {
                            borderColor: r
                        }
                    }, w.a.createElement("input", {
                        className: "input-text",
                        name: "keyword",
                        value: n,
                        autoComplete: "off",
                        type: "text",
                        ref: this.keywordRef,
                        placeholder: "\u8bf7\u8f93\u5165\u5173\u952e\u5b57",
                        onFocus: this.onFocus,
                        onBlur: this.onBlur,
                        onClick: this.handleSearch,
                        onChange: this.handleChange
                    }), w.a.createElement("div", {
                        className: "btn-submit"
                    }, w.a.createElement("button", {
                        type: "submit"
                    }, w.a.createElement("i", {
                        className: "y-icon icon-search"
                    }))))))))
                }
            }]);
            return a
        }(w.a.Component);
        var _e = pe;
        var ge = a("eb2f48c62c6fb5e87518");
        function be(e) {
            var t = we();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function we() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var Ee = function(e) {
            f()(a, e);
            var t = be(a);
            function a() {
                s()(this, a);
                return t.apply(this, arguments)
            }
            v()(a, [{
                key: "render",
                value: function e() {
                    var t = this.props
                      , a = t.isHomePage
                      , n = t.hasBar
                      , r = t.middlebarWidth;
                    return w.a.createElement("div", {
                        className: "toutiao-header"
                    }, w.a.createElement("div", {
                        className: "topbar"
                    }, a && w.a.createElement(j, null), !a && w.a.createElement(Y, null), w.a.createElement(se, {
                        isHomePage: a
                    })), n && w.a.createElement(_e, {
                        middlebarWidth: r
                    }))
                }
            }]);
            return a
        }(w.a.PureComponent);
        Ee.defaultProps = {
            isHomePage: false,
            hasBar: false,
            middlebarWidth: 1060
        };
        var ye = Ee;
        var ke = a("729dc1bd9deb4e4e9a94");
        var Ne = function e() {
            return w.a.createElement("div", {
                className: "footer"
            }, w.a.createElement("div", null, w.a.createElement("span", {
                className: "fitem"
            }, "\xa9 ", (new Date).getFullYear(), " \u4eca\u65e5\u5934\u6761 "), w.a.createElement("a", {
                className: "fitem",
                href: "https://www.12377.cn/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "\u4e2d\u56fd\u4e92\u8054\u7f51\u4e3e\u62a5\u4e2d\u5fc3"), w.a.createElement("a", {
                className: "fitem",
                href: "https://tsm.miit.gov.cn/dxxzsp/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "\u4eacICP\u8bc1140141\u53f7"), w.a.createElement("a", {
                className: "fitem",
                href: "https://beian.miit.gov.cn",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "\u4eacICP\u590712025439\u53f7-3"), w.a.createElement("a", {
                className: "fitem",
                href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002002023",
                target: "_blank",
                rel: "noopener noreferrer"
            }, w.a.createElement("img", {
                src: "//s3.pstatp.com/toutiao/static/img/gongan.d0289dc.png"
            }), "\u4eac\u516c\u7f51\u5b89\u5907 11000002002023\u53f7")), w.a.createElement("div", null, w.a.createElement("a", {
                className: "fitem",
                href: "/license/",
                target: "_blank"
            }, "\u7f51\u7edc\u6587\u5316\u7ecf\u8425\u8bb8\u53ef\u8bc1"), w.a.createElement("a", {
                className: "fitem",
                href: "/a3642705768/",
                target: "_blank"
            }, "\u8ddf\u5e16\u8bc4\u8bba\u81ea\u5f8b\u7ba1\u7406\u627f\u8bfa\u4e66"), w.a.createElement("span", {
                className: "fitem"
            }, "\u8fdd\u6cd5\u548c\u4e0d\u826f\u4fe1\u606f\u4e3e\u62a5\u7535\u8bdd\uff1a400-140-2108"), w.a.createElement("span", {
                className: "fitem"
            }, "\u516c\u53f8\u540d\u79f0\uff1a\u5317\u4eac\u5b57\u8282\u8df3\u52a8\u79d1\u6280\u6709\u9650\u516c\u53f8")))
        };
        var Ce = Ne;
        var xe = a("b6196699b5f3c8d65fe7");
        var Ae = a.n(xe);
        var Ze = a("087f1d096d234182f9fa");
        var Se = a.n(Ze);
        var De = a("0d9dfce0e45672081850");
        var Be = a.n(De);
        var Me = a("91fd518c8e0a4e34db75");
        var Ue = a.n(Me);
        function Te(e, t) {
            if (void 0 === t)
                t = "undefined" !== typeof window ? window.location && window.location.search.substr(1) : "";
            var a = {};
            t && t.split("&").forEach((function(e) {
                if ("" === e)
                    return;
                var t = e.split("=")
                  , n = Ue()(t)
                  , r = n[0]
                  , i = n.slice(1);
                var o = decodeURIComponent(r);
                var l = decodeURIComponent(i.join("="));
                if (o.match(/\[\]$/)) {
                    var c = o.replace(/\[\]$/, "");
                    if (a[c] && a[c]instanceof Array)
                        a[c].push(l);
                    else
                        a[c] = [l]
                } else
                    a[o] = l
            }
            ));
            return e ? a[e] : a
        }
        function Ie(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            var a = "".concat(e);
            return Array(Math.abs(a.length - (t + 1))).join("0") + e
        }
        function Re(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "MM\u6708dd\u65e5 hh:mm:ss";
            var a = new Date(e);
            var n = a.getFullYear();
            var r = a.getMonth() + 1;
            var i = a.getDate();
            var o = a.getHours();
            var l = a.getMinutes();
            var c = a.getSeconds();
            return t.replace(/Y|y|MM?|dd?|hh?|mm?|ss?/g, (function(e) {
                return {
                    M: "".concat(r),
                    MM: Ie(r),
                    Y: "".concat(n),
                    d: "".concat(i),
                    dd: Ie(i),
                    h: "".concat(o),
                    hh: Ie(o),
                    m: "".concat(l),
                    mm: Ie(l),
                    s: "".concat(c),
                    ss: Ie(c),
                    y: "".concat(n % 100)
                }[e]
            }
            ))
        }
        function Pe(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
            var a = Ie(~~(e % 60));
            if (t) {
                var n = Ie(~~(e / 3600));
                var r = Ie(~~(e / 60) % 60);
                return "".concat(n, ":").concat(r, ":").concat(a)
            }
            var i = Ie(~~(e / 60));
            return "".concat(i, ":").concat(a)
        }
        function Le() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            var t = 1e3 * 60;
            var a = Be()() - 1e3 * e;
            var n = Math.floor(a / t);
            if (n < 1)
                return "1\u5206\u949f\u524d";
            if (n < 60)
                return "".concat(n, "\u5206\u949f\u524d");
            else if (n < 60 * 24)
                return "".concat(Math.floor(n / 60), "\u5c0f\u65f6\u524d");
            else if (n < 60 * 24 * 7)
                return "".concat(Math.floor(n / 1440), "\u5929\u524d");
            return Re(1e3 * e, "M\u6708d\u65e5")
        }
        function Qe(e, t) {
            var a = [];
            var n = function n() {
                var o = i[r];
                var l = e[o];
                if (null !== l && void 0 !== l)
                    if ("object" === Se()(l))
                        if (t && l instanceof Array && l.every((function(e) {
                            return "object" !== Se()(e)
                        }
                        )))
                            l.forEach((function(e) {
                                a.push("".concat(encodeURIComponent(o), "[]=").concat(encodeURIComponent(e)))
                            }
                            ));
                        else
                            a.push("".concat(encodeURIComponent(o), "=").concat(encodeURIComponent(N()(l))));
                    else
                        a.push("".concat(encodeURIComponent(o), "=").concat(encodeURIComponent(l)))
            };
            for (var r = 0, i = x()(e); r < i.length; r++)
                n();
            return a.join("&")
        }
        function Oe(e, t, a) {
            if (void 0 === t || 0 === x()(t).length)
                return e;
            var n = e.split("?")
              , r = z()(n, 2)
              , i = r[0]
              , o = r[1]
              , l = void 0 === o ? "" : o;
            var c;
            if (l) {
                var u = l.split("#");
                var s = z()(u, 2);
                l = s[0];
                var d = s[1];
                c = void 0 === d ? "" : d
            } else {
                var v = e.split("#");
                var m = z()(v, 2);
                i = m[0];
                var f = m[1];
                c = void 0 === f ? "" : f
            }
            var h = Te(void 0, l);
            h = Ae()(h, t);
            l = Qe(h, a);
            l = l && "?".concat(l);
            c = c && "#".concat(c);
            return "".concat(i).concat(l).concat(c)
        }
        function He(e) {
            try {
                return JSON.parse(e)
            } catch (t) {
                void 0;
                return null
            }
        }
        function je(e, t) {
            var a = 0;
            return function() {
                var n = Be()();
                if (n - a >= t) {
                    e();
                    a = n
                }
            }
        }
        function Fe(e) {
            if (!e)
                return "";
            if (0 === e.indexOf("http://"))
                return e.substr(5);
            return e
        }
        var qe = a("f2c437782da5c75fe8f4");
        var Ge = function e() {
            var t, a;
            var n = Object(b["useContext"])(y);
            var i = null === n || void 0 === n ? void 0 : n.profileUserInfo;
            var l = null === n || void 0 === n ? void 0 : n.isSelf;
            var c = null === n || void 0 === n ? void 0 : n.defaultBgImg;
            var u = null === i || void 0 === i ? void 0 : i.userId;
            var s = null === i || void 0 === i ? void 0 : i.mediaInfo;
            var d = "/c/user/token/".concat(u, "/");
            var v = (null === i || void 0 === i ? void 0 : i.description) || "";
            if ("2" === (null === s || void 0 === s ? void 0 : s.right_knight_sign_status)) {
                var m = He((null === s || void 0 === s ? void 0 : s.kbanquan_sign) || "{}")
                  , f = m.status;
                if ("2" === f)
                    v += "\uff08\u672c\u5934\u6761\u53f7\u5df2\u7ecf\u4e0e\u7ef4\u6743\u9a91\u58eb\u3001\u5feb\u7248\u6743\u7b7e\u7ea6\uff09";
                else
                    v += "\uff08\u672c\u5934\u6761\u53f7\u5df2\u7ecf\u4e0e\u7ef4\u6743\u9a91\u58eb\u7b7e\u7ea6\uff09"
            }
            var h = (null === n || void 0 === n ? void 0 : null === (t = n.relation) || void 0 === t ? void 0 : t.isFollowed) || false;
            var p = Object(b["useState"])((null === n || void 0 === n ? void 0 : null === (a = n.relation) || void 0 === a ? void 0 : a.isFollowing) || false)
              , _ = z()(p, 2)
              , g = _[0]
              , E = _[1];
            var k = function() {
                var e = o()(r.a.mark((function e() {
                    var t, a;
                    return r.a.wrap((function e(n) {
                        while (1)
                            switch (n.prev = n.next) {
                            case 0:
                                if (!g) {
                                    n.next = 7;
                                    break
                                }
                                n.next = 3;
                                return S["a"].user.unfollowUsers(u);
                            case 3:
                                t = n.sent;
                                if ("success" === t.data.message)
                                    E(false);
                                n.next = 11;
                                break;
                            case 7:
                                n.next = 9;
                                return S["a"].user.followUsers(u);
                            case 9:
                                a = n.sent;
                                if ("success" === a.data.message)
                                    E(true);
                            case 11:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function t() {
                    return e.apply(this, arguments)
                }
            }();
            var N = function e() {
                if (g && h)
                    return w.a.createElement("div", {
                        className: "btn-publish each",
                        onClick: k
                    }, "\u4e92\u76f8\u5173\u6ce8");
                else if (g)
                    return w.a.createElement("div", {
                        className: "btn-publish following",
                        onClick: k
                    }, "\u5df2\u5173\u6ce8");
                return w.a.createElement("div", {
                    className: "btn-publish",
                    onClick: k
                }, "\u5173\u6ce8")
            };
            return w.a.createElement("div", {
                className: "profile-header"
            }, w.a.createElement("a", {
                href: d
            }, w.a.createElement("img", {
                className: "bg-header",
                src: c,
                alt: "\u5934\u50cf"
            })), w.a.createElement("div", null, w.a.createElement("a", {
                href: d
            }, w.a.createElement("img", {
                src: null === i || void 0 === i ? void 0 : i.avatarUrl,
                alt: "\u4f5c\u8005\u5934\u50cf",
                className: "avatar"
            })), w.a.createElement("div", null, w.a.createElement("a", {
                href: d,
                className: "title"
            }, w.a.createElement("span", {
                className: "name"
            }, null === i || void 0 === i ? void 0 : i.screenName), (null === i || void 0 === i ? void 0 : i.userVerified) && w.a.createElement("span", {
                className: "y-icon icon-dv"
            }), (null === i || void 0 === i ? void 0 : i.pgcIcon) && w.a.createElement("span", {
                className: "tth"
            })), w.a.createElement("a", {
                href: d,
                className: "des"
            }, v)), !l && N()))
        };
        var Ve = Ge;
        var We = a("9039589ec6aa98b904b3");
        var Je = function e() {
            var t = Object(b["useState"])(null)
              , a = z()(t, 2)
              , n = a[0]
              , r = a[1];
            var i = Object(b["useContext"])(y);
            var o = null === i || void 0 === i ? void 0 : i.profileUserInfo;
            var l = null === o || void 0 === o ? void 0 : o.userId;
            Object(b["useEffect"])((function() {
                if (!l)
                    return;
                S["a"].relation.getFansStat(l).then((function(e) {
                    r(e.data.data)
                }
                ))
            }
            ), [l]);
            return w.a.createElement("div", {
                className: "relation"
            }, w.a.createElement("dl", null, w.a.createElement("dt", null, w.a.createElement("a", {
                href: "/c/user/token/relation/".concat(l, "/?tab=following")
            }, w.a.createElement("h3", null, (null === n || void 0 === n ? void 0 : n.following) || 0), w.a.createElement("p", null, "\u5173\u6ce8"))), w.a.createElement("dd", null, w.a.createElement("a", {
                href: "/c/user/token/relation/".concat(l, "/?tab=followed")
            }, w.a.createElement("h3", null, (null === n || void 0 === n ? void 0 : n.fans) || 0), w.a.createElement("p", null, "\u7c89\u4e1d")))))
        };
        var Ye = Je;
        var Ke = a("4dd64d4a0423cee985ac");
        var ze = function e(t) {
            return w.a.createElement("div", {
                className: B()("line", {
                    image: t.image_url
                })
            }, t.image_url && w.a.createElement("a", {
                className: "lbox",
                href: t.url,
                target: "_blank",
                rel: "noopener noreferrer"
            }, w.a.createElement("img", {
                src: t.image_url,
                alt: ""
            }), t.video_duration_str && w.a.createElement("span", {
                className: "duration"
            }, t.video_duration_str), t.gallery_image_count && w.a.createElement("span", {
                className: "count"
            }, t.gallery_image_count, "\u56fe")), w.a.createElement("div", {
                className: "rbox"
            }, w.a.createElement("div", {
                className: "rbox-inner"
            }, w.a.createElement("a", {
                title: t.title,
                href: t.url,
                target: "_blank",
                rel: "noopener noreferrer"
            }, t.title), w.a.createElement("span", null, t.go_detail_count, "\u9605\u8bfb"))))
        };
        var Xe = function e() {
            var t = Object(b["useState"])([])
              , a = z()(t, 2)
              , n = a[0]
              , r = a[1];
            var i = Object(b["useContext"])(y);
            var o = null === i || void 0 === i ? void 0 : i.profileUserInfo;
            var l = null === o || void 0 === o ? void 0 : o.userId;
            var c = null === o || void 0 === o ? void 0 : o.mediaId;
            Object(b["useEffect"])((function() {
                if (!l || !c)
                    return;
                S["a"].feed.getRecentList(l, c).then((function(e) {
                    var t;
                    r((null === (t = e.data.data) || void 0 === t ? void 0 : t.hot_articles) || [])
                }
                ))
            }
            ), [l, c]);
            if (!n || !n.length)
                return null;
            return w.a.createElement("div", {
                className: "recent"
            }, w.a.createElement("h2", null, "\u8fd1\u671f\u6700\u4f73\u6587\u7ae0"), w.a.createElement("div", {
                className: "recent-list"
            }, w.a.createElement("ul", null, n.map((function(e) {
                return w.a.createElement("li", {
                    key: e.item_id
                }, ze(e))
            }
            )))))
        };
        var $e = Xe;
        var et = a("c80642c28792cc54f380");
        var tt = a("16e8f7e35455aa7a2a22");
        var at = function e(t) {
            var a = t.tabs
              , n = t.activeTabIndex
              , r = t.onClick;
            return w.a.createElement("div", {
                className: "tabs-nav"
            }, a.map((function(e, t) {
                return w.a.createElement("div", {
                    key: t,
                    className: B()("tab-item", {
                        active: t === n
                    }),
                    onClick: function a() {
                        return r(e, t)
                    }
                }, e.show_name)
            }
            )))
        };
        var nt = at;
        var rt = a("87d21610517f2c3414b3");
        var it = a("59a23f11172d60f297c0");
        var ot = function e(t) {
            var a = t.visible;
            if (!a)
                return null;
            return w.a.createElement("div", {
                className: "profile-feed-loading ball-pulse"
            }, w.a.createElement("div", null), w.a.createElement("div", null), w.a.createElement("div", null), w.a.createElement("span", null, "\u52a0\u8f7d\u4e2d\u22c5\u22c5\u22c5"))
        };
        var lt = ot;
        function ct(e) {
            var t = ut();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function ut() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var st = function(e) {
            f()(a, e);
            var t = ct(a);
            function a() {
                var e;
                s()(this, a);
                e = t.apply(this, arguments);
                e.feedBoxEL = null;
                e.handleScroll = je((function() {
                    var t, a;
                    var n = e.props
                      , r = n.loading
                      , i = n.isEmpty
                      , o = n.hasMore
                      , l = n.onLoadMore;
                    if (!o || r || i)
                        return;
                    var c = null === (t = e.feedBoxEL) || void 0 === t ? void 0 : t.getBoundingClientRect();
                    var u = (null === c || void 0 === c ? void 0 : c.top) || 0;
                    var s = (null === (a = e.feedBoxEL) || void 0 === a ? void 0 : a.clientHeight) || 0;
                    var d = u + s - window.screen.height;
                    if (d < 300)
                        null === l || void 0 === l ? void 0 : l()
                }
                ), 300);
                return e
            }
            v()(a, [{
                key: "componentDidMount",
                value: function e() {
                    window.addEventListener("scroll", this.handleScroll)
                }
            }, {
                key: "componentWillUnmount",
                value: function e() {
                    window.addEventListener("scroll", this.handleScroll)
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this;
                    var a = this.props
                      , n = a.loading
                      , r = a.isEmpty
                      , i = a.children;
                    return w.a.createElement("div", {
                        className: "feed-box",
                        ref: function e(a) {
                            t.feedBoxEL = a
                        }
                    }, w.a.createElement(lt, {
                        visible: n && r
                    }), r && !n && w.a.createElement("div", {
                        className: "empty"
                    }, "\u6682\u65e0\u5185\u5bb9"), i, w.a.createElement(lt, {
                        visible: n && !r
                    }))
                }
            }]);
            return a
        }(w.a.Component);
        var dt = a("020ba8dae3d3021d9966");
        var vt = a.n(dt);
        var mt = a("2b4fba5b8716cb99e98e");
        var ft = a.n(mt);
        var ht = a("bd61c3e57dc18e488613");
        var pt = a.n(ht);
        var _t = a("8f4085b35f259db3270e");
        var gt = a.n(_t);
        var bt = a("92285e035e86b5e44a25");
        var wt = a.n(bt);
        var Et = a("bdda11d3044bba4e976b");
        function yt(e) {
            var t = kt();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function kt() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var Nt = function(e) {
            f()(a, e);
            var t = yt(a);
            function a() {
                s()(this, a);
                return t.apply(this, arguments)
            }
            v()(a, [{
                key: "render",
                value: function e() {
                    var t = this.props
                      , a = t.dutation
                      , n = t.top
                      , r = t.bottom
                      , i = t.left
                      , o = t.right;
                    var l = "string" === typeof a ? a : Pe(a);
                    return w.a.createElement("span", {
                        className: "video-duration",
                        style: {
                            top: n,
                            bottom: r,
                            left: i,
                            right: o
                        }
                    }, l)
                }
            }]);
            return a
        }(w.a.PureComponent);
        var Ct = a("2e0796c118320b51c6e6");
        var xt = a("7c04e1c6a9d8a4a067f5");
        function At(e) {
            var t = Zt();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function Zt() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var St = function(e) {
            f()(a, e);
            var t = At(a);
            function a() {
                var e;
                s()(this, a);
                e = t.apply(this, arguments);
                e.state = {
                    fade: false
                };
                return e
            }
            v()(a, [{
                key: "componentDidMount",
                value: function e() {
                    var t = this;
                    this.timer = setTimeout((function() {
                        t.setState({
                            fade: true
                        })
                    }
                    ), 2e3)
                }
            }, {
                key: "componentWillUnmount",
                value: function e() {
                    clearTimeout(this.timer)
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this.state.fade;
                    var a = this.props.msg;
                    return w.a.createElement("div", {
                        className: B()("toast", {
                            fade: t
                        })
                    }, a)
                }
            }]);
            return a
        }(w.a.PureComponent);
        function Dt(e, t) {
            var a = x()(e);
            if (wt.a) {
                var n = wt()(e);
                if (t)
                    n = n.filter((function(t) {
                        return gt()(e, t).enumerable
                    }
                    ));
                a.push.apply(a, n)
            }
            return a
        }
        function Bt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                if (t % 2)
                    Dt(Object(a), true).forEach((function(t) {
                        $()(e, t, a[t])
                    }
                    ));
                else if (pt.a)
                    ft()(e, pt()(a));
                else
                    Dt(Object(a)).forEach((function(t) {
                        vt()(e, t, gt()(a, t))
                    }
                    ))
            }
            return e
        }
        function Mt(e) {
            var t = document.createElement("div");
            document.body.appendChild(t);
            function a(e) {
                Ct["render"](b["createElement"](St, Ae()({}, e)), t)
            }
            function n() {
                var e = Ct["unmountComponentAtNode"](t);
                if (e && t.parentNode)
                    t.parentNode.removeChild(t)
            }
            a(Bt({}, e));
            setTimeout((function() {
                return n()
            }
            ), 3e3);
            return {}
        }
        St.info = function(e) {
            return Mt({
                msg: e
            })
        }
        ;
        var Ut = St;
        var Tt = a("cecef77e4c62435bb973");
        function It(e, t) {
            var a = x()(e);
            if (wt.a) {
                var n = wt()(e);
                if (t)
                    n = n.filter((function(t) {
                        return gt()(e, t).enumerable
                    }
                    ));
                a.push.apply(a, n)
            }
            return a
        }
        function Rt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                if (t % 2)
                    It(Object(a), true).forEach((function(t) {
                        $()(e, t, a[t])
                    }
                    ));
                else if (pt.a)
                    ft()(e, pt()(a));
                else
                    It(Object(a)).forEach((function(t) {
                        vt()(e, t, gt()(a, t))
                    }
                    ))
            }
            return e
        }
        function Pt(e) {
            var t = Lt();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function Lt() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var Qt = function(e) {
            f()(a, e);
            var t = Pt(a);
            function a() {
                s()(this, a);
                return t.apply(this, arguments)
            }
            v()(a, [{
                key: "formatUrl",
                value: function e(t) {
                    var a = t && 0 === t.indexOf("sslocal://profile");
                    if (a) {
                        var n = /.+uid=(\d+).*/;
                        var r = n.exec(t);
                        if (r && r[1])
                            return "https://www.toutiao.com/c/user/".concat(r[1], "/")
                    }
                    return t
                }
            }, {
                key: "handleDislikeClick",
                value: function e(t) {
                    this._dislike(t)
                }
            }, {
                key: "_dislike",
                value: function() {
                    var e = o()(r.a.mark((function e(t) {
                        var a, n, i;
                        return r.a.wrap((function e(r) {
                            while (1)
                                switch (r.prev = r.next) {
                                case 0:
                                    r.next = 2;
                                    return S["a"].user.dislikeArticle(null === t || void 0 === t ? void 0 : t.group_id, null === t || void 0 === t ? void 0 : t.item_id);
                                case 2:
                                    a = r.sent;
                                    if ("success" === a.data.message) {
                                        null === (n = (i = this.props).onClick) || void 0 === n ? void 0 : n.call(i);
                                        Ut.info("\u5df2\u53d6\u6d88\u6536\u85cf")
                                    } else
                                        Ut.info("\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5");
                                case 4:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "deleteUgcVideo",
                value: function e(t) {
                    if (window.confirm("\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f"))
                        this._removeVideo(t)
                }
            }, {
                key: "_removeVideo",
                value: function() {
                    var e = o()(r.a.mark((function e(t) {
                        var a, n, i;
                        return r.a.wrap((function e(r) {
                            while (1)
                                switch (r.prev = r.next) {
                                case 0:
                                    r.next = 2;
                                    return S["a"].user.delUgcVideo(null === t || void 0 === t ? void 0 : t.item_id);
                                case 2:
                                    a = r.sent;
                                    if ("success" === a.data.message) {
                                        null === (n = (i = this.props).onClick) || void 0 === n ? void 0 : n.call(i);
                                        Ut.info("\u5df2\u5220\u9664")
                                    } else
                                        Ut.info("\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5");
                                case 4:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "render",
                value: function e() {
                    var t, a, n = this;
                    var r = this.props
                      , i = r.item
                      , o = r.isFavourite;
                    var l = this.context.isSelf;
                    i.source_url = this.formatUrl(i.source_url);
                    i.image_url = Fe(i.image_url);
                    i.image_list = i.image_list.map((function(e) {
                        return Rt(Rt({}, e), {}, {
                            url: Fe(e.url)
                        })
                    }
                    ));
                    return w.a.createElement("div", {
                        className: "article-card"
                    }, w.a.createElement("div", {
                        className: B()("normal", {
                            rbox: i.single_mode && i.image_url,
                            "no-image": !i.single_mode && !i.has_gallery
                        })
                    }, w.a.createElement("div", {
                        className: "rbox-inner"
                    }, w.a.createElement("div", {
                        className: "title-box"
                    }, w.a.createElement("a", {
                        className: "link title",
                        href: i.source_url,
                        target: "blank"
                    }, null === i || void 0 === i ? void 0 : i.title)), (null === i || void 0 === i ? void 0 : i.has_gallery) && w.a.createElement("div", {
                        className: "img-list"
                    }, null === i || void 0 === i ? void 0 : null === (t = i.image_list) || void 0 === t ? void 0 : t.map((function(e, t) {
                        return w.a.createElement("a", {
                            className: "img-wrap",
                            href: i.source_url,
                            target: "blank",
                            key: t
                        }, w.a.createElement("img", {
                            src: e.url,
                            alt: ""
                        }))
                    }
                    )), (null === i || void 0 === i ? void 0 : null === (a = i.image_list) || void 0 === a ? void 0 : a.length) < 4 && w.a.createElement("a", {
                        className: "img-wrap",
                        href: i.source_url,
                        target: "blank"
                    }, w.a.createElement("span", {
                        className: "add-info"
                    }, "\u67e5\u770b\u8be6\u60c5\xa0", w.a.createElement("i", {
                        className: "y-icon icon-next-page"
                    }))), !i.ad_id && w.a.createElement("span", {
                        className: "img-num"
                    }, null === i || void 0 === i ? void 0 : i.gallary_image_count, "\u56fe")), w.a.createElement("div", {
                        className: "article-footer"
                    }, w.a.createElement("div", {
                        className: "y-left"
                    }, (null === i || void 0 === i ? void 0 : i.is_stick) && w.a.createElement("span", {
                        className: "lbtn ltop"
                    }, "\u7f6e\u9876"), "video" !== (null === i || void 0 === i ? void 0 : i.article_genre) && w.a.createElement("a", {
                        className: "lbtn",
                        href: i.source_url,
                        target: "blank"
                    }, null === i || void 0 === i ? void 0 : i.go_detail_count, "\u9605\u8bfb\xa0\u22c5"), "video" === (null === i || void 0 === i ? void 0 : i.article_genre) && w.a.createElement("a", {
                        className: "lbtn",
                        href: i.source_url,
                        target: "blank"
                    }, null === i || void 0 === i ? void 0 : i.detail_play_effective_count, "\u64ad\u653e\xa0\u22c5"), w.a.createElement("a", {
                        className: "lbtn comment",
                        href: "".concat(i.source_url, "/#comment_area"),
                        target: "blank"
                    }, "\xa0", null === i || void 0 === i ? void 0 : i.comments_count, "\u8bc4\u8bba\xa0"), i.behot_time && w.a.createElement("span", {
                        className: "lbtn"
                    }, "\u22c5\xa0", null === i || void 0 === i ? void 0 : i.behot_time)), w.a.createElement("div", {
                        className: "y-right"
                    }, o && w.a.createElement("span", {
                        className: "dislike",
                        onClick: function e() {
                            return n.handleDislikeClick(i)
                        }
                    }, "\u53d6\u6d88\u6536\u85cf"), !o && (null === i || void 0 === i ? void 0 : i.is_ugc_item) && l && w.a.createElement("span", {
                        className: "trash",
                        onClick: function e() {
                            return n.deleteUgcVideo(i)
                        }
                    }, w.a.createElement("i", {
                        className: "y-icon icon-trash"
                    }), w.a.createElement("span", null, "\u5220\u9664")))))), w.a.createElement("div", {
                        className: "lbox"
                    }, (null === i || void 0 === i ? void 0 : i.single_mode) && (null === i || void 0 === i ? void 0 : i.image_url) && w.a.createElement("a", {
                        className: "img-wrap",
                        href: i.source_url,
                        target: "blank"
                    }, w.a.createElement("img", {
                        src: null === i || void 0 === i ? void 0 : i.image_url,
                        alt: ""
                    }), (null === i || void 0 === i ? void 0 : i.has_video) && (null === i || void 0 === i ? void 0 : i.video_duration_str) && w.a.createElement(Nt, {
                        dutation: null === i || void 0 === i ? void 0 : i.video_duration_str,
                        bottom: 4,
                        right: 4
                    }))))
                }
            }]);
            return a
        }(w.a.Component);
        Qt.contextType = y;
        var Ot = Qt;
        var Ht = a("02d5e5b40e309506a847");
        var jt = a.n(Ht);
        var Ft = a("2eb48d33a79851762604");
        function qt(e) {
            var t = Gt();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function Gt() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var Vt = function(e) {
            f()(a, e);
            var t = qt(a);
            function a() {
                s()(this, a);
                return t.apply(this, arguments)
            }
            v()(a, [{
                key: "handleToDetail",
                value: function e(t) {
                    window.open(t)
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this;
                    var a = this.props.item;
                    return w.a.createElement("div", {
                        className: "collection-card"
                    }, w.a.createElement("div", {
                        className: "header"
                    }, w.a.createElement("a", {
                        className: "title",
                        onClick: function e() {
                            return t.handleToDetail(a.url)
                        }
                    }, a.title), w.a.createElement("p", {
                        className: "more",
                        onClick: function e() {
                            return t.handleToDetail(a.url)
                        }
                    }, "\u66f4\u591a", w.a.createElement("span", {
                        className: "right-bg",
                        style: {
                            backgroundImage: "url(".concat(jt.a, ")")
                        }
                    }))), w.a.createElement("div", {
                        className: "content"
                    }, a.episodes.map((function(e) {
                        var a;
                        return w.a.createElement("div", {
                            className: "item",
                            key: e.url,
                            onClick: function a() {
                                return t.handleToDetail(e.url)
                            }
                        }, w.a.createElement("img", {
                            className: "item-img",
                            src: Fe(null === e || void 0 === e ? void 0 : null === (a = e.middle_image) || void 0 === a ? void 0 : a.url),
                            alt: ""
                        }), w.a.createElement("p", {
                            className: "item-time"
                        }, Pe(e.duration)), w.a.createElement("div", {
                            className: "item-title"
                        }, e.title), w.a.createElement("div", {
                            className: "item-sub"
                        }, e.play_count, "\u64ad\u653e\xb7", e.comment_count, "\u8bc4\u8bba"))
                    }
                    ))))
                }
            }]);
            return a
        }(w.a.Component);
        var Wt = Vt;
        var Jt = a("0334423887b564215b46");
        function Yt(e, t) {
            var a = x()(e);
            if (wt.a) {
                var n = wt()(e);
                if (t)
                    n = n.filter((function(t) {
                        return gt()(e, t).enumerable
                    }
                    ));
                a.push.apply(a, n)
            }
            return a
        }
        function Kt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                if (t % 2)
                    Yt(Object(a), true).forEach((function(t) {
                        $()(e, t, a[t])
                    }
                    ));
                else if (pt.a)
                    ft()(e, pt()(a));
                else
                    Yt(Object(a)).forEach((function(t) {
                        vt()(e, t, gt()(a, t))
                    }
                    ))
            }
            return e
        }
        function zt(e) {
            var t = Xt();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function Xt() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var $t = function(e) {
            f()(a, e);
            var t = zt(a);
            function a() {
                var e;
                s()(this, a);
                e = t.apply(this, arguments);
                e.state = {
                    opts: {
                        thread_id: 0,
                        open_url: "",
                        user: {
                            avatar_url: "",
                            name: "",
                            user_verified: 0
                        },
                        authInfo: {},
                        create_time: 0,
                        read_count: 0,
                        digg_count: 0,
                        comment_count: 0,
                        rich_content: "",
                        ugc_images: [""],
                        show_count: 0,
                        show_text: "",
                        comment_id: "",
                        is_stick: false,
                        forward: {
                            id: "",
                            uid: 0,
                            name: "",
                            avatar_url: "",
                            share_url: "",
                            create_time: "",
                            read_count: 0,
                            digg_count: 0,
                            comment_count: 0,
                            rich_content: "",
                            ugc_images: [""],
                            show_count: 0,
                            show_text: "",
                            profile_url: ""
                        }
                    }
                };
                return e
            }
            v()(a, [{
                key: "componentDidMount",
                value: function e() {
                    var t = this.props.item;
                    var a = this._formatWeitoutiaoData(t);
                    this.setState({
                        opts: a
                    })
                }
            }, {
                key: "_needHideByQuanzi",
                value: function e(t) {
                    if (!t)
                        return false;
                    var a = t.business_payload;
                    if (!a)
                        return false;
                    try {
                        a = JSON.parse(a)
                    } catch (n) {
                        void 0;
                        return false
                    }
                    if ("1" === a.community_visibility)
                        return true;
                    return false
                }
            }, {
                key: "_formatWeitoutiaoData",
                value: function e(t) {
                    var a, n, r, i, o, l;
                    var c = null;
                    var u = (null === (a = t) || void 0 === a ? void 0 : a.is_stick) || false;
                    if ((null === (n = t) || void 0 === n ? void 0 : null === (r = n.concern_talk_cell) || void 0 === r ? void 0 : r.packed_json_str) && 32 === t.cell_type) {
                        var s, d, v, m;
                        var f = He(null === (s = t) || void 0 === s ? void 0 : null === (d = s.concern_talk_cell) || void 0 === d ? void 0 : d.packed_json_str);
                        var h = null === f || void 0 === f ? void 0 : f.user;
                        if (this._needHideByQuanzi(f))
                            return null;
                        c = {
                            thread_id: null === (v = t) || void 0 === v ? void 0 : v.concern_talk_cell.id,
                            open_url: "https://www.toutiao.com/a".concat(null === (m = t) || void 0 === m ? void 0 : m.concern_talk_cell.id),
                            user: {
                                avatar_url: Fe(null === h || void 0 === h ? void 0 : h.avatar_url),
                                name: null === h || void 0 === h ? void 0 : h.name,
                                user_verified: null === h || void 0 === h ? void 0 : h.user_verified
                            },
                            authInfo: h.user_auth_info,
                            create_time: f.create_time,
                            read_count: f.read_count,
                            digg_count: f.digg_count,
                            comment_count: f.comment_count,
                            rich_content: f.rich_content || f.content,
                            ugc_images: f.large_image_list ? f.large_image_list.map((function(e) {
                                return Fe(e.url)
                            }
                            )) : [],
                            show_count: f.show_count,
                            show_text: f.show_text,
                            is_stick: u
                        }
                    } else if (null === (i = t) || void 0 === i ? void 0 : i.stream_cell) {
                        t = t.stream_cell;
                        var p = t
                          , _ = p.cell_type;
                        if (-1 === [0, 32, 56].indexOf(_))
                            return null;
                        t.raw_data = t.raw_data ? He(t.raw_data) : {};
                        var g = t.raw_data.id_str || t.id;
                        var b = this.state.opts;
                        c = Kt(Kt({}, b), {}, {
                            thread_id: g,
                            open_url: "https://www.toutiao.com/a".concat(g),
                            is_stick: u
                        });
                        if (this._needHideByQuanzi(t.raw_data))
                            return null;
                        switch (_) {
                        case 0:
                            if (t.has_video)
                                return null;
                            c.user.avatar_url = Fe(t.user_info.avatar_url);
                            c.user.name = t.user_info.name;
                            c.create_time = t.publish_time;
                            c.authInfo = t.user_info.user_auth_info || "";
                            c.read_count = t.read_count;
                            c.digg_count = t.digg_count;
                            c.comment_count = t.comment_count;
                            c.rich_content = t.title;
                            c.show_count = t.show_count;
                            c.show_text = t.show_text;
                            if (28 === t.cell_layout_style && t.gallary_image_count > 1 && void 0 !== t.gallary_style)
                                c.ugc_images = t.image_list && t.image_list.length > 0 ? t.image_list.map((function(e) {
                                    return Fe(e.url)
                                }
                                )) : [];
                            else {
                                var w;
                                c.ugc_images = (null === (w = t.middle_image) || void 0 === w ? void 0 : w.url) ? [Fe(t.middle_image.url)] : []
                            }
                            break;
                        case 32:
                            c.user.avatar_url = Fe(t.user.avatar_url);
                            c.user.name = t.user.name;
                            c.create_time = t.create_time;
                            c.authInfo = t.user.user_auth_info || "";
                            c.read_count = t.read_count;
                            c.digg_count = t.digg_count;
                            c.comment_count = t.comment_count;
                            c.show_count = t.show_count;
                            c.show_text = t.show_text;
                            if (t.origin_common_content && 1 === t.origin_common_content.style)
                                c.comment_id = g;
                            else
                                c.rich_content = t.rich_content || t.content;
                            c.ugc_images = [];
                            if (null === (o = t.origin_common_content) || void 0 === o ? void 0 : null === (l = o.cover_image) || void 0 === l ? void 0 : l.url) {
                                c.ugc_images = [Fe(t.origin_common_content.cover_image.url)];
                                c.comment_id = g
                            } else {
                                var E = t.ugc_u13_cut_image_list && t.ugc_u13_cut_image_list.length ? t.ugc_u13_cut_image_list : t.ugc_cut_image_list;
                                if (E && E.length > 0)
                                    c.ugc_images = [Fe(E[0].url)]
                            }
                            if (t.origin_thread && t.origin_thread.show_origin) {
                                var y;
                                var k = t.origin_thread;
                                var N = k.action || {};
                                var C = (null === (y = k.user) || void 0 === y ? void 0 : y.info) || k.user || {};
                                var x = N.show_count || k.show_count;
                                c.forward = {
                                    id: "",
                                    uid: C.id || C.user_id,
                                    name: C.name,
                                    avatar_url: Fe(C.avatar_url),
                                    share_url: k.share_url,
                                    create_time: k.create_time,
                                    read_count: N.read_count || k.read_count || 0,
                                    digg_count: N.digg_count || k.digg_count || 0,
                                    comment_count: N.comment_count || k.comment_count || 0,
                                    rich_content: k.rich_content || k.content,
                                    ugc_images: !k.large_image_list ? [] : k.large_image_list.map((function(e) {
                                        return Fe(e.url)
                                    }
                                    )),
                                    show_count: x,
                                    show_text: N.show_text || k.show_text,
                                    profile_url: ""
                                };
                                c.comment_id = g
                            }
                            break;
                        case 56:
                            var A = 0 === t.raw_data.is_repost;
                            if (A)
                                return null;
                            c.comment_id = g;
                            c.user.avatar_url = Fe(t.raw_data.comment_base.user.info.avatar_url);
                            c.user.name = t.raw_data.comment_base.user.info.name;
                            c.create_time = t.raw_data.comment_base.create_time;
                            c.authInfo = t.raw_data.comment_base.user.info.user_auth_info || "";
                            c.read_count = t.raw_data.comment_base.action.read_count;
                            c.digg_count = t.raw_data.comment_base.action.digg_count;
                            c.comment_count = t.raw_data.comment_base.action.comment_count;
                            c.show_count = t.raw_data.comment_base.action.show_count;
                            c.show_text = t.raw_data.comment_base.action.show_text;
                            if (t.raw_data.origin_common_content && 1 === t.raw_data.origin_common_content.style)
                                c.rich_content = t.raw_data.origin_common_content.rich_title || t.raw_data.origin_common_content.title;
                            else
                                c.rich_content = t.raw_data.comment_base.rich_content || t.raw_data.comment_base.content;
                            if (!t.raw_data.show_origin)
                                c.ugc_images = [];
                            if (t.raw_data.origin_common_content && t.raw_data.show_origin) {
                                var Z;
                                var S = t.raw_data.origin_common_content;
                                c.ugc_images = [];
                                c.forward.ugc_images = (null === (Z = S.cover_image) || void 0 === Z ? void 0 : Z.url) ? [Fe(S.cover_image.url)] : [];
                                c.forward.rich_content = S.rich_title || S.title
                            }
                            if (t.raw_data.origin_thread && t.raw_data.show_origin) {
                                var D;
                                var B = t.raw_data.origin_thread;
                                var M = B.action || {};
                                var U = (null === (D = B.user) || void 0 === D ? void 0 : D.info) || B.user || {};
                                var T = M.show_count || B.show_count;
                                c.ugc_images = [];
                                c.forward = {
                                    id: "",
                                    uid: U.id || U.user_id,
                                    name: U.name,
                                    avatar_url: Fe(U.avatar_url),
                                    share_url: B.share_url,
                                    create_time: B.create_time,
                                    read_count: M.read_count || B.read_count || 0,
                                    digg_count: M.digg_count || B.digg_count || 0,
                                    comment_count: M.comment_count || B.comment_count || 0,
                                    rich_content: B.rich_content || B.content,
                                    ugc_images: !B.large_image_list ? [] : B.large_image_list.map((function(e) {
                                        return Fe(e.url)
                                    }
                                    )),
                                    show_count: T,
                                    show_text: M.show_text || B.show_text,
                                    profile_url: ""
                                }
                            } else if (t.raw_data.origin_group && t.raw_data.show_origin) {
                                var I = t.raw_data.origin_group;
                                var R = I.action || {};
                                var P = I.user && I.user.info ? I.user.info : I.user_info || I.user || {};
                                var L = R.show_count || I.show_count;
                                c.ugc_images = [];
                                c.forward = {
                                    id: "",
                                    uid: P.id || P.user_id,
                                    name: P.name,
                                    avatar_url: Fe(P.avatar_url),
                                    share_url: I.article_url,
                                    create_time: I.create_time,
                                    read_count: R.read_count || I.read_count || 0,
                                    digg_count: R.digg_count || I.digg_count || 0,
                                    comment_count: R.comment_count || I.comment_count || 0,
                                    rich_content: I.title,
                                    ugc_images: I.middle_image ? [Fe(I.middle_image.url)] : I.ugc_video_cover ? [Fe(I.ugc_video_cover.url)] : [],
                                    show_count: L,
                                    show_text: R.show_text || I.show_text,
                                    profile_url: ""
                                }
                            }
                            break;
                        default:
                            break
                        }
                    }
                    if (c) {
                        if (c.forward)
                            c.forward.profile_url = "https://www.toutiao.com/c/user/".concat(c.forward.uid, "/");
                        if (c.authInfo) {
                            c.authInfo = He(c.authInfo);
                            c.user.user_verified = -1 !== [0, 1, 2, "0", "1", "2"].indexOf(c.authInfo.auth_type)
                        }
                        return c
                    }
                    return null
                }
            }, {
                key: "deleteUgcItem",
                value: function e(t) {
                    if (window.confirm("\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f"))
                        this._removeUgcItem(t)
                }
            }, {
                key: "_removeUgcItem",
                value: function() {
                    var e = o()(r.a.mark((function e(t) {
                        var a, n, i, o;
                        return r.a.wrap((function e(r) {
                            while (1)
                                switch (r.prev = r.next) {
                                case 0:
                                    a = {};
                                    if (null === t || void 0 === t ? void 0 : t.comment_id)
                                        a.comment_id = t.comment_id;
                                    else
                                        a.thread_id = t.thread_id;
                                    r.next = 4;
                                    return S["a"].user.delUgcContent(a);
                                case 4:
                                    n = r.sent;
                                    if ("success" === n.data.message) {
                                        null === (i = (o = this.props).onClick) || void 0 === i ? void 0 : i.call(o);
                                        Ut.info("\u5df2\u5220\u9664")
                                    } else
                                        Ut.info("\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5");
                                case 6:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "render",
                value: function e() {
                    var t, a, n, r, i, o, l, c, u, s, d, v, m, f, h = this, p, _, g;
                    var b = this.state.opts;
                    var E = null === b || void 0 === b ? void 0 : b.user;
                    var y = this.context.isSelf;
                    if (!b)
                        return w.a.createElement(w.a.Fragment, null);
                    return w.a.createElement("div", {
                        className: "weitoutiao-card"
                    }, w.a.createElement("div", {
                        className: B()("normal", {
                            rbox: null === b || void 0 === b ? void 0 : null === (t = b.ugc_images) || void 0 === t ? void 0 : t.length,
                            "no-image": !(null === b || void 0 === b ? void 0 : null === (a = b.ugc_images) || void 0 === a ? void 0 : a.length)
                        })
                    }, w.a.createElement("div", {
                        className: "rbox-inner"
                    }, w.a.createElement("div", {
                        className: "ugc-box"
                    }, w.a.createElement("div", {
                        className: "ugc-user"
                    }, w.a.createElement("img", {
                        src: null === E || void 0 === E ? void 0 : E.avatar_url,
                        alt: "\u5934\u50cf\u80cc\u666f",
                        className: "avatar"
                    }), w.a.createElement("span", {
                        className: "name"
                    }, null === E || void 0 === E ? void 0 : E.name), (null === E || void 0 === E ? void 0 : E.user_verified) && w.a.createElement("i", {
                        className: "y-icon icon-dv"
                    })), w.a.createElement("div", {
                        className: "ugc-content"
                    }, w.a.createElement("a", {
                        href: null === b || void 0 === b ? void 0 : b.open_url,
                        target: "blank"
                    }, w.a.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: null === b || void 0 === b ? void 0 : b.rich_content
                        }
                    }))), (null === b || void 0 === b ? void 0 : null === (n = b.forward) || void 0 === n ? void 0 : n.rich_content) && w.a.createElement("div", {
                        className: "original-info"
                    }, !!(null === b || void 0 === b ? void 0 : null === (r = b.forward) || void 0 === r ? void 0 : r.ugc_images.length) && w.a.createElement("div", {
                        className: "cover-img"
                    }, w.a.createElement("a", {
                        href: null === b || void 0 === b ? void 0 : null === (i = b.forward) || void 0 === i ? void 0 : i.share_url,
                        target: "blank"
                    }, w.a.createElement("img", {
                        className: "cover-img",
                        src: null === b || void 0 === b ? void 0 : null === (o = b.forward) || void 0 === o ? void 0 : o.ugc_images[0]
                    }), (null === b || void 0 === b ? void 0 : null === (l = b.forward) || void 0 === l ? void 0 : l.ugc_images.length) > 1 && w.a.createElement("div", {
                        className: "img-size"
                    }, null === b || void 0 === b ? void 0 : null === (c = b.forward) || void 0 === c ? void 0 : c.ugc_images.length, "\u56fe"))), w.a.createElement("div", {
                        className: "thread"
                    }, (null === b || void 0 === b ? void 0 : null === (u = b.forward) || void 0 === u ? void 0 : u.name) && w.a.createElement("a", {
                        href: null === b || void 0 === b ? void 0 : null === (s = b.forward) || void 0 === s ? void 0 : s.profile_url,
                        target: "blank"
                    }, w.a.createElement("div", {
                        className: "header"
                    }, w.a.createElement("img", {
                        src: null === b || void 0 === b ? void 0 : null === (d = b.forward) || void 0 === d ? void 0 : d.avatar_url,
                        className: "avatar"
                    }), w.a.createElement("span", {
                        className: "user-name"
                    }, null === b || void 0 === b ? void 0 : null === (v = b.forward) || void 0 === v ? void 0 : v.name))), w.a.createElement("a", {
                        href: null === b || void 0 === b ? void 0 : null === (m = b.forward) || void 0 === m ? void 0 : m.share_url,
                        target: "blank"
                    }, w.a.createElement("div", {
                        className: "content",
                        dangerouslySetInnerHTML: {
                            __html: null === b || void 0 === b ? void 0 : null === (f = b.forward) || void 0 === f ? void 0 : f.rich_content
                        }
                    }))))), w.a.createElement("div", {
                        className: "wtt-footer"
                    }, w.a.createElement("div", {
                        className: "y-left"
                    }, (null === b || void 0 === b ? void 0 : b.is_stick) && w.a.createElement("span", {
                        className: "lbtn ltop"
                    }, "\u7f6e\u9876"), w.a.createElement("a", {
                        className: "lbtn",
                        href: null === b || void 0 === b ? void 0 : b.open_url,
                        target: "blank"
                    }, (null === b || void 0 === b ? void 0 : b.show_count) || (null === b || void 0 === b ? void 0 : b.read_count), (null === b || void 0 === b ? void 0 : b.show_text) || "\u9605\u8bfb"), w.a.createElement("a", {
                        className: "lbtn",
                        href: null === b || void 0 === b ? void 0 : b.open_url,
                        target: "blank"
                    }, "\xa0\u22c5\xa0", null === b || void 0 === b ? void 0 : b.digg_count, "\u8d5e"), w.a.createElement("a", {
                        className: "lbtn",
                        href: null === b || void 0 === b ? void 0 : b.open_url,
                        target: "blank"
                    }, "\xa0\u22c5\xa0", null === b || void 0 === b ? void 0 : b.comment_count, "\u8bc4\u8bba"), (null === b || void 0 === b ? void 0 : b.create_time) && w.a.createElement("span", {
                        className: "lbtn"
                    }, "\xa0\u22c5\xa0", null === b || void 0 === b ? void 0 : b.create_time)), w.a.createElement("div", {
                        className: "y-right"
                    }, y && w.a.createElement("span", {
                        className: "trash",
                        onClick: function e() {
                            return h.deleteUgcItem(b)
                        }
                    }, w.a.createElement("span", {
                        className: "y-icon icon-trash"
                    }), w.a.createElement("span", null, "\u5220\u9664")))))), !!(null === b || void 0 === b ? void 0 : null === (p = b.ugc_images) || void 0 === p ? void 0 : p.length) && w.a.createElement("div", {
                        className: "lbox"
                    }, w.a.createElement("a", {
                        className: "img-wrap",
                        href: null === b || void 0 === b ? void 0 : b.open_url,
                        target: "blank"
                    }, w.a.createElement("img", {
                        className: "cover-img",
                        src: null === b || void 0 === b ? void 0 : b.ugc_images[0],
                        alt: ""
                    }), (null === b || void 0 === b ? void 0 : null === (_ = b.ugc_images) || void 0 === _ ? void 0 : _.length) > 1 && w.a.createElement("i", {
                        className: "ftype"
                    }, w.a.createElement("span", null, null === b || void 0 === b ? void 0 : null === (g = b.ugc_images) || void 0 === g ? void 0 : g.length, "\u56fe")))))
                }
            }]);
            return a
        }(w.a.Component);
        $t.contextType = y;
        var ea = $t;
        var ta = a("be6c8b3ad4a3607621d1");
        var aa = a.n(ta);
        function na(e) {
            var t = ra();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function ra() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var ia = function(e) {
            f()(a, e);
            var t = na(a);
            function a() {
                s()(this, a);
                return t.apply(this, arguments)
            }
            v()(a, [{
                key: "render",
                value: function e() {
                    var t = this.props
                      , a = t.text
                      , n = t.length
                      , r = t.tail
                      , i = void 0 === r ? "" : r
                      , o = t.tailClassName
                      , l = aa()(t, ["text", "length", "tail", "tailClassName"]);
                    if (a.length <= n || n < 0)
                        return w.a.createElement("span", Ae()({}, l), a);
                    else {
                        var c;
                        if (n - i.length <= 0)
                            c = "";
                        else
                            c = "".concat(a.slice(0, n - i.length), "...");
                        return w.a.createElement("span", Ae()({
                            title: a
                        }, l), c, w.a.createElement("span", {
                            className: o
                        }, i))
                    }
                }
            }]);
            return a
        }(w.a.PureComponent);
        ia.props = {
            tail: "...",
            tailClassName: "more"
        };
        var oa = ia;
        var la = a("e4a95ed7df0728b9c73f");
        var ca = a.n(la);
        var ua = a("1a91e8074e448c8d5736");
        function sa(e) {
            var t = da();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function da() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var va = function(e) {
            f()(a, e);
            var t = sa(a);
            function a() {
                s()(this, a);
                return t.apply(this, arguments)
            }
            v()(a, [{
                key: "handleToDetail",
                value: function e(t, a) {
                    var n = "";
                    if ("question" === t)
                        n = "https://www.wukong.com/question/".concat(a, "/ ");
                    else
                        n = "https://www.wukong.com/answer/".concat(a, "/");
                    window.open(n)
                }
            }, {
                key: "render",
                value: function e() {
                    var t, a, n, r, i, o, l, c = this, u, s, d, v;
                    var m = this.props.item;
                    var f = He(null === m || void 0 === m ? void 0 : null === (t = m.stream_cell) || void 0 === t ? void 0 : t.raw_data);
                    var h = null === f || void 0 === f ? void 0 : null === (a = f.content) || void 0 === a ? void 0 : a.user;
                    var p = null === f || void 0 === f ? void 0 : null === (n = f.content) || void 0 === n ? void 0 : n.question;
                    var _ = null === f || void 0 === f ? void 0 : null === (r = f.content) || void 0 === r ? void 0 : r.answer;
                    var g = Fe((null === _ || void 0 === _ ? void 0 : null === (i = _.large_image_list) || void 0 === i ? void 0 : i.length) ? _.large_image_list[0].url : (null === _ || void 0 === _ ? void 0 : null === (o = _.origin_image_list) || void 0 === o ? void 0 : o.length) ? null === _ || void 0 === _ ? void 0 : null === (l = _.origin_image_list[0]) || void 0 === l ? void 0 : l.url : "");
                    h.avatar_url = Fe(null === h || void 0 === h ? void 0 : h.avatar_url);
                    p.ansCount = (null === p || void 0 === p ? void 0 : p.normal_ans_count) + (null === p || void 0 === p ? void 0 : p.nice_ans_count);
                    return w.a.createElement("div", {
                        className: "wenda-card"
                    }, 203 === m.cell_type && w.a.createElement("div", {
                        className: "question"
                    }, w.a.createElement("div", {
                        className: "header"
                    }, w.a.createElement("img", {
                        src: null === h || void 0 === h ? void 0 : h.avatar_url,
                        alt: ""
                    }), w.a.createElement("span", null, null === h || void 0 === h ? void 0 : h.uname), !!(null === h || void 0 === h ? void 0 : h.is_verify) && w.a.createElement("i", {
                        className: "y-icon icon-dv"
                    }), w.a.createElement("span", null, "\u63d0\u51fa\u4e86\u95ee\u9898")), w.a.createElement("a", {
                        className: "title",
                        onClick: function e() {
                            return c.handleToDetail("question", null === p || void 0 === p ? void 0 : p.qid)
                        }
                    }, null === p || void 0 === p ? void 0 : p.title), w.a.createElement("p", {
                        className: "sub"
                    }, (null === m || void 0 === m ? void 0 : m.is_stick) && w.a.createElement("span", {
                        className: "btn-top"
                    }, "\u7f6e\u9876"), w.a.createElement("span", null, null === p || void 0 === p ? void 0 : p.ansCount, "\u56de\u7b54"), w.a.createElement("span", null, "\xb7", null === p || void 0 === p ? void 0 : null === (u = p.count_statistics[0]) || void 0 === u ? void 0 : u.count_num, "\u6536\u85cf"), w.a.createElement("span", null, "\xb7", Le(null === p || void 0 === p ? void 0 : p.create_time))), w.a.createElement("p", {
                        className: "ans-click",
                        onClick: function e() {
                            return c.handleToDetail("question", null === p || void 0 === p ? void 0 : p.qid)
                        }
                    }, w.a.createElement("img", {
                        src: ca.a,
                        alt: ""
                    }), w.a.createElement("span", null, "\u56de\u7b54\u95ee\u9898"))), 202 === m.cell_type && w.a.createElement("div", {
                        className: "answer"
                    }, w.a.createElement("div", {
                        className: "header"
                    }, w.a.createElement("img", {
                        src: null === h || void 0 === h ? void 0 : h.avatar_url,
                        alt: ""
                    }), w.a.createElement("span", null, null === h || void 0 === h ? void 0 : h.uname), !!(null === h || void 0 === h ? void 0 : h.is_verify) && w.a.createElement("i", {
                        className: "y-icon icon-dv"
                    }), w.a.createElement("span", null, "\u56de\u7b54\u4e86\u95ee\u9898")), w.a.createElement("a", {
                        className: "title",
                        onClick: function e() {
                            return c.handleToDetail("question", null === p || void 0 === p ? void 0 : p.qid)
                        }
                    }, null === p || void 0 === p ? void 0 : p.title), w.a.createElement("p", {
                        className: "sub"
                    }, w.a.createElement("span", null, null === p || void 0 === p ? void 0 : p.ansCount, "\u56de\u7b54"), w.a.createElement("span", null, "\xb7", null === p || void 0 === p ? void 0 : p.count_statistics[0].count_num, "\u6536\u85cf")), w.a.createElement("div", {
                        className: "content",
                        onClick: function e() {
                            return c.handleToDetail("answer", null === _ || void 0 === _ ? void 0 : _.ansid)
                        }
                    }, !!(null === _ || void 0 === _ ? void 0 : null === (s = _.origin_image_list) || void 0 === s ? void 0 : s.length) && w.a.createElement("div", {
                        className: "left"
                    }, w.a.createElement("img", {
                        src: g,
                        alt: "",
                        onError: function e() {
                            var t, a;
                            g = Fe((null === _ || void 0 === _ ? void 0 : null === (t = _.origin_image_list) || void 0 === t ? void 0 : t.length) ? null === _ || void 0 === _ ? void 0 : null === (a = _.origin_image_list[0]) || void 0 === a ? void 0 : a.url : "")
                        }
                    }), w.a.createElement("p", null, null === _ || void 0 === _ ? void 0 : null === (d = _.origin_image_list) || void 0 === d ? void 0 : d.length, "\u56fe")), w.a.createElement("div", {
                        className: "right"
                    }, w.a.createElement("p", {
                        className: "ans"
                    }, w.a.createElement(oa, {
                        text: null === _ || void 0 === _ ? void 0 : _.abstract_text,
                        length: (null === _ || void 0 === _ ? void 0 : null === (v = _.origin_image_list) || void 0 === v ? void 0 : v.length) ? 98 : 90,
                        tail: "\u67e5\u770b\u5168\u90e8",
                        tailClassName: "more"
                    })), w.a.createElement("p", {
                        className: "sub"
                    }, (null === m || void 0 === m ? void 0 : m.is_stick) && w.a.createElement("span", {
                        className: "btn-top"
                    }, "\u7f6e\u9876"), w.a.createElement("span", null, null === _ || void 0 === _ ? void 0 : _.digg_count, "\u8d5e"), w.a.createElement("span", null, "\xa0\xb7\xa0", null === _ || void 0 === _ ? void 0 : _.comment_count, "\u8bc4\u8bba"), w.a.createElement("span", null, "\xa0\xb7\xa0", Le(null === _ || void 0 === _ ? void 0 : _.create_time)))))))
                }
            }]);
            return a
        }(w.a.Component);
        var ma = va;
        function fa(e) {
            var t = ha();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function ha() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var pa = function(e) {
            f()(a, e);
            var t = fa(a);
            function a() {
                var e;
                s()(this, a);
                e = t.apply(this, arguments);
                e.renderCard = function(t, a) {
                    var n = e.props
                      , r = n.type
                      , i = n.onDelete;
                    if (202 === (null === t || void 0 === t ? void 0 : t.cell_type) || 203 === (null === t || void 0 === t ? void 0 : t.cell_type)) {
                        var o;
                        return w.a.createElement(ma, {
                            item: t,
                            key: "wenda".concat(null === t || void 0 === t ? void 0 : null === (o = t.stream_cell) || void 0 === o ? void 0 : o.id)
                        })
                    }
                    if (341 === (null === t || void 0 === t ? void 0 : t.cell_type))
                        return w.a.createElement(Wt, {
                            item: t,
                            key: "collect".concat(null === t || void 0 === t ? void 0 : t.url)
                        });
                    if (32 === (null === t || void 0 === t ? void 0 : t.cell_type) || 56 === (null === t || void 0 === t ? void 0 : t.cell_type)) {
                        var l, c;
                        return w.a.createElement(ea, {
                            item: t,
                            key: "wtt".concat((null === t || void 0 === t ? void 0 : null === (l = t.stream_cell) || void 0 === l ? void 0 : l.id) || (null === t || void 0 === t ? void 0 : null === (c = t.concern_talk_cell) || void 0 === c ? void 0 : c.id)),
                            onClick: function e() {
                                return null === i || void 0 === i ? void 0 : i(a)
                            }
                        })
                    }
                    return w.a.createElement(Ot, {
                        item: t,
                        isFavourite: "my_favorites" === r,
                        key: "article".concat(null === t || void 0 === t ? void 0 : t.item_id),
                        onClick: function e() {
                            return null === i || void 0 === i ? void 0 : i(a)
                        }
                    })
                }
                ;
                return e
            }
            v()(a, [{
                key: "render",
                value: function e() {
                    var t = this;
                    var a = this.props.list;
                    return w.a.createElement("div", {
                        className: "feed-list"
                    }, a.map((function(e, a) {
                        return t.renderCard(e, a)
                    }
                    )))
                }
            }]);
            return a
        }(w.a.Component);
        function _a(e) {
            var t = ga();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function ga() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var ba = {
            all: "profile_all",
            article: "pc_profile_article",
            video: "pc_profile_video",
            wenda: "profile_wenda",
            weitoutiao: "pc_profile_ugc",
            collection: "profile_collection",
            fav: "my_favorites"
        };
        var wa = function(e) {
            f()(a, e);
            var t = _a(a);
            function a() {
                var e;
                s()(this, a);
                e = t.apply(this, arguments);
                e.state = {
                    activeTabIndex: 0,
                    activeTabType: ba.all,
                    tabs: [],
                    list: [],
                    tabLoading: false,
                    next: {
                        max_behot_time: 0
                    },
                    hasMore: false
                };
                e.userToken = "";
                e.loginUserToken = "";
                e.waitLoadMore = false;
                e.initialFetch = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ba.all;
                    e.setState({
                        tabLoading: true
                    });
                    e.loadMoreFeedList(t)
                }
                ;
                e.getTabsData = function() {
                    var t = o()(r.a.mark((function t(a) {
                        var n, i, o, l, c, u, s;
                        return r.a.wrap((function t(r) {
                            while (1)
                                switch (r.prev = r.next) {
                                case 0:
                                    n = e.context.isSelf;
                                    i = e.props.query;
                                    o = ba[i.tab];
                                    r.next = 5;
                                    return S["a"].feed.getProfileTabs(a);
                                case 5:
                                    l = r.sent;
                                    c = l.data.data || [];
                                    u = 0;
                                    s = ba.all;
                                    if (n)
                                        c = c.concat({
                                            show_name: "\u6536\u85cf",
                                            category: ba.fav
                                        });
                                    c.some((function(e, t) {
                                        if (e.category === o) {
                                            u = t;
                                            s = o;
                                            return true
                                        }
                                        return false
                                    }
                                    ));
                                    if (o)
                                        e.initialFetch(s);
                                    e.setState({
                                        tabs: c,
                                        activeTabIndex: u,
                                        activeTabType: s
                                    });
                                case 13:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }();
                e.handleChangeTab = function(t, a) {
                    if (a === e.state.activeTabIndex)
                        return;
                    e.waitLoadMore = true;
                    e.setState({
                        activeTabIndex: a,
                        activeTabType: t.category,
                        tabLoading: true,
                        list: [],
                        next: {
                            max_behot_time: 0
                        }
                    }, (function() {
                        e.loadMoreFeedList(t.category)
                    }
                    ))
                }
                ;
                e.loadMoreFeedList = function() {
                    var t = o()(r.a.mark((function t(a) {
                        var n, i, o, l, c, u, s, d;
                        return r.a.wrap((function t(r) {
                            while (1)
                                switch (r.prev = r.next) {
                                case 0:
                                    e.setState({
                                        tabLoading: true
                                    });
                                    r.prev = 1;
                                    n = e.state,
                                    i = n.next,
                                    o = n.list;
                                    l = i.max_behot_time;
                                    c = a === ba.fav ? e.loginUserToken : e.userToken;
                                    r.next = 7;
                                    return S["a"].feed.getFeedData(a, c, l);
                                case 7:
                                    u = r.sent;
                                    s = u.data;
                                    d = o.concat(s.data);
                                    e.setState({
                                        tabLoading: false,
                                        list: d.filter(Boolean),
                                        next: s.next,
                                        hasMore: s.has_more
                                    }, (function() {
                                        e.waitLoadMore = false
                                    }
                                    ));
                                    r.next = 17;
                                    break;
                                case 13:
                                    r.prev = 13;
                                    r.t0 = r["catch"](1);
                                    e.waitLoadMore = false;
                                    e.setState({
                                        tabLoading: false
                                    });
                                case 17:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), t, null, [[1, 13]])
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }();
                e.handleTabLoadMore = function() {
                    var t = e.state
                      , a = t.hasMore
                      , n = t.activeTabType;
                    if (a && !e.waitLoadMore) {
                        e.waitLoadMore = true;
                        e.loadMoreFeedList(n)
                    }
                }
                ;
                e.handleDeleteCard = function(t) {
                    var a = e.state.list;
                    var n = a.concat();
                    n.splice(t, 1);
                    e.setState({
                        list: n
                    })
                }
                ;
                return e
            }
            v()(a, [{
                key: "componentDidMount",
                value: function e() {
                    var t = this.context
                      , a = t.profileUserInfo
                      , n = t.loginUserInfo;
                    var r = this.props.query;
                    var i = null === a || void 0 === a ? void 0 : a.userId;
                    this.userToken = i;
                    this.loginUserToken = null === n || void 0 === n ? void 0 : n.userId;
                    this.getTabsData(i);
                    if (!r.tab)
                        this.initialFetch()
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this;
                    var a = this.state
                      , n = a.activeTabIndex
                      , r = a.activeTabType
                      , i = a.tabs
                      , o = a.tabLoading
                      , l = a.list
                      , c = a.hasMore;
                    return w.a.createElement("div", {
                        className: "profile-tabs"
                    }, w.a.createElement(nt, {
                        activeTabIndex: n,
                        tabs: i,
                        onClick: this.handleChangeTab
                    }), w.a.createElement(st, {
                        loading: o,
                        isEmpty: !l || !l.length,
                        hasMore: c,
                        onLoadMore: this.handleTabLoadMore
                    }, w.a.createElement(pa, {
                        list: l,
                        type: r,
                        types: ba,
                        onDelete: function e(a) {
                            return t.handleDeleteCard(a)
                        }
                    })))
                }
            }]);
            return a
        }(w.a.Component);
        wa.contextType = y;
        var Ea = a("7e2ae1f59aa818f0e74b");
        function ya(e) {
            var t = ka();
            return function a() {
                var n = g()(e), r;
                if (t) {
                    var i = g()(this).constructor;
                    r = c()(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return p()(this, r)
            }
        }
        function ka() {
            if ("undefined" === typeof Reflect || !c.a)
                return false;
            if (c.a.sham)
                return false;
            if ("function" === typeof Proxy)
                return true;
            try {
                Date.prototype.toString.call(c()(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        var Na = function(e) {
            f()(a, e);
            var t = ya(a);
            function a() {
                var e;
                s()(this, a);
                e = t.apply(this, arguments);
                e.showRelation = function() {
                    var t, a;
                    var n = e.props.data;
                    return !("3" === (null === n || void 0 === n ? void 0 : null === (t = n.profileUserInfo) || void 0 === t ? void 0 : null === (a = t.mediaInfo) || void 0 === a ? void 0 : a.type))
                }
                ;
                return e
            }
            v()(a, [{
                key: "render",
                value: function e() {
                    var t;
                    return w.a.createElement(y.Provider, {
                        value: null === (t = this.props) || void 0 === t ? void 0 : t.data
                    }, w.a.createElement("div", {
                        className: "profile-container"
                    }, w.a.createElement(ye, {
                        hasBar: true
                    }), w.a.createElement("div", {
                        className: "main-content"
                    }, w.a.createElement(Ve, null), w.a.createElement("div", {
                        className: "tab-container"
                    }, w.a.createElement(wa, {
                        query: this.props.query
                    })), w.a.createElement("div", {
                        className: "right-sidebar"
                    }, this.showRelation() && w.a.createElement(Ye, null), w.a.createElement($e, null))), w.a.createElement(Ce, null)))
                }
            }]);
            return a
        }(w.a.Component);
        Na.getDerivedHeadElement = function() {
            var e = o()(r.a.mark((function e(t, a) {
                var n;
                return r.a.wrap((function e(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", {
                                head: w.a.createElement(w.a.Fragment, null, w.a.createElement("title", null, null === a || void 0 === a ? void 0 : null === (n = a.data) || void 0 === n ? void 0 : n.title, " - \u4eca\u65e5\u5934\u6761(www.toutiao.com)")),
                                position: "after"
                            });
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, a) {
                return e.apply(this, arguments)
            }
        }()
    },
    e4a95ed7df0728b9c73f: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAMAAAAJbCvNAAABZVBMVEUAAAD///+AgP9VqqqAgL9mZplVgKpggJ9VcapNZplGdKJVaqpJbaRLaaVDa6FGaKJKap9JbZtEZplCZplFZ59GZplBa5pEZplCZplBaZtDZ51EZplBZZpDZplBZ5xCZplDZ5xDaJpCZ5xBZZpDZplCaJpDZ5tAZ5tDZZpBZplAaJpBZZpAZ5tAZplCZ5pBZZpBZplCZptCZZpBZptCZ5pBZplBZ5pAZZpCZptBZplBZ5pBZppBZplAZ5pAZplBZplBZplAZZpAZplBZplBZppAZplBZZpAZppBZZpBZppBZplAZZpBZppBZplAZppBZZpBZplAZplBZppAZZpAZplBZplAZplBZZpBZplAZplAZZpBZplBZZpAZZpAZplBZZpAZplBZplAZplAZZpBZplBZZpAZplAZZpBZplBZplAZplBZZpBZplAZplAZZpBZplBZZpAZplAZplBZZpBZplAZZpAZZl+fGbOAAAAdnRSTlMAAQIDBAUGCAkKCwwOERMWGBweIyUoKy0yMzk8P0FDRkhMTU5QUVRXWFpbYmNnaGpucHR6fH2Bg4SFhomKi4+RlpebnqKjpKeprK2usbS2uLm+wMLGyMvM0NPW2Nnb3+Di5Obq7O3u7/Dx8/T19vf4+fr7/P3+UNhDGAAAAVtJREFUGBm1wfdfEnEAx+HPheAgI1HPaKll5tYCGjbUgEpN0dyjnJU2IMa9//74Xr563cH1o8+jy3FlcvnkYP6+/if+EVemTYHih1x4oyDXPwG/8msOOLfV6NoOULSlvgrk1ODqJkbWkt7Cjuq1rPHXnJSCgupE8sC3dBV4pQ9wJL/QAvDjpkYdYAF4Jx8rCxTvSprCVeqRzyxQvicjiTEtnxdAdUiuRBFYCssrBThjctmnwGqzvKaoeSRX5zGwEZXXqAOk5er4DGy3y+thFXgpV2wP2IvJq78EzMnVvg0cdMjrTgHIWTKiG8Bxp7zs78BiSEbzKnBqyycL5CMywkvAeUJ+u7DVKiP0Hvh5S35NJUjLsDLA717V6QYGZcwA5QHVewDYqnkOVEfUIAmViKyuaWrG1SgHX56ufMV4rACb/PNEQc64UHmmQPvUFNZfD8cVLDGfmbgR1qX5A2nzgTXfefzdAAAAAElFTkSuQmCC"
    },
    e9bc4a03091f54538388: function(e, t, a) {},
    eb2f48c62c6fb5e87518: function(e, t, a) {},
    ec73ac987ad28ac67e14: function(e, t, a) {},
    f2c437782da5c75fe8f4: function(e, t, a) {}
});
