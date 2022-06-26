import Head from 'next/head'
import NavBar from '../../components/navbar'
import Link from 'next/link'

const Post = () => {
  let profile = {
    title: 'Zeeshan Shabbir',
    name: "Zeeshan Shabbir",
    fbLink: "www.facebook.com",
    instagramLink: "www.facebook.com",
    twitterLink: "www.facebook.com",

  }
  return <><>
<Head>
<title>{'blog.title'}</title>
</Head>
    <NavBar profile={profile}  />

    <div>
      <div className="container py-6 md:py-10">
        <div className="mx-auto max-w-4xl">
         
          <div className="mt-10 flex justify-between border-t border-lila py-12">
            <Link href="/" className="flex items-center">
              <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
              <span
                className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">Previous
                Post</span>
            </Link>
            <Link href="/" className="flex items-center">
              <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">Next
                Post</span>
              <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
            </Link>
          </div>
          <div
            className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
            <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
              <img src="/assets/img/blog-author.jpg" className="rounded-full shadow" alt="author image" />
            </div>
            <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
              <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                Christy Smith
              </h3>
              <p
                className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit.

              </p>
              <div className="flex items-center justify-center pt-5 md:justify-start">
                <Link href="/">
                  <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright 2022. All right reserved, ATOM.
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <Link href="/">
            <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
          </Link>
          <Link href="/" className="pl-4">
            <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
          </Link>
          <Link href="/" className="pl-4">
            <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
          </Link>
          <Link href="/" className="pl-4">
            <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
          </Link>
          <Link href="/" className="pl-4">
            <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
          </Link>
        </div>
      </div>
    </div>

  </> </>
}

export default Post

