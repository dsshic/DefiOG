(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [371],
  {
    95073: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/portfolio",
        function () {
          return c(16985);
        },
      ]);
    },
    16985: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return z;
          },
        });
      var d = c(47568),
        e = c(34051),
        f = c.n(e),
        g = c(85893),
        h = c(20125),
        i = c(41334),
        j = c(85042),
        k = c(42),
        l = c(12759),
        m = c(56369),
        n = c(77058);
      function o(a) {
        var b = a.claimableAssets,
          c = (0, n.$)().t;
        return (0, g.jsx)("div", {
          className: "w-full",
          children: (0, g.jsx)(m.Z, {
            headers: [
              c("tables.claimableAsset"),
              c("tables.amount"),
              c("tables.usdValue"),
            ],
            bgColor: "bg-supplyBase",
            searchBar: !1,
            footer:
              0 === b.length
                ? { str: c("tables.noRewards"), colSpan: 3 }
                : void 0,
            children: b.map(function (a, b) {
              return (0, g.jsx)(
                l.Z,
                {
                  classes: "hover:bg-borrowBase",
                  rowDatas: [
                    (0, g.jsx)(k.Z, { logo: a.logo, symbol: a.symbol }, b),
                    "".concat(a.amount.toRound(8)),
                    "".concat(
                      a.usdAmount.convertToLargeNumberRepresentation(3, "$")
                    ),
                  ],
                  click: function (a) {
                    return a.preventDefault();
                  },
                },
                b
              );
            }),
          }),
        });
      }
      var p = c(49316),
        q = c(18168),
        r = c(24304),
        s = c(55107),
        t = c(92198),
        u = c(44402),
        v = c(52874),
        w = c(64146),
        x = c(67294),
        y = c(86501),
        z = function () {
          var a,
            b = (0, n.$)().t,
            c = (0, s.b)(),
            e = c.address,
            k = c.network,
            l = c.web3Provider,
            m = (0, u.A)().handleClaimComp,
            z = (0, t.H)().sonnePrice,
            A = (0, x.useState)(!1),
            B = (A[0], A[1]),
            C = (0, x.useState)(!1),
            D = (C[0], C[1]),
            E = (0, x.useState)(r.O.from("0")),
            F = E[0],
            G = E[1],
            H =
              ((a = (0, d.Z)(
                f().mark(function a() {
                  var b, c, d;
                  return f().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (!(!e || !l)) {
                            a.next = 2;
                            break;
                          }
                          return a.abrupt("return");
                        case 2:
                          if (k.basicLens) {
                            a.next = 4;
                            break;
                          }
                          return a.abrupt("return");
                        case 4:
                          if (k.comptrollerAddress) {
                            a.next = 6;
                            break;
                          }
                          return a.abrupt("return");
                        case 6:
                          return (
                            (b = null == l ? void 0 : l.getSigner()),
                            (c = new w.Contract(k.basicLens, q.ED, b)),
                            (a.next = 10),
                            c.callStatic.compAccued(k.comptrollerAddress, e)
                          );
                        case 10:
                          (d = a.sent), G(r.O.from(d, 18));
                        case 12:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )),
              function () {
                return a.apply(this, arguments);
              });
          (0, x.useEffect)(
            function () {
              H(), setInterval(H, 25e3);
            },
            [e, l]
          );
          var I,
            J = (0, x.useMemo)(
              function () {
                return !z || z.eq(r.O.from(0)) || !F._value || F._value.eq("0")
                  ? r.O.from(0)
                  : F.mul(z).div(r.O.parseValue("1", 18));
              },
              [z, F]
            ),
            K = (0, x.useMemo)(
              function () {
                return !F || !F._value || F._value.eq("0")
                  ? []
                  : [
                      {
                        symbol: "SONNE",
                        logo: "/assets/images/sonne-icon.svg",
                        amount: F,
                        usdAmount: J,
                      },
                    ];
              },
              [F, J]
            );
          (0, x.useEffect)(
            function () {
              D((null == F ? void 0 : F._value) && !F._value.eq(0));
            },
            [F]
          );
          var L =
            ((I = (0, d.Z)(
              f().mark(function a() {
                var c;
                return f().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return B(!0), (a.next = 3), m();
                      case 3:
                        (c = a.sent), (0, v.JQ)(c, b("common.claim")), B(!1);
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )),
            function () {
              return I.apply(this, arguments);
            });
          return (0, g.jsxs)(g.Fragment, {
            children: [
              e
                ? (0, g.jsxs)(g.Fragment, {
                    children: [
                      (0, g.jsx)(i.Z, { showNetwork: !0, title: "Portfolio" }),
                      (0, g.jsxs)("div", {
                        className: "flex w-ful gap-6 flex-col md:flex-row",
                        children: [
                          (0, g.jsx)("div", {
                            className: "flex-1",
                            children: (0, g.jsx)(p.Z, {}),
                          }),
                          (0, g.jsx)("div", {
                            className: "flex-1",
                            children: (0, g.jsx)(j.Z, {}),
                          }),
                        ],
                      }),
                      (0, g.jsx)("div", {
                        className: "w-full font-light mb-7 mt-14 text-neutral ",
                        children: (0, g.jsxs)("div", {
                          className: "flex justify-between px-7 w-full",
                          children: [
                            (0, g.jsxs)("div", {
                              className: "text-[21px]",
                              children: [
                                (0, g.jsx)("p", {
                                  className: "pb-3",
                                  children: b("stake.claimable"),
                                }),
                                (0, g.jsxs)("p", {
                                  className: "text-3xl",
                                  children: [F.toRound(8), " SONNE"],
                                }),
                              ],
                            }),
                            (0, g.jsx)("div", {
                              children: (0, g.jsx)(h.Z, {
                                enabled: !0,
                                color: "middle",
                                text: "Claim All",
                                wFull: !1,
                                onClick: L,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, g.jsx)(o, { claimableAssets: K }),
                    ],
                  })
                : null,
              (0, g.jsx)(y.x7, {}),
            ],
          });
        };
    },
  },
  function (a) {
    a.O(0, [221, 126, 465, 774, 888, 179], function () {
      var b;
      return a((a.s = 95073));
    }),
      (_N_E = a.O());
  },
]);
