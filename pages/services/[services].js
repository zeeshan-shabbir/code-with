import Head from 'next/head'
import NavBar from '../../components/navbar'
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
      <div className="h1">
        hello world
      </div>
    </div>

  
    </>

  )
}

export default Post

