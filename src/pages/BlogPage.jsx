import { useContext } from 'react'
import { BlogContext } from '../context/BlogContext'
import { useParams } from 'react-router-dom'

const BlogPage = () => {
  const { blogs, likeBlog } = useContext(BlogContext)
  const { id } = useParams()
  const blog = blogs.find((b) => b.id.toString() === id)

  if (!blog) return <h2 className="text-center mt-10">Blog Not Found</h2>

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-3">{blog.title}</h1>
      <p className="text-gray-700">{blog.content}</p>
      <button
        onClick={() => likeBlog(blog.id)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {blog.likes}
      </button>
    </div>
  )
}

export default BlogPage
