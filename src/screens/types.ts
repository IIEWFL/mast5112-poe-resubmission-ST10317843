export interface MenuItem {
    id: number;
    name: string;
    description: string;
    course: 'Starter' | 'Main' | 'Dessert';
    price: number;
  }
  