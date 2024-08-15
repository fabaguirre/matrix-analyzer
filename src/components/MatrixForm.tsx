import { MatrixProvider } from '@/context/matrix';
import MatrixConfig from './MatrixConfig';
import MatrixInput from './MatrixInput';

const MatrixForm: React.FC = () => {
  return (
    <section className="mx-auto flex flex-col gap-6">
      <h1 className="container mx-auto max-w-5xl text-balance text-center text-4xl font-bold">
        Matrix Analyzer
      </h1>

      <MatrixProvider>
        <MatrixConfig />

        <form>
          <MatrixInput />
        </form>
      </MatrixProvider>
    </section>
  );
};

export default MatrixForm;
