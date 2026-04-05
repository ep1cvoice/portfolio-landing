import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import styles from './ProjectPreviewModal.module.css';

function ProjectPreviewModal({ url, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.bar}>
          <span className={styles.barTitle}>{title}</span>
          <button className={styles.close} onClick={onClose} aria-label="Close preview">
            <X size={20} />
          </button>
        </div>
        <div className={styles.frameWrap}>
          <img src={url} alt={title} className={styles.frame} />
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ProjectPreviewModal;
