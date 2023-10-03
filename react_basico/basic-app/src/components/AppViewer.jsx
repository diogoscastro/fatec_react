import styles from "./AppViewer_module.css";
//camada de compilação de serviços
function somaNumeros(n1, n2) {
  return n1 + n2;
}
const AppViewer = () => {
  return (
    <>
      <div className={styles.avContainer}>AppViewer</div>;
      <p>{somaNumeros(5, 17)}</p>
    </>
  );
};

export default AppViewer;
