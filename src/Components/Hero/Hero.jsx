
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
    <img src={profile_img} className='img' />
    <h1>Iam<span> Meshack Kimaiyo</span>  , A software Engineer.  </h1>
    <p>Iam a fullsstack Engineer from Nairobi , Kenya with 2 years of experience in tech. </p>
    <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My Resume</div>


    </div>
      
    </div>
  )
}

export default Hero
