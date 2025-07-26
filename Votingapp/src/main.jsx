import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import VotingApp from './Votingapp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VotingApp />
  </StrictMode>,
)
