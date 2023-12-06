import SearchBar from "@/components/search";

export default function Home() {
  return (
    <main className="grow pt-[200px] px-5">
      <div className="flex flex-col items-center justify-center gap-y-5">
        <h1 
          className="text-2xl sm:text-4xl font-semibold tracking-wider text-center"
        >
          PESQUISAR CIDADE
        </h1>
        <SearchBar 
          classNames="justify-center"
          mobile={false}
        />
      </div>
    </main>
  )
}
