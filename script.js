/* --- Global Styles --- */
:root {
    --bg-primary: #0a0f1d;
    --bg-secondary: #111827;
    --text-primary: #f9fafb;
    --text-secondary: #9ca3af;
    --accent: #10b981; /* High-converting growth green */
    --accent-hover: #059669;
    --card-bg: #1f2937;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

.section-title {
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 40px;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--accent);
    margin: 10px auto 0;
    border-radius: 2px;
}

/* --- Buttons --- */
.btn {
    display: inline-block;
    padding: 12px 28px;
    border-radius: 6px;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition);
}

.primary-btn {
    background-color: var(--accent);
    color: #064e3b;
}

.primary-btn:hover {
    background-color: var(--accent-hover);
    color: #ffffff;
}

.secondary-btn {
    border: 2px solid var(--accent);
    color: var(--accent);
}

.secondary-btn:hover {
    background-color: var(--accent);
    color: #064e3b;
}

/* --- Navbar --- */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(10, 15, 29, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    border-bottom: 1px solid #1f2937;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
}

.logo {
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: 0.5px;
}

.logo span {
    color: var(--accent);
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-links a:hover {
    color: var(--accent);
    transition: var(--transition);
}

.menu-toggle {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* --- Hero Section --- */
.hero {
    min-height: 90vh;
    display: flex;
    align-items: center;
    padding-top: 80px;
}

.hero-text h3 {
    color: var(--accent);
    font-size: 1.2rem;
    font-weight: 600;
}

.hero-text h1 {
    font-size: 3.8rem;
    margin: 10px 0;
}

.hero-text .tagline {
    font-size: 1.5rem;
    color: var(--text-secondary);
    margin-bottom: 20px;
}

.hero-text .description {
    max-width: 600px;
    color: var(--text-secondary);
    margin-bottom: 35px;
    font-size: 1.1rem;
}

.hero-btns {
    display: flex;
    gap: 15px;
}

/* --- Stats Highlights --- */
.stats-section {
    padding: 30px 0 60px 0;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.stat-card, .stat-cardHighlight {
    background-color: var(--card-bg);
    padding: 25px;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #374151;
}

.stat-cardHighlight {
    border-color: var(--accent);
    background: linear-gradient(180deg, #1f2937 0%, #064e3b 100%);
}

.stat-card h2, .stat-cardHighlight h2 {
    font-size: 2.5rem;
    color: var(--accent);
    margin-bottom: 5px;
}

.stat-cardHighlight h2 {
    color: #ffffff;
}

/* --- Services --- */
section {
    padding: 80px 0;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    color: var(--text-secondary);
    font-size: 1.15rem;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 25px;
}

.service-card {
    background-color: var(--card-bg);
    padding: 35px 25px;
    border-radius: 8px;
    border: 1px solid #374151;
    transition: var(--transition);
}

.service-card:hover {
    transform: translateY(-6px);
    border-color: var(--accent);
}

.service-card i {
    font-size: 2.5rem;
    color: var(--accent);
    margin-bottom: 20px;
}

.service-card h3 {
    margin-bottom: 12px;
    font-size: 1.25rem;
}

.service-card p {
    color: var(--text-secondary);
    font-size: 0.95rem;
}

/* --- Contact & Footer --- */
.contact-wrapper {
    max-width: 600px;
    margin: 0 auto;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
    width: 100%;
    padding: 14px;
    border-radius: 6px;
    border: 1px solid #374151;
    background-color: var(--card-bg);
    color: var(--text-primary);
    outline: none;
    font-size: 1rem;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
    border-color: var(--accent);
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 25px;
    margin-top: 30px;
}

.social-links a {
    font-size: 1.8rem;
    color: var(--text-secondary);
    transition: var(--transition);
}

.social-links a:hover {
    color: var(--accent);
}

footer {
    text-align: center;
    padding: 25px 0;
    border-top: 1px solid #1f2937;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* --- Responsive Navigation --- */
@media (max-width: 768px) {
    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 75px;
        left: 0;
        width: 100%;
        background-color: var(--bg-primary);
        padding: 20px;
        border-bottom: 1px solid #1f2937;
    }

    .nav-links.active {
        display: flex;
    }

    .menu-toggle {
        display: block;
    }

    .hero-text h1 {
        font-size: 2.8rem;
    }
}
