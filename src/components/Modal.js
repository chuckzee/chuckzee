export default function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-content bg-white p-5 rounded shadow-lg w-3/4">
        {content.imageSrc && (
          <a target="_blank" href={content.uri} className="image-container relative">
            <img
              src={content.imageSrc}
              alt={content.projectAlt} 
              width={1920} 
              height={1080}
              className="modalImage"
            />
          </a>
        )}{" "}
        <p>{content.content}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
        >
          Close
        </button>
      </div>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
    </div>
  );
}
