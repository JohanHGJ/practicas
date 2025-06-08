        let productoEditando = null; // Para almacenar el ID al editar

        // Cargar productos al iniciar
        window.onload = getProductos;

        // ======== FUNCIONES PARA MOSTRAR PRODUCTOS ========
        async function getProductos() {
            try {
                const response = await fetch('http://localhost:3000/productos');
                const productos = await response.json();
                mostrarProductos(productos);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        function mostrarProductos(productos) {
            const container = document.getElementById('productos-container');
            container.innerHTML = '';
            
            productos.forEach(producto => {
                const div = document.createElement('div');
                div.className = 'producto';
                div.innerHTML = `
                    <h3>${producto.nombre}</h3>
                    <p>Categoría: ${producto.categoria}</p>
                    <button onclick="abrirModalEditar(${producto.id}, '${producto.nombre}', '${producto.categoria}')">Editar</button>
                    <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
                `;
                container.appendChild(div);
            });
        }

        // ======== FUNCIONES PARA FILTRAR ========
        async function filtrarProductos() {
            const busqueda = document.getElementById('busqueda').value.toLowerCase();
            const response = await fetch('http://localhost:3000/productos');
            const productos = await response.json();
            
            const productosFiltrados = productos.filter(producto => 
                producto.nombre.toLowerCase().includes(busqueda)
            );
            
            mostrarProductos(productosFiltrados);
        }

        // ======== FUNCIONES PARA MODAL (CREAR/EDITAR) ========
        function abrirModalCrear() {
            productoEditando = null;
            document.getElementById('modal-titulo').textContent = 'Nuevo Producto';
            document.getElementById('producto-nombre').value = '';
            document.getElementById('producto-categoria').value = '';
            document.getElementById('modal').style.display = 'flex';
        }

        function abrirModalEditar(id, nombre, categoria) {
            productoEditando = id;
            document.getElementById('modal-titulo').textContent = 'Editar Producto';
            document.getElementById('producto-nombre').value = nombre;
            document.getElementById('producto-categoria').value = categoria;
            document.getElementById('modal').style.display = 'flex';
        }

        function cerrarModal() {
            document.getElementById('modal').style.display = 'none';
        }

        async function guardarProducto() {
            const nombre = document.getElementById('producto-nombre').value;
            const categoria = document.getElementById('producto-categoria').value;

            if (!nombre || !categoria) {
                alert('Nombre y categoría son obligatorios');
                return;
            }

            const url = productoEditando 
                ? `http://localhost:3000/productos/${productoEditando}` 
                : 'http://localhost:3000/productos';

            const method = productoEditando ? 'PUT' : 'POST';

            try {
                const response = await fetch(url, {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nombre, categoria })
                });
                cerrarModal();
                getProductos(); // Recargar lista
            } catch (error) {
                console.error('Error:', error);
            }
        }

        // ======== ELIMINAR PRODUCTO ========
        async function eliminarProducto(id) {
            if (!confirm('¿Eliminar este producto?')) return;
            
            try {
                await fetch(`http://localhost:3000/productos/${id}`, {
                    method: 'DELETE'
                });
                getProductos(); // Recargar lista
            } catch (error) {
                console.error('Error:', error);
            }
        }