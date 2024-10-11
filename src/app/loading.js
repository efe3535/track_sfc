const Loading = ({ customText }) => {
  return (
    <main className="flex h-screen items-center bg-background font-bold text-7xl text-center">
      <h1 className="self-center text-red-200 m-auto">{customText ?? "Yükleniyor"}</h1>
    </main>
  )
}

export default Loading;