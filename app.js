/**
 * ═══════════════════════════════════════════
 * 米粒大王的工作台 - 主程序
 * 优化：独立JS文件，利于浏览器缓存
 * ═══════════════════════════════════════════
 */
!function(){
'use strict';
var STORAGE='mb_v6';

function menuSvg(type){
  var s='<svg viewBox="0 0 100 100" style="width:80%;height:80%">';
  s+='<circle cx="50" cy="50" r="46" fill="#fff" stroke="#ffbcd0" stroke-width="2"/>';
  if(type==='english'){
    s+='<circle cx="50" cy="55" r="28" fill="#c4a77d" stroke="#8b7355" stroke-width="2"/>';
    s+='<circle cx="50" cy="38" r="22" fill="#c4a77d" stroke="#8b7355" stroke-width="2"/>';
    s+='<circle cx="36" cy="24" r="8" fill="#c4a77d" stroke="#8b7355" stroke-width="2"/>';
    s+='<circle cx="64" cy="24" r="8" fill="#c4a77d" stroke="#8b7355" stroke-width="2"/>';
    s+='<ellipse cx="50" cy="44" rx="12" ry="8" fill="#fff8e7"/>';
    s+='<circle cx="42" cy="38" r="3" fill="#4a3728"/><circle cx="58" cy="38" r="3" fill="#4a3728"/>';
    s+='<ellipse cx="50" cy="48" rx="4" ry="3" fill="#ffbf80"/>';
    s+='<rect x="34" y="62" width="32" height="20" rx="2" fill="#b5d8ff" stroke="#4a3728" stroke-width="2"/>';
    s+='<line x1="40" y1="68" x2="60" y2="68" stroke="#4a3728" stroke-width="1.5"/>';
    s+='<line x1="40" y1="73" x2="56" y2="73" stroke="#4a3728" stroke-width="1.5"/>';
  }else if(type==='titles'){
    s+='<ellipse cx="50" cy="55" rx="26" ry="22" fill="#fff3b0" stroke="#e6c200" stroke-width="2"/>';
    s+='<circle cx="50" cy="34" r="18" fill="#fff3b0" stroke="#e6c200" stroke-width="2"/>';
    s+='<polygon points="50,12 56,24 44,24" fill="#ff85a2"/>';
    s+='<circle cx="43" cy="32" r="3" fill="#4a3728"/><circle cx="57" cy="32" r="3" fill="#4a3728"/>';
    s+='<path d="M44 42 Q50 46 56 42" fill="none" stroke="#4a3728" stroke-width="2" stroke-linecap="round"/>';
    s+='<rect x="44" y="58" width="4" height="14" fill="#ff85a2" transform="rotate(-15 46 65)"/>';
    s+='<rect x="52" y="56" width="4" height="16" fill="#7c3aed" transform="rotate(10 54 64)"/>';
  }else if(type==='exercise'){
    s+='<circle cx="50" cy="56" r="26" fill="#fff" stroke="#8b7355" stroke-width="2"/>';
    s+='<ellipse cx="50" cy="34" rx="20" ry="16" fill="#fff" stroke="#8b7355" stroke-width="2"/>';
    s+='<ellipse cx="34" cy="22" rx="8" ry="6" fill="#fff" stroke="#8b7355" stroke-width="2"/>';
    s+='<ellipse cx="66" cy="22" rx="8" ry="6" fill="#fff" stroke="#8b7355" stroke-width="2"/>';
    s+='<ellipse cx="50" cy="40" rx="10" ry="7" fill="#ffb3c6"/>';
    s+='<circle cx="44" cy="34" r="3" fill="#4a3728"/><circle cx="56" cy="34" r="3" fill="#4a3728"/>';
    s+='<rect x="28" y="60" width="10" height="18" rx="5" fill="#fff" stroke="#8b7355" stroke-width="2" transform="rotate(-20 33 69)"/>';
    s+='<rect x="62" y="60" width="10" height="18" rx="5" fill="#fff" stroke="#8b7355" stroke-width="2" transform="rotate(20 67 69)"/>';
    s+='<text x="50" y="88" text-anchor="middle" font-size="12" fill="#ff85a2" font-weight="bold">💪</text>';
  }else if(type==='editing'){
    s+='<circle cx="50" cy="54" r="28" fill="#c3aed6" stroke="#7c3aed" stroke-width="2"/>';
    s+='<circle cx="50" cy="34" r="20" fill="#c3aed6" stroke="#7c3aed" stroke-width="2"/>';
    s+='<circle cx="34" cy="22" r="8" fill="#c3aed6" stroke="#7c3aed" stroke-width="2"/>';
    s+='<circle cx="66" cy="22" r="8" fill="#c3aed6" stroke="#7c3aed" stroke-width="2"/>';
    s+='<circle cx="42" cy="34" r="3" fill="#4a3728"/><circle cx="58" cy="34" r="3" fill="#4a3728"/>';
    s+='<ellipse cx="50" cy="42" rx="6" ry="4" fill="#ffd3b6"/>';
    s+='<circle cx="68" cy="58" r="12" fill="#fff" stroke="#7c3aed" stroke-width="2"/>';
    s+='<circle cx="68" cy="58" r="4" fill="#7c3aed"/>';
    s+='<line x1="62" y1="52" x2="74" y2="64" stroke="#7c3aed" stroke-width="2"/>';
  }else if(type==='wallet'){
    s+='<ellipse cx="50" cy="58" rx="28" ry="22" fill="#ffd3b6" stroke="#e07b39" stroke-width="2"/>';
    s+='<ellipse cx="50" cy="36" rx="20" ry="16" fill="#ffd3b6" stroke="#e07b39" stroke-width="2"/>';
    s+='<ellipse cx="34" cy="24" rx="7" ry="5" fill="#ffd3b6" stroke="#e07b39" stroke-width="2"/>';
    s+='<ellipse cx="66" cy="24" rx="7" ry="5" fill="#ffd3b6" stroke="#e07b39" stroke-width="2"/>';
    s+='<circle cx="43" cy="34" r="3" fill="#4a3728"/><circle cx="57" cy="34" r="3" fill="#4a3728"/>';
    s+='<ellipse cx="50" cy="42" rx="5" ry="3" fill="#ff85a2"/>';
    s+='<circle cx="72" cy="64" r="10" fill="#ffd700" stroke="#daa520" stroke-width="2"/>';
    s+='<text x="72" y="68" text-anchor="middle" font-size="10" fill="#b8860b" font-weight="bold">¥</text>';
  }else if(type==='review'){
    s+='<ellipse cx="50" cy="60" rx="28" ry="22" fill="#a8e6cf" stroke="#56c596" stroke-width="2"/>';
    s+='<ellipse cx="50" cy="38" rx="20" ry="16" fill="#a8e6cf" stroke="#56c596" stroke-width="2"/>';
    s+='<ellipse cx="34" cy="26" rx="7" ry="5" fill="#a8e6cf" stroke="#56c596" stroke-width="2"/>';
    s+='<ellipse cx="66" cy="26" rx="7" ry="5" fill="#a8e6cf" stroke="#56c596" stroke-width="2"/>';
    s+='<circle cx="43" cy="36" r="3" fill="#4a3728"/><circle cx="57" cy="36" r="3" fill="#4a3728"/>';
    s+='<path d="M44 46 Q50 50 56 46" fill="none" stroke="#4a3728" stroke-width="2" stroke-linecap="round"/>';
    s+='<rect x="32" y="62" width="20" height="16" rx="2" fill="#fff" stroke="#56c596" stroke-width="2"/>';
    s+='<line x1="36" y1="68" x2="48" y2="68" stroke="#56c596" stroke-width="1.5"/>';
    s+='<line x1="36" y1="72" x2="44" y2="72" stroke="#56c596" stroke-width="1.5"/>';
  }else if(type==='tools'){
    s+='<circle cx="50" cy="54" r="26" fill="#b5d8ff" stroke="#2b7cd3" stroke-width="2"/>';
    s+='<circle cx="50" cy="34" r="18" fill="#b5d8ff" stroke="#2b7cd3" stroke-width="2"/>';
    s+='<circle cx="36" cy="22" r="7" fill="#b5d8ff" stroke="#2b7cd3" stroke-width="2"/>';
    s+='<circle cx="64" cy="22" r="7" fill="#b5d8ff" stroke="#2b7cd3" stroke-width="2"/>';
    s+='<circle cx="44" cy="32" r="2.5" fill="#4a3728"/><circle cx="56" cy="32" r="2.5" fill="#4a3728"/>';
    s+='<ellipse cx="50" cy="40" rx="5" ry="3" fill="#ffb3c6"/>';
    s+='<circle cx="72" cy="30" r="10" fill="#fff" stroke="#2b7cd3" stroke-width="2"/>';
    s+='<rect x="68" y="26" width="8" height="8" fill="#2b7cd3"/>';
    s+='<circle cx="72" cy="54" r="10" fill="#fff" stroke="#2b7cd3" stroke-width="2"/>';
    s+='<path d="M66 54 L72 60 L78 48" fill="none" stroke="#2b7cd3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>';
  }else if(type==='comm'){
    s+='<ellipse cx="50" cy="56" rx="28" ry="24" fill="#ffd3e0" stroke="#ff85a2" stroke-width="2"/>';
    s+='<ellipse cx="50" cy="34" rx="20" ry="16" fill="#ffd3e0" stroke="#ff85a2" stroke-width="2"/>';
    s+='<ellipse cx="34" cy="22" rx="7" ry="5" fill="#ffd3e0" stroke="#ff85a2" stroke-width="2"/>';
    s+='<ellipse cx="66" cy="22" rx="7" ry="5" fill="#ffd3e0" stroke="#ff85a2" stroke-width="2"/>';
    s+='<circle cx="43" cy="32" r="3" fill="#4a3728"/><circle cx="57" cy="32" r="3" fill="#4a3728"/>';
    s+='<path d="M44 42 Q50 46 56 42" fill="none" stroke="#4a3728" stroke-width="2" stroke-linecap="round"/>';
    s+='<ellipse cx="32" cy="62" rx="8" ry="6" fill="#fff" stroke="#ff85a2" stroke-width="2"/>';
    s+='<ellipse cx="68" cy="62" rx="8" ry="6" fill="#fff" stroke="#ff85a2" stroke-width="2"/>';
  }
  s+='</svg>';return s;
}

var navItems=[
  {id:'home',label:'首页',img:'assets/menu-panda.jpg'},
  {id:'tasks',label:'任务',img:'assets/menu-mouse.jpg'},
  {id:'reading',label:'阅读',img:'assets/menu-cat.jpg'},
  {id:'english',label:'英语',img:'assets/menu-english.jpg'},
  {id:'titles',label:'标题',img:'assets/menu-titles.jpg'},
  {id:'hits',label:'爆款',img:'assets/menu-penguin.jpg'},
  {id:'exercise',label:'锻炼',img:'assets/menu-exercise.jpg'},
  {id:'editing',label:'剪辑',img:'assets/menu-editing.jpg'},
  {id:'wallet',label:'钱包',img:'assets/menu-wallet.jpg'},
  {id:'review',label:'复盘',img:'assets/menu-review.jpg'},
  {id:'tools',label:'工具',img:'assets/menu-tools.jpg'},
  {id:'comm',label:'交流',img:'assets/menu-comm.jpg'}
];

var expenseCats=[
  {name:'餐饮',icon:'🍔'},{name:'交通',icon:'🚌'},{name:'购物',icon:'🛍️'},
  {name:'娱乐',icon:'🎮'},{name:'居住',icon:'🏠'},{name:'医疗',icon:'💊'},
  {name:'教育',icon:'📚'},{name:'通讯',icon:'📱'},{name:'服饰',icon:'👗'},
  {name:'美妆',icon:'💄'},{name:'运动',icon:'⚽'},{name:'社交',icon:'🍻'},
  {name:'零食',icon:'🍰'},{name:'咖啡',icon:'☕'},{name:'旅行',icon:'✈️'},
  {name:'宠物',icon:'🐾'},{name:'礼物',icon:'🎁'},{name:'其他',icon:'✨'}
];
var incomeCats=[
  {name:'工资',icon:'💰'},{name:'副业',icon:'📱'},{name:'广告',icon:'📢'},
  {name:'红包',icon:'🧧'},{name:'退款',icon:'💵'},{name:'其他',icon:'✨'}
];
var methodIcons={'微信':'💚','支付宝':'💙','银行卡':'💛'};

function sumikkoSvg(name){
  var svgs={
    '白熊':'<svg viewBox="0 0 100 100"><defs><radialGradient id="wb" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#f2f2f2"/></radialGradient></defs><ellipse cx="34" cy="22" rx="10" ry="8" fill="url(#wb)" stroke="#e8dcd0" stroke-width="1.5"/><ellipse cx="66" cy="22" rx="10" ry="8" fill="url(#wb)" stroke="#e8dcd0" stroke-width="1.5"/><ellipse cx="50" cy="60" rx="34" ry="28" fill="url(#wb)" stroke="#e8dcd0" stroke-width="1.5"/><ellipse cx="50" cy="36" rx="24" ry="20" fill="url(#wb)" stroke="#e8dcd0" stroke-width="1.5"/><circle cx="40" cy="36" r="3" fill="#5c4b3a"/><circle cx="60" cy="36" r="3" fill="#5c4b3a"/><ellipse cx="50" cy="44" rx="6" ry="4" fill="#ffb3c6" opacity="0.7"/><circle cx="30" cy="40" r="3.5" fill="#ffb3c6" opacity="0.5"/><circle cx="70" cy="40" r="3.5" fill="#ffb3c6" opacity="0.5"/><ellipse cx="36" cy="66" rx="5" ry="3" fill="#ffd9e3"/><ellipse cx="64" cy="66" rx="5" ry="3" fill="#ffd9e3"/></svg>',
    '绿鹅':'<svg viewBox="0 0 100 100"><defs><radialGradient id="ge" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#d4e8a8"/><stop offset="100%" stop-color="#b8d686"/></radialGradient></defs><ellipse cx="50" cy="60" rx="32" ry="28" fill="url(#ge)" stroke="#9bbf66" stroke-width="1.5"/><ellipse cx="50" cy="34" rx="22" ry="18" fill="url(#ge)" stroke="#9bbf66" stroke-width="1.5"/><ellipse cx="50" cy="64" rx="20" ry="18" fill="#fffdf5"/><ellipse cx="50" cy="40" rx="14" ry="10" fill="#fffdf5"/><circle cx="42" cy="34" r="2.8" fill="#5c4b3a"/><circle cx="58" cy="34" r="2.8" fill="#5c4b3a"/><polygon points="50,40 54,46 46,46" fill="#ffd166" stroke="#e6b800" stroke-width="1" stroke-linejoin="round"/><ellipse cx="30" cy="58" rx="4" ry="2.5" fill="#ffb3c6" opacity="0.5"/><ellipse cx="70" cy="58" rx="4" ry="2.5" fill="#ffb3c6" opacity="0.5"/></svg>',
    '炸猪排':'<svg viewBox="0 0 100 100"><defs><radialGradient id="tkp" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#d9a87a"/><stop offset="100%" stop-color="#c28a5c"/></radialGradient></defs><path d="M20 44 Q50 20 80 44 L70 78 Q50 90 30 78 Z" fill="url(#tkp)" stroke="#9c6b3f" stroke-width="1.5"/><ellipse cx="50" cy="48" rx="22" ry="10" fill="#e0b488"/><path d="M25 40 Q35 34 45 40 Q55 34 65 40 Q75 34 78 40" fill="none" stroke="#fff" stroke-width="2" opacity="0.35" stroke-linecap="round"/><circle cx="39" cy="46" r="2.8" fill="#5c4b3a"/><circle cx="61" cy="46" r="2.8" fill="#5c4b3a"/><path d="M46 56 Q50 59 54 56" fill="none" stroke="#7a5232" stroke-width="2" stroke-linecap="round"/><ellipse cx="32" cy="64" rx="4" ry="2.5" fill="#ffd9e3"/><ellipse cx="68" cy="64" rx="4" ry="2.5" fill="#ffd9e3"/></svg>',
    '黄猫':'<svg viewBox="0 0 100 100"><defs><radialGradient id="ncat" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#fff8d6"/><stop offset="100%" stop-color="#f5e9a6"/></radialGradient></defs><ellipse cx="33" cy="22" rx="10" ry="8" fill="url(#ncat)" stroke="#e6c85a" stroke-width="1.5" transform="rotate(-18 33 22)"/><ellipse cx="67" cy="22" rx="10" ry="8" fill="url(#ncat)" stroke="#e6c85a" stroke-width="1.5" transform="rotate(18 67 22)"/><ellipse cx="50" cy="60" rx="30" ry="25" fill="url(#ncat)" stroke="#e6c85a" stroke-width="1.5"/><ellipse cx="50" cy="36" rx="23" ry="18" fill="url(#ncat)" stroke="#e6c85a" stroke-width="1.5"/><circle cx="40" cy="34" r="2.8" fill="#5c4b3a"/><circle cx="60" cy="34" r="2.8" fill="#5c4b3a"/><ellipse cx="50" cy="42" rx="5" ry="3" fill="#ff9eb5"/><circle cx="31" cy="40" r="3.5" fill="#ffb3c6" opacity="0.5"/><circle cx="69" cy="40" r="3.5" fill="#ffb3c6" opacity="0.5"/></svg>',
    '蜥蜴':'<svg viewBox="0 0 100 100"><defs><radialGradient id="tkg" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#c2e0f8"/><stop offset="100%" stop-color="#9fcbf0"/></radialGradient></defs><ellipse cx="50" cy="62" rx="29" ry="24" fill="url(#tkg)" stroke="#6a9fd0" stroke-width="1.5"/><ellipse cx="50" cy="36" rx="21" ry="17" fill="url(#tkg)" stroke="#6a9fd0" stroke-width="1.5"/><path d="M32 24 L26 10 L40 20 Z" fill="url(#tkg)" stroke="#6a9fd0" stroke-width="1.5" stroke-linejoin="round"/><path d="M68 24 L74 10 L60 20 Z" fill="url(#tkg)" stroke="#6a9fd0" stroke-width="1.5" stroke-linejoin="round"/><circle cx="41" cy="34" r="3" fill="#5c4b3a"/><circle cx="59" cy="34" r="3" fill="#5c4b3a"/><ellipse cx="50" cy="42" rx="5" ry="3" fill="#ffb3c6" opacity="0.8"/><circle cx="30" cy="54" r="3.5" fill="#ffb3c6" opacity="0.5"/><circle cx="70" cy="54" r="3.5" fill="#ffb3c6" opacity="0.5"/></svg>',
    '黄圆':'<svg viewBox="0 0 100 100"><defs><radialGradient id="ty" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#fff9c4"/><stop offset="100%" stop-color="#f5ec9a"/></radialGradient></defs><ellipse cx="50" cy="60" rx="28" ry="24" fill="url(#ty)" stroke="#e0d36e" stroke-width="1.5"/><ellipse cx="50" cy="38" rx="20" ry="16" fill="url(#ty)" stroke="#e0d36e" stroke-width="1.5"/><circle cx="41" cy="36" r="2.8" fill="#5c4b3a"/><circle cx="59" cy="36" r="2.8" fill="#5c4b3a"/><ellipse cx="50" cy="44" rx="5" ry="3" fill="#ffb3c6" opacity="0.7"/><ellipse cx="34" cy="62" rx="4" ry="2.5" fill="#ffd9e3"/><ellipse cx="66" cy="62" rx="4" ry="2.5" fill="#ffd9e3"/></svg>',
    '粉圆':'<svg viewBox="0 0 100 100"><defs><radialGradient id="py" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#ffd3e0"/><stop offset="100%" stop-color="#f5b8cc"/></radialGradient></defs><ellipse cx="50" cy="60" rx="28" ry="24" fill="url(#py)" stroke="#e08aa8" stroke-width="1.5"/><ellipse cx="50" cy="38" rx="20" ry="16" fill="url(#py)" stroke="#e08aa8" stroke-width="1.5"/><circle cx="41" cy="36" r="2.8" fill="#5c4b3a"/><circle cx="59" cy="36" r="2.8" fill="#5c4b3a"/><ellipse cx="50" cy="44" rx="5" ry="3" fill="#ff9eb5" opacity="0.7"/><ellipse cx="34" cy="62" rx="4" ry="2.5" fill="#ff9eb5" opacity="0.6"/><ellipse cx="66" cy="62" rx="4" ry="2.5" fill="#ff9eb5" opacity="0.6"/></svg>',
    '蓝圆':'<svg viewBox="0 0 100 100"><defs><radialGradient id="by" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#c2e0f8"/><stop offset="100%" stop-color="#9fcbf0"/></radialGradient></defs><ellipse cx="50" cy="60" rx="28" ry="24" fill="url(#by)" stroke="#6a9fd0" stroke-width="1.5"/><ellipse cx="50" cy="38" rx="20" ry="16" fill="url(#by)" stroke="#6a9fd0" stroke-width="1.5"/><circle cx="41" cy="36" r="2.8" fill="#5c4b3a"/><circle cx="59" cy="36" r="2.8" fill="#5c4b3a"/><ellipse cx="50" cy="44" rx="5" ry="3" fill="#ffb3c6" opacity="0.7"/><ellipse cx="34" cy="62" rx="4" ry="2.5" fill="#ffd9e3"/><ellipse cx="66" cy="62" rx="4" ry="2.5" fill="#ffd9e3"/></svg>',
    '小草':'<svg viewBox="0 0 100 100"><defs><radialGradient id="ks" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#b8f0d8"/><stop offset="100%" stop-color="#8ce0bf"/></radialGradient></defs><ellipse cx="50" cy="74" rx="20" ry="14" fill="url(#ks)" stroke="#6bd0a0" stroke-width="1.5"/><path d="M50 74 Q34 54 28 32" fill="none" stroke="#6bd0a0" stroke-width="3.5" stroke-linecap="round"/><path d="M50 74 Q50 48 50 26" fill="none" stroke="#6bd0a0" stroke-width="3.5" stroke-linecap="round"/><path d="M50 74 Q66 54 72 32" fill="none" stroke="#6bd0a0" stroke-width="3.5" stroke-linecap="round"/><ellipse cx="28" cy="32" rx="7" ry="5" fill="url(#ks)" stroke="#6bd0a0" stroke-width="1.5" transform="rotate(-25 28 32)"/><ellipse cx="50" cy="26" rx="7" ry="5" fill="url(#ks)" stroke="#6bd0a0" stroke-width="1.5"/><ellipse cx="72" cy="32" rx="7" ry="5" fill="url(#ks)" stroke="#6bd0a0" stroke-width="1.5" transform="rotate(25 72 32)"/><circle cx="45" cy="70" r="2.2" fill="#5c4b3a"/><circle cx="55" cy="70" r="2.2" fill="#5c4b3a"/></svg>',
    '包袱':'<svg viewBox="0 0 100 100"><defs><radialGradient id="fb" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#ffd3e0"/><stop offset="100%" stop-color="#f5b8cc"/></radialGradient></defs><ellipse cx="35" cy="30" rx="12" ry="10" fill="url(#fb)" stroke="#e08aa8" stroke-width="1.5"/><ellipse cx="65" cy="30" rx="12" ry="10" fill="url(#fb)" stroke="#e08aa8" stroke-width="1.5"/><ellipse cx="50" cy="62" rx="30" ry="24" fill="url(#fb)" stroke="#e08aa8" stroke-width="1.5"/><ellipse cx="50" cy="40" rx="20" ry="16" fill="url(#fb)" stroke="#e08aa8" stroke-width="1.5"/><circle cx="41" cy="38" r="2.8" fill="#5c4b3a"/><circle cx="59" cy="38" r="2.8" fill="#5c4b3a"/><ellipse cx="50" cy="46" rx="5" ry="3" fill="#ff9eb5"/><circle cx="30" cy="58" r="3.5" fill="#ffb3c6" opacity="0.5"/><circle cx="70" cy="58" r="3.5" fill="#ffb3c6" opacity="0.5"/><path d="M50 24 Q42 18 38 12" fill="none" stroke="#e08aa8" stroke-width="2" stroke-linecap="round"/><path d="M50 24 Q58 18 62 12" fill="none" stroke="#e08aa8" stroke-width="2" stroke-linecap="round"/></svg>',
    '炸虾尾':'<svg viewBox="0 0 100 100"><defs><radialGradient id="ebi" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#ffe599"/><stop offset="100%" stop-color="#f5d76e"/></radialGradient></defs><path d="M30 36 Q50 24 70 36 L62 78 Q50 88 38 78 Z" fill="url(#ebi)" stroke="#e0c050" stroke-width="1.5"/><path d="M36 40 Q50 32 64 40" fill="none" stroke="#fff" stroke-width="2" opacity="0.4" stroke-linecap="round"/><path d="M40 54 Q50 48 60 54" fill="none" stroke="#e0c050" stroke-width="1.5" opacity="0.5" stroke-linecap="round"/><path d="M42 68 Q50 62 58 68" fill="none" stroke="#e0c050" stroke-width="1.5" opacity="0.5" stroke-linecap="round"/><circle cx="41" cy="44" r="2.8" fill="#5c4b3a"/><circle cx="59" cy="44" r="2.8" fill="#5c4b3a"/><ellipse cx="33" cy="62" rx="4" ry="2.5" fill="#ffd9e3"/><ellipse cx="67" cy="62" rx="4" ry="2.5" fill="#ffd9e3"/><path d="M28 30 Q22 24 28 18 Q34 24 28 30" fill="#ff85a2" stroke="#e84d7a" stroke-width="1.5"/><path d="M72 30 Q78 24 72 18 Q66 24 72 30" fill="#ff85a2" stroke="#e84d7a" stroke-width="1.5"/></svg>',
    '灰尘':'<svg viewBox="0 0 100 100"><defs><radialGradient id="hc" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#f0f0f0"/><stop offset="100%" stop-color="#d8d8d8"/></radialGradient></defs><circle cx="50" cy="54" r="28" fill="url(#hc)" stroke="#c8c8c8" stroke-width="1.5"/><circle cx="38" cy="34" r="8" fill="url(#hc)" stroke="#c8c8c8" stroke-width="1.2"/><circle cx="64" cy="38" r="6.5" fill="url(#hc)" stroke="#c8c8c8" stroke-width="1.2"/><circle cx="30" cy="58" r="7" fill="url(#hc)" stroke="#c8c8c8" stroke-width="1.2"/><circle cx="72" cy="64" r="5.5" fill="url(#hc)" stroke="#c8c8c8" stroke-width="1.2"/><circle cx="42" cy="46" r="2.5" fill="#5c4b3a"/><circle cx="58" cy="46" r="2.5" fill="#5c4b3a"/><ellipse cx="50" cy="56" rx="5" ry="3" fill="#ffb3c6" opacity="0.5"/></svg>',
    '假蜗牛':'<svg viewBox="0 0 100 100"><defs><radialGradient id="sn" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#ffd9e6"/><stop offset="100%" stop-color="#f5b8cc"/></radialGradient><radialGradient id="sh" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#d6f0fa"/><stop offset="100%" stop-color="#a8d8f0"/></radialGradient></defs><ellipse cx="50" cy="64" rx="30" ry="20" fill="url(#sn)" stroke="#e08aa8" stroke-width="1.5"/><ellipse cx="50" cy="42" rx="19" ry="15" fill="url(#sn)" stroke="#e08aa8" stroke-width="1.5"/><circle cx="54" cy="38" r="12" fill="url(#sh)" stroke="#8bb8d8" stroke-width="1.5"/><path d="M48 34 Q54 30 60 36 Q58 42 52 42 Q46 40 48 34" fill="none" stroke="#8bb8d8" stroke-width="1.5" stroke-linecap="round"/><circle cx="42" cy="38" r="2.5" fill="#5c4b3a"/><circle cx="58" cy="38" r="2.5" fill="#5c4b3a"/><ellipse cx="32" cy="62" rx="4" ry="2.5" fill="#ff9eb5" opacity="0.6"/><ellipse cx="68" cy="62" rx="4" ry="2.5" fill="#ff9eb5" opacity="0.6"/></svg>',
    '幽灵':'<svg viewBox="0 0 100 100"><defs><radialGradient id="ob" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#f0f0f0"/></radialGradient></defs><path d="M28 76 L28 44 Q28 20 50 20 Q72 20 72 44 L72 76 Q64 68 56 76 Q48 68 40 76 Q32 68 28 76 Z" fill="url(#ob)" stroke="#ddd" stroke-width="1.5"/><path d="M28 60 Q50 68 72 60 L72 76 Q64 68 56 76 Q48 68 40 76 Q32 68 28 76 Z" fill="#ff9999" opacity="0.7"/><circle cx="40" cy="42" r="3" fill="#5c4b3a"/><circle cx="60" cy="42" r="3" fill="#5c4b3a"/><ellipse cx="50" cy="52" rx="5" ry="3" fill="#ffb3c6" opacity="0.6"/></svg>',
    '猫头鹰':'<svg viewBox="0 0 100 100"><defs><radialGradient id="ow" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#d9bfa0"/><stop offset="100%" stop-color="#bfa080"/></radialGradient></defs><ellipse cx="50" cy="60" rx="28" ry="24" fill="url(#ow)" stroke="#8b7355" stroke-width="1.5"/><ellipse cx="50" cy="36" rx="22" ry="18" fill="url(#ow)" stroke="#8b7355" stroke-width="1.5"/><ellipse cx="38" cy="24" rx="9" ry="7" fill="url(#ow)" stroke="#8b7355" stroke-width="1.5" transform="rotate(-15 38 24)"/><ellipse cx="62" cy="24" rx="9" ry="7" fill="url(#ow)" stroke="#8b7355" stroke-width="1.5" transform="rotate(15 62 24)"/><circle cx="42" cy="36" r="6" fill="#fff" stroke="#8b7355" stroke-width="1.2"/><circle cx="58" cy="36" r="6" fill="#fff" stroke="#8b7355" stroke-width="1.2"/><circle cx="42" cy="36" r="2.5" fill="#5c4b3a"/><circle cx="58" cy="36" r="2.5" fill="#5c4b3a"/><polygon points="50,44 54,50 46,50" fill="#ffbf80"/><ellipse cx="32" cy="58" rx="4" ry="2.5" fill="#ffd9e3"/><ellipse cx="68" cy="58" rx="4" ry="2.5" fill="#ffd9e3"/></svg>'
  };
  return svgs[name]||'';
}

var sumikkoChars=[
  {n:'白熊',m:['好冷啊...要喝杯热可可吗？','今天也在角落里安静地待着呢','北极好远啊...不过这里也不错','在角落喝热茶的时候最安心了~']},
  {n:'绿鹅',m:['嘎嘎~','今天也要加油哦','角落里也很暖和呢','我其实是企鹅哦~']},
  {n:'炸猪排',m:['请先吃掉边角料就好...','被剩下也没关系...','我99%都是肥油和面衣呢','配上酱汁会很好吃哦！']},
  {n:'黄猫',m:['可以摸摸我吗？','今天也在角落里晒太阳~','慵懒的一天最棒了','好想吃猫罐头啊...']},
  {n:'蜥蜴',m:['其实我是恐龙来的！','总有一天会变回恐龙的...','只是现在看起来像蜥蜴而已','好想念大海和妈妈啊~']},
  {n:'黄圆',m:['圆圆滚滚~','我是黄色的圆子','在角落里滚来滚去','和粉圆蓝圆是好朋友']},
  {n:'粉圆',m:['粉粉嫩嫩~','今天也要甜甜的','想被放进奶茶里','我是粉圆~']},
  {n:'蓝圆',m:['蓝蓝圆圆~','冷静又可爱','和朋友们挤在一起','我是蓝圆~']},
  {n:'小草',m:['只要有水和阳光就够了！','杂草也有杂草的活法','梦想是被包成花束呢','在角落里悄悄生长中~']},
  {n:'包袱',m:['我可以帮你包东西~','系紧蝴蝶结就出发','角落里的小包裹','里面装着什么呢？']},
  {n:'炸虾尾',m:['我的尾巴太硬被剩下了...','和炸猪排是好朋友！','以前身体好长的呢','偶尔会羡慕章鱼...']},
  {n:'灰尘',m:['角落里总是有我呢','悄悄堆积着...','今天也在安静地飘浮','大扫除的时候会被发现吗？']},
  {n:'假蜗牛',m:['其实...我是鼻涕虫啦','背着蜗牛壳也挺好的','慢慢走，不着急~','只有蜥蜴知道我的秘密']},
  {n:'幽灵',m:['Boo~','别怕，我很温柔的','悄悄飘过来~','角落里的小幽灵']},
  {n:'猫头鹰',m:['咕咕~','晚上最精神了','观察着角落里的一切','我是聪明的小猫头鹰']}
];

var sumikkoComments={
  home:['欢迎回来！今天也要加油哦~','米粒大王的工作台真整洁呢！'],
  tasks:['今天的任务都完成了吗？','一个一个来，不着急~','完成任务的成就感最棒了！'],
  reading:['读书是最棒的投资！','这本书一定很有趣吧~','阅读让人变得更优秀呢'],
  english:['英语加油！你可以的！','每天30分钟，坚持就是胜利！','Repeat after me~'],
  titles:['标题写得好，流量少不了！','学到了吗？快去试试吧~','好标题是爆款的第一步！'],
  hits:['热点追起来！','灵感来了就赶紧记下来~','今天的热点你看了吗？'],
  exercise:['运动完心情会变好哦！','坚持锻炼，身体棒棒！','今天也要动起来~'],
  editing:['剪辑技能up up！','AI好神奇啊~加油学！','30天计划冲冲冲！'],
  wallet:['记账是个好习惯！','钱要花在刀刃上哦~','理财从记录每一笔开始！'],
  review:['复盘让你成长更快！','今天的收获是什么呢？','每天进步一点点~'],
  tools:['找到好工具事半功倍~','工欲善其事，必先利其器！','换个背景换个心情~'],
  comm:['表达力是可以练出来的~','今天也要说让人舒服的话','高情商就是心里装着别人']
};

var wardrobeItems={
  hat:[
    {id:'party',name:'派对帽',emoji:'🎉',cls:'cloth-party-hat'},
    {id:'bow',name:'蝴蝶结',emoji:'🎀',cls:'cloth-bow'},
    {id:'beanie',name:'毛线帽',emoji:'🧢',cls:'cloth-beanie'},
    {id:'crown',name:'小皇冠',emoji:'👑',cls:'cloth-crown'},
    {id:'santa',name:'圣诞帽',emoji:'🎅',cls:'cloth-santa'}
  ],
  top:[
    {id:'scarf',name:'围巾',emoji:'🧣',cls:'cloth-scarf'},
    {id:'bowtie',name:'领结',emoji:'🎀',cls:'cloth-bowtie'},
    {id:'apron',name:'小围裙',emoji:'👨‍🍳',cls:'cloth-apron'}
  ],
  acc:[
    {id:'glasses',name:'眼镜',emoji:'👓',cls:'cloth-glasses'},
    {id:'bag',name:'小挎包',emoji:'👜',cls:'cloth-bag'},
    {id:'star',name:'星星',emoji:'⭐',cls:'cloth-star'},
    {id:'donut',name:'甜甜圈',emoji:'🍩',cls:'cloth-donut'},
    {id:'honey',name:'蜂蜜罐',emoji:'🍯',cls:'cloth-honey'}
  ]
};

var rilaLines={
  idle:['米粒大王好呀~','今天也要元气满满！','我在陪你哦','工作累了就摸摸我'],
  wave:['你好呀！','我在跟你招手呢~','今天也要加油！'],
  happy:['好开心！','被你逗笑啦~','耶！'],
  sad:['有点低落...','可以陪陪我吗？','呜呜...'],
  spin:['转圈圈~','头晕晕的哈哈','我厉害吧！'],
  pat:['好舒服呀~','再摸摸头','最喜欢你了！']
};

var defaultState={
  profile:{name:'米粒大王',avatar:null},
  accounts:[
    {id:'a1',platform:'抖音',name:'米粒大王的日常',followers:1280,active:true,growth:{day:12,week:86,month:340,target:5000}},
    {id:'a2',platform:'小红书',name:'米粒穿搭日记',followers:3520,active:false,growth:{day:45,week:280,month:1200,target:10000}},
    {id:'a3',platform:'B站',name:'米粒的剪辑间',followers:860,active:false,growth:{day:3,week:22,month:90,target:2000}}
  ],
  tasks:[
    {id:'t1',text:'发布一条穿搭短视频',completed:false,date:'2026-08-02'},
    {id:'t2',text:'英语单词+对话30min',completed:true,date:'2026-08-02'},
    {id:'t3',text:'肩颈拉伸8分钟',completed:false,date:'2026-08-02'}
  ],
  pinnedTasks:[
    {id:'p1',text:'需找博主合作',completed:false},
    {id:'p2',text:'拆解一篇小红书/抖音爆款作品，分析爆原因以及学习思路（穿搭或者摄影类的）',completed:false},
    {id:'p3',text:'更新拼豆账号',completed:false}
  ],
  reading:{
    reading:[{id:'r1',title:'原子习惯',author:'James Clear',page:86,totalPage:288,added:'2026-07-20'}],
    want:[{id:'r2',title:'纳瓦尔宝典',author:'Eric Jorgenson',page:0,totalPage:256,added:'2026-07-28'}],
    finished:[{id:'r3',title:'小狗钱钱',author:'Bodo Schäfer',page:208,totalPage:208,added:'2026-06-15'}],
    recommend:[
      {title:'认知觉醒',author:'周岭',reason:'帮你理解大脑运作规律，学会自我管理，自媒体人必读'},
      {title:'影响力',author:'Robert Cialdini',reason:'爆款内容的底层逻辑都在这里，理解传播心理学'},
      {title:'文案创作完全手册',author:'Robert Bly',reason:'写出让人停不下来的标题和文案，内容创作者的案头书'}
    ]
  },
  english:{
    words:[
      {id:'w1',word:'alter',meaning:'改变，改动',status:'new'},{id:'w2',word:'burst',meaning:'突然发生，爆裂',status:'new'},
      {id:'w3',word:'dispose',meaning:'处置；处理',status:'new'},{id:'w4',word:'blast',meaning:'爆炸；炸掉',status:'new'},
      {id:'w5',word:'consume',meaning:'消耗，耗尽',status:'new'},{id:'w6',word:'split',meaning:'劈开；分裂',status:'new'},
      {id:'w7',word:'spill',meaning:'溢出，溅出',status:'new'},{id:'w8',word:'slip',meaning:'滑动，滑落',status:'new'},
      {id:'w9',word:'slide',meaning:'滑动，幻灯片',status:'new'},{id:'w10',word:'breed',meaning:'品种；繁殖',status:'new'},
      {id:'w11',word:'budget',meaning:'预算；做安排',status:'review'},{id:'w12',word:'candidate',meaning:'候选人',status:'review'},
      {id:'w13',word:'campus',meaning:'校园',status:'review'},{id:'w14',word:'liberal',meaning:'慷慨的；自由的',status:'review'},
      {id:'w15',word:'transform',meaning:'转变，变革',status:'review'},{id:'w16',word:'transmit',meaning:'传播，播送',status:'new'},
      {id:'w17',word:'transplant',meaning:'移植',status:'new'},{id:'w18',word:'transport',meaning:'运输，运送',status:'new'},
      {id:'w19',word:'shift',meaning:'转移；转变',status:'new'},{id:'w20',word:'vary',meaning:'变化，改变',status:'new'},
      {id:'w21',word:'vanish',meaning:'消失，不见',status:'review'},{id:'w22',word:'swallow',meaning:'吞下，咽下',status:'review'},
      {id:'w23',word:'suspicion',meaning:'怀疑，疑心',status:'review'},{id:'w24',word:'suspicious',meaning:'怀疑的，可疑的',status:'review'},
      {id:'w25',word:'mild',meaning:'温柔的；味淡的',status:'review'},{id:'w26',word:'tender',meaning:'温柔的；脆弱的',status:'mastered'},
      {id:'w27',word:'nuisance',meaning:'讨厌的人/事',status:'mastered'},{id:'w28',word:'insignificant',meaning:'无意义的',status:'mastered'},
      {id:'w29',word:'accelerate',meaning:'加速，促进',status:'new'},{id:'w30',word:'absolute',meaning:'绝对的，无条件的',status:'new'}
    ],
    dialogues:[
      {id:'d1',title:'餐厅点餐',en:"A: May I take your order?\nB: Yes, I'd like a salad and a coffee, please.\nA: Anything else?\nB: No, that's all. Thank you!",cn:'餐厅点餐场景 · 实用句型'},
      {id:'d2',title:'问路指路',en:'A: Excuse me, how can I get to the nearest subway station?\nB: Go straight and turn left at the second crossing. It\'s about 5 minutes.\nA: Thank you so much!',cn:'问路场景 · 日常必备'},
      {id:'d3',title:'自我介绍',en:"A: Hi, I don't think we've met. I'm Lily.\nB: Nice to meet you, Lily. I'm Tom.\nA: What do you do, Tom?\nB: I work in digital marketing. How about you?",cn:'社交场景 · 破冰对话'}
    ]
  },
  hits:[
    {title:'#2026秋日阔腿裤穿搭',heat:'12.7亿',tag:'穿搭',link:'https://www.douyin.com/search/2026秋日阔腿裤穿搭'},
    {title:'#朱珠米兰街拍 静奢风',heat:'12亿',tag:'穿搭',link:'https://www.douyin.com/search/朱珠米兰街拍'},
    {title:'#Dear迪丽热巴 哥特风',heat:'8200万',tag:'穿搭',link:'https://www.douyin.com/search/迪丽热巴哥特风'},
    {title:'#农作物变装 创意拍摄',heat:'5600万',tag:'拍摄',link:'https://www.douyin.com/search/农作物变装'},
    {title:'#甜妹手势舞 元气感',heat:'4300万',tag:'拍摄',link:'https://www.douyin.com/search/甜妹手势舞'},
    {title:'#AI演员 被裁掉的女孩',heat:'2亿',tag:'AI',link:'https://www.douyin.com/search/AI演员被裁掉的女孩'},
    {title:'#AI森系清透照 抖音AI创作',heat:'6800万',tag:'AI',link:'https://www.douyin.com/search/AI森系清透照'},
    {title:'#七彩祥云刷屏 全网热议',heat:'42亿',tag:'新闻',link:'https://www.douyin.com/search/七彩祥云'}
  ],
  exercises:[
    {title:'Yuuka Sagawa 8min瘦双下巴拉伸',bvid:'BV1Pa411f7PQ',dur:'08:17',up:'HHOPEONE',done:false},
    {title:'MIZI 瘦手臂+瘦背 告别副乳',bvid:'BV1G9hHzyEPq',dur:'16:29',up:'MIZI',done:false},
    {title:'欧阳春晓 直角肩+少女背',bvid:'BV1Yk4y1d7Wn',dur:'16:30',up:'欧阳春晓',done:false}
  ],
  exerciseLog:{},
  exerciseStats:{},
  readingStats:{},
  inspirations:[],
  habits:{},
  editing:{activeTab:'video',planProgress:{},planNotes:{},todayLearned:'',summary:''},
  wallet:{
    transactions:[
      {id:'wx1',type:'expense',amount:35,category:'餐饮',method:'微信',note:'午餐外卖',date:'2026-08-02'},
      {id:'wx2',type:'expense',amount:8,category:'交通',method:'支付宝',note:'地铁',date:'2026-08-02'},
      {id:'wx3',type:'income',amount:3000,category:'副业',method:'银行卡',note:'自媒体广告收入',date:'2026-08-01'},
      {id:'wx4',type:'expense',amount:299,category:'服饰',method:'支付宝',note:'夏装连衣裙',date:'2026-08-01'},
      {id:'wx5',type:'expense',amount:68,category:'娱乐',method:'微信',note:'电影票',date:'2026-07-31'},
      {id:'wx6',type:'expense',amount:1200,category:'居住',method:'银行卡',note:'8月房租',date:'2026-08-01'},
      {id:'wx7',type:'expense',amount:25,category:'咖啡',method:'微信',note:'瑞幸',date:'2026-08-02'},
      {id:'wx8',type:'income',amount:500,category:'红包',method:'微信',note:'生日红包',date:'2026-07-28'}
    ]
  },
  review:{pending:[{id:'v1',title:'本周短视频数据复盘',date:'2026-08-02'}],done:[{id:'v2',title:'上周选题方向复盘',date:'2026-07-26',mood:'😊',result:'上周发布了2条穿搭视频，总播放量5000+，点赞率3.2%，评论区互动活跃',cause:'选题抓住了"小个子显高"痛点，发布时间选在晚8点流量高峰，封面拼图对比吸引点击',impact:'验证了"痛点+数据"选题方法论，本周继续沿用，同时拓展"平价穿搭"方向',gains:'摸清了穿搭类内容的流量高峰时段',improve:'发布时间应提前到18:30',reflect:'爆款选题偶然性大，需要建立选题库',completedTasks:'发布2条视频/回复评论/分析竞品',incomplete:'未完成英语学习',incompleteReason:'临时加班导致时间不足'}]},
  tools:{currentBg:'assets/bg.jpg',custom:[],musicId:'',doll:''},
  comm:{progress:{},notes:'',activeTab:'daily',workProgress:{},workNotes:''},
  moods:{},
  sumikko:{clothes:[]}
};

var state=loadState();
var currentTab='home';
var bindCb={};
var reviewMood='😊';
var moodEmojis=['😍','😊','😌','😐','😤','😢','🥳','💪','😴','🤩','🥰','😎'];
var sumikkoTimer=null;
var wardrobeTab='hat';
var wardrobeTarget='sumikko';

function loadState(){
  try{var r=localStorage.getItem(STORAGE);if(r){var p=JSON.parse(r);if(p&&typeof p==='object'){
    if(!p.moods)p.moods={};
    if(!p.wallet)p.wallet={transactions:[]};
    if(!p.profile)p.profile={name:'米粒大王'};
    if(!p.profile.avatar)p.profile.avatar=null;
    if(!p.sumikko)p.sumikko={clothes:[]};
    if(!p.pinnedTasks)p.pinnedTasks=JSON.parse(JSON.stringify(defaultState.pinnedTasks));
    else{
      var hasP=false;
      for(var pi2=0;pi2<p.pinnedTasks.length;pi2++){if(p.pinnedTasks[pi2].id==='p3')hasP=true;}
      if(!hasP)p.pinnedTasks.push({id:'p3',text:'更新拼豆账号',completed:false});
    }
    if(!p.exerciseLog)p.exerciseLog={};
    if(!p.exerciseStats)p.exerciseStats={};
    if(!p.readingStats)p.readingStats={};
    if(!p.inspirations)p.inspirations=[];
    if(!p.habits)p.habits={};
    if(!p.comm)p.comm={progress:{},notes:'',activeTab:'daily',workProgress:{},workNotes:''};
    else{
      if(typeof p.comm.activeTab==='undefined')p.comm.activeTab='daily';
      if(typeof p.comm.workProgress==='undefined')p.comm.workProgress={};
      if(typeof p.comm.workNotes==='undefined')p.comm.workNotes='';
    }
    if(p.accounts){for(var ai=0;ai<p.accounts.length;ai++){if(!p.accounts[ai].growth)p.accounts[ai].growth={day:0,week:0,month:0,target:5000};}}
    if(p.exercises){for(var ei=0;ei<p.exercises.length;ei++){if(typeof p.exercises[ei].done==='undefined')p.exercises[ei].done=false;}}
    if(p.editing){if(typeof p.editing.todayLearned==='undefined')p.editing.todayLearned='';if(typeof p.editing.summary==='undefined')p.editing.summary='';}
    if(p.tools){if(typeof p.tools.musicId==='undefined')p.tools.musicId='';if(typeof p.tools.doll==='undefined')p.tools.doll='';}
    return p;
  }}}
  catch(e){}
  return JSON.parse(JSON.stringify(defaultState));
}
function saveState(){try{localStorage.setItem(STORAGE,JSON.stringify(state));}catch(e){}}
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7);}
function esc(s){if(s==null)return'';return String(s).replace(/[&<>\"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function today(){var d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function fmtNum(n){var num=Number(n)||0;if(num>=10000)return(num/10000).toFixed(1).replace(/\.0$/,'')+'万';return String(num).replace(/\B(?=(\d{3})+(?!\d))/g,',');}
function fmtMoney(n){var num=Number(n)||0;return num.toFixed(2).replace(/\.00$/,'').replace(/(\.\d)0$/,'$1');}
function pIcon(p){var m={'抖音':'🎵','小红书':'📕','B站':'📺','快手':'⚡','视频号':'▶️','微博':'👁'};return m[p]||'✨';}
function getCatIcon(name){for(var i=0;i<expenseCats.length;i++){if(expenseCats[i].name===name)return expenseCats[i].icon;}for(var j=0;j<incomeCats.length;j++){if(incomeCats[j].name===name)return incomeCats[j].icon;}return'✨';}
function pHdr(t,s,tab){
  var icon='';
  if(tab){
    for(var i=0;i<navItems.length;i++){
      if(navItems[i].id===tab){
        if(navItems[i].img)icon='<img src="'+esc(navItems[i].img)+'" alt="">';
        else if(navItems[i].svg)icon=navItems[i].svg;
        break;
      }
    }
  }
  return'<div class="page-header">'+(icon?'<div class="page-icon">'+icon+'</div>':'')+'<div><h1 class="page-title">'+esc(t)+'</h1><div class="page-sub">'+esc(s)+'</div></div></div>';
}

// MONTH CALENDAR
var monthColors=['#ffe4e9','#ffead4','#fff9c4','#d4f8e8','#c7ceea','#f6dfeb','#d6f0fa','#ffeedd','#e2f0cb','#ffe6f0','#e0f2f1','#f3e5f5'];
var monthQuotes=[
  '新的一年，万事可期 ✨','保持热爱，奔赴山海 ❤️','春风十里，不如努力的你 🌸',
  '人间四月，温柔且坚定 🌿','五月清澈，万事皆可期 ☀️','童心未泯，所遇皆甜 🍬',
  '盛夏光年，野蛮生长 🌻','八月长安，好运正酿 🍀','秋风送爽，收获在望 🍂',
  '金秋十月，熠熠生辉 🌟','岁末将至，平安喜乐 🍁','凛冬散尽，星河长明 ⭐'
];
var holidays={
  '2026-01-01':'元旦','2026-02-14':'情人节','2026-02-17':'春节','2026-03-08':'妇女节','2026-04-05':'清明节',
  '2026-05-01':'劳动节','2026-06-19':'端午节','2026-07-01':'建党节','2026-08-19':'七夕','2026-09-25':'中秋节',
  '2026-10-01':'国庆节','2026-12-25':'圣诞节','2027-01-01':'元旦','2027-02-06':'春节','2027-04-05':'清明节',
  '2027-05-01':'劳动节','2027-06-09':'端午节','2027-09-17':'中秋节','2027-10-01':'国庆节'
};

// FLIP CALENDAR CONFIG
var flipCalImages={
  8:{img:'assets/cal-08.jpg',grid:{top:'34%',left:'7%',width:'40%',height:'37%'}}
 ,9:{img:'assets/cal-09.jpg',grid:{top:'63%',left:'60%',width:'36%',height:'26%'}}
 ,10:{img:'assets/cal-10.jpg',grid:{top:'54%',left:'56%',width:'39%',height:'33%'}}
 ,11:{img:'assets/cal-11.jpg',grid:{top:'42%',left:'61%',width:'37%',height:'33%'}}
 ,12:{img:'assets/cal-12.jpg',grid:{top:'30%',left:'57%',width:'38%',height:'41%'}}
};
var flipMonths=[8,9,10,11,12];
var flipMonth=-1;

// MOOD BOARD
function buildMoodBoard(year,month,todayDate){
  var daysInMonth=new Date(year,month,0).getDate();
  var firstDay=new Date(year,month-1,1).getDay();
  var wd=['日','一','二','三','四','五','六'];
  var h='<div style="font-weight:700;font-size:12px;color:var(--pink-dark);text-align:center;margin-bottom:4px;font-family:var(--font-cute)">💝 '+month+'月心情日记</div>';
  h+='<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:1px;text-align:center;font-size:10px;color:var(--text3);margin-bottom:2px">';
  for(var i=0;i<7;i++)h+='<div>'+wd[i]+'</div>';h+='</div>';
  h+='<div class="mood-grid">';
  for(var j=0;j<firstDay;j++)h+='<div></div>';
  for(var d=1;d<=daysInMonth;d++){
    var key=year+'-'+String(month).padStart(2,'0')+'-'+String(d).padStart(2,'0');
    var m=state.moods&&state.moods[key]||'';
    var cls='mood-cell'+(m?' filled':'');var isToday=d===todayDate;
    h+='<div class="'+cls+'" data-md="'+key+'" title="'+key+'"'+(isToday?' style="border-color:var(--pink);box-shadow:0 0 0 2px var(--pink2)"':'')+'>'+(m||'·')+'</div>';
  }h+='</div>';
  h+='<div class="mood-legend" style="margin-top:8px;gap:4px;font-size:11px">';
  for(var e=0;e<moodEmojis.length;e++)h+='<span style="cursor:pointer;padding:2px 6px;border-radius:10px" class="mood-emo" data-me="'+moodEmojis[e]+'">'+moodEmojis[e]+'</span>';
  h+=' <span style="color:var(--text3);font-size:10px">←点击标记心情</span></div>';
  return h;
}

// SUMIKKO GURASHI
function showSumikko(tabId){
  var old=document.querySelector('.sumikko');if(old)old.remove();
  if(sumikkoTimer){clearTimeout(sumikkoTimer);sumikkoTimer=null;}
  if(Math.random()>0.65)return;
  var char=sumikkoChars[Math.floor(Math.random()*sumikkoChars.length)];
  var comments=sumikkoComments[tabId]||['今天也要加油哦~'];
  var msg;if(Math.random()>0.45){msg=comments[Math.floor(Math.random()*comments.length)];}else{msg=char.m[Math.floor(Math.random()*char.m.length)];}
  var corners=['br','bl','tr','tl'];
  var corner=corners[Math.floor(Math.random()*corners.length)];
  var pos={};
  if(corner==='br'){pos.bottom='20px';pos.right='20px';}
  else if(corner==='bl'){pos.bottom='20px';pos.left='calc(var(--sw) + 20px)';}
  else if(corner==='tr'){pos.top='20px';pos.right='20px';}
  else{pos.top='20px';pos.left='calc(var(--sw) + 20px)';}
  var br=corner.indexOf('b')>=0?'16px 16px 4px 16px':'4px 16px 16px 16px';
  var div=document.createElement('div');div.className='sumikko '+corner;
  for(var k in pos)div.style[k]=pos[k];
  var svg=sumikkoSvg(char.n);
  var clothesHtml=renderClothes(state.sumikko&&state.sumikko.clothes||[],20);
  div.innerHTML='<div class="sumikko-bubble" style="border-radius:'+br+'">'+esc(msg)+'</div><span class="sumikko-char">'+svg+'<div style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none">'+clothesHtml+'</div></span><div class="sumikko-name">'+esc(char.n)+'</div>';
  div.onclick=function(){div.classList.add('hide');setTimeout(function(){if(div.parentNode)div.remove();},300);};
  document.body.appendChild(div);
  sumikkoTimer=setTimeout(function(){if(div.parentNode){div.classList.add('hide');setTimeout(function(){if(div.parentNode)div.remove();},300);}},6000);
}

// RILAKKUMA
function renderClothes(items,scale){
  if(!items||!items.length)return'';
  var h='';for(var i=0;i<items.length;i++){var it=items[i];h+='<div class="cloth '+it+'" style="transform:scale('+(scale/78)+')"></div>';}return h;
}
function updateRilaClothes(){
  var box=document.getElementById('rilaClothes');if(!box)return;
  box.innerHTML=renderClothes(state.rila&&state.rila.clothes||[],78);
}
function rilaSay(lines,action){
  var bubble=document.getElementById('rilaBubble');if(!bubble)return;
  var line=lines[Math.floor(Math.random()*lines.length)];
  bubble.textContent=line;bubble.style.display='block';
  if(rilaTimer){clearTimeout(rilaTimer);}
  rilaTimer=setTimeout(function(){bubble.style.display='none';},4000);
  if(action){doRilaAction(action);}
}
function doRilaAction(action){
  var wrap=document.getElementById('rilaWrap');if(!wrap)return;
  wrap.className='rila-wrap br '+action;
  setTimeout(function(){wrap.classList.remove(action);},action==='sad'?3600:action==='wave'?1800:action==='happy'?2000:action==='spin'?700:800);
  if(action==='pat'){
    for(var i=0;i<3;i++){
      setTimeout(function(){
        var h=document.createElement('div');h.className='rila-heart';h.textContent='❤';
        h.style.left=(30+Math.random()*20)+'px';h.style.top='10px';
        document.getElementById('rilaChar').appendChild(h);
        setTimeout(function(){if(h.parentNode)h.remove();},1000);
      },i*250);
    }
  }
  if(action==='sad'){
    var t=document.createElement('div');t.className='rila-tear';document.getElementById('rilaChar').appendChild(t);
    setTimeout(function(){if(t.parentNode)t.remove();},1200);
  }
}
function initRila(){
  var wrap=document.getElementById('rilaWrap');var char=document.getElementById('rilaChar');
  if(!wrap||!char)return;
  updateRilaClothes();
  setTimeout(function(){rilaSay(rilaLines.idle);},1500);
  char.onclick=function(e){e.stopPropagation();doRilaAction('pat');rilaSay(rilaLines.pat,'pat');};
  var btns=wrap.querySelectorAll('.rila-btn');
  for(var i=0;i<btns.length;i++){
    btns[i].onclick=function(e){e.stopPropagation();
      var act=this.dataset.act;
      if(act==='wardrobe'){openWardrobe();return;}
      doRilaAction(act);rilaSay(rilaLines[act]||rilaLines.idle,act);
    };
  }
  wrap.onclick=function(){var bubble=document.getElementById('rilaBubble');if(bubble)bubble.style.display='none';};
}

// WARDROBE
function renderWardrobeItems(){
  var box=document.getElementById('wardrobeItems');if(!box)return;
  var items=wardrobeItems[wardrobeTab]||[];
  var equipped=state[wardrobeTarget]&&state[wardrobeTarget].clothes?state[wardrobeTarget].clothes:[];
  var h='';
  for(var i=0;i<items.length;i++){
    var it=items[i];var isEq=equipped.indexOf(it.cls)>=0;
    h+='<div class="wardrobe-item '+(isEq?'equipped':'')+'" data-cls="'+it.cls+'" title="'+esc(it.name)+'">'+it.emoji+'</div>';
  }
  box.innerHTML=h;
  var els=box.querySelectorAll('.wardrobe-item');
  for(var j=0;j<els.length;j++){
    els[j].onclick=function(){
      var cls=this.dataset.cls;
      if(!state[wardrobeTarget])state[wardrobeTarget]={clothes:[]};
      if(!state[wardrobeTarget].clothes)state[wardrobeTarget].clothes=[];
      var idx=state[wardrobeTarget].clothes.indexOf(cls);
      if(idx>=0){state[wardrobeTarget].clothes.splice(idx,1);}
      else{state[wardrobeTarget].clothes.push(cls);}
      saveState();renderWardrobeItems();updateWardrobePreview();
      if(wardrobeTarget==='rila')updateRilaClothes();
    };
  }
}
function updateWardrobePreview(){
  var rilaBox=document.getElementById('rilaPreview');var sumikkoBox=document.getElementById('sumikkoPreview');
  if(rilaBox)rilaBox.innerHTML='<div class="rila-char" style="position:relative">'+document.getElementById('rilaChar').innerHTML+'</div>';
  if(sumikkoBox){
    var svg=sumikkoSvg('白熊');
    sumikkoBox.innerHTML='<div class="sumikko-char" style="position:relative;width:70px;height:70px">'+svg+'<div style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none">'+renderClothes(state.sumikko&&state.sumikko.clothes||[],70)+'</div></div>';
  }
}
function openWardrobe(){
  var ov=document.getElementById('wardrobeOverlay');if(!ov)return;
  ov.classList.add('show');updateWardrobePreview();renderWardrobeItems();
}
function closeWardrobe(){
  var ov=document.getElementById('wardrobeOverlay');if(ov)ov.classList.remove('show');
}
function initWardrobe(){
  var close=document.getElementById('wardrobeClose');if(close)close.onclick=closeWardrobe;
  var overlay=document.getElementById('wardrobeOverlay');
  if(overlay)overlay.onclick=function(e){if(e.target===overlay)closeWardrobe();};
  var tabs=document.getElementById('wardrobeTabs');
  if(tabs)tabs.onclick=function(e){if(e.target&&e.target.dataset&&e.target.dataset.wtab){wardrobeTab=e.target.dataset.wtab;var btns=tabs.querySelectorAll('button');for(var i=0;i<btns.length;i++)btns[i].classList.remove('active');e.target.classList.add('active');renderWardrobeItems();}};
  var clear=document.getElementById('wardrobeClear');
  if(clear)clear.onclick=function(){state[wardrobeTarget].clothes=[];saveState();renderWardrobeItems();updateWardrobePreview();if(wardrobeTarget==='rila')updateRilaClothes();};
}

// AVATAR
function handleAvatar(){
  var wrap=document.getElementById('avatarWrap');var fi=document.getElementById('avatarFile');if(!wrap||!fi)return;
  wrap.onclick=function(){fi.click();};
  fi.onchange=function(){
    var f=this.files[0];if(!f)return;var r=new FileReader();
    r.onload=function(ev){if(!state.profile)state.profile={};state.profile.avatar=ev.target.result;saveState();updateAvatar();};
    r.readAsDataURL(f);
  };
}
function updateAvatar(){
  var av=document.getElementById('sidebarAvatar');
  if(av){var src=(state.profile&&state.profile.avatar)?state.profile.avatar:'assets/avatar.jpg';av.src=src;}
}

// NAV
function renderNav(){
  var n=document.getElementById('nav');if(!n)return;
  var h='';
  for(var i=0;i<navItems.length;i++){
    var it=navItems[i];
    var icon='';
    if(it.img){icon='<img src="'+esc(it.img)+'" alt="" onerror="this.style.display=\'none\';this.parentNode.innerHTML=\'✨\'">';}
    else if(it.svg){icon=it.svg;}
    else{icon=esc(it.animal||'✨');}
    h+='<div class="nav-item'+(it.id===currentTab?' active':'')+'" data-id="'+it.id+'"><div class="nav-animal">'+icon+'</div><span class="nav-text">'+esc(it.label)+'</span></div>';
  }
  n.innerHTML=h;
  var items=n.querySelectorAll('.nav-item');
  for(var j=0;j<items.length;j++){items[j].onclick=function(){switchTab(this.dataset.id);};}
  var mn=document.getElementById('mobileNav');if(mn){
    var mh='';
    for(var k=0;k<navItems.length;k++){
      var mi=navItems[k];
      var micon='';
      if(mi.img){micon='<img src="'+esc(mi.img)+'" alt="" onerror="this.style.display=\'none\';this.parentNode.innerHTML=\'✨\'">';}
      else{micon=esc(mi.animal||'✨');}
      mh+='<div class="mobile-nav-item'+(mi.id===currentTab?' active':'')+'" data-id="'+mi.id+'"><div class="mobile-nav-icon">'+micon+'</div><span>'+esc(mi.label)+'</span></div>';
    }
    mn.innerHTML=mh;
    var mitems=mn.querySelectorAll('.mobile-nav-item');
    for(var m=0;m<mitems.length;m++){mitems[m].onclick=function(){switchTab(this.dataset.id);};}
  }
}

// ════ HOME ════
function renderHome(){
  var accts=state.accounts||[];var active=null;for(var i=0;i<accts.length;i++){if(accts[i].active){active=accts[i];break;}}if(!active&&accts.length>0)active=accts[0];
  var tf=0,tgDay=0,tgWeek=0,tgMonth=0;for(var j=0;j<accts.length;j++){tf+=Number(accts[j].followers)||0;var g=accts[j].growth||{};tgDay+=Number(g.day)||0;tgWeek+=Number(g.week)||0;tgMonth+=Number(g.month)||0;}
  var nm=(state.profile&&state.profile.name)||'米粒大王';
  var h=pHdr('欢迎回来，'+esc(nm),'这里是你的自媒体创作小窝 ✨','home');
  h+='<div class="cards">';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">📱 我的自媒体账号</h3><div class="card-actions"><select id="nap" class="select" style="width:auto;min-width:70px"><option>抖音</option><option>小红书</option><option>B站</option><option>快手</option><option>视频号</option><option>微博</option></select><input id="nan" class="input" placeholder="账号名" style="width:120px"><input id="naf" class="input" placeholder="粉丝" type="number" style="width:80px"><button class="btn btn-primary" id="addAcc">+ 添加</button></div></div><div class="grid-2" id="acctList">';
  if(accts.length===0)h+='<div class="empty">还没有账号，快添加一个吧 🐣</div>';
  else{for(var k=0;k<accts.length;k++){var a=accts[k];h+='<div class="account-card'+(a.active?' active':'')+'" data-id="'+a.id+'"><div class="acc-icon">'+esc(pIcon(a.platform))+'</div><div class="acc-info"><div class="acc-name">'+esc(a.name)+'</div><div class="acc-platform">'+esc(a.platform)+'</div></div><div class="acc-followers">'+fmtNum(a.followers)+' 粉</div><div class="close del-acc" data-id="'+a.id+'">×</div></div>';}}
  h+='</div></div>';
  h+='<div class="card"><h3 class="card-title">✨ 当前账号</h3>';
  if(active)h+='<div class="account-card active" style="cursor:default"><div class="acc-icon">'+esc(pIcon(active.platform))+'</div><div class="acc-info"><div class="acc-name">'+esc(active.name)+'</div><div class="acc-platform">'+esc(active.platform)+'</div></div><div class="acc-followers">'+fmtNum(active.followers)+' 粉</div></div>';
  else h+='<div class="empty">暂无账号</div>';
  h+='</div>';
  h+='<div class="card"><h3 class="card-title">📊 账号总览</h3><div style="font-size:36px;font-weight:800;color:var(--pink-dark);font-family:var(--font-cute)">'+fmtNum(tf)+'</div><div class="page-sub">全部平台粉丝合计</div><div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">';
  for(var m=0;m<accts.length;m++)h+='<span class="tag">'+esc(accts[m].platform)+' '+fmtNum(accts[m].followers)+'</span>';
  h+='</div></div>';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">📈 涨粉详情</h3></div>';
  h+='<div class="stat-row" style="margin-bottom:12px"><div class="stat-card"><div class="stat-value" style="color:var(--mint-dark)">+'+fmtNum(tgDay)+'</div><div class="stat-label">今日涨粉</div></div><div class="stat-card"><div class="stat-value" style="color:#7c3aed">+'+fmtNum(tgWeek)+'</div><div class="stat-label">本周涨粉</div></div><div class="stat-card"><div class="stat-value" style="color:var(--pink)">+'+fmtNum(tgMonth)+'</div><div class="stat-label">本月涨粉</div></div></div>';
  if(accts.length===0)h+='<div class="empty">添加账号后即可记录涨粉数据</div>';
  else{
    h+='<div style="overflow-x:auto"><table class="growth-table"><thead><tr><th>平台</th><th>当前粉丝</th><th>日涨粉</th><th>周涨粉</th><th>月涨粉</th><th>目标</th><th>进度</th></tr></thead><tbody>';
    for(var n=0;n<accts.length;n++){var aa=accts[n];var gg=aa.growth||{day:0,week:0,month:0,target:5000};var pct=gg.target>0?Math.round((aa.followers||0)/gg.target*100):0;if(pct>100)pct=100;
      h+='<tr><td><b>'+esc(aa.platform)+'</b><br><span style="font-size:10px;color:var(--text3)">'+esc(aa.name)+'</span></td><td>'+fmtNum(aa.followers)+'</td>';
      h+='<td><input class="input growth-inp" data-aid="'+aa.id+'" data-field="day" type="number" value="'+esc(gg.day)+'" style="width:60px;font-size:11px;padding:4px 6px"></td>';
      h+='<td><input class="input growth-inp" data-aid="'+aa.id+'" data-field="week" type="number" value="'+esc(gg.week)+'" style="width:60px;font-size:11px;padding:4px 6px"></td>';
      h+='<td><input class="input growth-inp" data-aid="'+aa.id+'" data-field="month" type="number" value="'+esc(gg.month)+'" style="width:60px;font-size:11px;padding:4px 6px"></td>';
      h+='<td><input class="input growth-inp" data-aid="'+aa.id+'" data-field="target" type="number" value="'+esc(gg.target)+'" style="width:70px;font-size:11px;padding:4px 6px"></td>';
      h+='<td><div style="display:flex;align-items:center;gap:6px;font-size:11px"><div class="progress-bar" style="flex:1;min-width:50px"><div class="progress-fill" style="width:'+pct+'%"></div></div>'+pct+'%</div></td></tr>';
    }
    h+='</tbody></table></div>';
  }
  h+='</div></div>';
  return h;
}

function parsePct(s){return parseFloat(s);}
function getFirstDayMon(year,month){
  var d=new Date(year,month-1,1).getDay();
  return (d+6)%7;
}
function getDatePos(year,month,day){
  var fd=getFirstDayMon(year,month);
  var idx=day-1+fd;
  return {row:Math.floor(idx/7),col:idx%7};
}
function buildFlipCalendarPage(idx,todayY,todayM,todayD){
  var month=flipMonths[idx];
  var year=2026;
  var cfg=flipCalImages[month];
  var daysInMonth=new Date(year,month,0).getDate();
  var isTodayMonth=(todayY===year&&todayM===month);
  var h='<div class="flip-cal-page'+(idx===flipMonth?' active':'')+'" data-idx="'+idx+'">';
  h+='<img class="flip-cal-bg" src="'+cfg.img+'" alt="'+month+'月月历">';
  h+='<div class="flip-cal-month">'+month+'月</div>';
  h+='<div class="flip-cal-grid" style="top:'+cfg.grid.top+';left:'+cfg.grid.left+';width:'+cfg.grid.width+';height:'+cfg.grid.height+'">';
  var fd=getFirstDayMon(year,month);
  for(var r=0;r<6;r++){
    for(var c=0;c<7;c++){
      var cellIdx=r*7+c;
      var dayNum=cellIdx-fd+1;
      var show=dayNum>=1&&dayNum<=daysInMonth;
      if(show)h+='<div class="flip-cal-cell" data-day="'+dayNum+'" style="grid-row:'+(r+1)+';grid-column:'+(c+1)+';">'+dayNum+'</div>';
      else h+='<div class="flip-cal-cell empty" style="grid-row:'+(r+1)+';grid-column:'+(c+1)+';"></div>';
    }
  }
  h+='</div>';
  if(isTodayMonth){
    var pos=getDatePos(year,month,todayD);
    var gl=parsePct(cfg.grid.left),gt=parsePct(cfg.grid.top),gw=parsePct(cfg.grid.width),gh=parsePct(cfg.grid.height);
    var ml=gl+gw*(pos.col+0.5)/7;
    var mt=gt+gh*(pos.row+0.5)/6;
    h+='<div class="flip-today-marker" style="left:'+ml.toFixed(2)+'%;top:'+mt.toFixed(2)+'%">'+todayD+'</div>';
  }
  h+='</div>';return h;
}
function refreshFlipCalendar(){
  var view=document.querySelector('.flip-cal-view');if(!view)return;
  var pages=view.querySelectorAll('.flip-cal-page');
  for(var i=0;i<pages.length;i++){pages[i].classList.toggle('active',Number(pages[i].dataset.idx)===flipMonth);}
  var dots=document.querySelectorAll('.flip-cal-dot');
  for(var d=0;d<dots.length;d++){dots[d].classList.toggle('active',Number(dots[d].dataset.idx)===flipMonth);}
  var prev=document.querySelector('.flip-cal-nav.prev');
  var next=document.querySelector('.flip-cal-nav.next');
  if(prev)prev.disabled=flipMonth===0;
  if(next)next.disabled=flipMonth===flipMonths.length-1;
}
function bindFlipCalendar(){
  var prev=document.querySelector('.flip-cal-nav.prev');
  var next=document.querySelector('.flip-cal-nav.next');
  if(prev)prev.onclick=function(){if(flipMonth>0){flipMonth--;refreshFlipCalendar();}};
  if(next)next.onclick=function(){if(flipMonth<flipMonths.length-1){flipMonth++;refreshFlipCalendar();}};
  var dots=document.querySelectorAll('.flip-cal-dot');
  for(var d=0;d<dots.length;d++){dots[d].onclick=function(){flipMonth=Number(this.dataset.idx);refreshFlipCalendar();};}
}
function buildFlipCalendar(){
  var now=new Date();var todayY=now.getFullYear();var todayM=now.getMonth()+1;var todayD=now.getDate();
  if(flipMonth<0||flipMonth>=flipMonths.length){
    flipMonth=0;
    if(todayY===2026){var curIdx=flipMonths.indexOf(todayM);if(curIdx>=0)flipMonth=curIdx;}
  }
  var h='<div class="flip-cal">';
  h+='<button class="flip-cal-nav prev" data-dir="-1">◀</button>';
  h+='<button class="flip-cal-nav next" data-dir="1">▶</button>';
  h+='<div class="flip-cal-view">';
  for(var i=0;i<flipMonths.length;i++){h+=buildFlipCalendarPage(i,todayY,todayM,todayD);}
  h+='</div>';
  h+='<div class="flip-cal-dots">';
  for(var d=0;d<flipMonths.length;d++){h+='<span class="flip-cal-dot'+(d===flipMonth?' active':'')+'" data-idx="'+d+'"></span>';}
  h+='</div>';
  h+='</div>';return h;
}

// ════ TASKS ════
function renderTasks(){
  var tasks=state.tasks||[];var total=tasks.length;var done=0;
  for(var i=0;i<tasks.length;i++){if(tasks[i].completed)done++;}
  var pending=total-done;
  var pinned=state.pinnedTasks||[];var pDone=0;
  for(var pi=0;pi<pinned.length;pi++){if(pinned[pi].completed)pDone++;}
  var h=pHdr('任务','今日事，今日毕！','tasks');
  h+='<div class="cards">';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">📅 2026年8-12月月历</h3></div>';
  h+=buildFlipCalendar();
  h+='</div>';
  h+='<div class="card card-wide"><div class="stat-row"><div class="stat-card"><div class="stat-value">'+total+'</div><div class="stat-label">📋 今日任务</div></div><div class="stat-card"><div class="stat-value" style="color:var(--mint-dark)">'+done+'</div><div class="stat-label">✅ 已完成</div></div><div class="stat-card"><div class="stat-value" style="color:var(--pink-dark)">'+pending+'</div><div class="stat-label">⏳ 待完成</div></div></div></div>';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">📌 固定任务</h3><span class="tag tag-purple">'+pDone+'/'+pinned.length+' 完成</span></div><div class="list" id="pinnedList">';
  if(pinned.length===0)h+='<div class="empty">暂无固定任务</div>';
  else{for(var pj=0;pj<pinned.length;pj++){var pt=pinned[pj];h+='<div class="list-item'+(pt.completed?' done':'')+'"><input type="checkbox" class="checkbox toggle-pinned" data-id="'+pt.id+'"'+(pt.completed?' checked':'')+'><div class="item-main"><div class="item-title">'+esc(pt.text)+'</div><div class="item-meta">每日固定 · 持续打卡</div></div></div>';}}
  h+='</div></div>';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">📝 任务清单</h3></div><div class="form-row" style="margin-bottom:10px"><input id="nti" class="input" placeholder="输入新任务，按回车添加 ~"><button class="btn btn-primary" id="addTask">+ 添加</button></div><div class="list" id="taskList">';
  if(tasks.length===0)h+='<div class="empty">今天还没有任务哦，先添加一个吧 ✨</div>';
  else{for(var j=0;j<tasks.length;j++){var t=tasks[j];h+='<div class="list-item'+(t.completed?' done':'')+'"><input type="checkbox" class="checkbox toggle-task" data-id="'+t.id+'"'+(t.completed?' checked':'')+'><div class="item-main"><div class="item-title">'+esc(t.text)+'</div><div class="item-meta">'+esc(t.date||'')+'</div></div><div class="close del-task" data-id="'+t.id+'">×</div></div>';}}
  h+='</div></div></div>';
  return h;
}

// ════ READING ════
function renderReading(){
  var rd=state.reading||{reading:[],want:[],finished:[],recommend:[]};
  var rstats=state.readingStats||{};
  var cols=[{key:'reading',title:'📖 在读',cls:'tag-blue'},{key:'want',title:'📋 想读',cls:'tag-orange'},{key:'finished',title:'✅ 已读完',cls:'tag-green'}];
  var totalReadDays=0,totalReadMin=0,totalBooks=0;
  for(var rk in rstats){if(rstats[rk]>0){totalReadDays++;totalReadMin+=Number(rstats[rk])||0;}}
  if(rd.finished)totalBooks=rd.finished.length;
  var h=pHdr('阅读','读过的书，会变成脚下的路 🌸','reading');
  h+='<div class="cards">';
  h+='<div class="card card-wide" style="border:2px solid var(--pink);box-shadow:0 6px 24px rgba(255,133,162,0.15)"><div class="card-header"><h3 class="card-title">📊 阅读数据</h3><span class="tag tag-purple">置顶</span></div>';
  h+='<div class="stats-banner">';
  h+='<div class="stats-banner-half"><span class="stats-banner-icon left">📚</span><div class="stats-banner-num">'+totalBooks+'</div><div class="stats-banner-unit">本</div><div class="stats-banner-label">累计已读书籍</div></div>';
  h+='<div class="stats-banner-half"><span class="stats-banner-icon right">⏱️</span><div class="stats-banner-num">'+totalReadMin+'</div><div class="stats-banner-unit">分钟</div><div class="stats-banner-label">累计阅读时长</div></div>';
  h+='</div>';
  var todayReadMin=rstats[today()]||'';
  h+='<div class="duration-input-row"><input id="rdDuration" class="input" type="number" placeholder="今日阅读时长（分钟）" value="'+todayReadMin+'"><span style="font-size:12px;color:var(--text3)">分钟</span><button class="btn btn-primary" id="saveRdDuration">💾 记录时长</button></div>';
  h+='</div>';
  var recs=rd.recommend||[];
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">🌟 推荐书目</h3></div><div class="grid-3">';
  for(var r=0;r<recs.length;r++){var rec=recs[r];h+='<div class="title-card"><div style="font-weight:700;font-size:14px;margin-bottom:4px;color:var(--pink-dark)">📚 '+esc(rec.title)+'</div><div style="font-size:11px;color:var(--text3);margin-bottom:6px">✍️ '+esc(rec.author)+'</div><div style="font-size:11px;color:var(--text2);line-height:1.5">💡 '+esc(rec.reason)+'</div></div>';}
  h+='</div></div>';
  for(var i=0;i<cols.length;i++){
    var col=cols[i];var list=rd[col.key]||[];
    h+='<div class="card"><div class="card-header"><h3 class="card-title">'+col.title+'</h3><span class="tag '+col.cls+'">'+list.length+' 本</span></div><div class="form-row" style="margin-bottom:8px"><input class="input rt" data-col="'+col.key+'" placeholder="书名"><input class="input ra" data-col="'+col.key+'" placeholder="作者" style="width:80px"><input class="input rtp" data-col="'+col.key+'" placeholder="总页数" type="number" style="width:60px"><button class="btn btn-primary btn-sm add-r" data-col="'+col.key+'">+</button></div><div class="list scroll-list" data-col="'+col.key+'">';
    if(list.length===0)h+='<div class="empty">空空如也 ~</div>';
    else{for(var j=0;j<list.length;j++){var b=list[j];var pg=col.key==='reading'||col.key==='finished'?b.page||0:0;var tp=b.totalPage||0;var pct=tp>0?Math.round(pg/tp*100):0;
      h+='<div class="list-item"><div class="item-main"><div class="item-title">'+esc(b.title)+'</div><div class="item-meta">'+esc(b.author||'')+'</div>';
      if(col.key==='reading'&&tp>0){
        h+='<div style="margin-top:4px"><div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text3)"><span>📖 已读 '+pg+'/'+tp+' 页</span><span>'+pct+'%</span></div><div class="progress-bar"><div class="progress-fill" style="width:'+pct+'%"></div></div><div style="display:flex;gap:6px;margin-top:6px"><input class="input rpg-inp" data-id="'+b.id+'" data-col="reading" placeholder="页码" type="number" style="font-size:11px;padding:4px 8px;flex:1"><button class="btn btn-sm btn-secondary up-pg" data-id="'+b.id+'">更新</button></div></div>';
      }
      h+='</div><select class="select move-r" data-id="'+b.id+'" data-from="'+col.key+'" style="width:auto;min-width:60px;font-size:11px;padding:3px 6px"><option value="'+col.key+'">移至</option><option value="reading">在读</option><option value="want">想读</option><option value="finished">已读完</option></select><div class="close del-r" data-id="'+b.id+'" data-col="'+col.key+'">×</div></div>';}}
    h+='</div></div>';
  }
  h+='</div>';return h;
}

// ════ ENGLISH ════
function renderEnglish(){
  var eng=state.english||{words:[],dialogues:[]};var words=eng.words||[];var dialogues=eng.dialogues||[];var cnts={new:0,review:0,mastered:0};
  for(var i=0;i<words.length;i++){var s=words[i].status;cnts[s]=(cnts[s]||0)+1;}
  var h=pHdr('英语','每天30min · CET-4实用型 · 单词→对话→跟读','english');
  h+='<div class="card card-wide"><div style="display:flex;align-items:flex-start;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:220px"><div style="font-weight:700;font-size:15px;margin-bottom:8px;font-family:var(--font-cute)">📋 今日学习计划（约30分钟）</div><div style="font-size:12px;color:var(--text2);line-height:2">📝 <b>单词背诵</b>（10min）：复习旧词 + 学习新词，共30个核心词<br>💬 <b>情景对话</b>（10min）：跟读并练习对话，注意语音语调<br>🎙️ <b>跟读模仿</b>（10min）：选一段对话反复跟读直到流畅<br>🎯 <b>目标</b>：CET-4实用英语，应对日常交流场景</div></div><div style="background:var(--pink-light);border-radius:var(--radius-sm);padding:12px 16px;text-align:center;min-width:100px"><div style="font-size:28px;font-weight:800;color:var(--pink-dark);font-family:var(--font-cute)">30</div><div style="font-size:11px;color:var(--text3)">核心词汇</div></div></div></div>';
  h+='<div class="tab-row" id="engTabs"><button class="tab-btn active" data-et="words">📝 单词（30）</button><button class="tab-btn" data-et="dialogues">💬 对话</button><button class="tab-btn" data-et="readalong">🎙️ 跟读</button></div>';
  h+='<div class="cards" id="engContent">';
  h+='<div class="card card-wide" data-ep="words"><div class="stat-row" style="margin-bottom:12px"><div class="stat-card"><div class="stat-value">'+cnts['new']+'</div><div class="stat-label">🆕 新词</div></div><div class="stat-card"><div class="stat-value">'+cnts.review+'</div><div class="stat-label">🔄 复习中</div></div><div class="stat-card"><div class="stat-value">'+cnts.mastered+'</div><div class="stat-label">⭐ 已掌握</div></div></div><div class="card-header"><h3 class="card-title">📝 CET-4核心词汇表</h3><div class="card-actions"><input id="nw" class="input" placeholder="单词" style="width:100px"><input id="nm" class="input" placeholder="释义" style="width:140px"><button class="btn btn-primary" id="addWord">添加</button></div></div><div class="list scroll-list" id="wordList">';
  if(words.length===0)h+='<div class="empty">单词本是空的</div>';
  else{for(var w=0;w<words.length;w++){var wd=words[w];var stIcon=wd.status==='mastered'?'⭐':wd.status==='review'?'🔄':'🆕';
    h+='<div class="list-item"><div style="font-size:14px">'+stIcon+'</div><div class="item-main"><div class="item-title">'+esc(wd.word)+'</div><div class="item-meta" id="mean-'+wd.id+'" style="filter:blur(4px);cursor:pointer;transition:filter .3s">'+esc(wd.meaning)+'</div></div><select class="select ws" data-id="'+wd.id+'" style="width:auto;min-width:70px;font-size:11px"><option value="new"'+(wd.status==='new'?' selected':'')+'>新词</option><option value="review"'+(wd.status==='review'?' selected':'')+'>复习</option><option value="mastered"'+(wd.status==='mastered'?' selected':'')+'>已掌握</option></select><div class="close dw" data-id="'+wd.id+'">×</div></div>';}}
  h+='</div></div>';
  h+='<div class="card card-wide" data-ep="dialogues" style="display:none"><div class="card-header"><h3 class="card-title">💬 情景对话练习</h3><div class="card-actions"><input id="ndn" class="input" placeholder="场景名" style="width:100px"><textarea id="nde" class="input" placeholder="英文对话内容" style="width:200px;height:50px" rows="2"></textarea><input id="ndc" class="input" placeholder="中文说明" style="width:100px"><button class="btn btn-primary" id="addDia">添加</button></div></div><div class="list" id="diaList">';
  if(dialogues.length===0)h+='<div class="empty">暂无对话</div>';
  else{for(var d=0;d<dialogues.length;d++){var dia=dialogues[d];h+='<div class="list-item"><div class="item-main"><div class="item-title">🗣️ '+esc(dia.title)+'</div><div class="item-meta">'+esc(dia.cn)+'</div><div style="font-size:11px;color:var(--text2);margin-top:4px;white-space:pre-line;background:rgba(255,248,245,0.6);padding:10px;border-radius:var(--radius-xs);border:1px solid rgba(255,179,198,0.2)">'+esc(dia.en)+'</div></div><div class="close dd" data-id="'+dia.id+'">×</div></div>';}}
  h+='</div></div>';
  h+='<div class="card card-wide" data-ep="readalong" style="display:none"><div class="card-header"><h3 class="card-title">🎙️ 跟读训练</h3></div><div style="line-height:1.8;font-size:13px"><p><b>方法：</b>选一段对话 → 先听原音 → 逐句跟读 → 录音对比 → 重复直到流畅</p><p style="margin-top:8px"><b>今日推荐跟读素材：</b></p>';
  if(dialogues.length>0){var selDia=dialogues[0];h+='<div style="background:rgba(255,248,245,0.6);padding:14px;border-radius:var(--radius-sm);margin-top:8px;white-space:pre-line;font-size:13px;border:1px solid rgba(255,179,198,0.2)">'+esc(selDia.en)+'</div><div style="margin-top:8px;font-size:12px;color:var(--text3)">👆 跟读3遍，注意连读和语调。推荐"可可英语"App AI评分</div>';}
  else h+='<div class="empty">请先在"对话"标签中添加对话素材</div>';
  h+='<div style="margin-top:12px;padding:12px;background:var(--pink-light);border-radius:var(--radius-sm);border:1px solid rgba(255,179,198,0.2);font-size:12px"><b>🛠️ 推荐学习工具：</b>可可英语（AI口语评分）· 英语流利说（情景对话）· 每日英语听力（精听跟读）</div></div></div>';
  h+='</div>';return h;
}

// ════ TITLES ════
function renderTitles(){
  var h=pHdr('标题','小红书穿搭/带货/拍摄类 · 标题拆解 · 文案模板 · 拍摄技巧','titles');
  h+='<div class="cards">';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">✍️ 爆款标题公式（5大模板）</h3></div><div class="grid-2">';
  var formulas=[{name:'数字法',eg:'"3套神级搭配，小个子显高10cm"',desc:'用具体数字增强可信度，让读者觉得有干货可学',color:'#ff85a2'},{name:'痛点法',eg:'"梨形身材避雷！这条裤子真的显瘦20斤"',desc:'直击用户痛点，先戳需求再给方案，转化率最高',color:'#e84d7a'},{name:'对比法',eg:'"花300块买的平替，居然比千元大牌更好用"',desc:'制造冲突感和反差，"平替vs大牌"永远有流量',color:'#d97706'},{name:'场景法',eg:'"通勤约会一键切换！这件单品穿出精致感"',desc:'场景化描述让读者代入感强，"约会/通勤/出游"是高频词',color:'#56c596'},{name:'悬念法',eg:'"被同事追着问链接的第5天，终于…"',desc:'不说完，留钩子，激发好奇心点击查看完整内容',color:'#7c3aed'}];
  for(var fi=0;fi<formulas.length;fi++){var f=formulas[fi];h+='<div class="title-card"><div class="title-card-badge" style="background:'+f.color+'">爆款公式</div><div style="font-weight:700;font-size:14px;margin-bottom:4px;color:'+f.color+'">'+f.name+'</div><div style="font-size:13px;color:var(--text);font-style:italic;margin-bottom:4px">'+esc(f.eg)+'</div><div style="font-size:11px;color:var(--text2);line-height:1.5">'+esc(f.desc)+'</div></div>';}
  h+='</div></div>';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">📝 穿搭文案模板（黄金三段式）</h3></div><div class="grid-2">';
  var tmpls=[{title:'开头：痛点切入',content:'"作为155cm小个子，买裤子真的好难…"\n——用自身经历引发共鸣，瞬间拉近距离'},{title:'中间：细节种草',content:'"这条高腰+A字裙摆，腰线上移2cm，视觉腿长+5cm！"\n——具体数据+效果描述，增强说服力'},{title:'结尾：引导互动',content:'"评论区告诉我你的身材类型，帮你推荐穿搭！"\n——引导评论互动，提升算法权重'},{title:'带货文案结构',content:'【人群】+【场景】+【效果】\n例："梨形身材|通勤穿这身被夸瘦了10斤！"'}];
  for(var ti=0;ti<tmpls.length;ti++){var tm=tmpls[ti];h+='<div class="bubble"><div style="font-weight:700;font-size:13px;margin-bottom:4px;color:var(--pink-dark)">'+tm.title+'</div><div style="font-size:11px;color:var(--text2);line-height:1.6;white-space:pre-line">'+esc(tm.content)+'</div></div>';}
  h+='</div></div>';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">📷 拍摄技巧速查</h3></div><div class="grid-3">';
  var tps=[{title:'手机参数设置',items:'✓ 后置摄像头 1080p/60fps\n✓ 打开网格线构图\n✓ 关闭自动美颜\n✓ 自然侧光（10am/3pm）'},{title:'高点击率构图',items:'✓ 过肩镜中视角\n✓ 局部+全身组合\n✓ 动态入场式\n✓ 三分法构图'},{title:'封面设计要点',items:'✓ 对比色（黑白/红蓝）\n✓ 人物居中·穿搭清晰\n✓ 文字标签≤8字\n✓ 拼图对比更吸睛'},{title:'发布时间建议',items:'✓ 晚8-10点流量高峰\n✓ 周末流量更大\n✓ 配合热点话题标签\n✓ 发布后1h内回复评论'},{title:'避坑清单',items:'✗ 避免绝对化用语\n✗ 过度滤镜/照骗\n✗ 硬广植入\n✗ BGM版权侵权'},{title:'爆款数据参考',items:'📊 完播率>45%（视频）\n📊 点赞率>3%（图文）\n📊 互动率>1.5%\n📊 15-30秒最佳时长'}];
  for(var pi=0;pi<tps.length;pi++){var tp=tps[pi];h+='<div class="title-card"><div style="font-weight:700;font-size:13px;margin-bottom:6px;color:var(--pink-dark)">'+tp.title+'</div><div style="font-size:11px;color:var(--text2);line-height:1.7;white-space:pre-line">'+esc(tp.items)+'</div></div>';}
  h+='</div></div>';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">🔍 标题拆解案例</h3></div><div class="grid-2">';
  var cases=[{title:'案例1："Zara这条神裤，穿出大长腿！"',analysis:'品牌名+效果承诺 → 精准吸引目标用户\n内容结构：痛点引入 → 解决方案 → 转化钩子\n("官网断货，平替链接戳评论区")'},{title:'案例2："158cm/50kg | 小个子穿搭避坑指南"',analysis:'身高体重数据 → 增强可信度\n封面拼图对比"错误vs正确穿搭"\n正文"裤长85cm刚好显腿长"→ 数据说话'},{title:'案例3："月薪5千也能冲的10件好物"',analysis:'利他性标题 → "平价"自带流量\n关键："第3件闭眼入"→ 制造期待感\n适用：带货/好物分享类内容'},{title:'案例4："被问爆的显瘦连衣裙"',analysis:'"被问爆"→ 社交认证+从众心理\n"这季一定要试试"→ 季节限定感\n适合：穿搭/美妆/生活类博主'}];
  for(var ci=0;ci<cases.length;ci++){var cs=cases[ci];h+='<div class="bubble-right"><div style="font-weight:700;font-size:13px;margin-bottom:4px;color:#2b7cd3">'+cs.title+'</div><div style="font-size:11px;color:var(--text2);line-height:1.6;white-space:pre-line">'+esc(cs.analysis)+'</div></div>';}
  h+='</div></div></div>';return h;
}

// ════ HITS ════
function renderHits(){
  var hits=state.hits||[];
  var h=pHdr('爆款','抖音实时热点 · 穿搭/拍摄/新闻/AI','hits');
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">🔥 今日热点榜</h3><a class="btn btn-primary" href="https://www.douyin.com/hot" target="_blank" rel="noopener">打开抖音热榜 ↗</a></div>';
  h+='<div class="tab-row" style="margin-bottom:12px"><button class="tab-btn active" data-ht="all">全部</button><button class="tab-btn" data-ht="穿搭">👗 穿搭</button><button class="tab-btn" data-ht="拍摄">📷 拍摄</button><button class="tab-btn" data-ht="新闻">📰 新闻</button><button class="tab-btn" data-ht="AI">🤖 AI</button></div>';
  h+='<div class="list" id="hitList">';
  for(var i=0;i<hits.length;i++){var ht=hits[i];
    h+='<div class="list-item" data-htag="'+esc(ht.tag)+'"><div style="font-weight:800;color:var(--pink);width:28px;flex-shrink:0;font-family:var(--font-cute);font-size:16px">'+(i+1)+'</div><div class="item-main"><div class="item-title">'+esc(ht.title)+'</div><div class="item-meta">🔥 热度 '+esc(ht.heat)+'</div></div><span class="tag">'+esc(ht.tag)+'</span><a class="btn btn-sm btn-secondary" href="'+esc(ht.link)+'" target="_blank" rel="noopener">🔗 查看</a></div>';
  }
  h+='</div><div style="margin-top:12px;font-size:11px;color:var(--text3)">💡 点击"🔗 查看"直接跳转抖音搜索话题视频 | 建议配合抖音App获取最新实时热点</div></div>';return h;
}

// ════ EXERCISE ════
function renderExercise(){
  var exs=state.exercises||[];var log=state.exerciseLog||{};var td=today();
  var stats=state.exerciseStats||{};
  var allDone=true;for(var c=0;c<exs.length;c++){if(!exs[c].done)allDone=false;}
  var totalDays=0,totalMin=0;
  for(var dk in stats){if(stats[dk]>0){totalDays++;totalMin+=Number(stats[dk])||0;}}
  for(var lk in log){var lg=log[lk];if(lg&&lg.done){var anyDone=false;for(var li=0;li<lg.done.length;li++){if(lg.done[li])anyDone=true;}if(anyDone&&!stats[lk])totalDays++;}}
  var h=pHdr('锻炼','身体是创作的资本 💪','exercise');
  h+='<div class="cards">';
  h+='<div class="card card-wide" style="border:2px solid var(--pink);box-shadow:0 6px 24px rgba(255,133,162,0.15)"><div class="card-header"><h3 class="card-title">📊 运动数据</h3><span class="tag tag-purple">置顶</span></div>';
  h+='<div class="stats-banner">';
  h+='<div class="stats-banner-half"><span class="stats-banner-icon left">📅</span><div class="stats-banner-num">'+totalDays+'</div><div class="stats-banner-unit">天</div><div class="stats-banner-label">累计锻炼天数</div></div>';
  h+='<div class="stats-banner-half"><span class="stats-banner-icon right">⏱️</span><div class="stats-banner-num">'+totalMin+'</div><div class="stats-banner-unit">分钟</div><div class="stats-banner-label">累计锻炼时长</div></div>';
  h+='</div>';
  var todayMin=stats[td]||'';
  h+='<div class="duration-input-row"><input id="exDuration" class="input" type="number" placeholder="今日运动时长（分钟）" value="'+todayMin+'"><span style="font-size:12px;color:var(--text3)">分钟</span><button class="btn btn-primary" id="saveExDuration">💾 记录时长</button></div>';
  h+='</div>';
  h+='<div class="card card-wide"><h3 class="card-title">🏋️ 今日训练计划</h3><img src="assets/exercise.jpg" alt="训练" class="thumb" onerror="this.style.display=\'none\'"><div class="item-meta">图：B站肩颈/美背跟练收藏 · 三个项目同时完成</div></div>';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">✅ 项目打卡</h3><span class="tag '+(allDone?'tag-green':'tag-orange')+'">'+(allDone?'全部完成':'进行中')+'</span></div><div class="list">';
  for(var i=0;i<exs.length;i++){var v=exs[i];
    h+='<div class="list-item'+(v.done?' done':'')+'"><input type="checkbox" class="checkbox toggle-ex" data-idx="'+i+'"'+(v.done?' checked':'')+'><div class="item-main"><div class="item-title">'+esc(v.title)+'</div><div class="item-meta">UP主：'+esc(v.up)+' · ⏱ '+esc(v.dur)+'</div></div></div>';
  }
  h+='</div><div style="margin-top:10px"><textarea id="exNote" class="input" placeholder="备注：为什么没完成 / 练后感受 / 是否有额外运动 📝" rows="2" style="margin-bottom:8px">'+esc((log[td]&&log[td].note)||'')+'</textarea><button class="btn btn-primary" id="saveExLog">💾 保存今日打卡</button></div></div>';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">📅 每日锻炼打卡表</h3></div><div style="overflow-x:auto"><table class="log-table"><thead><tr><th>日期</th>';
  for(var ei=0;ei<exs.length;ei++)h+='<th>项目'+(ei+1)+'</th>';
  h+='<th>时长</th><th>备注</th></tr></thead><tbody>';
  var dates=Object.keys(log).sort().reverse().slice(0,14);
  if(dates.length===0)h+='<tr><td colspan="'+(exs.length+3)+'" style="text-align:center;color:var(--text3)">还没有打卡记录</td></tr>';
  else{for(var di=0;di<dates.length;di++){var d=dates[di];var entry=log[d]||{};var doneArr=entry.done||[];
    h+='<tr><td>'+esc(d)+'</td>';
    for(var xi=0;xi<exs.length;xi++){h+='<td style="text-align:center;font-size:16px">'+(doneArr[xi]?'😊':'😢')+'</td>';}
    h+='<td style="text-align:center;font-weight:700;color:var(--pink-dark)">'+(stats[d]?stats[d]+'min':'-')+'</td>';
    h+='<td style="font-size:11px;color:var(--text2);max-width:160px">'+esc(entry.note||'')+'</td></tr>';
  }}
  h+='</tbody></table></div></div>';
  for(var j=0;j<exs.length;j++){var vv=exs[j];
    h+='<div class="card"><div class="card-header"><h3 class="card-title">'+esc(vv.title)+'</h3><span class="tag tag-blue">⏱ '+esc(vv.dur)+'</span></div><div class="item-meta">UP主：'+esc(vv.up)+'</div><div class="iframe-wrap"><iframe src="https://player.bilibili.com/player.html?bvid='+esc(vv.bvid)+'&page=1&autoplay=0" allowfullscreen loading="lazy"></iframe></div><a class="btn btn-secondary" href="https://www.bilibili.com/video/'+esc(vv.bvid)+'/" target="_blank" rel="noopener">去B站观看 ↗</a></div>';
  }h+='</div>';return h;
}

// ════ EDITING ════
function renderEditing(){
  var ed=state.editing||{activeTab:'video',planProgress:{},planNotes:{}};var at=ed.activeTab||'video';
  var plan=[],wk1=['认识剪映界面+基础剪辑','文字与字幕（识别/样式/动画）','转场特效（叠化/闪白）','滤镜与调色入门','音频处理（BGM/音效）','关键帧入门·位移动画','蒙版入门·线性蒙版'],
  wk2=['抠像与合成（智能抠像）','变速技巧（曲线变速/卡点）','画中画与分屏','片头片尾文字动画','Vlog全流程实操','AI文字成片（一键生成）','AI数字人（虚拟主播）'],
  wk3=['可灵AI入门·文生视频','即梦AI入门·AI绘画','AI提示词技巧（Prompt）','AI短片制作全流程','AI人物一致性技法','AI风格转绘（实拍转动漫）','AI配音配乐'],
  wk4=['AI广告制作·产品展示','AI短剧制作·多场景','AI漫剧制作流程','Runway/Pika进阶','综合实战·完整AI短片','作品集整理与发布','创作风格定位+学习路线'];
  var aws=[wk1,wk2,wk3,wk4];var wls=['第1周：剪映基础入门','第2周：剪映进阶+AI工具','第3周：AI视频生成入门','第4周：AI视频实战+作品'];
  var dns=['周一','周二','周三','周四','周五','周六','周日'];var dn=0;
  for(var w=0;w<aws.length;w++){var wk=aws[w];for(var d=0;d<wk.length;d++){dn++;plan.push({num:dn,label:'Day '+dn+'（'+dns[d]+'）',week:w+1,title:wk[d]});}}
  var startDate=new Date('2026-08-03'),now=new Date(),dayDiff=Math.floor((now-startDate)/(1000*60*60*24));
  if(dayDiff<0)dayDiff=0;if(dayDiff>=28)dayDiff=27;var todayPlan=plan[dayDiff];
  var h=pHdr('剪辑','视频剪辑 × AI学习 · 30天零基础成长计划','editing');
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">📝 今日已学 & 总结</h3></div>';
  h+='<div style="display:flex;flex-direction:column;gap:10px">';
  h+='<div><div style="font-size:12px;font-weight:700;color:var(--pink-dark);margin-bottom:4px">📌 今日已学内容</div><textarea id="learnedText" class="input" placeholder="记录今天学到的剪辑技巧、AI工具用法、新发现的素材..." rows="2">'+esc(ed.todayLearned||'')+'</textarea></div>';
  h+='<div><div style="font-size:12px;font-weight:700;color:var(--pink-dark);margin-bottom:4px">💡 学习总结</div><textarea id="summaryText" class="input" placeholder="总结今天的收获、疑难点、明天想重点突破的内容..." rows="2">'+esc(ed.summary||'')+'</textarea></div>';
  h+='<div><button class="btn btn-primary" id="saveEdSummary">💾 保存学习记录</button></div>';
  h+='</div></div>';
  h+='<div class="tab-row"><button class="tab-btn'+(at==='video'?' active':'')+'" data-edt="video">✂️ 视频剪辑</button><button class="tab-btn'+(at==='ai'?' active':'')+'" data-edt="ai">🤖 AI学习</button><button class="tab-btn'+(at==='plan'?' active':'')+'" data-edt="plan">📅 30天计划</button><button class="tab-btn'+(at==='assets'?' active':'')+'" data-edt="assets">📦 素材资源</button></div><div class="cards" id="edContent">';
  h+='<div class="card card-wide" data-epm="video"'+(at!=='video'?' style="display:none"':'')+'><div class="card-header"><h3 class="card-title">剪映剪辑教程（零基础）</h3><a class="btn btn-primary" href="https://www.capcut.cn/learning" target="_blank" rel="noopener">剪映官方课堂 ↗</a></div><div class="grid-2">';
  h+='<div class="title-card"><div style="font-weight:700;font-size:14px;margin-bottom:6px;color:var(--pink-dark)">📱 手机剪映全套60集</div><div style="font-size:11px;color:var(--text2);margin-bottom:8px">零基础到精通，字幕版，适合碎片时间学习</div><div class="iframe-wrap"><iframe src="https://player.bilibili.com/player.html?bvid=BV1QW1CBREo7&page=1&autoplay=0" allowfullscreen loading="lazy"></iframe></div><a class="btn btn-secondary" href="https://www.bilibili.com/video/BV1QW1CBREo7/" target="_blank" rel="noopener" style="margin-top:8px">B站观看 ↗</a></div>';
  h+='<div class="title-card"><div style="font-weight:700;font-size:14px;margin-bottom:6px;color:var(--pink-dark)">💻 剪映专业版系统教程</div><div style="font-size:11px;color:var(--text2);margin-bottom:8px">107集完整教程，电脑版剪映全面掌握</div><div class="iframe-wrap"><iframe src="https://player.bilibili.com/player.html?bvid=BV1PJcrzyEBs&page=1&autoplay=0" allowfullscreen loading="lazy"></iframe></div><a class="btn btn-secondary" href="https://www.bilibili.com/video/BV1PJcrzyEBs/" target="_blank" rel="noopener" style="margin-top:8px">B站观看 ↗</a></div>';
  h+='</div></div>';
  h+='<div class="card card-wide" data-epm="ai"'+(at!=='ai'?' style="display:none"':'')+'><div class="card-header"><h3 class="card-title">AI视频制作教程</h3></div><div class="grid-2">';
  h+='<div class="title-card" style="background:linear-gradient(135deg,var(--lav-light),#fff);border-color:rgba(195,174,214,0.4)"><div style="font-weight:700;font-size:14px;margin-bottom:6px;color:#7c3aed">🤖 可灵AI全套教程</div><div style="font-size:11px;color:var(--text2);margin-bottom:8px">文生视频+图生视频+配音配乐全流程</div><div class="iframe-wrap"><iframe src="https://player.bilibili.com/player.html?bvid=BV1zWWszjEhv&page=1&autoplay=0" allowfullscreen loading="lazy"></iframe></div><a class="btn btn-lav" href="https://www.bilibili.com/video/BV1zWWszjEhv/" target="_blank" rel="noopener" style="margin-top:8px">B站观看 ↗</a></div>';
  h+='<div class="title-card" style="background:linear-gradient(135deg,var(--lav-light),#fff);border-color:rgba(195,174,214,0.4)"><div style="font-weight:700;font-size:14px;margin-bottom:6px;color:#7c3aed">🎬 AI视频制作系统课</div><div style="font-size:11px;color:var(--text2);margin-bottom:8px">即梦+豆包+剪映，AI视频全流程</div><div class="iframe-wrap"><iframe src="https://player.bilibili.com/player.html?bvid=BV1sW421R7nG&page=1&autoplay=0" allowfullscreen loading="lazy"></iframe></div><a class="btn btn-lav" href="https://www.bilibili.com/video/BV1sW421R7nG/" target="_blank" rel="noopener" style="margin-top:8px">B站观看 ↗</a></div>';
  h+='</div></div>';
  h+='<div class="card card-wide" data-epm="plan"'+(at!=='plan'?' style="display:none"':'')+'><div class="card-header"><h3 class="card-title">📅 30天零基础成长计划</h3></div>';
  h+='<div style="background:linear-gradient(135deg,var(--pink-light),#fff);border-radius:var(--radius-sm);padding:14px;margin-bottom:12px;border:2px solid rgba(255,133,162,0.3)"><div style="font-weight:700;font-size:14px;color:var(--pink-dark)">📌 今天：'+esc(todayPlan.label)+'</div><div style="font-size:13px;margin-top:4px">'+esc(todayPlan.title)+'</div></div>';
  for(var pw=0;pw<aws.length;pw++){
    h+='<div style="margin-bottom:10px"><div style="font-weight:700;font-size:12px;color:var(--pink);margin-bottom:6px;font-family:var(--font-cute)">⭐ '+esc(wls[pw])+'</div>';
    for(var pd=0;pd<aws[pw].length;pd++){var pitem=plan[pw*7+pd];
      h+='<div class="plan-day"'+(pitem.num===dayDiff+1?' style="border-color:var(--pink);background:var(--pink-light)"':'')+'><div class="plan-day-num">'+esc(pitem.label)+'</div><div class="plan-day-title">'+esc(pitem.title)+'</div></div>';
    }
    h+='</div>';
  }
  h+='</div>';
  h+='<div class="card card-wide" data-epm="assets"'+(at!=='assets'?' style="display:none"':'')+'><div class="card-header"><h3 class="card-title">📦 素材资源库</h3></div><div class="grid-2">';
  h+='<div class="title-card"><div style="font-weight:700;font-size:13px;margin-bottom:6px;color:var(--pink-dark)">🎵 BGM素材</div><div style="font-size:11px;color:var(--text2);line-height:1.8">✓ 抖音热门BGM<br>✓ 剪映内置音乐库<br>✓ Pixabay Music（免费商用）<br>✓ Free Music Archive</div></div>';
  h+='<div class="title-card"><div style="font-weight:700;font-size:13px;margin-bottom:6px;color:var(--pink-dark)">🎬 视频素材</div><div style="font-size:11px;color:var(--text2);line-height:1.8">✓ Pexels Videos（免费商用）<br>✓ Mixkit（免费视频素材）<br>✓ Coverr（免费4K素材）<br>✓ 剪映素材库</div></div>';
  h+='<div class="title-card"><div style="font-weight:700;font-size:13px;margin-bottom:6px;color:var(--pink-dark)">🎨 字体资源</div><div style="font-size:11px;color:var(--text2);line-height:1.8">✓ 思源黑体/宋体<br>✓ 阿里巴巴普惠体<br>✓ 站酷系列字体<br>✓ Google Fonts</div></div>';
  h+='<div class="title-card"><div style="font-weight:700;font-size:13px;margin-bottom:6px;color:var(--pink-dark)">🤖 AI工具汇总</div><div style="font-size:11px;color:var(--text2);line-height:1.8">✓ 可灵AI（文生视频）<br>✓ 即梦AI（AI绘画+视频）<br>✓ 豆包（AI文案/配音）<br>✓ Runway/Pika（AI视频）</div></div>';
  h+='</div></div>';
  h+='</div>';return h;
}

// ════ WALLET ════
function renderWallet(){
  var w=state.wallet||{transactions:[]};
  var txns=w.transactions||[];
  var now=new Date(),yr=now.getFullYear(),mo=now.getMonth()+1;
  var tStr=yr+'-'+String(mo).padStart(2,'0');
  var todayStr=today();
  var dayIn=0,dayOut=0,monIn=0,monOut=0;
  for(var i=0;i<txns.length;i++){
    var t=txns[i];
    if(t.date===todayStr){if(t.type==='income')dayIn+=Number(t.amount)||0;else dayOut+=Number(t.amount)||0;}
    if(t.date&&t.date.indexOf(tStr)===0){if(t.type==='income')monIn+=Number(t.amount)||0;else monOut+=Number(t.amount)||0;}
  }
  var bal=monIn-monOut;
  var h=pHdr('钱包','记账让每一分钱都有迹可循 💰','wallet');
  h+='<div class="cards">';
  h+='<div class="card card-wide"><div class="wallet-summary">';
  h+='<div class="wallet-stat" style="background:var(--mint-light)"><div class="ws-val" style="color:var(--mint-dark)">+'+fmtMoney(dayIn)+'</div><div class="ws-lbl">今日收入</div></div>';
  h+='<div class="wallet-stat" style="background:var(--pink-light)"><div class="ws-val" style="color:var(--pink-dark)">-'+fmtMoney(dayOut)+'</div><div class="ws-lbl">今日支出</div></div>';
  h+='<div class="wallet-stat" style="background:var(--mint-light)"><div class="ws-val" style="color:var(--mint-dark)">+'+fmtMoney(monIn)+'</div><div class="ws-lbl">本月收入</div></div>';
  h+='<div class="wallet-stat" style="background:var(--pink-light)"><div class="ws-val" style="color:var(--pink-dark)">-'+fmtMoney(monOut)+'</div><div class="ws-lbl">本月支出</div></div>';
  h+='</div>';
  h+='<div class="wallet-balance" style="background:'+(bal>=0?'var(--mint-light)':'var(--pink-light)')+';color:'+(bal>=0?'var(--mint-dark)':'var(--pink-dark)')+'">💰 本月结余：'+fmtMoney(bal)+' 元</div></div>';
  h+='<div class="card"><h3 class="card-title">📊 支出分类</h3>';
  var cats={};
  for(var ci=0;ci<txns.length;ci++){if(txns[ci].type==='expense'&&txns[ci].date&&txns[ci].date.indexOf(tStr)===0){var c=txns[ci].category;cats[c]=(cats[c]||0)+(Number(txns[ci].amount)||0);}}
  var catArr=[];var totalExp=0;
  for(var k in cats){catArr.push({name:k,amt:cats[k]});totalExp+=cats[k];}
  catArr.sort(function(a,b){return b.amt-a.amt;});
  if(catArr.length===0)h+='<div class="empty">本月还没有支出记录</div>';
  else{for(var ce=0;ce<catArr.length;ce++){var ca=catArr[ce];var pct=totalExp>0?Math.round(ca.amt/totalExp*100):0;
    h+='<div class="cat-bar"><div class="cat-icon">'+getCatIcon(ca.name)+'</div><div class="cat-info"><div class="cat-top"><span>'+esc(ca.name)+'</span><span>'+fmtMoney(ca.amt)+'元</span></div><div class="progress-bar"><div class="progress-fill" style="width:'+pct+'%"></div></div></div><div class="cat-pct">'+pct+'%</div></div>';}}
  h+='</div>';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">➕ 记一笔</h3></div><div class="form-row" style="margin-bottom:8px"><select id="wt" class="select" style="width:auto;min-width:80px"><option value="expense">💸 支出</option><option value="income">💰 收入</option></select><input id="wa" class="input" placeholder="金额" type="number" style="width:80px"><select id="wc" class="select" style="width:auto;min-width:90px"><option value="">分类</option>';
  for(var eci=0;eci<expenseCats.length;eci++)h+='<option value="'+esc(expenseCats[eci].name)+'">'+expenseCats[eci].icon+' '+esc(expenseCats[eci].name)+'</option>';
  h+='</select><select id="wm" class="select" style="width:auto;min-width:80px"><option value="微信">💚 微信</option><option value="支付宝">💙 支付宝</option><option value="银行卡">💛 银行卡</option></select></div><div class="form-row" style="margin-bottom:8px"><input id="wn" class="input" placeholder="备注（可选）" style="flex:1"><input id="wd" class="input" type="date" value="'+todayStr+'" style="width:140px"><button class="btn btn-primary" id="addTxn">+ 记账</button></div></div>';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">📋 交易记录</h3><span class="tag">'+txns.length+' 笔</span></div><div class="list scroll-list" id="txnList">';
  if(txns.length===0)h+='<div class="empty">还没有记录，开始记账吧！</div>';
  else{for(var ti=txns.length-1;ti>=0;ti--){var tx=txns[ti];
    h+='<div class="txn-item"><div class="cat-icon">'+getCatIcon(tx.category)+'</div><div class="item-main"><div class="item-title">'+esc(tx.note||tx.category)+'</div><div class="item-meta">'+esc(tx.category)+' · '+esc(tx.method)+' · '+esc(tx.date)+'</div></div><div style="font-weight:800;'+(tx.type==='income'?'color:var(--mint-dark)':'color:var(--pink-dark)')+'">'+(tx.type==='income'?'+':'-')+fmtMoney(tx.amount)+'</div><div class="close del-txn" data-id="'+tx.id+'">×</div></div>';}}
  h+='</div></div></div>';return h;
}

// ════ REVIEW ════
var habitCats=[
  {key:'water',name:'喝水',icon:'💧'},
  {key:'exercise',name:'运动',icon:'🏃'},
  {key:'hair',name:'增发',icon:'💆'},
  {key:'sleep',name:'早睡',icon:'😴'}
];
function getWeekDates(){
  var now=new Date();var day=now.getDay()||7;var mon=new Date(now);mon.setDate(now.getDate()-day+1);
  var arr=[];for(var i=0;i<7;i++){var d=new Date(mon);d.setDate(mon.getDate()+i);arr.push(d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'));}
  return arr;
}
function buildHabitTracker(){
  var habits=state.habits||{};
  var weekDates=getWeekDates();
  var dayNames=['一','二','三','四','五','六','日'];
  var now=new Date();var todayStr=today();
  var h='<div class="card card-wide"><div class="card-header"><h3 class="card-title">🌱 好习惯养成清单</h3><span class="tag tag-purple">本周打卡</span></div>';
  for(var ci=0;ci<habitCats.length;ci++){
    var cat=habitCats[ci];
    var catData=habits[cat.key]||{};
    var weekCount=0;
    h+='<div class="habit-row">';
    h+='<div class="habit-label"><div class="habit-label-icon">'+cat.icon+'</div><div class="habit-label-name">'+cat.name+'</div></div>';
    h+='<div class="habit-checkin">';
    for(var wi=0;wi<7;wi++){
      var wd=weekDates[wi];
      var checked=!!catData[wd];
      if(checked)weekCount++;
      h+='<div class="habit-day"><div class="habit-day-label">周'+dayNames[wi]+'</div><div class="habit-day-box'+(checked?' checked':'')+'" data-habit="'+cat.key+'" data-date="'+wd+'">'+(checked?'':'<span class="habit-day-emoji" style="font-size:12px;opacity:.3">'+cat.icon+'</span>')+'</div></div>';
    }
    h+='</div>';
    h+='<div class="habit-summary"><div class="habit-summary-num">'+weekCount+'/7</div><div class="habit-summary-label">本周</div></div>';
    h+='</div>';
  }
  h+='</div>';
  var yr=now.getFullYear(),mo=now.getMonth()+1;
  var daysInMonth=new Date(yr,mo,0).getDate();
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">📅 '+yr+'年'+mo+'月习惯统计</h3></div>';
  h+='<div style="overflow-x:auto"><table class="habit-month-table"><thead><tr><th>习惯</th>';
  for(var d=1;d<=daysInMonth;d++)h+='<th>'+d+'</th>';
  h+='<th>完成率</th></tr></thead><tbody>';
  for(var hi=0;hi<habitCats.length;hi++){
    var hc=habitCats[hi];
    var hd=habits[hc.key]||{};
    var monthCount=0;
    h+='<tr><td style="text-align:left;font-weight:700;color:var(--pink-dark)">'+hc.icon+' '+hc.name+'</td>';
    for(var md=1;md<=daysInMonth;md++){
      var mk=yr+'-'+String(mo).padStart(2,'0')+'-'+String(md).padStart(2,'0');
      if(hd[mk]){h+='<td class="habit-cell-yes">✓</td>';monthCount++;}
      else h+='<td class="habit-cell-no">·</td>';
    }
    var rate=Math.round(monthCount/daysInMonth*100);
    h+='<td class="habit-cell-rate">'+rate+'%</td></tr>';
  }
  h+='</tbody></table></div></div>';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">📊 '+yr+'年习惯年度总览</h3></div>';
  h+='<div style="overflow-x:auto"><table class="habit-month-table"><thead><tr><th>习惯</th>';
  for(var mm=1;mm<=12;mm++)h+='<th>'+mm+'月</th>';
  h+='<th>全年</th></tr></thead><tbody>';
  for(var yi=0;yi<habitCats.length;yi++){
    var yc=habitCats[yi];
    var yd=habits[yc.key]||{};
    var yearTotal=0;
    h+='<tr><td style="text-align:left;font-weight:700;color:var(--pink-dark)">'+yc.icon+' '+yc.name+'</td>';
    for(var ym=1;ym<=12;ym++){
      var ymCount=0;var ymDays=new Date(yr,ym,0).getDate();
      for(var yd2=1;yd2<=ymDays;yd2++){
        var yk=yr+'-'+String(ym).padStart(2,'0')+'-'+String(yd2).padStart(2,'0');
        if(yd[yk])ymCount++;
      }
      var ymRate=ymDays>0?Math.round(ymCount/ymDays*100):0;
      yearTotal+=ymCount;
      h+='<td class="habit-cell-rate">'+ymRate+'%</td>';
    }
    var yearDays=(now.getMonth()+1>0)?Math.floor((now-new Date(yr,0,1))/(1000*60*60*24))+1:365;
    var yearRate=Math.round(yearTotal/yearDays*100);
    h+='<td class="habit-cell-rate">'+yearRate+'%</td></tr>';
  }
  h+='</tbody></table></div></div>';
  return h;
}
function renderReview(){
  var rv=state.review||{pending:[],done:[]};
  var insps=state.inspirations||[];
  var h=pHdr('复盘','每天进步一点点 💫','review');
  h+='<div class="cards">';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">💡 灵感记录</h3><span class="tag tag-orange">'+insps.length+' 条</span></div>';
  h+='<div class="inspiration-input"><textarea id="inspText" class="input" placeholder="想到什么好点子？打算做什么？记下来 ✨" rows="2"></textarea><button class="btn btn-primary" id="addInsp">+ 记录灵感</button></div>';
  if(insps.length===0)h+='<div class="empty">还没有灵感记录，随时记下来吧~</div>';
  else{for(var ii=insps.length-1;ii>=0;ii--){var insp=insps[ii];
    h+='<div class="inspiration-card"><div class="inspiration-card-text">'+esc(insp.text)+'</div><div class="inspiration-card-date">📅 '+esc(insp.date)+'</div><div class="close del-insp" data-id="'+insp.id+'">×</div></div>';
  }}
  h+='</div>';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">📋 待复盘项</h3><div class="card-actions"><input id="rvn" class="input" placeholder="复盘主题" style="width:140px"><button class="btn btn-primary" id="addRv">+ 添加</button></div></div><div class="list" id="rvPendingList">';
  var pending=rv.pending||[];
  if(pending.length===0)h+='<div class="empty">没有待复盘项</div>';
  else{for(var i=0;i<pending.length;i++){var p=pending[i];h+='<div class="list-item"><div class="item-main"><div class="item-title">'+esc(p.title)+'</div><div class="item-meta">'+esc(p.date)+'</div></div><button class="btn btn-sm btn-mint do-rv" data-id="'+p.id+'">开始复盘</button><div class="close del-rv" data-id="'+p.id+'">×</div></div>';}}
  h+='</div></div>';
  var now=new Date();
  h+='<div class="card"><h3 class="card-title">😊 心情日记</h3>';
  h+=buildMoodBoard(now.getFullYear(),now.getMonth()+1,now.getDate());
  h+='</div>';
  var done=rv.done||[];
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">✅ 已复盘</h3><span class="tag tag-green">'+done.length+' 篇</span></div>';
  if(done.length===0)h+='<div class="empty">还没有复盘记录，开始第一篇吧！</div>';
  else{for(var di=done.length-1;di>=0;di--){var dr=done[di];
    h+='<div class="review-card" style="margin-bottom:12px" data-rid="'+dr.id+'">';
    h+='<div class="review-actions"><button class="rv-edit-btn" data-id="'+dr.id+'">✏️ 编辑</button><button class="rv-del-btn" data-id="'+dr.id+'" style="color:var(--pink-dark)">🗑 删除</button></div>';
    h+='<h4>'+(dr.mood||'📝')+' '+esc(dr.title)+'</h4>';
    h+='<div class="review-edit-area" id="rvEdit-'+dr.id+'"><div class="review-3part">';
    h+='<div class="review-3part-item"><div class="review-3part-tag r-result">结果</div><textarea class="review-3part-input rv-edit-result" data-id="'+dr.id+'" placeholder="发生了什么结果？">'+esc(dr.result||'')+'</textarea></div>';
    h+='<div class="review-3part-item"><div class="review-3part-tag r-cause">原因</div><textarea class="review-3part-input rv-edit-cause" data-id="'+dr.id+'" placeholder="为什么会有这个结果？">'+esc(dr.cause||'')+'</textarea></div>';
    h+='<div class="review-3part-item"><div class="review-3part-tag r-impact">影响</div><textarea class="review-3part-input rv-edit-impact" data-id="'+dr.id+'" placeholder="带来了什么影响/后续行动？">'+esc(dr.impact||'')+'</textarea></div>';
    h+='</div><div style="margin-top:8px;display:flex;gap:6px"><button class="btn btn-primary btn-sm rv-save-edit" data-id="'+dr.id+'">💾 保存</button><button class="btn btn-secondary btn-sm rv-cancel-edit" data-id="'+dr.id+'">取消</button></div></div>';
    h+='<div class="review-view-area" id="rvView-'+dr.id+'"><div class="review-3part">';
    h+='<div class="review-3part-item"><div class="review-3part-tag r-result">结果</div><div class="review-3part-display">'+esc(dr.result||'（未填写）')+'</div></div>';
    h+='<div class="review-3part-item"><div class="review-3part-tag r-cause">原因</div><div class="review-3part-display">'+esc(dr.cause||'（未填写）')+'</div></div>';
    h+='<div class="review-3part-item"><div class="review-3part-tag r-impact">影响</div><div class="review-3part-display">'+esc(dr.impact||'（未填写）')+'</div></div>';
    h+='</div><div style="font-size:10px;color:var(--text3);margin-top:6px">📅 '+esc(dr.date)+'</div></div>';
    h+='</div>';}}
  h+='</div>';
  h+=buildHabitTracker();
  h+='</div>';return h;
}

// ════ TOOLS ════
function renderTools(){
  var h=pHdr('工具','换个背景，换个心情 ✨','tools');
  h+='<div class="cards">';
  var musicId=state.tools&&state.tools.musicId?state.tools.musicId:'';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">🎵 音乐播放器</h3></div>';
  h+='<div style="font-size:12px;color:var(--text2);margin-bottom:10px;line-height:1.6">边工作边听英语/音乐，输入网易云歌单 ID 即可嵌入播放。也可以点击下面链接快速打开常用平台。</div>';
  h+='<div class="form-row" style="margin-bottom:12px;gap:8px"><input id="musicId" class="input" placeholder="网易云歌单 ID（如 60198）" value="'+esc(musicId)+'" style="flex:1;min-width:120px"><button class="btn btn-primary" id="saveMusic">加载歌单</button></div>';
  if(musicId){
    h+='<div class="iframe-wrap" style="height:300px;border-radius:var(--radius-sm);overflow:hidden;border:var(--bd)"><iframe src="https://music.163.com/outchain/player?type=0&id='+esc(musicId)+'&auto=0&height=430" style="width:100%;height:100%;border:none" allowfullscreen loading="lazy"></iframe></div>';
  }
  h+='<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">';
  h+='<a class="btn btn-secondary" href="https://music.163.com/#/search/m/?s=英语听力" target="_blank" rel="noopener">🎧 网易云英语听力</a>';
  h+='<a class="btn btn-secondary" href="https://y.qq.com/n/ryqq/search?w=英语听力" target="_blank" rel="noopener">🎵 QQ音乐</a>';
  h+='<a class="btn btn-secondary" href="https://open.spotify.com/search/English%20listening" target="_blank" rel="noopener">🟢 Spotify</a>';
  h+='<a class="btn btn-secondary" href="https://www.bbc.co.uk/learningenglish/english/features/6-minute-english" target="_blank" rel="noopener">📻 BBC英语</a>';
  h+='</div></div>';
  var curDoll=state.tools&&state.tools.doll?state.tools.doll:'';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">🧸 陪伴玩偶</h3><span class="tag">选一个角落生物陪你</span></div>';
  h+='<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start">';
  h+='<div style="flex:1;min-width:220px"><div class="doll-grid" id="dollGrid">';
  for(var si=0;si<sumikkoChars.length;si++){
    var sc=sumikkoChars[si];
    h+='<div class="doll-thumb'+(sc.n===curDoll?' selected':'')+'" data-doll="'+esc(sc.n)+'" title="'+esc(sc.n)+'"><div class="doll-thumb-svg">'+sumikkoSvg(sc.n)+'</div><div class="doll-thumb-name">'+esc(sc.n)+'</div></div>';
  }
  h+='</div></div>';
  h+='<div style="flex:1;min-width:180px"><div class="doll-preview" id="dollPreview">';
  if(curDoll){
    h+='<div class="doll-stage"><div class="doll-char" id="dollChar">'+sumikkoSvg(curDoll)+'</div><div class="doll-name">'+esc(curDoll)+'</div></div>';
    h+='<div class="doll-actions"><button class="doll-btn" data-da="nod">😊 点头</button><button class="doll-btn" data-da="blink">😉 眨眼</button><button class="doll-btn" data-da="spin">🌀 转圈</button><button class="doll-btn" data-da="jump">⬆️ 跳跳</button><button class="doll-btn" data-da="pat">🤚 摸头</button></div>';
  }else{
    h+='<div class="empty">从左边选一个玩偶来陪你吧 🐣</div>';
  }
  h+='</div></div></div></div>';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">🎨 背景图库</h3><div class="card-actions"><input type="file" id="bgFile" accept="image/*" style="display:none"><button class="btn btn-primary" id="uploadBg">+ 上传背景</button></div></div>';
  h+='<div class="grid-3" id="bgList">';
  var bgs=[{url:'assets/bg.jpg',name:'默认星空'},{url:'none',name:'纯色'}];
  var custom=state.tools&&state.tools.custom?state.tools.custom:[];
  for(var i=0;i<custom.length;i++)bgs.push({url:custom[i],name:'自定义'+(i+1)});
  var curBg=state.tools&&state.tools.currentBg?state.tools.currentBg:'assets/bg.jpg';
  for(var bi=0;bi<bgs.length;bi++){var bg=bgs[bi];
    h+='<div style="cursor:pointer;border-radius:var(--radius-sm);overflow:hidden;border:3px solid '+(bg.url===curBg?'var(--pink)':'rgba(255,179,198,0.2)')+';aspect-ratio:4/3;'+(bg.url==='none'?'background:#fff5f7;display:grid;place-items:center':'')+'" class="bg-item" data-bg="'+esc(bg.url)+'">';
    if(bg.url!=='none')h+='<img src="'+esc(bg.url)+'" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display=\'none\'">';
    h+='<div style="text-align:center;font-size:11px;color:var(--text3);padding:4px">'+esc(bg.name)+'</div></div>';
  }
  h+='</div></div>';
  h+='<div class="card"><h3 class="card-title">💾 数据管理</h3><div style="display:flex;gap:8px;flex-wrap:wrap">';
  h+='<button class="btn btn-secondary" id="exportData">📤 导出数据</button>';
  h+='<button class="btn btn-secondary" id="importData">📥 导入数据</button>';
  h+='<input type="file" id="importFile" accept=".json" style="display:none">';
  h+='</div><div style="font-size:11px;color:var(--text3);margin-top:8px;line-height:1.6">导出数据可保存到本地，换设备时导入即可同步工作台数据。</div></div>';
  h+='<div class="card"><h3 class="card-title">🔄 重置</h3><div style="font-size:11px;color:var(--text3);margin-bottom:8px">清除所有数据，恢复到初始状态</div><button class="btn btn-danger" id="resetData">⚠️ 重置工作台</button></div>';
  h+='</div>';return h;
}

// ════ COMMUNICATION ════
function renderComm(){
  var comm=state.comm||{progress:{},notes:'',activeTab:'daily',workProgress:{},workNotes:''};
  var active=comm.activeTab||'daily';
  var isDaily=active==='daily';
  var dailyPlan=[
    {t:'倾听训练',d:'不急着给建议，先复述对方的话，确认自己听懂了。'},
    {t:'非暴力沟通',d:'观察 → 感受 → 需要 → 请求，四步表达清楚诉求。'},
    {t:'具体化赞美',d:'事实 + 正面感受 + 品质升华，让赞美更真诚。'},
    {t:'温和拒绝',d:'感谢 + 真实理由 + 替代方案，拒绝也能留好感。'},
    {t:'化解冲突',d:'先认同情绪，再讨论事情，不争对错争理解。'},
    {t:'表达需求',d:'把"你怎么总是…"换成"我需要…"，减少对立。'},
    {t:'即兴表达',d:'PREP结构：观点-理由-例子-重申，30秒说清楚。'},
    {t:'有效提问',d:'多用开放式问题，让对方多说，你多听。'},
    {t:'讲故事',d:'冲突开头-过程转折-结局收束，让观点更有感染力。'},
    {t:'情绪命名',d:'帮对方说出他的情绪，是最快的共情。'},
    {t:'建立共鸣',d:'分享相似经历，表达"我懂你的感受"。'},
    {t:'弱关系维护',d:'节日问候 + 价值分享 + 偶尔求助，关系不冷。'},
    {t:'每日复盘',d:'记录今天说得好的3句和想改进的1句。'},
    {t:'自由练习',d:'主动发起一次深度对话，实践本周所学。'}
  ];
  var workPlan=[
    {t:'汇报先说结论',d:'用"结论-原因-行动"三段式，让上级快速get重点。'},
    {t:'电梯演讲30秒',d:'30秒内讲清项目价值、进度和需要的支持。'},
    {t:'邮件沟通三段式',d:'标题清晰、正文分段、结尾明确下一步。'},
    {t:'会议发言PREP',d:'观点-理由-例子-重申，控制发言节奏。'},
    {t:'向上管理',d:'主动同步进度，提前暴露风险，带着方案求助。'},
    {t:'跨部门协作',d:'用"我们共同的目标"开头，减少部门墙。'},
    {t:'反馈与复盘',d:'事实+影响+建议，反馈要具体可操作。'},
    {t:'处理冲突',d:'对事不对人，先处理情绪，再解决问题。'},
    {t:'谈判与说服',d:'找到对方利益点，用数据和案例说话。'},
    {t:'争取资源',d:'说明投入产出比，给出A/B方案供决策。'},
    {t:'建立职场信任',d:'说到做到，及时闭环，小事也认真。'},
    {t:'赞美与激励同事',d:'具体行为+正向影响+感谢，让赞美有力量。'},
    {t:'拒绝不合理需求',d:'表达理解+真实原因+替代方案+重新约定。'},
    {t:'主动争取机会',d:'用过往成绩背书，清晰表达你想承担的角色的。'}
  ];
  var plan=isDaily?dailyPlan:workPlan;
  var start=new Date('2026-08-03'),now=new Date(),diff=Math.floor((now-start)/(1000*60*60*24));
  if(diff<0)diff=0;var idx=diff%14;var todayStr=today();
  var done=!!(isDaily?comm.progress[todayStr]:comm.workProgress[todayStr]);
  var note=isDaily?comm.notes:comm.workNotes;
  var h=pHdr('交流','高情商表达 · 语言利他 · 每日练习','comm');
  h+='<div class="tab-row" id="commTabs"><button class="tab-btn'+(isDaily?' active':'')+'" data-ct="daily">🌸 日常沟通</button><button class="tab-btn'+(isDaily?'':' active')+'" data-ct="work">💼 职场交流</button></div>';
  h+='<div class="cards">';
  if(isDaily){
    h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">💡 日常核心原则</h3></div><div class="grid-2">';
    var prs=[{t:'先肯定，再表达',d:'用"我理解你的…"开头，让对方感到被看见。'},{t:'说"你"之前先说"我"',d:'表达感受而非指责，减少对立和防御。'},{t:'具体化利他',d:'把"我觉得"换成"这对你有帮助的是…"。'}];
    for(var p=0;p<prs.length;p++){h+='<div class="title-card"><div style="font-weight:700;font-size:13px;color:var(--pink-dark);margin-bottom:4px">'+prs[p].t+'</div><div style="font-size:11px;color:var(--text2);line-height:1.6">'+prs[p].d+'</div></div>';}
    h+='</div></div>';
    h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">🎁 日常利他表达模板</h3></div><div class="grid-2">';
    var tmpls=[{t:'共情式回应',c:'"听起来你有点…（情绪），是因为…（原因）吗？"'},{t:'建设性反馈',c:'"你刚才…（具体行为）做得很好，如果…（小建议）可能会更…"'},{t:'委婉拒绝',c:'"谢谢你想到我，这次我…（原因），下次可以…（替代）。"'},{t:'请求帮助',c:'"我最近在…，需要你帮忙…，大概占用你…时间。"'}];
    for(var t=0;t<tmpls.length;t++){h+='<div class="bubble"><div style="font-weight:700;font-size:13px;color:var(--pink-dark);margin-bottom:4px">'+tmpls[t].t+'</div><div style="font-size:11px;color:var(--text2);line-height:1.6;white-space:pre-line">'+esc(tmpls[t].c)+'</div></div>';}
    h+='</div></div>';
  }else{
    h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">💼 职场核心原则</h3></div><div class="grid-2">';
    var wprs=[{t:'汇报先说结论',d:'上级时间宝贵，先说结果，再补过程和所需支持。'},{t:'对事不对人',d:'讨论问题聚焦行为和事实，避免人身评价。'},{t:'闭环思维',d:'承诺的事项及时反馈进度，做到事事有回音。'}];
    for(var wp=0;wp<wprs.length;wp++){h+='<div class="title-card"><div style="font-weight:700;font-size:13px;color:var(--pink-dark);margin-bottom:4px">'+wprs[wp].t+'</div><div style="font-size:11px;color:var(--text2);line-height:1.6">'+wprs[wp].d+'</div></div>';}
    h+='</div></div>';
    h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">🎁 职场表达模板</h3></div><div class="grid-2">';
    var wtmpls=[{t:'进度同步',c:'"目前…已完成，…进行中，风险是…，我需要…"'},{t:'跨部门求助',c:'"这件事对咱们共同目标…很重要，需要你支持…"'},{t:'拒绝不合理需求',c:'"理解这个需求的紧急性，目前排期已满，建议…"'},{t:'争取资源',c:'"如果增加…，预计可以带来…，这是两个方案…"'}];
    for(var wt=0;wt<wtmpls.length;wt++){h+='<div class="bubble"><div style="font-weight:700;font-size:13px;color:var(--pink-dark);margin-bottom:4px">'+wtmpls[wt].t+'</div><div style="font-size:11px;color:var(--text2);line-height:1.6;white-space:pre-line">'+esc(wtmpls[wt].c)+'</div></div>';}
    h+='</div></div>';
  }
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">📅 今日学习计划（第'+(diff+1)+'天 · '+(isDaily?'日常':'职场')+'）</h3><span class="tag '+(done?'tag-green':'tag-orange')+'">'+(done?'已完成':'待完成')+'</span></div>';
  h+='<div style="background:linear-gradient(135deg,var(--pink-light),#fff);border-radius:var(--radius-sm);padding:14px;margin-bottom:10px;border:2px solid rgba(255,133,162,0.3)"><div style="font-weight:700;color:var(--pink-dark);margin-bottom:4px">Day '+(idx+1)+' · '+esc(plan[idx].t)+'</div><div style="font-size:12px;color:var(--text2);line-height:1.6">'+esc(plan[idx].d)+'</div></div>';
  h+='<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer"><input type="checkbox" class="checkbox toggle-comm" id="commDone"'+(done?' checked':'')+'> 今日练习已完成</label><input id="commNote" class="input" placeholder="今天练习的感悟/场景记录..." value="'+esc(note||'')+'" style="flex:1;min-width:140px"><button class="btn btn-primary" id="saveComm">💾 保存</button></div></div>';
  h+='<div class="card card-wide"><div class="card-header"><h3 class="card-title">🗓️ 14天提升路线</h3></div><div class="grid-2">';
  for(var d=0;d<plan.length;d++){h+='<div class="title-card" style="'+(d===idx?'border-color:var(--pink);background:var(--pink-light)':'')+'"><div style="font-weight:700;font-size:12px;color:var(--pink-dark);margin-bottom:4px">Day '+(d+1)+' · '+esc(plan[d].t)+'</div><div style="font-size:11px;color:var(--text2);line-height:1.5">'+esc(plan[d].d)+'</div></div>';}
  h+='</div></div>';
  h+='</div>';return h;
}

// ════ TAB SWITCH ════
function switchTab(tabId){
  currentTab=tabId;
  var navEls=document.querySelectorAll('.nav-item');
  for(var i=0;i<navEls.length;i++){
    if(navEls[i].dataset.id===tabId)navEls[i].classList.add('active');
    else navEls[i].classList.remove('active');
  }
  var mNavEls=document.querySelectorAll('.mobile-nav-item');
  for(var j=0;j<mNavEls.length;j++){
    if(mNavEls[j].dataset.id===tabId)mNavEls[j].classList.add('active');
    else mNavEls[j].classList.remove('active');
  }
  var main=document.getElementById('main');
  var renderFn={home:renderHome,tasks:renderTasks,reading:renderReading,english:renderEnglish,titles:renderTitles,hits:renderHits,exercise:renderExercise,editing:renderEditing,wallet:renderWallet,review:renderReview,tools:renderTools,comm:renderComm};
  var fn=renderFn[tabId]||renderHome;
  main.innerHTML='<div class="page">'+fn()+'</div>';
  main.scrollTop=0;
  var cb=bindCb[tabId];
  if(cb)cb();
  showSumikko(tabId);
}

function applyBg(){
  var bg=state.tools&&state.tools.currentBg?state.tools.currentBg:'assets/bg.jpg';
  var main=document.getElementById('main');
  if(bg==='none'){main.style.backgroundImage='none';}
  else{main.style.backgroundImage='url("'+bg+'")';}
}

// ════ BIND FUNCTIONS ════
function bindHome(){
  var addBtn=document.getElementById('addAcc');if(!addBtn)return;
  addBtn.onclick=function(){
    var p=document.getElementById('nap').value,n=document.getElementById('nan').value,f=Number(document.getElementById('naf').value)||0;
    if(!n)return;
    var acc={id:uid(),platform:p,name:n,followers:f,active:false,growth:{day:0,week:0,month:0,target:5000}};
    if(!state.accounts)state.accounts=[];
    state.accounts.push(acc);saveState();switchTab('home');
  };
  var dels=document.querySelectorAll('.del-acc');
  for(var i=0;i<dels.length;i++){dels[i].onclick=function(e){e.stopPropagation();
    var id=this.dataset.id;state.accounts=state.accounts.filter(function(a){return a.id!==id;});
    saveState();switchTab('home');
  };};
  var cards=document.querySelectorAll('.account-card[data-id]');
  for(var j=0;j<cards.length;j++){cards[j].onclick=function(){
    var id=this.dataset.id;
    for(var k=0;k<state.accounts.length;k++)state.accounts[k].active=state.accounts[k].id===id;
    saveState();switchTab('home');
  };};
  var gInps=document.querySelectorAll('.growth-inp');
  for(var g=0;g<gInps.length;g++){gInps[g].onchange=function(){
    var id=this.dataset.aid,field=this.dataset.field,v=Number(this.value)||0;
    for(var a=0;a<state.accounts.length;a++){if(state.accounts[a].id===id){if(!state.accounts[a].growth)state.accounts[a].growth={day:0,week:0,month:0,target:5000};state.accounts[a].growth[field]=v;break;}}
    saveState();switchTab('home');
  };}
}

function bindTasks(){
  var addBtn=document.getElementById('addTask');if(!addBtn)return;
  addBtn.onclick=function(){var inp=document.getElementById('nti');var v=inp.value.trim();if(!v)return;state.tasks.push({id:uid(),text:v,completed:false,date:today()});saveState();switchTab('tasks');};
  var inp=document.getElementById('nti');if(inp)inp.onkeydown=function(e){if(e.key==='Enter')addBtn.click();};
  var tog=document.querySelectorAll('.toggle-task');
  for(var i=0;i<tog.length;i++){tog[i].onchange=function(){var id=this.dataset.id;for(var j=0;j<state.tasks.length;j++){if(state.tasks[j].id===id)state.tasks[j].completed=this.checked;}saveState();switchTab('tasks');};}
  var dels=document.querySelectorAll('.del-task');
  for(var d=0;d<dels.length;d++){dels[d].onclick=function(){var id=this.dataset.id;state.tasks=state.tasks.filter(function(t){return t.id!==id;});saveState();switchTab('tasks');};}
  var ptog=document.querySelectorAll('.toggle-pinned');
  for(var p=0;p<ptog.length;p++){ptog[p].onchange=function(){var id=this.dataset.id;var arr=state.pinnedTasks||[];for(var x=0;x<arr.length;x++){if(arr[x].id===id)arr[x].completed=this.checked;}saveState();switchTab('tasks');};}
  bindFlipCalendar();
}

function bindReading(){
  var adds=document.querySelectorAll('.add-r');
  for(var i=0;i<adds.length;i++){adds[i].onclick=function(){
    var col=this.dataset.col;var card=this.closest('.card');
    var t=card.querySelector('.rt[data-col="'+col+'"]').value.trim();
    var a=card.querySelector('.ra[data-col="'+col+'"]').value.trim();
    var tp=Number(card.querySelector('.rtp[data-col="'+col+'"]').value)||0;
    if(!t)return;if(!state.reading[col])state.reading[col]=[];
    state.reading[col].push({id:uid(),title:t,author:a,page:0,totalPage:tp,added:today()});
    saveState();switchTab('reading');
  };};
  var dels=document.querySelectorAll('.del-r');
  for(var d=0;d<dels.length;d++){dels[d].onclick=function(){var id=this.dataset.id,col=this.dataset.col;
    if(state.reading[col])state.reading[col]=state.reading[col].filter(function(b){return b.id!==id;});
    saveState();switchTab('reading');
  };};
  var moves=document.querySelectorAll('.move-r');
  for(var m=0;m<moves.length;m++){moves[m].onchange=function(){var id=this.dataset.id,from=this.dataset.from,to=this.value;
    if(from===to)return;var book=null;
    if(state.reading[from]){for(var i=0;i<state.reading[from].length;i++){if(state.reading[from][i].id===id){book=state.reading[from][i];state.reading[from].splice(i,1);break;}}}
    if(book){if(to==='finished')book.page=book.totalPage||book.page||0;if(!state.reading[to])state.reading[to]=[];state.reading[to].push(book);}
    saveState();switchTab('reading');
  };};
  var ups=document.querySelectorAll('.up-pg');
  for(var u=0;u<ups.length;u++){ups[u].onclick=function(){var id=this.dataset.id;var inp=document.querySelector('.rpg-inp[data-id="'+id+'"]');var pg=Number(inp.value)||0;
    for(var i=0;i<state.reading.reading.length;i++){if(state.reading.reading[i].id===id){state.reading.reading[i].page=pg;break;}}
    saveState();switchTab('reading');
  };};
  var saveRd=document.getElementById('saveRdDuration');
  if(saveRd){saveRd.onclick=function(){var v=Number(document.getElementById('rdDuration').value)||0;state.readingStats=state.readingStats||{};if(v>0)state.readingStats[today()]=v;else delete state.readingStats[today()];saveState();switchTab('reading');};}
}

function bindEnglish(){
  var addW=document.getElementById('addWord');
  if(addW)addW.onclick=function(){var w=document.getElementById('nw').value.trim(),m=document.getElementById('nm').value.trim();if(!w)return;state.english.words.push({id:uid(),word:w,meaning:m,status:'new'});saveState();switchTab('english');};
  var dels=document.querySelectorAll('.dw');
  for(var i=0;i<dels.length;i++){dels[i].onclick=function(){var id=this.dataset.id;state.english.words=state.english.words.filter(function(w){return w.id!==id;});saveState();switchTab('english');};}
  var sels=document.querySelectorAll('.ws');
  for(var s=0;s<sels.length;s++){sels[s].onchange=function(){var id=this.dataset.id,v=this.value;for(var i=0;i<state.english.words.length;i++){if(state.english.words[i].id===id)state.english.words[i].status=v;}saveState();};}
  var means=document.querySelectorAll('[id^="mean-"]');
  for(var mi=0;mi<means.length;mi++){means[mi].onclick=function(){this.style.filter='none';};}
  var addD=document.getElementById('addDia');
  if(addD)addD.onclick=function(){var n=document.getElementById('ndn').value.trim(),e=document.getElementById('nde').value.trim(),c=document.getElementById('ndc').value.trim();if(!n||!e)return;state.english.dialogues.push({id:uid(),title:n,en:e,cn:c});saveState();switchTab('english');};
  var ddels=document.querySelectorAll('.dd');
  for(var di=0;di<ddels.length;di++){ddels[di].onclick=function(){var id=this.dataset.id;state.english.dialogues=state.english.dialogues.filter(function(d){return d.id!==id;});saveState();switchTab('english');};}
  var etabs=document.getElementById('engTabs');
  if(etabs)etabs.onclick=function(e){if(e.target&&e.target.dataset&&e.target.dataset.et){
    var v=e.target.dataset.et;var btns=etabs.querySelectorAll('.tab-btn');for(var i=0;i<btns.length;i++)btns[i].classList.remove('active');e.target.classList.add('active');
    var panels=document.querySelectorAll('[data-ep]');for(var j=0;j<panels.length;j++){if(panels[j].dataset.ep===v)panels[j].style.display='';else panels[j].style.display='none';}
  }};
}

function bindHits(){
  var btns=document.querySelectorAll('[data-ht]');
  for(var i=0;i<btns.length;i++){btns[i].onclick=function(){
    var tag=this.dataset.ht;var allBtns=document.querySelectorAll('[data-ht]');
    for(var j=0;j<allBtns.length;j++)allBtns[j].classList.remove('active');
    this.classList.add('active');
    var items=document.querySelectorAll('#hitList .list-item');
    for(var k=0;k<items.length;k++){if(tag==='all'||items[k].dataset.htag===tag)items[k].style.display='';else items[k].style.display='none';}
  };};
}

function bindEditing(){
  var btns=document.querySelectorAll('[data-edt]');
  for(var i=0;i<btns.length;i++){btns[i].onclick=function(){
    var v=this.dataset.edt;var allBtns=document.querySelectorAll('[data-edt]');
    for(var j=0;j<allBtns.length;j++)allBtns[j].classList.remove('active');
    this.classList.add('active');
    state.editing=state.editing||{};state.editing.activeTab=v;saveState();
    var panels=document.querySelectorAll('[data-epm]');for(var k=0;k<panels.length;k++){if(panels[k].dataset.epm===v)panels[k].style.display='';else panels[k].style.display='none';}
  };};
  var learned=document.getElementById('learnedText');var summary=document.getElementById('summaryText');var saveEd=document.getElementById('saveEdSummary');
  if(saveEd){saveEd.onclick=function(){state.editing=state.editing||{};state.editing.todayLearned=learned?learned.value:'';state.editing.summary=summary?summary.value:'';saveState();switchTab('editing');};}
}

function bindExercise(){
  var togs=document.querySelectorAll('.toggle-ex');
  for(var i=0;i<togs.length;i++){togs[i].onchange=function(){var idx=Number(this.dataset.idx);if(state.exercises[idx])state.exercises[idx].done=this.checked;saveState();switchTab('exercise');};}
  var saveBtn=document.getElementById('saveExLog');
  if(saveBtn){saveBtn.onclick=function(){var arr=[];for(var j=0;j<state.exercises.length;j++)arr.push(!!state.exercises[j].done);var note=document.getElementById('exNote')?document.getElementById('exNote').value:'';state.exerciseLog=state.exerciseLog||{};state.exerciseLog[today()]={done:arr,note:note};saveState();switchTab('exercise');};}
  var saveDur=document.getElementById('saveExDuration');
  if(saveDur){saveDur.onclick=function(){var v=Number(document.getElementById('exDuration').value)||0;state.exerciseStats=state.exerciseStats||{};if(v>0)state.exerciseStats[today()]=v;else delete state.exerciseStats[today()];saveState();switchTab('exercise');};}
}

function bindWallet(){
  var addBtn=document.getElementById('addTxn');
  if(addBtn)addBtn.onclick=function(){
    var type=document.getElementById('wt').value,amount=Number(document.getElementById('wa').value)||0,category=document.getElementById('wc').value,method=document.getElementById('wm').value,note=document.getElementById('wn').value.trim(),date=document.getElementById('wd').value||today();
    if(!amount||!category)return;
    if(!state.wallet)state.wallet={transactions:[]};
    if(!state.wallet.transactions)state.wallet.transactions=[];
    state.wallet.transactions.push({id:uid(),type:type,amount:amount,category:category,method:method,note:note,date:date});
    saveState();switchTab('wallet');
  };
  var dels=document.querySelectorAll('.del-txn');
  for(var i=0;i<dels.length;i++){dels[i].onclick=function(){var id=this.dataset.id;if(state.wallet&&state.wallet.transactions)state.wallet.transactions=state.wallet.transactions.filter(function(t){return t.id!==id;});saveState();switchTab('wallet');};}
}

function bindReview(){
  var addBtn=document.getElementById('addRv');
  if(addBtn)addBtn.onclick=function(){var inp=document.getElementById('rvn');var v=inp.value.trim();if(!v)return;if(!state.review)state.review={pending:[],done:[]};if(!state.review.pending)state.review.pending=[];state.review.pending.push({id:uid(),title:v,date:today()});saveState();switchTab('review');};
  var dels=document.querySelectorAll('.del-rv');
  for(var i=0;i<dels.length;i++){dels[i].onclick=function(){var id=this.dataset.id;if(state.review&&state.review.pending)state.review.pending=state.review.pending.filter(function(p){return p.id!==id;});saveState();switchTab('review');};}
  var dos=document.querySelectorAll('.do-rv');
  for(var d=0;d<dos.length;d++){dos[d].onclick=function(){var id=this.dataset.id;var item=null;if(state.review&&state.review.pending){for(var i=0;i<state.review.pending.length;i++){if(state.review.pending[i].id===id){item=state.review.pending[i];state.review.pending.splice(i,1);break;}}}if(item){if(!state.review.done)state.review.done=[];state.review.done.push({id:item.id,title:item.title,date:item.date,mood:reviewMood,result:'',cause:'',impact:''});saveState();switchTab('review');}};}
  var emoBtns=document.querySelectorAll('.mood-emo');
  for(var e=0;e<emoBtns.length;e++){emoBtns[e].onclick=function(){reviewMood=this.dataset.me;var cells=document.querySelectorAll('[data-md]');var todayCell=null;for(var c=0;c<cells.length;c++){if(cells[c].dataset.md===today()){todayCell=cells[c];break;}}if(todayCell){if(!state.moods)state.moods={};state.moods[today()]=reviewMood;todayCell.textContent=reviewMood;todayCell.classList.add('filled');saveState();}};}
  var mcells=document.querySelectorAll('[data-md]');
  for(var mc=0;mc<mcells.length;mc++){mcells[mc].onclick=function(){var key=this.dataset.md;var cur=state.moods&&state.moods[key]||'';var idx=moodEmojis.indexOf(cur);var next=moodEmojis[(idx+1)%moodEmojis.length];if(!state.moods)state.moods={};state.moods[key]=next;this.textContent=next;if(next!=='·'&&next!=='')this.classList.add('filled');saveState();};}
  var addInsp=document.getElementById('addInsp');
  if(addInsp){addInsp.onclick=function(){var ta=document.getElementById('inspText');var v=ta.value.trim();if(!v)return;if(!state.inspirations)state.inspirations=[];state.inspirations.push({id:uid(),text:v,date:today()});saveState();switchTab('review');};}
  var delInsps=document.querySelectorAll('.del-insp');
  for(var di2=0;di2<delInsps.length;di2++){delInsps[di2].onclick=function(){var id=this.dataset.id;if(state.inspirations)state.inspirations=state.inspirations.filter(function(x){return x.id!==id;});saveState();switchTab('review');};}
  var editBtns=document.querySelectorAll('.rv-edit-btn');
  for(var eb=0;eb<editBtns.length;eb++){editBtns[eb].onclick=function(){var id=this.dataset.id;var ea=document.getElementById('rvEdit-'+id);var va=document.getElementById('rvView-'+id);if(ea){ea.classList.add('active');ea.style.display='flex';ea.style.flexDirection='column';}if(va)va.style.display='none';};}
  var cancelBtns=document.querySelectorAll('.rv-cancel-edit');
  for(var cb=0;cb<cancelBtns.length;cb++){cancelBtns[cb].onclick=function(){var id=this.dataset.id;var ea=document.getElementById('rvEdit-'+id);var va=document.getElementById('rvView-'+id);if(ea){ea.classList.remove('active');ea.style.display='none';}if(va)va.style.display='block';};}
  var saveEdits=document.querySelectorAll('.rv-save-edit');
  for(var se=0;se<saveEdits.length;se++){saveEdits[se].onclick=function(){var id=this.dataset.id;var rEl=document.querySelector('.rv-edit-result[data-id="'+id+'"]');var cEl=document.querySelector('.rv-edit-cause[data-id="'+id+'"]');var iEl=document.querySelector('.rv-edit-impact[data-id="'+id+'"]');if(state.review&&state.review.done){for(var ri=0;ri<state.review.done.length;ri++){if(state.review.done[ri].id===id){state.review.done[ri].result=rEl?rEl.value:'';state.review.done[ri].cause=cEl?cEl.value:'';state.review.done[ri].impact=iEl?iEl.value:'';break;}}}saveState();switchTab('review');};}
  var delDones=document.querySelectorAll('.rv-del-btn');
  for(var dd=0;dd<delDones.length;dd++){delDones[dd].onclick=function(){var id=this.dataset.id;if(state.review&&state.review.done){state.review.done=state.review.done.filter(function(x){return x.id!==id;});saveState();switchTab('review');}};}
  var habitBoxes=document.querySelectorAll('.habit-day-box');
  for(var hb=0;hb<habitBoxes.length;hb++){habitBoxes[hb].onclick=function(){var cat=this.dataset.habit;var dt=this.dataset.date;if(!state.habits)state.habits={};if(!state.habits[cat])state.habits[cat]={};if(state.habits[cat][dt]){delete state.habits[cat][dt];}else{state.habits[cat][dt]=true;}saveState();switchTab('review');};}
}

function bindTools(){
  var uploadBtn=document.getElementById('uploadBg');var bgFile=document.getElementById('bgFile');
  if(uploadBtn&&bgFile){uploadBtn.onclick=function(){bgFile.click();};bgFile.onchange=function(){var f=this.files[0];if(!f)return;var r=new FileReader();r.onload=function(ev){if(!state.tools)state.tools={};if(!state.tools.custom)state.tools.custom=[];state.tools.custom.push(ev.target.result);state.tools.currentBg=ev.target.result;saveState();applyBg();switchTab('tools');};r.readAsDataURL(f);};}
  var bgItems=document.querySelectorAll('.bg-item');
  for(var i=0;i<bgItems.length;i++){bgItems[i].onclick=function(){var bg=this.dataset.bg;if(!state.tools)state.tools={};state.tools.currentBg=bg;saveState();applyBg();switchTab('tools');};}
  var exportBtn=document.getElementById('exportData');
  if(exportBtn)exportBtn.onclick=function(){var data=JSON.stringify(state);var blob=new Blob([data],{type:'application/json'});var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='milidda_'+today()+'.json';a.click();};
  var importBtn=document.getElementById('importData');var importFile=document.getElementById('importFile');
  if(importBtn&&importFile){importBtn.onclick=function(){importFile.click();};importFile.onchange=function(){var f=this.files[0];if(!f)return;var r=new FileReader();r.onload=function(ev){try{var d=JSON.parse(ev.target.result);if(d&&typeof d==='object'){state=d;saveState();updateAvatar();applyBg();switchTab('home');}}catch(e){alert('导入失败：文件格式错误');}};r.readAsText(f);};}
  var resetBtn=document.getElementById('resetData');
  if(resetBtn)resetBtn.onclick=function(){if(confirm('确定要重置所有数据吗？此操作不可撤销！')){state=JSON.parse(JSON.stringify(defaultState));saveState();updateAvatar();applyBg();switchTab('home');}};
  var saveMusic=document.getElementById('saveMusic');
  if(saveMusic){saveMusic.onclick=function(){var id=document.getElementById('musicId')?document.getElementById('musicId').value.trim():'';if(!state.tools)state.tools={};state.tools.musicId=id;saveState();switchTab('tools');};}
  var dollThumbs=document.querySelectorAll('[data-doll]');
  for(var di=0;di<dollThumbs.length;di++){dollThumbs[di].onclick=function(){if(!state.tools)state.tools={};state.tools.doll=this.dataset.doll;saveState();switchTab('tools');};}
  var dollActs=document.querySelectorAll('[data-da]');
  for(var ai=0;ai<dollActs.length;ai++){dollActs[ai].onclick=function(){doDollAction(this.dataset.da);};}
}

function doDollAction(action){
  var char=document.getElementById('dollChar');if(!char)return;
  char.classList.remove('doll-nod','doll-blink','doll-spin','doll-jump','doll-pat');
  void char.offsetWidth;
  char.classList.add('doll-'+action);
  setTimeout(function(){char.classList.remove('doll-'+action);},1000);
}

function bindComm(){
  var tabs=document.querySelectorAll('[data-ct]');
  for(var ti=0;ti<tabs.length;ti++){tabs[ti].onclick=function(){state.comm=state.comm||{progress:{},notes:'',activeTab:'daily',workProgress:{},workNotes:''};state.comm.activeTab=this.dataset.ct;saveState();switchTab('comm');};}
  var saveBtn=document.getElementById('saveComm');
  if(saveBtn){saveBtn.onclick=function(){
    var done=document.getElementById('commDone')?document.getElementById('commDone').checked:false;
    var note=document.getElementById('commNote')?document.getElementById('commNote').value:'';
    state.comm=state.comm||{progress:{},notes:'',activeTab:'daily',workProgress:{},workNotes:''};
    var isDaily=state.comm.activeTab==='daily';
    if(isDaily){state.comm.progress=state.comm.progress||{};state.comm.progress[today()]=done;state.comm.notes=note;}
    else{state.comm.workProgress=state.comm.workProgress||{};state.comm.workProgress[today()]=done;state.comm.workNotes=note;}
    saveState();switchTab('comm');
  };}
}

bindCb={home:bindHome,tasks:bindTasks,reading:bindReading,english:bindEnglish,hits:bindHits,exercise:bindExercise,editing:bindEditing,wallet:bindWallet,review:bindReview,tools:bindTools,comm:bindComm};

// ════ INIT ════
function init(){
  updateAvatar();renderNav();applyBg();handleAvatar();initRila();initWardrobe();switchTab('home');
}
init();
}();
