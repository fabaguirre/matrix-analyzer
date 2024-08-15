import { useMatrix } from '@/hooks/useMatrix';
import MatrixCellInput from './MatrixCellInput';

const MatrixInput: React.FC = () => {
  const { matrix, updateMatrixCell } = useMatrix();

  return (
    <div className="flex flex-col items-center gap-3">
      {matrix.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex items-center gap-3">
          {row.map((cell, columnIndex) => (
            <MatrixCellInput
              key={`cell-${rowIndex}-${columnIndex}`}
              value={cell}
              onChange={val => {
                updateMatrixCell({ rowIndex, columnIndex, value: val });
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixInput;
