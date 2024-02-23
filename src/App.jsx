import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ContactDetailPage,
  ContactPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
} from "./page";
import ContactAddPage from "./page/ContactAdd.page";

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/home" element={<HomePage />}>
            <Route index element={<ContactPage />} />
            <Route path="add" element={<ContactAddPage />} />
            <Route path="contact/:id" element={<ContactDetailPage />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
