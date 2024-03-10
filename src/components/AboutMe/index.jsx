import classes from './index.module.css'
import scroll from '../../assets/scroll.svg'
import aboutme from '../../assets/aboutMe.png'

const AboutMe = () => {
    return (
        <div className={classes.aboutMe}>
            <div className={`${classes.container} container`}>
                <div className={classes.mouseWrapper}>
                    <img src={scroll} alt="scroll mouse" />
                </div>
                <div className={classes.content}>
                    <div>
                        <h2 className={classes.title}>About Me</h2>
                        <div className={classes.tagWrapper}>
                            <span className={classes.tag}>&lt;p&gt;</span>
                            <p className={classes.hello}>Hello!</p>
                            <p>My name is Badr and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.</p>
                            <p>I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.</p>
                            <p>When I'm not coding, I immerse myself in gaming, finding enjoyment and excitement in exploring virtual worlds and tackling new challenges.</p>
                            <p>I like to have my perspective and belief systems challenged so that I see the world through new eyes.</p>
                            <span className={classes.tag}>&lt;p&gt;</span>
                        </div>
                    </div>
                    <div className={classes.imgWrapper}>
                        <img src={aboutme} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe