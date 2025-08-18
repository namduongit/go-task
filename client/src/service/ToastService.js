import { createContext, useContext } from "react";

const ToastContext = createContext();
export const useToast = () => useContext(ToastContext);
export default ToastContext;

/**
 * - Tạo không gian chứa toast - Hành lang
 * - Tạo hàm helper để các component con co thể truy cập dễ dàng trong Context - Ở hành lang đặt cái tivi
 * - Nếu muốn component khác có thể dùng thì buộc phải bọc chúng lại với nhau - Bọc tất cả lại và có 1 người nào đó sẽ giúp vận chuyển bằng cách gọi hàm mình định nghĩa sau
 */