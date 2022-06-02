import { Avatar } from "@nextui-org/react";
import { useRouter } from "next/router";
import { MenuOptions } from "./menu_options";
import * as Component from "./styles";

const LateralMenu = () => {
  return (
    <Component.Container>
      <Component.ProfilePart>
        <Avatar
          size="sm"
          squared
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
        <Component.ProfileName>Patrick Moreira</Component.ProfileName>
      </Component.ProfilePart>
      <Component.Options>
        {MenuOptions.map((option, index) => (
          <Component.Option
            href={option.path}
            selected={
              option.path === String(useRouter().pathname)
                ? "isSelected"
                : "isNotSelected"
            }
            key={index}
          >
            <i>{option.icon}</i> <span>{option.name}</span>
          </Component.Option>
        ))}
      </Component.Options>
    </Component.Container>
  );
};

export default LateralMenu;
