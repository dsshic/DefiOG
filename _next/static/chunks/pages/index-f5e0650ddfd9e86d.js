(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    48312: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return c(46434);
        },
      ]);
    },
    46434: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return x;
          },
        });
      var d = c(85893),
        e = c(67294),
        f = c(55107),
        g = c(828),
        h = c(89040),
        i = c(41334),
        j = c(24304),
        k = c(62302),
        l = c(86010),
        m = c(42),
        n = c(12759),
        o = c(56369),
        p = c(77058);
      function q(a) {
        var b,
          c,
          q = a.classes,
          r = (0, p.$)().t,
          s = (0, k.R)(),
          t = s.marketsData,
          u = s.setSelectedMarketSymbol,
          v = (0, f.b)().address,
          w = (0, g.Z)(e.useState(), 2),
          x = w[0],
          y = w[1],
          z = (0, g.Z)(e.useState(""), 2),
          A = z[0],
          B = z[1],
          C = (0, g.Z)(e.useState(!1), 2),
          D = C[0],
          E = C[1],
          F = function (a) {
            y(a), u(a.underlying.symbol), E(!0);
          },
          G = function (a) {
            B(a.target.value.toLowerCase());
          },
          H = function () {
            return (
              (null == t
                ? void 0
                : t.filter(function (a) {
                    return a.underlying.symbol.toLowerCase().includes(A);
                  })) || []
            );
          };
        return (0, d.jsxs)("div", {
          className: "w-full",
          children: [
            (0, d.jsx)(i.Z, {
              classes: (0, l.Z)(v ? " mt-14" : ""),
              title: r("tables.supplyAssets"),
              showNetwork: !1,
            }),
            (0, d.jsx)(o.Z, {
              headers: [
                r("tables.asset"),
                r("tables.supplyApy"),
                r("tables.rewardApy"),
                r("tables.wallet"),
              ],
              bgColor: "bg-supplyBase",
              searchBar: !0,
              searchChange: function (a) {
                G(a);
              },
              footer:
                (null === (b = H()) || void 0 === b ? void 0 : b.length) === 0
                  ? { str: r("tables.noRecords"), colSpan: 4 }
                  : void 0,
              classes: q,
              children:
                null === (c = H()) || void 0 === c
                  ? void 0
                  : c.map(function (a, b) {
                      return (0, d.jsx)(
                        n.Z,
                        {
                          classes: "hover:bg-borrowBase",
                          rowDatas: [
                            (0, d.jsx)(
                              m.Z,
                              {
                                logo: a.underlying.logo,
                                symbol: a.underlying.symbol,
                              },
                              b
                            ),
                            "".concat(
                              a.supplyApy.mul(j.O.from("100")).toFixed(2),
                              "%"
                            ),
                            "".concat(a.supplyRewardApy.toFixed(2), "%"),
                            (0, d.jsxs)(
                              "p",
                              {
                                className: "opacity-50",
                                children: [
                                  a.underlying.walletBalance.toFixed(2),
                                  " ",
                                  a.underlying.symbol,
                                ],
                              },
                              b
                            ),
                          ],
                          click: function (b) {
                            b.preventDefault(), F(a);
                          },
                        },
                        b
                      );
                    }),
            }),
            D &&
              x &&
              (0, d.jsx)(h.Z, { isOpen: D, setIsOpen: E, selectedMarket: x }),
          ],
        });
      }
      var r = c(5908);
      function s() {
        var a,
          b,
          c = (0, p.$)().t,
          h = (0, k.R)(),
          q = h.marketsData,
          s = h.setSelectedMarketSymbol,
          t = (0, f.b)().address,
          u = (0, g.Z)(e.useState(), 2),
          v = u[0],
          w = u[1],
          x = (0, g.Z)(e.useState(""), 2),
          y = x[0],
          z = x[1],
          A = (0, g.Z)(e.useState(!1), 2),
          B = A[0],
          C = A[1],
          D = function (a) {
            w(a), s(a.underlying.symbol), C(!0);
          },
          E = function (a) {
            z(a.target.value.toLowerCase());
          },
          F = function () {
            return (
              (null == q
                ? void 0
                : q.filter(function (a) {
                    return a.underlying.symbol.toLowerCase().includes(y);
                  })) || []
            );
          };
        return (0, d.jsxs)("div", {
          className: "w-full",
          children: [
            (0, d.jsx)(i.Z, {
              classes: (0, l.Z)(t ? " mt-14" : ""),
              title: c("tables.borrowAssets"),
              showNetwork: !1,
            }),
            (0, d.jsx)(o.Z, {
              headers: [
                c("tables.asset"),
                c("tables.borrowApy"),
                c("tables.rewardApy"),
                c("tables.liquidity"),
              ],
              bgColor: "bg-borrowBase",
              searchBar: !0,
              searchChange: function (a) {
                E(a);
              },
              footer:
                (null === (a = F()) || void 0 === a ? void 0 : a.length) === 0
                  ? { str: c("tables.noRecords"), colSpan: 4 }
                  : void 0,
              children:
                null === (b = F()) || void 0 === b
                  ? void 0
                  : b.map(function (a, b) {
                      return (0, d.jsx)(
                        n.Z,
                        {
                          classes: "hover:bg-supplyBase",
                          rowDatas: [
                            (0, d.jsx)(
                              m.Z,
                              {
                                logo: a.underlying.logo,
                                symbol: a.underlying.symbol,
                              },
                              b
                            ),
                            "".concat(
                              a.borrowApy.mul(j.O.from("100")).toFixed(2),
                              "%"
                            ),
                            "".concat(a.borrowRewardApy.toFixed(2), "%"),
                            ""
                              .concat(
                                a.liquidity
                                  .div(a.underlying.price)
                                  .convertToLargeNumberRepresentation(3),
                                "  "
                              )
                              .concat(a.underlying.symbol),
                          ],
                          click: function (b) {
                            b.preventDefault(), D(a);
                          },
                        },
                        b
                      );
                    }),
            }),
            B &&
              v &&
              (0, d.jsx)(r.Z, { isOpen: B, setIsOpen: C, selectedMarket: v }),
          ],
        });
      }
      var t,
        u = c(85042),
        v = c(49316),
        w = c(72684),
        x = function () {
          var a,
            b,
            c,
            g,
            h = (0, p.$)().t,
            i = (0, f.b)().address,
            j = (0, e.useState)(1),
            k = j[0],
            m = j[1];
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)("div", {
                className: "flex flex-wrap md:hidden",
                children: (0, d.jsxs)("div", {
                  className: "w-full",
                  children: [
                    (0, d.jsxs)("ul", {
                      className: "flex list-none flex-wrap flex-row mb-12",
                      role: "tablist",
                      children: [
                        (0, d.jsx)("li", {
                          className: "flex-auto text-center",
                          children: (0, d.jsx)("a", {
                            className: (0, l.Z)(
                              "w-full pb-4 text-xl leading-5 block ",
                              1 === k
                                ? (0, l.Z)(
                                    null === (a = (0, w.l)("light")) ||
                                      void 0 === a
                                      ? void 0
                                      : a.borderB,
                                    null === (b = (0, w.l)("light")) ||
                                      void 0 === b
                                      ? void 0
                                      : b.text,
                                    "border-b-2 font-light"
                                  )
                                : "font-thin text-neutral"
                            ),
                            onClick: function (a) {
                              a.preventDefault(), m(1);
                            },
                            "data-toggle": "tab",
                            href: "#link1",
                            role: "tablist",
                            children: h("common.supply"),
                          }),
                        }),
                        (0, d.jsx)("li", {
                          className: "flex-auto text-center",
                          children: (0, d.jsx)("a", {
                            className: (0, l.Z)(
                              "w-full pb-4 text-xl leading-5 block ",
                              2 === k
                                ? (0, l.Z)(
                                    null === (c = (0, w.l)("middle")) ||
                                      void 0 === c
                                      ? void 0
                                      : c.borderB,
                                    null === (g = (0, w.l)("middle")) ||
                                      void 0 === g
                                      ? void 0
                                      : g.text,
                                    "border-b-2 font-middle"
                                  )
                                : "font-thin text-neutral"
                            ),
                            onClick: function (a) {
                              a.preventDefault(), m(2);
                            },
                            "data-toggle": "tab",
                            href: "#link1",
                            role: "tablist",
                            children: h("common.borrow"),
                          }),
                        }),
                      ],
                    }),
                    (0, d.jsx)("div", {
                      className:
                        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded",
                      children: (0, d.jsx)("div", {
                        className: "px-4 py-5 flex-auto",
                        children: (0, d.jsxs)("div", {
                          className: "tab-content tab-space",
                          children: [
                            (0, d.jsxs)("div", {
                              className: 1 === k ? "block" : "hidden",
                              id: "link1",
                              children: [
                                i && (0, d.jsx)(v.Z, {}),
                                (0, d.jsx)(q, {}),
                              ],
                            }),
                            (0, d.jsxs)("div", {
                              className: 2 === k ? "block" : "hidden",
                              id: "link2",
                              children: [
                                i && (0, d.jsx)(u.Z, {}),
                                (0, d.jsx)(s, {}),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, d.jsxs)("div", {
                className: "w-full flex justify-center",
                children: [
                  (0, d.jsx)("div", {
                    className: "gap-12 hidden lg:flex w-full",
                    children: (0, d.jsxs)("div", {
                      className: "w-full",
                      children: [
                        (0, d.jsxs)("div", {
                          className: "flex gap-6",
                          children: [
                            (0, d.jsx)("div", {
                              className: "flex-1",
                              children: i && (0, d.jsx)(v.Z, {}),
                            }),
                            (0, d.jsx)("div", {
                              className: "flex-1",
                              children: i && (0, d.jsx)(u.Z, {}),
                            }),
                          ],
                        }),
                        (0, d.jsxs)("div", {
                          className: "flex gap-6",
                          children: [(0, d.jsx)(q, {}), (0, d.jsx)(s, {})],
                        }),
                      ],
                    }),
                  }),
                  (0, d.jsxs)("div", {
                    className: "gap-12 hidden md:grid lg:hidden w-full",
                    children: [
                      i && (0, d.jsx)(v.Z, {}),
                      i && (0, d.jsx)(u.Z, {}),
                      (0, d.jsx)(q, {}),
                      (0, d.jsx)(s, {}),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
  },
  function (a) {
    a.O(0, [221, 126, 465, 774, 888, 179], function () {
      var b;
      return a((a.s = 48312));
    }),
      (_N_E = a.O());
  },
]);
