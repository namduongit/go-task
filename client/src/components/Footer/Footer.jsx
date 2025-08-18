import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer footer-component bg-dark text-light py-2">
      <div className="footer-container container d-flex justify-content-between fw-bold">
        <div className="row">
          <p className="mb-1">&copy; 2025 <a href="https://github.com/namduongit" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub namduongit</a>. All rights reserved.</p>
          <p className="mb-0">Contact: <a href="mailto:nguyennamduong205@gmail.com" className="footer-link">nguyennamduong205@gmail.com</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
