import Link from 'next/link';
import Header from './Components/Header';
import styles from '../styles/Home.module.css';
import Footer from './Components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div className={`container-xxl px-sm-0 px-5`}>
        <div className="row my-sm-5 px-xxl-0 px-sm-2">
          <div className="col-sm-6 order-sm-2">
            <img style={{ width: '80%' }} src="https://d9hhrg4mnvzow.cloudfront.net/get.manta.com/free-consultation-clutch/f429e34d-consultation-header-image_10jz0dc0e60ce02k00h028.png" alt="#ImgNotFound" />
          </div>
          <div className="col-sm-6 mt-md-5">
            <span style={{ fontWeight: "700", fontFamily: "&quot;Red Hat Display&quot", color: "rgb(255, 107, 97)" }}>
              <span style={{ fontFamily: "&quot;Red Hat Display&quot", fontWeight: "700", fontStyle: "normal" }}>
                <span style={{ fontSize: "calc(18px + 1.5vw)", lineHeight: "calc(25px + 1.5vw)" }}>More Traffic.&nbsp;</span>
              </span>
            </span>
            <span style={{ fontWeight: "700", fontFamily: "&quot;Red Hat Display&quot", color: "rgb(255, 107, 97)" }}>
              <span style={{ fontWeight: "700", fontFamily: "&quot;Red Hat Display&quot", color: "rgb(255, 107, 97)", fontStyle: "normal" }}>
                <span style={{ fontSize: "calc(18px + 1.5vw)", lineHeight: "calc(25px + 1.5vw)" }}>More Revenue.</span>
              </span>
              <span>
                <br />
              </span>
              <span style={{ fontSize: "calc(18px + 1.5vw)", lineHeight: "calc(25px + 1.5vw)" }}>Top Rated SEO by Clutch.</span>
            </span>
            <p className={`${styles.textSize} mt-4`}>
              <b>Manta</b> offers the most effective SEO packages available for businesses of any size. Get more traffic to your website with an SEO campaign that delivers real results, and more revenue for your business.
            </p>
            <ul style={{ listStyleType: "none", marginLeft: "-30px" }}>
              <li><p className={`${styles.textSize}`}><img src="https://d9hhrg4mnvzow.cloudfront.net/get.manta.com/free-consultation-clutch/3695e1ee-check-mark_1000000000000000000028.png" alt="#ImgNotFound" /> Get a higher ranking on search engines</p></li>
              <li><p className={`${styles.textSize}`}><img src="https://d9hhrg4mnvzow.cloudfront.net/get.manta.com/free-consultation-clutch/3695e1ee-check-mark_1000000000000000000028.png" alt="#ImgNotFound" /> Get more online exposure</p></li>
              <li><p className={`${styles.textSize}`}><img src="https://d9hhrg4mnvzow.cloudfront.net/get.manta.com/free-consultation-clutch/3695e1ee-check-mark_1000000000000000000028.png" alt="#ImgNotFound" /> Increase website traffic and sales</p></li>
            </ul>
          </div>
        </div>

      </div>
      <div style={{ background: "#214752" }}>
        <h1 style={{ color: '#FF6B61' }} className="text-center pt-4">Do you need more website traffic?</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <p className={`text-center text-white ${styles.textSize}`}>
              Get a FREE Consultation with an SEO expert and learn how we can grow your website traffic. Just fill out the form below to speak with a consultant today!
            </p>
          </div>
        </div>
        <div className="container-xl pt-3">
          <div className="row pb-4">
            <div className="col-lg-4 col-md-6">
              <label for="inputBox1" class="form-label text-white" style={{ fontSize: "12px" }}>First Name*</label>
              <input type="email" class="form-control" id="inputBox1" />
            </div>
            <div className="col-lg-4 col-md-6">
              <label for="inputBox2" class="form-label text-white" style={{ fontSize: "12px" }}>Last Name*</label>
              <input type="email" class="form-control" id="inputBox2" />
            </div>
            <div className="col-lg-4 col-md-6">
              <label for="inputBox3" class="form-label text-white" style={{ fontSize: "12px" }}>Phone Number*</label>
              <input type="email" class="form-control" id="inputBox3" />
            </div>
            <div className="col-lg-4 col-md-6">
              <label for="inputBox4" class="form-label text-white" style={{ fontSize: "12px" }}>Email*</label>
              <input type="email" class="form-control" id="inputBox4" />
            </div>
            <div className="col-lg-4 col-md-6">
              <label for="inputBox5" class="form-label text-white" style={{ fontSize: "12px" }}>Website URL*</label>
              <input type="email" class="form-control" id="inputBox5" />
            </div>
            <div className="col-lg-4 col-md-6">
              <label for="inputBox6" class="form-label text-white" style={{ fontSize: "12px" }}>Company*</label>
              <input type="email" class="form-control" id="inputBox6" />
            </div>
            <div className="col-lg-4 col-md-6">
              <label for="inputBox7" class="form-label text-white" style={{ fontSize: "12px" }}>Monthly Marketing Budget</label>
              <input type="email" class="form-control" id="inputBox7" />
            </div>
            <div className="col-lg-4 col-md-6">
              <label for="inputBox8" class="form-label text-white" style={{ fontSize: "12px" }}>What problem are you trying to solve? *</label>
              <input type="email" class="form-control" id="inputBox8" />
            </div>
            <div className="col-lg-4">
              <label class="form-label text-white" style={{ fontSize: "12px" }}>&ensp;</label>
              <button class="btn w-100" style={{ background: '#F2534A', color: 'white' }}>Get Your Free Consultation</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center my-5' style={{ fontWeight: "400" }}>
        Okay but what is SEO?
      </h1>
      <div className="container-lg">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <p className="text-center px-3" style={{ fontSize: '20px' }}>
              SEO stands for Search Engine Optimization. But to tell you what it is, we first have to tell you what it's not.
            </p>
          </div>
        </div>
      </div>

      <div className="container-xxl text-center">
        <div className="row mt-3">
          <div className="col-lg-4 col-md-6 px-5">
            <img src="https://d9hhrg4mnvzow.cloudfront.net/get.manta.com/free-consultation-clutch/e7a1073e-group-514_1021021000000000000028.png" alt="#ImgNotFound" width='73px' height='73px' />
            <h5><b>SEO is not magic.</b></h5>
            <p style={{ fontSize: "14px" }}>
              Google doesn't randomly decide which websites go to the top of the search results. The algorithm adjusts rankings based on several factors. Our SEO campaigns optimize for each of those factors to show Google your website has what it's looking for.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 px-5">
            <img src="https://d9hhrg4mnvzow.cloudfront.net/get.manta.com/free-consultation-clutch/4b3e626f-group-512_1000000000000000000028.png" alt="#ImgNotFound" width='73px' height='73px' />
            <h5><b>SEO is not completely automated.</b></h5>
            <p style={{ fontSize: "14px" }}>
              While SEO relies on technology to make it functional, it affects real people working in real businesses. That’s why we have real humans working on your campaign at every stage.
            </p>
          </div>
          <div className="col-lg-4 px-5">
            <img src="https://d9hhrg4mnvzow.cloudfront.net/get.manta.com/free-consultation-clutch/fef2d258-group-513_1000000000000000000028.png" alt="#ImgNotFound" width='73px' height='73px' />
            <h5><b>SEO is not a luxury.</b></h5>
            <p style={{ fontSize: "14px" }}>
              Having your business on the internet is no longer optional if you want to attract customers. So that means having SEO for your website isn't optional either. But thanks to our unique scalable model, we can do something for every business at every budget.
            </p>
          </div>
        </div>
      </div>

      <div style={{ background: "#D6E8EB" }}>
        <div className="container-xxl">
          <div className="row py-4">
            <div className="col-md-6 order-md-2">
              <img className='w-100' src="https://d9hhrg4mnvzow.cloudfront.net/get.manta.com/free-consultation-clutch/71611a64-google-search-computer-mockup_10gr0ck0f40ad00000g028.png" alt="#ImgNotFound" />
            </div>
            <div className={`col-md-6 mt-md-5 ${styles.paddingLeft}`}>
              <h5><b>OUR SEO IS #1</b></h5>
              <h1 style={{ color: '#FF6B61' }}>What we do.</h1>
              <p style={{ fontSize: "13px" }}>Our campaigns build a website's relevance and trust with search engines. Every task performed has a specific purpose that improves your website's ranking. Some of these tasks include:</p>
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li style={{ fontSize: "13px" }}>Keyword Research</li>
                    <li style={{ fontSize: "13px" }}>Business Directories</li>
                    <li style={{ fontSize: "13px" }}>Onsite Optimizations</li>
                    <li style={{ fontSize: "13px" }}>Tag Implementation</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li style={{ fontSize: "13px" }}>Local Business SEO </li>
                    <li style={{ fontSize: "13px" }}>Content Creation</li>
                    <li style={{ fontSize: "13px" }}>Backlink Building</li>
                    <li style={{ fontSize: "13px" }}>And so much more!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl">
        <div className="row">
          <div className={`col-md-6 ${styles.leftSideImage}`}>
            <img src="https://d9hhrg4mnvzow.cloudfront.net/get.manta.com/free-consultation-clutch/8ab85606-phone_10bs0br09108r00f01m028.png" alt="#ImgNotFound" />
          </div>
          <div className={`col-md-6 mt-5 ${styles.RightSideText}`}>
            <h1 style={{ color: "#FF6B61" }}>Be found first</h1>
            <h6>93% of online queries start on a search engine.</h6>
            <p>If you're not one of the first results, you’re losing traffic to your competition.</p>
          </div>
        </div>
      </div>

      <div style={{ background: "#214752" }}>
        <div className="container-xl text-center px-md-5">
          <div className="row py-3">
            <div className="col-lg-4 col-md-6">
              <h1 style={{ color: "#FF6B61" }}>50%</h1>
              <p className="text-center text-white" style={{ fontSize: "14px" }}>
                of local searches bring a consumer to a real store within 24 hours
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h1 style={{ color: "#FF6B61" }}>72%</h1>
              <p className="text-center text-white" style={{ fontSize: "14px" }}>
                Of consumers who perform a local search visit a store within 5 miles of their current location
              </p>
            </div>
            <div className="col-lg-4">
              <h1 style={{ color: "#FF6B61" }}>50%</h1>
              <p className="text-center text-white" style={{ fontSize: "14px" }}>
                of mobile searches are more likely to contact a local business if they have a mobile-friendly site
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 style={{ fontWeight: "400" }} className='text-center py-md-5 py-3'><b>SEO Process</b> here's how it works</h1>
      <div className="container-xxl px-md-5 py-md-5 py-3">
        <div className="row">
          <div className="col-md-7 order-2">
            <div className="row">
              <div className="col-md-4 mt-3 mt-md-5 pt-md-5 text-md-left text-center">
                <img src="https://d9hhrg4mnvzow.cloudfront.net/get.manta.com/free-consultation-clutch/4b3e626f-group-512_1000000000000000000028.png" alt="#ImgNotFound" />
              </div>
              <div className="col-md-8">
                <h1 style={{ color: "#FF6B61" }}>Website optimization</h1>
                <p style={{ fontSize: "18px" }}>Our team of on-site optimization specialists get to work fixing the code and copy on your website to make sure it's user friendly and optimized for Google's algorithm. </p>
              </div>
            </div>
          </div>
          <div className={`col-md-5 ${styles.borderRight}`}>
            <ol>
              <li style={{ fontSize: "20px" }}>Initial campaign setup</li>
              <li style={{ fontSize: "20px" }}>Keyword optimization</li>
              <li style={{ fontSize: "20px" }}><b>Website optimization </b></li>
              <li style={{ fontSize: "20px" }}>Business profile development</li>
              <li style={{ fontSize: "20px" }}>Link portfolio development</li>
              <li style={{ fontSize: "20px" }}>Custom content creation</li>
              <li style={{ fontSize: "20px" }}>Ongoing SEO consultation</li>
              <li style={{ fontSize: "20px" }}>Service and performance reporting</li>
            </ol>
          </div>
        </div>
      </div>

      <div style={{ background: '#F7F5F5' }}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6">
              <img className='w-100' style={{ height: '300px' }} src="https://d9hhrg4mnvzow.cloudfront.net/get.manta.com/free-consultation-clutch/d66f0bc4-adobestock-347526190-1_10jm09208w092070000028.png" alt="#ImgNotFound" />
            </div>
            <div className="col-md-6">
              <h5 className='mt-5'><b>AFFORDABLE SEO</b></h5>
              <h2 style={{ color: "#F2534A" }}>Interested in pricing & packages?</h2>
              <button class="btn mt-3 mt-md-5 mb-5" style={{ background: '#F2534A', color: 'white' }}>Explore Pricing Option</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl">
        <div className="row mt-5">
          <div className={`col-md-6 text-center px-lg-4`}>
            <img src="https://d9hhrg4mnvzow.cloudfront.net/get.manta.com/free-consultation-clutch/73a90546-group-532_10al07v000000000000028.png" alt="#ImgNotFound" />
          </div>
          <div className={`col-md-6 mt-5 px-md-4`}>
            <h5><b>SEO IN ACTION</b></h5>
            <h2 style={{ color: "#FF6B61", marginTop: "-10px" }}>22 Keywords on page 1</h2>
            <p style={{ fontSize: '20px' }}>After 16 months with Boostability, this Florida mulching company is doing better than ever thanks to SEO.</p>
          </div>
        </div>
      </div>

      <div style={{ background: "#D6E8EB" }}>
        <div className="container-xxl mt-5 px-5">
          <div className="row py-5 px-5">
            <div className={`col-md-6`}>
              <h4><b>Want to learn more?</b></h4>
              <p style={{ fontSize: '13px' }}>If Google can’t find your website, neither can your customers. Keep reading to learn how SEO can get your business in front of the right audience.</p>
            </div>
            <div className={`col-md-6 mt-5 px-md-4 text-center`}>
              <button class="btn" style={{ background: '#F2534A', color: 'white' }}>See How its Works</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

