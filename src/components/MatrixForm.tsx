import { useEffect, useState } from 'react';
import MatrixInput from './MatrixInput';

const MatrixForm: React.FC = () => {
  const [rowsLength, setRowsLength] = useState(3);
  const [columnsLength, setColumnsLength] = useState(4);

  const [matrix, setMatrix] = useState<number[][]>([]);

  const updateMatrix = ({
    rowIndex,
    columnIndex,
    value,
  }: {
    rowIndex: number;
    columnIndex: number;
    value: number;
  }) => {
    setMatrix(prevMatrix => {
      return prevMatrix
        .slice(0, rowIndex)
        .concat([
          prevMatrix[rowIndex]
            .slice(0, columnIndex)
            .concat([value])
            .concat(prevMatrix[rowIndex].slice(columnIndex + 1)),
        ])
        .concat(prevMatrix.slice(rowIndex + 1));
    });
  };

  useEffect(() => {
    setMatrix(new Array(rowsLength).fill(new Array(columnsLength).fill(0)));
  }, [rowsLength, columnsLength, setMatrix]);

  return (
    <section className="mx-auto flex flex-col gap-6">
      <h1 className="container mx-auto max-w-5xl text-balance text-center text-4xl font-bold">
        Matrix Analyzer
      </h1>

      <form className="container mx-auto mt-2 flex max-w-5xl justify-center gap-4">
        <label>
          Rows
          <input
            type="range"
            value={rowsLength}
            max={10}
            onChange={event => setRowsLength(Number(event.currentTarget.value))}
          />
        </label>

        <label>
          Columns
          <input
            type="range"
            value={columnsLength}
            max={10}
            onChange={event =>
              setColumnsLength(Number(event.currentTarget.value))
            }
          />
        </label>
      </form>

      <form>
        <MatrixInput matrix={matrix} updateMatrix={updateMatrix} />
      </form>
    </section>
  );
};

export default MatrixForm;
