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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AutoStories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AutoStories.js [app-client] (ecmascript)");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(97);
    if ($[0] !== "2aaf5a890adf19789e8e67239177f9382a9e8e75167e1b4ee20612525dd65a10") {
        for(let $i = 0; $i < 97; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2aaf5a890adf19789e8e67239177f9382a9e8e75167e1b4ee20612525dd65a10";
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
            "SideBar[<button>.onClick]": ()=>router.replace("/cerca-libro")
        })["SideBar[<button>.onClick]"];
        $[32] = router;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AutoStories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            titleAccess: "Cerca libri"
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
            children: "Cerca libri"
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
            "SideBar[<button>.onClick]": ()=>router.replace("/cerca-libro")
        })["SideBar[<button>.onClick]"];
        $[40] = router;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PeopleAlt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            titleAccess: "Cerca libri"
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
            children: "Cerca tesserati"
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
            className: "flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-black hover:bg-white w-full",
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
                columnNumber: 124
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
            "SideBar[<button>.onClick]": ()=>router.replace("/carica-tessera")
        })["SideBar[<button>.onClick]"];
        $[48] = router;
        $[49] = t24;
    } else {
        t24 = $[49];
    }
    let t25;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            titleAccess: "carica tesserato"
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
            children: "Registra tesserato"
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
    if ($[56] !== router) {
        t28 = ({
            "SideBar[<button>.onClick]": ()=>router.replace("/carica-libro")
        })["SideBar[<button>.onClick]"];
        $[56] = router;
        $[57] = t28;
    } else {
        t28 = $[57];
    }
    let t29;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ImportContacts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            titleAccess: "carica libro"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[58] = t29;
    } else {
        t29 = $[58];
    }
    let t30;
    if ($[59] !== isSidebarOpen) {
        t30 = isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-3",
            children: "Carica libro"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 287,
            columnNumber: 28
        }, this);
        $[59] = isSidebarOpen;
        $[60] = t30;
    } else {
        t30 = $[60];
    }
    let t31;
    if ($[61] !== t28 || $[62] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-black hover:bg-white  w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t28,
                className: "w-full text-left h-12 flex items-center",
                children: [
                    t29,
                    t30
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SideBar.jsx",
                lineNumber: 295,
                columnNumber: 125
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[61] = t28;
        $[62] = t30;
        $[63] = t31;
    } else {
        t31 = $[63];
    }
    let t32;
    if ($[64] !== t11 || $[65] !== t15 || $[66] !== t19 || $[67] !== t23 || $[68] !== t27 || $[69] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-start gap-6 p-4 text-sm text-gray-300 flex-1 overflow-y-auto",
            children: [
                t11,
                t15,
                t19,
                t23,
                t27,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[64] = t11;
        $[65] = t15;
        $[66] = t19;
        $[67] = t23;
        $[68] = t27;
        $[69] = t31;
        $[70] = t32;
    } else {
        t32 = $[70];
    }
    let t33;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                fontSize: 20
            }
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[71] = t33;
    } else {
        t33 = $[71];
    }
    let t34;
    if ($[72] !== isSidebarOpen) {
        t34 = isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-3",
            children: "Impostazioni"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 326,
            columnNumber: 28
        }, this);
        $[72] = isSidebarOpen;
        $[73] = t34;
    } else {
        t34 = $[73];
    }
    let t35;
    if ($[74] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "flex items-center gap-4 font-light rounded-md px-2 h-12 w-full text-left text-white hover:text-black hover:bg-white",
            children: [
                t33,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[74] = t34;
        $[75] = t35;
    } else {
        t35 = $[75];
    }
    let t36;
    if ($[76] !== HandleLogOut) {
        t36 = ({
            "SideBar[<button>.onClick]": ()=>HandleLogOut()
        })["SideBar[<button>.onClick]"];
        $[76] = HandleLogOut;
        $[77] = t36;
    } else {
        t36 = $[77];
    }
    let t37;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Logout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                fontSize: 20
            }
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 352,
            columnNumber: 11
        }, this);
        $[78] = t37;
    } else {
        t37 = $[78];
    }
    let t38;
    if ($[79] !== isSidebarOpen) {
        t38 = isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-3",
            children: "Logout"
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 361,
            columnNumber: 28
        }, this);
        $[79] = isSidebarOpen;
        $[80] = t38;
    } else {
        t38 = $[80];
    }
    let t39;
    if ($[81] !== t36 || $[82] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t36,
            className: "flex items-center gap-4 font-light rounded-md px-2 h-12 w-full text-left text-white hover:text-black hover:bg-white ",
            children: [
                t37,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 369,
            columnNumber: 11
        }, this);
        $[81] = t36;
        $[82] = t38;
        $[83] = t39;
    } else {
        t39 = $[83];
    }
    let t40;
    if ($[84] !== t35 || $[85] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 mt-auto",
            children: [
                t35,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        $[84] = t35;
        $[85] = t39;
        $[86] = t40;
    } else {
        t40 = $[86];
    }
    let t41;
    if ($[87] !== t2 || $[88] !== t32 || $[89] !== t40 || $[90] !== t7) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t7,
                t32,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 387,
            columnNumber: 11
        }, this);
        $[87] = t2;
        $[88] = t32;
        $[89] = t40;
        $[90] = t7;
        $[91] = t41;
    } else {
        t41 = $[91];
    }
    const t42 = isSidebarOpen ? "13rem" : "2.2rem";
    let t43;
    if ($[92] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 p-2 overflow-y-auto transition-all duration-300",
            style: {
                marginLeft: t42
            }
        }, void 0, false, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 399,
            columnNumber: 11
        }, this);
        $[92] = t42;
        $[93] = t43;
    } else {
        t43 = $[93];
    }
    let t44;
    if ($[94] !== t41 || $[95] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen",
            children: [
                t41,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideBar.jsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[94] = t41;
        $[95] = t43;
        $[96] = t44;
    } else {
        t44 = $[96];
    }
    return t44;
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(64);
    if ($[0] !== "836cb3b1d6b125825685616c8aaf72eb5cbb229448a270c71ba3e746c3c850a8") {
        for(let $i = 0; $i < 64; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "836cb3b1d6b125825685616c8aaf72eb5cbb229448a270c71ba3e746c3c850a8";
    }
    const { data: t0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_GestioneLibriUseSelector);
    const { filter_book_items } = t0;
    const { data: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_GestioneLibriUseSelector2);
    const { customuser_helper_selection_items } = t1;
    const { data: t2 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_GestioneLibriUseSelector3);
    const { autore_helper_items } = t2;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_GestioneLibriUseSelector4);
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            isbn: null,
            data_uscita: null,
            editore: null,
            formato: null,
            autore: null,
            postazione: null,
            utente: null
        };
        $[1] = t3;
    } else {
        t3 = $[1];
    }
    const [filtrazione, setFiltrazione] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    let t4;
    if ($[2] !== dispatch || $[3] !== filter_book_items || $[4] !== filtrazione) {
        t4 = ({
            "GestioneLibri[useEffect()]": ()=>{
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$Libri$2f$libriSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilterBookAPI"])({
                    params: filtrazione
                }));
                console.log(filter_book_items);
            }
        })["GestioneLibri[useEffect()]"];
        $[2] = dispatch;
        $[3] = filter_book_items;
        $[4] = filtrazione;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== dispatch || $[7] !== filtrazione) {
        t5 = [
            filtrazione,
            dispatch
        ];
        $[6] = dispatch;
        $[7] = filtrazione;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[9] !== dispatch) {
        t6 = ({
            "GestioneLibri[useEffect()]": ()=>{
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$CustomUser$2f$customuserSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHelperSelectionUserAPI"])());
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$Autori$2f$autoriSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHelperAutoriAPI"])());
            }
        })["GestioneLibri[useEffect()]"];
        t7 = [
            dispatch
        ];
        $[9] = dispatch;
        $[10] = t6;
        $[11] = t7;
    } else {
        t6 = $[10];
        t7 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Banner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ManageHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                fontSize: 35
            }
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-light mb-4  text-gray-800",
                children: [
                    t10,
                    " Gestione libri ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 135,
                        columnNumber: 93
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 135,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white",
            children: "ISBN"
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    const t14 = filtrazione.isbn ?? "";
    let t15;
    if ($[18] !== filtrazione) {
        t15 = ({
            "GestioneLibri[<input>.onChange]": (e)=>setFiltrazione({
                    ...filtrazione,
                    isbn: e.target.value
                })
        })["GestioneLibri[<input>.onChange]"];
        $[18] = filtrazione;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] !== t14 || $[21] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex items-center space-x-1 cursor-pointer text-gray-700 font-medium",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    value: t14,
                    onChange: t15,
                    type: "text",
                    className: "bg-white h-8 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
                    name: "prestito"
                }, void 0, false, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 170,
                    columnNumber: 104
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[20] = t14;
        $[21] = t15;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white",
            children: "Data uscita"
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    const t18 = filtrazione.data_uscita ?? "";
    let t19;
    if ($[24] !== filtrazione) {
        t19 = ({
            "GestioneLibri[<input>.onChange]": (e_0)=>setFiltrazione({
                    ...filtrazione,
                    data_uscita: e_0.target.value
                })
        })["GestioneLibri[<input>.onChange]"];
        $[24] = filtrazione;
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] !== t18 || $[27] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: t18,
            onChange: t19,
            type: "date",
            className: "bg-white h-9 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
            name: "prestito"
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[26] = t18;
        $[27] = t19;
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
            name: "stato",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "",
                    children: "Postazione"
                }, void 0, false, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 209,
                    columnNumber: 202
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "true",
                    children: "Si"
                }, void 0, false, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 209,
                    columnNumber: 238
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "false",
                    children: "No"
                }, void 0, false, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 209,
                    columnNumber: 270
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[29] = t21;
    } else {
        t21 = $[29];
    }
    const t22 = filtrazione.autore ?? "";
    let t23;
    if ($[30] !== filtrazione) {
        t23 = ({
            "GestioneLibri[<select>.onChange]": (e_1)=>setFiltrazione({
                    ...filtrazione,
                    autore: Number(e_1.target.value)
                })
        })["GestioneLibri[<select>.onChange]"];
        $[30] = filtrazione;
        $[31] = t23;
    } else {
        t23 = $[31];
    }
    let t24;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Autore"
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[32] = t24;
    } else {
        t24 = $[32];
    }
    let t25;
    if ($[33] !== autore_helper_items) {
        t25 = Array.isArray(autore_helper_items) && autore_helper_items.map(_GestioneLibriAutore_helper_itemsMap);
        $[33] = autore_helper_items;
        $[34] = t25;
    } else {
        t25 = $[34];
    }
    let t26;
    if ($[35] !== t22 || $[36] !== t23 || $[37] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: t22,
            onChange: t23,
            className: "bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
            name: "stato",
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[35] = t22;
        $[36] = t23;
        $[37] = t25;
        $[38] = t26;
    } else {
        t26 = $[38];
    }
    let t27;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
            name: "stato",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "",
                    children: "Editore"
                }, void 0, false, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 255,
                    columnNumber: 202
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "true",
                    children: "Si"
                }, void 0, false, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 255,
                    columnNumber: 235
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "false",
                    children: "No"
                }, void 0, false, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 255,
                    columnNumber: 267
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[39] = t27;
    } else {
        t27 = $[39];
    }
    let t28;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
            name: "stato",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "",
                    children: "Lingua"
                }, void 0, false, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 262,
                    columnNumber: 202
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "true",
                    children: "Si"
                }, void 0, false, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 262,
                    columnNumber: 234
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "false",
                    children: "No"
                }, void 0, false, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 262,
                    columnNumber: 266
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[40] = t28;
    } else {
        t28 = $[40];
    }
    const t29 = filtrazione.utente ?? "";
    let t30;
    if ($[41] !== filtrazione) {
        t30 = ({
            "GestioneLibri[<select>.onChange]": (e_2)=>setFiltrazione({
                    ...filtrazione,
                    utente: Number(e_2.target.value)
                })
        })["GestioneLibri[<select>.onChange]"];
        $[41] = filtrazione;
        $[42] = t30;
    } else {
        t30 = $[42];
    }
    let t31;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Operatore"
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[43] = t31;
    } else {
        t31 = $[43];
    }
    let t32;
    if ($[44] !== customuser_helper_selection_items) {
        t32 = Array.isArray(customuser_helper_selection_items) && customuser_helper_selection_items.map(_GestioneLibriCustomuser_helper_selection_itemsMap);
        $[44] = customuser_helper_selection_items;
        $[45] = t32;
    } else {
        t32 = $[45];
    }
    let t33;
    if ($[46] !== t29 || $[47] !== t30 || $[48] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: t29,
            onChange: t30,
            className: "bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
            name: "prestito",
            children: [
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[46] = t29;
        $[47] = t30;
        $[48] = t32;
        $[49] = t33;
    } else {
        t33 = $[49];
    }
    let t34;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "bg-white border  border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Backspace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 308,
                columnNumber: 190
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[50] = t34;
    } else {
        t34 = $[50];
    }
    let t35;
    if ($[51] !== t16 || $[52] !== t20 || $[53] !== t26 || $[54] !== t33) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-sky-600 rounded-t-md  px-10 flex items-center justify-between",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-5 py-5 rounded-2xl",
                    children: [
                        t16,
                        t17,
                        t20,
                        t21,
                        t26,
                        t27,
                        t28,
                        t33,
                        t34
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 315,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[51] = t16;
        $[52] = t20;
        $[53] = t26;
        $[54] = t33;
        $[55] = t35;
    } else {
        t35 = $[55];
    }
    let t36;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            className: "bg-blue-600 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "ISBN"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 326,
                        columnNumber: 57
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Titolo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 326,
                        columnNumber: 102
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Data d'uscita"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 326,
                        columnNumber: 149
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Editore"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 326,
                        columnNumber: 203
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Formato"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 326,
                        columnNumber: 251
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Lingua"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 326,
                        columnNumber: 299
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Autore"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 326,
                        columnNumber: 346
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Postazione"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 326,
                        columnNumber: 393
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Inserito da"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 326,
                        columnNumber: 444
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-6 text-left",
                        children: "Interagisci"
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 326,
                        columnNumber: 496
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 326,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[56] = t36;
    } else {
        t36 = $[56];
    }
    let t37;
    if ($[57] !== filter_book_items) {
        t37 = Array.isArray(filter_book_items) && filter_book_items.map(_GestioneLibriFilter_book_itemsMap);
        $[57] = filter_book_items;
        $[58] = t37;
    } else {
        t37 = $[58];
    }
    let t38;
    if ($[59] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full bg-gray-200 shadow-md rounded-b-lg overflow-hidden",
                children: [
                    t36,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "divide-y divide-gray-300",
                        children: t37
                    }, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 341,
                        columnNumber: 126
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 341,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[59] = t37;
        $[60] = t38;
    } else {
        t38 = $[60];
    }
    let t39;
    if ($[61] !== t35 || $[62] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivateRoute$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-screen bg-white text-white",
                    children: [
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col  transition-all duration-300",
                            children: [
                                t9,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-4 py-10 px-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-20 w-full",
                                        children: [
                                            t11,
                                            t35,
                                            t38
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                                        lineNumber: 349,
                                        columnNumber: 216
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                                    lineNumber: 349,
                                    columnNumber: 167
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/gestione-libri/page.jsx",
                            lineNumber: 349,
                            columnNumber: 96
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 349,
                    columnNumber: 37
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 349,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/gestione-libri/page.jsx",
            lineNumber: 349,
            columnNumber: 11
        }, this);
        $[61] = t35;
        $[62] = t38;
        $[63] = t39;
    } else {
        t39 = $[63];
    }
    return t39;
}
_s(GestioneLibri, "VXwzCRKrDlcRJssXtR/LA6PC7T4=", false, function() {
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
                lineNumber: 359,
                columnNumber: 83
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: book_filters.titolo
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 359,
                columnNumber: 144
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: book_filters.data_uscita
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 359,
                columnNumber: 207
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: book_filters.editore
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 359,
                columnNumber: 275
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: book_filters.formato
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 359,
                columnNumber: 339
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: book_filters.lingua
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 359,
                columnNumber: 403
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: book_filters.autore_libro
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 359,
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
                lineNumber: 359,
                columnNumber: 535
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: book_filters.utente
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 359,
                columnNumber: 648
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-6 text-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/details/libri/${book_filters.isbn}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/gestione-libri/page.jsx",
                        lineNumber: 359,
                        columnNumber: 799
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/gestione-libri/page.jsx",
                    lineNumber: 359,
                    columnNumber: 748
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/gestione-libri/page.jsx",
                lineNumber: 359,
                columnNumber: 711
            }, this)
        ]
    }, book_filters.isbn, true, {
        fileName: "[project]/src/app/gestione-libri/page.jsx",
        lineNumber: 359,
        columnNumber: 10
    }, this);
}
function _GestioneLibriCustomuser_helper_selection_itemsMap(utente) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: utente.id,
        children: utente.username
    }, utente.id, false, {
        fileName: "[project]/src/app/gestione-libri/page.jsx",
        lineNumber: 362,
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
        lineNumber: 365,
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