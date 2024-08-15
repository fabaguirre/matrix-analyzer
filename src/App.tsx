import MatrixForm from '@/components/MatrixForm';
import MatrixResults from '@/components/MatrixResults';
import React from 'react';
import { MatrixProvider } from './context/matrix';

const App: React.FC = () => {
  return (
    <main className="flex flex-col gap-16 py-7">
      <MatrixProvider>
        <MatrixForm />

        <MatrixResults />
      </MatrixProvider>
    </main>
  );
};

export default App;
