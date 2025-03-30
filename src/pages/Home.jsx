import { useContext, useState } from 'react'
import { BlogContext } from '../context/BlogContext'
import { useNavigate } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'

const Home = ({ searchTerm }) => {
  const { countries } = useContext(BlogContext)
  const navigate = useNavigate()
  const [comments, setComments] = useState(() => {
    return JSON.parse(localStorage.getItem('comments')) || {}
  })
  const [likes, setLikes] = useState(() => {
    return JSON.parse(localStorage.getItem('likes')) || {}
  })

  const handleComment = (id, comment) => {
    const updatedComments = {
      ...comments,
      [id]: [...(comments[id] || []), comment],
    }
    setComments(updatedComments)
    localStorage.setItem('comments', JSON.stringify(updatedComments))
  }

  const handleLike = (id) => {
    const updatedLikes = {
      ...likes,
      [id]: (likes[id] || 0) + 1,
    }
    setLikes(updatedLikes)
    localStorage.setItem('likes', JSON.stringify(updatedLikes))
  }

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (!countries.length) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] border-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Loading countries...
          </h2>
          <div className="mt-4 w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Check The BLog Of Different Countries
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <div
              key={country.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div
                className="h-48 overflow-hidden"
                onClick={() => navigate(`/country/${country.name}`)}
              >
                <img
                  src={country.flag}
                  alt={`Flag of ${country.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold mb-2 text-gray-800">
                  {country.name}
                </h2>
                <div className="space-y-1 text-gray-600">
                  <p className="flex items-center">
                    <span className="font-medium mr-2">Capital:</span>
                    {country.capital}
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2">Region:</span>
                    {country.region}
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2">Population:</span>
                    {country.population.toLocaleString()}
                  </p>
                </div>

                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full p-2 border rounded"
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.target.value.trim()) {
                        handleComment(country.id, e.target.value.trim())
                        e.target.value = ''
                      }
                    }}
                  />
                  <div className="mt-2">
                    {comments[country.id]?.map((comment, index) => (
                      <p key={index} className="text-gray-700 text-sm">
                        {comment}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleLike(country.id)
                    }}
                    className="flex items-center text-red-500"
                  >
                    <FaHeart className="mr-1" /> {likes[country.id] || 0}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-gray-500">
              No countries found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
