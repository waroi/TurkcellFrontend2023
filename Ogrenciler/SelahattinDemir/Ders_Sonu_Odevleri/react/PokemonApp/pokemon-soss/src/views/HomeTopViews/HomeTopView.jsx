import { BannerPurple, BannerRed, BannerBlackGray, BannerGray, BannerDarkBlue, BannerBlue } from './HomeTopStyle.js'


const HomeTopView = () => {
  return (

    <div >

      <div className="row">
        <div className="col-8">
          <div className="card">
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/_tiles/sv/sv02/launch/sv02-launch-169-en.png" className="card-img-top" alt="..." />
            <BannerPurple className="card-body cursor-pointer">
              <h3 className='text-light mt-2'>Pokémon TCG: Scarlet & Violet—Paldea Evolved Available Now</h3>
              <p className="card-text mt-2">Some quick example text to build on the card title and make up the bulk of the cards content.</p>

            </BannerPurple>
          </div>

          <div className="row mt-3">
            <div className="col-6">
              <div className="card">
                <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/_tiles/tcgl/launch/tcgl-169-us.png" className="card-img-top" alt="..." />
                <BannerDarkBlue className="card-body">
                  <h3 className='text-light mt-2 fs-4'>NAIC Pokémon Center Store Update</h3>
                </BannerDarkBlue>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/attend-events/championship/2023-naic/2023-naic-pokemon-center-169.png" className="card-img-top" alt="..." />
                <BannerBlue className="card-body">
                  <h3 className='text-light mt-2 fs-4'>Pokémon TCG Live Available Worldwide</h3>
                </BannerBlue>
              </div>
            </div>
          </div>
        </div>


        <div className="col-4 ">
          <div className="card">
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/misc/_tiles/team-rocket/opinion/team-rocket-169.png" className="card-img-top" alt="..." />
            <BannerRed className="card-body">
              <h3 className='text-light mt-2'>Team Rocket: Villains or Heroes? An Unbiased Opinion</h3>
            </BannerRed>
          </div>

          <div className="card mb-3  mt-4" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/misc/_tiles/team-rocket/quiz/team-rocket-34.png" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <BannerBlackGray className="card-body">
                  <h3>Take the Team Rocket Quiz</h3>
                </BannerBlackGray>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/misc/_tiles/pokemon-center/2023/06072023/pokemon-center-169.gif" className="card-img-top" alt="..." />
            <BannerGray className="card-body">
              <h3 className=' mt-2'>It’s Rocket Fashion, Not Rocket Science</h3>
            </BannerGray>
          </div>
        </div>

      </div>
    </div>


  )
}

export default HomeTopView
