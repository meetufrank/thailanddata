function viewport() {
    var e = window,
        t = "inner";
    return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), { width: e[t + "Width"], height: e[t + "Height"] }
}

function toPosition() {
    if (window.location.hash) {
        var e = window.location.hash.substr(1);
        if (e) {
            if ($("#" + e).offset()) var t = $("#" + e).offset().top || 0;
            $(document).scrollTop(t)
        }
    }
}

function animateMenubar() {
    var e = viewport().width;
    if (e > 768) {
        var t = 500,
            n = $(".menu-wrapper a").first().width() / t,
            r = 700;
        $(".menu-wrapper a").each(function(e) {
            var t = $(this).width(),
                a = t;
            $(this).find("span.bar-background").css({ width: t }).delay(r - 100 * e).animate({ width: 0 }, { duration: a / n, easing: "easeInQuart" }), $(this).css({ color: "#fff" }).delay(r - 100 * e).animate({ color: "#676767" }, { duration: a / n, easing: "easeInQuart", complete: function() { $(this).removeAttr("style") } }), r += a / n
        })
    }
}
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, r, a) { return jQuery.easing[jQuery.easing.def](e, t, n, r, a) },
    easeInQuad: function(e, t, n, r, a) { return r * (t /= a) * t + n },
    easeOutQuad: function(e, t, n, r, a) { return -r * (t /= a) * (t - 2) + n },
    easeInOutQuad: function(e, t, n, r, a) { return (t /= a / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n },
    easeInCubic: function(e, t, n, r, a) { return r * (t /= a) * t * t + n },
    easeOutCubic: function(e, t, n, r, a) { return r * ((t = t / a - 1) * t * t + 1) + n },
    easeInOutCubic: function(e, t, n, r, a) { return (t /= a / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n },
    easeInQuart: function(e, t, n, r, a) { return r * (t /= a) * t * t * t + n },
    easeOutQuart: function(e, t, n, r, a) { return -r * ((t = t / a - 1) * t * t * t - 1) + n },
    easeInOutQuart: function(e, t, n, r, a) { return (t /= a / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n },
    easeInQuint: function(e, t, n, r, a) { return r * (t /= a) * t * t * t * t + n },
    easeOutQuint: function(e, t, n, r, a) { return r * ((t = t / a - 1) * t * t * t * t + 1) + n },
    easeInOutQuint: function(e, t, n, r, a) { return (t /= a / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n },
    easeInSine: function(e, t, n, r, a) { return -r * Math.cos(t / a * (Math.PI / 2)) + r + n },
    easeOutSine: function(e, t, n, r, a) { return r * Math.sin(t / a * (Math.PI / 2)) + n },
    easeInOutSine: function(e, t, n, r, a) { return -r / 2 * (Math.cos(Math.PI * t / a) - 1) + n },
    easeInExpo: function(e, t, n, r, a) { return 0 == t ? n : r * Math.pow(2, 10 * (t / a - 1)) + n },
    easeOutExpo: function(e, t, n, r, a) { return t == a ? n + r : r * (-Math.pow(2, -10 * t / a) + 1) + n },
    easeInOutExpo: function(e, t, n, r, a) { return 0 == t ? n : t == a ? n + r : (t /= a / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n },
    easeInCirc: function(e, t, n, r, a) { return -r * (Math.sqrt(1 - (t /= a) * t) - 1) + n },
    easeOutCirc: function(e, t, n, r, a) { return r * Math.sqrt(1 - (t = t / a - 1) * t) + n },
    easeInOutCirc: function(e, t, n, r, a) { return (t /= a / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n },
    easeInElastic: function(e, t, n, r, a) {
        var i = 1.70158,
            o = 0,
            u = r;
        if (0 == t) return n;
        if (1 == (t /= a)) return n + r;
        if (o || (o = .3 * a), u < Math.abs(r)) { u = r; var i = o / 4 } else var i = o / (2 * Math.PI) * Math.asin(r / u);
        return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * a - i) * (2 * Math.PI) / o)) + n
    },
    easeOutElastic: function(e, t, n, r, a) {
        var i = 1.70158,
            o = 0,
            u = r;
        if (0 == t) return n;
        if (1 == (t /= a)) return n + r;
        if (o || (o = .3 * a), u < Math.abs(r)) { u = r; var i = o / 4 } else var i = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * a - i) * (2 * Math.PI) / o) + r + n
    },
    easeInOutElastic: function(e, t, n, r, a) {
        var i = 1.70158,
            o = 0,
            u = r;
        if (0 == t) return n;
        if (2 == (t /= a / 2)) return n + r;
        if (o || (o = a * (.3 * 1.5)), u < Math.abs(r)) { u = r; var i = o / 4 } else var i = o / (2 * Math.PI) * Math.asin(r / u);
        return 1 > t ? -.5 * (u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * a - i) * (2 * Math.PI) / o)) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * a - i) * (2 * Math.PI) / o) * .5 + r + n
    },
    easeInBack: function(e, t, n, r, a, i) { return void 0 == i && (i = 1.70158), r * (t /= a) * t * ((i + 1) * t - i) + n },
    easeOutBack: function(e, t, n, r, a, i) { return void 0 == i && (i = 1.70158), r * ((t = t / a - 1) * t * ((i + 1) * t + i) + 1) + n },
    easeInOutBack: function(e, t, n, r, a, i) { return void 0 == i && (i = 1.70158), (t /= a / 2) < 1 ? r / 2 * (t * t * (((i *= 1.525) + 1) * t - i)) + n : r / 2 * ((t -= 2) * t * (((i *= 1.525) + 1) * t + i) + 2) + n },
    easeInBounce: function(e, t, n, r, a) { return r - jQuery.easing.easeOutBounce(e, a - t, 0, r, a) + n },
    easeOutBounce: function(e, t, n, r, a) { return (t /= a) < 1 / 2.75 ? r * (7.5625 * t * t) + n : 2 / 2.75 > t ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n },
    easeInOutBounce: function(e, t, n, r, a) { return a / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, r, a) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - a, 0, r, a) + .5 * r + n }
}), $(window).load(function() {
    var e, t = viewport().width,
        n = !1;
    t >= 768 ? (n = !0, $(".flexslider").flexslider({ controlsContainer: ".flex-container", directionNav: !1, useCss: !1, start: function() { setTimeout(function() { $("#preloader").fadeOut(1500), animateMenubar(), toPosition() }, 100) } })) : (e = $(".flex-container-wrapper").clone(), $(".flex-container-wrapper").remove(), $("#preloader").fadeOut(1500), setTimeout(toPosition, 100), n = !1), $(window).resize(function() {
        var t = viewport().width;
        768 > t ? n && (e = $(".flex-container-wrapper").clone(), $(".flex-container-wrapper").remove(), n = !1, $(window).trigger("scroll")) : n || (e.find(".clone, .flex-control-nav").remove(), e.find(".flexslider, .slides, .slides li").removeAttr("style"), e.appendTo(".flex-container-outer-wrapper"), $(".flexslider").flexslider({ controlsContainer: ".flex-container", directionNav: !1, useCss: !1, start: function() { $(window).trigger("scroll") }, after: function() {} }), n = !0)
    })
}), $(function() {
    $(".menu-wrapper a").on("mouseenter mouseleave", function(e) {
        var t = viewport().width;
        if (t > 768) {
            var n = $(this),
                r = "mouseenter" === e.type ? n.width() : 0;
            n.find("span.bar-background").stop().animate({ width: r }, { duration: 200 })
        }
    })
}), $(function() {
    $(".private-feature-inner-wrapper").on("mouseenter mouseleave", function(e) {
        var t = viewport().width;
        if (t >= 768) {
            var n = $(this),
                r = n.find(".private-feature-slide"),
                a = n.find(".private-feature-caption"),
                i = n.find(".private-first-item"),
                o = n.find(".private-second-item"),
                u = n.height(),
                s = r.height(),
                f = "mouseenter" === e.type ? u - s : 0;
            "mouseenter" === e.type ? (r.stop().animate({ "margin-top": f }, { duration: 300, easing: "easeOutQuart" }).promise().done(function() { i.addClass("seq"), o.addClass("seq") }), a.addClass("show")) : r.stop().animate({ "margin-top": f }, { duration: 200, easing: "easeOutQuart" }).promise().done(function() { a.removeClass("show"), i.removeClass("seq"), o.removeClass("seq") })
        }
    }), $(".private-feature-inner-wrapper").click(function() {
        var e = viewport().width;
        if (768 > e) {
            var t = $(this),
                n = t.find(".private-feature-slide"),
                r = t.find(".private-feature-caption"),
                a = t.find("li"),
                i = t.height(),
                o = n.height();
            a.hasClass("seq") ? n.stop().animate({ "margin-top": 0 }, { duration: 200, easing: "easeOutQuart" }).promise().done(function() { r.removeClass("show"), a.removeClass("seq") }) : (n.stop().animate({ "margin-top": i - o }, { duration: 300, easing: "easeOutQuart" }).promise().done(function() { a.addClass("seq") }), r.addClass("show"))
        }
    }), $(window).resize(function() { $(".private-feature-inner-wrapper").find("li").removeClass("seq"), $(".private-feature-inner-wrapper").find(".private-feature-caption").removeClass("show"), $(".private-feature-inner-wrapper").find(".private-feature-slide").removeAttr("style") })
});
function zuzhi(){
    event.stopPropagation();
}
