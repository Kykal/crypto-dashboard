//ReactJS
import { useState } from "react";
import { useSearchParams } from "react-router";

//MATERIAL DESIGN
//Components
import { SegmentedControl } from "@mantine/core";
import { SearchParam } from "../../../constants";

//Main component
const FrequencySegmentedControl = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setValue] = useState<string>(
    searchParams.get(SearchParam.CRYPTO_HISTORY_FREQUENCY) ?? "7d"
  );

  const onChangeHandler = (value: string) => {
    setValue(value);

    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(SearchParam.CRYPTO_HISTORY_FREQUENCY, value);

    setSearchParams(newSearchParams);
  };

  //Main render
  return (
    <SegmentedControl
      value={value}
      onChange={onChangeHandler}
      data={[
        {
          value: "1d",
          label: "1 d",
        },
        {
          value: "7d",
          label: "7 d",
        },
        {
          value: "1m",
          label: "1 M",
        },
      ]}
    />
  );
};

export default FrequencySegmentedControl; // Export main component
