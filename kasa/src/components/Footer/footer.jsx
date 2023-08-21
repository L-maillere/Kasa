import logo from "../../assets/kasa_logo_footer.svg"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_wrapper">
                <img className="footer_logo" src={logo} alt="logo kasa" />
                <div className="footer_text">© 2020 Kasa. All rights reserved</div>
            </div>
        </footer>
    )
}

export default Footer