!(function (e) {
  var t = [],
    n = [],
    o = [],
    a = 0,
    s = 0,
    f = { offset: 120, delay: 0, easing: "ease" },
    i = function () {
      (s = $(e).scrollTop()),
        $.each(n, function (e, n) {
          s >= n - a
            ? setTimeout(function () {
                t.eq(e).addClass("aos-animate");
              }, o[e] || f.delay)
            : t.eq(e).removeClass("aos-animate");
        });
    },
    r = function (s) {
      (t = $("[aos]")),
        (a = $(e).height()),
        (n = []),
        (o = []),
        (f = $.extend({}, f, s)),
        $("body").attr("aos-easing", f.easing),
        t.addClass("aos-init").each(function (e, t) {
          var a = $(t).offset().top,
            s = f.offset,
            i = {
              offset: $(t).attr("aos-offset"),
              anchor: $(t).attr("aos-anchor"),
              delay: $(t).attr("aos-delay"),
            };
          i.offset && !isNaN(i.offset) && (s = parseInt(i.offset)),
            i.anchor && $(i.anchor) && (a = $(i.anchor).offset().top),
            o.push(i.delay || 0),
            n.push(a + s);
        }),
        i(),
        $(e).on("scroll", c(i, 15, !0));
    },
    u = { init: r };
  "function" == typeof define && define.amd
    ? define([], function () {
        return u;
      })
    : "undefined" != typeof module && module.exports
    ? (module.exports = u)
    : (e.AOS = u);
  var l =
      Date.now ||
      function () {
        return new Date().getTime();
      },
    c = function (e, t, n) {
      var o,
        a,
        s,
        f,
        i,
        r = function () {
          var u = l() - f;
          t > u && u > 0
            ? (o = setTimeout(r, t - u))
            : ((o = null), n || ((i = e.apply(s, a)), o || (s = a = null)));
        };
      return function () {
        (s = this), (a = arguments), (f = l());
        var u = n && !o;
        return (
          o || (o = setTimeout(r, t)),
          u && ((i = e.apply(s, a)), (s = a = null)),
          i
        );
      };
    };
})(window, document);
