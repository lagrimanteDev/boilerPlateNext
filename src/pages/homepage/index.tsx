import Link from "next/link"


export default function HomePage(){

    return(
        <>
        <div className="flex w-full min-h-screen justify-center items-center font-serif font-bold italic text-2xl bg-emerald-400/50">
            <div>
             <Link href="/sobre"><button className="hover: cursor-pointer px-2 py-2 mx-2 border rounded-md">SOBRE</button></Link> 
             <Link href=""><button disabled className="hover: cursor-pointer px-2 py-2 mx-2 border rounded-md">FORM</button></Link>   
            </div>
        </div>
        </>
    )


}