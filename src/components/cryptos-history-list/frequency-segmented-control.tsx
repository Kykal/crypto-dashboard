//MATERIAL DESIGN
//Components
import { SegmentedControl } from "@mantine/core";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { SearchParam } from "../../constants";

//Main component
const FrequencySegmentedControl = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setValue] = useState<string>(
    searchParams.get(SearchParam.CRYPTOS_HISTORY_FREQUENCY) ?? "24h"
  );

  const onChangeHandler = (value: string) => {
    setValue(value);
    setSearchParams({
      [SearchParam.CRYPTOS_HISTORY_FREQUENCY]: value,
    });
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
          //   disabled: true,
        },
        {
          value: "12h",
          label: "12 h",
          //   disabled: true,
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
