import { useMatrix } from '@/hooks/useMatrix';
import MatrixConfig from './MatrixConfig';
import MatrixInput from './MatrixInput';
import Spinner from './Spinner';

const MatrixForm: React.FC = () => {
  const { analyzeMatrix, isLoading } = useMatrix();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    analyzeMatrix();
  };

  return (
    <section aria-label="Form" className="mx-auto flex flex-col gap-6">
      <h1 className="py-2 text-center text-4xl font-bold">Matrix Analyzer</h1>

      <MatrixConfig />

      <form
        aria-label="Form to analyze the matrix"
        className="flex flex-col items-center gap-12 px-4"
        onSubmit={handleSubmit}
      >
        <MatrixInput />

        <button
          className="grid h-12 w-52 place-content-center rounded-sm bg-blue-500 p-2 text-lg font-semibold transition-colors enabled:hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : 'Analyze'}
        </button>
      </form>
    </section>
  );
};

export default MatrixForm;
