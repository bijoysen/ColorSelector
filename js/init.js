! function() {
    function e() {
        var e = document.createElement("input");
        return e.setAttribute("type", "range"), "range" === e.type
    }

    function t() {
        var e = window.innerHeight;
        document.getElementById("page").style.height = e - 60 + "px"
    }
    var n, o, r, u, c, d, l, a;
    e && (n = document.querySelector("#box"), o = document.querySelector("#r"), r = document.querySelector("#g"), u = document.querySelector("#b"), c = document.querySelector("h2"), d = document.querySelector("#red"), l = document.querySelector("#green"), a = document.querySelector("#blue"), document.body.addEventListener("change", function() {
        n.style.backgroundColor = "rgb(" + [o.value, r.value, u.value].join(",") + ")"
    }, !1), document.body.addEventListener("change", function() {
        c.style.color = "rgb(" + [d.value, l.value, a.value].join(",") + ")"
    }, !1)), t(), window.onresize = function() {
        t()
    }
}();