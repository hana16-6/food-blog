import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import avatar from "../../assets/Images/photos/avatar.jpg";
import {
  IconAdjustmentsAlt,
  IconUserBolt,
  IconTransitionLeft,
} from "@tabler/icons-react";
const AVATAR_DROPDOWN_ITEMS = [
  {
    icon: IconUserBolt,
    url: `/ok`,
    label: "Profile",
  },
  {
    icon: IconAdjustmentsAlt,
    url: "/hi",
    label: "Setting",
  },
];
const DropdownLabel = () => {
  return (
    <div className="flex items-center">
      <img
        src={avatar}
        className="rounded-full object-cover border border-emerald-400 p-1"
        width="36"
        height="36"
        alt=""
      />
      <div className="mx-2">
        <span className="block text-sm text-gray-700 font-bold">Hana Mo</span>
        <span className="text-xs block text-gray-500">hana16</span>
      </div>
    </div>
  );
};
function UserDropdown() {
  return (
    <div>
      <Dropdown noArrow label={<DropdownLabel />} className="avatar-dropdown">
        {AVATAR_DROPDOWN_ITEMS.map((item, index) => (
          <li key={index}>
            <Link className="dropdown-item" to={item.url}>
              <item.icon className="inline-block text-xl" />
              <span className="mx-2">{item.label}</span>
            </Link>
          </li>
        ))}
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item danger-item" href="#logout">
            <IconTransitionLeft className="inline-block text-xl" />
            <span className="mx-2">logout</span>
          </a>
        </li>
      </Dropdown>
    </div>
  );
}

export default UserDropdown;
