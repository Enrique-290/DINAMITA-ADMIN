
document.addEventListener('DOMContentLoaded',()=>{
  // Simple demo "auth"
  const needAuth = location.pathname.endsWith('dashboard.html') || location.pathname.endsWith('productos.html') || location.pathname.endsWith('imagenes.html') || location.pathname.endsWith('config.html') || location.pathname.endsWith('usuarios.html');
  if(needAuth && localStorage.getItem('dinamita_admin_auth')!=='1'){ location='index.html'; return; }
  document.getElementById('logout')?.addEventListener('click', (e)=>{ e.preventDefault(); localStorage.removeItem('dinamita_admin_auth'); location='index.html'; });

  // Productos demo (render simple)
  const tbody = document.querySelector('#tblProducts tbody');
  if (tbody){
    const DATA = [
      {id:'mutant',name:'Mutant Mass 2.27kg',brand:'Mutant',cat:'suplementos',price:1499,best:true},
      {id:'shaker',name:'Shaker 700ml',brand:'Dinamita',cat:'accesorios',price:199,best:true}
    ];
    const draw = ()=>{
      tbody.innerHTML = DATA.map(p=>`<tr>
        <td>${p.name}</td><td>${p.brand}</td><td>${p.cat}</td>
        <td>$ ${p.price.toLocaleString('es-MX')}</td><td>${p.best?'✓':'—'}</td>
      </tr>`).join('');
    };
    draw();
  }
});
