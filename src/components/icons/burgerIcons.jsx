import { Bars3Icon } from "@heroicons/react/16/solid"
import { XMarkIcon } from "@heroicons/react/16/solid"

export function BurgerIcon({ sidebar, isToggle, setIsToggle }) {

  function showSidebar() {
    if (!isToggle) {
      sidebar.current.style.left = "0";
      setIsToggle(true);
    } else {
      sidebar.current.style.left = "-100%";
      setIsToggle(false);
    }
  }

  return (
    <>
      <button onClick={showSidebar}
        className="
        fixed
        right-1 top-0 w-10 h-10 
        text-gray-400 m-3 cursor-pointer hidden sm:block lg:hidden
        z-999">
        {isToggle ? <XMarkIcon /> : <Bars3Icon />}
      </button>
    </>
  )
}
