import test from 'node:test';
import assert from 'node:assert/strict';
import { lines, resolveSelection, contactSubject } from '../HTML/plan-data.js';

const prices = { soporte: [400, 900, 2000], seguridad: [300, 700, 1800], automatizacion: [350, 800, 1800], consultoria: [250, 600, 1500], medida: [400, 1050, 2600] };
for (const [id, expected] of Object.entries(prices)) {
  expected.forEach((price, index) => test(`${id} tier ${index} starts at USD ${price} monthly`, () => {
    assert.equal(lines.find(line => line.id === id)?.plans[index].price, price);
  }));
}
[10, 30, 80].forEach((hours, index) => test(`custom tier ${index} offers ${hours} monthly hours`, () => {
  assert.equal(lines.find(line => line.id === 'medida')?.plans[index].hours, hours);
}));
test('service link restores line and plan', () => {
  const selected = resolveSelection('?linea=seguridad', '#business');
  assert.equal(selected.line.id, 'seguridad');
  assert.equal(selected.tier, 'business');
});
test('legacy plan anchors default to support', () => {
  const selected = resolveSelection('', '#enterprise');
  assert.equal(selected.line.id, 'soporte');
  assert.equal(selected.tier, 'enterprise');
});
test('contact request preserves chosen line and plan', () => {
  assert.equal(contactSubject('?linea=medida&plan=business'), 'Solicitud de plan Business — Soluciones a la Medida');
  assert.equal(contactSubject('?linea=unknown&plan=business'), '');
});