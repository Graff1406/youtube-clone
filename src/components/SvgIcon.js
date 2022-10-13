import sprite from "../assets/svg-icons/sprite.svg";

function SvgIcon({ id, className, onClick }) {
  return (
    <svg className={className} onClick={onClick}>
      <use href={sprite + "#" + id}></use>
    </svg>
  );
}

export default SvgIcon;
