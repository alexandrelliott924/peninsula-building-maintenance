import "../styles/footer.css"
import logo from "../assets/logos/PBM-white-icon.png"

function Footer() {
    return(
        <div className="footer">
            <img src={logo} alt="PBM logo" className="PBM-footer-logo" />
            <p className="footer-text"> <span className="enveloppe">✉</span> admin@peninsula-bm.com.au</p>
            <p className="footer-text"><span className="phone">☎</span> <a href="tel:0401443548" className="phone-link">0401 443 548</a></p>
            <p className="footer-text">ABN: 526 725 932 52</p>
        </div>
    )
}

export default Footer