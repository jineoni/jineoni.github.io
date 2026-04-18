const projects = {
  drt: {
    type: 'Undergraduate Capstone Project',
    title: 'Impact of Demand-Responsive Transit (DRT) on Property Values',
    period: 'Sep 2025 – Dec 2025',
    tags: ['Python', 'Econometrics', 'RDD', 'GIS'],
    overview: 'An RDD-based causal analysis quantifying the impact of DRT as a catalyst for property value appreciation in transport-disadvantaged areas.',
    context: 'Limited transit options in disadvantaged areas can suppress local housing market potential. While DRT aims to bridge this mobility gap, its actual impact on property values needed verification through empirical data.',
    works: [
      ['Target Area Identification', 'Computed a regional accessibility index using Python and GIS to identify transport-disadvantaged areas and grouped regions with similar accessibility profiles.'],
      ['Dataset Construction', 'Merged 10 years of housing transaction records with official DRT service logs to track long-term price changes.'],
      ['Causal Analysis', 'Applied a Regression Discontinuity Design (RDD) to compare property value trends before and after DRT introduction, isolating its specific market effect.'],
    ],
    results: [
      ['Value Appreciation', 'Shifted downward price trends toward a 3.51 growth trend in declining markets, turning a slump into an improvement.'],
      ['Market Amplification', 'Achieved a price increase 1.5x stronger than non-service areas in upward markets, driven by enhanced accessibility.'],
      ['Price Defense', 'Moderated property value drops during downturns, reducing the extent of price depreciation by 60% compared to non-service areas.'],
    ]
  },
  dotori: {
    type: 'Team Project',
    title: 'Dotori — AI College Application Consulting Agent',
    period: 'Nov 2024 – Apr 2025',
    tags: ['Python', 'TypeScript', 'OpenAI', 'FastAPI'],
    overview: 'An AI-powered platform providing personalized, cost-effective, and data-backed college admissions strategies for students.',
    context: 'Professional admissions consulting is often prohibitively expensive, and manual research across multiple institutions is time-intensive, creating significant barriers to information access.',
    works: [
      ['Automated Data Extraction', 'Built a pipeline to convert unstructured PDF reports (Common Data Sets) from various universities into a structured database.'],
      ['Weighted Matching Algorithm', 'Developed a scoring system using weighted metrics to categorize school compatibility into Reach, Match, and Safety based on student profiles.'],
      ['Matching Dashboard', 'Developed a visualization feature for students to identify their strengths and weaknesses for each matched university.'],
      ['AI Essay Strategy', 'Explored the feasibility of generating personalized essay drafts.'],
    ],
    results: []
  },
  yonsei: {
    type: 'Team Project',
    title: 'Mobility Solution for Yonsei University Students',
    period: 'Sep 2023 – Dec 2023',
    tags: ['R', 'SP Survey', 'Logit Model', 'K-means'],
    overview: 'A feasibility study integrating DRT system design and Logit modeling to overcome infrastructure barriers and optimize campus mobility.',
    context: 'Steep slopes and narrow pedestrian paths discourage walking and increase commute stress. Existing fixed-route shuttles lack the flexibility to adapt to dynamic student demand patterns.',
    works: [
      ['System & Operation Design', 'Proposed an app-based DRT model featuring real-time requests, tiered fare policies, and UWB-based secure boarding verification.'],
      ['Routing Algorithm', 'Applied K-means clustering for initial assignment and developed logic to minimize additional travel time during dynamic route updates.'],
      ['Discrete Choice Modeling', 'Designed a Stated-Preference (SP) survey and built a Logit model to analyze the utility of DRT compared to walking, local buses, and personal mobility.'],
      ['Model Optimization', 'Identified and resolved critical estimation errors, such as multicollinearity in fare variables and lack of variation in fixed-level parameters.'],
    ],
    results: [
      ['Behavioral Insights', 'Quantified the negative impact of access time and fares on transit utility, providing a data-driven basis for DRT adoption.'],
      ['Demographic Analysis', 'Identified significant variations in transit utility based on gender, age, and academic status (e.g., higher PM utility for undergraduates).'],
      ['Methodological Rigor', 'Improved model accuracy by restructuring variable levels, ensuring statistically significant coefficient estimation for future mobility studies.'],
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
    <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <div class="modal-section"><h4>Overview</h4><p>${p.overview}</p></div>
    <div class="modal-section"><h4>Problem Context</h4><p>${p.context}</p></div>
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
