import test from 'node:test';
import assert from 'node:assert/strict';
import { getPropertyBySlug, getStaffBySlug, getDashboardStats, propertyUrl, staffUrl } from '../src/lib/data.mjs';

test('property records are linkable by stable slug', () => {
  const property = getPropertyBySlug('chenyao-garden');
  assert.equal(property.name, '晨曜花园 / 保利天曜');
  assert.equal(propertyUrl(property), '/properties/chenyao-garden');
  assert.ok(property.highlights.some((item) => item.includes('阳光家缘')));
});

test('staff records are linkable by stable slug', () => {
  const staff = getStaffBySlug('demo-sales-01');
  assert.equal(staff.name, '示例店员');
  assert.equal(staffUrl(staff), '/staff/demo-sales-01');
  assert.ok(staff.assignedPropertySlugs.includes('chenyao-garden'));
});

test('dashboard stats summarize visible business data', () => {
  const stats = getDashboardStats();
  assert.equal(stats.propertyCount, 2);
  assert.equal(stats.staffCount, 1);
  assert.equal(stats.districts.includes('天河区'), true);
});

test('missing records return null instead of throwing', () => {
  assert.equal(getPropertyBySlug('not-exists'), null);
  assert.equal(getStaffBySlug('not-exists'), null);
});
