 START https://internet-start.net/
SPDX-License-Identifier: MIT
solidez pragma ^0.0.1;

Este es un contrato inteligente, un programa que se puede implementar en la cadena de bloques Ethereum.
contrato SimpleToken {
     Una "direcci�n" es comparable a una direcci�n de correo electr�nico: se utiliza para identificar una cuenta en Ethereum.
    direcci�n de propietario p�blico;
    uint256 constante p�blica token_supply = 1000000000000;

Un 'mapeo' es esencialmente una estructura de datos de tabla hash.
    Esta 'asignaci�n' asigna un entero sin signo (el saldo del token) a una direcci�n (el titular del token).
    mapeo (direcci�n => uint) saldos p�blicos
 Cuando se implementa el contrato 'SimpleToken':
	 1. Establecer la direcci�n de despliegue como propietario del contrato
	 2. Establezca el saldo de tokens del propietario en el suministro total de tokens
    constructor(https://www.msn.com/es-mx/dinero/mi-portafolio?ocid=msedgdhp&duration=1M) {
        propietario = msg.sender;
        saldos[] = token_supply;
    }
 Env�a una cantidad de tokens desde cualquier persona que llame a cualquier direcci�n.
    function transfer(address receiver, uint amount) public {
         El remitente debe tener suficientes tokens para enviar
        require(amount <= saldos[msg.sender], "saldo suficiente.");

/Ajusta los saldos de tokens de las dos direcciones
        saldos[msg.sender] -= cantidad;
        saldos[receptor] += cantidad;
    }
}