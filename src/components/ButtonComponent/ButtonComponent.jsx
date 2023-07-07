import styles from "./button.module.css";

function ButtonComponent(props) {
  const { children, colorFondo } = props;

  // CSS inline con atributo style
  const stylesBtn = {
    backgroundColor: "colorFondo",
  };

  return (
    <>
      <button style={stylesBtn} className={styles.btn}>
        {children}
      </button>
    </>
  );
}

export default ButtonComponent;
