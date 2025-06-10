# 🧪 Front-End Test Automation — News Website

This project implements a complete front-end test automation suite for a news website using [Playwright](https://playwright.dev). The goal is to ensure the reliability, accessibility, responsiveness, and user interface integrity of the site.

<p align="center">
  <img src="https://github.com/user-attachments/assets/5340c9d0-248e-49a7-868e-e15a47244b76" alt="news" width="400" />
</p>


---

## 📌 Project Objectives

- Validate critical user flows such as reading articles and searching for news.
- Ensure accessibility compliance using `axe-core`.
- Verify mobile responsiveness and theming (light/dark).
- Automate tests to run on every push using GitHub Actions.

---

## 🚀 Technologies Used

| Tool         | Purpose                            |
|--------------|------------------------------------|
| Playwright   | UI and E2E testing                 |
| axe-playwright | Accessibility testing           |
| GitHub Actions | Continuous integration (CI)     |
| TypeScript   | Static typing for test files       |

---

## ✅ Test Coverage

### 📄 Home Page
- Page loads with headlines
- Navigation menu is visible and functional

### 🔎 Search
- Search returns relevant results
- Handles empty/no result searches gracefully

### 📰 Article Page
- Articles open correctly and display content
- Images have descriptive `alt` attributes

### 🌓 Theme
- Toggle between dark and light modes

### 📱 Responsiveness
- Mobile layout displays hamburger menu
- Viewport resizing does not break layout

### ♿ Accessibility
- Pages pass automated accessibility checks (WCAG) using `axe-core`

### 🔁 Pagination
- Pagination navigation is functional

---

## 📂 Project Structure
```yaml
news-site-tests/
│
├── tests/
│ ├── home.spec.ts
│ ├── search.spec.ts
│ ├── article.spec.ts
│ ├── theme.spec.ts
│ ├── responsive.spec.ts
│ ├── accessibility.spec.ts
│ └── pagination.spec.ts
│
├── .github/workflows/
│ └── ci.yml
│
├── package.json
├── README.md
```

## 📦 Installation & Setup

#### Clone the repository
```bash
git clone https://github.com/yourusername/news-site-tests.git
cd news-site-tests
```

#### Install dependencies
```bash
npm install
```

#### Install Playwright browsers
```bash
npx playwright install
```

#### Run all tests
```bash
npx playwright test
```

#### Run tests in headed mode (with browser window)
```bash
npx playwright test --headed
```

#### Open test report (after test run)
```bash
npx playwright show-report
```

## ⚙️ Continuous Integration (CI)
This project uses GitHub Actions to run the test suite automatically on every push and pull request to the main branch.

Workflow configuration: .github/workflows/ci.yml

## 🔒 Accessibility Testing
Accessibility tests are powered by axe-playwright. It automatically scans pages for WCAG violations.
