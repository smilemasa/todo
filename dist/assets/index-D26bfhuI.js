function QS(n, o) {
  for (var l = 0; l < o.length; l++) {
    const i = o[l]
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const s in i)
        if (s !== "default" && !(s in n)) {
          const c = Object.getOwnPropertyDescriptor(i, s)
          c && Object.defineProperty(n, s, c.get ? c : { enumerable: !0, get: () => i[s] })
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }))
}
;(function () {
  const o = document.createElement("link").relList
  if (o && o.supports && o.supports("modulepreload")) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s)
  new MutationObserver((s) => {
    for (const c of s)
      if (c.type === "childList")
        for (const d of c.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && i(d)
  }).observe(document, { childList: !0, subtree: !0 })
  function l(s) {
    const c = {}
    return (
      s.integrity && (c.integrity = s.integrity),
      s.referrerPolicy && (c.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    )
  }
  function i(s) {
    if (s.ep) return
    s.ep = !0
    const c = l(s)
    fetch(s.href, c)
  }
})()
function K0(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var qf = { exports: {} },
  _l = {}
var by
function ZS() {
  if (by) return _l
  by = 1
  var n = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.fragment")
  function l(i, s, c) {
    var d = null
    if ((c !== void 0 && (d = "" + c), s.key !== void 0 && (d = "" + s.key), "key" in s)) {
      c = {}
      for (var p in s) p !== "key" && (c[p] = s[p])
    } else c = s
    return ((s = c.ref), { $$typeof: n, type: i, key: d, ref: s !== void 0 ? s : null, props: c })
  }
  return ((_l.Fragment = o), (_l.jsx = l), (_l.jsxs = l), _l)
}
var Sy
function JS() {
  return (Sy || ((Sy = 1), (qf.exports = ZS())), qf.exports)
}
var E = JS(),
  Vf = { exports: {} },
  we = {}
var xy
function ex() {
  if (xy) return we
  xy = 1
  var n = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    R = Symbol.iterator
  function M(D) {
    return D === null || typeof D != "object"
      ? null
      : ((D = (R && D[R]) || D["@@iterator"]), typeof D == "function" ? D : null)
  }
  var T = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    x = Object.assign,
    A = {}
  function w(D, q, ae) {
    ;((this.props = D), (this.context = q), (this.refs = A), (this.updater = ae || T))
  }
  ;((w.prototype.isReactComponent = {}),
    (w.prototype.setState = function (D, q) {
      if (typeof D != "object" && typeof D != "function" && D != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        )
      this.updater.enqueueSetState(this, D, q, "setState")
    }),
    (w.prototype.forceUpdate = function (D) {
      this.updater.enqueueForceUpdate(this, D, "forceUpdate")
    }))
  function k() {}
  k.prototype = w.prototype
  function O(D, q, ae) {
    ;((this.props = D), (this.context = q), (this.refs = A), (this.updater = ae || T))
  }
  var N = (O.prototype = new k())
  ;((N.constructor = O), x(N, w.prototype), (N.isPureReactComponent = !0))
  var B = Array.isArray
  function _() {}
  var U = { H: null, A: null, T: null, S: null },
    H = Object.prototype.hasOwnProperty
  function X(D, q, ae) {
    var se = ae.ref
    return { $$typeof: n, type: D, key: q, ref: se !== void 0 ? se : null, props: ae }
  }
  function Q(D, q) {
    return X(D.type, q, D.props)
  }
  function te(D) {
    return typeof D == "object" && D !== null && D.$$typeof === n
  }
  function C(D) {
    var q = { "=": "=0", ":": "=2" }
    return (
      "$" +
      D.replace(/[=:]/g, function (ae) {
        return q[ae]
      })
    )
  }
  var W = /\/+/g
  function G(D, q) {
    return typeof D == "object" && D !== null && D.key != null ? C("" + D.key) : q.toString(36)
  }
  function Y(D) {
    switch (D.status) {
      case "fulfilled":
        return D.value
      case "rejected":
        throw D.reason
      default:
        switch (
          (typeof D.status == "string"
            ? D.then(_, _)
            : ((D.status = "pending"),
              D.then(
                function (q) {
                  D.status === "pending" && ((D.status = "fulfilled"), (D.value = q))
                },
                function (q) {
                  D.status === "pending" && ((D.status = "rejected"), (D.reason = q))
                }
              )),
          D.status)
        ) {
          case "fulfilled":
            return D.value
          case "rejected":
            throw D.reason
        }
    }
    throw D
  }
  function z(D, q, ae, se, ue) {
    var le = typeof D
    ;(le === "undefined" || le === "boolean") && (D = null)
    var de = !1
    if (D === null) de = !0
    else
      switch (le) {
        case "bigint":
        case "string":
        case "number":
          de = !0
          break
        case "object":
          switch (D.$$typeof) {
            case n:
            case o:
              de = !0
              break
            case v:
              return ((de = D._init), z(de(D._payload), q, ae, se, ue))
          }
      }
    if (de)
      return (
        (ue = ue(D)),
        (de = se === "" ? "." + G(D, 0) : se),
        B(ue)
          ? ((ae = ""),
            de != null && (ae = de.replace(W, "$&/") + "/"),
            z(ue, q, ae, "", function (be) {
              return be
            }))
          : ue != null &&
            (te(ue) &&
              (ue = Q(
                ue,
                ae +
                  (ue.key == null || (D && D.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(W, "$&/") + "/") +
                  de
              )),
            q.push(ue)),
        1
      )
    de = 0
    var Be = se === "" ? "." : se + ":"
    if (B(D))
      for (var Se = 0; Se < D.length; Se++)
        ((se = D[Se]), (le = Be + G(se, Se)), (de += z(se, q, ae, le, ue)))
    else if (((Se = M(D)), typeof Se == "function"))
      for (D = Se.call(D), Se = 0; !(se = D.next()).done; )
        ((se = se.value), (le = Be + G(se, Se++)), (de += z(se, q, ae, le, ue)))
    else if (le === "object") {
      if (typeof D.then == "function") return z(Y(D), q, ae, se, ue)
      throw (
        (q = String(D)),
        Error(
          "Objects are not valid as a React child (found: " +
            (q === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : q) +
            "). If you meant to render a collection of children, use an array instead."
        )
      )
    }
    return de
  }
  function F(D, q, ae) {
    if (D == null) return D
    var se = [],
      ue = 0
    return (
      z(D, se, "", "", function (le) {
        return q.call(ae, le, ue++)
      }),
      se
    )
  }
  function re(D) {
    if (D._status === -1) {
      var q = D._result
      ;((q = q()),
        q.then(
          function (ae) {
            ;(D._status === 0 || D._status === -1) && ((D._status = 1), (D._result = ae))
          },
          function (ae) {
            ;(D._status === 0 || D._status === -1) && ((D._status = 2), (D._result = ae))
          }
        ),
        D._status === -1 && ((D._status = 0), (D._result = q)))
    }
    if (D._status === 1) return D._result.default
    throw D._result
  }
  var ne =
      typeof reportError == "function"
        ? reportError
        : function (D) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var q = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof D == "object" && D !== null && typeof D.message == "string"
                    ? String(D.message)
                    : String(D),
                error: D,
              })
              if (!window.dispatchEvent(q)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", D)
              return
            }
            console.error(D)
          },
    fe = {
      map: F,
      forEach: function (D, q, ae) {
        F(
          D,
          function () {
            q.apply(this, arguments)
          },
          ae
        )
      },
      count: function (D) {
        var q = 0
        return (
          F(D, function () {
            q++
          }),
          q
        )
      },
      toArray: function (D) {
        return (
          F(D, function (q) {
            return q
          }) || []
        )
      },
      only: function (D) {
        if (!te(D))
          throw Error("React.Children.only expected to receive a single React element child.")
        return D
      },
    }
  return (
    (we.Activity = b),
    (we.Children = fe),
    (we.Component = w),
    (we.Fragment = l),
    (we.Profiler = s),
    (we.PureComponent = O),
    (we.StrictMode = i),
    (we.Suspense = m),
    (we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U),
    (we.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (D) {
        return U.H.useMemoCache(D)
      },
    }),
    (we.cache = function (D) {
      return function () {
        return D.apply(null, arguments)
      }
    }),
    (we.cacheSignal = function () {
      return null
    }),
    (we.cloneElement = function (D, q, ae) {
      if (D == null) throw Error("The argument must be a React element, but you passed " + D + ".")
      var se = x({}, D.props),
        ue = D.key
      if (q != null)
        for (le in (q.key !== void 0 && (ue = "" + q.key), q))
          !H.call(q, le) ||
            le === "key" ||
            le === "__self" ||
            le === "__source" ||
            (le === "ref" && q.ref === void 0) ||
            (se[le] = q[le])
      var le = arguments.length - 2
      if (le === 1) se.children = ae
      else if (1 < le) {
        for (var de = Array(le), Be = 0; Be < le; Be++) de[Be] = arguments[Be + 2]
        se.children = de
      }
      return X(D.type, ue, se)
    }),
    (we.createContext = function (D) {
      return (
        (D = {
          $$typeof: d,
          _currentValue: D,
          _currentValue2: D,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (D.Provider = D),
        (D.Consumer = { $$typeof: c, _context: D }),
        D
      )
    }),
    (we.createElement = function (D, q, ae) {
      var se,
        ue = {},
        le = null
      if (q != null)
        for (se in (q.key !== void 0 && (le = "" + q.key), q))
          H.call(q, se) && se !== "key" && se !== "__self" && se !== "__source" && (ue[se] = q[se])
      var de = arguments.length - 2
      if (de === 1) ue.children = ae
      else if (1 < de) {
        for (var Be = Array(de), Se = 0; Se < de; Se++) Be[Se] = arguments[Se + 2]
        ue.children = Be
      }
      if (D && D.defaultProps)
        for (se in ((de = D.defaultProps), de)) ue[se] === void 0 && (ue[se] = de[se])
      return X(D, le, ue)
    }),
    (we.createRef = function () {
      return { current: null }
    }),
    (we.forwardRef = function (D) {
      return { $$typeof: p, render: D }
    }),
    (we.isValidElement = te),
    (we.lazy = function (D) {
      return { $$typeof: v, _payload: { _status: -1, _result: D }, _init: re }
    }),
    (we.memo = function (D, q) {
      return { $$typeof: h, type: D, compare: q === void 0 ? null : q }
    }),
    (we.startTransition = function (D) {
      var q = U.T,
        ae = {}
      U.T = ae
      try {
        var se = D(),
          ue = U.S
        ;(ue !== null && ue(ae, se),
          typeof se == "object" && se !== null && typeof se.then == "function" && se.then(_, ne))
      } catch (le) {
        ne(le)
      } finally {
        ;(q !== null && ae.types !== null && (q.types = ae.types), (U.T = q))
      }
    }),
    (we.unstable_useCacheRefresh = function () {
      return U.H.useCacheRefresh()
    }),
    (we.use = function (D) {
      return U.H.use(D)
    }),
    (we.useActionState = function (D, q, ae) {
      return U.H.useActionState(D, q, ae)
    }),
    (we.useCallback = function (D, q) {
      return U.H.useCallback(D, q)
    }),
    (we.useContext = function (D) {
      return U.H.useContext(D)
    }),
    (we.useDebugValue = function () {}),
    (we.useDeferredValue = function (D, q) {
      return U.H.useDeferredValue(D, q)
    }),
    (we.useEffect = function (D, q) {
      return U.H.useEffect(D, q)
    }),
    (we.useEffectEvent = function (D) {
      return U.H.useEffectEvent(D)
    }),
    (we.useId = function () {
      return U.H.useId()
    }),
    (we.useImperativeHandle = function (D, q, ae) {
      return U.H.useImperativeHandle(D, q, ae)
    }),
    (we.useInsertionEffect = function (D, q) {
      return U.H.useInsertionEffect(D, q)
    }),
    (we.useLayoutEffect = function (D, q) {
      return U.H.useLayoutEffect(D, q)
    }),
    (we.useMemo = function (D, q) {
      return U.H.useMemo(D, q)
    }),
    (we.useOptimistic = function (D, q) {
      return U.H.useOptimistic(D, q)
    }),
    (we.useReducer = function (D, q, ae) {
      return U.H.useReducer(D, q, ae)
    }),
    (we.useRef = function (D) {
      return U.H.useRef(D)
    }),
    (we.useState = function (D) {
      return U.H.useState(D)
    }),
    (we.useSyncExternalStore = function (D, q, ae) {
      return U.H.useSyncExternalStore(D, q, ae)
    }),
    (we.useTransition = function () {
      return U.H.useTransition()
    }),
    (we.version = "19.2.3"),
    we
  )
}
var Cy
function Pd() {
  return (Cy || ((Cy = 1), (Vf.exports = ex())), Vf.exports)
}
var y = Pd()
const ra = K0(y),
  hd = QS({ __proto__: null, default: ra }, [y])
var Gf = { exports: {} },
  Ll = {},
  Yf = { exports: {} },
  Ff = {}
var Ey
function tx() {
  return (
    Ey ||
      ((Ey = 1),
      (function (n) {
        function o(z, F) {
          var re = z.length
          z.push(F)
          e: for (; 0 < re; ) {
            var ne = (re - 1) >>> 1,
              fe = z[ne]
            if (0 < s(fe, F)) ((z[ne] = F), (z[re] = fe), (re = ne))
            else break e
          }
        }
        function l(z) {
          return z.length === 0 ? null : z[0]
        }
        function i(z) {
          if (z.length === 0) return null
          var F = z[0],
            re = z.pop()
          if (re !== F) {
            z[0] = re
            e: for (var ne = 0, fe = z.length, D = fe >>> 1; ne < D; ) {
              var q = 2 * (ne + 1) - 1,
                ae = z[q],
                se = q + 1,
                ue = z[se]
              if (0 > s(ae, re))
                se < fe && 0 > s(ue, ae)
                  ? ((z[ne] = ue), (z[se] = re), (ne = se))
                  : ((z[ne] = ae), (z[q] = re), (ne = q))
              else if (se < fe && 0 > s(ue, re)) ((z[ne] = ue), (z[se] = re), (ne = se))
              else break e
            }
          }
          return F
        }
        function s(z, F) {
          var re = z.sortIndex - F.sortIndex
          return re !== 0 ? re : z.id - F.id
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" && typeof performance.now == "function")
        ) {
          var c = performance
          n.unstable_now = function () {
            return c.now()
          }
        } else {
          var d = Date,
            p = d.now()
          n.unstable_now = function () {
            return d.now() - p
          }
        }
        var m = [],
          h = [],
          v = 1,
          b = null,
          R = 3,
          M = !1,
          T = !1,
          x = !1,
          A = !1,
          w = typeof setTimeout == "function" ? setTimeout : null,
          k = typeof clearTimeout == "function" ? clearTimeout : null,
          O = typeof setImmediate < "u" ? setImmediate : null
        function N(z) {
          for (var F = l(h); F !== null; ) {
            if (F.callback === null) i(h)
            else if (F.startTime <= z) (i(h), (F.sortIndex = F.expirationTime), o(m, F))
            else break
            F = l(h)
          }
        }
        function B(z) {
          if (((x = !1), N(z), !T))
            if (l(m) !== null) ((T = !0), _ || ((_ = !0), C()))
            else {
              var F = l(h)
              F !== null && Y(B, F.startTime - z)
            }
        }
        var _ = !1,
          U = -1,
          H = 5,
          X = -1
        function Q() {
          return A ? !0 : !(n.unstable_now() - X < H)
        }
        function te() {
          if (((A = !1), _)) {
            var z = n.unstable_now()
            X = z
            var F = !0
            try {
              e: {
                ;((T = !1), x && ((x = !1), k(U), (U = -1)), (M = !0))
                var re = R
                try {
                  t: {
                    for (N(z), b = l(m); b !== null && !(b.expirationTime > z && Q()); ) {
                      var ne = b.callback
                      if (typeof ne == "function") {
                        ;((b.callback = null), (R = b.priorityLevel))
                        var fe = ne(b.expirationTime <= z)
                        if (((z = n.unstable_now()), typeof fe == "function")) {
                          ;((b.callback = fe), N(z), (F = !0))
                          break t
                        }
                        ;(b === l(m) && i(m), N(z))
                      } else i(m)
                      b = l(m)
                    }
                    if (b !== null) F = !0
                    else {
                      var D = l(h)
                      ;(D !== null && Y(B, D.startTime - z), (F = !1))
                    }
                  }
                  break e
                } finally {
                  ;((b = null), (R = re), (M = !1))
                }
                F = void 0
              }
            } finally {
              F ? C() : (_ = !1)
            }
          }
        }
        var C
        if (typeof O == "function")
          C = function () {
            O(te)
          }
        else if (typeof MessageChannel < "u") {
          var W = new MessageChannel(),
            G = W.port2
          ;((W.port1.onmessage = te),
            (C = function () {
              G.postMessage(null)
            }))
        } else
          C = function () {
            w(te, 0)
          }
        function Y(z, F) {
          U = w(function () {
            z(n.unstable_now())
          }, F)
        }
        ;((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (z) {
            z.callback = null
          }),
          (n.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (H = 0 < z ? Math.floor(1e3 / z) : 5)
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return R
          }),
          (n.unstable_next = function (z) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var F = 3
                break
              default:
                F = R
            }
            var re = R
            R = F
            try {
              return z()
            } finally {
              R = re
            }
          }),
          (n.unstable_requestPaint = function () {
            A = !0
          }),
          (n.unstable_runWithPriority = function (z, F) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                z = 3
            }
            var re = R
            R = z
            try {
              return F()
            } finally {
              R = re
            }
          }),
          (n.unstable_scheduleCallback = function (z, F, re) {
            var ne = n.unstable_now()
            switch (
              (typeof re == "object" && re !== null
                ? ((re = re.delay), (re = typeof re == "number" && 0 < re ? ne + re : ne))
                : (re = ne),
              z)
            ) {
              case 1:
                var fe = -1
                break
              case 2:
                fe = 250
                break
              case 5:
                fe = 1073741823
                break
              case 4:
                fe = 1e4
                break
              default:
                fe = 5e3
            }
            return (
              (fe = re + fe),
              (z = {
                id: v++,
                callback: F,
                priorityLevel: z,
                startTime: re,
                expirationTime: fe,
                sortIndex: -1,
              }),
              re > ne
                ? ((z.sortIndex = re),
                  o(h, z),
                  l(m) === null && z === l(h) && (x ? (k(U), (U = -1)) : (x = !0), Y(B, re - ne)))
                : ((z.sortIndex = fe), o(m, z), T || M || ((T = !0), _ || ((_ = !0), C()))),
              z
            )
          }),
          (n.unstable_shouldYield = Q),
          (n.unstable_wrapCallback = function (z) {
            var F = R
            return function () {
              var re = R
              R = F
              try {
                return z.apply(this, arguments)
              } finally {
                R = re
              }
            }
          }))
      })(Ff)),
    Ff
  )
}
var Ty
function nx() {
  return (Ty || ((Ty = 1), (Yf.exports = tx())), Yf.exports)
}
var Xf = { exports: {} },
  Qt = {}
var Ry
function ax() {
  if (Ry) return Qt
  Ry = 1
  var n = Pd()
  function o(m) {
    var h = "https://react.dev/errors/" + m
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1])
      for (var v = 2; v < arguments.length; v++) h += "&args[]=" + encodeURIComponent(arguments[v])
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    )
  }
  function l() {}
  var i = {
      d: {
        f: l,
        r: function () {
          throw Error(o(522))
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal")
  function c(m, h, v) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: s,
      key: b == null ? null : "" + b,
      children: m,
      containerInfo: h,
      implementation: v,
    }
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
  function p(m, h) {
    if (m === "font") return ""
    if (typeof h == "string") return h === "use-credentials" ? h : ""
  }
  return (
    (Qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (Qt.createPortal = function (m, h) {
      var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)) throw Error(o(299))
      return c(m, h, null, v)
    }),
    (Qt.flushSync = function (m) {
      var h = d.T,
        v = i.p
      try {
        if (((d.T = null), (i.p = 2), m)) return m()
      } finally {
        ;((d.T = h), (i.p = v), i.d.f())
      }
    }),
    (Qt.preconnect = function (m, h) {
      typeof m == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h = typeof h == "string" ? (h === "use-credentials" ? h : "") : void 0))
          : (h = null),
        i.d.C(m, h))
    }),
    (Qt.prefetchDNS = function (m) {
      typeof m == "string" && i.d.D(m)
    }),
    (Qt.preinit = function (m, h) {
      if (typeof m == "string" && h && typeof h.as == "string") {
        var v = h.as,
          b = p(v, h.crossOrigin),
          R = typeof h.integrity == "string" ? h.integrity : void 0,
          M = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0
        v === "style"
          ? i.d.S(m, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: b,
              integrity: R,
              fetchPriority: M,
            })
          : v === "script" &&
            i.d.X(m, {
              crossOrigin: b,
              integrity: R,
              fetchPriority: M,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            })
      }
    }),
    (Qt.preinitModule = function (m, h) {
      if (typeof m == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var v = p(h.as, h.crossOrigin)
            i.d.M(m, {
              crossOrigin: v,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            })
          }
        } else h == null && i.d.M(m)
    }),
    (Qt.preload = function (m, h) {
      if (typeof m == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
        var v = h.as,
          b = p(v, h.crossOrigin)
        i.d.L(m, v, {
          crossOrigin: b,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        })
      }
    }),
    (Qt.preloadModule = function (m, h) {
      if (typeof m == "string")
        if (h) {
          var v = p(h.as, h.crossOrigin)
          i.d.m(m, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: v,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          })
        } else i.d.m(m)
    }),
    (Qt.requestFormReset = function (m) {
      i.d.r(m)
    }),
    (Qt.unstable_batchedUpdates = function (m, h) {
      return m(h)
    }),
    (Qt.useFormState = function (m, h, v) {
      return d.H.useFormState(m, h, v)
    }),
    (Qt.useFormStatus = function () {
      return d.H.useHostTransitionStatus()
    }),
    (Qt.version = "19.2.3"),
    Qt
  )
}
var My
function W0() {
  if (My) return Xf.exports
  My = 1
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
      } catch (o) {
        console.error(o)
      }
  }
  return (n(), (Xf.exports = ax()), Xf.exports)
}
var Ay
function ox() {
  if (Ay) return Ll
  Ay = 1
  var n = nx(),
    o = Pd(),
    l = W0()
  function i(e) {
    var t = "https://react.dev/errors/" + e
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1])
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a])
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    )
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
  }
  function c(e) {
    var t = e,
      a = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      e = t
      do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return))
      while (e)
    }
    return t.tag === 3 ? a : null
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated
    }
    return null
  }
  function p(e) {
    if (e.tag === 31) {
      var t = e.memoizedState
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated
    }
    return null
  }
  function m(e) {
    if (c(e) !== e) throw Error(i(188))
  }
  function h(e) {
    var t = e.alternate
    if (!t) {
      if (((t = c(e)), t === null)) throw Error(i(188))
      return t !== e ? null : e
    }
    for (var a = e, r = t; ; ) {
      var u = a.return
      if (u === null) break
      var f = u.alternate
      if (f === null) {
        if (((r = u.return), r !== null)) {
          a = r
          continue
        }
        break
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === a) return (m(u), e)
          if (f === r) return (m(u), t)
          f = f.sibling
        }
        throw Error(i(188))
      }
      if (a.return !== r.return) ((a = u), (r = f))
      else {
        for (var g = !1, S = u.child; S; ) {
          if (S === a) {
            ;((g = !0), (a = u), (r = f))
            break
          }
          if (S === r) {
            ;((g = !0), (r = u), (a = f))
            break
          }
          S = S.sibling
        }
        if (!g) {
          for (S = f.child; S; ) {
            if (S === a) {
              ;((g = !0), (a = f), (r = u))
              break
            }
            if (S === r) {
              ;((g = !0), (r = f), (a = u))
              break
            }
            S = S.sibling
          }
          if (!g) throw Error(i(189))
        }
      }
      if (a.alternate !== r) throw Error(i(190))
    }
    if (a.tag !== 3) throw Error(i(188))
    return a.stateNode.current === a ? e : t
  }
  function v(e) {
    var t = e.tag
    if (t === 5 || t === 26 || t === 27 || t === 6) return e
    for (e = e.child; e !== null; ) {
      if (((t = v(e)), t !== null)) return t
      e = e.sibling
    }
    return null
  }
  var b = Object.assign,
    R = Symbol.for("react.element"),
    M = Symbol.for("react.transitional.element"),
    T = Symbol.for("react.portal"),
    x = Symbol.for("react.fragment"),
    A = Symbol.for("react.strict_mode"),
    w = Symbol.for("react.profiler"),
    k = Symbol.for("react.consumer"),
    O = Symbol.for("react.context"),
    N = Symbol.for("react.forward_ref"),
    B = Symbol.for("react.suspense"),
    _ = Symbol.for("react.suspense_list"),
    U = Symbol.for("react.memo"),
    H = Symbol.for("react.lazy"),
    X = Symbol.for("react.activity"),
    Q = Symbol.for("react.memo_cache_sentinel"),
    te = Symbol.iterator
  function C(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (te && e[te]) || e["@@iterator"]), typeof e == "function" ? e : null)
  }
  var W = Symbol.for("react.client.reference")
  function G(e) {
    if (e == null) return null
    if (typeof e == "function") return e.$$typeof === W ? null : e.displayName || e.name || null
    if (typeof e == "string") return e
    switch (e) {
      case x:
        return "Fragment"
      case w:
        return "Profiler"
      case A:
        return "StrictMode"
      case B:
        return "Suspense"
      case _:
        return "SuspenseList"
      case X:
        return "Activity"
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case T:
          return "Portal"
        case O:
          return e.displayName || "Context"
        case k:
          return (e._context.displayName || "Context") + ".Consumer"
        case N:
          var t = e.render
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          )
        case U:
          return ((t = e.displayName || null), t !== null ? t : G(e.type) || "Memo")
        case H:
          ;((t = e._payload), (e = e._init))
          try {
            return G(e(t))
          } catch {}
      }
    return null
  }
  var Y = Array.isArray,
    z = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    re = { pending: !1, data: null, method: null, action: null },
    ne = [],
    fe = -1
  function D(e) {
    return { current: e }
  }
  function q(e) {
    0 > fe || ((e.current = ne[fe]), (ne[fe] = null), fe--)
  }
  function ae(e, t) {
    ;(fe++, (ne[fe] = e.current), (e.current = t))
  }
  var se = D(null),
    ue = D(null),
    le = D(null),
    de = D(null)
  function Be(e, t) {
    switch ((ae(le, t), ae(ue, e), ae(se, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Ig(e) : 0
        break
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = Ig(t)), (e = qg(t, e)))
        else
          switch (e) {
            case "svg":
              e = 1
              break
            case "math":
              e = 2
              break
            default:
              e = 0
          }
    }
    ;(q(se), ae(se, e))
  }
  function Se() {
    ;(q(se), q(ue), q(le))
  }
  function be(e) {
    e.memoizedState !== null && ae(de, e)
    var t = se.current,
      a = qg(t, e.type)
    t !== a && (ae(ue, e), ae(se, a))
  }
  function ze(e) {
    ;(ue.current === e && (q(se), q(ue)), de.current === e && (q(de), (Dl._currentValue = re)))
  }
  var $e, pt
  function Ee(e) {
    if ($e === void 0)
      try {
        throw Error()
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/)
        ;(($e = (t && t[1]) || ""),
          (pt =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""))
      }
    return (
      `
` +
      $e +
      e +
      pt
    )
  }
  var me = !1
  function Ze(e, t) {
    if (!e || me) return ""
    me = !0
    var a = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      var r = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var oe = function () {
                throw Error()
              }
              if (
                (Object.defineProperty(oe.prototype, "props", {
                  set: function () {
                    throw Error()
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(oe, [])
                } catch (K) {
                  var V = K
                }
                Reflect.construct(e, [], oe)
              } else {
                try {
                  oe.call()
                } catch (K) {
                  V = K
                }
                e.call(oe.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (K) {
                V = K
              }
              ;(oe = e()) && typeof oe.catch == "function" && oe.catch(function () {})
            }
          } catch (K) {
            if (K && V && typeof K.stack == "string") return [K.stack, V.stack]
          }
          return [null, null]
        },
      }
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot"
      var u = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name")
      u &&
        u.configurable &&
        Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        })
      var f = r.DetermineComponentFrameRoot(),
        g = f[0],
        S = f[1]
      if (g && S) {
        var j = g.split(`
`),
          I = S.split(`
`)
        for (u = r = 0; r < j.length && !j[r].includes("DetermineComponentFrameRoot"); ) r++
        for (; u < I.length && !I[u].includes("DetermineComponentFrameRoot"); ) u++
        if (r === j.length || u === I.length)
          for (r = j.length - 1, u = I.length - 1; 1 <= r && 0 <= u && j[r] !== I[u]; ) u--
        for (; 1 <= r && 0 <= u; r--, u--)
          if (j[r] !== I[u]) {
            if (r !== 1 || u !== 1)
              do
                if ((r--, u--, 0 > u || j[r] !== I[u])) {
                  var Z =
                    `
` + j[r].replace(" at new ", " at ")
                  return (
                    e.displayName &&
                      Z.includes("<anonymous>") &&
                      (Z = Z.replace("<anonymous>", e.displayName)),
                    Z
                  )
                }
              while (1 <= r && 0 <= u)
            break
          }
      }
    } finally {
      ;((me = !1), (Error.prepareStackTrace = a))
    }
    return (a = e ? e.displayName || e.name : "") ? Ee(a) : ""
  }
  function Ve(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ee(e.type)
      case 16:
        return Ee("Lazy")
      case 13:
        return e.child !== t && t !== null ? Ee("Suspense Fallback") : Ee("Suspense")
      case 19:
        return Ee("SuspenseList")
      case 0:
      case 15:
        return Ze(e.type, !1)
      case 11:
        return Ze(e.type.render, !1)
      case 1:
        return Ze(e.type, !0)
      case 31:
        return Ee("Activity")
      default:
        return ""
    }
  }
  function Ue(e) {
    try {
      var t = "",
        a = null
      do ((t += Ve(e, a)), (a = e), (e = e.return))
      while (e)
      return t
    } catch (r) {
      return (
        `
Error generating stack: ` +
        r.message +
        `
` +
        r.stack
      )
    }
  }
  var Xe = Object.prototype.hasOwnProperty,
    St = n.unstable_scheduleCallback,
    ut = n.unstable_cancelCallback,
    ye = n.unstable_shouldYield,
    _n = n.unstable_requestPaint,
    He = n.unstable_now,
    ua = n.unstable_getCurrentPriorityLevel,
    yt = n.unstable_ImmediatePriority,
    Ge = n.unstable_UserBlockingPriority,
    Ct = n.unstable_NormalPriority,
    _t = n.unstable_LowPriority,
    fn = n.unstable_IdlePriority,
    ct = n.log,
    Ln = n.unstable_setDisableYieldValue,
    xn = null,
    qt = null
  function Kn(e) {
    if ((typeof ct == "function" && Ln(e), qt && typeof qt.setStrictMode == "function"))
      try {
        qt.setStrictMode(xn, e)
      } catch {}
  }
  var Wt = Math.clz32 ? Math.clz32 : Lt,
    xe = Math.log,
    ft = Math.LN2
  function Lt(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((xe(e) / ft) | 0)) | 0)
  }
  var $n = 256,
    fo = 262144,
    yi = 4194304
  function po(e) {
    var t = e & 42
    if (t !== 0) return t
    switch (e & -e) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
        return 64
      case 128:
        return 128
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560
      case 67108864:
        return 67108864
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 0
      default:
        return e
    }
  }
  function vi(e, t, a) {
    var r = e.pendingLanes
    if (r === 0) return 0
    var u = 0,
      f = e.suspendedLanes,
      g = e.pingedLanes
    e = e.warmLanes
    var S = r & 134217727
    return (
      S !== 0
        ? ((r = S & ~f),
          r !== 0
            ? (u = po(r))
            : ((g &= S), g !== 0 ? (u = po(g)) : a || ((a = S & ~e), a !== 0 && (u = po(a)))))
        : ((S = r & ~f),
          S !== 0
            ? (u = po(S))
            : g !== 0
              ? (u = po(g))
              : a || ((a = r & ~e), a !== 0 && (u = po(a)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & f) === 0 &&
            ((f = u & -u), (a = t & -t), f >= a || (f === 32 && (a & 4194048) !== 0))
          ? t
          : u
    )
  }
  function Gr(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
  }
  function $b(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function Ep() {
    var e = yi
    return ((yi <<= 1), (yi & 62914560) === 0 && (yi = 4194304), e)
  }
  function Ou(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e)
    return t
  }
  function Yr(e, t) {
    ;((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)))
  }
  function Ub(e, t, a, r, u, f) {
    var g = e.pendingLanes
    ;((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0))
    var S = e.entanglements,
      j = e.expirationTimes,
      I = e.hiddenUpdates
    for (a = g & ~a; 0 < a; ) {
      var Z = 31 - Wt(a),
        oe = 1 << Z
      ;((S[Z] = 0), (j[Z] = -1))
      var V = I[Z]
      if (V !== null)
        for (I[Z] = null, Z = 0; Z < V.length; Z++) {
          var K = V[Z]
          K !== null && (K.lane &= -536870913)
        }
      a &= ~oe
    }
    ;(r !== 0 && Tp(e, r, 0),
      f !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(g & ~t)))
  }
  function Tp(e, t, a) {
    ;((e.pendingLanes |= t), (e.suspendedLanes &= ~t))
    var r = 31 - Wt(t)
    ;((e.entangledLanes |= t),
      (e.entanglements[r] = e.entanglements[r] | 1073741824 | (a & 261930)))
  }
  function Rp(e, t) {
    var a = (e.entangledLanes |= t)
    for (e = e.entanglements; a; ) {
      var r = 31 - Wt(a),
        u = 1 << r
      ;((u & t) | (e[r] & t) && (e[r] |= t), (a &= ~u))
    }
  }
  function Mp(e, t) {
    var a = t & -t
    return ((a = (a & 42) !== 0 ? 1 : Nu(a)), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a)
  }
  function Nu(e) {
    switch (e) {
      case 2:
        e = 1
        break
      case 8:
        e = 4
        break
      case 32:
        e = 16
        break
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128
        break
      case 268435456:
        e = 134217728
        break
      default:
        e = 0
    }
    return e
  }
  function Du(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2)
  }
  function Ap() {
    var e = F.p
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : dy(e.type))
  }
  function wp(e, t) {
    var a = F.p
    try {
      return ((F.p = e), t())
    } finally {
      F.p = a
    }
  }
  var La = Math.random().toString(36).slice(2),
    Vt = "__reactFiber$" + La,
    nn = "__reactProps$" + La,
    Ho = "__reactContainer$" + La,
    Bu = "__reactEvents$" + La,
    Hb = "__reactListeners$" + La,
    Pb = "__reactHandles$" + La,
    zp = "__reactResources$" + La,
    Fr = "__reactMarker$" + La
  function ju(e) {
    ;(delete e[Vt], delete e[nn], delete e[Bu], delete e[Hb], delete e[Pb])
  }
  function Po(e) {
    var t = e[Vt]
    if (t) return t
    for (var a = e.parentNode; a; ) {
      if ((t = a[Ho] || a[Vt])) {
        if (((a = t.alternate), t.child !== null || (a !== null && a.child !== null)))
          for (e = Wg(e); e !== null; ) {
            if ((a = e[Vt])) return a
            e = Wg(e)
          }
        return t
      }
      ;((e = a), (a = e.parentNode))
    }
    return null
  }
  function Io(e) {
    if ((e = e[Vt] || e[Ho])) {
      var t = e.tag
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e
    }
    return null
  }
  function Xr(e) {
    var t = e.tag
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode
    throw Error(i(33))
  }
  function qo(e) {
    var t = e[zp]
    return (t || (t = e[zp] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t)
  }
  function Ht(e) {
    e[Fr] = !0
  }
  var Op = new Set(),
    Np = {}
  function mo(e, t) {
    ;(Vo(e, t), Vo(e + "Capture", t))
  }
  function Vo(e, t) {
    for (Np[e] = t, e = 0; e < t.length; e++) Op.add(t[e])
  }
  var Ib = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Dp = {},
    Bp = {}
  function qb(e) {
    return Xe.call(Bp, e)
      ? !0
      : Xe.call(Dp, e)
        ? !1
        : Ib.test(e)
          ? (Bp[e] = !0)
          : ((Dp[e] = !0), !1)
  }
  function bi(e, t, a) {
    if (qb(t))
      if (a === null) e.removeAttribute(t)
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t)
            return
          case "boolean":
            var r = t.toLowerCase().slice(0, 5)
            if (r !== "data-" && r !== "aria-") {
              e.removeAttribute(t)
              return
            }
        }
        e.setAttribute(t, "" + a)
      }
  }
  function Si(e, t, a) {
    if (a === null) e.removeAttribute(t)
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t)
          return
      }
      e.setAttribute(t, "" + a)
    }
  }
  function ca(e, t, a, r) {
    if (r === null) e.removeAttribute(a)
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a)
          return
      }
      e.setAttributeNS(t, a, "" + r)
    }
  }
  function Cn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e
      case "object":
        return e
      default:
        return ""
    }
  }
  function jp(e) {
    var t = e.type
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
  }
  function Vb(e, t, a) {
    var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var u = r.get,
        f = r.set
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this)
          },
          set: function (g) {
            ;((a = "" + g), f.call(this, g))
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return a
          },
          setValue: function (g) {
            a = "" + g
          },
          stopTracking: function () {
            ;((e._valueTracker = null), delete e[t])
          },
        }
      )
    }
  }
  function ku(e) {
    if (!e._valueTracker) {
      var t = jp(e) ? "checked" : "value"
      e._valueTracker = Vb(e, t, "" + e[t])
    }
  }
  function kp(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var a = t.getValue(),
      r = ""
    return (
      e && (r = jp(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== a ? (t.setValue(e), !0) : !1
    )
  }
  function xi(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  var Gb = /[\n"\\]/g
  function En(e) {
    return e.replace(Gb, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " "
    })
  }
  function _u(e, t, a, r, u, f, g, S) {
    ;((e.name = ""),
      g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean"
        ? (e.type = g)
        : e.removeAttribute("type"),
      t != null
        ? g === "number"
          ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + Cn(t))
          : e.value !== "" + Cn(t) && (e.value = "" + Cn(t))
        : (g !== "submit" && g !== "reset") || e.removeAttribute("value"),
      t != null
        ? Lu(e, g, Cn(t))
        : a != null
          ? Lu(e, g, Cn(a))
          : r != null && e.removeAttribute("value"),
      u == null && f != null && (e.defaultChecked = !!f),
      u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean"
        ? (e.name = "" + Cn(S))
        : e.removeAttribute("name"))
  }
  function _p(e, t, a, r, u, f, g, S) {
    if (
      (f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.type = f),
      t != null || a != null)
    ) {
      if (!((f !== "submit" && f !== "reset") || t != null)) {
        ku(e)
        return
      }
      ;((a = a != null ? "" + Cn(a) : ""),
        (t = t != null ? "" + Cn(t) : a),
        S || t === e.value || (e.value = t),
        (e.defaultValue = t))
    }
    ;((r = r ?? u),
      (r = typeof r != "function" && typeof r != "symbol" && !!r),
      (e.checked = S ? e.checked : !!r),
      (e.defaultChecked = !!r),
      g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (e.name = g),
      ku(e))
  }
  function Lu(e, t, a) {
    ;(t === "number" && xi(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a)
  }
  function Go(e, t, a, r) {
    if (((e = e.options), t)) {
      t = {}
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0
      for (a = 0; a < e.length; a++)
        ((u = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== u && (e[a].selected = u),
          u && r && (e[a].defaultSelected = !0))
    } else {
      for (a = "" + Cn(a), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === a) {
          ;((e[u].selected = !0), r && (e[u].defaultSelected = !0))
          return
        }
        t !== null || e[u].disabled || (t = e[u])
      }
      t !== null && (t.selected = !0)
    }
  }
  function Lp(e, t, a) {
    if (t != null && ((t = "" + Cn(t)), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t)
      return
    }
    e.defaultValue = a != null ? "" + Cn(a) : ""
  }
  function $p(e, t, a, r) {
    if (t == null) {
      if (r != null) {
        if (a != null) throw Error(i(92))
        if (Y(r)) {
          if (1 < r.length) throw Error(i(93))
          r = r[0]
        }
        a = r
      }
      ;(a == null && (a = ""), (t = a))
    }
    ;((a = Cn(t)),
      (e.defaultValue = a),
      (r = e.textContent),
      r === a && r !== "" && r !== null && (e.value = r),
      ku(e))
  }
  function Yo(e, t) {
    if (t) {
      var a = e.firstChild
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t
        return
      }
    }
    e.textContent = t
  }
  var Yb = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  )
  function Up(e, t, a) {
    var r = t.indexOf("--") === 0
    a == null || typeof a == "boolean" || a === ""
      ? r
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : r
        ? e.setProperty(t, a)
        : typeof a != "number" || a === 0 || Yb.has(t)
          ? t === "float"
            ? (e.cssFloat = a)
            : (e[t] = ("" + a).trim())
          : (e[t] = a + "px")
  }
  function Hp(e, t, a) {
    if (t != null && typeof t != "object") throw Error(i(62))
    if (((e = e.style), a != null)) {
      for (var r in a)
        !a.hasOwnProperty(r) ||
          (t != null && t.hasOwnProperty(r)) ||
          (r.indexOf("--") === 0
            ? e.setProperty(r, "")
            : r === "float"
              ? (e.cssFloat = "")
              : (e[r] = ""))
      for (var u in t) ((r = t[u]), t.hasOwnProperty(u) && a[u] !== r && Up(e, u, r))
    } else for (var f in t) t.hasOwnProperty(f) && Up(e, f, t[f])
  }
  function $u(e) {
    if (e.indexOf("-") === -1) return !1
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1
      default:
        return !0
    }
  }
  var Fb = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Xb =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
  function Ci(e) {
    return Xb.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e
  }
  function fa() {}
  var Uu = null
  function Hu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    )
  }
  var Fo = null,
    Xo = null
  function Pp(e) {
    var t = Io(e)
    if (t && (e = t.stateNode)) {
      var a = e[nn] || null
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (_u(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode
            for (
              a = a.querySelectorAll('input[name="' + En("" + t) + '"][type="radio"]'), t = 0;
              t < a.length;
              t++
            ) {
              var r = a[t]
              if (r !== e && r.form === e.form) {
                var u = r[nn] || null
                if (!u) throw Error(i(90))
                _u(
                  r,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                )
              }
            }
            for (t = 0; t < a.length; t++) ((r = a[t]), r.form === e.form && kp(r))
          }
          break e
        case "textarea":
          Lp(e, a.value, a.defaultValue)
          break e
        case "select":
          ;((t = a.value), t != null && Go(e, !!a.multiple, t, !1))
      }
    }
  }
  var Pu = !1
  function Ip(e, t, a) {
    if (Pu) return e(t, a)
    Pu = !0
    try {
      var r = e(t)
      return r
    } finally {
      if (
        ((Pu = !1),
        (Fo !== null || Xo !== null) &&
          (us(), Fo && ((t = Fo), (e = Xo), (Xo = Fo = null), Pp(t), e)))
      )
        for (t = 0; t < e.length; t++) Pp(e[t])
    }
  }
  function Kr(e, t) {
    var a = e.stateNode
    if (a === null) return null
    var r = a[nn] || null
    if (r === null) return null
    a = r[t]
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ;((r = !r.disabled) ||
          ((e = e.type),
          (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
          (e = !r))
        break e
      default:
        e = !1
    }
    if (e) return null
    if (a && typeof a != "function") throw Error(i(231, t, typeof a))
    return a
  }
  var da = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Iu = !1
  if (da)
    try {
      var Wr = {}
      ;(Object.defineProperty(Wr, "passive", {
        get: function () {
          Iu = !0
        },
      }),
        window.addEventListener("test", Wr, Wr),
        window.removeEventListener("test", Wr, Wr))
    } catch {
      Iu = !1
    }
  var $a = null,
    qu = null,
    Ei = null
  function qp() {
    if (Ei) return Ei
    var e,
      t = qu,
      a = t.length,
      r,
      u = "value" in $a ? $a.value : $a.textContent,
      f = u.length
    for (e = 0; e < a && t[e] === u[e]; e++);
    var g = a - e
    for (r = 1; r <= g && t[a - r] === u[f - r]; r++);
    return (Ei = u.slice(e, 1 < r ? 1 - r : void 0))
  }
  function Ti(e) {
    var t = e.keyCode
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    )
  }
  function Ri() {
    return !0
  }
  function Vp() {
    return !1
  }
  function an(e) {
    function t(a, r, u, f, g) {
      ;((this._reactName = a),
        (this._targetInst = u),
        (this.type = r),
        (this.nativeEvent = f),
        (this.target = g),
        (this.currentTarget = null))
      for (var S in e) e.hasOwnProperty(S) && ((a = e[S]), (this[S] = a ? a(f) : f[S]))
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? Ri
          : Vp),
        (this.isPropagationStopped = Vp),
        this
      )
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var a = this.nativeEvent
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Ri))
        },
        stopPropagation: function () {
          var a = this.nativeEvent
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Ri))
        },
        persist: function () {},
        isPersistent: Ri,
      }),
      t
    )
  }
  var ho = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Mi = an(ho),
    Qr = b({}, ho, { view: 0, detail: 0 }),
    Kb = an(Qr),
    Vu,
    Gu,
    Zr,
    Ai = b({}, Qr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Fu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Zr &&
              (Zr && e.type === "mousemove"
                ? ((Vu = e.screenX - Zr.screenX), (Gu = e.screenY - Zr.screenY))
                : (Gu = Vu = 0),
              (Zr = e)),
            Vu)
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Gu
      },
    }),
    Gp = an(Ai),
    Wb = b({}, Ai, { dataTransfer: 0 }),
    Qb = an(Wb),
    Zb = b({}, Qr, { relatedTarget: 0 }),
    Yu = an(Zb),
    Jb = b({}, ho, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    e1 = an(Jb),
    t1 = b({}, ho, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
      },
    }),
    n1 = an(t1),
    a1 = b({}, ho, { data: 0 }),
    Yp = an(a1),
    o1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    r1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    l1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }
  function i1(e) {
    var t = this.nativeEvent
    return t.getModifierState ? t.getModifierState(e) : (e = l1[e]) ? !!t[e] : !1
  }
  function Fu() {
    return i1
  }
  var s1 = b({}, Qr, {
      key: function (e) {
        if (e.key) {
          var t = o1[e.key] || e.key
          if (t !== "Unidentified") return t
        }
        return e.type === "keypress"
          ? ((e = Ti(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? r1[e.keyCode] || "Unidentified"
            : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Fu,
      charCode: function (e) {
        return e.type === "keypress" ? Ti(e) : 0
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ti(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0
      },
    }),
    u1 = an(s1),
    c1 = b({}, Ai, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Fp = an(c1),
    f1 = b({}, Qr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fu,
    }),
    d1 = an(f1),
    p1 = b({}, ho, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    m1 = an(p1),
    h1 = b({}, Ai, {
      deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    g1 = an(h1),
    y1 = b({}, ho, { newState: 0, oldState: 0 }),
    v1 = an(y1),
    b1 = [9, 13, 27, 32],
    Xu = da && "CompositionEvent" in window,
    Jr = null
  da && "documentMode" in document && (Jr = document.documentMode)
  var S1 = da && "TextEvent" in window && !Jr,
    Xp = da && (!Xu || (Jr && 8 < Jr && 11 >= Jr)),
    Kp = " ",
    Wp = !1
  function Qp(e, t) {
    switch (e) {
      case "keyup":
        return b1.indexOf(t.keyCode) !== -1
      case "keydown":
        return t.keyCode !== 229
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0
      default:
        return !1
    }
  }
  function Zp(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null)
  }
  var Ko = !1
  function x1(e, t) {
    switch (e) {
      case "compositionend":
        return Zp(t)
      case "keypress":
        return t.which !== 32 ? null : ((Wp = !0), Kp)
      case "textInput":
        return ((e = t.data), e === Kp && Wp ? null : e)
      default:
        return null
    }
  }
  function C1(e, t) {
    if (Ko)
      return e === "compositionend" || (!Xu && Qp(e, t))
        ? ((e = qp()), (Ei = qu = $a = null), (Ko = !1), e)
        : null
    switch (e) {
      case "paste":
        return null
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case "compositionend":
        return Xp && t.locale !== "ko" ? null : t.data
      default:
        return null
    }
  }
  var E1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  }
  function Jp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === "input" ? !!E1[e.type] : t === "textarea"
  }
  function em(e, t, a, r) {
    ;(Fo ? (Xo ? Xo.push(r) : (Xo = [r])) : (Fo = r),
      (t = gs(t, "onChange")),
      0 < t.length &&
        ((a = new Mi("onChange", "change", null, a, r)), e.push({ event: a, listeners: t })))
  }
  var el = null,
    tl = null
  function T1(e) {
    _g(e, 0)
  }
  function wi(e) {
    var t = Xr(e)
    if (kp(t)) return e
  }
  function tm(e, t) {
    if (e === "change") return t
  }
  var nm = !1
  if (da) {
    var Ku
    if (da) {
      var Wu = "oninput" in document
      if (!Wu) {
        var am = document.createElement("div")
        ;(am.setAttribute("oninput", "return;"), (Wu = typeof am.oninput == "function"))
      }
      Ku = Wu
    } else Ku = !1
    nm = Ku && (!document.documentMode || 9 < document.documentMode)
  }
  function om() {
    el && (el.detachEvent("onpropertychange", rm), (tl = el = null))
  }
  function rm(e) {
    if (e.propertyName === "value" && wi(tl)) {
      var t = []
      ;(em(t, tl, e, Hu(e)), Ip(T1, t))
    }
  }
  function R1(e, t, a) {
    e === "focusin"
      ? (om(), (el = t), (tl = a), el.attachEvent("onpropertychange", rm))
      : e === "focusout" && om()
  }
  function M1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return wi(tl)
  }
  function A1(e, t) {
    if (e === "click") return wi(t)
  }
  function w1(e, t) {
    if (e === "input" || e === "change") return wi(t)
  }
  function z1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  }
  var dn = typeof Object.is == "function" ? Object.is : z1
  function nl(e, t) {
    if (dn(e, t)) return !0
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1
    var a = Object.keys(e),
      r = Object.keys(t)
    if (a.length !== r.length) return !1
    for (r = 0; r < a.length; r++) {
      var u = a[r]
      if (!Xe.call(t, u) || !dn(e[u], t[u])) return !1
    }
    return !0
  }
  function lm(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function im(e, t) {
    var a = lm(e)
    e = 0
    for (var r; a; ) {
      if (a.nodeType === 3) {
        if (((r = e + a.textContent.length), e <= t && r >= t)) return { node: a, offset: t - e }
        e = r
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling
            break e
          }
          a = a.parentNode
        }
        a = void 0
      }
      a = lm(a)
    }
  }
  function sm(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? sm(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1
  }
  function um(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window
    for (var t = xi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string"
      } catch {
        a = !1
      }
      if (a) e = t.contentWindow
      else break
      t = xi(e.document)
    }
    return t
  }
  function Qu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    )
  }
  var O1 = da && "documentMode" in document && 11 >= document.documentMode,
    Wo = null,
    Zu = null,
    al = null,
    Ju = !1
  function cm(e, t, a) {
    var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument
    Ju ||
      Wo == null ||
      Wo !== xi(r) ||
      ((r = Wo),
      "selectionStart" in r && Qu(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (al && nl(al, r)) ||
        ((al = r),
        (r = gs(Zu, "onSelect")),
        0 < r.length &&
          ((t = new Mi("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: r }),
          (t.target = Wo))))
  }
  function go(e, t) {
    var a = {}
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    )
  }
  var Qo = {
      animationend: go("Animation", "AnimationEnd"),
      animationiteration: go("Animation", "AnimationIteration"),
      animationstart: go("Animation", "AnimationStart"),
      transitionrun: go("Transition", "TransitionRun"),
      transitionstart: go("Transition", "TransitionStart"),
      transitioncancel: go("Transition", "TransitionCancel"),
      transitionend: go("Transition", "TransitionEnd"),
    },
    ec = {},
    fm = {}
  da &&
    ((fm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Qo.animationend.animation,
      delete Qo.animationiteration.animation,
      delete Qo.animationstart.animation),
    "TransitionEvent" in window || delete Qo.transitionend.transition)
  function yo(e) {
    if (ec[e]) return ec[e]
    if (!Qo[e]) return e
    var t = Qo[e],
      a
    for (a in t) if (t.hasOwnProperty(a) && a in fm) return (ec[e] = t[a])
    return e
  }
  var dm = yo("animationend"),
    pm = yo("animationiteration"),
    mm = yo("animationstart"),
    N1 = yo("transitionrun"),
    D1 = yo("transitionstart"),
    B1 = yo("transitioncancel"),
    hm = yo("transitionend"),
    gm = new Map(),
    tc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      )
  tc.push("scrollEnd")
  function Un(e, t) {
    ;(gm.set(e, t), mo(t, [e]))
  }
  var zi =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" && e !== null && typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              })
              if (!window.dispatchEvent(t)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", e)
              return
            }
            console.error(e)
          },
    Tn = [],
    Zo = 0,
    nc = 0
  function Oi() {
    for (var e = Zo, t = (nc = Zo = 0); t < e; ) {
      var a = Tn[t]
      Tn[t++] = null
      var r = Tn[t]
      Tn[t++] = null
      var u = Tn[t]
      Tn[t++] = null
      var f = Tn[t]
      if (((Tn[t++] = null), r !== null && u !== null)) {
        var g = r.pending
        ;(g === null ? (u.next = u) : ((u.next = g.next), (g.next = u)), (r.pending = u))
      }
      f !== 0 && ym(a, u, f)
    }
  }
  function Ni(e, t, a, r) {
    ;((Tn[Zo++] = e),
      (Tn[Zo++] = t),
      (Tn[Zo++] = a),
      (Tn[Zo++] = r),
      (nc |= r),
      (e.lanes |= r),
      (e = e.alternate),
      e !== null && (e.lanes |= r))
  }
  function ac(e, t, a, r) {
    return (Ni(e, t, a, r), Di(e))
  }
  function vo(e, t) {
    return (Ni(e, null, null, t), Di(e))
  }
  function ym(e, t, a) {
    e.lanes |= a
    var r = e.alternate
    r !== null && (r.lanes |= a)
    for (var u = !1, f = e.return; f !== null; )
      ((f.childLanes |= a),
        (r = f.alternate),
        r !== null && (r.childLanes |= a),
        f.tag === 22 && ((e = f.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = f),
        (f = f.return))
    return e.tag === 3
      ? ((f = e.stateNode),
        u &&
          t !== null &&
          ((u = 31 - Wt(a)),
          (e = f.hiddenUpdates),
          (r = e[u]),
          r === null ? (e[u] = [t]) : r.push(t),
          (t.lane = a | 536870912)),
        f)
      : null
  }
  function Di(e) {
    if (50 < Rl) throw ((Rl = 0), (pf = null), Error(i(185)))
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return))
    return e.tag === 3 ? e.stateNode : null
  }
  var Jo = {}
  function j1(e, t, a, r) {
    ;((this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null))
  }
  function pn(e, t, a, r) {
    return new j1(e, t, a, r)
  }
  function oc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent))
  }
  function pa(e, t) {
    var a = e.alternate
    return (
      a === null
        ? ((a = pn(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    )
  }
  function vm(e, t) {
    e.flags &= 65011714
    var a = e.alternate
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    )
  }
  function Bi(e, t, a, r, u, f) {
    var g = 0
    if (((r = e), typeof e == "function")) oc(e) && (g = 1)
    else if (typeof e == "string")
      g = US(e, a, se.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5
    else
      e: switch (e) {
        case X:
          return ((e = pn(31, a, t, u)), (e.elementType = X), (e.lanes = f), e)
        case x:
          return bo(a.children, u, f, t)
        case A:
          ;((g = 8), (u |= 24))
          break
        case w:
          return ((e = pn(12, a, t, u | 2)), (e.elementType = w), (e.lanes = f), e)
        case B:
          return ((e = pn(13, a, t, u)), (e.elementType = B), (e.lanes = f), e)
        case _:
          return ((e = pn(19, a, t, u)), (e.elementType = _), (e.lanes = f), e)
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case O:
                g = 10
                break e
              case k:
                g = 9
                break e
              case N:
                g = 11
                break e
              case U:
                g = 14
                break e
              case H:
                ;((g = 16), (r = null))
                break e
            }
          ;((g = 29), (a = Error(i(130, e === null ? "null" : typeof e, ""))), (r = null))
      }
    return ((t = pn(g, a, t, u)), (t.elementType = e), (t.type = r), (t.lanes = f), t)
  }
  function bo(e, t, a, r) {
    return ((e = pn(7, e, r, t)), (e.lanes = a), e)
  }
  function rc(e, t, a) {
    return ((e = pn(6, e, null, t)), (e.lanes = a), e)
  }
  function bm(e) {
    var t = pn(18, null, null, 0)
    return ((t.stateNode = e), t)
  }
  function lc(e, t, a) {
    return (
      (t = pn(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    )
  }
  var Sm = new WeakMap()
  function Rn(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Sm.get(e)
      return a !== void 0 ? a : ((t = { value: e, source: t, stack: Ue(t) }), Sm.set(e, t), t)
    }
    return { value: e, source: t, stack: Ue(t) }
  }
  var er = [],
    tr = 0,
    ji = null,
    ol = 0,
    Mn = [],
    An = 0,
    Ua = null,
    Wn = 1,
    Qn = ""
  function ma(e, t) {
    ;((er[tr++] = ol), (er[tr++] = ji), (ji = e), (ol = t))
  }
  function xm(e, t, a) {
    ;((Mn[An++] = Wn), (Mn[An++] = Qn), (Mn[An++] = Ua), (Ua = e))
    var r = Wn
    e = Qn
    var u = 32 - Wt(r) - 1
    ;((r &= ~(1 << u)), (a += 1))
    var f = 32 - Wt(t) + u
    if (30 < f) {
      var g = u - (u % 5)
      ;((f = (r & ((1 << g) - 1)).toString(32)),
        (r >>= g),
        (u -= g),
        (Wn = (1 << (32 - Wt(t) + u)) | (a << u) | r),
        (Qn = f + e))
    } else ((Wn = (1 << f) | (a << u) | r), (Qn = e))
  }
  function ic(e) {
    e.return !== null && (ma(e, 1), xm(e, 1, 0))
  }
  function sc(e) {
    for (; e === ji; ) ((ji = er[--tr]), (er[tr] = null), (ol = er[--tr]), (er[tr] = null))
    for (; e === Ua; )
      ((Ua = Mn[--An]),
        (Mn[An] = null),
        (Qn = Mn[--An]),
        (Mn[An] = null),
        (Wn = Mn[--An]),
        (Mn[An] = null))
  }
  function Cm(e, t) {
    ;((Mn[An++] = Wn), (Mn[An++] = Qn), (Mn[An++] = Ua), (Wn = t.id), (Qn = t.overflow), (Ua = e))
  }
  var Gt = null,
    ht = null,
    qe = !1,
    Ha = null,
    wn = !1,
    uc = Error(i(519))
  function Pa(e) {
    var t = Error(
      i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")
    )
    throw (rl(Rn(t, e)), uc)
  }
  function Em(e) {
    var t = e.stateNode,
      a = e.type,
      r = e.memoizedProps
    switch (((t[Vt] = e), (t[nn] = r), a)) {
      case "dialog":
        ;(ke("cancel", t), ke("close", t))
        break
      case "iframe":
      case "object":
      case "embed":
        ke("load", t)
        break
      case "video":
      case "audio":
        for (a = 0; a < Al.length; a++) ke(Al[a], t)
        break
      case "source":
        ke("error", t)
        break
      case "img":
      case "image":
      case "link":
        ;(ke("error", t), ke("load", t))
        break
      case "details":
        ke("toggle", t)
        break
      case "input":
        ;(ke("invalid", t),
          _p(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0))
        break
      case "select":
        ke("invalid", t)
        break
      case "textarea":
        ;(ke("invalid", t), $p(t, r.value, r.defaultValue, r.children))
    }
    ;((a = r.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      r.suppressHydrationWarning === !0 ||
      Hg(t.textContent, a)
        ? (r.popover != null && (ke("beforetoggle", t), ke("toggle", t)),
          r.onScroll != null && ke("scroll", t),
          r.onScrollEnd != null && ke("scrollend", t),
          r.onClick != null && (t.onclick = fa),
          (t = !0))
        : (t = !1),
      t || Pa(e, !0))
  }
  function Tm(e) {
    for (Gt = e.return; Gt; )
      switch (Gt.tag) {
        case 5:
        case 31:
        case 13:
          wn = !1
          return
        case 27:
        case 3:
          wn = !0
          return
        default:
          Gt = Gt.return
      }
  }
  function nr(e) {
    if (e !== Gt) return !1
    if (!qe) return (Tm(e), (qe = !0), !1)
    var t = e.tag,
      a
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type), (a = !(a !== "form" && a !== "button") || wf(e.type, e.memoizedProps))),
        (a = !a)),
      a && ht && Pa(e),
      Tm(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317))
      ht = Kg(e)
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317))
      ht = Kg(e)
    } else
      t === 27
        ? ((t = ht), to(e.type) ? ((e = Bf), (Bf = null), (ht = e)) : (ht = t))
        : (ht = Gt ? On(e.stateNode.nextSibling) : null)
    return !0
  }
  function So() {
    ;((ht = Gt = null), (qe = !1))
  }
  function cc() {
    var e = Ha
    return (e !== null && (sn === null ? (sn = e) : sn.push.apply(sn, e), (Ha = null)), e)
  }
  function rl(e) {
    Ha === null ? (Ha = [e]) : Ha.push(e)
  }
  var fc = D(null),
    xo = null,
    ha = null
  function Ia(e, t, a) {
    ;(ae(fc, t._currentValue), (t._currentValue = a))
  }
  function ga(e) {
    ;((e._currentValue = fc.current), q(fc))
  }
  function dc(e, t, a) {
    for (; e !== null; ) {
      var r = e.alternate
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === a)
      )
        break
      e = e.return
    }
  }
  function pc(e, t, a, r) {
    var u = e.child
    for (u !== null && (u.return = e); u !== null; ) {
      var f = u.dependencies
      if (f !== null) {
        var g = u.child
        f = f.firstContext
        e: for (; f !== null; ) {
          var S = f
          f = u
          for (var j = 0; j < t.length; j++)
            if (S.context === t[j]) {
              ;((f.lanes |= a),
                (S = f.alternate),
                S !== null && (S.lanes |= a),
                dc(f.return, a, e),
                r || (g = null))
              break e
            }
          f = S.next
        }
      } else if (u.tag === 18) {
        if (((g = u.return), g === null)) throw Error(i(341))
        ;((g.lanes |= a), (f = g.alternate), f !== null && (f.lanes |= a), dc(g, a, e), (g = null))
      } else g = u.child
      if (g !== null) g.return = u
      else
        for (g = u; g !== null; ) {
          if (g === e) {
            g = null
            break
          }
          if (((u = g.sibling), u !== null)) {
            ;((u.return = g.return), (g = u))
            break
          }
          g = g.return
        }
      u = g
    }
  }
  function ar(e, t, a, r) {
    e = null
    for (var u = t, f = !1; u !== null; ) {
      if (!f) {
        if ((u.flags & 524288) !== 0) f = !0
        else if ((u.flags & 262144) !== 0) break
      }
      if (u.tag === 10) {
        var g = u.alternate
        if (g === null) throw Error(i(387))
        if (((g = g.memoizedProps), g !== null)) {
          var S = u.type
          dn(u.pendingProps.value, g.value) || (e !== null ? e.push(S) : (e = [S]))
        }
      } else if (u === de.current) {
        if (((g = u.alternate), g === null)) throw Error(i(387))
        g.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(Dl) : (e = [Dl]))
      }
      u = u.return
    }
    ;(e !== null && pc(t, e, a, r), (t.flags |= 262144))
  }
  function ki(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!dn(e.context._currentValue, e.memoizedValue)) return !0
      e = e.next
    }
    return !1
  }
  function Co(e) {
    ;((xo = e), (ha = null), (e = e.dependencies), e !== null && (e.firstContext = null))
  }
  function Yt(e) {
    return Rm(xo, e)
  }
  function _i(e, t) {
    return (xo === null && Co(e), Rm(e, t))
  }
  function Rm(e, t) {
    var a = t._currentValue
    if (((t = { context: t, memoizedValue: a, next: null }), ha === null)) {
      if (e === null) throw Error(i(308))
      ;((ha = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288))
    } else ha = ha.next = t
    return a
  }
  var k1 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, r) {
                  e.push(r)
                },
              })
            this.abort = function () {
              ;((t.aborted = !0),
                e.forEach(function (a) {
                  return a()
                }))
            }
          },
    _1 = n.unstable_scheduleCallback,
    L1 = n.unstable_NormalPriority,
    Ot = {
      $$typeof: O,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    }
  function mc() {
    return { controller: new k1(), data: new Map(), refCount: 0 }
  }
  function ll(e) {
    ;(e.refCount--,
      e.refCount === 0 &&
        _1(L1, function () {
          e.controller.abort()
        }))
  }
  var il = null,
    hc = 0,
    or = 0,
    rr = null
  function $1(e, t) {
    if (il === null) {
      var a = (il = [])
      ;((hc = 0),
        (or = bf()),
        (rr = {
          status: "pending",
          value: void 0,
          then: function (r) {
            a.push(r)
          },
        }))
    }
    return (hc++, t.then(Mm, Mm), t)
  }
  function Mm() {
    if (--hc === 0 && il !== null) {
      rr !== null && (rr.status = "fulfilled")
      var e = il
      ;((il = null), (or = 0), (rr = null))
      for (var t = 0; t < e.length; t++) (0, e[t])()
    }
  }
  function U1(e, t) {
    var a = [],
      r = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u)
        },
      }
    return (
      e.then(
        function () {
          ;((r.status = "fulfilled"), (r.value = t))
          for (var u = 0; u < a.length; u++) (0, a[u])(t)
        },
        function (u) {
          for (r.status = "rejected", r.reason = u, u = 0; u < a.length; u++) (0, a[u])(void 0)
        }
      ),
      r
    )
  }
  var Am = z.S
  z.S = function (e, t) {
    ;((cg = He()),
      typeof t == "object" && t !== null && typeof t.then == "function" && $1(e, t),
      Am !== null && Am(e, t))
  }
  var Eo = D(null)
  function gc() {
    var e = Eo.current
    return e !== null ? e : dt.pooledCache
  }
  function Li(e, t) {
    t === null ? ae(Eo, Eo.current) : ae(Eo, t.pool)
  }
  function wm() {
    var e = gc()
    return e === null ? null : { parent: Ot._currentValue, pool: e }
  }
  var lr = Error(i(460)),
    yc = Error(i(474)),
    $i = Error(i(542)),
    Ui = { then: function () {} }
  function zm(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected")
  }
  function Om(e, t, a) {
    switch (
      ((a = e[a]), a === void 0 ? e.push(t) : a !== t && (t.then(fa, fa), (t = a)), t.status)
    ) {
      case "fulfilled":
        return t.value
      case "rejected":
        throw ((e = t.reason), Dm(e), e)
      default:
        if (typeof t.status == "string") t.then(fa, fa)
        else {
          if (((e = dt), e !== null && 100 < e.shellSuspendCounter)) throw Error(i(482))
          ;((e = t),
            (e.status = "pending"),
            e.then(
              function (r) {
                if (t.status === "pending") {
                  var u = t
                  ;((u.status = "fulfilled"), (u.value = r))
                }
              },
              function (r) {
                if (t.status === "pending") {
                  var u = t
                  ;((u.status = "rejected"), (u.reason = r))
                }
              }
            ))
        }
        switch (t.status) {
          case "fulfilled":
            return t.value
          case "rejected":
            throw ((e = t.reason), Dm(e), e)
        }
        throw ((Ro = t), lr)
    }
  }
  function To(e) {
    try {
      var t = e._init
      return t(e._payload)
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? ((Ro = a), lr) : a
    }
  }
  var Ro = null
  function Nm() {
    if (Ro === null) throw Error(i(459))
    var e = Ro
    return ((Ro = null), e)
  }
  function Dm(e) {
    if (e === lr || e === $i) throw Error(i(483))
  }
  var ir = null,
    sl = 0
  function Hi(e) {
    var t = sl
    return ((sl += 1), ir === null && (ir = []), Om(ir, e, t))
  }
  function ul(e, t) {
    ;((t = t.props.ref), (e.ref = t !== void 0 ? t : null))
  }
  function Pi(e, t) {
    throw t.$$typeof === R
      ? Error(i(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          i(
            31,
            e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
          )
        ))
  }
  function Bm(e) {
    function t($, L) {
      if (e) {
        var P = $.deletions
        P === null ? (($.deletions = [L]), ($.flags |= 16)) : P.push(L)
      }
    }
    function a($, L) {
      if (!e) return null
      for (; L !== null; ) (t($, L), (L = L.sibling))
      return null
    }
    function r($) {
      for (var L = new Map(); $ !== null; )
        ($.key !== null ? L.set($.key, $) : L.set($.index, $), ($ = $.sibling))
      return L
    }
    function u($, L) {
      return (($ = pa($, L)), ($.index = 0), ($.sibling = null), $)
    }
    function f($, L, P) {
      return (
        ($.index = P),
        e
          ? ((P = $.alternate),
            P !== null
              ? ((P = P.index), P < L ? (($.flags |= 67108866), L) : P)
              : (($.flags |= 67108866), L))
          : (($.flags |= 1048576), L)
      )
    }
    function g($) {
      return (e && $.alternate === null && ($.flags |= 67108866), $)
    }
    function S($, L, P, ee) {
      return L === null || L.tag !== 6
        ? ((L = rc(P, $.mode, ee)), (L.return = $), L)
        : ((L = u(L, P)), (L.return = $), L)
    }
    function j($, L, P, ee) {
      var ve = P.type
      return ve === x
        ? Z($, L, P.props.children, ee, P.key)
        : L !== null &&
            (L.elementType === ve ||
              (typeof ve == "object" && ve !== null && ve.$$typeof === H && To(ve) === L.type))
          ? ((L = u(L, P.props)), ul(L, P), (L.return = $), L)
          : ((L = Bi(P.type, P.key, P.props, null, $.mode, ee)), ul(L, P), (L.return = $), L)
    }
    function I($, L, P, ee) {
      return L === null ||
        L.tag !== 4 ||
        L.stateNode.containerInfo !== P.containerInfo ||
        L.stateNode.implementation !== P.implementation
        ? ((L = lc(P, $.mode, ee)), (L.return = $), L)
        : ((L = u(L, P.children || [])), (L.return = $), L)
    }
    function Z($, L, P, ee, ve) {
      return L === null || L.tag !== 7
        ? ((L = bo(P, $.mode, ee, ve)), (L.return = $), L)
        : ((L = u(L, P)), (L.return = $), L)
    }
    function oe($, L, P) {
      if ((typeof L == "string" && L !== "") || typeof L == "number" || typeof L == "bigint")
        return ((L = rc("" + L, $.mode, P)), (L.return = $), L)
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case M:
            return ((P = Bi(L.type, L.key, L.props, null, $.mode, P)), ul(P, L), (P.return = $), P)
          case T:
            return ((L = lc(L, $.mode, P)), (L.return = $), L)
          case H:
            return ((L = To(L)), oe($, L, P))
        }
        if (Y(L) || C(L)) return ((L = bo(L, $.mode, P, null)), (L.return = $), L)
        if (typeof L.then == "function") return oe($, Hi(L), P)
        if (L.$$typeof === O) return oe($, _i($, L), P)
        Pi($, L)
      }
      return null
    }
    function V($, L, P, ee) {
      var ve = L !== null ? L.key : null
      if ((typeof P == "string" && P !== "") || typeof P == "number" || typeof P == "bigint")
        return ve !== null ? null : S($, L, "" + P, ee)
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case M:
            return P.key === ve ? j($, L, P, ee) : null
          case T:
            return P.key === ve ? I($, L, P, ee) : null
          case H:
            return ((P = To(P)), V($, L, P, ee))
        }
        if (Y(P) || C(P)) return ve !== null ? null : Z($, L, P, ee, null)
        if (typeof P.then == "function") return V($, L, Hi(P), ee)
        if (P.$$typeof === O) return V($, L, _i($, P), ee)
        Pi($, P)
      }
      return null
    }
    function K($, L, P, ee, ve) {
      if ((typeof ee == "string" && ee !== "") || typeof ee == "number" || typeof ee == "bigint")
        return (($ = $.get(P) || null), S(L, $, "" + ee, ve))
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case M:
            return (($ = $.get(ee.key === null ? P : ee.key) || null), j(L, $, ee, ve))
          case T:
            return (($ = $.get(ee.key === null ? P : ee.key) || null), I(L, $, ee, ve))
          case H:
            return ((ee = To(ee)), K($, L, P, ee, ve))
        }
        if (Y(ee) || C(ee)) return (($ = $.get(P) || null), Z(L, $, ee, ve, null))
        if (typeof ee.then == "function") return K($, L, P, Hi(ee), ve)
        if (ee.$$typeof === O) return K($, L, P, _i(L, ee), ve)
        Pi(L, ee)
      }
      return null
    }
    function he($, L, P, ee) {
      for (
        var ve = null, Ye = null, ge = L, Ne = (L = 0), Ie = null;
        ge !== null && Ne < P.length;
        Ne++
      ) {
        ge.index > Ne ? ((Ie = ge), (ge = null)) : (Ie = ge.sibling)
        var Fe = V($, ge, P[Ne], ee)
        if (Fe === null) {
          ge === null && (ge = Ie)
          break
        }
        ;(e && ge && Fe.alternate === null && t($, ge),
          (L = f(Fe, L, Ne)),
          Ye === null ? (ve = Fe) : (Ye.sibling = Fe),
          (Ye = Fe),
          (ge = Ie))
      }
      if (Ne === P.length) return (a($, ge), qe && ma($, Ne), ve)
      if (ge === null) {
        for (; Ne < P.length; Ne++)
          ((ge = oe($, P[Ne], ee)),
            ge !== null &&
              ((L = f(ge, L, Ne)), Ye === null ? (ve = ge) : (Ye.sibling = ge), (Ye = ge)))
        return (qe && ma($, Ne), ve)
      }
      for (ge = r(ge); Ne < P.length; Ne++)
        ((Ie = K(ge, $, Ne, P[Ne], ee)),
          Ie !== null &&
            (e && Ie.alternate !== null && ge.delete(Ie.key === null ? Ne : Ie.key),
            (L = f(Ie, L, Ne)),
            Ye === null ? (ve = Ie) : (Ye.sibling = Ie),
            (Ye = Ie)))
      return (
        e &&
          ge.forEach(function (lo) {
            return t($, lo)
          }),
        qe && ma($, Ne),
        ve
      )
    }
    function Ce($, L, P, ee) {
      if (P == null) throw Error(i(151))
      for (
        var ve = null, Ye = null, ge = L, Ne = (L = 0), Ie = null, Fe = P.next();
        ge !== null && !Fe.done;
        Ne++, Fe = P.next()
      ) {
        ge.index > Ne ? ((Ie = ge), (ge = null)) : (Ie = ge.sibling)
        var lo = V($, ge, Fe.value, ee)
        if (lo === null) {
          ge === null && (ge = Ie)
          break
        }
        ;(e && ge && lo.alternate === null && t($, ge),
          (L = f(lo, L, Ne)),
          Ye === null ? (ve = lo) : (Ye.sibling = lo),
          (Ye = lo),
          (ge = Ie))
      }
      if (Fe.done) return (a($, ge), qe && ma($, Ne), ve)
      if (ge === null) {
        for (; !Fe.done; Ne++, Fe = P.next())
          ((Fe = oe($, Fe.value, ee)),
            Fe !== null &&
              ((L = f(Fe, L, Ne)), Ye === null ? (ve = Fe) : (Ye.sibling = Fe), (Ye = Fe)))
        return (qe && ma($, Ne), ve)
      }
      for (ge = r(ge); !Fe.done; Ne++, Fe = P.next())
        ((Fe = K(ge, $, Ne, Fe.value, ee)),
          Fe !== null &&
            (e && Fe.alternate !== null && ge.delete(Fe.key === null ? Ne : Fe.key),
            (L = f(Fe, L, Ne)),
            Ye === null ? (ve = Fe) : (Ye.sibling = Fe),
            (Ye = Fe)))
      return (
        e &&
          ge.forEach(function (WS) {
            return t($, WS)
          }),
        qe && ma($, Ne),
        ve
      )
    }
    function it($, L, P, ee) {
      if (
        (typeof P == "object" &&
          P !== null &&
          P.type === x &&
          P.key === null &&
          (P = P.props.children),
        typeof P == "object" && P !== null)
      ) {
        switch (P.$$typeof) {
          case M:
            e: {
              for (var ve = P.key; L !== null; ) {
                if (L.key === ve) {
                  if (((ve = P.type), ve === x)) {
                    if (L.tag === 7) {
                      ;(a($, L.sibling), (ee = u(L, P.props.children)), (ee.return = $), ($ = ee))
                      break e
                    }
                  } else if (
                    L.elementType === ve ||
                    (typeof ve == "object" && ve !== null && ve.$$typeof === H && To(ve) === L.type)
                  ) {
                    ;(a($, L.sibling), (ee = u(L, P.props)), ul(ee, P), (ee.return = $), ($ = ee))
                    break e
                  }
                  a($, L)
                  break
                } else t($, L)
                L = L.sibling
              }
              P.type === x
                ? ((ee = bo(P.props.children, $.mode, ee, P.key)), (ee.return = $), ($ = ee))
                : ((ee = Bi(P.type, P.key, P.props, null, $.mode, ee)),
                  ul(ee, P),
                  (ee.return = $),
                  ($ = ee))
            }
            return g($)
          case T:
            e: {
              for (ve = P.key; L !== null; ) {
                if (L.key === ve)
                  if (
                    L.tag === 4 &&
                    L.stateNode.containerInfo === P.containerInfo &&
                    L.stateNode.implementation === P.implementation
                  ) {
                    ;(a($, L.sibling), (ee = u(L, P.children || [])), (ee.return = $), ($ = ee))
                    break e
                  } else {
                    a($, L)
                    break
                  }
                else t($, L)
                L = L.sibling
              }
              ;((ee = lc(P, $.mode, ee)), (ee.return = $), ($ = ee))
            }
            return g($)
          case H:
            return ((P = To(P)), it($, L, P, ee))
        }
        if (Y(P)) return he($, L, P, ee)
        if (C(P)) {
          if (((ve = C(P)), typeof ve != "function")) throw Error(i(150))
          return ((P = ve.call(P)), Ce($, L, P, ee))
        }
        if (typeof P.then == "function") return it($, L, Hi(P), ee)
        if (P.$$typeof === O) return it($, L, _i($, P), ee)
        Pi($, P)
      }
      return (typeof P == "string" && P !== "") || typeof P == "number" || typeof P == "bigint"
        ? ((P = "" + P),
          L !== null && L.tag === 6
            ? (a($, L.sibling), (ee = u(L, P)), (ee.return = $), ($ = ee))
            : (a($, L), (ee = rc(P, $.mode, ee)), (ee.return = $), ($ = ee)),
          g($))
        : a($, L)
    }
    return function ($, L, P, ee) {
      try {
        sl = 0
        var ve = it($, L, P, ee)
        return ((ir = null), ve)
      } catch (ge) {
        if (ge === lr || ge === $i) throw ge
        var Ye = pn(29, ge, null, $.mode)
        return ((Ye.lanes = ee), (Ye.return = $), Ye)
      }
    }
  }
  var Mo = Bm(!0),
    jm = Bm(!1),
    qa = !1
  function vc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    }
  }
  function bc(e, t) {
    ;((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }))
  }
  function Va(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null }
  }
  function Ga(e, t, a) {
    var r = e.updateQueue
    if (r === null) return null
    if (((r = r.shared), (Ke & 2) !== 0)) {
      var u = r.pending
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (r.pending = t),
        (t = Di(e)),
        ym(e, null, a),
        t
      )
    }
    return (Ni(e, r, t, a), Di(e))
  }
  function cl(e, t, a) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))) {
      var r = t.lanes
      ;((r &= e.pendingLanes), (a |= r), (t.lanes = a), Rp(e, a))
    }
  }
  function Sc(e, t) {
    var a = e.updateQueue,
      r = e.alternate
    if (r !== null && ((r = r.updateQueue), a === r)) {
      var u = null,
        f = null
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var g = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null }
          ;(f === null ? (u = f = g) : (f = f.next = g), (a = a.next))
        } while (a !== null)
        f === null ? (u = f = t) : (f = f.next = t)
      } else u = f = t
      ;((a = {
        baseState: r.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: r.shared,
        callbacks: r.callbacks,
      }),
        (e.updateQueue = a))
      return
    }
    ;((e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t))
  }
  var xc = !1
  function fl() {
    if (xc) {
      var e = rr
      if (e !== null) throw e
    }
  }
  function dl(e, t, a, r) {
    xc = !1
    var u = e.updateQueue
    qa = !1
    var f = u.firstBaseUpdate,
      g = u.lastBaseUpdate,
      S = u.shared.pending
    if (S !== null) {
      u.shared.pending = null
      var j = S,
        I = j.next
      ;((j.next = null), g === null ? (f = I) : (g.next = I), (g = j))
      var Z = e.alternate
      Z !== null &&
        ((Z = Z.updateQueue),
        (S = Z.lastBaseUpdate),
        S !== g && (S === null ? (Z.firstBaseUpdate = I) : (S.next = I), (Z.lastBaseUpdate = j)))
    }
    if (f !== null) {
      var oe = u.baseState
      ;((g = 0), (Z = I = j = null), (S = f))
      do {
        var V = S.lane & -536870913,
          K = V !== S.lane
        if (K ? (Pe & V) === V : (r & V) === V) {
          ;(V !== 0 && V === or && (xc = !0),
            Z !== null &&
              (Z = Z.next =
                { lane: 0, tag: S.tag, payload: S.payload, callback: null, next: null }))
          e: {
            var he = e,
              Ce = S
            V = t
            var it = a
            switch (Ce.tag) {
              case 1:
                if (((he = Ce.payload), typeof he == "function")) {
                  oe = he.call(it, oe, V)
                  break e
                }
                oe = he
                break e
              case 3:
                he.flags = (he.flags & -65537) | 128
              case 0:
                if (
                  ((he = Ce.payload),
                  (V = typeof he == "function" ? he.call(it, oe, V) : he),
                  V == null)
                )
                  break e
                oe = b({}, oe, V)
                break e
              case 2:
                qa = !0
            }
          }
          ;((V = S.callback),
            V !== null &&
              ((e.flags |= 64),
              K && (e.flags |= 8192),
              (K = u.callbacks),
              K === null ? (u.callbacks = [V]) : K.push(V)))
        } else
          ((K = { lane: V, tag: S.tag, payload: S.payload, callback: S.callback, next: null }),
            Z === null ? ((I = Z = K), (j = oe)) : (Z = Z.next = K),
            (g |= V))
        if (((S = S.next), S === null)) {
          if (((S = u.shared.pending), S === null)) break
          ;((K = S),
            (S = K.next),
            (K.next = null),
            (u.lastBaseUpdate = K),
            (u.shared.pending = null))
        }
      } while (!0)
      ;(Z === null && (j = oe),
        (u.baseState = j),
        (u.firstBaseUpdate = I),
        (u.lastBaseUpdate = Z),
        f === null && (u.shared.lanes = 0),
        (Wa |= g),
        (e.lanes = g),
        (e.memoizedState = oe))
    }
  }
  function km(e, t) {
    if (typeof e != "function") throw Error(i(191, e))
    e.call(t)
  }
  function _m(e, t) {
    var a = e.callbacks
    if (a !== null) for (e.callbacks = null, e = 0; e < a.length; e++) km(a[e], t)
  }
  var sr = D(null),
    Ii = D(0)
  function Lm(e, t) {
    ;((e = Ra), ae(Ii, e), ae(sr, t), (Ra = e | t.baseLanes))
  }
  function Cc() {
    ;(ae(Ii, Ra), ae(sr, sr.current))
  }
  function Ec() {
    ;((Ra = Ii.current), q(sr), q(Ii))
  }
  var mn = D(null),
    zn = null
  function Ya(e) {
    var t = e.alternate
    ;(ae(At, At.current & 1),
      ae(mn, e),
      zn === null && (t === null || sr.current !== null || t.memoizedState !== null) && (zn = e))
  }
  function Tc(e) {
    ;(ae(At, At.current), ae(mn, e), zn === null && (zn = e))
  }
  function $m(e) {
    e.tag === 22 ? (ae(At, At.current), ae(mn, e), zn === null && (zn = e)) : Fa()
  }
  function Fa() {
    ;(ae(At, At.current), ae(mn, mn.current))
  }
  function hn(e) {
    ;(q(mn), zn === e && (zn = null), q(At))
  }
  var At = D(0)
  function qi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState
        if (a !== null && ((a = a.dehydrated), a === null || Nf(a) || Df(a))) return t
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t
      } else if (t.child !== null) {
        ;((t.child.return = t), (t = t.child))
        continue
      }
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null
        t = t.return
      }
      ;((t.sibling.return = t.return), (t = t.sibling))
    }
    return null
  }
  var ya = 0,
    Oe = null,
    rt = null,
    Nt = null,
    Vi = !1,
    ur = !1,
    Ao = !1,
    Gi = 0,
    pl = 0,
    cr = null,
    H1 = 0
  function Et() {
    throw Error(i(321))
  }
  function Rc(e, t) {
    if (t === null) return !1
    for (var a = 0; a < t.length && a < e.length; a++) if (!dn(e[a], t[a])) return !1
    return !0
  }
  function Mc(e, t, a, r, u, f) {
    return (
      (ya = f),
      (Oe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (z.H = e === null || e.memoizedState === null ? xh : Pc),
      (Ao = !1),
      (f = a(r, u)),
      (Ao = !1),
      ur && (f = Hm(t, a, r, u)),
      Um(e),
      f
    )
  }
  function Um(e) {
    z.H = gl
    var t = rt !== null && rt.next !== null
    if (((ya = 0), (Nt = rt = Oe = null), (Vi = !1), (pl = 0), (cr = null), t)) throw Error(i(300))
    e === null || Dt || ((e = e.dependencies), e !== null && ki(e) && (Dt = !0))
  }
  function Hm(e, t, a, r) {
    Oe = e
    var u = 0
    do {
      if ((ur && (cr = null), (pl = 0), (ur = !1), 25 <= u)) throw Error(i(301))
      if (((u += 1), (Nt = rt = null), e.updateQueue != null)) {
        var f = e.updateQueue
        ;((f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0))
      }
      ;((z.H = Ch), (f = t(a, r)))
    } while (ur)
    return f
  }
  function P1() {
    var e = z.H,
      t = e.useState()[0]
    return (
      (t = typeof t.then == "function" ? ml(t) : t),
      (e = e.useState()[0]),
      (rt !== null ? rt.memoizedState : null) !== e && (Oe.flags |= 1024),
      t
    )
  }
  function Ac() {
    var e = Gi !== 0
    return ((Gi = 0), e)
  }
  function wc(e, t, a) {
    ;((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a))
  }
  function zc(e) {
    if (Vi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue
        ;(t !== null && (t.pending = null), (e = e.next))
      }
      Vi = !1
    }
    ;((ya = 0), (Nt = rt = Oe = null), (ur = !1), (pl = Gi = 0), (cr = null))
  }
  function en() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
    return (Nt === null ? (Oe.memoizedState = Nt = e) : (Nt = Nt.next = e), Nt)
  }
  function wt() {
    if (rt === null) {
      var e = Oe.alternate
      e = e !== null ? e.memoizedState : null
    } else e = rt.next
    var t = Nt === null ? Oe.memoizedState : Nt.next
    if (t !== null) ((Nt = t), (rt = e))
    else {
      if (e === null) throw Oe.alternate === null ? Error(i(467)) : Error(i(310))
      ;((rt = e),
        (e = {
          memoizedState: rt.memoizedState,
          baseState: rt.baseState,
          baseQueue: rt.baseQueue,
          queue: rt.queue,
          next: null,
        }),
        Nt === null ? (Oe.memoizedState = Nt = e) : (Nt = Nt.next = e))
    }
    return Nt
  }
  function Yi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null }
  }
  function ml(e) {
    var t = pl
    return (
      (pl += 1),
      cr === null && (cr = []),
      (e = Om(cr, e, t)),
      (t = Oe),
      (Nt === null ? t.memoizedState : Nt.next) === null &&
        ((t = t.alternate), (z.H = t === null || t.memoizedState === null ? xh : Pc)),
      e
    )
  }
  function Fi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ml(e)
      if (e.$$typeof === O) return Yt(e)
    }
    throw Error(i(438, String(e)))
  }
  function Oc(e) {
    var t = null,
      a = Oe.updateQueue
    if ((a !== null && (t = a.memoCache), t == null)) {
      var r = Oe.alternate
      r !== null &&
        ((r = r.updateQueue),
        r !== null &&
          ((r = r.memoCache),
          r != null &&
            (t = {
              data: r.data.map(function (u) {
                return u.slice()
              }),
              index: 0,
            })))
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Yi()), (Oe.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), r = 0; r < e; r++) a[r] = Q
    return (t.index++, a)
  }
  function va(e, t) {
    return typeof t == "function" ? t(e) : t
  }
  function Xi(e) {
    var t = wt()
    return Nc(t, rt, e)
  }
  function Nc(e, t, a) {
    var r = e.queue
    if (r === null) throw Error(i(311))
    r.lastRenderedReducer = a
    var u = e.baseQueue,
      f = r.pending
    if (f !== null) {
      if (u !== null) {
        var g = u.next
        ;((u.next = f.next), (f.next = g))
      }
      ;((t.baseQueue = u = f), (r.pending = null))
    }
    if (((f = e.baseState), u === null)) e.memoizedState = f
    else {
      t = u.next
      var S = (g = null),
        j = null,
        I = t,
        Z = !1
      do {
        var oe = I.lane & -536870913
        if (oe !== I.lane ? (Pe & oe) === oe : (ya & oe) === oe) {
          var V = I.revertLane
          if (V === 0)
            (j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: I.action,
                  hasEagerState: I.hasEagerState,
                  eagerState: I.eagerState,
                  next: null,
                }),
              oe === or && (Z = !0))
          else if ((ya & V) === V) {
            ;((I = I.next), V === or && (Z = !0))
            continue
          } else
            ((oe = {
              lane: 0,
              revertLane: I.revertLane,
              gesture: null,
              action: I.action,
              hasEagerState: I.hasEagerState,
              eagerState: I.eagerState,
              next: null,
            }),
              j === null ? ((S = j = oe), (g = f)) : (j = j.next = oe),
              (Oe.lanes |= V),
              (Wa |= V))
          ;((oe = I.action), Ao && a(f, oe), (f = I.hasEagerState ? I.eagerState : a(f, oe)))
        } else
          ((V = {
            lane: oe,
            revertLane: I.revertLane,
            gesture: I.gesture,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null,
          }),
            j === null ? ((S = j = V), (g = f)) : (j = j.next = V),
            (Oe.lanes |= oe),
            (Wa |= oe))
        I = I.next
      } while (I !== null && I !== t)
      if (
        (j === null ? (g = f) : (j.next = S),
        !dn(f, e.memoizedState) && ((Dt = !0), Z && ((a = rr), a !== null)))
      )
        throw a
      ;((e.memoizedState = f), (e.baseState = g), (e.baseQueue = j), (r.lastRenderedState = f))
    }
    return (u === null && (r.lanes = 0), [e.memoizedState, r.dispatch])
  }
  function Dc(e) {
    var t = wt(),
      a = t.queue
    if (a === null) throw Error(i(311))
    a.lastRenderedReducer = e
    var r = a.dispatch,
      u = a.pending,
      f = t.memoizedState
    if (u !== null) {
      a.pending = null
      var g = (u = u.next)
      do ((f = e(f, g.action)), (g = g.next))
      while (g !== u)
      ;(dn(f, t.memoizedState) || (Dt = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (a.lastRenderedState = f))
    }
    return [f, r]
  }
  function Pm(e, t, a) {
    var r = Oe,
      u = wt(),
      f = qe
    if (f) {
      if (a === void 0) throw Error(i(407))
      a = a()
    } else a = t()
    var g = !dn((rt || u).memoizedState, a)
    if (
      (g && ((u.memoizedState = a), (Dt = !0)),
      (u = u.queue),
      kc(Vm.bind(null, r, u, e), [e]),
      u.getSnapshot !== t || g || (Nt !== null && Nt.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        fr(9, { destroy: void 0 }, qm.bind(null, r, u, a, t), null),
        dt === null)
      )
        throw Error(i(349))
      f || (ya & 127) !== 0 || Im(r, t, a)
    }
    return a
  }
  function Im(e, t, a) {
    ;((e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = Oe.updateQueue),
      t === null
        ? ((t = Yi()), (Oe.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)))
  }
  function qm(e, t, a, r) {
    ;((t.value = a), (t.getSnapshot = r), Gm(t) && Ym(e))
  }
  function Vm(e, t, a) {
    return a(function () {
      Gm(t) && Ym(e)
    })
  }
  function Gm(e) {
    var t = e.getSnapshot
    e = e.value
    try {
      var a = t()
      return !dn(e, a)
    } catch {
      return !0
    }
  }
  function Ym(e) {
    var t = vo(e, 2)
    t !== null && un(t, e, 2)
  }
  function Bc(e) {
    var t = en()
    if (typeof e == "function") {
      var a = e
      if (((e = a()), Ao)) {
        Kn(!0)
        try {
          a()
        } finally {
          Kn(!1)
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: va,
        lastRenderedState: e,
      }),
      t
    )
  }
  function Fm(e, t, a, r) {
    return ((e.baseState = a), Nc(e, rt, typeof r == "function" ? r : va))
  }
  function I1(e, t, a, r, u) {
    if (Qi(e)) throw Error(i(485))
    if (((e = t.action), e !== null)) {
      var f = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          f.listeners.push(g)
        },
      }
      ;(z.T !== null ? a(!0) : (f.isTransition = !1),
        r(f),
        (a = t.pending),
        a === null
          ? ((f.next = t.pending = f), Xm(t, f))
          : ((f.next = a.next), (t.pending = a.next = f)))
    }
  }
  function Xm(e, t) {
    var a = t.action,
      r = t.payload,
      u = e.state
    if (t.isTransition) {
      var f = z.T,
        g = {}
      z.T = g
      try {
        var S = a(u, r),
          j = z.S
        ;(j !== null && j(g, S), Km(e, t, S))
      } catch (I) {
        jc(e, t, I)
      } finally {
        ;(f !== null && g.types !== null && (f.types = g.types), (z.T = f))
      }
    } else
      try {
        ;((f = a(u, r)), Km(e, t, f))
      } catch (I) {
        jc(e, t, I)
      }
  }
  function Km(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (r) {
            Wm(e, t, r)
          },
          function (r) {
            return jc(e, t, r)
          }
        )
      : Wm(e, t, a)
  }
  function Wm(e, t, a) {
    ;((t.status = "fulfilled"),
      (t.value = a),
      Qm(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next), a === t ? (e.pending = null) : ((a = a.next), (t.next = a), Xm(e, a))))
  }
  function jc(e, t, a) {
    var r = e.pending
    if (((e.pending = null), r !== null)) {
      r = r.next
      do ((t.status = "rejected"), (t.reason = a), Qm(t), (t = t.next))
      while (t !== r)
    }
    e.action = null
  }
  function Qm(e) {
    e = e.listeners
    for (var t = 0; t < e.length; t++) (0, e[t])()
  }
  function Zm(e, t) {
    return t
  }
  function Jm(e, t) {
    if (qe) {
      var a = dt.formState
      if (a !== null) {
        e: {
          var r = Oe
          if (qe) {
            if (ht) {
              t: {
                for (var u = ht, f = wn; u.nodeType !== 8; ) {
                  if (!f) {
                    u = null
                    break t
                  }
                  if (((u = On(u.nextSibling)), u === null)) {
                    u = null
                    break t
                  }
                }
                ;((f = u.data), (u = f === "F!" || f === "F" ? u : null))
              }
              if (u) {
                ;((ht = On(u.nextSibling)), (r = u.data === "F!"))
                break e
              }
            }
            Pa(r)
          }
          r = !1
        }
        r && (t = a[0])
      }
    }
    return (
      (a = en()),
      (a.memoizedState = a.baseState = t),
      (r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zm,
        lastRenderedState: t,
      }),
      (a.queue = r),
      (a = vh.bind(null, Oe, r)),
      (r.dispatch = a),
      (r = Bc(!1)),
      (f = Hc.bind(null, Oe, !1, r.queue)),
      (r = en()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (r.queue = u),
      (a = I1.bind(null, Oe, u, f, a)),
      (u.dispatch = a),
      (r.memoizedState = e),
      [t, a, !1]
    )
  }
  function eh(e) {
    var t = wt()
    return th(t, rt, e)
  }
  function th(e, t, a) {
    if (
      ((t = Nc(e, t, Zm)[0]),
      (e = Xi(va)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var r = ml(t)
      } catch (g) {
        throw g === lr ? $i : g
      }
    else r = t
    t = wt()
    var u = t.queue,
      f = u.dispatch
    return (
      a !== t.memoizedState &&
        ((Oe.flags |= 2048), fr(9, { destroy: void 0 }, q1.bind(null, u, a), null)),
      [r, f, e]
    )
  }
  function q1(e, t) {
    e.action = t
  }
  function nh(e) {
    var t = wt(),
      a = rt
    if (a !== null) return th(t, a, e)
    ;(wt(), (t = t.memoizedState), (a = wt()))
    var r = a.queue.dispatch
    return ((a.memoizedState = e), [t, r, !1])
  }
  function fr(e, t, a, r) {
    return (
      (e = { tag: e, create: a, deps: r, inst: t, next: null }),
      (t = Oe.updateQueue),
      t === null && ((t = Yi()), (Oe.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((r = a.next), (a.next = e), (e.next = r), (t.lastEffect = e)),
      e
    )
  }
  function ah() {
    return wt().memoizedState
  }
  function Ki(e, t, a, r) {
    var u = en()
    ;((Oe.flags |= e),
      (u.memoizedState = fr(1 | t, { destroy: void 0 }, a, r === void 0 ? null : r)))
  }
  function Wi(e, t, a, r) {
    var u = wt()
    r = r === void 0 ? null : r
    var f = u.memoizedState.inst
    rt !== null && r !== null && Rc(r, rt.memoizedState.deps)
      ? (u.memoizedState = fr(t, f, a, r))
      : ((Oe.flags |= e), (u.memoizedState = fr(1 | t, f, a, r)))
  }
  function oh(e, t) {
    Ki(8390656, 8, e, t)
  }
  function kc(e, t) {
    Wi(2048, 8, e, t)
  }
  function V1(e) {
    Oe.flags |= 4
    var t = Oe.updateQueue
    if (t === null) ((t = Yi()), (Oe.updateQueue = t), (t.events = [e]))
    else {
      var a = t.events
      a === null ? (t.events = [e]) : a.push(e)
    }
  }
  function rh(e) {
    var t = wt().memoizedState
    return (
      V1({ ref: t, nextImpl: e }),
      function () {
        if ((Ke & 2) !== 0) throw Error(i(440))
        return t.impl.apply(void 0, arguments)
      }
    )
  }
  function lh(e, t) {
    return Wi(4, 2, e, t)
  }
  function ih(e, t) {
    return Wi(4, 4, e, t)
  }
  function sh(e, t) {
    if (typeof t == "function") {
      e = e()
      var a = t(e)
      return function () {
        typeof a == "function" ? a() : t(null)
      }
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null
        }
      )
  }
  function uh(e, t, a) {
    ;((a = a != null ? a.concat([e]) : null), Wi(4, 4, sh.bind(null, t, e), a))
  }
  function _c() {}
  function ch(e, t) {
    var a = wt()
    t = t === void 0 ? null : t
    var r = a.memoizedState
    return t !== null && Rc(t, r[1]) ? r[0] : ((a.memoizedState = [e, t]), e)
  }
  function fh(e, t) {
    var a = wt()
    t = t === void 0 ? null : t
    var r = a.memoizedState
    if (t !== null && Rc(t, r[1])) return r[0]
    if (((r = e()), Ao)) {
      Kn(!0)
      try {
        e()
      } finally {
        Kn(!1)
      }
    }
    return ((a.memoizedState = [r, t]), r)
  }
  function Lc(e, t, a) {
    return a === void 0 || ((ya & 1073741824) !== 0 && (Pe & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = dg()), (Oe.lanes |= e), (Wa |= e), a)
  }
  function dh(e, t, a, r) {
    return dn(a, t)
      ? a
      : sr.current !== null
        ? ((e = Lc(e, a, r)), dn(e, t) || (Dt = !0), e)
        : (ya & 42) === 0 || ((ya & 1073741824) !== 0 && (Pe & 261930) === 0)
          ? ((Dt = !0), (e.memoizedState = a))
          : ((e = dg()), (Oe.lanes |= e), (Wa |= e), t)
  }
  function ph(e, t, a, r, u) {
    var f = F.p
    F.p = f !== 0 && 8 > f ? f : 8
    var g = z.T,
      S = {}
    ;((z.T = S), Hc(e, !1, t, a))
    try {
      var j = u(),
        I = z.S
      if (
        (I !== null && I(S, j), j !== null && typeof j == "object" && typeof j.then == "function")
      ) {
        var Z = U1(j, r)
        hl(e, t, Z, vn(e))
      } else hl(e, t, r, vn(e))
    } catch (oe) {
      hl(e, t, { then: function () {}, status: "rejected", reason: oe }, vn())
    } finally {
      ;((F.p = f), g !== null && S.types !== null && (g.types = S.types), (z.T = g))
    }
  }
  function G1() {}
  function $c(e, t, a, r) {
    if (e.tag !== 5) throw Error(i(476))
    var u = mh(e).queue
    ph(
      e,
      u,
      t,
      re,
      a === null
        ? G1
        : function () {
            return (hh(e), a(r))
          }
    )
  }
  function mh(e) {
    var t = e.memoizedState
    if (t !== null) return t
    t = {
      memoizedState: re,
      baseState: re,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: va,
        lastRenderedState: re,
      },
      next: null,
    }
    var a = {}
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: va,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    )
  }
  function hh(e) {
    var t = mh(e)
    ;(t.next === null && (t = e.alternate.memoizedState), hl(e, t.next.queue, {}, vn()))
  }
  function Uc() {
    return Yt(Dl)
  }
  function gh() {
    return wt().memoizedState
  }
  function yh() {
    return wt().memoizedState
  }
  function Y1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = vn()
          e = Va(a)
          var r = Ga(t, e, a)
          ;(r !== null && (un(r, t, a), cl(r, t, a)), (t = { cache: mc() }), (e.payload = t))
          return
      }
      t = t.return
    }
  }
  function F1(e, t, a) {
    var r = vn()
    ;((a = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Qi(e) ? bh(t, a) : ((a = ac(e, t, a, r)), a !== null && (un(a, e, r), Sh(a, t, r))))
  }
  function vh(e, t, a) {
    var r = vn()
    hl(e, t, a, r)
  }
  function hl(e, t, a, r) {
    var u = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }
    if (Qi(e)) bh(t, u)
    else {
      var f = e.alternate
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var g = t.lastRenderedState,
            S = f(g, a)
          if (((u.hasEagerState = !0), (u.eagerState = S), dn(S, g)))
            return (Ni(e, t, u, 0), dt === null && Oi(), !1)
        } catch {}
      if (((a = ac(e, t, u, r)), a !== null)) return (un(a, e, r), Sh(a, t, r), !0)
    }
    return !1
  }
  function Hc(e, t, a, r) {
    if (
      ((r = {
        lane: 2,
        revertLane: bf(),
        gesture: null,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Qi(e))
    ) {
      if (t) throw Error(i(479))
    } else ((t = ac(e, a, r, 2)), t !== null && un(t, e, 2))
  }
  function Qi(e) {
    var t = e.alternate
    return e === Oe || (t !== null && t === Oe)
  }
  function bh(e, t) {
    ur = Vi = !0
    var a = e.pending
    ;(a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)), (e.pending = t))
  }
  function Sh(e, t, a) {
    if ((a & 4194048) !== 0) {
      var r = t.lanes
      ;((r &= e.pendingLanes), (a |= r), (t.lanes = a), Rp(e, a))
    }
  }
  var gl = {
    readContext: Yt,
    use: Fi,
    useCallback: Et,
    useContext: Et,
    useEffect: Et,
    useImperativeHandle: Et,
    useLayoutEffect: Et,
    useInsertionEffect: Et,
    useMemo: Et,
    useReducer: Et,
    useRef: Et,
    useState: Et,
    useDebugValue: Et,
    useDeferredValue: Et,
    useTransition: Et,
    useSyncExternalStore: Et,
    useId: Et,
    useHostTransitionStatus: Et,
    useFormState: Et,
    useActionState: Et,
    useOptimistic: Et,
    useMemoCache: Et,
    useCacheRefresh: Et,
  }
  gl.useEffectEvent = Et
  var xh = {
      readContext: Yt,
      use: Fi,
      useCallback: function (e, t) {
        return ((en().memoizedState = [e, t === void 0 ? null : t]), e)
      },
      useContext: Yt,
      useEffect: oh,
      useImperativeHandle: function (e, t, a) {
        ;((a = a != null ? a.concat([e]) : null), Ki(4194308, 4, sh.bind(null, t, e), a))
      },
      useLayoutEffect: function (e, t) {
        return Ki(4194308, 4, e, t)
      },
      useInsertionEffect: function (e, t) {
        Ki(4, 2, e, t)
      },
      useMemo: function (e, t) {
        var a = en()
        t = t === void 0 ? null : t
        var r = e()
        if (Ao) {
          Kn(!0)
          try {
            e()
          } finally {
            Kn(!1)
          }
        }
        return ((a.memoizedState = [r, t]), r)
      },
      useReducer: function (e, t, a) {
        var r = en()
        if (a !== void 0) {
          var u = a(t)
          if (Ao) {
            Kn(!0)
            try {
              a(t)
            } finally {
              Kn(!1)
            }
          }
        } else u = t
        return (
          (r.memoizedState = r.baseState = u),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u,
          }),
          (r.queue = e),
          (e = e.dispatch = F1.bind(null, Oe, e)),
          [r.memoizedState, e]
        )
      },
      useRef: function (e) {
        var t = en()
        return ((e = { current: e }), (t.memoizedState = e))
      },
      useState: function (e) {
        e = Bc(e)
        var t = e.queue,
          a = vh.bind(null, Oe, t)
        return ((t.dispatch = a), [e.memoizedState, a])
      },
      useDebugValue: _c,
      useDeferredValue: function (e, t) {
        var a = en()
        return Lc(a, e, t)
      },
      useTransition: function () {
        var e = Bc(!1)
        return ((e = ph.bind(null, Oe, e.queue, !0, !1)), (en().memoizedState = e), [!1, e])
      },
      useSyncExternalStore: function (e, t, a) {
        var r = Oe,
          u = en()
        if (qe) {
          if (a === void 0) throw Error(i(407))
          a = a()
        } else {
          if (((a = t()), dt === null)) throw Error(i(349))
          ;(Pe & 127) !== 0 || Im(r, t, a)
        }
        u.memoizedState = a
        var f = { value: a, getSnapshot: t }
        return (
          (u.queue = f),
          oh(Vm.bind(null, r, f, e), [e]),
          (r.flags |= 2048),
          fr(9, { destroy: void 0 }, qm.bind(null, r, f, a, t), null),
          a
        )
      },
      useId: function () {
        var e = en(),
          t = dt.identifierPrefix
        if (qe) {
          var a = Qn,
            r = Wn
          ;((a = (r & ~(1 << (32 - Wt(r) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = Gi++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"))
        } else ((a = H1++), (t = "_" + t + "r_" + a.toString(32) + "_"))
        return (e.memoizedState = t)
      },
      useHostTransitionStatus: Uc,
      useFormState: Jm,
      useActionState: Jm,
      useOptimistic: function (e) {
        var t = en()
        t.memoizedState = t.baseState = e
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        }
        return ((t.queue = a), (t = Hc.bind(null, Oe, !0, a)), (a.dispatch = t), [e, t])
      },
      useMemoCache: Oc,
      useCacheRefresh: function () {
        return (en().memoizedState = Y1.bind(null, Oe))
      },
      useEffectEvent: function (e) {
        var t = en(),
          a = { impl: e }
        return (
          (t.memoizedState = a),
          function () {
            if ((Ke & 2) !== 0) throw Error(i(440))
            return a.impl.apply(void 0, arguments)
          }
        )
      },
    },
    Pc = {
      readContext: Yt,
      use: Fi,
      useCallback: ch,
      useContext: Yt,
      useEffect: kc,
      useImperativeHandle: uh,
      useInsertionEffect: lh,
      useLayoutEffect: ih,
      useMemo: fh,
      useReducer: Xi,
      useRef: ah,
      useState: function () {
        return Xi(va)
      },
      useDebugValue: _c,
      useDeferredValue: function (e, t) {
        var a = wt()
        return dh(a, rt.memoizedState, e, t)
      },
      useTransition: function () {
        var e = Xi(va)[0],
          t = wt().memoizedState
        return [typeof e == "boolean" ? e : ml(e), t]
      },
      useSyncExternalStore: Pm,
      useId: gh,
      useHostTransitionStatus: Uc,
      useFormState: eh,
      useActionState: eh,
      useOptimistic: function (e, t) {
        var a = wt()
        return Fm(a, rt, e, t)
      },
      useMemoCache: Oc,
      useCacheRefresh: yh,
    }
  Pc.useEffectEvent = rh
  var Ch = {
    readContext: Yt,
    use: Fi,
    useCallback: ch,
    useContext: Yt,
    useEffect: kc,
    useImperativeHandle: uh,
    useInsertionEffect: lh,
    useLayoutEffect: ih,
    useMemo: fh,
    useReducer: Dc,
    useRef: ah,
    useState: function () {
      return Dc(va)
    },
    useDebugValue: _c,
    useDeferredValue: function (e, t) {
      var a = wt()
      return rt === null ? Lc(a, e, t) : dh(a, rt.memoizedState, e, t)
    },
    useTransition: function () {
      var e = Dc(va)[0],
        t = wt().memoizedState
      return [typeof e == "boolean" ? e : ml(e), t]
    },
    useSyncExternalStore: Pm,
    useId: gh,
    useHostTransitionStatus: Uc,
    useFormState: nh,
    useActionState: nh,
    useOptimistic: function (e, t) {
      var a = wt()
      return rt !== null ? Fm(a, rt, e, t) : ((a.baseState = e), [e, a.queue.dispatch])
    },
    useMemoCache: Oc,
    useCacheRefresh: yh,
  }
  Ch.useEffectEvent = rh
  function Ic(e, t, a, r) {
    ;((t = e.memoizedState),
      (a = a(r, t)),
      (a = a == null ? t : b({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a))
  }
  var qc = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals
      var r = vn(),
        u = Va(r)
      ;((u.payload = t),
        a != null && (u.callback = a),
        (t = Ga(e, u, r)),
        t !== null && (un(t, e, r), cl(t, e, r)))
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals
      var r = vn(),
        u = Va(r)
      ;((u.tag = 1),
        (u.payload = t),
        a != null && (u.callback = a),
        (t = Ga(e, u, r)),
        t !== null && (un(t, e, r), cl(t, e, r)))
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals
      var a = vn(),
        r = Va(a)
      ;((r.tag = 2),
        t != null && (r.callback = t),
        (t = Ga(e, r, a)),
        t !== null && (un(t, e, a), cl(t, e, a)))
    },
  }
  function Eh(e, t, a, r, u, f, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, f, g)
        : t.prototype && t.prototype.isPureReactComponent
          ? !nl(a, r) || !nl(u, f)
          : !0
    )
  }
  function Th(e, t, a, r) {
    ;((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, r),
      t.state !== e && qc.enqueueReplaceState(t, t.state, null))
  }
  function wo(e, t) {
    var a = t
    if ("ref" in t) {
      a = {}
      for (var r in t) r !== "ref" && (a[r] = t[r])
    }
    if ((e = e.defaultProps)) {
      a === t && (a = b({}, a))
      for (var u in e) a[u] === void 0 && (a[u] = e[u])
    }
    return a
  }
  function Rh(e) {
    zi(e)
  }
  function Mh(e) {
    console.error(e)
  }
  function Ah(e) {
    zi(e)
  }
  function Zi(e, t) {
    try {
      var a = e.onUncaughtError
      a(t.value, { componentStack: t.stack })
    } catch (r) {
      setTimeout(function () {
        throw r
      })
    }
  }
  function wh(e, t, a) {
    try {
      var r = e.onCaughtError
      r(a.value, { componentStack: a.stack, errorBoundary: t.tag === 1 ? t.stateNode : null })
    } catch (u) {
      setTimeout(function () {
        throw u
      })
    }
  }
  function Vc(e, t, a) {
    return (
      (a = Va(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        Zi(e, t)
      }),
      a
    )
  }
  function zh(e) {
    return ((e = Va(e)), (e.tag = 3), e)
  }
  function Oh(e, t, a, r) {
    var u = a.type.getDerivedStateFromError
    if (typeof u == "function") {
      var f = r.value
      ;((e.payload = function () {
        return u(f)
      }),
        (e.callback = function () {
          wh(t, a, r)
        }))
    }
    var g = a.stateNode
    g !== null &&
      typeof g.componentDidCatch == "function" &&
      (e.callback = function () {
        ;(wh(t, a, r),
          typeof u != "function" && (Qa === null ? (Qa = new Set([this])) : Qa.add(this)))
        var S = r.stack
        this.componentDidCatch(r.value, { componentStack: S !== null ? S : "" })
      })
  }
  function X1(e, t, a, r, u) {
    if (((a.flags |= 32768), r !== null && typeof r == "object" && typeof r.then == "function")) {
      if (((t = a.alternate), t !== null && ar(t, a, u, !0), (a = mn.current), a !== null)) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              zn === null ? cs() : a.alternate === null && Tt === 0 && (Tt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              r === Ui
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([r])) : t.add(r),
                  gf(e, r, u)),
              !1
            )
          case 22:
            return (
              (a.flags |= 65536),
              r === Ui
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([r]) }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue), a === null ? (t.retryQueue = new Set([r])) : a.add(r)),
                  gf(e, r, u)),
              !1
            )
        }
        throw Error(i(435, a.tag))
      }
      return (gf(e, r, u), cs(), !1)
    }
    if (qe)
      return (
        (t = mn.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            r !== uc && ((e = Error(i(422), { cause: r })), rl(Rn(e, a))))
          : (r !== uc && ((t = Error(i(423), { cause: r })), rl(Rn(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (r = Rn(r, a)),
            (u = Vc(e.stateNode, r, u)),
            Sc(e, u),
            Tt !== 4 && (Tt = 2)),
        !1
      )
    var f = Error(i(520), { cause: r })
    if (((f = Rn(f, a)), Tl === null ? (Tl = [f]) : Tl.push(f), Tt !== 4 && (Tt = 2), t === null))
      return !0
    ;((r = Rn(r, a)), (a = t))
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = u & -u),
            (a.lanes |= e),
            (e = Vc(a.stateNode, r, e)),
            Sc(a, e),
            !1
          )
        case 1:
          if (
            ((t = a.type),
            (f = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (f !== null &&
                  typeof f.componentDidCatch == "function" &&
                  (Qa === null || !Qa.has(f)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = zh(u)),
              Oh(u, e, a, r),
              Sc(a, u),
              !1
            )
      }
      a = a.return
    } while (a !== null)
    return !1
  }
  var Gc = Error(i(461)),
    Dt = !1
  function Ft(e, t, a, r) {
    t.child = e === null ? jm(t, null, a, r) : Mo(t, e.child, a, r)
  }
  function Nh(e, t, a, r, u) {
    a = a.render
    var f = t.ref
    if ("ref" in r) {
      var g = {}
      for (var S in r) S !== "ref" && (g[S] = r[S])
    } else g = r
    return (
      Co(t),
      (r = Mc(e, t, a, g, f, u)),
      (S = Ac()),
      e !== null && !Dt
        ? (wc(e, t, u), ba(e, t, u))
        : (qe && S && ic(t), (t.flags |= 1), Ft(e, t, r, u), t.child)
    )
  }
  function Dh(e, t, a, r, u) {
    if (e === null) {
      var f = a.type
      return typeof f == "function" && !oc(f) && f.defaultProps === void 0 && a.compare === null
        ? ((t.tag = 15), (t.type = f), Bh(e, t, f, r, u))
        : ((e = Bi(a.type, null, r, t, t.mode, u)), (e.ref = t.ref), (e.return = t), (t.child = e))
    }
    if (((f = e.child), !Jc(e, u))) {
      var g = f.memoizedProps
      if (((a = a.compare), (a = a !== null ? a : nl), a(g, r) && e.ref === t.ref))
        return ba(e, t, u)
    }
    return ((t.flags |= 1), (e = pa(f, r)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  function Bh(e, t, a, r, u) {
    if (e !== null) {
      var f = e.memoizedProps
      if (nl(f, r) && e.ref === t.ref)
        if (((Dt = !1), (t.pendingProps = r = f), Jc(e, u))) (e.flags & 131072) !== 0 && (Dt = !0)
        else return ((t.lanes = e.lanes), ba(e, t, u))
    }
    return Yc(e, t, a, r, u)
  }
  function jh(e, t, a, r) {
    var u = r.children,
      f = e !== null ? e.memoizedState : null
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      r.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((f = f !== null ? f.baseLanes | a : a), e !== null)) {
          for (r = t.child = e.child, u = 0; r !== null; )
            ((u = u | r.lanes | r.childLanes), (r = r.sibling))
          r = u & ~f
        } else ((r = 0), (t.child = null))
        return kh(e, t, f, a, r)
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Li(t, f !== null ? f.cachePool : null),
          f !== null ? Lm(t, f) : Cc(),
          $m(t))
      else return ((r = t.lanes = 536870912), kh(e, t, f !== null ? f.baseLanes | a : a, a, r))
    } else
      f !== null
        ? (Li(t, f.cachePool), Lm(t, f), Fa(), (t.memoizedState = null))
        : (e !== null && Li(t, null), Cc(), Fa())
    return (Ft(e, t, u, a), t.child)
  }
  function yl(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    )
  }
  function kh(e, t, a, r, u) {
    var f = gc()
    return (
      (f = f === null ? null : { parent: Ot._currentValue, pool: f }),
      (t.memoizedState = { baseLanes: a, cachePool: f }),
      e !== null && Li(t, null),
      Cc(),
      $m(t),
      e !== null && ar(e, t, r, !0),
      (t.childLanes = u),
      null
    )
  }
  function Ji(e, t) {
    return (
      (t = ts({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    )
  }
  function _h(e, t, a) {
    return (
      Mo(t, e.child, null, a),
      (e = Ji(t, t.pendingProps)),
      (e.flags |= 2),
      hn(t),
      (t.memoizedState = null),
      e
    )
  }
  function K1(e, t, a) {
    var r = t.pendingProps,
      u = (t.flags & 128) !== 0
    if (((t.flags &= -129), e === null)) {
      if (qe) {
        if (r.mode === "hidden") return ((e = Ji(t, r)), (t.lanes = 536870912), yl(null, e))
        if (
          (Tc(t),
          (e = ht)
            ? ((e = Xg(e, wn)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Ua !== null ? { id: Wn, overflow: Qn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = bm(e)),
                (a.return = t),
                (t.child = a),
                (Gt = t),
                (ht = null)))
            : (e = null),
          e === null)
        )
          throw Pa(t)
        return ((t.lanes = 536870912), null)
      }
      return Ji(t, r)
    }
    var f = e.memoizedState
    if (f !== null) {
      var g = f.dehydrated
      if ((Tc(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = _h(e, t, a)))
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null))
        else throw Error(i(558))
      else if ((Dt || ar(e, t, a, !1), (u = (a & e.childLanes) !== 0), Dt || u)) {
        if (((r = dt), r !== null && ((g = Mp(r, a)), g !== 0 && g !== f.retryLane)))
          throw ((f.retryLane = g), vo(e, g), un(r, e, g), Gc)
        ;(cs(), (t = _h(e, t, a)))
      } else
        ((e = f.treeContext),
          (ht = On(g.nextSibling)),
          (Gt = t),
          (qe = !0),
          (Ha = null),
          (wn = !1),
          e !== null && Cm(t, e),
          (t = Ji(t, r)),
          (t.flags |= 4096))
      return t
    }
    return (
      (e = pa(e.child, { mode: r.mode, children: r.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    )
  }
  function es(e, t) {
    var a = t.ref
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816)
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(i(284))
      ;(e === null || e.ref !== a) && (t.flags |= 4194816)
    }
  }
  function Yc(e, t, a, r, u) {
    return (
      Co(t),
      (a = Mc(e, t, a, r, void 0, u)),
      (r = Ac()),
      e !== null && !Dt
        ? (wc(e, t, u), ba(e, t, u))
        : (qe && r && ic(t), (t.flags |= 1), Ft(e, t, a, u), t.child)
    )
  }
  function Lh(e, t, a, r, u, f) {
    return (
      Co(t),
      (t.updateQueue = null),
      (a = Hm(t, r, a, u)),
      Um(e),
      (r = Ac()),
      e !== null && !Dt
        ? (wc(e, t, f), ba(e, t, f))
        : (qe && r && ic(t), (t.flags |= 1), Ft(e, t, a, f), t.child)
    )
  }
  function $h(e, t, a, r, u) {
    if ((Co(t), t.stateNode === null)) {
      var f = Jo,
        g = a.contextType
      ;(typeof g == "object" && g !== null && (f = Yt(g)),
        (f = new a(r, f)),
        (t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = qc),
        (t.stateNode = f),
        (f._reactInternals = t),
        (f = t.stateNode),
        (f.props = r),
        (f.state = t.memoizedState),
        (f.refs = {}),
        vc(t),
        (g = a.contextType),
        (f.context = typeof g == "object" && g !== null ? Yt(g) : Jo),
        (f.state = t.memoizedState),
        (g = a.getDerivedStateFromProps),
        typeof g == "function" && (Ic(t, a, g, r), (f.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((g = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
          g !== f.state && qc.enqueueReplaceState(f, f.state, null),
          dl(t, r, f, u),
          fl(),
          (f.state = t.memoizedState)),
        typeof f.componentDidMount == "function" && (t.flags |= 4194308),
        (r = !0))
    } else if (e === null) {
      f = t.stateNode
      var S = t.memoizedProps,
        j = wo(a, S)
      f.props = j
      var I = f.context,
        Z = a.contextType
      ;((g = Jo), typeof Z == "object" && Z !== null && (g = Yt(Z)))
      var oe = a.getDerivedStateFromProps
      ;((Z = typeof oe == "function" || typeof f.getSnapshotBeforeUpdate == "function"),
        (S = t.pendingProps !== S),
        Z ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((S || I !== g) && Th(t, f, r, g)),
        (qa = !1))
      var V = t.memoizedState
      ;((f.state = V),
        dl(t, r, f, u),
        fl(),
        (I = t.memoizedState),
        S || V !== I || qa
          ? (typeof oe == "function" && (Ic(t, a, oe, r), (I = t.memoizedState)),
            (j = qa || Eh(t, a, j, r, V, I, g))
              ? (Z ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" && f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = I)),
            (f.props = r),
            (f.state = I),
            (f.context = g),
            (r = j))
          : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)))
    } else {
      ;((f = t.stateNode),
        bc(e, t),
        (g = t.memoizedProps),
        (Z = wo(a, g)),
        (f.props = Z),
        (oe = t.pendingProps),
        (V = f.context),
        (I = a.contextType),
        (j = Jo),
        typeof I == "object" && I !== null && (j = Yt(I)),
        (S = a.getDerivedStateFromProps),
        (I = typeof S == "function" || typeof f.getSnapshotBeforeUpdate == "function") ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((g !== oe || V !== j) && Th(t, f, r, j)),
        (qa = !1),
        (V = t.memoizedState),
        (f.state = V),
        dl(t, r, f, u),
        fl())
      var K = t.memoizedState
      g !== oe || V !== K || qa || (e !== null && e.dependencies !== null && ki(e.dependencies))
        ? (typeof S == "function" && (Ic(t, a, S, r), (K = t.memoizedState)),
          (Z =
            qa ||
            Eh(t, a, Z, r, V, K, j) ||
            (e !== null && e.dependencies !== null && ki(e.dependencies)))
            ? (I ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(r, K, j),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(r, K, j)),
              typeof f.componentDidUpdate == "function" && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (g === e.memoizedProps && V === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && V === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = K)),
          (f.props = r),
          (f.state = K),
          (f.context = j),
          (r = Z))
        : (typeof f.componentDidUpdate != "function" ||
            (g === e.memoizedProps && V === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && V === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1))
    }
    return (
      (f = r),
      es(e, t),
      (r = (t.flags & 128) !== 0),
      f || r
        ? ((f = t.stateNode),
          (a = r && typeof a.getDerivedStateFromError != "function" ? null : f.render()),
          (t.flags |= 1),
          e !== null && r
            ? ((t.child = Mo(t, e.child, null, u)), (t.child = Mo(t, null, a, u)))
            : Ft(e, t, a, u),
          (t.memoizedState = f.state),
          (e = t.child))
        : (e = ba(e, t, u)),
      e
    )
  }
  function Uh(e, t, a, r) {
    return (So(), (t.flags |= 256), Ft(e, t, a, r), t.child)
  }
  var Fc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null }
  function Xc(e) {
    return { baseLanes: e, cachePool: wm() }
  }
  function Kc(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= yn), e)
  }
  function Hh(e, t, a) {
    var r = t.pendingProps,
      u = !1,
      f = (t.flags & 128) !== 0,
      g
    if (
      ((g = f) || (g = e !== null && e.memoizedState === null ? !1 : (At.current & 2) !== 0),
      g && ((u = !0), (t.flags &= -129)),
      (g = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (qe) {
        if (
          (u ? Ya(t) : Fa(),
          (e = ht)
            ? ((e = Xg(e, wn)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Ua !== null ? { id: Wn, overflow: Qn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = bm(e)),
                (a.return = t),
                (t.child = a),
                (Gt = t),
                (ht = null)))
            : (e = null),
          e === null)
        )
          throw Pa(t)
        return (Df(e) ? (t.lanes = 32) : (t.lanes = 536870912), null)
      }
      var S = r.children
      return (
        (r = r.fallback),
        u
          ? (Fa(),
            (u = t.mode),
            (S = ts({ mode: "hidden", children: S }, u)),
            (r = bo(r, u, a, null)),
            (S.return = t),
            (r.return = t),
            (S.sibling = r),
            (t.child = S),
            (r = t.child),
            (r.memoizedState = Xc(a)),
            (r.childLanes = Kc(e, g, a)),
            (t.memoizedState = Fc),
            yl(null, r))
          : (Ya(t), Wc(t, S))
      )
    }
    var j = e.memoizedState
    if (j !== null && ((S = j.dehydrated), S !== null)) {
      if (f)
        t.flags & 256
          ? (Ya(t), (t.flags &= -257), (t = Qc(e, t, a)))
          : t.memoizedState !== null
            ? (Fa(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Fa(),
              (S = r.fallback),
              (u = t.mode),
              (r = ts({ mode: "visible", children: r.children }, u)),
              (S = bo(S, u, a, null)),
              (S.flags |= 2),
              (r.return = t),
              (S.return = t),
              (r.sibling = S),
              (t.child = r),
              Mo(t, e.child, null, a),
              (r = t.child),
              (r.memoizedState = Xc(a)),
              (r.childLanes = Kc(e, g, a)),
              (t.memoizedState = Fc),
              (t = yl(null, r)))
      else if ((Ya(t), Df(S))) {
        if (((g = S.nextSibling && S.nextSibling.dataset), g)) var I = g.dgst
        ;((g = I),
          (r = Error(i(419))),
          (r.stack = ""),
          (r.digest = g),
          rl({ value: r, source: null, stack: null }),
          (t = Qc(e, t, a)))
      } else if ((Dt || ar(e, t, a, !1), (g = (a & e.childLanes) !== 0), Dt || g)) {
        if (((g = dt), g !== null && ((r = Mp(g, a)), r !== 0 && r !== j.retryLane)))
          throw ((j.retryLane = r), vo(e, r), un(g, e, r), Gc)
        ;(Nf(S) || cs(), (t = Qc(e, t, a)))
      } else
        Nf(S)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = j.treeContext),
            (ht = On(S.nextSibling)),
            (Gt = t),
            (qe = !0),
            (Ha = null),
            (wn = !1),
            e !== null && Cm(t, e),
            (t = Wc(t, r.children)),
            (t.flags |= 4096))
      return t
    }
    return u
      ? (Fa(),
        (S = r.fallback),
        (u = t.mode),
        (j = e.child),
        (I = j.sibling),
        (r = pa(j, { mode: "hidden", children: r.children })),
        (r.subtreeFlags = j.subtreeFlags & 65011712),
        I !== null ? (S = pa(I, S)) : ((S = bo(S, u, a, null)), (S.flags |= 2)),
        (S.return = t),
        (r.return = t),
        (r.sibling = S),
        (t.child = r),
        yl(null, r),
        (r = t.child),
        (S = e.child.memoizedState),
        S === null
          ? (S = Xc(a))
          : ((u = S.cachePool),
            u !== null
              ? ((j = Ot._currentValue), (u = u.parent !== j ? { parent: j, pool: j } : u))
              : (u = wm()),
            (S = { baseLanes: S.baseLanes | a, cachePool: u })),
        (r.memoizedState = S),
        (r.childLanes = Kc(e, g, a)),
        (t.memoizedState = Fc),
        yl(e.child, r))
      : (Ya(t),
        (a = e.child),
        (e = a.sibling),
        (a = pa(a, { mode: "visible", children: r.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((g = t.deletions), g === null ? ((t.deletions = [e]), (t.flags |= 16)) : g.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a)
  }
  function Wc(e, t) {
    return ((t = ts({ mode: "visible", children: t }, e.mode)), (t.return = e), (e.child = t))
  }
  function ts(e, t) {
    return ((e = pn(22, e, null, t)), (e.lanes = 0), e)
  }
  function Qc(e, t, a) {
    return (
      Mo(t, e.child, null, a),
      (e = Wc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    )
  }
  function Ph(e, t, a) {
    e.lanes |= t
    var r = e.alternate
    ;(r !== null && (r.lanes |= t), dc(e.return, t, a))
  }
  function Zc(e, t, a, r, u, f) {
    var g = e.memoizedState
    g === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: a,
          tailMode: u,
          treeForkCount: f,
        })
      : ((g.isBackwards = t),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = r),
        (g.tail = a),
        (g.tailMode = u),
        (g.treeForkCount = f))
  }
  function Ih(e, t, a) {
    var r = t.pendingProps,
      u = r.revealOrder,
      f = r.tail
    r = r.children
    var g = At.current,
      S = (g & 2) !== 0
    if (
      (S ? ((g = (g & 1) | 2), (t.flags |= 128)) : (g &= 1),
      ae(At, g),
      Ft(e, t, r, a),
      (r = qe ? ol : 0),
      !S && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ph(e, a, t)
        else if (e.tag === 19) Ph(e, a, t)
        else if (e.child !== null) {
          ;((e.child.return = e), (e = e.child))
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;((e.sibling.return = e.return), (e = e.sibling))
      }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          ((e = a.alternate), e !== null && qi(e) === null && (u = a), (a = a.sibling))
        ;((a = u),
          a === null ? ((u = t.child), (t.child = null)) : ((u = a.sibling), (a.sibling = null)),
          Zc(t, !1, u, a, f, r))
        break
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && qi(e) === null)) {
            t.child = u
            break
          }
          ;((e = u.sibling), (u.sibling = a), (a = u), (u = e))
        }
        Zc(t, !0, a, null, f, r)
        break
      case "together":
        Zc(t, !1, null, null, void 0, r)
        break
      default:
        t.memoizedState = null
    }
    return t.child
  }
  function ba(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Wa |= t.lanes), (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ar(e, t, a, !1), (a & t.childLanes) === 0)) return null
      } else return null
    if (e !== null && t.child !== e.child) throw Error(i(153))
    if (t.child !== null) {
      for (e = t.child, a = pa(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        ((e = e.sibling), (a = a.sibling = pa(e, e.pendingProps)), (a.return = t))
      a.sibling = null
    }
    return t.child
  }
  function Jc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && ki(e)))
  }
  function W1(e, t, a) {
    switch (t.tag) {
      case 3:
        ;(Be(t, t.stateNode.containerInfo), Ia(t, Ot, e.memoizedState.cache), So())
        break
      case 27:
      case 5:
        be(t)
        break
      case 4:
        Be(t, t.stateNode.containerInfo)
        break
      case 10:
        Ia(t, t.type, t.memoizedProps.value)
        break
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Tc(t), null)
        break
      case 13:
        var r = t.memoizedState
        if (r !== null)
          return r.dehydrated !== null
            ? (Ya(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Hh(e, t, a)
              : (Ya(t), (e = ba(e, t, a)), e !== null ? e.sibling : null)
        Ya(t)
        break
      case 19:
        var u = (e.flags & 128) !== 0
        if (
          ((r = (a & t.childLanes) !== 0),
          r || (ar(e, t, a, !1), (r = (a & t.childLanes) !== 0)),
          u)
        ) {
          if (r) return Ih(e, t, a)
          t.flags |= 128
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          ae(At, At.current),
          r)
        )
          break
        return null
      case 22:
        return ((t.lanes = 0), jh(e, t, a, t.pendingProps))
      case 24:
        Ia(t, Ot, e.memoizedState.cache)
    }
    return ba(e, t, a)
  }
  function qh(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Dt = !0
      else {
        if (!Jc(e, a) && (t.flags & 128) === 0) return ((Dt = !1), W1(e, t, a))
        Dt = (e.flags & 131072) !== 0
      }
    else ((Dt = !1), qe && (t.flags & 1048576) !== 0 && xm(t, ol, t.index))
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var r = t.pendingProps
          if (((e = To(t.elementType)), (t.type = e), typeof e == "function"))
            oc(e)
              ? ((r = wo(e, r)), (t.tag = 1), (t = $h(null, t, e, r, a)))
              : ((t.tag = 0), (t = Yc(null, t, e, r, a)))
          else {
            if (e != null) {
              var u = e.$$typeof
              if (u === N) {
                ;((t.tag = 11), (t = Nh(null, t, e, r, a)))
                break e
              } else if (u === U) {
                ;((t.tag = 14), (t = Dh(null, t, e, r, a)))
                break e
              }
            }
            throw ((t = G(e) || e), Error(i(306, t, "")))
          }
        }
        return t
      case 0:
        return Yc(e, t, t.type, t.pendingProps, a)
      case 1:
        return ((r = t.type), (u = wo(r, t.pendingProps)), $h(e, t, r, u, a))
      case 3:
        e: {
          if ((Be(t, t.stateNode.containerInfo), e === null)) throw Error(i(387))
          r = t.pendingProps
          var f = t.memoizedState
          ;((u = f.element), bc(e, t), dl(t, r, null, a))
          var g = t.memoizedState
          if (
            ((r = g.cache),
            Ia(t, Ot, r),
            r !== f.cache && pc(t, [Ot], a, !0),
            fl(),
            (r = g.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: r, isDehydrated: !1, cache: g.cache }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              t = Uh(e, t, r, a)
              break e
            } else if (r !== u) {
              ;((u = Rn(Error(i(424)), t)), rl(u), (t = Uh(e, t, r, a)))
              break e
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  ht = On(e.firstChild),
                  Gt = t,
                  qe = !0,
                  Ha = null,
                  wn = !0,
                  a = jm(t, null, r, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling))
          else {
            if ((So(), r === u)) {
              t = ba(e, t, a)
              break e
            }
            Ft(e, t, r, a)
          }
          t = t.child
        }
        return t
      case 26:
        return (
          es(e, t),
          e === null
            ? (a = ey(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : qe ||
                ((a = t.type),
                (e = t.pendingProps),
                (r = ys(le.current).createElement(a)),
                (r[Vt] = t),
                (r[nn] = e),
                Xt(r, a, e),
                Ht(r),
                (t.stateNode = r))
            : (t.memoizedState = ey(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        )
      case 27:
        return (
          be(t),
          e === null &&
            qe &&
            ((r = t.stateNode = Qg(t.type, t.pendingProps, le.current)),
            (Gt = t),
            (wn = !0),
            (u = ht),
            to(t.type) ? ((Bf = u), (ht = On(r.firstChild))) : (ht = u)),
          Ft(e, t, t.pendingProps.children, a),
          es(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        )
      case 5:
        return (
          e === null &&
            qe &&
            ((u = r = ht) &&
              ((r = MS(r, t.type, t.pendingProps, wn)),
              r !== null
                ? ((t.stateNode = r), (Gt = t), (ht = On(r.firstChild)), (wn = !1), (u = !0))
                : (u = !1)),
            u || Pa(t)),
          be(t),
          (u = t.type),
          (f = t.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (r = f.children),
          wf(u, f) ? (r = null) : g !== null && wf(u, g) && (t.flags |= 32),
          t.memoizedState !== null && ((u = Mc(e, t, P1, null, null, a)), (Dl._currentValue = u)),
          es(e, t),
          Ft(e, t, r, a),
          t.child
        )
      case 6:
        return (
          e === null &&
            qe &&
            ((e = a = ht) &&
              ((a = AS(a, t.pendingProps, wn)),
              a !== null ? ((t.stateNode = a), (Gt = t), (ht = null), (e = !0)) : (e = !1)),
            e || Pa(t)),
          null
        )
      case 13:
        return Hh(e, t, a)
      case 4:
        return (
          Be(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Mo(t, null, r, a)) : Ft(e, t, r, a),
          t.child
        )
      case 11:
        return Nh(e, t, t.type, t.pendingProps, a)
      case 7:
        return (Ft(e, t, t.pendingProps, a), t.child)
      case 8:
        return (Ft(e, t, t.pendingProps.children, a), t.child)
      case 12:
        return (Ft(e, t, t.pendingProps.children, a), t.child)
      case 10:
        return ((r = t.pendingProps), Ia(t, t.type, r.value), Ft(e, t, r.children, a), t.child)
      case 9:
        return (
          (u = t.type._context),
          (r = t.pendingProps.children),
          Co(t),
          (u = Yt(u)),
          (r = r(u)),
          (t.flags |= 1),
          Ft(e, t, r, a),
          t.child
        )
      case 14:
        return Dh(e, t, t.type, t.pendingProps, a)
      case 15:
        return Bh(e, t, t.type, t.pendingProps, a)
      case 19:
        return Ih(e, t, a)
      case 31:
        return K1(e, t, a)
      case 22:
        return jh(e, t, a, t.pendingProps)
      case 24:
        return (
          Co(t),
          (r = Yt(Ot)),
          e === null
            ? ((u = gc()),
              u === null &&
                ((u = dt),
                (f = mc()),
                (u.pooledCache = f),
                f.refCount++,
                f !== null && (u.pooledCacheLanes |= a),
                (u = f)),
              (t.memoizedState = { parent: r, cache: u }),
              vc(t),
              Ia(t, Ot, u))
            : ((e.lanes & a) !== 0 && (bc(e, t), dl(t, null, null, a), fl()),
              (u = e.memoizedState),
              (f = t.memoizedState),
              u.parent !== r
                ? ((u = { parent: r, cache: r }),
                  (t.memoizedState = u),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u),
                  Ia(t, Ot, r))
                : ((r = f.cache), Ia(t, Ot, r), r !== u.cache && pc(t, [Ot], a, !0))),
          Ft(e, t, t.pendingProps.children, a),
          t.child
        )
      case 29:
        throw t.pendingProps
    }
    throw Error(i(156, t.tag))
  }
  function Sa(e) {
    e.flags |= 4
  }
  function ef(e, t, a, r, u) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (u & 335544128) === u))
        if (e.stateNode.complete) e.flags |= 8192
        else if (gg()) e.flags |= 8192
        else throw ((Ro = Ui), yc)
    } else e.flags &= -16777217
  }
  function Vh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217
    else if (((e.flags |= 16777216), !ry(t)))
      if (gg()) e.flags |= 8192
      else throw ((Ro = Ui), yc)
  }
  function ns(e, t) {
    ;(t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? Ep() : 536870912), (e.lanes |= t), (hr |= t)))
  }
  function vl(e, t) {
    if (!qe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail
          for (var a = null; t !== null; ) (t.alternate !== null && (a = t), (t = t.sibling))
          a === null ? (e.tail = null) : (a.sibling = null)
          break
        case "collapsed":
          a = e.tail
          for (var r = null; a !== null; ) (a.alternate !== null && (r = a), (a = a.sibling))
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null)
      }
  }
  function gt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      r = 0
    if (t)
      for (var u = e.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (r |= u.subtreeFlags & 65011712),
          (r |= u.flags & 65011712),
          (u.return = e),
          (u = u.sibling))
    else
      for (u = e.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (r |= u.subtreeFlags),
          (r |= u.flags),
          (u.return = e),
          (u = u.sibling))
    return ((e.subtreeFlags |= r), (e.childLanes = a), t)
  }
  function Q1(e, t, a) {
    var r = t.pendingProps
    switch ((sc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (gt(t), null)
      case 1:
        return (gt(t), null)
      case 3:
        return (
          (a = t.stateNode),
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          t.memoizedState.cache !== r && (t.flags |= 2048),
          ga(Ot),
          Se(),
          a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (nr(t)
              ? Sa(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), cc())),
          gt(t),
          null
        )
      case 26:
        var u = t.type,
          f = t.memoizedState
        return (
          e === null
            ? (Sa(t), f !== null ? (gt(t), Vh(t, f)) : (gt(t), ef(t, u, null, r, a)))
            : f
              ? f !== e.memoizedState
                ? (Sa(t), gt(t), Vh(t, f))
                : (gt(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== r && Sa(t), gt(t), ef(t, u, e, r, a)),
          null
        )
      case 27:
        if ((ze(t), (a = le.current), (u = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== r && Sa(t)
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(i(166))
            return (gt(t), null)
          }
          ;((e = se.current), nr(t) ? Em(t) : ((e = Qg(u, r, a)), (t.stateNode = e), Sa(t)))
        }
        return (gt(t), null)
      case 5:
        if ((ze(t), (u = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== r && Sa(t)
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(i(166))
            return (gt(t), null)
          }
          if (((f = se.current), nr(t))) Em(t)
          else {
            var g = ys(le.current)
            switch (f) {
              case 1:
                f = g.createElementNS("http://www.w3.org/2000/svg", u)
                break
              case 2:
                f = g.createElementNS("http://www.w3.org/1998/Math/MathML", u)
                break
              default:
                switch (u) {
                  case "svg":
                    f = g.createElementNS("http://www.w3.org/2000/svg", u)
                    break
                  case "math":
                    f = g.createElementNS("http://www.w3.org/1998/Math/MathML", u)
                    break
                  case "script":
                    ;((f = g.createElement("div")),
                      (f.innerHTML = "<script><\/script>"),
                      (f = f.removeChild(f.firstChild)))
                    break
                  case "select":
                    ;((f =
                      typeof r.is == "string"
                        ? g.createElement("select", { is: r.is })
                        : g.createElement("select")),
                      r.multiple ? (f.multiple = !0) : r.size && (f.size = r.size))
                    break
                  default:
                    f =
                      typeof r.is == "string"
                        ? g.createElement(u, { is: r.is })
                        : g.createElement(u)
                }
            }
            ;((f[Vt] = t), (f[nn] = r))
            e: for (g = t.child; g !== null; ) {
              if (g.tag === 5 || g.tag === 6) f.appendChild(g.stateNode)
              else if (g.tag !== 4 && g.tag !== 27 && g.child !== null) {
                ;((g.child.return = g), (g = g.child))
                continue
              }
              if (g === t) break e
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === t) break e
                g = g.return
              }
              ;((g.sibling.return = g.return), (g = g.sibling))
            }
            t.stateNode = f
            e: switch ((Xt(f, u, r), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus
                break e
              case "img":
                r = !0
                break e
              default:
                r = !1
            }
            r && Sa(t)
          }
        }
        return (gt(t), ef(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a), null)
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== r && Sa(t)
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(i(166))
          if (((e = le.current), nr(t))) {
            if (((e = t.stateNode), (a = t.memoizedProps), (r = null), (u = Gt), u !== null))
              switch (u.tag) {
                case 27:
                case 5:
                  r = u.memoizedProps
              }
            ;((e[Vt] = t),
              (e = !!(
                e.nodeValue === a ||
                (r !== null && r.suppressHydrationWarning === !0) ||
                Hg(e.nodeValue, a)
              )),
              e || Pa(t, !0))
          } else ((e = ys(e).createTextNode(r)), (e[Vt] = t), (t.stateNode = e))
        }
        return (gt(t), null)
      case 31:
        if (((a = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((r = nr(t)), a !== null)) {
            if (e === null) {
              if (!r) throw Error(i(318))
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(i(557))
              e[Vt] = t
            } else (So(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4))
            ;(gt(t), (e = !1))
          } else
            ((a = cc()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
              (e = !0))
          if (!e) return t.flags & 256 ? (hn(t), t) : (hn(t), null)
          if ((t.flags & 128) !== 0) throw Error(i(558))
        }
        return (gt(t), null)
      case 13:
        if (
          ((r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = nr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(i(318))
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(i(317))
              u[Vt] = t
            } else (So(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4))
            ;(gt(t), (u = !1))
          } else
            ((u = cc()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u),
              (u = !0))
          if (!u) return t.flags & 256 ? (hn(t), t) : (hn(t), null)
        }
        return (
          hn(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = r !== null),
              (e = e !== null && e.memoizedState !== null),
              a &&
                ((r = t.child),
                (u = null),
                r.alternate !== null &&
                  r.alternate.memoizedState !== null &&
                  r.alternate.memoizedState.cachePool !== null &&
                  (u = r.alternate.memoizedState.cachePool.pool),
                (f = null),
                r.memoizedState !== null &&
                  r.memoizedState.cachePool !== null &&
                  (f = r.memoizedState.cachePool.pool),
                f !== u && (r.flags |= 2048)),
              a !== e && a && (t.child.flags |= 8192),
              ns(t, t.updateQueue),
              gt(t),
              null)
        )
      case 4:
        return (Se(), e === null && Ef(t.stateNode.containerInfo), gt(t), null)
      case 10:
        return (ga(t.type), gt(t), null)
      case 19:
        if ((q(At), (r = t.memoizedState), r === null)) return (gt(t), null)
        if (((u = (t.flags & 128) !== 0), (f = r.rendering), f === null))
          if (u) vl(r, !1)
          else {
            if (Tt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((f = qi(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      vl(r, !1),
                      e = f.updateQueue,
                      t.updateQueue = e,
                      ns(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;
                  )
                    (vm(a, e), (a = a.sibling))
                  return (ae(At, (At.current & 1) | 2), qe && ma(t, r.treeForkCount), t.child)
                }
                e = e.sibling
              }
            r.tail !== null &&
              He() > is &&
              ((t.flags |= 128), (u = !0), vl(r, !1), (t.lanes = 4194304))
          }
        else {
          if (!u)
            if (((e = qi(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                ns(t, e),
                vl(r, !0),
                r.tail === null && r.tailMode === "hidden" && !f.alternate && !qe)
              )
                return (gt(t), null)
            } else
              2 * He() - r.renderingStartTime > is &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), vl(r, !1), (t.lanes = 4194304))
          r.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((e = r.last), e !== null ? (e.sibling = f) : (t.child = f), (r.last = f))
        }
        return r.tail !== null
          ? ((e = r.tail),
            (r.rendering = e),
            (r.tail = e.sibling),
            (r.renderingStartTime = He()),
            (e.sibling = null),
            (a = At.current),
            ae(At, u ? (a & 1) | 2 : a & 1),
            qe && ma(t, r.treeForkCount),
            e)
          : (gt(t), null)
      case 22:
      case 23:
        return (
          hn(t),
          Ec(),
          (r = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== r && (t.flags |= 8192)
            : r && (t.flags |= 8192),
          r
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (gt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : gt(t),
          (a = t.updateQueue),
          a !== null && ns(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (r = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (r = t.memoizedState.cachePool.pool),
          r !== a && (t.flags |= 2048),
          e !== null && q(Eo),
          null
        )
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          ga(Ot),
          gt(t),
          null
        )
      case 25:
        return null
      case 30:
        return null
    }
    throw Error(i(156, t.tag))
  }
  function Z1(e, t) {
    switch ((sc(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null)
      case 3:
        return (
          ga(Ot),
          Se(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 26:
      case 27:
      case 5:
        return (ze(t), null)
      case 31:
        if (t.memoizedState !== null) {
          if ((hn(t), t.alternate === null)) throw Error(i(340))
          So()
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null)
      case 13:
        if ((hn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(i(340))
          So()
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null)
      case 19:
        return (q(At), null)
      case 4:
        return (Se(), null)
      case 10:
        return (ga(t.type), null)
      case 22:
      case 23:
        return (
          hn(t),
          Ec(),
          e !== null && q(Eo),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 24:
        return (ga(Ot), null)
      case 25:
        return null
      default:
        return null
    }
  }
  function Gh(e, t) {
    switch ((sc(t), t.tag)) {
      case 3:
        ;(ga(Ot), Se())
        break
      case 26:
      case 27:
      case 5:
        ze(t)
        break
      case 4:
        Se()
        break
      case 31:
        t.memoizedState !== null && hn(t)
        break
      case 13:
        hn(t)
        break
      case 19:
        q(At)
        break
      case 10:
        ga(t.type)
        break
      case 22:
      case 23:
        ;(hn(t), Ec(), e !== null && q(Eo))
        break
      case 24:
        ga(Ot)
    }
  }
  function bl(e, t) {
    try {
      var a = t.updateQueue,
        r = a !== null ? a.lastEffect : null
      if (r !== null) {
        var u = r.next
        a = u
        do {
          if ((a.tag & e) === e) {
            r = void 0
            var f = a.create,
              g = a.inst
            ;((r = f()), (g.destroy = r))
          }
          a = a.next
        } while (a !== u)
      }
    } catch (S) {
      tt(t, t.return, S)
    }
  }
  function Xa(e, t, a) {
    try {
      var r = t.updateQueue,
        u = r !== null ? r.lastEffect : null
      if (u !== null) {
        var f = u.next
        r = f
        do {
          if ((r.tag & e) === e) {
            var g = r.inst,
              S = g.destroy
            if (S !== void 0) {
              ;((g.destroy = void 0), (u = t))
              var j = a,
                I = S
              try {
                I()
              } catch (Z) {
                tt(u, j, Z)
              }
            }
          }
          r = r.next
        } while (r !== f)
      }
    } catch (Z) {
      tt(t, t.return, Z)
    }
  }
  function Yh(e) {
    var t = e.updateQueue
    if (t !== null) {
      var a = e.stateNode
      try {
        _m(t, a)
      } catch (r) {
        tt(e, e.return, r)
      }
    }
  }
  function Fh(e, t, a) {
    ;((a.props = wo(e.type, e.memoizedProps)), (a.state = e.memoizedState))
    try {
      a.componentWillUnmount()
    } catch (r) {
      tt(e, t, r)
    }
  }
  function Sl(e, t) {
    try {
      var a = e.ref
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode
            break
          case 30:
            r = e.stateNode
            break
          default:
            r = e.stateNode
        }
        typeof a == "function" ? (e.refCleanup = a(r)) : (a.current = r)
      }
    } catch (u) {
      tt(e, t, u)
    }
  }
  function Zn(e, t) {
    var a = e.ref,
      r = e.refCleanup
    if (a !== null)
      if (typeof r == "function")
        try {
          r()
        } catch (u) {
          tt(e, t, u)
        } finally {
          ;((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null))
        }
      else if (typeof a == "function")
        try {
          a(null)
        } catch (u) {
          tt(e, t, u)
        }
      else a.current = null
  }
  function Xh(e) {
    var t = e.type,
      a = e.memoizedProps,
      r = e.stateNode
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && r.focus()
          break e
        case "img":
          a.src ? (r.src = a.src) : a.srcSet && (r.srcset = a.srcSet)
      }
    } catch (u) {
      tt(e, e.return, u)
    }
  }
  function tf(e, t, a) {
    try {
      var r = e.stateNode
      ;(SS(r, e.type, a, t), (r[nn] = t))
    } catch (u) {
      tt(e, e.return, u)
    }
  }
  function Kh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && to(e.type)) || e.tag === 4
  }
  function nf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Kh(e.return)) return null
        e = e.return
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && to(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e
        ;((e.child.return = e), (e = e.child))
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }
  function af(e, t, a) {
    var r = e.tag
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(e, t)
          : ((t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a),
            t.appendChild(e),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = fa)))
    else if (
      r !== 4 &&
      (r === 27 && to(e.type) && ((a = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (af(e, t, a), e = e.sibling; e !== null; ) (af(e, t, a), (e = e.sibling))
  }
  function as(e, t, a) {
    var r = e.tag
    if (r === 5 || r === 6) ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e))
    else if (r !== 4 && (r === 27 && to(e.type) && (a = e.stateNode), (e = e.child), e !== null))
      for (as(e, t, a), e = e.sibling; e !== null; ) (as(e, t, a), (e = e.sibling))
  }
  function Wh(e) {
    var t = e.stateNode,
      a = e.memoizedProps
    try {
      for (var r = e.type, u = t.attributes; u.length; ) t.removeAttributeNode(u[0])
      ;(Xt(t, r, a), (t[Vt] = e), (t[nn] = a))
    } catch (f) {
      tt(e, e.return, f)
    }
  }
  var xa = !1,
    Bt = !1,
    of = !1,
    Qh = typeof WeakSet == "function" ? WeakSet : Set,
    Pt = null
  function J1(e, t) {
    if (((e = e.containerInfo), (Mf = Ts), (e = um(e)), Qu(e))) {
      if ("selectionStart" in e) var a = { start: e.selectionStart, end: e.selectionEnd }
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window
          var r = a.getSelection && a.getSelection()
          if (r && r.rangeCount !== 0) {
            a = r.anchorNode
            var u = r.anchorOffset,
              f = r.focusNode
            r = r.focusOffset
            try {
              ;(a.nodeType, f.nodeType)
            } catch {
              a = null
              break e
            }
            var g = 0,
              S = -1,
              j = -1,
              I = 0,
              Z = 0,
              oe = e,
              V = null
            t: for (;;) {
              for (
                var K;
                oe !== a || (u !== 0 && oe.nodeType !== 3) || (S = g + u),
                  oe !== f || (r !== 0 && oe.nodeType !== 3) || (j = g + r),
                  oe.nodeType === 3 && (g += oe.nodeValue.length),
                  (K = oe.firstChild) !== null;
              )
                ((V = oe), (oe = K))
              for (;;) {
                if (oe === e) break t
                if (
                  (V === a && ++I === u && (S = g),
                  V === f && ++Z === r && (j = g),
                  (K = oe.nextSibling) !== null)
                )
                  break
                ;((oe = V), (V = oe.parentNode))
              }
              oe = K
            }
            a = S === -1 || j === -1 ? null : { start: S, end: j }
          } else a = null
        }
      a = a || { start: 0, end: 0 }
    } else a = null
    for (Af = { focusedElem: e, selectionRange: a }, Ts = !1, Pt = t; Pt !== null; )
      if (((t = Pt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (Pt = e))
      else
        for (; Pt !== null; ) {
          switch (((t = Pt), (f = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue), (e = e !== null ? e.events : null), e !== null)
              )
                for (a = 0; a < e.length; a++) ((u = e[a]), (u.ref.impl = u.nextImpl))
              break
            case 11:
            case 15:
              break
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                ;((e = void 0),
                  (a = t),
                  (u = f.memoizedProps),
                  (f = f.memoizedState),
                  (r = a.stateNode))
                try {
                  var he = wo(a.type, u)
                  ;((e = r.getSnapshotBeforeUpdate(he, f)),
                    (r.__reactInternalSnapshotBeforeUpdate = e))
                } catch (Ce) {
                  tt(a, a.return, Ce)
                }
              }
              break
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)) Of(e)
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Of(e)
                      break
                    default:
                      e.textContent = ""
                  }
              }
              break
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break
            default:
              if ((e & 1024) !== 0) throw Error(i(163))
          }
          if (((e = t.sibling), e !== null)) {
            ;((e.return = t.return), (Pt = e))
            break
          }
          Pt = t.return
        }
  }
  function Zh(e, t, a) {
    var r = a.flags
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ;(Ea(e, a), r & 4 && bl(5, a))
        break
      case 1:
        if ((Ea(e, a), r & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount()
            } catch (g) {
              tt(a, a.return, g)
            }
          else {
            var u = wo(a.type, t.memoizedProps)
            t = t.memoizedState
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate)
            } catch (g) {
              tt(a, a.return, g)
            }
          }
        ;(r & 64 && Yh(a), r & 512 && Sl(a, a.return))
        break
      case 3:
        if ((Ea(e, a), r & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode
                break
              case 1:
                t = a.child.stateNode
            }
          try {
            _m(e, t)
          } catch (g) {
            tt(a, a.return, g)
          }
        }
        break
      case 27:
        t === null && r & 4 && Wh(a)
      case 26:
      case 5:
        ;(Ea(e, a), t === null && r & 4 && Xh(a), r & 512 && Sl(a, a.return))
        break
      case 12:
        Ea(e, a)
        break
      case 31:
        ;(Ea(e, a), r & 4 && tg(e, a))
        break
      case 13:
        ;(Ea(e, a),
          r & 4 && ng(e, a),
          r & 64 &&
            ((e = a.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((a = sS.bind(null, a)), wS(e, a)))))
        break
      case 22:
        if (((r = a.memoizedState !== null || xa), !r)) {
          ;((t = (t !== null && t.memoizedState !== null) || Bt), (u = xa))
          var f = Bt
          ;((xa = r),
            (Bt = t) && !f ? Ta(e, a, (a.subtreeFlags & 8772) !== 0) : Ea(e, a),
            (xa = u),
            (Bt = f))
        }
        break
      case 30:
        break
      default:
        Ea(e, a)
    }
  }
  function Jh(e) {
    var t = e.alternate
    ;(t !== null && ((e.alternate = null), Jh(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && ju(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null))
  }
  var vt = null,
    on = !1
  function Ca(e, t, a) {
    for (a = a.child; a !== null; ) (eg(e, t, a), (a = a.sibling))
  }
  function eg(e, t, a) {
    if (qt && typeof qt.onCommitFiberUnmount == "function")
      try {
        qt.onCommitFiberUnmount(xn, a)
      } catch {}
    switch (a.tag) {
      case 26:
        ;(Bt || Zn(a, t),
          Ca(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)))
        break
      case 27:
        Bt || Zn(a, t)
        var r = vt,
          u = on
        ;(to(a.type) && ((vt = a.stateNode), (on = !1)),
          Ca(e, t, a),
          zl(a.stateNode),
          (vt = r),
          (on = u))
        break
      case 5:
        Bt || Zn(a, t)
      case 6:
        if (((r = vt), (u = on), (vt = null), Ca(e, t, a), (vt = r), (on = u), vt !== null))
          if (on)
            try {
              ;(vt.nodeType === 9
                ? vt.body
                : vt.nodeName === "HTML"
                  ? vt.ownerDocument.body
                  : vt
              ).removeChild(a.stateNode)
            } catch (f) {
              tt(a, t, f)
            }
          else
            try {
              vt.removeChild(a.stateNode)
            } catch (f) {
              tt(a, t, f)
            }
        break
      case 18:
        vt !== null &&
          (on
            ? ((e = vt),
              Yg(
                e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
                a.stateNode
              ),
              Er(e))
            : Yg(vt, a.stateNode))
        break
      case 4:
        ;((r = vt),
          (u = on),
          (vt = a.stateNode.containerInfo),
          (on = !0),
          Ca(e, t, a),
          (vt = r),
          (on = u))
        break
      case 0:
      case 11:
      case 14:
      case 15:
        ;(Xa(2, a, t), Bt || Xa(4, a, t), Ca(e, t, a))
        break
      case 1:
        ;(Bt ||
          (Zn(a, t), (r = a.stateNode), typeof r.componentWillUnmount == "function" && Fh(a, t, r)),
          Ca(e, t, a))
        break
      case 21:
        Ca(e, t, a)
        break
      case 22:
        ;((Bt = (r = Bt) || a.memoizedState !== null), Ca(e, t, a), (Bt = r))
        break
      default:
        Ca(e, t, a)
    }
  }
  function tg(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated
      try {
        Er(e)
      } catch (a) {
        tt(t, t.return, a)
      }
    }
  }
  function ng(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Er(e)
      } catch (a) {
        tt(t, t.return, a)
      }
  }
  function eS(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode
        return (t === null && (t = e.stateNode = new Qh()), t)
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Qh()),
          t
        )
      default:
        throw Error(i(435, e.tag))
    }
  }
  function os(e, t) {
    var a = eS(e)
    t.forEach(function (r) {
      if (!a.has(r)) {
        a.add(r)
        var u = uS.bind(null, e, r)
        r.then(u, u)
      }
    })
  }
  function rn(e, t) {
    var a = t.deletions
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var u = a[r],
          f = e,
          g = t,
          S = g
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (to(S.type)) {
                ;((vt = S.stateNode), (on = !1))
                break e
              }
              break
            case 5:
              ;((vt = S.stateNode), (on = !1))
              break e
            case 3:
            case 4:
              ;((vt = S.stateNode.containerInfo), (on = !0))
              break e
          }
          S = S.return
        }
        if (vt === null) throw Error(i(160))
        ;(eg(f, g, u),
          (vt = null),
          (on = !1),
          (f = u.alternate),
          f !== null && (f.return = null),
          (u.return = null))
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (ag(t, e), (t = t.sibling))
  }
  var Hn = null
  function ag(e, t) {
    var a = e.alternate,
      r = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ;(rn(t, e), ln(e), r & 4 && (Xa(3, e, e.return), bl(3, e), Xa(5, e, e.return)))
        break
      case 1:
        ;(rn(t, e),
          ln(e),
          r & 512 && (Bt || a === null || Zn(a, a.return)),
          r & 64 &&
            xa &&
            ((e = e.updateQueue),
            e !== null &&
              ((r = e.callbacks),
              r !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? r : a.concat(r))))))
        break
      case 26:
        var u = Hn
        if ((rn(t, e), ln(e), r & 512 && (Bt || a === null || Zn(a, a.return)), r & 4)) {
          var f = a !== null ? a.memoizedState : null
          if (((r = e.memoizedState), a === null))
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  ;((r = e.type), (a = e.memoizedProps), (u = u.ownerDocument || u))
                  t: switch (r) {
                    case "title":
                      ;((f = u.getElementsByTagName("title")[0]),
                        (!f ||
                          f[Fr] ||
                          f[Vt] ||
                          f.namespaceURI === "http://www.w3.org/2000/svg" ||
                          f.hasAttribute("itemprop")) &&
                          ((f = u.createElement(r)),
                          u.head.insertBefore(f, u.querySelector("head > title"))),
                        Xt(f, r, a),
                        (f[Vt] = e),
                        Ht(f),
                        (r = f))
                      break e
                    case "link":
                      var g = ay("link", "href", u).get(r + (a.href || ""))
                      if (g) {
                        for (var S = 0; S < g.length; S++)
                          if (
                            ((f = g[S]),
                            f.getAttribute("href") ===
                              (a.href == null || a.href === "" ? null : a.href) &&
                              f.getAttribute("rel") === (a.rel == null ? null : a.rel) &&
                              f.getAttribute("title") === (a.title == null ? null : a.title) &&
                              f.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            g.splice(S, 1)
                            break t
                          }
                      }
                      ;((f = u.createElement(r)), Xt(f, r, a), u.head.appendChild(f))
                      break
                    case "meta":
                      if ((g = ay("meta", "content", u).get(r + (a.content || "")))) {
                        for (S = 0; S < g.length; S++)
                          if (
                            ((f = g[S]),
                            f.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              f.getAttribute("name") === (a.name == null ? null : a.name) &&
                              f.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              f.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              f.getAttribute("charset") === (a.charSet == null ? null : a.charSet))
                          ) {
                            g.splice(S, 1)
                            break t
                          }
                      }
                      ;((f = u.createElement(r)), Xt(f, r, a), u.head.appendChild(f))
                      break
                    default:
                      throw Error(i(468, r))
                  }
                  ;((f[Vt] = e), Ht(f), (r = f))
                }
                e.stateNode = r
              } else oy(u, e.type, e.stateNode)
            else e.stateNode = ny(u, r, e.memoizedProps)
          else
            f !== r
              ? (f === null
                  ? a.stateNode !== null && ((a = a.stateNode), a.parentNode.removeChild(a))
                  : f.count--,
                r === null ? oy(u, e.type, e.stateNode) : ny(u, r, e.memoizedProps))
              : r === null && e.stateNode !== null && tf(e, e.memoizedProps, a.memoizedProps)
        }
        break
      case 27:
        ;(rn(t, e),
          ln(e),
          r & 512 && (Bt || a === null || Zn(a, a.return)),
          a !== null && r & 4 && tf(e, e.memoizedProps, a.memoizedProps))
        break
      case 5:
        if ((rn(t, e), ln(e), r & 512 && (Bt || a === null || Zn(a, a.return)), e.flags & 32)) {
          u = e.stateNode
          try {
            Yo(u, "")
          } catch (he) {
            tt(e, e.return, he)
          }
        }
        ;(r & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), tf(e, u, a !== null ? a.memoizedProps : u)),
          r & 1024 && (of = !0))
        break
      case 6:
        if ((rn(t, e), ln(e), r & 4)) {
          if (e.stateNode === null) throw Error(i(162))
          ;((r = e.memoizedProps), (a = e.stateNode))
          try {
            a.nodeValue = r
          } catch (he) {
            tt(e, e.return, he)
          }
        }
        break
      case 3:
        if (
          ((Ss = null),
          (u = Hn),
          (Hn = vs(t.containerInfo)),
          rn(t, e),
          (Hn = u),
          ln(e),
          r & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Er(t.containerInfo)
          } catch (he) {
            tt(e, e.return, he)
          }
        of && ((of = !1), og(e))
        break
      case 4:
        ;((r = Hn), (Hn = vs(e.stateNode.containerInfo)), rn(t, e), ln(e), (Hn = r))
        break
      case 12:
        ;(rn(t, e), ln(e))
        break
      case 31:
        ;(rn(t, e),
          ln(e),
          r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), os(e, r))))
        break
      case 13:
        ;(rn(t, e),
          ln(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (a !== null && a.memoizedState !== null) &&
            (ls = He()),
          r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), os(e, r))))
        break
      case 22:
        u = e.memoizedState !== null
        var j = a !== null && a.memoizedState !== null,
          I = xa,
          Z = Bt
        if (((xa = I || u), (Bt = Z || j), rn(t, e), (Bt = Z), (xa = I), ln(e), r & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (a === null || j || xa || Bt || zo(e)),
              a = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                j = a = t
                try {
                  if (((f = j.stateNode), u))
                    ((g = f.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none"))
                  else {
                    S = j.stateNode
                    var oe = j.memoizedProps.style,
                      V = oe != null && oe.hasOwnProperty("display") ? oe.display : null
                    S.style.display = V == null || typeof V == "boolean" ? "" : ("" + V).trim()
                  }
                } catch (he) {
                  tt(j, j.return, he)
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                j = t
                try {
                  j.stateNode.nodeValue = u ? "" : j.memoizedProps
                } catch (he) {
                  tt(j, j.return, he)
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                j = t
                try {
                  var K = j.stateNode
                  u ? Fg(K, !0) : Fg(j.stateNode, !1)
                } catch (he) {
                  tt(j, j.return, he)
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
              t.child !== null
            ) {
              ;((t.child.return = t), (t = t.child))
              continue
            }
            if (t === e) break e
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e
              ;(a === t && (a = null), (t = t.return))
            }
            ;(a === t && (a = null), (t.sibling.return = t.return), (t = t.sibling))
          }
        r & 4 &&
          ((r = e.updateQueue),
          r !== null && ((a = r.retryQueue), a !== null && ((r.retryQueue = null), os(e, a))))
        break
      case 19:
        ;(rn(t, e),
          ln(e),
          r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), os(e, r))))
        break
      case 30:
        break
      case 21:
        break
      default:
        ;(rn(t, e), ln(e))
    }
  }
  function ln(e) {
    var t = e.flags
    if (t & 2) {
      try {
        for (var a, r = e.return; r !== null; ) {
          if (Kh(r)) {
            a = r
            break
          }
          r = r.return
        }
        if (a == null) throw Error(i(160))
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              f = nf(e)
            as(e, f, u)
            break
          case 5:
            var g = a.stateNode
            a.flags & 32 && (Yo(g, ""), (a.flags &= -33))
            var S = nf(e)
            as(e, S, g)
            break
          case 3:
          case 4:
            var j = a.stateNode.containerInfo,
              I = nf(e)
            af(e, I, j)
            break
          default:
            throw Error(i(161))
        }
      } catch (Z) {
        tt(e, e.return, Z)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }
  function og(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e
        ;(og(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling))
      }
  }
  function Ea(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Zh(e, t.alternate, t), (t = t.sibling))
  }
  function zo(e) {
    for (e = e.child; e !== null; ) {
      var t = e
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ;(Xa(4, t, t.return), zo(t))
          break
        case 1:
          Zn(t, t.return)
          var a = t.stateNode
          ;(typeof a.componentWillUnmount == "function" && Fh(t, t.return, a), zo(t))
          break
        case 27:
          zl(t.stateNode)
        case 26:
        case 5:
          ;(Zn(t, t.return), zo(t))
          break
        case 22:
          t.memoizedState === null && zo(t)
          break
        case 30:
          zo(t)
          break
        default:
          zo(t)
      }
      e = e.sibling
    }
  }
  function Ta(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var r = t.alternate,
        u = e,
        f = t,
        g = f.flags
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ;(Ta(u, f, a), bl(4, f))
          break
        case 1:
          if ((Ta(u, f, a), (r = f), (u = r.stateNode), typeof u.componentDidMount == "function"))
            try {
              u.componentDidMount()
            } catch (I) {
              tt(r, r.return, I)
            }
          if (((r = f), (u = r.updateQueue), u !== null)) {
            var S = r.stateNode
            try {
              var j = u.shared.hiddenCallbacks
              if (j !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < j.length; u++) km(j[u], S)
            } catch (I) {
              tt(r, r.return, I)
            }
          }
          ;(a && g & 64 && Yh(f), Sl(f, f.return))
          break
        case 27:
          Wh(f)
        case 26:
        case 5:
          ;(Ta(u, f, a), a && r === null && g & 4 && Xh(f), Sl(f, f.return))
          break
        case 12:
          Ta(u, f, a)
          break
        case 31:
          ;(Ta(u, f, a), a && g & 4 && tg(u, f))
          break
        case 13:
          ;(Ta(u, f, a), a && g & 4 && ng(u, f))
          break
        case 22:
          ;(f.memoizedState === null && Ta(u, f, a), Sl(f, f.return))
          break
        case 30:
          break
        default:
          Ta(u, f, a)
      }
      t = t.sibling
    }
  }
  function rf(e, t) {
    var a = null
    ;(e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && ll(a)))
  }
  function lf(e, t) {
    ;((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ll(e)))
  }
  function Pn(e, t, a, r) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (rg(e, t, a, r), (t = t.sibling))
  }
  function rg(e, t, a, r) {
    var u = t.flags
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ;(Pn(e, t, a, r), u & 2048 && bl(9, t))
        break
      case 1:
        Pn(e, t, a, r)
        break
      case 3:
        ;(Pn(e, t, a, r),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && ll(e))))
        break
      case 12:
        if (u & 2048) {
          ;(Pn(e, t, a, r), (e = t.stateNode))
          try {
            var f = t.memoizedProps,
              g = f.id,
              S = f.onPostCommit
            typeof S == "function" &&
              S(g, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
          } catch (j) {
            tt(t, t.return, j)
          }
        } else Pn(e, t, a, r)
        break
      case 31:
        Pn(e, t, a, r)
        break
      case 13:
        Pn(e, t, a, r)
        break
      case 23:
        break
      case 22:
        ;((f = t.stateNode),
          (g = t.alternate),
          t.memoizedState !== null
            ? f._visibility & 2
              ? Pn(e, t, a, r)
              : xl(e, t)
            : f._visibility & 2
              ? Pn(e, t, a, r)
              : ((f._visibility |= 2), dr(e, t, a, r, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && rf(g, t))
        break
      case 24:
        ;(Pn(e, t, a, r), u & 2048 && lf(t.alternate, t))
        break
      default:
        Pn(e, t, a, r)
    }
  }
  function dr(e, t, a, r, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var f = e,
        g = t,
        S = a,
        j = r,
        I = g.flags
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          ;(dr(f, g, S, j, u), bl(8, g))
          break
        case 23:
          break
        case 22:
          var Z = g.stateNode
          ;(g.memoizedState !== null
            ? Z._visibility & 2
              ? dr(f, g, S, j, u)
              : xl(f, g)
            : ((Z._visibility |= 2), dr(f, g, S, j, u)),
            u && I & 2048 && rf(g.alternate, g))
          break
        case 24:
          ;(dr(f, g, S, j, u), u && I & 2048 && lf(g.alternate, g))
          break
        default:
          dr(f, g, S, j, u)
      }
      t = t.sibling
    }
  }
  function xl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          r = t,
          u = r.flags
        switch (r.tag) {
          case 22:
            ;(xl(a, r), u & 2048 && rf(r.alternate, r))
            break
          case 24:
            ;(xl(a, r), u & 2048 && lf(r.alternate, r))
            break
          default:
            xl(a, r)
        }
        t = t.sibling
      }
  }
  var Cl = 8192
  function pr(e, t, a) {
    if (e.subtreeFlags & Cl) for (e = e.child; e !== null; ) (lg(e, t, a), (e = e.sibling))
  }
  function lg(e, t, a) {
    switch (e.tag) {
      case 26:
        ;(pr(e, t, a),
          e.flags & Cl && e.memoizedState !== null && HS(a, Hn, e.memoizedState, e.memoizedProps))
        break
      case 5:
        pr(e, t, a)
        break
      case 3:
      case 4:
        var r = Hn
        ;((Hn = vs(e.stateNode.containerInfo)), pr(e, t, a), (Hn = r))
        break
      case 22:
        e.memoizedState === null &&
          ((r = e.alternate),
          r !== null && r.memoizedState !== null
            ? ((r = Cl), (Cl = 16777216), pr(e, t, a), (Cl = r))
            : pr(e, t, a))
        break
      default:
        pr(e, t, a)
    }
  }
  function ig(e) {
    var t = e.alternate
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null
      do ((t = e.sibling), (e.sibling = null), (e = t))
      while (e !== null)
    }
  }
  function El(e) {
    var t = e.deletions
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var r = t[a]
          ;((Pt = r), ug(r, e))
        }
      ig(e)
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (sg(e), (e = e.sibling))
  }
  function sg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ;(El(e), e.flags & 2048 && Xa(9, e, e.return))
        break
      case 3:
        El(e)
        break
      case 12:
        El(e)
        break
      case 22:
        var t = e.stateNode
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), rs(e))
          : El(e)
        break
      default:
        El(e)
    }
  }
  function rs(e) {
    var t = e.deletions
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var r = t[a]
          ;((Pt = r), ug(r, e))
        }
      ig(e)
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          ;(Xa(8, t, t.return), rs(t))
          break
        case 22:
          ;((a = t.stateNode), a._visibility & 2 && ((a._visibility &= -3), rs(t)))
          break
        default:
          rs(t)
      }
      e = e.sibling
    }
  }
  function ug(e, t) {
    for (; Pt !== null; ) {
      var a = Pt
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Xa(8, a, t)
          break
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var r = a.memoizedState.cachePool.pool
            r != null && r.refCount++
          }
          break
        case 24:
          ll(a.memoizedState.cache)
      }
      if (((r = a.child), r !== null)) ((r.return = a), (Pt = r))
      else
        e: for (a = e; Pt !== null; ) {
          r = Pt
          var u = r.sibling,
            f = r.return
          if ((Jh(r), r === a)) {
            Pt = null
            break e
          }
          if (u !== null) {
            ;((u.return = f), (Pt = u))
            break e
          }
          Pt = f
        }
    }
  }
  var tS = {
      getCacheForType: function (e) {
        var t = Yt(Ot),
          a = t.data.get(e)
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a)
      },
      cacheSignal: function () {
        return Yt(Ot).controller.signal
      },
    },
    nS = typeof WeakMap == "function" ? WeakMap : Map,
    Ke = 0,
    dt = null,
    je = null,
    Pe = 0,
    et = 0,
    gn = null,
    Ka = !1,
    mr = !1,
    sf = !1,
    Ra = 0,
    Tt = 0,
    Wa = 0,
    Oo = 0,
    uf = 0,
    yn = 0,
    hr = 0,
    Tl = null,
    sn = null,
    cf = !1,
    ls = 0,
    cg = 0,
    is = 1 / 0,
    ss = null,
    Qa = null,
    $t = 0,
    Za = null,
    gr = null,
    Ma = 0,
    ff = 0,
    df = null,
    fg = null,
    Rl = 0,
    pf = null
  function vn() {
    return (Ke & 2) !== 0 && Pe !== 0 ? Pe & -Pe : z.T !== null ? bf() : Ap()
  }
  function dg() {
    if (yn === 0)
      if ((Pe & 536870912) === 0 || qe) {
        var e = fo
        ;((fo <<= 1), (fo & 3932160) === 0 && (fo = 262144), (yn = e))
      } else yn = 536870912
    return ((e = mn.current), e !== null && (e.flags |= 32), yn)
  }
  function un(e, t, a) {
    ;(((e === dt && (et === 2 || et === 9)) || e.cancelPendingCommit !== null) &&
      (yr(e, 0), Ja(e, Pe, yn, !1)),
      Yr(e, a),
      ((Ke & 2) === 0 || e !== dt) &&
        (e === dt && ((Ke & 2) === 0 && (Oo |= a), Tt === 4 && Ja(e, Pe, yn, !1)), Jn(e)))
  }
  function pg(e, t, a) {
    if ((Ke & 6) !== 0) throw Error(i(327))
    var r = (!a && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Gr(e, t),
      u = r ? rS(e, t) : hf(e, t, !0),
      f = r
    do {
      if (u === 0) {
        mr && !r && Ja(e, t, 0, !1)
        break
      } else {
        if (((a = e.current.alternate), f && !aS(a))) {
          ;((u = hf(e, t, !1)), (f = !1))
          continue
        }
        if (u === 2) {
          if (((f = t), e.errorRecoveryDisabledLanes & f)) var g = 0
          else
            ((g = e.pendingLanes & -536870913), (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0))
          if (g !== 0) {
            t = g
            e: {
              var S = e
              u = Tl
              var j = S.current.memoizedState.isDehydrated
              if ((j && (yr(S, g).flags |= 256), (g = hf(S, g, !1)), g !== 2)) {
                if (sf && !j) {
                  ;((S.errorRecoveryDisabledLanes |= f), (Oo |= f), (u = 4))
                  break e
                }
                ;((f = sn), (sn = u), f !== null && (sn === null ? (sn = f) : sn.push.apply(sn, f)))
              }
              u = g
            }
            if (((f = !1), u !== 2)) continue
          }
        }
        if (u === 1) {
          ;(yr(e, 0), Ja(e, t, 0, !0))
          break
        }
        e: {
          switch (((r = e), (f = u), f)) {
            case 0:
            case 1:
              throw Error(i(345))
            case 4:
              if ((t & 4194048) !== t) break
            case 6:
              Ja(r, t, yn, !Ka)
              break e
            case 2:
              sn = null
              break
            case 3:
            case 5:
              break
            default:
              throw Error(i(329))
          }
          if ((t & 62914560) === t && ((u = ls + 300 - He()), 10 < u)) {
            if ((Ja(r, t, yn, !Ka), vi(r, 0, !0) !== 0)) break e
            ;((Ma = t),
              (r.timeoutHandle = Vg(
                mg.bind(null, r, a, sn, ss, cf, t, yn, Oo, hr, Ka, f, "Throttled", -0, 0),
                u
              )))
            break e
          }
          mg(r, a, sn, ss, cf, t, yn, Oo, hr, Ka, f, null, -0, 0)
        }
      }
      break
    } while (!0)
    Jn(e)
  }
  function mg(e, t, a, r, u, f, g, S, j, I, Z, oe, V, K) {
    if (
      ((e.timeoutHandle = -1), (oe = t.subtreeFlags), oe & 8192 || (oe & 16785408) === 16785408)
    ) {
      ;((oe = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: fa,
      }),
        lg(t, f, oe))
      var he = (f & 62914560) === f ? ls - He() : (f & 4194048) === f ? cg - He() : 0
      if (((he = PS(oe, he)), he !== null)) {
        ;((Ma = f),
          (e.cancelPendingCommit = he(Cg.bind(null, e, t, f, a, r, u, g, S, j, Z, oe, null, V, K))),
          Ja(e, f, g, !I))
        return
      }
    }
    Cg(e, t, f, a, r, u, g, S, j)
  }
  function aS(e) {
    for (var t = e; ; ) {
      var a = t.tag
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var r = 0; r < a.length; r++) {
          var u = a[r],
            f = u.getSnapshot
          u = u.value
          try {
            if (!dn(f(), u)) return !1
          } catch {
            return !1
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null)) ((a.return = t), (t = a))
      else {
        if (t === e) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0
          t = t.return
        }
        ;((t.sibling.return = t.return), (t = t.sibling))
      }
    }
    return !0
  }
  function Ja(e, t, a, r) {
    ;((t &= ~uf),
      (t &= ~Oo),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      r && (e.warmLanes |= t),
      (r = e.expirationTimes))
    for (var u = t; 0 < u; ) {
      var f = 31 - Wt(u),
        g = 1 << f
      ;((r[f] = -1), (u &= ~g))
    }
    a !== 0 && Tp(e, a, t)
  }
  function us() {
    return (Ke & 6) === 0 ? (Ml(0), !1) : !0
  }
  function mf() {
    if (je !== null) {
      if (et === 0) var e = je.return
      else ((e = je), (ha = xo = null), zc(e), (ir = null), (sl = 0), (e = je))
      for (; e !== null; ) (Gh(e.alternate, e), (e = e.return))
      je = null
    }
  }
  function yr(e, t) {
    var a = e.timeoutHandle
    ;(a !== -1 && ((e.timeoutHandle = -1), ES(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      (Ma = 0),
      mf(),
      (dt = e),
      (je = a = pa(e.current, null)),
      (Pe = t),
      (et = 0),
      (gn = null),
      (Ka = !1),
      (mr = Gr(e, t)),
      (sf = !1),
      (hr = yn = uf = Oo = Wa = Tt = 0),
      (sn = Tl = null),
      (cf = !1),
      (t & 8) !== 0 && (t |= t & 32))
    var r = e.entangledLanes
    if (r !== 0)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var u = 31 - Wt(r),
          f = 1 << u
        ;((t |= e[u]), (r &= ~f))
      }
    return ((Ra = t), Oi(), a)
  }
  function hg(e, t) {
    ;((Oe = null),
      (z.H = gl),
      t === lr || t === $i
        ? ((t = Nm()), (et = 3))
        : t === yc
          ? ((t = Nm()), (et = 4))
          : (et =
              t === Gc
                ? 8
                : t !== null && typeof t == "object" && typeof t.then == "function"
                  ? 6
                  : 1),
      (gn = t),
      je === null && ((Tt = 1), Zi(e, Rn(t, e.current))))
  }
  function gg() {
    var e = mn.current
    return e === null
      ? !0
      : (Pe & 4194048) === Pe
        ? zn === null
        : (Pe & 62914560) === Pe || (Pe & 536870912) !== 0
          ? e === zn
          : !1
  }
  function yg() {
    var e = z.H
    return ((z.H = gl), e === null ? gl : e)
  }
  function vg() {
    var e = z.A
    return ((z.A = tS), e)
  }
  function cs() {
    ;((Tt = 4),
      Ka || ((Pe & 4194048) !== Pe && mn.current !== null) || (mr = !0),
      ((Wa & 134217727) === 0 && (Oo & 134217727) === 0) || dt === null || Ja(dt, Pe, yn, !1))
  }
  function hf(e, t, a) {
    var r = Ke
    Ke |= 2
    var u = yg(),
      f = vg()
    ;((dt !== e || Pe !== t) && ((ss = null), yr(e, t)), (t = !1))
    var g = Tt
    e: do
      try {
        if (et !== 0 && je !== null) {
          var S = je,
            j = gn
          switch (et) {
            case 8:
              ;(mf(), (g = 6))
              break e
            case 3:
            case 2:
            case 9:
            case 6:
              mn.current === null && (t = !0)
              var I = et
              if (((et = 0), (gn = null), vr(e, S, j, I), a && mr)) {
                g = 0
                break e
              }
              break
            default:
              ;((I = et), (et = 0), (gn = null), vr(e, S, j, I))
          }
        }
        ;(oS(), (g = Tt))
        break
      } catch (Z) {
        hg(e, Z)
      }
    while (!0)
    return (
      t && e.shellSuspendCounter++,
      (ha = xo = null),
      (Ke = r),
      (z.H = u),
      (z.A = f),
      je === null && ((dt = null), (Pe = 0), Oi()),
      g
    )
  }
  function oS() {
    for (; je !== null; ) bg(je)
  }
  function rS(e, t) {
    var a = Ke
    Ke |= 2
    var r = yg(),
      u = vg()
    dt !== e || Pe !== t ? ((ss = null), (is = He() + 500), yr(e, t)) : (mr = Gr(e, t))
    e: do
      try {
        if (et !== 0 && je !== null) {
          t = je
          var f = gn
          t: switch (et) {
            case 1:
              ;((et = 0), (gn = null), vr(e, t, f, 1))
              break
            case 2:
            case 9:
              if (zm(f)) {
                ;((et = 0), (gn = null), Sg(t))
                break
              }
              ;((t = function () {
                ;((et !== 2 && et !== 9) || dt !== e || (et = 7), Jn(e))
              }),
                f.then(t, t))
              break e
            case 3:
              et = 7
              break e
            case 4:
              et = 5
              break e
            case 7:
              zm(f) ? ((et = 0), (gn = null), Sg(t)) : ((et = 0), (gn = null), vr(e, t, f, 7))
              break
            case 5:
              var g = null
              switch (je.tag) {
                case 26:
                  g = je.memoizedState
                case 5:
                case 27:
                  var S = je
                  if (g ? ry(g) : S.stateNode.complete) {
                    ;((et = 0), (gn = null))
                    var j = S.sibling
                    if (j !== null) je = j
                    else {
                      var I = S.return
                      I !== null ? ((je = I), fs(I)) : (je = null)
                    }
                    break t
                  }
              }
              ;((et = 0), (gn = null), vr(e, t, f, 5))
              break
            case 6:
              ;((et = 0), (gn = null), vr(e, t, f, 6))
              break
            case 8:
              ;(mf(), (Tt = 6))
              break e
            default:
              throw Error(i(462))
          }
        }
        lS()
        break
      } catch (Z) {
        hg(e, Z)
      }
    while (!0)
    return (
      (ha = xo = null),
      (z.H = r),
      (z.A = u),
      (Ke = a),
      je !== null ? 0 : ((dt = null), (Pe = 0), Oi(), Tt)
    )
  }
  function lS() {
    for (; je !== null && !ye(); ) bg(je)
  }
  function bg(e) {
    var t = qh(e.alternate, e, Ra)
    ;((e.memoizedProps = e.pendingProps), t === null ? fs(e) : (je = t))
  }
  function Sg(e) {
    var t = e,
      a = t.alternate
    switch (t.tag) {
      case 15:
      case 0:
        t = Lh(a, t, t.pendingProps, t.type, void 0, Pe)
        break
      case 11:
        t = Lh(a, t, t.pendingProps, t.type.render, t.ref, Pe)
        break
      case 5:
        zc(t)
      default:
        ;(Gh(a, t), (t = je = vm(t, Ra)), (t = qh(a, t, Ra)))
    }
    ;((e.memoizedProps = e.pendingProps), t === null ? fs(e) : (je = t))
  }
  function vr(e, t, a, r) {
    ;((ha = xo = null), zc(t), (ir = null), (sl = 0))
    var u = t.return
    try {
      if (X1(e, u, t, a, Pe)) {
        ;((Tt = 1), Zi(e, Rn(a, e.current)), (je = null))
        return
      }
    } catch (f) {
      if (u !== null) throw ((je = u), f)
      ;((Tt = 1), Zi(e, Rn(a, e.current)), (je = null))
      return
    }
    t.flags & 32768
      ? (qe || r === 1
          ? (e = !0)
          : mr || (Pe & 536870912) !== 0
            ? (e = !1)
            : ((Ka = e = !0),
              (r === 2 || r === 9 || r === 3 || r === 6) &&
                ((r = mn.current), r !== null && r.tag === 13 && (r.flags |= 16384))),
        xg(t, e))
      : fs(t)
  }
  function fs(e) {
    var t = e
    do {
      if ((t.flags & 32768) !== 0) {
        xg(t, Ka)
        return
      }
      e = t.return
      var a = Q1(t.alternate, t, Ra)
      if (a !== null) {
        je = a
        return
      }
      if (((t = t.sibling), t !== null)) {
        je = t
        return
      }
      je = t = e
    } while (t !== null)
    Tt === 0 && (Tt = 5)
  }
  function xg(e, t) {
    do {
      var a = Z1(e.alternate, e)
      if (a !== null) {
        ;((a.flags &= 32767), (je = a))
        return
      }
      if (
        ((a = e.return),
        a !== null && ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        je = e
        return
      }
      je = e = a
    } while (e !== null)
    ;((Tt = 6), (je = null))
  }
  function Cg(e, t, a, r, u, f, g, S, j) {
    e.cancelPendingCommit = null
    do ds()
    while ($t !== 0)
    if ((Ke & 6) !== 0) throw Error(i(327))
    if (t !== null) {
      if (t === e.current) throw Error(i(177))
      if (
        ((f = t.lanes | t.childLanes),
        (f |= nc),
        Ub(e, a, f, g, S, j),
        e === dt && ((je = dt = null), (Pe = 0)),
        (gr = t),
        (Za = e),
        (Ma = a),
        (ff = f),
        (df = u),
        (fg = r),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            cS(Ct, function () {
              return (Ag(), null)
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (r = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || r)
      ) {
        ;((r = z.T), (z.T = null), (u = F.p), (F.p = 2), (g = Ke), (Ke |= 4))
        try {
          J1(e, t, a)
        } finally {
          ;((Ke = g), (F.p = u), (z.T = r))
        }
      }
      ;(($t = 1), Eg(), Tg(), Rg())
    }
  }
  function Eg() {
    if ($t === 1) {
      $t = 0
      var e = Za,
        t = gr,
        a = (t.flags & 13878) !== 0
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ;((a = z.T), (z.T = null))
        var r = F.p
        F.p = 2
        var u = Ke
        Ke |= 4
        try {
          ag(t, e)
          var f = Af,
            g = um(e.containerInfo),
            S = f.focusedElem,
            j = f.selectionRange
          if (g !== S && S && S.ownerDocument && sm(S.ownerDocument.documentElement, S)) {
            if (j !== null && Qu(S)) {
              var I = j.start,
                Z = j.end
              if ((Z === void 0 && (Z = I), "selectionStart" in S))
                ((S.selectionStart = I), (S.selectionEnd = Math.min(Z, S.value.length)))
              else {
                var oe = S.ownerDocument || document,
                  V = (oe && oe.defaultView) || window
                if (V.getSelection) {
                  var K = V.getSelection(),
                    he = S.textContent.length,
                    Ce = Math.min(j.start, he),
                    it = j.end === void 0 ? Ce : Math.min(j.end, he)
                  !K.extend && Ce > it && ((g = it), (it = Ce), (Ce = g))
                  var $ = im(S, Ce),
                    L = im(S, it)
                  if (
                    $ &&
                    L &&
                    (K.rangeCount !== 1 ||
                      K.anchorNode !== $.node ||
                      K.anchorOffset !== $.offset ||
                      K.focusNode !== L.node ||
                      K.focusOffset !== L.offset)
                  ) {
                    var P = oe.createRange()
                    ;(P.setStart($.node, $.offset),
                      K.removeAllRanges(),
                      Ce > it
                        ? (K.addRange(P), K.extend(L.node, L.offset))
                        : (P.setEnd(L.node, L.offset), K.addRange(P)))
                  }
                }
              }
            }
            for (oe = [], K = S; (K = K.parentNode); )
              K.nodeType === 1 && oe.push({ element: K, left: K.scrollLeft, top: K.scrollTop })
            for (typeof S.focus == "function" && S.focus(), S = 0; S < oe.length; S++) {
              var ee = oe[S]
              ;((ee.element.scrollLeft = ee.left), (ee.element.scrollTop = ee.top))
            }
          }
          ;((Ts = !!Mf), (Af = Mf = null))
        } finally {
          ;((Ke = u), (F.p = r), (z.T = a))
        }
      }
      ;((e.current = t), ($t = 2))
    }
  }
  function Tg() {
    if ($t === 2) {
      $t = 0
      var e = Za,
        t = gr,
        a = (t.flags & 8772) !== 0
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ;((a = z.T), (z.T = null))
        var r = F.p
        F.p = 2
        var u = Ke
        Ke |= 4
        try {
          Zh(e, t.alternate, t)
        } finally {
          ;((Ke = u), (F.p = r), (z.T = a))
        }
      }
      $t = 3
    }
  }
  function Rg() {
    if ($t === 4 || $t === 3) {
      ;(($t = 0), _n())
      var e = Za,
        t = gr,
        a = Ma,
        r = fg
      ;(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? ($t = 5)
        : (($t = 0), (gr = Za = null), Mg(e, e.pendingLanes))
      var u = e.pendingLanes
      if (
        (u === 0 && (Qa = null),
        Du(a),
        (t = t.stateNode),
        qt && typeof qt.onCommitFiberRoot == "function")
      )
        try {
          qt.onCommitFiberRoot(xn, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
      if (r !== null) {
        ;((t = z.T), (u = F.p), (F.p = 2), (z.T = null))
        try {
          for (var f = e.onRecoverableError, g = 0; g < r.length; g++) {
            var S = r[g]
            f(S.value, { componentStack: S.stack })
          }
        } finally {
          ;((z.T = t), (F.p = u))
        }
      }
      ;((Ma & 3) !== 0 && ds(),
        Jn(e),
        (u = e.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0 ? (e === pf ? Rl++ : ((Rl = 0), (pf = e))) : (Rl = 0),
        Ml(0))
    }
  }
  function Mg(e, t) {
    ;(e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ll(t)))
  }
  function ds() {
    return (Eg(), Tg(), Rg(), Ag())
  }
  function Ag() {
    if ($t !== 5) return !1
    var e = Za,
      t = ff
    ff = 0
    var a = Du(Ma),
      r = z.T,
      u = F.p
    try {
      ;((F.p = 32 > a ? 32 : a), (z.T = null), (a = df), (df = null))
      var f = Za,
        g = Ma
      if ((($t = 0), (gr = Za = null), (Ma = 0), (Ke & 6) !== 0)) throw Error(i(331))
      var S = Ke
      if (
        ((Ke |= 4),
        sg(f.current),
        rg(f, f.current, g, a),
        (Ke = S),
        Ml(0, !1),
        qt && typeof qt.onPostCommitFiberRoot == "function")
      )
        try {
          qt.onPostCommitFiberRoot(xn, f)
        } catch {}
      return !0
    } finally {
      ;((F.p = u), (z.T = r), Mg(e, t))
    }
  }
  function wg(e, t, a) {
    ;((t = Rn(a, t)),
      (t = Vc(e.stateNode, t, 2)),
      (e = Ga(e, t, 2)),
      e !== null && (Yr(e, 2), Jn(e)))
  }
  function tt(e, t, a) {
    if (e.tag === 3) wg(e, e, a)
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          wg(t, e, a)
          break
        } else if (t.tag === 1) {
          var r = t.stateNode
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" && (Qa === null || !Qa.has(r)))
          ) {
            ;((e = Rn(a, e)),
              (a = zh(2)),
              (r = Ga(t, a, 2)),
              r !== null && (Oh(a, r, t, e), Yr(r, 2), Jn(r)))
            break
          }
        }
        t = t.return
      }
  }
  function gf(e, t, a) {
    var r = e.pingCache
    if (r === null) {
      r = e.pingCache = new nS()
      var u = new Set()
      r.set(t, u)
    } else ((u = r.get(t)), u === void 0 && ((u = new Set()), r.set(t, u)))
    u.has(a) || ((sf = !0), u.add(a), (e = iS.bind(null, e, t, a)), t.then(e, e))
  }
  function iS(e, t, a) {
    var r = e.pingCache
    ;(r !== null && r.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      dt === e &&
        (Pe & a) === a &&
        (Tt === 4 || (Tt === 3 && (Pe & 62914560) === Pe && 300 > He() - ls)
          ? (Ke & 2) === 0 && yr(e, 0)
          : (uf |= a),
        hr === Pe && (hr = 0)),
      Jn(e))
  }
  function zg(e, t) {
    ;(t === 0 && (t = Ep()), (e = vo(e, t)), e !== null && (Yr(e, t), Jn(e)))
  }
  function sS(e) {
    var t = e.memoizedState,
      a = 0
    ;(t !== null && (a = t.retryLane), zg(e, a))
  }
  function uS(e, t) {
    var a = 0
    switch (e.tag) {
      case 31:
      case 13:
        var r = e.stateNode,
          u = e.memoizedState
        u !== null && (a = u.retryLane)
        break
      case 19:
        r = e.stateNode
        break
      case 22:
        r = e.stateNode._retryCache
        break
      default:
        throw Error(i(314))
    }
    ;(r !== null && r.delete(t), zg(e, a))
  }
  function cS(e, t) {
    return St(e, t)
  }
  var ps = null,
    br = null,
    yf = !1,
    ms = !1,
    vf = !1,
    eo = 0
  function Jn(e) {
    ;(e !== br && e.next === null && (br === null ? (ps = br = e) : (br = br.next = e)),
      (ms = !0),
      yf || ((yf = !0), dS()))
  }
  function Ml(e, t) {
    if (!vf && ms) {
      vf = !0
      do
        for (var a = !1, r = ps; r !== null; ) {
          if (e !== 0) {
            var u = r.pendingLanes
            if (u === 0) var f = 0
            else {
              var g = r.suspendedLanes,
                S = r.pingedLanes
              ;((f = (1 << (31 - Wt(42 | e) + 1)) - 1),
                (f &= u & ~(g & ~S)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0))
            }
            f !== 0 && ((a = !0), Bg(r, f))
          } else
            ((f = Pe),
              (f = vi(
                r,
                r === dt ? f : 0,
                r.cancelPendingCommit !== null || r.timeoutHandle !== -1
              )),
              (f & 3) === 0 || Gr(r, f) || ((a = !0), Bg(r, f)))
          r = r.next
        }
      while (a)
      vf = !1
    }
  }
  function fS() {
    Og()
  }
  function Og() {
    ms = yf = !1
    var e = 0
    eo !== 0 && CS() && (e = eo)
    for (var t = He(), a = null, r = ps; r !== null; ) {
      var u = r.next,
        f = Ng(r, t)
      ;(f === 0
        ? ((r.next = null), a === null ? (ps = u) : (a.next = u), u === null && (br = a))
        : ((a = r), (e !== 0 || (f & 3) !== 0) && (ms = !0)),
        (r = u))
    }
    ;(($t !== 0 && $t !== 5) || Ml(e), eo !== 0 && (eo = 0))
  }
  function Ng(e, t) {
    for (
      var a = e.suspendedLanes,
        r = e.pingedLanes,
        u = e.expirationTimes,
        f = e.pendingLanes & -62914561;
      0 < f;
    ) {
      var g = 31 - Wt(f),
        S = 1 << g,
        j = u[g]
      ;(j === -1
        ? ((S & a) === 0 || (S & r) !== 0) && (u[g] = $b(S, t))
        : j <= t && (e.expiredLanes |= S),
        (f &= ~S))
    }
    if (
      ((t = dt),
      (a = Pe),
      (a = vi(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (r = e.callbackNode),
      a === 0 || (e === t && (et === 2 || et === 9)) || e.cancelPendingCommit !== null)
    )
      return (r !== null && r !== null && ut(r), (e.callbackNode = null), (e.callbackPriority = 0))
    if ((a & 3) === 0 || Gr(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t
      switch ((r !== null && ut(r), Du(a))) {
        case 2:
        case 8:
          a = Ge
          break
        case 32:
          a = Ct
          break
        case 268435456:
          a = fn
          break
        default:
          a = Ct
      }
      return (
        (r = Dg.bind(null, e)),
        (a = St(a, r)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      )
    }
    return (r !== null && r !== null && ut(r), (e.callbackPriority = 2), (e.callbackNode = null), 2)
  }
  function Dg(e, t) {
    if ($t !== 0 && $t !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null)
    var a = e.callbackNode
    if (ds() && e.callbackNode !== a) return null
    var r = Pe
    return (
      (r = vi(e, e === dt ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      r === 0
        ? null
        : (pg(e, r, t),
          Ng(e, He()),
          e.callbackNode != null && e.callbackNode === a ? Dg.bind(null, e) : null)
    )
  }
  function Bg(e, t) {
    if (ds()) return null
    pg(e, t, !0)
  }
  function dS() {
    TS(function () {
      ;(Ke & 6) !== 0 ? St(yt, fS) : Og()
    })
  }
  function bf() {
    if (eo === 0) {
      var e = or
      ;(e === 0 && ((e = $n), ($n <<= 1), ($n & 261888) === 0 && ($n = 256)), (eo = e))
    }
    return eo
  }
  function jg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Ci("" + e)
  }
  function kg(e, t) {
    var a = t.ownerDocument.createElement("input")
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    )
  }
  function pS(e, t, a, r, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var f = jg((u[nn] || null).action),
        g = r.submitter
      g &&
        ((t = (t = g[nn] || null) ? jg(t.formAction) : g.getAttribute("formAction")),
        t !== null && ((f = t), (g = null)))
      var S = new Mi("action", "action", null, r, u)
      e.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (r.defaultPrevented) {
                if (eo !== 0) {
                  var j = g ? kg(u, g) : new FormData(u)
                  $c(a, { pending: !0, data: j, method: u.method, action: f }, null, j)
                }
              } else
                typeof f == "function" &&
                  (S.preventDefault(),
                  (j = g ? kg(u, g) : new FormData(u)),
                  $c(a, { pending: !0, data: j, method: u.method, action: f }, f, j))
            },
            currentTarget: u,
          },
        ],
      })
    }
  }
  for (var Sf = 0; Sf < tc.length; Sf++) {
    var xf = tc[Sf],
      mS = xf.toLowerCase(),
      hS = xf[0].toUpperCase() + xf.slice(1)
    Un(mS, "on" + hS)
  }
  ;(Un(dm, "onAnimationEnd"),
    Un(pm, "onAnimationIteration"),
    Un(mm, "onAnimationStart"),
    Un("dblclick", "onDoubleClick"),
    Un("focusin", "onFocus"),
    Un("focusout", "onBlur"),
    Un(N1, "onTransitionRun"),
    Un(D1, "onTransitionStart"),
    Un(B1, "onTransitionCancel"),
    Un(hm, "onTransitionEnd"),
    Vo("onMouseEnter", ["mouseout", "mouseover"]),
    Vo("onMouseLeave", ["mouseout", "mouseover"]),
    Vo("onPointerEnter", ["pointerout", "pointerover"]),
    Vo("onPointerLeave", ["pointerout", "pointerover"]),
    mo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    mo(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    mo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    mo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    mo(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    mo(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    ))
  var Al =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    gS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al)
    )
  function _g(e, t) {
    t = (t & 4) !== 0
    for (var a = 0; a < e.length; a++) {
      var r = e[a],
        u = r.event
      r = r.listeners
      e: {
        var f = void 0
        if (t)
          for (var g = r.length - 1; 0 <= g; g--) {
            var S = r[g],
              j = S.instance,
              I = S.currentTarget
            if (((S = S.listener), j !== f && u.isPropagationStopped())) break e
            ;((f = S), (u.currentTarget = I))
            try {
              f(u)
            } catch (Z) {
              zi(Z)
            }
            ;((u.currentTarget = null), (f = j))
          }
        else
          for (g = 0; g < r.length; g++) {
            if (
              ((S = r[g]),
              (j = S.instance),
              (I = S.currentTarget),
              (S = S.listener),
              j !== f && u.isPropagationStopped())
            )
              break e
            ;((f = S), (u.currentTarget = I))
            try {
              f(u)
            } catch (Z) {
              zi(Z)
            }
            ;((u.currentTarget = null), (f = j))
          }
      }
    }
  }
  function ke(e, t) {
    var a = t[Bu]
    a === void 0 && (a = t[Bu] = new Set())
    var r = e + "__bubble"
    a.has(r) || (Lg(t, e, 2, !1), a.add(r))
  }
  function Cf(e, t, a) {
    var r = 0
    ;(t && (r |= 4), Lg(a, e, r, t))
  }
  var hs = "_reactListening" + Math.random().toString(36).slice(2)
  function Ef(e) {
    if (!e[hs]) {
      ;((e[hs] = !0),
        Op.forEach(function (a) {
          a !== "selectionchange" && (gS.has(a) || Cf(a, !1, e), Cf(a, !0, e))
        }))
      var t = e.nodeType === 9 ? e : e.ownerDocument
      t === null || t[hs] || ((t[hs] = !0), Cf("selectionchange", !1, t))
    }
  }
  function Lg(e, t, a, r) {
    switch (dy(t)) {
      case 2:
        var u = VS
        break
      case 8:
        u = GS
        break
      default:
        u = $f
    }
    ;((a = u.bind(null, t, a, e)),
      (u = void 0),
      !Iu || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (u = !0),
      r
        ? u !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: u })
          : e.addEventListener(t, a, !0)
        : u !== void 0
          ? e.addEventListener(t, a, { passive: u })
          : e.addEventListener(t, a, !1))
  }
  function Tf(e, t, a, r, u) {
    var f = r
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return
        var g = r.tag
        if (g === 3 || g === 4) {
          var S = r.stateNode.containerInfo
          if (S === u) break
          if (g === 4)
            for (g = r.return; g !== null; ) {
              var j = g.tag
              if ((j === 3 || j === 4) && g.stateNode.containerInfo === u) return
              g = g.return
            }
          for (; S !== null; ) {
            if (((g = Po(S)), g === null)) return
            if (((j = g.tag), j === 5 || j === 6 || j === 26 || j === 27)) {
              r = f = g
              continue e
            }
            S = S.parentNode
          }
        }
        r = r.return
      }
    Ip(function () {
      var I = f,
        Z = Hu(a),
        oe = []
      e: {
        var V = gm.get(e)
        if (V !== void 0) {
          var K = Mi,
            he = e
          switch (e) {
            case "keypress":
              if (Ti(a) === 0) break e
            case "keydown":
            case "keyup":
              K = u1
              break
            case "focusin":
              ;((he = "focus"), (K = Yu))
              break
            case "focusout":
              ;((he = "blur"), (K = Yu))
              break
            case "beforeblur":
            case "afterblur":
              K = Yu
              break
            case "click":
              if (a.button === 2) break e
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              K = Gp
              break
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              K = Qb
              break
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              K = d1
              break
            case dm:
            case pm:
            case mm:
              K = e1
              break
            case hm:
              K = m1
              break
            case "scroll":
            case "scrollend":
              K = Kb
              break
            case "wheel":
              K = g1
              break
            case "copy":
            case "cut":
            case "paste":
              K = n1
              break
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              K = Fp
              break
            case "toggle":
            case "beforetoggle":
              K = v1
          }
          var Ce = (t & 4) !== 0,
            it = !Ce && (e === "scroll" || e === "scrollend"),
            $ = Ce ? (V !== null ? V + "Capture" : null) : V
          Ce = []
          for (var L = I, P; L !== null; ) {
            var ee = L
            if (
              ((P = ee.stateNode),
              (ee = ee.tag),
              (ee !== 5 && ee !== 26 && ee !== 27) ||
                P === null ||
                $ === null ||
                ((ee = Kr(L, $)), ee != null && Ce.push(wl(L, ee, P))),
              it)
            )
              break
            L = L.return
          }
          0 < Ce.length && ((V = new K(V, he, null, a, Z)), oe.push({ event: V, listeners: Ce }))
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((V = e === "mouseover" || e === "pointerover"),
            (K = e === "mouseout" || e === "pointerout"),
            V && a !== Uu && (he = a.relatedTarget || a.fromElement) && (Po(he) || he[Ho]))
          )
            break e
          if (
            (K || V) &&
            ((V =
              Z.window === Z
                ? Z
                : (V = Z.ownerDocument)
                  ? V.defaultView || V.parentWindow
                  : window),
            K
              ? ((he = a.relatedTarget || a.toElement),
                (K = I),
                (he = he ? Po(he) : null),
                he !== null &&
                  ((it = c(he)), (Ce = he.tag), he !== it || (Ce !== 5 && Ce !== 27 && Ce !== 6)) &&
                  (he = null))
              : ((K = null), (he = I)),
            K !== he)
          ) {
            if (
              ((Ce = Gp),
              (ee = "onMouseLeave"),
              ($ = "onMouseEnter"),
              (L = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Ce = Fp), (ee = "onPointerLeave"), ($ = "onPointerEnter"), (L = "pointer")),
              (it = K == null ? V : Xr(K)),
              (P = he == null ? V : Xr(he)),
              (V = new Ce(ee, L + "leave", K, a, Z)),
              (V.target = it),
              (V.relatedTarget = P),
              (ee = null),
              Po(Z) === I &&
                ((Ce = new Ce($, L + "enter", he, a, Z)),
                (Ce.target = P),
                (Ce.relatedTarget = it),
                (ee = Ce)),
              (it = ee),
              K && he)
            )
              t: {
                for (Ce = yS, $ = K, L = he, P = 0, ee = $; ee; ee = Ce(ee)) P++
                ee = 0
                for (var ve = L; ve; ve = Ce(ve)) ee++
                for (; 0 < P - ee; ) (($ = Ce($)), P--)
                for (; 0 < ee - P; ) ((L = Ce(L)), ee--)
                for (; P--; ) {
                  if ($ === L || (L !== null && $ === L.alternate)) {
                    Ce = $
                    break t
                  }
                  ;(($ = Ce($)), (L = Ce(L)))
                }
                Ce = null
              }
            else Ce = null
            ;(K !== null && $g(oe, V, K, Ce, !1),
              he !== null && it !== null && $g(oe, it, he, Ce, !0))
          }
        }
        e: {
          if (
            ((V = I ? Xr(I) : window),
            (K = V.nodeName && V.nodeName.toLowerCase()),
            K === "select" || (K === "input" && V.type === "file"))
          )
            var Ye = tm
          else if (Jp(V))
            if (nm) Ye = w1
            else {
              Ye = M1
              var ge = R1
            }
          else
            ((K = V.nodeName),
              !K || K.toLowerCase() !== "input" || (V.type !== "checkbox" && V.type !== "radio")
                ? I && $u(I.elementType) && (Ye = tm)
                : (Ye = A1))
          if (Ye && (Ye = Ye(e, I))) {
            em(oe, Ye, a, Z)
            break e
          }
          ;(ge && ge(e, V, I),
            e === "focusout" &&
              I &&
              V.type === "number" &&
              I.memoizedProps.value != null &&
              Lu(V, "number", V.value))
        }
        switch (((ge = I ? Xr(I) : window), e)) {
          case "focusin":
            ;(Jp(ge) || ge.contentEditable === "true") && ((Wo = ge), (Zu = I), (al = null))
            break
          case "focusout":
            al = Zu = Wo = null
            break
          case "mousedown":
            Ju = !0
            break
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ;((Ju = !1), cm(oe, a, Z))
            break
          case "selectionchange":
            if (O1) break
          case "keydown":
          case "keyup":
            cm(oe, a, Z)
        }
        var Ne
        if (Xu)
          e: {
            switch (e) {
              case "compositionstart":
                var Ie = "onCompositionStart"
                break e
              case "compositionend":
                Ie = "onCompositionEnd"
                break e
              case "compositionupdate":
                Ie = "onCompositionUpdate"
                break e
            }
            Ie = void 0
          }
        else
          Ko
            ? Qp(e, a) && (Ie = "onCompositionEnd")
            : e === "keydown" && a.keyCode === 229 && (Ie = "onCompositionStart")
        ;(Ie &&
          (Xp &&
            a.locale !== "ko" &&
            (Ko || Ie !== "onCompositionStart"
              ? Ie === "onCompositionEnd" && Ko && (Ne = qp())
              : (($a = Z), (qu = "value" in $a ? $a.value : $a.textContent), (Ko = !0))),
          (ge = gs(I, Ie)),
          0 < ge.length &&
            ((Ie = new Yp(Ie, e, null, a, Z)),
            oe.push({ event: Ie, listeners: ge }),
            Ne ? (Ie.data = Ne) : ((Ne = Zp(a)), Ne !== null && (Ie.data = Ne)))),
          (Ne = S1 ? x1(e, a) : C1(e, a)) &&
            ((Ie = gs(I, "onBeforeInput")),
            0 < Ie.length &&
              ((ge = new Yp("onBeforeInput", "beforeinput", null, a, Z)),
              oe.push({ event: ge, listeners: Ie }),
              (ge.data = Ne))),
          pS(oe, e, I, a, Z))
      }
      _g(oe, t)
    })
  }
  function wl(e, t, a) {
    return { instance: e, listener: t, currentTarget: a }
  }
  function gs(e, t) {
    for (var a = t + "Capture", r = []; e !== null; ) {
      var u = e,
        f = u.stateNode
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          f === null ||
          ((u = Kr(e, a)),
          u != null && r.unshift(wl(e, u, f)),
          (u = Kr(e, t)),
          u != null && r.push(wl(e, u, f))),
        e.tag === 3)
      )
        return r
      e = e.return
    }
    return []
  }
  function yS(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5 && e.tag !== 27)
    return e || null
  }
  function $g(e, t, a, r, u) {
    for (var f = t._reactName, g = []; a !== null && a !== r; ) {
      var S = a,
        j = S.alternate,
        I = S.stateNode
      if (((S = S.tag), j !== null && j === r)) break
      ;((S !== 5 && S !== 26 && S !== 27) ||
        I === null ||
        ((j = I),
        u
          ? ((I = Kr(a, f)), I != null && g.unshift(wl(a, I, j)))
          : u || ((I = Kr(a, f)), I != null && g.push(wl(a, I, j)))),
        (a = a.return))
    }
    g.length !== 0 && e.push({ event: t, listeners: g })
  }
  var vS = /\r\n?/g,
    bS = /\u0000|\uFFFD/g
  function Ug(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        vS,
        `
`
      )
      .replace(bS, "")
  }
  function Hg(e, t) {
    return ((t = Ug(t)), Ug(e) === t)
  }
  function lt(e, t, a, r, u, f) {
    switch (a) {
      case "children":
        typeof r == "string"
          ? t === "body" || (t === "textarea" && r === "") || Yo(e, r)
          : (typeof r == "number" || typeof r == "bigint") && t !== "body" && Yo(e, "" + r)
        break
      case "className":
        Si(e, "class", r)
        break
      case "tabIndex":
        Si(e, "tabindex", r)
        break
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Si(e, a, r)
        break
      case "style":
        Hp(e, r, f)
        break
      case "data":
        if (t !== "object") {
          Si(e, "data", r)
          break
        }
      case "src":
      case "href":
        if (r === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a)
          break
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(a)
          break
        }
        ;((r = Ci("" + r)), e.setAttribute(a, r))
        break
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          )
          break
        } else
          typeof f == "function" &&
            (a === "formAction"
              ? (t !== "input" && lt(e, t, "name", u.name, u, null),
                lt(e, t, "formEncType", u.formEncType, u, null),
                lt(e, t, "formMethod", u.formMethod, u, null),
                lt(e, t, "formTarget", u.formTarget, u, null))
              : (lt(e, t, "encType", u.encType, u, null),
                lt(e, t, "method", u.method, u, null),
                lt(e, t, "target", u.target, u, null)))
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(a)
          break
        }
        ;((r = Ci("" + r)), e.setAttribute(a, r))
        break
      case "onClick":
        r != null && (e.onclick = fa)
        break
      case "onScroll":
        r != null && ke("scroll", e)
        break
      case "onScrollEnd":
        r != null && ke("scrollend", e)
        break
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(i(61))
          if (((a = r.__html), a != null)) {
            if (u.children != null) throw Error(i(60))
            e.innerHTML = a
          }
        }
        break
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol"
        break
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol"
        break
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break
      case "autoFocus":
        break
      case "xlinkHref":
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          e.removeAttribute("xlink:href")
          break
        }
        ;((a = Ci("" + r)), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a))
        break
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol"
          ? e.setAttribute(a, "" + r)
          : e.removeAttribute(a)
        break
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a)
        break
      case "capture":
      case "download":
        r === !0
          ? e.setAttribute(a, "")
          : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol"
            ? e.setAttribute(a, r)
            : e.removeAttribute(a)
        break
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r
          ? e.setAttribute(a, r)
          : e.removeAttribute(a)
        break
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r)
          ? e.removeAttribute(a)
          : e.setAttribute(a, r)
        break
      case "popover":
        ;(ke("beforetoggle", e), ke("toggle", e), bi(e, "popover", r))
        break
      case "xlinkActuate":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r)
        break
      case "xlinkArcrole":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r)
        break
      case "xlinkRole":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:role", r)
        break
      case "xlinkShow":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:show", r)
        break
      case "xlinkTitle":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:title", r)
        break
      case "xlinkType":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:type", r)
        break
      case "xmlBase":
        ca(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r)
        break
      case "xmlLang":
        ca(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r)
        break
      case "xmlSpace":
        ca(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r)
        break
      case "is":
        bi(e, "is", r)
        break
      case "innerText":
      case "textContent":
        break
      default:
        ;(!(2 < a.length) || (a[0] !== "o" && a[0] !== "O") || (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Fb.get(a) || a), bi(e, a, r))
    }
  }
  function Rf(e, t, a, r, u, f) {
    switch (a) {
      case "style":
        Hp(e, r, f)
        break
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(i(61))
          if (((a = r.__html), a != null)) {
            if (u.children != null) throw Error(i(60))
            e.innerHTML = a
          }
        }
        break
      case "children":
        typeof r == "string"
          ? Yo(e, r)
          : (typeof r == "number" || typeof r == "bigint") && Yo(e, "" + r)
        break
      case "onScroll":
        r != null && ke("scroll", e)
        break
      case "onScrollEnd":
        r != null && ke("scrollend", e)
        break
      case "onClick":
        r != null && (e.onclick = fa)
        break
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break
      case "innerText":
      case "textContent":
        break
      default:
        if (!Np.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (t = a.slice(2, u ? a.length - 7 : void 0)),
              (f = e[nn] || null),
              (f = f != null ? f[a] : null),
              typeof f == "function" && e.removeEventListener(t, f, u),
              typeof r == "function")
            ) {
              ;(typeof f != "function" &&
                f !== null &&
                (a in e ? (e[a] = null) : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, r, u))
              break e
            }
            a in e ? (e[a] = r) : r === !0 ? e.setAttribute(a, "") : bi(e, a, r)
          }
    }
  }
  function Xt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break
      case "img":
        ;(ke("error", e), ke("load", e))
        var r = !1,
          u = !1,
          f
        for (f in a)
          if (a.hasOwnProperty(f)) {
            var g = a[f]
            if (g != null)
              switch (f) {
                case "src":
                  r = !0
                  break
                case "srcSet":
                  u = !0
                  break
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t))
                default:
                  lt(e, t, f, g, a, null)
              }
          }
        ;(u && lt(e, t, "srcSet", a.srcSet, a, null), r && lt(e, t, "src", a.src, a, null))
        return
      case "input":
        ke("invalid", e)
        var S = (f = g = u = null),
          j = null,
          I = null
        for (r in a)
          if (a.hasOwnProperty(r)) {
            var Z = a[r]
            if (Z != null)
              switch (r) {
                case "name":
                  u = Z
                  break
                case "type":
                  g = Z
                  break
                case "checked":
                  j = Z
                  break
                case "defaultChecked":
                  I = Z
                  break
                case "value":
                  f = Z
                  break
                case "defaultValue":
                  S = Z
                  break
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Z != null) throw Error(i(137, t))
                  break
                default:
                  lt(e, t, r, Z, a, null)
              }
          }
        _p(e, f, S, j, I, g, u, !1)
        return
      case "select":
        ;(ke("invalid", e), (r = g = f = null))
        for (u in a)
          if (a.hasOwnProperty(u) && ((S = a[u]), S != null))
            switch (u) {
              case "value":
                f = S
                break
              case "defaultValue":
                g = S
                break
              case "multiple":
                r = S
              default:
                lt(e, t, u, S, a, null)
            }
        ;((t = f),
          (a = g),
          (e.multiple = !!r),
          t != null ? Go(e, !!r, t, !1) : a != null && Go(e, !!r, a, !0))
        return
      case "textarea":
        ;(ke("invalid", e), (f = u = r = null))
        for (g in a)
          if (a.hasOwnProperty(g) && ((S = a[g]), S != null))
            switch (g) {
              case "value":
                r = S
                break
              case "defaultValue":
                u = S
                break
              case "children":
                f = S
                break
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(i(91))
                break
              default:
                lt(e, t, g, S, a, null)
            }
        $p(e, r, u, f)
        return
      case "option":
        for (j in a)
          a.hasOwnProperty(j) &&
            ((r = a[j]), r != null) &&
            (j === "selected"
              ? (e.selected = r && typeof r != "function" && typeof r != "symbol")
              : lt(e, t, j, r, a, null))
        return
      case "dialog":
        ;(ke("beforetoggle", e), ke("toggle", e), ke("cancel", e), ke("close", e))
        break
      case "iframe":
      case "object":
        ke("load", e)
        break
      case "video":
      case "audio":
        for (r = 0; r < Al.length; r++) ke(Al[r], e)
        break
      case "image":
        ;(ke("error", e), ke("load", e))
        break
      case "details":
        ke("toggle", e)
        break
      case "embed":
      case "source":
      case "link":
        ;(ke("error", e), ke("load", e))
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (I in a)
          if (a.hasOwnProperty(I) && ((r = a[I]), r != null))
            switch (I) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t))
              default:
                lt(e, t, I, r, a, null)
            }
        return
      default:
        if ($u(t)) {
          for (Z in a)
            a.hasOwnProperty(Z) && ((r = a[Z]), r !== void 0 && Rf(e, t, Z, r, a, void 0))
          return
        }
    }
    for (S in a) a.hasOwnProperty(S) && ((r = a[S]), r != null && lt(e, t, S, r, a, null))
  }
  function SS(e, t, a, r) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break
      case "input":
        var u = null,
          f = null,
          g = null,
          S = null,
          j = null,
          I = null,
          Z = null
        for (K in a) {
          var oe = a[K]
          if (a.hasOwnProperty(K) && oe != null)
            switch (K) {
              case "checked":
                break
              case "value":
                break
              case "defaultValue":
                j = oe
              default:
                r.hasOwnProperty(K) || lt(e, t, K, null, r, oe)
            }
        }
        for (var V in r) {
          var K = r[V]
          if (((oe = a[V]), r.hasOwnProperty(V) && (K != null || oe != null)))
            switch (V) {
              case "type":
                f = K
                break
              case "name":
                u = K
                break
              case "checked":
                I = K
                break
              case "defaultChecked":
                Z = K
                break
              case "value":
                g = K
                break
              case "defaultValue":
                S = K
                break
              case "children":
              case "dangerouslySetInnerHTML":
                if (K != null) throw Error(i(137, t))
                break
              default:
                K !== oe && lt(e, t, V, K, r, oe)
            }
        }
        _u(e, g, S, j, I, Z, f, u)
        return
      case "select":
        K = g = S = V = null
        for (f in a)
          if (((j = a[f]), a.hasOwnProperty(f) && j != null))
            switch (f) {
              case "value":
                break
              case "multiple":
                K = j
              default:
                r.hasOwnProperty(f) || lt(e, t, f, null, r, j)
            }
        for (u in r)
          if (((f = r[u]), (j = a[u]), r.hasOwnProperty(u) && (f != null || j != null)))
            switch (u) {
              case "value":
                V = f
                break
              case "defaultValue":
                S = f
                break
              case "multiple":
                g = f
              default:
                f !== j && lt(e, t, u, f, r, j)
            }
        ;((t = S),
          (a = g),
          (r = K),
          V != null
            ? Go(e, !!a, V, !1)
            : !!r != !!a && (t != null ? Go(e, !!a, t, !0) : Go(e, !!a, a ? [] : "", !1)))
        return
      case "textarea":
        K = V = null
        for (S in a)
          if (((u = a[S]), a.hasOwnProperty(S) && u != null && !r.hasOwnProperty(S)))
            switch (S) {
              case "value":
                break
              case "children":
                break
              default:
                lt(e, t, S, null, r, u)
            }
        for (g in r)
          if (((u = r[g]), (f = a[g]), r.hasOwnProperty(g) && (u != null || f != null)))
            switch (g) {
              case "value":
                V = u
                break
              case "defaultValue":
                K = u
                break
              case "children":
                break
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(i(91))
                break
              default:
                u !== f && lt(e, t, g, u, r, f)
            }
        Lp(e, V, K)
        return
      case "option":
        for (var he in a)
          ((V = a[he]),
            a.hasOwnProperty(he) &&
              V != null &&
              !r.hasOwnProperty(he) &&
              (he === "selected" ? (e.selected = !1) : lt(e, t, he, null, r, V)))
        for (j in r)
          ((V = r[j]),
            (K = a[j]),
            r.hasOwnProperty(j) &&
              V !== K &&
              (V != null || K != null) &&
              (j === "selected"
                ? (e.selected = V && typeof V != "function" && typeof V != "symbol")
                : lt(e, t, j, V, r, K)))
        return
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ce in a)
          ((V = a[Ce]),
            a.hasOwnProperty(Ce) && V != null && !r.hasOwnProperty(Ce) && lt(e, t, Ce, null, r, V))
        for (I in r)
          if (((V = r[I]), (K = a[I]), r.hasOwnProperty(I) && V !== K && (V != null || K != null)))
            switch (I) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(i(137, t))
                break
              default:
                lt(e, t, I, V, r, K)
            }
        return
      default:
        if ($u(t)) {
          for (var it in a)
            ((V = a[it]),
              a.hasOwnProperty(it) &&
                V !== void 0 &&
                !r.hasOwnProperty(it) &&
                Rf(e, t, it, void 0, r, V))
          for (Z in r)
            ((V = r[Z]),
              (K = a[Z]),
              !r.hasOwnProperty(Z) ||
                V === K ||
                (V === void 0 && K === void 0) ||
                Rf(e, t, Z, V, r, K))
          return
        }
    }
    for (var $ in a)
      ((V = a[$]),
        a.hasOwnProperty($) && V != null && !r.hasOwnProperty($) && lt(e, t, $, null, r, V))
    for (oe in r)
      ((V = r[oe]),
        (K = a[oe]),
        !r.hasOwnProperty(oe) || V === K || (V == null && K == null) || lt(e, t, oe, V, r, K))
  }
  function Pg(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0
      default:
        return !1
    }
  }
  function xS() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, a = performance.getEntriesByType("resource"), r = 0;
        r < a.length;
        r++
      ) {
        var u = a[r],
          f = u.transferSize,
          g = u.initiatorType,
          S = u.duration
        if (f && S && Pg(g)) {
          for (g = 0, S = u.responseEnd, r += 1; r < a.length; r++) {
            var j = a[r],
              I = j.startTime
            if (I > S) break
            var Z = j.transferSize,
              oe = j.initiatorType
            Z && Pg(oe) && ((j = j.responseEnd), (g += Z * (j < S ? 1 : (S - I) / (j - I))))
          }
          if ((--r, (t += (8 * (f + g)) / (u.duration / 1e3)), e++, 10 < e)) break
        }
      }
      if (0 < e) return t / e / 1e6
    }
    return navigator.connection && ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5
  }
  var Mf = null,
    Af = null
  function ys(e) {
    return e.nodeType === 9 ? e : e.ownerDocument
  }
  function Ig(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1
      case "http://www.w3.org/1998/Math/MathML":
        return 2
      default:
        return 0
    }
  }
  function qg(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1
        case "math":
          return 2
        default:
          return 0
      }
    return e === 1 && t === "foreignObject" ? 0 : e
  }
  function wf(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    )
  }
  var zf = null
  function CS() {
    var e = window.event
    return e && e.type === "popstate" ? (e === zf ? !1 : ((zf = e), !0)) : ((zf = null), !1)
  }
  var Vg = typeof setTimeout == "function" ? setTimeout : void 0,
    ES = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Gg = typeof Promise == "function" ? Promise : void 0,
    TS =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Gg < "u"
          ? function (e) {
              return Gg.resolve(null).then(e).catch(RS)
            }
          : Vg
  function RS(e) {
    setTimeout(function () {
      throw e
    })
  }
  function to(e) {
    return e === "head"
  }
  function Yg(e, t) {
    var a = t,
      r = 0
    do {
      var u = a.nextSibling
      if ((e.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$" || a === "/&")) {
          if (r === 0) {
            ;(e.removeChild(u), Er(t))
            return
          }
          r--
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") r++
        else if (a === "html") zl(e.ownerDocument.documentElement)
        else if (a === "head") {
          ;((a = e.ownerDocument.head), zl(a))
          for (var f = a.firstChild; f; ) {
            var g = f.nextSibling,
              S = f.nodeName
            ;(f[Fr] ||
              S === "SCRIPT" ||
              S === "STYLE" ||
              (S === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(f),
              (f = g))
          }
        } else a === "body" && zl(e.ownerDocument.body)
      a = u
    } while (a)
    Er(t)
  }
  function Fg(e, t) {
    var a = e
    e = 0
    do {
      var r = a.nextSibling
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display), (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        r && r.nodeType === 8)
      )
        if (((a = r.data), a === "/$")) {
          if (e === 0) break
          e--
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || e++
      a = r
    } while (a)
  }
  function Of(e) {
    var t = e.firstChild
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ;(Of(a), ju(a))
          continue
        case "SCRIPT":
        case "STYLE":
          continue
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue
      }
      e.removeChild(a)
    }
  }
  function MS(e, t, a, r) {
    for (; e.nodeType === 1; ) {
      var u = a
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
      } else if (r) {
        if (!e[Fr])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break
              return e
            case "link":
              if (
                ((f = e.getAttribute("rel")),
                f === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break
              if (
                f !== u.rel ||
                e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) ||
                e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break
              return e
            case "style":
              if (e.hasAttribute("data-precedence")) break
              return e
            case "script":
              if (
                ((f = e.getAttribute("src")),
                (f !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  f &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break
              return e
            default:
              return e
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = u.name == null ? null : "" + u.name
        if (u.type === "hidden" && e.getAttribute("name") === f) return e
      } else return e
      if (((e = On(e.nextSibling)), e === null)) break
    }
    return null
  }
  function AS(e, t, a) {
    if (t === "") return null
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a) ||
        ((e = On(e.nextSibling)), e === null)
      )
        return null
    return e
  }
  function Xg(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t) ||
        ((e = On(e.nextSibling)), e === null)
      )
        return null
    return e
  }
  function Nf(e) {
    return e.data === "$?" || e.data === "$~"
  }
  function Df(e) {
    return e.data === "$!" || (e.data === "$?" && e.ownerDocument.readyState !== "loading")
  }
  function wS(e, t) {
    var a = e.ownerDocument
    if (e.data === "$~") e._reactRetry = t
    else if (e.data !== "$?" || a.readyState !== "loading") t()
    else {
      var r = function () {
        ;(t(), a.removeEventListener("DOMContentLoaded", r))
      }
      ;(a.addEventListener("DOMContentLoaded", r), (e._reactRetry = r))
    }
  }
  function On(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType
      if (t === 1 || t === 3) break
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break
        if (t === "/$" || t === "/&") return null
      }
    }
    return e
  }
  var Bf = null
  function Kg(e) {
    e = e.nextSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data
        if (a === "/$" || a === "/&") {
          if (t === 0) return On(e.nextSibling)
          t--
        } else (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") || t++
      }
      e = e.nextSibling
    }
    return null
  }
  function Wg(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e
          t--
        } else (a !== "/$" && a !== "/&") || t++
      }
      e = e.previousSibling
    }
    return null
  }
  function Qg(e, t, a) {
    switch (((t = ys(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(i(452))
        return e
      case "head":
        if (((e = t.head), !e)) throw Error(i(453))
        return e
      case "body":
        if (((e = t.body), !e)) throw Error(i(454))
        return e
      default:
        throw Error(i(451))
    }
  }
  function zl(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0])
    ju(e)
  }
  var Nn = new Map(),
    Zg = new Set()
  function vs(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument
  }
  var Aa = F.d
  F.d = { f: zS, r: OS, D: NS, C: DS, L: BS, m: jS, X: _S, S: kS, M: LS }
  function zS() {
    var e = Aa.f(),
      t = us()
    return e || t
  }
  function OS(e) {
    var t = Io(e)
    t !== null && t.tag === 5 && t.type === "form" ? hh(t) : Aa.r(e)
  }
  var Sr = typeof document > "u" ? null : document
  function Jg(e, t, a) {
    var r = Sr
    if (r && typeof t == "string" && t) {
      var u = En(t)
      ;((u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        Zg.has(u) ||
          (Zg.add(u),
          (e = { rel: e, crossOrigin: a, href: t }),
          r.querySelector(u) === null &&
            ((t = r.createElement("link")), Xt(t, "link", e), Ht(t), r.head.appendChild(t))))
    }
  }
  function NS(e) {
    ;(Aa.D(e), Jg("dns-prefetch", e, null))
  }
  function DS(e, t) {
    ;(Aa.C(e, t), Jg("preconnect", e, t))
  }
  function BS(e, t, a) {
    Aa.L(e, t, a)
    var r = Sr
    if (r && e && t) {
      var u = 'link[rel="preload"][as="' + En(t) + '"]'
      t === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + En(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" && (u += '[imagesizes="' + En(a.imageSizes) + '"]'))
        : (u += '[href="' + En(e) + '"]')
      var f = u
      switch (t) {
        case "style":
          f = xr(e)
          break
        case "script":
          f = Cr(e)
      }
      Nn.has(f) ||
        ((e = b(
          { rel: "preload", href: t === "image" && a && a.imageSrcSet ? void 0 : e, as: t },
          a
        )),
        Nn.set(f, e),
        r.querySelector(u) !== null ||
          (t === "style" && r.querySelector(Ol(f))) ||
          (t === "script" && r.querySelector(Nl(f))) ||
          ((t = r.createElement("link")), Xt(t, "link", e), Ht(t), r.head.appendChild(t)))
    }
  }
  function jS(e, t) {
    Aa.m(e, t)
    var a = Sr
    if (a && e) {
      var r = t && typeof t.as == "string" ? t.as : "script",
        u = 'link[rel="modulepreload"][as="' + En(r) + '"][href="' + En(e) + '"]',
        f = u
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Cr(e)
      }
      if (
        !Nn.has(f) &&
        ((e = b({ rel: "modulepreload", href: e }, t)), Nn.set(f, e), a.querySelector(u) === null)
      ) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Nl(f))) return
        }
        ;((r = a.createElement("link")), Xt(r, "link", e), Ht(r), a.head.appendChild(r))
      }
    }
  }
  function kS(e, t, a) {
    Aa.S(e, t, a)
    var r = Sr
    if (r && e) {
      var u = qo(r).hoistableStyles,
        f = xr(e)
      t = t || "default"
      var g = u.get(f)
      if (!g) {
        var S = { loading: 0, preload: null }
        if ((g = r.querySelector(Ol(f)))) S.loading = 5
        else {
          ;((e = b({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = Nn.get(f)) && jf(e, a))
          var j = (g = r.createElement("link"))
          ;(Ht(j),
            Xt(j, "link", e),
            (j._p = new Promise(function (I, Z) {
              ;((j.onload = I), (j.onerror = Z))
            })),
            j.addEventListener("load", function () {
              S.loading |= 1
            }),
            j.addEventListener("error", function () {
              S.loading |= 2
            }),
            (S.loading |= 4),
            bs(g, t, r))
        }
        ;((g = { type: "stylesheet", instance: g, count: 1, state: S }), u.set(f, g))
      }
    }
  }
  function _S(e, t) {
    Aa.X(e, t)
    var a = Sr
    if (a && e) {
      var r = qo(a).hoistableScripts,
        u = Cr(e),
        f = r.get(u)
      f ||
        ((f = a.querySelector(Nl(u))),
        f ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = Nn.get(u)) && kf(e, t),
          (f = a.createElement("script")),
          Ht(f),
          Xt(f, "link", e),
          a.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        r.set(u, f))
    }
  }
  function LS(e, t) {
    Aa.M(e, t)
    var a = Sr
    if (a && e) {
      var r = qo(a).hoistableScripts,
        u = Cr(e),
        f = r.get(u)
      f ||
        ((f = a.querySelector(Nl(u))),
        f ||
          ((e = b({ src: e, async: !0, type: "module" }, t)),
          (t = Nn.get(u)) && kf(e, t),
          (f = a.createElement("script")),
          Ht(f),
          Xt(f, "link", e),
          a.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        r.set(u, f))
    }
  }
  function ey(e, t, a, r) {
    var u = (u = le.current) ? vs(u) : null
    if (!u) throw Error(i(446))
    switch (e) {
      case "meta":
      case "title":
        return null
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = xr(a.href)),
            (a = qo(u).hoistableStyles),
            (r = a.get(t)),
            r || ((r = { type: "style", instance: null, count: 0, state: null }), a.set(t, r)),
            r)
          : { type: "void", instance: null, count: 0, state: null }
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = xr(a.href)
          var f = qo(u).hoistableStyles,
            g = f.get(e)
          if (
            (g ||
              ((u = u.ownerDocument || u),
              (g = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(e, g),
              (f = u.querySelector(Ol(e))) && !f._p && ((g.instance = f), (g.state.loading = 5)),
              Nn.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Nn.set(e, a),
                f || $S(u, e, a, g.state))),
            t && r === null)
          )
            throw Error(i(528, ""))
          return g
        }
        if (t && r !== null) throw Error(i(529, ""))
        return null
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" && t && typeof t != "function" && typeof t != "symbol"
            ? ((t = Cr(a)),
              (a = qo(u).hoistableScripts),
              (r = a.get(t)),
              r || ((r = { type: "script", instance: null, count: 0, state: null }), a.set(t, r)),
              r)
            : { type: "void", instance: null, count: 0, state: null }
        )
      default:
        throw Error(i(444, e))
    }
  }
  function xr(e) {
    return 'href="' + En(e) + '"'
  }
  function Ol(e) {
    return 'link[rel="stylesheet"][' + e + "]"
  }
  function ty(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null })
  }
  function $S(e, t, a, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (r.loading = 1)
      : ((t = e.createElement("link")),
        (r.preload = t),
        t.addEventListener("load", function () {
          return (r.loading |= 1)
        }),
        t.addEventListener("error", function () {
          return (r.loading |= 2)
        }),
        Xt(t, "link", a),
        Ht(t),
        e.head.appendChild(t))
  }
  function Cr(e) {
    return '[src="' + En(e) + '"]'
  }
  function Nl(e) {
    return "script[async]" + e
  }
  function ny(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var r = e.querySelector('style[data-href~="' + En(a.href) + '"]')
          if (r) return ((t.instance = r), Ht(r), r)
          var u = b({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          })
          return (
            (r = (e.ownerDocument || e).createElement("style")),
            Ht(r),
            Xt(r, "style", u),
            bs(r, a.precedence, e),
            (t.instance = r)
          )
        case "stylesheet":
          u = xr(a.href)
          var f = e.querySelector(Ol(u))
          if (f) return ((t.state.loading |= 4), (t.instance = f), Ht(f), f)
          ;((r = ty(a)),
            (u = Nn.get(u)) && jf(r, u),
            (f = (e.ownerDocument || e).createElement("link")),
            Ht(f))
          var g = f
          return (
            (g._p = new Promise(function (S, j) {
              ;((g.onload = S), (g.onerror = j))
            })),
            Xt(f, "link", r),
            (t.state.loading |= 4),
            bs(f, a.precedence, e),
            (t.instance = f)
          )
        case "script":
          return (
            (f = Cr(a.src)),
            (u = e.querySelector(Nl(f)))
              ? ((t.instance = u), Ht(u), u)
              : ((r = a),
                (u = Nn.get(f)) && ((r = b({}, a)), kf(r, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                Ht(u),
                Xt(u, "link", r),
                e.head.appendChild(u),
                (t.instance = u))
          )
        case "void":
          return null
        default:
          throw Error(i(443, t.type))
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((r = t.instance), (t.state.loading |= 4), bs(r, a.precedence, e))
    return t.instance
  }
  function bs(e, t, a) {
    for (
      var r = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        u = r.length ? r[r.length - 1] : null,
        f = u,
        g = 0;
      g < r.length;
      g++
    ) {
      var S = r[g]
      if (S.dataset.precedence === t) f = S
      else if (f !== u) break
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild))
  }
  function jf(e, t) {
    ;(e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title))
  }
  function kf(e, t) {
    ;(e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity))
  }
  var Ss = null
  function ay(e, t, a) {
    if (Ss === null) {
      var r = new Map(),
        u = (Ss = new Map())
      u.set(a, r)
    } else ((u = Ss), (r = u.get(a)), r || ((r = new Map()), u.set(a, r)))
    if (r.has(e)) return r
    for (r.set(e, null), a = a.getElementsByTagName(e), u = 0; u < a.length; u++) {
      var f = a[u]
      if (
        !(f[Fr] || f[Vt] || (e === "link" && f.getAttribute("rel") === "stylesheet")) &&
        f.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var g = f.getAttribute(t) || ""
        g = e + g
        var S = r.get(g)
        S ? S.push(f) : r.set(g, [f])
      }
    }
    return r
  }
  function oy(e, t, a) {
    ;((e = e.ownerDocument || e),
      e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null))
  }
  function US(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1
    switch (e) {
      case "meta":
      case "title":
        return !0
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break
        return !0
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0
    }
    return !1
  }
  function ry(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
  }
  function HS(e, t, a, r) {
    if (
      a.type === "stylesheet" &&
      (typeof r.media != "string" || matchMedia(r.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = xr(r.href),
          f = t.querySelector(Ol(u))
        if (f) {
          ;((t = f._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = xs.bind(e)), t.then(e, e)),
            (a.state.loading |= 4),
            (a.instance = f),
            Ht(f))
          return
        }
        ;((f = t.ownerDocument || t),
          (r = ty(r)),
          (u = Nn.get(u)) && jf(r, u),
          (f = f.createElement("link")),
          Ht(f))
        var g = f
        ;((g._p = new Promise(function (S, j) {
          ;((g.onload = S), (g.onerror = j))
        })),
          Xt(f, "link", r),
          (a.instance = f))
      }
      ;(e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (e.count++,
          (a = xs.bind(e)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)))
    }
  }
  var _f = 0
  function PS(e, t) {
    return (
      e.stylesheets && e.count === 0 && Es(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (a) {
            var r = setTimeout(function () {
              if ((e.stylesheets && Es(e, e.stylesheets), e.unsuspend)) {
                var f = e.unsuspend
                ;((e.unsuspend = null), f())
              }
            }, 6e4 + t)
            0 < e.imgBytes && _f === 0 && (_f = 62500 * xS())
            var u = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && Es(e, e.stylesheets), e.unsuspend))
                ) {
                  var f = e.unsuspend
                  ;((e.unsuspend = null), f())
                }
              },
              (e.imgBytes > _f ? 50 : 800) + t
            )
            return (
              (e.unsuspend = a),
              function () {
                ;((e.unsuspend = null), clearTimeout(r), clearTimeout(u))
              }
            )
          }
        : null
    )
  }
  function xs() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Es(this, this.stylesheets)
      else if (this.unsuspend) {
        var e = this.unsuspend
        ;((this.unsuspend = null), e())
      }
    }
  }
  var Cs = null
  function Es(e, t) {
    ;((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Cs = new Map()), t.forEach(IS, e), (Cs = null), xs.call(e)))
  }
  function IS(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Cs.get(e)
      if (a) var r = a.get(null)
      else {
        ;((a = new Map()), Cs.set(e, a))
        for (
          var u = e.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0;
          f < u.length;
          f++
        ) {
          var g = u[f]
          ;(g.nodeName === "LINK" || g.getAttribute("media") !== "not all") &&
            (a.set(g.dataset.precedence, g), (r = g))
        }
        r && a.set(null, r)
      }
      ;((u = t.instance),
        (g = u.getAttribute("data-precedence")),
        (f = a.get(g) || r),
        f === r && a.set(null, u),
        a.set(g, u),
        this.count++,
        (r = xs.bind(this)),
        u.addEventListener("load", r),
        u.addEventListener("error", r),
        f
          ? f.parentNode.insertBefore(u, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4))
    }
  }
  var Dl = {
    $$typeof: O,
    Provider: null,
    Consumer: null,
    _currentValue: re,
    _currentValue2: re,
    _threadCount: 0,
  }
  function qS(e, t, a, r, u, f, g, S, j) {
    ;((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ou(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ou(0)),
      (this.hiddenUpdates = Ou(null)),
      (this.identifierPrefix = r),
      (this.onUncaughtError = u),
      (this.onCaughtError = f),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = j),
      (this.incompleteTransitions = new Map()))
  }
  function ly(e, t, a, r, u, f, g, S, j, I, Z, oe) {
    return (
      (e = new qS(e, t, a, g, j, I, Z, oe, S)),
      (t = 1),
      f === !0 && (t |= 24),
      (f = pn(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (t = mc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (f.memoizedState = { element: r, isDehydrated: a, cache: t }),
      vc(f),
      e
    )
  }
  function iy(e) {
    return e ? ((e = Jo), e) : Jo
  }
  function sy(e, t, a, r, u, f) {
    ;((u = iy(u)),
      r.context === null ? (r.context = u) : (r.pendingContext = u),
      (r = Va(t)),
      (r.payload = { element: a }),
      (f = f === void 0 ? null : f),
      f !== null && (r.callback = f),
      (a = Ga(e, r, t)),
      a !== null && (un(a, e, t), cl(a, e, t)))
  }
  function uy(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane
      e.retryLane = a !== 0 && a < t ? a : t
    }
  }
  function Lf(e, t) {
    ;(uy(e, t), (e = e.alternate) && uy(e, t))
  }
  function cy(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = vo(e, 67108864)
      ;(t !== null && un(t, e, 67108864), Lf(e, 67108864))
    }
  }
  function fy(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = vn()
      t = Nu(t)
      var a = vo(e, t)
      ;(a !== null && un(a, e, t), Lf(e, t))
    }
  }
  var Ts = !0
  function VS(e, t, a, r) {
    var u = z.T
    z.T = null
    var f = F.p
    try {
      ;((F.p = 2), $f(e, t, a, r))
    } finally {
      ;((F.p = f), (z.T = u))
    }
  }
  function GS(e, t, a, r) {
    var u = z.T
    z.T = null
    var f = F.p
    try {
      ;((F.p = 8), $f(e, t, a, r))
    } finally {
      ;((F.p = f), (z.T = u))
    }
  }
  function $f(e, t, a, r) {
    if (Ts) {
      var u = Uf(r)
      if (u === null) (Tf(e, t, r, Rs, a), py(e, r))
      else if (FS(u, e, t, a, r)) r.stopPropagation()
      else if ((py(e, r), t & 4 && -1 < YS.indexOf(e))) {
        for (; u !== null; ) {
          var f = Io(u)
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var g = po(f.pendingLanes)
                  if (g !== 0) {
                    var S = f
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; g; ) {
                      var j = 1 << (31 - Wt(g))
                      ;((S.entanglements[1] |= j), (g &= ~j))
                    }
                    ;(Jn(f), (Ke & 6) === 0 && ((is = He() + 500), Ml(0)))
                  }
                }
                break
              case 31:
              case 13:
                ;((S = vo(f, 2)), S !== null && un(S, f, 2), us(), Lf(f, 2))
            }
          if (((f = Uf(r)), f === null && Tf(e, t, r, Rs, a), f === u)) break
          u = f
        }
        u !== null && r.stopPropagation()
      } else Tf(e, t, r, null, a)
    }
  }
  function Uf(e) {
    return ((e = Hu(e)), Hf(e))
  }
  var Rs = null
  function Hf(e) {
    if (((Rs = null), (e = Po(e)), e !== null)) {
      var t = c(e)
      if (t === null) e = null
      else {
        var a = t.tag
        if (a === 13) {
          if (((e = d(t)), e !== null)) return e
          e = null
        } else if (a === 31) {
          if (((e = p(t)), e !== null)) return e
          e = null
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null
          e = null
        } else t !== e && (e = null)
      }
    }
    return ((Rs = e), null)
  }
  function dy(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8
      case "message":
        switch (ua()) {
          case yt:
            return 2
          case Ge:
            return 8
          case Ct:
          case _t:
            return 32
          case fn:
            return 268435456
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var Pf = !1,
    no = null,
    ao = null,
    oo = null,
    Bl = new Map(),
    jl = new Map(),
    ro = [],
    YS =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      )
  function py(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        no = null
        break
      case "dragenter":
      case "dragleave":
        ao = null
        break
      case "mouseover":
      case "mouseout":
        oo = null
        break
      case "pointerover":
      case "pointerout":
        Bl.delete(t.pointerId)
        break
      case "gotpointercapture":
      case "lostpointercapture":
        jl.delete(t.pointerId)
    }
  }
  function kl(e, t, a, r, u, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: r,
          nativeEvent: f,
          targetContainers: [u],
        }),
        t !== null && ((t = Io(t)), t !== null && cy(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e)
  }
  function FS(e, t, a, r, u) {
    switch (t) {
      case "focusin":
        return ((no = kl(no, e, t, a, r, u)), !0)
      case "dragenter":
        return ((ao = kl(ao, e, t, a, r, u)), !0)
      case "mouseover":
        return ((oo = kl(oo, e, t, a, r, u)), !0)
      case "pointerover":
        var f = u.pointerId
        return (Bl.set(f, kl(Bl.get(f) || null, e, t, a, r, u)), !0)
      case "gotpointercapture":
        return ((f = u.pointerId), jl.set(f, kl(jl.get(f) || null, e, t, a, r, u)), !0)
    }
    return !1
  }
  function my(e) {
    var t = Po(e.target)
    if (t !== null) {
      var a = c(t)
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = d(a)), t !== null)) {
            ;((e.blockedOn = t),
              wp(e.priority, function () {
                fy(a)
              }))
            return
          }
        } else if (t === 31) {
          if (((t = p(a)), t !== null)) {
            ;((e.blockedOn = t),
              wp(e.priority, function () {
                fy(a)
              }))
            return
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null
          return
        }
      }
    }
    e.blockedOn = null
  }
  function Ms(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Uf(e.nativeEvent)
      if (a === null) {
        a = e.nativeEvent
        var r = new a.constructor(a.type, a)
        ;((Uu = r), a.target.dispatchEvent(r), (Uu = null))
      } else return ((t = Io(a)), t !== null && cy(t), (e.blockedOn = a), !1)
      t.shift()
    }
    return !0
  }
  function hy(e, t, a) {
    Ms(e) && a.delete(t)
  }
  function XS() {
    ;((Pf = !1),
      no !== null && Ms(no) && (no = null),
      ao !== null && Ms(ao) && (ao = null),
      oo !== null && Ms(oo) && (oo = null),
      Bl.forEach(hy),
      jl.forEach(hy))
  }
  function As(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Pf || ((Pf = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, XS)))
  }
  var ws = null
  function gy(e) {
    ws !== e &&
      ((ws = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        ws === e && (ws = null)
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            r = e[t + 1],
            u = e[t + 2]
          if (typeof r != "function") {
            if (Hf(r || a) === null) continue
            break
          }
          var f = Io(a)
          f !== null &&
            (e.splice(t, 3),
            (t -= 3),
            $c(f, { pending: !0, data: u, method: a.method, action: r }, r, u))
        }
      }))
  }
  function Er(e) {
    function t(j) {
      return As(j, e)
    }
    ;(no !== null && As(no, e),
      ao !== null && As(ao, e),
      oo !== null && As(oo, e),
      Bl.forEach(t),
      jl.forEach(t))
    for (var a = 0; a < ro.length; a++) {
      var r = ro[a]
      r.blockedOn === e && (r.blockedOn = null)
    }
    for (; 0 < ro.length && ((a = ro[0]), a.blockedOn === null); )
      (my(a), a.blockedOn === null && ro.shift())
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (r = 0; r < a.length; r += 3) {
        var u = a[r],
          f = a[r + 1],
          g = u[nn] || null
        if (typeof f == "function") g || gy(a)
        else if (g) {
          var S = null
          if (f && f.hasAttribute("formAction")) {
            if (((u = f), (g = f[nn] || null))) S = g.formAction
            else if (Hf(u) !== null) continue
          } else S = g.action
          ;(typeof S == "function" ? (a[r + 1] = S) : (a.splice(r, 3), (r -= 3)), gy(a))
        }
      }
  }
  function yy() {
    function e(f) {
      f.canIntercept &&
        f.info === "react-transition" &&
        f.intercept({
          handler: function () {
            return new Promise(function (g) {
              return (u = g)
            })
          },
          focusReset: "manual",
          scroll: "manual",
        })
    }
    function t() {
      ;(u !== null && (u(), (u = null)), r || setTimeout(a, 20))
    }
    function a() {
      if (!r && !navigation.transition) {
        var f = navigation.currentEntry
        f &&
          f.url != null &&
          navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace",
          })
      }
    }
    if (typeof navigation == "object") {
      var r = !1,
        u = null
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ;((r = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)))
        }
      )
    }
  }
  function If(e) {
    this._internalRoot = e
  }
  ;((zs.prototype.render = If.prototype.render =
    function (e) {
      var t = this._internalRoot
      if (t === null) throw Error(i(409))
      var a = t.current,
        r = vn()
      sy(a, r, e, t, null, null)
    }),
    (zs.prototype.unmount = If.prototype.unmount =
      function () {
        var e = this._internalRoot
        if (e !== null) {
          this._internalRoot = null
          var t = e.containerInfo
          ;(sy(e.current, 2, null, e, null, null), us(), (t[Ho] = null))
        }
      }))
  function zs(e) {
    this._internalRoot = e
  }
  zs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ap()
      e = { blockedOn: null, target: e, priority: t }
      for (var a = 0; a < ro.length && t !== 0 && t < ro[a].priority; a++);
      ;(ro.splice(a, 0, e), a === 0 && my(e))
    }
  }
  var vy = o.version
  if (vy !== "19.2.3") throw Error(i(527, vy, "19.2.3"))
  F.findDOMNode = function (e) {
    var t = e._reactInternals
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(i(188))
        : ((e = Object.keys(e).join(",")), Error(i(268, e)))
    return ((e = h(t)), (e = e !== null ? v(e) : null), (e = e === null ? null : e.stateNode), e)
  }
  var KS = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.3",
  }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Os = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Os.isDisabled && Os.supportsFiber)
      try {
        ;((xn = Os.inject(KS)), (qt = Os))
      } catch {}
  }
  return (
    (Ll.createRoot = function (e, t) {
      if (!s(e)) throw Error(i(299))
      var a = !1,
        r = "",
        u = Rh,
        f = Mh,
        g = Ah
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (f = t.onCaughtError),
          t.onRecoverableError !== void 0 && (g = t.onRecoverableError)),
        (t = ly(e, 1, !1, null, null, a, r, null, u, f, g, yy)),
        (e[Ho] = t.current),
        Ef(e),
        new If(t)
      )
    }),
    (Ll.hydrateRoot = function (e, t, a) {
      if (!s(e)) throw Error(i(299))
      var r = !1,
        u = "",
        f = Rh,
        g = Mh,
        S = Ah,
        j = null
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (r = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (f = a.onUncaughtError),
          a.onCaughtError !== void 0 && (g = a.onCaughtError),
          a.onRecoverableError !== void 0 && (S = a.onRecoverableError),
          a.formState !== void 0 && (j = a.formState)),
        (t = ly(e, 1, !0, t, a ?? null, r, u, j, f, g, S, yy)),
        (t.context = iy(null)),
        (a = t.current),
        (r = vn()),
        (r = Nu(r)),
        (u = Va(r)),
        (u.callback = null),
        Ga(a, u, r),
        (a = r),
        (t.current.lanes = a),
        Yr(t, a),
        Jn(t),
        (e[Ho] = t.current),
        Ef(e),
        new zs(t)
      )
    }),
    (Ll.version = "19.2.3"),
    Ll
  )
}
var wy
function rx() {
  if (wy) return Gf.exports
  wy = 1
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
      } catch (o) {
        console.error(o)
      }
  }
  return (n(), (Gf.exports = ox()), Gf.exports)
}
var lx = rx()
const Jl = { black: "#000", white: "#fff" },
  Tr = { 300: "#e57373", 400: "#ef5350", 500: "#f44336", 700: "#d32f2f", 800: "#c62828" },
  Rr = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2",
  },
  Mr = { 50: "#e3f2fd", 200: "#90caf9", 400: "#42a5f5", 700: "#1976d2", 800: "#1565c0" },
  Ar = { 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" },
  wr = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  },
  $l = { 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" },
  ix = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  }
function Na(n, ...o) {
  const l = new URL(`https://mui.com/production-error/?code=${n}`)
  return (
    o.forEach((i) => l.searchParams.append("args[]", i)),
    `Minified MUI error #${n}; visit ${l} for the full message.`
  )
}
const la = "$$material"
function Ws() {
  return (
    (Ws = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var l = arguments[o]
            for (var i in l) ({}).hasOwnProperty.call(l, i) && (n[i] = l[i])
          }
          return n
        }),
    Ws.apply(null, arguments)
  )
}
function sx(n) {
  if (n.sheet) return n.sheet
  for (var o = 0; o < document.styleSheets.length; o++)
    if (document.styleSheets[o].ownerNode === n) return document.styleSheets[o]
}
function ux(n) {
  var o = document.createElement("style")
  return (
    o.setAttribute("data-emotion", n.key),
    n.nonce !== void 0 && o.setAttribute("nonce", n.nonce),
    o.appendChild(document.createTextNode("")),
    o.setAttribute("data-s", ""),
    o
  )
}
var cx = (function () {
    function n(l) {
      var i = this
      ;((this._insertTag = function (s) {
        var c
        ;(i.tags.length === 0
          ? i.insertionPoint
            ? (c = i.insertionPoint.nextSibling)
            : i.prepend
              ? (c = i.container.firstChild)
              : (c = i.before)
          : (c = i.tags[i.tags.length - 1].nextSibling),
          i.container.insertBefore(s, c),
          i.tags.push(s))
      }),
        (this.isSpeedy = l.speedy === void 0 ? !0 : l.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = l.nonce),
        (this.key = l.key),
        (this.container = l.container),
        (this.prepend = l.prepend),
        (this.insertionPoint = l.insertionPoint),
        (this.before = null))
    }
    var o = n.prototype
    return (
      (o.hydrate = function (i) {
        i.forEach(this._insertTag)
      }),
      (o.insert = function (i) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ux(this))
        var s = this.tags[this.tags.length - 1]
        if (this.isSpeedy) {
          var c = sx(s)
          try {
            c.insertRule(i, c.cssRules.length)
          } catch {}
        } else s.appendChild(document.createTextNode(i))
        this.ctr++
      }),
      (o.flush = function () {
        ;(this.tags.forEach(function (i) {
          var s
          return (s = i.parentNode) == null ? void 0 : s.removeChild(i)
        }),
          (this.tags = []),
          (this.ctr = 0))
      }),
      n
    )
  })(),
  Zt = "-ms-",
  Qs = "-moz-",
  We = "-webkit-",
  Q0 = "comm",
  Id = "rule",
  qd = "decl",
  fx = "@import",
  Z0 = "@keyframes",
  dx = "@layer",
  px = Math.abs,
  ru = String.fromCharCode,
  mx = Object.assign
function hx(n, o) {
  return Kt(n, 0) ^ 45
    ? (((((((o << 2) ^ Kt(n, 0)) << 2) ^ Kt(n, 1)) << 2) ^ Kt(n, 2)) << 2) ^ Kt(n, 3)
    : 0
}
function J0(n) {
  return n.trim()
}
function gx(n, o) {
  return (n = o.exec(n)) ? n[0] : n
}
function Qe(n, o, l) {
  return n.replace(o, l)
}
function gd(n, o) {
  return n.indexOf(o)
}
function Kt(n, o) {
  return n.charCodeAt(o) | 0
}
function ei(n, o, l) {
  return n.slice(o, l)
}
function na(n) {
  return n.length
}
function Vd(n) {
  return n.length
}
function Ns(n, o) {
  return (o.push(n), n)
}
function yx(n, o) {
  return n.map(o).join("")
}
var lu = 1,
  _r = 1,
  ev = 0,
  cn = 0,
  jt = 0,
  Hr = ""
function iu(n, o, l, i, s, c, d) {
  return {
    value: n,
    root: o,
    parent: l,
    type: i,
    props: s,
    children: c,
    line: lu,
    column: _r,
    length: d,
    return: "",
  }
}
function Ul(n, o) {
  return mx(iu("", null, null, "", null, null, 0), n, { length: -n.length }, o)
}
function vx() {
  return jt
}
function bx() {
  return ((jt = cn > 0 ? Kt(Hr, --cn) : 0), _r--, jt === 10 && ((_r = 1), lu--), jt)
}
function Sn() {
  return ((jt = cn < ev ? Kt(Hr, cn++) : 0), _r++, jt === 10 && ((_r = 1), lu++), jt)
}
function ia() {
  return Kt(Hr, cn)
}
function Hs() {
  return cn
}
function ri(n, o) {
  return ei(Hr, n, o)
}
function ti(n) {
  switch (n) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function tv(n) {
  return ((lu = _r = 1), (ev = na((Hr = n))), (cn = 0), [])
}
function nv(n) {
  return ((Hr = ""), n)
}
function Ps(n) {
  return J0(ri(cn - 1, yd(n === 91 ? n + 2 : n === 40 ? n + 1 : n)))
}
function Sx(n) {
  for (; (jt = ia()) && jt < 33; ) Sn()
  return ti(n) > 2 || ti(jt) > 3 ? "" : " "
}
function xx(n, o) {
  for (; --o && Sn() && !(jt < 48 || jt > 102 || (jt > 57 && jt < 65) || (jt > 70 && jt < 97)); );
  return ri(n, Hs() + (o < 6 && ia() == 32 && Sn() == 32))
}
function yd(n) {
  for (; Sn(); )
    switch (jt) {
      case n:
        return cn
      case 34:
      case 39:
        n !== 34 && n !== 39 && yd(jt)
        break
      case 40:
        n === 41 && yd(n)
        break
      case 92:
        Sn()
        break
    }
  return cn
}
function Cx(n, o) {
  for (; Sn() && n + jt !== 57; ) if (n + jt === 84 && ia() === 47) break
  return "/*" + ri(o, cn - 1) + "*" + ru(n === 47 ? n : Sn())
}
function Ex(n) {
  for (; !ti(ia()); ) Sn()
  return ri(n, cn)
}
function Tx(n) {
  return nv(Is("", null, null, null, [""], (n = tv(n)), 0, [0], n))
}
function Is(n, o, l, i, s, c, d, p, m) {
  for (
    var h = 0,
      v = 0,
      b = d,
      R = 0,
      M = 0,
      T = 0,
      x = 1,
      A = 1,
      w = 1,
      k = 0,
      O = "",
      N = s,
      B = c,
      _ = i,
      U = O;
    A;
  )
    switch (((T = k), (k = Sn()))) {
      case 40:
        if (T != 108 && Kt(U, b - 1) == 58) {
          gd((U += Qe(Ps(k), "&", "&\f")), "&\f") != -1 && (w = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        U += Ps(k)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        U += Sx(T)
        break
      case 92:
        U += xx(Hs() - 1, 7)
        continue
      case 47:
        switch (ia()) {
          case 42:
          case 47:
            Ns(Rx(Cx(Sn(), Hs()), o, l), m)
            break
          default:
            U += "/"
        }
        break
      case 123 * x:
        p[h++] = na(U) * w
      case 125 * x:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            A = 0
          case 59 + v:
            ;(w == -1 && (U = Qe(U, /\f/g, "")),
              M > 0 &&
                na(U) - b &&
                Ns(M > 32 ? Oy(U + ";", i, l, b - 1) : Oy(Qe(U, " ", "") + ";", i, l, b - 2), m))
            break
          case 59:
            U += ";"
          default:
            if ((Ns((_ = zy(U, o, l, h, v, s, p, O, (N = []), (B = []), b)), c), k === 123))
              if (v === 0) Is(U, o, _, _, N, c, b, p, B)
              else
                switch (R === 99 && Kt(U, 3) === 110 ? 100 : R) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Is(
                      n,
                      _,
                      _,
                      i && Ns(zy(n, _, _, 0, 0, s, p, O, s, (N = []), b), B),
                      s,
                      B,
                      b,
                      p,
                      i ? N : B
                    )
                    break
                  default:
                    Is(U, _, _, _, [""], B, 0, p, B)
                }
        }
        ;((h = v = M = 0), (x = w = 1), (O = U = ""), (b = d))
        break
      case 58:
        ;((b = 1 + na(U)), (M = T))
      default:
        if (x < 1) {
          if (k == 123) --x
          else if (k == 125 && x++ == 0 && bx() == 125) continue
        }
        switch (((U += ru(k)), k * x)) {
          case 38:
            w = v > 0 ? 1 : ((U += "\f"), -1)
            break
          case 44:
            ;((p[h++] = (na(U) - 1) * w), (w = 1))
            break
          case 64:
            ;(ia() === 45 && (U += Ps(Sn())), (R = ia()), (v = b = na((O = U += Ex(Hs())))), k++)
            break
          case 45:
            T === 45 && na(U) == 2 && (x = 0)
        }
    }
  return c
}
function zy(n, o, l, i, s, c, d, p, m, h, v) {
  for (var b = s - 1, R = s === 0 ? c : [""], M = Vd(R), T = 0, x = 0, A = 0; T < i; ++T)
    for (var w = 0, k = ei(n, b + 1, (b = px((x = d[T])))), O = n; w < M; ++w)
      (O = J0(x > 0 ? R[w] + " " + k : Qe(k, /&\f/g, R[w]))) && (m[A++] = O)
  return iu(n, o, l, s === 0 ? Id : p, m, h, v)
}
function Rx(n, o, l) {
  return iu(n, o, l, Q0, ru(vx()), ei(n, 2, -2), 0)
}
function Oy(n, o, l, i) {
  return iu(n, o, l, qd, ei(n, 0, i), ei(n, i + 1, -1), i)
}
function Br(n, o) {
  for (var l = "", i = Vd(n), s = 0; s < i; s++) l += o(n[s], s, n, o) || ""
  return l
}
function Mx(n, o, l, i) {
  switch (n.type) {
    case dx:
      if (n.children.length) break
    case fx:
    case qd:
      return (n.return = n.return || n.value)
    case Q0:
      return ""
    case Z0:
      return (n.return = n.value + "{" + Br(n.children, i) + "}")
    case Id:
      n.value = n.props.join(",")
  }
  return na((l = Br(n.children, i))) ? (n.return = n.value + "{" + l + "}") : ""
}
function Ax(n) {
  var o = Vd(n)
  return function (l, i, s, c) {
    for (var d = "", p = 0; p < o; p++) d += n[p](l, i, s, c) || ""
    return d
  }
}
function wx(n) {
  return function (o) {
    o.root || ((o = o.return) && n(o))
  }
}
function av(n) {
  var o = Object.create(null)
  return function (l) {
    return (o[l] === void 0 && (o[l] = n(l)), o[l])
  }
}
var zx = function (o, l, i) {
    for (var s = 0, c = 0; (s = c), (c = ia()), s === 38 && c === 12 && (l[i] = 1), !ti(c); ) Sn()
    return ri(o, cn)
  },
  Ox = function (o, l) {
    var i = -1,
      s = 44
    do
      switch (ti(s)) {
        case 0:
          ;(s === 38 && ia() === 12 && (l[i] = 1), (o[i] += zx(cn - 1, l, i)))
          break
        case 2:
          o[i] += Ps(s)
          break
        case 4:
          if (s === 44) {
            ;((o[++i] = ia() === 58 ? "&\f" : ""), (l[i] = o[i].length))
            break
          }
        default:
          o[i] += ru(s)
      }
    while ((s = Sn()))
    return o
  },
  Nx = function (o, l) {
    return nv(Ox(tv(o), l))
  },
  Ny = new WeakMap(),
  Dx = function (o) {
    if (!(o.type !== "rule" || !o.parent || o.length < 1)) {
      for (
        var l = o.value, i = o.parent, s = o.column === i.column && o.line === i.line;
        i.type !== "rule";
      )
        if (((i = i.parent), !i)) return
      if (!(o.props.length === 1 && l.charCodeAt(0) !== 58 && !Ny.get(i)) && !s) {
        Ny.set(o, !0)
        for (var c = [], d = Nx(l, c), p = i.props, m = 0, h = 0; m < d.length; m++)
          for (var v = 0; v < p.length; v++, h++)
            o.props[h] = c[m] ? d[m].replace(/&\f/g, p[v]) : p[v] + " " + d[m]
      }
    }
  },
  Bx = function (o) {
    if (o.type === "decl") {
      var l = o.value
      l.charCodeAt(0) === 108 && l.charCodeAt(2) === 98 && ((o.return = ""), (o.value = ""))
    }
  }
function ov(n, o) {
  switch (hx(n, o)) {
    case 5103:
      return We + "print-" + n + n
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return We + n + n
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return We + n + Qs + n + Zt + n + n
    case 6828:
    case 4268:
      return We + n + Zt + n + n
    case 6165:
      return We + n + Zt + "flex-" + n + n
    case 5187:
      return We + n + Qe(n, /(\w+).+(:[^]+)/, We + "box-$1$2" + Zt + "flex-$1$2") + n
    case 5443:
      return We + n + Zt + "flex-item-" + Qe(n, /flex-|-self/, "") + n
    case 4675:
      return We + n + Zt + "flex-line-pack" + Qe(n, /align-content|flex-|-self/, "") + n
    case 5548:
      return We + n + Zt + Qe(n, "shrink", "negative") + n
    case 5292:
      return We + n + Zt + Qe(n, "basis", "preferred-size") + n
    case 6060:
      return We + "box-" + Qe(n, "-grow", "") + We + n + Zt + Qe(n, "grow", "positive") + n
    case 4554:
      return We + Qe(n, /([^-])(transform)/g, "$1" + We + "$2") + n
    case 6187:
      return Qe(Qe(Qe(n, /(zoom-|grab)/, We + "$1"), /(image-set)/, We + "$1"), n, "") + n
    case 5495:
    case 3959:
      return Qe(n, /(image-set\([^]*)/, We + "$1$`$1")
    case 4968:
      return (
        Qe(
          Qe(n, /(.+:)(flex-)?(.*)/, We + "box-pack:$3" + Zt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        We +
        n +
        n
      )
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Qe(n, /(.+)-inline(.+)/, We + "$1$2") + n
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (na(n) - 1 - o > 6)
        switch (Kt(n, o + 1)) {
          case 109:
            if (Kt(n, o + 4) !== 45) break
          case 102:
            return (
              Qe(
                n,
                /(.+:)(.+)-([^]+)/,
                "$1" + We + "$2-$3$1" + Qs + (Kt(n, o + 3) == 108 ? "$3" : "$2-$3")
              ) + n
            )
          case 115:
            return ~gd(n, "stretch") ? ov(Qe(n, "stretch", "fill-available"), o) + n : n
        }
      break
    case 4949:
      if (Kt(n, o + 1) !== 115) break
    case 6444:
      switch (Kt(n, na(n) - 3 - (~gd(n, "!important") && 10))) {
        case 107:
          return Qe(n, ":", ":" + We) + n
        case 101:
          return (
            Qe(
              n,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                We +
                (Kt(n, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                We +
                "$2$3$1" +
                Zt +
                "$2box$3"
            ) + n
          )
      }
      break
    case 5936:
      switch (Kt(n, o + 11)) {
        case 114:
          return We + n + Zt + Qe(n, /[svh]\w+-[tblr]{2}/, "tb") + n
        case 108:
          return We + n + Zt + Qe(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n
        case 45:
          return We + n + Zt + Qe(n, /[svh]\w+-[tblr]{2}/, "lr") + n
      }
      return We + n + Zt + n + n
  }
  return n
}
var jx = function (o, l, i, s) {
    if (o.length > -1 && !o.return)
      switch (o.type) {
        case qd:
          o.return = ov(o.value, o.length)
          break
        case Z0:
          return Br([Ul(o, { value: Qe(o.value, "@", "@" + We) })], s)
        case Id:
          if (o.length)
            return yx(o.props, function (c) {
              switch (gx(c, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Br([Ul(o, { props: [Qe(c, /:(read-\w+)/, ":" + Qs + "$1")] })], s)
                case "::placeholder":
                  return Br(
                    [
                      Ul(o, { props: [Qe(c, /:(plac\w+)/, ":" + We + "input-$1")] }),
                      Ul(o, { props: [Qe(c, /:(plac\w+)/, ":" + Qs + "$1")] }),
                      Ul(o, { props: [Qe(c, /:(plac\w+)/, Zt + "input-$1")] }),
                    ],
                    s
                  )
              }
              return ""
            })
      }
  },
  kx = [jx],
  _x = function (o) {
    var l = o.key
    if (l === "css") {
      var i = document.querySelectorAll("style[data-emotion]:not([data-s])")
      Array.prototype.forEach.call(i, function (x) {
        var A = x.getAttribute("data-emotion")
        A.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""))
      })
    }
    var s = o.stylisPlugins || kx,
      c = {},
      d,
      p = []
    ;((d = o.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + l + ' "]'),
        function (x) {
          for (var A = x.getAttribute("data-emotion").split(" "), w = 1; w < A.length; w++)
            c[A[w]] = !0
          p.push(x)
        }
      ))
    var m,
      h = [Dx, Bx]
    {
      var v,
        b = [
          Mx,
          wx(function (x) {
            v.insert(x)
          }),
        ],
        R = Ax(h.concat(s, b)),
        M = function (A) {
          return Br(Tx(A), R)
        }
      m = function (A, w, k, O) {
        ;((v = k), M(A ? A + "{" + w.styles + "}" : w.styles), O && (T.inserted[w.name] = !0))
      }
    }
    var T = {
      key: l,
      sheet: new cx({
        key: l,
        container: d,
        nonce: o.nonce,
        speedy: o.speedy,
        prepend: o.prepend,
        insertionPoint: o.insertionPoint,
      }),
      nonce: o.nonce,
      inserted: c,
      registered: {},
      insert: m,
    }
    return (T.sheet.hydrate(p), T)
  },
  Kf = { exports: {} },
  Je = {}
var Dy
function Lx() {
  if (Dy) return Je
  Dy = 1
  var n = typeof Symbol == "function" && Symbol.for,
    o = n ? Symbol.for("react.element") : 60103,
    l = n ? Symbol.for("react.portal") : 60106,
    i = n ? Symbol.for("react.fragment") : 60107,
    s = n ? Symbol.for("react.strict_mode") : 60108,
    c = n ? Symbol.for("react.profiler") : 60114,
    d = n ? Symbol.for("react.provider") : 60109,
    p = n ? Symbol.for("react.context") : 60110,
    m = n ? Symbol.for("react.async_mode") : 60111,
    h = n ? Symbol.for("react.concurrent_mode") : 60111,
    v = n ? Symbol.for("react.forward_ref") : 60112,
    b = n ? Symbol.for("react.suspense") : 60113,
    R = n ? Symbol.for("react.suspense_list") : 60120,
    M = n ? Symbol.for("react.memo") : 60115,
    T = n ? Symbol.for("react.lazy") : 60116,
    x = n ? Symbol.for("react.block") : 60121,
    A = n ? Symbol.for("react.fundamental") : 60117,
    w = n ? Symbol.for("react.responder") : 60118,
    k = n ? Symbol.for("react.scope") : 60119
  function O(B) {
    if (typeof B == "object" && B !== null) {
      var _ = B.$$typeof
      switch (_) {
        case o:
          switch (((B = B.type), B)) {
            case m:
            case h:
            case i:
            case c:
            case s:
            case b:
              return B
            default:
              switch (((B = B && B.$$typeof), B)) {
                case p:
                case v:
                case T:
                case M:
                case d:
                  return B
                default:
                  return _
              }
          }
        case l:
          return _
      }
    }
  }
  function N(B) {
    return O(B) === h
  }
  return (
    (Je.AsyncMode = m),
    (Je.ConcurrentMode = h),
    (Je.ContextConsumer = p),
    (Je.ContextProvider = d),
    (Je.Element = o),
    (Je.ForwardRef = v),
    (Je.Fragment = i),
    (Je.Lazy = T),
    (Je.Memo = M),
    (Je.Portal = l),
    (Je.Profiler = c),
    (Je.StrictMode = s),
    (Je.Suspense = b),
    (Je.isAsyncMode = function (B) {
      return N(B) || O(B) === m
    }),
    (Je.isConcurrentMode = N),
    (Je.isContextConsumer = function (B) {
      return O(B) === p
    }),
    (Je.isContextProvider = function (B) {
      return O(B) === d
    }),
    (Je.isElement = function (B) {
      return typeof B == "object" && B !== null && B.$$typeof === o
    }),
    (Je.isForwardRef = function (B) {
      return O(B) === v
    }),
    (Je.isFragment = function (B) {
      return O(B) === i
    }),
    (Je.isLazy = function (B) {
      return O(B) === T
    }),
    (Je.isMemo = function (B) {
      return O(B) === M
    }),
    (Je.isPortal = function (B) {
      return O(B) === l
    }),
    (Je.isProfiler = function (B) {
      return O(B) === c
    }),
    (Je.isStrictMode = function (B) {
      return O(B) === s
    }),
    (Je.isSuspense = function (B) {
      return O(B) === b
    }),
    (Je.isValidElementType = function (B) {
      return (
        typeof B == "string" ||
        typeof B == "function" ||
        B === i ||
        B === h ||
        B === c ||
        B === s ||
        B === b ||
        B === R ||
        (typeof B == "object" &&
          B !== null &&
          (B.$$typeof === T ||
            B.$$typeof === M ||
            B.$$typeof === d ||
            B.$$typeof === p ||
            B.$$typeof === v ||
            B.$$typeof === A ||
            B.$$typeof === w ||
            B.$$typeof === k ||
            B.$$typeof === x))
      )
    }),
    (Je.typeOf = O),
    Je
  )
}
var By
function $x() {
  return (By || ((By = 1), (Kf.exports = Lx())), Kf.exports)
}
var Wf, jy
function Ux() {
  if (jy) return Wf
  jy = 1
  var n = $x(),
    o = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    l = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    i = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    s = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    c = {}
  ;((c[n.ForwardRef] = i), (c[n.Memo] = s))
  function d(T) {
    return n.isMemo(T) ? s : c[T.$$typeof] || o
  }
  var p = Object.defineProperty,
    m = Object.getOwnPropertyNames,
    h = Object.getOwnPropertySymbols,
    v = Object.getOwnPropertyDescriptor,
    b = Object.getPrototypeOf,
    R = Object.prototype
  function M(T, x, A) {
    if (typeof x != "string") {
      if (R) {
        var w = b(x)
        w && w !== R && M(T, w, A)
      }
      var k = m(x)
      h && (k = k.concat(h(x)))
      for (var O = d(T), N = d(x), B = 0; B < k.length; ++B) {
        var _ = k[B]
        if (!l[_] && !(A && A[_]) && !(N && N[_]) && !(O && O[_])) {
          var U = v(x, _)
          try {
            p(T, _, U)
          } catch {}
        }
      }
    }
    return T
  }
  return ((Wf = M), Wf)
}
Ux()
var Hx = !0
function rv(n, o, l) {
  var i = ""
  return (
    l.split(" ").forEach(function (s) {
      n[s] !== void 0 ? o.push(n[s] + ";") : s && (i += s + " ")
    }),
    i
  )
}
var Gd = function (o, l, i) {
    var s = o.key + "-" + l.name
    ;(i === !1 || Hx === !1) && o.registered[s] === void 0 && (o.registered[s] = l.styles)
  },
  Yd = function (o, l, i) {
    Gd(o, l, i)
    var s = o.key + "-" + l.name
    if (o.inserted[l.name] === void 0) {
      var c = l
      do (o.insert(l === c ? "." + s : "", c, o.sheet, !0), (c = c.next))
      while (c !== void 0)
    }
  }
function Px(n) {
  for (var o = 0, l, i = 0, s = n.length; s >= 4; ++i, s -= 4)
    ((l =
      (n.charCodeAt(i) & 255) |
      ((n.charCodeAt(++i) & 255) << 8) |
      ((n.charCodeAt(++i) & 255) << 16) |
      ((n.charCodeAt(++i) & 255) << 24)),
      (l = (l & 65535) * 1540483477 + (((l >>> 16) * 59797) << 16)),
      (l ^= l >>> 24),
      (o =
        ((l & 65535) * 1540483477 + (((l >>> 16) * 59797) << 16)) ^
        ((o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16))))
  switch (s) {
    case 3:
      o ^= (n.charCodeAt(i + 2) & 255) << 16
    case 2:
      o ^= (n.charCodeAt(i + 1) & 255) << 8
    case 1:
      ;((o ^= n.charCodeAt(i) & 255), (o = (o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)))
  }
  return (
    (o ^= o >>> 13),
    (o = (o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)),
    ((o ^ (o >>> 15)) >>> 0).toString(36)
  )
}
var Ix = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  qx = /[A-Z]|^ms/g,
  Vx = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  lv = function (o) {
    return o.charCodeAt(1) === 45
  },
  ky = function (o) {
    return o != null && typeof o != "boolean"
  },
  Qf = av(function (n) {
    return lv(n) ? n : n.replace(qx, "-$&").toLowerCase()
  }),
  _y = function (o, l) {
    switch (o) {
      case "animation":
      case "animationName":
        if (typeof l == "string")
          return l.replace(Vx, function (i, s, c) {
            return ((aa = { name: s, styles: c, next: aa }), s)
          })
    }
    return Ix[o] !== 1 && !lv(o) && typeof l == "number" && l !== 0 ? l + "px" : l
  }
function ni(n, o, l) {
  if (l == null) return ""
  var i = l
  if (i.__emotion_styles !== void 0) return i
  switch (typeof l) {
    case "boolean":
      return ""
    case "object": {
      var s = l
      if (s.anim === 1) return ((aa = { name: s.name, styles: s.styles, next: aa }), s.name)
      var c = l
      if (c.styles !== void 0) {
        var d = c.next
        if (d !== void 0)
          for (; d !== void 0; ) ((aa = { name: d.name, styles: d.styles, next: aa }), (d = d.next))
        var p = c.styles + ";"
        return p
      }
      return Gx(n, o, l)
    }
    case "function": {
      if (n !== void 0) {
        var m = aa,
          h = l(n)
        return ((aa = m), ni(n, o, h))
      }
      break
    }
  }
  var v = l
  if (o == null) return v
  var b = o[v]
  return b !== void 0 ? b : v
}
function Gx(n, o, l) {
  var i = ""
  if (Array.isArray(l)) for (var s = 0; s < l.length; s++) i += ni(n, o, l[s]) + ";"
  else
    for (var c in l) {
      var d = l[c]
      if (typeof d != "object") {
        var p = d
        o != null && o[p] !== void 0
          ? (i += c + "{" + o[p] + "}")
          : ky(p) && (i += Qf(c) + ":" + _y(c, p) + ";")
      } else if (Array.isArray(d) && typeof d[0] == "string" && (o == null || o[d[0]] === void 0))
        for (var m = 0; m < d.length; m++) ky(d[m]) && (i += Qf(c) + ":" + _y(c, d[m]) + ";")
      else {
        var h = ni(n, o, d)
        switch (c) {
          case "animation":
          case "animationName": {
            i += Qf(c) + ":" + h + ";"
            break
          }
          default:
            i += c + "{" + h + "}"
        }
      }
    }
  return i
}
var Ly = /label:\s*([^\s;{]+)\s*(;|$)/g,
  aa
function li(n, o, l) {
  if (n.length === 1 && typeof n[0] == "object" && n[0] !== null && n[0].styles !== void 0)
    return n[0]
  var i = !0,
    s = ""
  aa = void 0
  var c = n[0]
  if (c == null || c.raw === void 0) ((i = !1), (s += ni(l, o, c)))
  else {
    var d = c
    s += d[0]
  }
  for (var p = 1; p < n.length; p++)
    if (((s += ni(l, o, n[p])), i)) {
      var m = c
      s += m[p]
    }
  Ly.lastIndex = 0
  for (var h = "", v; (v = Ly.exec(s)) !== null; ) h += "-" + v[1]
  var b = Px(s) + h
  return { name: b, styles: s, next: aa }
}
var Yx = function (o) {
    return o()
  },
  iv = hd.useInsertionEffect ? hd.useInsertionEffect : !1,
  sv = iv || Yx,
  $y = iv || y.useLayoutEffect,
  uv = y.createContext(typeof HTMLElement < "u" ? _x({ key: "css" }) : null)
uv.Provider
var Fd = function (o) {
    return y.forwardRef(function (l, i) {
      var s = y.useContext(uv)
      return o(l, s, i)
    })
  },
  ii = y.createContext({}),
  Xd = {}.hasOwnProperty,
  vd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Fx = function (o, l) {
    var i = {}
    for (var s in l) Xd.call(l, s) && (i[s] = l[s])
    return ((i[vd] = o), i)
  },
  Xx = function (o) {
    var l = o.cache,
      i = o.serialized,
      s = o.isStringTag
    return (
      Gd(l, i, s),
      sv(function () {
        return Yd(l, i, s)
      }),
      null
    )
  },
  Kx = Fd(function (n, o, l) {
    var i = n.css
    typeof i == "string" && o.registered[i] !== void 0 && (i = o.registered[i])
    var s = n[vd],
      c = [i],
      d = ""
    typeof n.className == "string"
      ? (d = rv(o.registered, c, n.className))
      : n.className != null && (d = n.className + " ")
    var p = li(c, void 0, y.useContext(ii))
    d += o.key + "-" + p.name
    var m = {}
    for (var h in n) Xd.call(n, h) && h !== "css" && h !== vd && (m[h] = n[h])
    return (
      (m.className = d),
      l && (m.ref = l),
      y.createElement(
        y.Fragment,
        null,
        y.createElement(Xx, { cache: o, serialized: p, isStringTag: typeof s == "string" }),
        y.createElement(s, m)
      )
    )
  }),
  Wx = Kx,
  Uy = function (o, l) {
    var i = arguments
    if (l == null || !Xd.call(l, "css")) return y.createElement.apply(void 0, i)
    var s = i.length,
      c = new Array(s)
    ;((c[0] = Wx), (c[1] = Fx(o, l)))
    for (var d = 2; d < s; d++) c[d] = i[d]
    return y.createElement.apply(null, c)
  }
;(function (n) {
  var o
  o || (o = n.JSX || (n.JSX = {}))
})(Uy || (Uy = {}))
var Qx = Fd(function (n, o) {
  var l = n.styles,
    i = li([l], void 0, y.useContext(ii)),
    s = y.useRef()
  return (
    $y(
      function () {
        var c = o.key + "-global",
          d = new o.sheet.constructor({
            key: c,
            nonce: o.sheet.nonce,
            container: o.sheet.container,
            speedy: o.sheet.isSpeedy,
          }),
          p = !1,
          m = document.querySelector('style[data-emotion="' + c + " " + i.name + '"]')
        return (
          o.sheet.tags.length && (d.before = o.sheet.tags[0]),
          m !== null && ((p = !0), m.setAttribute("data-emotion", c), d.hydrate([m])),
          (s.current = [d, p]),
          function () {
            d.flush()
          }
        )
      },
      [o]
    ),
    $y(
      function () {
        var c = s.current,
          d = c[0],
          p = c[1]
        if (p) {
          c[1] = !1
          return
        }
        if ((i.next !== void 0 && Yd(o, i.next, !0), d.tags.length)) {
          var m = d.tags[d.tags.length - 1].nextElementSibling
          ;((d.before = m), d.flush())
        }
        o.insert("", i, d, !1)
      },
      [o, i.name]
    ),
    null
  )
})
function Kd() {
  for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++) o[l] = arguments[l]
  return li(o)
}
function si() {
  var n = Kd.apply(void 0, arguments),
    o = "animation-" + n.name
  return {
    name: o,
    styles: "@keyframes " + o + "{" + n.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
    },
  }
}
var Zx =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Jx = av(function (n) {
    return (
      Zx.test(n) || (n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) < 91)
    )
  }),
  e2 = Jx,
  t2 = function (o) {
    return o !== "theme"
  },
  Hy = function (o) {
    return typeof o == "string" && o.charCodeAt(0) > 96 ? e2 : t2
  },
  Py = function (o, l, i) {
    var s
    if (l) {
      var c = l.shouldForwardProp
      s =
        o.__emotion_forwardProp && c
          ? function (d) {
              return o.__emotion_forwardProp(d) && c(d)
            }
          : c
    }
    return (typeof s != "function" && i && (s = o.__emotion_forwardProp), s)
  },
  n2 = function (o) {
    var l = o.cache,
      i = o.serialized,
      s = o.isStringTag
    return (
      Gd(l, i, s),
      sv(function () {
        return Yd(l, i, s)
      }),
      null
    )
  },
  a2 = function n(o, l) {
    var i = o.__emotion_real === o,
      s = (i && o.__emotion_base) || o,
      c,
      d
    l !== void 0 && ((c = l.label), (d = l.target))
    var p = Py(o, l, i),
      m = p || Hy(s),
      h = !m("as")
    return function () {
      var v = arguments,
        b = i && o.__emotion_styles !== void 0 ? o.__emotion_styles.slice(0) : []
      if ((c !== void 0 && b.push("label:" + c + ";"), v[0] == null || v[0].raw === void 0))
        b.push.apply(b, v)
      else {
        var R = v[0]
        b.push(R[0])
        for (var M = v.length, T = 1; T < M; T++) b.push(v[T], R[T])
      }
      var x = Fd(function (A, w, k) {
        var O = (h && A.as) || s,
          N = "",
          B = [],
          _ = A
        if (A.theme == null) {
          _ = {}
          for (var U in A) _[U] = A[U]
          _.theme = y.useContext(ii)
        }
        typeof A.className == "string"
          ? (N = rv(w.registered, B, A.className))
          : A.className != null && (N = A.className + " ")
        var H = li(b.concat(B), w.registered, _)
        ;((N += w.key + "-" + H.name), d !== void 0 && (N += " " + d))
        var X = h && p === void 0 ? Hy(O) : m,
          Q = {}
        for (var te in A) (h && te === "as") || (X(te) && (Q[te] = A[te]))
        return (
          (Q.className = N),
          k && (Q.ref = k),
          y.createElement(
            y.Fragment,
            null,
            y.createElement(n2, { cache: w, serialized: H, isStringTag: typeof O == "string" }),
            y.createElement(O, Q)
          )
        )
      })
      return (
        (x.displayName =
          c !== void 0
            ? c
            : "Styled(" +
              (typeof s == "string" ? s : s.displayName || s.name || "Component") +
              ")"),
        (x.defaultProps = o.defaultProps),
        (x.__emotion_real = x),
        (x.__emotion_base = s),
        (x.__emotion_styles = b),
        (x.__emotion_forwardProp = p),
        Object.defineProperty(x, "toString", {
          value: function () {
            return "." + d
          },
        }),
        (x.withComponent = function (A, w) {
          var k = n(A, Ws({}, l, w, { shouldForwardProp: Py(x, w, !0) }))
          return k.apply(void 0, b)
        }),
        x
      )
    }
  },
  o2 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  bd = a2.bind(null)
o2.forEach(function (n) {
  bd[n] = bd(n)
})
function r2(n) {
  return n == null || Object.keys(n).length === 0
}
function cv(n) {
  const { styles: o, defaultTheme: l = {} } = n,
    i = typeof o == "function" ? (s) => o(r2(s) ? l : s) : o
  return E.jsx(Qx, { styles: i })
}
function fv(n, o) {
  return bd(n, o)
}
function l2(n, o) {
  Array.isArray(n.__emotion_styles) && (n.__emotion_styles = o(n.__emotion_styles))
}
const Iy = []
function io(n) {
  return ((Iy[0] = n), li(Iy))
}
var Zf = { exports: {} },
  st = {}
var qy
function i2() {
  if (qy) return st
  qy = 1
  var n = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    h = Symbol.for("react.suspense_list"),
    v = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    R = Symbol.for("react.view_transition"),
    M = Symbol.for("react.client.reference")
  function T(x) {
    if (typeof x == "object" && x !== null) {
      var A = x.$$typeof
      switch (A) {
        case n:
          switch (((x = x.type), x)) {
            case l:
            case s:
            case i:
            case m:
            case h:
            case R:
              return x
            default:
              switch (((x = x && x.$$typeof), x)) {
                case d:
                case p:
                case b:
                case v:
                  return x
                case c:
                  return x
                default:
                  return A
              }
          }
        case o:
          return A
      }
    }
  }
  return (
    (st.ContextConsumer = c),
    (st.ContextProvider = d),
    (st.Element = n),
    (st.ForwardRef = p),
    (st.Fragment = l),
    (st.Lazy = b),
    (st.Memo = v),
    (st.Portal = o),
    (st.Profiler = s),
    (st.StrictMode = i),
    (st.Suspense = m),
    (st.SuspenseList = h),
    (st.isContextConsumer = function (x) {
      return T(x) === c
    }),
    (st.isContextProvider = function (x) {
      return T(x) === d
    }),
    (st.isElement = function (x) {
      return typeof x == "object" && x !== null && x.$$typeof === n
    }),
    (st.isForwardRef = function (x) {
      return T(x) === p
    }),
    (st.isFragment = function (x) {
      return T(x) === l
    }),
    (st.isLazy = function (x) {
      return T(x) === b
    }),
    (st.isMemo = function (x) {
      return T(x) === v
    }),
    (st.isPortal = function (x) {
      return T(x) === o
    }),
    (st.isProfiler = function (x) {
      return T(x) === s
    }),
    (st.isStrictMode = function (x) {
      return T(x) === i
    }),
    (st.isSuspense = function (x) {
      return T(x) === m
    }),
    (st.isSuspenseList = function (x) {
      return T(x) === h
    }),
    (st.isValidElementType = function (x) {
      return (
        typeof x == "string" ||
        typeof x == "function" ||
        x === l ||
        x === s ||
        x === i ||
        x === m ||
        x === h ||
        (typeof x == "object" &&
          x !== null &&
          (x.$$typeof === b ||
            x.$$typeof === v ||
            x.$$typeof === d ||
            x.$$typeof === c ||
            x.$$typeof === p ||
            x.$$typeof === M ||
            x.getModuleId !== void 0))
      )
    }),
    (st.typeOf = T),
    st
  )
}
var Vy
function s2() {
  return (Vy || ((Vy = 1), (Zf.exports = i2())), Zf.exports)
}
var dv = s2()
function oa(n) {
  if (typeof n != "object" || n === null) return !1
  const o = Object.getPrototypeOf(n)
  return (
    (o === null || o === Object.prototype || Object.getPrototypeOf(o) === null) &&
    !(Symbol.toStringTag in n) &&
    !(Symbol.iterator in n)
  )
}
function pv(n) {
  if (y.isValidElement(n) || dv.isValidElementType(n) || !oa(n)) return n
  const o = {}
  return (
    Object.keys(n).forEach((l) => {
      o[l] = pv(n[l])
    }),
    o
  )
}
function It(n, o, l = { clone: !0 }) {
  const i = l.clone ? { ...n } : n
  return (
    oa(n) &&
      oa(o) &&
      Object.keys(o).forEach((s) => {
        y.isValidElement(o[s]) || dv.isValidElementType(o[s])
          ? (i[s] = o[s])
          : oa(o[s]) && Object.prototype.hasOwnProperty.call(n, s) && oa(n[s])
            ? (i[s] = It(n[s], o[s], l))
            : l.clone
              ? (i[s] = oa(o[s]) ? pv(o[s]) : o[s])
              : (i[s] = o[s])
      }),
    i
  )
}
const u2 = (n) => {
  const o = Object.keys(n).map((l) => ({ key: l, val: n[l] })) || []
  return (o.sort((l, i) => l.val - i.val), o.reduce((l, i) => ({ ...l, [i.key]: i.val }), {}))
}
function c2(n) {
  const {
      values: o = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: l = "px",
      step: i = 5,
      ...s
    } = n,
    c = u2(o),
    d = Object.keys(c)
  function p(R) {
    return `@media (min-width:${typeof o[R] == "number" ? o[R] : R}${l})`
  }
  function m(R) {
    return `@media (max-width:${(typeof o[R] == "number" ? o[R] : R) - i / 100}${l})`
  }
  function h(R, M) {
    const T = d.indexOf(M)
    return `@media (min-width:${typeof o[R] == "number" ? o[R] : R}${l}) and (max-width:${(T !== -1 && typeof o[d[T]] == "number" ? o[d[T]] : M) - i / 100}${l})`
  }
  function v(R) {
    return d.indexOf(R) + 1 < d.length ? h(R, d[d.indexOf(R) + 1]) : p(R)
  }
  function b(R) {
    const M = d.indexOf(R)
    return M === 0
      ? p(d[1])
      : M === d.length - 1
        ? m(d[M])
        : h(R, d[d.indexOf(R) + 1]).replace("@media", "@media not all and")
  }
  return { keys: d, values: c, up: p, down: m, between: h, only: v, not: b, unit: l, ...s }
}
function Gy(n, o) {
  if (!n.containerQueries) return o
  const l = Object.keys(o)
    .filter((i) => i.startsWith("@container"))
    .sort((i, s) => {
      const c = /min-width:\s*([0-9.]+)/
      return +(i.match(c)?.[1] || 0) - +(s.match(c)?.[1] || 0)
    })
  return l.length
    ? l.reduce(
        (i, s) => {
          const c = o[s]
          return (delete i[s], (i[s] = c), i)
        },
        { ...o }
      )
    : o
}
function f2(n, o) {
  return (
    o === "@" || (o.startsWith("@") && (n.some((l) => o.startsWith(`@${l}`)) || !!o.match(/^@\d/)))
  )
}
function d2(n, o) {
  const l = o.match(/^@([^/]+)?\/?(.+)?$/)
  if (!l) return null
  const [, i, s] = l,
    c = Number.isNaN(+i) ? i || 0 : +i
  return n.containerQueries(s).up(c)
}
function p2(n) {
  const o = (c, d) => c.replace("@media", d ? `@container ${d}` : "@container")
  function l(c, d) {
    ;((c.up = (...p) => o(n.breakpoints.up(...p), d)),
      (c.down = (...p) => o(n.breakpoints.down(...p), d)),
      (c.between = (...p) => o(n.breakpoints.between(...p), d)),
      (c.only = (...p) => o(n.breakpoints.only(...p), d)),
      (c.not = (...p) => {
        const m = o(n.breakpoints.not(...p), d)
        return m.includes("not all and")
          ? m
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : m
      }))
  }
  const i = {},
    s = (c) => (l(i, c), i)
  return (l(s), { ...n, containerQueries: s })
}
const m2 = { borderRadius: 4 }
function Wl(n, o) {
  return o ? It(n, o, { clone: !1 }) : n
}
const su = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Yy = { keys: ["xs", "sm", "md", "lg", "xl"], up: (n) => `@media (min-width:${su[n]}px)` },
  h2 = {
    containerQueries: (n) => ({
      up: (o) => {
        let l = typeof o == "number" ? o : su[o] || o
        return (
          typeof l == "number" && (l = `${l}px`),
          n ? `@container ${n} (min-width:${l})` : `@container (min-width:${l})`
        )
      },
    }),
  }
function Vn(n, o, l) {
  const i = n.theme || {}
  if (Array.isArray(o)) {
    const c = i.breakpoints || Yy
    return o.reduce((d, p, m) => ((d[c.up(c.keys[m])] = l(o[m])), d), {})
  }
  if (typeof o == "object") {
    const c = i.breakpoints || Yy
    return Object.keys(o).reduce((d, p) => {
      if (f2(c.keys, p)) {
        const m = d2(i.containerQueries ? i : h2, p)
        m && (d[m] = l(o[p], p))
      } else if (Object.keys(c.values || su).includes(p)) {
        const m = c.up(p)
        d[m] = l(o[p], p)
      } else {
        const m = p
        d[m] = o[m]
      }
      return d
    }, {})
  }
  return l(o)
}
function mv(n = {}) {
  return (
    n.keys?.reduce((l, i) => {
      const s = n.up(i)
      return ((l[s] = {}), l)
    }, {}) || {}
  )
}
function Sd(n, o) {
  return n.reduce((l, i) => {
    const s = l[i]
    return ((!s || Object.keys(s).length === 0) && delete l[i], l)
  }, o)
}
function g2(n, ...o) {
  const l = mv(n),
    i = [l, ...o].reduce((s, c) => It(s, c), {})
  return Sd(Object.keys(l), i)
}
function y2(n, o) {
  if (typeof n != "object") return {}
  const l = {},
    i = Object.keys(o)
  return (
    Array.isArray(n)
      ? i.forEach((s, c) => {
          c < n.length && (l[s] = !0)
        })
      : i.forEach((s) => {
          n[s] != null && (l[s] = !0)
        }),
    l
  )
}
function Jf({ values: n, breakpoints: o, base: l }) {
  const i = l || y2(n, o),
    s = Object.keys(i)
  if (s.length === 0) return n
  let c
  return s.reduce(
    (d, p, m) => (
      Array.isArray(n)
        ? ((d[p] = n[m] != null ? n[m] : n[c]), (c = m))
        : typeof n == "object"
          ? ((d[p] = n[p] != null ? n[p] : n[c]), (c = p))
          : (d[p] = n),
      d
    ),
    {}
  )
}
function ie(n) {
  if (typeof n != "string") throw new Error(Na(7))
  return n.charAt(0).toUpperCase() + n.slice(1)
}
function uu(n, o, l = !0) {
  if (!o || typeof o != "string") return null
  if (n && n.vars && l) {
    const i = `vars.${o}`.split(".").reduce((s, c) => (s && s[c] ? s[c] : null), n)
    if (i != null) return i
  }
  return o.split(".").reduce((i, s) => (i && i[s] != null ? i[s] : null), n)
}
function Zs(n, o, l, i = l) {
  let s
  return (
    typeof n == "function" ? (s = n(l)) : Array.isArray(n) ? (s = n[l] || i) : (s = uu(n, l) || i),
    o && (s = o(s, i, n)),
    s
  )
}
function zt(n) {
  const { prop: o, cssProperty: l = n.prop, themeKey: i, transform: s } = n,
    c = (d) => {
      if (d[o] == null) return null
      const p = d[o],
        m = d.theme,
        h = uu(m, i) || {}
      return Vn(d, p, (b) => {
        let R = Zs(h, s, b)
        return (
          b === R &&
            typeof b == "string" &&
            (R = Zs(h, s, `${o}${b === "default" ? "" : ie(b)}`, b)),
          l === !1 ? R : { [l]: R }
        )
      })
    }
  return ((c.propTypes = {}), (c.filterProps = [o]), c)
}
function v2(n) {
  const o = {}
  return (l) => (o[l] === void 0 && (o[l] = n(l)), o[l])
}
const b2 = { m: "margin", p: "padding" },
  S2 = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] },
  Fy = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  x2 = v2((n) => {
    if (n.length > 2)
      if (Fy[n]) n = Fy[n]
      else return [n]
    const [o, l] = n.split(""),
      i = b2[o],
      s = S2[l] || ""
    return Array.isArray(s) ? s.map((c) => i + c) : [i + s]
  }),
  Wd = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Qd = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ]
;[...Wd, ...Qd]
function ui(n, o, l, i) {
  const s = uu(n, o, !0) ?? l
  return typeof s == "number" || typeof s == "string"
    ? (c) =>
        typeof c == "string"
          ? c
          : typeof s == "string"
            ? s.startsWith("var(") && c === 0
              ? 0
              : s.startsWith("var(") && c === 1
                ? s
                : `calc(${c} * ${s})`
            : s * c
    : Array.isArray(s)
      ? (c) => {
          if (typeof c == "string") return c
          const d = Math.abs(c),
            p = s[d]
          return c >= 0
            ? p
            : typeof p == "number"
              ? -p
              : typeof p == "string" && p.startsWith("var(")
                ? `calc(-1 * ${p})`
                : `-${p}`
        }
      : typeof s == "function"
        ? s
        : () => {}
}
function cu(n) {
  return ui(n, "spacing", 8)
}
function Uo(n, o) {
  return typeof o == "string" || o == null ? o : n(o)
}
function C2(n, o) {
  return (l) => n.reduce((i, s) => ((i[s] = Uo(o, l)), i), {})
}
function E2(n, o, l, i) {
  if (!o.includes(l)) return null
  const s = x2(l),
    c = C2(s, i),
    d = n[l]
  return Vn(n, d, c)
}
function hv(n, o) {
  const l = cu(n.theme)
  return Object.keys(n)
    .map((i) => E2(n, o, i, l))
    .reduce(Wl, {})
}
function Rt(n) {
  return hv(n, Wd)
}
Rt.propTypes = {}
Rt.filterProps = Wd
function Mt(n) {
  return hv(n, Qd)
}
Mt.propTypes = {}
Mt.filterProps = Qd
function gv(n = 8, o = cu({ spacing: n })) {
  if (n.mui) return n
  const l = (...i) =>
    (i.length === 0 ? [1] : i)
      .map((c) => {
        const d = o(c)
        return typeof d == "number" ? `${d}px` : d
      })
      .join(" ")
  return ((l.mui = !0), l)
}
function fu(...n) {
  const o = n.reduce(
      (i, s) => (
        s.filterProps.forEach((c) => {
          i[c] = s
        }),
        i
      ),
      {}
    ),
    l = (i) => Object.keys(i).reduce((s, c) => (o[c] ? Wl(s, o[c](i)) : s), {})
  return ((l.propTypes = {}), (l.filterProps = n.reduce((i, s) => i.concat(s.filterProps), [])), l)
}
function Bn(n) {
  return typeof n != "number" ? n : `${n}px solid`
}
function jn(n, o) {
  return zt({ prop: n, themeKey: "borders", transform: o })
}
const T2 = jn("border", Bn),
  R2 = jn("borderTop", Bn),
  M2 = jn("borderRight", Bn),
  A2 = jn("borderBottom", Bn),
  w2 = jn("borderLeft", Bn),
  z2 = jn("borderColor"),
  O2 = jn("borderTopColor"),
  N2 = jn("borderRightColor"),
  D2 = jn("borderBottomColor"),
  B2 = jn("borderLeftColor"),
  j2 = jn("outline", Bn),
  k2 = jn("outlineColor"),
  du = (n) => {
    if (n.borderRadius !== void 0 && n.borderRadius !== null) {
      const o = ui(n.theme, "shape.borderRadius", 4),
        l = (i) => ({ borderRadius: Uo(o, i) })
      return Vn(n, n.borderRadius, l)
    }
    return null
  }
du.propTypes = {}
du.filterProps = ["borderRadius"]
fu(T2, R2, M2, A2, w2, z2, O2, N2, D2, B2, du, j2, k2)
const pu = (n) => {
  if (n.gap !== void 0 && n.gap !== null) {
    const o = ui(n.theme, "spacing", 8),
      l = (i) => ({ gap: Uo(o, i) })
    return Vn(n, n.gap, l)
  }
  return null
}
pu.propTypes = {}
pu.filterProps = ["gap"]
const mu = (n) => {
  if (n.columnGap !== void 0 && n.columnGap !== null) {
    const o = ui(n.theme, "spacing", 8),
      l = (i) => ({ columnGap: Uo(o, i) })
    return Vn(n, n.columnGap, l)
  }
  return null
}
mu.propTypes = {}
mu.filterProps = ["columnGap"]
const hu = (n) => {
  if (n.rowGap !== void 0 && n.rowGap !== null) {
    const o = ui(n.theme, "spacing", 8),
      l = (i) => ({ rowGap: Uo(o, i) })
    return Vn(n, n.rowGap, l)
  }
  return null
}
hu.propTypes = {}
hu.filterProps = ["rowGap"]
const _2 = zt({ prop: "gridColumn" }),
  L2 = zt({ prop: "gridRow" }),
  $2 = zt({ prop: "gridAutoFlow" }),
  U2 = zt({ prop: "gridAutoColumns" }),
  H2 = zt({ prop: "gridAutoRows" }),
  P2 = zt({ prop: "gridTemplateColumns" }),
  I2 = zt({ prop: "gridTemplateRows" }),
  q2 = zt({ prop: "gridTemplateAreas" }),
  V2 = zt({ prop: "gridArea" })
fu(pu, mu, hu, _2, L2, $2, U2, H2, P2, I2, q2, V2)
function jr(n, o) {
  return o === "grey" ? o : n
}
const G2 = zt({ prop: "color", themeKey: "palette", transform: jr }),
  Y2 = zt({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: jr }),
  F2 = zt({ prop: "backgroundColor", themeKey: "palette", transform: jr })
fu(G2, Y2, F2)
function bn(n) {
  return n <= 1 && n !== 0 ? `${n * 100}%` : n
}
const X2 = zt({ prop: "width", transform: bn }),
  Zd = (n) => {
    if (n.maxWidth !== void 0 && n.maxWidth !== null) {
      const o = (l) => {
        const i = n.theme?.breakpoints?.values?.[l] || su[l]
        return i
          ? n.theme?.breakpoints?.unit !== "px"
            ? { maxWidth: `${i}${n.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: bn(l) }
      }
      return Vn(n, n.maxWidth, o)
    }
    return null
  }
Zd.filterProps = ["maxWidth"]
const K2 = zt({ prop: "minWidth", transform: bn }),
  W2 = zt({ prop: "height", transform: bn }),
  Q2 = zt({ prop: "maxHeight", transform: bn }),
  Z2 = zt({ prop: "minHeight", transform: bn })
zt({ prop: "size", cssProperty: "width", transform: bn })
zt({ prop: "size", cssProperty: "height", transform: bn })
const J2 = zt({ prop: "boxSizing" })
fu(X2, Zd, K2, W2, Q2, Z2, J2)
const ci = {
  border: { themeKey: "borders", transform: Bn },
  borderTop: { themeKey: "borders", transform: Bn },
  borderRight: { themeKey: "borders", transform: Bn },
  borderBottom: { themeKey: "borders", transform: Bn },
  borderLeft: { themeKey: "borders", transform: Bn },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: Bn },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: du },
  color: { themeKey: "palette", transform: jr },
  bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: jr },
  backgroundColor: { themeKey: "palette", transform: jr },
  p: { style: Mt },
  pt: { style: Mt },
  pr: { style: Mt },
  pb: { style: Mt },
  pl: { style: Mt },
  px: { style: Mt },
  py: { style: Mt },
  padding: { style: Mt },
  paddingTop: { style: Mt },
  paddingRight: { style: Mt },
  paddingBottom: { style: Mt },
  paddingLeft: { style: Mt },
  paddingX: { style: Mt },
  paddingY: { style: Mt },
  paddingInline: { style: Mt },
  paddingInlineStart: { style: Mt },
  paddingInlineEnd: { style: Mt },
  paddingBlock: { style: Mt },
  paddingBlockStart: { style: Mt },
  paddingBlockEnd: { style: Mt },
  m: { style: Rt },
  mt: { style: Rt },
  mr: { style: Rt },
  mb: { style: Rt },
  ml: { style: Rt },
  mx: { style: Rt },
  my: { style: Rt },
  margin: { style: Rt },
  marginTop: { style: Rt },
  marginRight: { style: Rt },
  marginBottom: { style: Rt },
  marginLeft: { style: Rt },
  marginX: { style: Rt },
  marginY: { style: Rt },
  marginInline: { style: Rt },
  marginInlineStart: { style: Rt },
  marginInlineEnd: { style: Rt },
  marginBlock: { style: Rt },
  marginBlockStart: { style: Rt },
  marginBlockEnd: { style: Rt },
  displayPrint: { cssProperty: !1, transform: (n) => ({ "@media print": { display: n } }) },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: pu },
  rowGap: { style: hu },
  columnGap: { style: mu },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: bn },
  maxWidth: { style: Zd },
  minWidth: { transform: bn },
  height: { transform: bn },
  maxHeight: { transform: bn },
  minHeight: { transform: bn },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
}
function eC(...n) {
  const o = n.reduce((i, s) => i.concat(Object.keys(s)), []),
    l = new Set(o)
  return n.every((i) => l.size === Object.keys(i).length)
}
function tC(n, o) {
  return typeof n == "function" ? n(o) : n
}
function nC() {
  function n(l, i, s, c) {
    const d = { [l]: i, theme: s },
      p = c[l]
    if (!p) return { [l]: i }
    const { cssProperty: m = l, themeKey: h, transform: v, style: b } = p
    if (i == null) return null
    if (h === "typography" && i === "inherit") return { [l]: i }
    const R = uu(s, h) || {}
    return b
      ? b(d)
      : Vn(d, i, (T) => {
          let x = Zs(R, v, T)
          return (
            T === x &&
              typeof T == "string" &&
              (x = Zs(R, v, `${l}${T === "default" ? "" : ie(T)}`, T)),
            m === !1 ? x : { [m]: x }
          )
        })
  }
  function o(l) {
    const { sx: i, theme: s = {}, nested: c } = l || {}
    if (!i) return null
    const d = s.unstable_sxConfig ?? ci
    function p(m) {
      let h = m
      if (typeof m == "function") h = m(s)
      else if (typeof m != "object") return m
      if (!h) return null
      const v = mv(s.breakpoints),
        b = Object.keys(v)
      let R = v
      return (
        Object.keys(h).forEach((M) => {
          const T = tC(h[M], s)
          if (T != null)
            if (typeof T == "object")
              if (d[M]) R = Wl(R, n(M, T, s, d))
              else {
                const x = Vn({ theme: s }, T, (A) => ({ [M]: A }))
                eC(x, T) ? (R[M] = o({ sx: T, theme: s, nested: !0 })) : (R = Wl(R, x))
              }
            else R = Wl(R, n(M, T, s, d))
        }),
        !c && s.modularCssLayers ? { "@layer sx": Gy(s, Sd(b, R)) } : Gy(s, Sd(b, R))
      )
    }
    return Array.isArray(i) ? i.map(p) : p(i)
  }
  return o
}
const so = nC()
so.filterProps = ["sx"]
function aC(n, o) {
  const l = this
  if (l.vars) {
    if (!l.colorSchemes?.[n] || typeof l.getColorSchemeSelector != "function") return {}
    let i = l.getColorSchemeSelector(n)
    return i === "&"
      ? o
      : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`),
        { [i]: o })
  }
  return l.palette.mode === n ? o : {}
}
function fi(n = {}, ...o) {
  const { breakpoints: l = {}, palette: i = {}, spacing: s, shape: c = {}, ...d } = n,
    p = c2(l),
    m = gv(s)
  let h = It(
    {
      breakpoints: p,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...i },
      spacing: m,
      shape: { ...m2, ...c },
    },
    d
  )
  return (
    (h = p2(h)),
    (h.applyStyles = aC),
    (h = o.reduce((v, b) => It(v, b), h)),
    (h.unstable_sxConfig = { ...ci, ...d?.unstable_sxConfig }),
    (h.unstable_sx = function (b) {
      return so({ sx: b, theme: this })
    }),
    h
  )
}
function oC(n) {
  return Object.keys(n).length === 0
}
function Jd(n = null) {
  const o = y.useContext(ii)
  return !o || oC(o) ? n : o
}
const rC = fi()
function gu(n = rC) {
  return Jd(n)
}
function ed(n) {
  const o = io(n)
  return n !== o && o.styles
    ? (o.styles.match(/^@layer\s+[^{]*$/) || (o.styles = `@layer global{${o.styles}}`), o)
    : n
}
function yv({ styles: n, themeId: o, defaultTheme: l = {} }) {
  const i = gu(l),
    s = (o && i[o]) || i
  let c = typeof n == "function" ? n(s) : n
  return (
    s.modularCssLayers &&
      (Array.isArray(c) ? (c = c.map((d) => ed(typeof d == "function" ? d(s) : d))) : (c = ed(c))),
    E.jsx(cv, { styles: c })
  )
}
const lC = (n) => {
  const o = { systemProps: {}, otherProps: {} },
    l = n?.theme?.unstable_sxConfig ?? ci
  return (
    Object.keys(n).forEach((i) => {
      l[i] ? (o.systemProps[i] = n[i]) : (o.otherProps[i] = n[i])
    }),
    o
  )
}
function ep(n) {
  const { sx: o, ...l } = n,
    { systemProps: i, otherProps: s } = lC(l)
  let c
  return (
    Array.isArray(o)
      ? (c = [i, ...o])
      : typeof o == "function"
        ? (c = (...d) => {
            const p = o(...d)
            return oa(p) ? { ...i, ...p } : i
          })
        : (c = { ...i, ...o }),
    { ...s, sx: c }
  )
}
const Xy = (n) => n,
  iC = () => {
    let n = Xy
    return {
      configure(o) {
        n = o
      },
      generate(o) {
        return n(o)
      },
      reset() {
        n = Xy
      },
    }
  },
  vv = iC()
function bv(n) {
  var o,
    l,
    i = ""
  if (typeof n == "string" || typeof n == "number") i += n
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var s = n.length
      for (o = 0; o < s; o++) n[o] && (l = bv(n[o])) && (i && (i += " "), (i += l))
    } else for (l in n) n[l] && (i && (i += " "), (i += l))
  return i
}
function pe() {
  for (var n, o, l = 0, i = "", s = arguments.length; l < s; l++)
    (n = arguments[l]) && (o = bv(n)) && (i && (i += " "), (i += o))
  return i
}
function sC(n = {}) {
  const {
      themeId: o,
      defaultTheme: l,
      defaultClassName: i = "MuiBox-root",
      generateClassName: s,
    } = n,
    c = fv("div", { shouldForwardProp: (p) => p !== "theme" && p !== "sx" && p !== "as" })(so)
  return y.forwardRef(function (m, h) {
    const v = gu(l),
      { className: b, component: R = "div", ...M } = ep(m)
    return E.jsx(c, {
      as: R,
      ref: h,
      className: pe(b, s ? s(i) : i),
      theme: (o && v[o]) || v,
      ...M,
    })
  })
}
const uC = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
}
function Te(n, o, l = "Mui") {
  const i = uC[o]
  return i ? `${l}-${i}` : `${vv.generate(n)}-${o}`
}
function Re(n, o, l = "Mui") {
  const i = {}
  return (
    o.forEach((s) => {
      i[s] = Te(n, s, l)
    }),
    i
  )
}
function Sv(n) {
  const { variants: o, ...l } = n,
    i = { variants: o, style: io(l), isProcessed: !0 }
  return (
    i.style === l ||
      (o &&
        o.forEach((s) => {
          typeof s.style != "function" && (s.style = io(s.style))
        })),
    i
  )
}
const cC = fi()
function td(n) {
  return n !== "ownerState" && n !== "theme" && n !== "sx" && n !== "as"
}
function _o(n, o) {
  return (
    o &&
      n &&
      typeof n == "object" &&
      n.styles &&
      !n.styles.startsWith("@layer") &&
      (n.styles = `@layer ${o}{${String(n.styles)}}`),
    n
  )
}
function fC(n) {
  return n ? (o, l) => l[n] : null
}
function dC(n, o, l) {
  n.theme = mC(n.theme) ? l : n.theme[o] || n.theme
}
function qs(n, o, l) {
  const i = typeof o == "function" ? o(n) : o
  if (Array.isArray(i)) return i.flatMap((s) => qs(n, s, l))
  if (Array.isArray(i?.variants)) {
    let s
    if (i.isProcessed) s = l ? _o(i.style, l) : i.style
    else {
      const { variants: c, ...d } = i
      s = l ? _o(io(d), l) : d
    }
    return xv(n, i.variants, [s], l)
  }
  return i?.isProcessed ? (l ? _o(io(i.style), l) : i.style) : l ? _o(io(i), l) : i
}
function xv(n, o, l = [], i = void 0) {
  let s
  e: for (let c = 0; c < o.length; c += 1) {
    const d = o[c]
    if (typeof d.props == "function") {
      if (((s ??= { ...n, ...n.ownerState, ownerState: n.ownerState }), !d.props(s))) continue
    } else
      for (const p in d.props)
        if (n[p] !== d.props[p] && n.ownerState?.[p] !== d.props[p]) continue e
    typeof d.style == "function"
      ? ((s ??= { ...n, ...n.ownerState, ownerState: n.ownerState }),
        l.push(i ? _o(io(d.style(s)), i) : d.style(s)))
      : l.push(i ? _o(io(d.style), i) : d.style)
  }
  return l
}
function Cv(n = {}) {
  const {
    themeId: o,
    defaultTheme: l = cC,
    rootShouldForwardProp: i = td,
    slotShouldForwardProp: s = td,
  } = n
  function c(p) {
    dC(p, o, l)
  }
  return (p, m = {}) => {
    l2(p, (_) => _.filter((U) => U !== so))
    const {
        name: h,
        slot: v,
        skipVariantsResolver: b,
        skipSx: R,
        overridesResolver: M = fC(gC(v)),
        ...T
      } = m,
      x = (h && h.startsWith("Mui")) || v ? "components" : "custom",
      A = b !== void 0 ? b : (v && v !== "Root" && v !== "root") || !1,
      w = R || !1
    let k = td
    v === "Root" || v === "root" ? (k = i) : v ? (k = s) : hC(p) && (k = void 0)
    const O = fv(p, { shouldForwardProp: k, label: pC(), ...T }),
      N = (_) => {
        if (_.__emotion_real === _) return _
        if (typeof _ == "function")
          return function (H) {
            return qs(H, _, H.theme.modularCssLayers ? x : void 0)
          }
        if (oa(_)) {
          const U = Sv(_)
          return function (X) {
            return U.variants
              ? qs(X, U, X.theme.modularCssLayers ? x : void 0)
              : X.theme.modularCssLayers
                ? _o(U.style, x)
                : U.style
          }
        }
        return _
      },
      B = (..._) => {
        const U = [],
          H = _.map(N),
          X = []
        if (
          (U.push(c),
          h &&
            M &&
            X.push(function (W) {
              const Y = W.theme.components?.[h]?.styleOverrides
              if (!Y) return null
              const z = {}
              for (const F in Y) z[F] = qs(W, Y[F], W.theme.modularCssLayers ? "theme" : void 0)
              return M(W, z)
            }),
          h &&
            !A &&
            X.push(function (W) {
              const Y = W.theme?.components?.[h]?.variants
              return Y ? xv(W, Y, [], W.theme.modularCssLayers ? "theme" : void 0) : null
            }),
          w || X.push(so),
          Array.isArray(H[0]))
        ) {
          const C = H.shift(),
            W = new Array(U.length).fill(""),
            G = new Array(X.length).fill("")
          let Y
          ;((Y = [...W, ...C, ...G]), (Y.raw = [...W, ...C.raw, ...G]), U.unshift(Y))
        }
        const Q = [...U, ...H, ...X],
          te = O(...Q)
        return (p.muiName && (te.muiName = p.muiName), te)
      }
    return (O.withConfig && (B.withConfig = O.withConfig), B)
  }
}
function pC(n, o) {
  return void 0
}
function mC(n) {
  for (const o in n) return !1
  return !0
}
function hC(n) {
  return typeof n == "string" && n.charCodeAt(0) > 96
}
function gC(n) {
  return n && n.charAt(0).toLowerCase() + n.slice(1)
}
const Ev = Cv()
function ai(n, o, l = !1) {
  const i = { ...o }
  for (const s in n)
    if (Object.prototype.hasOwnProperty.call(n, s)) {
      const c = s
      if (c === "components" || c === "slots") i[c] = { ...n[c], ...i[c] }
      else if (c === "componentsProps" || c === "slotProps") {
        const d = n[c],
          p = o[c]
        if (!p) i[c] = d || {}
        else if (!d) i[c] = p
        else {
          i[c] = { ...p }
          for (const m in d)
            if (Object.prototype.hasOwnProperty.call(d, m)) {
              const h = m
              i[c][h] = ai(d[h], p[h], l)
            }
        }
      } else
        c === "className" && l && o.className
          ? (i.className = pe(n?.className, o?.className))
          : c === "style" && l && o.style
            ? (i.style = { ...n?.style, ...o?.style })
            : i[c] === void 0 && (i[c] = n[c])
    }
  return i
}
function yC(n) {
  const { theme: o, name: l, props: i } = n
  return !o || !o.components || !o.components[l] || !o.components[l].defaultProps
    ? i
    : ai(o.components[l].defaultProps, i)
}
function Tv({ props: n, name: o, defaultTheme: l, themeId: i }) {
  let s = gu(l)
  return (i && (s = s[i] || s), yC({ theme: s, name: o, props: n }))
}
const Gn = typeof window < "u" ? y.useLayoutEffect : y.useEffect
function vC(n, o = Number.MIN_SAFE_INTEGER, l = Number.MAX_SAFE_INTEGER) {
  return Math.max(o, Math.min(n, l))
}
function tp(n, o = 0, l = 1) {
  return vC(n, o, l)
}
function bC(n) {
  n = n.slice(1)
  const o = new RegExp(`.{1,${n.length >= 6 ? 2 : 1}}`, "g")
  let l = n.match(o)
  return (
    l && l[0].length === 1 && (l = l.map((i) => i + i)),
    l
      ? `rgb${l.length === 4 ? "a" : ""}(${l.map((i, s) => (s < 3 ? parseInt(i, 16) : Math.round((parseInt(i, 16) / 255) * 1e3) / 1e3)).join(", ")})`
      : ""
  )
}
function uo(n) {
  if (n.type) return n
  if (n.charAt(0) === "#") return uo(bC(n))
  const o = n.indexOf("("),
    l = n.substring(0, o)
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(l)) throw new Error(Na(9, n))
  let i = n.substring(o + 1, n.length - 1),
    s
  if (l === "color") {
    if (
      ((i = i.split(" ")),
      (s = i.shift()),
      i.length === 4 && i[3].charAt(0) === "/" && (i[3] = i[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(s))
    )
      throw new Error(Na(10, s))
  } else i = i.split(",")
  return ((i = i.map((c) => parseFloat(c))), { type: l, values: i, colorSpace: s })
}
const SC = (n) => {
    const o = uo(n)
    return o.values
      .slice(0, 3)
      .map((l, i) => (o.type.includes("hsl") && i !== 0 ? `${l}%` : l))
      .join(" ")
  },
  Gl = (n, o) => {
    try {
      return SC(n)
    } catch {
      return n
    }
  }
function yu(n) {
  const { type: o, colorSpace: l } = n
  let { values: i } = n
  return (
    o.includes("rgb")
      ? (i = i.map((s, c) => (c < 3 ? parseInt(s, 10) : s)))
      : o.includes("hsl") && ((i[1] = `${i[1]}%`), (i[2] = `${i[2]}%`)),
    o.includes("color") ? (i = `${l} ${i.join(" ")}`) : (i = `${i.join(", ")}`),
    `${o}(${i})`
  )
}
function Rv(n) {
  n = uo(n)
  const { values: o } = n,
    l = o[0],
    i = o[1] / 100,
    s = o[2] / 100,
    c = i * Math.min(s, 1 - s),
    d = (h, v = (h + l / 30) % 12) => s - c * Math.max(Math.min(v - 3, 9 - v, 1), -1)
  let p = "rgb"
  const m = [Math.round(d(0) * 255), Math.round(d(8) * 255), Math.round(d(4) * 255)]
  return (n.type === "hsla" && ((p += "a"), m.push(o[3])), yu({ type: p, values: m }))
}
function xd(n) {
  n = uo(n)
  let o = n.type === "hsl" || n.type === "hsla" ? uo(Rv(n)).values : n.values
  return (
    (o = o.map(
      (l) => (
        n.type !== "color" && (l /= 255),
        l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2]).toFixed(3))
  )
}
function xC(n, o) {
  const l = xd(n),
    i = xd(o)
  return (Math.max(l, i) + 0.05) / (Math.min(l, i) + 0.05)
}
function Js(n, o) {
  return (
    (n = uo(n)),
    (o = tp(o)),
    (n.type === "rgb" || n.type === "hsl") && (n.type += "a"),
    n.type === "color" ? (n.values[3] = `/${o}`) : (n.values[3] = o),
    yu(n)
  )
}
function No(n, o, l) {
  try {
    return Js(n, o)
  } catch {
    return n
  }
}
function vu(n, o) {
  if (((n = uo(n)), (o = tp(o)), n.type.includes("hsl"))) n.values[2] *= 1 - o
  else if (n.type.includes("rgb") || n.type.includes("color"))
    for (let l = 0; l < 3; l += 1) n.values[l] *= 1 - o
  return yu(n)
}
function nt(n, o, l) {
  try {
    return vu(n, o)
  } catch {
    return n
  }
}
function bu(n, o) {
  if (((n = uo(n)), (o = tp(o)), n.type.includes("hsl"))) n.values[2] += (100 - n.values[2]) * o
  else if (n.type.includes("rgb"))
    for (let l = 0; l < 3; l += 1) n.values[l] += (255 - n.values[l]) * o
  else if (n.type.includes("color"))
    for (let l = 0; l < 3; l += 1) n.values[l] += (1 - n.values[l]) * o
  return yu(n)
}
function at(n, o, l) {
  try {
    return bu(n, o)
  } catch {
    return n
  }
}
function CC(n, o = 0.15) {
  return xd(n) > 0.5 ? vu(n, o) : bu(n, o)
}
function Ds(n, o, l) {
  try {
    return CC(n, o)
  } catch {
    return n
  }
}
const Mv = y.createContext(null)
function np() {
  return y.useContext(Mv)
}
const EC = typeof Symbol == "function" && Symbol.for,
  TC = EC ? Symbol.for("mui.nested") : "__THEME_NESTED__"
function RC(n, o) {
  return typeof o == "function" ? o(n) : { ...n, ...o }
}
function MC(n) {
  const { children: o, theme: l } = n,
    i = np(),
    s = y.useMemo(() => {
      const c = i === null ? { ...l } : RC(i, l)
      return (c != null && (c[TC] = i !== null), c)
    }, [l, i])
  return E.jsx(Mv.Provider, { value: s, children: o })
}
const Av = y.createContext()
function AC({ value: n, ...o }) {
  return E.jsx(Av.Provider, { value: n ?? !0, ...o })
}
const wC = () => y.useContext(Av) ?? !1,
  wv = y.createContext(void 0)
function zC({ value: n, children: o }) {
  return E.jsx(wv.Provider, { value: n, children: o })
}
function OC(n) {
  const { theme: o, name: l, props: i } = n
  if (!o || !o.components || !o.components[l]) return i
  const s = o.components[l]
  return s.defaultProps
    ? ai(s.defaultProps, i, o.components.mergeClassNameAndStyle)
    : !s.styleOverrides && !s.variants
      ? ai(s, i, o.components.mergeClassNameAndStyle)
      : i
}
function NC({ props: n, name: o }) {
  const l = y.useContext(wv)
  return OC({ props: n, name: o, theme: { components: l } })
}
let Ky = 0
function DC(n) {
  const [o, l] = y.useState(n),
    i = n || o
  return (
    y.useEffect(() => {
      o == null && ((Ky += 1), l(`mui-${Ky}`))
    }, [o]),
    i
  )
}
const BC = { ...hd },
  Wy = BC.useId
function Pr(n) {
  if (Wy !== void 0) {
    const o = Wy()
    return n ?? o
  }
  return DC(n)
}
function jC(n) {
  const o = Jd(),
    l = Pr() || "",
    { modularCssLayers: i } = n
  let s = "mui.global, mui.components, mui.theme, mui.custom, mui.sx"
  return (
    !i || o !== null
      ? (s = "")
      : typeof i == "string"
        ? (s = i.replace(/mui(?!\.)/g, s))
        : (s = `@layer ${s};`),
    Gn(() => {
      const c = document.querySelector("head")
      if (!c) return
      const d = c.firstChild
      if (s) {
        if (
          d &&
          d.hasAttribute?.("data-mui-layer-order") &&
          d.getAttribute("data-mui-layer-order") === l
        )
          return
        const p = document.createElement("style")
        ;(p.setAttribute("data-mui-layer-order", l), (p.textContent = s), c.prepend(p))
      } else c.querySelector(`style[data-mui-layer-order="${l}"]`)?.remove()
    }, [s, l]),
    s ? E.jsx(yv, { styles: s }) : null
  )
}
const Qy = {}
function Zy(n, o, l, i = !1) {
  return y.useMemo(() => {
    const s = (n && o[n]) || o
    if (typeof l == "function") {
      const c = l(s),
        d = n ? { ...o, [n]: c } : c
      return i ? () => d : d
    }
    return n ? { ...o, [n]: l } : { ...o, ...l }
  }, [n, o, l, i])
}
function zv(n) {
  const { children: o, theme: l, themeId: i } = n,
    s = Jd(Qy),
    c = np() || Qy,
    d = Zy(i, s, l),
    p = Zy(i, c, l, !0),
    m = (i ? d[i] : d).direction === "rtl",
    h = jC(d)
  return E.jsx(MC, {
    theme: p,
    children: E.jsx(ii.Provider, {
      value: d,
      children: E.jsx(AC, {
        value: m,
        children: E.jsxs(zC, { value: i ? d[i].components : d.components, children: [h, o] }),
      }),
    }),
  })
}
const Jy = { theme: void 0 }
function kC(n) {
  let o, l
  return function (s) {
    let c = o
    return (
      (c === void 0 || s.theme !== l) &&
        ((Jy.theme = s.theme), (c = Sv(n(Jy))), (o = c), (l = s.theme)),
      c
    )
  }
}
const ap = "mode",
  op = "color-scheme",
  _C = "data-color-scheme"
function LC(n) {
  const {
    defaultMode: o = "system",
    defaultLightColorScheme: l = "light",
    defaultDarkColorScheme: i = "dark",
    modeStorageKey: s = ap,
    colorSchemeStorageKey: c = op,
    attribute: d = _C,
    colorSchemeNode: p = "document.documentElement",
    nonce: m,
  } = n || {}
  let h = "",
    v = d
  if ((d === "class" && (v = ".%s"), d === "data" && (v = "[data-%s]"), v.startsWith("."))) {
    const R = v.substring(1)
    h += `${p}.classList.remove('${R}'.replace('%s', light), '${R}'.replace('%s', dark));
      ${p}.classList.add('${R}'.replace('%s', colorScheme));`
  }
  const b = v.match(/\[([^[\]]+)\]/)
  if (b) {
    const [R, M] = b[1].split("=")
    ;(M ||
      (h += `${p}.removeAttribute('${R}'.replace('%s', light));
      ${p}.removeAttribute('${R}'.replace('%s', dark));`),
      (h += `
      ${p}.setAttribute('${R}'.replace('%s', colorScheme), ${M ? `${M}.replace('%s', colorScheme)` : '""'});`))
  } else v !== ".%s" && (h += `${p}.setAttribute('${v}', colorScheme);`)
  return E.jsx(
    "script",
    {
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? m : "",
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${s}') || '${o}';
  const dark = localStorage.getItem('${c}-dark') || '${i}';
  const light = localStorage.getItem('${c}-light') || '${l}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${h}
  }
} catch(e){}})();`,
      },
    },
    "mui-color-scheme-init"
  )
}
function $C() {}
const UC = ({ key: n, storageWindow: o }) => (
  !o && typeof window < "u" && (o = window),
  {
    get(l) {
      if (typeof window > "u") return
      if (!o) return l
      let i
      try {
        i = o.localStorage.getItem(n)
      } catch {}
      return i || l
    },
    set: (l) => {
      if (o)
        try {
          o.localStorage.setItem(n, l)
        } catch {}
    },
    subscribe: (l) => {
      if (!o) return $C
      const i = (s) => {
        const c = s.newValue
        s.key === n && l(c)
      }
      return (
        o.addEventListener("storage", i),
        () => {
          o.removeEventListener("storage", i)
        }
      )
    },
  }
)
function nd() {}
function e0(n) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && n === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}
function Ov(n, o) {
  if (n.mode === "light" || (n.mode === "system" && n.systemMode === "light")) return o("light")
  if (n.mode === "dark" || (n.mode === "system" && n.systemMode === "dark")) return o("dark")
}
function HC(n) {
  return Ov(n, (o) => {
    if (o === "light") return n.lightColorScheme
    if (o === "dark") return n.darkColorScheme
  })
}
function PC(n) {
  const {
      defaultMode: o = "light",
      defaultLightColorScheme: l,
      defaultDarkColorScheme: i,
      supportedColorSchemes: s = [],
      modeStorageKey: c = ap,
      colorSchemeStorageKey: d = op,
      storageWindow: p = typeof window > "u" ? void 0 : window,
      storageManager: m = UC,
      noSsr: h = !1,
    } = n,
    v = s.join(","),
    b = s.length > 1,
    R = y.useMemo(() => m?.({ key: c, storageWindow: p }), [m, c, p]),
    M = y.useMemo(() => m?.({ key: `${d}-light`, storageWindow: p }), [m, d, p]),
    T = y.useMemo(() => m?.({ key: `${d}-dark`, storageWindow: p }), [m, d, p]),
    [x, A] = y.useState(() => {
      const H = R?.get(o) || o,
        X = M?.get(l) || l,
        Q = T?.get(i) || i
      return { mode: H, systemMode: e0(H), lightColorScheme: X, darkColorScheme: Q }
    }),
    [w, k] = y.useState(h || !b)
  y.useEffect(() => {
    k(!0)
  }, [])
  const O = HC(x),
    N = y.useCallback(
      (H) => {
        A((X) => {
          if (H === X.mode) return X
          const Q = H ?? o
          return (R?.set(Q), { ...X, mode: Q, systemMode: e0(Q) })
        })
      },
      [R, o]
    ),
    B = y.useCallback(
      (H) => {
        H
          ? typeof H == "string"
            ? H && !v.includes(H)
              ? console.error(`\`${H}\` does not exist in \`theme.colorSchemes\`.`)
              : A((X) => {
                  const Q = { ...X }
                  return (
                    Ov(X, (te) => {
                      ;(te === "light" && (M?.set(H), (Q.lightColorScheme = H)),
                        te === "dark" && (T?.set(H), (Q.darkColorScheme = H)))
                    }),
                    Q
                  )
                })
            : A((X) => {
                const Q = { ...X },
                  te = H.light === null ? l : H.light,
                  C = H.dark === null ? i : H.dark
                return (
                  te &&
                    (v.includes(te)
                      ? ((Q.lightColorScheme = te), M?.set(te))
                      : console.error(`\`${te}\` does not exist in \`theme.colorSchemes\`.`)),
                  C &&
                    (v.includes(C)
                      ? ((Q.darkColorScheme = C), T?.set(C))
                      : console.error(`\`${C}\` does not exist in \`theme.colorSchemes\`.`)),
                  Q
                )
              })
          : A((X) => (M?.set(l), T?.set(i), { ...X, lightColorScheme: l, darkColorScheme: i }))
      },
      [v, M, T, l, i]
    ),
    _ = y.useCallback(
      (H) => {
        x.mode === "system" &&
          A((X) => {
            const Q = H?.matches ? "dark" : "light"
            return X.systemMode === Q ? X : { ...X, systemMode: Q }
          })
      },
      [x.mode]
    ),
    U = y.useRef(_)
  return (
    (U.current = _),
    y.useEffect(() => {
      if (typeof window.matchMedia != "function" || !b) return
      const H = (...Q) => U.current(...Q),
        X = window.matchMedia("(prefers-color-scheme: dark)")
      return (
        X.addListener(H),
        H(X),
        () => {
          X.removeListener(H)
        }
      )
    }, [b]),
    y.useEffect(() => {
      if (b) {
        const H =
            R?.subscribe((te) => {
              ;(!te || ["light", "dark", "system"].includes(te)) && N(te || o)
            }) || nd,
          X =
            M?.subscribe((te) => {
              ;(!te || v.match(te)) && B({ light: te })
            }) || nd,
          Q =
            T?.subscribe((te) => {
              ;(!te || v.match(te)) && B({ dark: te })
            }) || nd
        return () => {
          ;(H(), X(), Q())
        }
      }
    }, [B, N, v, o, p, b, R, M, T]),
    {
      ...x,
      mode: w ? x.mode : void 0,
      systemMode: w ? x.systemMode : void 0,
      colorScheme: w ? O : void 0,
      setMode: N,
      setColorScheme: B,
    }
  )
}
const IC =
  "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
function qC(n) {
  const {
      themeId: o,
      theme: l = {},
      modeStorageKey: i = ap,
      colorSchemeStorageKey: s = op,
      disableTransitionOnChange: c = !1,
      defaultColorScheme: d,
      resolveTheme: p,
    } = n,
    m = {
      allColorSchemes: [],
      colorScheme: void 0,
      darkColorScheme: void 0,
      lightColorScheme: void 0,
      mode: void 0,
      setColorScheme: () => {},
      setMode: () => {},
      systemMode: void 0,
    },
    h = y.createContext(void 0),
    v = () => y.useContext(h) || m,
    b = {},
    R = {}
  function M(w) {
    const {
        children: k,
        theme: O,
        modeStorageKey: N = i,
        colorSchemeStorageKey: B = s,
        disableTransitionOnChange: _ = c,
        storageManager: U,
        storageWindow: H = typeof window > "u" ? void 0 : window,
        documentNode: X = typeof document > "u" ? void 0 : document,
        colorSchemeNode: Q = typeof document > "u" ? void 0 : document.documentElement,
        disableNestedContext: te = !1,
        disableStyleSheetGeneration: C = !1,
        defaultMode: W = "system",
        forceThemeRerender: G = !1,
        noSsr: Y,
      } = w,
      z = y.useRef(!1),
      F = np(),
      re = y.useContext(h),
      ne = !!re && !te,
      fe = y.useMemo(() => O || (typeof l == "function" ? l() : l), [O]),
      D = fe[o],
      q = D || fe,
      { colorSchemes: ae = b, components: se = R, cssVarPrefix: ue } = q,
      le = Object.keys(ae)
        .filter((yt) => !!ae[yt])
        .join(","),
      de = y.useMemo(() => le.split(","), [le]),
      Be = typeof d == "string" ? d : d.light,
      Se = typeof d == "string" ? d : d.dark,
      be = ae[Be] && ae[Se] ? W : ae[q.defaultColorScheme]?.palette?.mode || q.palette?.mode,
      {
        mode: ze,
        setMode: $e,
        systemMode: pt,
        lightColorScheme: Ee,
        darkColorScheme: me,
        colorScheme: Ze,
        setColorScheme: Ve,
      } = PC({
        supportedColorSchemes: de,
        defaultLightColorScheme: Be,
        defaultDarkColorScheme: Se,
        modeStorageKey: N,
        colorSchemeStorageKey: B,
        defaultMode: be,
        storageManager: U,
        storageWindow: H,
        noSsr: Y,
      })
    let Ue = ze,
      Xe = Ze
    ne && ((Ue = re.mode), (Xe = re.colorScheme))
    let St = Xe || q.defaultColorScheme
    q.vars && !G && (St = q.defaultColorScheme)
    const ut = y.useMemo(() => {
        const yt = q.generateThemeVars?.() || q.vars,
          Ge = { ...q, components: se, colorSchemes: ae, cssVarPrefix: ue, vars: yt }
        if ((typeof Ge.generateSpacing == "function" && (Ge.spacing = Ge.generateSpacing()), St)) {
          const Ct = ae[St]
          Ct &&
            typeof Ct == "object" &&
            Object.keys(Ct).forEach((_t) => {
              Ct[_t] && typeof Ct[_t] == "object"
                ? (Ge[_t] = { ...Ge[_t], ...Ct[_t] })
                : (Ge[_t] = Ct[_t])
            })
        }
        return p ? p(Ge) : Ge
      }, [q, St, se, ae, ue]),
      ye = q.colorSchemeSelector
    ;(Gn(() => {
      if (Xe && Q && ye && ye !== "media") {
        const yt = ye
        let Ge = ye
        if (
          (yt === "class" && (Ge = ".%s"),
          yt === "data" && (Ge = "[data-%s]"),
          yt?.startsWith("data-") && !yt.includes("%s") && (Ge = `[${yt}="%s"]`),
          Ge.startsWith("."))
        )
          (Q.classList.remove(...de.map((Ct) => Ge.substring(1).replace("%s", Ct))),
            Q.classList.add(Ge.substring(1).replace("%s", Xe)))
        else {
          const Ct = Ge.replace("%s", Xe).match(/\[([^\]]+)\]/)
          if (Ct) {
            const [_t, fn] = Ct[1].split("=")
            ;(fn ||
              de.forEach((ct) => {
                Q.removeAttribute(_t.replace(Xe, ct))
              }),
              Q.setAttribute(_t, fn ? fn.replace(/"|'/g, "") : ""))
          } else Q.setAttribute(Ge, Xe)
        }
      }
    }, [Xe, ye, Q, de]),
      y.useEffect(() => {
        let yt
        if (_ && z.current && X) {
          const Ge = X.createElement("style")
          ;(Ge.appendChild(X.createTextNode(IC)),
            X.head.appendChild(Ge),
            window.getComputedStyle(X.body),
            (yt = setTimeout(() => {
              X.head.removeChild(Ge)
            }, 1)))
        }
        return () => {
          clearTimeout(yt)
        }
      }, [Xe, _, X]),
      y.useEffect(
        () => (
          (z.current = !0),
          () => {
            z.current = !1
          }
        ),
        []
      ))
    const _n = y.useMemo(
      () => ({
        allColorSchemes: de,
        colorScheme: Xe,
        darkColorScheme: me,
        lightColorScheme: Ee,
        mode: Ue,
        setColorScheme: Ve,
        setMode: $e,
        systemMode: pt,
      }),
      [de, Xe, me, Ee, Ue, Ve, $e, pt, ut.colorSchemeSelector]
    )
    let He = !0
    ;(C || q.cssVariables === !1 || (ne && F?.cssVarPrefix === ue)) && (He = !1)
    const ua = E.jsxs(y.Fragment, {
      children: [
        E.jsx(zv, { themeId: D ? o : void 0, theme: ut, children: k }),
        He && E.jsx(cv, { styles: ut.generateStyleSheets?.() || [] }),
      ],
    })
    return ne ? ua : E.jsx(h.Provider, { value: _n, children: ua })
  }
  const T = typeof d == "string" ? d : d.light,
    x = typeof d == "string" ? d : d.dark
  return {
    CssVarsProvider: M,
    useColorScheme: v,
    getInitColorSchemeScript: (w) =>
      LC({
        colorSchemeStorageKey: s,
        defaultLightColorScheme: T,
        defaultDarkColorScheme: x,
        modeStorageKey: i,
        ...w,
      }),
  }
}
function VC(n = "") {
  function o(...i) {
    if (!i.length) return ""
    const s = i[0]
    return typeof s == "string" &&
      !s.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${n ? `${n}-` : ""}${s}${o(...i.slice(1))})`
      : `, ${s}`
  }
  return (i, ...s) => `var(--${n ? `${n}-` : ""}${i}${o(...s)})`
}
const t0 = (n, o, l, i = []) => {
    let s = n
    o.forEach((c, d) => {
      d === o.length - 1
        ? Array.isArray(s)
          ? (s[Number(c)] = l)
          : s && typeof s == "object" && (s[c] = l)
        : s && typeof s == "object" && (s[c] || (s[c] = i.includes(c) ? [] : {}), (s = s[c]))
    })
  },
  GC = (n, o, l) => {
    function i(s, c = [], d = []) {
      Object.entries(s).forEach(([p, m]) => {
        ;(!l || (l && !l([...c, p]))) &&
          m != null &&
          (typeof m == "object" && Object.keys(m).length > 0
            ? i(m, [...c, p], Array.isArray(m) ? [...d, p] : d)
            : o([...c, p], m, d))
      })
    }
    i(n)
  },
  YC = (n, o) =>
    typeof o == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((i) => n.includes(i)) ||
        n[n.length - 1].toLowerCase().includes("opacity")
        ? o
        : `${o}px`
      : o
function ad(n, o) {
  const { prefix: l, shouldSkipGeneratingVar: i } = o || {},
    s = {},
    c = {},
    d = {}
  return (
    GC(
      n,
      (p, m, h) => {
        if ((typeof m == "string" || typeof m == "number") && (!i || !i(p, m))) {
          const v = `--${l ? `${l}-` : ""}${p.join("-")}`,
            b = YC(p, m)
          ;(Object.assign(s, { [v]: b }), t0(c, p, `var(${v})`, h), t0(d, p, `var(${v}, ${b})`, h))
        }
      },
      (p) => p[0] === "vars"
    ),
    { css: s, vars: c, varsWithDefaults: d }
  )
}
function FC(n, o = {}) {
  const {
      getSelector: l = w,
      disableCssColorScheme: i,
      colorSchemeSelector: s,
      enableContrastVars: c,
    } = o,
    { colorSchemes: d = {}, components: p, defaultColorScheme: m = "light", ...h } = n,
    { vars: v, css: b, varsWithDefaults: R } = ad(h, o)
  let M = R
  const T = {},
    { [m]: x, ...A } = d
  if (
    (Object.entries(A || {}).forEach(([N, B]) => {
      const { vars: _, css: U, varsWithDefaults: H } = ad(B, o)
      ;((M = It(M, H)), (T[N] = { css: U, vars: _ }))
    }),
    x)
  ) {
    const { css: N, vars: B, varsWithDefaults: _ } = ad(x, o)
    ;((M = It(M, _)), (T[m] = { css: N, vars: B }))
  }
  function w(N, B) {
    let _ = s
    if (
      (s === "class" && (_ = ".%s"),
      s === "data" && (_ = "[data-%s]"),
      s?.startsWith("data-") && !s.includes("%s") && (_ = `[${s}="%s"]`),
      N)
    ) {
      if (_ === "media")
        return n.defaultColorScheme === N
          ? ":root"
          : { [`@media (prefers-color-scheme: ${d[N]?.palette?.mode || N})`]: { ":root": B } }
      if (_)
        return n.defaultColorScheme === N
          ? `:root, ${_.replace("%s", String(N))}`
          : _.replace("%s", String(N))
    }
    return ":root"
  }
  return {
    vars: M,
    generateThemeVars: () => {
      let N = { ...v }
      return (
        Object.entries(T).forEach(([, { vars: B }]) => {
          N = It(N, B)
        }),
        N
      )
    },
    generateStyleSheets: () => {
      const N = [],
        B = n.defaultColorScheme || "light"
      function _(X, Q) {
        Object.keys(Q).length && N.push(typeof X == "string" ? { [X]: { ...Q } } : X)
      }
      _(l(void 0, { ...b }), b)
      const { [B]: U, ...H } = T
      if (U) {
        const { css: X } = U,
          Q = d[B]?.palette?.mode,
          te = !i && Q ? { colorScheme: Q, ...X } : { ...X }
        _(l(B, { ...te }), te)
      }
      return (
        Object.entries(H).forEach(([X, { css: Q }]) => {
          const te = d[X]?.palette?.mode,
            C = !i && te ? { colorScheme: te, ...Q } : { ...Q }
          _(l(X, { ...C }), C)
        }),
        c &&
          N.push({
            ":root": {
              "--__l-threshold": "0.7",
              "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
              "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)",
            },
          }),
        N
      )
    },
  }
}
function XC(n) {
  return function (l) {
    return n === "media"
      ? `@media (prefers-color-scheme: ${l})`
      : n
        ? n.startsWith("data-") && !n.includes("%s")
          ? `[${n}="${l}"] &`
          : n === "class"
            ? `.${l} &`
            : n === "data"
              ? `[data-${l}] &`
              : `${n.replace("%s", l)} &`
        : "&"
  }
}
function Me(n, o, l = void 0) {
  const i = {}
  for (const s in n) {
    const c = n[s]
    let d = "",
      p = !0
    for (let m = 0; m < c.length; m += 1) {
      const h = c[m]
      h && ((d += (p === !0 ? "" : " ") + o(h)), (p = !1), l && l[h] && (d += " " + l[h]))
    }
    i[s] = d
  }
  return i
}
const KC = fi(),
  WC = Ev("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [
        o.root,
        o[`maxWidth${ie(String(l.maxWidth))}`],
        l.fixed && o.fixed,
        l.disableGutters && o.disableGutters,
      ]
    },
  }),
  QC = (n) => Tv({ props: n, name: "MuiContainer", defaultTheme: KC }),
  ZC = (n, o) => {
    const l = (m) => Te(o, m),
      { classes: i, fixed: s, disableGutters: c, maxWidth: d } = n,
      p = { root: ["root", d && `maxWidth${ie(String(d))}`, s && "fixed", c && "disableGutters"] }
    return Me(p, l, i)
  }
function JC(n = {}) {
  const {
      createStyledComponent: o = WC,
      useThemeProps: l = QC,
      componentName: i = "MuiContainer",
    } = n,
    s = o(
      ({ theme: d, ownerState: p }) => ({
        width: "100%",
        marginLeft: "auto",
        boxSizing: "border-box",
        marginRight: "auto",
        ...(!p.disableGutters && {
          paddingLeft: d.spacing(2),
          paddingRight: d.spacing(2),
          [d.breakpoints.up("sm")]: { paddingLeft: d.spacing(3), paddingRight: d.spacing(3) },
        }),
      }),
      ({ theme: d, ownerState: p }) =>
        p.fixed &&
        Object.keys(d.breakpoints.values).reduce((m, h) => {
          const v = h,
            b = d.breakpoints.values[v]
          return (
            b !== 0 && (m[d.breakpoints.up(v)] = { maxWidth: `${b}${d.breakpoints.unit}` }),
            m
          )
        }, {}),
      ({ theme: d, ownerState: p }) => ({
        ...(p.maxWidth === "xs" && {
          [d.breakpoints.up("xs")]: { maxWidth: Math.max(d.breakpoints.values.xs, 444) },
        }),
        ...(p.maxWidth &&
          p.maxWidth !== "xs" && {
            [d.breakpoints.up(p.maxWidth)]: {
              maxWidth: `${d.breakpoints.values[p.maxWidth]}${d.breakpoints.unit}`,
            },
          }),
      })
    )
  return y.forwardRef(function (p, m) {
    const h = l(p),
      {
        className: v,
        component: b = "div",
        disableGutters: R = !1,
        fixed: M = !1,
        maxWidth: T = "lg",
        classes: x,
        ...A
      } = h,
      w = { ...h, component: b, disableGutters: R, fixed: M, maxWidth: T },
      k = ZC(w, i)
    return E.jsx(s, { as: b, ownerState: w, className: pe(k.root, v), ref: m, ...A })
  })
}
function Vs(n, o) {
  return y.isValidElement(n) && o.indexOf(n.type.muiName ?? n.type?._payload?.value?.muiName) !== -1
}
const eE = fi(),
  tE = Ev("div", { name: "MuiStack", slot: "Root" })
function nE(n) {
  return Tv({ props: n, name: "MuiStack", defaultTheme: eE })
}
function aE(n, o) {
  const l = y.Children.toArray(n).filter(Boolean)
  return l.reduce(
    (i, s, c) => (
      i.push(s),
      c < l.length - 1 && i.push(y.cloneElement(o, { key: `separator-${c}` })),
      i
    ),
    []
  )
}
const oE = (n) =>
    ({ row: "Left", "row-reverse": "Right", column: "Top", "column-reverse": "Bottom" })[n],
  rE = ({ ownerState: n, theme: o }) => {
    let l = {
      display: "flex",
      flexDirection: "column",
      ...Vn({ theme: o }, Jf({ values: n.direction, breakpoints: o.breakpoints.values }), (i) => ({
        flexDirection: i,
      })),
    }
    if (n.spacing) {
      const i = cu(o),
        s = Object.keys(o.breakpoints.values).reduce(
          (m, h) => (
            ((typeof n.spacing == "object" && n.spacing[h] != null) ||
              (typeof n.direction == "object" && n.direction[h] != null)) &&
              (m[h] = !0),
            m
          ),
          {}
        ),
        c = Jf({ values: n.direction, base: s }),
        d = Jf({ values: n.spacing, base: s })
      ;(typeof c == "object" &&
        Object.keys(c).forEach((m, h, v) => {
          if (!c[m]) {
            const R = h > 0 ? c[v[h - 1]] : "column"
            c[m] = R
          }
        }),
        (l = It(
          l,
          Vn({ theme: o }, d, (m, h) =>
            n.useFlexGap
              ? { gap: Uo(i, m) }
              : {
                  "& > :not(style):not(style)": { margin: 0 },
                  "& > :not(style) ~ :not(style)": {
                    [`margin${oE(h ? c[h] : n.direction)}`]: Uo(i, m),
                  },
                }
          )
        )))
    }
    return ((l = g2(o.breakpoints, l)), l)
  }
function lE(n = {}) {
  const { createStyledComponent: o = tE, useThemeProps: l = nE, componentName: i = "MuiStack" } = n,
    s = () => Me({ root: ["root"] }, (m) => Te(i, m), {}),
    c = o(rE)
  return y.forwardRef(function (m, h) {
    const v = l(m),
      b = ep(v),
      {
        component: R = "div",
        direction: M = "column",
        spacing: T = 0,
        divider: x,
        children: A,
        className: w,
        useFlexGap: k = !1,
        ...O
      } = b,
      N = { direction: M, spacing: T, useFlexGap: k },
      B = s()
    return E.jsx(c, {
      as: R,
      ownerState: N,
      ref: h,
      className: pe(B.root, w),
      ...O,
      children: x ? aE(A, x) : A,
    })
  })
}
function Nv() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Jl.white, default: Jl.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  }
}
const Dv = Nv()
function Bv() {
  return {
    text: {
      primary: Jl.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Jl.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  }
}
const Cd = Bv()
function n0(n, o, l, i) {
  const s = i.light || i,
    c = i.dark || i * 1.5
  n[o] ||
    (n.hasOwnProperty(l)
      ? (n[o] = n[l])
      : o === "light"
        ? (n.light = bu(n.main, s))
        : o === "dark" && (n.dark = vu(n.main, c)))
}
function a0(n, o, l, i, s) {
  const c = s.light || s,
    d = s.dark || s * 1.5
  o[l] ||
    (o.hasOwnProperty(i)
      ? (o[l] = o[i])
      : l === "light"
        ? (o.light = `color-mix(in ${n}, ${o.main}, #fff ${(c * 100).toFixed(0)}%)`)
        : l === "dark" && (o.dark = `color-mix(in ${n}, ${o.main}, #000 ${(d * 100).toFixed(0)}%)`))
}
function iE(n = "light") {
  return n === "dark"
    ? { main: Mr[200], light: Mr[50], dark: Mr[400] }
    : { main: Mr[700], light: Mr[400], dark: Mr[800] }
}
function sE(n = "light") {
  return n === "dark"
    ? { main: Rr[200], light: Rr[50], dark: Rr[400] }
    : { main: Rr[500], light: Rr[300], dark: Rr[700] }
}
function uE(n = "light") {
  return n === "dark"
    ? { main: Tr[500], light: Tr[300], dark: Tr[700] }
    : { main: Tr[700], light: Tr[400], dark: Tr[800] }
}
function cE(n = "light") {
  return n === "dark"
    ? { main: Ar[400], light: Ar[300], dark: Ar[700] }
    : { main: Ar[700], light: Ar[500], dark: Ar[900] }
}
function fE(n = "light") {
  return n === "dark"
    ? { main: wr[400], light: wr[300], dark: wr[700] }
    : { main: wr[800], light: wr[500], dark: wr[900] }
}
function dE(n = "light") {
  return n === "dark"
    ? { main: $l[400], light: $l[300], dark: $l[700] }
    : { main: "#ed6c02", light: $l[500], dark: $l[900] }
}
function pE(n) {
  return `oklch(from ${n} var(--__l) 0 h / var(--__a))`
}
function rp(n) {
  const {
      mode: o = "light",
      contrastThreshold: l = 3,
      tonalOffset: i = 0.2,
      colorSpace: s,
      ...c
    } = n,
    d = n.primary || iE(o),
    p = n.secondary || sE(o),
    m = n.error || uE(o),
    h = n.info || cE(o),
    v = n.success || fE(o),
    b = n.warning || dE(o)
  function R(A) {
    return s ? pE(A) : xC(A, Cd.text.primary) >= l ? Cd.text.primary : Dv.text.primary
  }
  const M = ({
    color: A,
    name: w,
    mainShade: k = 500,
    lightShade: O = 300,
    darkShade: N = 700,
  }) => {
    if (((A = { ...A }), !A.main && A[k] && (A.main = A[k]), !A.hasOwnProperty("main")))
      throw new Error(Na(11, w ? ` (${w})` : "", k))
    if (typeof A.main != "string")
      throw new Error(Na(12, w ? ` (${w})` : "", JSON.stringify(A.main)))
    return (
      s
        ? (a0(s, A, "light", O, i), a0(s, A, "dark", N, i))
        : (n0(A, "light", O, i), n0(A, "dark", N, i)),
      A.contrastText || (A.contrastText = R(A.main)),
      A
    )
  }
  let T
  return (
    o === "light" ? (T = Nv()) : o === "dark" && (T = Bv()),
    It(
      {
        common: { ...Jl },
        mode: o,
        primary: M({ color: d, name: "primary" }),
        secondary: M({
          color: p,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: M({ color: m, name: "error" }),
        warning: M({ color: b, name: "warning" }),
        info: M({ color: h, name: "info" }),
        success: M({ color: v, name: "success" }),
        grey: ix,
        contrastThreshold: l,
        getContrastText: R,
        augmentColor: M,
        tonalOffset: i,
        ...T,
      },
      c
    )
  )
}
function mE(n) {
  const o = {}
  return (
    Object.entries(n).forEach((i) => {
      const [s, c] = i
      typeof c == "object" &&
        (o[s] =
          `${c.fontStyle ? `${c.fontStyle} ` : ""}${c.fontVariant ? `${c.fontVariant} ` : ""}${c.fontWeight ? `${c.fontWeight} ` : ""}${c.fontStretch ? `${c.fontStretch} ` : ""}${c.fontSize || ""}${c.lineHeight ? `/${c.lineHeight} ` : ""}${c.fontFamily || ""}`)
    }),
    o
  )
}
function hE(n, o) {
  return {
    toolbar: {
      minHeight: 56,
      [n.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [n.up("sm")]: { minHeight: 64 },
    },
    ...o,
  }
}
function gE(n) {
  return Math.round(n * 1e5) / 1e5
}
const o0 = { textTransform: "uppercase" },
  r0 = '"Roboto", "Helvetica", "Arial", sans-serif'
function jv(n, o) {
  const {
      fontFamily: l = r0,
      fontSize: i = 14,
      fontWeightLight: s = 300,
      fontWeightRegular: c = 400,
      fontWeightMedium: d = 500,
      fontWeightBold: p = 700,
      htmlFontSize: m = 16,
      allVariants: h,
      pxToRem: v,
      ...b
    } = typeof o == "function" ? o(n) : o,
    R = i / 14,
    M = v || ((A) => `${(A / m) * R}rem`),
    T = (A, w, k, O, N) => ({
      fontFamily: l,
      fontWeight: A,
      fontSize: M(w),
      lineHeight: k,
      ...(l === r0 ? { letterSpacing: `${gE(O / w)}em` } : {}),
      ...N,
      ...h,
    }),
    x = {
      h1: T(s, 96, 1.167, -1.5),
      h2: T(s, 60, 1.2, -0.5),
      h3: T(c, 48, 1.167, 0),
      h4: T(c, 34, 1.235, 0.25),
      h5: T(c, 24, 1.334, 0),
      h6: T(d, 20, 1.6, 0.15),
      subtitle1: T(c, 16, 1.75, 0.15),
      subtitle2: T(d, 14, 1.57, 0.1),
      body1: T(c, 16, 1.5, 0.15),
      body2: T(c, 14, 1.43, 0.15),
      button: T(d, 14, 1.75, 0.4, o0),
      caption: T(c, 12, 1.66, 0.4),
      overline: T(c, 12, 2.66, 1, o0),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    }
  return It(
    {
      htmlFontSize: m,
      pxToRem: M,
      fontFamily: l,
      fontSize: i,
      fontWeightLight: s,
      fontWeightRegular: c,
      fontWeightMedium: d,
      fontWeightBold: p,
      ...x,
    },
    b,
    { clone: !1 }
  )
}
const yE = 0.2,
  vE = 0.14,
  bE = 0.12
function bt(...n) {
  return [
    `${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${yE})`,
    `${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${vE})`,
    `${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${bE})`,
  ].join(",")
}
const SE = [
    "none",
    bt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    bt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    bt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    bt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    bt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    bt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    bt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    bt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    bt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    bt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    bt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    bt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    bt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    bt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    bt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    bt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    bt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    bt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    bt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    bt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    bt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    bt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    bt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    bt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  xE = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  kv = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  }
function l0(n) {
  return `${Math.round(n)}ms`
}
function CE(n) {
  if (!n) return 0
  const o = n / 36
  return Math.min(Math.round((4 + 15 * o ** 0.25 + o / 5) * 10), 3e3)
}
function EE(n) {
  const o = { ...xE, ...n.easing },
    l = { ...kv, ...n.duration }
  return {
    getAutoHeightDuration: CE,
    create: (s = ["all"], c = {}) => {
      const { duration: d = l.standard, easing: p = o.easeInOut, delay: m = 0, ...h } = c
      return (Array.isArray(s) ? s : [s])
        .map(
          (v) => `${v} ${typeof d == "string" ? d : l0(d)} ${p} ${typeof m == "string" ? m : l0(m)}`
        )
        .join(",")
    },
    ...n,
    easing: o,
    duration: l,
  }
}
const TE = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
}
function RE(n) {
  return (
    oa(n) ||
    typeof n > "u" ||
    typeof n == "string" ||
    typeof n == "boolean" ||
    typeof n == "number" ||
    Array.isArray(n)
  )
}
function _v(n = {}) {
  const o = { ...n }
  function l(i) {
    const s = Object.entries(i)
    for (let c = 0; c < s.length; c++) {
      const [d, p] = s[c]
      !RE(p) || d.startsWith("unstable_") ? delete i[d] : oa(p) && ((i[d] = { ...p }), l(i[d]))
    }
  }
  return (
    l(o),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(o, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  )
}
function i0(n) {
  return typeof n == "number" ? `${(n * 100).toFixed(0)}%` : `calc((${n}) * 100%)`
}
const ME = (n) => {
  if (!Number.isNaN(+n)) return +n
  const o = n.match(/\d*\.?\d+/g)
  if (!o) return 0
  let l = 0
  for (let i = 0; i < o.length; i += 1) l += +o[i]
  return l
}
function AE(n) {
  Object.assign(n, {
    alpha(o, l) {
      const i = this || n
      return i.colorSpace
        ? `oklch(from ${o} l c h / ${typeof l == "string" ? `calc(${l})` : l})`
        : i.vars
          ? `rgba(${o.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof l == "string" ? `calc(${l})` : l})`
          : Js(o, ME(l))
    },
    lighten(o, l) {
      const i = this || n
      return i.colorSpace ? `color-mix(in ${i.colorSpace}, ${o}, #fff ${i0(l)})` : bu(o, l)
    },
    darken(o, l) {
      const i = this || n
      return i.colorSpace ? `color-mix(in ${i.colorSpace}, ${o}, #000 ${i0(l)})` : vu(o, l)
    },
  })
}
function Ed(n = {}, ...o) {
  const {
    breakpoints: l,
    mixins: i = {},
    spacing: s,
    palette: c = {},
    transitions: d = {},
    typography: p = {},
    shape: m,
    colorSpace: h,
    ...v
  } = n
  if (n.vars && n.generateThemeVars === void 0) throw new Error(Na(20))
  const b = rp({ ...c, colorSpace: h }),
    R = fi(n)
  let M = It(R, {
    mixins: hE(R.breakpoints, i),
    palette: b,
    shadows: SE.slice(),
    typography: jv(b, p),
    transitions: EE(d),
    zIndex: { ...TE },
  })
  return (
    (M = It(M, v)),
    (M = o.reduce((T, x) => It(T, x), M)),
    (M.unstable_sxConfig = { ...ci, ...v?.unstable_sxConfig }),
    (M.unstable_sx = function (x) {
      return so({ sx: x, theme: this })
    }),
    (M.toRuntimeSource = _v),
    AE(M),
    M
  )
}
function Td(n) {
  let o
  return (
    n < 1 ? (o = 5.11916 * n ** 2) : (o = 4.5 * Math.log(n + 1) + 2),
    Math.round(o * 10) / 1e3
  )
}
const wE = [...Array(25)].map((n, o) => {
  if (o === 0) return "none"
  const l = Td(o)
  return `linear-gradient(rgba(255 255 255 / ${l}), rgba(255 255 255 / ${l}))`
})
function Lv(n) {
  return {
    inputPlaceholder: n === "dark" ? 0.5 : 0.42,
    inputUnderline: n === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: n === "dark" ? 0.2 : 0.12,
    switchTrack: n === "dark" ? 0.3 : 0.38,
  }
}
function $v(n) {
  return n === "dark" ? wE : []
}
function zE(n) {
  const { palette: o = { mode: "light" }, opacity: l, overlays: i, colorSpace: s, ...c } = n,
    d = rp({ ...o, colorSpace: s })
  return { palette: d, opacity: { ...Lv(d.mode), ...l }, overlays: i || $v(d.mode), ...c }
}
function OE(n) {
  return (
    !!n[0].match(
      /(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!n[0].match(/sxConfig$/) ||
    (n[0] === "palette" && !!n[1]?.match(/(mode|contrastThreshold|tonalOffset)/))
  )
}
const NE = (n) => [
    ...[...Array(25)].map((o, l) => `--${n ? `${n}-` : ""}overlays-${l}`),
    `--${n ? `${n}-` : ""}palette-AppBar-darkBg`,
    `--${n ? `${n}-` : ""}palette-AppBar-darkColor`,
  ],
  DE = (n) => (o, l) => {
    const i = n.rootSelector || ":root",
      s = n.colorSchemeSelector
    let c = s
    if (
      (s === "class" && (c = ".%s"),
      s === "data" && (c = "[data-%s]"),
      s?.startsWith("data-") && !s.includes("%s") && (c = `[${s}="%s"]`),
      n.defaultColorScheme === o)
    ) {
      if (o === "dark") {
        const d = {}
        return (
          NE(n.cssVarPrefix).forEach((p) => {
            ;((d[p] = l[p]), delete l[p])
          }),
          c === "media"
            ? { [i]: l, "@media (prefers-color-scheme: dark)": { [i]: d } }
            : c
              ? { [c.replace("%s", o)]: d, [`${i}, ${c.replace("%s", o)}`]: l }
              : { [i]: { ...l, ...d } }
        )
      }
      if (c && c !== "media") return `${i}, ${c.replace("%s", String(o))}`
    } else if (o) {
      if (c === "media") return { [`@media (prefers-color-scheme: ${String(o)})`]: { [i]: l } }
      if (c) return c.replace("%s", String(o))
    }
    return i
  }
function BE(n, o) {
  o.forEach((l) => {
    n[l] || (n[l] = {})
  })
}
function J(n, o, l) {
  !n[o] && l && (n[o] = l)
}
function Yl(n) {
  return typeof n != "string" || !n.startsWith("hsl") ? n : Rv(n)
}
function wa(n, o) {
  ;`${o}Channel` in n || (n[`${o}Channel`] = Gl(Yl(n[o])))
}
function jE(n) {
  return typeof n == "number"
    ? `${n}px`
    : typeof n == "string" || typeof n == "function" || Array.isArray(n)
      ? n
      : "8px"
}
const ea = (n) => {
    try {
      return n()
    } catch {}
  },
  kE = (n = "mui") => VC(n)
function od(n, o, l, i, s) {
  if (!l) return
  l = l === !0 ? {} : l
  const c = s === "dark" ? "dark" : "light"
  if (!i) {
    o[s] = zE({ ...l, palette: { mode: c, ...l?.palette }, colorSpace: n })
    return
  }
  const { palette: d, ...p } = Ed({ ...i, palette: { mode: c, ...l?.palette }, colorSpace: n })
  return (
    (o[s] = {
      ...l,
      palette: d,
      opacity: { ...Lv(c), ...l?.opacity },
      overlays: l?.overlays || $v(c),
    }),
    p
  )
}
function _E(n = {}, ...o) {
  const {
      colorSchemes: l = { light: !0 },
      defaultColorScheme: i,
      disableCssColorScheme: s = !1,
      cssVarPrefix: c = "mui",
      nativeColor: d = !1,
      shouldSkipGeneratingVar: p = OE,
      colorSchemeSelector: m = l.light && l.dark ? "media" : void 0,
      rootSelector: h = ":root",
      ...v
    } = n,
    b = Object.keys(l)[0],
    R = i || (l.light && b !== "light" ? "light" : b),
    M = kE(c),
    { [R]: T, light: x, dark: A, ...w } = l,
    k = { ...w }
  let O = T
  if ((((R === "dark" && !("dark" in l)) || (R === "light" && !("light" in l))) && (O = !0), !O))
    throw new Error(Na(21, R))
  let N
  d && (N = "oklch")
  const B = od(N, k, O, v, R)
  ;(x && !k.light && od(N, k, x, void 0, "light"), A && !k.dark && od(N, k, A, void 0, "dark"))
  let _ = {
    defaultColorScheme: R,
    ...B,
    cssVarPrefix: c,
    colorSchemeSelector: m,
    rootSelector: h,
    getCssVar: M,
    colorSchemes: k,
    font: { ...mE(B.typography), ...B.font },
    spacing: jE(v.spacing),
  }
  ;(Object.keys(_.colorSchemes).forEach((te) => {
    const C = _.colorSchemes[te].palette,
      W = (Y) => {
        const z = Y.split("-"),
          F = z[1],
          re = z[2]
        return M(Y, C[F][re])
      }
    ;(C.mode === "light" &&
      (J(C.common, "background", "#fff"), J(C.common, "onBackground", "#000")),
      C.mode === "dark" && (J(C.common, "background", "#000"), J(C.common, "onBackground", "#fff")))
    function G(Y, z, F) {
      if (N) {
        let re
        return (
          Y === No && (re = `transparent ${((1 - F) * 100).toFixed(0)}%`),
          Y === nt && (re = `#000 ${(F * 100).toFixed(0)}%`),
          Y === at && (re = `#fff ${(F * 100).toFixed(0)}%`),
          `color-mix(in ${N}, ${z}, ${re})`
        )
      }
      return Y(z, F)
    }
    if (
      (BE(C, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      C.mode === "light")
    ) {
      ;(J(C.Alert, "errorColor", G(nt, C.error.light, 0.6)),
        J(C.Alert, "infoColor", G(nt, C.info.light, 0.6)),
        J(C.Alert, "successColor", G(nt, C.success.light, 0.6)),
        J(C.Alert, "warningColor", G(nt, C.warning.light, 0.6)),
        J(C.Alert, "errorFilledBg", W("palette-error-main")),
        J(C.Alert, "infoFilledBg", W("palette-info-main")),
        J(C.Alert, "successFilledBg", W("palette-success-main")),
        J(C.Alert, "warningFilledBg", W("palette-warning-main")),
        J(
          C.Alert,
          "errorFilledColor",
          ea(() => C.getContrastText(C.error.main))
        ),
        J(
          C.Alert,
          "infoFilledColor",
          ea(() => C.getContrastText(C.info.main))
        ),
        J(
          C.Alert,
          "successFilledColor",
          ea(() => C.getContrastText(C.success.main))
        ),
        J(
          C.Alert,
          "warningFilledColor",
          ea(() => C.getContrastText(C.warning.main))
        ),
        J(C.Alert, "errorStandardBg", G(at, C.error.light, 0.9)),
        J(C.Alert, "infoStandardBg", G(at, C.info.light, 0.9)),
        J(C.Alert, "successStandardBg", G(at, C.success.light, 0.9)),
        J(C.Alert, "warningStandardBg", G(at, C.warning.light, 0.9)),
        J(C.Alert, "errorIconColor", W("palette-error-main")),
        J(C.Alert, "infoIconColor", W("palette-info-main")),
        J(C.Alert, "successIconColor", W("palette-success-main")),
        J(C.Alert, "warningIconColor", W("palette-warning-main")),
        J(C.AppBar, "defaultBg", W("palette-grey-100")),
        J(C.Avatar, "defaultBg", W("palette-grey-400")),
        J(C.Button, "inheritContainedBg", W("palette-grey-300")),
        J(C.Button, "inheritContainedHoverBg", W("palette-grey-A100")),
        J(C.Chip, "defaultBorder", W("palette-grey-400")),
        J(C.Chip, "defaultAvatarColor", W("palette-grey-700")),
        J(C.Chip, "defaultIconColor", W("palette-grey-700")),
        J(C.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        J(C.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        J(C.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        J(C.LinearProgress, "primaryBg", G(at, C.primary.main, 0.62)),
        J(C.LinearProgress, "secondaryBg", G(at, C.secondary.main, 0.62)),
        J(C.LinearProgress, "errorBg", G(at, C.error.main, 0.62)),
        J(C.LinearProgress, "infoBg", G(at, C.info.main, 0.62)),
        J(C.LinearProgress, "successBg", G(at, C.success.main, 0.62)),
        J(C.LinearProgress, "warningBg", G(at, C.warning.main, 0.62)),
        J(
          C.Skeleton,
          "bg",
          N ? G(No, C.text.primary, 0.11) : `rgba(${W("palette-text-primaryChannel")} / 0.11)`
        ),
        J(C.Slider, "primaryTrack", G(at, C.primary.main, 0.62)),
        J(C.Slider, "secondaryTrack", G(at, C.secondary.main, 0.62)),
        J(C.Slider, "errorTrack", G(at, C.error.main, 0.62)),
        J(C.Slider, "infoTrack", G(at, C.info.main, 0.62)),
        J(C.Slider, "successTrack", G(at, C.success.main, 0.62)),
        J(C.Slider, "warningTrack", G(at, C.warning.main, 0.62)))
      const Y = N ? G(nt, C.background.default, 0.6825) : Ds(C.background.default, 0.8)
      ;(J(C.SnackbarContent, "bg", Y),
        J(
          C.SnackbarContent,
          "color",
          ea(() => (N ? Cd.text.primary : C.getContrastText(Y)))
        ),
        J(C.SpeedDialAction, "fabHoverBg", Ds(C.background.paper, 0.15)),
        J(C.StepConnector, "border", W("palette-grey-400")),
        J(C.StepContent, "border", W("palette-grey-400")),
        J(C.Switch, "defaultColor", W("palette-common-white")),
        J(C.Switch, "defaultDisabledColor", W("palette-grey-100")),
        J(C.Switch, "primaryDisabledColor", G(at, C.primary.main, 0.62)),
        J(C.Switch, "secondaryDisabledColor", G(at, C.secondary.main, 0.62)),
        J(C.Switch, "errorDisabledColor", G(at, C.error.main, 0.62)),
        J(C.Switch, "infoDisabledColor", G(at, C.info.main, 0.62)),
        J(C.Switch, "successDisabledColor", G(at, C.success.main, 0.62)),
        J(C.Switch, "warningDisabledColor", G(at, C.warning.main, 0.62)),
        J(C.TableCell, "border", G(at, G(No, C.divider, 1), 0.88)),
        J(C.Tooltip, "bg", G(No, C.grey[700], 0.92)))
    }
    if (C.mode === "dark") {
      ;(J(C.Alert, "errorColor", G(at, C.error.light, 0.6)),
        J(C.Alert, "infoColor", G(at, C.info.light, 0.6)),
        J(C.Alert, "successColor", G(at, C.success.light, 0.6)),
        J(C.Alert, "warningColor", G(at, C.warning.light, 0.6)),
        J(C.Alert, "errorFilledBg", W("palette-error-dark")),
        J(C.Alert, "infoFilledBg", W("palette-info-dark")),
        J(C.Alert, "successFilledBg", W("palette-success-dark")),
        J(C.Alert, "warningFilledBg", W("palette-warning-dark")),
        J(
          C.Alert,
          "errorFilledColor",
          ea(() => C.getContrastText(C.error.dark))
        ),
        J(
          C.Alert,
          "infoFilledColor",
          ea(() => C.getContrastText(C.info.dark))
        ),
        J(
          C.Alert,
          "successFilledColor",
          ea(() => C.getContrastText(C.success.dark))
        ),
        J(
          C.Alert,
          "warningFilledColor",
          ea(() => C.getContrastText(C.warning.dark))
        ),
        J(C.Alert, "errorStandardBg", G(nt, C.error.light, 0.9)),
        J(C.Alert, "infoStandardBg", G(nt, C.info.light, 0.9)),
        J(C.Alert, "successStandardBg", G(nt, C.success.light, 0.9)),
        J(C.Alert, "warningStandardBg", G(nt, C.warning.light, 0.9)),
        J(C.Alert, "errorIconColor", W("palette-error-main")),
        J(C.Alert, "infoIconColor", W("palette-info-main")),
        J(C.Alert, "successIconColor", W("palette-success-main")),
        J(C.Alert, "warningIconColor", W("palette-warning-main")),
        J(C.AppBar, "defaultBg", W("palette-grey-900")),
        J(C.AppBar, "darkBg", W("palette-background-paper")),
        J(C.AppBar, "darkColor", W("palette-text-primary")),
        J(C.Avatar, "defaultBg", W("palette-grey-600")),
        J(C.Button, "inheritContainedBg", W("palette-grey-800")),
        J(C.Button, "inheritContainedHoverBg", W("palette-grey-700")),
        J(C.Chip, "defaultBorder", W("palette-grey-700")),
        J(C.Chip, "defaultAvatarColor", W("palette-grey-300")),
        J(C.Chip, "defaultIconColor", W("palette-grey-300")),
        J(C.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        J(C.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        J(C.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        J(C.LinearProgress, "primaryBg", G(nt, C.primary.main, 0.5)),
        J(C.LinearProgress, "secondaryBg", G(nt, C.secondary.main, 0.5)),
        J(C.LinearProgress, "errorBg", G(nt, C.error.main, 0.5)),
        J(C.LinearProgress, "infoBg", G(nt, C.info.main, 0.5)),
        J(C.LinearProgress, "successBg", G(nt, C.success.main, 0.5)),
        J(C.LinearProgress, "warningBg", G(nt, C.warning.main, 0.5)),
        J(
          C.Skeleton,
          "bg",
          N ? G(No, C.text.primary, 0.13) : `rgba(${W("palette-text-primaryChannel")} / 0.13)`
        ),
        J(C.Slider, "primaryTrack", G(nt, C.primary.main, 0.5)),
        J(C.Slider, "secondaryTrack", G(nt, C.secondary.main, 0.5)),
        J(C.Slider, "errorTrack", G(nt, C.error.main, 0.5)),
        J(C.Slider, "infoTrack", G(nt, C.info.main, 0.5)),
        J(C.Slider, "successTrack", G(nt, C.success.main, 0.5)),
        J(C.Slider, "warningTrack", G(nt, C.warning.main, 0.5)))
      const Y = N ? G(at, C.background.default, 0.985) : Ds(C.background.default, 0.98)
      ;(J(C.SnackbarContent, "bg", Y),
        J(
          C.SnackbarContent,
          "color",
          ea(() => (N ? Dv.text.primary : C.getContrastText(Y)))
        ),
        J(C.SpeedDialAction, "fabHoverBg", Ds(C.background.paper, 0.15)),
        J(C.StepConnector, "border", W("palette-grey-600")),
        J(C.StepContent, "border", W("palette-grey-600")),
        J(C.Switch, "defaultColor", W("palette-grey-300")),
        J(C.Switch, "defaultDisabledColor", W("palette-grey-600")),
        J(C.Switch, "primaryDisabledColor", G(nt, C.primary.main, 0.55)),
        J(C.Switch, "secondaryDisabledColor", G(nt, C.secondary.main, 0.55)),
        J(C.Switch, "errorDisabledColor", G(nt, C.error.main, 0.55)),
        J(C.Switch, "infoDisabledColor", G(nt, C.info.main, 0.55)),
        J(C.Switch, "successDisabledColor", G(nt, C.success.main, 0.55)),
        J(C.Switch, "warningDisabledColor", G(nt, C.warning.main, 0.55)),
        J(C.TableCell, "border", G(nt, G(No, C.divider, 1), 0.68)),
        J(C.Tooltip, "bg", G(No, C.grey[700], 0.92)))
    }
    ;(wa(C.background, "default"),
      wa(C.background, "paper"),
      wa(C.common, "background"),
      wa(C.common, "onBackground"),
      wa(C, "divider"),
      Object.keys(C).forEach((Y) => {
        const z = C[Y]
        Y !== "tonalOffset" &&
          z &&
          typeof z == "object" &&
          (z.main && J(C[Y], "mainChannel", Gl(Yl(z.main))),
          z.light && J(C[Y], "lightChannel", Gl(Yl(z.light))),
          z.dark && J(C[Y], "darkChannel", Gl(Yl(z.dark))),
          z.contrastText && J(C[Y], "contrastTextChannel", Gl(Yl(z.contrastText))),
          Y === "text" && (wa(C[Y], "primary"), wa(C[Y], "secondary")),
          Y === "action" && (z.active && wa(C[Y], "active"), z.selected && wa(C[Y], "selected")))
      }))
  }),
    (_ = o.reduce((te, C) => It(te, C), _)))
  const U = {
      prefix: c,
      disableCssColorScheme: s,
      shouldSkipGeneratingVar: p,
      getSelector: DE(_),
      enableContrastVars: d,
    },
    { vars: H, generateThemeVars: X, generateStyleSheets: Q } = FC(_, U)
  return (
    (_.vars = H),
    Object.entries(_.colorSchemes[_.defaultColorScheme]).forEach(([te, C]) => {
      _[te] = C
    }),
    (_.generateThemeVars = X),
    (_.generateStyleSheets = Q),
    (_.generateSpacing = function () {
      return gv(v.spacing, cu(this))
    }),
    (_.getColorSchemeSelector = XC(m)),
    (_.spacing = _.generateSpacing()),
    (_.shouldSkipGeneratingVar = p),
    (_.unstable_sxConfig = { ...ci, ...v?.unstable_sxConfig }),
    (_.unstable_sx = function (C) {
      return so({ sx: C, theme: this })
    }),
    (_.toRuntimeSource = _v),
    _
  )
}
function s0(n, o, l) {
  n.colorSchemes &&
    l &&
    (n.colorSchemes[o] = {
      ...(l !== !0 && l),
      palette: rp({ ...(l === !0 ? {} : l.palette), mode: o }),
    })
}
function Su(n = {}, ...o) {
  const {
      palette: l,
      cssVariables: i = !1,
      colorSchemes: s = l ? void 0 : { light: !0 },
      defaultColorScheme: c = l?.mode,
      ...d
    } = n,
    p = c || "light",
    m = s?.[p],
    h = { ...s, ...(l ? { [p]: { ...(typeof m != "boolean" && m), palette: l } } : void 0) }
  if (i === !1) {
    if (!("colorSchemes" in n)) return Ed(n, ...o)
    let v = l
    "palette" in n ||
      (h[p] && (h[p] !== !0 ? (v = h[p].palette) : p === "dark" && (v = { mode: "dark" })))
    const b = Ed({ ...n, palette: v }, ...o)
    return (
      (b.defaultColorScheme = p),
      (b.colorSchemes = h),
      b.palette.mode === "light" &&
        ((b.colorSchemes.light = { ...(h.light !== !0 && h.light), palette: b.palette }),
        s0(b, "dark", h.dark)),
      b.palette.mode === "dark" &&
        ((b.colorSchemes.dark = { ...(h.dark !== !0 && h.dark), palette: b.palette }),
        s0(b, "light", h.light)),
      b
    )
  }
  return (
    !l && !("light" in h) && p === "light" && (h.light = !0),
    _E({ ...d, colorSchemes: h, defaultColorScheme: p, ...(typeof i != "boolean" && i) }, ...o)
  )
}
const lp = Su()
function di() {
  const n = gu(lp)
  return n[la] || n
}
function Uv(n) {
  return n !== "ownerState" && n !== "theme" && n !== "sx" && n !== "as"
}
const tn = (n) => Uv(n) && n !== "classes",
  ce = Cv({ themeId: la, defaultTheme: lp, rootShouldForwardProp: tn })
function LE({ theme: n, ...o }) {
  const l = la in n ? n[la] : void 0
  return E.jsx(zv, { ...o, themeId: l ? la : void 0, theme: l || n })
}
const Bs = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode",
  },
  { CssVarsProvider: $E } = qC({
    themeId: la,
    theme: () => Su({ cssVariables: !0 }),
    colorSchemeStorageKey: Bs.colorSchemeStorageKey,
    modeStorageKey: Bs.modeStorageKey,
    defaultColorScheme: { light: Bs.defaultLightColorScheme, dark: Bs.defaultDarkColorScheme },
    resolveTheme: (n) => {
      const o = { ...n, typography: jv(n.palette, n.typography) }
      return (
        (o.unstable_sx = function (i) {
          return so({ sx: i, theme: this })
        }),
        o
      )
    },
  }),
  UE = $E
function HE({ theme: n, ...o }) {
  const l = y.useMemo(() => {
    if (typeof n == "function") return n
    const i = la in n ? n[la] : n
    return "colorSchemes" in i ? null : "vars" in i ? n : { ...n, vars: null }
  }, [n])
  return l ? E.jsx(LE, { theme: l, ...o }) : E.jsx(UE, { theme: n, ...o })
}
function u0(...n) {
  return n.reduce(
    (o, l) =>
      l == null
        ? o
        : function (...s) {
            ;(o.apply(this, s), l.apply(this, s))
          },
    () => {}
  )
}
function PE(n) {
  return E.jsx(yv, { ...n, defaultTheme: lp, themeId: la })
}
function ip(n) {
  return function (l) {
    return E.jsx(PE, { styles: typeof n == "function" ? (i) => n({ theme: i, ...l }) : n })
  }
}
function IE() {
  return ep
}
const De = kC
function Ae(n) {
  return NC(n)
}
function qE(n) {
  return Te("MuiSvgIcon", n)
}
Re("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
])
const VE = (n) => {
    const { color: o, fontSize: l, classes: i } = n,
      s = { root: ["root", o !== "inherit" && `color${ie(o)}`, `fontSize${ie(l)}`] }
    return Me(s, qE, i)
  },
  GE = ce("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [
        o.root,
        l.color !== "inherit" && o[`color${ie(l.color)}`],
        o[`fontSize${ie(l.fontSize)}`],
      ]
    },
  })(
    De(({ theme: n }) => ({
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      flexShrink: 0,
      transition: n.transitions?.create?.("fill", {
        duration: (n.vars ?? n).transitions?.duration?.shorter,
      }),
      variants: [
        { props: (o) => !o.hasSvgAsChild, style: { fill: "currentColor" } },
        { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
        {
          props: { fontSize: "small" },
          style: { fontSize: n.typography?.pxToRem?.(20) || "1.25rem" },
        },
        {
          props: { fontSize: "medium" },
          style: { fontSize: n.typography?.pxToRem?.(24) || "1.5rem" },
        },
        {
          props: { fontSize: "large" },
          style: { fontSize: n.typography?.pxToRem?.(35) || "2.1875rem" },
        },
        ...Object.entries((n.vars ?? n).palette)
          .filter(([, o]) => o && o.main)
          .map(([o]) => ({
            props: { color: o },
            style: { color: (n.vars ?? n).palette?.[o]?.main },
          })),
        { props: { color: "action" }, style: { color: (n.vars ?? n).palette?.action?.active } },
        { props: { color: "disabled" }, style: { color: (n.vars ?? n).palette?.action?.disabled } },
        { props: { color: "inherit" }, style: { color: void 0 } },
      ],
    }))
  ),
  Rd = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiSvgIcon" }),
      {
        children: s,
        className: c,
        color: d = "inherit",
        component: p = "svg",
        fontSize: m = "medium",
        htmlColor: h,
        inheritViewBox: v = !1,
        titleAccess: b,
        viewBox: R = "0 0 24 24",
        ...M
      } = i,
      T = y.isValidElement(s) && s.type === "svg",
      x = {
        ...i,
        color: d,
        component: p,
        fontSize: m,
        instanceFontSize: o.fontSize,
        inheritViewBox: v,
        viewBox: R,
        hasSvgAsChild: T,
      },
      A = {}
    v || (A.viewBox = R)
    const w = VE(x)
    return E.jsxs(GE, {
      as: p,
      className: pe(w.root, c),
      focusable: "false",
      color: h,
      "aria-hidden": b ? void 0 : !0,
      role: b ? "img" : void 0,
      ref: l,
      ...A,
      ...M,
      ...(T && s.props),
      ownerState: x,
      children: [T ? s.props.children : s, b ? E.jsx("title", { children: b }) : null],
    })
  })
Rd.muiName = "SvgIcon"
function mt(n, o) {
  function l(i, s) {
    return E.jsx(Rd, { "data-testid": void 0, ref: s, ...i, children: n })
  }
  return ((l.muiName = Rd.muiName), y.memo(y.forwardRef(l)))
}
function Hv(n, o = 166) {
  let l
  function i(...s) {
    const c = () => {
      n.apply(this, s)
    }
    ;(clearTimeout(l), (l = setTimeout(c, o)))
  }
  return (
    (i.clear = () => {
      clearTimeout(l)
    }),
    i
  )
}
function Yn(n) {
  return (n && n.ownerDocument) || document
}
function Da(n) {
  return Yn(n).defaultView || window
}
function c0(n, o) {
  typeof n == "function" ? n(o) : n && (n.current = o)
}
function Md(n) {
  const { controlled: o, default: l, name: i, state: s = "value" } = n,
    { current: c } = y.useRef(o !== void 0),
    [d, p] = y.useState(l),
    m = c ? o : d,
    h = y.useCallback((v) => {
      c || p(v)
    }, [])
  return [m, h]
}
function $o(n) {
  const o = y.useRef(n)
  return (
    Gn(() => {
      o.current = n
    }),
    y.useRef((...l) => (0, o.current)(...l)).current
  )
}
function Ut(...n) {
  const o = y.useRef(void 0),
    l = y.useCallback((i) => {
      const s = n.map((c) => {
        if (c == null) return null
        if (typeof c == "function") {
          const d = c,
            p = d(i)
          return typeof p == "function"
            ? p
            : () => {
                d(null)
              }
        }
        return (
          (c.current = i),
          () => {
            c.current = null
          }
        )
      })
      return () => {
        s.forEach((c) => c?.())
      }
    }, n)
  return y.useMemo(
    () =>
      n.every((i) => i == null)
        ? null
        : (i) => {
            ;(o.current && (o.current(), (o.current = void 0)), i != null && (o.current = l(i)))
          },
    n
  )
}
function YE(n, o) {
  const l = n.charCodeAt(2)
  return n[0] === "o" && n[1] === "n" && l >= 65 && l <= 90 && typeof o == "function"
}
function Pv(n, o) {
  if (!n) return o
  function l(d, p) {
    const m = {}
    return (
      Object.keys(p).forEach((h) => {
        YE(h, p[h]) &&
          typeof d[h] == "function" &&
          (m[h] = (...v) => {
            ;(d[h](...v), p[h](...v))
          })
      }),
      m
    )
  }
  if (typeof n == "function" || typeof o == "function")
    return (d) => {
      const p = typeof o == "function" ? o(d) : o,
        m = typeof n == "function" ? n({ ...d, ...p }) : n,
        h = pe(d?.className, p?.className, m?.className),
        v = l(m, p)
      return {
        ...p,
        ...m,
        ...v,
        ...(!!h && { className: h }),
        ...(p?.style && m?.style && { style: { ...p.style, ...m.style } }),
        ...(p?.sx &&
          m?.sx && {
            sx: [
              ...(Array.isArray(p.sx) ? p.sx : [p.sx]),
              ...(Array.isArray(m.sx) ? m.sx : [m.sx]),
            ],
          }),
      }
    }
  const i = o,
    s = l(n, i),
    c = pe(i?.className, n?.className)
  return {
    ...o,
    ...n,
    ...s,
    ...(!!c && { className: c }),
    ...(i?.style && n?.style && { style: { ...i.style, ...n.style } }),
    ...(i?.sx &&
      n?.sx && {
        sx: [...(Array.isArray(i.sx) ? i.sx : [i.sx]), ...(Array.isArray(n.sx) ? n.sx : [n.sx])],
      }),
  }
}
function Iv(n, o) {
  if (n == null) return {}
  var l = {}
  for (var i in n)
    if ({}.hasOwnProperty.call(n, i)) {
      if (o.indexOf(i) !== -1) continue
      l[i] = n[i]
    }
  return l
}
function Ad(n, o) {
  return (
    (Ad = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (l, i) {
          return ((l.__proto__ = i), l)
        }),
    Ad(n, o)
  )
}
function qv(n, o) {
  ;((n.prototype = Object.create(o.prototype)), (n.prototype.constructor = n), Ad(n, o))
}
var Vv = W0()
const js = K0(Vv),
  f0 = { disabled: !1 },
  eu = ra.createContext(null)
var FE = function (o) {
    return o.scrollTop
  },
  Fl = "unmounted",
  jo = "exited",
  ko = "entering",
  Or = "entered",
  wd = "exiting",
  Xn = (function (n) {
    qv(o, n)
    function o(i, s) {
      var c
      c = n.call(this, i, s) || this
      var d = s,
        p = d && !d.isMounting ? i.enter : i.appear,
        m
      return (
        (c.appearStatus = null),
        i.in
          ? p
            ? ((m = jo), (c.appearStatus = ko))
            : (m = Or)
          : i.unmountOnExit || i.mountOnEnter
            ? (m = Fl)
            : (m = jo),
        (c.state = { status: m }),
        (c.nextCallback = null),
        c
      )
    }
    o.getDerivedStateFromProps = function (s, c) {
      var d = s.in
      return d && c.status === Fl ? { status: jo } : null
    }
    var l = o.prototype
    return (
      (l.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus)
      }),
      (l.componentDidUpdate = function (s) {
        var c = null
        if (s !== this.props) {
          var d = this.state.status
          this.props.in ? d !== ko && d !== Or && (c = ko) : (d === ko || d === Or) && (c = wd)
        }
        this.updateStatus(!1, c)
      }),
      (l.componentWillUnmount = function () {
        this.cancelNextCallback()
      }),
      (l.getTimeouts = function () {
        var s = this.props.timeout,
          c,
          d,
          p
        return (
          (c = d = p = s),
          s != null &&
            typeof s != "number" &&
            ((c = s.exit), (d = s.enter), (p = s.appear !== void 0 ? s.appear : d)),
          { exit: c, enter: d, appear: p }
        )
      }),
      (l.updateStatus = function (s, c) {
        if ((s === void 0 && (s = !1), c !== null))
          if ((this.cancelNextCallback(), c === ko)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var d = this.props.nodeRef ? this.props.nodeRef.current : js.findDOMNode(this)
              d && FE(d)
            }
            this.performEnter(s)
          } else this.performExit()
        else this.props.unmountOnExit && this.state.status === jo && this.setState({ status: Fl })
      }),
      (l.performEnter = function (s) {
        var c = this,
          d = this.props.enter,
          p = this.context ? this.context.isMounting : s,
          m = this.props.nodeRef ? [p] : [js.findDOMNode(this), p],
          h = m[0],
          v = m[1],
          b = this.getTimeouts(),
          R = p ? b.appear : b.enter
        if ((!s && !d) || f0.disabled) {
          this.safeSetState({ status: Or }, function () {
            c.props.onEntered(h)
          })
          return
        }
        ;(this.props.onEnter(h, v),
          this.safeSetState({ status: ko }, function () {
            ;(c.props.onEntering(h, v),
              c.onTransitionEnd(R, function () {
                c.safeSetState({ status: Or }, function () {
                  c.props.onEntered(h, v)
                })
              }))
          }))
      }),
      (l.performExit = function () {
        var s = this,
          c = this.props.exit,
          d = this.getTimeouts(),
          p = this.props.nodeRef ? void 0 : js.findDOMNode(this)
        if (!c || f0.disabled) {
          this.safeSetState({ status: jo }, function () {
            s.props.onExited(p)
          })
          return
        }
        ;(this.props.onExit(p),
          this.safeSetState({ status: wd }, function () {
            ;(s.props.onExiting(p),
              s.onTransitionEnd(d.exit, function () {
                s.safeSetState({ status: jo }, function () {
                  s.props.onExited(p)
                })
              }))
          }))
      }),
      (l.cancelNextCallback = function () {
        this.nextCallback !== null && (this.nextCallback.cancel(), (this.nextCallback = null))
      }),
      (l.safeSetState = function (s, c) {
        ;((c = this.setNextCallback(c)), this.setState(s, c))
      }),
      (l.setNextCallback = function (s) {
        var c = this,
          d = !0
        return (
          (this.nextCallback = function (p) {
            d && ((d = !1), (c.nextCallback = null), s(p))
          }),
          (this.nextCallback.cancel = function () {
            d = !1
          }),
          this.nextCallback
        )
      }),
      (l.onTransitionEnd = function (s, c) {
        this.setNextCallback(c)
        var d = this.props.nodeRef ? this.props.nodeRef.current : js.findDOMNode(this),
          p = s == null && !this.props.addEndListener
        if (!d || p) {
          setTimeout(this.nextCallback, 0)
          return
        }
        if (this.props.addEndListener) {
          var m = this.props.nodeRef ? [this.nextCallback] : [d, this.nextCallback],
            h = m[0],
            v = m[1]
          this.props.addEndListener(h, v)
        }
        s != null && setTimeout(this.nextCallback, s)
      }),
      (l.render = function () {
        var s = this.state.status
        if (s === Fl) return null
        var c = this.props,
          d = c.children
        ;(c.in,
          c.mountOnEnter,
          c.unmountOnExit,
          c.appear,
          c.enter,
          c.exit,
          c.timeout,
          c.addEndListener,
          c.onEnter,
          c.onEntering,
          c.onEntered,
          c.onExit,
          c.onExiting,
          c.onExited,
          c.nodeRef)
        var p = Iv(c, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ])
        return ra.createElement(
          eu.Provider,
          { value: null },
          typeof d == "function" ? d(s, p) : ra.cloneElement(ra.Children.only(d), p)
        )
      }),
      o
    )
  })(ra.Component)
Xn.contextType = eu
Xn.propTypes = {}
function zr() {}
Xn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: zr,
  onEntering: zr,
  onEntered: zr,
  onExit: zr,
  onExiting: zr,
  onExited: zr,
}
Xn.UNMOUNTED = Fl
Xn.EXITED = jo
Xn.ENTERING = ko
Xn.ENTERED = Or
Xn.EXITING = wd
function XE(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return n
}
function sp(n, o) {
  var l = function (c) {
      return o && y.isValidElement(c) ? o(c) : c
    },
    i = Object.create(null)
  return (
    n &&
      y.Children.map(n, function (s) {
        return s
      }).forEach(function (s) {
        i[s.key] = l(s)
      }),
    i
  )
}
function KE(n, o) {
  ;((n = n || {}), (o = o || {}))
  function l(v) {
    return v in o ? o[v] : n[v]
  }
  var i = Object.create(null),
    s = []
  for (var c in n) c in o ? s.length && ((i[c] = s), (s = [])) : s.push(c)
  var d,
    p = {}
  for (var m in o) {
    if (i[m])
      for (d = 0; d < i[m].length; d++) {
        var h = i[m][d]
        p[i[m][d]] = l(h)
      }
    p[m] = l(m)
  }
  for (d = 0; d < s.length; d++) p[s[d]] = l(s[d])
  return p
}
function Lo(n, o, l) {
  return l[o] != null ? l[o] : n.props[o]
}
function WE(n, o) {
  return sp(n.children, function (l) {
    return y.cloneElement(l, {
      onExited: o.bind(null, l),
      in: !0,
      appear: Lo(l, "appear", n),
      enter: Lo(l, "enter", n),
      exit: Lo(l, "exit", n),
    })
  })
}
function QE(n, o, l) {
  var i = sp(n.children),
    s = KE(o, i)
  return (
    Object.keys(s).forEach(function (c) {
      var d = s[c]
      if (y.isValidElement(d)) {
        var p = c in o,
          m = c in i,
          h = o[c],
          v = y.isValidElement(h) && !h.props.in
        m && (!p || v)
          ? (s[c] = y.cloneElement(d, {
              onExited: l.bind(null, d),
              in: !0,
              exit: Lo(d, "exit", n),
              enter: Lo(d, "enter", n),
            }))
          : !m && p && !v
            ? (s[c] = y.cloneElement(d, { in: !1 }))
            : m &&
              p &&
              y.isValidElement(h) &&
              (s[c] = y.cloneElement(d, {
                onExited: l.bind(null, d),
                in: h.props.in,
                exit: Lo(d, "exit", n),
                enter: Lo(d, "enter", n),
              }))
      }
    }),
    s
  )
}
var ZE =
    Object.values ||
    function (n) {
      return Object.keys(n).map(function (o) {
        return n[o]
      })
    },
  JE = {
    component: "div",
    childFactory: function (o) {
      return o
    },
  },
  up = (function (n) {
    qv(o, n)
    function o(i, s) {
      var c
      c = n.call(this, i, s) || this
      var d = c.handleExited.bind(XE(c))
      return ((c.state = { contextValue: { isMounting: !0 }, handleExited: d, firstRender: !0 }), c)
    }
    var l = o.prototype
    return (
      (l.componentDidMount = function () {
        ;((this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } }))
      }),
      (l.componentWillUnmount = function () {
        this.mounted = !1
      }),
      (o.getDerivedStateFromProps = function (s, c) {
        var d = c.children,
          p = c.handleExited,
          m = c.firstRender
        return { children: m ? WE(s, p) : QE(s, d, p), firstRender: !1 }
      }),
      (l.handleExited = function (s, c) {
        var d = sp(this.props.children)
        s.key in d ||
          (s.props.onExited && s.props.onExited(c),
          this.mounted &&
            this.setState(function (p) {
              var m = Ws({}, p.children)
              return (delete m[s.key], { children: m })
            }))
      }),
      (l.render = function () {
        var s = this.props,
          c = s.component,
          d = s.childFactory,
          p = Iv(s, ["component", "childFactory"]),
          m = this.state.contextValue,
          h = ZE(this.state.children).map(d)
        return (
          delete p.appear,
          delete p.enter,
          delete p.exit,
          c === null
            ? ra.createElement(eu.Provider, { value: m }, h)
            : ra.createElement(eu.Provider, { value: m }, ra.createElement(c, p, h))
        )
      }),
      o
    )
  })(ra.Component)
up.propTypes = {}
up.defaultProps = JE
const d0 = {}
function Gv(n, o) {
  const l = y.useRef(d0)
  return (l.current === d0 && (l.current = n(o)), l)
}
const eT = []
function tT(n) {
  y.useEffect(n, eT)
}
class cp {
  static create() {
    return new cp()
  }
  currentId = null
  start(o, l) {
    ;(this.clear(),
      (this.currentId = setTimeout(() => {
        ;((this.currentId = null), l())
      }, o)))
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), (this.currentId = null))
  }
  disposeEffect = () => this.clear
}
function fp() {
  const n = Gv(cp.create).current
  return (tT(n.disposeEffect), n)
}
const Yv = (n) => n.scrollTop
function Lr(n, o) {
  const { timeout: l, easing: i, style: s = {} } = n
  return {
    duration: s.transitionDuration ?? (typeof l == "number" ? l : l[o.mode] || 0),
    easing: s.transitionTimingFunction ?? (typeof i == "object" ? i[o.mode] : i),
    delay: s.transitionDelay,
  }
}
function $r(n) {
  return typeof n == "string"
}
function Fv(n, o, l) {
  return n === void 0 || $r(n) ? o : { ...o, ownerState: { ...o.ownerState, ...l } }
}
function Xv(n, o, l) {
  return typeof n == "function" ? n(o, l) : n
}
function Kv(n, o = []) {
  if (n === void 0) return {}
  const l = {}
  return (
    Object.keys(n)
      .filter((i) => i.match(/^on[A-Z]/) && typeof n[i] == "function" && !o.includes(i))
      .forEach((i) => {
        l[i] = n[i]
      }),
    l
  )
}
function p0(n) {
  if (n === void 0) return {}
  const o = {}
  return (
    Object.keys(n)
      .filter((l) => !(l.match(/^on[A-Z]/) && typeof n[l] == "function"))
      .forEach((l) => {
        o[l] = n[l]
      }),
    o
  )
}
function Wv(n) {
  const {
    getSlotProps: o,
    additionalProps: l,
    externalSlotProps: i,
    externalForwardedProps: s,
    className: c,
  } = n
  if (!o) {
    const M = pe(l?.className, c, s?.className, i?.className),
      T = { ...l?.style, ...s?.style, ...i?.style },
      x = { ...l, ...s, ...i }
    return (
      M.length > 0 && (x.className = M),
      Object.keys(T).length > 0 && (x.style = T),
      { props: x, internalRef: void 0 }
    )
  }
  const d = Kv({ ...s, ...i }),
    p = p0(i),
    m = p0(s),
    h = o(d),
    v = pe(h?.className, l?.className, c, s?.className, i?.className),
    b = { ...h?.style, ...l?.style, ...s?.style, ...i?.style },
    R = { ...h, ...l, ...m, ...p }
  return (
    v.length > 0 && (R.className = v),
    Object.keys(b).length > 0 && (R.style = b),
    { props: R, internalRef: h.ref }
  )
}
function Le(n, o) {
  const {
      className: l,
      elementType: i,
      ownerState: s,
      externalForwardedProps: c,
      internalForwardedProps: d,
      shouldForwardComponentProp: p = !1,
      ...m
    } = o,
    { component: h, slots: v = { [n]: void 0 }, slotProps: b = { [n]: void 0 }, ...R } = c,
    M = v[n] || i,
    T = Xv(b[n], s),
    {
      props: { component: x, ...A },
      internalRef: w,
    } = Wv({
      className: l,
      ...m,
      externalForwardedProps: n === "root" ? R : void 0,
      externalSlotProps: T,
    }),
    k = Ut(w, T?.ref, o.ref),
    O = n === "root" ? x || h : x,
    N = Fv(
      M,
      {
        ...(n === "root" && !h && !v[n] && d),
        ...(n !== "root" && !v[n] && d),
        ...A,
        ...(O && !p && { as: O }),
        ...(O && p && { component: O }),
        ref: k,
      },
      s
    )
  return [M, N]
}
function nT(n) {
  return Te("MuiCollapse", n)
}
Re("MuiCollapse", [
  "root",
  "horizontal",
  "vertical",
  "entered",
  "hidden",
  "wrapper",
  "wrapperInner",
])
const aT = (n) => {
    const { orientation: o, classes: l } = n,
      i = {
        root: ["root", `${o}`],
        entered: ["entered"],
        hidden: ["hidden"],
        wrapper: ["wrapper", `${o}`],
        wrapperInner: ["wrapperInner", `${o}`],
      }
    return Me(i, nT, l)
  },
  oT = ce("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [
        o.root,
        o[l.orientation],
        l.state === "entered" && o.entered,
        l.state === "exited" && !l.in && l.collapsedSize === "0px" && o.hidden,
      ]
    },
  })(
    De(({ theme: n }) => ({
      height: 0,
      overflow: "hidden",
      transition: n.transitions.create("height"),
      variants: [
        {
          props: { orientation: "horizontal" },
          style: { height: "auto", width: 0, transition: n.transitions.create("width") },
        },
        { props: { state: "entered" }, style: { height: "auto", overflow: "visible" } },
        { props: { state: "entered", orientation: "horizontal" }, style: { width: "auto" } },
        {
          props: ({ ownerState: o }) => o.state === "exited" && !o.in && o.collapsedSize === "0px",
          style: { visibility: "hidden" },
        },
      ],
    }))
  ),
  rT = ce("div", { name: "MuiCollapse", slot: "Wrapper" })({
    display: "flex",
    width: "100%",
    variants: [{ props: { orientation: "horizontal" }, style: { width: "auto", height: "100%" } }],
  }),
  lT = ce("div", { name: "MuiCollapse", slot: "WrapperInner" })({
    width: "100%",
    variants: [{ props: { orientation: "horizontal" }, style: { width: "auto", height: "100%" } }],
  }),
  zd = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiCollapse" }),
      {
        addEndListener: s,
        children: c,
        className: d,
        collapsedSize: p = "0px",
        component: m,
        easing: h,
        in: v,
        onEnter: b,
        onEntered: R,
        onEntering: M,
        onExit: T,
        onExited: x,
        onExiting: A,
        orientation: w = "vertical",
        slots: k = {},
        slotProps: O = {},
        style: N,
        timeout: B = kv.standard,
        TransitionComponent: _ = Xn,
        ...U
      } = i,
      H = { ...i, orientation: w, collapsedSize: p },
      X = aT(H),
      Q = di(),
      te = fp(),
      C = y.useRef(null),
      W = y.useRef(),
      G = typeof p == "number" ? `${p}px` : p,
      Y = w === "horizontal",
      z = Y ? "width" : "height",
      F = y.useRef(null),
      re = Ut(l, F),
      ne = (me) => (Ze) => {
        if (me) {
          const Ve = F.current
          Ze === void 0 ? me(Ve) : me(Ve, Ze)
        }
      },
      fe = () => (C.current ? C.current[Y ? "clientWidth" : "clientHeight"] : 0),
      D = ne((me, Ze) => {
        ;(C.current && Y && (C.current.style.position = "absolute"),
          (me.style[z] = G),
          b && b(me, Ze))
      }),
      q = ne((me, Ze) => {
        const Ve = fe()
        C.current && Y && (C.current.style.position = "")
        const { duration: Ue, easing: Xe } = Lr(
          { style: N, timeout: B, easing: h },
          { mode: "enter" }
        )
        if (B === "auto") {
          const St = Q.transitions.getAutoHeightDuration(Ve)
          ;((me.style.transitionDuration = `${St}ms`), (W.current = St))
        } else me.style.transitionDuration = typeof Ue == "string" ? Ue : `${Ue}ms`
        ;((me.style[z] = `${Ve}px`), (me.style.transitionTimingFunction = Xe), M && M(me, Ze))
      }),
      ae = ne((me, Ze) => {
        ;((me.style[z] = "auto"), R && R(me, Ze))
      }),
      se = ne((me) => {
        ;((me.style[z] = `${fe()}px`), T && T(me))
      }),
      ue = ne(x),
      le = ne((me) => {
        const Ze = fe(),
          { duration: Ve, easing: Ue } = Lr({ style: N, timeout: B, easing: h }, { mode: "exit" })
        if (B === "auto") {
          const Xe = Q.transitions.getAutoHeightDuration(Ze)
          ;((me.style.transitionDuration = `${Xe}ms`), (W.current = Xe))
        } else me.style.transitionDuration = typeof Ve == "string" ? Ve : `${Ve}ms`
        ;((me.style[z] = G), (me.style.transitionTimingFunction = Ue), A && A(me))
      }),
      de = (me) => {
        ;(B === "auto" && te.start(W.current || 0, me), s && s(F.current, me))
      },
      Be = { slots: k, slotProps: O, component: m },
      [Se, be] = Le("root", {
        ref: re,
        className: pe(X.root, d),
        elementType: oT,
        externalForwardedProps: Be,
        ownerState: H,
        additionalProps: { style: { [Y ? "minWidth" : "minHeight"]: G, ...N } },
      }),
      [ze, $e] = Le("wrapper", {
        ref: C,
        className: X.wrapper,
        elementType: rT,
        externalForwardedProps: Be,
        ownerState: H,
      }),
      [pt, Ee] = Le("wrapperInner", {
        className: X.wrapperInner,
        elementType: lT,
        externalForwardedProps: Be,
        ownerState: H,
      })
    return E.jsx(_, {
      in: v,
      onEnter: D,
      onEntered: ae,
      onEntering: q,
      onExit: se,
      onExited: ue,
      onExiting: le,
      addEndListener: de,
      nodeRef: F,
      timeout: B === "auto" ? null : B,
      ...U,
      children: (me, { ownerState: Ze, ...Ve }) => {
        const Ue = { ...H, state: me }
        return E.jsx(Se, {
          ...be,
          className: pe(
            be.className,
            { entered: X.entered, exited: !v && G === "0px" && X.hidden }[me]
          ),
          ownerState: Ue,
          ...Ve,
          children: E.jsx(ze, {
            ...$e,
            ownerState: Ue,
            children: E.jsx(pt, { ...Ee, ownerState: Ue, children: c }),
          }),
        })
      },
    })
  })
zd && (zd.muiSupportAuto = !0)
function iT(n) {
  return Te("MuiPaper", n)
}
Re("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
])
const sT = (n) => {
    const { square: o, elevation: l, variant: i, classes: s } = n,
      c = { root: ["root", i, !o && "rounded", i === "elevation" && `elevation${l}`] }
    return Me(c, iT, s)
  },
  uT = ce("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [
        o.root,
        o[l.variant],
        !l.square && o.rounded,
        l.variant === "elevation" && o[`elevation${l.elevation}`],
      ]
    },
  })(
    De(({ theme: n }) => ({
      backgroundColor: (n.vars || n).palette.background.paper,
      color: (n.vars || n).palette.text.primary,
      transition: n.transitions.create("box-shadow"),
      variants: [
        { props: ({ ownerState: o }) => !o.square, style: { borderRadius: n.shape.borderRadius } },
        {
          props: { variant: "outlined" },
          style: { border: `1px solid ${(n.vars || n).palette.divider}` },
        },
        {
          props: { variant: "elevation" },
          style: { boxShadow: "var(--Paper-shadow)", backgroundImage: "var(--Paper-overlay)" },
        },
      ],
    }))
  ),
  sa = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiPaper" }),
      s = di(),
      {
        className: c,
        component: d = "div",
        elevation: p = 1,
        square: m = !1,
        variant: h = "elevation",
        ...v
      } = i,
      b = { ...i, component: d, elevation: p, square: m, variant: h },
      R = sT(b)
    return E.jsx(uT, {
      as: d,
      ownerState: b,
      className: pe(R.root, c),
      ref: l,
      ...v,
      style: {
        ...(h === "elevation" && {
          "--Paper-shadow": (s.vars || s).shadows[p],
          ...(s.vars && { "--Paper-overlay": s.vars.overlays?.[p] }),
          ...(!s.vars &&
            s.palette.mode === "dark" && {
              "--Paper-overlay": `linear-gradient(${Js("#fff", Td(p))}, ${Js("#fff", Td(p))})`,
            }),
        }),
        ...v.style,
      },
    })
  })
function m0(n) {
  try {
    return n.matches(":focus-visible")
  } catch {}
  return !1
}
class tu {
  static create() {
    return new tu()
  }
  static use() {
    const o = Gv(tu.create).current,
      [l, i] = y.useState(!1)
    return ((o.shouldMount = l), (o.setShouldMount = i), y.useEffect(o.mountEffect, [l]), o)
  }
  constructor() {
    ;((this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null))
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = fT()), (this.shouldMount = !0), this.setShouldMount(this.shouldMount)),
      this.mounted
    )
  }
  mountEffect = () => {
    this.shouldMount &&
      !this.didMount &&
      this.ref.current !== null &&
      ((this.didMount = !0), this.mounted.resolve())
  }
  start(...o) {
    this.mount().then(() => this.ref.current?.start(...o))
  }
  stop(...o) {
    this.mount().then(() => this.ref.current?.stop(...o))
  }
  pulsate(...o) {
    this.mount().then(() => this.ref.current?.pulsate(...o))
  }
}
function cT() {
  return tu.use()
}
function fT() {
  let n, o
  const l = new Promise((i, s) => {
    ;((n = i), (o = s))
  })
  return ((l.resolve = n), (l.reject = o), l)
}
function dT(n) {
  const {
      className: o,
      classes: l,
      pulsate: i = !1,
      rippleX: s,
      rippleY: c,
      rippleSize: d,
      in: p,
      onExited: m,
      timeout: h,
    } = n,
    [v, b] = y.useState(!1),
    R = pe(o, l.ripple, l.rippleVisible, i && l.ripplePulsate),
    M = { width: d, height: d, top: -(d / 2) + c, left: -(d / 2) + s },
    T = pe(l.child, v && l.childLeaving, i && l.childPulsate)
  return (
    !p && !v && b(!0),
    y.useEffect(() => {
      if (!p && m != null) {
        const x = setTimeout(m, h)
        return () => {
          clearTimeout(x)
        }
      }
    }, [m, p, h]),
    E.jsx("span", { className: R, style: M, children: E.jsx("span", { className: T }) })
  )
}
const Dn = Re("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  Od = 550,
  pT = 80,
  mT = si`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  hT = si`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  gT = si`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  yT = ce("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  vT = ce(dT, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${Dn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${mT};
    animation-duration: ${Od}ms;
    animation-timing-function: ${({ theme: n }) => n.transitions.easing.easeInOut};
  }

  &.${Dn.ripplePulsate} {
    animation-duration: ${({ theme: n }) => n.transitions.duration.shorter}ms;
  }

  & .${Dn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Dn.childLeaving} {
    opacity: 0;
    animation-name: ${hT};
    animation-duration: ${Od}ms;
    animation-timing-function: ${({ theme: n }) => n.transitions.easing.easeInOut};
  }

  & .${Dn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${gT};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: n }) => n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  bT = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiTouchRipple" }),
      { center: s = !1, classes: c = {}, className: d, ...p } = i,
      [m, h] = y.useState([]),
      v = y.useRef(0),
      b = y.useRef(null)
    y.useEffect(() => {
      b.current && (b.current(), (b.current = null))
    }, [m])
    const R = y.useRef(!1),
      M = fp(),
      T = y.useRef(null),
      x = y.useRef(null),
      A = y.useCallback(
        (N) => {
          const { pulsate: B, rippleX: _, rippleY: U, rippleSize: H, cb: X } = N
          ;(h((Q) => [
            ...Q,
            E.jsx(
              vT,
              {
                classes: {
                  ripple: pe(c.ripple, Dn.ripple),
                  rippleVisible: pe(c.rippleVisible, Dn.rippleVisible),
                  ripplePulsate: pe(c.ripplePulsate, Dn.ripplePulsate),
                  child: pe(c.child, Dn.child),
                  childLeaving: pe(c.childLeaving, Dn.childLeaving),
                  childPulsate: pe(c.childPulsate, Dn.childPulsate),
                },
                timeout: Od,
                pulsate: B,
                rippleX: _,
                rippleY: U,
                rippleSize: H,
              },
              v.current
            ),
          ]),
            (v.current += 1),
            (b.current = X))
        },
        [c]
      ),
      w = y.useCallback(
        (N = {}, B = {}, _ = () => {}) => {
          const { pulsate: U = !1, center: H = s || B.pulsate, fakeElement: X = !1 } = B
          if (N?.type === "mousedown" && R.current) {
            R.current = !1
            return
          }
          N?.type === "touchstart" && (R.current = !0)
          const Q = X ? null : x.current,
            te = Q ? Q.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 }
          let C, W, G
          if (
            H ||
            N === void 0 ||
            (N.clientX === 0 && N.clientY === 0) ||
            (!N.clientX && !N.touches)
          )
            ((C = Math.round(te.width / 2)), (W = Math.round(te.height / 2)))
          else {
            const { clientX: Y, clientY: z } = N.touches && N.touches.length > 0 ? N.touches[0] : N
            ;((C = Math.round(Y - te.left)), (W = Math.round(z - te.top)))
          }
          if (H)
            ((G = Math.sqrt((2 * te.width ** 2 + te.height ** 2) / 3)), G % 2 === 0 && (G += 1))
          else {
            const Y = Math.max(Math.abs((Q ? Q.clientWidth : 0) - C), C) * 2 + 2,
              z = Math.max(Math.abs((Q ? Q.clientHeight : 0) - W), W) * 2 + 2
            G = Math.sqrt(Y ** 2 + z ** 2)
          }
          N?.touches
            ? T.current === null &&
              ((T.current = () => {
                A({ pulsate: U, rippleX: C, rippleY: W, rippleSize: G, cb: _ })
              }),
              M.start(pT, () => {
                T.current && (T.current(), (T.current = null))
              }))
            : A({ pulsate: U, rippleX: C, rippleY: W, rippleSize: G, cb: _ })
        },
        [s, A, M]
      ),
      k = y.useCallback(() => {
        w({}, { pulsate: !0 })
      }, [w]),
      O = y.useCallback(
        (N, B) => {
          if ((M.clear(), N?.type === "touchend" && T.current)) {
            ;(T.current(),
              (T.current = null),
              M.start(0, () => {
                O(N, B)
              }))
            return
          }
          ;((T.current = null), h((_) => (_.length > 0 ? _.slice(1) : _)), (b.current = B))
        },
        [M]
      )
    return (
      y.useImperativeHandle(l, () => ({ pulsate: k, start: w, stop: O }), [k, w, O]),
      E.jsx(yT, {
        className: pe(Dn.root, c.root, d),
        ref: x,
        ...p,
        children: E.jsx(up, { component: null, exit: !0, children: m }),
      })
    )
  })
function ST(n) {
  return Te("MuiButtonBase", n)
}
const xT = Re("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  CT = (n) => {
    const { disabled: o, focusVisible: l, focusVisibleClassName: i, classes: s } = n,
      d = Me({ root: ["root", o && "disabled", l && "focusVisible"] }, ST, s)
    return (l && i && (d.root += ` ${i}`), d)
  },
  ET = ce("button", { name: "MuiButtonBase", slot: "Root" })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${xT.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  Ba = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiButtonBase" }),
      {
        action: s,
        centerRipple: c = !1,
        children: d,
        className: p,
        component: m = "button",
        disabled: h = !1,
        disableRipple: v = !1,
        disableTouchRipple: b = !1,
        focusRipple: R = !1,
        focusVisibleClassName: M,
        LinkComponent: T = "a",
        onBlur: x,
        onClick: A,
        onContextMenu: w,
        onDragLeave: k,
        onFocus: O,
        onFocusVisible: N,
        onKeyDown: B,
        onKeyUp: _,
        onMouseDown: U,
        onMouseLeave: H,
        onMouseUp: X,
        onTouchEnd: Q,
        onTouchMove: te,
        onTouchStart: C,
        tabIndex: W = 0,
        TouchRippleProps: G,
        touchRippleRef: Y,
        type: z,
        ...F
      } = i,
      re = y.useRef(null),
      ne = cT(),
      fe = Ut(ne.ref, Y),
      [D, q] = y.useState(!1)
    ;(h && D && q(!1),
      y.useImperativeHandle(
        s,
        () => ({
          focusVisible: () => {
            ;(q(!0), re.current.focus())
          },
        }),
        []
      ))
    const ae = ne.shouldMount && !v && !h
    y.useEffect(() => {
      D && R && !v && ne.pulsate()
    }, [v, R, D, ne])
    const se = za(ne, "start", U, b),
      ue = za(ne, "stop", w, b),
      le = za(ne, "stop", k, b),
      de = za(ne, "stop", X, b),
      Be = za(
        ne,
        "stop",
        (ye) => {
          ;(D && ye.preventDefault(), H && H(ye))
        },
        b
      ),
      Se = za(ne, "start", C, b),
      be = za(ne, "stop", Q, b),
      ze = za(ne, "stop", te, b),
      $e = za(
        ne,
        "stop",
        (ye) => {
          ;(m0(ye.target) || q(!1), x && x(ye))
        },
        !1
      ),
      pt = $o((ye) => {
        ;(re.current || (re.current = ye.currentTarget),
          m0(ye.target) && (q(!0), N && N(ye)),
          O && O(ye))
      }),
      Ee = () => {
        const ye = re.current
        return m && m !== "button" && !(ye.tagName === "A" && ye.href)
      },
      me = $o((ye) => {
        ;(R &&
          !ye.repeat &&
          D &&
          ye.key === " " &&
          ne.stop(ye, () => {
            ne.start(ye)
          }),
          ye.target === ye.currentTarget && Ee() && ye.key === " " && ye.preventDefault(),
          B && B(ye),
          ye.target === ye.currentTarget &&
            Ee() &&
            ye.key === "Enter" &&
            !h &&
            (ye.preventDefault(), A && A(ye)))
      }),
      Ze = $o((ye) => {
        ;(R &&
          ye.key === " " &&
          D &&
          !ye.defaultPrevented &&
          ne.stop(ye, () => {
            ne.pulsate(ye)
          }),
          _ && _(ye),
          A &&
            ye.target === ye.currentTarget &&
            Ee() &&
            ye.key === " " &&
            !ye.defaultPrevented &&
            A(ye))
      })
    let Ve = m
    Ve === "button" && (F.href || F.to) && (Ve = T)
    const Ue = {}
    if (Ve === "button") {
      const ye = !!F.formAction
      ;((Ue.type = z === void 0 && !ye ? "button" : z), (Ue.disabled = h))
    } else (!F.href && !F.to && (Ue.role = "button"), h && (Ue["aria-disabled"] = h))
    const Xe = Ut(l, re),
      St = {
        ...i,
        centerRipple: c,
        component: m,
        disabled: h,
        disableRipple: v,
        disableTouchRipple: b,
        focusRipple: R,
        tabIndex: W,
        focusVisible: D,
      },
      ut = CT(St)
    return E.jsxs(ET, {
      as: Ve,
      className: pe(ut.root, p),
      ownerState: St,
      onBlur: $e,
      onClick: A,
      onContextMenu: ue,
      onFocus: pt,
      onKeyDown: me,
      onKeyUp: Ze,
      onMouseDown: se,
      onMouseLeave: Be,
      onMouseUp: de,
      onDragLeave: le,
      onTouchEnd: be,
      onTouchMove: ze,
      onTouchStart: Se,
      ref: Xe,
      tabIndex: h ? -1 : W,
      type: z,
      ...Ue,
      ...F,
      children: [d, ae ? E.jsx(bT, { ref: fe, center: c, ...G }) : null],
    })
  })
function za(n, o, l, i = !1) {
  return $o((s) => (l && l(s), i || n[o](s), !0))
}
function TT(n) {
  return typeof n.main == "string"
}
function RT(n, o = []) {
  if (!TT(n)) return !1
  for (const l of o) if (!n.hasOwnProperty(l) || typeof n[l] != "string") return !1
  return !0
}
function Jt(n = []) {
  return ([, o]) => o && RT(o, n)
}
function MT(n) {
  return Te("MuiCircularProgress", n)
}
Re("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "track",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
])
const In = 44,
  Nd = si`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  Dd = si`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,
  AT =
    typeof Nd != "string"
      ? Kd`
        animation: ${Nd} 1.4s linear infinite;
      `
      : null,
  wT =
    typeof Dd != "string"
      ? Kd`
        animation: ${Dd} 1.4s ease-in-out infinite;
      `
      : null,
  zT = (n) => {
    const { classes: o, variant: l, color: i, disableShrink: s } = n,
      c = {
        root: ["root", l, `color${ie(i)}`],
        svg: ["svg"],
        track: ["track"],
        circle: ["circle", `circle${ie(l)}`, s && "circleDisableShrink"],
      }
    return Me(c, MT, o)
  },
  OT = ce("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.root, o[l.variant], o[`color${ie(l.color)}`]]
    },
  })(
    De(({ theme: n }) => ({
      display: "inline-block",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: n.transitions.create("transform") },
        },
        {
          props: { variant: "indeterminate" },
          style: AT || { animation: `${Nd} 1.4s linear infinite` },
        },
        ...Object.entries(n.palette)
          .filter(Jt())
          .map(([o]) => ({ props: { color: o }, style: { color: (n.vars || n).palette[o].main } })),
      ],
    }))
  ),
  NT = ce("svg", { name: "MuiCircularProgress", slot: "Svg" })({ display: "block" }),
  DT = ce("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.circle, o[`circle${ie(l.variant)}`], l.disableShrink && o.circleDisableShrink]
    },
  })(
    De(({ theme: n }) => ({
      stroke: "currentColor",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: n.transitions.create("stroke-dashoffset") },
        },
        {
          props: { variant: "indeterminate" },
          style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: o }) => o.variant === "indeterminate" && !o.disableShrink,
          style: wT || { animation: `${Dd} 1.4s ease-in-out infinite` },
        },
      ],
    }))
  ),
  BT = ce("circle", { name: "MuiCircularProgress", slot: "Track" })(
    De(({ theme: n }) => ({
      stroke: "currentColor",
      opacity: (n.vars || n).palette.action.activatedOpacity,
    }))
  ),
  Qv = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiCircularProgress" }),
      {
        className: s,
        color: c = "primary",
        disableShrink: d = !1,
        enableTrackSlot: p = !1,
        size: m = 40,
        style: h,
        thickness: v = 3.6,
        value: b = 0,
        variant: R = "indeterminate",
        ...M
      } = i,
      T = {
        ...i,
        color: c,
        disableShrink: d,
        size: m,
        thickness: v,
        value: b,
        variant: R,
        enableTrackSlot: p,
      },
      x = zT(T),
      A = {},
      w = {},
      k = {}
    if (R === "determinate") {
      const O = 2 * Math.PI * ((In - v) / 2)
      ;((A.strokeDasharray = O.toFixed(3)),
        (k["aria-valuenow"] = Math.round(b)),
        (A.strokeDashoffset = `${(((100 - b) / 100) * O).toFixed(3)}px`),
        (w.transform = "rotate(-90deg)"))
    }
    return E.jsx(OT, {
      className: pe(x.root, s),
      style: { width: m, height: m, ...w, ...h },
      ownerState: T,
      ref: l,
      role: "progressbar",
      ...k,
      ...M,
      children: E.jsxs(NT, {
        className: x.svg,
        ownerState: T,
        viewBox: `${In / 2} ${In / 2} ${In} ${In}`,
        children: [
          p
            ? E.jsx(BT, {
                className: x.track,
                ownerState: T,
                cx: In,
                cy: In,
                r: (In - v) / 2,
                fill: "none",
                strokeWidth: v,
                "aria-hidden": "true",
              })
            : null,
          E.jsx(DT, {
            className: x.circle,
            style: A,
            ownerState: T,
            cx: In,
            cy: In,
            r: (In - v) / 2,
            fill: "none",
            strokeWidth: v,
          }),
        ],
      }),
    })
  })
function jT(n) {
  return Te("MuiIconButton", n)
}
const h0 = Re("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
    "loading",
    "loadingIndicator",
    "loadingWrapper",
  ]),
  kT = (n) => {
    const { classes: o, disabled: l, color: i, edge: s, size: c, loading: d } = n,
      p = {
        root: [
          "root",
          d && "loading",
          l && "disabled",
          i !== "default" && `color${ie(i)}`,
          s && `edge${ie(s)}`,
          `size${ie(c)}`,
        ],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      }
    return Me(p, jT, o)
  },
  _T = ce(Ba, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [
        o.root,
        l.loading && o.loading,
        l.color !== "default" && o[`color${ie(l.color)}`],
        l.edge && o[`edge${ie(l.edge)}`],
        o[`size${ie(l.size)}`],
      ]
    },
  })(
    De(({ theme: n }) => ({
      textAlign: "center",
      flex: "0 0 auto",
      fontSize: n.typography.pxToRem(24),
      padding: 8,
      borderRadius: "50%",
      color: (n.vars || n).palette.action.active,
      transition: n.transitions.create("background-color", {
        duration: n.transitions.duration.shortest,
      }),
      variants: [
        {
          props: (o) => !o.disableRipple,
          style: {
            "--IconButton-hoverBg": n.alpha(
              (n.vars || n).palette.action.active,
              (n.vars || n).palette.action.hoverOpacity
            ),
            "&:hover": {
              backgroundColor: "var(--IconButton-hoverBg)",
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
        },
        { props: { edge: "start" }, style: { marginLeft: -12 } },
        { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } },
        { props: { edge: "end" }, style: { marginRight: -12 } },
        { props: { edge: "end", size: "small" }, style: { marginRight: -3 } },
      ],
    })),
    De(({ theme: n }) => ({
      variants: [
        { props: { color: "inherit" }, style: { color: "inherit" } },
        ...Object.entries(n.palette)
          .filter(Jt())
          .map(([o]) => ({ props: { color: o }, style: { color: (n.vars || n).palette[o].main } })),
        ...Object.entries(n.palette)
          .filter(Jt())
          .map(([o]) => ({
            props: { color: o },
            style: {
              "--IconButton-hoverBg": n.alpha(
                (n.vars || n).palette[o].main,
                (n.vars || n).palette.action.hoverOpacity
              ),
            },
          })),
        { props: { size: "small" }, style: { padding: 5, fontSize: n.typography.pxToRem(18) } },
        { props: { size: "large" }, style: { padding: 12, fontSize: n.typography.pxToRem(28) } },
      ],
      [`&.${h0.disabled}`]: {
        backgroundColor: "transparent",
        color: (n.vars || n).palette.action.disabled,
      },
      [`&.${h0.loading}`]: { color: "transparent" },
    }))
  ),
  LT = ce("span", { name: "MuiIconButton", slot: "LoadingIndicator" })(({ theme: n }) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: (n.vars || n).palette.action.disabled,
    variants: [{ props: { loading: !0 }, style: { display: "flex" } }],
  })),
  Bd = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiIconButton" }),
      {
        edge: s = !1,
        children: c,
        className: d,
        color: p = "default",
        disabled: m = !1,
        disableFocusRipple: h = !1,
        size: v = "medium",
        id: b,
        loading: R = null,
        loadingIndicator: M,
        ...T
      } = i,
      x = Pr(b),
      A = M ?? E.jsx(Qv, { "aria-labelledby": x, color: "inherit", size: 16 }),
      w = {
        ...i,
        edge: s,
        color: p,
        disabled: m,
        disableFocusRipple: h,
        loading: R,
        loadingIndicator: A,
        size: v,
      },
      k = kT(w)
    return E.jsxs(_T, {
      id: R ? x : b,
      className: pe(k.root, d),
      centerRipple: !0,
      focusRipple: !h,
      disabled: m || R,
      ref: l,
      ...T,
      ownerState: w,
      children: [
        typeof R == "boolean" &&
          E.jsx("span", {
            className: k.loadingWrapper,
            style: { display: "contents" },
            children: E.jsx(LT, { className: k.loadingIndicator, ownerState: w, children: R && A }),
          }),
        c,
      ],
    })
  })
function $T(n) {
  return Te("MuiTypography", n)
}
const g0 = Re("MuiTypography", [
    "root",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "inherit",
    "button",
    "caption",
    "overline",
    "alignLeft",
    "alignRight",
    "alignCenter",
    "alignJustify",
    "noWrap",
    "gutterBottom",
    "paragraph",
  ]),
  UT = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  HT = IE(),
  PT = (n) => {
    const { align: o, gutterBottom: l, noWrap: i, paragraph: s, variant: c, classes: d } = n,
      p = {
        root: [
          "root",
          c,
          n.align !== "inherit" && `align${ie(o)}`,
          l && "gutterBottom",
          i && "noWrap",
          s && "paragraph",
        ],
      }
    return Me(p, $T, d)
  },
  IT = ce("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [
        o.root,
        l.variant && o[l.variant],
        l.align !== "inherit" && o[`align${ie(l.align)}`],
        l.noWrap && o.noWrap,
        l.gutterBottom && o.gutterBottom,
        l.paragraph && o.paragraph,
      ]
    },
  })(
    De(({ theme: n }) => ({
      margin: 0,
      variants: [
        {
          props: { variant: "inherit" },
          style: { font: "inherit", lineHeight: "inherit", letterSpacing: "inherit" },
        },
        ...Object.entries(n.typography)
          .filter(([o, l]) => o !== "inherit" && l && typeof l == "object")
          .map(([o, l]) => ({ props: { variant: o }, style: l })),
        ...Object.entries(n.palette)
          .filter(Jt())
          .map(([o]) => ({ props: { color: o }, style: { color: (n.vars || n).palette[o].main } })),
        ...Object.entries(n.palette?.text || {})
          .filter(([, o]) => typeof o == "string")
          .map(([o]) => ({
            props: { color: `text${ie(o)}` },
            style: { color: (n.vars || n).palette.text[o] },
          })),
        {
          props: ({ ownerState: o }) => o.align !== "inherit",
          style: { textAlign: "var(--Typography-textAlign)" },
        },
        {
          props: ({ ownerState: o }) => o.noWrap,
          style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
        },
        { props: ({ ownerState: o }) => o.gutterBottom, style: { marginBottom: "0.35em" } },
        { props: ({ ownerState: o }) => o.paragraph, style: { marginBottom: 16 } },
      ],
    }))
  ),
  y0 = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  kt = y.forwardRef(function (o, l) {
    const { color: i, ...s } = Ae({ props: o, name: "MuiTypography" }),
      c = !UT[i],
      d = HT({ ...s, ...(c && { color: i }) }),
      {
        align: p = "inherit",
        className: m,
        component: h,
        gutterBottom: v = !1,
        noWrap: b = !1,
        paragraph: R = !1,
        variant: M = "body1",
        variantMapping: T = y0,
        ...x
      } = d,
      A = {
        ...d,
        align: p,
        color: i,
        className: m,
        component: h,
        gutterBottom: v,
        noWrap: b,
        paragraph: R,
        variant: M,
        variantMapping: T,
      },
      w = h || (R ? "p" : T[M] || y0[M]) || "span",
      k = PT(A)
    return E.jsx(IT, {
      as: w,
      ref: l,
      className: pe(k.root, m),
      ...x,
      ownerState: A,
      style: { ...(p !== "inherit" && { "--Typography-textAlign": p }), ...x.style },
    })
  })
function qT(n) {
  return Te("MuiAppBar", n)
}
Re("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
])
const VT = (n) => {
    const { color: o, position: l, classes: i } = n,
      s = { root: ["root", `color${ie(o)}`, `position${ie(l)}`] }
    return Me(s, qT, i)
  },
  v0 = (n, o) => (n ? `${n?.replace(")", "")}, ${o})` : o),
  GT = ce(sa, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.root, o[`position${ie(l.position)}`], o[`color${ie(l.color)}`]]
    },
  })(
    De(({ theme: n }) => ({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
      flexShrink: 0,
      variants: [
        {
          props: { position: "fixed" },
          style: {
            position: "fixed",
            zIndex: (n.vars || n).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
            "@media print": { position: "absolute" },
          },
        },
        {
          props: { position: "absolute" },
          style: {
            position: "absolute",
            zIndex: (n.vars || n).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        {
          props: { position: "sticky" },
          style: {
            position: "sticky",
            zIndex: (n.vars || n).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        { props: { position: "static" }, style: { position: "static" } },
        { props: { position: "relative" }, style: { position: "relative" } },
        { props: { color: "inherit" }, style: { "--AppBar-color": "inherit" } },
        {
          props: { color: "default" },
          style: {
            "--AppBar-background": n.vars ? n.vars.palette.AppBar.defaultBg : n.palette.grey[100],
            "--AppBar-color": n.vars
              ? n.vars.palette.text.primary
              : n.palette.getContrastText(n.palette.grey[100]),
            ...n.applyStyles("dark", {
              "--AppBar-background": n.vars ? n.vars.palette.AppBar.defaultBg : n.palette.grey[900],
              "--AppBar-color": n.vars
                ? n.vars.palette.text.primary
                : n.palette.getContrastText(n.palette.grey[900]),
            }),
          },
        },
        ...Object.entries(n.palette)
          .filter(Jt(["contrastText"]))
          .map(([o]) => ({
            props: { color: o },
            style: {
              "--AppBar-background": (n.vars ?? n).palette[o].main,
              "--AppBar-color": (n.vars ?? n).palette[o].contrastText,
            },
          })),
        {
          props: (o) => o.enableColorOnDark === !0 && !["inherit", "transparent"].includes(o.color),
          style: { backgroundColor: "var(--AppBar-background)", color: "var(--AppBar-color)" },
        },
        {
          props: (o) => o.enableColorOnDark === !1 && !["inherit", "transparent"].includes(o.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...n.applyStyles("dark", {
              backgroundColor: n.vars
                ? v0(n.vars.palette.AppBar.darkBg, "var(--AppBar-background)")
                : null,
              color: n.vars ? v0(n.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null,
            }),
          },
        },
        {
          props: { color: "transparent" },
          style: {
            "--AppBar-background": "transparent",
            "--AppBar-color": "inherit",
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...n.applyStyles("dark", { backgroundImage: "none" }),
          },
        },
      ],
    }))
  ),
  YT = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiAppBar" }),
      {
        className: s,
        color: c = "primary",
        enableColorOnDark: d = !1,
        position: p = "fixed",
        ...m
      } = i,
      h = { ...i, color: c, position: p, enableColorOnDark: d },
      v = VT(h)
    return E.jsx(GT, {
      square: !0,
      component: "header",
      ownerState: h,
      elevation: 4,
      className: pe(v.root, s, p === "fixed" && "mui-fixed"),
      ref: l,
      ...m,
    })
  })
function FT(n) {
  const {
      elementType: o,
      externalSlotProps: l,
      ownerState: i,
      skipResolvingSlotProps: s = !1,
      ...c
    } = n,
    d = s ? {} : Xv(l, i),
    { props: p, internalRef: m } = Wv({ ...c, externalSlotProps: d }),
    h = Ut(m, d?.ref, n.additionalProps?.ref)
  return Fv(o, { ...p, ref: h }, i)
}
function pi(n) {
  return parseInt(y.version, 10) >= 19 ? n?.props?.ref || null : n?.ref || null
}
function XT(n) {
  return typeof n == "function" ? n() : n
}
const KT = y.forwardRef(function (o, l) {
    const { children: i, container: s, disablePortal: c = !1 } = o,
      [d, p] = y.useState(null),
      m = Ut(y.isValidElement(i) ? pi(i) : null, l)
    if (
      (Gn(() => {
        c || p(XT(s) || document.body)
      }, [s, c]),
      Gn(() => {
        if (d && !c)
          return (
            c0(l, d),
            () => {
              c0(l, null)
            }
          )
      }, [l, d, c]),
      c)
    ) {
      if (y.isValidElement(i)) {
        const h = { ref: m }
        return y.cloneElement(i, h)
      }
      return i
    }
    return d && Vv.createPortal(i, d)
  }),
  WT = mt(
    E.jsx("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
    })
  )
function QT(n) {
  return Te("MuiChip", n)
}
const _e = Re("MuiChip", [
    "root",
    "sizeSmall",
    "sizeMedium",
    "colorDefault",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "clickable",
    "clickableColorPrimary",
    "clickableColorSecondary",
    "deletable",
    "deletableColorPrimary",
    "deletableColorSecondary",
    "outlined",
    "filled",
    "outlinedPrimary",
    "outlinedSecondary",
    "filledPrimary",
    "filledSecondary",
    "avatar",
    "avatarSmall",
    "avatarMedium",
    "avatarColorPrimary",
    "avatarColorSecondary",
    "icon",
    "iconSmall",
    "iconMedium",
    "iconColorPrimary",
    "iconColorSecondary",
    "label",
    "labelSmall",
    "labelMedium",
    "deleteIcon",
    "deleteIconSmall",
    "deleteIconMedium",
    "deleteIconColorPrimary",
    "deleteIconColorSecondary",
    "deleteIconOutlinedColorPrimary",
    "deleteIconOutlinedColorSecondary",
    "deleteIconFilledColorPrimary",
    "deleteIconFilledColorSecondary",
    "focusVisible",
  ]),
  ZT = (n) => {
    const {
        classes: o,
        disabled: l,
        size: i,
        color: s,
        iconColor: c,
        onDelete: d,
        clickable: p,
        variant: m,
      } = n,
      h = {
        root: [
          "root",
          m,
          l && "disabled",
          `size${ie(i)}`,
          `color${ie(s)}`,
          p && "clickable",
          p && `clickableColor${ie(s)}`,
          d && "deletable",
          d && `deletableColor${ie(s)}`,
          `${m}${ie(s)}`,
        ],
        label: ["label", `label${ie(i)}`],
        avatar: ["avatar", `avatar${ie(i)}`, `avatarColor${ie(s)}`],
        icon: ["icon", `icon${ie(i)}`, `iconColor${ie(c)}`],
        deleteIcon: [
          "deleteIcon",
          `deleteIcon${ie(i)}`,
          `deleteIconColor${ie(s)}`,
          `deleteIcon${ie(m)}Color${ie(s)}`,
        ],
      }
    return Me(h, QT, o)
  },
  JT = ce("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n,
        { color: i, iconColor: s, clickable: c, onDelete: d, size: p, variant: m } = l
      return [
        { [`& .${_e.avatar}`]: o.avatar },
        { [`& .${_e.avatar}`]: o[`avatar${ie(p)}`] },
        { [`& .${_e.avatar}`]: o[`avatarColor${ie(i)}`] },
        { [`& .${_e.icon}`]: o.icon },
        { [`& .${_e.icon}`]: o[`icon${ie(p)}`] },
        { [`& .${_e.icon}`]: o[`iconColor${ie(s)}`] },
        { [`& .${_e.deleteIcon}`]: o.deleteIcon },
        { [`& .${_e.deleteIcon}`]: o[`deleteIcon${ie(p)}`] },
        { [`& .${_e.deleteIcon}`]: o[`deleteIconColor${ie(i)}`] },
        { [`& .${_e.deleteIcon}`]: o[`deleteIcon${ie(m)}Color${ie(i)}`] },
        o.root,
        o[`size${ie(p)}`],
        o[`color${ie(i)}`],
        c && o.clickable,
        c && i !== "default" && o[`clickableColor${ie(i)}`],
        d && o.deletable,
        d && i !== "default" && o[`deletableColor${ie(i)}`],
        o[m],
        o[`${m}${ie(i)}`],
      ]
    },
  })(
    De(({ theme: n }) => {
      const o = n.palette.mode === "light" ? n.palette.grey[700] : n.palette.grey[300]
      return {
        maxWidth: "100%",
        fontFamily: n.typography.fontFamily,
        fontSize: n.typography.pxToRem(13),
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        lineHeight: 1.5,
        color: (n.vars || n).palette.text.primary,
        backgroundColor: (n.vars || n).palette.action.selected,
        borderRadius: 32 / 2,
        whiteSpace: "nowrap",
        transition: n.transitions.create(["background-color", "box-shadow"]),
        cursor: "unset",
        outline: 0,
        textDecoration: "none",
        border: 0,
        padding: 0,
        verticalAlign: "middle",
        boxSizing: "border-box",
        [`&.${_e.disabled}`]: {
          opacity: (n.vars || n).palette.action.disabledOpacity,
          pointerEvents: "none",
        },
        [`& .${_e.avatar}`]: {
          marginLeft: 5,
          marginRight: -6,
          width: 24,
          height: 24,
          color: n.vars ? n.vars.palette.Chip.defaultAvatarColor : o,
          fontSize: n.typography.pxToRem(12),
        },
        [`& .${_e.avatarColorPrimary}`]: {
          color: (n.vars || n).palette.primary.contrastText,
          backgroundColor: (n.vars || n).palette.primary.dark,
        },
        [`& .${_e.avatarColorSecondary}`]: {
          color: (n.vars || n).palette.secondary.contrastText,
          backgroundColor: (n.vars || n).palette.secondary.dark,
        },
        [`& .${_e.avatarSmall}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: n.typography.pxToRem(10),
        },
        [`& .${_e.icon}`]: { marginLeft: 5, marginRight: -6 },
        [`& .${_e.deleteIcon}`]: {
          WebkitTapHighlightColor: "transparent",
          color: n.alpha((n.vars || n).palette.text.primary, 0.26),
          fontSize: 22,
          cursor: "pointer",
          margin: "0 5px 0 -6px",
          "&:hover": { color: n.alpha((n.vars || n).palette.text.primary, 0.4) },
        },
        variants: [
          {
            props: { size: "small" },
            style: {
              height: 24,
              [`& .${_e.icon}`]: { fontSize: 18, marginLeft: 4, marginRight: -4 },
              [`& .${_e.deleteIcon}`]: { fontSize: 16, marginRight: 4, marginLeft: -4 },
            },
          },
          ...Object.entries(n.palette)
            .filter(Jt(["contrastText"]))
            .map(([l]) => ({
              props: { color: l },
              style: {
                backgroundColor: (n.vars || n).palette[l].main,
                color: (n.vars || n).palette[l].contrastText,
                [`& .${_e.deleteIcon}`]: {
                  color: n.alpha((n.vars || n).palette[l].contrastText, 0.7),
                  "&:hover, &:active": { color: (n.vars || n).palette[l].contrastText },
                },
              },
            })),
          {
            props: (l) => l.iconColor === l.color,
            style: {
              [`& .${_e.icon}`]: { color: n.vars ? n.vars.palette.Chip.defaultIconColor : o },
            },
          },
          {
            props: (l) => l.iconColor === l.color && l.color !== "default",
            style: { [`& .${_e.icon}`]: { color: "inherit" } },
          },
          {
            props: { onDelete: !0 },
            style: {
              [`&.${_e.focusVisible}`]: {
                backgroundColor: n.alpha(
                  (n.vars || n).palette.action.selected,
                  `${(n.vars || n).palette.action.selectedOpacity} + ${(n.vars || n).palette.action.focusOpacity}`
                ),
              },
            },
          },
          ...Object.entries(n.palette)
            .filter(Jt(["dark"]))
            .map(([l]) => ({
              props: { color: l, onDelete: !0 },
              style: { [`&.${_e.focusVisible}`]: { background: (n.vars || n).palette[l].dark } },
            })),
          {
            props: { clickable: !0 },
            style: {
              userSelect: "none",
              WebkitTapHighlightColor: "transparent",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: n.alpha(
                  (n.vars || n).palette.action.selected,
                  `${(n.vars || n).palette.action.selectedOpacity} + ${(n.vars || n).palette.action.hoverOpacity}`
                ),
              },
              [`&.${_e.focusVisible}`]: {
                backgroundColor: n.alpha(
                  (n.vars || n).palette.action.selected,
                  `${(n.vars || n).palette.action.selectedOpacity} + ${(n.vars || n).palette.action.focusOpacity}`
                ),
              },
              "&:active": { boxShadow: (n.vars || n).shadows[1] },
            },
          },
          ...Object.entries(n.palette)
            .filter(Jt(["dark"]))
            .map(([l]) => ({
              props: { color: l, clickable: !0 },
              style: {
                [`&:hover, &.${_e.focusVisible}`]: {
                  backgroundColor: (n.vars || n).palette[l].dark,
                },
              },
            })),
          {
            props: { variant: "outlined" },
            style: {
              backgroundColor: "transparent",
              border: n.vars
                ? `1px solid ${n.vars.palette.Chip.defaultBorder}`
                : `1px solid ${n.palette.mode === "light" ? n.palette.grey[400] : n.palette.grey[700]}`,
              [`&.${_e.clickable}:hover`]: { backgroundColor: (n.vars || n).palette.action.hover },
              [`&.${_e.focusVisible}`]: { backgroundColor: (n.vars || n).palette.action.focus },
              [`& .${_e.avatar}`]: { marginLeft: 4 },
              [`& .${_e.avatarSmall}`]: { marginLeft: 2 },
              [`& .${_e.icon}`]: { marginLeft: 4 },
              [`& .${_e.iconSmall}`]: { marginLeft: 2 },
              [`& .${_e.deleteIcon}`]: { marginRight: 5 },
              [`& .${_e.deleteIconSmall}`]: { marginRight: 3 },
            },
          },
          ...Object.entries(n.palette)
            .filter(Jt())
            .map(([l]) => ({
              props: { variant: "outlined", color: l },
              style: {
                color: (n.vars || n).palette[l].main,
                border: `1px solid ${n.alpha((n.vars || n).palette[l].main, 0.7)}`,
                [`&.${_e.clickable}:hover`]: {
                  backgroundColor: n.alpha(
                    (n.vars || n).palette[l].main,
                    (n.vars || n).palette.action.hoverOpacity
                  ),
                },
                [`&.${_e.focusVisible}`]: {
                  backgroundColor: n.alpha(
                    (n.vars || n).palette[l].main,
                    (n.vars || n).palette.action.focusOpacity
                  ),
                },
                [`& .${_e.deleteIcon}`]: {
                  color: n.alpha((n.vars || n).palette[l].main, 0.7),
                  "&:hover, &:active": { color: (n.vars || n).palette[l].main },
                },
              },
            })),
        ],
      }
    })
  ),
  eR = ce("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n,
        { size: i } = l
      return [o.label, o[`label${ie(i)}`]]
    },
  })({
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: "nowrap",
    variants: [
      { props: { variant: "outlined" }, style: { paddingLeft: 11, paddingRight: 11 } },
      { props: { size: "small" }, style: { paddingLeft: 8, paddingRight: 8 } },
      { props: { size: "small", variant: "outlined" }, style: { paddingLeft: 7, paddingRight: 7 } },
    ],
  })
function b0(n) {
  return n.key === "Backspace" || n.key === "Delete"
}
const tR = y.forwardRef(function (o, l) {
  const i = Ae({ props: o, name: "MuiChip" }),
    {
      avatar: s,
      className: c,
      clickable: d,
      color: p = "default",
      component: m,
      deleteIcon: h,
      disabled: v = !1,
      icon: b,
      label: R,
      onClick: M,
      onDelete: T,
      onKeyDown: x,
      onKeyUp: A,
      size: w = "medium",
      variant: k = "filled",
      tabIndex: O,
      skipFocusWhenDisabled: N = !1,
      slots: B = {},
      slotProps: _ = {},
      ...U
    } = i,
    H = y.useRef(null),
    X = Ut(H, l),
    Q = (le) => {
      ;(le.stopPropagation(), T && T(le))
    },
    te = (le) => {
      ;(le.currentTarget === le.target && b0(le) && le.preventDefault(), x && x(le))
    },
    C = (le) => {
      ;(le.currentTarget === le.target && T && b0(le) && T(le), A && A(le))
    },
    W = d !== !1 && M ? !0 : d,
    G = W || T ? Ba : m || "div",
    Y = {
      ...i,
      component: G,
      disabled: v,
      size: w,
      color: p,
      iconColor: (y.isValidElement(b) && b.props.color) || p,
      onDelete: !!T,
      clickable: W,
      variant: k,
    },
    z = ZT(Y),
    F =
      G === Ba
        ? {
            component: m || "div",
            focusVisibleClassName: z.focusVisible,
            ...(T && { disableRipple: !0 }),
          }
        : {}
  let re = null
  T &&
    (re =
      h && y.isValidElement(h)
        ? y.cloneElement(h, { className: pe(h.props.className, z.deleteIcon), onClick: Q })
        : E.jsx(WT, { className: z.deleteIcon, onClick: Q }))
  let ne = null
  s &&
    y.isValidElement(s) &&
    (ne = y.cloneElement(s, { className: pe(z.avatar, s.props.className) }))
  let fe = null
  b && y.isValidElement(b) && (fe = y.cloneElement(b, { className: pe(z.icon, b.props.className) }))
  const D = { slots: B, slotProps: _ },
    [q, ae] = Le("root", {
      elementType: JT,
      externalForwardedProps: { ...D, ...U },
      ownerState: Y,
      shouldForwardComponentProp: !0,
      ref: X,
      className: pe(z.root, c),
      additionalProps: { disabled: W && v ? !0 : void 0, tabIndex: N && v ? -1 : O, ...F },
      getSlotProps: (le) => ({
        ...le,
        onClick: (de) => {
          ;(le.onClick?.(de), M?.(de))
        },
        onKeyDown: (de) => {
          ;(le.onKeyDown?.(de), te(de))
        },
        onKeyUp: (de) => {
          ;(le.onKeyUp?.(de), C(de))
        },
      }),
    }),
    [se, ue] = Le("label", {
      elementType: eR,
      externalForwardedProps: D,
      ownerState: Y,
      className: z.label,
    })
  return E.jsxs(q, { as: G, ...ae, children: [ne || fe, E.jsx(se, { ...ue, children: R }), re] })
})
function ks(n) {
  return parseInt(n, 10) || 0
}
const nR = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
}
function aR(n) {
  for (const o in n) return !1
  return !0
}
function S0(n) {
  return aR(n) || (n.outerHeightStyle === 0 && !n.overflowing)
}
const oR = y.forwardRef(function (o, l) {
  const { onChange: i, maxRows: s, minRows: c = 1, style: d, value: p, ...m } = o,
    { current: h } = y.useRef(p != null),
    v = y.useRef(null),
    b = Ut(l, v),
    R = y.useRef(null),
    M = y.useRef(null),
    T = y.useCallback(() => {
      const O = v.current,
        N = M.current
      if (!O || !N) return
      const _ = Da(O).getComputedStyle(O)
      if (_.width === "0px") return { outerHeightStyle: 0, overflowing: !1 }
      ;((N.style.width = _.width),
        (N.value = O.value || o.placeholder || "x"),
        N.value.slice(-1) ===
          `
` && (N.value += " "))
      const U = _.boxSizing,
        H = ks(_.paddingBottom) + ks(_.paddingTop),
        X = ks(_.borderBottomWidth) + ks(_.borderTopWidth),
        Q = N.scrollHeight
      N.value = "x"
      const te = N.scrollHeight
      let C = Q
      ;(c && (C = Math.max(Number(c) * te, C)),
        s && (C = Math.min(Number(s) * te, C)),
        (C = Math.max(C, te)))
      const W = C + (U === "border-box" ? H + X : 0),
        G = Math.abs(C - Q) <= 1
      return { outerHeightStyle: W, overflowing: G }
    }, [s, c, o.placeholder]),
    x = $o(() => {
      const O = v.current,
        N = T()
      if (!O || !N || S0(N)) return !1
      const B = N.outerHeightStyle
      return R.current != null && R.current !== B
    }),
    A = y.useCallback(() => {
      const O = v.current,
        N = T()
      if (!O || !N || S0(N)) return
      const B = N.outerHeightStyle
      ;(R.current !== B && ((R.current = B), (O.style.height = `${B}px`)),
        (O.style.overflow = N.overflowing ? "hidden" : ""))
    }, [T]),
    w = y.useRef(-1)
  ;(Gn(() => {
    const O = Hv(A),
      N = v?.current
    if (!N) return
    const B = Da(N)
    B.addEventListener("resize", O)
    let _
    return (
      typeof ResizeObserver < "u" &&
        ((_ = new ResizeObserver(() => {
          x() &&
            (_.unobserve(N),
            cancelAnimationFrame(w.current),
            A(),
            (w.current = requestAnimationFrame(() => {
              _.observe(N)
            })))
        })),
        _.observe(N)),
      () => {
        ;(O.clear(),
          cancelAnimationFrame(w.current),
          B.removeEventListener("resize", O),
          _ && _.disconnect())
      }
    )
  }, [T, A, x]),
    Gn(() => {
      A()
    }))
  const k = (O) => {
    h || A()
    const N = O.target,
      B = N.value.length,
      _ = N.value.endsWith(`
`),
      U = N.selectionStart === B
    ;(_ && U && N.setSelectionRange(B, B), i && i(O))
  }
  return E.jsxs(y.Fragment, {
    children: [
      E.jsx("textarea", { value: p, onChange: k, ref: b, rows: c, style: d, ...m }),
      E.jsx("textarea", {
        "aria-hidden": !0,
        className: o.className,
        readOnly: !0,
        ref: M,
        tabIndex: -1,
        style: { ...nR.shadow, ...d, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  })
})
function Ir({ props: n, states: o, muiFormControl: l }) {
  return o.reduce((i, s) => ((i[s] = n[s]), l && typeof n[s] > "u" && (i[s] = l[s]), i), {})
}
const xu = y.createContext(void 0)
function co() {
  return y.useContext(xu)
}
function x0(n) {
  return n != null && !(Array.isArray(n) && n.length === 0)
}
function nu(n, o = !1) {
  return (
    n && ((x0(n.value) && n.value !== "") || (o && x0(n.defaultValue) && n.defaultValue !== ""))
  )
}
function rR(n) {
  return n.startAdornment
}
function lR(n) {
  return Te("MuiInputBase", n)
}
const Ur = Re("MuiInputBase", [
  "root",
  "formControl",
  "focused",
  "disabled",
  "adornedStart",
  "adornedEnd",
  "error",
  "sizeSmall",
  "multiline",
  "colorSecondary",
  "fullWidth",
  "hiddenLabel",
  "readOnly",
  "input",
  "inputSizeSmall",
  "inputMultiline",
  "inputTypeSearch",
  "inputAdornedStart",
  "inputAdornedEnd",
  "inputHiddenLabel",
])
var C0
const Cu = (n, o) => {
    const { ownerState: l } = n
    return [
      o.root,
      l.formControl && o.formControl,
      l.startAdornment && o.adornedStart,
      l.endAdornment && o.adornedEnd,
      l.error && o.error,
      l.size === "small" && o.sizeSmall,
      l.multiline && o.multiline,
      l.color && o[`color${ie(l.color)}`],
      l.fullWidth && o.fullWidth,
      l.hiddenLabel && o.hiddenLabel,
    ]
  },
  Eu = (n, o) => {
    const { ownerState: l } = n
    return [
      o.input,
      l.size === "small" && o.inputSizeSmall,
      l.multiline && o.inputMultiline,
      l.type === "search" && o.inputTypeSearch,
      l.startAdornment && o.inputAdornedStart,
      l.endAdornment && o.inputAdornedEnd,
      l.hiddenLabel && o.inputHiddenLabel,
    ]
  },
  iR = (n) => {
    const {
        classes: o,
        color: l,
        disabled: i,
        error: s,
        endAdornment: c,
        focused: d,
        formControl: p,
        fullWidth: m,
        hiddenLabel: h,
        multiline: v,
        readOnly: b,
        size: R,
        startAdornment: M,
        type: T,
      } = n,
      x = {
        root: [
          "root",
          `color${ie(l)}`,
          i && "disabled",
          s && "error",
          m && "fullWidth",
          d && "focused",
          p && "formControl",
          R && R !== "medium" && `size${ie(R)}`,
          v && "multiline",
          M && "adornedStart",
          c && "adornedEnd",
          h && "hiddenLabel",
          b && "readOnly",
        ],
        input: [
          "input",
          i && "disabled",
          T === "search" && "inputTypeSearch",
          v && "inputMultiline",
          R === "small" && "inputSizeSmall",
          h && "inputHiddenLabel",
          M && "inputAdornedStart",
          c && "inputAdornedEnd",
          b && "readOnly",
        ],
      }
    return Me(x, lR, o)
  },
  Tu = ce("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Cu })(
    De(({ theme: n }) => ({
      ...n.typography.body1,
      color: (n.vars || n).palette.text.primary,
      lineHeight: "1.4375em",
      boxSizing: "border-box",
      position: "relative",
      cursor: "text",
      display: "inline-flex",
      alignItems: "center",
      [`&.${Ur.disabled}`]: { color: (n.vars || n).palette.text.disabled, cursor: "default" },
      variants: [
        { props: ({ ownerState: o }) => o.multiline, style: { padding: "4px 0 5px" } },
        {
          props: ({ ownerState: o, size: l }) => o.multiline && l === "small",
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: o }) => o.fullWidth, style: { width: "100%" } },
      ],
    }))
  ),
  Ru = ce("input", { name: "MuiInputBase", slot: "Input", overridesResolver: Eu })(
    De(({ theme: n }) => {
      const o = n.palette.mode === "light",
        l = {
          color: "currentColor",
          ...(n.vars ? { opacity: n.vars.opacity.inputPlaceholder } : { opacity: o ? 0.42 : 0.5 }),
          transition: n.transitions.create("opacity", { duration: n.transitions.duration.shorter }),
        },
        i = { opacity: "0 !important" },
        s = n.vars ? { opacity: n.vars.opacity.inputPlaceholder } : { opacity: o ? 0.42 : 0.5 }
      return {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        "&::-webkit-input-placeholder": l,
        "&::-moz-placeholder": l,
        "&::-ms-input-placeholder": l,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${Ur.formControl} &`]: {
          "&::-webkit-input-placeholder": i,
          "&::-moz-placeholder": i,
          "&::-ms-input-placeholder": i,
          "&:focus::-webkit-input-placeholder": s,
          "&:focus::-moz-placeholder": s,
          "&:focus::-ms-input-placeholder": s,
        },
        [`&.${Ur.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (n.vars || n).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: c }) => !c.disableInjectingGlobalStyles,
            style: {
              animationName: "mui-auto-fill-cancel",
              animationDuration: "10ms",
              "&:-webkit-autofill": { animationDuration: "5000s", animationName: "mui-auto-fill" },
            },
          },
          { props: { size: "small" }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: c }) => c.multiline,
            style: { height: "auto", resize: "none", padding: 0, paddingTop: 0 },
          },
          { props: { type: "search" }, style: { MozAppearance: "textfield" } },
        ],
      }
    })
  ),
  E0 = ip({
    "@keyframes mui-auto-fill": { from: { display: "block" } },
    "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
  }),
  Mu = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiInputBase" }),
      {
        "aria-describedby": s,
        autoComplete: c,
        autoFocus: d,
        className: p,
        color: m,
        components: h = {},
        componentsProps: v = {},
        defaultValue: b,
        disabled: R,
        disableInjectingGlobalStyles: M,
        endAdornment: T,
        error: x,
        fullWidth: A = !1,
        id: w,
        inputComponent: k = "input",
        inputProps: O = {},
        inputRef: N,
        margin: B,
        maxRows: _,
        minRows: U,
        multiline: H = !1,
        name: X,
        onBlur: Q,
        onChange: te,
        onClick: C,
        onFocus: W,
        onKeyDown: G,
        onKeyUp: Y,
        placeholder: z,
        readOnly: F,
        renderSuffix: re,
        rows: ne,
        size: fe,
        slotProps: D = {},
        slots: q = {},
        startAdornment: ae,
        type: se = "text",
        value: ue,
        ...le
      } = i,
      de = O.value != null ? O.value : ue,
      { current: Be } = y.useRef(de != null),
      Se = y.useRef(),
      be = y.useCallback((ct) => {}, []),
      ze = Ut(Se, N, O.ref, be),
      [$e, pt] = y.useState(!1),
      Ee = co(),
      me = Ir({
        props: i,
        muiFormControl: Ee,
        states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"],
      })
    ;((me.focused = Ee ? Ee.focused : $e),
      y.useEffect(() => {
        !Ee && R && $e && (pt(!1), Q && Q())
      }, [Ee, R, $e, Q]))
    const Ze = Ee && Ee.onFilled,
      Ve = Ee && Ee.onEmpty,
      Ue = y.useCallback(
        (ct) => {
          nu(ct) ? Ze && Ze() : Ve && Ve()
        },
        [Ze, Ve]
      )
    Gn(() => {
      Be && Ue({ value: de })
    }, [de, Ue, Be])
    const Xe = (ct) => {
        ;(W && W(ct), O.onFocus && O.onFocus(ct), Ee && Ee.onFocus ? Ee.onFocus(ct) : pt(!0))
      },
      St = (ct) => {
        ;(Q && Q(ct), O.onBlur && O.onBlur(ct), Ee && Ee.onBlur ? Ee.onBlur(ct) : pt(!1))
      },
      ut = (ct, ...Ln) => {
        if (!Be) {
          const xn = ct.target || Se.current
          if (xn == null) throw new Error(Na(1))
          Ue({ value: xn.value })
        }
        ;(O.onChange && O.onChange(ct, ...Ln), te && te(ct, ...Ln))
      }
    y.useEffect(() => {
      Ue(Se.current)
    }, [])
    const ye = (ct) => {
      ;(Se.current && ct.currentTarget === ct.target && Se.current.focus(), C && C(ct))
    }
    let _n = k,
      He = O
    H &&
      _n === "input" &&
      (ne
        ? (He = { type: void 0, minRows: ne, maxRows: ne, ...He })
        : (He = { type: void 0, maxRows: _, minRows: U, ...He }),
      (_n = oR))
    const ua = (ct) => {
      Ue(ct.animationName === "mui-auto-fill-cancel" ? Se.current : { value: "x" })
    }
    y.useEffect(() => {
      Ee && Ee.setAdornedStart(!!ae)
    }, [Ee, ae])
    const yt = {
        ...i,
        color: me.color || "primary",
        disabled: me.disabled,
        endAdornment: T,
        error: me.error,
        focused: me.focused,
        formControl: Ee,
        fullWidth: A,
        hiddenLabel: me.hiddenLabel,
        multiline: H,
        size: me.size,
        startAdornment: ae,
        type: se,
      },
      Ge = iR(yt),
      Ct = q.root || h.Root || Tu,
      _t = D.root || v.root || {},
      fn = q.input || h.Input || Ru
    return (
      (He = { ...He, ...(D.input ?? v.input) }),
      E.jsxs(y.Fragment, {
        children: [
          !M && typeof E0 == "function" && (C0 || (C0 = E.jsx(E0, {}))),
          E.jsxs(Ct, {
            ..._t,
            ref: l,
            onClick: ye,
            ...le,
            ...(!$r(Ct) && { ownerState: { ...yt, ..._t.ownerState } }),
            className: pe(Ge.root, _t.className, p, F && "MuiInputBase-readOnly"),
            children: [
              ae,
              E.jsx(xu.Provider, {
                value: null,
                children: E.jsx(fn, {
                  "aria-invalid": me.error,
                  "aria-describedby": s,
                  autoComplete: c,
                  autoFocus: d,
                  defaultValue: b,
                  disabled: me.disabled,
                  id: w,
                  onAnimationStart: ua,
                  name: X,
                  placeholder: z,
                  readOnly: F,
                  required: me.required,
                  rows: ne,
                  value: de,
                  onKeyDown: G,
                  onKeyUp: Y,
                  type: se,
                  ...He,
                  ...(!$r(fn) && { as: _n, ownerState: { ...yt, ...He.ownerState } }),
                  ref: ze,
                  className: pe(Ge.input, He.className, F && "MuiInputBase-readOnly"),
                  onBlur: St,
                  onChange: ut,
                  onFocus: Xe,
                }),
              }),
              T,
              re ? re({ ...me, startAdornment: ae }) : null,
            ],
          }),
        ],
      })
    )
  })
function sR(n) {
  return Te("MuiInput", n)
}
const Hl = { ...Ur, ...Re("MuiInput", ["root", "underline", "input"]) }
function uR(n) {
  return Te("MuiOutlinedInput", n)
}
const ta = { ...Ur, ...Re("MuiOutlinedInput", ["root", "notchedOutline", "input"]) }
function cR(n) {
  return Te("MuiFilledInput", n)
}
const Do = {
    ...Ur,
    ...Re("MuiFilledInput", [
      "root",
      "underline",
      "input",
      "adornedStart",
      "adornedEnd",
      "sizeSmall",
      "multiline",
      "hiddenLabel",
    ]),
  },
  fR = mt(E.jsx("path", { d: "M7 10l5 5 5-5z" })),
  dR = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  jd = y.forwardRef(function (o, l) {
    const i = di(),
      s = {
        enter: i.transitions.duration.enteringScreen,
        exit: i.transitions.duration.leavingScreen,
      },
      {
        addEndListener: c,
        appear: d = !0,
        children: p,
        easing: m,
        in: h,
        onEnter: v,
        onEntered: b,
        onEntering: R,
        onExit: M,
        onExited: T,
        onExiting: x,
        style: A,
        timeout: w = s,
        TransitionComponent: k = Xn,
        ...O
      } = o,
      N = y.useRef(null),
      B = Ut(N, pi(p), l),
      _ = (G) => (Y) => {
        if (G) {
          const z = N.current
          Y === void 0 ? G(z) : G(z, Y)
        }
      },
      U = _(R),
      H = _((G, Y) => {
        Yv(G)
        const z = Lr({ style: A, timeout: w, easing: m }, { mode: "enter" })
        ;((G.style.webkitTransition = i.transitions.create("opacity", z)),
          (G.style.transition = i.transitions.create("opacity", z)),
          v && v(G, Y))
      }),
      X = _(b),
      Q = _(x),
      te = _((G) => {
        const Y = Lr({ style: A, timeout: w, easing: m }, { mode: "exit" })
        ;((G.style.webkitTransition = i.transitions.create("opacity", Y)),
          (G.style.transition = i.transitions.create("opacity", Y)),
          M && M(G))
      }),
      C = _(T),
      W = (G) => {
        c && c(N.current, G)
      }
    return E.jsx(k, {
      appear: d,
      in: h,
      nodeRef: N,
      onEnter: H,
      onEntered: X,
      onEntering: U,
      onExit: te,
      onExited: C,
      onExiting: Q,
      addEndListener: W,
      timeout: w,
      ...O,
      children: (G, { ownerState: Y, ...z }) =>
        y.cloneElement(p, {
          style: {
            opacity: 0,
            visibility: G === "exited" && !h ? "hidden" : void 0,
            ...dR[G],
            ...A,
            ...p.props.style,
          },
          ref: B,
          ...z,
        }),
    })
  })
function pR(n) {
  return Te("MuiBackdrop", n)
}
Re("MuiBackdrop", ["root", "invisible"])
const mR = (n) => {
    const { classes: o, invisible: l } = n
    return Me({ root: ["root", l && "invisible"] }, pR, o)
  },
  hR = ce("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.root, l.invisible && o.invisible]
    },
  })({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
    variants: [{ props: { invisible: !0 }, style: { backgroundColor: "transparent" } }],
  }),
  Zv = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiBackdrop" }),
      {
        children: s,
        className: c,
        component: d = "div",
        invisible: p = !1,
        open: m,
        components: h = {},
        componentsProps: v = {},
        slotProps: b = {},
        slots: R = {},
        TransitionComponent: M,
        transitionDuration: T,
        ...x
      } = i,
      A = { ...i, component: d, invisible: p },
      w = mR(A),
      k = { transition: M, root: h.Root, ...R },
      O = { ...v, ...b },
      N = { component: d, slots: k, slotProps: O },
      [B, _] = Le("root", {
        elementType: hR,
        externalForwardedProps: N,
        className: pe(w.root, c),
        ownerState: A,
      }),
      [U, H] = Le("transition", { elementType: jd, externalForwardedProps: N, ownerState: A })
    return E.jsx(U, {
      in: m,
      timeout: T,
      ...x,
      ...H,
      children: E.jsx(B, { "aria-hidden": !0, ..._, classes: w, ref: l, children: s }),
    })
  })
function gR(n) {
  return Te("MuiBottomNavigation", n)
}
Re("MuiBottomNavigation", ["root"])
const yR = (n) => {
    const { classes: o } = n
    return Me({ root: ["root"] }, gR, o)
  },
  vR = ce("div", { name: "MuiBottomNavigation", slot: "Root" })(
    De(({ theme: n }) => ({
      display: "flex",
      justifyContent: "center",
      height: 56,
      backgroundColor: (n.vars || n).palette.background.paper,
    }))
  ),
  bR = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiBottomNavigation" }),
      {
        children: s,
        className: c,
        component: d = "div",
        onChange: p,
        showLabels: m = !1,
        value: h,
        ...v
      } = i,
      b = { ...i, component: d, showLabels: m },
      R = yR(b)
    return E.jsx(vR, {
      as: d,
      className: pe(R.root, c),
      ref: l,
      ownerState: b,
      ...v,
      children: y.Children.map(s, (M, T) => {
        if (!y.isValidElement(M)) return null
        const x = M.props.value === void 0 ? T : M.props.value
        return y.cloneElement(M, {
          selected: x === h,
          showLabel: M.props.showLabel !== void 0 ? M.props.showLabel : m,
          value: x,
          onChange: p,
        })
      }),
    })
  })
function SR(n) {
  return Te("MuiBottomNavigationAction", n)
}
const Jv = Re("MuiBottomNavigationAction", ["root", "iconOnly", "selected", "label"]),
  xR = (n) => {
    const { classes: o, showLabel: l, selected: i } = n
    return Me(
      {
        root: ["root", !l && !i && "iconOnly", i && "selected"],
        label: ["label", !l && !i && "iconOnly", i && "selected"],
      },
      SR,
      o
    )
  },
  CR = ce(Ba, {
    name: "MuiBottomNavigationAction",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.root, !l.showLabel && !l.selected && o.iconOnly]
    },
  })(
    De(({ theme: n }) => ({
      transition: n.transitions.create(["color", "padding-top"], {
        duration: n.transitions.duration.short,
      }),
      padding: "0px 12px",
      minWidth: 80,
      maxWidth: 168,
      color: (n.vars || n).palette.text.secondary,
      flexDirection: "column",
      flex: "1",
      [`&.${Jv.selected}`]: { color: (n.vars || n).palette.primary.main },
      variants: [
        { props: ({ showLabel: o, selected: l }) => !o && !l, style: { paddingTop: 14 } },
        {
          props: ({ showLabel: o, selected: l, label: i }) => !o && !l && !i,
          style: { paddingTop: 0 },
        },
      ],
    }))
  ),
  ER = ce("span", { name: "MuiBottomNavigationAction", slot: "Label" })(
    De(({ theme: n }) => ({
      fontFamily: n.typography.fontFamily,
      fontSize: n.typography.pxToRem(12),
      opacity: 1,
      transition: "font-size 0.2s, opacity 0.2s",
      transitionDelay: "0.1s",
      [`&.${Jv.selected}`]: { fontSize: n.typography.pxToRem(14) },
      variants: [
        {
          props: ({ showLabel: o, selected: l }) => !o && !l,
          style: { opacity: 0, transitionDelay: "0s" },
        },
      ],
    }))
  ),
  _s = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiBottomNavigationAction" }),
      {
        className: s,
        icon: c,
        label: d,
        onChange: p,
        onClick: m,
        selected: h,
        showLabel: v,
        value: b,
        slots: R = {},
        slotProps: M = {},
        ...T
      } = i,
      x = i,
      A = xR(x),
      w = (U) => {
        ;(p && p(U, b), m && m(U))
      },
      k = { slots: R, slotProps: M },
      [O, N] = Le("root", {
        elementType: CR,
        externalForwardedProps: { ...k, ...T },
        shouldForwardComponentProp: !0,
        ownerState: x,
        ref: l,
        className: pe(A.root, s),
        additionalProps: { focusRipple: !0 },
        getSlotProps: (U) => ({
          ...U,
          onClick: (H) => {
            ;(U.onClick?.(H), w(H))
          },
        }),
      }),
      [B, _] = Le("label", {
        elementType: ER,
        externalForwardedProps: k,
        ownerState: x,
        className: A.label,
      })
    return E.jsxs(O, { ...N, children: [c, E.jsx(B, { ..._, children: d })] })
  }),
  TR = Re("MuiBox", ["root"]),
  RR = Su(),
  ot = sC({
    themeId: la,
    defaultTheme: RR,
    defaultClassName: TR.root,
    generateClassName: vv.generate,
  })
function MR(n) {
  return Te("MuiButton", n)
}
const Bo = Re("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
    "loading",
    "loadingWrapper",
    "loadingIconPlaceholder",
    "loadingIndicator",
    "loadingPositionCenter",
    "loadingPositionStart",
    "loadingPositionEnd",
  ]),
  AR = y.createContext({}),
  wR = y.createContext(void 0),
  zR = (n) => {
    const {
        color: o,
        disableElevation: l,
        fullWidth: i,
        size: s,
        variant: c,
        loading: d,
        loadingPosition: p,
        classes: m,
      } = n,
      h = {
        root: [
          "root",
          d && "loading",
          c,
          `${c}${ie(o)}`,
          `size${ie(s)}`,
          `${c}Size${ie(s)}`,
          `color${ie(o)}`,
          l && "disableElevation",
          i && "fullWidth",
          d && `loadingPosition${ie(p)}`,
        ],
        startIcon: ["icon", "startIcon", `iconSize${ie(s)}`],
        endIcon: ["icon", "endIcon", `iconSize${ie(s)}`],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      },
      v = Me(h, MR, m)
    return { ...m, ...v }
  },
  eb = [
    { props: { size: "small" }, style: { "& > *:nth-of-type(1)": { fontSize: 18 } } },
    { props: { size: "medium" }, style: { "& > *:nth-of-type(1)": { fontSize: 20 } } },
    { props: { size: "large" }, style: { "& > *:nth-of-type(1)": { fontSize: 22 } } },
  ],
  OR = ce(Ba, {
    shouldForwardProp: (n) => tn(n) || n === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [
        o.root,
        o[l.variant],
        o[`${l.variant}${ie(l.color)}`],
        o[`size${ie(l.size)}`],
        o[`${l.variant}Size${ie(l.size)}`],
        l.color === "inherit" && o.colorInherit,
        l.disableElevation && o.disableElevation,
        l.fullWidth && o.fullWidth,
        l.loading && o.loading,
      ]
    },
  })(
    De(({ theme: n }) => {
      const o = n.palette.mode === "light" ? n.palette.grey[300] : n.palette.grey[800],
        l = n.palette.mode === "light" ? n.palette.grey.A100 : n.palette.grey[700]
      return {
        ...n.typography.button,
        minWidth: 64,
        padding: "6px 16px",
        border: 0,
        borderRadius: (n.vars || n).shape.borderRadius,
        transition: n.transitions.create(
          ["background-color", "box-shadow", "border-color", "color"],
          { duration: n.transitions.duration.short }
        ),
        "&:hover": { textDecoration: "none" },
        [`&.${Bo.disabled}`]: { color: (n.vars || n).palette.action.disabled },
        variants: [
          {
            props: { variant: "contained" },
            style: {
              color: "var(--variant-containedColor)",
              backgroundColor: "var(--variant-containedBg)",
              boxShadow: (n.vars || n).shadows[2],
              "&:hover": {
                boxShadow: (n.vars || n).shadows[4],
                "@media (hover: none)": { boxShadow: (n.vars || n).shadows[2] },
              },
              "&:active": { boxShadow: (n.vars || n).shadows[8] },
              [`&.${Bo.focusVisible}`]: { boxShadow: (n.vars || n).shadows[6] },
              [`&.${Bo.disabled}`]: {
                color: (n.vars || n).palette.action.disabled,
                boxShadow: (n.vars || n).shadows[0],
                backgroundColor: (n.vars || n).palette.action.disabledBackground,
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              padding: "5px 15px",
              border: "1px solid currentColor",
              borderColor: "var(--variant-outlinedBorder, currentColor)",
              backgroundColor: "var(--variant-outlinedBg)",
              color: "var(--variant-outlinedColor)",
              [`&.${Bo.disabled}`]: {
                border: `1px solid ${(n.vars || n).palette.action.disabledBackground}`,
              },
            },
          },
          {
            props: { variant: "text" },
            style: {
              padding: "6px 8px",
              color: "var(--variant-textColor)",
              backgroundColor: "var(--variant-textBg)",
            },
          },
          ...Object.entries(n.palette)
            .filter(Jt())
            .map(([i]) => ({
              props: { color: i },
              style: {
                "--variant-textColor": (n.vars || n).palette[i].main,
                "--variant-outlinedColor": (n.vars || n).palette[i].main,
                "--variant-outlinedBorder": n.alpha((n.vars || n).palette[i].main, 0.5),
                "--variant-containedColor": (n.vars || n).palette[i].contrastText,
                "--variant-containedBg": (n.vars || n).palette[i].main,
                "@media (hover: hover)": {
                  "&:hover": {
                    "--variant-containedBg": (n.vars || n).palette[i].dark,
                    "--variant-textBg": n.alpha(
                      (n.vars || n).palette[i].main,
                      (n.vars || n).palette.action.hoverOpacity
                    ),
                    "--variant-outlinedBorder": (n.vars || n).palette[i].main,
                    "--variant-outlinedBg": n.alpha(
                      (n.vars || n).palette[i].main,
                      (n.vars || n).palette.action.hoverOpacity
                    ),
                  },
                },
              },
            })),
          {
            props: { color: "inherit" },
            style: {
              color: "inherit",
              borderColor: "currentColor",
              "--variant-containedBg": n.vars ? n.vars.palette.Button.inheritContainedBg : o,
              "@media (hover: hover)": {
                "&:hover": {
                  "--variant-containedBg": n.vars
                    ? n.vars.palette.Button.inheritContainedHoverBg
                    : l,
                  "--variant-textBg": n.alpha(
                    (n.vars || n).palette.text.primary,
                    (n.vars || n).palette.action.hoverOpacity
                  ),
                  "--variant-outlinedBg": n.alpha(
                    (n.vars || n).palette.text.primary,
                    (n.vars || n).palette.action.hoverOpacity
                  ),
                },
              },
            },
          },
          {
            props: { size: "small", variant: "text" },
            style: { padding: "4px 5px", fontSize: n.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "text" },
            style: { padding: "8px 11px", fontSize: n.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "outlined" },
            style: { padding: "3px 9px", fontSize: n.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "outlined" },
            style: { padding: "7px 21px", fontSize: n.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "contained" },
            style: { padding: "4px 10px", fontSize: n.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "contained" },
            style: { padding: "8px 22px", fontSize: n.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
              [`&.${Bo.focusVisible}`]: { boxShadow: "none" },
              "&:active": { boxShadow: "none" },
              [`&.${Bo.disabled}`]: { boxShadow: "none" },
            },
          },
          { props: { fullWidth: !0 }, style: { width: "100%" } },
          {
            props: { loadingPosition: "center" },
            style: {
              transition: n.transitions.create(["background-color", "box-shadow", "border-color"], {
                duration: n.transitions.duration.short,
              }),
              [`&.${Bo.loading}`]: { color: "transparent" },
            },
          },
        ],
      }
    })
  ),
  NR = ce("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.startIcon, l.loading && o.startIconLoadingStart, o[`iconSize${ie(l.size)}`]]
    },
  })(({ theme: n }) => ({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4,
    variants: [
      { props: { size: "small" }, style: { marginLeft: -2 } },
      {
        props: { loadingPosition: "start", loading: !0 },
        style: {
          transition: n.transitions.create(["opacity"], { duration: n.transitions.duration.short }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: "start", loading: !0, fullWidth: !0 },
        style: { marginRight: -8 },
      },
      ...eb,
    ],
  })),
  DR = ce("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.endIcon, l.loading && o.endIconLoadingEnd, o[`iconSize${ie(l.size)}`]]
    },
  })(({ theme: n }) => ({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8,
    variants: [
      { props: { size: "small" }, style: { marginRight: -2 } },
      {
        props: { loadingPosition: "end", loading: !0 },
        style: {
          transition: n.transitions.create(["opacity"], { duration: n.transitions.duration.short }),
          opacity: 0,
        },
      },
      { props: { loadingPosition: "end", loading: !0, fullWidth: !0 }, style: { marginLeft: -8 } },
      ...eb,
    ],
  })),
  BR = ce("span", { name: "MuiButton", slot: "LoadingIndicator" })(({ theme: n }) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    variants: [
      { props: { loading: !0 }, style: { display: "flex" } },
      { props: { loadingPosition: "start" }, style: { left: 14 } },
      { props: { loadingPosition: "start", size: "small" }, style: { left: 10 } },
      { props: { variant: "text", loadingPosition: "start" }, style: { left: 6 } },
      {
        props: { loadingPosition: "center" },
        style: {
          left: "50%",
          transform: "translate(-50%)",
          color: (n.vars || n).palette.action.disabled,
        },
      },
      { props: { loadingPosition: "end" }, style: { right: 14 } },
      { props: { loadingPosition: "end", size: "small" }, style: { right: 10 } },
      { props: { variant: "text", loadingPosition: "end" }, style: { right: 6 } },
      {
        props: { loadingPosition: "start", fullWidth: !0 },
        style: { position: "relative", left: -10 },
      },
      {
        props: { loadingPosition: "end", fullWidth: !0 },
        style: { position: "relative", right: -10 },
      },
    ],
  })),
  T0 = ce("span", { name: "MuiButton", slot: "LoadingIconPlaceholder" })({
    display: "inline-block",
    width: "1em",
    height: "1em",
  }),
  au = y.forwardRef(function (o, l) {
    const i = y.useContext(AR),
      s = y.useContext(wR),
      c = ai(i, o),
      d = Ae({ props: c, name: "MuiButton" }),
      {
        children: p,
        color: m = "primary",
        component: h = "button",
        className: v,
        disabled: b = !1,
        disableElevation: R = !1,
        disableFocusRipple: M = !1,
        endIcon: T,
        focusVisibleClassName: x,
        fullWidth: A = !1,
        id: w,
        loading: k = null,
        loadingIndicator: O,
        loadingPosition: N = "center",
        size: B = "medium",
        startIcon: _,
        type: U,
        variant: H = "text",
        ...X
      } = d,
      Q = Pr(w),
      te = O ?? E.jsx(Qv, { "aria-labelledby": Q, color: "inherit", size: 16 }),
      C = {
        ...d,
        color: m,
        component: h,
        disabled: b,
        disableElevation: R,
        disableFocusRipple: M,
        fullWidth: A,
        loading: k,
        loadingIndicator: te,
        loadingPosition: N,
        size: B,
        type: U,
        variant: H,
      },
      W = zR(C),
      G =
        (_ || (k && N === "start")) &&
        E.jsx(NR, {
          className: W.startIcon,
          ownerState: C,
          children: _ || E.jsx(T0, { className: W.loadingIconPlaceholder, ownerState: C }),
        }),
      Y =
        (T || (k && N === "end")) &&
        E.jsx(DR, {
          className: W.endIcon,
          ownerState: C,
          children: T || E.jsx(T0, { className: W.loadingIconPlaceholder, ownerState: C }),
        }),
      z = s || "",
      F =
        typeof k == "boolean"
          ? E.jsx("span", {
              className: W.loadingWrapper,
              style: { display: "contents" },
              children:
                k && E.jsx(BR, { className: W.loadingIndicator, ownerState: C, children: te }),
            })
          : null
    return E.jsxs(OR, {
      ownerState: C,
      className: pe(i.className, W.root, v, z),
      component: h,
      disabled: b || k,
      focusRipple: !M,
      focusVisibleClassName: pe(W.focusVisible, x),
      ref: l,
      type: U,
      id: k ? Q : w,
      ...X,
      classes: W,
      children: [G, N !== "end" && F, p, N === "end" && F, Y],
    })
  })
function jR(n) {
  return Te("MuiCard", n)
}
Re("MuiCard", ["root"])
const kR = (n) => {
    const { classes: o } = n
    return Me({ root: ["root"] }, jR, o)
  },
  _R = ce(sa, { name: "MuiCard", slot: "Root" })({ overflow: "hidden" }),
  LR = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiCard" }),
      { className: s, raised: c = !1, ...d } = i,
      p = { ...i, raised: c },
      m = kR(p)
    return E.jsx(_R, {
      className: pe(m.root, s),
      elevation: c ? 8 : void 0,
      ref: l,
      ownerState: p,
      ...d,
    })
  })
function $R(n) {
  return Te("MuiCardActionArea", n)
}
const rd = Re("MuiCardActionArea", ["root", "focusVisible", "focusHighlight"]),
  UR = (n) => {
    const { classes: o } = n
    return Me({ root: ["root"], focusHighlight: ["focusHighlight"] }, $R, o)
  },
  HR = ce(Ba, { name: "MuiCardActionArea", slot: "Root" })(
    De(({ theme: n }) => ({
      display: "block",
      textAlign: "inherit",
      borderRadius: "inherit",
      width: "100%",
      [`&:hover .${rd.focusHighlight}`]: {
        opacity: (n.vars || n).palette.action.hoverOpacity,
        "@media (hover: none)": { opacity: 0 },
      },
      [`&.${rd.focusVisible} .${rd.focusHighlight}`]: {
        opacity: (n.vars || n).palette.action.focusOpacity,
      },
    }))
  ),
  PR = ce("span", { name: "MuiCardActionArea", slot: "FocusHighlight" })(
    De(({ theme: n }) => ({
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit",
      opacity: 0,
      backgroundColor: "currentcolor",
      transition: n.transitions.create("opacity", { duration: n.transitions.duration.short }),
    }))
  ),
  IR = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiCardActionArea" }),
      {
        children: s,
        className: c,
        focusVisibleClassName: d,
        slots: p = {},
        slotProps: m = {},
        ...h
      } = i,
      v = i,
      b = UR(v),
      R = { slots: p, slotProps: m },
      [M, T] = Le("root", {
        elementType: HR,
        externalForwardedProps: { ...R, ...h },
        shouldForwardComponentProp: !0,
        ownerState: v,
        ref: l,
        className: pe(b.root, c),
        additionalProps: { focusVisibleClassName: pe(d, b.focusVisible) },
      }),
      [x, A] = Le("focusHighlight", {
        elementType: PR,
        externalForwardedProps: R,
        ownerState: v,
        ref: l,
        className: b.focusHighlight,
      })
    return E.jsxs(M, { ...T, children: [s, E.jsx(x, { ...A })] })
  })
function qR(n) {
  return Te("PrivateSwitchBase", n)
}
Re("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"])
const VR = (n) => {
    const { classes: o, checked: l, disabled: i, edge: s } = n,
      c = { root: ["root", l && "checked", i && "disabled", s && `edge${ie(s)}`], input: ["input"] }
    return Me(c, qR, o)
  },
  GR = ce(Ba, { name: "MuiSwitchBase" })({
    padding: 9,
    borderRadius: "50%",
    variants: [
      { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } },
      {
        props: ({ edge: n, ownerState: o }) => n === "start" && o.size !== "small",
        style: { marginLeft: -12 },
      },
      { props: { edge: "end", size: "small" }, style: { marginRight: -3 } },
      {
        props: ({ edge: n, ownerState: o }) => n === "end" && o.size !== "small",
        style: { marginRight: -12 },
      },
    ],
  }),
  YR = ce("input", { name: "MuiSwitchBase", shouldForwardProp: tn })({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  FR = y.forwardRef(function (o, l) {
    const {
        autoFocus: i,
        checked: s,
        checkedIcon: c,
        defaultChecked: d,
        disabled: p,
        disableFocusRipple: m = !1,
        edge: h = !1,
        icon: v,
        id: b,
        inputProps: R,
        inputRef: M,
        name: T,
        onBlur: x,
        onChange: A,
        onFocus: w,
        readOnly: k,
        required: O = !1,
        tabIndex: N,
        type: B,
        value: _,
        slots: U = {},
        slotProps: H = {},
        ...X
      } = o,
      [Q, te] = Md({ controlled: s, default: !!d, name: "SwitchBase", state: "checked" }),
      C = co(),
      W = (ue) => {
        ;(w && w(ue), C && C.onFocus && C.onFocus(ue))
      },
      G = (ue) => {
        ;(x && x(ue), C && C.onBlur && C.onBlur(ue))
      },
      Y = (ue) => {
        if (ue.nativeEvent.defaultPrevented) return
        const le = ue.target.checked
        ;(te(le), A && A(ue, le))
      }
    let z = p
    C && typeof z > "u" && (z = C.disabled)
    const F = B === "checkbox" || B === "radio",
      re = { ...o, checked: Q, disabled: z, disableFocusRipple: m, edge: h },
      ne = VR(re),
      fe = { slots: U, slotProps: { input: R, ...H } },
      [D, q] = Le("root", {
        ref: l,
        elementType: GR,
        className: ne.root,
        shouldForwardComponentProp: !0,
        externalForwardedProps: { ...fe, component: "span", ...X },
        getSlotProps: (ue) => ({
          ...ue,
          onFocus: (le) => {
            ;(ue.onFocus?.(le), W(le))
          },
          onBlur: (le) => {
            ;(ue.onBlur?.(le), G(le))
          },
        }),
        ownerState: re,
        additionalProps: {
          centerRipple: !0,
          focusRipple: !m,
          disabled: z,
          role: void 0,
          tabIndex: null,
        },
      }),
      [ae, se] = Le("input", {
        ref: M,
        elementType: YR,
        className: ne.input,
        externalForwardedProps: fe,
        getSlotProps: (ue) => ({
          ...ue,
          onChange: (le) => {
            ;(ue.onChange?.(le), Y(le))
          },
        }),
        ownerState: re,
        additionalProps: {
          autoFocus: i,
          checked: s,
          defaultChecked: d,
          disabled: z,
          id: F ? b : void 0,
          name: T,
          readOnly: k,
          required: O,
          tabIndex: N,
          type: B,
          ...(B === "checkbox" && _ === void 0 ? {} : { value: _ }),
        },
      })
    return E.jsxs(D, { ...q, children: [E.jsx(ae, { ...se }), Q ? c : v] })
  }),
  XR = mt(
    E.jsx("path", {
      d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
    })
  ),
  KR = mt(
    E.jsx("path", {
      d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    })
  ),
  WR = mt(
    E.jsx("path", {
      d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",
    })
  )
function QR(n) {
  return Te("MuiCheckbox", n)
}
const ld = Re("MuiCheckbox", [
    "root",
    "checked",
    "disabled",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium",
  ]),
  ZR = (n) => {
    const { classes: o, indeterminate: l, color: i, size: s } = n,
      c = { root: ["root", l && "indeterminate", `color${ie(i)}`, `size${ie(s)}`] },
      d = Me(c, QR, o)
    return { ...o, ...d }
  },
  JR = ce(FR, {
    shouldForwardProp: (n) => tn(n) || n === "classes",
    name: "MuiCheckbox",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [
        o.root,
        l.indeterminate && o.indeterminate,
        o[`size${ie(l.size)}`],
        l.color !== "default" && o[`color${ie(l.color)}`],
      ]
    },
  })(
    De(({ theme: n }) => ({
      color: (n.vars || n).palette.text.secondary,
      variants: [
        {
          props: { color: "default", disableRipple: !1 },
          style: {
            "&:hover": {
              backgroundColor: n.alpha(
                (n.vars || n).palette.action.active,
                (n.vars || n).palette.action.hoverOpacity
              ),
            },
          },
        },
        ...Object.entries(n.palette)
          .filter(Jt())
          .map(([o]) => ({
            props: { color: o, disableRipple: !1 },
            style: {
              "&:hover": {
                backgroundColor: n.alpha(
                  (n.vars || n).palette[o].main,
                  (n.vars || n).palette.action.hoverOpacity
                ),
              },
            },
          })),
        ...Object.entries(n.palette)
          .filter(Jt())
          .map(([o]) => ({
            props: { color: o },
            style: {
              [`&.${ld.checked}, &.${ld.indeterminate}`]: { color: (n.vars || n).palette[o].main },
              [`&.${ld.disabled}`]: { color: (n.vars || n).palette.action.disabled },
            },
          })),
        {
          props: { disableRipple: !1 },
          style: { "&:hover": { "@media (hover: none)": { backgroundColor: "transparent" } } },
        },
      ],
    }))
  ),
  e5 = E.jsx(KR, {}),
  t5 = E.jsx(XR, {}),
  n5 = E.jsx(WR, {}),
  R0 = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiCheckbox" }),
      {
        checkedIcon: s = e5,
        color: c = "primary",
        icon: d = t5,
        indeterminate: p = !1,
        indeterminateIcon: m = n5,
        inputProps: h,
        size: v = "medium",
        disableRipple: b = !1,
        className: R,
        slots: M = {},
        slotProps: T = {},
        ...x
      } = i,
      A = p ? m : d,
      w = p ? m : s,
      k = { ...i, disableRipple: b, color: c, indeterminate: p, size: v },
      O = ZR(k),
      N = T.input ?? h,
      [B, _] = Le("root", {
        ref: l,
        elementType: JR,
        className: pe(O.root, R),
        shouldForwardComponentProp: !0,
        externalForwardedProps: { slots: M, slotProps: T, ...x },
        ownerState: k,
        additionalProps: {
          type: "checkbox",
          icon: y.cloneElement(A, { fontSize: A.props.fontSize ?? v }),
          checkedIcon: y.cloneElement(w, { fontSize: w.props.fontSize ?? v }),
          disableRipple: b,
          slots: M,
          slotProps: { input: Pv(typeof N == "function" ? N(k) : N, { "data-indeterminate": p }) },
        },
      })
    return E.jsx(B, { ..._, classes: O })
  }),
  a5 = JC({
    createStyledComponent: ce("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (n, o) => {
        const { ownerState: l } = n
        return [
          o.root,
          o[`maxWidth${ie(String(l.maxWidth))}`],
          l.fixed && o.fixed,
          l.disableGutters && o.disableGutters,
        ]
      },
    }),
    useThemeProps: (n) => Ae({ props: n, name: "MuiContainer" }),
  }),
  kd = typeof ip({}) == "function",
  o5 = (n, o) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...(o && !n.vars && { colorScheme: n.palette.mode }),
  }),
  r5 = (n) => ({
    color: (n.vars || n).palette.text.primary,
    ...n.typography.body1,
    backgroundColor: (n.vars || n).palette.background.default,
    "@media print": { backgroundColor: (n.vars || n).palette.common.white },
  }),
  tb = (n, o = !1) => {
    const l = {}
    o &&
      n.colorSchemes &&
      typeof n.getColorSchemeSelector == "function" &&
      Object.entries(n.colorSchemes).forEach(([c, d]) => {
        const p = n.getColorSchemeSelector(c)
        p.startsWith("@")
          ? (l[p] = { ":root": { colorScheme: d.palette?.mode } })
          : (l[p.replace(/\s*&/, "")] = { colorScheme: d.palette?.mode })
      })
    let i = {
      html: o5(n, o),
      "*, *::before, *::after": { boxSizing: "inherit" },
      "strong, b": { fontWeight: n.typography.fontWeightBold },
      body: {
        margin: 0,
        ...r5(n),
        "&::backdrop": { backgroundColor: (n.vars || n).palette.background.default },
      },
      ...l,
    }
    const s = n.components?.MuiCssBaseline?.styleOverrides
    return (s && (i = [i, s]), i)
  },
  Gs = "mui-ecs",
  l5 = (n) => {
    const o = tb(n, !1),
      l = Array.isArray(o) ? o[0] : o
    return (
      !n.vars && l && (l.html[`:root:has(${Gs})`] = { colorScheme: n.palette.mode }),
      n.colorSchemes &&
        Object.entries(n.colorSchemes).forEach(([i, s]) => {
          const c = n.getColorSchemeSelector(i)
          c.startsWith("@")
            ? (l[c] = { [`:root:not(:has(.${Gs}))`]: { colorScheme: s.palette?.mode } })
            : (l[c.replace(/\s*&/, "")] = {
                [`&:not(:has(.${Gs}))`]: { colorScheme: s.palette?.mode },
              })
        }),
      o
    )
  },
  i5 = ip(kd ? ({ theme: n, enableColorScheme: o }) => tb(n, o) : ({ theme: n }) => l5(n))
function s5(n) {
  const o = Ae({ props: n, name: "MuiCssBaseline" }),
    { children: l, enableColorScheme: i = !1 } = o
  return E.jsxs(y.Fragment, {
    children: [
      kd && E.jsx(i5, { enableColorScheme: i }),
      !kd && !i && E.jsx("span", { className: Gs, style: { display: "none" } }),
      l,
    ],
  })
}
function nb(n = window) {
  const o = n.document.documentElement.clientWidth
  return n.innerWidth - o
}
function u5(n) {
  const o = Yn(n)
  return o.body === n
    ? Da(n).innerWidth > o.documentElement.clientWidth
    : n.scrollHeight > n.clientHeight
}
function Ql(n, o) {
  o ? n.setAttribute("aria-hidden", "true") : n.removeAttribute("aria-hidden")
}
function M0(n) {
  return parseInt(Da(n).getComputedStyle(n).paddingRight, 10) || 0
}
function c5(n) {
  const l = [
      "TEMPLATE",
      "SCRIPT",
      "STYLE",
      "LINK",
      "MAP",
      "META",
      "NOSCRIPT",
      "PICTURE",
      "COL",
      "COLGROUP",
      "PARAM",
      "SLOT",
      "SOURCE",
      "TRACK",
    ].includes(n.tagName),
    i = n.tagName === "INPUT" && n.getAttribute("type") === "hidden"
  return l || i
}
function A0(n, o, l, i, s) {
  const c = [o, l, ...i]
  ;[].forEach.call(n.children, (d) => {
    const p = !c.includes(d),
      m = !c5(d)
    p && m && Ql(d, s)
  })
}
function id(n, o) {
  let l = -1
  return (n.some((i, s) => (o(i) ? ((l = s), !0) : !1)), l)
}
function f5(n, o) {
  const l = [],
    i = n.container
  if (!o.disableScrollLock) {
    if (u5(i)) {
      const d = nb(Da(i))
      ;(l.push({ value: i.style.paddingRight, property: "padding-right", el: i }),
        (i.style.paddingRight = `${M0(i) + d}px`))
      const p = Yn(i).querySelectorAll(".mui-fixed")
      ;[].forEach.call(p, (m) => {
        ;(l.push({ value: m.style.paddingRight, property: "padding-right", el: m }),
          (m.style.paddingRight = `${M0(m) + d}px`))
      })
    }
    let c
    if (i.parentNode instanceof DocumentFragment) c = Yn(i).body
    else {
      const d = i.parentElement,
        p = Da(i)
      c = d?.nodeName === "HTML" && p.getComputedStyle(d).overflowY === "scroll" ? d : i
    }
    ;(l.push(
      { value: c.style.overflow, property: "overflow", el: c },
      { value: c.style.overflowX, property: "overflow-x", el: c },
      { value: c.style.overflowY, property: "overflow-y", el: c }
    ),
      (c.style.overflow = "hidden"))
  }
  return () => {
    l.forEach(({ value: c, el: d, property: p }) => {
      c ? d.style.setProperty(p, c) : d.style.removeProperty(p)
    })
  }
}
function d5(n) {
  const o = []
  return (
    [].forEach.call(n.children, (l) => {
      l.getAttribute("aria-hidden") === "true" && o.push(l)
    }),
    o
  )
}
class p5 {
  constructor() {
    ;((this.modals = []), (this.containers = []))
  }
  add(o, l) {
    let i = this.modals.indexOf(o)
    if (i !== -1) return i
    ;((i = this.modals.length), this.modals.push(o), o.modalRef && Ql(o.modalRef, !1))
    const s = d5(l)
    A0(l, o.mount, o.modalRef, s, !0)
    const c = id(this.containers, (d) => d.container === l)
    return c !== -1
      ? (this.containers[c].modals.push(o), i)
      : (this.containers.push({ modals: [o], container: l, restore: null, hiddenSiblings: s }), i)
  }
  mount(o, l) {
    const i = id(this.containers, (c) => c.modals.includes(o)),
      s = this.containers[i]
    s.restore || (s.restore = f5(s, l))
  }
  remove(o, l = !0) {
    const i = this.modals.indexOf(o)
    if (i === -1) return i
    const s = id(this.containers, (d) => d.modals.includes(o)),
      c = this.containers[s]
    if ((c.modals.splice(c.modals.indexOf(o), 1), this.modals.splice(i, 1), c.modals.length === 0))
      (c.restore && c.restore(),
        o.modalRef && Ql(o.modalRef, l),
        A0(c.container, o.mount, o.modalRef, c.hiddenSiblings, !1),
        this.containers.splice(s, 1))
    else {
      const d = c.modals[c.modals.length - 1]
      d.modalRef && Ql(d.modalRef, !1)
    }
    return i
  }
  isTopModal(o) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === o
  }
}
function Xl(n) {
  let o = n.activeElement
  for (; o?.shadowRoot?.activeElement != null; ) o = o.shadowRoot.activeElement
  return o
}
const m5 = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",")
function h5(n) {
  const o = parseInt(n.getAttribute("tabindex") || "", 10)
  return Number.isNaN(o)
    ? n.contentEditable === "true" ||
      ((n.nodeName === "AUDIO" || n.nodeName === "VIDEO" || n.nodeName === "DETAILS") &&
        n.getAttribute("tabindex") === null)
      ? 0
      : n.tabIndex
    : o
}
function g5(n) {
  if (n.tagName !== "INPUT" || n.type !== "radio" || !n.name) return !1
  const o = (i) => n.ownerDocument.querySelector(`input[type="radio"]${i}`)
  let l = o(`[name="${n.name}"]:checked`)
  return (l || (l = o(`[name="${n.name}"]`)), l !== n)
}
function y5(n) {
  return !(n.disabled || (n.tagName === "INPUT" && n.type === "hidden") || g5(n))
}
function v5(n) {
  const o = [],
    l = []
  return (
    Array.from(n.querySelectorAll(m5)).forEach((i, s) => {
      const c = h5(i)
      c === -1 ||
        !y5(i) ||
        (c === 0 ? o.push(i) : l.push({ documentOrder: s, tabIndex: c, node: i }))
    }),
    l
      .sort((i, s) =>
        i.tabIndex === s.tabIndex ? i.documentOrder - s.documentOrder : i.tabIndex - s.tabIndex
      )
      .map((i) => i.node)
      .concat(o)
  )
}
function b5() {
  return !0
}
function S5(n) {
  const {
      children: o,
      disableAutoFocus: l = !1,
      disableEnforceFocus: i = !1,
      disableRestoreFocus: s = !1,
      getTabbable: c = v5,
      isEnabled: d = b5,
      open: p,
    } = n,
    m = y.useRef(!1),
    h = y.useRef(null),
    v = y.useRef(null),
    b = y.useRef(null),
    R = y.useRef(null),
    M = y.useRef(!1),
    T = y.useRef(null),
    x = Ut(pi(o), T),
    A = y.useRef(null)
  ;(y.useEffect(() => {
    !p || !T.current || (M.current = !l)
  }, [l, p]),
    y.useEffect(() => {
      if (!p || !T.current) return
      const O = Yn(T.current),
        N = Xl(O)
      return (
        T.current.contains(N) ||
          (T.current.hasAttribute("tabIndex") || T.current.setAttribute("tabIndex", "-1"),
          M.current && T.current.focus()),
        () => {
          s ||
            (b.current && b.current.focus && ((m.current = !0), b.current.focus()),
            (b.current = null))
        }
      )
    }, [p]),
    y.useEffect(() => {
      if (!p || !T.current) return
      const O = Yn(T.current),
        N = Xl(O),
        B = (H) => {
          ;((A.current = H),
            !(i || !d() || H.key !== "Tab") &&
              N === T.current &&
              H.shiftKey &&
              ((m.current = !0), v.current && v.current.focus()))
        },
        _ = () => {
          const H = T.current
          if (H === null) return
          const X = Xl(O)
          if (!O.hasFocus() || !d() || m.current) {
            m.current = !1
            return
          }
          if (H.contains(X) || (i && X !== h.current && X !== v.current)) return
          if (X !== R.current) R.current = null
          else if (R.current !== null) return
          if (!M.current) return
          let Q = []
          if (((X === h.current || X === v.current) && (Q = c(T.current)), Q.length > 0)) {
            const te = !!(A.current?.shiftKey && A.current?.key === "Tab"),
              C = Q[0],
              W = Q[Q.length - 1]
            typeof C != "string" && typeof W != "string" && (te ? W.focus() : C.focus())
          } else H.focus()
        }
      ;(O.addEventListener("focusin", _), O.addEventListener("keydown", B, !0))
      const U = setInterval(() => {
        const H = Xl(O)
        H && H.tagName === "BODY" && _()
      }, 50)
      return () => {
        ;(clearInterval(U),
          O.removeEventListener("focusin", _),
          O.removeEventListener("keydown", B, !0))
      }
    }, [l, i, s, d, p, c]))
  const w = (O) => {
      ;(b.current === null && (b.current = O.relatedTarget),
        (M.current = !0),
        (R.current = O.target))
      const N = o.props.onFocus
      N && N(O)
    },
    k = (O) => {
      ;(b.current === null && (b.current = O.relatedTarget), (M.current = !0))
    }
  return E.jsxs(y.Fragment, {
    children: [
      E.jsx("div", { tabIndex: p ? 0 : -1, onFocus: k, ref: h, "data-testid": "sentinelStart" }),
      y.cloneElement(o, { ref: x, onFocus: w }),
      E.jsx("div", { tabIndex: p ? 0 : -1, onFocus: k, ref: v, "data-testid": "sentinelEnd" }),
    ],
  })
}
function x5(n) {
  return typeof n == "function" ? n() : n
}
function C5(n) {
  return n ? n.props.hasOwnProperty("in") : !1
}
const w0 = () => {},
  Ls = new p5()
function E5(n) {
  const {
      container: o,
      disableEscapeKeyDown: l = !1,
      disableScrollLock: i = !1,
      closeAfterTransition: s = !1,
      onTransitionEnter: c,
      onTransitionExited: d,
      children: p,
      onClose: m,
      open: h,
      rootRef: v,
    } = n,
    b = y.useRef({}),
    R = y.useRef(null),
    M = y.useRef(null),
    T = Ut(M, v),
    [x, A] = y.useState(!h),
    w = C5(p)
  let k = !0
  ;(n["aria-hidden"] === "false" || n["aria-hidden"] === !1) && (k = !1)
  const O = () => Yn(R.current),
    N = () => ((b.current.modalRef = M.current), (b.current.mount = R.current), b.current),
    B = () => {
      ;(Ls.mount(N(), { disableScrollLock: i }), M.current && (M.current.scrollTop = 0))
    },
    _ = $o(() => {
      const Y = x5(o) || O().body
      ;(Ls.add(N(), Y), M.current && B())
    }),
    U = () => Ls.isTopModal(N()),
    H = $o((Y) => {
      ;((R.current = Y), Y && (h && U() ? B() : M.current && Ql(M.current, k)))
    }),
    X = y.useCallback(() => {
      Ls.remove(N(), k)
    }, [k])
  ;(y.useEffect(
    () => () => {
      X()
    },
    [X]
  ),
    y.useEffect(() => {
      h ? _() : (!w || !s) && X()
    }, [h, X, w, s, _]))
  const Q = (Y) => (z) => {
      ;(Y.onKeyDown?.(z),
        !(z.key !== "Escape" || z.which === 229 || !U()) &&
          (l || (z.stopPropagation(), m && m(z, "escapeKeyDown"))))
    },
    te = (Y) => (z) => {
      ;(Y.onClick?.(z), z.target === z.currentTarget && m && m(z, "backdropClick"))
    }
  return {
    getRootProps: (Y = {}) => {
      const z = Kv(n)
      ;(delete z.onTransitionEnter, delete z.onTransitionExited)
      const F = { ...z, ...Y }
      return { role: "presentation", ...F, onKeyDown: Q(F), ref: T }
    },
    getBackdropProps: (Y = {}) => {
      const z = Y
      return { "aria-hidden": !0, ...z, onClick: te(z), open: h }
    },
    getTransitionProps: () => {
      const Y = () => {
          ;(A(!1), c && c())
        },
        z = () => {
          ;(A(!0), d && d(), s && X())
        }
      return { onEnter: u0(Y, p?.props.onEnter ?? w0), onExited: u0(z, p?.props.onExited ?? w0) }
    },
    rootRef: T,
    portalRef: H,
    isTopModal: U,
    exited: x,
    hasTransition: w,
  }
}
function T5(n) {
  return Te("MuiModal", n)
}
Re("MuiModal", ["root", "hidden", "backdrop"])
const R5 = (n) => {
    const { open: o, exited: l, classes: i } = n
    return Me({ root: ["root", !o && l && "hidden"], backdrop: ["backdrop"] }, T5, i)
  },
  M5 = ce("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.root, !l.open && l.exited && o.hidden]
    },
  })(
    De(({ theme: n }) => ({
      position: "fixed",
      zIndex: (n.vars || n).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        { props: ({ ownerState: o }) => !o.open && o.exited, style: { visibility: "hidden" } },
      ],
    }))
  ),
  A5 = ce(Zv, { name: "MuiModal", slot: "Backdrop" })({ zIndex: -1 }),
  ab = y.forwardRef(function (o, l) {
    const i = Ae({ name: "MuiModal", props: o }),
      {
        BackdropComponent: s = A5,
        BackdropProps: c,
        classes: d,
        className: p,
        closeAfterTransition: m = !1,
        children: h,
        container: v,
        component: b,
        components: R = {},
        componentsProps: M = {},
        disableAutoFocus: T = !1,
        disableEnforceFocus: x = !1,
        disableEscapeKeyDown: A = !1,
        disablePortal: w = !1,
        disableRestoreFocus: k = !1,
        disableScrollLock: O = !1,
        hideBackdrop: N = !1,
        keepMounted: B = !1,
        onClose: _,
        onTransitionEnter: U,
        onTransitionExited: H,
        open: X,
        slotProps: Q = {},
        slots: te = {},
        theme: C,
        ...W
      } = i,
      G = {
        ...i,
        closeAfterTransition: m,
        disableAutoFocus: T,
        disableEnforceFocus: x,
        disableEscapeKeyDown: A,
        disablePortal: w,
        disableRestoreFocus: k,
        disableScrollLock: O,
        hideBackdrop: N,
        keepMounted: B,
      },
      {
        getRootProps: Y,
        getBackdropProps: z,
        getTransitionProps: F,
        portalRef: re,
        isTopModal: ne,
        exited: fe,
        hasTransition: D,
      } = E5({ ...G, rootRef: l }),
      q = { ...G, exited: fe },
      ae = R5(q),
      se = {}
    if ((h.props.tabIndex === void 0 && (se.tabIndex = "-1"), D)) {
      const { onEnter: be, onExited: ze } = F()
      ;((se.onEnter = be), (se.onExited = ze))
    }
    const ue = { slots: { root: R.Root, backdrop: R.Backdrop, ...te }, slotProps: { ...M, ...Q } },
      [le, de] = Le("root", {
        ref: l,
        elementType: M5,
        externalForwardedProps: { ...ue, ...W, component: b },
        getSlotProps: Y,
        ownerState: q,
        className: pe(p, ae?.root, !q.open && q.exited && ae?.hidden),
      }),
      [Be, Se] = Le("backdrop", {
        ref: c?.ref,
        elementType: s,
        externalForwardedProps: ue,
        shouldForwardComponentProp: !0,
        additionalProps: c,
        getSlotProps: (be) =>
          z({
            ...be,
            onClick: (ze) => {
              be?.onClick && be.onClick(ze)
            },
          }),
        className: pe(c?.className, ae?.backdrop),
        ownerState: q,
      })
    return !B && !X && (!D || fe)
      ? null
      : E.jsx(KT, {
          ref: re,
          container: v,
          disablePortal: w,
          children: E.jsxs(le, {
            ...de,
            children: [
              !N && s ? E.jsx(Be, { ...Se }) : null,
              E.jsx(S5, {
                disableEnforceFocus: x,
                disableAutoFocus: T,
                disableRestoreFocus: k,
                isEnabled: ne,
                open: X,
                children: y.cloneElement(h, se),
              }),
            ],
          }),
        })
  })
function w5(n) {
  return Te("MuiDialog", n)
}
const sd = Re("MuiDialog", [
    "root",
    "scrollPaper",
    "scrollBody",
    "container",
    "paper",
    "paperScrollPaper",
    "paperScrollBody",
    "paperWidthFalse",
    "paperWidthXs",
    "paperWidthSm",
    "paperWidthMd",
    "paperWidthLg",
    "paperWidthXl",
    "paperFullWidth",
    "paperFullScreen",
  ]),
  ob = y.createContext({}),
  z5 = ce(Zv, { name: "MuiDialog", slot: "Backdrop", overrides: (n, o) => o.backdrop })({
    zIndex: -1,
  }),
  O5 = (n) => {
    const { classes: o, scroll: l, maxWidth: i, fullWidth: s, fullScreen: c } = n,
      d = {
        root: ["root"],
        container: ["container", `scroll${ie(l)}`],
        paper: [
          "paper",
          `paperScroll${ie(l)}`,
          `paperWidth${ie(String(i))}`,
          s && "paperFullWidth",
          c && "paperFullScreen",
        ],
      }
    return Me(d, w5, o)
  },
  N5 = ce(ab, { name: "MuiDialog", slot: "Root" })({
    "@media print": { position: "absolute !important" },
  }),
  D5 = ce("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.container, o[`scroll${ie(l.scroll)}`]]
    },
  })({
    height: "100%",
    "@media print": { height: "auto" },
    outline: 0,
    variants: [
      {
        props: { scroll: "paper" },
        style: { display: "flex", justifyContent: "center", alignItems: "center" },
      },
      {
        props: { scroll: "body" },
        style: {
          overflowY: "auto",
          overflowX: "hidden",
          textAlign: "center",
          "&::after": {
            content: '""',
            display: "inline-block",
            verticalAlign: "middle",
            height: "100%",
            width: "0",
          },
        },
      },
    ],
  }),
  B5 = ce(sa, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [
        o.paper,
        o[`scrollPaper${ie(l.scroll)}`],
        o[`paperWidth${ie(String(l.maxWidth))}`],
        l.fullWidth && o.paperFullWidth,
        l.fullScreen && o.paperFullScreen,
      ]
    },
  })(
    De(({ theme: n }) => ({
      margin: 32,
      position: "relative",
      overflowY: "auto",
      "@media print": { overflowY: "visible", boxShadow: "none" },
      variants: [
        {
          props: { scroll: "paper" },
          style: { display: "flex", flexDirection: "column", maxHeight: "calc(100% - 64px)" },
        },
        {
          props: { scroll: "body" },
          style: { display: "inline-block", verticalAlign: "middle", textAlign: "initial" },
        },
        { props: ({ ownerState: o }) => !o.maxWidth, style: { maxWidth: "calc(100% - 64px)" } },
        {
          props: { maxWidth: "xs" },
          style: {
            maxWidth:
              n.breakpoints.unit === "px"
                ? Math.max(n.breakpoints.values.xs, 444)
                : `max(${n.breakpoints.values.xs}${n.breakpoints.unit}, 444px)`,
            [`&.${sd.paperScrollBody}`]: {
              [n.breakpoints.down(Math.max(n.breakpoints.values.xs, 444) + 64)]: {
                maxWidth: "calc(100% - 64px)",
              },
            },
          },
        },
        ...Object.keys(n.breakpoints.values)
          .filter((o) => o !== "xs")
          .map((o) => ({
            props: { maxWidth: o },
            style: {
              maxWidth: `${n.breakpoints.values[o]}${n.breakpoints.unit}`,
              [`&.${sd.paperScrollBody}`]: {
                [n.breakpoints.down(n.breakpoints.values[o] + 64)]: {
                  maxWidth: "calc(100% - 64px)",
                },
              },
            },
          })),
        { props: ({ ownerState: o }) => o.fullWidth, style: { width: "calc(100% - 64px)" } },
        {
          props: ({ ownerState: o }) => o.fullScreen,
          style: {
            margin: 0,
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            maxHeight: "none",
            borderRadius: 0,
            [`&.${sd.paperScrollBody}`]: { margin: 0, maxWidth: "100%" },
          },
        },
      ],
    }))
  ),
  j5 = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiDialog" }),
      s = di(),
      c = {
        enter: s.transitions.duration.enteringScreen,
        exit: s.transitions.duration.leavingScreen,
      },
      {
        "aria-describedby": d,
        "aria-labelledby": p,
        "aria-modal": m = !0,
        BackdropComponent: h,
        BackdropProps: v,
        children: b,
        className: R,
        disableEscapeKeyDown: M = !1,
        fullScreen: T = !1,
        fullWidth: x = !1,
        maxWidth: A = "sm",
        onClick: w,
        onClose: k,
        open: O,
        PaperComponent: N = sa,
        PaperProps: B = {},
        scroll: _ = "paper",
        slots: U = {},
        slotProps: H = {},
        TransitionComponent: X = jd,
        transitionDuration: Q = c,
        TransitionProps: te,
        ...C
      } = i,
      W = { ...i, disableEscapeKeyDown: M, fullScreen: T, fullWidth: x, maxWidth: A, scroll: _ },
      G = O5(W),
      Y = y.useRef(),
      z = (pt) => {
        Y.current = pt.target === pt.currentTarget
      },
      F = (pt) => {
        ;(w && w(pt), Y.current && ((Y.current = null), k && k(pt, "backdropClick")))
      },
      re = Pr(p),
      ne = y.useMemo(() => ({ titleId: re }), [re]),
      fe = { transition: X, ...U },
      D = { transition: te, paper: B, backdrop: v, ...H },
      q = { slots: fe, slotProps: D },
      [ae, se] = Le("root", {
        elementType: N5,
        shouldForwardComponentProp: !0,
        externalForwardedProps: q,
        ownerState: W,
        className: pe(G.root, R),
        ref: l,
      }),
      [ue, le] = Le("backdrop", {
        elementType: z5,
        shouldForwardComponentProp: !0,
        externalForwardedProps: q,
        ownerState: W,
      }),
      [de, Be] = Le("paper", {
        elementType: B5,
        shouldForwardComponentProp: !0,
        externalForwardedProps: q,
        ownerState: W,
        className: pe(G.paper, B.className),
      }),
      [Se, be] = Le("container", {
        elementType: D5,
        externalForwardedProps: q,
        ownerState: W,
        className: G.container,
      }),
      [ze, $e] = Le("transition", {
        elementType: jd,
        externalForwardedProps: q,
        ownerState: W,
        additionalProps: { appear: !0, in: O, timeout: Q, role: "presentation" },
      })
    return E.jsx(ae, {
      closeAfterTransition: !0,
      slots: { backdrop: ue },
      slotProps: { backdrop: { transitionDuration: Q, as: h, ...le } },
      disableEscapeKeyDown: M,
      onClose: k,
      open: O,
      onClick: F,
      ...se,
      ...C,
      children: E.jsx(ze, {
        ...$e,
        children: E.jsx(Se, {
          onMouseDown: z,
          ...be,
          children: E.jsx(de, {
            as: N,
            elevation: 24,
            role: "dialog",
            "aria-describedby": d,
            "aria-labelledby": re,
            "aria-modal": m,
            ...Be,
            children: E.jsx(ob.Provider, { value: ne, children: b }),
          }),
        }),
      }),
    })
  })
function k5(n) {
  return Te("MuiDialogActions", n)
}
Re("MuiDialogActions", ["root", "spacing"])
const _5 = (n) => {
    const { classes: o, disableSpacing: l } = n
    return Me({ root: ["root", !l && "spacing"] }, k5, o)
  },
  L5 = ce("div", {
    name: "MuiDialogActions",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.root, !l.disableSpacing && o.spacing]
    },
  })({
    display: "flex",
    alignItems: "center",
    padding: 8,
    justifyContent: "flex-end",
    flex: "0 0 auto",
    variants: [
      {
        props: ({ ownerState: n }) => !n.disableSpacing,
        style: { "& > :not(style) ~ :not(style)": { marginLeft: 8 } },
      },
    ],
  }),
  $5 = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiDialogActions" }),
      { className: s, disableSpacing: c = !1, ...d } = i,
      p = { ...i, disableSpacing: c },
      m = _5(p)
    return E.jsx(L5, { className: pe(m.root, s), ownerState: p, ref: l, ...d })
  })
function U5(n) {
  return Te("MuiDialogContent", n)
}
Re("MuiDialogContent", ["root", "dividers"])
function H5(n) {
  return Te("MuiDialogTitle", n)
}
const P5 = Re("MuiDialogTitle", ["root"]),
  I5 = (n) => {
    const { classes: o, dividers: l } = n
    return Me({ root: ["root", l && "dividers"] }, U5, o)
  },
  q5 = ce("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.root, l.dividers && o.dividers]
    },
  })(
    De(({ theme: n }) => ({
      flex: "1 1 auto",
      WebkitOverflowScrolling: "touch",
      overflowY: "auto",
      padding: "20px 24px",
      variants: [
        {
          props: ({ ownerState: o }) => o.dividers,
          style: {
            padding: "16px 24px",
            borderTop: `1px solid ${(n.vars || n).palette.divider}`,
            borderBottom: `1px solid ${(n.vars || n).palette.divider}`,
          },
        },
        {
          props: ({ ownerState: o }) => !o.dividers,
          style: { [`.${P5.root} + &`]: { paddingTop: 0 } },
        },
      ],
    }))
  ),
  V5 = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiDialogContent" }),
      { className: s, dividers: c = !1, ...d } = i,
      p = { ...i, dividers: c },
      m = I5(p)
    return E.jsx(q5, { className: pe(m.root, s), ownerState: p, ref: l, ...d })
  }),
  G5 = (n) => {
    const { classes: o } = n
    return Me({ root: ["root"] }, H5, o)
  },
  Y5 = ce(kt, { name: "MuiDialogTitle", slot: "Root" })({ padding: "16px 24px", flex: "0 0 auto" }),
  F5 = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiDialogTitle" }),
      { className: s, id: c, ...d } = i,
      p = i,
      m = G5(p),
      { titleId: h = c } = y.useContext(ob)
    return E.jsx(Y5, {
      component: "h2",
      className: pe(m.root, s),
      ownerState: p,
      ref: l,
      variant: "h6",
      id: c ?? h,
      ...d,
    })
  }),
  z0 = Re("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]),
  X5 = (n) => {
    const {
        classes: o,
        disableUnderline: l,
        startAdornment: i,
        endAdornment: s,
        size: c,
        hiddenLabel: d,
        multiline: p,
      } = n,
      m = {
        root: [
          "root",
          !l && "underline",
          i && "adornedStart",
          s && "adornedEnd",
          c === "small" && `size${ie(c)}`,
          d && "hiddenLabel",
          p && "multiline",
        ],
        input: ["input"],
      },
      h = Me(m, cR, o)
    return { ...o, ...h }
  },
  K5 = ce(Tu, {
    shouldForwardProp: (n) => tn(n) || n === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [...Cu(n, o), !l.disableUnderline && o.underline]
    },
  })(
    De(({ theme: n }) => {
      const o = n.palette.mode === "light",
        l = o ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
        i = o ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
        s = o ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
        c = o ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)"
      return {
        position: "relative",
        backgroundColor: n.vars ? n.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (n.vars || n).shape.borderRadius,
        borderTopRightRadius: (n.vars || n).shape.borderRadius,
        transition: n.transitions.create("background-color", {
          duration: n.transitions.duration.shorter,
          easing: n.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: n.vars ? n.vars.palette.FilledInput.hoverBg : s,
          "@media (hover: none)": { backgroundColor: n.vars ? n.vars.palette.FilledInput.bg : i },
        },
        [`&.${Do.focused}`]: { backgroundColor: n.vars ? n.vars.palette.FilledInput.bg : i },
        [`&.${Do.disabled}`]: {
          backgroundColor: n.vars ? n.vars.palette.FilledInput.disabledBg : c,
        },
        variants: [
          {
            props: ({ ownerState: d }) => !d.disableUnderline,
            style: {
              "&::after": {
                left: 0,
                bottom: 0,
                content: '""',
                position: "absolute",
                right: 0,
                transform: "scaleX(0)",
                transition: n.transitions.create("transform", {
                  duration: n.transitions.duration.shorter,
                  easing: n.transitions.easing.easeOut,
                }),
                pointerEvents: "none",
              },
              [`&.${Do.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
              [`&.${Do.error}`]: {
                "&::before, &::after": { borderBottomColor: (n.vars || n).palette.error.main },
              },
              "&::before": {
                borderBottom: `1px solid ${n.vars ? n.alpha(n.vars.palette.common.onBackground, n.vars.opacity.inputUnderline) : l}`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: "absolute",
                right: 0,
                transition: n.transitions.create("border-bottom-color", {
                  duration: n.transitions.duration.shorter,
                }),
                pointerEvents: "none",
              },
              [`&:hover:not(.${Do.disabled}, .${Do.error}):before`]: {
                borderBottom: `1px solid ${(n.vars || n).palette.text.primary}`,
              },
              [`&.${Do.disabled}:before`]: { borderBottomStyle: "dotted" },
            },
          },
          ...Object.entries(n.palette)
            .filter(Jt())
            .map(([d]) => ({
              props: { disableUnderline: !1, color: d },
              style: {
                "&::after": { borderBottom: `2px solid ${(n.vars || n).palette[d]?.main}` },
              },
            })),
          { props: ({ ownerState: d }) => d.startAdornment, style: { paddingLeft: 12 } },
          { props: ({ ownerState: d }) => d.endAdornment, style: { paddingRight: 12 } },
          { props: ({ ownerState: d }) => d.multiline, style: { padding: "25px 12px 8px" } },
          {
            props: ({ ownerState: d, size: p }) => d.multiline && p === "small",
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: d }) => d.multiline && d.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: d }) => d.multiline && d.hiddenLabel && d.size === "small",
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      }
    })
  ),
  W5 = ce(Ru, { name: "MuiFilledInput", slot: "Input", overridesResolver: Eu })(
    De(({ theme: n }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!n.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow: n.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: n.palette.mode === "light" ? null : "#fff",
          caretColor: n.palette.mode === "light" ? null : "#fff",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
      }),
      ...(n.vars && {
        "&:-webkit-autofill": { borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" },
        [n.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        { props: { size: "small" }, style: { paddingTop: 21, paddingBottom: 4 } },
        {
          props: ({ ownerState: o }) => o.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        { props: ({ ownerState: o }) => o.startAdornment, style: { paddingLeft: 0 } },
        { props: ({ ownerState: o }) => o.endAdornment, style: { paddingRight: 0 } },
        {
          props: ({ ownerState: o }) => o.hiddenLabel && o.size === "small",
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: o }) => o.multiline,
          style: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 },
        },
      ],
    }))
  ),
  dp = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiFilledInput" }),
      {
        disableUnderline: s = !1,
        components: c = {},
        componentsProps: d,
        fullWidth: p = !1,
        hiddenLabel: m,
        inputComponent: h = "input",
        multiline: v = !1,
        slotProps: b,
        slots: R = {},
        type: M = "text",
        ...T
      } = i,
      x = { ...i, disableUnderline: s, fullWidth: p, inputComponent: h, multiline: v, type: M },
      A = X5(i),
      w = { root: { ownerState: x }, input: { ownerState: x } },
      k = (b ?? d) ? It(w, b ?? d) : w,
      O = R.root ?? c.Root ?? K5,
      N = R.input ?? c.Input ?? W5
    return E.jsx(Mu, {
      slots: { root: O, input: N },
      slotProps: k,
      fullWidth: p,
      inputComponent: h,
      multiline: v,
      ref: l,
      type: M,
      ...T,
      classes: A,
    })
  })
dp.muiName = "Input"
function Q5(n) {
  return Te("MuiFormControl", n)
}
Re("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"])
const Z5 = (n) => {
    const { classes: o, margin: l, fullWidth: i } = n,
      s = { root: ["root", l !== "none" && `margin${ie(l)}`, i && "fullWidth"] }
    return Me(s, Q5, o)
  },
  J5 = ce("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.root, o[`margin${ie(l.margin)}`], l.fullWidth && o.fullWidth]
    },
  })({
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top",
    variants: [
      { props: { margin: "normal" }, style: { marginTop: 16, marginBottom: 8 } },
      { props: { margin: "dense" }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: "100%" } },
    ],
  }),
  rb = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiFormControl" }),
      {
        children: s,
        className: c,
        color: d = "primary",
        component: p = "div",
        disabled: m = !1,
        error: h = !1,
        focused: v,
        fullWidth: b = !1,
        hiddenLabel: R = !1,
        margin: M = "none",
        required: T = !1,
        size: x = "medium",
        variant: A = "outlined",
        ...w
      } = i,
      k = {
        ...i,
        color: d,
        component: p,
        disabled: m,
        error: h,
        fullWidth: b,
        hiddenLabel: R,
        margin: M,
        required: T,
        size: x,
        variant: A,
      },
      O = Z5(k),
      [N, B] = y.useState(() => {
        let Y = !1
        return (
          s &&
            y.Children.forEach(s, (z) => {
              if (!Vs(z, ["Input", "Select"])) return
              const F = Vs(z, ["Select"]) ? z.props.input : z
              F && rR(F.props) && (Y = !0)
            }),
          Y
        )
      }),
      [_, U] = y.useState(() => {
        let Y = !1
        return (
          s &&
            y.Children.forEach(s, (z) => {
              Vs(z, ["Input", "Select"]) &&
                (nu(z.props, !0) || nu(z.props.inputProps, !0)) &&
                (Y = !0)
            }),
          Y
        )
      }),
      [H, X] = y.useState(!1)
    m && H && X(!1)
    const Q = v !== void 0 && !m ? v : H
    let te
    y.useRef(!1)
    const C = y.useCallback(() => {
        U(!0)
      }, []),
      W = y.useCallback(() => {
        U(!1)
      }, []),
      G = y.useMemo(
        () => ({
          adornedStart: N,
          setAdornedStart: B,
          color: d,
          disabled: m,
          error: h,
          filled: _,
          focused: Q,
          fullWidth: b,
          hiddenLabel: R,
          size: x,
          onBlur: () => {
            X(!1)
          },
          onFocus: () => {
            X(!0)
          },
          onEmpty: W,
          onFilled: C,
          registerEffect: te,
          required: T,
          variant: A,
        }),
        [N, d, m, h, _, Q, b, R, te, W, C, T, x, A]
      )
    return E.jsx(xu.Provider, {
      value: G,
      children: E.jsx(J5, {
        as: p,
        ownerState: k,
        className: pe(O.root, c),
        ref: l,
        ...w,
        children: s,
      }),
    })
  })
function e4(n) {
  return Te("MuiFormHelperText", n)
}
const O0 = Re("MuiFormHelperText", [
  "root",
  "error",
  "disabled",
  "sizeSmall",
  "sizeMedium",
  "contained",
  "focused",
  "filled",
  "required",
])
var N0
const t4 = (n) => {
    const {
        classes: o,
        contained: l,
        size: i,
        disabled: s,
        error: c,
        filled: d,
        focused: p,
        required: m,
      } = n,
      h = {
        root: [
          "root",
          s && "disabled",
          c && "error",
          i && `size${ie(i)}`,
          l && "contained",
          p && "focused",
          d && "filled",
          m && "required",
        ],
      }
    return Me(h, e4, o)
  },
  n4 = ce("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [
        o.root,
        l.size && o[`size${ie(l.size)}`],
        l.contained && o.contained,
        l.filled && o.filled,
      ]
    },
  })(
    De(({ theme: n }) => ({
      color: (n.vars || n).palette.text.secondary,
      ...n.typography.caption,
      textAlign: "left",
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${O0.disabled}`]: { color: (n.vars || n).palette.text.disabled },
      [`&.${O0.error}`]: { color: (n.vars || n).palette.error.main },
      variants: [
        { props: { size: "small" }, style: { marginTop: 4 } },
        { props: ({ ownerState: o }) => o.contained, style: { marginLeft: 14, marginRight: 14 } },
      ],
    }))
  ),
  a4 = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiFormHelperText" }),
      {
        children: s,
        className: c,
        component: d = "p",
        disabled: p,
        error: m,
        filled: h,
        focused: v,
        margin: b,
        required: R,
        variant: M,
        ...T
      } = i,
      x = co(),
      A = Ir({
        props: i,
        muiFormControl: x,
        states: ["variant", "size", "disabled", "error", "filled", "focused", "required"],
      }),
      w = {
        ...i,
        component: d,
        contained: A.variant === "filled" || A.variant === "outlined",
        variant: A.variant,
        size: A.size,
        disabled: A.disabled,
        error: A.error,
        filled: A.filled,
        focused: A.focused,
        required: A.required,
      }
    delete w.ownerState
    const k = t4(w)
    return E.jsx(n4, {
      as: d,
      className: pe(k.root, c),
      ref: l,
      ...T,
      ownerState: w,
      children:
        s === " "
          ? N0 ||
            (N0 = E.jsx("span", { className: "notranslate", "aria-hidden": !0, children: "​" }))
          : s,
    })
  })
function o4(n) {
  return Te("MuiFormLabel", n)
}
const Zl = Re("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  r4 = (n) => {
    const { classes: o, color: l, focused: i, disabled: s, error: c, filled: d, required: p } = n,
      m = {
        root: [
          "root",
          `color${ie(l)}`,
          s && "disabled",
          c && "error",
          d && "filled",
          i && "focused",
          p && "required",
        ],
        asterisk: ["asterisk", c && "error"],
      }
    return Me(m, o4, o)
  },
  l4 = ce("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.root, l.color === "secondary" && o.colorSecondary, l.filled && o.filled]
    },
  })(
    De(({ theme: n }) => ({
      color: (n.vars || n).palette.text.secondary,
      ...n.typography.body1,
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      variants: [
        ...Object.entries(n.palette)
          .filter(Jt())
          .map(([o]) => ({
            props: { color: o },
            style: { [`&.${Zl.focused}`]: { color: (n.vars || n).palette[o].main } },
          })),
        {
          props: {},
          style: {
            [`&.${Zl.disabled}`]: { color: (n.vars || n).palette.text.disabled },
            [`&.${Zl.error}`]: { color: (n.vars || n).palette.error.main },
          },
        },
      ],
    }))
  ),
  i4 = ce("span", { name: "MuiFormLabel", slot: "Asterisk" })(
    De(({ theme: n }) => ({ [`&.${Zl.error}`]: { color: (n.vars || n).palette.error.main } }))
  ),
  s4 = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiFormLabel" }),
      {
        children: s,
        className: c,
        color: d,
        component: p = "label",
        disabled: m,
        error: h,
        filled: v,
        focused: b,
        required: R,
        ...M
      } = i,
      T = co(),
      x = Ir({
        props: i,
        muiFormControl: T,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      A = {
        ...i,
        color: x.color || "primary",
        component: p,
        disabled: x.disabled,
        error: x.error,
        filled: x.filled,
        focused: x.focused,
        required: x.required,
      },
      w = r4(A)
    return E.jsxs(l4, {
      as: p,
      ownerState: A,
      className: pe(w.root, c),
      ref: l,
      ...M,
      children: [
        s,
        x.required &&
          E.jsxs(i4, {
            ownerState: A,
            "aria-hidden": !0,
            className: w.asterisk,
            children: [" ", "*"],
          }),
      ],
    })
  })
function _d(n) {
  return `scale(${n}, ${n ** 2})`
}
const u4 = {
    entering: { opacity: 1, transform: _d(1) },
    entered: { opacity: 1, transform: "none" },
  },
  ud =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  Ld = y.forwardRef(function (o, l) {
    const {
        addEndListener: i,
        appear: s = !0,
        children: c,
        easing: d,
        in: p,
        onEnter: m,
        onEntered: h,
        onEntering: v,
        onExit: b,
        onExited: R,
        onExiting: M,
        style: T,
        timeout: x = "auto",
        TransitionComponent: A = Xn,
        ...w
      } = o,
      k = fp(),
      O = y.useRef(),
      N = di(),
      B = y.useRef(null),
      _ = Ut(B, pi(c), l),
      U = (Y) => (z) => {
        if (Y) {
          const F = B.current
          z === void 0 ? Y(F) : Y(F, z)
        }
      },
      H = U(v),
      X = U((Y, z) => {
        Yv(Y)
        const {
          duration: F,
          delay: re,
          easing: ne,
        } = Lr({ style: T, timeout: x, easing: d }, { mode: "enter" })
        let fe
        ;(x === "auto"
          ? ((fe = N.transitions.getAutoHeightDuration(Y.clientHeight)), (O.current = fe))
          : (fe = F),
          (Y.style.transition = [
            N.transitions.create("opacity", { duration: fe, delay: re }),
            N.transitions.create("transform", {
              duration: ud ? fe : fe * 0.666,
              delay: re,
              easing: ne,
            }),
          ].join(",")),
          m && m(Y, z))
      }),
      Q = U(h),
      te = U(M),
      C = U((Y) => {
        const {
          duration: z,
          delay: F,
          easing: re,
        } = Lr({ style: T, timeout: x, easing: d }, { mode: "exit" })
        let ne
        ;(x === "auto"
          ? ((ne = N.transitions.getAutoHeightDuration(Y.clientHeight)), (O.current = ne))
          : (ne = z),
          (Y.style.transition = [
            N.transitions.create("opacity", { duration: ne, delay: F }),
            N.transitions.create("transform", {
              duration: ud ? ne : ne * 0.666,
              delay: ud ? F : F || ne * 0.333,
              easing: re,
            }),
          ].join(",")),
          (Y.style.opacity = 0),
          (Y.style.transform = _d(0.75)),
          b && b(Y))
      }),
      W = U(R),
      G = (Y) => {
        ;(x === "auto" && k.start(O.current || 0, Y), i && i(B.current, Y))
      }
    return E.jsx(A, {
      appear: s,
      in: p,
      nodeRef: B,
      onEnter: X,
      onEntered: Q,
      onEntering: H,
      onExit: C,
      onExited: W,
      onExiting: te,
      addEndListener: G,
      timeout: x === "auto" ? null : x,
      ...w,
      children: (Y, { ownerState: z, ...F }) =>
        y.cloneElement(c, {
          style: {
            opacity: 0,
            transform: _d(0.75),
            visibility: Y === "exited" && !p ? "hidden" : void 0,
            ...u4[Y],
            ...T,
            ...c.props.style,
          },
          ref: _,
          ...F,
        }),
    })
  })
Ld && (Ld.muiSupportAuto = !0)
const c4 = (n) => {
    const { classes: o, disableUnderline: l } = n,
      s = Me({ root: ["root", !l && "underline"], input: ["input"] }, sR, o)
    return { ...o, ...s }
  },
  f4 = ce(Tu, {
    shouldForwardProp: (n) => tn(n) || n === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [...Cu(n, o), !l.disableUnderline && o.underline]
    },
  })(
    De(({ theme: n }) => {
      let l = n.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)"
      return (
        n.vars && (l = n.alpha(n.vars.palette.common.onBackground, n.vars.opacity.inputUnderline)),
        {
          position: "relative",
          variants: [
            {
              props: ({ ownerState: i }) => i.formControl,
              style: { "label + &": { marginTop: 16 } },
            },
            {
              props: ({ ownerState: i }) => !i.disableUnderline,
              style: {
                "&::after": {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: "absolute",
                  right: 0,
                  transform: "scaleX(0)",
                  transition: n.transitions.create("transform", {
                    duration: n.transitions.duration.shorter,
                    easing: n.transitions.easing.easeOut,
                  }),
                  pointerEvents: "none",
                },
                [`&.${Hl.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
                [`&.${Hl.error}`]: {
                  "&::before, &::after": { borderBottomColor: (n.vars || n).palette.error.main },
                },
                "&::before": {
                  borderBottom: `1px solid ${l}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: "absolute",
                  right: 0,
                  transition: n.transitions.create("border-bottom-color", {
                    duration: n.transitions.duration.shorter,
                  }),
                  pointerEvents: "none",
                },
                [`&:hover:not(.${Hl.disabled}, .${Hl.error}):before`]: {
                  borderBottom: `2px solid ${(n.vars || n).palette.text.primary}`,
                  "@media (hover: none)": { borderBottom: `1px solid ${l}` },
                },
                [`&.${Hl.disabled}:before`]: { borderBottomStyle: "dotted" },
              },
            },
            ...Object.entries(n.palette)
              .filter(Jt())
              .map(([i]) => ({
                props: { color: i, disableUnderline: !1 },
                style: {
                  "&::after": { borderBottom: `2px solid ${(n.vars || n).palette[i].main}` },
                },
              })),
          ],
        }
      )
    })
  ),
  d4 = ce(Ru, { name: "MuiInput", slot: "Input", overridesResolver: Eu })({}),
  pp = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiInput" }),
      {
        disableUnderline: s = !1,
        components: c = {},
        componentsProps: d,
        fullWidth: p = !1,
        inputComponent: m = "input",
        multiline: h = !1,
        slotProps: v,
        slots: b = {},
        type: R = "text",
        ...M
      } = i,
      T = c4(i),
      A = { root: { ownerState: { disableUnderline: s } } },
      w = (v ?? d) ? It(v ?? d, A) : A,
      k = b.root ?? c.Root ?? f4,
      O = b.input ?? c.Input ?? d4
    return E.jsx(Mu, {
      slots: { root: k, input: O },
      slotProps: w,
      fullWidth: p,
      inputComponent: m,
      multiline: h,
      ref: l,
      type: R,
      ...M,
      classes: T,
    })
  })
pp.muiName = "Input"
function p4(n) {
  return Te("MuiInputAdornment", n)
}
const D0 = Re("MuiInputAdornment", [
  "root",
  "filled",
  "standard",
  "outlined",
  "positionStart",
  "positionEnd",
  "disablePointerEvents",
  "hiddenLabel",
  "sizeSmall",
])
var B0
const m4 = (n, o) => {
    const { ownerState: l } = n
    return [
      o.root,
      o[`position${ie(l.position)}`],
      l.disablePointerEvents === !0 && o.disablePointerEvents,
      o[l.variant],
    ]
  },
  h4 = (n) => {
    const {
        classes: o,
        disablePointerEvents: l,
        hiddenLabel: i,
        position: s,
        size: c,
        variant: d,
      } = n,
      p = {
        root: [
          "root",
          l && "disablePointerEvents",
          s && `position${ie(s)}`,
          d,
          i && "hiddenLabel",
          c && `size${ie(c)}`,
        ],
      }
    return Me(p, p4, o)
  },
  g4 = ce("div", { name: "MuiInputAdornment", slot: "Root", overridesResolver: m4 })(
    De(({ theme: n }) => ({
      display: "flex",
      maxHeight: "2em",
      alignItems: "center",
      whiteSpace: "nowrap",
      color: (n.vars || n).palette.action.active,
      variants: [
        {
          props: { variant: "filled" },
          style: { [`&.${D0.positionStart}&:not(.${D0.hiddenLabel})`]: { marginTop: 16 } },
        },
        { props: { position: "start" }, style: { marginRight: 8 } },
        { props: { position: "end" }, style: { marginLeft: 8 } },
        { props: { disablePointerEvents: !0 }, style: { pointerEvents: "none" } },
      ],
    }))
  ),
  y4 = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiInputAdornment" }),
      {
        children: s,
        className: c,
        component: d = "div",
        disablePointerEvents: p = !1,
        disableTypography: m = !1,
        position: h,
        variant: v,
        ...b
      } = i,
      R = co() || {}
    let M = v
    ;(v && R.variant, R && !M && (M = R.variant))
    const T = {
        ...i,
        hiddenLabel: R.hiddenLabel,
        size: R.size,
        disablePointerEvents: p,
        position: h,
        variant: M,
      },
      x = h4(T)
    return E.jsx(xu.Provider, {
      value: null,
      children: E.jsx(g4, {
        as: d,
        ownerState: T,
        className: pe(x.root, c),
        ref: l,
        ...b,
        children:
          typeof s == "string" && !m
            ? E.jsx(kt, { color: "textSecondary", children: s })
            : E.jsxs(y.Fragment, {
                children: [
                  h === "start"
                    ? B0 ||
                      (B0 = E.jsx("span", {
                        className: "notranslate",
                        "aria-hidden": !0,
                        children: "​",
                      }))
                    : null,
                  s,
                ],
              }),
      }),
    })
  })
function v4(n) {
  return Te("MuiInputLabel", n)
}
Re("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
])
const b4 = (n) => {
    const {
        classes: o,
        formControl: l,
        size: i,
        shrink: s,
        disableAnimation: c,
        variant: d,
        required: p,
      } = n,
      m = {
        root: [
          "root",
          l && "formControl",
          !c && "animated",
          s && "shrink",
          i && i !== "medium" && `size${ie(i)}`,
          d,
        ],
        asterisk: [p && "asterisk"],
      },
      h = Me(m, v4, o)
    return { ...o, ...h }
  },
  S4 = ce(s4, {
    shouldForwardProp: (n) => tn(n) || n === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [
        { [`& .${Zl.asterisk}`]: o.asterisk },
        o.root,
        l.formControl && o.formControl,
        l.size === "small" && o.sizeSmall,
        l.shrink && o.shrink,
        !l.disableAnimation && o.animated,
        l.focused && o.focused,
        o[l.variant],
      ]
    },
  })(
    De(({ theme: n }) => ({
      display: "block",
      transformOrigin: "top left",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100%",
      variants: [
        {
          props: ({ ownerState: o }) => o.formControl,
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            transform: "translate(0, 20px) scale(1)",
          },
        },
        { props: { size: "small" }, style: { transform: "translate(0, 17px) scale(1)" } },
        {
          props: ({ ownerState: o }) => o.shrink,
          style: {
            transform: "translate(0, -1.5px) scale(0.75)",
            transformOrigin: "top left",
            maxWidth: "133%",
          },
        },
        {
          props: ({ ownerState: o }) => !o.disableAnimation,
          style: {
            transition: n.transitions.create(["color", "transform", "max-width"], {
              duration: n.transitions.duration.shorter,
              easing: n.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: { variant: "filled" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "filled", size: "small" },
          style: { transform: "translate(12px, 13px) scale(1)" },
        },
        {
          props: ({ variant: o, ownerState: l }) => o === "filled" && l.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            transform: "translate(12px, 7px) scale(0.75)",
            maxWidth: "calc(133% - 24px)",
          },
        },
        {
          props: ({ variant: o, ownerState: l, size: i }) =>
            o === "filled" && l.shrink && i === "small",
          style: { transform: "translate(12px, 4px) scale(0.75)" },
        },
        {
          props: { variant: "outlined" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "outlined", size: "small" },
          style: { transform: "translate(14px, 9px) scale(1)" },
        },
        {
          props: ({ variant: o, ownerState: l }) => o === "outlined" && l.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          },
        },
      ],
    }))
  ),
  x4 = y.forwardRef(function (o, l) {
    const i = Ae({ name: "MuiInputLabel", props: o }),
      { disableAnimation: s = !1, margin: c, shrink: d, variant: p, className: m, ...h } = i,
      v = co()
    let b = d
    typeof b > "u" && v && (b = v.filled || v.focused || v.adornedStart)
    const R = Ir({
        props: i,
        muiFormControl: v,
        states: ["size", "variant", "required", "focused"],
      }),
      M = {
        ...i,
        disableAnimation: s,
        formControl: v,
        shrink: b,
        size: R.size,
        variant: R.variant,
        required: R.required,
        focused: R.focused,
      },
      T = b4(M)
    return E.jsx(S4, {
      "data-shrink": b,
      ref: l,
      className: pe(T.root, m),
      ...h,
      ownerState: M,
      classes: T,
    })
  }),
  qn = y.createContext({})
function C4(n) {
  return Te("MuiList", n)
}
Re("MuiList", ["root", "padding", "dense", "subheader"])
const E4 = (n) => {
    const { classes: o, disablePadding: l, dense: i, subheader: s } = n
    return Me({ root: ["root", !l && "padding", i && "dense", s && "subheader"] }, C4, o)
  },
  T4 = ce("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [
        o.root,
        !l.disablePadding && o.padding,
        l.dense && o.dense,
        l.subheader && o.subheader,
      ]
    },
  })({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    variants: [
      {
        props: ({ ownerState: n }) => !n.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: n }) => n.subheader, style: { paddingTop: 0 } },
    ],
  }),
  lb = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiList" }),
      {
        children: s,
        className: c,
        component: d = "ul",
        dense: p = !1,
        disablePadding: m = !1,
        subheader: h,
        ...v
      } = i,
      b = y.useMemo(() => ({ dense: p }), [p]),
      R = { ...i, component: d, dense: p, disablePadding: m },
      M = E4(R)
    return E.jsx(qn.Provider, {
      value: b,
      children: E.jsxs(T4, {
        as: d,
        className: pe(M.root, c),
        ref: l,
        ownerState: R,
        ...v,
        children: [h, s],
      }),
    })
  })
function R4(n) {
  return Te("MuiListItem", n)
}
Re("MuiListItem", [
  "root",
  "container",
  "dense",
  "alignItemsFlexStart",
  "divider",
  "gutters",
  "padding",
  "secondaryAction",
])
function M4(n) {
  return Te("MuiListItemButton", n)
}
const Nr = Re("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  A4 = (n, o) => {
    const { ownerState: l } = n
    return [
      o.root,
      l.dense && o.dense,
      l.alignItems === "flex-start" && o.alignItemsFlexStart,
      l.divider && o.divider,
      !l.disableGutters && o.gutters,
    ]
  },
  w4 = (n) => {
    const {
        alignItems: o,
        classes: l,
        dense: i,
        disabled: s,
        disableGutters: c,
        divider: d,
        selected: p,
      } = n,
      h = Me(
        {
          root: [
            "root",
            i && "dense",
            !c && "gutters",
            d && "divider",
            s && "disabled",
            o === "flex-start" && "alignItemsFlexStart",
            p && "selected",
          ],
        },
        M4,
        l
      )
    return { ...l, ...h }
  },
  z4 = ce(Ba, {
    shouldForwardProp: (n) => tn(n) || n === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: A4,
  })(
    De(({ theme: n }) => ({
      display: "flex",
      flexGrow: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      minWidth: 0,
      boxSizing: "border-box",
      textAlign: "left",
      paddingTop: 8,
      paddingBottom: 8,
      transition: n.transitions.create("background-color", {
        duration: n.transitions.duration.shortest,
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: (n.vars || n).palette.action.hover,
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      [`&.${Nr.selected}`]: {
        backgroundColor: n.alpha(
          (n.vars || n).palette.primary.main,
          (n.vars || n).palette.action.selectedOpacity
        ),
        [`&.${Nr.focusVisible}`]: {
          backgroundColor: n.alpha(
            (n.vars || n).palette.primary.main,
            `${(n.vars || n).palette.action.selectedOpacity} + ${(n.vars || n).palette.action.focusOpacity}`
          ),
        },
      },
      [`&.${Nr.selected}:hover`]: {
        backgroundColor: n.alpha(
          (n.vars || n).palette.primary.main,
          `${(n.vars || n).palette.action.selectedOpacity} + ${(n.vars || n).palette.action.hoverOpacity}`
        ),
        "@media (hover: none)": {
          backgroundColor: n.alpha(
            (n.vars || n).palette.primary.main,
            (n.vars || n).palette.action.selectedOpacity
          ),
        },
      },
      [`&.${Nr.focusVisible}`]: { backgroundColor: (n.vars || n).palette.action.focus },
      [`&.${Nr.disabled}`]: { opacity: (n.vars || n).palette.action.disabledOpacity },
      variants: [
        {
          props: ({ ownerState: o }) => o.divider,
          style: {
            borderBottom: `1px solid ${(n.vars || n).palette.divider}`,
            backgroundClip: "padding-box",
          },
        },
        { props: { alignItems: "flex-start" }, style: { alignItems: "flex-start" } },
        {
          props: ({ ownerState: o }) => !o.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        { props: ({ ownerState: o }) => o.dense, style: { paddingTop: 4, paddingBottom: 4 } },
      ],
    }))
  ),
  O4 = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiListItemButton" }),
      {
        alignItems: s = "center",
        autoFocus: c = !1,
        component: d = "div",
        children: p,
        dense: m = !1,
        disableGutters: h = !1,
        divider: v = !1,
        focusVisibleClassName: b,
        selected: R = !1,
        className: M,
        ...T
      } = i,
      x = y.useContext(qn),
      A = y.useMemo(
        () => ({ dense: m || x.dense || !1, alignItems: s, disableGutters: h }),
        [s, x.dense, m, h]
      ),
      w = y.useRef(null)
    Gn(() => {
      c && w.current && w.current.focus()
    }, [c])
    const k = { ...i, alignItems: s, dense: A.dense, disableGutters: h, divider: v, selected: R },
      O = w4(k),
      N = Ut(w, l)
    return E.jsx(qn.Provider, {
      value: A,
      children: E.jsx(z4, {
        ref: N,
        href: T.href || T.to,
        component: (T.href || T.to) && d === "div" ? "button" : d,
        focusVisibleClassName: pe(O.focusVisible, b),
        ownerState: k,
        className: pe(O.root, M),
        ...T,
        classes: O,
        children: p,
      }),
    })
  })
function N4(n) {
  return Te("MuiListItemSecondaryAction", n)
}
Re("MuiListItemSecondaryAction", ["root", "disableGutters"])
const D4 = (n) => {
    const { disableGutters: o, classes: l } = n
    return Me({ root: ["root", o && "disableGutters"] }, N4, l)
  },
  B4 = ce("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.root, l.disableGutters && o.disableGutters]
    },
  })({
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)",
    variants: [{ props: ({ ownerState: n }) => n.disableGutters, style: { right: 0 } }],
  }),
  ib = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiListItemSecondaryAction" }),
      { className: s, ...c } = i,
      d = y.useContext(qn),
      p = { ...i, disableGutters: d.disableGutters },
      m = D4(p)
    return E.jsx(B4, { className: pe(m.root, s), ownerState: p, ref: l, ...c })
  })
ib.muiName = "ListItemSecondaryAction"
const j4 = (n, o) => {
    const { ownerState: l } = n
    return [
      o.root,
      l.dense && o.dense,
      l.alignItems === "flex-start" && o.alignItemsFlexStart,
      l.divider && o.divider,
      !l.disableGutters && o.gutters,
      !l.disablePadding && o.padding,
      l.hasSecondaryAction && o.secondaryAction,
    ]
  },
  k4 = (n) => {
    const {
      alignItems: o,
      classes: l,
      dense: i,
      disableGutters: s,
      disablePadding: c,
      divider: d,
      hasSecondaryAction: p,
    } = n
    return Me(
      {
        root: [
          "root",
          i && "dense",
          !s && "gutters",
          !c && "padding",
          d && "divider",
          o === "flex-start" && "alignItemsFlexStart",
          p && "secondaryAction",
        ],
        container: ["container"],
        secondaryAction: ["secondaryAction"],
      },
      R4,
      l
    )
  },
  _4 = ce("div", { name: "MuiListItem", slot: "Root", overridesResolver: j4 })(
    De(({ theme: n }) => ({
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      width: "100%",
      boxSizing: "border-box",
      textAlign: "left",
      variants: [
        {
          props: ({ ownerState: o }) => !o.disablePadding,
          style: { paddingTop: 8, paddingBottom: 8 },
        },
        {
          props: ({ ownerState: o }) => !o.disablePadding && o.dense,
          style: { paddingTop: 4, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: o }) => !o.disablePadding && !o.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: o }) => !o.disablePadding && !!o.secondaryAction,
          style: { paddingRight: 48 },
        },
        {
          props: ({ ownerState: o }) => !!o.secondaryAction,
          style: { [`& > .${Nr.root}`]: { paddingRight: 48 } },
        },
        { props: { alignItems: "flex-start" }, style: { alignItems: "flex-start" } },
        {
          props: ({ ownerState: o }) => o.divider,
          style: {
            borderBottom: `1px solid ${(n.vars || n).palette.divider}`,
            backgroundClip: "padding-box",
          },
        },
        {
          props: ({ ownerState: o }) => o.button,
          style: {
            transition: n.transitions.create("background-color", {
              duration: n.transitions.duration.shortest,
            }),
            "&:hover": {
              textDecoration: "none",
              backgroundColor: (n.vars || n).palette.action.hover,
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
        },
        { props: ({ ownerState: o }) => o.hasSecondaryAction, style: { paddingRight: 48 } },
      ],
    }))
  ),
  L4 = ce("li", { name: "MuiListItem", slot: "Container" })({ position: "relative" }),
  $4 = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiListItem" }),
      {
        alignItems: s = "center",
        children: c,
        className: d,
        component: p,
        components: m = {},
        componentsProps: h = {},
        ContainerComponent: v = "li",
        ContainerProps: { className: b, ...R } = {},
        dense: M = !1,
        disableGutters: T = !1,
        disablePadding: x = !1,
        divider: A = !1,
        secondaryAction: w,
        slotProps: k = {},
        slots: O = {},
        ...N
      } = i,
      B = y.useContext(qn),
      _ = y.useMemo(
        () => ({ dense: M || B.dense || !1, alignItems: s, disableGutters: T }),
        [s, B.dense, M, T]
      ),
      U = y.useRef(null),
      H = y.Children.toArray(c),
      X = H.length && Vs(H[H.length - 1], ["ListItemSecondaryAction"]),
      Q = {
        ...i,
        alignItems: s,
        dense: _.dense,
        disableGutters: T,
        disablePadding: x,
        divider: A,
        hasSecondaryAction: X,
      },
      te = k4(Q),
      C = Ut(U, l),
      W = { slots: O, slotProps: k },
      [G, Y] = Le("secondaryAction", {
        elementType: ib,
        externalForwardedProps: W,
        ownerState: Q,
        className: te.secondaryAction,
      }),
      z = O.root || m.Root || _4,
      F = k.root || h.root || {},
      re = { className: pe(te.root, F.className, d), ...N }
    let ne = p || "li"
    return X
      ? ((ne = !re.component && !p ? "div" : ne),
        v === "li" &&
          (ne === "li" ? (ne = "div") : re.component === "li" && (re.component = "div")),
        E.jsx(qn.Provider, {
          value: _,
          children: E.jsxs(L4, {
            as: v,
            className: pe(te.container, b),
            ref: C,
            ownerState: Q,
            ...R,
            children: [
              E.jsx(z, {
                ...F,
                ...(!$r(z) && { as: ne, ownerState: { ...Q, ...F.ownerState } }),
                ...re,
                children: H,
              }),
              H.pop(),
            ],
          }),
        }))
      : E.jsx(qn.Provider, {
          value: _,
          children: E.jsxs(z, {
            ...F,
            as: ne,
            ref: C,
            ...(!$r(z) && { ownerState: { ...Q, ...F.ownerState } }),
            ...re,
            children: [H, w && E.jsx(G, { ...Y, children: w })],
          }),
        })
  })
function U4(n) {
  return Te("MuiListItemIcon", n)
}
const j0 = Re("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
  H4 = (n) => {
    const { alignItems: o, classes: l } = n
    return Me({ root: ["root", o === "flex-start" && "alignItemsFlexStart"] }, U4, l)
  },
  P4 = ce("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.root, l.alignItems === "flex-start" && o.alignItemsFlexStart]
    },
  })(
    De(({ theme: n }) => ({
      minWidth: 56,
      color: (n.vars || n).palette.action.active,
      flexShrink: 0,
      display: "inline-flex",
      variants: [{ props: { alignItems: "flex-start" }, style: { marginTop: 8 } }],
    }))
  ),
  Ys = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiListItemIcon" }),
      { className: s, ...c } = i,
      d = y.useContext(qn),
      p = { ...i, alignItems: d.alignItems },
      m = H4(p)
    return E.jsx(P4, { className: pe(m.root, s), ownerState: p, ref: l, ...c })
  })
function I4(n) {
  return Te("MuiListItemText", n)
}
const Dr = Re("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]),
  q4 = (n) => {
    const { classes: o, inset: l, primary: i, secondary: s, dense: c } = n
    return Me(
      {
        root: ["root", l && "inset", c && "dense", i && s && "multiline"],
        primary: ["primary"],
        secondary: ["secondary"],
      },
      I4,
      o
    )
  },
  V4 = ce("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [
        { [`& .${Dr.primary}`]: o.primary },
        { [`& .${Dr.secondary}`]: o.secondary },
        o.root,
        l.inset && o.inset,
        l.primary && l.secondary && o.multiline,
        l.dense && o.dense,
      ]
    },
  })({
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
    [`.${g0.root}:where(& .${Dr.primary})`]: { display: "block" },
    [`.${g0.root}:where(& .${Dr.secondary})`]: { display: "block" },
    variants: [
      {
        props: ({ ownerState: n }) => n.primary && n.secondary,
        style: { marginTop: 6, marginBottom: 6 },
      },
      { props: ({ ownerState: n }) => n.inset, style: { paddingLeft: 56 } },
    ],
  }),
  Fs = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiListItemText" }),
      {
        children: s,
        className: c,
        disableTypography: d = !1,
        inset: p = !1,
        primary: m,
        primaryTypographyProps: h,
        secondary: v,
        secondaryTypographyProps: b,
        slots: R = {},
        slotProps: M = {},
        ...T
      } = i,
      { dense: x } = y.useContext(qn)
    let A = m ?? s,
      w = v
    const k = { ...i, disableTypography: d, inset: p, primary: !!A, secondary: !!w, dense: x },
      O = q4(k),
      N = { slots: R, slotProps: { primary: h, secondary: b, ...M } },
      [B, _] = Le("root", {
        className: pe(O.root, c),
        elementType: V4,
        externalForwardedProps: { ...N, ...T },
        ownerState: k,
        ref: l,
      }),
      [U, H] = Le("primary", {
        className: O.primary,
        elementType: kt,
        externalForwardedProps: N,
        ownerState: k,
      }),
      [X, Q] = Le("secondary", {
        className: O.secondary,
        elementType: kt,
        externalForwardedProps: N,
        ownerState: k,
      })
    return (
      A != null &&
        A.type !== kt &&
        !d &&
        (A = E.jsx(U, {
          variant: x ? "body2" : "body1",
          component: H?.variant ? void 0 : "span",
          ...H,
          children: A,
        })),
      w != null &&
        w.type !== kt &&
        !d &&
        (w = E.jsx(X, { variant: "body2", color: "textSecondary", ...Q, children: w })),
      E.jsxs(B, { ..._, children: [A, w] })
    )
  })
function cd(n, o, l) {
  return n === o
    ? n.firstChild
    : o && o.nextElementSibling
      ? o.nextElementSibling
      : l
        ? null
        : n.firstChild
}
function k0(n, o, l) {
  return n === o
    ? l
      ? n.firstChild
      : n.lastChild
    : o && o.previousElementSibling
      ? o.previousElementSibling
      : l
        ? null
        : n.lastChild
}
function sb(n, o) {
  if (o === void 0) return !0
  let l = n.innerText
  return (
    l === void 0 && (l = n.textContent),
    (l = l.trim().toLowerCase()),
    l.length === 0 ? !1 : o.repeating ? l[0] === o.keys[0] : l.startsWith(o.keys.join(""))
  )
}
function Pl(n, o, l, i, s, c) {
  let d = !1,
    p = s(n, o, o ? l : !1)
  for (; p; ) {
    if (p === n.firstChild) {
      if (d) return !1
      d = !0
    }
    const m = i ? !1 : p.disabled || p.getAttribute("aria-disabled") === "true"
    if (!p.hasAttribute("tabindex") || !sb(p, c) || m) p = s(n, p, l)
    else return (p.focus(), !0)
  }
  return !1
}
const G4 = y.forwardRef(function (o, l) {
  const {
      actions: i,
      autoFocus: s = !1,
      autoFocusItem: c = !1,
      children: d,
      className: p,
      disabledItemsFocusable: m = !1,
      disableListWrap: h = !1,
      onKeyDown: v,
      variant: b = "selectedMenu",
      ...R
    } = o,
    M = y.useRef(null),
    T = y.useRef({ keys: [], repeating: !0, previousKeyMatched: !0, lastTime: null })
  ;(Gn(() => {
    s && M.current.focus()
  }, [s]),
    y.useImperativeHandle(
      i,
      () => ({
        adjustStyleForScrollbar: (O, { direction: N }) => {
          const B = !M.current.style.width
          if (O.clientHeight < M.current.clientHeight && B) {
            const _ = `${nb(Da(O))}px`
            ;((M.current.style[N === "rtl" ? "paddingLeft" : "paddingRight"] = _),
              (M.current.style.width = `calc(100% + ${_})`))
          }
          return M.current
        },
      }),
      []
    ))
  const x = (O) => {
      const N = M.current,
        B = O.key
      if (O.ctrlKey || O.metaKey || O.altKey) {
        v && v(O)
        return
      }
      const U = Xl(Yn(N))
      if (B === "ArrowDown") (O.preventDefault(), Pl(N, U, h, m, cd))
      else if (B === "ArrowUp") (O.preventDefault(), Pl(N, U, h, m, k0))
      else if (B === "Home") (O.preventDefault(), Pl(N, null, h, m, cd))
      else if (B === "End") (O.preventDefault(), Pl(N, null, h, m, k0))
      else if (B.length === 1) {
        const H = T.current,
          X = B.toLowerCase(),
          Q = performance.now()
        ;(H.keys.length > 0 &&
          (Q - H.lastTime > 500
            ? ((H.keys = []), (H.repeating = !0), (H.previousKeyMatched = !0))
            : H.repeating && X !== H.keys[0] && (H.repeating = !1)),
          (H.lastTime = Q),
          H.keys.push(X))
        const te = U && !H.repeating && sb(U, H)
        H.previousKeyMatched && (te || Pl(N, U, !1, m, cd, H))
          ? O.preventDefault()
          : (H.previousKeyMatched = !1)
      }
      v && v(O)
    },
    A = Ut(M, l)
  let w = -1
  y.Children.forEach(d, (O, N) => {
    if (!y.isValidElement(O)) {
      w === N && ((w += 1), w >= d.length && (w = -1))
      return
    }
    ;(O.props.disabled || (((b === "selectedMenu" && O.props.selected) || w === -1) && (w = N)),
      w === N &&
        (O.props.disabled || O.props.muiSkipListHighlight || O.type.muiSkipListHighlight) &&
        ((w += 1), w >= d.length && (w = -1)))
  })
  const k = y.Children.map(d, (O, N) => {
    if (N === w) {
      const B = {}
      return (
        c && (B.autoFocus = !0),
        O.props.tabIndex === void 0 && b === "selectedMenu" && (B.tabIndex = 0),
        y.cloneElement(O, B)
      )
    }
    return O
  })
  return E.jsx(lb, {
    role: "menu",
    ref: A,
    className: p,
    onKeyDown: x,
    tabIndex: s ? 0 : -1,
    ...R,
    children: k,
  })
})
function Y4(n) {
  return Te("MuiPopover", n)
}
Re("MuiPopover", ["root", "paper"])
function _0(n, o) {
  let l = 0
  return (
    typeof o == "number"
      ? (l = o)
      : o === "center"
        ? (l = n.height / 2)
        : o === "bottom" && (l = n.height),
    l
  )
}
function L0(n, o) {
  let l = 0
  return (
    typeof o == "number"
      ? (l = o)
      : o === "center"
        ? (l = n.width / 2)
        : o === "right" && (l = n.width),
    l
  )
}
function $0(n) {
  return [n.horizontal, n.vertical].map((o) => (typeof o == "number" ? `${o}px` : o)).join(" ")
}
function $s(n) {
  return typeof n == "function" ? n() : n
}
const F4 = (n) => {
    const { classes: o } = n
    return Me({ root: ["root"], paper: ["paper"] }, Y4, o)
  },
  X4 = ce(ab, { name: "MuiPopover", slot: "Root" })({}),
  ub = ce(sa, { name: "MuiPopover", slot: "Paper" })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  K4 = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiPopover" }),
      {
        action: s,
        anchorEl: c,
        anchorOrigin: d = { vertical: "top", horizontal: "left" },
        anchorPosition: p,
        anchorReference: m = "anchorEl",
        children: h,
        className: v,
        container: b,
        elevation: R = 8,
        marginThreshold: M = 16,
        open: T,
        PaperProps: x = {},
        slots: A = {},
        slotProps: w = {},
        transformOrigin: k = { vertical: "top", horizontal: "left" },
        TransitionComponent: O,
        transitionDuration: N = "auto",
        TransitionProps: B = {},
        disableScrollLock: _ = !1,
        ...U
      } = i,
      H = y.useRef(),
      X = {
        ...i,
        anchorOrigin: d,
        anchorReference: m,
        elevation: R,
        marginThreshold: M,
        transformOrigin: k,
        TransitionComponent: O,
        transitionDuration: N,
        TransitionProps: B,
      },
      Q = F4(X),
      te = y.useCallback(() => {
        if (m === "anchorPosition") return p
        const be = $s(c),
          $e = (be && be.nodeType === 1 ? be : Yn(H.current).body).getBoundingClientRect()
        return { top: $e.top + _0($e, d.vertical), left: $e.left + L0($e, d.horizontal) }
      }, [c, d.horizontal, d.vertical, p, m]),
      C = y.useCallback(
        (be) => ({ vertical: _0(be, k.vertical), horizontal: L0(be, k.horizontal) }),
        [k.horizontal, k.vertical]
      ),
      W = y.useCallback(
        (be) => {
          const ze = { width: be.offsetWidth, height: be.offsetHeight },
            $e = C(ze)
          if (m === "none") return { top: null, left: null, transformOrigin: $0($e) }
          const pt = te()
          let Ee = pt.top - $e.vertical,
            me = pt.left - $e.horizontal
          const Ze = Ee + ze.height,
            Ve = me + ze.width,
            Ue = Da($s(c)),
            Xe = Ue.innerHeight - M,
            St = Ue.innerWidth - M
          if (M !== null && Ee < M) {
            const ut = Ee - M
            ;((Ee -= ut), ($e.vertical += ut))
          } else if (M !== null && Ze > Xe) {
            const ut = Ze - Xe
            ;((Ee -= ut), ($e.vertical += ut))
          }
          if (M !== null && me < M) {
            const ut = me - M
            ;((me -= ut), ($e.horizontal += ut))
          } else if (Ve > St) {
            const ut = Ve - St
            ;((me -= ut), ($e.horizontal += ut))
          }
          return {
            top: `${Math.round(Ee)}px`,
            left: `${Math.round(me)}px`,
            transformOrigin: $0($e),
          }
        },
        [c, m, te, C, M]
      ),
      [G, Y] = y.useState(T),
      z = y.useCallback(() => {
        const be = H.current
        if (!be) return
        const ze = W(be)
        ;(ze.top !== null && be.style.setProperty("top", ze.top),
          ze.left !== null && (be.style.left = ze.left),
          (be.style.transformOrigin = ze.transformOrigin),
          Y(!0))
      }, [W])
    y.useEffect(
      () => (
        _ && window.addEventListener("scroll", z),
        () => window.removeEventListener("scroll", z)
      ),
      [c, _, z]
    )
    const F = () => {
        z()
      },
      re = () => {
        Y(!1)
      }
    ;(y.useEffect(() => {
      T && z()
    }),
      y.useImperativeHandle(
        s,
        () =>
          T
            ? {
                updatePosition: () => {
                  z()
                },
              }
            : null,
        [T, z]
      ),
      y.useEffect(() => {
        if (!T) return
        const be = Hv(() => {
            z()
          }),
          ze = Da($s(c))
        return (
          ze.addEventListener("resize", be),
          () => {
            ;(be.clear(), ze.removeEventListener("resize", be))
          }
        )
      }, [c, T, z]))
    let ne = N
    const fe = { slots: { transition: O, ...A }, slotProps: { transition: B, paper: x, ...w } },
      [D, q] = Le("transition", {
        elementType: Ld,
        externalForwardedProps: fe,
        ownerState: X,
        getSlotProps: (be) => ({
          ...be,
          onEntering: (ze, $e) => {
            ;(be.onEntering?.(ze, $e), F())
          },
          onExited: (ze) => {
            ;(be.onExited?.(ze), re())
          },
        }),
        additionalProps: { appear: !0, in: T },
      })
    N === "auto" && !D.muiSupportAuto && (ne = void 0)
    const ae = b || (c ? Yn($s(c)).body : void 0),
      [se, { slots: ue, slotProps: le, ...de }] = Le("root", {
        ref: l,
        elementType: X4,
        externalForwardedProps: { ...fe, ...U },
        shouldForwardComponentProp: !0,
        additionalProps: {
          slots: { backdrop: A.backdrop },
          slotProps: {
            backdrop: Pv(typeof w.backdrop == "function" ? w.backdrop(X) : w.backdrop, {
              invisible: !0,
            }),
          },
          container: ae,
          open: T,
        },
        ownerState: X,
        className: pe(Q.root, v),
      }),
      [Be, Se] = Le("paper", {
        ref: H,
        className: Q.paper,
        elementType: ub,
        externalForwardedProps: fe,
        shouldForwardComponentProp: !0,
        additionalProps: { elevation: R, style: G ? void 0 : { opacity: 0 } },
        ownerState: X,
      })
    return E.jsx(se, {
      ...de,
      ...(!$r(se) && { slots: ue, slotProps: le, disableScrollLock: _ }),
      children: E.jsx(D, { ...q, timeout: ne, children: E.jsx(Be, { ...Se, children: h }) }),
    })
  })
function W4(n) {
  return Te("MuiMenu", n)
}
Re("MuiMenu", ["root", "paper", "list"])
const Q4 = { vertical: "top", horizontal: "right" },
  Z4 = { vertical: "top", horizontal: "left" },
  J4 = (n) => {
    const { classes: o } = n
    return Me({ root: ["root"], paper: ["paper"], list: ["list"] }, W4, o)
  },
  e3 = ce(K4, {
    shouldForwardProp: (n) => tn(n) || n === "classes",
    name: "MuiMenu",
    slot: "Root",
  })({}),
  t3 = ce(ub, { name: "MuiMenu", slot: "Paper" })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch",
  }),
  n3 = ce(G4, { name: "MuiMenu", slot: "List" })({ outline: 0 }),
  cb = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiMenu" }),
      {
        autoFocus: s = !0,
        children: c,
        className: d,
        disableAutoFocusItem: p = !1,
        MenuListProps: m = {},
        onClose: h,
        open: v,
        PaperProps: b = {},
        PopoverClasses: R,
        transitionDuration: M = "auto",
        TransitionProps: { onEntering: T, ...x } = {},
        variant: A = "selectedMenu",
        slots: w = {},
        slotProps: k = {},
        ...O
      } = i,
      N = wC(),
      B = {
        ...i,
        autoFocus: s,
        disableAutoFocusItem: p,
        MenuListProps: m,
        onEntering: T,
        PaperProps: b,
        transitionDuration: M,
        TransitionProps: x,
        variant: A,
      },
      _ = J4(B),
      U = s && !p && v,
      H = y.useRef(null),
      X = (ne, fe) => {
        ;(H.current && H.current.adjustStyleForScrollbar(ne, { direction: N ? "rtl" : "ltr" }),
          T && T(ne, fe))
      },
      Q = (ne) => {
        ne.key === "Tab" && (ne.preventDefault(), h && h(ne, "tabKeyDown"))
      }
    let te = -1
    y.Children.map(c, (ne, fe) => {
      y.isValidElement(ne) &&
        (ne.props.disabled ||
          (((A === "selectedMenu" && ne.props.selected) || te === -1) && (te = fe)))
    })
    const C = { slots: w, slotProps: { list: m, transition: x, paper: b, ...k } },
      W = FT({
        elementType: w.root,
        externalSlotProps: k.root,
        ownerState: B,
        className: [_.root, d],
      }),
      [G, Y] = Le("paper", {
        className: _.paper,
        elementType: t3,
        externalForwardedProps: C,
        shouldForwardComponentProp: !0,
        ownerState: B,
      }),
      [z, F] = Le("list", {
        className: pe(_.list, m.className),
        elementType: n3,
        shouldForwardComponentProp: !0,
        externalForwardedProps: C,
        getSlotProps: (ne) => ({
          ...ne,
          onKeyDown: (fe) => {
            ;(Q(fe), ne.onKeyDown?.(fe))
          },
        }),
        ownerState: B,
      }),
      re =
        typeof C.slotProps.transition == "function"
          ? C.slotProps.transition(B)
          : C.slotProps.transition
    return E.jsx(e3, {
      onClose: h,
      anchorOrigin: { vertical: "bottom", horizontal: N ? "right" : "left" },
      transformOrigin: N ? Q4 : Z4,
      slots: {
        root: w.root,
        paper: G,
        backdrop: w.backdrop,
        ...(w.transition && { transition: w.transition }),
      },
      slotProps: {
        root: W,
        paper: Y,
        backdrop: typeof k.backdrop == "function" ? k.backdrop(B) : k.backdrop,
        transition: {
          ...re,
          onEntering: (...ne) => {
            ;(X(...ne), re?.onEntering?.(...ne))
          },
        },
      },
      open: v,
      ref: l,
      transitionDuration: M,
      ownerState: B,
      ...O,
      classes: R,
      children: E.jsx(z, {
        actions: H,
        autoFocus: s && (te === -1 || p),
        autoFocusItem: U,
        variant: A,
        ...F,
        children: c,
      }),
    })
  })
function a3(n) {
  return Te("MuiMenuItem", n)
}
const Il = Re("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  o3 = (n, o) => {
    const { ownerState: l } = n
    return [o.root, l.dense && o.dense, l.divider && o.divider, !l.disableGutters && o.gutters]
  },
  r3 = (n) => {
    const { disabled: o, dense: l, divider: i, disableGutters: s, selected: c, classes: d } = n,
      m = Me(
        {
          root: [
            "root",
            l && "dense",
            o && "disabled",
            !s && "gutters",
            i && "divider",
            c && "selected",
          ],
        },
        a3,
        d
      )
    return { ...d, ...m }
  },
  l3 = ce(Ba, {
    shouldForwardProp: (n) => tn(n) || n === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: o3,
  })(
    De(({ theme: n }) => ({
      ...n.typography.body1,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: "border-box",
      whiteSpace: "nowrap",
      "&:hover": {
        textDecoration: "none",
        backgroundColor: (n.vars || n).palette.action.hover,
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      [`&.${Il.selected}`]: {
        backgroundColor: n.alpha(
          (n.vars || n).palette.primary.main,
          (n.vars || n).palette.action.selectedOpacity
        ),
        [`&.${Il.focusVisible}`]: {
          backgroundColor: n.alpha(
            (n.vars || n).palette.primary.main,
            `${(n.vars || n).palette.action.selectedOpacity} + ${(n.vars || n).palette.action.focusOpacity}`
          ),
        },
      },
      [`&.${Il.selected}:hover`]: {
        backgroundColor: n.alpha(
          (n.vars || n).palette.primary.main,
          `${(n.vars || n).palette.action.selectedOpacity} + ${(n.vars || n).palette.action.hoverOpacity}`
        ),
        "@media (hover: none)": {
          backgroundColor: n.alpha(
            (n.vars || n).palette.primary.main,
            (n.vars || n).palette.action.selectedOpacity
          ),
        },
      },
      [`&.${Il.focusVisible}`]: { backgroundColor: (n.vars || n).palette.action.focus },
      [`&.${Il.disabled}`]: { opacity: (n.vars || n).palette.action.disabledOpacity },
      [`& + .${z0.root}`]: { marginTop: n.spacing(1), marginBottom: n.spacing(1) },
      [`& + .${z0.inset}`]: { marginLeft: 52 },
      [`& .${Dr.root}`]: { marginTop: 0, marginBottom: 0 },
      [`& .${Dr.inset}`]: { paddingLeft: 36 },
      [`& .${j0.root}`]: { minWidth: 36 },
      variants: [
        {
          props: ({ ownerState: o }) => !o.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: o }) => o.divider,
          style: {
            borderBottom: `1px solid ${(n.vars || n).palette.divider}`,
            backgroundClip: "padding-box",
          },
        },
        {
          props: ({ ownerState: o }) => !o.dense,
          style: { [n.breakpoints.up("sm")]: { minHeight: "auto" } },
        },
        {
          props: ({ ownerState: o }) => o.dense,
          style: {
            minHeight: 32,
            paddingTop: 4,
            paddingBottom: 4,
            ...n.typography.body2,
            [`& .${j0.root} svg`]: { fontSize: "1.25rem" },
          },
        },
      ],
    }))
  ),
  kr = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiMenuItem" }),
      {
        autoFocus: s = !1,
        component: c = "li",
        dense: d = !1,
        divider: p = !1,
        disableGutters: m = !1,
        focusVisibleClassName: h,
        role: v = "menuitem",
        tabIndex: b,
        className: R,
        ...M
      } = i,
      T = y.useContext(qn),
      x = y.useMemo(() => ({ dense: d || T.dense || !1, disableGutters: m }), [T.dense, d, m]),
      A = y.useRef(null)
    Gn(() => {
      s && A.current && A.current.focus()
    }, [s])
    const w = { ...i, dense: x.dense, divider: p, disableGutters: m },
      k = r3(i),
      O = Ut(A, l)
    let N
    return (
      i.disabled || (N = b !== void 0 ? b : -1),
      E.jsx(qn.Provider, {
        value: x,
        children: E.jsx(l3, {
          ref: O,
          role: v,
          tabIndex: N,
          component: c,
          focusVisibleClassName: pe(k.focusVisible, h),
          className: pe(k.root, R),
          ...M,
          ownerState: w,
          classes: k,
        }),
      })
    )
  })
function i3(n) {
  return Te("MuiNativeSelect", n)
}
const mp = Re("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  s3 = (n) => {
    const { classes: o, variant: l, disabled: i, multiple: s, open: c, error: d } = n,
      p = {
        select: ["select", l, i && "disabled", s && "multiple", d && "error"],
        icon: ["icon", `icon${ie(l)}`, c && "iconOpen", i && "disabled"],
      }
    return Me(p, i3, o)
  },
  fb = ce("select", { name: "MuiNativeSelect" })(({ theme: n }) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": { borderRadius: 0 },
    [`&.${mp.disabled}`]: { cursor: "default" },
    "&[multiple]": { height: "auto" },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
      backgroundColor: (n.vars || n).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: o }) => o.variant !== "filled" && o.variant !== "outlined",
        style: { "&&&": { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: "filled" }, style: { "&&&": { paddingRight: 32 } } },
      {
        props: { variant: "outlined" },
        style: {
          borderRadius: (n.vars || n).shape.borderRadius,
          "&:focus": { borderRadius: (n.vars || n).shape.borderRadius },
          "&&&": { paddingRight: 32 },
        },
      },
    ],
  })),
  u3 = ce(fb, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: tn,
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.select, o[l.variant], l.error && o.error, { [`&.${mp.multiple}`]: o.multiple }]
    },
  })({}),
  db = ce("svg", { name: "MuiNativeSelect" })(({ theme: n }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (n.vars || n).palette.action.active,
    [`&.${mp.disabled}`]: { color: (n.vars || n).palette.action.disabled },
    variants: [
      { props: ({ ownerState: o }) => o.open, style: { transform: "rotate(180deg)" } },
      { props: { variant: "filled" }, style: { right: 7 } },
      { props: { variant: "outlined" }, style: { right: 7 } },
    ],
  })),
  c3 = ce(db, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.icon, l.variant && o[`icon${ie(l.variant)}`], l.open && o.iconOpen]
    },
  })({}),
  f3 = y.forwardRef(function (o, l) {
    const {
        className: i,
        disabled: s,
        error: c,
        IconComponent: d,
        inputRef: p,
        variant: m = "standard",
        ...h
      } = o,
      v = { ...o, disabled: s, variant: m, error: c },
      b = s3(v)
    return E.jsxs(y.Fragment, {
      children: [
        E.jsx(u3, { ownerState: v, className: pe(b.select, i), disabled: s, ref: p || l, ...h }),
        o.multiple ? null : E.jsx(c3, { as: d, ownerState: v, className: b.icon }),
      ],
    })
  })
var U0
const d3 = ce("fieldset", { name: "MuiNotchedOutlined", shouldForwardProp: tn })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  p3 = ce("legend", { name: "MuiNotchedOutlined", shouldForwardProp: tn })(
    De(({ theme: n }) => ({
      float: "unset",
      width: "auto",
      overflow: "hidden",
      variants: [
        {
          props: ({ ownerState: o }) => !o.withLabel,
          style: {
            padding: 0,
            lineHeight: "11px",
            transition: n.transitions.create("width", {
              duration: 150,
              easing: n.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: o }) => o.withLabel,
          style: {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: n.transitions.create("max-width", {
              duration: 50,
              easing: n.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
        },
        {
          props: ({ ownerState: o }) => o.withLabel && o.notched,
          style: {
            maxWidth: "100%",
            transition: n.transitions.create("max-width", {
              duration: 100,
              easing: n.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    }))
  )
function m3(n) {
  const { children: o, classes: l, className: i, label: s, notched: c, ...d } = n,
    p = s != null && s !== "",
    m = { ...n, notched: c, withLabel: p }
  return E.jsx(d3, {
    "aria-hidden": !0,
    className: i,
    ownerState: m,
    ...d,
    children: E.jsx(p3, {
      ownerState: m,
      children: p
        ? E.jsx("span", { children: s })
        : U0 ||
          (U0 = E.jsx("span", { className: "notranslate", "aria-hidden": !0, children: "​" })),
    }),
  })
}
const h3 = (n) => {
    const { classes: o } = n,
      i = Me({ root: ["root"], notchedOutline: ["notchedOutline"], input: ["input"] }, uR, o)
    return { ...o, ...i }
  },
  g3 = ce(Tu, {
    shouldForwardProp: (n) => tn(n) || n === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Cu,
  })(
    De(({ theme: n }) => {
      const o = n.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"
      return {
        position: "relative",
        borderRadius: (n.vars || n).shape.borderRadius,
        [`&:hover .${ta.notchedOutline}`]: { borderColor: (n.vars || n).palette.text.primary },
        "@media (hover: none)": {
          [`&:hover .${ta.notchedOutline}`]: {
            borderColor: n.vars ? n.alpha(n.vars.palette.common.onBackground, 0.23) : o,
          },
        },
        [`&.${ta.focused} .${ta.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(n.palette)
            .filter(Jt())
            .map(([l]) => ({
              props: { color: l },
              style: {
                [`&.${ta.focused} .${ta.notchedOutline}`]: {
                  borderColor: (n.vars || n).palette[l].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${ta.error} .${ta.notchedOutline}`]: {
                borderColor: (n.vars || n).palette.error.main,
              },
              [`&.${ta.disabled} .${ta.notchedOutline}`]: {
                borderColor: (n.vars || n).palette.action.disabled,
              },
            },
          },
          { props: ({ ownerState: l }) => l.startAdornment, style: { paddingLeft: 14 } },
          { props: ({ ownerState: l }) => l.endAdornment, style: { paddingRight: 14 } },
          { props: ({ ownerState: l }) => l.multiline, style: { padding: "16.5px 14px" } },
          {
            props: ({ ownerState: l, size: i }) => l.multiline && i === "small",
            style: { padding: "8.5px 14px" },
          },
        ],
      }
    })
  ),
  y3 = ce(m3, { name: "MuiOutlinedInput", slot: "NotchedOutline" })(
    De(({ theme: n }) => {
      const o = n.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"
      return { borderColor: n.vars ? n.alpha(n.vars.palette.common.onBackground, 0.23) : o }
    })
  ),
  v3 = ce(Ru, { name: "MuiOutlinedInput", slot: "Input", overridesResolver: Eu })(
    De(({ theme: n }) => ({
      padding: "16.5px 14px",
      ...(!n.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow: n.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: n.palette.mode === "light" ? null : "#fff",
          caretColor: n.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      }),
      ...(n.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [n.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        { props: { size: "small" }, style: { padding: "8.5px 14px" } },
        { props: ({ ownerState: o }) => o.multiline, style: { padding: 0 } },
        { props: ({ ownerState: o }) => o.startAdornment, style: { paddingLeft: 0 } },
        { props: ({ ownerState: o }) => o.endAdornment, style: { paddingRight: 0 } },
      ],
    }))
  ),
  hp = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiOutlinedInput" }),
      {
        components: s = {},
        fullWidth: c = !1,
        inputComponent: d = "input",
        label: p,
        multiline: m = !1,
        notched: h,
        slots: v = {},
        slotProps: b = {},
        type: R = "text",
        ...M
      } = i,
      T = h3(i),
      x = co(),
      A = Ir({
        props: i,
        muiFormControl: x,
        states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"],
      }),
      w = {
        ...i,
        color: A.color || "primary",
        disabled: A.disabled,
        error: A.error,
        focused: A.focused,
        formControl: x,
        fullWidth: c,
        hiddenLabel: A.hiddenLabel,
        multiline: m,
        size: A.size,
        type: R,
      },
      k = v.root ?? s.Root ?? g3,
      O = v.input ?? s.Input ?? v3,
      [N, B] = Le("notchedOutline", {
        elementType: y3,
        className: T.notchedOutline,
        shouldForwardComponentProp: !0,
        ownerState: w,
        externalForwardedProps: { slots: v, slotProps: b },
        additionalProps: {
          label:
            p != null && p !== "" && A.required
              ? E.jsxs(y.Fragment, { children: [p, " ", "*"] })
              : p,
        },
      })
    return E.jsx(Mu, {
      slots: { root: k, input: O },
      slotProps: b,
      renderSuffix: (_) =>
        E.jsx(N, {
          ...B,
          notched: typeof h < "u" ? h : !!(_.startAdornment || _.filled || _.focused),
        }),
      fullWidth: c,
      inputComponent: d,
      multiline: m,
      ref: l,
      type: R,
      ...M,
      classes: { ...T, notchedOutline: null },
    })
  })
hp.muiName = "Input"
function pb(n) {
  return Te("MuiSelect", n)
}
const ql = Re("MuiSelect", [
  "root",
  "select",
  "multiple",
  "filled",
  "outlined",
  "standard",
  "disabled",
  "focused",
  "icon",
  "iconOpen",
  "iconFilled",
  "iconOutlined",
  "iconStandard",
  "nativeInput",
  "error",
])
var H0
const b3 = ce(fb, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [
        { [`&.${ql.select}`]: o.select },
        { [`&.${ql.select}`]: o[l.variant] },
        { [`&.${ql.error}`]: o.error },
        { [`&.${ql.multiple}`]: o.multiple },
      ]
    },
  })({
    [`&.${ql.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  S3 = ce(db, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.icon, l.variant && o[`icon${ie(l.variant)}`], l.open && o.iconOpen]
    },
  })({}),
  x3 = ce("input", {
    shouldForwardProp: (n) => Uv(n) && n !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  })
function P0(n, o) {
  return typeof o == "object" && o !== null ? n === o : String(n) === String(o)
}
function C3(n) {
  return n == null || (typeof n == "string" && !n.trim())
}
const E3 = (n) => {
    const { classes: o, variant: l, disabled: i, multiple: s, open: c, error: d } = n,
      p = {
        select: ["select", l, i && "disabled", s && "multiple", d && "error"],
        icon: ["icon", `icon${ie(l)}`, c && "iconOpen", i && "disabled"],
        nativeInput: ["nativeInput"],
      }
    return Me(p, pb, o)
  },
  T3 = y.forwardRef(function (o, l) {
    const {
        "aria-describedby": i,
        "aria-label": s,
        autoFocus: c,
        autoWidth: d,
        children: p,
        className: m,
        defaultOpen: h,
        defaultValue: v,
        disabled: b,
        displayEmpty: R,
        error: M = !1,
        IconComponent: T,
        inputRef: x,
        labelId: A,
        MenuProps: w = {},
        multiple: k,
        name: O,
        onBlur: N,
        onChange: B,
        onClose: _,
        onFocus: U,
        onKeyDown: H,
        onMouseDown: X,
        onOpen: Q,
        open: te,
        readOnly: C,
        renderValue: W,
        required: G,
        SelectDisplayProps: Y = {},
        tabIndex: z,
        type: F,
        value: re,
        variant: ne = "standard",
        ...fe
      } = o,
      [D, q] = Md({ controlled: re, default: v, name: "Select" }),
      [ae, se] = Md({ controlled: te, default: h, name: "Select" }),
      ue = y.useRef(null),
      le = y.useRef(null),
      [de, Be] = y.useState(null),
      { current: Se } = y.useRef(te != null),
      [be, ze] = y.useState(),
      $e = Ut(l, x),
      pt = y.useCallback((xe) => {
        ;((le.current = xe), xe && Be(xe))
      }, []),
      Ee = de?.parentNode
    ;(y.useImperativeHandle(
      $e,
      () => ({
        focus: () => {
          le.current.focus()
        },
        node: ue.current,
        value: D,
      }),
      [D]
    ),
      y.useEffect(() => {
        h && ae && de && !Se && (ze(d ? null : Ee.clientWidth), le.current.focus())
      }, [de, d]),
      y.useEffect(() => {
        c && le.current.focus()
      }, [c]),
      y.useEffect(() => {
        if (!A) return
        const xe = Yn(le.current).getElementById(A)
        if (xe) {
          const ft = () => {
            getSelection().isCollapsed && le.current.focus()
          }
          return (
            xe.addEventListener("click", ft),
            () => {
              xe.removeEventListener("click", ft)
            }
          )
        }
      }, [A]))
    const me = (xe, ft) => {
        ;(xe ? Q && Q(ft) : _ && _(ft), Se || (ze(d ? null : Ee.clientWidth), se(xe)))
      },
      Ze = (xe) => {
        ;(X?.(xe), xe.button === 0 && (xe.preventDefault(), le.current.focus(), me(!0, xe)))
      },
      Ve = (xe) => {
        me(!1, xe)
      },
      Ue = y.Children.toArray(p),
      Xe = (xe) => {
        const ft = Ue.find((Lt) => Lt.props.value === xe.target.value)
        ft !== void 0 && (q(ft.props.value), B && B(xe, ft))
      },
      St = (xe) => (ft) => {
        let Lt
        if (ft.currentTarget.hasAttribute("tabindex")) {
          if (k) {
            Lt = Array.isArray(D) ? D.slice() : []
            const $n = D.indexOf(xe.props.value)
            $n === -1 ? Lt.push(xe.props.value) : Lt.splice($n, 1)
          } else Lt = xe.props.value
          if ((xe.props.onClick && xe.props.onClick(ft), D !== Lt && (q(Lt), B))) {
            const $n = ft.nativeEvent || ft,
              fo = new $n.constructor($n.type, $n)
            ;(Object.defineProperty(fo, "target", { writable: !0, value: { value: Lt, name: O } }),
              B(fo, xe))
          }
          k || me(!1, ft)
        }
      },
      ut = (xe) => {
        C ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].includes(xe.key) &&
            (xe.preventDefault(), me(!0, xe)),
          H?.(xe))
      },
      ye = de !== null && ae,
      _n = (xe) => {
        !ye &&
          N &&
          (Object.defineProperty(xe, "target", { writable: !0, value: { value: D, name: O } }),
          N(xe))
      }
    delete fe["aria-invalid"]
    let He, ua
    const yt = []
    let Ge = !1
    ;(nu({ value: D }) || R) && (W ? (He = W(D)) : (Ge = !0))
    const Ct = Ue.map((xe) => {
      if (!y.isValidElement(xe)) return null
      let ft
      if (k) {
        if (!Array.isArray(D)) throw new Error(Na(2))
        ;((ft = D.some((Lt) => P0(Lt, xe.props.value))), ft && Ge && yt.push(xe.props.children))
      } else ((ft = P0(D, xe.props.value)), ft && Ge && (ua = xe.props.children))
      return y.cloneElement(xe, {
        "aria-selected": ft ? "true" : "false",
        onClick: St(xe),
        onKeyUp: (Lt) => {
          ;(Lt.key === " " && Lt.preventDefault(), xe.props.onKeyUp && xe.props.onKeyUp(Lt))
        },
        role: "option",
        selected: ft,
        value: void 0,
        "data-value": xe.props.value,
      })
    })
    Ge &&
      (k
        ? yt.length === 0
          ? (He = null)
          : (He = yt.reduce(
              (xe, ft, Lt) => (xe.push(ft), Lt < yt.length - 1 && xe.push(", "), xe),
              []
            ))
        : (He = ua))
    let _t = be
    !d && Se && de && (_t = Ee.clientWidth)
    let fn
    typeof z < "u" ? (fn = z) : (fn = b ? null : 0)
    const ct = Y.id || (O ? `mui-component-select-${O}` : void 0),
      Ln = { ...o, variant: ne, value: D, open: ye, error: M },
      xn = E3(Ln),
      qt = {
        ...w.PaperProps,
        ...(typeof w.slotProps?.paper == "function" ? w.slotProps.paper(Ln) : w.slotProps?.paper),
      },
      Kn = {
        ...w.MenuListProps,
        ...(typeof w.slotProps?.list == "function" ? w.slotProps.list(Ln) : w.slotProps?.list),
      },
      Wt = Pr()
    return E.jsxs(y.Fragment, {
      children: [
        E.jsx(b3, {
          as: "div",
          ref: pt,
          tabIndex: fn,
          role: "combobox",
          "aria-controls": ye ? Wt : void 0,
          "aria-disabled": b ? "true" : void 0,
          "aria-expanded": ye ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": s,
          "aria-labelledby": [A, ct].filter(Boolean).join(" ") || void 0,
          "aria-describedby": i,
          "aria-required": G ? "true" : void 0,
          "aria-invalid": M ? "true" : void 0,
          onKeyDown: ut,
          onMouseDown: b || C ? null : Ze,
          onBlur: _n,
          onFocus: U,
          ...Y,
          ownerState: Ln,
          className: pe(Y.className, xn.select, m),
          id: ct,
          children: C3(He)
            ? H0 ||
              (H0 = E.jsx("span", { className: "notranslate", "aria-hidden": !0, children: "​" }))
            : He,
        }),
        E.jsx(x3, {
          "aria-invalid": M,
          value: Array.isArray(D) ? D.join(",") : D,
          name: O,
          ref: ue,
          "aria-hidden": !0,
          onChange: Xe,
          tabIndex: -1,
          disabled: b,
          className: xn.nativeInput,
          autoFocus: c,
          required: G,
          ...fe,
          ownerState: Ln,
        }),
        E.jsx(S3, { as: T, className: xn.icon, ownerState: Ln }),
        E.jsx(cb, {
          id: `menu-${O || ""}`,
          anchorEl: Ee,
          open: ye,
          onClose: Ve,
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
          transformOrigin: { vertical: "top", horizontal: "center" },
          ...w,
          slotProps: {
            ...w.slotProps,
            list: {
              "aria-labelledby": A,
              role: "listbox",
              "aria-multiselectable": k ? "true" : void 0,
              disableListWrap: !0,
              id: Wt,
              ...Kn,
            },
            paper: { ...qt, style: { minWidth: _t, ...(qt != null ? qt.style : null) } },
          },
          children: Ct,
        }),
      ],
    })
  }),
  R3 = (n) => {
    const { classes: o } = n,
      i = Me({ root: ["root"] }, pb, o)
    return { ...o, ...i }
  },
  gp = { name: "MuiSelect", slot: "Root", shouldForwardProp: (n) => tn(n) && n !== "variant" },
  M3 = ce(pp, gp)(""),
  A3 = ce(hp, gp)(""),
  w3 = ce(dp, gp)(""),
  yp = y.forwardRef(function (o, l) {
    const i = Ae({ name: "MuiSelect", props: o }),
      {
        autoWidth: s = !1,
        children: c,
        classes: d = {},
        className: p,
        defaultOpen: m = !1,
        displayEmpty: h = !1,
        IconComponent: v = fR,
        id: b,
        input: R,
        inputProps: M,
        label: T,
        labelId: x,
        MenuProps: A,
        multiple: w = !1,
        native: k = !1,
        onClose: O,
        onOpen: N,
        open: B,
        renderValue: _,
        SelectDisplayProps: U,
        variant: H = "outlined",
        ...X
      } = i,
      Q = k ? f3 : T3,
      te = co(),
      C = Ir({ props: i, muiFormControl: te, states: ["variant", "error"] }),
      W = C.variant || H,
      G = { ...i, variant: W, classes: d },
      Y = R3(G),
      { root: z, ...F } = Y,
      re =
        R ||
        {
          standard: E.jsx(M3, { ownerState: G }),
          outlined: E.jsx(A3, { label: T, ownerState: G }),
          filled: E.jsx(w3, { ownerState: G }),
        }[W],
      ne = Ut(l, pi(re))
    return E.jsx(y.Fragment, {
      children: y.cloneElement(re, {
        inputComponent: Q,
        inputProps: {
          children: c,
          error: C.error,
          IconComponent: v,
          variant: W,
          type: void 0,
          multiple: w,
          ...(k
            ? { id: b }
            : {
                autoWidth: s,
                defaultOpen: m,
                displayEmpty: h,
                labelId: x,
                MenuProps: A,
                onClose: O,
                onOpen: N,
                open: B,
                renderValue: _,
                SelectDisplayProps: { id: b, ...U },
              }),
          ...M,
          classes: M ? It(F, M.classes) : F,
          ...(R ? R.props.inputProps : {}),
        },
        ...(((w && k) || h) && W === "outlined" ? { notched: !0 } : {}),
        ref: ne,
        className: pe(re.props.className, p, Y.root),
        ...(!R && { variant: W }),
        ...X,
      }),
    })
  })
yp.muiName = "Select"
const $d = lE({
  createStyledComponent: ce("div", { name: "MuiStack", slot: "Root" }),
  useThemeProps: (n) => Ae({ props: n, name: "MuiStack" }),
})
function z3(n) {
  return Te("MuiToolbar", n)
}
Re("MuiToolbar", ["root", "gutters", "regular", "dense"])
const O3 = (n) => {
    const { classes: o, disableGutters: l, variant: i } = n
    return Me({ root: ["root", !l && "gutters", i] }, z3, o)
  },
  N3 = ce("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n
      return [o.root, !l.disableGutters && o.gutters, o[l.variant]]
    },
  })(
    De(({ theme: n }) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      variants: [
        {
          props: ({ ownerState: o }) => !o.disableGutters,
          style: {
            paddingLeft: n.spacing(2),
            paddingRight: n.spacing(2),
            [n.breakpoints.up("sm")]: { paddingLeft: n.spacing(3), paddingRight: n.spacing(3) },
          },
        },
        { props: { variant: "dense" }, style: { minHeight: 48 } },
        { props: { variant: "regular" }, style: n.mixins.toolbar },
      ],
    }))
  ),
  D3 = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiToolbar" }),
      {
        className: s,
        component: c = "div",
        disableGutters: d = !1,
        variant: p = "regular",
        ...m
      } = i,
      h = { ...i, component: c, disableGutters: d, variant: p },
      v = O3(h)
    return E.jsx(N3, { as: c, className: pe(v.root, s), ref: l, ownerState: h, ...m })
  })
function B3(n) {
  return Te("MuiTextField", n)
}
Re("MuiTextField", ["root"])
const j3 = { standard: pp, filled: dp, outlined: hp },
  k3 = (n) => {
    const { classes: o } = n
    return Me({ root: ["root"] }, B3, o)
  },
  _3 = ce(rb, { name: "MuiTextField", slot: "Root" })({}),
  fd = y.forwardRef(function (o, l) {
    const i = Ae({ props: o, name: "MuiTextField" }),
      {
        autoComplete: s,
        autoFocus: c = !1,
        children: d,
        className: p,
        color: m = "primary",
        defaultValue: h,
        disabled: v = !1,
        error: b = !1,
        FormHelperTextProps: R,
        fullWidth: M = !1,
        helperText: T,
        id: x,
        InputLabelProps: A,
        inputProps: w,
        InputProps: k,
        inputRef: O,
        label: N,
        maxRows: B,
        minRows: _,
        multiline: U = !1,
        name: H,
        onBlur: X,
        onChange: Q,
        onFocus: te,
        placeholder: C,
        required: W = !1,
        rows: G,
        select: Y = !1,
        SelectProps: z,
        slots: F = {},
        slotProps: re = {},
        type: ne,
        value: fe,
        variant: D = "outlined",
        ...q
      } = i,
      ae = {
        ...i,
        autoFocus: c,
        color: m,
        disabled: v,
        error: b,
        fullWidth: M,
        multiline: U,
        required: W,
        select: Y,
        variant: D,
      },
      se = k3(ae),
      ue = Pr(x),
      le = T && ue ? `${ue}-helper-text` : void 0,
      de = N && ue ? `${ue}-label` : void 0,
      Be = j3[D],
      Se = {
        slots: F,
        slotProps: { input: k, inputLabel: A, htmlInput: w, formHelperText: R, select: z, ...re },
      },
      be = {},
      ze = Se.slotProps.inputLabel
    ;(D === "outlined" &&
      (ze && typeof ze.shrink < "u" && (be.notched = ze.shrink), (be.label = N)),
      Y && ((!z || !z.native) && (be.id = void 0), (be["aria-describedby"] = void 0)))
    const [$e, pt] = Le("root", {
        elementType: _3,
        shouldForwardComponentProp: !0,
        externalForwardedProps: { ...Se, ...q },
        ownerState: ae,
        className: pe(se.root, p),
        ref: l,
        additionalProps: { disabled: v, error: b, fullWidth: M, required: W, color: m, variant: D },
      }),
      [Ee, me] = Le("input", {
        elementType: Be,
        externalForwardedProps: Se,
        additionalProps: be,
        ownerState: ae,
      }),
      [Ze, Ve] = Le("inputLabel", { elementType: x4, externalForwardedProps: Se, ownerState: ae }),
      [Ue, Xe] = Le("htmlInput", {
        elementType: "input",
        externalForwardedProps: Se,
        ownerState: ae,
      }),
      [St, ut] = Le("formHelperText", {
        elementType: a4,
        externalForwardedProps: Se,
        ownerState: ae,
      }),
      [ye, _n] = Le("select", { elementType: yp, externalForwardedProps: Se, ownerState: ae }),
      He = E.jsx(Ee, {
        "aria-describedby": le,
        autoComplete: s,
        autoFocus: c,
        defaultValue: h,
        fullWidth: M,
        multiline: U,
        name: H,
        rows: G,
        maxRows: B,
        minRows: _,
        type: ne,
        value: fe,
        id: ue,
        inputRef: O,
        onBlur: X,
        onChange: Q,
        onFocus: te,
        placeholder: C,
        inputProps: Xe,
        slots: { input: F.htmlInput ? Ue : void 0 },
        ...me,
      })
    return E.jsxs($e, {
      ...pt,
      children: [
        N != null && N !== "" && E.jsx(Ze, { htmlFor: ue, id: de, ...Ve, children: N }),
        Y
          ? E.jsx(ye, {
              "aria-describedby": le,
              id: ue,
              labelId: de,
              value: fe,
              input: He,
              ..._n,
              children: d,
            })
          : He,
        T && E.jsx(St, { id: le, ...ut, children: T }),
      ],
    })
  })
var I0 = "popstate"
function L3(n = {}) {
  function o(i, s) {
    let { pathname: c, search: d, hash: p } = i.location
    return Ud(
      "",
      { pathname: c, search: d, hash: p },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    )
  }
  function l(i, s) {
    return typeof s == "string" ? s : oi(s)
  }
  return U3(o, l, null, n)
}
function xt(n, o) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(o)
}
function Fn(n, o) {
  if (!n) {
    typeof console < "u" && console.warn(o)
    try {
      throw new Error(o)
    } catch {}
  }
}
function $3() {
  return Math.random().toString(36).substring(2, 10)
}
function q0(n, o) {
  return { usr: n.state, key: n.key, idx: o }
}
function Ud(n, o, l = null, i) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...(typeof o == "string" ? qr(o) : o),
    state: l,
    key: (o && o.key) || i || $3(),
  }
}
function oi({ pathname: n = "/", search: o = "", hash: l = "" }) {
  return (
    o && o !== "?" && (n += o.charAt(0) === "?" ? o : "?" + o),
    l && l !== "#" && (n += l.charAt(0) === "#" ? l : "#" + l),
    n
  )
}
function qr(n) {
  let o = {}
  if (n) {
    let l = n.indexOf("#")
    l >= 0 && ((o.hash = n.substring(l)), (n = n.substring(0, l)))
    let i = n.indexOf("?")
    ;(i >= 0 && ((o.search = n.substring(i)), (n = n.substring(0, i))), n && (o.pathname = n))
  }
  return o
}
function U3(n, o, l, i = {}) {
  let { window: s = document.defaultView, v5Compat: c = !1 } = i,
    d = s.history,
    p = "POP",
    m = null,
    h = v()
  h == null && ((h = 0), d.replaceState({ ...d.state, idx: h }, ""))
  function v() {
    return (d.state || { idx: null }).idx
  }
  function b() {
    p = "POP"
    let A = v(),
      w = A == null ? null : A - h
    ;((h = A), m && m({ action: p, location: x.location, delta: w }))
  }
  function R(A, w) {
    p = "PUSH"
    let k = Ud(x.location, A, w)
    h = v() + 1
    let O = q0(k, h),
      N = x.createHref(k)
    try {
      d.pushState(O, "", N)
    } catch (B) {
      if (B instanceof DOMException && B.name === "DataCloneError") throw B
      s.location.assign(N)
    }
    c && m && m({ action: p, location: x.location, delta: 1 })
  }
  function M(A, w) {
    p = "REPLACE"
    let k = Ud(x.location, A, w)
    h = v()
    let O = q0(k, h),
      N = x.createHref(k)
    ;(d.replaceState(O, "", N), c && m && m({ action: p, location: x.location, delta: 0 }))
  }
  function T(A) {
    return H3(A)
  }
  let x = {
    get action() {
      return p
    },
    get location() {
      return n(s, d)
    },
    listen(A) {
      if (m) throw new Error("A history only accepts one active listener")
      return (
        s.addEventListener(I0, b),
        (m = A),
        () => {
          ;(s.removeEventListener(I0, b), (m = null))
        }
      )
    },
    createHref(A) {
      return o(s, A)
    },
    createURL: T,
    encodeLocation(A) {
      let w = T(A)
      return { pathname: w.pathname, search: w.search, hash: w.hash }
    },
    push: R,
    replace: M,
    go(A) {
      return d.go(A)
    },
  }
  return x
}
function H3(n, o = !1) {
  let l = "http://localhost"
  ;(typeof window < "u" &&
    (l = window.location.origin !== "null" ? window.location.origin : window.location.href),
    xt(l, "No window.location.(origin|href) available to create URL"))
  let i = typeof n == "string" ? n : oi(n)
  return ((i = i.replace(/ $/, "%20")), !o && i.startsWith("//") && (i = l + i), new URL(i, l))
}
function mb(n, o, l = "/") {
  return P3(n, o, l, !1)
}
function P3(n, o, l, i) {
  let s = typeof o == "string" ? qr(o) : o,
    c = ja(s.pathname || "/", l)
  if (c == null) return null
  let d = hb(n)
  I3(d)
  let p = null
  for (let m = 0; p == null && m < d.length; ++m) {
    let h = J3(c)
    p = Q3(d[m], h, i)
  }
  return p
}
function hb(n, o = [], l = [], i = "", s = !1) {
  let c = (d, p, m = s, h) => {
    let v = {
      relativePath: h === void 0 ? d.path || "" : h,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: p,
      route: d,
    }
    if (v.relativePath.startsWith("/")) {
      if (!v.relativePath.startsWith(i) && m) return
      ;(xt(
        v.relativePath.startsWith(i),
        `Absolute route path "${v.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (v.relativePath = v.relativePath.slice(i.length)))
    }
    let b = Oa([i, v.relativePath]),
      R = l.concat(v)
    ;(d.children &&
      d.children.length > 0 &&
      (xt(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${b}".`
      ),
      hb(d.children, o, R, b, m)),
      !(d.path == null && !d.index) && o.push({ path: b, score: K3(b, d.index), routesMeta: R }))
  }
  return (
    n.forEach((d, p) => {
      if (d.path === "" || !d.path?.includes("?")) c(d, p)
      else for (let m of gb(d.path)) c(d, p, !0, m)
    }),
    o
  )
}
function gb(n) {
  let o = n.split("/")
  if (o.length === 0) return []
  let [l, ...i] = o,
    s = l.endsWith("?"),
    c = l.replace(/\?$/, "")
  if (i.length === 0) return s ? [c, ""] : [c]
  let d = gb(i.join("/")),
    p = []
  return (
    p.push(...d.map((m) => (m === "" ? c : [c, m].join("/")))),
    s && p.push(...d),
    p.map((m) => (n.startsWith("/") && m === "" ? "/" : m))
  )
}
function I3(n) {
  n.sort((o, l) =>
    o.score !== l.score
      ? l.score - o.score
      : W3(
          o.routesMeta.map((i) => i.childrenIndex),
          l.routesMeta.map((i) => i.childrenIndex)
        )
  )
}
var q3 = /^:[\w-]+$/,
  V3 = 3,
  G3 = 2,
  Y3 = 1,
  F3 = 10,
  X3 = -2,
  V0 = (n) => n === "*"
function K3(n, o) {
  let l = n.split("/"),
    i = l.length
  return (
    l.some(V0) && (i += X3),
    o && (i += G3),
    l.filter((s) => !V0(s)).reduce((s, c) => s + (q3.test(c) ? V3 : c === "" ? Y3 : F3), i)
  )
}
function W3(n, o) {
  return n.length === o.length && n.slice(0, -1).every((i, s) => i === o[s])
    ? n[n.length - 1] - o[o.length - 1]
    : 0
}
function Q3(n, o, l = !1) {
  let { routesMeta: i } = n,
    s = {},
    c = "/",
    d = []
  for (let p = 0; p < i.length; ++p) {
    let m = i[p],
      h = p === i.length - 1,
      v = c === "/" ? o : o.slice(c.length) || "/",
      b = ou({ path: m.relativePath, caseSensitive: m.caseSensitive, end: h }, v),
      R = m.route
    if (
      (!b &&
        h &&
        l &&
        !i[i.length - 1].route.index &&
        (b = ou({ path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 }, v)),
      !b)
    )
      return null
    ;(Object.assign(s, b.params),
      d.push({
        params: s,
        pathname: Oa([c, b.pathname]),
        pathnameBase: aM(Oa([c, b.pathnameBase])),
        route: R,
      }),
      b.pathnameBase !== "/" && (c = Oa([c, b.pathnameBase])))
  }
  return d
}
function ou(n, o) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 })
  let [l, i] = Z3(n.path, n.caseSensitive, n.end),
    s = o.match(l)
  if (!s) return null
  let c = s[0],
    d = c.replace(/(.)\/+$/, "$1"),
    p = s.slice(1)
  return {
    params: i.reduce((h, { paramName: v, isOptional: b }, R) => {
      if (v === "*") {
        let T = p[R] || ""
        d = c.slice(0, c.length - T.length).replace(/(.)\/+$/, "$1")
      }
      const M = p[R]
      return (b && !M ? (h[v] = void 0) : (h[v] = (M || "").replace(/%2F/g, "/")), h)
    }, {}),
    pathname: c,
    pathnameBase: d,
    pattern: n,
  }
}
function Z3(n, o = !1, l = !0) {
  Fn(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`
  )
  let i = [],
    s =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, p, m) => (
            i.push({ paramName: p, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2")
  return (
    n.endsWith("*")
      ? (i.push({ paramName: "*" }), (s += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : l
        ? (s += "\\/*$")
        : n !== "" && n !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, o ? void 0 : "i"), i]
  )
}
function J3(n) {
  try {
    return n
      .split("/")
      .map((o) => decodeURIComponent(o).replace(/\//g, "%2F"))
      .join("/")
  } catch (o) {
    return (
      Fn(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
      ),
      n
    )
  }
}
function ja(n, o) {
  if (o === "/") return n
  if (!n.toLowerCase().startsWith(o.toLowerCase())) return null
  let l = o.endsWith("/") ? o.length - 1 : o.length,
    i = n.charAt(l)
  return i && i !== "/" ? null : n.slice(l) || "/"
}
var yb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  eM = (n) => yb.test(n)
function tM(n, o = "/") {
  let { pathname: l, search: i = "", hash: s = "" } = typeof n == "string" ? qr(n) : n,
    c
  if (l)
    if (eM(l)) c = l
    else {
      if (l.includes("//")) {
        let d = l
        ;((l = l.replace(/\/\/+/g, "/")),
          Fn(!1, `Pathnames cannot have embedded double slashes - normalizing ${d} -> ${l}`))
      }
      l.startsWith("/") ? (c = G0(l.substring(1), "/")) : (c = G0(l, o))
    }
  else c = o
  return { pathname: c, search: oM(i), hash: rM(s) }
}
function G0(n, o) {
  let l = o.replace(/\/+$/, "").split("/")
  return (
    n.split("/").forEach((s) => {
      s === ".." ? l.length > 1 && l.pop() : s !== "." && l.push(s)
    }),
    l.length > 1 ? l.join("/") : "/"
  )
}
function dd(n, o, l, i) {
  return `Cannot include a '${n}' character in a manually specified \`to.${o}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function nM(n) {
  return n.filter((o, l) => l === 0 || (o.route.path && o.route.path.length > 0))
}
function vb(n) {
  let o = nM(n)
  return o.map((l, i) => (i === o.length - 1 ? l.pathname : l.pathnameBase))
}
function bb(n, o, l, i = !1) {
  let s
  typeof n == "string"
    ? (s = qr(n))
    : ((s = { ...n }),
      xt(!s.pathname || !s.pathname.includes("?"), dd("?", "pathname", "search", s)),
      xt(!s.pathname || !s.pathname.includes("#"), dd("#", "pathname", "hash", s)),
      xt(!s.search || !s.search.includes("#"), dd("#", "search", "hash", s)))
  let c = n === "" || s.pathname === "",
    d = c ? "/" : s.pathname,
    p
  if (d == null) p = l
  else {
    let b = o.length - 1
    if (!i && d.startsWith("..")) {
      let R = d.split("/")
      for (; R[0] === ".."; ) (R.shift(), (b -= 1))
      s.pathname = R.join("/")
    }
    p = b >= 0 ? o[b] : "/"
  }
  let m = tM(s, p),
    h = d && d !== "/" && d.endsWith("/"),
    v = (c || d === ".") && l.endsWith("/")
  return (!m.pathname.endsWith("/") && (h || v) && (m.pathname += "/"), m)
}
var Oa = (n) => n.join("/").replace(/\/\/+/g, "/"),
  aM = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  oM = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  rM = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n),
  lM = class {
    constructor(n, o, l, i = !1) {
      ;((this.status = n),
        (this.statusText = o || ""),
        (this.internal = i),
        l instanceof Error ? ((this.data = l.toString()), (this.error = l)) : (this.data = l))
    }
  }
function iM(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  )
}
function sM(n) {
  return (
    n
      .map((o) => o.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  )
}
var Sb =
  typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
function xb(n, o) {
  let l = n
  if (typeof l != "string" || !yb.test(l)) return { absoluteURL: void 0, isExternal: !1, to: l }
  let i = l,
    s = !1
  if (Sb)
    try {
      let c = new URL(window.location.href),
        d = l.startsWith("//") ? new URL(c.protocol + l) : new URL(l),
        p = ja(d.pathname, o)
      d.origin === c.origin && p != null ? (l = p + d.search + d.hash) : (s = !0)
    } catch {
      Fn(
        !1,
        `<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      )
    }
  return { absoluteURL: i, isExternal: s, to: l }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0")
var Cb = ["POST", "PUT", "PATCH", "DELETE"]
new Set(Cb)
var uM = ["GET", ...Cb]
new Set(uM)
var Vr = y.createContext(null)
Vr.displayName = "DataRouter"
var Au = y.createContext(null)
Au.displayName = "DataRouterState"
var cM = y.createContext(!1),
  Eb = y.createContext({ isTransitioning: !1 })
Eb.displayName = "ViewTransition"
var fM = y.createContext(new Map())
fM.displayName = "Fetchers"
var dM = y.createContext(null)
dM.displayName = "Await"
var kn = y.createContext(null)
kn.displayName = "Navigation"
var mi = y.createContext(null)
mi.displayName = "Location"
var ka = y.createContext({ outlet: null, matches: [], isDataRoute: !1 })
ka.displayName = "Route"
var vp = y.createContext(null)
vp.displayName = "RouteError"
var Tb = "REACT_ROUTER_ERROR",
  pM = "REDIRECT",
  mM = "ROUTE_ERROR_RESPONSE"
function hM(n) {
  if (n.startsWith(`${Tb}:${pM}:{`))
    try {
      let o = JSON.parse(n.slice(28))
      if (
        typeof o == "object" &&
        o &&
        typeof o.status == "number" &&
        typeof o.statusText == "string" &&
        typeof o.location == "string" &&
        typeof o.reloadDocument == "boolean" &&
        typeof o.replace == "boolean"
      )
        return o
    } catch {}
}
function gM(n) {
  if (n.startsWith(`${Tb}:${mM}:{`))
    try {
      let o = JSON.parse(n.slice(40))
      if (
        typeof o == "object" &&
        o &&
        typeof o.status == "number" &&
        typeof o.statusText == "string"
      )
        return new lM(o.status, o.statusText, o.data)
    } catch {}
}
function yM(n, { relative: o } = {}) {
  xt(hi(), "useHref() may be used only in the context of a <Router> component.")
  let { basename: l, navigator: i } = y.useContext(kn),
    { hash: s, pathname: c, search: d } = gi(n, { relative: o }),
    p = c
  return (
    l !== "/" && (p = c === "/" ? l : Oa([l, c])),
    i.createHref({ pathname: p, search: d, hash: s })
  )
}
function hi() {
  return y.useContext(mi) != null
}
function _a() {
  return (
    xt(hi(), "useLocation() may be used only in the context of a <Router> component."),
    y.useContext(mi).location
  )
}
var Rb =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered."
function Mb(n) {
  y.useContext(kn).static || y.useLayoutEffect(n)
}
function Ab() {
  let { isDataRoute: n } = y.useContext(ka)
  return n ? OM() : vM()
}
function vM() {
  xt(hi(), "useNavigate() may be used only in the context of a <Router> component.")
  let n = y.useContext(Vr),
    { basename: o, navigator: l } = y.useContext(kn),
    { matches: i } = y.useContext(ka),
    { pathname: s } = _a(),
    c = JSON.stringify(vb(i)),
    d = y.useRef(!1)
  return (
    Mb(() => {
      d.current = !0
    }),
    y.useCallback(
      (m, h = {}) => {
        if ((Fn(d.current, Rb), !d.current)) return
        if (typeof m == "number") {
          l.go(m)
          return
        }
        let v = bb(m, JSON.parse(c), s, h.relative === "path")
        ;(n == null && o !== "/" && (v.pathname = v.pathname === "/" ? o : Oa([o, v.pathname])),
          (h.replace ? l.replace : l.push)(v, h.state, h))
      },
      [o, l, c, s, n]
    )
  )
}
y.createContext(null)
function gi(n, { relative: o } = {}) {
  let { matches: l } = y.useContext(ka),
    { pathname: i } = _a(),
    s = JSON.stringify(vb(l))
  return y.useMemo(() => bb(n, JSON.parse(s), i, o === "path"), [n, s, i, o])
}
function bM(n, o) {
  return wb(n, o)
}
function wb(n, o, l, i, s) {
  xt(hi(), "useRoutes() may be used only in the context of a <Router> component.")
  let { navigator: c } = y.useContext(kn),
    { matches: d } = y.useContext(ka),
    p = d[d.length - 1],
    m = p ? p.params : {},
    h = p ? p.pathname : "/",
    v = p ? p.pathnameBase : "/",
    b = p && p.route
  {
    let k = (b && b.path) || ""
    Ob(
      h,
      !b || k.endsWith("*") || k.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k === "/" ? "*" : `${k}/*`}">.`
    )
  }
  let R = _a(),
    M
  if (o) {
    let k = typeof o == "string" ? qr(o) : o
    ;(xt(
      v === "/" || k.pathname?.startsWith(v),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${k.pathname}" was given in the \`location\` prop.`
    ),
      (M = k))
  } else M = R
  let T = M.pathname || "/",
    x = T
  if (v !== "/") {
    let k = v.replace(/^\//, "").split("/")
    x = "/" + T.replace(/^\//, "").split("/").slice(k.length).join("/")
  }
  let A = mb(n, { pathname: x })
  ;(Fn(b || A != null, `No routes matched location "${M.pathname}${M.search}${M.hash}" `),
    Fn(
      A == null ||
        A[A.length - 1].route.element !== void 0 ||
        A[A.length - 1].route.Component !== void 0 ||
        A[A.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ))
  let w = TM(
    A &&
      A.map((k) =>
        Object.assign({}, k, {
          params: Object.assign({}, m, k.params),
          pathname: Oa([
            v,
            c.encodeLocation
              ? c.encodeLocation(k.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname
              : k.pathname,
          ]),
          pathnameBase:
            k.pathnameBase === "/"
              ? v
              : Oa([
                  v,
                  c.encodeLocation
                    ? c.encodeLocation(k.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23"))
                        .pathname
                    : k.pathnameBase,
                ]),
        })
      ),
    d,
    l,
    i,
    s
  )
  return o && w
    ? y.createElement(
        mi.Provider,
        {
          value: {
            location: { pathname: "/", search: "", hash: "", state: null, key: "default", ...M },
            navigationType: "POP",
          },
        },
        w
      )
    : w
}
function SM() {
  let n = zM(),
    o = iM(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n),
    l = n instanceof Error ? n.stack : null,
    i = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: i },
    c = { padding: "2px 4px", backgroundColor: i },
    d = null
  return (
    console.error("Error handled by React Router default ErrorBoundary:", n),
    (d = y.createElement(
      y.Fragment,
      null,
      y.createElement("p", null, "💿 Hey developer 👋"),
      y.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        y.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        y.createElement("code", { style: c }, "errorElement"),
        " prop on your route."
      )
    )),
    y.createElement(
      y.Fragment,
      null,
      y.createElement("h2", null, "Unexpected Application Error!"),
      y.createElement("h3", { style: { fontStyle: "italic" } }, o),
      l ? y.createElement("pre", { style: s }, l) : null,
      d
    )
  )
}
var xM = y.createElement(SM, null),
  zb = class extends y.Component {
    constructor(n) {
      ;(super(n),
        (this.state = { location: n.location, revalidation: n.revalidation, error: n.error }))
    }
    static getDerivedStateFromError(n) {
      return { error: n }
    }
    static getDerivedStateFromProps(n, o) {
      return o.location !== n.location || (o.revalidation !== "idle" && n.revalidation === "idle")
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : o.error,
            location: o.location,
            revalidation: n.revalidation || o.revalidation,
          }
    }
    componentDidCatch(n, o) {
      this.props.onError
        ? this.props.onError(n, o)
        : console.error("React Router caught the following error during render", n)
    }
    render() {
      let n = this.state.error
      if (
        this.context &&
        typeof n == "object" &&
        n &&
        "digest" in n &&
        typeof n.digest == "string"
      ) {
        const l = gM(n.digest)
        l && (n = l)
      }
      let o =
        n !== void 0
          ? y.createElement(
              ka.Provider,
              { value: this.props.routeContext },
              y.createElement(vp.Provider, { value: n, children: this.props.component })
            )
          : this.props.children
      return this.context ? y.createElement(CM, { error: n }, o) : o
    }
  }
zb.contextType = cM
var pd = new WeakMap()
function CM({ children: n, error: o }) {
  let { basename: l } = y.useContext(kn)
  if (typeof o == "object" && o && "digest" in o && typeof o.digest == "string") {
    let i = hM(o.digest)
    if (i) {
      let s = pd.get(o)
      if (s) throw s
      let c = xb(i.location, l)
      if (Sb && !pd.get(o))
        if (c.isExternal || i.reloadDocument) window.location.href = c.absoluteURL || c.to
        else {
          const d = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(c.to, { replace: i.replace })
          )
          throw (pd.set(o, d), d)
        }
      return y.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${c.absoluteURL || c.to}`,
      })
    }
  }
  return n
}
function EM({ routeContext: n, match: o, children: l }) {
  let i = y.useContext(Vr)
  return (
    i &&
      i.static &&
      i.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = o.route.id),
    y.createElement(ka.Provider, { value: n }, l)
  )
}
function TM(n, o = [], l = null, i = null, s = null) {
  if (n == null) {
    if (!l) return null
    if (l.errors) n = l.matches
    else if (o.length === 0 && !l.initialized && l.matches.length > 0) n = l.matches
    else return null
  }
  let c = n,
    d = l?.errors
  if (d != null) {
    let v = c.findIndex((b) => b.route.id && d?.[b.route.id] !== void 0)
    ;(xt(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`
    ),
      (c = c.slice(0, Math.min(c.length, v + 1))))
  }
  let p = !1,
    m = -1
  if (l)
    for (let v = 0; v < c.length; v++) {
      let b = c[v]
      if (((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (m = v), b.route.id)) {
        let { loaderData: R, errors: M } = l,
          T = b.route.loader && !R.hasOwnProperty(b.route.id) && (!M || M[b.route.id] === void 0)
        if (b.route.lazy || T) {
          ;((p = !0), m >= 0 ? (c = c.slice(0, m + 1)) : (c = [c[0]]))
          break
        }
      }
    }
  let h =
    l && i
      ? (v, b) => {
          i(v, {
            location: l.location,
            params: l.matches?.[0]?.params ?? {},
            unstable_pattern: sM(l.matches),
            errorInfo: b,
          })
        }
      : void 0
  return c.reduceRight((v, b, R) => {
    let M,
      T = !1,
      x = null,
      A = null
    l &&
      ((M = d && b.route.id ? d[b.route.id] : void 0),
      (x = b.route.errorElement || xM),
      p &&
        (m < 0 && R === 0
          ? (Ob(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (T = !0),
            (A = null))
          : m === R && ((T = !0), (A = b.route.hydrateFallbackElement || null))))
    let w = o.concat(c.slice(0, R + 1)),
      k = () => {
        let O
        return (
          M
            ? (O = x)
            : T
              ? (O = A)
              : b.route.Component
                ? (O = y.createElement(b.route.Component, null))
                : b.route.element
                  ? (O = b.route.element)
                  : (O = v),
          y.createElement(EM, {
            match: b,
            routeContext: { outlet: v, matches: w, isDataRoute: l != null },
            children: O,
          })
        )
      }
    return l && (b.route.ErrorBoundary || b.route.errorElement || R === 0)
      ? y.createElement(zb, {
          location: l.location,
          revalidation: l.revalidation,
          component: x,
          error: M,
          children: k(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
          onError: h,
        })
      : k()
  }, null)
}
function bp(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function RM(n) {
  let o = y.useContext(Vr)
  return (xt(o, bp(n)), o)
}
function MM(n) {
  let o = y.useContext(Au)
  return (xt(o, bp(n)), o)
}
function AM(n) {
  let o = y.useContext(ka)
  return (xt(o, bp(n)), o)
}
function Sp(n) {
  let o = AM(n),
    l = o.matches[o.matches.length - 1]
  return (xt(l.route.id, `${n} can only be used on routes that contain a unique "id"`), l.route.id)
}
function wM() {
  return Sp("useRouteId")
}
function zM() {
  let n = y.useContext(vp),
    o = MM("useRouteError"),
    l = Sp("useRouteError")
  return n !== void 0 ? n : o.errors?.[l]
}
function OM() {
  let { router: n } = RM("useNavigate"),
    o = Sp("useNavigate"),
    l = y.useRef(!1)
  return (
    Mb(() => {
      l.current = !0
    }),
    y.useCallback(
      async (s, c = {}) => {
        ;(Fn(l.current, Rb),
          l.current &&
            (typeof s == "number"
              ? await n.navigate(s)
              : await n.navigate(s, { fromRouteId: o, ...c })))
      },
      [n, o]
    )
  )
}
var Y0 = {}
function Ob(n, o, l) {
  !o && !Y0[n] && ((Y0[n] = !0), Fn(!1, l))
}
y.memo(NM)
function NM({ routes: n, future: o, state: l, onError: i }) {
  return wb(n, void 0, l, i, o)
}
function Kl(n) {
  xt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  )
}
function DM({
  basename: n = "/",
  children: o = null,
  location: l,
  navigationType: i = "POP",
  navigator: s,
  static: c = !1,
  unstable_useTransitions: d,
}) {
  xt(
    !hi(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  )
  let p = n.replace(/^\/*/, "/"),
    m = y.useMemo(
      () => ({ basename: p, navigator: s, static: c, unstable_useTransitions: d, future: {} }),
      [p, s, c, d]
    )
  typeof l == "string" && (l = qr(l))
  let { pathname: h = "/", search: v = "", hash: b = "", state: R = null, key: M = "default" } = l,
    T = y.useMemo(() => {
      let x = ja(h, p)
      return x == null
        ? null
        : { location: { pathname: x, search: v, hash: b, state: R, key: M }, navigationType: i }
    }, [p, h, v, b, R, M, i])
  return (
    Fn(
      T != null,
      `<Router basename="${p}"> is not able to match the URL "${h}${v}${b}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    T == null
      ? null
      : y.createElement(
          kn.Provider,
          { value: m },
          y.createElement(mi.Provider, { children: o, value: T })
        )
  )
}
function BM({ children: n, location: o }) {
  return bM(Hd(n), o)
}
function Hd(n, o = []) {
  let l = []
  return (
    y.Children.forEach(n, (i, s) => {
      if (!y.isValidElement(i)) return
      let c = [...o, s]
      if (i.type === y.Fragment) {
        l.push.apply(l, Hd(i.props.children, c))
        return
      }
      ;(xt(
        i.type === Kl,
        `[${typeof i.type == "string" ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        xt(!i.props.index || !i.props.children, "An index route cannot have child routes."))
      let d = {
        id: i.props.id || c.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        middleware: i.props.middleware,
        loader: i.props.loader,
        action: i.props.action,
        hydrateFallbackElement: i.props.hydrateFallbackElement,
        HydrateFallback: i.props.HydrateFallback,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.hasErrorBoundary === !0 ||
          i.props.ErrorBoundary != null ||
          i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      }
      ;(i.props.children && (d.children = Hd(i.props.children, c)), l.push(d))
    }),
    l
  )
}
var Xs = "get",
  Ks = "application/x-www-form-urlencoded"
function wu(n) {
  return typeof HTMLElement < "u" && n instanceof HTMLElement
}
function jM(n) {
  return wu(n) && n.tagName.toLowerCase() === "button"
}
function kM(n) {
  return wu(n) && n.tagName.toLowerCase() === "form"
}
function _M(n) {
  return wu(n) && n.tagName.toLowerCase() === "input"
}
function LM(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)
}
function $M(n, o) {
  return n.button === 0 && (!o || o === "_self") && !LM(n)
}
var Us = null
function UM() {
  if (Us === null)
    try {
      ;(new FormData(document.createElement("form"), 0), (Us = !1))
    } catch {
      Us = !0
    }
  return Us
}
var HM = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"])
function md(n) {
  return n != null && !HM.has(n)
    ? (Fn(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ks}"`
      ),
      null)
    : n
}
function PM(n, o) {
  let l, i, s, c, d
  if (kM(n)) {
    let p = n.getAttribute("action")
    ;((i = p ? ja(p, o) : null),
      (l = n.getAttribute("method") || Xs),
      (s = md(n.getAttribute("enctype")) || Ks),
      (c = new FormData(n)))
  } else if (jM(n) || (_M(n) && (n.type === "submit" || n.type === "image"))) {
    let p = n.form
    if (p == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>')
    let m = n.getAttribute("formaction") || p.getAttribute("action")
    if (
      ((i = m ? ja(m, o) : null),
      (l = n.getAttribute("formmethod") || p.getAttribute("method") || Xs),
      (s = md(n.getAttribute("formenctype")) || md(p.getAttribute("enctype")) || Ks),
      (c = new FormData(p, n)),
      !UM())
    ) {
      let { name: h, type: v, value: b } = n
      if (v === "image") {
        let R = h ? `${h}.` : ""
        ;(c.append(`${R}x`, "0"), c.append(`${R}y`, "0"))
      } else h && c.append(h, b)
    }
  } else {
    if (wu(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      )
    ;((l = Xs), (i = null), (s = Ks), (d = n))
  }
  return (
    c && s === "text/plain" && ((d = c), (c = void 0)),
    { action: i, method: l.toLowerCase(), encType: s, formData: c, body: d }
  )
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0")
function xp(n, o) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(o)
}
function IM(n, o, l) {
  let i =
    typeof n == "string"
      ? new URL(n, typeof window > "u" ? "server://singlefetch/" : window.location.origin)
      : n
  return (
    i.pathname === "/"
      ? (i.pathname = `_root.${l}`)
      : o && ja(i.pathname, o) === "/"
        ? (i.pathname = `${o.replace(/\/$/, "")}/_root.${l}`)
        : (i.pathname = `${i.pathname.replace(/\/$/, "")}.${l}`),
    i
  )
}
async function qM(n, o) {
  if (n.id in o) return o[n.id]
  try {
    let l = await import(n.module)
    return ((o[n.id] = l), l)
  } catch (l) {
    return (
      console.error(`Error loading route module \`${n.module}\`, reloading page...`),
      console.error(l),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    )
  }
}
function VM(n) {
  return n == null
    ? !1
    : n.href == null
      ? n.rel === "preload" && typeof n.imageSrcSet == "string" && typeof n.imageSizes == "string"
      : typeof n.rel == "string" && typeof n.href == "string"
}
async function GM(n, o, l) {
  let i = await Promise.all(
    n.map(async (s) => {
      let c = o.routes[s.route.id]
      if (c) {
        let d = await qM(c, l)
        return d.links ? d.links() : []
      }
      return []
    })
  )
  return KM(
    i
      .flat(1)
      .filter(VM)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet" ? { ...s, rel: "prefetch", as: "style" } : { ...s, rel: "prefetch" }
      )
  )
}
function F0(n, o, l, i, s, c) {
  let d = (m, h) => (l[h] ? m.route.id !== l[h].route.id : !0),
    p = (m, h) =>
      l[h].pathname !== m.pathname ||
      (l[h].route.path?.endsWith("*") && l[h].params["*"] !== m.params["*"])
  return c === "assets"
    ? o.filter((m, h) => d(m, h) || p(m, h))
    : c === "data"
      ? o.filter((m, h) => {
          let v = i.routes[m.route.id]
          if (!v || !v.hasLoader) return !1
          if (d(m, h) || p(m, h)) return !0
          if (m.route.shouldRevalidate) {
            let b = m.route.shouldRevalidate({
              currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
              currentParams: l[0]?.params || {},
              nextUrl: new URL(n, window.origin),
              nextParams: m.params,
              defaultShouldRevalidate: !0,
            })
            if (typeof b == "boolean") return b
          }
          return !0
        })
      : []
}
function YM(n, o, { includeHydrateFallback: l } = {}) {
  return FM(
    n
      .map((i) => {
        let s = o.routes[i.route.id]
        if (!s) return []
        let c = [s.module]
        return (
          s.clientActionModule && (c = c.concat(s.clientActionModule)),
          s.clientLoaderModule && (c = c.concat(s.clientLoaderModule)),
          l && s.hydrateFallbackModule && (c = c.concat(s.hydrateFallbackModule)),
          s.imports && (c = c.concat(s.imports)),
          c
        )
      })
      .flat(1)
  )
}
function FM(n) {
  return [...new Set(n)]
}
function XM(n) {
  let o = {},
    l = Object.keys(n).sort()
  for (let i of l) o[i] = n[i]
  return o
}
function KM(n, o) {
  let l = new Set()
  return (
    new Set(o),
    n.reduce((i, s) => {
      let c = JSON.stringify(XM(s))
      return (l.has(c) || (l.add(c), i.push({ key: c, link: s })), i)
    }, [])
  )
}
function Nb() {
  let n = y.useContext(Vr)
  return (xp(n, "You must render this element inside a <DataRouterContext.Provider> element"), n)
}
function WM() {
  let n = y.useContext(Au)
  return (
    xp(n, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    n
  )
}
var Cp = y.createContext(void 0)
Cp.displayName = "FrameworkContext"
function Db() {
  let n = y.useContext(Cp)
  return (xp(n, "You must render this element inside a <HydratedRouter> element"), n)
}
function QM(n, o) {
  let l = y.useContext(Cp),
    [i, s] = y.useState(!1),
    [c, d] = y.useState(!1),
    { onFocus: p, onBlur: m, onMouseEnter: h, onMouseLeave: v, onTouchStart: b } = o,
    R = y.useRef(null)
  ;(y.useEffect(() => {
    if ((n === "render" && d(!0), n === "viewport")) {
      let x = (w) => {
          w.forEach((k) => {
            d(k.isIntersecting)
          })
        },
        A = new IntersectionObserver(x, { threshold: 0.5 })
      return (
        R.current && A.observe(R.current),
        () => {
          A.disconnect()
        }
      )
    }
  }, [n]),
    y.useEffect(() => {
      if (i) {
        let x = setTimeout(() => {
          d(!0)
        }, 100)
        return () => {
          clearTimeout(x)
        }
      }
    }, [i]))
  let M = () => {
      s(!0)
    },
    T = () => {
      ;(s(!1), d(!1))
    }
  return l
    ? n !== "intent"
      ? [c, R, {}]
      : [
          c,
          R,
          {
            onFocus: Vl(p, M),
            onBlur: Vl(m, T),
            onMouseEnter: Vl(h, M),
            onMouseLeave: Vl(v, T),
            onTouchStart: Vl(b, M),
          },
        ]
    : [!1, R, {}]
}
function Vl(n, o) {
  return (l) => {
    ;(n && n(l), l.defaultPrevented || o(l))
  }
}
function ZM({ page: n, ...o }) {
  let { router: l } = Nb(),
    i = y.useMemo(() => mb(l.routes, n, l.basename), [l.routes, n, l.basename])
  return i ? y.createElement(eA, { page: n, matches: i, ...o }) : null
}
function JM(n) {
  let { manifest: o, routeModules: l } = Db(),
    [i, s] = y.useState([])
  return (
    y.useEffect(() => {
      let c = !1
      return (
        GM(n, o, l).then((d) => {
          c || s(d)
        }),
        () => {
          c = !0
        }
      )
    }, [n, o, l]),
    i
  )
}
function eA({ page: n, matches: o, ...l }) {
  let i = _a(),
    { manifest: s, routeModules: c } = Db(),
    { basename: d } = Nb(),
    { loaderData: p, matches: m } = WM(),
    h = y.useMemo(() => F0(n, o, m, s, i, "data"), [n, o, m, s, i]),
    v = y.useMemo(() => F0(n, o, m, s, i, "assets"), [n, o, m, s, i]),
    b = y.useMemo(() => {
      if (n === i.pathname + i.search + i.hash) return []
      let T = new Set(),
        x = !1
      if (
        (o.forEach((w) => {
          let k = s.routes[w.route.id]
          !k ||
            !k.hasLoader ||
            ((!h.some((O) => O.route.id === w.route.id) &&
              w.route.id in p &&
              c[w.route.id]?.shouldRevalidate) ||
            k.hasClientLoader
              ? (x = !0)
              : T.add(w.route.id))
        }),
        T.size === 0)
      )
        return []
      let A = IM(n, d, "data")
      return (
        x &&
          T.size > 0 &&
          A.searchParams.set(
            "_routes",
            o
              .filter((w) => T.has(w.route.id))
              .map((w) => w.route.id)
              .join(",")
          ),
        [A.pathname + A.search]
      )
    }, [d, p, i, s, h, o, n, c]),
    R = y.useMemo(() => YM(v, s), [v, s]),
    M = JM(v)
  return y.createElement(
    y.Fragment,
    null,
    b.map((T) => y.createElement("link", { key: T, rel: "prefetch", as: "fetch", href: T, ...l })),
    R.map((T) => y.createElement("link", { key: T, rel: "modulepreload", href: T, ...l })),
    M.map(({ key: T, link: x }) => y.createElement("link", { key: T, nonce: l.nonce, ...x }))
  )
}
function tA(...n) {
  return (o) => {
    n.forEach((l) => {
      typeof l == "function" ? l(o) : l != null && (l.current = o)
    })
  }
}
var nA =
  typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
try {
  nA && (window.__reactRouterVersion = "7.11.0")
} catch {}
function aA({ basename: n, children: o, unstable_useTransitions: l, window: i }) {
  let s = y.useRef()
  s.current == null && (s.current = L3({ window: i, v5Compat: !0 }))
  let c = s.current,
    [d, p] = y.useState({ action: c.action, location: c.location }),
    m = y.useCallback(
      (h) => {
        l === !1 ? p(h) : y.startTransition(() => p(h))
      },
      [l]
    )
  return (
    y.useLayoutEffect(() => c.listen(m), [c, m]),
    y.createElement(DM, {
      basename: n,
      children: o,
      location: d.location,
      navigationType: d.action,
      navigator: c,
      unstable_useTransitions: l,
    })
  )
}
var Bb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  jb = y.forwardRef(function (
    {
      onClick: o,
      discover: l = "render",
      prefetch: i = "none",
      relative: s,
      reloadDocument: c,
      replace: d,
      state: p,
      target: m,
      to: h,
      preventScrollReset: v,
      viewTransition: b,
      unstable_defaultShouldRevalidate: R,
      ...M
    },
    T
  ) {
    let { basename: x, unstable_useTransitions: A } = y.useContext(kn),
      w = typeof h == "string" && Bb.test(h),
      k = xb(h, x)
    h = k.to
    let O = yM(h, { relative: s }),
      [N, B, _] = QM(i, M),
      U = iA(h, {
        replace: d,
        state: p,
        target: m,
        preventScrollReset: v,
        relative: s,
        viewTransition: b,
        unstable_defaultShouldRevalidate: R,
        unstable_useTransitions: A,
      })
    function H(Q) {
      ;(o && o(Q), Q.defaultPrevented || U(Q))
    }
    let X = y.createElement("a", {
      ...M,
      ..._,
      href: k.absoluteURL || O,
      onClick: k.isExternal || c ? o : H,
      ref: tA(T, B),
      target: m,
      "data-discover": !w && l === "render" ? "true" : void 0,
    })
    return N && !w ? y.createElement(y.Fragment, null, X, y.createElement(ZM, { page: O })) : X
  })
jb.displayName = "Link"
var oA = y.forwardRef(function (
  {
    "aria-current": o = "page",
    caseSensitive: l = !1,
    className: i = "",
    end: s = !1,
    style: c,
    to: d,
    viewTransition: p,
    children: m,
    ...h
  },
  v
) {
  let b = gi(d, { relative: h.relative }),
    R = _a(),
    M = y.useContext(Au),
    { navigator: T, basename: x } = y.useContext(kn),
    A = M != null && dA(b) && p === !0,
    w = T.encodeLocation ? T.encodeLocation(b).pathname : b.pathname,
    k = R.pathname,
    O = M && M.navigation && M.navigation.location ? M.navigation.location.pathname : null
  ;(l || ((k = k.toLowerCase()), (O = O ? O.toLowerCase() : null), (w = w.toLowerCase())),
    O && x && (O = ja(O, x) || O))
  const N = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length
  let B = k === w || (!s && k.startsWith(w) && k.charAt(N) === "/"),
    _ = O != null && (O === w || (!s && O.startsWith(w) && O.charAt(w.length) === "/")),
    U = { isActive: B, isPending: _, isTransitioning: A },
    H = B ? o : void 0,
    X
  typeof i == "function"
    ? (X = i(U))
    : (X = [i, B ? "active" : null, _ ? "pending" : null, A ? "transitioning" : null]
        .filter(Boolean)
        .join(" "))
  let Q = typeof c == "function" ? c(U) : c
  return y.createElement(
    jb,
    { ...h, "aria-current": H, className: X, ref: v, style: Q, to: d, viewTransition: p },
    typeof m == "function" ? m(U) : m
  )
})
oA.displayName = "NavLink"
var rA = y.forwardRef(
  (
    {
      discover: n = "render",
      fetcherKey: o,
      navigate: l,
      reloadDocument: i,
      replace: s,
      state: c,
      method: d = Xs,
      action: p,
      onSubmit: m,
      relative: h,
      preventScrollReset: v,
      viewTransition: b,
      unstable_defaultShouldRevalidate: R,
      ...M
    },
    T
  ) => {
    let { unstable_useTransitions: x } = y.useContext(kn),
      A = cA(),
      w = fA(p, { relative: h }),
      k = d.toLowerCase() === "get" ? "get" : "post",
      O = typeof p == "string" && Bb.test(p),
      N = (B) => {
        if ((m && m(B), B.defaultPrevented)) return
        B.preventDefault()
        let _ = B.nativeEvent.submitter,
          U = _?.getAttribute("formmethod") || d,
          H = () =>
            A(_ || B.currentTarget, {
              fetcherKey: o,
              method: U,
              navigate: l,
              replace: s,
              state: c,
              relative: h,
              preventScrollReset: v,
              viewTransition: b,
              unstable_defaultShouldRevalidate: R,
            })
        x && l !== !1 ? y.startTransition(() => H()) : H()
      }
    return y.createElement("form", {
      ref: T,
      method: k,
      action: w,
      onSubmit: i ? m : N,
      ...M,
      "data-discover": !O && n === "render" ? "true" : void 0,
    })
  }
)
rA.displayName = "Form"
function lA(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function kb(n) {
  let o = y.useContext(Vr)
  return (xt(o, lA(n)), o)
}
function iA(
  n,
  {
    target: o,
    replace: l,
    state: i,
    preventScrollReset: s,
    relative: c,
    viewTransition: d,
    unstable_defaultShouldRevalidate: p,
    unstable_useTransitions: m,
  } = {}
) {
  let h = Ab(),
    v = _a(),
    b = gi(n, { relative: c })
  return y.useCallback(
    (R) => {
      if ($M(R, o)) {
        R.preventDefault()
        let M = l !== void 0 ? l : oi(v) === oi(b),
          T = () =>
            h(n, {
              replace: M,
              state: i,
              preventScrollReset: s,
              relative: c,
              viewTransition: d,
              unstable_defaultShouldRevalidate: p,
            })
        m ? y.startTransition(() => T()) : T()
      }
    },
    [v, h, b, l, i, o, n, s, c, d, p, m]
  )
}
var sA = 0,
  uA = () => `__${String(++sA)}__`
function cA() {
  let { router: n } = kb("useSubmit"),
    { basename: o } = y.useContext(kn),
    l = wM(),
    i = n.fetch,
    s = n.navigate
  return y.useCallback(
    async (c, d = {}) => {
      let { action: p, method: m, encType: h, formData: v, body: b } = PM(c, o)
      if (d.navigate === !1) {
        let R = d.fetcherKey || uA()
        await i(R, l, d.action || p, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: b,
          formMethod: d.method || m,
          formEncType: d.encType || h,
          flushSync: d.flushSync,
        })
      } else
        await s(d.action || p, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: b,
          formMethod: d.method || m,
          formEncType: d.encType || h,
          replace: d.replace,
          state: d.state,
          fromRouteId: l,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        })
    },
    [i, s, o, l]
  )
}
function fA(n, { relative: o } = {}) {
  let { basename: l } = y.useContext(kn),
    i = y.useContext(ka)
  xt(i, "useFormAction must be used inside a RouteContext")
  let [s] = i.matches.slice(-1),
    c = { ...gi(n || ".", { relative: o }) },
    d = _a()
  if (n == null) {
    c.search = d.search
    let p = new URLSearchParams(c.search),
      m = p.getAll("index")
    if (m.some((v) => v === "")) {
      ;(p.delete("index"), m.filter((b) => b).forEach((b) => p.append("index", b)))
      let v = p.toString()
      c.search = v ? `?${v}` : ""
    }
  }
  return (
    (!n || n === ".") &&
      s.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    l !== "/" && (c.pathname = c.pathname === "/" ? l : Oa([l, c.pathname])),
    oi(c)
  )
}
function dA(n, { relative: o } = {}) {
  let l = y.useContext(Eb)
  xt(
    l != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  )
  let { basename: i } = kb("useViewTransitionState"),
    s = gi(n, { relative: o })
  if (!l.isTransitioning) return !1
  let c = ja(l.currentLocation.pathname, i) || l.currentLocation.pathname,
    d = ja(l.nextLocation.pathname, i) || l.nextLocation.pathname
  return ou(s.pathname, d) != null || ou(s.pathname, c) != null
}
const pA = Su({
    palette: {
      background: { default: "#f3f4f6", paper: "#ffffff" },
      primary: { main: "#6366f1", light: "#818cf8", dark: "#4f46e5" },
      text: { primary: "#111827", secondary: "#6b7280" },
    },
    typography: {
      fontFamily: '"Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
      h1: { fontSize: "24px", fontWeight: 700 },
      body1: { fontSize: "16px" },
      button: { textTransform: "none", fontWeight: 700 },
    },
    components: {
      MuiButton: { styleOverrides: { root: { borderRadius: 12 } } },
      MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } },
    },
  }),
  mA = mt([
    E.jsx(
      "path",
      {
        d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8",
      },
      "0"
    ),
    E.jsx("path", { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" }, "1"),
  ]),
  _b = mt(E.jsx("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" })),
  hA = mt(
    E.jsx("path", {
      d: "m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M12 17.5 6.5 12H10v-2h4v2h3.5zM5.12 5l.81-1h12l.94 1z",
    })
  ),
  gA = mt(
    E.jsx("path", {
      d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z",
    })
  ),
  X0 = mt(E.jsx("path", { d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" })),
  yA = mt(
    E.jsx("path", {
      d: "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8",
    })
  ),
  vA = mt(E.jsx("path", { d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })),
  bA = mt(
    E.jsx("path", {
      d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z",
    })
  ),
  SA = mt(
    E.jsx("path", {
      d: "M9 11H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V9h14z",
    })
  ),
  xA = mt(
    E.jsx("path", {
      d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z",
    })
  ),
  CA = mt(
    E.jsx("path", {
      d: "m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z",
    })
  ),
  EA = mt(E.jsx("path", { d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" })),
  TA = mt(E.jsx("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })),
  RA = mt(
    E.jsx("path", {
      d: "M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4",
    })
  ),
  MA = mt(
    E.jsx("path", {
      d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8",
    })
  ),
  AA = mt(E.jsx("path", { d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" })),
  wA = mt(
    E.jsx("path", {
      d: "m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z",
    })
  ),
  zA = mt(
    E.jsx("path", {
      d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2",
    })
  ),
  OA = mt(
    E.jsx("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14",
    })
  ),
  NA = mt(
    E.jsx("path", {
      d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6",
    })
  ),
  DA = mt(
    E.jsx("path", {
      d: "M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39z",
    })
  ),
  BA = () => {
    const n = Ab(),
      o = _a(),
      i =
        o.pathname === "/schedule"
          ? 1
          : o.pathname === "/archive"
            ? 2
            : o.pathname === "/settings"
              ? 3
              : 0
    return E.jsx(sa, {
      sx: { position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 10 },
      elevation: 3,
      children: E.jsxs(bR, {
        showLabels: !0,
        value: i,
        onChange: (s, c) => {
          switch (c) {
            case 0:
              n("/")
              break
            case 1:
              n("/schedule")
              break
            case 2:
              n("/archive")
              break
            case 3:
              n("/settings")
              break
          }
        },
        sx: {
          height: 60,
          maxWidth: "448px",
          mx: "auto",
          "& .MuiBottomNavigationAction-root": {
            color: "text.secondary",
            whiteSpace: "nowrap",
            "&.Mui-selected": { color: "primary.main" },
            "& .MuiBottomNavigationAction-label": {
              fontSize: "0.75rem",
              "&.Mui-selected": { fontSize: "0.8rem" },
            },
          },
        },
        children: [
          E.jsx(_s, { label: "タスク", icon: E.jsx(DA, {}) }),
          E.jsx(_s, { label: "予定", icon: E.jsx(gA, {}) }),
          E.jsx(_s, { label: "アーカイブ", icon: E.jsx(hA, {}) }),
          E.jsx(_s, { label: "設定", icon: E.jsx(NA, {}) }),
        ],
      }),
    })
  },
  Lb = y.createContext(void 0),
  jA = [
    { id: "1", title: "チームミーティングの準備", description: "資料を3部印刷する", completed: !0 },
    {
      id: "2",
      title: "週報を提出",
      deadline: "金曜日17:00まで",
      completed: !1,
      subtasks: [
        { id: "s1", title: "資料のデータを収集", completed: !0 },
        { id: "s2", title: "週報フォーマットに入力", completed: !1 },
        { id: "s3", title: "上司に提出", completed: !1 },
      ],
    },
    { id: "3", title: "プロジェクト企画書のレビュー", completed: !1 },
    {
      id: "4",
      title: "クライアントへの提案書作成",
      tags: [
        { text: "今日", variant: "warning", icon: "clock" },
        { text: "高", variant: "warning" },
      ],
      completed: !1,
    },
    {
      id: "5",
      title: "デザインレビューミーティング",
      date: "2025/01/20",
      dateCurrent: "2025/01/04",
      completed: !1,
    },
    { id: "6", title: "買い物リスト確認", completed: !1 },
  ],
  kA = ({ children: n }) => {
    const [o, l] = y.useState(jA),
      i = (m) => {
        const h = { ...m, id: Date.now().toString(), completed: !1 }
        l([h, ...o])
      },
      s = (m) => {
        l(o.map((h) => (h.id === m ? { ...h, completed: !h.completed } : h)))
      },
      c = (m, h) => {
        l(
          o.map((v) => {
            if (v.id === m) {
              const b = { id: Date.now().toString(), title: h, completed: !1 }
              return { ...v, subtasks: [...(v.subtasks || []), b] }
            }
            return v
          })
        )
      },
      d = (m, h) => {
        l(
          o.map((v) =>
            v.id === m
              ? {
                  ...v,
                  subtasks: v.subtasks?.map((b) =>
                    b.id === h ? { ...b, completed: !b.completed } : b
                  ),
                }
              : v
          )
        )
      },
      p = o.filter((m) => !m.completed).length
    return E.jsx(Lb.Provider, {
      value: {
        tasks: o,
        addTask: i,
        toggleTask: s,
        addSubtask: c,
        toggleSubtask: d,
        uncompletedCount: p,
      },
      children: n,
    })
  },
  zu = () => {
    const n = y.useContext(Lb)
    if (n === void 0) throw new Error("useTaskContext must be used within a TaskProvider")
    return n
  },
  _A = () => {
    const { uncompletedCount: n } = zu(),
      o = _a(),
      l = o.pathname === "/settings",
      i = o.pathname === "/archive",
      s = i ? "アーカイブ" : l ? "設定" : "TODOリスト"
    return E.jsx(YT, {
      position: "sticky",
      color: "inherit",
      elevation: 0,
      sx: { bgcolor: "background.paper", borderBottom: "1px solid", borderColor: "divider" },
      children: E.jsxs(D3, {
        sx: { justifyContent: "space-between", px: "20px !important" },
        children: [
          E.jsx(kt, {
            variant: "h1",
            sx: { fontSize: "1.5rem", fontWeight: 700, color: "text.primary" },
            children: s,
          }),
          !l &&
            !i &&
            E.jsxs(ot, {
              component: "span",
              sx: {
                bgcolor: "#eff6ff",
                color: "#2563eb",
                fontWeight: 600,
                fontSize: "0.875rem",
                borderRadius: "9999px",
                px: 1.5,
                py: 0.5,
              },
              children: [n, "件"],
            }),
        ],
      }),
    })
  },
  LA = ({ children: n }) =>
    E.jsx(ot, {
      sx: { minHeight: "100vh", bgcolor: "background.default" },
      children: E.jsx(a5, {
        maxWidth: "xs",
        disableGutters: !0,
        children: E.jsxs(sa, {
          elevation: 3,
          sx: {
            minHeight: "100vh",
            position: "relative",
            bgcolor: "background.default",
            pb: "70px",
            display: "flex",
            flexDirection: "column",
          },
          children: [
            E.jsx(_A, {}),
            E.jsx(ot, {
              component: "main",
              sx: { flexGrow: 1, position: "relative", zIndex: 0 },
              children: n,
            }),
            E.jsx(BA, {}),
          ],
        }),
      }),
    }),
  $A = ({ onClick: n }) =>
    E.jsx(ot, {
      sx: {
        position: "fixed",
        bottom: 60,
        left: 0,
        right: 0,
        p: 2,
        pb: 1,
        background: "linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)",
        pointerEvents: "none",
        display: "flex",
        justifyContent: "center",
        zIndex: 5,
      },
      children: E.jsx(au, {
        variant: "contained",
        color: "primary",
        startIcon: E.jsx(_b, { sx: { fontSize: "28px !important", strokeWidth: 3 } }),
        sx: {
          pointerEvents: "auto",
          width: "100%",
          maxWidth: { xs: "calc(100% - 32px)", sm: 384 },
          height: 56,
          fontSize: "1.125rem",
          fontWeight: 700,
          borderRadius: 3,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          textTransform: "none",
        },
        onClick: n,
        children: "新しいタスク",
      }),
    }),
  UA = ({ task: n, onToggle: o }) => {
    const { addSubtask: l, toggleSubtask: i } = zu(),
      [s, c] = y.useState(null),
      [d, p] = y.useState(!1),
      m = !!s,
      h = n.subtasks || [],
      v = h.filter((x) => x.completed).length,
      b = h.length,
      R = b > 0 ? `${v}/${b}` : null,
      M = (x) => {
        ;(x.stopPropagation(), c(x.currentTarget))
      },
      T = (x) => {
        c(null)
      }
    return E.jsxs(LR, {
      elevation: 0,
      sx: {
        mb: 2,
        borderRadius: 4,
        border: "1px solid",
        borderColor: n.completed ? "transparent" : "divider",
        bgcolor: "background.paper",
        width: "100%",
      },
      children: [
        E.jsx(IR, {
          onClick: () => p(!d),
          sx: { "& .MuiCardActionArea-focusHighlight": { bgcolor: "transparent" } },
          children: E.jsxs(ot, {
            sx: { p: 2, display: "flex", alignItems: "flex-start", gap: 2 },
            children: [
              E.jsx(R0, {
                checked: n.completed,
                onChange: () => o(n.id),
                onClick: (x) => x.stopPropagation(),
                onMouseDown: (x) => x.stopPropagation(),
                icon: E.jsx(ot, {
                  sx: {
                    width: 24,
                    height: 24,
                    borderRadius: 2,
                    border: "2px solid",
                    borderColor: "grey.300",
                    bgcolor: "background.paper",
                  },
                }),
                checkedIcon: E.jsx(ot, {
                  sx: {
                    width: 24,
                    height: 24,
                    borderRadius: 2,
                    bgcolor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  children: E.jsx(X0, { sx: { fontSize: 18, color: "white" } }),
                }),
                sx: { p: 0.5, mt: 0 },
              }),
              E.jsxs(ot, {
                sx: { flexGrow: 1 },
                children: [
                  E.jsx(kt, {
                    variant: "h6",
                    sx: {
                      fontSize: "1rem",
                      fontWeight: 700,
                      lineHeight: 1.4,
                      mb: 0.5,
                      textDecoration: n.completed ? "line-through" : "none",
                      color: n.completed ? "text.secondary" : "text.primary",
                    },
                    children: n.title,
                  }),
                  n.description &&
                    E.jsx(kt, {
                      variant: "body2",
                      color: "text.secondary",
                      sx: { mb: 1 },
                      children: n.description,
                    }),
                  E.jsxs($d, {
                    direction: "row",
                    flexWrap: "wrap",
                    gap: 1,
                    alignItems: "center",
                    children: [
                      n.deadline &&
                        E.jsxs(ot, {
                          sx: {
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            color: "text.secondary",
                            fontSize: "0.875rem",
                          },
                          children: [
                            E.jsx("span", { children: n.deadline }),
                            n.deadlineCurrent &&
                              E.jsx(ot, {
                                component: "span",
                                sx: {
                                  bgcolor: "#eff6ff",
                                  color: "#2563eb",
                                  px: 1,
                                  borderRadius: 99,
                                  fontSize: "0.75rem",
                                  fontWeight: 700,
                                },
                                children: n.deadlineCurrent,
                              }),
                          ],
                        }),
                      n.date &&
                        E.jsxs(ot, {
                          sx: {
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            color: "text.secondary",
                            fontSize: "0.875rem",
                          },
                          children: [
                            E.jsx("span", { children: n.date }),
                            n.dateCurrent &&
                              E.jsx(ot, {
                                component: "span",
                                sx: {
                                  bgcolor: "#eff6ff",
                                  color: "#2563eb",
                                  px: 1,
                                  borderRadius: 99,
                                  fontSize: "0.75rem",
                                  fontWeight: 700,
                                },
                                children: n.dateCurrent,
                              }),
                          ],
                        }),
                      R &&
                        E.jsx(ot, {
                          component: "span",
                          sx: {
                            bgcolor: "#ede9fe",
                            color: "#7c3aed",
                            px: 1.5,
                            py: 0.25,
                            borderRadius: 99,
                            fontSize: "0.75rem",
                            fontWeight: 700,
                          },
                          children: R,
                        }),
                      n.tags &&
                        n.tags.map((x, A) =>
                          E.jsx(
                            tR,
                            {
                              icon:
                                x.icon === "clock"
                                  ? E.jsx(mA, { sx: { fontSize: "14px !important" } })
                                  : void 0,
                              label: x.text,
                              size: "small",
                              sx: {
                                height: 24,
                                fontWeight: 700,
                                fontSize: "0.75rem",
                                bgcolor: x.variant === "warning" ? "#ffedd5" : "#f3f4f6",
                                color: x.variant === "warning" ? "#ea580c" : "#4b5563",
                                "& .MuiChip-icon": { color: "inherit", ml: 0.5, mr: -0.5 },
                              },
                            },
                            A
                          )
                        ),
                    ],
                  }),
                ],
              }),
              E.jsxs(ot, {
                sx: { display: "flex", gap: 0.5, mt: -0.5, mr: -1 },
                children: [
                  E.jsx(Bd, {
                    size: "small",
                    sx: { color: "text.secondary" },
                    onClick: (x) => {
                      ;(x.stopPropagation(), p(!d))
                    },
                    onMouseDown: (x) => x.stopPropagation(),
                    children: d ? E.jsx(EA, {}) : E.jsx(TA, {}),
                  }),
                  E.jsx(Bd, {
                    size: "small",
                    sx: { color: "text.secondary" },
                    onClick: M,
                    onMouseDown: (x) => x.stopPropagation(),
                    children: E.jsx(zA, {}),
                  }),
                ],
              }),
              E.jsxs(cb, {
                anchorEl: s,
                open: m,
                onClose: () => T(),
                onClick: (x) => x.stopPropagation(),
                anchorOrigin: { vertical: "bottom", horizontal: "right" },
                transformOrigin: { vertical: "top", horizontal: "right" },
                PaperProps: {
                  elevation: 3,
                  sx: {
                    borderRadius: 3,
                    minWidth: 180,
                    minHeight: 180,
                    mt: 1,
                    "& .MuiList-root": {},
                  },
                },
                children: [
                  E.jsxs(kr, {
                    onClick: () => T(),
                    sx: { py: 1.5 },
                    children: [
                      E.jsx(Ys, {
                        sx: { minWidth: 24, mr: 1.5 },
                        children: E.jsx(CA, { fontSize: "small", sx: { color: "text.secondary" } }),
                      }),
                      E.jsx(Fs, {
                        primary: "編集",
                        primaryTypographyProps: { variant: "body2", fontWeight: 500 },
                      }),
                    ],
                  }),
                  E.jsxs(kr, {
                    onClick: () => T(),
                    sx: { py: 1.5 },
                    children: [
                      E.jsx(Ys, {
                        sx: { minWidth: 24, mr: 1.5 },
                        children: E.jsx(bA, { fontSize: "small", sx: { color: "text.secondary" } }),
                      }),
                      E.jsx(Fs, {
                        primary: "複製",
                        primaryTypographyProps: { variant: "body2", fontWeight: 500 },
                      }),
                    ],
                  }),
                  E.jsxs(kr, {
                    onClick: () => T(),
                    sx: { py: 1.5 },
                    children: [
                      E.jsx(Ys, {
                        sx: { minWidth: 24, mr: 1.5 },
                        children: E.jsx(xA, { fontSize: "small", color: "error" }),
                      }),
                      E.jsx(Fs, {
                        primary: "削除",
                        primaryTypographyProps: {
                          variant: "body2",
                          fontWeight: 500,
                          color: "error.main",
                        },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        E.jsx(zd, {
          in: d,
          timeout: "auto",
          unmountOnExit: !0,
          children: E.jsxs(ot, {
            sx: { px: 2, pb: 2 },
            children: [
              E.jsx($d, {
                spacing: 1,
                children: h.map((x) =>
                  E.jsxs(
                    ot,
                    {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        p: 1,
                        bgcolor: "grey.50",
                        borderRadius: 2,
                        gap: 1.5,
                      },
                      children: [
                        E.jsx(R0, {
                          checked: x.completed,
                          onChange: () => i(n.id, x.id),
                          sx: {
                            p: 0,
                            color: "#6366f1",
                            "&.Mui-checked": { color: "#6366f1" },
                            "& .MuiSvgIcon-root": {
                              fontSize: 22,
                              bgcolor: "white",
                              borderRadius: 1,
                            },
                          },
                          icon: E.jsx(ot, {
                            sx: {
                              width: 22,
                              height: 22,
                              borderRadius: 1,
                              border: "2px solid",
                              borderColor: "grey.300",
                              bgcolor: "white",
                            },
                          }),
                          checkedIcon: E.jsx(ot, {
                            sx: {
                              width: 22,
                              height: 22,
                              borderRadius: 1,
                              bgcolor: "#6366f1",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            },
                            children: E.jsx(X0, { sx: { fontSize: 16, color: "white" } }),
                          }),
                        }),
                        E.jsx(kt, {
                          sx: {
                            fontSize: "0.9375rem",
                            color: x.completed ? "text.secondary" : "text.primary",
                            textDecoration: x.completed ? "line-through" : "none",
                          },
                          children: x.title,
                        }),
                      ],
                    },
                    x.id
                  )
                ),
              }),
              E.jsx(au, {
                startIcon: E.jsx(_b, {}),
                onClick: () => {
                  const x = prompt("新しいサブタスクを入力してください")
                  x && l(n.id, x)
                },
                sx: {
                  mt: 2,
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "0.9375rem",
                  color: "#3b82f6",
                  p: 0,
                  "&:hover": { bgcolor: "transparent", textDecoration: "underline" },
                },
                disableRipple: !0,
                children: "サブタスクを追加",
              }),
            ],
          }),
        }),
      ],
    })
  },
  HA = ({ tasks: n, onToggle: o }) =>
    E.jsx(ot, {
      sx: { px: 2, pt: 2, pb: "140px" },
      children: n.map((l) => E.jsx(UA, { task: l, onToggle: o }, l.id)),
    }),
  PA = ({ open: n, onClose: o, onCreate: l }) => {
    const [i, s] = y.useState(""),
      [c, d] = y.useState(""),
      [p, m] = y.useState("中"),
      [h, v] = y.useState(""),
      b = () => {
        if (!i.trim()) return
        const M = {
          title: i,
          description: c || void 0,
          tags: p === "中" ? void 0 : [{ text: p, variant: p === "高" ? "warning" : "default" }],
          date: h ? h.replace(/-/g, "/") : void 0,
        }
        ;(l(M), R(), o())
      },
      R = () => {
        ;(s(""), d(""), m("中"), v(""))
      }
    return E.jsxs(j5, {
      open: n,
      onClose: o,
      PaperProps: { sx: { borderRadius: 4, p: 1, width: "100%", maxWidth: 480 } },
      children: [
        E.jsx(F5, { sx: { fontWeight: 800, fontSize: "24px" }, children: "新しいタスク" }),
        E.jsxs(V5, {
          children: [
            E.jsxs(ot, {
              sx: { mb: 3 },
              children: [
                E.jsx(kt, {
                  variant: "subtitle2",
                  sx: { fontWeight: 700, mb: 1 },
                  children: "タスク名",
                }),
                E.jsx(fd, {
                  fullWidth: !0,
                  placeholder: "タスク名を入力",
                  variant: "outlined",
                  value: i,
                  onChange: (M) => s(M.target.value),
                  InputProps: { sx: { borderRadius: 2, bgcolor: "#fff" } },
                }),
              ],
            }),
            E.jsxs(ot, {
              sx: { mb: 3 },
              children: [
                E.jsx(kt, {
                  variant: "subtitle2",
                  sx: { fontWeight: 700, mb: 1 },
                  children: "説明（任意）",
                }),
                E.jsx(fd, {
                  fullWidth: !0,
                  multiline: !0,
                  rows: 4,
                  placeholder: "詳細を入力",
                  variant: "outlined",
                  value: c,
                  onChange: (M) => d(M.target.value),
                  InputProps: { sx: { borderRadius: 2, bgcolor: "#fff" } },
                }),
              ],
            }),
            E.jsxs(ot, {
              sx: { display: "flex", gap: 2 },
              children: [
                E.jsxs(ot, {
                  sx: { flex: 1 },
                  children: [
                    E.jsx(kt, {
                      variant: "subtitle2",
                      sx: { fontWeight: 700, mb: 1 },
                      children: "優先度",
                    }),
                    E.jsx(rb, {
                      fullWidth: !0,
                      children: E.jsxs(yp, {
                        value: p,
                        onChange: (M) => m(M.target.value),
                        displayEmpty: !0,
                        IconComponent: AA,
                        sx: { borderRadius: 2, bgcolor: "#fff" },
                        children: [
                          E.jsx(kr, { value: "高", children: "高" }),
                          E.jsx(kr, { value: "中", children: "中" }),
                          E.jsx(kr, { value: "低", children: "低" }),
                        ],
                      }),
                    }),
                  ],
                }),
                E.jsxs(ot, {
                  sx: { flex: 1 },
                  children: [
                    E.jsx(kt, {
                      variant: "subtitle2",
                      sx: { fontWeight: 700, mb: 1 },
                      children: "期限",
                    }),
                    E.jsx(fd, {
                      fullWidth: !0,
                      type: "date",
                      value: h,
                      onChange: (M) => v(M.target.value),
                      InputProps: {
                        sx: { borderRadius: 2, bgcolor: "#fff" },
                        endAdornment: E.jsx(y4, {
                          position: "end",
                          children: E.jsx(SA, { sx: { color: "text.secondary" } }),
                        }),
                      },
                      sx: {
                        "& input::-webkit-calendar-picker-indicator": {
                          opacity: 0,
                          display: "block",
                          position: "absolute",
                          right: 0,
                          width: "100%",
                          height: "100%",
                          cursor: "pointer",
                        },
                        position: "relative",
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        E.jsxs($5, {
          sx: { p: 3 },
          children: [
            E.jsx(au, {
              onClick: o,
              variant: "outlined",
              size: "large",
              sx: {
                borderRadius: 2,
                color: "text.primary",
                borderColor: "divider",
                px: 4,
                fontWeight: 700,
              },
              children: "キャンセル",
            }),
            E.jsx(au, {
              onClick: b,
              variant: "contained",
              size: "large",
              disableElevation: !0,
              sx: { borderRadius: 2, px: 4, fontWeight: 700 },
              children: "作成",
            }),
          ],
        }),
      ],
    })
  },
  IA = () => {
    const { tasks: n, toggleTask: o, addTask: l } = zu(),
      [i, s] = y.useState(!1)
    return E.jsxs(E.Fragment, {
      children: [
        E.jsx(HA, { tasks: n, onToggle: o }),
        E.jsx($A, { onClick: () => s(!0) }),
        E.jsx(PA, { open: i, onClose: () => s(!1), onCreate: l }),
      ],
    })
  },
  qA = () => E.jsx(ot, { sx: { p: 2 }, children: E.jsx(kt, { variant: "h4", children: "予定" }) }),
  VA = () => {
    const { tasks: n } = zu(),
      [o, l] = y.useState(""),
      i = n.filter((s) => {
        const c = s.completed,
          d = o.toLowerCase(),
          p =
            s.title.toLowerCase().includes(d) ||
            (s.description && s.description.toLowerCase().includes(d))
        return c && p
      })
    return E.jsxs(ot, {
      sx: { p: "24px", pb: "80px" },
      children: [
        E.jsxs(sa, {
          component: "form",
          sx: {
            p: "4px 8px",
            display: "flex",
            alignItems: "center",
            bgcolor: "#f3f4f6",
            boxShadow: "none",
            mb: 3,
            borderRadius: 3,
          },
          children: [
            E.jsx(Bd, {
              sx: { p: "10px" },
              "aria-label": "search",
              children: E.jsx(OA, { sx: { color: "#9ca3af" } }),
            }),
            E.jsx(Mu, {
              sx: { ml: 1, flex: 1, color: "text.primary" },
              placeholder: "タスクを検索...",
              value: o,
              onChange: (s) => l(s.target.value),
            }),
          ],
        }),
        E.jsx($d, {
          spacing: 2,
          children: i.map((s) =>
            E.jsxs(
              sa,
              {
                elevation: 0,
                sx: {
                  p: "16px",
                  borderRadius: "16px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                },
                children: [
                  E.jsxs(ot, {
                    sx: { display: "flex", alignItems: "center", justifyContent: "space-between" },
                    children: [
                      E.jsxs(ot, {
                        sx: { display: "flex", alignItems: "center", gap: 1 },
                        children: [
                          E.jsx(yA, { sx: { color: "#10b981", fontSize: "1.25rem" } }),
                          E.jsx(kt, {
                            sx: { color: "#10b981", fontWeight: 600, fontSize: "0.875rem" },
                            children: "完了",
                          }),
                        ],
                      }),
                      E.jsx(kt, {
                        variant: "body2",
                        sx: { color: "#9ca3af", fontSize: "0.875rem" },
                        children: s.date || "2024/01/15",
                      }),
                    ],
                  }),
                  E.jsx(kt, {
                    variant: "h6",
                    sx: { fontWeight: 700, fontSize: "1rem", lineHeight: 1.4 },
                    children: s.title,
                  }),
                  s.description &&
                    E.jsx(kt, {
                      variant: "body2",
                      sx: { color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.5 },
                      children: s.description,
                    }),
                ],
              },
              s.id
            )
          ),
        }),
      ],
    })
  },
  GA = () => {
    const n = [
      { text: "ヘルプ", icon: E.jsx(RA, {}), color: "inherit" },
      { text: "アプリについて", icon: E.jsx(MA, {}), color: "inherit" },
      {
        text: "ログアウト",
        icon: E.jsx(wA, { sx: { color: "#ef4444" } }),
        color: "#ef4444",
        divider: !0,
      },
    ]
    return E.jsxs(ot, {
      sx: { p: "24px" },
      children: [
        E.jsx(kt, {
          variant: "body2",
          sx: { mb: 1, color: "text.secondary", fontSize: "14px" },
          children: "その他",
        }),
        E.jsx(sa, {
          elevation: 0,
          sx: {
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid",
            borderColor: "divider",
          },
          children: E.jsx(lb, {
            disablePadding: !0,
            children: n.map((o, l) =>
              E.jsx(
                $4,
                {
                  disablePadding: !0,
                  divider: l !== n.length - 1,
                  children: E.jsxs(O4, {
                    sx: { py: 2 },
                    children: [
                      E.jsx(Ys, { sx: { minWidth: 40, color: "text.primary" }, children: o.icon }),
                      E.jsx(Fs, {
                        primary: o.text,
                        primaryTypographyProps: {
                          sx: {
                            fontWeight: 500,
                            color: o.color === "inherit" ? "text.primary" : o.color,
                          },
                        },
                      }),
                      E.jsx(vA, { sx: { color: "#9ca3af" } }),
                    ],
                  }),
                },
                o.text
              )
            ),
          }),
        }),
      ],
    })
  }
function YA() {
  return E.jsxs(HE, {
    theme: pA,
    children: [
      E.jsx(s5, {}),
      E.jsx(kA, {
        children: E.jsx(aA, {
          children: E.jsx(LA, {
            children: E.jsxs(BM, {
              children: [
                E.jsx(Kl, { path: "/", element: E.jsx(IA, {}) }),
                E.jsx(Kl, { path: "/schedule", element: E.jsx(qA, {}) }),
                E.jsx(Kl, { path: "/archive", element: E.jsx(VA, {}) }),
                E.jsx(Kl, { path: "/settings", element: E.jsx(GA, {}) }),
              ],
            }),
          }),
        }),
      }),
    ],
  })
}
lx.createRoot(document.getElementById("root")).render(
  E.jsx(y.StrictMode, { children: E.jsx(YA, {}) })
)
