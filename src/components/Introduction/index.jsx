import classes from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faSuitcase, faLink, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons'

const Introduction = () => {
    return (
        <div className={classes.introduction}>
            <div className={`${classes.container} container`}>
                <h1 className={classes.header}>Developer</h1>
                <div className={classes.aboutMe}>
                    <div className={classes.card}>
                        <div className={classes.profilePhotoWrapper}></div>
                        <h2 className={classes.firstName}>Badr</h2>
                        <p className={classes.job}>Full-stack developer</p>

                        <ul>
                            <li><FontAwesomeIcon icon={faEnvelope} className={classes.icon} />badr.elyatim@gmail.com</li>
                            <li><FontAwesomeIcon icon={faLocationDot} className={classes.icon} />Morocco</li>
                            <li><FontAwesomeIcon icon={faSuitcase} className={classes.icon} />Full-time / Freelancer</li>
                            <li><FontAwesomeIcon icon={faLink} className={classes.icon} />www.badr.com</li>
                        </ul>
                        <button className={classes.downloadBtn}>Download CV <FontAwesomeIcon icon={faDownload} /></button>
                    </div>
                    <div className={classes.rightSide}>
                        <div className={classes.whoAmi}>
                            <div className={classes.tagWrapper}>
                                <span className={classes.tag}>&lt;h1&gt;</span>
                                <h1>
                                    Hey <br />
                                    I'm <span>Badr</span>,<br />
                                    Full-Stack Developer <span className={classes.tag}>&lt;h1&gt;</span>
                                </h1>
                            </div>
                            <div className={classes.tagWrapper}>
                                <span className={classes.tag}>&lt;p&gt;</span>
                                <p>
                                    I help business grow by crafting amazing web experiences. If you're looking for a developer that likes to get stuff done.
                                </p>
                                <span className={classes.tag}>&lt;p&gt;</span>
                            </div>
                            <p className={classes.letsTalk}>let's talk <FontAwesomeIcon icon={faEnvelopeRegular} className={classes.icon} /></p>
                        </div>
                        <div className={classes.stats}>
                            <ul>
                                <li><span>3</span> Programming<br />Language</li>
                                <li><span>3</span> Development<br />Tools</li>
                                <li><span>3</span> Years of<br />Experience</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction