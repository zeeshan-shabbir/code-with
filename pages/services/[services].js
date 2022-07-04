import Head from 'next/head'
import NavBar from '../../components/NavBar'
import Link from 'next/link'
import Image from 'next/image'

const Post = () => {
  let profile = {
    title: 'Zeeshan Shabbir',
    name: "Zeeshan Shabbir",
    fbLink: "www.facebook.com",
    instagramLink: "www.facebook.com",
    twitterLink: "www.facebook.com",

  }
  return (
    <>

    <Head>
      <title>{'blog.title'}</title>
    </Head>
    <NavBar profile={profile} />

    <div>
      <h1 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's what I have done with the past
        </h1>
    </div>

  
    </>

  )
}

export default Post

