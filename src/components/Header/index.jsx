import classes from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'



const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.content + ' container'}>
                <Logo />
                <div className={classes.links}>
                    <ul className={classes.socialLinks}>
                        <li>
                            <a href="https://www.linkedin.com/in/badr-elyatim-333811245/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className={classes.icon} /><span>Linkedin</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/BadrElyatim" target="_blank"><FontAwesomeIcon icon={faGithub} className={classes.icon} /><span>Github</span></a></li>
                        <li>
                            <a href="https://discord.com/users/408687858262474753" target="_blank"><FontAwesomeIcon icon={faDiscord} className={classes.icon} /><span>Discord</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

const Logo = () => {
    return (
        <div className={classes.logo}>
            <span className={classes.tag}>&lt;B/&gt;</span>BadrElyatim
        </div>
    )
}

export default Header