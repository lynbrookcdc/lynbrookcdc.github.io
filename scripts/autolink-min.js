(function () {
    var k = [].slice;
    String.prototype.autoLink = function () {
        var d, b, g, a, e, f, h;
        e = 1 <= arguments.length ? k.call(arguments, 0) : [];
        f = /(^|[\s\n]|<[A-Za-z]*\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi;
        if (!(0 < e.length)) return this.replace(f, "$1<a href='$2'>$2</a>");
        a = e[0];
        d = a.callback;
        g = function () {
            var c;
            c = [];
            for (b in a) h = a[b], "callback" !== b && c.push(" " + b + "='" + h + "'");
            return c
        }().join("");
        return this.replace(f, function (c, b, a) {
            c = ("function" === typeof d ? d(a) :
                void 0) || "<a href='" + a + "'" + g + ">" + a + "</a>";
            return "" + b + c
        })
    }
}).call(this);
