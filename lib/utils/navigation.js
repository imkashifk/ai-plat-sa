import { useRouter } from 'next/navigation'

export function useNavigate() {
  const router = useRouter()

  const navigate = (path, options = {}) => {
    const { replace = false, scroll = true } = options

    try {
      if (replace) {
        router.replace(path, { scroll })
      } else {
        router.push(path, { scroll })
      }
    } catch (error) {
      console.error('Navigation error:', error)
      // Fallback to window.location for hard navigation if needed
      window.location.href = path
    }
  }

  return navigate
}