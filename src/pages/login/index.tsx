import { UserFactory } from "infra/factories/UserFactory";
import LoginUI from "presentation/ui/LoginUi";

export default function Login() {
  return <LoginUI authUser={UserFactory.authUser} />;
}
