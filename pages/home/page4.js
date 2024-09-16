import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'
import latestData from '../../public/movieszip.json'
import moviesData from '../../public/moviesp3.json'
import { useMediaQuery } from 'react-responsive';
import GoogleTranslate from '../../components/GoogleTranslate'
import SocialSharing from '../../components/SocialSharing'
import SearchComponent from '../../components/SearchComponent'
import styles from '@styles/navigation.module.css';
import Head from 'next/head'
import Script from 'next/script'

const uwatchfreeSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FMovies  - Explore. Discover. Download.',
    url: 'https://fmoviesz.vercel.app/',
    image: ['https://fmoviesz.vercel.app/favicon.ico'],
    logo: {
      '@type': 'ImageObject',
      url: 'https://fmoviesz.vercel.app/logo.png',
      width: 280,
      height: 80
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://fmoviesz.vercel.app/',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://fmoviesz.vercel.app/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }
])

const softwareSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://fmoviesz.vercel.app/home/page4',
  headline: 'Watch Movies Page 4 | FMovies™',
  url: 'https://fmoviesz.vercel.app/home/page4',
  description:
    'Stream HD movies and TV series for free on FMovies™. Online. Stream. Download. full-length movies and shows in HD quality without registration.',
  image: 'https://fmoviesz.vercel.app/og_image.jpg',
  author: {
    '@type': 'Person',
    name: 'DrTrailer',
    url: 'https://gravatar.com/drtrailer2022'
  },
  publisher: {
    '@type': 'Organization',
    name: 'FMovies  - Explore. Discover. Download.',
    logo: {
      '@type': 'ImageObject',
      url: 'https://fmoviesz.vercel.app/og_image.jpg'
    }
  },
  datePublished: '2024-06-02',
  dateModified: '2024-06-02',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://fmoviesz.vercel.app/home/pge4'
  },
  additionalProperty: {
    '@type': 'PropertyValue',
    name: 'Action Platform',
    value: ['Desktop Web Platform', 'iOS Platform', 'Android Platform']
  }
})
const breadcrumbSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Movies',
      item: 'https://fmoviesz.vercel.app/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Watch Movies Page 4',
      item: 'https://fmoviesz.vercel.app/home/page4'
    }
  ]
})

