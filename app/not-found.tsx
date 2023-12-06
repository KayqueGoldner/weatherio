import Link from "next/link";
 
export default function NotFound() {
  return (
    <div className="grow pt-28 text-center flex flex-col justify-start items-center w-full">
      <h1 
        className="text-5xl md:text-7xl"
      >
        Oops!
      </h1>
      <h3 className="leading-10">
        ALGO DEU ERRADO.
      </h3>
      <Link 
        href="/"
        className="btn-border px-6 py-3 rounded-md mt-2 text-sm"
      >
        Voltar para página inicial
      </Link>
    </div>
  )
}