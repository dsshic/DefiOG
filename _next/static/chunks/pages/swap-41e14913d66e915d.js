(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [503],
  {
    98229: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/swap",
        function () {
          return c(81271);
        },
      ]);
    },
    81271: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return x;
          },
        });
      var d = c(47568),
        e = c(26042),
        f = c(69396),
        g = c(34051),
        h = c.n(g),
        i = c(85893),
        j = c(20125),
        k = c(41334),
        l = c(41660),
        m = c(95658),
        n = c(81811),
        o = c(24304),
        p = c(55107),
        q = c(34274),
        r = c(44402),
        s = c(52874),
        t = c(86010),
        u = c(67294),
        v = c(86501),
        w = c(77058),
        x = function () {
          var a,
            b = (0, w.$)().t,
            c = (0, p.b)(),
            g = c.address,
            x = c.network,
            y = (0, r.A)(),
            z = y.handleEnableByAddress,
            A = y.handleSwap,
            B = (0, q.$)(),
            C = B.swapState,
            D = B.voteState,
            E = B.fetchSwapData,
            F = B.getAmountOut,
            G = (0, u.useState)({ approve: !1, swap: !1 }),
            H = G[0],
            I = G[1],
            J = (0, u.useState)({ approve: !1, swap: !1 }),
            K = J[0],
            L = J[1],
            M = (0, u.useState)(!1),
            N = M[0],
            O = M[1],
            P = (0, u.useState)(""),
            Q = P[0],
            R = P[1],
            S = (0, u.useState)(""),
            T = S[0],
            U = S[1],
            V = (0, u.useState)(o.O.from(0)),
            W = V[0],
            X = V[1],
            Y = (0, u.useState)(),
            Z = (Y[0], Y[1]),
            $ = (0, u.useState)("");
          $[0],
            $[1],
            (0, u.useEffect)(function () {
              E(),
                N
                  ? +C.sonne.allowance.toString() > +T &&
                    I((0, f.Z)((0, e.Z)({}, H), { approve: !0, swap: !1 }))
                  : +C.usdc.allowance.toString() > +T &&
                    I((0, f.Z)((0, e.Z)({}, H), { approve: !0, swap: !1 }));
            }, []),
            (0, u.useEffect)(
              function () {
                E();
              },
              [g]
            ),
            (0, u.useEffect)(
              function () {
                D.length > 0 && Z(D[0]);
              },
              [D]
            ),
            (0, u.useEffect)(
              function () {
                var a = N ? C.sonne.balance : C.usdc.balance,
                  c = N ? C.sonne.allowance : C.usdc.allowance,
                  d = N ? 18 : 6,
                  g = N ? 6 : 18;
                if ("" === T) {
                  R(""),
                    I(function (a) {
                      return (0,
                      f.Z)((0, e.Z)({}, a), { swap: !1, approve: !1 });
                    });
                  return;
                }
                if (isNaN(+T)) {
                  R(b("error.invalidNm")),
                    X(o.O.from(0)),
                    I(function (a) {
                      return (0, f.Z)((0, e.Z)({}, a), { swap: !1 });
                    });
                  return;
                }
                if (T.includes(".") && T.split(".")[1].length > d) {
                  R(b("error.exceedDecimal")),
                    I(function (a) {
                      return (0, f.Z)((0, e.Z)({}, a), { swap: !1 });
                    });
                  return;
                }
                if (+T > +a.toString()) {
                  R(b("error.insufficientBalance")),
                    X(o.O.from(0)),
                    I(function (a) {
                      return (0, f.Z)((0, e.Z)({}, a), { swap: !1 });
                    });
                  return;
                }
                if (0 >= +T || "" === T) {
                  R(b("error.lt0")),
                    X(o.O.from(0)),
                    I(function (a) {
                      return (0, f.Z)((0, e.Z)({}, a), { swap: !1 });
                    });
                  return;
                }
                if (+T > +c.toString()) {
                  I(function (a) {
                    return (0, f.Z)((0, e.Z)({}, a), { approve: !0, swap: !1 });
                  }),
                    X(o.O.from(0)),
                    R(b("error.exceedAllowance"));
                  return;
                }
                I(function (a) {
                  return (0, f.Z)((0, e.Z)({}, a), { approve: !1 });
                });
                var h = o.O.parseValue(T, d),
                  i = N ? x.sonneAddress : x.usdcAddress,
                  j = N ? x.usdcAddress : x.sonneAddress;
                F(h._display, i, j).then(function (a) {
                  var b = o.O.from(a, g);
                  X(b);
                });
                var k =
                  a.gt(o.O.from(0)) &&
                  h.gt(o.O.from(0)) &&
                  a.gte(h) &&
                  c.gte(h);
                R(""),
                  I(function (a) {
                    return (0, f.Z)((0, e.Z)({}, a), { swap: k });
                  });
              },
              [T, C]
            );
          var _,
            aa =
              ((a = (0, d.Z)(
                h().mark(function a() {
                  var c;
                  return h().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            L((0, f.Z)((0, e.Z)({}, K), { approve: !0 })),
                            (a.next = 3),
                            z(
                              N ? x.sonneAddress : x.usdcAddress,
                              x.veloRouterAddress
                            )
                          );
                        case 3:
                          (c = a.sent),
                            L((0, f.Z)((0, e.Z)({}, K), { approve: !1 })),
                            E(),
                            (0, s.JQ)(c, b("common.approve")),
                            c || I((0, f.Z)((0, e.Z)({}, H), { approve: !1 }));
                        case 8:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )),
              function () {
                return a.apply(this, arguments);
              }),
            ab =
              ((_ = (0, d.Z)(
                h().mark(function a() {
                  var c, d;
                  return h().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            L((0, f.Z)((0, e.Z)({}, K), { swap: !0 })),
                            (c = {
                              from: N ? x.sonneAddress : x.usdcAddress,
                              to: N ? x.usdcAddress : x.sonneAddress,
                              stable: !1,
                            }),
                            (a.next = 4),
                            A(
                              o.O.parseValue(T, N ? 18 : 6)._display,
                              W._display,
                              c
                            )
                          );
                        case 4:
                          (d = a.sent),
                            L((0, f.Z)((0, e.Z)({}, K), { swap: !1 })),
                            E(),
                            (0, s.JQ)(d, b("common.swap")),
                            d || (U(""), X(o.O.from(0)));
                        case 9:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )),
              function () {
                return _.apply(this, arguments);
              }),
            ac = function () {
              O(!N), R(""), U("");
            },
            ad = function (a) {
              U(a.target.value);
            },
            ae = function () {
              N ? U(C.sonne.balance.toString()) : U(C.usdc.balance.toString());
            };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(k.Z, {
                title: "".concat(b("swap.header")),
                showNetwork: !1,
              }),
              (0, i.jsx)("div", {
                className: "flex gap-6 w-full justify-center",
                children: (0, i.jsxs)(m.Z, {
                  classes: "bg-supplyBase lg:max-w-[560px] w-[500px]",
                  padding: !0,
                  children: [
                    (0, i.jsx)(n.Z, {
                      title: "",
                      balance: N
                        ? C.sonne.balance.toFixed(2)
                        : C.usdc.balance.toFixed(2),
                      amount: T,
                      onChangeAmount: ad,
                      onClickMax: ae,
                      symbol: N ? "SONNE" : "USDC",
                      enabled: !0,
                    }),
                    (0, i.jsx)("div", {
                      className: "flex w-full justify-center pt-8",
                      children: (0, i.jsxs)("button", {
                        onClick: ac,
                        className: "flex",
                        children: [
                          (0, i.jsx)("img", {
                            src: "/assets/images/arrow-down.svg",
                            width: 24,
                            height: 24,
                            className: "translate-x-1.5",
                          }),
                          (0, i.jsx)("img", {
                            src: "/assets/images/arrow-up.svg",
                            width: 24,
                            height: 24,
                            className: "-translate-x-1.5",
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(n.Z, {
                      title: "",
                      balance: N
                        ? C.usdc.balance.toFixed(2)
                        : C.sonne.balance.toFixed(2),
                      amount: N ? W.toFixed(5) : W.toFixed(6),
                      onChangeAmount: ad,
                      onClickMax: ae,
                      symbol: N ? "USDC" : "SONNE",
                      enabled: !1,
                      showMax: !1,
                    }),
                    (0, i.jsx)("div", {
                      className: "flex justify-between",
                      children: (0, i.jsx)("span", {
                        className: (0, t.Z)(
                          "text-[13px]  font-extralight self-end text-light"
                        ),
                        children: Q,
                      }),
                    }),
                    H.swap &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "w-full border-b-[1px] border-b-light pt-8 pb-2",
                            children: (0, i.jsx)("p", {
                              className: "text-neutral pl-4 font-extralight",
                              children: "Price Info",
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "flex text-neutral font-extralight justify-around pt-8",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "text-center ",
                                children: [
                                  (0, i.jsx)("p", {
                                    className: "font-medium",
                                    children: (+W.toString() / +T).toFixed(2),
                                  }),
                                  (0, i.jsx)("p", {
                                    className: "text-sm",
                                    children: "USDC per SONNE",
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "text-center",
                                children: [
                                  (0, i.jsx)("p", {
                                    className: "font-medium",
                                    children: (+T / +W.toString()).toFixed(2),
                                  }),
                                  (0, i.jsx)("p", {
                                    className: "text-sm",
                                    children: "SONNE per USDC",
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "text-center",
                                children: [
                                  (0, i.jsx)("p", { children: "2%" }),
                                  (0, i.jsx)("p", {
                                    className: "text-sm",
                                    children: "Slippage",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, i.jsx)("div", {
                      className: "flex gap-4 pt-12",
                      children: (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(j.Z, {
                            color: "light",
                            enabled: H.approve,
                            text: b("common.approve"),
                            loading: K.approve,
                            number: "1",
                            onClick: aa,
                            wFull: !0,
                            classes: "text-neutral",
                          }),
                          (0, i.jsx)(j.Z, {
                            color: "light",
                            enabled: H.swap,
                            text: b("common.swap"),
                            loading: K.swap,
                            number: "2",
                            onClick: ab,
                            wFull: !0,
                            classes: "text-neutral",
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(l.Z, {}),
                  ],
                }),
              }),
              (0, i.jsx)(v.x7, {}),
            ],
          });
        };
    },
    41660: function (a, b, c) {
      "use strict";
      c.d(b, {
        Z: function () {
          return e;
        },
      });
      var d = c(85893);
      function e() {
        return (0, d.jsxs)("div", {
          className: "flex justify-center h-7 items-center gap-2 pt-10",
          children: [
            (0, d.jsx)("p", {
              className: "text-neutral font-extralight text-xs",
              children: "Powered by",
            }),
            (0, d.jsx)("a", {
              target: "_blank",
              rel: "noopener noreferrer",
              href: "https://app.velodrome.finance/swap",
              children: (0, d.jsx)("img", {
                src: "/assets/images/velodrome-lockup-white.svg",
                className: "text-neutral",
                height: 20,
                width: 100,
              }),
            }),
          ],
        });
      }
      c(67294);
    },
    95658: function (a, b, c) {
      "use strict";
      c.d(b, {
        Z: function () {
          return f;
        },
      });
      var d = c(85893);
      c(67294);
      var e = c(86010);
      function f(a) {
        var b = a.infos,
          c = a.classes,
          f = a.padding,
          g = a.children;
        return (0, d.jsxs)("div", {
          className: (0, e.Z)(
            void 0 === c ? "" : c,
            "rounded-2xl flex flex-col",
            (null == b ? void 0 : b.length) === 3 ? "justify-between" : "",
            f ? "px-7 py-5" : ""
          ),
          children: [
            b &&
              b.map(function (a, b) {
                return (0,
                d.jsxs)("div", { className: (0, e.Z)("flex justify-between", a.classes), children: [(0, d.jsx)("div", { className: "text-left", children: a.itemLeft }), (0, d.jsx)("div", { className: "text-right", children: a.itemRight })] }, b);
              }),
            (0, d.jsx)(d.Fragment, { children: g }),
          ],
        });
      }
    },
    81811: function (a, b, c) {
      "use strict";
      c.d(b, {
        Z: function () {
          return e;
        },
      });
      var d = c(85893);
      function e(a) {
        var b = a.title,
          c = a.balance,
          e = a.symbol,
          f = a.amount,
          g = a.enabled,
          h = a.onChangeAmount,
          i = a.onClickMax,
          j = a.showMax;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsxs)("div", {
              className: "flex justify-between mt-6 text-neutral",
              children: [
                (0, d.jsx)("span", {
                  className: "font-thin self-end",
                  children: b,
                }),
                (0, d.jsxs)("span", {
                  className: "font-extralight flex",
                  children: [
                    (0, d.jsx)("span", { children: "Balance:" }),
                    (0, d.jsxs)("span", {
                      className: "text-right pl-2 text-light",
                      children: [
                        (0, d.jsx)("span", { className: "pr-1", children: c }),
                        e,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, d.jsxs)("div", {
              className:
                "bg-background flex justify-between p-2 my-4 text-neutral",
              children: [
                (0, d.jsx)("input", {
                  className:
                    "bg-transparent p-2 pl-3 focus:outline-none placeholder:text-xl placeholder:font-extralight placeholder:text-neutral w-full placeholder:opacity-60 text-xl font-extralight",
                  type: "text",
                  placeholder: "0.00",
                  value: f,
                  onChange: h,
                  disabled: !g,
                }),
                (0, d.jsx)("div", {
                  className:
                    "flex flex-col text-xs font-extralight justify-center px-2 items-end",
                  children: (0, d.jsx)("span", {
                    className: "text-xl",
                    children: e,
                  }),
                }),
                !1 == j
                  ? (0, d.jsx)(d.Fragment, {})
                  : (0, d.jsx)("button", {
                      onClick: i,
                      disabled: !g,
                      className: "font-thin px-2",
                      children: "Max",
                    }),
              ],
            }),
          ],
        });
      }
      c(67294);
    },
  },
  function (a) {
    a.O(0, [126, 774, 888, 179], function () {
      var b;
      return a((a.s = 98229));
    }),
      (_N_E = a.O());
  },
]);
