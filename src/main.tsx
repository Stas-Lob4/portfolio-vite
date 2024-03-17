import { Page } from '@/Page'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'
import '@fontsource/dm-sans/500.css'

createRoot(document.getElementById('root') as HTMLElement).render(<Page />)
