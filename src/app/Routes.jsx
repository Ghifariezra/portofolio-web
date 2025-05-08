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
const Root = lazy(() => import("@layout/MainLayout"));
const Home = lazy(() => import("@pages/Home"));
const NotFound = lazy(() => import("@pages/NotFound"));
const Certificate = lazy(() => import("@pages/Certificate"));
const Contact = lazy(() => import("@pages/Contact"));
const Project = lazy(() => import("@pages/Project"));

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: "project", Component: Project },
            { path: "certificate", Component: Certificate },
            { path: "contact", Component: Contact },
            { path: "*", Component: NotFound },
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