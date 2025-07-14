import { ReactNode } from 'react';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <Sidebar />
      <main className="ml-32 p-6">{children}</main>
    </div>
  );
}
