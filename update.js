// 文件名: update.js

// 1. 版本配置
var CONFIG = {
  version: '104',
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
      {start: '2026-01-08', end: '2026-01-23', label: 'Tower Event'},
      {start: '2026-01-08', end: '2026-01-13', label: 'Chapter 1'},
      {start: '2026-01-13', end: '2026-01-18', label: 'Chapter 2'},
      {start: '2026-01-18', end: '2026-01-23', label: 'Chapter 3'},
    ]
  }, 
  { resource: '', tasks: [{start: '2026-01-30', end: '2026-02-02', label: 'Pegasus Cloud*'}] },
  { resource: '', tasks: [{start: '2026-01-27', end: '2026-02-01', label: 'Battle Bot'}] },
  { resource: '', tasks: [{start: '2026-01-25', end: '2026-01-30', label: 'Dreamland Quest'}] },
];


