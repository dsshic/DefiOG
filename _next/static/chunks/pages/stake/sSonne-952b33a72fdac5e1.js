(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [826],
  {
    55523: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/stake/sSonne",
        function () {
          return c(16701);
        },
      ]);
    },
    16701: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return j;
          },
        });
      var d = c(85893),
        e = c(18425),
        f = c(24304),
        g = c(55107),
        h = c(78731),
        i = c(67294),
        j = function () {
          var a = (0, g.b)().network,
            b = (0, h.s)().stakeState,
            c = (0, i.useState)(f.O.from(0)),
            j = c[0],
            k = c[1],
            l = (0, i.useState)(f.O.from(0)),
            m = l[0],
            n = l[1],
            o = (0, i.useState)(null),
            p = o[0],
            q = o[1];
          return (
            (0, i.useEffect)(
              function () {
                b &&
                  (n(b.sSonne.balance),
                  k(b.sSonne.allowance),
                  q(
                    null == b
                      ? void 0
                      : b.sSonne.withdrawal.releaseTime.toNumber()
                  ));
              },
              [b]
            ),
            (0, d.jsx)(e.Z, {
              tabName: "sSONNE Staking",
              tokenSymbol: "sSONNE",
              contractAddress: a.sSonneAddress,
              balance: m,
              allowance: j,
              claimableSymbol: "SONNE",
              reward: [
                {
                  rewardSybmol: "SONNE",
                  rewardAmount:
                    (null == b ? void 0 : b.sSonne.claimable.sonne) ||
                    f.O.from(0),
                },
                {
                  rewardSybmol: "VELO",
                  rewardAmount:
                    (null == b ? void 0 : b.sSonne.claimable.velo) ||
                    f.O.from(0),
                },
                {
                  rewardSybmol: "OP",
                  rewardAmount:
                    (null == b ? void 0 : b.sSonne.claimable.op) || f.O.from(0),
                },
              ],
              withdrawalAmount: null == b ? void 0 : b.sSonne.withdrawal.amount,
              withdrawalReleaseTime: p,
            })
          );
        };
    },
  },
  function (a) {
    a.O(0, [126, 425, 774, 888, 179], function () {
      var b;
      return a((a.s = 55523));
    }),
      (_N_E = a.O());
  },
]);
