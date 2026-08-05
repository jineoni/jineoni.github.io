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
    ],
    companyLink: 'https://www.kearney.com',
    companyName: 'Kearney'
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
    ],
    companyLink: 'https://www.kakaomobility.com',
    companyName: 'Kakao Mobility'
  },
  translab: {
    type: 'Research',
    title: 'Station Access Time Modeling',
    period: 'Mar 2024 – Jun 2024',
    role: 'Research Intern at Transportation Planning Lab, Yonsei University',
    tags: ['Python', 'R'],
    overview: 'Built an interpretable model of railway access time to support a policy-oriented study on transit accessibility.',
    works: [
      ['Statistical Modeling', 'Built a linear regression model for railway access time using national travel survey data.'],
      ['Variable Validation', 'Applied t-tests and ANOVA to test candidate variable significance.'],
    ],
    results: [
      ['Explanatory Power', 'Achieved 30%+ R² while preserving the interpretability required for policy integration.'],
    ]
  },
  umc: {
    type: 'Team Project',
    title: 'Seoul Digital Connectivity Analysis',
    period: 'Dec 2025 – Jun 2026',
    role: 'ITU UMC Data Hackathon 2026 · Recognized by ITU as 1 of 7 notable teams (104 applicants)',
    tags: ['Python', 'HLM', 'OpenAI API'],
    overview: 'Applied the ITU\'s Universal & Meaningful Connectivity (UMC) framework to Seoul, combining district-level indicators, individual survey data, and hyperlocal community posts to locate digital connectivity gaps and how they\'re actually experienced.',
    context: 'Official connectivity indicators operate at the district level and can miss disparities that only surface in individual usage patterns or residents\' lived, day-to-day experience.',
    works: [
      ['Composite Index', 'Built a UMC composite index across Seoul\'s 25 districts from six dimensions (Connectivity, Availability for Use, Affordability, Devices, Digital Skills, Safety), then tested spatial clustering (LISA) for district hot and cold spots.'],
      ['Multilevel Modeling', 'Applied a two-level hierarchical linear model to 10,000 individuals nested in 25 districts to separate individual- from district-level drivers of digital usage.'],
      ['Platform Signal Pipeline', 'Crawled 1.3M+ Danggeun community posts from 2024 to 2026, then built a 3-layer pipeline combining LLM classification, Empirical-Bayes shrinkage against administrative priors, and multi-agent inference to surface lived-experience deficits by district.'],
    ],
    results: [
      ['Composite Score', 'Ranged from 0.279 in Jungnang-gu to 0.695 in Seocho-gu, with individual traits like lower education and older age explaining most of the usage gap rather than district conditions.'],
      ['Validated Blind Spots', 'Validated LLM classification against human review at 84.7% agreement (κ = 0.673) and surfaced gaps official indicators missed, such as Jungnang-gu\'s "adequate" score masking recurring weather-driven outages.'],
      ['Policy Translation', 'Proposed two interventions grounded in these findings: point-of-need digital support for low-educated older adults, and a dedicated resilience response for weather-driven communications outages.'],
    ]
  },
  drt: {
    type: 'Undergraduate Capstone Project',
    title: 'Impact of Demand-Responsive Transit (DRT) on Property Values',
    period: 'Sep 2025 – Dec 2025',
    role: 'Best Capstone Project, 2025',
    tags: ['Python', 'RDD'],
    overview: 'A causal study examining whether DRT (Demand-Responsive Transit) introduction leads to measurable changes in property values in transport-disadvantaged areas.',
    context: 'Limited transit access can suppress property values in transport-disadvantaged areas, yet DRT\'s actual economic impact remains empirically unverified.',
    works: [
      ['Accessibility Mapping', 'Built a GIS-based transit accessibility index from bus stop and subway station density to identify transport-disadvantaged areas, then matched comparable neighborhoods via quasi-experimental design.'],
      ['Causal Estimation', 'Applied regression discontinuity design (RDD) with weighted least squares across 12 matched neighborhood pairs to isolate DRT\'s impact on property values from broader market conditions.'],
    ],
    results: [
      ['Trend Reversal', 'In a declining market, DRT-served areas shifted from falling prices to a 3.51-point growth trend, while non-served areas kept declining.'],
      ['Growth Amplification', 'In a rising market, DRT-served areas appreciated 1.5× faster than non-served areas.'],
      ['Downturn Cushioning', 'In another declining market, DRT-served areas fell far less than non-served areas.'],
    ]
  },
  dotori: {
    type: 'Team Project',
    title: 'Dotori, AI College Application Consulting Agent',
    period: 'Nov 2024 – Apr 2025',
    tags: ['Python', 'TypeScript', 'OpenAI', 'FastAPI'],
    overview: 'An AI platform that provides personalized college admissions strategies, making high-quality consulting accessible and affordable.',
    context: 'Professional admissions consulting is expensive and time-intensive. This project addresses the information gap through automation and data-driven matching.',
    works: [
      ['Data Pipeline', 'Built a pipeline to parse Common Data Set PDFs from universities into a structured database.'],
      ['Matching Algorithm', 'Developed a weighted scoring system to categorize school fit into Reach, Match, and Safety.'],
      ['Dashboard', 'Built a visualization feature for students to compare their profile against each matched school.'],
    ],
    results: []
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
    ${p.companyLink ? `<div class="modal-section"><a href="${p.companyLink}" target="_blank" class="ext-link">Visit ${p.companyName} Website →</a></div>` : ''}
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
