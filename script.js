const projects = {
  umc: {
    type: 'Team Project',
    title: 'Digital Connectivity Disparities in Seoul',
    period: 'Dec 2025 – Jun 2026',
    tags: ['Python', 'HLM', 'OpenAI API'],
    overview: 'A multi-layer study measuring digital connectivity gaps across Seoul, combining three layers: a district-level UMC index, multilevel modeling of individual and district effects, and platform-text signal analysis.',
    context: 'Seoul is often described as a fully connected city, yet high network availability doesn\'t reveal whether residents can use digital services in a meaningful, safe, and affordable way. This study frames connectivity as a measurement problem, not just a question of access, revealing where gaps persist and who is most vulnerable.',
    works: [
      ['Index Construction', 'Built a 6-dimension UMC index across Seoul\'s 25 districts, capturing disparities in availability, affordability, devices, digital skills, and safety.'],
      ['Multilevel Decomposition', 'Applied two-level HLM on 10,000+ survey records to separate individual-level and district-level drivers of digital usage.'],
      ['Platform Signal Validation', 'Built an LLM-based text classification pipeline on 130K+ community posts, validating quantitative findings against platform-visible signals via Bayesian updating.'],
    ],
    results: [
      ['District UMC gaps are multidimensional', 'Composite scores ranged from 0.279 to 0.695 across Seoul\'s 25 districts, with lower-scoring districts driven by gaps in devices, safety, and affordability rather than physical connectivity alone.'],
      ['Individual vulnerability outweighs district conditions', 'Over 99% of digital usage variance lies within districts, driven by education, age, and household composition.'],
      ['Platform signals reveal blind spots', 'Divergence from administrative indicators was sharpest around devices and digital skills, gaps that survey data alone can\'t capture.'],
    ],
    slides: 'assets/slides/umc_slides.png'
  },
  drt: {
    type: 'Undergraduate Capstone Project',
    title: 'Impact of Demand-Responsive Transit (DRT) on Property Values',
    period: 'Sep 2025 – Dec 2025',
    tags: ['Python', 'RDD'],
    overview: 'A causal study examining whether DRT introduction leads to measurable changes in property values in transport-disadvantaged areas.',
    context: 'Limited transit access can suppress property values in transport-disadvantaged areas, yet DRT\'s actual economic impact remains empirically unverified.',
    works: [
      ['Accessibility Mapping', 'Built a GIS-based transit accessibility index from bus stop and subway station density to identify transport-disadvantaged areas, then matched comparable neighborhoods via quasi-experimental design.'],
      ['Causal Estimation', 'Applied RDD with WLS across 12 matched neighborhood pairs to isolate DRT\'s impact on property values from broader market conditions.'],
    ],
    results: [
      ['Trend Reversal', 'In a declining market, DRT-served areas shifted from falling prices to a 3.51-point growth trend, while non-served areas kept declining.'],
      ['Growth Amplification', 'In a rising market, DRT-served areas appreciated 1.5× faster than non-served areas.'],
      ['Downturn Cushioning', 'In another declining market, DRT-served areas fell far less than non-served areas.'],
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
    overview: 'A feasibility study proposing a demand-responsive shuttle service, evaluated against existing transit options through a student survey.',
    context: 'Yonsei\'s fixed-route shuttles can\'t adapt to changing student demand, leaving some areas poorly served.',
    works: [
      ['System Design', 'Proposed a real-time DRT model with tiered fares and UWB-based boarding verification.'],
      ['Routing Optimization', 'Applied K-means clustering to assign stops, with dynamic re-routing to match real-time demand.'],
      ['Behavioral Modeling', 'Designed an SP survey and fitted a logit model to quantify student transit utility.'],
    ],
    results: [
      ['Utility Quantification', 'Access time and fares significantly reduced transit utility, confirming DRT as a preferred alternative.'],
      ['Demographic Variation', 'Utility varied significantly by gender, age, and academic status, informing fare and route design.'],
      ['Model Refinement', 'Resolved multicollinearity in fare variables to improve estimation reliability.'],
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
