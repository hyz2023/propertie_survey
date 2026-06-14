import test from 'node:test';
import assert from 'node:assert/strict';
import { getPropertyBySlug, getStaffBySlug, getDashboardStats, propertyUrl, staffUrl, getPropertyReport, buildPropertyRecordFromForm } from '../src/lib/data.mjs';

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

test('property reports expose structured sections for detail pages', () => {
  const report = getPropertyReport('chenyao-garden');
  assert.equal(report.title, '保利天曜楼盘调研报告');
  assert.equal(report.sections.some((section) => section.heading === '官方事实'), true);
  assert.equal(report.sections.some((section) => section.items.some((item) => item.includes('不伪造成交价曲线'))), true);
});

test('admin form helper normalizes new property records', () => {
  const record = buildPropertyRecordFromForm({
    name: '测试楼盘',
    marketingName: '测试营销名',
    registeredName: '测试备案名',
    district: '天河区',
    address: '测试地址',
    developer: '测试开发商',
    tags: '天河区, 测试, 阳光家缘',
    highlights: '亮点A\n亮点B',
    risks: '风险A',
    metrics: '已售=10套\n未售=2套'
  });
  assert.equal(record.slug, 'ceshi-loupan');
  assert.deepEqual(record.tags, ['天河区', '测试', '阳光家缘']);
  assert.deepEqual(record.metrics[0], { label: '已售', value: '10套' });
  assert.equal(record.highlights.length, 2);
});
