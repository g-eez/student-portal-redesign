# JKUAT Student Portal - Compact Dynamic System

## Overview
A fully functional, dynamic student portal system for JKUAT with real registration, login, and interactive features. Built as a Single Page Application (SPA) for maximum compactness.

## File Structure
```
jkuat-portal/
├── README.md      # This file
├── index.html     # Landing/Login/Registration page
├── app.html       # Main SPA containing all portal pages
├── script.js      # All JavaScript logic
└── styles.css     # All styling
```

**Total: 5 files only**

## Features

### Dynamic Authentication System
- **No default credentials** - Users must register first
- **Session-based temporary storage** - Data stored in sessionStorage
- **Multiple user support** - Can register multiple accounts
- **Auto-cleanup** - Data clears when browser tab closes

### Registration Fields
- Full Name
- Admission Number (Format: SCT221-XXX/YEAR)
- Year of Study (dropdown: Year 1-5)
- Semester (dropdown: Semester 1-2)
- Course/Program (dropdown with 10+ programs)
- Student Email
- Password (with strength indicator)
- Confirm Password

### Login System
- Login with Admission Number or Email
- Password authentication
- Remember me option
- Session management
- Auto-redirect to app.html on success

### Portal Pages (All in app.html)
1. **Dashboard** - Overview with user info in header
2. **Timetable** - Weekly schedule management
3. **Unit Registration** - Add/remove units dynamically
4. **Results** - View grades and GPA
5. **Fees** - Fee statement and payment tracking
6. **Library** - Book search and borrowing
7. **E-Learning** - Course materials access
8. **Profile** - Edit user information
9. **Messages** - Internal messaging system
10. **Notifications** - System notifications

### Removed Features (As Requested)
- ❌ ID Card
- ❌ Clearance
- ❌ Transcript
- ❌ Hostel

## How It Works

### First Time Usage
1. Open `index.html`
2. Click "Register" tab
3. Fill all registration fields
4. Submit - account created in sessionStorage
5. Switch to "Sign In" tab
6. Login with your credentials
7. Redirected to `app.html`

### Dashboard Header
Displays logged-in user's:
- Full Name
- Course/Program
- Admission Number
- Year of Study
- Semester

### Dynamic Features

#### Unit Registration
- Browse available units
- Add units to your schedule
- Remove units
- See total credit hours
- Submit registration

#### Timetable
- View weekly classes
- Filter by day
- See all registered units
- Print schedule

#### Results
- View semester grades
- Calculate GPA automatically
- Track academic progress

#### Fees
- See total fees
- Track payments
- View balance
- Payment history

#### Profile Management
- Edit personal information
- Change password
- Update course details
- Save changes dynamically

### Data Persistence
- Uses **sessionStorage** for temporary data
- Data persists during browser session
- Clears when tab/browser closes
- Supports multiple user accounts
- No backend required

## Technical Details

### Technology Stack
- Pure HTML5
- Vanilla CSS3
- Vanilla JavaScript (ES6+)
- No frameworks or libraries
- No backend required

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Responsive Design
- Mobile: <768px
- Tablet: 768-1024px
- Desktop: >1024px

### Theme Support
- Light mode (default)
- Dark mode toggle
- Persists across pages

## Usage Instructions

### Setup
1. Download all 5 files
2. Keep them in the same directory
3. Open `index.html` in a browser

### First Login
1. Click "Register" tab
2. Enter:
   - Name: Your full name
   - Admission: SCT221-XXX/YEAR format
   - Year: Select from dropdown
   - Semester: Select from dropdown
   - Course: Select from dropdown
   - Email: Your student email
   - Password: Minimum 8 characters
   - Confirm password
3. Check "I accept the Terms of Service"
4. Click "Create Account"
5. Switch to "Sign In"
6. Login with your credentials

### Navigation
- Use sidebar to switch between pages
- Click breadcrumbs to go back
- Header shows your info always
- Logout clears your session

### Adding Units
1. Go to "Unit Registration"
2. Browse available units
3. Click "Add" on desired units
4. See them in "Registered Units" section
5. View total credit hours
6. Click "Submit Registration"

### Viewing Timetable
1. Units you register appear in timetable
2. Filter by day of week
3. See time, course, room, lecturer
4. Print your schedule

### Checking Results
1. View your registered units
2. Grades auto-calculated
3. See semester GPA
4. Track progress

## Data Structure

### User Object
```javascript
{
  fullName: "John Doe",
  admissionNumber: "SCT221-001/2024",
  year: "Year 2",
  semester: "Semester 1",
  course: "BSc Computer Science",
  email: "john@students.jkuat.ac.ke",
  password: "hashed",
  registeredUnits: [],
  timetable: {},
  results: [],
  fees: {},
  profile: {}
}
```

### Storage Keys
- `jkuat_users` - Array of all registered users
- `jkuat_current_user` - Currently logged-in user
- `theme` - Light/dark mode preference

## Security Notes
⚠️ **This is a demo system**
- Passwords stored in plain text (sessionStorage)
- No encryption
- No backend validation
- Not for production use
- Educational purposes only

For production:
- Use proper backend (Node.js, PHP, etc.)
- Hash passwords (bcrypt)
- Use HTTPS
- Implement CSRF protection
- Add input sanitization
- Use database (MySQL, PostgreSQL)

## Troubleshooting

### Can't Login
- Make sure you registered first
- Check admission number format
- Passwords are case-sensitive
- Clear browser cache if stuck

### Data Lost
- sessionStorage clears when tab closes
- This is intentional for demo
- Don't close tab during session

### Page Not Loading
- Check all 5 files in same folder
- Check browser console for errors
- Try different browser
- Clear cache and reload

## Customization

### Adding More Courses
Edit `index.html` - find the course dropdown and add options

### Adding More Units
Edit `script.js` - find `availableUnits` array and add objects

### Changing Colors
Edit `styles.css` - modify CSS custom properties in `:root`

### Adding Pages
Edit `app.html` and `script.js` - add new view section and navigation

## Credits
- Built for JKUAT
- Modern SPA architecture
- Clean, maintainable code
- Educational project

## License
MIT License - Free to use and modify

---

**Version:** 1.0.0  
**Last Updated:** February 2026  
**Status:** Production-Ready Demo
