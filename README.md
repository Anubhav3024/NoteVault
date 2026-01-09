# 📝 Note Vault - Secure Notes Management App

A professional, feature-rich notes management application built with React and Vite, demonstrating clean architecture, state management, and exceptional user experience.

![Note Vault](public/notevault-logo.png)

## 🌟 Features

### Core Functionality

- ✅ **Create Notes** - Add notes with title, description, and multiple file attachments
- ✅ **Delete Notes** - Remove notes with a single click
- ✅ **File Attachments** - Support for images, PDFs, and documents (up to 5 files, 5MB each)
- ✅ **Expandable View** - Modal popup for viewing full note content
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

### Technical Highlights

- 🏗️ **Clean Architecture** - Component separation with single responsibility
- 🔄 **State Management** - Single source of truth using React hooks
- 🎭 **Smooth Animations** - Fade-in, slide-up, and hover effects
- ♿ **Accessible** - Keyboard navigation and ARIA attributes
- 🎨 **Custom Scrollbars** - Themed scrollbars matching app design

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd task_manager

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
task_manager/
├── public/
│   ├── logo.png                  # Favicon
│   └── notevault-logo.png        # Header logo
├── src/
│   ├── components/
│   │   ├── Loader.jsx/css        # Loading spinner
│   │   ├── NoteForm.jsx/css      # Note creation form
│   │   ├── NoteList.jsx/css      # Scrollable notes container
│   │   ├── NoteItem.jsx/css      # Note card with modal
│   │   └── EmptyState.jsx/css    # Empty state component
│   ├── App.jsx/css               # Root component
│   ├── index.css                 # Global styles & theme
│   └── main.jsx                  # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Design System

### Color Palette

**Primary Colors:**

- Dark Charcoal Blue: `#1e3a5f`
- Blue Hover: `#2c5282`
- Dark Blue: `#0f1f38`

**Accent Colors:**

- Tan: `#b8a88a`
- Light Tan: `#d4c4a8`
- Gray: `#6b7280`

**Background:**

- Primary: `#f5f3ef`
- Card: `#ffffff`
- Secondary: `#e8e4dc`

### Typography

- **Headers:** 1.25-2rem, weight 600-700
- **Body:** 0.9-1rem, line-height 1.5-1.7
- **Small Text:** 0.75-0.875rem

## 💡 Usage Guide

### Creating a Note

1. Enter a **title** (required)
2. Add a **description** (optional)
3. Attach **files** by clicking the file input (optional)
   - Supports: Images, PDF, DOC, DOCX, TXT
   - Max 5 files, 5MB each
4. Click **Add Note**

### Viewing Notes

- **Scroll** through the notes container
- **Click images** to open in new tab
- **Click "...Read More"** to open full content in modal
- **Download files** using the download button

### Deleting Notes

- Click the **red ✕ button** in the card header

## 🏗️ Architecture

### Component Hierarchy

```
App (State Container)
  ↓
  ├─ Loader (Conditional)
  ├─ NoteForm (Controlled Component)
  └─ NoteList (Presentation)
       ├─ EmptyState (Conditional)
       └─ NoteItem[] (With Modal State)
```

### State Management

**Global State (App.jsx):**

- `notes` - Array of note objects
- `loading` - Boolean for loading state

**Local State (NoteForm.jsx):**

- `title`, `description` - Form inputs
- `attachedFiles` - File attachments
- `formError` - Validation errors

**Local State (NoteItem.jsx):**

- `showModal` - Modal visibility

### Data Flow

1. **Unidirectional** - State flows down via props
2. **Event Callbacks** - Actions flow up via callbacks
3. **Immutable Updates** - Using spread operators
4. **Single Source of Truth** - All notes in App state

## 🎯 Key Features Explained

### 1. Modal Popup System

Click "...Read More" to open an expandable modal:

- Full-screen overlay with backdrop
- Scrollable content area
- All attachments in grid layout
- Click outside or ✕ to close
- Smooth animations

### 2. File Management

**Upload:**

- Drag & drop or click to select
- Multiple files supported
- Preview images before upload
- Remove files before submitting

**Display:**

- Images on left (200px column)
- Description on right
- Download buttons for documents

### 3. Scrollable Container

- Fixed 600px height (500px mobile)
- Custom scrollbar matching theme
- Sticky "Your Notes" header
- Smooth scrolling

### 4. Card Design

**Header:**

- Gradient background (matches main header)
- White title text
- Red delete button with ✕

**Body:**

- Files/images on left
- Description on right
- Timestamp at bottom

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Vanilla CSS** - Styling (no frameworks)
- **JavaScript (ES6+)** - Programming language

## 📊 Performance

- **Initial Load:** < 2 seconds (including loader)
- **Add Note:** Instant
- **Delete Note:** Instant
- **Modal Open:** < 0.3s (animated)
- **File Upload:** Real-time preview

## ♿ Accessibility

- ✅ Semantic HTML5 elements
- ✅ ARIA labels and attributes
- ✅ Keyboard navigation support
- ✅ Focus-visible states
- ✅ Readable color contrast
- ✅ Screen reader friendly

## 📱 Responsive Design

**Breakpoint:** 768px

**Desktop (>768px):**

- Files in left column
- Description in right column
- Horizontal layout

**Mobile (≤768px):**

- Stacked vertical layout
- Full-width components
- Touch-friendly buttons

## 🐛 Known Limitations

- Notes are stored in component state only (not persisted)
- No backend/API integration
- No edit functionality (only add/delete)
- No search or filter features
- No categories or tags
- Single user only

## 🚧 Future Enhancements

- [ ] LocalStorage persistence
- [ ] Edit note functionality
- [ ] Search and filter
- [ ] Categories/tags
- [ ] Export notes (PDF, JSON)
- [ ] Dark mode toggle
- [ ] Keyboard shortcuts
- [ ] Drag & drop reordering

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with ❤️ using React and Vite

## 🙏 Acknowledgments

- React team for the amazing library
- Vite team for the blazing-fast build tool
- Design inspiration from modern note-taking apps

---

**Note Vault** - Secure, organized, and always accessible. 🔒📝
