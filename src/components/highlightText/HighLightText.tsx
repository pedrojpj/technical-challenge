import React, { FunctionComponent } from "react";

const sanitize = (text: string) => {
  return text.replace("(", "\\(").replace(")", "\\)");
};

type IProps = {
  text: any;
  highlight?: string;
};

export const HighlightText: FunctionComponent<IProps> = ({
  text,
  highlight = "",
}) => {
  const getHighlightedText = () => {
    const parts = text.split(new RegExp(`(${sanitize(highlight)})`, "gi"));
    if (parts.length === 1) {
      return text;
    } else {
      return parts.map((part: string, index: number) =>
        part.toLowerCase() === highlight!.toLowerCase() ? (
          <b key={index}>{part}</b>
        ) : (
          part
        )
      );
    }
  };

  return highlight ? getHighlightedText() : text;
};
