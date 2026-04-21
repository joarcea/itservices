$(document).ready(function() {
    $.getJSON('js/datos.json', function(data) {
        let content = '';
        
        // Cargar Servicios y Paquetes
        data.servicios.forEach(s => {
            content += `
                <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100 shadow-sm border-0 transition-card">
                        <img src="${s.img}" class="card-img-top" alt="${s.nombre}">
                        <div class="card-body">
                            <h5 class="fw-bold text-success">${s.nombre}</h5>
                            <p class="text-muted small">${s.desc}</p>
                            <a href="https://wa.me/50670186990" class="btn btn-sm btn-outline-success">Cotizar</a>
                        </div>
                    </div>
                </div>`;
        });

        // Cargar Partes Contra Pedido
        data.partes.forEach(p => {
            content += `
                <div class="col-12 col-md-6 mb-4">
                    <div class="card h-100 shadow-sm border-success border-1">
                        <div class="row g-0">
                            <div class="col-4">
                                <img src="${p.img}" class="img-fluid rounded-start h-100" style="object-fit: cover;">
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h6 class="fw-bold">${p.nombre}</h6>
                                    <p class="card-text small text-muted">${p.desc}</p>
                                    <span class="badge bg-warning text-dark">Contra Pedido</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        });

        $('#servicios-json').html(content);
    });
});