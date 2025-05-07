import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import React, { lazy, Suspense } from "react";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const lazyWithDelay = (factory, ms = 3000) => {
    return lazy(() =>
        Promise.all([
            factory(),
            delay(ms)
        ]).then(([moduleExports]) => moduleExports)
    );
};


const Loader = lazy(() => import("@components/loaders/Loader"));
const Root = lazyWithDelay(() => import("@layout/MainLayout"), 1000);
const Home = lazyWithDelay(() => import("@pages/Home"), 1000);
const Certificate = lazyWithDelay(() => import("@pages/Certificate"), 1000);

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: "certificate", Component: Certificate },
        ]
    },
]);

const root = document.getElementById("root");

function App() {
    return (
        <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App