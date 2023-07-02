import { Policy } from "./Policy";
import { SocialLinks } from "./SocialLinks";
import { Subscription } from "./Subscription";

export function Footer() {
  return (
    <div className="footer">
      <Subscription />
      <SocialLinks />
      <Policy/>
    </div>
  );
}
