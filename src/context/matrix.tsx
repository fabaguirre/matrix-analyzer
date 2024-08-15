import { createContext, useEffect, useState } from 'react';

export interface MatrixContextType {
  matrix: Matrix;
  updateMatrixCell: ({
    rowIndex,
    columnIndex,
    value,
  }: {
    rowIndex: number;
    columnIndex: number;
    value: number;
  }) => void;

  rowsLength: number;
  columnsLength: number;

  setRowsLength: (rowsLength: number) => void;
  setColumnsLength: (columnsLength: number) => void;

  isLoading: boolean;
  analyzeMatrix: () => Promise<void>;

  stats?: MatrixStats;
}

export const MatrixContext = createContext<MatrixContextType>({
  matrix: [],
  updateMatrixCell: () => {},
  rowsLength: 0,
  columnsLength: 0,
  setRowsLength: () => {},
  setColumnsLength: () => {},
  isLoading: false,
  analyzeMatrix: async () => {},
});

export function MatrixProvider({ children }: { children: React.ReactNode }) {
  const [matrix, setMatrix] = useState<Matrix>([]);
  const [rowsLength, setRowsLength] = useState(3);
  const [columnsLength, setColumnsLength] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState<MatrixStats>();

  const updateMatrixCell = ({
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

  const analyzeMatrix = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setStats({
      average: 0,
      isDiagonal: false,
      max: 0,
      min: 0,
      totalSum: 0,
    });
    setIsLoading(false);
  };

  return (
    <MatrixContext.Provider
      value={{
        matrix,
        updateMatrixCell,
        rowsLength,
        columnsLength,
        setRowsLength,
        setColumnsLength,
        isLoading,
        analyzeMatrix,
        stats,
      }}
    >
      {children}
    </MatrixContext.Provider>
  );
}
