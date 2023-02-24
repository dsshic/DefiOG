"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [425],
  {
    95658: function (a, b, c) {
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
    18425: function (a, b, c) {
      c.d(b, {
        Z: function () {
          return F;
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
        l = c(95658),
        m = c(72684),
        n = c(86010),
        o = c(41664),
        p = c.n(o),
        q = c(67294),
        r = c(50776);
      function s(a) {
        var b = a.openTabName;
        return (0, i.jsxs)(r.mQ, {
          className: "text-neutral",
          children: [
            (0, i.jsx)(r.td, {
              className: "flex list-none flex-wrap flex-row gap-4",
              children: [
                {
                  name: "sSONNE Staking",
                  href: "/stake/sSonne",
                  themeColor: "light",
                },
                {
                  name: "uSONNE Staking",
                  href: "/stake/uSonne",
                  themeColor: "middle",
                },
              ].map(function (a, c) {
                var d, e;
                return (0,
                i.jsx)(r.OK, { className: "flex-auto text-center focus-visible:outline-none", children: (0, i.jsx)(p(), { href: a.href, children: (0, i.jsx)("p", { className: (0, n.Z)("w-full py-2 leading-5 block focus:outline-none outline-none focus-visible:outline-none cursor-pointer border-[1px] rounded-2xl font-light", null === (d = (0, m.l)(a.themeColor)) || void 0 === d ? void 0 : d.border, b === a.name ? (0, n.Z)(null === (e = (0, m.l)(a.themeColor)) || void 0 === e ? void 0 : e.bg) : ""), children: a.name }) }) }, c);
              }),
            }),
            (0, i.jsx)(r.x4, {}),
            (0, i.jsx)(r.x4, {}),
          ],
        });
      }
      var t = c(81811),
        u = c(24304),
        v = c(55107),
        w = c(78731),
        x = c(92198),
        y = c(44402),
        z = c(19859),
        A = c(52874),
        B = c(86501),
        C = c(77058),
        D = c(828);
      function E(a) {
        a.isStake;
        var b = a.setIsStake,
          c = [
            {
              name: "Stake",
              themeColor: "light",
              openTabClasses: "border-b-light text-light border-b-2 font-light",
              otherTabClasses: "font-thin font-neutral",
            },
            {
              name: "Unstake",
              themeColor: "middle",
              openTabClasses:
                "border-b-middle text-middle border-b-2 font-light",
              otherTabClasses: "font-thin font-neutral",
            },
          ],
          d = (0, D.Z)(q.useState(c[0]), 2),
          e = d[0],
          f = d[1];
        return (
          (0, q.useEffect)(
            function () {
              b("Stake" === e.name);
            },
            [e]
          ),
          (0, i.jsxs)(r.mQ, {
            className: "text-neutral pb-4",
            children: [
              (0, i.jsx)(r.td, {
                className: "flex list-none flex-wrap flex-row gap-4",
                children: c.map(function (a, b) {
                  return (0, i.jsx)(
                    r.OK,
                    {
                      className:
                        "flex-auto text-center focus-visible:outline-none",
                      children: (0, i.jsx)("button", {
                        className: (0, n.Z)(
                          "w-full py-2 leading-5 block focus:outline-none outline-none focus-visible:outline-none cursor-pointer",
                          (0, n.Z)(
                            e.name === a.name
                              ? a.openTabClasses
                              : a.otherTabClasses
                          )
                        ),
                        onClick: function () {
                          f(a);
                        },
                        children: a.name,
                      }),
                    },
                    b
                  );
                }),
              }),
              (0, i.jsx)(r.x4, {}),
              (0, i.jsx)(r.x4, {}),
            ],
          })
        );
      }
      function F(a) {
        var b = a.balance,
          c = a.tokenSymbol,
          g = a.contractAddress,
          m = a.claimableSymbol,
          o = a.tabName,
          p = a.allowance,
          r = a.reward,
          D = a.withdrawalAmount,
          F = a.withdrawalReleaseTime,
          G = (0, C.$)().t,
          H = (0, v.b)(),
          I = H.address,
          J = H.network,
          K = (0, y.A)(),
          L = K.handleEnableByAddress,
          M = K.handleStakeSonne,
          N = K.handleUnstakeSonne,
          O = K.handleWithdrawSonne,
          P = K.handleClaimSonne,
          Q = K.handleClaimAll,
          R = (0, x.H)(),
          S = R.sonnePrice,
          T = R.aprs,
          U = (0, w.s)(),
          V = U.stakeState,
          W = U.fetchStakeState,
          X = (0, q.useState)({
            approve: !1,
            stake: !1,
            unstake: !1,
            withdraw: !1,
            claim: !1,
            claimAll: !1,
          }),
          Y = X[0],
          Z = X[1],
          $ = (0, q.useState)({
            approve: !1,
            stake: !1,
            unstake: !1,
            withdraw: !1,
            claim: !1,
            claimVelo: !1,
            claimOp: !1,
            claimAll: !1,
          }),
          _ = $[0],
          aa = $[1],
          ab = (0, q.useState)(!0),
          ac = ab[0],
          ad = ab[1],
          ae = (0, q.useState)(u.O.from(0)),
          af = ae[0],
          ag = ae[1],
          ah = (0, q.useState)(u.O.from(0)),
          ai = ah[0],
          aj = ah[1],
          ak = (0, q.useState)(""),
          al = ak[0],
          am = ak[1],
          an = (0, q.useState)(""),
          ao = an[0],
          ap = an[1],
          aq = (0, q.useState)(""),
          ar = aq[0],
          as = aq[1];
        (0, q.useEffect)(
          function () {
            if (D && F) {
              if (D.eq(u.O.from(0))) {
                Z((0, f.Z)((0, e.Z)({}, Y), { withdraw: !1 }));
                return;
              }
              var a = Date.now() / 1e3;
              F && F < a
                ? Z(function (a) {
                    return (0, f.Z)((0, e.Z)({}, a), { withdraw: !0 });
                  })
                : Z(function (a) {
                    return (0, f.Z)((0, e.Z)({}, a), { withdraw: !1 });
                  });
            }
          },
          [F, D]
        ),
          (0, q.useEffect)(function () {
            var a = p.eq(u.O.from(0));
            Z(function (b) {
              return (0, f.Z)((0, e.Z)({}, b), { approve: a });
            }),
              aj(b || u.O.from(0));
          }, []),
          (0, q.useEffect)(
            function () {
              aj(b || u.O.from(0));
            },
            [b]
          ),
          (0, q.useEffect)(
            function () {
              ac &&
                ("" === al || 0 == +al
                  ? Z(function (a) {
                      return (0,
                      f.Z)((0, e.Z)({}, a), { approve: p.eq(u.O.from(0)) });
                    })
                  : Z(function (a) {
                      return (0,
                      f.Z)((0, e.Z)({}, a), { approve: +al > +p.toString() });
                    }));
            },
            [p]
          ),
          (0, q.useEffect)(
            function () {
              V && ag(V.sonneBalance);
            },
            [V]
          ),
          (0, q.useEffect)(
            function () {
              if (!al || !af) return as("");
              if (isNaN(+al)) {
                as(G("error.invalidNm")),
                  Z(function (a) {
                    return (0, f.Z)((0, e.Z)({}, a), { stake: !1 });
                  });
                return;
              }
              if (+al > +af) {
                as(G("error.insufficientBalance")),
                  Z(function (a) {
                    return (0, f.Z)((0, e.Z)({}, a), { stake: !1 });
                  });
                return;
              }
              if (al.includes(".") && al.split(".")[1].length > 18) {
                as(G("error.invalidNm")),
                  Z(function (a) {
                    return (0, f.Z)((0, e.Z)({}, a), { stake: !1 });
                  });
                return;
              }
              if (0 >= +al || "" === al) {
                as(G("error.lt0")),
                  Z(function (a) {
                    return (0, f.Z)((0, e.Z)({}, a), { stake: !1 });
                  });
                return;
              }
              if (+al > +p.toString()) {
                Z(function (a) {
                  return (0, f.Z)((0, e.Z)({}, a), { approve: !0 });
                }),
                  as(G("error.exceedAllowance"));
                return;
              }
              Z(function (a) {
                return (0, f.Z)((0, e.Z)({}, a), { approve: !1 });
              });
              var a = u.O.parseValue(al, 18),
                b =
                  af.gt(u.O.from(0)) &&
                  a.gt(u.O.from(0)) &&
                  af.gte(a) &&
                  p.gte(a);
              as(""),
                Z(function (a) {
                  return (0, f.Z)((0, e.Z)({}, a), { stake: b });
                });
            },
            [al, af]
          ),
          (0, q.useEffect)(
            function () {
              if (!ao || !b || !p) return as("");
              if (isNaN(+ao)) {
                as(G("error.invalidNm")),
                  Z(function (a) {
                    return (0, f.Z)((0, e.Z)({}, a), { unstake: !1 });
                  });
                return;
              }
              if (+ao > +b) {
                as(G("error.insufficientBalance")),
                  Z(function (a) {
                    return (0, f.Z)((0, e.Z)({}, a), { unstake: !1 });
                  });
                return;
              }
              if (ao.includes(".") && ao.split(".")[1].length > 18) {
                as(G("error.invalidNm")),
                  Z(function (a) {
                    return (0, f.Z)((0, e.Z)({}, a), { unstake: !1 });
                  });
                return;
              }
              if (0 >= +ao || "" === ao) {
                as(G("error.lt0")),
                  Z(function (a) {
                    return (0, f.Z)((0, e.Z)({}, a), { unstake: !1 });
                  });
                return;
              }
              var a = u.O.parseValue(ao, 18),
                c = b.gt(u.O.from(0)) && a.gt(u.O.from(0)) && b.gte(a);
              as(""),
                Z(function (a) {
                  return (0, f.Z)((0, e.Z)({}, a), { unstake: c });
                });
            },
            [ao, b, p]
          ),
          (0, q.useEffect)(
            function () {
              as(""), am(""), ap("");
            },
            [ac]
          );
        var at,
          au,
          av,
          aw,
          ax,
          ay,
          az,
          aA,
          aB = function (a) {
            ap(a.target.value);
          },
          aC = function (a) {
            am(a.target.value);
          },
          aD =
            ((at = (0, d.Z)(
              h().mark(function a() {
                var b;
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          aa((0, f.Z)((0, e.Z)({}, _), { approve: !0 })),
                          (a.next = 3),
                          L(J.sonneAddress, g)
                        );
                      case 3:
                        (b = a.sent),
                          aa((0, f.Z)((0, e.Z)({}, _), { approve: !1 })),
                          W(),
                          (0, A.JQ)(b, G("common.approve")),
                          b || Z((0, f.Z)((0, e.Z)({}, Y), { approve: !1 }));
                      case 8:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )),
            function () {
              return at.apply(this, arguments);
            }),
          aE =
            ((au = (0, d.Z)(
              h().mark(function a() {
                var b;
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          aa((0, f.Z)((0, e.Z)({}, _), { stake: !0 })),
                          (a.next = 3),
                          M(g, al)
                        );
                      case 3:
                        (b = a.sent),
                          aa((0, f.Z)((0, e.Z)({}, _), { stake: !1 })),
                          (0, A.JQ)(b, G("common.stake")),
                          aM();
                      case 7:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )),
            function () {
              return au.apply(this, arguments);
            }),
          aF =
            ((av = (0, d.Z)(
              h().mark(function a() {
                var b;
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          aa((0, f.Z)((0, e.Z)({}, _), { unstake: !0 })),
                          (a.next = 3),
                          N(g, ao)
                        );
                      case 3:
                        (b = a.sent),
                          aa((0, f.Z)((0, e.Z)({}, _), { unstake: !1 })),
                          (0, A.JQ)(b, G("common.unstake")),
                          aM();
                      case 7:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )),
            function () {
              return av.apply(this, arguments);
            }),
          aG =
            ((aw = (0, d.Z)(
              h().mark(function a() {
                var b;
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          aa((0, f.Z)((0, e.Z)({}, _), { withdraw: !0 })),
                          (a.next = 3),
                          O(g)
                        );
                      case 3:
                        (b = a.sent),
                          aa((0, f.Z)((0, e.Z)({}, _), { withdraw: !1 })),
                          (0, A.JQ)(b, G("common.withdraw"));
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )),
            function () {
              return aw.apply(this, arguments);
            }),
          aH =
            ((ax = (0, d.Z)(
              h().mark(function a() {
                var b;
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          aa((0, f.Z)((0, e.Z)({}, _), { claim: !0 })),
                          (a.next = 3),
                          P(g, "SONNE" === m ? J.sonneAddress : J.usdcAddress)
                        );
                      case 3:
                        (b = a.sent),
                          aa((0, f.Z)((0, e.Z)({}, _), { claim: !1 })),
                          (0, A.JQ)(b, G("common.claim"));
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )),
            function () {
              return ax.apply(this, arguments);
            }),
          aI =
            ((ay = (0, d.Z)(
              h().mark(function a() {
                var b;
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          aa((0, f.Z)((0, e.Z)({}, _), { claimVelo: !0 })),
                          (a.next = 3),
                          P(g, J.veloAddress)
                        );
                      case 3:
                        (b = a.sent),
                          aa((0, f.Z)((0, e.Z)({}, _), { claimVelo: !1 })),
                          (0, A.JQ)(b, G("common.claim"));
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )),
            function () {
              return ay.apply(this, arguments);
            }),
          aJ =
            ((az = (0, d.Z)(
              h().mark(function a() {
                var b;
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          aa((0, f.Z)((0, e.Z)({}, _), { claimOp: !0 })),
                          (a.next = 3),
                          P(g, J.opAddress)
                        );
                      case 3:
                        (b = a.sent),
                          aa((0, f.Z)((0, e.Z)({}, _), { claimOp: !1 })),
                          (0, A.JQ)(b, G("common.claim"));
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )),
            function () {
              return az.apply(this, arguments);
            });
        (0, d.Z)(
          h().mark(function a() {
            var b;
            return h().wrap(function (a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (
                      aa((0, f.Z)((0, e.Z)({}, _), { claimAll: !0 })),
                      (a.next = 3),
                      Q(g)
                    );
                  case 3:
                    (b = a.sent),
                      aa((0, f.Z)((0, e.Z)({}, _), { claimAll: !1 })),
                      (0, A.JQ)(b, G("common.claim"));
                  case 6:
                  case "end":
                    return a.stop();
                }
            }, a);
          })
        );
        var aK = function () {
            am(af.toString());
          },
          aL = function () {
            ap(b.toString());
          },
          aM = function () {
            am(""),
              ap(""),
              as(""),
              Z((0, f.Z)((0, e.Z)({}, Y), { stake: !1, unstake: !1 })),
              W();
          };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(k.Z, {
              title: "".concat(G("stake.staking")),
              showNetwork: !1,
            }),
            (0, i.jsxs)("div", {
              className: "flex flex-col lg:items-stretch lg:flex-row gap-6",
              children: [
                (0, i.jsxs)("div", {
                  className: "flex flex-col flex-1 gap-6 items-center",
                  children: [
                    (0, i.jsx)("div", {
                      className: "w-full max-w-[560px]",
                      children: (0, i.jsx)(s, { openTabName: o }),
                    }),
                    (0, i.jsx)(l.Z, {
                      classes: "bg-supplyBase max-w-[560px] w-full",
                      padding: !0,
                      infos: [
                        {
                          itemLeft: G("stake.yourBalance"),
                          itemRight: G("stake.staked"),
                          classes: "text-neutral font-thin text-[16px]",
                        },
                        {
                          itemLeft: "".concat(af.toFixed(2), " SONNE"),
                          itemRight: "".concat(ai.toFixed(2), " ").concat(c),
                          classes:
                            "text-light font-light text-[20px] sm:text-[24px] py-4",
                        },
                        {
                          itemLeft: "$".concat(
                            af && S
                              ? (+S.toString() * +af.toString()).toFixed(2)
                              : "0.00"
                          ),
                          itemRight: "$".concat(
                            b && S
                              ? (+S.toString() * +ai.toString()).toFixed(2)
                              : "0.00"
                          ),
                          classes:
                            "text-neutral font-extralight text-[18px] sm:text-[20px]",
                        },
                      ],
                    }),
                    (0, i.jsx)(l.Z, {
                      classes: "bg-supplyBase max-w-[560px] w-full",
                      padding: !0,
                      infos: [
                        {
                          itemLeft: G("stake.ratio"),
                          itemRight: G("stake.apr"),
                          classes: "text-neutral font-thin text-[16px]",
                        },
                        {
                          itemLeft: "1 ".concat(c, " = 1.0 SONNE"),
                          itemRight: (0, i.jsxs)("div", {
                            className: "flex gap-2 items-center",
                            children: [
                              (0, i.jsxs)("p", { children: [T.totalApr, "%"] }),
                              (0, i.jsx)("div", {
                                children: (0, i.jsxs)("div", {
                                  className:
                                    "group relative flex duration-300 text-20 sm:text-[24px] text-middle cursor-pointer",
                                  children: [
                                    (0, i.jsx)("img", {
                                      src: "/assets/images/info.svg",
                                      className: "w-6 h-6",
                                      width: 24,
                                      height: 24,
                                    }),
                                    (0, i.jsx)("span", {
                                      className:
                                        "z-10 absolute hidden group-hover:flex w-64 sm:w-80 p-4 bg-background rounded-xl text-center -top-11 sm:-top-12 right-6 sm:right-8 lg:-right-3 lg:translate-x-full before:content-[''] before:absolute before:top-1/2 before:lg:right-[100%] before:left-[100%] before:lg:-left-4 before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-background before:lg:border-l-transparent before:lg:border-r-background before:border-r-transparent",
                                      children: (0, i.jsxs)("div", {
                                        className: "flex flex-col w-full gap-2",
                                        children: [
                                          (0, i.jsxs)("div", {
                                            className:
                                              "flex justify-between w-full",
                                            children: [
                                              (0, i.jsxs)("div", {
                                                className: "flex gap-2",
                                                children: [
                                                  (0, i.jsx)("img", {
                                                    src: o.startsWith("s")
                                                      ? "/assets/images/sonne-icon.png"
                                                      : "/assets/images/USDC-logo.svg",
                                                    className: "object-contain",
                                                    alt: "",
                                                    width: 24,
                                                    height: 24,
                                                  }),
                                                  (0, i.jsxs)("span", {
                                                    children: [
                                                      r[0].rewardSybmol,
                                                      " APR",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, i.jsxs)("p", {
                                                children: [T.protocolApr, "%"],
                                              }),
                                            ],
                                          }),
                                          (0, i.jsxs)("div", {
                                            className:
                                              "flex justify-between w-full",
                                            children: [
                                              (0, i.jsxs)("div", {
                                                className: "flex gap-2",
                                                children: [
                                                  (0, i.jsx)("img", {
                                                    src: "/assets/images/velodrome-icon.png",
                                                    className: "object-contain",
                                                    alt: "",
                                                    width: 24,
                                                    height: 24,
                                                  }),
                                                  (0, i.jsx)("span", {
                                                    children: "VELO APR",
                                                  }),
                                                ],
                                              }),
                                              (0, i.jsxs)("p", {
                                                children: [T.veloApr, "%"],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          classes:
                            "text-middle pt-4 font-light text-[18px] sm:text-[24px]",
                        },
                        {
                          itemLeft: (0, i.jsxs)("p", {
                            className: "pt-4 font-thin text-neutral",
                            children: [
                              "*VELO and OP rewards are distributed on Wednesdays. ",
                              (0, i.jsx)("br", {}),
                              " SONNE/USDC rewards are distributed on Thursdays.",
                            ],
                          }),
                          itemRight: "",
                          classes: "text-neutral font-thin",
                        },
                      ],
                    }),
                    (0, i.jsx)(l.Z, {
                      classes: "bg-supplyBase max-w-[560px] w-full",
                      padding: !0,
                      infos: [
                        {
                          itemLeft: G("stake.claimable"),
                          classes: "text-neutral font-thin text-[16px]",
                        },
                        {
                          itemLeft: (0, i.jsxs)("p", {
                            className:
                              "text-light font-light text-[20px] sm:text-[24px]",
                            children: [
                              "USDC" === r[0].rewardSybmol
                                ? r[0].rewardAmount.toString()
                                : r[0].rewardAmount.toFixed(8),
                              " ",
                              r[0].rewardSybmol,
                            ],
                          }),
                          itemRight: (0, i.jsx)(j.Z, {
                            text: G("common.claim"),
                            color: "middle",
                            classes: "text-neutral",
                            enabled: r[0].rewardAmount.gt(u.O.from(0)),
                            onClick: aH,
                            loading: _.claim,
                          }),
                          classes: "pt-[20px] items-center",
                        },
                        {
                          itemLeft: (0, i.jsxs)("p", {
                            className:
                              "text-light font-light text-[20px] sm:text-[24px]",
                            children: [
                              r[1].rewardAmount.toFixed(8),
                              " ",
                              r[1].rewardSybmol,
                            ],
                          }),
                          itemRight: (0, i.jsx)(j.Z, {
                            text: G("common.claim"),
                            color: "middle",
                            classes: "text-neutral",
                            enabled: r[1].rewardAmount.gt(u.O.from(0)),
                            onClick: aI,
                            loading: _.claimVelo,
                          }),
                          classes: "pt-[20px] items-center",
                        },
                        {
                          itemLeft: (0, i.jsxs)("p", {
                            className:
                              "text-light font-light text-[20px] sm:text-[24px]",
                            children: [
                              r[2].rewardAmount.toFixed(8),
                              " ",
                              r[2].rewardSybmol,
                            ],
                          }),
                          itemRight: (0, i.jsx)(j.Z, {
                            text: G("common.claim"),
                            color: "middle",
                            classes: "text-neutral",
                            enabled: r[2].rewardAmount.gt(u.O.from(0)),
                            onClick: aJ,
                            loading: _.claimOp,
                          }),
                          classes: "pt-[20px] items-center",
                        },
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className:
                    "flex flex-col flex-1 justify-start items-center lg:translate-y-[60px]",
                  children: (0, i.jsx)(l.Z, {
                    classes: "w-full bg-stake max-w-[560px]",
                    padding: !0,
                    children: I
                      ? (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsx)("p", {
                              className: "font-thin text-neutral pb-6",
                              children: "Choose to stake or unstake",
                            }),
                            (0, i.jsx)(E, { setIsStake: ad, isStake: ac }),
                            ac
                              ? (0, i.jsx)(t.Z, {
                                  title: G("common.stake"),
                                  balance: af.toFixed(2),
                                  amount: al,
                                  onChangeAmount: aC,
                                  onClickMax: aK,
                                  symbol: "SONNE",
                                  enabled: ac,
                                })
                              : (0, i.jsx)(t.Z, {
                                  title: G("common.unstake"),
                                  balance: b.toFixed(2),
                                  amount: ao,
                                  onChangeAmount: aB,
                                  onClickMax: aL,
                                  symbol: c,
                                  enabled: !ac,
                                }),
                            (0, i.jsx)("div", {
                              className: "flex justify-between",
                              children: (0, i.jsx)("span", {
                                className: (0, n.Z)(
                                  "text-[13px] font-extralight self-end text-light"
                                ),
                                children: ar,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "flex gap-4 pt-8",
                              children: ac
                                ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                      (0, i.jsx)(j.Z, {
                                        color: "light",
                                        enabled: Y.approve,
                                        text: G("common.approve"),
                                        loading: _.approve,
                                        number: "1",
                                        onClick: aD,
                                        wFull: !0,
                                        classes: "text-neutral",
                                      }),
                                      (0, i.jsx)(j.Z, {
                                        color: "light",
                                        enabled: Y.stake,
                                        text: G("common.stake"),
                                        loading: _.stake,
                                        number: "2",
                                        onClick: aE,
                                        wFull: !0,
                                        classes: "text-neutral",
                                      }),
                                    ],
                                  })
                                : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                      (0, i.jsx)(j.Z, {
                                        color: "light",
                                        enabled: Y.unstake,
                                        text: G("common.unstake"),
                                        loading: _.unstake,
                                        number: "1",
                                        onClick: aF,
                                        wFull: !0,
                                        classes: "text-neutral",
                                      }),
                                      (0, i.jsx)(j.Z, {
                                        color: "light",
                                        enabled: Y.withdraw,
                                        text: G("common.withdraw"),
                                        loading: _.withdraw,
                                        number: "2",
                                        onClick: aG,
                                        wFull: !0,
                                        classes: "text-neutral",
                                      }),
                                    ],
                                  }),
                            }),
                            !ac &&
                              (0, i.jsxs)(i.Fragment, {
                                children: [
                                  (0, i.jsxs)("p", {
                                    className:
                                      "pt-8 font-extralight text-neutral",
                                    children: [
                                      (0, i.jsxs)("span", {
                                        className: "text-light",
                                        children: [G("stake.wAmount"), " "],
                                      }),
                                      D && D.toFixed(8) + " SONNE",
                                    ],
                                  }),
                                  (0, i.jsxs)("p", {
                                    className:
                                      "pt-2 font-extralight text-neutral",
                                    children: [
                                      (0, i.jsx)("span", {
                                        className: "text-light",
                                        children: G("stake.wTime"),
                                      }),
                                      " ",
                                      F > 0 && D && +D.toString() > 0
                                        ? new Date(1e3 * F).toUTCString()
                                        : "N/A",
                                    ],
                                  }),
                                ],
                              }),
                            (0, i.jsx)("p", {
                              className: "pt-4 font-thin text-neutral",
                              children: ac
                                ? ""
                                : "*".concat(G("stake.unstakeAsterisk")),
                            }),
                          ],
                        })
                      : (0, i.jsxs)("div", {
                          className:
                            "flex flex-col justify-between h-full py-16",
                          children: [
                            (0, i.jsx)("p", {
                              className: "font-thin text-neutral pb-12",
                              children: G("stake.connect"),
                            }),
                            (0, i.jsx)(z.Z, {
                              buttonClasses: "w-full",
                              buttonColor: "light",
                            }),
                          ],
                        }),
                  }),
                }),
              ],
            }),
            (0, i.jsx)(B.x7, {}),
          ],
        });
      }
    },
    81811: function (a, b, c) {
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
    50776: function (a, b, c) {
      c.d(b, {
        OK: function () {
          return C;
        },
        td: function () {
          return y;
        },
        x4: function () {
          return G;
        },
        mQ: function () {
          return v;
        },
      });
      var d,
        e = c(67294);
      function f(a) {
        return function (b) {
          return !!b.type && b.type.tabsRole === a;
        };
      }
      var g = f("Tab"),
        h = f("TabList"),
        i = f("TabPanel");
      function j(a, b) {
        return e.Children.map(a, function (a) {
          var c;
          return null === a
            ? null
            : g((c = a)) || h(c) || i(c)
            ? b(a)
            : a.props && a.props.children && "object" == typeof a.props.children
            ? (0, e.cloneElement)(
                a,
                Object.assign({}, a.props, { children: j(a.props.children, b) })
              )
            : a;
        });
      }
      function k(a, b) {
        return e.Children.forEach(a, function (a) {
          null !== a &&
            (g(a) || i(a)
              ? b(a)
              : a.props &&
                a.props.children &&
                "object" == typeof a.props.children &&
                (h(a) && b(a), k(a.props.children, b)));
        });
      }
      var l = c(86010);
      function m(a) {
        var b = 0;
        return (
          k(a, function (a) {
            g(a) && b++;
          }),
          b
        );
      }
      var n = [
        "children",
        "className",
        "disabledTabClassName",
        "domRef",
        "focus",
        "forceRenderTabPanel",
        "onSelect",
        "selectedIndex",
        "selectedTabClassName",
        "selectedTabPanelClassName",
        "environment",
        "disableUpDownKeys",
      ];
      function o(a) {
        return a && "getAttribute" in a;
      }
      function p(a) {
        return o(a) && a.getAttribute("data-rttab");
      }
      function q(a) {
        return o(a) && "true" === a.getAttribute("aria-disabled");
      }
      var r = function (a) {
        var b = (0, e.useRef)([]),
          c = (0, e.useRef)([]),
          f = (0, e.useRef)();
        function k(b, c) {
          if (!(b < 0 || b >= s())) {
            var d = a.onSelect,
              e = a.selectedIndex;
            d(b, e, c);
          }
        }
        function o(a) {
          for (var b = s(), c = a + 1; c < b; c++) if (!q(t(c))) return c;
          for (var d = 0; d < a; d++) if (!q(t(d))) return d;
          return a;
        }
        function r(a) {
          for (var b = a; b--; ) if (!q(t(b))) return b;
          for (b = s(); b-- > a; ) if (!q(t(b))) return b;
          return a;
        }
        function s() {
          return m(a.children);
        }
        function t(a) {
          return b.current["tabs-" + a];
        }
        function u(a) {
          var b = a.target;
          do
            if (v(b)) {
              if (q(b)) return;
              var c = [].slice.call(b.parentNode.children).filter(p).indexOf(b);
              k(c, a);
              return;
            }
          while (null != (b = b.parentNode));
        }
        function v(a) {
          if (!p(a)) return !1;
          var b = a.parentElement;
          do {
            if (b === f.current) return !0;
            if (b.getAttribute("data-rttabs")) break;
            b = b.parentElement;
          } while (b);
          return !1;
        }
        a.children;
        var w = a.className,
          x = (a.disabledTabClassName, a.domRef),
          y =
            (a.focus,
            a.forceRenderTabPanel,
            a.onSelect,
            a.selectedIndex,
            a.selectedTabClassName,
            a.selectedTabPanelClassName,
            a.environment,
            a.disableUpDownKeys,
            (function (a, b) {
              if (null == a) return {};
              var c,
                d,
                e = {},
                f = Object.keys(a);
              for (d = 0; d < f.length; d++)
                (c = f[d]), b.indexOf(c) >= 0 || (e[c] = a[c]);
              return e;
            })(a, n));
        return e.createElement(
          "div",
          Object.assign({}, y, {
            className: (0, l.Z)(w),
            onClick: u,
            onKeyDown: function (b) {
              var c = a.direction,
                d = a.disableUpDownKeys;
              if (v(b.target)) {
                var e = a.selectedIndex,
                  f = !1,
                  g = !1;
                ("Space" === b.code ||
                  32 === b.keyCode ||
                  "Enter" === b.code ||
                  13 === b.keyCode) &&
                  ((f = !0), (g = !1), u(b)),
                  "ArrowLeft" !== b.code &&
                  37 !== b.keyCode &&
                  (d || (38 !== b.keyCode && "ArrowUp" !== b.code))
                    ? "ArrowRight" !== b.code &&
                      39 !== b.keyCode &&
                      (d || (40 !== b.keyCode && "ArrowDown" !== b.code))
                      ? 35 === b.keyCode || "End" === b.code
                        ? ((e = (function () {
                            for (var a = s(); a--; ) if (!q(t(a))) return a;
                            return null;
                          })()),
                          (f = !0),
                          (g = !0))
                        : (36 === b.keyCode || "Home" === b.code) &&
                          ((e = (function () {
                            for (var a = s(), b = 0; b < a; b++)
                              if (!q(t(b))) return b;
                            return null;
                          })()),
                          (f = !0),
                          (g = !0))
                      : ((e = "rtl" === c ? r(e) : o(e)), (f = !0), (g = !0))
                    : ((e = "rtl" === c ? o(e) : r(e)), (f = !0), (g = !0)),
                  f && b.preventDefault(),
                  g && k(e, b);
              }
            },
            ref: function (a) {
              (f.current = a), x && x(a);
            },
            "data-rttabs": !0,
          }),
          (function () {
            var f = 0,
              k = a.children,
              l = a.disabledTabClassName,
              m = a.focus,
              n = a.forceRenderTabPanel,
              o = a.selectedIndex,
              p = a.selectedTabClassName,
              q = a.selectedTabPanelClassName,
              r = a.environment;
            c.current = c.current || [];
            for (var u = c.current.length - s(), v = (0, e.useId)(); u++ < 0; )
              c.current.push("" + v + c.current.length);
            return j(k, function (a) {
              var k = a;
              if (h(a)) {
                var s = 0,
                  u = !1;
                null == d &&
                  (function (a) {
                    var b =
                      a || ("undefined" != typeof window ? window : void 0);
                    try {
                      d = !!(
                        void 0 !== b &&
                        b.document &&
                        b.document.activeElement
                      );
                    } catch (c) {
                      d = !1;
                    }
                  })(r);
                var v = r || ("undefined" != typeof window ? window : void 0);
                d &&
                  v &&
                  (u = e.Children.toArray(a.props.children)
                    .filter(g)
                    .some(function (a, b) {
                      return v.document.activeElement === t(b);
                    })),
                  (k = (0, e.cloneElement)(a, {
                    children: j(a.props.children, function (a) {
                      var d = "tabs-" + s,
                        f = o === s,
                        g = {
                          tabRef: function (a) {
                            b.current[d] = a;
                          },
                          id: c.current[s],
                          selected: f,
                          focus: f && (m || u),
                        };
                      return (
                        p && (g.selectedClassName = p),
                        l && (g.disabledClassName = l),
                        s++,
                        (0, e.cloneElement)(a, g)
                      );
                    }),
                  }));
              } else if (i(a)) {
                var w = { id: c.current[f], selected: o === f };
                n && (w.forceRender = n),
                  q && (w.selectedClassName = q),
                  f++,
                  (k = (0, e.cloneElement)(a, w));
              }
              return k;
            });
          })()
        );
      };
      (r.defaultProps = { className: "react-tabs", focus: !1 }),
        (r.propTypes = {});
      var s = r,
        t = function (a, b) {},
        u = function (a) {
          var b,
            c = a.children,
            d = a.defaultFocus,
            f = a.defaultIndex,
            g = a.focusTabOnClick,
            h = a.onSelect,
            i = (0, e.useState)(d),
            j = i[0],
            k = i[1],
            l = (0, e.useState)(null === (b = a).selectedIndex ? 1 : 0),
            n = l[0],
            o = (0, e.useState)(1 === n ? f || 0 : null),
            p = o[0],
            q = o[1];
          if (
            ((0, e.useEffect)(function () {
              k(!1);
            }, []),
            1 === n)
          ) {
            var r = m(c);
            (0, e.useEffect)(
              function () {
                if (null != p) {
                  var a = Math.max(0, r - 1);
                  q(Math.min(p, a));
                }
              },
              [r]
            );
          }
          t(a, n);
          var u = function (a, b, c) {
              ("function" != typeof h || !1 !== h(a, b, c)) &&
                (g && k(!0), 1 === n && q(a));
            },
            v = Object.assign({}, a);
          return (
            (v.focus = j),
            (v.onSelect = u),
            null != p && (v.selectedIndex = p),
            delete v.defaultFocus,
            delete v.defaultIndex,
            delete v.focusTabOnClick,
            e.createElement(s, v, c)
          );
        };
      (u.propTypes = {}),
        (u.defaultProps = {
          defaultFocus: !1,
          focusTabOnClick: !0,
          forceRenderTabPanel: !1,
          selectedIndex: null,
          defaultIndex: null,
          environment: null,
          disableUpDownKeys: !1,
        }),
        (u.tabsRole = "Tabs");
      var v = u,
        w = ["children", "className"],
        x = function (a) {
          var b = a.children,
            c = a.className,
            d = (function (a, b) {
              if (null == a) return {};
              var c,
                d,
                e = {},
                f = Object.keys(a);
              for (d = 0; d < f.length; d++)
                (c = f[d]), b.indexOf(c) >= 0 || (e[c] = a[c]);
              return e;
            })(a, w);
          return e.createElement(
            "ul",
            Object.assign({}, d, { className: (0, l.Z)(c), role: "tablist" }),
            b
          );
        };
      (x.tabsRole = "TabList"),
        (x.propTypes = {}),
        (x.defaultProps = { className: "react-tabs__tab-list" });
      var y = x,
        z = [
          "children",
          "className",
          "disabled",
          "disabledClassName",
          "focus",
          "id",
          "selected",
          "selectedClassName",
          "tabIndex",
          "tabRef",
        ],
        A = "react-tabs__tab",
        B = function (a) {
          var b,
            c = (0, e.useRef)(),
            d = a.children,
            f = a.className,
            g = a.disabled,
            h = a.disabledClassName,
            i = a.focus,
            j = a.id,
            k = a.selected,
            m = a.selectedClassName,
            n = a.tabIndex,
            o = a.tabRef,
            p = (function (a, b) {
              if (null == a) return {};
              var c,
                d,
                e = {},
                f = Object.keys(a);
              for (d = 0; d < f.length; d++)
                (c = f[d]), b.indexOf(c) >= 0 || (e[c] = a[c]);
              return e;
            })(a, z);
          return (
            (0, e.useEffect)(
              function () {
                k && i && c.current.focus();
              },
              [k, i]
            ),
            e.createElement(
              "li",
              Object.assign({}, p, {
                className: (0, l.Z)(f, (((b = {})[m] = k), (b[h] = g), b)),
                ref: function (a) {
                  (c.current = a), o && o(a);
                },
                role: "tab",
                id: "tab" + j,
                "aria-selected": k ? "true" : "false",
                "aria-disabled": g ? "true" : "false",
                "aria-controls": "panel" + j,
                tabIndex: n || (k ? "0" : null),
                "data-rttab": !0,
              }),
              d
            )
          );
        };
      (B.propTypes = {}),
        (B.tabsRole = "Tab"),
        (B.defaultProps = {
          className: A,
          disabledClassName: A + "--disabled",
          focus: !1,
          id: null,
          selected: !1,
          selectedClassName: A + "--selected",
        });
      var C = B,
        D = [
          "children",
          "className",
          "forceRender",
          "id",
          "selected",
          "selectedClassName",
        ],
        E = "react-tabs__tab-panel",
        F = function (a) {
          var b,
            c = a.children,
            d = a.className,
            f = a.forceRender,
            g = a.id,
            h = a.selected,
            i = a.selectedClassName,
            j = (function (a, b) {
              if (null == a) return {};
              var c,
                d,
                e = {},
                f = Object.keys(a);
              for (d = 0; d < f.length; d++)
                (c = f[d]), b.indexOf(c) >= 0 || (e[c] = a[c]);
              return e;
            })(a, D);
          return e.createElement(
            "div",
            Object.assign({}, j, {
              className: (0, l.Z)(d, (((b = {})[i] = h), b)),
              role: "tabpanel",
              id: "panel" + g,
              "aria-labelledby": "tab" + g,
            }),
            f || h ? c : null
          );
        };
      (F.tabsRole = "TabPanel"),
        (F.propTypes = {}),
        (F.defaultProps = {
          className: E,
          forceRender: !1,
          selectedClassName: E + "--selected",
        });
      var G = F;
    },
  },
]);
