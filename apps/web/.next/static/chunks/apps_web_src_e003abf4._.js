(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/apps/web/src/components/LiveVideo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LiveVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function LiveVideo({ jcd }) {
    const venueLiveUrls = {
        "01": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=01",
        "02": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=02",
        "03": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=03",
        "04": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=04",
        "05": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=05",
        "06": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=06",
        "07": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=07",
        "08": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=08",
        "09": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=09",
        "10": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=10",
        "11": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=11",
        "12": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=12",
        "13": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=13",
        "14": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=14",
        "15": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=15",
        "16": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=16",
        "17": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=17",
        "18": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=18",
        "19": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=19",
        "20": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=20",
        "21": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=21",
        "22": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=22",
        "23": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=23",
        "24": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=24"
    };
    const url = venueLiveUrls[jcd];
    return url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full aspect-video",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: url,
            className: "w-full h-full rounded border",
            allow: "autoplay; fullscreen",
            allowFullScreen: true
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/LiveVideo.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/LiveVideo.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-600 text-center py-4",
        children: "ライブ映像は見つかりません"
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/LiveVideo.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = LiveVideo;
var _c;
__turbopack_context__.k.register(_c, "LiveVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/app/[jcd]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VenuePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$LiveVideo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/LiveVideo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function VenuePage({ params }) {
    _s();
    const { jcd } = params;
    const rno = "1";
    const date = "20250505";
    const [racers, setRacers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VenuePage.useEffect": ()=>{
            fetch(`/api/race-entry?jcd=${jcd}&rno=${rno}&date=${date}`).then({
                "VenuePage.useEffect": (res)=>res.json()
            }["VenuePage.useEffect"]).then(setRacers).catch(console.error);
        }
    }["VenuePage.useEffect"], [
        jcd
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/2 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$LiveVideo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    jcd: jcd
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/[jcd]/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/[jcd]/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/2 p-4 bg-gray-50 border-l overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mb-4",
                        children: "出走表"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/[jcd]/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    racers.map((racer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 p-3 rounded border bg-white flex gap-4 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xl font-bold w-6",
                                    children: racer.lane
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/[jcd]/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-bold",
                                            children: [
                                                racer.name,
                                                "（",
                                                racer.rank,
                                                "）"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/[jcd]/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-500",
                                            children: [
                                                racer.registration,
                                                " / ",
                                                racer.branch
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/[jcd]/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "年齢: ",
                                                racer.age,
                                                " 歳 / 体重: ",
                                                racer.weight,
                                                "kg"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/[jcd]/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "勝率: ",
                                                racer.winRate
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/[jcd]/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "ST: ",
                                                racer.st,
                                                " / FL: ",
                                                racer.fl
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/[jcd]/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/[jcd]/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, racer.lane, true, {
                            fileName: "[project]/apps/web/src/app/[jcd]/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/[jcd]/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/[jcd]/page.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(VenuePage, "fod+z3Mhx5oC0YVVe0DSsCrj2d0=");
_c = VenuePage;
var _c;
__turbopack_context__.k.register(_c, "VenuePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=apps_web_src_e003abf4._.js.map