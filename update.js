// 文件名: update.js

// 1. 版本配置
var CONFIG = {
  version: '101',
  // 👇👇👇 新增：图片地址配置 👇👇👇
  topImage: "https://dmk.assets.gameloft.com/assets/UPD_101_Pack_Art_Avatar_full_6416x2484_Full_1_ac668e4c4c.jpg",
  // 👇 新增 note 字段：如果有内容则显示，为空则不显示
  note: `⚠️ Dreamsparks will not be available in UP101, most probably in UP103.
`
  // note: '' // 如果想隐藏，就留空
};

// 2. 特殊日期标线配置 (新增部分)
var specialDates = [
  { date: '2025-12-25', label: '🎁', color: '#30C2FF' }, // 圣诞节
  // 你可以随时添加新的，例如：
  // { date: '2026-01-01', label: '🎉', color: '#FFD700' }, 
];

// 3. 甘特图排期数据
var schedules = [
  { resource: '', tasks: [{start: '2025-12-10', end: '2025-12-14', label: 'Virus'}] },
  { resource: '', tasks: [{start: '2025-12-11', end: '2025-12-14', label: 'Storm Cloud'}] },
  { resource: '', tasks: [{start: '2025-12-24', end: '2025-12-29', label: 'Dreamland Quest'}] },
  { resource: '', tasks: [
      {start: '2025-12-15', end: '2026-01-05', label: 'Avatar – Mega Event'},
      {start: '2025-12-15', end: '2025-12-18', label: 'Chapter 1'},
      {start: '2025-12-18', end: '2025-12-24', label: 'Chapter 2'},
      {start: '2025-12-24', end: '2025-12-31', label: 'Chapter 3'},
      {start: '2025-12-31', end: '2026-01-05', label: 'Chapter 4'},
      {start: '2025-12-18', end: '2025-12-21', label: 'Striking Gold'},
      {start: '2025-12-25', end: '2025-12-28', label: 'Striking Gold'},
      {start: '2026-01-01', end: '2026-01-04', label: 'Striking Gold'},
    ]
  }, 
];