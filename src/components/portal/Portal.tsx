import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { createPortal } from "react-dom";

import { PortalContainer } from "./styles";

let popupRoot: HTMLElement | null = document.getElementById("popup-root");
const el: HTMLDivElement = document.createElement("div");

type IProps = {
  show?: boolean;
  children: React.ReactNode;
  actionRef?: any;
  onClickOutside?(): void;
};

type IPosition = {
  top: number;
  left: number;
  right: number;
  width: number;
};

const createElement = () => {
  if (!popupRoot) {
    var div = document.createElement("div");
    div.id = "popup-root";
    document.body.appendChild(div);

    popupRoot = document.getElementById("popup-root");
  }
};

export const Portal: FunctionComponent<IProps> = ({
  show = false,
  children,
  actionRef = null,
  onClickOutside,
}) => {
  const [position, setPosition] = useState<IPosition>({
    top: 0,
    left: 0,
    right: 0,
    width: 0,
  });

  const popupRef = useRef<HTMLDivElement>(null);

  const getPosition = useCallback(() => {
    if (actionRef.current) {
      const {
        left,
        top,
        right,
        height,
      } = actionRef!.current.getBoundingClientRect();

      setPosition({
        left,
        top: top + height - 1,
        right,
        width: actionRef!.current.clientWidth,
      });
    }
  }, [actionRef]);

  useEffect(() => {
    createElement();
    popupRoot?.appendChild(el);

    if (actionRef) {
      getPosition();
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleWindowResize);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = useCallback(() => {
    let timeout;

    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
      actionRef && getPosition();
    });
  }, [actionRef]);

  const handleWindowResize = useCallback(() => {
    actionRef && getPosition();
  }, [actionRef]);

  const handleClickOutside = useCallback(
    (event: any) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    },
    [popupRef]
  );

  return createPortal(
    <>
      {show && (
        <PortalContainer
          ref={popupRef}
          style={{
            left: position.left,
            top: position.top,
            width: position.width,
          }}
        >
          {children}
        </PortalContainer>
      )}
    </>,
    el
  );
};
