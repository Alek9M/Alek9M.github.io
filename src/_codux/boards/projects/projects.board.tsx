import { createBoard } from '@wixc3/react-board';
import { Projects } from '../../../components/projects/projects';

export default createBoard({
    name: 'Projects',
    Board: () => <Projects />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasWidth: 1034.6970954356848,
    },
});
