/* ============================================
   JKUAT STUDENT PORTAL - SHARED SCRIPTS
   ============================================ */

// Temporary User Registration (Per Session/Tab)
const RegisteredUsers = {
  STORAGE_KEY: 'jkuat_registered_users',

  getAll() {
    const data = sessionStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  add(admission, password, userData) {
    const users = this.getAll();
    users.push({
      admission: admission,
      password: password,
      userData: userData,
      registeredAt: new Date().toISOString()
    });
    sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
  },

  findByAdmission(admission) {
    const users = this.getAll();
    return users.find(u => u.admission === admission);
  },

  findByEmail(email) {
    const users = this.getAll();
    return users.find(u => u.userData.email === email);
  },

  verify(admissionOrEmail, password) {
    const user = this.findByAdmission(admissionOrEmail) || this.findByEmail(admissionOrEmail);
    if (user && user.password === password) {
      return user.userData;
    }
    return null;
  }
};

// Session Management
const SessionManager = {
  SESSION_KEY: 'jkuat_session',
  USER_KEY: 'jkuat_user',

  create(admissionOrEmail, password, extraData = {}) {
    const sessionData = {
      id: this._generateId(),
      username: admissionOrEmail,
      loginTime: new Date().toISOString(),
      isValid: true
    };
    
    const userData = this.getMockStudent(admissionOrEmail, extraData);
    
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(sessionData));
    localStorage.setItem(this.USER_KEY, JSON.stringify(userData));
    
    return sessionData;
  },

  check() {
    const session = localStorage.getItem(this.SESSION_KEY);
    return session ? JSON.parse(session) : null;
  },

  getUser() {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  logout() {
    localStorage.removeItem(this.SESSION_KEY);
    localStorage.removeItem(this.USER_KEY);
    window.location.href = 'index.html';
  },

  isAuthenticated() {
    return this.check() !== null;
  },

  _generateId() {
    return 'session_' + Date.now();
  },

  getMockStudent(admissionOrEmail, extraData = {}) {
    const defaultMary = {
      id: 'STU001',
      name: 'Mary Njoroge',
      admission: 'SCT221-001/2024',
      email: 'mary.njoroge@jkuat.ac.ke',
      phone: '+254712345678',
      program: 'Bachelor of Science in Computer Science',
      course: 'BSc Computer Science',
      year: '3',
      semester: '2',
      department: 'School of Computing and IT',
      credits: 105,
      registeredUnits: ['CS201', 'CS203', 'CS205', 'CS202', 'CS204']
    };

    if (admissionOrEmail === 'SCT221-001/2024' || admissionOrEmail === 'mary.njoroge@jkuat.ac.ke') {
      return defaultMary;
    }

    const departments = ['School of Computing and IT', 'School of Business', 'School of Engineering', 'School of Science'];
    const randDept = departments[Math.floor(Math.random() * departments.length)];
    const email = extraData.email;

    return {
      id: 'STU' + Math.random().toString(36).substr(2, 6).toUpperCase(),
      name: extraData.name || 'Student User',
      admission: admissionOrEmail.includes('@') ? 'SCT' + Math.floor(Math.random() * 1000) + '-' + Math.floor(Math.random() * 1000) + '/2024' : admissionOrEmail,
      email: email,
      phone: '+254' + Math.floor(Math.random() * 900000000 + 100000000),
      program: extraData.course || 'BSc Computer Science',
      course: extraData.course || 'BSc Computer Science',
      year: extraData.year || Math.floor(Math.random() * 4 + 1).toString(),
      semester: extraData.semester || Math.floor(Math.random() * 2 + 1).toString(),
      department: randDept,
      credits: Math.floor(Math.random() * 40 + 60),
      registeredUnits: []
    };
  }
};

// Mock Data
const MockData = {
  timetable: {
    Monday: [
      { time: '08:00-09:30', course: 'Web Development', code: 'CS201', room: 'Lab 1.1', lecturer: 'Dr. Peter Kipchoge' },
      { time: '10:00-11:30', course: 'Database Systems', code: 'CS203', room: '101', lecturer: 'Prof. Alice Mwangi' },
      { time: '14:00-15:30', course: 'Software Engineering', code: 'CS205', room: '210', lecturer: 'Dr. James Nyambura' }
    ],
    Tuesday: [
      { time: '09:00-10:30', course: 'Mobile Development', code: 'CS202', room: 'Lab 2.1', lecturer: 'Eng. Samuel Kipkemei' },
      { time: '13:00-14:30', course: 'Network Security', code: 'CS204', room: '305', lecturer: 'Dr. Catherine Ochieng' }
    ],
    Wednesday: [
      { time: '08:00-09:30', course: 'Web Development', code: 'CS201', room: 'Lab 1.1', lecturer: 'Dr. Peter Kipchoge' },
      { time: '11:00-12:30', course: 'Artificial Intelligence', code: 'CS206', room: '401', lecturer: 'Dr. David Kipchoge' }
    ],
    Thursday: [
      { time: '09:00-10:30', course: 'Database Systems', code: 'CS203', room: '101', lecturer: 'Prof. Alice Mwangi' },
      { time: '14:00-15:30', course: 'Network Security', code: 'CS204', room: '305', lecturer: 'Dr. Catherine Ochieng' }
    ],
    Friday: [
      { time: '10:00-12:00', course: 'Software Engineering', code: 'CS205', room: '210', lecturer: 'Dr. James Nyambura' }
    ]
  },

  results: [
    {
      semester: 'Semester 5 (2025)',
      gpa: 3.82,
      credits: 60,
      units: [
        { code: 'CS201', name: 'Web Development', grade: 'A', points: 4.0, credits: 5 },
        { code: 'CS203', name: 'Database Systems', grade: 'A-', points: 3.7, credits: 5 },
        { code: 'CS205', name: 'Software Engineering', grade: 'A', points: 4.0, credits: 5 },
        { code: 'CS202', name: 'Mobile Development', grade: 'B+', points: 3.3, credits: 5 },
        { code: 'CS204', name: 'Network Security', grade: 'A', points: 4.0, credits: 5 }
      ]
    }
  ],

  fees: {
    totalFee: 60000,
    paid: 40000,
    balance: 20000,
    dueDate: '2026-03-31',
    payments: [
      { date: '2025-09-10', amount: 20000, method: 'Bank Transfer', status: 'Completed' },
      { date: '2025-10-15', amount: 20000, method: 'Mpesa', status: 'Completed' }
    ]
  },

  availableUnits: [
    { code: 'CS201', name: 'Web Development', credits: 5, prerequisite: 'CS101', status: 'Available' },
    { code: 'CS202', name: 'Mobile Development', credits: 5, prerequisite: 'CS101', status: 'Available' },
    { code: 'CS203', name: 'Database Systems', credits: 5, prerequisite: 'CS102', status: 'Available' },
    { code: 'CS204', name: 'Network Security', credits: 5, prerequisite: 'CS103', status: 'Available' },
    { code: 'CS205', name: 'Software Engineering', credits: 5, prerequisite: 'CS201', status: 'Available' },
    { code: 'CS206', name: 'Artificial Intelligence', credits: 5, prerequisite: 'MATH101', status: 'Available' }
  ],

  libraryBooks: [
    { title: 'Clean Code', author: 'Robert C. Martin', isbn: '0132350882', borrowDate: '2025-11-01', dueDate: '2025-12-01', status: 'Borrowed' },
    { title: 'Design Patterns', author: 'Gang of Four', isbn: '0201633612', borrowDate: '2025-10-15', dueDate: '2025-11-15', status: 'Overdue' },
    { title: 'The Pragmatic Programmer', author: 'Hunt & Thomas', isbn: '0135957052', borrowDate: '2025-12-01', dueDate: '2026-01-01', status: 'Borrowed' }
  ],

  eResources: [
    { title: 'JavaScript: The Good Parts', access: 'Full Access', type: 'E-Book' },
    { title: 'Web Development Tutorial', access: 'Limited', type: 'Video' },
    { title: 'Database Design Course', access: 'Full Access', type: 'Course' },
    { title: 'Security Basics', access: 'Full Access', type: 'E-Book' }
  ],

  messages: [
    { id: 1, type: 'inbox', sender: 'Prof. Alice Mwangi', subject: 'Database Project Submission', preview: 'Please submit your project by Friday...', read: false, date: '2025-12-10' },
    { id: 2, type: 'inbox', sender: 'Admin', subject: 'Fee Payment Reminder', preview: 'Your balance is KES 330,000...', read: true, date: '2025-12-08' },
    { id: 3, type: 'sent', sender: 'You', subject: 'Project Inquiry', preview: 'When is the project deadline?', read: true, date: '2025-12-07' }
  ],

  notifications: [
    { id: 1, type: 'warning', title: 'Fee Balance Outstanding', message: 'You have an outstanding balance of KES 330,000', date: '2025-12-10', read: false },
    { id: 2, type: 'info', title: 'New Course Available', message: 'New course "Cloud Computing" is now available for registration', date: '2025-12-08', read: true },
    { id: 3, type: 'success', title: 'Assignment Submitted', message: 'Your assignment has been successfully submitted', date: '2025-12-05', read: true }
  ],

  courses: [
    { code: 'CS201', title: 'Web Development', instructor: 'Dr. Peter Kipchoge', progress: 75 },
    { code: 'CS203', title: 'Database Systems', instructor: 'Prof. Alice Mwangi', progress: 60 },
    { code: 'CS205', title: 'Software Engineering', instructor: 'Dr. James Nyambura', progress: 85 }
  ]
};

// Form Utilities
const FormUtils = {
  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  validateAdmission(admission) {
    const re = /^SCT\d{3}-\d{3}\/\d{4}$/;
    return re.test(admission);
  },

  validatePassword(password, minLength = 8) {
    return password.length >= minLength;
  },

  validatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    return strength;
  },

  showFieldError(fieldName, message) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    const errorEl = document.getElementById(`${fieldName}-error`);
    
    if (field) field.style.borderColor = 'var(--danger)';
    if (errorEl) errorEl.textContent = message;
  },

  clearFieldError(fieldName) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    const errorEl = document.getElementById(`${fieldName}-error`);
    
    if (field) field.style.borderColor = '';
    if (errorEl) errorEl.textContent = '';
  }
};

