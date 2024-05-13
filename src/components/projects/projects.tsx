import classNames from 'classnames';
import styles from './projects.module.scss';
import json from '../../assets/xp/xp.json';
import { Project } from '../project/project';

export interface ProjectsProps {
    className?: string;
}

// load json form src/assets/xp/xp.json into a xp object

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Projects = ({ className }: ProjectsProps) => {
    return (
        <div className={styles.megaroot}>
            <div className={classNames(styles.root, className)}>
                {/* for each elemnt of xp map a <Project /> */}
                {json.xp
                    .sort((a, b) => b.year - a.year)
                    .map((project, index) => (
                        <Project key={index} project={project} />
                    ))}
            </div>
        </div>
    );
};
