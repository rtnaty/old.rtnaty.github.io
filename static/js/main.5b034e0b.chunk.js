(this.webpackJsonpmamitina_portfolio = this.webpackJsonpmamitina_portfolio || []).push([
    [0], {
        12: function(e, a, t) {
            e.exports = t(21)
        },
        17: function(e, a, t) {},
        20: function(e, a, t) {},
        21: function(e, a, t) {
            "use strict";
            t.r(a);
            var n = t(0),
                l = t.n(n),
                r = t(10),
                c = t.n(r),
                s = (t(17), t(1)),
                o = t(2),
                i = t(3),
                m = t(7),
                u = t(8),
                d = t(11),
                p = t.n(d),
                h = (t(20), function(e) {
                    Object(i.a)(t, e);
                    var a = Object(m.a)(t);

                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            if (this.props.data) var e = this.props.data.name,
                                a = this.props.data.occupation,
                                t = this.props.data.description,
                                n = this.props.data.address.city,
                                r = this.props.data.social.map((function(e) {
                                    return l.a.createElement("li", {
                                        key: e.name
                                    }, l.a.createElement("a", {
                                        href: e.url
                                    }, l.a.createElement("i", {
                                        className: e.className
                                    })))
                                }));
                            return l.a.createElement("header", {
                                id: "home"
                            }, l.a.createElement("div", {
                                className: "row banner"
                            }, l.a.createElement("div", {
                                className: "banner-text"
                            }, l.a.createElement("h1", {
                                className: "responsive-headline"
                            }, "HELLO,", l.a.createElement("br", null), "I'm ", e, "."), l.a.createElement("h3", null, l.a.createElement("span", null, a), " bas\xe9 \xe0 ", n, ".", l.a.createElement("br", null), t, "."), l.a.createElement("hr", null), l.a.createElement("ul", {
                                className: "social"
                            }, r))), l.a.createElement("p", {
                                className: "scrolldown"
                            }, l.a.createElement("a", {
                                className: "smoothscroll",
                                href: "#about"
                            }, l.a.createElement("i", {
                                className: "icon-down-circle"
                            }))))
                        }
                    }]), t
                }(n.Component)),
                E = t(5),
                f = t(4),
                v = function(e) {
                    function a() {
                        return Object(s.a)(this, a), Object(E.a)(this, Object(f.a)(a).apply(this, arguments))
                    }
                    return Object(i.a)(a, e), Object(o.a)(a, [{
                        key: "render",
                        value: function() {
                            if (this.props.data) var e = this.props.data.social.map((function(e) {
                                return l.a.createElement("li", {
                                    key: e.name
                                }, l.a.createElement("a", {
                                    href: e.url
                                }, l.a.createElement("i", {
                                    className: e.className
                                })))
                            }));
                            return l.a.createElement("footer", null, l.a.createElement("div", {
                                className: "row"
                            }, l.a.createElement("div", {
                                className: "twelve columns"
                            }, l.a.createElement("ul", {
                                className: "social-links"
                            }, e), l.a.createElement("ul", {
                                className: "copyright"
                            }, l.a.createElement("li", null, l.a.createElement("span", {
                                className: "love"
                            }, "Made with ", l.a.createElement("i", {
                                className: "fa fa-heart pulse"
                            }), " in", l.a.createElement("a", {
                                href: "https://www.google.com/maps/place/Montr\xe9al,+QC/@45.5576996,-74.0104841,10z/data=!3m1!4b1!4m5!3m4!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5016889!4d-73.567256",
                                rel: "noopener noreferrer",
                                target: "_blank"
                            }, " Montreal", l.a.createElement("br", null), "\xa9 Copyright 2023 - Mamitina"))))), l.a.createElement("div", {
                                id: "go-top"
                            }, l.a.createElement("a", {
                                className: "smoothscroll",
                                title: "Back to Top",
                                href: "#home"
                            }, l.a.createElement("i", {
                                className: "icon-up-open"
                            })))))
                        }
                    }]), a
                }(n.Component),
                N = function(e) {
                    function a() {
                        return Object(s.a)(this, a), Object(E.a)(this, Object(f.a)(a).apply(this, arguments))
                    }
                    return Object(i.a)(a, e), Object(o.a)(a, [{
                        key: "render",
                        value: function() {
                            // Get the language preference from localStorage
                            const language = localStorage.getItem('userLanguage') || "fr"; // Set the desired language ('en' or 'fr')

                            // Define button text based on language
                            const buttonText = language === 'fr' ? 'Télécharger mon CV' : 'Download My CV';
                            if (this.props.data) var e = this.props.data.name,
                                a = "images/" + this.props.data.image,
                                t = this.props.data.bio,
                                n = this.props.data.address.street,
                                r = this.props.data.address.city,
                                c = this.props.data.address.state,
                                s = this.props.data.address.zip,
                                o = this.props.data.phone,
                                i = this.props.data.email;
                            return l.a.createElement("section", {
                                id: "about"
                            }, l.a.createElement("div", {
                                className: "row"
                            }, l.a.createElement("div", {
                                className: "three columns"
                            }, l.a.createElement("img", {
                                className: "profile-pic",
                                src: a,
                                alt: "Tsilavina M. Profile Pic"
                            })), l.a.createElement("div", {
                                className: "nine columns main-col"
                            }, l.a.createElement("h2", null, "About Me"), l.a.createElement("p", null, t), l.a.createElement("div", {
                                className: "row"
                            }, l.a.createElement("div", {
                                className: "columns contact-details"
                            }, l.a.createElement("h3", null, "Contact Details"), l.a.createElement("p", {
                                className: "address"
                            }, l.a.createElement("span", null, e), l.a.createElement("br", null), l.a.createElement("span", null, n, l.a.createElement("br", null), r, " ", c, ", ", s), l.a.createElement("br", null), l.a.createElement("span", null, o), l.a.createElement("br", null), l.a.createElement("span", null, i))), l.a.createElement("div", {
                                className: "columns download"
                            }, l.a.createElement("p", null, l.a.createElement("a", {
                                href: `./file/mamitina_cv_${language}.pdf`,
                                target: "_blank",
                                className: "button"
                            }, l.a.createElement("i", {
                                className: "fa fa-download"
                            }), `${buttonText}`)))))))
                        }
                    }]), a
                }(n.Component),
                b = function(e) {
                    function a() {
                        return Object(s.a)(this, a), Object(E.a)(this, Object(f.a)(a).apply(this, arguments))
                    }
                    return Object(i.a)(a, e), Object(o.a)(a, [{
                        key: "render",
                        value: function() {
                            if (this.props.data) var e = this.props.data.skillmessage,
                                a = this.props.data.education.map((function(e) {
                                    return l.a.createElement("div", {
                                        key: e.school
                                    }, l.a.createElement("h3", null, e.school), l.a.createElement("p", {
                                        className: "info"
                                    }, e.degree, " ", l.a.createElement("span", null, "\u2022"), l.a.createElement("em", {
                                        className: "date"
                                    }, e.graduated)), l.a.createElement("p", null, e.description))
                                })),
                                t = this.props.data.work.map((function(e) {
                                    return l.a.createElement("div", {
                                        key: e.company
                                    }, l.a.createElement("h3", null, e.company), l.a.createElement("p", {
                                        className: "info"
                                    }, e.title, l.a.createElement("span", null, "\u2022"), " ", l.a.createElement("em", {
                                        className: "date"
                                    }, e.years)), l.a.createElement("p", null, e.description))
                                })),
                                n = this.props.data.skills.map((function(e) {
                                    var a = "bar-expand " + e.name.toLowerCase();
                                    return l.a.createElement("li", {
                                        key: e.name
                                    }, l.a.createElement("span", {
                                        style: {
                                            width: e.level
                                        },
                                        className: a
                                    }), l.a.createElement("em", null, e.name))
                                }));
                            return l.a.createElement("section", {
                                id: "resume"
                            }, l.a.createElement("div", {
                                className: "row work"
                            }, l.a.createElement("div", {
                                className: "three columns header-col"
                            }, l.a.createElement("h1", null, l.a.createElement("span", null, "Exp\xe9riences"))), l.a.createElement("div", {
                                className: "nine columns main-col"
                            }, t)), l.a.createElement("div", {
                                className: "row education"
                            }, l.a.createElement("div", {
                                className: "three columns header-col"
                            }, l.a.createElement("h1", null, l.a.createElement("span", null, "Formation"))), l.a.createElement("div", {
                                className: "nine columns main-col"
                            }, l.a.createElement("div", {
                                className: "row item"
                            }, l.a.createElement("div", {
                                className: "twelve columns"
                            }, a)))), l.a.createElement("div", {
                                className: "row skill"
                            }, l.a.createElement("div", {
                                className: "three columns header-col"
                            }, l.a.createElement("h1", null, l.a.createElement("span", null, "Comp\xe9tences"))), l.a.createElement("div", {
                                className: "nine columns main-col"
                            }, l.a.createElement("p", null, e), l.a.createElement("div", {
                                className: "bars"
                            }, l.a.createElement("ul", {
                                className: "skills"
                            }, n)))))
                        }
                    }]), a
                }(n.Component),
                w = function(e) {
                    Object(i.a)(t, e);
                    var a = Object(m.a)(t);

                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = a.call(this, e)).state = {
                            foo: "bar",
                            resumeData: {}
                        }, u.a.initialize("UA-110570651-1"), u.a.pageview(window.location.pathname), n
                    }
                    return Object(o.a)(t, [{
                        key: "getResumeData",
                        value: function() {
                            const language = localStorage.getItem('userLanguage') || "fr"; // Set the desired language ('en' or 'fr')
                            p.a.ajax({
                                url: `/resume_data_${language}.json`,
                                dataType: "json",
                                cache: !1,
                                success: function(e) {
                                    this.setState({
                                        resumeData: e
                                    })
                                }.bind(this),
                                error: function(e, a, t) {
                                    console.log(t), alert(t)
                                }
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.getResumeData()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return l.a.createElement("div", {
                                className: "App"
                            }, l.a.createElement(h, {
                                data: this.state.resumeData.main
                            }), l.a.createElement(N, {
                                data: this.state.resumeData.main
                            }), l.a.createElement(b, {
                                data: this.state.resumeData.resume
                            }), l.a.createElement(v, {
                                data: this.state.resumeData.main
                            }))
                        }
                    }]), t
                }(n.Component),
                g = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function k(e) {
                navigator.serviceWorker.register(e).then((function(e) {
                    e.onupdatefound = function() {
                        var a = e.installing;
                        a.onstatechange = function() {
                            "installed" === a.state && (navigator.serviceWorker.controller ? console.log("New content is available; please refresh.") : console.log("Content is cached for offline use."))
                        }
                    }
                })).catch((function(e) {
                    console.error("Error during service worker registration:", e)
                }))
            }
            c.a.render(l.a.createElement(w, null), document.getElementById("root")),
                function() {
                    if ("serviceWorker" in navigator) {
                        if (new URL("", window.location).origin !== window.location.origin) return;
                        window.addEventListener("load", (function() {
                            var e = "".concat("", "/service-worker.js");
                            g ? function(e) {
                                fetch(e).then((function(a) {
                                    404 === a.status || -1 === a.headers.get("content-type").indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                        e.unregister().then((function() {
                                            window.location.reload()
                                        }))
                                    })) : k(e)
                                })).catch((function() {
                                    console.log("No internet connection found. App is running in offline mode.")
                                }))
                            }(e) : k(e)
                        }))
                    }
                }()
        }
    },
    [
        [12, 1, 2]
    ]
]);