import { useState, useRef } from "react";
import Toasts from "./Toasts";

const ReactToastMessages = () => {
  //   const [show, setShow] = useState(true);

  const [toasts, setToasts] = useState([]);
  console.log(toasts);
  const toastRef = useRef({});
  console.log(toastRef);
  const handleAddMessage = (message, type) => {
    const id = new Date().getTime();
    const newToast = [...toasts, { id, message, type }];
    setToasts(newToast);
    toastRef.current = setTimeout(() => handleCloseMessage(id), 5000);
  };

  const handleCloseMessage = (id) => {
    setToasts((prevtoast) => {
      const removeToast = prevtoast.filter((toast) => toast.id !== id);
      return removeToast;
    });
  };
  return (
    <div className="container">
      <Toasts toasts={toasts} handleCloseMessage={handleCloseMessage} />

      <div className="btn-container">
        <button onClick={() => handleAddMessage("Success", "success")}>
          Success
        </button>
        <button onClick={() => handleAddMessage("Info", "info")}>Info</button>
        <button onClick={() => handleAddMessage("Warning", "warning")}>
          Warning
        </button>
        <button onClick={() => handleAddMessage("Error", "error")}>
          Errors
        </button>
      </div>
    </div>
  );
};

export default ReactToastMessages;
