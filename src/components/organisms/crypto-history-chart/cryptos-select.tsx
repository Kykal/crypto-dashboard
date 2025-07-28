import { SearchParam } from "../../../constants";

//ReactJS
import { useState } from "react";
import { useSearchParams } from "react-router";
import useCryptosStore from "../../../store/use-cryptos-store";

//MATERIAL DESIGN
//Components
import { Avatar, Group, Select } from "@mantine/core";

//Types
import type { ComboboxData, SelectProps } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

//Main component
const CryptosSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const cryptos = useCryptosStore((store) => store.data);

  const data: ComboboxData =
    cryptos?.map((item) => ({
      label: item.name,
      value: item.id,
    })) ?? [];

  const [value, setValue] = useState<string | undefined>(
    searchParams.get(SearchParam.CRYPTO) ?? undefined
  );

  const onChangeHandler = (value: string | null) => {
    setValue(value ?? undefined);

    if (!value) {
      return;
    }

    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(SearchParam.CRYPTO, value);

    setSearchParams(newSearchParams);
  };

  const renderOptions: SelectProps["renderOption"] = ({ option, checked }) => (
    <Group flex={1} align="center" justify="space-between">
      {option.label}
      <Group align="center" gap="xs">
        {checked && (
          <IconCheck style={{ marginInlineStart: "auto" }} {...iconProps} />
        )}
        <Avatar
          src={cryptos?.find((item) => item.name === option.label)?.image ?? ""}
          alt={option.label}
          size={24}
        />
      </Group>
    </Group>
  );

  //Main render
  return (
    <Select
      value={value}
      onChange={onChangeHandler}
      data={data}
      renderOption={renderOptions}
    />
  );
};

export default CryptosSelect; // Export main component

const iconProps = {
  stroke: 1.5,
  color: "currentColor",
  opacity: 0.6,
  size: 18,
};
