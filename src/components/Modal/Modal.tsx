import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import s from './Modal.module.css';

type ModalProps = React.PropsWithChildren<{
  title?: string | undefined;
  isOpen: boolean;
  onClose: () => void;
  isClose?: boolean | undefined;
}>;

export const Modal = ({
  isOpen,
  onClose,
  isClose,
  title,
  children,
}: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isClose) return;

      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isClose, onClose]);

  const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (event.currentTarget === event.target && isClose) {
      onClose();
    }
  };
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={s.backdrop}
      onClick={handleBackdropClick}
    >
      <div className={s.content}>
        {title !== undefined || isClose !== undefined ? (
          <div className={s.head}>
            {title !== undefined ? (
              <p className={s.modalTitle}>{title}</p>
            ) : null}
            {isClose !== undefined ? (
              <button
                className={s.closeBtn}
                type="button"
                onClick={onClose}
              />
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') || document.body
  );
};
