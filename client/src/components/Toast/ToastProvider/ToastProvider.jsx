import { useState } from "react";

import ToastContext from "../../../service/ToastService";
import ToastList from "../ToastList/ToastList";

let toastId = 0;

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = ({ title, message, type = "info", duration = 3000 }) => {
    const id = toastId++;
    setToasts(prev => [...prev, { id, title, message, type, duration }]);

    setTimeout(() => hideToast(id), duration);
  };

  const hideToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <ToastList toasts={toasts} hideToast={hideToast} />
    </ToastContext.Provider>
  );
}
