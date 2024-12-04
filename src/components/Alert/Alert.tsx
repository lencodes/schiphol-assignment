import './Alert.css';
import { ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
  type: 'danger' | 'info';
}

export const Alert = ({ children, type }: AlertProps) => (
  <div className={`alert-container alert--${type}`}>{children}</div>
);

Alert.Danger = ({ children }: { children: ReactNode }) => (
  <Alert type="danger">{children}</Alert>
);

Alert.Info = ({ children }: { children: ReactNode }) => (
  <Alert type="info">{children}</Alert>
);
