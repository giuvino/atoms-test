import './App.css'
import '../assets/styles/index.css'
import Button from '../components/func/Button/Button'
import Nav from '../components/func/Nav/Nav'
import Banner from '../components/func/Banner/Banner'
import Articles from '../components/func/Articles/Articles'
import Footer from '../components/func/Footer/Footer'
import BlogSection from '../components/func/BlogSection/BlogSection'
import user from '../assets/images/user.svg'
import Quote from '../components/func/Quote/Quote'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner
        bannerTitle='Tutti i temi'
      />
      <Articles
        articleName="Roccella Jonica, la Lampedusa che l'Italia ignora"
        articleStyle='highlight1'
      />
      <BlogSection
        blogTitle='Il Blog'
        blogArticle1="Il becco dell'oca"
        blogWriter1="Di Paolo dell'Oca"
        Img1={user}
        blogArticle2="Il becco dell'oca"
        blogWriter2="Di Paolo dell'Oca"
        Img2={user}
        blogArticle3="Il becco dell'oca"
        blogWriter3="Di Paolo dell'Oca"
        Img3={user}
        blogArticle4="Il becco dell'oca"
        blogWriter4="Di Paolo dell'Oca"
        Img4={user}
        blogArticle5="Il becco dell'oca"
        blogWriter5="Di Paolo dell'Oca"
        Img5={user}
      />
      <Quote
        quoteText='Essere troppo seri non è cosa molto seria'
        quoteSource='Detto Africano'
      />
      <Footer />
    </div>
  )
}

export default App