const Page4 = ({ items }) => {
  const [latest, setLatest] = useState(latestData)

  // const [currentPage, setCurrentPage] = useState(1)
  // const totalPages = 0 // Assume there are 3 pages

  // useEffect(() => {
  //   // Logic to fetch browsers for the current page
  // }, [currentPage])
  const router = useRouter();
  const currentPage = parseInt(router.pathname.replace('/home/page', '')) || 1;
  const totalPages = 20; // Adjust this based on the total number of pages

  const previousPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;

  // State to track when the component has mounted
  const [mounted, setMounted] = useState(false);

  // Media query definitions
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  // Ensure this runs after the component has mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until component has mounted
  if (!mounted) {
    return null;
  }



  return (
    <div className='w-full' style={{ backgroundColor: '#D3D3D3' }}>
      <Head>
        <title> Watch Movies Page 4 | FMovies™</title>
        <link rel='canonical' href='https://fmoviesz.vercel.app/home/page4' />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content=' Watch Movies Page 4 | FMovies™' />
        <meta
          property='og:description'
           content='Stream HD movies and TV series for free on FMovies™. Online. Stream. Download. full-length movies and shows in HD quality without registration.'
        />

        <meta property='og:url' content='https://fmoviesz.vercel.app/home/page4' />

        <meta property='og:site_name' content='FMovies ' />
        <meta property='og:type' content='article' />
      
        <meta name='mobile-web-app-capable' content='yes' />
        <meta property='article:section' content='Movies' />
        <meta name='author' content='admin' />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
        <meta
          name='keywords'
          content='fmovies, fmovieswatch, fmovies free, fmovies apk, fmovies hd, fmovies id, fmovies rs, fmovies movies, official fmovies, fmovies free, free movies, movies online, watch movies online, watch movies free, 123movies'
        />
        <meta
          property='og:image'
           content='https://fmoviesz.vercel.app/og_image.jpg'
        />
        <meta property='og:image:width' content='1280px' />
        <meta property='og:image:height' content='720px' />
        <meta property='og:image:type' content='image/webp' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:label1' content='Est. reading time' />
        <meta name='twitter:data1' content='1 minute' />
        <meta
          name='google-site-verification'
          content='WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg'
        />
        <meta
          name='facebook-domain-verification'
          content='du918bycikmo1jw78wcl9ih6ziphd7'
        />
        <meta
          name='dailymotion-domain-verification'
          content='dmv6sg06w9r5eji88'
        />

        {/* <script src='https://www.youtube.com/iframe_api' /> */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: softwareSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
          integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
        {/* Webpushr tracking code */}
      </Head>
      <Script src='../../propler/ads.js' defer />
      <Script src='../../propler/ads2.js' defer />
    

      <h1
        className='badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6  shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          fontSize: '35px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '15px'
        }}
      >
        FMovies  Movies Section.
      </h1>
      <div className="flex justify-center items-center my-4 gap-4">
      <GoogleTranslate />
      </div>
      <span className='px-0 bg-clip-text text-sm text-black font-bold mt-2 '>
        <SearchComponent />
      </span>
      <SocialSharing />
      <div className='shadow-lg flex items-center justify-center' role='navigation'
       style={{ marginTop: '15px' }} >
      <ul id='menu-header-menu' className='menu flex flex-wrap justify-center'>
         <button className={styles.customButton}>
          <li id='menu-item-284913'>
            <a href='../home/page1' className={styles.textContent}>
              Movies
            </a>
          </li>
        </button>

        <button className={styles.customButton}>
          <li id='menu-item-248'>
            <a href='../tv/page1' className={styles.textContent}>
              Tv Show
            </a>
          </li>
        </button>

        <button className={styles.customButton}>
          <li id='menu-item-11605'>
            <a href='../ad/page1' className={styles.textContent}>
              Adult
            </a>
          </li>
        </button>
      </ul>
    </div>
      <div className="flex justify-center items-center my-4 gap-4">
      {isDesktop && (
        <div className="flex flex-col justify-center items-center gap-2">
          {/* First row of pages for desktop and laptop devices */}
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/home/page1" passHref>
              <button
                className={`px-4 py-2 border rounded ${
                  currentPage === 1
                    ? 'bg-red-500 text-white font-bold'
                    : 'bg-gray-200 hover:bg-green-500 text-black font-bold'
                }`}
              >
                Page 1
              </button>
            </Link>

            {[2, 3, 4, 5,  ].map((page) => (
              <Link key={page} href={`/home/page${page}`} passHref>
                <button
                  className={`px-4 py-2 border rounded ${
                    currentPage === page
                      ? 'bg-red-500 text-white font-bold'
                      : 'bg-gray-200 hover:bg-green-500 text-black font-bold'
                  }`}
                >
                  PAGE {page}
                </button>
              </Link>
            ))}
          </div>

          {/* Second row for pages 11 and 12 */}
          {/* <div className="flex justify-center gap-2">
            {[11, ].map((page) => (
              <Link key={page} href={`/home/page${page}`} passHref>
                <button
                  className={`px-4 py-2 border rounded ${
                    currentPage === page
                      ? 'bg-red-500 text-white font-bold'
                      : 'bg-gray-200 hover:bg-green-500 text-black font-bold'
                  }`}
                >
                  PAGE {page}
                </button>
              </Link>
            ))}
          </div> */}
        </div>
      )}

      {isMobile && (
        <div className="flex justify-center items-center my-4 gap-4">
          {/* Previous button for mobile */}
          <Link href={`/home/page${previousPage}`} passHref>
            <button
              className={`px-4 py-2 border rounded ${
                currentPage === 1
                  ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-green-500 text-black font-bold'
              }`}
              disabled={currentPage === 1}
            >
              « Previous
            </button>
          </Link>

          {/* Current page display for mobile */}
          <span className="px-4 py-2 border rounded bg-blue-500 text-white font-bold">
            Page {currentPage}
          </span>

          {/* Next button for mobile */}
          <Link href={`/home/page${nextPage}`} passHref>
            <button
              className={`px-4 py-2 border rounded ${
                currentPage === totalPages
                  ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-green-500 text-black font-bold'
              }`}
              disabled={currentPage === totalPages}
            >
              Next »
            </button>
          </Link>
        </div>
      )}
    </div>
      <div className='container'>
        {/* <h1  className='px-0 font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent'>movies Section</h1> */}
        <div className='flex-container'>
          <div className='main-content'>
            <div className='card-container'>
              {moviesData.map(item => (
                <div key={item.id}>
                  {/* <div key={item.id} className='card'> */}
                  <Link href={`/movies/${item.id}`}>
                    <div className='relative'>
                      <Image
                        src={item.image}
                        alt={item.title}
                        className='rounded-lg'
                        width={140} // Specify the desired width
                        height={140} // Specify the desired height
                        quality={90}
                        style={{
                          width: '200px', // Ensures the image is displayed at this width
                          height: '300px', // Ensures the image is displayed at this height
                          boxShadow: '0 0 10px 0 #000', // Shadow effect with black color
                          filter:
                            'contrast(1.2) saturate(1.3) brightness(1.1) hue-rotate(0deg)' // Image filter
                        }}
                      />
                       <p className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-2xl font-bold mt-2 flex flex-col items-center justify-center'>
                        {item.name}
                      </p>
                      <p className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2 flex flex-col items-center justify-center'>
                        Language: {item.language}
                      </p>
                      <p className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2 flex flex-col items-center justify-center'>
                      Genre: {item.genre}
                      </p>
                      <p className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2 flex flex-col items-center justify-center'>
                        Starring: {item.starring}
                      </p>
                      <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2'>
                        {item.text}
                      </div>
                      <div className='animate-pulse badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'>
                        {item.badge}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              <p
                className=' text-black text-2xl font-semibold mt-2'
                style={{
                  marginTop: '15px',
                  color: '#000',
                  font: 'bold',
                  textShadow: '1px 2px 2px #000 '
                }}
              >
                Many More Coming Soon...
              </p>
            </div>
            {/* <Pagination currentPage={currentPage} totalPages={totalPages} route="movies" /> */}
          </div>

          <div className='sidebar'>
            <p
              className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent font-bold mt-2 flex flex-col items-center justify-center text-3xl'
              style={{
                marginTop: '15px',
                marginBottom:'15px'
                             
              }}
            >
              LATEST UPDATED MOVIES
            </p>
            <div className='categorylatest-container'>
              <div className='cardlatest-container'>
                {latest.map(latestItem => (
                  <div key={latestItem.id} className='cardlatest'>
                    <a href={`/movies/${latestItem.id}`}>
                      <div className='relative'>
                        <Image
                          src={latestItem.image}
                          alt={latestItem.title}
                          className='rounded-lg mx-auto'
                          width={140} // Specify the desired width
                          height={140} // Specify the desired height
                          quality={90}
                          style={{
                            width: '300px', // Ensures the image is displayed at this width
                            height: '300px', // Ensures the image is displayed at this height
                            boxShadow: '0 0 10px 0 #000', // Shadow effect with black color
                            filter:
                              'contrast(1.2) saturate(1.3) brightness(1.1) hue-rotate(0deg)' // Image filter
                          }}
                        />
                        <p className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent font-bold mt-2 flex flex-col items-center justify-center text-2xl'> 
                          {latestItem.name}
                        </p>
                        <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-sm font-semibold mt-2 flex flex-col items-center justify-center'>
                          {latestItem.text}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <style jsx>{`
          /* Global styles */
          body {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          .section-title {
            color: #000;
            font-weight: bold;
            font-size: 30px;
            text-shadow: 3px 5px 5px #000;
            margin-bottom: 20px;
          }

          .flex-container {
            display: flex;
            justify-content: space-between;
          }

          .main-content {
            flex: 3; /* 60% of the width */
          }

          .sidebar {
            flex: 2; /* 40% of the width */
            padding: 10px;
            border-radius: 8px;
            margin-top: 1px;
          }

          .card-container,
          .cardlatest-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }

          .card,
          .cardlatest {
            width: 100%;
            max-width: 100%;
            // border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
          }

          .relative {
            position: relative;
          }

          .badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: rgba(0, 0, 0, 0.4);
            color: #000;
            padding: 5px;
            border-radius: 5px;
            font-weight: bold;
          }

          .card img {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 8px;
          }

          .text-center {
            text-align: center;
          }

          h1 {
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 30px;
            line-height: 1;
            height: 30px;
          }

          @media (max-width: 768px) {
            .flex-container {
              flex-direction: column;
            }

            .main-content,
            .sidebar {
              width: 100%;
            }

            .sidebar {
              margin-top: 20px;
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export async function getStaticProps () {
  try {
    const res = await fetch('https://fmoviesz.vercel.app/moviesp3.json')
    const data = await res.json()

    return {
      props: {
        items: data
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        items: []
      }
    }
  }
}

export default Page4
