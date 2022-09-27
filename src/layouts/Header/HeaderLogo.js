import React from "react";
import styles from "./HeaderComponents.module.css";

const HeaderLogo = ({ item }) => <img src={item} alt="logo" className={styles.headerLogoIcon} />;

export default HeaderLogo;
