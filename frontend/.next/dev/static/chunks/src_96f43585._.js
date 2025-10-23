(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/api/apiClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    withCredentials: true
});
const __TURBOPACK__default__export__ = apiClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/apiAuth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckUser",
    ()=>CheckUser,
    "LogIn",
    ()=>LogIn,
    "LogOut",
    ()=>LogOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$apiClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/apiClient.js [app-client] (ecmascript)");
;
const LogIn = (formData)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$apiClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/login/', formData);
_c = LogIn;
const LogOut = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$apiClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/logout/');
_c1 = LogOut;
const CheckUser = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$apiClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/user_check/');
_c2 = CheckUser;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LogIn");
__turbopack_context__.k.register(_c1, "LogOut");
__turbopack_context__.k.register(_c2, "CheckUser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/Authentication/authSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckUserAPI",
    ()=>CheckUserAPI,
    "LogInAPI",
    ()=>LogInAPI,
    "LogOutAPI",
    ()=>LogOutAPI,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$apiAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/apiAuth.js [app-client] (ecmascript)");
;
;
const LogInAPI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('api/login/', async (updateData, { rejectWithValue })=>{
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$apiAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogIn"])(updateData);
        return response.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            "error": "Si è verificato un problema"
        });
    }
});
const LogOutAPI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('api/logout/', async (_, { rejectWithValue })=>{
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$apiAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogOut"])();
        document.cookie = "access_token=; path=/; max-age=0";
        return response.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            "error": "Si è verificato un problema"
        });
    }
});
const CheckUserAPI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('api/check_user/', async (_, { rejectWithValue })=>{
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$apiAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckUser"])();
        return response.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            "error": "Si è verificato un problema"
        });
    }
});
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'auth',
    initialState: {
        user: null,
        status: 'idle',
        error: null,
        checked: false
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(LogInAPI.pending, (state)=>{
            state.status = 'loading';
        }).addCase(LogInAPI.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.user = action.payload;
        //state.checked = true;
        }).addCase(LogInAPI.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload || {
                detail: "errore sconosciuto"
            };
        }).addCase(LogOutAPI.fulfilled, (state)=>{
            state.status = 'idle';
            state.checked = true;
            state.user = null;
        }).addCase(CheckUserAPI.fulfilled, (state, action)=>{
            state.checked = true;
            if (action.payload.loggedIn) {
                state.user = {
                    username: action.payload.username,
                    nome: action.payload.nome,
                    cognome: action.payload.cognome,
                    is_admin: action.payload.is_admin
                };
            } else {
                state.user = null;
                state.status = 'idle';
            }
        }).addCase(CheckUserAPI.rejected, (state)=>{
            state.status = 'idle';
            state.checked = true;
            state.user = null;
        });
    }
});
const __TURBOPACK__default__export__ = authSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$Authentication$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/Authentication/authSlice.js [app-client] (ecmascript)");
'use client';
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$Authentication$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
const __TURBOPACK__default__export__ = store;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/ReduxProvider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReduxProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/store.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function ReduxProvider(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "53fcae62e265d94a2efb77e26f813c24c6646851f27cd56026efa60360892a22") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "53fcae62e265d94a2efb77e26f813c24c6646851f27cd56026efa60360892a22";
    }
    const { children } = t0;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
            store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            children: children
        }, void 0, false, {
            fileName: "[project]/src/store/ReduxProvider.jsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = ReduxProvider;
var _c;
__turbopack_context__.k.register(_c, "ReduxProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/layout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
//importante per lavorare client side , se si fanno fetch client side o si usano funzioni redux sempre use client, altrimenti se si lavora in pagina ssr server side con fetch dirette in pagina esso può essere omesso
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ReduxProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/ReduxProvider.jsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function RootLayout(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "c32f8919a11ef3edc3c4d4cb52f70ae525be7f81382f87ec2be972d65a618e9a") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c32f8919a11ef3edc3c4d4cb52f70ae525be7f81382f87ec2be972d65a618e9a";
    }
    const { children } = t0;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
            lang: "en",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "flex bg-blue-900 text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ReduxProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.jsx",
                    lineNumber: 20,
                    columnNumber: 72
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.jsx",
                lineNumber: 20,
                columnNumber: 26
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.jsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_96f43585._.js.map