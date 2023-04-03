const Empleado = require("./empleado");

let empleado = new Empleado();

describe("Propiedades del Empleado:", function () {
  test("El nombre debe ser una cadena vacía", function () {
    expect(empleado.nombre).toBe("");
  });

  test("La antigüedad debe ser 0", function () {
    expect(empleado.antiguedad).toBe(0);
  });

  test("El salario debe ser 0.0", function () {
    expect(empleado.salario).toBe(0.0);
  });

  test("El array de habilidades debe ser vacío", function () {
    expect(empleado.habilidades).toEqual([]);
  });
});

describe("Métodos del Empleado:", function () {
  test("calcularBonoAntiguedad() debe calcular el bono de un empleado", function () {
    empleado.antiguedad = 1;
    expect(empleado.calcularBonoAntiguedad()).toBe(0);
    empleado.antiguedad = 2;
    expect(empleado.calcularBonoAntiguedad()).toBe(337.5);
    empleado.antiguedad = 5;
    expect(empleado.calcularBonoAntiguedad()).toBe(742.5);
    empleado.antiguedad = 8;
    expect(empleado.calcularBonoAntiguedad()).toBe(1215.0);
    empleado.antiguedad = 11;
    expect(empleado.calcularBonoAntiguedad()).toBe(1755.0);
    empleado.antiguedad = 15;
    expect(empleado.calcularBonoAntiguedad()).toBe(2295.0);
    empleado.antiguedad = 20;
    expect(empleado.calcularBonoAntiguedad()).toBe(2835.0);
    empleado.antiguedad = 25;
    expect(empleado.calcularBonoAntiguedad()).toBe(3375.0);
  });
  test("calcularSueldoTotal() debe calcular el sueldo total de un empleado", function () {
    empleado.salario = 500;
    empleado.antiguedad = 0;
    expect(empleado.calcularSueldoTotal()).toBe(500);
    empleado.salario = 1000;
    empleado.antiguedad = 2;
    expect(empleado.calcularSueldoTotal()).toBe(1337.5);
    empleado.salario = 2000;
    empleado.antiguedad = 5;
    expect(empleado.calcularSueldoTotal()).toBe(2742.5);
    empleado.salario = 3000;
    empleado.antiguedad = 8;
    expect(empleado.calcularSueldoTotal()).toBe(4215.0);
    empleado.salario = 4000;
    empleado.antiguedad = 11;
    expect(empleado.calcularSueldoTotal()).toBe(5755.0);
    empleado.salario = 5000;
    empleado.antiguedad = 15;
    expect(empleado.calcularSueldoTotal()).toBe(7295.0);
    empleado.salario = 6000;
    empleado.antiguedad = 20;
    expect(empleado.calcularSueldoTotal()).toBe(8835.0);
    empleado.salario = 7000;
    empleado.antiguedad = 25;
    expect(empleado.calcularSueldoTotal()).toBe(10375.0);
  });

  test("agregarHabilidad() debe agregar una habilidad al array de habilidades", function () {
    empleado.agregarHabilidad("JavaScript");
    expect(empleado.habilidades).toEqual(["JavaScript"]);
    empleado.agregarHabilidad("Python");
    expect(empleado.habilidades).toEqual(["JavaScript", "Python"]);
    empleado.agregarHabilidad("Java");
    expect(empleado.habilidades).toEqual(["JavaScript", "Python", "Java"]);
  });

  test("buscarHabilidad() debe retornar true si el empleado tiene la habilidad o false si no tiene la habilidad", function () {
    empleado.habilidades = ["JavaScript", "Python", "Java"];
    expect(empleado.buscarHabilidad("JavaScript")).toBe(true);
    expect(empleado.buscarHabilidad("Python")).toBe(true);
    expect(empleado.buscarHabilidad("Java")).toBe(true);
    expect(empleado.buscarHabilidad("C#")).toBe(false);
  });
});
