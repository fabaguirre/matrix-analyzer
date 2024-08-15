interface Props extends React.HTMLAttributes<HTMLTableElement> {
  matrix: Matrix;
}

const MatrixDisplay: React.FC<Props> = ({ matrix, ...props }) => {
  return (
    <table
      className="flex flex-col items-center gap-2 md:items-end md:justify-center"
      {...props}
    >
      {matrix.map((row, rowIndex) => (
        <tr key={rowIndex} className="flex gap-2">
          {row.map((cell, cellIndex) => (
            <td
              key={cellIndex}
              className="flex size-20 items-center justify-center rounded-md border border-gray-300 text-xl font-semibold"
            >
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default MatrixDisplay;
