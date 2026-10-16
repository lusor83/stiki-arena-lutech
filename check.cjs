const fs=require('fs'),vm=require('vm'),assert=require('assert');
const elements={},handlers={},context=new Proxy({createLinearGradient:()=>({addColorStop(){}}),createRadialGradient:()=>({addColorStop(){}})},{get:(t,p)=>p in t?t[p]:()=>{}});
const el=id=>elements[id]??=( {style:{},classList:{add(){},remove(){}},value:id==='mode'?'duo':'',textContent:'',innerHTML:'',setAttribute(){},getContext:()=>context});
let frame;
const sandbox={Math,console,document:{getElementById:el,addEventListener:(n,fn)=>handlers[n]=fn,querySelectorAll:()=>[]},window:{addEventListener(){}},requestAnimationFrame:fn=>frame=fn};
vm.createContext(sandbox);vm.runInContext(fs.readFileSync('dist/game.js','utf8'),sandbox);
let ts=0;const advance=n=>{for(let i=0;i<n;i++)frame(ts+=16.667)};
const down=k=>handlers.keydown({key:k,target:{tagName:'BODY'},preventDefault(){}}),up=k=>handlers.keyup({key:k});
assert.equal(el('hp1').style.width,'100%');el('play').onclick();advance(150);assert.ok(+el('timer').textContent<60);
down('d');advance(115);up('d');down('j');advance(20);up('j');assert.ok(parseFloat(el('hp2').style.width)<100,'punch deals damage');
const before=parseFloat(el('hp2').style.width);down('arrowdown');advance(2);down('k');advance(30);up('k');up('arrowdown');assert.ok(before-parseFloat(el('hp2').style.width)<13,'block reduces damage');
el('pause').onclick();const timer=el('timer').textContent;advance(100);assert.equal(el('timer').textContent,timer,'pause freezes timer');el('play').onclick();
el('restart').onclick();assert.equal(el('hp2').style.width,'100%');down('l');advance(100);up('l');assert.ok(parseFloat(el('hp2').style.width)<100,'projectile deals damage');
advance(3900);down('l');advance(100);up('l');advance(3900);assert.ok(el('overTitle').innerHTML.includes('TRIONFA'),'match completes');
el('mode').value='cpu';el('mode').onchange();el('play').onclick();advance(2000);assert.ok(parseFloat(el('hp1').style.width)<100,'CPU attacks');
console.log('PASS: rendering loop, timer, punch, block, pause, restart, special, full match, CPU.');



