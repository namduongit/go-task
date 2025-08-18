import './ToastList.css';

export default function ToastList({ toasts, hideToast }) {
  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className={`toast toast-${t.type}`}>
          {/* <div className="toast-header">
            <strong>{t.title}</strong>
            <button onClick={() => hideToast(t.id)}>x</button>
          </div>
          <div className="toast-body">{t.message}</div> */}
        </div>
      ))}
    </div>
  );
}
