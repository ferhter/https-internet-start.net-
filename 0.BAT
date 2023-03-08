 START https://internet-start.net/
SPDX-License-Identifier: MIT
solidez pragma ^0.0.1;

Este es un contrato inteligente, un programa que se puede implementar en la cadena de bloques Ethereum.
contrato SimpleToken {
     Una "dirección" es comparable a una dirección de correo electrónico: se utiliza para identificar una cuenta en Ethereum.
    dirección de propietario público;
    uint256 constante pública token_supply = 1000000000000;

Un 'mapeo' es esencialmente una estructura de datos de tabla hash.
    Esta 'asignación' asigna un entero sin signo (el saldo del token) a una dirección (el titular del token).
    mapeo (dirección => uint) saldos públicos
 Cuando se implementa el contrato 'SimpleToken':
	 1. Establecer la dirección de despliegue como propietario del contrato
	 2. Establezca el saldo de tokens del propietario en el suministro total de tokens
    constructor(https://www.msn.com/es-mx/dinero/mi-portafolio?ocid=msedgdhp&duration=1M) {
        propietario = msg.sender;
        saldos[] = token_supply;
    }
 Envía una cantidad de tokens desde cualquier persona que llame a cualquier dirección.
    function transfer(address receiver, uint amount) public {
         El remitente debe tener suficientes tokens para enviar
        require(amount <= saldos[msg.sender], "saldo suficiente.");

/Ajusta los saldos de tokens de las dos direcciones
        saldos[msg.sender] -= cantidad;
        saldos[receptor] += cantidad;
    }
}