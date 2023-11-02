import { FC, memo, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface IUploadImage {
  changeImage?: (file: File) => void;
}

const UploadImage: FC<IUploadImage> = () => {
  const onDrop = useCallback((acceptedFiles: File[]): void => {
    console.log(acceptedFiles);
  }, []);

  const { getInputProps, getRootProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drap 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default memo(UploadImage);
