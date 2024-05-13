import '../../index.css';
import classNames from 'classnames';
import styles from './about.module.scss';

import facepic from '../../assets/photos/face.jpg';

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const About = ({ className }: AboutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.rectangle}>
                <img src={facepic} alt="Facepic" className={styles.circular} />
                {/* circular image of my face from packages/client/src/assets/photos/face.jpg with a bit of shade to the bottom left */}
            </div>
            <div className={classNames(styles.rectangle, styles.text)}>
                <h3>Software Developer 👨‍💻</h3>
                <div>
                    <h4>Education</h4>
                    <div className="row">
                        <a href="https://www.ncclondon.ac.uk">
                            <img
                                src="https://epnwpfdx8n9.exactdn.com/wp-content/themes/ncc/media/dist/img/ncc-logo-black.svg"
                                className={styles.uniLogo}
                            />
                        </a>
                        <h5 className={styles.mainPoints}>Data Level 2</h5>
                    </div>
                    <div className="row">
                        <a href="https://www.lewisham.ac.uk">
                            <img
                                src="https://www.lewisham.ac.uk/templates/lscollege/images/logo-cropped-white.png"
                                className={styles.uniLogo}
                            />
                        </a>
                        <h5 className={styles.mainPoints}>GCSE Maths - 8</h5>
                    </div>
                    <div className="row">
                        <a href="https://en.wikipedia.org/wiki/Novosibirsk_State_University">
                            <img
                                src="https://english.nsu.ru/bitrix/templates/nsu/images/Logo_en_white-green.svg"
                                className={styles.uniLogo}
                            />
                        </a>
                        <h5 className={styles.mainPoints}>
                            Computer Science and Computer Engineering
                        </h5>
                    </div>
                </div>
                <h5 className={styles.mainPoints}> Work permit in the UK ✅</h5>
                <div></div>
            </div>
        </div>
    );
};
