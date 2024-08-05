const Toasts = ({ toasts, handleCloseMessage }) => {
  return (
    <div className="toast-container">
      {toasts.map((toast) => {
        return (
          <div key={toast.id} className={`toast ${toast.type}`}>
            <p>{toast.message}</p>
            <span onClick={() => handleCloseMessage(toast.id)}>X</span>
          </div>
        );
      })}
    </div>
  );
};

export default Toasts;