// Formatters
const Formatters = {
  currency(amount) {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(amount);
  },

  date(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-KE');
  },

  getGradeColor(grade) {
    const colors = {
      'A': '#10b981',
      'A-': '#3b82f6',
      'B+': '#f59e0b',
      'B': '#f59e0b',
      'B-': '#ef4444',
      'C': '#ef4444'
    };
    return colors[grade] || '#808a99';
  }
};

// Navigation
function checkSession() {
  if (!SessionManager.isAuthenticated()) {
    window.location.href = '/index.html';
  }
}

function initializeNav() {
  const links = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop() || 'app.html';
  
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

function setupLogout() {
  const logoutBtn = document.querySelector('[data-action="logout"]');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (confirm('Are you sure you want to logout?')) {
        SessionManager.logout();
      }
    });
  }
}

function openSidebar() {
  document.querySelector('.sidebar').classList.add('open');
}

function closeSidebar() {
  document.querySelector('.sidebar').classList.remove('open');
}

// Tab Management
function setupTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.getAttribute('data-tab');
      
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      button.classList.add('active');
      document.getElementById(`${tabName}-tab`).classList.add('active');
    });
  });
}

// Sidebar Toggle
function setupSidebarToggle() {
  const toggleBtn = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  if (sidebar) {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.sidebar') && !e.target.closest('.sidebar-toggle')) {
        sidebar.classList.remove('open');
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initializeNav();
  setupLogout();
  setupTabs();
  setupSidebarToggle();
});
