import { BannerYellow, BannerGreen, BannerDark, BannerBlue, BannerOrange, BannerPurple, BannerTwice, BannerTwiceTwo } from './HomeBottomStyle.js'

const HomeBottomView = () => {
  return (
    <div className='mt-5' >
      <div className="row mt-5">
        <div className="col-4 mt-5">
          <div className="card">
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/_tiles/how-do-you-play/how-do-you-play-169.png" className="card-img-top" alt="..." />
            <BannerYellow className="card-body m">
              <h3 className='text-light mt-3 fs-4'>Go Up Close and Personal with the Pokémon TCG Community</h3>
              <p>Connect Pokémon Scarlet and Pokémon Violet to Pokémon HOME</p>
            </BannerYellow>
          </div>
          <div className="card mt-3">
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/_tiles/pokemon-home/scarlet-violet/pokemon-home-169-en.png" className="card-img-top" alt="..." />
            <BannerGreen className="card-body">
              <h3 className='text-light mt-3 fs-4'>Connect Pokémon Scarlet and Pokémon Violet to Pokémon HOME</h3>
              <p>Connect Pokémon Scarlet and Pokémon Violet to Pokémon HOME</p>
            </BannerGreen>
          </div>
        </div>
        <div className="col-4">
          <div className="card ">
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/watch-pokemon-tv/_tiles/stunts/team-rocket/team-rocket-169-en.png" className="card-img-top" alt="..." />
            <BannerDark className="card-body">
              <h3 className='text-light mt-2 fs-4'>Team Rocket Is Looking Trendy and Troublesome on Pokémon TV</h3>
              <p className='text-light'>Blast off for fashion as Team Rocket gets dressed to the nines in a collection of Pokémon the Series episodes.</p>
            </BannerDark>
          </div>
          <h3 className=' my-5 fs-4 text-secondary fw-light'>What's New This Week
          </h3>

          <div className="card ">
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/sv02-elite-trainer-box/sv02-elite-trainer-box-169-en.png" className="card-img-top" alt="..." />
            <BannerBlue className="card-body">
              <h3 className='text-light mt-2 fs-4'>What's New This Week</h3>
              <p>Be Elite and Evolve Your Pokémon TCG Collection
                The Pokémon TCG: Scarlet & Violet—Paldea Evolved Elite Trainer Box is loaded with cards and cool accessories.</p>
            </BannerBlue>
          </div>
        </div>
        <div className="col-4 mt-3">
          <div className="card ">
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/_tiles/pokemon-unite/2023/06082023/pokemon-unite-169.png" className="card-img-top" alt="..." />
            <BannerOrange className="card-body">
              <h3 className='text-light mt-2 fs-4'>Soak Up the Sun with Leafeon in Pokémon UNITE</h3>
              <p>Launch an all-out “grassault” with Leafeon and its powerful Solar Blade attack in Pokémon UNITE.</p>
            </BannerOrange>
          </div>


          <div className="card mt-3">
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/_tiles/pokemon-scarlet-violet/ranked-battles/2023/season-7-169-en.png" className="card-img-top" alt="..." />
            <BannerPurple className="card-body">
              <p className='fs-4 text-light mb-0'>Prove Your Skills in Ranked Battles Season 7 NowWhat's New This Week</p>
              <p>Take on Pokémon Scarlet and Pokémon Violet players from around the world to earn in-game rewards and climb the ranks.</p>
            </BannerPurple>

          </div>

          <div className="card mt-3">
            <BannerTwice className="card-body">
              <h4 className='text-light mt-2 fs-4'>View All News </h4>

            </BannerTwice>
            <BannerTwiceTwo className='card-body'>
              <p>Keep up with all the latest developments!</p>

            </BannerTwiceTwo>

          </div>
        </div>
      </div>
    </div >
  )
}

export default HomeBottomView
