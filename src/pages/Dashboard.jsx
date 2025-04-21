import { Box } from '@mui/material'
import BookList from '../components/BookList'
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
// const { mockBooks, pieData, barData, COLORS } = require('../../data/mockData')

const mockBooks = [
  { title: 'OS system', author: 'Dat', quantity: 10 },
  { title: 'DSA', author: 'Nhan', quantity: 5 },
  { title: 'OOP', author: 'Luan', quantity: 8 }
]
const pieData = [
  { name: 'OS system', value: 10 },
  { name: 'DSA', value: 20 },
  { name: 'OOP', value: 30 }
]
const barData = [
  { name: 'Os system', books: 40 },
  { name: 'DSA', books: 60 },
  { name: 'OOP', books: 30 }
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
export default function Dashboard() {
  return (
    <Box
      sx={{
        marginLeft: '240px',
        mt: 8,
        p: 2,
        backgroundColor: '#f0f0f0',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ flex: '0 0 auto', maxHeight: 200, overflowY: 'auto', mb: 2 }}>
        <BookList books={mockBooks} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flex: 1,
          justifyContent: 'space-between',
          marginTop: '8px'
        }}
      >
        <Box sx={{ flex: 1, backgroundColor: 'lightblue', p: 2, alignItems: 'center', justifyContent: 'center' }}>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>
        <Box sx={{ flex: 1, backgroundColor: 'lightgreen', p: 2, alignItems: 'center', justifyContent: 'center' }}>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="books" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  )
}
