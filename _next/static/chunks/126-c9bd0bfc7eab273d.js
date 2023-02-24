"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [126],
  {
    41334: function (a, b, c) {
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
    44402: function (a, b, c) {
      c.d(b, {
        A: function () {
          return r;
        },
      });
      var d = c(47568),
        e = c(34051),
        f = c.n(e),
        g = c(18168),
        h = c(24304),
        i = c(91472),
        j = c(27001),
        k = c(55107),
        l = c(88705),
        m = c(64146),
        n = c(2593),
        o = c(21046),
        p = c(29815),
        q = function () {
          var a,
            b,
            c = (0, l.M)(),
            e = (c.txApproved, c.setTxApproved),
            g = c.setWaitingTxHashes,
            h =
              ((a = (0, d.Z)(
                f().mark(function a(b, c, d) {
                  var h,
                    i,
                    j,
                    k,
                    l,
                    m = arguments;
                  return f().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (h = m.length > 3 && void 0 !== m[3] ? m[3] : 50),
                            (a.next = 4),
                            (i = b.estimateGas)[c].apply(i, (0, p.Z)(d))
                          );
                        case 4:
                          return (
                            (k = a.sent),
                            (a.next = 7),
                            (j = b)[c].apply(
                              j,
                              (0, p.Z)(d).concat([
                                { gasLimit: k.add(k.mul(h).div(100)) },
                              ])
                            )
                          );
                        case 7:
                          return (
                            (l = a.sent).hash &&
                              ("approve" !== c && e(!0),
                              g(function (a) {
                                return (0, p.Z)(a).concat([l.hash]);
                              })),
                            (a.next = 11),
                            l.wait()
                          );
                        case 11:
                          return a.abrupt("return", a.sent);
                        case 12:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )),
              function (b, c, d) {
                return a.apply(this, arguments);
              }),
            i =
              ((b = (0, d.Z)(
                f().mark(function a(b, c, d, h) {
                  var i,
                    j,
                    k,
                    l,
                    m,
                    n = arguments;
                  return f().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (i = n.length > 4 && void 0 !== n[4] ? n[4] : 0),
                            (a.next = 4),
                            (j = b.estimateGas)[d].apply(
                              j,
                              (0, p.Z)(h).concat([{ value: c }])
                            )
                          );
                        case 4:
                          return (
                            (l = a.sent),
                            (a.next = 7),
                            (k = b)[d].apply(
                              k,
                              (0, p.Z)(h).concat([
                                {
                                  gasLimit: l.add(l.mul(i).div(100)),
                                  value: c,
                                },
                              ])
                            )
                          );
                        case 7:
                          return (
                            (m = a.sent).hash &&
                              (e(!0),
                              g(function (a) {
                                return (0, p.Z)(a).concat([m.hash]);
                              })),
                            (a.next = 11),
                            m.wait()
                          );
                        case 11:
                          return a.abrupt("return", a.sent);
                        case 12:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )),
              function (a, c, d, e) {
                return b.apply(this, arguments);
              });
          return {
            ExecuteWithExtraGasLimit: h,
            ExecutePayableWithExtraGasLimit: i,
          };
        },
        r = function () {
          var a,
            b,
            c,
            e,
            p,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y,
            z,
            A,
            B,
            C,
            D,
            E,
            F,
            G = (0, k.b)(),
            H = G.address,
            I = G.network,
            J = G.web3Provider,
            K = (0, i.s)().comptroller,
            L = (0, j.u1)().fetchData,
            M = q(),
            N = M.ExecuteWithExtraGasLimit,
            O = M.ExecutePayableWithExtraGasLimit,
            P = (0, l.M)(),
            Q = P.setWaitingTxHashes,
            R = P.waitingTxHashes,
            S = {
              ENTER_MARKETS: "enterMarkets",
              EXIT_MARKET: "exitMarket",
              APPROVE: "approve",
              MINT: "mint",
              BURN: "burn",
              REDEEM: "redeem",
              REDEEM_UNDERLYING: "redeemUnderlying",
              BORROW: "borrow",
              REPAY_BORROW: "repayBorrow",
              REPAY_BEHALF_EXPLICIT: "repayBehalfExplicit",
              DEPOSIT: "deposit",
              CLAIM: "claim",
              WITHDRAW: "withdraw",
            },
            T =
              ((a = (0, d.Z)(
                f().mark(function a(b) {
                  var c, d, e, g;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(K && J && H && b)) {
                              a.next = 15;
                              break;
                            }
                            return (
                              (a.prev = 1),
                              (c = [b.pTokenAddress]),
                              (d = J.getSigner()),
                              (e = K.comptrollerContract.connect(d)),
                              (a.next = 7),
                              N(e, S.ENTER_MARKETS, [c])
                            );
                          case 7:
                            (g = a.sent).transactionHash &&
                              (Q(R.splice(R.indexOf(g.transactionHash), 1)),
                              L()),
                              (a.next = 15);
                            break;
                          case 11:
                            return (
                              (a.prev = 11),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 15:
                            return a.abrupt("return", null);
                          case 16:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 11]]
                  );
                })
              )),
              function (b) {
                return a.apply(this, arguments);
              }),
            U =
              ((b = (0, d.Z)(
                f().mark(function a(b) {
                  var c, d, e;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(b && K && J && H)) {
                              a.next = 14;
                              break;
                            }
                            return (
                              (a.prev = 1),
                              (c = J.getSigner()),
                              (d = K.comptrollerContract.connect(c)),
                              (a.next = 6),
                              N(d, S.EXIT_MARKET, [b.pTokenAddress])
                            );
                          case 6:
                            (e = a.sent).transactionHash &&
                              (Q(R.splice(R.indexOf(e.transactionHash), 1)),
                              L()),
                              (a.next = 14);
                            break;
                          case 10:
                            return (
                              (a.prev = 10),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 14:
                            return a.abrupt("return", null);
                          case 15:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 10]]
                  );
                })
              )),
              function (a) {
                return b.apply(this, arguments);
              }),
            V =
              ((c = (0, d.Z)(
                f().mark(function a(b, c) {
                  var d, e, i, j, k;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(b && J)) {
                              a.next = 23;
                              break;
                            }
                            if (
                              ((a.prev = 1),
                              (d = h.O.parseValueSafe(
                                c,
                                b.underlying.decimals
                              )),
                              (e = J.getSigner()),
                              (i = b.isNativeToken ? g.mj : g.cF),
                              (j = new m.Contract(b.pTokenAddress, i, e)),
                              !b.isNativeToken)
                            ) {
                              a.next = 12;
                              break;
                            }
                            return (a.next = 9), O(j, d._value, S.MINT, []);
                          case 9:
                            (a.t0 = a.sent), (a.next = 15);
                            break;
                          case 12:
                            return (a.next = 14), N(j, S.MINT, [d._value]);
                          case 14:
                            a.t0 = a.sent;
                          case 15:
                            (k = a.t0).transactionHash &&
                              (Q(R.splice(R.indexOf(k.transactionHash), 1)),
                              L()),
                              (a.next = 23);
                            break;
                          case 19:
                            return (
                              (a.prev = 19),
                              (a.t1 = a.catch(1)),
                              console.log(a.t1),
                              a.abrupt("return", aq(a.t1))
                            );
                          case 23:
                            return a.abrupt("return", null);
                          case 24:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 19]]
                  );
                })
              )),
              function (a, b) {
                return c.apply(this, arguments);
              }),
            W =
              ((e = (0, d.Z)(
                f().mark(function a(b, c, d) {
                  var e, i, j, k, l, o, p, q;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(b && J)) {
                              a.next = 27;
                              break;
                            }
                            if (
                              ((a.prev = 1),
                              (e = J.getSigner()),
                              (i = b.isNativeToken ? g.mj : g.cF),
                              (j = new m.Contract(b.pTokenAddress, i, e)),
                              !d)
                            ) {
                              a.next = 16;
                              break;
                            }
                            return (a.next = 8), j.getAccountSnapshot(H);
                          case 8:
                            return (
                              (k = a.sent),
                              (l = n.O$.from(k[1].toString())),
                              (a.next = 12),
                              N(j, S.REDEEM, [l])
                            );
                          case 12:
                            (o = a.sent).transactionHash &&
                              (Q(R.splice(R.indexOf(o.transactionHash), 1)),
                              L()),
                              (a.next = 21);
                            break;
                          case 16:
                            return (
                              (p = h.O.parseValueSafe(
                                c,
                                b.underlying.decimals
                              )),
                              (a.next = 19),
                              N(j, S.REDEEM_UNDERLYING, [p._value])
                            );
                          case 19:
                            (q = a.sent).transactionHash &&
                              (Q(R.splice(R.indexOf(q.transactionHash), 1)),
                              L());
                          case 21:
                            a.next = 27;
                            break;
                          case 23:
                            return (
                              (a.prev = 23),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 27:
                            return a.abrupt("return", null);
                          case 28:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 23]]
                  );
                })
              )),
              function (a, b, c) {
                return e.apply(this, arguments);
              }),
            X =
              ((p = (0, d.Z)(
                f().mark(function a(b, c) {
                  var d, e, i, j, k;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(b && J)) {
                              a.next = 16;
                              break;
                            }
                            return (
                              (a.prev = 1),
                              (d = h.O.parseValueSafe(
                                c,
                                b.underlying.decimals
                              )),
                              (e = J.getSigner()),
                              (i = b.isNativeToken ? g.mj : g.cF),
                              (j = new m.Contract(b.pTokenAddress, i, e)),
                              (a.next = 8),
                              N(j, S.BORROW, [d._value])
                            );
                          case 8:
                            (k = a.sent).transactionHash &&
                              (Q(R.splice(R.indexOf(k.transactionHash), 1)),
                              L()),
                              (a.next = 16);
                            break;
                          case 12:
                            return (
                              (a.prev = 12),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 16:
                            return a.abrupt("return", null);
                          case 17:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 12]]
                  );
                })
              )),
              function (a, b) {
                return p.apply(this, arguments);
              }),
            Y =
              ((r = (0, d.Z)(
                f().mark(function a(b, c, d) {
                  var e, i, j, k, l, n, p;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(b && J && I)) {
                              a.next = 24;
                              break;
                            }
                            if (
                              ((a.prev = 1),
                              (e = h.O.parseValueSafe(
                                c,
                                b.underlying.decimals
                              )),
                              (i = b.isNativeToken
                                ? { value: e._value }
                                : d
                                ? o.Bz
                                : e._value),
                              (j = J.getSigner()),
                              !(b.isNativeToken && I.maximillion))
                            ) {
                              a.next = 13;
                              break;
                            }
                            return (
                              (k = new m.Contract(I.maximillion, g.qb, j)),
                              (a.next = 9),
                              O(k, e._value, S.REPAY_BEHALF_EXPLICIT, [
                                H,
                                b.pTokenAddress,
                              ])
                            );
                          case 9:
                            (l = a.sent).transactionHash &&
                              (Q(R.splice(R.indexOf(l.transactionHash), 1)),
                              L()),
                              (a.next = 18);
                            break;
                          case 13:
                            return (
                              (n = new m.Contract(b.pTokenAddress, g.cF, j)),
                              (a.next = 16),
                              N(n, S.REPAY_BORROW, [i])
                            );
                          case 16:
                            (p = a.sent).transactionHash &&
                              (Q(R.splice(R.indexOf(p.transactionHash), 1)),
                              L());
                          case 18:
                            a.next = 24;
                            break;
                          case 20:
                            return (
                              (a.prev = 20),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 24:
                            return a.abrupt("return", null);
                          case 25:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 20]]
                  );
                })
              )),
              function (a, b, c) {
                return r.apply(this, arguments);
              }),
            Z =
              ((s = (0, d.Z)(
                f().mark(function a(b) {
                  var c, d, e;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(b && J && I && H)) {
                              a.next = 15;
                              break;
                            }
                            if (
                              ((a.prev = 1),
                              (c = J.getSigner()),
                              !b.underlying.address)
                            ) {
                              a.next = 9;
                              break;
                            }
                            return (
                              (d = new m.Contract(
                                b.underlying.address,
                                g.pn,
                                c
                              )),
                              (a.next = 7),
                              N(d, S.APPROVE, [
                                b.pTokenAddress,
                                h.O.from(o.Bz)._value,
                              ])
                            );
                          case 7:
                            (e = a.sent).transactionHash &&
                              (Q(R.splice(R.indexOf(e.transactionHash), 1)),
                              L());
                          case 9:
                            a.next = 15;
                            break;
                          case 11:
                            return (
                              (a.prev = 11),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 15:
                            return a.abrupt("return", null);
                          case 16:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 11]]
                  );
                })
              )),
              function (a) {
                return s.apply(this, arguments);
              }),
            $ =
              ((t = (0, d.Z)(
                f().mark(function a(b, c) {
                  var d, e, i;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(b && J && I)) {
                              a.next = 14;
                              break;
                            }
                            return (
                              (a.prev = 1),
                              (d = J.getSigner()),
                              (e = new m.Contract(b, g.pn, d)),
                              (a.next = 6),
                              N(e, S.APPROVE, [
                                I.lge,
                                (null != c ? c : h.O.from(o.Bz))._value,
                              ])
                            );
                          case 6:
                            (i = a.sent).transactionHash &&
                              Q(R.splice(R.indexOf(i.transactionHash), 1)),
                              (a.next = 14);
                            break;
                          case 10:
                            return (
                              (a.prev = 10),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 14:
                            return a.abrupt("return", null);
                          case 15:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 10]]
                  );
                })
              )),
              function (a, b) {
                return t.apply(this, arguments);
              }),
            _ =
              ((u = (0, d.Z)(
                f().mark(function a(b) {
                  var c, d, e, i;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!J) {
                              a.next = 15;
                              break;
                            }
                            return (
                              (a.prev = 1),
                              (c = J.getSigner()),
                              (d = h.O.parseValueSafe(b, 6)),
                              (e = new m.Contract(I.lge, g.SK, c)),
                              (a.next = 7),
                              N(e, S.DEPOSIT, [d._value])
                            );
                          case 7:
                            (i = a.sent).transactionHash &&
                              Q(R.splice(R.indexOf(i.transactionHash), 1)),
                              (a.next = 15);
                            break;
                          case 11:
                            return (
                              (a.prev = 11),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 15:
                            return a.abrupt("return", null);
                          case 16:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 11]]
                  );
                })
              )),
              function (a) {
                return u.apply(this, arguments);
              }),
            aa =
              ((v = (0, d.Z)(
                f().mark(function a(b) {
                  var c, d, e;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(J && b)) {
                              a.next = 14;
                              break;
                            }
                            return (
                              (a.prev = 1),
                              (c = J.getSigner()),
                              (d = new m.Contract(b, g.Lt, c)),
                              (a.next = 6),
                              N(d, S.CLAIM, [])
                            );
                          case 6:
                            (e = a.sent).transactionHash &&
                              Q(R.splice(R.indexOf(e.transactionHash), 1)),
                              (a.next = 14);
                            break;
                          case 10:
                            return (
                              (a.prev = 10),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 14:
                            return a.abrupt("return", null);
                          case 15:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 10]]
                  );
                })
              )),
              function (a) {
                return v.apply(this, arguments);
              }),
            ab =
              ((w = (0, d.Z)(
                f().mark(function a(b, c) {
                  var d, e, i, j;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(J && I && H)) {
                              a.next = 15;
                              break;
                            }
                            return (
                              (a.prev = 1),
                              (d = J.getSigner()),
                              (e = h.O.parseValueSafe(c, 18)),
                              (i = new m.Contract(b, g.Ms, d)),
                              (a.next = 7),
                              N(i, S.MINT, [e._value])
                            );
                          case 7:
                            (j = a.sent).transactionHash &&
                              Q(R.splice(R.indexOf(j.transactionHash), 1)),
                              (a.next = 15);
                            break;
                          case 11:
                            return (
                              (a.prev = 11),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 15:
                            return a.abrupt("return", null);
                          case 16:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 11]]
                  );
                })
              )),
              function (a, b) {
                return w.apply(this, arguments);
              }),
            ac =
              ((x = (0, d.Z)(
                f().mark(function a(b, c) {
                  var d, e, i, j;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(J && I && H)) {
                              a.next = 15;
                              break;
                            }
                            return (
                              (a.prev = 1),
                              (d = J.getSigner()),
                              (e = h.O.parseValueSafe(c, 18)),
                              (i = new m.Contract(b, g.Ms, d)),
                              (a.next = 7),
                              N(i, S.BURN, [e._value])
                            );
                          case 7:
                            (j = a.sent).transactionHash &&
                              Q(R.splice(R.indexOf(j.transactionHash), 1)),
                              (a.next = 15);
                            break;
                          case 11:
                            return (
                              (a.prev = 11),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 15:
                            return a.abrupt("return", null);
                          case 16:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 11]]
                  );
                })
              )),
              function (a, b) {
                return x.apply(this, arguments);
              }),
            ad =
              ((y = (0, d.Z)(
                f().mark(function a(b, c) {
                  var d, e, h;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(J && I && H)) {
                              a.next = 14;
                              break;
                            }
                            return (
                              (a.prev = 1),
                              (d = J.getSigner()),
                              (e = new m.Contract(b, g.Ms, d)),
                              (a.next = 6),
                              N(e, "claim", [c])
                            );
                          case 6:
                            (h = a.sent).transactionHash &&
                              Q(R.splice(R.indexOf(h.transactionHash), 1)),
                              (a.next = 14);
                            break;
                          case 10:
                            return (
                              (a.prev = 10),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 14:
                            return a.abrupt("return", null);
                          case 15:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 10]]
                  );
                })
              )),
              function (a, b) {
                return y.apply(this, arguments);
              }),
            ae =
              ((z = (0, d.Z)(
                f().mark(function a(b) {
                  var c, d, e;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(J && I && H)) {
                              a.next = 14;
                              break;
                            }
                            return (
                              (a.prev = 1),
                              (c = J.getSigner()),
                              (d = new m.Contract(b, g.Ms, c)),
                              (a.next = 6),
                              N(d, "claimAll", [])
                            );
                          case 6:
                            (e = a.sent).transactionHash &&
                              Q(R.splice(R.indexOf(e.transactionHash), 1)),
                              (a.next = 14);
                            break;
                          case 10:
                            return (
                              (a.prev = 10),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 14:
                            return a.abrupt("return", null);
                          case 15:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 10]]
                  );
                })
              )),
              function (a) {
                return z.apply(this, arguments);
              }),
            af =
              ((A = (0, d.Z)(
                f().mark(function a(b) {
                  var c, d, e;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(J && I && H)) {
                              a.next = 14;
                              break;
                            }
                            return (
                              (a.prev = 1),
                              (c = J.getSigner()),
                              (d = new m.Contract(b, g.Ms, c)),
                              (a.next = 6),
                              N(d, S.WITHDRAW, [])
                            );
                          case 6:
                            (e = a.sent).transactionHash &&
                              Q(R.splice(R.indexOf(e.transactionHash), 1)),
                              (a.next = 14);
                            break;
                          case 10:
                            return (
                              (a.prev = 10),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 14:
                            return a.abrupt("return", null);
                          case 15:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 10]]
                  );
                })
              )),
              function (a) {
                return A.apply(this, arguments);
              }),
            ag =
              ((B = (0, d.Z)(
                f().mark(function a(b, c) {
                  var d, e, i;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(J && I && b)) {
                              a.next = 14;
                              break;
                            }
                            return (
                              (a.prev = 1),
                              (d = J.getSigner()),
                              (e = new m.Contract(b, g.pn, d)),
                              (a.next = 6),
                              N(e, S.APPROVE, [c, h.O.from(o.Bz)._value])
                            );
                          case 6:
                            (i = a.sent).transactionHash &&
                              Q(R.splice(R.indexOf(i.transactionHash), 1)),
                              (a.next = 14);
                            break;
                          case 10:
                            return (
                              (a.prev = 10),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 14:
                            return a.abrupt("return", null);
                          case 15:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 10]]
                  );
                })
              )),
              function (a, b) {
                return B.apply(this, arguments);
              }),
            ah =
              ((C = (0, d.Z)(
                f().mark(function a() {
                  var b, c, d;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(J && I && H)) {
                              a.next = 14;
                              break;
                            }
                            return (
                              (a.prev = 1),
                              (b = J.getSigner()),
                              (c = new m.Contract(
                                I.comptrollerAddress,
                                g.zg,
                                b
                              )),
                              (a.next = 6),
                              N(c, "claimComp(address)", [H])
                            );
                          case 6:
                            (d = a.sent).transactionHash &&
                              Q(R.splice(R.indexOf(d.transactionHash), 1)),
                              (a.next = 14);
                            break;
                          case 10:
                            return (
                              (a.prev = 10),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 14:
                            return a.abrupt("return", null);
                          case 15:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 10]]
                  );
                })
              )),
              function () {
                return C.apply(this, arguments);
              }),
            ai =
              ((D = (0, d.Z)(
                f().mark(function a(b, c, d) {
                  var e, h, i, j, k;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(J && I && H)) {
                              a.next = 17;
                              break;
                            }
                            return (
                              (e = new Date()).setMinutes(e.getMinutes() + 9),
                              (h = Math.floor(e.valueOf() / 1e3)),
                              (a.prev = 4),
                              (i = J.getSigner()),
                              (j = new m.Contract(
                                I.veloRouterAddress,
                                g.v0,
                                i
                              )),
                              (a.next = 9),
                              N(j, "swapExactTokensForTokens", [
                                b,
                                c,
                                [d],
                                H,
                                h,
                              ])
                            );
                          case 9:
                            (k = a.sent).transactionHash &&
                              Q(R.splice(R.indexOf(k.transactionHash), 1)),
                              (a.next = 17);
                            break;
                          case 13:
                            return (
                              (a.prev = 13),
                              (a.t0 = a.catch(4)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 17:
                            return a.abrupt("return", null);
                          case 18:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[4, 13]]
                  );
                })
              )),
              function (a, b, c) {
                return D.apply(this, arguments);
              });
          (0, d.Z)(
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
          );
          var aj,
            ak,
            al,
            am =
              ((F = (0, d.Z)(
                f().mark(function a(b, c, d, e) {
                  var h, i, j, k, l, n, o, p;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (
                              ((h = I.sonneAddress),
                              (i = I.usdcAddress),
                              (j = !1),
                              !(J && I && H))
                            ) {
                              a.next = 20;
                              break;
                            }
                            return (
                              (k = new Date()).setMinutes(k.getMinutes() + 9),
                              (l = Math.floor(k.valueOf() / 1e3)),
                              (a.prev = 7),
                              (n = J.getSigner()),
                              (o = new m.Contract(
                                I.veloRouterAddress,
                                g.v0,
                                n
                              )),
                              (a.next = 12),
                              N(o, "addLiquidity", [h, i, j, b, c, d, e, H, l])
                            );
                          case 12:
                            (p = a.sent).transactionHash &&
                              Q(R.splice(R.indexOf(p.transactionHash), 1)),
                              (a.next = 20);
                            break;
                          case 16:
                            return (
                              (a.prev = 16),
                              (a.t0 = a.catch(7)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 20:
                            return a.abrupt("return", null);
                          case 21:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[7, 16]]
                  );
                })
              )),
              function (a, b, c, d) {
                return F.apply(this, arguments);
              }),
            an =
              ((aj = (0, d.Z)(
                f().mark(function a(b) {
                  var c, d, e, i;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (((c = h.O.parseValue(b, 18)), !(J && I && H))) {
                              a.next = 15;
                              break;
                            }
                            return (
                              (a.prev = 2),
                              (d = J.getSigner()),
                              (e = new m.Contract(I.veloGaugeAddress, g.IE, d)),
                              (a.next = 7),
                              N(e, "deposit", [c._display, 0])
                            );
                          case 7:
                            (i = a.sent).transactionHash &&
                              Q(R.splice(R.indexOf(i.transactionHash), 1)),
                              (a.next = 15);
                            break;
                          case 11:
                            return (
                              (a.prev = 11),
                              (a.t0 = a.catch(2)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 15:
                            return a.abrupt("return", null);
                          case 16:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[2, 11]]
                  );
                })
              )),
              function (a) {
                return aj.apply(this, arguments);
              }),
            ao =
              ((ak = (0, d.Z)(
                f().mark(function a(b) {
                  var c, d, e, i;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (((c = h.O.parseValue(b, 18)), !(J && I && H))) {
                              a.next = 15;
                              break;
                            }
                            return (
                              (a.prev = 2),
                              (d = J.getSigner()),
                              (e = new m.Contract(I.veloGaugeAddress, g.IE, d)),
                              (a.next = 7),
                              N(e, "withdraw", [c._display])
                            );
                          case 7:
                            (i = a.sent).transactionHash &&
                              Q(R.splice(R.indexOf(i.transactionHash), 1)),
                              (a.next = 15);
                            break;
                          case 11:
                            return (
                              (a.prev = 11),
                              (a.t0 = a.catch(2)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 15:
                            return a.abrupt("return", null);
                          case 16:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[2, 11]]
                  );
                })
              )),
              function (a) {
                return ak.apply(this, arguments);
              }),
            ap =
              ((al = (0, d.Z)(
                f().mark(function a(b, c, d) {
                  var e, h, i, j, k;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(J && I && H)) {
                              a.next = 17;
                              break;
                            }
                            return (
                              (a.prev = 1),
                              (e = new Date()).setMinutes(e.getMinutes() + 9),
                              (h = Math.floor(e.valueOf() / 1e3)),
                              (i = J.getSigner()),
                              (j = new m.Contract(
                                I.veloRouterAddress,
                                g.v0,
                                i
                              )),
                              (a.next = 9),
                              N(j, "removeLiquidity", [
                                I.sonneAddress,
                                I.usdcAddress,
                                !1,
                                b,
                                c,
                                d,
                                H,
                                h,
                              ])
                            );
                          case 9:
                            (k = a.sent).transactionHash &&
                              Q(R.splice(R.indexOf(k.transactionHash), 1)),
                              (a.next = 17);
                            break;
                          case 13:
                            return (
                              (a.prev = 13),
                              (a.t0 = a.catch(1)),
                              console.log(a.t0),
                              a.abrupt("return", aq(a.t0))
                            );
                          case 17:
                            return a.abrupt("return", null);
                          case 18:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 13]]
                  );
                })
              )),
              function (a, b, c) {
                return al.apply(this, arguments);
              }),
            aq = function (a) {
              var b, c, d, e;
              return a.toString().includes("insufficient funds")
                ? "Insufficient funds for intrinsic transaction cost"
                : (null === (b = a.data) || void 0 === b ? void 0 : b.message)
                ? a.data.message
                : (
                    null === (c = a.error) || void 0 === c
                      ? void 0
                      : null === (d = c.data) || void 0 === d
                      ? void 0
                      : d.message
                  )
                ? a.error.data.message
                : (null === (e = a.error) || void 0 === e ? void 0 : e.code)
                ? a.error.code
                : a.code
                ? a.code
                : "Unknown error";
            };
          return {
            handleEnable: Z,
            handleEnterMarket: T,
            handleExitMarket: U,
            handleSupply: V,
            handleWithdraw: W,
            handleBorrow: X,
            handleRepay: Y,
            handleLgeDeposit: _,
            handleEnableForLge: $,
            handleClaimLge: aa,
            handleUnstakeSonne: ac,
            handleStakeSonne: ab,
            handleWithdrawSonne: af,
            handleEnableByAddress: ag,
            handleClaimComp: ah,
            handleClaimSonne: ad,
            handleSwap: ai,
            handleVeloLpAddLiquidity: am,
            handleVeloLpStake: an,
            handleVeloLpUnstake: ao,
            handleVeloLpWithdraw: ap,
            handleClaimAll: ae,
          };
        };
    },
  },
]);
