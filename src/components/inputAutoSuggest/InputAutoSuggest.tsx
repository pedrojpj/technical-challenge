import React, {
  ChangeEvent,
  FunctionComponent,
  useState,
  useRef,
  useEffect,
} from "react";

import { Portal } from "../portal/Portal";
import { Input } from "../input/Input";
import { IconSearch, IconLoading } from "../icons";
import { ListAutoSuggest } from "./styles";
import { HighlightText } from "../highlightText/HighLightText";

type IProps = {
  label?: string;
  placeholder?: string;
  minLength?: number;
  onChange?(value: string): void;
  onSelectItem(value: string): void;
  items?: IAutoSuggestItem[];
  loading?: boolean;
  value?: string;
  testId?: string;
};

export type IAutoSuggestItem = {
  name: string;
  value: string | number;
};

export const InputAutoSuggest: FunctionComponent<IProps> = ({
  label,
  placeholder,
  minLength = 3,
  onChange,
  items = [],
  loading = false,
  onSelectItem,
  value,
  testId,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const [innerValue, setInnerValue] = useState<string | undefined>(value);

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  const onChangeSideEffects = (value: string) => {
    if (value.length >= minLength) {
      onChange && onChange(value);
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInnerValue(value);
    onChangeSideEffects(value);
  };

  const onHandleSelectItem = (value: string) => {
    onSelectItem(value);
    setIsMenuOpen(false);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={onChangeSearch}
        ref={inputRef}
        icon={loading ? <IconLoading /> : <IconSearch />}
        label={label}
        value={value}
        testId={testId}
      />
      {isMenuOpen && items.length > 0 && (
        <Portal
          show={isMenuOpen}
          actionRef={inputRef}
          onClickOutside={() => setIsMenuOpen(false)}
        >
          <ListAutoSuggest>
            {items.map((item: IAutoSuggestItem, index: number) => (
              <li
                key={item.value}
                onClick={() => onHandleSelectItem(item.name)}
                data-test={`item-autosuggest-${index}`}
              >
                <HighlightText text={item.name} highlight={innerValue} />
              </li>
            ))}
          </ListAutoSuggest>
        </Portal>
      )}
    </div>
  );
};
