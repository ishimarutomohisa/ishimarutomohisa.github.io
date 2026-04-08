// 文件名: update.js

// 1. 版本配置
var CONFIG = {
  version: '105',
  // 👇 新增 note 字段：如果有内容则显示，为空则不显示
  note: `
`
  // note: '' // 如果想隐藏，就留空
};

// 2. 特殊日期标线配置 (新增部分)
var specialDates = [
  // 你可以随时添加新的，例如：
  // { date: '2026-01-01', label: '🎉', color: '#FFD700' }, 
];

// 3. 甘特图排期数据
var schedules = [
  { resource: '', tasks: [{start: '2026-04-02', end: '2026-04-06', label: 'Vine Cage'}] },
  { resource: '', tasks: [{start: '2026-04-03', end: '2026-04-06', label: 'Turtle*'}] },
  { resource: '', tasks: [
      {start: '2026-03-12', end: '2026-04-02', label: 'Mickey & Friends – Mega Event'},
      {start: '2026-03-12', end: '2026-03-15', label: 'Chapter 1'},
      {start: '2026-03-15', end: '2026-03-21', label: 'Chapter 2'},
      {start: '2026-03-21', end: '2026-03-28', label: 'Chapter 3'},
      {start: '2026-03-28', end: '2026-04-02', label: 'Chapter 4'},
      {start: '2026-03-15', end: '2026-03-18', label: 'Striking Gold'},
      {start: '2026-03-22', end: '2026-03-25', label: 'Striking Gold'},
      {start: '2026-03-29', end: '2026-04-01', label: 'Striking Gold'},
    ]
  }, 
];

// 2. 特殊日期标线配置 (新增部分)
var specialDates2 = [
  // 你可以随时添加新的，例如：
  // { date: '2026-01-01', label: '🎉', color: '#FFD700' }, 
];

// 3. 甘特图排期数据
var schedules2 = [
  { resource: '', tasks: [
      {start: '2026-04-09', end: '2026-04-24', label: 'Tower Event'},
      {start: '2026-04-09', end: '2026-04-14', label: 'Chapter 1'},
      {start: '2026-04-14', end: '2026-04-19', label: 'Chapter 2'},
      {start: '2026-04-19', end: '2026-04-24', label: 'Chapter 3'},
    ]
  }, 
  { resource: '', tasks: [{start: '2026-04-29', end: '2026-05-02', label: 'Koi Blimp*'}] },
  { resource: '', tasks: [{start: '2026-04-26', end: '2026-05-03', label: 'Cookie Party'}] },
  { resource: '', tasks: [{start: '2026-04-26', end: '2026-05-01', label: 'Honey Bee'}] },
  { resource: '', tasks: [{start: '2026-04-27', end: '2026-05-02', label: 'Dreamland Quest'}] },
];
