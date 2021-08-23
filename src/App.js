import React, { useState } from "react";
import Modal from "./Modal";
const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};
const OTHER_CONTENT_STYLES = {
  padding: "10px",
  zIndex: 2,
  backgroundColor: "red",
  position: "relative",
};

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Modal
        </button>
        <Modal open={isOpen} onClose={() => setOpen(false)}>
          Lalle modal
        </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  );
}

export default App;
//Portals also enables event delegation
