import { Fragment } from "react";

export const formatStringWithLineBreaks = (text: string) => {
  return text.split('\n').map((str, index) => (
    <Fragment key={index}>
      {str}
      <br />
    </Fragment>
  ));
};
