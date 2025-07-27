//ReactJS
import { useState } from "react";
import { useSearchParams } from "react-router";

//MATERIAL DESIGN
//Components
import { SegmentedControl } from "@mantine/core";
import { SearchParam } from "../../constants";

//Main component
const FrequencySegmentedControl = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setValue] = useState<string>(
    searchParams.get(SearchParam.CRYPTOS_HISTORY_FREQUENCY) ?? "24h"
  );

  const onChangeHandler = (value: string) => {
    setValue(value);

    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(SearchParam.CRYPTOS_HISTORY_FREQUENCY, value);

    setSearchParams(newSearchParams);
  };

  //Main render
  return (
    <SegmentedControl
      size="xs"
      withItemsBorders={false}
      radius="xl"
      value={value}
      onChange={onChangeHandler}
      data={[
        {
          value: "6h",
          label: "6 h",
        },
        {
          value: "12h",
          label: "12 h",
        },
        {
          value: "24h",
          label: "24 h",
        },
      ]}
    />
  );
};

export default FrequencySegmentedControl; // Export main component
