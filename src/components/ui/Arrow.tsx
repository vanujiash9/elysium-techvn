export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 20 20" fill="none">
      {diagonal ? (
        <path d="M5 15 15 5m-7 0h7v7" />
      ) : (
        <path d="M3 10h14m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}
