import { IChildren } from "../../models/models";

export function BannerWrapper({ children }: IChildren) {
  return (
    <div className="banner">
      {children}
    </div>
  );
}
