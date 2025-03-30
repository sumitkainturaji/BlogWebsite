import { useEffect, useState, createContext } from 'react'
import axios from 'axios'

export const BlogContext = createContext()

export const BlogProvider = ({ children }) => {
  const [countries, setCountries] = useState([])
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const storedCountries = localStorage.getItem('countries')
    const storedBlogs = localStorage.getItem('blogs')

    if (storedCountries) {
      setCountries(JSON.parse(storedCountries))
    } else {
      axios
        .get('https://restcountries.com/v3.1/all')
        .then((res) => {
          const countriesData = res.data.slice(0, 30).map((country) => ({
            id: country.cca3,
            name: country.name.common,
            capital: country.capital ? country.capital[0] : 'N/A',
            region: country.region,
            flag: country.flags.svg,
            population: country.population,
            likes: 0,
          }))

          setCountries(countriesData)
          localStorage.setItem('countries', JSON.stringify(countriesData))

          const sampleBlogs = countriesData.slice(0, 10).map((country) => ({
            id: country.id,
            title: `Discovering ${country.name}`,
            content: `Experience the beauty of ${country.name}, located in ${country.region}, with its capital city ${country.capital}.`,
            author: 'Travel Explorer',
            likes: Math.floor(Math.random() * 100),
            createdAt: new Date(Date.now() - Math.random() * 10000000000),
          }))

          setBlogs(sampleBlogs)
          localStorage.setItem('blogs', JSON.stringify(sampleBlogs))
        })
        .catch((err) => console.error(err))
    }

    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs))
    }
  }, [])

  const likeBlog = (id) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
    )

    setBlogs(updatedBlogs)
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs))
  }

  return (
    <BlogContext.Provider value={{ countries, blogs, likeBlog }}>
      <div>{children}</div>
    </BlogContext.Provider>
  )
}
