(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [162],
  {
    61553: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/markets",
        function () {
          return c(44328);
        },
      ]);
    },
    44328: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return s;
          },
        });
      var d = c(85893),
        e = c(41334),
        f = c(828),
        g = c(24304),
        h = c(62302),
        i = c(67294),
        j = c(42),
        k = c(12759),
        l = c(56369),
        m = c(77058);
      function n() {
        var a,
          b,
          c = (0, m.$)().t,
          e = (0, h.R)().marketsData,
          n = (0, f.Z)(i.useState(""), 2),
          o = n[0],
          p = n[1],
          q = function (a) {
            p(a.target.value.toLowerCase());
          },
          r = function () {
            return (
              (null == e
                ? void 0
                : e.filter(function (a) {
                    return a.underlying.symbol.toLowerCase().includes(o);
                  })) || []
            );
          };
        return (0, d.jsx)("div", {
          className: "w-full",
          children: (0, d.jsx)(l.Z, {
            headers: [
              c("tables.asset"),
              c("tables.liquidity"),
              c("tables.totalSupply"),
              c("tables.supplyApy"),
              c("tables.totalBorrow"),
              c("tables.borrowApy"),
            ],
            bgColor: "bg-supplyBase",
            searchBar: !0,
            searchChange: function (a) {
              q(a);
            },
            footer:
              (null === (a = r()) || void 0 === a ? void 0 : a.length) === 0
                ? { str: c("tables.noRecords"), colSpan: 6 }
                : void 0,
            children:
              null === (b = r()) || void 0 === b
                ? void 0
                : b.map(function (a, b) {
                    return (0, d.jsx)(
                      k.Z,
                      {
                        classes: "hover:bg-borrowBase cursor-default",
                        rowDatas: [
                          (0, d.jsx)(
                            j.Z,
                            {
                              logo: a.underlying.logo,
                              symbol: a.underlying.symbol,
                            },
                            b
                          ),
                          a.liquidity.convertToLargeNumberRepresentation(
                            3,
                            "$"
                          ),
                          a.marketTotalSupply.convertToLargeNumberRepresentation(
                            3,
                            "$"
                          ),
                          "".concat(
                            a.supplyApy.mul(g.O.from("100")).toFixed(2),
                            "%"
                          ),
                          a.marketTotalBorrow.convertToLargeNumberRepresentation(
                            3,
                            "$"
                          ),
                          "".concat(
                            a.borrowApy.mul(g.O.from("100")).toFixed(2),
                            "%"
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
      var o = c(86010);
      function p(a) {
        var b = a.title,
          c = a.percentage,
          e = a.totalValue;
        return (
          a.classes,
          (0, d.jsxs)("div", {
            className: " mb-7",
            children: [
              (0, d.jsxs)("div", {
                className: "flex gap-2 ",
                children: [
                  (0, d.jsx)("p", {
                    className: "font-light pb-3",
                    children: b,
                  }),
                  c &&
                    (0, d.jsxs)("p", {
                      className: "pl-4 ".concat(
                        c.toString().startsWith("-")
                          ? "text-error"
                          : "text-success"
                      ),
                      children: [c, "%"],
                    }),
                ],
              }),
              (0, d.jsxs)("p", {
                className: "text-3xl font-light",
                children: ["$", e],
              }),
            ],
          })
        );
      }
      function q(a) {
        var b = a.title,
          c = a.percentage,
          e = a.totalValue,
          f = a.top3Markets,
          g = a.classes,
          h = (0, m.$)().t;
        return (0, d.jsxs)("div", {
          className: (0, o.Z)(
            "w-full px-8 py-6 rounded-2xl span-1 mt-2",
            void 0 === g ? "" : g
          ),
          children: [
            (0, d.jsx)(p, { percentage: c, title: b, totalValue: e }),
            (0, d.jsx)("p", {
              className: "uppercase text-xs pb-4 font-thin",
              children: h("tables.top3"),
            }),
            (null == f ? void 0 : f.markets) === void 0 &&
              (0, d.jsxs)("div", {
                role: "status",
                className: "animate-pulse flex flex-col gap-4 mt-1 mb-4",
                children: [
                  (0, d.jsx)("div", {
                    className:
                      "h-2.5 bg-neutral dark:bg-neutral dark:bg-opacity-10 rounded-full w-full",
                  }),
                  (0, d.jsx)("div", {
                    className:
                      "h-2.5 bg-neutral dark:bg-neutral dark:bg-opacity-10 rounded-full w-full",
                  }),
                  (0, d.jsx)("div", {
                    className:
                      "h-2.5 bg-neutral dark:bg-neutral dark:bg-opacity-10 rounded-full w-full",
                  }),
                  (0, d.jsx)("span", {
                    className: "sr-only",
                    children: "Loading...",
                  }),
                ],
              }),
            (null == f ? void 0 : f.markets.length) > 0
              ? (0, d.jsxs)("div", {
                  className: "flex w-full",
                  children: [
                    (0, d.jsx)("div", {
                      className: "flex flex-col justify-between gap-3",
                      children:
                        null == f
                          ? void 0
                          : f.markets.map(function (a, b) {
                              return (0,
                              d.jsxs)("div", { className: "flex items-center", children: [(0, d.jsx)("img", { src: a.logo, alt: a.symbol, className: "w-6 h-6 mr-3" }), (0, d.jsx)("p", { className: "whitespace-nowrap font-extralight", children: a.symbol })] }, b);
                            }),
                    }),
                    (0, d.jsx)("div", {
                      className: "flex flex-col justify-between flex-grow",
                      children:
                        null == f
                          ? void 0
                          : f.markets.map(function (a, b) {
                              return (0,
                              d.jsx)("div", { className: "bg-background rounded h-2 mx-4 my-2", children: (0, d.jsx)("div", { className: "bg-middle rounded h-2", style: { width: "".concat(((+a.value.toString() / f.total) * 100).toFixed(2), "%") } }) }, b);
                            }),
                    }),
                    (0, d.jsx)("div", {
                      className: "flex flex-col justify-between",
                      children:
                        null == f
                          ? void 0
                          : f.markets.map(function (a, b) {
                              return (0,
                              d.jsxs)("div", { className: "text-right font-extralight", children: [((+a.value.toString() / f.total) * 100).toFixed(2), "%"] }, b);
                            }),
                    }),
                  ],
                })
              : (0, d.jsxs)("div", {
                  role: "status",
                  className: "animate-pulse flex flex-col gap-6 mt-1 mb-4",
                  children: [
                    (0, d.jsx)("div", {
                      className:
                        "h-2.5 bg-neutral dark:bg-neutral dark:bg-opacity-10 rounded-full w-full",
                    }),
                    (0, d.jsx)("div", {
                      className:
                        "h-2.5 bg-neutral dark:bg-neutral dark:bg-opacity-10 rounded-full w-full",
                    }),
                    (0, d.jsx)("div", {
                      className:
                        "h-2.5 bg-neutral dark:bg-neutral dark:bg-opacity-10 rounded-full w-full",
                    }),
                    (0, d.jsx)("span", {
                      className: "sr-only",
                      children: "Loading...",
                    }),
                  ],
                }),
          ],
        });
      }
      function r(a) {
        var b = a.classes,
          c = (0, m.$)().t,
          e = (0, h.R)(),
          f = e.generalData,
          g = e.marketsData,
          i = (null == f ? void 0 : f.allMarketsTotalSupplyBalance)
            ? null == f
              ? void 0
              : f.allMarketsTotalSupplyBalance.toRound(2, !0, !0)
            : "0",
          j = (null == f ? void 0 : f.allMarketsTotalBorrowBalance)
            ? null == f
              ? void 0
              : f.allMarketsTotalBorrowBalance.toRound(2, !0, !0)
            : "0";
        (null == f ? void 0 : f.allMarketsTotalReserves) &&
          (null == f || f.allMarketsTotalReserves.toRound(2, !0, !0));
        var k = (null == f ? void 0 : f.allMarketsTotalReserves)
            ? null == f
              ? void 0
              : f.allMarketsTotalReserves
                  .addSafe(null == f ? void 0 : f.allMarketsTotalSupplyBalance)
                  .subSafe(null == f ? void 0 : f.allMarketsTotalBorrowBalance)
                  .toRound(2, !0, !0)
            : "0",
          l = f
            ? +(null == f ? void 0 : f.allMarketsTotalSupplyBalance.toString())
            : 0,
          n = f
            ? +(null == f ? void 0 : f.allMarketsTotalBorrowBalance.toString())
            : 0,
          r =
            (null == g
              ? void 0
              : g
                  .sort(function (a, b) {
                    return (
                      +b.marketTotalSupply.toString() -
                      +a.marketTotalSupply.toString()
                    );
                  })
                  .slice(0, 3)
                  .map(function (a) {
                    return {
                      symbol: a.underlying.symbol,
                      logo: a.underlying.logo,
                      value: +a.marketTotalSupply.toString(),
                    };
                  })) || [],
          s =
            (null == g
              ? void 0
              : g
                  .sort(function (a, b) {
                    return (
                      +b.marketTotalBorrow.toString() -
                      +a.marketTotalBorrow.toString()
                    );
                  })
                  .slice(0, 3)
                  .map(function (a) {
                    return {
                      symbol: a.underlying.symbol,
                      logo: a.underlying.logo,
                      value: +a.marketTotalBorrow.toString(),
                    };
                  })) || [];
        return (0, d.jsxs)("div", {
          className: (0, o.Z)(
            "flex w-full gap-6 flex-wrap text-neutral",
            void 0 === b ? "" : b,
            "md:flex-row flex-col"
          ),
          children: [
            (0, d.jsxs)("div", {
              className: "flex-1",
              children: [
                (0, d.jsx)("div", {
                  className: "pl-8",
                  children: (0, d.jsx)(p, {
                    title: c("tables.tvl"),
                    totalValue: k,
                  }),
                }),
                (0, d.jsx)(q, {
                  classes: "bg-supplyBase",
                  title: c("tables.totalSupply"),
                  totalValue: i,
                  top3Markets: { markets: r, total: l },
                }),
              ],
            }),
            (0, d.jsx)("div", {
              className: "flex-1 md:mt-20",
              children: (0, d.jsx)("div", {
                className: "md:translate-y-3",
                children: (0, d.jsx)(q, {
                  classes: "bg-borrowBase",
                  title: c("tables.totalBorrow"),
                  totalValue: j,
                  top3Markets: { markets: s, total: n },
                }),
              }),
            }),
          ],
        });
      }
      var s = function () {
        var a = (0, m.$)().t;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(e.Z, { title: a("title.market"), showNetwork: !0 }),
            (0, d.jsx)(r, { classes: "mb-6" }),
            (0, d.jsx)(n, {}),
          ],
        });
      };
    },
    41334: function (a, b, c) {
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
        var b = a.title,
          c = a.showNetwork,
          f = a.classes;
        return (0, d.jsxs)("div", {
          className: (0, e.Z)(
            "text-neutral flex items-center mb-10",
            void 0 === f ? "" : f
          ),
          children: [
            (0, d.jsxs)("div", {
              className: "flex flex-col gap-1 ml-0.5",
              children: [
                (0, d.jsx)("div", { className: "h-2 w-1 bg-light rounded-md" }),
                (0, d.jsx)("div", { className: "h-2 w-1 bg-light rounded-md" }),
                (0, d.jsx)("div", { className: "h-2 w-1 bg-light rounded-md" }),
              ],
            }),
            (0, d.jsx)("div", {
              children: (0, d.jsxs)("p", {
                className: "text-[24px] pl-7",
                children: [
                  b,
                  (0, d.jsx)("span", { children: c && ": " }),
                  (0, d.jsx)("span", {
                    className: "text-light",
                    children: c && "Optimism",
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    42: function (a, b, c) {
      "use strict";
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
    12759: function (a, b, c) {
      "use strict";
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
      "use strict";
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
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      var b;
      return a((a.s = 61553));
    }),
      (_N_E = a.O());
  },
]);
