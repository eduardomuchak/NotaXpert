import { UserFactory } from 'infra/factories/UserFactory';
import LoginUI from 'presentation/components/ui/LoginUi';

export default function Login() {
  return <LoginUI authUser={UserFactory.authUser} />;
}
