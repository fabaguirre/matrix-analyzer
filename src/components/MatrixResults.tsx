import { useMatrix } from '@/hooks/useMatrix';
import MatrixDisplay from './MatrixDisplay';
import MatrixStats from './MatrixStats';

const MatrixResults: React.FC = () => {
  const { rotatedMatrix, stats, clearResults } = useMatrix();

  return (
    stats &&
    rotatedMatrix && (
      <section className="container mx-auto flex max-w-5xl flex-col gap-7">
        <h2 className="py-2 text-center text-xl font-bold">Results</h2>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <MatrixDisplay matrix={rotatedMatrix} />
          <MatrixStats stats={stats} />
        </div>

        <div className="flex justify-center pt-5">
          <button
            className="h-12 w-52 p-2 text-lg font-semibold ring-1 ring-gray-100 transition-colors hover:bg-white/10"
            onClick={clearResults}
          >
            Reset
          </button>
        </div>
      </section>
    )
  );
};

export default MatrixResults;
