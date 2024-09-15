import { useState, useEffect } from 'react'
import latestData from '../public/movieszip.json'
import moviesData from '../public/moviesfull.json'
import tvshowData from '../public/tvshowfull.json'
import adultData from '../public/adultfull.json'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Function to shuffle an array and return the first few items
function getRandomItems (array, numberOfItems) {
  return array.sort(() => Math.random() - 0.5).slice(0, numberOfItems)
}

const HomePage = () => {
  const [latest, setlatest] = useState(latestData)


  // Initial state with a consistent set of data
  const [movies, setmovies] = useState(moviesData.slice(0, 4))
  const [tvshow, settvshow] = useState(tvshowData.slice(0, 4))
  const [adult, setadult] = useState(adultData.slice(0, 4))  

  // Update the state with random items after the component mounts
  useEffect(() => {
 
    const shuffledmoviesData = getRandomItems(moviesData, 4)
    const shuffledtvshowData = getRandomItems(tvshowData, 4)
     const shuffledadultData = getRandomItems(adultData, 4)

    setmovies(shuffledmoviesData)
    settvshow(shuffledtvshowData)
    setadult(shuffledadultData)
  }, [])

  const pageTitle = 'FMovies - Explore. Discover. Download.'

  const uwatchfreeSchema = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'FMovies - Explore. Discover. Download.',
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
      url: 'https://fmoviesz.vercel.app/enter',
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

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://gravatar.com/drtrailer2022/',
        name: 'Dr Trailer',
        url: 'https://gravatar.com/drtrailer2022/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://fmoviesz.vercel.app/#organization',
        name: 'FMovies - Explore. Discover. Download.',
        url: 'https://fmoviesz.vercel.app'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://fmoviesz.vercel.app/#website',
        url: 'https://fmoviesz.vercel.app',
        name: 'FMovies - Explore. Discover. Download.',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://fmoviesz.vercel.app/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://fmoviesz.vercel.app/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://fmoviesz.vercel.app/#webpage',
        url: 'https://fmoviesz.vercel.app/enter',
        name: 'Movie',
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        about: {
          '@type': 'Person',
          '@id': 'https://gravatar.com/drtrailer2022/',
          name: 'Dr Trailer',
          url: 'https://gravatar.com/drtrailer2022/',
          image: {
            '@type': 'ImageObject',
            '@id': 'https://gravatar.com/drtrailer2022',
            url: 'https://gravatar.com/drtrailer2022',
            caption: 'Dr Trailer',
            inLanguage: 'en-US'
          }
        },
        isPartOf: {
          '@id': 'https://fmoviesz.vercel.app/#website'
        },
        inLanguage: 'en-US',
        mainEntity: [
          {
            '@type': 'Article',
            '@id': 'https://fmoviesz.vercel.app/',
            url: 'https://fmoviesz.vercel.app/',
            headline: 'FMovies - Explore. Discover. Download.',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://gravatar.com/drtrailer2022/',
              name: 'Dr Trailer',
              url: 'https://gravatar.com/drtrailer2022/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://fmoviesz.vercel.app/#organization',
              name: 'FMovies - Explore. Discover. Download.',
              url: 'https://fmoviesz.vercel.app'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://fmoviesz.vercel.app/enter',
            url: 'https://fmoviesz.vercel.app/enter',
            headline: 'FMovies - Explore. Discover. Download.',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://fmoviesz.vercel.app/author/FMovies/',
              name: 'Dr Trailer',
              url: 'https://fmoviesz.vercel.app/author/FMovies/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://fmoviesz.vercel.app/#organization',
              name: 'FMovies™ - Explore. Discover. Download.',
              url: 'https://fmoviesz.vercel.app/enter'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://fmoviesz.vercel.app/enter',
            url: 'https://fmoviesz.vercel.app/enter',
            headline: 'FMovies™ - Explore. Discover. Download.',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://gravatar.com/drtrailer2022/',
              name: 'Dr Trailer',
              url: 'https://gravatar.com/drtrailer2022/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://fmoviesz.vercel.app/#organization',
              name: 'FMovies - Explore. Discover. Download.',
              url: 'https://fmoviesz.vercel.app/enter'
            }
          }
        ]
      }
    ]
  })

  return (
    <div className='w-full' style={{ backgroundColor: '#D3D3D3' }}>
      <div className='container'>
        <Head>
          <title>{pageTitle}</title>
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://fmoviesz.vercel.app/sitemap.xml'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='icon'
            type='image/x-icon'
            href='/favicon.ico'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='googlebot' content='index,follow' />
          <meta name='revisit-after' content='1 days' />
          <meta
            name='robots'
            content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          />
          <meta
            name='keywords'
            content='fmovies, fmovieswatch, fmovies free, fmovies apk, fmovies hd, fmovies id, fmovies rs, fmovies movies, official fmovies, fmovies free, free movies, movies online, watch movies online, watch movies free, 123movies, fmovies, putlocker, putlockers, hdtoday' 
          />
          {/* <meta
            name='description'
            content='Explore. Discover. Download - Free Your Desired Software.'
          /> */}
          <link rel='canonical' href='https://fmoviesz.vercel.app/enter' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='FMovies™ - Explore. Discover. Download.'
          />
          <meta
            property='og:description'
          content='Stream HD movies and TV series for free on FMovies™. Online. Stream. Download. full-length movies and shows in HD quality without registration.'
          />
          <meta property='og:url' content='https://fmoviesz.vercel.app/enter' />
          <meta
            property='og:site_name'
            content='FMovies™ - Explore. Discover. Download.'
          />
          <meta
            property='og:image'
            content='https://fmoviesz.vercel.app/og_image.jpg'
          />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
          <meta property='og:image:type' content='image/webp' />
          <meta
            name='application-name'
            content='FMovies™ - Explore. Discover. Download.'
          />
          <meta
            property='article:modified_time'
            content='2024-01-01T13:13:13+00:00'
          />
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://fmoviesz.vercel.app/sitemap.xml'
          />
          <meta name='twitter:card' content='summary_large_image' />
       
          <meta
            name='google-adsense-account'
            content='ca-pub-5527677677744511'
          />
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
            content='dmdzuqt3p027t2adn'
          />
          <meta name='monetag' content='35a75bbdeae678c82776e64fb78cdac5' />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: rankMathSchema }}
          />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
          />
        
        </Head>

        <h1
          className='text-black bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6  shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
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
          Welcome to FMovies.
        </h1>
        <p
          className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl hover:text-blue-800 font-bold mt-2 flex items-center justify-center'
          style={{
            marginTop: '15px'
          }}
        >
          {' '}
          Explore. Discover. Download {' '}
        </p>
   
        <div
          className='shadow-lg flex items-center justify-center'
          role='navigation'
          
        >
          <ul
            id='menu-header-menu'
            className='menu flex flex-wrap justify-center'
          >
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-35' className='menu-home active'>
                <a
                  href='/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Home<span className='p'></span>
                </a>
              </li>
            </button>

            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-284913' className='menu-softwarecategories'>
                <a href='../movies/'>
                  <h3 className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'>
                    Movies<span className='p'></span>
                  </h3>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-248' className='menu-operating-systems'>
                <a
                  href='../tvshow/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Tv Show<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11605' className='menu-3dcad'>
                <a
                  href='../adult/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Adult<span className='p'></span>
                </a>
              </li>
            </button>
           
          </ul>
        </div>

        <h3
          className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent  font-bold hover:text-blue-800 text-3xl  mt-2 flex items-center justify-center' 
          style={{
            marginTop: '15px'
          }}
        >
          Most Latest & Popular Movies Tv Show{' '}
        </h3>
        <a
            href='https://t.me/watchmovietvshow/'
            target='_blank'
            rel='noopener noreferrer'
            className='telegram-link'
            style={{
              display: 'block',
              textAlign: 'center',
              margin: '0 auto',
              marginTop: '20px'
            }}
          >
            <p style={{ display: 'inline-block' }}>
              For Request or Demand <br />
              Movies & TV Series Join Telegram
              <i
                className='fab fa-telegram telegram-icon'
                style={{ marginLeft: '8px' }}
              ></i>
            </p>
          </a>
        <div className='container'>
          <div className='flex-container'>
            <div className='category-container'>
              <div className='card-container'>
                {movies.map(moviesItem => (
                  <div key={moviesItem.id} className='card'>
                    <a href={`/movies/${moviesItem.id}`}>
                    <p
                          className='text-black text-xl bg-gradient-to-r from-amber-500 to-pink-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
                          style={{ marginBottom: '20px' }}
                        >
                          {moviesItem.name}
                        </p>
                      <div className='relative'>
                    
                        <Image
                          src={moviesItem.image}
                          alt={moviesItem.title}
                          className='rounded-lg '
                          width={140} // Specify the desired width
                          height={140} // Specify the desired height
                          quality={90}
                          style={{
                            width: '200px', // Ensures the image is displayed at this width
                            height: '300px',  // Ensures the image is displayed at this height
                            filter:
                               'contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)'
                          }}
                        />
                     
                        <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2'>
                          {moviesItem.text}
                        </div>
                        <div className='badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'>
                          {moviesItem.badge}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
                <p className=' animate-pulse text-black text-2xl font-semibold mt-2'  style={{
                  marginTop: '15px',
                  color: '#000',
                  font: 'bold',
                  textShadow: '1px 2px 2px #000 '
                }}>
                  Many More Coming Soon...
                </p>
             
                {tvshow.map(tvshowItem => (
                  <div key={tvshowItem.id} className='card'>
                    <a href={`/tvshow/${tvshowItem.id}`}>
                    <p
                          className='text-black text-xl bg-gradient-to-r from-amber-500 to-pink-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
                          style={{ marginBottom: '20px' }}
                        >
                          {tvshowItem.name}
                        </p>
                      <div className='relative'>
                        <Image
                          src={tvshowItem.image}
                          alt={tvshowItem.title}
                          className='rounded-lg '
                          width={140} // Specify the desired width
                          height={140} // Specify the desired height
                          quality={90}
                          style={{
                            width: '200px', // Ensures the image is displayed at this width
                            height: '300px',  // Ensures the image is displayed at this height
                            filter:
                               'contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)'
                          }}
                        />
                     
                        <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2'>
                          {tvshowItem.text}
                        </div>
                        <div className='badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'>
                          {tvshowItem.badge}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
               <p className=' animate-pulse text-black text-2xl font-semibold mt-2'  style={{
                  marginTop: '15px',
                  color: '#000',
                  font: 'bold',
                  textShadow: '1px 2px 2px #000 '
                }}>
                  Many More Coming Soon...
                </p>
              
                {adult.map(adultItem => (
                  <div key={adultItem.id} className='card'>
                    <a href={`/adult/${adultItem.id}`}>
                    <p
                          className='text-black text-xl bg-gradient-to-r from-amber-500 to-pink-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
                          style={{ marginBottom: '20px' }}
                        >
                          {adultItem.name}
                        </p>
                      <div className='relative'>
                        <Image
                          src={adultItem.image}
                          alt={adultItem.title}
                          className='rounded-lg '
                          width={140} // Specify the desired width
                          height={140} // Specify the desired height
                          quality={90}
                          style={{
                            width: '200px', // Ensures the image is displayed at this width
                            height: '300px',  // Ensures the image is displayed at this height
                            filter:
                               'contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)'
                          }}
                        />
                        
                        <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2'>
                          {adultItem.text}
                        </div>
                        <div className='badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'>
                          {adultItem.badge}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
               <p className=' animate-pulse text-black text-2xl font-semibold mt-2'  style={{
                  marginTop: '15px',
                  color: '#000',
                  font: 'bold',
                  textShadow: '1px 2px 2px #000 '
                }}>
                  Many More Coming Soon...
                </p>
              </div>
            </div>
            <div className='sidebar'>
              <p
                className='text-black text-2xl font-bold mt-2'
                style={{
                  marginTop: '15px',
                  color: '#000',
                  font: 'bold',
                  textShadow: '1px 2px 2px #000 '
                }}
              >
                LATEST MOVIES TVSHOW { ' '}
              </p>
              <div className='categorylatest-container'>
                <div className='cardlatest-container'>
                  {latestData.map(latestItem => (
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
                              height: '300px',  // Ensures the image is displayed at this height
                              filter:
                                 'contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)'
                            }}
                          />
                          <p className='text-black text-lg font-semibold mt-2'>
                            {latestItem.name}
                          </p>
                          <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-sm font-semibold mt-2'>
                            {latestItem.text}
                          </div>
                          {/* <div className='badge'>{latestItem.badge}</div> */}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
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
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .category-container {
            flex-grow: 1; /* Take remaining space */
            margin-top: 40px;
            width: calc(50% - 10px); /* Adjust width to leave space between */
          }
          .categorylatest-container {
            flex-grow: 1; /* Take remaining space */
            margin-top: 40px;
            width: calc(100% - 0px); /* Adjust width to leave space between */
          }

          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }
          .cardlatest-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }

          .card {
            width: 100%; /* Card width will automatically adapt */
            max-width: 100%; /* Limit max width for larger screens */
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
          }
          .cardlatest {
            width: 100%; /* Card width will automatically adapt */
            max-width: 100%; /* Limit max width for larger screens */
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

          // h1 {
          //   // color: #fff;
          //   font-weight: bold;
          //   // text-shadow: 3px 5px 5px #000;
          //   margin-bottom: 10px;
          //   font-size: 30px; /* Corrected property */
          //   line-height: 1; /* Optional: Adjust line height if needed */
          //   height: 30px; /* Set the desired height */
          // }

          .sidebar {
            width: calc(40% - 10px); /* Adjust width to leave space between */
            padding: 20px;
            // border: 1px solid #ccc;
            border-radius: 8px;
            margin-top: 40px;
          }

          @media (max-width: 768px) {
            .flex-container {
              flex-direction: column; /* Stack items vertically on smaller screens */
            }

            .category-container,
            .sidebar {
              width: 100%; /* Make both full width on smaller screens */
            }

            .sidebar {
              margin-top: 20px;
            }
          }
                   .telegram-link {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(to right, #ff7e5f, #feb47b);
          background-clip: text;
          color: transparent;
          margin-top: 25px;
        }

        .telegram-icon {
          color: #0088cc;
          margin-left: 10px;
          font-size: 2rem;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        `}</style>
      </div>
    </div>
  )
}

export default HomePage