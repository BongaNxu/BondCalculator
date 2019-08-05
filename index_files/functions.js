function Modal(t) {
    var e = this,
        i = function () {};
    t = t || {}, e.element = t.element, e.fixed = t.fixed || !1, e.strict = t.strict || !1, e.cover = t.cover || "neutral", e.active = !1, e.coverElement = $('<div class="modalCover modalCover_' + e.cover + '"></div>'), $(document).keydown(function (t) {
        e.active && !e.strict && (t.metaKey || t.ctrlKey || t.altKey || t.shiftKey || $("input:focus, textarea:focus, select:focus").length || 27 === t.which && (t.preventDefault(), e.deactivate()))
    }), this.listeners = {
        activate: t.onActivate || i,
        deactivate: t.onDeactivate || i
    }
}! function (t, e) {
    function i(e) {
        return !t(e).parents().andSelf().filter(function () {
            return "hidden" === t.curCSS(this, "visibility") || t.expr.filters.hidden(this)
        }).length
    }
    t.ui = t.ui || {}, t.ui.version || (t.extend(t.ui, {
        version: "1.8.10",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), t.fn.extend({
        _focus: t.fn.focus,
        focus: function (e, i) {
            return "number" == typeof e ? this.each(function () {
                var s = this;
                setTimeout(function () {
                    t(s).focus(), i && i.call(s)
                }, e)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var e;
            return e = t.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(t.curCSS(this, "position", 1)) && /(auto|scroll)/.test(t.curCSS(this, "overflow", 1) + t.curCSS(this, "overflow-y", 1) + t.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(t.curCSS(this, "overflow", 1) + t.curCSS(this, "overflow-y", 1) + t.curCSS(this, "overflow-x", 1))
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        },
        zIndex: function (i) {
            if (i !== e) return this.css("zIndex", i);
            if (this.length) {
                i = t(this[0]);
                for (var s; i.length && i[0] !== document;) {
                    if (s = i.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (s = parseInt(i.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    i = i.parent()
                }
            }
            return 0
        },
        disableSelection: function () {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (t) {
                t.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), t.each(["Width", "Height"], function (i, s) {
        function n(e, i, s, n) {
            return t.each(a, function () {
                i -= parseFloat(t.curCSS(e, "padding" + this, !0)) || 0, s && (i -= parseFloat(t.curCSS(e, "border" + this + "Width", !0)) || 0), n && (i -= parseFloat(t.curCSS(e, "margin" + this, !0)) || 0)
            }), i
        }
        var a = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
            o = s.toLowerCase(),
            r = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
        t.fn["inner" + s] = function (i) {
            return i === e ? r["inner" + s].call(this) : this.each(function () {
                t(this).css(o, n(this, i) + "px")
            })
        }, t.fn["outer" + s] = function (e, i) {
            return "number" != typeof e ? r["outer" + s].call(this, e) : this.each(function () {
                t(this).css(o, n(this, e, !0, i) + "px")
            })
        }
    }), t.extend(t.expr[":"], {
        data: function (e, i, s) {
            return !!t.data(e, s[3])
        },
        focusable: function (e) {
            var s = e.nodeName.toLowerCase(),
                n = t.attr(e, "tabindex");
            return "area" === s ? (s = e.parentNode, n = s.name, e.href && n && "map" === s.nodeName.toLowerCase() ? (e = t("img[usemap=#" + n + "]")[0], !! e && i(e)) : !1) : (/input|select|textarea|button|object/.test(s) ? !e.disabled : "a" == s ? e.href || !isNaN(n) : !isNaN(n)) && i(e)
        },
        tabbable: function (e) {
            var i = t.attr(e, "tabindex");
            return (isNaN(i) || i >= 0) && t(e).is(":focusable")
        }
    }), t(function () {
        var e = document.body,
            i = e.appendChild(i = document.createElement("div"));
        t.extend(i.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), t.support.minHeight = 100 === i.offsetHeight, t.support.selectstart = "onselectstart" in i, e.removeChild(i).style.display = "none"
    }), t.extend(t.ui, {
        plugin: {
            add: function (e, i, s) {
                e = t.ui[e].prototype;
                for (var n in s) e.plugins[n] = e.plugins[n] || [], e.plugins[n].push([i, s[n]])
            },
            call: function (t, e, i) {
                if ((e = t.plugins[e]) && t.element[0].parentNode)
                    for (var s = 0; s < e.length; s++) t.options[e[s][0]] && e[s][1].apply(t.element, i)
            }
        },
        contains: function (t, e) {
            return document.compareDocumentPosition ? 16 & t.compareDocumentPosition(e) : t !== e && t.contains(e)
        },
        hasScroll: function (e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            i = i && "left" === i ? "scrollLeft" : "scrollTop";
            var s = !1;
            return e[i] > 0 ? !0 : (e[i] = 1, s = e[i] > 0, e[i] = 0, s)
        },
        isOverAxis: function (t, e, i) {
            return t > e && e + i > t
        },
        isOver: function (e, i, s, n, a, o) {
            return t.ui.isOverAxis(e, s, a) && t.ui.isOverAxis(i, n, o)
        }
    }))
}(jQuery),
function (t, e) {
    if (t.cleanData) {
        var i = t.cleanData;
        t.cleanData = function (e) {
            for (var s = 0, n; null != (n = e[s]); s++) t(n).triggerHandler("remove");
            i(e)
        }
    } else {
        var s = t.fn.remove;
        t.fn.remove = function (e, i) {
            return this.each(function () {
                return i || (!e || t.filter(e, [this]).length) && t("*", this).add([this]).each(function () {
                    t(this).triggerHandler("remove")
                }), s.call(t(this), e, i)
            })
        }
    }
    t.widget = function (e, i, s) {
        var n = e.split(".")[0],
            a;
        e = e.split(".")[1], a = n + "-" + e, s || (s = i, i = t.Widget), t.expr[":"][a] = function (i) {
            return !!t.data(i, e)
        }, t[n] = t[n] || {}, t[n][e] = function (t, e) {
            arguments.length && this._createWidget(t, e)
        }, i = new i, i.options = t.extend(!0, {}, i.options), t[n][e].prototype = t.extend(!0, i, {
            namespace: n,
            widgetName: e,
            widgetEventPrefix: t[n][e].prototype.widgetEventPrefix || e,
            widgetBaseClass: a
        }, s), t.widget.bridge(e, t[n][e])
    }, t.widget.bridge = function (i, s) {
        t.fn[i] = function (n) {
            var a = "string" == typeof n,
                o = Array.prototype.slice.call(arguments, 1),
                r = this;
            return n = !a && o.length ? t.extend.apply(null, [!0, n].concat(o)) : n, a && "_" === n.charAt(0) ? r : (a ? this.each(function () {
                var s = t.data(this, i),
                    a = s && t.isFunction(s[n]) ? s[n].apply(s, o) : s;
                return a !== s && a !== e ? (r = a, !1) : void 0
            }) : this.each(function () {
                var e = t.data(this, i);
                e ? e.option(n || {})._init() : t.data(this, i, new s(n, this))
            }), r)
        }
    }, t.Widget = function (t, e) {
        arguments.length && this._createWidget(t, e)
    }, t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function (e, i) {
            t.data(i, this.widgetName, this), this.element = t(i), this.options = t.extend(!0, {}, this.options, this._getCreateOptions(), e);
            var s = this;
            this.element.bind("remove." + this.widgetName, function () {
                s.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function () {
            return t.metadata && t.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function () {
            return this.element
        },
        option: function (i, s) {
            var n = i;
            if (0 === arguments.length) return t.extend({}, this.options);
            if ("string" == typeof i) {
                if (s === e) return this.options[i];
                n = {}, n[i] = s
            }
            return this._setOptions(n), this
        },
        _setOptions: function (e) {
            var i = this;
            return t.each(e, function (t, e) {
                i._setOption(t, e)
            }), this
        },
        _setOption: function (t, e) {
            return this.options[t] = e, "disabled" === t && this.widget()[e ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", e), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _trigger: function (e, i, s) {
            var n = this.options[e];
            if (i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), s = s || {}, i.originalEvent) {
                e = t.event.props.length;
                for (var a; e;) a = t.event.props[--e], i[a] = i.originalEvent[a]
            }
            return this.element.trigger(i, s), !(t.isFunction(n) && n.call(this.element[0], i, s) === !1 || i.isDefaultPrevented())
        }
    }
}(jQuery),
function (t) {
    t.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function (e) {
            if (e.originalEvent = e.originalEvent || {}, !e.originalEvent.mouseHandled) {
                this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this,
                    s = 1 == e.which,
                    n = "string" == typeof this.options.cancel ? t(e.target).parents().add(e.target).filter(this.options.cancel).length : !1;
                return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t)
                }, this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), e.originalEvent.mouseHandled = !0)) : !0
            }
        },
        _mouseMove: function (e) {
            return !t.browser.msie || document.documentMode >= 9 || e.button ? this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1) ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) : this._mouseUp(e)
        },
        _mouseUp: function (e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target == this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    })
}(jQuery),
function (t) {
    t.widget("ui.draggable", t.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function () {
            "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        destroy: function () {
            return this.element.data("draggable") ? (this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this) : void 0
        },
        _mouseCapture: function (e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(e), this.handle ? !0 : !1)
        },
        _mouseStart: function (e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.helper.addClass("ui-draggable-dragging"), this._mouseDrag(e, !0), !0)
        },
        _mouseDrag: function (e, i) {
            if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                if (i = this._uiHash(), this._trigger("drag", e, i) === !1) return this._mouseUp({}), !1;
                this.position = i.position
            }
            return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function (e) {
            var i = !1;
            if (t.ui.ddmanager && !this.options.dropBehaviour && (i = t.ui.ddmanager.drop(this, e)), this.dropped && (i = this.dropped, this.dropped = !1), !(this.element[0] && this.element[0].parentNode || "original" != this.options.helper)) return !1;
            if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
                var s = this;
                t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    s._trigger("stop", e) !== !1 && s._clear()
                })
            } else this._trigger("stop", e) !== !1 && this._clear();
            return !1
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (e) {
            var i = this.options.handle && t(this.options.handle, this.element).length ? !1 : !0;
            return t(this.options.handle, this.element).find("*").andSelf().each(function () {
                this == e.target && (i = !0)
            }), i
        },
        _createHelper: function (e) {
            var i = this.options;
            return e = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" == i.helper ? this.element.clone() : this.element, e.parents("body").length || e.appendTo("parent" == i.appendTo ? this.element[0].parentNode : i.appendTo), e[0] != this.element[0] && !/(fixed|absolute)/.test(e.css("position")) && e.css("position", "absolute"), e
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.browser.msie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" == this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var e = this.options;
            if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = [("document" == e.containment ? 0 : t(window).scrollLeft()) - this.offset.relative.left - this.offset.parent.left, ("document" == e.containment ? 0 : t(window).scrollTop()) - this.offset.relative.top - this.offset.parent.top, ("document" == e.containment ? 0 : t(window).scrollLeft()) + t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == e.containment ? 0 : t(window).scrollTop()) + (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || e.containment.constructor == Array) e.containment.constructor == Array && (this.containment = e.containment);
            else {
                var i = t(e.containment)[0];
                if (i) {
                    e = t(e.containment).offset();
                    var s = "hidden" != t(i).css("overflow");
                    this.containment = [e.left + (parseInt(t(i).css("borderLeftWidth"), 10) || 0) + (parseInt(t(i).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(t(i).css("borderTopWidth"), 10) || 0) + (parseInt(t(i).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (s ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t(i).css("borderLeftWidth"), 10) || 0) - (parseInt(t(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (s ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t(i).css("borderTopWidth"), 10) || 0) - (parseInt(t(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
                }
            }
        },
        _convertPositionTo: function (e, i) {
            i || (i = this.position), e = "absolute" == e ? 1 : -1;
            var s = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                n = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * e + this.offset.parent.top * e - (t.browser.safari && t.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()) * e),
                left: i.left + this.offset.relative.left * e + this.offset.parent.left * e - (t.browser.safari && t.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft()) * e)
            }
        },
        _generatePosition: function (e) {
            var i = this.options,
                s = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                n = /(html|body)/i.test(s[0].tagName),
                a = e.pageX,
                o = e.pageY;
            return this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), i.grid && (o = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1], o = this.containment ? o - this.offset.click.top < this.containment[1] || o - this.offset.click.top > this.containment[3] ? o - this.offset.click.top < this.containment[1] ? o + i.grid[1] : o - i.grid[1] : o : o, a = this.originalPageX + Math.round((a - this.originalPageX) / i.grid[0]) * i.grid[0], a = this.containment ? a - this.offset.click.left < this.containment[0] || a - this.offset.click.left > this.containment[2] ? a - this.offset.click.left < this.containment[0] ? a + i.grid[0] : a - i.grid[0] : a : a)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (t.browser.safari && t.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()),
                left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (t.browser.safari && t.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft())
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" == e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.extend(t.ui.draggable, {
        version: "1.8.10"
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, i) {
            var s = t(this).data("draggable"),
                n = s.options,
                a = t.extend({}, i, {
                    item: s.element
                });
            s.sortables = [], t(n.connectToSortable).each(function () {
                var i = t.data(this, "sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i._refreshItems(), i._trigger("activate", e, a))
            })
        },
        stop: function (e, i) {
            var s = t(this).data("draggable"),
                n = t.extend({}, i, {
                    item: s.element
                });
            t.each(s.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" == s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
            })
        },
        drag: function (e, i) {
            var s = t(this).data("draggable"),
                n = this;
            t.each(s.sortables, function () {
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return i.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var e = t("body"),
                i = t(this).data("draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
        },
        stop: function () {
            var e = t(this).data("draggable").options;
            e._cursor && t("body").css("cursor", e._cursor)
        }
    }), t.ui.plugin.add("draggable", "iframeFix", {
        start: function () {
            var e = t(this).data("draggable").options;
            t(e.iframeFix === !0 ? "iframe" : e.iframeFix).each(function () {
                t('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body")
            })
        },
        stop: function () {
            t("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            })
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function (e, i) {
            e = t(i.helper), i = t(this).data("draggable").options, e.css("opacity") && (i._opacity = e.css("opacity")), e.css("opacity", i.opacity)
        },
        stop: function (e, i) {
            e = t(this).data("draggable").options, e._opacity && t(i.helper).css("opacity", e._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var e = t(this).data("draggable");
            e.scrollParent[0] != document && "HTML" != e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
        },
        drag: function (e) {
            var i = t(this).data("draggable"),
                s = i.options,
                n = !1;
            i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (s.axis && "x" == s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" == s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" == s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" == s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function () {
            var e = t(this).data("draggable"),
                i = e.options;
            e.snapElements = [], t(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function () {
                var i = t(this),
                    s = i.offset();
                this != e.element[0] && e.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: s.top,
                    left: s.left
                })
            })
        },
        drag: function (e, i) {
            for (var s = t(this).data("draggable"), n = s.options, a = n.snapTolerance, o = i.offset.left, r = o + s.helperProportions.width, l = i.offset.top, h = l + s.helperProportions.height, c = s.snapElements.length - 1; c >= 0; c--) {
                var u = s.snapElements[c].left,
                    d = u + s.snapElements[c].width,
                    p = s.snapElements[c].top,
                    f = p + s.snapElements[c].height;
                if (o > u - a && d + a > o && l > p - a && f + a > l || o > u - a && d + a > o && h > p - a && f + a > h || r > u - a && d + a > r && l > p - a && f + a > l || r > u - a && d + a > r && h > p - a && f + a > h) {
                    if ("inner" != n.snapMode) {
                        var g = Math.abs(p - h) <= a,
                            m = Math.abs(f - l) <= a,
                            v = Math.abs(u - r) <= a,
                            b = Math.abs(d - o) <= a;
                        g && (i.position.top = s._convertPositionTo("relative", {
                            top: p - s.helperProportions.height,
                            left: 0
                        }).top - s.margins.top), m && (i.position.top = s._convertPositionTo("relative", {
                            top: f,
                            left: 0
                        }).top - s.margins.top), v && (i.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: u - s.helperProportions.width
                        }).left - s.margins.left), b && (i.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: d
                        }).left - s.margins.left)
                    }
                    var _ = g || m || v || b;
                    "outer" != n.snapMode && (g = Math.abs(p - l) <= a, m = Math.abs(f - h) <= a, v = Math.abs(u - o) <= a, b = Math.abs(d - r) <= a, g && (i.position.top = s._convertPositionTo("relative", {
                        top: p,
                        left: 0
                    }).top - s.margins.top), m && (i.position.top = s._convertPositionTo("relative", {
                        top: f - s.helperProportions.height,
                        left: 0
                    }).top - s.margins.top), v && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: u
                    }).left - s.margins.left), b && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: d - s.helperProportions.width
                    }).left - s.margins.left)), !s.snapElements[c].snapping && (g || m || v || b || _) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
                        snapItem: s.snapElements[c].item
                    })), s.snapElements[c].snapping = g || m || v || b || _
                } else s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
                    snapItem: s.snapElements[c].item
                })), s.snapElements[c].snapping = !1
            }
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function () {
            var e = t(this).data("draggable").options;
            if (e = t.makeArray(t(e.stack)).sort(function (e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
            }), e.length) {
                var i = parseInt(e[0].style.zIndex) || 0;
                t(e).each(function (t) {
                    this.style.zIndex = i + t
                }), this[0].style.zIndex = i + e.length
            }
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function (e, i) {
            e = t(i.helper), i = t(this).data("draggable").options, e.css("zIndex") && (i._zIndex = e.css("zIndex")), e.css("zIndex", i.zIndex)
        },
        stop: function (e, i) {
            e = t(this).data("draggable").options, e._zIndex && t(i.helper).css("zIndex", e._zIndex)
        }
    })
}(jQuery),
function (t) {
    t.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function () {
            var e = this.options,
                i = e.accept;
            this.isover = 0, this.isout = 1, this.accept = t.isFunction(i) ? i : function (t) {
                return t.is(i)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [], t.ui.ddmanager.droppables[e.scope].push(this), e.addClasses && this.element.addClass("ui-droppable")
        },
        destroy: function () {
            for (var e = t.ui.ddmanager.droppables[this.options.scope], i = 0; i < e.length; i++) e[i] == this && e.splice(i, 1);
            return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this
        },
        _setOption: function (e, i) {
            "accept" == e && (this.accept = t.isFunction(i) ? i : function (t) {
                return t.is(i)
            }), t.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function (e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
        },
        _out: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
        },
        _drop: function (e, i) {
            var s = i || t.ui.ddmanager.current;
            if (!s || (s.currentItem || s.element)[0] == this.element[0]) return !1;
            var n = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
                var e = t.data(this, "droppable");
                return e.options.greedy && !e.options.disabled && e.options.scope == s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {
                    offset: e.element.offset()
                }), e.options.tolerance) ? (n = !0, !1) : void 0
            }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element) : !1
        },
        ui: function (t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }), t.extend(t.ui.droppable, {
        version: "1.8.10"
    }), t.ui.intersect = function (e, i, s) {
        if (!i.offset) return !1;
        var n = (e.positionAbs || e.position.absolute).left,
            a = n + e.helperProportions.width,
            o = (e.positionAbs || e.position.absolute).top,
            r = o + e.helperProportions.height,
            l = i.offset.left,
            h = l + i.proportions.width,
            c = i.offset.top,
            u = c + i.proportions.height;
        switch (s) {
        case "fit":
            return n >= l && h >= a && o >= c && u >= r;
        case "intersect":
            return l < n + e.helperProportions.width / 2 && a - e.helperProportions.width / 2 < h && c < o + e.helperProportions.height / 2 && r - e.helperProportions.height / 2 < u;
        case "pointer":
            return t.ui.isOver((e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top, (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left, c, l, i.proportions.height, i.proportions.width);
        case "touch":
            return (o >= c && u >= o || r >= c && u >= r || c > o && r > u) && (n >= l && h >= n || a >= l && h >= a || l > n && a > h);
        default:
            return !1
        }
    }, t.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function (e, i) {
            var s = t.ui.ddmanager.droppables[e.options.scope] || [],
                n = i ? i.type : null,
                a = (e.currentItem || e.element).find(":data(droppable)").andSelf(),
                o = 0;
            t: for (; o < s.length; o++)
                if (!(s[o].options.disabled || e && !s[o].accept.call(s[o].element[0], e.currentItem || e.element))) {
                    for (var r = 0; r < a.length; r++)
                        if (a[r] == s[o].element[0]) {
                            s[o].proportions.height = 0;
                            continue t
                        }
                    s[o].visible = "none" != s[o].element.css("display"), s[o].visible && (s[o].offset = s[o].element.offset(), s[o].proportions = {
                        width: s[o].element[0].offsetWidth,
                        height: s[o].element[0].offsetHeight
                    }, "mousedown" == n && s[o]._activate.call(s[o], i))
                }
        },
        drop: function (e, i) {
            var s = !1;
            return t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = s || this._drop.call(this, i)), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
            }), s
        },
        drag: function (e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s = t.ui.intersect(e, this, this.options.tolerance);
                    if (s = s || 1 != this.isover ? s && 0 == this.isover ? "isover" : null : "isout") {
                        var n;
                        if (this.options.greedy) {
                            var a = this.element.parents(":data(droppable):eq(0)");
                            a.length && (n = t.data(a[0], "droppable"), n.greedyChild = "isover" == s ? 1 : 0)
                        }
                        n && "isover" == s && (n.isover = 0, n.isout = 1, n._out.call(n, i)), this[s] = 1, this["isout" == s ? "isover" : "isout"] = 0, this["isover" == s ? "_over" : "_out"].call(this, i), n && "isout" == s && (n.isout = 0, n.isover = 1, n._over.call(n, i))
                    }
                }
            })
        }
    }
}(jQuery),
function (t) {
    t.widget("ui.resizable", t.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function () {
            var e = this,
                i = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !! i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (/relative/.test(this.element.css("position")) && t.browser.opera && this.element.css({
                position: "relative",
                top: "auto",
                left: "auto"
            }), this.element.wrap(t('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = i.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this.handles.constructor == String) {
                "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var s = this.handles.split(",");
                this.handles = {};
                for (var n = 0; n < s.length; n++) {
                    var a = t.trim(s[n]),
                        o = t('<div class="ui-resizable-handle ' + ("ui-resizable-" + a) + '"></div>');
                    /sw|se|ne|nw/.test(a) && o.css({
                        zIndex: ++i.zIndex
                    }), "se" == a && o.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[a] = ".ui-resizable-" + a, this.element.append(o)
                }
            }
            this._renderAxis = function (e) {
                e = e || this.element;
                for (var i in this.handles) {
                    if (this.handles[i].constructor == String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var s = t(this.handles[i], this.element),
                            n = 0;
                        n = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, n), this._proportionallyResize()
                    }
                    t(this.handles[i])
                }
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                if (!e.resizing) {
                    if (this.className) var t = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    e.axis = t && t[1] ? t[1] : "se"
                }
            }), i.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").hover(function () {
                t(this).removeClass("ui-resizable-autohide"), e._handles.show()
            }, function () {
                e.resizing || (t(this).addClass("ui-resizable-autohide"), e._handles.hide())
            })), this._mouseInit()
        },
        destroy: function () {
            this._mouseDestroy();
            var e = function (e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                e(this.element);
                var i = this.element;
                i.after(this.originalElement.css({
                    position: i.css("position"),
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: i.css("top"),
                    left: i.css("left")
                })).remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
        },
        _mouseCapture: function (e) {
            var i = !1;
            for (var s in this.handles) t(this.handles[s])[0] == e.target && (i = !0);
            return !this.options.disabled && i
        },
        _mouseStart: function (i) {
            var s = this.options,
                n = this.element.position(),
                a = this.element;
            this.resizing = !0, this.documentScroll = {
                top: t(document).scrollTop(),
                left: t(document).scrollLeft()
            }, (a.is(".ui-draggable") || /absolute/.test(a.css("position"))) && a.css({
                position: "absolute",
                top: n.top,
                left: n.left
            }), t.browser.opera && /relative/.test(a.css("position")) && a.css({
                position: "relative",
                top: "auto",
                left: "auto"
            }), this._renderProxy(), n = e(this.helper.css("left"));
            var o = e(this.helper.css("top"));
            return s.containment && (n += t(s.containment).scrollLeft() || 0, o += t(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: n,
                top: o
            }, this.size = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            }, this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            }, this.originalPosition = {
                left: n,
                top: o
            }, this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            }, this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" == s ? this.axis + "-resize" : s), a.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        },
        _mouseDrag: function (t) {
            var e = this.helper,
                i = this.originalMousePosition,
                s = this._change[this.axis];
            return s ? (i = s.apply(this, [t, t.pageX - i.left || 0, t.pageY - i.top || 0]), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._propagate("resize", t), e.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(i), this._trigger("resize", t, this.ui()), !1) : !1
        },
        _mouseStop: function (e) {
            this.resizing = !1;
            var i = this.options,
                s = this;
            if (this._helper) {
                var n = this._proportionallyResizeElements,
                    a = n.length && /textarea/i.test(n[0].nodeName);
                n = a && t.ui.hasScroll(n[0], "left") ? 0 : s.sizeDiff.height, a = a ? 0 : s.sizeDiff.width, a = {
                    width: s.helper.width() - a,
                    height: s.helper.height() - n
                }, n = parseInt(s.element.css("left"), 10) + (s.position.left - s.originalPosition.left) || null;
                var o = parseInt(s.element.css("top"), 10) + (s.position.top - s.originalPosition.top) || null;
                i.animate || this.element.css(t.extend(a, {
                    top: o,
                    left: n
                })), s.helper.height(s.size.height), s.helper.width(s.size.width), this._helper && !i.animate && this._proportionallyResize()
            }
            return t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updateCache: function (t) {
            this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function (t) {
            var e = this.position,
                i = this.size,
                s = this.axis;
            return t.height ? t.width = i.height * this.aspectRatio : t.width && (t.height = i.width / this.aspectRatio), "sw" == s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" == s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function (t) {
            var e = this.options,
                s = this.axis,
                n = i(t.width) && e.maxWidth && e.maxWidth < t.width,
                a = i(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = i(t.width) && e.minWidth && e.minWidth > t.width,
                r = i(t.height) && e.minHeight && e.minHeight > t.height;
            o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), a && (t.height = e.maxHeight);
            var l = this.originalPosition.left + this.originalSize.width,
                h = this.position.top + this.size.height,
                c = /sw|nw|w/.test(s);
            return s = /nw|ne|n/.test(s), o && c && (t.left = l - e.minWidth), n && c && (t.left = l - e.maxWidth), r && s && (t.top = h - e.minHeight), a && s && (t.top = h - e.maxHeight), (e = !t.width && !t.height) && !t.left && t.top ? t.top = null : e && !t.top && t.left && (t.left = null), t
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length)
                for (var e = this.helper || this.element, i = 0; i < this._proportionallyResizeElements.length; i++) {
                    var s = this._proportionallyResizeElements[i];
                    if (!this.borderDif) {
                        var n = [s.css("borderTopWidth"), s.css("borderRightWidth"), s.css("borderBottomWidth"), s.css("borderLeftWidth")],
                            a = [s.css("paddingTop"), s.css("paddingRight"), s.css("paddingBottom"), s.css("paddingLeft")];
                        this.borderDif = t.map(n, function (t, e) {
                            return t = parseInt(t, 10) || 0, e = parseInt(a[e], 10) || 0, t + e
                        })
                    }
                    t.browser.msie && (t(e).is(":hidden") || t(e).parents(":hidden").length) || s.css({
                        height: e.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: e.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
        },
        _renderProxy: function () {
            var e = this.options;
            if (this.elementOffset = this.element.offset(), this._helper) {
                this.helper = this.helper || t('<div style="overflow:hidden;"></div>');
                var i = t.browser.msie && t.browser.version < 7,
                    s = i ? 1 : 0;
                i = i ? 2 : -1, this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + i,
                    height: this.element.outerHeight() + i,
                    position: "absolute",
                    left: this.elementOffset.left - s + "px",
                    top: this.elementOffset.top - s + "px",
                    zIndex: ++e.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function (t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function (t, e) {
                return {
                    left: this.originalPosition.left + e,
                    width: this.originalSize.width - e
                }
            },
            n: function (t, e, i) {
                return {
                    top: this.originalPosition.top + i,
                    height: this.originalSize.height - i
                }
            },
            s: function (t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function (e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            sw: function (e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },
            ne: function (e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            nw: function (e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function (e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" != e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.extend(t.ui.resizable, {
        version: "1.8.10"
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var e = t(this).data("resizable").options,
                i = function (e) {
                    t(e).each(function () {
                        var e = t(this);
                        e.data("resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10),
                            position: e.css("position")
                        })
                    })
                };
            "object" != typeof e.alsoResize || e.alsoResize.parentNode ? i(e.alsoResize) : e.alsoResize.length ? (e.alsoResize = e.alsoResize[0], i(e.alsoResize)) : t.each(e.alsoResize, function (t) {
                i(t)
            })
        },
        resize: function (e, i) {
            var s = t(this).data("resizable");
            e = s.options;
            var n = s.originalSize,
                a = s.originalPosition,
                o = {
                    height: s.size.height - n.height || 0,
                    width: s.size.width - n.width || 0,
                    top: s.position.top - a.top || 0,
                    left: s.position.left - a.left || 0
                }, r = function (e, n) {
                    t(e).each(function () {
                        var e = t(this),
                            a = t(this).data("resizable-alsoresize"),
                            r = {}, l = n && n.length ? n : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(l, function (t, e) {
                            (t = (a[e] || 0) + (o[e] || 0)) && t >= 0 && (r[e] = t || null)
                        }), t.browser.opera && /relative/.test(e.css("position")) && (s._revertToRelativePosition = !0, e.css({
                            position: "absolute",
                            top: "auto",
                            left: "auto"
                        })), e.css(r)
                    })
                };
            "object" != typeof e.alsoResize || e.alsoResize.nodeType ? r(e.alsoResize) : t.each(e.alsoResize, function (t, e) {
                r(t, e)
            })
        },
        stop: function () {
            var e = t(this).data("resizable"),
                i = e.options,
                s = function (e) {
                    t(e).each(function () {
                        var e = t(this);
                        e.css({
                            position: e.data("resizable-alsoresize").position
                        })
                    })
                };
            e._revertToRelativePosition && (e._revertToRelativePosition = !1, "object" != typeof i.alsoResize || i.alsoResize.nodeType ? s(i.alsoResize) : t.each(i.alsoResize, function (t) {
                s(t)
            })), t(this).removeData("resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
            var i = t(this).data("resizable"),
                s = i.options,
                n = i._proportionallyResizeElements,
                a = n.length && /textarea/i.test(n[0].nodeName),
                o = a && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height;
            a = {
                width: i.size.width - (a ? 0 : i.sizeDiff.width),
                height: i.size.height - o
            }, o = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null;
            var r = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(a, r && o ? {
                top: r,
                left: o
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function () {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function () {
            var i = t(this).data("resizable"),
                s = i.element,
                n = i.options.containment;
            if (s = n instanceof t ? n.get(0) : /parent/.test(n) ? s.parent().get(0) : n)
                if (i.containerElement = t(s), /document/.test(n) || n == document) i.containerOffset = {
                    left: 0,
                    top: 0
                }, i.containerPosition = {
                    left: 0,
                    top: 0
                }, i.parentData = {
                    element: t(document),
                    left: 0,
                    top: 0,
                    width: t(document).width(),
                    height: t(document).height() || document.body.parentNode.scrollHeight
                };
                else {
                    var a = t(s),
                        o = [];
                    t(["Top", "Right", "Left", "Bottom"]).each(function (t, i) {
                        o[t] = e(a.css("padding" + i))
                    }), i.containerOffset = a.offset(), i.containerPosition = a.position(), i.containerSize = {
                        height: a.innerHeight() - o[3],
                        width: a.innerWidth() - o[1]
                    }, n = i.containerOffset;
                    var r = i.containerSize.height,
                        l = i.containerSize.width;
                    l = t.ui.hasScroll(s, "left") ? s.scrollWidth : l, r = t.ui.hasScroll(s) ? s.scrollHeight : r, i.parentData = {
                        element: s,
                        left: n.left,
                        top: n.top,
                        width: l,
                        height: r
                    }
                }
        },
        resize: function (e) {
            var i = t(this).data("resizable"),
                s = i.options,
                n = i.containerOffset,
                a = i.position;
            e = i._aspectRatio || e.shiftKey;
            var o = {
                top: 0,
                left: 0
            }, r = i.containerElement;
            r[0] != document && /static/.test(r.css("position")) && (o = n), a.left < (i._helper ? n.left : 0) && (i.size.width += i._helper ? i.position.left - n.left : i.position.left - o.left, e && (i.size.height = i.size.width / s.aspectRatio), i.position.left = s.helper ? n.left : 0), a.top < (i._helper ? n.top : 0) && (i.size.height += i._helper ? i.position.top - n.top : i.position.top, e && (i.size.width = i.size.height * s.aspectRatio), i.position.top = i._helper ? n.top : 0), i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top, s = Math.abs((i._helper ? i.offset.left - o.left : i.offset.left - o.left) + i.sizeDiff.width), n = Math.abs((i._helper ? i.offset.top - o.top : i.offset.top - n.top) + i.sizeDiff.height), a = i.containerElement.get(0) == i.element.parent().get(0), o = /relative|absolute/.test(i.containerElement.css("position")), a && o && (s -= i.parentData.left), s + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - s, e && (i.size.height = i.size.width / i.aspectRatio)), n + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - n, e && (i.size.width = i.size.height * i.aspectRatio))
        },
        stop: function () {
            var e = t(this).data("resizable"),
                i = e.options,
                s = e.containerOffset,
                n = e.containerPosition,
                a = e.containerElement,
                o = t(e.helper),
                r = o.offset(),
                l = o.outerWidth() - e.sizeDiff.width;
            o = o.outerHeight() - e.sizeDiff.height, e._helper && !i.animate && /relative/.test(a.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: l,
                height: o
            }), e._helper && !i.animate && /static/.test(a.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: l,
                height: o
            })
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var e = t(this).data("resizable"),
                i = e.options,
                s = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
        },
        resize: function () {
            var e = t(this).data("resizable");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function () {
            var e = t(this).data("resizable");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var e = t(this).data("resizable"),
                i = e.options,
                s = e.size,
                n = e.originalSize,
                a = e.originalPosition,
                o = e.axis;
            i.grid = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid;
            var r = Math.round((s.width - n.width) / (i.grid[0] || 1)) * (i.grid[0] || 1);
            i = Math.round((s.height - n.height) / (i.grid[1] || 1)) * (i.grid[1] || 1), /^(se|s|e)$/.test(o) ? (e.size.width = n.width + r, e.size.height = n.height + i) : /^(ne)$/.test(o) ? (e.size.width = n.width + r, e.size.height = n.height + i, e.position.top = a.top - i) : (/^(sw)$/.test(o) ? (e.size.width = n.width + r, e.size.height = n.height + i) : (e.size.width = n.width + r, e.size.height = n.height + i, e.position.top = a.top - i), e.position.left = a.left - r)
        }
    });
    var e = function (t) {
        return parseInt(t, 10) || 0
    }, i = function (t) {
            return !isNaN(parseInt(t, 10))
        }
}(jQuery),
function (t) {
    t.widget("ui.selectable", t.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function () {
            var e = this;
            this.element.addClass("ui-selectable"), this.dragged = !1;
            var i;
            this.refresh = function () {
                i = t(e.options.filter, e.element[0]), i.each(function () {
                    var e = t(this),
                        i = e.offset();
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: i.left,
                        top: i.top,
                        right: i.left + e.outerWidth(),
                        bottom: i.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = i.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
        },
        destroy: function () {
            return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this
        },
        _mouseStart: function (e) {
            var i = this;
            if (this.opos = [e.pageX, e.pageY], !this.options.disabled) {
                var s = this.options;
                this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                    left: e.clientX,
                    top: e.clientY,
                    width: 0,
                    height: 0
                }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                    var s = t.data(this, "selectable-item");
                    s.startselected = !0, e.metaKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
                        unselecting: s.element
                    }))
                }), t(e.target).parents().andSelf().each(function () {
                    var s = t.data(this, "selectable-item");
                    if (s) {
                        var n = !e.metaKey || !s.$element.hasClass("ui-selected");
                        return s.$element.removeClass(n ? "ui-unselecting" : "ui-selected").addClass(n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, (s.selected = n) ? i._trigger("selecting", e, {
                            selecting: s.element
                        }) : i._trigger("unselecting", e, {
                            unselecting: s.element
                        }), !1
                    }
                })
            }
        },
        _mouseDrag: function (e) {
            var i = this;
            if (this.dragged = !0, !this.options.disabled) {
                var s = this.options,
                    n = this.opos[0],
                    a = this.opos[1],
                    o = e.pageX,
                    r = e.pageY;
                if (n > o) {
                    var l = o;
                    o = n, n = l
                }
                return a > r && (l = r, r = a, a = l), this.helper.css({
                    left: n,
                    top: a,
                    width: o - n,
                    height: r - a
                }), this.selectees.each(function () {
                    var l = t.data(this, "selectable-item");
                    if (l && l.element != i.element[0]) {
                        var h = !1;
                        "touch" == s.tolerance ? h = !(l.left > o || l.right < n || l.top > r || l.bottom < a) : "fit" == s.tolerance && (h = l.left > n && l.right < o && l.top > a && l.bottom < r), h ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, i._trigger("selecting", e, {
                            selecting: l.element
                        }))) : (l.selecting && (e.metaKey && l.startselected ? (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), i._trigger("unselecting", e, {
                            unselecting: l.element
                        }))), l.selected && (e.metaKey || l.startselected || (l.$element.removeClass("ui-selected"), l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, i._trigger("unselecting", e, {
                            unselecting: l.element
                        }))))
                    }
                }), !1
            }
        },
        _mouseStop: function (e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
                    unselected: s.element
                })
            }), t(".ui-selecting", this.element[0]).each(function () {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                    selected: s.element
                })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), t.extend(t.ui.selectable, {
        version: "1.8.10"
    })
}(jQuery),
function (t) {
    t.widget("ui.sortable", t.ui.mouse, {
        widgetEventPrefix: "sort",
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function () {
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? /left|right/.test(this.items[0].item.css("float")) : !1, this.offset = this.element.offset(), this._mouseInit()
        },
        destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData("sortable-item");
            return this
        },
        _setOption: function (e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget()[i ? "addClass" : "removeClass"]("ui-sortable-disabled")) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (e, i) {
            if (this.reverting) return !1;
            if (this.options.disabled || "static" == this.options.type) return !1;
            this._refreshItems(e);
            var s = null,
                n = this;
            if (t(e.target).parents().each(function () {
                return t.data(this, "sortable-item") == n ? (s = t(this), !1) : void 0
            }), t.data(e.target, "sortable-item") == n && (s = t(e.target)), !s) return !1;
            if (this.options.handle && !i) {
                var a = !1;
                if (t(this.options.handle, s).find("*").andSelf().each(function () {
                    this == e.target && (a = !0)
                }), !a) return !1
            }
            return this.currentItem = s, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function (e, i, s) {
            i = this.options;
            var n = this;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), i.containment && this._setContainment(), i.cursor && (t("body").css("cursor") && (this._storedCursor = t("body").css("cursor")), t("body").css("cursor", i.cursor)), i.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", i.opacity)), i.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", i.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, n._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function (e) {
            if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                var i = this.options,
                    s = !1;
                this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop + i.scrollSpeed : e.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft + i.scrollSpeed : e.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (e.pageY - t(document).scrollTop() < i.scrollSensitivity ? s = t(document).scrollTop(t(document).scrollTop() - i.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < i.scrollSensitivity && (s = t(document).scrollTop(t(document).scrollTop() + i.scrollSpeed)), e.pageX - t(document).scrollLeft() < i.scrollSensitivity ? s = t(document).scrollLeft(t(document).scrollLeft() - i.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < i.scrollSensitivity && (s = t(document).scrollLeft(t(document).scrollLeft() + i.scrollSpeed))), s !== !1 && t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)
            }
            for (this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) {
                s = this.items[i];
                var n = s.item[0],
                    a = this._intersectsWithPointer(s);
                if (a && n != this.currentItem[0] && this.placeholder[1 == a ? "next" : "prev"]()[0] != n && !t.ui.contains(this.placeholder[0], n) && ("semi-dynamic" == this.options.type ? !t.ui.contains(this.element[0], n) : !0)) {
                    if (this.direction = 1 == a ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(s)) break;
                    this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                    break
                }
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this;
                    i = s.placeholder.offset(), s.reverting = !0, t(this.helper).animate({
                        left: i.left - this.offset.parent.left - s.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: i.top - this.offset.parent.top - s.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function () {
                        s._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function () {
            var e = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var i = this.containers.length - 1; i >= 0; i--) this.containers[i]._trigger("deactivate", null, e._uiHash(this)), this.containers[i].containerCache.over && (this.containers[i]._trigger("out", null, e._uiHash(this)), this.containers[i].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, t(i).each(function () {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, i.each(function () {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function (t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                s = this.positionAbs.top,
                n = s + this.helperProportions.height,
                a = t.left,
                o = a + t.width,
                r = t.top,
                l = r + t.height,
                h = this.offset.click.top,
                c = this.offset.click.left;
            return h = s + h > r && l > s + h && e + c > a && o > e + c, "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? h : a < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < o && r < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function (e) {
            var i = t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height);
            e = t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width), i = i && e, e = this._getDragVerticalDirection();
            var s = this._getDragHorizontalDirection();
            return i ? this.floating ? s && "right" == s || "down" == e ? 2 : 1 : e && ("down" == e ? 2 : 1) : !1
        },
        _intersectsWithSides: function (e) {
            var i = t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height);
            e = t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width);
            var s = this._getDragVerticalDirection(),
                n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" == n && e || "left" == n && !e : s && ("down" == s && i || "up" == s && !i)
        },
        _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != t && (t > 0 ? "right" : "left")
        },
        refresh: function (t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor == String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function (e) {
            var i = [],
                s = [],
                n = this._connectWith();
            if (n && e)
                for (e = n.length - 1; e >= 0; e--)
                    for (var a = t(n[e]), o = a.length - 1; o >= 0; o--) {
                        var r = t.data(a[o], "sortable");
                        r && r != this && !r.options.disabled && s.push([t.isFunction(r.options.items) ? r.options.items.call(r.element) : t(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r])
                    }
            for (s.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), e = s.length - 1; e >= 0; e--) s[e][0].each(function () {
                i.push(this)
            });
            return t(i)
        },
        _removeCurrentsFromItems: function () {
            for (var t = this.currentItem.find(":data(sortable-item)"), e = 0; e < this.items.length; e++)
                for (var i = 0; i < t.length; i++) t[i] == this.items[e].item[0] && this.items.splice(e, 1)
        },
        _refreshItems: function (e) {
            this.items = [], this.containers = [this];
            var i = this.items,
                s = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                n = this._connectWith();
            if (n)
                for (var a = n.length - 1; a >= 0; a--)
                    for (var o = t(n[a]), r = o.length - 1; r >= 0; r--) {
                        var l = t.data(o[r], "sortable");
                        l && l != this && !l.options.disabled && (s.push([t.isFunction(l.options.items) ? l.options.items.call(l.element[0], e, {
                            item: this.currentItem
                        }) : t(l.options.items, l.element), l]), this.containers.push(l))
                    }
            for (a = s.length - 1; a >= 0; a--)
                for (e = s[a][1], n = s[a][0], r = 0, o = n.length; o > r; r++) l = t(n[r]), l.data("sortable-item", e), i.push({
                    item: l,
                    instance: e,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function (e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var i = this.items.length - 1; i >= 0; i--) {
                var s = this.items[i],
                    n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item;
                e || (s.width = n.outerWidth(), s.height = n.outerHeight()), n = n.offset(), s.left = n.left, s.top = n.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) n = this.containers[i].element.offset(), this.containers[i].containerCache.left = n.left, this.containers[i].containerCache.top = n.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function (e) {
            var i = e || this,
                s = i.options;
            if (!s.placeholder || s.placeholder.constructor == String) {
                var n = s.placeholder;
                s.placeholder = {
                    element: function () {
                        var e = t(document.createElement(i.currentItem[0].nodeName)).addClass(n || i.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return n || (e.style.visibility = "hidden"), e
                    },
                    update: function (t, e) {
                        (!n || s.forcePlaceholderSize) && (e.height() || e.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                    }
                }
            }
            i.placeholder = t(s.placeholder.element.call(i.element, i.currentItem)), i.currentItem.after(i.placeholder), s.placeholder.update(i, i.placeholder)
        },
        _contactContainers: function (e) {
            for (var i = null, s = null, n = this.containers.length - 1; n >= 0; n--) t.ui.contains(this.currentItem[0], this.containers[n].element[0]) || (this._intersectsWith(this.containers[n].containerCache) ? i && t.ui.contains(this.containers[n].element[0], i.element[0]) || (i = this.containers[n], s = n) : this.containers[n].containerCache.over && (this.containers[n]._trigger("out", e, this._uiHash(this)), this.containers[n].containerCache.over = 0));
            if (i)
                if (1 === this.containers.length) this.containers[s]._trigger("over", e, this._uiHash(this)), this.containers[s].containerCache.over = 1;
                else if (this.currentContainer != this.containers[s]) {
                i = 1e4, n = null;
                for (var a = this.positionAbs[this.containers[s].floating ? "left" : "top"], o = this.items.length - 1; o >= 0; o--)
                    if (t.ui.contains(this.containers[s].element[0], this.items[o].item[0])) {
                        var r = this.items[o][this.containers[s].floating ? "left" : "top"];
                        Math.abs(r - a) < i && (i = Math.abs(r - a), n = this.items[o])
                    }(n || this.options.dropOnEmpty) && (this.currentContainer = this.containers[s], n ? this._rearrange(e, n, null, !0) : this._rearrange(e, null, this.containers[s].element, !0), this._trigger("change", e, this._uiHash()), this.containers[s]._trigger("change", e, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[s]._trigger("over", e, this._uiHash(this)), this.containers[s].containerCache.over = 1)
            }
        },
        _createHelper: function (e) {
            var i = this.options;
            return e = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem, e.parents("body").length || t("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(e[0]), e[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), ("" == e[0].style.width || i.forceHelperSize) && e.width(this.currentItem.width()), ("" == e[0].style.height || i.forceHelperSize) && e.height(this.currentItem.height()), e
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.browser.msie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" == this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var e = this.options;
            if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(e.containment)) {
                var i = t(e.containment)[0];
                e = t(e.containment).offset();
                var s = "hidden" != t(i).css("overflow");
                this.containment = [e.left + (parseInt(t(i).css("borderLeftWidth"), 10) || 0) + (parseInt(t(i).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(t(i).css("borderTopWidth"), 10) || 0) + (parseInt(t(i).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (s ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t(i).css("borderLeftWidth"), 10) || 0) - (parseInt(t(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (s ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t(i).css("borderTopWidth"), 10) || 0) - (parseInt(t(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (e, i) {
            i || (i = this.position), e = "absolute" == e ? 1 : -1;
            var s = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                n = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * e + this.offset.parent.top * e - (t.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()) * e),
                left: i.left + this.offset.relative.left * e + this.offset.parent.left * e - (t.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft()) * e)
            }
        },
        _generatePosition: function (e) {
            var i = this.options,
                s = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                n = /(html|body)/i.test(s[0].tagName);
            "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
            var a = e.pageX,
                o = e.pageY;
            return this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), i.grid && (o = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1], o = this.containment ? o - this.offset.click.top < this.containment[1] || o - this.offset.click.top > this.containment[3] ? o - this.offset.click.top < this.containment[1] ? o + i.grid[1] : o - i.grid[1] : o : o, a = this.originalPageX + Math.round((a - this.originalPageX) / i.grid[0]) * i.grid[0], a = this.containment ? a - this.offset.click.left < this.containment[0] || a - this.offset.click.left > this.containment[2] ? a - this.offset.click.left < this.containment[0] ? a + i.grid[0] : a - i.grid[0] : a : a)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (t.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()),
                left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (t.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft())
            }
        },
        _rearrange: function (t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this,
                a = this.counter;
            window.setTimeout(function () {
                a == n.counter && n.refreshPositions(!s)
            }, 0)
        },
        _clear: function (e, i) {
            this.reverting = !1;
            var s = [];
            if (!this._noFinalSort && this.currentItem[0].parentNode && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (var n in this._storedCSS)("auto" == this._storedCSS[n] || "static" == this._storedCSS[n]) && (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show(); if (this.fromOutside && !i && s.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || i || s.push(function (t) {
                this._trigger("update", t, this._uiHash())
            }), !t.ui.contains(this.element[0], this.currentItem[0]))
                for (i || s.push(function (t) {
                    this._trigger("remove", t, this._uiHash())
                }), n = this.containers.length - 1; n >= 0; n--) t.ui.contains(this.containers[n].element[0], this.currentItem[0]) && !i && (s.push(function (t) {
                    return function (e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.containers[n])), s.push(function (t) {
                    return function (e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.containers[n])));
            for (n = this.containers.length - 1; n >= 0; n--) i || s.push(function (t) {
                return function (e) {
                    t._trigger("deactivate", e, this._uiHash(this))
                }
            }.call(this, this.containers[n])), this.containers[n].containerCache.over && (s.push(function (t) {
                return function (e) {
                    t._trigger("out", e, this._uiHash(this))
                }
            }.call(this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this._storedCursor && t("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!i) {
                    for (this._trigger("beforeStop", e, this._uiHash()), n = 0; n < s.length; n++) s[n].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return !1
            }
            if (i || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
                for (n = 0; n < s.length; n++) s[n].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    }), t.extend(t.ui.sortable, {
        version: "1.8.10"
    })
}(jQuery), jQuery.effects || function (t, e) {
    function i(e) {
        var i;
        return e && e.constructor == Array && 3 == e.length ? e : (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e)) ? [parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10)] : (i = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(e)) ? [2.55 * parseFloat(i[1]), 2.55 * parseFloat(i[2]), 2.55 * parseFloat(i[3])] : (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e)) ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16)] : (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(e)) ? [parseInt(i[1] + i[1], 16), parseInt(i[2] + i[2], 16), parseInt(i[3] + i[3], 16)] : /rgba\(0, 0, 0, 0\)/.exec(e) ? h.transparent : h[t.trim(e).toLowerCase()]
    }

    function s(e, s) {
        var n;
        do {
            if (n = t.curCSS(e, s), "" != n && "transparent" != n || t.nodeName(e, "body")) break;
            s = "backgroundColor"
        } while (e = e.parentNode);
        return i(n)
    }

    function n() {
        var t = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
            e = {}, i, s;
        if (t && t.length && t[0] && t[t[0]])
            for (var n = t.length; n--;) i = t[n], "string" == typeof t[i] && (s = i.replace(/\-(\w)/g, function (t, e) {
                return e.toUpperCase()
            }), e[s] = t[i]);
        else
            for (i in t) "string" == typeof t[i] && (e[i] = t[i]);
        return e
    }

    function a(e) {
        var i, s;
        for (i in e) s = e[i], (null == s || t.isFunction(s) || i in u || /scrollbar/.test(i) || !/color/i.test(i) && isNaN(parseFloat(s))) && delete e[i];
        return e
    }

    function o(t, e) {
        var i = {
            _: 0
        }, s;
        for (s in e) t[s] != e[s] && (i[s] = e[s]);
        return i
    }

    function r(e, i, s, n) {
        return "object" == typeof e && (n = i, s = null, i = e, e = i.effect), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i = i || {}, s = s || i.duration, s = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, n = n || i.complete, [e, i, s, n]
    }

    function l(e) {
        return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects[e] ? !1 : !0
    }
    t.effects = {}, t.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function (e, n) {
        t.fx.step[n] = function (t) {
            t.colorInit || (t.start = s(t.elem, n), t.end = i(t.end), t.colorInit = !0), t.elem.style[n] = "rgb(" + Math.max(Math.min(parseInt(t.pos * (t.end[0] - t.start[0]) + t.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(t.pos * (t.end[1] - t.start[1]) + t.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(t.pos * (t.end[2] - t.start[2]) + t.start[2], 10), 255), 0) + ")"
        }
    });
    var h = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    }, c = ["add", "remove", "toggle"],
        u = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
    t.effects.animateClass = function (e, i, s, r) {
        return t.isFunction(s) && (r = s, s = null), this.queue("fx", function () {
            var l = t(this),
                h = l.attr("style") || " ",
                u = a(n.call(this)),
                d, p = l.attr("className");
            t.each(c, function (t, i) {
                e[i] && l[i + "Class"](e[i])
            }), d = a(n.call(this)), l.attr("className", p), l.animate(o(u, d), i, s, function () {
                t.each(c, function (t, i) {
                    e[i] && l[i + "Class"](e[i])
                }), "object" == typeof l.attr("style") ? (l.attr("style").cssText = "", l.attr("style").cssText = h) : l.attr("style", h), r && r.apply(this, arguments)
            }), u = t.queue(this), d = u.splice(u.length - 1, 1)[0], u.splice(1, 0, d), t.dequeue(this)
        })
    }, t.fn.extend({
        _addClass: t.fn.addClass,
        addClass: function (e, i, s, n) {
            return i ? t.effects.animateClass.apply(this, [{
                    add: e
                },
                i, s, n
            ]) : this._addClass(e)
        },
        _removeClass: t.fn.removeClass,
        removeClass: function (e, i, s, n) {
            return i ? t.effects.animateClass.apply(this, [{
                    remove: e
                },
                i, s, n
            ]) : this._removeClass(e)
        },
        _toggleClass: t.fn.toggleClass,
        toggleClass: function (i, s, n, a, o) {
            return "boolean" == typeof s || s === e ? n ? t.effects.animateClass.apply(this, [s ? {
                    add: i
                } : {
                    remove: i
                },
                n, a, o
            ]) : this._toggleClass(i, s) : t.effects.animateClass.apply(this, [{
                    toggle: i
                },
                s, n, a
            ])
        },
        switchClass: function (e, i, s, n, a) {
            return t.effects.animateClass.apply(this, [{
                    add: i,
                    remove: e
                },
                s, n, a
            ])
        }
    }), t.extend(t.effects, {
        version: "1.8.10",
        save: function (t, e) {
            for (var i = 0; i < e.length; i++) null !== e[i] && t.data("ec.storage." + e[i], t[0].style[e[i]])
        },
        restore: function (t, e) {
            for (var i = 0; i < e.length; i++) null !== e[i] && t.css(e[i], t.data("ec.storage." + e[i]))
        },
        setMode: function (t, e) {
            return "toggle" == e && (e = t.is(":hidden") ? "show" : "hide"), e
        },
        getBaseline: function (t, e) {
            var i;
            switch (t[0]) {
            case "top":
                i = 0;
                break;
            case "middle":
                i = .5;
                break;
            case "bottom":
                i = 1;
                break;
            default:
                i = t[0] / e.height
            }
            switch (t[1]) {
            case "left":
                t = 0;
                break;
            case "center":
                t = .5;
                break;
            case "right":
                t = 1;
                break;
            default:
                t = t[1] / e.width
            }
            return {
                x: t,
                y: i
            }
        },
        createWrapper: function (e) {
            if (e.parent().is(".ui-effects-wrapper")) return e.parent();
            var i = {
                width: e.outerWidth(!0),
                height: e.outerHeight(!0),
                "float": e.css("float")
            }, s = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                });
            return e.wrap(s), s = e.parent(), "static" == e.css("position") ? (s.css({
                position: "relative"
            }), e.css({
                position: "relative"
            })) : (t.extend(i, {
                position: e.css("position"),
                zIndex: e.css("z-index")
            }), t.each(["top", "left", "bottom", "right"], function (t, s) {
                i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
            }), e.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })), s.css(i).show()
        },
        removeWrapper: function (t) {
            return t.parent().is(".ui-effects-wrapper") ? t.parent().replaceWith(t) : t
        },
        setTransition: function (e, i, s, n) {
            return n = n || {}, t.each(i, function (t, i) {
                unit = e.cssUnit(i), unit[0] > 0 && (n[i] = unit[0] * s + unit[1])
            }), n
        }
    }), t.fn.extend({
        effect: function (e) {
            var i = r.apply(this, arguments),
                s = {
                    options: i[1],
                    duration: i[2],
                    callback: i[3]
                };
            i = s.options.mode;
            var n = t.effects[e];
            return t.fx.off || !n ? i ? this[i](s.duration, s.callback) : this.each(function () {
                s.callback && s.callback.call(this)
            }) : n.call(this, s)
        },
        _show: t.fn.show,
        show: function (t) {
            if (l(t)) return this._show.apply(this, arguments);
            var e = r.apply(this, arguments);
            return e[1].mode = "show", this.effect.apply(this, e)
        },
        _hide: t.fn.hide,
        hide: function (t) {
            if (l(t)) return this._hide.apply(this, arguments);
            var e = r.apply(this, arguments);
            return e[1].mode = "hide", this.effect.apply(this, e)
        },
        __toggle: t.fn.toggle,
        toggle: function (e) {
            if (l(e) || "boolean" == typeof e || t.isFunction(e)) return this.__toggle.apply(this, arguments);
            var i = r.apply(this, arguments);
            return i[1].mode = "toggle", this.effect.apply(this, i)
        },
        cssUnit: function (e) {
            var i = this.css(e),
                s = [];
            return t.each(["em", "px", "%", "pt"], function (t, e) {
                i.indexOf(e) > 0 && (s = [parseFloat(i), e])
            }), s
        }
    }), t.easing.jswing = t.easing.swing, t.extend(t.easing, {
        def: "easeOutQuad",
        swing: function (e, i, s, n, a) {
            return t.easing[t.easing.def](e, i, s, n, a)
        },
        easeInQuad: function (t, e, i, s, n) {
            return s * (e /= n) * e + i
        },
        easeOutQuad: function (t, e, i, s, n) {
            return -s * (e /= n) * (e - 2) + i
        },
        easeInOutQuad: function (t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e + i : -s / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function (t, e, i, s, n) {
            return s * (e /= n) * e * e + i
        },
        easeOutCubic: function (t, e, i, s, n) {
            return s * ((e = e / n - 1) * e * e + 1) + i
        },
        easeInOutCubic: function (t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e * e + i : s / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function (t, e, i, s, n) {
            return s * (e /= n) * e * e * e + i
        },
        easeOutQuart: function (t, e, i, s, n) {
            return -s * ((e = e / n - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function (t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e * e * e + i : -s / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function (t, e, i, s, n) {
            return s * (e /= n) * e * e * e * e + i
        },
        easeOutQuint: function (t, e, i, s, n) {
            return s * ((e = e / n - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function (t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e * e * e * e + i : s / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function (t, e, i, s, n) {
            return -s * Math.cos(e / n * (Math.PI / 2)) + s + i
        },
        easeOutSine: function (t, e, i, s, n) {
            return s * Math.sin(e / n * (Math.PI / 2)) + i
        },
        easeInOutSine: function (t, e, i, s, n) {
            return -s / 2 * (Math.cos(Math.PI * e / n) - 1) + i
        },
        easeInExpo: function (t, e, i, s, n) {
            return 0 == e ? i : s * Math.pow(2, 10 * (e / n - 1)) + i
        },
        easeOutExpo: function (t, e, i, s, n) {
            return e == n ? i + s : s * (-Math.pow(2, -10 * e / n) + 1) + i
        },
        easeInOutExpo: function (t, e, i, s, n) {
            return 0 == e ? i : e == n ? i + s : (e /= n / 2) < 1 ? s / 2 * Math.pow(2, 10 * (e - 1)) + i : s / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function (t, e, i, s, n) {
            return -s * (Math.sqrt(1 - (e /= n) * e) - 1) + i
        },
        easeOutCirc: function (t, e, i, s, n) {
            return s * Math.sqrt(1 - (e = e / n - 1) * e) + i
        },
        easeInOutCirc: function (t, e, i, s, n) {
            return (e /= n / 2) < 1 ? -s / 2 * (Math.sqrt(1 - e * e) - 1) + i : s / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function (t, e, i, s, n) {
            t = 1.70158;
            var a = 0,
                o = s;
            return 0 == e ? i : 1 == (e /= n) ? i + s : (a || (a = .3 * n), o < Math.abs(s) ? (o = s, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(s / o), -(o * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - t) * Math.PI / a)) + i)
        },
        easeOutElastic: function (t, e, i, s, n) {
            t = 1.70158;
            var a = 0,
                o = s;
            return 0 == e ? i : 1 == (e /= n) ? i + s : (a || (a = .3 * n), o < Math.abs(s) ? (o = s, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(s / o), o * Math.pow(2, -10 * e) * Math.sin(2 * (e * n - t) * Math.PI / a) + s + i)
        },
        easeInOutElastic: function (t, e, i, s, n) {
            t = 1.70158;
            var a = 0,
                o = s;
            return 0 == e ? i : 2 == (e /= n / 2) ? i + s : (a || (a = 1.5 * .3 * n), o < Math.abs(s) ? (o = s, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(s / o), 1 > e ? -.5 * o * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - t) * Math.PI / a) + i : .5 * o * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * n - t) * Math.PI / a) + s + i)
        },
        easeInBack: function (t, i, s, n, a, o) {
            return o == e && (o = 1.70158), n * (i /= a) * i * ((o + 1) * i - o) + s
        },
        easeOutBack: function (t, i, s, n, a, o) {
            return o == e && (o = 1.70158), n * ((i = i / a - 1) * i * ((o + 1) * i + o) + 1) + s
        },
        easeInOutBack: function (t, i, s, n, a, o) {
            return o == e && (o = 1.70158), (i /= a / 2) < 1 ? n / 2 * i * i * (((o *= 1.525) + 1) * i - o) + s : n / 2 * ((i -= 2) * i * (((o *= 1.525) + 1) * i + o) + 2) + s
        },
        easeInBounce: function (e, i, s, n, a) {
            return n - t.easing.easeOutBounce(e, a - i, 0, n, a) + s
        },
        easeOutBounce: function (t, e, i, s, n) {
            return (e /= n) < 1 / 2.75 ? 7.5625 * s * e * e + i : 2 / 2.75 > e ? s * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? s * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : s * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function (e, i, s, n, a) {
            return a / 2 > i ? .5 * t.easing.easeInBounce(e, 2 * i, 0, n, a) + s : .5 * t.easing.easeOutBounce(e, 2 * i - a, 0, n, a) + .5 * n + s
        }
    })
}(jQuery),
function (t) {
    t.effects.blind = function (e) {
        return this.queue(function () {
            var i = t(this),
                s = ["position", "top", "bottom", "left", "right"],
                n = t.effects.setMode(i, e.options.mode || "hide"),
                a = e.options.direction || "vertical";
            t.effects.save(i, s), i.show();
            var o = t.effects.createWrapper(i).css({
                overflow: "hidden"
            }),
                r = "vertical" == a ? "height" : "width";
            a = "vertical" == a ? o.height() : o.width(), "show" == n && o.css(r, 0);
            var l = {};
            l[r] = "show" == n ? a : 0, o.animate(l, e.duration, e.options.easing, function () {
                "hide" == n && i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(i[0], arguments), i.dequeue()
            })
        })
    }
}(jQuery),
function (t) {
    t.effects.bounce = function (e) {
        return this.queue(function () {
            var i = t(this),
                s = ["position", "top", "bottom", "left", "right"],
                n = t.effects.setMode(i, e.options.mode || "effect"),
                a = e.options.direction || "up",
                o = e.options.distance || 20,
                r = e.options.times || 5,
                l = e.duration || 250;
            /show|hide/.test(n) && s.push("opacity"), t.effects.save(i, s), i.show(), t.effects.createWrapper(i);
            var h = "up" == a || "down" == a ? "top" : "left";
            if (a = "up" == a || "left" == a ? "pos" : "neg", o = e.options.distance || ("top" == h ? i.outerHeight({
                margin: !0
            }) / 3 : i.outerWidth({
                margin: !0
            }) / 3), "show" == n && i.css("opacity", 0).css(h, "pos" == a ? -o : o), "hide" == n && (o /= 2 * r), "hide" != n && r--, "show" == n) {
                var c = {
                    opacity: 1
                };
                c[h] = ("pos" == a ? "+=" : "-=") + o, i.animate(c, l / 2, e.options.easing), o /= 2, r--
            }
            for (c = 0; r > c; c++) {
                var u = {}, d = {};
                u[h] = ("pos" == a ? "-=" : "+=") + o, d[h] = ("pos" == a ? "+=" : "-=") + o, i.animate(u, l / 2, e.options.easing).animate(d, l / 2, e.options.easing), o = "hide" == n ? 2 * o : o / 2
            }
            "hide" == n ? (c = {
                opacity: 0
            }, c[h] = ("pos" == a ? "-=" : "+=") + o, i.animate(c, l / 2, e.options.easing, function () {
                i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments)
            })) : (u = {}, d = {}, u[h] = ("pos" == a ? "-=" : "+=") + o, d[h] = ("pos" == a ? "+=" : "-=") + o, i.animate(u, l / 2, e.options.easing).animate(d, l / 2, e.options.easing, function () {
                t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments)
            })), i.queue("fx", function () {
                i.dequeue()
            }), i.dequeue()
        })
    }
}(jQuery),
function (t) {
    t.effects.clip = function (e) {
        return this.queue(function () {
            var i = t(this),
                s = ["position", "top", "bottom", "left", "right", "height", "width"],
                n = t.effects.setMode(i, e.options.mode || "hide"),
                a = e.options.direction || "vertical";
            t.effects.save(i, s), i.show();
            var o = t.effects.createWrapper(i).css({
                overflow: "hidden"
            });
            o = "IMG" == i[0].tagName ? o : i;
            var r = {
                size: "vertical" == a ? "height" : "width",
                position: "vertical" == a ? "top" : "left"
            };
            a = "vertical" == a ? o.height() : o.width(), "show" == n && (o.css(r.size, 0), o.css(r.position, a / 2));
            var l = {};
            l[r.size] = "show" == n ? a : 0, l[r.position] = "show" == n ? 0 : a / 2, o.animate(l, {
                queue: !1,
                duration: e.duration,
                easing: e.options.easing,
                complete: function () {
                    "hide" == n && i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(i[0], arguments), i.dequeue()
                }
            })
        })
    }
}(jQuery),
function (t) {
    t.effects.drop = function (e) {
        return this.queue(function () {
            var i = t(this),
                s = ["position", "top", "bottom", "left", "right", "opacity"],
                n = t.effects.setMode(i, e.options.mode || "hide"),
                a = e.options.direction || "left";
            t.effects.save(i, s), i.show(), t.effects.createWrapper(i);
            var o = "up" == a || "down" == a ? "top" : "left";
            a = "up" == a || "left" == a ? "pos" : "neg";
            var r = e.options.distance || ("top" == o ? i.outerHeight({
                margin: !0
            }) / 2 : i.outerWidth({
                margin: !0
            }) / 2);
            "show" == n && i.css("opacity", 0).css(o, "pos" == a ? -r : r);
            var l = {
                opacity: "show" == n ? 1 : 0
            };
            l[o] = ("show" == n ? "pos" == a ? "+=" : "-=" : "pos" == a ? "-=" : "+=") + r, i.animate(l, {
                queue: !1,
                duration: e.duration,
                easing: e.options.easing,
                complete: function () {
                    "hide" == n && i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments), i.dequeue()
                }
            })
        })
    }
}(jQuery),
function (t) {
    t.effects.explode = function (e) {
        return this.queue(function () {
            var i = e.options.pieces ? Math.round(Math.sqrt(e.options.pieces)) : 3,
                s = e.options.pieces ? Math.round(Math.sqrt(e.options.pieces)) : 3;
            e.options.mode = "toggle" == e.options.mode ? t(this).is(":visible") ? "hide" : "show" : e.options.mode;
            var n = t(this).show().css("visibility", "hidden"),
                a = n.offset();
            a.top -= parseInt(n.css("marginTop"), 10) || 0, a.left -= parseInt(n.css("marginLeft"), 10) || 0;
            for (var o = n.outerWidth(!0), r = n.outerHeight(!0), l = 0; i > l; l++)
                for (var h = 0; s > h; h++) n.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -h * (o / s),
                    top: -l * (r / i)
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: o / s,
                    height: r / i,
                    left: a.left + h * (o / s) + ("show" == e.options.mode ? (h - Math.floor(s / 2)) * (o / s) : 0),
                    top: a.top + l * (r / i) + ("show" == e.options.mode ? (l - Math.floor(i / 2)) * (r / i) : 0),
                    opacity: "show" == e.options.mode ? 0 : 1
                }).animate({
                    left: a.left + h * (o / s) + ("show" == e.options.mode ? 0 : (h - Math.floor(s / 2)) * (o / s)),
                    top: a.top + l * (r / i) + ("show" == e.options.mode ? 0 : (l - Math.floor(i / 2)) * (r / i)),
                    opacity: "show" == e.options.mode ? 1 : 0
                }, e.duration || 500);
            setTimeout(function () {
                "show" == e.options.mode ? n.css({
                    visibility: "visible"
                }) : n.css({
                    visibility: "visible"
                }).hide(), e.callback && e.callback.apply(n[0]), n.dequeue(), t("div.ui-effects-explode").remove()
            }, e.duration || 500)
        })
    }
}(jQuery),
function (t) {
    t.effects.fade = function (e) {
        return this.queue(function () {
            var i = t(this),
                s = t.effects.setMode(i, e.options.mode || "hide");
            i.animate({
                opacity: s
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.options.easing,
                complete: function () {
                    e.callback && e.callback.apply(this, arguments), i.dequeue()
                }
            })
        })
    }
}(jQuery),
function (t) {
    t.effects.fold = function (e) {
        return this.queue(function () {
            var i = t(this),
                s = ["position", "top", "bottom", "left", "right"],
                n = t.effects.setMode(i, e.options.mode || "hide"),
                a = e.options.size || 15,
                o = !! e.options.horizFirst,
                r = e.duration ? e.duration / 2 : t.fx.speeds._default / 2;
            t.effects.save(i, s), i.show();
            var l = t.effects.createWrapper(i).css({
                overflow: "hidden"
            }),
                h = "show" == n != o,
                c = h ? ["width", "height"] : ["height", "width"];
            h = h ? [l.width(), l.height()] : [l.height(), l.width()];
            var u = /([0-9]+)%/.exec(a);
            u && (a = parseInt(u[1], 10) / 100 * h["hide" == n ? 0 : 1]), "show" == n && l.css(o ? {
                height: 0,
                width: a
            } : {
                height: a,
                width: 0
            }), o = {}, u = {}, o[c[0]] = "show" == n ? h[0] : a, u[c[1]] = "show" == n ? h[1] : 0, l.animate(o, r, e.options.easing).animate(u, r, e.options.easing, function () {
                "hide" == n && i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(i[0], arguments), i.dequeue()
            })
        })
    }
}(jQuery),
function (t) {
    t.effects.highlight = function (e) {
        return this.queue(function () {
            var i = t(this),
                s = ["backgroundImage", "backgroundColor", "opacity"],
                n = t.effects.setMode(i, e.options.mode || "show"),
                a = {
                    backgroundColor: i.css("backgroundColor")
                };
            "hide" == n && (a.opacity = 0), t.effects.save(i, s), i.show().css({
                backgroundImage: "none",
                backgroundColor: e.options.color || "#ffff99"
            }).animate(a, {
                queue: !1,
                duration: e.duration,
                easing: e.options.easing,
                complete: function () {
                    "hide" == n && i.hide(), t.effects.restore(i, s), "show" == n && !t.support.opacity && this.style.removeAttribute("filter"), e.callback && e.callback.apply(this, arguments), i.dequeue()
                }
            })
        })
    }
}(jQuery),
function (t) {
    t.effects.pulsate = function (e) {
        return this.queue(function () {
            var i = t(this),
                s = t.effects.setMode(i, e.options.mode || "show");
            for (times = 2 * (e.options.times || 5) - 1, duration = e.duration ? e.duration / 2 : t.fx.speeds._default / 2, isVisible = i.is(":visible"), animateTo = 0, isVisible || (i.css("opacity", 0).show(), animateTo = 1), ("hide" == s && isVisible || "show" == s && !isVisible) && times--, s = 0; times > s; s++) i.animate({
                opacity: animateTo
            }, duration, e.options.easing), animateTo = (animateTo + 1) % 2;
            i.animate({
                opacity: animateTo
            }, duration, e.options.easing, function () {
                0 == animateTo && i.hide(), e.callback && e.callback.apply(this, arguments)
            }), i.queue("fx", function () {
                i.dequeue()
            }).dequeue()
        })
    }
}(jQuery),
function (t) {
    t.effects.puff = function (e) {
        return this.queue(function () {
            var i = t(this),
                s = t.effects.setMode(i, e.options.mode || "hide"),
                n = parseInt(e.options.percent, 10) || 150,
                a = n / 100,
                o = {
                    height: i.height(),
                    width: i.width()
                };
            t.extend(e.options, {
                fade: !0,
                mode: s,
                percent: "hide" == s ? n : 100,
                from: "hide" == s ? o : {
                    height: o.height * a,
                    width: o.width * a
                }
            }), i.effect("scale", e.options, e.duration, e.callback), i.dequeue()
        })
    }, t.effects.scale = function (e) {
        return this.queue(function () {
            var i = t(this),
                s = t.extend(!0, {}, e.options),
                n = t.effects.setMode(i, e.options.mode || "effect"),
                a = parseInt(e.options.percent, 10) || (0 == parseInt(e.options.percent, 10) ? 0 : "hide" == n ? 0 : 100),
                o = e.options.direction || "both",
                r = e.options.origin;
            "effect" != n && (s.origin = r || ["middle", "center"], s.restore = !0), r = {
                height: i.height(),
                width: i.width()
            }, i.from = e.options.from || ("show" == n ? {
                height: 0,
                width: 0
            } : r), a = {
                y: "horizontal" != o ? a / 100 : 1,
                x: "vertical" != o ? a / 100 : 1
            }, i.to = {
                height: r.height * a.y,
                width: r.width * a.x
            }, e.options.fade && ("show" == n && (i.from.opacity = 0, i.to.opacity = 1), "hide" == n && (i.from.opacity = 1, i.to.opacity = 0)), s.from = i.from, s.to = i.to, s.mode = n, i.effect("size", s, e.duration, e.callback), i.dequeue()
        })
    }, t.effects.size = function (e) {
        return this.queue(function () {
            var i = t(this),
                s = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                n = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                a = ["width", "height", "overflow"],
                o = ["fontSize"],
                r = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                h = t.effects.setMode(i, e.options.mode || "effect"),
                c = e.options.restore || !1,
                u = e.options.scale || "both",
                d = e.options.origin,
                p = {
                    height: i.height(),
                    width: i.width()
                };
            i.from = e.options.from || p, i.to = e.options.to || p, d && (d = t.effects.getBaseline(d, p), i.from.top = (p.height - i.from.height) * d.y, i.from.left = (p.width - i.from.width) * d.x, i.to.top = (p.height - i.to.height) * d.y, i.to.left = (p.width - i.to.width) * d.x);
            var f = {
                from: {
                    y: i.from.height / p.height,
                    x: i.from.width / p.width
                },
                to: {
                    y: i.to.height / p.height,
                    x: i.to.width / p.width
                }
            };
            ("box" == u || "both" == u) && (f.from.y != f.to.y && (s = s.concat(r), i.from = t.effects.setTransition(i, r, f.from.y, i.from), i.to = t.effects.setTransition(i, r, f.to.y, i.to)), f.from.x != f.to.x && (s = s.concat(l), i.from = t.effects.setTransition(i, l, f.from.x, i.from), i.to = t.effects.setTransition(i, l, f.to.x, i.to))), ("content" == u || "both" == u) && f.from.y != f.to.y && (s = s.concat(o), i.from = t.effects.setTransition(i, o, f.from.y, i.from), i.to = t.effects.setTransition(i, o, f.to.y, i.to)), t.effects.save(i, c ? s : n), i.show(), t.effects.createWrapper(i), i.css("overflow", "hidden").css(i.from), ("content" == u || "both" == u) && (r = r.concat(["marginTop", "marginBottom"]).concat(o), l = l.concat(["marginLeft", "marginRight"]), a = s.concat(r).concat(l), i.find("*[width]").each(function () {
                child = t(this), c && t.effects.save(child, a);
                var i = {
                    height: child.height(),
                    width: child.width()
                };
                child.from = {
                    height: i.height * f.from.y,
                    width: i.width * f.from.x
                }, child.to = {
                    height: i.height * f.to.y,
                    width: i.width * f.to.x
                }, f.from.y != f.to.y && (child.from = t.effects.setTransition(child, r, f.from.y, child.from), child.to = t.effects.setTransition(child, r, f.to.y, child.to)), f.from.x != f.to.x && (child.from = t.effects.setTransition(child, l, f.from.x, child.from), child.to = t.effects.setTransition(child, l, f.to.x, child.to)), child.css(child.from), child.animate(child.to, e.duration, e.options.easing, function () {
                    c && t.effects.restore(child, a)
                })
            })), i.animate(i.to, {
                queue: !1,
                duration: e.duration,
                easing: e.options.easing,
                complete: function () {
                    0 === i.to.opacity && i.css("opacity", i.from.opacity), "hide" == h && i.hide(), t.effects.restore(i, c ? s : n), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments), i.dequeue()
                }
            })
        })
    }
}(jQuery),
function (t) {
    t.effects.shake = function (e) {
        return this.queue(function () {
            var i = t(this),
                s = ["position", "top", "bottom", "left", "right"];
            t.effects.setMode(i, e.options.mode || "effect");
            var n = e.options.direction || "left",
                a = e.options.distance || 20,
                o = e.options.times || 3,
                r = e.duration || e.options.duration || 140;
            t.effects.save(i, s), i.show(), t.effects.createWrapper(i);
            var l = "up" == n || "down" == n ? "top" : "left",
                h = "up" == n || "left" == n ? "pos" : "neg";
            n = {};
            var c = {}, u = {};
            for (n[l] = ("pos" == h ? "-=" : "+=") + a, c[l] = ("pos" == h ? "+=" : "-=") + 2 * a, u[l] = ("pos" == h ? "-=" : "+=") + 2 * a, i.animate(n, r, e.options.easing), a = 1; o > a; a++) i.animate(c, r, e.options.easing).animate(u, r, e.options.easing);
            i.animate(c, r, e.options.easing).animate(n, r / 2, e.options.easing, function () {
                t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments)
            }), i.queue("fx", function () {
                i.dequeue()
            }), i.dequeue()
        })
    }
}(jQuery),
function (t) {
    t.effects.slide = function (e) {
        return this.queue(function () {
            var i = t(this),
                s = ["position", "top", "bottom", "left", "right"],
                n = t.effects.setMode(i, e.options.mode || "show"),
                a = e.options.direction || "left";
            t.effects.save(i, s), i.show(), t.effects.createWrapper(i).css({
                overflow: "hidden"
            });
            var o = "up" == a || "down" == a ? "top" : "left";
            a = "up" == a || "left" == a ? "pos" : "neg";
            var r = e.options.distance || ("top" == o ? i.outerHeight({
                margin: !0
            }) : i.outerWidth({
                margin: !0
            }));
            "show" == n && i.css(o, "pos" == a ? isNaN(r) ? "-" + r : -r : r);
            var l = {};
            l[o] = ("show" == n ? "pos" == a ? "+=" : "-=" : "pos" == a ? "-=" : "+=") + r, i.animate(l, {
                queue: !1,
                duration: e.duration,
                easing: e.options.easing,
                complete: function () {
                    "hide" == n && i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments), i.dequeue()
                }
            })
        })
    }
}(jQuery),
function (t) {
    t.effects.transfer = function (e) {
        return this.queue(function () {
            var i = t(this),
                s = t(e.options.to),
                n = s.offset();
            s = {
                top: n.top,
                left: n.left,
                height: s.innerHeight(),
                width: s.innerWidth()
            }, n = i.offset();
            var a = t('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(e.options.className).css({
                top: n.top,
                left: n.left,
                height: i.innerHeight(),
                width: i.innerWidth(),
                position: "absolute"
            }).animate(s, e.duration, e.options.easing, function () {
                a.remove(), e.callback && e.callback.apply(i[0], arguments), i.dequeue()
            })
        })
    }
}(jQuery),
function (t) {
    t.widget("ui.accordion", {
        options: {
            active: 0,
            animated: "slide",
            autoHeight: !0,
            clearStyle: !1,
            collapsible: !1,
            event: "click",
            fillSpace: !1,
            header: "> li > :first-child,> :not(li):even",
            icons: {
                header: "ui-icon-triangle-1-e",
                headerSelected: "ui-icon-triangle-1-s"
            },
            navigation: !1,
            navigationFilter: function () {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        },
        _create: function () {
            var e = this,
                i = e.options;
            if (e.running = 0, e.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), e.headers = e.element.find(i.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function () {
                i.disabled || t(this).addClass("ui-state-hover")
            }).bind("mouseleave.accordion", function () {
                i.disabled || t(this).removeClass("ui-state-hover")
            }).bind("focus.accordion", function () {
                i.disabled || t(this).addClass("ui-state-focus")
            }).bind("blur.accordion", function () {
                i.disabled || t(this).removeClass("ui-state-focus")
            }), e.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"), i.navigation) {
                var s = e.element.find("a").filter(i.navigationFilter).eq(0);
                if (s.length) {
                    var n = s.closest(".ui-accordion-header");
                    e.active = n.length ? n : s.closest(".ui-accordion-content").prev()
                }
            }
            e.active = e._findActive(e.active || i.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), e.active.next().addClass("ui-accordion-content-active"), e._createIcons(), e.resize(), e.element.attr("role", "tablist"), e.headers.attr("role", "tab").bind("keydown.accordion", function (t) {
                return e._keydown(t)
            }).next().attr("role", "tabpanel"), e.headers.not(e.active || "").attr({
                "aria-expanded": "false",
                tabIndex: -1
            }).next().hide(), e.active.length ? e.active.attr({
                "aria-expanded": "true",
                tabIndex: 0
            }) : e.headers.eq(0).attr("tabIndex", 0), t.browser.safari || e.headers.find("a").attr("tabIndex", -1), i.event && e.headers.bind(i.event.split(" ").join(".accordion ") + ".accordion", function (t) {
                e._clickHandler.call(e, t, this), t.preventDefault()
            })
        },
        _createIcons: function () {
            var e = this.options;
            e.icons && (t("<span></span>").addClass("ui-icon " + e.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(e.icons.header).toggleClass(e.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons")
        },
        destroy: function () {
            var e = this.options;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
            var i = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
            return (e.autoHeight || e.fillHeight) && i.css("height", ""), t.Widget.prototype.destroy.call(this)
        },
        _setOption: function (e, i) {
            t.Widget.prototype._setOption.apply(this, arguments), "active" == e && this.activate(i), "icons" == e && (this._destroyIcons(), i && this._createIcons()), "disabled" == e && this.headers.add(this.headers.next())[i ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
        },
        _keydown: function (e) {
            if (!(this.options.disabled || e.altKey || e.ctrlKey)) {
                var i = t.ui.keyCode,
                    s = this.headers.length,
                    n = this.headers.index(e.target),
                    a = !1;
                switch (e.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    a = this.headers[(n + 1) % s];
                    break;
                case i.LEFT:
                case i.UP:
                    a = this.headers[(n - 1 + s) % s];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._clickHandler({
                        target: e.target
                    }, e.target), e.preventDefault()
                }
                return a ? (t(e.target).attr("tabIndex", -1), t(a).attr("tabIndex", 0), a.focus(), !1) : !0
            }
        },
        resize: function () {
            var e = this.options,
                i;
            if (e.fillSpace) {
                if (t.browser.msie) {
                    var s = this.element.parent().css("overflow");
                    this.element.parent().css("overflow", "hidden")
                }
                i = this.element.parent().height(), t.browser.msie && this.element.parent().css("overflow", s), this.headers.each(function () {
                    i -= t(this).outerHeight(!0)
                }), this.headers.next().each(function () {
                    t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")
            } else e.autoHeight && (i = 0, this.headers.next().each(function () {
                i = Math.max(i, t(this).height("").height())
            }).height(i));
            return this
        },
        activate: function (t) {
            return this.options.active = t, t = this._findActive(t)[0], this._clickHandler({
                target: t
            }, t), this
        },
        _findActive: function (e) {
            return e ? "number" == typeof e ? this.headers.filter(":eq(" + e + ")") : this.headers.not(this.headers.not(e)) : e === !1 ? t([]) : this.headers.filter(":eq(0)")
        },
        _clickHandler: function (e, i) {
            var s = this.options;
            if (!s.disabled)
                if (e.target) {
                    if (e = t(e.currentTarget || i), i = e[0] === this.active[0], s.active = s.collapsible && i ? !1 : this.headers.index(e), !(this.running || !s.collapsible && i)) {
                        var n = this.active;
                        l = e.next(), o = this.active.next(), r = {
                            options: s,
                            newHeader: i && s.collapsible ? t([]) : e,
                            oldHeader: this.active,
                            newContent: i && s.collapsible ? t([]) : l,
                            oldContent: o
                        };
                        var a = this.headers.index(this.active[0]) > this.headers.index(e[0]);
                        this.active = i ? t([]) : e, this._toggle(l, o, r, i, a), n.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(s.icons.headerSelected).addClass(s.icons.header), i || (e.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(s.icons.header).addClass(s.icons.headerSelected), e.next().addClass("ui-accordion-content-active"))
                    }
                } else if (s.collapsible) {
                this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(s.icons.headerSelected).addClass(s.icons.header), this.active.next().addClass("ui-accordion-content-active");
                var o = this.active.next(),
                    r = {
                        options: s,
                        newHeader: t([]),
                        oldHeader: s.active,
                        newContent: t([]),
                        oldContent: o
                    }, l = this.active = t([]);
                this._toggle(l, o, r)
            }
        },
        _toggle: function (e, i, s, n, a) {
            var o = this,
                r = o.options;
            o.toShow = e, o.toHide = i, o.data = s;
            var l = function () {
                return o ? o._completed.apply(o, arguments) : void 0
            };
            if (o._trigger("changestart", null, o.data), o.running = 0 === i.size() ? e.size() : i.size(), r.animated) {
                s = {}, s = r.collapsible && n ? {
                    toShow: t([]),
                    toHide: i,
                    complete: l,
                    down: a,
                    autoHeight: r.autoHeight || r.fillSpace
                } : {
                    toShow: e,
                    toHide: i,
                    complete: l,
                    down: a,
                    autoHeight: r.autoHeight || r.fillSpace
                }, r.proxied || (r.proxied = r.animated), r.proxiedDuration || (r.proxiedDuration = r.duration), r.animated = t.isFunction(r.proxied) ? r.proxied(s) : r.proxied, r.duration = t.isFunction(r.proxiedDuration) ? r.proxiedDuration(s) : r.proxiedDuration, n = t.ui.accordion.animations;
                var h = r.duration,
                    c = r.animated;
                !c || n[c] || t.easing[c] || (c = "slide"), n[c] || (n[c] = function (t) {
                    this.slide(t, {
                        easing: c,
                        duration: h || 700
                    })
                }), n[c](s)
            } else r.collapsible && n ? e.toggle() : (i.hide(), e.show()), l(!0);
            i.prev().attr({
                "aria-expanded": "false",
                tabIndex: -1
            }).blur(), e.prev().attr({
                "aria-expanded": "true",
                tabIndex: 0
            }).focus()
        },
        _completed: function (t) {
            this.running = t ? 0 : --this.running, this.running || (this.options.clearStyle && this.toShow.add(this.toHide).css({
                height: "",
                overflow: ""
            }), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data))
        }
    }), t.extend(t.ui.accordion, {
        version: "1.8.10",
        animations: {
            slide: function (e, i) {
                if (e = t.extend({
                    easing: "swing",
                    duration: 300
                }, e, i), e.toHide.size())
                    if (e.toShow.size()) {
                        var s = e.toShow.css("overflow"),
                            n = 0,
                            a = {}, o = {}, r;
                        i = e.toShow, r = i[0].style.width, i.width(parseInt(i.parent().width(), 10) - parseInt(i.css("paddingLeft"), 10) - parseInt(i.css("paddingRight"), 10) - (parseInt(i.css("borderLeftWidth"), 10) || 0) - (parseInt(i.css("borderRightWidth"), 10) || 0)), t.each(["height", "paddingTop", "paddingBottom"], function (i, s) {
                            o[s] = "hide", i = ("" + t.css(e.toShow[0], s)).match(/^([\d+-.]+)(.*)$/), a[s] = {
                                value: i[1],
                                unit: i[2] || "px"
                            }
                        }), e.toShow.css({
                            height: 0,
                            overflow: "hidden"
                        }).show(), e.toHide.filter(":hidden").each(e.complete).end().filter(":visible").animate(o, {
                            step: function (t, i) {
                                "height" == i.prop && (n = 0 === i.end - i.start ? 0 : (i.now - i.start) / (i.end - i.start)), e.toShow[0].style[i.prop] = n * a[i.prop].value + a[i.prop].unit
                            },
                            duration: e.duration,
                            easing: e.easing,
                            complete: function () {
                                e.autoHeight || e.toShow.css("height", ""), e.toShow.css({
                                    width: r,
                                    overflow: s
                                }), e.complete()
                            }
                        })
                    } else e.toHide.animate({
                        height: "hide",
                        paddingTop: "hide",
                        paddingBottom: "hide"
                    }, e);
                    else e.toShow.animate({
                        height: "show",
                        paddingTop: "show",
                        paddingBottom: "show"
                    }, e)
            },
            bounceslide: function (t) {
                this.slide(t, {
                    easing: t.down ? "easeOutBounce" : "swing",
                    duration: t.down ? 1e3 : 200
                })
            }
        }
    })
}(jQuery),
function (t) {
    var e = 0;
    t.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function () {
            var e = this,
                i = this.element[0].ownerDocument,
                s;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function (i) {
                if (!e.options.disabled && !e.element.attr("readonly")) {
                    s = !1;
                    var n = t.ui.keyCode;
                    switch (i.keyCode) {
                    case n.PAGE_UP:
                        e._move("previousPage", i);
                        break;
                    case n.PAGE_DOWN:
                        e._move("nextPage", i);
                        break;
                    case n.UP:
                        e._move("previous", i), i.preventDefault();
                        break;
                    case n.DOWN:
                        e._move("next", i), i.preventDefault();
                        break;
                    case n.ENTER:
                    case n.NUMPAD_ENTER:
                        e.menu.active && (s = !0, i.preventDefault());
                    case n.TAB:
                        if (!e.menu.active) return;
                        e.menu.select(i);
                        break;
                    case n.ESCAPE:
                        e.element.val(e.term), e.close(i);
                        break;
                    default:
                        clearTimeout(e.searching), e.searching = setTimeout(function () {
                            e.term != e.element.val() && (e.selectedItem = null, e.search(null, i))
                        }, e.options.delay)
                    }
                }
            }).bind("keypress.autocomplete", function (t) {
                s && (s = !1, t.preventDefault())
            }).bind("focus.autocomplete", function () {
                e.options.disabled || (e.selectedItem = null, e.previous = e.element.val())
            }).bind("blur.autocomplete", function (t) {
                e.options.disabled || (clearTimeout(e.searching), e.closing = setTimeout(function () {
                    e.close(t), e._change(t)
                }, 150))
            }), this._initSource(), this.response = function () {
                return e._response.apply(e, arguments)
            }, this.menu = t("<ul></ul>").addClass("ui-autocomplete").appendTo(t(this.options.appendTo || "body", i)[0]).mousedown(function (i) {
                var s = e.menu.element[0];
                t(i.target).closest(".ui-menu-item").length || setTimeout(function () {
                    t(document).one("mousedown", function (i) {
                        i.target !== e.element[0] && i.target !== s && !t.ui.contains(s, i.target) && e.close()
                    })
                }, 1), setTimeout(function () {
                    clearTimeout(e.closing)
                }, 13)
            }).menu({
                focus: function (t, i) {
                    i = i.item.data("item.autocomplete"), !1 !== e._trigger("focus", t, {
                        item: i
                    }) && /^key/.test(t.originalEvent.type) && e.element.val(i.value)
                },
                selected: function (t, s) {
                    var n = s.item.data("item.autocomplete"),
                        a = e.previous;
                    e.element[0] !== i.activeElement && (e.element.focus(), e.previous = a, setTimeout(function () {
                        e.previous = a, e.selectedItem = n
                    }, 1)), !1 !== e._trigger("select", t, {
                        item: n
                    }) && e.element.val(n.value), e.term = e.element.val(), e.close(t), e.selectedItem = n
                },
                blur: function () {
                    e.menu.element.is(":visible") && e.element.val() !== e.term && e.element.val(e.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu"), t.fn.bgiframe && this.menu.element.bgiframe()
        },
        destroy: function () {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), t.Widget.prototype.destroy.call(this)
        },
        _setOption: function (e, i) {
            t.Widget.prototype._setOption.apply(this, arguments), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(t(i || "body", this.element[0].ownerDocument)[0]), "disabled" === e && i && this.xhr && this.xhr.abort()
        },
        _initSource: function () {
            var i = this,
                s, n;
            t.isArray(this.options.source) ? (s = this.options.source, this.source = function (e, i) {
                i(t.ui.autocomplete.filter(s, e.term))
            }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function (s, a) {
                i.xhr && i.xhr.abort(), i.xhr = t.ajax({
                    url: n,
                    data: s,
                    dataType: "json",
                    autocompleteRequest: ++e,
                    success: function (t) {
                        this.autocompleteRequest === e && a(t)
                    },
                    error: function () {
                        this.autocompleteRequest === e && a([])
                    }
                })
            }) : this.source = this.options.source
        },
        search: function (t, e) {
            return t = null != t ? t : this.element.val(), this.term = this.element.val(), t.length < this.options.minLength ? this.close(e) : (clearTimeout(this.closing), this._trigger("search", e) !== !1 ? this._search(t) : void 0)
        },
        _search: function (t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
                term: t
            }, this.response)
        },
        _response: function (t) {
            !this.options.disabled && t && t.length ? (t = this._normalize(t), this._suggest(t), this._trigger("open")) : this.close(), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
        },
        close: function (t) {
            clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", t))
        },
        _change: function (t) {
            this.previous !== this.element.val() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function (e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e)
            })
        },
        _suggest: function (e) {
            var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(i, e), this.menu.deactivate(), this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                of: this.element
            }, this.options.position))
        },
        _resizeMenu: function () {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth(), this.element.outerWidth()))
        },
        _renderMenu: function (e, i) {
            var s = this;
            t.each(i, function (t, i) {
                s._renderItem(e, i)
            })
        },
        _renderItem: function (e, i) {
            return t("<li></li>").data("item.autocomplete", i).append(t("<a></a>").text(i.label)).appendTo(e)
        },
        _move: function (t, e) {
            this.menu.element.is(":visible") ? this.menu.first() && /^previous/.test(t) || this.menu.last() && /^next/.test(t) ? (this.element.val(this.term), this.menu.deactivate()) : this.menu[t](e) : this.search(null, e)
        },
        widget: function () {
            return this.menu.element
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
            return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function (e, i) {
            var s = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function (t) {
                return s.test(t.label || t.value || t)
            })
        }
    })
}(jQuery),
function (t) {
    t.widget("ui.menu", {
        _create: function () {
            var e = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function (i) {
                t(i.target).closest(".ui-menu-item a").length && (i.preventDefault(), e.select(i))
            }), this.refresh()
        },
        refresh: function () {
            var e = this;
            this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function (i) {
                e.activate(i, t(this).parent())
            }).mouseleave(function () {
                e.deactivate()
            })
        },
        activate: function (t, e) {
            if (this.deactivate(), this.hasScroll()) {
                var i = e.offset().top - this.element.offset().top,
                    s = this.element.attr("scrollTop"),
                    n = this.element.height();
                0 > i ? this.element.attr("scrollTop", s + i) : i >= n && this.element.attr("scrollTop", s + i - n + e.height())
            }
            this.active = e.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", t, {
                item: e
            })
        },
        deactivate: function () {
            this.active && (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
        },
        next: function (t) {
            this.move("next", ".ui-menu-item:first", t)
        },
        previous: function (t) {
            this.move("prev", ".ui-menu-item:last", t)
        },
        first: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function (t, e, i) {
            this.active ? (t = this.active[t + "All"](".ui-menu-item").eq(0), t.length ? this.activate(i, t) : this.activate(i, this.element.children(e))) : this.activate(i, this.element.children(e))
        },
        nextPage: function (e) {
            if (this.hasScroll())
                if (!this.active || this.last()) this.activate(e, this.element.children(".ui-menu-item:first"));
                else {
                    var i = this.active.offset().top,
                        s = this.element.height(),
                        n = this.element.children(".ui-menu-item").filter(function () {
                            var e = t(this).offset().top - i - s + t(this).height();
                            return 10 > e && e > -10
                        });
                    n.length || (n = this.element.children(".ui-menu-item:last")), this.activate(e, n)
                } else this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        },
        previousPage: function (e) {
            if (this.hasScroll())
                if (!this.active || this.first()) this.activate(e, this.element.children(".ui-menu-item:last"));
                else {
                    var i = this.active.offset().top,
                        s = this.element.height();
                    result = this.element.children(".ui-menu-item").filter(function () {
                        var e = t(this).offset().top - i + s - t(this).height();
                        return 10 > e && e > -10
                    }), result.length || (result = this.element.children(".ui-menu-item:first")), this.activate(e, result)
                } else this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        },
        hasScroll: function () {
            return this.element.height() < this.element.attr("scrollHeight")
        },
        select: function (t) {
            this._trigger("selected", t, {
                item: this.active
            })
        }
    })
}(jQuery),
function (t) {
    var e, i = function (e) {
            t(":ui-button", e.target.form).each(function () {
                var e = t(this).data("button");
                setTimeout(function () {
                    e.refresh()
                }, 1)
            })
        }, s = function (e) {
            var i = e.name,
                s = e.form,
                n = t([]);
            return i && (n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function () {
                return !this.form
            })), n
        };
    t.widget("ui.button", {
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset.button").bind("reset.button", i), "boolean" != typeof this.options.disabled && (this.options.disabled = this.element.attr("disabled")), this._determineButtonType(), this.hasTitle = !! this.buttonElement.attr("title");
            var n = this,
                a = this.options,
                o = "checkbox" === this.type || "radio" === this.type,
                r = "ui-state-hover" + (o ? "" : " ui-state-active");
            null === a.label && (a.label = this.buttonElement.html()), this.element.is(":disabled") && (a.disabled = !0), this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter.button", function () {
                a.disabled || (t(this).addClass("ui-state-hover"), this === e && t(this).addClass("ui-state-active"))
            }).bind("mouseleave.button", function () {
                a.disabled || t(this).removeClass(r)
            }).bind("focus.button", function () {
                t(this).addClass("ui-state-focus")
            }).bind("blur.button", function () {
                t(this).removeClass("ui-state-focus")
            }), o && this.element.bind("change.button", function () {
                n.refresh()
            }), "checkbox" === this.type ? this.buttonElement.bind("click.button", function () {
                return a.disabled ? !1 : (t(this).toggleClass("ui-state-active"), n.buttonElement.attr("aria-pressed", n.element[0].checked), void 0)
            }) : "radio" === this.type ? this.buttonElement.bind("click.button", function () {
                if (a.disabled) return !1;
                t(this).addClass("ui-state-active"), n.buttonElement.attr("aria-pressed", !0);
                var e = n.element[0];
                s(e).not(e).map(function () {
                    return t(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", !1)
            }) : (this.buttonElement.bind("mousedown.button", function () {
                return a.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, t(document).one("mouseup", function () {
                    e = null
                }), void 0)
            }).bind("mouseup.button", function () {
                return a.disabled ? !1 : (t(this).removeClass("ui-state-active"), void 0)
            }).bind("keydown.button", function (e) {
                return a.disabled ? !1 : ((e.keyCode == t.ui.keyCode.SPACE || e.keyCode == t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"), void 0)
            }).bind("keyup.button", function () {
                t(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click()
            })), this._setOption("disabled", a.disabled)
        },
        _determineButtonType: function () {
            if (this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type) {
                this.buttonElement = this.element.parents().last().find("label[for=" + this.element.attr("id") + "]"), this.element.addClass("ui-helper-hidden-accessible");
                var t = this.element.is(":checked");
                t && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", t)
            } else this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), t.Widget.prototype.destroy.call(this)
        },
        _setOption: function (e, i) {
            t.Widget.prototype._setOption.apply(this, arguments), "disabled" === e && (i ? this.element.attr("disabled", !0) : this.element.removeAttr("disabled")), this._resetButton()
        },
        refresh: function () {
            var e = this.element.is(":disabled");
            e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? s(this.element[0]).each(function () {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", !0) : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", !1)
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", !0) : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", !1))
        },
        _resetButton: function () {
            if ("input" === this.type) this.options.label && this.element.val(this.options.label);
            else {
                var e = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
                    i = t("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                    s = this.options.icons,
                    n = s.primary && s.secondary,
                    a = [];
                s.primary || s.secondary ? (a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), e.removeClass("ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary"), this.hasTitle || e.attr("title", i))) : a.push("ui-button-text-only"), e.addClass(a.join(" "))
            }
        }
    }), t.widget("ui.buttonset", {
        options: {
            items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
        },
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (e, i) {
            "disabled" === e && this.buttons.button("option", e, i), t.Widget.prototype._setOption.apply(this, arguments)
        },
        refresh: function () {
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()
        },
        destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), t.Widget.prototype.destroy.call(this)
        }
    })
}(jQuery),
function (b, d) {
    function e() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._inDialog = this._datepickerShowing = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1
        }, b.extend(this._defaults, this.regional[""]), this.dpDiv = b('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')
    }

    function g(t, e) {
        b.extend(t, e);
        for (var i in e)(null == e[i] || e[i] == d) && (t[i] = e[i]);
        return t
    }
    b.extend(b.ui, {
        datepicker: {
            version: "1.8.10"
        }
    });
    var f = (new Date).getTime();
    b.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        log: function () {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (t) {
            return g(this._defaults, t || {}), this
        },
        _attachDatepicker: function (a, c) {
            var h = null;
            for (var i in this._defaults) {
                var j = a.getAttribute("date:" + i);
                if (j) {
                    h = h || {};
                    try {
                        h[i] = eval(j)
                    } catch (n) {
                        h[i] = j
                    }
                }
            }
            i = a.nodeName.toLowerCase(), j = "div" == i || "span" == i, a.id || (this.uuid += 1, a.id = "dp" + this.uuid);
            var q = this._newInst(b(a), j);
            q.settings = b.extend({}, c || {}, h || {}), "input" == i ? this._connectDatepicker(a, q) : j && this._inlineDatepicker(a, q)
        },
        _newInst: function (t, e) {
            return {
                id: t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: e,
                dpDiv: e ? b('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>') : this.dpDiv
            }
        },
        _connectDatepicker: function (t, e) {
            var i = b(t);
            e.append = b([]), e.trigger = b([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (t, i, s) {
                e.settings[i] = s
            }).bind("getData.datepicker", function (t, i) {
                return this._get(e, i)
            }), this._autoSize(e), b.data(t, "datepicker", e))
        },
        _attachments: function (t, e) {
            var i = this._get(e, "appendText"),
                s = this._get(e, "isRTL");
            if (e.append && e.append.remove(), i && (e.append = b('<span class="' + this._appendClass + '">' + i + "</span>"), t[s ? "before" : "after"](e.append)), t.unbind("focus", this._showDatepicker), e.trigger && e.trigger.remove(), i = this._get(e, "showOn"), ("focus" == i || "both" == i) && t.focus(this._showDatepicker), "button" == i || "both" == i) {
                i = this._get(e, "buttonText");
                var n = this._get(e, "buttonImage");
                e.trigger = b(this._get(e, "buttonImageOnly") ? b("<img/>").addClass(this._triggerClass).attr({
                    src: n,
                    alt: i,
                    title: i
                }) : b('<button type="button"></button>').addClass(this._triggerClass).html("" == n ? i : b("<img/>").attr({
                    src: n,
                    alt: i,
                    title: i
                }))), t[s ? "before" : "after"](e.trigger), e.trigger.click(function () {
                    return b.datepicker._datepickerShowing && b.datepicker._lastInput == t[0] ? b.datepicker._hideDatepicker() : b.datepicker._showDatepicker(t[0]), !1
                })
            }
        },
        _autoSize: function (t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e = new Date(2009, 11, 20),
                    i = this._get(t, "dateFormat");
                if (i.match(/[DM]/)) {
                    var s = function (t) {
                        for (var e = 0, i = 0, s = 0; s < t.length; s++) t[s].length > e && (e = t[s].length, i = s);
                        return i
                    };
                    e.setMonth(s(this._get(t, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), e.setDate(s(this._get(t, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - e.getDay())
                }
                t.input.attr("size", this._formatDate(t, e).length)
            }
        },
        _inlineDatepicker: function (t, e) {
            var i = b(t);
            i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv).bind("setData.datepicker", function (t, i, s) {
                e.settings[i] = s
            }).bind("getData.datepicker", function (t, i) {
                return this._get(e, i)
            }), b.data(t, "datepicker", e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.dpDiv.show())
        },
        _dialogDatepicker: function (t, e, i, s, n) {
            return t = this._dialogInst, t || (this.uuid += 1, this._dialogInput = b('<input type="text" id="' + ("dp" + this.uuid) + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'), this._dialogInput.keydown(this._doKeyDown), b("body").append(this._dialogInput), t = this._dialogInst = this._newInst(this._dialogInput, !1), t.settings = {}, b.data(this._dialogInput[0], "datepicker", t)), g(t.settings, s || {}), e = e && e.constructor == Date ? this._formatDate(t, e) : e, this._dialogInput.val(e), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, this._pos || (this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), t.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), b.blockUI && b.blockUI(this.dpDiv), b.data(this._dialogInput[0], "datepicker", t), this
        },
        _destroyDatepicker: function (t) {
            var e = b(t),
                i = b.data(t, "datepicker");
            if (e.hasClass(this.markerClassName)) {
                var s = t.nodeName.toLowerCase();
                b.removeData(t, "datepicker"), "input" == s ? (i.append.remove(), i.trigger.remove(), e.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == s || "span" == s) && e.removeClass(this.markerClassName).empty()
            }
        },
        _enableDatepicker: function (t) {
            var e = b(t),
                i = b.data(t, "datepicker");
            if (e.hasClass(this.markerClassName)) {
                var s = t.nodeName.toLowerCase();
                "input" == s ? (t.disabled = !1, i.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" == s || "span" == s) && e.children("." + this._inlineClass).children().removeClass("ui-state-disabled"), this._disabledInputs = b.map(this._disabledInputs, function (e) {
                    return e == t ? null : e
                })
            }
        },
        _disableDatepicker: function (t) {
            var e = b(t),
                i = b.data(t, "datepicker");
            if (e.hasClass(this.markerClassName)) {
                var s = t.nodeName.toLowerCase();
                "input" == s ? (t.disabled = !0, i.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" == s || "span" == s) && e.children("." + this._inlineClass).children().addClass("ui-state-disabled"), this._disabledInputs = b.map(this._disabledInputs, function (e) {
                    return e == t ? null : e
                }), this._disabledInputs[this._disabledInputs.length] = t
            }
        },
        _isDisabledDatepicker: function (t) {
            if (!t) return !1;
            for (var e = 0; e < this._disabledInputs.length; e++)
                if (this._disabledInputs[e] == t) return !0;
            return !1
        },
        _getInst: function (t) {
            try {
                return b.data(t, "datepicker")
            } catch (e) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (t, e, i) {
            var s = this._getInst(t);
            if (2 == arguments.length && "string" == typeof e) return "defaults" == e ? b.extend({}, b.datepicker._defaults) : s ? "all" == e ? b.extend({}, s.settings) : this._get(s, e) : null;
            var n = e || {};
            if ("string" == typeof e && (n = {}, n[e] = i), s) {
                this._curInst == s && this._hideDatepicker();
                var a = this._getDateDatepicker(t, !0);
                g(s.settings, n), this._attachments(b(t), s), this._autoSize(s), this._setDateDatepicker(t, a), this._updateDatepicker(s)
            }
        },
        _changeDatepicker: function (t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function (t) {
            (t = this._getInst(t)) && this._updateDatepicker(t)
        },
        _setDateDatepicker: function (t, e) {
            (t = this._getInst(t)) && (this._setDate(t, e), this._updateDatepicker(t), this._updateAlternate(t))
        },
        _getDateDatepicker: function (t, e) {
            return (t = this._getInst(t)) && !t.inline && this._setDateFromField(t, e), t ? this._getDate(t) : null
        },
        _doKeyDown: function (t) {
            var e = b.datepicker._getInst(t.target),
                i = !0,
                s = e.dpDiv.is(".ui-datepicker-rtl");
            if (e._keyEvent = !0, b.datepicker._datepickerShowing) switch (t.keyCode) {
            case 9:
                b.datepicker._hideDatepicker(), i = !1;
                break;
            case 13:
                return i = b("td." + b.datepicker._dayOverClass + ":not(." + b.datepicker._currentClass + ")", e.dpDiv), i[0] ? b.datepicker._selectDay(t.target, e.selectedMonth, e.selectedYear, i[0]) : b.datepicker._hideDatepicker(), !1;
            case 27:
                b.datepicker._hideDatepicker();
                break;
            case 33:
                b.datepicker._adjustDate(t.target, t.ctrlKey ? -b.datepicker._get(e, "stepBigMonths") : -b.datepicker._get(e, "stepMonths"), "M");
                break;
            case 34:
                b.datepicker._adjustDate(t.target, t.ctrlKey ? +b.datepicker._get(e, "stepBigMonths") : +b.datepicker._get(e, "stepMonths"), "M");
                break;
            case 35:
                (t.ctrlKey || t.metaKey) && b.datepicker._clearDate(t.target), i = t.ctrlKey || t.metaKey;
                break;
            case 36:
                (t.ctrlKey || t.metaKey) && b.datepicker._gotoToday(t.target), i = t.ctrlKey || t.metaKey;
                break;
            case 37:
                (t.ctrlKey || t.metaKey) && b.datepicker._adjustDate(t.target, s ? 1 : -1, "D"), i = t.ctrlKey || t.metaKey, t.originalEvent.altKey && b.datepicker._adjustDate(t.target, t.ctrlKey ? -b.datepicker._get(e, "stepBigMonths") : -b.datepicker._get(e, "stepMonths"), "M");
                break;
            case 38:
                (t.ctrlKey || t.metaKey) && b.datepicker._adjustDate(t.target, -7, "D"), i = t.ctrlKey || t.metaKey;
                break;
            case 39:
                (t.ctrlKey || t.metaKey) && b.datepicker._adjustDate(t.target, s ? -1 : 1, "D"), i = t.ctrlKey || t.metaKey, t.originalEvent.altKey && b.datepicker._adjustDate(t.target, t.ctrlKey ? +b.datepicker._get(e, "stepBigMonths") : +b.datepicker._get(e, "stepMonths"), "M");
                break;
            case 40:
                (t.ctrlKey || t.metaKey) && b.datepicker._adjustDate(t.target, 7, "D"), i = t.ctrlKey || t.metaKey;
                break;
            default:
                i = !1
            } else 36 == t.keyCode && t.ctrlKey ? b.datepicker._showDatepicker(this) : i = !1;
            i && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function (t) {
            var e = b.datepicker._getInst(t.target);
            if (b.datepicker._get(e, "constrainInput")) {
                e = b.datepicker._possibleChars(b.datepicker._get(e, "dateFormat"));
                var i = String.fromCharCode(t.charCode == d ? t.keyCode : t.charCode);
                return t.ctrlKey || t.metaKey || " " > i || !e || e.indexOf(i) > -1
            }
        },
        _doKeyUp: function (t) {
            if (t = b.datepicker._getInst(t.target), t.input.val() != t.lastVal) try {
                b.datepicker.parseDate(b.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, b.datepicker._getFormatConfig(t)) && (b.datepicker._setDateFromField(t), b.datepicker._updateAlternate(t), b.datepicker._updateDatepicker(t))
            } catch (e) {
                b.datepicker.log(e)
            }
            return !0
        },
        _showDatepicker: function (t) {
            if (t = t.target || t, "input" != t.nodeName.toLowerCase() && (t = b("input", t.parentNode)[0]), !b.datepicker._isDisabledDatepicker(t) && b.datepicker._lastInput != t) {
                var e = b.datepicker._getInst(t);
                b.datepicker._curInst && b.datepicker._curInst != e && b.datepicker._curInst.dpDiv.stop(!0, !0);
                var i = b.datepicker._get(e, "beforeShow");
                g(e.settings, i ? i.apply(t, [t, e]) : {}), e.lastVal = null, b.datepicker._lastInput = t, b.datepicker._setDateFromField(e), b.datepicker._inDialog && (t.value = ""), b.datepicker._pos || (b.datepicker._pos = b.datepicker._findPos(t), b.datepicker._pos[1] += t.offsetHeight);
                var s = !1;
                if (b(t).parents().each(function () {
                    return s |= "fixed" == b(this).css("position"), !s
                }), s && b.browser.opera && (b.datepicker._pos[0] -= document.documentElement.scrollLeft, b.datepicker._pos[1] -= document.documentElement.scrollTop), i = {
                    left: b.datepicker._pos[0],
                    top: b.datepicker._pos[1]
                }, b.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), b.datepicker._updateDatepicker(e), i = b.datepicker._checkOffset(e, i, s), e.dpDiv.css({
                    position: b.datepicker._inDialog && b.blockUI ? "static" : s ? "fixed" : "absolute",
                    display: "none",
                    left: i.left + "px",
                    top: i.top + "px"
                }), !e.inline) {
                    i = b.datepicker._get(e, "showAnim");
                    var n = b.datepicker._get(e, "duration"),
                        a = function () {
                            b.datepicker._datepickerShowing = !0;
                            var t = e.dpDiv.find("iframe.ui-datepicker-cover");
                            if (t.length) {
                                var i = b.datepicker._getBorders(e.dpDiv);
                                t.css({
                                    left: -i[0],
                                    top: -i[1],
                                    width: e.dpDiv.outerWidth(),
                                    height: e.dpDiv.outerHeight()
                                })
                            }
                        };
                    e.dpDiv.zIndex(b(t).zIndex() + 1), b.effects && b.effects[i] ? e.dpDiv.show(i, b.datepicker._get(e, "showOptions"), n, a) : e.dpDiv[i || "show"](i ? n : null, a), i && n || a(), e.input.is(":visible") && !e.input.is(":disabled") && e.input.focus(), b.datepicker._curInst = e
                }
            }
        },
        _updateDatepicker: function (t) {
            var e = this,
                i = b.datepicker._getBorders(t.dpDiv);
            t.dpDiv.empty().append(this._generateHTML(t));
            var s = t.dpDiv.find("iframe.ui-datepicker-cover");
            if (s.length && s.css({
                left: -i[0],
                top: -i[1],
                width: t.dpDiv.outerWidth(),
                height: t.dpDiv.outerHeight()
            }), t.dpDiv.find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout", function () {
                b(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && b(this).removeClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && b(this).removeClass("ui-datepicker-next-hover")
            }).bind("mouseover", function () {
                e._isDisabledDatepicker(t.inline ? t.dpDiv.parent()[0] : t.input[0]) || (b(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), b(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && b(this).addClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && b(this).addClass("ui-datepicker-next-hover"))
            }).end().find("." + this._dayOverClass + " a").trigger("mouseover").end(), i = this._getNumberOfMonths(t), s = i[1], s > 1 ? t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em") : t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), t.dpDiv[(1 != i[0] || 1 != i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t == b.datepicker._curInst && b.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] != document.activeElement && t.input.focus(), t.yearshtml) {
                var n = t.yearshtml;
                setTimeout(function () {
                    n === t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function (t) {
            var e = function (t) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[t] || t
            };
            return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
        },
        _checkOffset: function (t, e, i) {
            var s = t.dpDiv.outerWidth(),
                n = t.dpDiv.outerHeight(),
                a = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                r = document.documentElement.clientWidth + b(document).scrollLeft(),
                l = document.documentElement.clientHeight + b(document).scrollTop();
            return e.left -= this._get(t, "isRTL") ? s - a : 0, e.left -= i && e.left == t.input.offset().left ? b(document).scrollLeft() : 0, e.top -= i && e.top == t.input.offset().top + o ? b(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + s > r && r > s ? Math.abs(e.left + s - r) : 0), e.top -= Math.min(e.top, e.top + n > l && l > n ? Math.abs(n + o) : 0), e
        },
        _findPos: function (t) {
            for (var e = this._get(this._getInst(t), "isRTL"); t && ("hidden" == t.type || 1 != t.nodeType || b.expr.filters.hidden(t));) t = t[e ? "previousSibling" : "nextSibling"];
            return t = b(t).offset(), [t.left, t.top]
        },
        _hideDatepicker: function (t) {
            var e = this._curInst;
            if (e && (!t || e == b.data(t, "datepicker")) && this._datepickerShowing) {
                t = this._get(e, "showAnim");
                var i = this._get(e, "duration"),
                    s = function () {
                        b.datepicker._tidyDialog(e), this._curInst = null
                    };
                b.effects && b.effects[t] ? e.dpDiv.hide(t, b.datepicker._get(e, "showOptions"), i, s) : e.dpDiv["slideDown" == t ? "slideUp" : "fadeIn" == t ? "fadeOut" : "hide"](t ? i : null, s), t || s(), (t = this._get(e, "onClose")) && t.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e]), this._datepickerShowing = !1, this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), b.blockUI && (b.unblockUI(), b("body").append(this.dpDiv))), this._inDialog = !1
            }
        },
        _tidyDialog: function (t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (t) {
            b.datepicker._curInst && (t = b(t.target), t[0].id != b.datepicker._mainDivId && 0 == t.parents("#" + b.datepicker._mainDivId).length && !t.hasClass(b.datepicker.markerClassName) && !t.hasClass(b.datepicker._triggerClass) && b.datepicker._datepickerShowing && !(b.datepicker._inDialog && b.blockUI) && b.datepicker._hideDatepicker())
        },
        _adjustDate: function (t, e, i) {
            t = b(t);
            var s = this._getInst(t[0]);
            this._isDisabledDatepicker(t[0]) || (this._adjustInstDate(s, e + ("M" == i ? this._get(s, "showCurrentAtPos") : 0), i), this._updateDatepicker(s))
        },
        _gotoToday: function (t) {
            t = b(t);
            var e = this._getInst(t[0]);
            if (this._get(e, "gotoCurrent") && e.currentDay) e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear;
            else {
                var i = new Date;
                e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear()
            }
            this._notifyChange(e), this._adjustDate(t)
        },
        _selectMonthYear: function (t, e, i) {
            t = b(t);
            var s = this._getInst(t[0]);
            s._selectingMonthYear = !1, s["selected" + ("M" == i ? "Month" : "Year")] = s["draw" + ("M" == i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(t)
        },
        _clickMonthYear: function (t) {
            var e = this._getInst(b(t)[0]);
            e.input && e._selectingMonthYear && setTimeout(function () {
                e.input.focus()
            }, 0), e._selectingMonthYear = !e._selectingMonthYear
        },
        _selectDay: function (t, e, i, s) {
            var n = b(t);
            b(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(n[0]) || (n = this._getInst(n[0]), n.selectedDay = n.currentDay = b("a", s).html(), n.selectedMonth = n.currentMonth = e, n.selectedYear = n.currentYear = i, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
        },
        _clearDate: function (t) {
            t = b(t), this._getInst(t[0]), this._selectDate(t, "")
        },
        _selectDate: function (t, e) {
            t = this._getInst(b(t)[0]), e = null != e ? e : this._formatDate(t), t.input && t.input.val(e), this._updateAlternate(t);
            var i = this._get(t, "onSelect");
            i ? i.apply(t.input ? t.input[0] : null, [e, t]) : t.input && t.input.trigger("change"), t.inline ? this._updateDatepicker(t) : (this._hideDatepicker(), this._lastInput = t.input[0], "object" != typeof t.input[0] && t.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (t) {
            var e = this._get(t, "altField");
            if (e) {
                var i = this._get(t, "altFormat") || this._get(t, "dateFormat"),
                    s = this._getDate(t),
                    n = this.formatDate(i, s, this._getFormatConfig(t));
                b(e).each(function () {
                    b(this).val(n)
                })
            }
        },
        noWeekends: function (t) {
            return t = t.getDay(), [t > 0 && 6 > t, ""]
        },
        iso8601Week: function (t) {
            t = new Date(t.getTime()), t.setDate(t.getDate() + 4 - (t.getDay() || 7));
            var e = t.getTime();
            return t.setMonth(0), t.setDate(1), Math.floor(Math.round((e - t) / 864e5) / 7) + 1
        },
        parseDate: function (t, e, i) {
            if (null == t || null == e) throw "Invalid arguments";
            if (e = "object" == typeof e ? e.toString() : e + "", "" == e) return null;
            var s = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            s = "string" != typeof s ? s : (new Date).getFullYear() % 100 + parseInt(s, 10);
            for (var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, a = (i ? i.dayNames : null) || this._defaults.dayNames, o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, l = i = -1, h = -1, c = -1, u = !1, d = function (e) {
                    return (e = v + 1 < t.length && t.charAt(v + 1) == e) && v++, e
                }, p = function (t) {
                    var i = d(t);
                    if (t = new RegExp("^\\d{1," + ("@" == t ? 14 : "!" == t ? 20 : "y" == t && i ? 4 : "o" == t ? 3 : 2) + "}"), t = e.substring(m).match(t), !t) throw "Missing number at position " + m;
                    return m += t[0].length, parseInt(t[0], 10)
                }, f = function (t, i, s) {
                    for (t = d(t) ? s : i, i = 0; i < t.length; i++)
                        if (e.substr(m, t[i].length).toLowerCase() == t[i].toLowerCase()) return m += t[i].length, i + 1;
                    throw "Unknown name at position " + m
                }, g = function () {
                    if (e.charAt(m) != t.charAt(v)) throw "Unexpected literal at position " + m;
                    m++
                }, m = 0, v = 0; v < t.length; v++)
                if (u) "'" != t.charAt(v) || d("'") ? g() : u = !1;
                else switch (t.charAt(v)) {
                case "d":
                    h = p("d");
                    break;
                case "D":
                    f("D", n, a);
                    break;
                case "o":
                    c = p("o");
                    break;
                case "m":
                    l = p("m");
                    break;
                case "M":
                    l = f("M", o, r);
                    break;
                case "y":
                    i = p("y");
                    break;
                case "@":
                    var b = new Date(p("@"));
                    i = b.getFullYear(), l = b.getMonth() + 1, h = b.getDate();
                    break;
                case "!":
                    b = new Date((p("!") - this._ticksTo1970) / 1e4), i = b.getFullYear(), l = b.getMonth() + 1, h = b.getDate();
                    break;
                case "'":
                    d("'") ? g() : u = !0;
                    break;
                default:
                    g()
                }
                if (-1 == i ? i = (new Date).getFullYear() : 100 > i && (i += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (s >= i ? 0 : -100)), c > -1)
                    for (l = 1, h = c;;) {
                        if (s = this._getDaysInMonth(i, l - 1), s >= h) break;
                        l++, h -= s
                    }
                if (b = this._daylightSavingAdjust(new Date(i, l - 1, h)), b.getFullYear() != i || b.getMonth() + 1 != l || b.getDate() != h) throw "Invalid date";
            return b
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (t, e, i) {
            if (!e) return "";
            var s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                n = (i ? i.dayNames : null) || this._defaults.dayNames,
                a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort;
            i = (i ? i.monthNames : null) || this._defaults.monthNames;
            var o = function (e) {
                return (e = u + 1 < t.length && t.charAt(u + 1) == e) && u++, e
            }, r = function (t, e, i) {
                    if (e = "" + e, o(t))
                        for (; e.length < i;) e = "0" + e;
                    return e
                }, l = function (t, e, i, s) {
                    return o(t) ? s[e] : i[e]
                }, h = "",
                c = !1;
            if (e)
                for (var u = 0; u < t.length; u++)
                    if (c) "'" != t.charAt(u) || o("'") ? h += t.charAt(u) : c = !1;
                    else switch (t.charAt(u)) {
                    case "d":
                        h += r("d", e.getDate(), 2);
                        break;
                    case "D":
                        h += l("D", e.getDay(), s, n);
                        break;
                    case "o":
                        h += r("o", (e.getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5, 3);
                        break;
                    case "m":
                        h += r("m", e.getMonth() + 1, 2);
                        break;
                    case "M":
                        h += l("M", e.getMonth(), a, i);
                        break;
                    case "y":
                        h += o("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                        break;
                    case "@":
                        h += e.getTime();
                        break;
                    case "!":
                        h += 1e4 * e.getTime() + this._ticksTo1970;
                        break;
                    case "'":
                        o("'") ? h += "'" : c = !0;
                        break;
                    default:
                        h += t.charAt(u)
                    }
                    return h
        },
        _possibleChars: function (t) {
            for (var e = "", i = !1, s = function (e) {
                    return (e = n + 1 < t.length && t.charAt(n + 1) == e) && n++, e
                }, n = 0; n < t.length; n++)
                if (i) "'" != t.charAt(n) || s("'") ? e += t.charAt(n) : i = !1;
                else switch (t.charAt(n)) {
                case "d":
                case "m":
                case "y":
                case "@":
                    e += "0123456789";
                    break;
                case "D":
                case "M":
                    return null;
                case "'":
                    s("'") ? e += "'" : i = !0;
                    break;
                default:
                    e += t.charAt(n)
                }
                return e
        },
        _get: function (t, e) {
            return t.settings[e] !== d ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function (t, e) {
            if (t.input.val() != t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    s = t.lastVal = t.input ? t.input.val() : null,
                    n, a;
                n = a = this._getDefaultDate(t);
                var o = this._getFormatConfig(t);
                try {
                    n = this.parseDate(i, s, o) || a
                } catch (r) {
                    this.log(r), s = e ? "" : s
                }
                t.selectedDay = n.getDate(), t.drawMonth = t.selectedMonth = n.getMonth(), t.drawYear = t.selectedYear = n.getFullYear(), t.currentDay = s ? n.getDate() : 0, t.currentMonth = s ? n.getMonth() : 0, t.currentYear = s ? n.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function (t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function (t, e, i) {
            var s = function (t) {
                var e = new Date;
                return e.setDate(e.getDate() + t), e
            }, n = function (e) {
                    try {
                        return b.datepicker.parseDate(b.datepicker._get(t, "dateFormat"), e, b.datepicker._getFormatConfig(t))
                    } catch (i) {}
                    var s = (e.toLowerCase().match(/^c/) ? b.datepicker._getDate(t) : null) || new Date,
                        n = s.getFullYear(),
                        a = s.getMonth();
                    s = s.getDate();
                    for (var o = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, r = o.exec(e); r;) {
                        switch (r[2] || "d") {
                        case "d":
                        case "D":
                            s += parseInt(r[1], 10);
                            break;
                        case "w":
                        case "W":
                            s += 7 * parseInt(r[1], 10);
                            break;
                        case "m":
                        case "M":
                            a += parseInt(r[1], 10), s = Math.min(s, b.datepicker._getDaysInMonth(n, a));
                            break;
                        case "y":
                        case "Y":
                            n += parseInt(r[1], 10), s = Math.min(s, b.datepicker._getDaysInMonth(n, a))
                        }
                        r = o.exec(e)
                    }
                    return new Date(n, a, s)
                };
            return (e = (e = null == e || "" === e ? i : "string" == typeof e ? n(e) : "number" == typeof e ? isNaN(e) ? i : s(e) : new Date(e.getTime())) && "Invalid Date" == e.toString() ? i : e) && (e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0)), this._daylightSavingAdjust(e)
        },
        _daylightSavingAdjust: function (t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function (t, e, i) {
            var s = !e,
                n = t.selectedMonth,
                a = t.selectedYear;
            e = this._restrictMinMax(t, this._determineDate(t, e, new Date)), t.selectedDay = t.currentDay = e.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = e.getMonth(), t.drawYear = t.selectedYear = t.currentYear = e.getFullYear(), n == t.selectedMonth && a == t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function (t) {
            return !t.currentYear || t.input && "" == t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
        },
        _generateHTML: function (t) {
            var e = new Date;
            e = this._daylightSavingAdjust(new Date(e.getFullYear(), e.getMonth(), e.getDate()));
            var i = this._get(t, "isRTL"),
                s = this._get(t, "showButtonPanel"),
                n = this._get(t, "hideIfNoPrevNext"),
                a = this._get(t, "navigationAsDateFormat"),
                o = this._getNumberOfMonths(t),
                r = this._get(t, "showCurrentAtPos"),
                l = this._get(t, "stepMonths"),
                h = 1 != o[0] || 1 != o[1],
                c = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                u = this._getMinMaxDate(t, "min"),
                d = this._getMinMaxDate(t, "max");
            r = t.drawMonth - r;
            var p = t.drawYear;
            if (0 > r && (r += 12, p--), d) {
                var g = this._daylightSavingAdjust(new Date(d.getFullYear(), d.getMonth() - o[0] * o[1] + 1, d.getDate()));
                for (g = u && u > g ? u : g; this._daylightSavingAdjust(new Date(p, r, 1)) > g;) r--, 0 > r && (r = 11, p--)
            }
            t.drawMonth = r, t.drawYear = p, g = this._get(t, "prevText"), g = a ? this.formatDate(g, this._daylightSavingAdjust(new Date(p, r - l, 1)), this._getFormatConfig(t)) : g, g = this._canAdjustMonth(t, -1, p, r) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + f + ".datepicker._adjustDate('#" + t.id + "', -" + l + ", 'M');\" title=\"" + g + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + g + "</span></a>" : n ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + g + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + g + "</span></a>";
            var m = this._get(t, "nextText");
            m = a ? this.formatDate(m, this._daylightSavingAdjust(new Date(p, r + l, 1)), this._getFormatConfig(t)) : m, n = this._canAdjustMonth(t, 1, p, r) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + f + ".datepicker._adjustDate('#" + t.id + "', +" + l + ", 'M');\" title=\"" + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + m + "</span></a>" : n ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + m + "</span></a>", l = this._get(t, "currentText"), m = this._get(t, "gotoCurrent") && t.currentDay ? c : e, l = a ? this.formatDate(l, m, this._getFormatConfig(t)) : l, a = t.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + f + '.datepicker._hideDatepicker();">' + this._get(t, "closeText") + "</button>", s = s ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? a : "") + (this._isInRange(t, m) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + f + ".datepicker._gotoToday('#" + t.id + "');\">" + l + "</button>" : "") + (i ? "" : a) + "</div>" : "", a = parseInt(this._get(t, "firstDay"), 10), a = isNaN(a) ? 0 : a, l = this._get(t, "showWeek"), m = this._get(t, "dayNames"), this._get(t, "dayNamesShort");
            var v = this._get(t, "dayNamesMin"),
                _ = this._get(t, "monthNames"),
                y = this._get(t, "monthNamesShort"),
                w = this._get(t, "beforeShowDay"),
                x = this._get(t, "showOtherMonths"),
                k = this._get(t, "selectOtherMonths");
            this._get(t, "calculateWeek");
            for (var C = this._getDefaultDate(t), D = "", I = 0; I < o[0]; I++) {
                for (var P = "", M = 0; M < o[1]; M++) {
                    var S = this._daylightSavingAdjust(new Date(p, r, t.selectedDay)),
                        T = " ui-corner-all",
                        z = "";
                    if (h) {
                        if (z += '<div class="ui-datepicker-group', o[1] > 1) switch (M) {
                        case 0:
                            z += " ui-datepicker-group-first", T = " ui-corner-" + (i ? "right" : "left");
                            break;
                        case o[1] - 1:
                            z += " ui-datepicker-group-last", T = " ui-corner-" + (i ? "left" : "right");
                            break;
                        default:
                            z += " ui-datepicker-group-middle", T = ""
                        }
                        z += '">'
                    }
                    z += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + T + '">' + (/all|left/.test(T) && 0 == I ? i ? n : g : "") + (/all|right/.test(T) && 0 == I ? i ? g : n : "") + this._generateMonthYearHeader(t, r, p, u, d, I > 0 || M > 0, _, y) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                    var A = l ? '<th class="ui-datepicker-week-col">' + this._get(t, "weekHeader") + "</th>" : "";
                    for (T = 0; 7 > T; T++) {
                        var O = (T + a) % 7;
                        A += "<th" + ((T + a + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + m[O] + '">' + v[O] + "</span></th>"
                    }
                    z += A + "</tr></thead><tbody>", A = this._getDaysInMonth(p, r), p == t.selectedYear && r == t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, A)), T = (this._getFirstDayOfMonth(p, r) - a + 7) % 7, A = h ? 6 : Math.ceil((T + A) / 7), O = this._daylightSavingAdjust(new Date(p, r, 1 - T));
                    for (var H = 0; A > H; H++) {
                        z += "<tr>";
                        var E = l ? '<td class="ui-datepicker-week-col">' + this._get(t, "calculateWeek")(O) + "</td>" : "";
                        for (T = 0; 7 > T; T++) {
                            var N = w ? w.apply(t.input ? t.input[0] : null, [O]) : [!0, ""],
                                W = O.getMonth() != r,
                                R = W && !k || !N[0] || u && u > O || d && O > d;
                            E += '<td class="' + ((T + a + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (O.getTime() == S.getTime() && r == t.selectedMonth && t._keyEvent || C.getTime() == O.getTime() && C.getTime() == S.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !x ? "" : " " + N[1] + (O.getTime() == c.getTime() ? " " + this._currentClass : "") + (O.getTime() == e.getTime() ? " ui-datepicker-today" : "")) + '"' + (W && !x || !N[2] ? "" : ' title="' + N[2] + '"') + (R ? "" : ' onclick="DP_jQuery_' + f + ".datepicker._selectDay('#" + t.id + "'," + O.getMonth() + "," + O.getFullYear() + ', this);return false;"') + ">" + (W && !x ? "&#xa0;" : R ? '<span class="ui-state-default">' + O.getDate() + "</span>" : '<a class="ui-state-default' + (O.getTime() == e.getTime() ? " ui-state-highlight" : "") + (O.getTime() == c.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + '" href="#">' + O.getDate() + "</a>") + "</td>", O.setDate(O.getDate() + 1), O = this._daylightSavingAdjust(O)
                        }
                        z += E + "</tr>"
                    }
                    r++, r > 11 && (r = 0, p++), z += "</tbody></table>" + (h ? "</div>" + (o[0] > 0 && M == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), P += z
                }
                D += P
            }
            return D += s + (b.browser.msie && parseInt(b.browser.version, 10) < 7 && !t.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover"></iframe>' : ""), t._keyEvent = !1, D
        },
        _generateMonthYearHeader: function (t, e, i, s, n, a, o, r) {
            var l = this._get(t, "changeMonth"),
                h = this._get(t, "changeYear"),
                c = this._get(t, "showMonthAfterYear"),
                u = '<div class="ui-datepicker-title">',
                d = "";
            if (a || !l) d += '<span class="ui-datepicker-month">' + o[e] + "</span>";
            else {
                o = s && s.getFullYear() == i;
                var p = n && n.getFullYear() == i;
                d += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + f + ".datepicker._selectMonthYear('#" + t.id + "', this, 'M');\" onclick=\"DP_jQuery_" + f + ".datepicker._clickMonthYear('#" + t.id + "');\">";
                for (var g = 0; 12 > g; g++)(!o || g >= s.getMonth()) && (!p || g <= n.getMonth()) && (d += '<option value="' + g + '"' + (g == e ? ' selected="selected"' : "") + ">" + r[g] + "</option>");
                d += "</select>"
            } if (c || (u += d + (!a && l && h ? "" : "&#xa0;")), t.yearshtml = "", a || !h) u += '<span class="ui-datepicker-year">' + i + "</span>";
            else {
                r = this._get(t, "yearRange").split(":");
                var m = (new Date).getFullYear();
                for (o = function (t) {
                    return t = t.match(/c[+-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+-].*/) ? m + parseInt(t, 10) : parseInt(t, 10), isNaN(t) ? m : t
                }, e = o(r[0]), r = Math.max(e, o(r[1] || "")), e = s ? Math.max(e, s.getFullYear()) : e, r = n ? Math.min(r, n.getFullYear()) : r, t.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + f + ".datepicker._selectMonthYear('#" + t.id + "', this, 'Y');\" onclick=\"DP_jQuery_" + f + ".datepicker._clickMonthYear('#" + t.id + "');\">"; r >= e; e++) t.yearshtml += '<option value="' + e + '"' + (e == i ? ' selected="selected"' : "") + ">" + e + "</option>";
                t.yearshtml += "</select>", b.browser.mozilla ? u += '<select class="ui-datepicker-year"><option value="' + i + '" selected="selected">' + i + "</option></select>" : (u += t.yearshtml, t.yearshtml = null)
            }
            return u += this._get(t, "yearSuffix"), c && (u += (!a && l && h ? "" : "&#xa0;") + d), u += "</div>"
        },
        _adjustInstDate: function (t, e, i) {
            var s = t.drawYear + ("Y" == i ? e : 0),
                n = t.drawMonth + ("M" == i ? e : 0);
            e = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" == i ? e : 0), s = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, e))), t.selectedDay = s.getDate(), t.drawMonth = t.selectedMonth = s.getMonth(), t.drawYear = t.selectedYear = s.getFullYear(), ("M" == i || "Y" == i) && this._notifyChange(t)
        },
        _restrictMinMax: function (t, e) {
            var i = this._getMinMaxDate(t, "min");
            return t = this._getMinMaxDate(t, "max"), e = i && i > e ? i : e, e = t && e > t ? t : e
        },
        _notifyChange: function (t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function (t) {
            return t = this._get(t, "numberOfMonths"), null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function (t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function (t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function (t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function (t, e, i, s) {
            var n = this._getNumberOfMonths(t);
            return i = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1)), 0 > e && i.setDate(this._getDaysInMonth(i.getFullYear(), i.getMonth())), this._isInRange(t, i)
        },
        _isInRange: function (t, e) {
            var i = this._getMinMaxDate(t, "min");
            return t = this._getMinMaxDate(t, "max"), (!i || e.getTime() >= i.getTime()) && (!t || e.getTime() <= t.getTime())
        },
        _getFormatConfig: function (t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function (t, e, i, s) {
            return e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear), e = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)), this.formatDate(this._get(t, "dateFormat"), e, this._getFormatConfig(t))
        }
    }), b.fn.datepicker = function (t) {
        if (!this.length) return this;
        b.datepicker.initialized || (b(document).mousedown(b.datepicker._checkExternalClick).find("body").append(b.datepicker.dpDiv), b.datepicker.initialized = !0);
        var e = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" != t && "getDate" != t && "widget" != t ? "option" == t && 2 == arguments.length && "string" == typeof arguments[1] ? b.datepicker["_" + t + "Datepicker"].apply(b.datepicker, [this[0]].concat(e)) : this.each(function () {
            "string" == typeof t ? b.datepicker["_" + t + "Datepicker"].apply(b.datepicker, [this].concat(e)) : b.datepicker._attachDatepicker(this, t)
        }) : b.datepicker["_" + t + "Datepicker"].apply(b.datepicker, [this[0]].concat(e))
    }, b.datepicker = new e, b.datepicker.initialized = !1, b.datepicker.uuid = (new Date).getTime(), b.datepicker.version = "1.8.10", window["DP_jQuery_" + f] = b
}(jQuery),
function (t, e) {
    var i = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }, s = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    t.widget("ui.dialog", {
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                collision: "fit",
                using: function (e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function () {
            this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
            var e = this,
                i = e.options,
                s = i.title || "&#160;",
                n = t.ui.dialog.getTitleId(e.element),
                a = (e.uiDialog = t("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + i.dialogClass).css({
                    zIndex: i.zIndex
                }).attr("tabIndex", -1).css("outline", 0).keydown(function (s) {
                    i.closeOnEscape && s.keyCode && s.keyCode === t.ui.keyCode.ESCAPE && (e.close(s), s.preventDefault())
                }).attr({
                    role: "dialog",
                    "aria-labelledby": n
                }).mousedown(function (t) {
                    e.moveToTop(!1, t)
                });
            e.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(a);
            var o = (e.uiDialogTitlebar = t("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(a),
                r = t('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function () {
                    r.addClass("ui-state-hover")
                }, function () {
                    r.removeClass("ui-state-hover")
                }).focus(function () {
                    r.addClass("ui-state-focus")
                }).blur(function () {
                    r.removeClass("ui-state-focus")
                }).click(function (t) {
                    return e.close(t), !1
                }).appendTo(o);
            (e.uiDialogTitlebarCloseText = t("<span></span>")).addClass("ui-icon ui-icon-closethick").text(i.closeText).appendTo(r), t("<span></span>").addClass("ui-dialog-title").attr("id", n).html(s).prependTo(o), t.isFunction(i.beforeclose) && !t.isFunction(i.beforeClose) && (i.beforeClose = i.beforeclose), o.find("*").add(o).disableSelection(), i.draggable && t.fn.draggable && e._makeDraggable(), i.resizable && t.fn.resizable && e._makeResizable(), e._createButtons(i.buttons), e._isOpen = !1, t.fn.bgiframe && a.bgiframe()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        destroy: function () {
            var t = this;
            return t.overlay && t.overlay.destroy(), t.uiDialog.hide(), t.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), t.uiDialog.remove(), t.originalTitle && t.element.attr("title", t.originalTitle), t
        },
        widget: function () {
            return this.uiDialog
        },
        close: function (e) {
            var i = this,
                s, n;
            return !1 !== i._trigger("beforeClose", e) ? (i.overlay && i.overlay.destroy(), i.uiDialog.unbind("keypress.ui-dialog"), i._isOpen = !1, i.options.hide ? i.uiDialog.hide(i.options.hide, function () {
                i._trigger("close", e)
            }) : (i.uiDialog.hide(), i._trigger("close", e)), t.ui.dialog.overlay.resize(), i.options.modal && (s = 0, t(".ui-dialog").each(function () {
                this !== i.uiDialog[0] && (n = t(this).css("z-index"), isNaN(n) || (s = Math.max(s, n)))
            }), t.ui.dialog.maxZ = s), i) : void 0
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function (e, i) {
            var s = this,
                n = s.options;
            return n.modal && !e || !n.stack && !n.modal ? s._trigger("focus", i) : (n.zIndex > t.ui.dialog.maxZ && (t.ui.dialog.maxZ = n.zIndex), s.overlay && (t.ui.dialog.maxZ += 1, s.overlay.$el.css("z-index", t.ui.dialog.overlay.maxZ = t.ui.dialog.maxZ)), e = {
                scrollTop: s.element.attr("scrollTop"),
                scrollLeft: s.element.attr("scrollLeft")
            }, t.ui.dialog.maxZ += 1, s.uiDialog.css("z-index", t.ui.dialog.maxZ), s.element.attr(e), s._trigger("focus", i), s)
        },
        open: function () {
            if (!this._isOpen) {
                var e = this,
                    i = e.options,
                    s = e.uiDialog;
                return e.overlay = i.modal ? new t.ui.dialog.overlay(e) : null, e._size(), e._position(i.position), s.show(i.show), e.moveToTop(!0), i.modal && s.bind("keypress.ui-dialog", function (e) {
                    if (e.keyCode === t.ui.keyCode.TAB) {
                        var i = t(":tabbable", this),
                            s = i.filter(":first");
                        if (i = i.filter(":last"), e.target === i[0] && !e.shiftKey) return s.focus(1), !1;
                        if (e.target === s[0] && e.shiftKey) return i.focus(1), !1
                    }
                }), t(e.element.find(":tabbable").get().concat(s.find(".ui-dialog-buttonpane :tabbable").get().concat(s.get()))).eq(0).focus(), e._isOpen = !0, e._trigger("open"), e
            }
        },
        _createButtons: function (e) {
            var i = this,
                s = !1,
                n = t("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                a = t("<div></div>").addClass("ui-dialog-buttonset").appendTo(n);
            i.uiDialog.find(".ui-dialog-buttonpane").remove(), "object" == typeof e && null !== e && t.each(e, function () {
                return !(s = !0)
            }), s && (t.each(e, function (e, s) {
                s = t.isFunction(s) ? {
                    click: s,
                    text: e
                } : s, e = t('<button type="button"></button>').attr(s, !0).unbind("click").click(function () {
                    s.click.apply(i.element[0], arguments)
                }).appendTo(a), t.fn.button && e.button()
            }), n.appendTo(i.uiDialog))
        },
        _makeDraggable: function () {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var i = this,
                s = i.options,
                n = t(document),
                a;
            i.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (n, o) {
                    a = "auto" === s.height ? "auto" : t(this).height(), t(this).height(t(this).height()).addClass("ui-dialog-dragging"), i._trigger("dragStart", n, e(o))
                },
                drag: function (t, s) {
                    i._trigger("drag", t, e(s))
                },
                stop: function (o, r) {
                    s.position = [r.position.left - n.scrollLeft(), r.position.top - n.scrollTop()], t(this).removeClass("ui-dialog-dragging").height(a), i._trigger("dragStop", o, e(r)), t.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function (i) {
            function s(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            i = i === e ? this.options.resizable : i;
            var n = this,
                a = n.options,
                o = n.uiDialog.css("position");
            i = "string" == typeof i ? i : "n,e,s,w,se,sw,ne,nw", n.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: n.element,
                maxWidth: a.maxWidth,
                maxHeight: a.maxHeight,
                minWidth: a.minWidth,
                minHeight: n._minHeight(),
                handles: i,
                start: function (e, i) {
                    t(this).addClass("ui-dialog-resizing"), n._trigger("resizeStart", e, s(i))
                },
                resize: function (t, e) {
                    n._trigger("resize", t, s(e))
                },
                stop: function (e, i) {
                    t(this).removeClass("ui-dialog-resizing"), a.height = t(this).height(), a.width = t(this).width(), n._trigger("resizeStop", e, s(i)), t.ui.dialog.overlay.resize()
                }
            }).css("position", o).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function () {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function (e) {
            var i = [],
                s = [0, 0],
                n;
            e ? (("string" == typeof e || "object" == typeof e && "0" in e) && (i = e.split ? e.split(" ") : [e[0], e[1]], 1 === i.length && (i[1] = i[0]), t.each(["left", "top"], function (t, e) {
                +i[t] === i[t] && (s[t] = i[t], i[t] = e)
            }), e = {
                my: i.join(" "),
                at: i.join(" "),
                offset: s.join(" ")
            }), e = t.extend({}, t.ui.dialog.prototype.options.position, e)) : e = t.ui.dialog.prototype.options.position, (n = this.uiDialog.is(":visible")) || this.uiDialog.show(), this.uiDialog.css({
                top: 0,
                left: 0
            }).position(t.extend({
                of: window
            }, e)), n || this.uiDialog.hide()
        },
        _setOptions: function (e) {
            var n = this,
                a = {}, o = !1;
            t.each(e, function (t, e) {
                n._setOption(t, e), t in i && (o = !0), t in s && (a[t] = e)
            }), o && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", a)
        },
        _setOption: function (e, i) {
            var s = this,
                n = s.uiDialog;
            switch (e) {
            case "beforeclose":
                e = "beforeClose";
                break;
            case "buttons":
                s._createButtons(i);
                break;
            case "closeText":
                s.uiDialogTitlebarCloseText.text("" + i);
                break;
            case "dialogClass":
                n.removeClass(s.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + i);
                break;
            case "disabled":
                i ? n.addClass("ui-dialog-disabled") : n.removeClass("ui-dialog-disabled");
                break;
            case "draggable":
                var a = n.is(":data(draggable)");
                a && !i && n.draggable("destroy"), !a && i && s._makeDraggable();
                break;
            case "position":
                s._position(i);
                break;
            case "resizable":
                (a = n.is(":data(resizable)")) && !i && n.resizable("destroy"), a && "string" == typeof i && n.resizable("option", "handles", i), !a && i !== !1 && s._makeResizable(i);
                break;
            case "title":
                t(".ui-dialog-title", s.uiDialogTitlebar).html("" + (i || "&#160;"))
            }
            t.Widget.prototype._setOption.apply(s, arguments)
        },
        _size: function () {
            var e = this.options,
                i, s, n = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }), e.minWidth > e.width && (e.width = e.minWidth), i = this.uiDialog.css({
                height: "auto",
                width: e.width
            }).height(), s = Math.max(0, e.minHeight - i), "auto" === e.height ? t.support.minHeight ? this.element.css({
                minHeight: s,
                height: "auto"
            }) : (this.uiDialog.show(), e = this.element.css("height", "auto").height(), n || this.uiDialog.hide(), this.element.height(Math.max(e, s))) : this.element.height(Math.max(e.height - i, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }), t.extend(t.ui.dialog, {
        version: "1.8.10",
        uuid: 0,
        maxZ: 0,
        getTitleId: function (t) {
            return t = t.attr("id"), t || (this.uuid += 1, t = this.uuid), "ui-dialog-title-" + t
        },
        overlay: function (e) {
            this.$el = t.ui.dialog.overlay.create(e)
        }
    }), t.extend(t.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: t.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (t) {
            return t + ".dialog-overlay"
        }).join(" "),
        create: function (e) {
            0 === this.instances.length && (setTimeout(function () {
                t.ui.dialog.overlay.instances.length && t(document).bind(t.ui.dialog.overlay.events, function (e) {
                    return t(e.target).zIndex() < t.ui.dialog.overlay.maxZ ? !1 : void 0
                })
            }, 1), t(document).bind("keydown.dialog-overlay", function (i) {
                e.options.closeOnEscape && i.keyCode && i.keyCode === t.ui.keyCode.ESCAPE && (e.close(i), i.preventDefault())
            }), t(window).bind("resize.dialog-overlay", t.ui.dialog.overlay.resize));
            var i = (this.oldInstances.pop() || t("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            });
            return t.fn.bgiframe && i.bgiframe(), this.instances.push(i), i
        },
        destroy: function (e) {
            var i = t.inArray(e, this.instances); - 1 != i && this.oldInstances.push(this.instances.splice(i, 1)[0]), 0 === this.instances.length && t([document, window]).unbind(".dialog-overlay"), e.remove();
            var s = 0;
            t.each(this.instances, function () {
                s = Math.max(s, this.css("z-index"))
            }), this.maxZ = s
        },
        height: function () {
            var e, i;
            return t.browser.msie && t.browser.version < 7 ? (e = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), i > e ? t(window).height() + "px" : e + "px") : t(document).height() + "px"
        },
        width: function () {
            var e, i;
            return t.browser.msie && t.browser.version < 7 ? (e = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), i > e ? t(window).width() + "px" : e + "px") : t(document).width() + "px"
        },
        resize: function () {
            var e = t([]);
            t.each(t.ui.dialog.overlay.instances, function () {
                e = e.add(this)
            }), e.css({
                width: 0,
                height: 0
            }).css({
                width: t.ui.dialog.overlay.width(),
                height: t.ui.dialog.overlay.height()
            })
        }
    }), t.extend(t.ui.dialog.overlay.prototype, {
        destroy: function () {
            t.ui.dialog.overlay.destroy(this.$el)
        }
    })
}(jQuery),
function (t) {
    t.ui = t.ui || {};
    var e = /left|center|right/,
        i = /top|center|bottom/,
        s = t.fn.position,
        n = t.fn.offset;
    t.fn.position = function (n) {
        if (!n || !n.of) return s.apply(this, arguments);
        n = t.extend({}, n);
        var a = t(n.of),
            o = a[0],
            r = (n.collision || "flip").split(" "),
            l = n.offset ? n.offset.split(" ") : [0, 0],
            h, c, u;
        return 9 === o.nodeType ? (h = a.width(), c = a.height(), u = {
            top: 0,
            left: 0
        }) : o.setTimeout ? (h = a.width(), c = a.height(), u = {
            top: a.scrollTop(),
            left: a.scrollLeft()
        }) : o.preventDefault ? (n.at = "left top", h = c = 0, u = {
            top: n.of.pageY,
            left: n.of.pageX
        }) : (h = a.outerWidth(), c = a.outerHeight(), u = a.offset()), t.each(["my", "at"], function () {
            var t = (n[this] || "").split(" ");
            1 === t.length && (t = e.test(t[0]) ? t.concat(["center"]) : i.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), t[0] = e.test(t[0]) ? t[0] : "center", t[1] = i.test(t[1]) ? t[1] : "center", n[this] = t
        }), 1 === r.length && (r[1] = r[0]), l[0] = parseInt(l[0], 10) || 0, 1 === l.length && (l[1] = l[0]), l[1] = parseInt(l[1], 10) || 0, "right" === n.at[0] ? u.left += h : "center" === n.at[0] && (u.left += h / 2), "bottom" === n.at[1] ? u.top += c : "center" === n.at[1] && (u.top += c / 2), u.left += l[0], u.top += l[1], this.each(function () {
            var e = t(this),
                i = e.outerWidth(),
                s = e.outerHeight(),
                a = parseInt(t.curCSS(this, "marginLeft", !0)) || 0,
                o = parseInt(t.curCSS(this, "marginTop", !0)) || 0,
                d = i + a + (parseInt(t.curCSS(this, "marginRight", !0)) || 0),
                p = s + o + (parseInt(t.curCSS(this, "marginBottom", !0)) || 0),
                f = t.extend({}, u),
                g;
            "right" === n.my[0] ? f.left -= i : "center" === n.my[0] && (f.left -= i / 2), "bottom" === n.my[1] ? f.top -= s : "center" === n.my[1] && (f.top -= s / 2), f.left = Math.round(f.left), f.top = Math.round(f.top), g = {
                left: f.left - a,
                top: f.top - o
            }, t.each(["left", "top"], function (e, a) {
                t.ui.position[r[e]] && t.ui.position[r[e]][a](f, {
                    targetWidth: h,
                    targetHeight: c,
                    elemWidth: i,
                    elemHeight: s,
                    collisionPosition: g,
                    collisionWidth: d,
                    collisionHeight: p,
                    offset: l,
                    my: n.my,
                    at: n.at
                })
            }), t.fn.bgiframe && e.bgiframe(), e.offset(t.extend(f, {
                using: n.using
            }))
        })
    }, t.ui.position = {
        fit: {
            left: function (e, i) {
                var s = t(window);
                s = i.collisionPosition.left + i.collisionWidth - s.width() - s.scrollLeft(), e.left = s > 0 ? e.left - s : Math.max(e.left - i.collisionPosition.left, e.left)
            },
            top: function (e, i) {
                var s = t(window);
                s = i.collisionPosition.top + i.collisionHeight - s.height() - s.scrollTop(), e.top = s > 0 ? e.top - s : Math.max(e.top - i.collisionPosition.top, e.top)
            }
        },
        flip: {
            left: function (e, i) {
                if ("center" !== i.at[0]) {
                    var s = t(window);
                    s = i.collisionPosition.left + i.collisionWidth - s.width() - s.scrollLeft();
                    var n = "left" === i.my[0] ? -i.elemWidth : "right" === i.my[0] ? i.elemWidth : 0,
                        a = "left" === i.at[0] ? i.targetWidth : -i.targetWidth,
                        o = -2 * i.offset[0];
                    e.left += i.collisionPosition.left < 0 ? n + a + o : s > 0 ? n + a + o : 0
                }
            },
            top: function (e, i) {
                if ("center" !== i.at[1]) {
                    var s = t(window);
                    s = i.collisionPosition.top + i.collisionHeight - s.height() - s.scrollTop();
                    var n = "top" === i.my[1] ? -i.elemHeight : "bottom" === i.my[1] ? i.elemHeight : 0,
                        a = "top" === i.at[1] ? i.targetHeight : -i.targetHeight,
                        o = -2 * i.offset[1];
                    e.top += i.collisionPosition.top < 0 ? n + a + o : s > 0 ? n + a + o : 0
                }
            }
        }
    }, t.offset.setOffset || (t.offset.setOffset = function (e, i) {
        /static/.test(t.curCSS(e, "position")) && (e.style.position = "relative");
        var s = t(e),
            n = s.offset(),
            a = parseInt(t.curCSS(e, "top", !0), 10) || 0,
            o = parseInt(t.curCSS(e, "left", !0), 10) || 0;
        n = {
            top: i.top - n.top + a,
            left: i.left - n.left + o
        }, "using" in i ? i.using.call(e, n) : s.css(n)
    }, t.fn.offset = function (e) {
        var i = this[0];
        return i && i.ownerDocument ? e ? this.each(function () {
            t.offset.setOffset(this, e)
        }) : n.call(this) : null
    })
}(jQuery),
function (t, e) {
    t.widget("ui.progressbar", {
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function () {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
        },
        destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), t.Widget.prototype.destroy.apply(this, arguments)
        },
        value: function (t) {
            return t === e ? this._value() : (this._setOption("value", t), this)
        },
        _setOption: function (e, i) {
            "value" === e && (this.options.value = i, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), t.Widget.prototype._setOption.apply(this, arguments)
        },
        _value: function () {
            var t = this.options.value;
            return "number" != typeof t && (t = 0), Math.min(this.options.max, Math.max(this.min, t))
        },
        _percentage: function () {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function () {
            var t = this.value(),
                e = this._percentage();
            this.oldValue !== t && (this.oldValue = t, this._trigger("change")), this.valueDiv.toggleClass("ui-corner-right", t === this.options.max).width(e.toFixed(0) + "%"), this.element.attr("aria-valuenow", t)
        }
    }), t.extend(t.ui.progressbar, {
        version: "1.8.10"
    })
}(jQuery),
function (t) {
    t.widget("ui.slider", t.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function () {
            var e = this,
                i = this.options;
            if (this._mouseSliding = this._keySliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), i.disabled && this.element.addClass("ui-slider-disabled ui-disabled"), this.range = t([]), i.range && (i.range === !0 ? (this.range = t("<div></div>"), i.values || (i.values = [this._valueMin(), this._valueMin()]), i.values.length && 2 !== i.values.length && (i.values = [i.values[0], i.values[0]])) : this.range = t("<div></div>"), this.range.appendTo(this.element).addClass("ui-slider-range"), ("min" === i.range || "max" === i.range) && this.range.addClass("ui-slider-range-" + i.range), this.range.addClass("ui-widget-header")), 0 === t(".ui-slider-handle", this.element).length && t("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle"), i.values && i.values.length)
                for (; t(".ui-slider-handle", this.element).length < i.values.length;) t("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
            this.handles = t(".ui-slider-handle", this.element).addClass("ui-state-default ui-corner-all"), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (t) {
                t.preventDefault()
            }).hover(function () {
                i.disabled || t(this).addClass("ui-state-hover")
            }, function () {
                t(this).removeClass("ui-state-hover")
            }).focus(function () {
                i.disabled ? t(this).blur() : (t(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), t(this).addClass("ui-state-focus"))
            }).blur(function () {
                t(this).removeClass("ui-state-focus")
            }), this.handles.each(function (e) {
                t(this).data("index.ui-slider-handle", e)
            }), this.handles.keydown(function (i) {
                var s = !0,
                    n = t(this).data("index.ui-slider-handle"),
                    a, o, r;
                if (!e.options.disabled) {
                    switch (i.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (s = !1, !e._keySliding && (e._keySliding = !0, t(this).addClass("ui-state-active"), a = e._start(i, n), a === !1)) return
                    }
                    switch (r = e.options.step, a = o = e.options.values && e.options.values.length ? e.values(n) : e.value(), i.keyCode) {
                    case t.ui.keyCode.HOME:
                        o = e._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        o = e._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        o = e._trimAlignValue(a + (e._valueMax() - e._valueMin()) / 5);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        o = e._trimAlignValue(a - (e._valueMax() - e._valueMin()) / 5);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (a === e._valueMax()) return;
                        o = e._trimAlignValue(a + r);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (a === e._valueMin()) return;
                        o = e._trimAlignValue(a - r)
                    }
                    return e._slide(i, n, o), s
                }
            }).keyup(function (i) {
                var s = t(this).data("index.ui-slider-handle");
                e._keySliding && (e._keySliding = !1, e._stop(i, s), e._change(i, s), t(this).removeClass("ui-state-active"))
            }), this._refreshValue(), this._animateOff = !1
        },
        destroy: function () {
            return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
        },
        _mouseCapture: function (e) {
            var i = this.options,
                s, n, a, o, r;
            return i.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), s = this._normValueFromMouse({
                x: e.pageX,
                y: e.pageY
            }), n = this._valueMax() - this._valueMin() + 1, o = this, this.handles.each(function (e) {
                var i = Math.abs(s - o.values(e));
                n > i && (n = i, a = t(this), r = e)
            }), i.range === !0 && this.values(1) === i.min && (r += 1, a = t(this.handles[r])), this._start(e, r) === !1 ? !1 : (this._mouseSliding = !0, o._handleIndex = r, a.addClass("ui-state-active").focus(), i = a.offset(), this._clickOffset = t(e.target).parents().andSelf().is(".ui-slider-handle") ? {
                left: e.pageX - i.left - a.width() / 2,
                top: e.pageY - i.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            } : {
                left: 0,
                top: 0
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, s), this._animateOff = !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (t) {
            var e = this._normValueFromMouse({
                x: t.pageX,
                y: t.pageY
            });
            return this._slide(t, this._handleIndex, e), !1
        },
        _mouseStop: function (t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._clickOffset = this._handleIndex = null, this._animateOff = !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (t) {
            var e;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, t = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, t = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), e = t / e, e > 1 && (e = 1), 0 > e && (e = 0), "vertical" === this.orientation && (e = 1 - e), t = this._valueMax() - this._valueMin(), this._trimAlignValue(this._valueMin() + e * t)
        },
        _start: function (t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
        },
        _slide: function (t, e, i) {
            var s;
            this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (s = this.values(), s[e] = i, t = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: s
            }), this.values(e ? 0 : 1), t !== !1 && this.values(e, i, !0))) : i !== this.value() && (t = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }), t !== !1 && this.value(i))
        },
        _stop: function (t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
        },
        _change: function (t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("change", t, i)
            }
        },
        value: function (t) {
            return arguments.length && (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0)), this._value()
        },
        values: function (e, i) {
            var s, n, a;
            if (arguments.length > 1 && (this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e)), !arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], a = 0; a < s.length; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function (e, i) {
            var s, n = 0;
            switch (t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
            case "disabled":
                i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.attr("disabled", "disabled"), this.element.addClass("ui-disabled")) : (this.handles.removeAttr("disabled"), this.element.removeClass("ui-disabled"));
                break;
            case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                this._animateOff = !1
            }
        },
        _value: function () {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function (t) {
            var e, i;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            for (e = this.options.values.slice(), i = 0; i < e.length; i += 1) e[i] = this._trimAlignValue(e[i]);
            return e
        },
        _trimAlignValue: function (t) {
            if (t <= this._valueMin()) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e;
            return alignValue = t - i, 2 * Math.abs(i) >= e && (alignValue += i > 0 ? e : -e), parseFloat(alignValue.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var e = this.options.range,
                i = this.options,
                s = this,
                n = this._animateOff ? !1 : i.animate,
                a, o = {}, r, l, h, c;
            this.options.values && this.options.values.length ? this.handles.each(function (e) {
                a = 100 * ((s.values(e) - s._valueMin()) / (s._valueMax() - s._valueMin())), o["horizontal" === s.orientation ? "left" : "bottom"] = a + "%", t(this).stop(1, 1)[n ? "animate" : "css"](o, i.animate), s.options.range === !0 && ("horizontal" === s.orientation ? (0 === e && s.range.stop(1, 1)[n ? "animate" : "css"]({
                    left: a + "%"
                }, i.animate), 1 === e && s.range[n ? "animate" : "css"]({
                    width: a - r + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                })) : (0 === e && s.range.stop(1, 1)[n ? "animate" : "css"]({
                    bottom: a + "%"
                }, i.animate), 1 === e && s.range[n ? "animate" : "css"]({
                    height: a - r + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                }))), r = a
            }) : (l = this.value(), h = this._valueMin(), c = this._valueMax(), a = c !== h ? 100 * ((l - h) / (c - h)) : 0, o["horizontal" === s.orientation ? "left" : "bottom"] = a + "%", this.handle.stop(1, 1)[n ? "animate" : "css"](o, i.animate), "min" === e && "horizontal" === this.orientation && this.range.stop(1, 1)[n ? "animate" : "css"]({
                width: a + "%"
            }, i.animate), "max" === e && "horizontal" === this.orientation && this.range[n ? "animate" : "css"]({
                width: 100 - a + "%"
            }, {
                queue: !1,
                duration: i.animate
            }), "min" === e && "vertical" === this.orientation && this.range.stop(1, 1)[n ? "animate" : "css"]({
                height: a + "%"
            }, i.animate), "max" === e && "vertical" === this.orientation && this.range[n ? "animate" : "css"]({
                height: 100 - a + "%"
            }, {
                queue: !1,
                duration: i.animate
            }))
        }
    }), t.extend(t.ui.slider, {
        version: "1.8.10"
    })
}(jQuery),
function (e, i) {
    function s() {
        return ++a
    }

    function n() {
        return ++o
    }
    var a = 0,
        o = 0;
    e.widget("ui.tabs", {
        options: {
            add: null,
            ajaxOptions: null,
            cache: !1,
            cookie: null,
            collapsible: !1,
            disable: null,
            disabled: [],
            enable: null,
            event: "click",
            fx: null,
            idPrefix: "ui-tabs-",
            load: null,
            panelTemplate: "<div></div>",
            remove: null,
            select: null,
            show: null,
            spinner: "<em>Loading&#8230;</em>",
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        _create: function () {
            this._tabify(!0)
        },
        _setOption: function (t, e) {
            "selected" == t ? this.options.collapsible && e == this.options.selected || this.select(e) : (this.options[t] = e, this._tabify())
        },
        _tabId: function (t) {
            return t.title && t.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + s()
        },
        _sanitizeSelector: function (t) {
            return t.replace(/:/g, "\\:")
        },
        _cookie: function () {
            var t = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + n());
            return e.cookie.apply(null, [t].concat(e.makeArray(arguments)))
        },
        _ui: function (t, e) {
            return {
                tab: t,
                panel: e,
                index: this.anchors.index(t)
            }
        },
        _cleanup: function () {
            this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function () {
                var t = e(this);
                t.html(t.data("label.tabs")).removeData("label.tabs")
            })
        },
        _tabify: function (t) {
            function s(t, i) {
                t.css("display", ""), !e.support.opacity && i.opacity && t[0].style.removeAttribute("filter")
            }
            var n = this,
                a = this.options,
                o = /^#.+/;
            this.list = this.element.find("ol,ul").eq(0), this.lis = e(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function () {
                return e("a", this)[0]
            }), this.panels = e([]), this.anchors.each(function (t, i) {
                var s = e(i).attr("href"),
                    r = s.split("#")[0],
                    l;
                r && (r === location.toString().split("#")[0] || (l = e("base")[0]) && r === l.href) && (s = i.hash, i.href = s), o.test(s) ? n.panels = n.panels.add(n.element.find(n._sanitizeSelector(s))) : s && "#" !== s ? (e.data(i, "href.tabs", s), e.data(i, "load.tabs", s.replace(/#.*$/, "")), s = n._tabId(i), i.href = "#" + s, i = n.element.find("#" + s), i.length || (i = e(a.panelTemplate).attr("id", s).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(n.panels[t - 1] || n.list), i.data("destroy.tabs", !0)), n.panels = n.panels.add(i)) : a.disabled.push(t)
            }), t ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), a.selected === i ? (location.hash && this.anchors.each(function (t, e) {
                return e.hash == location.hash ? (a.selected = t, !1) : void 0
            }), "number" != typeof a.selected && a.cookie && (a.selected = parseInt(n._cookie(), 10)), "number" != typeof a.selected && this.lis.filter(".ui-tabs-selected").length && (a.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), a.selected = a.selected || (this.lis.length ? 0 : -1)) : null === a.selected && (a.selected = -1), a.selected = a.selected >= 0 && this.anchors[a.selected] || a.selected < 0 ? a.selected : 0, a.disabled = e.unique(a.disabled.concat(e.map(this.lis.filter(".ui-state-disabled"), function (t) {
                return n.lis.index(t)
            }))).sort(), -1 != e.inArray(a.selected, a.disabled) && a.disabled.splice(e.inArray(a.selected, a.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), a.selected >= 0 && this.anchors.length && (n.element.find(n._sanitizeSelector(n.anchors[a.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(a.selected).addClass("ui-tabs-selected ui-state-active"), n.element.queue("tabs", function () {
                n._trigger("show", null, n._ui(n.anchors[a.selected], n.element.find(n._sanitizeSelector(n.anchors[a.selected].hash))[0]))
            }), this.load(a.selected)), e(window).bind("unload", function () {
                n.lis.add(n.anchors).unbind(".tabs"), n.lis = n.anchors = n.panels = null
            })) : a.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[a.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), a.cookie && this._cookie(a.selected, a.cookie), t = 0;
            for (var r; r = this.lis[t]; t++) e(r)[-1 == e.inArray(t, a.disabled) || e(r).hasClass("ui-tabs-selected") ? "removeClass" : "addClass"]("ui-state-disabled");
            if (a.cache === !1 && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs"), "mouseover" !== a.event) {
                var l = function (t, e) {
                    e.is(":not(.ui-state-disabled)") && e.addClass("ui-state-" + t)
                }, h = function (t, e) {
                        e.removeClass("ui-state-" + t)
                    };
                this.lis.bind("mouseover.tabs", function () {
                    l("hover", e(this))
                }), this.lis.bind("mouseout.tabs", function () {
                    h("hover", e(this))
                }), this.anchors.bind("focus.tabs", function () {
                    l("focus", e(this).closest("li"))
                }), this.anchors.bind("blur.tabs", function () {
                    h("focus", e(this).closest("li"))
                })
            }
            var c, u;
            a.fx && (e.isArray(a.fx) ? (c = a.fx[0], u = a.fx[1]) : c = u = a.fx);
            var d = u ? function (t, i) {
                    e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), i.hide().removeClass("ui-tabs-hide").animate(u, u.duration || "normal", function () {
                        s(i, u), n._trigger("show", null, n._ui(t, i[0]))
                    })
                } : function (t, i) {
                    e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), i.removeClass("ui-tabs-hide"), n._trigger("show", null, n._ui(t, i[0]))
                }, p = c ? function (t, e) {
                    e.animate(c, c.duration || "normal", function () {
                        n.lis.removeClass("ui-tabs-selected ui-state-active"), e.addClass("ui-tabs-hide"), s(e, c), n.element.dequeue("tabs")
                    })
                } : function (t, e) {
                    n.lis.removeClass("ui-tabs-selected ui-state-active"), e.addClass("ui-tabs-hide"), n.element.dequeue("tabs")
                };
            this.anchors.bind(a.event + ".tabs", function () {
                var t = this,
                    i = e(t).closest("li"),
                    s = n.panels.filter(":not(.ui-tabs-hide)"),
                    o = n.element.find(n._sanitizeSelector(t.hash));
                if (i.hasClass("ui-tabs-selected") && !a.collapsible || i.hasClass("ui-state-disabled") || i.hasClass("ui-state-processing") || n.panels.filter(":animated").length || n._trigger("select", null, n._ui(this, o[0])) === !1) return this.blur(), !1;
                if (a.selected = n.anchors.index(this), n.abort(), a.collapsible) {
                    if (i.hasClass("ui-tabs-selected")) return a.selected = -1, a.cookie && n._cookie(a.selected, a.cookie), n.element.queue("tabs", function () {
                        p(t, s)
                    }).dequeue("tabs"), this.blur(), !1;
                    if (!s.length) return a.cookie && n._cookie(a.selected, a.cookie), n.element.queue("tabs", function () {
                        d(t, o)
                    }), n.load(n.anchors.index(this)), this.blur(), !1
                }
                if (a.cookie && n._cookie(a.selected, a.cookie), !o.length) throw "jQuery UI Tabs: Mismatching fragment identifier.";
                s.length && n.element.queue("tabs", function () {
                    p(t, s)
                }), n.element.queue("tabs", function () {
                    d(t, o)
                }), n.load(n.anchors.index(this)), e.browser.msie && this.blur()
            }), this.anchors.bind("click.tabs", function () {
                return !1
            })
        },
        _getIndex: function (t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$=" + t + "]"))), t
        },
        destroy: function () {
            var t = this.options;
            return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function () {
                var t = e.data(this, "href.tabs");
                t && (this.href = t);
                var i = e(this).unbind(".tabs");
                e.each(["href", "load", "cache"], function (t, e) {
                    i.removeData(e + ".tabs")
                })
            }), this.lis.unbind(".tabs").add(this.panels).each(function () {
                e.data(this, "destroy.tabs") ? e(this).remove() : e(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
            }), t.cookie && this._cookie(null, t.cookie), this
        },
        add: function (t, s, n) {
            n === i && (n = this.anchors.length);
            var a = this,
                o = this.options;
            s = e(o.tabTemplate.replace(/#\{href\}/g, t).replace(/#\{label\}/g, s)), t = t.indexOf("#") ? this._tabId(e("a", s)[0]) : t.replace("#", ""), s.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
            var r = a.element.find("#" + t);
            return r.length || (r = e(o.panelTemplate).attr("id", t).data("destroy.tabs", !0)), r.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), n >= this.lis.length ? (s.appendTo(this.list), r.appendTo(this.list[0].parentNode)) : (s.insertBefore(this.lis[n]), r.insertBefore(this.panels[n])), o.disabled = e.map(o.disabled, function (t) {
                return t >= n ? ++t : t
            }), this._tabify(), 1 == this.anchors.length && (o.selected = 0, s.addClass("ui-tabs-selected ui-state-active"), r.removeClass("ui-tabs-hide"), this.element.queue("tabs", function () {
                a._trigger("show", null, a._ui(a.anchors[0], a.panels[0]))
            }), this.load(0)), this._trigger("add", null, this._ui(this.anchors[n], this.panels[n])), this
        },
        remove: function (t) {
            t = this._getIndex(t);
            var i = this.options,
                s = this.lis.eq(t).remove(),
                n = this.panels.eq(t).remove();
            return s.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(t + (t + 1 < this.anchors.length ? 1 : -1)), i.disabled = e.map(e.grep(i.disabled, function (e) {
                return e != t
            }), function (e) {
                return e >= t ? --e : e
            }), this._tabify(), this._trigger("remove", null, this._ui(s.find("a")[0], n[0])), this
        },
        enable: function (t) {
            t = this._getIndex(t);
            var i = this.options;
            return -1 != e.inArray(t, i.disabled) ? (this.lis.eq(t).removeClass("ui-state-disabled"), i.disabled = e.grep(i.disabled, function (e) {
                return e != t
            }), this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t])), this) : void 0
        },
        disable: function (t) {
            t = this._getIndex(t);
            var e = this.options;
            return t != e.selected && (this.lis.eq(t).addClass("ui-state-disabled"), e.disabled.push(t), e.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[t], this.panels[t]))), this
        },
        select: function (t) {
            if (t = this._getIndex(t), -1 == t) {
                if (!this.options.collapsible || -1 == this.options.selected) return this;
                t = this.options.selected
            }
            return this.anchors.eq(t).trigger(this.options.event + ".tabs"), this
        },
        load: function (t) {
            t = this._getIndex(t);
            var i = this,
                s = this.options,
                n = this.anchors.eq(t)[0],
                a = e.data(n, "load.tabs");
            if (this.abort(), a && (0 === this.element.queue("tabs").length || !e.data(n, "cache.tabs"))) {
                if (this.lis.eq(t).addClass("ui-state-processing"), s.spinner) {
                    var o = e("span", n);
                    o.data("label.tabs", o.html()).html(s.spinner)
                }
                return this.xhr = e.ajax(e.extend({}, s.ajaxOptions, {
                    url: a,
                    success: function (a, o) {
                        i.element.find(i._sanitizeSelector(n.hash)).html(a), i._cleanup(), s.cache && e.data(n, "cache.tabs", !0), i._trigger("load", null, i._ui(i.anchors[t], i.panels[t]));
                        try {
                            s.ajaxOptions.success(a, o)
                        } catch (r) {}
                    },
                    error: function (e, a) {
                        i._cleanup(), i._trigger("load", null, i._ui(i.anchors[t], i.panels[t]));
                        try {
                            s.ajaxOptions.error(e, a, t, n)
                        } catch (o) {}
                    }
                })), i.element.dequeue("tabs"), this
            }
            this.element.dequeue("tabs")
        },
        abort: function () {
            return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this
        },
        url: function (t, e) {
            return this.anchors.eq(t).removeData("cache.tabs").data("load.tabs", e), this
        },
        length: function () {
            return this.anchors.length
        }
    }), e.extend(e.ui.tabs, {
        version: "1.8.10"
    }), e.extend(e.ui.tabs.prototype, {
        rotation: null,
        rotate: function (e, i) {
            var s = this,
                n = this.options,
                a = s._rotate || (s._rotate = function (t) {
                    clearTimeout(s.rotation), s.rotation = setTimeout(function () {
                        var t = n.selected;
                        s.select(++t < s.anchors.length ? t : 0)
                    }, e), t && t.stopPropagation()
                });
            return i = s._unrotate || (s._unrotate = i ? function () {
                t = n.selected, a()
            } : function (t) {
                t.clientX && s.rotate(null)
            }), e ? (this.element.bind("tabsshow", a), this.anchors.bind(n.event + ".tabs", i), a()) : (clearTimeout(s.rotation), this.element.unbind("tabsshow", a), this.anchors.unbind(n.event + ".tabs", i), delete this._rotate, delete this._unrotate), this
        }
    })
}(jQuery), trulia.rent_vs_buy_lib = function () {
    function t(t) {
        var e = {};
        for (var i in t) e[i] = parseFloat(t[i]);
        return e
    }

    function e(t) {
        return Math.pow(1 + t, 1 / 12) - 1
    }

    function i(t, e, i) {
        this.raw = t, this.dateMonths = e, this.type = i
    }

    function s(t) {
        this.s = t
    }

    function n(t, e, i) {
        this.amt = t, this.termMonths = e, this.rateMonthly = i
    }
    var a = {}, o = {
            HOMESALEPROCEEDS: {
                name: "Home Sale Proceeds"
            },
            PRINCIPAL: {
                name: "Mortgage Payment (principal)"
            },
            INTEREST: {
                name: "Mortgage Payment (interest)"
            },
            INTERESTPOSTTAX: {
                name: "Mortgage Payment (interest, after mortgage interest tax deduction)"
            },
            PROPTAX: {
                name: "Property Tax"
            },
            DOWNPAYMENT: {
                name: "Down Payment"
            },
            BUYCLOSING: {
                name: "Closing Costs (buying)"
            },
            PROPTAXPOSTTAX: {
                name: "Property Tax (after income tax deduction)"
            },
            RENOVMAIN: {
                name: "Renovation &amp; maintenance costs"
            },
            INSURANCE: {
                name: "Insurance (homeowners &amp; title)"
            },
            SELLCLOSING: {
                name: "Closing costs (selling)"
            },
            UTILITIES: {
                name: "Utilities"
            },
            CAPGAINSTAX: {
                name: "Capital Gains Tax on sales proceeds"
            },
            UNPAIDPRINCIPAL: {
                name: "Unpaid mortgage principal"
            },
            SECURITY: {
                name: "Security Deposit"
            },
            RENTINSURANCE: {
                name: "Renter's Insurance"
            },
            RENT: {
                name: "Rent"
            }
        };
    for (var r in o) o[r].id = r;
    return i.prototype.present_value = function (t) {
        return this.raw / Math.pow(1 + e(t.discount), this.dateMonths)
    }, i.prototype.times = function (t, e) {
        return new i(this.raw * t, this.dateMonths, e)
    }, i.prototype.year = function () {
        return Math.ceil(this.dateMonths / 12)
    }, s.compoundingYearly = function (t, e, n, a, o) {
        for (var r = [], l = 0; n - e + 1 > l; ++l) r[l] = new i(t * Math.pow(1 + a, l), 12 * (e + l), o);
        return new s(r)
    }, s.compoundingMonthly = function (t, e, n, a, o) {
        for (var r = [], l = 0; n - e + 1 > l; ++l) r[l] = new i(t * Math.pow(1 + a, l), e + l, o);
        return new s(r)
    }, s.prototype.get = function () {
        return this.s
    }, s.prototype.each = function (t) {
        for (var e = 0; e < this.s.length; ++e) t(this.s[e])
    }, s.prototype.map = function (t) {
        for (var e = [], i = 0; i < this.s.length; ++i) e[i] = t(this.s[i]);
        return new s(e)
    }, s.prototype.times = function (t, e) {
        return this.map(function (i) {
            return i.times(t, e)
        })
    }, s.prototype.takeEachTwelfth = function (t) {
        for (var e = [], i = 0; i < this.s.length; ++i) this.s[i].dateMonths % 12 == t && e.push(this.s[i]);
        return new s(e)
    }, s.prototype.sumMonthToYear = function (t) {
        for (var e = {}, n = 0; n < this.s.length; ++n) {
            var a = this.s[n],
                o = a.year();
            e[o] ? e[o].raw += a.raw : e[o] = new i(a.raw, 12 * o, a.type)
        }
        var r = [];
        for (var l in e) r.push(e[l]);
        return new s(r)
    }, s.prototype.aggregate = function (e, i, s, n) {
        e = t(e);
        var a = [];
        this.each(function (t) {
            var n = Math.floor(t.dateMonths / 12),
                o = i ? "all" : n,
                r = s ? "all" : t.type.id;
            a[o] || (a[o] = {}), a[o][r] || (a[o][r] = 0), a[o][r] += t.present_value(e)
        });
        for (var r in a)
            for (var l in a[r]) n(r, o[l], a[r][l])
    }, n.prototype.payment = function () {
        return this.amt * this.rateMonthly / (1 - Math.pow(1 + this.rateMonthly, -this.termMonths))
    }, n.prototype.remainingPrincipal = function (t) {
        var e = this.amt * Math.pow(1 + this.rateMonthly, t - 1) - this.payment() * ((Math.pow(1 + this.rateMonthly, t - 1) - 1) / this.rateMonthly);
        return new i(e, t, o.UNPAIDPRINCIPAL)
    }, n.prototype.remainingPrincipalSeries = function (t) {
        for (var e = [], i = 0; t > i; ++i) e[i] = this.remainingPrincipal(i + 1);
        return new s(e)
    }, n.prototype.interestPaymentSeries = function (t) {
        return this.remainingPrincipalSeries(t).times(-this.rateMonthly, o.INTEREST)
    }, n.prototype.principalPaymentSeries = function (t) {
        var e = this.payment();
        return this.interestPaymentSeries(t).map(function (t) {
            return new i(-e - t.raw, t.dateMonths, o.PRINCIPAL)
        })
    }, a.costsOfBuying = function (a) {
        a = t(a);
        var r = a.homeprice,
            l = 12 * a.years,
            h = new n(r * (1 - a.downpay), 12 * a.mortgageterm, a.mortgagerate / 12),
            c = s.compoundingMonthly(r * (1 + e(a.appr)), 1, l, e(a.appr), o.HOMESALEPROCEEDS),
            u = c.get()[c.get().length - 1],
            d = h.remainingPrincipalSeries(l + 1),
            p = h.principalPaymentSeries(l).sumMonthToYear(),
            f = h.interestPaymentSeries(l).sumMonthToYear(),
            g = f.times(1 - a.inctax, o.INTERESTPOSTTAX),
            m = c.takeEachTwelfth(0).times(-a.proptaxrate, o.PROPTAX),
            v = new i(-r * a.downpay, 0, o.DOWNPAYMENT),
            b = new i(-r * a.buyclose, 0, o.BUYCLOSING),
            _ = m.times(1 - a.inctax, o.PROPTAXPOSTTAX),
            y = s.compoundingYearly(-r * a.renovmain * (1 + a.inflation), 1, a.years, a.inflation, o.RENOVMAIN),
            w = c.takeEachTwelfth(0).times(-a.insurance, o.INSURANCE),
            x = u.times(-a.sellclose, o.SELLCLOSING),
            k = s.compoundingYearly(-12 * a.utilities, 1, a.years, a.inflation, o.UTILITIES),
            C = new i(-Math.max(u.raw - r - 5e5, 0) * a.cgtax, u.dateMonths, o.CAPGAINSTAX),
            D = new i(-d.get()[d.get().length - 1].raw, l, o.UNPAIDPRINCIPAL);
        return new s([v, b].concat(p.get(), g.get(), _.get(), y.get(), w.get(), k.get(), [x, C, u, D]))
    }, a.costsOfRenting = function (e) {
        e = t(e);
        var n = 12 * e.years,
            a = e.rent,
            r = new i(-a, 0, o.SECURITY),
            l = s.compoundingYearly(-12 * a, 1, e.years, e.rentappr, o.RENT),
            h = l.times(e.rentinsurance, o.RENTINSURANCE),
            c = new i(a, n, o.SECURITY);
        return new s([r].concat(l.get(), h.get(), [c]))
    }, a
}(), $(document).ready(function () {
    $(".boxClose").click(function () {
        $(this).closest(".box").fadeOut("slow")
    })
}), Modal.prototype.activate = function e() {
    var t = this;
    this.active || (this.coverElement.insertAfter(this.element), this.strict || this.coverElement.one("click", function () {
        t.deactivate()
    }), this.element.addClass("beingModal"), this.fixed && $("body").addClass("underModal"), this.active = !0, this.listeners.activate.call(this))
}, Modal.prototype.deactivate = function i() {
    this.coverElement.remove(), $("body").removeClass("underModal"), this.element.removeClass("beingModal"), this.active = !1, this.listeners.deactivate.call(this)
},
function (t) {
    var e = [],
        i = 0,
        s;
    s = {
        init: function (s) {
            if ("number" != typeof this.data("modalId")) {
                var n, a;
                return a = t.extend({}, t.fn.modal.defaults, s), n = {
                    cover: a.overlay,
                    fixed: a.fixed,
                    strict: !a.closeable
                }, this.each(function () {
                    var s, o = this,
                        r;
                    r = {
                        element: t(this),
                        onActivate: function () {
                            t(o).triggerHandler("modal:open", [s]), t(o).show()
                        },
                        onDeactivate: function () {
                            t(o).triggerHandler("modal:close", [s]), t(o).hide()
                        }
                    }, t.extend(r, n), s = new Modal(r), a.width && t(this).css({
                        width: a.width + "px",
                        marginLeft: 0 - Math.floor(a.width / 2) + "px"
                    }), t(this).find(a.closeSelector).click(function (t) {
                        t.preventDefault(), s.deactivate()
                    }), e[i] = s, t(this).data("modalId", i), i++
                })
            }
        },
        open: function () {
            return this.each(function () {
                var i = e[t(this).data("modalId")];
                i && i.activate()
            })
        },
        close: function () {
            return this.each(function () {
                var i = e[t(this).data("modalId")];
                i && i.deactivate()
            })
        }
    }, t.fn.modal = function (e) {
        return "string" == typeof e && "function" == typeof s[e] ? s[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (t.error("Method " + e + " does not exist on jQuery.modal"), void 0) : s.init.apply(this, arguments)
    }, t.fn.modal.defaults = {
        overlay: "neutral",
        fixed: !1,
        closeable: !0,
        closeSelector: ".boxClose",
        width: !1
    }
}(jQuery),
function (t) {
    function e(e) {
        var i = t(e).find("a");
        i.hide(), t(e).append('<span class="active">' + i.html() + "</span>")
    }

    function i(e) {
        t(e).find(".active").remove(), t(e).find("a").show()
    }
    var s = {
        init: function (s) {
            return this.each(function () {
                var n, a, o = this,
                    r = {}, l = t.extend({
                        selected: 0
                    }, s);
                t(this).data("navInit") !== !0 && (t(this).data("navInit", !0), l.selected !== !1 && (e(t(this).find(">li").eq(l.selected)), t(this).data("selected", l.selected)), a = t(this).data("body"), t(this).on("click", "li a", function (s) {
                    var n = t(this).parent("li"),
                        a = t(o).data("selected");
                    "undefined" == typeof a || isNaN(a) || i(t(o).find(">li").eq(a)), e(n), t(o).trigger("nav:change", [n, n.index()]), t(o).data("selected", n.index()), "true" !== t(this).attr("follow") && s.preventDefault()
                }))
            })
        },
        select: function (e) {
            return this.each(function () {
                var s = t(this).find(">li").eq(e),
                    n = t(this).data("selected");
                e === !1 ? i(t(this).find(">li").eq(n)) : s.find(".active").length < 1 && s.find(">a").trigger("click")
            })
        }
    };
    t.fn.navigationSet = function (e) {
        return "string" == typeof e && "function" == typeof s[e] ? s[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (t.error("Method " + e + " does not exist on jQuery.navigationSet"), void 0) : s.init.apply(this, arguments)
    }
}(jQuery),
function (t) {
    var e = {}, i = {
            showThumbnails: !1,
            selected: 0,
            thumbnailSize: {
                width: "70px",
                height: "50px"
            },
            size: {
                width: "640px",
                height: "480px"
            },
            maxSize: {
                "max-width": "640px",
                "max-height": "480px"
            },
            currentCountSelector: ".photoPlayerCounterCurrent",
            maxCountSelector: ".photoPlayerCounterMax"
        }, s = {
            init: function (s) {
                return this.each(function () {
                    var n = t(this).attr("id");
                    e[n] = {
                        container: t(this),
                        photoData: t(this).data("photos"),
                        orients: {},
                        config: t.extend({}, i, s)
                    };
                    var a = e[n];
                    e[n].numPhotos = a.photoData && a.photoData.photos ? a.photoData.photos.length : 0, e[n].selectedItem = a.config.selected;
                    var o = a.selectedItem,
                        r = a.container,
                        l = a.photoData,
                        h = a.numPhotos;
                    if (r.html('<div class="photoPlayerCurrentItemContainer overlayContainer"><div class="photoPlayerCurrentItem clickable"></div><div class="photoPlayerPreviousButton man h1 overlayLeft overlayLowlight overlayMiddle clickable"><i class="iconLeftOpen"></i></div><div class="photoPlayerNextButton man h1 overlayRight overlayLowlight overlayMiddle clickable"><i class="iconRightOpen"></i></div><div class="photoPlayerCaption overlayLowlight overlayBottom txtC pvs overlayFullWidth"></div></div>'), 1 === h && r.find(".photoPlayerPreviousButton,.photoPlayerNextButton").hide(), a.config.showThumbnails) {
                        r.append('<div class="photoPlayerThumbnailContainer"><div class="photoPlayerThumbnails"></div></div>');
                        for (var c = t(this).find(".photoPlayerThumbnails"), u = "", d = 0; h > d; d++) {
                            var p = l.photos[d];
                            u += '<img data-image-index="' + d + '" src="' + p.thumbnail_url + '">'
                        }
                        c.prepend(u), c.find("img").css(a.config.thumbnailSize)
                    }
                    if (o >= 0 && h > o && r.find(".photoPlayerCurrentItem img").length < 1) {
                        var p = l.photos[o];
                        r.find(".photoPlayerCurrentItem").html('<img src="' + p.standard_url + '" />')
                    }
                    r.find(".photoPlayerCurrentItemContainer").css(a.config.size).css("margin", "auto"), r.find(".photoPlayerCurrentItem").css(a.config.size), r.find(".photoPlayerCurrentItem img").css(a.config.maxSize), t(a.config.currentCountSelector).html(o + 1), t(a.config.maxCountSelector).html(h), t(a.container).truliaPhotoPlayer("update"), t(document).keyup(function (e) {
                        e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || t("input:focus, textarea:focus, select:focus").length || r.is(":visible") && (37 == e.keyCode ? r.truliaPhotoPlayer("previous") : 39 == e.keyCode && r.truliaPhotoPlayer("next"))
                    }), t(".photoPlayerThumbnails img", this).bind("click", function (e) {
                        e.preventDefault(), r.truliaPhotoPlayer("selectItem", t(this).data("image-index"))
                    }), t(".photoPlayerCurrentItem", r).bind("click", function (t) {
                        t.preventDefault(), r.truliaPhotoPlayer("changePhoto", r.truliaPhotoPlayer("nextItem")), r.triggerHandler("photo:current", {
                            index: a.selectedItem
                        })
                    }), t(".photoPlayerNextButton", r).bind("click", function (t) {
                        t.preventDefault(), r.truliaPhotoPlayer("next")
                    }), t(".photoPlayerPreviousButton", r).bind("click", function (t) {
                        t.preventDefault(), r.truliaPhotoPlayer("previous")
                    }), r.find(".photoPlayerCurrentItem img").on("load", function (i) {
                        var s = e[r.attr("id")];
                        s.orients[s.selectedItem] ? orient = s.orients[s.selectedItem] : (t(this).removeClass("landscape portrait"), orient = this.width > this.height ? "landscape" : "portrait", s.orients[s.selectedItem] = orient), t(this).removeClass("landscape portrait").addClass(orient)
                    }), r.trigger("player:init", {
                        instance: a
                    })
                })
            },
            changePhoto: function (i) {
                var s = e[this.attr("id")],
                    n;
                if (i >= 0 && i <= s.numPhotos - 1) {
                    if (n = t.Event("photo:beforechange"), t(this).triggerHandler(n, {
                        "new": i,
                        old: s.selectedItem
                    }), n.isDefaultPrevented()) return;
                    s.selectedItem = i, t(s.container).truliaPhotoPlayer("update"), t(this).triggerHandler("photo:change", {
                        index: s.selectedItem
                    })
                }
            },
            selectItem: function (i) {
                var s = e[this.attr("id")];
                t(s.container).truliaPhotoPlayer("changePhoto", i), t(this).triggerHandler("photo:select", {
                    index: s.selectedItem
                })
            },
            next: function () {
                var i = e[this.attr("id")];
                t(i.container).truliaPhotoPlayer("changePhoto", t(i.container).truliaPhotoPlayer("nextItem")), t(this).triggerHandler("photo:next", {
                    index: i.selectedItem
                })
            },
            previous: function () {
                var i = e[this.attr("id")];
                t(i.container).truliaPhotoPlayer("changePhoto", t(i.container).truliaPhotoPlayer("previousItem")), t(this).triggerHandler("photo:previous", {
                    index: i.selectedItem
                })
            },
            nextItem: function () {
                var t = e[this.attr("id")],
                    i = t.selectedItem;
                return i = t.selectedItem + 1 > t.numPhotos - 1 ? 0 : t.selectedItem + 1
            },
            previousItem: function () {
                var t = e[this.attr("id")],
                    i = t.selectedItem;
                return t.selectedItem - 1 < 0 ? i = t.numPhotos - 1 : i -= 1, i
            },
            update: function () {
                var i = e[this.attr("id")],
                    s = i.photoData.photos[i.selectedItem],
                    n = i.container,
                    a = i.selectedItem,
                    o = n.find(".photoPlayerCurrentItem img");
                if (i.config.showThumbnails) {
                    var r = n.find(".photoPlayerThumbnails"),
                        l = r.find("img").outerWidth(!0),
                        h = r.width(),
                        c = parseInt(h / l, 10),
                        u = Math.ceil(i.numPhotos / c) || 1,
                        d = Math.ceil((a + 1) / c);
                    if (1 === d) r.css("text-indent", "0px");
                    else {
                        var p = (d - 1) * c,
                            f = p * l;
                        r.css("text-indent", -f + "px")
                    }
                    r.find("img").removeClass("photoPlayerThumbnailCurrent"), r.find("img[data-image-index=" + a + "]").addClass("photoPlayerThumbnailCurrent")
                }
                o.attr({
                    alt: s.caption,
                    src: s.standard_url
                }), s.caption ? n.find(".photoPlayerCaption").html(s.caption).show() : n.find(".photoPlayerCaption").hide(), t(i.config.currentCountSelector).html(a + 1)
            }
        };
    t.fn.truliaPhotoPlayer = function (e) {
        return "string" == typeof e && "function" == typeof s[e] ? s[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (t.error("Method " + e + " does not exist on jQuery.truliaPhotoPlayer"), void 0) : s.init.apply(this, arguments)
    }
}(jQuery), $.fn.rating = function () {
    this.each(function () {
        var t = $(this),
            e = $("ul", t),
            i = $("li", e),
            s = $(".ratingValue", t),
            n = s.attr("data-rating-title"),
            a;
        e.addClass("ratingGroup"), s.text(n), i.mouseover(function () {
            var t = $(this);
            t.nextAll("li").removeClass("ratingOn"), t.prevAll("li").addClass("ratingOn"), t.addClass("ratingOn"), a = t.text(), s.text(a)
        }), e.mouseleave(function () {
            var t = $(this);
            t.children("li").removeClass("ratingOn"), t.find("li input:checked").parent("li").trigger("mouseover"), $(".ratingOn", e).length || s.text(n)
        }), $("input:checked", t).parent("li").trigger("mouseover")
    })
},
function (t) {
    var e = {}, i = {
            init: function (s) {
                return this.each(function () {
                    s = t.extend({
                        offset: 0
                    }, s), t(this).data("scrollyInit") !== !0 && (t(this).data("scrollyInit", !0), e.$el = t(this), e.$container = t(window), e.offset = s.offset, e.$container.on("scroll", i.scrolly), e.$container.triggerHandler("scroll"))
                })
            },
            scrolly: function (t) {
                var i = e.$container.scrollTop() < e.offset;
                i && e.$el.data("scrolly") ? (e.$el.data("scrolly", !1), e.$el.triggerHandler("scrolly:atSetPoint", [!1])) : i || e.$el.data("scrolly") || (e.$el.data("scrolly", !0), e.$el.triggerHandler("scrolly:atSetPoint", [!0]))
            }
        };
    t.fn.scrolly = function (e) {
        return "string" == typeof e && "function" == typeof i[e] ? i[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (t.error("Method " + e + " does not exist on jQuery.scrolly"), void 0) : i.init.apply(this, arguments)
    }
}(jQuery),
function (t) {
    var e = function (t, e) {
        var i, s;
        if (0 >= t) i = e.min, s = 0;
        else if (t >= e.slider.width) i = e.max, s = e.slider.width;
        else if (e.step) {
            var n = Math.round(t / e.slider.stopSize);
            i = n * e.step + e.min, s = n * e.slider.stopSize
        } else i = t / e.slider.width * (e.max - e.min) + e.min, s = t;
        return {
            left: s,
            value: i
        }
    }, i = function (t, e) {
            var i;
            t <= e.min ? (t = e.min, i = 0) : t >= e.max ? (t = e.min, i = e.slider.width) : i = e.step ? (t - e.min) / e.step * e.slider.stopSize : (t - e.min) * (e.max - e.min) / e.slider.width, e.slider.handle.css({
                left: i
            }), e.slider.input.val(t).triggerHandler("change")
        }, s = {
            init: function () {
                return this.each(function () {
                    var s = t(this),
                        n = s.find(".sliderHandle"),
                        a = s.data(),
                        o = Math.floor((a.max - a.min) / a.step);
                    a.slider = {
                        width: s.width() - n.width(),
                        stopSize: (s.width() - n.width()) / o,
                        handle: n,
                        input: s.find("input"),
                        offset: 0
                    }, t(this).data(a);
                    var r = function (t) {
                        var i = s.position(),
                            n = e(t.pageX - i.left - a.slider.offset, a);
                        a.slider.input.val(n.value).triggerHandler("change"), a.slider.handle.css({
                            left: n.left
                        })
                    };
                    a.slider.handle.on("mousedown", function (e) {
                        a.slider.offset = e.pageX - a.slider.handle.offset().left, t(document).on("mousemove.slider", r).on("mouseup.slider", function (e) {
                            t(this).off("mousemove.slider", r)
                        })
                    }).on("click", function (t) {
                        t.stopPropagation()
                    }), s.on("click", r), a.value && i(a.value, a)
                })
            },
            set: function (e) {
                i(e, t(this).data())
            }
        };
    t.fn.slider = function (t) {
        return "string" == typeof t && "function" == typeof s[t] ? s[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void 0 : s.init.apply(this, arguments)
    }
}(jQuery),
function (t) {
    t.fn.sticky = function (e) {
        e = t.extend({
            scrollyOffset: 0,
            css: null,
            targetEl: null,
            toggleClass: "",
            useComputedWidth: !1,
            screenBottomOffset: null
        }, e);
        var i = t(this),
            s = "";
        if (i.data("stickyInit") !== !0) {
            if (i.data("stickyInit", !0), e.useComputedWidth) {
                var n = i.width();
                e.css = t.extend(e.css, {
                    width: n + "px"
                })
            }
            var a = t(e.targetEl).length ? t(e.targetEl) : i,
                o = a.offset().top + e.scrollyOffset;
            i.on("scrolly:atSetPoint", function (t, s) {
                var n = i;
                null !== e.css && (s ? n.css(e.css) : n.attr("style", "")), n.toggleClass("sticky").toggleClass(e.toggleClass)
            }), null !== e.screenBottomOffset && t(window).scroll(function () {
                window.pageYOffset > e.screenBottomOffset && i.data("scrollLimitInit") !== !0 && (s = i.css("top"), i.css("top", i.position().top), i.css("position", "absolute"), i.removeClass("sticky"), i.data("scrollLimitInit", !0)), window.pageYOffset < e.screenBottomOffset && i.data("scrollLimitInit") === !0 && (i.addClass("sticky"), i.css("top", s), i.css("position", ""), i.data("scrollLimitInit", !1))
            }), i.scrolly({
                offset: o
            })
        }
    }
}(jQuery),
function (t) {
    var e = {
        init: function (e) {
            return this.each(function () {
                var i, s, n, a = t.extend({
                        selected: 0,
                        body: ""
                    }, e);
                s = t(a.body).length ? t(a.body) : t(this).data("body"), s && (a.selected !== !1 && (n = t(s).find(">li").eq(a.selected)), t(this).navigationSet({
                    selected: a.selected
                }), t(s).find(">li").not(n).hide(), t(this).on("nav:change.tabSet", function (e, n, a) {
                    i = t(s);
                    var o = i.find(">li:visible");
                    o.hide(), t(this).triggerHandler("tab:hide", o), i.each(function () {
                        var e = t(this).find(">li").eq(a);
                        e.show(), t(this).triggerHandler("tab:show", e)
                    })
                }))
            })
        },
        select: function (e) {
            return t(this).navigationSet("select", e)
        }
    };
    t.fn.truliaTabs = function (i) {
        return "string" == typeof i && "function" == typeof e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? (t.error("Method " + i + " does not exist on jQuery.truliaTabs"), void 0) : e.init.apply(this, arguments)
    }
}(jQuery),
function (t) {
    var e = function (t) {
        t.hasClass("toggleArrow") && t.toggleClass("toggleArrowActive")
    }, i = {
            init: function () {
                return this.each(function () {
                    t(this).data("toggleInit") !== !0 && (t(this).data("toggleInit", !0), t(this).click(function (t) {
                        t.preventDefault(), i.toggle.apply(this)
                    }))
                })
            },
            toggle: function (i) {
                return t(this).each(function () {
                    var s, n, a, o = !1;
                    if (s = t(this), a = t(s.attr("href")), i || i === !1 ? (o = a.hasClass("hideVisually") === i, s.toggleClass("toggleActive", i), a.toggleClass("hideVisually", !i)) : (o = !0, s.toggleClass("toggleActive"), a.toggleClass("hideVisually")), o) {
                        if (e(s), n = s.data(), n.toggleText) {
                            var r = n.toggleText;
                            s.data("toggleText", s.text()), s.text(r)
                        }
                        s.trigger("toggle", [i || s.hasClass("toggleActive")])
                    }
                })
            }
        };
    t.fn.truliaToggle = function (e) {
        return "string" == typeof e && "function" == typeof i[e] ? i[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (t.error("Method " + e + " does not exist on jQuery.truliaToggle"), void 0) : i.init.apply(this, arguments)
    }
}(jQuery),
function (t) {
    var e = "",
        i;
    "undefined" != typeof document.all && navigator.userAgent.match(/MSIE ([78])/) && (i = RegExp.$1, e = '<span class="before ie ie' + i + '"></span>');
    var s = null,
        n = function () {
            var e = t(this).data("tooltip-config");
            e.disabled || (e.hover_state = "in", e.delay ? setTimeout(function () {
                "in" === e.hover_state && o(e)
            }, e.delay) : o(e))
        }, a = function () {
            var e = t(this).data("tooltip-config");
            e.hover_state = "out", e.delay ? setTimeout(function () {
                "out" === e.hover_state && l(e)
            }, e.delay) : l(e)
        }, o = function (t) {
            if (s && !t.tooltip.is(":visible")) {
                s.hide();
                var e, i, n, a = t.target.offset(),
                    o = t.offset.split("x");
                o.length > 0 && (o[0] = parseInt(o[0], 10)), o.length > 1 && (o[1] = parseInt(o[1], 10)), e = t.hasStem ? 7 : 1;
                var r = 0;
                switch (t.anchor) {
                case "right":
                    i = t.target.outerWidth(!0), n = t.target.outerHeight(), t.tooltip.css({
                        position: "absolute",
                        top: a.top - n / 2 - o[1],
                        left: a.left + i + e + o[0]
                    });
                    break;
                case "left":
                    i = t.tooltip.outerWidth(!0), n = t.target.outerHeight(), t.tooltip.css({
                        position: "absolute",
                        display: "none",
                        visibility: "visible",
                        top: a.top - n / 2 - 2 - o[1],
                        left: a.left - i - e - o[0]
                    });
                    break;
                case "bottom":
                    n = t.target.outerHeight(!0), t.tooltip.css({
                        position: "absolute",
                        top: a.top + n + e + o[1],
                        left: a.left - e + o[0]
                    });
                    break;
                case "top":
                    n = t.tooltip.outerHeight(!0), t.tooltip.css({
                        position: "absolute",
                        top: a.top - n - e - o[1],
                        left: a.left - e + o[0],
                        display: "none",
                        visibility: "visible"
                    });
                    break;
                case "topright":
                    n = t.tooltip.outerHeight(!0), i = t.tooltip.outerWidth(!0), r = t.target.outerWidth(!0), t.tooltip.css({
                        position: "absolute",
                        top: a.top - n - e - o[1],
                        left: a.left - i + r - o[0],
                        display: "none",
                        visibility: "visible"
                    });
                    break;
                case "bottomright":
                    n = t.target.outerHeight(!0), i = t.tooltip.outerWidth(!0), r = t.target.outerWidth(!0), t.tooltip.css({
                        position: "absolute",
                        top: a.top + n + e + o[1],
                        left: a.left - i + r + e - o[0],
                        display: "none",
                        visibility: "visible"
                    })
                }
                t.tooltip.fadeIn(), "hover" === t.trigger && (t.tooltip.on("mouseenter", function () {
                    t.hover_state = "in"
                }), t.tooltip.on("mouseleave", function () {
                    l(t)
                }))
            }
        }, r = function (e, i, s, n) {
            var a = t(e).data(n);
            "undefined" != typeof a && (i[s] = a)
        }, l = function (t) {
            t.tooltip.fadeOut()
        }, h = {
            init: function (o) {
                return o = t.extend({
                    anchor: "right",
                    selector: !1,
                    trigger: "hover",
                    skin: "tooltipLight",
                    delay: 200,
                    offset: "0x0",
                    content: "",
                    hasStem: !0,
                    css: {}
                }, o), this.each(function () {
                    var l = t(this).data("tooltipConfig"),
                        h, c = t.extend({}, o);
                    if (r(this, c, "anchor", "tooltipAnchor"), r(this, c, "skin", "tooltipSkin"), !l) {
                        if (c.selector !== !1) h = t(c.selector).addClass(c.skin);
                        else {
                            var u = c.content || t(this).data("tooltip");
                            h = t('<span class="tooltip ' + c.skin + '">' + e + u + "</span>"), i && h.addClass("ie" + i), t("body").append(h)
                        }
                        null === s ? s = t(h) : s.add(h);
                        var d = {
                            right: "Left",
                            left: "Right",
                            bottom: "Top",
                            top: "Bottom",
                            topright: "BottomRight",
                            bottomright: "TopRight"
                        };
                        c.hasStem && h.addClass("tooltipStem" + d[c.anchor]), h.css(c.css), l = {
                            target: t(this),
                            tooltip: h,
                            trigger: c.trigger,
                            delay: c.delay,
                            anchor: c.anchor,
                            offset: c.offset,
                            hasStem: c.hasStem
                        }, t(this).data("tooltip-config", l), "hover" === c.trigger && (t(this).on("mouseenter", n), t(this).on("mouseleave", a))
                    }
                })
            },
            toggle: function () {
                return this.each(function () {
                    var e = t(this).data("tooltip-config");
                    e && e.tooltip && e.tooltip.text() && (e.tooltip.is(":visible") ? l(e) : o(e))
                })
            },
            enable: function () {
                return this.each(function () {
                    var e = t(this).data("tooltip-config");
                    e && e.tooltip && e.tooltip.text() && (e.disabled = !1, t(this).data("tooltip-config", e))
                })
            },
            disable: function () {
                return this.each(function () {
                    var e = t(this).data("tooltip-config");
                    e && e.tooltip && e.tooltip.text() && (e.disabled = !0, t(this).data("tooltip-config", e))
                })
            },
            show: function () {
                return this.each(function () {
                    var e = t(this).data("tooltip-config");
                    e && e.tooltip && e.tooltip.text() && o(e)
                })
            },
            hide: function () {
                return this.each(function () {
                    var e = t(this).data("tooltip-config");
                    e && e.tooltip && l(e)
                })
            },
            content: function (e) {
                return this.each(function () {
                    var i = t(this).data("tooltip-config");
                    i.tooltip && i.tooltip.html(e)
                })
            }
        };
    t.fn.tooltip = function (e) {
        return h[e] ? h[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (t.error("Method " + e + " does not exist on jQuery.tooltips"), void 0) : h.init.apply(this, arguments)
    }
}(jQuery), trulia.rent_vs_buy = function () {
    var t = {};
    return t.ui_settings = {
        advancedShowing: !1,
        tableShowing: !1,
        state: "default",
        topLimit: $("#chartCol").offset().top
    }, t.default_settings = {
        metro: 41884,
        monthly_rent: 2600,
        sale_price: 5e5,
        years_owned: 7,
        tax_bracket: 25,
        mortgage_rate: 4.5,
        down_payment: 20,//Default was 30years
        annual_property_tax: 1.35,
        mortgage_term: 30,
        capital_gains: 15,
        buying_closing_costs: 4,
        selling_closing_costs: 8,
        homeowners_insurance: .46,
        renovations: 1,
        utilities: 100,
        sale_appreciation: 2,
        rental_insurance: 1.32,
        rental_appreciation: 3,
        inflation: 2,
        discount_rate: 3.5
    }, t.defaults_populated = !1, t.get_calc_values = function () {
        var t = {
            metro: $("#metro").val(),
            monthly_rent: $("#monthly_rent").val(),
            sale_price: $("#sale_price").val(),
            years_owned: $("#years_owned").val(),
            tax_bracket: $("#tax_bracket").val(),
            mortgage_rate: $("#mortgage_rate").val(),
            down_payment: parseFloat($("#down_payment").val() / 100),
            annual_property_tax: parseFloat($("#annual_property_tax").val() / 100),
            mortgage_term: $("#mortgage_term").val(),
            capital_gains: parseFloat($("#capital_gains").val() / 100),
            buying_closing_costs: parseFloat($("#buying_closing_costs").val() / 100),
            selling_closing_costs: parseFloat($("#selling_closing_costs").val() / 100),
            homeowners_insurance: parseFloat($("#homeowners_insurance").val() / 100),
            renovations: parseFloat($("#renovations").val() / 100),
            utilities: $("#utilities").val(),
            sale_appreciation: parseFloat($("#sale_appreciation").val() / 100),
            median_property_tax: parseFloat($("#median_property_tax").val() / 100),
            rental_insurance: parseFloat($("#rental_insurance").val() / 100),
            rental_appreciation: parseFloat($("#rental_appreciation").val() / 100),
            inflation: parseFloat($("#inflation").val() / 100),
            discount_rate: parseFloat($("#discount_rate").val() / 100)
        };
        return t
    }, t.make_chart = function () {
        if (trulia.rent_vs_buy.defaults_populated) {

            var t = trulia.rent_vs_buy.values_to_params(),
                e = trulia.rent_vs_buy_lib.costsOfBuying(t),
                i = trulia.rent_vs_buy_lib.costsOfRenting(t),
                s = 0,
                n = 0,
                a = $("#rent_bar"),
                o = $("#buy_bar"),
                r, l, h, c = "backgroundHighlight backgroundOMG",
                u = "backgroundHighlight",
                d = "backgroundOMG",
                p = 370,
                f = 100;
            e.aggregate(t, !1, !0, function (t, e, i) {
                s += i
            }), i.aggregate(t, !1, !0, function (t, e, i) {
                n += i
            }), s = Math.round(Math.abs(s)), n = Math.round(Math.abs(n));
            var g = (n - s) / n,
                m = (s - n) / s,
                v = g;
            $("#short_answer").html(trulia.rent_vs_buy.short_answer(g, m, v)), r = Math.max(f, Math.abs(g * p)), l = g >= 0 ? p : Math.max(f, (1 - Math.abs(v)) * p), h = 0 > g ? p : Math.max(f, (1 - Math.abs(m)) * p), a.css({
                height: l,
                "margin-top": p - l
            }), o.css({
                height: h,
                "margin-top": p - h
            }), $(".value", a).html("R" + trulia.util.numberFormat(Math.round(n / $("#years_owned").val() / 12)) + ' <span class=""> / month</span>'), $(".value", o).html("R" + trulia.util.numberFormat(Math.round(s / $("#years_owned").val() / 12)) + ' <span class=""> / month</span>'), a.removeClass(c).addClass(g > 0 ? d : u), o.removeClass(c).addClass(0 > g ? d : u)
            var forceSameValueInterval = setInterval( () => {

                $('#rent_bar span.label').text($('#monthly_rent_text').text() + ' / month');
                clearInterval(forceSameValueInterval);
            },1500);
        }
    }, t.values_to_params = function () {
        var t = trulia.rent_vs_buy.get_calc_values();

        return {
            rent: t.monthly_rent,
            homeprice: t.sale_price,
            years: t.years_owned,
            mortgageterm: t.mortgage_term,
            mortgagerate: t.mortgage_rate,
            downpay: t.down_payment,
            discount: t.discount_rate,
            appr: t.sale_appreciation,
            inctax: t.tax_bracket,
            proptaxrate: t.annual_property_tax,
            buyclose: t.buying_closing_costs,
            sellclose: t.selling_closing_costs,
            renovmain: t.renovations,
            inflation: t.inflation,
            insurance: t.homeowners_insurance,
            cgtax: t.capital_gains,
            rentappr: t.rental_appreciation,
            rentinsurance: t.rental_insurance,
            utilities: t.utilities
        }
    }, t.populate_defaults = function () {
        $("fieldset input[type=text]").each(function () {
            var t = $(this),
                e = t.attr("id");
            t.attr("value") || t.val(trulia.rent_vs_buy.default_settings[e])
        }), trulia.rent_vs_buy.defaults_populated = !0
    }, t.fetch_parameters = function (t) {
        $.ajax({
            url: _SITE_ROOT + "_ajax/RentVsBuy/RentVsBuy/params/",
            type: "GET",
            dataType: "json",
            data: t,
            success: function (t) {
                null !== t && t.success && t.params && ($("#annual_property_tax").val(parseFloat(100 * t.params.proptaxrate).toFixed(2)), $("#sale_appreciation").val(parseFloat(100 * t.params.appr).toFixed(2)), $("#rental_appreciation").val(parseFloat(100 * t.params.appr).toFixed(2)), $("#rental_srp").attr("href", t.params.rental_srp).find(".name").html(t.params.location_name), $("#sale_srp").attr("href", t.params.sale_srp).find(".name").html(t.params.location_name)), trulia.rent_vs_buy.make_chart()
            },
            error: function () {
                trulia.rent_vs_buy.make_chart()
            }
        })
    }, t.short_answer = function (t, e, i) {
        var s = trulia.util.numberFormat(Math.round(100 * Math.abs(i))) + "%",
            n = trulia.util.numberFormat(Math.round(100 * Math.abs(e))) + "%",
            a = [{
                min: -99999,
                max: -.02,
                statement: "<strong>Renting</strong> is " + n + " cheaper."
            }, {
                min: -.01,
                max: .01,
                statement: "Costs are about the <strong>same</strong>."
            }, {
                min: .02,
                max: 99999,
                statement: "<strong>Buying</strong> is " + s + " cheaper."
            }];
        t = Math.round(100 * t) / 100;
        for (var o = 0; o < a.length; o++) {
            var r = a[o];
            if (t >= r.min && t <= r.max) return r.statement
        }
        
    }, t
}(), trulia.ready(function () {
    function t(t) {
        if (!is_IE8() && !is_IE7() && (void 0 === t || e.advancedShowing || e.tableShowing)) {
            var i = $("#bottom_limit").offset().top - 15,
                s = $("#chart_wrapper"),
                n = s.offset().top + s.outerHeight();
            "scrolled" !== e.state && $(window).scrollTop() >= e.topLimit && (i > n + 5 || s.offset().top - $(window).scrollTop() > 5) ? (e.state = "scrolled", s.css("top", "5px"), $("body").addClass("scrolled").removeClass("bottom_fixed")) : "fixed" !== e.state && n >= i && $(window).scrollTop() >= e.topLimit ? (e.state = "fixed", $("body").removeClass("scrolled").addClass("bottom_fixed"), s.css("top", i - s.outerHeight())) : "default" !== e.state && $(window).scrollTop() < e.topLimit && (e.state = "default", $("body").removeClass("scrolled").removeClass("bottom_fixed"), s.removeAttr("style"))
        }
    }

    var e = trulia.rent_vs_buy.ui_settings;
    trulia.rent_vs_buy.populate_defaults(), trulia.rent_vs_buy.make_chart(), $("#metro").on("change", function () {
        var t = {
            msa: $(this).val()
        };
        "AVERAGE" === t.msa ? ($("#annual_property_tax").val(trulia.rent_vs_buy.default_settings.annual_property_tax), $("#sale_appreciation").val(trulia.rent_vs_buy.default_settings.sale_appreciation), $("#rental_appreciation").val(trulia.rent_vs_buy.default_settings.rental_appreciation), trulia.rent_vs_buy.make_chart()) : trulia.rent_vs_buy.fetch_parameters(t)
    }), $("#monthly_rent").on("change", function (t) {
        $("#monthly_rent_text").html("R" + trulia.util.numberFormat($(this).val())), trulia.rent_vs_buy.make_chart()
        $('#rent_bar span.label').text($('#monthly_rent_text').text() + ' / month');
    }), $("#sale_price").on("change", function (t) {
        $("#sale_price_text").html("R" + trulia.util.numberFormat($(this).val())), trulia.rent_vs_buy.make_chart()
    }), $("#tax_bracket").on("change", function (t) {
        $("#tax_bracket_text").html(parseFloat(100 * $(this).val()).toFixed(0) + "%"), "0" !== $(this).val() && $("#no_itemize").prop("checked", !1), trulia.rent_vs_buy.make_chart()
    }), $("#mortgage_rate").on("change", function (t) {
        $("#mortgage_rate_text").html(parseFloat(100 * $(this).val()).toFixed(2) + "%"), trulia.rent_vs_buy.make_chart()
    }), $("#years_owned").on("change", function () {
        var t = +$(this).val();
        $("#years_owned_text").html(t + " year" + (t > 1 ? "s" : "")), t > +$("#mortgage_term").val() && $("#mortgage_term").val(t), trulia.rent_vs_buy.make_chart()
    }), $(".advanced_setting").on("change", function () {
        var t = $(this),
            e = +t.val();
        0 > e && t.val(0), t.hasClass("percentage") && e > 100 && t.val(100), trulia.rent_vs_buy.make_chart()
    }), $("#mortgage_term").on("change", function () {
        var t = +$(this).val();
        t > 30 && $(this).val(30), 1 > t && $(this).val(1), t < +$("#years_owned").val() && ($("#years_owned").val(t), $("#years_owned").change())
    }), $(".slider").slider(), $(".adv_tooltip").tooltip({
        anchor: "right",
        hasStem: !0,
        css: {
            width: "17em"
        }
    }), $(".metro_tooltip").tooltip({
        anchor: "top",
        hasStem: !0
    }), $(".chart_tooltip").tooltip({
        anchor: "top",
        hasStem: !0
    }), $("#show_advanced").click(function (i) {
        i.preventDefault(), e.advancedShowing = $("#advanced_settings").toggle().is(":visible"), t(), $("#word_show").toggle(), $("#word_hide").toggle()
    }), $("#chartShower").click(function (i) {
        i.preventDefault(), e.tableShowing = $("#taxTable").toggle().is(":visible"), t(), $("#down_table").toggle(), $("#up_table").toggle()
    }), $("#no_itemize").on("change", function (t) {
        var e = $("#tax_bracket"),
            i = e.val(),
            s = e.data("user_set"),
            n;
        i > 0 && e.data("user_set", i), n = "0" === i ? s : 0, e.val(n), e.change()
    });

    var i = _.debounce(t, 10);
    $(window).on("scroll", i)
});