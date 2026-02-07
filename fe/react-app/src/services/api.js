import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

export const fetchProducts = async (filters = {}) => {
  try {
    const params = new URLSearchParams()
    
    if (filters.search) {
      params.append('search', filters.search)
    }
    if (filters.category) {
      params.append('category', filters.category)
    }
    if (filters.priceRange) {
      params.append('priceRange', filters.priceRange)
    }

    const response = await axiosInstance.get('/products', { params })
    return { data: response.data, error: null }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch products'
    return { data: null, error: errorMessage }
  }
}

export default axiosInstance
