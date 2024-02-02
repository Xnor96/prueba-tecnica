const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  //binario a decimal
  function convertirBinarioADecimal(numeroBinario) {
    const digitosBinarios = numeroBinario.split('');
  
    digitosBinarios.reverse();
  
    const potenciasDeDos = digitosBinarios.map((digito, indice) => Math.pow(2, indice));
  
    const productos = potenciasDeDos.map((potencia, indice) => potencia * digitosBinarios[indice]);
  
    // Sumar todos los productos para obtener el resultado decimal
    const resultadoDecimal = productos.reduce((suma, producto) => suma + producto, 0);
  
    return resultadoDecimal;
  }
  readline.question('', (numeroBinario) => {
    // convertir
    const resultadoDecimal = convertirBinarioADecimal(numeroBinario);
    console.log(`${numeroBinario} = ${resultadoDecimal} `);
  
    readline.close();
  });