function Footer() {
  return (
    <footer className="py-10 px-4 mt-8 border-t border-pink-200">
      <div className="max-w-3xl mx-auto text-center text-gray-500 text-sm space-y-3">
        <p>
          Love Hidden Hearts is a free online hidden object game. Play directly
          in your browser — no download required.
        </p>
        <div className="flex justify-center gap-6">
          <a href="#privacy" className="text-rose-primary hover:text-rose-dark transition-colors">
            Privacy Policy
          </a>
          <a href="#contact" className="text-rose-primary hover:text-rose-dark transition-colors">
            Contact
          </a>
        </div>
        <p className="text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Love Hidden Hearts. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
