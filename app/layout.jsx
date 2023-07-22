import Nav from "@components/Nav"
import "@styles/globals.css"


const metadata = {
    'title': 'PromptMe',
    'Description': 'Discover and share AI Prompts Worldwide'
}
const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient">    
                </div>
            </div>

            <main className="app">
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout