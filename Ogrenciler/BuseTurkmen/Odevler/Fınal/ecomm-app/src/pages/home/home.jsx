import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import { CardImage, Card, CardTitle, CardInfo, CardRate, CardPrice, Button} from "../../components/products/cardstyled";
import axios from 'axios';
import {Section, Content, Picture, Button1, Div, Pict, Title1, Title2, Minip, Buttons, P1, P2, Pictures} from '../../components/navbar/styled';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomProducts = () => {
    const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, 8);
  };

  const randomProducts = getRandomProducts();

  const handleAddToCart = (productId) => {
    console.log(`Sepete eklenecek ürün ID'si: ${productId}`);
  };

  return (
    <div className='container'>
      <Navbar />
      <Div className='d-flex mt-5'>
        <div>
          <P1>Whats New?</P1>
          <P2>Take a Look At Some Of Our Products</P2>
        </div>
        <div className='my-auto'>
          <Link to="/products">
              <Button1>View More</Button1>
          </Link>
        </div>
      </Div>
      <div className="row my-5">
        {randomProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <Card className="card">
              <CardImage src={product.image} alt="Product" className="card-img-top" />
              <div className="card-body">
                <CardTitle className="card-title">{product.title}</CardTitle>
                <CardInfo className="card-text">Category: {product.category}</CardInfo>
                <CardRate className="card-text">Rate: {product.rating.rate} / Stock: {product.rating.count}</CardRate>
                <CardPrice className="card-text">Price: ${product.price}</CardPrice>
                <Link to={`/details/${product.id}`}>
                  <Button>See More</Button>
                </Link>
                <Button onClick={() => handleAddToCart(product.id)}>
                  Add to Cart
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <Section className='container d-flex my-5'>
        <Picture className='col-lg-6'>
          <img src='https://s3-alpha-sig.figma.com/img/cc4b/2826/12bf9db02e233aa64a34946d9a9aed4d?Expires=1688947200&Signature=hSdm7k-0tqvP1TEEOl5pHhNNDim4-XsDm8xK811piJouAziXPOILQom6kNxpX1cmruscR1~uP2go8NSQWgVwWh41os0D~4YvyaRYGX0oEpwDR5f8IaQ4GVLaMoRfQwj~NADGD6y24yFiHi6UaYyik2ftVvGqo5EPPJxFri0HQyA1LJOXyJ9naaEl1l8LqveZNxC9y4Nc1pIzNBUN5CgsLLN~TkMuRrn2-MSTP8waWqyZeYeXHxxyrGv4vb8hvkMkCB6qzoBAAXx3azplgFqE30uklJHEHc92szrTrApSTjvwoVp9h8wKsaWYtj3WhlgwReTxcYSKnszPqROxTmkbFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt="" width="513" height="342" />
        </Picture>
        <Content className='col-lg-5'>
          <Title1>One More Friend</Title1>
          <Title2>Thousands More Fun!</Title2>
          <Minip>having a pet means you have more joy, a new friends, a happy person who will always be with you to have fun. We have 200+ different pete that can meet your needs!</Minip>
          <Buttons>
            <Button1>View Intro</Button1>
            <Button>Explore Now</Button>
          </Buttons>
        </Content>
      </Section>
      <Div className='d-flex mt-5 mb-5'>
        <div>
          <P1>Hard to choose right products for your pets?</P1>
          <P2>Our Products</P2>
        </div>
        <div className='d-flex justify-content-end mt-auto'>
          <Link to="/products">
              <Button1>View More</Button1>
          </Link>
        </div>
      </Div>
      <div className="row">
        {randomProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <Card className="card">
              <CardImage src={product.image} alt="Product" className="card-img-top" />
              <div className="card-body">
                <CardTitle className="card-title">{product.title}</CardTitle>
                <CardInfo className="card-text">Category: {product.category}</CardInfo>
                <CardRate className="card-text">Rate: {product.rating.rate} / Stock: {product.rating.count}</CardRate>
                <CardPrice className="card-text">Price: ${product.price}</CardPrice>
                <Link to={`/details/${product.id}`}>
                  <Button>See More</Button>
                </Link>
                <Button onClick={() => handleAddToCart(product.id)}>
                  Add to Cart
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div className='container my-5'>
        <Div className='d-flex'>
          <P1>Proud to be part of<P2>Pet Sellers</P2></P1>
          <Button1>Views of our sellers</Button1>
        </Div>
        <div className='mb-5'>
          <img className='col-lg-2' width='88' height='64' src="https://s3-alpha-sig.figma.com/img/02b6/b266/58915815ebfb624ccd4b8f8bc9d06ecf?Expires=1688947200&Signature=SP7lNYOXuiKi-xTFOZqmZpo1ycAzTkg11oWN5bIllXCRx0cgTnlh7qyiDdJ~LEfD2XJW530SDzi72WLvFQBRd5a0Xt0y~cfU6GNaWgwMPWZoumbCgyHcTq1ouPFE6TX3matNdohwXPdRdfL~cMtAfQexN4blbC2uvJIqGdoQXoo0kYXF60nBTPict6MSfGM1HVA6l-zFOUDxDsTH2zl5k8karAA~RWwCnwhHByr6sFbHLl5g4DdnkKi-eRCnm1ciDqL4GY5m-N1XkkDjFEx73Sf15Fmsya48P6CCmYzYC9a4yMWJY12G6rVpX9MyS7lm31hx3kzOd0Yprdn6PxQjxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <img className='col-lg-2' width='114' height='114' src="https://s3-alpha-sig.figma.com/img/6926/2552/e00bed606afe9e77f1cc9c7f2e95597b?Expires=1688947200&Signature=MaBo4Bpgzg6pT6wvignyTFpuRMWUa32pnakNsexpV5oKolYC~C2REe2Fqj6jKeZBOplcP-ndkYbhWIMek9dV7YgoDaGhv2MBAF0WjRUtB2K0GSnir2K8gSa73BddrfX8w8-Npz0PkWhFrkWLclzfZBUHuszl1cAHF7cuv9dyn~-mOD2EidaxPLNVLtmZ8HEB6X433kzryTTVpUSRP9jqRusyxdG6Lj0LmuJgqrUrmCqZ4FxzTk~OgSWbZkeJ0Y-r2NePfwq~IR3z~KMM~b5Pkrpzw-CFGIiSvt4igXJSqHHIEdCG~-FVv6ZljjNheWdGGKHL3K8AHeWhSfg96KaUEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <img className='col-lg-2' width='104' height='56' src="https://s3-alpha-sig.figma.com/img/4400/db70/058110bfc32e5bc6e602a644bb081932?Expires=1688947200&Signature=BoTli-yv6xzH~VuBjd7DbERaKGF2zQCmOlNRWxyVWmZhZsLVOnwbGDL3vhEEMdAIsVYEHPmlfPR55Qtz-Jk3l6R8dLRCSnrsGVCa87IF6AqjuQhFEe9Fo33y2d9JE~AJmNsiJ0SXIeF4O5egw0SsbvK1rMomL45g8vC-gl0wKSONpLTJHfiLqA2hxbd7mwK8Y4pcoHuBe84ZmEbpt7BGqDx05MjTyG67QXjH3Lll16MM0ZvveZdtNvpSjrlomi6hNG3fgf6uJWTraHxZ~5RGmvKvyOZGp24vJSnHRDvRPCfJNdMFNQsBm~qmCxulKYCeapQeyhPtCH9s4mhx9UhVzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <img className='col-lg-1' width='92' height='46' src="https://s3-alpha-sig.figma.com/img/e25c/6f9e/2a2af258ba0090ef77ead6e78aec992d?Expires=1688947200&Signature=cZxBEKTN7u~V-g17MsYVT3MFd5ua4LyCKqQNr5dWVKwYz5~bupOFxJbekh5XcX1Nn5gcVIWBKeg1zRUjDsXC3w97LJb~-U5IYNvzJ5ZshrulvC5k989bNiOd-Q72h5lKXuP6NiAGftoWxxd6yWVbdl4OY8AVDX18V~tO2~Nx3uiUyGLM9MhTTA7YwuvUvmqRlxz-Um2oE2iRsBGdGwokiE2-Us20d5HS3wrQVY-l61DbXAnS8oLySnTODS-GtLysb4t~lSzlDzXgrh6yBhHOnc0lCuwbCZ1649Bo86D1h3uIL9KoT4REt2ytRqSIqbYj0oMi6A-mZtjlUbm~YmEhVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <img className='col-lg-1' width='92' height='92' src="https://s3-alpha-sig.figma.com/img/abf8/1bf3/b261ca3e4e94dccf723b6ed12db2575b?Expires=1688947200&Signature=fdgY2ROUdQ1DaKTGLLu1M2w0QPCWqxVzplaGDjTpL8s6h155nq6fVafiwR7deGDWKeWRF7dks-uRuMktMNmHD9arfPgplWaSEKBzFMO2lVM3DsadLAc9h46UiZz7-gW7swqbnkYHf10o0hP7CO-EH1N6q9~h5EDx7DTvKP32LwwGRax0MdIHi22dC9Rtr0nWwFnLZasPMw7QWKqw25vsqMAYpLIvSvCsXU7t~k75kGzpt9k2gIDNLrWHCqKLD-26B5B-PaELZpIwb3sRjGQlNtzlAWCYDcFnajZ1olvc7dyWSrEQQ~SGILgvS~pFTAkpLfE-wk3hpnlsS1DtPXArAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <img className='col-lg-2' width='130' height='56' src="https://s3-alpha-sig.figma.com/img/a10a/1b43/70e851524fa4db43a4f7d590708a8d8b?Expires=1688947200&Signature=qZQoFM8CaOR2Tk~ua-HuTDGPl6H43~-8WOTxtbmJ95hHskWUKocSlX422Vl1alLD3QFRP-hRvHoPIoDCDpdWeC~qlX9BQ8VjzRl05ZvLlgMZFa3~FIovzMShYVJK5AAPhBo24~Gc6Wy6m5Ha3gRK8SskOtSI9NETv8nuIW5al4BN-3KUrShkVkZFhMwptj7F8F~kiQ3kQFTxYqS~ROqrNVa94~7~YTrfy1-nn65joe9mhAmLQdTerlKKC4o7sd0iFxC~AYQ7yuARsUOWC6piq07~gGQyQYQjmHX0wpEqPsLm1e4zk768e0y81Aw0KggvMmRMwvo62TgviYmLnPBr3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <img className='col-lg-2' width='116' height='72' src="https://s3-alpha-sig.figma.com/img/d46b/554b/89025a0019d8f8d0409d4bc87affc11e?Expires=1688947200&Signature=n6fxEONp45DHVo5ShpDduzsqTIbnrX3dXUWShsBZP8kMTYA~aT5fdqDvSSaeAraOs~NqERyr0cS-M23EHWBtzoEM8Y6W74TeL9LC6QDZNCScJd-ChZwvdQKjvL-f-CKLy-kCxAByI3YWV-DgG9HAP1Mm02qyVcRZOgWMS76ZDG839wGfc2xXK9MNHbgbMniD2n9-bZYxOvpeprhNFnDPRWCIQcoW~bAPep0dHwwcfKryq5v~CP0gOgJJE0DVwGIiqHiRpumlsF1DCeAQ8fWYZUL6jtKo-3ODYnzx4ymGO2G9LJMpuW14V-dqR5NIbrdWTpJij9DFkr1wPdIIAbcWQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        </div>
      </div>
      <Section className='container d-flex my-5'>
        <Content className='col-lg-6'>
          <Title1>Adoption</Title1>
          <Title2>We Need Help. So Do They</Title2>
          <Minip>Adopt a pet and give it a home, it will be love you back unconditionally.</Minip>
          <Buttons>
            <Button>Explore Now</Button>
            <Button1>View Intro</Button1>
          </Buttons>
        </Content>
        <Pictures className='col-lg-6'>
          <Pict src='https://s3-alpha-sig.figma.com/img/dcc9/4436/190409de921d3586c62ceebc4d4890f1?Expires=1688947200&Signature=Jeh9RcST-Nkik8n2zf8y~SGku8A~Fs9XZcJkBFfvNXj9nMMIeWZ7w-Ej05umSVEDh~B849UKGzZFpOT59TkBLMBAZO94hrvSytYNDBeR8iQ2MWbSDo~XH1UZqZoeAijL92ruUqR935p8NifEBu5OceycEp4asJKvyj6jXAHbTE6FHULiF9rp53PlvO1b1j7XKAZ8D-wrsbTp7wTrOhjv7VJ~YNJe-ZZvPmunEQ2fzcToTWQCxf4IdvxdzVvotO0Tt1OQa6QpWz6OQ952tMxDFAKtzAbOPnC78dinVQv0M5YPNRpuFfMRtcyDBFYugKC8ncCUa7fc4idhJO7E3KHGlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt="" width="538" height="358" />
        </Pictures>
      </Section>
    </div>
  );
}

export default Home;

