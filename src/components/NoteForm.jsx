import { useState } from "react";
import "./NoteForm.css";

function NoteForm({ onAddNote }) {
  // Local state for form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formError, setFormError] = useState("");
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);

  // Handle multiple file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Check total file count (max 5 files)
    if (attachedFiles.length + files.length > 5) {
      setFormError("Maximum 5 files allowed");
      return;
    }

    // Check each file size (max 5MB per file)
    const oversizedFiles = files.filter((file) => file.size > 5 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      setFormError("Each file must be less than 5MB");
      return;
    }

    // Process files
    const newFiles = [];
    const newPreviews = [];

    files.forEach((file) => {
      newFiles.push(file);

      // Create preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviews.push({
            name: file.name,
            type: file.type,
            data: reader.result,
          });
          setFilePreviews([...filePreviews, ...newPreviews]);
        };
        reader.readAsDataURL(file);
      } else {
        newPreviews.push({
          name: file.name,
          type: file.type,
          data: null,
        });
      }
    });

    setAttachedFiles([...attachedFiles, ...newFiles]);
    if (newPreviews.some((p) => !p.data)) {
      setFilePreviews([...filePreviews, ...newPreviews.filter((p) => !p.data)]);
    }
  };

  // Remove specific file
  const removeFile = (index) => {
    setAttachedFiles(attachedFiles.filter((_, i) => i !== index));
    setFilePreviews(filePreviews.filter((_, i) => i !== index));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setFormError("Title is required");
      return;
    }

    // Create note object with multiple files
    const note = {
      title: trimmedTitle,
      description: description.trim(),
      files: attachedFiles.map((file, index) => ({
        name: file.name,
        type: file.type,
        size: file.size,
        data: filePreviews[index]?.data || null,
      })),
    };

    onAddNote(note);

    // Reset form
    setTitle("");
    setDescription("");
    setFormError("");
    setAttachedFiles([]);
    setFilePreviews([]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (formError) {
      setFormError("");
    }
  };

  const isFormValid = title.trim().length > 0;

  return (
    <div className="note-form-container">
      <h2>Add New Note</h2>
      <form onSubmit={handleSubmit} className="note-form">
        <div className="form-group">
          <label htmlFor="title">
            Title <span className="required">*</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter note title"
            className={formError ? "input-error" : ""}
            autoFocus
          />
          {formError && <p className="error-message">{formError}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter note description (optional)"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">
            Attach Files{" "}
            <span className="optional">(max 5 files, 5MB each)</span>
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            accept="image/*,.pdf,.doc,.docx,.txt"
            className="file-input"
            multiple
          />

          {attachedFiles.length > 0 && (
            <div className="files-preview-list">
              {attachedFiles.map((file, index) => (
                <div key={index} className="file-preview-item">
                  {filePreviews[index]?.data && (
                    <img
                      src={filePreviews[index].data}
                      alt="Preview"
                      className="preview-thumb"
                    />
                  )}
                  <div className="file-info-compact">
                    <span className="file-name-compact">📎 {file.name}</span>
                    <span className="file-size-compact">
                      ({(file.size / 1024).toFixed(1)} KB)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="btn-remove-file-compact"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button type="submit" className="btn-submit" disabled={!isFormValid}>
          Add Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
