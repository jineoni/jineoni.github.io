const themeToggle = document.querySelector('.theme-toggle');
let selectedTheme;

try {
  selectedTheme = localStorage.getItem('portfolio-theme');
} catch {
  // The toggle still works when browser storage is unavailable.
}

function updateTheme() {
  const dark = selectedTheme === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.firstElementChild.textContent = dark ? '☀' : '☾';
}

themeToggle.addEventListener('click', () => {
  selectedTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  updateTheme();
  try {
    localStorage.setItem('portfolio-theme', selectedTheme);
  } catch {
    // Keep the selected theme for the current page.
  }
});

updateTheme();
themeToggle.hidden = false;

const projects = {
  kearney: {
    type: 'Internship',
    title: 'Newsroom Coverage Tracker',
    period: 'Mar 2026 – Jun 2026',
    role: 'Research Analyst Intern at Kearney',
    tags: ['Python', 'BERT', 'CLIP', 'Multi-modal Matching'],
    overview: 'Built an automated system to crawl 40+ country-level Samsung newsrooms and verify whether HQ-issued press releases were actually picked up and published by each local newsroom.',
    context: 'Manually checking 40+ newsrooms for HQ story pickup didn\'t scale, and matching HQ articles to local coverage was complicated by differing site structures, languages, and minor content variations between what looked like the same story.',
    works: [
      ['Multi-format Crawling', 'Built country-specific crawlers spanning RSS feeds, static HTML, category pages, and JS-rendered pages parsed via embedded structured data.'],
      ['Semantic Matching', 'Matched HQ articles to local candidates using multilingual text embeddings to capture semantic similarity across languages.'],
      ['Multimodal Matching', 'Extended matching beyond title and body text to thumbnail images via CLIP embeddings, and tested hashtag-based matching before dropping it for limited effectiveness.'],
      ['Evaluation', 'Compared four matching configurations (title-only, body-only, thumbnail-only, combined) against a human-labeled gold-standard set, scoring each via precision and recall.'],
    ],
    results: [
      ['Matching Accuracy', 'The combined title, body, and thumbnail signal outperformed any single signal alone, becoming the pipeline\'s final matching configuration.'],
    ]
  },
  kakaomobility: {
    type: 'Internship',
    title: 'Traffic Flow Road Clustering',
    period: 'May 2025 – Feb 2026',
    role: 'Data Science Intern at Kakao Mobility',
    tags: ['Python', 'PCA', 'K-means', 'BigQuery'],
    overview: 'Replaced Kakao Mobility\'s static road classification with a traffic-flow-based clustering feature to make the ETA prediction model more responsive to real-world conditions.',
    context: 'Static road codes couldn\'t capture how traffic conditions actually vary by time and location, limiting the model\'s sensitivity to real driving conditions.',
    works: [
      ['Feature Engineering', 'Iterated through 5 rounds of engineering to produce four traffic-flow features: free-flow speed, peak drop intensity, peak dominance bias, and flow roughness.'],
      ['Clustering', 'Applied PCA and K-means to group road segments by these flow signatures instead of static physical attributes.'],
    ],
    results: [
      ['Validation', 'Achieved an Adjusted Rand Index of 0.85 for cluster stability across months.'],
      ['Model Impact', 'Delivered a higher-granularity input that improved the ETA model\'s sensitivity to dynamic conditions.'],
    ]
  },
  translab: {
    type: 'Research',
    title: 'Railway Access Time Analysis',
    period: 'Mar 2024 – Jun 2024',
    role: 'Research Intern at Transportation Planning Lab, Yonsei University',
    tags: ['Python', 'R'],
    overview: 'Analyzed how access mode, trip purpose, and station characteristics shape access time to Korea\'s railway stations, to support a policy-oriented accessibility study.',
    works: [
      ['Variable Validation', 'Applied t-tests and ANOVA across 18,306 cleaned trip records to test candidate variables, including access time differences by population density.'],
      ['Model Selection', 'Compared 8 regression scenarios varying variable inclusion and functional form, selecting the one minimizing multicollinearity (condition number) while maximizing fit.'],
      ['Multiple Regression', 'Built a final log-linear model spanning trip attributes (access mode, transfers, purpose, party size), station attributes (region, KTX service), and socioeconomic traits (age, gender, job and car/carshare status).'],
    ],
    results: [
      ['Explanatory Power', 'Achieved R² = 0.296 while keeping the model interpretable for policy use, with access mode and transfer status as the strongest predictors of access time.'],
    ]
  }
};

function openModal(id) {
  const p = projects[id];
  const resultBlock = p.results.length ? `
    <div class="modal-section">
      <h4>Key Results</h4>
      ${p.results.map(([k, v]) => `
        <div class="result-item">
          <div class="result-check">✓</div>
          <div><strong>${k}:</strong> ${v}</div>
        </div>`).join('')}
    </div>` : '';

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-type">${p.type}</div>
    <h2>${p.title}</h2>
    <div class="modal-period">${p.period}</div>
    ${p.role ? `<div class="modal-role">${p.role}</div>` : ''}
    <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <div class="modal-section"><h4>Overview</h4><p>${p.overview}</p></div>
    ${p.context ? `<div class="modal-section"><h4>Problem Context</h4><p>${p.context}</p></div>` : ''}
    <div class="modal-section"><h4>Key Works</h4><ul>${p.works.map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('')}</ul></div>
    ${resultBlock}
  `;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeOnBg(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

const obs = new IntersectionObserver(
  entries => entries.forEach(x => { if (x.isIntersecting) x.target.classList.add('in'); }),
  { threshold: 0.08 }
);
document.querySelectorAll('.fade').forEach(el => obs.observe(el));
