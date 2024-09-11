import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

export default function HomePage () {
  const uwatchfreeSchema = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'FMOVIES™ - Online. Stream. Download. ',
      url: 'http://localhost:3000/',
      image: ['http://localhost:3000/favicon.ico'],
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
          urlTemplate: 'http://localhost:3000/search?q={search_term_string}'
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
        '@id': 'https://gravatar.com/drtrailer2022',
        name: 'Dr Trailer',
        url: 'https://gravatar.com/drtrailer2022',
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
        '@id': 'http://localhost:3000/#organization',
        name: 'FMOVIES™ - Online. Stream. Download. ',
        url: 'http://localhost:3000'
      },
      {
        '@type': 'WebSite',
        '@id': 'http://localhost:3000/#website',
        url: 'http://localhost:3000',
        name: 'FMOVIES™ - Online. Stream. Download. ',
        publisher: {
          '@type': 'Organization',
          '@id': 'http://localhost:3000/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'http://localhost:3000/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'http://localhost:3000/#webpage',
        url: 'http://localhost:3000/',
        name: 'Movie',
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        about: {
          '@type': 'Person',
          '@id': 'https://gravatar.com/drtrailer2022',
          name: 'Dr Trailer',
          url: 'https://gravatar.com/drtrailer2022',
          image: {
            '@type': 'ImageObject',
            '@id': 'https://gravatar.com/drtrailer2022',
            url: 'https://gravatar.com/drtrailer2022',
            caption: 'Dr Trailer',
            inLanguage: 'en-US'
          }
        },
        isPartOf: {
          '@id': 'http://localhost:3000/#website'
        },
        inLanguage: 'en-US',
        mainEntity: [
          {
            '@type': 'Article',
            '@id': 'http://localhost:3000/',
            url: 'http://localhost:3000/',
            headline: 'FMOVIES™ - Online. Stream. Download. ',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://gravatar.com/drtrailer2022',
              name: 'Dr Trailer',
              url: 'https://gravatar.com/drtrailer2022',
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
              '@id': 'http://localhost:3000/#organization',
              name: 'FMOVIES™ - Online. Stream. Download. ',
              url: 'http://localhost:3000'
            }
          },
          {
            '@type': 'Article',
            '@id': 'http://localhost:3000/',
            url: 'http://localhost:3000/',
            headline: 'FMOVIES™ - Online. Stream. Download. ',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://gravatar.com/drtrailer2022',
              name: 'Dr Trailer',
              url: 'https://gravatar.com/drtrailer2022',
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
              '@id': 'http://localhost:3000/#organization',
              name: 'FMOVIES™ - Online. Stream. Download. ',
              url: 'http://localhost:3000'
            }
          },
          {
            '@type': 'Article',
            '@id': 'http://localhost:3000/',
            url: 'http://localhost:3000/',
            headline: 'FMOVIES™ - Online. Stream. Download. ',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://gravatar.com/drtrailer2022',
              name: 'Dr Trailer',
              url: 'https://gravatar.com/drtrailer2022',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            }
          }
        ]
      }
    ]
  })

  const languagesSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: 'http://localhost:3000/',
    name: 'FMOVIES™ - Online. Stream. Download.',
    alternateName: [
      'FMOVIES™ - Explorar. Transmitir. En línea.',
      'FMOVIES™ - Explorer. Diffuser. En ligne.',
      'FMOVIES™ - Entdecken. Streamen. Online.',
      'FMOVIES™ - 探索。串流。在线。',
      'FMOVIES™ - 探索する。ストリーミング。オンライン。',
      'FMOVIES™ - 탐험하다. 스트리밍. 온라인.',
      'FMOVIES™ - Explorar. Transmitir. Online.',
      'FMOVIES™ - Esplora. Streaming. Online.',
      'FMOVIES™ - Исследовать. Поток. Онлайн.',
      'FMOVIES™ - استكشاف. بث. اون لاين.'
    ],
    inLanguage: [
      'es',
      'fr',
      'de',
      'zh-Hans',
      'ja',
      'ko',
      'pt',
      'it',
      'ru',
      'ar'
    ]
  })
  return (
    <>
      <Head>
        <title>FMOVIES™ - Online. Stream. Download.</title>

        <link
          rel='sitemap'
          type='application/xml'
          title='Sitemap'
          href='http://localhost:3000/sitemap.xml'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
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
        <meta name='referrer' content='origin' />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta
          name='keywords'
          content="fmovies, fmovieswatch, fmovies free, fmovies apk, fmovies hd, fmovies id, fmovies rs, fmovies movies, official fmovies, fmovies free, free movies, movies online, watch movies online, watch movies free, 123movies, fmovies, putlocker, putlockers, hdtoday" />
        <meta
          name='description'
          content='Stream HD movies and TV series for free on FMOVIES. Online. Stream. Download. full-length movies and shows in HD quality without registration.'
        />
        <link rel='canonical' href='http://localhost:3000/' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='FMOVIES™ - Online. Stream. Download. '
        />
        <meta property='og:url' content='http://localhost:3000' />
        <meta
          property='og:site_name'
          content='FMOVIES™ - Online. Stream. Download. '
        />
        <meta
          property='og:image'
          content='http://localhost:3000/og_image.jpg'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:type' content='image/jpg' />
        <meta
          name='application-name'
          content='FMOVIES™ - Online. Stream. Download. '
        />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
        <link
          rel='sitemap'
          type='application/xml'
          title='Sitemap'
          href='http://localhost:3000/sitemap.xml'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='FMOVIES™ - Online. Stream. Download.  HD Movies and TV Series Free'
        />
        <meta
          name='twitter:description'
          content='Stream HD movies and TV series for free on FMOVIES™. Online. Stream. Download. full-length movies and shows in HD quality without registration.'
        />
        <meta
          name='twitter:image'
          content='http://localhost:3000/og_image.jpg'
        />
        <meta
          name='google-site-verification'
          content='ZZZZZZZZZZ'
        />

        <meta
          name='facebook-domain-verification'
          content='du918bycikmo1jw78wcl9ih6ziphd7'
        />
        <meta
          name='dailymotion-domain-verification'
          content='dm0x7o2qx13altq75'
        />
        <meta name='monetag' content='98a412cb5612b9188cd76b9744304b6c' />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: rankMathSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: languagesSchema }}
        />
      </Head>

      <div className='container'>
        <div className='content'>
          <h1 className='title'> FMOVIES™ - Online. Stream. Download.</h1>
          <h2 className='highlight'>
            Discover the Best Movies and TV Shows to Stream on FMOVIES™
          </h2>
          <p className='description'>
            Welcome to <strong>FMOVIES™</strong>, your premier destination for
            streaming the latest and most popular movies and TV shows. Our
            platform offers an extensive collection of entertainment options,
            allowing you to explore a wide variety of genres and discover new
            favorites. Whether you're looking for action-packed thrillers,
            heartwarming dramas, or laugh-out-loud comedies,{' '}
            <strong>FMOVIES™</strong> has something for everyone.
          </p>
          <p className='description'>
            With a user-friendly interface and high-quality streaming,{' '}
            <strong>FMOVIES™</strong> makes it easy to find and enjoy your
            favorite content. Our library is regularly updated with the latest
            releases, ensuring that you have access to the newest movies and TV
            shows as soon as they are available. Stream online seamlessly and
            enjoy an immersive viewing experience from the comfort of your home.
          </p>
          <p className='description'>
            At <strong>FMOVIES™</strong>, we are committed to providing a
            top-notch streaming service that meets all your entertainment needs.
            Join us today and explore the vast world of movies and TV shows
            available at your fingertips. Whether you're a casual viewer or a
            dedicated binge-watcher, <strong>FMOVIES™</strong> is the perfect
            place to stream online and stay entertained. Enjoy the world of Entertainment.
          </p>

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

          <p className='subtitle'>
            The premier platform for the latest releases and secure downloads.
          </p>
          <Link href='/home/page1'>
            <div className='cta-button'>Enter FMOVIES™</div>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 0 20px;
          background: #000;
          font-family: 'Poppins', sans-serif;
        }

        .content {
          text-align: center;
          width: 100%;
          color: #fff;
          padding: 20px;
        }

        .title {
          font-size: 1.25rem;
          font-weight: 900;
          margin-bottom: 1rem;
          text-transform: uppercase;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .highlight {
          font-size: 1.5rem;
          background: linear-gradient(to right, #ff7e5f, #feb47b);
          background-clip: text;
          color: transparent;
          font-weight: bold;
          margin-top: 1rem;
        }

        .description {
          font-size: 1rem;
          background: linear-gradient(to right, #ff7e5f, #feb47b);
          background-clip: text;
          color: transparent;
          margin-top: 1rem;
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

        .subtitle {
          font-size: 0.875rem;
          margin-top: 1rem;
          background: linear-gradient(to right, #ff7e5f, #feb47b);
          background-clip: text;
          color: transparent;
        }

        .cta-button {
          display: inline-block;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          font-weight: 600;
          color: #ff7e5f;
          background-color: #fff;
          border-radius: 50px;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
          text-transform: uppercase;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .cta-button:hover {
          background-color: #ff6f61;
          color: #fff;
          box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
          transform: translateY(-3px);
        }

        @media (min-width: 768px) {
          .title {
            font-size: 2rem;
          }

          .highlight {
            font-size: 2rem;
          }

          .telegram-link {
            font-size: 2rem;
          }

          .cta-button {
            font-size: 1.125rem;
          }
        }

        @media (min-width: 1024px) {
          .title {
            font-size: 2.5rem;
          }

          .highlight {
            font-size: 2.5rem;
          }

          .telegram-link {
            font-size: 2.5rem;
          }

          .cta-button {
            font-size: 1.25rem;
            padding: 1rem 2rem;
          }
        }
      `}</style>
    </>
  )
}
