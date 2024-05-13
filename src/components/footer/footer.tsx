import '../../index.css';
import classNames from 'classnames';
import styles from './footer.module.scss';
import { SimpleIcon } from '../simple-icon/simple-icon';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    const email = 'majesty09_aerator@icloud.com';
    const phone = '+447774322780';

    return (
        <div className={classNames(styles.root, className)}>
            <div className="limit">
                <div className={styles['main-points']}>
                    <a href={`mailto:${email}`}>✉️ e-mail</a>
                    <a href={`tel:${phone}`}>📞 please don't call me </a>
                </div>
                <div className={styles.socials}>
                    <a href={'https://github.com/Alek9M'} target="_blank" rel="noreferrer">
                        <SimpleIcon icon={{ title: 'GitHub', appendix: 'github' }} />
                    </a>
                    <a href={'www.linkedin.com/in/akrp9'} target="_blank" rel="noreferrer">
                        <SimpleIcon icon={{ title: 'LinkedIn', appendix: 'linkedin' }} />
                    </a>
                    <a
                        href={'https://profile.indeed.com/p/aleksandrk-6brkspw'}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SimpleIcon icon={{ title: 'Indeed', appendix: 'indeed' }} />
                    </a>
                    <a href={'https://t.me/akrp9'} target="_blank" rel="noreferrer">
                        <SimpleIcon icon={{ title: 'Telegram', appendix: 'telegram' }} />
                    </a>
                </div>
                📍 Lewisham, London
            </div>
        </div>
    );
};
