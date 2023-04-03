class Empleado {
  constructor() {
    this.nombre = "";
    this.salario = 0.0;
    this.antiguedad = 0;
    this.habilidades = [];
  }

  calcularBonoAntiguedad() {
    let bono = 0;
    let porcentaje = 0;
    const salarioMinimoNacional = 2250;
    if (this.antiguedad > 0 && this.antiguedad < 2) {
      porcentaje = 0;
    } else if (this.antiguedad >= 2 && this.antiguedad < 5) {
      porcentaje = 0.05;
    } else if (this.antiguedad >= 5 && this.antiguedad < 8) {
      porcentaje = 0.11;
    } else if (this.antiguedad >= 8 && this.antiguedad < 11) {
      porcentaje = 0.18;
    } else if (this.antiguedad >= 11 && this.antiguedad < 15) {
      porcentaje = 0.26;
    } else if (this.antiguedad >= 15 && this.antiguedad < 20) {
      porcentaje = 0.34;
    } else if (this.antiguedad >= 20 && this.antiguedad < 25) {
      porcentaje = 0.42;
    } else if (this.antiguedad >= 25) {
      porcentaje = 0.5;
    }
    bono = salarioMinimoNacional * porcentaje * 3;
    return bono;
  }

  calcularSueldoTotal(){
    return this.salario + this.calcularBonoAntiguedad();
  }
  
  agregarHabilidad(habilidad){
    this.habilidades.push(habilidad);
  }

  buscarHabilidad(habilidad){
    return this.habilidades.includes(habilidad);
  }
}

module.exports = Empleado;