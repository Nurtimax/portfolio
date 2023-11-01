import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { getDownloadURL, ref } from 'firebase/storage';

import ImageUpload from '@/components/upload/ImageUpload';
import { imageDb } from '@/firebase';

const MainAdmin: FC = () => {
  const [url, setUrl] = useState<null | string>(null);

  useEffect(() => {
    const func = async () => {
      const reference = ref(imageDb, '');
      await getDownloadURL(reference).then((x: string) => {
        if (typeof x === 'string') {
          setUrl(x);
        }
      });
    };

    func();
  }, []);

  return (
    <div>
      <ImageUpload />
      {url && <Image src={url} width={300} height={300} alt="bilingual" />}
    </div>
  );
};

export default MainAdmin;
