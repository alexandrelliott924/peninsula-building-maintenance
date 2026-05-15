import "../styles/footer.css"
import logo from "../assets/PBM-white-icon.png"

function Footer() {
    return(
        <div className="footer">
            <img src={logo} alt="PBM logo" className="PBM-footer-logo" />
            <p className="footer-text"> <span className="enveloppe">✉</span> admin@peninsula-bm.com.au</p>
            <p className="footer-text"><span className="phone">☎</span> 0401 443 548</p>
            <p className="footer-text">ABN: 526 725 932 52</p>
        </div>
    )
}

export default Footer