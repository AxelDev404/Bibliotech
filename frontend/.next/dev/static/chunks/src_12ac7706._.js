(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AppWrapper.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$Authentication$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/Authentication/authSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function AppWrapper(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "f53b9a93d9c89cc3956f900244cb663626d616ed6a5a6a79aa146b87af717368") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f53b9a93d9c89cc3956f900244cb663626d616ed6a5a6a79aa146b87af717368";
    }
    const { children } = t0;
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_AppWrapperUseSelector);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] !== dispatch || $[2] !== router) {
        t1 = ({
            "AppWrapper[useEffect()]": ()=>{
                const fetchUser = {
                    "AppWrapper[useEffect() > fetchUser]": async ()=>{
                        const resultAction = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$Authentication$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckUserAPI"])());
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$Authentication$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckUserAPI"].fulfilled.match(resultAction)) {
                            setReady(true);
                        }
                        if (!resultAction.payload?.loggedIn) {
                            router.replace("/");
                        }
                    }
                }["AppWrapper[useEffect() > fetchUser]"];
                fetchUser();
            }
        })["AppWrapper[useEffect()]"];
        t2 = [
            dispatch,
            router
        ];
        $[1] = dispatch;
        $[2] = router;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (!ready) {
        let t3;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center min-h-screen bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"
                }, void 0, false, {
                    fileName: "[project]/src/components/AppWrapper.jsx",
                    lineNumber: 55,
                    columnNumber: 84
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AppWrapper.jsx",
                lineNumber: 55,
                columnNumber: 12
            }, this);
            $[5] = t3;
        } else {
            t3 = $[5];
        }
        return t3;
    }
    return children;
}
_s(AppWrapper, "fgQ2lAZOIouCNfEAo2lOt5e6d5A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = AppWrapper;
function _AppWrapperUseSelector(state) {
    return state.auth;
}
var _c;
__turbopack_context__.k.register(_c, "AppWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PrivateRoute.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrivateRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function PrivateRoute(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "364677d63cf4ada345e8833d4c52e4f49158a9e35ce110b5ff7c3ba378d43400") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "364677d63cf4ada345e8833d4c52e4f49158a9e35ce110b5ff7c3ba378d43400";
    }
    const { children } = t0;
    const { user, checked } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_PrivateRouteUseSelector);
    if (!checked) {
        return null;
    }
    return user ? children : null;
}
_s(PrivateRoute, "cH3vEDCKm2O5t46oYhxra2ICq4Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = PrivateRoute;
function _PrivateRouteUseSelector(state) {
    return state.auth;
}
var _c;
__turbopack_context__.k.register(_c, "PrivateRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SideBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SideBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
//-------------------STATE AND FUNCTION-------------------//
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$Authentication$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/Authentication/authSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
//-------------------ICONS-------------------//
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Close.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ImportContacts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ImportContacts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Settings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Logout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Logout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FormatListBulleted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/FormatListBulleted.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Dashboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Badge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PeopleAlt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PeopleAlt.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function SideBar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(88);
    if ($[0] !== "97bfdf149901b49023f558089d8021e33310049c7f0f496aec060c258b871a96") {
        for(let $i = 0; $i < 88; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "97bfdf149901b49023f558089d8021e33310049c7f0f496aec060c258b871a96";
    }
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    if ($[1] !== isSidebarOpen) {
        t0 = ({
            "SideBar[toggleSidebar]": ()=>setIsSidebarOpen(!isSidebarOpen)
        })["SideBar[toggleSidebar]"];
        $[1] = isSidebarOpen;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const toggleSidebar = t0;
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[3] !== dispatch || $[4] !== router) {
        t1 = ({
            "SideBar[HandleLogOut]": async ()=>{
                await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$Authentication$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogOutAPI"])()).unwrap();
                router.replace("/");
            }
        })["SideBar[HandleLogOut]"];
        $[3] = dispatch;
        $[4] = router;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const HandleLogOut = t1;
    const t2 = `fixed left-0 top-0 h-screen bg-gradient-to-b from-blue-800 via-blue-950 to-blue-900  border-white shadow-lg flex flex-col transition-all duration-300 z-40 ${isSidebarOpen ? "w-60" : "w-16"}`;
    const t3 = `text-white font-semibold text-lg transition-all duration-200 ${isSidebarOpen ? "opacity-100" : "opacity-0 hidden"}`;
    let t4;
    if ($[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: t3,
            children: "BIBLIOTECH"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== isSidebarOpen) {
        t5 = isSidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 74,
            columnNumber: 26
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 74,
            columnNumber: 42
        }, this);
        $[8] = isSidebarOpen;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t5 || $[11] !== toggleSidebar) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleSidebar,
            className: "text-gray-300 hover:text-white",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = toggleSidebar;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t4 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-4 h-20 border-b border-white",
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== router) {
        t8 = ({
            "SideBar[<button>.onClick]": ()=>router.replace("/dashboard")
        })["SideBar[<button>.onClick]"];
        $[16] = router;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            titleAccess: "Dashboard"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== isSidebarOpen) {
        t10 = isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-3",
            children: "Dashboard"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 117,
            columnNumber: 28
        }, this);
        $[19] = isSidebarOpen;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t10 || $[22] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-black hover:bg-white w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t8,
                className: "w-full text-left h-12 flex items-center",
                children: [
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SideBar.jsx",
                lineNumber: 125,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t8;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== router) {
        t12 = ({
            "SideBar[<button>.onClick]": ()=>router.replace("/gestione-libri")
        })["SideBar[<button>.onClick]"];
        $[24] = router;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FormatListBulleted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            titleAccess: "Gestione libri"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== isSidebarOpen) {
        t14 = isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-3",
            children: "Gestione libri"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 151,
            columnNumber: 28
        }, this);
        $[27] = isSidebarOpen;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t12 || $[30] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-black hover:bg-white  w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t12,
                className: "w-full text-left h-12 flex items-center",
                children: [
                    t13,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SideBar.jsx",
                lineNumber: 159,
                columnNumber: 125
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[29] = t12;
        $[30] = t14;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== router) {
        t16 = ({
            "SideBar[<button>.onClick]": ()=>router.replace("/cerca-tesserato")
        })["SideBar[<button>.onClick]"];
        $[32] = router;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PeopleAlt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            titleAccess: "Cerca tesserati"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== isSidebarOpen) {
        t18 = isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-3",
            children: "Gestione tesserati"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 185,
            columnNumber: 28
        }, this);
        $[35] = isSidebarOpen;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== t16 || $[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-black hover:bg-white w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t16,
                className: "w-full text-left h-12 flex items-center",
                children: [
                    t17,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SideBar.jsx",
                lineNumber: 193,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[37] = t16;
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== router) {
        t20 = ({
            "SideBar[<button>.onClick]": ()=>router.replace("/carica-tessera")
        })["SideBar[<button>.onClick]"];
        $[40] = router;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            titleAccess: "carica tesserato"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[42] = t21;
    } else {
        t21 = $[42];
    }
    let t22;
    if ($[43] !== isSidebarOpen) {
        t22 = isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-3",
            children: "Registra tesserato"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 219,
            columnNumber: 28
        }, this);
        $[43] = isSidebarOpen;
        $[44] = t22;
    } else {
        t22 = $[44];
    }
    let t23;
    if ($[45] !== t20 || $[46] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-black hover:bg-white  w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t20,
                className: "w-full text-left h-12 flex items-center",
                children: [
                    t21,
                    t22
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SideBar.jsx",
                lineNumber: 227,
                columnNumber: 125
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[45] = t20;
        $[46] = t22;
        $[47] = t23;
    } else {
        t23 = $[47];
    }
    let t24;
    if ($[48] !== router) {
        t24 = ({
            "SideBar[<button>.onClick]": ()=>router.replace("/carica-libro")
        })["SideBar[<button>.onClick]"];
        $[48] = router;
        $[49] = t24;
    } else {
        t24 = $[49];
    }
    let t25;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ImportContacts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            titleAccess: "carica libro"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[50] = t25;
    } else {
        t25 = $[50];
    }
    let t26;
    if ($[51] !== isSidebarOpen) {
        t26 = isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-3",
            children: "Carica libro"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 253,
            columnNumber: 28
        }, this);
        $[51] = isSidebarOpen;
        $[52] = t26;
    } else {
        t26 = $[52];
    }
    let t27;
    if ($[53] !== t24 || $[54] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-black hover:bg-white  w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t24,
                className: "w-full text-left h-12 flex items-center",
                children: [
                    t25,
                    t26
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SideBar.jsx",
                lineNumber: 261,
                columnNumber: 125
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[53] = t24;
        $[54] = t26;
        $[55] = t27;
    } else {
        t27 = $[55];
    }
    let t28;
    if ($[56] !== t11 || $[57] !== t15 || $[58] !== t19 || $[59] !== t23 || $[60] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-start gap-6 p-4 text-sm text-gray-300 flex-1 overflow-y-auto",
            children: [
                t11,
                t15,
                t19,
                t23,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[56] = t11;
        $[57] = t15;
        $[58] = t19;
        $[59] = t23;
        $[60] = t27;
        $[61] = t28;
    } else {
        t28 = $[61];
    }
    let t29;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                fontSize: 20
            }
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[62] = t29;
    } else {
        t29 = $[62];
    }
    let t30;
    if ($[63] !== isSidebarOpen) {
        t30 = isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-3",
            children: "Impostazioni"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 291,
            columnNumber: 28
        }, this);
        $[63] = isSidebarOpen;
        $[64] = t30;
    } else {
        t30 = $[64];
    }
    let t31;
    if ($[65] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "flex items-center gap-4 font-light rounded-md px-2 h-12 w-full text-left text-white hover:text-black hover:bg-white",
            children: [
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        $[65] = t30;
        $[66] = t31;
    } else {
        t31 = $[66];
    }
    let t32;
    if ($[67] !== HandleLogOut) {
        t32 = ({
            "SideBar[<button>.onClick]": ()=>HandleLogOut()
        })["SideBar[<button>.onClick]"];
        $[67] = HandleLogOut;
        $[68] = t32;
    } else {
        t32 = $[68];
    }
    let t33;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Logout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                fontSize: 20
            }
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[69] = t33;
    } else {
        t33 = $[69];
    }
    let t34;
    if ($[70] !== isSidebarOpen) {
        t34 = isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-3",
            children: "Logout"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 326,
            columnNumber: 28
        }, this);
        $[70] = isSidebarOpen;
        $[71] = t34;
    } else {
        t34 = $[71];
    }
    let t35;
    if ($[72] !== t32 || $[73] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t32,
            className: "flex items-center gap-4 font-light rounded-md px-2 h-12 w-full text-left text-white hover:text-black hover:bg-white ",
            children: [
                t33,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[72] = t32;
        $[73] = t34;
        $[74] = t35;
    } else {
        t35 = $[74];
    }
    let t36;
    if ($[75] !== t31 || $[76] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 mt-auto",
            children: [
                t31,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[75] = t31;
        $[76] = t35;
        $[77] = t36;
    } else {
        t36 = $[77];
    }
    let t37;
    if ($[78] !== t2 || $[79] !== t28 || $[80] !== t36 || $[81] !== t7) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t7,
                t28,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 352,
            columnNumber: 11
        }, this);
        $[78] = t2;
        $[79] = t28;
        $[80] = t36;
        $[81] = t7;
        $[82] = t37;
    } else {
        t37 = $[82];
    }
    const t38 = isSidebarOpen ? "13rem" : "2.2rem";
    let t39;
    if ($[83] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 p-2 overflow-y-auto transition-all duration-300",
            style: {
                marginLeft: t38
            }
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[83] = t38;
        $[84] = t39;
    } else {
        t39 = $[84];
    }
    let t40;
    if ($[85] !== t37 || $[86] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen",
            children: [
                t37,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[85] = t37;
        $[86] = t39;
        $[87] = t40;
    } else {
        t40 = $[87];
    }
    return t40;
}
_s(SideBar, "1PuzZxVlvw9vfU6vfGwaDrYwzr4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SideBar;
var _c;
__turbopack_context__.k.register(_c, "SideBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Banner.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Banner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Person$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Person.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Banner() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "3c8e84be12a155d91c022ef15bd472a1237d2b311aa9641b08afa03d40075a71") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3c8e84be12a155d91c022ef15bd472a1237d2b311aa9641b08afa03d40075a71";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = new Date().toLocaleTimeString("it-IT", {
            hour: "2-digit",
            minute: "2-digit"
        });
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Banner[useEffect()]": ()=>{
                const t = setInterval({
                    "Banner[useEffect() > setInterval()]": ()=>{
                        setTime(new Date().toLocaleTimeString("it-IT", {
                            hour: "2-digit",
                            minute: "2-digit"
                        }));
                    }
                }["Banner[useEffect() > setInterval()]"], 1000);
                return ()=>clearInterval(t);
            }
        })["Banner[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_BannerUseSelector);
    if (!user) {
        return null;
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Person$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                fontSize: 25,
                color: "white"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/Banner.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-semibold text-white tracking-wide",
            children: ": "
        }, void 0, false, {
            fileName: "[project]/src/components/Banner.jsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] !== user.username) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-white flex items-left gap-1",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: user.username
                }, void 0, false, {
                    fileName: "[project]/src/components/Banner.jsx",
                    lineNumber: 74,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Banner.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[6] = user.username;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-semibold text-white tracking-wide ",
            children: "Nome:"
        }, void 0, false, {
            fileName: "[project]/src/components/Banner.jsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== user.nome) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-white",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ml-1",
                    children: user.nome
                }, void 0, false, {
                    fileName: "[project]/src/components/Banner.jsx",
                    lineNumber: 89,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Banner.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[9] = user.nome;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-semibold text-white tracking-wide ",
            children: "Cognome:"
        }, void 0, false, {
            fileName: "[project]/src/components/Banner.jsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== user.cognome) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-white",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ml-1",
                    children: user.cognome
                }, void 0, false, {
                    fileName: "[project]/src/components/Banner.jsx",
                    lineNumber: 104,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Banner.jsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[12] = user.cognome;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t5 || $[15] !== t7 || $[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-20 bg-gradient-to-l from-blue-950 via-blue-900 to-blue-800 fixed",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-screen mx-auto px-6 h-full flex items-left justify-left",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-8",
                    children: [
                        t5,
                        t7,
                        t9
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Banner.jsx",
                    lineNumber: 112,
                    columnNumber: 181
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Banner.jsx",
                lineNumber: 112,
                columnNumber: 102
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Banner.jsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[14] = t5;
        $[15] = t7;
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    return t10;
}
_s(Banner, "re0uPlI5Zh1/AURa+HcUXn4AKFs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Banner;
function _BannerUseSelector(state) {
    return state.auth;
}
var _c;
__turbopack_context__.k.register(_c, "Banner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/gestione-libri/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GestioneLibri
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Backspace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Backspace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ManageHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ManageHistory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Build.js [app-client] (ecmascript)");
//-------------------STATE AND FUNCTION-------------------//
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppWrapper.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivateRoute$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PrivateRoute.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SideBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Banner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Banner.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$Libri$2f$libriSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/Libri/libriSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$CustomUser$2f$customuserSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/CustomUser/customuserSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$Autori$2f$autoriSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/Autori/autoriSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$Postazioni$2f$postazioniSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/Postazioni/postazioniSlice.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function GestioneLibri() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(81);
    if ($[0] !== "128b0ac9d9cba6fb909276bbcfbbbb861d2f2862a9475e528ce4db9da2080e3a") {
        for(let $i = 0; $i < 81; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "128b0ac9d9cba6fb909276bbcfbbbb861d2f2862a9475e528ce4db9da2080e3a";
    }
    const { data: t0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_GestioneLibriUseSelector);
    const { filter_book_items } = t0;
    const { data: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_GestioneLibriUseSelector2);
    const { customuser_helper_selection_items } = t1;
    const { data: t2 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_GestioneLibriUseSelector3);
    const { autore_helper_items } = t2;
    const { data: t3 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_GestioneLibriUseSelector4);
    const { postazioni_helper_items } = t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            isbn: null,
            data_uscita: null,
            editore: null,
            formato: null,
            autore: null,
            postazione: null,
            utente: null,
            lingua: null
        };
        $[1] = t4;
    } else {
        t4 = $[1];
    }
    const [filtrazione, setFiltrazione] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "GestioneLibri[restoreFilters]": ()=>{
                setFiltrazione({
                    isbn: null,
                    data_uscita: null,
                    editore: null,
                    formato: null,
                    autore: null,
                    postazione: null,
                    utente: null,
                    lingua: null
                });
            }
        })["GestioneLibri[restoreFilters]"];
        $[2] = t5;
    } else {
        t5 = $[2];
    }
    const restoreFilters = t5;
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    let t6;
    if ($[3] !== dispatch || $[4] !== filter_book_items || $[5] !== filtrazione) {
        t6 = ({
            "GestioneLibri[useEffect()]": ()=>{
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$Libri$2f$libriSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilterBookAPI"])({
                    params: filtrazione
                }));
                console.log(filter_book_items);
            }
        })["GestioneLibri[useEffect()]"];
        $[3] = dispatch;
        $[4] = filter_book_items;
        $[5] = filtrazione;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== dispatch || $[8] !== filtrazione) {
        t7 = [
            filtrazione,
            dispatch
        ];
        $[7] = dispatch;
        $[8] = filtrazione;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    let t9;
    if ($[10] !== dispatch) {
        t8 = ({
            "GestioneLibri[useEffect()]": ()=>{
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$CustomUser$2f$customuserSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHelperSelectionUserAPI"])());
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$Autori$2f$autoriSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHelperAutoriAPI"])());
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$Postazioni$2f$postazioniSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHelperSelectionPostazioni"])());
            }
        })["GestioneLibri[useEffect()]"];
        t9 = [
            dispatch
        ];
        $[10] = dispatch;
        $[11] = t8;
        $[12] = t9;
    } else {
        t8 = $[11];
        t9 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Banner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ManageHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                fontSize: 35
            }
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-light mb-4  text-gray-800",
                children: [
                    t12,
                    " Gestione libri ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 163,
                        columnNumber: 93
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 163,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white",
            children: "ISBN"
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    const t16 = filtrazione.isbn ?? "";
    let t17;
    if ($[19] !== filtrazione) {
        t17 = ({
            "GestioneLibri[<input>.onChange]": (e)=>setFiltrazione({
                    ...filtrazione,
                    isbn: e.target.value
                })
        })["GestioneLibri[<input>.onChange]"];
        $[19] = filtrazione;
        $[20] = t17;
    } else {
        t17 = $[20];
    }
    let t18;
    if ($[21] !== t16 || $[22] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: t16,
            onChange: t17,
            type: "text",
            className: "bg-white h-8 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
            name: "prestito"
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[21] = t16;
        $[22] = t17;
        $[23] = t18;
    } else {
        t18 = $[23];
    }
    let t19;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white",
            children: "Lingua"
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    const t20 = filtrazione.lingua ?? "";
    let t21;
    if ($[25] !== filtrazione) {
        t21 = ({
            "GestioneLibri[<input>.onChange]": (e_0)=>setFiltrazione({
                    ...filtrazione,
                    lingua: e_0.target.value
                })
        })["GestioneLibri[<input>.onChange]"];
        $[25] = filtrazione;
        $[26] = t21;
    } else {
        t21 = $[26];
    }
    let t22;
    if ($[27] !== t20 || $[28] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: t20,
            onChange: t21,
            type: "text",
            className: "bg-white h-9 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
            name: "prestito"
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[27] = t20;
        $[28] = t21;
        $[29] = t22;
    } else {
        t22 = $[29];
    }
    let t23;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white",
            children: "Data uscita"
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[30] = t23;
    } else {
        t23 = $[30];
    }
    const t24 = filtrazione.data_uscita ?? "";
    let t25;
    if ($[31] !== filtrazione) {
        t25 = ({
            "GestioneLibri[<input>.onChange]": (e_1)=>setFiltrazione({
                    ...filtrazione,
                    data_uscita: e_1.target.value
                })
        })["GestioneLibri[<input>.onChange]"];
        $[31] = filtrazione;
        $[32] = t25;
    } else {
        t25 = $[32];
    }
    let t26;
    if ($[33] !== t24 || $[34] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: t24,
            onChange: t25,
            type: "date",
            className: "bg-white h-9 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
            name: "prestito"
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[33] = t24;
        $[34] = t25;
        $[35] = t26;
    } else {
        t26 = $[35];
    }
    const t27 = filtrazione.postazione ?? "";
    let t28;
    if ($[36] !== filtrazione) {
        t28 = ({
            "GestioneLibri[<select>.onChange]": (e_2)=>setFiltrazione({
                    ...filtrazione,
                    postazione: Number(e_2.target.value)
                })
        })["GestioneLibri[<select>.onChange]"];
        $[36] = filtrazione;
        $[37] = t28;
    } else {
        t28 = $[37];
    }
    let t29;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Postazione"
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[38] = t29;
    } else {
        t29 = $[38];
    }
    let t30;
    if ($[39] !== postazioni_helper_items) {
        t30 = Array.isArray(postazioni_helper_items) && postazioni_helper_items.map(_GestioneLibriPostazioni_helper_itemsMap);
        $[39] = postazioni_helper_items;
        $[40] = t30;
    } else {
        t30 = $[40];
    }
    let t31;
    if ($[41] !== t27 || $[42] !== t28 || $[43] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: t27,
            onChange: t28,
            className: "bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
            name: "stato",
            children: [
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[41] = t27;
        $[42] = t28;
        $[43] = t30;
        $[44] = t31;
    } else {
        t31 = $[44];
    }
    const t32 = filtrazione.autore ?? "";
    let t33;
    if ($[45] !== filtrazione) {
        t33 = ({
            "GestioneLibri[<select>.onChange]": (e_3)=>setFiltrazione({
                    ...filtrazione,
                    autore: Number(e_3.target.value)
                })
        })["GestioneLibri[<select>.onChange]"];
        $[45] = filtrazione;
        $[46] = t33;
    } else {
        t33 = $[46];
    }
    let t34;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Autore"
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[47] = t34;
    } else {
        t34 = $[47];
    }
    let t35;
    if ($[48] !== autore_helper_items) {
        t35 = Array.isArray(autore_helper_items) && autore_helper_items.map(_GestioneLibriAutore_helper_itemsMap);
        $[48] = autore_helper_items;
        $[49] = t35;
    } else {
        t35 = $[49];
    }
    let t36;
    if ($[50] !== t32 || $[51] !== t33 || $[52] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: t32,
            onChange: t33,
            className: "bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
            name: "stato",
            children: [
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[50] = t32;
        $[51] = t33;
        $[52] = t35;
        $[53] = t36;
    } else {
        t36 = $[53];
    }
    let t37;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
            name: "stato",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "",
                children: "Editore"
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 345,
                columnNumber: 202
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 345,
            columnNumber: 11
        }, this);
        $[54] = t37;
    } else {
        t37 = $[54];
    }
    const t38 = filtrazione.utente ?? "";
    let t39;
    if ($[55] !== filtrazione) {
        t39 = ({
            "GestioneLibri[<select>.onChange]": (e_4)=>setFiltrazione({
                    ...filtrazione,
                    utente: Number(e_4.target.value)
                })
        })["GestioneLibri[<select>.onChange]"];
        $[55] = filtrazione;
        $[56] = t39;
    } else {
        t39 = $[56];
    }
    let t40;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Operatore"
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        $[57] = t40;
    } else {
        t40 = $[57];
    }
    let t41;
    if ($[58] !== customuser_helper_selection_items) {
        t41 = Array.isArray(customuser_helper_selection_items) && customuser_helper_selection_items.map(_GestioneLibriCustomuser_helper_selection_itemsMap);
        $[58] = customuser_helper_selection_items;
        $[59] = t41;
    } else {
        t41 = $[59];
    }
    let t42;
    if ($[60] !== t38 || $[61] !== t39 || $[62] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: t38,
            onChange: t39,
            className: "bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
            name: "prestito",
            children: [
                t40,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 381,
            columnNumber: 11
        }, this);
        $[60] = t38;
        $[61] = t39;
        $[62] = t41;
        $[63] = t42;
    } else {
        t42 = $[63];
    }
    let t43;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = ({
            "GestioneLibri[<button>.onClick]": ()=>restoreFilters()
        })["GestioneLibri[<button>.onClick]"];
        $[64] = t43;
    } else {
        t43 = $[64];
    }
    let t44;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t43,
            className: "bg-white border  border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Backspace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 400,
                columnNumber: 204
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 400,
            columnNumber: 11
        }, this);
        $[65] = t44;
    } else {
        t44 = $[65];
    }
    let t45;
    if ($[66] !== t18 || $[67] !== t22 || $[68] !== t26 || $[69] !== t31 || $[70] !== t36 || $[71] !== t42) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-sky-600 rounded-t-md  px-10 flex items-center justify-between",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-5 py-5 rounded-2xl",
                    children: [
                        t15,
                        t18,
                        t19,
                        t22,
                        t23,
                        t26,
                        t31,
                        t36,
                        t37,
                        t42,
                        t44
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 407,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[66] = t18;
        $[67] = t22;
        $[68] = t26;
        $[69] = t31;
        $[70] = t36;
        $[71] = t42;
        $[72] = t45;
    } else {
        t45 = $[72];
    }
    let t46;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            className: "bg-blue-600 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "ISBN"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 420,
                        columnNumber: 57
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Titolo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 420,
                        columnNumber: 102
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Data d'uscita"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 420,
                        columnNumber: 149
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Editore"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 420,
                        columnNumber: 203
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Formato"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 420,
                        columnNumber: 251
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Lingua"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 420,
                        columnNumber: 299
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Autore"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 420,
                        columnNumber: 346
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Postazione"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 420,
                        columnNumber: 393
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Inserito da"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 420,
                        columnNumber: 444
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Interagisci"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 420,
                        columnNumber: 496
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 420,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        $[73] = t46;
    } else {
        t46 = $[73];
    }
    let t47;
    if ($[74] !== filter_book_items) {
        t47 = Array.isArray(filter_book_items) && filter_book_items.map(_GestioneLibriFilter_book_itemsMap);
        $[74] = filter_book_items;
        $[75] = t47;
    } else {
        t47 = $[75];
    }
    let t48;
    if ($[76] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full bg-gray-200 shadow-md rounded-b-lg overflow-hidden",
                children: [
                    t46,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "divide-y divide-gray-300",
                        children: t47
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 435,
                        columnNumber: 126
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 435,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 435,
            columnNumber: 11
        }, this);
        $[76] = t47;
        $[77] = t48;
    } else {
        t48 = $[77];
    }
    let t49;
    if ($[78] !== t45 || $[79] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivateRoute$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-screen bg-white text-white",
                    children: [
                        t10,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col  transition-all duration-300",
                            children: [
                                t11,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-4 py-10 px-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-20 w-full",
                                        children: [
                                            t13,
                                            t45,
                                            t48
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                                        lineNumber: 443,
                                        columnNumber: 218
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                                    lineNumber: 443,
                                    columnNumber: 169
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/gestione-libri/page.jsx",
                            lineNumber: 443,
                            columnNumber: 97
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 443,
                    columnNumber: 37
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 443,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 443,
            columnNumber: 11
        }, this);
        $[78] = t45;
        $[79] = t48;
        $[80] = t49;
    } else {
        t49 = $[80];
    }
    return t49;
}
_s(GestioneLibri, "Lf84dPop2P5rD1m1NU3gzRLwAWs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = GestioneLibri;
function _GestioneLibriFilter_book_itemsMap(book_filters) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "hover:bg-white transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: book_filters.isbn
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 453,
                columnNumber: 83
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: book_filters.titolo
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 453,
                columnNumber: 144
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: book_filters.data_uscita
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 453,
                columnNumber: 207
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: book_filters.editore
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 453,
                columnNumber: 275
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: book_filters.formato
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 453,
                columnNumber: 339
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: book_filters.lingua
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 453,
                columnNumber: 403
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: book_filters.autore_libro
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 453,
                columnNumber: 466
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: [
                    book_filters.posizione_libro,
                    book_filters.poszione_libro_numerazione
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 453,
                columnNumber: 535
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: book_filters.username
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 453,
                columnNumber: 648
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/details/libri/${book_filters.isbn}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 453,
                        columnNumber: 801
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 453,
                    columnNumber: 750
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 453,
                columnNumber: 713
            }, this)
        ]
    }, book_filters.isbn, true, {
        fileName: "[project]/src/app/gestione-libri/page.jsx",
        lineNumber: 453,
        columnNumber: 10
    }, this);
}
function _GestioneLibriCustomuser_helper_selection_itemsMap(utente) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: utente.id,
        children: utente.username
    }, utente.id, false, {
        fileName: "[project]/src/app/gestione-libri/page.jsx",
        lineNumber: 456,
        columnNumber: 10
    }, this);
}
function _GestioneLibriAutore_helper_itemsMap(autore) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: autore.id_autore,
        children: [
            autore.nome_autore,
            " ",
            autore.cognome_autore
        ]
    }, autore.id_autore, true, {
        fileName: "[project]/src/app/gestione-libri/page.jsx",
        lineNumber: 459,
        columnNumber: 10
    }, this);
}
function _GestioneLibriPostazioni_helper_itemsMap(postazioni) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: postazioni.id_postazione,
        children: [
            postazioni.posizione,
            postazioni.numerazione,
            ":",
            postazioni.categoria_nome
        ]
    }, postazioni.id_postazione, true, {
        fileName: "[project]/src/app/gestione-libri/page.jsx",
        lineNumber: 462,
        columnNumber: 10
    }, this);
}
function _GestioneLibriUseSelector4(state_2) {
    return state_2.postazioni;
}
function _GestioneLibriUseSelector3(state_1) {
    return state_1.autori;
}
function _GestioneLibriUseSelector2(state_0) {
    return state_0.customuser;
}
function _GestioneLibriUseSelector(state) {
    return state.libri;
}
var _c;
__turbopack_context__.k.register(_c, "GestioneLibri");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_12ac7706._.js.map