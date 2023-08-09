import Input from "@rippling/ui/Inputs";
import { Typography } from "@rippling/ui";

export default function FlowIndex() {
  return (
    <>
      <Typography.H3>Select one</Typography.H3>
      <Input.Radio
        isBoxView
        name="radio-boxview"
        list={[
          {
            value: "yes",
            label: "Yes",
          },
          {
            value: "no",
            label: "No",
          },
        ]}
        onChange={(val) => {
          console.log(val);
          /* insert logic */
        }}
      />
    </>
  );
}
