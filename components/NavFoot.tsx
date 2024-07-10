import React from "react";

interface INav {
  name: string;
  path: string;
}

interface INavFoot {
  title: string;
  navigation: INav[];
}

const NavFoot: React.FC<INavFoot> = ({ title, navigation }) => {
  return (
    <div className="flex flex-col gap-2 text-base">
      <div className="font-semibold uppercase">{title}</div>

      <ul className="opacity-60 flex flex-col gap-2">
        {navigation.map((nav, index) => (
          <li key={index}>
            <a href={nav.path}>{nav.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavFoot;
