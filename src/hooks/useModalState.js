import { useState } from "react";

const useModalState = (initialState) => {
  const [open, setOpen] = useState(initialState);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return [open, openModal, closeModal];
};

export default useModalState;
