export default function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)] shadow-inner">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MouthGuard DAO</h3>
            <p className="text-muted-foreground">
              Decentralized Oral Health Research
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/research" className="text-muted-foreground hover:text-foreground transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="/ecosystem" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ecosystem
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@mouthguarddao.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  contact@mouthguarddao.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MouthGuard DAO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 