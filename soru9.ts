abstract class Shape {
  abstract getArea(): number;
  // abstract getArea metodu
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  // constructor (radius: number)

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
  // getArea implementasyonu (Math.PI kullanın)
}

const circle = new Circle(10); // 10 yarıçaplı
console.log(circle.getArea());

// BEKLENEN EKRAN ÇIKTISI:
// 314.1592653589793