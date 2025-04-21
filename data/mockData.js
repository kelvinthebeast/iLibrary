const mockBooks = [
  { title: 'Sách A', author: 'Tác giả A', quantity: 10 },
  { title: 'Sách B', author: 'Tác giả B', quantity: 5 },
  { title: 'Sách C', author: 'Tác giả C', quantity: 8 }
];
const pieData = [
  { name: 'Sách A', value: 10 },
  { name: 'Sách B', value: 20 },
  { name: 'Sách C', value: 30 }
]
const barData = [
  { name: 'Tháng 1', books: 40 },
  { name: 'Tháng 2', books: 60 },
  { name: 'Tháng 3', books: 30 }
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

module.exports = {
  mockBooks: mockBooks,
  pieData: pieData,
  barData: barData,
  COLORS: COLORS
}