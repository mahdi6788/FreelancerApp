import { useEffect, useRef } from "react";

export default function useOutsideClick(onClose, listenCapturing=true) {
  const ref = useRef();
   useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }
    /// we want to execute the handleClick function just when we click not always, so we use addEventListner
    /// if so not use that, this function gets excuted always.
    /// listenCapturing = true => set on capturing (prevent bubbling)
    document.addEventListener("click", handleClick, listenCapturing);

    /// cleanup function
    return () => document.removeEventListener("click", handleClick, listenCapturing);
  }, [onClose, listenCapturing]);

  return ref
}


/// if donot determine listenCapturing = true, it causes that the modal open and then close automatically immadiately.
