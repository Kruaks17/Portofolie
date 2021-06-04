import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return (
    <>
    <meta lang="en" name="Portofolie" content="Aksel viser prosjekter han har jobebt med"/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
