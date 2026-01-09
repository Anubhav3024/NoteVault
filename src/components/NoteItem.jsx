import { useState } from "react";
import "./NoteItem.css";

function NoteItem({ note, onDelete }) {
  const [showModal, setShowModal] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleFileDownload = (file) => {
    if (file && file.data) {
      const link = document.createElement("a");
      link.href = file.data;
      link.download = file.name;
      link.click();
    }
  };

  // Open image in new tab
  const openImageInNewTab = (imageData) => {
    window.open(imageData, "_blank");
  };

  // Truncate description to 150 characters
  const MAX_DESC_LENGTH = 150;
  const shouldTruncate =
    note.description && note.description.length > MAX_DESC_LENGTH;
  const displayDescription =
    shouldTruncate && !showModal
      ? note.description.substring(0, MAX_DESC_LENGTH) + "..."
      : note.description;

  const hasFiles = note.files && note.files.length > 0;
  const imageFiles = hasFiles
    ? note.files.filter((f) => f.type.startsWith("image/"))
    : [];
  const otherFiles = hasFiles
    ? note.files.filter((f) => !f.type.startsWith("image/"))
    : [];

  return (
    <>
      {/* Note Card */}
      <div className="note-card-wrapper">
        {/* Card Header with Title */}
        <div className="note-card-header">
          <h3 className="note-card-title">{note.title}</h3>
          <button
            className="btn-delete-card"
            onClick={() => onDelete(note.id)}
            aria-label="Delete note"
            title="Delete note"
          >
            ✕
          </button>
        </div>

        {/* Card Body */}
        <div className="note-card-body">
          {/* Left Side: Files */}
          {hasFiles && (
            <div className="note-files-section">
              {/* Image Thumbnails */}
              {imageFiles.map((file, index) => (
                <div key={index} className="file-image-wrapper">
                  <img
                    src={file.data}
                    alt={file.name}
                    className="file-image"
                    onClick={() => openImageInNewTab(file.data)}
                    title="Click to open in new tab"
                  />
                </div>
              ))}

              {/* Other Files */}
              {otherFiles.map((file, index) => (
                <div key={`other-${index}`} className="file-doc-item">
                  <span className="file-icon">📄</span>
                  <div className="file-info">
                    <span className="file-name">{file.name}</span>
                    <span className="file-size">
                      ({(file.size / 1024).toFixed(1)} KB)
                    </span>
                  </div>
                  {file.data && (
                    <button
                      onClick={() => handleFileDownload(file)}
                      className="btn-download-small"
                      title="Download"
                    >
                      ⬇
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Right Side: Description */}
          <div
            className={`note-description-section ${
              !hasFiles ? "full-width" : ""
            }`}
          >
            {note.description && (
              <>
                <p className="note-description-text">
                  {displayDescription}
                  {shouldTruncate && (
                    <span
                      className="read-more-link"
                      onClick={() => setShowModal(true)}
                    >
                      {" ...Read More"}
                    </span>
                  )}
                </p>
              </>
            )}

            <p className="note-timestamp">{formatDate(note.createdAt)}</p>
          </div>
        </div>
      </div>

      {/* Expanded Modal */}
      {showModal && (
        <div className="note-modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="note-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="note-modal-header">
              <h2>{note.title}</h2>
              <button
                className="btn-close-modal"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="note-modal-body">
              {/* Files Section */}
              {hasFiles && (
                <div className="modal-files-section">
                  <h3>Attachments</h3>
                  <div className="modal-files-grid">
                    {imageFiles.map((file, index) => (
                      <div key={index} className="modal-image-wrapper">
                        <img
                          src={file.data}
                          alt={file.name}
                          className="modal-image"
                          onClick={() => openImageInNewTab(file.data)}
                          title="Click to open in new tab"
                        />
                      </div>
                    ))}
                    {otherFiles.map((file, index) => (
                      <div key={`other-${index}`} className="modal-file-item">
                        <span className="file-icon">📄</span>
                        <span className="file-name">{file.name}</span>
                        <span className="file-size">
                          ({(file.size / 1024).toFixed(1)} KB)
                        </span>
                        {file.data && (
                          <button
                            onClick={() => handleFileDownload(file)}
                            className="btn-download-modal"
                          >
                            ⬇ Download
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description Section */}
              {note.description && (
                <div className="modal-description-section">
                  <h3>Description</h3>
                  <div className="modal-description-content">
                    <p>{note.description}</p>
                  </div>
                </div>
              )}

              {/* Metadata */}
              <div className="modal-metadata">
                <p className="modal-timestamp">
                  Created: {formatDate(note.createdAt)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NoteItem;
