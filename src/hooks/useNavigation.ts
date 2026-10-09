import { useCallback, useEffect, useState } from "react"
import { getCurrentRoute } from "../routing/routes"

export function navigateTo(path: string): void {
  window.history.pushState({}, "", path)
  window.dispatchEvent(new PopStateEvent("popstate"))
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export function useNavigation() {
  const [route, setRoute] = useState(getCurrentRoute)

  useEffect(() => {
    const updateRoute = () => setRoute(getCurrentRoute())
    window.addEventListener("popstate", updateRoute)
    return () => window.removeEventListener("popstate", updateRoute)
  }, [])

  const navigate = useCallback((path: string) => navigateTo(path), [])

  return { route, navigate }
}
