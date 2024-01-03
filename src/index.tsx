import {createRoot} from "react-dom/client";
import {App} from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {Shop} from "@/pages/Shop";
import {About} from "@/pages/About";

const container = document.getElementById('root')

if (!container) {
    throw new Error('container not found')
}

const root = createRoot(container)


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/shop',
                element: <Suspense>
                    <Shop/>
                </Suspense>
            },
            {
                path: '/about',
                element: <Suspense>
                    <About/>
                </Suspense>
            }
        ]
    }
]);

root.render(<RouterProvider router={router}/>)
