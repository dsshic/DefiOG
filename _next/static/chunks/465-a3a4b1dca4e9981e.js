"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [465],
  {
    5908: function (a, b, c) {
      var d = c(47568),
        e = c(34051),
        f = c.n(e),
        g = c(85893),
        h = c(24304),
        i = c(55107),
        j = c(190),
        k = c(44402),
        l = c(80499),
        m = c(52874),
        n = c(67294),
        o = c(86501),
        p = c(49151),
        q = c(15084),
        r = c(77058),
        s = function (a) {
          var b = a.selectedMarket,
            c = a.isOpen,
            d = a.setIsOpen,
            e = (0, r.$)().t,
            f = (0, n.useState)([
              {
                title: e("common.borrow"),
                index: 1,
                component: (0, g.jsx)(t, { selectedMarket: b }),
                themeColor: "light",
              },
              {
                title: e("common.repay"),
                index: 2,
                component: (0, g.jsx)(u, { selectedMarket: b }),
                themeColor: "middle",
              },
            ]),
            h = f[0];
          return (
            f[1],
            (0, g.jsx)(q.Z, {
              tabs: h,
              selectedMarket: b,
              isOpen: c,
              setIsOpen: d,
            })
          );
        },
        t = function (a) {
          var b = a.selectedMarket,
            c = (0, r.$)().t,
            e = (0, i.b)().address,
            h = (0, k.A)().handleBorrow,
            j = (0, l.V)(),
            q = j.getBorrowStats,
            s = j.getBorrowLimit,
            t = j.getRemainingBorrowLimitInUnderlying,
            u = j.getNewBorrowLimitUsedPct,
            v = j.getAmountInUsd,
            w = (0, n.useState)(!1),
            x = w[0],
            y = w[1],
            z = (0, n.useState)(""),
            A = z[0],
            B = z[1],
            C = (0, n.useState)(!1),
            D = C[0],
            E = C[1],
            F = (0, n.useState)(),
            G = F[0],
            H = F[1],
            I = (0, n.useState)(0),
            J = I[0],
            K = I[1],
            L = (0, n.useState)(!0),
            M = L[0],
            N = L[1],
            O = (0, n.useState)(""),
            P = O[0],
            Q = O[1],
            R = t(b);
          (0, n.useEffect)(
            function () {
              N(!!e), e || Q(c("error.connect"));
            },
            [e]
          ),
            (0, n.useEffect)(
              function () {
                if (M && "" !== A) {
                  if (0 >= +A) {
                    E(!1), K(0), Q(c("error.lt0"));
                    return;
                  }
                  if (isNaN(+A)) {
                    Q(c("error.invalidNm")), E(!1), K(0);
                    return;
                  }
                  if (
                    A.includes(".") &&
                    A.split(".")[1].length > b.underlying.decimals
                  ) {
                    Q(c("error.exceedDecimal")), E(!1), K(0);
                    return;
                  }
                  if (+A > R) {
                    E(!1), Q(c("error.exceedBLimit"));
                    return;
                  }
                  var a = u(b, +A, !0);
                  if (
                    (K(+((+A / R) * 100).toFixed(0)),
                    H(a.toString()),
                    +A > +b.cash.toString())
                  ) {
                    E(!1), Q(c("error.exceedCash"));
                    return;
                  }
                  if ((E(!0), a > 90)) {
                    Q(c("error.borrowLimitWarning"));
                    return;
                  }
                  Q("");
                }
              },
              [A]
            );
          var S,
            T = function (a) {
              B(a);
            },
            U = function () {
              var a = R;
              if (R.toString().includes(".")) {
                var c = R.toString().split(".")[0],
                  d = R.toString().split(".")[1].length;
                d > b.underlying.decimals &&
                  (a = +(
                    c +
                    "." +
                    R.toString().split(".")[1].slice(0, b.underlying.decimals)
                  ));
              }
              T(a.toString());
            },
            V = function (a, c) {
              K(c);
              var d = ((R * +c) / 100).toString();
              if (d.includes(".")) {
                var e = d.split(".")[0],
                  f = d.split(".")[1].length;
                f > b.underlying.decimals &&
                  (d =
                    e + "." + d.split(".")[1].slice(0, b.underlying.decimals));
              }
              T(d.toString());
            },
            W = function () {},
            X =
              ((S = (0, d.Z)(
                f().mark(function a() {
                  var d;
                  return f().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return y(!0), (a.next = 3), h(b, A);
                        case 3:
                          (d = a.sent), y(!1), (0, m.JQ)(d, c("common.borrow"));
                        case 6:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )),
              function () {
                return S.apply(this, arguments);
              });
          return (0, g.jsxs)(g.Fragment, {
            children: [
              (0, g.jsx)(p.Z, {
                title: c("dialog.borrowAmount"),
                subtitle: c("dialog.borrowLimit"),
                balance: R.toFixed(6),
                themeColor: "light",
                approveButton: !1,
                approveButtonEnabled: !1,
                infos: [q(b), s(b, G)],
                selectedMarket: b,
                otherButtonName: c("common.borrow"),
                otherButtonEnabled: D,
                otherButtonLoading: x,
                approveLoading: !1,
                handleOnClickApprove: W,
                handleOnClickOtherButton: X,
                handleOnChangeAmount: T,
                amount: A,
                amountInUsd: v(b, A),
                handleOnClickMax: U,
                handleSliderChange: V,
                sliderPct: J,
                sliderEnabled: R > 0,
                error: P,
                inputEnabled: M,
              }),
              (0, g.jsx)(o.x7, {}),
            ],
          });
        },
        u = function (a) {
          var b = a.selectedMarket,
            c = (0, r.$)().t,
            e = (0, i.b)().address,
            q = (0, j.y)().allowance,
            s = (0, k.A)(),
            t = s.handleRepay,
            u = s.handleEnable,
            v = (0, l.V)(),
            w = v.getBorrowStats,
            x = v.getBorrowLimit,
            y = v.getNewBorrowLimitUsedPct,
            z = v.getAmountInUsd,
            A = (0, n.useState)(!1),
            B = A[0],
            C = A[1],
            D = (0, n.useState)(!1),
            E = D[0],
            F = D[1],
            G = (0, n.useState)(!1),
            H = G[0],
            I = G[1],
            J = (0, n.useState)(""),
            K = J[0],
            L = J[1],
            M = (0, n.useState)(""),
            N = M[0],
            O = M[1],
            P = (0, n.useState)(!1),
            Q = P[0],
            R = P[1],
            S = (0, n.useState)(!1),
            T = S[0],
            U = S[1],
            V = (0, n.useState)(),
            W = V[0],
            X = V[1],
            Y = (0, n.useState)(0),
            Z = Y[0],
            $ = Y[1],
            _ = (0, n.useState)(!0),
            aa = _[0],
            ab = _[1],
            ac = (0, n.useState)(""),
            ad = ac[0],
            ae = ac[1];
          (0, n.useEffect)(
            function () {
              "" === K || 0 == +K ? F(0 === q) : F(+K > q), ae("");
            },
            [q]
          ),
            (0, n.useEffect)(
              function () {
                ab(!!e), e || (ae(c("error.connect")), F(!1));
              },
              [e]
            ),
            (0, n.useEffect)(
              function () {
                if (aa && "" !== K) {
                  var a = K;
                  if (0 >= +a) {
                    U(!1), $(0), ae(c("error.lt0"));
                    return;
                  }
                  if (isNaN(+a)) {
                    ae(c("error.invalidNm")), U(!1), $(0);
                    return;
                  }
                  if (
                    a.includes(".") &&
                    a.split(".")[1].length > b.underlying.decimals
                  ) {
                    ae(c("error.exceedDecimal")), U(!1), $(0);
                    return;
                  }
                  if (
                    (b.borrowBalanceInTokenUnit.toString() !== a && R(!1),
                    +a > +b.borrowBalanceInTokenUnit.toString())
                  ) {
                    U(!1), ae(c("error.exceedBBalance"));
                    return;
                  }
                  var d = y(b, +a, !1);
                  if (
                    ($(
                      +(
                        (+a / +b.borrowBalanceInTokenUnit.toString()) *
                        100
                      ).toFixed(0)
                    ),
                    X(d.toString()),
                    +a > +b.underlying.walletBalance.toString())
                  ) {
                    U(!1), ae(c("error.exceedWBalance"));
                    return;
                  }
                  if (+a > q) {
                    F(!0), U(!1), ae(c("error.exceedAllowance"));
                    return;
                  }
                  if ((F(!1), U(!0), O(a), d > 90)) {
                    ae(c("error.borrowLimitWarning"));
                    return;
                  }
                  ae("");
                }
              },
              [K, q]
            );
          var af,
            ag,
            ah = function (a, b) {
              b && R(b), L(a);
            },
            ai = function () {
              var a = b.borrowBalanceInTokenUnit.toString(),
                c = a,
                d = !0;
              if (a.includes(".")) {
                var e = a.split(".")[0],
                  f = a.split(".")[1].length;
                f > b.underlying.decimals &&
                  (c =
                    e + "." + a.split(".")[1].slice(0, b.underlying.decimals));
              }
              +c > +b.underlying.walletBalance.toString() &&
                ((c = b.underlying.walletBalance.toString()), (d = !1)),
                ah(c, d);
            },
            aj = function (a, c) {
              var d = (
                (+b.borrowBalanceInTokenUnit.toString() * +c) /
                100
              ).toFixed(b.underlying.decimals);
              !(d > b.underlying.walletBalance.toString()) &&
                ah(d.toString(), 100 === c);
            },
            ak =
              ((af = (0, d.Z)(
                f().mark(function a() {
                  var d;
                  return f().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return C(!0), (a.next = 3), u(b);
                        case 3:
                          (d = a.sent),
                            C(!1),
                            (0, m.JQ)(d, c("common.approve"));
                        case 6:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )),
              function () {
                return af.apply(this, arguments);
              }),
            al =
              ((ag = (0, d.Z)(
                f().mark(function a() {
                  var d;
                  return f().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return I(!0), (a.next = 3), t(b, N, Q);
                        case 3:
                          (d = a.sent), I(!1), (0, m.JQ)(d, c("common.repay"));
                        case 6:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )),
              function () {
                return ag.apply(this, arguments);
              });
          return (0, g.jsxs)(g.Fragment, {
            children: [
              (0, g.jsx)(p.Z, {
                title: c("dialog.repayAmount"),
                subtitle: c("dialog.borrowBalance"),
                balance: b.borrowBalanceInTokenUnit.toRound(6),
                themeColor: "middle",
                approveButton: !0,
                approveLoading: B,
                approveButtonEnabled: E,
                infos: [w(b), x(b, W)],
                selectedMarket: b,
                otherButtonName: c("common.repay"),
                otherButtonEnabled: T,
                handleOnClickApprove: ak,
                handleOnClickOtherButton: al,
                amount: K,
                amountInUsd: z(b, K),
                handleOnChangeAmount: ah,
                handleOnClickMax: ai,
                otherButtonLoading: H,
                handleSliderChange: aj,
                sliderPct: Z,
                sliderEnabled: b.borrowBalanceInTokenUnit.gt(h.O.from(0)),
                error: ad,
                inputEnabled: aa,
              }),
              (0, g.jsx)(o.x7, {}),
            ],
          });
        };
      b.Z = s;
    },
    49151: function (a, b, c) {
      c.d(b, {
        Z: function () {
          return o;
        },
      });
      var d = c(85893),
        e = c(72684),
        f = c(86010),
        g = c(67294);
      function h(a) {
        var b,
          c,
          h,
          i = a.marketData,
          j = a.enabled,
          k = a.title,
          l = a.subtitle,
          m = a.themeColor,
          n = a.onClickMax,
          o = a.balance,
          p = a.amount,
          q = a.onChangeAmount,
          r = a.amountInUsd,
          s = (0, g.useState)(p),
          t = s[0],
          u = s[1],
          v = function (a) {
            u(a.target.value), q(a.target.value);
          };
        return (
          (0, g.useEffect)(
            function () {
              u(p);
            },
            [p]
          ),
          (0, d.jsxs)("div", {
            children: [
              (0, d.jsxs)("div", {
                className: "flex justify-between",
                children: [
                  (0, d.jsx)("span", { className: "font-thin", children: k }),
                  (0, d.jsxs)("span", {
                    className: "font-extralight",
                    children: [
                      l,
                      (0, d.jsxs)("span", {
                        className: (0, f.Z)(
                          null === (b = (0, e.l)(m)) || void 0 === b
                            ? void 0
                            : b.text,
                          "pl-4"
                        ),
                        children: [
                          (0, d.jsx)("span", {
                            className: "pr-1",
                            children: o,
                          }),
                          null == i
                            ? void 0
                            : null === (c = i.underlying) || void 0 === c
                            ? void 0
                            : c.symbol,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, d.jsxs)("div", {
                className: "bg-background flex justify-between p-2 my-6",
                children: [
                  (0, d.jsx)("input", {
                    className:
                      "bg-transparent p-2 pl-3 focus:outline-none placeholder:text-2xl placeholder:text-neutral w-full placeholder:opacity-60 placeholder:translate-y-1 text-neutral",
                    type: "text",
                    placeholder: j ? "0.00" : "",
                    value: t,
                    onChange: function (a) {
                      return v(a);
                    },
                    disabled: !j,
                  }),
                  (0, d.jsxs)("div", {
                    className:
                      "flex flex-col text-xs font-extralight justify-center px-2 items-end",
                    children: [
                      (0, d.jsx)("span", {
                        className: "",
                        children:
                          null == i
                            ? void 0
                            : null === (h = i.underlying) || void 0 === h
                            ? void 0
                            : h.symbol,
                      }),
                      r &&
                        (0, d.jsxs)("span", {
                          className: "",
                          children: ["~$", r],
                        }),
                    ],
                  }),
                  j &&
                    n &&
                    (0, d.jsx)("button", { onClick: n, children: "Max" }),
                ],
              }),
            ],
          })
        );
      }
      var i = c(14924),
        j = c(74575);
      function k(a) {
        var b,
          c,
          e = a.handleSliderChange,
          f = a.pctValue,
          g = a.enabled,
          h = a.theme,
          k = a.showMarks,
          l = "#140603",
          m = "middle" === h ? "#FD684E" : "#FDA669";
        return (0, d.jsx)(d.Fragment, {
          children: k
            ? (0, d.jsx)("div", {
                className: "mb-6 mt-3 mx-1",
                children: (0, d.jsx)(j.ZP, {
                  value: "number" == typeof f ? f : 0,
                  onChange: e,
                  "aria-labelledby": "input-slider",
                  valueLabelDisplay: "auto",
                  marks: [
                    { value: 0, label: "0%" },
                    { value: 25, label: "25%" },
                    { value: 50, label: "50%" },
                    { value: 75, label: "75%" },
                    { value: 100, label: "100%" },
                  ],
                  disabled: !g,
                  sx: {
                    color: l,
                    opacity: "1",
                    "& .MuiSlider-thumb":
                      ((b = { color: m }),
                      (0, i.Z)(b, "&:hover, &.Mui-focusVisible", {
                        boxShadow: "none",
                      }),
                      (0, i.Z)(b, "&.Mui-active", { boxShadow: "none" }),
                      (0, i.Z)(b, "backgroundColor", l),
                      (0, i.Z)(b, "borderWidth", "2px"),
                      (0, i.Z)(b, "borderColor", m),
                      (0, i.Z)(b, "width", "14px"),
                      (0, i.Z)(b, "height", "14px"),
                      b),
                    "& .MuiSlider-mark": {
                      color: l,
                      borderWidth: "2px",
                      backgroundColor: l,
                      borderColor: m,
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                    },
                    "& .MuiSlider-markLabel": {
                      color: "rgb(254 241 236)",
                      fontFamily: "Lexend",
                      fontWeight: 100,
                    },
                    "& .MuiSlider-rail": { color: l },
                    "& .MuiSlider-markActive": { color: m, backgroundColor: m },
                    "& .MuiSlider-track": { color: m },
                    "& .MuiSlider-valueLabel": {
                      lineHeight: 1.2,
                      fontSize: 12,
                      background: "unset",
                      padding: 0,
                      width: 32,
                      height: 20,
                      borderRadius: "5px",
                      backgroundColor: l,
                      opacity: 0.7,
                      color: m,
                    },
                  },
                }),
              })
            : (0, d.jsx)("div", {
                className: "mb-6 mt-3 mx-1",
                children: (0, d.jsx)(j.ZP, {
                  value: "number" == typeof f ? f : 0,
                  onChange: e,
                  "aria-labelledby": "input-slider",
                  valueLabelDisplay: "auto",
                  disabled: !g,
                  sx: {
                    color: l,
                    opacity: "1",
                    "& .MuiSlider-thumb":
                      ((c = { color: m }),
                      (0, i.Z)(c, "&:hover, &.Mui-focusVisible", {
                        boxShadow: "none",
                      }),
                      (0, i.Z)(c, "&.Mui-active", { boxShadow: "none" }),
                      (0, i.Z)(c, "backgroundColor", l),
                      (0, i.Z)(c, "borderWidth", "2px"),
                      (0, i.Z)(c, "borderColor", m),
                      (0, i.Z)(c, "width", "14px"),
                      (0, i.Z)(c, "height", "14px"),
                      c),
                    "& .MuiSlider-rail": { color: l },
                    "& .MuiSlider-track": { color: m },
                    "& .MuiSlider-valueLabel": {
                      lineHeight: 1.2,
                      fontSize: 12,
                      background: "unset",
                      padding: 0,
                      width: 32,
                      height: 20,
                      borderRadius: "5px",
                      backgroundColor: l,
                      opacity: 0.7,
                      color: m,
                    },
                  },
                }),
              }),
        });
      }
      var l = c(20125),
        m = function (a) {
          var b = a.title,
            c = a.infos,
            e = a.noMarginTop;
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)("div", {
                className: "py-2 mt-2.5 mb-2.5 text-dialog-stat-header",
                children: b,
              }),
              c.map(function (a, b) {
                return (0,
                d.jsxs)("div", { className: (0, f.Z)("flex justify-between items-center text-dialog-stat-item", e ? "" : "mt-1.5"), children: [(0, d.jsx)(d.Fragment, { children: a.title }), (0, d.jsx)(d.Fragment, { children: a.value })] }, b);
              }),
            ],
          });
        },
        n = c(77058),
        o = function (a) {
          var b = a.themeColor,
            c = a.selectedMarket,
            e = a.title,
            g = a.subtitle,
            i = a.balance,
            j = a.approveButton,
            o = a.approveButtonEnabled,
            p = a.approveLoading,
            q = a.infos,
            r = a.otherButtonName,
            s = a.otherButtonEnabled,
            t = a.otherButtonLoading,
            u = a.handleOnClickApprove,
            v = a.handleOnClickOtherButton,
            w = a.amount,
            x = a.amountInUsd,
            y = a.inputEnabled,
            z = a.handleOnChangeAmount,
            A = a.handleOnClickMax,
            B = a.handleSliderChange,
            C = a.sliderPct,
            D = a.sliderEnabled,
            E = a.error,
            F = (0, n.$)().t;
          return (0, d.jsxs)("div", {
            className: "w-full p-6",
            children: [
              (0, d.jsx)(h, {
                marketData: c,
                enabled: y,
                title: e,
                subtitle: g,
                themeColor: b,
                balance: i,
                onClickMax: A,
                onChangeAmount: function (a) {
                  return z(a);
                },
                amount: w,
                amountInUsd: x,
              }),
              (0, d.jsx)("div", {
                className: "flex justify-between",
                children: (0, d.jsx)("span", {
                  className: (0, f.Z)(
                    "text-[13px]  font-extralight self-end text-error"
                  ),
                  children: E,
                }),
              }),
              (0, d.jsx)(k, {
                pctValue: C,
                handleSliderChange: B,
                theme: b,
                enabled: D,
                showMarks: !0,
              }),
              q &&
                q.map(function (a, b) {
                  return (0, d.jsx)(m, { title: a.title, infos: a.infos }, b);
                }),
              (null == c ? void 0 : c.isNativeToken)
                ? (0, d.jsx)("div", {
                    className: "pt-8",
                    children: (0, d.jsx)(l.Z, {
                      color: b,
                      text: r,
                      wFull: !0,
                      onClick: v,
                      loading: t,
                      enabled: s,
                      classes: "mt-8",
                    }),
                  })
                : j
                ? (0, d.jsxs)("div", {
                    className: "flex justify-between sm:gap-12 gap-4 pt-8",
                    children: [
                      (0, d.jsx)(l.Z, {
                        color: b,
                        text: F("common.approve"),
                        number: "1",
                        wFull: !0,
                        onClick: u,
                        loading: p,
                        enabled: o,
                        approveButton: !0,
                      }),
                      (0, d.jsx)(l.Z, {
                        color: b,
                        text: r,
                        number: "2",
                        wFull: !0,
                        onClick: v,
                        loading: t,
                        enabled: s,
                      }),
                    ],
                  })
                : (0, d.jsx)("div", {
                    className: "pt-8",
                    children: (0, d.jsx)(l.Z, {
                      color: b,
                      text: r,
                      wFull: !0,
                      onClick: v,
                      loading: t,
                      enabled: s,
                    }),
                  }),
            ],
          });
        };
    },
    15084: function (a, b, c) {
      c.d(b, {
        Z: function () {
          return m;
        },
      });
      var d = c(85893),
        e = c(11355),
        f = c(85479),
        g = c(67294),
        h = c(86010),
        i = c(72684);
      function j(a) {
        var b,
          c,
          e = a.color,
          f = a.marketData;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)("div", {
              className: "w-full flex justify-center",
              children: (
                null == f
                  ? void 0
                  : null === (b = f.underlying) || void 0 === b
                  ? void 0
                  : b.logo
              )
                ? (0, d.jsx)("div", {
                    className: "rounded-full w-11 h-11 -translate-y-[22px]",
                    children: (0, d.jsx)("img", {
                      src: f.underlying.logo,
                      width: 44,
                      height: 44,
                      alt: "logo",
                    }),
                  })
                : (0, d.jsx)("div", {
                    className: "rounded-full w-11 h-11 -translate-y-[22px]",
                  }),
            }),
            (0, d.jsx)("div", {
              className: "w-full flex justify-center",
              children: (0, d.jsx)("div", {
                className: (0, h.Z)(
                  "rounded-md px-2 inline -translate-y-[26px] z-10 text-background",
                  null === (c = (0, i.l)(e)) || void 0 === c ? void 0 : c.bg
                ),
                children: f.underlying.symbol,
              }),
            }),
          ],
        });
      }
      var k = c(50776),
        l = c(88705),
        m = function (a) {
          var b = a.tabs,
            c = a.selectedMarket,
            m = a.isOpen,
            n = a.setIsOpen,
            o = (0, g.useState)(b[0]),
            p = o[0],
            q = o[1],
            r = (0, l.M)(),
            s = r.txApproved,
            t = r.setTxApproved;
          if (
            (r.expertMode,
            (0, g.useEffect)(
              function () {
                s && (n(!1), t(!1));
              },
              [s]
            ),
            !m)
          )
            return null;
          var u = function () {
            n(!1);
          };
          return (0, d.jsx)(e.u, {
            as: g.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            show: m,
            children: (0, d.jsxs)(f.V, {
              className: "relative z-50",
              onClose: u,
              children: [
                (0, d.jsx)(e.u.Child, {
                  as: g.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, d.jsx)("div", {
                    className: "fixed inset-0 bg-black/50 backdrop-blur-sm",
                  }),
                }),
                (0, d.jsx)("div", {
                  className: "fixed inset-0 overflow-y-auto",
                  children: (0, d.jsx)("div", {
                    className:
                      "flex min-h-full items-center justify-center p-4 mt-4",
                    children: (0, d.jsxs)(f.V.Panel, {
                      className: (0, h.Z)(
                        "sm:w-[440px] rounded-2xl bg-supplyBase text-neutral mx-auto",
                        "sm:mt-0 mt-12"
                      ),
                      children: [
                        (0, d.jsx)(j, { marketData: c, color: p.themeColor }),
                        (0, d.jsxs)(k.mQ, {
                          className: "w-full",
                          children: [
                            (0, d.jsx)(k.td, {
                              className: "flex list-none flex-wrap flex-row",
                              children: b.map(function (a, b) {
                                var c, e;
                                return (0, d.jsx)(
                                  k.OK,
                                  {
                                    className:
                                      "flex-auto text-center focus-visible:outline-none",
                                    children: (0, d.jsx)("a", {
                                      className: (0, h.Z)(
                                        "w-full pb-4 text-xl leading-5 block focus:outline-none outline-none focus-visible:outline-none",
                                        p === a
                                          ? (0, h.Z)(
                                              null ===
                                                (c = (0, i.l)(a.themeColor)) ||
                                                void 0 === c
                                                ? void 0
                                                : c.borderB,
                                              null ===
                                                (e = (0, i.l)(a.themeColor)) ||
                                                void 0 === e
                                                ? void 0
                                                : e.text,
                                              "border-b-2 font-light"
                                            )
                                          : "font-thin text-neutral"
                                      ),
                                      onClick: function (b) {
                                        b.preventDefault(), q(a);
                                      },
                                      "data-toggle": "tab",
                                      href: "#link".concat(a.index),
                                      children: a.title,
                                    }),
                                  },
                                  b
                                );
                              }),
                            }),
                            (0, d.jsx)(k.x4, { children: b[0].component }),
                            (0, d.jsx)(k.x4, { children: b[1].component }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        };
    },
    89040: function (a, b, c) {
      var d = c(47568),
        e = c(34051),
        f = c.n(e),
        g = c(85893),
        h = c(24304),
        i = c(55107),
        j = c(88705),
        k = c(190),
        l = c(44402),
        m = c(80499),
        n = c(52874),
        o = c(67294),
        p = c(86501),
        q = c(49151),
        r = c(15084),
        s = c(77058),
        t = function (a) {
          var b = a.selectedMarket,
            c = a.isOpen,
            d = a.setIsOpen,
            e = (0, s.$)().t,
            f = (0, o.useState)([
              {
                title: e("common.supply"),
                index: 1,
                component: (0, g.jsx)(u, { selectedMarket: b }),
                themeColor: "light",
              },
              {
                title: e("common.withdraw"),
                index: 2,
                component: (0, g.jsx)(v, { selectedMarket: b }),
                themeColor: "middle",
              },
            ]),
            h = f[0];
          return (
            f[1],
            (0, g.jsx)(r.Z, {
              tabs: h,
              selectedMarket: b,
              isOpen: c,
              setIsOpen: d,
            })
          );
        },
        u = function (a) {
          var b = a.selectedMarket,
            c = (0, s.$)().t,
            e = (0, i.b)().address,
            r = (0, k.y)().allowance,
            t = (0, l.A)(),
            u = t.handleSupply,
            v = t.handleEnable,
            w = (0, j.M)().expertMode,
            x = (0, m.V)(),
            y = x.getSupplyStatsWithReward,
            z = x.getCollateralStats,
            A = x.getBorrowLimit,
            B = x.getAmountInUsd,
            C = x.getNewBorrowLimitUsedPctAfterSupply,
            D = x.getNewBorrowLimitAfterSupply,
            E = (0, o.useState)(!1),
            F = E[0],
            G = E[1],
            H = (0, o.useState)(!1),
            I = H[0],
            J = H[1],
            K = (0, o.useState)(0 === r),
            L = K[0],
            M = K[1],
            N = (0, o.useState)(!1),
            O = N[0],
            P = N[1],
            Q = (0, o.useState)(""),
            R = Q[0],
            S = Q[1],
            T = (0, o.useState)(!1),
            U = (T[0], T[1]),
            V = (0, o.useState)(!1),
            W = V[0],
            X = V[1],
            Y = (0, o.useState)(0),
            Z = Y[0],
            $ = Y[1],
            _ = (0, o.useState)(),
            aa = _[0],
            ab = _[1],
            ac = (0, o.useState)(""),
            ad = ac[0],
            ae = ac[1],
            af = +b.underlying.walletBalance.toString();
          console.log("maxAmount", af),
            (0, o.useEffect)(
              function () {
                "" === R || 0 == +R ? M(0 === r) : M(+R > r), ae("");
              },
              [r, R]
            ),
            (0, o.useEffect)(
              function () {
                P(!!e), e || (ae(c("error.connect")), M(!1));
              },
              [e]
            ),
            (0, o.useEffect)(
              function () {
                if ((console.log("amount", R), O && "" !== R)) {
                  if (0 >= +R) {
                    X(!1), $(0), ae(c("error.lt0"));
                    return;
                  }
                  if (isNaN(+R)) {
                    ae(c("error.invalidNm")), X(!1), $(0);
                    return;
                  }
                  if (
                    R.includes(".") &&
                    R.split(".")[1].length > b.underlying.decimals
                  ) {
                    ae(c("error.exceedDecimal")), X(!1);
                    return;
                  }
                  if (+R > +af) {
                    U(!0), X(!1), $(0), ae(c("error.exceedWBalance"));
                    return;
                  }
                  if (+R > r) {
                    M(!0), X(!1), ae(c("error.exceedAllowance"));
                    return;
                  }
                  M(!1);
                  var a = (+R / +b.underlying.walletBalance.toString()) * 100,
                    d = C(b, R, !0);
                  if ((ab(d.toString()), $(+a.toFixed(0)), X(!0), d > 90)) {
                    ae(c("error.borrowLimitWarning"));
                    return;
                  }
                  ae("");
                }
              },
              [R, r]
            );
          var ag,
            ah,
            ai = function (a, b) {
              S(b ? af.toString() : a);
            },
            aj =
              ((ag = (0, d.Z)(
                f().mark(function a() {
                  var d;
                  return f().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return G(!0), (a.next = 3), v(b);
                        case 3:
                          (d = a.sent),
                            G(!1),
                            (0, n.JQ)(d, c("common.approve"));
                        case 6:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )),
              function () {
                return ag.apply(this, arguments);
              }),
            ak =
              ((ah = (0, d.Z)(
                f().mark(function a() {
                  var d;
                  return f().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return J(!0), (a.next = 3), u(b, R);
                        case 3:
                          (d = a.sent), J(!1), (0, n.JQ)(d, c("common.supply"));
                        case 6:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )),
              function () {
                return ah.apply(this, arguments);
              }),
            al = function () {
              S(af.toString());
            },
            am = function (a, b) {
              $(b), ai(((+af * +b) / 100).toFixed(6).toString(), 100 === b);
            };
          return (0, g.jsxs)(g.Fragment, {
            children: [
              (0, g.jsx)(q.Z, {
                title: c("dialog.supplyAmount"),
                subtitle: c("dialog.walletBalance"),
                balance: b.underlying.walletBalance.toRound(6),
                themeColor: "light",
                approveButton: !0,
                approveLoading: F,
                approveButtonEnabled: L,
                infos: w
                  ? [y(b), z(b), A(b, aa, D(b, R.toString(), !0))]
                  : [y(b), A(b, aa, D(b, R.toString(), !0))],
                selectedMarket: b,
                otherButtonName: c("common.supply"),
                otherButtonEnabled: W,
                handleOnClickApprove: aj,
                handleOnClickOtherButton: ak,
                otherButtonLoading: I,
                amount: R,
                amountInUsd: B(b, R),
                handleOnChangeAmount: ai,
                handleOnClickMax: al,
                handleSliderChange: am,
                sliderPct: Z,
                sliderEnabled: b.underlying.walletBalance.gt(h.O.from(0)),
                error: ad,
                inputEnabled: O,
              }),
              (0, g.jsx)(p.x7, {}),
            ],
          });
        },
        v = function (a) {
          var b = a.selectedMarket,
            c = (0, s.$)().t,
            e = (0, i.b)().address,
            j = (0, l.A)().handleWithdraw,
            k = (0, m.V)(),
            r = k.getSupplyStats,
            t = k.getBorrowLimit,
            u = k.getAmountInUsd,
            v = k.getNewBorrowLimitAfterSupply,
            w = k.getNewBorrowLimitUsedPctAfterSupply,
            x = (0, o.useState)(!1),
            y = x[0],
            z = x[1],
            A = (0, o.useState)(""),
            B = A[0],
            C = A[1],
            D = (0, o.useState)(!1),
            E = D[0],
            F = D[1],
            G = (0, o.useState)(!1),
            H = G[0],
            I = G[1],
            J = (0, o.useState)(),
            K = J[0],
            L = J[1],
            M = (0, o.useState)(0),
            N = M[0],
            O = M[1],
            P = (0, o.useState)(!1),
            Q = P[0],
            R = P[1],
            S = (0, o.useState)(""),
            T = S[0],
            U = S[1];
          (0, o.useEffect)(
            function () {
              R(!!e), e || U(c("error.connect"));
            },
            [e]
          ),
            (0, o.useEffect)(
              function () {
                if (Q) {
                  if (0 >= +B) {
                    I(!1), O(0), U(c("error.lt0"));
                    return;
                  }
                  if (isNaN(+B)) {
                    U(c("error.invalidNm")), I(!1), O(0);
                    return;
                  }
                  if (
                    B.includes(".") &&
                    B.split(".")[1].length > b.underlying.decimals
                  ) {
                    U(c("error.exceedDecimal")), I(!1);
                    return;
                  }
                  if (
                    (+B != +b.supplyBalanceInTokenUnit.toString() && F(!1),
                    +B > +b.supplyBalanceInTokenUnit.toString())
                  ) {
                    I(!1), O(0), U(c("error.exceedSBalance"));
                    return;
                  }
                  var a = (+B / +b.supplyBalanceInTokenUnit.toString()) * 100,
                    d = w(b, B, !1);
                  if (d > 100) {
                    I(!1), L(d.toString()), U(c("error.insufficientCol"));
                    return;
                  }
                  if (
                    (L(d.toString()), O(+a.toFixed(0)), +B > +b.cash.toString())
                  ) {
                    I(!1), U(c("error.insufficientLiq"));
                    return;
                  }
                  if ((I(!0), d > 90)) {
                    U(c("error.borrowLimitWarning"));
                    return;
                  }
                  U("");
                }
              },
              [B]
            );
          var V,
            W,
            X = function (a, c) {
              c && F(c),
                C(
                  c
                    ? b.supplyBalanceInTokenUnit.toFixed(b.underlying.decimals)
                    : a
                );
            },
            Y = function () {
              X(b.supplyBalanceInTokenUnit.toFixed(b.underlying.decimals), !0);
            },
            Z = function (a, c) {
              O(c),
                X(
                  ((+b.supplyBalanceInTokenUnit.toString() * +c) / 100)
                    .toFixed(b.underlying.decimals)
                    .toString(),
                  100 === c
                );
            },
            $ =
              ((V = (0, d.Z)(
                f().mark(function a() {
                  var d;
                  return f().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return z(!0), (a.next = 3), j(b, B, E);
                        case 3:
                          (d = a.sent),
                            z(!1),
                            (0, n.JQ)(d, c("common.withdraw"));
                        case 6:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )),
              function () {
                return V.apply(this, arguments);
              }),
            _ =
              ((W = (0, d.Z)(
                f().mark(function a() {
                  return f().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )),
              function () {
                return W.apply(this, arguments);
              });
          return (0, g.jsxs)(g.Fragment, {
            children: [
              (0, g.jsx)(q.Z, {
                title: c("dialog.withdrawAmount"),
                subtitle: c("dialog.supplyBalance"),
                balance: b.supplyBalanceInTokenUnit.toRound(6),
                themeColor: "middle",
                approveButton: !1,
                approveButtonEnabled: !1,
                approveLoading: !1,
                infos: [r(b), t(b, K, v(b, B.toString(), !1))],
                selectedMarket: b,
                otherButtonName: c("common.withdraw"),
                otherButtonEnabled: H,
                otherButtonLoading: y,
                handleOnClickApprove: _,
                handleOnClickOtherButton: $,
                amount: B,
                amountInUsd: u(b, B),
                handleOnChangeAmount: X,
                handleOnClickMax: Y,
                handleSliderChange: Z,
                sliderPct: N,
                sliderEnabled: b.supplyBalanceInTokenUnit.gt(h.O.from(0)),
                error: T,
                inputEnabled: Q,
              }),
              (0, g.jsx)(p.x7, {}),
            ],
          });
        };
      b.Z = t;
    },
    42: function (a, b, c) {
      c.d(b, {
        Z: function () {
          return e;
        },
      });
      var d = c(85893);
      function e(a) {
        var b = a.logo,
          c = a.symbol;
        return (0, d.jsxs)("div", {
          className: "flex items-center gap-3",
          children: [
            (0, d.jsx)("div", {
              className: "flex items-center gap-3 h-6 w-6",
              children: (0, d.jsx)("img", {
                className: "h-6 w-6",
                src: b,
                alt: b,
              }),
            }),
            (0, d.jsx)("p", { children: c }),
          ],
        });
      }
    },
    85042: function (a, b, c) {
      c.d(b, {
        Z: function () {
          return p;
        },
      });
      var d = c(828),
        e = c(85893),
        f = c(5908),
        g = c(20373),
        h = c(24304),
        i = c(62302),
        j = c(80499),
        k = c(67294),
        l = c(42),
        m = c(12759),
        n = c(56369),
        o = c(77058);
      function p() {
        var a = (0, o.$)().t,
          b = (0, i.R)(),
          c = b.marketsData,
          p = b.generalData,
          q = b.setSelectedMarketSymbol,
          r = (0, j.V)().getPctOfUsedBorrowLimitPerMarket,
          s = (0, d.Z)(k.useState(), 2),
          t = s[0],
          u = s[1],
          v = (0, d.Z)(k.useState([]), 2),
          w = v[0],
          x = v[1],
          y = (0, d.Z)(k.useState(!1), 2),
          z = y[0],
          A = y[1],
          B = function (a) {
            u(a), q(a.underlying.symbol), A(!0);
          },
          C = function () {
            c &&
              x(
                c.filter(function (a) {
                  return a.borrowBalanceInTokenUnit.gt(h.O.from(0));
                })
              );
          };
        return (
          (0, k.useEffect)(function () {
            C();
          }, []),
          (0, k.useEffect)(
            function () {
              C();
            },
            [c]
          ),
          (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(g.Z, {
                title1: a("tables.yBorrowBalance"),
                value1: (null == p ? void 0 : p.totalBorrowBalance)
                  ? null == p
                    ? void 0
                    : p.totalBorrowBalance.toFixed(2)
                  : "0.00",
                title2: a("tables.yBorrowLimit"),
                value2: (null == p ? void 0 : p.totalBorrowLimitUsedPercent)
                  ? null == p
                    ? void 0
                    : p.totalBorrowLimitUsedPercent.toFixed(2)
                  : "0.00",
              }),
              (0, e.jsx)(n.Z, {
                headers: [
                  a("tables.borrowedAsset"),
                  a("tables.apyAccrued"),
                  a("tables.rewardApy"),
                  a("tables.balance"),
                  a("tables.borrowLimit"),
                ],
                bgColor: "bg-borrowBase",
                footer:
                  0 === w.length
                    ? { str: a("tables.noBorrows"), colSpan: 5 }
                    : void 0,
                children: w.map(function (a, b) {
                  return (0, e.jsx)(
                    m.Z,
                    {
                      rowDatas: [
                        (0, e.jsx)(
                          l.Z,
                          {
                            logo: a.underlying.logo,
                            symbol: a.underlying.symbol,
                          },
                          b
                        ),
                        "".concat(
                          a.borrowApy.mul(h.O.from("100")).toFixed(2),
                          "%"
                        ),
                        "".concat(a.borrowRewardApy.toFixed(2), "%"),
                        ""
                          .concat(a.borrowBalanceInTokenUnit.toRound(2), " ")
                          .concat(a.underlying.symbol),
                        "".concat(r(a).toFixed(2), "%"),
                      ],
                      click: function (b) {
                        b.preventDefault(), B(a);
                      },
                    },
                    b
                  );
                }),
              }),
              z &&
                t &&
                (0, e.jsx)(f.Z, { isOpen: z, setIsOpen: A, selectedMarket: t }),
            ],
          })
        );
      }
    },
    49316: function (a, b, c) {
      c.d(b, {
        Z: function () {
          return t;
        },
      });
      var d = c(47568),
        e = c(828),
        f = c(34051),
        g = c.n(f),
        h = c(85893),
        i = c(89040),
        j = c(20373),
        k = c(24304),
        l = c(62302),
        m = c(44402),
        n = c(49096),
        o = c(67294),
        p = c(42),
        q = c(12759),
        r = c(56369),
        s = c(77058);
      function t() {
        var a,
          b = (0, s.$)().t,
          c = (0, l.R)(),
          f = c.marketsData,
          t = c.generalData,
          u = c.setSelectedMarketSymbol,
          v = (0, m.A)(),
          w = v.handleEnterMarket,
          x = v.handleExitMarket,
          y = (0, e.Z)(o.useState(), 2),
          z = y[0],
          A = y[1],
          B = (0, e.Z)(o.useState([]), 2),
          C = B[0],
          D = B[1],
          E = (0, e.Z)(o.useState(!1), 2),
          F = E[0],
          G = E[1],
          H = function (a) {
            A(a), u(a.underlying.symbol), G(!0);
          },
          I = function () {
            f &&
              D(
                f.filter(function (a) {
                  return a.supplyBalanceInTokenUnit.gt(k.O.from(0));
                })
              );
          };
        (0, o.useEffect)(function () {
          I();
        }, []),
          (0, o.useEffect)(
            function () {
              I();
            },
            [f]
          );
        var J =
          ((a = (0, d.Z)(
            g().mark(function a(b) {
              return g().wrap(function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      if (!b.isEnterMarket) {
                        a.next = 5;
                        break;
                      }
                      return (a.next = 3), x(b);
                    case 3:
                      a.next = 7;
                      break;
                    case 5:
                      return (a.next = 7), w(b);
                    case 7:
                    case "end":
                      return a.stop();
                  }
              }, a);
            })
          )),
          function (b) {
            return a.apply(this, arguments);
          });
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsx)(j.Z, {
              title1: b("tables.ySupplyBalance"),
              value1: (null == t ? void 0 : t.totalSupplyBalance)
                ? null == t
                  ? void 0
                  : t.totalSupplyBalance.toFixed(2)
                : "0.00",
              title2: b("tables.netApy"),
              value2: (null == t ? void 0 : t.netApy)
                ? null == t
                  ? void 0
                  : t.netApy.toFixed(2)
                : "0.00",
            }),
            (0, h.jsx)(r.Z, {
              headers: [
                b("tables.suppliedAsset"),
                b("tables.apyEarned"),
                b("tables.rewardApy"),
                b("tables.balance"),
                b("tables.collateral"),
              ],
              bgColor: "bg-supplyBase",
              footer:
                0 === C.length
                  ? { str: b("tables.noSupplied"), colSpan: 5 }
                  : void 0,
              children: C.map(function (a, b) {
                return (0, h.jsx)(
                  q.Z,
                  {
                    rowDatas: [
                      (0, h.jsx)(
                        p.Z,
                        {
                          logo: a.underlying.logo,
                          symbol: a.underlying.symbol,
                        },
                        b
                      ),
                      "".concat(
                        a.supplyApy.mul(k.O.from("100")).toFixed(2),
                        "%"
                      ),
                      "".concat(a.supplyRewardApy.toFixed(2), "%"),
                      ""
                        .concat(a.supplyBalanceInTokenUnit.toFixed(2), " ")
                        .concat(a.underlying.symbol),
                      (0, h.jsx)(
                        n.r,
                        {
                          checked: a.isEnterMarket,
                          onChange: function () {
                            J(a);
                          },
                          as: o.Fragment,
                          children: function (a) {
                            var b = a.checked;
                            return (0, h.jsxs)("button", {
                              onClick: function (a) {
                                a.stopPropagation();
                              },
                              className: "".concat(
                                b ? "bg-middle" : "bg-stake",
                                " relative inline-flex h-[14px] w-[29px] items-center rounded-full"
                              ),
                              children: [
                                (0, h.jsx)("span", {
                                  className: "sr-only",
                                  children: "Enter Market",
                                }),
                                (0, h.jsx)("span", {
                                  className: "".concat(
                                    b ? "translate-x-4" : "translate-x-0.5",
                                    " inline-block h-[11px] w-[11px] transform rounded-full bg-background transition"
                                  ),
                                }),
                              ],
                            });
                          },
                        },
                        b
                      ),
                    ],
                    click: function (b) {
                      b.preventDefault(), b.stopPropagation(), H(a);
                    },
                  },
                  b
                );
              }),
            }),
            F &&
              z &&
              (0, h.jsx)(i.Z, { isOpen: F, setIsOpen: G, selectedMarket: z }),
          ],
        });
      }
    },
    12759: function (a, b, c) {
      c.d(b, {
        Z: function () {
          return f;
        },
      });
      var d = c(85893),
        e = c(86010);
      function f(a) {
        var b = a.rowDatas,
          c = a.classes,
          f = a.click;
        return (0, d.jsx)("tr", {
          className: (0, e.Z)("cursor-pointer", c),
          children: b.map(function (a, c) {
            return (0, d.jsx)(
              "td",
              {
                className: (0, e.Z)(
                  "p-3 text-table-row text-neutral whitespace-nowrap",
                  0 === c ? "text-left" : "text-right",
                  c + 1 !== b.length ? "pr-8 md:pr-4" : ""
                ),
                onClick: function (a) {
                  return f(a);
                },
                children: a,
              },
              c
            );
          }),
        });
      }
      c(67294);
    },
    56369: function (a, b, c) {
      c.d(b, {
        Z: function () {
          return i;
        },
      });
      var d = c(85893);
      function e(a) {
        var b = a.handleChange;
        return (0, d.jsx)("div", {
          className: "flex justify-center",
          children: (0, d.jsx)("div", {
            className: "mb-6 mt-2 w-full",
            children: (0, d.jsx)("div", {
              className:
                "input-group relative flex flex-wrap items-stretch w-full rounded-full bg-background h-8",
              children: (0, d.jsxs)("div", {
                className: "flex items-center w-full",
                children: [
                  (0, d.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "#FDA669",
                    className: "bi bi-search mx-4",
                    viewBox: "0 0 16 16",
                    children: (0, d.jsx)("path", {
                      d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z",
                    }),
                  }),
                  (0, d.jsx)("input", {
                    type: "search",
                    className:
                      "bg-transparent w-full focus:outline-none text-neutral font-light text-lg placeholder:font-thin placeholder:opacity-40 placeholder:text-light",
                    placeholder: "Search",
                    "aria-label": "Search",
                    onChange: function (a) {
                      return b(a);
                    },
                  }),
                ],
              }),
            }),
          }),
        });
      }
      var f = c(86010);
      function g(a) {
        var b = a.text,
          c = a.colSpan;
        return (0, d.jsx)("tfoot", {
          children: (0, d.jsx)("tr", {
            children: (0, d.jsx)("td", {
              colSpan: c,
              className: "text-center text-neutral text-sm font-extralight",
              children: b,
            }),
          }),
        });
      }
      function h(a) {
        var b = a.headers;
        return (0, d.jsx)("thead", {
          className: "h-16",
          children: (0, d.jsx)("tr", {
            children: b.map(function (a, c) {
              return (0,
              d.jsxs)("th", { className: (0, f.Z)("text-table-header text-neutral", 0 === c ? "text-left px-3 py-4" : "text-right", c + 1 !== b.length ? "pr-8 md:pr-4" : ""), children: [" ", a] }, c);
            }),
          }),
        });
      }
      function i(a) {
        var b = a.classes,
          c = a.searchBar,
          i = a.searchChange,
          j = a.bgColor,
          k = a.headers,
          l = a.footer,
          m = a.children;
        return (0, d.jsx)("div", {
          className: (0, f.Z)(b, "w-full"),
          children: (0, d.jsxs)("div", {
            className: (0, f.Z)("py-4 rounded-2xl px-7", j),
            children: [
              c &&
                i &&
                (0, d.jsx)(e, {
                  handleChange: function (a) {
                    return i(a);
                  },
                }),
              (0, d.jsx)("div", {
                className: "overflow-x-auto",
                children: (0, d.jsxs)("table", {
                  className: (0, f.Z)("w-full"),
                  children: [
                    (0, d.jsx)(h, { headers: k }),
                    (0, d.jsx)("tbody", { children: m }),
                    l && (0, d.jsx)(g, { text: l.str, colSpan: l.colSpan }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      c(67294);
    },
    20373: function (a, b, c) {
      c.d(b, {
        Z: function () {
          return e;
        },
      });
      var d = c(85893);
      function e(a) {
        var b = a.title1,
          c = a.title2,
          e = a.value1,
          f = a.value2;
        return (0, d.jsxs)("div", {
          className: " mb-7 px-7 text-neutral",
          children: [
            (0, d.jsxs)("div", {
              className: "flex justify-between",
              children: [
                (0, d.jsx)("p", { className: "font-light pb-3", children: b }),
                (0, d.jsx)("p", { className: "font-light pb-3", children: c }),
              ],
            }),
            (0, d.jsxs)("div", {
              className: "flex justify-between",
              children: [
                (0, d.jsxs)("p", {
                  className: "text-3xl font-light",
                  children: ["$", e],
                }),
                (0, d.jsxs)("p", {
                  className: "text-3xl font-light",
                  children: [f, "%"],
                }),
              ],
            }),
          ],
        });
      }
      c(67294);
    },
    190: function (a, b, c) {
      c.d(b, {
        y: function () {
          return g;
        },
      });
      var d = c(24304),
        e = c(62302),
        f = c(67294),
        g = function () {
          var a = (0, f.useState)(0),
            b = a[0],
            c = a[1],
            g = (0, e.R)(),
            h = g.marketsData,
            i = g.selectedMarketSymbol;
          return (
            (0, f.useEffect)(
              function () {
                if (i && h) {
                  var a = h.find(function (a) {
                    return a.underlying.symbol === i;
                  });
                  c(
                    +(
                      (null == a ? void 0 : a.underlying.allowance) ||
                      d.O.from(0)
                    ).toString()
                  );
                }
              },
              [h, i]
            ),
            { allowance: b }
          );
        };
    },
    80499: function (a, b, c) {
      c.d(b, {
        V: function () {
          return h;
        },
      });
      var d = c(85893),
        e = c(24304),
        f = c(62302),
        g = c(77058),
        h = function () {
          var a = (0, g.$)().t,
            b = (0, f.R)().generalData,
            c = function (a) {
              var c = (null == b ? void 0 : b.totalBorrowLimit)
                  ? null == b
                    ? void 0
                    : b.totalBorrowLimit
                  : e.O.from(0),
                d = (null == b ? void 0 : b.totalBorrowBalance)
                  ? null == b
                    ? void 0
                    : b.totalBorrowBalance
                  : e.O.from(0);
              return +c.toString() - +d.toString();
            },
            h = function (a, c, d) {
              var e = a.isEnterMarket
                  ? +c *
                    +a.collateralFactor.toString() *
                    +a.underlying.price.toString()
                  : 0,
                f = (null == b ? void 0 : b.totalBorrowLimit)
                  ? +(null == b ? void 0 : b.totalBorrowLimit.toString())
                  : 0;
              return d ? f + e : f - e;
            },
            i = function (a, c, d) {
              var e = h(a, c, d),
                f = (null == b ? void 0 : b.totalBorrowBalance)
                  ? +(null == b ? void 0 : b.totalBorrowBalance.toString())
                  : 0;
              return e > 0 ? (100 * f) / e : 0;
            };
          return {
            getSupplyStats: function (b) {
              return {
                title: a("dialog.supplyStats"),
                infos: [
                  {
                    title: a("dialog.supplyApy"),
                    value: (0, d.jsxs)("p", {
                      children: [
                        b.supplyApy.mul(e.O.from("100")).toFixed(2),
                        "%",
                      ],
                    }),
                  },
                  {
                    title: a("dialog.supplyBalance"),
                    value: (0, d.jsx)("p", {
                      children:
                        b.supplyBalance.convertToLargeNumberRepresentation(
                          2,
                          "$"
                        ),
                    }),
                  },
                ],
              };
            },
            getSupplyStatsWithReward: function (b) {
              return {
                title: a("dialog.supplyStats"),
                infos: [
                  {
                    title: a("dialog.supplyApy"),
                    value: (0, d.jsxs)("p", {
                      children: [
                        b.supplyApy.mul(e.O.from("100")).toFixed(2),
                        "%",
                      ],
                    }),
                  },
                  {
                    title: a("dialog.supplyBalance"),
                    value: (0, d.jsx)("p", {
                      children:
                        b.supplyBalance.convertToLargeNumberRepresentation(
                          2,
                          "$"
                        ),
                    }),
                  },
                  {
                    title: a("dialog.rewardApy"),
                    value: (0, d.jsxs)("p", {
                      children: [b.supplyRewardApy.toFixed(2), "%"],
                    }),
                  },
                ],
              };
            },
            getCollateralStats: function (b) {
              return {
                title: a("dialog.collateral"),
                infos: [
                  {
                    title: a("dialog.collateralFactor"),
                    value: (0, d.jsxs)("p", {
                      children: [
                        b.collateralFactor.mul(e.O.from(100)).toFixed(2),
                        "%",
                      ],
                    }),
                  },
                  {
                    title: a("dialog.usedCol"),
                    value: (0, d.jsx)("p", {
                      children: b.isEnterMarket ? "Yes" : "No",
                    }),
                  },
                ],
              };
            },
            getBorrowLimit: function (c, e, f) {
              var g;
              return {
                title: a("dialog.borrowLimit"),
                infos: [
                  {
                    title: a("dialog.yBorrowLimit"),
                    value: (0, d.jsx)("p", {
                      children: (null == b ? void 0 : b.totalBorrowBalance)
                        ? "$"
                            .concat(
                              null == b
                                ? void 0
                                : null === (g = b.totalBorrowLimit) ||
                                  void 0 === g
                                ? void 0
                                : g.toRound(2),
                              " "
                            )
                            .concat(
                              void 0 !== f ? "-> $".concat(f.toFixed(2)) : ""
                            )
                        : 0,
                    }),
                  },
                  {
                    title: a("dialog.blUsed"),
                    value: (0, d.jsxs)("p", {
                      children: [
                        (null == b ? void 0 : b.totalBorrowLimitUsedPercent)
                          ? ""
                              .concat(
                                b.totalBorrowLimitUsedPercent.toRound(2),
                                "% -> "
                              )
                              .concat(
                                void 0 !== e
                                  ? "infinite" === e
                                    ? "infinite"
                                    : (+e).toFixed(2)
                                  : b.totalBorrowLimitUsedPercent.toRound(2)
                              )
                          : "0",
                        "%",
                      ],
                    }),
                  },
                ],
              };
            },
            getBorrowStats: function (b) {
              return {
                title: a("dialog.borrowStats"),
                infos: [
                  {
                    title: a("dialog.borrowApy"),
                    value: (0, d.jsxs)("p", {
                      children: [
                        b.borrowApy.mul(e.O.from("100")).toFixed(2),
                        "%",
                      ],
                    }),
                  },
                  {
                    title: a("dialog.borrowBalance"),
                    value: (0, d.jsx)("p", {
                      children:
                        b.borrowBalance.convertToLargeNumberRepresentation(
                          2,
                          "$"
                        ),
                    }),
                  },
                ],
              };
            },
            getRemainingBorrowLimitInUnderlying: function (a) {
              return c(a) / +a.underlying.price.toString();
            },
            getNewBorrowLimitUsedPct: function (a, c, d) {
              var f = c * +a.underlying.price.toString(),
                g = (null == b ? void 0 : b.totalBorrowBalance)
                  ? null == b
                    ? void 0
                    : b.totalBorrowBalance
                  : e.O.from(0),
                h = d ? +g.toString() + f : +g.toString() - f;
              return (null == b ? void 0 : b.totalBorrowLimit)
                ? (100 * +h.toString()) /
                    +(null == b ? void 0 : b.totalBorrowLimit.toString())
                : 0;
            },
            getPctOfUsedBorrowLimitPerMarket: function (a) {
              var c = (null == b ? void 0 : b.totalBorrowLimit)
                ? null == b
                  ? void 0
                  : b.totalBorrowLimit
                : e.O.from(0);
              return (100 * +a.borrowBalance.toString()) / +c.toString();
            },
            getAmountInUsd: function (a, b) {
              return (+b * +a.underlying.price.toString()).toFixed(2);
            },
            getNewBorrowLimitAfterSupply: h,
            getNewBorrowLimitUsedPctAfterSupply: i,
          };
        };
    },
  },
]);
