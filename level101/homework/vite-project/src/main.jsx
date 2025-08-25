import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <header className="bg-gray-200 p-4 flex gap-4">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </header>

      <main className="p-4">
        <Outlet />
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        2025
      </footer>
    </div>
  );
}

function Home() {
  return <h1>main</h1>;
}

function HomeCreate() {
  return <h1>create</h1>;
}

function About() {
  return (
    <div>
      <b>about</b>
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<HomeCreate />} />
          <Route path="about" element={<About />}>
            <Route index element={<Home />} />
            <Route path="create" element={<HomeCreate />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}