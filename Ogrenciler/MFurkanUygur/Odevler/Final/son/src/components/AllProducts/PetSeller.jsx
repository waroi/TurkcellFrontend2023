import sheba from '../../assets/sheba.png'
import whiskas from '../../assets/whiskas.png'
import bakers from '../../assets/bakers.png'
import felix from '../../assets/felix.png'
import goodboy from '../../assets/goodboy.png'
import butcher from '../../assets/butcher.png'
import pedigre from '../../assets/pedigre.png'
import { PetSellerContainer, PetSellerSubTitle, PetSellerTitle } from './styledOneProduct'
import { WhiteBorderButton } from '../buttons/buttonStyle'
import rarrow from '../../assets/rarrow.png'

const PetSeller = () => {
    return (
        <PetSellerContainer className='container'>
            <div className='d-flex justify-content-between'>

                <PetSellerTitle >Proud to be part of
                    <PetSellerSubTitle> Pet Sellers</PetSellerSubTitle>
                </PetSellerTitle>
                <WhiteBorderButton >
                    <div>
                        View All Our Sellers
                        <img src={rarrow} alt="" />
                    </div>
                </WhiteBorderButton>
            </div>
            <div className="row">
                <div className='d-flex align-items-center justify-content-between'>
                    <div className="col-lg-1">
                        <img src={sheba} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-1">
                        <img src={whiskas} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-1">
                        <img src={bakers} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-1">
                        <img src={felix} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-1">
                        <img src={goodboy} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-1">
                        <img src={butcher} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-1">
                        <img src={pedigre} alt="" className='img-fluid' />
                    </div>
                </div>

            </div>
        </PetSellerContainer>
    )
}

export default PetSeller