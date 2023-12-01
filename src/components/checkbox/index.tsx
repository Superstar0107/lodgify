import { Checkbox, CustomCheckbox, Label } from './styled';

interface Props {
  name: string;
  id: string;
  value: number;
  checked: boolean;
  label: string;
  onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CheckBoxComponent({
  name,
  id,
  value,
  checked,
  label,
  onChangeFn,
}: Props) {
  return (
    <Label cy-data-id="checkbox-label">
      {label}
      <Checkbox
        cy-data-id="checkbox"
        onChange={(e) => onChangeFn(e)}
        name={name}
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
      />
      <CustomCheckbox cy-data-id="custom-checkbox"></CustomCheckbox>
    </Label>
  );
}
