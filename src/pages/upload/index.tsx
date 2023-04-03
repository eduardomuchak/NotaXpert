import { UploadUi } from 'presentation/components/ui/UploadUi';
import { withAuth } from 'security/withAuth';

function Upload() {
  return <UploadUi />;
}

export default withAuth(Upload);
