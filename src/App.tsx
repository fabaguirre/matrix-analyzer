import MatrixForm from '@/components/MatrixForm';
import React from 'react';
import { MatrixProvider } from './context/matrix';

const App: React.FC = () => {
  return (
    <main className="py-7">
      <MatrixProvider>
        <MatrixForm />
      </MatrixProvider>
    </main>
  );
};

export default App;
