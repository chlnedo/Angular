// Define the Product interface
interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  // Generic Array Wrapper
  class ArrayWrapper<T> {
    private items: T[];
  
    constructor() {
      this.items = [];
    }
  
    // Add a new item to the array
    addItem(item: T): void {
      this.items.push(item);
    }
  
    // Get all items in the array
    getAllItems(): T[] {
      return this.items;
    }
  
    // Get an item by index
    getItem(index: number): T | undefined {
      return this.items[index];
    }
  }
  
  // Example usage:
  const productArrayWrapper = new ArrayWrapper<Product>();
  
  // Adding products to the array
  productArrayWrapper.addItem({ id: 1, name: 'Product A', price: 10.99 });
  productArrayWrapper.addItem({ id: 2, name: 'Product B', price: 19.99 });
  productArrayWrapper.addItem({ id: 3, name: 'Product C', price: 5.99 });
  
  // Retrieving all products
  const allProducts = productArrayWrapper.getAllItems();
  console.log('All Products:', allProducts);
  
  // Retrieving a specific product by index
  const productAtIndex1 = productArrayWrapper.getItem(1);
  console.log('Product at Index 1:', productAtIndex1);
  