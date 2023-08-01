import ColorPreview from './ColorPreview';
import TypographyPreview from './TypographyPreview';
import ButtonPreview from './ButtonPreview';
import MessagePreview from './MessagePreview';
import NotificationPreview from './NotificationPreview';
import StepPreview from './StepPreview';
import TimelinePreview from './TimelinePreview';

import Toggle from '../../components/darkToggle';
import { useAuth } from '../../hooks/useAuth';


const PreviewDiv = () => {
    const {darkMode, toggleDark} = useAuth();

    return(
        <>
            <Toggle theme={darkMode} toggleTheme={toggleDark} />
            <ColorPreview />
            <MessagePreview />
            <NotificationPreview />
            <ButtonPreview />
            <StepPreview />
            <TypographyPreview />
            <TimelinePreview />
        </>
    )
};

export default PreviewDiv;
