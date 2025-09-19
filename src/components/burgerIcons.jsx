import { Bars3Icon } from "@heroicons/react/16/solid"

export function BurgerIcon({ sidebar, isToggle, setIsToggle}) {

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
    <button onClick={showSidebar}
      className="
    absolute 
    right-1 top-0 w-10 h-10 
    text-(--color-hue2) m-3 cursor-pointer 
    w-12 h-12 z-999 hide-in-mobile">
      <Bars3Icon />
    </button>
  )
}
