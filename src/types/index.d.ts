type Matrix = number[][];

interface MatrixStats {
  max: number;
  min: number;
  average: number;
  totalSum: number;
  isDiagonal: boolean;
}

interface MatrixResponse {
  status: number;
  success: boolean;
  data: MatrixResponseData;
}

interface MatrixResponseData {
  qrDecomposition: {
    Q: number[];
    R: number[];
  };
  rotatedMatrix: Matrix;
  stats: MatrixStats;
}
