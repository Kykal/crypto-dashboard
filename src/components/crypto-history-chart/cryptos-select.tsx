import { SearchParam } from "../../constants";

//ReactJS
import { useState } from "react";
import { useSearchParams } from "react-router";
import useCryptosStore from "../../store/use-cryptos-store";

//MATERIAL DESIGN
//Components
import { Select } from "@mantine/core";

//Types
import type { ComboboxData } from "@mantine/core";

//Main component
const CryptosSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const data: ComboboxData =
    useCryptosStore((state) => state.data)?.map((item) => ({
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

  //Main render
  return <Select value={value} onChange={onChangeHandler} data={data} />;
};

export default CryptosSelect; // Export main component
