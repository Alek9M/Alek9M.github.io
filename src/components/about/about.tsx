import '../../index.css';
import classNames from 'classnames';
import styles from './about.module.scss';

import facepic from '../../assets/photos/face.jpg';
import { Education, type IEducation } from '../education/education';

export interface AboutProps {
    className?: string;
}

const educations: IEducation[] = [
    {
        url: 'https://www.ncclondon.ac.uk',
        logo: 'https://epnwpfdx8n9.exactdn.com/wp-content/themes/ncc/media/dist/img/ncc-logo-black.svg',
        title: 'Data',
        level: 3,
        year: 2024,
    },
    {
        url: 'https://www.lewisham.ac.uk',
        logo: 'https://www.lewisham.ac.uk/templates/lscollege/images/logo-cropped-white.png',
        title: 'GCSE Maths',
        level: 2,
        year: 2023,
    },
    {
        url: 'https://en.wikipedia.org/wiki/Novosibirsk_State_University',
        logo: 'https://english.nsu.ru/bitrix/templates/nsu/images/Logo_en_white-green.svg',
        title: 'Computer Science and Computer Engineering',
        level: 5,
        year: 2019,
    },
];

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
                    {educations.map((education: IEducation) => (
                        <Education education={education} />
                    ))}
                </div>
                <h5 className={styles.mainPoints}> Work permit in the UK ✅</h5>
                <div></div>
            </div>
        </div>
    );
};
