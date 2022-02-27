import Link from 'next/link';
import styles from "../styles/Footer.module.css";

type Footer = {
	isDetailpage: boolean;
	isFullWidth: boolean;
}

export default function Footer({isDetailpage, isFullWidth}: Footer) {
	const renderIndexFooter = () => {
		return (
			<>
				<footer className={styles.footer}>
					<div className={styles.footer__pre}>
						<p className={styles.footer__preHeader}>Verkaufe dein Essen</p>
						<p className={styles.footer__preText}>Mit Cook Eat kannst Du die tollen Essen mit lieben Menschen in deiner Nachbarschaft teilen. Das spart dir Kosten und anderen Zeit. Probier es gleich aus!</p>
						<a href="https://www.cookeat.ch" className="btn btn--orange">Jetzt Anbieten</a>
						<div className={styles.footer__preRight}/>
					</div>
					<div className={styles.footer__legal}>
						<p>&copy; 2022 Cook Eat. Alle Rechte vorbehalten.</p>
					</div>
				</footer>
			</>
		)
	}

	const renderDetailFooter = () => {
		return (
			<>
				{isFullWidth ?
					<footer className={styles.footer__fullWidth}>
						<div className={styles.footer__detailPage}>
							<a href="https://www.cookeat.ch" className="btn btn--green">Auf Cook Eat anbieten</a>
							<Link href="/">
								<a className={styles.footer__detailPageLink}>Zurück zur Rezeptliste</a>
							</Link>
						</div>
						<div className={styles.footer__legal}>
							<p>&copy; 2022 Cook Eat. Alle Rechte vorbehalten.</p>
						</div>
					</footer>
					:
					<footer className={styles.footer}>
						<div className={styles.footer__detailPage}>
							<a href="https://www.cookeat.ch" className="btn btn--green">Essen Anbieten</a>
							<Link href="/">
								<a className={styles.footer__detailPageLink}>Zurück zur Rezeptliste</a>
							</Link>
						</div>
						<div className={styles.footer__legal}>
							<p>&copy; 2022 Cook Eat. Alle Rechte vorbehalten.</p>
						</div>
					</footer>
				}
			</>
		)
	}
	return (
		<>
			{isDetailpage ? renderDetailFooter() : renderIndexFooter()}
		</>
	)
}