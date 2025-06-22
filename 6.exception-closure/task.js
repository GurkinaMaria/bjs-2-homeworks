function parseCount(value) {
  const parsedValue = Number.parseFloat(value); // Преобразуем строку в число
  if (isNaN(parsedValue)) { // Проверяем, является ли результат NaN
    throw new Error("Невалидное значение"); // Генерируем ошибку
  }
  return parsedValue; // Возвращаем распарсенное значение
}
function validateCount(value) {
  try {
    return parseCount(value); // Пытаемся распарсить значение
  } catch (error) {
    return error; // Возвращаем ошибку в случае перехвата исключения
  }
}



class Triangle {
  constructor(a, b, c) {
    // Проверка существования треугольника
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a; // Сторона a
    this.b = b; // Сторона b
    this.c = c; // Сторона c
  }
  get perimeter() {
    return this.a + this.b + this.c; // Вычисление периметра
  }
  get area() {
    const s = this.perimeter / 2; // Полупериметр
    // Вычисление площади по формуле Герона
    return parseFloat(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(3));
  }
}
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c); // Пытаемся создать новый объект треугольника
  } catch (error) {
    return {
      area: () => "Ошибка! Треугольник не существует", // Возвращаем объект с сообщением об ошибке
      perimeter: () => "Ошибка! Треугольник не существует"
    }
}
}
