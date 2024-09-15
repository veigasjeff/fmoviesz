import { useRouter } from 'next/router'
import latestsData from '../../../public/latest.json'
import { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HomeStyles from '@styles/styles.module.css'
import Script from 'next/script'

const latestDetail = ({ latest }) => {
  const router = useRouter()
  const { id } = router.query

  const uwatchfreeSchema = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Softwarebay™ - Explore. Discover. Download.',
      url: 'http://localhost:3000/',
      image: [
        'http://localhost:3000/wp-content/uploads/2023/05/favicon.ico'
      ],
      logo: {
        '@type': 'ImageObject',
        url: 'http://localhost:3000/logo.png',
        width: 280,
        height: 80
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: 'http://localhost:3000/',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate:
            'http://localhost:3000/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }
  ])

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Person', 'Organization'],
        '@id': 'https://gravatar.com/drtrailer2022/#person',
        name: 'Dr Trailer'
      },
      {
        '@type': 'WebSite',
        '@id': 'http://localhost:3000#website',
        url: 'http://localhost:3000',
        name: 'Softwarebay',
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'WebPage',
        '@id': `/${latest['latest.watch']}#webpage`,
        url: `/${latest['latest.watch']}`,
        name: `${latest.name} | Softwarebay`,
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        isPartOf: {
          '@id': 'http://localhost:3000#website'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'Person',
        '@id': 'http://localhost:3000author/latest/',
        name: 'Dr Trailer',
        url: 'http://localhost:3000author/latest/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        },
        sameAs: ['http://localhost:3000']
      },
      {
        '@type': 'Article',
        '@id': `/${latest['latest.watch']}#article`,
        headline: `Watch ${latest.name} | Softwarebay`,
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        articleSection: 'latest',
        author: {
          '@id': 'http://localhost:3000author/latest/'
        },
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        description: `Explore. Discover. Download - Free Your Desired Software.`,
        image: latest.image,
        name: `Watch ${latest.name} | Softwarebay`,
        isPartOf: {
          '@id': `/${latest['latest.watch']}#webpage`
        },
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@id': `/${latest['latest.watch']}#webpage`
        }
      },
      {
        '@type': 'BlogPosting',
        '@id': `/${latest['latest.watch']}#blogPost`,
        headline: `Watch ${latest.name} | Softwarebay`,
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        articleSection: 'latest',
        author: {
          '@id': 'http://localhost:3000author/latest/'
        },
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        description: `Explore. Discover. Download - Free Your Desired Software.`,
        image: latest.image,
        name: `Watch ${latest.name} | Softwarebay`,
        '@id': `/${latest['latest.watch']}#richSnippet`,
        isPartOf: {
          '@id': `/${latest['latest.watch']}#webpage`
        },
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@id': `/${latest['latest.watch']}#webpage`
        }
      }
    ]
  })
  const newsArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `/${latest['latest.watch']}`,
    name: latest.title,
    url: `/${latest['latest.watch']}`,
    description: latest.synopsis,
    image: latest.image,
    genre: latest.genre,
    datePublished: latest.startDate,
    potentialAction: {
      '@type': 'WatchAction',
      target: {
        '@type': 'EntryPoint',
        name: latest.title,
        urlTemplate: `${latest['url']}`
      }
    },
    locationCreated: {
      '@type': 'Place',
      name: latest.country
    },
    author: {
      '@type': 'Person',
      name: 'DrTrailer',
      url: 'https://gravatar.com/drtrailer2022'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Softwarebay',
      logo: {
        '@type': 'ImageObject',
        url: 'http://localhost:3000/og_image.jpg'
      }
    },
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Action Platform',
      value: ['Desktop Web Platform', 'iOS Platform', 'Android Platform']
    }
  }

  // Convert newsArticleSchema and videoObjects to JSON strings
  const newsArticleJson = JSON.stringify(newsArticleSchema)

  return (
    <div>
      <Head>
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <title> Watch {latest && latest.name} | Softwarebay</title>
        <link rel='canonical' href={latest && latest.url} />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content={`${latest && latest.name} - Softwarebay`}
        />

        <meta
          property='og:description'
          content='SoftwareBay is the top platform for exploring and downloading software,the premier platform for the latest releases and secure downloads.'
        />
        <meta property='og:url' content={`${latest && latest.url}`} />
        <meta name='keywords' content={`${latest && latest.keywords}`} />
        <meta property='og:site_name' content='Softwarebay' />
        <meta property='og:type' content='article' />
        <meta property=' og:image:alt' content={`${latest && latest.group}`} />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta property='article:section' content='latest' />
        <meta name='author' content='admin' />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
        <meta property='og:image' content={`${latest && latest.backimage}`} />

        <meta property='og:image:width' content='1280px' />
        <meta property='og:image:height' content='720px' />
        <meta property='og:image:type' content='image/webp' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:label1' content='Est. reading time' />
        <meta name='twitter:data1' content='1 minute' />
        <meta
          name='google-site-verification'
          content='4gdbnCGat0T4Ow3Y_RYzPM4vwtsXvhUel5Q-2yULK6k'
        />
        <meta
          name='facebook-domain-verification'
          content='du918bycikmo1jw78wcl9ih6ziphd7'
        />
        <meta
          name='dailymotion-domain-verification'
          content='dmv6sg06w9r5eji88'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: rankMathSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: newsArticleJson }}
        />

        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
          integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
        {/* Webpushr tracking code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d, s, id) {
              if (typeof (w.webpushr) !== 'undefined') return;
              w.webpushr = w.webpushr || function () { (w.webpushr.q = w.webpushr.q || []).push(arguments) };
              var js, fjs = d.getElementsByTagName(s)[0];
              js = d.createElement(s); js.id = id; js.async = 1;
              js.src = "https://cdn.webpushr.com/app.min.js";
              fjs.parentNode.appendChild(js);
            }(window, document, 'script', 'webpushr-jssdk'));

            webpushr('setup', { 'key': 'BO9Qy2O9EbKU_YukDi7nzisKRKUCYLKCtcH-1BKBkl8AvD_HZ7_14PKDq-OeXGOMF-wwdKnvKspavxYcr4_BgEA' });
          `
          }}
        />
      </Head>
      {/*<Script src='../../propler/ads.js' defer />*/}
      {/*<Script src='../../propler/ads2.js' defer />*/}

      <div
        className={`w-full`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: '20px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          textAlign: 'center',
          backgroundColor: '#D3D3D3'
        }}
      >
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
          Welcome to SoftwareBay Latest Software News.
        </h1>
        {/* 
        <p
          className='px-0 text-black font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl hover:text-blue-800 mt-2'
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
          Select Categories.{' '}
        </p> */}
        <div
          className='shadow-lg flex items-center justify-center '
          role='navigation'
          style={{
            justifyContent: 'center',
            alignItems: 'center',

            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '15px'
          }}
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
                <a href='../browsers/'>
                  <h3 className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'>
                    Browser<span className='p'></span>
                  </h3>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-248' className='menu-operating-systems'>
                <a
                  href='../desktop/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Desktop<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11605' className='menu-3dcad'>
                <a
                  href='../multimedia/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Multimedia<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11610' className='menu-graphicdesign'>
                <a
                  href='../graphic-design/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Graphic Design<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-196' className='menu-multimedia'>
                <a
                  href='../network/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Network<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-161' className='menu-development'>
                <a
                  href='../development/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Development<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-84' className='menu-antivirus'>
                <a
                  href='../file-sharing/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  File Sharing<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-84' className='menu-antivirus'>
                <a
                  href='../security/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Security<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11606' className='menu-education'>
                <a
                  href='../games/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Games<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-35' className='menu-home active'>
                <a
                  href='../education'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Education<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-35' className='menu-home active'>
                <a
                  href='../mobile'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Mobile<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11606' className='menu-education'>
                <a
                  href='../utilities/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Utilities<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-194' className='menu-tutorials'>
                <a
                  href='../movies/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Movies<span className='p'></span>
                </a>
              </li>
            </button>
          </ul>
        </div>
        <div className='category-container'>
          <Image
            src={latest.channelposter}
            alt={latest.name}
            width={1280}
            height={720}
            objectFit='cover'
            loading='lazy'
            style={{
              width: '800px', // Ensures the image is displayed at this width
              height: '400px', // Ensures the image is displayed at this height
              margin: 'auto',
              marginBottom: '20px',
              borderRadius: '50px',
              boxShadow: '0 0 10px 0 #fff',
              filter:
                'contrast(1.0) saturate(1.0) brightness(1.0) hue-rotate(0deg)'
            }}
          />
          <div
            style={{ maxWidth: '800px', width: '100%', marginBottom: '20px' }}
          >
            <h2
              className='text-black font-bold mt-2 text-3xl mb-2 items-center justify-center '
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 'bold',
                textShadow: '1px 2px 1px rgba(0, 0, 0, 0.5)' // Adjusted to include transparency
              }}
            >
              {latest.title}
            </h2>
            <h2 className='text-black font-bold mt-2 text-sm mb-2 items-center justify-center '>
              {' '}
              Author: {latest.group}.
            </h2>
             <Image
                src={latest.directorimg}
                alt={latest.group}
                width={100}
                height={100}
                quality={90}
                objectFit='cover'
                loading='lazy'
                style={{
                  width: '50px', // Ensures the image is displayed at this width
                  height: '50px', // Ensures the image is displayed at this height
                  margin: 'auto',
                  marginBottom: '20px',
                  borderRadius: '80px',
                  boxShadow: '0 0 10px 0 #fff',
                  filter:
                    'contrast(1.0) saturate(1.0) brightness(1.0) hue-rotate(0deg)'
                }}
              />
         
            {latest.head1 && (
              <p className='text-black font-bold mt-2 text-3xl mb-2 items-center justify-center '>
                <strong>{latest.head1}</strong>
              </p>
            )}
            {latest.image1 && (
              <Image
                src={latest.image1}
                alt={latest.name}
                width={1280}
                height={720}
                quality={90}
                objectFit='cover'
                loading='lazy'
                style={{
                  width: '800px', // Ensures the image is displayed at this width
                  height: '400px', // Ensures the image is displayed at this height
                  margin: 'auto',
                  marginBottom: '20px',
                  borderRadius: '50px',
                  boxShadow: '0 0 10px 0 #fff',
                  filter:
                    'contrast(1.0) saturate(1.0) brightness(1.0) hue-rotate(0deg)'
                }}
              />
            )}
            {latest.news1 &&
              latest.news1.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className='description text-black font-bold mt-2 text-xl'
                  style={{
                    marginBottom: '10px',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {paragraph}
                </p>
              ))}

            {latest.head2 && (
              <p className='text-black font-bold mt-2 text-3xl mb-2 items-center justify-center '>
                <strong>{latest.head2}</strong>
              </p>
            )}
            {latest.image2 && (
              <Image
                src={latest.image2}
                alt={latest.name}
                width={1280}
                height={720}
                quality={90}
                objectFit='cover'
                loading='lazy'
                style={{
                  width: '800px', // Ensures the image is displayed at this width
                  height: '400px', // Ensures the image is displayed at this height
                  margin: 'auto',
                  marginBottom: '20px',
                  borderRadius: '50px',
                  boxShadow: '0 0 10px 0 #fff',
                  filter:
                    'contrast(1.0) saturate(1.0) brightness(1.0) hue-rotate(0deg)'
                }}
              />
            )}
            {latest.news2 &&
              latest.news2.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className='description text-black font-bold mt-2 text-xl'
                  style={{
                    marginBottom: '10px',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {paragraph}
                </p>
              ))}

            {latest.head3 && (
              <p className='text-black font-bold mt-2 text-3xl mb-2 items-center justify-center '>
                <strong>{latest.head3}</strong>
              </p>
            )}
            {latest.image3 && (
              <Image
                src={latest.image3}
                alt={latest.name}
                width={1280}
                height={720}
                quality={90}
                objectFit='cover'
                loading='lazy'
                style={{
                  width: '800px', // Ensures the image is displayed at this width
                  height: '400px', // Ensures the image is displayed at this height
                  margin: 'auto',
                  marginBottom: '20px',
                  borderRadius: '50px',
                  boxShadow: '0 0 10px 0 #fff',
                  filter:
                    'contrast(1.0) saturate(1.0) brightness(1.0) hue-rotate(0deg)'
                }}
              />
            )}
            {latest.news3 &&
              latest.news3.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className='description text-black font-bold mt-2 text-xl'
                  style={{
                    marginBottom: '10px',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {paragraph}
                </p>
              ))}

            {latest.head4 && (
              <p className='text-black font-bold mt-2 text-3xl mb-2 items-center justify-center '>
                <strong>{latest.head4}</strong>
              </p>
            )}
            {latest.image4 && (
              <Image
                src={latest.image4}
                alt={latest.name}
                width={1280}
                height={720}
                quality={90}
                objectFit='cover'
                loading='lazy'
                style={{
                  width: '800px', // Ensures the image is displayed at this width
                  height: '400px', // Ensures the image is displayed at this height
                  margin: 'auto',
                  marginBottom: '20px',
                  borderRadius: '50px',
                  boxShadow: '0 0 10px 0 #fff',
                  filter:
                    'contrast(1.0) saturate(1.0) brightness(1.0) hue-rotate(0deg)'
                }}
              />
            )}
            {latest.news4 &&
              latest.news4.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className='description text-black font-bold mt-2 text-xl'
                  style={{
                    marginBottom: '10px',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {paragraph}
                </p>
              ))}
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

          .flex-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
          }

          .category-container {
            flex-grow: 1;
            max-width: calc(60% - 10px);
          }

          .sidebar {
            flex-grow: 1;
            max-width: calc(40% - 10px);
            padding: 20px;
            border-radius: 8px;
            margin-top: 40px;
            // background-color: #fff;
          }

          @media (max-width: 768px) {
            .flex-container {
              flex-direction: column;
            }

            .category-container,
            .sidebar {
              max-width: 100%;
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

export async function getStaticPaths () {
  const paths = latestsData.map(latest => ({
    params: { id: latest.id } // Assuming each latest object has an "id" field
  }))
  return { paths, fallback: false }
}

export async function getStaticProps ({ params }) {
  // Fetch the latest data based on the provided id
  const latest = latestsData.find(m => m.id === params.id)

  return {
    props: {
      latest
    }
  }
}

export default latestDetail
