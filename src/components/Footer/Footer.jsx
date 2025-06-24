import styles from "./footer.module.css";
import Link from "../Link/Link";
import PropTypes from "prop-types";

export default function Footer({ children }) {
    return (
        <footer className={styles.footer}>
            <div className={styles.masthead}>
                <p>
                    Built by{" "}
                    <Link href="https://rakeshcodes.me" target="_blank">
                        rakeshcodes
                    </Link>
                </p>
            </div>
            <div>{children}</div>
        </footer>
    );
}

Footer.propTypes = {
    children: PropTypes.node || PropTypes.string,
};
