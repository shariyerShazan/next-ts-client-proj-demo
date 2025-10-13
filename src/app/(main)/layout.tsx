
import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="min-h-screen">{children}</div>

    </div>
  );
};

export default MainLayout;