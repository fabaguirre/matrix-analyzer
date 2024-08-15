interface Props {
  value: number;
  onChange?: (value: number) => void;
}
const MatrixCellInput: React.FC<Props> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.currentTarget.value);
    if (!isNaN(newValue)) {
      onChange?.(newValue);
    }
    event.currentTarget.value = value.toString();
  };

  return (
    <input
      className="grid aspect-square size-32 place-content-center rounded-lg text-center text-3xl font-semibold text-slate-950"
      type="number"
      value={value}
      onChange={handleChange}
    />
  );
};

export default MatrixCellInput;
