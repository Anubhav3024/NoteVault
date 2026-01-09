# 📝 Note Vault - Secure Notes Management App

A professional, feature-rich notes management application built with React and Vite, demonstrating clean architecture, state management, and exceptional user experience.

![Note Vault](public/notevault-logo.png)

---

## 📖 Project Overview

**Note Vault** is a modern, secure notes management application that allows users to create, organize, and manage notes with file attachments. Built with React 18 and Vite, it showcases professional-grade frontend development with clean component architecture, efficient state management, and a polished user interface featuring a dark charcoal blue gradient theme with gray-tan accents.

---

## 🚀 How to Run

### Prerequisites

- **Node.js**: v16 or higher
- **npm**: v7 or higher (comes with Node.js)

### Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🏗️ Component Breakdown

### Core Components

**1. App.jsx** - Root component and state container

- Manages global application state (`notes`, `loading`)
- Handles note creation and deletion logic
- Orchestrates component rendering based on loading state
- Implements 1.5s loading simulation on startup

**2. NoteForm.jsx** - Note creation form

- Controlled form inputs for title and description
- Multi-file upload support (up to 5 files, 5MB each)
- Real-time image preview before upload
- Inline validation with error messages
- File type support: Images, PDF, DOC, DOCX, TXT

**3. NoteList.jsx** - Scrollable notes container

- Fixed-height container (600px) with custom scrollbar
- Conditional rendering: shows notes or empty state
- Sticky header with note count
- Smooth scrolling with themed scrollbar

**4. NoteItem.jsx** - Individual note card with modal

- Gradient header matching main app header
- Files displayed on left (200px column)
- Description on right with "Read More" functionality
- Modal popup for full content view
- Click-to-open images in new tab
- Download buttons for file attachments

**5. EmptyState.jsx** - Empty state component

- Displays when no notes exist
- Friendly message with icon
- Encourages user to create first note

**6. Loader.jsx** - Loading spinner

- Animated spinner with message
- Shows during initial 1.5s app load
- Smooth fade-in/out transitions

---

## 🔄 State Explanation

### State Architecture

**Global State (App.jsx):**

```javascript
const [notes, setNotes] = useState([]);
const [loading, setLoading] = useState(true);
```

- **`notes`**: Array of note objects (single source of truth)
- **`loading`**: Boolean controlling loading state display

**Local State (NoteForm.jsx):**

```javascript
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [attachedFiles, setAttachedFiles] = useState([]);
const [formError, setFormError] = useState("");
```

- **`title`**: Controlled input for note title (required)
- **`description`**: Controlled textarea for note description (optional)
- **`attachedFiles`**: Array of File objects for attachments
- **`formError`**: Validation error message

**Local State (NoteItem.jsx):**

```javascript
const [showModal, setShowModal] = useState(false);
```

- **`showModal`**: Boolean controlling modal visibility per note

### Data Flow

```
User Input (NoteForm)
        ↓
Form State Update (useState)
        ↓
onAddNote Callback
        ↓
App State Update (setNotes)
        ↓
Props to NoteList
        ↓
Props to NoteItem[]
        ↓
UI Re-render
```

**Key Principles:**

- **Unidirectional Data Flow**: State flows down via props, events flow up via callbacks
- **Immutable Updates**: Using spread operators for state updates
- **Single Source of Truth**: All notes stored in App component
- **Component-Level State**: Modal and form state kept local to components

### Note Object Structure

```javascript
{
  id: 1736445123456,              // Timestamp-based unique ID
  title: "My Note",               // Required string
  description: "Long text...",    // Optional string
  files: [                        // Optional array
    {
      name: "image.png",
      type: "image/png",
      size: 45678,
      data: "data:image/png;base64,..."
    }
  ],
  createdAt: "2026-01-09T18:05:23.456Z"  // ISO timestamp
}
```

---

## 🎯 Assumptions/Limitations

### Design Decisions & Trade-offs

**1. Client-Side Only Storage**

- **Assumption**: Notes are stored in component state only
- **Trade-off**: Data is lost on page refresh
- **Rationale**: Focuses on frontend architecture without backend complexity
- **Future Enhancement**: Could add localStorage or backend API

**2. No Edit Functionality**

- **Assumption**: Users can only create and delete notes
- **Trade-off**: Cannot modify existing notes
- **Rationale**: Simplifies state management and UI complexity
- **Future Enhancement**: Add edit mode with inline editing

**3. File Size Limit (5MB per file)**

- **Assumption**: Users won't need to attach large files
- **Trade-off**: Cannot attach videos or large documents
- **Rationale**: Prevents memory issues with base64 encoding
- **Alternative**: Could use File API with object URLs

**4. Maximum 5 Files per Note**

- **Assumption**: 5 files sufficient for most use cases
- **Trade-off**: Cannot attach unlimited files
- **Rationale**: Maintains clean UI and prevents performance issues

**5. No Search/Filter Functionality**

- **Assumption**: Users will have manageable number of notes
- **Trade-off**: Difficult to find specific notes with many entries
- **Rationale**: Keeps initial implementation focused
- **Future Enhancement**: Add search bar and filter options

**6. Single User Application**

- **Assumption**: One user per browser session
- **Trade-off**: No multi-user support or authentication
- **Rationale**: Simplifies architecture for frontend-only app

**7. Vanilla CSS (No Framework)**

