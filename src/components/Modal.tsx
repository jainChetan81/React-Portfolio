import styles from "../styles/Modal.module.css";
import { useEffect, useState, MouseEvent, KeyboardEvent } from "react";
import ReactDOM from "react-dom";

type Props = {
  show: boolean;
  title?: string;
  onClose: () => void;
  children?: any;
  type: string;
};

const Modal = ({ show, onClose, children, title, type }: Props) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => setIsBrowser(true), []);

  const handleClose = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    onClose();
  };

  const getIcon = (type: string): JSX.Element => {
    let icon: JSX.Element = <></>;
    switch (type) {
      case "close":
        icon = <p className="w-8 h-8">X</p>;
      case "reload":
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        );
      default:
        break;
    }
    return icon;
  };

  const modalContent = show ? (
    <div data-testid="modal" className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <button type="button" onClick={handleClose} onKeyDown={handleClose} aria-label="CLose the modal">
            {getIcon(type)}
          </button>
        </div>
        {title && <h3 className={styles.title}>{title}</h3>}
        {children && <div className={styles.body}>{children}</div>}
      </div>
    </div>
  ) : null;
  return isBrowser ? ReactDOM.createPortal(modalContent, document.body) : null;
};
export default Modal;
