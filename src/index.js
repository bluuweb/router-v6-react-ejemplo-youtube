import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Blog from "./routes/Blog";
import Post from "./routes/Post";
import Contacto from "./routes/Contacto";
import Inicio from "./routes/Inicio";
import NoEncontrada from "./routes/NoEncontrada";
import RutaProtegida from "./routes/RutaProtegida";

import RequireAuth from "./components/RequireAuth";

import UserProvider from "./context/UserProvider";

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Inicio />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:id" element={<Post />} />
                    <Route path="contacto" element={<Contacto />} />
                    <Route
                        path="protegida"
                        element={
                            <RequireAuth>
                                <RutaProtegida />
                            </RequireAuth>
                        }
                    />
                    <Route path="*" element={<NoEncontrada />} />
                </Route>
            </Routes>
        </UserProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