- **Assumption**: Custom styling provides better learning experience
- **Trade-off**: More CSS code to maintain
- **Rationale**: Demonstrates CSS skills and avoids framework dependencies

**8. Image Storage as Base64**

- **Assumption**: Images converted to base64 strings
- **Trade-off**: Larger memory footprint than blob URLs
- **Rationale**: Simpler to implement and persist (if adding localStorage)

### Technical Constraints

- **Browser Compatibility**: Modern browsers only (ES6+)
- **Performance**: Best with < 100 notes due to in-memory storage
- **Accessibility**: Keyboard navigation supported, screen reader friendly
- **Responsive**: Optimized for desktop and mobile (768px breakpoint)

---

## 🌟 Features

### Core Functionality

- ✅ **Create Notes** - Title, description, and multiple file attachments
- ✅ **Delete Notes** - One-click deletion with red ✕ button
- ✅ **File Attachments** - Images, PDFs, and documents (up to 5 files, 5MB each)
- ✅ **Expandable View** - Modal popup for full note content
- ✅ **Image Viewer** - Click images to open in new browser tab
- ✅ **Download Files** - Download attached documents directly

### User Experience

- 🎨 **Professional UI** - Dark charcoal blue gradient with gray-tan accents
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Loading State** - 1.5s animated loader on app startup
- 📭 **Empty State** - Friendly message when no notes exist
- ❌ **Error Handling** - Inline validation with clear error messages
- 🎯 **Fixed-Height Cards** - Consistent card layout with gradient headers
- 📜 **Scrollable Container** - 600px max height with custom scrollbar
- 🔍 **Read More Modal** - Expandable popup for long descriptions

---

## 📁 Project Structure

```
task_manager/
├── public/
│   ├── logo.png                  # Favicon (safe icon)
│   └── notevault-logo.png        # Header logo with text
├── src/
│   ├── components/
│   │   ├── Loader.jsx            # Loading spinner component
│   │   ├── Loader.css            # Loader styles
│   │   ├── NoteForm.jsx          # Note creation form
│   │   ├── NoteForm.css          # Form styles
│   │   ├── NoteList.jsx          # Scrollable notes container
│   │   ├── NoteList.css          # List container styles
│   │   ├── NoteItem.jsx          # Note card with modal
│   │   ├── NoteItem.css          # Card and modal styles
│   │   ├── EmptyState.jsx        # Empty state component
│   │   └── EmptyState.css        # Empty state styles
│   ├── App.jsx                   # Root component
│   ├── App.css                   # App layout styles
│   ├── index.css                 # Global styles & theme
│   └── main.jsx                  # Entry point
├── index.html                    # HTML template
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite configuration
├── .gitignore                    # Git ignore rules
└── README.md                     # This file
```

---

## 🎨 Design System

### Color Palette

**Primary Colors:**

```css
--primary-color: #1e3a5f; /* Dark Charcoal Blue */
--primary-hover: #2c5282; /* Blue Hover */
--primary-dark: #0f1f38; /* Dark Blue */
```

**Accent Colors:**

```css
--accent-tan: #b8a88a; /* Tan */
--accent-tan-light: #d4c4a8; /* Light Tan */
--text-muted: #6b7280; /* Gray */
```

**Background:**

```css
--bg-primary: #f5f3ef; /* Light Beige */
--bg-card: #ffffff; /* White */
--bg-secondary: #e8e4dc; /* Light Gray */
```

**Utility:**

```css
--danger-color: #dc2626; /* Red for delete */
--border-color: #d1d5db; /* Light Gray Border */
```

---

## 🔧 Technologies Used

- **React 18** - UI library with hooks
- **Vite** - Build tool and dev server
- **Vanilla CSS** - Custom styling (no frameworks)
- **JavaScript (ES6+)** - Modern JavaScript features

---

## 📊 Performance

- **Initial Load:** < 2 seconds (including 1.5s loader)
- **Add Note:** Instant
- **Delete Note:** Instant
- **Modal Open:** < 0.3s (animated)
- **File Upload:** Real-time preview
- **Scrolling:** Smooth 60fps

---

## ♿ Accessibility

- ✅ Semantic HTML5 elements
- ✅ ARIA labels and attributes
- ✅ Keyboard navigation support
- ✅ Focus-visible states
- ✅ Readable color contrast (WCAG AA)
- ✅ Screen reader friendly

---

## 📱 Responsive Design

**Breakpoint:** 768px

**Desktop (>768px):**

- Files in left column (200px)
- Description in right column
- Horizontal layout

**Mobile (≤768px):**

- Stacked vertical layout
- Full-width components
- Touch-friendly buttons
- Optimized spacing

---

## 🚧 Future Enhancements

- [ ] LocalStorage persistence
- [ ] Edit note functionality
- [ ] Search and filter
- [ ] Categories/tags
- [ ] Export notes (PDF, JSON)
- [ ] Dark mode toggle
- [ ] Keyboard shortcuts
- [ ] Drag & drop reordering
- [ ] Backend API integration
- [ ] User authentication

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

Built with ❤️ using React and Vite

**GitHub:** [Anubhav3024](https://github.com/Anubhav3024)  
**Repository:** [NoteVault](https://github.com/Anubhav3024/NoteVault)

---

## 🙏 Acknowledgments

- React team for the amazing library
- Vite team for the blazing-fast build tool
- Design inspiration from modern note-taking apps

---

**Note Vault** - Secure, organized, and always accessible. 🔒📝
