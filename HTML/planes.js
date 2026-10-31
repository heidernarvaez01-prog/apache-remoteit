import { lines, tiers, tierNames, resolveSelection, contactUrl } from './plan-data.js';

const tabs = document.querySelector('#plans-tabs');
const panel = document.querySelector('#plans-panel');

function render(line, selectedTier) {
  if (!panel || !tabs) return;
  tabs.querySelectorAll('[role=tab]').forEach(tab => {
    const active = tab.dataset.line === line.id;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  panel.setAttribute('aria-labelledby', `tab-${line.id}`);
  panel.innerHTML = `<div class="plans-intro"><h2>${line.name}</h2><p>${line.description}</p></div><div class="plans-cards">${line.plans.map((plan, index) => `
    <article id="${tiers[index]}" class="plan-card${index === 1 ? ' plan-card--popular' : ''}${selectedTier === tiers[index] ? ' plan-card--selected' : ''}">
      <div class="plan-badge-space">${index === 1 ? '<span class="plan-badge"><i class="fa-solid fa-star" aria-hidden="true"></i> Más elegido</span>' : ''}</div>
      <h3>${tierNames[index]}</h3>
      <div class="plan-price-label">Desde US$</div>
      <div class="plan-price"><strong>${new Intl.NumberFormat('es-CO').format(plan.price)}</strong><span>/ mes</span></div>
      <p class="plan-audience">${plan.audience}</p>
      <ul class="plan-features">${plan.features.map(feature => `<li><i class="fa-solid fa-check" aria-hidden="true"></i><span>${feature}</span></li>`).join('')}</ul>
      <a class="theme-btn plan-cta" href="${contactUrl(line.id, tiers[index])}">Elegir ${tierNames[index]}<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
    </article>`).join('')}</div>`;
}

if (tabs && panel) {
  tabs.innerHTML = lines.map(line => `<button type="button" class="theme-btn plans-tab" role="tab" id="tab-${line.id}" aria-controls="plans-panel" aria-selected="false" tabindex="-1" data-line="${line.id}"><i class="fa-solid ${line.icon}" aria-hidden="true"></i>${line.label}</button>`).join('');
  const activate = (line, focus = false) => {
    const url = new URL(window.location.href);
    url.searchParams.set('linea', line.id);
    url.hash = '';
    window.history.pushState(null, '', url);
    render(line, null);
    if (focus) document.getElementById(`tab-${line.id}`)?.focus();
  };
  tabs.addEventListener('click', event => {
    const tab = event.target.closest('[role=tab]');
    const line = lines.find(item => item.id === tab?.dataset.line);
    if (line) activate(line);
  });
  tabs.addEventListener('keydown', event => {
    const tab = event.target.closest('[role=tab]');
    if (!tab || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const current = lines.findIndex(item => item.id === tab.dataset.line);
    let index = event.key === 'Home' ? 0 : event.key === 'End' ? lines.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + lines.length) % lines.length;
    activate(lines[index], true);
  });
  const restore = () => {
    const { line, tier } = resolveSelection(window.location.search, window.location.hash);
    render(line, tier);
  };
  restore();
  window.addEventListener('popstate', restore);
  window.addEventListener('hashchange', restore);
  const { tier } = resolveSelection(window.location.search, window.location.hash);
  if (tier) window.addEventListener('load', () => document.getElementById(tier)?.scrollIntoView({ block: 'start' }), { once: true });
}