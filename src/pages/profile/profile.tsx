import Image from "next/image"


const Profile = () =>{
    const name = `Aryan Bramhane`
    const tagline = ` is a self taught programer from India` 
    return(
        <main className="flex justify-center items-center flex-col mt-14 ">
            <Image 
                src = {"/me.jpeg"}
                width={144} 
                height={144}
                alt={`Image of the user`}
                className="rounded-full"
            />
            <h1 className="text-4xl">{name}</h1>
            <h3 className="text-xl text-slate-600">{tagline}</h3>
        </main>
    )
}

export default Profile