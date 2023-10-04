function calcularTarifa() {
    const costoServicion = 102.0;
    let radios = document.getElementsByName('usuario');
    let tipoUsuario;
    for(let i = 0; i < radios.length; i++) {
      if(radios[i].checked) {
        tipoUsuario = radios[i].value;
        break;
      }
    }
    let iva;
    if (tipoUsuario == 'residencial'){
        iva = 0.21
    }else{
        iva = 0.27 
    }
    
    let zona = document.getElementById('zona').value;
    let precioPorKwh;
    switch (zona) {

        case 'centro':
            precioPorKwh = 5.80
            break;
        case 'sur':
            precioPorKwh = 5.40
            break;
        case 'oeste':
            precioPorKwh = 5.35
            break;
        case 'norte':
            precioPorKwh = 5.60
            break;
        default:
            break;
    }

    let cantidadKwh = document.getElementById('cantidad').value;

    let total = costoServicion + (cantidadKwh * precioPorKwh) * (1 + iva)
    total = total.toFixed(2)

    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '$' + total

  }
  