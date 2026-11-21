var bg=document.getElementById('bg'),nv=document.getElementById('nv');
function t(o){nv.classList.toggle('open',o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Close menu':'Open menu')}
bg.onclick=function(){t(!nv.classList.contains('open'))};
nv.addEventListener('click',function(e){if(e.target.closest('a'))t(false)});
var vs=document.querySelectorAll('video');
document.querySelectorAll('[data-sound]').forEach(function(w){var v=w.querySelector('video'),c=w.querySelector('.cap');
 w.addEventListener('click',function(){v.muted=!v.muted;c.textContent=v.muted?'Tap for sound':'Sound on'})});
if(matchMedia('(prefers-reduced-motion:reduce)').matches)vs.forEach(function(v){v.removeAttribute('autoplay');v.pause();v.controls=true});
var wall=document.getElementById('rl');
function stars(n){return '★'.repeat(n)+'☆'.repeat(5-n)}
function tally(){var c=wall.querySelectorAll('.rv'),s=0;c.forEach(function(x){s+=+x.dataset.r;x.querySelector('.st').textContent=stars(+x.dataset.r)});
 document.getElementById('avg').textContent=(s/c.length).toFixed(1);document.getElementById('sum').textContent='out of 5 from '+c.length+' guest reviews'}
tally();
document.getElementById('rf').onsubmit=function(e){e.preventDefault();
 var f=document.createElement('figure');f.className='rv';f.dataset.r=document.querySelector('input[name=rate]:checked').value;
 var s=document.createElement('div');s.className='st';var q=document.createElement('blockquote');q.textContent=rt.value.trim();
 var c=document.createElement('figcaption');c.textContent=rn.value.trim();f.append(s,q,c);wall.prepend(f);tally();this.reset();
 document.getElementById('msg').textContent='Thanks, your review is up.'};
