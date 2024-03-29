//Create enum examples with names constant like different types of fruits name and display particular fruit name using the switch case statements(09 Feb).
enum Fruit {
    Apple = 'Apple',
    Banana = 'Banana',
    Orange = 'Orange',
    Mango = 'Mango',
    Grape = 'Grape',
  }

function displayFruitName(selectedFruit: Fruit): string {
  switch (selectedFruit) {
    case Fruit.Apple:
      return 'Selected fruit: Apple';
    case Fruit.Banana:
      return 'Selected fruit: Banana';
    case Fruit.Orange:
      return 'Selected fruit: Orange';
    case Fruit.Mango:
      return 'Selected fruit: Mango';
    case Fruit.Grape:
      return 'Selected fruit: Grape';
    default:
      return 'Invalid fruit selection';
  }
}

// Example usage:
const selectedFruit: Fruit = Fruit.Banana;
const result: string = displayFruitName(selectedFruit);
console.log(result);
