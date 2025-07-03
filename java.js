function calcular() {
      const bin1 = document.getElementById("bin1").value.trim();
      const bin2 = document.getElementById("bin2").value.trim();
      const op = document.getElementById("operador").value;

      // Validar binarios
      if (!/^[01]+$/.test(bin1) || !/^[01]+$/.test(bin2)) {
        document.getElementById("resultado").innerText = "❌ Solo se permiten números binarios (0 y 1)";
        return;
      }

      const num1 = parseInt(bin1, 2);
      const num2 = parseInt(bin2, 2);
      let result;

      switch (op) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          if (num2 === 0) {
            document.getElementById("resultado").innerText = "❌ División entre cero no permitida";
            return;
          }
          result = Math.floor(num1 / num2); // División entera
          break;
        default:
          result = 0;
      }

      // Mostrar resultado en binario
      document.getElementById("resultado").innerText = `Resultado: ${result.toString(2)}`;
    }
