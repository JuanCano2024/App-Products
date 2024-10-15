// List of products
const nombresProductos = [
    "GNutFue110gPC", "GNEnch110g", "GNutSal110g", "Kiyakis120g", "GNutsFue78gPC",
    "GNutsEnch78gCF", "GnutsSal78gCF", "Kiyak60g", "HNFuego125gNvo", "HNMulti125gNvo"
  ];
  
  const productos = nombresProductos.map((nombre, index) => ({
    id: index + 1,
    nombre: nombre,
    precioUnitario: (Math.random() * 20 + 5).toFixed(2),
    piezas: 0
  }));
  
  function renderProductos() {
    const tbody = document.getElementById("product-list");
    tbody.innerHTML = '';
    
    productos.forEach(producto => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${producto.nombre}</td>
        <td><input type="number" class="input" value="${producto.piezas}" onchange="actualizarPiezas(${producto.id}, this.value)"></td>
        <td>$${producto.precioUnitario}</td>
        <td id="total-${producto.id}">$0.00</td>
      `;
      tbody.appendChild(tr);
    });
  
    actualizarTotales();
  }
  
  function actualizarPiezas(id, piezas) {
    const producto = productos.find(p => p.id === id);
    producto.piezas = parseInt(piezas) || 0;
    document.getElementById(`total-${id}`).innerText = `$${(producto.piezas * producto.precioUnitario).toFixed(2)}`;
    actualizarTotales();
  }
  
  function actualizarTotales() {
    const totalPiezas = productos.reduce((total, producto) => total + producto.piezas, 0);
    const totalGeneral = productos.reduce((total, producto) => total + (producto.piezas * producto.precioUnitario), 0);
    
    document.getElementById("total-piezas").innerText = totalPiezas;
    document.getElementById("total-general").innerText = `$${totalGeneral.toFixed(2)}`;
  }
  
  // Initial render
  renderProductos();
  