import IconColumns from '@/components/icons/IconColumns';
import IconRows from '@/components/icons/IconRows';
import { useMatrix } from '@/hooks/useMatrix';

const MatrixConfig: React.FC = () => {
  const { rowsLength, columnsLength, setRowsLength, setColumnsLength } =
    useMatrix();

  return (
    <form className="container mx-auto mt-2 flex max-w-5xl justify-center gap-4">
      <label className="flex items-center gap-2">
        <IconRows />
        <input
          type="range"
          value={rowsLength}
          max={10}
          onChange={event => setRowsLength(Number(event.currentTarget.value))}
        />
      </label>

      <label className="flex items-center gap-2">
        <IconColumns />
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
  );
};

export default MatrixConfig;
