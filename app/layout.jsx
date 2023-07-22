import "@styles/globals.css"
import { Children } from "react/cjs/react.production.min"


const metadata = {
    'title': 'PromptMe',
    'Description': 'Discover and share AI Prompts Worldwide'
}
const RootLayout = ({Children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient">    
                </div>
            </div>

            <main className="app">
                {Children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout