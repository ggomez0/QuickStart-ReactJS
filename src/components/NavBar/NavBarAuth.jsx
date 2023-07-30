import { Navigate } from "react-router-dom";
import  {auth} from "../../firebase";

export function NavBarAuth() {
    const handleLogout = async () => {
        try {
          await auth.signOut();
          Navigate("/");
        } catch (error) {
          // Manejar errores de cierre de sesión
          console.error('Error al cerrar sesión:', error);
        }
      };


  return(
  <nav className="">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
    <a href="#" class="flex items-center">
      <img
        src="./src/assets/bnb.png"
        className="h-8 mr-3"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        TITULO
      </span>
    </a>
    <div className="flex items-center md:order-2">
     
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
        focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 
        md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 
        focus:outline-none dark:focus:ring-blue-800" onClick={handleLogout}
      >
        Salir
      </button>
  </div> 
  </div>
</nav>)
}



export default NavBarAuth;
