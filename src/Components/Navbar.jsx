import React, { useState, useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { Link } from 'react-router-dom'
import { allProducts } from '../Data/allProducts'
import { useCart } from '../Context/CartProvider'

const Navbar = () => {
  const [search, setSearch] = useState("")
const {
  transcript,
  interimTranscript,
  resetTranscript,
  listening,
  browserSupportsSpeechRecognition
} = useSpeechRecognition()


console.log("Supported:", browserSupportsSpeechRecognition);
console.log("Listening:", listening);
console.log("Transcript:", transcript);

useEffect(() => {
  setSearch((transcript || interimTranscript).replace(/[.,!?]$/g, ""));
}, [transcript, interimTranscript]);
  const { cartitems } = useCart()

const handleVoiceSearch = async () => {
  console.log("Mic clicked");

 resetTranscript();

  try {
    await SpeechRecognition.startListening({
      continuous: false,
      language: "en-IN"
    });

    console.log("Started listening");
  } catch (err) {
    console.error(err);
  }
};

  const filteredProducts = allProducts
    .map((item) => {
      let searchText = ""

      if (item.company && item.model) {
        searchText = `${item.company} ${item.model}`
      } else if (item.brand && item.model) {
        searchText = `${item.brand} ${item.model}`
      } else if (item.title && item.author) {
        searchText = `${item.title} ${item.author}`
      } else if (item.title) {
        searchText = item.title
      } else if (item.product) {
        searchText = item.product
      }

      const text = searchText.toLowerCase()
      const query = search.toLowerCase()

      let score = 0

      // category match (highest priority)
      if (item.product?.toLowerCase().includes(query)) score += 3

      // normal text match
      if (text.includes(query)) score += 1

      return { item, score }
    })
    .filter(obj => obj.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(obj => obj.item)

  return (
    <>
      <div className='navsection'>

        <div>
          <Link to={"/"}>
            <h2 className='logo'>E-Bazar</h2>
          </Link>
        </div>

        {/* SEARCH */}
        <div className='search-container'>

<div className="search-box">
  <input
            type="text"
            placeholder='Search...'
            className='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
           {browserSupportsSpeechRecognition && (
    <button
      onClick={handleVoiceSearch}
         className="mic-btn"
    >
      🎤
    </button>
  )}

</div>
          
          {/* RESULTS */}
          {search && (
            <div className='search-results'>

              {filteredProducts.length > 0 ? (
                filteredProducts.slice(0, 8).map((item) => (
                  <Link
                    key={`${item.category}-${item.id}`}
                    to={`/${item.product}/${item.id}`}
                    className='search-item'
                  >
                    <span>
                      {
                        item.company
                          ? `${item.company} ${item.model}`
                          : item.brand
                            ? `${item.brand} ${item.model}`
                            : item.title
                      }
                    </span>

                    <small className='search-category'>
                      in {item.product}
                    </small>
                  </Link>
                ))
              ) : (
                <p className='no-results'>No Products Found</p>
              )}

            </div>
          )}
        </div>

        <div ><div className='login'>
           <h3 >SignUp</h3>
          <h3>/SignIn</h3>
        </div>
         
        </div>

        {/* CART */}
        <div>
          <Link to={"/cart"} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <i className="fa-solid fa-cart-arrow-down" style={{ color: "white",fontSize:"x-large" }}></i>

            {cartitems.length > 0 && (
              <h3 style={{ color: "white", margin: 0 }}>
                {cartitems.length}
              </h3>
            )}
          </Link>
        </div>

      </div>

      {/* SUB NAVBAR */}
      <div className='subsection'>
        <ul>
          <Link to={"/mobile"}><li>Mobiles</li></Link>
          <Link to={"/computer"}><li>Computers</li></Link>
          <Link to={"/watch"}><li>Watches</li></Link>
          <Link to={"/men"}><li>Mens-wear</li></Link>
          <Link to={"/women"}><li>Womens-Wear</li></Link>
          <Link to={"/furniture"}><li>Furniture</li></Link>
          <Link to={"/kitchen"}><li>Kitchen</li></Link>
          <Link to={"/fridge"}><li>Fridge</li></Link>
          <Link to={"/book"}><li>Books</li></Link>
          <Link to={"/speaker"}><li>Speaker</li></Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar