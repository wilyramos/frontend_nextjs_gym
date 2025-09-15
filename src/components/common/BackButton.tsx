



export default function BackButton() {
  return (
    <button className="cursor-pointer" onClick={() => window.history.back()}>
      &larr; Volver
    </button>
  )
}
