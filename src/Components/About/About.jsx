import './About.sass';
import Method from '../Method/Method';
import AboutBlock from '../AboutBlock/AboutBlock';
import AboutPicturesBlock from '../AboutPicturesBlock/AboutPicturesBlock';

const About = () => {
    return (
        <div
            id='about'
            className='About'
        >
            <div className="about_container">
                <AboutBlock />
                <AboutPicturesBlock />
            </div>
            <Method />
        </div>
    )
};

export default About;