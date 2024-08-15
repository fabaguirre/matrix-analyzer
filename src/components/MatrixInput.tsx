import MatrixCellInput from './MatrixCellInput';

interface Props {
  matrix: number[][];
  updateMatrix: ({
    rowIndex,
    columnIndex,
    value,
  }: {
    rowIndex: number;
    columnIndex: number;
    value: number;
  }) => void;
}

const MatrixInput: React.FC<Props> = ({ matrix, updateMatrix }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      {matrix.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex items-center gap-3">
          {row.map((cell, columnIndex) => (
            <MatrixCellInput
              key={`cell-${rowIndex}-${columnIndex}`}
              value={cell}
              onChange={val => {
                updateMatrix({ rowIndex, columnIndex, value: val });
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixInput;
