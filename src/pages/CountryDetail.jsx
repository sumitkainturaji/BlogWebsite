import { useContext } from 'react'
import { BlogContext } from '../context/BlogContext'
import { useParams, useNavigate } from 'react-router-dom'

const CountryDetail = () => {
  const { countries } = useContext(BlogContext)
  const { name } = useParams()
  const navigate = useNavigate()

  const country = countries.find((c) => c.name === name)

  if (!country) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Country Not Found
          </h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-yellow-400 text-gray-800 rounded-lg hover:bg-yellow-500 transition duration-200 font-medium"
          >
            Return Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-200 font-medium flex items-center"
      >
        <span className="mr-2">←</span> Back
      </button>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-100">
            <img
              src={country.flag}
              alt={`Flag of ${country.name}`}
              className="max-h-64 object-contain"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              {country.name}
            </h1>
            <div className="space-y-3 text-gray-700">
              <div className="border-b border-gray-100 pb-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Capital
                </h3>
                <p className="text-lg">{country.capital}</p>
              </div>
              <div className="border-b border-gray-100 pb-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Region
                </h3>
                <p className="text-lg">{country.region}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Population
                </h3>
                <p className="text-lg">{country.population.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetail
