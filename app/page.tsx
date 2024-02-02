import Image from "next/image"
import Link from "next/link"
export default function Home() {
  return (
    <main className="m-0 p-0 w-full h-full bg-[#FFE7E7] flex flex-col justify-center items-center">
      {/* this div is the main logo, slogan and the undeline */}
      <div className="flex flex-col justify-center items-center pt-5">
        <Image
          src="/allscherry-logo.png"
          alt="Allscherry-logo"
          width={300}
          height={300}
        />
        <h1 className="text-xl text-center font-bold text-black ">Feel the Wonder,<br/>Crave Adventure.</h1>
        {/* using this styled div as an underline */}
        <div className="h-2 w-52 rounded-lg bg-[#8B3D45]"></div>
      </div>
      {/* this div the the link bar each link is in its own div so the underline will be below*/}
      <div className="flex flex-row justify-center items-center pt-10 gap-10">
        <div className="text-center">
          <Link href="#">
            <h1 className="text-xl font-bold text-black hover:text-white">Shop</h1>
            <div className="h-2 w-20 rounded-lg bg-[#8B3D45]"></div>
          </Link>
        </div>
        <div className="text-center">
          <Link href="#">
            <h1 className="text-xl font-bold text-black ">Projects</h1>
            <div className="h-2 w-24 rounded-lg bg-[#8B3D45]"></div>
          </Link>
        </div>
        <div className="text-center">
          <Link href="#">
            <h1 className="text-xl font-bold text-black ">Contact</h1>
            <div className="h-2 w-24 rounded-lg bg-[#8B3D45]"></div>
          </Link>
        </div>
      </div>
      {/* this div is the main text box */}
      <div className="flex flex-col w-96 justify-center items-center mt-10 p-5 bg-[#F16171] rounded-xl border-b-8 border-[#8B3D45]">
        <h1 className="text-2xl font-bold text-white">Welcome to Allscherry</h1> 
        <p className="text-center text-white">We are a small team of designers and developers, who help brands with big ideas.</p>
        <p className="text-center text-white">We work with clients to create digital products and services and bring them to market.</p>
      </div>
      {/* this div is the bubble link row */}
      <div className="flex flex-row gap-6 pt-10 justify-center items-center">
        <Link href="#">
          <Image src="/linktree-footer.png" alt="linktree-bubble" width={60} height={60} />
        </Link>
        <Link href="#">
          <Image src="/mail-footer.png" alt="mail-bubble" width={60} height={60} />
        </Link>
        <Link href="#">
          <Image src="/mailchimp-footer.png" alt="mailchimp-bubble" width={60} height={60} />
        </Link>
      </div>
      {/* this div is for erics photo */}
      <div className="flex flex-col justify-center items-center pt-10">
        <Image
          src="/eric.png"
          alt="Eric"
          width={200}
          height={200}
          className="rounded-full"
        />
        <Image
          src="/eric-bubbles.png"
          alt="Eric-Bubbles"
          width={300}
          height={300}
        />
      </div>
      {/* this div is for the expanded info double text boxes */}
      <div className="flex flex-col w-full justify-center items-center pt-10 bg-[#DCA3A3]">
        <div className="flex flex-col w-96 justify-center text-center items-center p-5 bg-[#F16171] rounded-xl border-b-8 border-[#8B3D45]">
          <h1 className="text-2xl font-bold text-white">Welcome to a world of possibility</h1> 
          <p className="text-white">My name is Eric Olcsvary, a 23 year old artist with a passion to create things, ranging from logos to websites, music and comic books.</p>
          <p className="text-white">But enough about me, let's talk about you, and why you're here!</p>
        </div>
        <div className="flex flex-col w-96 justify-center text-center items-center p-5 bg-[#A85E65] mt-10 rounded-xl border-b-8 border-[#62373B]">
          <h1 className="text-white">Scrolling down you will see a list of my favorite projects I've worked on, ones that I'm sure will make you smile.</h1> 
          <p className="text-white">If you have any questions, or wish to work with me on a collaborative project, shoot me an email!</p>
        </div>
      </div>
    </main>
  )
}
