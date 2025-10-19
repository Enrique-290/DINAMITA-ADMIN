document.addEventListener('DOMContentLoaded',()=>{
  if(localStorage.getItem('dinamita_admin_auth')!=='1' && location.pathname.endswith('dashboard.html'))
    location='index.html';
  document.getElementById('logout')?.addEventListener('click', (e)=>{e.preventDefault(); localStorage.removeItem('dinamita_admin_auth'); location='index.html';});
});