const projects = {
  umc: {
    type: 'Team Project',
    title: 'Digital Connectivity Disparities in Seoul',
    period: 'Dec 2025 – Jun 2026',
    tags: ['Python', 'HLM', 'OpenAI API'],
    overview: 'This project examines digital connectivity disparities in Seoul through three sequential analytical layers: constructing a district-level UMC index, decomposing individual and district-level determinants via HLM, and validating findings through LLM-based community post analysis.',
    context: 'Seoul is widely regarded as one of the world\'s most connected cities, yet high infrastructure availability does not guarantee that all residents can use digital services in a meaningful way. This project reframes digital connectivity as a measurement problem: not whether access exists, but where gaps persist and who is most vulnerable.',
    works: [
      ['District-level UMC Index', 'Constructed a 6-dimension index across Seoul\'s 25 districts measuring relative digital connectivity disparities across connectivity, availability, affordability, devices, digital skills, and safety.'],
      ['Individual and District-level Decomposition', 'Applied two-level HLM on 10,000+ survey records to separate individual-level factors from district-level contextual conditions.'],
      ['Platform Signal Analysis', 'Built an LLM-based text classification pipeline to analyze 130K+ community posts by UMC dimension, integrating findings with district-level priors via Bayesian updating to validate quantitative results.'],
    ],
    results: [
      ['District UMC gaps are multidimensional', 'The composite score ranged from 0.279 to 0.695 across Seoul\'s 25 districts, with lower-scoring districts showing deficits in devices, safety, and affordability rather than physical connectivity.'],
      ['Individual vulnerability explains more than district conditions', 'Over 99% of digital usage variance lies within districts, driven by education, age, and household composition.'],
      ['Platform signals diverged from administrative indicators', 'Particularly around devices and digital skills, highlighting gaps that survey data alone cannot capture.'],
    ],
    slides: 'assets/slides/umc_slides.png'
  },
  drt: {
    type: 'Undergraduate Capstone Project',
    title: 'Impact of Demand-Responsive Transit (DRT) on Property Values',
    period: 'Sep 2025 – Dec 2025',
    tags: ['Python', 'RDD'],
    overview: 'A causal study examining whether DRT introduction leads to measurable changes in property values in transport-disadvantaged areas.',
    context: 'Limited transit access in disadvantaged areas can suppress local housing market potential, but the actual economic impact of DRT remained empirically unverified.',
    works: [
      ['Area Identification', 'Constructed a GIS-based transit accessibility index using bus stop and subway station density to identify transport-disadvantaged areas, and matched comparable neighborhoods via quasi-experimental design.'],
      ['Causal Analysis', 'Applied RDD with WLS across 12 matched neighborhood pairs to isolate DRT\'s impact on property values from broader market conditions.'],
    ],
    results: [
      ['Value Appreciation', 'Shifted downward price trends toward a 3.51M KRW growth trend in declining markets.'],
      ['Market Amplification', 'Achieved a price increase 1.5× stronger than non-service areas in upward markets.'],
      ['Price Defense', 'Moderated property value drops during downturns compared to non-service areas.'],
    ],
    poster: 'assets/posters/capstone.png',
    posterTitle: 'Let It Be, Let It Move'
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
  },
  yonsei: {
    type: 'Team Project',
    title: 'Mobility Solution for Yonsei University Students',
    period: 'Sep 2023 – Dec 2023',
    tags: ['R', 'SP Survey', 'Logit Model', 'K-means'],
    overview: 'A feasibility study proposing an app-based DRT system to address campus mobility barriers at Yonsei University.',
    context: 'Steep terrain and fixed-route shuttles make commuting difficult for students. Existing transit lacks the flexibility to meet dynamic demand.',
    works: [
      ['System Design', 'Proposed a real-time DRT model with tiered fares and UWB-based boarding verification.'],
      ['Routing', 'Applied K-means clustering for stop assignment with dynamic re-routing logic.'],
      ['Behavioral Modeling', 'Designed an SP survey and fitted a Logit model to quantify student transit utility.'],
    ],
    results: [
      ['Behavioral Insights', 'Quantified how access time and fares reduce transit utility, validating DRT as a preferred alternative.'],
      ['Demographic Analysis', 'Found significant utility variation by gender, age, and academic status, informing fare and route design.'],
      ['Model Accuracy', 'Improved estimation reliability by resolving multicollinearity in fare variables.'],
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
    ${p.poster ? `
    <div class="modal-section">
      <h4>Poster</h4>
      <div style="border: 1px solid var(--border); border-radius: 8px; overflow: hidden; cursor: pointer;" onclick="window.open('${p.poster}', '_blank')">
        <img src="${p.poster}" alt="Poster" style="width:100%; display:block;">
        <div style="padding: 10px 14px; display:flex; justify-content:space-between; align-items:center; border-top: 1px solid var(--border);">
          <span style="font-size:12px; color:var(--muted);">${p.posterTitle}</span>
          <span style="font-size:12px; color:var(--primary);">View full size →</span>
        </div>
      </div>
    </div>` : ''}
    ${p.slides ? `
    <div class="modal-section">
      <h4>Slides</h4>
      <img src="${p.slides}" alt="Slides" style="width:100%; border-radius: 8px; border: 1px solid var(--border);">
    </div>` : ''}
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
