import React, { useState } from "react";

const CreateResume = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleFormSubmit = () => {
    handleModalClose();
    // Handle form submission logic here
  };

  return (
    <div>
      <label htmlFor="resume-modal" className="btn my-96">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="resume-modal"
        className="modal-toggle"
        checked={modalOpen}
        onChange={() => setModalOpen(!modalOpen)}
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="resume-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <form onSubmit={handleFormSubmit}>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateResume;
