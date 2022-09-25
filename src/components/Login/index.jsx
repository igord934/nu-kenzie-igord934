import "./style.css";
import illustration from "../../assets/img/illustration.svg";
function Login({ login }) {
  return (
    <div className="login">
      <div className="loginL">
        <h3 className="logo">
          <span className="logoL">Nu</span>{" "}
          <span className="logoRW">Kenzie</span>
        </h3>
        <h2 className="title0">Centralize o controle das suas finanças</h2>
        <span className="headline">de forma rápida e segura</span>
        <button className="buttonPrimary" onClick={login}>
          Iniciar
        </button>
      </div>
      <div className="loginR">
        <img src={illustration} alt="" />
      </div>
    </div>
  );
}
export default Login;
