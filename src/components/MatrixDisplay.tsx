interface Props {
  matrix: Matrix;
}

const MatrixDisplay: React.FC<Props> = ({ matrix }) => {
  return (
    <div className="flex flex-col items-center gap-2 md:items-end md:justify-center">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className="flex size-20 items-center justify-center rounded-md border border-gray-300 text-xl font-semibold"
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixDisplay;
